"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../../../index");

var _ExpandDropdown = _interopRequireDefault(require("../ExpandDropdown/ExpandDropdown"));

var _Dropdown = _interopRequireDefault(require("../../../Dropdown/Dropdown"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FilterDropdown = _interopRequireDefault(require("../FilterDropdown/FilterDropdown"));

var _inputValue = require("./_inputValue");

var _uuid = require("uuid");

var _utils = require("../../utils/utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FilterConditionItem = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterConditionItem, _React$Component);

  var _super = _createSuper(FilterConditionItem);

  function FilterConditionItem(props) {
    var _this;

    _classCallCheck(this, FilterConditionItem);

    _this = _super.call(this, props);

    _this.operatorsActivation = function () {
      var conditionOptions = _this.props.conditionObj.conditionOptions;
      var column_type = _this.state.activeField.column_type;
      if (column_type === "tag") return;

      _this.setState({
        dropdownFields: {
          field: true,
          operation: true,
          value: false
        }
      });

      if (conditionOptions.operator) {
        _this.valueInputActivation();
      }
    };

    _this.textAreaValueSet = function (_ref) {
      var value = _ref.value;
      var _this$props = _this.props,
          conditionID = _this$props.conditionID,
          globalConditionID = _this$props.globalConditionID,
          setConditionOptions = _this$props.setConditionOptions;

      _this.setState({
        textAreaValue: value
      }, function () {
        return setConditionOptions({
          value: _this.state.textAreaValue.replace(/\s/g, ""),
          conditionOption: "value"
        });
      });
    };

    _this.itemClicked = function (item) {
      var activeField = _this.state.activeField;
      var _this$props2 = _this.props,
          conditionID = _this$props2.conditionID,
          globalConditionID = _this$props2.globalConditionID,
          setConditionOptions = _this$props2.setConditionOptions;

      if (item.dropdown === "operation") {
        var activeOperator = activeField.operators.find(function (_ref2) {
          var operator = _ref2.operator;
          return operator === item.id;
        });

        _this.valueInputActivation();

        setConditionOptions({
          value: {
            operator: item.id,
            editor: activeOperator.advancedEditor
          },
          conditionOption: "operator"
        });
      }

      if (item.dropdown === "value") {
        var conditionOptions = _this.props.conditionObj.conditionOptions;
        var valueForContainer;

        switch (conditionOptions.operator.editor) {
          case "relative_field":
          case "glide_date_equivalent":
          case "glide_date_comparative":
            valueForContainer = {
              value: item.id,
              index: item.index
            };
            break;

          case "trend_field":
            if (item.index == 2) valueForContainer = {
              value: {
                id: item.id,
                label: item.label
              },
              index: item.index
            };else valueForContainer = {
              value: item.id,
              index: item.index
            };
            break;

          default:
            valueForContainer = item.id;
        }

        setConditionOptions({
          value: valueForContainer,
          conditionOption: "value"
        });
      }
    };

    _this.onDatePickerChange = function (_ref3) {
      var value = _ref3.value,
          type = _ref3.type,
          conditionOptions = _ref3.conditionOptions,
          index = _ref3.index;
      var setConditionOptions = _this.props.setConditionOptions;
      var newValue = value.newValue;
      var valueForContainer;

      switch (type) {
        case 'between_field':
        case 'relative-field':
        case 'glide_duration':
        case 'glide_date_comparative':
          valueForContainer = {
            value: newValue,
            index: index
          };
          break;

        default:
          valueForContainer = newValue;
      }

      setConditionOptions({
        value: valueForContainer,
        conditionOptions: conditionOptions,
        conditionOption: "value"
      });
    };

    _this.valueInputActivation = function () {
      _this.setState({
        dropdownsIsActive: {
          field: true,
          operation: true,
          value: true
        }
      });
    };

    _this.fetchTableData = function () {
      var conditionObj = _this.props.conditionObj;
      var _conditionObj$conditi = conditionObj.conditionOptions,
          activeFieldsData = _conditionObj$conditi.activeFieldsData,
          activeField = _conditionObj$conditi.activeField;

      if (activeFieldsData) {
        var activeFieldFromObj = activeFieldsData[activeField] || [""];

        _this.setState({
          tableFields: activeFieldsData,
          activeField: activeFieldFromObj
        }, function () {
          if (activeField) {
            _this.operatorsActivation();
          }
        });
      }
    };

    _this.resetSelectedItem = function () {
      _this.setState({
        selectedItem: {
          items: _this.props.conditionObj.selectedItem.items
        }
      });
    };

    _this.updateSelectedItem = function (_ref4) {
      var item = _ref4.item,
          command = _ref4.command,
          listIndex = _ref4.listIndex;
      var setConditionOptions = _this.props.setConditionOptions;
      var items = _this.state.selectedItem ? (0, _utils.clone)(_this.state.selectedItem.items) : [];

      if (command === "push") {
        items.push(item);

        _this.setState({
          selectedItem: {
            items: items,
            label: items.map(function (item) {
              return item.label;
            }).join(" . "),
            value: items.map(function (item) {
              return item.id;
            }).join(".")
          }
        }, function () {
          return setConditionOptions({
            value: _this.state.selectedItem,
            conditionOption: "field"
          });
        });
      } else if (command === "rewrite") {
        _this.setState({
          selectedItem: {
            items: [item],
            label: item.label,
            value: item.id
          }
        });
      } else if (command === "same_list_index") {
        items.splice(listIndex, items.length);
        items.push(item);

        _this.setState({
          selectedItem: {
            items: items,
            label: items.map(function (item) {
              return item.label;
            }).join(" . "),
            value: items.map(function (item) {
              return item.id;
            }).join(".")
          }
        }, function () {
          return setConditionOptions({
            value: _this.state.selectedItem,
            conditionOption: "field"
          });
        });
      }
    };

    _this.inputValueSet = function (_ref5) {
      var value = _ref5.value,
          type = _ref5.type,
          index = _ref5.index;
      var setConditionOptions = _this.props.setConditionOptions;
      var valueForContainer;

      switch (type) {
        case 'between_field':
        case 'relative-field':
        case 'glide_duration':
        case 'glide_date_comparative':
          valueForContainer = {
            value: value,
            index: index
          };
          break;

        default:
          valueForContainer = value;
      }

      setConditionOptions({
        value: valueForContainer,
        conditionOption: "value"
      });
    };

    _this.itemDropdownHandle = function (_ref6) {
      var value = _ref6.value,
          type = _ref6.type,
          index = _ref6.index;
      var conditionOptions = _this.props.conditionObj.conditionOptions;
      var valueForContainer;

      switch (conditionOptions.operator.editor) {
        case 'relative_field':
        case 'glide_date_equivalent':
        case 'glide_date_comparative':
          valueForContainer = {
            value: item.id,
            index: item.index
          };
          break;

        case 'trend_field':
          if (item.index == 2) {
            valueForContainer = {
              value: {
                id: item.id,
                label: item.label
              },
              index: item.index
            };
          } else {
            valueForContainer = {
              value: item.id,
              index: item.index
            };
          }

          break;

        default:
          valueForContainer = item.id;
      }
    };

    _this.state = {
      tableFields: {},
      activeField: "",
      dropdownsIsActive: {
        field: true,
        operation: false,
        value: false
      },
      selectedItem: _this.props.conditionObj.conditionOptions.fieldItems,
      dropdownFields: [],
      operators: [],
      textAreaValue: ""
    };
    return _this;
  } // fetchTableData = async (table) => {
  //     const endpoint = `${window.location.origin}/api/now/ui/meta/${table}`; //dev78490.service-now.com/
  //     const queryParams = {
  //         sysparm_operators: true,
  //         sysparm_get_extended_tables: true,
  //         sysparm_keywords: true
  //     };
  //     const query = prepareQueryParams(queryParams);
  //     const url = `${endpoint}?${query}`
  //     const params = {
  //         method: "GET"
  //     }
  //     return await fetchRequest({url, params})
  // }


  _createClass(FilterConditionItem, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) this.fetchTableData();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchTableData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          operatorType = _this$props3.operatorType,
          conditionObj = _this$props3.conditionObj,
          tableFields = _this$props3.tableFields,
          referenceTableFieldsData = _this$props3.referenceTableFieldsData,
          labelArr = _this$props3.labelArr,
          operatorArr = _this$props3.operatorArr,
          getConditionsIDs = _this$props3.getConditionsIDs,
          conditionID = _this$props3.conditionID,
          globalConditionID = _this$props3.globalConditionID,
          getClickedListIndex = _this$props3.getClickedListIndex; // conditionObj.conditionOptions.operatorsArray = operatorArr.map(operator => ({...operator, id: uuidv4().split("-").join("")}));

      var columns = tableFields.columns;
      var columnsArr = Object.values(columns).sort(function (a, b) {
        return a.label < b.label ? -1 : 0;
      }).map(function (column) {
        return _objectSpread(_objectSpread({}, column), {}, {
          id: column.name,
          reference: column.reference || ""
        });
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "condition-wrapper",
        onClick: function onClick() {
          return getConditionsIDs({
            currentConditionID: conditionID,
            globalConditionID: globalConditionID
          });
        },
        children: [operatorType === '^OR' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "condition-operator",
          children: "OR"
        }) : '', /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandDropdown["default"], {
            expandIcon: "arrow-right-circle",
            selectedItem: this.state.selectedItem,
            selectedItems: conditionObj.conditionOptions.activeField,
            updateSelectedItem: this.updateSelectedItem,
            onItemSelected: function onItemSelected(item) {
              return _this2.props.onItemClicked(item);
            },
            placeholder: "--choose field--",
            lists: conditionObj.conditionOptions.fieldsDropdownData
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: !!conditionObj.conditionOptions.operatorsArray ? conditionObj.conditionOptions.operatorsArray : [],
            selectedItems: conditionObj.conditionOptions.operator.operator ? [conditionObj.conditionOptions.operator.operator] : [],
            onItemSelected: function onItemSelected(item) {
              return _this2.itemClicked(item.clickedItem);
            },
            select: "single",
            search: "contains",
            placeholder: "--choose operator--",
            variant: "tertiary",
            size: "md",
            disabled: !conditionObj.conditionOptions.operatorsArray
          })
        }), (0, _inputValue.inputValue)(this.state, conditionObj.conditionOptions, this.itemClicked, this.onDatePickerChange, this.inputValueSet, this.textAreaValueSet), operatorType !== "^OR" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "btn-container",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
              label: "and",
              size: "md",
              onClick: function onClick() {
                _this2.props.addNewOperator({
                  value: "^",
                  currentConditionID: _this2.props.conditionID,
                  globalConditionID: _this2.props.globalConditionID
                });
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "btn-container",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
              label: "or",
              size: "md",
              onClick: function onClick() {
                _this2.props.addNewOperator({
                  value: "^OR",
                  currentConditionID: _this2.props.conditionID,
                  globalConditionID: _this2.props.globalConditionID
                });
              }
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "btn-container",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
            icon: "x-circle",
            size: "md",
            onClick: function onClick() {
              _this2.props.deleteCondition({
                currentConditionID: _this2.props.conditionID,
                globalConditionID: _this2.props.globalConditionID
              });
            }
          })
        })]
      });
    }
  }]);

  return FilterConditionItem;
}(React.Component);

exports["default"] = FilterConditionItem;
FilterConditionItem.defaultProps = {
  tableFields: {},
  conditionObj: {},
  conditionID: "",
  globalConditionID: "",
  operatorType: ""
};
FilterConditionItem.propTypes = {
  tableFields: _propTypes["default"].object,
  conditionObj: _propTypes["default"].object,
  conditionID: _propTypes["default"].string,
  globalConditionID: _propTypes["default"].string,
  operatorType: _propTypes["default"].string,
  addNewOperator: _propTypes["default"].func
};