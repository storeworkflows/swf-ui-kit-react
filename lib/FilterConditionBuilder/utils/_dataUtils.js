Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.DATA_UTILS = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

const DATA_UTILS = {
  getDropdownFieldsItems: function getDropdownFieldsItems(_ref) {
    const { tableFields } = _ref;
    const { index } = _ref;
    const { blockFields } = _ref;
    const { allowFileds } = _ref;
    const { listIndex } = _ref;
    const dropdownFields = [];
    const fieldsLabelCount = {};

    const _loop = function _loop(key) {
      fieldsLabelCount[tableFields[key].label] ? fieldsLabelCount[tableFields[key].label].push(tableFields[key].name) : fieldsLabelCount[tableFields[key].label] = [tableFields[key].name];

      if (tableFields[key].operators) {
        if (blockFields && blockFields.length) {
          !blockFields.find((name) => tableFields[key].name === name) && dropdownFields.push({
            id: tableFields[key].name,
            label: ''.concat(tableFields[key].label),
            dropdown: 'field',
            index,
            reference: ''.concat(tableFields[key].type === 'reference'),
            table: tableFields[key].reference,
            firstOperator: {
              operator: tableFields[key].operators[0].operator,
              editor: tableFields[key].operators[0].advancedEditor,
            } || '',
          });
        } else if (allowFileds && allowFileds.length) {
          allowFileds.find((name) => tableFields[key].name === name) && dropdownFields.push({
            id: tableFields[key].name,
            label: ''.concat(tableFields[key].label),
            dropdown: 'field',
            index,
            reference: ''.concat(tableFields[key].type === 'reference'),
            table: tableFields[key].reference,
            firstOperator: {
              operator: tableFields[key].operators[0].operator,
              editor: tableFields[key].operators[0].advancedEditor,
            } || '',
          });
        } else {
          dropdownFields.push({
            id: tableFields[key].name,
            label: ''.concat(tableFields[key].label),
            dropdown: 'field',
            index,
            listIndex,
            reference: ''.concat(tableFields[key].type === 'reference'),
            table: tableFields[key].reference,
            firstOperator: {
              operator: tableFields[key].operators[0].operator,
              editor: tableFields[key].operators[0].advancedEditor,
            } || '',
          });
        }
      }
    };

    for (const key in tableFields) {
      _loop(key);
    }

    dropdownFields.sort((cur, next) => cur.label.localeCompare(next.label));
    dropdownFields.forEach((field, index) => {
      if (fieldsLabelCount[field.label].length > 1) {
        dropdownFields[index].label = ''.concat(field.label, ' (').concat(field.id, ')');
      }
    });
    return dropdownFields;
  },
  getValueAdditionalData: function getValueAdditionalData(_ref2) {
    const { tableFields } = _ref2;
    const { editor } = _ref2;
    const { field } = _ref2;
    let valueAdditionalData = [];

    switch (editor) {
      case 'choice_field_names':
      case 'glide_date_equivalent':
      case 'glide_date_comparative':
        for (const key in tableFields) {
          if (tableFields[key].type === tableFields[field].type && JSON.stringify(tableFields[key]) !== JSON.stringify(tableFields[field])) {
            if (editor === 'glide_date_equivalent') {
              valueAdditionalData.push({
                id: tableFields[key].name,
                label: tableFields[key].label,
                dropdown: 'value',
                type: 'glide_date_equivalent',
                index: '1',
              });
            } else if (editor === 'glide_date_comparative') {
              valueAdditionalData.push({
                id: tableFields[key].name,
                label: tableFields[key].label,
                dropdown: 'value',
                type: 'glide_date_comparative',
                index: '3',
              });
            } else {
              valueAdditionalData.push({
                id: tableFields[key].name,
                label: tableFields[key].label,
                dropdown: 'value',
              });
            }
          }
        }

        break;

      case 'choice':
      case 'choice_multiple':
        valueAdditionalData = tableFields[field].choices ? tableFields[field].choices.map((choice) => ({
          id: choice.value,
          label: choice.label,
          dropdown: 'value',
        })) : [];
        break;

      case 'choice_dynamic':
        valueAdditionalData = tableFields[field].dynamic_choices.map((choice) => ({
          id: choice.value,
          label: choice.label,
          dropdown: 'value',
        }));
        break;
    }

    return valueAdditionalData;
  },
  getOperators: function getOperators(_ref3) {
    const { tableFields } = _ref3;
    let operators = [];

    for (const key in tableFields) {
      if (tableFields[key].operators) {
        var _operators;

        const arr = tableFields[key].operators.map((el) => el.operator);

        (_operators = operators).push.apply(_operators, _toConsumableArray(arr));
      }
    }

    operators = Array.from(new Set(operators));
    operators.sort((cur, next) => next.length - cur.length);
    return operators;
  },
  getTrendData: function getTrendData(item) {
    let trendData = [];

    switch (item) {
      case 'dayofweek':
        trendData = moment.weekdays().map((day) => ({
          id: day.toLowerCase(),
          label: day,
          dropdown: 'value',
          type: 'trend_field',
          index: '2',
        }));
        break;

      case 'month':
        trendData = moment.months().map((month) => ({
          id: month.toLowerCase().slice(0, 3),
          label: month,
          dropdown: 'value',
          type: 'trend_field',
          index: '2',
        }));
        break;

      case 'quarter':
        for (let i = 1; i < 5; i++) {
          trendData.push({
            id: ''.concat(i),
            label: 'Quarter'.concat(i),
            dropdown: 'value',
            type: 'trend_field',
            index: '2',
          });
        }

        break;

      case 'year':
        for (let _i = moment().year() - 20; _i < moment().year() + 10; _i++) {
          trendData.push({
            id: ''.concat(_i),
            label: _i,
            dropdown: 'value',
            type: 'trend_field',
            index: '2',
          });
        }

        break;

      case 'week':
        for (let _i2 = 0; _i2 < 54; _i2++) {
          trendData.push({
            id: ''.concat(_i2),
            label: 'Week'.concat(_i2),
            dropdown: 'value',
            type: 'trend_field',
            index: '2',
          });
        }

        break;

      case 'hour':
        for (let _i3 = 0; _i3 < 24; _i3++) {
          if (_i3 === 0) {
            trendData.push({
              id: ''.concat(_i3),
              label: 'Midnight hour',
              dropdown: 'value',
              type: 'trend_field',
              index: '2',
            });
          } else if (_i3 < 12) {
            trendData.push({
              id: ''.concat(_i3),
              label: ''.concat(_i3, ' am hour'),
              dropdown: 'value',
              type: 'trend_field',
              index: '2',
            });
          } else if (_i3 === 12) {
            trendData.push({
              id: ''.concat(_i3),
              label: 'Noon hour',
              dropdown: 'value',
              type: 'trend_field',
              index: '2',
            });
          } else {
            trendData.push({
              id: ''.concat(_i3),
              label: ''.concat(_i3 - 12, ' pm hour'),
              dropdown: 'value',
              type: 'trend_field',
              index: '2',
            });
          }
        }

        break;
    }

    return trendData;
  },
  getValue: function getValue(_ref4) {
    let { value } = _ref4;
    const { editor } = _ref4;
    let resultValue;

    switch (editor) {
      case 'between_field':
        resultValue = {};
        value = value.split('@');
        value.forEach((val, index) => {
          const sliceFrom = val.indexOf("('") + 2;
          resultValue[index] = val.slice(sliceFrom, sliceFrom + 10);
        });
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
        });
        break;

      case 'glide_date_choice':
        value = value.slice(value.indexOf("('") + 2);
        resultValue = value.slice(0, value.indexOf("'"));
        break;

      case 'trend_field':
        resultValue = {};
        resultValue['2'] = {
          label: value.slice(0, value.indexOf('@')),
        };
        value = value.slice(value.indexOf("('") + 1, value.indexOf("')") + 1).split(',');
        value = value.map((val) => val.replace(/\'/g, ''));
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
};
exports.DATA_UTILS = DATA_UTILS;
