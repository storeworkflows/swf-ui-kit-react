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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJTdGFydCIsIkVuZCIsIklucHV0IiwicHJvcHMiLCJvbkJsdXIiLCJiaW5kIiwib25Gb2N1cyIsIm9uSW5wdXQiLCJzdGF0ZSIsImNoZWNrZWQiLCJoYXNTdGFydCIsImhhc0VuZCIsImZvY3VzZWQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwic3RhcnQiLCJzZXRTdGF0ZSIsImVuZCIsImV2ZW50IiwidGFyZ2V0IiwiZGlzYWJsZWQiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJ0eXBlIiwiaW52YWxpZCIsInN0ZXAiLCJhdXRvZm9jdXMiLCJtYXgiLCJtaW4iLCJtYXhsZW5ndGgiLCJtaW5sZW5ndGgiLCJwYXR0ZXJuIiwibXVsdGlwbGUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIl9oYXNMYWJlbCIsInVuZGVmaW5lZCIsIl9oYXNNZXNzYWdlcyIsImxlbmd0aCIsInN0eWxlcyIsInJlbmRlclN0YXJ0IiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJyZW5kZXJFbmQiLCJtYXAiLCJlbCIsIl9oYXNJY29uIiwiaWNvbiIsIl9oYXNDb250ZW50IiwiY29udGVudCIsIl9leGlzdCIsInN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwibWFuYWdlSW52YWxpZCIsIm1hbmFnZVZhbHVlIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mIiwib25lT2ZUeXBlIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxTQUFNLElBQU47QUFBQSxDQUFkOztBQUNBLElBQU1DLEdB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Q0F2QlE7QUEyQmR6QyxFQUFBQSxJQUFJLEVBQUVtQyxzQkFBVU0sS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLE9BQXJCLEVBQThCLFFBQTlCLEVBQXdDLEtBQXhDLEVBQStDLEtBQS9DLEVBQXNELFFBQXRELEVBQWdFLE1BQWhFLEVBQXdFLFVBQXhFLEVBQW9GLGdCQUFwRixFQUFzRyxPQUF0RyxFQUErRyxNQUEvRyxFQUF1SCxNQUF2SCxDQUFoQixDQTNCUTtBQTRCZHRELEVBQUFBLEtBQUssRUFBRWdELHNCQUFVRSxNQTVCSDtBQTZCZHhELEVBQUFBLE9BQU8sRUFBRXNELHNCQUFVUSxJQTdCTDtBQThCZHZCLEVBQUFBLFFBQVEsRUFBRWUsc0JBQVVRO0FBOUJOLENBQWxCO2VBaUNlbkUsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcclxuXHJcbmltcG9ydCB7U1dGX0lOUFVUfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgZmluZEJ5VHlwZSBmcm9tIFwiLi4vdXRpbHMvZmluZEJ5VHlwZVwiO1xyXG5cclxuY29uc3QgU3RhcnQgPSAoKSA9PiBudWxsO1xyXG5jb25zdCBFbmQgPSAoKSA9PiBudWxsO1xyXG5cclxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uSW5wdXQgPSB0aGlzLm9uSW5wdXQuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZCxcclxuICAgICAgICAgICAgaGFzU3RhcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBoYXNFbmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb2N1c2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlclN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnN0IHtjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgU3RhcnQpO1xyXG5cclxuICAgICAgICBpZiAoIXN0YXJ0KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgIXRoaXMuc3RhdGUuaGFzU3RhcnQgJiYgdGhpcy5zZXRTdGF0ZSh7aGFzU3RhcnQ6IHRydWV9KVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtLXN0YXJ0XCI+e3N0YXJ0LnByb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckVuZCgpIHtcclxuICAgICAgICBjb25zdCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBlbmQgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBFbmQpO1xyXG5cclxuICAgICAgICBpZiAoIWVuZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICF0aGlzLnN0YXRlLmhhc0VuZCAmJiB0aGlzLnNldFN0YXRlKHtoYXNFbmQ6IHRydWV9KVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtLWVuZFwiPntlbmQucHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgb25CbHVyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IGZhbHNlfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkZvY3VzKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IHRydWV9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uSW5wdXQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIHRoaXMucHJvcHMub25JbnB1dChldmVudClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIG5hbWUgPSBcIm5hbWVcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgIHJlYWRvbmx5LFxyXG4gICAgICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlLFxyXG4gICAgICAgICAgICBpbnZhbGlkLFxyXG4gICAgICAgICAgICBzdGVwLFxyXG4gICAgICAgICAgICBhdXRvZm9jdXMsXHJcbiAgICAgICAgICAgIG1heCxcclxuICAgICAgICAgICAgbWluLFxyXG4gICAgICAgICAgICBtYXhsZW5ndGgsXHJcbiAgICAgICAgICAgIG1pbmxlbmd0aCxcclxuICAgICAgICAgICAgcGF0dGVybixcclxuICAgICAgICAgICAgbXVsdGlwbGUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpXHJcblxyXG4gICAgICAgIGNvbnN0IF9oYXNMYWJlbCA9IGxhYmVsICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QgX2hhc01lc3NhZ2VzID0gbWVzc2FnZS5sZW5ndGggPiAwO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGU+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge19oYXNMYWJlbCAmJiA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tbW92ZWRcIjogdGhpcy5zdGF0ZS5mb2N1c2VkIHx8IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tZm9jdXNlZFwiOiB0aGlzLnN0YXRlLmZvY3VzZWRcclxuICAgICAgICAgICAgICAgICAgICB9KX0+e2xhYmVsfTwvbGFiZWw+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1ncm91cFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdGFydCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1jb250cm9sXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vLXN0YXJ0LWJvcmRlclwiOiB0aGlzLnN0YXRlLmhhc1N0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuby1lbmQtYm9yZGVyXCI6IHRoaXMuc3RhdGUuaGFzRW5kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuY2xhc3NOYW1lXTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17c3RlcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17aW52YWxpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17YXV0b2ZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXttYXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49e21pbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17bWF4bGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPXttaW5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPXtwYXR0ZXJufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU9e211bHRpcGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5vbklucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJFbmQoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7X2hhc01lc3NhZ2VzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5tYXAoKGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9oYXNJY29uID0gZWwuaWNvbiAhPT0gdW5kZWZpbmVkICYmIGVsLmljb24ubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2hhc0NvbnRlbnQgPSBlbC5jb250ZW50ICE9PSB1bmRlZmluZWQgJiYgZWwuY29udGVudC5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2V4aXN0ID0gX2hhc0ljb24gfHwgX2hhc0NvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZXhpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoZWwuc3RhdHVzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfaGFzSWNvbiAmJiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLzx4LW1vYmktc3dmLWljb24gaWNvbj17ZWwuaWNvbn0gc2l6ZT1cInNtXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfaGFzQ29udGVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZWwuY29udGVudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbklucHV0LlN0YXJ0ID0gU3RhcnQ7XHJcbklucHV0LkVuZCA9IEVuZDtcclxuXHJcbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGF1dG9mb2N1czogZmFsc2UsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBpbnZhbGlkOiBmYWxzZSxcclxuICAgIG1hbmFnZUludmFsaWQ6IGZhbHNlLFxyXG4gICAgbWFuYWdlVmFsdWU6IGZhbHNlLFxyXG4gICAgbWVzc2FnZTogW10sXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICByZWFkb25seTogZmFsc2UsXHJcbiAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICBzdGVwOiBcImFueVwiLFxyXG4gICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICBvbklucHV0OiAoKSA9PiB2b2lkIDAsXHJcbiAgICBvbkNoYW5nZTogKCkgPT4gdm9pZCAwXHJcbn1cclxuXHJcbklucHV0LnByb3BUeXBlcyA9IHtcclxuICAgIGF1dG9mb2N1czogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbWFuYWdlSW52YWxpZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VWYWx1ZTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYXg6IHByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtaW46IHByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtYXhsZW5ndGg6IHByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtaW5sZW5ndGg6IHByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtZXNzYWdlOiBwcm9wVHlwZXMuYXJyYXlPZihwcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHN0YXR1czogcHJvcFR5cGVzLm9uZU9mKFtcImNyaXRpY2FsXCIsIFwid2FybmluZ1wiLCBcInBvc2l0aXZlXCIsIFwiaW5mb1wiLCBcInN1Z2dlc3Rpb25cIl0pLFxyXG4gICAgICAgIGNvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgaWNvbjogcHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfSkpLFxyXG4gICAgbXVsdGlwbGU6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbmFtZTogcHJvcFR5cGVzLnN0cmluZy5yZXF1aXJlZCxcclxuICAgIHBhdHRlcm46IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlcjogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHJlYWRvbmx5OiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlcXVpcmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHN0ZXA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIHByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgcHJvcFR5cGVzLm9uZU9mW1wiYW55XCJdXHJcbiAgICBdKSxcclxuICAgIHR5cGU6IHByb3BUeXBlcy5vbmVPZihbXCJ0ZXh0XCIsIFwicGFzc3dvcmRcIiwgXCJlbWFpbFwiLCBcIm51bWJlclwiLCBcInVybFwiLCBcInRlbFwiLCBcInNlYXJjaFwiLCBcImRhdGVcIiwgXCJkYXRldGltZVwiLCBcImRhdGV0aW1lLWxvY2FsXCIsIFwibW9udGhcIiwgXCJ3ZWVrXCIsIFwidGltZVwiXSksXHJcbiAgICB2YWx1ZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uSW5wdXQ6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25DaGFuZ2U6IHByb3BUeXBlcy5mdW5jXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0OyJdfQ==