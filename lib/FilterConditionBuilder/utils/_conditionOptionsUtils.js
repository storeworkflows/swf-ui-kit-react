Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.CONDITION_OPTIONS_UTILS = void 0;

const _index = require('./index');

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach((key) => { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach((key) => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value, enumerable: true, configurable: true, writable: true,
    });
  } else { obj[key] = value; } return obj;
}

var CONDITION_OPTIONS_UTILS = {
  setConditionOptions: function setConditionOptions(_ref) {
    const { value } = _ref;
    const { conditionOption } = _ref;
    const { currentConditionID } = _ref;
    const { globalConditionID } = _ref;
    const { conditionsArray } = this.state;
    const properCurrentConditionID = currentConditionID || this.state.currentConditionID;
    const properGlobalConditionID = globalConditionID || this.state.globalConditionID;

    const copyConditionArray = _index.GENERAL_UTILS.clone(conditionsArray);

    const globalConditionInArrInd = copyConditionArray.findIndex((cond) => cond.id === properGlobalConditionID);
    const currentConditionInArrInd = copyConditionArray[globalConditionInArrInd].relatedConditions.findIndex((cond) => cond.id === properCurrentConditionID);
    let currentConditionInArr;
    let copyConditionOptions;

    if (currentConditionInArrInd > -1) {
      currentConditionInArr = copyConditionArray[globalConditionInArrInd].relatedConditions[currentConditionInArrInd];
      copyConditionOptions = _objectSpread({}, copyConditionArray[globalConditionInArrInd].relatedConditions[currentConditionInArrInd].conditionOptions);
    } else {
      copyConditionArray[globalConditionInArrInd].relatedConditions.forEach((cond, parentInd) => {
        cond.relatedConditions.forEach((cond, childInd) => {
          if (cond.id === properCurrentConditionID) {
            currentConditionInArr = copyConditionArray[globalConditionInArrInd].relatedConditions[parentInd].relatedConditions[childInd];
            copyConditionOptions = _objectSpread({}, cond.conditionOptions);
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

    this.setState({
      conditionsArray: copyConditionArray,
    });
  },
  setConditionOptionsField: function setConditionOptionsField(_ref2) {
    const { conditionOptions } = _ref2;
    const { value } = _ref2;
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

    let copyConditionOptions = _objectSpread(_objectSpread({}, conditionOptions), {}, {
      field: value.value,
      fieldItems: value,
      operator: {
        operator: operatorsArray[0].id,
        editor: operatorsArray[0].editor,
      },
      value: '',
      operatorsArray,
      activeFieldsData: _objectSpread({}, currentFieldsData),
      activeField: currentValue,
    });

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
  setConditionOptionsFieldData: function setConditionOptionsFieldData(_ref3) {
    const { conditionOptions } = _ref3;
    const { value } = _ref3;

    const fieldsDataID = _index.GENERAL_UTILS.generateID();

    const newFieldsDropdownData = _index.DATA_UTILS.getDropdownFieldsItems({
      tableFields: value.result,
      index: fieldsDataID,
    });

    if (value.listIndex < conditionOptions.fieldsDropdownData.length - 1) {
      let deletedFieldsData = conditionOptions.fieldsDropdownData.splice(value.listIndex + 1);
      deletedFieldsData = deletedFieldsData.map((data) => data.items[0].index);
      deletedFieldsData.forEach((key) => delete conditionOptions.fieldsData[key]);
    }

    conditionOptions.fieldsDropdownData.push({
      items: newFieldsDropdownData,
    });
    conditionOptions.fieldsData[fieldsDataID] = value.result;
    conditionOptions.fieldItems = value.selectedItems;
    return conditionOptions;
  },
  setConditionOptionsOperator: function setConditionOptionsOperator(_ref4) {
    const { value } = _ref4;
    let { conditionOptions } = _ref4;
    const { currentConditionID } = _ref4;
    const { globalConditionID } = _ref4;
    const _conditionOptions = conditionOptions;
    const { activeField } = _conditionOptions;
    const { activeFieldsData } = _conditionOptions;
    let valueAdditionalData = [];
    valueAdditionalData = _index.DATA_UTILS.getValueAdditionalData({
      state: this.state,
      tableFields: activeFieldsData,
      editor: value.editor,
      field: activeField,
      currentID: currentConditionID,
      globalID: globalConditionID,
    });
    conditionOptions = _objectSpread(_objectSpread({}, conditionOptions), {}, {
      operator: value,
      value: '',
      valueAdditionalData,
    });
    return conditionOptions;
  },
  setConditionOptionsValue: function setConditionOptionsValue(_ref5) {
    const { value } = _ref5;
    const { conditionOptions } = _ref5;
    const { conditionOption } = _ref5;
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
          conditionOptions.valueAdditionalData = _index.DATA_UTILS.getTrendData(value.value);
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
  setConditionOptionsValueAdditional: function setConditionOptionsValueAdditional(_ref6) {
    const { value } = _ref6;
    const { conditionOptions } = _ref6;
    conditionOptions.valueAdditionalData = value;
    return conditionOptions;
  },
};
exports.CONDITION_OPTIONS_UTILS = CONDITION_OPTIONS_UTILS;
