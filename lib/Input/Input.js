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

var _findByType = _interopRequireDefault(require("../utils/findByType"));

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

var Start = function Start() {
  return null;
};

var End = function End() {
  return null;
};

var Input = /*#__PURE__*/function (_React$Component) {
  _inherits(Input, _React$Component);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);
    _this.state = {
      checked: _this.props.checked,
      hasStart: false,
      hasEnd: false
    };
    return _this;
  }

  _createClass(Input, [{
    key: "renderStart",
    value: function renderStart() {
      var children = this.props.children;
      var start = (0, _findByType["default"])(children, Start);
      if (!start) return null;
      !this.state.hasStart && this.setState({
        hasStart: true
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "form-control--start",
        children: start.props.children
      });
    }
  }, {
    key: "renderEnd",
    value: function renderEnd() {
      var children = this.props.children;
      var end = (0, _findByType["default"])(children, End);
      if (!end) return null;
      !this.state.hasEnd && this.setState({
        hasEnd: true
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "form-control--end",
        children: end.props.children
      });
    }
  }, {
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
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "input-group",
            children: [this.renderStart(), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              className: (0, _classnames["default"])({
                "form-control": true,
                "no-start-border": this.state.hasStart,
                "no-end-border": this.state.hasEnd
              }),
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
            }), this.renderEnd()]
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

Input.Start = Start;
Input.End = End;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJTdGFydCIsIkVuZCIsIklucHV0IiwicHJvcHMiLCJzdGF0ZSIsImNoZWNrZWQiLCJoYXNTdGFydCIsImhhc0VuZCIsImNoaWxkcmVuIiwic3RhcnQiLCJzZXRTdGF0ZSIsImVuZCIsImRpc2FibGVkIiwibGFiZWwiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJyZWFkb25seSIsInJlcXVpcmVkIiwidHlwZSIsInZhbHVlIiwiaW52YWxpZCIsInN0ZXAiLCJhdXRvZm9jdXMiLCJtYXgiLCJtaW4iLCJtYXhsZW5ndGgiLCJtaW5sZW5ndGgiLCJwYXR0ZXJuIiwibXVsdGlwbGUiLCJtZXNzYWdlIiwiX2hhc0xhYmVsIiwidW5kZWZpbmVkIiwiX2hhc01lc3NhZ2VzIiwibGVuZ3RoIiwic3R5bGVzIiwicmVuZGVyU3RhcnQiLCJvbklucHV0Iiwib25DaGFuZ2UiLCJyZW5kZXJFbmQiLCJtYXAiLCJlbCIsIl9oYXNJY29uIiwiaWNvbiIsIl9oYXNDb250ZW50IiwiY29udGVudCIsIl9leGlzdCIsInN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwibWFuYWdlSW52YWxpZCIsIm1hbmFnZVZhbHVlIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mIiwib25lT2ZUeXBlIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsU0FBTSxJQUFOO0FBQUEsQ0FBZDs7QUFDQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTTtBQUFBLFNBQU0sSUFBTjtBQUFBLENBQVo7O0lBRU1DLEs7Ozs7O0FBQ0wsaUJBQVlDLEtBQVosRUFBbUI7QUFB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QUEyQmpCdEIsRUFBQUEsT0FBTyxFQUFFZ0Isc0JBQVVRLElBM0JGO0FBNEJqQjFDLEVBQUFBLElBQUksRUFBRWtDLHNCQUFVTSxLQUFWLENBQWdCLENBQUMsVUFBRCxFQUFhLE9BQWIsRUFBc0IsUUFBdEIsRUFBZ0MsS0FBaEMsRUFBdUMsS0FBdkMsRUFBOEMsUUFBOUMsRUFBd0QsTUFBeEQsRUFBZ0UsVUFBaEUsRUFBNEUsZ0JBQTVFLEVBQThGLE9BQTlGLEVBQXVHLE1BQXZHLEVBQStHLE1BQS9HLENBQWhCLENBNUJXO0FBNkJqQnZDLEVBQUFBLEtBQUssRUFBRWlDLHNCQUFVRSxNQTdCQTtBQThCakJqQixFQUFBQSxRQUFRLEVBQUVlLHNCQUFVUTtBQTlCSCxDQUFsQjtlQWlDZTFELEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcblxuaW1wb3J0IHtTV0ZfSU5QVVR9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGZpbmRCeVR5cGUgZnJvbSBcIi4uL3V0aWxzL2ZpbmRCeVR5cGVcIjtcblxuY29uc3QgU3RhcnQgPSAoKSA9PiBudWxsO1xuY29uc3QgRW5kID0gKCkgPT4gbnVsbDtcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkLFxuXHRcdFx0aGFzU3RhcnQ6IGZhbHNlLFxuXHRcdFx0aGFzRW5kOiBmYWxzZVxuXHRcdH1cblx0fTtcblxuXHRyZW5kZXJTdGFydCAoKSB7XG5cdFx0Y29uc3Qge2NoaWxkcmVufSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3Qgc3RhcnQgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBTdGFydCk7XG5cblx0XHRpZiAoIXN0YXJ0KSByZXR1cm4gbnVsbDtcblxuXHRcdCF0aGlzLnN0YXRlLmhhc1N0YXJ0ICYmIHRoaXMuc2V0U3RhdGUoe2hhc1N0YXJ0OiB0cnVlfSlcblxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC0tc3RhcnRcIj57c3RhcnQucHJvcHMuY2hpbGRyZW59PC9kaXY+XG5cdH1cblxuXHRyZW5kZXJFbmQgKCkge1xuXHRcdGNvbnN0IHtjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IGVuZCA9IGZpbmRCeVR5cGUoY2hpbGRyZW4sIEVuZCk7XG5cblx0XHRpZiAoIWVuZCkgcmV0dXJuIG51bGw7XG5cblx0XHQhdGhpcy5zdGF0ZS5oYXNFbmQgJiYgdGhpcy5zZXRTdGF0ZSh7aGFzRW5kOiB0cnVlfSlcblxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC0tZW5kXCI+e2VuZC5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRkaXNhYmxlZCxcblx0XHRcdGxhYmVsLFxuXHRcdFx0bmFtZT0gXCJuYW1lXCIsXG5cdFx0XHRwbGFjZWhvbGRlcixcblx0XHRcdHJlYWRvbmx5LFxuXHRcdFx0cmVxdWlyZWQsXG5cdFx0XHR0eXBlLFxuXHRcdFx0dmFsdWUsXG5cdFx0XHRpbnZhbGlkLFxuXHRcdFx0c3RlcCxcblx0XHRcdGF1dG9mb2N1cyxcblx0XHRcdG1heCxcblx0XHRcdG1pbixcblx0XHRcdG1heGxlbmd0aCxcblx0XHRcdG1pbmxlbmd0aCxcblx0XHRcdHBhdHRlcm4sXG5cdFx0XHRtdWx0aXBsZSxcblx0XHRcdG1lc3NhZ2Vcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IF9oYXNMYWJlbCA9IGxhYmVsICE9PSB1bmRlZmluZWQ7XG5cdFx0Y29uc3QgX2hhc01lc3NhZ2VzID0gbWVzc2FnZS5sZW5ndGggPiAwO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8c3R5bGU+e3N0eWxlc308L3N0eWxlPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHR7IF9oYXNMYWJlbCAmJiA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj57bGFiZWx9PC9sYWJlbD59XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuXHRcdFx0XHRcdFx0e3RoaXMucmVuZGVyU3RhcnQoKX1cblx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xuXHRcdFx0XHRcdFx0XHRcImZvcm0tY29udHJvbFwiOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcIm5vLXN0YXJ0LWJvcmRlclwiOiB0aGlzLnN0YXRlLmhhc1N0YXJ0LFxuXHRcdFx0XHRcdFx0XHRcIm5vLWVuZC1ib3JkZXJcIjogdGhpcy5zdGF0ZS5oYXNFbmRcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQgICBpZD1cIm5hbWVcIlxuXHRcdFx0XHRcdFx0XHQgICBuYW1lPXtuYW1lfVxuXHRcdFx0XHRcdFx0XHQgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG5cdFx0XHRcdFx0XHRcdCAgIHN0ZXA9e3N0ZXB9XG5cdFx0XHRcdFx0XHRcdCAgIHR5cGU9e3R5cGV9XG5cdFx0XHRcdFx0XHRcdCAgIGFyaWEtcmVxdWlyZWQ9e3JlcXVpcmVkfVxuXHRcdFx0XHRcdFx0XHQgICBhcmlhLWludmFsaWQ9e2ludmFsaWR9XG5cdFx0XHRcdFx0XHRcdCAgIHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0XHRcdFx0ICAgcmVhZE9ubHk9e3JlYWRvbmx5fVxuXHRcdFx0XHRcdFx0XHQgICByZXF1aXJlZD17cmVxdWlyZWR9XG5cdFx0XHRcdFx0XHRcdCAgIGF1dG9Gb2N1cyA9e2F1dG9mb2N1c31cblx0XHRcdFx0XHRcdFx0ICAgbWF4PXttYXh9XG5cdFx0XHRcdFx0XHRcdCAgIG1pbj17bWlufVxuXHRcdFx0XHRcdFx0XHQgICBtYXhMZW5ndGg9e21heGxlbmd0aH1cblx0XHRcdFx0XHRcdFx0ICAgbWluTGVuZ3RoPXttaW5sZW5ndGh9XG5cdFx0XHRcdFx0XHRcdCAgIHBhdHRlcm49e3BhdHRlcm59XG5cdFx0XHRcdFx0XHRcdCAgIGRpc2FibGVkPXtkaXNhYmxlZH1cblx0XHRcdFx0XHRcdFx0ICAgbXVsdGlwbGU9e211bHRpcGxlfVxuXHRcdFx0XHRcdFx0XHQgICBvbklucHV0PXt0aGlzLnByb3BzLm9uSW5wdXR9XG5cdFx0XHRcdFx0XHRcdCAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdHt0aGlzLnJlbmRlckVuZCgpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsgX2hhc01lc3NhZ2VzICYmXG5cdFx0XHRcdFx0bWVzc2FnZS5tYXAoKGVsKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBfaGFzSWNvbiA9IGVsLmljb24gIT09IHVuZGVmaW5lZCAmJiBlbC5pY29uLmxlbmd0aD4wO1xuXHRcdFx0XHRcdFx0Y29uc3QgX2hhc0NvbnRlbnQgPSBlbC5jb250ZW50ICE9PXVuZGVmaW5lZCAmJiBlbC5jb250ZW50Lmxlbmd0aD4wO1xuXG5cdFx0XHRcdFx0XHRjb25zdCBfZXhpc3QgPSBfaGFzSWNvbiB8fCBfaGFzQ29udGVudDtcblx0XHRcdFx0XHRcdHJldHVybihcblx0XHRcdFx0XHRcdFx0X2V4aXN0XG5cdFx0XHRcdFx0XHRcdFx0P1xuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGVsLnN0YXR1cyl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0e19oYXNJY29uICYmIG51bGxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly88eC1tb2JpLXN3Zi1pY29uIGljb249e2VsLmljb259IHNpemU9XCJzbVwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHtfaGFzQ29udGVudCAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2VsLmNvbnRlbnR9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDogbnVsbFxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH0pXG5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC8+XG5cdFx0KVxuXHR9XG59XG5cbklucHV0LlN0YXJ0ID0gU3RhcnQ7XG5JbnB1dC5FbmQgPSBFbmQ7XG5cbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcblx0YXV0b2ZvY3VzOiBmYWxzZSxcblx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRpbnZhbGlkOiBmYWxzZSxcblx0bWFuYWdlSW52YWxpZDogZmFsc2UsXG5cdG1hbmFnZVZhbHVlOiBmYWxzZSxcblx0bWVzc2FnZTogW10sXG5cdG11bHRpcGxlOiBmYWxzZSxcblx0cmVhZG9ubHk6IGZhbHNlLFxuXHRyZXF1aXJlZDogZmFsc2UsXG5cdHN0ZXA6IFwiYW55XCIsXG5cdHR5cGU6IFwidGV4dFwiLFxuXHRvbklucHV0OiAoKSA9PiB2b2lkIDAsXG5cdG9uQ2hhbmdlOiAoKSA9PiB2b2lkIDBcbn1cblxuSW5wdXQucHJvcFR5cGVzID0ge1xuXHRhdXRvZm9jdXM6IHByb3BUeXBlcy5ib29sLFxuXHRkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXG5cdC8vIGhlbHBlckNvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXG5cdGludmFsaWQ6IHByb3BUeXBlcy5ib29sLFxuXHRsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcblx0bWFuYWdlSW52YWxpZDogcHJvcFR5cGVzLmJvb2wsXG5cdG1hbmFnZVZhbHVlOiBwcm9wVHlwZXMuYm9vbCxcblx0bWF4OiBwcm9wVHlwZXMubnVtYmVyLFxuXHRtaW46IHByb3BUeXBlcy5udW1iZXIsXG5cdG1heGxlbmd0aDogcHJvcFR5cGVzLm51bWJlcixcblx0bWlubGVuZ3RoOiBwcm9wVHlwZXMubnVtYmVyLFxuXHRtZXNzYWdlOiAgcHJvcFR5cGVzLmFycmF5T2YocHJvcFR5cGVzLnNoYXBlKHtcblx0XHRzdGF0dXM6IHByb3BUeXBlcy5vbmVPZihbXCJjcml0aWNhbFwiICwgXCJ3YXJuaW5nXCIgLCBcInBvc2l0aXZlXCIgLCBcImluZm9cIiAsIFwic3VnZ2VzdGlvblwiXSksXG5cdFx0Y29udGVudDogcHJvcFR5cGVzLnN0cmluZyxcblx0XHRpY29uOiBwcm9wVHlwZXMuc3RyaW5nXG5cdH0pKSxcblx0bXVsdGlwbGU6IHByb3BUeXBlcy5ib29sLFxuXHRuYW1lOiBwcm9wVHlwZXMuc3RyaW5nLnJlcXVpcmVkLFxuXHRwYXR0ZXJuOiBwcm9wVHlwZXMuc3RyaW5nLFxuXHRwbGFjZWhvbGRlcjogcHJvcFR5cGVzLnN0cmluZyxcblx0cmVhZG9ubHk6IHByb3BUeXBlcy5ib29sLFxuXHRyZXF1aXJlZDogcHJvcFR5cGVzLmJvb2wsXG5cdHN0ZXA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdHByb3BUeXBlcy5udW1iZXIsXG5cdFx0cHJvcFR5cGVzLm9uZU9mW1wiYW55XCJdXG5cdF0pLFxuXHRvbklucHV0OiBwcm9wVHlwZXMuZnVuYyxcblx0dHlwZTogcHJvcFR5cGVzLm9uZU9mKFtcInBhc3N3b3JkXCIsIFwiZW1haWxcIiwgXCJudW1iZXJcIiwgXCJ1cmxcIiwgXCJ0ZWxcIiwgXCJzZWFyY2hcIiwgXCJkYXRlXCIsIFwiZGF0ZXRpbWVcIiwgXCJkYXRldGltZS1sb2NhbFwiLCBcIm1vbnRoXCIsIFwid2Vla1wiLCBcInRpbWVcIl0pLFxuXHR2YWx1ZTogcHJvcFR5cGVzLnN0cmluZyxcblx0b25DaGFuZ2U6IHByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19