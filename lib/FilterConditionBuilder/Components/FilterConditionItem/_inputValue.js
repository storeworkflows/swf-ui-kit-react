"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputValue = void 0;

var _DatePicker = _interopRequireDefault(require("../../../DatePicker/DatePicker"));

var _TextArea = _interopRequireDefault(require("../../../TextArea/TextArea"));

var _Dropdown = _interopRequireDefault(require("../../../Dropdown/Dropdown"));

var _Input = _interopRequireDefault(require("../../../Input/Input"));

var _ = require("../../..");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var inputValue = function inputValue(_ref) {
  var inputValuePayload = _ref.inputValuePayload;
  var state = inputValuePayload.state,
      conditionOptions = inputValuePayload.conditionOptions,
      itemClicked = inputValuePayload.itemClicked,
      onDatePickerChange = inputValuePayload.onDatePickerChange,
      inputValueSet = inputValuePayload.inputValueSet,
      textAreaValueSet = inputValuePayload.textAreaValueSet,
      lookupFieldValueSet = inputValuePayload.lookupFieldValueSet;
  var dropdownsIsActive = state.dropdownsIsActive,
      selectedItem = state.selectedItem,
      generalTable = state.generalTable,
      refFieldValue = state.refFieldValue;
  var editor = conditionOptions.operator.editor;

  var dropdownValueHandle = function dropdownValueHandle(_ref2) {
    var item = _ref2.item,
        index = _ref2.index;
    var newItem = index ? _objectSpread(_objectSpread({}, item), {}, {
      index: index
    }) : _objectSpread({}, item);
    itemClicked(newItem);
  };

  switch (editor) {
    case "boolean":
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dropdown-container boolean-dropdown",
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
          manageSelectedItems: true,
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
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], {
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
      });

    case "reference":
      var items = conditionOptions.fieldItems.items;
      var table = items.length < 2 ? generalTable : items[items.length - 2].table;
      var name = items[items.length - 1].id;
      var label = items[items.length - 1].label;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "dropdown-container choice-dropdown",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.LookupField, {
          table: table,
          name: name,
          label: label,
          onValueChange: function onValueChange(name, sys_id, displayVal) {
            return lookupFieldValueSet({
              name: name,
              sys_id: sys_id,
              displayVal: displayVal
            });
          },
          displayValue: refFieldValue.displayVal,
          value: conditionOptions.value
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
          value: state.textAreaValue || conditionOptions.value,
          resize: "vertical",
          onKeyDown: function onKeyDown(e) {
            textAreaValueSet({
              value: e.target.value
            });
          },
          className: "limited-area"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRmlsdGVyQ29uZGl0aW9uSXRlbS9faW5wdXRWYWx1ZS5qcyJdLCJuYW1lcyI6WyJpbnB1dFZhbHVlIiwiaW5wdXRWYWx1ZVBheWxvYWQiLCJzdGF0ZSIsImNvbmRpdGlvbk9wdGlvbnMiLCJpdGVtQ2xpY2tlZCIsIm9uRGF0ZVBpY2tlckNoYW5nZSIsImlucHV0VmFsdWVTZXQiLCJ0ZXh0QXJlYVZhbHVlU2V0IiwibG9va3VwRmllbGRWYWx1ZVNldCIsImRyb3Bkb3duc0lzQWN0aXZlIiwic2VsZWN0ZWRJdGVtIiwiZ2VuZXJhbFRhYmxlIiwicmVmRmllbGRWYWx1ZSIsImVkaXRvciIsIm9wZXJhdG9yIiwiZHJvcGRvd25WYWx1ZUhhbmRsZSIsIml0ZW0iLCJpbmRleCIsIm5ld0l0ZW0iLCJ2YWx1ZSIsImNsaWNrZWRJdGVtIiwidmFsdWVBZGRpdGlvbmFsRGF0YSIsIml0ZW1zIiwiZmllbGRJdGVtcyIsInRhYmxlIiwibGVuZ3RoIiwibmFtZSIsImlkIiwibGFiZWwiLCJzeXNfaWQiLCJkaXNwbGF5VmFsIiwic2VsZWN0ZWRJdGVtcyIsInNwbGl0IiwiZSIsInRhcmdldCIsInR5cGUiLCJ0ZXh0QXJlYVZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQTJCO0FBQUEsTUFBeEJDLGlCQUF3QixRQUF4QkEsaUJBQXdCO0FBQUEsTUFDekNDLEtBRHlDLEdBQzBFRCxpQkFEMUUsQ0FDekNDLEtBRHlDO0FBQUEsTUFDbENDLGdCQURrQyxHQUMwRUYsaUJBRDFFLENBQ2xDRSxnQkFEa0M7QUFBQSxNQUNoQkMsV0FEZ0IsR0FDMEVILGlCQUQxRSxDQUNoQkcsV0FEZ0I7QUFBQSxNQUNIQyxrQkFERyxHQUMwRUosaUJBRDFFLENBQ0hJLGtCQURH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QWhDLGVBQUQsQ0FBN0I7QUFBQSxhQUhwQjtBQUlJLFlBQUEsTUFBTSxFQUFDLFFBSlg7QUFLSSxZQUFBLE1BQU0sRUFBQyxVQUxYO0FBTUksWUFBQSxRQUFRLEVBQUUsQ0FBQ1IsaUJBQWlCLENBQUNVLEtBTmpDO0FBT0ksWUFBQSxXQUFXLEVBQUMsa0JBUGhCO0FBUUksWUFBQSxPQUFPLEVBQUMsVUFSWjtBQVNJLFlBQUEsSUFBSSxFQUFDO0FBVFQ7QUFESixVQXBDSjtBQUFBLFFBREo7O0FBb0RKO0FBQ0k7QUFqWVI7QUFtWUgsQ0E3WU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwiLi4vLi4vLi4vRGF0ZVBpY2tlci9EYXRlUGlja2VyXCI7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiLi4vLi4vLi4vVGV4dEFyZWEvVGV4dEFyZWFcIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi8uLi9Ecm9wZG93bi9Ecm9wZG93blwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uLy4uLy4uL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCB7IExvb2t1cEZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5wdXRWYWx1ZSA9ICh7IGlucHV0VmFsdWVQYXlsb2FkIH0pID0+IHtcclxuICAgIGNvbnN0IHsgc3RhdGUsIGNvbmRpdGlvbk9wdGlvbnMsIGl0ZW1DbGlja2VkLCBvbkRhdGVQaWNrZXJDaGFuZ2UsIGlucHV0VmFsdWVTZXQsIHRleHRBcmVhVmFsdWVTZXQsIGxvb2t1cEZpZWxkVmFsdWVTZXQgfSA9IGlucHV0VmFsdWVQYXlsb2FkO1xyXG4gICAgY29uc3QgeyBkcm9wZG93bnNJc0FjdGl2ZSwgc2VsZWN0ZWRJdGVtLCBnZW5lcmFsVGFibGUsIHJlZkZpZWxkVmFsdWUgfSA9IHN0YXRlO1xyXG4gICAgY29uc3QgeyAgb3BlcmF0b3I6IHsgZWRpdG9yIH0gfSA9IGNvbmRpdGlvbk9wdGlvbnM7XHJcblxyXG4gICAgY29uc3QgZHJvcGRvd25WYWx1ZUhhbmRsZSA9ICh7aXRlbSwgaW5kZXh9KSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0l0ZW0gPSBpbmRleCA/IHsuLi5pdGVtLCBpbmRleH0gOiB7Li4uaXRlbX07IFxyXG4gICAgICAgIGl0ZW1DbGlja2VkKG5ld0l0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZWRpdG9yKSB7XHJcbiAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIGJvb2xlYW4tZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1t7IFwiaWRcIjogXCJ0cnVlXCIsIFwibGFiZWxcIjogXCJ0cnVlXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiIH0sIHsgXCJpZFwiOiBcImZhbHNlXCIsIFwibGFiZWxcIjogXCJmYWxzZVwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiB9XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17W2NvbmRpdGlvbk9wdGlvbnMudmFsdWVdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q9XCJzaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWRyb3Bkb3duc0lzQWN0aXZlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tY2hvb3NlIHZhbHVlLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VTZWxlY3RlZEl0ZW1zPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3RlZD17KGl0ZW0pID0+IGRyb3Bkb3duVmFsdWVIYW5kbGUoe2l0ZW06IGl0ZW0uY2xpY2tlZEl0ZW19KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSBcImNob2ljZV9maWVsZF9uYW1lc1wiOlxyXG4gICAgICAgIGNhc2UgXCJjaG9pY2VcIjpcclxuICAgICAgICBjYXNlIFwiY2hvaWNlX2R5bmFtaWNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtjb25kaXRpb25PcHRpb25zLnZhbHVlQWRkaXRpb25hbERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17W2NvbmRpdGlvbk9wdGlvbnMudmFsdWVdfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkcm9wZG93bnNJc0FjdGl2ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tY2hvb3NlIHZhbHVlLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3RlZD17KGl0ZW0pID0+IGRyb3Bkb3duVmFsdWVIYW5kbGUoe2l0ZW06IGl0ZW0uY2xpY2tlZEl0ZW19KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSBcInJlZmVyZW5jZVwiOlxyXG4gICAgICAgICAgICBjb25zdCB7IGZpZWxkSXRlbXM6IHsgaXRlbXMgfSB9ID0gY29uZGl0aW9uT3B0aW9uc1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZSA9IGl0ZW1zLmxlbmd0aCA8IDIgPyBnZW5lcmFsVGFibGUgOiBpdGVtc1tpdGVtcy5sZW5ndGggLSAyXS50YWJsZTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdLmlkO1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdLmxhYmVsO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgY2hvaWNlLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvb2t1cEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlPXt0YWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXsobmFtZSwgc3lzX2lkLCBkaXNwbGF5VmFsKSA9PiBsb29rdXBGaWVsZFZhbHVlU2V0KHtuYW1lLCBzeXNfaWQsIGRpc3BsYXlWYWx9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVZhbHVlPXtyZWZGaWVsZFZhbHVlLmRpc3BsYXlWYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb25kaXRpb25PcHRpb25zLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlIFwiY2hvaWNlX211bHRpcGxlXCI6XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW1zID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZSA/IGNvbmRpdGlvbk9wdGlvbnMudmFsdWUuc3BsaXQoXCIsXCIpIDogW1wiXCJdO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgY2hvaWNlLW11bHRpcGxlLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtjb25kaXRpb25PcHRpb25zLnZhbHVlQWRkaXRpb25hbERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3NlbGVjdGVkSXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cIm11bHRpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkcm9wZG93bnNJc0FjdGl2ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLWNob29zZSB2YWx1ZS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQ9eyhpdGVtKSA9PiBkcm9wZG93blZhbHVlSGFuZGxlKHtpdGVtOiBpdGVtLmNsaWNrZWRJdGVtfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIHN0cmluZy1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uZGl0aW9uT3B0aW9ucy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGUpID0+IGlucHV0VmFsdWVTZXQoe3ZhbHVlOiBlLnRhcmdldC52YWx1ZSwgdHlwZTogZWRpdG9yLCBpbmRleDogMH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlIFwiaW50ZWdlclwiOlxyXG4gICAgICAgIGNhc2UgXCJkZWNpbWFsXCI6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBudW1iZXItaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXtjb25kaXRpb25PcHRpb25zLm9wZXJhdG9yLmVkaXRvciA9PT0gJ2ludGVnZXInID8gMSA6IDAuMDAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbmRpdGlvbk9wdGlvbnMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhlKSA9PiBpbnB1dFZhbHVlU2V0KHt2YWx1ZTogZS50YXJnZXQudmFsdWUsIHR5cGU6IGVkaXRvciwgaW5kZXg6IDB9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnYmV0d2Vlbl9maWVsZCc6XHJcbiAgICAgICAgICAgIGlmICghY29uZGl0aW9uT3B0aW9ucy52YWx1ZSlcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWU9IHt9XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXSB8fCAnJztcclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddIHx8ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBiZXR3ZWVuLWZpZWxkLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHZhbHVlPXtjb25kaXRpb25PcHRpb25zLnZhbHVlWycwJ119IGZvcm1hdD1cIllZWVktTU0tRERcIiBvblZhbHVlQ2hhbmdlPXsoaXRlbSkgPT4gb25EYXRlUGlja2VyQ2hhbmdlKHt2YWx1ZTogaXRlbSwgdHlwZTogZWRpdG9yLCBpbmRleDogMH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPmFuZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBiZXR3ZWVuLWZpZWxkLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHZhbHVlPXtjb25kaXRpb25PcHRpb25zLnZhbHVlWycxJ119IGZvcm1hdD1cIllZWVktTU0tRERcIiBvblZhbHVlQ2hhbmdlPXsoaXRlbSkgPT4gb25EYXRlUGlja2VyQ2hhbmdlKHt2YWx1ZTogaXRlbSwgdHlwZTogZWRpdG9yLCBpbmRleDogMX0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSBcInRleHRhcmVhXCI6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciB0ZXh0YXJlYS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvcmVzaXplPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnRleHRBcmVhVmFsdWUgfHwgY29uZGl0aW9uT3B0aW9ucy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QXJlYVZhbHVlU2V0KHt2YWx1ZTogZS50YXJnZXQudmFsdWV9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW1pdGVkLWFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlIFwicmVsYXRpdmVfZmllbGRcIjpcclxuICAgICAgICAgICAgaWYgKCFjb25kaXRpb25PcHRpb25zLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZSA9IHt9XHJcblxyXG4gICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlWycwJ10gPSBjb25kaXRpb25PcHRpb25zLnZhbHVlWycwJ10gfHwgJyc7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzEnXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzEnXSB8fCAnJztcclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMiddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMiddIHx8ICcnO1xyXG4gICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlWyczJ10gPSBjb25kaXRpb25PcHRpb25zLnZhbHVlWyczJ10gfHwgJyc7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIHJlbGF0aXZlLWZpZWxkLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1t7IFwiaWRcIjogXCJhZnRlclwiLCBcImxhYmVsXCI6IFwiYWZ0ZXJcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInJlbGF0aXZlLWZpZWxkXCIsIFwiaW5kZXhcIjogXCIwXCIgfSwgeyBcImlkXCI6IFwiYmVmb3JlXCIsIFwibGFiZWxcIjogXCJiZWZvcmVcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInJlbGF0aXZlLWZpZWxkXCIsIFwiaW5kZXhcIjogXCIwXCIgfV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtbY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMCddXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkPXsoaXRlbSkgPT4gZHJvcGRvd25WYWx1ZUhhbmRsZSh7aXRlbTogaXRlbS5jbGlja2VkSXRlbSwgaW5kZXg6IDB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWRyb3Bkb3duc0lzQWN0aXZlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLWNob29zZSB2YWx1ZS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIHJlbGF0aXZlLWZpZWxkLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzEnXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhlKSA9PiBpbnB1dFZhbHVlU2V0KHt2YWx1ZTogZS50YXJnZXQudmFsdWUsIHR5cGU6IGVkaXRvciwgaW5kZXg6IDF9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciByZWxhdGl2ZS1maWVsZC1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbeyBcImlkXCI6IFwibWludXRlXCIsIFwibGFiZWxcIjogXCJNaW51dGVzXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJyZWxhdGl2ZS1maWVsZFwiLCBcImluZGV4XCI6IFwiMlwiIH0sIHsgXCJpZFwiOiBcImhvdXJcIiwgXCJsYWJlbFwiOiBcIkhvdXJzXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJyZWxhdGl2ZS1maWVsZFwiLCBcImluZGV4XCI6IFwiMlwiIH0sIHsgXCJpZFwiOiBcImRheW9md2Vla1wiLCBcImxhYmVsXCI6IFwiRGF5c1wiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwicmVsYXRpdmUtZmllbGRcIiwgXCJpbmRleFwiOiBcIjJcIiB9LCB7IFwiaWRcIjogXCJtb250aFwiLCBcImxhYmVsXCI6IFwiTW9udGhzXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJyZWxhdGl2ZS1maWVsZFwiLCBcImluZGV4XCI6IFwiMlwiIH0sIHsgXCJpZFwiOiBcInF1YXJ0ZXJcIiwgXCJsYWJlbFwiOiBcIlF1YXJ0ZXJzXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJyZWxhdGl2ZS1maWVsZFwiLCBcImluZGV4XCI6IFwiMlwiIH0sIHsgXCJpZFwiOiBcInllYXJcIiwgXCJsYWJlbFwiOiBcIlllYXJzXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJyZWxhdGl2ZS1maWVsZFwiLCBcImluZGV4XCI6IFwiMlwiIH1dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17W2NvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzInXV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3RlZD17KGl0ZW0pID0+IGRyb3Bkb3duVmFsdWVIYW5kbGUoe2l0ZW06IGl0ZW0uY2xpY2tlZEl0ZW0sIGluZGV4OiAyfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q9XCJzaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkcm9wZG93bnNJc0FjdGl2ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS1jaG9vc2UgdmFsdWUtLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciByZWxhdGl2ZS1maWVsZC1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbeyBcImlkXCI6IFwiYWdvXCIsIFwibGFiZWxcIjogXCJhZ29cIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInJlbGF0aXZlLWZpZWxkXCIsIFwiaW5kZXhcIjogXCIzXCIgfSwgeyBcImlkXCI6IFwiYWhlYWRcIiwgXCJsYWJlbFwiOiBcImZyb20gbm93XCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJyZWxhdGl2ZS1maWVsZFwiLCBcImluZGV4XCI6IFwiM1wiIH1dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17W2NvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzMnXV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3RlZD17KGl0ZW0pID0+IGRyb3Bkb3duVmFsdWVIYW5kbGUoe2l0ZW06IGl0ZW0uY2xpY2tlZEl0ZW0sIGluZGV4OiAzfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q9XCJzaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkcm9wZG93bnNJc0FjdGl2ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS1jaG9vc2UgdmFsdWUtLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgXCJnbGlkZV9kdXJhdGlvblwiOlxyXG4gICAgICAgICAgICBpZiAoIWNvbmRpdGlvbk9wdGlvbnMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlID0ge31cclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMCddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMCddIHx8ICcnO1xyXG4gICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlWycxJ10gPSBjb25kaXRpb25PcHRpb25zLnZhbHVlWycxJ10gfHwgJyc7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzInXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzInXSB8fCAnJztcclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMyddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMyddIHx8ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBnbGlkZS1kdXJhdGlvbi1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGF5c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezk5OTl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uZGl0aW9uT3B0aW9ucy52YWx1ZVswXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhlKSA9PiBpbnB1dFZhbHVlU2V0KHt2YWx1ZTogZS50YXJnZXQudmFsdWUsIHR5cGU6IGVkaXRvciwgaW5kZXg6IDB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBnbGlkZS1kdXJhdGlvbi1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSG91cnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsyM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb25kaXRpb25PcHRpb25zLnZhbHVlWzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGUpID0+IGlucHV0VmFsdWVTZXQoe3ZhbHVlOiBlLnRhcmdldC52YWx1ZSwgdHlwZTogZWRpdG9yLCBpbmRleDogMX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIGdsaWRlLWR1cmF0aW9uLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNaW51dGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17NTl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uZGl0aW9uT3B0aW9ucy52YWx1ZVsyXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhlKSA9PiBpbnB1dFZhbHVlU2V0KHt2YWx1ZTogZS50YXJnZXQudmFsdWUsIHR5cGU6IGVkaXRvciwgaW5kZXg6IDJ9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBnbGlkZS1kdXJhdGlvbi1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2Vjb25kc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezU5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbmRpdGlvbk9wdGlvbnMudmFsdWVbM119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZSkgPT4gaW5wdXRWYWx1ZVNldCh7dmFsdWU6IGUudGFyZ2V0LnZhbHVlLCB0eXBlOiBlZGl0b3IsIGluZGV4OiAzfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlIFwiZ2xpZGVfZGF0ZV9jaG9pY2VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIGdsaWRlLWRhdGUtY2hvaWNlLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgZm9ybWF0PVwiWVlZWS1NTS1ERFwiIHZhbHVlPXtjb25kaXRpb25PcHRpb25zLnZhbHVlfSAgb25WYWx1ZUNoYW5nZT17KHZhbHVlKSA9PiBvbkRhdGVQaWNrZXJDaGFuZ2Uoe3ZhbHVlLCB0eXBlOiBlZGl0b3J9KX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ3RyZW5kX2ZpZWxkJzpcclxuICAgICAgICAgICAgaWYgKCFjb25kaXRpb25PcHRpb25zLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMCddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMCddIHx8ICcnO1xyXG4gICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlWycxJ10gPSBjb25kaXRpb25PcHRpb25zLnZhbHVlWycxJ10gfHwgJyc7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzInXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzInXSB8fCB7IGlkOiAnJyB9O1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciB0cmVuZC1maWVsZC1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbeyBcImlkXCI6IFwiR0VcIiwgXCJsYWJlbFwiOiBcIm9uIG9yIGFmdGVyXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJ0cmVuZF9maWVsZFwiLCBcImluZGV4XCI6IFwiMFwiIH0sIHsgXCJpZFwiOiBcIkxFXCIsIFwibGFiZWxcIjogXCJvbiBvciBiZWZvcmVcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInRyZW5kX2ZpZWxkXCIsIFwiaW5kZXhcIjogXCIwXCIgfSwgeyBcImlkXCI6IFwiR1RcIiwgXCJsYWJlbFwiOiBcImFmdGVyXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJ0cmVuZF9maWVsZFwiLCBcImluZGV4XCI6IFwiMFwiIH0sIHsgXCJpZFwiOiBcIkxUXCIsIFwibGFiZWxcIjogXCJiZWZvcmVcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInRyZW5kX2ZpZWxkXCIsIFwiaW5kZXhcIjogXCIwXCIgfSwgeyBcImlkXCI6IFwiRUVcIiwgXCJsYWJlbFwiOiBcIm9uXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJ0cmVuZF9maWVsZFwiLCBcImluZGV4XCI6IFwiMFwiIH1dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17W2NvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3RlZD17KGl0ZW0pID0+IGRyb3Bkb3duVmFsdWVIYW5kbGUoe2l0ZW06IGl0ZW0uY2xpY2tlZEl0ZW0sIGluZGV4OiAwfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q9XCJzaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoPVwiY29udGFpbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkcm9wZG93bnNJc0FjdGl2ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS1jaG9vc2UgdmFsdWUtLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciB0cmVuZC1maWVsZC1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbeyBcImlkXCI6IFwiZGF5b2Z3ZWVrXCIsIFwibGFiZWxcIjogXCJkYXlcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInRyZW5kX2ZpZWxkXCIsIFwiaW5kZXhcIjogXCIxXCIgfSwgeyBcImlkXCI6IFwibW9udGhcIiwgXCJsYWJlbFwiOiBcIm1vbnRoXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJ0cmVuZF9maWVsZFwiLCBcImluZGV4XCI6IFwiMVwiIH0sIHsgXCJpZFwiOiBcInF1YXJ0ZXJcIiwgXCJsYWJlbFwiOiBcInF1YXJ0ZXJcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInRyZW5kX2ZpZWxkXCIsIFwiaW5kZXhcIjogXCIxXCIgfSwgeyBcImlkXCI6IFwieWVhclwiLCBcImxhYmVsXCI6IFwieWVhclwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwidHJlbmRfZmllbGRcIiwgXCJpbmRleFwiOiBcIjFcIiB9LCB7IFwiaWRcIjogXCJ3ZWVrXCIsIFwibGFiZWxcIjogXCJ3ZWVrXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJ0cmVuZF9maWVsZFwiLCBcImluZGV4XCI6IFwiMVwiIH0sIHsgXCJpZFwiOiBcImhvdXJcIiwgXCJsYWJlbFwiOiBcImhvdXJcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcInRyZW5kX2ZpZWxkXCIsIFwiaW5kZXhcIjogXCIxXCIgfV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtbY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkPXsoaXRlbSkgPT4gZHJvcGRvd25WYWx1ZUhhbmRsZSh7aXRlbTogaXRlbS5jbGlja2VkSXRlbSwgaW5kZXg6IDF9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g9XCJjb250YWluc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWRyb3Bkb3duc0lzQWN0aXZlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLWNob29zZSB2YWx1ZS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIHRyZW5kLWZpZWxkLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2NvbmRpdGlvbk9wdGlvbnMudmFsdWVBZGRpdGlvbmFsRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e1tjb25kaXRpb25PcHRpb25zLnZhbHVlWycyJ10uaWRdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQ9eyhpdGVtKSA9PiBkcm9wZG93blZhbHVlSGFuZGxlKHtpdGVtOiBpdGVtLmNsaWNrZWRJdGVtLCBpbmRleDogMn0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0PVwic2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaD1cImNvbnRhaW5zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZHJvcGRvd25zSXNBY3RpdmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tY2hvb3NlIHZhbHVlLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlIFwiZ2xpZGVfZGF0ZV9lcXVpdmFsZW50XCI6XHJcbiAgICAgICAgICAgIGlmICghY29uZGl0aW9uT3B0aW9ucy52YWx1ZSlcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWUgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXSB8fCAnJztcclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddIHx8ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lciBnbGlkZS1kYXRlLWVxdWl2YWxlbnQtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W3sgXCJpZFwiOiBcImRheVwiLCBcImxhYmVsXCI6IFwiZGF5XCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJnbGlkZV9kYXRlX2VxdWl2YWxlbnRcIiwgXCJpbmRleFwiOiBcIjBcIiB9LCB7IFwiaWRcIjogXCJtb250aFwiLCBcImxhYmVsXCI6IFwibW9udGhcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcImdsaWRlX2RhdGVfZXF1aXZhbGVudFwiLCBcImluZGV4XCI6IFwiMFwiIH0sIHsgXCJpZFwiOiBcInF1YXJ0ZXJcIiwgXCJsYWJlbFwiOiBcInF1YXJ0ZXJcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcImdsaWRlX2RhdGVfZXF1aXZhbGVudFwiLCBcImluZGV4XCI6IFwiMFwiIH0sIHsgXCJpZFwiOiBcInllYXJcIiwgXCJsYWJlbFwiOiBcInllYXJcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcImdsaWRlX2RhdGVfZXF1aXZhbGVudFwiLCBcImluZGV4XCI6IFwiMFwiIH0sIHsgXCJpZFwiOiBcIndlZWtcIiwgXCJsYWJlbFwiOiBcIndlZWtcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcImdsaWRlX2RhdGVfZXF1aXZhbGVudFwiLCBcImluZGV4XCI6IFwiMFwiIH0sIHsgXCJpZFwiOiBcImhvdXJcIiwgXCJsYWJlbFwiOiBcImhvdXJcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcImdsaWRlX2RhdGVfZXF1aXZhbGVudFwiLCBcImluZGV4XCI6IFwiMFwiIH1dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17W2NvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzAnXV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3RlZD17KGl0ZW0pID0+IGRyb3Bkb3duVmFsdWVIYW5kbGUoe2l0ZW06IGl0ZW0uY2xpY2tlZEl0ZW0sIGluZGV4OiAwfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q9XCJzaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoPVwiY29udGFpbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkcm9wZG93bnNJc0FjdGl2ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLS1jaG9vc2UgdmFsdWUtLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5hbmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgZ2xpZGUtZGF0ZS1lcXVpdmFsZW50LWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2NvbmRpdGlvbk9wdGlvbnMudmFsdWVBZGRpdGlvbmFsRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e1tjb25kaXRpb25PcHRpb25zLnZhbHVlWycxJ11dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQ9eyhpdGVtKSA9PiBkcm9wZG93blZhbHVlSGFuZGxlKHtpdGVtOiBpdGVtLmNsaWNrZWRJdGVtLCBpbmRleDogMX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0PVwic2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaD1cImNvbnRhaW5zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZHJvcGRvd25zSXNBY3RpdmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tY2hvb3NlIHZhbHVlLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdnbGlkZV9kYXRlX2NvbXBhcmF0aXZlJzpcclxuICAgICAgICAgICAgaWYgKCFjb25kaXRpb25PcHRpb25zLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZSA9IHt9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMCddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMCddIHx8ICcwJztcclxuICAgICAgICAgICAgY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddID0gY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddIHx8ICcnO1xyXG4gICAgICAgICAgICBjb25kaXRpb25PcHRpb25zLnZhbHVlWycyJ10gPSBjb25kaXRpb25PcHRpb25zLnZhbHVlWycyJ10gfHwgJyc7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzMnXSA9IGNvbmRpdGlvbk9wdGlvbnMudmFsdWVbJzMnXSB8fCAnJztcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgZ2xpZGUtZGF0ZS1jb21wYXJhdGl2ZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb25kaXRpb25PcHRpb25zLnZhbHVlWycwJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZSkgPT4gaW5wdXRWYWx1ZVNldCh7dmFsdWU6IGUudGFyZ2V0LnZhbHVlLCB0eXBlOiBlZGl0b3IsIGluZGV4OiAwfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgZ2xpZGUtZGF0ZS1jb21wYXJhdGl2ZS1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbeyBcImlkXCI6IFwiZGF5XCIsIFwibGFiZWxcIjogXCJkYXlcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcImdsaWRlX2RhdGVfY29tcGFyYXRpdmVcIiwgXCJpbmRleFwiOiBcIjFcIiB9LCB7IFwiaWRcIjogXCJtb250aFwiLCBcImxhYmVsXCI6IFwibW9udGhcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcImdsaWRlX2RhdGVfY29tcGFyYXRpdmVcIiwgXCJpbmRleFwiOiBcIjFcIiB9LCB7IFwiaWRcIjogXCJxdWFydGVyXCIsIFwibGFiZWxcIjogXCJxdWFydGVyXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJnbGlkZV9kYXRlX2NvbXBhcmF0aXZlXCIsIFwiaW5kZXhcIjogXCIxXCIgfSwgeyBcImlkXCI6IFwieWVhclwiLCBcImxhYmVsXCI6IFwieWVhclwiLCBcImRyb3Bkb3duXCI6IFwidmFsdWVcIiwgXCJ0eXBlXCI6IFwiZ2xpZGVfZGF0ZV9jb21wYXJhdGl2ZVwiLCBcImluZGV4XCI6IFwiMVwiIH0sIHsgXCJpZFwiOiBcIndlZWtcIiwgXCJsYWJlbFwiOiBcIndlZWtcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcImdsaWRlX2RhdGVfY29tcGFyYXRpdmVcIiwgXCJpbmRleFwiOiBcIjFcIiB9LCB7IFwiaWRcIjogXCJob3VyXCIsIFwibGFiZWxcIjogXCJob3VyXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJnbGlkZV9kYXRlX2NvbXBhcmF0aXZlXCIsIFwiaW5kZXhcIjogXCIxXCIgfV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtbY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMSddXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkPXsoaXRlbSkgPT4gZHJvcGRvd25WYWx1ZUhhbmRsZSh7aXRlbTogaXRlbS5jbGlja2VkSXRlbSwgaW5kZXg6IDF9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g9XCJjb250YWluc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWRyb3Bkb3duc0lzQWN0aXZlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLWNob29zZSB2YWx1ZS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyIGdsaWRlLWRhdGUtY29tcGFyYXRpdmUtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W3sgXCJpZFwiOiBcImJlZm9yZVwiLCBcImxhYmVsXCI6IFwiYmVmb3JlXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJnbGlkZV9kYXRlX2NvbXBhcmF0aXZlXCIsIFwiaW5kZXhcIjogXCIyXCIgfSwgeyBcImlkXCI6IFwiYWZ0ZXJcIiwgXCJsYWJlbFwiOiBcImFmdGVyXCIsIFwiZHJvcGRvd25cIjogXCJ2YWx1ZVwiLCBcInR5cGVcIjogXCJnbGlkZV9kYXRlX2NvbXBhcmF0aXZlXCIsIFwiaW5kZXhcIjogXCIyXCIgfSwgeyBcImlkXCI6IFwiYmVmb3JlIG9yIGFmdGVyXCIsIFwibGFiZWxcIjogXCJiZWZvcmUgb3IgYWZ0ZXJcIiwgXCJkcm9wZG93blwiOiBcInZhbHVlXCIsIFwidHlwZVwiOiBcImdsaWRlX2RhdGVfY29tcGFyYXRpdmVcIiwgXCJpbmRleFwiOiBcIjJcIiB9XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e1tjb25kaXRpb25PcHRpb25zLnZhbHVlWycyJ11dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQ9eyhpdGVtKSA9PiBkcm9wZG93blZhbHVlSGFuZGxlKHtpdGVtOiBpdGVtLmNsaWNrZWRJdGVtLCBpbmRleDogMn0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0PVwic2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaD1cImNvbnRhaW5zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZHJvcGRvd25zSXNBY3RpdmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi0tY2hvb3NlIHZhbHVlLS1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXIgZ2xpZGUtZGF0ZS1jb21wYXJhdGl2ZS1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtjb25kaXRpb25PcHRpb25zLnZhbHVlQWRkaXRpb25hbERhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtbY29uZGl0aW9uT3B0aW9ucy52YWx1ZVsnMyddXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkPXsoaXRlbSkgPT4gZHJvcGRvd25WYWx1ZUhhbmRsZSh7aXRlbTogaXRlbS5jbGlja2VkSXRlbSwgaW5kZXg6IDN9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g9XCJjb250YWluc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWRyb3Bkb3duc0lzQWN0aXZlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLWNob29zZSB2YWx1ZS0tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59Il19