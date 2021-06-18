"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QUERY_UTILS = void 0;

var _index = require("./index");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

var QUERY_UTILS = {
  parseConditionValue: function parseConditionValue(_ref) {
    var condition = _ref.condition,
        operators = _ref.operators,
        tableFields = _ref.tableFields,
        globalID = _ref.globalID,
        currentID = _ref.currentID;

    var operator = _index.GENERAL_UTILS.findOperator(condition, operators);

    var field = '',
        value = '',
        editor = "",
        valueAdditionalData = [],
        fieldItems = [],
        fieldsDropdownData = [];

    var fieldsDataID = _index.GENERAL_UTILS.generateID();

    if (!operator) {
      field = condition;
      operator = '';
    } else {
      field = condition.slice(0, condition.indexOf(operator));
      value = condition.slice(field.length + operator.length);
      editor = tableFields[field].operators.find(function (op) {
        return op.operator === operator;
      }).advancedEditor;
      valueAdditionalData = _index.DATA_UTILS.getValueAdditionalData({
        tableFields: tableFields,
        editor: editor,
        field: field,
        globalID: globalID,
        currentID: currentID
      });
      value = _index.DATA_UTILS.getValue({
        value: value,
        editor: editor
      });
    }

    var fields = field.split('.');
    fieldsDropdownData = _index.DATA_UTILS.getDropdownFieldsItems({
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
      valueAdditionalData = _index.DATA_UTILS.getTrendData(value['1']);
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
  },
  parseConditionValueWithRef: function () {
    var _parseConditionValueWithRef = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref2) {
      var condition, operators, tableFields, globalID, currentID, operator, lastTableFields, field, value, editor, valueAdditionalData, fieldItems, fieldsDropdownData, fieldsDataID, referenceField, fields, isReferenceField, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, _ret;

      return regeneratorRuntime.wrap(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              condition = _ref2.condition, operators = _ref2.operators, tableFields = _ref2.tableFields, globalID = _ref2.globalID, currentID = _ref2.currentID;
              operator = _index.GENERAL_UTILS.findOperator(condition, operators);
              field = '', value = '', editor = "", valueAdditionalData = [], fieldItems = [], fieldsDropdownData = [];
              fieldsDataID = _index.GENERAL_UTILS.generateID();
              referenceField = condition.slice(0, condition.indexOf(operator)).split(".");
              fields = _index.GENERAL_UTILS.clone(referenceField);
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
                          items: _index.DATA_UTILS.getDropdownFieldsItems({
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
                                  fieldsDataID = _index.GENERAL_UTILS.generateID();
                                  _context.next = 4;
                                  return _index.REQUEST_UTILS.fetchTableData({
                                    table: nextData.reference,
                                    queryParams: queryParams
                                  }).then(function (res) {
                                    fieldsData = _objectSpread(_objectSpread({}, fieldsData), {}, _defineProperty({}, fieldsDataID, res.columns));
                                    nextData = res.columns[key];
                                    lastTableFields = res.columns;
                                    dropdownFields.push({
                                      items: _index.DATA_UTILS.getDropdownFieldsItems({
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
                        });
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
                        value = _index.DATA_UTILS.getValue({
                          value: value,
                          editor: editor
                        });
                        fieldItems = {
                          label: fieldItems.map(function (field) {
                            return field.label;
                          }).join(" . "),
                          value: fieldItems.map(function (field) {
                            return field.id;
                          }).join("."),
                          items: fieldItems
                        };
                        valueAdditionalData = editor === "trend_field" ? _index.DATA_UTILS.getTrendData(value['1']) : _index.DATA_UTILS.getValueAdditionalData({
                          tableFields: lastTableFields,
                          editor: editor,
                          field: lastField,
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

    function parseConditionValueWithRef(_x) {
      return _parseConditionValueWithRef.apply(this, arguments);
    }

    return parseConditionValueWithRef;
  }(),
  generateCurrentConditionQuery: function generateCurrentConditionQuery(_ref3) {
    var payload = _ref3.payload;
    var conditionData = payload.conditionData,
        operation = payload.operation,
        breadcrumbItem = payload.breadcrumbItem;
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
          var str = value.trim().split(" ").filter(Boolean).join(" ");
          conditionQuery = str ? "".concat(field).concat(operator).concat(str) : '';
          conditionQuery ? valueLabel = str : '';
      }

      if (conditionQuery) {
        var conditionOperatorLabel = editor === "none" || !operator.match(/\W/) ? operatorsArray.find(function (op) {
          return op.id === operator;
        }).label : operator;

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
  },
  generateQuery: function generateQuery(_ref4) {
    var payload = _ref4.payload;
    var conditionsArray = payload.conditionsArray,
        isSave = payload.isSave,
        onSendQuery = payload.onSendQuery,
        operation = payload.operation;
    var valueToReturn;
    var resultQuery = "";
    var error = false;
    var breadcrumbsItems = [{
      label: "All",
      conditionId: "all"
    }];
    var isNQ = false;
    conditionsArray.forEach(function (globalCond) {
      globalCond.relatedConditions.forEach(function (parentCond, index) {
        var breadcrumbItem = {
          label: "".concat(globalCond.operator && index === 0 ? 'or' : ''),
          conditionId: parentCond.id,
          globalConditionId: globalCond.id
        };
        var generatedCondition = QUERY_UTILS.generateCurrentConditionQuery({
          payload: {
            conditionData: parentCond,
            operation: operation,
            breadcrumbItem: breadcrumbItem
          }
        });
        isNQ = generatedCondition.conditionQuery;

        if (isNQ && index < 1) {
          resultQuery += globalCond.operator;
          isNQ = false;
        }

        var curCondition = generatedCondition.conditionQuery;

        if (curCondition) {
          breadcrumbItem = generatedCondition.breadcrumbItem;
          resultQuery += "".concat(parentCond.operator).concat(curCondition);
        } else if (operation === 'run' && !curCondition && !parentCond.conditionOptions.field && conditionsArray.length === 1 && globalCond.relatedConditions.length === 1 && !parentCond.relatedConditions.length) {
          resultQuery = '';
        } else {
          error = true;
        }

        parentCond.relatedConditions.forEach(function (childCond) {
          var generatedCondition = QUERY_UTILS.generateCurrentConditionQuery({
            payload: {
              conditionData: childCond,
              operation: operation,
              breadcrumbItem: breadcrumbItem
            }
          });
          var curCondition = generatedCondition.conditionQuery;

          if (curCondition) {
            breadcrumbItem = generatedCondition.breadcrumbItem;
            resultQuery += "".concat(childCond.operator).concat(curCondition);
          } else {
            error = true;
          }
        });

        if (generatedCondition.conditionQuery) {
          breadcrumbItem.label = breadcrumbItem.label.trim();
          breadcrumbsItems.push(breadcrumbItem);
        }
      }); // if (error) return null;

      onSendQuery(resultQuery);

      switch (operation) {
        case 'run':
          var isBreadcrumbFalse = !!breadcrumbsItems.find(function (item) {
            return !item.label;
          });
          if (!isBreadcrumbFalse) valueToReturn = {
            breadcrumbsItems: breadcrumbsItems
          };
          break;

        case 'save':
          valueToReturn = {
            queryToSave: resultQuery,
            isSave: !isSave
          };
          break;
      }
    });
    return valueToReturn;
  }
};
exports.QUERY_UTILS = QUERY_UTILS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL3V0aWxzL19xdWVyeVV0aWxzLmpzIl0sIm5hbWVzIjpbIlFVRVJZX1VUSUxTIiwicGFyc2VDb25kaXRpb25WYWx1ZSIsImNvbmRpdGlvbiIsIm9wZXJhdG9ycyIsInRhYmxlRmllbGRzIiwiZ2xvYmFsSUQiLCJjdXJyZW50SUQiLCJvcGVyYXRvciIsIkdFTkVSQUxfVVRJTFMiLCJmaW5kT3BlcmF0b3IiLCJmaWVsZCIsInZhbHVlIiwiZWRpdG9yIiwidmFsdWVBZGRpdGlvbmFsRGF0YSIsImZpZWxkSXRlbXMiLCJmaWVsZHNEcm9wZG93bkRhdGEiLCJmaWVsZHNEYXRhSUQiLCJnZW5lcmF0ZUlEIiwic2xpY2UiLCJpbmRleE9mIiwibGVuZ3RoIiwiZmluZCIsIm9wIiwiYWR2YW5jZWRFZGl0b3IiLCJEQVRBX1VUSUxTIiwiZ2V0VmFsdWVBZGRpdGlvbmFsRGF0YSIsImdldFZhbHVlIiwiZmllbGRzIiwic3BsaXQiLCJnZXREcm9wZG93bkZpZWxkc0l0ZW1zIiwiaW5kZXgiLCJtYXAiLCJmaWVsZE5hbWUiLCJkYXRhIiwiaWQiLCJsaXN0SW5kZXgiLCJkcm9wZG93bkNsaWNrIiwibGFiZWwiLCJpdGVtcyIsIm9wZXJhdG9yc0FycmF5Iiwib3BlcmF0aW9uIiwiZHJvcGRvd24iLCJnZXRUcmVuZERhdGEiLCJmaWVsZHNEYXRhIiwiYWN0aXZlRmllbGRzRGF0YSIsImFjdGl2ZUZpZWxkIiwicGFyc2VDb25kaXRpb25WYWx1ZVdpdGhSZWYiLCJyZWZlcmVuY2VGaWVsZCIsImNsb25lIiwiaXNSZWZlcmVuY2VGaWVsZCIsImRyb3Bkb3duRmllbGRzIiwibmV4dERhdGEiLCJyZXZlcnNlIiwicG9wIiwicXVlcnlQYXJhbXMiLCJzeXNwYXJtX29wZXJhdG9ycyIsInN5c3Bhcm1fZ2V0X2V4dGVuZGVkX3RhYmxlcyIsInN5c3Bhcm1fa2V5d29yZHMiLCJsYXN0RmllbGQiLCJhbGxGaWVsZHMiLCJpIiwia2V5IiwiUkVRVUVTVF9VVElMUyIsImZldGNoVGFibGVEYXRhIiwidGFibGUiLCJyZWZlcmVuY2UiLCJ0aGVuIiwicmVzIiwiY29sdW1ucyIsImxhc3RUYWJsZUZpZWxkcyIsInB1c2giLCJPYmplY3QiLCJ2YWx1ZXMiLCJkYXRhRm9yRmllbGRJdGVtcyIsImRyb3Bkb3duQ2xpY2tlZCIsImpvaW4iLCJnZW5lcmF0ZUN1cnJlbnRDb25kaXRpb25RdWVyeSIsInBheWxvYWQiLCJjb25kaXRpb25EYXRhIiwiYnJlYWRjcnVtYkl0ZW0iLCJjb25kaXRpb25PcHRpb25zIiwiY29uZGl0aW9uUXVlcnkiLCJ2YWx1ZUxhYmVsIiwiY3VycmVudE9wZXJhdG9yIiwic3RyIiwidHJpbSIsImZpbHRlciIsIkJvb2xlYW4iLCJjb25kaXRpb25PcGVyYXRvckxhYmVsIiwibWF0Y2giLCJ2YWwiLCJnZW5lcmF0ZVF1ZXJ5IiwiY29uZGl0aW9uc0FycmF5IiwiaXNTYXZlIiwib25TZW5kUXVlcnkiLCJ2YWx1ZVRvUmV0dXJuIiwicmVzdWx0UXVlcnkiLCJlcnJvciIsImJyZWFkY3J1bWJzSXRlbXMiLCJjb25kaXRpb25JZCIsImlzTlEiLCJmb3JFYWNoIiwiZ2xvYmFsQ29uZCIsInJlbGF0ZWRDb25kaXRpb25zIiwicGFyZW50Q29uZCIsImdsb2JhbENvbmRpdGlvbklkIiwiZ2VuZXJhdGVkQ29uZGl0aW9uIiwiY3VyQ29uZGl0aW9uIiwiY2hpbGRDb25kIiwiaXNCcmVhZGNydW1iRmFsc2UiLCJpdGVtIiwicXVlcnlUb1NhdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsV0FBVyxHQUFHO0FBQ3ZCQyxFQUFBQSxtQkFBbUIsRUFBRSxtQ0FBZ0U7QUFBQSxRQUE3REMsU0FBNkQsUUFBN0RBLFNBQTZEO0FBQUEsUUFBbERDLFNBQWtELFFBQWxEQSxTQUFrRDtBQUFBLFFBQXZDQyxXQUF1QyxRQUF2Q0EsV0FBdUM7QUFBQSxRQUExQkMsUUFBMEIs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TUFHTztBQUNIVixZQUFBQSxLQUFLLEdBQUcsSUFBUjtBQUNIO0FBQ0osU0FWRDs7QUFXQSxZQUFJUyxrQkFBa0IsQ0FBQ3pCLGNBQXZCLEVBQXVDO0FBQ25DRixVQUFBQSxjQUFjLENBQUMxQyxLQUFmLEdBQXVCMEMsY0FBYyxDQUFDMUMsS0FBZixDQUFxQmdELElBQXJCLEVBQXZCO0FBQ0FhLFVBQUFBLGdCQUFnQixDQUFDNUIsSUFBakIsQ0FBc0JTLGNBQXRCO0FBQ0g7QUFDSixPQWxDRCxFQUZrQyxDQXVDbEM7O0FBRUFlLE1BQUFBLFdBQVcsQ0FBQ0UsV0FBRCxDQUFYOztBQUVBLGNBQVF4RCxTQUFSO0FBQ0ksYUFBSyxLQUFMO0FBQ0ksY0FBSXFFLGlCQUFpQixHQUFHLENBQUMsQ0FBQ1gsZ0JBQWdCLENBQUM3RSxJQUFqQixDQUFzQixVQUFBeUYsSUFBSTtBQUFBLG1CQUFJLENBQUNBLElBQUksQ0FBQ3pFLEtBQVY7QUFBQSxXQUExQixDQUExQjtBQUVBLGNBQUcsQ0FBQ3dFLGlCQUFKLEVBQ0lkLGFBQWEsR0FBRztBQUFFRyxZQUFBQSxnQkFBZ0IsRUFBaEJBO0FBQUYsV0FBaEI7QUFDSjs7QUFDSixhQUFLLE1BQUw7QUFDSUgsVUFBQUEsYUFBYSxHQUFHO0FBQUVnQixZQUFBQSxXQUFXLEVBQUVmLFdBQWY7QUFBNEJILFlBQUFBLE1BQU0sRUFBRSxDQUFDQTtBQUFyQyxXQUFoQjtBQUNBO0FBVFI7QUFXSCxLQXRERDtBQXVEQSxXQUFPRSxhQUFQO0FBQ0g7QUF0U3NCLENBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgREFUQV9VVElMUywgR0VORVJBTF9VVElMUywgUkVRVUVTVF9VVElMUyB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgUVVFUllfVVRJTFMgPSB7XHJcbiAgICBwYXJzZUNvbmRpdGlvblZhbHVlOiAoeyBjb25kaXRpb24sIG9wZXJhdG9ycywgdGFibGVGaWVsZHMsIGdsb2JhbElELCBjdXJyZW50SUQgfSkgPT4ge1xyXG4gICAgICAgIGxldCBvcGVyYXRvciA9IEdFTkVSQUxfVVRJTFMuZmluZE9wZXJhdG9yKGNvbmRpdGlvbiwgb3BlcmF0b3JzKTtcclxuICAgICAgICBsZXQgZmllbGQgPSAnJywgdmFsdWUgPSAnJywgZWRpdG9yID0gXCJcIiwgdmFsdWVBZGRpdGlvbmFsRGF0YSA9IFtdLCBmaWVsZEl0ZW1zID0gW10sIGZpZWxkc0Ryb3Bkb3duRGF0YSA9IFtdO1xyXG4gICAgICAgIGxldCBmaWVsZHNEYXRhSUQgPSBHRU5FUkFMX1VUSUxTLmdlbmVyYXRlSUQoKTtcclxuICAgICAgICBpZiAoIW9wZXJhdG9yKSB7XHJcbiAgICAgICAgICAgIGZpZWxkID0gY29uZGl0aW9uO1xyXG4gICAgICAgICAgICBvcGVyYXRvciA9ICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpZWxkID0gY29uZGl0aW9uLnNsaWNlKDAsIGNvbmRpdGlvbi5pbmRleE9mKG9wZXJhdG9yKSk7XHJcbiAgICAgICAgICAgIHZhbHVlID0gY29uZGl0aW9uLnNsaWNlKGZpZWxkLmxlbmd0aCArIG9wZXJhdG9yLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGVkaXRvciA9IHRhYmxlRmllbGRzW2ZpZWxkXS5vcGVyYXRvcnMuZmluZChvcCA9PiBvcC5vcGVyYXRvciA9PT0gb3BlcmF0b3IpLmFkdmFuY2VkRWRpdG9yO1xyXG4gICAgICAgICAgICB2YWx1ZUFkZGl0aW9uYWxEYXRhID0gREFUQV9VVElMUy5nZXRWYWx1ZUFkZGl0aW9uYWxEYXRhKHsgdGFibGVGaWVsZHMsIGVkaXRvciwgZmllbGQsIGdsb2JhbElELCBjdXJyZW50SUQgfSk7XHJcbiAgICAgICAgICAgIHZhbHVlID0gREFUQV9VVElMUy5nZXRWYWx1ZSh7dmFsdWUsIGVkaXRvcn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmllbGRzID0gZmllbGQuc3BsaXQoJy4nKTtcclxuICAgICAgICBmaWVsZHNEcm9wZG93bkRhdGEgPSBEQVRBX1VUSUxTLmdldERyb3Bkb3duRmllbGRzSXRlbXMoeyB0YWJsZUZpZWxkcywgaW5kZXg6IGZpZWxkc0RhdGFJRCB9KTtcclxuICAgICAgICBmaWVsZEl0ZW1zID0gZmllbGRzLm1hcChmaWVsZE5hbWUgPT4gKHsgLi4uZmllbGRzRHJvcGRvd25EYXRhLmZpbmQoZGF0YSA9PiBkYXRhLmlkID09PSBmaWVsZE5hbWUpLCBsaXN0SW5kZXg6IDAsIGRyb3Bkb3duQ2xpY2s6IGZhbHNlIH0pKTtcclxuICAgICAgICBmaWVsZEl0ZW1zID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogdGFibGVGaWVsZHNbZmllbGRdLmxhYmVsLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmllbGQsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBmaWVsZEl0ZW1zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvcGVyYXRvcnNBcnJheSA9IHRhYmxlRmllbGRzW2ZpZWxkXS5vcGVyYXRvcnMubWFwKG9wZXJhdGlvbiA9PiAoeyBpZDogb3BlcmF0aW9uLm9wZXJhdG9yLCBsYWJlbDogb3BlcmF0aW9uLmxhYmVsLCBkcm9wZG93bjogJ29wZXJhdGlvbicgfSkpO1xyXG4gICAgICAgIGlmIChlZGl0b3IgPT09ICd0cmVuZF9maWVsZCcpIHtcclxuICAgICAgICAgICAgdmFsdWVBZGRpdGlvbmFsRGF0YSA9IERBVEFfVVRJTFMuZ2V0VHJlbmREYXRhKHZhbHVlWycxJ10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgICAgb3BlcmF0b3I6IHsgb3BlcmF0b3IsIGVkaXRvciB9LFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgb3BlcmF0b3JzQXJyYXksXHJcbiAgICAgICAgICAgIHZhbHVlQWRkaXRpb25hbERhdGEsXHJcbiAgICAgICAgICAgIGZpZWxkSXRlbXMsXHJcbiAgICAgICAgICAgIGZpZWxkc0RhdGE6IHsgW2ZpZWxkc0RhdGFJRF06IHRhYmxlRmllbGRzIH0sXHJcbiAgICAgICAgICAgIGZpZWxkc0Ryb3Bkb3duRGF0YTogW3sgaXRlbXM6IGZpZWxkc0Ryb3Bkb3duRGF0YSB9XSxcclxuICAgICAgICAgICAgYWN0aXZlRmllbGRzRGF0YTogdGFibGVGaWVsZHMsXHJcbiAgICAgICAgICAgIGFjdGl2ZUZpZWxkOiBmaWVsZEl0ZW1zLml0ZW1zW2ZpZWxkSXRlbXMuaXRlbXMubGVuZ3RoIC0gMV0uaWRcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHBhcnNlQ29uZGl0aW9uVmFsdWVXaXRoUmVmOiBhc3luYyAoeyBjb25kaXRpb24sIG9wZXJhdG9ycywgdGFibGVGaWVsZHMsIGdsb2JhbElELCBjdXJyZW50SUQgfSkgPT4ge1xyXG4gICAgICAgIGxldCBvcGVyYXRvciA9IEdFTkVSQUxfVVRJTFMuZmluZE9wZXJhdG9yKGNvbmRpdGlvbiwgb3BlcmF0b3JzKTtcclxuICAgICAgICBsZXQgbGFzdFRhYmxlRmllbGRzO1xyXG4gICAgICAgIGxldCBmaWVsZCA9ICcnLCB2YWx1ZSA9ICcnLCBlZGl0b3IgPSBcIlwiLCB2YWx1ZUFkZGl0aW9uYWxEYXRhID0gW10sIGZpZWxkSXRlbXMgPSBbXSwgZmllbGRzRHJvcGRvd25EYXRhID0gW107XHJcbiAgICAgICAgbGV0IGZpZWxkc0RhdGFJRCA9IEdFTkVSQUxfVVRJTFMuZ2VuZXJhdGVJRCgpO1xyXG4gICAgICAgIGxldCByZWZlcmVuY2VGaWVsZCA9IGNvbmRpdGlvbi5zbGljZSgwLCBjb25kaXRpb24uaW5kZXhPZihvcGVyYXRvcikpLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBsZXQgZmllbGRzID0gR0VORVJBTF9VVElMUy5jbG9uZShyZWZlcmVuY2VGaWVsZCk7XHJcbiAgICAgICAgY29uc3QgaXNSZWZlcmVuY2VGaWVsZCA9IHJlZmVyZW5jZUZpZWxkLmxlbmd0aCA+IDE7XHJcbiAgICAgICAgaWYgKGlzUmVmZXJlbmNlRmllbGQpIHtcclxuICAgICAgICAgICAgbGV0IGRyb3Bkb3duRmllbGRzID0gW3tpdGVtczogREFUQV9VVElMUy5nZXREcm9wZG93bkZpZWxkc0l0ZW1zKHt0YWJsZUZpZWxkczogdGFibGVGaWVsZHMsIGluZGV4OiBmaWVsZHNEYXRhSUQsIGxpc3RJbmRleDogMH0pfV07XHJcbiAgICAgICAgICAgIGxldCBmaWVsZHNEYXRhID0ge1tmaWVsZHNEYXRhSURdOiB0YWJsZUZpZWxkc31cclxuICAgICAgICAgICAgbGV0IG5leHREYXRhID0gdGFibGVGaWVsZHNbcmVmZXJlbmNlRmllbGRbMF1dO1xyXG4gICAgICAgICAgICByZWZlcmVuY2VGaWVsZCA9IHJlZmVyZW5jZUZpZWxkLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgcmVmZXJlbmNlRmllbGQucG9wKCk7XHJcbiAgICAgICAgICAgIHJlZmVyZW5jZUZpZWxkID0gcmVmZXJlbmNlRmllbGQucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHN5c3Bhcm1fb3BlcmF0b3JzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3lzcGFybV9nZXRfZXh0ZW5kZWRfdGFibGVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3lzcGFybV9rZXl3b3JkczogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBsZXQgbGFzdEZpZWxkID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBhbGxGaWVsZHMgPSBjb25kaXRpb24uc2xpY2UoMCwgY29uZGl0aW9uLmluZGV4T2Yob3BlcmF0b3IpKTtcclxuICAgICAgICAgICAgdmFsdWUgPSBjb25kaXRpb24uc2xpY2UoYWxsRmllbGRzLmxlbmd0aCArIG9wZXJhdG9yLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCBpID0gMTtcclxuICAgICAgICAgICAgZm9yIGF3YWl0IChsZXQga2V5IG9mIHJlZmVyZW5jZUZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZHNEYXRhSUQgPSBHRU5FUkFMX1VUSUxTLmdlbmVyYXRlSUQoKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IFJFUVVFU1RfVVRJTFMuZmV0Y2hUYWJsZURhdGEoe3RhYmxlOiBuZXh0RGF0YS5yZWZlcmVuY2UsIHF1ZXJ5UGFyYW1zfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNEYXRhID0gey4uLmZpZWxkc0RhdGEsIFtmaWVsZHNEYXRhSURdOiByZXMuY29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dERhdGEgPSByZXMuY29sdW1uc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VGFibGVGaWVsZHMgPSByZXMuY29sdW1ucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25GaWVsZHMucHVzaCh7aXRlbXM6IERBVEFfVVRJTFMuZ2V0RHJvcGRvd25GaWVsZHNJdGVtcyh7dGFibGVGaWVsZHM6IE9iamVjdC52YWx1ZXMocmVzLmNvbHVtbnMpLCBpbmRleDogZmllbGRzRGF0YUlELCBsaXN0SW5kZXg6IGl9KX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaWVsZHNEcm9wZG93bkRhdGEgPSBkcm9wZG93bkZpZWxkcztcclxuICAgICAgICAgICAgbGV0IGRhdGFGb3JGaWVsZEl0ZW1zID0gZmllbGRzRHJvcGRvd25EYXRhLm1hcChmaWVsZCA9PiBmaWVsZC5pdGVtcyk7XHJcblxyXG4gICAgICAgICAgICBpID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IG9mIGRhdGFGb3JGaWVsZEl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZEl0ZW1zID0gWy4uLmZpZWxkSXRlbXMsIHsgLi4ua2V5LmZpbmQoZGF0YSA9PiBmaWVsZHNbaV0gPT09IGRhdGEuaWQpLCBkcm9wZG93bkNsaWNrZWQ6IGkgPCBkYXRhRm9yRmllbGRJdGVtcy5sZW5ndGggLSAxfV07XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmllbGQgPSBmaWVsZEl0ZW1zLm1hcChmaWVsZCA9PiBmaWVsZC5pZCkuam9pbihcIi5cIik7XHJcbiAgICAgICAgICAgIGxhc3RGaWVsZCA9IGZpZWxkLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgICAgbGFzdEZpZWxkID0gbGFzdEZpZWxkW2xhc3RGaWVsZC5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgZWRpdG9yID0gbGFzdFRhYmxlRmllbGRzW2xhc3RGaWVsZF0ub3BlcmF0b3JzLmZpbmQob3AgPT4gb3Aub3BlcmF0b3IgPT09IG9wZXJhdG9yKS5hZHZhbmNlZEVkaXRvcjtcclxuICAgICAgICAgICAgbGV0IG9wZXJhdG9yc0FycmF5ID0gbGFzdFRhYmxlRmllbGRzW2xhc3RGaWVsZF0ub3BlcmF0b3JzLm1hcChvcGVyYXRpb24gPT4gKHsgaWQ6IG9wZXJhdGlvbi5vcGVyYXRvciwgbGFiZWw6IG9wZXJhdGlvbi5sYWJlbCwgZHJvcGRvd246ICdvcGVyYXRpb24nIH0pKTtcclxuICAgICAgICAgICAgdmFsdWUgPSBEQVRBX1VUSUxTLmdldFZhbHVlKHt2YWx1ZSwgZWRpdG9yfSlcclxuICAgICAgICAgICAgZmllbGRJdGVtcyA9IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBmaWVsZEl0ZW1zLm1hcChmaWVsZCA9PiBmaWVsZC5sYWJlbCkuam9pbihcIiAuIFwiKSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZEl0ZW1zLm1hcChmaWVsZCA9PiBmaWVsZC5pZCkuam9pbihcIi5cIiksXHJcbiAgICAgICAgICAgICAgICBpdGVtczogZmllbGRJdGVtc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhbHVlQWRkaXRpb25hbERhdGEgPSBlZGl0b3IgPT09IFwidHJlbmRfZmllbGRcIiA/IERBVEFfVVRJTFMuZ2V0VHJlbmREYXRhKHZhbHVlWycxJ10pIDogREFUQV9VVElMUy5nZXRWYWx1ZUFkZGl0aW9uYWxEYXRhKHsgdGFibGVGaWVsZHM6IGxhc3RUYWJsZUZpZWxkcywgZWRpdG9yLCBmaWVsZDogbGFzdEZpZWxkLCBnbG9iYWxJRCwgY3VycmVudElEIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IHsgb3BlcmF0b3IsIGVkaXRvciB9LFxyXG4gICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcnNBcnJheSxcclxuICAgICAgICAgICAgICAgIHZhbHVlQWRkaXRpb25hbERhdGEsXHJcbiAgICAgICAgICAgICAgICBmaWVsZEl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgZmllbGRzRGF0YSxcclxuICAgICAgICAgICAgICAgIGZpZWxkc0Ryb3Bkb3duRGF0YSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUZpZWxkc0RhdGE6IGxhc3RUYWJsZUZpZWxkcyxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUZpZWxkOiBmaWVsZEl0ZW1zLml0ZW1zW2ZpZWxkSXRlbXMuaXRlbXMubGVuZ3RoIC0gMV0uaWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2VuZXJhdGVDdXJyZW50Q29uZGl0aW9uUXVlcnk6ICh7IHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZGl0aW9uRGF0YSwgb3BlcmF0aW9uLCBicmVhZGNydW1iSXRlbSB9ID0gcGF5bG9hZDtcclxuICAgICAgICBjb25zdCB7IGNvbmRpdGlvbk9wdGlvbnM6IHsgZmllbGQsIG9wZXJhdG9yOiB7IG9wZXJhdG9yLCBlZGl0b3IgfSwgdmFsdWUsIGZpZWxkSXRlbXMsIG9wZXJhdG9yc0FycmF5LCB2YWx1ZUFkZGl0aW9uYWxEYXRhIH0gfSA9IGNvbmRpdGlvbkRhdGE7XHJcbiAgICAgICAgbGV0IGNvbmRpdGlvblF1ZXJ5ID0gJyc7XHJcbiAgICAgICAgaWYgKGZpZWxkICYmIG9wZXJhdG9yICYmIG9wZXJhdGlvbiA9PT0gJ3J1bicpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlTGFiZWw7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZWRpdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdiZXR3ZWVuX2ZpZWxkJzpcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25RdWVyeSA9ICh2YWx1ZVsnMCddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbHVlWycxJ10pID8gYCR7ZmllbGR9JHtvcGVyYXRvcn1qYXZhc2NyaXB0OmdzLmRhdGVHZW5lcmF0ZSgnJHt2YWx1ZVsnMCddfScsJzAwOjAwOjAwJylAamF2YXNjcmlwdDpncy5kYXRlR2VuZXJhdGUoJyR7dmFsdWVbJzEnXX0nLCcyMzo1OTo1OScpYCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblF1ZXJ5ID8gdmFsdWVMYWJlbCA9IGAke3ZhbHVlWycwJ119IGFuZCAke3ZhbHVlWycxJ119YCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmVsYXRpdmVfZmllbGQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50T3BlcmF0b3IgPSB2YWx1ZVsnMCddID09PSAnYmVmb3JlJyA/ICdSRUxBVElWRUxUJyA6ICdSRUxBVElWRUdUJztcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVsnMSddID0gdmFsdWVbJzEnXSB8fCAnMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPSAodmFsdWVbJzAnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMSddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbHVlWycyJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsdWVbJzMnXSkgPyBgJHtmaWVsZH0ke2N1cnJlbnRPcGVyYXRvcn1AJHt2YWx1ZVsnMiddfUAke3ZhbHVlWyczJ119QCR7dmFsdWVbJzEnXX1gIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPyB2YWx1ZUxhYmVsID0gYCR7dmFsdWVbJzAnXX0gJHt2YWx1ZVsnMSddfSAke3ZhbHVlWycyJ119ICR7dmFsdWVbJzMnXX1gIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdnbGlkZV9kdXJhdGlvbic6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPSAodmFsdWVbJzAnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMSddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbHVlWycyJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsdWVbJzMnXSkgPyBgJHtmaWVsZH0ke29wZXJhdG9yfWphdmFzY3JpcHQ6Z3MuZ2V0RHVyYXRpb25EYXRlKCcke3ZhbHVlWycwJ119ICR7dmFsdWVbJzEnXX06JHt2YWx1ZVsnMiddfToke3ZhbHVlWyczJ119JylgIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPyB2YWx1ZUxhYmVsID0gYCR7dmFsdWVbJzAnXX0gJHt2YWx1ZVsnMSddfToke3ZhbHVlWycyJ119OiR7dmFsdWVbJzMnXX1gIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdnbGlkZV9kYXRlX2Nob2ljZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPSAodmFsdWUpID8gYCR7ZmllbGR9JHtvcGVyYXRvcn0ke3ZhbHVlfUBqYXZhc2NyaXB0OmdzLmRhdGVHZW5lcmF0ZSgnJHt2YWx1ZX0nLCdzdGFydCcpQGphdmFzY3JpcHQ6Z3MuZGF0ZUdlbmVyYXRlKCcke3ZhbHVlfScsJ2VuZCcpYCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblF1ZXJ5ID8gdmFsdWVMYWJlbCA9IHZhbHVlIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0cmVuZF9maWVsZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPSAodmFsdWVbJzAnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMSddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbHVlWycyJ10ubGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsdWVbJzInXS5pZCkgPyBgJHtmaWVsZH0ke29wZXJhdG9yfSR7dmFsdWVbJzInXS5sYWJlbH1AamF2YXNjcmlwdDpncy5kYXRlUGFydCgnJHt2YWx1ZVsnMSddfScsJyR7dmFsdWVbJzInXS5pZH0nLCcke3ZhbHVlWycwJ119JylgIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPyB2YWx1ZUxhYmVsID0gYEBqYXZhc2NyaXB0OmdzLmRhdGVQYXJ0KCcke3ZhbHVlWycxJ119JywnJHt2YWx1ZVsnMiddLmlkfScsJyR7dmFsdWVbJzAnXX0nKWAgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2dsaWRlX2RhdGVfZXF1aXZhbGVudCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPSAodmFsdWVbJzAnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMSddKSA/IGAke2ZpZWxkfSR7b3BlcmF0b3J9JHt2YWx1ZVsnMSddfUAke3ZhbHVlWycwJ119YCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblF1ZXJ5ID8gdmFsdWVMYWJlbCA9IGAke3ZhbHVlWycxJ119ICR7dmFsdWVbJzAnXX1gIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdnbGlkZV9kYXRlX2NvbXBhcmF0aXZlJzpcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25RdWVyeSA9ICh2YWx1ZVsnMCddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbHVlWycxJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsdWVbJzInXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMyddKSA/IGAke2ZpZWxkfSR7b3BlcmF0b3J9JHt2YWx1ZVsnMyddfUAke3ZhbHVlWycxJ119QCR7dmFsdWVbJzInXX1AJHt2YWx1ZVsnMCddfWAgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25RdWVyeSA/IHZhbHVlTGFiZWwgPSBgJHt2YWx1ZVsnMCddfSAke3ZhbHVlWycxJ119ICR7dmFsdWVbJzInXX0gJHt2YWx1ZVsnMyddfWAgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ25vbmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblF1ZXJ5ID0gYCR7ZmllbGR9JHtvcGVyYXRvcn1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlTGFiZWwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ciA9IHZhbHVlLnRyaW0oKS5zcGxpdChcIiBcIikuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblF1ZXJ5ID0gc3RyID8gYCR7ZmllbGR9JHtvcGVyYXRvcn0ke3N0cn1gIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPyB2YWx1ZUxhYmVsID0gc3RyIDogJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmRpdGlvblF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29uZGl0aW9uT3BlcmF0b3JMYWJlbCA9IChlZGl0b3IgPT09IFwibm9uZVwiIHx8ICFvcGVyYXRvci5tYXRjaCgvXFxXLykpID8gb3BlcmF0b3JzQXJyYXkuZmluZChvcCA9PiBvcC5pZCA9PT0gb3BlcmF0b3IpLmxhYmVsIDogb3BlcmF0b3I7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRJdGVtcy5pdGVtc1tmaWVsZEl0ZW1zLml0ZW1zLmxlbmd0aCAtIDFdLnJlZmVyZW5jZSA9PT0gJ3RydWUnICYmIHZhbHVlQWRkaXRpb25hbERhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVMYWJlbCA9IHZhbHVlQWRkaXRpb25hbERhdGEuZmluZCh2YWwgPT4gdmFsLmlkID09PSB2YWx1ZUxhYmVsKS5sYWJlbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWRjcnVtYkl0ZW0ubGFiZWwgPSBgJHticmVhZGNydW1iSXRlbS5sYWJlbH0ke2NvbmRpdGlvbkRhdGEub3BlcmF0b3IgPT09ICdeT1InID8gJyAub3IuICcgOiAnJ30gJHtmaWVsZEl0ZW1zLmxhYmVsfSAke2NvbmRpdGlvbk9wZXJhdG9yTGFiZWx9ICR7dmFsdWVMYWJlbH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZCAmJiBvcGVyYXRpb24gPT09ICdzYXZlJykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGVkaXRvcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYmV0d2Vlbl9maWVsZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPSAodmFsdWVbJzAnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMSddKSA/IGAke2ZpZWxkfSR7b3BlcmF0b3J9amF2YXNjcmlwdDpncy5kYXRlR2VuZXJhdGUoJyR7dmFsdWVbJzAnXX0nLCcwMDowMDowMCcpQGphdmFzY3JpcHQ6Z3MuZGF0ZUdlbmVyYXRlKCcke3ZhbHVlWycxJ119JywnMjM6NTk6NTknKWAgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3JlbGF0aXZlX2ZpZWxkJzpcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudE9wZXJhdG9yID0gdmFsdWVbJzAnXSA9PT0gJ2JlZm9yZScgPyAnUkVMQVRJVkVMVCcgOiAnUkVMQVRJVkVHVCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbJzEnXSA9IHZhbHVlWycxJ10gfHwgJzAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblF1ZXJ5ID0gKHZhbHVlWycwJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsdWVbJzEnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMiddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbHVlWyczJ10pID8gYCR7ZmllbGR9JHtjdXJyZW50T3BlcmF0b3J9QCR7dmFsdWVbJzInXX1AJHt2YWx1ZVsnMyddfUAke3ZhbHVlWycxJ119YCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ2xpZGVfZHVyYXRpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblF1ZXJ5ID0gKHZhbHVlWycwJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsdWVbJzEnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMiddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbHVlWyczJ10pID8gYCR7ZmllbGR9JHtvcGVyYXRvcn1qYXZhc2NyaXB0OmdzLmdldER1cmF0aW9uRGF0ZSgnJHt2YWx1ZVsnMCddfSAke3ZhbHVlWycxJ119OiR7dmFsdWVbJzInXX06JHt2YWx1ZVsnMyddfScpYCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ2xpZGVfZGF0ZV9jaG9pY2UnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblF1ZXJ5ID0gKHZhbHVlKSA/IGAke2ZpZWxkfSR7b3BlcmF0b3J9JHt2YWx1ZX1AamF2YXNjcmlwdDpncy5kYXRlR2VuZXJhdGUoJyR7dmFsdWV9Jywnc3RhcnQnKUBqYXZhc2NyaXB0OmdzLmRhdGVHZW5lcmF0ZSgnJHt2YWx1ZX0nLCdlbmQnKWAgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RyZW5kX2ZpZWxkJzpcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25RdWVyeSA9ICh2YWx1ZVsnMCddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbHVlWycxJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsdWVbJzInXS5sYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMiddLmlkKSA/IGAke2ZpZWxkfSR7b3BlcmF0b3J9JHt2YWx1ZVsnMiddLmxhYmVsfUBqYXZhc2NyaXB0OmdzLmRhdGVQYXJ0KCcke3ZhbHVlWycxJ119JywnJHt2YWx1ZVsnMiddLmlkfScsJyR7dmFsdWVbJzAnXX0nKWAgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2dsaWRlX2RhdGVfZXF1aXZhbGVudCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPSAodmFsdWVbJzAnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMSddKSA/IGAke2ZpZWxkfSR7b3BlcmF0b3J9JHt2YWx1ZVsnMSddfUAke3ZhbHVlWycwJ119YCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPSAodmFsdWVbJzAnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWx1ZVsnMSddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbHVlWycyJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsdWVbJzMnXSkgPyBgJHtmaWVsZH0ke29wZXJhdG9yfSR7dmFsdWVbJzMnXX1AJHt2YWx1ZVsnMSddfUAke3ZhbHVlWycyJ119QCR7dmFsdWVbJzAnXX1gIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdub25lJzpcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25RdWVyeSA9IGAke2ZpZWxkfSR7b3BlcmF0b3J9YDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uUXVlcnkgPSBgJHtmaWVsZH0ke29wZXJhdG9yfSR7dmFsdWV9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25kaXRpb25RdWVyeSA9IGNvbmRpdGlvblF1ZXJ5IHx8IGAke2ZpZWxkfSR7b3BlcmF0b3J9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IGNvbmRpdGlvblF1ZXJ5OiBjb25kaXRpb25RdWVyeSB8fCBmYWxzZSwgYnJlYWRjcnVtYkl0ZW0gfVxyXG4gICAgfSxcclxuICAgIGdlbmVyYXRlUXVlcnk6ICh7IHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZGl0aW9uc0FycmF5LCBpc1NhdmUsIG9uU2VuZFF1ZXJ5LCBvcGVyYXRpb24gfSA9IHBheWxvYWQ7XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZVRvUmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0UXVlcnkgPSBcIlwiO1xyXG4gICAgICAgIGxldCBlcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBicmVhZGNydW1ic0l0ZW1zID0gW3sgbGFiZWw6IFwiQWxsXCIsIGNvbmRpdGlvbklkOiBcImFsbFwifV07XHJcbiAgICAgICAgbGV0IGlzTlEgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uZGl0aW9uc0FycmF5LmZvckVhY2goZ2xvYmFsQ29uZCA9PiB7XHJcblxyXG4gICAgICAgICAgICBnbG9iYWxDb25kLnJlbGF0ZWRDb25kaXRpb25zLmZvckVhY2goKHBhcmVudENvbmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnJlYWRjcnVtYkl0ZW0gPSB7IGxhYmVsOiBgJHtnbG9iYWxDb25kLm9wZXJhdG9yICYmIGluZGV4ID09PSAwID8gJ29yJyA6ICcnfWAsIGNvbmRpdGlvbklkOiBwYXJlbnRDb25kLmlkLCBnbG9iYWxDb25kaXRpb25JZDogZ2xvYmFsQ29uZC5pZCB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IGdlbmVyYXRlZENvbmRpdGlvbiA9IFFVRVJZX1VUSUxTLmdlbmVyYXRlQ3VycmVudENvbmRpdGlvblF1ZXJ5KHsgcGF5bG9hZDogeyBjb25kaXRpb25EYXRhOiBwYXJlbnRDb25kLCBvcGVyYXRpb24sIGJyZWFkY3J1bWJJdGVtIH0gfSlcclxuICAgICAgICAgICAgICAgIGlzTlEgPSBnZW5lcmF0ZWRDb25kaXRpb24uY29uZGl0aW9uUXVlcnk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOUSAmJiBpbmRleCA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRRdWVyeSArPSBnbG9iYWxDb25kLm9wZXJhdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTlEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyQ29uZGl0aW9uID0gZ2VuZXJhdGVkQ29uZGl0aW9uLmNvbmRpdGlvblF1ZXJ5O1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1ckNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJJdGVtID0gZ2VuZXJhdGVkQ29uZGl0aW9uLmJyZWFkY3J1bWJJdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFF1ZXJ5ICs9IGAke3BhcmVudENvbmQub3BlcmF0b3J9JHtjdXJDb25kaXRpb259YDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAncnVuJyAmJiAhY3VyQ29uZGl0aW9uICYmICFwYXJlbnRDb25kLmNvbmRpdGlvbk9wdGlvbnMuZmllbGQgJiYgY29uZGl0aW9uc0FycmF5Lmxlbmd0aCA9PT0gMSAmJiBnbG9iYWxDb25kLnJlbGF0ZWRDb25kaXRpb25zLmxlbmd0aCA9PT0gMSAmJiAhcGFyZW50Q29uZC5yZWxhdGVkQ29uZGl0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRRdWVyeSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGFyZW50Q29uZC5yZWxhdGVkQ29uZGl0aW9ucy5mb3JFYWNoKGNoaWxkQ29uZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdlbmVyYXRlZENvbmRpdGlvbiA9IFFVRVJZX1VUSUxTLmdlbmVyYXRlQ3VycmVudENvbmRpdGlvblF1ZXJ5KHsgcGF5bG9hZDogeyBjb25kaXRpb25EYXRhOiAgY2hpbGRDb25kLCBvcGVyYXRpb24sIGJyZWFkY3J1bWJJdGVtIH19KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1ckNvbmRpdGlvbiA9IGdlbmVyYXRlZENvbmRpdGlvbi5jb25kaXRpb25RdWVyeTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJJdGVtID0gZ2VuZXJhdGVkQ29uZGl0aW9uLmJyZWFkY3J1bWJJdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRRdWVyeSArPSBgJHtjaGlsZENvbmQub3BlcmF0b3J9JHtjdXJDb25kaXRpb259YDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmIChnZW5lcmF0ZWRDb25kaXRpb24uY29uZGl0aW9uUXVlcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhZGNydW1iSXRlbS5sYWJlbCA9IGJyZWFkY3J1bWJJdGVtLmxhYmVsLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhZGNydW1ic0l0ZW1zLnB1c2goYnJlYWRjcnVtYkl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIGlmIChlcnJvcikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICBvblNlbmRRdWVyeShyZXN1bHRRdWVyeSk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wZXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncnVuJzpcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNCcmVhZGNydW1iRmFsc2UgPSAhIWJyZWFkY3J1bWJzSXRlbXMuZmluZChpdGVtID0+ICFpdGVtLmxhYmVsKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZighaXNCcmVhZGNydW1iRmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVG9SZXR1cm4gPSB7IGJyZWFkY3J1bWJzSXRlbXMgfTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVG9SZXR1cm4gPSB7IHF1ZXJ5VG9TYXZlOiByZXN1bHRRdWVyeSwgaXNTYXZlOiAhaXNTYXZlIH07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB2YWx1ZVRvUmV0dXJuO1xyXG4gICAgfVxyXG59OyJdfQ==