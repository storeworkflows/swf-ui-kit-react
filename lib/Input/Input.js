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
      var start = (0, _findByType["default"])(children, "Start");
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
      var end = (0, _findByType["default"])(children, "End");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJTdGFydCIsIkVuZCIsIklucHV0IiwicHJvcHMiLCJvbkJsdXIiLCJiaW5kIiwib25Gb2N1cyIsIm9uSW5wdXQiLCJzdGF0ZSIsImNoZWNrZWQiLCJoYXNTdGFydCIsImhhc0VuZCIsImZvY3VzZWQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwic3RhcnQiLCJzZXRTdGF0ZSIsImVuZCIsImV2ZW50IiwidGFyZ2V0IiwiZGlzYWJsZWQiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJ0eXBlIiwiaW52YWxpZCIsInN0ZXAiLCJhdXRvZm9jdXMiLCJtYXgiLCJtaW4iLCJtYXhsZW5ndGgiLCJtaW5sZW5ndGgiLCJwYXR0ZXJuIiwibXVsdGlwbGUiLCJtZXNzYWdlIiwiX2hhc0xhYmVsIiwidW5kZWZpbmVkIiwiX2hhc01lc3NhZ2VzIiwibGVuZ3RoIiwiX21vdmVkIiwiY29udGFpbmVyQ2xhc3NlcyIsImNvbnRhaW5lckNsYXNzIiwibGFiZWxDbGFzc2VzIiwiaW5wdXRDbGFzc2VzIiwiaW5wdXRDbGFzcyIsInN0eWxlcyIsImVsbSIsImludGVybmFsUmVmIiwiY3VycmVudCIsInJlbmRlclN0YXJ0Iiwib25DaGFuZ2UiLCJyZW5kZXJFbmQiLCJtYXAiLCJlbCIsIl9oYXNJY29uIiwiaWNvbiIsIl9oYXNDb250ZW50IiwiY29udGVudCIsIl9leGlzdCIsInN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwibWFuYWdlSW52YWxpZCIsIm1hbmFnZVZhbHVlIiwiY3JlYXRlUmVmIiwibm9vcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJudW1iZXIiLCJhcnJheU9mIiwic2hhcGUiLCJvbmVPZiIsIm9uZU9mVHlwZSIsImZ1bmMiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFNBQU0sSUFBTjtBQUFBLENBQWQ7O0FBQ0EsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU07QUFBQSxTQUFNLElBQU47QUFBQSxDQUFaOztJQUVNQyxLOzs7OztBQUNGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZQyxJQUFaLCtCQUFkO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUQsSUFBYiwrQkFBZjtBQUNBLFVBQUtFLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFGLElBQWIsK0JBQWY7QUFDQSxVQUFLRyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsT0FBTyxFQUFFLE1BQUtOLEtBQUwsQ0FBV00sT0FEWDtBQUVUQyxNQUFBQSxRQUFRLEVBQUUsS0FGRDtBQUdUQyxNQUFBQSxNQUFNLEVBQUUsS0FIQztBQUlUQyxNQUFBQSxPQUFPLEVBQUUsS0FKQTtBQUtUQyxNQUFBQSxLQUFLLEVBQUU7QUFMRSxLQUFiO0FBTGU7QUFZbEI7Ozs7V0FFRCx1QkFBYztBQUFBLFVBQ0hDLFFBREcsR0FDUyxLQUFLWCxLQURkLENBQ0hXLFFBREc7QUFFVixVQUFNQyxLQUFLLEdBQUcsNEJBQVdELFFBQVgsRUFBcUIsT0FBckIsQ0FBZDtBQUVBLFVBQUksQ0FBQ0MsS0FBTCxFQUFZLE9BQU8sSUFBUDtBQUVaLE9BQUMsS0FBS1AsS0FBTCxDQUFXRSxRQUFaLElBQXdCLEtBQUtNLFFBQUwsQ0FBYztBQUFDTixRQUFBQSxRQUFRLEVBQUU7QUFBWCxPQUFkLENBQXhCO0FBRUEsMEJBQU87QUFBSyxRQUFBLFNBQVMsRUFBQyxxQkFBZjtBQUFBLGtCQUFzQ0ssS0FBSyxDQUFDWixLQUFOLENBQVlXO0FBQWxELFFBQVA7QUFDSDs7O1dBRUQscUJBQVk7QUFBQSxVQUNEQSxRQURDLEdBQ1csS0FBS1gsS0FEaEIsQ0FDRFcsUUFEQztBQUVSLFVBQU1HLEdBQUcsR0FBRyw0QkFBV0gsUUFBWCxFQUFxQixLQUFyQixDQUFaO0FBRUEsVUFBSSxDQUFDRyxHQUFMLEVBQVUsT0FBTyxJQUFQO0FBRVYsT0FBQyxLQUFLVCxLQUFMLENBQVdHLE1BQVosSUFBc0IsS0FBS0ssUUFBTCxDQUFjO0FBQUNMLFFBQUFBLE1BQU0sRUFBRTtBQUFULE9BQWQsQ0FBdEI7QUFFQSwwQkFBTztBQUFLLFFBQUEsU0FBUyxFQUFDLG1CQUFmO0FBQUEsa0JBQW9DTSxHQUFHLENBQUNkLEtBQUosQ0FBVVc7QUFBOUMsUUFBUDtBQUNIOzs7V0FFRCxnQkFBT0ksS0FBUCxFQUFjO0FBQ1YsV0FBS0YsUUFBTCxDQUFjO0FBQUNKLFFBQUFBLE9BQU8sRUFBRTtBQUFWLE9BQWQ7QUFDQSxXQUFLVCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JjLEtBQWxCO0FBQ0g7OztXQUVELGlCQUFRQSxLQUFSLEVBQWU7QUFDWCxXQUFLRixRQUFMLENBQWM7QUFBQ0osUUFBQUEsT0FBTyxFQUFFO0FBQVYsT0FBZDtBQUNBLFdBQUtULEtBQUwsQ0FBV0csT0FBWCxDQUFtQlksS0FBbkI7QUFDSDs7O1dBRUQsaUJBQVFBLEtBQVIsRUFBZTtBQUNYLFdBQUtGLFFBQUwsQ0FBYztBQUFDSCxRQUFBQSxLQUFLLEVBQUVLLEtBQUssQ0FBQ0MsTUFBTixDQUFhTjtBQUFyQixPQUFkO0FBQ0EsV0FBS1YsS0FBTCxDQUFXSSxPQUFYLENBQW1CVyxLQUFuQjtBQUNIOzs7V0FFRCxrQkFBUztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLHdCQW9CRCxLQUFLZixLQXBCSjtBQUFBLFVBRURpQixRQUZDLGVBRURBLFFBRkM7QUFBQSxVQUdEQyxLQUhDLGVBR0RBLEtBSEM7QUFBQSx5Q0FJREMsSUFKQztBQUFBLFVBSURBLElBSkMsaUNBSU0sTUFKTjtBQUFBLFVBS0RDLFdBTEMsZUFLREEsV0FMQztBQUFBLFVBTURDLFFBTkMsZUFNREEsUUFOQztBQUFBLFVBT0RDLFFBUEMsZUFPREEsUUFQQztBQUFBLFVBUURDLElBUkMsZUFRREEsSUFSQztBQUFBLDBDQVNEYixLQVRDO0FBQUEsVUFTREEsS0FUQyxrQ0FTTyxLQUFLTCxLQUFMLENBQVdLLEtBVGxCO0FBQUEsVUFVRGMsT0FWQyxlQVVEQSxPQVZDO0FBQUEsVUFXREMsSUFYQyxlQVdEQSxJQVhDO0FBQUEsVUFZREMsU0FaQyxlQVlEQSxTQVpDO0FBQUEsVUFhREMsR0FiQyxlQWFEQSxHQWJDO0FBQUEsVUFjREMsR0FkQyxlQWNEQSxHQWRDO0FBQUEsVUFlREMsU0FmQyxlQWVEQSxTQWZDO0FBQUEsVUFnQkRDLFNBaEJDLGVBZ0JEQSxTQWhCQztBQUFBLFVBaUJEQyxPQWpCQyxlQWlCREEsT0FqQkM7QUFBQSxVQWtCREMsUUFsQkMsZUFrQkRBLFFBbEJDO0FBQUEsVUFtQkRDLE9BbkJDLGVBbUJEQSxPQW5CQzs7QUFzQkwsVUFBTUMsU0FBUyxHQUFHaEIsS0FBSyxLQUFLaUIsU0FBNUI7O0FBQ0EsVUFBTUMsWUFBWSxHQUFHSCxPQUFPLENBQUNJLE1BQVIsR0FBaUIsQ0FBdEM7O0FBQ0EsVUFBTUMsTUFBTSxHQUFHLEtBQUtqQyxLQUFMLENBQVdJLE9BQVgsSUFBc0JDLEtBQXRCLElBQStCLEtBQUtMLEtBQUwsQ0FBV0UsUUFBekQ7O0FBRUEsVUFBTWdDLGdCQUFnQixHQUFHO0FBQ3JCLHNCQUFjO0FBRE8sU0FFcEIsS0FBS3ZDLEtBQUwsQ0FBV3dDLGNBRlMsRUFFUSxJQUZSLEVBQXpCO0FBS0EsVUFBTUMsWUFBWSxHQUFHLDZCQUFXO0FBQzVCLHFCQUFhLElBRGU7QUFFNUIsbUJBQVdILE1BRmlCO0FBRzVCLG9DQUFhLEtBQUtqQyxLQUFsQixnREFBYSxZQUFZSTtBQUhHLE9BQVgsQ0FBckI7QUFNQSxVQUFNaUMsWUFBWSxHQUFHO0FBQ2pCLHdCQUFnQixJQURDO0FBRWpCLDJDQUFtQixLQUFLckMsS0FBeEIsaURBQW1CLGFBQVlFLFFBRmQ7QUFHakIseUNBQWlCLEtBQUtGLEtBQXRCLGlEQUFpQixhQUFZRztBQUhaLFNBSWhCLEtBQUtSLEtBQUwsQ0FBVzJDLFVBSkssRUFJUSxJQUpSLEVBQXJCO0FBT0EsMEJBQ0k7QUFBQSxnQ0FDSTtBQUFBLG9CQUFRQztBQUFSLFVBREosZUFFSTtBQUFLLFVBQUEsU0FBUyxFQUFFTCxnQkFBaEI7QUFBa0MsVUFBQSxHQUFHLEVBQUUsYUFBQU0sR0FBRztBQUFBLG1CQUFJLE1BQUksQ0FBQzdDLEtBQUwsQ0FBVzhDLFdBQVgsQ0FBdUJDLE9BQXZCLEdBQWlDRixHQUFyQztBQUFBLFdBQTFDO0FBQUEscUJBQ0tYLFNBQVMsaUJBQUk7QUFBTyxZQUFBLE9BQU8sRUFBQyxNQUFmO0FBQXNCLFlBQUEsU0FBUyxFQUFFTyxZQUFqQztBQUFBLHNCQUFnRHZCO0FBQWhELFlBRGxCLGVBRUk7QUFBSyxZQUFBLFNBQVMsRUFBQyxhQUFmO0FBQUEsdUJBQ0ssS0FBSzhCLFdBQUwsRUFETCxlQUVJO0FBQ0ksY0FBQSxTQUFTLEVBQUVOLFlBRGY7QUFFTyxjQUFBLEVBQUUsRUFBQyxNQUZWO0FBR08sY0FBQSxJQUFJLEVBQUV2QixJQUhiO0FBSU8sY0FBQSxXQUFXLEVBQUVDLFdBSnBCO0FBS08sY0FBQSxJQUFJLEVBQUVLLElBTGI7QUFNTyxjQUFBLElBQUksRUFBRUYsSUFOYjtBQU9PLCtCQUFlRCxRQVB0QjtBQVFPLDhCQUFjRSxPQVJyQjtBQVNPLGNBQUEsS0FBSyxFQUFFZCxLQVRkO0FBVU8sY0FBQSxRQUFRLEVBQUVXLFFBVmpCO0FBV08sY0FBQSxRQUFRLEVBQUVDLFFBWGpCO0FBWU8sY0FBQSxTQUFTLEVBQUVJLFNBWmxCO0FBYU8sY0FBQSxHQUFHLEVBQUVDLEdBYlo7QUFjTyxjQUFBLEdBQUcsRUFBRUMsR0FkWjtBQWVPLGNBQUEsU0FBUyxFQUFFQyxTQWZsQjtBQWdCTyxjQUFBLFNBQVMsRUFBRUMsU0FoQmxCO0FBaUJPLGNBQUEsT0FBTyxFQUFFQyxPQWpCaEI7QUFrQk8sY0FBQSxRQUFRLEVBQUVkLFFBbEJqQjtBQW1CTyxjQUFBLFFBQVEsRUFBRWUsUUFuQmpCO0FBb0JPLGNBQUEsT0FBTyxFQUFFLEtBQUs1QixPQXBCckI7QUFxQk8sY0FBQSxRQUFRLEVBQUUsS0FBS0osS0FBTCxDQUFXaUQsUUFyQjVCO0FBc0JPLGNBQUEsT0FBTyxFQUFFLGlCQUFDbEMsS0FBRCxFQUFXO0FBQ2hCLGdCQUFBLE1BQUksQ0FBQ1osT0FBTCxDQUFhWSxLQUFiO0FBQ0gsZUF4QlI7QUEwQk8sY0FBQSxNQUFNLEVBQUUsZ0JBQUNBLEtBQUQsRUFBVztBQUNmLGdCQUFBLE1BQUksQ0FBQ2QsTUFBTCxDQUFZYyxLQUFaO0FBQ0g7QUE1QlIsY0FGSixFQWdDSyxLQUFLbUMsU0FBTCxFQWhDTDtBQUFBLFlBRkosRUFvQ0tkLFlBQVksSUFDYkgsT0FBTyxDQUFDa0IsR0FBUixDQUFZLFVBQUNDLEVBQUQsRUFBUTtBQUNoQixnQkFBTUMsUUFBUSxHQUFHRCxFQUFFLENBQUNFLElBQUgsS0FBWW5CLFNBQVosSUFBeUJpQixFQUFFLENBQUNFLElBQUgsQ0FBUWpCLE1BQVIsR0FBaUIsQ0FBM0Q7O0FBQ0EsZ0JBQU1rQixXQUFXLEdBQUdILEVBQUUsQ0FBQ0ksT0FBSCxLQUFlckIsU0FBZixJQUE0QmlCLEVBQUUsQ0FBQ0ksT0FBSCxDQUFXbkIsTUFBWCxHQUFvQixDQUFwRTs7QUFFQSxnQkFBTW9CLE1BQU0sR0FBR0osUUFBUSxJQUFJRSxXQUEzQjs7QUFDQSxtQkFDSUUsTUFBTSxnQkFFRjtBQUFLLGNBQUEsU0FBUyxFQUFFLDZCQUFXTCxFQUFFLENBQUNNLE1BQWQsQ0FBaEI7QUFBQSx5QkFDS0wsUUFBUSxJQUFJLElBRGpCLENBRVE7QUFGUixnQkFJS0UsV0FBVyxpQkFDWjtBQUFBLDBCQUFPSCxFQUFFLENBQUNJO0FBQVYsZ0JBTEo7QUFBQSxjQUZFLEdBVUEsSUFYVjtBQWFILFdBbEJELENBckNKO0FBQUEsVUFGSjtBQUFBLFFBREo7QUErREg7Ozs7RUEvSmVHLEtBQUssQ0FBQ0MsUzs7QUFrSzFCN0QsS0FBSyxDQUFDRixLQUFOLEdBQWMsb0NBQW1CLE9BQW5CLENBQWQ7QUFDQUUsS0FBSyxDQUFDRCxHQUFOLEdBQVksb0NBQW1CLEtBQW5CLENBQVo7QUFFQUMsS0FBSyxDQUFDOEQsWUFBTixHQUFxQjtBQUNqQm5DLEVBQUFBLFNBQVMsRUFBRSxLQURNO0FBRWpCVCxFQUFBQSxRQUFRLEVBQUUsS0FGTztBQUdqQk8sRUFBQUEsT0FBTyxFQUFFLEtBSFE7QUFJakJzQyxFQUFBQSxhQUFhLEVBQUUsS0FKRTtBQUtqQkMsRUFBQUEsV0FBVyxFQUFFLEtBTEk7QUFNakI5QixFQUFBQSxPQUFPLEVBQUUsRUFOUTtBQU9qQkQsRUFBQUEsUUFBUSxFQUFFLEtBUE87QUFRakJYLEVBQUFBLFFBQVEsRUFBRSxLQVJPO0FBU2pCQyxFQUFBQSxRQUFRLEVBQUUsS0FUTztBQVVqQnFCLEVBQUFBLFVBQVUsRUFBRSxFQVZLO0FBV2pCSCxFQUFBQSxjQUFjLEVBQUUsRUFYQztBQVlqQmYsRUFBQUEsSUFBSSxFQUFFLEtBWlc7QUFhakJGLEVBQUFBLElBQUksRUFBRSxNQWJXO0FBY2pCdUIsRUFBQUEsV0FBVyxlQUFFYSxLQUFLLENBQUNLLFNBQU4sRUFkSTtBQWVqQjVELEVBQUFBLE9BQU8sRUFBRTZELFdBZlE7QUFnQmpCaEIsRUFBQUEsUUFBUSxFQUFFZ0IsV0FoQk87QUFpQmpCaEUsRUFBQUEsTUFBTSxFQUFFZ0UsV0FqQlM7QUFrQmpCOUQsRUFBQUEsT0FBTyxFQUFFOEQ7QUFsQlEsQ0FBckI7QUFxQkFsRSxLQUFLLENBQUNtRSxTQUFOLEdBQWtCO0FBQ2R4QyxFQUFBQSxTQUFTLEVBQUV5QyxzQkFBVUMsSUFEUDtBQUVkbkQsRUFBQUEsUUFBUSxFQUFFa0Qsc0JBQVVDLElBRk47QUFHZDVDLEVBQUFBLE9BQU8sRUFBRTJDLHNCQUFVQyxJQUhMO0FBSWRsRCxFQUFBQSxLQUFLLEVBQUVpRCxzQkFBVUUsTUFKSDtBQUtkUCxFQUFBQSxhQUFhLEVBQUVLLHNCQUFVQyxJQUxYO0FBTWRMLEVBQUFBLFdBQVcsRUFBRUksc0JBQVVDLElBTlQ7QUFPZHpDLEVBQUFBLEdBQUcsRUFBRXdDLHNCQUFVRyxNQVBEO0FBUWQxQyxFQUFBQSxHQUFHLEVBQUV1QyxzQkFBVUcsTUFSRDtBQVNkekMsRUFBQUEsU0FBUyxFQUFFc0Msc0JBQVVHLE1BVFA7QUFVZHhDLEVBQUFBLFNBQVMsRUFBRXFDLHNCQUFVRyxNQVZQO0FBV2RyQyxFQUFBQSxPQUFPLEVBQUVrQyxzQkFBVUksT0FBVixDQUFrQkosc0JBQVVLLEtBQVYsQ0FBZ0I7QUFDdkNkLElBQUFBLE1BQU0sRUFBRVMsc0JBQVVNLEtBQVYsQ0FBZ0IsQ0FBQyxVQUFELEVBQWEsU0FBYixFQUF3QixVQUF4QixFQUFvQyxNQUFwQyxFQUE0QyxZQUE1QyxDQUFoQixDQUQrQjtBQUV2Q2pCLElBQUFBLE9BQU8sRUFBRVcsc0JBQVVFLE1BRm9CO0FBR3ZDZixJQUFBQSxJQUFJLEVBQUVhLHNCQUFVRTtBQUh1QixHQUFoQixDQUFsQixDQVhLO0FBZ0JkckMsRUFBQUEsUUFBUSxFQUFFbUMsc0JBQVVDLElBaEJOO0FBaUJkakQsRUFBQUEsSUFBSSxFQUFFZ0Qsc0JBQVVFLE1BQVYsQ0FBaUIvQyxRQWpCVDtBQWtCZFMsRUFBQUEsT0FBTyxFQUFFb0Msc0JBQVVFLE1BbEJMO0FBbUJkakQsRUFBQUEsV0FBVyxFQUFFK0Msc0JBQVVFLE1BbkJUO0FBb0JkMUIsRUFBQUEsVUFBVSxFQUFFd0Isc0JBQVVFLE1BcEJSO0FBcUJkN0IsRUFBQUEsY0FBYyxFQUFFMkIsc0JBQVVFLE1BckJaO0FBc0JkaEQsRUFBQUEsUUFBUSxFQUFFOEMsc0JBQVVDLElBdEJOO0FBdUJkOUMsRUFBQUEsUUFBUSxFQUFFNkMsc0JBQVVDLElBdkJOO0FBd0JkM0MsRUFBQUEsSUFBSSxFQUFFMEMsc0JBQVVPLFNBQVYsQ0FBb0IsQ0FDdEJQLHNCQUFVRyxNQURZLEVBRXRCSCxzQkFBVU0sS0FBVixDQUFnQixLQUFoQixDQUZzQixDQUFwQixDQXhCUTtBQTRCZGxELEVBQUFBLElBQUksRUFBRTRDLHNCQUFVTSxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsT0FBckIsRUFBOEIsUUFBOUIsRUFBd0MsS0FBeEMsRUFBK0MsS0FBL0MsRUFBc0QsUUFBdEQsRUFBZ0UsTUFBaEUsRUFBd0UsVUFBeEUsRUFBb0YsZ0JBQXBGLEVBQXNHLE9BQXRHLEVBQStHLE1BQS9HLEVBQXVILE1BQXZILENBQWhCLENBNUJRO0FBNkJkL0QsRUFBQUEsS0FBSyxFQUFFeUQsc0JBQVVFLE1BN0JIO0FBOEJkakUsRUFBQUEsT0FBTyxFQUFFK0Qsc0JBQVVRLElBOUJMO0FBK0JkMUIsRUFBQUEsUUFBUSxFQUFFa0Isc0JBQVVRLElBL0JOO0FBZ0NkeEUsRUFBQUEsT0FBTyxFQUFFZ0Usc0JBQVVRLElBaENMO0FBaUNkMUUsRUFBQUEsTUFBTSxFQUFFa0Usc0JBQVVRLElBakNKO0FBa0NkN0IsRUFBQUEsV0FBVyxFQUFFcUIsc0JBQVVTO0FBbENULENBQWxCO2VBcUNlN0UsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGZpbmRCeVR5cGUsIHtjcmVhdGVTdWJDb21wb25lbnR9IGZyb20gXCIuLi91dGlscy9maW5kQnlUeXBlXCI7XHJcbmltcG9ydCB7bm9vcH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5jb25zdCBTdGFydCA9ICgpID0+IG51bGw7XHJcbmNvbnN0IEVuZCA9ICgpID0+IG51bGw7XHJcblxyXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25JbnB1dCA9IHRoaXMub25JbnB1dC5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkLFxyXG4gICAgICAgICAgICBoYXNTdGFydDogZmFsc2UsXHJcbiAgICAgICAgICAgIGhhc0VuZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyU3RhcnQoKSB7XHJcbiAgICAgICAgY29uc3Qge2NoaWxkcmVufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBcIlN0YXJ0XCIpO1xyXG5cclxuICAgICAgICBpZiAoIXN0YXJ0KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgIXRoaXMuc3RhdGUuaGFzU3RhcnQgJiYgdGhpcy5zZXRTdGF0ZSh7aGFzU3RhcnQ6IHRydWV9KVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtLXN0YXJ0XCI+e3N0YXJ0LnByb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckVuZCgpIHtcclxuICAgICAgICBjb25zdCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBlbmQgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBcIkVuZFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbmQpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAhdGhpcy5zdGF0ZS5oYXNFbmQgJiYgdGhpcy5zZXRTdGF0ZSh7aGFzRW5kOiB0cnVlfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLS1lbmRcIj57ZW5kLnByb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIG9uQmx1cihldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IGZhbHNlfSlcclxuICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Gb2N1cyhldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IHRydWV9KVxyXG4gICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnB1dChldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbklucHV0KGV2ZW50KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgbmFtZSA9IFwibmFtZVwiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgcmVhZG9ubHksXHJcbiAgICAgICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUsXHJcbiAgICAgICAgICAgIGludmFsaWQsXHJcbiAgICAgICAgICAgIHN0ZXAsXHJcbiAgICAgICAgICAgIGF1dG9mb2N1cyxcclxuICAgICAgICAgICAgbWF4LFxyXG4gICAgICAgICAgICBtaW4sXHJcbiAgICAgICAgICAgIG1heGxlbmd0aCxcclxuICAgICAgICAgICAgbWlubGVuZ3RoLFxyXG4gICAgICAgICAgICBwYXR0ZXJuLFxyXG4gICAgICAgICAgICBtdWx0aXBsZSxcclxuICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBfaGFzTGFiZWwgPSBsYWJlbCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGNvbnN0IF9oYXNNZXNzYWdlcyA9IG1lc3NhZ2UubGVuZ3RoID4gMDtcclxuICAgICAgICBjb25zdCBfbW92ZWQgPSB0aGlzLnN0YXRlLmZvY3VzZWQgfHwgdmFsdWUgfHwgdGhpcy5zdGF0ZS5oYXNTdGFydDtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyQ2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICBcImZvcm0tZ3JvdXBcIjogdHJ1ZSxcclxuICAgICAgICAgICAgW3RoaXMucHJvcHMuY29udGFpbmVyQ2xhc3NdOiB0cnVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgbGFiZWxDbGFzc2VzID0gY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgIFwiaW5wLWxhYmVsXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiLS1tb3ZlZFwiOiBfbW92ZWQsXHJcbiAgICAgICAgICAgIFwiLS1mb2N1c2VkXCI6IHRoaXMuc3RhdGU/LmZvY3VzZWRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRDbGFzc2VzID0gY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgIFwiZm9ybS1jb250cm9sXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwibm8tc3RhcnQtYm9yZGVyXCI6IHRoaXMuc3RhdGU/Lmhhc1N0YXJ0LFxyXG4gICAgICAgICAgICBcIm5vLWVuZC1ib3JkZXJcIjogdGhpcy5zdGF0ZT8uaGFzRW5kLFxyXG4gICAgICAgICAgICBbdGhpcy5wcm9wcy5pbnB1dENsYXNzXTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGU+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzZXN9IHJlZj17ZWxtID0+IHRoaXMucHJvcHMuaW50ZXJuYWxSZWYuY3VycmVudCA9IGVsbX0+XHJcbiAgICAgICAgICAgICAgICAgICAge19oYXNMYWJlbCAmJiA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9e2xhYmVsQ2xhc3Nlc30+e2xhYmVsfTwvbGFiZWw+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU3RhcnQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0Q2xhc3Nlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17c3RlcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17aW52YWxpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17YXV0b2ZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXttYXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49e21pbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17bWF4bGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPXttaW5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPXtwYXR0ZXJufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU9e211bHRpcGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5vbklucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRm9jdXMoZXZlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25CbHVyKGV2ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRW5kKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge19oYXNNZXNzYWdlcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubWFwKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfaGFzSWNvbiA9IGVsLmljb24gIT09IHVuZGVmaW5lZCAmJiBlbC5pY29uLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9oYXNDb250ZW50ID0gZWwuY29udGVudCAhPT0gdW5kZWZpbmVkICYmIGVsLmNvbnRlbnQubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9leGlzdCA9IF9oYXNJY29uIHx8IF9oYXNDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2V4aXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGVsLnN0YXR1cyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X2hhc0ljb24gJiYgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy88eC1tb2JpLXN3Zi1pY29uIGljb249e2VsLmljb259IHNpemU9XCJzbVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X2hhc0NvbnRlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VsLmNvbnRlbnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbklucHV0LlN0YXJ0ID0gY3JlYXRlU3ViQ29tcG9uZW50KFwiU3RhcnRcIik7XHJcbklucHV0LkVuZCA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkVuZFwiKTtcclxuXHJcbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGF1dG9mb2N1czogZmFsc2UsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBpbnZhbGlkOiBmYWxzZSxcclxuICAgIG1hbmFnZUludmFsaWQ6IGZhbHNlLFxyXG4gICAgbWFuYWdlVmFsdWU6IGZhbHNlLFxyXG4gICAgbWVzc2FnZTogW10sXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICByZWFkb25seTogZmFsc2UsXHJcbiAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICBpbnB1dENsYXNzOiBcIlwiLFxyXG4gICAgY29udGFpbmVyQ2xhc3M6IFwiXCIsXHJcbiAgICBzdGVwOiBcImFueVwiLFxyXG4gICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICBpbnRlcm5hbFJlZjogUmVhY3QuY3JlYXRlUmVmKCksXHJcbiAgICBvbklucHV0OiBub29wLFxyXG4gICAgb25DaGFuZ2U6IG5vb3AsXHJcbiAgICBvbkJsdXI6IG5vb3AsXHJcbiAgICBvbkZvY3VzOiBub29wXHJcbn1cclxuXHJcbklucHV0LnByb3BUeXBlcyA9IHtcclxuICAgIGF1dG9mb2N1czogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbWFuYWdlSW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VWYWx1ZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYXg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtaW46IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtYXhsZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtaW5sZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtZXNzYWdlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHN0YXR1czogUHJvcFR5cGVzLm9uZU9mKFtcImNyaXRpY2FsXCIsIFwid2FybmluZ1wiLCBcInBvc2l0aXZlXCIsIFwiaW5mb1wiLCBcInN1Z2dlc3Rpb25cIl0pLFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfSkpLFxyXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5yZXF1aXJlZCxcclxuICAgIHBhdHRlcm46IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGlucHV0Q2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjb250YWluZXJDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHJlYWRvbmx5OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHN0ZXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgUHJvcFR5cGVzLm9uZU9mW1wiYW55XCJdXHJcbiAgICBdKSxcclxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJ0ZXh0XCIsIFwicGFzc3dvcmRcIiwgXCJlbWFpbFwiLCBcIm51bWJlclwiLCBcInVybFwiLCBcInRlbFwiLCBcInNlYXJjaFwiLCBcImRhdGVcIiwgXCJkYXRldGltZVwiLCBcImRhdGV0aW1lLWxvY2FsXCIsIFwibW9udGhcIiwgXCJ3ZWVrXCIsIFwidGltZVwiXSksXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uSW5wdXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgaW50ZXJuYWxSZWY6IFByb3BUeXBlcy5lbGVtZW50XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0OyJdfQ==