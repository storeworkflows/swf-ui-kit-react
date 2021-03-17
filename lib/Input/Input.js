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
              children: [_hasIcon && null //<x-mobi-swf-icon icon={el.icon} size="sm"/>
              , _hasContent && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJTdGFydCIsIkVuZCIsIklucHV0IiwicHJvcHMiLCJvbkJsdXIiLCJiaW5kIiwib25Gb2N1cyIsIm9uSW5wdXQiLCJvbkludmFsaWQiLCJzdGF0ZSIsImNoZWNrZWQiLCJpbnZhbGlkIiwiaGFzU3RhcnQiLCJoYXNFbmQiLCJmb2N1c2VkIiwidmFsdWUiLCJjaGlsZHJlbiIsInN0YXJ0IiwiY2xhc3NlcyIsImxlbmd0aCIsInNldFN0YXRlIiwiZW5kIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibWFuYWdlSW52YWxpZCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiZGlzYWJsZWQiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJ0eXBlIiwic3RlcCIsImF1dG9mb2N1cyIsIm1heCIsIm1pbiIsIm1heGxlbmd0aCIsIm1pbmxlbmd0aCIsInBhdHRlcm4iLCJtdWx0aXBsZSIsIm1lc3NhZ2UiLCJfaGFzTGFiZWwiLCJ1bmRlZmluZWQiLCJfaGFzTWVzc2FnZXMiLCJfbW92ZWQiLCJjb250YWluZXJDbGFzc2VzIiwiY29udGFpbmVyQ2xhc3MiLCJsYWJlbENsYXNzZXMiLCJpbnB1dENsYXNzZXMiLCJpbnB1dENsYXNzIiwiZWxtIiwiaW50ZXJuYWxSZWYiLCJjdXJyZW50IiwicmVuZGVyU3RhcnQiLCJvbkNoYW5nZSIsInJlbmRlckVuZCIsIm1hcCIsImVsIiwiX2hhc0ljb24iLCJpY29uIiwiX2hhc0NvbnRlbnQiLCJjb250ZW50IiwiX2V4aXN0Iiwic3RhdHVzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJtYW5hZ2VWYWx1ZSIsImNyZWF0ZVJlZiIsIm5vb3AiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwibnVtYmVyIiwiYXJyYXlPZiIsInNoYXBlIiwib25lT2YiLCJvbmVPZlR5cGUiLCJmdW5jIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxTQUFNLElBQU47QUFBQSxDQUFkOztBQUNBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNO0FBQUEsU0FBTSxJQUFOO0FBQUEsQ0FBWjs7SUFFTUMsSzs7Ozs7QUFDRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUMsSUFBWiwrQkFBZDtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsK0JBQWY7QUFDQSxVQUFLRSxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRixJQUFiLCtCQUFmO0FBQ0EsVUFBS0csU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVILElBQWYsK0JBQWpCO0FBRUEsVUFBS0ksS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLE9BQU8sRUFBRSxNQUFLUCxLQUFMLENBQVdPLE9BRFg7QUFFVEMsTUFBQUEsT0FBTyxFQUFFLE1BQUtSLEtBQUwsQ0FBV1EsT0FGWDtBQUdUQyxNQUFBQSxRQUFRLEVBQUUsS0FIRDtBQUlUQyxNQUFBQSxNQUFNLEVBQUUsS0FKQztBQUtUQyxNQUFBQSxPQUFPLEVBQUUsS0FMQTtBQU1UQyxNQUFBQSxLQUFLLEVBQUU7QUFORSxLQUFiO0FBUGU7QUFlbEI7Ozs7V0FFRCx1QkFBYztBQUFBOztBQUFBLFVBQ0hDLFFBREcsR0FDUyxLQUFLYixLQURkLENBQ0hhLFFBREc7QUFFVixVQUFNQyxLQUFLLEdBQUcsNEJBQVdELFFBQVgsRUFBcUIsT0FBckIsQ0FBZDtBQUNBLFVBQU1FLE9BQU8sR0FBRyw2QkFBVztBQUN2QiwrQkFBdUIsSUFEQTtBQUV2QixvQ0FBYSxLQUFLVCxLQUFsQixnREFBYSxZQUFZRTtBQUZGLE9BQVgsQ0FBaEI7QUFLQSxVQUFJLENBQUNNLEtBQUQsSUFBVUEsS0FBSyxDQUFDRSxNQUFOLEdBQWEsQ0FBM0IsRUFBOEIsT0FBTyxJQUFQO0FBRTlCLE9BQUMsS0FBS1YsS0FBTCxDQUFXRyxRQUFaLElBQXdCLEtBQUtRLFFBQUwsQ0FBYztBQUFDUixRQUFBQSxRQUFRLEVBQUU7QUFBWCxPQUFkLENBQXhCO0FBRUEsMEJBQU87QUFBSyxRQUFBLFNBQVMsRUFBRU0sT0FBaEI7QUFBQSxrQkFBMEJEO0FBQTFCLFFBQVA7QUFDSDs7O1dBRUQscUJBQVk7QUFBQTs7QUFBQSxVQUNERCxRQURDLEdBQ1csS0FBS2IsS0FEaEIsQ0FDRGEsUUFEQztBQUVSLFVBQU1LLEdBQUcsR0FBRyw0QkFBV0wsUUFBWCxFQUFxQixLQUFyQixDQUFaO0FBQ0EsVUFBTUUsT0FBTyxHQUFHLDZCQUFXO0FBQ3ZCLDZCQUFxQixJQURFO0FBRXZCLHFDQUFhLEtBQUtULEtBQWxCLGlEQUFhLGFBQVlFO0FBRkYsT0FBWCxDQUFoQjtBQUtBLFVBQUksQ0FBQ1UsR0FBRCxJQUFRQSxHQUFHLENBQUNGLE1BQUosR0FBVyxDQUF2QixFQUEwQixPQUFPLElBQVA7QUFFMUIsT0FBQyxLQUFLVixLQUFMLENBQVdJLE1BQVosSUFBc0IsS0FBS08sUUFBTCxDQUFjO0FBQUNQLFFBQUFBLE1BQU0sRUFBRTtBQUFULE9BQWQsQ0FBdEI7QUFFQSwwQkFBTztBQUFLLFFBQUEsU0FBUyxFQUFFSyxPQUFoQjtBQUFBLGtCQUEwQkc7QUFBMUIsUUFBUDtBQUNIOzs7V0FFRCxnQkFBT0MsS0FBUCxFQUFjO0FBQ1YsV0FBS0YsUUFBTCxDQUFjO0FBQUNOLFFBQUFBLE9BQU8sRUFBRTtBQUFWLE9BQWQ7QUFDQSxXQUFLWCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JrQixLQUFsQjtBQUNIOzs7V0FFRCxpQkFBUUEsS0FBUixFQUFlO0FBQ1gsV0FBS0YsUUFBTCxDQUFjO0FBQUNOLFFBQUFBLE9BQU8sRUFBRTtBQUFWLE9BQWQ7QUFDQSxXQUFLWCxLQUFMLENBQVdHLE9BQVgsQ0FBbUJnQixLQUFuQjtBQUNIOzs7V0FFRCxpQkFBUUEsS0FBUixFQUFlO0FBQ1gsV0FBS0YsUUFBTCxDQUFjO0FBQUNMLFFBQUFBLEtBQUssRUFBRU8sS0FBSyxDQUFDQyxNQUFOLENBQWFSO0FBQXJCLE9BQWQ7QUFDQSxXQUFLWixLQUFMLENBQVdJLE9BQVgsQ0FBbUJlLEtBQW5CO0FBQ0g7OztXQUVELG1CQUFVRSxDQUFWLEVBQVk7QUFBQSx3QkFDMkIsS0FBS3JCLEtBRGhDO0FBQUEsVUFDRHNCLGFBREMsZUFDREEsYUFEQztBQUFBLFVBQ2NqQixTQURkLGVBQ2NBLFNBRGQ7QUFHUixVQUFHLENBQUNpQixhQUFKLEVBQ0ksS0FBS0wsUUFBTCxDQUFjO0FBQUNULFFBQUFBLE9BQU8sRUFBRTtBQUFWLE9BQWQ7QUFDSkgsTUFBQUEsU0FBUyxDQUFDZ0IsQ0FBRCxDQUFUO0FBQ0g7OztXQUVELDRCQUFtQkUsU0FBbkIsRUFBOEJDLFNBQTlCLEVBQXlDQyxRQUF6QyxFQUFtRDtBQUFBLHlCQUNkLEtBQUt6QixLQURTO0FBQUEsVUFDeENRLE9BRHdDLGdCQUN4Q0EsT0FEd0M7QUFBQSxVQUMvQmMsYUFEK0IsZ0JBQy9CQSxhQUQrQjtBQUcvQyxVQUFHQSxhQUFhLElBQUksS0FBS2hCLEtBQUwsQ0FBV0UsT0FBWCxLQUF1QkEsT0FBM0MsRUFDSSxLQUFLUyxRQUFMLENBQWM7QUFBQ1QsUUFBQUEsT0FBTyxFQUFFQTtBQUFWLE9BQWQ7QUFDUDs7O1dBR0Qsa0JBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSx5QkFvQkQsS0FBS1IsS0FwQko7QUFBQSxVQUVEMEIsUUFGQyxnQkFFREEsUUFGQztBQUFBLFVBR0RDLEtBSEMsZ0JBR0RBLEtBSEM7QUFBQSwyQ0FJREMsSUFKQztBQUFBLFVBSURBLElBSkMsa0NBSU0sTUFKTjtBQUFBLFVBS0RDLFdBTEMsZ0JBS0RBLFdBTEM7QUFBQSxVQU1EQyxRQU5DLGdCQU1EQSxRQU5DO0FBQUEsVUFPREMsUUFQQyxnQkFPREEsUUFQQztBQUFBLFVBUURDLElBUkMsZ0JBUURBLElBUkM7QUFBQSw0Q0FTRHBCLEtBVEM7QUFBQSxVQVNEQSxLQVRDLG1DQVNPLEtBQUtOLEtBQUwsQ0FBV00sS0FUbEI7QUFBQSxVQVVESixPQVZDLGdCQVVEQSxPQVZDO0FBQUEsVUFXRHlCLElBWEMsZ0JBV0RBLElBWEM7QUFBQSxVQVlEQyxTQVpDLGdCQVlEQSxTQVpDO0FBQUEsVUFhREMsR0FiQyxnQkFhREEsR0FiQztBQUFBLFVBY0RDLEdBZEMsZ0JBY0RBLEdBZEM7QUFBQSxVQWVEQyxTQWZDLGdCQWVEQSxTQWZDO0FBQUEsVUFnQkRDLFNBaEJDLGdCQWdCREEsU0FoQkM7QUFBQSxVQWlCREMsT0FqQkMsZ0JBaUJEQSxPQWpCQztBQUFBLFVBa0JEQyxRQWxCQyxnQkFrQkRBLFFBbEJDO0FBQUEsVUFtQkRDLE9BbkJDLGdCQW1CREEsT0FuQkM7O0FBc0JMLFVBQU1DLFNBQVMsR0FBR2YsS0FBSyxLQUFLZ0IsU0FBNUI7O0FBQ0EsVUFBTUMsWUFBWSxHQUFHSCxPQUFPLENBQUN6QixNQUFSLEdBQWlCLENBQXRDOztBQUNBLFVBQU02QixNQUFNLEdBQUcsS0FBS3ZDLEtBQUwsQ0FBV0ssT0FBWCxJQUFzQkMsS0FBdEIsSUFBK0IsS0FBS04sS0FBTCxDQUFXRyxRQUF6RDs7QUFFQSxVQUFNcUMsZ0JBQWdCLEdBQUc7QUFDckIsMEJBQWtCLElBREc7QUFFckIscUNBQWEsS0FBS3hDLEtBQWxCLGlEQUFhLGFBQVlFO0FBRkosU0FHcEIsS0FBS1IsS0FBTCxDQUFXK0MsY0FIUyxFQUdRLElBSFIsRUFBekI7QUFNQSxVQUFNQyxZQUFZLEdBQUcsNkJBQVc7QUFDNUIscUJBQWEsSUFEZTtBQUU1QixtQkFBV0gsTUFGaUI7QUFHNUIscUNBQWEsS0FBS3ZDLEtBQWxCLGlEQUFhLGFBQVlLLE9BSEc7QUFJNUIscUNBQWEsS0FBS0wsS0FBbEIsaURBQWEsYUFBWUU7QUFKRyxPQUFYLENBQXJCO0FBT0EsVUFBTXlDLFlBQVksR0FBRztBQUNqQix3QkFBZ0IsSUFEQztBQUVqQiwyQ0FBbUIsS0FBSzNDLEtBQXhCLGlEQUFtQixhQUFZRyxRQUZkO0FBR2pCLHlDQUFpQixLQUFLSCxLQUF0QixpREFBaUIsYUFBWUksTUFIWjtBQUlqQixxQ0FBYSxLQUFLSixLQUFsQixpREFBYSxhQUFZRTtBQUpSLFNBS2hCLEtBQUtSLEtBQUwsQ0FBV2tELFVBTEssRUFLUSxJQUxSLEVBQXJCO0FBUUEsMEJBQ0k7QUFBQSwrQkFDSTtBQUFLLFVBQUEsU0FBUyxFQUFFSixnQkFBaEI7QUFBa0MsVUFBQSxHQUFHLEVBQUUsYUFBQUssR0FBRztBQUFBLG1CQUFJLE1BQUksQ0FBQ25ELEtBQUwsQ0FBV29ELFdBQVgsQ0FBdUJDLE9BQXZCLEdBQWlDRixHQUFyQztBQUFBLFdBQTFDO0FBQUEscUJBQ0tULFNBQVMsaUJBQUk7QUFBTyxZQUFBLE9BQU8sRUFBQyxNQUFmO0FBQXNCLFlBQUEsU0FBUyxFQUFFTSxZQUFqQztBQUFBLHNCQUFnRHJCO0FBQWhELFlBRGxCLGVBRUk7QUFBSyxZQUFBLFNBQVMsRUFBQyxhQUFmO0FBQUEsdUJBQ0ssS0FBSzJCLFdBQUwsRUFETCxlQUVJO0FBQ0ksY0FBQSxTQUFTLEVBQUVMLFlBRGY7QUFFTyxjQUFBLEVBQUUsRUFBQyxNQUZWO0FBR08sY0FBQSxJQUFJLEVBQUVyQixJQUhiO0FBSU8sY0FBQSxXQUFXLEVBQUVDLFdBSnBCO0FBS08sY0FBQSxJQUFJLEVBQUVJLElBTGI7QUFNTyxjQUFBLElBQUksRUFBRUQsSUFOYjtBQU9PLCtCQUFlRCxRQVB0QjtBQVFPLDhCQUFjdkIsT0FSckI7QUFTTyxjQUFBLEtBQUssRUFBRUksS0FUZDtBQVVPLGNBQUEsUUFBUSxFQUFFa0IsUUFWakI7QUFXTyxjQUFBLFFBQVEsRUFBRUMsUUFYakI7QUFZTyxjQUFBLFNBQVMsRUFBRUcsU0FabEI7QUFhTyxjQUFBLEdBQUcsRUFBRUMsR0FiWjtBQWNPLGNBQUEsR0FBRyxFQUFFQyxHQWRaO0FBZU8sY0FBQSxTQUFTLEVBQUVDLFNBZmxCO0FBZ0JPLGNBQUEsU0FBUyxFQUFFQyxTQWhCbEI7QUFpQk8sY0FBQSxPQUFPLEVBQUVDLE9BakJoQjtBQWtCTyxjQUFBLFFBQVEsRUFBRWIsUUFsQmpCO0FBbUJPLGNBQUEsUUFBUSxFQUFFYyxRQW5CakI7QUFvQk8sY0FBQSxPQUFPLEVBQUUsS0FBS3BDLE9BcEJyQjtBQXFCTyxjQUFBLFFBQVEsRUFBRSxLQUFLSixLQUFMLENBQVd1RCxRQXJCNUI7QUFzQk8sY0FBQSxPQUFPLEVBQUUsaUJBQUNwQyxLQUFELEVBQVc7QUFDaEIsZ0JBQUEsTUFBSSxDQUFDaEIsT0FBTCxDQUFhZ0IsS0FBYjtBQUNILGVBeEJSO0FBeUJPLGNBQUEsTUFBTSxFQUFFLGdCQUFDQSxLQUFELEVBQVc7QUFDZixnQkFBQSxNQUFJLENBQUNsQixNQUFMLENBQVlrQixLQUFaO0FBQ0gsZUEzQlI7QUE0Qk8sY0FBQSxTQUFTLEVBQUUsbUJBQUNFLENBQUQ7QUFBQSx1QkFBTyxNQUFJLENBQUNoQixTQUFMLENBQWVnQixDQUFmLENBQVA7QUFBQTtBQTVCbEIsY0FGSixFQWdDSyxLQUFLbUMsU0FBTCxFQWhDTDtBQUFBLFlBRkosRUFvQ0taLFlBQVksSUFDYkgsT0FBTyxDQUFDZ0IsR0FBUixDQUFZLFVBQUNDLEVBQUQsRUFBUTtBQUNoQixnQkFBTUMsUUFBUSxHQUFHRCxFQUFFLENBQUNFLElBQUgsS0FBWWpCLFNBQVosSUFBeUJlLEVBQUUsQ0FBQ0UsSUFBSCxDQUFRNUMsTUFBUixHQUFpQixDQUEzRDs7QUFDQSxnQkFBTTZDLFdBQVcsR0FBR0gsRUFBRSxDQUFDSSxPQUFILEtBQWVuQixTQUFmLElBQTRCZSxFQUFFLENBQUNJLE9BQUgsQ0FBVzlDLE1BQVgsR0FBb0IsQ0FBcEU7O0FBRUEsZ0JBQU0rQyxNQUFNLEdBQUdKLFFBQVEsSUFBSUUsV0FBM0I7O0FBQ0EsbUJBQ0lFLE1BQU0sZ0JBRUY7QUFBSyxjQUFBLFNBQVMsRUFBRSw2QkFBV0wsRUFBRSxDQUFDTSxNQUFkLENBQWhCO0FBQUEseUJBQ0tMLFFBQVEsSUFBSSxJQURqQixDQUVRO0FBRlIsZ0JBSUtFLFdBQVcsaUJBQ1o7QUFBQSwwQkFBT0gsRUFBRSxDQUFDSTtBQUFWLGdCQUxKO0FBQUEsY0FGRSxHQVVBLElBWFY7QUFhSCxXQWxCRCxDQXJDSjtBQUFBO0FBREosUUFESjtBQThESDs7OztFQTVMZUcsS0FBSyxDQUFDQyxTOztBQStMMUJuRSxLQUFLLENBQUNGLEtBQU4sR0FBYyxvQ0FBbUIsT0FBbkIsQ0FBZDtBQUNBRSxLQUFLLENBQUNELEdBQU4sR0FBWSxvQ0FBbUIsS0FBbkIsQ0FBWjtBQUVBQyxLQUFLLENBQUNvRSxZQUFOLEdBQXFCO0FBQ2pCakMsRUFBQUEsU0FBUyxFQUFFLEtBRE07QUFFakJSLEVBQUFBLFFBQVEsRUFBRSxLQUZPO0FBR2pCbEIsRUFBQUEsT0FBTyxFQUFFLEtBSFE7QUFJakJjLEVBQUFBLGFBQWEsRUFBRSxLQUpFO0FBS2pCOEMsRUFBQUEsV0FBVyxFQUFFLEtBTEk7QUFNakIzQixFQUFBQSxPQUFPLEVBQUUsRUFOUTtBQU9qQkQsRUFBQUEsUUFBUSxFQUFFLEtBUE87QUFRakJWLEVBQUFBLFFBQVEsRUFBRSxLQVJPO0FBU2pCQyxFQUFBQSxRQUFRLEVBQUUsS0FUTztBQVVqQm1CLEVBQUFBLFVBQVUsRUFBRSxFQVZLO0FBV2pCSCxFQUFBQSxjQUFjLEVBQUUsRUFYQztBQVlqQmQsRUFBQUEsSUFBSSxFQUFFLEtBWlc7QUFhakJELEVBQUFBLElBQUksRUFBRSxNQWJXO0FBY2pCb0IsRUFBQUEsV0FBVyxlQUFFYSxLQUFLLENBQUNJLFNBQU4sRUFkSTtBQWVqQmpFLEVBQUFBLE9BQU8sRUFBRWtFLFdBZlE7QUFnQmpCZixFQUFBQSxRQUFRLEVBQUVlLFdBaEJPO0FBaUJqQnJFLEVBQUFBLE1BQU0sRUFBRXFFLFdBakJTO0FBa0JqQm5FLEVBQUFBLE9BQU8sRUFBRW1FLFdBbEJRO0FBbUJqQmpFLEVBQUFBLFNBQVMsRUFBRWlFO0FBbkJNLENBQXJCO0FBc0JBdkUsS0FBSyxDQUFDd0UsU0FBTixHQUFrQjtBQUNkckMsRUFBQUEsU0FBUyxFQUFFc0Msc0JBQVVDLElBRFA7QUFFZC9DLEVBQUFBLFFBQVEsRUFBRThDLHNCQUFVQyxJQUZOO0FBR2RqRSxFQUFBQSxPQUFPLEVBQUVnRSxzQkFBVUMsSUFITDtBQUlkOUMsRUFBQUEsS0FBSyxFQUFFNkMsc0JBQVVFLE1BSkg7QUFLZHBELEVBQUFBLGFBQWEsRUFBRWtELHNCQUFVQyxJQUxYO0FBTWRMLEVBQUFBLFdBQVcsRUFBRUksc0JBQVVDLElBTlQ7QUFPZHRDLEVBQUFBLEdBQUcsRUFBRXFDLHNCQUFVRyxNQVBEO0FBUWR2QyxFQUFBQSxHQUFHLEVBQUVvQyxzQkFBVUcsTUFSRDtBQVNkdEMsRUFBQUEsU0FBUyxFQUFFbUMsc0JBQVVHLE1BVFA7QUFVZHJDLEVBQUFBLFNBQVMsRUFBRWtDLHNCQUFVRyxNQVZQO0FBV2RsQyxFQUFBQSxPQUFPLEVBQUUrQixzQkFBVUksT0FBVixDQUFrQkosc0JBQVVLLEtBQVYsQ0FBZ0I7QUFDdkNiLElBQUFBLE1BQU0sRUFBRVEsc0JBQVVNLEtBQVYsQ0FBZ0IsQ0FBQyxVQUFELEVBQWEsU0FBYixFQUF3QixVQUF4QixFQUFvQyxNQUFwQyxFQUE0QyxZQUE1QyxDQUFoQixDQUQrQjtBQUV2Q2hCLElBQUFBLE9BQU8sRUFBRVUsc0JBQVVFLE1BRm9CO0FBR3ZDZCxJQUFBQSxJQUFJLEVBQUVZLHNCQUFVRTtBQUh1QixHQUFoQixDQUFsQixDQVhLO0FBZ0JkbEMsRUFBQUEsUUFBUSxFQUFFZ0Msc0JBQVVDLElBaEJOO0FBaUJkN0MsRUFBQUEsSUFBSSxFQUFFNEMsc0JBQVVFLE1BQVYsQ0FBaUIzQyxRQWpCVDtBQWtCZFEsRUFBQUEsT0FBTyxFQUFFaUMsc0JBQVVFLE1BbEJMO0FBbUJkN0MsRUFBQUEsV0FBVyxFQUFFMkMsc0JBQVVFLE1BbkJUO0FBb0JkeEIsRUFBQUEsVUFBVSxFQUFFc0Isc0JBQVVFLE1BcEJSO0FBcUJkM0IsRUFBQUEsY0FBYyxFQUFFeUIsc0JBQVVFLE1BckJaO0FBc0JkNUMsRUFBQUEsUUFBUSxFQUFFMEMsc0JBQVVDLElBdEJOO0FBdUJkMUMsRUFBQUEsUUFBUSxFQUFFeUMsc0JBQVVDLElBdkJOO0FBd0JkeEMsRUFBQUEsSUFBSSxFQUFFdUMsc0JBQVVPLFNBQVYsQ0FBb0IsQ0FDdEJQLHNCQUFVRyxNQURZLEVBRXRCSCxzQkFBVU0sS0FBVixDQUFnQixLQUFoQixDQUZzQixDQUFwQixDQXhCUTtBQTRCZDlDLEVBQUFBLElBQUksRUFBRXdDLHNCQUFVTSxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsT0FBckIsRUFBOEIsUUFBOUIsRUFBd0MsS0FBeEMsRUFBK0MsS0FBL0MsRUFBc0QsUUFBdEQsRUFBZ0UsTUFBaEUsRUFBd0UsVUFBeEUsRUFBb0YsZ0JBQXBGLEVBQXNHLE9BQXRHLEVBQStHLE1BQS9HLEVBQXVILE1BQXZILENBQWhCLENBNUJRO0FBNkJkbEUsRUFBQUEsS0FBSyxFQUFFNEQsc0JBQVVFLE1BN0JIO0FBOEJkdEUsRUFBQUEsT0FBTyxFQUFFb0Usc0JBQVVRLElBOUJMO0FBK0JkekIsRUFBQUEsUUFBUSxFQUFFaUIsc0JBQVVRLElBL0JOO0FBZ0NkN0UsRUFBQUEsT0FBTyxFQUFFcUUsc0JBQVVRLElBaENMO0FBaUNkL0UsRUFBQUEsTUFBTSxFQUFFdUUsc0JBQVVRLElBakNKO0FBa0NkM0UsRUFBQUEsU0FBUyxFQUFFbUUsc0JBQVVRLElBbENQO0FBbUNkNUIsRUFBQUEsV0FBVyxFQUFFb0Isc0JBQVVTO0FBbkNULENBQWxCO2VBc0NlbEYsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgZmluZEJ5VHlwZSwge2NyZWF0ZVN1YkNvbXBvbmVudH0gZnJvbSBcIi4uL3V0aWxzL2ZpbmRCeVR5cGVcIjtcclxuaW1wb3J0IHtub29wfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmNvbnN0IFN0YXJ0ID0gKCkgPT4gbnVsbDtcclxuY29uc3QgRW5kID0gKCkgPT4gbnVsbDtcclxuXHJcbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbklucHV0ID0gdGhpcy5vbklucHV0LmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uSW52YWxpZCA9IHRoaXMub25JbnZhbGlkLmJpbmQodGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkLFxyXG4gICAgICAgICAgICBpbnZhbGlkOiB0aGlzLnByb3BzLmludmFsaWQsXHJcbiAgICAgICAgICAgIGhhc1N0YXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgaGFzRW5kOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9jdXNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXJTdGFydCgpIHtcclxuICAgICAgICBjb25zdCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBzdGFydCA9IGZpbmRCeVR5cGUoY2hpbGRyZW4sIFwiU3RhcnRcIik7XHJcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICBcImZvcm0tY29udHJvbC0tc3RhcnRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCItLWludmFsaWRcIjogdGhpcy5zdGF0ZT8uaW52YWxpZFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICghc3RhcnQgfHwgc3RhcnQubGVuZ3RoPDEpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAhdGhpcy5zdGF0ZS5oYXNTdGFydCAmJiB0aGlzLnNldFN0YXRlKHtoYXNTdGFydDogdHJ1ZX0pXHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+e3N0YXJ0fTwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckVuZCgpIHtcclxuICAgICAgICBjb25zdCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBlbmQgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBcIkVuZFwiKTtcclxuICAgICAgICBjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgIFwiZm9ybS1jb250cm9sLS1lbmRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCItLWludmFsaWRcIjogdGhpcy5zdGF0ZT8uaW52YWxpZFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICghZW5kIHx8IGVuZC5sZW5ndGg8MSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICF0aGlzLnN0YXRlLmhhc0VuZCAmJiB0aGlzLnNldFN0YXRlKHtoYXNFbmQ6IHRydWV9KVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PntlbmR9PC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgb25CbHVyKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogZmFsc2V9KVxyXG4gICAgICAgIHRoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZvY3VzKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogdHJ1ZX0pXHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBvbklucHV0KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICB0aGlzLnByb3BzLm9uSW5wdXQoZXZlbnQpXHJcbiAgICB9XHJcblxyXG4gICAgb25JbnZhbGlkKGUpe1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VJbnZhbGlkLCBvbkludmFsaWR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYoIW1hbmFnZUludmFsaWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ludmFsaWQ6IHRydWV9KTtcclxuICAgICAgICBvbkludmFsaWQoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xyXG4gICAgICAgIGNvbnN0IHtpbnZhbGlkLCBtYW5hZ2VJbnZhbGlkfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmKG1hbmFnZUludmFsaWQgJiYgdGhpcy5zdGF0ZS5pbnZhbGlkICE9PSBpbnZhbGlkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnZhbGlkOiBpbnZhbGlkfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgbmFtZSA9IFwibmFtZVwiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgcmVhZG9ubHksXHJcbiAgICAgICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUsXHJcbiAgICAgICAgICAgIGludmFsaWQsXHJcbiAgICAgICAgICAgIHN0ZXAsXHJcbiAgICAgICAgICAgIGF1dG9mb2N1cyxcclxuICAgICAgICAgICAgbWF4LFxyXG4gICAgICAgICAgICBtaW4sXHJcbiAgICAgICAgICAgIG1heGxlbmd0aCxcclxuICAgICAgICAgICAgbWlubGVuZ3RoLFxyXG4gICAgICAgICAgICBwYXR0ZXJuLFxyXG4gICAgICAgICAgICBtdWx0aXBsZSxcclxuICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBfaGFzTGFiZWwgPSBsYWJlbCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGNvbnN0IF9oYXNNZXNzYWdlcyA9IG1lc3NhZ2UubGVuZ3RoID4gMDtcclxuICAgICAgICBjb25zdCBfbW92ZWQgPSB0aGlzLnN0YXRlLmZvY3VzZWQgfHwgdmFsdWUgfHwgdGhpcy5zdGF0ZS5oYXNTdGFydDtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyQ2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICBcInN3Zi1mb3JtLWdyb3VwXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiLS1pbnZhbGlkXCI6IHRoaXMuc3RhdGU/LmludmFsaWQsXHJcbiAgICAgICAgICAgIFt0aGlzLnByb3BzLmNvbnRhaW5lckNsYXNzXTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGxhYmVsQ2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICBcImlucC1sYWJlbFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIi0tbW92ZWRcIjogX21vdmVkLFxyXG4gICAgICAgICAgICBcIi0tZm9jdXNlZFwiOiB0aGlzLnN0YXRlPy5mb2N1c2VkLFxyXG4gICAgICAgICAgICBcIi0taW52YWxpZFwiOiB0aGlzLnN0YXRlPy5pbnZhbGlkXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0Q2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICBcImZvcm0tY29udHJvbFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcIm5vLXN0YXJ0LWJvcmRlclwiOiB0aGlzLnN0YXRlPy5oYXNTdGFydCxcclxuICAgICAgICAgICAgXCJuby1lbmQtYm9yZGVyXCI6IHRoaXMuc3RhdGU/Lmhhc0VuZCxcclxuICAgICAgICAgICAgXCItLWludmFsaWRcIjogdGhpcy5zdGF0ZT8uaW52YWxpZCxcclxuICAgICAgICAgICAgW3RoaXMucHJvcHMuaW5wdXRDbGFzc106IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzZXN9IHJlZj17ZWxtID0+IHRoaXMucHJvcHMuaW50ZXJuYWxSZWYuY3VycmVudCA9IGVsbX0+XHJcbiAgICAgICAgICAgICAgICAgICAge19oYXNMYWJlbCAmJiA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9e2xhYmVsQ2xhc3Nlc30+e2xhYmVsfTwvbGFiZWw+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU3RhcnQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0Q2xhc3Nlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17c3RlcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17aW52YWxpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17YXV0b2ZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXttYXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49e21pbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17bWF4bGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPXttaW5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPXtwYXR0ZXJufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU9e211bHRpcGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5vbklucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRm9jdXMoZXZlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmx1cihldmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkludmFsaWQ9eyhlKSA9PiB0aGlzLm9uSW52YWxpZChlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRW5kKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge19oYXNNZXNzYWdlcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubWFwKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfaGFzSWNvbiA9IGVsLmljb24gIT09IHVuZGVmaW5lZCAmJiBlbC5pY29uLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9oYXNDb250ZW50ID0gZWwuY29udGVudCAhPT0gdW5kZWZpbmVkICYmIGVsLmNvbnRlbnQubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9leGlzdCA9IF9oYXNJY29uIHx8IF9oYXNDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2V4aXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGVsLnN0YXR1cyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X2hhc0ljb24gJiYgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy88eC1tb2JpLXN3Zi1pY29uIGljb249e2VsLmljb259IHNpemU9XCJzbVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X2hhc0NvbnRlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VsLmNvbnRlbnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbklucHV0LlN0YXJ0ID0gY3JlYXRlU3ViQ29tcG9uZW50KFwiU3RhcnRcIik7XHJcbklucHV0LkVuZCA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkVuZFwiKTtcclxuXHJcbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGF1dG9mb2N1czogZmFsc2UsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBpbnZhbGlkOiBmYWxzZSxcclxuICAgIG1hbmFnZUludmFsaWQ6IGZhbHNlLFxyXG4gICAgbWFuYWdlVmFsdWU6IGZhbHNlLFxyXG4gICAgbWVzc2FnZTogW10sXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICByZWFkb25seTogZmFsc2UsXHJcbiAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICBpbnB1dENsYXNzOiBcIlwiLFxyXG4gICAgY29udGFpbmVyQ2xhc3M6IFwiXCIsXHJcbiAgICBzdGVwOiBcImFueVwiLFxyXG4gICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICBpbnRlcm5hbFJlZjogUmVhY3QuY3JlYXRlUmVmKCksXHJcbiAgICBvbklucHV0OiBub29wLFxyXG4gICAgb25DaGFuZ2U6IG5vb3AsXHJcbiAgICBvbkJsdXI6IG5vb3AsXHJcbiAgICBvbkZvY3VzOiBub29wLFxyXG4gICAgb25JbnZhbGlkOiBub29wXHJcbn1cclxuXHJcbklucHV0LnByb3BUeXBlcyA9IHtcclxuICAgIGF1dG9mb2N1czogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbWFuYWdlSW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VWYWx1ZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYXg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtaW46IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtYXhsZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtaW5sZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtZXNzYWdlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHN0YXR1czogUHJvcFR5cGVzLm9uZU9mKFtcImNyaXRpY2FsXCIsIFwid2FybmluZ1wiLCBcInBvc2l0aXZlXCIsIFwiaW5mb1wiLCBcInN1Z2dlc3Rpb25cIl0pLFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfSkpLFxyXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5yZXF1aXJlZCxcclxuICAgIHBhdHRlcm46IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGlucHV0Q2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjb250YWluZXJDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHJlYWRvbmx5OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHN0ZXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgUHJvcFR5cGVzLm9uZU9mW1wiYW55XCJdXHJcbiAgICBdKSxcclxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJ0ZXh0XCIsIFwicGFzc3dvcmRcIiwgXCJlbWFpbFwiLCBcIm51bWJlclwiLCBcInVybFwiLCBcInRlbFwiLCBcInNlYXJjaFwiLCBcImRhdGVcIiwgXCJkYXRldGltZVwiLCBcImRhdGV0aW1lLWxvY2FsXCIsIFwibW9udGhcIiwgXCJ3ZWVrXCIsIFwidGltZVwiXSksXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uSW5wdXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25JbnZhbGlkOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGludGVybmFsUmVmOiBQcm9wVHlwZXMuZWxlbWVudFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDsiXX0=