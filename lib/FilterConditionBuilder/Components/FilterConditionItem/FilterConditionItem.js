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

    _this.textAreaValueSet = function (_ref) {
      var value = _ref.value;
      var _this$props = _this.props,
          conditionID = _this$props.conditionID,
          globalConditionID = _this$props.globalConditionID,
          setConditionOptions = _this$props.setConditionOptions;

      _this.setState({
        textAreaValue: value
      });

      setConditionOptions({
        value: _this.state.textAreaValue,
        currentConditionID: conditionID,
        globalConditionID: globalConditionID,
        conditionOption: "value"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRmlsdGVyQ29uZGl0aW9uSXRlbS9GaWx0ZXJDb25kaXRpb25JdGVtLmpzIl0sIm5hbWVzIjpbIkZpbHRlckNvbmRpdGlvbkl0ZW0iLCJwcm9wcyIsIm9wZXJhdG9yc0FjdGl2YXRpb24iLCJjb25kaXRpb25PcHRpb25zIiwiY29uZGl0aW9uT2JqIiwiY29sdW1uX3R5cGUiLCJzdGF0ZSIsImFjdGl2ZUZpZWxkIiwic2V0U3RhdGUiLCJkcm9wZG93bkZpZWxkcyIsImZpZWxkIiwib3BlcmF0aW9uIiwidmFsdWUiLCJvcGVyYXRvciIsInZhbHVlSW5wdXRBY3RpdmF0aW9uIiwidGV4dEFyZWFWYWx1ZVNldCIsImNvbmRpdGlvbklEIiwiZ2xvYmFsQ29uZGl0aW9uSUQiLCJzZXRDb25kaXRpb25PcHRpb25zIiwidGV4dEFyZWFWYWx1ZSIsImN1cnJlbnRDb25kaXRpb25JRCIsImNvbmRpdGlvbk9wdGlvbiIsIml0ZW1DbGlja2VkIiwiaXRlbSIsImRyb3Bkb3duIiwiYWN0aXZlT3BlcmF0b3IiLCJvcGVyYXRvcnMiLCJmaW5kIiwiaWQiLCJlZGl0b3IiLCJhZHZhbmNlZEVkaXRvciIsInZhbHVlRm9yQ29udGFpbmVyIiwiaW5kZXgiLCJsYWJlbCIsIm9uRGF0ZVBpY2tlckNoYW5nZSIsInR5cGUiLCJuZXdWYWx1ZSIsImRyb3Bkb3duc0lzQWN0aXZlIiwiZmV0Y2hUYWJsZURhdGEiLCJhY3RpdmVGaWVsZHNEYXRhIiwiYWN0aXZlRmllbGRGcm9tT2JqIiwidGFibGVGaWVsZHMiLCJyZXNldFNlbGVjdGVkSXRlbSIsInNlbGVjdGVkSXRlbSIsIml0ZW1zIiwidXBkYXRlU2VsZWN0ZWRJdGVtIiwiY29tbWFuZCIsImxpc3RJbmRleCIsInB1c2giLCJtYXAiLCJqb2luIiwic3BsaWNlIiwibGVuZ3RoIiwiaW5wdXRWYWx1ZVNldCIsIml0ZW1Ecm9wZG93bkhhbmRsZSIsImZpZWxkSXRlbXMiLCJwcmV2UHJvcHMiLCJKU09OIiwic3RyaW5naWZ5Iiwib3BlcmF0b3JUeXBlIiwicmVmZXJlbmNlVGFibGVGaWVsZHNEYXRhIiwibGFiZWxBcnIiLCJvcGVyYXRvckFyciIsImdldENvbmRpdGlvbnNJRHMiLCJnZXRDbGlja2VkTGlzdEluZGV4IiwiY29sdW1ucyIsImNvbHVtbnNBcnIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJjb2x1bW4iLCJuYW1lIiwicmVmZXJlbmNlIiwib25JdGVtQ2xpY2tlZCIsImZpZWxkc0Ryb3Bkb3duRGF0YSIsIm9wZXJhdG9yc0FycmF5IiwiY2xpY2tlZEl0ZW0iLCJhZGROZXdPcGVyYXRvciIsImRlbGV0ZUNvbmRpdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwib2JqZWN0Iiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsbUI7Ozs7O0FBQ2pCLCtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsVUFvQ25CQyxtQkFwQ21CLEdBb0NHLFlBQU07QUFBQSxVQUNBQyxnQkFEQSxHQUN1QixNQUFLRixLQUQ1QixDQUNoQkcsWUFEZ0IsQ0FDQUQsZ0JBREE7QUFBQSxVQUVERSxXQUZDLEdBRWlCLE1BQUtDLEtBRnRCLENBRWhCQyxXQUZnQixDQUVERixXQUZDO0FBSXhCLFVBQUlBLFdBQVcsS0FBSyxLQUFwQixFQUEyQjs7QUFFM0IsWUFBS0csUUFBTCxDQUFjO0FBQ1ZDLFFBQUFBLGNBQWMsRUFBRTtBQUNaQyxVQUFBQSxLQUFLLEVBQUUsSUFESztBQUVaQyxVQUFBQSxTQUFTLEVBQUUsSUFGQztBQUdaQyxVQUFBQSxLQUFLLEVBQUU7QUFISztBQURO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aW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7XHJcbmltcG9ydCBFeHBhbmREcm9wZG93biBmcm9tIFwiLi4vRXhwYW5kRHJvcGRvd24vRXhwYW5kRHJvcGRvd25cIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi8uLi9Ecm9wZG93bi9Ecm9wZG93blwiXHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEZpbHRlckRyb3Bkb3duIGZyb20gXCIuLi9GaWx0ZXJEcm9wZG93bi9GaWx0ZXJEcm9wZG93blwiO1xyXG5pbXBvcnQgeyBpbnB1dFZhbHVlIH0gZnJvbSBcIi4vX2lucHV0VmFsdWVcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IHsgY2xvbmUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHNcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJDb25kaXRpb25JdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRhYmxlRmllbGRzOiB7fSxcclxuICAgICAgICAgICAgYWN0aXZlRmllbGQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGRyb3Bkb3duc0lzQWN0aXZlOiB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiB0aGlzLnByb3BzLmNvbmRpdGlvbk9iai5jb25kaXRpb25PcHRpb25zLmZpZWxkSXRlbXMsXHJcbiAgICAgICAgICAgIGRyb3Bkb3duRmllbGRzOiBbXSxcclxuICAgICAgICAgICAgb3BlcmF0b3JzOiBbXSxcclxuICAgICAgICAgICAgdGV4dEFyZWFWYWx1ZTogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBmZXRjaFRhYmxlRGF0YSA9IGFzeW5jICh0YWJsZSkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vYXBpL25vdy91aS9tZXRhLyR7dGFibGV9YDsgLy9kZXY3ODQ5MC5zZXJ2aWNlLW5vdy5jb20vXHJcbiAgICAvLyAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7XHJcbiAgICAvLyAgICAgICAgIHN5c3Bhcm1fb3BlcmF0b3JzOiB0cnVlLFxyXG4gICAgLy8gICAgICAgICBzeXNwYXJtX2dldF9leHRlbmRlZF90YWJsZXM6IHRydWUsXHJcbiAgICAvLyAgICAgICAgIHN5c3Bhcm1fa2V5d29yZHM6IHRydWVcclxuICAgIC8vICAgICB9O1xyXG4gICAgLy8gICAgIGNvbnN0IHF1ZXJ5ID0gcHJlcGFyZVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKTtcclxuICAgIC8vICAgICBjb25zdCB1cmwgPSBgJHtlbmRwb2ludH0/JHtxdWVyeX1gXHJcbiAgICAvLyAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgLy8gICAgICAgICBtZXRob2Q6IFwiR0VUXCJcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIGF3YWl0IGZldGNoUmVxdWVzdCh7dXJsLCBwYXJhbXN9KVxyXG4gICAgLy8gfVxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShwcmV2UHJvcHMpICE9PSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzKSlcclxuICAgICAgICAgICAgdGhpcy5mZXRjaFRhYmxlRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZXJhdG9yc0FjdGl2YXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb25kaXRpb25PYmo6IHsgY29uZGl0aW9uT3B0aW9ucyB9IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgYWN0aXZlRmllbGQ6IHsgY29sdW1uX3R5cGUgfSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKGNvbHVtbl90eXBlID09PSBcInRhZ1wiKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkcm9wZG93bkZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChjb25kaXRpb25PcHRpb25zLm9wZXJhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVJbnB1dEFjdGl2YXRpb24oKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0ZXh0QXJlYVZhbHVlU2V0ID0gKHt2YWx1ZX0pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNvbmRpdGlvbklELCBnbG9iYWxDb25kaXRpb25JRCwgc2V0Q29uZGl0aW9uT3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0ZXh0QXJlYVZhbHVlOiB2YWx1ZX0pXHJcbiAgICAgICAgc2V0Q29uZGl0aW9uT3B0aW9ucyh7IHZhbHVlOiB0aGlzLnN0YXRlLnRleHRBcmVhVmFsdWUsIGN1cnJlbnRDb25kaXRpb25JRDogY29uZGl0aW9uSUQsIGdsb2JhbENvbmRpdGlvbklELCBjb25kaXRpb25PcHRpb246IFwidmFsdWVcIn0pXHJcbiAgICB9XHJcblxyXG4gICAgaXRlbUNsaWNrZWQgPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgYWN0aXZlRmllbGQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgeyBjb25kaXRpb25JRCwgZ2xvYmFsQ29uZGl0aW9uSUQsIHNldENvbmRpdGlvbk9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKGl0ZW0uZHJvcGRvd24gPT09IFwib3BlcmF0aW9uXCIpIHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZU9wZXJhdG9yID0gYWN0aXZlRmllbGQub3BlcmF0b3JzLmZpbmQoKHsgb3BlcmF0b3IgfSkgPT4gb3BlcmF0b3IgPT09IGl0ZW0uaWQpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnZhbHVlSW5wdXRBY3RpdmF0aW9uKClcclxuICAgICAgICAgICAgc2V0Q29uZGl0aW9uT3B0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogeyBvcGVyYXRvcjogaXRlbS5pZCwgZWRpdG9yOiBhY3RpdmVPcGVyYXRvci5hZHZhbmNlZEVkaXRvciB9LFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9uOiBcIm9wZXJhdG9yXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0uZHJvcGRvd24gPT09IFwidmFsdWVcIikge1xyXG4gICAgICAgICAgICBjb25zdCB7IGNvbmRpdGlvbk9iajogeyBjb25kaXRpb25PcHRpb25zIH0gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUZvckNvbnRhaW5lcjtcclxuICAgICAgICAgICAgc3dpdGNoIChjb25kaXRpb25PcHRpb25zLm9wZXJhdG9yLmVkaXRvcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJlbGF0aXZlX2ZpZWxkXCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ2xpZGVfZGF0ZV9lcXVpdmFsZW50XCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlRm9yQ29udGFpbmVyID0geyB2YWx1ZTogaXRlbS5pZCwgaW5kZXg6IGl0ZW0uaW5kZXggfTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmVuZF9maWVsZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmluZGV4ID09IDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRm9yQ29udGFpbmVyID0geyB2YWx1ZTogeyBpZDogaXRlbS5pZCwgbGFiZWw6IGl0ZW0ubGFiZWwgfSwgaW5kZXg6IGl0ZW0uaW5kZXggfTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRm9yQ29udGFpbmVyID0geyB2YWx1ZTogaXRlbS5pZCwgaW5kZXg6IGl0ZW0uaW5kZXggfTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVGb3JDb250YWluZXIgPSBpdGVtLmlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldENvbmRpdGlvbk9wdGlvbnMoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlRm9yQ29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9uOiBcInZhbHVlXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EYXRlUGlja2VyQ2hhbmdlID0gKHt2YWx1ZSwgdHlwZSwgY29uZGl0aW9uT3B0aW9ucywgaW5kZXh9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZXRDb25kaXRpb25PcHRpb25zIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgbmV3VmFsdWUgfSA9IHZhbHVlO1xyXG4gICAgICAgIGxldCB2YWx1ZUZvckNvbnRhaW5lcjtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYmV0d2Vlbl9maWVsZCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3JlbGF0aXZlLWZpZWxkJzpcclxuICAgICAgICAgICAgY2FzZSAnZ2xpZGVfZHVyYXRpb24nOlxyXG4gICAgICAgICAgICBjYXNlICdnbGlkZV9kYXRlX2NvbXBhcmF0aXZlJzpcclxuICAgICAgICAgICAgICAgIHZhbHVlRm9yQ29udGFpbmVyID0ge3ZhbHVlOiBuZXdWYWx1ZSwgaW5kZXh9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB2YWx1ZUZvckNvbnRhaW5lciA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q29uZGl0aW9uT3B0aW9ucyh7dmFsdWU6IHZhbHVlRm9yQ29udGFpbmVyLCBjb25kaXRpb25PcHRpb25zLCBjb25kaXRpb25PcHRpb246IFwidmFsdWVcIn0pXHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVJbnB1dEFjdGl2YXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duc0lzQWN0aXZlOiB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoVGFibGVEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtjb25kaXRpb25PYmp9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IGFjdGl2ZUZpZWxkc0RhdGEsIGFjdGl2ZUZpZWxkIH0gPSBjb25kaXRpb25PYmouY29uZGl0aW9uT3B0aW9ucztcclxuICAgICAgICBpZiAoYWN0aXZlRmllbGRzRGF0YSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGFjdGl2ZUZpZWxkRnJvbU9iaiA9IGFjdGl2ZUZpZWxkc0RhdGFbYWN0aXZlRmllbGRdIHx8IFtcIlwiXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdGFibGVGaWVsZHM6IGFjdGl2ZUZpZWxkc0RhdGEsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVGaWVsZDogYWN0aXZlRmllbGRGcm9tT2JqXHJcbiAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZXJhdG9yc0FjdGl2YXRpb24oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5mZXRjaFRhYmxlRGF0YSgpXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRTZWxlY3RlZEl0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRJdGVtOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiB0aGlzLnByb3BzLmNvbmRpdGlvbk9iai5zZWxlY3RlZEl0ZW0uaXRlbXNcclxuICAgICAgICB9fSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTZWxlY3RlZEl0ZW0gPSAoe2l0ZW0sIGNvbW1hbmQsIGxpc3RJbmRleH0pID0+IHtcclxuICAgICAgICBjb25zdCB7IHNldENvbmRpdGlvbk9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSA/IGNsb25lKHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLml0ZW1zKSA6IFtdO1xyXG4gICAgICAgIGlmIChjb21tYW5kID09PSBcInB1c2hcIikge1xyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEl0ZW06IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW1zLm1hcChpdGVtID0+IGl0ZW0ubGFiZWwpLmpvaW4oXCIgLiBcIiksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5pZCkuam9pbihcIi5cIilcclxuICAgICAgICAgICAgfX0sICgpID0+IHNldENvbmRpdGlvbk9wdGlvbnMoe3ZhbHVlOiB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSwgY29uZGl0aW9uT3B0aW9uOiBcImZpZWxkXCJ9KSk7fVxyXG4gICAgICAgIGVsc2UgaWYgKGNvbW1hbmQgPT09IFwicmV3cml0ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkSXRlbToge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtpdGVtXSxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uaWRcclxuICAgICAgICAgICAgfX0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZCA9PT0gXCJzYW1lX2xpc3RfaW5kZXhcIikge1xyXG4gICAgICAgICAgICBpdGVtcy5zcGxpY2UobGlzdEluZGV4LCBpdGVtcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkSXRlbToge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5sYWJlbCkuam9pbihcIiAuIFwiKSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmlkKS5qb2luKFwiLlwiKVxyXG4gICAgICAgICAgICB9fSwgKCkgPT4gc2V0Q29uZGl0aW9uT3B0aW9ucyh7dmFsdWU6IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLCBjb25kaXRpb25PcHRpb246IFwiZmllbGRcIn0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRWYWx1ZVNldCA9ICh7dmFsdWUsIHR5cGUsIGluZGV4fSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc2V0Q29uZGl0aW9uT3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgdmFsdWVGb3JDb250YWluZXI7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JldHdlZW5fZmllbGQnOlxyXG4gICAgICAgICAgICBjYXNlICdyZWxhdGl2ZS1maWVsZCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2dsaWRlX2R1cmF0aW9uJzpcclxuICAgICAgICAgICAgY2FzZSAnZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZSc6XHJcbiAgICAgICAgICAgICAgICB2YWx1ZUZvckNvbnRhaW5lciA9IHsgdmFsdWUsIGluZGV4IH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHZhbHVlRm9yQ29udGFpbmVyID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDb25kaXRpb25PcHRpb25zKHt2YWx1ZTogdmFsdWVGb3JDb250YWluZXIsIGNvbmRpdGlvbk9wdGlvbjogXCJ2YWx1ZVwifSlcclxuICAgIH1cclxuXHJcbiAgICBpdGVtRHJvcGRvd25IYW5kbGUgPSAoe3ZhbHVlLCB0eXBlLCBpbmRleH0pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNvbmRpdGlvbk9iajogeyBjb25kaXRpb25PcHRpb25zIH0gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHZhbHVlRm9yQ29udGFpbmVyO1xyXG4gICAgICAgIHN3aXRjaCAoY29uZGl0aW9uT3B0aW9ucy5vcGVyYXRvci5lZGl0b3IpIHtcclxuICAgICAgICAgICAgY2FzZSAncmVsYXRpdmVfZmllbGQnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ2xpZGVfZGF0ZV9lcXVpdmFsZW50JzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2dsaWRlX2RhdGVfY29tcGFyYXRpdmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlRm9yQ29udGFpbmVyID0geyB2YWx1ZTogaXRlbS5pZCwgaW5kZXg6IGl0ZW0uaW5kZXggfTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RyZW5kX2ZpZWxkJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRm9yQ29udGFpbmVyID0geyB2YWx1ZTogeyBpZDogaXRlbS5pZCwgbGFiZWw6IGl0ZW0ubGFiZWwgfSwgaW5kZXg6IGl0ZW0uaW5kZXggfTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUZvckNvbnRhaW5lciA9IHsgdmFsdWU6IGl0ZW0uaWQsIGluZGV4OiBpdGVtLmluZGV4IH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUZvckNvbnRhaW5lciA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIG9wZXJhdG9yVHlwZSxcclxuICAgICAgICAgICAgY29uZGl0aW9uT2JqLFxyXG4gICAgICAgICAgICB0YWJsZUZpZWxkcyxcclxuICAgICAgICAgICAgcmVmZXJlbmNlVGFibGVGaWVsZHNEYXRhLFxyXG4gICAgICAgICAgICBsYWJlbEFycixcclxuICAgICAgICAgICAgb3BlcmF0b3JBcnIsXHJcbiAgICAgICAgICAgIGdldENvbmRpdGlvbnNJRHMsXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbklELFxyXG4gICAgICAgICAgICBnbG9iYWxDb25kaXRpb25JRCxcclxuICAgICAgICAgICAgZ2V0Q2xpY2tlZExpc3RJbmRleFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICAvLyBjb25kaXRpb25PYmouY29uZGl0aW9uT3B0aW9ucy5vcGVyYXRvcnNBcnJheSA9IG9wZXJhdG9yQXJyLm1hcChvcGVyYXRvciA9PiAoey4uLm9wZXJhdG9yLCBpZDogdXVpZHY0KCkuc3BsaXQoXCItXCIpLmpvaW4oXCJcIil9KSk7XHJcbiAgICAgICAgY29uc3QgeyBjb2x1bW5zIH0gPSB0YWJsZUZpZWxkcztcclxuICAgICAgICBjb25zdCBjb2x1bW5zQXJyID0gT2JqZWN0LnZhbHVlcyhjb2x1bW5zKS5zb3J0KChhLCBiKSA9PiBhLmxhYmVsIDwgYi5sYWJlbCA/IC0xIDogMCkubWFwKGNvbHVtbiA9PiAoey4uLmNvbHVtbiwgaWQ6IGNvbHVtbi5uYW1lLCByZWZlcmVuY2U6IGNvbHVtbi5yZWZlcmVuY2UgfHwgXCJcIn0pKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmRpdGlvbi13cmFwcGVyXCIgb25DbGljaz17KCkgPT4gZ2V0Q29uZGl0aW9uc0lEcyh7Y3VycmVudENvbmRpdGlvbklEOiBjb25kaXRpb25JRCwgZ2xvYmFsQ29uZGl0aW9uSUR9KX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcblx0XHRcdFx0XHRvcGVyYXRvclR5cGUgPT09ICdeT1InID8gPHNwYW4gY2xhc3NOYW1lPVwiY29uZGl0aW9uLW9wZXJhdG9yXCI+T1I8L3NwYW4+IDogJydcclxuXHRcdFx0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxFeHBhbmREcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRJY29uPVwiYXJyb3ctcmlnaHQtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXt0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17Y29uZGl0aW9uT2JqLmNvbmRpdGlvbk9wdGlvbnMuYWN0aXZlRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGVkSXRlbT17dGhpcy51cGRhdGVTZWxlY3RlZEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkPXsoaXRlbSkgPT4gdGhpcy5wcm9wcy5vbkl0ZW1DbGlja2VkKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCItLWNob29zZSBmaWVsZC0tXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RzPXtjb25kaXRpb25PYmouY29uZGl0aW9uT3B0aW9ucy5maWVsZHNEcm9wZG93bkRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9eyEhY29uZGl0aW9uT2JqLmNvbmRpdGlvbk9wdGlvbnMub3BlcmF0b3JzQXJyYXkgPyBjb25kaXRpb25PYmouY29uZGl0aW9uT3B0aW9ucy5vcGVyYXRvcnNBcnJheSA6IFtdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtjb25kaXRpb25PYmouY29uZGl0aW9uT3B0aW9ucy5vcGVyYXRvci5vcGVyYXRvciA/IFtjb25kaXRpb25PYmouY29uZGl0aW9uT3B0aW9ucy5vcGVyYXRvci5vcGVyYXRvcl0gOiBbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQ9eyhpdGVtKSA9PiB0aGlzLml0ZW1DbGlja2VkKGl0ZW0uY2xpY2tlZEl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q9XCJzaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g9XCJjb250YWluc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIi0tY2hvb3NlIG9wZXJhdG9yLS1cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjb25kaXRpb25PYmouY29uZGl0aW9uT3B0aW9ucy5vcGVyYXRvcnNBcnJheX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSh0aGlzLnN0YXRlLCBjb25kaXRpb25PYmouY29uZGl0aW9uT3B0aW9ucywgdGhpcy5pdGVtQ2xpY2tlZCwgdGhpcy5vbkRhdGVQaWNrZXJDaGFuZ2UsIHRoaXMuaW5wdXRWYWx1ZVNldCwgdGhpcy50ZXh0QXJlYVZhbHVlU2V0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge29wZXJhdG9yVHlwZSAhPT0gXCJeT1JcIiAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiYW5kXCIgc2l6ZT1cIm1kXCIgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWRkTmV3T3BlcmF0b3Ioe3ZhbHVlOiBcIl5cIiwgY3VycmVudENvbmRpdGlvbklEOiB0aGlzLnByb3BzLmNvbmRpdGlvbklELCBnbG9iYWxDb25kaXRpb25JRDogdGhpcy5wcm9wcy5nbG9iYWxDb25kaXRpb25JRH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJvclwiIHNpemU9XCJtZFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWRkTmV3T3BlcmF0b3Ioe3ZhbHVlOiBcIl5PUlwiLCBjdXJyZW50Q29uZGl0aW9uSUQ6IHRoaXMucHJvcHMuY29uZGl0aW9uSUQsIGdsb2JhbENvbmRpdGlvbklEOiB0aGlzLnByb3BzLmdsb2JhbENvbmRpdGlvbklEfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cIngtY2lyY2xlXCIgc2l6ZT1cIm1kXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZUNvbmRpdGlvbih7Y3VycmVudENvbmRpdGlvbklEOiB0aGlzLnByb3BzLmNvbmRpdGlvbklELCBnbG9iYWxDb25kaXRpb25JRDogdGhpcy5wcm9wcy5nbG9iYWxDb25kaXRpb25JRH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfX0gIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5GaWx0ZXJDb25kaXRpb25JdGVtLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHRhYmxlRmllbGRzOiB7fSxcclxuICAgIGNvbmRpdGlvbk9iajoge30sXHJcbiAgICBjb25kaXRpb25JRDogXCJcIixcclxuICAgIGdsb2JhbENvbmRpdGlvbklEOiBcIlwiLFxyXG4gICAgb3BlcmF0b3JUeXBlOiBcIlwiXHJcbn1cclxuXHJcbkZpbHRlckNvbmRpdGlvbkl0ZW0ucHJvcFR5cGVzID0ge1xyXG4gICAgdGFibGVGaWVsZHM6IHByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjb25kaXRpb25PYmo6IHByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjb25kaXRpb25JRDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGdsb2JhbENvbmRpdGlvbklEOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb3BlcmF0b3JUeXBlOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYWRkTmV3T3BlcmF0b3I6IHByb3BUeXBlcy5mdW5jXHJcbn1cclxuIl19