"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

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
          dispatch = _this$props.dispatch,
          properties = _this$props.properties;
      var disabled = properties.disabled,
          _properties$label = properties.label,
          label = _properties$label === void 0 ? "label" : _properties$label,
          _properties$name = properties.name,
          name = _properties$name === void 0 ? "name" : _properties$name,
          placeholder = properties.placeholder,
          readonly = properties.readonly,
          required = properties.required,
          type = properties.type,
          value = properties.value,
          invalid = properties.invalid,
          step = properties.step,
          autofocus = properties.autofocus,
          max = properties.max,
          min = properties.min,
          maxlength = properties.maxlength,
          minlength = properties.minlength,
          pattern = properties.pattern,
          multiple = properties.multiple,
          message = properties.message;

      var _hasLabel = label !== undefined;

      var _hasMessages = message.length > 0;

      console.log("has", _hasMessages);
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "input-container",
        children: [_hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: label
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          className: "input-field",
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
          onInput: function onInput() {
            return dispatch(_constants.SWF_INPUT.INPUT);
          }
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
  type: "text"
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
  name: _propTypes["default"].string,
  pattern: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  step: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].oneOf["any"]]),
  type: _propTypes["default"].oneOf(["email", "ip", "number", "text"]),
  value: _propTypes["default"].string
};
var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJJbnB1dCIsInByb3BzIiwic3RhdGUiLCJjaGVja2VkIiwiZGlzcGF0Y2giLCJwcm9wZXJ0aWVzIiwiZGlzYWJsZWQiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJ0eXBlIiwidmFsdWUiLCJpbnZhbGlkIiwic3RlcCIsImF1dG9mb2N1cyIsIm1heCIsIm1pbiIsIm1heGxlbmd0aCIsIm1pbmxlbmd0aCIsInBhdHRlcm4iLCJtdWx0aXBsZSIsIm1lc3NhZ2UiLCJfaGFzTGFiZWwiLCJ1bmRlZmluZWQiLCJfaGFzTWVzc2FnZXMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiU1dGX0lOUFVUIiwiSU5QVVQiLCJtYXAiLCJlbCIsIl9oYXNJY29uIiwiaWNvbiIsIl9oYXNDb250ZW50IiwiY29udGVudCIsIl9leGlzdCIsInN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwibWFuYWdlSW52YWxpZCIsIm1hbmFnZVZhbHVlIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mIiwib25lT2ZUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEs7Ozs7O0FBQ0wsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbEIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWkMsTUFBQUEsT0FBTyxFQUFFLE1BQUtGLEtBQUwsQ0FBV0U7QUFEUixLQUFiO0FBRmtCO0FBS2xCOzs7O1dBRUQsa0JBQVM7QUFBQSx3QkFDdUIsS0FBS0YsS0FENUI7QUFBQSxVQUNERyxRQURDLGVBQ0RBLFFBREM7QUFBQSxVQUNTQyxVQURULGVBQ1NBLFVBRFQ7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bEI7ZUErQmUvQyxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5pbXBvcnQge1NXRl9JTlBVVH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0Y2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3Qge2Rpc3BhdGNoLCBwcm9wZXJ0aWVzfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRkaXNhYmxlZCxcclxuXHRcdFx0bGFiZWwgPSBcImxhYmVsXCIsXHJcblx0XHRcdG5hbWU9IFwibmFtZVwiLFxyXG5cdFx0XHRwbGFjZWhvbGRlcixcclxuXHRcdFx0cmVhZG9ubHksXHJcblx0XHRcdHJlcXVpcmVkLFxyXG5cdFx0XHR0eXBlLFxyXG5cdFx0XHR2YWx1ZSxcclxuXHRcdFx0aW52YWxpZCxcclxuXHRcdFx0c3RlcCxcclxuXHRcdFx0YXV0b2ZvY3VzLFxyXG5cdFx0XHRtYXgsXHJcblx0XHRcdG1pbixcclxuXHRcdFx0bWF4bGVuZ3RoLFxyXG5cdFx0XHRtaW5sZW5ndGgsXHJcblx0XHRcdHBhdHRlcm4sXHJcblx0XHRcdG11bHRpcGxlLFxyXG5cdFx0XHRtZXNzYWdlXHJcblx0XHR9ID0gcHJvcGVydGllcztcclxuXHJcblx0XHRjb25zdCBfaGFzTGFiZWwgPSBsYWJlbCAhPT0gdW5kZWZpbmVkO1xyXG5cdFx0Y29uc3QgX2hhc01lc3NhZ2VzID0gbWVzc2FnZS5sZW5ndGg+MDtcclxuXHRcdGNvbnNvbGUubG9nKFwiaGFzXCIsIF9oYXNNZXNzYWdlcyk7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2ICBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIj5cclxuXHRcdFx0XHR7IF9oYXNMYWJlbCAmJlxyXG5cdFx0XHRcdFx0PHNwYW4+e2xhYmVsfTwvc3Bhbj5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiXHJcblx0XHRcdFx0XHQgICBuYW1lPXtuYW1lfVxyXG5cdFx0XHRcdFx0ICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG5cdFx0XHRcdFx0ICAgc3RlcD17c3RlcH1cclxuXHRcdFx0XHRcdCAgIHR5cGU9e3R5cGV9XHJcblx0XHRcdFx0XHQgICBhcmlhLXJlcXVpcmVkPXtyZXF1aXJlZH1cclxuXHRcdFx0XHRcdCAgIGFyaWEtaW52YWxpZD17aW52YWxpZH1cclxuXHRcdFx0XHRcdCAgIHZhbHVlPXt2YWx1ZX1cclxuXHRcdFx0XHRcdCAgIHJlYWRPbmx5PXtyZWFkb25seX1cclxuXHRcdFx0XHRcdCAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuXHRcdFx0XHRcdCAgIGF1dG9Gb2N1cyA9e2F1dG9mb2N1c31cclxuXHRcdFx0XHRcdCAgIG1heD17bWF4fVxyXG5cdFx0XHRcdFx0ICAgbWluPXttaW59XHJcblx0XHRcdFx0XHQgICBtYXhMZW5ndGg9e21heGxlbmd0aH1cclxuXHRcdFx0XHRcdCAgIG1pbkxlbmd0aD17bWlubGVuZ3RofVxyXG5cdFx0XHRcdFx0ICAgcGF0dGVybj17cGF0dGVybn1cclxuXHRcdFx0XHRcdCAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuXHRcdFx0XHRcdCAgIG11bHRpcGxlPXttdWx0aXBsZX1cclxuXHRcdFx0XHRcdCAgIG9uSW5wdXQ9eygpPT4gZGlzcGF0Y2goU1dGX0lOUFVULklOUFVUKX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgX2hhc01lc3NhZ2VzICYmXHJcblx0XHRcdFx0XHRtZXNzYWdlLm1hcCgoZWwpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgX2hhc0ljb24gPSBlbC5pY29uICE9PSB1bmRlZmluZWQgJiYgZWwuaWNvbi5sZW5ndGg+MDtcclxuXHRcdFx0XHRcdFx0Y29uc3QgX2hhc0NvbnRlbnQgPSBlbC5jb250ZW50ICE9PXVuZGVmaW5lZCAmJiBlbC5jb250ZW50Lmxlbmd0aD4wO1xyXG5cclxuXHRcdFx0XHRcdFx0Y29uc3QgX2V4aXN0ID0gX2hhc0ljb24gfHwgX2hhc0NvbnRlbnQ7XHJcblx0XHRcdFx0XHRcdHJldHVybihcclxuXHRcdFx0XHRcdFx0XHRfZXhpc3RcclxuXHRcdFx0XHRcdFx0XHRcdD9cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGVsLnN0YXR1cyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7X2hhc0ljb24gJiYgbnVsbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vPHgtbW9iaS1zd2YtaWNvbiBpY29uPXtlbC5pY29ufSBzaXplPVwic21cIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0e19oYXNDb250ZW50ICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2VsLmNvbnRlbnR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDogbnVsbFxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xyXG5cdGF1dG9mb2N1czogZmFsc2UsXHJcblx0ZGlzYWJsZWQ6IGZhbHNlLFxyXG5cdGludmFsaWQ6IGZhbHNlLFxyXG5cdG1hbmFnZUludmFsaWQ6IGZhbHNlLFxyXG5cdG1hbmFnZVZhbHVlOiBmYWxzZSxcclxuXHRtZXNzYWdlOiBbXSxcclxuXHRtdWx0aXBsZTogZmFsc2UsXHJcblx0cmVhZG9ubHk6IGZhbHNlLFxyXG5cdHJlcXVpcmVkOiBmYWxzZSxcclxuXHRzdGVwOiBcImFueVwiLFxyXG5cdHR5cGU6IFwidGV4dFwiXHJcbn1cclxuXHJcbklucHV0LnByb3BUeXBlcyA9IHtcclxuXHRhdXRvZm9jdXM6IHByb3BUeXBlcy5ib29sLFxyXG5cdGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuXHQvLyBoZWxwZXJDb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdGludmFsaWQ6IHByb3BUeXBlcy5ib29sLFxyXG5cdGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdG1hbmFnZUludmFsaWQ6IHByb3BUeXBlcy5ib29sLFxyXG5cdG1hbmFnZVZhbHVlOiBwcm9wVHlwZXMuYm9vbCxcclxuXHRtYXg6IHByb3BUeXBlcy5udW1iZXIsXHJcblx0bWluOiBwcm9wVHlwZXMubnVtYmVyLFxyXG5cdG1heGxlbmd0aDogcHJvcFR5cGVzLm51bWJlcixcclxuXHRtaW5sZW5ndGg6IHByb3BUeXBlcy5udW1iZXIsXHJcblx0bWVzc2FnZTogIHByb3BUeXBlcy5hcnJheU9mKHByb3BUeXBlcy5zaGFwZSh7XHJcblx0XHRzdGF0dXM6IHByb3BUeXBlcy5vbmVPZihbXCJjcml0aWNhbFwiICwgXCJ3YXJuaW5nXCIgLCBcInBvc2l0aXZlXCIgLCBcImluZm9cIiAsIFwic3VnZ2VzdGlvblwiXSksXHJcblx0XHRjb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0aWNvbjogcHJvcFR5cGVzLnN0cmluZ1xyXG5cdH0pKSxcclxuXHRtdWx0aXBsZTogcHJvcFR5cGVzLmJvb2wsXHJcblx0bmFtZTogcHJvcFR5cGVzLnN0cmluZyxcclxuXHRwYXR0ZXJuOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdHBsYWNlaG9sZGVyOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdHJlYWRvbmx5OiBwcm9wVHlwZXMuYm9vbCxcclxuXHRyZXF1aXJlZDogcHJvcFR5cGVzLmJvb2wsXHJcblx0c3RlcDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcblx0XHRwcm9wVHlwZXMubnVtYmVyLFxyXG5cdFx0cHJvcFR5cGVzLm9uZU9mW1wiYW55XCJdXHJcblx0XSksXHJcblx0dHlwZTogcHJvcFR5cGVzLm9uZU9mKFtcImVtYWlsXCIgLCBcImlwXCIgLCBcIm51bWJlclwiICwgXCJ0ZXh0XCJdKSxcclxuXHR2YWx1ZTogcHJvcFR5cGVzLnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcclxuIl19