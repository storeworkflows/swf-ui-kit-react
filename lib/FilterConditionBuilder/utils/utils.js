"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseConditionValue = exports.parseConditionValueWithRef = exports.getValueAdditionalData = void 0;

var _index = require("./index");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

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

      _index.REQUEST_UTILS.fetchReferenceData({
        table: tableFields[field].reference,
        queryParams: queryParams
      }).then(function (res) {
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
}; // done        


exports.getValueAdditionalData = getValueAdditionalData;

var parseConditionValueWithRef = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref2) {
    var _this2 = this;

    var condition, operators, tableFields, globalID, currentID, operator, field, value, editor, valueAdditionalData, fieldItems, fieldsDropdownData, lastTableFields, fieldsDataID, allFields, referenceField, fields, isReferenceField, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, _ret;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            condition = _ref2.condition, operators = _ref2.operators, tableFields = _ref2.tableFields, globalID = _ref2.globalID, currentID = _ref2.currentID;
            operator = _index.GENERAL_UTILS.findOperator(condition, operators);
            field = '', value = '', editor = "", valueAdditionalData = [], fieldItems = [], fieldsDropdownData = [], lastTableFields = tableFields;
            fieldsDataID = _index.GENERAL_UTILS.generateID();
            allFields = condition.slice(0, condition.indexOf(operator));
            referenceField = allFields.split(".").slice(0, -1);
            fields = _index.GENERAL_UTILS.clone(allFields.split("."));
            isReferenceField = referenceField.length > 1;

            if (!isReferenceField) {
              _context2.next = 13;
              break;
            }

            return _context2.delegateYield( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var dropdownFields, fieldsData, queryParams, lastField, i, key, dataForFieldItems, _iterator2, _step2, _key, operatorsArray;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      dropdownFields = [{
                        items: _index.DATA_UTILS.getDropdownFieldsItems({
                          tableFields: tableFields,
                          index: fieldsDataID,
                          listIndex: 0
                        })
                      }];
                      fieldsData = _defineProperty({}, fieldsDataID, tableFields);
                      referenceField.pop();
                      queryParams = {
                        sysparm_operators: true,
                        sysparm_get_extended_tables: true,
                        sysparm_keywords: true
                      };
                      lastField = '';
                      value = condition.slice(allFields.length + operator.length);
                      i = 1;
                      _iteratorNormalCompletion = true;
                      _didIteratorError = false;
                      _context.prev = 9;
                      _iterator = _asyncIterator(referenceField);

                    case 11:
                      _context.next = 13;
                      return _iterator.next();

                    case 13:
                      _step = _context.sent;
                      _iteratorNormalCompletion = _step.done;
                      _context.next = 17;
                      return _step.value;

                    case 17:
                      _value = _context.sent;

                      if (_iteratorNormalCompletion) {
                        _context.next = 26;
                        break;
                      }

                      key = _value;
                      fieldsDataID = _index.GENERAL_UTILS.generateID();
                      _context.next = 23;
                      return _index.REQUEST_UTILS.fetchTableData({
                        table: lastTableFields[key].reference,
                        queryParams: queryParams
                      }).then(function (res) {
                        fieldsData = _objectSpread(_objectSpread({}, fieldsData), {}, _defineProperty({}, fieldsDataID, res.columns));
                        lastTableFields = res.columns;
                        dropdownFields.push({
                          items: _index.DATA_UTILS.getDropdownFieldsItems({
                            tableFields: Object.values(res.columns),
                            index: fieldsDataID,
                            listIndex: i++
                          })
                        });
                      });

                    case 23:
                      _iteratorNormalCompletion = true;
                      _context.next = 11;
                      break;

                    case 26:
                      _context.next = 32;
                      break;

                    case 28:
                      _context.prev = 28;
                      _context.t0 = _context["catch"](9);
                      _didIteratorError = true;
                      _iteratorError = _context.t0;

                    case 32:
                      _context.prev = 32;
                      _context.prev = 33;

                      if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
                        _context.next = 37;
                        break;
                      }

                      _context.next = 37;
                      return _iterator["return"]();

                    case 37:
                      _context.prev = 37;

                      if (!_didIteratorError) {
                        _context.next = 40;
                        break;
                      }

                      throw _iteratorError;

                    case 40:
                      return _context.finish(37);

                    case 41:
                      return _context.finish(32);

                    case 42:
                      fieldsDropdownData = dropdownFields;
                      dataForFieldItems = fieldsDropdownData.map(function (field) {
                        return field.items;
                      });
                      i = 0;
                      _iterator2 = _createForOfIteratorHelper(dataForFieldItems);

                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          _key = _step2.value;
                          fieldItems = [].concat(_toConsumableArray(fieldItems), [_objectSpread(_objectSpread({}, _key.find(function (data) {
                            return fields[i] === data.id;
                          })), {}, {
                            dropdownClicked: i++ < dataForFieldItems.length - 1
                          })]);
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
                      valueAdditionalData = editor === "trend_field" ? _index.DATA_UTILS.getTrendData(value['1']) : _this2.getValueAdditionalData({
                        tableFields: lastTableFields,
                        editor: editor,
                        field: lastField,
                        globalID: globalID,
                        currentID: currentID
                      });
                      return _context.abrupt("return", {
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

                    case 56:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[9, 28, 32, 42], [33,, 37, 41]]);
            })(), "t0", 10);

          case 10:
            _ret = _context2.t0;

            if (!(_typeof(_ret) === "object")) {
              _context2.next = 13;
              break;
            }

            return _context2.abrupt("return", _ret.v);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function parseConditionValueWithRef(_x) {
    return _ref3.apply(this, arguments);
  };
}(); // done


exports.parseConditionValueWithRef = parseConditionValueWithRef;

var parseConditionValue = function parseConditionValue(_ref4) {
  var condition = _ref4.condition,
      operators = _ref4.operators,
      tableFields = _ref4.tableFields,
      globalID = _ref4.globalID,
      currentID = _ref4.currentID;

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
    valueAdditionalData = this.getValueAdditionalData({
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
};

exports.parseConditionValue = parseConditionValue;