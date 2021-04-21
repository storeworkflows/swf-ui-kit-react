"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _FilterConditionItem = _interopRequireDefault(require("./Components/FilterConditionItem/FilterConditionItem"));

var _FilterBreadcrumbs = _interopRequireDefault(require("./Components/FilterBreadcrumbs/FilterBreadcrumbs"));

var _FilterTemplates = _interopRequireDefault(require("./Components/FilterTemplates/FilterTemplates"));

var _FilterSaver = _interopRequireDefault(require("./Components/FilterSaver/FilterSaver"));

var _index = require("../index");

var _utils = require("./utils/utils");

var _Badge = _interopRequireDefault(require("../Badge/Badge"));

var _utils2 = require("./utils");

var _effects = require("./effects");

var _utils3 = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FilterCondition = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterCondition, _React$Component);

  var _super = _createSuper(FilterCondition);

  function FilterCondition(props) {
    var _this;

    _classCallCheck(this, FilterCondition);

    _this = _super.call(this, props);

    _this.fetchTableDataSuccessed = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref) {
        var result, properties, fieldsDataID, blockFields, allowFileds, query, fieldsDropdownData, conditionsArray, position, copyQuery, operatorPosition, operators;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                result = _ref.result, properties = _ref.properties;
                fieldsDataID = _utils2.GENERAL_UTILS.generateID();
                blockFields = properties.blockFields, allowFileds = properties.allowFileds;
                query = _this.state.query;
                fieldsDropdownData = _utils2.DATA_UTILS.getDropdownFieldsItems({
                  tableFields: result.columns,
                  index: fieldsDataID,
                  blockFields: blockFields,
                  allowFileds: allowFileds
                });
                conditionsArray = [{
                  id: _utils2.GENERAL_UTILS.generateID(),
                  condition: "",
                  operator: "",
                  relatedConditions: [{
                    id: _utils2.GENERAL_UTILS.generateID() + 1,
                    condition: "",
                    operator: "",
                    conditionOptions: {
                      operator: {
                        operator: "",
                        editior: ""
                      },
                      field: "",
                      value: "",
                      fieldsData: _defineProperty({}, fieldsDataID, result.columns),
                      fieldsDropdownData: [{
                        items: fieldsDropdownData
                      }]
                    },
                    relatedConditions: []
                  }]
                }];

                if (!query) {
                  _context4.next = 25;
                  break;
                }

                position = 0;
                copyQuery = query;

                if (copyQuery.indexOf('^EQ') > -1) {
                  copyQuery = copyQuery.slice(0, copyQuery.indexOf('^EQ'));
                }

              case 10:
                if (!true) {
                  _context4.next = 20;
                  break;
                }

                operatorPosition = copyQuery.indexOf('^NQ', position);

                if (!(operatorPosition === -1)) {
                  _context4.next = 15;
                  break;
                }

                conditionsArray[conditionsArray.length - 1].condition = copyQuery.slice(position);
                return _context4.abrupt("break", 20);

              case 15:
                conditionsArray[conditionsArray.length - 1].condition = copyQuery.slice(position, operatorPosition);
                conditionsArray.push({
                  id: _utils2.GENERAL_UTILS.generateID() + operatorPosition,
                  condition: '',
                  operator: '^NQ',
                  relatedConditions: [{
                    id: _utils2.GENERAL_UTILS.generateID() + operatorPosition + 1,
                    condition: '',
                    operator: '',
                    conditionOptions: {
                      operator: {
                        operator: '',
                        editior: ''
                      },
                      field: '',
                      value: '',
                      fieldsData: _defineProperty({}, fieldsDataID, result.columns),
                      fieldsDropdownData: [{
                        items: fieldsDropdownData
                      }]
                    },
                    relatedConditions: []
                  }]
                });
                position = operatorPosition + 3;
                _context4.next = 10;
                break;

              case 20:
                conditionsArray.map(function (globalCondition) {
                  var position = 0;
                  var lastOperator;

                  while (true) {
                    var _operatorPosition = globalCondition.condition.indexOf('^', position);

                    if (_operatorPosition === -1) {
                      switch (lastOperator) {
                        case '^OR':
                          globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].relatedConditions[globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].relatedConditions.length - 1].condition = globalCondition.condition.slice(position);
                          break;

                        default:
                          globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].condition = globalCondition.condition.slice(position);
                      }

                      break;
                    }

                    switch (lastOperator) {
                      case '^OR':
                        globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].relatedConditions[globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].relatedConditions.length - 1].condition = globalCondition.condition.slice(position, _operatorPosition);
                        break;

                      default:
                        globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].condition = globalCondition.condition.slice(position, _operatorPosition);
                    }

                    if (_operatorPosition === copyQuery.indexOf('^OR', position)) {
                      globalCondition.relatedConditions[globalCondition.relatedConditions.length - 1].relatedConditions.push({
                        id: _utils2.GENERAL_UTILS.generateID() + _operatorPosition,
                        condition: '',
                        operator: '^OR'
                      });
                      position = _operatorPosition + 3;
                      lastOperator = '^OR';
                    } else {
                      globalCondition.relatedConditions.push({
                        id: _utils2.GENERAL_UTILS.generateID() + _operatorPosition,
                        condition: '',
                        operator: '^',
                        relatedConditions: []
                      });
                      position = _operatorPosition + 1;
                      lastOperator = '^';
                    }
                  }
                });
                operators = _utils2.DATA_UTILS.getOperators({
                  tableFields: result.columns
                });
                _context4.next = 24;
                return Promise.all(conditionsArray.map( /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(globalCond) {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return Promise.all(globalCond.relatedConditions.map( /*#__PURE__*/function () {
                              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parentCond) {
                                var condition, params, conditionOptions;
                                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                  while (1) {
                                    switch (_context2.prev = _context2.next) {
                                      case 0:
                                        condition = parentCond.condition.replace("OR", "");
                                        params = {
                                          condition: condition,
                                          operators: operators,
                                          tableFields: result.columns,
                                          globalID: globalCond.id,
                                          currentID: parentCond.id
                                        };

                                        if (!(condition.slice(0, condition.indexOf(_utils2.GENERAL_UTILS.findOperator(condition, operators))).split(".").length > 1)) {
                                          _context2.next = 8;
                                          break;
                                        }

                                        _context2.next = 5;
                                        return _this.parseConditionValueWithRef(params);

                                      case 5:
                                        _context2.t0 = _context2.sent;
                                        _context2.next = 9;
                                        break;

                                      case 8:
                                        _context2.t0 = _this.parseConditionValue(params);

                                      case 9:
                                        conditionOptions = _context2.t0;
                                        parentCond = _objectSpread(_objectSpread({}, parentCond), {}, {
                                          conditionOptions: conditionOptions
                                        });
                                        _context2.next = 13;
                                        return Promise.all(parentCond.relatedConditions.map( /*#__PURE__*/function () {
                                          var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(childCond) {
                                            var params, conditionOptions;
                                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                              while (1) {
                                                switch (_context.prev = _context.next) {
                                                  case 0:
                                                    params = {
                                                      condition: childCond.condition,
                                                      operators: operators,
                                                      tableFields: result.columns,
                                                      globalID: globalCond.id,
                                                      currentID: childCond.id
                                                    };

                                                    if (!(childCond.condition.slice(0, childCond.condition.indexOf(_utils2.GENERAL_UTILS.findOperator(childCond.condition, operators))).split(".").length > 1)) {
                                                      _context.next = 7;
                                                      break;
                                                    }

                                                    _context.next = 4;
                                                    return _this.parseConditionValueWithRef(params);

                                                  case 4:
                                                    _context.t0 = _context.sent;
                                                    _context.next = 8;
                                                    break;

                                                  case 7:
                                                    _context.t0 = _this.parseConditionValue(params);

                                                  case 8:
                                                    conditionOptions = _context.t0;
                                                    return _context.abrupt("return", _objectSpread(_objectSpread({}, childCond), {}, {
                                                      conditionOptions: conditionOptions
                                                    }));

                                                  case 10:
                                                  case "end":
                                                    return _context.stop();
                                                }
                                              }
                                            }, _callee);
                                          }));

                                          return function (_x4) {
                                            return _ref5.apply(this, arguments);
                                          };
                                        }()));

                                      case 13:
                                        parentCond.relatedConditions = _context2.sent;
                                        return _context2.abrupt("return", parentCond);

                                      case 15:
                                      case "end":
                                        return _context2.stop();
                                    }
                                  }
                                }, _callee2);
                              }));

                              return function (_x3) {
                                return _ref4.apply(this, arguments);
                              };
                            }()));

                          case 2:
                            globalCond.relatedConditions = _context3.sent;
                            return _context3.abrupt("return", globalCond);

                          case 4:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x2) {
                    return _ref3.apply(this, arguments);
                  };
                }()));

              case 24:
                conditionsArray = _context4.sent;

              case 25:
                _this.setState({
                  tableFields: result,
                  conditionsArray: conditionsArray
                });

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.isFilterSaved = function (_ref6) {
      var isSaved = _ref6.isSaved;

      _this.setState({
        isFilterSaved: isSaved,
        isSave: false
      });
    };

    _this.setConditionOptionsOperator = function (_ref7) {
      var value = _ref7.value,
          conditionOptions = _ref7.conditionOptions;
      var _conditionOptions = conditionOptions,
          activeField = _conditionOptions.activeField,
          activeFieldsData = _conditionOptions.activeFieldsData;
      var _this$state = _this.state,
          currentConditionID = _this$state.currentConditionID,
          globalConditionID = _this$state.globalConditionID;
      var valueAdditionalData = [];
      valueAdditionalData = activeField ? _this.getValueAdditionalData({
        state: _this.state,
        tableFields: activeFieldsData,
        editor: value.editor,
        field: activeField,
        currentID: currentConditionID,
        globalID: globalConditionID
      }) : [];
      conditionOptions = _objectSpread(_objectSpread({}, conditionOptions), {}, {
        operator: value,
        value: "",
        valueAdditionalData: valueAdditionalData
      });
      return conditionOptions;
    };

    _this.setConditionOptionsValue = function (_ref8) {
      var value = _ref8.value,
          conditionOptions = _ref8.conditionOptions,
          conditionOption = _ref8.conditionOption;
      var editor = conditionOptions.operator.editor;

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
          if (value.index == 1) conditionOptions.valueAdditionalData = _utils2.DATA_UTILS.getTrendData(value.value);
          if (!conditionOptions.value) conditionOptions.value = {};
          conditionOptions.value[value.index] = value.value;
          return conditionOptions;

        default:
          conditionOptions[conditionOption] = value;
          return conditionOptions;
      }
    };

    _this.setConditionOptions = function (_ref9) {
      var value = _ref9.value,
          conditionOption = _ref9.conditionOption,
          currentConditionID = _ref9.currentConditionID,
          globalConditionID = _ref9.globalConditionID;
      var conditionsArray = _this.state.conditionsArray;
      var properCurrentConditionID = currentConditionID ? currentConditionID : _this.state.currentConditionID;
      var properGlobalConditionID = globalConditionID ? globalConditionID : _this.state.globalConditionID;

      var copyConditionArray = _utils2.GENERAL_UTILS.clone(conditionsArray);

      var globalConditionInArrInd = copyConditionArray.findIndex(function (cond) {
        return cond.id === properGlobalConditionID;
      });
      var currentConditionInArrInd = copyConditionArray[globalConditionInArrInd].relatedConditions.findIndex(function (cond) {
        return cond.id === properCurrentConditionID;
      });
      var currentConditionInArr;
      var copyConditionOptions;

      if (currentConditionInArrInd > -1) {
        currentConditionInArr = copyConditionArray[globalConditionInArrInd].relatedConditions[currentConditionInArrInd];
        copyConditionOptions = _objectSpread({}, copyConditionArray[globalConditionInArrInd].relatedConditions[currentConditionInArrInd].conditionOptions);
      } else {
        copyConditionArray[globalConditionInArrInd].relatedConditions.forEach(function (cond, parentInd) {
          cond.relatedConditions.forEach(function (cond, childInd) {
            if (cond.id === properCurrentConditionID) {
              currentConditionInArr = copyConditionArray[globalConditionInArrInd].relatedConditions[parentInd].relatedConditions[childInd];
              copyConditionOptions = _objectSpread({}, cond.conditionOptions);
            }
          });
        });
      }

      switch (conditionOption) {
        case "field":
          currentConditionInArr.conditionOptions = _this.setConditionOptionsField({
            conditionOptions: copyConditionOptions,
            value: value,
            properCurrentConditionID: properCurrentConditionID,
            properGlobalConditionID: properGlobalConditionID
          });
          break;

        case "fieldsData":
          currentConditionInArr.conditionOptions = _this.setConditionOptionsFieldData({
            conditionOptions: copyConditionOptions,
            value: value
          });
          break;

        case "operator":
          currentConditionInArr.conditionOptions = _this.setConditionOptionsOperator({
            value: value,
            conditionOptions: copyConditionOptions,
            properCurrentConditionID: properCurrentConditionID,
            properGlobalConditionID: properGlobalConditionID
          });
          break;

        case "value":
          currentConditionInArr.conditionOptions = _this.setConditionOptionsValue({
            value: value,
            conditionOptions: copyConditionOptions,
            conditionOption: conditionOption
          });
          break;

        case "valueAditionalData":
          currentConditionInArr.conditionOptions = _this.setConditionOptionsValueAdditional({
            value: value,
            conditionOptions: copyConditionOptions
          });
          break;
      }

      _this.setState({
        conditionsArray: copyConditionArray
      });
    };

    _this.setConditionOptionsValueAdditional = function (_ref10) {
      var value = _ref10.value,
          conditionOptions = _ref10.conditionOptions;
      conditionOptions.valueAdditionalData = value;
      return conditionOptions;
    };

    _this.fetchReferenceDataSuccessed = function (result) {
      var _this$state2 = _this.state,
          referenceFieldData = _this$state2.referenceFieldData,
          conditionsArray = _this$state2.conditionsArray;
      var valueFields = result.map(function (field) {
        return {
          id: field.sys_id,
          label: field[referenceFieldData.field.reference_display_field],
          dropdown: "value"
        };
      });

      var copyConditionsArray = _utils2.CONDITION_OPTIONS_UTILS.setConditionOptions({
        value: valueFields,
        conditionOption: "valueAditionalData",
        currentConditionID: referenceFieldData.currentConditionID,
        globalConditionID: referenceFieldData.globalConditionID,
        conditionsArray: conditionsArray
      });

      _this.setState({
        conditionsArray: copyConditionsArray
      });
    };

    _this.setConditionOptionsFieldData = function (_ref11) {
      var conditionOptions = _ref11.conditionOptions,
          value = _ref11.value;

      var fieldsDataID = _utils2.GENERAL_UTILS.generateID();

      var copyConditionOptions;

      var newFieldsDropdownData = _utils2.DATA_UTILS.getDropdownFieldsItems({
        tableFields: value.result,
        index: fieldsDataID
      });

      if (value.listIndex < conditionOptions.fieldsDropdownData.length - 1) {
        var deletedFieldsData = conditionOptions.fieldsDropdownData.splice(value.listIndex + 1);
        deletedFieldsData = deletedFieldsData.map(function (data) {
          return data.items[0].index;
        });
        deletedFieldsData.forEach(function (key) {
          return delete conditionOptions.fieldsData[key];
        });
      }

      conditionOptions.fieldsDropdownData.push({
        items: newFieldsDropdownData
      });
      conditionOptions.fieldsData[fieldsDataID] = value.result;
      conditionOptions.fieldItems = value.selectedItems;
      copyConditionOptions = conditionOptions;
      copyConditionOptions = _this.setConditionOptionsOperator({
        value: {
          operator: '',
          editor: ''
        },
        conditionOptions: copyConditionOptions
      });
      return copyConditionOptions;
    };

    _this.getConditionsIDs = function (_ref12) {
      var currentConditionID = _ref12.currentConditionID,
          globalConditionID = _ref12.globalConditionID;

      _this.setState({
        currentConditionID: currentConditionID,
        globalConditionID: globalConditionID
      });
    };

    _this.setConditionOptionsField = function (_ref13) {
      var conditionOptions = _ref13.conditionOptions,
          value = _ref13.value;
      var fieldsData = conditionOptions.fieldsData;
      var currentFieldsData = fieldsData[value.items[value.items.length - 1].index];
      var currentValue = value.items[value.items.length - 1].id;
      var currentValueIndex = conditionOptions.fieldsDropdownData.findIndex(function (data) {
        return data.items[0].index === value.items[value.items.length - 1].index;
      });
      var deletedFieldsData = conditionOptions.fieldsDropdownData.splice(currentValueIndex + 1);
      var operatorsArray = currentFieldsData[currentValue].operators.map(function (operation) {
        return {
          id: operation.operator,
          label: operation.label,
          dropdown: 'operation',
          editor: operation.advancedEditor
        };
      });

      var copyConditionOptions = _objectSpread(_objectSpread({}, conditionOptions), {}, {
        field: value.value,
        fieldItems: value,
        operator: {
          operator: operatorsArray[0].id,
          editor: operatorsArray[0].editor
        },
        value: '',
        operatorsArray: operatorsArray,
        activeFieldsData: _objectSpread({}, currentFieldsData),
        activeField: currentValue
      });

      deletedFieldsData = deletedFieldsData.map(function (data) {
        return data.items[0].index;
      });
      deletedFieldsData.forEach(function (key) {
        return delete conditionOptions.fieldsData[key];
      });
      copyConditionOptions = _this.setConditionOptionsOperator({
        value: {
          operator: operatorsArray[0].id,
          editor: operatorsArray[0].editor
        },
        conditionOptions: copyConditionOptions
      });
      return copyConditionOptions;
    };

    _this.setQuery = function (_ref14) {
      var query = _ref14.query;
      var count = query ? query === null || query === void 0 ? void 0 : query.split(/\^|\^OR/).length : 0;

      _this.setState({
        query: query,
        active: Boolean(query),
        count: count
      });
    };

    _this.setAdvanced = function (value) {
      _this.setState({
        advanced: value
      });
    };

    _this.state = {
      referenceFieldData: {},
      conditionsArray: [],
      isSave: false,
      referenceTableFieldsData: {},
      isFilterOpened: _this.props.opened,
      breadcrumbsItems: [{
        label: 'All',
        conditionId: 'all'
      }],
      isFilterSaved: false,
      queryToSave: '',
      labelArr: [],
      selectedItem: {
        items: [],
        label: ""
      },
      alertData: {
        active: false,
        positive: true
      },
      tableFields: {
        columns: {}
      },
      query: _this.props.query,
      operatorArr: [],
      clickedListIndex: null,
      filterList: [],
      active: false,
      count: 0,
      advanced: false
    };
    _this.getValueAdditionalData = _utils.getValueAdditionalData.bind(_assertThisInitialized(_this));
    _this.parseConditionValue = _utils.parseConditionValue.bind(_assertThisInitialized(_this));
    _this.parseConditionValueWithRef = _utils.parseConditionValueWithRef.bind(_assertThisInitialized(_this));
    _this.clickBtn = _effects.BUTTONS_EFFECTS.clickBtn.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FilterCondition, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this2 = this;

        var _this$props, table, user, onSendQuery, filtersListQuery, _this$state3, query, conditionsArray, isSave, queryParams;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this$props = this.props, table = _this$props.table, user = _this$props.user, onSendQuery = _this$props.onSendQuery, filtersListQuery = _this$props.filtersListQuery;
                _this$state3 = this.state, query = _this$state3.query, conditionsArray = _this$state3.conditionsArray, isSave = _this$state3.isSave;
                queryParams = {
                  sysparm_operators: true,
                  sysparm_get_extended_tables: true,
                  sysparm_keywords: true
                };
                _context6.next = 5;
                return _utils2.REQUEST_UTILS.fetchTableData({
                  table: table,
                  queryParams: queryParams
                }).then( /*#__PURE__*/function () {
                  var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(result) {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return _this2.fetchTableDataSuccessed({
                              result: result,
                              properties: _this2.props
                            });

                          case 2:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x5) {
                    return _ref15.apply(this, arguments);
                  };
                }());

              case 5:
                if (!!query) _utils2.QUERY_UTILS.generateQuery({
                  payload: {
                    conditionsArray: conditionsArray,
                    onSendQuery: onSendQuery,
                    isSave: isSave,
                    operation: "run"
                  }
                });

                _utils2.REQUEST_UTILS.fetchFilterTemplates({
                  table: table,
                  user: user,
                  filter: filtersListQuery
                }).then(function (res) {
                  return _this2.setState({
                    filterList: res
                  });
                });

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(prevProps, prevState) {
        var _this3 = this;

        var _this$props2, query, table, filtersListQuery, _table, queryParams, _this$props3, _table2, user;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (prevProps.table !== this.props.table) {
                  _this$props2 = this.props, query = _this$props2.query, table = _this$props2.table, filtersListQuery = _this$props2.filtersListQuery;
                  this.setQuery({
                    query: query
                  });
                  this.setState({
                    active: Boolean(query),
                    breadcrumbsItems: [{
                      label: 'All',
                      conditionId: 'all'
                    }]
                  });

                  _utils2.REQUEST_UTILS.fetchFilterTemplates({
                    table: table,
                    filter: filtersListQuery
                  }).then(function (res) {
                    return _this3.setState({
                      filterList: res
                    });
                  });
                }

                if (this.props.query !== prevProps.query) {
                  this.setQuery({
                    query: this.props.query
                  });
                }

                if (!(prevState.query !== this.state.query || prevProps.table !== this.props.table)) {
                  _context7.next = 7;
                  break;
                }

                _table = this.props.table;
                queryParams = {
                  sysparm_operators: true,
                  sysparm_get_extended_tables: true,
                  sysparm_keywords: true
                };
                _context7.next = 7;
                return _utils2.REQUEST_UTILS.fetchTableData({
                  table: _table,
                  queryParams: queryParams
                }).then(function (result) {
                  _this3.fetchTableDataSuccessed({
                    result: result,
                    properties: _this3.props
                  });
                });

              case 7:
                if (prevState.advanced !== this.state.advanced) {
                  this.setState({
                    isFilterOpened: this.state.advanced
                  });
                }

                if (this.state.isFilterSaved) {
                  _this$props3 = this.props, _table2 = _this$props3.table, user = _this$props3.user;

                  _utils2.REQUEST_UTILS.fetchFilterTemplates({
                    table: _table2,
                    user: user
                  }).then(function (res) {
                    return _this3.setState({
                      filterList: res
                    });
                  });

                  this.setState({
                    isFilterSaved: false
                  });
                }

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function componentDidUpdate(_x6, _x7) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state4 = this.state,
          active = _this$state4.active,
          advanced = _this$state4.advanced,
          count = _this$state4.count,
          isFilterOpened = _this$state4.isFilterOpened,
          conditionsArray = _this$state4.conditionsArray,
          breadcrumbsItems = _this$state4.breadcrumbsItems,
          isSave = _this$state4.isSave,
          queryToSave = _this$state4.queryToSave,
          filterList = _this$state4.filterList;
      var _this$props4 = this.props,
          table = _this$props4.table,
          user = _this$props4.user; // console.log("%c%s", "color: green", "REACT Filter Conditions Array", this.state.conditionsArray)

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "collapsed-filter-header",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "templates",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterTemplates["default"], {
              setQuery: this.setQuery,
              setAdvanced: this.setAdvanced,
              filterList: filterList,
              table: table
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
            label: "Apply",
            variant: "primary",
            size: "md",
            disabled: !advanced || !active,
            onClick: function onClick() {
              return _this4.clickBtn({
                action: "applyQuery",
                payload: {
                  type: "run"
                }
              });
            },
            customStyle: {
              "border-color": "rgb(15,67,55)",
              "hover-border-color": "rgb(15,67,55)",
              "active-border-color": "none"
            }
          }), active && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge["default"], {
            count: count,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
              icon: isFilterOpened ? "funnel-fill" : "funnel",
              size: "md",
              tooltipContent: "Filter",
              variant: "tertiary",
              onClick: function onClick() {
                return _this4.clickBtn({
                  action: "filterToogle"
                });
              }
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _classnames["default"])({
            "swf-filter-container": true,
            "--is-collapsed": isFilterOpened
          }),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "breadcrumbs",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterBreadcrumbs["default"], {
              items: breadcrumbsItems,
              clickBtn: this.clickBtn
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "filter-header",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "actions",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "buttons",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "btn",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
                    label: "Save",
                    variant: "secondary",
                    size: "md",
                    customStyle: {
                      "border-color": "rgb(172,180,181)",
                      "hover-border-color": "rgb(172,180,181)",
                      "active-border-color": "rgb(172,180,181)"
                    },
                    onClick: function onClick() {
                      return _this4.clickBtn({
                        action: "toogleSave"
                      });
                    }
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "btn",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
                    label: "Clear all",
                    variant: "secondary",
                    size: "md",
                    customStyle: {
                      "border-color": "rgb(172,180,181)",
                      "hover-border-color": "rgb(172,180,181)",
                      "active-border-color": "rgb(172,180,181)"
                    },
                    onClick: function onClick() {
                      return _this4.clickBtn({
                        action: "clearAll"
                      });
                    }
                  })
                })]
              })
            }), isSave && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterSaver["default"], {
              isFilterSaved: this.isFilterSaved,
              table: table,
              query: queryToSave,
              user: user
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "filter-body",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "conditions-container",
              children: conditionsArray.map(function (globalCondition, index) {
                var relatedConditions = [];
                globalCondition.relatedConditions.forEach(function (cond) {
                  relatedConditions.push(cond);
                  cond.relatedConditions.forEach(function (cond) {
                    relatedConditions.push(cond);
                  });
                });
                return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: (0, _classnames["default"])({
                    "global-condition": true,
                    "global-conditions_first": index === 0
                  }),
                  children: [index !== 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "title",
                    children: "OR"
                  }), relatedConditions.map(function (condition) {
                    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: (0, _classnames["default"])({
                        "condition-container": true,
                        "failed": condition.failed
                      }),
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterConditionItem["default"], {
                        conditionObj: condition,
                        conditionID: condition.id,
                        globalConditionID: globalCondition.id,
                        globalCondition: globalCondition,
                        operatorType: condition.operator,
                        clickBtn: _this4.clickBtn,
                        getConditionsIDs: _this4.getConditionsIDs,
                        setConditionOptions: _this4.setConditionOptions,
                        selectedItem: condition.conditionOptions.fieldItems
                      })
                    }, condition.id);
                  })]
                });
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "new-criteria",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "title",
                children: "or"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
                  label: "New Criteria",
                  variant: "secondary",
                  size: "md",
                  onClick: function onClick() {
                    return _this4.clickBtn({
                      action: "addNewOperator",
                      payload: {
                        value: "^NQ",
                        currentConditionID: _this4.state.currentConditionID,
                        globalConditionID: _this4.state.globalConditionID
                      }
                    });
                  }
                })
              })]
            })]
          })]
        })]
      });
    }
  }]);

  return FilterCondition;
}(React.Component);

exports["default"] = FilterCondition;
FilterCondition.defaultProps = {
  table: "",
  query: "",
  allowFields: [],
  blockFields: [],
  user: "",
  opened: false,
  onSendQuery: _utils3.noop,
  filtersListQuery: ""
};
FilterCondition.propTypes = {
  table: _propTypes["default"].string.isRequired,
  query: _propTypes["default"].string,
  user: _propTypes["default"].string,
  blockFields: _propTypes["default"].array,
  allowFields: _propTypes["default"].array,
  opened: _propTypes["default"].bool,
  onSendQuery: _propTypes["default"].func,
  filtersListQuery: _propTypes["default"].string
};