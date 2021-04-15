import fetch from 'cross-fetch';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import {REQUEST_UTILS, GENERAL_UTILS, DATA_UTILS} from "./index";

export const getValueAdditionalData = function({ tableFields, editor, field, globalID, currentID }) {
    let valueAdditionalData = [];
    switch (editor) {
        case 'choice_field_names':
        case 'glide_date_equivalent':
        case 'glide_date_comparative':
            for (let key in tableFields) {
                if (tableFields[key].type === tableFields[field].type && JSON.stringify(tableFields[key]) !== JSON.stringify(tableFields[field])) {
                    if (editor === 'glide_date_equivalent') {
                        valueAdditionalData.push({ id: tableFields[key].name, label: tableFields[key].label, dropdown: 'value', type: 'glide_date_equivalent', index: '1' })
                    } else if (editor === 'glide_date_comparative') {
                        valueAdditionalData.push({ id: tableFields[key].name, label: tableFields[key].label, dropdown: 'value', type: 'glide_date_comparative', index: '3' })
                    } else {
                        valueAdditionalData.push({ id: tableFields[key].name, label: tableFields[key].label, dropdown: 'value' })
                    }
                }
            }
            break;

        case 'choice':
        case 'choice_multiple':
            valueAdditionalData = tableFields[field].choices.map(choice => ({ id: choice.value, label: choice.label, dropdown: 'value' }));
            break;
        case 'choice_dynamic':
            valueAdditionalData = tableFields[field].dynamic_choices.map(choice => ({ id: choice.value, label: choice.label, dropdown: 'value' }));
            break;
        case 'reference':
            const queryParams = {
                sysparm_fields: `${tableFields[field].reference_display_field},sys_id`,
                sysparm_query: `nameISNOTEMPTY`
            }
            REQUEST_UTILS.fetchReferenceData({table: tableFields[field].reference, queryParams})
                .then(res => {
                    this.fetchReferenceDataSuccessed(res)
                })
            this.setState({referenceFieldData: {
                field: tableFields[field],
                currentConditionID: currentID,
                globalConditionID: globalID
            }})
            break;
    }

    return valueAdditionalData;
}

                                
// done        
            
export const parseConditionValueWithRef = async function({ condition, operators, tableFields, globalID, currentID }) {
    let operator = GENERAL_UTILS.findOperator(condition, operators);
    let lastTableFields;
    let field = '', value = '', editor = "", valueAdditionalData = [], fieldItems = [], fieldsDropdownData = [];
    let fieldsDataID = GENERAL_UTILS.generateID();
    let referenceField = condition.slice(0, condition.indexOf(operator)).split(".");
    let fields = GENERAL_UTILS.clone(referenceField);
    const isReferenceField = referenceField.length > 1;
    if (isReferenceField) {
        let dropdownFields = [{items: DATA_UTILS.getDropdownFieldsItems({tableFields: tableFields, index: fieldsDataID, listIndex: 0})}];
        let fieldsData = {[fieldsDataID]: tableFields}
        let nextData = tableFields[referenceField[0]];
        referenceField = referenceField.reverse();
        referenceField.pop();
        referenceField = referenceField.reverse();
        const queryParams = {
            sysparm_operators: true,
            sysparm_get_extended_tables: true,
            sysparm_keywords: true
        };
        let lastField = '';
        let allFields = condition.slice(0, condition.indexOf(operator));
        value = condition.slice(allFields.length + operator.length);
        let i = 1;
        for await (let key of referenceField) {
            fieldsDataID = GENERAL_UTILS.generateID();
            await REQUEST_UTILS.fetchTableData({table: nextData.reference, queryParams})
                .then(res => {
                    fieldsData = {...fieldsData, [fieldsDataID]: res.columns}
                    nextData = res.columns[key];
                    lastTableFields = res.columns;
                    dropdownFields.push({items: DATA_UTILS.getDropdownFieldsItems({tableFields: Object.values(res.columns), index: fieldsDataID, listIndex: i})});
                    i++;
                })
        }
        fieldsDropdownData = dropdownFields;
        let dataForFieldItems = fieldsDropdownData.map(field => field.items);

        i = 0;
        for (let key of dataForFieldItems) {
            fieldItems = [...fieldItems, { ...key.find(data => fields[i] === data.id), dropdownClicked: i < dataForFieldItems.length - 1}];
            i++;
        }
        field = fieldItems.map(field => field.id).join(".");
        lastField = field.split(".");
        lastField = lastField[lastField.length - 1];
        editor = lastTableFields[lastField].operators.find(op => op.operator === operator).advancedEditor;
        let operatorsArray = lastTableFields[lastField].operators.map(operation => ({ id: operation.operator, label: operation.label, dropdown: 'operation' }));
        value = DATA_UTILS.getValue({value, editor})
        fieldItems = {
            label: fieldItems.map(field => field.label).join(" . "),
            value: fieldItems.map(field => field.id).join("."),
            items: fieldItems
        }
        valueAdditionalData = editor === "trend_field" ? DATA_UTILS.getTrendData(value['1']) : this.getValueAdditionalData({ tableFields: lastTableFields, editor, field: lastField, globalID, currentID });

        return {
            field,
            operator: { operator, editor },
            value,
            operatorsArray,
            valueAdditionalData,
            fieldItems,
            fieldsData,
            fieldsDropdownData,
            activeFieldsData: lastTableFields,
            activeField: fieldItems.items[fieldItems.items.length - 1].id
        };
    }
}

// done

export const parseConditionValue = function({ condition, operators, tableFields, globalID, currentID }) {
    let operator = GENERAL_UTILS.findOperator(condition, operators);
    let field = '', value = '', editor = "", valueAdditionalData = [], fieldItems = [], fieldsDropdownData = [];
    let fieldsDataID = GENERAL_UTILS.generateID();
    if (!operator) {
        field = condition;
        operator = '';
    } else {
        field = condition.slice(0, condition.indexOf(operator));
        value = condition.slice(field.length + operator.length);
        editor = tableFields[field].operators.find(op => op.operator === operator).advancedEditor;
        valueAdditionalData = this.getValueAdditionalData({ tableFields, editor, field, globalID, currentID });
        value = DATA_UTILS.getValue({value, editor});
    }
    let fields = field.split('.');
    fieldsDropdownData = DATA_UTILS.getDropdownFieldsItems({ tableFields, index: fieldsDataID });
    fieldItems = fields.map(fieldName => ({ ...fieldsDropdownData.find(data => data.id === fieldName), listIndex: 0, dropdownClick: false }));
    fieldItems = {
        label: tableFields[field].label,
        value: field,
        items: fieldItems
    }
    let operatorsArray = tableFields[field].operators.map(operation => ({ id: operation.operator, label: operation.label, dropdown: 'operation' }));
    if (editor === 'trend_field') {
        valueAdditionalData = DATA_UTILS.getTrendData(value['1']);
    }
    
    return {
        field,
        operator: { operator, editor },
        value,
        operatorsArray,
        valueAdditionalData,
        fieldItems,
        fieldsData: { [fieldsDataID]: tableFields },
        fieldsDropdownData: [{ items: fieldsDropdownData }],
        activeFieldsData: tableFields,
        activeField: fieldItems.items[fieldItems.items.length - 1].id
    };
}



export const generateCurrentConditionQuery = (conditionData, operation, breadcrumbItem) => {
    const { conditionOptions: { field, operator: { operator, editor }, value, fieldItems, operatorsArray, valueAdditionalData } } = conditionData;
    let conditionQuery = '';
    if (field && operator && operation === 'run') {
        let valueLabel;
        switch (editor) {
            case 'between_field':
                conditionQuery = (value['0']
                    && value['1']) ? `${field}${operator}javascript:gs.dateGenerate('${value['0']}','00:00:00')@javascript:gs.dateGenerate('${value['1']}','23:59:59')` : '';
                conditionQuery ? valueLabel = `${value['0']} and ${value['1']}` : '';
                break;
            case 'relative_field':
                let currentOperator = value['0'] === 'before' ? 'RELATIVELT' : 'RELATIVEGT';
                value['1'] = value['1'] || '0';
                conditionQuery = (value['0']
                    && value['1']
                    && value['2']
                    && value['3']) ? `${field}${currentOperator}@${value['2']}@${value['3']}@${value['1']}` : '';
                conditionQuery ? valueLabel = `${value['0']} ${value['1']} ${value['2']} ${value['3']}` : '';
                break;
            case 'glide_duration':
                conditionQuery = (value['0']
                    && value['1']
                    && value['2']
                    && value['3']) ? `${field}${operator}javascript:gs.getDurationDate('${value['0']} ${value['1']}:${value['2']}:${value['3']}')` : '';
                conditionQuery ? valueLabel = `${value['0']} ${value['1']}:${value['2']}:${value['3']}` : '';
                break;
            case 'glide_date_choice':
                conditionQuery = (value) ? `${field}${operator}${value}@javascript:gs.dateGenerate('${value}','start')@javascript:gs.dateGenerate('${value}','end')` : '';
                conditionQuery ? valueLabel = value : '';
                break;
            case 'trend_field':
                conditionQuery = (value['0']
                    && value['1']
                    && value['2'].label
                    && value['2'].id) ? `${field}${operator}${value['2'].label}@javascript:gs.datePart('${value['1']}','${value['2'].id}','${value['0']}')` : '';
                conditionQuery ? valueLabel = `@javascript:gs.datePart('${value['1']}','${value['2'].id}','${value['0']}')` : '';
                break;
            case 'glide_date_equivalent':
                conditionQuery = (value['0']
                    && value['1']) ? `${field}${operator}${value['1']}@${value['0']}` : '';
                conditionQuery ? valueLabel = `${value['1']} ${value['0']}` : '';
                break;
            case 'glide_date_comparative':
                conditionQuery = (value['0']
                    && value['1']
                    && value['2']
                    && value['3']) ? `${field}${operator}${value['3']}@${value['1']}@${value['2']}@${value['0']}` : '';
                conditionQuery ? valueLabel = `${value['0']} ${value['1']} ${value['2']} ${value['3']}` : '';
                break;
            case 'none':
                conditionQuery = `${field}${operator}`;
                valueLabel = '';
                break;
            default:
                conditionQuery = value ? `${field}${operator}${value}` : '';
                conditionQuery ? valueLabel = value : '';
        }
        if (conditionQuery) {
            let conditionOperatorLabel = (editor === "none") ? operatorsArray.find(op => op.id === operator).label : operator;
            if (fieldItems.items[fieldItems.items.length - 1].reference === 'true' && valueAdditionalData.length) {
                valueLabel = valueAdditionalData.find(val => val.id === valueLabel).label
            }
            breadcrumbItem.label = `${breadcrumbItem.label}${conditionData.operator === '^OR' ? ' .or. ' : ''} ${fieldItems.label} ${conditionOperatorLabel} ${valueLabel}`;
        }
    } else if (field && operation === 'save') {
        switch (editor) {
            case 'between_field':
                conditionQuery = (value['0']
                    && value['1']) ? `${field}${operator}javascript:gs.dateGenerate('${value['0']}','00:00:00')@javascript:gs.dateGenerate('${value['1']}','23:59:59')` : '';
                break;
            case 'relative_field':
                let currentOperator = value['0'] === 'before' ? 'RELATIVELT' : 'RELATIVEGT';
                value['1'] = value['1'] || '0';
                conditionQuery = (value['0']
                    && value['1']
                    && value['2']
                    && value['3']) ? `${field}${currentOperator}@${value['2']}@${value['3']}@${value['1']}` : '';
                break;
            case 'glide_duration':
                conditionQuery = (value['0']
                    && value['1']
                    && value['2']
                    && value['3']) ? `${field}${operator}javascript:gs.getDurationDate('${value['0']} ${value['1']}:${value['2']}:${value['3']}')` : '';
                break;
            case 'glide_date_choice':
                conditionQuery = (value) ? `${field}${operator}${value}@javascript:gs.dateGenerate('${value}','start')@javascript:gs.dateGenerate('${value}','end')` : '';
                break;
            case 'trend_field':
                conditionQuery = (value['0']
                    && value['1']
                    && value['2'].label
                    && value['2'].id) ? `${field}${operator}${value['2'].label}@javascript:gs.datePart('${value['1']}','${value['2'].id}','${value['0']}')` : '';
                break;
            case 'glide_date_equivalent':
                conditionQuery = (value['0']
                    && value['1']) ? `${field}${operator}${value['1']}@${value['0']}` : '';
                break;
            case 'glide_date_comparative':
                conditionQuery = (value['0']
                    && value['1']
                    && value['2']
                    && value['3']) ? `${field}${operator}${value['3']}@${value['1']}@${value['2']}@${value['0']}` : '';
                break;
            case 'none':
                conditionQuery = `${field}${operator}`;
                break;
            default:
                conditionQuery = `${field}${operator}${value}`;
        }
        conditionQuery = conditionQuery || `${field}${operator}`;
    }

    return { conditionQuery: conditionQuery || false, breadcrumbItem }
}
