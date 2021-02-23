"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.css"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _findByType = _interopRequireDefault(require("../utils/findByType"));

var _utils = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onInput = _this.onInput.bind(_assertThisInitialized(_this));
    _this.state = {
      checked: _this.props.checked,
      hasStart: false,
      hasEnd: false,
      focused: false,
      value: ""
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
    key: "onBlur",
    value: function onBlur(event) {
      this.setState({
        focused: false
      });
      this.props.onBlur(event);
    }
  }, {
    key: "onFocus",
    value: function onFocus(event) {
      this.setState({
        focused: true
      });
      this.props.onFocus(event);
    }
  }, {
    key: "onInput",
    value: function onInput(event) {
      this.setState({
        value: event.target.value
      });
      this.props.onInput(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state,
          _this$state2,
          _this$state3,
          _this2 = this;

      var _this$props = this.props,
          disabled = _this$props.disabled,
          label = _this$props.label,
          _this$props$name = _this$props.name,
          name = _this$props$name === void 0 ? "name" : _this$props$name,
          placeholder = _this$props.placeholder,
          readonly = _this$props.readonly,
          required = _this$props.required,
          type = _this$props.type,
          _this$props$value = _this$props.value,
          value = _this$props$value === void 0 ? this.state.value : _this$props$value,
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

      var _moved = this.state.focused || value || this.state.hasStart;

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "form-group",
          children: [_hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            htmlFor: "name",
            className: (0, _classnames2["default"])({
              "inp-label": true,
              "--moved": _moved,
              "--focused": (_this$state = this.state) === null || _this$state === void 0 ? void 0 : _this$state.focused
            }),
            children: label
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: (0, _classnames2["default"])({
              "input-group": true
            }),
            children: [this.renderStart(), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              className: (0, _classnames2["default"])(_defineProperty({
                "form-control": true,
                "no-start-border": (_this$state2 = this.state) === null || _this$state2 === void 0 ? void 0 : _this$state2.hasStart,
                "no-end-border": (_this$state3 = this.state) === null || _this$state3 === void 0 ? void 0 : _this$state3.hasEnd
              }, this.props.className, true)),
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
              onInput: this.onInput,
              onChange: this.props.onChange,
              onFocus: function onFocus(event) {
                _this2.onFocus(event);
              },
              onBlur: function onBlur(event) {
                _this2.onBlur(event);
              }
            }), this.renderEnd()]
          }), _hasMessages && message.map(function (el) {
            var _hasIcon = el.icon !== undefined && el.icon.length > 0;

            var _hasContent = el.content !== undefined && el.content.length > 0;

            var _exist = _hasIcon || _hasContent;

            return _exist ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: (0, _classnames2["default"])(el.status),
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
  onInput: _utils.noop,
  onChange: _utils.noop,
  onBlur: _utils.noop,
  onFocus: _utils.noop
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
  className: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  step: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].oneOf["any"]]),
  type: _propTypes["default"].oneOf(["text", "password", "email", "number", "url", "tel", "search", "date", "datetime", "datetime-local", "month", "week", "time"]),
  value: _propTypes["default"].string,
  onInput: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func
};
var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJTdGFydCIsIkVuZCIsIklucHV0IiwicHJvcHMiLCJvbkJsdXIiLCJiaW5kIiwib25Gb2N1cyIsIm9uSW5wdXQiLCJzdGF0ZSIsImNoZWNrZWQiLCJoYXNTdGFydCIsImhhc0VuZCIsImZvY3VzZWQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwic3RhcnQiLCJzZXRTdGF0ZSIsImVuZCIsImV2ZW50IiwidGFyZ2V0IiwiZGlzYWJsZWQiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJ0eXBlIiwiaW52YWxpZCIsInN0ZXAiLCJhdXRvZm9jdXMiLCJtYXgiLCJtaW4iLCJtYXhsZW5ndGgiLCJtaW5sZW5ndGgiLCJwYXR0ZXJuIiwibXVsdGlwbGUiLCJtZXNzYWdlIiwiX2hhc0xhYmVsIiwidW5kZWZpbmVkIiwiX2hhc01lc3NhZ2VzIiwibGVuZ3RoIiwiX21vdmVkIiwic3R5bGVzIiwicmVuZGVyU3RhcnQiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsInJlbmRlckVuZCIsIm1hcCIsImVsIiwiX2hhc0ljb24iLCJpY29uIiwiX2hhc0NvbnRlbnQiLCJjb250ZW50IiwiX2V4aXN0Iiwic3RhdHVzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJtYW5hZ2VJbnZhbGlkIiwibWFuYWdlVmFsdWUiLCJub29wIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mIiwib25lT2ZUeXBlIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxTQUFNLElBQU47QUFBQSxDQUFkOztB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QVYsQ0FBaUJ2QyxRQWpCVDtBQWtCZFMsRUFBQUEsT0FBTyxFQUFFNEIsc0JBQVVFLE1BbEJMO0FBbUJkekMsRUFBQUEsV0FBVyxFQUFFdUMsc0JBQVVFLE1BbkJUO0FBb0JkcEIsRUFBQUEsU0FBUyxFQUFFa0Isc0JBQVVFLE1BcEJQO0FBcUJkeEMsRUFBQUEsUUFBUSxFQUFFc0Msc0JBQVVDLElBckJOO0FBc0JkdEMsRUFBQUEsUUFBUSxFQUFFcUMsc0JBQVVDLElBdEJOO0FBdUJkbkMsRUFBQUEsSUFBSSxFQUFFa0Msc0JBQVVPLFNBQVYsQ0FBb0IsQ0FDdEJQLHNCQUFVRyxNQURZLEVBRXRCSCxzQkFBVU0sS0FBVixDQUFnQixLQUFoQixDQUZzQixDQUFwQixDQXZCUTtBQTJCZDFDLEVBQUFBLElBQUksRUFBRW9DLHNCQUFVTSxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsT0FBckIsRUFBOEIsUUFBOUIsRUFBd0MsS0FBeEMsRUFBK0MsS0FBL0MsRUFBc0QsUUFBdEQsRUFBZ0UsTUFBaEUsRUFBd0UsVUFBeEUsRUFBb0YsZ0JBQXBGLEVBQXNHLE9BQXRHLEVBQStHLE1BQS9HLEVBQXVILE1BQXZILENBQWhCLENBM0JRO0FBNEJkdkQsRUFBQUEsS0FBSyxFQUFFaUQsc0JBQVVFLE1BNUJIO0FBNkJkekQsRUFBQUEsT0FBTyxFQUFFdUQsc0JBQVVRLElBN0JMO0FBOEJkekIsRUFBQUEsUUFBUSxFQUFFaUIsc0JBQVVRLElBOUJOO0FBK0JkaEUsRUFBQUEsT0FBTyxFQUFFd0Qsc0JBQVVRLElBL0JMO0FBZ0NkbEUsRUFBQUEsTUFBTSxFQUFFMEQsc0JBQVVRO0FBaENKLENBQWxCO2VBbUNlcEUsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGZpbmRCeVR5cGUgZnJvbSBcIi4uL3V0aWxzL2ZpbmRCeVR5cGVcIjtcclxuaW1wb3J0IHtub29wfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmNvbnN0IFN0YXJ0ID0gKCkgPT4gbnVsbDtcclxuY29uc3QgRW5kID0gKCkgPT4gbnVsbDtcclxuXHJcbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbklucHV0ID0gdGhpcy5vbklucHV0LmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQsXHJcbiAgICAgICAgICAgIGhhc1N0YXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgaGFzRW5kOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9jdXNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXJTdGFydCgpIHtcclxuICAgICAgICBjb25zdCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBzdGFydCA9IGZpbmRCeVR5cGUoY2hpbGRyZW4sIFN0YXJ0KTtcclxuXHJcbiAgICAgICAgaWYgKCFzdGFydCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICF0aGlzLnN0YXRlLmhhc1N0YXJ0ICYmIHRoaXMuc2V0U3RhdGUoe2hhc1N0YXJ0OiB0cnVlfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLS1zdGFydFwiPntzdGFydC5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJFbmQoKSB7XHJcbiAgICAgICAgY29uc3Qge2NoaWxkcmVufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZW5kID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgRW5kKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbmQpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAhdGhpcy5zdGF0ZS5oYXNFbmQgJiYgdGhpcy5zZXRTdGF0ZSh7aGFzRW5kOiB0cnVlfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLS1lbmRcIj57ZW5kLnByb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIG9uQmx1cihldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IGZhbHNlfSlcclxuICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Gb2N1cyhldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IHRydWV9KVxyXG4gICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnB1dChldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbklucHV0KGV2ZW50KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgbmFtZSA9IFwibmFtZVwiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgcmVhZG9ubHksXHJcbiAgICAgICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUsXHJcbiAgICAgICAgICAgIGludmFsaWQsXHJcbiAgICAgICAgICAgIHN0ZXAsXHJcbiAgICAgICAgICAgIGF1dG9mb2N1cyxcclxuICAgICAgICAgICAgbWF4LFxyXG4gICAgICAgICAgICBtaW4sXHJcbiAgICAgICAgICAgIG1heGxlbmd0aCxcclxuICAgICAgICAgICAgbWlubGVuZ3RoLFxyXG4gICAgICAgICAgICBwYXR0ZXJuLFxyXG4gICAgICAgICAgICBtdWx0aXBsZSxcclxuICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBfaGFzTGFiZWwgPSBsYWJlbCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGNvbnN0IF9oYXNNZXNzYWdlcyA9IG1lc3NhZ2UubGVuZ3RoID4gMDtcclxuICAgICAgICBjb25zdCBfbW92ZWQgPSB0aGlzLnN0YXRlLmZvY3VzZWQgfHwgdmFsdWUgfHwgdGhpcy5zdGF0ZS5oYXNTdGFydDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZT57c3R5bGVzfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7X2hhc0xhYmVsICYmIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5wLWxhYmVsXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1tb3ZlZFwiOiBfbW92ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1mb2N1c2VkXCI6IHRoaXMuc3RhdGU/LmZvY3VzZWRcclxuICAgICAgICAgICAgICAgICAgICB9KX0+e2xhYmVsfTwvbGFiZWw+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1ncm91cFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdGFydCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1jb250cm9sXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vLXN0YXJ0LWJvcmRlclwiOiB0aGlzLnN0YXRlPy5oYXNTdGFydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm8tZW5kLWJvcmRlclwiOiB0aGlzLnN0YXRlPy5oYXNFbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5jbGFzc05hbWVdOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXtzdGVwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtpbnZhbGlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3JlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXthdXRvZm9jdXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9e21heH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17bWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXttYXhsZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg9e21pbmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm49e3BhdHRlcm59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZT17bXVsdGlwbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLm9uSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Gb2N1cyhldmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJsdXIoZXZlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJFbmQoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7X2hhc01lc3NhZ2VzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5tYXAoKGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9oYXNJY29uID0gZWwuaWNvbiAhPT0gdW5kZWZpbmVkICYmIGVsLmljb24ubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2hhc0NvbnRlbnQgPSBlbC5jb250ZW50ICE9PSB1bmRlZmluZWQgJiYgZWwuY29udGVudC5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2V4aXN0ID0gX2hhc0ljb24gfHwgX2hhc0NvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZXhpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoZWwuc3RhdHVzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfaGFzSWNvbiAmJiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLzx4LW1vYmktc3dmLWljb24gaWNvbj17ZWwuaWNvbn0gc2l6ZT1cInNtXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfaGFzQ29udGVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZWwuY29udGVudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbklucHV0LlN0YXJ0ID0gU3RhcnQ7XHJcbklucHV0LkVuZCA9IEVuZDtcclxuXHJcbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGF1dG9mb2N1czogZmFsc2UsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBpbnZhbGlkOiBmYWxzZSxcclxuICAgIG1hbmFnZUludmFsaWQ6IGZhbHNlLFxyXG4gICAgbWFuYWdlVmFsdWU6IGZhbHNlLFxyXG4gICAgbWVzc2FnZTogW10sXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICByZWFkb25seTogZmFsc2UsXHJcbiAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICBzdGVwOiBcImFueVwiLFxyXG4gICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICBvbklucHV0OiBub29wLFxyXG4gICAgb25DaGFuZ2U6IG5vb3AsXHJcbiAgICBvbkJsdXI6IG5vb3AsXHJcbiAgICBvbkZvY3VzOiBub29wXHJcbn1cclxuXHJcbklucHV0LnByb3BUeXBlcyA9IHtcclxuICAgIGF1dG9mb2N1czogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbWFuYWdlSW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VWYWx1ZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYXg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtaW46IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtYXhsZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtaW5sZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtZXNzYWdlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHN0YXR1czogUHJvcFR5cGVzLm9uZU9mKFtcImNyaXRpY2FsXCIsIFwid2FybmluZ1wiLCBcInBvc2l0aXZlXCIsIFwiaW5mb1wiLCBcInN1Z2dlc3Rpb25cIl0pLFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfSkpLFxyXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5yZXF1aXJlZCxcclxuICAgIHBhdHRlcm46IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHJlYWRvbmx5OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHN0ZXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgUHJvcFR5cGVzLm9uZU9mW1wiYW55XCJdXHJcbiAgICBdKSxcclxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJ0ZXh0XCIsIFwicGFzc3dvcmRcIiwgXCJlbWFpbFwiLCBcIm51bWJlclwiLCBcInVybFwiLCBcInRlbFwiLCBcInNlYXJjaFwiLCBcImRhdGVcIiwgXCJkYXRldGltZVwiLCBcImRhdGV0aW1lLWxvY2FsXCIsIFwibW9udGhcIiwgXCJ3ZWVrXCIsIFwidGltZVwiXSksXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uSW5wdXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xyXG4iXX0=