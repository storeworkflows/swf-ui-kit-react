import * as React from "react";
import { Button } from "../../../index";
import ExpandDropdown from "../ExpandDropdown/ExpandDropdown";
import Dropdown from "../../../Dropdown/Dropdown"
import propTypes from "prop-types";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
import { inputValue } from "./_inputValue";
import { v4 as uuidv4 } from "uuid";
import { clone } from "../../utils/utils";


export default class FilterConditionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableFields: {},
            activeField: "",
            dropdownsIsActive: {
                field: true,
                operation: false,
                value: false
            },
            selectedItem: this.props.conditionObj.conditionOptions.fieldItems,
            dropdownFields: [],
            operators: [],
            textAreaValue: ""
        }
    }

    // fetchTableData = async (table) => {
    //     const endpoint = `${window.location.origin}/api/now/ui/meta/${table}`; //dev78490.service-now.com/
    //     const queryParams = {
    //         sysparm_operators: true,
    //         sysparm_get_extended_tables: true,
    //         sysparm_keywords: true
    //     };
    //     const query = prepareQueryParams(queryParams);
    //     const url = `${endpoint}?${query}`
    //     const params = {
    //         method: "GET"
    //     }
    //     return await fetchRequest({url, params})
    // }
    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps) !== JSON.stringify(this.props))
            this.fetchTableData();
    }

    operatorsActivation = () => {
        const { conditionObj: { conditionOptions } } = this.props;
        const { activeField: { column_type } } = this.state;

        if (column_type === "tag") return;

        this.setState({
            dropdownFields: {
                field: true,
                operation: true,
                value: false
            }
        })

        if (conditionOptions.operator) {
            this.valueInputActivation()
        }
    }

    textAreaValueSet = ({value}) => {
        const { conditionID, globalConditionID, setConditionOptions } = this.props;
        this.setState({textAreaValue: value})
        setConditionOptions({ value: this.state.textAreaValue, currentConditionID: conditionID, globalConditionID, conditionOption: "value"})
    }

    itemClicked = (item) => {
        const { activeField } = this.state;
        const { conditionID, globalConditionID, setConditionOptions } = this.props;
        if (item.dropdown === "operation") {
            let activeOperator = activeField.operators.find(({ operator }) => operator === item.id)

            this.valueInputActivation()
            setConditionOptions({
                value: { operator: item.id, editor: activeOperator.advancedEditor },
                conditionOption: "operator"
            })
        }
        if (item.dropdown === "value") {
            const { conditionObj: { conditionOptions } } = this.props;
            let valueForContainer;
            switch (conditionOptions.operator.editor) {
                case "relative_field":
                case "glide_date_equivalent":
                case "glide_date_comparative":
                    valueForContainer = { value: item.id, index: item.index };
                    break;
                case "trend_field":
                    if (item.index == 2)
                        valueForContainer = { value: { id: item.id, label: item.label }, index: item.index };
                    else
                        valueForContainer = { value: item.id, index: item.index };
                    break;
                default:
                    valueForContainer = item.id;
            }
            setConditionOptions({
                value: valueForContainer,
                conditionOption: "value"
            })
        }
    }

    onDatePickerChange = ({value, type, conditionOptions, index}) => {
        const { setConditionOptions } = this.props;
        const { newValue } = value;
        let valueForContainer;
        switch (type) {
            case 'between_field':
            case 'relative-field':
            case 'glide_duration':
            case 'glide_date_comparative':
                valueForContainer = {value: newValue, index};
                break;
            default:
                valueForContainer = newValue;
        }

        setConditionOptions({value: valueForContainer, conditionOptions, conditionOption: "value"})
    }

    valueInputActivation = () => {
        this.setState({
            dropdownsIsActive: {
                field: true,
                operation: true,
                value: true
            }
        })
    }

    fetchTableData = () => {
        const {conditionObj} = this.props;
        const { activeFieldsData, activeField } = conditionObj.conditionOptions;
        if (activeFieldsData) {

            let activeFieldFromObj = activeFieldsData[activeField] || [""];

            this.setState({
                tableFields: activeFieldsData,
                activeField: activeFieldFromObj
            }, () => {
                        if (activeField) {
                            this.operatorsActivation()
                        }
                    })
        }
    }

    componentDidMount() {
        this.fetchTableData()
    }

    resetSelectedItem = () => {
        this.setState({selectedItem: {
            items: this.props.conditionObj.selectedItem.items
        }})
    }

    updateSelectedItem = ({item, command, listIndex}) => {
        const { setConditionOptions } = this.props;
        const items = this.state.selectedItem ? clone(this.state.selectedItem.items) : [];
        if (command === "push") {
            items.push(item);
            this.setState({selectedItem: {
                items,
                label: items.map(item => item.label).join(" . "),
                value: items.map(item => item.id).join(".")
            }}, () => setConditionOptions({value: this.state.selectedItem, conditionOption: "field"}));}
        else if (command === "rewrite") {
            this.setState({selectedItem: {
                items: [item],
                label: item.label,
                value: item.id
            }});
        } else if (command === "same_list_index") {
            items.splice(listIndex, items.length)
            items.push(item);
            this.setState({selectedItem: {
                items,
                label: items.map(item => item.label).join(" . "),
                value: items.map(item => item.id).join(".")
            }}, () => setConditionOptions({value: this.state.selectedItem, conditionOption: "field"}));
        }
    }

    inputValueSet = ({value, type, index}) => {
        const { setConditionOptions } = this.props;
        let valueForContainer;
        switch (type) {
            case 'between_field':
            case 'relative-field':
            case 'glide_duration':
            case 'glide_date_comparative':
                valueForContainer = { value, index };
                break;
            default:
                valueForContainer = value;
        }

        setConditionOptions({value: valueForContainer, conditionOption: "value"})
    }

    itemDropdownHandle = ({value, type, index}) => {
        const { conditionObj: { conditionOptions } } = this.props;
        let valueForContainer;
        switch (conditionOptions.operator.editor) {
            case 'relative_field':
                case 'glide_date_equivalent':
                case 'glide_date_comparative':
                    valueForContainer = { value: item.id, index: item.index };
                    break;
                case 'trend_field':
                    if (item.index == 2) {
                        valueForContainer = { value: { id: item.id, label: item.label }, index: item.index };
                    } else {
                        valueForContainer = { value: item.id, index: item.index };
                    }
                    break;
                default:
                    valueForContainer = item.id;
        }
    }

    render() {
        const {
            operatorType,
            conditionObj,
            tableFields,
            referenceTableFieldsData,
            labelArr,
            operatorArr,
            getConditionsIDs,
            conditionID,
            globalConditionID,
            getClickedListIndex
        } = this.props;

        // conditionObj.conditionOptions.operatorsArray = operatorArr.map(operator => ({...operator, id: uuidv4().split("-").join("")}));
        const { columns } = tableFields;
        const columnsArr = Object.values(columns).sort((a, b) => a.label < b.label ? -1 : 0).map(column => ({...column, id: column.name, reference: column.reference || ""}));
        return (
            <div className="condition-wrapper" onClick={() => getConditionsIDs({currentConditionID: conditionID, globalConditionID})}>
                {
					operatorType === '^OR' ? <span className="condition-operator">OR</span> : ''
			
                }
                <div className="dropdown-container">
                    <ExpandDropdown
                        expandIcon="arrow-right-circle"
                        selectedItem={this.state.selectedItem}
                        selectedItems={conditionObj.conditionOptions.activeField}
                        updateSelectedItem={this.updateSelectedItem}
                        onItemSelected={(item) => this.props.onItemClicked(item)}
                        placeholder={"--choose field--"}
                        lists={conditionObj.conditionOptions.fieldsDropdownData}
                    />
                </div>
                <div className="dropdown-container">
                    <Dropdown
                        items={!!conditionObj.conditionOptions.operatorsArray ? conditionObj.conditionOptions.operatorsArray : []}
                        selectedItems={conditionObj.conditionOptions.operator.operator ? [conditionObj.conditionOptions.operator.operator] : []}
                        onItemSelected={(item) => this.itemClicked(item.clickedItem)}
                        select="single"
                        search="contains"
                        placeholder={"--choose operator--"}
                        variant="tertiary"
                        size="md"
                        disabled={!conditionObj.conditionOptions.operatorsArray}
                    />
                </div>
                {
                    inputValue(this.state, conditionObj.conditionOptions, this.itemClicked, this.onDatePickerChange, this.inputValueSet, this.textAreaValueSet)
                }
                {operatorType !== "^OR" && <>
                    <div className="btn-container">
                        <Button label="and" size="md"  onClick={() => {
                            this.props.addNewOperator({value: "^", currentConditionID: this.props.conditionID, globalConditionID: this.props.globalConditionID})
                        }} />
                    </div>
                    <div className="btn-container">
                        <Button label="or" size="md" onClick={() => {
                            this.props.addNewOperator({value: "^OR", currentConditionID: this.props.conditionID, globalConditionID: this.props.globalConditionID})
                        }} />
                    </div>
                </>}
                <div className="btn-container">
                    <Button icon="x-circle" size="md" onClick={() => {
                        this.props.deleteCondition({currentConditionID: this.props.conditionID, globalConditionID: this.props.globalConditionID})
                    }}  />
                </div>
            </div>
        )
    }
}

FilterConditionItem.defaultProps = {
    tableFields: {},
    conditionObj: {},
    conditionID: "",
    globalConditionID: "",
    operatorType: ""
}

FilterConditionItem.propTypes = {
    tableFields: propTypes.object,
    conditionObj: propTypes.object,
    conditionID: propTypes.string,
    globalConditionID: propTypes.string,
    operatorType: propTypes.string,
    addNewOperator: propTypes.func
}
