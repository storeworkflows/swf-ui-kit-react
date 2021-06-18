"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _FilterConditionItem = _interopRequireDefault(require("./Components/FilterConditionItem/FilterConditionItem"));

var _FilterBreadcrumbs = _interopRequireDefault(require("./Components/FilterBreadcrumbs/FilterBreadcrumbs"));

var _FilterTemplates = _interopRequireDefault(require("./Components/FilterTemplates/FilterTemplates"));

var _FilterSaver = _interopRequireDefault(require("./Components/FilterSaver/FilterSaver"));

var _effects = require("./effects");

var _Badge = _interopRequireDefault(require("../Badge/Badge"));

var _index = require("../index");

var _utils2 = require("../utils");

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
                fieldsDataID = _utils.GENERAL_UTILS.generateID();
                blockFields = properties.blockFields, allowFileds = properties.allowFileds;
                query = _this.state.query;
                fieldsDropdownData = _utils.DATA_UTILS.getDropdownFieldsItems({
                  tableFields: result.columns,
                  index: fieldsDataID,
                  blockFields: blockFields,
                  allowFileds: allowFileds
                });
                conditionsArray = [{
                  id: _utils.GENERAL_UTILS.generateID(),
                  condition: "",
                  operator: "",
                  relatedConditions: [{
                    id: _utils.GENERAL_UTILS.generateID() + 1,
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
                  id: _utils.GENERAL_UTILS.generateID() + operatorPosition,
                  condition: '',
                  operator: '^NQ',
                  relatedConditions: [{
                    id: _utils.GENERAL_UTILS.generateID() + operatorPosition + 1,
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
                        id: _utils.GENERAL_UTILS.generateID() + _operatorPosition,
                        condition: '',
                        operator: '^OR'
                      });
                      position = _operatorPosition + 3;
                      lastOperator = '^OR';
                    } else {
                      globalCondition.relatedConditions.push({
                        id: _utils.GENERAL_UTILS.generateID() + _operatorPosition,
                        condition: '',
                        operator: '^',
                        relatedConditions: []
                      });
                      position = _operatorPosition + 1;
                      lastOperator = '^';
                    }
                  }
                });
                operators = _utils.DATA_UTILS.getOperators({
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

                                        if (!(condition.slice(0, condition.indexOf(_utils.GENERAL_UTILS.findOperator(condition, operators))).split(".").length > 1)) {
                                          _context2.next = 8;
                                          break;
                                        }

                                        _context2.next = 5;
                                        return _utils.QUERY_UTILS.parseConditionValueWithRef(params);

                                      case 5:
                                        _context2.t0 = _context2.sent;
                                        _context2.next = 9;
                                        break;

                                      case 8:
                                        _context2.t0 = _utils.QUERY_UTILS.parseConditionValue(params);

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

                                                    if (!(childCond.condition.slice(0, childCond.condition.indexOf(_utils.GENERAL_UTILS.findOperator(childCond.condition, operators))).split(".").length > 1)) {
                                                      _context.next = 7;
                                                      break;
                                                    }

                                                    _context.next = 4;
                                                    return _utils.QUERY_UTILS.parseConditionValueWithRef(params);

                                                  case 4:
                                                    _context.t0 = _context.sent;
                                                    _context.next = 8;
                                                    break;

                                                  case 7:
                                                    _context.t0 = _utils.QUERY_UTILS.parseConditionValue(params);

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

    _this.getConditionsIDs = function (_ref7) {
      var currentConditionID = _ref7.currentConditionID,
          globalConditionID = _ref7.globalConditionID;

      _this.setState({
        currentConditionID: currentConditionID,
        globalConditionID: globalConditionID
      });
    };

    _this.setQuery = function (_ref8) {
      var query = _ref8.query;
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
      defaultGroup: {
        displayValue: "",
        sys_id: ""
      },
      query: _this.props.query,
      operatorArr: [],
      clickedListIndex: null,
      filterList: [],
      active: false,
      count: 0,
      advanced: false
    }; // this.parseConditionValue = QUERY_UTILS.parseConditionValue.bind(this);
    // this.parseConditionValueWithRef = QUERY_UTILS.parseConditionValueWithRef.bind(this);

    _this.clickBtn = _effects.BUTTONS_EFFECTS.clickBtn.bind(_assertThisInitialized(_this));
    _this.setConditionOptions = _utils.CONDITION_OPTIONS_UTILS.setConditionOptions.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FilterCondition, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _this2 = this;

        var _this$props, table, user, onSendQuery, filtersListQuery, _this$state, query, conditionsArray, isSave, queryParams, groupId;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this$props = this.props, table = _this$props.table, user = _this$props.user, onSendQuery = _this$props.onSendQuery, filtersListQuery = _this$props.filtersListQuery;
                _this$state = this.state, query = _this$state.query, conditionsArray = _this$state.conditionsArray, isSave = _this$state.isSave;
                queryParams = {
                  sysparm_operators: true,
                  sysparm_get_extended_tables: true,
                  sysparm_keywords: true
                };
                groupId = filtersListQuery.replace(/.*=/, "");
                _context5.next = 6;
                return _utils.REQUEST_UTILS.fetchGroup({
                  sys_id: groupId
                }).then(function (res) {
                  _this2.setState({
                    defaultGroup: {
                      displayValue: res[0].name,
                      sys_id: groupId
                    }
                  });
                });

              case 6:
                _utils.REQUEST_UTILS.fetchTableData({
                  table: table,
                  queryParams: queryParams
                }).then(function (result) {
                  _this2.fetchTableDataSuccessed({
                    result: result,
                    properties: _this2.props
                  });
                });

                if (!!query) _utils.QUERY_UTILS.generateQuery({
                  payload: {
                    conditionsArray: conditionsArray,
                    onSendQuery: onSendQuery,
                    isSave: isSave,
                    operation: "run"
                  }
                });

                _utils.REQUEST_UTILS.fetchFilterTemplates({
                  table: table,
                  user: user,
                  filter: filtersListQuery
                }).then(function (res) {
                  return _this2.setState({
                    filterList: res
                  });
                });

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(prevProps, prevState) {
        var _this3 = this;

        var _this$props2, query, table, filtersListQuery, groupId, _table, queryParams, _this$props3, _table2, user;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(prevProps.table !== this.props.table)) {
                  _context6.next = 8;
                  break;
                }

                _this$props2 = this.props, query = _this$props2.query, table = _this$props2.table, filtersListQuery = _this$props2.filtersListQuery;
                groupId = filtersListQuery.replace(/.*=/, "");
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

                _utils.REQUEST_UTILS.fetchFilterTemplates({
                  table: table,
                  filter: filtersListQuery
                }).then(function (res) {
                  return _this3.setState({
                    filterList: res
                  });
                });

                _context6.next = 8;
                return _utils.REQUEST_UTILS.fetchGroup({
                  sys_id: groupId
                }).then(function (res) {
                  _this3.setState({
                    defaultGroup: {
                      displayValue: res[0].name,
                      sys_id: groupId
                    }
                  });
                });

              case 8:
                if (this.props.query !== prevProps.query) {
                  this.setQuery({
                    query: this.props.query
                  });
                }

                if (!(prevState.query !== this.state.query || prevProps.table !== this.props.table)) {
                  _context6.next = 14;
                  break;
                }

                _table = this.props.table;
                queryParams = {
                  sysparm_operators: true,
                  sysparm_get_extended_tables: true,
                  sysparm_keywords: true
                };
                _context6.next = 14;
                return _utils.REQUEST_UTILS.fetchTableData({
                  table: _table,
                  queryParams: queryParams
                }).then(function (result) {
                  _this3.fetchTableDataSuccessed({
                    result: result,
                    properties: _this3.props
                  });
                });

              case 14:
                if (prevState.advanced !== this.state.advanced) {
                  this.setState({
                    isFilterOpened: this.state.advanced
                  });
                }

                if (this.state.isFilterSaved) {
                  _this$props3 = this.props, _table2 = _this$props3.table, user = _this$props3.user;

                  _utils.REQUEST_UTILS.fetchFilterTemplates({
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

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function componentDidUpdate(_x5, _x6) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state2 = this.state,
          active = _this$state2.active,
          advanced = _this$state2.advanced,
          count = _this$state2.count,
          isFilterOpened = _this$state2.isFilterOpened,
          conditionsArray = _this$state2.conditionsArray,
          breadcrumbsItems = _this$state2.breadcrumbsItems,
          isSave = _this$state2.isSave,
          queryToSave = _this$state2.queryToSave,
          filterList = _this$state2.filterList,
          defaultGroup = _this$state2.defaultGroup;
      var _this$props4 = this.props,
          table = _this$props4.table,
          user = _this$props4.user; // console.log("%c%s", "color: green", "REACT Filter Conditions Array", this.state.conditionsArray)

      var isActive = [advanced, active].some(Boolean);
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
            disabled: !isActive,
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
          }), isActive && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge["default"], {
            text: "".concat(count),
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
              user: user,
              defaultGroup: defaultGroup
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
                        selectedItem: condition.conditionOptions.fieldItems,
                        generalTable: table,
                        conditionsArray: conditionsArray
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
  onSendQuery: _utils2.noop,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0ZpbHRlckNvbmRpdGlvbkJ1aWxkZXIuanMiXSwibmFtZXMiOlsiRmlsdGVyQ29uZGl0aW9uIiwicHJvcHMiLCJmZXRjaFRhYmxlRGF0YVN1Y2Nlc3NlZCIsInJlc3VsdCIsInByb3BlcnRpZXMiLCJmaWVsZHNEYXRhSUQiLCJHRU5FUkFMX1VUSUxTIiwiZ2VuZXJhdGVJRCIsImJsb2NrRmllbGRzIiwiYWxsb3dGaWxlZHMiLCJxdWVyeSIsInN0YXRlIiwiZmllbGRzRHJvcGRvd25EYXRhIiwiREFUQV9VVElMUyIsImdldERyb3Bkb3duRmllbGRzSXRlbXMiLCJ0YWJsZUZpZWxkcyIsImNvbHVtbnMiLCJpbmRleCIsImNvbmRpdGlvbnNBcnJheSIsImlkIiwiY29uZGl0aW9uIiwib3BlcmF0b3IiLCJyZWxhdGVkQ29uZGl0aW9ucyIsImNvbmRpdGlvbk9wdGlvbnMiLCJlZGl0aW9yIiwiZmllbGQiLCJ2YWx1ZSIsImZpZWxkc0RhdGEiLCJpdGVtcyIsInBvc2l0aW9uIiwiY29weVF1ZXJ5IiwiaW5kZXhPZiIsInNsaWNlIiwib3BlcmF0b3JQb3NpdGlvbiIsImxlbmd0aCIsInB1c2giLCJtYXAiLCJnbG9iYWxDb25kaXRpb24iLCJsYXN0T3BlcmF0b3IiLCJvcGVyYXRvcnMiLCJnZXRPcGVyYXRvcnMiLCJQcm9taXNlIiwiYWxsIiwiZ2xvYmFsQ29uZCIsInBhcmVudENvbmQiLCJyZXBsYWNlIiwicGFyYW1zIiwiZ2xvYmFsSUQiLCJjdXJyZW50SUQiLCJmaW5kT3BlcmF0b3IiLCJzcGxpdCIsIlFVRVJZX1VUSUxTIiwicGFyc2VDb25kaXRpb25WYWx1ZVdpdGhSZWYiLCJwYXJzZUNvbmRpdGlvblZhbHVlIiwiY2hpbGRDb25kIiwic2V0U3RhdGUiLCJpc0ZpbHRlclNhdmVkIiwiaXNTYXZlZCIsImlzU2F2ZSIsImdldENvbmRpdGlvbnNJRHMiLCJjdXJyZW50Q29uZGl0aW9uSUQiLCJnbG9iYWxDb25kaXRpb25JRCIsInNldFF1ZXJ5IiwiY291bnQiLCJhY3RpdmUiLCJCb29sZWFuIiwic2V0QWR2YW5jZWQiLCJhZHZhbmNlZCIsInJlZmVyZW5jZUZpZWxkRGF0YSIsInJlZmVyZW5jZVRhYmxlRmllbGRzRGF0YSIsImlzRmlsdGVyT3BlbmVkIiwib3BlbmVkIiwiYnJlYWRjcnVtYnNJdGVtcyIsImxhYmVsIiwiY29uZGl0aW9uSWQiLCJxdWVyeVRvU2F2ZSIsImxhYmVsQXJyIiwic2VsZWN0ZWRJdGVtIiwiYWxlcnREYXRhIiwicG9zaXRpdmUiLCJkZWZhdWx0R3JvdXAiLCJkaXNwbGF5VmFsdWUiLCJzeXNfaWQiLCJvcGVyYXRvckFyciIsImNsaWNrZWRMaXN0SW5kZXgiLCJmaWx0ZXJMaXN0IiwiY2xpY2tCdG4iLCJCVVRUT05TX0VGRkVDVFMiLCJiaW5kIiwic2V0Q29uZGl0aW9uT3B0aW9ucyIsIkNPTkRJVElPTl9PUFRJT05TX1VUSUxTIiwidGFibGUiLCJ1c2VyIiwib25TZW5kUXVlcnkiLCJmaWx0ZXJzTGlzdFF1ZXJ5IiwicXVlcnlQYXJhbXMiLCJzeXNwYXJtX29wZXJhdG9ycyIsInN5c3Bhcm1fZ2V0X2V4dGVuZGVkX3RhYmxlcyIsInN5c3Bhcm1fa2V5d29yZHMiLCJncm91cElkIiwiUkVRVUVTVF9VVElMUyIsImZldGNoR3JvdXAiLCJ0aGVuIiwicmVzIiwibmFtZSIsImZldGNoVGFibGVEYXRhIiwiZ2VuZXJhdGVRdWVyeSIsInBheWxvYWQiLCJvcGVyYXRpb24iLCJmZXRjaEZpbHRlclRlbXBsYXRlcyIsImZpbHRlciIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImlzQWN0aXZlIiwic29tZSIsImFjdGlvbiIsInR5cGUiLCJmb3JFYWNoIiwiY29uZCIsImZhaWxlZCIsImZpZWxkSXRlbXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImFsbG93RmllbGRzIiwibm9vcCIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsZTs7Ozs7QUFDakIsMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxVQXlDbkJDLHVCQXpDbUI7QUFBQSwwRUF5Q087QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVFDLGdCQUFBQSxNQUFSLFFBQVFBLE1BQVIsRUFBZ0JDLFVBQWhCLFFBQWdCQSxVQUFoQjtBQUNsQkMsZ0JBQUFBLFlBRGtCLEdBQ0hDLHFCQUFjQyxVQUFkLEVBREc7QUFFZkMsZ0JBQUFBLFdBRmUsR0FFYUosVUFGYixDQUVmSSxXQUZlLEVBRUZDLFdBRkUsR0FFYUwsVUFGYixDQUVGSyxXQUZFO0FBR2ZDLGdCQUFBQSxLQUhlLEdBR04sTUFBS0MsS0FIQyxDQUdmRCxLQUhlO0FBSWxCRSxnQkFBQUEsa0JBSmtCLEdBSUdDLGtCQUFXQyxzQkFBWCxDQUFrQztBQUN2REMsa0JBQUFBLFdBQVcsRUFBRVosTUFBTSxDQUFDYSxPQURtQztBQUV2REMsa0JBQUFBLEtBQUssRUFBRVosWUFGZ0Q7QUFHdkRHLGtCQUFBQSxXQUFXLEVBQVhBLFdBSHVEO0FBSXZEQyxrQkFBQUEsV0FBVyxFQUFYQTtBQUp1RCxpQkFBbEMsQ0FKSDtBQVVsQlMsZ0JBQUFBLGVBVmtCLEdBVUEsQ0FDbEI7QUFDSUMsa0JBQUFBLEVBQUUsRUFBRWIscUJBQWNDLFVBQWQsRUFEUjtBQUVJYSxrQkFBQUEsU0FBUyxFQUFFLEVBRmY7QUFHSUMsa0JBQUFBLFFBQVEsRUFBRSxFQUhkO0FBSUlDLGtCQUFBQSxpQkFBaUIsRUFBRSxDQUNmO0FBQ0lILG9CQUFBQSxFQUFFLEVBQUViLHFCQUFjQyxVQUFkLEtBQTZCLENBRHJDO0FBRUlhLG9CQUFBQSxTQUFTLEVBQUUsRUFGZjtBQUdJQyxvQkFBQUEsUUFBUSxFQUFFLEVBSGQ7QUFJSUUsb0JBQUFBLGdCQUFnQixFQUFFO0FBQ2RGLHNCQUFBQSxRQUFRLEVBQUU7QUFDTkEsd0JBQUFBLFFBQVEsRUFBRSxFQURKO0FBRU5HLHdCQUFBQSxPQUFPLEVBQUU7QUFGSCx1QkFESTtBQUtkQyxzQkFBQUEsS0FBSyxFQUFFLEVBTE87QUFNZEMsc0JBQUFBLEtBQUssRUFBRSxFQU5PO0FBT2RDLHNCQUFBQSxVQUFVLHNCQUNMdEIsWUFESyxFQUNVRixNQUFNLENBQUNhLE9BRGpCLENBUEk7QUFVZEosc0JBQUFBLGtCQUFrQixFQUFFLENBQ2hCO0FBQ0lnQix3QkFBQUEsS0FBSyxFQUFFaEI7QUFEWCx1QkFEZ0I7QUFWTixxQkFKdEI7QUFvQklVLG9CQUFBQSxpQkFBaUIsRUFBRTtBQXBCdkIsbUJBRGU7QUFKdkIsaUJBRGtCLENBVkE7O0FBQUEscUJBeUNsQlosS0F6Q2tCO0FBQUE7QUFBQTtBQUFBOztBQTBDZG1CLGdCQUFBQSxRQTFDYyxHQTBDSCxDQTFDRztBQTJDZEMsZ0JBQUFBLFNBM0NjLEdBMkNGcEIsS0EzQ0U7O0FBNENsQixvQkFBSW9CLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQixLQUFsQixJQUEyQixDQUFDLENBQWhDLEVBQW1DO0FBQy9CRCxrQkFBQUEsU0FBUyxHQUFHQSxTQUFTLENBQUNFLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUJGLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQixLQUFsQixDQUFuQixDQUFaO0FBQ0g7O0FBOUNpQjtBQUFBLHFCQWdEWCxJQWhEVztBQUFBO0FBQUE7QUFBQTs7QUFpRFZFLGdCQUFBQSxnQkFqRFUsR0FpRFNILFNBQVMsQ0FBQ0MsT0FBVixDQUFrQixLQUFsQixFQUF5QkYsUUFBekIsQ0FqRFQ7O0FBQUEsc0JBa0RWSSxnQkFBZ0IsS0FBSyxDQUFDLENBbERaO0FBQUE7QUFBQTtBQUFBOztBQW1EVmYsZ0JBQUFBLGVBQWUsQ0FBQ0EsZUFBZSxDQUFDZ0IsTUFBaEIsR0FBeUIsQ0FBMUIsQ0FBZixDQUE0Q2QsU0FBNUMsR0FBd0RVLFNBQVMsQ0FBQ0UsS0FBVixDQUFnQkgsUUFBaEIsQ0FBeEQ7QUFuRFU7O0FBQUE7QUFzRGRYLGdCQUFBQSxlQUFlLENBQUNBLGVBQWUsQ0FBQ2dCLE1BQWhCLEdBQXlCLENBQTFCLENBQWYsQ0FBNENkLFNBQTVDLEdBQXdEVSxTQUFTLENBQUNFLEtBQVYsQ0FBZ0JILFFBQWhCLEVBQTBCSSxnQkFBMUIsQ0FBeEQ7QUFDQWYsZ0JBQUFBLGVBQWUsQ0FBQ2lCLElBQWhCLENBQXFCO0FBQ2pCaEIsa0JBQUFBLEVBQUUsRUFBRWIscUJBQWNDLFVBQWQsS0FBNkIwQixnQkFEaEI7QUFFakJiLGtCQUFBQSxTQUFTLEVBQUUsRUFGTTtBQUdqQkMsa0JBQUFBLFFBQVEsRUFBRSxLQUhPO0FBSWpCQyxrQkFBQUEsaUJBQWlCLEVBQUUsQ0FBQztBQUNoQkgsb0JBQUFBLEVBQUUsRUFBRWIscUJBQWNDLFVBQWQsS0FBNkIwQixnQkFBN0IsR0FBZ0QsQ0FEcEM7QUFFaEJiLG9CQUFBQSxTQUFTLEVBQUUsRUFGSztBQUdoQkMsb0JBQUFBLFFBQVEsRUFBRSxFQUhNO0FBSWhCRSxvQkFBQUEsZ0JBQWdCLEVBQUU7QUFDZEYsc0JBQUFBLFFBQVEsRUFBRTtBQUFDQSx3QkFBQUEsUUFBUSxFQUFFLEVBQVg7QUFBZUcsd0JBQUFBLE9BQU8sRUFBRTtBQUF4Qix1QkFESTtBQUVkQyxzQkFBQUEsS0FBSyxFQUFFLEVBRk87QUFHZEMsc0JBQUFBLEtBQUssRUFBRSxFQUhPO0FBSWRDLHNCQUFBQSxVQUFVLHNCQUFJdEIsWUFBSixFQUFtQkYsTUFBTSxDQUFDYSxPQUExQixDQUpJO0FBS2RKLHNCQUFBQSxrQkFBa0IsRUFBRSxDQUFDO0FBQUNnQix3QkFBQUEsS0FBSyxFQUFFaEI7QUFBUix1QkFBRDtBQUxOLHFCQUpGO0FBV2hCVSxvQkFBQUEsaUJBQWlCLEVBQUU7QUFYSCxtQkFBRDtBQUpGLGlCQUFyQjtBQWtCQU8sZ0JBQUFBLFFBQVEsR0FBR0ksZ0JBQWdCLEdBQUcsQ0FBOUI7QUF6RWM7QUFBQTs7QUFBQTtBQTJFbEJmLGdCQUFBQSxlQUFlLENBQUNrQixHQUFoQixDQUFvQixVQUFDQyxlQUFELEVBQXFCO0FBQ3JDLHNCQUFJUixRQUFRLEdBQUcsQ0FBZjtBQUNBLHNCQUFJUyxZQUFKOztBQUNBLHlCQUFPLElBQVAsRUFBYTtBQUNULHdCQUFJTCxpQkFBZ0IsR0FBR0ksZUFBZSxDQUFDakIsU0FBaEIsQ0FBMEJXLE9BQTFCLENBQWtDLEdBQWxDLEVBQXVDRixRQUF2QyxDQUF2Qjs7QUFDQSx3QkFBSUksaUJBQWdCLEtBQUssQ0FBQyxDQUExQixFQUE2QjtBQUN6Qiw4QkFBUUssWUFBUjtBQUNJLDZCQUFLLEtBQUw7QUFDSUQsMEJBQUFBLGVBQWUsQ0FBQ2YsaUJBQWhCLENBQWtDZSxlQUFlLENBQUNmLGlCQUFoQixDQUFrQ1ksTUFBbEMsR0FBMkMsQ0FBN0UsRUFBZ0ZaLGlCQUFoRixDQUFrR2UsZUFBZSxDQUFDZixpQkFBaEIsQ0FBa0NlLGVBQWUsQ0FBQ2YsaUJBQWhCLENBQWtDWSxNQUFsQyxHQUEyQyxDQUE3RSxFQUFnRlosaUJBQWhGLENBQWtHWSxNQUFsRyxHQUEyRyxDQUE3TSxFQUFnTmQsU0FBaE4sR0FBNE5pQixlQUFlLENBQUNqQixTQUFoQixDQUEwQlksS0FBMUIsQ0FBZ0NILFFBQWhDLENBQTVOO0FBQ0E7O0FBQ0o7QUFDSVEsMEJBQUFBLGVBQWUsQ0FBQ2YsaUJBQWhCLENBQWtDZSxlQUFlLENBQUNmLGlCQUFoQixDQUFrQ1ksTUFBbEMsR0FBMkMsQ0FBN0UsRUFBZ0ZkLFNBQWhGLEdBQTRGaUIsZUFBZSxDQUFDakIsU0FBaEIsQ0FBMEJZLEtBQTFCLENBQWdDSCxRQUFoQyxDQUE1RjtBQUxSOztBQU9BO0FBQ0g7O0FBQ0QsNEJBQVFTLFlBQVI7QUFDSSwyQkFBSyxLQUFMO0FBQ0lELHdCQUFBQSxlQUFlLENBQUNmLGlCQUFoQixDQUFrQ2UsZUFBZSxDQUFDZixpQkFBaEIsQ0FBa0NZLE1BQWxDLEdBQTJDLENBQTdFLEVBQWdGWixpQkFBaEYsQ0FBa0dlLGVBQWUsQ0FBQ2YsaUJBQWhCLENBQWtDZSxlQUFlLENBQUNmLGlCQUFoQixDQUFrQ1ksTUFBbEMsR0FBMkMsQ0FBN0UsRUFBZ0ZaLGlCQUFoRixDQUFrR1ksTUFBbEcsR0FBMkcsQ0FBN00sRUFBZ05kLFNBQWhOLEdBQTROaUIsZUFBZSxDQUFDakIsU0FBaEIsQ0FBMEJZLEtBQTFCLENBQWdDSCxRQUFoQyxFQUEwQ0ksaUJBQTFDLENBQTVOO0FBQ0E7O0FBQ0o7QUFDSUksd0JBQUFBLGVBQWUsQ0FBQ2YsaUJBQWhCLENBQWtDZSxlQUFlLENBQUNmLGlCQUFoQixDQUFrQ1ksTUFBbEMsR0FBMkMsQ0FBN0UsRUFBZ0ZkLFNBQWhGLEdBQTRGaUIsZUFBZSxDQUFDakIsU0FBaEIsQ0FBMEJZLEtBQTFCLENBQWdDSCxRQUFoQyxFQUEwQ0ksaUJBQTFDLENBQTVGO0FBTFI7O0FBUUEsd0JBQUlBLGlCQUFnQixLQUFLSCxTQUFTLENBQUNDLE9BQVYsQ0FBa0IsS0FBbEIsRUFBeUJGLFFBQXpCLENBQXpCLEVBQTZEO0FBQ3pEUSxzQkFBQUEsZUFBZSxDQUFDZixpQkFBaEIsQ0FBa0NlLGVBQWUsQ0FBQ2YsaUJBQWhCLENBQWtDWSxNQUFsQyxHQUEyQyxDQUE3RSxFQUFnRlosaUJBQWhGLENBQWtHYSxJQUFsRyxDQUF1RztBQUNuR2hCLHdCQUFBQSxFQUFFLEVBQUViLHFCQUFjQyxVQUFkLEtBQTZCMEIsaUJBRGtFO0FBRW5HYix3QkFBQUEsU0FBUyxFQUFFLEVBRndGO0FBR25HQyx3QkFBQUEsUUFBUSxFQUFFO0FBSHlGLHVCQUF2RztBQUtBUSxzQkFBQUEsUUFBUSxHQUFHSSxpQkFBZ0IsR0FBRyxDQUE5QjtBQUNBSyxzQkFBQUEsWUFBWSxHQUFHLEtBQWY7QUFDSCxxQkFSRCxNQVFPO0FBQ0hELHNCQUFBQSxlQUFlLENBQUNmLGlCQUFoQixDQUFrQ2EsSUFBbEMsQ0FBdUM7QUFDbkNoQix3QkFBQUEsRUFBRSxFQUFFYixxQkFBY0MsVUFBZCxLQUE2QjBCLGlCQURFO0FBRW5DYix3QkFBQUEsU0FBUyxFQUFFLEVBRndCO0FBR25DQyx3QkFBQUEsUUFBUSxFQUFFLEdBSHlCO0FBSW5DQyx3QkFBQUEsaUJBQWlCLEVBQUU7QUFKZ0IsdUJBQXZDO0FBTUFPLHNCQUFBQSxRQUFRLEdBQUdJLGlCQUFnQixHQUFHLENBQTlCO0FBQ0FLLHNCQUFBQSxZQUFZLEdBQUcsR0FBZjtBQUNIO0FBQ0o7QUFDSixpQkExQ0Q7QUE0Q0lDLGdCQUFBQSxTQXZIYyxHQXVIRjFCLGtCQUFXMkIsWUFBWCxDQUF3QjtBQUFDekIsa0JBQUFBLFdBQVcsRUFBRVosTUFBTSxDQUFDYTtBQUFyQixpQkFBeEIsQ0F2SEU7QUFBQTtBQUFBLHVCQXdITXlCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZeEIsZUFBZSxDQUFDa0IsR0FBaEI7QUFBQSxzRkFBb0Isa0JBQU1PLFVBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQ2ZGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUFVLENBQUNyQixpQkFBWCxDQUE2QmMsR0FBN0I7QUFBQSxrR0FBaUMsa0JBQU1RLFVBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFFeEIsd0NBQUFBLFNBRDBFLEdBQzlEd0IsVUFBVSxDQUFDeEIsU0FBWCxDQUFxQnlCLE9BQXJCLENBQTZCLElBQTdCLEVBQW1DLEVBQW5DLENBRDhEO0FBRTFFQyx3Q0FBQUEsTUFGMEUsR0FFakU7QUFDVDFCLDBDQUFBQSxTQUFTLEVBQUVBLFNBREY7QUFFVG1CLDBDQUFBQSxTQUFTLEVBQVRBLFNBRlM7QUFHVHhCLDBDQUFBQSxXQUFXLEVBQUVaLE1BQU0sQ0FBQ2EsT0FIWDtBQUlUK0IsMENBQUFBLFFBQVEsRUFBRUosVUFBVSxDQUFDeEIsRUFKWjtBQUtUNkIsMENBQUFBLFNBQVMsRUFBRUosVUFBVSxDQUFDekI7QUFMYix5Q0FGaUU7O0FBQUEsOENBU3ZEQyxTQUFTLENBQUNZLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUJaLFNBQVMsQ0FBQ1csT0FBVixDQUFrQnpCLHFCQUFjMkMsWUFBZCxDQUEyQjdCLFNBQTNCLEVBQXNDbUIsU0FBdEMsQ0FBbEIsQ0FBbkIsRUFBd0ZXLEtBQXhGLENBQThGLEdBQTlGLEVBQW1HaEIsTUFBbkcsR0FBNEcsQ0FUckQ7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSwrQ0FTK0RpQixtQkFBWUMsMEJBQVosQ0FBdUNOLE1BQXZDLENBVC9EOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsdURBU2dISyxtQkFBWUUsbUJBQVosQ0FBZ0NQLE1BQWhDLENBVGhIOztBQUFBO0FBUzFFdkIsd0NBQUFBLGdCQVQwRTtBQVU5RXFCLHdDQUFBQSxVQUFVLG1DQUNIQSxVQURHO0FBRU5yQiwwQ0FBQUEsZ0JBQWdCLEVBQWhCQTtBQUZNLDBDQUFWO0FBVjhFO0FBQUEsK0NBZXpDa0IsT0FBTyxDQUFDQyxHQUFSLENBQVlFLFVBQVUsQ0FBQ3RCLGlCQUFYLENBQTZCYyxHQUE3QjtBQUFBLDhHQUFpQyxpQkFBTWtCLFNBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFFUixvREFBQUEsTUFEMEUsR0FDakU7QUFDVDFCLHNEQUFBQSxTQUFTLEVBQUVrQyxTQUFTLENBQUNsQyxTQURaO0FBRVRtQixzREFBQUEsU0FBUyxFQUFUQSxTQUZTO0FBR1R4QixzREFBQUEsV0FBVyxFQUFFWixNQUFNLENBQUNhLE9BSFg7QUFJVCtCLHNEQUFBQSxRQUFRLEVBQUVKLFVBQVUsQ0FBQ3hCLEVBSlo7QUFLVDZCLHNEQUFBQSxTQUFTLEVBQUVNLFNBQVMsQ0FBQ25DO0FBTFoscURBRGlFOztBQUFBLDBEQVF2RG1DLFNBQVMsQ0FBQ2xDLFNBQVYsQ0FBb0JZLEtBQXBCLENBQTBCLENBQTFCLEVBQTZCc0IsU0FBUyxDQUFDbEMsU0FBVixDQUFvQlcsT0FBcEIsQ0FBNEJ6QixxQkFBYzJDLFlBQWQsQ0FBMkJLLFNBQVMsQ0FBQ2xDLFNBQXJDLEVBQWdEbUIsU0FBaEQsQ0FBNUIsQ0FBN0IsRUFBc0hXLEtBQXRILENBQTRILEdBQTVILEVBQWlJaEIsTUFBakksR0FBMEksQ0FSbkY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSwyREFRNkZpQixtQkFBWUMsMEJBQVosQ0FBdUNOLE1BQXZDLENBUjdGOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsa0VBUThJSyxtQkFBWUUsbUJBQVosQ0FBZ0NQLE1BQWhDLENBUjlJOztBQUFBO0FBUTFFdkIsb0RBQUFBLGdCQVIwRTtBQUFBLHFIQVV2RStCLFNBVnVFO0FBVzFFL0Isc0RBQUFBLGdCQUFnQixFQUFoQkE7QUFYMEU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBQWpDOztBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQUFaLENBZnlDOztBQUFBO0FBZTlFcUIsd0NBQUFBLFVBQVUsQ0FBQ3RCLGlCQWZtRTtBQUFBLDBFQTZCdkVzQixVQTdCdUU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQWpDOztBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUFaLENBRGU7O0FBQUE7QUFDcERELDRCQUFBQSxVQUFVLENBQUNyQixpQkFEeUM7QUFBQSw4REFnQzdDcUIsVUFoQzZDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBWixDQXhITjs7QUFBQTtBQXdIbEJ6QixnQkFBQUEsZUF4SGtCOztBQUFBO0FBMkp0QixzQkFBS3FDLFFBQUwsQ0FBYztBQUNWeEMsa0JBQUFBLFdBQVcsRUFBRVosTUFESDtBQUVWZSxrQkFBQUEsZUFBZSxFQUFmQTtBQUZVLGlCQUFkOztBQTNKc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0F6Q1A7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsVUFtT25Cc0MsYUFuT21CLEdBbU9ILGlCQUFlO0FBQUEsVUFBYkMsT0FBYSxTQUFiQSxPQUFhOztBQUMzQixZQUFLRixRQUFMLENBQWM7QUFBQ0MsUUFBQUEsYUFBYSxFQUFFQyxPQUFoQjtBQUF5QkMsUUFBQUEsTUFBTSxFQUFFO0FBQWpDLE9BQWQ7QUFDSCxLQXJPa0I7O0FBQUEsVUF3Um5CQyxnQkF4Um1CLEdBd1JBLGlCQUE2QztBQUFBLFVBQTNDQyxrQkFBMkMsU0FBM0NBLGtCQUEyQztBQUFBLFVBQXZCQyxpQkFBdUIsU0FBdkJBLGlCQUF1Qjs7QUFDNUQsWUFBS04sUUFBTCxDQUFjO0FBQUNLLFFBQUFBLGtCQUFrQixFQUFsQkEsa0JBQUQ7QUFBcUJDLFFBQUFBLGlCQUFpQixFQUFqQkE7QUFBckIsT0FBZDtBQUNILEtBMVJrQjs7QUFBQSxVQTRSbkJDLFFBNVJtQixHQTRSUixpQkFBYTtBQUFBLFVBQVhwRCxLQUFXLFNBQVhBLEtBQVc7QUFDcEIsVUFBTXFELEtBQUssR0FBR3JELEtBQUssR0FBR0EsS0FBSCxhQUFHQSxLQUFILHVCQUFHQSxLQUFLLENBQUV3QyxLQUFQLENBQWEsU0FBYixFQUF3QmhCLE1BQTNCLEdBQW9DLENBQXZEOztBQUVBLFlBQUtxQixRQUFMLENBQWM7QUFDVjdDLFFBQUFBLEtBQUssRUFBTEEsS0FEVTtBQUVWc0QsUUFBQUEsTUFBTSxFQUFFQyxPQUFPLENBQUN2RCxLQUFELENBRkw7QUFHVnFELFFBQUFBLEtBQUssRUFBTEE7QUFIVSxPQUFkO0FBS0gsS0FwU2tCOztBQUFBLFVBc1NuQkcsV0F0U21CLEdBc1NMLFVBQUN4QyxLQUFELEVBQVc7QUFDckIsWUFBSzZCLFFBQUwsQ0FBYztBQUNWWSxRQUFBQSxRQUFRLEVBQUV6QztBQURBLE9BQWQ7QUFHSCxLQTFTa0I7O0FBRWYsVUFBS2YsS0FBTCxHQUFhO0FBQ1R5RCxNQUFBQSxrQkFBa0IsRUFBRSxFQURYO0FBRVRsRCxNQUFBQSxlQUFlLEVBQUUsRUFGUjtBQUdUd0MsTUFBQUEsTUFBTSxFQUFFLEtBSEM7QUFJVFcsTUFBQUEsd0JBQXdCLEVBQUUsRUFKakI7QUFLVEMsTUFBQUEsY0FBYyxFQUFFLE1BQUtyRSxLQUFMLENBQVdzRSxNQUxsQjtBQU1UQyxNQUFBQSxnQkFBZ0IsRUFBRSxDQUFDO0FBQUNDLFFBQUFBLEtBQUssRUFBRSxLQUFSO0FBQWVDLFFBQUFBLFdBQVcsRUFBRTtBQUE1QixPQUFELENBTlQ7QUFPVGxCLE1BQUFBLGFBQWEsRUFBRSxLQVBOO0FBUVRtQixNQUFBQSxXQUFXLEVBQUUsRUFSSjtBQVNUQyxNQUFBQSxRQUFRLEVBQUUsRUFURDtBQVVUQyxNQUFBQSxZQUFZLEVBQUU7QUFDVmpELFFBQUFBLEtBQUssRUFBRSxFQURHO0FBRVY2QyxRQUFBQSxLQUFLLEVBQUU7QUFGRyxPQVZMO0FBY1RLLE1BQUFBLFNBQVMsRUFBRTtBQUNQZCxRQUFBQSxNQUFNLEVBQUUsS0FERDtBQUVQZSxRQUFBQSxRQUFRLEVBQUU7QUFGSCxPQWRGO0FBa0JUaEUsTUFBQUEsV0FBVyxFQUFFO0FBQ1RDLFFBQUFBLE9BQU8sRUFBRTtBQURBLE9BbEJKO0FBcUJUZ0UsTUFBQUEsWUFBWSxFQUFFO0FBQ1ZDLFFBQUFBLFlBQVksRUFBRSxFQURKO0FBRVZDLFFBQUFBLE1BQU0sRUFBRTtBQUZFLE9BckJMO0FBeUJUeEUsTUFBQUEsS0FBSyxFQUFFLE1BQUtULEtBQUwsQ0FBV1MsS0F6QlQ7QUEwQlR5RSxNQUFBQSxXQUFXLEVBQUUsRUExQko7QUEyQlRDLE1BQUFBLGdCQUFnQixFQUFFLElBM0JUO0FBNEJUQyxNQUFBQSxVQUFVLEVBQUUsRUE1Qkg7QUE2QlRyQixNQUFBQSxNQUFNLEVBQUUsS0E3QkM7QUE4QlRELE1BQUFBLEtBQUssRUFBRSxDQTlCRTtBQStCVEksTUFBQUEsUUFBUSxFQUFFO0FBL0JELEtBQWIsQ0FGZSxDQW1DZjtBQUNBOztBQUNBLFVBQUttQixRQUFMLEdBQWdCQyx5QkFBZ0JELFFBQWhCLENBQXlCRSxJQUF6QiwrQkFBaEI7QUFDQSxVQUFLQyxtQkFBTCxHQUEyQkMsK0JBQXdCRCxtQkFBeEIsQ0FBNENELElBQTVDLCtCQUEzQjtBQXRDZTtBQXVDbEI7Ozs7O3VGQW1LRDtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQ3lELEtBQUt2RixLQUQ5RCxFQUNXMEYsS0FEWCxlQUNXQSxLQURYLEVBQ2tCQyxJQURsQixlQUNrQkEsSUFEbEIsRUFDd0JDLFdBRHhCLGVBQ3dCQSxXQUR4QixFQUNxQ0MsZ0JBRHJDLGVBQ3FDQSxnQkFEckM7QUFBQSw4QkFFNkMsS0FBS25GLEtBRmxELEVBRVdELEtBRlgsZUFFV0EsS0FGWCxFQUVrQlEsZUFGbEIsZUFFa0JBLGVBRmxCLEVBRW1Dd0MsTUFGbkMsZUFFbUNBLE1BRm5DO0FBR1VxQyxnQkFBQUEsV0FIVixHQUd3QjtBQUNoQkMsa0JBQUFBLGlCQUFpQixFQUFFLElBREg7QUFFaEJDLGtCQUFBQSwyQkFBMkIsRUFBRSxJQUZiO0FBR2hCQyxrQkFBQUEsZ0JBQWdCLEVBQUU7QUFIRixpQkFIeEI7QUFRVUMsZ0JBQUFBLE9BUlYsR0FRb0JMLGdCQUFnQixDQUFDakQsT0FBakIsQ0FBeUIsS0FBekIsRUFBZ0MsRUFBaEMsQ0FScEI7QUFBQTtBQUFBLHVCQVVVdUQscUJBQWNDLFVBQWQsQ0FBeUI7QUFBQ25CLGtCQUFBQSxNQUFNLEVBQUVpQjtBQUFULGlCQUF6QixFQUE0Q0csSUFBNUMsQ0FBaUQsVUFBQUMsR0FBRyxFQUFJO0FBQzFELGtCQUFBLE1BQUksQ0FBQ2hELFFBQUwsQ0FBYztBQUFDeUIsb0JBQUFBLFlBQVksRUFBRTtBQUFDQyxzQkFBQUEsWUFBWSxFQUFFc0IsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPQyxJQUF0QjtBQUE0QnRCLHNCQUFBQSxNQUFNLEVBQUVpQjtBQUFwQztBQUFmLG1CQUFkO0FBQ0gsaUJBRkssQ0FWVjs7QUFBQTtBQWNJQyxxQ0FBY0ssY0FBZCxDQUE2QjtBQUFDZCxrQkFBQUEsS0FBSyxFQUFMQSxLQUFEO0FBQVFJLGtCQUFBQSxXQUFXLEVBQVhBO0FBQVIsaUJBQTdCLEVBQW1ETyxJQUFuRCxDQUF3RCxVQUFBbkcsTUFBTSxFQUFJO0FBQzlELGtCQUFBLE1BQUksQ0FBQ0QsdUJBQUwsQ0FBNkI7QUFBQ0Msb0JBQUFBLE1BQU0sRUFBTkEsTUFBRDtBQUFTQyxvQkFBQUEsVUFBVSxFQUFFLE1BQUksQ0FBQ0g7QUFBMUIsbUJBQTdCO0FBQ0gsaUJBRkQ7O0FBSUEsb0JBQUksQ0FBQyxDQUFDUyxLQUFOLEVBQ0l5QyxtQkFBWXVELGFBQVosQ0FBMEI7QUFBQ0Msa0JBQUFBLE9BQU8sRUFBRTtBQUFDekYsb0JBQUFBLGVBQWUsRUFBZkEsZUFBRDtBQUFrQjJFLG9CQUFBQSxXQUFXLEVBQVhBLFdBQWxCO0FBQStCbkMsb0JBQUFBLE1BQU0sRUFBTkEsTUFBL0I7QUFBdUNrRCxvQkFBQUEsU0FBUyxFQUFFO0FBQWxEO0FBQVYsaUJBQTFCOztBQUVKUixxQ0FBY1Msb0JBQWQsQ0FBbUM7QUFBQ2xCLGtCQUFBQSxLQUFLLEVBQUxBLEtBQUQ7QUFBUUMsa0JBQUFBLElBQUksRUFBSkEsSUFBUjtBQUFja0Isa0JBQUFBLE1BQU0sRUFBRWhCO0FBQXRCLGlCQUFuQyxFQUNLUSxJQURMLENBQ1UsVUFBQUMsR0FBRztBQUFBLHlCQUFJLE1BQUksQ0FBQ2hELFFBQUwsQ0FBYztBQUFDOEIsb0JBQUFBLFVBQVUsRUFBRWtCO0FBQWIsbUJBQWQsQ0FBSjtBQUFBLGlCQURiOztBQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7Ozt3RkE2QkEsa0JBQXlCUSxTQUF6QixFQUFvQ0MsU0FBcEM7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNRRCxTQUFTLENBQUNwQixLQUFWLEtBQW9CLEtBQUsxRixLQUFMLENBQVcwRixLQUR2QztBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQkFFaUQsS0FBSzFGLEtBRnRELEVBRWVTLEtBRmYsZ0JBRWVBLEtBRmYsRUFFc0JpRixLQUZ0QixnQkFFc0JBLEtBRnRCLEVBRTZCRyxnQkFGN0IsZ0JBRTZCQSxnQkFGN0I7QUFHY0ssZ0JBQUFBLE9BSGQsR0FHd0JMLGdCQUFnQixDQUFDakQsT0FBakIsQ0FBeUIsS0FBekIsRUFBZ0MsRUFBaEMsQ0FIeEI7QUFLUSxxQkFBS2lCLFFBQUwsQ0FBYztBQUFDcEQsa0JBQUFBLEtBQUssRUFBRUE7QUFBUixpQkFBZDtBQUNBLHFCQUFLNkMsUUFBTCxDQUFjO0FBQUNTLGtCQUFBQSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ3ZELEtBQUQsQ0FBaEI7QUFBeUI4RCxrQkFBQUEsZ0JBQWdCLEVBQUUsQ0FBQztBQUFDQyxvQkFBQUEsS0FBSyxFQUFFLEtBQVI7QUFBZUMsb0JBQUFBLFdBQVcsRUFBRTtBQUE1QixtQkFBRDtBQUEzQyxpQkFBZDs7QUFFQTBCLHFDQUFjUyxvQkFBZCxDQUFtQztBQUFDbEIsa0JBQUFBLEtBQUssRUFBTEEsS0FBRDtBQUFRbUIsa0JBQUFBLE1BQU0sRUFBRWhCO0FBQWhCLGlCQUFuQyxFQUNDUSxJQURELENBQ00sVUFBQUMsR0FBRztBQUFBLHlCQUFJLE1BQUksQ0FBQ2hELFFBQUwsQ0FBYztBQUFDOEIsb0JBQUFBLFVBQVUsRUFBRWtCO0FBQWIsbUJBQWQsQ0FBSjtBQUFBLGlCQURUOztBQVJSO0FBQUEsdUJBWWNILHFCQUFjQyxVQUFkLENBQXlCO0FBQUNuQixrQkFBQUEsTUFBTSxFQUFFaUI7QUFBVCxpQkFBekIsRUFBNENHLElBQTVDLENBQWlELFVBQUFDLEdBQUcsRUFBSTtBQUMxRCxrQkFBQSxNQUFJLENBQUNoRCxRQUFMLENBQWM7QUFBQ3lCLG9CQUFBQSxZQUFZLEVBQUU7QUFBQ0Msc0JBQUFBLFlBQVksRUFBRXNCLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT0MsSUFBdEI7QUFBNEJ0QixzQkFBQUEsTUFBTSxFQUFFaUI7QUFBcEM7QUFBZixtQkFBZDtBQUNILGlCQUZLLENBWmQ7O0FBQUE7QUFpQkksb0JBQUksS0FBS2xHLEtBQUwsQ0FBV1MsS0FBWCxLQUFxQnFHLFNBQVMsQ0FBQ3JHLEtBQW5DLEVBQTBDO0FBQ3RDLHVCQUFLb0QsUUFBTCxDQUFjO0FBQUNwRCxvQkFBQUEsS0FBSyxFQUFFLEtBQUtULEtBQUwsQ0FBV1M7QUFBbkIsbUJBQWQ7QUFDSDs7QUFuQkwsc0JBcUJRc0csU0FBUyxDQUFDdEcsS0FBVixLQUFvQixLQUFLQyxLQUFMLENBQVdELEtBQS9CLElBQXdDcUcsU0FBUyxDQUFDcEIsS0FBVixLQUFvQixLQUFLMUYsS0FBTCxDQUFXMEYsS0FyQi9FO0FBQUE7QUFBQTtBQUFBOztBQXNCZUEsZ0JBQUFBLE1BdEJmLEdBc0J3QixLQUFLMUYsS0F0QjdCLENBc0JlMEYsS0F0QmY7QUF1QmNJLGdCQUFBQSxXQXZCZCxHQXVCNEI7QUFDaEJDLGtCQUFBQSxpQkFBaUIsRUFBRSxJQURIO0FBRWhCQyxrQkFBQUEsMkJBQTJCLEVBQUUsSUFGYjtBQUdoQkMsa0JBQUFBLGdCQUFnQixFQUFFO0FBSEYsaUJBdkI1QjtBQUFBO0FBQUEsdUJBNkJjRSxxQkFBY0ssY0FBZCxDQUE2QjtBQUFDZCxrQkFBQUEsS0FBSyxFQUFMQSxNQUFEO0FBQVFJLGtCQUFBQSxXQUFXLEVBQVhBO0FBQVIsaUJBQTdCLEVBQW1ETyxJQUFuRCxDQUF3RCxVQUFBbkcsTUFBTSxFQUFJO0FBQ3BFLGtCQUFBLE1BQUksQ0FBQ0QsdUJBQUwsQ0FBNkI7QUFBQ0Msb0JBQUFBLE1BQU0sRUFBTkEsTUFBRDtBQUFTQyxvQkFBQUEsVUFBVSxFQUFFLE1BQUksQ0FBQ0g7QUFBMUIsbUJBQTdCO0FBQ0gsaUJBRkssQ0E3QmQ7O0FBQUE7QUFrQ0ksb0JBQUkrRyxTQUFTLENBQUM3QyxRQUFWLEtBQXVCLEtBQUt4RCxLQUFMLENBQVd3RCxRQUF0QyxFQUFnRDtBQUM1Qyx1QkFBS1osUUFBTCxDQUFjO0FBQ1ZlLG9CQUFBQSxjQUFjLEVBQUUsS0FBSzNELEtBQUwsQ0FBV3dEO0FBRGpCLG1CQUFkO0FBR0g7O0FBRUQsb0JBQUksS0FBS3hELEtBQUwsQ0FBVzZDLGFBQWYsRUFBOEI7QUFBQSxpQ0FDSixLQUFLdkQsS0FERCxFQUNuQjBGLE9BRG1CLGdCQUNuQkEsS0FEbUIsRUFDWkMsSUFEWSxnQkFDWkEsSUFEWTs7QUFHMUJRLHVDQUFjUyxvQkFBZCxDQUFtQztBQUFDbEIsb0JBQUFBLEtBQUssRUFBTEEsT0FBRDtBQUFRQyxvQkFBQUEsSUFBSSxFQUFKQTtBQUFSLG1CQUFuQyxFQUNLVSxJQURMLENBQ1UsVUFBQUMsR0FBRztBQUFBLDJCQUFJLE1BQUksQ0FBQ2hELFFBQUwsQ0FBYztBQUFDOEIsc0JBQUFBLFVBQVUsRUFBRWtCO0FBQWIscUJBQWQsQ0FBSjtBQUFBLG1CQURiOztBQUVBLHVCQUFLaEQsUUFBTCxDQUFjO0FBQUNDLG9CQUFBQSxhQUFhLEVBQUU7QUFBaEIsbUJBQWQ7QUFDSDs7QUE5Q0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7OztXQXFFQSxrQkFBUztBQUFBOztBQUFBLHlCQVlELEtBQUs3QyxLQVpKO0FBQUEsVUFFRHFELE1BRkMsZ0JBRURBLE1BRkM7QUFBQSxVQUdERyxRQUhDLGdCQUdEQSxRQUhDO0FBQUEsVUFJREosS0FKQyxnQkFJREEsS0FKQztBQUFBLFVBS0RPLGNBTEMsZ0JBS0RBLGNBTEM7QUFBQSxVQU1EcEQsZUFOQyxnQkFNREEsZUFOQztBQUFBLFVBT0RzRCxnQkFQQyxnQkFPREEsZ0JBUEM7QUFBQSxVQVFEZCxNQVJDLGdCQVFEQSxNQVJDO0FBQUEsVUFTRGlCLFdBVEMsZ0JBU0RBLFdBVEM7QUFBQSxVQVVEVSxVQVZDLGdCQVVEQSxVQVZDO0FBQUEsVUFXREwsWUFYQyxnQkFXREEsWUFYQztBQUFBLHlCQWFpQixLQUFLL0UsS0FidEI7QUFBQSxVQWFFMEYsS0FiRixnQkFhRUEsS0FiRjtBQUFBLFVBYVNDLElBYlQsZ0JBYVNBLElBYlQsRUFlTDs7QUFFQSxVQUFNcUIsUUFBUSxHQUFHLENBQUM5QyxRQUFELEVBQVdILE1BQVgsRUFBbUJrRCxJQUFuQixDQUF3QmpELE9BQXhCLENBQWpCO0FBRUEsMEJBQ0k7QUFBQSxnQ0FDSTtBQUFLLFVBQUEsU0FBUyxFQUFDLHlCQUFmO0FBQUEsa0NBQ0k7QUFBSyxZQUFBLFNBQVMsRUFBQyxXQUFmO0FBQUEsbUNBQ0kscUJBQUMsMkJBQUQ7QUFBaUIsY0FBQSxRQUFRLEVBQUUsS0FBS0gsUUFBaEM7QUFBMEMsY0FBQSxXQUFXLEVBQUUsS0FBS0ksV0FBNUQ7QUFBeUUsY0FBQSxVQUFVLEVBQUVtQixVQUFyRjtBQUFpRyxjQUFBLEtBQUssRUFBRU07QUFBeEc7QUFESixZQURKLGVBSUkscUJBQUMsYUFBRDtBQUNJLFlBQUEsS0FBSyxFQUFDLE9BRFY7QUFFSSxZQUFBLE9BQU8sRUFBQyxTQUZaO0FBR0ksWUFBQSxJQUFJLEVBQUMsSUFIVDtBQUlJLFlBQUEsUUFBUSxFQUFFLENBQUNzQixRQUpmO0FBS0ksWUFBQSxPQUFPLEVBQUU7QUFBQSxxQkFBTSxNQUFJLENBQUMzQixRQUFMLENBQWM7QUFBQzZCLGdCQUFBQSxNQUFNLEVBQUUsWUFBVDtBQUF1QlIsZ0JBQUFBLE9BQU8sRUFBRTtBQUFDUyxrQkFBQUEsSUFBSSxFQUFFO0FBQVA7QUFBaEMsZUFBZCxDQUFOO0FBQUEsYUFMYjtBQU1JLFlBQUEsV0FBVyxFQUNQO0FBQ0ksOEJBQWdCLGVBRHBCO0FBRUksb0NBQXNCLGVBRjFCO0FBR0kscUNBQXVCO0FBSDNCO0FBUFIsWUFKSixFQWlCS0gsUUFBUSxpQkFBSSxxQkFBQyxpQkFBRDtBQUFPLFlBQUEsSUFBSSxZQUFLbEQsS0FBTCxDQUFYO0FBQUEsbUNBQ1QscUJBQUMsYUFBRDtBQUNJLGNBQUEsSUFBSSxFQUFFTyxjQUFjLEdBQUcsYUFBSCxHQUFtQixRQUQzQztBQUVJLGNBQUEsSUFBSSxFQUFDLElBRlQ7QUFHSSxjQUFBLGNBQWMsRUFBQyxRQUhuQjtBQUlJLGNBQUEsT0FBTyxFQUFDLFVBSlo7QUFLSSxjQUFBLE9BQU8sRUFBRTtBQUFBLHVCQUFNLE1BQUksQ0FBQ2dCLFFBQUwsQ0FBYztBQUFDNkIsa0JBQUFBLE1BQU0sRUFBRTtBQUFULGlCQUFkLENBQU47QUFBQTtBQUxiO0FBRFMsWUFqQmpCO0FBQUEsVUFESixlQTRCSTtBQUFLLFVBQUEsU0FBUyxFQUNWLDRCQUFXO0FBQ1Asb0NBQXdCLElBRGpCO0FBRVAsOEJBQWtCN0M7QUFGWCxXQUFYLENBREo7QUFBQSxrQ0FNSTtBQUFLLFlBQUEsU0FBUyxFQUFDLGFBQWY7QUFBQSxtQ0FDSSxxQkFBQyw2QkFBRDtBQUFtQixjQUFBLEtBQUssRUFBRUUsZ0JBQTFCO0FBQTRDLGNBQUEsUUFBUSxFQUFFLEtBQUtjO0FBQTNEO0FBREosWUFOSixlQVNJO0FBQUssWUFBQSxTQUFTLEVBQUMsZUFBZjtBQUFBLG9DQUNJO0FBQUssY0FBQSxTQUFTLEVBQUMsU0FBZjtBQUFBLHFDQUNJO0FBQUssZ0JBQUEsU0FBUyxFQUFDLFNBQWY7QUFBQSx3Q0FDSTtBQUFLLGtCQUFBLFNBQVMsRUFBQyxLQUFmO0FBQUEseUNBQ0kscUJBQUMsYUFBRDtBQUFRLG9CQUFBLEtBQUssRUFBQyxNQUFkO0FBQXFCLG9CQUFBLE9BQU8sRUFBQyxXQUE3QjtBQUF5QyxvQkFBQSxJQUFJLEVBQUMsSUFBOUM7QUFBbUQsb0JBQUEsV0FBVyxFQUFFO0FBQzVELHNDQUFnQixrQkFENEM7QUFFNUQsNENBQXNCLGtCQUZzQztBQUc1RCw2Q0FBdUI7QUFIcUMscUJBQWhFO0FBS1Esb0JBQUEsT0FBTyxFQUFFO0FBQUEsNkJBQU0sTUFBSSxDQUFDQSxRQUFMLENBQWM7QUFBQzZCLHdCQUFBQSxNQUFNLEVBQUU7QUFBVCx1QkFBZCxDQUFOO0FBQUE7QUFMakI7QUFESixrQkFESixlQVVJO0FBQUssa0JBQUEsU0FBUyxFQUFDLEtBQWY7QUFBQSx5Q0FDSSxxQkFBQyxhQUFEO0FBQ0ksb0JBQUEsS0FBSyxFQUFDLFdBRFY7QUFFSSxvQkFBQSxPQUFPLEVBQUMsV0FGWjtBQUdJLG9CQUFBLElBQUksRUFBQyxJQUhUO0FBSUksb0JBQUEsV0FBVyxFQUFFO0FBQ1Qsc0NBQWdCLGtCQURQO0FBRVQsNENBQXNCLGtCQUZiO0FBR1QsNkNBQXVCO0FBSGQscUJBSmpCO0FBU0ksb0JBQUEsT0FBTyxFQUFFO0FBQUEsNkJBQU0sTUFBSSxDQUFDN0IsUUFBTCxDQUFjO0FBQUM2Qix3QkFBQUEsTUFBTSxFQUFFO0FBQVQsdUJBQWQsQ0FBTjtBQUFBO0FBVGI7QUFESixrQkFWSjtBQUFBO0FBREosY0FESixFQTRCUXpELE1BQU0saUJBQUkscUJBQUMsdUJBQUQ7QUFBYSxjQUFBLGFBQWEsRUFBRSxLQUFLRixhQUFqQztBQUFnRCxjQUFBLEtBQUssRUFBRW1DLEtBQXZEO0FBQThELGNBQUEsS0FBSyxFQUFFaEIsV0FBckU7QUFDYSxjQUFBLElBQUksRUFBRWlCLElBRG5CO0FBQ3lCLGNBQUEsWUFBWSxFQUFFWjtBQUR2QyxjQTVCbEI7QUFBQSxZQVRKLGVBeUNJO0FBQUssWUFBQSxTQUFTLEVBQUMsYUFBZjtBQUFBLG9DQUNJO0FBQUssY0FBQSxTQUFTLEVBQUMsc0JBQWY7QUFBQSx3QkFFUTlELGVBQWUsQ0FBQ2tCLEdBQWhCLENBQW9CLFVBQUNDLGVBQUQsRUFBa0JwQixLQUFsQixFQUE0QjtBQUM1QyxvQkFBSUssaUJBQWlCLEdBQUcsRUFBeEI7QUFDQWUsZ0JBQUFBLGVBQWUsQ0FBQ2YsaUJBQWhCLENBQWtDK0YsT0FBbEMsQ0FBMEMsVUFBQUMsSUFBSSxFQUFJO0FBQzlDaEcsa0JBQUFBLGlCQUFpQixDQUFDYSxJQUFsQixDQUF1Qm1GLElBQXZCO0FBQ0FBLGtCQUFBQSxJQUFJLENBQUNoRyxpQkFBTCxDQUF1QitGLE9BQXZCLENBQStCLFVBQUFDLElBQUksRUFBSTtBQUNuQ2hHLG9CQUFBQSxpQkFBaUIsQ0FBQ2EsSUFBbEIsQ0FBdUJtRixJQUF2QjtBQUNILG1CQUZEO0FBR0gsaUJBTEQ7QUFNQSxvQ0FDSTtBQUFLLGtCQUFBLFNBQVMsRUFDViw0QkFBVztBQUNQLHdDQUFvQixJQURiO0FBQ21CLCtDQUEyQnJHLEtBQUssS0FBSztBQUR4RCxtQkFBWCxDQURKO0FBQUEsNkJBS0tBLEtBQUssS0FBSyxDQUFWLGlCQUFlO0FBQUssb0JBQUEsU0FBUyxFQUFDLE9BQWY7QUFBQTtBQUFBLG9CQUxwQixFQU9RSyxpQkFBaUIsQ0FBQ2MsR0FBbEIsQ0FBc0IsVUFBQWhCLFNBQVMsRUFBSTtBQUMvQix3Q0FDSTtBQUFLLHNCQUFBLFNBQVMsRUFBRSw0QkFBVztBQUN2QiwrQ0FBdUIsSUFEQTtBQUV2QixrQ0FBVUEsU0FBUyxDQUFDbUc7QUFGRyx1QkFBWCxDQUFoQjtBQUFBLDZDQUlJLHFCQUFDLCtCQUFEO0FBQ0ksd0JBQUEsWUFBWSxFQUFFbkcsU0FEbEI7QUFFSSx3QkFBQSxXQUFXLEVBQUVBLFNBQVMsQ0FBQ0QsRUFGM0I7QUFHSSx3QkFBQSxpQkFBaUIsRUFBRWtCLGVBQWUsQ0FBQ2xCLEVBSHZDO0FBSUksd0JBQUEsZUFBZSxFQUFFa0IsZUFKckI7QUFLSSx3QkFBQSxZQUFZLEVBQUVqQixTQUFTLENBQUNDLFFBTDVCO0FBTUksd0JBQUEsUUFBUSxFQUFFLE1BQUksQ0FBQ2lFLFFBTm5CO0FBT0ksd0JBQUEsZ0JBQWdCLEVBQUUsTUFBSSxDQUFDM0IsZ0JBUDNCO0FBUUksd0JBQUEsbUJBQW1CLEVBQUUsTUFBSSxDQUFDOEIsbUJBUjlCO0FBU0ksd0JBQUEsWUFBWSxFQUFFckUsU0FBUyxDQUFDRyxnQkFBVixDQUEyQmlHLFVBVDdDO0FBVUksd0JBQUEsWUFBWSxFQUFFN0IsS0FWbEI7QUFXSSx3QkFBQSxlQUFlLEVBQUV6RTtBQVhyQjtBQUpKLHVCQUdTRSxTQUFTLENBQUNELEVBSG5CLENBREo7QUFvQkgsbUJBckJELENBUFI7QUFBQSxrQkFESjtBQWlDSCxlQXpDRDtBQUZSLGNBREosZUErQ0k7QUFBSyxjQUFBLFNBQVMsRUFBQyxjQUFmO0FBQUEsc0NBQ0k7QUFBTSxnQkFBQSxTQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQSx1Q0FDSSxxQkFBQyxhQUFEO0FBQ0ksa0JBQUEsS0FBSyxFQUFDLGNBRFY7QUFFSSxrQkFBQSxPQUFPLEVBQUMsV0FGWjtBQUdJLGtCQUFBLElBQUksRUFBQyxJQUhUO0FBSUksa0JBQUEsT0FBTyxFQUFFO0FBQUEsMkJBQU0sTUFBSSxDQUFDbUUsUUFBTCxDQUFjO0FBQ3pCNkIsc0JBQUFBLE1BQU0sRUFBRSxnQkFEaUI7QUFFekJSLHNCQUFBQSxPQUFPLEVBQUU7QUFDTGpGLHdCQUFBQSxLQUFLLEVBQUUsS0FERjtBQUVMa0Msd0JBQUFBLGtCQUFrQixFQUFFLE1BQUksQ0FBQ2pELEtBQUwsQ0FBV2lELGtCQUYxQjtBQUdMQyx3QkFBQUEsaUJBQWlCLEVBQUUsTUFBSSxDQUFDbEQsS0FBTCxDQUFXa0Q7QUFIekI7QUFGZ0IscUJBQWQsQ0FBTjtBQUFBO0FBSmI7QUFESixnQkFGSjtBQUFBLGNBL0NKO0FBQUEsWUF6Q0o7QUFBQSxVQTVCSjtBQUFBLFFBREo7QUEySUg7Ozs7RUEzY3dDNEQsS0FBSyxDQUFDQyxTOzs7QUErY25EMUgsZUFBZSxDQUFDMkgsWUFBaEIsR0FBK0I7QUFDM0JoQyxFQUFBQSxLQUFLLEVBQUUsRUFEb0I7QUFFM0JqRixFQUFBQSxLQUFLLEVBQUUsRUFGb0I7QUFHM0JrSCxFQUFBQSxXQUFXLEVBQUUsRUFIYztBQUkzQnBILEVBQUFBLFdBQVcsRUFBRSxFQUpjO0FBSzNCb0YsRUFBQUEsSUFBSSxFQUFFLEVBTHFCO0FBTTNCckIsRUFBQUEsTUFBTSxFQUFFLEtBTm1CO0FBTzNCc0IsRUFBQUEsV0FBVyxFQUFFZ0MsWUFQYztBQVEzQi9CLEVBQUFBLGdCQUFnQixFQUFFO0FBUlMsQ0FBL0I7QUFXQTlGLGVBQWUsQ0FBQzhILFNBQWhCLEdBQTRCO0FBQ3hCbkMsRUFBQUEsS0FBSyxFQUFFbUMsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBREE7QUFFeEJ0SCxFQUFBQSxLQUFLLEVBQUVvSCxzQkFBVUMsTUFGTztBQUd4Qm5DLEVBQUFBLElBQUksRUFBRWtDLHNCQUFVQyxNQUhRO0FBSXhCdkgsRUFBQUEsV0FBVyxFQUFFc0gsc0JBQVVHLEtBSkM7QUFLeEJMLEVBQUFBLFdBQVcsRUFBRUUsc0JBQVVHLEtBTEM7QUFNeEIxRCxFQUFBQSxNQUFNLEVBQUV1RCxzQkFBVUksSUFOTTtBQU94QnJDLEVBQUFBLFdBQVcsRUFBRWlDLHNCQUFVSyxJQVBDO0FBUXhCckMsRUFBQUEsZ0JBQWdCLEVBQUVnQyxzQkFBVUM7QUFSSixDQUE1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQge1JFUVVFU1RfVVRJTFMsIENPTkRJVElPTl9PUFRJT05TX1VUSUxTLCBHRU5FUkFMX1VUSUxTLCBEQVRBX1VUSUxTLCBRVUVSWV9VVElMU30gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IEZpbHRlckNvbmRpdGlvbkl0ZW0gZnJvbSBcIi4vQ29tcG9uZW50cy9GaWx0ZXJDb25kaXRpb25JdGVtL0ZpbHRlckNvbmRpdGlvbkl0ZW1cIjtcclxuaW1wb3J0IEZpbHRlckJyZWFkY3J1bWJzIGZyb20gXCIuL0NvbXBvbmVudHMvRmlsdGVyQnJlYWRjcnVtYnMvRmlsdGVyQnJlYWRjcnVtYnNcIjtcclxuaW1wb3J0IEZpbHRlclRlbXBsYXRlcyBmcm9tIFwiLi9Db21wb25lbnRzL0ZpbHRlclRlbXBsYXRlcy9GaWx0ZXJUZW1wbGF0ZXNcIjtcclxuaW1wb3J0IEZpbHRlclNhdmVyIGZyb20gXCIuL0NvbXBvbmVudHMvRmlsdGVyU2F2ZXIvRmlsdGVyU2F2ZXJcIjtcclxuaW1wb3J0IHtCVVRUT05TX0VGRkVDVFN9IGZyb20gXCIuL2VmZmVjdHNcIjtcclxuaW1wb3J0IEJhZGdlIGZyb20gXCIuLi9CYWRnZS9CYWRnZVwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCB7bm9vcH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyQ29uZGl0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHJlZmVyZW5jZUZpZWxkRGF0YToge30sXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbnNBcnJheTogW10sXHJcbiAgICAgICAgICAgIGlzU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZVRhYmxlRmllbGRzRGF0YToge30sXHJcbiAgICAgICAgICAgIGlzRmlsdGVyT3BlbmVkOiB0aGlzLnByb3BzLm9wZW5lZCxcclxuICAgICAgICAgICAgYnJlYWRjcnVtYnNJdGVtczogW3tsYWJlbDogJ0FsbCcsIGNvbmRpdGlvbklkOiAnYWxsJ31dLFxyXG4gICAgICAgICAgICBpc0ZpbHRlclNhdmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgcXVlcnlUb1NhdmU6ICcnLFxyXG4gICAgICAgICAgICBsYWJlbEFycjogW10sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbToge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWxlcnREYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpdmU6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGFibGVGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IHt9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlZmF1bHRHcm91cDoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheVZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgc3lzX2lkOiBcIlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLnByb3BzLnF1ZXJ5LFxyXG4gICAgICAgICAgICBvcGVyYXRvckFycjogW10sXHJcbiAgICAgICAgICAgIGNsaWNrZWRMaXN0SW5kZXg6IG51bGwsXHJcbiAgICAgICAgICAgIGZpbHRlckxpc3Q6IFtdLFxyXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb3VudDogMCxcclxuICAgICAgICAgICAgYWR2YW5jZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMucGFyc2VDb25kaXRpb25WYWx1ZSA9IFFVRVJZX1VUSUxTLnBhcnNlQ29uZGl0aW9uVmFsdWUuYmluZCh0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLnBhcnNlQ29uZGl0aW9uVmFsdWVXaXRoUmVmID0gUVVFUllfVVRJTFMucGFyc2VDb25kaXRpb25WYWx1ZVdpdGhSZWYuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNsaWNrQnRuID0gQlVUVE9OU19FRkZFQ1RTLmNsaWNrQnRuLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXRDb25kaXRpb25PcHRpb25zID0gQ09ORElUSU9OX09QVElPTlNfVVRJTFMuc2V0Q29uZGl0aW9uT3B0aW9ucy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoVGFibGVEYXRhU3VjY2Vzc2VkID0gYXN5bmMgKHtyZXN1bHQsIHByb3BlcnRpZXN9KSA9PiB7XHJcbiAgICAgICAgbGV0IGZpZWxkc0RhdGFJRCA9IEdFTkVSQUxfVVRJTFMuZ2VuZXJhdGVJRCgpO1xyXG4gICAgICAgIGNvbnN0IHtibG9ja0ZpZWxkcywgYWxsb3dGaWxlZHN9ID0gcHJvcGVydGllcztcclxuICAgICAgICBjb25zdCB7cXVlcnl9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgZmllbGRzRHJvcGRvd25EYXRhID0gREFUQV9VVElMUy5nZXREcm9wZG93bkZpZWxkc0l0ZW1zKHtcclxuICAgICAgICAgICAgdGFibGVGaWVsZHM6IHJlc3VsdC5jb2x1bW5zLFxyXG4gICAgICAgICAgICBpbmRleDogZmllbGRzRGF0YUlELFxyXG4gICAgICAgICAgICBibG9ja0ZpZWxkcyxcclxuICAgICAgICAgICAgYWxsb3dGaWxlZHNcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgY29uZGl0aW9uc0FycmF5ID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogR0VORVJBTF9VVElMUy5nZW5lcmF0ZUlEKCksXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogXCJcIixcclxuICAgICAgICAgICAgICAgIHJlbGF0ZWRDb25kaXRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogR0VORVJBTF9VVElMUy5nZW5lcmF0ZUlEKCkgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25PcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRpb3I6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZHNEYXRhSURdOiByZXN1bHQuY29sdW1ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNEcm9wZG93bkRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBmaWVsZHNEcm9wZG93bkRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZWRDb25kaXRpb25zOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICBpZiAocXVlcnkpIHtcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgbGV0IGNvcHlRdWVyeSA9IHF1ZXJ5O1xyXG4gICAgICAgICAgICBpZiAoY29weVF1ZXJ5LmluZGV4T2YoJ15FUScpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNvcHlRdWVyeSA9IGNvcHlRdWVyeS5zbGljZSgwLCBjb3B5UXVlcnkuaW5kZXhPZignXkVRJykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9wZXJhdG9yUG9zaXRpb24gPSBjb3B5UXVlcnkuaW5kZXhPZignXk5RJywgcG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhdG9yUG9zaXRpb24gPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uc0FycmF5W2NvbmRpdGlvbnNBcnJheS5sZW5ndGggLSAxXS5jb25kaXRpb24gPSBjb3B5UXVlcnkuc2xpY2UocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uc0FycmF5W2NvbmRpdGlvbnNBcnJheS5sZW5ndGggLSAxXS5jb25kaXRpb24gPSBjb3B5UXVlcnkuc2xpY2UocG9zaXRpb24sIG9wZXJhdG9yUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uc0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBHRU5FUkFMX1VUSUxTLmdlbmVyYXRlSUQoKSArIG9wZXJhdG9yUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogJ15OUScsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRlZENvbmRpdGlvbnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBHRU5FUkFMX1VUSUxTLmdlbmVyYXRlSUQoKSArIG9wZXJhdG9yUG9zaXRpb24gKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiB7b3BlcmF0b3I6ICcnLCBlZGl0aW9yOiAnJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNEYXRhOiB7W2ZpZWxkc0RhdGFJRF06IHJlc3VsdC5jb2x1bW5zfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc0Ryb3Bkb3duRGF0YTogW3tpdGVtczogZmllbGRzRHJvcGRvd25EYXRhfV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlZENvbmRpdGlvbnM6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IG9wZXJhdG9yUG9zaXRpb24gKyAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbnNBcnJheS5tYXAoKGdsb2JhbENvbmRpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgIGxldCBsYXN0T3BlcmF0b3I7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcGVyYXRvclBvc2l0aW9uID0gZ2xvYmFsQ29uZGl0aW9uLmNvbmRpdGlvbi5pbmRleE9mKCdeJywgcG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvclBvc2l0aW9uID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGxhc3RPcGVyYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXk9SJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxDb25kaXRpb24ucmVsYXRlZENvbmRpdGlvbnNbZ2xvYmFsQ29uZGl0aW9uLnJlbGF0ZWRDb25kaXRpb25zLmxlbmd0aCAtIDFdLnJlbGF0ZWRDb25kaXRpb25zW2dsb2JhbENvbmRpdGlvbi5yZWxhdGVkQ29uZGl0aW9uc1tnbG9iYWxDb25kaXRpb24ucmVsYXRlZENvbmRpdGlvbnMubGVuZ3RoIC0gMV0ucmVsYXRlZENvbmRpdGlvbnMubGVuZ3RoIC0gMV0uY29uZGl0aW9uID0gZ2xvYmFsQ29uZGl0aW9uLmNvbmRpdGlvbi5zbGljZShwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbENvbmRpdGlvbi5yZWxhdGVkQ29uZGl0aW9uc1tnbG9iYWxDb25kaXRpb24ucmVsYXRlZENvbmRpdGlvbnMubGVuZ3RoIC0gMV0uY29uZGl0aW9uID0gZ2xvYmFsQ29uZGl0aW9uLmNvbmRpdGlvbi5zbGljZShwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobGFzdE9wZXJhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ15PUic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxDb25kaXRpb24ucmVsYXRlZENvbmRpdGlvbnNbZ2xvYmFsQ29uZGl0aW9uLnJlbGF0ZWRDb25kaXRpb25zLmxlbmd0aCAtIDFdLnJlbGF0ZWRDb25kaXRpb25zW2dsb2JhbENvbmRpdGlvbi5yZWxhdGVkQ29uZGl0aW9uc1tnbG9iYWxDb25kaXRpb24ucmVsYXRlZENvbmRpdGlvbnMubGVuZ3RoIC0gMV0ucmVsYXRlZENvbmRpdGlvbnMubGVuZ3RoIC0gMV0uY29uZGl0aW9uID0gZ2xvYmFsQ29uZGl0aW9uLmNvbmRpdGlvbi5zbGljZShwb3NpdGlvbiwgb3BlcmF0b3JQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbENvbmRpdGlvbi5yZWxhdGVkQ29uZGl0aW9uc1tnbG9iYWxDb25kaXRpb24ucmVsYXRlZENvbmRpdGlvbnMubGVuZ3RoIC0gMV0uY29uZGl0aW9uID0gZ2xvYmFsQ29uZGl0aW9uLmNvbmRpdGlvbi5zbGljZShwb3NpdGlvbiwgb3BlcmF0b3JQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3JQb3NpdGlvbiA9PT0gY29weVF1ZXJ5LmluZGV4T2YoJ15PUicsIHBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxDb25kaXRpb24ucmVsYXRlZENvbmRpdGlvbnNbZ2xvYmFsQ29uZGl0aW9uLnJlbGF0ZWRDb25kaXRpb25zLmxlbmd0aCAtIDFdLnJlbGF0ZWRDb25kaXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IEdFTkVSQUxfVVRJTFMuZ2VuZXJhdGVJRCgpICsgb3BlcmF0b3JQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogJ15PUidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gb3BlcmF0b3JQb3NpdGlvbiArIDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RPcGVyYXRvciA9ICdeT1InO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbENvbmRpdGlvbi5yZWxhdGVkQ29uZGl0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBHRU5FUkFMX1VUSUxTLmdlbmVyYXRlSUQoKSArIG9wZXJhdG9yUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6ICdeJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZWRDb25kaXRpb25zOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBvcGVyYXRvclBvc2l0aW9uICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE9wZXJhdG9yID0gJ14nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGxldCBvcGVyYXRvcnMgPSBEQVRBX1VUSUxTLmdldE9wZXJhdG9ycyh7dGFibGVGaWVsZHM6IHJlc3VsdC5jb2x1bW5zfSk7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbnNBcnJheSA9IGF3YWl0IFByb21pc2UuYWxsKGNvbmRpdGlvbnNBcnJheS5tYXAoYXN5bmMgZ2xvYmFsQ29uZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxDb25kLnJlbGF0ZWRDb25kaXRpb25zID0gYXdhaXQgUHJvbWlzZS5hbGwoZ2xvYmFsQ29uZC5yZWxhdGVkQ29uZGl0aW9ucy5tYXAoYXN5bmMgcGFyZW50Q29uZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmRpdGlvbiA9IHBhcmVudENvbmQuY29uZGl0aW9uLnJlcGxhY2UoXCJPUlwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUZpZWxkczogcmVzdWx0LmNvbHVtbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbElEOiBnbG9iYWxDb25kLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SUQ6IHBhcmVudENvbmQuaWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmRpdGlvbk9wdGlvbnMgPSBjb25kaXRpb24uc2xpY2UoMCwgY29uZGl0aW9uLmluZGV4T2YoR0VORVJBTF9VVElMUy5maW5kT3BlcmF0b3IoY29uZGl0aW9uLCBvcGVyYXRvcnMpKSkuc3BsaXQoXCIuXCIpLmxlbmd0aCA+IDEgPyBhd2FpdCBRVUVSWV9VVElMUy5wYXJzZUNvbmRpdGlvblZhbHVlV2l0aFJlZihwYXJhbXMpIDogUVVFUllfVVRJTFMucGFyc2VDb25kaXRpb25WYWx1ZShwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENvbmQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnBhcmVudENvbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb25kLnJlbGF0ZWRDb25kaXRpb25zID0gYXdhaXQgUHJvbWlzZS5hbGwocGFyZW50Q29uZC5yZWxhdGVkQ29uZGl0aW9ucy5tYXAoYXN5bmMgY2hpbGRDb25kID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogY2hpbGRDb25kLmNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlRmllbGRzOiByZXN1bHQuY29sdW1ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbElEOiBnbG9iYWxDb25kLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudElEOiBjaGlsZENvbmQuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29uZGl0aW9uT3B0aW9ucyA9IGNoaWxkQ29uZC5jb25kaXRpb24uc2xpY2UoMCwgY2hpbGRDb25kLmNvbmRpdGlvbi5pbmRleE9mKEdFTkVSQUxfVVRJTFMuZmluZE9wZXJhdG9yKGNoaWxkQ29uZC5jb25kaXRpb24sIG9wZXJhdG9ycykpKS5zcGxpdChcIi5cIikubGVuZ3RoID4gMSA/IGF3YWl0IFFVRVJZX1VUSUxTLnBhcnNlQ29uZGl0aW9uVmFsdWVXaXRoUmVmKHBhcmFtcykgOiBRVUVSWV9VVElMUy5wYXJzZUNvbmRpdGlvblZhbHVlKHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jaGlsZENvbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudENvbmQ7XHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBnbG9iYWxDb25kO1xyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYmxlRmllbGRzOiByZXN1bHQsXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbnNBcnJheSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHt0YWJsZSwgdXNlciwgb25TZW5kUXVlcnksIGZpbHRlcnNMaXN0UXVlcnl9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7cXVlcnksIGNvbmRpdGlvbnNBcnJheSwgaXNTYXZlfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHN5c3Bhcm1fb3BlcmF0b3JzOiB0cnVlLFxyXG4gICAgICAgICAgICBzeXNwYXJtX2dldF9leHRlbmRlZF90YWJsZXM6IHRydWUsXHJcbiAgICAgICAgICAgIHN5c3Bhcm1fa2V5d29yZHM6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGdyb3VwSWQgPSBmaWx0ZXJzTGlzdFF1ZXJ5LnJlcGxhY2UoLy4qPS8sIFwiXCIpO1xyXG5cclxuICAgICAgICBhd2FpdCBSRVFVRVNUX1VUSUxTLmZldGNoR3JvdXAoe3N5c19pZDogZ3JvdXBJZH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGVmYXVsdEdyb3VwOiB7ZGlzcGxheVZhbHVlOiByZXNbMF0ubmFtZSwgc3lzX2lkOiBncm91cElkfX0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgUkVRVUVTVF9VVElMUy5mZXRjaFRhYmxlRGF0YSh7dGFibGUsIHF1ZXJ5UGFyYW1zfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoVGFibGVEYXRhU3VjY2Vzc2VkKHtyZXN1bHQsIHByb3BlcnRpZXM6IHRoaXMucHJvcHN9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCEhcXVlcnkpXHJcbiAgICAgICAgICAgIFFVRVJZX1VUSUxTLmdlbmVyYXRlUXVlcnkoe3BheWxvYWQ6IHtjb25kaXRpb25zQXJyYXksIG9uU2VuZFF1ZXJ5LCBpc1NhdmUsIG9wZXJhdGlvbjogXCJydW5cIn19KTtcclxuXHJcbiAgICAgICAgUkVRVUVTVF9VVElMUy5mZXRjaEZpbHRlclRlbXBsYXRlcyh7dGFibGUsIHVzZXIsIGZpbHRlcjogZmlsdGVyc0xpc3RRdWVyeX0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB0aGlzLnNldFN0YXRlKHtmaWx0ZXJMaXN0OiByZXN9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGaWx0ZXJTYXZlZCA9ICh7aXNTYXZlZH0pID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0ZpbHRlclNhdmVkOiBpc1NhdmVkLCBpc1NhdmU6IGZhbHNlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICAgICAgaWYgKHByZXZQcm9wcy50YWJsZSAhPT0gdGhpcy5wcm9wcy50YWJsZSkge1xyXG4gICAgICAgICAgICBjb25zdCB7cXVlcnksIHRhYmxlLCBmaWx0ZXJzTGlzdFF1ZXJ5fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwSWQgPSBmaWx0ZXJzTGlzdFF1ZXJ5LnJlcGxhY2UoLy4qPS8sIFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRRdWVyeSh7cXVlcnk6IHF1ZXJ5fSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTogQm9vbGVhbihxdWVyeSksIGJyZWFkY3J1bWJzSXRlbXM6IFt7bGFiZWw6ICdBbGwnLCBjb25kaXRpb25JZDogJ2FsbCd9XX0pO1xyXG5cclxuICAgICAgICAgICAgUkVRVUVTVF9VVElMUy5mZXRjaEZpbHRlclRlbXBsYXRlcyh7dGFibGUsIGZpbHRlcjogZmlsdGVyc0xpc3RRdWVyeX0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB0aGlzLnNldFN0YXRlKHtmaWx0ZXJMaXN0OiByZXN9KSk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgYXdhaXQgUkVRVUVTVF9VVElMUy5mZXRjaEdyb3VwKHtzeXNfaWQ6IGdyb3VwSWR9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkZWZhdWx0R3JvdXA6IHtkaXNwbGF5VmFsdWU6IHJlc1swXS5uYW1lLCBzeXNfaWQ6IGdyb3VwSWR9fSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnF1ZXJ5ICE9PSBwcmV2UHJvcHMucXVlcnkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRRdWVyeSh7cXVlcnk6IHRoaXMucHJvcHMucXVlcnl9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmV2U3RhdGUucXVlcnkgIT09IHRoaXMuc3RhdGUucXVlcnkgfHwgcHJldlByb3BzLnRhYmxlICE9PSB0aGlzLnByb3BzLnRhYmxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHt0YWJsZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHN5c3Bhcm1fb3BlcmF0b3JzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3lzcGFybV9nZXRfZXh0ZW5kZWRfdGFibGVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3lzcGFybV9rZXl3b3JkczogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgUkVRVUVTVF9VVElMUy5mZXRjaFRhYmxlRGF0YSh7dGFibGUsIHF1ZXJ5UGFyYW1zfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaFRhYmxlRGF0YVN1Y2Nlc3NlZCh7cmVzdWx0LCBwcm9wZXJ0aWVzOiB0aGlzLnByb3BzfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByZXZTdGF0ZS5hZHZhbmNlZCAhPT0gdGhpcy5zdGF0ZS5hZHZhbmNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzRmlsdGVyT3BlbmVkOiB0aGlzLnN0YXRlLmFkdmFuY2VkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0ZpbHRlclNhdmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHt0YWJsZSwgdXNlcn0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICAgICAgUkVRVUVTVF9VVElMUy5mZXRjaEZpbHRlclRlbXBsYXRlcyh7dGFibGUsIHVzZXJ9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHRoaXMuc2V0U3RhdGUoe2ZpbHRlckxpc3Q6IHJlc30pKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNGaWx0ZXJTYXZlZDogZmFsc2V9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29uZGl0aW9uc0lEcyA9ICh7Y3VycmVudENvbmRpdGlvbklELCBnbG9iYWxDb25kaXRpb25JRH0pID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50Q29uZGl0aW9uSUQsIGdsb2JhbENvbmRpdGlvbklEfSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRRdWVyeSA9ICh7cXVlcnl9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSBxdWVyeSA/IHF1ZXJ5Py5zcGxpdCgvXFxefFxcXk9SLykubGVuZ3RoIDogMDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgICAgICBhY3RpdmU6IEJvb2xlYW4ocXVlcnkpLFxyXG4gICAgICAgICAgICBjb3VudFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWR2YW5jZWQgPSAodmFsdWUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWR2YW5jZWQ6IHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBhY3RpdmUsXHJcbiAgICAgICAgICAgIGFkdmFuY2VkLFxyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgaXNGaWx0ZXJPcGVuZWQsXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbnNBcnJheSxcclxuICAgICAgICAgICAgYnJlYWRjcnVtYnNJdGVtcyxcclxuICAgICAgICAgICAgaXNTYXZlLFxyXG4gICAgICAgICAgICBxdWVyeVRvU2F2ZSxcclxuICAgICAgICAgICAgZmlsdGVyTGlzdCxcclxuICAgICAgICAgICAgZGVmYXVsdEdyb3VwXHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge3RhYmxlLCB1c2VyfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiJWMlc1wiLCBcImNvbG9yOiBncmVlblwiLCBcIlJFQUNUIEZpbHRlciBDb25kaXRpb25zIEFycmF5XCIsIHRoaXMuc3RhdGUuY29uZGl0aW9uc0FycmF5KVxyXG5cclxuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IFthZHZhbmNlZCwgYWN0aXZlXS5zb21lKEJvb2xlYW4pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZWQtZmlsdGVyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVtcGxhdGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJUZW1wbGF0ZXMgc2V0UXVlcnk9e3RoaXMuc2V0UXVlcnl9IHNldEFkdmFuY2VkPXt0aGlzLnNldEFkdmFuY2VkfSBmaWx0ZXJMaXN0PXtmaWx0ZXJMaXN0fSB0YWJsZT17dGFibGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQXBwbHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xpY2tCdG4oe2FjdGlvbjogXCJhcHBseVF1ZXJ5XCIsIHBheWxvYWQ6IHt0eXBlOiBcInJ1blwifX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21TdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCJyZ2IoMTUsNjcsNTUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Zlci1ib3JkZXItY29sb3JcIjogXCJyZ2IoMTUsNjcsNTUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtYm9yZGVyLWNvbG9yXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0FjdGl2ZSAmJiA8QmFkZ2UgdGV4dD17YCR7Y291bnR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2lzRmlsdGVyT3BlbmVkID8gXCJmdW5uZWwtZmlsbFwiIDogXCJmdW5uZWxcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwQ29udGVudD1cIkZpbHRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jbGlja0J0bih7YWN0aW9uOiBcImZpbHRlclRvb2dsZVwifSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzd2YtZmlsdGVyLWNvbnRhaW5lclwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0taXMtY29sbGFwc2VkXCI6IGlzRmlsdGVyT3BlbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhZGNydW1ic1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyQnJlYWRjcnVtYnMgaXRlbXM9e2JyZWFkY3J1bWJzSXRlbXN9IGNsaWNrQnRuPXt0aGlzLmNsaWNrQnRufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIlNhdmVcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgc2l6ZT1cIm1kXCIgY3VzdG9tU3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwicmdiKDE3MiwxODAsMTgxKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Zlci1ib3JkZXItY29sb3JcIjogXCJyZ2IoMTcyLDE4MCwxODEpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZS1ib3JkZXItY29sb3JcIjogXCJyZ2IoMTcyLDE4MCwxODEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsaWNrQnRuKHthY3Rpb246IFwidG9vZ2xlU2F2ZVwifSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDbGVhciBhbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tU3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcInJnYigxNzIsMTgwLDE4MSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvdmVyLWJvcmRlci1jb2xvclwiOiBcInJnYigxNzIsMTgwLDE4MSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZS1ib3JkZXItY29sb3JcIjogXCJyZ2IoMTcyLDE4MCwxODEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsaWNrQnRuKHthY3Rpb246IFwiY2xlYXJBbGxcIn0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NhdmUgJiYgPEZpbHRlclNhdmVyIGlzRmlsdGVyU2F2ZWQ9e3RoaXMuaXNGaWx0ZXJTYXZlZH0gdGFibGU9e3RhYmxlfSBxdWVyeT17cXVlcnlUb1NhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9IGRlZmF1bHRHcm91cD17ZGVmYXVsdEdyb3VwfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZGl0aW9ucy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zQXJyYXkubWFwKChnbG9iYWxDb25kaXRpb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWxhdGVkQ29uZGl0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxDb25kaXRpb24ucmVsYXRlZENvbmRpdGlvbnMuZm9yRWFjaChjb25kID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZWRDb25kaXRpb25zLnB1c2goY29uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kLnJlbGF0ZWRDb25kaXRpb25zLmZvckVhY2goY29uZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlZENvbmRpdGlvbnMucHVzaChjb25kKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnbG9iYWwtY29uZGl0aW9uXCI6IHRydWUsIFwiZ2xvYmFsLWNvbmRpdGlvbnNfZmlyc3RcIjogaW5kZXggPT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggIT09IDAgJiYgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPk9SPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlZENvbmRpdGlvbnMubWFwKGNvbmRpdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25kaXRpb24tY29udGFpbmVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFpbGVkXCI6IGNvbmRpdGlvbi5mYWlsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX0ga2V5PXtjb25kaXRpb24uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyQ29uZGl0aW9uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uT2JqPXtjb25kaXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25JRD17Y29uZGl0aW9uLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsQ29uZGl0aW9uSUQ9e2dsb2JhbENvbmRpdGlvbi5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbENvbmRpdGlvbj17Z2xvYmFsQ29uZGl0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3JUeXBlPXtjb25kaXRpb24ub3BlcmF0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J0bj17dGhpcy5jbGlja0J0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENvbmRpdGlvbnNJRHM9e3RoaXMuZ2V0Q29uZGl0aW9uc0lEc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmRpdGlvbk9wdGlvbnM9e3RoaXMuc2V0Q29uZGl0aW9uT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17Y29uZGl0aW9uLmNvbmRpdGlvbk9wdGlvbnMuZmllbGRJdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYWxUYWJsZT17dGFibGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25zQXJyYXk9e2NvbmRpdGlvbnNBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1jcml0ZXJpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5vcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5ldyBDcml0ZXJpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsaWNrQnRuKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJhZGROZXdPcGVyYXRvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIl5OUVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb25kaXRpb25JRDogdGhpcy5zdGF0ZS5jdXJyZW50Q29uZGl0aW9uSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsQ29uZGl0aW9uSUQ6IHRoaXMuc3RhdGUuZ2xvYmFsQ29uZGl0aW9uSURcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5GaWx0ZXJDb25kaXRpb24uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdGFibGU6IFwiXCIsXHJcbiAgICBxdWVyeTogXCJcIixcclxuICAgIGFsbG93RmllbGRzOiBbXSxcclxuICAgIGJsb2NrRmllbGRzOiBbXSxcclxuICAgIHVzZXI6IFwiXCIsXHJcbiAgICBvcGVuZWQ6IGZhbHNlLFxyXG4gICAgb25TZW5kUXVlcnk6IG5vb3AsXHJcbiAgICBmaWx0ZXJzTGlzdFF1ZXJ5OiBcIlwiXHJcbn1cclxuXHJcbkZpbHRlckNvbmRpdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgICB0YWJsZTogcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcXVlcnk6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB1c2VyOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYmxvY2tGaWVsZHM6IHByb3BUeXBlcy5hcnJheSxcclxuICAgIGFsbG93RmllbGRzOiBwcm9wVHlwZXMuYXJyYXksXHJcbiAgICBvcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgb25TZW5kUXVlcnk6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgZmlsdGVyc0xpc3RRdWVyeTogcHJvcFR5cGVzLnN0cmluZ1xyXG59Il19