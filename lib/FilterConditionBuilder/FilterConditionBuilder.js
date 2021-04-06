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
          breadcrumbsItems = _this$state6.breadcrumbsItems;
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
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "filter-header",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
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
            })
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
  table: "incident",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0ZpbHRlckNvbmRpdGlvbkJ1aWxkZXIuanMiXSwibmFtZXMiOlsiRmlsdGVyQ29uZGl0aW9uIiwicHJvcHMiLCJmZXRjaFJlZmVyZW5jZVRhYmxlRGF0YVN1Y2Nlc3NlZCIsInJlc3VsdCIsInByb3BlcnRpZXMiLCJnZXRDbGlja2VkTGlzdEluZGV4IiwiaW5kZXgiLCJzZXRTdGF0ZSIsImNsaWNrZWRMaXN0SW5kZXgiLCJmZXRjaFRhYmxlRGF0YVN1Y2Nlc3NlZCIsImZpZWxkc0RhdGFJRCIsInF1ZXJ5IiwiYmxvY2tGaWVsZHMiLCJhbGxvd0ZpbGVkcyIsImZpZWxkc0Ryb3Bkb3duRGF0YSIsInRhYmxlRmllbGRzIiwiY29sdW1ucyIsImNvbmRpdGlvbnNBcnJheSIsImlkIiwiY29uZGl0aW9uIiwib3BlcmF0b3IiLCJyZWxhdGVkQ29uZGl0aW9ucyIsImNvbmRpdGlvbk9wdGlvbnMiLCJlZGl0aW9yIiwiZmllbGQiLCJ2YWx1ZSIsImZpZWxkc0RhdGEiLCJpdGVtcyIsInBvc2l0aW9uIiwiY29weVF1ZXJ5IiwiaW5kZXhPZiIsInNsaWNlIiwib3BlcmF0b3JQb3NpdGlvbiIsImxlbmd0aCIsInB1c2giLCJtYXAiLCJnbG9iYWxDb25kaXRpb24iLCJsYXN0T3BlcmF0b3IiLCJvcGVyYXRvcnMiLCJnbG9iYWxDb25kIiwicGFyZW50Q29uZCIsInBhcmFtcyIsImdsb2JhbElEIiwiY3VycmVudElEIiwicGFyc2VDb25kaXRpb25WYWx1ZSIsImNoaWxkQ29uZCIsInNldE9wZXJhdG9yc0FycmF5IiwicnVuQnV0dG9uQ2xpY2tlZCIsInN0YXRlIiwiY29weUNvbmRpdGlvbkFycmF5IiwiZmFpbGVkIiwiZ2VuZXJhdGVRdWVyeSIsIm9wZXJhdGlvbiIsImlzU2F2ZSIsIm9uU2VuZFF1ZXJ5IiwicmVzdWx0UXVlcnkiLCJlcnJvciIsImJyZWFkY3J1bWJzSXRlbXMiLCJsYWJlbCIsImNvbmRpdGlvbklkIiwiZm9yRWFjaCIsImJyZWFkY3J1bWJJdGVtIiwiZ2xvYmFsQ29uZGl0aW9uSWQiLCJnZW5lcmF0ZWRDb25kaXRpb24iLCJjdXJDb25kaXRpb24iLCJjb25kaXRpb25RdWVyeSIsInRyaW0iLCJxdWVyeVRvU2F2ZSIsImFkZE5ld09wZXJhdG9yIiwiY3VycmVudENvbmRpdGlvbklEIiwiZ2xvYmFsQ29uZGl0aW9uSUQiLCJuZXdDb25kaXRpb25zQXJyYXkiLCJnbG9iYWxDb25kaXRpb25JbmRleEluQXJyIiwiZmluZEluZGV4IiwiY29uZCIsImFsbG93RmllbGRzIiwiY3VycmVudENvbmRpdGlvbkluZGV4SW5BcnIiLCJwYXJlbnRDb25kaXRpb25PcHRpb25zIiwiY2xlYXJBbGwiLCJzZXRDb25kaXRpb25PcHRpb25zT3BlcmF0b3IiLCJhY3RpdmVGaWVsZCIsImFjdGl2ZUZpZWxkc0RhdGEiLCJ2YWx1ZUFkZGl0aW9uYWxEYXRhIiwiZ2V0VmFsdWVBZGRpdGlvbmFsRGF0YSIsImVkaXRvciIsInNldENvbmRpdGlvbk9wdGlvbnNWYWx1ZSIsImNvbmRpdGlvbk9wdGlvbiIsImNvcHlWYWx1ZSIsInNwbGl0Iiwic3BsaWNlIiwiam9pbiIsInNldENvbmRpdGlvbk9wdGlvbnMiLCJwcm9wZXJDdXJyZW50Q29uZGl0aW9uSUQiLCJwcm9wZXJHbG9iYWxDb25kaXRpb25JRCIsImdsb2JhbENvbmRpdGlvbkluQXJySW5kIiwiY3VycmVudENvbmRpdGlvbkluQXJySW5kIiwiY3VycmVudENvbmRpdGlvbkluQXJyIiwiY29weUNvbmRpdGlvbk9wdGlvbnMiLCJwYXJlbnRJbmQiLCJjaGlsZEluZCIsInNldENvbmRpdGlvbk9wdGlvbnNGaWVsZCIsInNldENvbmRpdGlvbk9wdGlvbnNGaWVsZERhdGEiLCJzZXRDb25kaXRpb25PcHRpb25zVmFsdWVBZGRpdGlvbmFsIiwiZmV0Y2hSZWZlcmVuY2VEYXRhIiwidGFibGUiLCJxdWVyeVBhcmFtcyIsImVuZHBvaW50Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJ1cmwiLCJtZXRob2QiLCJmZXRjaFJlZmVyZW5jZURhdGFTdWNjZXNzZWQiLCJyZWZlcmVuY2VGaWVsZERhdGEiLCJ2YWx1ZUZpZWxkcyIsInN5c19pZCIsInJlZmVyZW5jZV9kaXNwbGF5X2ZpZWxkIiwiZHJvcGRvd24iLCJuZXdGaWVsZHNEcm9wZG93bkRhdGEiLCJsaXN0SW5kZXgiLCJkZWxldGVkRmllbGRzRGF0YSIsImRhdGEiLCJrZXkiLCJmaWVsZEl0ZW1zIiwic2VsZWN0ZWRJdGVtcyIsImdldENvbmRpdGlvbnNJRHMiLCJjdXJyZW50RmllbGRzRGF0YSIsImN1cnJlbnRWYWx1ZSIsImN1cnJlbnRWYWx1ZUluZGV4Iiwib3BlcmF0b3JzQXJyYXkiLCJvbkl0ZW1DbGlja2VkIiwiaXRlbSIsImNsaWNrZWRJdGVtIiwiaXNSZWZlcmVuY2VDbGlja2VkIiwibGFiZWxBcnIiLCJzeXNwYXJtX29wZXJhdG9ycyIsInN5c3Bhcm1fZ2V0X2V4dGVuZGVkX3RhYmxlcyIsInN5c3Bhcm1fa2V5d29yZHMiLCJpdGVtc0FyciIsImRyb3Bkb3duQ2xpY2tlZCIsInRoZW4iLCJyZXMiLCJjb25kQXJyQ2xvbmUiLCJicmVhZGNydW1iSXRlbUNsaWNrZWQiLCJpdGVtSW5kZXgiLCJicmVhZGNydW1iIiwiZGVsZXRlQ29uZGl0aW9uIiwiZGVsZXRlZEl0ZW1zIiwib25PcGVyYXRvckNsaWNrZWQiLCJjb25zb2xlIiwibG9nIiwicGF0aCIsImluZGV4VG9EZWxldGUiLCJwSW5kZXgiLCJjaEluZGV4IiwiaXNGaWx0ZXJDb2xsYXBzZWQiLCJyZWZlcmVuY2VUYWJsZUZpZWxkc0RhdGEiLCJhY3RpdmUiLCJwb3NpdGl2ZSIsImJpbmQiLCJvcGVyYXRvckFyciIsImNvbHVtbnNBcnIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJjb2x1bW4iLCJuYW1lIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1c2VyIiwiY29sbGFwc2VkIiwicHJvcFR5cGVzIiwic3RyaW5nIiwi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O0FBQzNCbkUsRUFBQUEsS0FBSyxFQUFFLFVBRG9CO0FBRTNCN0YsRUFBQUEsS0FBSyxFQUFFLEVBRm9CO0FBRzNCZ0UsRUFBQUEsV0FBVyxFQUFFLEVBSGM7QUFJM0IvRCxFQUFBQSxXQUFXLEVBQUUsRUFKYztBQUszQmdLLEVBQUFBLElBQUksRUFBRSxFQUxxQjtBQU0zQkMsRUFBQUEsU0FBUyxFQUFFLElBTmdCO0FBTzNCdkgsRUFBQUEsV0FBVyxFQUFFO0FBQUEsV0FBTSxLQUFLLENBQVg7QUFBQTtBQVBjLENBQS9CO0FBVUF0RCxlQUFlLENBQUM4SyxTQUFoQixHQUE0QjtBQUN4QnRFLEVBQUFBLEtBQUssRUFBRXNFLHNCQUFVQyxNQURPO0FBRXhCcEssRUFBQUEsS0FBSyxFQUFFbUssc0JBQVVDLE1BRk87QUFHeEJILEVBQUFBLElBQUksRUFBRUUsc0JBQVVDLE1BSFE7QUFJeEJuSyxFQUFBQSxXQUFXLEVBQUVrSyxzQkFBVUUsS0FKQztBQUt4QnJHLEVBQUFBLFdBQVcsRUFBRW1HLHNCQUFVRSxLQUxDO0FBTXhCSCxFQUFBQSxTQUFTLEVBQUVDLHNCQUFVRyxJQU5HO0FBT3hCM0gsRUFBQUEsV0FBVyxFQUFFd0gsc0JBQVVJO0FBUEMsQ0FBNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRmlsdGVyRHJvcGRvd24gZnJvbSBcIi4vQ29tcG9uZW50cy9GaWx0ZXJEcm9wZG93bi9GaWx0ZXJEcm9wZG93blwiXHJcblxyXG5pbXBvcnQgRmlsdGVyQnJlYWRjcnVtYnMgZnJvbSBcIi4vQ29tcG9uZW50cy9GaWx0ZXJCcmVhZGNydW1icy9GaWx0ZXJCcmVhZGNydW1ic1wiO1xyXG5cclxuaW1wb3J0IHsgZ2VuZXJhdGVJRCwgZ2V0RHJvcGRvd25GaWVsZHNJdGVtcywgZ2V0T3BlcmF0b3JzLCBnZW5lcmF0ZUN1cnJlbnRDb25kaXRpb25RdWVyeSwgZmV0Y2hUYWJsZURhdGEsIGZldGNoUmVxdWVzdCwgcHJlcGFyZVF1ZXJ5UGFyYW1zLCBjbG9uZSwgZ2V0VHJlbmREYXRhLCBwYXJzZUNvbmRpdGlvblZhbHVlLCBnZXRWYWx1ZUFkZGl0aW9uYWxEYXRhIH0gZnJvbSBcIi4vdXRpbHMvdXRpbHNcIlxyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi9Db21wb25lbnRzL0V4cGFuZERyb3Bkb3duL0V4cGFuZERyb3Bkb3duXCIgXHJcbmltcG9ydCBGaWx0ZXJDb25kaXRpb25JdGVtIGZyb20gXCIuL0NvbXBvbmVudHMvRmlsdGVyQ29uZGl0aW9uSXRlbS9GaWx0ZXJDb25kaXRpb25JdGVtXCI7XHJcbmltcG9ydCBGaWx0ZXJUZW1wbGF0ZXMgZnJvbSBcIi4vQ29tcG9uZW50cy9GaWx0ZXJUZW1wbGF0ZXMvRmlsdGVyVGVtcGxhdGVzXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiY3Jvc3MtZmV0Y2hcIjtcclxuaW1wb3J0IEZpbHRlckRyb3Bkb3duTGlzdCBmcm9tIFwiLi9Db21wb25lbnRzL0ZpbHRlckRyb3Bkb3duTGlzdC9GaWx0ZXJEcm9wZG93bkxpc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckNvbmRpdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0ZpbHRlckNvbGxhcHNlZDogdHJ1ZSxcclxuICAgICAgICAgICAgcmVmZXJlbmNlRmllbGREYXRhOiB7fSxcclxuICAgICAgICAgICAgY29uZGl0aW9uc0FycmF5OiBbXSxcclxuICAgICAgICAgICAgaXNTYXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVmZXJlbmNlVGFibGVGaWVsZHNEYXRhOiB7fSxcclxuICAgICAgICAgICAgaXNGaWx0ZXJDb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzSXRlbXM6IFt7IGxhYmVsOiAnQWxsJywgY29uZGl0aW9uSWQ6ICdhbGwnIH1dLFxyXG4gICAgICAgICAgICBxdWVyeVRvU2F2ZTogJycsXHJcbiAgICAgICAgICAgIGxhYmVsQXJyOiBbXSxcclxuICAgICAgICAgICAgYWxlcnREYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpdmU6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGFibGVGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IHt9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wZXJhdG9yQXJyOiBbXSxcclxuICAgICAgICAgICAgY2xpY2tlZExpc3RJbmRleDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmFkZE5ld09wZXJhdG9yID0gdGhpcy5hZGROZXdPcGVyYXRvci5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5nZXRWYWx1ZUFkZGl0aW9uYWxEYXRhID0gZ2V0VmFsdWVBZGRpdGlvbmFsRGF0YS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGFyc2VDb25kaXRpb25WYWx1ZSA9IHBhcnNlQ29uZGl0aW9uVmFsdWUuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoUmVmZXJlbmNlVGFibGVEYXRhU3VjY2Vzc2VkID0gKHtyZXN1bHQsIHByb3BlcnRpZXN9KSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICBnZXRDbGlja2VkTGlzdEluZGV4ID0gKHtpbmRleH0pID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjbGlja2VkTGlzdEluZGV4OiBpbmRleH0pO1xyXG4gICAgfVxyXG4gICAgLy9cclxuXHJcbiAgICBmZXRjaFRhYmxlRGF0YVN1Y2Nlc3NlZCA9ICh7cmVzdWx0LCBwcm9wZXJ0aWVzfSkgPT4ge1xyXG4gICAgICAgIGxldCBmaWVsZHNEYXRhSUQgPSBnZW5lcmF0ZUlEKCk7XHJcbiAgICAgICAgY29uc3QgeyBxdWVyeSwgYmxvY2tGaWVsZHMsIGFsbG93RmlsZWRzIH0gPSBwcm9wZXJ0aWVzO1xyXG4gICAgICAgIGxldCBmaWVsZHNEcm9wZG93bkRhdGEgPSBnZXREcm9wZG93bkZpZWxkc0l0ZW1zKHsgdGFibGVGaWVsZHM6IHJlc3VsdC5jb2x1bW5zLCBpbmRleDogZmllbGRzRGF0YUlELCBibG9ja0ZpZWxkcywgYWxsb3dGaWxlZHMgfSk7XHJcbiAgICAgICAgbGV0IGNvbmRpdGlvbnNBcnJheSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGdlbmVyYXRlSUQoKSxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogXCJcIixcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcmVsYXRlZENvbmRpdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBnZW5lcmF0ZUlEKCkgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25PcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRpb3I6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZHNEYXRhSURdOiByZXN1bHQuY29sdW1ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNEcm9wZG93bkRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBmaWVsZHNEcm9wZG93bkRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZWRDb25kaXRpb25zOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICBpZiAocXVlcnkpIHtcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgbGV0IGNvcHlRdWVyeSA9IHF1ZXJ5O1xyXG4gICAgICAgICAgICBpZiAoY29weVF1ZXJ5LmluZGV4T2YoJ15FUScpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNvcHlRdWVyeSA9IGNvcHlRdWVyeS5zbGljZSgwLCBjb3B5UXVlcnkuaW5kZXhPZignXkVRJykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9wZXJhdG9yUG9zaXRpb24gPSBjb3B5UXVlcnkuaW5kZXhPZignXk5RJywgcG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhdG9yUG9zaXRpb24gPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uc0FycmF5W2NvbmRpdGlvbnNBcnJheS5sZW5ndGggLSAxXS5jb25kaXRpb24gPSBjb3B5UXVlcnkuc2xpY2UocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uc0FycmF5W2NvbmRpdGlvbnNBcnJheS5sZW5ndGggLSAxXS5jb25kaXRpb24gPSBjb3B5UXVlcnkuc2xpY2UocG9zaXRpb24sIG9wZXJhdG9yUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uc0FycmF5LnB1c2goeyBpZDogZ2VuZXJhdGVJRCgpICsgb3BlcmF0b3JQb3NpdGlvbiwgY29uZGl0aW9uOiAnJywgb3BlcmF0b3I6ICdeTlEnLCByZWxhdGVkQ29uZGl0aW9uczogW3sgaWQ6IGdlbmVyYXRlSUQoKSArIG9wZXJhdG9yUG9zaXRpb24gKyAxLCBjb25kaXRpb246ICcnLCBvcGVyYXRvcjogJycsIGNvbmRpdGlvbk9wdGlvbnM6IHsgb3BlcmF0b3I6IHsgb3BlcmF0b3I6ICcnLCBlZGl0aW9yOiAnJyB9LCBmaWVsZDogJycsIHZhbHVlOiAnJywgZmllbGRzRGF0YTogeyBbZmllbGRzRGF0YUlEXTogcmVzdWx0LmNvbHVtbnMgfSwgZmllbGRzRHJvcGRvd25EYXRhOiBbeyBpdGVtczogZmllbGRzRHJvcGRvd25EYXRhIH1dIH0sIHJlbGF0ZWRDb25kaXRpb25zOiBbXSB9XSB9KVxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBvcGVyYXRvclBvc2l0aW9uICsgMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25kaXRpb25zQXJyYXkubWFwKChnbG9iYWxDb25kaXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdE9wZXJhdG9yO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb3BlcmF0b3JQb3NpdGlvbiA9IGdsb2JhbENvbmRpdGlvbi5jb25kaXRpb24uaW5kZXhPZignXicsIHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3JQb3NpdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChsYXN0T3BlcmF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ15PUic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsQ29uZGl0aW9uLnJlbGF0ZWRDb25kaXRpb25zW2dsb2JhbENvbmRpdGlvbi5yZWxhdGVkQ29uZGl0aW9ucy5sZW5ndGggLSAxXS5yZWxhdGVkQ29uZGl0aW9uc1tnbG9iYWxDb25kaXRpb24ucmVsYXRlZENvbmRpdGlvbnNbZ2xvYmFsQ29uZGl0aW9uLnJlbGF0ZWRDb25kaXRpb25zLmxlbmd0aCAtIDFdLnJlbGF0ZWRDb25kaXRpb25zLmxlbmd0aCAtIDFdLmNvbmRpdGlvbiA9IGdsb2JhbENvbmRpdGlvbi5jb25kaXRpb24uc2xpY2UocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxDb25kaXRpb24ucmVsYXRlZENvbmRpdGlvbnNbZ2xvYmFsQ29uZGl0aW9uLnJlbGF0ZWRDb25kaXRpb25zLmxlbmd0aCAtIDFdLmNvbmRpdGlvbiA9IGdsb2JhbENvbmRpdGlvbi5jb25kaXRpb24uc2xpY2UocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGxhc3RPcGVyYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdeT1InOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsQ29uZGl0aW9uLnJlbGF0ZWRDb25kaXRpb25zW2dsb2JhbENvbmRpdGlvbi5yZWxhdGVkQ29uZGl0aW9ucy5sZW5ndGggLSAxXS5yZWxhdGVkQ29uZGl0aW9uc1tnbG9iYWxDb25kaXRpb24ucmVsYXRlZENvbmRpdGlvbnNbZ2xvYmFsQ29uZGl0aW9uLnJlbGF0ZWRDb25kaXRpb25zLmxlbmd0aCAtIDFdLnJlbGF0ZWRDb25kaXRpb25zLmxlbmd0aCAtIDFdLmNvbmRpdGlvbiA9IGdsb2JhbENvbmRpdGlvbi5jb25kaXRpb24uc2xpY2UocG9zaXRpb24sIG9wZXJhdG9yUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxDb25kaXRpb24ucmVsYXRlZENvbmRpdGlvbnNbZ2xvYmFsQ29uZGl0aW9uLnJlbGF0ZWRDb25kaXRpb25zLmxlbmd0aCAtIDFdLmNvbmRpdGlvbiA9IGdsb2JhbENvbmRpdGlvbi5jb25kaXRpb24uc2xpY2UocG9zaXRpb24sIG9wZXJhdG9yUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZXJhdG9yUG9zaXRpb24gPT09IGNvcHlRdWVyeS5pbmRleE9mKCdeT1InLCBwb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsQ29uZGl0aW9uLnJlbGF0ZWRDb25kaXRpb25zW2dsb2JhbENvbmRpdGlvbi5yZWxhdGVkQ29uZGl0aW9ucy5sZW5ndGggLSAxXS5yZWxhdGVkQ29uZGl0aW9ucy5wdXNoKHsgaWQ6IGdlbmVyYXRlSUQoKSArIG9wZXJhdG9yUG9zaXRpb24sIGNvbmRpdGlvbjogJycsIG9wZXJhdG9yOiAnXk9SJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBvcGVyYXRvclBvc2l0aW9uICsgMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE9wZXJhdG9yID0gJ15PUic7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsQ29uZGl0aW9uLnJlbGF0ZWRDb25kaXRpb25zLnB1c2goeyBpZDogZ2VuZXJhdGVJRCgpICsgb3BlcmF0b3JQb3NpdGlvbiwgY29uZGl0aW9uOiAnJywgb3BlcmF0b3I6ICdeJywgcmVsYXRlZENvbmRpdGlvbnM6IFtdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IG9wZXJhdG9yUG9zaXRpb24gKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0T3BlcmF0b3IgPSAnXic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgbGV0IG9wZXJhdG9ycyA9IGdldE9wZXJhdG9ycyhyZXN1bHQuY29sdW1ucyk7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbnNBcnJheSA9IGNvbmRpdGlvbnNBcnJheS5tYXAoZ2xvYmFsQ29uZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxDb25kLnJlbGF0ZWRDb25kaXRpb25zID0gZ2xvYmFsQ29uZC5yZWxhdGVkQ29uZGl0aW9ucy5tYXAocGFyZW50Q29uZCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7IGNvbmRpdGlvbjogcGFyZW50Q29uZC5jb25kaXRpb24sIG9wZXJhdG9ycywgdGFibGVGaWVsZHM6IHJlc3VsdC5jb2x1bW5zLCBnbG9iYWxJRDogZ2xvYmFsQ29uZC5pZCwgY3VycmVudElEOiBwYXJlbnRDb25kLmlkIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29uZGl0aW9uT3B0aW9ucyA9IHRoaXMucGFyc2VDb25kaXRpb25WYWx1ZShwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENvbmQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnBhcmVudENvbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENvbmQucmVsYXRlZENvbmRpdGlvbnMgPSBwYXJlbnRDb25kLnJlbGF0ZWRDb25kaXRpb25zLm1hcChjaGlsZENvbmQgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHsgY29uZGl0aW9uOiBjaGlsZENvbmQuY29uZGl0aW9uLCBvcGVyYXRvcnMsIHRhYmxlRmllbGRzOiByZXN1bHQuY29sdW1ucywgZ2xvYmFsSUQ6IGdsb2JhbENvbmQuaWQsIGN1cnJlbnRJRDogY2hpbGRDb25kLmlkIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmRpdGlvbk9wdGlvbnMgPSB0aGlzLnBhcnNlQ29uZGl0aW9uVmFsdWUocGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNoaWxkQ29uZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudENvbmQ7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdsb2JhbENvbmQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWJsZUZpZWxkczogcmVzdWx0LFxyXG4gICAgICAgICAgICBjb25kaXRpb25zQXJyYXlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNldE9wZXJhdG9yc0FycmF5ID0gKHtyZXN1bHR9KSA9PiB7XHJcbiAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJ1bkJ1dHRvbkNsaWNrZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb25kaXRpb25zQXJyYXkgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGNvcHlDb25kaXRpb25BcnJheSA9IGNsb25lKGNvbmRpdGlvbnNBcnJheSk7XHJcbiAgICAgICAgY29weUNvbmRpdGlvbkFycmF5ID0gY29weUNvbmRpdGlvbkFycmF5Lm1hcChnbG9iYWxDb25kID0+IHtcclxuICAgICAgICAgICAgZ2xvYmFsQ29uZC5yZWxhdGVkQ29uZGl0aW9ucy5tYXAocGFyZW50Q29uZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb25kLmZhaWxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Q29uZC5yZWxhdGVkQ29uZGl0aW9ucy5tYXAoY2hpbGRDb25kID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmQuZmFpbGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkQ29uZDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50Q29uZDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbENvbmQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbnNBcnJheTogY29weUNvbmRpdGlvbkFycmF5XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gRklMVEVSX0FDVElPTlMuUVVFUllfR0VORVJBVEUuU1RBUlRFRFxyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVRdWVyeSh7b3BlcmF0aW9uOiBcInJ1blwifSlcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVF1ZXJ5ID0gKHsgb3BlcmF0aW9uIH0pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNvbmRpdGlvbnNBcnJheSwgaXNTYXZlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHsgb25TZW5kUXVlcnkgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHRRdWVyeSA9IFwiXCI7XHJcbiAgICAgICAgbGV0IGVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGJyZWFkY3J1bWJzSXRlbXMgPSBbeyBsYWJlbDogXCJBbGxcIiwgY29uZGl0aW9uSWQ6IFwiYWxsXCJ9XTtcclxuICAgICAgICBjb25kaXRpb25zQXJyYXkuZm9yRWFjaChnbG9iYWxDb25kID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0UXVlcnkgKz0gZ2xvYmFsQ29uZC5vcGVyYXRvcjtcclxuICAgICAgICAgICAgZ2xvYmFsQ29uZC5yZWxhdGVkQ29uZGl0aW9ucy5mb3JFYWNoKChwYXJlbnRDb25kLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0UXVlcnkgKz0gcGFyZW50Q29uZC5vcGVyYXRvcjtcclxuICAgICAgICAgICAgICAgIGxldCBicmVhZGNydW1iSXRlbSA9IHsgbGFiZWw6IGAke2dsb2JhbENvbmQub3BlcmF0b3IgJiYgaW5kZXggPT09IDAgPyAnb3InIDogJyd9YCwgY29uZGl0aW9uSWQ6IHBhcmVudENvbmQuaWQsIGdsb2JhbENvbmRpdGlvbklkOiBnbG9iYWxDb25kLmlkIH07XHJcbiAgICAgICAgICAgICAgICBsZXQgZ2VuZXJhdGVkQ29uZGl0aW9uID0gZ2VuZXJhdGVDdXJyZW50Q29uZGl0aW9uUXVlcnkocGFyZW50Q29uZCwgb3BlcmF0aW9uLCBicmVhZGNydW1iSXRlbSlcclxuICAgICAgICAgICAgICAgIGxldCBjdXJDb25kaXRpb24gPSBnZW5lcmF0ZWRDb25kaXRpb24uY29uZGl0aW9uUXVlcnk7XHJcbiAgICAgICAgICAgICAgICBicmVhZGNydW1iSXRlbSA9IGdlbmVyYXRlZENvbmRpdGlvbi5icmVhZGNydW1iSXRlbTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRRdWVyeSArPSBjdXJDb25kaXRpb247XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJ3J1bicgJiYgIWN1ckNvbmRpdGlvbiAmJiAhcGFyZW50Q29uZC5jb25kaXRpb25PcHRpb25zLmZpZWxkICYmIGNvbmRpdGlvbnNBcnJheS5sZW5ndGggPT09IDEgJiYgZ2xvYmFsQ29uZC5yZWxhdGVkQ29uZGl0aW9ucy5sZW5ndGggPT09IDEgJiYgIXBhcmVudENvbmQucmVsYXRlZENvbmRpdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0UXVlcnkgPSAnJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2goRklMVEVSX0FDVElPTlMuUVVFUllfR0VORVJBVEUuRkFJTEVELCB7IGdsb2JhbENvbmRpdGlvbklEOiBnbG9iYWxDb25kLmlkLCBjdXJyZW50Q29uZGl0aW9uSUQ6IHBhcmVudENvbmQuaWQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHBhcmVudENvbmQucmVsYXRlZENvbmRpdGlvbnMuZm9yRWFjaChjaGlsZENvbmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFF1ZXJ5ICs9IGNoaWxkQ29uZC5vcGVyYXRvcjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZ2VuZXJhdGVkQ29uZGl0aW9uID0gZ2VuZXJhdGVDdXJyZW50Q29uZGl0aW9uUXVlcnkoY2hpbGRDb25kLCBvcGVyYXRpb24sIGJyZWFkY3J1bWJJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyQ29uZGl0aW9uID0gZ2VuZXJhdGVkQ29uZGl0aW9uLmNvbmRpdGlvblF1ZXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJJdGVtID0gZ2VuZXJhdGVkQ29uZGl0aW9uLmJyZWFkY3J1bWJJdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0UXVlcnkgKz0gY3VyQ29uZGl0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoKEZJTFRFUl9BQ1RJT05TLlFVRVJZX0dFTkVSQVRFLkZBSUxFRCwgeyBnbG9iYWxDb25kaXRpb25JRDogZ2xvYmFsQ29uZC5pZCwgY3VycmVudENvbmRpdGlvbklEOiBjaGlsZENvbmQuaWQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWRjcnVtYkl0ZW0ubGFiZWwgPSBicmVhZGNydW1iSXRlbS5sYWJlbC50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhZGNydW1ic0l0ZW1zLnB1c2goYnJlYWRjcnVtYkl0ZW0pO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIG9uU2VuZFF1ZXJ5KHJlc3VsdFF1ZXJ5KTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BlcmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdydW4nOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoKEZJTFRFUl9BQ1RJT05TLlFVRVJZX0dFTkVSQVRFLlNVQ0NFU1NFRCwgeyB2YWx1ZTogcmVzdWx0UXVlcnkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyZWFkY3J1bWJzSXRlbXMgfSlcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVRvU2F2ZTogcmVzdWx0UXVlcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2F2ZTogIWlzU2F2ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXRWYWx1ZUFkZGl0aW9uYWxEYXRhID0gKHsgdGFibGVGaWVsZHMsIGVkaXRvciwgZmllbGQsIGdsb2JhbElELCBjdXJyZW50SUQgfSkgPT4ge1xyXG4gICAgLy8gICAgIGxldCB2YWx1ZUFkZGl0aW9uYWxEYXRhID0gW107XHJcbiAgICAvLyAgICAgc3dpdGNoIChlZGl0b3IpIHtcclxuICAgIC8vICAgICAgICAgY2FzZSAnY2hvaWNlX2ZpZWxkX25hbWVzJzpcclxuICAgIC8vICAgICAgICAgY2FzZSAnZ2xpZGVfZGF0ZV9lcXVpdmFsZW50JzpcclxuICAgIC8vICAgICAgICAgY2FzZSAnZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZSc6XHJcbiAgICAvLyAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGFibGVGaWVsZHMpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAodGFibGVGaWVsZHNba2V5XS50eXBlID09PSB0YWJsZUZpZWxkc1tmaWVsZF0udHlwZSAmJiBKU09OLnN0cmluZ2lmeSh0YWJsZUZpZWxkc1trZXldKSAhPT0gSlNPTi5zdHJpbmdpZnkodGFibGVGaWVsZHNbZmllbGRdKSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAoZWRpdG9yID09PSAnZ2xpZGVfZGF0ZV9lcXVpdmFsZW50Jykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVBZGRpdGlvbmFsRGF0YS5wdXNoKHsgaWQ6IHRhYmxlRmllbGRzW2tleV0ubmFtZSwgbGFiZWw6IHRhYmxlRmllbGRzW2tleV0ubGFiZWwsIGRyb3Bkb3duOiAndmFsdWUnLCB0eXBlOiAnZ2xpZGVfZGF0ZV9lcXVpdmFsZW50JywgaW5kZXg6ICcxJyB9KVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVkaXRvciA9PT0gJ2dsaWRlX2RhdGVfY29tcGFyYXRpdmUnKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUFkZGl0aW9uYWxEYXRhLnB1c2goeyBpZDogdGFibGVGaWVsZHNba2V5XS5uYW1lLCBsYWJlbDogdGFibGVGaWVsZHNba2V5XS5sYWJlbCwgZHJvcGRvd246ICd2YWx1ZScsIHR5cGU6ICdnbGlkZV9kYXRlX2NvbXBhcmF0aXZlJywgaW5kZXg6ICczJyB9KVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVBZGRpdGlvbmFsRGF0YS5wdXNoKHsgaWQ6IHRhYmxlRmllbGRzW2tleV0ubmFtZSwgbGFiZWw6IHRhYmxlRmllbGRzW2tleV0ubGFiZWwsIGRyb3Bkb3duOiAndmFsdWUnIH0pXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgLy8gICAgICAgICBjYXNlICdjaG9pY2UnOlxyXG4gICAgLy8gICAgICAgICBjYXNlICdjaG9pY2VfbXVsdGlwbGUnOlxyXG4gICAgLy8gICAgICAgICAgICAgdmFsdWVBZGRpdGlvbmFsRGF0YSA9IHRhYmxlRmllbGRzW2ZpZWxkXS5jaG9pY2VzLm1hcChjaG9pY2UgPT4gKHsgaWQ6IGNob2ljZS52YWx1ZSwgbGFiZWw6IGNob2ljZS5sYWJlbCwgZHJvcGRvd246ICd2YWx1ZScgfSkpO1xyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgJ2Nob2ljZV9keW5hbWljJzpcclxuICAgIC8vICAgICAgICAgICAgIHZhbHVlQWRkaXRpb25hbERhdGEgPSB0YWJsZUZpZWxkc1tmaWVsZF0uZHluYW1pY19jaG9pY2VzLm1hcChjaG9pY2UgPT4gKHsgaWQ6IGNob2ljZS52YWx1ZSwgbGFiZWw6IGNob2ljZS5sYWJlbCwgZHJvcGRvd246ICd2YWx1ZScgfSkpO1xyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgJ3JlZmVyZW5jZSc6XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzeXNwYXJtX2ZpZWxkczogYCR7dGFibGVGaWVsZHNbZmllbGRdLnJlZmVyZW5jZV9kaXNwbGF5X2ZpZWxkfSxzeXNfaWRgLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHN5c3Bhcm1fcXVlcnk6IGBuYW1lSVNOT1RFTVBUWWBcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuZmV0Y2hSZWZlcmVuY2VEYXRhKHRhYmxlRmllbGRzW2ZpZWxkXS5yZWZlcmVuY2UsIHF1ZXJ5UGFyYW1zKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hSZWZlcmVuY2VEYXRhU3VjY2Vzc2VkKHJlcylcclxuICAgIC8vICAgICAgICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVmZXJlbmNlRmllbGREYXRhOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZmllbGQ6IHRhYmxlRmllbGRzW2ZpZWxkXSxcclxuICAgIC8vICAgICAgICAgICAgICAgICBjdXJyZW50Q29uZGl0aW9uSUQ6IGN1cnJlbnRJRCxcclxuICAgIC8vICAgICAgICAgICAgICAgICBnbG9iYWxDb25kaXRpb25JRDogZ2xvYmFsSURcclxuICAgIC8vICAgICAgICAgICAgIH19KVxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICByZXR1cm4gdmFsdWVBZGRpdGlvbmFsRGF0YTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICAvLyBmZXRjaFRhYmxlRGF0YVxyXG4gICAgICAgIGNvbnN0IHsgdGFibGUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHN5c3Bhcm1fb3BlcmF0b3JzOiB0cnVlLFxyXG4gICAgICAgICAgICBzeXNwYXJtX2dldF9leHRlbmRlZF90YWJsZXM6IHRydWUsXHJcbiAgICAgICAgICAgIHN5c3Bhcm1fa2V5d29yZHM6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmZXRjaFRhYmxlRGF0YSh0YWJsZSwgcXVlcnlQYXJhbXMpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mZXRjaFRhYmxlRGF0YVN1Y2Nlc3NlZCh7cmVzdWx0LCBwcm9wZXJ0aWVzOiB0aGlzLnByb3BzfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFkZE5ld09wZXJhdG9yID0gKHt2YWx1ZSwgY3VycmVudENvbmRpdGlvbklELCBnbG9iYWxDb25kaXRpb25JRH0pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNvbmRpdGlvbnNBcnJheSwgdGFibGVGaWVsZHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgbmV3Q29uZGl0aW9uc0FycmF5ID0gY29uZGl0aW9uc0FycmF5O1xyXG4gICAgICAgIGNvbnN0IGdsb2JhbENvbmRpdGlvbkluZGV4SW5BcnIgPSBjb25kaXRpb25zQXJyYXkuZmluZEluZGV4KGNvbmQgPT4gY29uZC5pZCA9PT0gZ2xvYmFsQ29uZGl0aW9uSUQpXHJcbiAgICAgICAgY29uc3QgZmllbGRzRGF0YUlEID0gZ2VuZXJhdGVJRCgpO1xyXG4gICAgICAgIGNvbnN0IHsgYmxvY2tGaWVsZHMsIGFsbG93RmllbGRzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkc0Ryb3Bkb3duRGF0YSA9IGdldERyb3Bkb3duRmllbGRzSXRlbXMoeyB0YWJsZUZpZWxkczogdGFibGVGaWVsZHMuY29sdW1ucywgaW5kZXg6IGZpZWxkc0RhdGFJRCwgYmxvY2tGaWVsZHMsIGFsbG93RmllbGRzIH0pO1xyXG4gICAgICAgIHN3aXRjaCh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiXlwiOlxyXG4gICAgICAgICAgICAgICAgbmV3Q29uZGl0aW9uc0FycmF5W2dsb2JhbENvbmRpdGlvbkluZGV4SW5BcnJdLnJlbGF0ZWRDb25kaXRpb25zLnB1c2goeyBpZDogZ2VuZXJhdGVJRCgpLCBjb25kaXRpb246ICcnLCBvcGVyYXRvcjogdmFsdWUsIGNvbmRpdGlvbk9wdGlvbnM6IHsgb3BlcmF0b3I6IHsgb3BlcmF0b3I6ICcnLCBlZGl0aW9yOiAnJyB9LCBmaWVsZDogJycsIHZhbHVlOiAnJywgZmllbGRzRGF0YTogeyBbZmllbGRzRGF0YUlEXTogdGFibGVGaWVsZHMuY29sdW1ucyB9LCBmaWVsZHNEcm9wZG93bkRhdGE6IFt7IGl0ZW1zOiBmaWVsZHNEcm9wZG93bkRhdGEgfV0gfSwgcmVsYXRlZENvbmRpdGlvbnM6IFtdIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uc0FycmF5OiBuZXdDb25kaXRpb25zQXJyYXlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnXk9SJzpcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Q29uZGl0aW9uSW5kZXhJbkFyciA9IG5ld0NvbmRpdGlvbnNBcnJheVtnbG9iYWxDb25kaXRpb25JbmRleEluQXJyXS5yZWxhdGVkQ29uZGl0aW9ucy5maW5kSW5kZXgoY29uZCA9PiBjb25kLmlkID09PSBjdXJyZW50Q29uZGl0aW9uSUQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudENvbmRpdGlvbk9wdGlvbnMgPSB7IC4uLm5ld0NvbmRpdGlvbnNBcnJheVtnbG9iYWxDb25kaXRpb25JbmRleEluQXJyXS5yZWxhdGVkQ29uZGl0aW9uc1tjdXJyZW50Q29uZGl0aW9uSW5kZXhJbkFycl0uY29uZGl0aW9uT3B0aW9ucyB9O1xyXG4gICAgICAgICAgICAgICAgbmV3Q29uZGl0aW9uc0FycmF5W2dsb2JhbENvbmRpdGlvbkluZGV4SW5BcnJdLnJlbGF0ZWRDb25kaXRpb25zW2N1cnJlbnRDb25kaXRpb25JbmRleEluQXJyXS5yZWxhdGVkQ29uZGl0aW9ucy5wdXNoKHsgaWQ6IGdlbmVyYXRlSUQoKSwgY29uZGl0aW9uOiAnJywgb3BlcmF0b3I6IHZhbHVlLCBjb25kaXRpb25PcHRpb25zOiB7IC4uLnBhcmVudENvbmRpdGlvbk9wdGlvbnMsIG9wZXJhdG9yOiB7IG9wZXJhdG9yOiAnJywgZWRpdGlvcjogJycgfSwgdmFsdWU6ICcnIH0gfSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbmRpdGlvbnNBcnJheTogbmV3Q29uZGl0aW9uc0FycmF5fSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnXk5RJzpcclxuICAgICAgICAgICAgICAgIG5ld0NvbmRpdGlvbnNBcnJheS5wdXNoKHtpZDogZ2VuZXJhdGVJRCgpLCBjb25kaXRpb246ICcnLCBvcGVyYXRvcjogdmFsdWUsIHJlbGF0ZWRDb25kaXRpb25zOiBbeyBpZDogZ2VuZXJhdGVJRCgpICsgMSwgY29uZGl0aW9uOiAnJywgb3BlcmF0b3I6ICcnLCBjb25kaXRpb25PcHRpb25zOiB7IG9wZXJhdG9yOiB7IG9wZXJhdG9yOiAnJywgZWRpdGlvcjogJycgfSwgZmllbGQ6ICcnLCB2YWx1ZTogJycsIGZpZWxkc0RhdGE6IHsgW2ZpZWxkc0RhdGFJRF06IHRhYmxlRmllbGRzLmNvbHVtbnMgfSwgZmllbGRzRHJvcGRvd25EYXRhOiBbeyBpdGVtczogZmllbGRzRHJvcGRvd25EYXRhIH1dIH0sIHJlbGF0ZWRDb25kaXRpb25zOiBbXSB9XX0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29uZGl0aW9uc0FycmF5OiBuZXdDb25kaXRpb25zQXJyYXl9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJBbGwgPSAoe3ZhbHVlfSkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCJkZWxldGUtZmlsdGVyXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgeyB0YWJsZUZpZWxkcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRzRGF0YUlEID0gZ2VuZXJhdGVJRCgpO1xyXG4gICAgICAgICAgICBjb25zdCB7IGJsb2NrRmllbGRzLCBhbGxvd0ZpbGVkcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgY29uc3QgZmllbGRzRHJvcGRvd25EYXRhID0gZ2V0RHJvcGRvd25GaWVsZHNJdGVtcyh7IHRhYmxlRmllbGRzOiB0YWJsZUZpZWxkcy5jb2x1bW5zLCBpbmRleDogZmllbGRzRGF0YUlELCBibG9ja0ZpZWxkcywgYWxsb3dGaWxlZHMgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uc0FycmF5OiBbeyBpZDogZ2VuZXJhdGVJRCgpLCBjb25kaXRpb246ICcnLCBvcGVyYXRvcjogJycsIHJlbGF0ZWRDb25kaXRpb25zOiBbeyBpZDogZ2VuZXJhdGVJRCgpICsgMSwgY29uZGl0aW9uOiAnJywgb3BlcmF0b3I6ICcnLCBjb25kaXRpb25PcHRpb25zOiB7IG9wZXJhdG9yOiB7IG9wZXJhdG9yOiAnJywgZWRpdGlvcjogJycgfSwgZmllbGQ6ICcnLCB2YWx1ZTogJycsIGZpZWxkc0RhdGE6IHsgW2ZpZWxkc0RhdGFJRF06IHRhYmxlRmllbGRzLmNvbHVtbnMgfSwgZmllbGRzRHJvcGRvd25EYXRhOiBbeyBpdGVtczogZmllbGRzRHJvcGRvd25EYXRhIH1dIH0sIHJlbGF0ZWRDb25kaXRpb25zOiBbXSB9XSB9XSxcclxuICAgICAgICAgICAgICAgIGlzU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBicmVhZGNydW1ic0l0ZW1zOiBbeyBsYWJlbDogJ0FsbCcsIGNvbmRpdGlvbklkOiAnYWxsJyB9XVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbi8vXHJcbiAgICBzZXRDb25kaXRpb25PcHRpb25zT3BlcmF0b3IgPSAoe3ZhbHVlLCBjb25kaXRpb25PcHRpb25zfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgYWN0aXZlRmllbGQsIGFjdGl2ZUZpZWxkc0RhdGEgfSA9IGNvbmRpdGlvbk9wdGlvbnM7XHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50Q29uZGl0aW9uSUQsIGdsb2JhbENvbmRpdGlvbklEIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCB2YWx1ZUFkZGl0aW9uYWxEYXRhID0gW107XHJcbiAgICAgICAgdmFsdWVBZGRpdGlvbmFsRGF0YSA9IHRoaXMuZ2V0VmFsdWVBZGRpdGlvbmFsRGF0YSh7IHN0YXRlOiB0aGlzLnN0YXRlLCB0YWJsZUZpZWxkczogYWN0aXZlRmllbGRzRGF0YSwgZWRpdG9yOiB2YWx1ZS5lZGl0b3IsIGZpZWxkOiBhY3RpdmVGaWVsZCwgY3VycmVudElEOiBjdXJyZW50Q29uZGl0aW9uSUQsIGdsb2JhbElEOiBnbG9iYWxDb25kaXRpb25JRH0pO1xyXG4gICAgICAgIGNvbmRpdGlvbk9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIC4uLmNvbmRpdGlvbk9wdGlvbnMsXHJcbiAgICAgICAgICAgIG9wZXJhdG9yOiB2YWx1ZSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIHZhbHVlQWRkaXRpb25hbERhdGFcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gY29uZGl0aW9uT3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb25kaXRpb25PcHRpb25zVmFsdWUgPSAoe3ZhbHVlLCBjb25kaXRpb25PcHRpb25zLCBjb25kaXRpb25PcHRpb259KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBlZGl0b3IgfSA9IGNvbmRpdGlvbk9wdGlvbnMub3BlcmF0b3I7XHJcbiAgICAgICAgc3dpdGNoIChlZGl0b3IpIHtcclxuICAgICAgICAgICAgY2FzZSAnY2hvaWNlX211bHRpcGxlJzpcclxuICAgICAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxyXG4gICAgICAgICAgICAgICAgbGV0IGNvcHlWYWx1ZSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjb3B5VmFsdWUgPSBjb3B5VmFsdWUgPyBjb3B5VmFsdWUuc3BsaXQoJywnKSA6IFtdO1xyXG4gICAgICAgICAgICAgICAgY29weVZhbHVlLmluZGV4T2YodmFsdWUpIDwgMCA/IGNvcHlWYWx1ZS5wdXNoKHZhbHVlKSA6IGNvcHlWYWx1ZS5zcGxpY2UoY29weVZhbHVlLmluZGV4T2YodmFsdWUpLCAxKTtcclxuICAgICAgICAgICAgICAgIGNvcHlWYWx1ZSA9IGNvcHlWYWx1ZS5qb2luKCcsJyk7XHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlID0gY29weVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmRpdGlvbk9wdGlvbnM7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JldHdlZW5fZmllbGQnOlxyXG4gICAgICAgICAgICBjYXNlICdyZWxhdGl2ZV9maWVsZCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2dsaWRlX2R1cmF0aW9uJzpcclxuICAgICAgICAgICAgY2FzZSAnZ2xpZGVfZGF0ZV9lcXVpdmFsZW50JzpcclxuICAgICAgICAgICAgY2FzZSAnZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZSc6XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmRpdGlvbk9wdGlvbnMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVt2YWx1ZS5pbmRleF0gPSB2YWx1ZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25kaXRpb25PcHRpb25zO1xyXG4gICAgICAgICAgICBjYXNlICd0cmVuZF9maWVsZCc6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuaW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVBZGRpdGlvbmFsRGF0YSA9IGdldFRyZW5kRGF0YSh2YWx1ZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmRpdGlvbk9wdGlvbnMudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlW3ZhbHVlLmluZGV4XSA9IHZhbHVlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmRpdGlvbk9wdGlvbnM7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25PcHRpb25zW2NvbmRpdGlvbk9wdGlvbl0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25kaXRpb25PcHRpb25zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRDb25kaXRpb25PcHRpb25zID0gKHt2YWx1ZSwgY29uZGl0aW9uT3B0aW9uLCBjdXJyZW50Q29uZGl0aW9uSUQsIGdsb2JhbENvbmRpdGlvbklEfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZGl0aW9uc0FycmF5IH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9wZXJDdXJyZW50Q29uZGl0aW9uSUQgPSBjdXJyZW50Q29uZGl0aW9uSUQgPyBjdXJyZW50Q29uZGl0aW9uSUQgOiB0aGlzLnN0YXRlLmN1cnJlbnRDb25kaXRpb25JRDtcclxuICAgICAgICBjb25zdCBwcm9wZXJHbG9iYWxDb25kaXRpb25JRCA9IGdsb2JhbENvbmRpdGlvbklEID8gZ2xvYmFsQ29uZGl0aW9uSUQgOiB0aGlzLnN0YXRlLmdsb2JhbENvbmRpdGlvbklEO1xyXG4gICAgICAgIGxldCBjb3B5Q29uZGl0aW9uQXJyYXkgPSBjbG9uZShjb25kaXRpb25zQXJyYXkpO1xyXG4gICAgICAgIGxldCBnbG9iYWxDb25kaXRpb25JbkFyckluZCA9IGNvcHlDb25kaXRpb25BcnJheS5maW5kSW5kZXgoY29uZCA9PiBjb25kLmlkID09PSBwcm9wZXJHbG9iYWxDb25kaXRpb25JRCk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRDb25kaXRpb25JbkFyckluZCA9IGNvcHlDb25kaXRpb25BcnJheVtnbG9iYWxDb25kaXRpb25JbkFyckluZF0ucmVsYXRlZENvbmRpdGlvbnMuZmluZEluZGV4KGNvbmQgPT4gY29uZC5pZCA9PT0gcHJvcGVyQ3VycmVudENvbmRpdGlvbklEKTtcclxuICAgICAgICBsZXQgY3VycmVudENvbmRpdGlvbkluQXJyO1xyXG4gICAgICAgIGxldCBjb3B5Q29uZGl0aW9uT3B0aW9uc1xyXG4gICAgICAgIGlmIChjdXJyZW50Q29uZGl0aW9uSW5BcnJJbmQgPiAtMSkge1xyXG4gICAgICAgICAgICBjdXJyZW50Q29uZGl0aW9uSW5BcnIgPSBjb3B5Q29uZGl0aW9uQXJyYXlbZ2xvYmFsQ29uZGl0aW9uSW5BcnJJbmRdLnJlbGF0ZWRDb25kaXRpb25zW2N1cnJlbnRDb25kaXRpb25JbkFyckluZF07XHJcbiAgICAgICAgICAgIGNvcHlDb25kaXRpb25PcHRpb25zID0geyAuLi5jb3B5Q29uZGl0aW9uQXJyYXlbZ2xvYmFsQ29uZGl0aW9uSW5BcnJJbmRdLnJlbGF0ZWRDb25kaXRpb25zW2N1cnJlbnRDb25kaXRpb25JbkFyckluZF0uY29uZGl0aW9uT3B0aW9ucyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29weUNvbmRpdGlvbkFycmF5W2dsb2JhbENvbmRpdGlvbkluQXJySW5kXS5yZWxhdGVkQ29uZGl0aW9ucy5mb3JFYWNoKChjb25kLCBwYXJlbnRJbmQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbmQucmVsYXRlZENvbmRpdGlvbnMuZm9yRWFjaCgoY29uZCwgY2hpbGRJbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZC5pZCA9PT0gcHJvcGVyQ3VycmVudENvbmRpdGlvbklEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb25kaXRpb25JbkFyciA9IGNvcHlDb25kaXRpb25BcnJheVtnbG9iYWxDb25kaXRpb25JbkFyckluZF0ucmVsYXRlZENvbmRpdGlvbnNbcGFyZW50SW5kXS5yZWxhdGVkQ29uZGl0aW9uc1tjaGlsZEluZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlDb25kaXRpb25PcHRpb25zID0geyAuLi5jb25kLmNvbmRpdGlvbk9wdGlvbnMgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoY29uZGl0aW9uT3B0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmaWVsZFwiOlxyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbmRpdGlvbkluQXJyLmNvbmRpdGlvbk9wdGlvbnMgPSB0aGlzLnNldENvbmRpdGlvbk9wdGlvbnNGaWVsZCh7Y29uZGl0aW9uT3B0aW9uczogY29weUNvbmRpdGlvbk9wdGlvbnMsIHZhbHVlfSk7IC8vIG5lbmFkYVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmaWVsZHNEYXRhXCI6XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29uZGl0aW9uSW5BcnIuY29uZGl0aW9uT3B0aW9ucyA9IHRoaXMuc2V0Q29uZGl0aW9uT3B0aW9uc0ZpZWxkRGF0YSh7Y29uZGl0aW9uT3B0aW9uczogY29weUNvbmRpdGlvbk9wdGlvbnMsIHZhbHVlfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm9wZXJhdG9yXCI6XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29uZGl0aW9uSW5BcnIuY29uZGl0aW9uT3B0aW9ucyA9IHRoaXMuc2V0Q29uZGl0aW9uT3B0aW9uc09wZXJhdG9yKHt2YWx1ZSwgY29uZGl0aW9uT3B0aW9uczogY29weUNvbmRpdGlvbk9wdGlvbnMsIHByb3BlckN1cnJlbnRDb25kaXRpb25JRCwgcHJvcGVyR2xvYmFsQ29uZGl0aW9uSUR9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2YWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbmRpdGlvbkluQXJyLmNvbmRpdGlvbk9wdGlvbnMgPSB0aGlzLnNldENvbmRpdGlvbk9wdGlvbnNWYWx1ZSh7dmFsdWUsIGNvbmRpdGlvbk9wdGlvbnM6IGNvcHlDb25kaXRpb25PcHRpb25zLCBjb25kaXRpb25PcHRpb259KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidmFsdWVBZGl0aW9uYWxEYXRhXCI6XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29uZGl0aW9uSW5BcnIuY29uZGl0aW9uT3B0aW9ucyA9IHRoaXMuc2V0Q29uZGl0aW9uT3B0aW9uc1ZhbHVlQWRkaXRpb25hbCh7dmFsdWUsIGNvbmRpdGlvbk9wdGlvbnM6IGNvcHlDb25kaXRpb25PcHRpb25zfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29uZGl0aW9uc0FycmF5OiBjb3B5Q29uZGl0aW9uQXJyYXl9KVxyXG4gICAgfVxyXG5cclxuICAgIHNldENvbmRpdGlvbk9wdGlvbnNWYWx1ZUFkZGl0aW9uYWwgPSAoeyB2YWx1ZSwgY29uZGl0aW9uT3B0aW9uc30pID0+IHtcclxuICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlQWRkaXRpb25hbERhdGEgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbmRpdGlvbk9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZldGNoUmVmZXJlbmNlRGF0YSA9IGFzeW5jICh0YWJsZSwgcXVlcnlQYXJhbXMpID0+IHtcclxuICAgICAgICBjb25zdCBlbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L2FwaS9ub3cvdGFibGUvJHt0YWJsZX1gOyAvL2Rldjc4NDkwLnNlcnZpY2Utbm93LmNvbS9cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gcXVlcnlQYXJhbXMgPyBwcmVwYXJlUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpIDogXCJcIjtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtlbmRwb2ludH0/JHtxdWVyeX1gO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhd2FpdCBmZXRjaFJlcXVlc3Qoe3VybCwgcGFyYW1zfSlcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaFJlZmVyZW5jZURhdGFTdWNjZXNzZWQgPSAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyByZWZlcmVuY2VGaWVsZERhdGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IHZhbHVlRmllbGRzID0gcmVzdWx0Lm1hcChmaWVsZCA9PiAoe2lkOiBmaWVsZC5zeXNfaWQsIGxhYmVsOiBmaWVsZFtyZWZlcmVuY2VGaWVsZERhdGEuZmllbGQucmVmZXJlbmNlX2Rpc3BsYXlfZmllbGRdLCBkcm9wZG93bjogXCJ2YWx1ZVwifSkpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29uZGl0aW9uT3B0aW9ucyh7dmFsdWU6IHZhbHVlRmllbGRzLCBjb25kaXRpb25PcHRpb246IFwidmFsdWVBZGl0aW9uYWxEYXRhXCIsIGN1cnJlbnRDb25kaXRpb25JRDogcmVmZXJlbmNlRmllbGREYXRhLmN1cnJlbnRDb25kaXRpb25JRCwgZ2xvYmFsQ29uZGl0aW9uSUQ6IHJlZmVyZW5jZUZpZWxkRGF0YS5nbG9iYWxDb25kaXRpb25JRH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRDb25kaXRpb25PcHRpb25zRmllbGREYXRhID0gKHtjb25kaXRpb25PcHRpb25zLCB2YWx1ZX0pID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZHNEYXRhSUQgPSBnZW5lcmF0ZUlEKCk7XHJcbiAgICAgICAgY29uc3QgbmV3RmllbGRzRHJvcGRvd25EYXRhID0gZ2V0RHJvcGRvd25GaWVsZHNJdGVtcyh7dGFibGVGaWVsZHM6IHZhbHVlLnJlc3VsdCwgaW5kZXg6IGZpZWxkc0RhdGFJRH0pO1xyXG4gICAgICAgIGlmICh2YWx1ZS5saXN0SW5kZXggPCBjb25kaXRpb25PcHRpb25zLmZpZWxkc0Ryb3Bkb3duRGF0YS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBkZWxldGVkRmllbGRzRGF0YSA9IGNvbmRpdGlvbk9wdGlvbnMuZmllbGRzRHJvcGRvd25EYXRhLnNwbGljZSh2YWx1ZS5saXN0SW5kZXggKyAxKTtcclxuICAgICAgICAgICAgZGVsZXRlZEZpZWxkc0RhdGEgPSBkZWxldGVkRmllbGRzRGF0YS5tYXAoZGF0YSA9PiBkYXRhLml0ZW1zWzBdLmluZGV4KTtcclxuICAgICAgICAgICAgZGVsZXRlZEZpZWxkc0RhdGEuZm9yRWFjaChrZXkgPT4gZGVsZXRlIGNvbmRpdGlvbk9wdGlvbnMuZmllbGRzRGF0YVtrZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uZGl0aW9uT3B0aW9ucy5maWVsZHNEcm9wZG93bkRhdGEucHVzaCh7IGl0ZW1zOiBuZXdGaWVsZHNEcm9wZG93bkRhdGEgfSk7XHJcbiAgICAgICAgY29uZGl0aW9uT3B0aW9ucy5maWVsZHNEYXRhW2ZpZWxkc0RhdGFJRF0gPSB2YWx1ZS5yZXN1bHQ7XHJcbiAgICAgICAgY29uZGl0aW9uT3B0aW9ucy5maWVsZEl0ZW1zID0gdmFsdWUuc2VsZWN0ZWRJdGVtcztcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbmRpdGlvbk9wdGlvbnM7XHJcbiAgICB9IFxyXG5cclxuLy8gXHJcblxyXG4gICAgZ2V0Q29uZGl0aW9uc0lEcyA9ICh7Y3VycmVudENvbmRpdGlvbklELCBnbG9iYWxDb25kaXRpb25JRH0pID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50Q29uZGl0aW9uSUQsIGdsb2JhbENvbmRpdGlvbklEfSlcclxuICAgIH0gXHJcblxyXG4vLyBcclxuXHJcbiAgICBzZXRDb25kaXRpb25PcHRpb25zRmllbGQgPSAoe2NvbmRpdGlvbk9wdGlvbnMsIHZhbHVlfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZmllbGRzRGF0YSB9ID0gY29uZGl0aW9uT3B0aW9ucztcclxuICAgICAgICBsZXQgY3VycmVudEZpZWxkc0RhdGEgPSBmaWVsZHNEYXRhW3ZhbHVlLml0ZW1zW3ZhbHVlLml0ZW1zLmxlbmd0aCAtIDFdLmluZGV4XTtcclxuICAgICAgICBsZXQgY3VycmVudFZhbHVlID0gdmFsdWUuaXRlbXNbdmFsdWUuaXRlbXMubGVuZ3RoIC0gMV0uaWQ7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZUluZGV4ID0gY29uZGl0aW9uT3B0aW9ucy5maWVsZHNEcm9wZG93bkRhdGEuZmluZEluZGV4KGRhdGEgPT4gZGF0YS5pdGVtc1swXS5pbmRleCA9PT0gdmFsdWUuaXRlbXNbdmFsdWUuaXRlbXMubGVuZ3RoIC0gMV0uaW5kZXgpO1xyXG4gICAgICAgIGxldCBkZWxldGVkRmllbGRzRGF0YSA9IGNvbmRpdGlvbk9wdGlvbnMuZmllbGRzRHJvcGRvd25EYXRhLnNwbGljZShjdXJyZW50VmFsdWVJbmRleCArIDEpO1xyXG4gICAgICAgIGRlbGV0ZWRGaWVsZHNEYXRhID0gZGVsZXRlZEZpZWxkc0RhdGEubWFwKGRhdGEgPT4gZGF0YS5pdGVtc1swXS5pbmRleCk7XHJcbiAgICAgICAgZGVsZXRlZEZpZWxkc0RhdGEuZm9yRWFjaChrZXkgPT4gZGVsZXRlIGNvbmRpdGlvbk9wdGlvbnMuZmllbGRzRGF0YVtrZXldKTtcclxuICAgICAgICBsZXQgb3BlcmF0b3JzQXJyYXkgPSBjdXJyZW50RmllbGRzRGF0YVtjdXJyZW50VmFsdWVdLm9wZXJhdG9ycy5tYXAob3BlcmF0aW9uID0+ICh7IGlkOiBvcGVyYXRpb24ub3BlcmF0b3IsIGxhYmVsOiBvcGVyYXRpb24ubGFiZWwsIGRyb3Bkb3duOiAnb3BlcmF0aW9uJyB9KSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbmRpdGlvbk9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIC4uLmNvbmRpdGlvbk9wdGlvbnMsXHJcbiAgICAgICAgICAgIGZpZWxkOiB2YWx1ZS52YWx1ZSxcclxuICAgICAgICAgICAgZmllbGRJdGVtczogdmFsdWUsXHJcbiAgICAgICAgICAgIG9wZXJhdG9yOiB7IG9wZXJhdG9yOiAnJywgZWRpdG9yOiAnJyB9LFxyXG4gICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICAgIG9wZXJhdG9yc0FycmF5LFxyXG4gICAgICAgICAgICBhY3RpdmVGaWVsZHNEYXRhOiB7IC4uLmN1cnJlbnRGaWVsZHNEYXRhIH0sXHJcbiAgICAgICAgICAgIGFjdGl2ZUZpZWxkOiBjdXJyZW50VmFsdWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25JdGVtQ2xpY2tlZCA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjbGlja2VkSXRlbSwgaXNSZWZlcmVuY2VDbGlja2VkIH0gPSBpdGVtO1xyXG4gICAgICAgIGNvbnN0IHsgbGFiZWxBcnIsIGN1cnJlbnRDb25kaXRpb25JRCwgZ2xvYmFsQ29uZGl0aW9uSUQsIGNvbmRpdGlvbnNBcnJheSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHtcclxuICAgICAgICAgICAgc3lzcGFybV9vcGVyYXRvcnM6IHRydWUsXHJcbiAgICAgICAgICAgIHN5c3Bhcm1fZ2V0X2V4dGVuZGVkX3RhYmxlczogdHJ1ZSxcclxuICAgICAgICAgICAgc3lzcGFybV9rZXl3b3JkczogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGl0ZW1zID0ge307XHJcbiAgICAgICAgbGV0IGl0ZW1zQXJyID0gW107XHJcbiAgICAgICAgaXRlbXNBcnIucHVzaChjbGlja2VkSXRlbSlcclxuICAgICAgICBpdGVtcyA9IHtjb25kaXRpb25JZDogY3VycmVudENvbmRpdGlvbklELCBnbG9iYWxDb25kaXRpb25JRCwgbGlzdEluZGV4OiBjbGlja2VkSXRlbS5saXN0SW5kZXgsIHNlbGVjdGVkSXRlbXM6IHtpdGVtczogaXRlbXNBcnIsIGxhYmVsOiBjbGlja2VkSXRlbS5sYWJlbCwgdmFsdWU6IGNsaWNrZWRJdGVtLmlkfX07XHJcbiAgICAgICAgKGNsaWNrZWRJdGVtLmRyb3Bkb3duQ2xpY2tlZCkgPyAoZmV0Y2hUYWJsZURhdGEoY2xpY2tlZEl0ZW0udGFibGUsIHF1ZXJ5UGFyYW1zKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMgPSB7Li4uaXRlbXMsIHJlc3VsdDogcmVzLmNvbHVtbnN9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25PcHRpb25zKHt2YWx1ZTogaXRlbXMsIGdsb2JhbENvbmRpdGlvbklELCBjdXJyZW50Q29uZGl0aW9uSUQsIGNvbmRpdGlvbk9wdGlvbjogXCJmaWVsZHNEYXRhXCJ9KVxyXG4gICAgICAgICAgICB9KSkgOiAoKSA9PiB2b2lkKDApXHJcbiAgICAgICAgbGV0IGNvbmRBcnJDbG9uZSA9IGNsb25lKGNvbmRpdGlvbnNBcnJheSlcclxuICAgICAgICBjb25zdCBnbG9iYWxDb25kaXRpb25JbmRleEluQXJyID0gY29uZEFyckNsb25lLmZpbmRJbmRleChjb25kID0+IGNvbmQuaWQgPT09IGdsb2JhbENvbmRpdGlvbklEKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWNsaWNrZWRJdGVtLmRyb3Bkb3duQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbk9wdGlvbnMoe3ZhbHVlOiBpdGVtcy5zZWxlY3RlZEl0ZW1zLCBjb25kaXRpb25PcHRpb246IFwiZmllbGRcIn0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB7c2V0Q29uZGl0aW9uT3B0aW9uc31cclxuXHJcblxyXG5cclxuICAgICAgICAvLyBsZXQgY3VycmVudENvbmRpdGlvbiA9IGNvbmRBcnJDbG9uZS5maW5kKGdsb2JhbENvbmRpdGlvbiA9PiBnbG9iYWxDb25kaXRpb24uaWQgPT09IGdsb2JhbENvbmRpdGlvbklEKS5yZWxhdGVkQ29uZGl0aW9ucy5maW5kKGN1cnJlbnRDb25kaXRpb24gPT4gY3VycmVudENvbmRpdGlvbi5pZCA9PT0gY3VycmVudENvbmRpdGlvbklEKTtcclxuICAgICAgICAvLyBjb25zdCBjdXJyZW50Q29uZGl0aW9uSW5kZXhJbkFyciA9IGNvbmRBcnJDbG9uZVtnbG9iYWxDb25kaXRpb25JbmRleEluQXJyXS5yZWxhdGVkQ29uZGl0aW9ucy5maW5kSW5kZXgoY29uZCA9PiBjb25kLmlkID09PSBjdXJyZW50Q29uZGl0aW9uSUQpO1xyXG4gICAgICAgIC8vIGlmIChjdXJyZW50Q29uZGl0aW9uSW5kZXhJbkFyciA+IC0xKSB7XHJcbiAgICAgICAgLy8gICAgIGN1cnJlbnRDb25kaXRpb24uY29uZGl0aW9uT3B0aW9ucy5maWVsZEl0ZW1zID0gaXRlbXMuc2VsZWN0ZWRJdGVtcztcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBjb25kQXJyQ2xvbmVbZ2xvYmFsQ29uZGl0aW9uSW5kZXhJbkFycl0ucmVsYXRlZENvbmRpdGlvbnMuZm9yRWFjaCgoY29uZCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uZC5yZWxhdGVkQ29uZGl0aW9ucy5mb3JFYWNoKChjb25kKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGNvbmQuaWQgPT09IGN1cnJlbnRDb25kaXRpb25JRCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25kLmNvbmRpdGlvbk9wdGlvbnMuZmllbGRJdGVtcyA9IGl0ZW1zLnNlbGVjdGVkSXRlbXM7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7Y29uZGl0aW9uc0FycmF5OiBjb25kQXJyQ2xvbmV9KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0NvbmRBcnIsIGNvbmRpdGlvbnNBcnJheSlcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBicmVhZGNydW1iSXRlbUNsaWNrZWQgPSAoe2RhdGEsIG9wZXJhdGlvbn0pID0+IHtcclxuICAgICAgICBjb25zdCB7IGJyZWFkY3J1bWJzSXRlbXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGl0ZW1JbmRleCA9IGJyZWFkY3J1bWJzSXRlbXMuZmluZEluZGV4KGJyZWFkY3J1bWIgPT4gYnJlYWRjcnVtYi5jb25kaXRpb25JZCA9PT0gZGF0YS5jb25kaXRpb25JZCk7XHJcbiAgICAgICAgc3dpdGNoIChvcGVyYXRpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcInJlbW92ZS1uZXh0XCI6XHJcbiAgICAgICAgICAgICAgICBicmVhZGNydW1ic0l0ZW1zLnNwbGljZShpdGVtSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnJlYWRjcnVtYnNJdGVtc30pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVDb25kaXRpb24oe2N1cnJlbnRDb25kaXRpb25JRDogZGF0YS5jb25kaXRpb25JZCwgZ2xvYmFsQ29uZGl0aW9uSUQ6IGRhdGEuZ2xvYmFsQ29uZGl0aW9uSWR9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVtb3ZlLXN1YnNlcXVlbnRcIjpcclxuICAgICAgICAgICAgICAgIC8vIGxldCBuZXdCcmVhZGNydW1ic0l0ZW1zID0gY2xvbmUoYnJlYWRjcnVtYnNJdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVsZXRlZEl0ZW1zID0gKGl0ZW1JbmRleCA9PT0gMCkgPyBicmVhZGNydW1ic0l0ZW1zLnNwbGljZSgxKSA6IGJyZWFkY3J1bWJzSXRlbXMuc3BsaWNlKGl0ZW1JbmRleCArIDEpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHticmVhZGNydW1ic0l0ZW1zfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5kZWxldGVDb25kaXRpb24oe2N1cnJlbnRDb25kaXRpb25JRDogaXRlbS5jb25kaXRpb25JZCwgZ2xvYmFsQ29uZGl0aW9uSUQ6IGl0ZW0uZ2xvYmFsQ29uZGl0aW9uSWR9KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVyYXRvckNsaWNrZWQgPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlQ29uZGl0aW9uID0gKHtjdXJyZW50Q29uZGl0aW9uSUQsIGdsb2JhbENvbmRpdGlvbklEfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZGl0aW9uc0FycmF5IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IG5ld0NvbmRpdGlvbnNBcnJheSA9IGNvbmRpdGlvbnNBcnJheTtcclxuICAgICAgICBjb25zdCBnbG9iYWxDb25kaXRpb25JbmRleEluQXJyID0gbmV3Q29uZGl0aW9uc0FycmF5LmZpbmRJbmRleChjb25kID0+IGNvbmQuaWQgPT09IGdsb2JhbENvbmRpdGlvbklEKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50Q29uZGl0aW9uSW5kZXhJbkFyciA9IG5ld0NvbmRpdGlvbnNBcnJheVtnbG9iYWxDb25kaXRpb25JbmRleEluQXJyXS5yZWxhdGVkQ29uZGl0aW9ucy5maW5kSW5kZXgoY29uZCA9PiBjb25kLmlkID09PSBjdXJyZW50Q29uZGl0aW9uSUQpO1xyXG4gICAgICAgIGxldCBwYXRoID0gW107XHJcbiAgICAgICAgbGV0IGluZGV4VG9EZWxldGU7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRDb25kaXRpb25JbmRleEluQXJyID4gLTEpIHtcclxuICAgICAgICAgICAgcGF0aCA9IG5ld0NvbmRpdGlvbnNBcnJheVtnbG9iYWxDb25kaXRpb25JbmRleEluQXJyXS5yZWxhdGVkQ29uZGl0aW9ucztcclxuICAgICAgICAgICAgaW5kZXhUb0RlbGV0ZSA9IGN1cnJlbnRDb25kaXRpb25JbmRleEluQXJyO1xyXG4gICAgICAgICAgICBpZiAobmV3Q29uZGl0aW9uc0FycmF5W2dsb2JhbENvbmRpdGlvbkluZGV4SW5BcnJdLnJlbGF0ZWRDb25kaXRpb25zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IG5ld0NvbmRpdGlvbnNBcnJheTtcclxuICAgICAgICAgICAgICAgIGluZGV4VG9EZWxldGUgPSBnbG9iYWxDb25kaXRpb25JbmRleEluQXJyO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRDb25kaXRpb25JbmRleEluQXJyID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoWzFdLm9wZXJhdG9yID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgbmV3Q29uZGl0aW9uc0FycmF5W2dsb2JhbENvbmRpdGlvbkluZGV4SW5BcnJdLnJlbGF0ZWRDb25kaXRpb25zWzFdLm9wZXJhdG9yID0gcGF0aFsxXS5vcGVyYXRvclxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29uZGl0aW9uc0FycmF5OiBuZXdDb25kaXRpb25zQXJyYXl9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3Q29uZGl0aW9uc0FycmF5W2dsb2JhbENvbmRpdGlvbkluZGV4SW5BcnJdLnJlbGF0ZWRDb25kaXRpb25zLmZvckVhY2goKHBhcmVudENvbmQsIHBJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Q29uZC5yZWxhdGVkQ29uZGl0aW9ucy5mb3JFYWNoKChjaGlsZENvbmQsIGNoSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRDb25kLmlkID09PSBjdXJyZW50Q29uZGl0aW9uSUQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCA9IG5ld0NvbmRpdGlvbnNBcnJheVtnbG9iYWxDb25kaXRpb25JbmRleEluQXJyXS5yZWxhdGVkQ29uZGl0aW9uc1twSW5kZXhdLnJlbGF0ZWRDb25kaXRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleFRvRGVsZXRlID0gY2hJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXdDb25kaXRpb25zQXJyYXkubGVuZ3RoID09PSAxICYmIHBhdGggPT09IG5ld0NvbmRpdGlvbnNBcnJheSkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHRhYmxlRmllbGRzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgICAgICBsZXQgZmllbGRzRGF0YUlEID0gZ2VuZXJhdGVJRCgpO1xyXG4gICAgICAgICAgICBsZXQgZmllbGRzRHJvcGRvd25EYXRhID0gZ2V0RHJvcGRvd25GaWVsZHNJdGVtcyh7IHRhYmxlRmllbGRzOiB0YWJsZUZpZWxkcy5jb2x1bW5zLCBpbmRleDogZmllbGRzRGF0YUlEIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb25kaXRpb25zQXJyYXk6IFt7IGlkOiBnZW5lcmF0ZUlEKCksIGNvbmRpdGlvbjogJycsIG9wZXJhdG9yOiAnJywgcmVsYXRlZENvbmRpdGlvbnM6IFt7IGlkOiBnZW5lcmF0ZUlEKCkgKyAxLCBjb25kaXRpb246ICcnLCBvcGVyYXRvcjogJycsIGNvbmRpdGlvbk9wdGlvbnM6IHsgb3BlcmF0b3I6IHsgb3BlcmF0b3I6ICcnLCBlZGl0aW9yOiAnJyB9LCBmaWVsZDogJycsIHZhbHVlOiAnJywgZmllbGRzRGF0YTogeyBbZmllbGRzRGF0YUlEXTogdGFibGVGaWVsZHMuY29sdW1ucyB9LCBmaWVsZHNEcm9wZG93bkRhdGE6IFt7IGl0ZW1zOiBmaWVsZHNEcm9wZG93bkRhdGEgfV0gfSwgcmVsYXRlZENvbmRpdGlvbnM6IFtdIH1dIH1dfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXRoLnNwbGljZShpbmRleFRvRGVsZXRlLCAxKVxyXG4gICAgICAgICAgICBuZXdDb25kaXRpb25zQXJyYXkucmVsYXRlZENvbmRpdGlvbnMgPSBwYXRoXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbmRpdGlvbnNBcnJheTogbmV3Q29uZGl0aW9uc0FycmF5fSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaXNGaWx0ZXJDb2xsYXBzZWQsIGNvbmRpdGlvbnNBcnJheSwgdGFibGVGaWVsZHMsIHJlZmVyZW5jZVRhYmxlRmllbGRzRGF0YSwgbGFiZWxBcnIsIG9wZXJhdG9yQXJyLCBicmVhZGNydW1ic0l0ZW1zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHsgY29sdW1ucyB9ID0gdGFibGVGaWVsZHM7XHJcbiAgICAgICAgbGV0IGNvbHVtbnNBcnIgPSBPYmplY3QudmFsdWVzKGNvbHVtbnMpLnNvcnQoKGEsIGIpID0+IGEubGFiZWwgPCBiLmxhYmVsID8gLTEgOiAwKTtcclxuICAgICAgICBjb2x1bW5zQXJyLmxlbmd0aCAmJiAoY29sdW1uc0FyciA9IGNvbHVtbnNBcnIubWFwKGNvbHVtbiA9PiAoey4uLmNvbHVtbiwgaWQ6IGNvbHVtbi5uYW1lfSkpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiJWMlc1wiLCBcImNvbG9yOiBncmVlblwiLCBcIlJFQUNUIEZpbHRlciBDb25kaXRpb24gU3RhdGVcIiwgdGhpcy5zdGF0ZSlcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZWQtZmlsdGVyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpc0ZpbHRlckNvbGxhcHNlZCA/IFwiZnVubmVsLWZpbGxcIiA6IFwiZnVubmVsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcENvbnRlbnQ9XCJGaWx0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpc0ZpbHRlckNvbGxhcHNlZDogIWlzRmlsdGVyQ29sbGFwc2VkIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFkY3J1bWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyQnJlYWRjcnVtYnMgaXRlbXM9e2JyZWFkY3J1bWJzSXRlbXN9IGJyZWFkY3J1bWJJdGVtQ2xpY2tlZD17dGhpcy5icmVhZGNydW1iSXRlbUNsaWNrZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsdGVyLWNvbnRhaW5lclwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0taXMtY29sbGFwc2VkXCI6IGlzRmlsdGVyQ29sbGFwc2VkXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSdW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucnVuQnV0dG9uQ2xpY2tlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tU3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCJyZ2IoMTUsNjcsNTUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG92ZXItYm9yZGVyLWNvbG9yXCI6IFwicmdiKDE1LDY3LDU1KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZS1ib3JkZXItY29sb3JcIjogXCJyZ2IoMTUsNjcsNTUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiU2F2ZVwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBzaXplPVwibWRcIiBjdXN0b21TdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCJyZ2IoMTcyLDE4MCwxODEpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvdmVyLWJvcmRlci1jb2xvclwiOiBcInJnYigxNzIsMTgwLDE4MSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWJvcmRlci1jb2xvclwiOiBcInJnYigxNzIsMTgwLDE4MSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2xlYXIgYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCJyZ2IoMTcyLDE4MCwxODEpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Zlci1ib3JkZXItY29sb3JcIjogXCJyZ2IoMTcyLDE4MCwxODEpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtYm9yZGVyLWNvbG9yXCI6IFwicmdiKDE3MiwxODAsMTgxKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jbGVhckFsbCh7dmFsdWU6IFwiZGVsZXRlLWZpbHRlclwifSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVtcGxhdGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlclRlbXBsYXRlcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25kaXRpb25zLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbnNBcnJheS5tYXAoKGdsb2JhbENvbmRpdGlvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlbGF0ZWRDb25kaXRpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbENvbmRpdGlvbi5yZWxhdGVkQ29uZGl0aW9ucy5mb3JFYWNoKGNvbmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlZENvbmRpdGlvbnMucHVzaChjb25kKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmQucmVsYXRlZENvbmRpdGlvbnMuZm9yRWFjaChjb25kID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhdGVkQ29uZGl0aW9ucy5wdXNoKGNvbmQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdsb2JhbC1jb25kaXRpb25cIjogdHJ1ZSwgXCJnbG9iYWwtY29uZGl0aW9uc19maXJzdFwiOiBpbmRleCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCAhPT0gMCAmJiA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+T1I8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhdGVkQ29uZGl0aW9ucy5tYXAoY29uZGl0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmRpdGlvbi1jb250YWluZXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYWlsZWRcIjogY29uZGl0aW9uLmZhaWxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfSBrZXk9e2NvbmRpdGlvbi5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJDb25kaXRpb25JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUZpZWxkcz17dGFibGVGaWVsZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25PYmo9e2NvbmRpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbklEPXtjb25kaXRpb24uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxDb25kaXRpb25JRD17Z2xvYmFsQ29uZGl0aW9uLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsQ29uZGl0aW9uPXtnbG9iYWxDb25kaXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvclR5cGU9e2NvbmRpdGlvbi5vcGVyYXRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5ld09wZXJhdG9yPXt0aGlzLmFkZE5ld09wZXJhdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ29uZGl0aW9uPXt0aGlzLmRlbGV0ZUNvbmRpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbUNsaWNrZWQ9e3RoaXMub25JdGVtQ2xpY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZVRhYmxlRmllbGRzRGF0YT17cmVmZXJlbmNlVGFibGVGaWVsZHNEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxBcnI9e2xhYmVsQXJyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3JBcnI9e29wZXJhdG9yQXJyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q29uZGl0aW9uc0lEcz17dGhpcy5nZXRDb25kaXRpb25zSURzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q2xpY2tlZExpc3RJbmRleD17dGhpcy5nZXRDbGlja2VkTGlzdEluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVyYXRvckNsaWNrZWQ9e3RoaXMub25PcGVyYXRvckNsaWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb25kaXRpb25PcHRpb25zPXt0aGlzLnNldENvbmRpdGlvbk9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaFJlZmVyZW5jZURhdGFTdWNjZXNzZWQ9e3RoaXMuZmV0Y2hSZWZlcmVuY2VEYXRhU3VjY2Vzc2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LWNyaXRlcmlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPm9yPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmV3IENyaXRlcmlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuYWRkTmV3T3BlcmF0b3Ioe3ZhbHVlOiBcIl5OUVwifSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbkZpbHRlckNvbmRpdGlvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB0YWJsZTogXCJpbmNpZGVudFwiLFxyXG4gICAgcXVlcnk6IFwiXCIsXHJcbiAgICBhbGxvd0ZpZWxkczogW10sXHJcbiAgICBibG9ja0ZpZWxkczogW10sXHJcbiAgICB1c2VyOiBcIlwiLFxyXG4gICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgb25TZW5kUXVlcnk6ICgpID0+IHZvaWQgMFxyXG59XHJcblxyXG5GaWx0ZXJDb25kaXRpb24ucHJvcFR5cGVzID0ge1xyXG4gICAgdGFibGU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBxdWVyeTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHVzZXI6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBibG9ja0ZpZWxkczogcHJvcFR5cGVzLmFycmF5LFxyXG4gICAgYWxsb3dGaWVsZHM6IHByb3BUeXBlcy5hcnJheSxcclxuICAgIGNvbGxhcHNlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvblNlbmRRdWVyeTogcHJvcFR5cGVzLmZ1bmNcclxufSJdfQ==