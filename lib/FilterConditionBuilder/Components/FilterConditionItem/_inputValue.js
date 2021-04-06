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

var inputValue = function inputValue(state, conditionOptions, itemClicked, onDatePickerChange, inputValueSet) {
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
          autoresize: true,
          maxlength: 5000,
          value: conditionOptions.value,
          resize: "vertical"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRmlsdGVyQ29uZGl0aW9uSXRlbS9faW5wdXRWYWx1ZS5qcyJdLCJuYW1lcyI6WyJpbnB1dFZhbHVlIiwic3RhdGUiLCJjb25kaXRpb25PcHRpb25zIiwiaXRlbUNsaWNrZWQiLCJvbkRhdGVQaWNrZXJDaGFuZ2UiLCJpbnB1dFZhbHVlU2V0IiwiZHJvcGRvd25zSXNBY3RpdmUiLCJlZGl0b3IiLCJvcGVyYXRvciIsImRyb3Bkb3duVmFsdWVIYW5kbGUiLCJpdGVtIiwiaW5kZXgiLCJuZXdJdGVtIiwidmFsdWUiLCJjbGlja2VkSXRlbSIsInZhbHVlQWRkaXRpb25hbERhdGEiLCJzZWxlY3RlZEl0ZW1zIiwic3BsaXQiLCJlIiwidGFyZ2V0IiwidHlwZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBUUMsZ0JBQVIsRUFBMEJDLFdBQTFCLEVBQXVDQyxrQkFBdkMsRUFBMkRDLGFBQTNELEVBQTZFO0FBQUEsTUFDM0ZDLGlCQUQyRixHQUNyRUwsS0FEcUUsQ0FDM0ZLLGlCQUQyRjtBQUFBLE1BRTlFQyxNQUY4RSxHQUVqRUwsZ0JBRmlFLENBRTFGTSxRQUYwRixDQUU5RUQsTUFGOEU7O0FBSW5HLE1BQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsT0FBbUI7QUFBQSxRQUFqQkMsSUFBaUIsUUFBakJBLElBQWlCO0FBQUEsUUFBWEMsS0FBVyxRQUFYQSxLQUFXO0FBQzNDLFFBQUlDLE9BQU8sR0FBR0QsS0FBSyxtQ0FBT0QsSUFBUDtBQUFhQyxNQUFBQSxLQUFLLEVBQUxBO0FBQWIsMkJBQTBCRCxJQUExQixDQUFuQjtBQUNBUCxJQUFBQSxXQUFXLENBQUNTLE9BQUQsQ0FBWDtBQUNILEdBSEQ7O0FBS0EsVUFBUUwsTUFB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LHdCQUFDSCxJQUFEO0FBQUEscUJBQVVELG1CQUFtQixDQUFDO0FBQUNDLGdCQUFBQSxJQUFJLEVBQUVBLElBQUksQ0FBQ0ksV0FBWjtBQUF5QkgsZ0JBQUFBLEtBQUssRUFBRTtBQUFoQyxlQUFELENBQTdCO0FBQUEsYUFIcEI7QUFJSSxZQUFBLE1BQU0sRUFBQyxRQUpYO0FBS0ksWUFBQSxNQUFNLEVBQUMsVUFMWDtBQU1JLFlBQUEsUUFBUSxFQUFFLENBQUNMLGlCQUFpQixDQUFDTyxLQU5qQztBQU9JLFlBQUEsV0FBVyxFQUFDLGtCQVBoQjtBQVFJLFlBQUEsT0FBTyxFQUFDLFVBUlo7QUFTSSxZQUFBLElBQUksRUFBQztBQVRUO0FBREosVUFwQ0o7QUFBQSxRQURKOztBQW9ESjtBQUNJO0FBL1dSO0FBaVhILENBMVhNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcIi4uLy4uLy4uL0RhdGVQaWNrZXIvRGF0ZVBpY2tlclwiO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSBcIi4uLy4uLy4uL1RleHRBcmVhL1RleHRBcmVhXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vLi4vLi4vRHJvcGRvd24vRHJvcGRvd25cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi8uLi8uLi9JbnB1dC9JbnB1dFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlucHV0VmFsdWUgPSAoc3RhdGUsIGNvbmRpdGlvbk9wdGlvbnMsIGl0ZW1DbGlja2VkLCBvbkRhdGVQaWNrZXJDaGFuZ2UsIGlucHV0VmFsdWVTZXQpID0+IHtcclxuICAgIGNvbnN0IHsgZHJvcGRvd25zSXNBY3RpdmUgfSA9IHN0YXRlO1xyXG4gICAgY29uc3QgeyAgb3BlcmF0b3I6IHsgZWRpdG9yIH0gfSA9IGNvbmRpdGlvbk9wdGlvbnM7XHJcblxyXG4gICAgY29uc3QgZHJvcGRvd25WYWx1ZUhhbmRsZSA9ICh7aXRlbSwgaW5kZXh9KSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0l0ZW0gPSBpbmRleCA/IHsuLi5pdGVtLCBpbmRleH0gOiB7Li4uaXRlbX07IFxyXG4gICAgICAgIGl0ZW1DbGlja2VkKG5ld0l0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZWRpdG9yKSB7XHJcbiAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFuZXIgYm9vbGVhbi1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W3sgXCJpZFwiOiBcInRydWVcIiwgXCJsYWJlbFwiOiBcInRydWVcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIgfSwgeyBcImlkXCI6IFwiZmFsc2VcIiwgXCJsYWJlbFwiOiBcImZhbHNlXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiIH1dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtbY29uZGl0aW9uT3B0aW9ucy52YWx1ZV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZHJvcGRvd25zSXNBY3RpdmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS1jaG9vc2UgdmFsdWUtLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkPXsoaXRlbSkgPT4gZHJvcGRvd25WYWx1ZUhhbmRsZSh7aXRlbTogaXRlbS5jbGlja2VkSXRlbX0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlIFwiY2hvaWNlX2ZpZWxkX25hbWVzXCI6XHJcbiAgICAgICAgY2FzZSBcImNob2ljZVwiOlxyXG4gICAgICAgIGNhc2UgXCJjaG9pY2VfZHluYW1pY1wiOlxyXG4gICAgICAgIGNhc2UgXCJyZWZlcmVuY2VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIGNob2ljZS1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17Y29uZGl0aW9uT3B0aW9ucy52YWx1ZUFkZGl0aW9uYWxEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtbY29uZGl0aW9uT3B0aW9ucy52YWx1ZV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZHJvcGRvd25zSXNBY3RpdmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS1jaG9vc2UgdmFsdWUtLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkPXsoaXRlbSkgPT4gZHJvcGRvd25WYWx1ZUhhbmRsZSh7aXRlbTogaXRlbS5jbGlja2VkSXRlbX0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlIFwiY2hvaWNlX211bHRpcGxlXCI6XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW1zID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZSA/IGNvbmRpdGlvbk9wdGlvbnMudmFsdWUuc3BsaXQoXCIsXCIpIDogW1wiXCJdO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgY2hvaWNlLW11bHRpcGxlLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtjb25kaXRpb25PcHRpb25zLnZhbHVlQWRkaXRpb25hbERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3NlbGVjdGVkSXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cIm11bHRpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkcm9wZG93bnNJc0FjdGl2ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLWNob29zZSB2YWx1ZS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQ9eyhpdGVtKSA9PiBkcm9wZG93blZhbHVlSGFuZGxlKHtpdGVtOiBpdGVtLmNsaWNrZWRJdGVtfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIHN0cmluZy1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uZGl0aW9uT3B0aW9ucy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGUpID0+IGlucHV0VmFsdWVTZXQoe3ZhbHVlOiBlLnRhcmdldC52YWx1ZSwgdHlwZTogZWRpdG9yLCBpbmRleDogMH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlIFwiaW50ZWdlclwiOlxyXG4gICAgICAgIGNhc2UgXCJkZWNpbWFsXCI6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBudW1iZXItaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXtjb25kaXRpb25PcHRpb25zLm9wZXJhdG9yLmVkaXRvciA9PT0gJ2ludGVnZXInID8gMSA6IDAuMDAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbmRpdGlvbk9wdGlvbnMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhlKSA9PiBpbnB1dFZhbHVlU2V0KHt2YWx1ZTogZS50YXJnZXQudmFsdWUsIHR5cGU6IGVkaXRvciwgaW5kZXg6IDB9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnYmV0d2Vlbl9maWVsZCc6XHJcbiAgICAgICAgICAgIGlmICghY29uZGl0aW9uT3B0aW9ucy52YWx1ZSlcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWU9IHt9XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXSB8fCAnJztcclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddIHx8ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBiZXR3ZWVuLWZpZWxkLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHZhbHVlPXtjb25kaXRpb25PcHRpb25zLnZhbHVlWycwJ119IGZvcm1hdD1cIllZWVktTU0tRERcIiBvblZhbHVlQ2hhbmdlPXsoaXRlbSkgPT4gb25EYXRlUGlja2VyQ2hhbmdlKHt2YWx1ZTogaXRlbSwgdHlwZTogZWRpdG9yLCBpbmRleDogMH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPmFuZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBiZXR3ZWVuLWZpZWxkLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHZhbHVlPXtjb25kaXRpb25PcHRpb25zLnZhbHVlWycxJ119IGZvcm1hdD1cIllZWVktTU0tRERcIiBvblZhbHVlQ2hhbmdlPXsoaXRlbSkgPT4gb25EYXRlUGlja2VyQ2hhbmdlKHt2YWx1ZTogaXRlbSwgdHlwZTogZWRpdG9yLCBpbmRleDogMX0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSBcInRleHRhcmVhXCI6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciB0ZXh0YXJlYS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvcmVzaXplPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9ezUwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb25kaXRpb25PcHRpb25zLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNpemU9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgXCJyZWxhdGl2ZV9maWVsZFwiOlxyXG4gICAgICAgICAgICBpZiAoIWNvbmRpdGlvbk9wdGlvbnMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlID0ge31cclxuXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXSB8fCAnJztcclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddIHx8ICcnO1xyXG4gICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlWycyJ10gPSBjb25kaXRpb25PcHRpb25zLnZhbHVlWycyJ10gfHwgJyc7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzMnXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzMnXSB8fCAnJztcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgcmVsYXRpdmUtZmllbGQtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W3sgXCJpZFwiOiBcImFmdGVyXCIsIFwibGFiZWxcIjogXCJhZnRlclwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwicmVsYXRpdmUtZmllbGRcIiwgXCJpbmRleFwiOiBcIjBcIiB9LCB7IFwiaWRcIjogXCJiZWZvcmVcIiwgXCJsYWJlbFwiOiBcImJlZm9yZVwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwicmVsYXRpdmUtZmllbGRcIiwgXCJpbmRleFwiOiBcIjBcIiB9XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e1tjb25kaXRpb25PcHRpb25zLnZhbHVlWycwJ11dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQ9eyhpdGVtKSA9PiBkcm9wZG93blZhbHVlSGFuZGxlKHtpdGVtOiBpdGVtLmNsaWNrZWRJdGVtLCBpbmRleDogMH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0PVwic2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZHJvcGRvd25zSXNBY3RpdmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tY2hvb3NlIHZhbHVlLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgcmVsYXRpdmUtZmllbGQtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGUpID0+IGlucHV0VmFsdWVTZXQoe3ZhbHVlOiBlLnRhcmdldC52YWx1ZSwgdHlwZTogZWRpdG9yLCBpbmRleDogMX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIHJlbGF0aXZlLWZpZWxkLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1t7IFwiaWRcIjogXCJtaW51dGVcIiwgXCJsYWJlbFwiOiBcIk1pbnV0ZXNcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInJlbGF0aXZlLWZpZWxkXCIsIFwiaW5kZXhcIjogXCIyXCIgfSwgeyBcImlkXCI6IFwiaG91clwiLCBcImxhYmVsXCI6IFwiSG91cnNcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInJlbGF0aXZlLWZpZWxkXCIsIFwiaW5kZXhcIjogXCIyXCIgfSwgeyBcImlkXCI6IFwiZGF5b2Z3ZWVrXCIsIFwibGFiZWxcIjogXCJEYXlzXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJyZWxhdGl2ZS1maWVsZFwiLCBcImluZGV4XCI6IFwiMlwiIH0sIHsgXCJpZFwiOiBcIm1vbnRoXCIsIFwibGFiZWxcIjogXCJNb250aHNcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInJlbGF0aXZlLWZpZWxkXCIsIFwiaW5kZXhcIjogXCIyXCIgfSwgeyBcImlkXCI6IFwicXVhcnRlclwiLCBcImxhYmVsXCI6IFwiUXVhcnRlcnNcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInJlbGF0aXZlLWZpZWxkXCIsIFwiaW5kZXhcIjogXCIyXCIgfSwgeyBcImlkXCI6IFwieWVhclwiLCBcImxhYmVsXCI6IFwiWWVhcnNcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInJlbGF0aXZlLWZpZWxkXCIsIFwiaW5kZXhcIjogXCIyXCIgfV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtbY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMiddXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkPXsoaXRlbSkgPT4gZHJvcGRvd25WYWx1ZUhhbmRsZSh7aXRlbTogaXRlbS5jbGlja2VkSXRlbSwgaW5kZXg6IDJ9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWRyb3Bkb3duc0lzQWN0aXZlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLWNob29zZSB2YWx1ZS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIHJlbGF0aXZlLWZpZWxkLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1t7IFwiaWRcIjogXCJhZ29cIiwgXCJsYWJlbFwiOiBcImFnb1wiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwicmVsYXRpdmUtZmllbGRcIiwgXCJpbmRleFwiOiBcIjNcIiB9LCB7IFwiaWRcIjogXCJhaGVhZFwiLCBcImxhYmVsXCI6IFwiZnJvbSBub3dcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInJlbGF0aXZlLWZpZWxkXCIsIFwiaW5kZXhcIjogXCIzXCIgfV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtbY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMyddXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkPXsoaXRlbSkgPT4gZHJvcGRvd25WYWx1ZUhhbmRsZSh7aXRlbTogaXRlbS5jbGlja2VkSXRlbSwgaW5kZXg6IDN9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWRyb3Bkb3duc0lzQWN0aXZlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLWNob29zZSB2YWx1ZS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSBcImdsaWRlX2R1cmF0aW9uXCI6XHJcbiAgICAgICAgICAgIGlmICghY29uZGl0aW9uT3B0aW9ucy52YWx1ZSlcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWUgPSB7fVxyXG4gICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlWycwJ10gPSBjb25kaXRpb25PcHRpb25zLnZhbHVlWycwJ10gfHwgJyc7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzEnXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzEnXSB8fCAnJztcclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMiddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMiddIHx8ICcnO1xyXG4gICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlWyczJ10gPSBjb25kaXRpb25PcHRpb25zLnZhbHVlWyczJ10gfHwgJyc7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIGdsaWRlLWR1cmF0aW9uLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEYXlzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17OTk5OX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb25kaXRpb25PcHRpb25zLnZhbHVlWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGUpID0+IGlucHV0VmFsdWVTZXQoe3ZhbHVlOiBlLnRhcmdldC52YWx1ZSwgdHlwZTogZWRpdG9yLCBpbmRleDogMH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIGdsaWRlLWR1cmF0aW9uLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIb3Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezIzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbmRpdGlvbk9wdGlvbnMudmFsdWVbMV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZSkgPT4gaW5wdXRWYWx1ZVNldCh7dmFsdWU6IGUudGFyZ2V0LnZhbHVlLCB0eXBlOiBlZGl0b3IsIGluZGV4OiAxfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgZ2xpZGUtZHVyYXRpb24taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1pbnV0ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs1OX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb25kaXRpb25PcHRpb25zLnZhbHVlWzJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGUpID0+IGlucHV0VmFsdWVTZXQoe3ZhbHVlOiBlLnRhcmdldC52YWx1ZSwgdHlwZTogZWRpdG9yLCBpbmRleDogMn0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIGdsaWRlLWR1cmF0aW9uLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWNvbmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17NTl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uZGl0aW9uT3B0aW9ucy52YWx1ZVszXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhlKSA9PiBpbnB1dFZhbHVlU2V0KHt2YWx1ZTogZS50YXJnZXQudmFsdWUsIHR5cGU6IGVkaXRvciwgaW5kZXg6IDN9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgXCJnbGlkZV9kYXRlX2Nob2ljZVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgZ2xpZGUtZGF0ZS1jaG9pY2UtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBmb3JtYXQ9XCJZWVlZLU1NLUREXCIgdmFsdWU9e2NvbmRpdGlvbk9wdGlvbnMudmFsdWV9ICBvblZhbHVlQ2hhbmdlPXsodmFsdWUpID0+IG9uRGF0ZVBpY2tlckNoYW5nZSh7dmFsdWUsIHR5cGU6IGVkaXRvcn0pfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAndHJlbmRfZmllbGQnOlxyXG4gICAgICAgICAgICBpZiAoIWNvbmRpdGlvbk9wdGlvbnMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlID0ge307XHJcblxyXG4gICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlWycwJ10gPSBjb25kaXRpb25PcHRpb25zLnZhbHVlWycwJ10gfHwgJyc7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzEnXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzEnXSB8fCAnJztcclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMiddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMiddIHx8IHsgaWQ6ICcnIH07XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIHRyZW5kLWZpZWxkLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1t7IFwiaWRcIjogXCJHRVwiLCBcImxhYmVsXCI6IFwib24gb3IgYWZ0ZXJcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInRyZW5kX2ZpZWxkXCIsIFwiaW5kZXhcIjogXCIwXCIgfSwgeyBcImlkXCI6IFwiTEVcIiwgXCJsYWJlbFwiOiBcIm9uIG9yIGJlZm9yZVwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwidHJlbmRfZmllbGRcIiwgXCJpbmRleFwiOiBcIjBcIiB9LCB7IFwiaWRcIjogXCJHVFwiLCBcImxhYmVsXCI6IFwiYWZ0ZXJcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInRyZW5kX2ZpZWxkXCIsIFwiaW5kZXhcIjogXCIwXCIgfSwgeyBcImlkXCI6IFwiTFRcIiwgXCJsYWJlbFwiOiBcImJlZm9yZVwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwidHJlbmRfZmllbGRcIiwgXCJpbmRleFwiOiBcIjBcIiB9LCB7IFwiaWRcIjogXCJFRVwiLCBcImxhYmVsXCI6IFwib25cIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInRyZW5kX2ZpZWxkXCIsIFwiaW5kZXhcIjogXCIwXCIgfV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtbY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMCddXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkPXsoaXRlbSkgPT4gZHJvcGRvd25WYWx1ZUhhbmRsZSh7aXRlbTogaXRlbS5jbGlja2VkSXRlbSwgaW5kZXg6IDB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g9XCJjb250YWluc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWRyb3Bkb3duc0lzQWN0aXZlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLWNob29zZSB2YWx1ZS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIHRyZW5kLWZpZWxkLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1t7IFwiaWRcIjogXCJkYXlvZndlZWtcIiwgXCJsYWJlbFwiOiBcImRheVwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwidHJlbmRfZmllbGRcIiwgXCJpbmRleFwiOiBcIjFcIiB9LCB7IFwiaWRcIjogXCJtb250aFwiLCBcImxhYmVsXCI6IFwibW9udGhcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInRyZW5kX2ZpZWxkXCIsIFwiaW5kZXhcIjogXCIxXCIgfSwgeyBcImlkXCI6IFwicXVhcnRlclwiLCBcImxhYmVsXCI6IFwicXVhcnRlclwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwidHJlbmRfZmllbGRcIiwgXCJpbmRleFwiOiBcIjFcIiB9LCB7IFwiaWRcIjogXCJ5ZWFyXCIsIFwibGFiZWxcIjogXCJ5ZWFyXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJ0cmVuZF9maWVsZFwiLCBcImluZGV4XCI6IFwiMVwiIH0sIHsgXCJpZFwiOiBcIndlZWtcIiwgXCJsYWJlbFwiOiBcIndlZWtcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInRyZW5kX2ZpZWxkXCIsIFwiaW5kZXhcIjogXCIxXCIgfSwgeyBcImlkXCI6IFwiaG91clwiLCBcImxhYmVsXCI6IFwiaG91clwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwidHJlbmRfZmllbGRcIiwgXCJpbmRleFwiOiBcIjFcIiB9XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e1tjb25kaXRpb25PcHRpb25zLnZhbHVlWycxJ11dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQ9eyhpdGVtKSA9PiBkcm9wZG93blZhbHVlSGFuZGxlKHtpdGVtOiBpdGVtLmNsaWNrZWRJdGVtLCBpbmRleDogMX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0PVwic2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaD1cImNvbnRhaW5zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZHJvcGRvd25zSXNBY3RpdmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tY2hvb3NlIHZhbHVlLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgdHJlbmQtZmllbGQtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17Y29uZGl0aW9uT3B0aW9ucy52YWx1ZUFkZGl0aW9uYWxEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17W2NvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzInXS5pZF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3RlZD17KGl0ZW0pID0+IGRyb3Bkb3duVmFsdWVIYW5kbGUoe2l0ZW06IGl0ZW0uY2xpY2tlZEl0ZW0sIGluZGV4OiAyfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q9XCJzaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoPVwiY29udGFpbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkcm9wZG93bnNJc0FjdGl2ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS1jaG9vc2UgdmFsdWUtLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgXCJnbGlkZV9kYXRlX2VxdWl2YWxlbnRcIjpcclxuICAgICAgICAgICAgaWYgKCFjb25kaXRpb25PcHRpb25zLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMCddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMCddIHx8ICcnO1xyXG4gICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlWycxJ10gPSBjb25kaXRpb25PcHRpb25zLnZhbHVlWycxJ10gfHwgJyc7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIGdsaWRlLWRhdGUtZXF1aXZhbGVudC1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbeyBcImlkXCI6IFwiZGF5XCIsIFwibGFiZWxcIjogXCJkYXlcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcImdsaWRlX2RhdGVfZXF1aXZhbGVudFwiLCBcImluZGV4XCI6IFwiMFwiIH0sIHsgXCJpZFwiOiBcIm1vbnRoXCIsIFwibGFiZWxcIjogXCJtb250aFwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwiZ2xpZGVfZGF0ZV9lcXVpdmFsZW50XCIsIFwiaW5kZXhcIjogXCIwXCIgfSwgeyBcImlkXCI6IFwicXVhcnRlclwiLCBcImxhYmVsXCI6IFwicXVhcnRlclwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwiZ2xpZGVfZGF0ZV9lcXVpdmFsZW50XCIsIFwiaW5kZXhcIjogXCIwXCIgfSwgeyBcImlkXCI6IFwieWVhclwiLCBcImxhYmVsXCI6IFwieWVhclwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwiZ2xpZGVfZGF0ZV9lcXVpdmFsZW50XCIsIFwiaW5kZXhcIjogXCIwXCIgfSwgeyBcImlkXCI6IFwid2Vla1wiLCBcImxhYmVsXCI6IFwid2Vla1wiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwiZ2xpZGVfZGF0ZV9lcXVpdmFsZW50XCIsIFwiaW5kZXhcIjogXCIwXCIgfSwgeyBcImlkXCI6IFwiaG91clwiLCBcImxhYmVsXCI6IFwiaG91clwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwiZ2xpZGVfZGF0ZV9lcXVpdmFsZW50XCIsIFwiaW5kZXhcIjogXCIwXCIgfV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtbY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMCddXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkPXsoaXRlbSkgPT4gZHJvcGRvd25WYWx1ZUhhbmRsZSh7aXRlbTogaXRlbS5jbGlja2VkSXRlbSwgaW5kZXg6IDB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g9XCJjb250YWluc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWRyb3Bkb3duc0lzQWN0aXZlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLWNob29zZSB2YWx1ZS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPmFuZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBnbGlkZS1kYXRlLWVxdWl2YWxlbnQtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17Y29uZGl0aW9uT3B0aW9ucy52YWx1ZUFkZGl0aW9uYWxEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17W2NvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzEnXV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3RlZD17KGl0ZW0pID0+IGRyb3Bkb3duVmFsdWVIYW5kbGUoe2l0ZW06IGl0ZW0uY2xpY2tlZEl0ZW0sIGluZGV4OiAxfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q9XCJzaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoPVwiY29udGFpbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkcm9wZG93bnNJc0FjdGl2ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS1jaG9vc2UgdmFsdWUtLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ2dsaWRlX2RhdGVfY29tcGFyYXRpdmUnOlxyXG4gICAgICAgICAgICBpZiAoIWNvbmRpdGlvbk9wdGlvbnMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlID0ge307XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlWycwJ10gPSBjb25kaXRpb25PcHRpb25zLnZhbHVlWycwJ10gfHwgJzAnO1xyXG4gICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlWycxJ10gPSBjb25kaXRpb25PcHRpb25zLnZhbHVlWycxJ10gfHwgJyc7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzInXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzInXSB8fCAnJztcclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMyddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMyddIHx8ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBnbGlkZS1kYXRlLWNvbXBhcmF0aXZlLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhlKSA9PiBpbnB1dFZhbHVlU2V0KHt2YWx1ZTogZS50YXJnZXQudmFsdWUsIHR5cGU6IGVkaXRvciwgaW5kZXg6IDB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBnbGlkZS1kYXRlLWNvbXBhcmF0aXZlLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1t7IFwiaWRcIjogXCJkYXlcIiwgXCJsYWJlbFwiOiBcImRheVwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwiZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZVwiLCBcImluZGV4XCI6IFwiMVwiIH0sIHsgXCJpZFwiOiBcIm1vbnRoXCIsIFwibGFiZWxcIjogXCJtb250aFwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwiZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZVwiLCBcImluZGV4XCI6IFwiMVwiIH0sIHsgXCJpZFwiOiBcInF1YXJ0ZXJcIiwgXCJsYWJlbFwiOiBcInF1YXJ0ZXJcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcImdsaWRlX2RhdGVfY29tcGFyYXRpdmVcIiwgXCJpbmRleFwiOiBcIjFcIiB9LCB7IFwiaWRcIjogXCJ5ZWFyXCIsIFwibGFiZWxcIjogXCJ5ZWFyXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJnbGlkZV9kYXRlX2NvbXBhcmF0aXZlXCIsIFwiaW5kZXhcIjogXCIxXCIgfSwgeyBcImlkXCI6IFwid2Vla1wiLCBcImxhYmVsXCI6IFwid2Vla1wiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwiZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZVwiLCBcImluZGV4XCI6IFwiMVwiIH0sIHsgXCJpZFwiOiBcImhvdXJcIiwgXCJsYWJlbFwiOiBcImhvdXJcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcImdsaWRlX2RhdGVfY29tcGFyYXRpdmVcIiwgXCJpbmRleFwiOiBcIjFcIiB9XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e1tjb25kaXRpb25PcHRpb25zLnZhbHVlWycxJ11dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQ9eyhpdGVtKSA9PiBkcm9wZG93blZhbHVlSGFuZGxlKHtpdGVtOiBpdGVtLmNsaWNrZWRJdGVtLCBpbmRleDogMX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0PVwic2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaD1cImNvbnRhaW5zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZHJvcGRvd25zSXNBY3RpdmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tY2hvb3NlIHZhbHVlLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgZ2xpZGUtZGF0ZS1jb21wYXJhdGl2ZS1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbeyBcImlkXCI6IFwiYmVmb3JlXCIsIFwibGFiZWxcIjogXCJiZWZvcmVcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcImdsaWRlX2RhdGVfY29tcGFyYXRpdmVcIiwgXCJpbmRleFwiOiBcIjJcIiB9LCB7IFwiaWRcIjogXCJhZnRlclwiLCBcImxhYmVsXCI6IFwiYWZ0ZXJcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcImdsaWRlX2RhdGVfY29tcGFyYXRpdmVcIiwgXCJpbmRleFwiOiBcIjJcIiB9LCB7IFwiaWRcIjogXCJiZWZvcmUgb3IgYWZ0ZXJcIiwgXCJsYWJlbFwiOiBcImJlZm9yZSBvciBhZnRlclwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwiZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZVwiLCBcImluZGV4XCI6IFwiMlwiIH1dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17W2NvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzInXV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3RlZD17KGl0ZW0pID0+IGRyb3Bkb3duVmFsdWVIYW5kbGUoe2l0ZW06IGl0ZW0uY2xpY2tlZEl0ZW0sIGluZGV4OiAyfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q9XCJzaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoPVwiY29udGFpbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkcm9wZG93bnNJc0FjdGl2ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS1jaG9vc2UgdmFsdWUtLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBnbGlkZS1kYXRlLWNvbXBhcmF0aXZlLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2NvbmRpdGlvbk9wdGlvbnMudmFsdWVBZGRpdGlvbmFsRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e1tjb25kaXRpb25PcHRpb25zLnZhbHVlWyczJ11dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQ9eyhpdGVtKSA9PiBkcm9wZG93blZhbHVlSGFuZGxlKHtpdGVtOiBpdGVtLmNsaWNrZWRJdGVtLCBpbmRleDogM30pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0PVwic2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaD1cImNvbnRhaW5zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZHJvcGRvd25zSXNBY3RpdmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tY2hvb3NlIHZhbHVlLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn0iXX0=