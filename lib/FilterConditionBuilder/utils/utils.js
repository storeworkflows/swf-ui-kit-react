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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL3V0aWxzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdldFRyZW5kRGF0YSIsIml0ZW0iLCJ0cmVuZERhdGEiLCJtb21lbnQiLCJ3ZWVrZGF5cyIsIm1hcCIsImRheSIsImlkIiwidG9Mb3dlckNhc2UiLCJsYWJlbCIsImRyb3Bkb3duIiwidHlwZSIsImluZGV4IiwibW9udGhzIiwibW9udGgiLCJzbGljZSIsImkiLCJwdXNoIiwieWVhciIsImdlbmVyYXRlSUQiLCJEYXRlIiwidG9TdHJpbmciLCJnZXRPcGVyYXRvcnMiLCJ0YWJsZUZpZWxkcyIsIm9wZXJhdG9ycyIsImtleSIsImFyciIsImVsIiwib3BlcmF0b3IiLCJBcnJheSIsImZyb20iLCJTZXQiLCJzb3J0IiwiY3VyIiwibmV4dCIsImxlbmd0aCIsImNsb25lIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiX2ZpbmRPcGVyYXRvciIsImNvbmRpdGlvbiIsImluZGV4T2YiLCJnZXRWYWx1ZUFkZGl0aW9uYWxEYXRhIiwiZWRpdG9yIiwiZmllbGQiLCJnbG9iYWxJRCIsImN1cnJlbnRJRCIsInZhbHVlQWRkaXRpb25hbERhdGEiLCJuYW1lIiwiY2hvaWNlcyIsImNob2ljZSIsInZhbHVlIiwiZHluYW1pY19jaG9pY2VzIiwicXVlcnlQYXJhbXMiLCJzeXNwYXJtX2ZpZWxkcyIsInJlZmVyZW5jZV9kaXNwbGF5X2ZpZWxkIiwic3lzcGFybV9xdWVyeSIsImZldGNoUmVmZXJlbmNlRGF0YSIsInJlZmVyZW5jZSIsInRoZW4iLCJyZXMiLCJmZXRjaFJlZmVyZW5jZURhdGFTdWNjZXNzZWQiLCJzZXRTdGF0ZSIsInJlZmVyZW5jZUZpZWxkRGF0YSIsImN1cnJlbnRDb25kaXRpb25JRCIsImdsb2JhbENvbmRpdGlvbklEIiwic3RhdGUiLCJyZXN1bHQiLCJ2YWx1ZVZpZWxkcyIsInN5c19pZCIsIl9nZXRWYWx1ZSIsInJlc3VsdFZhbHVlIiwic3BsaXQiLCJmb3JFYWNoIiwidmFsIiwic2xpY2VGcm9tIiwicmVwbGFjZSIsInBhcnNlQ29uZGl0aW9uVmFsdWUiLCJmaWVsZEl0ZW1zIiwiZmllbGRzRHJvcGRvd25EYXRhIiwiZmllbGRzRGF0YUlEIiwiZmluZCIsIm9wIiwiYWR2YW5jZWRFZGl0b3IiLCJmaWVsZHMiLCJnZXREcm9wZG93bkZpZWxkc0l0ZW1zIiwiZmllbGROYW1lIiwiZGF0YSIsImxpc3RJbmRleCIsImRyb3Bkb3duQ2xpY2siLCJpdGVtcyIsIm9wZXJhdG9yc0FycmF5Iiwib3BlcmF0aW9uIiwiZmllbGRzRGF0YSIsImFjdGl2ZUZpZWxkc0RhdGEiLCJhY3RpdmVGaWVsZCIsImdlbmVyYXRlQ3VycmVudENvbmRpdGlvblF1ZXJ5IiwiY29uZGl0aW9uRGF0YSIsImJyZWFkY3J1bWJJdGVtIiwiY29uZGl0aW9uT3B0aW9ucyIsImNvbmRpdGlvblF1ZXJ5IiwidmFsdWVMYWJlbCIsImN1cnJlbnRPcGVyYXRvciIsImNvbmRpdGlvbk9wZXJhdG9yTGFiZWwiLCJibG9ja0ZpZWxkcyIsImFsbG93RmlsZWRzIiwiZHJvcGRvd25GaWVsZHMiLCJmaWVsZHNMYWJlbENvdW50IiwidGFibGUiLCJsb2NhbGVDb21wYXJlIiwiY29sdW1uc09ialRvQXJyIiwiY29sdW1ucyIsImpvaW4iLCJPYmplY3QiLCJ2YWx1ZXMiLCJjb2x1bW4iLCJmZXRjaFRhYmxlRGF0YSIsImVuZHBvaW50Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJxdWVyeSIsInByZXBhcmVRdWVyeVBhcmFtcyIsInVybCIsInBhcmFtcyIsIm1ldGhvZCIsImZldGNoUmVxdWVzdCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInRyYW5zYWN0aW9uX3NvdXJjZSIsImdfY2siLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHRKc29uIiwiY29uc29sZSIsImVycm9yIiwib2JqIiwia2V5cyIsImsiLCJlbmNvZGVVUklDb21wb25lbnQiLCJmZXRjaFByb2plY3RzIiwiR0xP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QkMsa0JBQWtCLENBQUNILEdBQUcsQ0FBQ0UsQ0FBRCxDQUFKLENBQXBEO0FBQUEsR0FEaUMsRUFFdEMxQixJQUZzQyxDQUVqQyxHQUZpQyxDQUFUO0FBQUEsQ0FBM0I7Ozs7QUFJQSxJQUFNNEIsYUFBYTtBQUFBLHNFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQnZCLFlBQUFBLFFBRG1CLGFBQ0x3QixnQkFBZ0IsQ0FBQ0MsR0FBakIsQ0FBcUJDLE1BRGhCO0FBRW5CMUYsWUFBQUEsV0FGbUIsR0FFTDtBQUNoQnVELGNBQUFBLEtBQUssRUFBRWlDLGdCQUFnQixDQUFDRyxNQUFqQixDQUF3QkMsU0FEZjtBQUVoQnhCLGNBQUFBLEtBQUssRUFBRWpFLGFBRlM7QUFHaEJGLGNBQUFBLGNBQWMsRUFBRTtBQUhBLGFBRks7QUFPbkJtRSxZQUFBQSxLQVBtQixHQU9YQyxrQkFBa0IsQ0FBQ3JFLFdBQUQsQ0FQUDtBQVFuQnNFLFlBQUFBLEdBUm1CLGFBUVZOLFFBUlUsY0FRRUksS0FSRjtBQVNuQkcsWUFBQUEsTUFUbUIsR0FTVjtBQUNYQyxjQUFBQSxNQUFNLEVBQUU7QUFERyxhQVRVO0FBQUE7QUFBQSxtQkFhWkMsWUFBWSxDQUFDO0FBQUVILGNBQUFBLEdBQUcsRUFBSEEsR0FBRjtBQUFPQyxjQUFBQSxNQUFNLEVBQU5BO0FBQVAsYUFBRCxDQWJBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBYmdCLGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnY3Jvc3MtZmV0Y2gnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRyZW5kRGF0YSA9IChpdGVtKSA9PiB7XHJcbiAgICBsZXQgdHJlbmREYXRhID0gW107XHJcbiAgICBzd2l0Y2ggKGl0ZW0pIHtcclxuICAgICAgICBjYXNlICdkYXlvZndlZWsnOlxyXG4gICAgICAgICAgICB0cmVuZERhdGEgPSBtb21lbnQud2Vla2RheXMoKS5tYXAoZGF5ID0+ICh7IGlkOiBkYXkudG9Mb3dlckNhc2UoKSwgbGFiZWw6IGRheSwgZHJvcGRvd246ICd2YWx1ZScsIHR5cGU6ICd0cmVuZF9maWVsZCcsIGluZGV4OiAnMicgfSkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgICAgIHRyZW5kRGF0YSA9IG1vbWVudC5tb250aHMoKS5tYXAobW9udGggPT4gKHsgaWQ6IG1vbnRoLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCwgMyksIGxhYmVsOiBtb250aCwgZHJvcGRvd246ICd2YWx1ZScsIHR5cGU6ICd0cmVuZF9maWVsZCcsIGluZGV4OiAnMicgfSkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdxdWFydGVyJzpcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRyZW5kRGF0YS5wdXNoKHsgaWQ6IGAke2l9YCwgbGFiZWw6IGBRdWFydGVyJHtpfWAsIGRyb3Bkb3duOiAndmFsdWUnLCB0eXBlOiAndHJlbmRfZmllbGQnLCBpbmRleDogJzInIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAneWVhcic6XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBtb21lbnQoKS55ZWFyKCkgLSAyMDsgaSA8IG1vbWVudCgpLnllYXIoKSArIDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRyZW5kRGF0YS5wdXNoKHsgaWQ6IGAke2l9YCwgbGFiZWw6IGksIGRyb3Bkb3duOiAndmFsdWUnLCB0eXBlOiAndHJlbmRfZmllbGQnLCBpbmRleDogJzInIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnd2Vlayc6XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdHJlbmREYXRhLnB1c2goeyBpZDogYCR7aX1gLCBsYWJlbDogYFdlZWske2l9YCwgZHJvcGRvd246ICd2YWx1ZScsIHR5cGU6ICd0cmVuZF9maWVsZCcsIGluZGV4OiAnMicgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdob3VyJzpcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyZW5kRGF0YS5wdXNoKHsgaWQ6IGAke2l9YCwgbGFiZWw6ICdNaWRuaWdodCBob3VyJywgZHJvcGRvd246ICd2YWx1ZScsIHR5cGU6ICd0cmVuZF9maWVsZCcsIGluZGV4OiAnMicgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJlbmREYXRhLnB1c2goeyBpZDogYCR7aX1gLCBsYWJlbDogYCR7aX0gYW0gaG91cmAsIGRyb3Bkb3duOiAndmFsdWUnLCB0eXBlOiAndHJlbmRfZmllbGQnLCBpbmRleDogJzInIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJlbmREYXRhLnB1c2goeyBpZDogYCR7aX1gLCBsYWJlbDogJ05vb24gaG91cicsIGRyb3Bkb3duOiAndmFsdWUnLCB0eXBlOiAndHJlbmRfZmllbGQnLCBpbmRleDogJzInIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyZW5kRGF0YS5wdXNoKHsgaWQ6IGAke2l9YCwgbGFiZWw6IGAke2kgLSAxMn0gcG0gaG91cmAsIGRyb3Bkb3duOiAndmFsdWUnLCB0eXBlOiAndHJlbmRfZmllbGQnLCBpbmRleDogJzInIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJlbmREYXRhO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVJRCA9ICgpID0+IGBmJHsoK25ldyBEYXRlKS50b1N0cmluZygxNil9YDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPcGVyYXRvcnMgPSAodGFibGVGaWVsZHMpID0+IHtcclxuICAgIGxldCBvcGVyYXRvcnMgPSBbXTtcclxuICAgIGZvciAobGV0IGtleSBpbiB0YWJsZUZpZWxkcykge1xyXG4gICAgICAgIGlmICh0YWJsZUZpZWxkc1trZXldLm9wZXJhdG9ycykge1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gdGFibGVGaWVsZHNba2V5XS5vcGVyYXRvcnMubWFwKGVsID0+IGVsLm9wZXJhdG9yKVxyXG4gICAgICAgICAgICBvcGVyYXRvcnMucHVzaCguLi5hcnIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3BlcmF0b3JzID0gQXJyYXkuZnJvbShuZXcgU2V0KG9wZXJhdG9ycykpO1xyXG4gICAgb3BlcmF0b3JzLnNvcnQoKGN1ciwgbmV4dCkgPT4gbmV4dC5sZW5ndGggLSBjdXIubGVuZ3RoKTtcclxuICAgIHJldHVybiBvcGVyYXRvcnM7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjbG9uZSA9IGl0ZW0gPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpdGVtKSk7XHJcblxyXG5jb25zdCBfZmluZE9wZXJhdG9yID0gKGNvbmRpdGlvbiwgb3BlcmF0b3JzKSA9PiB7XHJcbiAgICBsZXQgb3BlcmF0b3IgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3BlcmF0b3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbi5pbmRleE9mKG9wZXJhdG9yc1tpXSkgPiAtMSkge1xyXG4gICAgICAgICAgICBvcGVyYXRvciA9IG9wZXJhdG9yc1tpXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvcGVyYXRvcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFZhbHVlQWRkaXRpb25hbERhdGEgPSBmdW5jdGlvbih7IHRhYmxlRmllbGRzLCBlZGl0b3IsIGZpZWxkLCBnbG9iYWxJRCwgY3VycmVudElEIH0pIHtcclxuICAgIGxldCB2YWx1ZUFkZGl0aW9uYWxEYXRhID0gW107XHJcbiAgICBzd2l0Y2ggKGVkaXRvcikge1xyXG4gICAgICAgIGNhc2UgJ2Nob2ljZV9maWVsZF9uYW1lcyc6XHJcbiAgICAgICAgY2FzZSAnZ2xpZGVfZGF0ZV9lcXVpdmFsZW50JzpcclxuICAgICAgICBjYXNlICdnbGlkZV9kYXRlX2NvbXBhcmF0aXZlJzpcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRhYmxlRmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFibGVGaWVsZHNba2V5XS50eXBlID09PSB0YWJsZUZpZWxkc1tmaWVsZF0udHlwZSAmJiBKU09OLnN0cmluZ2lmeSh0YWJsZUZpZWxkc1trZXldKSAhPT0gSlNPTi5zdHJpbmdpZnkodGFibGVGaWVsZHNbZmllbGRdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlZGl0b3IgPT09ICdnbGlkZV9kYXRlX2VxdWl2YWxlbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQWRkaXRpb25hbERhdGEucHVzaCh7IGlkOiB0YWJsZUZpZWxkc1trZXldLm5hbWUsIGxhYmVsOiB0YWJsZUZpZWxkc1trZXldLmxhYmVsLCBkcm9wZG93bjogJ3ZhbHVlJywgdHlwZTogJ2dsaWRlX2RhdGVfZXF1aXZhbGVudCcsIGluZGV4OiAnMScgfSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVkaXRvciA9PT0gJ2dsaWRlX2RhdGVfY29tcGFyYXRpdmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQWRkaXRpb25hbERhdGEucHVzaCh7IGlkOiB0YWJsZUZpZWxkc1trZXldLm5hbWUsIGxhYmVsOiB0YWJsZUZpZWxkc1trZXldLmxhYmVsLCBkcm9wZG93bjogJ3ZhbHVlJywgdHlwZTogJ2dsaWRlX2RhdGVfY29tcGFyYXRpdmUnLCBpbmRleDogJzMnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVBZGRpdGlvbmFsRGF0YS5wdXNoKHsgaWQ6IHRhYmxlRmllbGRzW2tleV0ubmFtZSwgbGFiZWw6IHRhYmxlRmllbGRzW2tleV0ubGFiZWwsIGRyb3Bkb3duOiAndmFsdWUnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdjaG9pY2UnOlxyXG4gICAgICAgIGNhc2UgJ2Nob2ljZV9tdWx0aXBsZSc6XHJcbiAgICAgICAgICAgIHZhbHVlQWRkaXRpb25hbERhdGEgPSB0YWJsZUZpZWxkc1tmaWVsZF0uY2hvaWNlcy5tYXAoY2hvaWNlID0+ICh7IGlkOiBjaG9pY2UudmFsdWUsIGxhYmVsOiBjaG9pY2UubGFiZWwsIGRyb3Bkb3duOiAndmFsdWUnIH0pKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnY2hvaWNlX2R5bmFtaWMnOlxyXG4gICAgICAgICAgICB2YWx1ZUFkZGl0aW9uYWxEYXRhID0gdGFibGVGaWVsZHNbZmllbGRdLmR5bmFtaWNfY2hvaWNlcy5tYXAoY2hvaWNlID0+ICh7IGlkOiBjaG9pY2UudmFsdWUsIGxhYmVsOiBjaG9pY2UubGFiZWwsIGRyb3Bkb3duOiAndmFsdWUnIH0pKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncmVmZXJlbmNlJzpcclxuICAgICAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBzeXNwYXJtX2ZpZWxkczogYCR7dGFibGVGaWVsZHNbZmllbGRdLnJlZmVyZW5jZV9kaXNwbGF5X2ZpZWxkfSxzeXNfaWRgLFxyXG4gICAgICAgICAgICAgICAgc3lzcGFybV9xdWVyeTogYG5hbWVJU05PVEVNUFRZYFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZldGNoUmVmZXJlbmNlRGF0YSh0YWJsZUZpZWxkc1tmaWVsZF0ucmVmZXJlbmNlLCBxdWVyeVBhcmFtcylcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaFJlZmVyZW5jZURhdGFTdWNjZXNzZWQocmVzKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVmZXJlbmNlRmllbGREYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogdGFibGVGaWVsZHNbZmllbGRdLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbmRpdGlvbklEOiBjdXJyZW50SUQsXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxDb25kaXRpb25JRDogZ2xvYmFsSURcclxuICAgICAgICAgICAgfX0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZUFkZGl0aW9uYWxEYXRhO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hSZWZlcmVuY2VEYXRhU3VjY2Vzc2VkID0gKHN0YXRlLCByZXN1bHQpID0+IHtcclxuICAgIGNvbnN0IHsgcmVmZXJlbmNlRmllbGREYXRhIH0gPSBzdGF0ZTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlZmVyZW5jZUZpZWxkRGF0YSk7XHJcbiAgICBsZXQgdmFsdWVWaWVsZHMgPSByZXN1bHQubWFwKGZpZWxkID0+ICh7aWQ6IGZpZWxkLnN5c19pZCwgbGFiZWw6IGZpZWxkW3JlZmVyZW5jZUZpZWxkRGF0YS5maWVsZC5yZWZlcmVuY2VfZGlzcGxheV9maWVsZF0sIGRyb3Bkb3duOiBcInZhbHVlXCJ9KSk7XHJcbn1cclxuXHJcbmNvbnN0IF9nZXRWYWx1ZSA9ICh2YWx1ZSwgb3BlcmF0b3IsIGVkaXRvcikgPT4ge1xyXG4gICAgbGV0IHJlc3VsdFZhbHVlO1xyXG4gICAgc3dpdGNoIChlZGl0b3IpIHtcclxuICAgICAgICBjYXNlICdiZXR3ZWVuX2ZpZWxkJzpcclxuICAgICAgICAgICAgcmVzdWx0VmFsdWUgPSB7fTtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnQCcpO1xyXG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2xpY2VGcm9tID0gdmFsLmluZGV4T2YoXCIoJ1wiKSArIDI7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRWYWx1ZVtpbmRleF0gPSB2YWwuc2xpY2Uoc2xpY2VGcm9tLCBzbGljZUZyb20gKyAxMCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3JlbGF0aXZlX2ZpZWxkJzpcclxuICAgICAgICAgICAgcmVzdWx0VmFsdWUgPSB7fTtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnQCcpO1xyXG4gICAgICAgICAgICByZXN1bHRWYWx1ZVsnMCddID0gdmFsdWVbMF0gPT09ICdHVCcgPyAnYWZ0ZXInIDogJ2JlZm9yZSc7XHJcbiAgICAgICAgICAgIHJlc3VsdFZhbHVlWycxJ10gPSB2YWx1ZVszXTtcclxuICAgICAgICAgICAgcmVzdWx0VmFsdWVbJzInXSA9IHZhbHVlWzFdO1xyXG4gICAgICAgICAgICByZXN1bHRWYWx1ZVsnMyddID0gdmFsdWVbMl07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2dsaWRlX2R1cmF0aW9uJzpcclxuICAgICAgICAgICAgcmVzdWx0VmFsdWUgPSB7fTtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSh2YWx1ZS5pbmRleE9mKFwiKCdcIikgKyAyKTtcclxuICAgICAgICAgICAgcmVzdWx0VmFsdWVbJzAnXSA9IHZhbHVlLnNsaWNlKDAsIHZhbHVlLmluZGV4T2YoJyAnKSk7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UocmVzdWx0VmFsdWVbJzAnXS5sZW5ndGggKyAxLCB2YWx1ZS5pbmRleE9mKFwiJylcIikpLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFZhbHVlW2luZGV4ICsgMV0gPSB2YWw7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdnbGlkZV9kYXRlX2Nob2ljZSc6XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKHZhbHVlLmluZGV4T2YoXCIoJ1wiKSArIDIpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0VmFsdWUgPSB2YWx1ZS5zbGljZSgwLCB2YWx1ZS5pbmRleE9mKFwiJ1wiKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndHJlbmRfZmllbGQnOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0VmFsdWUgPSB7fTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFZhbHVlWycyJ10gPSB7IGxhYmVsOiB2YWx1ZS5zbGljZSgwLCB2YWx1ZS5pbmRleE9mKFwiQFwiKSkgfTtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UodmFsdWUuaW5kZXhPZihcIignXCIpICsgMSwgdmFsdWUuaW5kZXhPZihcIicpXCIpICsgMSkuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUubWFwKHZhbCA9PiB2YWwucmVwbGFjZSgvXFwnL2csICcnKSk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRWYWx1ZVsnMCddID0gdmFsdWVbMl07XHJcbiAgICAgICAgICAgICAgICByZXN1bHRWYWx1ZVsnMSddID0gdmFsdWVbMF07XHJcbiAgICAgICAgICAgICAgICByZXN1bHRWYWx1ZVsnMiddLmlkID0gdmFsdWVbMV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZ2xpZGVfZGF0ZV9lcXVpdmFsZW50JzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdFZhbHVlID0ge307XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCdAJyk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRWYWx1ZVsnMCddID0gdmFsdWVbMV07XHJcbiAgICAgICAgICAgICAgICByZXN1bHRWYWx1ZVsnMSddID0gdmFsdWVbMF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHRWYWx1ZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnQCcpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0VmFsdWVbJzAnXSA9IHZhbHVlWzNdO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0VmFsdWVbJzEnXSA9IHZhbHVlWzFdO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0VmFsdWVbJzInXSA9IHZhbHVlWzJdO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0VmFsdWVbJzMnXSA9IHZhbHVlWzBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgZXhwb3J0IGNvbnN0IHBhcnNlQ29uZGl0aW9uVmFsdWUgPSBmdW5jdGlvbih7IGNvbmRpdGlvbiwgb3BlcmF0b3JzLCB0YWJsZUZpZWxkcywgZ2xvYmFsSUQsIGN1cnJlbnRJRCB9KSB7XHJcbiAgICAgICAgbGV0IG9wZXJhdG9yID0gX2ZpbmRPcGVyYXRvcihjb25kaXRpb24sIG9wZXJhdG9ycyk7XHJcbiAgICAgICAgbGV0IGZpZWxkID0gJycsIHZhbHVlID0gJycsIGVkaXRvciA9IFwiXCIsIHZhbHVlQWRkaXRpb25hbERhdGEgPSBbXSwgZmllbGRJdGVtcyA9IFtdLCBmaWVsZHNEcm9wZG93bkRhdGEgPSBbXTtcclxuICAgICAgICAvLyBpZiAoISFvcGVyYXRvcikge1xyXG4gICAgICAgIC8vICAgICBjb25zdCByZWZlcmVuY2VGaWVsZCA9IGNvbmRpdGlvbi5zbGljZSgwLCBjb25kaXRpb24uaW5kZXhPZihvcGVyYXRvcikpLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAvLyAgICAgY29uc3QgaXNSZWZlcmVuY2VGaWVsZCA9IHJlZmVyZW5jZUZpZWxkLmxlbmd0aCA+IDE7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgc3lzcGFybV9vcGVyYXRvcnM6IHRydWUsXHJcbiAgICAgICAgLy8gICAgICAgICBzeXNwYXJtX2dldF9leHRlbmRlZF90YWJsZXM6IHRydWUsXHJcbiAgICAgICAgLy8gICAgICAgICBzeXNwYXJtX2tleXdvcmRzOiB0cnVlXHJcbiAgICAgICAgLy8gICAgIH07XHJcbiAgICAgICAgLy8gICAgIGZldGNoVGFibGVEYXRhKHJlZmVyZW5jZUZpZWxkWzFdLCBxdWVyeVBhcmFtcylcclxuICAgICAgICAvLyAgICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGxldCBmaWVsZHNEYXRhSUQgPSBnZW5lcmF0ZUlEKCk7XHJcbiAgICAgICAgaWYgKCFvcGVyYXRvcikge1xyXG4gICAgICAgICAgICBmaWVsZCA9IGNvbmRpdGlvbjtcclxuICAgICAgICAgICAgb3BlcmF0b3IgPSAnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaWVsZCA9IGNvbmRpdGlvbi5zbGljZSgwLCBjb25kaXRpb24uaW5kZXhPZihvcGVyYXRvcikpO1xyXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbmRpdGlvbi5zbGljZShmaWVsZC5sZW5ndGggKyBvcGVyYXRvci5sZW5ndGgpO1xyXG4gICAgICAgICAgICBlZGl0b3IgPSB0YWJsZUZpZWxkc1tmaWVsZF0ub3BlcmF0b3JzLmZpbmQob3AgPT4gb3Aub3BlcmF0b3IgPT09IG9wZXJhdG9yKS5hZHZhbmNlZEVkaXRvcjtcclxuICAgICAgICAgICAgdmFsdWVBZGRpdGlvbmFsRGF0YSA9IHRoaXMuZ2V0VmFsdWVBZGRpdGlvbmFsRGF0YSh7IHRhYmxlRmllbGRzLCBlZGl0b3IsIGZpZWxkLCBnbG9iYWxJRCwgY3VycmVudElEIH0pO1xyXG4gICAgICAgICAgICB2YWx1ZSA9IF9nZXRWYWx1ZSh2YWx1ZSwgb3BlcmF0b3IsIGVkaXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmaWVsZHMgPSBmaWVsZC5zcGxpdCgnLicpO1xyXG4gICAgICAgIGZpZWxkc0Ryb3Bkb3duRGF0YSA9IGdldERyb3Bkb3duRmllbGRzSXRlbXMoeyB0YWJsZUZpZWxkcywgaW5kZXg6IGZpZWxkc0RhdGFJRCB9KTtcclxuICAgICAgICBmaWVsZEl0ZW1zID0gZmllbGRzLm1hcChmaWVsZE5hbWUgPT4gKHsgLi4uZmllbGRzRHJvcGRvd25EYXRhLmZpbmQoZGF0YSA9PiBkYXRhLmlkID09PSBmaWVsZE5hbWUpLCBsaXN0SW5kZXg6IDAsIGRyb3Bkb3duQ2xpY2s6IGZhbHNlIH0pKTtcclxuICAgICAgICBmaWVsZEl0ZW1zID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogdGFibGVGaWVsZHNbZmllbGRdLmxhYmVsLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmllbGQsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBmaWVsZEl0ZW1zXHJcbiAgICAgICAgfVxyXG4gICAgbGV0IG9wZXJhdG9yc0FycmF5ID0gdGFibGVGaWVsZHNbZmllbGRdLm9wZXJhdG9ycy5tYXAob3BlcmF0aW9uID0+ICh7IGlkOiBvcGVyYXRpb24ub3BlcmF0b3IsIGxhYmVsOiBvcGVyYXRpb24ubGFiZWwsIGRyb3Bkb3duOiAnb3BlcmF0aW9uJyB9KSk7XHJcbiAgICBpZiAoZWRpdG9yID09PSAndHJlbmRfZmllbGQnKSB7XHJcbiAgICAgICAgdmFsdWVBZGRpdGlvbmFsRGF0YSA9IGdldFRyZW5kRGF0YSh2YWx1ZVsnMSddKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmaWVsZCxcclxuICAgICAgICBvcGVyYXRvcjogeyBvcGVyYXRvciwgZWRpdG9yIH0sXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgb3BlcmF0b3JzQXJyYXksXHJcbiAgICAgICAgdmFsdWVBZGRpdGlvbmFsRGF0YSxcclxuICAgICAgICBmaWVsZEl0ZW1zLFxyXG4gICAgICAgIGZpZWxkc0RhdGE6IHsgW2ZpZWxkc0RhdGFJRF06IHRhYmxlRmllbGRzIH0sXHJcbiAgICAgICAgZmllbGRzRHJvcGRvd25EYXRhOiBbeyBpdGVtczogZmllbGRzRHJvcGRvd25EYXRhIH1dLFxyXG4gICAgICAgIGFjdGl2ZUZpZWxkc0RhdGE6IHRhYmxlRmllbGRzLFxyXG4gICAgICAgIGFjdGl2ZUZpZWxkOiBmaWVsZEl0ZW1zLml0ZW1zW2ZpZWxkSXRlbXMuaXRlbXMubGVuZ3RoIC0gMV0uaWRcclxuICAgIH07XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQ3VycmVudENvbmRpdGlvblF1ZXJ5ID0gKGNvbmRpdGlvbkRhdGEsIG9wZXJhdGlvbiwgYnJlYWRjcnVtYkl0ZW0pID0+IHtcclxuICAgIGNvbnN0IHsgY29uZGl0aW9uT3B0aW9uczogeyBmaWVsZCwgb3BlcmF0b3I6IHsgb3BlcmF0b3IsIGVkaXRvciB9LCB2YWx1ZSwgZmllbGRJdGVtcywgb3BlcmF0b3JzQXJyYXksIHZhbHVlQWRkaXRpb25hbERhdGEgfSB9ID0gY29uZGl0aW9uRGF0YTtcclxuICAgIGxldCBjb25kaXRpb25RdWVyeSA9ICcnO1xyXG4gICAgaWYgKGZpZWxkICYmIG9wZXJhdG9yICYmIG9wZXJhdGlvbiA9PT0gJ3J1bicpIHtcclxuICAgICAgICBsZXQgdmFsdWVMYWJlbDtcclxuICAgICAgICBzd2l0Y2ggKGVkaXRvcikge1xyXG4gICAgICAgICAgICBjYXNlICdiZXR3ZWVuX2ZpZWxkJzpcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvblF1ZXJ5ID0gKHZhbHVlWycwJ11cclxuICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMSddKSA/IGAke2ZpZWxkfSR7b3BlcmF0b3J9amF2YXNjcmlwdDpncy5kYXRlR2VuZXJhdGUoJyR7dmFsdWVbJzAnXX0nLCcwMDowMDowMCcpQGphdmFzY3JpcHQ6Z3MuZGF0ZUdlbmVyYXRlKCcke3ZhbHVlWycxJ119JywnMjM6NTk6NTknKWAgOiAnJztcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvblF1ZXJ5ID8gdmFsdWVMYWJlbCA9IGAke3ZhbHVlWycwJ119IGFuZCAke3ZhbHVlWycxJ119YCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JlbGF0aXZlX2ZpZWxkJzpcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50T3BlcmF0b3IgPSB2YWx1ZVsnMCddID09PSAnYmVmb3JlJyA/ICdSRUxBVElWRUxUJyA6ICdSRUxBVElWRUdUJztcclxuICAgICAgICAgICAgICAgIHZhbHVlWycxJ10gPSB2YWx1ZVsnMSddIHx8ICcwJztcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvblF1ZXJ5ID0gKHZhbHVlWycwJ11cclxuICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMSddXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdmFsdWVbJzInXVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHZhbHVlWyczJ10pID8gYCR7ZmllbGR9JHtjdXJyZW50T3BlcmF0b3J9QCR7dmFsdWVbJzInXX1AJHt2YWx1ZVsnMyddfUAke3ZhbHVlWycxJ119YCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPyB2YWx1ZUxhYmVsID0gYCR7dmFsdWVbJzAnXX0gJHt2YWx1ZVsnMSddfSAke3ZhbHVlWycyJ119ICR7dmFsdWVbJzMnXX1gIDogJyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZ2xpZGVfZHVyYXRpb24nOlxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPSAodmFsdWVbJzAnXVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHZhbHVlWycxJ11cclxuICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMiddXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdmFsdWVbJzMnXSkgPyBgJHtmaWVsZH0ke29wZXJhdG9yfWphdmFzY3JpcHQ6Z3MuZ2V0RHVyYXRpb25EYXRlKCcke3ZhbHVlWycwJ119ICR7dmFsdWVbJzEnXX06JHt2YWx1ZVsnMiddfToke3ZhbHVlWyczJ119JylgIDogJyc7XHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25RdWVyeSA/IHZhbHVlTGFiZWwgPSBgJHt2YWx1ZVsnMCddfSAke3ZhbHVlWycxJ119OiR7dmFsdWVbJzInXX06JHt2YWx1ZVsnMyddfWAgOiAnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdnbGlkZV9kYXRlX2Nob2ljZSc6XHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25RdWVyeSA9ICh2YWx1ZSkgPyBgJHtmaWVsZH0ke29wZXJhdG9yfSR7dmFsdWV9QGphdmFzY3JpcHQ6Z3MuZGF0ZUdlbmVyYXRlKCcke3ZhbHVlfScsJ3N0YXJ0JylAamF2YXNjcmlwdDpncy5kYXRlR2VuZXJhdGUoJyR7dmFsdWV9JywnZW5kJylgIDogJyc7XHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25RdWVyeSA/IHZhbHVlTGFiZWwgPSB2YWx1ZSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RyZW5kX2ZpZWxkJzpcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvblF1ZXJ5ID0gKHZhbHVlWycwJ11cclxuICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMSddXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdmFsdWVbJzInXS5sYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICYmIHZhbHVlWycyJ10uaWQpID8gYCR7ZmllbGR9JHtvcGVyYXRvcn0ke3ZhbHVlWycyJ10ubGFiZWx9QGphdmFzY3JpcHQ6Z3MuZGF0ZVBhcnQoJyR7dmFsdWVbJzEnXX0nLCcke3ZhbHVlWycyJ10uaWR9JywnJHt2YWx1ZVsnMCddfScpYCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPyB2YWx1ZUxhYmVsID0gYEBqYXZhc2NyaXB0OmdzLmRhdGVQYXJ0KCcke3ZhbHVlWycxJ119JywnJHt2YWx1ZVsnMiddLmlkfScsJyR7dmFsdWVbJzAnXX0nKWAgOiAnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdnbGlkZV9kYXRlX2VxdWl2YWxlbnQnOlxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPSAodmFsdWVbJzAnXVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHZhbHVlWycxJ10pID8gYCR7ZmllbGR9JHtvcGVyYXRvcn0ke3ZhbHVlWycxJ119QCR7dmFsdWVbJzAnXX1gIDogJyc7XHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25RdWVyeSA/IHZhbHVlTGFiZWwgPSBgJHt2YWx1ZVsnMSddfSAke3ZhbHVlWycwJ119YCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2dsaWRlX2RhdGVfY29tcGFyYXRpdmUnOlxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPSAodmFsdWVbJzAnXVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHZhbHVlWycxJ11cclxuICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMiddXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdmFsdWVbJzMnXSkgPyBgJHtmaWVsZH0ke29wZXJhdG9yfSR7dmFsdWVbJzMnXX1AJHt2YWx1ZVsnMSddfUAke3ZhbHVlWycyJ119QCR7dmFsdWVbJzAnXX1gIDogJyc7XHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25RdWVyeSA/IHZhbHVlTGFiZWwgPSBgJHt2YWx1ZVsnMCddfSAke3ZhbHVlWycxJ119ICR7dmFsdWVbJzInXX0gJHt2YWx1ZVsnMyddfWAgOiAnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdub25lJzpcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvblF1ZXJ5ID0gYCR7ZmllbGR9JHtvcGVyYXRvcn1gO1xyXG4gICAgICAgICAgICAgICAgdmFsdWVMYWJlbCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25RdWVyeSA9IHZhbHVlID8gYCR7ZmllbGR9JHtvcGVyYXRvcn0ke3ZhbHVlfWAgOiAnJztcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvblF1ZXJ5ID8gdmFsdWVMYWJlbCA9IHZhbHVlIDogJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25kaXRpb25RdWVyeSkge1xyXG4gICAgICAgICAgICBsZXQgY29uZGl0aW9uT3BlcmF0b3JMYWJlbCA9IG9wZXJhdG9yc0FycmF5LmZpbmQob3AgPT4gb3AuaWQgPT09IG9wZXJhdG9yKS5sYWJlbDtcclxuICAgICAgICAgICAgaWYgKGZpZWxkSXRlbXMuaXRlbXNbZmllbGRJdGVtcy5pdGVtcy5sZW5ndGggLSAxXS5yZWZlcmVuY2UgPT09ICd0cnVlJyAmJiB2YWx1ZUFkZGl0aW9uYWxEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVMYWJlbCA9IHZhbHVlQWRkaXRpb25hbERhdGEuZmluZCh2YWwgPT4gdmFsLmlkID09PSB2YWx1ZUxhYmVsKS5sYWJlbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFkY3J1bWJJdGVtLmxhYmVsID0gYCR7YnJlYWRjcnVtYkl0ZW0ubGFiZWx9JHtjb25kaXRpb25EYXRhLm9wZXJhdG9yID09PSAnXk9SJyA/ICcgLm9yLiAnIDogJyd9ICR7ZmllbGRJdGVtcy5sYWJlbH0gJHtjb25kaXRpb25PcGVyYXRvckxhYmVsfSAke3ZhbHVlTGFiZWx9YDtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGZpZWxkICYmIG9wZXJhdGlvbiA9PT0gJ3NhdmUnKSB7XHJcbiAgICAgICAgc3dpdGNoIChlZGl0b3IpIHtcclxuICAgICAgICAgICAgY2FzZSAnYmV0d2Vlbl9maWVsZCc6XHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25RdWVyeSA9ICh2YWx1ZVsnMCddXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdmFsdWVbJzEnXSkgPyBgJHtmaWVsZH0ke29wZXJhdG9yfWphdmFzY3JpcHQ6Z3MuZGF0ZUdlbmVyYXRlKCcke3ZhbHVlWycwJ119JywnMDA6MDA6MDAnKUBqYXZhc2NyaXB0OmdzLmRhdGVHZW5lcmF0ZSgnJHt2YWx1ZVsnMSddfScsJzIzOjU5OjU5JylgIDogJyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmVsYXRpdmVfZmllbGQnOlxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRPcGVyYXRvciA9IHZhbHVlWycwJ10gPT09ICdiZWZvcmUnID8gJ1JFTEFUSVZFTFQnIDogJ1JFTEFUSVZFR1QnO1xyXG4gICAgICAgICAgICAgICAgdmFsdWVbJzEnXSA9IHZhbHVlWycxJ10gfHwgJzAnO1xyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPSAodmFsdWVbJzAnXVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHZhbHVlWycxJ11cclxuICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMiddXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdmFsdWVbJzMnXSkgPyBgJHtmaWVsZH0ke2N1cnJlbnRPcGVyYXRvcn1AJHt2YWx1ZVsnMiddfUAke3ZhbHVlWyczJ119QCR7dmFsdWVbJzEnXX1gIDogJyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZ2xpZGVfZHVyYXRpb24nOlxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPSAodmFsdWVbJzAnXVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHZhbHVlWycxJ11cclxuICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMiddXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdmFsdWVbJzMnXSkgPyBgJHtmaWVsZH0ke29wZXJhdG9yfWphdmFzY3JpcHQ6Z3MuZ2V0RHVyYXRpb25EYXRlKCcke3ZhbHVlWycwJ119ICR7dmFsdWVbJzEnXX06JHt2YWx1ZVsnMiddfToke3ZhbHVlWyczJ119JylgIDogJyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZ2xpZGVfZGF0ZV9jaG9pY2UnOlxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPSAodmFsdWUpID8gYCR7ZmllbGR9JHtvcGVyYXRvcn0ke3ZhbHVlfUBqYXZhc2NyaXB0OmdzLmRhdGVHZW5lcmF0ZSgnJHt2YWx1ZX0nLCdzdGFydCcpQGphdmFzY3JpcHQ6Z3MuZGF0ZUdlbmVyYXRlKCcke3ZhbHVlfScsJ2VuZCcpYCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RyZW5kX2ZpZWxkJzpcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvblF1ZXJ5ID0gKHZhbHVlWycwJ11cclxuICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMSddXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdmFsdWVbJzInXS5sYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICYmIHZhbHVlWycyJ10uaWQpID8gYCR7ZmllbGR9JHtvcGVyYXRvcn0ke3ZhbHVlWycyJ10ubGFiZWx9QGphdmFzY3JpcHQ6Z3MuZGF0ZVBhcnQoJyR7dmFsdWVbJzEnXX0nLCcke3ZhbHVlWycyJ10uaWR9JywnJHt2YWx1ZVsnMCddfScpYCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2dsaWRlX2RhdGVfZXF1aXZhbGVudCc6XHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25RdWVyeSA9ICh2YWx1ZVsnMCddXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdmFsdWVbJzEnXSkgPyBgJHtmaWVsZH0ke29wZXJhdG9yfSR7dmFsdWVbJzEnXX1AJHt2YWx1ZVsnMCddfWAgOiAnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdnbGlkZV9kYXRlX2NvbXBhcmF0aXZlJzpcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvblF1ZXJ5ID0gKHZhbHVlWycwJ11cclxuICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMSddXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdmFsdWVbJzInXVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHZhbHVlWyczJ10pID8gYCR7ZmllbGR9JHtvcGVyYXRvcn0ke3ZhbHVlWyczJ119QCR7dmFsdWVbJzEnXX1AJHt2YWx1ZVsnMiddfUAke3ZhbHVlWycwJ119YCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ25vbmUnOlxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPSBgJHtmaWVsZH0ke29wZXJhdG9yfWA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvblF1ZXJ5ID0gYCR7ZmllbGR9JHtvcGVyYXRvcn0ke3ZhbHVlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmRpdGlvblF1ZXJ5ID0gY29uZGl0aW9uUXVlcnkgfHwgYCR7ZmllbGR9JHtvcGVyYXRvcn1gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGNvbmRpdGlvblF1ZXJ5OiBjb25kaXRpb25RdWVyeSB8fCBmYWxzZSwgYnJlYWRjcnVtYkl0ZW0gfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RHJvcGRvd25GaWVsZHNJdGVtcyA9ICh7IHRhYmxlRmllbGRzLCBpbmRleCwgYmxvY2tGaWVsZHMsIGFsbG93RmlsZWRzIH0pID0+IHtcclxuICAgIGxldCBkcm9wZG93bkZpZWxkcyA9IFtdO1xyXG4gICAgbGV0IGZpZWxkc0xhYmVsQ291bnQgPSB7fTtcclxuXHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGFibGVGaWVsZHMpIHtcclxuICAgICAgICBmaWVsZHNMYWJlbENvdW50W3RhYmxlRmllbGRzW2tleV0ubGFiZWxdXHJcbiAgICAgICAgICAgID8gZmllbGRzTGFiZWxDb3VudFt0YWJsZUZpZWxkc1trZXldLmxhYmVsXS5wdXNoKHRhYmxlRmllbGRzW2tleV0ubmFtZSlcclxuICAgICAgICAgICAgOiBmaWVsZHNMYWJlbENvdW50W3RhYmxlRmllbGRzW2tleV0ubGFiZWxdID0gW3RhYmxlRmllbGRzW2tleV0ubmFtZV07XHJcblxyXG4gICAgICAgIGlmICh0YWJsZUZpZWxkc1trZXldLm9wZXJhdG9ycykge1xyXG4gICAgICAgICAgICBpZiAoYmxvY2tGaWVsZHMgJiYgYmxvY2tGaWVsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAhYmxvY2tGaWVsZHMuZmluZChuYW1lID0+IHRhYmxlRmllbGRzW2tleV0ubmFtZSA9PT0gbmFtZSkgJiYgZHJvcGRvd25GaWVsZHMucHVzaCh7IGlkOiB0YWJsZUZpZWxkc1trZXldLm5hbWUsIGxhYmVsOiBgJHt0YWJsZUZpZWxkc1trZXldLmxhYmVsfWAsIGRyb3Bkb3duOiAnZmllbGQnLCBpbmRleCwgcmVmZXJlbmNlOiBgJHt0YWJsZUZpZWxkc1trZXldLnR5cGUgPT09ICdyZWZlcmVuY2UnfWAsIHRhYmxlOiB0YWJsZUZpZWxkc1trZXldLnJlZmVyZW5jZSB8fCAnJyB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhbGxvd0ZpbGVkcyAmJiBhbGxvd0ZpbGVkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGFsbG93RmlsZWRzLmZpbmQobmFtZSA9PiB0YWJsZUZpZWxkc1trZXldLm5hbWUgPT09IG5hbWUpICYmIGRyb3Bkb3duRmllbGRzLnB1c2goeyBpZDogdGFibGVGaWVsZHNba2V5XS5uYW1lLCBsYWJlbDogYCR7dGFibGVGaWVsZHNba2V5XS5sYWJlbH1gLCBkcm9wZG93bjogJ2ZpZWxkJywgaW5kZXgsIHJlZmVyZW5jZTogYCR7dGFibGVGaWVsZHNba2V5XS50eXBlID09PSAncmVmZXJlbmNlJ31gLCB0YWJsZTogdGFibGVGaWVsZHNba2V5XS5yZWZlcmVuY2UgfHwgJycgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkZpZWxkcy5wdXNoKHsgaWQ6IHRhYmxlRmllbGRzW2tleV0ubmFtZSwgbGFiZWw6IGAke3RhYmxlRmllbGRzW2tleV0ubGFiZWx9YCwgZHJvcGRvd246ICdmaWVsZCcsIGluZGV4LCByZWZlcmVuY2U6IGAke3RhYmxlRmllbGRzW2tleV0udHlwZSA9PT0gJ3JlZmVyZW5jZSd9YCwgdGFibGU6IHRhYmxlRmllbGRzW2tleV0ucmVmZXJlbmNlIHx8ICcnIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRyb3Bkb3duRmllbGRzLnNvcnQoKGN1ciwgbmV4dCkgPT4gY3VyLmxhYmVsLmxvY2FsZUNvbXBhcmUobmV4dC5sYWJlbCkpO1xyXG5cclxuICAgIGRyb3Bkb3duRmllbGRzLmZvckVhY2goKGZpZWxkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZHNMYWJlbENvdW50W2ZpZWxkLmxhYmVsXS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duRmllbGRzW2luZGV4XS5sYWJlbCA9IGAke2ZpZWxkLmxhYmVsfSAoJHtmaWVsZC5pZH0pYFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkcm9wZG93bkZpZWxkcztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbHVtbnNPYmpUb0FyciA9ICh7Y29sdW1uc30pID0+IHtcclxuICAgIGNvbnN0IGlkID0gdXVpZHY0KCkuc3BsaXQoXCItXCIpLmpvaW4oXCJcIik7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhjb2x1bW5zKS5tYXAoY29sdW1uID0+ICh7Li4uY29sdW1uLCBpZDogYCR7Y29sdW1uLm5hbWV9JHtpZH1gLCByZWZlcmVuY2U6IGNvbHVtbi5yZWZlcmVuY2UgfHwgXCJcIn0pKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hUYWJsZURhdGEgPSBhc3luYyAodGFibGUsIHF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L2FwaS9ub3cvdWkvbWV0YS8ke3RhYmxlfWA7IC8vZGV2Nzg0OTAuc2VydmljZS1ub3cuY29tL1xyXG4gICAgXHJcbiAgICBjb25zdCBxdWVyeSA9IHF1ZXJ5UGFyYW1zID8gcHJlcGFyZVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKSA6IFwiXCI7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtlbmRwb2ludH0/JHtxdWVyeX1gXHJcbiAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2hSZXF1ZXN0KHt1cmwsIHBhcmFtc30pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hSZWZlcmVuY2VEYXRhID0gYXN5bmMgKHRhYmxlLCBxdWVyeVBhcmFtcykgPT4ge1xyXG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hcGkvbm93L3RhYmxlLyR7dGFibGV9YDsgLy9kZXY3ODQ5MC5zZXJ2aWNlLW5vdy5jb20vXHJcblxyXG4gICAgY29uc3QgcXVlcnkgPSBxdWVyeVBhcmFtcyA/IHByZXBhcmVRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcykgOiBcIlwiO1xyXG4gICAgY29uc3QgdXJsID0gYCR7ZW5kcG9pbnR9PyR7cXVlcnl9YDtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCJcclxuICAgIH1cclxuICAgIHJldHVybiBhd2FpdCBmZXRjaFJlcXVlc3Qoe3VybCwgcGFyYW1zfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUmVxdWVzdCA9IGFzeW5jICh7IHVybCwgcGFyYW1zID0ge30gfSkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgJ1gtVHJhbnNhY3Rpb24tU291cmNlJzogd2luZG93LnRyYW5zYWN0aW9uX3NvdXJjZSxcclxuICAgICAgICAgICAgICAgICdYLVVzZXJUb2tlbic6IHdpbmRvdy5nX2NrXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0SnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHRKc29uLnJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJlcGFyZVF1ZXJ5UGFyYW1zID0gKG9iaikgPT4gT2JqZWN0LmtleXMob2JqKVxyXG4gICAgLm1hcChrID0+IGVuY29kZVVSSUNvbXBvbmVudChrKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba10pKVxyXG4gICAgLmpvaW4oJyYnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtHTE9CQUxfQ09OU1RBTlRTLkFQSS5QUkVGSVh9cmVjb3JkX2luZm9ybWF0aW9uYDtcclxuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0ge1xyXG4gICAgICAgIHRhYmxlOiBHTE9CQUxfQ09OU1RBTlRTLlRBQkxFUy5DT05UQUlORVIsXHJcbiAgICAgICAgcXVlcnk6IHN5c3Bhcm1fcXVlcnksXHJcbiAgICAgICAgc3lzcGFybV9maWVsZHM6ICd0eXBlLHN0YXRlLHNob3J0X2Rlc2NyaXB0aW9uLHN0YXJ0LGVuZCxvcGVuZWRfYnksbnVtYmVyLHN5c19pZCxhc3NpZ25lZF90byx3YXRjaF9saXN0J1xyXG4gICAgfVxyXG4gICAgY29uc3QgcXVlcnkgPSBwcmVwYXJlUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpO1xyXG4gICAgY29uc3QgdXJsID0gYCR7ZW5kcG9pbnR9PyR7cXVlcnl9YDtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBhd2FpdCBmZXRjaFJlcXVlc3QoeyB1cmwsIHBhcmFtcyB9KVxyXG59Il19