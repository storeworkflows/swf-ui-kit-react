"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.css"));

var _constants = require("./constants");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _findByType = _interopRequireDefault(require("../utils/findByType"));

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
    value: function onBlur() {
      this.setState({
        focused: false
      });
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.setState({
        focused: true
      });
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
      console.log(value);

      var _hasLabel = label !== undefined;

      var _hasMessages = message.length > 0;

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "form-group",
          children: [_hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            htmlFor: "name",
            className: (0, _classnames2["default"])({
              "--moved": this.state.focused || value,
              "--focused": this.state.focused
            }),
            children: label
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: (0, _classnames2["default"])({
              "input-group": true
            }),
            children: [this.renderStart(), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              className: (0, _classnames2["default"])(_defineProperty({
                "form-control": true,
                "no-start-border": this.state.hasStart,
                "no-end-border": this.state.hasEnd
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
              onFocus: this.onFocus,
              onBlur: this.onBlur
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
  className: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  step: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].oneOf["any"]]),
  type: _propTypes["default"].oneOf(["text", "password", "email", "number", "url", "tel", "search", "date", "datetime", "datetime-local", "month", "week", "time"]),
  value: _propTypes["default"].string,
  onInput: _propTypes["default"].func,
  onChange: _propTypes["default"].func
};
var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJTdGFydCIsIkVuZCIsIklucHV0IiwicHJvcHMiLCJvbkJsdXIiLCJiaW5kIiwib25Gb2N1cyIsIm9uSW5wdXQiLCJzdGF0ZSIsImNoZWNrZWQiLCJoYXNTdGFydCIsImhhc0VuZCIsImZvY3VzZWQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwic3RhcnQiLCJzZXRTdGF0ZSIsImVuZCIsImV2ZW50IiwidGFyZ2V0IiwiZGlzYWJsZWQiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJ0eXBlIiwiaW52YWxpZCIsInN0ZXAiLCJhdXRvZm9jdXMiLCJtYXgiLCJtaW4iLCJtYXhsZW5ndGgiLCJtaW5sZW5ndGgiLCJwYXR0ZXJuIiwibXVsdGlwbGUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIl9oYXNMYWJlbCIsInVuZGVmaW5lZCIsIl9oYXNNZXNzYWdlcyIsImxlbmd0aCIsInN0eWxlcyIsInJlbmRlclN0YXJ0IiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJyZW5kZXJFbmQiLCJtYXAiLCJlbCIsIl9oYXNJY29uIiwiaWNvbiIsIl9oYXNDb250ZW50IiwiY29udGVudCIsIl9leGlzdCIsInN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwibWFuYWdlSW52YWxpZCIsIm1hbmFnZVZhbHVlIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mIiwib25lT2ZUeXBlIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxTQUFNLElBQU47QUFBQSxDQUFkOztBQUNBLElBQU1DLEdB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Q0F2QlE7QUEyQmR6QyxFQUFBQSxJQUFJLEVBQUVtQyxzQkFBVU0sS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLE9BQXJCLEVBQThCLFFBQTlCLEVBQXdDLEtBQXhDLEVBQStDLEtBQS9DLEVBQXNELFFBQXRELEVBQWdFLE1BQWhFLEVBQXdFLFVBQXhFLEVBQW9GLGdCQUFwRixFQUFzRyxPQUF0RyxFQUErRyxNQUEvRyxFQUF1SCxNQUF2SCxDQUFoQixDQTNCUTtBQTRCZHRELEVBQUFBLEtBQUssRUFBRWdELHNCQUFVRSxNQTVCSDtBQTZCZHhELEVBQUFBLE9BQU8sRUFBRXNELHNCQUFVUSxJQTdCTDtBQThCZHZCLEVBQUFBLFFBQVEsRUFBRWUsc0JBQVVRO0FBOUJOLENBQWxCO2VBaUNlbkUsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLmNzc1wiO1xuXG5pbXBvcnQge1NXRl9JTlBVVH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgZmluZEJ5VHlwZSBmcm9tIFwiLi4vdXRpbHMvZmluZEJ5VHlwZVwiO1xuXG5jb25zdCBTdGFydCA9ICgpID0+IG51bGw7XG5jb25zdCBFbmQgPSAoKSA9PiBudWxsO1xuXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5vbklucHV0ID0gdGhpcy5vbklucHV0LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZCxcbiAgICAgICAgICAgIGhhc1N0YXJ0OiBmYWxzZSxcbiAgICAgICAgICAgIGhhc0VuZDogZmFsc2UsXG4gICAgICAgICAgICBmb2N1c2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBcIlwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyU3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IHtjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBzdGFydCA9IGZpbmRCeVR5cGUoY2hpbGRyZW4sIFN0YXJ0KTtcblxuICAgICAgICBpZiAoIXN0YXJ0KSByZXR1cm4gbnVsbDtcblxuICAgICAgICAhdGhpcy5zdGF0ZS5oYXNTdGFydCAmJiB0aGlzLnNldFN0YXRlKHtoYXNTdGFydDogdHJ1ZX0pXG5cbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLS1zdGFydFwiPntzdGFydC5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICB9XG5cbiAgICByZW5kZXJFbmQoKSB7XG4gICAgICAgIGNvbnN0IHtjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBlbmQgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBFbmQpO1xuXG4gICAgICAgIGlmICghZW5kKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAhdGhpcy5zdGF0ZS5oYXNFbmQgJiYgdGhpcy5zZXRTdGF0ZSh7aGFzRW5kOiB0cnVlfSlcblxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtLWVuZFwiPntlbmQucHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgfVxuXG4gICAgb25CbHVyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiBmYWxzZX0pXG4gICAgfVxuXG4gICAgb25Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogdHJ1ZX0pXG4gICAgfVxuXG4gICAgb25JbnB1dChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICB0aGlzLnByb3BzLm9uSW5wdXQoZXZlbnQpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgbmFtZSA9IFwibmFtZVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICByZWFkb25seSxcbiAgICAgICAgICAgIHJlcXVpcmVkLFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZSxcbiAgICAgICAgICAgIGludmFsaWQsXG4gICAgICAgICAgICBzdGVwLFxuICAgICAgICAgICAgYXV0b2ZvY3VzLFxuICAgICAgICAgICAgbWF4LFxuICAgICAgICAgICAgbWluLFxuICAgICAgICAgICAgbWF4bGVuZ3RoLFxuICAgICAgICAgICAgbWlubGVuZ3RoLFxuICAgICAgICAgICAgcGF0dGVybixcbiAgICAgICAgICAgIG11bHRpcGxlLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcblxuICAgICAgICBjb25zdCBfaGFzTGFiZWwgPSBsYWJlbCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBfaGFzTWVzc2FnZXMgPSBtZXNzYWdlLmxlbmd0aCA+IDA7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxzdHlsZT57c3R5bGVzfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtfaGFzTGFiZWwgJiYgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1tb3ZlZFwiOiB0aGlzLnN0YXRlLmZvY3VzZWQgfHwgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tZm9jdXNlZFwiOiB0aGlzLnN0YXRlLmZvY3VzZWRcbiAgICAgICAgICAgICAgICAgICAgfSl9PntsYWJlbH08L2xhYmVsPn1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1ncm91cFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN0YXJ0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY29udHJvbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm8tc3RhcnQtYm9yZGVyXCI6IHRoaXMuc3RhdGUuaGFzU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuby1lbmQtYm9yZGVyXCI6IHRoaXMuc3RhdGUuaGFzRW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmNsYXNzTmFtZV06IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17aW52YWxpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3JlYWRvbmx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e2F1dG9mb2N1c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9e21heH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49e21pbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9e21heGxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg9e21pbmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPXtwYXR0ZXJufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZT17bXVsdGlwbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5vbklucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckVuZCgpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge19oYXNNZXNzYWdlcyAmJlxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm1hcCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9oYXNJY29uID0gZWwuaWNvbiAhPT0gdW5kZWZpbmVkICYmIGVsLmljb24ubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9oYXNDb250ZW50ID0gZWwuY29udGVudCAhPT0gdW5kZWZpbmVkICYmIGVsLmNvbnRlbnQubGVuZ3RoID4gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2V4aXN0ID0gX2hhc0ljb24gfHwgX2hhc0NvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9leGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGVsLnN0YXR1cyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge19oYXNJY29uICYmIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLzx4LW1vYmktc3dmLWljb24gaWNvbj17ZWwuaWNvbn0gc2l6ZT1cInNtXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge19oYXNDb250ZW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZWwuY29udGVudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuSW5wdXQuU3RhcnQgPSBTdGFydDtcbklucHV0LkVuZCA9IEVuZDtcblxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICAgIGF1dG9mb2N1czogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGludmFsaWQ6IGZhbHNlLFxuICAgIG1hbmFnZUludmFsaWQ6IGZhbHNlLFxuICAgIG1hbmFnZVZhbHVlOiBmYWxzZSxcbiAgICBtZXNzYWdlOiBbXSxcbiAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBzdGVwOiBcImFueVwiLFxuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIG9uSW5wdXQ6ICgpID0+IHZvaWQgMCxcbiAgICBvbkNoYW5nZTogKCkgPT4gdm9pZCAwXG59XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgICBhdXRvZm9jdXM6IHByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBpbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBtYW5hZ2VJbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBtYW5hZ2VWYWx1ZTogcHJvcFR5cGVzLmJvb2wsXG4gICAgbWF4OiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIG1pbjogcHJvcFR5cGVzLm51bWJlcixcbiAgICBtYXhsZW5ndGg6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgbWlubGVuZ3RoOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIG1lc3NhZ2U6IHByb3BUeXBlcy5hcnJheU9mKHByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHN0YXR1czogcHJvcFR5cGVzLm9uZU9mKFtcImNyaXRpY2FsXCIsIFwid2FybmluZ1wiLCBcInBvc2l0aXZlXCIsIFwiaW5mb1wiLCBcInN1Z2dlc3Rpb25cIl0pLFxuICAgICAgICBjb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBpY29uOiBwcm9wVHlwZXMuc3RyaW5nXG4gICAgfSkpLFxuICAgIG11bHRpcGxlOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBuYW1lOiBwcm9wVHlwZXMuc3RyaW5nLnJlcXVpcmVkLFxuICAgIHBhdHRlcm46IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlYWRvbmx5OiBwcm9wVHlwZXMuYm9vbCxcbiAgICByZXF1aXJlZDogcHJvcFR5cGVzLmJvb2wsXG4gICAgc3RlcDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHByb3BUeXBlcy5vbmVPZltcImFueVwiXVxuICAgIF0pLFxuICAgIHR5cGU6IHByb3BUeXBlcy5vbmVPZihbXCJ0ZXh0XCIsIFwicGFzc3dvcmRcIiwgXCJlbWFpbFwiLCBcIm51bWJlclwiLCBcInVybFwiLCBcInRlbFwiLCBcInNlYXJjaFwiLCBcImRhdGVcIiwgXCJkYXRldGltZVwiLCBcImRhdGV0aW1lLWxvY2FsXCIsIFwibW9udGhcIiwgXCJ3ZWVrXCIsIFwidGltZVwiXSksXG4gICAgdmFsdWU6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25JbnB1dDogcHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IHByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19