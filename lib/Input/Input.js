"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames3 = _interopRequireDefault(require("classnames"));

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

      var containerClasses = (0, _classnames3["default"])(_defineProperty({
        "form-group": true
      }, this.props.containerClass, true));
      var labelClasses = (0, _classnames3["default"])({
        "inp-label": true,
        "--moved": _moved,
        "--focused": (_this$state = this.state) === null || _this$state === void 0 ? void 0 : _this$state.focused
      });
      var inputClasses = (0, _classnames3["default"])(_defineProperty({
        "form-control": true,
        "no-start-border": (_this$state2 = this.state) === null || _this$state2 === void 0 ? void 0 : _this$state2.hasStart,
        "no-end-border": (_this$state3 = this.state) === null || _this$state3 === void 0 ? void 0 : _this$state3.hasEnd
      }, this.props.inputClass, true));
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: containerClasses,
          ref: function ref(elm) {
            return _this2.props.internalRef.current = elm;
          },
          children: [_hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            htmlFor: "name",
            className: labelClasses,
            children: label
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "input-group",
            children: [this.renderStart(), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              className: inputClasses,
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
              className: (0, _classnames3["default"])(el.status),
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
  inputClass: "",
  containerClass: "",
  step: "any",
  type: "text",
  internalRef: /*#__PURE__*/React.createRef(),
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
  inputClass: _propTypes["default"].string,
  containerClass: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  step: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].oneOf["any"]]),
  type: _propTypes["default"].oneOf(["text", "password", "email", "number", "url", "tel", "search", "date", "datetime", "datetime-local", "month", "week", "time"]),
  value: _propTypes["default"].string,
  onInput: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  internalRef: _propTypes["default"].element
};
var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJTdGFydCIsIkVuZCIsIklucHV0IiwicHJvcHMiLCJvbkJsdXIiLCJiaW5kIiwib25Gb2N1cyIsIm9uSW5wdXQiLCJzdGF0ZSIsImNoZWNrZWQiLCJoYXNTdGFydCIsImhhc0VuZCIsImZvY3VzZWQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwic3RhcnQiLCJzZXRTdGF0ZSIsImVuZCIsImV2ZW50IiwidGFyZ2V0IiwiZGlzYWJsZWQiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJ0eXBlIiwiaW52YWxpZCIsInN0ZXAiLCJhdXRvZm9jdXMiLCJtYXgiLCJtaW4iLCJtYXhsZW5ndGgiLCJtaW5sZW5ndGgiLCJwYXR0ZXJuIiwibXVsdGlwbGUiLCJtZXNzYWdlIiwiX2hhc0xhYmVsIiwidW5kZWZpbmVkIiwiX2hhc01lc3NhZ2VzIiwibGVuZ3RoIiwiX21vdmVkIiwiY29udGFpbmVyQ2xhc3NlcyIsImNvbnRhaW5lckNsYXNzIiwibGFiZWxDbGFzc2VzIiwiaW5wdXRDbGFzc2VzIiwiaW5wdXRDbGFzcyIsInN0eWxlcyIsImVsbSIsImludGVybmFsUmVmIiwiY3VycmVudCIsInJlbmRlclN0YXJ0Iiwib25DaGFuZ2UiLCJyZW5kZXJFbmQiLCJtYXAiLCJlbCIsIl9oYXNJY29uIiwiaWNvbiIsIl9oYXNDb250ZW50IiwiY29udGVudCIsIl9leGlzdCIsInN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwibWFuYWdlSW52YWxpZCIsIm1hbmFnZVZhbHVlIiwiY3JlYXRlUmVmIiwibm9vcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJudW1iZXIiLCJhcnJheU9mIiwic2hhcGUiLCJvbmVPZiIsIm9uZU9mVHlwZSIsImZ1bmMiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7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OEIsUUFBOUIsRUFBd0MsS0FBeEMsRUFBK0MsS0FBL0MsRUFBc0QsUUFBdEQsRUFBZ0UsTUFBaEUsRUFBd0UsVUFBeEUsRUFBb0YsZ0JBQXBGLEVBQXNHLE9BQXRHLEVBQStHLE1BQS9HLEVBQXVILE1BQXZILENBQWhCLENBNUJRO0FBNkJkL0QsRUFBQUEsS0FBSyxFQUFFeUQsc0JBQVVFLE1BN0JIO0FBOEJkakUsRUFBQUEsT0FBTyxFQUFFK0Qsc0JBQVVRLElBOUJMO0FBK0JkMUIsRUFBQUEsUUFBUSxFQUFFa0Isc0JBQVVRLElBL0JOO0FBZ0NkeEUsRUFBQUEsT0FBTyxFQUFFZ0Usc0JBQVVRLElBaENMO0FBaUNkMUUsRUFBQUEsTUFBTSxFQUFFa0Usc0JBQVVRLElBakNKO0FBa0NkN0IsRUFBQUEsV0FBVyxFQUFFcUIsc0JBQVVTO0FBbENULENBQWxCO2VBcUNlN0UsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLmNzc1wiO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgZmluZEJ5VHlwZSBmcm9tIFwiLi4vdXRpbHMvZmluZEJ5VHlwZVwiO1xuaW1wb3J0IHtub29wfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuY29uc3QgU3RhcnQgPSAoKSA9PiBudWxsO1xuY29uc3QgRW5kID0gKCkgPT4gbnVsbDtcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25JbnB1dCA9IHRoaXMub25JbnB1dC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQsXG4gICAgICAgICAgICBoYXNTdGFydDogZmFsc2UsXG4gICAgICAgICAgICBoYXNFbmQ6IGZhbHNlLFxuICAgICAgICAgICAgZm9jdXNlZDogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogXCJcIlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJlbmRlclN0YXJ0KCkge1xuICAgICAgICBjb25zdCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBTdGFydCk7XG5cbiAgICAgICAgaWYgKCFzdGFydCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgIXRoaXMuc3RhdGUuaGFzU3RhcnQgJiYgdGhpcy5zZXRTdGF0ZSh7aGFzU3RhcnQ6IHRydWV9KVxuXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC0tc3RhcnRcIj57c3RhcnQucHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgfVxuXG4gICAgcmVuZGVyRW5kKCkge1xuICAgICAgICBjb25zdCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZW5kID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgRW5kKTtcblxuICAgICAgICBpZiAoIWVuZCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgIXRoaXMuc3RhdGUuaGFzRW5kICYmIHRoaXMuc2V0U3RhdGUoe2hhc0VuZDogdHJ1ZX0pXG5cbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLS1lbmRcIj57ZW5kLnByb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgIH1cblxuICAgIG9uQmx1cihldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiBmYWxzZX0pXG4gICAgICAgIHRoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbkZvY3VzKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IHRydWV9KVxuICAgICAgICB0aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbklucHV0KGV2ZW50KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIG5hbWUgPSBcIm5hbWVcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgcmVhZG9ubHksXG4gICAgICAgICAgICByZXF1aXJlZCxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUsXG4gICAgICAgICAgICBpbnZhbGlkLFxuICAgICAgICAgICAgc3RlcCxcbiAgICAgICAgICAgIGF1dG9mb2N1cyxcbiAgICAgICAgICAgIG1heCxcbiAgICAgICAgICAgIG1pbixcbiAgICAgICAgICAgIG1heGxlbmd0aCxcbiAgICAgICAgICAgIG1pbmxlbmd0aCxcbiAgICAgICAgICAgIHBhdHRlcm4sXG4gICAgICAgICAgICBtdWx0aXBsZSxcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgX2hhc0xhYmVsID0gbGFiZWwgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgX2hhc01lc3NhZ2VzID0gbWVzc2FnZS5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBfbW92ZWQgPSB0aGlzLnN0YXRlLmZvY3VzZWQgfHwgdmFsdWUgfHwgdGhpcy5zdGF0ZS5oYXNTdGFydDtcblxuICAgICAgICBjb25zdCBjb250YWluZXJDbGFzc2VzID0gY2xhc3NuYW1lcyh7XG4gICAgICAgICAgICBcImZvcm0tZ3JvdXBcIjogdHJ1ZSxcbiAgICAgICAgICAgIFt0aGlzLnByb3BzLmNvbnRhaW5lckNsYXNzXTogdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGxhYmVsQ2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xuICAgICAgICAgICAgXCJpbnAtbGFiZWxcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiLS1tb3ZlZFwiOiBfbW92ZWQsXG4gICAgICAgICAgICBcIi0tZm9jdXNlZFwiOiB0aGlzLnN0YXRlPy5mb2N1c2VkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGlucHV0Q2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xuICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2xcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibm8tc3RhcnQtYm9yZGVyXCI6IHRoaXMuc3RhdGU/Lmhhc1N0YXJ0LFxuICAgICAgICAgICAgXCJuby1lbmQtYm9yZGVyXCI6IHRoaXMuc3RhdGU/Lmhhc0VuZCxcbiAgICAgICAgICAgIFt0aGlzLnByb3BzLmlucHV0Q2xhc3NdOiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHN0eWxlPntzdHlsZXN9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3Nlc30gcmVmPXtlbG0gPT4gdGhpcy5wcm9wcy5pbnRlcm5hbFJlZi5jdXJyZW50ID0gZWxtfT5cbiAgICAgICAgICAgICAgICAgICAge19oYXNMYWJlbCAmJiA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9e2xhYmVsQ2xhc3Nlc30+e2xhYmVsfTwvbGFiZWw+fVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdGFydCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXtzdGVwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17cmVhZG9ubHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17YXV0b2ZvY3VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17bWF4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17bWlufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17bWF4bGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aD17bWlubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm49e3BhdHRlcm59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlPXttdWx0aXBsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLm9uSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Gb2N1cyhldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25CbHVyKGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRW5kKCl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7X2hhc01lc3NhZ2VzICYmXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubWFwKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2hhc0ljb24gPSBlbC5pY29uICE9PSB1bmRlZmluZWQgJiYgZWwuaWNvbi5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2hhc0NvbnRlbnQgPSBlbC5jb250ZW50ICE9PSB1bmRlZmluZWQgJiYgZWwuY29udGVudC5sZW5ndGggPiAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfZXhpc3QgPSBfaGFzSWNvbiB8fCBfaGFzQ29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2V4aXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoZWwuc3RhdHVzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X2hhc0ljb24gJiYgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPHgtbW9iaS1zd2YtaWNvbiBpY29uPXtlbC5pY29ufSBzaXplPVwic21cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X2hhc0NvbnRlbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntlbC5jb250ZW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuSW5wdXQuU3RhcnQgPSBTdGFydDtcbklucHV0LkVuZCA9IEVuZDtcblxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICAgIGF1dG9mb2N1czogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGludmFsaWQ6IGZhbHNlLFxuICAgIG1hbmFnZUludmFsaWQ6IGZhbHNlLFxuICAgIG1hbmFnZVZhbHVlOiBmYWxzZSxcbiAgICBtZXNzYWdlOiBbXSxcbiAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBpbnB1dENsYXNzOiBcIlwiLFxuICAgIGNvbnRhaW5lckNsYXNzOiBcIlwiLFxuICAgIHN0ZXA6IFwiYW55XCIsXG4gICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgaW50ZXJuYWxSZWY6IFJlYWN0LmNyZWF0ZVJlZigpLFxuICAgIG9uSW5wdXQ6IG5vb3AsXG4gICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgb25CbHVyOiBub29wLFxuICAgIG9uRm9jdXM6IG5vb3Bcbn1cblxuSW5wdXQucHJvcFR5cGVzID0ge1xuICAgIGF1dG9mb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1hbmFnZUludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG1hbmFnZVZhbHVlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtYXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWluOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1heGxlbmd0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtaW5sZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWVzc2FnZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgc3RhdHVzOiBQcm9wVHlwZXMub25lT2YoW1wiY3JpdGljYWxcIiwgXCJ3YXJuaW5nXCIsIFwicG9zaXRpdmVcIiwgXCJpbmZvXCIsIFwic3VnZ2VzdGlvblwiXSksXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9KSksXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcucmVxdWlyZWQsXG4gICAgcGF0dGVybjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbnB1dENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbnRhaW5lckNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlYWRvbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3RlcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIFByb3BUeXBlcy5vbmVPZltcImFueVwiXVxuICAgIF0pLFxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJ0ZXh0XCIsIFwicGFzc3dvcmRcIiwgXCJlbWFpbFwiLCBcIm51bWJlclwiLCBcInVybFwiLCBcInRlbFwiLCBcInNlYXJjaFwiLCBcImRhdGVcIiwgXCJkYXRldGltZVwiLCBcImRhdGV0aW1lLWxvY2FsXCIsIFwibW9udGhcIiwgXCJ3ZWVrXCIsIFwidGltZVwiXSksXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25JbnB1dDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW50ZXJuYWxSZWY6IFByb3BUeXBlcy5lbGVtZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19