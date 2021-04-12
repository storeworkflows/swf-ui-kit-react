"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchProjects = exports.prepareQueryParams = exports.fetchRequest = exports.fetchReferenceData = exports.fetchTableData = exports.columnsObjToArr = exports.getDropdownFieldsItems = exports.generateCurrentConditionQuery = exports.parseConditionValue = exports.test = exports.fetchReferenceDataSuccessed = exports.getValueAdditionalData = exports._findOperator = exports.clone = exports.getOperators = exports.generateID = exports.getTrendData = void 0;

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

var _moment = _interopRequireDefault(require("moment"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

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

exports._findOperator = _findOperator;

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
  var referenceFieldData = state.referenceFieldData;
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

var test = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref2) {
    var _this2 = this;

    var condition, operators, tableFields, globalID, currentID, operator, lastTableFields, field, value, editor, valueAdditionalData, fieldItems, fieldsDropdownData, fieldsDataID, referenceField, fields, isReferenceField, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, _ret;

    return regeneratorRuntime.wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            condition = _ref2.condition, operators = _ref2.operators, tableFields = _ref2.tableFields, globalID = _ref2.globalID, currentID = _ref2.currentID;
            operator = _findOperator(condition, operators);
            field = '', value = '', editor = "", valueAdditionalData = [], fieldItems = [], fieldsDropdownData = [];
            fieldsDataID = generateID();
            referenceField = condition.slice(0, condition.indexOf(operator)).split(".");
            fields = clone(referenceField);
            isReferenceField = referenceField.length > 1;

            if (!isReferenceField) {
              _context3.next = 12;
              break;
            }

            return _context3.delegateYield( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var dropdownFields, fieldsData, nextData, queryParams, lastField, allFields, i, _loop, dataForFieldItems, _iterator2, _step2, key, operatorsArray;

              return regeneratorRuntime.wrap(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      dropdownFields = [{
                        items: getDropdownFieldsItems({
                          tableFields: tableFields,
                          index: fieldsDataID,
                          listIndex: 0
                        })
                      }];
                      fieldsData = _defineProperty({}, fieldsDataID, tableFields);
                      nextData = tableFields[referenceField[0]];
                      referenceField = referenceField.reverse();
                      referenceField.pop();
                      referenceField = referenceField.reverse();
                      queryParams = {
                        sysparm_operators: true,
                        sysparm_get_extended_tables: true,
                        sysparm_keywords: true
                      };
                      lastField = '';
                      allFields = condition.slice(0, condition.indexOf(operator));
                      value = condition.slice(allFields.length + operator.length);
                      i = 1;
                      _iteratorNormalCompletion = true;
                      _didIteratorError = false;
                      _context2.prev = 13;
                      _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                        var key;
                        return regeneratorRuntime.wrap(function _loop$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                key = _value;
                                fieldsDataID = generateID();
                                _context.next = 4;
                                return fetchTableData(nextData.reference, queryParams).then(function (res) {
                                  fieldsData = _objectSpread(_objectSpread({}, fieldsData), {}, _defineProperty({}, fieldsDataID, res.columns));
                                  nextData = res.columns[key];
                                  lastTableFields = res.columns;
                                  dropdownFields.push({
                                    items: getDropdownFieldsItems({
                                      tableFields: Object.values(res.columns),
                                      index: fieldsDataID,
                                      listIndex: i
                                    })
                                  });
                                  i++;
                                });

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _loop);
                      });
                      _iterator = _asyncIterator(referenceField);

                    case 16:
                      _context2.next = 18;
                      return _iterator.next();

                    case 18:
                      _step = _context2.sent;
                      _iteratorNormalCompletion = _step.done;
                      _context2.next = 22;
                      return _step.value;

                    case 22:
                      _value = _context2.sent;

                      if (_iteratorNormalCompletion) {
                        _context2.next = 28;
                        break;
                      }

                      return _context2.delegateYield(_loop(), "t0", 25);

                    case 25:
                      _iteratorNormalCompletion = true;
                      _context2.next = 16;
                      break;

                    case 28:
                      _context2.next = 34;
                      break;

                    case 30:
                      _context2.prev = 30;
                      _context2.t1 = _context2["catch"](13);
                      _didIteratorError = true;
                      _iteratorError = _context2.t1;

                    case 34:
                      _context2.prev = 34;
                      _context2.prev = 35;

                      if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
                        _context2.next = 39;
                        break;
                      }

                      _context2.next = 39;
                      return _iterator["return"]();

                    case 39:
                      _context2.prev = 39;

                      if (!_didIteratorError) {
                        _context2.next = 42;
                        break;
                      }

                      throw _iteratorError;

                    case 42:
                      return _context2.finish(39);

                    case 43:
                      return _context2.finish(34);

                    case 44:
                      fieldsDropdownData = dropdownFields;
                      dataForFieldItems = fieldsDropdownData.map(function (field) {
                        return field.items;
                      }); // fieldItems = fields.map(fieldName => ({ ...dataForFieldItems.map(field => field.find(data => data.id === fieldName)), dropdownClick: false}));

                      i = 0;
                      _iterator2 = _createForOfIteratorHelper(dataForFieldItems);

                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          key = _step2.value;
                          fieldItems = [].concat(_toConsumableArray(fieldItems), [_objectSpread(_objectSpread({}, key.find(function (data) {
                            return fields[i] === data.id;
                          })), {}, {
                            dropdownClicked: i < dataForFieldItems.length - 1
                          })]);
                          i++;
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }

                      field = fieldItems.map(function (field) {
                        return field.id;
                      }).join(".");
                      lastField = field.split(".");
                      lastField = lastField[lastField.length - 1];
                      editor = lastTableFields[lastField].operators.find(function (op) {
                        return op.operator === operator;
                      }).advancedEditor;
                      operatorsArray = lastTableFields[lastField].operators.map(function (operation) {
                        return {
                          id: operation.operator,
                          label: operation.label,
                          dropdown: 'operation'
                        };
                      });
                      value = _getValue(value, operator, editor);
                      fieldItems = {
                        label: fieldItems.map(function (field) {
                          return field.label;
                        }).join(" . "),
                        value: fieldItems.map(function (field) {
                          return field.id;
                        }).join("."),
                        items: fieldItems
                      };
                      valueAdditionalData = editor === "trend_field" ? getTrendData(value['1']) : _this2.getValueAdditionalData({
                        lastTableFields: lastTableFields,
                        editor: editor,
                        field: field,
                        globalID: globalID,
                        currentID: currentID
                      });
                      return _context2.abrupt("return", {
                        v: {
                          field: field,
                          operator: {
                            operator: operator,
                            editor: editor
                          },
                          value: value,
                          operatorsArray: operatorsArray,
                          valueAdditionalData: valueAdditionalData,
                          fieldItems: fieldItems,
                          fieldsData: fieldsData,
                          fieldsDropdownData: fieldsDropdownData,
                          activeFieldsData: lastTableFields,
                          activeField: fieldItems.items[fieldItems.items.length - 1].id
                        }
                      });

                    case 58:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee, null, [[13, 30, 34, 44], [35,, 39, 43]]);
            })(), "t0", 9);

          case 9:
            _ret = _context3.t0;

            if (!(_typeof(_ret) === "object")) {
              _context3.next = 12;
              break;
            }

            return _context3.abrupt("return", _ret.v);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2);
  }));

  return function test(_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.test = test;

var parseConditionValue = function parseConditionValue(_ref4) {
  var condition = _ref4.condition,
      operators = _ref4.operators,
      tableFields = _ref4.tableFields,
      globalID = _ref4.globalID,
      currentID = _ref4.currentID;

  var operator = _findOperator(condition, operators);

  var field = '',
      value = '',
      editor = "",
      valueAdditionalData = [],
      fieldItems = [],
      fieldsDropdownData = [];
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

var getDropdownFieldsItems = function getDropdownFieldsItems(_ref5) {
  var tableFields = _ref5.tableFields,
      index = _ref5.index,
      blockFields = _ref5.blockFields,
      allowFileds = _ref5.allowFileds,
      listIndex = _ref5.listIndex;
  var dropdownFields = [];
  var fieldsLabelCount = {};

  var _loop2 = function _loop2(key) {
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
    _loop2(key);
  }

  dropdownFields.sort(function (cur, next) {
    return cur.label.localeCompare(next.label);
  });
  dropdownFields.forEach(function (field, index) {
    if (fieldsLabelCount[field.label].length > 1) {
      dropdownFields[index].label = "".concat(field.label, " (").concat(field.id, ")"); // if (listIndex) dropdownFields[index].listIndex = listIndex;
    }
  });
  return dropdownFields;
};

exports.getDropdownFieldsItems = getDropdownFieldsItems;

var columnsObjToArr = function columnsObjToArr(_ref6) {
  var columns = _ref6.columns;
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
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(table, queryParams) {
    var endpoint, query, url, params;
    return regeneratorRuntime.wrap(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            endpoint = "".concat(window.location.origin, "/api/now/ui/meta/").concat(table); //dev78490.service-now.com/

            query = queryParams ? prepareQueryParams(queryParams) : "";
            url = "".concat(endpoint, "?").concat(query);
            params = {
              method: "GET"
            };
            _context4.next = 6;
            return fetchRequest({
              url: url,
              params: params
            });

          case 6:
            return _context4.abrupt("return", _context4.sent);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee3);
  }));

  return function fetchTableData(_x2, _x3) {
    return _ref7.apply(this, arguments);
  };
}();

exports.fetchTableData = fetchTableData;

var fetchReferenceData = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(table, queryParams) {
    var endpoint, query, url, params;
    return regeneratorRuntime.wrap(function _callee4$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            endpoint = "".concat(window.location.origin, "/api/now/table/").concat(table); //dev78490.service-now.com/

            query = queryParams ? prepareQueryParams(queryParams) : "";
            url = "".concat(endpoint, "?").concat(query);
            params = {
              method: "GET"
            };
            _context5.next = 6;
            return fetchRequest({
              url: url,
              params: params
            });

          case 6:
            return _context5.abrupt("return", _context5.sent);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee4);
  }));

  return function fetchReferenceData(_x4, _x5) {
    return _ref8.apply(this, arguments);
  };
}();

exports.fetchReferenceData = fetchReferenceData;

var fetchRequest = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref9) {
    var url, _ref9$params, params, result, response, resultJson;

    return regeneratorRuntime.wrap(function _callee5$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            url = _ref9.url, _ref9$params = _ref9.params, params = _ref9$params === void 0 ? {} : _ref9$params;
            _context6.prev = 1;
            _context6.next = 4;
            return (0, _crossFetch["default"])(url, _objectSpread(_objectSpread({}, params), {}, {
              credentials: 'same-origin',
              headers: {
                'content-type': "application/json",
                'X-Transaction-Source': window.transaction_source,
                'X-UserToken': window.g_ck
              }
            }));

          case 4:
            response = _context6.sent;
            _context6.next = 7;
            return response.json();

          case 7:
            resultJson = _context6.sent;
            result = resultJson.result;
            _context6.next = 14;
            break;

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](1);
            console.error(_context6.t0);

          case 14:
            return _context6.abrupt("return", result);

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee5, null, [[1, 11]]);
  }));

  return function fetchRequest(_x6) {
    return _ref10.apply(this, arguments);
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
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var endpoint, queryParams, query, url, params;
    return regeneratorRuntime.wrap(function _callee6$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
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
            _context7.next = 7;
            return fetchRequest({
              url: url,
              params: params
            });

          case 7:
            return _context7.abrupt("return", _context7.sent);

          case 8:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee6);
  }));

  return function fetchProjects() {
    return _ref11.apply(this, arguments);
  };
}();

exports.fetchProjects = fetchProjects;