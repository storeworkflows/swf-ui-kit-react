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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJTdGFydCIsIkVuZCIsIklucHV0IiwicHJvcHMiLCJvbkJsdXIiLCJiaW5kIiwib25Gb2N1cyIsIm9uSW5wdXQiLCJzdGF0ZSIsImNoZWNrZWQiLCJoYXNTdGFydCIsImhhc0VuZCIsImZvY3VzZWQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwic3RhcnQiLCJzZXRTdGF0ZSIsImVuZCIsImV2ZW50IiwidGFyZ2V0IiwiZGlzYWJsZWQiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJ0eXBlIiwiaW52YWxpZCIsInN0ZXAiLCJhdXRvZm9jdXMiLCJtYXgiLCJtaW4iLCJtYXhsZW5ndGgiLCJtaW5sZW5ndGgiLCJwYXR0ZXJuIiwibXVsdGlwbGUiLCJtZXNzYWdlIiwiX2hhc0xhYmVsIiwidW5kZWZpbmVkIiwiX2hhc01lc3NhZ2VzIiwibGVuZ3RoIiwiX21vdmVkIiwic3R5bGVzIiwicmVuZGVyU3RhcnQiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsInJlbmRlckVuZCIsIm1hcCIsImVsIiwiX2hhc0ljb24iLCJpY29uIiwiX2hhc0NvbnRlbnQiLCJjb250ZW50IiwiX2V4aXN0Iiwic3RhdHVzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJtYW5hZ2VJbnZhbGlkIiwibWFuYWdlVmFsdWUiLCJub29wIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mIiwib25lT2ZUeXBlIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxTQUFNLElBQU47QUFBQSxDQUFkOztB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QVYsQ0FBaUJ2QyxRQWpCVDtBQWtCZFMsRUFBQUEsT0FBTyxFQUFFNEIsc0JBQVVFLE1BbEJMO0FBbUJkekMsRUFBQUEsV0FBVyxFQUFFdUMsc0JBQVVFLE1BbkJUO0FBb0JkcEIsRUFBQUEsU0FBUyxFQUFFa0Isc0JBQVVFLE1BcEJQO0FBcUJkeEMsRUFBQUEsUUFBUSxFQUFFc0Msc0JBQVVDLElBckJOO0FBc0JkdEMsRUFBQUEsUUFBUSxFQUFFcUMsc0JBQVVDLElBdEJOO0FBdUJkbkMsRUFBQUEsSUFBSSxFQUFFa0Msc0JBQVVPLFNBQVYsQ0FBb0IsQ0FDdEJQLHNCQUFVRyxNQURZLEVBRXRCSCxzQkFBVU0sS0FBVixDQUFnQixLQUFoQixDQUZzQixDQUFwQixDQXZCUTtBQTJCZDFDLEVBQUFBLElBQUksRUFBRW9DLHNCQUFVTSxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsT0FBckIsRUFBOEIsUUFBOUIsRUFBd0MsS0FBeEMsRUFBK0MsS0FBL0MsRUFBc0QsUUFBdEQsRUFBZ0UsTUFBaEUsRUFBd0UsVUFBeEUsRUFBb0YsZ0JBQXBGLEVBQXNHLE9BQXRHLEVBQStHLE1BQS9HLEVBQXVILE1BQXZILENBQWhCLENBM0JRO0FBNEJkdkQsRUFBQUEsS0FBSyxFQUFFaUQsc0JBQVVFLE1BNUJIO0FBNkJkekQsRUFBQUEsT0FBTyxFQUFFdUQsc0JBQVVRLElBN0JMO0FBOEJkekIsRUFBQUEsUUFBUSxFQUFFaUIsc0JBQVVRLElBOUJOO0FBK0JkaEUsRUFBQUEsT0FBTyxFQUFFd0Qsc0JBQVVRLElBL0JMO0FBZ0NkbEUsRUFBQUEsTUFBTSxFQUFFMEQsc0JBQVVRO0FBaENKLENBQWxCO2VBbUNlcEUsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLmNzc1wiO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgZmluZEJ5VHlwZSBmcm9tIFwiLi4vdXRpbHMvZmluZEJ5VHlwZVwiO1xuaW1wb3J0IHtub29wfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuY29uc3QgU3RhcnQgPSAoKSA9PiBudWxsO1xuY29uc3QgRW5kID0gKCkgPT4gbnVsbDtcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25JbnB1dCA9IHRoaXMub25JbnB1dC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQsXG4gICAgICAgICAgICBoYXNTdGFydDogZmFsc2UsXG4gICAgICAgICAgICBoYXNFbmQ6IGZhbHNlLFxuICAgICAgICAgICAgZm9jdXNlZDogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogXCJcIlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJlbmRlclN0YXJ0KCkge1xuICAgICAgICBjb25zdCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBTdGFydCk7XG5cbiAgICAgICAgaWYgKCFzdGFydCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgIXRoaXMuc3RhdGUuaGFzU3RhcnQgJiYgdGhpcy5zZXRTdGF0ZSh7aGFzU3RhcnQ6IHRydWV9KVxuXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC0tc3RhcnRcIj57c3RhcnQucHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgfVxuXG4gICAgcmVuZGVyRW5kKCkge1xuICAgICAgICBjb25zdCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZW5kID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgRW5kKTtcblxuICAgICAgICBpZiAoIWVuZCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgIXRoaXMuc3RhdGUuaGFzRW5kICYmIHRoaXMuc2V0U3RhdGUoe2hhc0VuZDogdHJ1ZX0pXG5cbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLS1lbmRcIj57ZW5kLnByb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgIH1cblxuICAgIG9uQmx1cihldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiBmYWxzZX0pXG4gICAgICAgIHRoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbkZvY3VzKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IHRydWV9KVxuICAgICAgICB0aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbklucHV0KGV2ZW50KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIG5hbWUgPSBcIm5hbWVcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgcmVhZG9ubHksXG4gICAgICAgICAgICByZXF1aXJlZCxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUsXG4gICAgICAgICAgICBpbnZhbGlkLFxuICAgICAgICAgICAgc3RlcCxcbiAgICAgICAgICAgIGF1dG9mb2N1cyxcbiAgICAgICAgICAgIG1heCxcbiAgICAgICAgICAgIG1pbixcbiAgICAgICAgICAgIG1heGxlbmd0aCxcbiAgICAgICAgICAgIG1pbmxlbmd0aCxcbiAgICAgICAgICAgIHBhdHRlcm4sXG4gICAgICAgICAgICBtdWx0aXBsZSxcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgX2hhc0xhYmVsID0gbGFiZWwgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgX2hhc01lc3NhZ2VzID0gbWVzc2FnZS5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBfbW92ZWQgPSB0aGlzLnN0YXRlLmZvY3VzZWQgfHwgdmFsdWUgfHwgdGhpcy5zdGF0ZS5oYXNTdGFydDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8c3R5bGU+e3N0eWxlc308L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICB7X2hhc0xhYmVsICYmIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImlucC1sYWJlbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCItLW1vdmVkXCI6IF9tb3ZlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1mb2N1c2VkXCI6IHRoaXMuc3RhdGU/LmZvY3VzZWRcbiAgICAgICAgICAgICAgICAgICAgfSl9PntsYWJlbH08L2xhYmVsPn1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1ncm91cFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN0YXJ0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY29udHJvbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm8tc3RhcnQtYm9yZGVyXCI6IHRoaXMuc3RhdGU/Lmhhc1N0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm8tZW5kLWJvcmRlclwiOiB0aGlzLnN0YXRlPy5oYXNFbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuY2xhc3NOYW1lXTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXtzdGVwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17cmVhZG9ubHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17YXV0b2ZvY3VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17bWF4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17bWlufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17bWF4bGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aD17bWlubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm49e3BhdHRlcm59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlPXttdWx0aXBsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLm9uSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Gb2N1cyhldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25CbHVyKGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRW5kKCl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7X2hhc01lc3NhZ2VzICYmXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubWFwKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2hhc0ljb24gPSBlbC5pY29uICE9PSB1bmRlZmluZWQgJiYgZWwuaWNvbi5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2hhc0NvbnRlbnQgPSBlbC5jb250ZW50ICE9PSB1bmRlZmluZWQgJiYgZWwuY29udGVudC5sZW5ndGggPiAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfZXhpc3QgPSBfaGFzSWNvbiB8fCBfaGFzQ29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2V4aXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoZWwuc3RhdHVzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X2hhc0ljb24gJiYgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPHgtbW9iaS1zd2YtaWNvbiBpY29uPXtlbC5pY29ufSBzaXplPVwic21cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X2hhc0NvbnRlbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntlbC5jb250ZW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5JbnB1dC5TdGFydCA9IFN0YXJ0O1xuSW5wdXQuRW5kID0gRW5kO1xuXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgYXV0b2ZvY3VzOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaW52YWxpZDogZmFsc2UsXG4gICAgbWFuYWdlSW52YWxpZDogZmFsc2UsXG4gICAgbWFuYWdlVmFsdWU6IGZhbHNlLFxuICAgIG1lc3NhZ2U6IFtdLFxuICAgIG11bHRpcGxlOiBmYWxzZSxcbiAgICByZWFkb25seTogZmFsc2UsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIHN0ZXA6IFwiYW55XCIsXG4gICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgb25JbnB1dDogbm9vcCxcbiAgICBvbkNoYW5nZTogbm9vcCxcbiAgICBvbkJsdXI6IG5vb3AsXG4gICAgb25Gb2N1czogbm9vcFxufVxuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gICAgYXV0b2ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbWFuYWdlSW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbWFuYWdlVmFsdWU6IFByb3BUeXBlcy5ib29sLFxuICAgIG1heDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtaW46IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWF4bGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1pbmxlbmd0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtZXNzYWdlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBzdGF0dXM6IFByb3BUeXBlcy5vbmVPZihbXCJjcml0aWNhbFwiLCBcIndhcm5pbmdcIiwgXCJwb3NpdGl2ZVwiLCBcImluZm9cIiwgXCJzdWdnZXN0aW9uXCJdKSxcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pKSxcbiAgICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5yZXF1aXJlZCxcbiAgICBwYXR0ZXJuOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByZWFkb25seTogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHN0ZXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBQcm9wVHlwZXMub25lT2ZbXCJhbnlcIl1cbiAgICBdKSxcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoW1widGV4dFwiLCBcInBhc3N3b3JkXCIsIFwiZW1haWxcIiwgXCJudW1iZXJcIiwgXCJ1cmxcIiwgXCJ0ZWxcIiwgXCJzZWFyY2hcIiwgXCJkYXRlXCIsIFwiZGF0ZXRpbWVcIiwgXCJkYXRldGltZS1sb2NhbFwiLCBcIm1vbnRoXCIsIFwid2Vla1wiLCBcInRpbWVcIl0pLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uSW5wdXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19