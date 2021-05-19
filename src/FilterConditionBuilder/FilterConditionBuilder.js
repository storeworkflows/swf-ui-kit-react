import classnames from "classnames";
import propTypes from "prop-types";
import * as React from "react";

import {REQUEST_UTILS, CONDITION_OPTIONS_UTILS, GENERAL_UTILS, DATA_UTILS, QUERY_UTILS} from "./utils";
import FilterConditionItem from "./Components/FilterConditionItem/FilterConditionItem";
import FilterBreadcrumbs from "./Components/FilterBreadcrumbs/FilterBreadcrumbs";
import FilterTemplates from "./Components/FilterTemplates/FilterTemplates";
import FilterSaver from "./Components/FilterSaver/FilterSaver";
import {BUTTONS_EFFECTS} from "./effects";
import Badge from "../Badge/Badge";
import {Button} from "../index";
import {noop} from "../utils";


export default class FilterCondition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            referenceFieldData: {},
            conditionsArray: [],
            isSave: false,
            referenceTableFieldsData: {},
            isFilterOpened: this.props.opened,
            breadcrumbsItems: [{label: 'All', conditionId: 'all'}],
            isFilterSaved: false,
            queryToSave: '',
            labelArr: [],
            selectedItem: {
                items: [],
                label: ""
            },
            alertData: {
                active: false,
                positive: true
            },
            tableFields: {
                columns: {}
            },
            defaultGroup: {
                displayValue: "",
                sys_id: ""
            },
            query: this.props.query,
            operatorArr: [],
            clickedListIndex: null,
            filterList: [],
            active: false,
            count: 0,
            advanced: false
        }
        // this.parseConditionValue = QUERY_UTILS.parseConditionValue.bind(this);
        // this.parseConditionValueWithRef = QUERY_UTILS.parseConditionValueWithRef.bind(this);
        this.clickBtn = BUTTONS_EFFECTS.clickBtn.bind(this);
        this.setConditionOptions = CONDITION_OPTIONS_UTILS.setConditionOptions.bind(this);
    }

    fetchTableDataSuccessed = async ({result, properties}) => {
        let fieldsDataID = GENERAL_UTILS.generateID();
        const {blockFields, allowFileds} = properties;
        const {query} = this.state;
        let fieldsDropdownData = DATA_UTILS.getDropdownFieldsItems({
            tableFields: result.columns,
            index: fieldsDataID,
            blockFields,
            allowFileds
        });
        let conditionsArray = [
            {
                id: GENERAL_UTILS.generateID(),
                condition: "",
                operator: "",
                relatedConditions: [
                    {
                        id: GENERAL_UTILS.generateID() + 1,
                        condition: "",
                        operator: "",
                        conditionOptions: {
                            operator: {
                                operator: "",
                                editior: ""
                            },
                            field: "",
                            value: "",
                            fieldsData: {
                                [fieldsDataID]: result.columns,
                            },
                            fieldsDropdownData: [
                                {
                                    items: fieldsDropdownData
                                }
                            ]
                        },
                        relatedConditions: []
                    }
                ]
            }
        ]
        if (query) {
            let position = 0;
            let copyQuery = query;
            if (copyQuery.indexOf('^EQ') > -1) {
                copyQuery = copyQuery.slice(0, copyQuery.indexOf('^EQ'));
            }

            while (true) {
                let operatorPosition = copyQuery.indexOf('^NQ', position);
                if (operatorPosition === -1) {
                    conditionsArray[conditionsArray.length - 1].condition = copyQuery.slice(position);
                    break;
                }
                conditionsArray[conditionsArray.length - 1].condition = copyQuery.slice(position, operatorPosition);
                conditionsArray.push({
                    id: GENERAL_UTILS.generateID() + operatorPosition,
                    condition: '',
                    operator: '^NQ',
                    relatedConditions: [{
                        id: GENERAL_UTILS.generateID() + operatorPosition + 1,
                        condition: '',
                        operator: '',
                        conditionOptions: {
                            operator: {operator: '', editior: ''},
                            field: '',
                            value: '',
                            fieldsData: {[fieldsDataID]: result.columns},
                            fieldsDropdownData: [{items: fieldsDropdownData}]
                        },
                        relatedConditions: []
                    }]
                })
                position = operatorPosition + 3;
            }
            conditionsArray.map((globalCondition) => {
                let position = 0;
                let lastOperator;
                while (true) {
                    let operatorPosition = globalCondition.condition.indexOf('^', position);
                    if (operatorPosition === -1) {
                        switch (lastOperator) {
                            case '^OR':
                                globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].relatedConditions[globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].relatedConditions.length - 1].condition = globalCondition.condition.slice(position);
                                break;
                            default:
                                globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].condition = globalCondition.condition.slice(position);
                        }
                        break;
                    }
                    switch (lastOperator) {
                        case '^OR':
                            globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].relatedConditions[globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].relatedConditions.length - 1].condition = globalCondition.condition.slice(position, operatorPosition);
                            break;
                        default:
                            globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].condition = globalCondition.condition.slice(position, operatorPosition);
                    }

                    if (operatorPosition === copyQuery.indexOf('^OR', position)) {
                        globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].relatedConditions.push({
                            id: GENERAL_UTILS.generateID() + operatorPosition,
                            condition: '',
                            operator: '^OR'
                        });
                        position = operatorPosition + 3;
                        lastOperator = '^OR';
                    } else {
                        globalCondition.relatedConditions.push({
                            id: GENERAL_UTILS.generateID() + operatorPosition,
                            condition: '',
                            operator: '^',
                            relatedConditions: []
                        });
                        position = operatorPosition + 1;
                        lastOperator = '^';
                    }
                }
            })

            let operators = DATA_UTILS.getOperators({tableFields: result.columns});
            conditionsArray = await Promise.all(conditionsArray.map(async globalCond => {
                globalCond.relatedConditions = await Promise.all(globalCond.relatedConditions.map(async parentCond => {
                    let condition = parentCond.condition.replace("OR", "");
                    let params = {
                        condition: condition,
                        operators,
                        tableFields: result.columns,
                        globalID: globalCond.id,
                        currentID: parentCond.id
                    }
                    let conditionOptions = condition.slice(0, condition.indexOf(GENERAL_UTILS.findOperator(condition, operators))).split(".").length > 1 ? await QUERY_UTILS.parseConditionValueWithRef(params) : QUERY_UTILS.parseConditionValue(params);
                    parentCond = {
                        ...parentCond,
                        conditionOptions,
                    }

                    parentCond.relatedConditions = await Promise.all(parentCond.relatedConditions.map(async childCond => {
                        let params = {
                            condition: childCond.condition,
                            operators,
                            tableFields: result.columns,
                            globalID: globalCond.id,
                            currentID: childCond.id
                        }
                        let conditionOptions = childCond.condition.slice(0, childCond.condition.indexOf(GENERAL_UTILS.findOperator(childCond.condition, operators))).split(".").length > 1 ? await QUERY_UTILS.parseConditionValueWithRef(params) : QUERY_UTILS.parseConditionValue(params);
                        return {
                            ...childCond,
                            conditionOptions,
                        }
                    }))
                    return parentCond;
                }))
                return globalCond;
            }))
        }
        this.setState({
            tableFields: result,
            conditionsArray,
        })
    }

    async componentDidMount() {
        const {table, user, onSendQuery, filtersListQuery} = this.props;
        const {query, conditionsArray, isSave} = this.state;
        const queryParams = {
            sysparm_operators: true,
            sysparm_get_extended_tables: true,
            sysparm_keywords: true
        };
        const groupId = filtersListQuery.replace(/.*=/, "");

        await REQUEST_UTILS.fetchGroup({sys_id: groupId}).then(res => {
            this.setState({defaultGroup: {displayValue: res[0].name, sys_id: groupId}})
        })

        REQUEST_UTILS.fetchTableData({table, queryParams}).then(result => {
            this.fetchTableDataSuccessed({result, properties: this.props});
        });

        if (!!query)
            QUERY_UTILS.generateQuery({payload: {conditionsArray, onSendQuery, isSave, operation: "run"}});

        REQUEST_UTILS.fetchFilterTemplates({table, user, filter: filtersListQuery})
            .then(res => this.setState({filterList: res}));
    }

    isFilterSaved = ({isSaved}) => {
        this.setState({isFilterSaved: isSaved, isSave: false});
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.table !== this.props.table) {
            const {query, table, filtersListQuery} = this.props;
            const groupId = filtersListQuery.replace(/.*=/, "");

            this.setQuery({query: query});
            this.setState({active: Boolean(query), breadcrumbsItems: [{label: 'All', conditionId: 'all'}]});

            REQUEST_UTILS.fetchFilterTemplates({table, filter: filtersListQuery})
            .then(res => this.setState({filterList: res}));
            

            await REQUEST_UTILS.fetchGroup({sys_id: groupId}).then(res => {
                this.setState({defaultGroup: {displayValue: res[0].name, sys_id: groupId}})
            })
        }

        if (this.props.query !== prevProps.query) {
            this.setQuery({query: this.props.query});
        }

        if (prevState.query !== this.state.query || prevProps.table !== this.props.table) {
            const {table} = this.props;
            const queryParams = {
                sysparm_operators: true,
                sysparm_get_extended_tables: true,
                sysparm_keywords: true
            };

            await REQUEST_UTILS.fetchTableData({table, queryParams}).then(result => {
                this.fetchTableDataSuccessed({result, properties: this.props});
            });
        }

        if (prevState.advanced !== this.state.advanced) {
            this.setState({
                isFilterOpened: this.state.advanced
            })
        }

        if (this.state.isFilterSaved) {
            const {table, user} = this.props;

            REQUEST_UTILS.fetchFilterTemplates({table, user})
                .then(res => this.setState({filterList: res}));
            this.setState({isFilterSaved: false});
        }
    }

    getConditionsIDs = ({currentConditionID, globalConditionID}) => {
        this.setState({currentConditionID, globalConditionID})
    }

    setQuery = ({query}) => {
        const count = query ? query?.split(/\^|\^OR/).length : 0;

        this.setState({
            query,
            active: Boolean(query),
            count
        })
    }

    setAdvanced = (value) => {
        this.setState({
            advanced: value
        })
    }

    render() {
        const {
            active,
            advanced,
            count,
            isFilterOpened,
            conditionsArray,
            breadcrumbsItems,
            isSave,
            queryToSave,
            filterList,
            defaultGroup
        } = this.state;
        const {table, user} = this.props;

        // console.log("%c%s", "color: green", "REACT Filter Conditions Array", this.state.conditionsArray)

        const isActive = [advanced, active].some(Boolean);

        return (
            <>
                <div className="collapsed-filter-header">
                    <div className="templates">
                        <FilterTemplates setQuery={this.setQuery} setAdvanced={this.setAdvanced} filterList={filterList} table={table}/>
                    </div>
                    <Button
                        label="Apply"
                        variant="primary"
                        size="md"
                        disabled={!isActive}
                        onClick={() => this.clickBtn({action: "applyQuery", payload: {type: "run"}})}
                        customStyle={
                            {
                                "border-color": "rgb(15,67,55)",
                                "hover-border-color": "rgb(15,67,55)",
                                "active-border-color": "none"
                            }
                        }/>
                    {isActive && <Badge text={`${count}`}>
                        <Button
                            icon={isFilterOpened ? "funnel-fill" : "funnel"}
                            size="md"
                            tooltipContent="Filter"
                            variant="tertiary"
                            onClick={() => this.clickBtn({action: "filterToogle"})}
                        />
                    </Badge>}
                </div>
                <div className={
                    classnames({
                        "swf-filter-container": true,
                        "--is-collapsed": isFilterOpened
                    })
                }>
                    <div className="breadcrumbs">
                        <FilterBreadcrumbs items={breadcrumbsItems} clickBtn={this.clickBtn}/>
                    </div>
                    <div className="filter-header">
                        <div className="actions">
                            <div className="buttons">
                                <div className="btn">
                                    <Button label="Save" variant="secondary" size="md" customStyle={{
                                        "border-color": "rgb(172,180,181)",
                                        "hover-border-color": "rgb(172,180,181)",
                                        "active-border-color": "rgb(172,180,181)"
                                    }}
                                            onClick={() => this.clickBtn({action: "toogleSave"})}
                                    />
                                </div>
                                <div className="btn">
                                    <Button
                                        label="Clear all"
                                        variant="secondary"
                                        size="md"
                                        customStyle={{
                                            "border-color": "rgb(172,180,181)",
                                            "hover-border-color": "rgb(172,180,181)",
                                            "active-border-color": "rgb(172,180,181)"
                                        }}
                                        onClick={() => this.clickBtn({action: "clearAll"})}
                                    />
                                </div>
                            </div>
                        </div>
                        {
                            isSave && <FilterSaver isFilterSaved={this.isFilterSaved} table={table} query={queryToSave}
                                                   user={user} defaultGroup={defaultGroup}/>
                        }
                    </div>
                    <div className="filter-body">
                        <div className="conditions-container">
                            {
                                conditionsArray.map((globalCondition, index) => {
                                    let relatedConditions = [];
                                    globalCondition.relatedConditions.forEach(cond => {
                                        relatedConditions.push(cond);
                                        cond.relatedConditions.forEach(cond => {
                                            relatedConditions.push(cond)
                                        })
                                    })
                                    return (
                                        <div className={
                                            classnames({
                                                "global-condition": true, "global-conditions_first": index === 0
                                            })
                                        }>
                                            {index !== 0 && <div className="title">OR</div>}
                                            {
                                                relatedConditions.map(condition => {
                                                    return (
                                                        <div className={classnames({
                                                            "condition-container": true,
                                                            "failed": condition.failed
                                                        })} key={condition.id}>
                                                            <FilterConditionItem
                                                                conditionObj={condition}
                                                                conditionID={condition.id}
                                                                globalConditionID={globalCondition.id}
                                                                globalCondition={globalCondition}
                                                                operatorType={condition.operator}
                                                                clickBtn={this.clickBtn}
                                                                getConditionsIDs={this.getConditionsIDs}
                                                                setConditionOptions={this.setConditionOptions}
                                                                selectedItem={condition.conditionOptions.fieldItems}
                                                                generalTable={table}
                                                                conditionsArray={conditionsArray}
                                                            />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="new-criteria">
                            <span className="title">or</span>
                            <div>
                                <Button
                                    label="New Criteria"
                                    variant="secondary"
                                    size="md"
                                    onClick={() => this.clickBtn({
                                        action: "addNewOperator",
                                        payload: {
                                            value: "^NQ",
                                            currentConditionID: this.state.currentConditionID,
                                            globalConditionID: this.state.globalConditionID
                                        }
                                    })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

FilterCondition.defaultProps = {
    table: "",
    query: "",
    allowFields: [],
    blockFields: [],
    user: "",
    opened: false,
    onSendQuery: noop,
    filtersListQuery: ""
}

FilterCondition.propTypes = {
    table: propTypes.string.isRequired,
    query: propTypes.string,
    user: propTypes.string,
    blockFields: propTypes.array,
    allowFields: propTypes.array,
    opened: propTypes.bool,
    onSendQuery: propTypes.func,
    filtersListQuery: propTypes.string
}