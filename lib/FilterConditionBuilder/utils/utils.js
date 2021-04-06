"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchProjects = exports.prepareQueryParams = exports.fetchRequest = exports.fetchReferenceData = exports.fetchTableData = exports.columnsObjToArr = exports.getDropdownFieldsItems = exports.generateCurrentConditionQuery = exports.parseConditionValue = exports.fetchReferenceDataSuccessed = exports.getValueAdditionalData = exports.clone = exports.getOperators = exports.generateID = exports.getTrendData = void 0;

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

var _moment = _interopRequireDefault(require("moment"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getTrendData = function getTrendData(item) {
  var trendData = [];

  switch (item) {
    case 'dayofweek':
      trendData = _moment["default"].weekdays().map(function (day) {
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
      trendData = _moment["default"].months().map(function (month) {
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
      for (var _i = (0, _moment["default"])().year() - 20; _i < (0, _moment["default"])().year() + 10; _i++) {
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
};

exports.getTrendData = getTrendData;

var generateID = function generateID() {
  return "f".concat((+new Date()).toString(16));
};

exports.generateID = generateID;

var getOperators = function getOperators(tableFields) {
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
};

exports.getOperators = getOperators;

var clone = function clone(item) {
  return JSON.parse(JSON.stringify(item));
};

exports.clone = clone;

var _findOperator = function _findOperator(condition, operators) {
  var operator = '';

  for (var i = 0; i < operators.length; i++) {
    if (condition.indexOf(operators[i]) > -1) {
      operator = operators[i];
      break;
    }
  }

  return operator;
};

var getValueAdditionalData = function getValueAdditionalData(_ref) {
  var _this = this;

  var tableFields = _ref.tableFields,
      editor = _ref.editor,
      field = _ref.field,
      globalID = _ref.globalID,
      currentID = _ref.currentID;
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
      fetchReferenceData(tableFields[field].reference, queryParams).then(function (res) {
        _this.fetchReferenceDataSuccessed(res);
      });
      this.setState({
        referenceFieldData: {
          field: tableFields[field],
          currentConditionID: currentID,
          globalConditionID: globalID
        }
      });
      break;
  }

  return valueAdditionalData;
};

exports.getValueAdditionalData = getValueAdditionalData;

var fetchReferenceDataSuccessed = function fetchReferenceDataSuccessed(state, result) {
  var referenceFieldData = state.referenceFieldData; // console.log(referenceFieldData);

  var valueVields = result.map(function (field) {
    return {
      id: field.sys_id,
      label: field[referenceFieldData.field.reference_display_field],
      dropdown: "value"
    };
  });
};

exports.fetchReferenceDataSuccessed = fetchReferenceDataSuccessed;

var _getValue = function _getValue(value, operator, editor) {
  var resultValue;

  switch (editor) {
    case 'between_field':
      resultValue = {};
      value = value.split('@');
      value.forEach(function (val, index) {
        var sliceFrom = val.indexOf("('") + 2;
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
      value.forEach(function (val, index) {
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
        label: value.slice(0, value.indexOf("@"))
      };
      value = value.slice(value.indexOf("('") + 1, value.indexOf("')") + 1).split(',');
      value = value.map(function (val) {
        return val.replace(/\'/g, '');
      });
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
};

var parseConditionValue = function parseConditionValue(_ref2) {
  var condition = _ref2.condition,
      operators = _ref2.operators,
      tableFields = _ref2.tableFields,
      globalID = _ref2.globalID,
      currentID = _ref2.currentID;

  var operator = _findOperator(condition, operators);

  var field = '',
      value = '',
      editor = "",
      valueAdditionalData = [],
      fieldItems = [],
      fieldsDropdownData = []; // if (!!operator) {
  //     const referenceField = condition.slice(0, condition.indexOf(operator)).split(".");
  //     const isReferenceField = referenceField.length > 1;
  //     const queryParams = {
  //         sysparm_operators: true,
  //         sysparm_get_extended_tables: true,
  //         sysparm_keywords: true
  //     };
  //     fetchTableData(referenceField[1], queryParams)
  //     .then(res => console.log(res))
  // }

  var fieldsDataID = generateID();

  if (!operator) {
    field = condition;
    operator = '';
  } else {
    field = condition.slice(0, condition.indexOf(operator));
    value = condition.slice(field.length + operator.length);
    editor = tableFields[field].operators.find(function (op) {
      return op.operator === operator;
    }).advancedEditor;
    valueAdditionalData = this.getValueAdditionalData({
      tableFields: tableFields,
      editor: editor,
      field: field,
      globalID: globalID,
      currentID: currentID
    });
    value = _getValue(value, operator, editor);
  }

  var fields = field.split('.');
  fieldsDropdownData = getDropdownFieldsItems({
    tableFields: tableFields,
    index: fieldsDataID
  });
  fieldItems = fields.map(function (fieldName) {
    return _objectSpread(_objectSpread({}, fieldsDropdownData.find(function (data) {
      return data.id === fieldName;
    })), {}, {
      listIndex: 0,
      dropdownClick: false
    });
  });
  fieldItems = {
    label: tableFields[field].label,
    value: field,
    items: fieldItems
  };
  var operatorsArray = tableFields[field].operators.map(function (operation) {
    return {
      id: operation.operator,
      label: operation.label,
      dropdown: 'operation'
    };
  });

  if (editor === 'trend_field') {
    valueAdditionalData = getTrendData(value['1']);
  }

  return {
    field: field,
    operator: {
      operator: operator,
      editor: editor
    },
    value: value,
    operatorsArray: operatorsArray,
    valueAdditionalData: valueAdditionalData,
    fieldItems: fieldItems,
    fieldsData: _defineProperty({}, fieldsDataID, tableFields),
    fieldsDropdownData: [{
      items: fieldsDropdownData
    }],
    activeFieldsData: tableFields,
    activeField: fieldItems.items[fieldItems.items.length - 1].id
  };
};

exports.parseConditionValue = parseConditionValue;

var generateCurrentConditionQuery = function generateCurrentConditionQuery(conditionData, operation, breadcrumbItem) {
  var _conditionData$condit = conditionData.conditionOptions,
      field = _conditionData$condit.field,
      _conditionData$condit2 = _conditionData$condit.operator,
      operator = _conditionData$condit2.operator,
      editor = _conditionData$condit2.editor,
      value = _conditionData$condit.value,
      fieldItems = _conditionData$condit.fieldItems,
      operatorsArray = _conditionData$condit.operatorsArray,
      valueAdditionalData = _conditionData$condit.valueAdditionalData;
  var conditionQuery = '';

  if (field && operator && operation === 'run') {
    var valueLabel;

    switch (editor) {
      case 'between_field':
        conditionQuery = value['0'] && value['1'] ? "".concat(field).concat(operator, "javascript:gs.dateGenerate('").concat(value['0'], "','00:00:00')@javascript:gs.dateGenerate('").concat(value['1'], "','23:59:59')") : '';
        conditionQuery ? valueLabel = "".concat(value['0'], " and ").concat(value['1']) : '';
        break;

      case 'relative_field':
        var currentOperator = value['0'] === 'before' ? 'RELATIVELT' : 'RELATIVEGT';
        value['1'] = value['1'] || '0';
        conditionQuery = value['0'] && value['1'] && value['2'] && value['3'] ? "".concat(field).concat(currentOperator, "@").concat(value['2'], "@").concat(value['3'], "@").concat(value['1']) : '';
        conditionQuery ? valueLabel = "".concat(value['0'], " ").concat(value['1'], " ").concat(value['2'], " ").concat(value['3']) : '';
        break;

      case 'glide_duration':
        conditionQuery = value['0'] && value['1'] && value['2'] && value['3'] ? "".concat(field).concat(operator, "javascript:gs.getDurationDate('").concat(value['0'], " ").concat(value['1'], ":").concat(value['2'], ":").concat(value['3'], "')") : '';
        conditionQuery ? valueLabel = "".concat(value['0'], " ").concat(value['1'], ":").concat(value['2'], ":").concat(value['3']) : '';
        break;

      case 'glide_date_choice':
        conditionQuery = value ? "".concat(field).concat(operator).concat(value, "@javascript:gs.dateGenerate('").concat(value, "','start')@javascript:gs.dateGenerate('").concat(value, "','end')") : '';
        conditionQuery ? valueLabel = value : '';
        break;

      case 'trend_field':
        conditionQuery = value['0'] && value['1'] && value['2'].label && value['2'].id ? "".concat(field).concat(operator).concat(value['2'].label, "@javascript:gs.datePart('").concat(value['1'], "','").concat(value['2'].id, "','").concat(value['0'], "')") : '';
        conditionQuery ? valueLabel = "@javascript:gs.datePart('".concat(value['1'], "','").concat(value['2'].id, "','").concat(value['0'], "')") : '';
        break;

      case 'glide_date_equivalent':
        conditionQuery = value['0'] && value['1'] ? "".concat(field).concat(operator).concat(value['1'], "@").concat(value['0']) : '';
        conditionQuery ? valueLabel = "".concat(value['1'], " ").concat(value['0']) : '';
        break;

      case 'glide_date_comparative':
        conditionQuery = value['0'] && value['1'] && value['2'] && value['3'] ? "".concat(field).concat(operator).concat(value['3'], "@").concat(value['1'], "@").concat(value['2'], "@").concat(value['0']) : '';
        conditionQuery ? valueLabel = "".concat(value['0'], " ").concat(value['1'], " ").concat(value['2'], " ").concat(value['3']) : '';
        break;

      case 'none':
        conditionQuery = "".concat(field).concat(operator);
        valueLabel = '';
        break;

      default:
        conditionQuery = value ? "".concat(field).concat(operator).concat(value) : '';
        conditionQuery ? valueLabel = value : '';
    }

    if (conditionQuery) {
      var conditionOperatorLabel = operatorsArray.find(function (op) {
        return op.id === operator;
      }).label;

      if (fieldItems.items[fieldItems.items.length - 1].reference === 'true' && valueAdditionalData.length) {
        valueLabel = valueAdditionalData.find(function (val) {
          return val.id === valueLabel;
        }).label;
      }

      breadcrumbItem.label = "".concat(breadcrumbItem.label).concat(conditionData.operator === '^OR' ? ' .or. ' : '', " ").concat(fieldItems.label, " ").concat(conditionOperatorLabel, " ").concat(valueLabel);
    }
  } else if (field && operation === 'save') {
    switch (editor) {
      case 'between_field':
        conditionQuery = value['0'] && value['1'] ? "".concat(field).concat(operator, "javascript:gs.dateGenerate('").concat(value['0'], "','00:00:00')@javascript:gs.dateGenerate('").concat(value['1'], "','23:59:59')") : '';
        break;

      case 'relative_field':
        var _currentOperator = value['0'] === 'before' ? 'RELATIVELT' : 'RELATIVEGT';

        value['1'] = value['1'] || '0';
        conditionQuery = value['0'] && value['1'] && value['2'] && value['3'] ? "".concat(field).concat(_currentOperator, "@").concat(value['2'], "@").concat(value['3'], "@").concat(value['1']) : '';
        break;

      case 'glide_duration':
        conditionQuery = value['0'] && value['1'] && value['2'] && value['3'] ? "".concat(field).concat(operator, "javascript:gs.getDurationDate('").concat(value['0'], " ").concat(value['1'], ":").concat(value['2'], ":").concat(value['3'], "')") : '';
        break;

      case 'glide_date_choice':
        conditionQuery = value ? "".concat(field).concat(operator).concat(value, "@javascript:gs.dateGenerate('").concat(value, "','start')@javascript:gs.dateGenerate('").concat(value, "','end')") : '';
        break;

      case 'trend_field':
        conditionQuery = value['0'] && value['1'] && value['2'].label && value['2'].id ? "".concat(field).concat(operator).concat(value['2'].label, "@javascript:gs.datePart('").concat(value['1'], "','").concat(value['2'].id, "','").concat(value['0'], "')") : '';
        break;

      case 'glide_date_equivalent':
        conditionQuery = value['0'] && value['1'] ? "".concat(field).concat(operator).concat(value['1'], "@").concat(value['0']) : '';
        break;

      case 'glide_date_comparative':
        conditionQuery = value['0'] && value['1'] && value['2'] && value['3'] ? "".concat(field).concat(operator).concat(value['3'], "@").concat(value['1'], "@").concat(value['2'], "@").concat(value['0']) : '';
        break;

      case 'none':
        conditionQuery = "".concat(field).concat(operator);
        break;

      default:
        conditionQuery = "".concat(field).concat(operator).concat(value);
    }

    conditionQuery = conditionQuery || "".concat(field).concat(operator);
  }

  return {
    conditionQuery: conditionQuery || false,
    breadcrumbItem: breadcrumbItem
  };
};

exports.generateCurrentConditionQuery = generateCurrentConditionQuery;

var getDropdownFieldsItems = function getDropdownFieldsItems(_ref3) {
  var tableFields = _ref3.tableFields,
      index = _ref3.index,
      blockFields = _ref3.blockFields,
      allowFileds = _ref3.allowFileds;
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
};

exports.getDropdownFieldsItems = getDropdownFieldsItems;

var columnsObjToArr = function columnsObjToArr(_ref4) {
  var columns = _ref4.columns;
  var id = (0, _uuid.v4)().split("-").join("");
  return Object.values(columns).map(function (column) {
    return _objectSpread(_objectSpread({}, column), {}, {
      id: "".concat(column.name).concat(id),
      reference: column.reference || ""
    });
  });
};

exports.columnsObjToArr = columnsObjToArr;

var fetchTableData = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(table, queryParams) {
    var endpoint, query, url, params;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            endpoint = "".concat(window.location.origin, "/api/now/ui/meta/").concat(table); //dev78490.service-now.com/

            query = queryParams ? prepareQueryParams(queryParams) : "";
            url = "".concat(endpoint, "?").concat(query);
            params = {
              method: "GET"
            };
            _context.next = 6;
            return fetchRequest({
              url: url,
              params: params
            });

          case 6:
            return _context.abrupt("return", _context.sent);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchTableData(_x, _x2) {
    return _ref5.apply(this, arguments);
  };
}();

exports.fetchTableData = fetchTableData;

var fetchReferenceData = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(table, queryParams) {
    var endpoint, query, url, params;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            endpoint = "".concat(window.location.origin, "/api/now/table/").concat(table); //dev78490.service-now.com/

            query = queryParams ? prepareQueryParams(queryParams) : "";
            url = "".concat(endpoint, "?").concat(query);
            params = {
              method: "GET"
            };
            _context2.next = 6;
            return fetchRequest({
              url: url,
              params: params
            });

          case 6:
            return _context2.abrupt("return", _context2.sent);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function fetchReferenceData(_x3, _x4) {
    return _ref6.apply(this, arguments);
  };
}();

exports.fetchReferenceData = fetchReferenceData;

var fetchRequest = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref7) {
    var url, _ref7$params, params, result, response, resultJson;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = _ref7.url, _ref7$params = _ref7.params, params = _ref7$params === void 0 ? {} : _ref7$params;
            _context3.prev = 1;
            _context3.next = 4;
            return (0, _crossFetch["default"])(url, _objectSpread(_objectSpread({}, params), {}, {
              credentials: 'same-origin',
              headers: {
                'content-type': "application/json",
                'X-Transaction-Source': window.transaction_source,
                'X-UserToken': window.g_ck
              }
            }));

          case 4:
            response = _context3.sent;
            _context3.next = 7;
            return response.json();

          case 7:
            resultJson = _context3.sent;
            result = resultJson.result;
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](1);
            console.error(_context3.t0);

          case 14:
            return _context3.abrupt("return", result);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 11]]);
  }));

  return function fetchRequest(_x5) {
    return _ref8.apply(this, arguments);
  };
}();

exports.fetchRequest = fetchRequest;

var prepareQueryParams = function prepareQueryParams(obj) {
  return Object.keys(obj).map(function (k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
  }).join('&');
};

exports.prepareQueryParams = prepareQueryParams;

var fetchProjects = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var endpoint, queryParams, query, url, params;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            endpoint = "".concat(GLOBAL_CONSTANTS.API.PREFIX, "record_information");
            queryParams = {
              table: GLOBAL_CONSTANTS.TABLES.CONTAINER,
              query: sysparm_query,
              sysparm_fields: 'type,state,short_description,start,end,opened_by,number,sys_id,assigned_to,watch_list'
            };
            query = prepareQueryParams(queryParams);
            url = "".concat(endpoint, "?").concat(query);
            params = {
              method: "GET"
            };
            _context4.next = 7;
            return fetchRequest({
              url: url,
              params: params
            });

          case 7:
            return _context4.abrupt("return", _context4.sent);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function fetchProjects() {
    return _ref9.apply(this, arguments);
  };
}();

exports.fetchProjects = fetchProjects;