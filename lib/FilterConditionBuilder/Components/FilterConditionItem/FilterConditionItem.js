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
      var _this$props = _this.props,
          conditionOptions = _this$props.conditionObj.conditionOptions,
          conditionsArray = _this$props.conditionsArray;
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

    _this.lookupFieldValueSet = function (_ref3) {
      var name = _ref3.name,
          sys_id = _ref3.sys_id,
          displayVal = _ref3.displayVal;
      var setConditionOptions = _this.props.setConditionOptions;

      _this.setState({
        refFieldValue: {
          name: name,
          sys_id: sys_id,
          displayVal: displayVal
        }
      });

      setConditionOptions({
        value: sys_id,
        conditionOption: "value"
      });
    };

    _this.itemClicked = function (item) {
      var activeField = _this.state.activeField;
      var setConditionOptions = _this.props.setConditionOptions;

      if (item.dropdown === "operation") {
        var activeOperator = activeField.operators.find(function (_ref4) {
          var operator = _ref4.operator;
          return operator === item.id;
        });

        _this.valueInputDeactivation();

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

    _this.onDatePickerChange = function (_ref5) {
      var value = _ref5.value,
          type = _ref5.type,
          conditionOptions = _ref5.conditionOptions,
          index = _ref5.index;
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
      }, function () {
        return _this.valueInputActivation();
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
      var _this$props2 = _this.props,
          setConditionOptions = _this$props2.setConditionOptions,
          conditionID = _this$props2.conditionID,
          globalConditionID = _this$props2.globalConditionID;
      var _this$state = _this.state,
          selectedItem = _this$state.selectedItem,
          refFieldValue = _this$state.refFieldValue;
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

      _this.setState({
        refFieldValue: _objectSpread(_objectSpread({}, refFieldValue), {}, {
          displayVal: null
        })
      });
    };

    _this.updateSelectedItem = function (_ref6) {
      var item = _ref6.item,
          command = _ref6.command,
          listIndex = _ref6.listIndex;
      var items = _this.state.selectedItem.items;
      var newState;

      switch (command) {
        case "push":
          items.push(item);
          newState = {
            selectedItem: {
              items: items
            }
          };
          break;

        case "rewrite":
          newState = {
            selectedItem: {
              items: [item]
            }
          };
          break;

        case "same_list_index":
          items.splice(listIndex, items.length);
          items.push(item);
          newState = {
            selectedItem: {
              items: items
            }
          };
          break;
      }

      _this.setState(newState);
    };

    _this.inputValueSet = function (_ref7) {
      var value = _ref7.value,
          type = _ref7.type,
          index = _ref7.index;
      var setConditionOptions = _this.props.setConditionOptions;
      var inputValue = value;
      var valueForContainer;

      switch (type) {
        case 'between_field':
        case 'relative-field':
        case 'glide_duration':
        case 'glide_date_comparative':
          valueForContainer = {
            inputValue: inputValue,
            index: index
          };
          break;

        default:
          valueForContainer = inputValue;
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
      textAreaValue: "",
      generalTable: _this.props.generalTable,
      refFieldValue: {
        name: _this.props.conditionObj.conditionOptions.operator.editor === "reference" ? _this.props.conditionObj.conditionOptions.activeField : null,
        sys_id: _this.props.conditionObj.conditionOptions.operator.editor === "reference" ? _this.props.conditionObj.conditionOptions.value : null,
        displayVal: null,
        table: _this.props.conditionObj.conditionOptions.operator.editor === "reference" ? _this.props.conditionObj.conditionOptions.fieldItems.items[_this.props.conditionObj.conditionOptions.fieldItems.items.length - 1].table : null
      },
      conditionsArray: _this.props.conditionsArray,
      conditionObj: _this.props.conditionsArray
    };
    return _this;
  }

  _createClass(FilterConditionItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.fetchTableData();
      var refFieldValue = this.state.refFieldValue;
      var queryParams = {
        sysparm_query: "sys_id=".concat(refFieldValue.sys_id)
      };

      if (!!refFieldValue.name && !!refFieldValue.sys_id) {
        _utils.REQUEST_UTILS.fetchReferenceData({
          table: refFieldValue.table,
          queryParams: queryParams
        }).then(function (res) {
          _this2.setState({
            refFieldValue: _objectSpread(_objectSpread({}, refFieldValue), {}, {
              displayVal: res[0].name
            })
          });
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) this.fetchTableData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          operatorType = _this$props3.operatorType,
          conditionObj = _this$props3.conditionObj,
          getConditionsIDs = _this$props3.getConditionsIDs,
          conditionID = _this$props3.conditionID,
          globalConditionID = _this$props3.globalConditionID,
          clickBtn = _this$props3.clickBtn,
          conditionsArray = _this$props3.conditionsArray;
      var inputValuePayload = {
        state: this.state,
        conditionOptions: conditionObj.conditionOptions,
        itemClicked: this.itemClicked,
        onDatePickerChange: this.onDatePickerChange,
        inputValueSet: this.inputValueSet,
        textAreaValueSet: this.textAreaValueSet,
        lookupFieldValueSet: this.lookupFieldValueSet
      };
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
              return _this3.onItemClicked(item);
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
              return _this3.itemClicked(item.clickedItem);
            },
            select: "single",
            search: "contains",
            placeholder: "--choose operator--",
            variant: "tertiary",
            size: "md",
            disabled: !dropdownsIsActive.operation,
            manageSelectedItems: true
          })
        }), dropdownsIsActive.value && (0, _inputValue.inputValue)({
          inputValuePayload: inputValuePayload
        }), operatorType !== "^OR" && isBtnsRender && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "btn-container",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
              label: "and",
              size: "md",
              onClick: function onClick() {
                clickBtn({
                  action: "addNewOperator",
                  payload: {
                    value: "^",
                    currentConditionID: conditionID,
                    globalConditionID: globalConditionID
                  }
                });
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "btn-container",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
              label: "or",
              size: "md",
              onClick: function onClick() {
                clickBtn({
                  action: "addNewOperator",
                  payload: {
                    value: "^OR",
                    currentConditionID: conditionID,
                    globalConditionID: globalConditionID
                  }
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
              clickBtn({
                action: "deleteCondition",
                payload: {
                  conditionsArray: conditionsArray,
                  globalConditionID: globalConditionID,
                  currentConditionID: conditionID
                }
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
  conditionObj: {},
  conditionID: "",
  globalConditionID: "",
  operatorType: ""
};
FilterConditionItem.propTypes = {
  conditionObj: _propTypes["default"].object,
  conditionID: _propTypes["default"].string,
  globalConditionID: _propTypes["default"].string,
  operatorType: _propTypes["default"].string
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRmlsdGVyQ29uZGl0aW9uSXRlbS9GaWx0ZXJDb25kaXRpb25JdGVtLmpzIl0sIm5hbWVzIjpbIkZpbHRlckNvbmRpdGlvbkl0ZW0iLCJwcm9wcyIsIm9wZXJhdG9yc0FjdGl2YXRpb24iLCJjb25kaXRpb25PcHRpb25zIiwiY29uZGl0aW9uT2JqIiwiY29uZGl0aW9uc0FycmF5IiwiY29sdW1uX3R5cGUiLCJzdGF0ZSIsImFjdGl2ZUZpZWxkIiwic2V0U3RhdGUiLCJkcm9wZG93bkZpZWxkcyIsImZpZWxkIiwib3BlcmF0aW9uIiwidmFsdWUiLCJvcGVyYXRvciIsInZhbHVlSW5wdXRBY3RpdmF0aW9uIiwicHJlcGFyZVRleHRBcmVhVmFsdWUiLCJzZXRDb25kaXRpb25PcHRpb25zIiwic3RyaW5nIiwidHJpbSIsInNwbGl0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJtYXRjaCIsImNvbmRpdGlvbk9wdGlvbiIsInRleHRBcmVhVmFsdWVTZXQiLCJ0ZXh0QXJlYVZhbHVlIiwibG9va3VwRmllbGRWYWx1ZVNldCIsIm5hbWUiLCJzeXNfaWQiLCJkaXNwbGF5VmFsIiwicmVmRmllbGRWYWx1ZSIsIml0ZW1DbGlja2VkIiwiaXRlbSIsImRyb3Bkb3duIiwiYWN0aXZlT3BlcmF0b3IiLCJvcGVyYXRvcnMiLCJmaW5kIiwiaWQiLCJ2YWx1ZUlucHV0RGVhY3RpdmF0aW9uIiwiZWRpdG9yIiwiYWR2YW5jZWRFZGl0b3IiLCJ2YWx1ZUZvckNvbnRhaW5lciIsImluZGV4IiwibGFiZWwiLCJvbkRhdGVQaWNrZXJDaGFuZ2UiLCJ0eXBlIiwibmV3VmFsdWUiLCJkcm9wZG93bnNJc0FjdGl2ZSIsImZldGNoVGFibGVEYXRhIiwiYWN0aXZlRmllbGRzRGF0YSIsImFjdGl2ZUZpZWxkRnJvbU9iaiIsInJlc2V0U2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWRJdGVtIiwiaXRlbXMiLCJvcGVyYXRvcnNEZWFjdGl2YXRpb24iLCJvbkl0ZW1DbGlja2VkIiwiY2xpY2tlZEl0ZW0iLCJjb25kaXRpb25JRCIsImdsb2JhbENvbmRpdGlvbklEIiwicXVlcnlQYXJhbXMiLCJzeXNwYXJtX29wZXJhdG9ycyIsInN5c3Bhcm1fZ2V0X2V4dGVuZGVkX3RhYmxlcyIsInN5c3Bhcm1fa2V5d29yZHMiLCJpdGVtc0FyciIsInB1c2giLCJjb25kaXRpb25JZCIsImxpc3RJbmRleCIsInNlbGVjdGVkSXRlbXMiLCJtYXAiLCJmaXJzdE9wZXJhdG9yIiwiZHJvcGRvd25DbGlja2VkIiwiUkVRVUVTVF9VVElMUyIsInRhYmxlIiwidGhlbiIsInJlcyIsInJlc3VsdCIsImNvbHVtbnMiLCJjdXJyZW50Q29uZGl0aW9uSUQiLCJub29wIiwidXBkYXRlU2VsZWN0ZWRJdGVtIiwiY29tbWFuZCIsIm5ld1N0YXRlIiwic3BsaWNlIiwibGVuZ3RoIiwiaW5wdXRWYWx1ZVNldCIsImlucHV0VmFsdWUiLCJpdGVtRHJvcGRvd25IYW5kbGUiLCJnZW5lcmFsVGFibGUiLCJmaWVsZEl0ZW1zIiwic3lzcGFybV9xdWVyeSIsImZldGNoUmVmZXJlbmNlRGF0YSIsInByZXZQcm9wcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcGVyYXRvclR5cGUiLCJnZXRDb25kaXRpb25zSURzIiwiY2xpY2tCdG4iLCJpbnB1dFZhbHVlUGF5bG9hZCIsImlzQnRuc1JlbmRlciIsImZpZWxkc0Ryb3Bkb3duRGF0YSIsIm9wZXJhdG9yc0FycmF5IiwiYWN0aW9uIiwicGF5bG9hZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxtQjs7Ozs7QUFDakIsK0JBQVlDLEtBQVosRUFBbUI7QUFB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QyxnQkFBQUEsT0FBTyxFQUFFO0FBQUVuRyxrQkFBQUEsZUFBZSxFQUFmQSxlQUFGO0FBQW1CdUQsa0JBQUFBLGlCQUFpQixFQUFqQkEsaUJBQW5CO0FBQXNDbUIsa0JBQUFBLGtCQUFrQixFQUFFcEI7QUFBMUQ7QUFBckMsZUFBRCxDQUFSO0FBQ0g7QUFGRDtBQURKLFVBNUNKO0FBQUEsUUFESjtBQW9ESDs7OztFQXpXNEM4QyxLQUFLLENBQUNDLFM7OztBQTRXdkQxRyxtQkFBbUIsQ0FBQzJHLFlBQXBCLEdBQW1DO0FBQy9CdkcsRUFBQUEsWUFBWSxFQUFFLEVBRGlCO0FBRS9CdUQsRUFBQUEsV0FBVyxFQUFFLEVBRmtCO0FBRy9CQyxFQUFBQSxpQkFBaUIsRUFBRSxFQUhZO0FBSS9Cb0MsRUFBQUEsWUFBWSxFQUFFO0FBSmlCLENBQW5DO0FBT0FoRyxtQkFBbUIsQ0FBQzRHLFNBQXBCLEdBQWdDO0FBQzVCeEcsRUFBQUEsWUFBWSxFQUFFd0csc0JBQVVDLE1BREk7QUFFNUJsRCxFQUFBQSxXQUFXLEVBQUVpRCxzQkFBVTFGLE1BRks7QUFHNUIwQyxFQUFBQSxpQkFBaUIsRUFBRWdELHNCQUFVMUYsTUFIRDtBQUk1QjhFLEVBQUFBLFlBQVksRUFBRVksc0JBQVUxRjtBQUpJLENBQWhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBFeHBhbmREcm9wZG93biBmcm9tIFwiLi4vRXhwYW5kRHJvcGRvd24vRXhwYW5kRHJvcGRvd25cIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi8uLi9Ecm9wZG93bi9Ecm9wZG93blwiXHJcbmltcG9ydCB7IFJFUVVFU1RfVVRJTFMgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgaW5wdXRWYWx1ZSB9IGZyb20gXCIuL19pbnB1dFZhbHVlXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBub29wIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyQ29uZGl0aW9uSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhY3RpdmVGaWVsZDogXCJcIixcclxuICAgICAgICAgICAgZHJvcGRvd25zSXNBY3RpdmU6IHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW06IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkcm9wZG93bkZpZWxkczogW10sXHJcbiAgICAgICAgICAgIG9wZXJhdG9yczogW10sXHJcbiAgICAgICAgICAgIHRleHRBcmVhVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGdlbmVyYWxUYWJsZTogdGhpcy5wcm9wcy5nZW5lcmFsVGFibGUsXHJcbiAgICAgICAgICAgIHJlZkZpZWxkVmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvcHMuY29uZGl0aW9uT2JqLmNvbmRpdGlvbk9wdGlvbnMub3BlcmF0b3IuZWRpdG9yID09PSBcInJlZmVyZW5jZVwiID8gdGhpcy5wcm9wcy5jb25kaXRpb25PYmouY29uZGl0aW9uT3B0aW9ucy5hY3RpdmVGaWVsZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzeXNfaWQ6IHRoaXMucHJvcHMuY29uZGl0aW9uT2JqLmNvbmRpdGlvbk9wdGlvbnMub3BlcmF0b3IuZWRpdG9yID09PSBcInJlZmVyZW5jZVwiID8gdGhpcy5wcm9wcy5jb25kaXRpb25PYmouY29uZGl0aW9uT3B0aW9ucy52YWx1ZSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5VmFsOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdGFibGU6IHRoaXMucHJvcHMuY29uZGl0aW9uT2JqLmNvbmRpdGlvbk9wdGlvbnMub3BlcmF0b3IuZWRpdG9yID09PSBcInJlZmVyZW5jZVwiID8gdGhpcy5wcm9wcy5jb25kaXRpb25PYmouY29uZGl0aW9uT3B0aW9ucy5maWVsZEl0ZW1zLml0ZW1zW3RoaXMucHJvcHMuY29uZGl0aW9uT2JqLmNvbmRpdGlvbk9wdGlvbnMuZmllbGRJdGVtcy5pdGVtcy5sZW5ndGggLSAxXS50YWJsZSA6IG51bGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uZGl0aW9uc0FycmF5OiB0aGlzLnByb3BzLmNvbmRpdGlvbnNBcnJheSxcclxuICAgICAgICAgICAgY29uZGl0aW9uT2JqOnRoaXMucHJvcHMuY29uZGl0aW9uc0FycmF5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuZmV0Y2hUYWJsZURhdGEoKVxyXG5cclxuICAgICAgICBjb25zdCB7IHJlZkZpZWxkVmFsdWUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBzeXNwYXJtX3F1ZXJ5OiBgc3lzX2lkPSR7cmVmRmllbGRWYWx1ZS5zeXNfaWR9YFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEhcmVmRmllbGRWYWx1ZS5uYW1lICYmICEhcmVmRmllbGRWYWx1ZS5zeXNfaWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBSRVFVRVNUX1VUSUxTLmZldGNoUmVmZXJlbmNlRGF0YSh7dGFibGU6IHJlZkZpZWxkVmFsdWUudGFibGUsIHF1ZXJ5UGFyYW1zfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWZGaWVsZFZhbHVlOiB7Li4ucmVmRmllbGRWYWx1ZSwgZGlzcGxheVZhbDogcmVzWzBdLm5hbWV9fSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocHJldlByb3BzKSAhPT0gSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcykpXHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hUYWJsZURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVyYXRvcnNBY3RpdmF0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZGl0aW9uT2JqOiB7IGNvbmRpdGlvbk9wdGlvbnMgfSwgY29uZGl0aW9uc0FycmF5IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgYWN0aXZlRmllbGQ6IHsgY29sdW1uX3R5cGUgfSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKGNvbHVtbl90eXBlID09PSBcInRhZ1wiKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkcm9wZG93bkZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChjb25kaXRpb25PcHRpb25zLm9wZXJhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVJbnB1dEFjdGl2YXRpb24oKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmVwYXJlVGV4dEFyZWFWYWx1ZSA9ICh7dmFsdWV9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZXRDb25kaXRpb25PcHRpb25zIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBzdHJpbmcgPSB2YWx1ZS50cmltKCkuc3BsaXQoXCIgXCIpLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKTtcclxuICAgICAgICBzdHJpbmcgPSAhIXN0cmluZy5tYXRjaChcIlxcblwiKSA/IHN0cmluZy5zcGxpdCgvXFxufFxccy8pLmZpbHRlcihCb29sZWFuKS5qb2luKFwiLFwiKSA6IHN0cmluZ1xyXG5cclxuICAgICAgICBzZXRDb25kaXRpb25PcHRpb25zKHt2YWx1ZTogc3RyaW5nLCBjb25kaXRpb25PcHRpb246IFwidmFsdWVcIn0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0ZXh0QXJlYVZhbHVlU2V0ID0gKHt2YWx1ZX0pID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGV4dEFyZWFWYWx1ZTogdmFsdWUgfSwgKCkgPT4gdGhpcy5wcmVwYXJlVGV4dEFyZWFWYWx1ZSh7IHZhbHVlOiB0aGlzLnN0YXRlLnRleHRBcmVhVmFsdWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvb2t1cEZpZWxkVmFsdWVTZXQgPSAoe25hbWUsIHN5c19pZCwgZGlzcGxheVZhbH0pID0+IHtcclxuICAgICAgICBjb25zdCB7IHNldENvbmRpdGlvbk9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZkZpZWxkVmFsdWU6IHtuYW1lLCBzeXNfaWQsIGRpc3BsYXlWYWx9fSlcclxuICAgICAgICBzZXRDb25kaXRpb25PcHRpb25zKHt2YWx1ZTogc3lzX2lkLCBjb25kaXRpb25PcHRpb246IFwidmFsdWVcIn0pO1xyXG4gICAgfVxyXG5cclxuICAgIGl0ZW1DbGlja2VkID0gKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCB7IGFjdGl2ZUZpZWxkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHsgc2V0Q29uZGl0aW9uT3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAoaXRlbS5kcm9wZG93biA9PT0gXCJvcGVyYXRpb25cIikge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlT3BlcmF0b3IgPSBhY3RpdmVGaWVsZC5vcGVyYXRvcnMuZmluZCgoeyBvcGVyYXRvciB9KSA9PiBvcGVyYXRvciA9PT0gaXRlbS5pZClcclxuICAgICAgICAgICAgdGhpcy52YWx1ZUlucHV0RGVhY3RpdmF0aW9uKClcclxuICAgICAgICAgICAgc2V0Q29uZGl0aW9uT3B0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogeyBvcGVyYXRvcjogaXRlbS5pZCwgZWRpdG9yOiBhY3RpdmVPcGVyYXRvci5hZHZhbmNlZEVkaXRvciB9LFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9uOiBcIm9wZXJhdG9yXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0uZHJvcGRvd24gPT09IFwidmFsdWVcIikge1xyXG4gICAgICAgICAgICBjb25zdCB7IGNvbmRpdGlvbk9iajogeyBjb25kaXRpb25PcHRpb25zIH0gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUZvckNvbnRhaW5lcjtcclxuICAgICAgICAgICAgc3dpdGNoIChjb25kaXRpb25PcHRpb25zLm9wZXJhdG9yLmVkaXRvcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJlbGF0aXZlX2ZpZWxkXCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ2xpZGVfZGF0ZV9lcXVpdmFsZW50XCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlRm9yQ29udGFpbmVyID0geyB2YWx1ZTogaXRlbS5pZCwgaW5kZXg6IGl0ZW0uaW5kZXggfTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmVuZF9maWVsZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmluZGV4ID09IDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRm9yQ29udGFpbmVyID0geyB2YWx1ZTogeyBpZDogaXRlbS5pZCwgbGFiZWw6IGl0ZW0ubGFiZWwgfSwgaW5kZXg6IGl0ZW0uaW5kZXggfTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRm9yQ29udGFpbmVyID0geyB2YWx1ZTogaXRlbS5pZCwgaW5kZXg6IGl0ZW0uaW5kZXggfTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVGb3JDb250YWluZXIgPSBpdGVtLmlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldENvbmRpdGlvbk9wdGlvbnMoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlRm9yQ29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9uOiBcInZhbHVlXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EYXRlUGlja2VyQ2hhbmdlID0gKHt2YWx1ZSwgdHlwZSwgY29uZGl0aW9uT3B0aW9ucywgaW5kZXh9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZXRDb25kaXRpb25PcHRpb25zIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgbmV3VmFsdWUgfSA9IHZhbHVlO1xyXG4gICAgICAgIGxldCB2YWx1ZUZvckNvbnRhaW5lcjtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYmV0d2Vlbl9maWVsZCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3JlbGF0aXZlLWZpZWxkJzpcclxuICAgICAgICAgICAgY2FzZSAnZ2xpZGVfZHVyYXRpb24nOlxyXG4gICAgICAgICAgICBjYXNlICdnbGlkZV9kYXRlX2NvbXBhcmF0aXZlJzpcclxuICAgICAgICAgICAgICAgIHZhbHVlRm9yQ29udGFpbmVyID0ge3ZhbHVlOiBuZXdWYWx1ZSwgaW5kZXh9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB2YWx1ZUZvckNvbnRhaW5lciA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q29uZGl0aW9uT3B0aW9ucyh7dmFsdWU6IHZhbHVlRm9yQ29udGFpbmVyLCBjb25kaXRpb25PcHRpb25zLCBjb25kaXRpb25PcHRpb246IFwidmFsdWVcIn0pXHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVJbnB1dEFjdGl2YXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duc0lzQWN0aXZlOiB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlSW5wdXREZWFjdGl2YXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duc0lzQWN0aXZlOiB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgKCkgPT4gdGhpcy52YWx1ZUlucHV0QWN0aXZhdGlvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoVGFibGVEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtjb25kaXRpb25PYmp9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IGFjdGl2ZUZpZWxkc0RhdGEsIGFjdGl2ZUZpZWxkIH0gPSBjb25kaXRpb25PYmouY29uZGl0aW9uT3B0aW9ucztcclxuICAgICAgICBpZiAoYWN0aXZlRmllbGRzRGF0YSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGFjdGl2ZUZpZWxkRnJvbU9iaiA9IGFjdGl2ZUZpZWxkc0RhdGFbYWN0aXZlRmllbGRdIHx8IFtcIlwiXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlRmllbGQ6IGFjdGl2ZUZpZWxkRnJvbU9ialxyXG4gICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVyYXRvcnNBY3RpdmF0aW9uKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldFNlbGVjdGVkSXRlbSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEl0ZW06IHtcclxuICAgICAgICAgICAgaXRlbXM6IHRoaXMucHJvcHMuY29uZGl0aW9uT2JqLnNlbGVjdGVkSXRlbS5pdGVtc1xyXG4gICAgICAgIH19KVxyXG4gICAgfVxyXG5cclxuICAgIG9wZXJhdG9yc0RlYWN0aXZhdGlvbiA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZHJvcGRvd25zSXNBY3RpdmU6IHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkl0ZW1DbGlja2VkID0gKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNsaWNrZWRJdGVtIH0gPSBpdGVtO1xyXG4gICAgICAgIGNvbnN0IHsgc2V0Q29uZGl0aW9uT3B0aW9ucywgY29uZGl0aW9uSUQsIGdsb2JhbENvbmRpdGlvbklEIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZEl0ZW0sIHJlZkZpZWxkVmFsdWUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHN5c3Bhcm1fb3BlcmF0b3JzOiB0cnVlLFxyXG4gICAgICAgICAgICBzeXNwYXJtX2dldF9leHRlbmRlZF90YWJsZXM6IHRydWUsXHJcbiAgICAgICAgICAgIHN5c3Bhcm1fa2V5d29yZHM6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBpdGVtcyA9IHt9O1xyXG4gICAgICAgIGxldCBpdGVtc0FyciA9IFtdO1xyXG4gICAgICAgIGl0ZW1zQXJyLnB1c2goY2xpY2tlZEl0ZW0pXHJcbiAgICAgICAgaXRlbXMgPSB7Y29uZGl0aW9uSWQ6IGNvbmRpdGlvbklELCBnbG9iYWxDb25kaXRpb25JRCwgbGlzdEluZGV4OiBjbGlja2VkSXRlbS5saXN0SW5kZXgsIHNlbGVjdGVkSXRlbXM6IHtpdGVtczogc2VsZWN0ZWRJdGVtLml0ZW1zLCBsYWJlbDogc2VsZWN0ZWRJdGVtLml0ZW1zLm1hcChpdGVtID0+IGl0ZW0ubGFiZWwpLmpvaW4oXCIgLiBcIiksIHZhbHVlOiBzZWxlY3RlZEl0ZW0uaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5pZCkuam9pbihcIi5cIil9LCBmaXJzdE9wZXJhdG9yOiBjbGlja2VkSXRlbS5maXJzdE9wZXJhdG9yfTtcclxuICAgICAgICAoY2xpY2tlZEl0ZW0uZHJvcGRvd25DbGlja2VkKSA/IChSRVFVRVNUX1VUSUxTLmZldGNoVGFibGVEYXRhKHt0YWJsZTogY2xpY2tlZEl0ZW0udGFibGUsIHF1ZXJ5UGFyYW1zfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlcmF0b3JzRGVhY3RpdmF0aW9uKClcclxuICAgICAgICAgICAgICAgIGl0ZW1zID0gey4uLml0ZW1zLCByZXN1bHQ6IHJlcy5jb2x1bW5zfTtcclxuICAgICAgICAgICAgICAgIHNldENvbmRpdGlvbk9wdGlvbnMoe3ZhbHVlOiBpdGVtcywgZ2xvYmFsQ29uZGl0aW9uSUQsIGN1cnJlbnRDb25kaXRpb25JRDogY29uZGl0aW9uSUQsIGNvbmRpdGlvbk9wdGlvbjogXCJmaWVsZHNEYXRhXCJ9KTtcclxuICAgICAgICAgICAgfSkpIDogbm9vcDtcclxuXHJcbiAgICAgICAgaWYgKCFjbGlja2VkSXRlbS5kcm9wZG93bkNsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVyYXRvcnNBY3RpdmF0aW9uKCk7XHJcbiAgICAgICAgICAgIHNldENvbmRpdGlvbk9wdGlvbnMoe3ZhbHVlOiBpdGVtcy5zZWxlY3RlZEl0ZW1zLCBnbG9iYWxDb25kaXRpb25JRCwgY3VycmVudENvbmRpdGlvbklEOiBjb25kaXRpb25JRCwgY29uZGl0aW9uT3B0aW9uOiBcImZpZWxkXCJ9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWZGaWVsZFZhbHVlOiB7XHJcbiAgICAgICAgICAgIC4uLnJlZkZpZWxkVmFsdWUsXHJcbiAgICAgICAgICAgIGRpc3BsYXlWYWw6IG51bGwsXHJcbiAgICAgICAgfX0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2VsZWN0ZWRJdGVtID0gKHtpdGVtLCBjb21tYW5kLCBsaXN0SW5kZXh9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZEl0ZW06IHsgaXRlbXMgfSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgbmV3U3RhdGU7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY29tbWFuZCkge1xyXG4gICAgICAgICAgICBjYXNlIFwicHVzaFwiOlxyXG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlID0geyBzZWxlY3RlZEl0ZW06IHsgaXRlbXMgfSB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZXdyaXRlXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZSA9IHsgc2VsZWN0ZWRJdGVtOiB7IGl0ZW1zOiBbaXRlbV0gfSB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzYW1lX2xpc3RfaW5kZXhcIjpcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShsaXN0SW5kZXgsIGl0ZW1zLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZSA9IHsgc2VsZWN0ZWRJdGVtOiB7IGl0ZW1zIH0gfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFZhbHVlU2V0ID0gKHt2YWx1ZSwgdHlwZSwgaW5kZXh9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZXRDb25kaXRpb25PcHRpb25zIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgbGV0IHZhbHVlRm9yQ29udGFpbmVyO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdiZXR3ZWVuX2ZpZWxkJzpcclxuICAgICAgICAgICAgY2FzZSAncmVsYXRpdmUtZmllbGQnOlxyXG4gICAgICAgICAgICBjYXNlICdnbGlkZV9kdXJhdGlvbic6XHJcbiAgICAgICAgICAgIGNhc2UgJ2dsaWRlX2RhdGVfY29tcGFyYXRpdmUnOlxyXG4gICAgICAgICAgICAgICAgdmFsdWVGb3JDb250YWluZXIgPSB7IGlucHV0VmFsdWUsIGluZGV4IH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHZhbHVlRm9yQ29udGFpbmVyID0gaW5wdXRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldENvbmRpdGlvbk9wdGlvbnMoe3ZhbHVlOiB2YWx1ZUZvckNvbnRhaW5lciwgY29uZGl0aW9uT3B0aW9uOiBcInZhbHVlXCJ9KVxyXG4gICAgfVxyXG5cclxuICAgIGl0ZW1Ecm9wZG93bkhhbmRsZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGNvbmRpdGlvbk9iajogeyBjb25kaXRpb25PcHRpb25zIH0gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHZhbHVlRm9yQ29udGFpbmVyO1xyXG4gICAgICAgIHN3aXRjaCAoY29uZGl0aW9uT3B0aW9ucy5vcGVyYXRvci5lZGl0b3IpIHtcclxuICAgICAgICAgICAgY2FzZSAncmVsYXRpdmVfZmllbGQnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ2xpZGVfZGF0ZV9lcXVpdmFsZW50JzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2dsaWRlX2RhdGVfY29tcGFyYXRpdmUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlRm9yQ29udGFpbmVyID0geyB2YWx1ZTogaXRlbS5pZCwgaW5kZXg6IGl0ZW0uaW5kZXggfTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RyZW5kX2ZpZWxkJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRm9yQ29udGFpbmVyID0geyB2YWx1ZTogeyBpZDogaXRlbS5pZCwgbGFiZWw6IGl0ZW0ubGFiZWwgfSwgaW5kZXg6IGl0ZW0uaW5kZXggfTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUZvckNvbnRhaW5lciA9IHsgdmFsdWU6IGl0ZW0uaWQsIGluZGV4OiBpdGVtLmluZGV4IH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUZvckNvbnRhaW5lciA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIG9wZXJhdG9yVHlwZSxcclxuICAgICAgICAgICAgY29uZGl0aW9uT2JqLFxyXG4gICAgICAgICAgICBnZXRDb25kaXRpb25zSURzLFxyXG4gICAgICAgICAgICBjb25kaXRpb25JRCxcclxuICAgICAgICAgICAgZ2xvYmFsQ29uZGl0aW9uSUQsXHJcbiAgICAgICAgICAgIGNsaWNrQnRuLFxyXG4gICAgICAgICAgICBjb25kaXRpb25zQXJyYXksXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWVQYXlsb2FkID0ge1xyXG4gICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9uczogY29uZGl0aW9uT2JqLmNvbmRpdGlvbk9wdGlvbnMsXHJcbiAgICAgICAgICAgIGl0ZW1DbGlja2VkOiB0aGlzLml0ZW1DbGlja2VkLFxyXG4gICAgICAgICAgICBvbkRhdGVQaWNrZXJDaGFuZ2U6IHRoaXMub25EYXRlUGlja2VyQ2hhbmdlLFxyXG4gICAgICAgICAgICBpbnB1dFZhbHVlU2V0OiB0aGlzLmlucHV0VmFsdWVTZXQsXHJcbiAgICAgICAgICAgIHRleHRBcmVhVmFsdWVTZXQ6IHRoaXMudGV4dEFyZWFWYWx1ZVNldCxcclxuICAgICAgICAgICAgbG9va3VwRmllbGRWYWx1ZVNldDogdGhpcy5sb29rdXBGaWVsZFZhbHVlU2V0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgZHJvcGRvd25zSXNBY3RpdmUgfSA9IHRoaXMuc3RhdGU7IFxyXG4gICAgICAgIGNvbnN0IGlzQnRuc1JlbmRlciA9ICghIWNvbmRpdGlvbk9iai5jb25kaXRpb25PcHRpb25zLnZhbHVlIHx8IGNvbmRpdGlvbk9iai5jb25kaXRpb25PcHRpb25zLm9wZXJhdG9yLmVkaXRvciA9PT0gXCJub25lXCIpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZGl0aW9uLXdyYXBwZXJcIiBvbkNsaWNrPXsoKSA9PiBnZXRDb25kaXRpb25zSURzKHtjdXJyZW50Q29uZGl0aW9uSUQ6IGNvbmRpdGlvbklELCBnbG9iYWxDb25kaXRpb25JRH0pfT5cclxuICAgICAgICAgICAgICAgIHtcclxuXHRcdFx0XHRcdG9wZXJhdG9yVHlwZSA9PT0gJ15PUicgPyA8c3BhbiBjbGFzc05hbWU9XCJjb25kaXRpb24tb3BlcmF0b3JcIj5PUjwvc3Bhbj4gOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RXhwYW5kRHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kSWNvbj1cImFycm93LXJpZ2h0LWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17dGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e2NvbmRpdGlvbk9iai5jb25kaXRpb25PcHRpb25zLmZpZWxkSXRlbXMgPyBjb25kaXRpb25PYmouY29uZGl0aW9uT3B0aW9ucy5maWVsZEl0ZW1zLml0ZW1zIDogW119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGVkSXRlbT17dGhpcy51cGRhdGVTZWxlY3RlZEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkPXsoaXRlbSkgPT4gdGhpcy5vbkl0ZW1DbGlja2VkKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCItLWNob29zZSBmaWVsZC0tXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RzPXtjb25kaXRpb25PYmouY29uZGl0aW9uT3B0aW9ucy5maWVsZHNEcm9wZG93bkRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2NvbmRpdGlvbk9iai5jb25kaXRpb25PcHRpb25zLm9wZXJhdG9yc0FycmF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtbY29uZGl0aW9uT2JqLmNvbmRpdGlvbk9wdGlvbnMub3BlcmF0b3Iub3BlcmF0b3JdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3RlZD17KGl0ZW0pID0+IHRoaXMuaXRlbUNsaWNrZWQoaXRlbS5jbGlja2VkSXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaD1cImNvbnRhaW5zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiLS1jaG9vc2Ugb3BlcmF0b3ItLVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWRyb3Bkb3duc0lzQWN0aXZlLm9wZXJhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlU2VsZWN0ZWRJdGVtcz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25zSXNBY3RpdmUudmFsdWUgJiYgaW5wdXRWYWx1ZSh7IGlucHV0VmFsdWVQYXlsb2FkIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7KG9wZXJhdG9yVHlwZSAhPT0gXCJeT1JcIiAmJiBpc0J0bnNSZW5kZXIpICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJhbmRcIiBzaXplPVwibWRcIiAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tCdG4oe2FjdGlvbjogXCJhZGROZXdPcGVyYXRvclwiLCBwYXlsb2FkOiB7IHZhbHVlOiBcIl5cIiwgY3VycmVudENvbmRpdGlvbklEOiBjb25kaXRpb25JRCwgZ2xvYmFsQ29uZGl0aW9uSUQgfX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwib3JcIiBzaXplPVwibWRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J0bih7YWN0aW9uOiBcImFkZE5ld09wZXJhdG9yXCIsIHBheWxvYWQ6IHsgdmFsdWU6IFwiXk9SXCIsIGN1cnJlbnRDb25kaXRpb25JRDogY29uZGl0aW9uSUQsIGdsb2JhbENvbmRpdGlvbklEIH19KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cIngtY2lyY2xlXCIgdmFyaWFudD1cInRlcnRpYXJ5XCIgc2l6ZT1cIm1kXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J0bih7YWN0aW9uOiBcImRlbGV0ZUNvbmRpdGlvblwiLCBwYXlsb2FkOiB7IGNvbmRpdGlvbnNBcnJheSwgZ2xvYmFsQ29uZGl0aW9uSUQsIGN1cnJlbnRDb25kaXRpb25JRDogY29uZGl0aW9uSUQgfX0pXHJcbiAgICAgICAgICAgICAgICAgICAgfX0gIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5GaWx0ZXJDb25kaXRpb25JdGVtLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNvbmRpdGlvbk9iajoge30sXHJcbiAgICBjb25kaXRpb25JRDogXCJcIixcclxuICAgIGdsb2JhbENvbmRpdGlvbklEOiBcIlwiLFxyXG4gICAgb3BlcmF0b3JUeXBlOiBcIlwiXHJcbn1cclxuXHJcbkZpbHRlckNvbmRpdGlvbkl0ZW0ucHJvcFR5cGVzID0ge1xyXG4gICAgY29uZGl0aW9uT2JqOiBwcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY29uZGl0aW9uSUQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBnbG9iYWxDb25kaXRpb25JRDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9wZXJhdG9yVHlwZTogcHJvcFR5cGVzLnN0cmluZyxcclxufVxyXG4iXX0=