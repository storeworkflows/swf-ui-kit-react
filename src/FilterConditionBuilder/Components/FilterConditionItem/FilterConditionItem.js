import propTypes from "prop-types";
import * as React from "react";

import ExpandDropdown from "../ExpandDropdown/ExpandDropdown";
import Dropdown from "../../../Dropdown/Dropdown"
import { GENERAL_UTILS, REQUEST_UTILS } from "../../utils";
import { inputValue } from "./_inputValue";
import { Button } from "../../../index";
import { noop } from "../../../utils";


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
            selectedItem: {
                items: []
            },
            dropdownFields: [],
            operators: [],
            textAreaValue: ""
        }
    }

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
        this.setState({textAreaValue: value}, () => setConditionOptions({ value: this.state.textAreaValue.replace(/\s/g, ""), conditionOption: "value"}))
    }

    itemClicked = (item) => {
        const { activeField } = this.state;
        const { setConditionOptions } = this.props;
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

    onItemClicked = (item) => {
        const { clickedItem } = item;
        const { setConditionOptions, conditionID, globalConditionID } = this.props
        const { selectedItem } = this.state;
        const queryParams = {
            sysparm_operators: true,
            sysparm_get_extended_tables: true,
            sysparm_keywords: true
        };
        let items = {};
        let itemsArr = [];
        itemsArr.push(clickedItem)
        items = {conditionId: conditionID, globalConditionID, listIndex: clickedItem.listIndex, selectedItems: {items: selectedItem.items, label: selectedItem.items.map(item => item.label).join(" . "), value: selectedItem.items.map(item => item.id).join(".")}, firstOperator: clickedItem.firstOperator};
        (clickedItem.dropdownClicked) ? (REQUEST_UTILS.fetchTableData({table: clickedItem.table, queryParams})
            .then(res => {
                items = {...items, result: res.columns};
                setConditionOptions({value: items, globalConditionID, currentConditionID: conditionID, conditionOption: "fieldsData"});
            })) : noop;

        if (!clickedItem.dropdownClicked) {
            setConditionOptions({value: items.selectedItems, globalConditionID, currentConditionID: conditionID, conditionOption: "field"})
        }
    }

    updateSelectedItem = ({item, command, listIndex}) => {
        const { selectedItem: { items } } = this.state;

        if (command === "push") {
            items.push(item);
            this.setState({ selectedItem: { items } });
        } else if (command === "rewrite") {
            this.setState({ selectedItem: { items: [item] } });
        } else if (command === "same_list_index") {
            items.splice(listIndex, items.length)
            items.push(item);
            this.setState({ selectedItem: { items } });
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
            getConditionsIDs,
            conditionID,
            globalConditionID,
        } = this.props;

        const { dropdownsIsActive } = this.state; 
        const isBtnsRender = (!!conditionObj.conditionOptions.value || conditionObj.conditionOptions.operator.editor === "none");
        return (
            <div className="condition-wrapper" onClick={() => getConditionsIDs({currentConditionID: conditionID, globalConditionID})}>
                {
					operatorType === '^OR' ? <span className="condition-operator">OR</span> : ''
                }
                <div className="dropdown-container">
                    <ExpandDropdown
                        expandIcon="arrow-right-circle"
                        selectedItem={this.props.selectedItem}
                        selectedItems={conditionObj.conditionOptions.fieldItems ? conditionObj.conditionOptions.fieldItems.items : []}
                        updateSelectedItem={this.updateSelectedItem}
                        onItemSelected={(item) => this.onItemClicked(item)}
                        placeholder={"--choose field--"}
                        lists={conditionObj.conditionOptions.fieldsDropdownData}
                    />
                </div>
                <div className="dropdown-container">
                    <Dropdown
                        items={conditionObj.conditionOptions.operatorsArray}
                        selectedItems={[conditionObj.conditionOptions.operator.operator]}
                        onItemSelected={(item) => this.itemClicked(item.clickedItem)}
                        select="single"
                        search="contains"
                        placeholder={"--choose operator--"}
                        variant="tertiary"
                        size="md"
                        disabled={!dropdownsIsActive.operation}
                        manageSelectedItems={true}
                    />
                </div>
                {
                    inputValue(this.state, conditionObj.conditionOptions, this.itemClicked, this.onDatePickerChange, this.inputValueSet, this.textAreaValueSet)
                }
                {(operatorType !== "^OR" && isBtnsRender) && <>
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
                    <Button icon="x-circle" variant="tertiary" size="md" onClick={() => {
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
