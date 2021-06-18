"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _RadioOption = _interopRequireDefault(require("./RadioOption.js"));

var _constants = require("./constants");

var _RequiredLabel = _interopRequireDefault(require("../RequiredLabel/RequiredLabel"));

var _utils = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RadioButtons = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var value = props.value,
      invalid = props.invalid,
      manageValue = props.manageValue,
      onChange = props.onChange,
      readonly = props.readonly,
      manageInvalid = props.manageInvalid,
      onInvalid = props.onInvalid,
      layout = props.layout,
      required = props.required;

  var _useState = (0, React.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      selectedValue = _useState2[0],
      setSelectedValue = _useState2[1];

  var _useState3 = (0, React.useState)(invalid),
      _useState4 = _slicedToArray(_useState3, 2),
      isInvalid = _useState4[0],
      setIsInvalid = _useState4[1];

  var selectedFinal = manageValue ? value : selectedValue;
  var invalidFinal = manageInvalid ? invalid : isInvalid;
  var optionClicked = (0, React.useCallback)(function (option) {
    if (!readonly) {
      !manageValue && setSelectedValue(option.id);
      onChange(option);
    }
  }, [readonly, manageValue, onChange]);
  var optionInvalid = (0, React.useCallback)(function (e) {
    !manageInvalid && setIsInvalid(true);
    onInvalid(e);
  }, [manageInvalid, onInvalid]);

  var renderValue = function renderValue(option, name) {
    var id = option.id,
        label = option.label,
        value = option.value,
        checked = option.checked,
        readonly = option.readonly,
        disabled = option.disabled;
    var isChecked = selectedFinal ? selectedFinal === id : checked;
    var isHorizontal = layout === _constants.RADIO_BUTTONS_LAYOUT.horizontal;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadioOption["default"], {
      id: id,
      label: label,
      value: value,
      checked: isChecked,
      readonly: readonly || props.readonly,
      disabled: disabled || props.disabled,
      required: required,
      invalid: invalidFinal,
      name: name,
      onChangeAction: optionClicked,
      onInvalidAction: optionInvalid,
      isHorizontal: isHorizontal
    }, id);
  };

  var label = props.label,
      name = props.name,
      options = props.options,
      visible = props.visible,
      className = props.className,
      labelClassName = props.labelClassName;
  return visible ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames["default"])(className, "radio-buttons-container"),
      ref: ref,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames["default"])({
          "radio-buttons-header": true,
          "invalid": invalidFinal
        }),
        children: (label || required) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
          className: labelClassName,
          invalid: invalidFinal,
          required: required,
          label: label
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "group-of-radio-buttons",
        children: options.map(function (option) {
          return renderValue(option, name);
        })
      })]
    })
  }) : null;
});
RadioButtons.defaultProps = {
  disabled: false,
  layout: _constants.RADIO_BUTTONS_LAYOUT.vertical,
  manageValue: false,
  options: [],
  readonly: false,
  required: false,
  manageInvalid: false,
  visible: true,
  onChange: _utils.noop,
  onInvalid: _utils.noop,
  className: {},
  labelClassName: {}
};
RadioButtons.propTypes = {
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  layout: _propTypes["default"].oneOf([_constants.RADIO_BUTTONS_LAYOUT.vertical, _constants.RADIO_BUTTONS_LAYOUT.horizontal]),
  manageValue: _propTypes["default"].bool,
  manageInvalid: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    label: _propTypes["default"].string,
    value: _propTypes["default"].string,
    checked: _propTypes["default"].bool,
    readonly: _propTypes["default"].bool,
    disabled: _propTypes["default"].bool
  })),
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onInvalid: _propTypes["default"].func,
  visible: _propTypes["default"].bool,
  className: _propTypes["default"].object,
  labelClassName: _propTypes["default"].object
};
var _default = RadioButtons;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SYWRpb0J1dHRvbnMvUmFkaW9CdXR0b25zLmpzIl0sIm5hbWVzIjpbIlJhZGlvQnV0dG9ucyIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwidmFsdWUiLCJpbnZhbGlkIiwibWFuYWdlVmFsdWUiLCJvbkNoYW5nZSIsInJlYWRvbmx5IiwibWFuYWdlSW52YWxpZCIsIm9uSW52YWxpZCIsImxheW91dCIsInJlcXVpcmVkIiwic2VsZWN0ZWRWYWx1ZSIsInNldFNlbGVjdGVkVmFsdWUiLCJpc0ludmFsaWQiLCJzZXRJc0ludmFsaWQiLCJzZWxlY3RlZEZpbmFsIiwiaW52YWxpZEZpbmFsIiwib3B0aW9uQ2xpY2tlZCIsIm9wdGlvbiIsImlkIiwib3B0aW9uSW52YWxpZCIsImUiLCJyZW5kZXJWYWx1ZSIsIm5hbWUiLCJsYWJlbCIsImNoZWNrZWQiLCJkaXNhYmxlZCIsImlzQ2hlY2tlZCIsImlzSG9yaXpvbnRhbCIsIlJBRElPX0JVVFRPTlNfTEFZT1VUIiwiaG9yaXpvbnRhbCIsIm9wdGlvbnMiLCJ2aXNpYmxlIiwiY2xhc3NOYW1lIiwibGFiZWxDbGFzc05hbWUiLCJtYXAiLCJkZWZhdWx0UHJvcHMiLCJ2ZXJ0aWNhbCIsIm5vb3AiLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib25lT2YiLCJhcnJheU9mIiwic2hhcGUiLCJmdW5jIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksZ0JBQUdDLEtBQUssQ0FBQ0MsVUFBTixDQUFpQixVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFBQSxNQUMzQ0MsS0FEMkMsR0FDb0RGLEtBRHBELENBQzNDRSxLQUQyQztBQUFBLE1BQ3BDQyxPQURvQyxHQUNvREgsS0FEcEQsQ0FDcENHLE9BRG9DO0FBQUEsTUFDM0JDLFdB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QUFLWmxDLElBQUFBLFFBQVEsRUFBRWlDLHNCQUFVQyxJQUxSO0FBTVpkLElBQUFBLFFBQVEsRUFBRWEsc0JBQVVDO0FBTlIsR0FBaEIsQ0FESyxDQVZZO0FBbUJyQmxDLEVBQUFBLFFBQVEsRUFBRWlDLHNCQUFVQyxJQW5CQztBQW9CckI5QixFQUFBQSxRQUFRLEVBQUU2QixzQkFBVUMsSUFwQkM7QUFxQnJCdEMsRUFBQUEsS0FBSyxFQUFFcUMsc0JBQVVFLE1BckJJO0FBc0JyQnBDLEVBQUFBLFFBQVEsRUFBRWtDLHNCQUFVTSxJQXRCQztBQXVCckJyQyxFQUFBQSxTQUFTLEVBQUUrQixzQkFBVU0sSUF2QkE7QUF3QnJCYixFQUFBQSxPQUFPLEVBQUVPLHNCQUFVQyxJQXhCRTtBQXlCckJQLEVBQUFBLFNBQVMsRUFBRU0sc0JBQVVPLE1BekJBO0FBMEJyQlosRUFBQUEsY0FBYyxFQUFFSyxzQkFBVU87QUExQkwsQ0FBekI7ZUE2QmVqRCxZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBSYWRpb09wdGlvbiBmcm9tIFwiLi9SYWRpb09wdGlvbi5qc1wiXHJcbmltcG9ydCB7UkFESU9fQlVUVE9OU19MQVlPVVR9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgUmVxdWlyZWRMYWJlbCBmcm9tIFwiLi4vUmVxdWlyZWRMYWJlbC9SZXF1aXJlZExhYmVsXCI7XHJcbmltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtub29wfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmNvbnN0IFJhZGlvQnV0dG9ucyA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICAgIGNvbnN0IHt2YWx1ZSwgaW52YWxpZCwgbWFuYWdlVmFsdWUsIG9uQ2hhbmdlLCByZWFkb25seSwgbWFuYWdlSW52YWxpZCwgb25JbnZhbGlkLCBsYXlvdXQsIHJlcXVpcmVkfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IFtzZWxlY3RlZFZhbHVlLCBzZXRTZWxlY3RlZFZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlKTtcclxuICAgIGNvbnN0IFtpc0ludmFsaWQsIHNldElzSW52YWxpZF0gPSB1c2VTdGF0ZShpbnZhbGlkKVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdGVkRmluYWwgPSBtYW5hZ2VWYWx1ZSA/IHZhbHVlIDogc2VsZWN0ZWRWYWx1ZTtcclxuICAgIGNvbnN0IGludmFsaWRGaW5hbCA9IG1hbmFnZUludmFsaWQgPyBpbnZhbGlkIDogaXNJbnZhbGlkXHJcblxyXG4gICAgY29uc3Qgb3B0aW9uQ2xpY2tlZCA9IHVzZUNhbGxiYWNrKChvcHRpb24pID0+IHtcclxuICAgICAgICBpZiAoIXJlYWRvbmx5KSB7XHJcbiAgICAgICAgICAgICFtYW5hZ2VWYWx1ZSAmJiBzZXRTZWxlY3RlZFZhbHVlKG9wdGlvbi5pZCk7XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlKG9wdGlvbilcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmVhZG9ubHksIG1hbmFnZVZhbHVlLCBvbkNoYW5nZV0pXHJcblxyXG4gICAgY29uc3Qgb3B0aW9uSW52YWxpZCA9IHVzZUNhbGxiYWNrKCAoZSkgPT4ge1xyXG4gICAgICAgICFtYW5hZ2VJbnZhbGlkICYmIHNldElzSW52YWxpZCh0cnVlKTtcclxuICAgICAgICBvbkludmFsaWQoZSlcclxuICAgIH0sIFttYW5hZ2VJbnZhbGlkLCBvbkludmFsaWRdKVxyXG5cclxuICAgIGNvbnN0IHJlbmRlclZhbHVlID0gKG9wdGlvbiwgbmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaWQsIGxhYmVsLCB2YWx1ZSwgY2hlY2tlZCwgcmVhZG9ubHksIGRpc2FibGVkfSA9IG9wdGlvbjtcclxuXHJcbiAgICAgICAgbGV0IGlzQ2hlY2tlZCA9IHNlbGVjdGVkRmluYWwgPyBzZWxlY3RlZEZpbmFsID09PSBpZCA6IGNoZWNrZWRcclxuICAgICAgICBsZXQgaXNIb3Jpem9udGFsID0gbGF5b3V0ID09PSBSQURJT19CVVRUT05TX0xBWU9VVC5ob3Jpem9udGFsO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmFkaW9PcHRpb25cclxuICAgICAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtpc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICByZWFkb25seT17cmVhZG9ubHkgfHwgcHJvcHMucmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgcHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkRmluYWx9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2VBY3Rpb249e29wdGlvbkNsaWNrZWR9XHJcbiAgICAgICAgICAgICAgICBvbkludmFsaWRBY3Rpb249e29wdGlvbkludmFsaWR9XHJcbiAgICAgICAgICAgICAgICBpc0hvcml6b250YWw9e2lzSG9yaXpvbnRhbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGxhYmVsLCBuYW1lLCBvcHRpb25zLCB2aXNpYmxlLFxyXG4gICAgICAgIGNsYXNzTmFtZSwgbGFiZWxDbGFzc05hbWUsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB2aXNpYmxlID9cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzTmFtZSwgXCJyYWRpby1idXR0b25zLWNvbnRhaW5lclwiKX0gcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyYWRpby1idXR0b25zLWhlYWRlclwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImludmFsaWRcIjogaW52YWxpZEZpbmFsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KGxhYmVsIHx8IHJlcXVpcmVkKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVxdWlyZWRMYWJlbCBjbGFzc05hbWU9e2xhYmVsQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkRmluYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JvdXAtb2YtcmFkaW8tYnV0dG9uc1wifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IHJlbmRlclZhbHVlKG9wdGlvbiwgbmFtZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgICk7XHJcblxyXG59KTtcclxuXHJcblJhZGlvQnV0dG9ucy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBsYXlvdXQ6IFJBRElPX0JVVFRPTlNfTEFZT1VULnZlcnRpY2FsLFxyXG4gICAgbWFuYWdlVmFsdWU6IGZhbHNlLFxyXG4gICAgb3B0aW9uczogW10sXHJcbiAgICByZWFkb25seTogZmFsc2UsXHJcbiAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICBtYW5hZ2VJbnZhbGlkOiBmYWxzZSxcclxuICAgIHZpc2libGU6IHRydWUsXHJcbiAgICBvbkNoYW5nZTogbm9vcCxcclxuICAgIG9uSW52YWxpZDogbm9vcCxcclxuICAgIGNsYXNzTmFtZToge30sXHJcbiAgICBsYWJlbENsYXNzTmFtZToge31cclxufTtcclxuXHJcblJhZGlvQnV0dG9ucy5wcm9wVHlwZXMgPSB7XHJcbiAgICBkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGF5b3V0OiBwcm9wVHlwZXMub25lT2YoXHJcbiAgICAgICAgW1JBRElPX0JVVFRPTlNfTEFZT1VULnZlcnRpY2FsLCBSQURJT19CVVRUT05TX0xBWU9VVC5ob3Jpem9udGFsXVxyXG4gICAgKSxcclxuICAgIG1hbmFnZVZhbHVlOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZUludmFsaWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbmFtZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9wdGlvbnM6IHByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICAgIHByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgICAgIGlkOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgICAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgIGNoZWNrZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgICAgICByZWFkb25seTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbFxyXG4gICAgICAgIH0pKSxcclxuICAgIHJlYWRvbmx5OiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlcXVpcmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHZhbHVlOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25DaGFuZ2U6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25JbnZhbGlkOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIHZpc2libGU6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgbGFiZWxDbGFzc05hbWU6IHByb3BUeXBlcy5vYmplY3RcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFkaW9CdXR0b25zIl19