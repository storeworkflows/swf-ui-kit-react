"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QUERY_UTILS = void 0;

var _this = void 0;

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
    var operator = GENERAL_UTILS.findOperator(condition, operators);
    var field = '',
        value = '',
        editor = "",
        valueAdditionalData = [],
        fieldItems = [],
        fieldsDropdownData = [];
    var fieldsDataID = GENERAL_UTILS.generateID();

    if (!operator) {
      field = condition;
      operator = '';
    } else {
      field = condition.slice(0, condition.indexOf(operator));
      value = condition.slice(field.length + operator.length);
      editor = tableFields[field].operators.find(function (op) {
        return op.operator === operator;
      }).advancedEditor;
      valueAdditionalData = _this.getValueAdditionalData({
        tableFields: tableFields,
        editor: editor,
        field: field,
        globalID: globalID,
        currentID: currentID
      });
      value = DATA_UTILS.getValue({
        value: value,
        editor: editor
      });
    }

    var fields = field.split('.');
    fieldsDropdownData = DATA_UTILS.getDropdownFieldsItems({
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
      valueAdditionalData = DATA_UTILS.getTrendData(value['1']);
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
              operator = GENERAL_UTILS.findOperator(condition, operators);
              field = '', value = '', editor = "", valueAdditionalData = [], fieldItems = [], fieldsDropdownData = [];
              fieldsDataID = GENERAL_UTILS.generateID();
              referenceField = condition.slice(0, condition.indexOf(operator)).split(".");
              fields = GENERAL_UTILS.clone(referenceField);
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
                          items: DATA_UTILS.getDropdownFieldsItems({
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
                                  fieldsDataID = GENERAL_UTILS.generateID();
                                  _context.next = 4;
                                  return REQUEST_UTILS.fetchTableData({
                                    table: nextData.reference,
                                    queryParams: queryParams
                                  }).then(function (res) {
                                    fieldsData = _objectSpread(_objectSpread({}, fieldsData), {}, _defineProperty({}, fieldsDataID, res.columns));
                                    nextData = res.columns[key];
                                    lastTableFields = res.columns;
                                    dropdownFields.push({
                                      items: DATA_UTILS.getDropdownFieldsItems({
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
                        value = DATA_UTILS.getValue({
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
                        valueAdditionalData = editor === "trend_field" ? DATA_UTILS.getTrendData(value['1']) : _this.getValueAdditionalData({
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
  }()
};
exports.QUERY_UTILS = QUERY_UTILS;