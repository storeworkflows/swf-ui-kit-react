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

    _this.itemClicked = function (item) {
      var activeField = _this.state.activeField;
      var _this$props = _this.props,
          conditionID = _this$props.conditionID,
          globalConditionID = _this$props.globalConditionID,
          setConditionOptions = _this$props.setConditionOptions;

      if (item.dropdown === "operation") {
        var activeOperator = activeField.operators.find(function (_ref) {
          var operator = _ref.operator;
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

    _this.onDatePickerChange = function (_ref2) {
      var value = _ref2.value,
          type = _ref2.type,
          conditionOptions = _ref2.conditionOptions,
          index = _ref2.index;
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

    _this.updateSelectedItem = function (_ref3) {
      var item = _ref3.item,
          command = _ref3.command,
          listIndex = _ref3.listIndex;
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

    _this.inputValueSet = function (_ref4) {
      var value = _ref4.value,
          type = _ref4.type,
          index = _ref4.index;
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

    _this.itemDropdownHandle = function (_ref5) {
      var value = _ref5.value,
          type = _ref5.type,
          index = _ref5.index;
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
      operators: []
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

      var _this$props2 = this.props,
          operatorType = _this$props2.operatorType,
          conditionObj = _this$props2.conditionObj,
          tableFields = _this$props2.tableFields,
          referenceTableFieldsData = _this$props2.referenceTableFieldsData,
          labelArr = _this$props2.labelArr,
          operatorArr = _this$props2.operatorArr,
          getConditionsIDs = _this$props2.getConditionsIDs,
          conditionID = _this$props2.conditionID,
          globalConditionID = _this$props2.globalConditionID,
          getClickedListIndex = _this$props2.getClickedListIndex; // conditionObj.conditionOptions.operatorsArray = operatorArr.map(operator => ({...operator, id: uuidv4().split("-").join("")}));

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
        }), (0, _inputValue.inputValue)(this.state, conditionObj.conditionOptions, this.itemClicked, this.onDatePickerChange, this.inputValueSet, this.itemDropdownHandle), operatorType !== "^OR" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRmlsdGVyQ29uZGl0aW9uSXRlbS9GaWx0ZXJDb25kaXRpb25JdGVtLmpzIl0sIm5hbWVzIjpbIkZpbHRlckNvbmRpdGlvbkl0ZW0iLCJwcm9wcyIsIm9wZXJhdG9yc0FjdGl2YXRpb24iLCJjb25kaXRpb25PcHRpb25zIiwiY29uZGl0aW9uT2JqIiwiY29sdW1uX3R5cGUiLCJzdGF0ZSIsImFjdGl2ZUZpZWxkIiwic2V0U3RhdGUiLCJkcm9wZG93bkZpZWxkcyIsImZpZWxkIiwib3BlcmF0aW9uIiwidmFsdWUiLCJvcGVyYXRvciIsInZhbHVlSW5wdXRBY3RpdmF0aW9uIiwiaXRlbUNsaWNrZWQiLCJpdGVtIiwiY29uZGl0aW9uSUQiLCJnbG9iYWxDb25kaXRpb25JRCIsInNldENvbmRpdGlvbk9wdGlvbnMiLCJkcm9wZG93biIsImFjdGl2ZU9wZXJhdG9yIiwib3BlcmF0b3JzIiwiZmluZCIsImlkIiwiZWRpdG9yIiwiYWR2YW5jZWRFZGl0b3IiLCJjb25kaXRpb25PcHRpb24iLCJ2YWx1ZUZvckNvbnRhaW5lciIsImluZGV4IiwibGFiZWwiLCJvbkRhdGVQaWNrZXJDaGFuZ2UiLCJ0eXBlIiwibmV3VmFsdWUiLCJkcm9wZG93bnNJc0FjdGl2ZSIsImZldGNoVGFibGVEYXRhIiwiYWN0aXZlRmllbGRzRGF0YSIsImFjdGl2ZUZpZWxkRnJvbU9iaiIsInRhYmxlRmllbGRzIiwicmVzZXRTZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW0iLCJpdGVtcyIsInVwZGF0ZVNlbGVjdGVkSXRlbSIsImNvbW1hbmQiLCJsaXN0SW5kZXgiLCJwdXNoIiwibWFwIiwiam9pbiIsInNwbGljZSIsImxlbmd0aCIsImlucHV0VmFsdWVTZXQiLCJpdGVtRHJvcGRvd25IYW5kbGUiLCJmaWVsZEl0ZW1zIiwicHJldlByb3BzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9wZXJhdG9yVHlwZSIsInJlZmVyZW5jZVRhYmxlRmllbGRzRGF0YSIsImxhYmVsQXJyIiwib3BlcmF0b3JBcnIiLCJnZXRDb25kaXRpb25zSURzIiwiZ2V0Q2xpY2tlZExpc3RJbmRleCIsImNvbHVtbnMiLCJjb2x1bW5zQXJyIiwiT2JqZWN0IiwidmFsdWVzIiwic29ydCIsImEiLCJiIiwiY29sdW1uIiwibmFtZSIsInJlZmVyZW5jZSIsImN1cnJlbnRDb25kaXRpb25JRCIsIm9uSXRlbUNsaWNrZWQiLCJmaWVsZHNEcm9wZG93bkRhdGEiLCJvcGVyYXRvcnNBcnJheSIsImNsaWNrZWRJdGVtIiwiYWRkTmV3T3BlcmF0b3IiLCJkZWxldGVDb25kaXRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLG1COzs7OztBQUNqQiwrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBbUNuQkMsbUJBbkNtQixHQW1DRyxZQUFNO0FBQUEsVUFDQUMsZ0JBREEsR0FDdUIsTUFBS0YsS0FENUIsQ0FDaEJHLFlBRGdCLENBQ0FELGdCQURBO0FBQUEsVUFFREUsV0FGQyxHQUVpQixNQUFLQyxLQUZ0QixDQUVoQkMsV0FGZ0IsQ0FFREYsV0FGQztBQUl4QixVQUFJQSxXQUFXLEtBQUssS0FBcEIsRUFBMkI7O0FBRTNCLFlBQUtHLFFBQUwsQ0FBYztBQUNWQyxRQUFBQSxjQUFjLEVBQUU7QUFDWkMsVUFBQUEsS0FBSyxFQUFFLElBREs7QUFFWkMsVUFBQUEsU0FBUyxFQUFFLElBRkM7QUFHWkMsVUFBQUEsS0FBSyxFQUFFO0FBSEs7QUFETixPQUFkOztBQVFBLFVBQUlULGdCQUFnQixDQUFDVSxRQUFy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QUFXLEVBQUUsRUFIa0I7QUFJL0JDLEVBQUFBLGlCQUFpQixFQUFFLEVBSlk7QUFLL0JzQyxFQUFBQSxZQUFZLEVBQUU7QUFMaUIsQ0FBbkM7QUFRQXhELG1CQUFtQixDQUFDa0YsU0FBcEIsR0FBZ0M7QUFDNUI1QyxFQUFBQSxXQUFXLEVBQUU0QyxzQkFBVUMsTUFESztBQUU1Qi9FLEVBQUFBLFlBQVksRUFBRThFLHNCQUFVQyxNQUZJO0FBRzVCbEUsRUFBQUEsV0FBVyxFQUFFaUUsc0JBQVVFLE1BSEs7QUFJNUJsRSxFQUFBQSxpQkFBaUIsRUFBRWdFLHNCQUFVRSxNQUpEO0FBSzVCNUIsRUFBQUEsWUFBWSxFQUFFMEIsc0JBQVVFLE1BTEk7QUFNNUJQLEVBQUFBLGNBQWMsRUFBRUssc0JBQVVHO0FBTkUsQ0FBaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7XHJcbmltcG9ydCBFeHBhbmREcm9wZG93biBmcm9tIFwiLi4vRXhwYW5kRHJvcGRvd24vRXhwYW5kRHJvcGRvd25cIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi8uLi9Ecm9wZG93bi9Ecm9wZG93blwiXHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEZpbHRlckRyb3Bkb3duIGZyb20gXCIuLi9GaWx0ZXJEcm9wZG93bi9GaWx0ZXJEcm9wZG93blwiO1xyXG5pbXBvcnQgeyBpbnB1dFZhbHVlIH0gZnJvbSBcIi4vX2lucHV0VmFsdWVcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IHsgY2xvbmUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHNcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJDb25kaXRpb25JdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRhYmxlRmllbGRzOiB7fSxcclxuICAgICAgICAgICAgYWN0aXZlRmllbGQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGRyb3Bkb3duc0lzQWN0aXZlOiB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiB0aGlzLnByb3BzLmNvbmRpdGlvbk9iai5jb25kaXRpb25PcHRpb25zLmZpZWxkSXRlbXMsXHJcbiAgICAgICAgICAgIGRyb3Bkb3duRmllbGRzOiBbXSxcclxuICAgICAgICAgICAgb3BlcmF0b3JzOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBmZXRjaFRhYmxlRGF0YSA9IGFzeW5jICh0YWJsZSkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vYXBpL25vdy91aS9tZXRhLyR7dGFibGV9YDsgLy9kZXY3ODQ5MC5zZXJ2aWNlLW5vdy5jb20vXHJcbiAgICAvLyAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7XHJcbiAgICAvLyAgICAgICAgIHN5c3Bhcm1fb3BlcmF0b3JzOiB0cnVlLFxyXG4gICAgLy8gICAgICAgICBzeXNwYXJtX2dldF9leHRlbmRlZF90YWJsZXM6IHRydWUsXHJcbiAgICAvLyAgICAgICAgIHN5c3Bhcm1fa2V5d29yZHM6IHRydWVcclxuICAgIC8vICAgICB9O1xyXG4gICAgLy8gICAgIGNvbnN0IHF1ZXJ5ID0gcHJlcGFyZVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKTtcclxuICAgIC8vICAgICBjb25zdCB1cmwgPSBgJHtlbmRwb2ludH0/JHtxdWVyeX1gXHJcbiAgICAvLyAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgLy8gICAgICAgICBtZXRob2Q6IFwiR0VUXCJcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIGF3YWl0IGZldGNoUmVxdWVzdCh7dXJsLCBwYXJhbXN9KVxyXG4gICAgLy8gfVxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShwcmV2UHJvcHMpICE9PSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzKSlcclxuICAgICAgICAgICAgdGhpcy5mZXRjaFRhYmxlRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZXJhdG9yc0FjdGl2YXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb25kaXRpb25PYmo6IHsgY29uZGl0aW9uT3B0aW9ucyB9IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgYWN0aXZlRmllbGQ6IHsgY29sdW1uX3R5cGUgfSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKGNvbHVtbl90eXBlID09PSBcInRhZ1wiKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkcm9wZG93bkZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChjb25kaXRpb25PcHRpb25zLm9wZXJhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVJbnB1dEFjdGl2YXRpb24oKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpdGVtQ2xpY2tlZCA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBhY3RpdmVGaWVsZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IGNvbmRpdGlvbklELCBnbG9iYWxDb25kaXRpb25JRCwgc2V0Q29uZGl0aW9uT3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAoaXRlbS5kcm9wZG93biA9PT0gXCJvcGVyYXRpb25cIikge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlT3BlcmF0b3IgPSBhY3RpdmVGaWVsZC5vcGVyYXRvcnMuZmluZCgoeyBvcGVyYXRvciB9KSA9PiBvcGVyYXRvciA9PT0gaXRlbS5pZClcclxuXHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVJbnB1dEFjdGl2YXRpb24oKVxyXG4gICAgICAgICAgICBzZXRDb25kaXRpb25PcHRpb25zKHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB7IG9wZXJhdG9yOiBpdGVtLmlkLCBlZGl0b3I6IGFjdGl2ZU9wZXJhdG9yLmFkdmFuY2VkRWRpdG9yIH0sXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25PcHRpb246IFwib3BlcmF0b3JcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbS5kcm9wZG93biA9PT0gXCJ2YWx1ZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgY29uZGl0aW9uT2JqOiB7IGNvbmRpdGlvbk9wdGlvbnMgfSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgbGV0IHZhbHVlRm9yQ29udGFpbmVyO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbmRpdGlvbk9wdGlvbnMub3BlcmF0b3IuZWRpdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicmVsYXRpdmVfZmllbGRcIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJnbGlkZV9kYXRlX2VxdWl2YWxlbnRcIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJnbGlkZV9kYXRlX2NvbXBhcmF0aXZlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVGb3JDb250YWluZXIgPSB7IHZhbHVlOiBpdGVtLmlkLCBpbmRleDogaXRlbS5pbmRleCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInRyZW5kX2ZpZWxkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaW5kZXggPT0gMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVGb3JDb250YWluZXIgPSB7IHZhbHVlOiB7IGlkOiBpdGVtLmlkLCBsYWJlbDogaXRlbS5sYWJlbCB9LCBpbmRleDogaXRlbS5pbmRleCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVGb3JDb250YWluZXIgPSB7IHZhbHVlOiBpdGVtLmlkLCBpbmRleDogaXRlbS5pbmRleCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUZvckNvbnRhaW5lciA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0Q29uZGl0aW9uT3B0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVGb3JDb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25PcHRpb246IFwidmFsdWVcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRhdGVQaWNrZXJDaGFuZ2UgPSAoe3ZhbHVlLCB0eXBlLCBjb25kaXRpb25PcHRpb25zLCBpbmRleH0pID0+IHtcclxuICAgICAgICBjb25zdCB7IHNldENvbmRpdGlvbk9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBuZXdWYWx1ZSB9ID0gdmFsdWU7XHJcbiAgICAgICAgbGV0IHZhbHVlRm9yQ29udGFpbmVyO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdiZXR3ZWVuX2ZpZWxkJzpcclxuICAgICAgICAgICAgY2FzZSAncmVsYXRpdmUtZmllbGQnOlxyXG4gICAgICAgICAgICBjYXNlICdnbGlkZV9kdXJhdGlvbic6XHJcbiAgICAgICAgICAgIGNhc2UgJ2dsaWRlX2RhdGVfY29tcGFyYXRpdmUnOlxyXG4gICAgICAgICAgICAgICAgdmFsdWVGb3JDb250YWluZXIgPSB7dmFsdWU6IG5ld1ZhbHVlLCBpbmRleH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHZhbHVlRm9yQ29udGFpbmVyID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDb25kaXRpb25PcHRpb25zKHt2YWx1ZTogdmFsdWVGb3JDb250YWluZXIsIGNvbmRpdGlvbk9wdGlvbnMsIGNvbmRpdGlvbk9wdGlvbjogXCJ2YWx1ZVwifSlcclxuICAgIH1cclxuXHJcbiAgICB2YWx1ZUlucHV0QWN0aXZhdGlvbiA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZHJvcGRvd25zSXNBY3RpdmU6IHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hUYWJsZURhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge2NvbmRpdGlvbk9ian0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgYWN0aXZlRmllbGRzRGF0YSwgYWN0aXZlRmllbGQgfSA9IGNvbmRpdGlvbk9iai5jb25kaXRpb25PcHRpb25zO1xyXG4gICAgICAgIGlmIChhY3RpdmVGaWVsZHNEYXRhKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgYWN0aXZlRmllbGRGcm9tT2JqID0gYWN0aXZlRmllbGRzRGF0YVthY3RpdmVGaWVsZF0gfHwgW1wiXCJdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0YWJsZUZpZWxkczogYWN0aXZlRmllbGRzRGF0YSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUZpZWxkOiBhY3RpdmVGaWVsZEZyb21PYmpcclxuICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlRmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlcmF0b3JzQWN0aXZhdGlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmZldGNoVGFibGVEYXRhKClcclxuICAgIH1cclxuXHJcbiAgICByZXNldFNlbGVjdGVkSXRlbSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEl0ZW06IHtcclxuICAgICAgICAgICAgaXRlbXM6IHRoaXMucHJvcHMuY29uZGl0aW9uT2JqLnNlbGVjdGVkSXRlbS5pdGVtc1xyXG4gICAgICAgIH19KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNlbGVjdGVkSXRlbSA9ICh7aXRlbSwgY29tbWFuZCwgbGlzdEluZGV4fSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc2V0Q29uZGl0aW9uT3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtID8gY2xvbmUodGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0uaXRlbXMpIDogW107XHJcbiAgICAgICAgaWYgKGNvbW1hbmQgPT09IFwicHVzaFwiKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkSXRlbToge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5sYWJlbCkuam9pbihcIiAuIFwiKSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmlkKS5qb2luKFwiLlwiKVxyXG4gICAgICAgICAgICB9fSwgKCkgPT4gc2V0Q29uZGl0aW9uT3B0aW9ucyh7dmFsdWU6IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLCBjb25kaXRpb25PcHRpb246IFwiZmllbGRcIn0pKTt9XHJcbiAgICAgICAgZWxzZSBpZiAoY29tbWFuZCA9PT0gXCJyZXdyaXRlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRJdGVtOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogW2l0ZW1dLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWwsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5pZFxyXG4gICAgICAgICAgICB9fSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kID09PSBcInNhbWVfbGlzdF9pbmRleFwiKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zLnNwbGljZShsaXN0SW5kZXgsIGl0ZW1zLmxlbmd0aClcclxuICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRJdGVtOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtcyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBpdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmxhYmVsKS5qb2luKFwiIC4gXCIpLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW1zLm1hcChpdGVtID0+IGl0ZW0uaWQpLmpvaW4oXCIuXCIpXHJcbiAgICAgICAgICAgIH19LCAoKSA9PiBzZXRDb25kaXRpb25PcHRpb25zKHt2YWx1ZTogdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0sIGNvbmRpdGlvbk9wdGlvbjogXCJmaWVsZFwifSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFZhbHVlU2V0ID0gKHt2YWx1ZSwgdHlwZSwgaW5kZXh9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZXRDb25kaXRpb25PcHRpb25zIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCB2YWx1ZUZvckNvbnRhaW5lcjtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYmV0d2Vlbl9maWVsZCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3JlbGF0aXZlLWZpZWxkJzpcclxuICAgICAgICAgICAgY2FzZSAnZ2xpZGVfZHVyYXRpb24nOlxyXG4gICAgICAgICAgICBjYXNlICdnbGlkZV9kYXRlX2NvbXBhcmF0aXZlJzpcclxuICAgICAgICAgICAgICAgIHZhbHVlRm9yQ29udGFpbmVyID0geyB2YWx1ZSwgaW5kZXggfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdmFsdWVGb3JDb250YWluZXIgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldENvbmRpdGlvbk9wdGlvbnMoe3ZhbHVlOiB2YWx1ZUZvckNvbnRhaW5lciwgY29uZGl0aW9uT3B0aW9uOiBcInZhbHVlXCJ9KVxyXG4gICAgfVxyXG5cclxuICAgIGl0ZW1Ecm9wZG93bkhhbmRsZSA9ICh7dmFsdWUsIHR5cGUsIGluZGV4fSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZGl0aW9uT2JqOiB7IGNvbmRpdGlvbk9wdGlvbnMgfSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgdmFsdWVGb3JDb250YWluZXI7XHJcbiAgICAgICAgc3dpdGNoIChjb25kaXRpb25PcHRpb25zLm9wZXJhdG9yLmVkaXRvcikge1xyXG4gICAgICAgICAgICBjYXNlICdyZWxhdGl2ZV9maWVsZCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdnbGlkZV9kYXRlX2VxdWl2YWxlbnQnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVGb3JDb250YWluZXIgPSB7IHZhbHVlOiBpdGVtLmlkLCBpbmRleDogaXRlbS5pbmRleCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndHJlbmRfZmllbGQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVGb3JDb250YWluZXIgPSB7IHZhbHVlOiB7IGlkOiBpdGVtLmlkLCBsYWJlbDogaXRlbS5sYWJlbCB9LCBpbmRleDogaXRlbS5pbmRleCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRm9yQ29udGFpbmVyID0geyB2YWx1ZTogaXRlbS5pZCwgaW5kZXg6IGl0ZW0uaW5kZXggfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlRm9yQ29udGFpbmVyID0gaXRlbS5pZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgb3BlcmF0b3JUeXBlLFxyXG4gICAgICAgICAgICBjb25kaXRpb25PYmosXHJcbiAgICAgICAgICAgIHRhYmxlRmllbGRzLFxyXG4gICAgICAgICAgICByZWZlcmVuY2VUYWJsZUZpZWxkc0RhdGEsXHJcbiAgICAgICAgICAgIGxhYmVsQXJyLFxyXG4gICAgICAgICAgICBvcGVyYXRvckFycixcclxuICAgICAgICAgICAgZ2V0Q29uZGl0aW9uc0lEcyxcclxuICAgICAgICAgICAgY29uZGl0aW9uSUQsXHJcbiAgICAgICAgICAgIGdsb2JhbENvbmRpdGlvbklELFxyXG4gICAgICAgICAgICBnZXRDbGlja2VkTGlzdEluZGV4XHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIC8vIGNvbmRpdGlvbk9iai5jb25kaXRpb25PcHRpb25zLm9wZXJhdG9yc0FycmF5ID0gb3BlcmF0b3JBcnIubWFwKG9wZXJhdG9yID0+ICh7Li4ub3BlcmF0b3IsIGlkOiB1dWlkdjQoKS5zcGxpdChcIi1cIikuam9pbihcIlwiKX0pKTtcclxuICAgICAgICBjb25zdCB7IGNvbHVtbnMgfSA9IHRhYmxlRmllbGRzO1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbnNBcnIgPSBPYmplY3QudmFsdWVzKGNvbHVtbnMpLnNvcnQoKGEsIGIpID0+IGEubGFiZWwgPCBiLmxhYmVsID8gLTEgOiAwKS5tYXAoY29sdW1uID0+ICh7Li4uY29sdW1uLCBpZDogY29sdW1uLm5hbWUsIHJlZmVyZW5jZTogY29sdW1uLnJlZmVyZW5jZSB8fCBcIlwifSkpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZGl0aW9uLXdyYXBwZXJcIiBvbkNsaWNrPXsoKSA9PiBnZXRDb25kaXRpb25zSURzKHtjdXJyZW50Q29uZGl0aW9uSUQ6IGNvbmRpdGlvbklELCBnbG9iYWxDb25kaXRpb25JRH0pfT5cclxuICAgICAgICAgICAgICAgIHtcclxuXHRcdFx0XHRcdG9wZXJhdG9yVHlwZSA9PT0gJ15PUicgPyA8c3BhbiBjbGFzc05hbWU9XCJjb25kaXRpb24tb3BlcmF0b3JcIj5PUjwvc3Bhbj4gOiAnJ1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEV4cGFuZERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEljb249XCJhcnJvdy1yaWdodC1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW09e3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtjb25kaXRpb25PYmouY29uZGl0aW9uT3B0aW9ucy5hY3RpdmVGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2VsZWN0ZWRJdGVtPXt0aGlzLnVwZGF0ZVNlbGVjdGVkSXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQ9eyhpdGVtKSA9PiB0aGlzLnByb3BzLm9uSXRlbUNsaWNrZWQoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIi0tY2hvb3NlIGZpZWxkLS1cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdHM9e2NvbmRpdGlvbk9iai5jb25kaXRpb25PcHRpb25zLmZpZWxkc0Ryb3Bkb3duRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17ISFjb25kaXRpb25PYmouY29uZGl0aW9uT3B0aW9ucy5vcGVyYXRvcnNBcnJheSA/IGNvbmRpdGlvbk9iai5jb25kaXRpb25PcHRpb25zLm9wZXJhdG9yc0FycmF5IDogW119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e2NvbmRpdGlvbk9iai5jb25kaXRpb25PcHRpb25zLm9wZXJhdG9yLm9wZXJhdG9yID8gW2NvbmRpdGlvbk9iai5jb25kaXRpb25PcHRpb25zLm9wZXJhdG9yLm9wZXJhdG9yXSA6IFtdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3RlZD17KGl0ZW0pID0+IHRoaXMuaXRlbUNsaWNrZWQoaXRlbS5jbGlja2VkSXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaD1cImNvbnRhaW5zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiLS1jaG9vc2Ugb3BlcmF0b3ItLVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNvbmRpdGlvbk9iai5jb25kaXRpb25PcHRpb25zLm9wZXJhdG9yc0FycmF5fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlKHRoaXMuc3RhdGUsIGNvbmRpdGlvbk9iai5jb25kaXRpb25PcHRpb25zLCB0aGlzLml0ZW1DbGlja2VkLCB0aGlzLm9uRGF0ZVBpY2tlckNoYW5nZSwgdGhpcy5pbnB1dFZhbHVlU2V0LCB0aGlzLml0ZW1Ecm9wZG93bkhhbmRsZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtvcGVyYXRvclR5cGUgIT09IFwiXk9SXCIgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cImFuZFwiIHNpemU9XCJtZFwiICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFkZE5ld09wZXJhdG9yKHt2YWx1ZTogXCJeXCIsIGN1cnJlbnRDb25kaXRpb25JRDogdGhpcy5wcm9wcy5jb25kaXRpb25JRCwgZ2xvYmFsQ29uZGl0aW9uSUQ6IHRoaXMucHJvcHMuZ2xvYmFsQ29uZGl0aW9uSUR9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwib3JcIiBzaXplPVwibWRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFkZE5ld09wZXJhdG9yKHt2YWx1ZTogXCJeT1JcIiwgY3VycmVudENvbmRpdGlvbklEOiB0aGlzLnByb3BzLmNvbmRpdGlvbklELCBnbG9iYWxDb25kaXRpb25JRDogdGhpcy5wcm9wcy5nbG9iYWxDb25kaXRpb25JRH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJ4LWNpcmNsZVwiIHNpemU9XCJtZFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVDb25kaXRpb24oe2N1cnJlbnRDb25kaXRpb25JRDogdGhpcy5wcm9wcy5jb25kaXRpb25JRCwgZ2xvYmFsQ29uZGl0aW9uSUQ6IHRoaXMucHJvcHMuZ2xvYmFsQ29uZGl0aW9uSUR9KVxyXG4gICAgICAgICAgICAgICAgICAgIH19ICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuRmlsdGVyQ29uZGl0aW9uSXRlbS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB0YWJsZUZpZWxkczoge30sXHJcbiAgICBjb25kaXRpb25PYmo6IHt9LFxyXG4gICAgY29uZGl0aW9uSUQ6IFwiXCIsXHJcbiAgICBnbG9iYWxDb25kaXRpb25JRDogXCJcIixcclxuICAgIG9wZXJhdG9yVHlwZTogXCJcIlxyXG59XHJcblxyXG5GaWx0ZXJDb25kaXRpb25JdGVtLnByb3BUeXBlcyA9IHtcclxuICAgIHRhYmxlRmllbGRzOiBwcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY29uZGl0aW9uT2JqOiBwcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY29uZGl0aW9uSUQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBnbG9iYWxDb25kaXRpb25JRDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9wZXJhdG9yVHlwZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGFkZE5ld09wZXJhdG9yOiBwcm9wVHlwZXMuZnVuY1xyXG59XHJcbiJdfQ==