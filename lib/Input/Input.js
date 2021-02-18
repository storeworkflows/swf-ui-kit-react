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
  type: _propTypes["default"].oneOf(["password", "email", "number", "url", "tel", "search", "date", "datetime", "datetime-local", "month", "week", "time"]),
  value: _propTypes["default"].string,
  onInput: _propTypes["default"].func,
  onChange: _propTypes["default"].func
};
var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJTdGFydCIsIkVuZCIsIklucHV0IiwicHJvcHMiLCJzdGF0ZSIsImNoZWNrZWQiLCJoYXNTdGFydCIsImhhc0VuZCIsImNoaWxkcmVuIiwic3RhcnQiLCJzZXRTdGF0ZSIsImVuZCIsImRpc2FibGVkIiwibGFiZWwiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJyZWFkb25seSIsInJlcXVpcmVkIiwidHlwZSIsInZhbHVlIiwiaW52YWxpZCIsInN0ZXAiLCJhdXRvZm9jdXMiLCJtYXgiLCJtaW4iLCJtYXhsZW5ndGgiLCJtaW5sZW5ndGgiLCJwYXR0ZXJuIiwibXVsdGlwbGUiLCJtZXNzYWdlIiwiX2hhc0xhYmVsIiwidW5kZWZpbmVkIiwiX2hhc01lc3NhZ2VzIiwibGVuZ3RoIiwic3R5bGVzIiwicmVuZGVyU3RhcnQiLCJvbklucHV0Iiwib25DaGFuZ2UiLCJyZW5kZXJFbmQiLCJtYXAiLCJlbCIsIl9oYXNJY29uIiwiaWNvbiIsIl9oYXNDb250ZW50IiwiY29udGVudCIsIl9leGlzdCIsInN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwibWFuYWdlSW52YWxpZCIsIm1hbmFnZVZhbHVlIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mIiwib25lT2ZUeXBlIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsU0FBTSxJQUFOO0FBQUEsQ0FBZDs7QUFDQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTTtBQUFBLFNBQU0sSUFBTjtBQUFBLENBQVo7O0lBRU1DLEs7Ozs7O0FBQ0wsaUJBQVlDLEtBQVosRUFBbUI7QUFB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QnhDLEVBQUFBLElBQUksRUFBRWtDLHNCQUFVTSxLQUFWLENBQWdCLENBQUMsVUFBRCxFQUFhLE9BQWIsRUFBc0IsUUFBdEIsRUFBZ0MsS0FBaEMsRUFBdUMsS0FBdkMsRUFBOEMsUUFBOUMsRUFBd0QsTUFBeEQsRUFBZ0UsVUFBaEUsRUFBNEUsZ0JBQTVFLEVBQThGLE9BQTlGLEVBQXVHLE1BQXZHLEVBQStHLE1BQS9HLENBQWhCLENBMUJXO0FBMkJqQnZDLEVBQUFBLEtBQUssRUFBRWlDLHNCQUFVRSxNQTNCQTtBQTRCakJsQixFQUFBQSxPQUFPLEVBQUVnQixzQkFBVVEsSUE1QkY7QUE2QmpCdkIsRUFBQUEsUUFBUSxFQUFFZSxzQkFBVVE7QUE3QkgsQ0FBbEI7ZUFnQ2UxRCxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCB7U1dGX0lOUFVUfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBmaW5kQnlUeXBlIGZyb20gXCIuLi91dGlscy9maW5kQnlUeXBlXCI7XG5cbmNvbnN0IFN0YXJ0ID0gKCkgPT4gbnVsbDtcbmNvbnN0IEVuZCA9ICgpID0+IG51bGw7XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZCxcblx0XHRcdGhhc1N0YXJ0OiBmYWxzZSxcblx0XHRcdGhhc0VuZDogZmFsc2Vcblx0XHR9XG5cdH07XG5cblx0cmVuZGVyU3RhcnQgKCkge1xuXHRcdGNvbnN0IHtjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHN0YXJ0ID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgU3RhcnQpO1xuXG5cdFx0aWYgKCFzdGFydCkgcmV0dXJuIG51bGw7XG5cblx0XHQhdGhpcy5zdGF0ZS5oYXNTdGFydCAmJiB0aGlzLnNldFN0YXRlKHtoYXNTdGFydDogdHJ1ZX0pXG5cblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtLXN0YXJ0XCI+e3N0YXJ0LnByb3BzLmNoaWxkcmVufTwvZGl2PlxuXHR9XG5cblx0cmVuZGVyRW5kICgpIHtcblx0XHRjb25zdCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCBlbmQgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBFbmQpO1xuXG5cdFx0aWYgKCFlbmQpIHJldHVybiBudWxsO1xuXG5cdFx0IXRoaXMuc3RhdGUuaGFzRW5kICYmIHRoaXMuc2V0U3RhdGUoe2hhc0VuZDogdHJ1ZX0pXG5cblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtLWVuZFwiPntlbmQucHJvcHMuY2hpbGRyZW59PC9kaXY+XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGlzYWJsZWQsXG5cdFx0XHRsYWJlbCxcblx0XHRcdG5hbWU9IFwibmFtZVwiLFxuXHRcdFx0cGxhY2Vob2xkZXIsXG5cdFx0XHRyZWFkb25seSxcblx0XHRcdHJlcXVpcmVkLFxuXHRcdFx0dHlwZSxcblx0XHRcdHZhbHVlLFxuXHRcdFx0aW52YWxpZCxcblx0XHRcdHN0ZXAsXG5cdFx0XHRhdXRvZm9jdXMsXG5cdFx0XHRtYXgsXG5cdFx0XHRtaW4sXG5cdFx0XHRtYXhsZW5ndGgsXG5cdFx0XHRtaW5sZW5ndGgsXG5cdFx0XHRwYXR0ZXJuLFxuXHRcdFx0bXVsdGlwbGUsXG5cdFx0XHRtZXNzYWdlXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBfaGFzTGFiZWwgPSBsYWJlbCAhPT0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IF9oYXNNZXNzYWdlcyA9IG1lc3NhZ2UubGVuZ3RoID4gMDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PHN0eWxlPntzdHlsZXN9PC9zdHlsZT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0eyBfaGFzTGFiZWwgJiYgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+e2xhYmVsfTwvbGFiZWw+fVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cblx0XHRcdFx0XHRcdHt0aGlzLnJlbmRlclN0YXJ0KCl9XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcblx0XHRcdFx0XHRcdFx0XCJmb3JtLWNvbnRyb2xcIjogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XCJuby1zdGFydC1ib3JkZXJcIjogdGhpcy5zdGF0ZS5oYXNTdGFydCxcblx0XHRcdFx0XHRcdFx0XCJuby1lbmQtYm9yZGVyXCI6IHRoaXMuc3RhdGUuaGFzRW5kXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0ICAgaWQ9XCJuYW1lXCJcblx0XHRcdFx0XHRcdFx0ICAgbmFtZT17bmFtZX1cblx0XHRcdFx0XHRcdFx0ICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0XHQgICBzdGVwPXtzdGVwfVxuXHRcdFx0XHRcdFx0XHQgICB0eXBlPXt0eXBlfVxuXHRcdFx0XHRcdFx0XHQgICBhcmlhLXJlcXVpcmVkPXtyZXF1aXJlZH1cblx0XHRcdFx0XHRcdFx0ICAgYXJpYS1pbnZhbGlkPXtpbnZhbGlkfVxuXHRcdFx0XHRcdFx0XHQgICB2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdFx0XHRcdCAgIHJlYWRPbmx5PXtyZWFkb25seX1cblx0XHRcdFx0XHRcdFx0ICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuXHRcdFx0XHRcdFx0XHQgICBhdXRvRm9jdXMgPXthdXRvZm9jdXN9XG5cdFx0XHRcdFx0XHRcdCAgIG1heD17bWF4fVxuXHRcdFx0XHRcdFx0XHQgICBtaW49e21pbn1cblx0XHRcdFx0XHRcdFx0ICAgbWF4TGVuZ3RoPXttYXhsZW5ndGh9XG5cdFx0XHRcdFx0XHRcdCAgIG1pbkxlbmd0aD17bWlubGVuZ3RofVxuXHRcdFx0XHRcdFx0XHQgICBwYXR0ZXJuPXtwYXR0ZXJufVxuXHRcdFx0XHRcdFx0XHQgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG5cdFx0XHRcdFx0XHRcdCAgIG11bHRpcGxlPXttdWx0aXBsZX1cblx0XHRcdFx0XHRcdFx0ICAgb25JbnB1dD17dGhpcy5wcm9wcy5vbklucHV0fVxuXHRcdFx0XHRcdFx0XHQgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7dGhpcy5yZW5kZXJFbmQoKX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7IF9oYXNNZXNzYWdlcyAmJlxuXHRcdFx0XHRcdG1lc3NhZ2UubWFwKChlbCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgX2hhc0ljb24gPSBlbC5pY29uICE9PSB1bmRlZmluZWQgJiYgZWwuaWNvbi5sZW5ndGg+MDtcblx0XHRcdFx0XHRcdGNvbnN0IF9oYXNDb250ZW50ID0gZWwuY29udGVudCAhPT11bmRlZmluZWQgJiYgZWwuY29udGVudC5sZW5ndGg+MDtcblxuXHRcdFx0XHRcdFx0Y29uc3QgX2V4aXN0ID0gX2hhc0ljb24gfHwgX2hhc0NvbnRlbnQ7XG5cdFx0XHRcdFx0XHRyZXR1cm4oXG5cdFx0XHRcdFx0XHRcdF9leGlzdFxuXHRcdFx0XHRcdFx0XHRcdD9cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhlbC5zdGF0dXMpfT5cblx0XHRcdFx0XHRcdFx0XHRcdHtfaGFzSWNvbiAmJiBudWxsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vPHgtbW9iaS1zd2YtaWNvbiBpY29uPXtlbC5pY29ufSBzaXplPVwic21cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR7X2hhc0NvbnRlbnQgJiZcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntlbC5jb250ZW50fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ6IG51bGxcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvPlxuXHRcdClcblx0fVxufVxuXG5JbnB1dC5TdGFydCA9IFN0YXJ0O1xuSW5wdXQuRW5kID0gRW5kO1xuXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG5cdGF1dG9mb2N1czogZmFsc2UsXG5cdGRpc2FibGVkOiBmYWxzZSxcblx0aW52YWxpZDogZmFsc2UsXG5cdG1hbmFnZUludmFsaWQ6IGZhbHNlLFxuXHRtYW5hZ2VWYWx1ZTogZmFsc2UsXG5cdG1lc3NhZ2U6IFtdLFxuXHRtdWx0aXBsZTogZmFsc2UsXG5cdHJlYWRvbmx5OiBmYWxzZSxcblx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRzdGVwOiBcImFueVwiLFxuXHR0eXBlOiBcInRleHRcIixcblx0b25JbnB1dDogKCkgPT4gdm9pZCAwLFxuXHRvbkNoYW5nZTogKCkgPT4gdm9pZCAwXG59XG5cbklucHV0LnByb3BUeXBlcyA9IHtcblx0YXV0b2ZvY3VzOiBwcm9wVHlwZXMuYm9vbCxcblx0ZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxuXHRpbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcblx0bGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXG5cdG1hbmFnZUludmFsaWQ6IHByb3BUeXBlcy5ib29sLFxuXHRtYW5hZ2VWYWx1ZTogcHJvcFR5cGVzLmJvb2wsXG5cdG1heDogcHJvcFR5cGVzLm51bWJlcixcblx0bWluOiBwcm9wVHlwZXMubnVtYmVyLFxuXHRtYXhsZW5ndGg6IHByb3BUeXBlcy5udW1iZXIsXG5cdG1pbmxlbmd0aDogcHJvcFR5cGVzLm51bWJlcixcblx0bWVzc2FnZTogIHByb3BUeXBlcy5hcnJheU9mKHByb3BUeXBlcy5zaGFwZSh7XG5cdFx0c3RhdHVzOiBwcm9wVHlwZXMub25lT2YoW1wiY3JpdGljYWxcIiAsIFwid2FybmluZ1wiICwgXCJwb3NpdGl2ZVwiICwgXCJpbmZvXCIgLCBcInN1Z2dlc3Rpb25cIl0pLFxuXHRcdGNvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXG5cdFx0aWNvbjogcHJvcFR5cGVzLnN0cmluZ1xuXHR9KSksXG5cdG11bHRpcGxlOiBwcm9wVHlwZXMuYm9vbCxcblx0bmFtZTogcHJvcFR5cGVzLnN0cmluZy5yZXF1aXJlZCxcblx0cGF0dGVybjogcHJvcFR5cGVzLnN0cmluZyxcblx0cGxhY2Vob2xkZXI6IHByb3BUeXBlcy5zdHJpbmcsXG5cdHJlYWRvbmx5OiBwcm9wVHlwZXMuYm9vbCxcblx0cmVxdWlyZWQ6IHByb3BUeXBlcy5ib29sLFxuXHRzdGVwOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcblx0XHRwcm9wVHlwZXMubnVtYmVyLFxuXHRcdHByb3BUeXBlcy5vbmVPZltcImFueVwiXVxuXHRdKSxcblx0dHlwZTogcHJvcFR5cGVzLm9uZU9mKFtcInBhc3N3b3JkXCIsIFwiZW1haWxcIiwgXCJudW1iZXJcIiwgXCJ1cmxcIiwgXCJ0ZWxcIiwgXCJzZWFyY2hcIiwgXCJkYXRlXCIsIFwiZGF0ZXRpbWVcIiwgXCJkYXRldGltZS1sb2NhbFwiLCBcIm1vbnRoXCIsIFwid2Vla1wiLCBcInRpbWVcIl0pLFxuXHR2YWx1ZTogcHJvcFR5cGVzLnN0cmluZyxcblx0b25JbnB1dDogcHJvcFR5cGVzLmZ1bmMsXG5cdG9uQ2hhbmdlOiBwcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ==