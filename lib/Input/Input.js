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
      var start = (0, _findByType["default"])(children, "Start");
      if (!start) return null;
      !this.state.hasStart && this.setState({
        hasStart: true
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "form-control--start",
        children: start
      });
    }
  }, {
    key: "renderEnd",
    value: function renderEnd() {
      var children = this.props.children;
      var end = (0, _findByType["default"])(children, "End");
      if (!end) return null;
      !this.state.hasEnd && this.setState({
        hasEnd: true
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "form-control--end",
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
  internalRef: _propTypes["default"].element
};
var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJTdGFydCIsIkVuZCIsIklucHV0IiwicHJvcHMiLCJvbkJsdXIiLCJiaW5kIiwib25Gb2N1cyIsIm9uSW5wdXQiLCJzdGF0ZSIsImNoZWNrZWQiLCJoYXNTdGFydCIsImhhc0VuZCIsImZvY3VzZWQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwic3RhcnQiLCJzZXRTdGF0ZSIsImVuZCIsImV2ZW50IiwidGFyZ2V0IiwiZGlzYWJsZWQiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJ0eXBlIiwiaW52YWxpZCIsInN0ZXAiLCJhdXRvZm9jdXMiLCJtYXgiLCJtaW4iLCJtYXhsZW5ndGgiLCJtaW5sZW5ndGgiLCJwYXR0ZXJuIiwibXVsdGlwbGUiLCJtZXNzYWdlIiwiX2hhc0xhYmVsIiwidW5kZWZpbmVkIiwiX2hhc01lc3NhZ2VzIiwibGVuZ3RoIiwiX21vdmVkIiwiY29udGFpbmVyQ2xhc3NlcyIsImNvbnRhaW5lckNsYXNzIiwibGFiZWxDbGFzc2VzIiwiaW5wdXRDbGFzc2VzIiwiaW5wdXRDbGFzcyIsInN0eWxlcyIsImVsbSIsImludGVybmFsUmVmIiwiY3VycmVudCIsInJlbmRlclN0YXJ0Iiwib25DaGFuZ2UiLCJyZW5kZXJFbmQiLCJtYXAiLCJlbCIsIl9oYXNJY29uIiwiaWNvbiIsIl9oYXNDb250ZW50IiwiY29udGVudCIsIl9leGlzdCIsInN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwibWFuYWdlSW52YWxpZCIsIm1hbmFnZVZhbHVlIiwiY3JlYXRlUmVmIiwibm9vcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJudW1iZXIiLCJhcnJheU9mIiwic2hhcGUiLCJvbmVPZiIsIm9uZU9mVHlwZSIsImZ1bmMiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7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QStDLEtBQS9DLEVBQXNELFFBQXRELEVBQWdFLE1BQWhFLEVBQXdFLFVBQXhFLEVBQW9GLGdCQUFwRixFQUFzRyxPQUF0RyxFQUErRyxNQUEvRyxFQUF1SCxNQUF2SCxDQUFoQixDQTVCUTtBQTZCZC9ELEVBQUFBLEtBQUssRUFBRXlELHNCQUFVRSxNQTdCSDtBQThCZGpFLEVBQUFBLE9BQU8sRUFBRStELHNCQUFVUSxJQTlCTDtBQStCZDFCLEVBQUFBLFFBQVEsRUFBRWtCLHNCQUFVUSxJQS9CTjtBQWdDZHhFLEVBQUFBLE9BQU8sRUFBRWdFLHNCQUFVUSxJQWhDTDtBQWlDZDFFLEVBQUFBLE1BQU0sRUFBRWtFLHNCQUFVUSxJQWpDSjtBQWtDZDdCLEVBQUFBLFdBQVcsRUFBRXFCLHNCQUFVUztBQWxDVCxDQUFsQjtlQXFDZTdFLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBmaW5kQnlUeXBlLCB7Y3JlYXRlU3ViQ29tcG9uZW50fSBmcm9tIFwiLi4vdXRpbHMvZmluZEJ5VHlwZVwiO1xyXG5pbXBvcnQge25vb3B9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuY29uc3QgU3RhcnQgPSAoKSA9PiBudWxsO1xyXG5jb25zdCBFbmQgPSAoKSA9PiBudWxsO1xyXG5cclxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uSW5wdXQgPSB0aGlzLm9uSW5wdXQuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZCxcclxuICAgICAgICAgICAgaGFzU3RhcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBoYXNFbmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb2N1c2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlclN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnN0IHtjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgXCJTdGFydFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFzdGFydCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICF0aGlzLnN0YXRlLmhhc1N0YXJ0ICYmIHRoaXMuc2V0U3RhdGUoe2hhc1N0YXJ0OiB0cnVlfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLS1zdGFydFwiPntzdGFydH08L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJFbmQoKSB7XHJcbiAgICAgICAgY29uc3Qge2NoaWxkcmVufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZW5kID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgXCJFbmRcIik7XHJcblxyXG4gICAgICAgIGlmICghZW5kKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgIXRoaXMuc3RhdGUuaGFzRW5kICYmIHRoaXMuc2V0U3RhdGUoe2hhc0VuZDogdHJ1ZX0pXHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC0tZW5kXCI+e2VuZH08L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICBvbkJsdXIoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiBmYWxzZX0pXHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRm9jdXMoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiB0cnVlfSlcclxuICAgICAgICB0aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5wdXQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIHRoaXMucHJvcHMub25JbnB1dChldmVudClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIG5hbWUgPSBcIm5hbWVcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgIHJlYWRvbmx5LFxyXG4gICAgICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlLFxyXG4gICAgICAgICAgICBpbnZhbGlkLFxyXG4gICAgICAgICAgICBzdGVwLFxyXG4gICAgICAgICAgICBhdXRvZm9jdXMsXHJcbiAgICAgICAgICAgIG1heCxcclxuICAgICAgICAgICAgbWluLFxyXG4gICAgICAgICAgICBtYXhsZW5ndGgsXHJcbiAgICAgICAgICAgIG1pbmxlbmd0aCxcclxuICAgICAgICAgICAgcGF0dGVybixcclxuICAgICAgICAgICAgbXVsdGlwbGUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgX2hhc0xhYmVsID0gbGFiZWwgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICBjb25zdCBfaGFzTWVzc2FnZXMgPSBtZXNzYWdlLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgY29uc3QgX21vdmVkID0gdGhpcy5zdGF0ZS5mb2N1c2VkIHx8IHZhbHVlIHx8IHRoaXMuc3RhdGUuaGFzU3RhcnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckNsYXNzZXMgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgXCJmb3JtLWdyb3VwXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFt0aGlzLnByb3BzLmNvbnRhaW5lckNsYXNzXTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGxhYmVsQ2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICBcImlucC1sYWJlbFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIi0tbW92ZWRcIjogX21vdmVkLFxyXG4gICAgICAgICAgICBcIi0tZm9jdXNlZFwiOiB0aGlzLnN0YXRlPy5mb2N1c2VkXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0Q2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICBcImZvcm0tY29udHJvbFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIm5vLXN0YXJ0LWJvcmRlclwiOiB0aGlzLnN0YXRlPy5oYXNTdGFydCxcclxuICAgICAgICAgICAgXCJuby1lbmQtYm9yZGVyXCI6IHRoaXMuc3RhdGU/Lmhhc0VuZCxcclxuICAgICAgICAgICAgW3RoaXMucHJvcHMuaW5wdXRDbGFzc106IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPntzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc2VzfSByZWY9e2VsbSA9PiB0aGlzLnByb3BzLmludGVybmFsUmVmLmN1cnJlbnQgPSBlbG19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtfaGFzTGFiZWwgJiYgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPXtsYWJlbENsYXNzZXN9PntsYWJlbH08L2xhYmVsPn1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN0YXJ0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e2ludmFsaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17cmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e2F1dG9mb2N1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17bWF4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXttaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9e21heGxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aD17bWlubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybj17cGF0dGVybn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlPXttdWx0aXBsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMub25JbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZvY3VzKGV2ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmx1cihldmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckVuZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtfaGFzTWVzc2FnZXMgJiZcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm1hcCgoZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2hhc0ljb24gPSBlbC5pY29uICE9PSB1bmRlZmluZWQgJiYgZWwuaWNvbi5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfaGFzQ29udGVudCA9IGVsLmNvbnRlbnQgIT09IHVuZGVmaW5lZCAmJiBlbC5jb250ZW50Lmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfZXhpc3QgPSBfaGFzSWNvbiB8fCBfaGFzQ29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9leGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhlbC5zdGF0dXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge19oYXNJY29uICYmIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPHgtbW9iaS1zd2YtaWNvbiBpY29uPXtlbC5pY29ufSBzaXplPVwic21cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge19oYXNDb250ZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntlbC5jb250ZW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5JbnB1dC5TdGFydCA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIlN0YXJ0XCIpO1xyXG5JbnB1dC5FbmQgPSBjcmVhdGVTdWJDb21wb25lbnQoXCJFbmRcIik7XHJcblxyXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBhdXRvZm9jdXM6IGZhbHNlLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgaW52YWxpZDogZmFsc2UsXHJcbiAgICBtYW5hZ2VJbnZhbGlkOiBmYWxzZSxcclxuICAgIG1hbmFnZVZhbHVlOiBmYWxzZSxcclxuICAgIG1lc3NhZ2U6IFtdLFxyXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxyXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgaW5wdXRDbGFzczogXCJcIixcclxuICAgIGNvbnRhaW5lckNsYXNzOiBcIlwiLFxyXG4gICAgc3RlcDogXCJhbnlcIixcclxuICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgaW50ZXJuYWxSZWY6IFJlYWN0LmNyZWF0ZVJlZigpLFxyXG4gICAgb25JbnB1dDogbm9vcCxcclxuICAgIG9uQ2hhbmdlOiBub29wLFxyXG4gICAgb25CbHVyOiBub29wLFxyXG4gICAgb25Gb2N1czogbm9vcFxyXG59XHJcblxyXG5JbnB1dC5wcm9wVHlwZXMgPSB7XHJcbiAgICBhdXRvZm9jdXM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG1hbmFnZUludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlVmFsdWU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWF4OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWluOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWF4bGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWlubGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWVzc2FnZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBzdGF0dXM6IFByb3BUeXBlcy5vbmVPZihbXCJjcml0aWNhbFwiLCBcIndhcm5pbmdcIiwgXCJwb3NpdGl2ZVwiLCBcImluZm9cIiwgXCJzdWdnZXN0aW9uXCJdKSxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmdcclxuICAgIH0pKSxcclxuICAgIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcucmVxdWlyZWQsXHJcbiAgICBwYXR0ZXJuOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpbnB1dENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29udGFpbmVyQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICByZWFkb25seTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzdGVwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIFByb3BUeXBlcy5vbmVPZltcImFueVwiXVxyXG4gICAgXSksXHJcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoW1widGV4dFwiLCBcInBhc3N3b3JkXCIsIFwiZW1haWxcIiwgXCJudW1iZXJcIiwgXCJ1cmxcIiwgXCJ0ZWxcIiwgXCJzZWFyY2hcIiwgXCJkYXRlXCIsIFwiZGF0ZXRpbWVcIiwgXCJkYXRldGltZS1sb2NhbFwiLCBcIm1vbnRoXCIsIFwid2Vla1wiLCBcInRpbWVcIl0pLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbklucHV0OiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGludGVybmFsUmVmOiBQcm9wVHlwZXMuZWxlbWVudFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDsiXX0=