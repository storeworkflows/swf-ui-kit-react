import { GENERAL_UTILS, DATA_UTILS } from "./index";

export const CONDITION_OPTIONS_UTILS = {

    setConditionOptions: function({value, conditionOption, currentConditionID, globalConditionID, conditionsArray}) {
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
                currentConditionInArr.conditionOptions = this.setConditionOptionsField({conditionOptions: copyConditionOptions, value});
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
        return copyConditionArray;
    },

    setConditionOptionsField: function({conditionOptions, value}) {
        const { fieldsData } = conditionOptions;
        let currentFieldsData = fieldsData[value.items[value.items.length - 1].index];
        let currentValue = value.items[value.items.length - 1].id;
        let currentValueIndex = conditionOptions.fieldsDropdownData.findIndex(data => data.items[0].index === value.items[value.items.length - 1].index);
        let deletedFieldsData = conditionOptions.fieldsDropdownData.splice(currentValueIndex + 1);
        deletedFieldsData = deletedFieldsData.map(data => data.items[0].index);
        deletedFieldsData.forEach(key => delete conditionOptions.fieldsData[key]);
        let operatorsArray = currentFieldsData[currentValue].operators.map(operation => ({ id: operation.operator, label: operation.label, dropdown: 'operation', editor: operation.advancedEditor }));

        return conditionOptions = {
            ...conditionOptions,
            field: value.value,
            fieldItems: value,
            operator: { operator: operatorsArray[0].id, editor: operatorsArray[0].editor },
            value: '',
            operatorsArray,
            activeFieldsData: { ...currentFieldsData },
            activeField: currentValue
        }
    },

    setConditionOptionsFieldData: function({conditionOptions, value}) {
        const fieldsDataID = GENERAL_UTILS.generateID();
        const newFieldsDropdownData = DATA_UTILS.getDropdownFieldsItems({tableFields: value.result, index: fieldsDataID});
        if (value.listIndex < conditionOptions.fieldsDropdownData.length - 1) {
            let deletedFieldsData = conditionOptions.fieldsDropdownData.splice(value.listIndex + 1);
            deletedFieldsData = deletedFieldsData.map(data => data.items[0].index);
            deletedFieldsData.forEach(key => delete conditionOptions.fieldsData[key]);
        }
        conditionOptions.fieldsDropdownData.push({ items: newFieldsDropdownData });
        conditionOptions.fieldsData[fieldsDataID] = value.result;
        conditionOptions.fieldItems = value.selectedItems;

        return conditionOptions;
    },

    setConditionOptionsOperator: function({value, conditionOptions, currentConditionID, globalConditionID}) {
        const { activeField, activeFieldsData } = conditionOptions;
        let valueAdditionalData = [];
        valueAdditionalData = this.getValueAdditionalData({ state: this.state, tableFields: activeFieldsData, editor: value.editor, field: activeField, currentID: currentConditionID, globalID: globalConditionID});
        conditionOptions = {
            ...conditionOptions,
            operator: value,
            value: "",
            valueAdditionalData
        };

        return conditionOptions;
    },

    setConditionOptionsValue: function({value, conditionOptions, conditionOption}) {
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
    },

    setConditionOptionsValueAdditional: function({ value, conditionOptions}) {
        conditionOptions.valueAdditionalData = value;

        return conditionOptions;
    }
}