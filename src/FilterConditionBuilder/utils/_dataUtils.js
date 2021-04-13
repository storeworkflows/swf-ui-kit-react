import { REQUEST_UTILS } from "./_requestUtils";

export const DATA_UTILS = {
    getDropdownFieldsItems: ({ tableFields, index, blockFields, allowFileds, listIndex }) => {
        let dropdownFields = [];
        let fieldsLabelCount = {};

        for (let key in tableFields) {
            fieldsLabelCount[tableFields[key].label]
                ? fieldsLabelCount[tableFields[key].label].push(tableFields[key].name)
                : fieldsLabelCount[tableFields[key].label] = [tableFields[key].name];

            if (tableFields[key].operators) {
                if (blockFields && blockFields.length) {
                    !blockFields.find(name => tableFields[key].name === name) && dropdownFields.push({ id: tableFields[key].name, label: `${tableFields[key].label}`, dropdown: 'field', index, reference: `${tableFields[key].type === 'reference'}`, table: tableFields[key].reference, firstOperator:  {operator: tableFields[key].operators[0].operator, editor: tableFields[key].operators[0].advancedEditor} || '' });
                } else if (allowFileds && allowFileds.length) {
                    allowFileds.find(name => tableFields[key].name === name) && dropdownFields.push({ id: tableFields[key].name, label: `${tableFields[key].label}`, dropdown: 'field', index, reference: `${tableFields[key].type === 'reference'}`, table: tableFields[key].reference, firstOperator:  {operator: tableFields[key].operators[0].operator, editor: tableFields[key].operators[0].advancedEditor} || '' });
                } else {
                    dropdownFields.push({ id: tableFields[key].name, label: `${tableFields[key].label}`, dropdown: 'field', index, listIndex, reference: `${tableFields[key].type === 'reference'}`, table: tableFields[key].reference, firstOperator:  {operator: tableFields[key].operators[0].operator, editor: tableFields[key].operators[0].advancedEditor} || '' });
                }

            }
        }
        dropdownFields.sort((cur, next) => cur.label.localeCompare(next.label));

        dropdownFields.forEach((field, index) => {
            if (fieldsLabelCount[field.label].length > 1) {
                dropdownFields[index].label = `${field.label} (${field.id})`;
            }
        });
        return dropdownFields;
    },
    getValueAdditionalData: ({ tableFields, editor, field, globalID, currentID }) => {
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
                        this.fetchReferenceDataSuccessed({result, field, currentID, globalID})
                    })
                this.setState({referenceFieldData: {
                    field: tableFields[field],
                    currentConditionID: currentID,
                    globalConditionID: globalID
                }})
                break;
        }

        return valueAdditionalData;
    },
    getOperators: ({tableFields}) => {
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
    },
    getTrendData: (item) => {
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
}