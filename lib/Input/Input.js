"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _findByType = _interopRequireWildcard(require("../utils/findByType"));

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
    value: function componentDidUpdate() {
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
        "form-group": true,
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
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
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
  onInvalid: _propTypes["default"].func,
  internalRef: _propTypes["default"].element
};
var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJTdGFydCIsIkVuZCIsIklucHV0IiwicHJvcHMiLCJvbkJsdXIiLCJiaW5kIiwib25Gb2N1cyIsIm9uSW5wdXQiLCJvbkludmFsaWQiLCJzdGF0ZSIsImNoZWNrZWQiLCJpbnZhbGlkIiwiaGFzU3RhcnQiLCJoYXNFbmQiLCJmb2N1c2VkIiwidmFsdWUiLCJjaGlsZHJlbiIsInN0YXJ0IiwiY2xhc3NlcyIsImxlbmd0aCIsInNldFN0YXRlIiwiZW5kIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibWFuYWdlSW52YWxpZCIsImRpc2FibGVkIiwibGFiZWwiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJyZWFkb25seSIsInJlcXVpcmVkIiwidHlwZSIsInN0ZXAiLCJhdXRvZm9jdXMiLCJtYXgiLCJtaW4iLCJtYXhsZW5ndGgiLCJtaW5sZW5ndGgiLCJwYXR0ZXJuIiwibXVsdGlwbGUiLCJtZXNzYWdlIiwiX2hhc0xhYmVsIiwidW5kZWZpbmVkIiwiX2hhc01lc3NhZ2VzIiwiX21vdmVkIiwiY29udGFpbmVyQ2xhc3NlcyIsImNvbnRhaW5lckNsYXNzIiwibGFiZWxDbGFzc2VzIiwiaW5wdXRDbGFzc2VzIiwiaW5wdXRDbGFzcyIsInN0eWxlcyIsImVsbSIsImludGVybmFsUmVmIiwiY3VycmVudCIsInJlbmRlclN0YXJ0Iiwib25DaGFuZ2UiLCJyZW5kZXJFbmQiLCJtYXAiLCJlbCIsIl9oYXNJY29uIiwiaWNvbiIsIl9oYXNDb250ZW50IiwiY29udGVudCIsIl9leGlzdCIsInN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwibWFuYWdlVmFsdWUiLCJjcmVhdGVSZWYiLCJub29wIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mIiwib25lT2ZUeXBlIiwiZnVuYyIsImVsZW1lbnQiXSwi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QmR6QyxFQUFBQSxJQUFJLEVBQUV3QyxzQkFBVU8sU0FBVixDQUFvQixDQUN0QlAsc0JBQVVHLE1BRFksRUFFdEJILHNCQUFVTSxLQUFWLENBQWdCLEtBQWhCLENBRnNCLENBQXBCLENBeEJRO0FBNEJkL0MsRUFBQUEsSUFBSSxFQUFFeUMsc0JBQVVNLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixPQUFyQixFQUE4QixRQUE5QixFQUF3QyxLQUF4QyxFQUErQyxLQUEvQyxFQUFzRCxRQUF0RCxFQUFnRSxNQUFoRSxFQUF3RSxVQUF4RSxFQUFvRixnQkFBcEYsRUFBc0csT0FBdEcsRUFBK0csTUFBL0csRUFBdUgsTUFBdkgsQ0FBaEIsQ0E1QlE7QUE2QmRoRSxFQUFBQSxLQUFLLEVBQUUwRCxzQkFBVUUsTUE3Qkg7QUE4QmRwRSxFQUFBQSxPQUFPLEVBQUVrRSxzQkFBVVEsSUE5Qkw7QUErQmR6QixFQUFBQSxRQUFRLEVBQUVpQixzQkFBVVEsSUEvQk47QUFnQ2QzRSxFQUFBQSxPQUFPLEVBQUVtRSxzQkFBVVEsSUFoQ0w7QUFpQ2Q3RSxFQUFBQSxNQUFNLEVBQUVxRSxzQkFBVVEsSUFqQ0o7QUFrQ2R6RSxFQUFBQSxTQUFTLEVBQUVpRSxzQkFBVVEsSUFsQ1A7QUFtQ2Q1QixFQUFBQSxXQUFXLEVBQUVvQixzQkFBVVM7QUFuQ1QsQ0FBbEI7ZUFzQ2VoRixLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGZpbmRCeVR5cGUsIHtjcmVhdGVTdWJDb21wb25lbnR9IGZyb20gXCIuLi91dGlscy9maW5kQnlUeXBlXCI7XHJcbmltcG9ydCB7bm9vcH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5jb25zdCBTdGFydCA9ICgpID0+IG51bGw7XHJcbmNvbnN0IEVuZCA9ICgpID0+IG51bGw7XHJcblxyXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25JbnB1dCA9IHRoaXMub25JbnB1dC5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbkludmFsaWQgPSB0aGlzLm9uSW52YWxpZC5iaW5kKHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZCxcclxuICAgICAgICAgICAgaW52YWxpZDogdGhpcy5wcm9wcy5pbnZhbGlkLFxyXG4gICAgICAgICAgICBoYXNTdGFydDogZmFsc2UsXHJcbiAgICAgICAgICAgIGhhc0VuZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyU3RhcnQoKSB7XHJcbiAgICAgICAgY29uc3Qge2NoaWxkcmVufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBcIlN0YXJ0XCIpO1xyXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2wtLXN0YXJ0XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiLS1pbnZhbGlkXCI6IHRoaXMuc3RhdGU/LmludmFsaWRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoIXN0YXJ0IHx8IHN0YXJ0Lmxlbmd0aDwxKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgIXRoaXMuc3RhdGUuaGFzU3RhcnQgJiYgdGhpcy5zZXRTdGF0ZSh7aGFzU3RhcnQ6IHRydWV9KVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PntzdGFydH08L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJFbmQoKSB7XHJcbiAgICAgICAgY29uc3Qge2NoaWxkcmVufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZW5kID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgXCJFbmRcIik7XHJcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICBcImZvcm0tY29udHJvbC0tZW5kXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiLS1pbnZhbGlkXCI6IHRoaXMuc3RhdGU/LmludmFsaWRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoIWVuZCB8fCBlbmQubGVuZ3RoPDEpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAhdGhpcy5zdGF0ZS5oYXNFbmQgJiYgdGhpcy5zZXRTdGF0ZSh7aGFzRW5kOiB0cnVlfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT57ZW5kfTwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIG9uQmx1cihldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IGZhbHNlfSlcclxuICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Gb2N1cyhldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IHRydWV9KVxyXG4gICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnB1dChldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbklucHV0KGV2ZW50KVxyXG4gICAgfVxyXG5cclxuICAgIG9uSW52YWxpZChlKXtcclxuICAgICAgICBjb25zdCB7bWFuYWdlSW52YWxpZCwgb25JbnZhbGlkfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmKCFtYW5hZ2VJbnZhbGlkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnZhbGlkOiB0cnVlfSk7XHJcbiAgICAgICAgb25JbnZhbGlkKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICBjb25zdCB7aW52YWxpZCwgbWFuYWdlSW52YWxpZH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZihtYW5hZ2VJbnZhbGlkICYmIHRoaXMuc3RhdGUuaW52YWxpZCAhPT0gaW52YWxpZClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW52YWxpZDogaW52YWxpZH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIG5hbWUgPSBcIm5hbWVcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgIHJlYWRvbmx5LFxyXG4gICAgICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlLFxyXG4gICAgICAgICAgICBpbnZhbGlkLFxyXG4gICAgICAgICAgICBzdGVwLFxyXG4gICAgICAgICAgICBhdXRvZm9jdXMsXHJcbiAgICAgICAgICAgIG1heCxcclxuICAgICAgICAgICAgbWluLFxyXG4gICAgICAgICAgICBtYXhsZW5ndGgsXHJcbiAgICAgICAgICAgIG1pbmxlbmd0aCxcclxuICAgICAgICAgICAgcGF0dGVybixcclxuICAgICAgICAgICAgbXVsdGlwbGUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IF9oYXNMYWJlbCA9IGxhYmVsICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QgX2hhc01lc3NhZ2VzID0gbWVzc2FnZS5sZW5ndGggPiAwO1xyXG4gICAgICAgIGNvbnN0IF9tb3ZlZCA9IHRoaXMuc3RhdGUuZm9jdXNlZCB8fCB2YWx1ZSB8fCB0aGlzLnN0YXRlLmhhc1N0YXJ0O1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXJDbGFzc2VzID0gY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgIFwiZm9ybS1ncm91cFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIi0taW52YWxpZFwiOiB0aGlzLnN0YXRlPy5pbnZhbGlkLFxyXG4gICAgICAgICAgICBbdGhpcy5wcm9wcy5jb250YWluZXJDbGFzc106IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBsYWJlbENsYXNzZXMgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgXCJpbnAtbGFiZWxcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCItLW1vdmVkXCI6IF9tb3ZlZCxcclxuICAgICAgICAgICAgXCItLWZvY3VzZWRcIjogdGhpcy5zdGF0ZT8uZm9jdXNlZCxcclxuICAgICAgICAgICAgXCItLWludmFsaWRcIjogdGhpcy5zdGF0ZT8uaW52YWxpZFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dENsYXNzZXMgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2xcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJuby1zdGFydC1ib3JkZXJcIjogdGhpcy5zdGF0ZT8uaGFzU3RhcnQsXHJcbiAgICAgICAgICAgIFwibm8tZW5kLWJvcmRlclwiOiB0aGlzLnN0YXRlPy5oYXNFbmQsXHJcbiAgICAgICAgICAgIFwiLS1pbnZhbGlkXCI6IHRoaXMuc3RhdGU/LmludmFsaWQsXHJcbiAgICAgICAgICAgIFt0aGlzLnByb3BzLmlucHV0Q2xhc3NdOiB0cnVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3Nlc30gcmVmPXtlbG0gPT4gdGhpcy5wcm9wcy5pbnRlcm5hbFJlZi5jdXJyZW50ID0gZWxtfT5cclxuICAgICAgICAgICAgICAgICAgICB7X2hhc0xhYmVsICYmIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT17bGFiZWxDbGFzc2VzfT57bGFiZWx9PC9sYWJlbD59XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdGFydCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRDbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXtzdGVwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtpbnZhbGlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3JlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXthdXRvZm9jdXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9e21heH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17bWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXttYXhsZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg9e21pbmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm49e3BhdHRlcm59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZT17bXVsdGlwbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLm9uSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Gb2N1cyhldmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25CbHVyKGV2ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW52YWxpZD17KGUpID0+IHRoaXMub25JbnZhbGlkKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJFbmQoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7X2hhc01lc3NhZ2VzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5tYXAoKGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9oYXNJY29uID0gZWwuaWNvbiAhPT0gdW5kZWZpbmVkICYmIGVsLmljb24ubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2hhc0NvbnRlbnQgPSBlbC5jb250ZW50ICE9PSB1bmRlZmluZWQgJiYgZWwuY29udGVudC5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2V4aXN0ID0gX2hhc0ljb24gfHwgX2hhc0NvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZXhpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoZWwuc3RhdHVzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfaGFzSWNvbiAmJiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLzx4LW1vYmktc3dmLWljb24gaWNvbj17ZWwuaWNvbn0gc2l6ZT1cInNtXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfaGFzQ29udGVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZWwuY29udGVudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuSW5wdXQuU3RhcnQgPSBjcmVhdGVTdWJDb21wb25lbnQoXCJTdGFydFwiKTtcclxuSW5wdXQuRW5kID0gY3JlYXRlU3ViQ29tcG9uZW50KFwiRW5kXCIpO1xyXG5cclxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgYXV0b2ZvY3VzOiBmYWxzZSxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGludmFsaWQ6IGZhbHNlLFxyXG4gICAgbWFuYWdlSW52YWxpZDogZmFsc2UsXHJcbiAgICBtYW5hZ2VWYWx1ZTogZmFsc2UsXHJcbiAgICBtZXNzYWdlOiBbXSxcclxuICAgIG11bHRpcGxlOiBmYWxzZSxcclxuICAgIHJlYWRvbmx5OiBmYWxzZSxcclxuICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIGlucHV0Q2xhc3M6IFwiXCIsXHJcbiAgICBjb250YWluZXJDbGFzczogXCJcIixcclxuICAgIHN0ZXA6IFwiYW55XCIsXHJcbiAgICB0eXBlOiBcInRleHRcIixcclxuICAgIGludGVybmFsUmVmOiBSZWFjdC5jcmVhdGVSZWYoKSxcclxuICAgIG9uSW5wdXQ6IG5vb3AsXHJcbiAgICBvbkNoYW5nZTogbm9vcCxcclxuICAgIG9uQmx1cjogbm9vcCxcclxuICAgIG9uRm9jdXM6IG5vb3BcclxufVxyXG5cclxuSW5wdXQucHJvcFR5cGVzID0ge1xyXG4gICAgYXV0b2ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBtYW5hZ2VJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZVZhbHVlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG1heDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG1pbjogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG1heGxlbmd0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG1pbmxlbmd0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgc3RhdHVzOiBQcm9wVHlwZXMub25lT2YoW1wiY3JpdGljYWxcIiwgXCJ3YXJuaW5nXCIsIFwicG9zaXRpdmVcIiwgXCJpbmZvXCIsIFwic3VnZ2VzdGlvblwiXSksXHJcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgICB9KSksXHJcbiAgICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLnJlcXVpcmVkLFxyXG4gICAgcGF0dGVybjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaW5wdXRDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNvbnRhaW5lckNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcmVhZG9ubHk6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc3RlcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBQcm9wVHlwZXMub25lT2ZbXCJhbnlcIl1cclxuICAgIF0pLFxyXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcInRleHRcIiwgXCJwYXNzd29yZFwiLCBcImVtYWlsXCIsIFwibnVtYmVyXCIsIFwidXJsXCIsIFwidGVsXCIsIFwic2VhcmNoXCIsIFwiZGF0ZVwiLCBcImRhdGV0aW1lXCIsIFwiZGF0ZXRpbWUtbG9jYWxcIiwgXCJtb250aFwiLCBcIndlZWtcIiwgXCJ0aW1lXCJdKSxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25JbnB1dDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkludmFsaWQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgaW50ZXJuYWxSZWY6IFByb3BUeXBlcy5lbGVtZW50XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0OyJdfQ==