import propTypes from "prop-types";
import * as React from "react";

import ExpandDropdown from "../ExpandDropdown/ExpandDropdown";
import Dropdown from "../../../Dropdown/Dropdown"
import { REQUEST_UTILS } from "../../utils";
import { inputValue } from "./_inputValue";
import { Button } from "../../../index";
import { noop } from "../../../utils";


export default class FilterConditionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            textAreaValue: "",
            generalTable: this.props.generalTable,
            refFieldValue: {
                name: this.props.conditionObj.conditionOptions.operator.editor === "reference" ? this.props.conditionObj.conditionOptions.activeField : null,
                sys_id: this.props.conditionObj.conditionOptions.operator.editor === "reference" ? this.props.conditionObj.conditionOptions.value : null,
                displayVal: null,
                table: this.props.conditionObj.conditionOptions.operator.editor === "reference" ? this.props.conditionObj.conditionOptions.fieldItems.items[this.props.conditionObj.conditionOptions.fieldItems.items.length - 1].table : null
            },
            conditionsArray: this.props.conditionsArray,
            conditionObj:this.props.conditionsArray
        }
    }

    componentDidMount() {
        this.fetchTableData()

        const { refFieldValue } = this.state;

        const queryParams = {
            sysparm_query: `sys_id=${refFieldValue.sys_id}`
        }

        if (!!refFieldValue.name && !!refFieldValue.sys_id)
        {
            REQUEST_UTILS.fetchReferenceData({table: refFieldValue.table, queryParams})
                .then((res) => {
                    this.setState({refFieldValue: {...refFieldValue, displayVal: res[0].name}})
                })
        }
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps) !== JSON.stringify(this.props))
            this.fetchTableData();
    }

    operatorsActivation = () => {
        const { conditionObj: { conditionOptions } } = this.props;
        const { activeField: { column_type }, refFieldValue } = this.state;

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

    prepareTextAreaValue = ({value}) => {
        const { setConditionOptions } = this.props;
        let string = value.trim().split(" ").filter(Boolean).join(" ");
        string = !!string.match("\n") ? string.split(/\n|\s/).filter(Boolean).join(",") : string

        setConditionOptions({value: string, conditionOption: "value"});
    }
    
    textAreaValueSet = ({value}) => {
        this.setState({ textAreaValue: value }, () => this.prepareTextAreaValue({ value: this.state.textAreaValue }));
    }

    lookupFieldValueSet = ({name, sys_id, displayVal}) => {
        const { setConditionOptions } = this.props;

        this.setState({refFieldValue: {name, sys_id, displayVal}})
        setConditionOptions({value: sys_id, conditionOption: "value"});
    }

    itemClicked = (item) => {
        const { activeField } = this.state;
        const { setConditionOptions } = this.props;
        if (item.dropdown === "operation") {
            let activeOperator = activeField.operators.find(({ operator }) => operator === item.id)
            this.valueInputDeactivation()
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

    valueInputDeactivation = () => {
        this.setState({
            dropdownsIsActive: {
                field: true,
                operation: true,
                value: false
            }
        }, () => this.valueInputActivation())
    }

    fetchTableData = () => {
        const {conditionObj} = this.props;
        const { activeFieldsData, activeField } = conditionObj.conditionOptions;
        if (activeFieldsData) {

            let activeFieldFromObj = activeFieldsData[activeField] || [""];

            this.setState({
                activeField: activeFieldFromObj
            }, () => {
                        if (activeField) {
                            this.operatorsActivation()
                        }
                    }
            )
        }
    }

    resetSelectedItem = () => {
        this.setState({selectedItem: {
            items: this.props.conditionObj.selectedItem.items
        }})
    }

    operatorsDeactivation = () => {
        this.setState({
            dropdownsIsActive: {
                field: true,
                operation: false,
                value: false
            }
        })
    }

    onItemClicked = (item) => {
        const { clickedItem } = item;
        const { setConditionOptions, conditionID, globalConditionID } = this.props
        const { selectedItem, refFieldValue } = this.state;
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
                this.operatorsDeactivation()
                items = {...items, result: res.columns};
                setConditionOptions({value: items, globalConditionID, currentConditionID: conditionID, conditionOption: "fieldsData"});
            })) : noop;

        if (!clickedItem.dropdownClicked) {
            this.operatorsActivation();
            setConditionOptions({value: items.selectedItems, globalConditionID, currentConditionID: conditionID, conditionOption: "field"})
        }
        this.setState({refFieldValue: {
            ...refFieldValue,
            displayVal: null,
        }})
    }

    updateSelectedItem = ({item, command, listIndex}) => {
        const { selectedItem: { items } } = this.state;
        let newState;

        switch (command) {
            case "push":
                items.push(item);
                newState = { selectedItem: { items } };
                break;
            case "rewrite":
                newState = { selectedItem: { items: [item] } };
                break;
            case "same_list_index":
                items.splice(listIndex, items.length)
                items.push(item);
                newState = { selectedItem: { items } };
                break;
        }
        this.setState(newState);
    }

    inputValueSet = ({value, type, index}) => {
        const { setConditionOptions } = this.props;
        let inputValue = value;
        let valueForContainer;
        switch (type) {
            case 'between_field':
            case 'relative-field':
            case 'glide_duration':
            case 'glide_date_comparative':
                valueForContainer = { inputValue, index };
                break;
            default:
                valueForContainer = inputValue;
        }

        setConditionOptions({value: valueForContainer, conditionOption: "value"})
    }

    itemDropdownHandle = () => {
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
            clickBtn,
            conditionsArray,
        } = this.props;

        const inputValuePayload = {
            state: this.state,
            conditionOptions: conditionObj.conditionOptions,
            itemClicked: this.itemClicked,
            onDatePickerChange: this.onDatePickerChange,
            inputValueSet: this.inputValueSet,
            textAreaValueSet: this.textAreaValueSet,
            lookupFieldValueSet: this.lookupFieldValueSet
        }
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
                    dropdownsIsActive.value && inputValue({ inputValuePayload })
                }
                {(operatorType !== "^OR" && isBtnsRender) && <>
                    <div className="btn-container">
                        <Button label="and" size="md"  onClick={() => {
                            clickBtn({action: "addNewOperator", payload: { value: "^", currentConditionID: conditionID, globalConditionID }});
                        }} />
                    </div>
                    <div className="btn-container">
                        <Button label="or" size="md" onClick={() => {
                            clickBtn({action: "addNewOperator", payload: { value: "^OR", currentConditionID: conditionID, globalConditionID }});
                        }} />
                    </div>
                </>}
                <div className="btn-container">
                    <Button icon="x-circle" variant="tertiary" size="md" onClick={() => {
                        clickBtn({action: "deleteCondition", payload: { conditionsArray, globalConditionID, currentConditionID: conditionID }})
                    }}  />
                </div>
            </div>
        )
    }
}

FilterConditionItem.defaultProps = {
    conditionObj: {},
    conditionID: "",
    globalConditionID: "",
    operatorType: ""
}

FilterConditionItem.propTypes = {
    conditionObj: propTypes.object,
    conditionID: propTypes.string,
    globalConditionID: propTypes.string,
    operatorType: propTypes.string,
}
