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

var _lodash = _interopRequireDefault(require("lodash"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      if (!_lodash["default"].isEqual(prevProps.value, value) || !_lodash["default"].isEqual(value, this.state.value)) this.setState({
        value: value
      });
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
              onKeyDown: this.props.onKeyDown,
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
          }), _hasMessages && message.map(function (el, index) {
            return el && /*#__PURE__*/(0, React.createElement)(_InfoMessage["default"], _objectSpread(_objectSpread({}, el), {}, {
              key: index
            }));
          })]
        })
      });
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
  onKeyDown: _utils.noop,
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
    status: _propTypes["default"].oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
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
  onKeyDown: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onInvalid: _propTypes["default"].func,
  internalRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].any
  })]),
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
};
var _default = Input;
exports["default"] = _default;