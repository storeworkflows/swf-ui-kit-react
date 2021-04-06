"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputValue = void 0;

var _DatePicker = _interopRequireDefault(require("../../../DatePicker/DatePicker"));

var _TextArea = _interopRequireDefault(require("../../../TextArea/TextArea"));

var _Dropdown = _interopRequireDefault(require("../../../Dropdown/Dropdown"));

var _Input = _interopRequireDefault(require("../../../Input/Input"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var inputValue = function inputValue(state, conditionOptions, itemClicked, onDatePickerChange, inputValueSet, textAreaValueSet) {
  var dropdownsIsActive = state.dropdownsIsActive;
  var editor = conditionOptions.operator.editor;

  var dropdownValueHandle = function dropdownValueHandle(_ref) {
    var item = _ref.item,
        index = _ref.index;
    var newItem = index ? _objectSpread(_objectSpread({}, item), {}, {
      index: index
    }) : _objectSpread({}, item);
    itemClicked(newItem);
  };

  switch (editor) {
    case "boolean":
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dropdown-contaner boolean-dropdown",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
          items: [{
            "id": "true",
            "label": "true",
            "dropdown": "value"
          }, {
            "id": "false",
            "label": "false",
            "dropdown": "value"
          }],
          selectedItems: [conditionOptions.value],
          select: "single",
          disabled: !dropdownsIsActive.value,
          placeholder: "--choose value--",
          variant: "tertiary",
          size: "md",
          onItemSelected: function onItemSelected(item) {
            return dropdownValueHandle({
              item: item.clickedItem
            });
          }
        })
      });

    case "choice_field_names":
    case "choice":
    case "choice_dynamic":
    case "reference":
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dropdown-container choice-dropdown",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
          items: conditionOptions.valueAdditionalData,
          selectedItems: [conditionOptions.value],
          select: "single",
          disabled: !dropdownsIsActive.value,
          placeholder: "--choose value--",
          variant: "tertiary",
          size: "md",
          onItemSelected: function onItemSelected(item) {
            return dropdownValueHandle({
              item: item.clickedItem
            });
          }
        })
      });

    case "choice_multiple":
      var selectedItems = conditionOptions.value ? conditionOptions.value.split(",") : [""];
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dropdown-container choice-multiple-dropdown",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
          items: conditionOptions.valueAdditionalData,
          selectedItems: selectedItems,
          select: "multi",
          disabled: !dropdownsIsActive.value,
          placeholder: "--choose value--",
          variant: "tertiary",
          size: "md",
          onItemSelected: function onItemSelected(item) {
            return dropdownValueHandle({
              item: item.clickedItem
            });
          }
        })
      });

    case "string":
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dropdown-container string-input",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
          step: "any",
          type: "text",
          value: conditionOptions.value,
          onInput: function onInput(e) {
            return inputValueSet({
              value: e.target.value,
              type: editor,
              index: 0
            });
          }
        })
      });

    case "integer":
    case "decimal":
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dropdown-container number-input",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
          min: 0,
          step: conditionOptions.operator.editor === 'integer' ? 1 : 0.001,
          type: "number",
          value: conditionOptions.value,
          onInput: function onInput(e) {
            return inputValueSet({
              value: e.target.value,
              type: editor,
              index: 0
            });
          }
        })
      });

    case 'between_field':
      if (!conditionOptions.value) conditionOptions.value = {};
      conditionOptions.value['0'] = conditionOptions.value['0'] || '';
      conditionOptions.value['1'] = conditionOptions.value['1'] || '';
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container between-field-input",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DatePicker["default"], {
            value: conditionOptions.value['0'],
            format: "YYYY-MM-DD",
            onValueChange: function onValueChange(item) {
              return onDatePickerChange({
                value: item,
                type: editor,
                index: 0
              });
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "and"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container between-field-input",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DatePicker["default"], {
            value: conditionOptions.value['1'],
            format: "YYYY-MM-DD",
            onValueChange: function onValueChange(item) {
              return onDatePickerChange({
                value: item,
                type: editor,
                index: 1
              });
            }
          })
        })]
      });

    case "textarea":
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dropdown-container textarea-input",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextArea["default"], {
          autoresize: false,
          maxlength: 5000,
          value: state.textAreaValue,
          resize: "vertical",
          onKeyDown: function onKeyDown(e) {
            return textAreaValueSet({
              value: e.target.value
            });
          }
        })
      });

    case "relative_field":
      if (!conditionOptions.value) conditionOptions.value = {};
      conditionOptions.value['0'] = conditionOptions.value['0'] || '';
      conditionOptions.value['1'] = conditionOptions.value['1'] || '';
      conditionOptions.value['2'] = conditionOptions.value['2'] || '';
      conditionOptions.value['3'] = conditionOptions.value['3'] || '';
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container relative-field-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: [{
              "id": "after",
              "label": "after",
              "dropdown": "value",
              "type": "relative-field",
              "index": "0"
            }, {
              "id": "before",
              "label": "before",
              "dropdown": "value",
              "type": "relative-field",
              "index": "0"
            }],
            selectedItems: [conditionOptions.value['0']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 0
              });
            },
            select: "single",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container relative-field-input",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
            min: 0,
            step: 1,
            type: "number",
            value: conditionOptions.value['1'],
            onInput: function onInput(e) {
              return inputValueSet({
                value: e.target.value,
                type: editor,
                index: 1
              });
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container relative-field-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: [{
              "id": "minute",
              "label": "Minutes",
              "dropdown": "value",
              "type": "relative-field",
              "index": "2"
            }, {
              "id": "hour",
              "label": "Hours",
              "dropdown": "value",
              "type": "relative-field",
              "index": "2"
            }, {
              "id": "dayofweek",
              "label": "Days",
              "dropdown": "value",
              "type": "relative-field",
              "index": "2"
            }, {
              "id": "month",
              "label": "Months",
              "dropdown": "value",
              "type": "relative-field",
              "index": "2"
            }, {
              "id": "quarter",
              "label": "Quarters",
              "dropdown": "value",
              "type": "relative-field",
              "index": "2"
            }, {
              "id": "year",
              "label": "Years",
              "dropdown": "value",
              "type": "relative-field",
              "index": "2"
            }],
            selectedItems: [conditionOptions.value['2']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 2
              });
            },
            select: "single",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container relative-field-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: [{
              "id": "ago",
              "label": "ago",
              "dropdown": "value",
              "type": "relative-field",
              "index": "3"
            }, {
              "id": "ahead",
              "label": "from now",
              "dropdown": "value",
              "type": "relative-field",
              "index": "3"
            }],
            selectedItems: [conditionOptions.value['3']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 3
              });
            },
            select: "single",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        })]
      });

    case "glide_duration":
      if (!conditionOptions.value) conditionOptions.value = {};
      conditionOptions.value['0'] = conditionOptions.value['0'] || '';
      conditionOptions.value['1'] = conditionOptions.value['1'] || '';
      conditionOptions.value['2'] = conditionOptions.value['2'] || '';
      conditionOptions.value['3'] = conditionOptions.value['3'] || '';
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-duration-input",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
            placeholder: "Days",
            min: 0,
            max: 9999,
            step: 1,
            type: "number",
            value: conditionOptions.value[0],
            onInput: function onInput(e) {
              return inputValueSet({
                value: e.target.value,
                type: editor,
                index: 0
              });
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-duration-input",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
            placeholder: "Hours",
            min: 0,
            max: 23,
            step: 1,
            type: "number",
            value: conditionOptions.value[1],
            onInput: function onInput(e) {
              return inputValueSet({
                value: e.target.value,
                type: editor,
                index: 1
              });
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-duration-input",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
            placeholder: "Minutes",
            min: 0,
            max: 59,
            step: 1,
            type: "number",
            value: conditionOptions.value[2],
            onInput: function onInput(e) {
              return inputValueSet({
                value: e.target.value,
                type: editor,
                index: 2
              });
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-duration-input",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
            placeholder: "Seconds",
            min: 0,
            max: 59,
            step: 1,
            type: "number",
            value: conditionOptions.value[3],
            onInput: function onInput(e) {
              return inputValueSet({
                value: e.target.value,
                type: editor,
                index: 3
              });
            }
          })
        })]
      });

    case "glide_date_choice":
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dropdown-container glide-date-choice-input",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DatePicker["default"], {
          format: "YYYY-MM-DD",
          value: conditionOptions.value,
          onValueChange: function onValueChange(value) {
            return onDatePickerChange({
              value: value,
              type: editor
            });
          }
        })
      });

    case 'trend_field':
      if (!conditionOptions.value) conditionOptions.value = {};
      conditionOptions.value['0'] = conditionOptions.value['0'] || '';
      conditionOptions.value['1'] = conditionOptions.value['1'] || '';
      conditionOptions.value['2'] = conditionOptions.value['2'] || {
        id: ''
      };
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container trend-field-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: [{
              "id": "GE",
              "label": "on or after",
              "dropdown": "value",
              "type": "trend_field",
              "index": "0"
            }, {
              "id": "LE",
              "label": "on or before",
              "dropdown": "value",
              "type": "trend_field",
              "index": "0"
            }, {
              "id": "GT",
              "label": "after",
              "dropdown": "value",
              "type": "trend_field",
              "index": "0"
            }, {
              "id": "LT",
              "label": "before",
              "dropdown": "value",
              "type": "trend_field",
              "index": "0"
            }, {
              "id": "EE",
              "label": "on",
              "dropdown": "value",
              "type": "trend_field",
              "index": "0"
            }],
            selectedItems: [conditionOptions.value['0']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 0
              });
            },
            select: "single",
            search: "contains",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container trend-field-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: [{
              "id": "dayofweek",
              "label": "day",
              "dropdown": "value",
              "type": "trend_field",
              "index": "1"
            }, {
              "id": "month",
              "label": "month",
              "dropdown": "value",
              "type": "trend_field",
              "index": "1"
            }, {
              "id": "quarter",
              "label": "quarter",
              "dropdown": "value",
              "type": "trend_field",
              "index": "1"
            }, {
              "id": "year",
              "label": "year",
              "dropdown": "value",
              "type": "trend_field",
              "index": "1"
            }, {
              "id": "week",
              "label": "week",
              "dropdown": "value",
              "type": "trend_field",
              "index": "1"
            }, {
              "id": "hour",
              "label": "hour",
              "dropdown": "value",
              "type": "trend_field",
              "index": "1"
            }],
            selectedItems: [conditionOptions.value['1']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 1
              });
            },
            select: "single",
            search: "contains",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container trend-field-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: conditionOptions.valueAdditionalData,
            selectedItems: [conditionOptions.value['2'].id],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 2
              });
            },
            select: "single",
            search: "contains",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        })]
      });

    case "glide_date_equivalent":
      if (!conditionOptions.value) conditionOptions.value = {};
      conditionOptions.value['0'] = conditionOptions.value['0'] || '';
      conditionOptions.value['1'] = conditionOptions.value['1'] || '';
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-date-equivalent-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: [{
              "id": "day",
              "label": "day",
              "dropdown": "value",
              "type": "glide_date_equivalent",
              "index": "0"
            }, {
              "id": "month",
              "label": "month",
              "dropdown": "value",
              "type": "glide_date_equivalent",
              "index": "0"
            }, {
              "id": "quarter",
              "label": "quarter",
              "dropdown": "value",
              "type": "glide_date_equivalent",
              "index": "0"
            }, {
              "id": "year",
              "label": "year",
              "dropdown": "value",
              "type": "glide_date_equivalent",
              "index": "0"
            }, {
              "id": "week",
              "label": "week",
              "dropdown": "value",
              "type": "glide_date_equivalent",
              "index": "0"
            }, {
              "id": "hour",
              "label": "hour",
              "dropdown": "value",
              "type": "glide_date_equivalent",
              "index": "0"
            }],
            selectedItems: [conditionOptions.value['0']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 0
              });
            },
            select: "single",
            search: "contains",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "and"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-date-equivalent-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: conditionOptions.valueAdditionalData,
            selectedItems: [conditionOptions.value['1']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 1
              });
            },
            select: "single",
            search: "contains",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        })]
      });

    case 'glide_date_comparative':
      if (!conditionOptions.value) conditionOptions.value = {};
      conditionOptions.value['0'] = conditionOptions.value['0'] || '0';
      conditionOptions.value['1'] = conditionOptions.value['1'] || '';
      conditionOptions.value['2'] = conditionOptions.value['2'] || '';
      conditionOptions.value['3'] = conditionOptions.value['3'] || '';
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-date-comparative-input",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
            min: 0,
            step: 1,
            type: "number",
            value: conditionOptions.value['0'],
            onInput: function onInput(e) {
              return inputValueSet({
                value: e.target.value,
                type: editor,
                index: 0
              });
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-date-comparative-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: [{
              "id": "day",
              "label": "day",
              "dropdown": "value",
              "type": "glide_date_comparative",
              "index": "1"
            }, {
              "id": "month",
              "label": "month",
              "dropdown": "value",
              "type": "glide_date_comparative",
              "index": "1"
            }, {
              "id": "quarter",
              "label": "quarter",
              "dropdown": "value",
              "type": "glide_date_comparative",
              "index": "1"
            }, {
              "id": "year",
              "label": "year",
              "dropdown": "value",
              "type": "glide_date_comparative",
              "index": "1"
            }, {
              "id": "week",
              "label": "week",
              "dropdown": "value",
              "type": "glide_date_comparative",
              "index": "1"
            }, {
              "id": "hour",
              "label": "hour",
              "dropdown": "value",
              "type": "glide_date_comparative",
              "index": "1"
            }],
            selectedItems: [conditionOptions.value['1']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 1
              });
            },
            select: "single",
            search: "contains",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-date-comparative-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: [{
              "id": "before",
              "label": "before",
              "dropdown": "value",
              "type": "glide_date_comparative",
              "index": "2"
            }, {
              "id": "after",
              "label": "after",
              "dropdown": "value",
              "type": "glide_date_comparative",
              "index": "2"
            }, {
              "id": "before or after",
              "label": "before or after",
              "dropdown": "value",
              "type": "glide_date_comparative",
              "index": "2"
            }],
            selectedItems: [conditionOptions.value['2']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 2
              });
            },
            select: "single",
            search: "contains",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-container glide-date-comparative-dropdown",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
            items: conditionOptions.valueAdditionalData,
            selectedItems: [conditionOptions.value['3']],
            onItemSelected: function onItemSelected(item) {
              return dropdownValueHandle({
                item: item.clickedItem,
                index: 3
              });
            },
            select: "single",
            search: "contains",
            disabled: !dropdownsIsActive.value,
            placeholder: "--choose value--",
            variant: "tertiary",
            size: "md"
          })
        })]
      });

    default:
      return;
  }
};

exports.inputValue = inputValue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRmlsdGVyQ29uZGl0aW9uSXRlbS9faW5wdXRWYWx1ZS5qcyJdLCJuYW1lcyI6WyJpbnB1dFZhbHVlIiwic3RhdGUiLCJjb25kaXRpb25PcHRpb25zIiwiaXRlbUNsaWNrZWQiLCJvbkRhdGVQaWNrZXJDaGFuZ2UiLCJpbnB1dFZhbHVlU2V0IiwidGV4dEFyZWFWYWx1ZVNldCIsImRyb3Bkb3duc0lzQWN0aXZlIiwiZWRpdG9yIiwib3BlcmF0b3IiLCJkcm9wZG93blZhbHVlSGFuZGxlIiwiaXRlbSIsImluZGV4IiwibmV3SXRlbSIsInZhbHVlIiwiY2xpY2tlZEl0ZW0iLCJ2YWx1ZUFkZGl0aW9uYWxEYXRhIiwic2VsZWN0ZWRJdGVtcyIsInNwbGl0IiwiZSIsInRhcmdldCIsInR5cGUiLCJ0ZXh0QXJlYVZhbHVlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFRQyxnQkFBUixFQUEwQkMsV0FBMUIsRUFBdUNDLGtCQUF2QyxFQUEyREMsYUFBM0QsRUFBMEVDLGdCQUExRSxFQUErRjtBQUFBLE1BQzdHQyxpQkFENkcsR0FDdkZOLEtBRHVGLENBQzdHTSxpQkFENkc7QUFBQSxNQUVoR0MsTUFGZ0csR0FFbkZOLGdCQUZtRixDQUU1R08sUUFGNEcsQ0FFaEdELE1BRmdHOztBQUlySCxNQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BQW1CO0FBQUEsUUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLFFBQVhDLEtBQVcsUUFBWEEsS0FBVztBQUMzQyxRQUFJQyxPQUFPLEdBQUdELEtBQUssbUNBQU9ELElBQVA7QUFBYUMsTUFBQUEsS0FBSyxFQUFMQTtBQUFiLDJCQUEwQkQsSUFBMUIsQ0FBbkI7QUFDQVIsSUFBQUEsV0FBVyxDQUFDVSxPQUFELENBQVg7QUFDSCxHQUhEOztBQUtBLFVBQVFMLE1BQVI7QUFDSSxTQUFLLFNBQUw7QUFDSSwwQkFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDLG9DQUFmO0FBQUEsK0JBQ0kscUJBQUMsb0JBQUQ7QUFDSSxVQUFBLEtBQUssRUFBRSxDQUFDO0FBQUUsa0JBQU0sTUFBUjtBQUFnQixxQkFBUyxNQUF6QjtBQUFpQyx3QkFBWTtBQUE3QyxXQUFELEVBQXlEO0FBQUUsa0JBQU0sT0FBUjtBQUFpQixxQkFBUyxPQUExQjtBQUFtQyx3QkFBWTtBQUEvQyxXQUF6RCxDQURYO0FBRUksVUFBQSxhQUFhLEVBQUUsQ0FBQ04sZ0JBQWdCLENBQUNZLEtBQWxCLENBRm5CO0FBR0ksVUFBQSxNQUFNLEVBQUMsUUFIWDtBQUlJLFVBQUEsUUFBUSxFQUFFLENBQUNQLGlCQUFpQixDQUFDTyxLQUpqQztBQUtJLFVBQUEsV0FBVyxFQUFDLGtCQUxoQjtBQU1JLFVBQUEsT0FBTyxFQUFDLFVBTlo7QUFPSSxVQUFBLElBQUksRUFBQyxJQVBUO0FBUUksVUFBQSxjQUFjLEVBQUUsd0JBQUNILElBQUQ7QUFBQSxtQkFBVUQsbUJBQW1CLENBQUM7QUFBQ0MsY0FBQUEsSUFBSSxFQUFFQSxJQUFJLENBQUNJO0FBQVosYUFBRCxDQUE3QjtBQUFBO0FBUnBCO0FBREosUUFESjs7QUFjSixTQUFLLG9CQUFMO0FBQ0EsU0FBSyxRQUFMO0FBQ0EsU0FBSyxnQkFBTDtBQUNBLFNBQUssV0FBTDtBQUNJLDBCQUNJO0FBQUssUUFBQSxTQUFTLEVBQUMsb0NBQWY7QUFBQSwrQkFDSSxxQkFBQyxvQkFBRDtBQUNJLFVBQUEsS0FBSyxFQUFFYixnQkFBZ0IsQ0FBQ2MsbUJBRDVCO0FBRUksVUFBQSxhQUFhLEVBQUUsQ0FBQ2QsZ0JBQWdCLENBQUNZLEtBQWxCLENBRm5CO0FBR0ksVUFBQSxNQUFNLEVBQUMsUUFIWDtBQUlJLFVBQUEsUUFBUSxFQUFFLENBQUNQLGlCQUFpQixDQUFDTyxLQUpqQztBQUtJLFVBQUEsV0FBVyxFQUFDLGtCQUxoQjtBQU1JLFVBQUEsT0FBTyxFQUFDLFVBTlo7QUFPSSxVQUFBLElBQUksRUFBQyxJQVBUO0FBUUksVUFBQSxjQUFjLEVBQUUsd0JBQUNILElBQUQ7QUFBQSxtQkFBVUQsbUJBQW1CLENBQUM7QUFBQ0MsY0FBQUEsSUFBSSxFQUFFQSxJQUFJLENBQUNJO0FBQVosYUFBRCxDQUE3QjtBQUFBO0FBUnBCO0FBREosUUFESjs7QUFjSixTQUFLLGlCQUFMO0FBQ0ksVUFBSUUsYUFBYSxHQUFHZixnQkFBZ0IsQ0FBQ1ksS0FBakIsR0FBeUJaLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QkksS0FBdkIsQ0FBNkIsR0FBN0IsQ0FBekIsR0FBNkQsQ0FBQyxFQUFELENBQWpGO0FBQ0EsMEJBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBQyw2Q0FBZjtBQUFBLCtCQUNJLHFCQUFDLG9CQUFEO0FBQ0ksVUFBQSxLQUFLLEVBQUVoQixnQkFBZ0IsQ0FBQ2MsbUJBRDVCO0FBRUksVUFBQSxhQUFhLEVBQUVDLGFBRm5CO0FBR0ksVUFBQSxNQUFNLEVBQUMsT0FIWDtBQUlJLFVBQUEsUUFBUSxFQUFFLENBQUNWLGlCQUFpQixDQUFDTyxLQUpqQztBQUtJLFVBQUEsV0FBVyxFQUFDLGtCQUxoQjtBQU1JLFVBQUEsT0FBTyxFQUFDLFVBTlo7QUFPSSxVQUFBLElBQUksRUFBQyxJQVBUO0FBUUksVUFBQSxjQUFjLEVBQUUsd0JBQUNILElBQUQ7QUFBQSxtQkFBVUQsbUJBQW1CLENBQUM7QUFBQ0MsY0FBQUEsSUFBSSxFQUFFQSxJQUFJLENBQUNJO0FBQVosYUFBRCxDQUE3QjtBQUFBO0FBUnBCO0FBREosUUFESjs7QUFjSixTQUFLLFFBQUw7QUFDSSwwQkFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDLGlDQUFmO0FBQUEsK0JBQ0kscUJBQUMsaUJBQUQ7QUFDSSxVQUFBLElBQUksRUFBQyxLQURUO0FBRUksVUFBQSxJQUFJLEVBQUMsTUFGVDtBQUdJLFVBQUEsS0FBSyxFQUFFYixnQkFBZ0IsQ0FBQ1ksS0FINUI7QUFJSSxVQUFBLE9BQU8sRUFBRSxpQkFBQ0ssQ0FBRDtBQUFBLG1CQUFPZCxhQUFhLENBQUM7QUFBQ1MsY0FBQUEsS0FBSyxFQUFFSyxDQUFDLENBQUNDLE1BQUYsQ0FBU04sS0FBakI7QUFBd0JPLGNBQUFBLElBQUksRUFBRWIsTUFBOUI7QUFBc0NJLGNBQUFBLEtBQUssRUFBRTtBQUE3QyxhQUFELENBQXBCO0FBQUE7QUFKYjtBQURKLFFBREo7O0FBVUosU0FBSyxTQUFMO0FBQ0EsU0FBSyxTQUFMO0FBQ0ksMEJBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBQyxpQ0FBZjtBQUFBLCtCQUNJLHFCQUFDLGlCQUFEO0FBQ0ksVUFBQSxHQUFHLEVBQUUsQ0FEVDtBQUVJLFVBQUEsSUFBSSxFQUFFVixnQkFBZ0IsQ0FBQ08sUUFBakIsQ0FBMEJELE1BQTFCLEtBQXFDLFNBQXJDLEdBQWlELENBQWpELEdBQXFELEtBRi9EO0FBR0ksVUFBQSxJQUFJLEVBQUMsUUFIVDtBQUlJLFVBQUEsS0FBSyxFQUFFTixnQkFBZ0IsQ0FBQ1ksS0FKNUI7QUFLSSxVQUFBLE9BQU8sRUFBRSxpQkFBQ0ssQ0FBRDtBQUFBLG1CQUFPZCxhQUFhLENBQUM7QUFBQ1MsY0FBQUEsS0FBSyxFQUFFSyxDQUFDLENBQUNDLE1BQUYsQ0FBU04sS0FBakI7QUFBd0JPLGNBQUFBLElBQUksRUFBRWIsTUFBOUI7QUFBc0NJLGNBQUFBLEtBQUssRUFBRTtBQUE3QyxhQUFELENBQXBCO0FBQUE7QUFMYjtBQURKLFFBREo7O0FBV0osU0FBSyxlQUFMO0FBQ0ksVUFBSSxDQUFDVixnQkFBZ0IsQ0FBQ1ksS0FBdEIsRUFDSVosZ0JBQWdCLENBQUNZLEtBQWpCLEdBQXdCLEVBQXhCO0FBQ0paLE1BQUFBLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixJQUE4QlosZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLEdBQXZCLEtBQStCLEVBQTdEO0FBQ0FaLE1BQUFBLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixJQUE4QlosZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLEdBQXZCLEtBQStCLEVBQTdEO0FBQ0EsMEJBQ0k7QUFBQSxnQ0FDSTtBQUFLLFVBQUEsU0FBUyxFQUFDLHdDQUFmO0FBQUEsaUNBQ0kscUJBQUMsc0JBQUQ7QUFBWSxZQUFBLEtBQUssRUFBRVosZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLEdBQXZCLENBQW5CO0FBQWdELFlBQUEsTUFBTSxFQUFDLFlBQXZEO0FBQW9FLFlBQUEsYUFBYSxFQUFFLHVCQUFDSCxJQUFEO0FBQUEscUJBQVVQLGtCQUFrQixDQUFDO0FBQUNVLGdCQUFBQSxLQUFLLEVBQUVILElBQVI7QUFBY1UsZ0JBQUFBLElBQUksRUFBRWIsTUFBcEI7QUFBNEJJLGdCQUFBQSxLQUFLLEVBQUU7QUFBbkMsZUFBRCxDQUE1QjtBQUFBO0FBQW5GO0FBREosVUFESixlQUlJO0FBQUE7QUFBQSxVQUpKLGVBS0k7QUFBSyxVQUFBLFNBQVMsRUFBQyx3Q0FBZjtBQUFBLGlDQUNJLHFCQUFDLHNCQUFEO0FBQVksWUFBQSxLQUFLLEVBQUVWLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixDQUFuQjtBQUFnRCxZQUFBLE1BQU0sRUFBQyxZQUF2RDtBQUFvRSxZQUFBLGFBQWEsRUFBRSx1QkFBQ0gsSUFBRDtBQUFBLHFCQUFVUCxrQkFBa0IsQ0FBQztBQUFDVSxnQkFBQUEsS0FBSyxFQUFFSCxJQUFSO0FBQWNVLGdCQUFBQSxJQUFJLEVBQUViLE1BQXBCO0FBQTRCSSxnQkFBQUEsS0FBSyxFQUFFO0FBQW5DLGVBQUQsQ0FBNUI7QUFBQTtBQUFuRjtBQURKLFVBTEo7QUFBQSxRQURKOztBQVdKLFNBQUssVUFBTDtBQUNJLDBCQUNJO0FBQUssUUFBQSxTQUFTLEVBQUMsbUNBQWY7QUFBQSwrQkFDSSxxQkFBQyxvQkFBRDtBQUNJLFVBQUEsVUFBVSxFQUFFLEtBRGhCO0FBRUksVUFBQSxTQUFTLEVBQUUsSUFGZjtBQUdJLFVBQUEsS0FBSyxFQUFFWCxLQUFLLENBQUNxQixhQUhqQjtBQUlJLFVBQUEsTUFBTSxFQUFDLFVBSlg7QUFLSSxVQUFBLFNBQVMsRUFBRSxtQkFBQ0gsQ0FBRDtBQUFBLG1CQUFPYixnQkFBZ0IsQ0FBQztBQUFDUSxjQUFBQSxLQUFLLEVBQUVLLENBQUMsQ0FBQ0MsTUFBRixDQUFTTjtBQUFqQixhQUFELENBQXZCO0FBQUE7QUFMZjtBQURKLFFBREo7O0FBV0osU0FBSyxnQkFBTDtBQUNJLFVBQUksQ0FBQ1osZ0JBQWdCLENBQUNZLEtBQXRCLEVBQ0laLGdCQUFnQixDQUFDWSxLQUFqQixHQUF5QixFQUF6QjtBQUVKWixNQUFBQSxnQkFBZ0IsQ0FBQ1ksS0FBakIsQ0FBdUIsR0FBdkIsSUFBOEJaLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixLQUErQixFQUE3RDtBQUNBWixNQUFBQSxnQkFBZ0IsQ0FBQ1ksS0FBakIsQ0FBdUIsR0FBdkIsSUFBOEJaLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixLQUErQixFQUE3RDtBQUNBWixNQUFBQSxnQkFBZ0IsQ0FBQ1ksS0FBakIsQ0FBdUIsR0FBdkIsSUFBOEJaLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixLQUErQixFQUE3RDtBQUNBWixNQUFBQSxnQkFBZ0IsQ0FBQ1ksS0FBakIsQ0FBdUIsR0FBdkIsSUFBOEJaLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixLQUErQixFQUE3RDtBQUNBLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBSyxVQUFBLFNBQVMsRUFBQyw0Q0FBZjtBQUFBLGlDQUNJLHFCQUFDLG9CQUFEO0FBQ0ksWUFBQSxLQUFLLEVBQUUsQ0FBQztBQUFFLG9CQUFNLE9BQVI7QUFBaUIsdUJBQVMsT0FBMUI7QUFBbUMsMEJBQVksT0FBL0M7QUFBd0Qsc0JBQVEsZ0JBQWhFO0FBQWtGLHVCQUFTO0FBQTNGLGFBQUQsRUFBbUc7QUFBRSxvQkFBTSxRQUFSO0FBQWtCLHVCQUFTLFFBQTNCO0FBQXFDLDBCQUFZLE9BQWpEO0FBQTBELHNCQUFRLGdCQUFsRTtBQUFvRix1QkFBUztBQUE3RixhQUFuRyxDQURYO0FBRUksWUFBQSxhQUFhLEVBQUUsQ0FBQ1osZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLEdBQXZCLENBQUQsQ0FGbkI7QUFHSSxZQUFBLGNBQWMsRUFBRSx3QkFBQ0gsSUFBRDtBQUFBLHFCQUFVRCxtQkFBbUIsQ0FBQztBQUFDQyxnQkFBQUEsSUFBSSxFQUFFQSxJQUFJLENBQUNJLFdBQVo7QUFBeUJILGdCQUFBQSxLQUFLLEVBQUU7QUFBaEMsZUFBRCxDQUE3QjtBQUFBLGFBSHBCO0FBSUksWUFBQSxNQUFNLEVBQUMsUUFKWDtBQUtJLFlBQUEsUUFBUSxFQUFFLENBQUNMLGlCQUFpQixDQUFDTyxLQUxqQztBQU1JLFlBQUEsV0FBVyxFQUFDLGtCQU5oQjtBQU9JLFlBQUEsT0FBTyxFQUFDLFVBUFo7QUFRSSxZQUFBLElBQUksRUFBQztBQVJUO0FBREosVUFESixlQWFJO0FBQUssVUFBQSxTQUFTLEVBQUMseUNBQWY7QUFBQSxpQ0FDSSxxQkFBQyxpQkFBRDtBQUNJLFlBQUEsR0FBRyxFQUFFLENBRFQ7QUFFSSxZQUFBLElBQUksRUFBRSxDQUZWO0FBR0ksWUFBQSxJQUFJLEVBQUMsUUFIVDtBQUlJLFlBQUEsS0FBSyxFQUFFWixnQkFBZ0IsQ0FBQ1ksS0FBakIsQ0FBdUIsR0FBdkIsQ0FKWDtBQUtJLFlBQUEsT0FBTyxFQUFFLGlCQUFDSyxDQUFEO0FBQUEscUJBQU9kLGFBQWEsQ0FBQztBQUFDUyxnQkFBQUEsS0FBSyxFQUFFSyxDQUFDLENBQUNDLE1BQUYsQ0FBU04sS0FBakI7QUFBd0JPLGdCQUFBQSxJQUFJLEVBQUViLE1BQTlCO0FBQXNDSSxnQkFBQUEsS0FBSyxFQUFFO0FBQTdDLGVBQUQsQ0FBcEI7QUFBQTtBQUxiO0FBREosVUFiSixlQXNCSTtBQUFLLFVBQUEsU0FBUyxFQUFDLDRDQUFmO0FBQUEsaUNBQ0kscUJBQUMsb0JBQUQ7QUFDSSxZQUFBLEtBQUssRUFBRSxDQUFDO0FBQUUsb0JBQU0sUUFBUjtBQUFrQix1QkFBUyxTQUEzQjtBQUFzQywwQkFBWSxPQUFsRDtBQUEyRCxzQkFBUSxnQkFBbkU7QUFBcUYsdUJBQVM7QUFBOUYsYUFBRCxFQUFzRztBQUFFLG9CQUFNLE1BQVI7QUFBZ0IsdUJBQVMsT0FBekI7QUFBa0MsMEJBQVksT0FBOUM7QUFBdUQsc0JBQVEsZ0JBQS9EO0FBQWlGLHVCQUFTO0FBQTFGLGFBQXRHLEVBQXVNO0FBQUUsb0JBQU0sV0FBUjtBQUFxQix1QkFBUyxNQUE5QjtBQUFzQywwQkFBWSxPQUFsRDtBQUEyRCxzQkFBUSxnQkFBbkU7QUFBcUYsdUJBQVM7QUFBOUYsYUFBdk0sRUFBNFM7QUFBRSxvQkFBTSxPQUFSO0FBQWlCLHVCQUFTLFFBQTFCO0FBQW9DLDBCQUFZLE9BQWhEO0FBQXlELHNCQUFRLGdCQUFqRTtBQUFtRix1QkFBUztBQUE1RixhQUE1UyxFQUErWTtBQUFFLG9CQUFNLFNBQVI7QUFBbUIsdUJBQVMsVUFBNUI7QUFBd0MsMEJBQVksT0FBcEQ7QUFBNkQsc0JBQVEsZ0JBQXJFO0FBQXVGLHVCQUFTO0FBQWhHLGFBQS9ZLEVBQXNmO0FBQUUsb0JBQU0sTUFBUjtBQUFnQix1QkFBUyxPQUF6QjtBQUFrQywwQkFBWSxPQUE5QztBQUF1RCxzQkFBUSxnQkFBL0Q7QUFBaUYsdUJBQVM7QUFBMUYsYUFBdGYsQ0FEWDtBQUVJLFlBQUEsYUFBYSxFQUFFLENBQUNWLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixDQUFELENBRm5CO0FBR0ksWUFBQSxjQUFjLEVBQUUsd0JBQUNILElBQUQ7QUFBQSxxQkFBVUQsbUJBQW1CLENBQUM7QUFBQ0MsZ0JBQUFBLElBQUksRUFBRUEsSUFBSSxDQUFDSSxXQUFaO0FBQXlCSCxnQkFBQUEsS0FBSyxFQUFFO0FBQWhDLGVBQUQsQ0FBN0I7QUFBQSxhQUhwQjtBQUlJLFlBQUEsTUFBTSxFQUFDLFFBSlg7QUFLSSxZQUFBLFFBQVEsRUFBRSxDQUFDTCxpQkFBaUIsQ0FBQ08sS0FMakM7QUFNSSxZQUFBLFdBQVcsRUFBQyxrQkFOaEI7QUFPSSxZQUFBLE9BQU8sRUFBQyxVQVBaO0FBUUksWUFBQSxJQUFJLEVBQUM7QUFSVDtBQURKLFVBdEJKLGVBa0NJO0FBQUssVUFBQSxTQUFTLEVBQUMsNENBQWY7QUFBQSxpQ0FDSSxxQkFBQyxvQkFBRDtBQUNJLFlBQUEsS0FBSyxFQUFFLENBQUM7QUFBRSxvQkFBTSxLQUFSO0FBQWUsdUJBQVMsS0FBeEI7QUFBK0IsMEJBQVksT0FBM0M7QUFBb0Qsc0JBQVEsZ0JBQTVEO0FBQThFLHVCQUFTO0FBQXZGLGFBQUQsRUFBK0Y7QUFBRSxvQkFBTSxPQUFSO0FBQWlCLHVCQUFTLFVBQTFCO0FBQXNDLDBCQUFZLE9BQWxEO0FBQTJELHNCQUFRLGdCQUFuRTtBQUFxRix1QkFBUztBQUE5RixhQUEvRixDQURYO0FBRUksWUFBQSxhQUFhLEVBQUUsQ0FBQ1osZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLEdBQXZCLENBQUQsQ0FGbkI7QUFHSSxZQUFBLGNBQWMsRUFBRSx3QkFBQ0gsSUFBRDtBQUFBLHFCQUFVRCxtQkFBbUIsQ0FBQztBQUFDQyxnQkFBQUEsSUFBSSxFQUFFQSxJQUFJLENBQUNJLFdBQVo7QUFBeUJILGdCQUFBQSxLQUFLLEVBQUU7QUFBaEMsZUFBRCxDQUE3QjtBQUFBLGFBSHBCO0FBSUksWUFBQSxNQUFNLEVBQUMsUUFKWDtBQUtJLFlBQUEsUUFBUSxFQUFFLENBQUNMLGlCQUFpQixDQUFDTyxLQUxqQztBQU1JLFlBQUEsV0FBVyxFQUFDLGtCQU5oQjtBQU9JLFlBQUEsT0FBTyxFQUFDLFVBUFo7QUFRSSxZQUFBLElBQUksRUFBQztBQVJUO0FBREosVUFsQ0o7QUFBQSxRQURKOztBQWlESixTQUFLLGdCQUFMO0FBQ0ksVUFBSSxDQUFDWixnQkFBZ0IsQ0FBQ1ksS0FBdEIsRUFDSVosZ0JBQWdCLENBQUNZLEtBQWpCLEdBQXlCLEVBQXpCO0FBQ0paLE1BQUFBLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixJQUE4QlosZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLEdBQXZCLEtBQStCLEVBQTdEO0FBQ0FaLE1BQUFBLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixJQUE4QlosZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLEdBQXZCLEtBQStCLEVBQTdEO0FBQ0FaLE1BQUFBLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixJQUE4QlosZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLEdBQXZCLEtBQStCLEVBQTdEO0FBQ0FaLE1BQUFBLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixJQUE4QlosZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLEdBQXZCLEtBQStCLEVBQTdEO0FBQ0EsMEJBQ0k7QUFBQSxnQ0FDSTtBQUFLLFVBQUEsU0FBUyxFQUFDLHlDQUFmO0FBQUEsaUNBQ0kscUJBQUMsaUJBQUQ7QUFDSSxZQUFBLFdBQVcsRUFBQyxNQURoQjtBQUVJLFlBQUEsR0FBRyxFQUFFLENBRlQ7QUFHSSxZQUFBLEdBQUcsRUFBRSxJQUhUO0FBSUksWUFBQSxJQUFJLEVBQUUsQ0FKVjtBQUtJLFlBQUEsSUFBSSxFQUFDLFFBTFQ7QUFNSSxZQUFBLEtBQUssRUFBRVosZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLENBQXZCLENBTlg7QUFPSSxZQUFBLE9BQU8sRUFBRSxpQkFBQ0ssQ0FBRDtBQUFBLHFCQUFPZCxhQUFhLENBQUM7QUFBQ1MsZ0JBQUFBLEtBQUssRUFBRUssQ0FBQyxDQUFDQyxNQUFGLENBQVNOLEtBQWpCO0FBQXdCTyxnQkFBQUEsSUFBSSxFQUFFYixNQUE5QjtBQUFzQ0ksZ0JBQUFBLEtBQUssRUFBRTtBQUE3QyxlQUFELENBQXBCO0FBQUE7QUFQYjtBQURKLFVBREosZUFZSTtBQUFLLFVBQUEsU0FBUyxFQUFDLHlDQUFmO0FBQUEsaUNBQ0kscUJBQUMsaUJBQUQ7QUFDSSxZQUFBLFdBQVcsRUFBQyxPQURoQjtBQUVJLFlBQUEsR0FBRyxFQUFFLENBRlQ7QUFHSSxZQUFBLEdBQUcsRUFBRSxFQUhUO0FBSUksWUFBQSxJQUFJLEVBQUUsQ0FKVjtBQUtJLFlBQUEsSUFBSSxFQUFDLFFBTFQ7QUFNSSxZQUFBLEtBQUssRUFBRVYsZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLENBQXZCLENBTlg7QUFPSSxZQUFBLE9BQU8sRUFBRSxpQkFBQ0ssQ0FBRDtBQUFBLHFCQUFPZCxhQUFhLENBQUM7QUFBQ1MsZ0JBQUFBLEtBQUssRUFBRUssQ0FBQyxDQUFDQyxNQUFGLENBQVNOLEtBQWpCO0FBQXdCTyxnQkFBQUEsSUFBSSxFQUFFYixNQUE5QjtBQUFzQ0ksZ0JBQUFBLEtBQUssRUFBRTtBQUE3QyxlQUFELENBQXBCO0FBQUE7QUFQYjtBQURKLFVBWkosZUF1Qkk7QUFBSyxVQUFBLFNBQVMsRUFBQyx5Q0FBZjtBQUFBLGlDQUNJLHFCQUFDLGlCQUFEO0FBQ0ksWUFBQSxXQUFXLEVBQUMsU0FEaEI7QUFFSSxZQUFBLEdBQUcsRUFBRSxDQUZUO0FBR0ksWUFBQSxHQUFHLEVBQUUsRUFIVDtBQUlJLFlBQUEsSUFBSSxFQUFFLENBSlY7QUFLSSxZQUFBLElBQUksRUFBQyxRQUxUO0FBTUksWUFBQSxLQUFLLEVBQUVWLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixDQUF2QixDQU5YO0FBT0ksWUFBQSxPQUFPLEVBQUUsaUJBQUNLLENBQUQ7QUFBQSxxQkFBT2QsYUFBYSxDQUFDO0FBQUNTLGdCQUFBQSxLQUFLLEVBQUVLLENBQUMsQ0FBQ0MsTUFBRixDQUFTTixLQUFqQjtBQUF3Qk8sZ0JBQUFBLElBQUksRUFBRWIsTUFBOUI7QUFBc0NJLGdCQUFBQSxLQUFLLEVBQUU7QUFBN0MsZUFBRCxDQUFwQjtBQUFBO0FBUGI7QUFESixVQXZCSixlQWtDSTtBQUFLLFVBQUEsU0FBUyxFQUFDLHlDQUFmO0FBQUEsaUNBQ0kscUJBQUMsaUJBQUQ7QUFDSSxZQUFBLFdBQVcsRUFBQyxTQURoQjtBQUVJLFlBQUEsR0FBRyxFQUFFLENBRlQ7QUFHSSxZQUFBLEdBQUcsRUFBRSxFQUhUO0FBSUksWUFBQSxJQUFJLEVBQUUsQ0FKVjtBQUtJLFlBQUEsSUFBSSxFQUFDLFFBTFQ7QUFNSSxZQUFBLEtBQUssRUFBRVYsZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLENBQXZCLENBTlg7QUFPSSxZQUFBLE9BQU8sRUFBRSxpQkFBQ0ssQ0FBRDtBQUFBLHFCQUFPZCxhQUFhLENBQUM7QUFBQ1MsZ0JBQUFBLEtBQUssRUFBRUssQ0FBQyxDQUFDQyxNQUFGLENBQVNOLEtBQWpCO0FBQXdCTyxnQkFBQUEsSUFBSSxFQUFFYixNQUE5QjtBQUFzQ0ksZ0JBQUFBLEtBQUssRUFBRTtBQUE3QyxlQUFELENBQXBCO0FBQUE7QUFQYjtBQURKLFVBbENKO0FBQUEsUUFESjs7QUFnREosU0FBSyxtQkFBTDtBQUNJLDBCQUNJO0FBQUssUUFBQSxTQUFTLEVBQUMsNENBQWY7QUFBQSwrQkFDSSxxQkFBQyxzQkFBRDtBQUFZLFVBQUEsTUFBTSxFQUFDLFlBQW5CO0FBQWdDLFVBQUEsS0FBSyxFQUFFVixnQkFBZ0IsQ0FBQ1ksS0FBeEQ7QUFBZ0UsVUFBQSxhQUFhLEVBQUUsdUJBQUNBLEtBQUQ7QUFBQSxtQkFBV1Ysa0JBQWtCLENBQUM7QUFBQ1UsY0FBQUEsS0FBSyxFQUFMQSxLQUFEO0FBQVFPLGNBQUFBLElBQUksRUFBRWI7QUFBZCxhQUFELENBQTdCO0FBQUE7QUFBL0U7QUFESixRQURKOztBQUtKLFNBQUssYUFBTDtBQUNJLFVBQUksQ0FBQ04sZ0JBQWdCLENBQUNZLEtBQXRCLEVBQ0laLGdCQUFnQixDQUFDWSxLQUFqQixHQUF5QixFQUF6QjtBQUVKWixNQUFBQSxnQkFBZ0IsQ0FBQ1ksS0FBakIsQ0FBdUIsR0FBdkIsSUFBOEJaLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixLQUErQixFQUE3RDtBQUNBWixNQUFBQSxnQkFBZ0IsQ0FBQ1ksS0FBakIsQ0FBdUIsR0FBdkIsSUFBOEJaLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixLQUErQixFQUE3RDtBQUNBWixNQUFBQSxnQkFBZ0IsQ0FBQ1ksS0FBakIsQ0FBdUIsR0FBdkIsSUFBOEJaLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixLQUErQjtBQUFFUyxRQUFBQSxFQUFFLEVBQUU7QUFBTixPQUE3RDtBQUNBLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBSyxVQUFBLFNBQVMsRUFBQyx5Q0FBZjtBQUFBLGlDQUNJLHFCQUFDLG9CQUFEO0FBQ0ksWUFBQSxLQUFLLEVBQUUsQ0FBQztBQUFFLG9CQUFNLElBQVI7QUFBYyx1QkFBUyxhQUF2QjtBQUFzQywwQkFBWSxPQUFsRDtBQUEyRCxzQkFBUSxhQUFuRTtBQUFrRix1QkFBUztBQUEzRixhQUFELEVBQW1HO0FBQUUsb0JBQU0sSUFBUjtBQUFjLHVCQUFTLGNBQXZCO0FBQXVDLDBCQUFZLE9BQW5EO0FBQTRELHNCQUFRLGFBQXBFO0FBQW1GLHVCQUFTO0FBQTVGLGFBQW5HLEVBQXNNO0FBQUUsb0JBQU0sSUFBUjtBQUFjLHVCQUFTLE9BQXZCO0FBQWdDLDBCQUFZLE9BQTVDO0FBQXFELHNCQUFRLGFBQTdEO0FBQTRFLHVCQUFTO0FBQXJGLGFBQXRNLEVBQWtTO0FBQUUsb0JBQU0sSUFBUjtBQUFjLHVCQUFTLFFBQXZCO0FBQWlDLDBCQUFZLE9BQTdDO0FBQXNELHNCQUFRLGFBQTlEO0FBQTZFLHVCQUFTO0FBQXRGLGFBQWxTLEVBQStYO0FBQUUsb0JBQU0sSUFBUjtBQUFjLHVCQUFTLElBQXZCO0FBQTZCLDBCQUFZLE9BQXpDO0FBQWtELHNCQUFRLGFBQTFEO0FBQXlFLHVCQUFTO0FBQWxGLGFBQS9YLENBRFg7QUFFSSxZQUFBLGFBQWEsRUFBRSxDQUFDckIsZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLEdBQXZCLENBQUQsQ0FGbkI7QUFHSSxZQUFBLGNBQWMsRUFBRSx3QkFBQ0gsSUFBRDtBQUFBLHFCQUFVRCxtQkFBbUIsQ0FBQztBQUFDQyxnQkFBQUEsSUFBSSxFQUFFQSxJQUFJLENBQUNJLFdBQVo7QUFBeUJILGdCQUFBQSxLQUFLLEVBQUU7QUFBaEMsZUFBRCxDQUE3QjtBQUFBLGFBSHBCO0FBSUksWUFBQSxNQUFNLEVBQUMsUUFKWDtBQUtJLFlBQUEsTUFBTSxFQUFDLFVBTFg7QUFNSSxZQUFBLFFBQVEsRUFBRSxDQUFDTCxpQkFBaUIsQ0FBQ08sS0FOakM7QUFPSSxZQUFBLFdBQVcsRUFBQyxrQkFQaEI7QUFRSSxZQUFBLE9BQU8sRUFBQyxVQVJaO0FBU0ksWUFBQSxJQUFJLEVBQUM7QUFUVDtBQURKLFVBREosZUFjSTtBQUFLLFVBQUEsU0FBUyxFQUFDLHlDQUFmO0FBQUEsaUNBQ0kscUJBQUMsb0JBQUQ7QUFDSSxZQUFBLEtBQUssRUFBRSxDQUFDO0FBQUUsb0JBQU0sV0FBUjtBQUFxQix1QkFBUyxLQUE5QjtBQUFxQywwQkFBWSxPQUFqRDtBQUEwRCxzQkFBUSxhQUFsRTtBQUFpRix1QkFBUztBQUExRixhQUFELEVBQWtHO0FBQUUsb0JBQU0sT0FBUjtBQUFpQix1QkFBUyxPQUExQjtBQUFtQywwQkFBWSxPQUEvQztBQUF3RCxzQkFBUSxhQUFoRTtBQUErRSx1QkFBUztBQUF4RixhQUFsRyxFQUFpTTtBQUFFLG9CQUFNLFNBQVI7QUFBbUIsdUJBQVMsU0FBNUI7QUFBdUMsMEJBQVksT0FBbkQ7QUFBNEQsc0JBQVEsYUFBcEU7QUFBbUYsdUJBQVM7QUFBNUYsYUFBak0sRUFBb1M7QUFBRSxvQkFBTSxNQUFSO0FBQWdCLHVCQUFTLE1BQXpCO0FBQWlDLDBCQUFZLE9BQTdDO0FBQXNELHNCQUFRLGFBQTlEO0FBQTZFLHVCQUFTO0FBQXRGLGFBQXBTLEVBQWlZO0FBQUUsb0JBQU0sTUFBUjtBQUFnQix1QkFBUyxNQUF6QjtBQUFpQywwQkFBWSxPQUE3QztBQUFzRCxzQkFBUSxhQUE5RDtBQUE2RSx1QkFBUztBQUF0RixhQUFqWSxFQUE4ZDtBQUFFLG9CQUFNLE1BQVI7QUFBZ0IsdUJBQVMsTUFBekI7QUFBaUMsMEJBQVksT0FBN0M7QUFBc0Qsc0JBQVEsYUFBOUQ7QUFBNkUsdUJBQVM7QUFBdEYsYUFBOWQsQ0FEWDtBQUVJLFlBQUEsYUFBYSxFQUFFLENBQUNaLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixDQUFELENBRm5CO0FBR0ksWUFBQSxjQUFjLEVBQUUsd0JBQUNILElBQUQ7QUFBQSxxQkFBVUQsbUJBQW1CLENBQUM7QUFBQ0MsZ0JBQUFBLElBQUksRUFBRUEsSUFBSSxDQUFDSSxXQUFaO0FBQXlCSCxnQkFBQUEsS0FBSyxFQUFFO0FBQWhDLGVBQUQsQ0FBN0I7QUFBQSxhQUhwQjtBQUlJLFlBQUEsTUFBTSxFQUFDLFFBSlg7QUFLSSxZQUFBLE1BQU0sRUFBQyxVQUxYO0FBTUksWUFBQSxRQUFRLEVBQUUsQ0FBQ0wsaUJBQWlCLENBQUNPLEtBTmpDO0FBT0ksWUFBQSxXQUFXLEVBQUMsa0JBUGhCO0FBUUksWUFBQSxPQUFPLEVBQUMsVUFSWjtBQVNJLFlBQUEsSUFBSSxFQUFDO0FBVFQ7QUFESixVQWRKLGVBMkJJO0FBQUssVUFBQSxTQUFTLEVBQUMseUNBQWY7QUFBQSxpQ0FDSSxxQkFBQyxvQkFBRDtBQUNJLFlBQUEsS0FBSyxFQUFFWixnQkFBZ0IsQ0FBQ2MsbUJBRDVCO0FBRUksWUFBQSxhQUFhLEVBQUUsQ0FBQ2QsZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLEdBQXZCLEVBQTRCUyxFQUE3QixDQUZuQjtBQUdJLFlBQUEsY0FBYyxFQUFFLHdCQUFDWixJQUFEO0FBQUEscUJBQVVELG1CQUFtQixDQUFDO0FBQUNDLGdCQUFBQSxJQUFJLEVBQUVBLElBQUksQ0FBQ0ksV0FBWjtBQUF5QkgsZ0JBQUFBLEtBQUssRUFBRTtBQUFoQyxlQUFELENBQTdCO0FBQUEsYUFIcEI7QUFJSSxZQUFBLE1BQU0sRUFBQyxRQUpYO0FBS0ksWUFBQSxNQUFNLEVBQUMsVUFMWDtBQU1JLFlBQUEsUUFBUSxFQUFFLENBQUNMLGlCQUFpQixDQUFDTyxLQU5qQztBQU9JLFlBQUEsV0FBVyxFQUFDLGtCQVBoQjtBQVFJLFlBQUEsT0FBTyxFQUFDLFVBUlo7QUFTSSxZQUFBLElBQUksRUFBQztBQVRUO0FBREosVUEzQko7QUFBQSxRQURKOztBQTJDSixTQUFLLHVCQUFMO0FBQ0ksVUFBSSxDQUFDWixnQkFBZ0IsQ0FBQ1ksS0FBdEIsRUFDSVosZ0JBQWdCLENBQUNZLEtBQWpCLEdBQXlCLEVBQXpCO0FBRUpaLE1BQUFBLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixJQUE4QlosZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLEdBQXZCLEtBQStCLEVBQTdEO0FBQ0FaLE1BQUFBLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixJQUE4QlosZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLEdBQXZCLEtBQStCLEVBQTdEO0FBQ0EsMEJBQ0k7QUFBQSxnQ0FDSTtBQUFLLFVBQUEsU0FBUyxFQUFDLG1EQUFmO0FBQUEsaUNBQ0kscUJBQUMsb0JBQUQ7QUFDSSxZQUFBLEtBQUssRUFBRSxDQUFDO0FBQUUsb0JBQU0sS0FBUjtBQUFlLHVCQUFTLEtBQXhCO0FBQStCLDBCQUFZLE9BQTNDO0FBQW9ELHNCQUFRLHVCQUE1RDtBQUFxRix1QkFBUztBQUE5RixhQUFELEVBQXNHO0FBQUUsb0JBQU0sT0FBUjtBQUFpQix1QkFBUyxPQUExQjtBQUFtQywwQkFBWSxPQUEvQztBQUF3RCxzQkFBUSx1QkFBaEU7QUFBeUYsdUJBQVM7QUFBbEcsYUFBdEcsRUFBK007QUFBRSxvQkFBTSxTQUFSO0FBQW1CLHVCQUFTLFNBQTVCO0FBQXVDLDBCQUFZLE9BQW5EO0FBQTRELHNCQUFRLHVCQUFwRTtBQUE2Rix1QkFBUztBQUF0RyxhQUEvTSxFQUE0VDtBQUFFLG9CQUFNLE1BQVI7QUFBZ0IsdUJBQVMsTUFBekI7QUFBaUMsMEJBQVksT0FBN0M7QUFBc0Qsc0JBQVEsdUJBQTlEO0FBQXVGLHVCQUFTO0FBQWhHLGFBQTVULEVBQW1hO0FBQUUsb0JBQU0sTUFBUjtBQUFnQix1QkFBUyxNQUF6QjtBQUFpQywwQkFBWSxPQUE3QztBQUFzRCxzQkFBUSx1QkFBOUQ7QUFBdUYsdUJBQVM7QUFBaEcsYUFBbmEsRUFBMGdCO0FBQUUsb0JBQU0sTUFBUjtBQUFnQix1QkFBUyxNQUF6QjtBQUFpQywwQkFBWSxPQUE3QztBQUFzRCxzQkFBUSx1QkFBOUQ7QUFBdUYsdUJBQVM7QUFBaEcsYUFBMWdCLENBRFg7QUFFSSxZQUFBLGFBQWEsRUFBRSxDQUFDWixnQkFBZ0IsQ0FBQ1ksS0FBakIsQ0FBdUIsR0FBdkIsQ0FBRCxDQUZuQjtBQUdJLFlBQUEsY0FBYyxFQUFFLHdCQUFDSCxJQUFEO0FBQUEscUJBQVVELG1CQUFtQixDQUFDO0FBQUNDLGdCQUFBQSxJQUFJLEVBQUVBLElBQUksQ0FBQ0ksV0FBWjtBQUF5QkgsZ0JBQUFBLEtBQUssRUFBRTtBQUFoQyxlQUFELENBQTdCO0FBQUEsYUFIcEI7QUFJSSxZQUFBLE1BQU0sRUFBQyxRQUpYO0FBS0ksWUFBQSxNQUFNLEVBQUMsVUFMWDtBQU1JLFlBQUEsUUFBUSxFQUFFLENBQUNMLGlCQUFpQixDQUFDTyxLQU5qQztBQU9JLFlBQUEsV0FBVyxFQUFDLGtCQVBoQjtBQVFJLFlBQUEsT0FBTyxFQUFDLFVBUlo7QUFTSSxZQUFBLElBQUksRUFBQztBQVRUO0FBREosVUFESixlQWNJO0FBQUE7QUFBQSxVQWRKLGVBZUk7QUFBSyxVQUFBLFNBQVMsRUFBQyxtREFBZjtBQUFBLGlDQUNJLHFCQUFDLG9CQUFEO0FBQ0ksWUFBQSxLQUFLLEVBQUVaLGdCQUFnQixDQUFDYyxtQkFENUI7QUFFSSxZQUFBLGFBQWEsRUFBRSxDQUFDZCxnQkFBZ0IsQ0FBQ1ksS0FBakIsQ0FBdUIsR0FBdkIsQ0FBRCxDQUZuQjtBQUdJLFlBQUEsY0FBYyxFQUFFLHdCQUFDSCxJQUFEO0FBQUEscUJBQVVELG1CQUFtQixDQUFDO0FBQUNDLGdCQUFBQSxJQUFJLEVBQUVBLElBQUksQ0FBQ0ksV0FBWjtBQUF5QkgsZ0JBQUFBLEtBQUssRUFBRTtBQUFoQyxlQUFELENBQTdCO0FBQUEsYUFIcEI7QUFJSSxZQUFBLE1BQU0sRUFBQyxRQUpYO0FBS0ksWUFBQSxNQUFNLEVBQUMsVUFMWDtBQU1JLFlBQUEsUUFBUSxFQUFFLENBQUNMLGlCQUFpQixDQUFDTyxLQU5qQztBQU9JLFlBQUEsV0FBVyxFQUFDLGtCQVBoQjtBQVFJLFlBQUEsT0FBTyxFQUFDLFVBUlo7QUFTSSxZQUFBLElBQUksRUFBQztBQVRUO0FBREosVUFmSjtBQUFBLFFBREo7O0FBK0JKLFNBQUssd0JBQUw7QUFDSSxVQUFJLENBQUNaLGdCQUFnQixDQUFDWSxLQUF0QixFQUNJWixnQkFBZ0IsQ0FBQ1ksS0FBakIsR0FBeUIsRUFBekI7QUFFSlosTUFBQUEsZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLEdBQXZCLElBQThCWixnQkFBZ0IsQ0FBQ1ksS0FBakIsQ0FBdUIsR0FBdkIsS0FBK0IsR0FBN0Q7QUFDQVosTUFBQUEsZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLEdBQXZCLElBQThCWixnQkFBZ0IsQ0FBQ1ksS0FBakIsQ0FBdUIsR0FBdkIsS0FBK0IsRUFBN0Q7QUFDQVosTUFBQUEsZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLEdBQXZCLElBQThCWixnQkFBZ0IsQ0FBQ1ksS0FBakIsQ0FBdUIsR0FBdkIsS0FBK0IsRUFBN0Q7QUFDQVosTUFBQUEsZ0JBQWdCLENBQUNZLEtBQWpCLENBQXVCLEdBQXZCLElBQThCWixnQkFBZ0IsQ0FBQ1ksS0FBakIsQ0FBdUIsR0FBdkIsS0FBK0IsRUFBN0Q7QUFDQSwwQkFDSTtBQUFBLGdDQUNJO0FBQUssVUFBQSxTQUFTLEVBQUMsaURBQWY7QUFBQSxpQ0FDSSxxQkFBQyxpQkFBRDtBQUNJLFlBQUEsR0FBRyxFQUFFLENBRFQ7QUFFSSxZQUFBLElBQUksRUFBRSxDQUZWO0FBR0ksWUFBQSxJQUFJLEVBQUMsUUFIVDtBQUlJLFlBQUEsS0FBSyxFQUFFWixnQkFBZ0IsQ0FBQ1ksS0FBakIsQ0FBdUIsR0FBdkIsQ0FKWDtBQUtJLFlBQUEsT0FBTyxFQUFFLGlCQUFDSyxDQUFEO0FBQUEscUJBQU9kLGFBQWEsQ0FBQztBQUFDUyxnQkFBQUEsS0FBSyxFQUFFSyxDQUFDLENBQUNDLE1BQUYsQ0FBU04sS0FBakI7QUFBd0JPLGdCQUFBQSxJQUFJLEVBQUViLE1BQTlCO0FBQXNDSSxnQkFBQUEsS0FBSyxFQUFFO0FBQTdDLGVBQUQsQ0FBcEI7QUFBQTtBQUxiO0FBREosVUFESixlQVVJO0FBQUssVUFBQSxTQUFTLEVBQUMsb0RBQWY7QUFBQSxpQ0FDSSxxQkFBQyxvQkFBRDtBQUNJLFlBQUEsS0FBSyxFQUFFLENBQUM7QUFBRSxvQkFBTSxLQUFSO0FBQWUsdUJBQVMsS0FBeEI7QUFBK0IsMEJBQVksT0FBM0M7QUFBb0Qsc0JBQVEsd0JBQTVEO0FBQXNGLHVCQUFTO0FBQS9GLGFBQUQsRUFBdUc7QUFBRSxvQkFBTSxPQUFSO0FBQWlCLHVCQUFTLE9BQTFCO0FBQW1DLDBCQUFZLE9BQS9DO0FBQXdELHNCQUFRLHdCQUFoRTtBQUEwRix1QkFBUztBQUFuRyxhQUF2RyxFQUFpTjtBQUFFLG9CQUFNLFNBQVI7QUFBbUIsdUJBQVMsU0FBNUI7QUFBdUMsMEJBQVksT0FBbkQ7QUFBNEQsc0JBQVEsd0JBQXBFO0FBQThGLHVCQUFTO0FBQXZHLGFBQWpOLEVBQStUO0FBQUUsb0JBQU0sTUFBUjtBQUFnQix1QkFBUyxNQUF6QjtBQUFpQywwQkFBWSxPQUE3QztBQUFzRCxzQkFBUSx3QkFBOUQ7QUFBd0YsdUJBQVM7QUFBakcsYUFBL1QsRUFBdWE7QUFBRSxvQkFBTSxNQUFSO0FBQWdCLHVCQUFTLE1BQXpCO0FBQWlDLDBCQUFZLE9BQTdDO0FBQXNELHNCQUFRLHdCQUE5RDtBQUF3Rix1QkFBUztBQUFqRyxhQUF2YSxFQUErZ0I7QUFBRSxvQkFBTSxNQUFSO0FBQWdCLHVCQUFTLE1BQXpCO0FBQWlDLDBCQUFZLE9BQTdDO0FBQXNELHNCQUFRLHdCQUE5RDtBQUF3Rix1QkFBUztBQUFqRyxhQUEvZ0IsQ0FEWDtBQUVJLFlBQUEsYUFBYSxFQUFFLENBQUNWLGdCQUFnQixDQUFDWSxLQUFqQixDQUF1QixHQUF2QixDQUFELENBRm5CO0FBR0ksWUFBQSxjQUFjLEVBQUUsd0JBQUNILElBQUQ7QUFBQSxxQkFBVUQsbUJBQW1CLENBQUM7QUFBQ0MsZ0JBQUFBLElBQUksRUFBRUEsSUFBSSxDQUFDSSxXQUFaO0FBQXlCSCxnQkFBQUEsS0FBSyxFQUFFO0FBQWhDLGVBQUQsQ0FBN0I7QUFBQSxhQUhwQjtBQUlJLFlBQUEsTUFBTSxFQUFDLFFBSlg7QUFLSSxZQUFBLE1BQU0sRUFBQyxVQUxYO0FBTUksWUFBQSxRQUFRLEVBQUUsQ0FBQ0wsaUJBQWlCLENBQUNPLEtBTmpDO0FBT0ksWUFBQSxXQUFXLEVBQUMsa0JBUGhCO0FBUUksWUFBQSxPQUFPLEVBQUMsVUFSWjtBQVNJLFlBQUEsSUFBSSxFQUFDO0FBVFQ7QUFESixVQVZKLGVBdUJJO0FBQUssVUFBQSxTQUFTLEVBQUMsb0RBQWY7QUFBQSxpQ0FDSSxxQkFBQyxvQkFBRDtBQUNJLFlBQUEsS0FBSyxFQUFFLENBQUM7QUFBRSxvQkFBTSxRQUFSO0FBQWtCLHVCQUFTLFFBQTNCO0FBQXFDLDBCQUFZLE9BQWpEO0FBQTBELHNCQUFRLHdCQUFsRTtBQUE0Rix1QkFBUztBQUFyRyxhQUFELEVBQTZHO0FBQUUsb0JBQU0sT0FBUjtBQUFpQix1QkFBUyxPQUExQjtBQUFtQywwQkFBWSxPQUEvQztBQUF3RCxzQkFBUSx3QkFBaEU7QUFBMEYsdUJBQVM7QUFBbkcsYUFBN0csRUFBdU47QUFBRSxvQkFBTSxpQkFBUjtBQUEyQix1QkFBUyxpQkFBcEM7QUFBdUQsMEJBQVksT0FBbkU7QUFBNEUsc0JBQVEsd0JBQXBGO0FBQThHLHVCQUFTO0FBQXZILGFBQXZOLENBRFg7QUFFSSxZQUFBLGFBQWEsRUFBRSxDQUFDWixnQkFBZ0IsQ0FBQ1ksS0FBakIsQ0FBdUIsR0FBdkIsQ0FBRCxDQUZuQjtBQUdJLFlBQUEsY0FBYyxFQUFFLHdCQUFDSCxJQUFEO0FBQUEscUJBQVVELG1CQUFtQixDQUFDO0FBQUNDLGdCQUFBQSxJQUFJLEVBQUVBLElBQUksQ0FBQ0ksV0FBWjtBQUF5QkgsZ0JBQUFBLEtBQUssRUFBRTtBQUFoQyxlQUFELENBQTdCO0FBQUEsYUFIcEI7QUFJSSxZQUFBLE1BQU0sRUFBQyxRQUpYO0FBS0ksWUFBQSxNQUFNLEVBQUMsVUFMWDtBQU1JLFlBQUEsUUFBUSxFQUFFLENBQUNMLGlCQUFpQixDQUFDTyxLQU5qQztBQU9JLFlBQUEsV0FBVyxFQUFDLGtCQVBoQjtBQVFJLFlBQUEsT0FBTyxFQUFDLFVBUlo7QUFTSSxZQUFBLElBQUksRUFBQztBQVRUO0FBREosVUF2QkosZUFvQ0k7QUFBSyxVQUFBLFNBQVMsRUFBQyxvREFBZjtBQUFBLGlDQUNJLHFCQUFDLG9CQUFEO0FBQ0ksWUFBQSxLQUFLLEVBQUVaLGdCQUFnQixDQUFDYyxtQkFENUI7QUFFSSxZQUFBLGFBQWEsRUFBRSxDQUFDZCxnQkFBZ0IsQ0FBQ1ksS0FBakIsQ0FBdUIsR0FBdkIsQ0FBRCxDQUZuQjtBQUdJLFlBQUEsY0FBYyxFQUFFLHdCQUFDSCxJQUFEO0FBQUEscUJBQVVELG1CQUFtQixDQUFDO0FBQUNDLGdCQUFBQSxJQUFJLEVBQUVBLElBQUksQ0FBQ0ksV0FBWjtBQUF5QkgsZ0JBQUFBLEtBQUssRUFBRTtBQUFoQyxlQUFELENBQTdCO0FBQUEsYUFIcEI7QUFJSSxZQUFBLE1BQU0sRUFBQyxRQUpYO0FBS0ksWUFBQSxNQUFNLEVBQUMsVUFMWDtBQU1JLFlBQUEsUUFBUSxFQUFFLENBQUNMLGlCQUFpQixDQUFDTyxLQU5qQztBQU9JLFlBQUEsV0FBVyxFQUFDLGtCQVBoQjtBQVFJLFlBQUEsT0FBTyxFQUFDLFVBUlo7QUFTSSxZQUFBLElBQUksRUFBQztBQVRUO0FBREosVUFwQ0o7QUFBQSxRQURKOztBQW9ESjtBQUNJO0FBaFhSO0FBa1hILENBM1hNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcIi4uLy4uLy4uL0RhdGVQaWNrZXIvRGF0ZVBpY2tlclwiO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSBcIi4uLy4uLy4uL1RleHRBcmVhL1RleHRBcmVhXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vLi4vLi4vRHJvcGRvd24vRHJvcGRvd25cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi8uLi8uLi9JbnB1dC9JbnB1dFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlucHV0VmFsdWUgPSAoc3RhdGUsIGNvbmRpdGlvbk9wdGlvbnMsIGl0ZW1DbGlja2VkLCBvbkRhdGVQaWNrZXJDaGFuZ2UsIGlucHV0VmFsdWVTZXQsIHRleHRBcmVhVmFsdWVTZXQpID0+IHtcclxuICAgIGNvbnN0IHsgZHJvcGRvd25zSXNBY3RpdmUgfSA9IHN0YXRlO1xyXG4gICAgY29uc3QgeyAgb3BlcmF0b3I6IHsgZWRpdG9yIH0gfSA9IGNvbmRpdGlvbk9wdGlvbnM7XHJcblxyXG4gICAgY29uc3QgZHJvcGRvd25WYWx1ZUhhbmRsZSA9ICh7aXRlbSwgaW5kZXh9KSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0l0ZW0gPSBpbmRleCA/IHsuLi5pdGVtLCBpbmRleH0gOiB7Li4uaXRlbX07IFxyXG4gICAgICAgIGl0ZW1DbGlja2VkKG5ld0l0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZWRpdG9yKSB7XHJcbiAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFuZXIgYm9vbGVhbi1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W3sgXCJpZFwiOiBcInRydWVcIiwgXCJsYWJlbFwiOiBcInRydWVcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIgfSwgeyBcImlkXCI6IFwiZmFsc2VcIiwgXCJsYWJlbFwiOiBcImZhbHNlXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiIH1dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtbY29uZGl0aW9uT3B0aW9ucy52YWx1ZV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZHJvcGRvd25zSXNBY3RpdmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS1jaG9vc2UgdmFsdWUtLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkPXsoaXRlbSkgPT4gZHJvcGRvd25WYWx1ZUhhbmRsZSh7aXRlbTogaXRlbS5jbGlja2VkSXRlbX0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlIFwiY2hvaWNlX2ZpZWxkX25hbWVzXCI6XHJcbiAgICAgICAgY2FzZSBcImNob2ljZVwiOlxyXG4gICAgICAgIGNhc2UgXCJjaG9pY2VfZHluYW1pY1wiOlxyXG4gICAgICAgIGNhc2UgXCJyZWZlcmVuY2VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIGNob2ljZS1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17Y29uZGl0aW9uT3B0aW9ucy52YWx1ZUFkZGl0aW9uYWxEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtbY29uZGl0aW9uT3B0aW9ucy52YWx1ZV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZHJvcGRvd25zSXNBY3RpdmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS1jaG9vc2UgdmFsdWUtLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkPXsoaXRlbSkgPT4gZHJvcGRvd25WYWx1ZUhhbmRsZSh7aXRlbTogaXRlbS5jbGlja2VkSXRlbX0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlIFwiY2hvaWNlX211bHRpcGxlXCI6XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW1zID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZSA/IGNvbmRpdGlvbk9wdGlvbnMudmFsdWUuc3BsaXQoXCIsXCIpIDogW1wiXCJdO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgY2hvaWNlLW11bHRpcGxlLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtjb25kaXRpb25PcHRpb25zLnZhbHVlQWRkaXRpb25hbERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3NlbGVjdGVkSXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cIm11bHRpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkcm9wZG93bnNJc0FjdGl2ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLWNob29zZSB2YWx1ZS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQ9eyhpdGVtKSA9PiBkcm9wZG93blZhbHVlSGFuZGxlKHtpdGVtOiBpdGVtLmNsaWNrZWRJdGVtfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIHN0cmluZy1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uZGl0aW9uT3B0aW9ucy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGUpID0+IGlucHV0VmFsdWVTZXQoe3ZhbHVlOiBlLnRhcmdldC52YWx1ZSwgdHlwZTogZWRpdG9yLCBpbmRleDogMH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlIFwiaW50ZWdlclwiOlxyXG4gICAgICAgIGNhc2UgXCJkZWNpbWFsXCI6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBudW1iZXItaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXtjb25kaXRpb25PcHRpb25zLm9wZXJhdG9yLmVkaXRvciA9PT0gJ2ludGVnZXInID8gMSA6IDAuMDAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbmRpdGlvbk9wdGlvbnMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhlKSA9PiBpbnB1dFZhbHVlU2V0KHt2YWx1ZTogZS50YXJnZXQudmFsdWUsIHR5cGU6IGVkaXRvciwgaW5kZXg6IDB9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnYmV0d2Vlbl9maWVsZCc6XHJcbiAgICAgICAgICAgIGlmICghY29uZGl0aW9uT3B0aW9ucy52YWx1ZSlcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWU9IHt9XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXSB8fCAnJztcclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddIHx8ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBiZXR3ZWVuLWZpZWxkLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHZhbHVlPXtjb25kaXRpb25PcHRpb25zLnZhbHVlWycwJ119IGZvcm1hdD1cIllZWVktTU0tRERcIiBvblZhbHVlQ2hhbmdlPXsoaXRlbSkgPT4gb25EYXRlUGlja2VyQ2hhbmdlKHt2YWx1ZTogaXRlbSwgdHlwZTogZWRpdG9yLCBpbmRleDogMH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPmFuZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBiZXR3ZWVuLWZpZWxkLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHZhbHVlPXtjb25kaXRpb25PcHRpb25zLnZhbHVlWycxJ119IGZvcm1hdD1cIllZWVktTU0tRERcIiBvblZhbHVlQ2hhbmdlPXsoaXRlbSkgPT4gb25EYXRlUGlja2VyQ2hhbmdlKHt2YWx1ZTogaXRlbSwgdHlwZTogZWRpdG9yLCBpbmRleDogMX0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSBcInRleHRhcmVhXCI6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciB0ZXh0YXJlYS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvcmVzaXplPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPXs1MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUudGV4dEFyZWFWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiB0ZXh0QXJlYVZhbHVlU2V0KHt2YWx1ZTogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSBcInJlbGF0aXZlX2ZpZWxkXCI6XHJcbiAgICAgICAgICAgIGlmICghY29uZGl0aW9uT3B0aW9ucy52YWx1ZSlcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWUgPSB7fVxyXG5cclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMCddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMCddIHx8ICcnO1xyXG4gICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlWycxJ10gPSBjb25kaXRpb25PcHRpb25zLnZhbHVlWycxJ10gfHwgJyc7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzInXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzInXSB8fCAnJztcclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMyddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMyddIHx8ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciByZWxhdGl2ZS1maWVsZC1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbeyBcImlkXCI6IFwiYWZ0ZXJcIiwgXCJsYWJlbFwiOiBcImFmdGVyXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJyZWxhdGl2ZS1maWVsZFwiLCBcImluZGV4XCI6IFwiMFwiIH0sIHsgXCJpZFwiOiBcImJlZm9yZVwiLCBcImxhYmVsXCI6IFwiYmVmb3JlXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJyZWxhdGl2ZS1maWVsZFwiLCBcImluZGV4XCI6IFwiMFwiIH1dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17W2NvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3RlZD17KGl0ZW0pID0+IGRyb3Bkb3duVmFsdWVIYW5kbGUoe2l0ZW06IGl0ZW0uY2xpY2tlZEl0ZW0sIGluZGV4OiAwfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q9XCJzaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkcm9wZG93bnNJc0FjdGl2ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS1jaG9vc2UgdmFsdWUtLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciByZWxhdGl2ZS1maWVsZC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb25kaXRpb25PcHRpb25zLnZhbHVlWycxJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZSkgPT4gaW5wdXRWYWx1ZVNldCh7dmFsdWU6IGUudGFyZ2V0LnZhbHVlLCB0eXBlOiBlZGl0b3IsIGluZGV4OiAxfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgcmVsYXRpdmUtZmllbGQtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W3sgXCJpZFwiOiBcIm1pbnV0ZVwiLCBcImxhYmVsXCI6IFwiTWludXRlc1wiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwicmVsYXRpdmUtZmllbGRcIiwgXCJpbmRleFwiOiBcIjJcIiB9LCB7IFwiaWRcIjogXCJob3VyXCIsIFwibGFiZWxcIjogXCJIb3Vyc1wiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwicmVsYXRpdmUtZmllbGRcIiwgXCJpbmRleFwiOiBcIjJcIiB9LCB7IFwiaWRcIjogXCJkYXlvZndlZWtcIiwgXCJsYWJlbFwiOiBcIkRheXNcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInJlbGF0aXZlLWZpZWxkXCIsIFwiaW5kZXhcIjogXCIyXCIgfSwgeyBcImlkXCI6IFwibW9udGhcIiwgXCJsYWJlbFwiOiBcIk1vbnRoc1wiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwicmVsYXRpdmUtZmllbGRcIiwgXCJpbmRleFwiOiBcIjJcIiB9LCB7IFwiaWRcIjogXCJxdWFydGVyXCIsIFwibGFiZWxcIjogXCJRdWFydGVyc1wiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwicmVsYXRpdmUtZmllbGRcIiwgXCJpbmRleFwiOiBcIjJcIiB9LCB7IFwiaWRcIjogXCJ5ZWFyXCIsIFwibGFiZWxcIjogXCJZZWFyc1wiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwicmVsYXRpdmUtZmllbGRcIiwgXCJpbmRleFwiOiBcIjJcIiB9XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e1tjb25kaXRpb25PcHRpb25zLnZhbHVlWycyJ11dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQ9eyhpdGVtKSA9PiBkcm9wZG93blZhbHVlSGFuZGxlKHtpdGVtOiBpdGVtLmNsaWNrZWRJdGVtLCBpbmRleDogMn0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0PVwic2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZHJvcGRvd25zSXNBY3RpdmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tY2hvb3NlIHZhbHVlLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgcmVsYXRpdmUtZmllbGQtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W3sgXCJpZFwiOiBcImFnb1wiLCBcImxhYmVsXCI6IFwiYWdvXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJyZWxhdGl2ZS1maWVsZFwiLCBcImluZGV4XCI6IFwiM1wiIH0sIHsgXCJpZFwiOiBcImFoZWFkXCIsIFwibGFiZWxcIjogXCJmcm9tIG5vd1wiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwicmVsYXRpdmUtZmllbGRcIiwgXCJpbmRleFwiOiBcIjNcIiB9XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e1tjb25kaXRpb25PcHRpb25zLnZhbHVlWyczJ11dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQ9eyhpdGVtKSA9PiBkcm9wZG93blZhbHVlSGFuZGxlKHtpdGVtOiBpdGVtLmNsaWNrZWRJdGVtLCBpbmRleDogM30pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0PVwic2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZHJvcGRvd25zSXNBY3RpdmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tY2hvb3NlIHZhbHVlLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlIFwiZ2xpZGVfZHVyYXRpb25cIjpcclxuICAgICAgICAgICAgaWYgKCFjb25kaXRpb25PcHRpb25zLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZSA9IHt9XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXSB8fCAnJztcclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddIHx8ICcnO1xyXG4gICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlWycyJ10gPSBjb25kaXRpb25PcHRpb25zLnZhbHVlWycyJ10gfHwgJyc7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzMnXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzMnXSB8fCAnJztcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgZ2xpZGUtZHVyYXRpb24taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRheXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs5OTk5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbmRpdGlvbk9wdGlvbnMudmFsdWVbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZSkgPT4gaW5wdXRWYWx1ZVNldCh7dmFsdWU6IGUudGFyZ2V0LnZhbHVlLCB0eXBlOiBlZGl0b3IsIGluZGV4OiAwfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgZ2xpZGUtZHVyYXRpb24taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhvdXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MjN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uZGl0aW9uT3B0aW9ucy52YWx1ZVsxXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhlKSA9PiBpbnB1dFZhbHVlU2V0KHt2YWx1ZTogZS50YXJnZXQudmFsdWUsIHR5cGU6IGVkaXRvciwgaW5kZXg6IDF9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBnbGlkZS1kdXJhdGlvbi1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWludXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezU5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbmRpdGlvbk9wdGlvbnMudmFsdWVbMl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZSkgPT4gaW5wdXRWYWx1ZVNldCh7dmFsdWU6IGUudGFyZ2V0LnZhbHVlLCB0eXBlOiBlZGl0b3IsIGluZGV4OiAyfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgZ2xpZGUtZHVyYXRpb24taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlY29uZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs1OX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb25kaXRpb25PcHRpb25zLnZhbHVlWzNdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGUpID0+IGlucHV0VmFsdWVTZXQoe3ZhbHVlOiBlLnRhcmdldC52YWx1ZSwgdHlwZTogZWRpdG9yLCBpbmRleDogM30pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSBcImdsaWRlX2RhdGVfY2hvaWNlXCI6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBnbGlkZS1kYXRlLWNob2ljZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIGZvcm1hdD1cIllZWVktTU0tRERcIiB2YWx1ZT17Y29uZGl0aW9uT3B0aW9ucy52YWx1ZX0gIG9uVmFsdWVDaGFuZ2U9eyh2YWx1ZSkgPT4gb25EYXRlUGlja2VyQ2hhbmdlKHt2YWx1ZSwgdHlwZTogZWRpdG9yfSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICd0cmVuZF9maWVsZCc6XHJcbiAgICAgICAgICAgIGlmICghY29uZGl0aW9uT3B0aW9ucy52YWx1ZSlcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWUgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXSB8fCAnJztcclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddIHx8ICcnO1xyXG4gICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlWycyJ10gPSBjb25kaXRpb25PcHRpb25zLnZhbHVlWycyJ10gfHwgeyBpZDogJycgfTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgdHJlbmQtZmllbGQtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W3sgXCJpZFwiOiBcIkdFXCIsIFwibGFiZWxcIjogXCJvbiBvciBhZnRlclwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwidHJlbmRfZmllbGRcIiwgXCJpbmRleFwiOiBcIjBcIiB9LCB7IFwiaWRcIjogXCJMRVwiLCBcImxhYmVsXCI6IFwib24gb3IgYmVmb3JlXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJ0cmVuZF9maWVsZFwiLCBcImluZGV4XCI6IFwiMFwiIH0sIHsgXCJpZFwiOiBcIkdUXCIsIFwibGFiZWxcIjogXCJhZnRlclwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwidHJlbmRfZmllbGRcIiwgXCJpbmRleFwiOiBcIjBcIiB9LCB7IFwiaWRcIjogXCJMVFwiLCBcImxhYmVsXCI6IFwiYmVmb3JlXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJ0cmVuZF9maWVsZFwiLCBcImluZGV4XCI6IFwiMFwiIH0sIHsgXCJpZFwiOiBcIkVFXCIsIFwibGFiZWxcIjogXCJvblwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwidHJlbmRfZmllbGRcIiwgXCJpbmRleFwiOiBcIjBcIiB9XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e1tjb25kaXRpb25PcHRpb25zLnZhbHVlWycwJ11dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQ9eyhpdGVtKSA9PiBkcm9wZG93blZhbHVlSGFuZGxlKHtpdGVtOiBpdGVtLmNsaWNrZWRJdGVtLCBpbmRleDogMH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0PVwic2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaD1cImNvbnRhaW5zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZHJvcGRvd25zSXNBY3RpdmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tY2hvb3NlIHZhbHVlLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgdHJlbmQtZmllbGQtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W3sgXCJpZFwiOiBcImRheW9md2Vla1wiLCBcImxhYmVsXCI6IFwiZGF5XCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJ0cmVuZF9maWVsZFwiLCBcImluZGV4XCI6IFwiMVwiIH0sIHsgXCJpZFwiOiBcIm1vbnRoXCIsIFwibGFiZWxcIjogXCJtb250aFwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwidHJlbmRfZmllbGRcIiwgXCJpbmRleFwiOiBcIjFcIiB9LCB7IFwiaWRcIjogXCJxdWFydGVyXCIsIFwibGFiZWxcIjogXCJxdWFydGVyXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJ0cmVuZF9maWVsZFwiLCBcImluZGV4XCI6IFwiMVwiIH0sIHsgXCJpZFwiOiBcInllYXJcIiwgXCJsYWJlbFwiOiBcInllYXJcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInRyZW5kX2ZpZWxkXCIsIFwiaW5kZXhcIjogXCIxXCIgfSwgeyBcImlkXCI6IFwid2Vla1wiLCBcImxhYmVsXCI6IFwid2Vla1wiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwidHJlbmRfZmllbGRcIiwgXCJpbmRleFwiOiBcIjFcIiB9LCB7IFwiaWRcIjogXCJob3VyXCIsIFwibGFiZWxcIjogXCJob3VyXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJ0cmVuZF9maWVsZFwiLCBcImluZGV4XCI6IFwiMVwiIH1dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17W2NvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzEnXV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3RlZD17KGl0ZW0pID0+IGRyb3Bkb3duVmFsdWVIYW5kbGUoe2l0ZW06IGl0ZW0uY2xpY2tlZEl0ZW0sIGluZGV4OiAxfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q9XCJzaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoPVwiY29udGFpbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkcm9wZG93bnNJc0FjdGl2ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS1jaG9vc2UgdmFsdWUtLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciB0cmVuZC1maWVsZC1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtjb25kaXRpb25PcHRpb25zLnZhbHVlQWRkaXRpb25hbERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtbY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMiddLmlkXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkPXsoaXRlbSkgPT4gZHJvcGRvd25WYWx1ZUhhbmRsZSh7aXRlbTogaXRlbS5jbGlja2VkSXRlbSwgaW5kZXg6IDJ9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g9XCJjb250YWluc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWRyb3Bkb3duc0lzQWN0aXZlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLWNob29zZSB2YWx1ZS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSBcImdsaWRlX2RhdGVfZXF1aXZhbGVudFwiOlxyXG4gICAgICAgICAgICBpZiAoIWNvbmRpdGlvbk9wdGlvbnMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlID0ge307XHJcblxyXG4gICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlWycwJ10gPSBjb25kaXRpb25PcHRpb25zLnZhbHVlWycwJ10gfHwgJyc7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzEnXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzEnXSB8fCAnJztcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgZ2xpZGUtZGF0ZS1lcXVpdmFsZW50LWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1t7IFwiaWRcIjogXCJkYXlcIiwgXCJsYWJlbFwiOiBcImRheVwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwiZ2xpZGVfZGF0ZV9lcXVpdmFsZW50XCIsIFwiaW5kZXhcIjogXCIwXCIgfSwgeyBcImlkXCI6IFwibW9udGhcIiwgXCJsYWJlbFwiOiBcIm1vbnRoXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJnbGlkZV9kYXRlX2VxdWl2YWxlbnRcIiwgXCJpbmRleFwiOiBcIjBcIiB9LCB7IFwiaWRcIjogXCJxdWFydGVyXCIsIFwibGFiZWxcIjogXCJxdWFydGVyXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJnbGlkZV9kYXRlX2VxdWl2YWxlbnRcIiwgXCJpbmRleFwiOiBcIjBcIiB9LCB7IFwiaWRcIjogXCJ5ZWFyXCIsIFwibGFiZWxcIjogXCJ5ZWFyXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJnbGlkZV9kYXRlX2VxdWl2YWxlbnRcIiwgXCJpbmRleFwiOiBcIjBcIiB9LCB7IFwiaWRcIjogXCJ3ZWVrXCIsIFwibGFiZWxcIjogXCJ3ZWVrXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJnbGlkZV9kYXRlX2VxdWl2YWxlbnRcIiwgXCJpbmRleFwiOiBcIjBcIiB9LCB7IFwiaWRcIjogXCJob3VyXCIsIFwibGFiZWxcIjogXCJob3VyXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJnbGlkZV9kYXRlX2VxdWl2YWxlbnRcIiwgXCJpbmRleFwiOiBcIjBcIiB9XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e1tjb25kaXRpb25PcHRpb25zLnZhbHVlWycwJ11dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQ9eyhpdGVtKSA9PiBkcm9wZG93blZhbHVlSGFuZGxlKHtpdGVtOiBpdGVtLmNsaWNrZWRJdGVtLCBpbmRleDogMH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0PVwic2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaD1cImNvbnRhaW5zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZHJvcGRvd25zSXNBY3RpdmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tY2hvb3NlIHZhbHVlLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+YW5kPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIGdsaWRlLWRhdGUtZXF1aXZhbGVudC1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtjb25kaXRpb25PcHRpb25zLnZhbHVlQWRkaXRpb25hbERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtbY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkPXsoaXRlbSkgPT4gZHJvcGRvd25WYWx1ZUhhbmRsZSh7aXRlbTogaXRlbS5jbGlja2VkSXRlbSwgaW5kZXg6IDF9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g9XCJjb250YWluc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWRyb3Bkb3duc0lzQWN0aXZlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLWNob29zZSB2YWx1ZS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZSc6XHJcbiAgICAgICAgICAgIGlmICghY29uZGl0aW9uT3B0aW9ucy52YWx1ZSlcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWUgPSB7fTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXSB8fCAnMCc7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzEnXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzEnXSB8fCAnJztcclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMiddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMiddIHx8ICcnO1xyXG4gICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlWyczJ10gPSBjb25kaXRpb25PcHRpb25zLnZhbHVlWyczJ10gfHwgJyc7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIGdsaWRlLWRhdGUtY29tcGFyYXRpdmUtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMCddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGUpID0+IGlucHV0VmFsdWVTZXQoe3ZhbHVlOiBlLnRhcmdldC52YWx1ZSwgdHlwZTogZWRpdG9yLCBpbmRleDogMH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIGdsaWRlLWRhdGUtY29tcGFyYXRpdmUtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W3sgXCJpZFwiOiBcImRheVwiLCBcImxhYmVsXCI6IFwiZGF5XCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJnbGlkZV9kYXRlX2NvbXBhcmF0aXZlXCIsIFwiaW5kZXhcIjogXCIxXCIgfSwgeyBcImlkXCI6IFwibW9udGhcIiwgXCJsYWJlbFwiOiBcIm1vbnRoXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJnbGlkZV9kYXRlX2NvbXBhcmF0aXZlXCIsIFwiaW5kZXhcIjogXCIxXCIgfSwgeyBcImlkXCI6IFwicXVhcnRlclwiLCBcImxhYmVsXCI6IFwicXVhcnRlclwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwiZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZVwiLCBcImluZGV4XCI6IFwiMVwiIH0sIHsgXCJpZFwiOiBcInllYXJcIiwgXCJsYWJlbFwiOiBcInllYXJcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcImdsaWRlX2RhdGVfY29tcGFyYXRpdmVcIiwgXCJpbmRleFwiOiBcIjFcIiB9LCB7IFwiaWRcIjogXCJ3ZWVrXCIsIFwibGFiZWxcIjogXCJ3ZWVrXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJnbGlkZV9kYXRlX2NvbXBhcmF0aXZlXCIsIFwiaW5kZXhcIjogXCIxXCIgfSwgeyBcImlkXCI6IFwiaG91clwiLCBcImxhYmVsXCI6IFwiaG91clwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwiZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZVwiLCBcImluZGV4XCI6IFwiMVwiIH1dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17W2NvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzEnXV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3RlZD17KGl0ZW0pID0+IGRyb3Bkb3duVmFsdWVIYW5kbGUoe2l0ZW06IGl0ZW0uY2xpY2tlZEl0ZW0sIGluZGV4OiAxfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q9XCJzaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoPVwiY29udGFpbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkcm9wZG93bnNJc0FjdGl2ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS1jaG9vc2UgdmFsdWUtLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBnbGlkZS1kYXRlLWNvbXBhcmF0aXZlLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1t7IFwiaWRcIjogXCJiZWZvcmVcIiwgXCJsYWJlbFwiOiBcImJlZm9yZVwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwiZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZVwiLCBcImluZGV4XCI6IFwiMlwiIH0sIHsgXCJpZFwiOiBcImFmdGVyXCIsIFwibGFiZWxcIjogXCJhZnRlclwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwiZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZVwiLCBcImluZGV4XCI6IFwiMlwiIH0sIHsgXCJpZFwiOiBcImJlZm9yZSBvciBhZnRlclwiLCBcImxhYmVsXCI6IFwiYmVmb3JlIG9yIGFmdGVyXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJnbGlkZV9kYXRlX2NvbXBhcmF0aXZlXCIsIFwiaW5kZXhcIjogXCIyXCIgfV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtbY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMiddXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkPXsoaXRlbSkgPT4gZHJvcGRvd25WYWx1ZUhhbmRsZSh7aXRlbTogaXRlbS5jbGlja2VkSXRlbSwgaW5kZXg6IDJ9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g9XCJjb250YWluc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWRyb3Bkb3duc0lzQWN0aXZlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLWNob29zZSB2YWx1ZS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIGdsaWRlLWRhdGUtY29tcGFyYXRpdmUtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17Y29uZGl0aW9uT3B0aW9ucy52YWx1ZUFkZGl0aW9uYWxEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17W2NvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzMnXV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3RlZD17KGl0ZW0pID0+IGRyb3Bkb3duVmFsdWVIYW5kbGUoe2l0ZW06IGl0ZW0uY2xpY2tlZEl0ZW0sIGluZGV4OiAzfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q9XCJzaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoPVwiY29udGFpbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkcm9wZG93bnNJc0FjdGl2ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS1jaG9vc2UgdmFsdWUtLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgIH1cclxufSJdfQ==