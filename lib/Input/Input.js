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

var _InfoMessage = _interopRequireDefault(require("../InfoMessage/InfoMessage"));

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
      value: _this.props.value
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
          manageInvalid = _this$props2.manageInvalid,
          value = _this$props2.value;
      if (prevProps.value !== value || value !== this.state.value) this.setState({
        value: value
      });
      if (manageInvalid && this.state.invalid !== invalid) this.setState({
        invalid: invalid
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      this.setState({
        value: nextProps.value
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
          _this$state9,
          _this$state10,
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
          message = _this$props3.message,
          className = _this$props3.className;

      var _hasLabel = label !== undefined;

      var _hasMessages = message.length > 0;

      var _moved = this.state.focused || value || this.state.hasStart;

      var containerClasses = (0, _classnames3["default"])(className, _defineProperty({
        "swf-form-group": true,
        "--invalid": (_this$state3 = this.state) === null || _this$state3 === void 0 ? void 0 : _this$state3.invalid,
        "--readonly": this.props.readonly
      }, this.props.containerClass, true));
      var labelClasses = (0, _classnames3["default"])({
        "inp-label": true,
        "--moved": _moved,
        "--focused": (_this$state4 = this.state) === null || _this$state4 === void 0 ? void 0 : _this$state4.focused,
        "--invalid": (_this$state5 = this.state) === null || _this$state5 === void 0 ? void 0 : _this$state5.invalid,
        "--readonly": this.props.readonly
      });
      var requiredClasses = (0, _classnames3["default"])({
        "inp-required": true,
        "--focused": (_this$state6 = this.state) === null || _this$state6 === void 0 ? void 0 : _this$state6.focused,
        "--invalid": (_this$state7 = this.state) === null || _this$state7 === void 0 ? void 0 : _this$state7.invalid
      });
      var inputClasses = (0, _classnames3["default"])(_defineProperty({
        "form-control": true,
        "no-start-border": (_this$state8 = this.state) === null || _this$state8 === void 0 ? void 0 : _this$state8.hasStart,
        "no-end-border": (_this$state9 = this.state) === null || _this$state9 === void 0 ? void 0 : _this$state9.hasEnd,
        "--invalid": (_this$state10 = this.state) === null || _this$state10 === void 0 ? void 0 : _this$state10.invalid,
        "--readonly": this.props.readonly
      }, this.props.inputClass, true));
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: containerClasses,
          ref: function ref(elm) {
            return _this2.props.internalRef.current = elm;
          },
          children: [_hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: labelClasses,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              htmlFor: "name",
              children: label
            }), required && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
              icon: 'asterisk',
              className: requiredClasses,
              customSize: 7
            })]
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
              value: this.state.value,
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
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_InfoMessage["default"], {
              iconSize: el.iconSize,
              className: el.className,
              content: el.content,
              icon: el.icon,
              status: el.status
            });
          })]
        })
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      return {
        value: nextProps.value
      };
    }
  }]);

  return Input;
}(React.Component);

;
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
  onInvalid: _utils.noop,
  className: {}
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
    icon: _propTypes["default"].string,
    className: _propTypes["default"].object,
    iconSize: _propTypes["default"].number
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
  })]),
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
};
var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJTdGFydCIsIkVuZCIsIklucHV0IiwicHJvcHMiLCJvbkJsdXIiLCJiaW5kIiwib25Gb2N1cyIsIm9uSW5wdXQiLCJvbkludmFsaWQiLCJzdGF0ZSIsImNoZWNrZWQiLCJpbnZhbGlkIiwiaGFzU3RhcnQiLCJoYXNFbmQiLCJmb2N1c2VkIiwidmFsdWUiLCJjaGlsZHJlbiIsInN0YXJ0IiwiY2xhc3NlcyIsImxlbmd0aCIsInNldFN0YXRlIiwiZW5kIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibWFuYWdlSW52YWxpZCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwibmV4dFByb3BzIiwibmV4dENvbnRleHQiLCJkaXNhYmxlZCIsImxhYmVsIiwibmFtZSIsInBsYWNlaG9sZGVyIiwicmVhZG9ubHkiLCJyZXF1aXJlZCIsInR5cGUiLCJzdGVwIiwiYXV0b2ZvY3VzIiwibWF4IiwibWluIiwibWF4bGVuZ3RoIiwibWlubGVuZ3RoIiwicGF0dGVybiIsIm11bHRpcGxlIiwibWVzc2FnZSIsImNsYXNzTmFtZSIsIl9oYXNMYWJlbCIsInVuZGVmaW5lZCIsIl9oYXNNZXNzYWdlcyIsIl9tb3ZlZCIsImNvbnRhaW5lckNsYXNzZXMiLCJjb250YWluZXJDbGFzcyIsImxhYmVsQ2xhc3NlcyIsInJlcXVpcmVkQ2xhc3NlcyIsImlucHV0Q2xhc3NlcyIsImlucHV0Q2xhc3MiLCJlbG0iLCJpbnRlcm5hbFJlZiIsImN1cnJlbnQiLCJyZW5kZXJTdGFydCIsIm9uQ2hhbmdlIiwicmVuZGVyRW5kIiwibWFwIiwiZWwiLCJpY29uU2l6ZSIsImNvbnRlbnQiLCJpY29uIiwic3RhdHVzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJtYW5hZ2VWYWx1ZSIsImNyZWF0ZVJlZiIsIm5vb3AiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwibnVtYmVyIiwiYXJyYXlPZiIsInNoYXBlIiwib25lT2YiLCJvYmplY3QiLCJvbmVPZlR5cGUiLCJmdW5jIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFNBQU0sSUFBTjtBQUFBLENBQWQ7O0FBQ0EsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU07QUFBQSxTQUFNLElBQU47QUFBQSxDQUFaOztJQUVNQyxLOzs7OztBQUNGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZQyxJQUFaLCtCQUFkO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUQsSUFBYiwrQkFBZjtBQUNBLFVBQUtFLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFGLElBQWIsK0JBQWY7QUFDQSxVQUFLRyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUgsSUFBZiwrQkFBakI7QUFFQSxVQUFLSSxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsT0FBTyxFQUFFLE1BQUtQLEtBQUwsQ0FBV08sT0FEWDtBQUVUQyxNQUFBQSxPQUFPLEVBQUUsTUFBS1IsS0FBTCxDQUFXUSxPQUZYO0FBR1RDLE1BQUFBLFFBQVEsRUFBRSxLQUhEO0FBSVRDLE1BQUFBLE1BQU0sRUFBRSxLQUpDO0FBS1RDLE1BQUFBLE9BQU8sRUFBRSxLQUxBO0FBTVRDLE1BQUFBLEtBQUssRUFBRSxNQUFLWixLQUFMLENBQVdZO0FBTlQsS0FBYjtBQVBlO0FBZWxCOzs7O1dBRUQsdUJBQWM7QUFBQTs7QUFBQSxVQUNIQyxRQURHLEdBQ1MsS0FBS2IsS0FEZCxDQUNIYSxRQURHO0FBRVYsVUFBTUMsS0FBSyxHQUFHLDRCQUFXRCxRQUFYLEVBQXFCLE9BQXJCLENBQWQ7QUFDQSxVQUFNRSxPQUFPLEdBQUcsNkJBQVc7QUFDdkIsK0JBQXVCLElBREE7QUFFdkIsb0NBQWEsS0FBS1QsS0FBbEIsZ0RBQWEsWUFBWUU7QUFGRixPQUFYLENBQWhCO0FBS0EsVUFBSSxDQUFDTSxLQUFELElBQVVBLEtBQUssQ0FBQ0UsTUFBTixHQUFhLENBQTNCLEVBQThCLE9BQU8sSUFBUDtBQUU5QixPQUFDLEtBQUtWLEtBQUwsQ0FBV0csUUFBWixJQUF3QixLQUFLUSxRQUFMLENBQWM7QUFBQ1IsUUFBQUEsUUFBUSxFQUFFO0FBQVgsT0FBZCxDQUF4QjtBQUVBLDBCQUFPO0FBQUssUUFBQSxTQUFTLEVBQUVNLE9BQWhCO0FBQUEsa0JBQTBCRDtBQUExQixRQUFQO0FBQ0g7OztXQUVELHFCQUFZO0FBQUE7O0FBQUEsVUFDREQsUUFEQyxHQUNXLEtBQUtiLEtBRGhCLENBQ0RhLFFBREM7QUFFUixVQUFNSyxHQUFHLEdBQUcsNEJBQVdMLFFBQVgsRUFBcUIsS0FBckIsQ0FBWjtBQUNBLFVBQU1FLE9BQU8sR0FBRyw2QkFBVztBQUN2Qiw2QkFBcUIsSUFERTtBQUV2QixxQ0FBYSxLQUFLVCxLQUFsQixpREFBYSxhQUFZRTtBQUZGLE9BQVgsQ0FBaEI7QUFLQSxVQUFJLENBQUNVLEdBQUQsSUFBUUEsR0FBRyxDQUFDRixNQUFKLEdBQVcsQ0FBdkIsRUFBMEIsT0FBTyxJQUFQO0FBRTFCLE9BQUMsS0FBS1YsS0FBTCxDQUFXSSxNQUFaLElBQXNCLEtBQUtPLFFBQUwsQ0FBYztBQUFDUCxRQUFBQSxNQUFNLEVBQUU7QUFBVCxPQUFkLENBQXRCO0FBRUEsMEJBQU87QUFBSyxRQUFBLFNBQVMsRUFBRUssT0FBaEI7QUFBQSxrQkFBMEJHO0FBQTFCLFFBQVA7QUFDSDs7O1dBRUQsZ0JBQU9DLEtBQVAsRUFBYztBQUNWLFdBQUtGLFFBQUwsQ0FBYztBQUFDTixRQUFBQSxPQUFPLEVBQUU7QUFBVixPQUFkO0FBQ0EsV0FBS1gsS0FBTCxDQUFXQyxNQUFYLENBQWtCa0IsS0FBbEI7QUFDSDs7O1dBRUQsaUJBQVFBLEtBQVIsRUFBZTtBQUNYLFdBQUtGLFFBQUwsQ0FBYztBQUFDTixRQUFBQSxPQUFPLEVBQUU7QUFBVixPQUFkO0FBQ0EsV0FBS1gsS0FBTCxDQUFXRyxPQUFYLENBQW1CZ0IsS0FBbkI7QUFDSDs7O1dBRUQsaUJBQVFBLEtBQVIsRUFBZTtBQUNYLFdBQUtGLFFBQUwsQ0FBYztBQUFDTCxRQUFBQSxLQUFLLEVBQUVPLEtBQUssQ0FBQ0MsTUFBTixDQUFhUjtBQUFyQixPQUFkO0FBQ0EsV0FBS1osS0FBTCxDQUFXSSxPQUFYLENBQW1CZSxLQUFuQjtBQUNIOzs7V0FFRCxtQkFBVUUsQ0FBVixFQUFZO0FBQUEsd0JBQzJCLEtBQUtyQixLQURoQztBQUFBLFVBQ0RzQixhQURDLGVBQ0RBLGFBREM7QUFBQSxVQUNjakIsU0FEZCxlQUNjQSxTQURkO0FBR1IsVUFBRyxDQUFDaUIsYUFBSixFQUNJLEtBQUtMLFFBQUwsQ0FBYztBQUFDVCxRQUFBQSxPQUFPLEVBQUU7QUFBVixPQUFkO0FBQ0pILE1BQUFBLFNBQVMsQ0FBQ2dCLENBQUQsQ0FBVDtBQUNIOzs7V0FFRCw0QkFBbUJFLFNBQW5CLEVBQThCQyxTQUE5QixFQUF5Q0MsUUFBekMsRUFBbUQ7QUFBQSx5QkFDUCxLQUFLekIsS0FERTtBQUFBLFVBQ3hDUSxPQUR3QyxnQkFDeENBLE9BRHdDO0FBQUEsVUFDL0JjLGFBRCtCLGdCQUMvQkEsYUFEK0I7QUFBQSxVQUNoQlYsS0FEZ0IsZ0JBQ2hCQSxLQURnQjtBQUcvQyxVQUFHVyxTQUFTLENBQUNYLEtBQVYsS0FBa0JBLEtBQWxCLElBQTJCQSxLQUFLLEtBQUcsS0FBS04sS0FBTCxDQUFXTSxLQUFqRCxFQUNJLEtBQUtLLFFBQUwsQ0FBYztBQUFDTCxRQUFBQSxLQUFLLEVBQUVBO0FBQVIsT0FBZDtBQUVKLFVBQUdVLGFBQWEsSUFBSSxLQUFLaEIsS0FBTCxDQUFXRSxPQUFYLEtBQXVCQSxPQUEzQyxFQUNJLEtBQUtTLFFBQUwsQ0FBYztBQUFDVCxRQUFBQSxPQUFPLEVBQUVBO0FBQVYsT0FBZDtBQUNQOzs7V0FRRCxtQ0FBMEJrQixTQUExQixFQUFxQ0MsV0FBckMsRUFBa0Q7QUFDOUMsV0FBS1YsUUFBTCxDQUFjO0FBQ1ZMLFFBQUFBLEtBQUssRUFBRWMsU0FBUyxDQUFDZDtBQURQLE9BQWQ7QUFHSDs7O1dBSUQsa0JBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEseUJBcUJELEtBQUtaLEtBckJKO0FBQUEsVUFFRDRCLFFBRkMsZ0JBRURBLFFBRkM7QUFBQSxVQUdEQyxLQUhDLGdCQUdEQSxLQUhDO0FBQUEsMkNBSURDLElBSkM7QUFBQSxVQUlEQSxJQUpDLGtDQUlNLE1BSk47QUFBQSxVQUtEQyxXQUxDLGdCQUtEQSxXQUxDO0FBQUEsVUFNREMsUUFOQyxnQkFNREEsUUFOQztBQUFBLFVBT0RDLFFBUEMsZ0JBT0RBLFFBUEM7QUFBQSxVQVFEQyxJQVJDLGdCQVFEQSxJQVJDO0FBQUEsNENBU0R0QixLQVRDO0FBQUEsVUFTREEsS0FUQyxtQ0FTTyxLQUFLTixLQUFMLENBQVdNLEtBVGxCO0FBQUEsVUFVREosT0FWQyxnQkFVREEsT0FWQztBQUFBLFVBV0QyQixJQVhDLGdCQVdEQSxJQVhDO0FBQUEsVUFZREMsU0FaQyxnQkFZREEsU0FaQztBQUFBLFVBYURDLEdBYkMsZ0JBYURBLEdBYkM7QUFBQSxVQWNEQyxHQWRDLGdCQWNEQSxHQWRDO0FBQUEsVUFlREMsU0FmQyxnQkFlREEsU0FmQztBQUFBLFVBZ0JEQyxTQWhCQyxnQkFnQkRBLFNBaEJDO0FBQUEsVUFpQkRDLE9BakJDLGdCQWlCREEsT0FqQkM7QUFBQSxVQWtCREMsUUFsQkMsZ0JBa0JEQSxRQWxCQztBQUFBLFVBbUJEQyxPQW5CQyxnQkFtQkRBLE9BbkJDO0FBQUEsVUFvQkRDLFNBcEJDLGdCQW9CREEsU0FwQkM7O0FBdUJMLFVBQU1DLFNBQVMsR0FBR2hCLEtBQUssS0FBS2lCLFNBQTVCOztBQUNBLFVBQU1DLFlBQVksR0FBR0osT0FBTyxDQUFDM0IsTUFBUixHQUFpQixDQUF0Qzs7QUFDQSxVQUFNZ0MsTUFBTSxHQUFHLEtBQUsxQyxLQUFMLENBQVdLLE9BQVgsSUFBc0JDLEtBQXRCLElBQStCLEtBQUtOLEtBQUwsQ0FBV0csUUFBekQ7O0FBRUEsVUFBTXdDLGdCQUFnQixHQUFHLDZCQUFZTCxTQUFaO0FBQ3JCLDBCQUFrQixJQURHO0FBRXJCLHFDQUFhLEtBQUt0QyxLQUFsQixpREFBYSxhQUFZRSxPQUZKO0FBR3JCLHNCQUFjLEtBQUtSLEtBQUwsQ0FBV2dDO0FBSEosU0FJcEIsS0FBS2hDLEtBQUwsQ0FBV2tELGNBSlMsRUFJUSxJQUpSLEVBQXpCO0FBT0EsVUFBTUMsWUFBWSxHQUFHLDZCQUFXO0FBQzVCLHFCQUFhLElBRGU7QUFFNUIsbUJBQVdILE1BRmlCO0FBRzVCLHFDQUFhLEtBQUsxQyxLQUFsQixpREFBYSxhQUFZSyxPQUhHO0FBSTVCLHFDQUFhLEtBQUtMLEtBQWxCLGlEQUFhLGFBQVlFLE9BSkc7QUFLNUIsc0JBQWMsS0FBS1IsS0FBTCxDQUFXZ0M7QUFMRyxPQUFYLENBQXJCO0FBUUEsVUFBTW9CLGVBQWUsR0FBRyw2QkFBVztBQUMvQix3QkFBZ0IsSUFEZTtBQUUvQixxQ0FBYSxLQUFLOUMsS0FBbEIsaURBQWEsYUFBWUssT0FGTTtBQUcvQixxQ0FBYSxLQUFLTCxLQUFsQixpREFBYSxhQUFZRTtBQUhNLE9BQVgsQ0FBeEI7QUFNQSxVQUFNNkMsWUFBWSxHQUFHO0FBQ2pCLHdCQUFnQixJQURDO0FBRWpCLDJDQUFtQixLQUFLL0MsS0FBeEIsaURBQW1CLGFBQVlHLFFBRmQ7QUFHakIseUNBQWlCLEtBQUtILEtBQXRCLGlEQUFpQixhQUFZSSxNQUhaO0FBSWpCLHNDQUFhLEtBQUtKLEtBQWxCLGtEQUFhLGNBQVlFLE9BSlI7QUFLakIsc0JBQWMsS0FBS1IsS0FBTCxDQUFXZ0M7QUFMUixTQU1oQixLQUFLaEMsS0FBTCxDQUFXc0QsVUFOSyxFQU1RLElBTlIsRUFBckI7QUFTQSwwQkFDSTtBQUFBLCtCQUNJO0FBQUssVUFBQSxTQUFTLEVBQUVMLGdCQUFoQjtBQUFrQyxVQUFBLEdBQUcsRUFBRSxhQUFBTSxHQUFHO0FBQUEsbUJBQUksTUFBSSxDQUFDdkQsS0FBTCxDQUFXd0QsV0FBWCxDQUF1QkMsT0FBdkIsR0FBaUNGLEdBQXJDO0FBQUEsV0FBMUM7QUFBQSxxQkFFS1YsU0FBUyxpQkFDTjtBQUFNLFlBQUEsU0FBUyxFQUFFTSxZQUFqQjtBQUFBLG9DQUNJO0FBQU8sY0FBQSxPQUFPLEVBQUMsTUFBZjtBQUFBLHdCQUF1QnRCO0FBQXZCLGNBREosRUFFTUksUUFBUSxpQkFBSSxxQkFBQyxnQkFBRDtBQUFNLGNBQUEsSUFBSSxFQUFFLFVBQVo7QUFBd0IsY0FBQSxTQUFTLEVBQUVtQixlQUFuQztBQUFvRCxjQUFBLFVBQVUsRUFBRTtBQUFoRSxjQUZsQjtBQUFBLFlBSFIsZUFRSTtBQUFLLFlBQUEsU0FBUyxFQUFDLGFBQWY7QUFBQSx1QkFDSyxLQUFLTSxXQUFMLEVBREwsZUFFSTtBQUNJLGNBQUEsU0FBUyxFQUFFTCxZQURmO0FBRUksY0FBQSxFQUFFLEVBQUMsTUFGUDtBQUdJLGNBQUEsSUFBSSxFQUFFdkIsSUFIVjtBQUlJLGNBQUEsV0FBVyxFQUFFQyxXQUpqQjtBQUtJLGNBQUEsSUFBSSxFQUFFSSxJQUxWO0FBTUksY0FBQSxJQUFJLEVBQUVELElBTlY7QUFPSSwrQkFBZUQsUUFQbkI7QUFRSSw4QkFBY3pCLE9BUmxCO0FBU0ksY0FBQSxLQUFLLEVBQUUsS0FBS0YsS0FBTCxDQUFXTSxLQVR0QjtBQVVJLGNBQUEsUUFBUSxFQUFFb0IsUUFWZDtBQVdJLGNBQUEsUUFBUSxFQUFFQyxRQVhkO0FBWUksY0FBQSxTQUFTLEVBQUVHLFNBWmY7QUFhSSxjQUFBLEdBQUcsRUFBRUMsR0FiVDtBQWNJLGNBQUEsR0FBRyxFQUFFQyxHQWRUO0FBZUksY0FBQSxTQUFTLEVBQUVDLFNBZmY7QUFnQkksY0FBQSxTQUFTLEVBQUVDLFNBaEJmO0FBaUJJLGNBQUEsT0FBTyxFQUFFQyxPQWpCYjtBQWtCSSxjQUFBLFFBQVEsRUFBRWIsUUFsQmQ7QUFtQkksY0FBQSxRQUFRLEVBQUVjLFFBbkJkO0FBb0JJLGNBQUEsT0FBTyxFQUFFLEtBQUt0QyxPQXBCbEI7QUFxQkksY0FBQSxRQUFRLEVBQUUsS0FBS0osS0FBTCxDQUFXMkQsUUFyQnpCO0FBc0JJLGNBQUEsT0FBTyxFQUFFLGlCQUFDeEMsS0FBRCxFQUFXO0FBQ2IsZ0JBQUEsTUFBSSxDQUFDaEIsT0FBTCxDQUFhZ0IsS0FBYjtBQUNILGVBeEJSO0FBeUJJLGNBQUEsTUFBTSxFQUFFLGdCQUFDQSxLQUFELEVBQVc7QUFDWixnQkFBQSxNQUFJLENBQUNsQixNQUFMLENBQVlrQixLQUFaO0FBQ0gsZUEzQlI7QUE0QkksY0FBQSxTQUFTLEVBQUUsbUJBQUNFLENBQUQ7QUFBQSx1QkFBTyxNQUFJLENBQUNoQixTQUFMLENBQWVnQixDQUFmLENBQVA7QUFBQTtBQTVCZixjQUZKLEVBZ0NLLEtBQUt1QyxTQUFMLEVBaENMO0FBQUEsWUFSSixFQTBDS2IsWUFBWSxJQUNUSixPQUFPLENBQUNrQixHQUFSLENBQVksVUFBQ0MsRUFBRCxFQUFRO0FBQ2hCLGdDQUFPLHFCQUFDLHVCQUFEO0FBQ0gsY0FBQSxRQUFRLEVBQUVBLEVBQUUsQ0FBQ0MsUUFEVjtBQUVILGNBQUEsU0FBUyxFQUFFRCxFQUFFLENBQUNsQixTQUZYO0FBR0gsY0FBQSxPQUFPLEVBQUVrQixFQUFFLENBQUNFLE9BSFQ7QUFJSCxjQUFBLElBQUksRUFBRUYsRUFBRSxDQUFDRyxJQUpOO0FBS0gsY0FBQSxNQUFNLEVBQUVILEVBQUUsQ0FBQ0k7QUFMUixjQUFQO0FBT0gsV0FSRCxDQTNDUjtBQUFBO0FBREosUUFESjtBQTBESDs7O1dBaklELGtDQUFpQ3hDLFNBQWpDLEVBQTRDO0FBQ3hDLGFBQU87QUFDSGQsUUFBQUEsS0FBSyxFQUFFYyxTQUFTLENBQUNkO0FBRGQsT0FBUDtBQUdIOzs7O0VBckZldUQsS0FBSyxDQUFDQyxTOztBQW1OekI7QUFFRHJFLEtBQUssQ0FBQ0YsS0FBTixHQUFjLG9DQUFtQixPQUFuQixDQUFkO0FBQ0FFLEtBQUssQ0FBQ0QsR0FBTixHQUFZLG9DQUFtQixLQUFuQixDQUFaO0FBRUFDLEtBQUssQ0FBQ3NFLFlBQU4sR0FBcUI7QUFDakJqQyxFQUFBQSxTQUFTLEVBQUUsS0FETTtBQUVqQlIsRUFBQUEsUUFBUSxFQUFFLEtBRk87QUFHakJwQixFQUFBQSxPQUFPLEVBQUUsS0FIUTtBQUlqQmMsRUFBQUEsYUFBYSxFQUFFLEtBSkU7QUFLakJnRCxFQUFBQSxXQUFXLEVBQUUsS0FMSTtBQU1qQjNCLEVBQUFBLE9BQU8sRUFBRSxFQU5RO0FBT2pCRCxFQUFBQSxRQUFRLEVBQUUsS0FQTztBQVFqQlYsRUFBQUEsUUFBUSxFQUFFLEtBUk87QUFTakJDLEVBQUFBLFFBQVEsRUFBRSxLQVRPO0FBVWpCcUIsRUFBQUEsVUFBVSxFQUFFLEVBVks7QUFXakJKLEVBQUFBLGNBQWMsRUFBRSxFQVhDO0FBWWpCZixFQUFBQSxJQUFJLEVBQUUsS0FaVztBQWFqQkQsRUFBQUEsSUFBSSxFQUFFLE1BYlc7QUFjakJzQixFQUFBQSxXQUFXLGVBQUVXLEtBQUssQ0FBQ0ksU0FBTixFQWRJO0FBZWpCbkUsRUFBQUEsT0FBTyxFQUFFb0UsV0FmUTtBQWdCakJiLEVBQUFBLFFBQVEsRUFBRWEsV0FoQk87QUFpQmpCdkUsRUFBQUEsTUFBTSxFQUFFdUUsV0FqQlM7QUFrQmpCckUsRUFBQUEsT0FBTyxFQUFFcUUsV0FsQlE7QUFtQmpCbkUsRUFBQUEsU0FBUyxFQUFFbUUsV0FuQk07QUFvQmpCNUIsRUFBQUEsU0FBUyxFQUFFO0FBcEJNLENBQXJCO0FBdUJBN0MsS0FBSyxDQUFDMEUsU0FBTixHQUFrQjtBQUNkckMsRUFBQUEsU0FBUyxFQUFFc0Msc0JBQVVDLElBRFA7QUFFZC9DLEVBQUFBLFFBQVEsRUFBRThDLHNCQUFVQyxJQUZOO0FBR2RuRSxFQUFBQSxPQUFPLEVBQUVrRSxzQkFBVUMsSUFITDtBQUlkOUMsRUFBQUEsS0FBSyxFQUFFNkMsc0JBQVVFLE1BSkg7QUFLZHRELEVBQUFBLGFBQWEsRUFBRW9ELHNCQUFVQyxJQUxYO0FBTWRMLEVBQUFBLFdBQVcsRUFBRUksc0JBQVVDLElBTlQ7QUFPZHRDLEVBQUFBLEdBQUcsRUFBRXFDLHNCQUFVRyxNQVBEO0FBUWR2QyxFQUFBQSxHQUFHLEVBQUVvQyxzQkFBVUcsTUFSRDtBQVNkdEMsRUFBQUEsU0FBUyxFQUFFbUMsc0JBQVVHLE1BVFA7QUFVZHJDLEVBQUFBLFNBQVMsRUFBRWtDLHNCQUFVRyxNQVZQO0FBV2RsQyxFQUFBQSxPQUFPLEVBQUUrQixzQkFBVUksT0FBVixDQUFrQkosc0JBQVVLLEtBQVYsQ0FBZ0I7QUFDdkNiLElBQUFBLE1BQU0sRUFBRVEsc0JBQVVNLEtBQVYsQ0FBZ0IsQ0FBQyxVQUFELEVBQWEsU0FBYixFQUF3QixVQUF4QixFQUFvQyxNQUFwQyxFQUE0QyxZQUE1QyxDQUFoQixDQUQrQjtBQUV2Q2hCLElBQUFBLE9BQU8sRUFBRVUsc0JBQVVFLE1BRm9CO0FBR3ZDWCxJQUFBQSxJQUFJLEVBQUVTLHNCQUFVRSxNQUh1QjtBQUl2Q2hDLElBQUFBLFNBQVMsRUFBRTZCLHNCQUFVUSxNQUprQjtBQUt2Q2xCLElBQUFBLFFBQVEsRUFBRVcsc0JBQVVHO0FBTG1CLEdBQWhCLENBQWxCLENBWEs7QUFrQmRuQyxFQUFBQSxRQUFRLEVBQUVnQyxzQkFBVUMsSUFsQk47QUFtQmQ3QyxFQUFBQSxJQUFJLEVBQUU0QyxzQkFBVUUsTUFuQkY7QUFvQmRuQyxFQUFBQSxPQUFPLEVBQUVpQyxzQkFBVUUsTUFwQkw7QUFxQmQ3QyxFQUFBQSxXQUFXLEVBQUUyQyxzQkFBVUUsTUFyQlQ7QUFzQmR0QixFQUFBQSxVQUFVLEVBQUVvQixzQkFBVUUsTUF0QlI7QUF1QmQxQixFQUFBQSxjQUFjLEVBQUV3QixzQkFBVUUsTUF2Qlo7QUF3QmQ1QyxFQUFBQSxRQUFRLEVBQUUwQyxzQkFBVUMsSUF4Qk47QUF5QmQxQyxFQUFBQSxRQUFRLEVBQUV5QyxzQkFBVUMsSUF6Qk47QUEwQmR4QyxFQUFBQSxJQUFJLEVBQUV1QyxzQkFBVVEsU0FBVixDQUFvQixDQUN0QlIsc0JBQVVHLE1BRFksRUFFdEJILHNCQUFVTSxLQUFWLENBQWdCLENBQUMsS0FBRCxDQUFoQixDQUZzQixDQUFwQixDQTFCUTtBQThCZDlDLEVBQUFBLElBQUksRUFBRXdDLHNCQUFVTSxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsT0FBckIsRUFBOEIsUUFBOUIsRUFBd0MsS0FBeEMsRUFBK0MsS0FBL0MsRUFBc0QsUUFBdEQsRUFBZ0UsTUFBaEUsRUFBd0UsVUFBeEUsRUFBb0YsZ0JBQXBGLEVBQXNHLE9BQXRHLEVBQStHLE1BQS9HLEVBQXVILE1BQXZILENBQWhCLENBOUJRO0FBK0JkcEUsRUFBQUEsS0FBSyxFQUFFOEQsc0JBQVVFLE1BL0JIO0FBZ0NkeEUsRUFBQUEsT0FBTyxFQUFFc0Usc0JBQVVTLElBaENMO0FBaUNkeEIsRUFBQUEsUUFBUSxFQUFFZSxzQkFBVVMsSUFqQ047QUFrQ2RoRixFQUFBQSxPQUFPLEVBQUV1RSxzQkFBVVMsSUFsQ0w7QUFtQ2RsRixFQUFBQSxNQUFNLEVBQUV5RSxzQkFBVVMsSUFuQ0o7QUFvQ2Q5RSxFQUFBQSxTQUFTLEVBQUVxRSxzQkFBVVMsSUFwQ1A7QUFxQ2QzQixFQUFBQSxXQUFXLEVBQUVrQixzQkFBVVEsU0FBVixDQUFvQixDQUM3QlQsc0JBQVVVLElBRG1CLEVBRTdCVixzQkFBVU0sS0FBVixDQUFnQjtBQUFFdEIsSUFBQUEsT0FBTyxFQUFFZ0Isc0JBQVVXO0FBQXJCLEdBQWhCLENBRjZCLENBQXBCLENBckNDO0FBeUNkeEMsRUFBQUEsU0FBUyxFQUFDNkIsc0JBQVVTLFNBQVYsQ0FBb0IsQ0FBQ1Qsc0JBQVVHLE1BQVgsRUFBbUJILHNCQUFVUSxNQUE3QixDQUFwQjtBQXpDSSxDQUFsQjtlQTRDZWxGLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGZpbmRCeVR5cGUsIHtjcmVhdGVTdWJDb21wb25lbnR9IGZyb20gXCIuLi91dGlscy9maW5kQnlUeXBlXCI7XHJcbmltcG9ydCB7bm9vcH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5pbXBvcnQgSW5mb01lc3NhZ2UgZnJvbSBcIi4uL0luZm9NZXNzYWdlL0luZm9NZXNzYWdlXCI7XHJcblxyXG5jb25zdCBTdGFydCA9ICgpID0+IG51bGw7XHJcbmNvbnN0IEVuZCA9ICgpID0+IG51bGw7XHJcblxyXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25JbnB1dCA9IHRoaXMub25JbnB1dC5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbkludmFsaWQgPSB0aGlzLm9uSW52YWxpZC5iaW5kKHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZCxcclxuICAgICAgICAgICAgaW52YWxpZDogdGhpcy5wcm9wcy5pbnZhbGlkLFxyXG4gICAgICAgICAgICBoYXNTdGFydDogZmFsc2UsXHJcbiAgICAgICAgICAgIGhhc0VuZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyU3RhcnQoKSB7XHJcbiAgICAgICAgY29uc3Qge2NoaWxkcmVufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBcIlN0YXJ0XCIpO1xyXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2wtLXN0YXJ0XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiLS1pbnZhbGlkXCI6IHRoaXMuc3RhdGU/LmludmFsaWRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoIXN0YXJ0IHx8IHN0YXJ0Lmxlbmd0aDwxKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgIXRoaXMuc3RhdGUuaGFzU3RhcnQgJiYgdGhpcy5zZXRTdGF0ZSh7aGFzU3RhcnQ6IHRydWV9KVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PntzdGFydH08L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJFbmQoKSB7XHJcbiAgICAgICAgY29uc3Qge2NoaWxkcmVufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZW5kID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgXCJFbmRcIik7XHJcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICBcImZvcm0tY29udHJvbC0tZW5kXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiLS1pbnZhbGlkXCI6IHRoaXMuc3RhdGU/LmludmFsaWRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoIWVuZCB8fCBlbmQubGVuZ3RoPDEpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAhdGhpcy5zdGF0ZS5oYXNFbmQgJiYgdGhpcy5zZXRTdGF0ZSh7aGFzRW5kOiB0cnVlfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT57ZW5kfTwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIG9uQmx1cihldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IGZhbHNlfSlcclxuICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Gb2N1cyhldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IHRydWV9KVxyXG4gICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnB1dChldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbklucHV0KGV2ZW50KVxyXG4gICAgfVxyXG5cclxuICAgIG9uSW52YWxpZChlKXtcclxuICAgICAgICBjb25zdCB7bWFuYWdlSW52YWxpZCwgb25JbnZhbGlkfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmKCFtYW5hZ2VJbnZhbGlkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnZhbGlkOiB0cnVlfSk7XHJcbiAgICAgICAgb25JbnZhbGlkKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcclxuICAgICAgICBjb25zdCB7aW52YWxpZCwgbWFuYWdlSW52YWxpZCwgdmFsdWV9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYocHJldlByb3BzLnZhbHVlIT09dmFsdWUgfHwgdmFsdWUhPT10aGlzLnN0YXRlLnZhbHVlKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogdmFsdWV9KVxyXG5cclxuICAgICAgICBpZihtYW5hZ2VJbnZhbGlkICYmIHRoaXMuc3RhdGUuaW52YWxpZCAhPT0gaW52YWxpZClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW52YWxpZDogaW52YWxpZH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgKG5leHRQcm9wcykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBuZXh0UHJvcHMudmFsdWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMsIG5leHRDb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiBuZXh0UHJvcHMudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICBuYW1lID0gXCJuYW1lXCIsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICByZWFkb25seSxcclxuICAgICAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZSxcclxuICAgICAgICAgICAgaW52YWxpZCxcclxuICAgICAgICAgICAgc3RlcCxcclxuICAgICAgICAgICAgYXV0b2ZvY3VzLFxyXG4gICAgICAgICAgICBtYXgsXHJcbiAgICAgICAgICAgIG1pbixcclxuICAgICAgICAgICAgbWF4bGVuZ3RoLFxyXG4gICAgICAgICAgICBtaW5sZW5ndGgsXHJcbiAgICAgICAgICAgIHBhdHRlcm4sXHJcbiAgICAgICAgICAgIG11bHRpcGxlLFxyXG4gICAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgX2hhc0xhYmVsID0gbGFiZWwgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICBjb25zdCBfaGFzTWVzc2FnZXMgPSBtZXNzYWdlLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgY29uc3QgX21vdmVkID0gdGhpcy5zdGF0ZS5mb2N1c2VkIHx8IHZhbHVlIHx8IHRoaXMuc3RhdGUuaGFzU3RhcnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckNsYXNzZXMgPSBjbGFzc25hbWVzKCBjbGFzc05hbWUse1xyXG4gICAgICAgICAgICBcInN3Zi1mb3JtLWdyb3VwXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiLS1pbnZhbGlkXCI6IHRoaXMuc3RhdGU/LmludmFsaWQsXHJcbiAgICAgICAgICAgIFwiLS1yZWFkb25seVwiOiB0aGlzLnByb3BzLnJlYWRvbmx5LFxyXG4gICAgICAgICAgICBbdGhpcy5wcm9wcy5jb250YWluZXJDbGFzc106IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBsYWJlbENsYXNzZXMgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgXCJpbnAtbGFiZWxcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCItLW1vdmVkXCI6IF9tb3ZlZCxcclxuICAgICAgICAgICAgXCItLWZvY3VzZWRcIjogdGhpcy5zdGF0ZT8uZm9jdXNlZCxcclxuICAgICAgICAgICAgXCItLWludmFsaWRcIjogdGhpcy5zdGF0ZT8uaW52YWxpZCxcclxuICAgICAgICAgICAgXCItLXJlYWRvbmx5XCI6IHRoaXMucHJvcHMucmVhZG9ubHlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWRDbGFzc2VzID0gY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgIFwiaW5wLXJlcXVpcmVkXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiLS1mb2N1c2VkXCI6IHRoaXMuc3RhdGU/LmZvY3VzZWQsXHJcbiAgICAgICAgICAgIFwiLS1pbnZhbGlkXCI6IHRoaXMuc3RhdGU/LmludmFsaWRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRDbGFzc2VzID0gY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgIFwiZm9ybS1jb250cm9sXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwibm8tc3RhcnQtYm9yZGVyXCI6IHRoaXMuc3RhdGU/Lmhhc1N0YXJ0LFxyXG4gICAgICAgICAgICBcIm5vLWVuZC1ib3JkZXJcIjogdGhpcy5zdGF0ZT8uaGFzRW5kLFxyXG4gICAgICAgICAgICBcIi0taW52YWxpZFwiOiB0aGlzLnN0YXRlPy5pbnZhbGlkLFxyXG4gICAgICAgICAgICBcIi0tcmVhZG9ubHlcIjogdGhpcy5wcm9wcy5yZWFkb25seSxcclxuICAgICAgICAgICAgW3RoaXMucHJvcHMuaW5wdXRDbGFzc106IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzZXN9IHJlZj17ZWxtID0+IHRoaXMucHJvcHMuaW50ZXJuYWxSZWYuY3VycmVudCA9IGVsbX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtfaGFzTGFiZWwgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtsYWJlbENsYXNzZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkICYmIDxJY29uIGljb249eydhc3Rlcmlzayd9IGNsYXNzTmFtZT17cmVxdWlyZWRDbGFzc2VzfSBjdXN0b21TaXplPXs3fS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU3RhcnQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0Q2xhc3Nlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17c3RlcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17aW52YWxpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3JlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXthdXRvZm9jdXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9e21heH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17bWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXttYXhsZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg9e21pbmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm49e3BhdHRlcm59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZT17bXVsdGlwbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLm9uSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Gb2N1cyhldmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25CbHVyKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkludmFsaWQ9eyhlKSA9PiB0aGlzLm9uSW52YWxpZChlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRW5kKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge19oYXNNZXNzYWdlcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm1hcCgoZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8SW5mb01lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uU2l6ZT17ZWwuaWNvblNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtlbC5jbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17ZWwuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtlbC5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz17ZWwuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59O1xyXG5cclxuSW5wdXQuU3RhcnQgPSBjcmVhdGVTdWJDb21wb25lbnQoXCJTdGFydFwiKTtcclxuSW5wdXQuRW5kID0gY3JlYXRlU3ViQ29tcG9uZW50KFwiRW5kXCIpO1xyXG5cclxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgYXV0b2ZvY3VzOiBmYWxzZSxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGludmFsaWQ6IGZhbHNlLFxyXG4gICAgbWFuYWdlSW52YWxpZDogZmFsc2UsXHJcbiAgICBtYW5hZ2VWYWx1ZTogZmFsc2UsXHJcbiAgICBtZXNzYWdlOiBbXSxcclxuICAgIG11bHRpcGxlOiBmYWxzZSxcclxuICAgIHJlYWRvbmx5OiBmYWxzZSxcclxuICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIGlucHV0Q2xhc3M6IFwiXCIsXHJcbiAgICBjb250YWluZXJDbGFzczogXCJcIixcclxuICAgIHN0ZXA6IFwiYW55XCIsXHJcbiAgICB0eXBlOiBcInRleHRcIixcclxuICAgIGludGVybmFsUmVmOiBSZWFjdC5jcmVhdGVSZWYoKSxcclxuICAgIG9uSW5wdXQ6IG5vb3AsXHJcbiAgICBvbkNoYW5nZTogbm9vcCxcclxuICAgIG9uQmx1cjogbm9vcCxcclxuICAgIG9uRm9jdXM6IG5vb3AsXHJcbiAgICBvbkludmFsaWQ6IG5vb3AsXHJcbiAgICBjbGFzc05hbWU6IHt9XHJcbn1cclxuXHJcbklucHV0LnByb3BUeXBlcyA9IHtcclxuICAgIGF1dG9mb2N1czogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbWFuYWdlSW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VWYWx1ZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYXg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtaW46IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtYXhsZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtaW5sZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBtZXNzYWdlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHN0YXR1czogUHJvcFR5cGVzLm9uZU9mKFtcImNyaXRpY2FsXCIsIFwid2FybmluZ1wiLCBcInBvc2l0aXZlXCIsIFwiaW5mb1wiLCBcInN1Z2dlc3Rpb25cIl0pLFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBjbGFzc05hbWU6IHByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgaWNvblNpemU6IFByb3BUeXBlcy5udW1iZXJcclxuICAgIH0pKSxcclxuICAgIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBwYXR0ZXJuOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpbnB1dENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29udGFpbmVyQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICByZWFkb25seTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzdGVwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIFByb3BUeXBlcy5vbmVPZihbXCJhbnlcIl0pXHJcbiAgICBdKSxcclxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJ0ZXh0XCIsIFwicGFzc3dvcmRcIiwgXCJlbWFpbFwiLCBcIm51bWJlclwiLCBcInVybFwiLCBcInRlbFwiLCBcInNlYXJjaFwiLCBcImRhdGVcIiwgXCJkYXRldGltZVwiLCBcImRhdGV0aW1lLWxvY2FsXCIsIFwibW9udGhcIiwgXCJ3ZWVrXCIsIFwidGltZVwiXSksXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uSW5wdXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25JbnZhbGlkOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGludGVybmFsUmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBwcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBwcm9wVHlwZXMuc2hhcGUoeyBjdXJyZW50OiBwcm9wVHlwZXMuYW55IH0pXHJcbiAgICBdKSxcclxuICAgIGNsYXNzTmFtZTpwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMub2JqZWN0XSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7Il19