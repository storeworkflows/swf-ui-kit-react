import classnames from "classnames";
import propTypes from "prop-types";
import * as React from "react";
import FilterDropdown from "./Components/FilterDropdown/FilterDropdown";
import FilterSaver from "./Components/FilterSaver/FilterSaver";

import FilterBreadcrumbs from "./Components/FilterBreadcrumbs/FilterBreadcrumbs";

import { generateID, getDropdownFieldsItems, getOperators, generateCurrentConditionQuery, fetchTableData, fetchRequest, prepareQueryParams, clone, getTrendData, parseConditionValue, getValueAdditionalData } from "./utils/utils"

import { Button } from "../index";
import Dropdown from "./Components/ExpandDropdown/ExpandDropdown" 
import FilterConditionItem from "./Components/FilterConditionItem/FilterConditionItem";
import FilterTemplates from "./Components/FilterTemplates/FilterTemplates";
import fetch from "cross-fetch";
import FilterDropdownList from "./Components/FilterDropdownList/FilterDropdownList";

export default class FilterCondition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            referenceFieldData: {},
            conditionsArray: [],
            isSave: false,
            referenceTableFieldsData: {},
            isFilterCollapsed: true,
            breadcrumbsItems: [{ label: 'All', conditionId: 'all' }],
            queryToSave: '',
            labelArr: [],
            alertData: {
                active: false,
                positive: true
            },
            tableFields: {
                columns: {}
            },
            operatorArr: [],
            clickedListIndex: null
        }
        // this.addNewOperator = this.addNewOperator.bind(this)
        this.getValueAdditionalData = getValueAdditionalData.bind(this);
        this.parseConditionValue = parseConditionValue.bind(this)
    }

    fetchReferenceTableDataSuccessed = ({result, properties}) => {

    }

    //
    getClickedListIndex = ({index}) => {
        this.setState({clickedListIndex: index});
    }
    //

    fetchTableDataSuccessed = ({result, properties}) => {
        let fieldsDataID = generateID();
        const { query, blockFields, allowFileds } = properties;
        let fieldsDropdownData = getDropdownFieldsItems({ tableFields: result.columns, index: fieldsDataID, blockFields, allowFileds });
        let conditionsArray = [
            {
                id: generateID(),
                condition: "",
                operator: "",
                relatedConditions: [
                    {
                        id: generateID() + 1,
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
                conditionsArray.push({ id: generateID() + operatorPosition, condition: '', operator: '^NQ', relatedConditions: [{ id: generateID() + operatorPosition + 1, condition: '', operator: '', conditionOptions: { operator: { operator: '', editior: '' }, field: '', value: '', fieldsData: { [fieldsDataID]: result.columns }, fieldsDropdownData: [{ items: fieldsDropdownData }] }, relatedConditions: [] }] })
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
                        globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].relatedConditions.push({ id: generateID() + operatorPosition, condition: '', operator: '^OR' });
                        position = operatorPosition + 3;
                        lastOperator = '^OR';
                    } else {
                        globalCondition.relatedConditions.push({ id: generateID() + operatorPosition, condition: '', operator: '^', relatedConditions: [] });
                        position = operatorPosition + 1;
                        lastOperator = '^';
                    }
                }
            })

            let operators = getOperators(result.columns);
            conditionsArray = conditionsArray.map(globalCond => {
                globalCond.relatedConditions = globalCond.relatedConditions.map(parentCond => {

                    let params = { condition: parentCond.condition, operators, tableFields: result.columns, globalID: globalCond.id, currentID: parentCond.id }
                    let conditionOptions = this.parseConditionValue(params);
                    parentCond = {
                        ...parentCond,
                        conditionOptions
                    }

                    parentCond.relatedConditions = parentCond.relatedConditions.map(childCond => {

                        let params = { condition: childCond.condition, operators, tableFields: result.columns, globalID: globalCond.id, currentID: childCond.id }
                        let conditionOptions = this.parseConditionValue(params);
                        return {
                            ...childCond,
                            conditionOptions
                        }
                    })
                    return parentCond;
                })
                return globalCond;
            })
        }
        this.setState({
            tableFields: result,
            conditionsArray
        })
    }

    setOperatorsArray = ({result}) => {
         
    }

    runButtonClicked = () => {
        const { conditionsArray } = this.state;
        let copyConditionArray = clone(conditionsArray);
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
        // FILTER_ACTIONS.QUERY_GENERATE.STARTED
        this.generateQuery({operation: "run"})
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
                    // dispatch(FILTER_ACTIONS.QUERY_GENERATE.FAILED, { globalConditionID: globalCond.id, currentConditionID: parentCond.id });
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
                        // dispatch(FILTER_ACTIONS.QUERY_GENERATE.FAILED, { globalConditionID: globalCond.id, currentConditionID: childCond.id });
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
                    // dispatch(FILTER_ACTIONS.QUERY_GENERATE.SUCCESSED, { value: resultQuery });
                    this.setState({ breadcrumbsItems })
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

    // getValueAdditionalData = ({ tableFields, editor, field, globalID, currentID }) => {
    //     let valueAdditionalData = [];
    //     switch (editor) {
    //         case 'choice_field_names':
    //         case 'glide_date_equivalent':
    //         case 'glide_date_comparative':
    //             for (let key in tableFields) {
    //                 if (tableFields[key].type === tableFields[field].type && JSON.stringify(tableFields[key]) !== JSON.stringify(tableFields[field])) {
    //                     if (editor === 'glide_date_equivalent') {
    //                         valueAdditionalData.push({ id: tableFields[key].name, label: tableFields[key].label, dropdown: 'value', type: 'glide_date_equivalent', index: '1' })
    //                     } else if (editor === 'glide_date_comparative') {
    //                         valueAdditionalData.push({ id: tableFields[key].name, label: tableFields[key].label, dropdown: 'value', type: 'glide_date_comparative', index: '3' })
    //                     } else {
    //                         valueAdditionalData.push({ id: tableFields[key].name, label: tableFields[key].label, dropdown: 'value' })
    //                     }
    //                 }
    //             }
    //             break;
    
    //         case 'choice':
    //         case 'choice_multiple':
    //             valueAdditionalData = tableFields[field].choices.map(choice => ({ id: choice.value, label: choice.label, dropdown: 'value' }));
    //             break;
    //         case 'choice_dynamic':
    //             valueAdditionalData = tableFields[field].dynamic_choices.map(choice => ({ id: choice.value, label: choice.label, dropdown: 'value' }));
    //             break;
    //         case 'reference':
    //             const queryParams = {
    //                 sysparm_fields: `${tableFields[field].reference_display_field},sys_id`,
    //                 sysparm_query: `nameISNOTEMPTY`
    //             }
    //             this.fetchReferenceData(tableFields[field].reference, queryParams)
    //                 .then(res => {
    //                     this.fetchReferenceDataSuccessed(res)
    //                 })
    //             this.setState({referenceFieldData: {
    //                 field: tableFields[field],
    //                 currentConditionID: currentID,
    //                 globalConditionID: globalID
    //             }})
    //             break;
    //     }

    //     return valueAdditionalData;
    // }

    componentDidMount() {
        // fetchTableData
        const { table } = this.props;
        const queryParams = {
            sysparm_operators: true,
            sysparm_get_extended_tables: true,
            sysparm_keywords: true
        };

        fetchTableData(table, queryParams).then(result => {
            this.fetchTableDataSuccessed({result, properties: this.props})
        })
    }

    addNewOperator = ({value, currentConditionID, globalConditionID}) => {
        const { conditionsArray, tableFields } = this.state;
        const newConditionsArray = conditionsArray;
        const globalConditionIndexInArr = conditionsArray.findIndex(cond => cond.id === globalConditionID)
        const fieldsDataID = generateID();
        const { blockFields, allowFields } = this.props;
        const fieldsDropdownData = getDropdownFieldsItems({ tableFields: tableFields.columns, index: fieldsDataID, blockFields, allowFields });
        switch(value) {
            case "^":
                newConditionsArray[globalConditionIndexInArr].relatedConditions.push({ id: generateID(), condition: '', operator: value, conditionOptions: { operator: { operator: '', editior: '' }, field: '', value: '', fieldsData: { [fieldsDataID]: tableFields.columns }, fieldsDropdownData: [{ items: fieldsDropdownData }] }, relatedConditions: [] });
                this.setState({
                    conditionsArray: newConditionsArray
                })
                break;
            case '^OR':
                let currentConditionIndexInArr = newConditionsArray[globalConditionIndexInArr].relatedConditions.findIndex(cond => cond.id === currentConditionID);
                let parentConditionOptions = { ...newConditionsArray[globalConditionIndexInArr].relatedConditions[currentConditionIndexInArr].conditionOptions };
                newConditionsArray[globalConditionIndexInArr].relatedConditions[currentConditionIndexInArr].relatedConditions.push({ id: generateID(), condition: '', operator: value, conditionOptions: { ...parentConditionOptions, operator: { operator: '', editior: '' }, value: '' } })
                this.setState({conditionsArray: newConditionsArray});
                break;
            case '^NQ':
                newConditionsArray.push({id: generateID(), condition: '', operator: value, relatedConditions: [{ id: generateID() + 1, condition: '', operator: '', conditionOptions: { operator: { operator: '', editior: '' }, field: '', value: '', fieldsData: { [fieldsDataID]: tableFields.columns }, fieldsDropdownData: [{ items: fieldsDropdownData }] }, relatedConditions: [] }]});
                this.setState({conditionsArray: newConditionsArray})
            }
    }

    clearAll = ({value}) => {
        if (value === "delete-filter") {
            const { tableFields } = this.state;
            const fieldsDataID = generateID();
            const { blockFields, allowFileds } = this.props;
            const fieldsDropdownData = getDropdownFieldsItems({ tableFields: tableFields.columns, index: fieldsDataID, blockFields, allowFileds });
            this.setState({
                conditionsArray: [{ id: generateID(), condition: '', operator: '', relatedConditions: [{ id: generateID() + 1, condition: '', operator: '', conditionOptions: { operator: { operator: '', editior: '' }, field: '', value: '', fieldsData: { [fieldsDataID]: tableFields.columns }, fieldsDropdownData: [{ items: fieldsDropdownData }] }, relatedConditions: [] }] }],
                isSave: false,
                breadcrumbsItems: [{ label: 'All', conditionId: 'all' }]
            })
        }
    }

//
    setConditionOptionsOperator = ({value, conditionOptions}) => {
        const { activeField, activeFieldsData } = conditionOptions;
        const { currentConditionID, globalConditionID } = this.state;
        let valueAdditionalData = [];
        valueAdditionalData = this.getValueAdditionalData({ state: this.state, tableFields: activeFieldsData, editor: value.editor, field: activeField, currentID: currentConditionID, globalID: globalConditionID});
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
                let copyValue = conditionOptions.value;
                copyValue = copyValue ? copyValue.split(',') : [];
                copyValue.indexOf(value) < 0 ? copyValue.push(value) : copyValue.splice(copyValue.indexOf(value), 1);
                copyValue = copyValue.join(',');
                conditionOptions.value = copyValue;
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
                    conditionOptions.valueAdditionalData = getTrendData(value.value);
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
        let copyConditionArray = clone(conditionsArray);
        let globalConditionInArrInd = copyConditionArray.findIndex(cond => cond.id === properGlobalConditionID);
        let currentConditionInArrInd = copyConditionArray[globalConditionInArrInd].relatedConditions.findIndex(cond => cond.id === properCurrentConditionID);
        let currentConditionInArr;
        let copyConditionOptions
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
                currentConditionInArr.conditionOptions = this.setConditionOptionsField({conditionOptions: copyConditionOptions, value}); // nenada
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
    
    fetchReferenceData = async (table, queryParams) => {
        const endpoint = `${window.location.origin}/api/now/table/${table}`; //dev78490.service-now.com/
    
        const query = queryParams ? prepareQueryParams(queryParams) : "";
        const url = `${endpoint}?${query}`;
        const params = {
            method: "GET"
        }
        return await fetchRequest({url, params})
    }

    fetchReferenceDataSuccessed = (result) => {
        const { referenceFieldData } = this.state;
        let valueFields = result.map(field => ({id: field.sys_id, label: field[referenceFieldData.field.reference_display_field], dropdown: "value"}));
        this.setConditionOptions({value: valueFields, conditionOption: "valueAditionalData", currentConditionID: referenceFieldData.currentConditionID, globalConditionID: referenceFieldData.globalConditionID});
    }


    setConditionOptionsFieldData = ({conditionOptions, value}) => {
        const fieldsDataID = generateID();
        const newFieldsDropdownData = getDropdownFieldsItems({tableFields: value.result, index: fieldsDataID});
        if (value.listIndex < conditionOptions.fieldsDropdownData.length - 1) {
            let deletedFieldsData = conditionOptions.fieldsDropdownData.splice(value.listIndex + 1);
            deletedFieldsData = deletedFieldsData.map(data => data.items[0].index);
            deletedFieldsData.forEach(key => delete conditionOptions.fieldsData[key]);
        }
        conditionOptions.fieldsDropdownData.push({ items: newFieldsDropdownData });
        conditionOptions.fieldsData[fieldsDataID] = value.result;
        conditionOptions.fieldItems = value.selectedItems;

        return conditionOptions;
    } 

// 

    getConditionsIDs = ({currentConditionID, globalConditionID}) => {
        this.setState({currentConditionID, globalConditionID})
    } 

// 

    setConditionOptionsField = ({conditionOptions, value}) => {
        const { fieldsData } = conditionOptions;
        let currentFieldsData = fieldsData[value.items[value.items.length - 1].index];
        let currentValue = value.items[value.items.length - 1].id;
        let currentValueIndex = conditionOptions.fieldsDropdownData.findIndex(data => data.items[0].index === value.items[value.items.length - 1].index);
        let deletedFieldsData = conditionOptions.fieldsDropdownData.splice(currentValueIndex + 1);
        deletedFieldsData = deletedFieldsData.map(data => data.items[0].index);
        deletedFieldsData.forEach(key => delete conditionOptions.fieldsData[key]);
        let operatorsArray = currentFieldsData[currentValue].operators.map(operation => ({ id: operation.operator, label: operation.label, dropdown: 'operation' }));
        return conditionOptions = {
            ...conditionOptions,
            field: value.value,
            fieldItems: value,
            operator: { operator: '', editor: '' },
            value: '',
            operatorsArray,
            activeFieldsData: { ...currentFieldsData },
            activeField: currentValue
        }
    }

    onItemClicked = (item) => {
        const { clickedItem, isReferenceClicked } = item;
        const { labelArr, currentConditionID, globalConditionID, conditionsArray } = this.state;
        
        const queryParams = {
            sysparm_operators: true,
            sysparm_get_extended_tables: true,
            sysparm_keywords: true
        };
        let items = {};
        let itemsArr = [];
        itemsArr.push(clickedItem)
        items = {conditionId: currentConditionID, globalConditionID, listIndex: clickedItem.listIndex, selectedItems: {items: itemsArr, label: clickedItem.label, value: clickedItem.id}};
        (clickedItem.dropdownClicked) ? (fetchTableData(clickedItem.table, queryParams)
            .then(res => {
                items = {...items, result: res.columns};
                this.setConditionOptions({value: items, globalConditionID, currentConditionID, conditionOption: "fieldsData"})
            })) : () => void(0)
        let condArrClone = clone(conditionsArray)
        const globalConditionIndexInArr = condArrClone.findIndex(cond => cond.id === globalConditionID);
        
        if (!clickedItem.dropdownClicked) {
            this.setConditionOptions({value: items.selectedItems, conditionOption: "field"})

        }
        // {setConditionOptions}



        // let currentCondition = condArrClone.find(globalCondition => globalCondition.id === globalConditionID).relatedConditions.find(currentCondition => currentCondition.id === currentConditionID);
        // const currentConditionIndexInArr = condArrClone[globalConditionIndexInArr].relatedConditions.findIndex(cond => cond.id === currentConditionID);
        // if (currentConditionIndexInArr > -1) {
        //     currentCondition.conditionOptions.fieldItems = items.selectedItems;
        // } else {
        //     condArrClone[globalConditionIndexInArr].relatedConditions.forEach((cond) => {
        //         cond.relatedConditions.forEach((cond) => {
        //             if (cond.id === currentConditionID) {
        //                 cond.conditionOptions.fieldItems = items.selectedItems;
        //             }
        //         })
        //     })
        // }
        // this.setState({conditionsArray: condArrClone})
        // console.log(newCondArr, conditionsArray)
        
        
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
                // let newBreadcrumbsItems = clone(breadcrumbsItems);
                let deletedItems = (itemIndex === 0) ? breadcrumbsItems.splice(1) : breadcrumbsItems.splice(itemIndex + 1);
                
                this.setState({breadcrumbsItems});
                
                deletedItems.forEach(item => this.deleteCondition({currentConditionID: item.conditionId, globalConditionID: item.globalConditionId}));
                break;
        }
    }

    onOperatorClicked = (item) => {
        console.log(item)
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
            let fieldsDataID = generateID();
            let fieldsDropdownData = getDropdownFieldsItems({ tableFields: tableFields.columns, index: fieldsDataID });
            this.setState({conditionsArray: [{ id: generateID(), condition: '', operator: '', relatedConditions: [{ id: generateID() + 1, condition: '', operator: '', conditionOptions: { operator: { operator: '', editior: '' }, field: '', value: '', fieldsData: { [fieldsDataID]: tableFields.columns }, fieldsDropdownData: [{ items: fieldsDropdownData }] }, relatedConditions: [] }] }]})
        } else {
            path.splice(indexToDelete, 1)
            newConditionsArray.relatedConditions = path
            this.setState({conditionsArray: newConditionsArray})
        }
    }

    saveToogle = () => {
        const { isSave } = this.state;
        this.setState({isSave: !isSave})
    }

    render() {
        const { isFilterCollapsed, conditionsArray, tableFields, referenceTableFieldsData, labelArr, operatorArr, breadcrumbsItems, isSave } = this.state;
        const { table, user } = this.props;
        const { columns } = tableFields;
        let columnsArr = Object.values(columns).sort((a, b) => a.label < b.label ? -1 : 0);
        columnsArr.length && (columnsArr = columnsArr.map(column => ({...column, id: column.name})))
        // console.log("%c%s", "color: green", "REACT Filter Condition State", this.state)
        return (
            <>
                <div className="collapsed-filter-header">
                        <Button
                            icon={isFilterCollapsed ? "funnel-fill" : "funnel"}
                            size="md"
                            tooltipContent="Filter"
                            variant="tertiary"
                            onClick={() => this.setState({ isFilterCollapsed: !isFilterCollapsed })}
                        />
                        <div className="breadcrumbs">
                            <FilterBreadcrumbs items={breadcrumbsItems} breadcrumbItemClicked={this.breadcrumbItemClicked} />
                        </div>
                </div>
                <div className={
                    classnames({
                        "filter-container": true,
                        "--is-collapsed": isFilterCollapsed
                    })
                }>
                    <div className="filter-header">
                        <div className="actions">
                            <div className="buttons">
                                <div className="btn">
                                    <Button
                                        label="Run"
                                        variant="primary"
                                        size="md"
                                        onClick={() => this.runButtonClicked()}
                                        customStyle={
                                            {
                                                "border-color": "rgb(15,67,55)",
                                                "hover-border-color": "rgb(15,67,55)",
                                                "active-border-color": "rgb(15,67,55)"
                                            }
                                        }/>
                                </div>
                                <div className="btn">
                                    <Button label="Save" variant="secondary" size="md" customStyle={{
                                        "border-color": "rgb(172,180,181)",
                                        "hover-border-color": "rgb(172,180,181)",
                                        "active-border-color": "rgb(172,180,181)"
                                    }}
                                    onClick={this.saveToogle}
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
                                {/* <FilterTemplates /> */}
                            </div>
                        </div>
                        {
                            isSave && <FilterSaver table={table} user={user} />
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
                                                                onItemClicked={this.onItemClicked}
                                                                referenceTableFieldsData={referenceTableFieldsData}
                                                                labelArr={labelArr}
                                                                operatorArr={operatorArr}
                                                                getConditionsIDs={this.getConditionsIDs}
                                                                getClickedListIndex={this.getClickedListIndex}
                                                                onOperatorClicked={this.onOperatorClicked}
                                                                setConditionOptions={this.setConditionOptions}
                                                                fetchReferenceDataSuccessed={this.fetchReferenceDataSuccessed}
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
                            <div className="button">
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
    collapsed: true,
    onSendQuery: () => void 0
}

FilterCondition.propTypes = {
    table: propTypes.string,
    query: propTypes.string,
    user: propTypes.string,
    blockFields: propTypes.array,
    allowFields: propTypes.array,
    collapsed: propTypes.bool,
    onSendQuery: propTypes.func
}