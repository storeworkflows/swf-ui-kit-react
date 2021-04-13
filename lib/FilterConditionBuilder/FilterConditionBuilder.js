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

var _utils2 = require("./utils");

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

    _this.getClickedListIndex = function (_ref) {
      var index = _ref.index;

      _this.setState({
        clickedListIndex: index
      });
    };

    _this.fetchTableDataSuccessed = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref2) {
        var result, properties, fieldsDataID, blockFields, allowFileds, query, fieldsDropdownData, conditionsArray, position, copyQuery, operatorPosition, operators;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                result = _ref2.result, properties = _ref2.properties;
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
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(globalCond) {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return Promise.all(globalCond.relatedConditions.map( /*#__PURE__*/function () {
                              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parentCond) {
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
                                          var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(childCond) {
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
                                            return _ref6.apply(this, arguments);
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
                                return _ref5.apply(this, arguments);
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
                    return _ref4.apply(this, arguments);
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
        return _ref3.apply(this, arguments);
      };
    }();

    _this.runButtonClicked = function (_ref7) {
      var type = _ref7.type;

      switch (type) {
        case "run":
        case "save":
          var conditionsArray = _this.state.conditionsArray;

          var copyConditionArray = _utils2.GENERAL_UTILS.clone(conditionsArray);

          copyConditionArray = copyConditionArray.map(function (globalCond) {
            globalCond.relatedConditions.map(function (parentCond) {
              parentCond.failed = false;
              parentCond.relatedConditions.map(function (childCond) {
                childCond.failed = false;
                return childCond;
              });
              return parentCond;
            });
            return globalCond;
          });

          _this.setState({
            conditionsArray: copyConditionArray
          });

          _this.generateQuery({
            operation: type
          });

      }
    };

    _this.generateQuery = function (_ref8) {
      var operation = _ref8.operation;
      var _this$state = _this.state,
          conditionsArray = _this$state.conditionsArray,
          isSave = _this$state.isSave;
      var onSendQuery = _this.props.onSendQuery;
      var resultQuery = "";
      var error = false;
      var breadcrumbsItems = [{
        label: "All",
        conditionId: "all"
      }];
      conditionsArray.forEach(function (globalCond) {
        resultQuery += globalCond.operator;
        globalCond.relatedConditions.forEach(function (parentCond, index) {
          resultQuery += parentCond.operator;
          var breadcrumbItem = {
            label: "".concat(globalCond.operator && index === 0 ? 'or' : ''),
            conditionId: parentCond.id,
            globalConditionId: globalCond.id
          };
          var generatedCondition = (0, _utils.generateCurrentConditionQuery)(parentCond, operation, breadcrumbItem);
          var curCondition = generatedCondition.conditionQuery;
          breadcrumbItem = generatedCondition.breadcrumbItem;

          if (curCondition) {
            resultQuery += curCondition;
          } else if (operation === 'run' && !curCondition && !parentCond.conditionOptions.field && conditionsArray.length === 1 && globalCond.relatedConditions.length === 1 && !parentCond.relatedConditions.length) {
            resultQuery = '';
          } else {
            error = true;
          }

          parentCond.relatedConditions.forEach(function (childCond) {
            resultQuery += childCond.operator;
            var generatedCondition = (0, _utils.generateCurrentConditionQuery)(childCond, operation, breadcrumbItem);
            var curCondition = generatedCondition.conditionQuery;
            breadcrumbItem = generatedCondition.breadcrumbItem;

            if (curCondition) {
              resultQuery += curCondition;
            } else {
              error = true;
            }
          });
          breadcrumbItem.label = breadcrumbItem.label.trim();
          breadcrumbsItems.push(breadcrumbItem);
        });
        if (error) return null;
        onSendQuery(resultQuery);

        switch (operation) {
          case 'run':
            var isBreadcrumbFalse = !!breadcrumbsItems.find(function (item) {
              return !item.label;
            });
            !isBreadcrumbFalse ? _this.setState({
              breadcrumbsItems: breadcrumbsItems
            }) : _utils3.noop;
            break;

          case 'save':
            _this.setState({
              queryToSave: resultQuery,
              isSave: !isSave
            });

            break;
        }
      });
    };

    _this.isFilterSaved = function (_ref9) {
      var isSaved = _ref9.isSaved;

      _this.setState({
        isFilterSaved: isSaved,
        isSave: false
      });
    };

    _this.addNewOperator = function (_ref10) {
      var value = _ref10.value,
          currentConditionID = _ref10.currentConditionID,
          globalConditionID = _ref10.globalConditionID;
      var _this$state2 = _this.state,
          conditionsArray = _this$state2.conditionsArray,
          tableFields = _this$state2.tableFields;
      var newConditionsArray = conditionsArray;
      var globalConditionIndexInArr = conditionsArray.findIndex(function (cond) {
        return cond.id === globalConditionID;
      });

      var fieldsDataID = _utils2.GENERAL_UTILS.generateID();

      var _this$props = _this.props,
          blockFields = _this$props.blockFields,
          allowFields = _this$props.allowFields;

      var fieldsDropdownData = _utils2.DATA_UTILS.getDropdownFieldsItems({
        tableFields: tableFields.columns,
        index: fieldsDataID,
        blockFields: blockFields,
        allowFields: allowFields
      });

      switch (value) {
        case "^":
          newConditionsArray[globalConditionIndexInArr].relatedConditions.push({
            id: _utils2.GENERAL_UTILS.generateID(),
            condition: '',
            operator: value,
            conditionOptions: {
              operator: {
                operator: '',
                editior: ''
              },
              field: '',
              value: '',
              fieldsData: _defineProperty({}, fieldsDataID, tableFields.columns),
              fieldsDropdownData: [{
                items: fieldsDropdownData
              }]
            },
            relatedConditions: []
          });

          _this.setState({
            conditionsArray: newConditionsArray
          });

          break;

        case '^OR':
          var currentConditionIndexInArr = newConditionsArray[globalConditionIndexInArr].relatedConditions.findIndex(function (cond) {
            return cond.id === currentConditionID;
          });
          newConditionsArray[globalConditionIndexInArr].relatedConditions[currentConditionIndexInArr].relatedConditions.push({
            id: _utils2.GENERAL_UTILS.generateID(),
            condition: '',
            operator: value,
            conditionOptions: {
              operator: {
                operator: '',
                editior: ''
              },
              field: '',
              value: '',
              fieldsData: _defineProperty({}, fieldsDataID, tableFields.columns),
              fieldsDropdownData: [{
                items: fieldsDropdownData
              }]
            }
          });

          _this.setState({
            conditionsArray: newConditionsArray
          });

          break;

        case '^NQ':
          newConditionsArray.push({
            id: _utils2.GENERAL_UTILS.generateID(),
            condition: '',
            operator: value,
            relatedConditions: [{
              id: _utils2.GENERAL_UTILS.generateID() + 1,
              condition: '',
              operator: '',
              conditionOptions: {
                operator: {
                  operator: '',
                  editior: ''
                },
                field: '',
                value: '',
                fieldsData: _defineProperty({}, fieldsDataID, tableFields.columns),
                fieldsDropdownData: [{
                  items: fieldsDropdownData
                }]
              },
              relatedConditions: []
            }]
          });

          _this.setState({
            conditionsArray: newConditionsArray
          });

      }
    };

    _this.clearAll = function (_ref11) {
      var value = _ref11.value;

      if (value === "delete-filter") {
        var tableFields = _this.state.tableFields;

        var fieldsDataID = _utils2.GENERAL_UTILS.generateID();

        var _this$props2 = _this.props,
            blockFields = _this$props2.blockFields,
            allowFileds = _this$props2.allowFileds;

        var fieldsDropdownData = _utils2.DATA_UTILS.getDropdownFieldsItems({
          tableFields: tableFields.columns,
          index: fieldsDataID,
          blockFields: blockFields,
          allowFileds: allowFileds
        });

        _this.setState({
          conditionsArray: [{
            id: _utils2.GENERAL_UTILS.generateID(),
            condition: '',
            operator: '',
            relatedConditions: [{
              id: _utils2.GENERAL_UTILS.generateID() + 1,
              condition: '',
              operator: '',
              conditionOptions: {
                operator: {
                  operator: '',
                  editior: ''
                },
                field: '',
                value: '',
                fieldsData: _defineProperty({}, fieldsDataID, tableFields.columns),
                fieldsDropdownData: [{
                  items: fieldsDropdownData
                }]
              },
              relatedConditions: []
            }]
          }],
          isSave: false,
          breadcrumbsItems: [{
            label: 'All',
            conditionId: 'all'
          }]
        });
      }
    };

    _this.setConditionOptionsOperator = function (_ref12) {
      var value = _ref12.value,
          conditionOptions = _ref12.conditionOptions;
      var _conditionOptions = conditionOptions,
          activeField = _conditionOptions.activeField,
          activeFieldsData = _conditionOptions.activeFieldsData;
      var _this$state3 = _this.state,
          currentConditionID = _this$state3.currentConditionID,
          globalConditionID = _this$state3.globalConditionID;
      var valueAdditionalData = [];
      valueAdditionalData = _this.getValueAdditionalData({
        state: _this.state,
        tableFields: activeFieldsData,
        editor: value.editor,
        field: activeField,
        currentID: currentConditionID,
        globalID: globalConditionID
      });
      conditionOptions = _objectSpread(_objectSpread({}, conditionOptions), {}, {
        operator: value,
        value: "",
        valueAdditionalData: valueAdditionalData
      });
      return conditionOptions;
    };

    _this.setConditionOptionsValue = function (_ref13) {
      var value = _ref13.value,
          conditionOptions = _ref13.conditionOptions,
          conditionOption = _ref13.conditionOption;
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
          if (value.index == 1) {
            conditionOptions.valueAdditionalData = _utils2.DATA_UTILS.getTrendData(value.value);
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
    };

    _this.setConditionOptions = function (_ref14) {
      var value = _ref14.value,
          conditionOption = _ref14.conditionOption,
          currentConditionID = _ref14.currentConditionID,
          globalConditionID = _ref14.globalConditionID;
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
            value: value
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

    _this.setConditionOptionsValueAdditional = function (_ref15) {
      var value = _ref15.value,
          conditionOptions = _ref15.conditionOptions;
      conditionOptions.valueAdditionalData = value;
      return conditionOptions;
    };

    _this.fetchReferenceDataSuccessed = function (result) {
      var _this$state4 = _this.state,
          referenceFieldData = _this$state4.referenceFieldData,
          conditionsArray = _this$state4.conditionsArray;
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

    _this.setConditionOptionsFieldData = function (_ref16) {
      var conditionOptions = _ref16.conditionOptions,
          value = _ref16.value;

      var fieldsDataID = _utils2.GENERAL_UTILS.generateID();

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
      return conditionOptions;
    };

    _this.getConditionsIDs = function (_ref17) {
      var currentConditionID = _ref17.currentConditionID,
          globalConditionID = _ref17.globalConditionID;

      _this.setState({
        currentConditionID: currentConditionID,
        globalConditionID: globalConditionID
      });
    };

    _this.setConditionOptionsField = function (_ref18) {
      var conditionOptions = _ref18.conditionOptions,
          value = _ref18.value;
      var _conditionOptions2 = conditionOptions,
          fieldsData = _conditionOptions2.fieldsData;
      var currentFieldsData = fieldsData[value.items[value.items.length - 1].index];
      var currentValue = value.items[value.items.length - 1].id;
      var currentValueIndex = conditionOptions.fieldsDropdownData.findIndex(function (data) {
        return data.items[0].index === value.items[value.items.length - 1].index;
      });
      var deletedFieldsData = conditionOptions.fieldsDropdownData.splice(currentValueIndex + 1);
      deletedFieldsData = deletedFieldsData.map(function (data) {
        return data.items[0].index;
      });
      deletedFieldsData.forEach(function (key) {
        return delete conditionOptions.fieldsData[key];
      });
      var operatorsArray = currentFieldsData[currentValue].operators.map(function (operation) {
        return {
          id: operation.operator,
          label: operation.label,
          dropdown: 'operation'
        };
      });
      return conditionOptions = _objectSpread(_objectSpread({}, conditionOptions), {}, {
        field: value.value,
        fieldItems: value,
        operator: {
          operator: '',
          editor: ''
        },
        value: '',
        operatorsArray: operatorsArray,
        activeFieldsData: _objectSpread({}, currentFieldsData),
        activeField: currentValue
      });
    };

    _this.onItemClicked = function (item) {
      var clickedItem = item.clickedItem,
          isReferenceClicked = item.isReferenceClicked;
      var _this$state5 = _this.state,
          labelArr = _this$state5.labelArr,
          currentConditionID = _this$state5.currentConditionID,
          globalConditionID = _this$state5.globalConditionID,
          conditionsArray = _this$state5.conditionsArray;
      var queryParams = {
        sysparm_operators: true,
        sysparm_get_extended_tables: true,
        sysparm_keywords: true
      };
      var items = {};
      var itemsArr = [];
      itemsArr.push(clickedItem);
      items = {
        conditionId: currentConditionID,
        globalConditionID: globalConditionID,
        listIndex: clickedItem.listIndex,
        selectedItems: {
          items: itemsArr,
          label: clickedItem.label,
          value: clickedItem.id
        }
      };
      clickedItem.dropdownClicked ? _utils2.REQUEST_UTILS.fetchTableData({
        table: clickedItem.table,
        queryParams: queryParams
      }).then(function (res) {
        items = _objectSpread(_objectSpread({}, items), {}, {
          result: res.columns
        });

        var newConditionsArray = _utils2.CONDITION_OPTIONS_UTILS.setConditionOptions({
          value: items,
          globalConditionID: globalConditionID,
          currentConditionID: currentConditionID,
          conditionOption: "fieldsData",
          conditionsArray: conditionsArray
        });

        _this.setState({
          conditionsArray: newConditionsArray
        });
      }) : _utils3.noop;

      var condArrClone = _utils2.GENERAL_UTILS.clone(conditionsArray);

      var globalConditionIndexInArr = condArrClone.findIndex(function (cond) {
        return cond.id === globalConditionID;
      });

      if (!clickedItem.dropdownClicked) {
        var newConditionsArray = _utils2.CONDITION_OPTIONS_UTILS.setConditionOptions({
          value: items.selectedItems,
          globalConditionID: globalConditionID,
          currentConditionID: currentConditionID,
          conditionOption: "field",
          conditionsArray: conditionsArray
        });

        _this.setState({
          conditionsArray: newConditionsArray
        });
      }
    };

    _this.breadcrumbItemClicked = function (_ref19) {
      var data = _ref19.data,
          operation = _ref19.operation;
      var breadcrumbsItems = _this.state.breadcrumbsItems;
      var itemIndex = breadcrumbsItems.findIndex(function (breadcrumb) {
        return breadcrumb.conditionId === data.conditionId;
      });

      switch (operation) {
        case "remove-next":
          breadcrumbsItems.splice(itemIndex, 1);

          _this.setState({
            breadcrumbsItems: breadcrumbsItems
          });

          _this.deleteCondition({
            currentConditionID: data.conditionId,
            globalConditionID: data.globalConditionId
          });

          break;

        case "remove-subsequent":
          var deletedItems = itemIndex === 0 ? breadcrumbsItems.splice(1) : breadcrumbsItems.splice(itemIndex + 1);

          _this.setState({
            breadcrumbsItems: breadcrumbsItems
          });

          deletedItems.forEach(function (item) {
            return _this.deleteCondition({
              currentConditionID: item.conditionId,
              globalConditionID: item.globalConditionId
            });
          });
          break;
      }
    };

    _this.setQuery = function (_ref20) {
      var query = _ref20.query;

      _this.setState({
        query: query
      });
    };

    _this.deleteCondition = function (_ref21) {
      var currentConditionID = _ref21.currentConditionID,
          globalConditionID = _ref21.globalConditionID;
      var conditionsArray = _this.state.conditionsArray;
      var newConditionsArray = conditionsArray;
      var globalConditionIndexInArr = newConditionsArray.findIndex(function (cond) {
        return cond.id === globalConditionID;
      });
      var currentConditionIndexInArr = newConditionsArray[globalConditionIndexInArr].relatedConditions.findIndex(function (cond) {
        return cond.id === currentConditionID;
      });
      var path = [];
      var indexToDelete;

      if (currentConditionIndexInArr > -1) {
        path = newConditionsArray[globalConditionIndexInArr].relatedConditions;
        indexToDelete = currentConditionIndexInArr;

        if (newConditionsArray[globalConditionIndexInArr].relatedConditions.length === 1) {
          path = newConditionsArray;
          indexToDelete = globalConditionIndexInArr;
        } else if (currentConditionIndexInArr === 0) {
          path[1].operator = "";
          newConditionsArray[globalConditionIndexInArr].relatedConditions[1].operator = path[1].operator;

          _this.setState({
            conditionsArray: newConditionsArray
          });
        }
      } else {
        newConditionsArray[globalConditionIndexInArr].relatedConditions.forEach(function (parentCond, pIndex) {
          parentCond.relatedConditions.forEach(function (childCond, chIndex) {
            if (childCond.id === currentConditionID) {
              path = newConditionsArray[globalConditionIndexInArr].relatedConditions[pIndex].relatedConditions;
              indexToDelete = chIndex;
            }
          });
        });
      }

      if (newConditionsArray.length === 1 && path === newConditionsArray) {
        var tableFields = _this.state.tableFields;

        var fieldsDataID = _utils2.GENERAL_UTILS.generateID();

        var fieldsDropdownData = _utils2.DATA_UTILS.getDropdownFieldsItems({
          tableFields: tableFields.columns,
          index: fieldsDataID
        });

        _this.setState({
          conditionsArray: [{
            id: _utils2.GENERAL_UTILS.generateID(),
            condition: '',
            operator: '',
            relatedConditions: [{
              id: _utils2.GENERAL_UTILS.generateID() + 1,
              condition: '',
              operator: '',
              conditionOptions: {
                operator: {
                  operator: '',
                  editior: ''
                },
                field: '',
                value: '',
                fieldsData: _defineProperty({}, fieldsDataID, tableFields.columns),
                fieldsDropdownData: [{
                  items: fieldsDropdownData
                }]
              },
              relatedConditions: []
            }]
          }]
        });
      } else {
        path.splice(indexToDelete, 1);
        newConditionsArray.relatedConditions = path;

        _this.setState({
          conditionsArray: newConditionsArray
        });
      }
    };

    _this.saveToogle = function () {
      var isSave = _this.state.isSave;

      _this.setState({
        isSave: !isSave
      });

      _this.runButtonClicked({
        type: "save"
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
      filterList: []
    };
    _this.getValueAdditionalData = _utils.getValueAdditionalData.bind(_assertThisInitialized(_this));
    _this.parseConditionValue = _utils.parseConditionValue.bind(_assertThisInitialized(_this));
    _this.parseConditionValueWithRef = _utils.parseConditionValueWithRef.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FilterCondition, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this2 = this;

        var _this$props3, table, query, user, queryParams;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this$props3 = this.props, table = _this$props3.table, query = _this$props3.query, user = _this$props3.user;
                queryParams = {
                  sysparm_operators: true,
                  sysparm_get_extended_tables: true,
                  sysparm_keywords: true
                };
                _context6.next = 4;
                return _utils2.REQUEST_UTILS.fetchTableData({
                  table: table,
                  queryParams: queryParams
                }).then( /*#__PURE__*/function () {
                  var _ref22 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(result) {
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
                    return _ref22.apply(this, arguments);
                  };
                }());

              case 4:
                if (!!query) this.generateQuery({
                  operation: "run"
                });

                _utils2.REQUEST_UTILS.fetchFilterTemplates({
                  table: table,
                  user: user
                }).then(function (res) {
                  return _this2.setState({
                    filterList: res
                  });
                });

              case 6:
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

        var table, queryParams, _this$props4, _table, user;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(prevState.query !== this.state.query)) {
                  _context7.next = 5;
                  break;
                }

                table = this.props.table;
                queryParams = {
                  sysparm_operators: true,
                  sysparm_get_extended_tables: true,
                  sysparm_keywords: true
                };
                _context7.next = 5;
                return _utils2.REQUEST_UTILS.fetchTableData({
                  table: table,
                  queryParams: queryParams
                }).then(function (result) {
                  _this3.fetchTableDataSuccessed({
                    result: result,
                    properties: _this3.props
                  });
                });

              case 5:
                if (this.state.isFilterSaved) {
                  _this$props4 = this.props, _table = _this$props4.table, user = _this$props4.user;

                  _utils2.REQUEST_UTILS.fetchFilterTemplates({
                    table: _table,
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

              case 6:
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

      var _this$state6 = this.state,
          isFilterOpened = _this$state6.isFilterOpened,
          conditionsArray = _this$state6.conditionsArray,
          tableFields = _this$state6.tableFields,
          referenceTableFieldsData = _this$state6.referenceTableFieldsData,
          labelArr = _this$state6.labelArr,
          operatorArr = _this$state6.operatorArr,
          breadcrumbsItems = _this$state6.breadcrumbsItems,
          isSave = _this$state6.isSave,
          queryToSave = _this$state6.queryToSave,
          filterList = _this$state6.filterList;
      var _this$props5 = this.props,
          table = _this$props5.table,
          user = _this$props5.user;
      var columns = tableFields.columns;
      var columnsArr = Object.values(columns).sort(function (a, b) {
        return a.label < b.label ? -1 : 0;
      });
      columnsArr.length && (columnsArr = columnsArr.map(function (column) {
        return _objectSpread(_objectSpread({}, column), {}, {
          id: column.name
        });
      }));
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "collapsed-filter-header",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
            icon: isFilterOpened ? "funnel-fill" : "funnel",
            size: "md",
            tooltipContent: "Filter",
            variant: "tertiary",
            onClick: function onClick() {
              return _this4.setState({
                isFilterOpened: !isFilterOpened
              });
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "breadcrumbs",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterBreadcrumbs["default"], {
              items: breadcrumbsItems,
              breadcrumbItemClicked: this.breadcrumbItemClicked
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _classnames["default"])({
            "swf-filter-container": true,
            "--is-collapsed": isFilterOpened
          }),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "filter-header",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "actions",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "buttons",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "btn",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
                    label: "Apply",
                    variant: "primary",
                    size: "md",
                    onClick: function onClick() {
                      return _this4.runButtonClicked({
                        type: "run"
                      });
                    },
                    customStyle: {
                      "border-color": "rgb(15,67,55)",
                      "hover-border-color": "rgb(15,67,55)",
                      "active-border-color": "none"
                    }
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
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
                      return _this4.saveToogle();
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
                      return _this4.clearAll({
                        value: "delete-filter"
                      });
                    }
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "templates",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterTemplates["default"], {
                  setQuery: this.setQuery,
                  filterList: filterList,
                  table: table
                })
              })]
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
                        tableFields: tableFields,
                        conditionObj: condition,
                        conditionID: condition.id,
                        globalConditionID: globalCondition.id,
                        globalCondition: globalCondition,
                        operatorType: condition.operator,
                        addNewOperator: _this4.addNewOperator,
                        deleteCondition: _this4.deleteCondition,
                        onItemClicked: _this4.onItemClicked,
                        referenceTableFieldsData: referenceTableFieldsData,
                        labelArr: labelArr,
                        operatorArr: operatorArr,
                        getConditionsIDs: _this4.getConditionsIDs,
                        getClickedListIndex: _this4.getClickedListIndex,
                        onOperatorClicked: _this4.onOperatorClicked,
                        setConditionOptions: _this4.setConditionOptions,
                        fetchReferenceDataSuccessed: _this4.fetchReferenceDataSuccessed
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
                    return _this4.addNewOperator({
                      value: "^NQ"
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
  opened: true,
  onSendQuery: _utils3.noop
};
FilterCondition.propTypes = {
  table: _propTypes["default"].string.isRequired,
  query: _propTypes["default"].string,
  user: _propTypes["default"].string,
  blockFields: _propTypes["default"].array,
  allowFields: _propTypes["default"].array,
  opened: _propTypes["default"].bool,
  onSendQuery: _propTypes["default"].func
};