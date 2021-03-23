"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _findByType = _interopRequireWildcard(require("../utils/findByType"));

var _utils = require("../utils");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

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
    _this.onInvalid = _this.onInvalid.bind(_assertThisInitialized(_this));
    _this.state = {
      checked: _this.props.checked,
      invalid: _this.props.invalid,
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
      var _this$state;

      var children = this.props.children;
      var start = (0, _findByType["default"])(children, "Start");
      var classes = (0, _classnames3["default"])({
        "form-control--start": true,
        "--invalid": (_this$state = this.state) === null || _this$state === void 0 ? void 0 : _this$state.invalid
      });
      if (!start || start.length < 1) return null;
      !this.state.hasStart && this.setState({
        hasStart: true
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: classes,
        children: start
      });
    }
  }, {
    key: "renderEnd",
    value: function renderEnd() {
      var _this$state2;

      var children = this.props.children;
      var end = (0, _findByType["default"])(children, "End");
      var classes = (0, _classnames3["default"])({
        "form-control--end": true,
        "--invalid": (_this$state2 = this.state) === null || _this$state2 === void 0 ? void 0 : _this$state2.invalid
      });
      if (!end || end.length < 1) return null;
      !this.state.hasEnd && this.setState({
        hasEnd: true
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: classes,
        children: end
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
    key: "onInvalid",
    value: function onInvalid(e) {
      var _this$props = this.props,
          manageInvalid = _this$props.manageInvalid,
          onInvalid = _this$props.onInvalid;
      if (!manageInvalid) this.setState({
        invalid: true
      });
      onInvalid(e);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this$props2 = this.props,
          invalid = _this$props2.invalid,
          manageInvalid = _this$props2.manageInvalid;
      if (manageInvalid && this.state.invalid !== invalid) this.setState({
        invalid: invalid
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3,
          _this$state4,
          _this$state5,
          _this$state6,
          _this$state7,
          _this$state8,
          _this2 = this;

      var _this$props3 = this.props,
          disabled = _this$props3.disabled,
          label = _this$props3.label,
          _this$props3$name = _this$props3.name,
          name = _this$props3$name === void 0 ? "name" : _this$props3$name,
          placeholder = _this$props3.placeholder,
          readonly = _this$props3.readonly,
          required = _this$props3.required,
          type = _this$props3.type,
          _this$props3$value = _this$props3.value,
          value = _this$props3$value === void 0 ? this.state.value : _this$props3$value,
          invalid = _this$props3.invalid,
          step = _this$props3.step,
          autofocus = _this$props3.autofocus,
          max = _this$props3.max,
          min = _this$props3.min,
          maxlength = _this$props3.maxlength,
          minlength = _this$props3.minlength,
          pattern = _this$props3.pattern,
          multiple = _this$props3.multiple,
          message = _this$props3.message;

      var _hasLabel = label !== undefined;

      var _hasMessages = message.length > 0;

      var _moved = this.state.focused || value || this.state.hasStart;

      var containerClasses = (0, _classnames3["default"])(_defineProperty({
        "swf-form-group": true,
        "--invalid": (_this$state3 = this.state) === null || _this$state3 === void 0 ? void 0 : _this$state3.invalid
      }, this.props.containerClass, true));
      var labelClasses = (0, _classnames3["default"])({
        "inp-label": true,
        "--moved": _moved,
        "--focused": (_this$state4 = this.state) === null || _this$state4 === void 0 ? void 0 : _this$state4.focused,
        "--invalid": (_this$state5 = this.state) === null || _this$state5 === void 0 ? void 0 : _this$state5.invalid
      });
      var inputClasses = (0, _classnames3["default"])(_defineProperty({
        "form-control": true,
        "no-start-border": (_this$state6 = this.state) === null || _this$state6 === void 0 ? void 0 : _this$state6.hasStart,
        "no-end-border": (_this$state7 = this.state) === null || _this$state7 === void 0 ? void 0 : _this$state7.hasEnd,
        "--invalid": (_this$state8 = this.state) === null || _this$state8 === void 0 ? void 0 : _this$state8.invalid
      }, this.props.inputClass, true));
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
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
              },
              onInvalid: function onInvalid(e) {
                return _this2.onInvalid(e);
              }
            }), this.renderEnd()]
          }), _hasMessages && message.map(function (el) {
            var _hasIcon = el.icon !== undefined && el.icon.length > 0;

            var _hasContent = el.content !== undefined && el.content.length > 0;

            var _exist = _hasIcon || _hasContent;

            return _exist ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: (0, _classnames3["default"])(el.status),
              children: [_hasIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
                icon: el.icon,
                size: "sm"
              }), _hasContent && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: el.content
              })]
            }) : null;
          })]
        })
      });
    }
  }]);

  return Input;
}(React.Component);

Input.Start = (0, _findByType.createSubComponent)("Start");
Input.End = (0, _findByType.createSubComponent)("End");
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
  onFocus: _utils.noop,
  onInvalid: _utils.noop
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
  name: _propTypes["default"].string,
  pattern: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  inputClass: _propTypes["default"].string,
  containerClass: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  step: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].oneOf(["any"])]),
  type: _propTypes["default"].oneOf(["text", "password", "email", "number", "url", "tel", "search", "date", "datetime", "datetime-local", "month", "week", "time"]),
  value: _propTypes["default"].string,
  onInput: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onInvalid: _propTypes["default"].func,
  internalRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].any
  })])
};
var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJTdGFydCIsIkVuZCIsIklucHV0IiwicHJvcHMiLCJvbkJsdXIiLCJiaW5kIiwib25Gb2N1cyIsIm9uSW5wdXQiLCJvbkludmFsaWQiLCJzdGF0ZSIsImNoZWNrZWQiLCJpbnZhbGlkIiwiaGFzU3RhcnQiLCJoYXNFbmQiLCJmb2N1c2VkIiwidmFsdWUiLCJjaGlsZHJlbiIsInN0YXJ0IiwiY2xhc3NlcyIsImxlbmd0aCIsInNldFN0YXRlIiwiZW5kIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibWFuYWdlSW52YWxpZCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiZGlzYWJsZWQiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJ0eXBlIiwic3RlcCIsImF1dG9mb2N1cyIsIm1heCIsIm1pbiIsIm1heGxlbmd0aCIsIm1pbmxlbmd0aCIsInBhdHRlcm4iLCJtdWx0aXBsZSIsIm1lc3NhZ2UiLCJfaGFzTGFiZWwiLCJ1bmRlZmluZWQiLCJfaGFzTWVzc2FnZXMiLCJfbW92ZWQiLCJjb250YWluZXJDbGFzc2VzIiwiY29udGFpbmVyQ2xhc3MiLCJsYWJlbENsYXNzZXMiLCJpbnB1dENsYXNzZXMiLCJpbnB1dENsYXNzIiwiZWxtIiwiaW50ZXJuYWxSZWYiLCJjdXJyZW50IiwicmVuZGVyU3RhcnQiLCJvbkNoYW5nZSIsInJlbmRlckVuZCIsIm1hcCIsImVsIiwiX2hhc0ljb24iLCJpY29uIiwiX2hhc0NvbnRlbnQiLCJjb250ZW50IiwiX2V4aXN0Iiwic3RhdHVzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJtYW5hZ2VWYWx1ZSIsImNyZWF0ZVJlZiIsIm5vb3AiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwibnVtYmVyIiwiYXJyYXlPZiIsInNoYXBlIiwib25lT2YiLCJvbmVP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cyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgZmluZEJ5VHlwZSwge2NyZWF0ZVN1YkNvbXBvbmVudH0gZnJvbSBcIi4uL3V0aWxzL2ZpbmRCeVR5cGVcIjtcclxuaW1wb3J0IHtub29wfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcblxyXG5jb25zdCBTdGFydCA9ICgpID0+IG51bGw7XHJcbmNvbnN0IEVuZCA9ICgpID0+IG51bGw7XHJcblxyXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25JbnB1dCA9IHRoaXMub25JbnB1dC5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbkludmFsaWQgPSB0aGlzLm9uSW52YWxpZC5iaW5kKHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZCxcclxuICAgICAgICAgICAgaW52YWxpZDogdGhpcy5wcm9wcy5pbnZhbGlkLFxyXG4gICAgICAgICAgICBoYXNTdGFydDogZmFsc2UsXHJcbiAgICAgICAgICAgIGhhc0VuZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyU3RhcnQoKSB7XHJcbiAgICAgICAgY29uc3Qge2NoaWxkcmVufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBcIlN0YXJ0XCIpO1xyXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2wtLXN0YXJ0XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiLS1pbnZhbGlkXCI6IHRoaXMuc3RhdGU/LmludmFsaWRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoIXN0YXJ0IHx8IHN0YXJ0Lmxlbmd0aDwxKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgIXRoaXMuc3RhdGUuaGFzU3RhcnQgJiYgdGhpcy5zZXRTdGF0ZSh7aGFzU3RhcnQ6IHRydWV9KVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PntzdGFydH08L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJFbmQoKSB7XHJcbiAgICAgICAgY29uc3Qge2NoaWxkcmVufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZW5kID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgXCJFbmRcIik7XHJcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICBcImZvcm0tY29udHJvbC0tZW5kXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiLS1pbnZhbGlkXCI6IHRoaXMuc3RhdGU/LmludmFsaWRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoIWVuZCB8fCBlbmQubGVuZ3RoPDEpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAhdGhpcy5zdGF0ZS5oYXNFbmQgJiYgdGhpcy5zZXRTdGF0ZSh7aGFzRW5kOiB0cnVlfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT57ZW5kfTwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIG9uQmx1cihldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IGZhbHNlfSlcclxuICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Gb2N1cyhldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IHRydWV9KVxyXG4gICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnB1dChldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbklucHV0KGV2ZW50KVxyXG4gICAgfVxyXG5cclxuICAgIG9uSW52YWxpZChlKXtcclxuICAgICAgICBjb25zdCB7bWFuYWdlSW52YWxpZCwgb25JbnZhbGlkfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmKCFtYW5hZ2VJbnZhbGlkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnZhbGlkOiB0cnVlfSk7XHJcbiAgICAgICAgb25JbnZhbGlkKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcclxuICAgICAgICBjb25zdCB7aW52YWxpZCwgbWFuYWdlSW52YWxpZH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZihtYW5hZ2VJbnZhbGlkICYmIHRoaXMuc3RhdGUuaW52YWxpZCAhPT0gaW52YWxpZClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW52YWxpZDogaW52YWxpZH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIG5hbWUgPSBcIm5hbWVcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgIHJlYWRvbmx5LFxyXG4gICAgICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlLFxyXG4gICAgICAgICAgICBpbnZhbGlkLFxyXG4gICAgICAgICAgICBzdGVwLFxyXG4gICAgICAgICAgICBhdXRvZm9jdXMsXHJcbiAgICAgICAgICAgIG1heCxcclxuICAgICAgICAgICAgbWluLFxyXG4gICAgICAgICAgICBtYXhsZW5ndGgsXHJcbiAgICAgICAgICAgIG1pbmxlbmd0aCxcclxuICAgICAgICAgICAgcGF0dGVybixcclxuICAgICAgICAgICAgbXVsdGlwbGUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgX2hhc0xhYmVsID0gbGFiZWwgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICBjb25zdCBfaGFzTWVzc2FnZXMgPSBtZXNzYWdlLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgY29uc3QgX21vdmVkID0gdGhpcy5zdGF0ZS5mb2N1c2VkIHx8IHZhbHVlIHx8IHRoaXMuc3RhdGUuaGFzU3RhcnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckNsYXNzZXMgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgXCJzd2YtZm9ybS1ncm91cFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIi0taW52YWxpZFwiOiB0aGlzLnN0YXRlPy5pbnZhbGlkLFxyXG4gICAgICAgICAgICBbdGhpcy5wcm9wcy5jb250YWluZXJDbGFzc106IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBsYWJlbENsYXNzZXMgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgXCJpbnAtbGFiZWxcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCItLW1vdmVkXCI6IF9tb3ZlZCxcclxuICAgICAgICAgICAgXCItLWZvY3VzZWRcIjogdGhpcy5zdGF0ZT8uZm9jdXNlZCxcclxuICAgICAgICAgICAgXCItLWludmFsaWRcIjogdGhpcy5zdGF0ZT8uaW52YWxpZFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dENsYXNzZXMgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2xcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJuby1zdGFydC1ib3JkZXJcIjogdGhpcy5zdGF0ZT8uaGFzU3RhcnQsXHJcbiAgICAgICAgICAgIFwibm8tZW5kLWJvcmRlclwiOiB0aGlzLnN0YXRlPy5oYXNFbmQsXHJcbiAgICAgICAgICAgIFwiLS1pbnZhbGlkXCI6IHRoaXMuc3RhdGU/LmludmFsaWQsXHJcbiAgICAgICAgICAgIFt0aGlzLnByb3BzLmlucHV0Q2xhc3NdOiB0cnVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc2VzfSByZWY9e2VsbSA9PiB0aGlzLnByb3BzLmludGVybmFsUmVmLmN1cnJlbnQgPSBlbG19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtfaGFzTGFiZWwgJiYgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPXtsYWJlbENsYXNzZXN9PntsYWJlbH08L2xhYmVsPn1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN0YXJ0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e2ludmFsaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17cmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e2F1dG9mb2N1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17bWF4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXttaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9e21heGxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aD17bWlubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybj17cGF0dGVybn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlPXttdWx0aXBsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMub25JbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZvY3VzKGV2ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJsdXIoZXZlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnZhbGlkPXsoZSkgPT4gdGhpcy5vbkludmFsaWQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckVuZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtfaGFzTWVzc2FnZXMgJiZcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm1hcCgoZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2hhc0ljb24gPSBlbC5pY29uICE9PSB1bmRlZmluZWQgJiYgZWwuaWNvbi5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfaGFzQ29udGVudCA9IGVsLmNvbnRlbnQgIT09IHVuZGVmaW5lZCAmJiBlbC5jb250ZW50Lmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfZXhpc3QgPSBfaGFzSWNvbiB8fCBfaGFzQ29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9leGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhlbC5zdGF0dXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge19oYXNJY29uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtlbC5pY29ufSBzaXplPVwic21cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge19oYXNDb250ZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntlbC5jb250ZW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5JbnB1dC5TdGFydCA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIlN0YXJ0XCIpO1xyXG5JbnB1dC5FbmQgPSBjcmVhdGVTdWJDb21wb25lbnQoXCJFbmRcIik7XHJcblxyXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBhdXRvZm9jdXM6IGZhbHNlLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgaW52YWxpZDogZmFsc2UsXHJcbiAgICBtYW5hZ2VJbnZhbGlkOiBmYWxzZSxcclxuICAgIG1hbmFnZVZhbHVlOiBmYWxzZSxcclxuICAgIG1lc3NhZ2U6IFtdLFxyXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxyXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgaW5wdXRDbGFzczogXCJcIixcclxuICAgIGNvbnRhaW5lckNsYXNzOiBcIlwiLFxyXG4gICAgc3RlcDogXCJhbnlcIixcclxuICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgaW50ZXJuYWxSZWY6IFJlYWN0LmNyZWF0ZVJlZigpLFxyXG4gICAgb25JbnB1dDogbm9vcCxcclxuICAgIG9uQ2hhbmdlOiBub29wLFxyXG4gICAgb25CbHVyOiBub29wLFxyXG4gICAgb25Gb2N1czogbm9vcCxcclxuICAgIG9uSW52YWxpZDogbm9vcFxyXG59XHJcblxyXG5JbnB1dC5wcm9wVHlwZXMgPSB7XHJcbiAgICBhdXRvZm9jdXM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG1hbmFnZUludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlVmFsdWU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWF4OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWluOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWF4bGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWlubGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWVzc2FnZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBzdGF0dXM6IFByb3BUeXBlcy5vbmVPZihbXCJjcml0aWNhbFwiLCBcIndhcm5pbmdcIiwgXCJwb3NpdGl2ZVwiLCBcImluZm9cIiwgXCJzdWdnZXN0aW9uXCJdKSxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmdcclxuICAgIH0pKSxcclxuICAgIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBwYXR0ZXJuOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpbnB1dENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29udGFpbmVyQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICByZWFkb25seTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzdGVwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIFByb3BUeXBlcy5vbmVPZihbXCJhbnlcIl0pXHJcbiAgICBdKSxcclxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJ0ZXh0XCIsIFwicGFzc3dvcmRcIiwgXCJlbWFpbFwiLCBcIm51bWJlclwiLCBcInVybFwiLCBcInRlbFwiLCBcInNlYXJjaFwiLCBcImRhdGVcIiwgXCJkYXRldGltZVwiLCBcImRhdGV0aW1lLWxvY2FsXCIsIFwibW9udGhcIiwgXCJ3ZWVrXCIsIFwidGltZVwiXSksXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uSW5wdXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25JbnZhbGlkOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGludGVybmFsUmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBwcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBwcm9wVHlwZXMuc2hhcGUoeyBjdXJyZW50OiBwcm9wVHlwZXMuYW55IH0pXHJcbiAgICBdKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDsiXX0=