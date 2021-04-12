"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATA_UTILS = void 0;

var _requestUtils = require("./_requestUtils");

var _this = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var DATA_UTILS = {
  getDropdownFieldsItems: function getDropdownFieldsItems(_ref) {
    var tableFields = _ref.tableFields,
        index = _ref.index,
        blockFields = _ref.blockFields,
        allowFileds = _ref.allowFileds,
        listIndex = _ref.listIndex;
    var dropdownFields = [];
    var fieldsLabelCount = {};

    var _loop = function _loop(key) {
      fieldsLabelCount[tableFields[key].label] ? fieldsLabelCount[tableFields[key].label].push(tableFields[key].name) : fieldsLabelCount[tableFields[key].label] = [tableFields[key].name];

      if (tableFields[key].operators) {
        if (blockFields && blockFields.length) {
          !blockFields.find(function (name) {
            return tableFields[key].name === name;
          }) && dropdownFields.push({
            id: tableFields[key].name,
            label: "".concat(tableFields[key].label),
            dropdown: 'field',
            index: index,
            reference: "".concat(tableFields[key].type === 'reference'),
            table: tableFields[key].reference || ''
          });
        } else if (allowFileds && allowFileds.length) {
          allowFileds.find(function (name) {
            return tableFields[key].name === name;
          }) && dropdownFields.push({
            id: tableFields[key].name,
            label: "".concat(tableFields[key].label),
            dropdown: 'field',
            index: index,
            reference: "".concat(tableFields[key].type === 'reference'),
            table: tableFields[key].reference || ''
          });
        } else {
          dropdownFields.push({
            id: tableFields[key].name,
            label: "".concat(tableFields[key].label),
            dropdown: 'field',
            index: index,
            listIndex: listIndex,
            reference: "".concat(tableFields[key].type === 'reference'),
            table: tableFields[key].reference || ''
          });
        }
      }
    };

    for (var key in tableFields) {
      _loop(key);
    }

    dropdownFields.sort(function (cur, next) {
      return cur.label.localeCompare(next.label);
    });
    dropdownFields.forEach(function (field, index) {
      if (fieldsLabelCount[field.label].length > 1) {
        dropdownFields[index].label = "".concat(field.label, " (").concat(field.id, ")");
      }
    });
    return dropdownFields;
  },
  getValueAdditionalData: function getValueAdditionalData(_ref2) {
    var tableFields = _ref2.tableFields,
        editor = _ref2.editor,
        field = _ref2.field,
        globalID = _ref2.globalID,
        currentID = _ref2.currentID;
    var valueAdditionalData = [];

    switch (editor) {
      case 'choice_field_names':
      case 'glide_date_equivalent':
      case 'glide_date_comparative':
        for (var key in tableFields) {
          if (tableFields[key].type === tableFields[field].type && JSON.stringify(tableFields[key]) !== JSON.stringify(tableFields[field])) {
            if (editor === 'glide_date_equivalent') {
              valueAdditionalData.push({
                id: tableFields[key].name,
                label: tableFields[key].label,
                dropdown: 'value',
                type: 'glide_date_equivalent',
                index: '1'
              });
            } else if (editor === 'glide_date_comparative') {
              valueAdditionalData.push({
                id: tableFields[key].name,
                label: tableFields[key].label,
                dropdown: 'value',
                type: 'glide_date_comparative',
                index: '3'
              });
            } else {
              valueAdditionalData.push({
                id: tableFields[key].name,
                label: tableFields[key].label,
                dropdown: 'value'
              });
            }
          }
        }

        break;

      case 'choice':
      case 'choice_multiple':
        valueAdditionalData = tableFields[field].choices.map(function (choice) {
          return {
            id: choice.value,
            label: choice.label,
            dropdown: 'value'
          };
        });
        break;

      case 'choice_dynamic':
        valueAdditionalData = tableFields[field].dynamic_choices.map(function (choice) {
          return {
            id: choice.value,
            label: choice.label,
            dropdown: 'value'
          };
        });
        break;

      case 'reference':
        var queryParams = {
          sysparm_fields: "".concat(tableFields[field].reference_display_field, ",sys_id"),
          sysparm_query: "nameISNOTEMPTY"
        };

        _requestUtils.REQUEST_UTILS.fetchReferenceData({
          table: tableFields[field].reference,
          queryParams: queryParams
        }).then(function (res) {
          _this.fetchReferenceDataSuccessed({
            result: result,
            field: field,
            currentID: currentID,
            globalID: globalID
          });
        });

        _this.setState({
          referenceFieldData: {
            field: tableFields[field],
            currentConditionID: currentID,
            globalConditionID: globalID
          }
        });

        break;
    }

    return valueAdditionalData;
  },
  getOperators: function getOperators(_ref3) {
    var tableFields = _ref3.tableFields;
    var operators = [];

    for (var key in tableFields) {
      if (tableFields[key].operators) {
        var _operators;

        var arr = tableFields[key].operators.map(function (el) {
          return el.operator;
        });

        (_operators = operators).push.apply(_operators, _toConsumableArray(arr));
      }
    }

    operators = Array.from(new Set(operators));
    operators.sort(function (cur, next) {
      return next.length - cur.length;
    });
    return operators;
  },
  getTrendData: function getTrendData(item) {
    var trendData = [];

    switch (item) {
      case 'dayofweek':
        trendData = moment.weekdays().map(function (day) {
          return {
            id: day.toLowerCase(),
            label: day,
            dropdown: 'value',
            type: 'trend_field',
            index: '2'
          };
        });
        break;

      case 'month':
        trendData = moment.months().map(function (month) {
          return {
            id: month.toLowerCase().slice(0, 3),
            label: month,
            dropdown: 'value',
            type: 'trend_field',
            index: '2'
          };
        });
        break;

      case 'quarter':
        for (var i = 1; i < 5; i++) {
          trendData.push({
            id: "".concat(i),
            label: "Quarter".concat(i),
            dropdown: 'value',
            type: 'trend_field',
            index: '2'
          });
        }

        break;

      case 'year':
        for (var _i = moment().year() - 20; _i < moment().year() + 10; _i++) {
          trendData.push({
            id: "".concat(_i),
            label: _i,
            dropdown: 'value',
            type: 'trend_field',
            index: '2'
          });
        }

        break;

      case 'week':
        for (var _i2 = 0; _i2 < 54; _i2++) {
          trendData.push({
            id: "".concat(_i2),
            label: "Week".concat(_i2),
            dropdown: 'value',
            type: 'trend_field',
            index: '2'
          });
        }

        break;

      case 'hour':
        for (var _i3 = 0; _i3 < 24; _i3++) {
          if (_i3 === 0) {
            trendData.push({
              id: "".concat(_i3),
              label: 'Midnight hour',
              dropdown: 'value',
              type: 'trend_field',
              index: '2'
            });
          } else if (_i3 < 12) {
            trendData.push({
              id: "".concat(_i3),
              label: "".concat(_i3, " am hour"),
              dropdown: 'value',
              type: 'trend_field',
              index: '2'
            });
          } else if (_i3 === 12) {
            trendData.push({
              id: "".concat(_i3),
              label: 'Noon hour',
              dropdown: 'value',
              type: 'trend_field',
              index: '2'
            });
          } else {
            trendData.push({
              id: "".concat(_i3),
              label: "".concat(_i3 - 12, " pm hour"),
              dropdown: 'value',
              type: 'trend_field',
              index: '2'
            });
          }
        }

        break;
    }

    return trendData;
  }
};
exports.DATA_UTILS = DATA_UTILS;