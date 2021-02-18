"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.css"));

var _constants = require("./constants");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Input = /*#__PURE__*/function (_React$Component) {
  _inherits(Input, _React$Component);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);
    _this.state = {
      checked: _this.props.checked
    };
    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          label = _this$props.label,
          _this$props$name = _this$props.name,
          name = _this$props$name === void 0 ? "name" : _this$props$name,
          placeholder = _this$props.placeholder,
          readonly = _this$props.readonly,
          required = _this$props.required,
          type = _this$props.type,
          value = _this$props.value,
          invalid = _this$props.invalid,
          step = _this$props.step,
          autofocus = _this$props.autofocus,
          max = _this$props.max,
          min = _this$props.min,
          maxlength = _this$props.maxlength,
          minlength = _this$props.minlength,
          pattern = _this$props.pattern,
          multiple = _this$props.multiple,
          message = _this$props.message;

      var _hasLabel = label !== undefined;

      var _hasMessages = message.length > 0;

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "form-group",
          children: [_hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            htmlFor: "name",
            children: label
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            className: "form-control",
            id: "name",
            name: name,
            placeholder: placeholder,
            step: step,
            type: type,
            "aria-required": required,
            "aria-invalid": invalid,
            value: value,
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
            onInput: this.props.onInput,
            onChange: this.props.onChange
          }), _hasMessages && message.map(function (el) {
            var _hasIcon = el.icon !== undefined && el.icon.length > 0;

            var _hasContent = el.content !== undefined && el.content.length > 0;

            var _exist = _hasIcon || _hasContent;

            return _exist ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: (0, _classnames["default"])(el.status),
              children: [_hasIcon && null //<x-mobi-swf-icon icon={el.icon} size="sm"/>
              , _hasContent && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: el.content
              })]
            }) : null;
          })]
        })]
      });
    }
  }]);

  return Input;
}(React.Component);

Input.defaultProps = {
  autofocus: false,
  disabled: false,
  invalid: false,
  manageInvalid: false,
  manageValue: false,
  message: [],
  multiple: false,
  readonly: false,
  required: false,
  step: "any",
  type: "text",
  onInput: function onInput() {
    return void 0;
  },
  onChange: function onChange() {
    return void 0;
  }
};
Input.propTypes = {
  autofocus: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  // helperContent: propTypes.string,
  invalid: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  manageInvalid: _propTypes["default"].bool,
  manageValue: _propTypes["default"].bool,
  max: _propTypes["default"].number,
  min: _propTypes["default"].number,
  maxlength: _propTypes["default"].number,
  minlength: _propTypes["default"].number,
  message: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    status: _propTypes["default"].oneOf(["critical", "warning", "positive", "info", "suggestion"]),
    content: _propTypes["default"].string,
    icon: _propTypes["default"].string
  })),
  multiple: _propTypes["default"].bool,
  name: _propTypes["default"].string.required,
  pattern: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  step: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].oneOf["any"]]),
  onInput: _propTypes["default"].func,
  type: _propTypes["default"].oneOf(["password", "email", "number", "url", "tel", "search", "date", "datetime", "datetime-local", "month", "week", "time"]),
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};
var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJJbnB1dCIsInByb3BzIiwic3RhdGUiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJ0eXBlIiwidmFsdWUiLCJpbnZhbGlkIiwic3RlcCIsImF1dG9mb2N1cyIsIm1heCIsIm1pbiIsIm1heGxlbmd0aCIsIm1pbmxlbmd0aCIsInBhdHRlcm4iLCJtdWx0aXBsZSIsIm1lc3NhZ2UiLCJfaGFzTGFiZWwiLCJ1bmRlZmluZWQiLCJfaGFzTWVzc2FnZXMiLCJsZW5ndGgiLCJzdHlsZXMiLCJvbklucHV0Iiwib25DaGFuZ2UiLCJtYXAiLCJlbCIsIl9oYXNJY29uIiwiaWNvbiIsIl9oYXNDb250ZW50IiwiY29udGVudCIsIl9leGlzdCIsInN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwibWFuYWdlSW52YWxpZCIsIm1hbmFnZVZhbHVlIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mIiwib25lT2ZUeXBlIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7OztBQUNMLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1pDLE1BQUFBLE9BQU8sRUFBRSxNQUFLRixLQUFMLENBQVdFO0FBRFIsS0FBYjtBQUZrQjtBQUtsQjs7OztXQUVELGtCQUFTO0FBQUEsd0JBb0JKLEtBQUtGLEtBcEJEO0FBQUEsVUFFUEcsUUFGTyxlQUVQQSxRQUZPO0FBQUEsVUFHUEMsS0FITyxlQUdQQSxLQUhPO0FBQUEseUNBSVBDLElBSk87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aEIsRUFBQUEsUUFBUSxFQUFFYyxzQkFBVVE7QUE5QkgsQ0FBbEI7ZUFpQ2VsRCxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLmNzc1wiO1xyXG5cclxuaW1wb3J0IHtTV0ZfSU5QVVR9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZFxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0ZGlzYWJsZWQsXHJcblx0XHRcdGxhYmVsLFxyXG5cdFx0XHRuYW1lPSBcIm5hbWVcIixcclxuXHRcdFx0cGxhY2Vob2xkZXIsXHJcblx0XHRcdHJlYWRvbmx5LFxyXG5cdFx0XHRyZXF1aXJlZCxcclxuXHRcdFx0dHlwZSxcclxuXHRcdFx0dmFsdWUsXHJcblx0XHRcdGludmFsaWQsXHJcblx0XHRcdHN0ZXAsXHJcblx0XHRcdGF1dG9mb2N1cyxcclxuXHRcdFx0bWF4LFxyXG5cdFx0XHRtaW4sXHJcblx0XHRcdG1heGxlbmd0aCxcclxuXHRcdFx0bWlubGVuZ3RoLFxyXG5cdFx0XHRwYXR0ZXJuLFxyXG5cdFx0XHRtdWx0aXBsZSxcclxuXHRcdFx0bWVzc2FnZVxyXG5cdFx0fSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0Y29uc3QgX2hhc0xhYmVsID0gbGFiZWwgIT09IHVuZGVmaW5lZDtcclxuXHRcdGNvbnN0IF9oYXNNZXNzYWdlcyA9IG1lc3NhZ2UubGVuZ3RoID4gMDtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PHN0eWxlPntzdHlsZXN9PC9zdHlsZT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdHsgX2hhc0xhYmVsICYmIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPntsYWJlbH08L2xhYmVsPn1cclxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHQgICBpZD1cIm5hbWVcIlxyXG5cdFx0XHRcdFx0XHQgICBuYW1lPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHQgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcblx0XHRcdFx0XHRcdCAgIHN0ZXA9e3N0ZXB9XHJcblx0XHRcdFx0XHRcdCAgIHR5cGU9e3R5cGV9XHJcblx0XHRcdFx0XHRcdCAgIGFyaWEtcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG5cdFx0XHRcdFx0XHQgICBhcmlhLWludmFsaWQ9e2ludmFsaWR9XHJcblx0XHRcdFx0XHRcdCAgIHZhbHVlPXt2YWx1ZX1cclxuXHRcdFx0XHRcdFx0ICAgcmVhZE9ubHk9e3JlYWRvbmx5fVxyXG5cdFx0XHRcdFx0XHQgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcblx0XHRcdFx0XHRcdCAgIGF1dG9Gb2N1cyA9e2F1dG9mb2N1c31cclxuXHRcdFx0XHRcdFx0ICAgbWF4PXttYXh9XHJcblx0XHRcdFx0XHRcdCAgIG1pbj17bWlufVxyXG5cdFx0XHRcdFx0XHQgICBtYXhMZW5ndGg9e21heGxlbmd0aH1cclxuXHRcdFx0XHRcdFx0ICAgbWluTGVuZ3RoPXttaW5sZW5ndGh9XHJcblx0XHRcdFx0XHRcdCAgIHBhdHRlcm49e3BhdHRlcm59XHJcblx0XHRcdFx0XHRcdCAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuXHRcdFx0XHRcdFx0ICAgbXVsdGlwbGU9e211bHRpcGxlfVxyXG5cdFx0XHRcdFx0XHQgICBvbklucHV0PXt0aGlzLnByb3BzLm9uSW5wdXR9XHJcblx0XHRcdFx0XHRcdCAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdHsgX2hhc01lc3NhZ2VzICYmXHJcblx0XHRcdFx0XHRtZXNzYWdlLm1hcCgoZWwpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgX2hhc0ljb24gPSBlbC5pY29uICE9PSB1bmRlZmluZWQgJiYgZWwuaWNvbi5sZW5ndGg+MDtcclxuXHRcdFx0XHRcdFx0Y29uc3QgX2hhc0NvbnRlbnQgPSBlbC5jb250ZW50ICE9PXVuZGVmaW5lZCAmJiBlbC5jb250ZW50Lmxlbmd0aD4wO1xyXG5cclxuXHRcdFx0XHRcdFx0Y29uc3QgX2V4aXN0ID0gX2hhc0ljb24gfHwgX2hhc0NvbnRlbnQ7XHJcblx0XHRcdFx0XHRcdHJldHVybihcclxuXHRcdFx0XHRcdFx0XHRfZXhpc3RcclxuXHRcdFx0XHRcdFx0XHRcdD9cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGVsLnN0YXR1cyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7X2hhc0ljb24gJiYgbnVsbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vPHgtbW9iaS1zd2YtaWNvbiBpY29uPXtlbC5pY29ufSBzaXplPVwic21cIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0e19oYXNDb250ZW50ICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntlbC5jb250ZW50fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ6IG51bGxcclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xyXG5cdGF1dG9mb2N1czogZmFsc2UsXHJcblx0ZGlzYWJsZWQ6IGZhbHNlLFxyXG5cdGludmFsaWQ6IGZhbHNlLFxyXG5cdG1hbmFnZUludmFsaWQ6IGZhbHNlLFxyXG5cdG1hbmFnZVZhbHVlOiBmYWxzZSxcclxuXHRtZXNzYWdlOiBbXSxcclxuXHRtdWx0aXBsZTogZmFsc2UsXHJcblx0cmVhZG9ubHk6IGZhbHNlLFxyXG5cdHJlcXVpcmVkOiBmYWxzZSxcclxuXHRzdGVwOiBcImFueVwiLFxyXG5cdHR5cGU6IFwidGV4dFwiLFxyXG5cdG9uSW5wdXQ6ICgpID0+IHZvaWQgMCxcclxuXHRvbkNoYW5nZTogKCkgPT4gdm9pZCAwXHJcbn1cclxuXHJcbklucHV0LnByb3BUeXBlcyA9IHtcclxuXHRhdXRvZm9jdXM6IHByb3BUeXBlcy5ib29sLFxyXG5cdGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuXHQvLyBoZWxwZXJDb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdGludmFsaWQ6IHByb3BUeXBlcy5ib29sLFxyXG5cdGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdG1hbmFnZUludmFsaWQ6IHByb3BUeXBlcy5ib29sLFxyXG5cdG1hbmFnZVZhbHVlOiBwcm9wVHlwZXMuYm9vbCxcclxuXHRtYXg6IHByb3BUeXBlcy5udW1iZXIsXHJcblx0bWluOiBwcm9wVHlwZXMubnVtYmVyLFxyXG5cdG1heGxlbmd0aDogcHJvcFR5cGVzLm51bWJlcixcclxuXHRtaW5sZW5ndGg6IHByb3BUeXBlcy5udW1iZXIsXHJcblx0bWVzc2FnZTogIHByb3BUeXBlcy5hcnJheU9mKHByb3BUeXBlcy5zaGFwZSh7XHJcblx0XHRzdGF0dXM6IHByb3BUeXBlcy5vbmVPZihbXCJjcml0aWNhbFwiICwgXCJ3YXJuaW5nXCIgLCBcInBvc2l0aXZlXCIgLCBcImluZm9cIiAsIFwic3VnZ2VzdGlvblwiXSksXHJcblx0XHRjb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0aWNvbjogcHJvcFR5cGVzLnN0cmluZ1xyXG5cdH0pKSxcclxuXHRtdWx0aXBsZTogcHJvcFR5cGVzLmJvb2wsXHJcblx0bmFtZTogcHJvcFR5cGVzLnN0cmluZy5yZXF1aXJlZCxcclxuXHRwYXR0ZXJuOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdHBsYWNlaG9sZGVyOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdHJlYWRvbmx5OiBwcm9wVHlwZXMuYm9vbCxcclxuXHRyZXF1aXJlZDogcHJvcFR5cGVzLmJvb2wsXHJcblx0c3RlcDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcblx0XHRwcm9wVHlwZXMubnVtYmVyLFxyXG5cdFx0cHJvcFR5cGVzLm9uZU9mW1wiYW55XCJdXHJcblx0XSksXHJcblx0b25JbnB1dDogcHJvcFR5cGVzLmZ1bmMsXHJcblx0dHlwZTogcHJvcFR5cGVzLm9uZU9mKFtcInBhc3N3b3JkXCIsIFwiZW1haWxcIiwgXCJudW1iZXJcIiwgXCJ1cmxcIiwgXCJ0ZWxcIiwgXCJzZWFyY2hcIiwgXCJkYXRlXCIsIFwiZGF0ZXRpbWVcIiwgXCJkYXRldGltZS1sb2NhbFwiLCBcIm1vbnRoXCIsIFwid2Vla1wiLCBcInRpbWVcIl0pLFxyXG5cdHZhbHVlOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdG9uQ2hhbmdlOiBwcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcclxuIl19