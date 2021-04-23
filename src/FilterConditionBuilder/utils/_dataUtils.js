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
    getValueAdditionalData: ({ tableFields, editor, field }) => {
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
                valueAdditionalData =  tableFields[field].choices ? tableFields[field].choices.map(choice => ({ id: choice.value, label: choice.label, dropdown: 'value' })) : [];
                break;
            case 'choice_dynamic':
                valueAdditionalData = tableFields[field].dynamic_choices.map(choice => ({ id: choice.value, label: choice.label, dropdown: 'value' }));
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
    },
    getValue: ({value, editor}) => {
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
    },
    
}