import classnames from "classnames";
import propTypes from "prop-types";
import * as React from "react";

import FilterConditionItem from "./Components/FilterConditionItem/FilterConditionItem";
import FilterBreadcrumbs from "./Components/FilterBreadcrumbs/FilterBreadcrumbs";
import FilterTemplates from "./Components/FilterTemplates/FilterTemplates";
import FilterSaver from "./Components/FilterSaver/FilterSaver";
import { Button } from "../index";
import {
    generateCurrentConditionQuery,
    parseConditionValueWithRef,
    getValueAdditionalData,
    parseConditionValue,
} from "./utils/utils"

import { REQUEST_UTILS, CONDITION_OPTIONS_UTILS, GENERAL_UTILS, DATA_UTILS } from "./utils";

import { noop } from "../utils"

export default class FilterCondition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            referenceFieldData: {},
            conditionsArray: [],
            isSave: false,
            referenceTableFieldsData: {},
            isFilterOpened: this.props.opened,
            breadcrumbsItems: [{ label: 'All', conditionId: 'all' }],
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
            query: this.props.query,
            operatorArr: [],
            clickedListIndex: null,
            filterList: [],
        }
        this.getValueAdditionalData = getValueAdditionalData.bind(this);
        this.parseConditionValue = parseConditionValue.bind(this);
        this.parseConditionValueWithRef = parseConditionValueWithRef.bind(this);
    }

    getClickedListIndex = ({index}) => {
        this.setState({clickedListIndex: index});
    }

    fetchTableDataSuccessed = async ({result, properties}) => {
        let fieldsDataID = GENERAL_UTILS.generateID();
        const { blockFields, allowFileds } = properties;
        const { query } = this.state;
        let fieldsDropdownData = DATA_UTILS.getDropdownFieldsItems({ tableFields: result.columns, index: fieldsDataID, blockFields, allowFileds });
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
                conditionsArray.push({ id: GENERAL_UTILS.generateID() + operatorPosition, condition: '', operator: '^NQ', relatedConditions: [{ id: GENERAL_UTILS.generateID() + operatorPosition + 1, condition: '', operator: '', conditionOptions: { operator: { operator: '', editior: '' }, field: '', value: '', fieldsData: { [fieldsDataID]: result.columns }, fieldsDropdownData: [{ items: fieldsDropdownData }] }, relatedConditions: [] }] })
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
                        globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].relatedConditions.push({ id: GENERAL_UTILS.generateID() + operatorPosition, condition: '', operator: '^OR' });
                        position = operatorPosition + 3;
                        lastOperator = '^OR';
                    } else {
                        globalCondition.relatedConditions.push({ id: GENERAL_UTILS.generateID() + operatorPosition, condition: '', operator: '^', relatedConditions: [] });
                        position = operatorPosition + 1;
                        lastOperator = '^';
                    }
                }
            })

            let operators = DATA_UTILS.getOperators({tableFields: result.columns});
            conditionsArray = await Promise.all(conditionsArray.map(async globalCond => {
                globalCond.relatedConditions = await Promise.all(globalCond.relatedConditions.map(async parentCond => {
                    let condition = parentCond.condition.replace("OR", "");
                    let params = { condition: condition, operators, tableFields: result.columns, globalID: globalCond.id, currentID: parentCond.id }
                    let conditionOptions = condition.slice(0, condition.indexOf(GENERAL_UTILS.findOperator(condition, operators))).split(".").length > 1 ? await this.parseConditionValueWithRef(params) : this.parseConditionValue(params);
                    parentCond = {
                        ...parentCond,
                        conditionOptions,
                    }

                    parentCond.relatedConditions = await Promise.all(parentCond.relatedConditions.map(async childCond => {
                        let params = { condition: childCond.condition, operators, tableFields: result.columns, globalID: globalCond.id, currentID: childCond.id }
                        let conditionOptions = childCond.condition.slice(0, childCond.condition.indexOf(GENERAL_UTILS.findOperator(childCond.condition, operators))).split(".").length > 1 ? await this.parseConditionValueWithRef(params) : this.parseConditionValue(params);
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
            conditionsArray
        })
    }

    runButtonClicked = ({type}) => {
        switch (type) {
            case "run":
            case "save":
                const { conditionsArray } = this.state;
                let copyConditionArray = GENERAL_UTILS.clone(conditionsArray);
                copyConditionArray = copyConditionArray.map(globalCond => {
                globalCond.relatedConditions.map(parentCond => {
                    parentCond.failed = false;
                    parentCond.relatedConditions.map(childCond => {
                        childCond.failed = false;
                        return childCond;
                    })
                    return parentCond;
                })
                return globalCond;
                });
                this.setState({
                    conditionsArray: copyConditionArray
                });
                this.generateQuery({operation: type})
        }
    }

    generateQuery = ({ operation }) => {
        const { conditionsArray, isSave } = this.state;
        const { onSendQuery } = this.props;

        let resultQuery = "";
        let error = false;
        let breadcrumbsItems = [{ label: "All", conditionId: "all"}];
        conditionsArray.forEach(globalCond => {
            resultQuery += globalCond.operator;
            globalCond.relatedConditions.forEach((parentCond, index) => {
                resultQuery += parentCond.operator;
                let breadcrumbItem = { label: `${globalCond.operator && index === 0 ? 'or' : ''}`, conditionId: parentCond.id, globalConditionId: globalCond.id };
                let generatedCondition = generateCurrentConditionQuery(parentCond, operation, breadcrumbItem)
                let curCondition = generatedCondition.conditionQuery;
                breadcrumbItem = generatedCondition.breadcrumbItem;
                if (curCondition) {
                    resultQuery += curCondition;
                } else if (operation === 'run' && !curCondition && !parentCond.conditionOptions.field && conditionsArray.length === 1 && globalCond.relatedConditions.length === 1 && !parentCond.relatedConditions.length) {
                    resultQuery = '';
                } else {
                    error = true;
                }

                parentCond.relatedConditions.forEach(childCond => {
                    resultQuery += childCond.operator;
                    let generatedCondition = generateCurrentConditionQuery(childCond, operation, breadcrumbItem);
                    let curCondition = generatedCondition.conditionQuery;
                    breadcrumbItem = generatedCondition.breadcrumbItem;
                    if (curCondition) {
                        resultQuery += curCondition;
                    } else {
                        error = true;
                    }
                })
                breadcrumbItem.label = breadcrumbItem.label.trim();
                breadcrumbsItems.push(breadcrumbItem);
            })

            if (error) return null;

            onSendQuery(resultQuery);

            switch (operation) {
                case 'run':
                    let isBreadcrumbFalse = !!breadcrumbsItems.find(item => !item.label)
                    !isBreadcrumbFalse ? this.setState({ breadcrumbsItems }) : noop
                    break;
                case 'save':
                    this.setState({
                        queryToSave: resultQuery,
                        isSave: !isSave
                    });
                    break;
            }
        })
    }

    async componentDidMount() {
        const { table, query, user } = this.props;
        const queryParams = {
            sysparm_operators: true,
            sysparm_get_extended_tables: true,
            sysparm_keywords: true
        };

        await REQUEST_UTILS.fetchTableData({table, queryParams}).then(async result => {
            await this.fetchTableDataSuccessed({result, properties: this.props})
        })
        if (!!query)
            this.generateQuery({operation: "run"})
        REQUEST_UTILS.fetchFilterTemplates({table, user})
            .then(res => this.setState({filterList: res}));
    }

    isFilterSaved = ({isSaved}) => {
        this.setState({isFilterSaved: isSaved, isSave: false});
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.table !== this.props.table)
            this.setState({query: "", breadcrumbsItems: [{ label: 'All', conditionId: 'all' }]})
        if (prevState.query !== this.state.query || prevProps.table !== this.props.table)
        {
            const { table } = this.props;
            const queryParams = {
                sysparm_operators: true,
                sysparm_get_extended_tables: true,
                sysparm_keywords: true
            };
    
            await REQUEST_UTILS.fetchTableData({table, queryParams}).then(result => {
                this.fetchTableDataSuccessed({result, properties: this.props})
            });
        }
        if (this.state.isFilterSaved) {
            const { table, user } = this.props;
            REQUEST_UTILS.fetchFilterTemplates({table, user})
                .then(res => this.setState({filterList: res}));
            this.setState({isFilterSaved: false})
        }
    }

    addNewOperator = ({value, currentConditionID, globalConditionID}) => {
        const { conditionsArray, tableFields } = this.state;
        const newConditionsArray = conditionsArray;
        const globalConditionIndexInArr = conditionsArray.findIndex(cond => cond.id === globalConditionID)
        const fieldsDataID = GENERAL_UTILS.generateID();
        const { blockFields, allowFields } = this.props;
        const fieldsDropdownData = DATA_UTILS.getDropdownFieldsItems({ tableFields: tableFields.columns, index: fieldsDataID, blockFields, allowFields });
        switch(value) {
            case "^":
                newConditionsArray[globalConditionIndexInArr].relatedConditions.push({ id: GENERAL_UTILS.generateID(), condition: '', operator: value, conditionOptions: { operator: { operator: '', editior: '' }, field: '', value: '', fieldsData: { [fieldsDataID]: tableFields.columns }, fieldsDropdownData: [{ items: fieldsDropdownData }] }, relatedConditions: [] });
                this.setState({
                    conditionsArray: newConditionsArray
                })
                break;
            case '^OR':
                let currentConditionIndexInArr = newConditionsArray[globalConditionIndexInArr].relatedConditions.findIndex(cond => cond.id === currentConditionID);
                newConditionsArray[globalConditionIndexInArr].relatedConditions[currentConditionIndexInArr].relatedConditions.push({ id: GENERAL_UTILS.generateID(), condition: '', operator: value, conditionOptions: { operator: { operator: '', editior: '' }, field: '', value: '', fieldsData: { [fieldsDataID]: tableFields.columns }, fieldsDropdownData: [{ items: fieldsDropdownData }] }})
                this.setState({conditionsArray: newConditionsArray});
                break;
            case '^NQ':
                newConditionsArray.push({id: GENERAL_UTILS.generateID(), condition: '', operator: value, relatedConditions: [{ id: GENERAL_UTILS.generateID() + 1, condition: '', operator: '', conditionOptions: { operator: { operator: '', editior: '' }, field: '', value: '', fieldsData: { [fieldsDataID]: tableFields.columns }, fieldsDropdownData: [{ items: fieldsDropdownData }] }, relatedConditions: [] }]});
                this.setState({conditionsArray: newConditionsArray})
            }
    }

    clearAll = ({value}) => {
        if (value === "delete-filter") {
            const { tableFields } = this.state;
            const fieldsDataID = GENERAL_UTILS.generateID();
            const { blockFields, allowFileds } = this.props;
            const fieldsDropdownData = DATA_UTILS.getDropdownFieldsItems({ tableFields: tableFields.columns, index: fieldsDataID, blockFields, allowFileds });
            this.setState({
                conditionsArray: [{ id: GENERAL_UTILS.generateID(), condition: '', operator: '', relatedConditions: [{ id: GENERAL_UTILS.generateID() + 1, condition: '', operator: '', conditionOptions: { operator: { operator: '', editior: '' }, field: '', value: '', fieldsData: { [fieldsDataID]: tableFields.columns }, fieldsDropdownData: [{ items: fieldsDropdownData }] }, relatedConditions: [] }] }],
                isSave: false,
                breadcrumbsItems: [{ label: 'All', conditionId: 'all' }]
            })
        }
    }

    setConditionOptionsOperator = ({value, conditionOptions}) => {
        const { activeField, activeFieldsData } = conditionOptions;
        const { currentConditionID, globalConditionID } = this.state;
        let valueAdditionalData = [];
        valueAdditionalData = activeField ? this.getValueAdditionalData({ state: this.state, tableFields: activeFieldsData, editor: value.editor, field: activeField, currentID: currentConditionID, globalID: globalConditionID}) : [];
        conditionOptions = {
            ...conditionOptions,
            operator: value,
            value: "",
            valueAdditionalData
        };

        return conditionOptions;
    }

    setConditionOptionsValue = ({value, conditionOptions, conditionOption}) => {
        const { editor } = conditionOptions.operator;
        switch (editor) {
            case 'choice_multiple':
            case 'textarea':
                conditionOptions.value = value;
                return conditionOptions;
            case 'between_field':
            case 'relative_field':
            case 'glide_duration':
            case 'glide_date_equivalent':
            case 'glide_date_comparative':
                if (!conditionOptions.value)
                    conditionOptions.value = {};
                conditionOptions.value[value.index] = value.value;
                return conditionOptions;
            case 'trend_field':
                if (value.index == 1) {
                    conditionOptions.valueAdditionalData = DATA_UTILS.getTrendData(value.value);
                }
                if (!conditionOptions.value) {
                    conditionOptions.value = {};
                }
                conditionOptions.value[value.index] = value.value;
                return conditionOptions;
            default:
                conditionOptions[conditionOption] = value;
                return conditionOptions;
        }
    }

    setConditionOptions = ({value, conditionOption, currentConditionID, globalConditionID}) => {
        const { conditionsArray } = this.state;

        const properCurrentConditionID = currentConditionID ? currentConditionID : this.state.currentConditionID;
        const properGlobalConditionID = globalConditionID ? globalConditionID : this.state.globalConditionID;
        let copyConditionArray = GENERAL_UTILS.clone(conditionsArray);
        let globalConditionInArrInd = copyConditionArray.findIndex(cond => cond.id === properGlobalConditionID);
        let currentConditionInArrInd = copyConditionArray[globalConditionInArrInd].relatedConditions.findIndex(cond => cond.id === properCurrentConditionID);
        let currentConditionInArr;
        let copyConditionOptions;
        if (currentConditionInArrInd > -1) {
            currentConditionInArr = copyConditionArray[globalConditionInArrInd].relatedConditions[currentConditionInArrInd];
            copyConditionOptions = { ...copyConditionArray[globalConditionInArrInd].relatedConditions[currentConditionInArrInd].conditionOptions };
        }
        else {
            copyConditionArray[globalConditionInArrInd].relatedConditions.forEach((cond, parentInd) => {
                cond.relatedConditions.forEach((cond, childInd) => {
                    if (cond.id === properCurrentConditionID) {
                        currentConditionInArr = copyConditionArray[globalConditionInArrInd].relatedConditions[parentInd].relatedConditions[childInd];
                        copyConditionOptions = { ...cond.conditionOptions }
                    }
                })
            })
        }
        switch (conditionOption) {
            case "field":
                currentConditionInArr.conditionOptions = this.setConditionOptionsField({conditionOptions: copyConditionOptions, value, properCurrentConditionID, properGlobalConditionID});
                break;
            case "fieldsData":
                currentConditionInArr.conditionOptions = this.setConditionOptionsFieldData({conditionOptions: copyConditionOptions, value});
                break;
            case "operator":
                currentConditionInArr.conditionOptions = this.setConditionOptionsOperator({value, conditionOptions: copyConditionOptions, properCurrentConditionID, properGlobalConditionID})
                break;
            case "value":
                currentConditionInArr.conditionOptions = this.setConditionOptionsValue({value, conditionOptions: copyConditionOptions, conditionOption});
                break;
            case "valueAditionalData":
                currentConditionInArr.conditionOptions = this.setConditionOptionsValueAdditional({value, conditionOptions: copyConditionOptions})
                break;

        }

        this.setState({conditionsArray: copyConditionArray})
    }

    setConditionOptionsValueAdditional = ({ value, conditionOptions}) => {
        conditionOptions.valueAdditionalData = value;

        return conditionOptions;
    }

    fetchReferenceDataSuccessed = (result) => {
        const { referenceFieldData, conditionsArray } = this.state;
        let valueFields = result.map(field => ({id: field.sys_id, label: field[referenceFieldData.field.reference_display_field], dropdown: "value"}));
        const copyConditionsArray = CONDITION_OPTIONS_UTILS.setConditionOptions({value: valueFields, conditionOption: "valueAditionalData", currentConditionID: referenceFieldData.currentConditionID, globalConditionID: referenceFieldData.globalConditionID, conditionsArray});
        this.setState({conditionsArray: copyConditionsArray})
    }


    setConditionOptionsFieldData = ({conditionOptions, value}) => {
        const fieldsDataID = GENERAL_UTILS.generateID();
        let copyConditionOptions;
        const newFieldsDropdownData = DATA_UTILS.getDropdownFieldsItems({tableFields: value.result, index: fieldsDataID});
        if (value.listIndex < conditionOptions.fieldsDropdownData.length - 1) {
            let deletedFieldsData = conditionOptions.fieldsDropdownData.splice(value.listIndex + 1);
            deletedFieldsData = deletedFieldsData.map(data => data.items[0].index);
            deletedFieldsData.forEach(key => delete conditionOptions.fieldsData[key]);
        }
        conditionOptions.fieldsDropdownData.push({ items: newFieldsDropdownData });
        conditionOptions.fieldsData[fieldsDataID] = value.result;
        conditionOptions.fieldItems = value.selectedItems;
        copyConditionOptions = conditionOptions;
        copyConditionOptions = this.setConditionOptionsOperator({value: { operator: '', editor: '' }, conditionOptions: copyConditionOptions});

        return copyConditionOptions;
    } 


    getConditionsIDs = ({currentConditionID, globalConditionID}) => {
        this.setState({currentConditionID, globalConditionID})
    } 
 

    setConditionOptionsField = ({conditionOptions, value}) => {
        const { fieldsData } = conditionOptions;
        let currentFieldsData = fieldsData[value.items[value.items.length - 1].index];
        let currentValue = value.items[value.items.length - 1].id;
        let currentValueIndex = conditionOptions.fieldsDropdownData.findIndex(data => data.items[0].index === value.items[value.items.length - 1].index);
        let deletedFieldsData = conditionOptions.fieldsDropdownData.splice(currentValueIndex + 1);
        deletedFieldsData = deletedFieldsData.map(data => data.items[0].index);
        deletedFieldsData.forEach(key => delete conditionOptions.fieldsData[key]);
        let operatorsArray = currentFieldsData[currentValue].operators.map(operation => ({ id: operation.operator, label: operation.label, dropdown: 'operation', editor: operation.advancedEditor }));
        let copyConditionOptions = {
            ...conditionOptions,
            field: value.value,
            fieldItems: value,
            operator: { operator: operatorsArray[0].id, editor: operatorsArray[0].editor },
            value: '',
            operatorsArray,
            activeFieldsData: { ...currentFieldsData },
            activeField: currentValue
        };
        copyConditionOptions = this.setConditionOptionsOperator({value: { operator: operatorsArray[0].id, editor: operatorsArray[0].editor }, conditionOptions: copyConditionOptions});

        return copyConditionOptions;
    }

    breadcrumbItemClicked = ({data, operation}) => {
        const { breadcrumbsItems } = this.state;
        let itemIndex = breadcrumbsItems.findIndex(breadcrumb => breadcrumb.conditionId === data.conditionId);
        switch (operation) {
            case "remove-next":
                breadcrumbsItems.splice(itemIndex, 1);
                this.setState({breadcrumbsItems});
                this.deleteCondition({currentConditionID: data.conditionId, globalConditionID: data.globalConditionId});
                break;
            case "remove-subsequent":
                let deletedItems = (itemIndex === 0) ? breadcrumbsItems.splice(1) : breadcrumbsItems.splice(itemIndex + 1);
                
                this.setState({breadcrumbsItems});
                
                deletedItems.forEach(item => this.deleteCondition({currentConditionID: item.conditionId, globalConditionID: item.globalConditionId}));
                break;
        }
    }

    setQuery = ({query}) => {
        this.setState({query})
    }

    deleteCondition = ({currentConditionID, globalConditionID}) => {
        const { conditionsArray } = this.state;
        const newConditionsArray = conditionsArray;
        const globalConditionIndexInArr = newConditionsArray.findIndex(cond => cond.id === globalConditionID);
        const currentConditionIndexInArr = newConditionsArray[globalConditionIndexInArr].relatedConditions.findIndex(cond => cond.id === currentConditionID);
        let path = [];
        let indexToDelete;
        if (currentConditionIndexInArr > -1) {
            path = newConditionsArray[globalConditionIndexInArr].relatedConditions;
            indexToDelete = currentConditionIndexInArr;
            if (newConditionsArray[globalConditionIndexInArr].relatedConditions.length === 1) {
                path = newConditionsArray;
                indexToDelete = globalConditionIndexInArr;
            } else if (currentConditionIndexInArr === 0) {
                path[1].operator = ""
                newConditionsArray[globalConditionIndexInArr].relatedConditions[1].operator = path[1].operator
                this.setState({conditionsArray: newConditionsArray})
            }
        } else {
            newConditionsArray[globalConditionIndexInArr].relatedConditions.forEach((parentCond, pIndex) => {
                parentCond.relatedConditions.forEach((childCond, chIndex) => {
                    if (childCond.id === currentConditionID) {
                        path = newConditionsArray[globalConditionIndexInArr].relatedConditions[pIndex].relatedConditions;
                        indexToDelete = chIndex;
                    }
                })
            });
        }

        if (newConditionsArray.length === 1 && path === newConditionsArray) {
            const { tableFields } = this.state;
            let fieldsDataID = GENERAL_UTILS.generateID();
            let fieldsDropdownData = DATA_UTILS.getDropdownFieldsItems({ tableFields: tableFields.columns, index: fieldsDataID });
            this.setState({conditionsArray: [{ id: GENERAL_UTILS.generateID(), condition: '', operator: '', relatedConditions: [{ id: GENERAL_UTILS.generateID() + 1, condition: '', operator: '', conditionOptions: { operator: { operator: '', editior: '' }, field: '', value: '', fieldsData: { [fieldsDataID]: tableFields.columns }, fieldsDropdownData: [{ items: fieldsDropdownData }] }, relatedConditions: [] }] }]})
        } else {
            path.splice(indexToDelete, 1)
            newConditionsArray.relatedConditions = path
            this.setState({conditionsArray: newConditionsArray})
        }
    }

    saveToogle = () => {
        const { isSave } = this.state;
        this.setState({isSave: !isSave})
        this.runButtonClicked({type: "save"})
    }

    render() {
        const {
            isFilterOpened,
            conditionsArray,
            tableFields,
            referenceTableFieldsData,
            labelArr,
            operatorArr,
            breadcrumbsItems,
            isSave,
            queryToSave,
            filterList
        } = this.state;
        const { table, user } = this.props;

        return (
            <>
                <div className="collapsed-filter-header">
                        <Button
                            icon={isFilterOpened ? "funnel-fill" : "funnel"}
                            size="md"
                            tooltipContent="Filter"
                            variant="tertiary"
                            onClick={() => this.setState({ isFilterOpened: !isFilterOpened })}
                        />
                        <div className="breadcrumbs">
                            <FilterBreadcrumbs items={breadcrumbsItems} breadcrumbItemClicked={this.breadcrumbItemClicked} />
                        </div>
                </div>
                <div className={
                    classnames({
                        "swf-filter-container": true,
                        "--is-collapsed": isFilterOpened
                    })
                }>
                    <div className="filter-header">
                        <div className="actions">
                            <div className="buttons">
                                <div className="btn">
                                    <Button
                                        label="Apply"
                                        variant="primary"
                                        size="md"
                                        onClick={() => this.runButtonClicked({type: "run"})}
                                        customStyle={
                                            {
                                                "border-color": "rgb(15,67,55)",
                                                "hover-border-color": "rgb(15,67,55)",
                                                "active-border-color": "none"
                                            }
                                        }/>
                                </div>
                                <div className="btn">
                                    <Button label="Save" variant="secondary" size="md" customStyle={{
                                        "border-color": "rgb(172,180,181)",
                                        "hover-border-color": "rgb(172,180,181)",
                                        "active-border-color": "rgb(172,180,181)"
                                    }}
                                    onClick={() => this.saveToogle()}
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
                                        onClick={() => this.clearAll({value: "delete-filter"})}
                                    />
                                </div>
                            </div>
                            <div className="templates">
                                <FilterTemplates setQuery={this.setQuery} filterList={filterList} table={table} />
                            </div>
                        </div>
                        {
                            isSave && <FilterSaver isFilterSaved={this.isFilterSaved} table={table} query={queryToSave} user={user} />
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
                                                                tableFields={tableFields}
                                                                conditionObj={condition}
                                                                conditionID={condition.id}
                                                                globalConditionID={globalCondition.id}
                                                                globalCondition={globalCondition}
                                                                operatorType={condition.operator}
                                                                addNewOperator={this.addNewOperator}
                                                                deleteCondition={this.deleteCondition}
                                                                referenceTableFieldsData={referenceTableFieldsData}
                                                                labelArr={labelArr}
                                                                operatorArr={operatorArr}
                                                                getConditionsIDs={this.getConditionsIDs}
                                                                getClickedListIndex={this.getClickedListIndex}
                                                                onOperatorClicked={this.onOperatorClicked}
                                                                setConditionOptions={this.setConditionOptions}
                                                                fetchReferenceDataSuccessed={this.fetchReferenceDataSuccessed}
                                                                selectedItem={condition.conditionOptions.fieldItems}
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
                                    onClick={() => this.addNewOperator({value: "^NQ"})}
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
    opened: true,
    onSendQuery: noop
}

FilterCondition.propTypes = {
    table: propTypes.string.isRequired,
    query: propTypes.string,
    user: propTypes.string,
    blockFields: propTypes.array,
    allowFields: propTypes.array,
    opened: propTypes.bool,
    onSendQuery: propTypes.func
}