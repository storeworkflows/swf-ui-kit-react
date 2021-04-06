"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _FilterDropdown = _interopRequireDefault(require("./Components/FilterDropdown/FilterDropdown"));

var _FilterSaver = _interopRequireDefault(require("./Components/FilterSaver/FilterSaver"));

var _FilterBreadcrumbs = _interopRequireDefault(require("./Components/FilterBreadcrumbs/FilterBreadcrumbs"));

var _utils = require("./utils/utils");

var _index = require("../index");

var _ExpandDropdown = _interopRequireDefault(require("./Components/ExpandDropdown/ExpandDropdown"));

var _FilterConditionItem = _interopRequireDefault(require("./Components/FilterConditionItem/FilterConditionItem"));

var _FilterTemplates = _interopRequireDefault(require("./Components/FilterTemplates/FilterTemplates"));

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

var _FilterDropdownList = _interopRequireDefault(require("./Components/FilterDropdownList/FilterDropdownList"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    var _this$state5;

    var _this;

    _classCallCheck(this, FilterCondition);

    _this = _super.call(this, props);

    _this.fetchReferenceTableDataSuccessed = function (_ref) {
      var result = _ref.result,
          properties = _ref.properties;
    };

    _this.getClickedListIndex = function (_ref2) {
      var index = _ref2.index;

      _this.setState({
        clickedListIndex: index
      });
    };

    _this.fetchTableDataSuccessed = function (_ref3) {
      var result = _ref3.result,
          properties = _ref3.properties;
      var fieldsDataID = (0, _utils.generateID)();
      var query = properties.query,
          blockFields = properties.blockFields,
          allowFileds = properties.allowFileds;
      var fieldsDropdownData = (0, _utils.getDropdownFieldsItems)({
        tableFields: result.columns,
        index: fieldsDataID,
        blockFields: blockFields,
        allowFileds: allowFileds
      });
      var conditionsArray = [{
        id: (0, _utils.generateID)(),
        condition: "",
        operator: "",
        relatedConditions: [{
          id: (0, _utils.generateID)() + 1,
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

      if (query) {
        var position = 0;
        var copyQuery = query;

        if (copyQuery.indexOf('^EQ') > -1) {
          copyQuery = copyQuery.slice(0, copyQuery.indexOf('^EQ'));
        }

        while (true) {
          var operatorPosition = copyQuery.indexOf('^NQ', position);

          if (operatorPosition === -1) {
            conditionsArray[conditionsArray.length - 1].condition = copyQuery.slice(position);
            break;
          }

          conditionsArray[conditionsArray.length - 1].condition = copyQuery.slice(position, operatorPosition);
          conditionsArray.push({
            id: (0, _utils.generateID)() + operatorPosition,
            condition: '',
            operator: '^NQ',
            relatedConditions: [{
              id: (0, _utils.generateID)() + operatorPosition + 1,
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
        }

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
                id: (0, _utils.generateID)() + _operatorPosition,
                condition: '',
                operator: '^OR'
              });
              position = _operatorPosition + 3;
              lastOperator = '^OR';
            } else {
              globalCondition.relatedConditions.push({
                id: (0, _utils.generateID)() + _operatorPosition,
                condition: '',
                operator: '^',
                relatedConditions: []
              });
              position = _operatorPosition + 1;
              lastOperator = '^';
            }
          }
        });
        var operators = (0, _utils.getOperators)(result.columns);
        conditionsArray = conditionsArray.map(function (globalCond) {
          globalCond.relatedConditions = globalCond.relatedConditions.map(function (parentCond) {
            var params = {
              condition: parentCond.condition,
              operators: operators,
              tableFields: result.columns,
              globalID: globalCond.id,
              currentID: parentCond.id
            };

            var conditionOptions = _this.parseConditionValue(params);

            parentCond = _objectSpread(_objectSpread({}, parentCond), {}, {
              conditionOptions: conditionOptions
            });
            parentCond.relatedConditions = parentCond.relatedConditions.map(function (childCond) {
              var params = {
                condition: childCond.condition,
                operators: operators,
                tableFields: result.columns,
                globalID: globalCond.id,
                currentID: childCond.id
              };

              var conditionOptions = _this.parseConditionValue(params);

              return _objectSpread(_objectSpread({}, childCond), {}, {
                conditionOptions: conditionOptions
              });
            });
            return parentCond;
          });
          return globalCond;
        });
      }

      _this.setState({
        tableFields: result,
        conditionsArray: conditionsArray
      });
    };

    _this.setOperatorsArray = function (_ref4) {
      var result = _ref4.result;
    };

    _this.runButtonClicked = function () {
      var conditionsArray = _this.state.conditionsArray;
      var copyConditionArray = (0, _utils.clone)(conditionsArray);
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
      }); // FILTER_ACTIONS.QUERY_GENERATE.STARTED


      _this.generateQuery({
        operation: "run"
      });
    };

    _this.generateQuery = function (_ref5) {
      var operation = _ref5.operation;
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
            // dispatch(FILTER_ACTIONS.QUERY_GENERATE.FAILED, { globalConditionID: globalCond.id, currentConditionID: parentCond.id });
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
              // dispatch(FILTER_ACTIONS.QUERY_GENERATE.FAILED, { globalConditionID: globalCond.id, currentConditionID: childCond.id });
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
            // dispatch(FILTER_ACTIONS.QUERY_GENERATE.SUCCESSED, { value: resultQuery });
            _this.setState({
              breadcrumbsItems: breadcrumbsItems
            });

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

    _this.addNewOperator = function (_ref6) {
      var value = _ref6.value,
          currentConditionID = _ref6.currentConditionID,
          globalConditionID = _ref6.globalConditionID;
      var _this$state2 = _this.state,
          conditionsArray = _this$state2.conditionsArray,
          tableFields = _this$state2.tableFields;
      var newConditionsArray = conditionsArray;
      var globalConditionIndexInArr = conditionsArray.findIndex(function (cond) {
        return cond.id === globalConditionID;
      });
      var fieldsDataID = (0, _utils.generateID)();
      var _this$props = _this.props,
          blockFields = _this$props.blockFields,
          allowFields = _this$props.allowFields;
      var fieldsDropdownData = (0, _utils.getDropdownFieldsItems)({
        tableFields: tableFields.columns,
        index: fieldsDataID,
        blockFields: blockFields,
        allowFields: allowFields
      });

      switch (value) {
        case "^":
          newConditionsArray[globalConditionIndexInArr].relatedConditions.push({
            id: (0, _utils.generateID)(),
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

          var parentConditionOptions = _objectSpread({}, newConditionsArray[globalConditionIndexInArr].relatedConditions[currentConditionIndexInArr].conditionOptions);

          newConditionsArray[globalConditionIndexInArr].relatedConditions[currentConditionIndexInArr].relatedConditions.push({
            id: (0, _utils.generateID)(),
            condition: '',
            operator: value,
            conditionOptions: _objectSpread(_objectSpread({}, parentConditionOptions), {}, {
              operator: {
                operator: '',
                editior: ''
              },
              value: ''
            })
          });

          _this.setState({
            conditionsArray: newConditionsArray
          });

          break;

        case '^NQ':
          newConditionsArray.push({
            id: (0, _utils.generateID)(),
            condition: '',
            operator: value,
            relatedConditions: [{
              id: (0, _utils.generateID)() + 1,
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

    _this.clearAll = function (_ref7) {
      var value = _ref7.value;

      if (value === "delete-filter") {
        var tableFields = _this.state.tableFields;
        var fieldsDataID = (0, _utils.generateID)();
        var _this$props2 = _this.props,
            blockFields = _this$props2.blockFields,
            allowFileds = _this$props2.allowFileds;
        var fieldsDropdownData = (0, _utils.getDropdownFieldsItems)({
          tableFields: tableFields.columns,
          index: fieldsDataID,
          blockFields: blockFields,
          allowFileds: allowFileds
        });

        _this.setState({
          conditionsArray: [{
            id: (0, _utils.generateID)(),
            condition: '',
            operator: '',
            relatedConditions: [{
              id: (0, _utils.generateID)() + 1,
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

    _this.setConditionOptionsOperator = function (_ref8) {
      var value = _ref8.value,
          conditionOptions = _ref8.conditionOptions;
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

    _this.setConditionOptionsValue = function (_ref9) {
      var value = _ref9.value,
          conditionOptions = _ref9.conditionOptions,
          conditionOption = _ref9.conditionOption;
      var editor = conditionOptions.operator.editor;

      switch (editor) {
        case 'choice_multiple':
        case 'textarea':
          var copyValue = conditionOptions.value;
          copyValue = copyValue ? copyValue.split(',') : [];
          copyValue.indexOf(value) < 0 ? copyValue.push(value) : copyValue.splice(copyValue.indexOf(value), 1);
          copyValue = copyValue.join(',');
          conditionOptions.value = copyValue;
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
            conditionOptions.valueAdditionalData = (0, _utils.getTrendData)(value.value);
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

    _this.setConditionOptions = function (_ref10) {
      var value = _ref10.value,
          conditionOption = _ref10.conditionOption,
          currentConditionID = _ref10.currentConditionID,
          globalConditionID = _ref10.globalConditionID;
      var conditionsArray = _this.state.conditionsArray;
      var properCurrentConditionID = currentConditionID ? currentConditionID : _this.state.currentConditionID;
      var properGlobalConditionID = globalConditionID ? globalConditionID : _this.state.globalConditionID;
      var copyConditionArray = (0, _utils.clone)(conditionsArray);
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
          }); // nenada

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

    _this.setConditionOptionsValueAdditional = function (_ref11) {
      var value = _ref11.value,
          conditionOptions = _ref11.conditionOptions;
      conditionOptions.valueAdditionalData = value;
      return conditionOptions;
    };

    _this.fetchReferenceData = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(table, queryParams) {
        var endpoint, query, url, params;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                endpoint = "".concat(window.location.origin, "/api/now/table/").concat(table); //dev78490.service-now.com/

                query = queryParams ? (0, _utils.prepareQueryParams)(queryParams) : "";
                url = "".concat(endpoint, "?").concat(query);
                params = {
                  method: "GET"
                };
                _context.next = 6;
                return (0, _utils.fetchRequest)({
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

      return function (_x, _x2) {
        return _ref12.apply(this, arguments);
      };
    }();

    _this.fetchReferenceDataSuccessed = function (result) {
      var referenceFieldData = _this.state.referenceFieldData;
      var valueFields = result.map(function (field) {
        return {
          id: field.sys_id,
          label: field[referenceFieldData.field.reference_display_field],
          dropdown: "value"
        };
      });

      _this.setConditionOptions({
        value: valueFields,
        conditionOption: "valueAditionalData",
        currentConditionID: referenceFieldData.currentConditionID,
        globalConditionID: referenceFieldData.globalConditionID
      });
    };

    _this.setConditionOptionsFieldData = function (_ref13) {
      var conditionOptions = _ref13.conditionOptions,
          value = _ref13.value;
      var fieldsDataID = (0, _utils.generateID)();
      var newFieldsDropdownData = (0, _utils.getDropdownFieldsItems)({
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

    _this.getConditionsIDs = function (_ref14) {
      var currentConditionID = _ref14.currentConditionID,
          globalConditionID = _ref14.globalConditionID;

      _this.setState({
        currentConditionID: currentConditionID,
        globalConditionID: globalConditionID
      });
    };

    _this.setConditionOptionsField = function (_ref15) {
      var conditionOptions = _ref15.conditionOptions,
          value = _ref15.value;
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
      var _this$state4 = _this.state,
          labelArr = _this$state4.labelArr,
          currentConditionID = _this$state4.currentConditionID,
          globalConditionID = _this$state4.globalConditionID,
          conditionsArray = _this$state4.conditionsArray;
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
      clickedItem.dropdownClicked ? (0, _utils.fetchTableData)(clickedItem.table, queryParams).then(function (res) {
        items = _objectSpread(_objectSpread({}, items), {}, {
          result: res.columns
        });

        _this.setConditionOptions({
          value: items,
          globalConditionID: globalConditionID,
          currentConditionID: currentConditionID,
          conditionOption: "fieldsData"
        });
      }) : function () {
        return void 0;
      };
      var condArrClone = (0, _utils.clone)(conditionsArray);
      var globalConditionIndexInArr = condArrClone.findIndex(function (cond) {
        return cond.id === globalConditionID;
      });

      if (!clickedItem.dropdownClicked) {
        _this.setConditionOptions({
          value: items.selectedItems,
          conditionOption: "field"
        });
      } // {setConditionOptions}
      // let currentCondition = condArrClone.find(globalCondition => globalCondition.id === globalConditionID).relatedConditions.find(currentCondition => currentCondition.id === currentConditionID);
      // const currentConditionIndexInArr = condArrClone[globalConditionIndexInArr].relatedConditions.findIndex(cond => cond.id === currentConditionID);
      // if (currentConditionIndexInArr > -1) {
      //     currentCondition.conditionOptions.fieldItems = items.selectedItems;
      // } else {
      //     condArrClone[globalConditionIndexInArr].relatedConditions.forEach((cond) => {
      //         cond.relatedConditions.forEach((cond) => {
      //             if (cond.id === currentConditionID) {
      //                 cond.conditionOptions.fieldItems = items.selectedItems;
      //             }
      //         })
      //     })
      // }
      // this.setState({conditionsArray: condArrClone})
      // console.log(newCondArr, conditionsArray)

    };

    _this.breadcrumbItemClicked = function (_ref16) {
      var data = _ref16.data,
          operation = _ref16.operation;
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
          // let newBreadcrumbsItems = clone(breadcrumbsItems);
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

    _this.onOperatorClicked = function (item) {
      console.log(item);
    };

    _this.deleteCondition = function (_ref17) {
      var currentConditionID = _ref17.currentConditionID,
          globalConditionID = _ref17.globalConditionID;
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
        var fieldsDataID = (0, _utils.generateID)();
        var fieldsDropdownData = (0, _utils.getDropdownFieldsItems)({
          tableFields: tableFields.columns,
          index: fieldsDataID
        });

        _this.setState({
          conditionsArray: [{
            id: (0, _utils.generateID)(),
            condition: '',
            operator: '',
            relatedConditions: [{
              id: (0, _utils.generateID)() + 1,
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
    };

    _this.state = (_this$state5 = {
      isFilterCollapsed: true,
      referenceFieldData: {},
      conditionsArray: [],
      isSave: false,
      referenceTableFieldsData: {}
    }, _defineProperty(_this$state5, "isFilterCollapsed", true), _defineProperty(_this$state5, "breadcrumbsItems", [{
      label: 'All',
      conditionId: 'all'
    }]), _defineProperty(_this$state5, "queryToSave", ''), _defineProperty(_this$state5, "labelArr", []), _defineProperty(_this$state5, "alertData", {
      active: false,
      positive: true
    }), _defineProperty(_this$state5, "tableFields", {
      columns: {}
    }), _defineProperty(_this$state5, "operatorArr", []), _defineProperty(_this$state5, "clickedListIndex", null), _this$state5); // this.addNewOperator = this.addNewOperator.bind(this)

    _this.getValueAdditionalData = _utils.getValueAdditionalData.bind(_assertThisInitialized(_this));
    _this.parseConditionValue = _utils.parseConditionValue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FilterCondition, [{
    key: "componentDidMount",
    value: // getValueAdditionalData = ({ tableFields, editor, field, globalID, currentID }) => {
    //     let valueAdditionalData = [];
    //     switch (editor) {
    //         case 'choice_field_names':
    //         case 'glide_date_equivalent':
    //         case 'glide_date_comparative':
    //             for (let key in tableFields) {
    //                 if (tableFields[key].type === tableFields[field].type && JSON.stringify(tableFields[key]) !== JSON.stringify(tableFields[field])) {
    //                     if (editor === 'glide_date_equivalent') {
    //                         valueAdditionalData.push({ id: tableFields[key].name, label: tableFields[key].label, dropdown: 'value', type: 'glide_date_equivalent', index: '1' })
    //                     } else if (editor === 'glide_date_comparative') {
    //                         valueAdditionalData.push({ id: tableFields[key].name, label: tableFields[key].label, dropdown: 'value', type: 'glide_date_comparative', index: '3' })
    //                     } else {
    //                         valueAdditionalData.push({ id: tableFields[key].name, label: tableFields[key].label, dropdown: 'value' })
    //                     }
    //                 }
    //             }
    //             break;
    //         case 'choice':
    //         case 'choice_multiple':
    //             valueAdditionalData = tableFields[field].choices.map(choice => ({ id: choice.value, label: choice.label, dropdown: 'value' }));
    //             break;
    //         case 'choice_dynamic':
    //             valueAdditionalData = tableFields[field].dynamic_choices.map(choice => ({ id: choice.value, label: choice.label, dropdown: 'value' }));
    //             break;
    //         case 'reference':
    //             const queryParams = {
    //                 sysparm_fields: `${tableFields[field].reference_display_field},sys_id`,
    //                 sysparm_query: `nameISNOTEMPTY`
    //             }
    //             this.fetchReferenceData(tableFields[field].reference, queryParams)
    //                 .then(res => {
    //                     this.fetchReferenceDataSuccessed(res)
    //                 })
    //             this.setState({referenceFieldData: {
    //                 field: tableFields[field],
    //                 currentConditionID: currentID,
    //                 globalConditionID: globalID
    //             }})
    //             break;
    //     }
    //     return valueAdditionalData;
    // }
    function componentDidMount() {
      var _this2 = this;

      // fetchTableData
      var table = this.props.table;
      var queryParams = {
        sysparm_operators: true,
        sysparm_get_extended_tables: true,
        sysparm_keywords: true
      };
      (0, _utils.fetchTableData)(table, queryParams).then(function (result) {
        _this2.fetchTableDataSuccessed({
          result: result,
          properties: _this2.props
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state6 = this.state,
          isFilterCollapsed = _this$state6.isFilterCollapsed,
          conditionsArray = _this$state6.conditionsArray,
          tableFields = _this$state6.tableFields,
          referenceTableFieldsData = _this$state6.referenceTableFieldsData,
          labelArr = _this$state6.labelArr,
          operatorArr = _this$state6.operatorArr,
          breadcrumbsItems = _this$state6.breadcrumbsItems,
          isSave = _this$state6.isSave;
      var _this$props3 = this.props,
          table = _this$props3.table,
          user = _this$props3.user;
      var columns = tableFields.columns;
      var columnsArr = Object.values(columns).sort(function (a, b) {
        return a.label < b.label ? -1 : 0;
      });
      columnsArr.length && (columnsArr = columnsArr.map(function (column) {
        return _objectSpread(_objectSpread({}, column), {}, {
          id: column.name
        });
      }));
      console.log("%c%s", "color: green", "REACT Filter Condition State", this.state);
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "collapsed-filter-header",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
            icon: isFilterCollapsed ? "funnel-fill" : "funnel",
            size: "md",
            tooltipContent: "Filter",
            variant: "tertiary",
            onClick: function onClick() {
              return _this3.setState({
                isFilterCollapsed: !isFilterCollapsed
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
            "filter-container": true,
            "--is-collapsed": isFilterCollapsed
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
                    label: "Run",
                    variant: "primary",
                    size: "md",
                    onClick: function onClick() {
                      return _this3.runButtonClicked();
                    },
                    customStyle: {
                      "border-color": "rgb(15,67,55)",
                      "hover-border-color": "rgb(15,67,55)",
                      "active-border-color": "rgb(15,67,55)"
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
                    onClick: this.saveToogle
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
                      return _this3.clearAll({
                        value: "delete-filter"
                      });
                    }
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "templates",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterTemplates["default"], {})
              })]
            }), isSave && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterSaver["default"], {
              table: table,
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
                        addNewOperator: _this3.addNewOperator,
                        deleteCondition: _this3.deleteCondition,
                        onItemClicked: _this3.onItemClicked,
                        referenceTableFieldsData: referenceTableFieldsData,
                        labelArr: labelArr,
                        operatorArr: operatorArr,
                        getConditionsIDs: _this3.getConditionsIDs,
                        getClickedListIndex: _this3.getClickedListIndex,
                        onOperatorClicked: _this3.onOperatorClicked,
                        setConditionOptions: _this3.setConditionOptions,
                        fetchReferenceDataSuccessed: _this3.fetchReferenceDataSuccessed
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
                className: "button",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
                  label: "New Criteria",
                  variant: "secondary",
                  size: "md",
                  onClick: function onClick() {
                    return _this3.addNewOperator({
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
  collapsed: true,
  onSendQuery: function onSendQuery() {
    return void 0;
  }
};
FilterCondition.propTypes = {
  table: _propTypes["default"].string,
  query: _propTypes["default"].string,
  user: _propTypes["default"].string,
  blockFields: _propTypes["default"].array,
  allowFields: _propTypes["default"].array,
  collapsed: _propTypes["default"].bool,
  onSendQuery: _propTypes["default"].func
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0ZpbHRlckNvbmRpdGlvbkJ1aWxkZXIuanMiXSwibmFtZXMiOlsiRmlsdGVyQ29uZGl0aW9uIiwicHJvcHMiLCJmZXRjaFJlZmVyZW5jZVRhYmxlRGF0YVN1Y2Nlc3NlZCIsInJlc3VsdCIsInByb3BlcnRpZXMiLCJnZXRDbGlja2VkTGlzdEluZGV4IiwiaW5kZXgiLCJzZXRTdGF0ZSIsImNsaWNrZWRMaXN0SW5kZXgiLCJmZXRjaFRhYmxlRGF0YVN1Y2Nlc3NlZCIsImZpZWxkc0RhdGFJRCIsInF1ZXJ5IiwiYmxvY2tGaWVsZHMiLCJhbGxvd0ZpbGVkcyIsImZpZWxkc0Ryb3Bkb3duRGF0YSIsInRhYmxlRmllbGRzIiwiY29sdW1ucyIsImNvbmRpdGlvbnNBcnJheSIsImlkIiwiY29uZGl0aW9uIiwib3BlcmF0b3IiLCJyZWxhdGVkQ29uZGl0aW9ucyIsImNvbmRpdGlvbk9wdGlvbnMiLCJlZGl0aW9yIiwiZmllbGQiLCJ2YWx1ZSIsImZpZWxkc0RhdGEiLCJpdGVtcyIsInBvc2l0aW9uIiwiY29weVF1ZXJ5IiwiaW5kZXhPZiIsInNsaWNlIiwib3BlcmF0b3JQb3NpdGlvbiIsImxlbmd0aCIsInB1c2giLCJtYXAiLCJnbG9iYWxDb25kaXRpb24iLCJsYXN0T3BlcmF0b3IiLCJvcGVyYXRvcnMiLCJnbG9iYWxDb25kIiwicGFyZW50Q29uZCIsInBhcmFtcyIsImdsb2JhbElEIiwiY3VycmVudElEIiwicGFyc2VDb25kaXRpb25WYWx1ZSIsImNoaWxkQ29uZCIsInNldE9wZXJhdG9yc0FycmF5IiwicnVuQnV0dG9uQ2xpY2tlZCIsInN0YXRlIiwiY29weUNvbmRpdGlvbkFycmF5IiwiZmFpbGVkIiwiZ2VuZXJhdGVRdWVyeSIsIm9wZXJhdGlvbiIsImlzU2F2ZSIsIm9uU2VuZFF1ZXJ5IiwicmVzdWx0UXVlcnkiLCJlcnJvciIsImJyZWFkY3J1bWJzSXRlbXMiLCJsYWJlbCIsImNvbmRpdGlvbklkIiwiZm9yRWFjaCIsImJyZWFkY3J1bWJJdGVtIiwiZ2xvYmFsQ29uZGl0aW9uSWQiLCJnZW5lcmF0ZWRDb25kaXRpb24iLCJjdXJDb25kaXRpb24iLCJjb25kaXRpb25RdWVyeSIsInRyaW0iLCJxdWVyeVRvU2F2ZSIsImFkZE5ld09wZXJhdG9yIiwiY3VycmVudENvbmRpdGlvbklEIiwiZ2xvYmFsQ29uZGl0aW9uSUQiLCJuZXdDb25kaXRpb25zQXJyYXkiLCJnbG9iYWxDb25kaXRpb25JbmRleEluQXJyIiwiZmluZEluZGV4IiwiY29uZCIsImFsbG93RmllbGRzIiwiY3VycmVudENvbmRpdGlvbkluZGV4SW5BcnIiLCJwYXJlbnRDb25kaXRpb25PcHRpb25zIiwiY2xlYXJBbGwiLCJzZXRDb25kaXRpb25PcHRpb25zT3BlcmF0b3IiLCJhY3RpdmVGaWVsZCIsImFjdGl2ZUZpZWxkc0RhdGEiLCJ2YWx1ZUFkZGl0aW9uYWxEYXRhIiwiZ2V0VmFsdWVBZGRpdGlvbmFsRGF0YSIsImVkaXRvciIsInNldENvbmRpdGlvbk9wdGlvbnNWYWx1ZSIsImNvbmRpdGlvbk9wdGlvbiIsImNvcHlWYWx1ZSIsInNwbGl0Iiwic3BsaWNlIiwiam9pbiIsInNldENvbmRpdGlvbk9wdGlvbnMiLCJwcm9wZXJDdXJyZW50Q29uZGl0aW9uSUQiLCJwcm9wZXJHbG9iYWxDb25kaXRpb25JRCIsImdsb2JhbENvbmRpdGlvbkluQXJySW5kIiwiY3VycmVudENvbmRpdGlvbkluQXJySW5kIiwiY3VycmVudENvbmRpdGlvbkluQXJyIiwiY29weUNvbmRpdGlvbk9wdGlvbnMiLCJwYXJlbnRJbmQiLCJjaGlsZEluZCIsInNldENvbmRpdGlvbk9wdGlvbnNGaWVsZCIsInNldENvbmRpdGlvbk9wdGlvbnNGaWVsZERhdGEiLCJzZXRDb25kaXRpb25PcHRpb25zVmFsdWVBZGRpdGlvbmFsIiwiZmV0Y2hSZWZlcmVuY2VEYXRhIiwidGFibGUiLCJxdWVyeVBhcmFtcyIsImVuZHBvaW50Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJ1cmwiLCJtZXRob2QiLCJmZXRjaFJlZmVyZW5jZURhdGFTdWNjZXNzZWQiLCJyZWZlcmVuY2VGaWVsZERhdGEiLCJ2YWx1ZUZpZWxkcyIsInN5c19pZCIsInJlZmVyZW5jZV9kaXNwbGF5X2ZpZWxkIiwiZHJvcGRvd24iLCJuZXdGaWVsZHNEcm9wZG93bkRhdGEiLCJsaXN0SW5kZXgiLCJkZWxldGVkRmllbGRzRGF0YSIsImRhdGEiLCJrZXkiLCJmaWVsZEl0ZW1zIiwic2VsZWN0ZWRJdGVtcyIsImdldENvbmRpdGlvbnNJRHMiLCJjdXJyZW50RmllbGRzRGF0YSIsImN1cnJlbnRWYWx1ZSIsImN1cnJlbnRWYWx1ZUluZGV4Iiwib3BlcmF0b3JzQXJyYXkiLCJvbkl0ZW1DbGlja2VkIiwiaXRlbSIsImNsaWNrZWRJdGVtIiwiaXNSZWZlcmVuY2VDbGlja2VkIiwibGFiZWxBcnIiLCJzeXNwYXJtX29wZXJhdG9ycyIsInN5c3Bhcm1fZ2V0X2V4dGVuZGVkX3RhYmxlcyIsInN5c3Bhcm1fa2V5d29yZHMiLCJpdGVtc0FyciIsImRyb3Bkb3duQ2xpY2tlZCIsInRoZW4iLCJyZXMiLCJjb25kQXJyQ2xvbmUiLCJicmVhZGNydW1iSXRlbUNsaWNrZWQiLCJpdGVtSW5kZXgiLCJicmVhZGNydW1iIiwiZGVsZXRlQ29uZGl0aW9uIiwiZGVsZXRlZEl0ZW1zIiwib25PcGVyYXRvckNsaWNrZWQiLCJjb25zb2xlIiwibG9nIiwicGF0aCIsImluZGV4VG9EZWxldGUiLCJwSW5kZXgiLCJjaEluZGV4Iiwic2F2ZVRvb2dsZSIsImlzRmlsdGVyQ29sbGFwc2VkIiwicmVmZXJlbmNlVGFibGVGaWVsZHNEYXRhIiwiYWN0aXZlIiwicG9zaXRpdmUiLCJiaW5kIiwib3BlcmF0b3JBcnIiLCJ1c2VyIiwiY29sdW1uc0FyciIsIk9iamVjdCIsInZhbHVlcyIsInNvcnQiLCJhIiwiYiIsImNvbHVtbiIsIm5hbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImNvbGxhcHNlZCIsInByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiYm9vbCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7OztBQUNqQiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBMkJuQkMsZ0NBM0JtQixHQTJCZ0IsZ0JBQTBCO0FBQUEsVUFBeEJDLE1BQXdCLFFBQXhCQSxNQUF3QjtBQUFBLFVBQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7QUFFNUQsS0E3QmtCOztBQUFBLFVBZ0NuQkMsbUJBaENtQixHQWdDRyxpQkFBYTtBQUFBLFVBQVhDLEtBQVcsU0FBWEEsS0FBVzs7QUFDL0IsWUFBS0MsUUFBTCxDQUFjO0FBQUNDLFFBQUFBLGdCQUFnQixFQUFFRjtBQUFuQixPQUFkO0FBQ0gsS0FsQ2tCOztBQUFBLFVBcUNuQkcsdUJBckNtQixHQXFDTyxpQkFBMEI7QUFBQSxVQUF4Qk4sTUFBd0IsU0FBeEJBLE1BQXdCO0FBQUEsVUFBaEJDLFVBQWdCLFNBQWhCQSxVQUFnQjtBQUNoRCxVQUFJTSxZQUFZLEdBQUcsd0JBQW5CO0FBRGdELFVBRXhDQyxLQUZ3QyxHQUVKUCxVQUZJLENBRXhDTyxLQUZ3QztBQUFBLFVBRWpDQyxXQUZpQyxHQUVKUixVQUZJLENBRWpDUSxXQUZpQztBQUFBLFVBRXBCQyxXQUZvQixHQUVKVCxVQUZJLENBRXBCUyxXQUZvQjtBQUdoRCxVQUFJQyxrQkFBa0IsR0FBRyxtQ0FBdUI7QUFBRUMsUUFBQUEsV0FBVyxFQUFFWixNQUFNLENBQUNhLE9BQXRCO0FBQStCVixRQUFBQSxLQUFLLEVBQUVJLFlBQXRDO0FBQW9ERSxRQUFBQSxXQUFXLEVBQVhBLFdBQXBEO0FBQWlFQyxRQUFBQSxXQUFXLEVBQVhBO0FBQWpFLE9BQXZCLENBQXpCO0FBQ0EsVUFBSUksZUFBZSxHQUFHLENBQ2xCO0FBQ0lDLFFBQUFBLEVBQUUsRUFBRSx3QkFEUjtBQUVJQyxRQUFBQSxTQUFTLEVBQUUsRUFGZjtBQUdJQyxRQUFBQSxRQUFRLEVBQUUsRUFIZDtBQUlJQyxRQUFBQSxpQkFBaUIsRUFBRSxDQUNmO0FBQ0lILFVBQUFBLEVBQUUsRUFBRSwyQkFBZSxDQUR2QjtBQUVJQyxVQUFBQSxTQUFTLEVBQUUsRUFGZjtBQUdJQyxVQUFBQSxRQUFRLEVBQUUsRUFIZDtBQUlJRSxVQUFBQSxnQkFBZ0IsRUFBRTtBQUNkRixZQUFBQSxRQUFRLEVBQUU7QUFDTkEsY0FBQUEsUUFBUSxFQUFFLEVBREo7QUFFTkcsY0FBQUEsT0FBTyxFQUFFO0FBRkgsYUFESTtBQUtkQyxZQUFBQSxLQUFLLEVBQUUsRUFMTztBQU1kQyxZQUFBQSxLQUFLLEVBQUUsRUFOTztBQU9kQyxZQUFBQSxVQUFVLHNCQUNMaEIsWUFESyxFQUNVUCxNQUFNLENBQUNhLE9BRGpCLENBUEk7QUFVZEYsWUFBQUEsa0JBQWtCLEVBQUUsQ0FDaEI7QUFDSWEsY0FBQUEsS0FBSyxFQUFFYjtBQURYLGFBRGdCO0FBVk4sV0FKdEI7QUFvQklPLFVBQUFBLGlCQUFpQixFQUFFO0FBcEJ2QixTQURlO0FBSnZCLE9BRGtCLENBQXRCOztBQStCQSxVQUFJVixLQUFKLEVBQVc7QUFDUCxZQUFJaUIsUUFBUSxHQUFHLENBQWY7QUFDQSxZQUFJQyxTQUFTLEdBQUdsQixLQUFoQjs7QUFDQSxZQUFJa0IsU0FBUyxDQUFDQyxPQUFWLENBQWtCLEtBQWxCLElBQTJCLENBQUMsQ0FBaEMsRUFBbUM7QUFDL0JELFVBQUFBLFNBQVMsR0FBR0EsU0FBUyxDQUFDRSxLQUFWLENBQWdCLENBQWhCLEVBQW1CRixTQUFTLENBQUNDLE9BQVYsQ0FBa0IsS0FBbEIsQ0FBbkIsQ0FBWjtBQUNIOztBQUVELGVBQU8sSUFBUCxFQUFhO0FBQ1QsY0FBSUUsZ0JBQWdCLEdBQUdILFNBQVMsQ0FBQ0MsT0FBVixDQUFrQixLQUFsQixFQUF5QkYsUUFBekIsQ0FBdkI7O0FBQ0EsY0FBSUksZ0JBQWdCLEtBQUssQ0FBQyxDQUExQixFQUE2QjtBQUN6QmYsWUFBQUEsZUFBZSxDQUFDQSxlQUFlLENBQUNnQixNQUFoQixHQUF5QixDQUExQixDQUFmLENBQTRDZCxTQUE1QyxHQUF3RFUsU0FBUyxDQUFDRSxLQUFWLENBQWdCSCxRQUFoQixDQUF4RDtBQUNBO0FBQ0g7O0FBQ0RYLFVBQUFBLGVBQWUsQ0FBQ0EsZUFBZSxDQUFDZ0IsTUFBaEIsR0FBeUIsQ0FBMUIsQ0FBZixDQUE0Q2QsU0FBNUMsR0FBd0RVLFNBQVMsQ0FBQ0UsS0FBVixDQUFnQkgsUUFBaEIsRUFBMEJJLGdCQUExQixDQUF4RDtBQUNBZixVQUFBQSxlQUFlLENBQUNpQixJQUFoQixDQUFxQjtBQUFFaEIsWUFBQUEsRUFBRSxFQUFFLDJCQUFlYyxnQkFBckI7QUFBdUNiLFlBQUFBLFNBQVMsRUFBRSxFQUFsRDtBQUFzREMsWUFBQUEsUUFBUSxFQUFFLEtBQWhFO0FBQXVFQyxZQUFBQSxpQkFBaUIsRUFBRSxDQUFDO0FBQUVILGNBQUFBLEVBQUUsRUFBRSwyQkFBZWMsZ0JBQWYsR0FBa0MsQ0FBeEM7QUFBMkNiLGNBQUFBLFNBQVMsRUFBRSxFQUF0RDtBQUEwREMsY0FBQUEsUUFBUSxFQUFFLEVBQXBFO0FBQXdFRSxjQUFBQSxnQkFBZ0IsRUFBRTtBQUFFRixnQkFBQUEsUUFBUSxFQUFFO0FBQUVBLGtCQUFBQSxRQUFRLEVBQUUsRUFBWjtBQUFnQkcsa0JBQUFBLE9BQU8sRUFBRTtBQUF6QixpQkFBWjtBQUEyQ0MsZ0JBQUFBLEtBQUssRUFBRSxFQUFsRDtBQUFzREMsZ0JBQUFBLEtBQUssRUFBRSxFQUE3RDtBQUFpRUMsZ0JBQUFBLFVBQVUsc0JBQUtoQixZQUFMLEVBQW9CUCxNQUFNLENBQUNhLE9BQTNCLENBQTNFO0FBQWlIRixnQkFBQUEsa0JBQWtCLEVBQUUsQ0FBQztBQUFFYSxrQkFBQUEsS0FBSyxFQUFFYjtBQUFULGlCQUFEO0FBQXJJLGVBQTFGO0FBQWtRTyxjQUFBQSxpQkFBaUIsRUFBRTtBQUFyUixhQUFEO0FBQTFGLFdBQXJCO0FBQ0FPLFVBQUFBLFFBQVEsR0FBR0ksZ0JBQWdCLEdBQUcsQ0FBOUI7QUFDSDs7QUFDRGYsUUFBQUEsZUFBZSxDQUFDa0IsR0FBaEIsQ0FBb0IsVUFBQ0MsZUFBRCxFQUFxQjtBQUNyQyxjQUFJUixRQUFRLEdBQUcsQ0FBZjtBQUNBLGNBQUlTLFlBQUo7O0FBQ0EsaUJBQU8sSUFBUCxFQUFhO0FBQ1QsZ0JBQUlMLGlCQUFnQixHQUFHSSxlQUFlLENBQUNqQixTQUFoQixDQUEwQlcsT0FBMUIsQ0FBa0MsR0FBbEMsRUFBdUNGLFFBQXZDLENBQXZCOztBQUNBLGdCQUFJSSxpQkFBZ0IsS0FBSyxDQUFDLENBQTFCLEVBQTZCO0FBQ3pCLHNCQUFRSyxZQUFSO0FBQ0kscUJBQUssS0FBTDtBQUNJRCxrQkFBQUEsZUFBZSxDQUFDZixpQkFBaEIsQ0FBa0NlLGVBQWUsQ0FBQ2YsaUJBQWhCLENBQWtDWSxNQUFsQyxHQUEyQyxDQUE3RSxFQUFnRlosaUJBQWhGLENBQWtHZSxlQUFlLENBQUNmLGlCQUFoQixDQUFrQ2UsZUFBZSxDQUFDZixpQkFBaEIsQ0FBa0NZLE1BQWxDLEdBQTJDLENBQTdFLEVBQWdGWixpQkFBaEYsQ0FBa0dZLE1BQWxHLEdBQTJHLENBQTdNLEVBQWdOZCxTQUFoTixHQUE0TmlCLGVBQWUsQ0FBQ2pCLFNBQWhCLENBQTBCWSxLQUExQixDQUFnQ0gsUUFBaEMsQ0FBNU47QUFDQTs7QUFDSjtBQUNJUSxrQkFBQUEsZUFBZSxDQUFDZixpQkFBaEIsQ0FBa0NlLGVBQWUsQ0FBQ2YsaUJBQWhCLENBQWtDWSxNQUFsQyxHQUEyQyxDQUE3RSxFQUFnRmQsU0FBaEYsR0FBNEZpQixlQUFlLENBQUNqQixTQUFoQixDQUEwQlksS0FBMUIsQ0FBZ0NILFFBQWhDLENBQTVGO0FBTFI7O0FBT0E7QUFDSDs7QUFDRCxvQkFBUVMsWUFBUjtBQUNJLG1CQUFLLEtBQUw7QUFDSUQsZ0JBQUFBLGVBQWUsQ0FBQ2YsaUJBQWhCLENBQWtDZSxlQUFlLENBQUNmLGlCQUFoQixDQUFrQ1ksTUFBbEMsR0FBMkMsQ0FBN0UsRUFBZ0ZaLGlCQUFoRixDQUFrR2UsZUFBZSxDQUFDZixpQkFBaEIsQ0FBa0NlLGVBQWUsQ0FBQ2YsaUJBQWhCLENBQWtDWSxNQUFsQyxHQUEyQyxDQUE3RSxFQUFnRlosaUJBQWhGLENBQWtHWSxNQUFsRyxHQUEyRyxDQUE3TSxFQUFnTmQsU0FBaE4sR0FBNE5pQixlQUFlLENBQUNqQixTQUFoQixDQUEwQlksS0FBMUIsQ0FBZ0NILFFBQWhDLEVBQTBDSSxpQkFBMUMsQ0FBNU47QUFDQTs7QUFDSjtBQUNJSSxnQkFBQUEsZUFBZSxDQUFDZixpQkFBaEIsQ0FBa0NlLGVBQWUsQ0FBQ2YsaUJBQWhCLENBQWtDWSxNQUFsQyxHQUEyQyxDQUE3RSxFQUFnRmQsU0FBaEYsR0FBNEZpQixlQUFlLENBQUNqQixTQUFoQixDQUEwQlksS0FBMUIsQ0FBZ0NILFFBQWhDLEVBQTBDSSxpQkFBMUMsQ0FBNUY7QUFMUjs7QUFRQSxnQkFBSUEsaUJBQWdCLEtBQUtILFNBQVMsQ0FBQ0MsT0FBVixDQUFrQixLQUFsQixFQUF5QkYsUUFBekIsQ0FBekIsRUFBNkQ7QUFDekRRLGNBQUFBLGVBQWUsQ0FBQ2YsaUJBQWhCLENBQWtDZSxlQUFlLENBQUNmLGlCQUFoQixDQUFrQ1ksTUFBbEMsR0FBMkMsQ0FBN0UsRUFBZ0ZaLGlCQUFoRixDQUFrR2EsSUFBbEcsQ0FBdUc7QUFBRWhCLGdCQUFBQSxFQUFFLEVBQUUsMkJBQWVjLGlCQUFyQjtBQUF1Q2IsZ0JBQUFBLFNBQVMsRUFBRSxFQUFsRDtBQUFzREMsZ0JBQUFBLFFBQVEsRUFBRTtBQUFoRSxlQUF2RztBQUNBUSxjQUFBQSxRQUFRLEdBQUdJLGlCQUFnQixHQUFHLENBQTlCO0FBQ0FLLGNBQUFBLFlBQVksR0FBRyxLQUFmO0FBQ0gsYUFKRCxNQUlPO0FBQ0hELGNBQUFBLGVBQWUsQ0FBQ2YsaUJBQWhCLENBQWtDYSxJQUFsQyxDQUF1QztBQUFFaEIsZ0JBQUFBLEVBQUUsRUFBRSwyQkFBZWMsaUJBQXJCO0FBQXVDYixnQkFBQUEsU0FBUyxFQUFFLEVBQWxEO0FBQXNEQyxnQkFBQUEsUUFBUSxFQUFFLEdBQWhFO0FBQXFFQyxnQkFBQUEsaUJBQWlCLEVBQUU7QUFBeEYsZUFBdkM7QUFDQU8sY0FBQUEsUUFBUSxHQUFHSSxpQkFBZ0IsR0FBRyxDQUE5QjtBQUNBSyxjQUFBQSxZQUFZLEdBQUcsR0FBZjtBQUNIO0FBQ0o7QUFDSixTQWpDRDtBQW1DQSxZQUFJQyxTQUFTLEdBQUcseUJBQWFuQyxNQUFNLENBQUNhLE9BQXBCLENBQWhCO0FBQ0FDLFFBQUFBLGVBQWUsR0FBR0EsZUFBZSxDQUFDa0IsR0FBaEIsQ0FBb0IsVUFBQUksVUFBVSxFQUFJO0FBQ2hEQSxVQUFBQSxVQUFVLENBQUNsQixpQkFBWCxHQUErQmtCLFVBQVUsQ0FBQ2xCLGlCQUFYLENBQTZCYyxHQUE3QixDQUFpQyxVQUFBSyxVQUFVLEVBQUk7QUFFMUUsZ0JBQUlDLE1BQU0sR0FBRztBQUFFdEIsY0FBQUEsU0FBUyxFQUFFcUIsVUFBVSxDQUFDckIsU0FBeEI7QUFBbUNtQixjQUFBQSxTQUFTLEVBQVRBLFNBQW5DO0FBQThDdkIsY0FBQUEsV0FBVyxFQUFFWixNQUFNLENBQUNhLE9BQWxFO0FBQTJFMEIsY0FBQUEsUUFBUSxFQUFFSCxVQUFVLENBQUNyQixFQUFoRztBQUFvR3lCLGNBQUFBLFNBQVMsRUFBRUgsVUFBVSxDQUFDdEI7QUFBMUgsYUFBYjs7QUFDQSxnQkFBSUksZ0JBQWdCLEdBQUcsTUFBS3NCLG1CQUFMLENBQXlCSCxNQUF6QixDQUF2Qjs7QUFDQUQsWUFBQUEsVUFBVSxtQ0FDSEEsVUFERztBQUVObEIsY0FBQUEsZ0JBQWdCLEVBQWhCQTtBQUZNLGNBQVY7QUFLQWtCLFlBQUFBLFVBQVUsQ0FBQ25CLGlCQUFYLEdBQStCbUIsVUFBVSxDQUFDbkIsaUJBQVgsQ0FBNkJjLEdBQTdCLENBQWlDLFVBQUFVLFNBQVMsRUFBSTtBQUV6RSxrQkFBSUosTUFBTSxHQUFHO0FBQUV0QixnQkFBQUEsU0FBUyxFQUFFMEIsU0FBUyxDQUFDMUIsU0FBdkI7QUFBa0NtQixnQkFBQUEsU0FBUyxFQUFUQSxTQUFsQztBQUE2Q3ZCLGdCQUFBQSxXQUFXLEVBQUVaLE1BQU0sQ0FBQ2EsT0FBakU7QUFBMEUwQixnQkFBQUEsUUFBUSxFQUFFSCxVQUFVLENBQUNyQixFQUEvRjtBQUFtR3lCLGdCQUFBQSxTQUFTLEVBQUVFLFNBQVMsQ0FBQzNCO0FBQXhILGVBQWI7O0FBQ0Esa0JBQUlJLGdCQUFnQixHQUFHLE1BQUtzQixtQkFBTCxDQUF5QkgsTUFBekIsQ0FBdkI7O0FBQ0EscURBQ09JLFNBRFA7QUFFSXZCLGdCQUFBQSxnQkFBZ0IsRUFBaEJBO0FBRko7QUFJSCxhQVI4QixDQUEvQjtBQVNBLG1CQUFPa0IsVUFBUDtBQUNILFdBbkI4QixDQUEvQjtBQW9CQSxpQkFBT0QsVUFBUDtBQUNILFNBdEJpQixDQUFsQjtBQXVCSDs7QUFDRCxZQUFLaEMsUUFBTCxDQUFjO0FBQ1ZRLFFBQUFBLFdBQVcsRUFBRVosTUFESDtBQUVWYyxRQUFBQSxlQUFlLEVBQWZBO0FBRlUsT0FBZDtBQUlILEtBekprQjs7QUFBQSxVQTJKbkI2QixpQkEzSm1CLEdBMkpDLGlCQUFjO0FBQUEsVUFBWjNDLE1BQVksU0FBWkEsTUFBWTtBQUVqQyxLQTdKa0I7O0FBQUEsVUErSm5CNEMsZ0JBL0ptQixHQStKQSxZQUFNO0FBQUEsVUFDYjlCLGVBRGEsR0FDTyxNQUFLK0IsS0FEWixDQUNiL0IsZUFEYTtBQUVyQixVQUFJZ0Msa0JBQWtCLEdBQUcsa0JBQU1oQyxlQUFOLENBQXpCO0FBQ0FnQyxNQUFBQSxrQkFBa0IsR0FBR0Esa0JBQWtCLENBQUNkLEdBQW5CLENBQXVCLFVBQUFJLFVBQVUsRUFBSTtBQUN0REEsUUFBQUEsVUFBVSxDQUFDbEIsaUJBQVgsQ0FBNkJjLEdBQTdCLENBQWlDLFVBQUFLLFVBQVUsRUFBSTtBQUMzQ0EsVUFBQUEsVUFBVSxDQUFDVSxNQUFYLEdBQW9CLEtBQXBCO0FBQ0FWLFVBQUFBLFVBQVUsQ0FBQ25CLGlCQUFYLENBQTZCYyxHQUE3QixDQUFpQyxVQUFBVSxTQUFTLEVBQUk7QUFDMUNBLFlBQUFBLFNBQVMsQ0FBQ0ssTUFBVixHQUFtQixLQUFuQjtBQUNBLG1CQUFPTCxTQUFQO0FBQ0gsV0FIRDtBQUlBLGlCQUFPTCxVQUFQO0FBQ0gsU0FQRDtBQVFBLGVBQU9ELFVBQVA7QUFDSCxPQVZvQixDQUFyQjs7QUFXQSxZQUFLaEMsUUFBTCxDQUFjO0FBQ1ZVLFFBQUFBLGVBQWUsRUFBRWdDO0FBRFAsT0FBZCxFQWRxQixDQWlCckI7OztBQUNBLFlBQUtFLGFBQUwsQ0FBbUI7QUFBQ0MsUUFBQUEsU0FBUyxFQUFFO0FBQVosT0FBbkI7QUFDSCxLQWxMa0I7O0FBQUEsVUFvTG5CRCxhQXBMbUIsR0FvTEgsaUJBQW1CO0FBQUEsVUFBaEJDLFNBQWdCLFNBQWhCQSxTQUFnQjtBQUFBLHdCQUNLLE1BQUtKLEtBRFY7QUFBQSxVQUN2Qi9CLGVBRHVCLGVBQ3ZCQSxlQUR1QjtBQUFBLFVBQ05vQyxNQURNLGVBQ05BLE1BRE07QUFBQSxVQUV2QkMsV0FGdUIsR0FFUCxNQUFLckQsS0FGRSxDQUV2QnFELFdBRnVCO0FBSS9CLFVBQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUNBLFVBQUlDLEtBQUssR0FBRyxLQUFaO0FBQ0EsVUFBSUMsZ0JBQWdCLEdBQUcsQ0FBQztBQUFFQyxRQUFBQSxLQUFLLEVBQUUsS0FBVDtBQUFnQkMsUUFBQUEsV0FBVyxFQUFFO0FBQTdCLE9BQUQsQ0FBdkI7QUFDQTFDLE1BQUFBLGVBQWUsQ0FBQzJDLE9BQWhCLENBQXdCLFVBQUFyQixVQUFVLEVBQUk7QUFDbENnQixRQUFBQSxXQUFXLElBQUloQixVQUFVLENBQUNuQixRQUExQjtBQUNBbUIsUUFBQUEsVUFBVSxDQUFDbEIsaUJBQVgsQ0FBNkJ1QyxPQUE3QixDQUFxQyxVQUFDcEIsVUFBRCxFQUFhbEMsS0FBYixFQUF1QjtBQUN4RGlELFVBQUFBLFdBQVcsSUFBSWYsVUFBVSxDQUFDcEIsUUFBMUI7QUFDQSxjQUFJeUMsY0FBYyxHQUFHO0FBQUVILFlBQUFBLEtBQUssWUFBS25CLFVBQVUsQ0FBQ25CLFFBQVgsSUFBdUJkLEtBQUssS0FBSyxDQUFqQyxHQUFxQyxJQUFyQyxHQUE0QyxFQUFqRCxDQUFQO0FBQThEcUQsWUFBQUEsV0FBVyxFQUFFbkIsVUFBVSxDQUFDdEIsRUFBdEY7QUFBMEY0QyxZQUFBQSxpQkFBaUIsRUFBRXZCLFVBQVUsQ0FBQ3JCO0FBQXhILFdBQXJCO0FBQ0EsY0FBSTZDLGtCQUFrQixHQUFHLDBDQUE4QnZCLFVBQTlCLEVBQTBDWSxTQUExQyxFQUFxRFMsY0FBckQsQ0FBekI7QUFDQSxjQUFJRyxZQUFZLEdBQUdELGtCQUFrQixDQUFDRSxjQUF0QztBQUNBSixVQUFBQSxjQUFjLEdBQUdFLGtCQUFrQixDQUFDRixjQUFwQzs7QUFDQSxjQUFJRyxZQUFKLEVBQWtCO0FBQ2RULFlBQUFBLFdBQVcsSUFBSVMsWUFBZjtBQUNILFdBRkQsTUFFTyxJQUFJWixTQUFTLEtBQUssS0FBZCxJQUF1QixDQUFDWSxZQUF4QixJQUF3QyxDQUFDeEIsVUFBVSxDQUFDbEIsZ0JBQVgsQ0FBNEJFLEtBQXJFLElBQThFUCxlQUFlLENBQUNnQixNQUFoQixLQUEyQixDQUF6RyxJQUE4R00sVUFBVSxDQUFDbEIsaUJBQVgsQ0FBNkJZLE1BQTdCLEtBQXdDLENBQXRKLElBQTJKLENBQUNPLFVBQVUsQ0FBQ25CLGlCQUFYLENBQTZCWSxNQUE3TCxFQUFxTTtBQUN4TXNCLFlBQUFBLFdBQVcsR0FBRyxFQUFkO0FBQ0gsV0FGTSxNQUVBO0FBQ0g7QUFDQUMsWUFBQUEsS0FBSyxHQUFHLElBQVI7QUFDSDs7QUFFRGhCLFVBQUFBLFVBQVUsQ0FBQ25CLGlCQUFYLENBQTZCdUMsT0FBN0IsQ0FBcUMsVUFBQWYsU0FBUyxFQUFJO0FBQzlDVSxZQUFBQSxXQUFXLElBQUlWLFNBQVMsQ0FBQ3pCLFFBQXpCO0FBQ0EsZ0JBQUkyQyxrQkFBa0IsR0FBRywwQ0FBOEJsQixTQUE5QixFQUF5Q08sU0FBekMsRUFBb0RTLGNBQXBELENBQXpCO0FBQ0EsZ0JBQUlHLFlBQVksR0FBR0Qsa0JBQWtCLENBQUNFLGNBQXRDO0FBQ0FKLFlBQUFBLGNBQWMsR0FBR0Usa0JBQWtCLENBQUNGLGNBQXBDOztBQUNBLGdCQUFJRyxZQUFKLEVBQWtCO0FBQ2RULGNBQUFBLFdBQVcsSUFBSVMsWUFBZjtBQUNILGFBRkQsTUFFTztBQUNIO0FBQ0FSLGNBQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0g7QUFDSixXQVhEO0FBWUFLLFVBQUFBLGNBQWMsQ0FBQ0gsS0FBZixHQUF1QkcsY0FBYyxDQUFDSCxLQUFmLENBQXFCUSxJQUFyQixFQUF2QjtBQUNBVCxVQUFBQSxnQkFBZ0IsQ0FBQ3ZCLElBQWpCLENBQXNCMkIsY0FBdEI7QUFDSCxTQTdCRDtBQStCQSxZQUFJTCxLQUFKLEVBQVcsT0FBTyxJQUFQO0FBRVhGLFFBQUFBLFdBQVcsQ0FBQ0MsV0FBRCxDQUFYOztBQUVBLGdCQUFRSCxTQUFSO0FBQ0ksZUFBSyxLQUFMO0FBQ0k7QUFDQSxrQkFBSzdDLFFBQUwsQ0FBYztBQUFFa0QsY0FBQUEsZ0JBQWdCLEVBQWhCQTtBQUFGLGFBQWQ7O0FBQ0E7O0FBQ0osZUFBSyxNQUFMO0FBQ0ksa0JBQUtsRCxRQUFMLENBQWM7QUFDVjRELGNBQUFBLFdBQVcsRUFBRVosV0FESDtBQUVWRixjQUFBQSxNQUFNLEVBQUUsQ0FBQ0E7QUFGQyxhQUFkOztBQUlBO0FBVlI7QUFZSCxPQWpERDtBQWtESCxLQTdPa0I7O0FBQUEsVUEyU25CZSxjQTNTbUIsR0EyU0YsaUJBQW9EO0FBQUEsVUFBbEQzQyxLQUFrRCxTQUFsREEsS0FBa0Q7QUFBQSxVQUEzQzRDLGtCQUEyQyxTQUEzQ0Esa0JBQTJDO0FBQUEsVUFBdkJDLGlCQUF1QixTQUF2QkEsaUJBQXVCO0FBQUEseUJBQ3hCLE1BQUt0QixLQURtQjtBQUFBLFVBQ3pEL0IsZUFEeUQsZ0JBQ3pEQSxlQUR5RDtBQUFBLFVBQ3hDRixXQUR3QyxnQkFDeENBLFdBRHdDO0FBRWpFLFVBQU13RCxrQkFBa0IsR0FBR3RELGVBQTNCO0FBQ0EsVUFBTXVELHlCQUF5QixHQUFHdkQsZUFBZSxDQUFDd0QsU0FBaEIsQ0FBMEIsVUFBQUMsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ3hELEVBQUwsS0FBWW9ELGlCQUFoQjtBQUFBLE9BQTlCLENBQWxDO0FBQ0EsVUFBTTVELFlBQVksR0FBRyx3QkFBckI7QUFKaUUsd0JBSzVCLE1BQUtULEtBTHVCO0FBQUEsVUFLekRXLFdBTHlELGVBS3pEQSxXQUx5RDtBQUFBLFVBSzVDK0QsV0FMNEMsZUFLNUNBLFdBTDRDO0FBTWpFLFVBQU03RCxrQkFBa0IsR0FBRyxtQ0FBdUI7QUFBRUMsUUFBQUEsV0FBVyxFQUFFQSxXQUFXLENBQUNDLE9BQTNCO0FBQW9DVixRQUFBQSxLQUFLLEVBQUVJLFlBQTNDO0FBQXlERSxRQUFBQSxXQUFXLEVBQVhBLFdBQXpEO0FBQXNFK0QsUUFBQUEsV0FBVyxFQUFYQTtBQUF0RSxPQUF2QixDQUEzQjs7QUFDQSxjQUFPbEQsS0FBUDtBQUNJLGFBQUssR0FBTDtBQUNJOEMsVUFBQUEsa0JBQWtCLENBQUNDLHlCQUFELENBQWxCLENBQThDbkQsaUJBQTlDLENBQWdFYSxJQUFoRSxDQUFxRTtBQUFFaEIsWUFBQUEsRUFBRSxFQUFFLHdCQUFOO0FBQW9CQyxZQUFBQSxTQUFTLEVBQUUsRUFBL0I7QUFBbUNDLFlBQUFBLFFBQVEsRUFBRUssS0FBN0M7QUFBb0RILFlBQUFBLGdCQUFnQixFQUFFO0FBQUVGLGNBQUFBLFFBQVEsRUFBRTtBQUFFQSxnQkFBQUEsUUFBUSxFQUFFLEVBQVo7QUFBZ0JHLGdCQUFBQSxPQUFPLEVBQUU7QUFBekIsZUFBWjtBQUEyQ0MsY0FBQUEsS0FBSyxFQUFFLEVBQWxEO0FBQXNEQyxjQUFBQSxLQUFLLEVBQUUsRUFBN0Q7QUFBaUVDLGNBQUFBLFVBQVUsc0JBQUtoQixZQUFMLEVBQW9CSyxXQUFXLENBQUNDLE9BQWhDLENBQTNFO0FBQXNIRixjQUFBQSxrQkFBa0IsRUFBRSxDQUFDO0FBQUVhLGdCQUFBQSxLQUFLLEVBQUViO0FBQVQsZUFBRDtBQUExSSxhQUF0RTtBQUFtUE8sWUFBQUEsaUJBQWlCLEVBQUU7QUFBdFEsV0FBckU7O0FBQ0EsZ0JBQUtkLFFBQUwsQ0FBYztBQUNWVSxZQUFBQSxlQUFlLEVBQUVzRDtBQURQLFdBQWQ7O0FBR0E7O0FBQ0osYUFBSyxLQUFMO0FBQ0ksY0FBSUssMEJBQTBCLEdBQUdMLGtCQUFrQixDQUFDQyx5QkFBRCxDQUFsQixDQUE4Q25ELGlCQUE5QyxDQUFnRW9ELFNBQWhFLENBQTBFLFVBQUFDLElBQUk7QUFBQSxtQkFBSUEsSUFBSSxDQUFDeEQsRUFBTCxLQUFZbUQsa0JBQWhCO0FBQUEsV0FBOUUsQ0FBakM7O0FBQ0EsY0FBSVEsc0JBQXNCLHFCQUFRTixrQkFBa0IsQ0FBQ0MseUJBQUQsQ0FBbEIsQ0FBOENuRCxpQkFBOUMsQ0FBZ0V1RCwwQkFBaEUsRUFBNEZ0RCxnQkFBcEcsQ0FBMUI7O0FBQ0FpRCxVQUFBQSxrQkFBa0IsQ0FBQ0MseUJBQUQsQ0FBbEIsQ0FBOENuRCxpQkFBOUMsQ0FBZ0V1RCwwQkFBaEUsRUFBNEZ2RCxpQkFBNUYsQ0FBOEdhLElBQTlHLENBQW1IO0FBQUVoQixZQUFBQSxFQUFFLEVBQUUsd0JBQU47QUFBb0JDLFlBQUFBLFNBQVMsRUFBRSxFQUEvQjtBQUFtQ0MsWUFBQUEsUUFBUSxFQUFFSyxLQUE3QztBQUFvREgsWUFBQUEsZ0JBQWdCLGtDQUFPdUQsc0JBQVA7QUFBK0J6RCxjQUFBQSxRQUFRLEVBQUU7QUFBRUEsZ0JBQUFBLFFBQVEsRUFBRSxFQUFaO0FBQWdCRyxnQkFBQUEsT0FBTyxFQUFFO0FBQXpCLGVBQXpDO0FBQXdFRSxjQUFBQSxLQUFLLEVBQUU7QUFBL0U7QUFBcEUsV0FBbkg7O0FBQ0EsZ0JBQUtsQixRQUFMLENBQWM7QUFBQ1UsWUFBQUEsZUFBZSxFQUFFc0Q7QUFBbEIsV0FBZDs7QUFDQTs7QUFDSixhQUFLLEtBQUw7QUFDSUEsVUFBQUEsa0JBQWtCLENBQUNyQyxJQUFuQixDQUF3QjtBQUFDaEIsWUFBQUEsRUFBRSxFQUFFLHdCQUFMO0FBQW1CQyxZQUFBQSxTQUFTLEVBQUUsRUFBOUI7QUFBa0NDLFlBQUFBLFFBQVEsRUFBRUssS0FBNUM7QUFBbURKLFlBQUFBLGlCQUFpQixFQUFFLENBQUM7QUFBRUgsY0FBQUEsRUFBRSxFQUFFLDJCQUFlLENBQXJCO0FBQXdCQyxjQUFBQSxTQUFTLEVBQUUsRUFBbkM7QUFBdUNDLGNBQUFBLFFBQVEsRUFBRSxFQUFqRDtBQUFxREUsY0FBQUEsZ0JBQWdCLEVBQUU7QUFBRUYsZ0JBQUFBLFFBQVEsRUFBRTtBQUFFQSxrQkFBQUEsUUFBUSxFQUFFLEVBQVo7QUFBZ0JHLGtCQUFBQSxPQUFPLEVBQUU7QUFBekIsaUJBQVo7QUFBMkNDLGdCQUFBQSxLQUFLLEVBQUUsRUFBbEQ7QUFBc0RDLGdCQUFBQSxLQUFLLEVBQUUsRUFBN0Q7QUFBaUVDLGdCQUFBQSxVQUFVLHNCQUFLaEIsWUFBTCxFQUFvQkssV0FBVyxDQUFDQyxPQUFoQyxDQUEzRTtBQUFzSEYsZ0JBQUFBLGtCQUFrQixFQUFFLENBQUM7QUFBRWEsa0JBQUFBLEtBQUssRUFBRWI7QUFBVCxpQkFBRDtBQUExSSxlQUF2RTtBQUFvUE8sY0FBQUEsaUJBQWlCLEVBQUU7QUFBdlEsYUFBRDtBQUF0RSxXQUF4Qjs7QUFDQSxnQkFBS2QsUUFBTCxDQUFjO0FBQUNVLFlBQUFBLGVBQWUsRUFBRXNEO0FBQWxCLFdBQWQ7O0FBZlI7QUFpQkgsS0FuVWtCOztBQUFBLFVBcVVuQk8sUUFyVW1CLEdBcVVSLGlCQUFhO0FBQUEsVUFBWHJELEtBQVcsU0FBWEEsS0FBVzs7QUFDcEIsVUFBSUEsS0FBSyxLQUFLLGVBQWQsRUFBK0I7QUFBQSxZQUNuQlYsV0FEbUIsR0FDSCxNQUFLaUMsS0FERixDQUNuQmpDLFdBRG1CO0FBRTNCLFlBQU1MLFlBQVksR0FBRyx3QkFBckI7QUFGMkIsMkJBR1UsTUFBS1QsS0FIZjtBQUFBLFlBR25CVyxXQUhtQixnQkFHbkJBLFdBSG1CO0FBQUEsWUFHTkMsV0FITSxnQkFHTkEsV0FITTtBQUkzQixZQUFNQyxrQkFBa0IsR0FBRyxtQ0FBdUI7QUFBRUMsVUFBQUEsV0FBVyxFQUFFQSxXQUFXLENBQUNDLE9BQTNCO0FBQW9DVixVQUFBQSxLQUFLLEVBQUVJLFlBQTNDO0FBQXlERSxVQUFBQSxXQUFXLEVBQVhBLFdBQXpEO0FBQXNFQyxVQUFBQSxXQUFXLEVBQVhBO0FBQXRFLFNBQXZCLENBQTNCOztBQUNBLGNBQUtOLFFBQUwsQ0FBYztBQUNWVSxVQUFBQSxlQUFlLEVBQUUsQ0FBQztBQUFFQyxZQUFBQSxFQUFFLEVBQUUsd0JBQU47QUFBb0JDLFlBQUFBLFNBQVMsRUFBRSxFQUEvQjtBQUFtQ0MsWUFBQUEsUUFBUSxFQUFFLEVBQTdDO0FBQWlEQyxZQUFBQSxpQkFBaUIsRUFBRSxDQUFDO0FBQUVILGNBQUFBLEVBQUUsRUFBRSwyQkFBZSxDQUFyQjtBQUF3QkMsY0FBQUEsU0FBUyxFQUFFLEVBQW5DO0FBQXVDQyxjQUFBQSxRQUFRLEVBQUUsRUFBakQ7QUFBcURFLGNBQUFBLGdCQUFnQixFQUFFO0FBQUVGLGdCQUFBQSxRQUFRLEVBQUU7QUFBRUEsa0JBQUFBLFFBQVEsRUFBRSxFQUFaO0FBQWdCRyxrQkFBQUEsT0FBTyxFQUFFO0FBQXpCLGlCQUFaO0FBQTJDQyxnQkFBQUEsS0FBSyxFQUFFLEVBQWxEO0FBQXNEQyxnQkFBQUEsS0FBSyxFQUFFLEVBQTdEO0FBQWlFQyxnQkFBQUEsVUFBVSxzQkFBS2hCLFlBQUwsRUFBb0JLLFdBQVcsQ0FBQ0MsT0FBaEMsQ0FBM0U7QUFBc0hGLGdCQUFBQSxrQkFBa0IsRUFBRSxDQUFDO0FBQUVhLGtCQUFBQSxLQUFLLEVBQUViO0FBQVQsaUJBQUQ7QUFBMUksZUFBdkU7QUFBb1BPLGNBQUFBLGlCQUFpQixFQUFFO0FBQXZRLGFBQUQ7QUFBcEUsV0FBRCxDQURQO0FBRVZnQyxVQUFBQSxNQUFNLEVBQUUsS0FGRTtBQUdWSSxVQUFBQSxnQkFBZ0IsRUFBRSxDQUFDO0FBQUVDLFlBQUFBLEtBQUssRUFBRSxLQUFUO0FBQWdCQyxZQUFBQSxXQUFXLEVBQUU7QUFBN0IsV0FBRDtBQUhSLFNBQWQ7QUFLSDtBQUNKLEtBalZrQjs7QUFBQSxVQW9WbkJvQiwyQkFwVm1CLEdBb1ZXLGlCQUErQjtBQUFBLFVBQTdCdEQsS0FBNkIsU0FBN0JBLEtBQTZCO0FBQUEsVUFBdEJILGdCQUFzQixTQUF0QkEsZ0JBQXNCO0FBQUEsOEJBQ2ZBLGdCQURlO0FBQUEsVUFDakQwRCxXQURpRCxxQkFDakRBLFdBRGlEO0FBQUEsVUFDcENDLGdCQURvQyxxQkFDcENBLGdCQURvQztBQUFBLHlCQUVQLE1BQUtqQyxLQUZFO0FBQUEsVUFFakRxQixrQkFGaUQsZ0JBRWpEQSxrQkFGaUQ7QUFBQSxVQUU3QkMsaUJBRjZCLGdCQUU3QkEsaUJBRjZCO0FBR3pELFVBQUlZLG1CQUFtQixHQUFHLEVBQTFCO0FBQ0FBLE1BQUFBLG1CQUFtQixHQUFHLE1BQUtDLHNCQUFMLENBQTRCO0FBQUVuQyxRQUFBQSxLQUFLLEVBQUUsTUFBS0EsS0FBZDtBQUFxQmpDLFFBQUFBLFdBQVcsRUFBRWtFLGdCQUFsQztBQUFvREcsUUFBQUEsTUFBTSxFQUFFM0QsS0FBSyxDQUFDMkQsTUFBbEU7QUFBMEU1RCxRQUFBQSxLQUFLLEVBQUV3RCxXQUFqRjtBQUE4RnJDLFFBQUFBLFNBQVMsRUFBRTBCLGtCQUF6RztBQUE2SDNCLFFBQUFBLFFBQVEsRUFBRTRCO0FBQXZJLE9BQTVCLENBQXRCO0FBQ0FoRCxNQUFBQSxnQkFBZ0IsbUNBQ1RBLGdCQURTO0FBRVpGLFFBQUFBLFFBQVEsRUFBRUssS0FGRTtBQUdaQSxRQUFBQSxLQUFLLEVBQUUsRUFISztBQUlaeUQsUUFBQUEsbUJBQW1CLEVBQW5CQTtBQUpZLFFBQWhCO0FBT0EsYUFBTzVELGdCQUFQO0FBQ0gsS0FqV2tCOztBQUFBLFVBbVduQitELHdCQW5XbUIsR0FtV1EsaUJBQWdEO0FBQUEsVUFBOUM1RCxLQUE4QyxTQUE5Q0EsS0FBOEM7QUFBQSxVQUF2Q0gsZ0JBQXVDLFNBQXZDQSxnQkFBdUM7QUFBQSxVQUFyQmdFLGVBQXFCLFNBQXJCQSxlQUFxQjtBQUFBLFVBQy9ERixNQUQrRCxHQUNwRDlELGdCQUFnQixDQUFDRixRQURtQyxDQUMvRGdFLE1BRCtEOztBQUV2RSxjQUFRQSxNQUFSO0FBQ0ksYUFBSyxpQkFBTDtBQUNBLGFBQUssVUFBTDtBQUNJLGNBQUlHLFNBQVMsR0FBR2pFLGdCQUFnQixDQUFDRyxLQUFqQztBQUNBOEQsVUFBQUEsU0FBUyxHQUFHQSxTQUFTLEdBQUdBLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQixHQUFoQixDQUFILEdBQTBCLEVBQS9DO0FBQ0FELFVBQUFBLFNBQVMsQ0FBQ3pELE9BQVYsQ0FBa0JMLEtBQWxCLElBQTJCLENBQTNCLEdBQStCOEQsU0FBUyxDQUFDckQsSUFBVixDQUFlVCxLQUFmLENBQS9CLEdBQXVEOEQsU0FBUyxDQUFDRSxNQUFWLENBQWlCRixTQUFTLENBQUN6RCxPQUFWLENBQWtCTCxLQUFsQixDQUFqQixFQUEyQyxDQUEzQyxDQUF2RDtBQUNBOEQsVUFBQUEsU0FBUyxHQUFHQSxTQUFTLENBQUNHLElBQVYsQ0FBZSxHQUFmLENBQVo7QUFDQXBFLFVBQUFBLGdCQUFnQixDQUFDRyxLQUFqQixHQUF5QjhELFNBQXpCO0FBQ0EsaUJBQU9qRSxnQkFBUDs7QUFDSixhQUFLLGVBQUw7QUFDQSxhQUFLLGdCQUFMO0FBQ0EsYUFBSyxnQkFBTDtBQUNBLGFBQUssdUJBQUw7QUFDQSxhQUFLLHdCQUFMO0FBQ0ksY0FBSSxDQUFDQSxnQkFBZ0IsQ0FBQ0csS0FBdEIsRUFDSUgsZ0JBQWdCLENBQUNHLEtBQWpCLEdBQXlCLEVBQXpCO0FBQ0pILFVBQUFBLGdCQUFnQixDQUFDRyxLQUFqQixDQUF1QkEsS0FBSyxDQUFDbkIsS0FBN0IsSUFBc0NtQixLQUFLLENBQUNBLEtBQTVDO0FBQ0EsaUJBQU9ILGdCQUFQOztBQUNKLGFBQUssYUFBTDtBQUNJLGNBQUlHLEtBQUssQ0FBQ25CLEtBQU4sSUFBZSxDQUFuQixFQUFzQjtBQUNsQmdCLFlBQUFBLGdCQUFnQixDQUFDNEQsbUJBQWpCLEdBQXVDLHlCQUFhekQsS0FBSyxDQUFDQSxLQUFuQixDQUF2QztBQUNIOztBQUNELGNBQUksQ0FBQ0gsZ0JBQWdCLENBQUNHLEtBQXRCLEVBQTZCO0FBQ3pCSCxZQUFBQSxnQkFBZ0IsQ0FBQ0csS0FBakIsR0FBeUIsRUFBekI7QUFDSDs7QUFDREgsVUFBQUEsZ0JBQWdCLENBQUNHLEtBQWpCLENBQXVCQSxLQUFLLENBQUNuQixLQUE3QixJQUFzQ21CLEtBQUssQ0FBQ0EsS0FBNUM7QUFDQSxpQkFBT0gsZ0JBQVA7O0FBQ0o7QUFDSUEsVUFBQUEsZ0JBQWdCLENBQUNnRSxlQUFELENBQWhCLEdBQW9DN0QsS0FBcEM7QUFDQSxpQkFBT0gsZ0JBQVA7QUE3QlI7QUErQkgsS0FwWWtCOztBQUFBLFVBc1luQnFFLG1CQXRZbUIsR0FzWUcsa0JBQXFFO0FBQUEsVUFBbkVsRSxLQUFtRSxVQUFuRUEsS0FBbUU7QUFBQSxVQUE1RDZELGVBQTRELFVBQTVEQSxlQUE0RDtBQUFBLFVBQTNDakIsa0JBQTJDLFVBQTNDQSxrQkFBMkM7QUFBQSxVQUF2QkMsaUJBQXVCLFVBQXZCQSxpQkFBdUI7QUFBQSxVQUMvRXJELGVBRCtFLEdBQzNELE1BQUsrQixLQURzRCxDQUMvRS9CLGVBRCtFO0FBR3ZGLFVBQU0yRSx3QkFBd0IsR0FBR3ZCLGtCQUFrQixHQUFHQSxrQkFBSCxHQUF3QixNQUFLckIsS0FBTCxDQUFXcUIsa0JBQXRGO0FBQ0EsVUFBTXdCLHVCQUF1QixHQUFHdkIsaUJBQWlCLEdBQUdBLGlCQUFILEdBQXVCLE1BQUt0QixLQUFMLENBQVdzQixpQkFBbkY7QUFDQSxVQUFJckIsa0JBQWtCLEdBQUcsa0JBQU1oQyxlQUFOLENBQXpCO0FBQ0EsVUFBSTZFLHVCQUF1QixHQUFHN0Msa0JBQWtCLENBQUN3QixTQUFuQixDQUE2QixVQUFBQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDeEQsRUFBTCxLQUFZMkUsdUJBQWhCO0FBQUEsT0FBakMsQ0FBOUI7QUFDQSxVQUFJRSx3QkFBd0IsR0FBRzlDLGtCQUFrQixDQUFDNkMsdUJBQUQsQ0FBbEIsQ0FBNEN6RSxpQkFBNUMsQ0FBOERvRCxTQUE5RCxDQUF3RSxVQUFBQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDeEQsRUFBTCxLQUFZMEUsd0JBQWhCO0FBQUEsT0FBNUUsQ0FBL0I7QUFDQSxVQUFJSSxxQkFBSjtBQUNBLFVBQUlDLG9CQUFKOztBQUNBLFVBQUlGLHdCQUF3QixHQUFHLENBQUMsQ0FBaEMsRUFBbUM7QUFDL0JDLFFBQUFBLHFCQUFxQixHQUFHL0Msa0JBQWtCLENBQUM2Qyx1QkFBRCxDQUFsQixDQUE0Q3pFLGlCQUE1QyxDQUE4RDBFLHdCQUE5RCxDQUF4QjtBQUNBRSxRQUFBQSxvQkFBb0IscUJBQVFoRCxrQkFBa0IsQ0FBQzZDLHVCQUFELENBQWxCLENBQTRDekUsaUJBQTVDLENBQThEMEUsd0JBQTlELEVBQXdGekUsZ0JBQWhHLENBQXBCO0FBQ0gsT0FIRCxNQUlLO0FBQ0QyQixRQUFBQSxrQkFBa0IsQ0FBQzZDLHVCQUFELENBQWxCLENBQTRDekUsaUJBQTVDLENBQThEdUMsT0FBOUQsQ0FBc0UsVUFBQ2MsSUFBRCxFQUFPd0IsU0FBUCxFQUFxQjtBQUN2RnhCLFVBQUFBLElBQUksQ0FBQ3JELGlCQUFMLENBQXVCdUMsT0FBdkIsQ0FBK0IsVUFBQ2MsSUFBRCxFQUFPeUIsUUFBUCxFQUFvQjtBQUMvQyxnQkFBSXpCLElBQUksQ0FBQ3hELEVBQUwsS0FBWTBFLHdCQUFoQixFQUEwQztBQUN0Q0ksY0FBQUEscUJBQXFCLEdBQUcvQyxrQkFBa0IsQ0FBQzZDLHVCQUFELENBQWxCLENBQTRDekUsaUJBQTVDLENBQThENkUsU0FBOUQsRUFBeUU3RSxpQkFBekUsQ0FBMkY4RSxRQUEzRixDQUF4QjtBQUNBRixjQUFBQSxvQkFBb0IscUJBQVF2QixJQUFJLENBQUNwRCxnQkFBYixDQUFwQjtBQUNIO0FBQ0osV0FMRDtBQU1ILFNBUEQ7QUFRSDs7QUFDRCxjQUFRZ0UsZUFBUjtBQUNJLGFBQUssT0FBTDtBQUNJVSxVQUFBQSxxQkFBcUIsQ0FBQzFFLGdCQUF0QixHQUF5QyxNQUFLOEUsd0JBQUwsQ0FBOEI7QUFBQzlFLFlBQUFBLGdCQUFnQixFQUFFMkUsb0JBQW5CO0FBQXlDeEUsWUFBQUEsS0FBSyxFQUFMQTtBQUF6QyxXQUE5QixDQUF6QyxDQURKLENBQzZIOztBQUN6SDs7QUFDSixhQUFLLFlBQUw7QUFDSXVFLFVBQUFBLHFCQUFxQixDQUFDMUUsZ0JBQXRCLEdBQXlDLE1BQUsrRSw0QkFBTCxDQUFrQztBQUFDL0UsWUFBQUEsZ0JBQWdCLEVBQUUyRSxvQkFBbkI7QUFBeUN4RSxZQUFBQSxLQUFLLEVBQUxBO0FBQXpDLFdBQWxDLENBQXpDO0FBQ0E7O0FBQ0osYUFBSyxVQUFMO0FBQ0l1RSxVQUFBQSxxQkFBcUIsQ0FBQzFFLGdCQUF0QixHQUF5QyxNQUFLeUQsMkJBQUwsQ0FBaUM7QUFBQ3RELFlBQUFBLEtBQUssRUFBTEEsS0FBRDtBQUFRSCxZQUFBQSxnQkFBZ0IsRUFBRTJFLG9CQUExQjtBQUFnREwsWUFBQUEsd0JBQXdCLEVBQXhCQSx3QkFBaEQ7QUFBMEVDLFlBQUFBLHVCQUF1QixFQUF2QkE7QUFBMUUsV0FBakMsQ0FBekM7QUFDQTs7QUFDSixhQUFLLE9BQUw7QUFDSUcsVUFBQUEscUJBQXFCLENBQUMxRSxnQkFBdEIsR0FBeUMsTUFBSytELHdCQUFMLENBQThCO0FBQUM1RCxZQUFBQSxLQUFLLEVBQUxBLEtBQUQ7QUFBUUgsWUFBQUEsZ0JBQWdCLEVBQUUyRSxvQkFBMUI7QUFBZ0RYLFlBQUFBLGVBQWUsRUFBZkE7QUFBaEQsV0FBOUIsQ0FBekM7QUFDQTs7QUFDSixhQUFLLG9CQUFMO0FBQ0lVLFVBQUFBLHFCQUFxQixDQUFDMUUsZ0JBQXRCLEdBQXlDLE1BQUtnRixrQ0FBTCxDQUF3QztBQUFDN0UsWUFBQUEsS0FBSyxFQUFMQSxLQUFEO0FBQVFILFlBQUFBLGdCQUFnQixFQUFFMkU7QUFBMUIsV0FBeEMsQ0FBekM7QUFDQTtBQWZSOztBQWtCQSxZQUFLMUYsUUFBTCxDQUFjO0FBQUNVLFFBQUFBLGVBQWUsRUFBRWdDO0FBQWxCLE9BQWQ7QUFDSCxLQWpia0I7O0FBQUEsVUFtYm5CcUQsa0NBbmJtQixHQW1ia0Isa0JBQWdDO0FBQUEsVUFBN0I3RSxLQUE2QixVQUE3QkEsS0FBNkI7QUFBQSxVQUF0QkgsZ0JBQXNCLFVBQXRCQSxnQkFBc0I7QUFDakVBLE1BQUFBLGdCQUFnQixDQUFDNEQsbUJBQWpCLEdBQXVDekQsS0FBdkM7QUFFQSxhQUFPSCxnQkFBUDtBQUNILEtBdmJrQjs7QUFBQSxVQXlibkJpRixrQkF6Ym1CO0FBQUEsMkVBeWJFLGlCQUFPQyxLQUFQLEVBQWNDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hDLGdCQUFBQSxRQURXLGFBQ0dDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFEbkIsNEJBQzJDTCxLQUQzQyxHQUNvRDs7QUFFL0Q3RixnQkFBQUEsS0FIVyxHQUdIOEYsV0FBVyxHQUFHLCtCQUFtQkEsV0FBbkIsQ0FBSCxHQUFxQyxFQUg3QztBQUlYSyxnQkFBQUEsR0FKVyxhQUlGSixRQUpFLGNBSVUvRixLQUpWO0FBS1g4QixnQkFBQUEsTUFMVyxHQUtGO0FBQ1hzRSxrQkFBQUEsTUFBTSxFQUFFO0FBREcsaUJBTEU7QUFBQTtBQUFBLHVCQVFKLHlCQUFhO0FBQUNELGtCQUFBQSxHQUFHLEVBQUhBLEdBQUQ7QUFBTXJFLGtCQUFBQSxNQUFNLEVBQU5BO0FBQU4saUJBQWIsQ0FSSTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BemJGOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLFVBb2NuQnVFLDJCQXBjbUIsR0FvY1csVUFBQzdHLE1BQUQsRUFBWTtBQUFBLFVBQzlCOEcsa0JBRDhCLEdBQ1AsTUFBS2pFLEtBREUsQ0FDOUJpRSxrQkFEOEI7QUFFdEMsVUFBSUMsV0FBVyxHQUFHL0csTUFBTSxDQUFDZ0MsR0FBUCxDQUFXLFVBQUFYLEtBQUs7QUFBQSxlQUFLO0FBQUNOLFVBQUFBLEVBQUUsRUFBRU0sS0FBSyxDQUFDMkYsTUFBWDtBQUFtQnpELFVBQUFBLEtBQUssRUFBRWxDLEtBQUssQ0FBQ3lGLGtCQUFrQixDQUFDekYsS0FBbkIsQ0FBeUI0Rix1QkFBMUIsQ0FBL0I7QUFBbUZDLFVBQUFBLFFBQVEsRUFBRTtBQUE3RixTQUFMO0FBQUEsT0FBaEIsQ0FBbEI7O0FBQ0EsWUFBSzFCLG1CQUFMLENBQXlCO0FBQUNsRSxRQUFBQSxLQUFLLEVBQUV5RixXQUFSO0FBQXFCNUIsUUFBQUEsZUFBZSxFQUFFLG9CQUF0QztBQUE0RGpCLFFBQUFBLGtCQUFrQixFQUFFNEMsa0JBQWtCLENBQUM1QyxrQkFBbkc7QUFBdUhDLFFBQUFBLGlCQUFpQixFQUFFMkMsa0JBQWtCLENBQUMzQztBQUE3SixPQUF6QjtBQUNILEtBeGNrQjs7QUFBQSxVQTJjbkIrQiw0QkEzY21CLEdBMmNZLGtCQUErQjtBQUFBLFVBQTdCL0UsZ0JBQTZCLFVBQTdCQSxnQkFBNkI7QUFBQSxVQUFYRyxLQUFXLFVBQVhBLEtBQVc7QUFDMUQsVUFBTWYsWUFBWSxHQUFHLHdCQUFyQjtBQUNBLFVBQU00RyxxQkFBcUIsR0FBRyxtQ0FBdUI7QUFBQ3ZHLFFBQUFBLFdBQVcsRUFBRVUsS0FBSyxDQUFDdEIsTUFBcEI7QUFBNEJHLFFBQUFBLEtBQUssRUFBRUk7QUFBbkMsT0FBdkIsQ0FBOUI7O0FBQ0EsVUFBSWUsS0FBSyxDQUFDOEYsU0FBTixHQUFrQmpHLGdCQUFnQixDQUFDUixrQkFBakIsQ0FBb0NtQixNQUFwQyxHQUE2QyxDQUFuRSxFQUFzRTtBQUNsRSxZQUFJdUYsaUJBQWlCLEdBQUdsRyxnQkFBZ0IsQ0FBQ1Isa0JBQWpCLENBQW9DMkUsTUFBcEMsQ0FBMkNoRSxLQUFLLENBQUM4RixTQUFOLEdBQWtCLENBQTdELENBQXhCO0FBQ0FDLFFBQUFBLGlCQUFpQixHQUFHQSxpQkFBaUIsQ0FBQ3JGLEdBQWxCLENBQXNCLFVBQUFzRixJQUFJO0FBQUEsaUJBQUlBLElBQUksQ0FBQzlGLEtBQUwsQ0FBVyxDQUFYLEVBQWNyQixLQUFsQjtBQUFBLFNBQTFCLENBQXBCO0FBQ0FrSCxRQUFBQSxpQkFBaUIsQ0FBQzVELE9BQWxCLENBQTBCLFVBQUE4RCxHQUFHO0FBQUEsaUJBQUksT0FBT3BHLGdCQUFnQixDQUFDSSxVQUFqQixDQUE0QmdHLEdBQTVCLENBQVg7QUFBQSxTQUE3QjtBQUNIOztBQUNEcEcsTUFBQUEsZ0JBQWdCLENBQUNSLGtCQUFqQixDQUFvQ29CLElBQXBDLENBQXlDO0FBQUVQLFFBQUFBLEtBQUssRUFBRTJGO0FBQVQsT0FBekM7QUFDQWhHLE1BQUFBLGdCQUFnQixDQUFDSSxVQUFqQixDQUE0QmhCLFlBQTVCLElBQTRDZSxLQUFLLENBQUN0QixNQUFsRDtBQUNBbUIsTUFBQUEsZ0JBQWdCLENBQUNxRyxVQUFqQixHQUE4QmxHLEtBQUssQ0FBQ21HLGFBQXBDO0FBRUEsYUFBT3RHLGdCQUFQO0FBQ0gsS0F4ZGtCOztBQUFBLFVBNGRuQnVHLGdCQTVkbUIsR0E0ZEEsa0JBQTZDO0FBQUEsVUFBM0N4RCxrQkFBMkMsVUFBM0NBLGtCQUEyQztBQUFBLFVBQXZCQyxpQkFBdUIsVUFBdkJBLGlCQUF1Qjs7QUFDNUQsWUFBSy9ELFFBQUwsQ0FBYztBQUFDOEQsUUFBQUEsa0JBQWtCLEVBQWxCQSxrQkFBRDtBQUFxQkMsUUFBQUEsaUJBQWlCLEVBQWpCQTtBQUFyQixPQUFkO0FBQ0gsS0E5ZGtCOztBQUFBLFVBa2VuQjhCLHdCQWxlbUIsR0FrZVEsa0JBQStCO0FBQUEsVUFBN0I5RSxnQkFBNkIsVUFBN0JBLGdCQUE2QjtBQUFBLFVBQVhHLEtBQVcsVUFBWEEsS0FBVztBQUFBLCtCQUMvQkgsZ0JBRCtCO0FBQUEsVUFDOUNJLFVBRDhDLHNCQUM5Q0EsVUFEOEM7QUFFdEQsVUFBSW9HLGlCQUFpQixHQUFHcEcsVUFBVSxDQUFDRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUYsS0FBSyxDQUFDRSxLQUFOLENBQVlNLE1BQVosR0FBcUIsQ0FBakMsRUFBb0MzQixLQUFyQyxDQUFsQztBQUNBLFVBQUl5SCxZQUFZLEdBQUd0RyxLQUFLLENBQUNFLEtBQU4sQ0FBWUYsS0FBSyxDQUFDRSxLQUFOLENBQVlNLE1BQVosR0FBcUIsQ0FBakMsRUFBb0NmLEVBQXZEO0FBQ0EsVUFBSThHLGlCQUFpQixHQUFHMUcsZ0JBQWdCLENBQUNSLGtCQUFqQixDQUFvQzJELFNBQXBDLENBQThDLFVBQUFnRCxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDOUYsS0FBTCxDQUFXLENBQVgsRUFBY3JCLEtBQWQsS0FBd0JtQixLQUFLLENBQUNFLEtBQU4sQ0FBWUYsS0FBSyxDQUFDRSxLQUFOLENBQVlNLE1BQVosR0FBcUIsQ0FBakMsRUFBb0MzQixLQUFoRTtBQUFBLE9BQWxELENBQXhCO0FBQ0EsVUFBSWtILGlCQUFpQixHQUFHbEcsZ0JBQWdCLENBQUNSLGtCQUFqQixDQUFvQzJFLE1BQXBDLENBQTJDdUMsaUJBQWlCLEdBQUcsQ0FBL0QsQ0FBeEI7QUFDQVIsTUFBQUEsaUJBQWlCLEdBQUdBLGlCQUFpQixDQUFDckYsR0FBbEIsQ0FBc0IsVUFBQXNGLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUM5RixLQUFMLENBQVcsQ0FBWCxFQUFjckIsS0FBbEI7QUFBQSxPQUExQixDQUFwQjtBQUNBa0gsTUFBQUEsaUJBQWlCLENBQUM1RCxPQUFsQixDQUEwQixVQUFBOEQsR0FBRztBQUFBLGVBQUksT0FBT3BHLGdCQUFnQixDQUFDSSxVQUFqQixDQUE0QmdHLEdBQTVCLENBQVg7QUFBQSxPQUE3QjtBQUNBLFVBQUlPLGNBQWMsR0FBR0gsaUJBQWlCLENBQUNDLFlBQUQsQ0FBakIsQ0FBZ0N6RixTQUFoQyxDQUEwQ0gsR0FBMUMsQ0FBOEMsVUFBQWlCLFNBQVM7QUFBQSxlQUFLO0FBQUVsQyxVQUFBQSxFQUFFLEVBQUVrQyxTQUFTLENBQUNoQyxRQUFoQjtBQUEwQnNDLFVBQUFBLEtBQUssRUFBRU4sU0FBUyxDQUFDTSxLQUEzQztBQUFrRDJELFVBQUFBLFFBQVEsRUFBRTtBQUE1RCxTQUFMO0FBQUEsT0FBdkQsQ0FBckI7QUFDQSxhQUFPL0YsZ0JBQWdCLG1DQUNoQkEsZ0JBRGdCO0FBRW5CRSxRQUFBQSxLQUFLLEVBQUVDLEtBQUssQ0FBQ0EsS0FGTTtBQUduQmtHLFFBQUFBLFVBQVUsRUFBRWxHLEtBSE87QUFJbkJMLFFBQUFBLFFBQVEsRUFBRTtBQUFFQSxVQUFBQSxRQUFRLEVBQUUsRUFBWjtBQUFnQmdFLFVBQUFBLE1BQU0sRUFBRTtBQUF4QixTQUpTO0FBS25CM0QsUUFBQUEsS0FBSyxFQUFFLEVBTFk7QUFNbkJ3RyxRQUFBQSxjQUFjLEVBQWRBLGNBTm1CO0FBT25CaEQsUUFBQUEsZ0JBQWdCLG9CQUFPNkMsaUJBQVAsQ0FQRztBQVFuQjlDLFFBQUFBLFdBQVcsRUFBRStDO0FBUk0sUUFBdkI7QUFVSCxLQXJma0I7O0FBQUEsVUF1Zm5CRyxhQXZmbUIsR0F1ZkgsVUFBQ0MsSUFBRCxFQUFVO0FBQUEsVUFDZEMsV0FEYyxHQUNzQkQsSUFEdEIsQ0FDZEMsV0FEYztBQUFBLFVBQ0RDLGtCQURDLEdBQ3NCRixJQUR0QixDQUNERSxrQkFEQztBQUFBLHlCQUV1RCxNQUFLckYsS0FGNUQ7QUFBQSxVQUVkc0YsUUFGYyxnQkFFZEEsUUFGYztBQUFBLFVBRUpqRSxrQkFGSSxnQkFFSkEsa0JBRkk7QUFBQSxVQUVnQkMsaUJBRmhCLGdCQUVnQkEsaUJBRmhCO0FBQUEsVUFFbUNyRCxlQUZuQyxnQkFFbUNBLGVBRm5DO0FBSXRCLFVBQU13RixXQUFXLEdBQUc7QUFDaEI4QixRQUFBQSxpQkFBaUIsRUFBRSxJQURIO0FBRWhCQyxRQUFBQSwyQkFBMkIsRUFBRSxJQUZiO0FBR2hCQyxRQUFBQSxnQkFBZ0IsRUFBRTtBQUhGLE9BQXBCO0FBS0EsVUFBSTlHLEtBQUssR0FBRyxFQUFaO0FBQ0EsVUFBSStHLFFBQVEsR0FBRyxFQUFmO0FBQ0FBLE1BQUFBLFFBQVEsQ0FBQ3hHLElBQVQsQ0FBY2tHLFdBQWQ7QUFDQXpHLE1BQUFBLEtBQUssR0FBRztBQUFDZ0MsUUFBQUEsV0FBVyxFQUFFVSxrQkFBZDtBQUFrQ0MsUUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFBbEM7QUFBcURpRCxRQUFBQSxTQUFTLEVBQUVhLFdBQVcsQ0FBQ2IsU0FBNUU7QUFBdUZLLFFBQUFBLGFBQWEsRUFBRTtBQUFDakcsVUFBQUEsS0FBSyxFQUFFK0csUUFBUjtBQUFrQmhGLFVBQUFBLEtBQUssRUFBRTBFLFdBQVcsQ0FBQzFFLEtBQXJDO0FBQTRDakMsVUFBQUEsS0FBSyxFQUFFMkcsV0FBVyxDQUFDbEg7QUFBL0Q7QUFBdEcsT0FBUjtBQUNDa0gsTUFBQUEsV0FBVyxDQUFDTyxlQUFiLEdBQWlDLDJCQUFlUCxXQUFXLENBQUM1QixLQUEzQixFQUFrQ0MsV0FBbEMsRUFDNUJtQyxJQUQ0QixDQUN2QixVQUFBQyxHQUFHLEVBQUk7QUFDVGxILFFBQUFBLEtBQUssbUNBQU9BLEtBQVA7QUFBY3hCLFVBQUFBLE1BQU0sRUFBRTBJLEdBQUcsQ0FBQzdIO0FBQTFCLFVBQUw7O0FBQ0EsY0FBSzJFLG1CQUFMLENBQXlCO0FBQUNsRSxVQUFBQSxLQUFLLEVBQUVFLEtBQVI7QUFBZTJDLFVBQUFBLGlCQUFpQixFQUFqQkEsaUJBQWY7QUFBa0NELFVBQUFBLGtCQUFrQixFQUFsQkEsa0JBQWxDO0FBQXNEaUIsVUFBQUEsZUFBZSxFQUFFO0FBQXZFLFNBQXpCO0FBQ0gsT0FKNEIsQ0FBakMsR0FJVTtBQUFBLGVBQU0sS0FBSyxDQUFYO0FBQUEsT0FKVjtBQUtBLFVBQUl3RCxZQUFZLEdBQUcsa0JBQU03SCxlQUFOLENBQW5CO0FBQ0EsVUFBTXVELHlCQUF5QixHQUFHc0UsWUFBWSxDQUFDckUsU0FBYixDQUF1QixVQUFBQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDeEQsRUFBTCxLQUFZb0QsaUJBQWhCO0FBQUEsT0FBM0IsQ0FBbEM7O0FBRUEsVUFBSSxDQUFDOEQsV0FBVyxDQUFDTyxlQUFqQixFQUFrQztBQUM5QixjQUFLaEQsbUJBQUwsQ0FBeUI7QUFBQ2xFLFVBQUFBLEtBQUssRUFBRUUsS0FBSyxDQUFDaUcsYUFBZDtBQUE2QnRDLFVBQUFBLGVBQWUsRUFBRTtBQUE5QyxTQUF6QjtBQUVILE9BeEJxQixDQXlCdEI7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0gsS0FyaUJrQjs7QUFBQSxVQXVpQm5CeUQscUJBdmlCbUIsR0F1aUJLLGtCQUF1QjtBQUFBLFVBQXJCdEIsSUFBcUIsVUFBckJBLElBQXFCO0FBQUEsVUFBZnJFLFNBQWUsVUFBZkEsU0FBZTtBQUFBLFVBQ25DSyxnQkFEbUMsR0FDZCxNQUFLVCxLQURTLENBQ25DUyxnQkFEbUM7QUFFM0MsVUFBSXVGLFNBQVMsR0FBR3ZGLGdCQUFnQixDQUFDZ0IsU0FBakIsQ0FBMkIsVUFBQXdFLFVBQVU7QUFBQSxlQUFJQSxVQUFVLENBQUN0RixXQUFYLEtBQTJCOEQsSUFBSSxDQUFDOUQsV0FBcEM7QUFBQSxPQUFyQyxDQUFoQjs7QUFDQSxjQUFRUCxTQUFSO0FBQ0ksYUFBSyxhQUFMO0FBQ0lLLFVBQUFBLGdCQUFnQixDQUFDZ0MsTUFBakIsQ0FBd0J1RCxTQUF4QixFQUFtQyxDQUFuQzs7QUFDQSxnQkFBS3pJLFFBQUwsQ0FBYztBQUFDa0QsWUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUFELFdBQWQ7O0FBQ0EsZ0JBQUt5RixlQUFMLENBQXFCO0FBQUM3RSxZQUFBQSxrQkFBa0IsRUFBRW9ELElBQUksQ0FBQzlELFdBQTFCO0FBQXVDVyxZQUFBQSxpQkFBaUIsRUFBRW1ELElBQUksQ0FBQzNEO0FBQS9ELFdBQXJCOztBQUNBOztBQUNKLGFBQUssbUJBQUw7QUFDSTtBQUNBLGNBQUlxRixZQUFZLEdBQUlILFNBQVMsS0FBSyxDQUFmLEdBQW9CdkYsZ0JBQWdCLENBQUNnQyxNQUFqQixDQUF3QixDQUF4QixDQUFwQixHQUFpRGhDLGdCQUFnQixDQUFDZ0MsTUFBakIsQ0FBd0J1RCxTQUFTLEdBQUcsQ0FBcEMsQ0FBcEU7O0FBRUEsZ0JBQUt6SSxRQUFMLENBQWM7QUFBQ2tELFlBQUFBLGdCQUFnQixFQUFoQkE7QUFBRCxXQUFkOztBQUVBMEYsVUFBQUEsWUFBWSxDQUFDdkYsT0FBYixDQUFxQixVQUFBdUUsSUFBSTtBQUFBLG1CQUFJLE1BQUtlLGVBQUwsQ0FBcUI7QUFBQzdFLGNBQUFBLGtCQUFrQixFQUFFOEQsSUFBSSxDQUFDeEUsV0FBMUI7QUFBdUNXLGNBQUFBLGlCQUFpQixFQUFFNkQsSUFBSSxDQUFDckU7QUFBL0QsYUFBckIsQ0FBSjtBQUFBLFdBQXpCO0FBQ0E7QUFiUjtBQWVILEtBempCa0I7O0FBQUEsVUEyakJuQnNGLGlCQTNqQm1CLEdBMmpCQyxVQUFDakIsSUFBRCxFQUFVO0FBQzFCa0IsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVluQixJQUFaO0FBQ0gsS0E3akJrQjs7QUFBQSxVQStqQm5CZSxlQS9qQm1CLEdBK2pCRCxrQkFBNkM7QUFBQSxVQUEzQzdFLGtCQUEyQyxVQUEzQ0Esa0JBQTJDO0FBQUEsVUFBdkJDLGlCQUF1QixVQUF2QkEsaUJBQXVCO0FBQUEsVUFDbkRyRCxlQURtRCxHQUMvQixNQUFLK0IsS0FEMEIsQ0FDbkQvQixlQURtRDtBQUUzRCxVQUFNc0Qsa0JBQWtCLEdBQUd0RCxlQUEzQjtBQUNBLFVBQU11RCx5QkFBeUIsR0FBR0Qsa0JBQWtCLENBQUNFLFNBQW5CLENBQTZCLFVBQUFDLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUN4RCxFQUFMLEtBQVlvRCxpQkFBaEI7QUFBQSxPQUFqQyxDQUFsQztBQUNBLFVBQU1NLDBCQUEwQixHQUFHTCxrQkFBa0IsQ0FBQ0MseUJBQUQsQ0FBbEIsQ0FBOENuRCxpQkFBOUMsQ0FBZ0VvRCxTQUFoRSxDQUEwRSxVQUFBQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDeEQsRUFBTCxLQUFZbUQsa0JBQWhCO0FBQUEsT0FBOUUsQ0FBbkM7QUFDQSxVQUFJa0YsSUFBSSxHQUFHLEVBQVg7QUFDQSxVQUFJQyxhQUFKOztBQUNBLFVBQUk1RSwwQkFBMEIsR0FBRyxDQUFDLENBQWxDLEVBQXFDO0FBQ2pDMkUsUUFBQUEsSUFBSSxHQUFHaEYsa0JBQWtCLENBQUNDLHlCQUFELENBQWxCLENBQThDbkQsaUJBQXJEO0FBQ0FtSSxRQUFBQSxhQUFhLEdBQUc1RSwwQkFBaEI7O0FBQ0EsWUFBSUwsa0JBQWtCLENBQUNDLHlCQUFELENBQWxCLENBQThDbkQsaUJBQTlDLENBQWdFWSxNQUFoRSxLQUEyRSxDQUEvRSxFQUFrRjtBQUM5RXNILFVBQUFBLElBQUksR0FBR2hGLGtCQUFQO0FBQ0FpRixVQUFBQSxhQUFhLEdBQUdoRix5QkFBaEI7QUFDSCxTQUhELE1BR08sSUFBSUksMEJBQTBCLEtBQUssQ0FBbkMsRUFBc0M7QUFDekMyRSxVQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFuSSxRQUFSLEdBQW1CLEVBQW5CO0FBQ0FtRCxVQUFBQSxrQkFBa0IsQ0FBQ0MseUJBQUQsQ0FBbEIsQ0FBOENuRCxpQkFBOUMsQ0FBZ0UsQ0FBaEUsRUFBbUVELFFBQW5FLEdBQThFbUksSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRbkksUUFBdEY7O0FBQ0EsZ0JBQUtiLFFBQUwsQ0FBYztBQUFDVSxZQUFBQSxlQUFlLEVBQUVzRDtBQUFsQixXQUFkO0FBQ0g7QUFDSixPQVhELE1BV087QUFDSEEsUUFBQUEsa0JBQWtCLENBQUNDLHlCQUFELENBQWxCLENBQThDbkQsaUJBQTlDLENBQWdFdUMsT0FBaEUsQ0FBd0UsVUFBQ3BCLFVBQUQsRUFBYWlILE1BQWIsRUFBd0I7QUFDNUZqSCxVQUFBQSxVQUFVLENBQUNuQixpQkFBWCxDQUE2QnVDLE9BQTdCLENBQXFDLFVBQUNmLFNBQUQsRUFBWTZHLE9BQVosRUFBd0I7QUFDekQsZ0JBQUk3RyxTQUFTLENBQUMzQixFQUFWLEtBQWlCbUQsa0JBQXJCLEVBQXlDO0FBQ3JDa0YsY0FBQUEsSUFBSSxHQUFHaEYsa0JBQWtCLENBQUNDLHlCQUFELENBQWxCLENBQThDbkQsaUJBQTlDLENBQWdFb0ksTUFBaEUsRUFBd0VwSSxpQkFBL0U7QUFDQW1JLGNBQUFBLGFBQWEsR0FBR0UsT0FBaEI7QUFDSDtBQUNKLFdBTEQ7QUFNSCxTQVBEO0FBUUg7O0FBRUQsVUFBSW5GLGtCQUFrQixDQUFDdEMsTUFBbkIsS0FBOEIsQ0FBOUIsSUFBbUNzSCxJQUFJLEtBQUtoRixrQkFBaEQsRUFBb0U7QUFBQSxZQUN4RHhELFdBRHdELEdBQ3hDLE1BQUtpQyxLQURtQyxDQUN4RGpDLFdBRHdEO0FBRWhFLFlBQUlMLFlBQVksR0FBRyx3QkFBbkI7QUFDQSxZQUFJSSxrQkFBa0IsR0FBRyxtQ0FBdUI7QUFBRUMsVUFBQUEsV0FBVyxFQUFFQSxXQUFXLENBQUNDLE9BQTNCO0FBQW9DVixVQUFBQSxLQUFLLEVBQUVJO0FBQTNDLFNBQXZCLENBQXpCOztBQUNBLGNBQUtILFFBQUwsQ0FBYztBQUFDVSxVQUFBQSxlQUFlLEVBQUUsQ0FBQztBQUFFQyxZQUFBQSxFQUFFLEVBQUUsd0JBQU47QUFBb0JDLFlBQUFBLFNBQVMsRUFBRSxFQUEvQjtBQUFtQ0MsWUFBQUEsUUFBUSxFQUFFLEVBQTdDO0FBQWlEQyxZQUFBQSxpQkFBaUIsRUFBRSxDQUFDO0FBQUVILGNBQUFBLEVBQUUsRUFBRSwyQkFBZSxDQUFyQjtBQUF3QkMsY0FBQUEsU0FBUyxFQUFFLEVBQW5DO0FBQXVDQyxjQUFBQSxRQUFRLEVBQUUsRUFBakQ7QUFBcURFLGNBQUFBLGdCQUFnQixFQUFFO0FBQUVGLGdCQUFBQSxRQUFRLEVBQUU7QUFBRUEsa0JBQUFBLFFBQVEsRUFBRSxFQUFaO0FBQWdCRyxrQkFBQUEsT0FBTyxFQUFFO0FBQXpCLGlCQUFaO0FBQTJDQyxnQkFBQUEsS0FBSyxFQUFFLEVBQWxEO0FBQXNEQyxnQkFBQUEsS0FBSyxFQUFFLEVBQTdEO0FBQWlFQyxnQkFBQUEsVUFBVSxzQkFBS2hCLFlBQUwsRUFBb0JLLFdBQVcsQ0FBQ0MsT0FBaEMsQ0FBM0U7QUFBc0hGLGdCQUFBQSxrQkFBa0IsRUFBRSxDQUFDO0FBQUVhLGtCQUFBQSxLQUFLLEVBQUViO0FBQVQsaUJBQUQ7QUFBMUksZUFBdkU7QUFBb1BPLGNBQUFBLGlCQUFpQixFQUFFO0FBQXZRLGFBQUQ7QUFBcEUsV0FBRDtBQUFsQixTQUFkO0FBQ0gsT0FMRCxNQUtPO0FBQ0hrSSxRQUFBQSxJQUFJLENBQUM5RCxNQUFMLENBQVkrRCxhQUFaLEVBQTJCLENBQTNCO0FBQ0FqRixRQUFBQSxrQkFBa0IsQ0FBQ2xELGlCQUFuQixHQUF1Q2tJLElBQXZDOztBQUNBLGNBQUtoSixRQUFMLENBQWM7QUFBQ1UsVUFBQUEsZUFBZSxFQUFFc0Q7QUFBbEIsU0FBZDtBQUNIO0FBQ0osS0F0bUJrQjs7QUFBQSxVQXdtQm5Cb0YsVUF4bUJtQixHQXdtQk4sWUFBTTtBQUFBLFVBQ1B0RyxNQURPLEdBQ0ksTUFBS0wsS0FEVCxDQUNQSyxNQURPOztBQUVmLFlBQUs5QyxRQUFMLENBQWM7QUFBQzhDLFFBQUFBLE1BQU0sRUFBRSxDQUFDQTtBQUFWLE9BQWQ7QUFDSCxLQTNtQmtCOztBQUVmLFVBQUtMLEtBQUw7QUFDSTRHLE1BQUFBLGlCQUFpQixFQUFFLElBRHZCO0FBRUkzQyxNQUFBQSxrQkFBa0IsRUFBRSxFQUZ4QjtBQUdJaEcsTUFBQUEsZUFBZSxFQUFFLEVBSHJCO0FBSUlvQyxNQUFBQSxNQUFNLEVBQUUsS0FKWjtBQUtJd0csTUFBQUEsd0JBQXdCLEVBQUU7QUFMOUIsMERBTXVCLElBTnZCLHFEQU9zQixDQUFDO0FBQUVuRyxNQUFBQSxLQUFLLEVBQUUsS0FBVDtBQUFnQkMsTUFBQUEsV0FBVyxFQUFFO0FBQTdCLEtBQUQsQ0FQdEIsZ0RBUWlCLEVBUmpCLDZDQVNjLEVBVGQsOENBVWU7QUFDUG1HLE1BQUFBLE1BQU0sRUFBRSxLQUREO0FBRVBDLE1BQUFBLFFBQVEsRUFBRTtBQUZILEtBVmYsZ0RBY2lCO0FBQ1QvSSxNQUFBQSxPQUFPLEVBQUU7QUFEQSxLQWRqQixnREFpQmlCLEVBakJqQixxREFrQnNCLElBbEJ0QixpQkFGZSxDQXNCZjs7QUFDQSxVQUFLbUUsc0JBQUwsR0FBOEJBLDhCQUF1QjZFLElBQXZCLCtCQUE5QjtBQUNBLFVBQUtwSCxtQkFBTCxHQUEyQkEsMkJBQW9Cb0gsSUFBcEIsK0JBQTNCO0FBeEJlO0FBeUJsQjs7OztXQXNORDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLGlDQUFvQjtBQUFBOztBQUNoQjtBQURnQixVQUVSeEQsS0FGUSxHQUVFLEtBQUt2RyxLQUZQLENBRVJ1RyxLQUZRO0FBR2hCLFVBQU1DLFdBQVcsR0FBRztBQUNoQjhCLFFBQUFBLGlCQUFpQixFQUFFLElBREg7QUFFaEJDLFFBQUFBLDJCQUEyQixFQUFFLElBRmI7QUFHaEJDLFFBQUFBLGdCQUFnQixFQUFFO0FBSEYsT0FBcEI7QUFNQSxpQ0FBZWpDLEtBQWYsRUFBc0JDLFdBQXRCLEVBQW1DbUMsSUFBbkMsQ0FBd0MsVUFBQXpJLE1BQU0sRUFBSTtBQUM5QyxRQUFBLE1BQUksQ0FBQ00sdUJBQUwsQ0FBNkI7QUFBQ04sVUFBQUEsTUFBTSxFQUFOQSxNQUFEO0FBQVNDLFVBQUFBLFVBQVUsRUFBRSxNQUFJLENBQUNIO0FBQTFCLFNBQTdCO0FBQ0gsT0FGRDtBQUdIOzs7V0FvVUQsa0JBQVM7QUFBQTs7QUFBQSx5QkFDa0ksS0FBSytDLEtBRHZJO0FBQUEsVUFDRzRHLGlCQURILGdCQUNHQSxpQkFESDtBQUFBLFVBQ3NCM0ksZUFEdEIsZ0JBQ3NCQSxlQUR0QjtBQUFBLFVBQ3VDRixXQUR2QyxnQkFDdUNBLFdBRHZDO0FBQUEsVUFDb0Q4SSx3QkFEcEQsZ0JBQ29EQSx3QkFEcEQ7QUFBQSxVQUM4RXZCLFFBRDlFLGdCQUM4RUEsUUFEOUU7QUFBQSxVQUN3RjJCLFdBRHhGLGdCQUN3RkEsV0FEeEY7QUFBQSxVQUNxR3hHLGdCQURyRyxnQkFDcUdBLGdCQURyRztBQUFBLFVBQ3VISixNQUR2SCxnQkFDdUhBLE1BRHZIO0FBQUEseUJBRW1CLEtBQUtwRCxLQUZ4QjtBQUFBLFVBRUd1RyxLQUZILGdCQUVHQSxLQUZIO0FBQUEsVUFFVTBELElBRlYsZ0JBRVVBLElBRlY7QUFBQSxVQUdHbEosT0FISCxHQUdlRCxXQUhmLENBR0dDLE9BSEg7QUFJTCxVQUFJbUosVUFBVSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY3JKLE9BQWQsRUFBdUJzSixJQUF2QixDQUE0QixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxlQUFVRCxDQUFDLENBQUM3RyxLQUFGLEdBQVU4RyxDQUFDLENBQUM5RyxLQUFaLEdBQW9CLENBQUMsQ0FBckIsR0FBeUIsQ0FBbkM7QUFBQSxPQUE1QixDQUFqQjtBQUNBeUcsTUFBQUEsVUFBVSxDQUFDbEksTUFBWCxLQUFzQmtJLFVBQVUsR0FBR0EsVUFBVSxDQUFDaEksR0FBWCxDQUFlLFVBQUFzSSxNQUFNO0FBQUEsK0NBQVNBLE1BQVQ7QUFBaUJ2SixVQUFBQSxFQUFFLEVBQUV1SixNQUFNLENBQUNDO0FBQTVCO0FBQUEsT0FBckIsQ0FBbkM7QUFDQXJCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0IsY0FBcEIsRUFBb0MsOEJBQXBDLEVBQW9FLEtBQUt0RyxLQUF6RTtBQUNBLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBSyxVQUFBLFNBQVMsRUFBQyx5QkFBZjtBQUFBLGtDQUNRLHFCQUFDLGFBQUQ7QUFDSSxZQUFBLElBQUksRUFBRTRHLGlCQUFpQixHQUFHLGFBQUgsR0FBbUIsUUFEOUM7QUFFSSxZQUFBLElBQUksRUFBQyxJQUZUO0FBR0ksWUFBQSxjQUFjLEVBQUMsUUFIbkI7QUFJSSxZQUFBLE9BQU8sRUFBQyxVQUpaO0FBS0ksWUFBQSxPQUFPLEVBQUU7QUFBQSxxQkFBTSxNQUFJLENBQUNySixRQUFMLENBQWM7QUFBRXFKLGdCQUFBQSxpQkFBaUIsRUFBRSxDQUFDQTtBQUF0QixlQUFkLENBQU47QUFBQTtBQUxiLFlBRFIsZUFRUTtBQUFLLFlBQUEsU0FBUyxFQUFDLGFBQWY7QUFBQSxtQ0FDSSxxQkFBQyw2QkFBRDtBQUFtQixjQUFBLEtBQUssRUFBRW5HLGdCQUExQjtBQUE0QyxjQUFBLHFCQUFxQixFQUFFLEtBQUtzRjtBQUF4RTtBQURKLFlBUlI7QUFBQSxVQURKLGVBYUk7QUFBSyxVQUFBLFNBQVMsRUFDViw0QkFBVztBQUNQLGdDQUFvQixJQURiO0FBRVAsOEJBQWtCYTtBQUZYLFdBQVgsQ0FESjtBQUFBLGtDQU1JO0FBQUssWUFBQSxTQUFTLEVBQUMsZUFBZjtBQUFBLG9DQUNJO0FBQUssY0FBQSxTQUFTLEVBQUMsU0FBZjtBQUFBLHNDQUNJO0FBQUssZ0JBQUEsU0FBUyxFQUFDLFNBQWY7QUFBQSx3Q0FDSTtBQUFLLGtCQUFBLFNBQVMsRUFBQyxLQUFmO0FBQUEseUNBQ0kscUJBQUMsYUFBRDtBQUNJLG9CQUFBLEtBQUssRUFBQyxLQURWO0FBRUksb0JBQUEsT0FBTyxFQUFDLFNBRlo7QUFHSSxvQkFBQSxJQUFJLEVBQUMsSUFIVDtBQUlJLG9CQUFBLE9BQU8sRUFBRTtBQUFBLDZCQUFNLE1BQUksQ0FBQzdHLGdCQUFMLEVBQU47QUFBQSxxQkFKYjtBQUtJLG9CQUFBLFdBQVcsRUFDUDtBQUNJLHNDQUFnQixlQURwQjtBQUVJLDRDQUFzQixlQUYxQjtBQUdJLDZDQUF1QjtBQUgzQjtBQU5SO0FBREosa0JBREosZUFlSTtBQUFLLGtCQUFBLFNBQVMsRUFBQyxLQUFmO0FBQUEseUNBQ0kscUJBQUMsYUFBRDtBQUFRLG9CQUFBLEtBQUssRUFBQyxNQUFkO0FBQXFCLG9CQUFBLE9BQU8sRUFBQyxXQUE3QjtBQUF5QyxvQkFBQSxJQUFJLEVBQUMsSUFBOUM7QUFBbUQsb0JBQUEsV0FBVyxFQUFFO0FBQzVELHNDQUFnQixrQkFENEM7QUFFNUQsNENBQXNCLGtCQUZzQztBQUc1RCw2Q0FBdUI7QUFIcUMscUJBQWhFO0FBS0Esb0JBQUEsT0FBTyxFQUFFLEtBQUs0RztBQUxkO0FBREosa0JBZkosZUF3Qkk7QUFBSyxrQkFBQSxTQUFTLEVBQUMsS0FBZjtBQUFBLHlDQUNJLHFCQUFDLGFBQUQ7QUFDSSxvQkFBQSxLQUFLLEVBQUMsV0FEVjtBQUVJLG9CQUFBLE9BQU8sRUFBQyxXQUZaO0FBR0ksb0JBQUEsSUFBSSxFQUFDLElBSFQ7QUFJSSxvQkFBQSxXQUFXLEVBQUU7QUFDVCxzQ0FBZ0Isa0JBRFA7QUFFVCw0Q0FBc0Isa0JBRmI7QUFHVCw2Q0FBdUI7QUFIZCxxQkFKakI7QUFTSSxvQkFBQSxPQUFPLEVBQUU7QUFBQSw2QkFBTSxNQUFJLENBQUM3RSxRQUFMLENBQWM7QUFBQ3JELHdCQUFBQSxLQUFLLEVBQUU7QUFBUix1QkFBZCxDQUFOO0FBQUE7QUFUYjtBQURKLGtCQXhCSjtBQUFBLGdCQURKLGVBdUNJO0FBQUssZ0JBQUEsU0FBUyxFQUFDLFdBQWY7QUFBQSx1Q0FDSSxxQkFBQywyQkFBRDtBQURKLGdCQXZDSjtBQUFBLGNBREosRUE2Q1E0QixNQUFNLGlCQUFJLHFCQUFDLHVCQUFEO0FBQWEsY0FBQSxLQUFLLEVBQUVtRCxLQUFwQjtBQUEyQixjQUFBLElBQUksRUFBRTBEO0FBQWpDLGNBN0NsQjtBQUFBLFlBTkosZUFzREk7QUFBSyxZQUFBLFNBQVMsRUFBQyxhQUFmO0FBQUEsb0NBQ0k7QUFBSyxjQUFBLFNBQVMsRUFBQyxzQkFBZjtBQUFBLHdCQUVRakosZUFBZSxDQUFDa0IsR0FBaEIsQ0FBb0IsVUFBQ0MsZUFBRCxFQUFrQjlCLEtBQWxCLEVBQTRCO0FBQzVDLG9CQUFJZSxpQkFBaUIsR0FBRyxFQUF4QjtBQUNBZSxnQkFBQUEsZUFBZSxDQUFDZixpQkFBaEIsQ0FBa0N1QyxPQUFsQyxDQUEwQyxVQUFBYyxJQUFJLEVBQUk7QUFDOUNyRCxrQkFBQUEsaUJBQWlCLENBQUNhLElBQWxCLENBQXVCd0MsSUFBdkI7QUFDQUEsa0JBQUFBLElBQUksQ0FBQ3JELGlCQUFMLENBQXVCdUMsT0FBdkIsQ0FBK0IsVUFBQWMsSUFBSSxFQUFJO0FBQ25DckQsb0JBQUFBLGlCQUFpQixDQUFDYSxJQUFsQixDQUF1QndDLElBQXZCO0FBQ0gsbUJBRkQ7QUFHSCxpQkFMRDtBQU1BLG9DQUNJO0FBQUssa0JBQUEsU0FBUyxFQUNWLDRCQUFXO0FBQ1Asd0NBQW9CLElBRGI7QUFDbUIsK0NBQTJCcEUsS0FBSyxLQUFLO0FBRHhELG1CQUFYLENBREo7QUFBQSw2QkFLS0EsS0FBSyxLQUFLLENBQVYsaUJBQWU7QUFBSyxvQkFBQSxTQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUEsb0JBTHBCLEVBT1FlLGlCQUFpQixDQUFDYyxHQUFsQixDQUFzQixVQUFBaEIsU0FBUyxFQUFJO0FBQy9CLHdDQUNJO0FBQUssc0JBQUEsU0FBUyxFQUFFLDRCQUFXO0FBQ3ZCLCtDQUF1QixJQURBO0FBRXZCLGtDQUFVQSxTQUFTLENBQUMrQjtBQUZHLHVCQUFYLENBQWhCO0FBQUEsNkNBSUkscUJBQUMsK0JBQUQ7QUFDSSx3QkFBQSxXQUFXLEVBQUVuQyxXQURqQjtBQUVJLHdCQUFBLFlBQVksRUFBRUksU0FGbEI7QUFHSSx3QkFBQSxXQUFXLEVBQUVBLFNBQVMsQ0FBQ0QsRUFIM0I7QUFJSSx3QkFBQSxpQkFBaUIsRUFBRWtCLGVBQWUsQ0FBQ2xCLEVBSnZDO0FBS0ksd0JBQUEsZUFBZSxFQUFFa0IsZUFMckI7QUFNSSx3QkFBQSxZQUFZLEVBQUVqQixTQUFTLENBQUNDLFFBTjVCO0FBT0ksd0JBQUEsY0FBYyxFQUFFLE1BQUksQ0FBQ2dELGNBUHpCO0FBUUksd0JBQUEsZUFBZSxFQUFFLE1BQUksQ0FBQzhFLGVBUjFCO0FBU0ksd0JBQUEsYUFBYSxFQUFFLE1BQUksQ0FBQ2hCLGFBVHhCO0FBVUksd0JBQUEsd0JBQXdCLEVBQUUyQix3QkFWOUI7QUFXSSx3QkFBQSxRQUFRLEVBQUV2QixRQVhkO0FBWUksd0JBQUEsV0FBVyxFQUFFMkIsV0FaakI7QUFhSSx3QkFBQSxnQkFBZ0IsRUFBRSxNQUFJLENBQUNwQyxnQkFiM0I7QUFjSSx3QkFBQSxtQkFBbUIsRUFBRSxNQUFJLENBQUN4SCxtQkFkOUI7QUFlSSx3QkFBQSxpQkFBaUIsRUFBRSxNQUFJLENBQUMrSSxpQkFmNUI7QUFnQkksd0JBQUEsbUJBQW1CLEVBQUUsTUFBSSxDQUFDekQsbUJBaEI5QjtBQWlCSSx3QkFBQSwyQkFBMkIsRUFBRSxNQUFJLENBQUNxQjtBQWpCdEM7QUFKSix1QkFHUzdGLFNBQVMsQ0FBQ0QsRUFIbkIsQ0FESjtBQTBCSCxtQkEzQkQsQ0FQUjtBQUFBLGtCQURKO0FBdUNILGVBL0NEO0FBRlIsY0FESixlQXFESTtBQUFLLGNBQUEsU0FBUyxFQUFDLGNBQWY7QUFBQSxzQ0FDSTtBQUFNLGdCQUFBLFNBQVMsRUFBQyxPQUFoQjtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFLLGdCQUFBLFNBQVMsRUFBQyxRQUFmO0FBQUEsdUNBQ0kscUJBQUMsYUFBRDtBQUNJLGtCQUFBLEtBQUssRUFBQyxjQURWO0FBRUksa0JBQUEsT0FBTyxFQUFDLFdBRlo7QUFHSSxrQkFBQSxJQUFJLEVBQUMsSUFIVDtBQUlJLGtCQUFBLE9BQU8sRUFBRTtBQUFBLDJCQUFNLE1BQUksQ0FBQ2tELGNBQUwsQ0FBb0I7QUFBQzNDLHNCQUFBQSxLQUFLLEVBQUU7QUFBUixxQkFBcEIsQ0FBTjtBQUFBO0FBSmI7QUFESixnQkFGSjtBQUFBLGNBckRKO0FBQUEsWUF0REo7QUFBQSxVQWJKO0FBQUEsUUFESjtBQXdJSDs7OztFQTd2QndDa0osS0FBSyxDQUFDQyxTOzs7QUFnd0JuRDVLLGVBQWUsQ0FBQzZLLFlBQWhCLEdBQStCO0FBQzNCckUsRUFBQUEsS0FBSyxFQUFFLEVBRG9CO0FBRTNCN0YsRUFBQUEsS0FBSyxFQUFFLEVBRm9CO0FBRzNCZ0UsRUFBQUEsV0FBVyxFQUFFLEVBSGM7QUFJM0IvRCxFQUFBQSxXQUFXLEVBQUUsRUFKYztBQUszQnNKLEVBQUFBLElBQUksRUFBRSxFQUxxQjtBQU0zQlksRUFBQUEsU0FBUyxFQUFFLElBTmdCO0FBTzNCeEgsRUFBQUEsV0FBVyxFQUFFO0FBQUEsV0FBTSxLQUFLLENBQVg7QUFBQTtBQVBjLENBQS9CO0FBVUF0RCxlQUFlLENBQUMrSyxTQUFoQixHQUE0QjtBQUN4QnZFLEVBQUFBLEtBQUssRUFBRXVFLHNCQUFVQyxNQURPO0FBRXhCckssRUFBQUEsS0FBSyxFQUFFb0ssc0JBQVVDLE1BRk87QUFHeEJkLEVBQUFBLElBQUksRUFBRWEsc0JBQVVDLE1BSFE7QUFJeEJwSyxFQUFBQSxXQUFXLEVBQUVtSyxzQkFBVUUsS0FKQztBQUt4QnRHLEVBQUFBLFdBQVcsRUFBRW9HLHNCQUFVRSxLQUxDO0FBTXhCSCxFQUFBQSxTQUFTLEVBQUVDLHNCQUFVRyxJQU5HO0FBT3hCNUgsRUFBQUEsV0FBVyxFQUFFeUgsc0JBQVVJO0FBUEMsQ0FBNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRmlsdGVyRHJvcGRvd24gZnJvbSBcIi4vQ29tcG9uZW50cy9GaWx0ZXJEcm9wZG93bi9GaWx0ZXJEcm9wZG93blwiO1xyXG5pbXBvcnQgRmlsdGVyU2F2ZXIgZnJvbSBcIi4vQ29tcG9uZW50cy9GaWx0ZXJTYXZlci9GaWx0ZXJTYXZlclwiO1xyXG5cclxuaW1wb3J0IEZpbHRlckJyZWFkY3J1bWJzIGZyb20gXCIuL0NvbXBvbmVudHMvRmlsdGVyQnJlYWRjcnVtYnMvRmlsdGVyQnJlYWRjcnVtYnNcIjtcclxuXHJcbmltcG9ydCB7IGdlbmVyYXRlSUQsIGdldERyb3Bkb3duRmllbGRzSXRlbXMsIGdldE9wZXJhdG9ycywgZ2VuZXJhdGVDdXJyZW50Q29uZGl0aW9uUXVlcnksIGZldGNoVGFibGVEYXRhLCBmZXRjaFJlcXVlc3QsIHByZXBhcmVRdWVyeVBhcmFtcywgY2xvbmUsIGdldFRyZW5kRGF0YSwgcGFyc2VDb25kaXRpb25WYWx1ZSwgZ2V0VmFsdWVBZGRpdGlvbmFsRGF0YSB9IGZyb20gXCIuL3V0aWxzL3V0aWxzXCJcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4vQ29tcG9uZW50cy9FeHBhbmREcm9wZG93bi9FeHBhbmREcm9wZG93blwiIFxyXG5pbXBvcnQgRmlsdGVyQ29uZGl0aW9uSXRlbSBmcm9tIFwiLi9Db21wb25lbnRzL0ZpbHRlckNvbmRpdGlvbkl0ZW0vRmlsdGVyQ29uZGl0aW9uSXRlbVwiO1xyXG5pbXBvcnQgRmlsdGVyVGVtcGxhdGVzIGZyb20gXCIuL0NvbXBvbmVudHMvRmlsdGVyVGVtcGxhdGVzL0ZpbHRlclRlbXBsYXRlc1wiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImNyb3NzLWZldGNoXCI7XHJcbmltcG9ydCBGaWx0ZXJEcm9wZG93bkxpc3QgZnJvbSBcIi4vQ29tcG9uZW50cy9GaWx0ZXJEcm9wZG93bkxpc3QvRmlsdGVyRHJvcGRvd25MaXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJDb25kaXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNGaWx0ZXJDb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZUZpZWxkRGF0YToge30sXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbnNBcnJheTogW10sXHJcbiAgICAgICAgICAgIGlzU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZVRhYmxlRmllbGRzRGF0YToge30sXHJcbiAgICAgICAgICAgIGlzRmlsdGVyQ29sbGFwc2VkOiB0cnVlLFxyXG4gICAgICAgICAgICBicmVhZGNydW1ic0l0ZW1zOiBbeyBsYWJlbDogJ0FsbCcsIGNvbmRpdGlvbklkOiAnYWxsJyB9XSxcclxuICAgICAgICAgICAgcXVlcnlUb1NhdmU6ICcnLFxyXG4gICAgICAgICAgICBsYWJlbEFycjogW10sXHJcbiAgICAgICAgICAgIGFsZXJ0RGF0YToge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aXZlOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRhYmxlRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiB7fVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcGVyYXRvckFycjogW10sXHJcbiAgICAgICAgICAgIGNsaWNrZWRMaXN0SW5kZXg6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5hZGROZXdPcGVyYXRvciA9IHRoaXMuYWRkTmV3T3BlcmF0b3IuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuZ2V0VmFsdWVBZGRpdGlvbmFsRGF0YSA9IGdldFZhbHVlQWRkaXRpb25hbERhdGEuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnBhcnNlQ29uZGl0aW9uVmFsdWUgPSBwYXJzZUNvbmRpdGlvblZhbHVlLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaFJlZmVyZW5jZVRhYmxlRGF0YVN1Y2Nlc3NlZCA9ICh7cmVzdWx0LCBwcm9wZXJ0aWVzfSkgPT4ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgZ2V0Q2xpY2tlZExpc3RJbmRleCA9ICh7aW5kZXh9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2xpY2tlZExpc3RJbmRleDogaW5kZXh9KTtcclxuICAgIH1cclxuICAgIC8vXHJcblxyXG4gICAgZmV0Y2hUYWJsZURhdGFTdWNjZXNzZWQgPSAoe3Jlc3VsdCwgcHJvcGVydGllc30pID0+IHtcclxuICAgICAgICBsZXQgZmllbGRzRGF0YUlEID0gZ2VuZXJhdGVJRCgpO1xyXG4gICAgICAgIGNvbnN0IHsgcXVlcnksIGJsb2NrRmllbGRzLCBhbGxvd0ZpbGVkcyB9ID0gcHJvcGVydGllcztcclxuICAgICAgICBsZXQgZmllbGRzRHJvcGRvd25EYXRhID0gZ2V0RHJvcGRvd25GaWVsZHNJdGVtcyh7IHRhYmxlRmllbGRzOiByZXN1bHQuY29sdW1ucywgaW5kZXg6IGZpZWxkc0RhdGFJRCwgYmxvY2tGaWVsZHMsIGFsbG93RmlsZWRzIH0pO1xyXG4gICAgICAgIGxldCBjb25kaXRpb25zQXJyYXkgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBnZW5lcmF0ZUlEKCksXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogXCJcIixcclxuICAgICAgICAgICAgICAgIHJlbGF0ZWRDb25kaXRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZ2VuZXJhdGVJRCgpICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0aW9yOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc0RhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRzRGF0YUlEXTogcmVzdWx0LmNvbHVtbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzRHJvcGRvd25EYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogZmllbGRzRHJvcGRvd25EYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdGVkQ29uZGl0aW9uczogW11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgaWYgKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIGxldCBjb3B5UXVlcnkgPSBxdWVyeTtcclxuICAgICAgICAgICAgaWYgKGNvcHlRdWVyeS5pbmRleE9mKCdeRVEnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjb3B5UXVlcnkgPSBjb3B5UXVlcnkuc2xpY2UoMCwgY29weVF1ZXJ5LmluZGV4T2YoJ15FUScpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBvcGVyYXRvclBvc2l0aW9uID0gY29weVF1ZXJ5LmluZGV4T2YoJ15OUScsIHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvclBvc2l0aW9uID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnNBcnJheVtjb25kaXRpb25zQXJyYXkubGVuZ3RoIC0gMV0uY29uZGl0aW9uID0gY29weVF1ZXJ5LnNsaWNlKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbnNBcnJheVtjb25kaXRpb25zQXJyYXkubGVuZ3RoIC0gMV0uY29uZGl0aW9uID0gY29weVF1ZXJ5LnNsaWNlKHBvc2l0aW9uLCBvcGVyYXRvclBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbnNBcnJheS5wdXNoKHsgaWQ6IGdlbmVyYXRlSUQoKSArIG9wZXJhdG9yUG9zaXRpb24sIGNvbmRpdGlvbjogJycsIG9wZXJhdG9yOiAnXk5RJywgcmVsYXRlZENvbmRpdGlvbnM6IFt7IGlkOiBnZW5lcmF0ZUlEKCkgKyBvcGVyYXRvclBvc2l0aW9uICsgMSwgY29uZGl0aW9uOiAnJywgb3BlcmF0b3I6ICcnLCBjb25kaXRpb25PcHRpb25zOiB7IG9wZXJhdG9yOiB7IG9wZXJhdG9yOiAnJywgZWRpdGlvcjogJycgfSwgZmllbGQ6ICcnLCB2YWx1ZTogJycsIGZpZWxkc0RhdGE6IHsgW2ZpZWxkc0RhdGFJRF06IHJlc3VsdC5jb2x1bW5zIH0sIGZpZWxkc0Ryb3Bkb3duRGF0YTogW3sgaXRlbXM6IGZpZWxkc0Ryb3Bkb3duRGF0YSB9XSB9LCByZWxhdGVkQ29uZGl0aW9uczogW10gfV0gfSlcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gb3BlcmF0b3JQb3NpdGlvbiArIDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uZGl0aW9uc0FycmF5Lm1hcCgoZ2xvYmFsQ29uZGl0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RPcGVyYXRvcjtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9wZXJhdG9yUG9zaXRpb24gPSBnbG9iYWxDb25kaXRpb24uY29uZGl0aW9uLmluZGV4T2YoJ14nLCBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZXJhdG9yUG9zaXRpb24gPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobGFzdE9wZXJhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdeT1InOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbENvbmRpdGlvbi5yZWxhdGVkQ29uZGl0aW9uc1tnbG9iYWxDb25kaXRpb24ucmVsYXRlZENvbmRpdGlvbnMubGVuZ3RoIC0gMV0ucmVsYXRlZENvbmRpdGlvbnNbZ2xvYmFsQ29uZGl0aW9uLnJlbGF0ZWRDb25kaXRpb25zW2dsb2JhbENvbmRpdGlvbi5yZWxhdGVkQ29uZGl0aW9ucy5sZW5ndGggLSAxXS5yZWxhdGVkQ29uZGl0aW9ucy5sZW5ndGggLSAxXS5jb25kaXRpb24gPSBnbG9iYWxDb25kaXRpb24uY29uZGl0aW9uLnNsaWNlKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsQ29uZGl0aW9uLnJlbGF0ZWRDb25kaXRpb25zW2dsb2JhbENvbmRpdGlvbi5yZWxhdGVkQ29uZGl0aW9ucy5sZW5ndGggLSAxXS5jb25kaXRpb24gPSBnbG9iYWxDb25kaXRpb24uY29uZGl0aW9uLnNsaWNlKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChsYXN0T3BlcmF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXk9SJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbENvbmRpdGlvbi5yZWxhdGVkQ29uZGl0aW9uc1tnbG9iYWxDb25kaXRpb24ucmVsYXRlZENvbmRpdGlvbnMubGVuZ3RoIC0gMV0ucmVsYXRlZENvbmRpdGlvbnNbZ2xvYmFsQ29uZGl0aW9uLnJlbGF0ZWRDb25kaXRpb25zW2dsb2JhbENvbmRpdGlvbi5yZWxhdGVkQ29uZGl0aW9ucy5sZW5ndGggLSAxXS5yZWxhdGVkQ29uZGl0aW9ucy5sZW5ndGggLSAxXS5jb25kaXRpb24gPSBnbG9iYWxDb25kaXRpb24uY29uZGl0aW9uLnNsaWNlKHBvc2l0aW9uLCBvcGVyYXRvclBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsQ29uZGl0aW9uLnJlbGF0ZWRDb25kaXRpb25zW2dsb2JhbENvbmRpdGlvbi5yZWxhdGVkQ29uZGl0aW9ucy5sZW5ndGggLSAxXS5jb25kaXRpb24gPSBnbG9iYWxDb25kaXRpb24uY29uZGl0aW9uLnNsaWNlKHBvc2l0aW9uLCBvcGVyYXRvclBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvclBvc2l0aW9uID09PSBjb3B5UXVlcnkuaW5kZXhPZignXk9SJywgcG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbENvbmRpdGlvbi5yZWxhdGVkQ29uZGl0aW9uc1tnbG9iYWxDb25kaXRpb24ucmVsYXRlZENvbmRpdGlvbnMubGVuZ3RoIC0gMV0ucmVsYXRlZENvbmRpdGlvbnMucHVzaCh7IGlkOiBnZW5lcmF0ZUlEKCkgKyBvcGVyYXRvclBvc2l0aW9uLCBjb25kaXRpb246ICcnLCBvcGVyYXRvcjogJ15PUicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gb3BlcmF0b3JQb3NpdGlvbiArIDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RPcGVyYXRvciA9ICdeT1InO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbENvbmRpdGlvbi5yZWxhdGVkQ29uZGl0aW9ucy5wdXNoKHsgaWQ6IGdlbmVyYXRlSUQoKSArIG9wZXJhdG9yUG9zaXRpb24sIGNvbmRpdGlvbjogJycsIG9wZXJhdG9yOiAnXicsIHJlbGF0ZWRDb25kaXRpb25zOiBbXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBvcGVyYXRvclBvc2l0aW9uICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE9wZXJhdG9yID0gJ14nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGxldCBvcGVyYXRvcnMgPSBnZXRPcGVyYXRvcnMocmVzdWx0LmNvbHVtbnMpO1xyXG4gICAgICAgICAgICBjb25kaXRpb25zQXJyYXkgPSBjb25kaXRpb25zQXJyYXkubWFwKGdsb2JhbENvbmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsQ29uZC5yZWxhdGVkQ29uZGl0aW9ucyA9IGdsb2JhbENvbmQucmVsYXRlZENvbmRpdGlvbnMubWFwKHBhcmVudENvbmQgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0geyBjb25kaXRpb246IHBhcmVudENvbmQuY29uZGl0aW9uLCBvcGVyYXRvcnMsIHRhYmxlRmllbGRzOiByZXN1bHQuY29sdW1ucywgZ2xvYmFsSUQ6IGdsb2JhbENvbmQuaWQsIGN1cnJlbnRJRDogcGFyZW50Q29uZC5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmRpdGlvbk9wdGlvbnMgPSB0aGlzLnBhcnNlQ29uZGl0aW9uVmFsdWUocGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb25kID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wYXJlbnRDb25kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25PcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb25kLnJlbGF0ZWRDb25kaXRpb25zID0gcGFyZW50Q29uZC5yZWxhdGVkQ29uZGl0aW9ucy5tYXAoY2hpbGRDb25kID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7IGNvbmRpdGlvbjogY2hpbGRDb25kLmNvbmRpdGlvbiwgb3BlcmF0b3JzLCB0YWJsZUZpZWxkczogcmVzdWx0LmNvbHVtbnMsIGdsb2JhbElEOiBnbG9iYWxDb25kLmlkLCBjdXJyZW50SUQ6IGNoaWxkQ29uZC5pZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb25PcHRpb25zID0gdGhpcy5wYXJzZUNvbmRpdGlvblZhbHVlKHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jaGlsZENvbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25PcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnRDb25kO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBnbG9iYWxDb25kO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFibGVGaWVsZHM6IHJlc3VsdCxcclxuICAgICAgICAgICAgY29uZGl0aW9uc0FycmF5XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRPcGVyYXRvcnNBcnJheSA9ICh7cmVzdWx0fSkgPT4ge1xyXG4gICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBydW5CdXR0b25DbGlja2VkID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZGl0aW9uc0FycmF5IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBjb3B5Q29uZGl0aW9uQXJyYXkgPSBjbG9uZShjb25kaXRpb25zQXJyYXkpO1xyXG4gICAgICAgIGNvcHlDb25kaXRpb25BcnJheSA9IGNvcHlDb25kaXRpb25BcnJheS5tYXAoZ2xvYmFsQ29uZCA9PiB7XHJcbiAgICAgICAgICAgIGdsb2JhbENvbmQucmVsYXRlZENvbmRpdGlvbnMubWFwKHBhcmVudENvbmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Q29uZC5mYWlsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHBhcmVudENvbmQucmVsYXRlZENvbmRpdGlvbnMubWFwKGNoaWxkQ29uZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb25kLmZhaWxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZENvbmQ7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudENvbmQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxDb25kO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjb25kaXRpb25zQXJyYXk6IGNvcHlDb25kaXRpb25BcnJheVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIEZJTFRFUl9BQ1RJT05TLlFVRVJZX0dFTkVSQVRFLlNUQVJURURcclxuICAgICAgICB0aGlzLmdlbmVyYXRlUXVlcnkoe29wZXJhdGlvbjogXCJydW5cIn0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVRdWVyeSA9ICh7IG9wZXJhdGlvbiB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb25kaXRpb25zQXJyYXksIGlzU2F2ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IG9uU2VuZFF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0UXVlcnkgPSBcIlwiO1xyXG4gICAgICAgIGxldCBlcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBicmVhZGNydW1ic0l0ZW1zID0gW3sgbGFiZWw6IFwiQWxsXCIsIGNvbmRpdGlvbklkOiBcImFsbFwifV07XHJcbiAgICAgICAgY29uZGl0aW9uc0FycmF5LmZvckVhY2goZ2xvYmFsQ29uZCA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdFF1ZXJ5ICs9IGdsb2JhbENvbmQub3BlcmF0b3I7XHJcbiAgICAgICAgICAgIGdsb2JhbENvbmQucmVsYXRlZENvbmRpdGlvbnMuZm9yRWFjaCgocGFyZW50Q29uZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFF1ZXJ5ICs9IHBhcmVudENvbmQub3BlcmF0b3I7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnJlYWRjcnVtYkl0ZW0gPSB7IGxhYmVsOiBgJHtnbG9iYWxDb25kLm9wZXJhdG9yICYmIGluZGV4ID09PSAwID8gJ29yJyA6ICcnfWAsIGNvbmRpdGlvbklkOiBwYXJlbnRDb25kLmlkLCBnbG9iYWxDb25kaXRpb25JZDogZ2xvYmFsQ29uZC5pZCB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IGdlbmVyYXRlZENvbmRpdGlvbiA9IGdlbmVyYXRlQ3VycmVudENvbmRpdGlvblF1ZXJ5KHBhcmVudENvbmQsIG9wZXJhdGlvbiwgYnJlYWRjcnVtYkl0ZW0pXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyQ29uZGl0aW9uID0gZ2VuZXJhdGVkQ29uZGl0aW9uLmNvbmRpdGlvblF1ZXJ5O1xyXG4gICAgICAgICAgICAgICAgYnJlYWRjcnVtYkl0ZW0gPSBnZW5lcmF0ZWRDb25kaXRpb24uYnJlYWRjcnVtYkl0ZW07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0UXVlcnkgKz0gY3VyQ29uZGl0aW9uO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICdydW4nICYmICFjdXJDb25kaXRpb24gJiYgIXBhcmVudENvbmQuY29uZGl0aW9uT3B0aW9ucy5maWVsZCAmJiBjb25kaXRpb25zQXJyYXkubGVuZ3RoID09PSAxICYmIGdsb2JhbENvbmQucmVsYXRlZENvbmRpdGlvbnMubGVuZ3RoID09PSAxICYmICFwYXJlbnRDb25kLnJlbGF0ZWRDb25kaXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFF1ZXJ5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoKEZJTFRFUl9BQ1RJT05TLlFVRVJZX0dFTkVSQVRFLkZBSUxFRCwgeyBnbG9iYWxDb25kaXRpb25JRDogZ2xvYmFsQ29uZC5pZCwgY3VycmVudENvbmRpdGlvbklEOiBwYXJlbnRDb25kLmlkIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb25kLnJlbGF0ZWRDb25kaXRpb25zLmZvckVhY2goY2hpbGRDb25kID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRRdWVyeSArPSBjaGlsZENvbmQub3BlcmF0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdlbmVyYXRlZENvbmRpdGlvbiA9IGdlbmVyYXRlQ3VycmVudENvbmRpdGlvblF1ZXJ5KGNoaWxkQ29uZCwgb3BlcmF0aW9uLCBicmVhZGNydW1iSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1ckNvbmRpdGlvbiA9IGdlbmVyYXRlZENvbmRpdGlvbi5jb25kaXRpb25RdWVyeTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhZGNydW1iSXRlbSA9IGdlbmVyYXRlZENvbmRpdGlvbi5icmVhZGNydW1iSXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFF1ZXJ5ICs9IGN1ckNvbmRpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaChGSUxURVJfQUNUSU9OUy5RVUVSWV9HRU5FUkFURS5GQUlMRUQsIHsgZ2xvYmFsQ29uZGl0aW9uSUQ6IGdsb2JhbENvbmQuaWQsIGN1cnJlbnRDb25kaXRpb25JRDogY2hpbGRDb25kLmlkIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJJdGVtLmxhYmVsID0gYnJlYWRjcnVtYkl0ZW0ubGFiZWwudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWRjcnVtYnNJdGVtcy5wdXNoKGJyZWFkY3J1bWJJdGVtKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICBvblNlbmRRdWVyeShyZXN1bHRRdWVyeSk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wZXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncnVuJzpcclxuICAgICAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaChGSUxURVJfQUNUSU9OUy5RVUVSWV9HRU5FUkFURS5TVUNDRVNTRUQsIHsgdmFsdWU6IHJlc3VsdFF1ZXJ5IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicmVhZGNydW1ic0l0ZW1zIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdzYXZlJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlUb1NhdmU6IHJlc3VsdFF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NhdmU6ICFpc1NhdmVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0VmFsdWVBZGRpdGlvbmFsRGF0YSA9ICh7IHRhYmxlRmllbGRzLCBlZGl0b3IsIGZpZWxkLCBnbG9iYWxJRCwgY3VycmVudElEIH0pID0+IHtcclxuICAgIC8vICAgICBsZXQgdmFsdWVBZGRpdGlvbmFsRGF0YSA9IFtdO1xyXG4gICAgLy8gICAgIHN3aXRjaCAoZWRpdG9yKSB7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgJ2Nob2ljZV9maWVsZF9uYW1lcyc6XHJcbiAgICAvLyAgICAgICAgIGNhc2UgJ2dsaWRlX2RhdGVfZXF1aXZhbGVudCc6XHJcbiAgICAvLyAgICAgICAgIGNhc2UgJ2dsaWRlX2RhdGVfY29tcGFyYXRpdmUnOlxyXG4gICAgLy8gICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRhYmxlRmllbGRzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHRhYmxlRmllbGRzW2tleV0udHlwZSA9PT0gdGFibGVGaWVsZHNbZmllbGRdLnR5cGUgJiYgSlNPTi5zdHJpbmdpZnkodGFibGVGaWVsZHNba2V5XSkgIT09IEpTT04uc3RyaW5naWZ5KHRhYmxlRmllbGRzW2ZpZWxkXSkpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGVkaXRvciA9PT0gJ2dsaWRlX2RhdGVfZXF1aXZhbGVudCcpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQWRkaXRpb25hbERhdGEucHVzaCh7IGlkOiB0YWJsZUZpZWxkc1trZXldLm5hbWUsIGxhYmVsOiB0YWJsZUZpZWxkc1trZXldLmxhYmVsLCBkcm9wZG93bjogJ3ZhbHVlJywgdHlwZTogJ2dsaWRlX2RhdGVfZXF1aXZhbGVudCcsIGluZGV4OiAnMScgfSlcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlZGl0b3IgPT09ICdnbGlkZV9kYXRlX2NvbXBhcmF0aXZlJykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVBZGRpdGlvbmFsRGF0YS5wdXNoKHsgaWQ6IHRhYmxlRmllbGRzW2tleV0ubmFtZSwgbGFiZWw6IHRhYmxlRmllbGRzW2tleV0ubGFiZWwsIGRyb3Bkb3duOiAndmFsdWUnLCB0eXBlOiAnZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZScsIGluZGV4OiAnMycgfSlcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQWRkaXRpb25hbERhdGEucHVzaCh7IGlkOiB0YWJsZUZpZWxkc1trZXldLm5hbWUsIGxhYmVsOiB0YWJsZUZpZWxkc1trZXldLmxhYmVsLCBkcm9wZG93bjogJ3ZhbHVlJyB9KVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgIC8vICAgICAgICAgY2FzZSAnY2hvaWNlJzpcclxuICAgIC8vICAgICAgICAgY2FzZSAnY2hvaWNlX211bHRpcGxlJzpcclxuICAgIC8vICAgICAgICAgICAgIHZhbHVlQWRkaXRpb25hbERhdGEgPSB0YWJsZUZpZWxkc1tmaWVsZF0uY2hvaWNlcy5tYXAoY2hvaWNlID0+ICh7IGlkOiBjaG9pY2UudmFsdWUsIGxhYmVsOiBjaG9pY2UubGFiZWwsIGRyb3Bkb3duOiAndmFsdWUnIH0pKTtcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICBjYXNlICdjaG9pY2VfZHluYW1pYyc6XHJcbiAgICAvLyAgICAgICAgICAgICB2YWx1ZUFkZGl0aW9uYWxEYXRhID0gdGFibGVGaWVsZHNbZmllbGRdLmR5bmFtaWNfY2hvaWNlcy5tYXAoY2hvaWNlID0+ICh7IGlkOiBjaG9pY2UudmFsdWUsIGxhYmVsOiBjaG9pY2UubGFiZWwsIGRyb3Bkb3duOiAndmFsdWUnIH0pKTtcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICBjYXNlICdyZWZlcmVuY2UnOlxyXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc3lzcGFybV9maWVsZHM6IGAke3RhYmxlRmllbGRzW2ZpZWxkXS5yZWZlcmVuY2VfZGlzcGxheV9maWVsZH0sc3lzX2lkYCxcclxuICAgIC8vICAgICAgICAgICAgICAgICBzeXNwYXJtX3F1ZXJ5OiBgbmFtZUlTTk9URU1QVFlgXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmZldGNoUmVmZXJlbmNlRGF0YSh0YWJsZUZpZWxkc1tmaWVsZF0ucmVmZXJlbmNlLCBxdWVyeVBhcmFtcylcclxuICAgIC8vICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoUmVmZXJlbmNlRGF0YVN1Y2Nlc3NlZChyZXMpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZmVyZW5jZUZpZWxkRGF0YToge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGZpZWxkOiB0YWJsZUZpZWxkc1tmaWVsZF0sXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY3VycmVudENvbmRpdGlvbklEOiBjdXJyZW50SUQsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZ2xvYmFsQ29uZGl0aW9uSUQ6IGdsb2JhbElEXHJcbiAgICAvLyAgICAgICAgICAgICB9fSlcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgcmV0dXJuIHZhbHVlQWRkaXRpb25hbERhdGE7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgLy8gZmV0Y2hUYWJsZURhdGFcclxuICAgICAgICBjb25zdCB7IHRhYmxlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBzeXNwYXJtX29wZXJhdG9yczogdHJ1ZSxcclxuICAgICAgICAgICAgc3lzcGFybV9nZXRfZXh0ZW5kZWRfdGFibGVzOiB0cnVlLFxyXG4gICAgICAgICAgICBzeXNwYXJtX2tleXdvcmRzOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZmV0Y2hUYWJsZURhdGEodGFibGUsIHF1ZXJ5UGFyYW1zKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hUYWJsZURhdGFTdWNjZXNzZWQoe3Jlc3VsdCwgcHJvcGVydGllczogdGhpcy5wcm9wc30pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhZGROZXdPcGVyYXRvciA9ICh7dmFsdWUsIGN1cnJlbnRDb25kaXRpb25JRCwgZ2xvYmFsQ29uZGl0aW9uSUR9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb25kaXRpb25zQXJyYXksIHRhYmxlRmllbGRzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IG5ld0NvbmRpdGlvbnNBcnJheSA9IGNvbmRpdGlvbnNBcnJheTtcclxuICAgICAgICBjb25zdCBnbG9iYWxDb25kaXRpb25JbmRleEluQXJyID0gY29uZGl0aW9uc0FycmF5LmZpbmRJbmRleChjb25kID0+IGNvbmQuaWQgPT09IGdsb2JhbENvbmRpdGlvbklEKVxyXG4gICAgICAgIGNvbnN0IGZpZWxkc0RhdGFJRCA9IGdlbmVyYXRlSUQoKTtcclxuICAgICAgICBjb25zdCB7IGJsb2NrRmllbGRzLCBhbGxvd0ZpZWxkcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBmaWVsZHNEcm9wZG93bkRhdGEgPSBnZXREcm9wZG93bkZpZWxkc0l0ZW1zKHsgdGFibGVGaWVsZHM6IHRhYmxlRmllbGRzLmNvbHVtbnMsIGluZGV4OiBmaWVsZHNEYXRhSUQsIGJsb2NrRmllbGRzLCBhbGxvd0ZpZWxkcyB9KTtcclxuICAgICAgICBzd2l0Y2godmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIl5cIjpcclxuICAgICAgICAgICAgICAgIG5ld0NvbmRpdGlvbnNBcnJheVtnbG9iYWxDb25kaXRpb25JbmRleEluQXJyXS5yZWxhdGVkQ29uZGl0aW9ucy5wdXNoKHsgaWQ6IGdlbmVyYXRlSUQoKSwgY29uZGl0aW9uOiAnJywgb3BlcmF0b3I6IHZhbHVlLCBjb25kaXRpb25PcHRpb25zOiB7IG9wZXJhdG9yOiB7IG9wZXJhdG9yOiAnJywgZWRpdGlvcjogJycgfSwgZmllbGQ6ICcnLCB2YWx1ZTogJycsIGZpZWxkc0RhdGE6IHsgW2ZpZWxkc0RhdGFJRF06IHRhYmxlRmllbGRzLmNvbHVtbnMgfSwgZmllbGRzRHJvcGRvd25EYXRhOiBbeyBpdGVtczogZmllbGRzRHJvcGRvd25EYXRhIH1dIH0sIHJlbGF0ZWRDb25kaXRpb25zOiBbXSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnNBcnJheTogbmV3Q29uZGl0aW9uc0FycmF5XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ15PUic6XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudENvbmRpdGlvbkluZGV4SW5BcnIgPSBuZXdDb25kaXRpb25zQXJyYXlbZ2xvYmFsQ29uZGl0aW9uSW5kZXhJbkFycl0ucmVsYXRlZENvbmRpdGlvbnMuZmluZEluZGV4KGNvbmQgPT4gY29uZC5pZCA9PT0gY3VycmVudENvbmRpdGlvbklEKTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRDb25kaXRpb25PcHRpb25zID0geyAuLi5uZXdDb25kaXRpb25zQXJyYXlbZ2xvYmFsQ29uZGl0aW9uSW5kZXhJbkFycl0ucmVsYXRlZENvbmRpdGlvbnNbY3VycmVudENvbmRpdGlvbkluZGV4SW5BcnJdLmNvbmRpdGlvbk9wdGlvbnMgfTtcclxuICAgICAgICAgICAgICAgIG5ld0NvbmRpdGlvbnNBcnJheVtnbG9iYWxDb25kaXRpb25JbmRleEluQXJyXS5yZWxhdGVkQ29uZGl0aW9uc1tjdXJyZW50Q29uZGl0aW9uSW5kZXhJbkFycl0ucmVsYXRlZENvbmRpdGlvbnMucHVzaCh7IGlkOiBnZW5lcmF0ZUlEKCksIGNvbmRpdGlvbjogJycsIG9wZXJhdG9yOiB2YWx1ZSwgY29uZGl0aW9uT3B0aW9uczogeyAuLi5wYXJlbnRDb25kaXRpb25PcHRpb25zLCBvcGVyYXRvcjogeyBvcGVyYXRvcjogJycsIGVkaXRpb3I6ICcnIH0sIHZhbHVlOiAnJyB9IH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb25kaXRpb25zQXJyYXk6IG5ld0NvbmRpdGlvbnNBcnJheX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ15OUSc6XHJcbiAgICAgICAgICAgICAgICBuZXdDb25kaXRpb25zQXJyYXkucHVzaCh7aWQ6IGdlbmVyYXRlSUQoKSwgY29uZGl0aW9uOiAnJywgb3BlcmF0b3I6IHZhbHVlLCByZWxhdGVkQ29uZGl0aW9uczogW3sgaWQ6IGdlbmVyYXRlSUQoKSArIDEsIGNvbmRpdGlvbjogJycsIG9wZXJhdG9yOiAnJywgY29uZGl0aW9uT3B0aW9uczogeyBvcGVyYXRvcjogeyBvcGVyYXRvcjogJycsIGVkaXRpb3I6ICcnIH0sIGZpZWxkOiAnJywgdmFsdWU6ICcnLCBmaWVsZHNEYXRhOiB7IFtmaWVsZHNEYXRhSURdOiB0YWJsZUZpZWxkcy5jb2x1bW5zIH0sIGZpZWxkc0Ryb3Bkb3duRGF0YTogW3sgaXRlbXM6IGZpZWxkc0Ryb3Bkb3duRGF0YSB9XSB9LCByZWxhdGVkQ29uZGl0aW9uczogW10gfV19KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbmRpdGlvbnNBcnJheTogbmV3Q29uZGl0aW9uc0FycmF5fSlcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQWxsID0gKHt2YWx1ZX0pID0+IHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IFwiZGVsZXRlLWZpbHRlclwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdGFibGVGaWVsZHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkc0RhdGFJRCA9IGdlbmVyYXRlSUQoKTtcclxuICAgICAgICAgICAgY29uc3QgeyBibG9ja0ZpZWxkcywgYWxsb3dGaWxlZHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkc0Ryb3Bkb3duRGF0YSA9IGdldERyb3Bkb3duRmllbGRzSXRlbXMoeyB0YWJsZUZpZWxkczogdGFibGVGaWVsZHMuY29sdW1ucywgaW5kZXg6IGZpZWxkc0RhdGFJRCwgYmxvY2tGaWVsZHMsIGFsbG93RmlsZWRzIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbnNBcnJheTogW3sgaWQ6IGdlbmVyYXRlSUQoKSwgY29uZGl0aW9uOiAnJywgb3BlcmF0b3I6ICcnLCByZWxhdGVkQ29uZGl0aW9uczogW3sgaWQ6IGdlbmVyYXRlSUQoKSArIDEsIGNvbmRpdGlvbjogJycsIG9wZXJhdG9yOiAnJywgY29uZGl0aW9uT3B0aW9uczogeyBvcGVyYXRvcjogeyBvcGVyYXRvcjogJycsIGVkaXRpb3I6ICcnIH0sIGZpZWxkOiAnJywgdmFsdWU6ICcnLCBmaWVsZHNEYXRhOiB7IFtmaWVsZHNEYXRhSURdOiB0YWJsZUZpZWxkcy5jb2x1bW5zIH0sIGZpZWxkc0Ryb3Bkb3duRGF0YTogW3sgaXRlbXM6IGZpZWxkc0Ryb3Bkb3duRGF0YSB9XSB9LCByZWxhdGVkQ29uZGl0aW9uczogW10gfV0gfV0sXHJcbiAgICAgICAgICAgICAgICBpc1NhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYnJlYWRjcnVtYnNJdGVtczogW3sgbGFiZWw6ICdBbGwnLCBjb25kaXRpb25JZDogJ2FsbCcgfV1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4vL1xyXG4gICAgc2V0Q29uZGl0aW9uT3B0aW9uc09wZXJhdG9yID0gKHt2YWx1ZSwgY29uZGl0aW9uT3B0aW9uc30pID0+IHtcclxuICAgICAgICBjb25zdCB7IGFjdGl2ZUZpZWxkLCBhY3RpdmVGaWVsZHNEYXRhIH0gPSBjb25kaXRpb25PcHRpb25zO1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudENvbmRpdGlvbklELCBnbG9iYWxDb25kaXRpb25JRCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgdmFsdWVBZGRpdGlvbmFsRGF0YSA9IFtdO1xyXG4gICAgICAgIHZhbHVlQWRkaXRpb25hbERhdGEgPSB0aGlzLmdldFZhbHVlQWRkaXRpb25hbERhdGEoeyBzdGF0ZTogdGhpcy5zdGF0ZSwgdGFibGVGaWVsZHM6IGFjdGl2ZUZpZWxkc0RhdGEsIGVkaXRvcjogdmFsdWUuZWRpdG9yLCBmaWVsZDogYWN0aXZlRmllbGQsIGN1cnJlbnRJRDogY3VycmVudENvbmRpdGlvbklELCBnbG9iYWxJRDogZ2xvYmFsQ29uZGl0aW9uSUR9KTtcclxuICAgICAgICBjb25kaXRpb25PcHRpb25zID0ge1xyXG4gICAgICAgICAgICAuLi5jb25kaXRpb25PcHRpb25zLFxyXG4gICAgICAgICAgICBvcGVyYXRvcjogdmFsdWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICB2YWx1ZUFkZGl0aW9uYWxEYXRhXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbmRpdGlvbk9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29uZGl0aW9uT3B0aW9uc1ZhbHVlID0gKHt2YWx1ZSwgY29uZGl0aW9uT3B0aW9ucywgY29uZGl0aW9uT3B0aW9ufSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZWRpdG9yIH0gPSBjb25kaXRpb25PcHRpb25zLm9wZXJhdG9yO1xyXG4gICAgICAgIHN3aXRjaCAoZWRpdG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Nob2ljZV9tdWx0aXBsZSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcclxuICAgICAgICAgICAgICAgIGxldCBjb3B5VmFsdWUgPSBjb25kaXRpb25PcHRpb25zLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY29weVZhbHVlID0gY29weVZhbHVlID8gY29weVZhbHVlLnNwbGl0KCcsJykgOiBbXTtcclxuICAgICAgICAgICAgICAgIGNvcHlWYWx1ZS5pbmRleE9mKHZhbHVlKSA8IDAgPyBjb3B5VmFsdWUucHVzaCh2YWx1ZSkgOiBjb3B5VmFsdWUuc3BsaWNlKGNvcHlWYWx1ZS5pbmRleE9mKHZhbHVlKSwgMSk7XHJcbiAgICAgICAgICAgICAgICBjb3B5VmFsdWUgPSBjb3B5VmFsdWUuam9pbignLCcpO1xyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZSA9IGNvcHlWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25kaXRpb25PcHRpb25zO1xyXG4gICAgICAgICAgICBjYXNlICdiZXR3ZWVuX2ZpZWxkJzpcclxuICAgICAgICAgICAgY2FzZSAncmVsYXRpdmVfZmllbGQnOlxyXG4gICAgICAgICAgICBjYXNlICdnbGlkZV9kdXJhdGlvbic6XHJcbiAgICAgICAgICAgIGNhc2UgJ2dsaWRlX2RhdGVfZXF1aXZhbGVudCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2dsaWRlX2RhdGVfY29tcGFyYXRpdmUnOlxyXG4gICAgICAgICAgICAgICAgaWYgKCFjb25kaXRpb25PcHRpb25zLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWUgPSB7fTtcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbdmFsdWUuaW5kZXhdID0gdmFsdWUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uZGl0aW9uT3B0aW9ucztcclxuICAgICAgICAgICAgY2FzZSAndHJlbmRfZmllbGQnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmluZGV4ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlQWRkaXRpb25hbERhdGEgPSBnZXRUcmVuZERhdGEodmFsdWUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFjb25kaXRpb25PcHRpb25zLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVt2YWx1ZS5pbmRleF0gPSB2YWx1ZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25kaXRpb25PcHRpb25zO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9uc1tjb25kaXRpb25PcHRpb25dID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uZGl0aW9uT3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29uZGl0aW9uT3B0aW9ucyA9ICh7dmFsdWUsIGNvbmRpdGlvbk9wdGlvbiwgY3VycmVudENvbmRpdGlvbklELCBnbG9iYWxDb25kaXRpb25JRH0pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNvbmRpdGlvbnNBcnJheSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvcGVyQ3VycmVudENvbmRpdGlvbklEID0gY3VycmVudENvbmRpdGlvbklEID8gY3VycmVudENvbmRpdGlvbklEIDogdGhpcy5zdGF0ZS5jdXJyZW50Q29uZGl0aW9uSUQ7XHJcbiAgICAgICAgY29uc3QgcHJvcGVyR2xvYmFsQ29uZGl0aW9uSUQgPSBnbG9iYWxDb25kaXRpb25JRCA/IGdsb2JhbENvbmRpdGlvbklEIDogdGhpcy5zdGF0ZS5nbG9iYWxDb25kaXRpb25JRDtcclxuICAgICAgICBsZXQgY29weUNvbmRpdGlvbkFycmF5ID0gY2xvbmUoY29uZGl0aW9uc0FycmF5KTtcclxuICAgICAgICBsZXQgZ2xvYmFsQ29uZGl0aW9uSW5BcnJJbmQgPSBjb3B5Q29uZGl0aW9uQXJyYXkuZmluZEluZGV4KGNvbmQgPT4gY29uZC5pZCA9PT0gcHJvcGVyR2xvYmFsQ29uZGl0aW9uSUQpO1xyXG4gICAgICAgIGxldCBjdXJyZW50Q29uZGl0aW9uSW5BcnJJbmQgPSBjb3B5Q29uZGl0aW9uQXJyYXlbZ2xvYmFsQ29uZGl0aW9uSW5BcnJJbmRdLnJlbGF0ZWRDb25kaXRpb25zLmZpbmRJbmRleChjb25kID0+IGNvbmQuaWQgPT09IHByb3BlckN1cnJlbnRDb25kaXRpb25JRCk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRDb25kaXRpb25JbkFycjtcclxuICAgICAgICBsZXQgY29weUNvbmRpdGlvbk9wdGlvbnNcclxuICAgICAgICBpZiAoY3VycmVudENvbmRpdGlvbkluQXJySW5kID4gLTEpIHtcclxuICAgICAgICAgICAgY3VycmVudENvbmRpdGlvbkluQXJyID0gY29weUNvbmRpdGlvbkFycmF5W2dsb2JhbENvbmRpdGlvbkluQXJySW5kXS5yZWxhdGVkQ29uZGl0aW9uc1tjdXJyZW50Q29uZGl0aW9uSW5BcnJJbmRdO1xyXG4gICAgICAgICAgICBjb3B5Q29uZGl0aW9uT3B0aW9ucyA9IHsgLi4uY29weUNvbmRpdGlvbkFycmF5W2dsb2JhbENvbmRpdGlvbkluQXJySW5kXS5yZWxhdGVkQ29uZGl0aW9uc1tjdXJyZW50Q29uZGl0aW9uSW5BcnJJbmRdLmNvbmRpdGlvbk9wdGlvbnMgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvcHlDb25kaXRpb25BcnJheVtnbG9iYWxDb25kaXRpb25JbkFyckluZF0ucmVsYXRlZENvbmRpdGlvbnMuZm9yRWFjaCgoY29uZCwgcGFyZW50SW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25kLnJlbGF0ZWRDb25kaXRpb25zLmZvckVhY2goKGNvbmQsIGNoaWxkSW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmQuaWQgPT09IHByb3BlckN1cnJlbnRDb25kaXRpb25JRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q29uZGl0aW9uSW5BcnIgPSBjb3B5Q29uZGl0aW9uQXJyYXlbZ2xvYmFsQ29uZGl0aW9uSW5BcnJJbmRdLnJlbGF0ZWRDb25kaXRpb25zW3BhcmVudEluZF0ucmVsYXRlZENvbmRpdGlvbnNbY2hpbGRJbmRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3B5Q29uZGl0aW9uT3B0aW9ucyA9IHsgLi4uY29uZC5jb25kaXRpb25PcHRpb25zIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKGNvbmRpdGlvbk9wdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIFwiZmllbGRcIjpcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb25kaXRpb25JbkFyci5jb25kaXRpb25PcHRpb25zID0gdGhpcy5zZXRDb25kaXRpb25PcHRpb25zRmllbGQoe2NvbmRpdGlvbk9wdGlvbnM6IGNvcHlDb25kaXRpb25PcHRpb25zLCB2YWx1ZX0pOyAvLyBuZW5hZGFcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZmllbGRzRGF0YVwiOlxyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbmRpdGlvbkluQXJyLmNvbmRpdGlvbk9wdGlvbnMgPSB0aGlzLnNldENvbmRpdGlvbk9wdGlvbnNGaWVsZERhdGEoe2NvbmRpdGlvbk9wdGlvbnM6IGNvcHlDb25kaXRpb25PcHRpb25zLCB2YWx1ZX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvcGVyYXRvclwiOlxyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbmRpdGlvbkluQXJyLmNvbmRpdGlvbk9wdGlvbnMgPSB0aGlzLnNldENvbmRpdGlvbk9wdGlvbnNPcGVyYXRvcih7dmFsdWUsIGNvbmRpdGlvbk9wdGlvbnM6IGNvcHlDb25kaXRpb25PcHRpb25zLCBwcm9wZXJDdXJyZW50Q29uZGl0aW9uSUQsIHByb3Blckdsb2JhbENvbmRpdGlvbklEfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidmFsdWVcIjpcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb25kaXRpb25JbkFyci5jb25kaXRpb25PcHRpb25zID0gdGhpcy5zZXRDb25kaXRpb25PcHRpb25zVmFsdWUoe3ZhbHVlLCBjb25kaXRpb25PcHRpb25zOiBjb3B5Q29uZGl0aW9uT3B0aW9ucywgY29uZGl0aW9uT3B0aW9ufSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInZhbHVlQWRpdGlvbmFsRGF0YVwiOlxyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbmRpdGlvbkluQXJyLmNvbmRpdGlvbk9wdGlvbnMgPSB0aGlzLnNldENvbmRpdGlvbk9wdGlvbnNWYWx1ZUFkZGl0aW9uYWwoe3ZhbHVlLCBjb25kaXRpb25PcHRpb25zOiBjb3B5Q29uZGl0aW9uT3B0aW9uc30pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbmRpdGlvbnNBcnJheTogY29weUNvbmRpdGlvbkFycmF5fSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb25kaXRpb25PcHRpb25zVmFsdWVBZGRpdGlvbmFsID0gKHsgdmFsdWUsIGNvbmRpdGlvbk9wdGlvbnN9KSA9PiB7XHJcbiAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZUFkZGl0aW9uYWxEYXRhID0gdmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiBjb25kaXRpb25PcHRpb25zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmZXRjaFJlZmVyZW5jZURhdGEgPSBhc3luYyAodGFibGUsIHF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hcGkvbm93L3RhYmxlLyR7dGFibGV9YDsgLy9kZXY3ODQ5MC5zZXJ2aWNlLW5vdy5jb20vXHJcbiAgICBcclxuICAgICAgICBjb25zdCBxdWVyeSA9IHF1ZXJ5UGFyYW1zID8gcHJlcGFyZVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7ZW5kcG9pbnR9PyR7cXVlcnl9YDtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXdhaXQgZmV0Y2hSZXF1ZXN0KHt1cmwsIHBhcmFtc30pXHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hSZWZlcmVuY2VEYXRhU3VjY2Vzc2VkID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgcmVmZXJlbmNlRmllbGREYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCB2YWx1ZUZpZWxkcyA9IHJlc3VsdC5tYXAoZmllbGQgPT4gKHtpZDogZmllbGQuc3lzX2lkLCBsYWJlbDogZmllbGRbcmVmZXJlbmNlRmllbGREYXRhLmZpZWxkLnJlZmVyZW5jZV9kaXNwbGF5X2ZpZWxkXSwgZHJvcGRvd246IFwidmFsdWVcIn0pKTtcclxuICAgICAgICB0aGlzLnNldENvbmRpdGlvbk9wdGlvbnMoe3ZhbHVlOiB2YWx1ZUZpZWxkcywgY29uZGl0aW9uT3B0aW9uOiBcInZhbHVlQWRpdGlvbmFsRGF0YVwiLCBjdXJyZW50Q29uZGl0aW9uSUQ6IHJlZmVyZW5jZUZpZWxkRGF0YS5jdXJyZW50Q29uZGl0aW9uSUQsIGdsb2JhbENvbmRpdGlvbklEOiByZWZlcmVuY2VGaWVsZERhdGEuZ2xvYmFsQ29uZGl0aW9uSUR9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0Q29uZGl0aW9uT3B0aW9uc0ZpZWxkRGF0YSA9ICh7Y29uZGl0aW9uT3B0aW9ucywgdmFsdWV9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRzRGF0YUlEID0gZ2VuZXJhdGVJRCgpO1xyXG4gICAgICAgIGNvbnN0IG5ld0ZpZWxkc0Ryb3Bkb3duRGF0YSA9IGdldERyb3Bkb3duRmllbGRzSXRlbXMoe3RhYmxlRmllbGRzOiB2YWx1ZS5yZXN1bHQsIGluZGV4OiBmaWVsZHNEYXRhSUR9KTtcclxuICAgICAgICBpZiAodmFsdWUubGlzdEluZGV4IDwgY29uZGl0aW9uT3B0aW9ucy5maWVsZHNEcm9wZG93bkRhdGEubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBsZXQgZGVsZXRlZEZpZWxkc0RhdGEgPSBjb25kaXRpb25PcHRpb25zLmZpZWxkc0Ryb3Bkb3duRGF0YS5zcGxpY2UodmFsdWUubGlzdEluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZWRGaWVsZHNEYXRhID0gZGVsZXRlZEZpZWxkc0RhdGEubWFwKGRhdGEgPT4gZGF0YS5pdGVtc1swXS5pbmRleCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZWRGaWVsZHNEYXRhLmZvckVhY2goa2V5ID0+IGRlbGV0ZSBjb25kaXRpb25PcHRpb25zLmZpZWxkc0RhdGFba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmRpdGlvbk9wdGlvbnMuZmllbGRzRHJvcGRvd25EYXRhLnB1c2goeyBpdGVtczogbmV3RmllbGRzRHJvcGRvd25EYXRhIH0pO1xyXG4gICAgICAgIGNvbmRpdGlvbk9wdGlvbnMuZmllbGRzRGF0YVtmaWVsZHNEYXRhSURdID0gdmFsdWUucmVzdWx0O1xyXG4gICAgICAgIGNvbmRpdGlvbk9wdGlvbnMuZmllbGRJdGVtcyA9IHZhbHVlLnNlbGVjdGVkSXRlbXM7XHJcblxyXG4gICAgICAgIHJldHVybiBjb25kaXRpb25PcHRpb25zO1xyXG4gICAgfSBcclxuXHJcbi8vIFxyXG5cclxuICAgIGdldENvbmRpdGlvbnNJRHMgPSAoe2N1cnJlbnRDb25kaXRpb25JRCwgZ2xvYmFsQ29uZGl0aW9uSUR9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudENvbmRpdGlvbklELCBnbG9iYWxDb25kaXRpb25JRH0pXHJcbiAgICB9IFxyXG5cclxuLy8gXHJcblxyXG4gICAgc2V0Q29uZGl0aW9uT3B0aW9uc0ZpZWxkID0gKHtjb25kaXRpb25PcHRpb25zLCB2YWx1ZX0pID0+IHtcclxuICAgICAgICBjb25zdCB7IGZpZWxkc0RhdGEgfSA9IGNvbmRpdGlvbk9wdGlvbnM7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRGaWVsZHNEYXRhID0gZmllbGRzRGF0YVt2YWx1ZS5pdGVtc1t2YWx1ZS5pdGVtcy5sZW5ndGggLSAxXS5pbmRleF07XHJcbiAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9IHZhbHVlLml0ZW1zW3ZhbHVlLml0ZW1zLmxlbmd0aCAtIDFdLmlkO1xyXG4gICAgICAgIGxldCBjdXJyZW50VmFsdWVJbmRleCA9IGNvbmRpdGlvbk9wdGlvbnMuZmllbGRzRHJvcGRvd25EYXRhLmZpbmRJbmRleChkYXRhID0+IGRhdGEuaXRlbXNbMF0uaW5kZXggPT09IHZhbHVlLml0ZW1zW3ZhbHVlLml0ZW1zLmxlbmd0aCAtIDFdLmluZGV4KTtcclxuICAgICAgICBsZXQgZGVsZXRlZEZpZWxkc0RhdGEgPSBjb25kaXRpb25PcHRpb25zLmZpZWxkc0Ryb3Bkb3duRGF0YS5zcGxpY2UoY3VycmVudFZhbHVlSW5kZXggKyAxKTtcclxuICAgICAgICBkZWxldGVkRmllbGRzRGF0YSA9IGRlbGV0ZWRGaWVsZHNEYXRhLm1hcChkYXRhID0+IGRhdGEuaXRlbXNbMF0uaW5kZXgpO1xyXG4gICAgICAgIGRlbGV0ZWRGaWVsZHNEYXRhLmZvckVhY2goa2V5ID0+IGRlbGV0ZSBjb25kaXRpb25PcHRpb25zLmZpZWxkc0RhdGFba2V5XSk7XHJcbiAgICAgICAgbGV0IG9wZXJhdG9yc0FycmF5ID0gY3VycmVudEZpZWxkc0RhdGFbY3VycmVudFZhbHVlXS5vcGVyYXRvcnMubWFwKG9wZXJhdGlvbiA9PiAoeyBpZDogb3BlcmF0aW9uLm9wZXJhdG9yLCBsYWJlbDogb3BlcmF0aW9uLmxhYmVsLCBkcm9wZG93bjogJ29wZXJhdGlvbicgfSkpO1xyXG4gICAgICAgIHJldHVybiBjb25kaXRpb25PcHRpb25zID0ge1xyXG4gICAgICAgICAgICAuLi5jb25kaXRpb25PcHRpb25zLFxyXG4gICAgICAgICAgICBmaWVsZDogdmFsdWUudmFsdWUsXHJcbiAgICAgICAgICAgIGZpZWxkSXRlbXM6IHZhbHVlLFxyXG4gICAgICAgICAgICBvcGVyYXRvcjogeyBvcGVyYXRvcjogJycsIGVkaXRvcjogJycgfSxcclxuICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBvcGVyYXRvcnNBcnJheSxcclxuICAgICAgICAgICAgYWN0aXZlRmllbGRzRGF0YTogeyAuLi5jdXJyZW50RmllbGRzRGF0YSB9LFxyXG4gICAgICAgICAgICBhY3RpdmVGaWVsZDogY3VycmVudFZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSXRlbUNsaWNrZWQgPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2xpY2tlZEl0ZW0sIGlzUmVmZXJlbmNlQ2xpY2tlZCB9ID0gaXRlbTtcclxuICAgICAgICBjb25zdCB7IGxhYmVsQXJyLCBjdXJyZW50Q29uZGl0aW9uSUQsIGdsb2JhbENvbmRpdGlvbklELCBjb25kaXRpb25zQXJyYXkgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHN5c3Bhcm1fb3BlcmF0b3JzOiB0cnVlLFxyXG4gICAgICAgICAgICBzeXNwYXJtX2dldF9leHRlbmRlZF90YWJsZXM6IHRydWUsXHJcbiAgICAgICAgICAgIHN5c3Bhcm1fa2V5d29yZHM6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBpdGVtcyA9IHt9O1xyXG4gICAgICAgIGxldCBpdGVtc0FyciA9IFtdO1xyXG4gICAgICAgIGl0ZW1zQXJyLnB1c2goY2xpY2tlZEl0ZW0pXHJcbiAgICAgICAgaXRlbXMgPSB7Y29uZGl0aW9uSWQ6IGN1cnJlbnRDb25kaXRpb25JRCwgZ2xvYmFsQ29uZGl0aW9uSUQsIGxpc3RJbmRleDogY2xpY2tlZEl0ZW0ubGlzdEluZGV4LCBzZWxlY3RlZEl0ZW1zOiB7aXRlbXM6IGl0ZW1zQXJyLCBsYWJlbDogY2xpY2tlZEl0ZW0ubGFiZWwsIHZhbHVlOiBjbGlja2VkSXRlbS5pZH19O1xyXG4gICAgICAgIChjbGlja2VkSXRlbS5kcm9wZG93bkNsaWNrZWQpID8gKGZldGNoVGFibGVEYXRhKGNsaWNrZWRJdGVtLnRhYmxlLCBxdWVyeVBhcmFtcylcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zID0gey4uLml0ZW1zLCByZXN1bHQ6IHJlcy5jb2x1bW5zfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9uT3B0aW9ucyh7dmFsdWU6IGl0ZW1zLCBnbG9iYWxDb25kaXRpb25JRCwgY3VycmVudENvbmRpdGlvbklELCBjb25kaXRpb25PcHRpb246IFwiZmllbGRzRGF0YVwifSlcclxuICAgICAgICAgICAgfSkpIDogKCkgPT4gdm9pZCgwKVxyXG4gICAgICAgIGxldCBjb25kQXJyQ2xvbmUgPSBjbG9uZShjb25kaXRpb25zQXJyYXkpXHJcbiAgICAgICAgY29uc3QgZ2xvYmFsQ29uZGl0aW9uSW5kZXhJbkFyciA9IGNvbmRBcnJDbG9uZS5maW5kSW5kZXgoY29uZCA9PiBjb25kLmlkID09PSBnbG9iYWxDb25kaXRpb25JRCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFjbGlja2VkSXRlbS5kcm9wZG93bkNsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25PcHRpb25zKHt2YWx1ZTogaXRlbXMuc2VsZWN0ZWRJdGVtcywgY29uZGl0aW9uT3B0aW9uOiBcImZpZWxkXCJ9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8ge3NldENvbmRpdGlvbk9wdGlvbnN9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IGN1cnJlbnRDb25kaXRpb24gPSBjb25kQXJyQ2xvbmUuZmluZChnbG9iYWxDb25kaXRpb24gPT4gZ2xvYmFsQ29uZGl0aW9uLmlkID09PSBnbG9iYWxDb25kaXRpb25JRCkucmVsYXRlZENvbmRpdGlvbnMuZmluZChjdXJyZW50Q29uZGl0aW9uID0+IGN1cnJlbnRDb25kaXRpb24uaWQgPT09IGN1cnJlbnRDb25kaXRpb25JRCk7XHJcbiAgICAgICAgLy8gY29uc3QgY3VycmVudENvbmRpdGlvbkluZGV4SW5BcnIgPSBjb25kQXJyQ2xvbmVbZ2xvYmFsQ29uZGl0aW9uSW5kZXhJbkFycl0ucmVsYXRlZENvbmRpdGlvbnMuZmluZEluZGV4KGNvbmQgPT4gY29uZC5pZCA9PT0gY3VycmVudENvbmRpdGlvbklEKTtcclxuICAgICAgICAvLyBpZiAoY3VycmVudENvbmRpdGlvbkluZGV4SW5BcnIgPiAtMSkge1xyXG4gICAgICAgIC8vICAgICBjdXJyZW50Q29uZGl0aW9uLmNvbmRpdGlvbk9wdGlvbnMuZmllbGRJdGVtcyA9IGl0ZW1zLnNlbGVjdGVkSXRlbXM7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgY29uZEFyckNsb25lW2dsb2JhbENvbmRpdGlvbkluZGV4SW5BcnJdLnJlbGF0ZWRDb25kaXRpb25zLmZvckVhY2goKGNvbmQpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbmQucmVsYXRlZENvbmRpdGlvbnMuZm9yRWFjaCgoY29uZCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChjb25kLmlkID09PSBjdXJyZW50Q29uZGl0aW9uSUQpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uZC5jb25kaXRpb25PcHRpb25zLmZpZWxkSXRlbXMgPSBpdGVtcy5zZWxlY3RlZEl0ZW1zO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe2NvbmRpdGlvbnNBcnJheTogY29uZEFyckNsb25lfSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdDb25kQXJyLCBjb25kaXRpb25zQXJyYXkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgYnJlYWRjcnVtYkl0ZW1DbGlja2VkID0gKHtkYXRhLCBvcGVyYXRpb259KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBicmVhZGNydW1ic0l0ZW1zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBpdGVtSW5kZXggPSBicmVhZGNydW1ic0l0ZW1zLmZpbmRJbmRleChicmVhZGNydW1iID0+IGJyZWFkY3J1bWIuY29uZGl0aW9uSWQgPT09IGRhdGEuY29uZGl0aW9uSWQpO1xyXG4gICAgICAgIHN3aXRjaCAob3BlcmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZW1vdmUtbmV4dFwiOlxyXG4gICAgICAgICAgICAgICAgYnJlYWRjcnVtYnNJdGVtcy5zcGxpY2UoaXRlbUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2JyZWFkY3J1bWJzSXRlbXN9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQ29uZGl0aW9uKHtjdXJyZW50Q29uZGl0aW9uSUQ6IGRhdGEuY29uZGl0aW9uSWQsIGdsb2JhbENvbmRpdGlvbklEOiBkYXRhLmdsb2JhbENvbmRpdGlvbklkfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlbW92ZS1zdWJzZXF1ZW50XCI6XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgbmV3QnJlYWRjcnVtYnNJdGVtcyA9IGNsb25lKGJyZWFkY3J1bWJzSXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlbGV0ZWRJdGVtcyA9IChpdGVtSW5kZXggPT09IDApID8gYnJlYWRjcnVtYnNJdGVtcy5zcGxpY2UoMSkgOiBicmVhZGNydW1ic0l0ZW1zLnNwbGljZShpdGVtSW5kZXggKyAxKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnJlYWRjcnVtYnNJdGVtc30pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkZWxldGVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHRoaXMuZGVsZXRlQ29uZGl0aW9uKHtjdXJyZW50Q29uZGl0aW9uSUQ6IGl0ZW0uY29uZGl0aW9uSWQsIGdsb2JhbENvbmRpdGlvbklEOiBpdGVtLmdsb2JhbENvbmRpdGlvbklkfSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlcmF0b3JDbGlja2VkID0gKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUNvbmRpdGlvbiA9ICh7Y3VycmVudENvbmRpdGlvbklELCBnbG9iYWxDb25kaXRpb25JRH0pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNvbmRpdGlvbnNBcnJheSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBuZXdDb25kaXRpb25zQXJyYXkgPSBjb25kaXRpb25zQXJyYXk7XHJcbiAgICAgICAgY29uc3QgZ2xvYmFsQ29uZGl0aW9uSW5kZXhJbkFyciA9IG5ld0NvbmRpdGlvbnNBcnJheS5maW5kSW5kZXgoY29uZCA9PiBjb25kLmlkID09PSBnbG9iYWxDb25kaXRpb25JRCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvbmRpdGlvbkluZGV4SW5BcnIgPSBuZXdDb25kaXRpb25zQXJyYXlbZ2xvYmFsQ29uZGl0aW9uSW5kZXhJbkFycl0ucmVsYXRlZENvbmRpdGlvbnMuZmluZEluZGV4KGNvbmQgPT4gY29uZC5pZCA9PT0gY3VycmVudENvbmRpdGlvbklEKTtcclxuICAgICAgICBsZXQgcGF0aCA9IFtdO1xyXG4gICAgICAgIGxldCBpbmRleFRvRGVsZXRlO1xyXG4gICAgICAgIGlmIChjdXJyZW50Q29uZGl0aW9uSW5kZXhJbkFyciA+IC0xKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSBuZXdDb25kaXRpb25zQXJyYXlbZ2xvYmFsQ29uZGl0aW9uSW5kZXhJbkFycl0ucmVsYXRlZENvbmRpdGlvbnM7XHJcbiAgICAgICAgICAgIGluZGV4VG9EZWxldGUgPSBjdXJyZW50Q29uZGl0aW9uSW5kZXhJbkFycjtcclxuICAgICAgICAgICAgaWYgKG5ld0NvbmRpdGlvbnNBcnJheVtnbG9iYWxDb25kaXRpb25JbmRleEluQXJyXS5yZWxhdGVkQ29uZGl0aW9ucy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBuZXdDb25kaXRpb25zQXJyYXk7XHJcbiAgICAgICAgICAgICAgICBpbmRleFRvRGVsZXRlID0gZ2xvYmFsQ29uZGl0aW9uSW5kZXhJbkFycjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50Q29uZGl0aW9uSW5kZXhJbkFyciA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcGF0aFsxXS5vcGVyYXRvciA9IFwiXCJcclxuICAgICAgICAgICAgICAgIG5ld0NvbmRpdGlvbnNBcnJheVtnbG9iYWxDb25kaXRpb25JbmRleEluQXJyXS5yZWxhdGVkQ29uZGl0aW9uc1sxXS5vcGVyYXRvciA9IHBhdGhbMV0ub3BlcmF0b3JcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbmRpdGlvbnNBcnJheTogbmV3Q29uZGl0aW9uc0FycmF5fSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld0NvbmRpdGlvbnNBcnJheVtnbG9iYWxDb25kaXRpb25JbmRleEluQXJyXS5yZWxhdGVkQ29uZGl0aW9ucy5mb3JFYWNoKChwYXJlbnRDb25kLCBwSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHBhcmVudENvbmQucmVsYXRlZENvbmRpdGlvbnMuZm9yRWFjaCgoY2hpbGRDb25kLCBjaEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkQ29uZC5pZCA9PT0gY3VycmVudENvbmRpdGlvbklEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggPSBuZXdDb25kaXRpb25zQXJyYXlbZ2xvYmFsQ29uZGl0aW9uSW5kZXhJbkFycl0ucmVsYXRlZENvbmRpdGlvbnNbcEluZGV4XS5yZWxhdGVkQ29uZGl0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhUb0RlbGV0ZSA9IGNoSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmV3Q29uZGl0aW9uc0FycmF5Lmxlbmd0aCA9PT0gMSAmJiBwYXRoID09PSBuZXdDb25kaXRpb25zQXJyYXkpIHtcclxuICAgICAgICAgICAgY29uc3QgeyB0YWJsZUZpZWxkcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICAgICAgbGV0IGZpZWxkc0RhdGFJRCA9IGdlbmVyYXRlSUQoKTtcclxuICAgICAgICAgICAgbGV0IGZpZWxkc0Ryb3Bkb3duRGF0YSA9IGdldERyb3Bkb3duRmllbGRzSXRlbXMoeyB0YWJsZUZpZWxkczogdGFibGVGaWVsZHMuY29sdW1ucywgaW5kZXg6IGZpZWxkc0RhdGFJRCB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29uZGl0aW9uc0FycmF5OiBbeyBpZDogZ2VuZXJhdGVJRCgpLCBjb25kaXRpb246ICcnLCBvcGVyYXRvcjogJycsIHJlbGF0ZWRDb25kaXRpb25zOiBbeyBpZDogZ2VuZXJhdGVJRCgpICsgMSwgY29uZGl0aW9uOiAnJywgb3BlcmF0b3I6ICcnLCBjb25kaXRpb25PcHRpb25zOiB7IG9wZXJhdG9yOiB7IG9wZXJhdG9yOiAnJywgZWRpdGlvcjogJycgfSwgZmllbGQ6ICcnLCB2YWx1ZTogJycsIGZpZWxkc0RhdGE6IHsgW2ZpZWxkc0RhdGFJRF06IHRhYmxlRmllbGRzLmNvbHVtbnMgfSwgZmllbGRzRHJvcGRvd25EYXRhOiBbeyBpdGVtczogZmllbGRzRHJvcGRvd25EYXRhIH1dIH0sIHJlbGF0ZWRDb25kaXRpb25zOiBbXSB9XSB9XX0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGF0aC5zcGxpY2UoaW5kZXhUb0RlbGV0ZSwgMSlcclxuICAgICAgICAgICAgbmV3Q29uZGl0aW9uc0FycmF5LnJlbGF0ZWRDb25kaXRpb25zID0gcGF0aFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb25kaXRpb25zQXJyYXk6IG5ld0NvbmRpdGlvbnNBcnJheX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNhdmVUb29nbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpc1NhdmUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNTYXZlOiAhaXNTYXZlfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc0ZpbHRlckNvbGxhcHNlZCwgY29uZGl0aW9uc0FycmF5LCB0YWJsZUZpZWxkcywgcmVmZXJlbmNlVGFibGVGaWVsZHNEYXRhLCBsYWJlbEFyciwgb3BlcmF0b3JBcnIsIGJyZWFkY3J1bWJzSXRlbXMsIGlzU2F2ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IHRhYmxlLCB1c2VyIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgY29sdW1ucyB9ID0gdGFibGVGaWVsZHM7XHJcbiAgICAgICAgbGV0IGNvbHVtbnNBcnIgPSBPYmplY3QudmFsdWVzKGNvbHVtbnMpLnNvcnQoKGEsIGIpID0+IGEubGFiZWwgPCBiLmxhYmVsID8gLTEgOiAwKTtcclxuICAgICAgICBjb2x1bW5zQXJyLmxlbmd0aCAmJiAoY29sdW1uc0FyciA9IGNvbHVtbnNBcnIubWFwKGNvbHVtbiA9PiAoey4uLmNvbHVtbiwgaWQ6IGNvbHVtbi5uYW1lfSkpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiJWMlc1wiLCBcImNvbG9yOiBncmVlblwiLCBcIlJFQUNUIEZpbHRlciBDb25kaXRpb24gU3RhdGVcIiwgdGhpcy5zdGF0ZSlcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZWQtZmlsdGVyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpc0ZpbHRlckNvbGxhcHNlZCA/IFwiZnVubmVsLWZpbGxcIiA6IFwiZnVubmVsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcENvbnRlbnQ9XCJGaWx0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpc0ZpbHRlckNvbGxhcHNlZDogIWlzRmlsdGVyQ29sbGFwc2VkIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFkY3J1bWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyQnJlYWRjcnVtYnMgaXRlbXM9e2JyZWFkY3J1bWJzSXRlbXN9IGJyZWFkY3J1bWJJdGVtQ2xpY2tlZD17dGhpcy5icmVhZGNydW1iSXRlbUNsaWNrZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsdGVyLWNvbnRhaW5lclwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0taXMtY29sbGFwc2VkXCI6IGlzRmlsdGVyQ29sbGFwc2VkXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSdW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucnVuQnV0dG9uQ2xpY2tlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tU3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCJyZ2IoMTUsNjcsNTUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG92ZXItYm9yZGVyLWNvbG9yXCI6IFwicmdiKDE1LDY3LDU1KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZS1ib3JkZXItY29sb3JcIjogXCJyZ2IoMTUsNjcsNTUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiU2F2ZVwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBzaXplPVwibWRcIiBjdXN0b21TdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCJyZ2IoMTcyLDE4MCwxODEpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvdmVyLWJvcmRlci1jb2xvclwiOiBcInJnYigxNzIsMTgwLDE4MSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWJvcmRlci1jb2xvclwiOiBcInJnYigxNzIsMTgwLDE4MSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmVUb29nbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDbGVhciBhbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tU3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcInJnYigxNzIsMTgwLDE4MSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvdmVyLWJvcmRlci1jb2xvclwiOiBcInJnYigxNzIsMTgwLDE4MSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZS1ib3JkZXItY29sb3JcIjogXCJyZ2IoMTcyLDE4MCwxODEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsZWFyQWxsKHt2YWx1ZTogXCJkZWxldGUtZmlsdGVyXCJ9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZW1wbGF0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyVGVtcGxhdGVzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2F2ZSAmJiA8RmlsdGVyU2F2ZXIgdGFibGU9e3RhYmxlfSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmRpdGlvbnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uc0FycmF5Lm1hcCgoZ2xvYmFsQ29uZGl0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVsYXRlZENvbmRpdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsQ29uZGl0aW9uLnJlbGF0ZWRDb25kaXRpb25zLmZvckVhY2goY29uZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhdGVkQ29uZGl0aW9ucy5wdXNoKGNvbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZC5yZWxhdGVkQ29uZGl0aW9ucy5mb3JFYWNoKGNvbmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZWRDb25kaXRpb25zLnB1c2goY29uZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2xvYmFsLWNvbmRpdGlvblwiOiB0cnVlLCBcImdsb2JhbC1jb25kaXRpb25zX2ZpcnN0XCI6IGluZGV4ID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ICE9PSAwICYmIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5PUjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZWRDb25kaXRpb25zLm1hcChjb25kaXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZGl0aW9uLWNvbnRhaW5lclwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhaWxlZFwiOiBjb25kaXRpb24uZmFpbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9IGtleT17Y29uZGl0aW9uLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlckNvbmRpdGlvbkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlRmllbGRzPXt0YWJsZUZpZWxkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9iaj17Y29uZGl0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uSUQ9e2NvbmRpdGlvbi5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbENvbmRpdGlvbklEPXtnbG9iYWxDb25kaXRpb24uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxDb25kaXRpb249e2dsb2JhbENvbmRpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yVHlwZT17Y29uZGl0aW9uLm9wZXJhdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkTmV3T3BlcmF0b3I9e3RoaXMuYWRkTmV3T3BlcmF0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVDb25kaXRpb249e3RoaXMuZGVsZXRlQ29uZGl0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtQ2xpY2tlZD17dGhpcy5vbkl0ZW1DbGlja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlVGFibGVGaWVsZHNEYXRhPXtyZWZlcmVuY2VUYWJsZUZpZWxkc0RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEFycj17bGFiZWxBcnJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvckFycj17b3BlcmF0b3JBcnJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRDb25kaXRpb25zSURzPXt0aGlzLmdldENvbmRpdGlvbnNJRHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRDbGlja2VkTGlzdEluZGV4PXt0aGlzLmdldENsaWNrZWRMaXN0SW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZXJhdG9yQ2xpY2tlZD17dGhpcy5vbk9wZXJhdG9yQ2xpY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbmRpdGlvbk9wdGlvbnM9e3RoaXMuc2V0Q29uZGl0aW9uT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoUmVmZXJlbmNlRGF0YVN1Y2Nlc3NlZD17dGhpcy5mZXRjaFJlZmVyZW5jZURhdGFTdWNjZXNzZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctY3JpdGVyaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+b3I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOZXcgQ3JpdGVyaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5hZGROZXdPcGVyYXRvcih7dmFsdWU6IFwiXk5RXCJ9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuRmlsdGVyQ29uZGl0aW9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHRhYmxlOiBcIlwiLFxyXG4gICAgcXVlcnk6IFwiXCIsXHJcbiAgICBhbGxvd0ZpZWxkczogW10sXHJcbiAgICBibG9ja0ZpZWxkczogW10sXHJcbiAgICB1c2VyOiBcIlwiLFxyXG4gICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgb25TZW5kUXVlcnk6ICgpID0+IHZvaWQgMFxyXG59XHJcblxyXG5GaWx0ZXJDb25kaXRpb24ucHJvcFR5cGVzID0ge1xyXG4gICAgdGFibGU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBxdWVyeTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHVzZXI6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBibG9ja0ZpZWxkczogcHJvcFR5cGVzLmFycmF5LFxyXG4gICAgYWxsb3dGaWVsZHM6IHByb3BUeXBlcy5hcnJheSxcclxuICAgIGNvbGxhcHNlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvblNlbmRRdWVyeTogcHJvcFR5cGVzLmZ1bmNcclxufSJdfQ==