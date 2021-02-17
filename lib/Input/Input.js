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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJJbnB1dCIsInByb3BzIiwic3RhdGUiLCJjaGVja2VkIiwiZGlzcGF0Y2giLCJwcm9wZXJ0aWVzIiwiZGlzYWJsZWQiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJ0eXBlIiwidmFsdWUiLCJpbnZhbGlkIiwic3RlcCIsImF1dG9mb2N1cyIsIm1heCIsIm1pbiIsIm1heGxlbmd0aCIsIm1pbmxlbmd0aCIsInBhdHRlcm4iLCJtdWx0aXBsZSIsIm1lc3NhZ2UiLCJfaGFzTGFiZWwiLCJ1bmRlZmluZWQiLCJfaGFzTWVzc2FnZXMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiU1dGX0lOUFVUIiwiSU5QVVQiLCJtYXAiLCJlbCIsIl9oYXNJY29uIiwiaWNvbiIsIl9oYXNDb250ZW50IiwiY29udGVudCIsIl9leGlzdCIsInN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwibWFuYWdlSW52YWxpZCIsIm1hbmFnZVZhbHVlIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mIiwib25lT2ZUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEs7Ozs7O0FBQ0wsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbEIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWkMsTUFBQUEsT0FBTyxFQUFFLE1BQUtGLEtBQUwsQ0FBV0U7QUFEUixLQUFiO0FBRmtCO0FBS2xCOzs7O1dBRUQsa0JBQVM7QUFBQSx3QkFDdUIsS0FBS0YsS0FENUI7QUFBQSxVQUNERyxRQURDLGVBQ0RBLFFBREM7QUFBQSxVQUNTQyxVQURULGVBQ1NBLFVBRFQ7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bEI7ZUErQmUvQyxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQge1NXRl9JTlBVVH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZFxuXHRcdH1cblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge2Rpc3BhdGNoLCBwcm9wZXJ0aWVzfSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRkaXNhYmxlZCxcblx0XHRcdGxhYmVsID0gXCJsYWJlbFwiLFxuXHRcdFx0bmFtZT0gXCJuYW1lXCIsXG5cdFx0XHRwbGFjZWhvbGRlcixcblx0XHRcdHJlYWRvbmx5LFxuXHRcdFx0cmVxdWlyZWQsXG5cdFx0XHR0eXBlLFxuXHRcdFx0dmFsdWUsXG5cdFx0XHRpbnZhbGlkLFxuXHRcdFx0c3RlcCxcblx0XHRcdGF1dG9mb2N1cyxcblx0XHRcdG1heCxcblx0XHRcdG1pbixcblx0XHRcdG1heGxlbmd0aCxcblx0XHRcdG1pbmxlbmd0aCxcblx0XHRcdHBhdHRlcm4sXG5cdFx0XHRtdWx0aXBsZSxcblx0XHRcdG1lc3NhZ2Vcblx0XHR9ID0gcHJvcGVydGllcztcblxuXHRcdGNvbnN0IF9oYXNMYWJlbCA9IGxhYmVsICE9PSB1bmRlZmluZWQ7XG5cdFx0Y29uc3QgX2hhc01lc3NhZ2VzID0gbWVzc2FnZS5sZW5ndGg+MDtcblx0XHRjb25zb2xlLmxvZyhcImhhc1wiLCBfaGFzTWVzc2FnZXMpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2ICBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIj5cblx0XHRcdFx0eyBfaGFzTGFiZWwgJiZcblx0XHRcdFx0XHQ8c3Bhbj57bGFiZWx9PC9zcGFuPlxuXHRcdFx0XHR9XG5cblx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCJcblx0XHRcdFx0XHQgICBuYW1lPXtuYW1lfVxuXHRcdFx0XHRcdCAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdFx0XHQgICBzdGVwPXtzdGVwfVxuXHRcdFx0XHRcdCAgIHR5cGU9e3R5cGV9XG5cdFx0XHRcdFx0ICAgYXJpYS1yZXF1aXJlZD17cmVxdWlyZWR9XG5cdFx0XHRcdFx0ICAgYXJpYS1pbnZhbGlkPXtpbnZhbGlkfVxuXHRcdFx0XHRcdCAgIHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0XHQgICByZWFkT25seT17cmVhZG9ubHl9XG5cdFx0XHRcdFx0ICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuXHRcdFx0XHRcdCAgIGF1dG9Gb2N1cyA9e2F1dG9mb2N1c31cblx0XHRcdFx0XHQgICBtYXg9e21heH1cblx0XHRcdFx0XHQgICBtaW49e21pbn1cblx0XHRcdFx0XHQgICBtYXhMZW5ndGg9e21heGxlbmd0aH1cblx0XHRcdFx0XHQgICBtaW5MZW5ndGg9e21pbmxlbmd0aH1cblx0XHRcdFx0XHQgICBwYXR0ZXJuPXtwYXR0ZXJufVxuXHRcdFx0XHRcdCAgIGRpc2FibGVkPXtkaXNhYmxlZH1cblx0XHRcdFx0XHQgICBtdWx0aXBsZT17bXVsdGlwbGV9XG5cdFx0XHRcdFx0ICAgb25JbnB1dD17KCk9PiBkaXNwYXRjaChTV0ZfSU5QVVQuSU5QVVQpfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7IF9oYXNNZXNzYWdlcyAmJlxuXHRcdFx0XHRcdG1lc3NhZ2UubWFwKChlbCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgX2hhc0ljb24gPSBlbC5pY29uICE9PSB1bmRlZmluZWQgJiYgZWwuaWNvbi5sZW5ndGg+MDtcblx0XHRcdFx0XHRcdGNvbnN0IF9oYXNDb250ZW50ID0gZWwuY29udGVudCAhPT11bmRlZmluZWQgJiYgZWwuY29udGVudC5sZW5ndGg+MDtcblxuXHRcdFx0XHRcdFx0Y29uc3QgX2V4aXN0ID0gX2hhc0ljb24gfHwgX2hhc0NvbnRlbnQ7XG5cdFx0XHRcdFx0XHRyZXR1cm4oXG5cdFx0XHRcdFx0XHRcdF9leGlzdFxuXHRcdFx0XHRcdFx0XHRcdD9cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhlbC5zdGF0dXMpfT5cblx0XHRcdFx0XHRcdFx0XHRcdHtfaGFzSWNvbiAmJiBudWxsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vPHgtbW9iaS1zd2YtaWNvbiBpY29uPXtlbC5pY29ufSBzaXplPVwic21cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR7X2hhc0NvbnRlbnQgJiZcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2VsLmNvbnRlbnR9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDogbnVsbFxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH0pXG5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcblx0YXV0b2ZvY3VzOiBmYWxzZSxcblx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRpbnZhbGlkOiBmYWxzZSxcblx0bWFuYWdlSW52YWxpZDogZmFsc2UsXG5cdG1hbmFnZVZhbHVlOiBmYWxzZSxcblx0bWVzc2FnZTogW10sXG5cdG11bHRpcGxlOiBmYWxzZSxcblx0cmVhZG9ubHk6IGZhbHNlLFxuXHRyZXF1aXJlZDogZmFsc2UsXG5cdHN0ZXA6IFwiYW55XCIsXG5cdHR5cGU6IFwidGV4dFwiXG59XG5cbklucHV0LnByb3BUeXBlcyA9IHtcblx0YXV0b2ZvY3VzOiBwcm9wVHlwZXMuYm9vbCxcblx0ZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxuXHQvLyBoZWxwZXJDb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxuXHRpbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcblx0bGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXG5cdG1hbmFnZUludmFsaWQ6IHByb3BUeXBlcy5ib29sLFxuXHRtYW5hZ2VWYWx1ZTogcHJvcFR5cGVzLmJvb2wsXG5cdG1heDogcHJvcFR5cGVzLm51bWJlcixcblx0bWluOiBwcm9wVHlwZXMubnVtYmVyLFxuXHRtYXhsZW5ndGg6IHByb3BUeXBlcy5udW1iZXIsXG5cdG1pbmxlbmd0aDogcHJvcFR5cGVzLm51bWJlcixcblx0bWVzc2FnZTogIHByb3BUeXBlcy5hcnJheU9mKHByb3BUeXBlcy5zaGFwZSh7XG5cdFx0c3RhdHVzOiBwcm9wVHlwZXMub25lT2YoW1wiY3JpdGljYWxcIiAsIFwid2FybmluZ1wiICwgXCJwb3NpdGl2ZVwiICwgXCJpbmZvXCIgLCBcInN1Z2dlc3Rpb25cIl0pLFxuXHRcdGNvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXG5cdFx0aWNvbjogcHJvcFR5cGVzLnN0cmluZ1xuXHR9KSksXG5cdG11bHRpcGxlOiBwcm9wVHlwZXMuYm9vbCxcblx0bmFtZTogcHJvcFR5cGVzLnN0cmluZyxcblx0cGF0dGVybjogcHJvcFR5cGVzLnN0cmluZyxcblx0cGxhY2Vob2xkZXI6IHByb3BUeXBlcy5zdHJpbmcsXG5cdHJlYWRvbmx5OiBwcm9wVHlwZXMuYm9vbCxcblx0cmVxdWlyZWQ6IHByb3BUeXBlcy5ib29sLFxuXHRzdGVwOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcblx0XHRwcm9wVHlwZXMubnVtYmVyLFxuXHRcdHByb3BUeXBlcy5vbmVPZltcImFueVwiXVxuXHRdKSxcblx0dHlwZTogcHJvcFR5cGVzLm9uZU9mKFtcImVtYWlsXCIgLCBcImlwXCIgLCBcIm51bWJlclwiICwgXCJ0ZXh0XCJdKSxcblx0dmFsdWU6IHByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0=