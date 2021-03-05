"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Checkbox = /*#__PURE__*/function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  var _super = _createSuper(Checkbox);

  function Checkbox(props) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _super.call(this, props);
    _this.onChangeAction = _this.onChangeAction.bind(_assertThisInitialized(_this));
    _this.onInvalidAction = _this.onInvalidAction.bind(_assertThisInitialized(_this));
    _this.setIndeterminate = _this.setIndeterminate.bind(_assertThisInitialized(_this));
    _this.state = {
      checkedValue: _this.props.checked,
      invalidValue: _this.props.invalid,
      checkboxRef: /*#__PURE__*/React.createRef()
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: "onChangeAction",
    value: function onChangeAction() {
      var _this$props = this.props,
          manageChecked = _this$props.manageChecked,
          onChange = _this$props.onChange,
          readonly = _this$props.readonly,
          disabled = _this$props.disabled;
      var currentValue = this.state.checkedValue;
      var newValue = currentValue === "indeterminate" ? true : !currentValue;
      var canChange = !readonly && !disabled;
      if (canChange && manageChecked) onChange({
        value: currentValue
      });else if (canChange) this.setState({
        checkedValue: newValue
      });else if (currentValue === "indeterminate") this.setIndeterminate();
    }
  }, {
    key: "onInvalidAction",
    value: function onInvalidAction() {
      var _this$props2 = this.props,
          manageInvalid = _this$props2.manageInvalid,
          onInvalid = _this$props2.onInvalid;
      var currentValue = this.state.invalidValue;
      if (manageInvalid) onInvalid({
        value: currentValue
      });else this.setState({
        invalidValue: !currentValue
      });
    }
  }, {
    key: "setIndeterminate",
    value: function setIndeterminate() {
      var input = this.state.checkboxRef.current.querySelector('input');
      if (this.props.checked === "indeterminate") input.indeterminate = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props3 = this.props,
          checked = _this$props3.checked,
          invalid = _this$props3.invalid,
          manageChecked = _this$props3.manageChecked,
          manageInvalid = _this$props3.manageInvalid;
      var _this$state = this.state,
          invalidValue = _this$state.invalidValue,
          checkedValue = _this$state.checkedValue;

      if (manageChecked && checkedValue !== checked) {
        this.setState({
          checkedValue: checked
        });
        this.setIndeterminate();
      }

      if (manageInvalid && invalidValue !== invalid) this.setState({
        invalidValue: invalid
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setIndeterminate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          disabled = _this$props4.disabled,
          label = _this$props4.label,
          name = _this$props4.name,
          readonly = _this$props4.readonly,
          required = _this$props4.required;
      var isIndeterminate = this.state.checkedValue === 'indeterminate';
      var checkedValue = isIndeterminate ? false : this.state.checkedValue;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _classnames["default"])({
            "checkbox-container": true,
            "disabled": disabled,
            "readonly": readonly,
            "invalid": this.state.invalidValue
          }),
          ref: this.state.checkboxRef,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            className: "checkbox-input",
            type: "checkbox",
            checked: checkedValue,
            disabled: disabled,
            required: required,
            name: name,
            value: this.state.checkedValue ? "true" : "false",
            onInvalid: function onInvalid(e) {
              return _this2.onInvalidAction(e);
            },
            onChange: function onChange(e) {
              return _this2.onChangeAction(e);
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "checkbox-information",
            children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "checkbox-label",
              children: label
            }), required && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "checkbox-required",
              children: "*"
            })]
          })]
        })]
      });
    }
  }]);

  return Checkbox;
}(React.Component);

;
Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  invalid: false,
  manageChecked: false,
  manageInvalid: false,
  readonly: false,
  required: false
};
Checkbox.propTypes = {
  checked: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(["indeterminate"])]),
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  manageChecked: _propTypes["default"].bool,
  manageInvalid: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  onInvalid: _propTypes["default"].func,
  onChange: _propTypes["default"].func
};
var _default = Checkbox;
exports["default"] = _default;
//# sourceMappingURL=Checkbox.js.map