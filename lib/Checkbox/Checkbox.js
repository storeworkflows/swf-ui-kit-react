"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _RequiredLabel = _interopRequireDefault(require("../RequiredLabel/RequiredLabel"));

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

var Checkbox = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var checked = props.checked,
      invalid = props.invalid,
      manageChecked = props.manageChecked,
      manageInvalid = props.manageInvalid,
      onChange = props.onChange,
      onInvalid = props.onInvalid,
      readonly = props.readonly,
      disabled = props.disabled,
      label = props.label,
      name = props.name,
      value = props.value,
      required = props.required,
      visible = props.visible,
      className = props.className,
      labelClassName = props.labelClassName,
      inlineRequired = props.inlineRequired;

  var _useState = (0, React.useState)(checked),
      _useState2 = _slicedToArray(_useState, 2),
      checkedSate = _useState2[0],
      setCheckedState = _useState2[1];

  var _useState3 = (0, React.useState)(invalid),
      _useState4 = _slicedToArray(_useState3, 2),
      invalidSate = _useState4[0],
      setInvalidState = _useState4[1];

  var checkedFinal = manageChecked ? checked : checkedSate;
  var invalidFinal = manageInvalid ? invalid : invalidSate;
  var checkboxRef = (0, React.useRef)(null);

  var onChangeAction = function onChangeAction(e) {
    e === null || e === void 0 ? void 0 : e.preventDefault();
    var newValue = checkedFinal === "indeterminate" || !checkedFinal;
    var canChange = !readonly && !disabled;
    if (!canChange) return;
    !manageChecked && setCheckedState(newValue);
    onChange({
      value: manageChecked ? checked : newValue,
      valueName: value,
      label: label,
      name: name
    });
  };

  var onInvalidAction = function onInvalidAction(e) {
    !manageInvalid && setInvalidState(true);
    onInvalid(e, {
      value: manageInvalid ? invalid : true,
      valueName: value,
      label: label,
      name: name
    });
  };

  var setIndeterminate = function setIndeterminate() {
    if (checkboxRef !== null && checkboxRef !== void 0 && checkboxRef.current) {
      var _isIndeterminate = checkedFinal === "indeterminate";

      var input = checkboxRef.current.querySelector('input');
      if (input) input.indeterminate = _isIndeterminate;
    }
  };

  var stopEvent = function stopEvent(e) {
    e.preventDefault();
    e.stopPropagation();
  };

  (0, React.useEffect)(setIndeterminate, []);
  (0, React.useEffect)(setIndeterminate, [checked, checkedSate]);
  var isIndeterminate = checkedFinal === 'indeterminate';
  var checkedInputValue = isIndeterminate || checkedFinal;
  var checkBoxClasses = (0, _classnames["default"])({
    "swf-checkbox-container": true,
    "disabled": disabled,
    "readonly": readonly,
    "invalid": invalidFinal
  });
  return visible && /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: className,
      ref: ref,
      children: [(label || required) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
        className: labelClassName,
        invalid: invalidFinal,
        required: required,
        label: label
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: checkBoxClasses,
        ref: checkboxRef,
        onClick: onChangeAction,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          className: "checkbox-input",
          type: "checkbox",
          disabled: disabled,
          required: required,
          name: name,
          value: checkedFinal,
          checked: checkedInputValue,
          onInvalid: onInvalidAction,
          onChange: stopEvent,
          onClick: stopEvent
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "checkbox-information",
          children: value && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
            htmlFor: name,
            className: "checkbox-label",
            required: inlineRequired,
            label: value
          })
        })]
      })]
    })
  });
});
Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  invalid: false,
  manageChecked: false,
  manageInvalid: false,
  readonly: false,
  required: false,
  visible: true,
  onInvalid: function onInvalid() {
    return void 0;
  },
  onChange: function onChange() {
    return void 0;
  },
  inlineRequired: false,
  className: "",
  labelClassName: ""
};
Checkbox.propTypes = {
  checked: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(["indeterminate"])]),
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  manageChecked: _propTypes["default"].bool,
  manageInvalid: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  onInvalid: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  visible: _propTypes["default"].bool,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  value: _propTypes["default"].string,
  labelClassName: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  inlineRequired: _propTypes["default"].bool
};

var _default = /*#__PURE__*/React.memo(Checkbox);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DaGVja2JveC9DaGVja2JveC5qcyJdLCJuYW1lcyI6WyJDaGVja2JveCIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiY2hlY2tlZCIsImludmFsaWQiLCJtYW5hZ2VDaGVja2VkIiwibWFuYWdlSW52YWxpZCIsIm9uQ2hhbmdlIiwib25JbnZhbGlkIiwicmVhZG9ubHkiLCJkaXNhYmxlZCIsImxhYmVsIiwibmFtZSIsInZhbHVlIiwicmVxdWlyZWQiLCJ2aXNpYmxlIiwiY2xhc3NOYW1lIiwibGFiZWxDbGFzc05hbWUiLCJpbmxpbmVSZXF1aXJlZCIsImNoZWNrZWRTYXRlIiwic2V0Q2hlY2tlZFN0YXRlIiwiaW52YWxpZFNhdGUiLCJzZXRJbnZhbGlkU3RhdGUiLCJjaGVja2VkRmluYWwiLCJpbnZhbGlkRmluYWwiLCJjaGVja2JveFJlZiIsIm9uQ2hhbmdlQWN0aW9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmV3VmFsdWUiLCJjYW5DaGFuZ2UiLCJ2YWx1ZU5hbWUiLCJvbkludmFsaWRBY3Rpb24iLCJzZXRJbmRldGVybWluYXRlIiwiY3VycmVudCIsImlzSW5kZXRlcm1pbmF0ZSIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsImluZGV0ZXJtaW5hdGUiLCJzdG9wRXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjaGVja2VkSW5wdXRWYWx1ZSIsImNoZWNrQm94Q2xhc3NlcyIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImJvb2wiLCJvbmVPZiIsInN0cmluZyIsImZ1bmMiLCJvYmplY3QiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQU1BLFFBQVEsZ0JBQUdDLEtBQUssQ0FBQ0MsVUFBTixDQUFpQixVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFBQSxNQUUxQ0MsT0FGMEMsR0FX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QztBQW1CakJoQyxFQUFBQSxjQUFjLEVBQUUwQixzQkFBVUU7QUFuQlQsQ0FBckI7OzRCQXNCZS9DLEtBQUssQ0FBQ29ELElBQU4sQ0FBV3JELFFBQVgsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5pbXBvcnQgUmVxdWlyZWRMYWJlbCBmcm9tIFwiLi4vUmVxdWlyZWRMYWJlbC9SZXF1aXJlZExhYmVsXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENoZWNrYm94ID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGNoZWNrZWQsIGludmFsaWQsXHJcbiAgICAgICAgbWFuYWdlQ2hlY2tlZCwgbWFuYWdlSW52YWxpZCxcclxuICAgICAgICBvbkNoYW5nZSwgb25JbnZhbGlkLFxyXG4gICAgICAgIHJlYWRvbmx5LCBkaXNhYmxlZCwgbGFiZWwsIG5hbWUsIHZhbHVlLFxyXG4gICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgIHZpc2libGUsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIGxhYmVsQ2xhc3NOYW1lLFxyXG4gICAgICAgIGlubGluZVJlcXVpcmVkXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgW2NoZWNrZWRTYXRlLCBzZXRDaGVja2VkU3RhdGVdID0gdXNlU3RhdGUoY2hlY2tlZCk7XHJcbiAgICBjb25zdCBbaW52YWxpZFNhdGUsIHNldEludmFsaWRTdGF0ZV0gPSB1c2VTdGF0ZShpbnZhbGlkKTtcclxuXHJcbiAgICBjb25zdCBjaGVja2VkRmluYWwgPSBtYW5hZ2VDaGVja2VkID8gY2hlY2tlZCA6IGNoZWNrZWRTYXRlO1xyXG4gICAgY29uc3QgaW52YWxpZEZpbmFsID0gbWFuYWdlSW52YWxpZCA/IGludmFsaWQgOiBpbnZhbGlkU2F0ZTtcclxuXHJcbiAgICBjb25zdCBjaGVja2JveFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUFjdGlvbiA9IChlKSA9PiB7XHJcbiAgICAgICAgZT8ucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbmV3VmFsdWUgPSAoY2hlY2tlZEZpbmFsID09PSBcImluZGV0ZXJtaW5hdGVcIikgfHwgIWNoZWNrZWRGaW5hbDtcclxuICAgICAgICBsZXQgY2FuQ2hhbmdlID0gIXJlYWRvbmx5ICYmICFkaXNhYmxlZDtcclxuXHJcbiAgICAgICAgaWYgKCFjYW5DaGFuZ2UpIHJldHVybjtcclxuXHJcbiAgICAgICAgIW1hbmFnZUNoZWNrZWQgJiYgc2V0Q2hlY2tlZFN0YXRlKG5ld1ZhbHVlKTtcclxuICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiBtYW5hZ2VDaGVja2VkID8gY2hlY2tlZCA6IG5ld1ZhbHVlLFxyXG4gICAgICAgICAgICB2YWx1ZU5hbWU6IHZhbHVlLCBsYWJlbCwgbmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uSW52YWxpZEFjdGlvbiA9IChlKSA9PiB7XHJcbiAgICAgICAgIW1hbmFnZUludmFsaWQgJiYgc2V0SW52YWxpZFN0YXRlKHRydWUpXHJcbiAgICAgICAgb25JbnZhbGlkKGUsIHtcclxuICAgICAgICAgICAgdmFsdWU6IG1hbmFnZUludmFsaWQgPyBpbnZhbGlkIDogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWVOYW1lOiB2YWx1ZSwgbGFiZWw6IGxhYmVsLCBuYW1lOiBuYW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0SW5kZXRlcm1pbmF0ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY2hlY2tib3hSZWY/LmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGlzSW5kZXRlcm1pbmF0ZSA9IGNoZWNrZWRGaW5hbCA9PT0gXCJpbmRldGVybWluYXRlXCI7XHJcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGNoZWNrYm94UmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGlucHV0KVxyXG4gICAgICAgICAgICAgICAgaW5wdXQuaW5kZXRlcm1pbmF0ZSA9IGlzSW5kZXRlcm1pbmF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdG9wRXZlbnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCggc2V0SW5kZXRlcm1pbmF0ZSwgW10pXHJcbiAgICB1c2VFZmZlY3QoIHNldEluZGV0ZXJtaW5hdGUsIFtjaGVja2VkLCBjaGVja2VkU2F0ZV0pXHJcblxyXG4gICAgbGV0IGlzSW5kZXRlcm1pbmF0ZSA9IGNoZWNrZWRGaW5hbCA9PT0gJ2luZGV0ZXJtaW5hdGUnXHJcbiAgICBsZXQgY2hlY2tlZElucHV0VmFsdWUgPSBpc0luZGV0ZXJtaW5hdGUgfHwgY2hlY2tlZEZpbmFsO1xyXG5cclxuICAgIGxldCBjaGVja0JveENsYXNzZXMgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICBcInN3Zi1jaGVja2JveC1jb250YWluZXJcIjogdHJ1ZSxcclxuICAgICAgICBcImRpc2FibGVkXCI6IGRpc2FibGVkLFxyXG4gICAgICAgIFwicmVhZG9ubHlcIjogcmVhZG9ubHksXHJcbiAgICAgICAgXCJpbnZhbGlkXCI6IGludmFsaWRGaW5hbFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHZpc2libGUgJiZcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHJlZj17cmVmfT5cclxuICAgICAgICAgICAgICAgICAgICB7KGxhYmVsIHx8IHJlcXVpcmVkKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVxdWlyZWRMYWJlbCBjbGFzc05hbWU9e2xhYmVsQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkRmluYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NoZWNrQm94Q2xhc3Nlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17Y2hlY2tib3hSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNoYW5nZUFjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImNoZWNrYm94LWlucHV0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGVja2VkRmluYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkSW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW52YWxpZD17b25JbnZhbGlkQWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3N0b3BFdmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N0b3BFdmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2hlY2tib3gtaW5mb3JtYXRpb25cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXF1aXJlZExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiY2hlY2tib3gtbGFiZWxcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17aW5saW5lUmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICApO1xyXG5cclxufSk7XHJcblxyXG5DaGVja2JveC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGludmFsaWQ6IGZhbHNlLFxyXG4gICAgbWFuYWdlQ2hlY2tlZDogZmFsc2UsXHJcbiAgICBtYW5hZ2VJbnZhbGlkOiBmYWxzZSxcclxuICAgIHJlYWRvbmx5OiBmYWxzZSxcclxuICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIHZpc2libGU6IHRydWUsXHJcbiAgICBvbkludmFsaWQ6ICgpID0+IHZvaWQgMCxcclxuICAgIG9uQ2hhbmdlOiAoKSA9PiB2b2lkIDAsXHJcbiAgICBpbmxpbmVSZXF1aXJlZDogZmFsc2UsXHJcbiAgICBjbGFzc05hbWU6IFwiXCIsXHJcbiAgICBsYWJlbENsYXNzTmFtZTogXCJcIixcclxufTtcclxuXHJcbkNoZWNrYm94LnByb3BUeXBlcyA9IHtcclxuICAgIGNoZWNrZWQ6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIHByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIHByb3BUeXBlcy5vbmVPZihbXCJpbmRldGVybWluYXRlXCJdKVxyXG4gICAgXSksXHJcbiAgICBkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbWFuYWdlQ2hlY2tlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VJbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG5hbWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICByZWFkb25seTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICByZXF1aXJlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvbkludmFsaWQ6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25DaGFuZ2U6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgdmlzaWJsZTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjbGFzc05hbWU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5vYmplY3RdKSxcclxuICAgIHZhbHVlOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGFiZWxDbGFzc05hbWU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5vYmplY3RdKSxcclxuICAgIGlubGluZVJlcXVpcmVkOiBwcm9wVHlwZXMuYm9vbFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKENoZWNrYm94KSJdfQ==