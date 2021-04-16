"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _ExpandDropdown = _interopRequireDefault(require("../ExpandDropdown/ExpandDropdown"));

var _Dropdown = _interopRequireDefault(require("../../../Dropdown/Dropdown"));

var _utils = require("../../utils");

var _inputValue = require("./_inputValue");

var _index = require("../../../index");

var _utils2 = require("../../../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

    _this.prepareTextAreaValue = function (_ref) {
      var value = _ref.value;
      var setConditionOptions = _this.props.setConditionOptions;
      var string = value.trim().split(" ").filter(Boolean).join(" ");
      string = !!string.match("\n") ? string.split(/\n|\s/).filter(Boolean).join(",") : string;
      setConditionOptions({
        value: string,
        conditionOption: "value"
      });
    };

    _this.textAreaValueSet = function (_ref2) {
      var value = _ref2.value;

      _this.setState({
        textAreaValue: value
      }, function () {
        return _this.prepareTextAreaValue({
          value: _this.state.textAreaValue
        });
      });
    };

    _this.itemClicked = function (item) {
      var activeField = _this.state.activeField;
      var setConditionOptions = _this.props.setConditionOptions;

      if (item.dropdown === "operation") {
        var activeOperator = activeField.operators.find(function (_ref3) {
          var operator = _ref3.operator;
          return operator === item.id;
        }); // setConditionOptions({
        //     value: { operator: "", editor: "" },
        //     conditionOption: "operator"
        // })

        _this.valueInputDeactivation();

        setConditionOptions({
          value: {
            operator: item.id,
            editor: activeOperator.advancedEditor
          },
          conditionOption: "operator"
        }); // setConditionOptions({
        //     value: "",
        //     conditionOption: "value"
        // })
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

    _this.onDatePickerChange = function (_ref4) {
      var value = _ref4.value,
          type = _ref4.type,
          conditionOptions = _ref4.conditionOptions,
          index = _ref4.index;
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

    _this.valueInputDeactivation = function () {
      _this.setState({
        dropdownsIsActive: {
          field: true,
          operation: true,
          value: false
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

    _this.operatorsDeactivation = function () {
      _this.setState({
        dropdownsIsActive: {
          field: true,
          operation: false,
          value: false
        }
      });
    };

    _this.onItemClicked = function (item) {
      var clickedItem = item.clickedItem;
      var _this$props = _this.props,
          setConditionOptions = _this$props.setConditionOptions,
          conditionID = _this$props.conditionID,
          globalConditionID = _this$props.globalConditionID;
      var selectedItem = _this.state.selectedItem;
      var queryParams = {
        sysparm_operators: true,
        sysparm_get_extended_tables: true,
        sysparm_keywords: true
      };
      var items = {};
      var itemsArr = [];
      itemsArr.push(clickedItem);
      items = {
        conditionId: conditionID,
        globalConditionID: globalConditionID,
        listIndex: clickedItem.listIndex,
        selectedItems: {
          items: selectedItem.items,
          label: selectedItem.items.map(function (item) {
            return item.label;
          }).join(" . "),
          value: selectedItem.items.map(function (item) {
            return item.id;
          }).join(".")
        },
        firstOperator: clickedItem.firstOperator
      };
      clickedItem.dropdownClicked ? _utils.REQUEST_UTILS.fetchTableData({
        table: clickedItem.table,
        queryParams: queryParams
      }).then(function (res) {
        _this.operatorsDeactivation();

        items = _objectSpread(_objectSpread({}, items), {}, {
          result: res.columns
        });
        setConditionOptions({
          value: items,
          globalConditionID: globalConditionID,
          currentConditionID: conditionID,
          conditionOption: "fieldsData"
        });
      }) : _utils2.noop;

      if (!clickedItem.dropdownClicked) {
        _this.operatorsActivation();

        setConditionOptions({
          value: items.selectedItems,
          globalConditionID: globalConditionID,
          currentConditionID: conditionID,
          conditionOption: "field"
        });
      }
    };

    _this.updateSelectedItem = function (_ref5) {
      var item = _ref5.item,
          command = _ref5.command,
          listIndex = _ref5.listIndex;
      var items = _this.state.selectedItem.items;

      if (command === "push") {
        items.push(item);

        _this.setState({
          selectedItem: {
            items: items
          }
        });
      } else if (command === "rewrite") {
        _this.setState({
          selectedItem: {
            items: [item]
          }
        });
      } else if (command === "same_list_index") {
        items.splice(listIndex, items.length);
        items.push(item);

        _this.setState({
          selectedItem: {
            items: items
          }
        });
      }
    };

    _this.inputValueSet = function (_ref6) {
      var value = _ref6.value,
          type = _ref6.type,
          index = _ref6.index;
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

    _this.itemDropdownHandle = function () {
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
      selectedItem: {
        items: []
      },
      dropdownFields: [],
      operators: [],
      textAreaValue: ""
    };
    return _this;
  }

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

      var _this$props2 = this.props,
          operatorType = _this$props2.operatorType,
          conditionObj = _this$props2.conditionObj,
          getConditionsIDs = _this$props2.getConditionsIDs,
          conditionID = _this$props2.conditionID,
          globalConditionID = _this$props2.globalConditionID;
      var dropdownsIsActive = this.state.dropdownsIsActive;
      var isBtnsRender = !!conditionObj.conditionOptions.value || conditionObj.conditionOptions.operator.editor === "none";
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
            selectedItem: this.props.selectedItem,
            selectedItems: conditionObj.conditionOptions.fieldItems ? conditionObj.conditionOptions.fieldItems.items : [],
            updateSelectedItem: this.updateSelectedItem,
            onItemSelected: function onItemSelected(item) {
              return _this2.onItemClicked(item);
            },
            placeholder: "--choose field--",
            lists: conditionObj.conditionOptions.fieldsDropdownData
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: conditionObj.conditionOptions.operatorsArray,
            selectedItems: [conditionObj.conditionOptions.operator.operator],
            onItemSelected: function onItemSelected(item) {
              return _this2.itemClicked(item.clickedItem);
            },
            select: "single",
            search: "contains",
            placeholder: "--choose operator--",
            variant: "tertiary",
            size: "md",
            disabled: !dropdownsIsActive.operation,
            manageSelectedItems: true
          })
        }), dropdownsIsActive.value && (0, _inputValue.inputValue)(this.state, conditionObj.conditionOptions, this.itemClicked, this.onDatePickerChange, this.inputValueSet, this.textAreaValueSet), operatorType !== "^OR" && isBtnsRender && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
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
            variant: "tertiary",
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