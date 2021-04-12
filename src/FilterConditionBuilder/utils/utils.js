import fetch from 'cross-fetch';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export const getTrendData = (item) => {
    let trendData = [];
    switch (item) {
        case 'dayofweek':
            trendData = moment.weekdays().map(day => ({ id: day.toLowerCase(), label: day, dropdown: 'value', type: 'trend_field', index: '2' }));
            break;
        case 'month':
            trendData = moment.months().map(month => ({ id: month.toLowerCase().slice(0, 3), label: month, dropdown: 'value', type: 'trend_field', index: '2' }));
            break;
        case 'quarter':
            for (let i = 1; i < 5; i++) {
                trendData.push({ id: `${i}`, label: `Quarter${i}`, dropdown: 'value', type: 'trend_field', index: '2' })
            }
            break;
        case 'year':
            for (let i = moment().year() - 20; i < moment().year() + 10; i++) {
                trendData.push({ id: `${i}`, label: i, dropdown: 'value', type: 'trend_field', index: '2' })
            }
            break;
        case 'week':
            for (let i = 0; i < 54; i++) {
                trendData.push({ id: `${i}`, label: `Week${i}`, dropdown: 'value', type: 'trend_field', index: '2' })
            }
            break;
        case 'hour':
            for (let i = 0; i < 24; i++) {
                if (i === 0) {
                    trendData.push({ id: `${i}`, label: 'Midnight hour', dropdown: 'value', type: 'trend_field', index: '2' })
                } else if (i < 12) {
                    trendData.push({ id: `${i}`, label: `${i} am hour`, dropdown: 'value', type: 'trend_field', index: '2' })
                } else if (i === 12) {
                    trendData.push({ id: `${i}`, label: 'Noon hour', dropdown: 'value', type: 'trend_field', index: '2' })
                } else {
                    trendData.push({ id: `${i}`, label: `${i - 12} pm hour`, dropdown: 'value', type: 'trend_field', index: '2' })
                }
            }
            break;
    }
    return trendData;
}

export const generateID = () => `f${(+new Date).toString(16)}`;

export const getOperators = (tableFields) => {
    let operators = [];
    for (let key in tableFields) {
        if (tableFields[key].operators) {
            let arr = tableFields[key].operators.map(el => el.operator)
            operators.push(...arr)
        }
    }
    operators = Array.from(new Set(operators));
    operators.sort((cur, next) => next.length - cur.length);
    return operators;

}



export const clone = item => JSON.parse(JSON.stringify(item));

export const _findOperator = (condition, operators) => {
    let operator = '';
    for (let i = 0; i < operators.length; i++) {
        if (condition.indexOf(operators[i]) > -1) {
            operator = operators[i];
            break;
        }
    }

    return operator;
}

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
            fetchReferenceData(tableFields[field].reference, queryParams)
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

export const fetchReferenceDataSuccessed = (state, result) => {
    const { referenceFieldData } = state;
    let valueVields = result.map(field => ({id: field.sys_id, label: field[referenceFieldData.field.reference_display_field], dropdown: "value"}));
}

const _getValue = (value, operator, editor) => {
    let resultValue;
    switch (editor) {
        case 'between_field':
            resultValue = {};
            value = value.split('@');
            value.forEach((val, index) => {
                let sliceFrom = val.indexOf("('") + 2;
                resultValue[index] = val.slice(sliceFrom, sliceFrom + 10);
            })
            break;
        case 'relative_field':
            resultValue = {};
            value = value.split('@');
            resultValue['0'] = value[0] === 'GT' ? 'after' : 'before';
            resultValue['1'] = value[3];
            resultValue['2'] = value[1];
            resultValue['3'] = value[2];
            break;
        case 'glide_duration':
            resultValue = {};
            value = value.slice(value.indexOf("('") + 2);
            resultValue['0'] = value.slice(0, value.indexOf(' '));
            value = value.slice(resultValue['0'].length + 1, value.indexOf("')")).split(':');
            value.forEach((val, index) => {
                resultValue[index + 1] = val;
            })
            break;
            case 'glide_date_choice':
                value = value.slice(value.indexOf("('") + 2);
                resultValue = value.slice(0, value.indexOf("'"));
                break;
            case 'trend_field':
                resultValue = {};
                resultValue['2'] = { label: value.slice(0, value.indexOf("@")) };
                value = value.slice(value.indexOf("('") + 1, value.indexOf("')") + 1).split(',');
                value = value.map(val => val.replace(/\'/g, ''));
                resultValue['0'] = value[2];
                resultValue['1'] = value[0];
                resultValue['2'].id = value[1];
                break;
            case 'glide_date_equivalent':
                resultValue = {};
                value = value.split('@');
                resultValue['0'] = value[1];
                resultValue['1'] = value[0];
                break;
            case 'glide_date_comparative':
                resultValue = {};
                value = value.split('@');
                resultValue['0'] = value[3];
                resultValue['1'] = value[1];
                resultValue['2'] = value[2];
                resultValue['3'] = value[0];
                break;
                default:
                    resultValue = value;
                }
                
                return resultValue;
            }
                                
                    
            
    export const test = async function({ condition, operators, tableFields, globalID, currentID }) {
        let operator = _findOperator(condition, operators);
        let lastTableFields;
        let field = '', value = '', editor = "", valueAdditionalData = [], fieldItems = [], fieldsDropdownData = [];
        let fieldsDataID = generateID();
        let referenceField = condition.slice(0, condition.indexOf(operator)).split(".");
        let fields = clone(referenceField);
        const isReferenceField = referenceField.length > 1;
        if (isReferenceField) {
            let dropdownFields = [{items: getDropdownFieldsItems({tableFields: tableFields, index: fieldsDataID, listIndex: 0})}];
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
                fieldsDataID = generateID();
                await fetchTableData(nextData.reference, queryParams)
                    .then(res => {
                        fieldsData = {...fieldsData, [fieldsDataID]: res.columns}
                        nextData = res.columns[key];
                        lastTableFields = res.columns;
                        dropdownFields.push({items: getDropdownFieldsItems({tableFields: Object.values(res.columns), index: fieldsDataID, listIndex: i})});
                        i++;
                    })
            }
            fieldsDropdownData = dropdownFields;
            let dataForFieldItems = fieldsDropdownData.map(field => field.items);
            // fieldItems = fields.map(fieldName => ({ ...dataForFieldItems.map(field => field.find(data => data.id === fieldName)), dropdownClick: false}));

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
            value = _getValue(value, operator, editor)
            fieldItems = {
                label: fieldItems.map(field => field.label).join(" . "),
                value: fieldItems.map(field => field.id).join("."),
                items: fieldItems
            }
            valueAdditionalData = editor === "trend_field" ? getTrendData(value['1']) : this.getValueAdditionalData({ lastTableFields, editor, field, globalID, currentID });

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
    export const parseConditionValue = function({ condition, operators, tableFields, globalID, currentID }) {
        let operator = _findOperator(condition, operators);
        let field = '', value = '', editor = "", valueAdditionalData = [], fieldItems = [], fieldsDropdownData = [];
        let fieldsDataID = generateID();
        if (!operator) {
            field = condition;
            operator = '';
        } else {
            field = condition.slice(0, condition.indexOf(operator));
            value = condition.slice(field.length + operator.length);
            editor = tableFields[field].operators.find(op => op.operator === operator).advancedEditor;
            valueAdditionalData = this.getValueAdditionalData({ tableFields, editor, field, globalID, currentID });
            value = _getValue(value, operator, editor);
        }
        let fields = field.split('.');
        fieldsDropdownData = getDropdownFieldsItems({ tableFields, index: fieldsDataID });
        fieldItems = fields.map(fieldName => ({ ...fieldsDropdownData.find(data => data.id === fieldName), listIndex: 0, dropdownClick: false }));
        fieldItems = {
            label: tableFields[field].label,
            value: field,
            items: fieldItems
        }
    let operatorsArray = tableFields[field].operators.map(operation => ({ id: operation.operator, label: operation.label, dropdown: 'operation' }));
    if (editor === 'trend_field') {
        valueAdditionalData = getTrendData(value['1']);
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
            let conditionOperatorLabel = operatorsArray.find(op => op.id === operator).label;
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

export const getDropdownFieldsItems = ({ tableFields, index, blockFields, allowFileds, listIndex }) => {
    let dropdownFields = [];
    let fieldsLabelCount = {};

    for (let key in tableFields) {
        fieldsLabelCount[tableFields[key].label]
            ? fieldsLabelCount[tableFields[key].label].push(tableFields[key].name)
            : fieldsLabelCount[tableFields[key].label] = [tableFields[key].name];

        if (tableFields[key].operators) {
            if (blockFields && blockFields.length) {
                !blockFields.find(name => tableFields[key].name === name) && dropdownFields.push({ id: tableFields[key].name, label: `${tableFields[key].label}`, dropdown: 'field', index, reference: `${tableFields[key].type === 'reference'}`, table: tableFields[key].reference || '' });
            } else if (allowFileds && allowFileds.length) {
                allowFileds.find(name => tableFields[key].name === name) && dropdownFields.push({ id: tableFields[key].name, label: `${tableFields[key].label}`, dropdown: 'field', index, reference: `${tableFields[key].type === 'reference'}`, table: tableFields[key].reference || '' });
            } else {
                dropdownFields.push({ id: tableFields[key].name, label: `${tableFields[key].label}`, dropdown: 'field', index, listIndex, reference: `${tableFields[key].type === 'reference'}`, table: tableFields[key].reference || '' });
            }

        }
    }
    dropdownFields.sort((cur, next) => cur.label.localeCompare(next.label));

    dropdownFields.forEach((field, index) => {
        if (fieldsLabelCount[field.label].length > 1) {
            dropdownFields[index].label = `${field.label} (${field.id})`;
            // if (listIndex) dropdownFields[index].listIndex = listIndex;
        }
    });

    return dropdownFields;
}

export const columnsObjToArr = ({columns}) => {
    const id = uuidv4().split("-").join("");
    return Object.values(columns).map(column => ({...column, id: `${column.name}${id}`, reference: column.reference || ""}))
}

export const fetchTableData = async (table, queryParams) => {
    const endpoint = `${window.location.origin}/api/now/ui/meta/${table}`; //dev78490.service-now.com/
    const query = queryParams ? prepareQueryParams(queryParams) : "";
    const url = `${endpoint}?${query}`
    const params = {
        method: "GET"
    }
    return await fetchRequest({url, params})
}


export const fetchReferenceData = async (table, queryParams) => {
    const endpoint = `${window.location.origin}/api/now/table/${table}`; //dev78490.service-now.com/

    const query = queryParams ? prepareQueryParams(queryParams) : "";
    const url = `${endpoint}?${query}`;
    const params = {
        method: "GET"
    }
    return await fetchRequest({url, params})
}

export const fetchRequest = async ({ url, params = {} }) => {
    let result;
    try {
        const response = await fetch(url, {
            ...params,
            credentials: 'same-origin',
            headers: {
                'content-type': "application/json",
                'X-Transaction-Source': window.transaction_source,
                'X-UserToken': window.g_ck
            },
        });
        const resultJson = await response.json();
        result = resultJson.result;
    } catch (e) {
        console.error(e)
    }
    return result;
}

export const prepareQueryParams = (obj) => Object.keys(obj)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
    .join('&');

export const fetchProjects = async () => {
    const endpoint = `${GLOBAL_CONSTANTS.API.PREFIX}record_information`;
    const queryParams = {
        table: GLOBAL_CONSTANTS.TABLES.CONTAINER,
        query: sysparm_query,
        sysparm_fields: 'type,state,short_description,start,end,opened_by,number,sys_id,assigned_to,watch_list'
    }
    const query = prepareQueryParams(queryParams);
    const url = `${endpoint}?${query}`;
    const params = {
        method: "GET",
    };

    return await fetchRequest({ url, params })
}