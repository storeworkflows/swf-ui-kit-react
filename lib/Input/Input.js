"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _findByType = _interopRequireWildcard(require("../utils/findByType"));

var _utils = require("../utils");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _InfoMessage = _interopRequireDefault(require("../InfoMessage/InfoMessage"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Start = function Start() {
  return null;
};

var End = function End() {
  return null;
};

var Input = function Input(props) {
  var children = props.children,
      readonly = props.readonly,
      disabled = props.disabled,
      manageInvalid = props.manageInvalid,
      onInvalid = props.onInvalid,
      invalid = props.invalid,
      value = props.value,
      manageValue = props.manageValue;

  var _useState = (0, React.useState)(invalid),
      _useState2 = _slicedToArray(_useState, 2),
      isInvalid = _useState2[0],
      setIsInvalid = _useState2[1];

  var _useState3 = (0, React.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasStart = _useState4[0],
      setHasStart = _useState4[1];

  var _useState5 = (0, React.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      hasEnd = _useState6[0],
      setHasEnd = _useState6[1];

  var _useState7 = (0, React.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      focused = _useState8[0],
      setFocused = _useState8[1];

  var _useState9 = (0, React.useState)(value),
      _useState10 = _slicedToArray(_useState9, 2),
      valueState = _useState10[0],
      setValueState = _useState10[1];

  var valueFinal = manageValue ? value : valueState;
  var invalidFinal = manageInvalid ? invalid : isInvalid;

  var renderStart = function renderStart() {
    var start = (0, _findByType["default"])(children, "Start");
    var classes = (0, _classnames3["default"])({
      "form-control--start": true,
      "--invalid": invalidFinal,
      "--focused": focused,
      "--readonly": readonly,
      "--disabled": disabled
    });
    if (!start || start.length < 1) return null;
    !hasStart && setHasStart(true);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes,
      children: start
    });
  };

  var renderEnd = function renderEnd() {
    var end = (0, _findByType["default"])(children, "End");
    var classes = (0, _classnames3["default"])({
      "form-control--end": true,
      "--invalid": invalidFinal,
      "--readonly": readonly,
      "--disabled": disabled,
      "--focused": focused
    });
    if (!end || end.length < 1) return null;
    !hasEnd && setHasEnd(true);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes,
      children: end
    });
  }; //type is one of "onBlur", "onInput", "onFocus"


  var onEvent = function onEvent(event, type) {
    var eventValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFinal;
    var canChange = !readonly && !disabled;
    if (!canChange) return;
    !manageValue && setValueState(eventValue);
    setFocused(type !== "onBlur");
    props[type](event);
  };

  var onInvalidAction = function onInvalidAction(e) {
    !manageInvalid && setIsInvalid(true);
    onInvalid(e);
  };

  var label = props.label,
      _props$name = props.name,
      name = _props$name === void 0 ? "name" : _props$name,
      placeholder = props.placeholder,
      required = props.required,
      type = props.type,
      step = props.step,
      autofocus = props.autofocus,
      max = props.max,
      min = props.min,
      maxlength = props.maxlength,
      minlength = props.minlength,
      pattern = props.pattern,
      multiple = props.multiple,
      message = props.message,
      className = props.className,
      containerClass = props.containerClass,
      inputClass = props.inputClass,
      onChange = props.onChange,
      onKeyDown = props.onKeyDown,
      onPaste = props.onPaste;

  var _hasLabel = label !== undefined;

  var _hasMessages = message.length > 0;

  var _moved = focused || valueFinal || hasStart;

  var containerClasses = (0, _classnames3["default"])(className, _defineProperty({
    "swf-form-group": true,
    "--invalid": invalidFinal,
    "--readonly": readonly,
    "--focused": focused
  }, containerClass, true));
  var labelClasses = (0, _classnames3["default"])({
    "inp-label": true,
    "--moved": _moved,
    "--focused": focused,
    "--invalid": invalidFinal,
    "--readonly": readonly
  });
  var requiredClasses = (0, _classnames3["default"])({
    "inp-required": true,
    "--focused": focused,
    "--invalid": invalidFinal
  });
  var inputClasses = (0, _classnames3["default"])(_defineProperty({
    "form-control": true,
    "no-start-border": hasStart,
    "no-end-border": hasEnd,
    "--invalid": invalidFinal,
    "--readonly": readonly
  }, inputClass, true));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: containerClasses,
      ref: function ref(elm) {
        return props.internalRef.current = elm;
      },
      children: [_hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: labelClasses,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          htmlFor: "name",
          children: label
        }), required && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
          icon: 'asterisk',
          className: requiredClasses,
          customSize: 7
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "input-group",
        children: [renderStart(), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          className: inputClasses,
          id: "name",
          name: name,
          placeholder: placeholder,
          step: step,
          type: type,
          "aria-required": required,
          "aria-invalid": invalidFinal,
          value: valueFinal,
          readOnly: readonly,
          required: required,
          autoFocus: autofocus,
          max: max,
          min: min,
          maxLength: maxlength,
          minLength: minlength,
          pattern: pattern,
          disabled: disabled,
          multiple: multiple,
          onChange: onChange,
          onPaste: onPaste,
          onKeyDown: onKeyDown,
          onFocus: function onFocus(e) {
            return onEvent(e, "onFocus");
          },
          onBlur: function onBlur(e) {
            return onEvent(e, "onBlur");
          },
          onInput: function onInput(e) {
            return onEvent(e, "onInput", e.target.value);
          },
          onInvalid: onInvalidAction
        }), renderEnd()]
      }), _hasMessages && message.map(function (el, index) {
        return el && /*#__PURE__*/(0, React.createElement)(_InfoMessage["default"], _objectSpread(_objectSpread({}, el), {}, {
          key: index
        }));
      })]
    })
  });
};

Input.Start = (0, _findByType.createSubComponent)("Start");
Input.End = (0, _findByType.createSubComponent)("End");
Input.defaultProps = {
  autofocus: false,
  disabled: false,
  invalid: false,
  manageInvalid: false,
  message: [],
  multiple: false,
  readonly: false,
  required: false,
  inputClass: "",
  containerClass: "",
  step: "any",
  type: "text",
  value: "",
  internalRef: /*#__PURE__*/React.createRef(),
  onInput: _utils.noop,
  onChange: _utils.noop,
  onBlur: _utils.noop,
  onFocus: _utils.noop,
  onInvalid: _utils.noop,
  onKeyDown: _utils.noop,
  onPaste: _utils.noop,
  className: {}
};
Input.propTypes = {
  autofocus: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  manageInvalid: _propTypes["default"].bool,
  manageValue: _propTypes["default"].bool,
  max: _propTypes["default"].number,
  min: _propTypes["default"].number,
  maxlength: _propTypes["default"].number,
  minlength: _propTypes["default"].number,
  message: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    status: _propTypes["default"].oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
    content: _propTypes["default"].string,
    icon: _propTypes["default"].string,
    className: _propTypes["default"].object,
    iconSize: _propTypes["default"].number,
    delay: _propTypes["default"].number
  })),
  multiple: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  pattern: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  inputClass: _propTypes["default"].string,
  containerClass: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  step: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].oneOf(["any"])]),
  type: _propTypes["default"].oneOf(["text", "password", "email", "number", "url", "tel", "search", "date", "datetime", "datetime-local", "month", "week", "time"]),
  value: _propTypes["default"].string,
  onInput: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onInvalid: _propTypes["default"].func,
  onPaste: _propTypes["default"].func,
  internalRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].any
  })]),
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
};
var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJTdGFydCIsIkVuZCIsIklucHV0IiwicHJvcHMiLCJjaGlsZHJlbiIsInJlYWRvbmx5IiwiZGlzYWJsZWQiLCJtYW5hZ2VJbnZhbGlkIiwib25JbnZhbGlkIiwiaW52YWxpZCIsInZhbHVlIiwibWFuYWdlVmFsdWUiLCJpc0ludmFsaWQiLCJzZXRJc0ludmFsaWQiLCJoYXNTdGFydCIsInNldEhhc1N0YXJ0IiwiaGFzRW5kIiwic2V0SGFzRW5kIiwiZm9jdXNlZCIsInNldEZvY3VzZWQiLCJ2YWx1ZVN0YXRlIiwic2V0VmFsdWVTdGF0ZSIsInZhbHVlRmluYWwiLCJpbnZhbGlkRmluYWwiLCJyZW5kZXJTdGFydCIsInN0YXJ0IiwiY2xhc3NlcyIsImxlbmd0aCIsInJlbmRlckVuZCIsImVuZCIsIm9uRXZlbnQiLCJldmVudCIsInR5cGUiLCJldmVudFZhbHVlIiwiY2FuQ2hhbmdlIiwib25JbnZhbGlkQWN0aW9uIiwiZSIsImxhYmVsIiwibmFtZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJzdGVwIiwiYXV0b2ZvY3VzIiwibWF4IiwibWluIiwibWF4bGVuZ3RoIiwibWlubGVuZ3RoIiwicGF0dGVybiIsIm11bHRpcGxlIiwibWVzc2FnZSIsImNsYXNzTmFtZSIsImNvbnRhaW5lckNsYXNzIiwiaW5wdXRDbGFzcyIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwib25QYXN0ZSIsIl9oYXNMYWJlbCIsInVuZGVmaW5lZCIsIl9oYXNNZXNzYWdlcyIsIl9tb3ZlZCIsImNvbnRhaW5lckNsYXNzZXMiLCJsYWJlbENsYXNzZXMiLCJyZXF1aXJlZENsYXNzZXMiLCJpbnB1dENsYXNzZXMiLCJlbG0iLCJpbnRlcm5hbFJlZiIsImN1cnJlbnQiLCJ0YXJnZXQiLCJtYXAiLCJlbCIsImluZGV4IiwiZGVmYXVsdFByb3BzIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJvbklucHV0Iiwibm9vcCIsIm9uQmx1ciIsIm9uRm9jdXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwibnVtYmVyIiwiYXJyYXlPZiIsInNoYXBlIiwic3RhdHVzIiwib25lT2YiLCJjb250ZW50IiwiaWNvbiIsIm9iamVjdCIsImljb25TaXplIiwiZGVsYXkiLCJvbmVPZlR5cGUiLCJmdW5jIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsU0FBTSxJQUFOO0FBQUEsQ0FBZDs7QUFDQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTTtBQUFBLFNBQU0sSUFBTjtBQUFBLENBQVo7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDZEMsUUFEYyxHQUN5RUQsS0FEekUsQ0FDZEMsUUFEYztBQUFBLE1BQ0pDLFFBREksR0FDeUVGLEtBRHpFLENBQ0pFLFFBREk7QUFBQSxNQUNNQyxRQUROLEdBQ3lFSCxLQUR6RSxDQUNNRyxRQUROO0FBQUEsTUFDZ0JDLGFBRGhCLEdBQ3lFSixLQUR6RSxDQUNnQkksYUFEaEI7QUFBQSxNQUMrQkMsU0FEL0IsR0FDeUVMLEtBRHpFLENBQytCSyxTQUQvQjtBQUFBLE1BQzBDQyxPQUQxQyxHQUN5RU4sS0FEekUsQ0FDMENNLE9BRDFDO0FBQUEsTUFDbURDLEtBRG5ELEdBQ3lFUCxLQUR6RSxDQUNtRE8sS0FEbkQ7QUFBQSxNQUMwREMsV0FEMUQsR0FDeUVSLEtBRHpFLENBQzBEUSxXQUQxRDs7QUFBQSxrQkFHYSxvQkFBU0YsT0FBVCxDQUhiO0FBQUE7QUFBQSxNQUdkRyxTQUhjO0FBQUEsTUFHSEMsWUFIRzs7QUFBQSxtQkFJVyxvQkFBUyxLQUFULENBSlg7QUFBQTtBQUFBLE1BSWRDLFFBSmM7QUFBQSxNQUlKQyxXQUpJOztBQUFBLG1C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QWxDTjtBQW1DZGhCLEVBQUFBLE9BQU8sRUFBRUUsc0JBQVVjLElBbkNMO0FBb0NkdkMsRUFBQUEsU0FBUyxFQUFFeUIsc0JBQVVjLElBcENQO0FBcUNkakIsRUFBQUEsTUFBTSxFQUFFRyxzQkFBVWMsSUFyQ0o7QUFzQ2RyRixFQUFBQSxTQUFTLEVBQUV1RSxzQkFBVWMsSUF0Q1A7QUF1Q2R0QyxFQUFBQSxPQUFPLEVBQUV3QixzQkFBVWMsSUF2Q0w7QUF3Q2Q1QixFQUFBQSxXQUFXLEVBQUVjLHNCQUFVYSxTQUFWLENBQW9CLENBQzdCZCxzQkFBVWUsSUFEbUIsRUFFN0JmLHNCQUFVTSxLQUFWLENBQWdCO0FBQUNsQixJQUFBQSxPQUFPLEVBQUVZLHNCQUFVZ0I7QUFBcEIsR0FBaEIsQ0FGNkIsQ0FBcEIsQ0F4Q0M7QUE0Q2Q1QyxFQUFBQSxTQUFTLEVBQUU0QixzQkFBVWMsU0FBVixDQUFvQixDQUFDZCxzQkFBVUcsTUFBWCxFQUFtQkgsc0JBQVVXLE1BQTdCLENBQXBCO0FBNUNHLENBQWxCO2VBK0NldkYsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgZmluZEJ5VHlwZSwge2NyZWF0ZVN1YkNvbXBvbmVudH0gZnJvbSBcIi4uL3V0aWxzL2ZpbmRCeVR5cGVcIjtcclxuaW1wb3J0IHtub29wfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCBJbmZvTWVzc2FnZSBmcm9tIFwiLi4vSW5mb01lc3NhZ2UvSW5mb01lc3NhZ2VcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTdGFydCA9ICgpID0+IG51bGw7XHJcbmNvbnN0IEVuZCA9ICgpID0+IG51bGw7XHJcblxyXG5jb25zdCBJbnB1dCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge2NoaWxkcmVuLCByZWFkb25seSwgZGlzYWJsZWQsIG1hbmFnZUludmFsaWQsIG9uSW52YWxpZCwgaW52YWxpZCwgdmFsdWUsIG1hbmFnZVZhbHVlfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IFtpc0ludmFsaWQsIHNldElzSW52YWxpZF0gPSB1c2VTdGF0ZShpbnZhbGlkKTtcclxuICAgIGNvbnN0IFtoYXNTdGFydCwgc2V0SGFzU3RhcnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2hhc0VuZCwgc2V0SGFzRW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmb2N1c2VkLCBzZXRGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2YWx1ZVN0YXRlLCBzZXRWYWx1ZVN0YXRlXSA9IHVzZVN0YXRlKHZhbHVlKTtcclxuXHJcbiAgICBjb25zdCB2YWx1ZUZpbmFsID0gbWFuYWdlVmFsdWUgPyB2YWx1ZSA6IHZhbHVlU3RhdGU7XHJcbiAgICBjb25zdCBpbnZhbGlkRmluYWwgPSBtYW5hZ2VJbnZhbGlkID8gaW52YWxpZCA6IGlzSW52YWxpZDtcclxuXHJcbiAgICBjb25zdCByZW5kZXJTdGFydCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzdGFydCA9IGZpbmRCeVR5cGUoY2hpbGRyZW4sIFwiU3RhcnRcIik7XHJcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICBcImZvcm0tY29udHJvbC0tc3RhcnRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCItLWludmFsaWRcIjogaW52YWxpZEZpbmFsLFxyXG4gICAgICAgICAgICBcIi0tZm9jdXNlZFwiOiBmb2N1c2VkLFxyXG4gICAgICAgICAgICBcIi0tcmVhZG9ubHlcIjogcmVhZG9ubHksXHJcbiAgICAgICAgICAgIFwiLS1kaXNhYmxlZFwiOiBkaXNhYmxlZFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICghc3RhcnQgfHwgc3RhcnQubGVuZ3RoIDwgMSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICFoYXNTdGFydCAmJiBzZXRIYXNTdGFydCh0cnVlKVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PntzdGFydH08L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJFbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZW5kID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgXCJFbmRcIik7XHJcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICBcImZvcm0tY29udHJvbC0tZW5kXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiLS1pbnZhbGlkXCI6IGludmFsaWRGaW5hbCxcclxuICAgICAgICAgICAgXCItLXJlYWRvbmx5XCI6IHJlYWRvbmx5LFxyXG4gICAgICAgICAgICBcIi0tZGlzYWJsZWRcIjogZGlzYWJsZWQsXHJcbiAgICAgICAgICAgIFwiLS1mb2N1c2VkXCI6IGZvY3VzZWQsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKCFlbmQgfHwgZW5kLmxlbmd0aCA8IDEpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAhaGFzRW5kICYmIHNldEhhc0VuZCh0cnVlKVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PntlbmR9PC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgLy90eXBlIGlzIG9uZSBvZiBcIm9uQmx1clwiLCBcIm9uSW5wdXRcIiwgXCJvbkZvY3VzXCJcclxuICAgIGNvbnN0IG9uRXZlbnQgPSAoZXZlbnQsIHR5cGUsIGV2ZW50VmFsdWUgPSB2YWx1ZUZpbmFsKSA9PiB7XHJcbiAgICAgICAgbGV0IGNhbkNoYW5nZSA9ICFyZWFkb25seSAmJiAhZGlzYWJsZWQ7XHJcblxyXG4gICAgICAgIGlmICghY2FuQ2hhbmdlKSByZXR1cm47XHJcblxyXG4gICAgICAgICFtYW5hZ2VWYWx1ZSAmJiBzZXRWYWx1ZVN0YXRlKGV2ZW50VmFsdWUpO1xyXG4gICAgICAgIHNldEZvY3VzZWQodHlwZSAhPT0gXCJvbkJsdXJcIik7XHJcbiAgICAgICAgcHJvcHNbdHlwZV0oZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uSW52YWxpZEFjdGlvbiA9IChlKSA9PiB7XHJcbiAgICAgICAgIW1hbmFnZUludmFsaWQgJiYgc2V0SXNJbnZhbGlkKHRydWUpXHJcbiAgICAgICAgb25JbnZhbGlkKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICBuYW1lID0gXCJuYW1lXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXIsXHJcbiAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBzdGVwLFxyXG4gICAgICAgIGF1dG9mb2N1cyxcclxuICAgICAgICBtYXgsXHJcbiAgICAgICAgbWluLFxyXG4gICAgICAgIG1heGxlbmd0aCxcclxuICAgICAgICBtaW5sZW5ndGgsXHJcbiAgICAgICAgcGF0dGVybixcclxuICAgICAgICBtdWx0aXBsZSxcclxuICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICBjb250YWluZXJDbGFzcyxcclxuICAgICAgICBpbnB1dENsYXNzLFxyXG4gICAgICAgIG9uQ2hhbmdlLCBvbktleURvd24sIG9uUGFzdGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBfaGFzTGFiZWwgPSBsYWJlbCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgX2hhc01lc3NhZ2VzID0gbWVzc2FnZS5sZW5ndGggPiAwO1xyXG4gICAgY29uc3QgX21vdmVkID0gZm9jdXNlZCB8fCB2YWx1ZUZpbmFsIHx8IGhhc1N0YXJ0O1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lckNsYXNzZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwge1xyXG4gICAgICAgIFwic3dmLWZvcm0tZ3JvdXBcIjogdHJ1ZSxcclxuICAgICAgICBcIi0taW52YWxpZFwiOiBpbnZhbGlkRmluYWwsXHJcbiAgICAgICAgXCItLXJlYWRvbmx5XCI6IHJlYWRvbmx5LFxyXG4gICAgICAgIFwiLS1mb2N1c2VkXCI6IGZvY3VzZWQsXHJcbiAgICAgICAgW2NvbnRhaW5lckNsYXNzXTogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBsYWJlbENsYXNzZXMgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICBcImlucC1sYWJlbFwiOiB0cnVlLFxyXG4gICAgICAgIFwiLS1tb3ZlZFwiOiBfbW92ZWQsXHJcbiAgICAgICAgXCItLWZvY3VzZWRcIjogZm9jdXNlZCxcclxuICAgICAgICBcIi0taW52YWxpZFwiOiBpbnZhbGlkRmluYWwsXHJcbiAgICAgICAgXCItLXJlYWRvbmx5XCI6IHJlYWRvbmx5XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXF1aXJlZENsYXNzZXMgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICBcImlucC1yZXF1aXJlZFwiOiB0cnVlLFxyXG4gICAgICAgIFwiLS1mb2N1c2VkXCI6IGZvY3VzZWQsXHJcbiAgICAgICAgXCItLWludmFsaWRcIjogaW52YWxpZEZpbmFsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBpbnB1dENsYXNzZXMgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICBcImZvcm0tY29udHJvbFwiOiB0cnVlLFxyXG4gICAgICAgIFwibm8tc3RhcnQtYm9yZGVyXCI6IGhhc1N0YXJ0LFxyXG4gICAgICAgIFwibm8tZW5kLWJvcmRlclwiOiBoYXNFbmQsXHJcbiAgICAgICAgXCItLWludmFsaWRcIjogaW52YWxpZEZpbmFsLFxyXG4gICAgICAgIFwiLS1yZWFkb25seVwiOiByZWFkb25seSxcclxuICAgICAgICBbaW5wdXRDbGFzc106IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3Nlc31cclxuICAgICAgICAgICAgICAgICByZWY9e2VsbSA9PiBwcm9wcy5pbnRlcm5hbFJlZi5jdXJyZW50ID0gZWxtfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7X2hhc0xhYmVsICYmXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2xhYmVsQ2xhc3Nlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICB7cmVxdWlyZWQgJiYgPEljb24gaWNvbj17J2FzdGVyaXNrJ30gY2xhc3NOYW1lPXtyZXF1aXJlZENsYXNzZXN9IGN1c3RvbVNpemU9ezd9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVyU3RhcnQoKX1cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17c3RlcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17aW52YWxpZEZpbmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVGaW5hbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3JlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17YXV0b2ZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9e21heH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXttaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17bWF4bGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg9e21pbmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybj17cGF0dGVybn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZT17bXVsdGlwbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25QYXN0ZT17b25QYXN0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtvbktleURvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eyhlKSA9PiBvbkV2ZW50KGUsIFwib25Gb2N1c1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoZSkgPT4gb25FdmVudChlLCBcIm9uQmx1clwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGUpID0+IG9uRXZlbnQoZSwgXCJvbklucHV0XCIsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnZhbGlkPXtvbkludmFsaWRBY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVyRW5kKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtfaGFzTWVzc2FnZXMgJiZcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGVsICYmIDxJbmZvTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgLz4pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuXHJcbklucHV0LlN0YXJ0ID0gY3JlYXRlU3ViQ29tcG9uZW50KFwiU3RhcnRcIik7XHJcbklucHV0LkVuZCA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkVuZFwiKTtcclxuXHJcbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGF1dG9mb2N1czogZmFsc2UsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBpbnZhbGlkOiBmYWxzZSxcclxuICAgIG1hbmFnZUludmFsaWQ6IGZhbHNlLFxyXG4gICAgbWVzc2FnZTogW10sXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICByZWFkb25seTogZmFsc2UsXHJcbiAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICBpbnB1dENsYXNzOiBcIlwiLFxyXG4gICAgY29udGFpbmVyQ2xhc3M6IFwiXCIsXHJcbiAgICBzdGVwOiBcImFueVwiLFxyXG4gICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIGludGVybmFsUmVmOiBSZWFjdC5jcmVhdGVSZWYoKSxcclxuICAgIG9uSW5wdXQ6IG5vb3AsXHJcbiAgICBvbkNoYW5nZTogbm9vcCxcclxuICAgIG9uQmx1cjogbm9vcCxcclxuICAgIG9uRm9jdXM6IG5vb3AsXHJcbiAgICBvbkludmFsaWQ6IG5vb3AsXHJcbiAgICBvbktleURvd246IG5vb3AsXHJcbiAgICBvblBhc3RlOiBub29wLFxyXG4gICAgY2xhc3NOYW1lOiB7fVxyXG59XHJcblxyXG5JbnB1dC5wcm9wVHlwZXMgPSB7XHJcbiAgICBhdXRvZm9jdXM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG1hbmFnZUludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlVmFsdWU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWF4OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWluOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWF4bGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWlubGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWVzc2FnZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBzdGF0dXM6IFByb3BUeXBlcy5vbmVPZihbXCJ5ZWxsb3dcIiwgXCJyZWRcIiwgXCJncmVlblwiLCBcImJsdWVcIiwgXCJncmV5XCIsIFwiZ3JleS1ibHVlXCJdKSxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGljb25TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIGRlbGF5OiBwcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9KSksXHJcbiAgICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcGF0dGVybjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaW5wdXRDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNvbnRhaW5lckNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcmVhZG9ubHk6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc3RlcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBQcm9wVHlwZXMub25lT2YoW1wiYW55XCJdKVxyXG4gICAgXSksXHJcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoW1widGV4dFwiLCBcInBhc3N3b3JkXCIsIFwiZW1haWxcIiwgXCJudW1iZXJcIiwgXCJ1cmxcIiwgXCJ0ZWxcIiwgXCJzZWFyY2hcIiwgXCJkYXRlXCIsIFwiZGF0ZXRpbWVcIiwgXCJkYXRldGltZS1sb2NhbFwiLCBcIm1vbnRoXCIsIFwid2Vla1wiLCBcInRpbWVcIl0pLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbklucHV0OiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkludmFsaWQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25QYXN0ZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBpbnRlcm5hbFJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgICAgcHJvcFR5cGVzLnNoYXBlKHtjdXJyZW50OiBwcm9wVHlwZXMuYW55fSlcclxuICAgIF0pLFxyXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMub2JqZWN0XSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7Il19