export const QUERY_UTILS = {
    parseConditionValue: ({ condition, operators, tableFields, globalID, currentID }) => {
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
    },
    parseConditionValueWithRef: async ({ condition, operators, tableFields, globalID, currentID }) => {
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
    },

};