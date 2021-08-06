import { GENERAL_UTILS, DATA_UTILS } from './index';

export const CONDITION_OPTIONS_UTILS = {

  setConditionOptions({
    value, conditionOption, currentConditionID, globalConditionID,
  }) {
    const { conditionsArray } = this.state;

    const properCurrentConditionID = currentConditionID || this.state.currentConditionID;
    const properGlobalConditionID = globalConditionID || this.state.globalConditionID;
    const copyConditionArray = GENERAL_UTILS.clone(conditionsArray);
    const globalConditionInArrInd = copyConditionArray.findIndex((cond) => cond.id === properGlobalConditionID);
    const currentConditionInArrInd = copyConditionArray[globalConditionInArrInd].relatedConditions.findIndex((cond) => cond.id === properCurrentConditionID);
    let currentConditionInArr;
    let copyConditionOptions;
    if (currentConditionInArrInd > -1) {
      currentConditionInArr = copyConditionArray[globalConditionInArrInd].relatedConditions[currentConditionInArrInd];
      copyConditionOptions = { ...copyConditionArray[globalConditionInArrInd].relatedConditions[currentConditionInArrInd].conditionOptions };
    } else {
      copyConditionArray[globalConditionInArrInd].relatedConditions.forEach((cond, parentInd) => {
        cond.relatedConditions.forEach((cond, childInd) => {
          if (cond.id === properCurrentConditionID) {
            currentConditionInArr = copyConditionArray[globalConditionInArrInd].relatedConditions[parentInd].relatedConditions[childInd];
            copyConditionOptions = { ...cond.conditionOptions };
          }
        });
      });
    }
    switch (conditionOption) {
      case 'field':
        currentConditionInArr.conditionOptions = CONDITION_OPTIONS_UTILS.setConditionOptionsField({
          conditionOptions: copyConditionOptions,
          value,
          properCurrentConditionID,
          properGlobalConditionID,
        });
        break;
      case 'fieldsData':
        currentConditionInArr.conditionOptions = CONDITION_OPTIONS_UTILS.setConditionOptionsFieldData({
          conditionOptions: copyConditionOptions,
          value,
        });
        break;
      case 'operator':
        currentConditionInArr.conditionOptions = CONDITION_OPTIONS_UTILS.setConditionOptionsOperator({
          value,
          conditionOptions: copyConditionOptions,
          properCurrentConditionID,
          properGlobalConditionID,
        });
        break;
      case 'value':
        currentConditionInArr.conditionOptions = CONDITION_OPTIONS_UTILS.setConditionOptionsValue({
          value,
          conditionOptions: copyConditionOptions,
          conditionOption,
        });
        break;
      case 'valueAditionalData':
        currentConditionInArr.conditionOptions = CONDITION_OPTIONS_UTILS.setConditionOptionsValueAdditional({
          value,
          conditionOptions: copyConditionOptions,
        });
        break;
    }

    this.setState({ conditionsArray: copyConditionArray });
  },

  setConditionOptionsField({ conditionOptions, value }) {
    const { fieldsData } = conditionOptions;
    const currentFieldsData = fieldsData[value.items[value.items.length - 1].index];
    const currentValue = value.items[value.items.length - 1].id;
    const currentValueIndex = conditionOptions.fieldsDropdownData.findIndex((data) => data.items[0].index === value.items[value.items.length - 1].index);
    let deletedFieldsData = conditionOptions.fieldsDropdownData.splice(currentValueIndex + 1);
    const operatorsArray = currentFieldsData[currentValue].operators.map((operation) => ({
      id: operation.operator,
      label: operation.label,
      dropdown: 'operation',
      editor: operation.advancedEditor,
    }));
    let copyConditionOptions = {
      ...conditionOptions,
      field: value.value,
      fieldItems: value,
      operator: { operator: operatorsArray[0].id, editor: operatorsArray[0].editor },
      value: '',
      operatorsArray,
      activeFieldsData: { ...currentFieldsData },
      activeField: currentValue,
    };

    deletedFieldsData = deletedFieldsData.map((data) => data.items[0].index);
    deletedFieldsData.forEach((key) => delete conditionOptions.fieldsData[key]);
    copyConditionOptions = CONDITION_OPTIONS_UTILS.setConditionOptionsOperator({
      value: {
        operator: operatorsArray[0].id,
        editor: operatorsArray[0].editor,
      },
      conditionOptions: copyConditionOptions,
    });

    return copyConditionOptions;
  },

  setConditionOptionsFieldData({ conditionOptions, value }) {
    const fieldsDataID = GENERAL_UTILS.generateID();
    const newFieldsDropdownData = DATA_UTILS.getDropdownFieldsItems({ tableFields: value.result, index: fieldsDataID });
    if (value.listIndex < conditionOptions.fieldsDropdownData.length - 1) {
      let deletedFieldsData = conditionOptions.fieldsDropdownData.splice(value.listIndex + 1);
      deletedFieldsData = deletedFieldsData.map((data) => data.items[0].index);
      deletedFieldsData.forEach((key) => delete conditionOptions.fieldsData[key]);
    }
    conditionOptions.fieldsDropdownData.push({ items: newFieldsDropdownData });
    conditionOptions.fieldsData[fieldsDataID] = value.result;
    conditionOptions.fieldItems = value.selectedItems;

    return conditionOptions;
  },

  setConditionOptionsOperator({
    value, conditionOptions, currentConditionID, globalConditionID,
  }) {
    const { activeField, activeFieldsData } = conditionOptions;
    let valueAdditionalData = [];
    valueAdditionalData = DATA_UTILS.getValueAdditionalData({
      state: this.state, tableFields: activeFieldsData, editor: value.editor, field: activeField, currentID: currentConditionID, globalID: globalConditionID,
    });
    conditionOptions = {
      ...conditionOptions,
      operator: value,
      value: '',
      valueAdditionalData,
    };

    return conditionOptions;
  },

  setConditionOptionsValue({ value, conditionOptions, conditionOption }) {
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
        if (!conditionOptions.value) conditionOptions.value = {};
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

  setConditionOptionsValueAdditional({ value, conditionOptions }) {
    conditionOptions.valueAdditionalData = value;

    return conditionOptions;
  },
};
