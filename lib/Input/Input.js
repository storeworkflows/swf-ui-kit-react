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
      var _this2 = this;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJTdGFydCIsIkVuZCIsIklucHV0IiwicHJvcHMiLCJvbkJsdXIiLCJiaW5kIiwib25Gb2N1cyIsIm9uSW5wdXQiLCJzdGF0ZSIsImNoZWNrZWQiLCJoYXNTdGFydCIsImhhc0VuZCIsImZvY3VzZWQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwic3RhcnQiLCJzZXRTdGF0ZSIsImVuZCIsImV2ZW50IiwidGFyZ2V0IiwiZGlzYWJsZWQiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJ0eXBlIiwiaW52YWxpZCIsInN0ZXAiLCJhdXRvZm9jdXMiLCJtYXgiLCJtaW4iLCJtYXhsZW5ndGgiLCJtaW5sZW5ndGgiLCJwYXR0ZXJuIiwibXVsdGlwbGUiLCJtZXNzYWdlIiwiX2hhc0xhYmVsIiwidW5kZWZpbmVkIiwiX2hhc01lc3NhZ2VzIiwibGVuZ3RoIiwiX21vdmVkIiwic3R5bGVzIiwicmVuZGVyU3RhcnQiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsInJlbmRlckVuZCIsIm1hcCIsImVsIiwiX2hhc0ljb24iLCJpY29uIiwiX2hhc0NvbnRlbnQiLCJjb250ZW50IiwiX2V4aXN0Iiwic3RhdHVzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJtYW5hZ2VJbnZhbGlkIiwibWFuYWdlVmFsdWUiLCJub29wIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mIiwib25lT2ZUeXBlIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxTQUFNLElBQU47QUFBQSxDQUFkOztB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RTRCLHNCQUFVRSxNQWxCTDtBQW1CZHpDLEVBQUFBLFdBQVcsRUFBRXVDLHNCQUFVRSxNQW5CVDtBQW9CZHBCLEVBQUFBLFNBQVMsRUFBRWtCLHNCQUFVRSxNQXBCUDtBQXFCZHhDLEVBQUFBLFFBQVEsRUFBRXNDLHNCQUFVQyxJQXJCTjtBQXNCZHRDLEVBQUFBLFFBQVEsRUFBRXFDLHNCQUFVQyxJQXRCTjtBQXVCZG5DLEVBQUFBLElBQUksRUFBRWtDLHNCQUFVTyxTQUFWLENBQW9CLENBQ3RCUCxzQkFBVUcsTUFEWSxFQUV0Qkgsc0JBQVVNLEtBQVYsQ0FBZ0IsS0FBaEIsQ0FGc0IsQ0FBcEIsQ0F2QlE7QUEyQmQxQyxFQUFBQSxJQUFJLEVBQUVvQyxzQkFBVU0sS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLE9BQXJCLEVBQThCLFFBQTlCLEVBQXdDLEtBQXhDLEVBQStDLEtBQS9DLEVBQXNELFFBQXRELEVBQWdFLE1BQWhFLEVBQXdFLFVBQXhFLEVBQW9GLGdCQUFwRixFQUFzRyxPQUF0RyxFQUErRyxNQUEvRyxFQUF1SCxNQUF2SCxDQUFoQixDQTNCUTtBQTRCZHZELEVBQUFBLEtBQUssRUFBRWlELHNCQUFVRSxNQTVCSDtBQTZCZHpELEVBQUFBLE9BQU8sRUFBRXVELHNCQUFVUSxJQTdCTDtBQThCZHpCLEVBQUFBLFFBQVEsRUFBRWlCLHNCQUFVUSxJQTlCTjtBQStCZGhFLEVBQUFBLE9BQU8sRUFBRXdELHNCQUFVUSxJQS9CTDtBQWdDZGxFLEVBQUFBLE1BQU0sRUFBRTBELHNCQUFVUTtBQWhDSixDQUFsQjtlQW1DZXBFLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGZpbmRCeVR5cGUgZnJvbSBcIi4uL3V0aWxzL2ZpbmRCeVR5cGVcIjtcbmltcG9ydCB7bm9vcH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmNvbnN0IFN0YXJ0ID0gKCkgPT4gbnVsbDtcbmNvbnN0IEVuZCA9ICgpID0+IG51bGw7XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm9uSW5wdXQgPSB0aGlzLm9uSW5wdXQuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkLFxuICAgICAgICAgICAgaGFzU3RhcnQ6IGZhbHNlLFxuICAgICAgICAgICAgaGFzRW5kOiBmYWxzZSxcbiAgICAgICAgICAgIGZvY3VzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXJTdGFydCgpIHtcbiAgICAgICAgY29uc3Qge2NoaWxkcmVufSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgU3RhcnQpO1xuXG4gICAgICAgIGlmICghc3RhcnQpIHJldHVybiBudWxsO1xuXG4gICAgICAgICF0aGlzLnN0YXRlLmhhc1N0YXJ0ICYmIHRoaXMuc2V0U3RhdGUoe2hhc1N0YXJ0OiB0cnVlfSlcblxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtLXN0YXJ0XCI+e3N0YXJ0LnByb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgIH1cblxuICAgIHJlbmRlckVuZCgpIHtcbiAgICAgICAgY29uc3Qge2NoaWxkcmVufSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGVuZCA9IGZpbmRCeVR5cGUoY2hpbGRyZW4sIEVuZCk7XG5cbiAgICAgICAgaWYgKCFlbmQpIHJldHVybiBudWxsO1xuXG4gICAgICAgICF0aGlzLnN0YXRlLmhhc0VuZCAmJiB0aGlzLnNldFN0YXRlKHtoYXNFbmQ6IHRydWV9KVxuXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC0tZW5kXCI+e2VuZC5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICB9XG5cbiAgICBvbkJsdXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogZmFsc2V9KVxuICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgfVxuXG4gICAgb25Gb2N1cyhldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiB0cnVlfSlcbiAgICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbklucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgIHRoaXMucHJvcHMub25JbnB1dChldmVudClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBuYW1lID0gXCJuYW1lXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcixcbiAgICAgICAgICAgIHJlYWRvbmx5LFxuICAgICAgICAgICAgcmVxdWlyZWQsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlLFxuICAgICAgICAgICAgaW52YWxpZCxcbiAgICAgICAgICAgIHN0ZXAsXG4gICAgICAgICAgICBhdXRvZm9jdXMsXG4gICAgICAgICAgICBtYXgsXG4gICAgICAgICAgICBtaW4sXG4gICAgICAgICAgICBtYXhsZW5ndGgsXG4gICAgICAgICAgICBtaW5sZW5ndGgsXG4gICAgICAgICAgICBwYXR0ZXJuLFxuICAgICAgICAgICAgbXVsdGlwbGUsXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IF9oYXNMYWJlbCA9IGxhYmVsICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IF9oYXNNZXNzYWdlcyA9IG1lc3NhZ2UubGVuZ3RoID4gMDtcbiAgICAgICAgY29uc3QgX21vdmVkID0gdGhpcy5zdGF0ZS5mb2N1c2VkIHx8IHZhbHVlIHx8IHRoaXMuc3RhdGUuaGFzU3RhcnQ7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHN0eWxlPntzdHlsZXN9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAge19oYXNMYWJlbCAmJiA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnAtbGFiZWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1tb3ZlZFwiOiBfbW92ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tZm9jdXNlZFwiOiB0aGlzLnN0YXRlLmZvY3VzZWRcbiAgICAgICAgICAgICAgICAgICAgfSl9PntsYWJlbH08L2xhYmVsPn1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1ncm91cFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN0YXJ0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY29udHJvbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm8tc3RhcnQtYm9yZGVyXCI6IHRoaXMuc3RhdGUuaGFzU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuby1lbmQtYm9yZGVyXCI6IHRoaXMuc3RhdGUuaGFzRW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmNsYXNzTmFtZV06IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17aW52YWxpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3JlYWRvbmx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e2F1dG9mb2N1c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9e21heH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49e21pbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9e21heGxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg9e21pbmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPXtwYXR0ZXJufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZT17bXVsdGlwbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5vbklucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRm9jdXMoZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmx1cihldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckVuZCgpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge19oYXNNZXNzYWdlcyAmJlxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm1hcCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9oYXNJY29uID0gZWwuaWNvbiAhPT0gdW5kZWZpbmVkICYmIGVsLmljb24ubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9oYXNDb250ZW50ID0gZWwuY29udGVudCAhPT0gdW5kZWZpbmVkICYmIGVsLmNvbnRlbnQubGVuZ3RoID4gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2V4aXN0ID0gX2hhc0ljb24gfHwgX2hhc0NvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9leGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGVsLnN0YXR1cyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge19oYXNJY29uICYmIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLzx4LW1vYmktc3dmLWljb24gaWNvbj17ZWwuaWNvbn0gc2l6ZT1cInNtXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge19oYXNDb250ZW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZWwuY29udGVudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuSW5wdXQuU3RhcnQgPSBTdGFydDtcbklucHV0LkVuZCA9IEVuZDtcblxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICAgIGF1dG9mb2N1czogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGludmFsaWQ6IGZhbHNlLFxuICAgIG1hbmFnZUludmFsaWQ6IGZhbHNlLFxuICAgIG1hbmFnZVZhbHVlOiBmYWxzZSxcbiAgICBtZXNzYWdlOiBbXSxcbiAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBzdGVwOiBcImFueVwiLFxuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIG9uSW5wdXQ6IG5vb3AsXG4gICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgb25CbHVyOiBub29wLFxuICAgIG9uRm9jdXM6IG5vb3Bcbn1cblxuSW5wdXQucHJvcFR5cGVzID0ge1xuICAgIGF1dG9mb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1hbmFnZUludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG1hbmFnZVZhbHVlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtYXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWluOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1heGxlbmd0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtaW5sZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWVzc2FnZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgc3RhdHVzOiBQcm9wVHlwZXMub25lT2YoW1wiY3JpdGljYWxcIiwgXCJ3YXJuaW5nXCIsIFwicG9zaXRpdmVcIiwgXCJpbmZvXCIsIFwic3VnZ2VzdGlvblwiXSksXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9KSksXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcucmVxdWlyZWQsXG4gICAgcGF0dGVybjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmVhZG9ubHk6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzdGVwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgUHJvcFR5cGVzLm9uZU9mW1wiYW55XCJdXG4gICAgXSksXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcInRleHRcIiwgXCJwYXNzd29yZFwiLCBcImVtYWlsXCIsIFwibnVtYmVyXCIsIFwidXJsXCIsIFwidGVsXCIsIFwic2VhcmNoXCIsIFwiZGF0ZVwiLCBcImRhdGV0aW1lXCIsIFwiZGF0ZXRpbWUtbG9jYWxcIiwgXCJtb250aFwiLCBcIndlZWtcIiwgXCJ0aW1lXCJdKSxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbklucHV0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ==