"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _RequiredLabel = _interopRequireDefault(require("../RequiredLabel/RequiredLabel"));

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
      indeterminateValue: false
    };
    _this.checkboxRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(Checkbox, [{
    key: "onChangeAction",
    value: function onChangeAction(e) {
      e === null || e === void 0 ? void 0 : e.preventDefault(); // e?.stopPropagation();

      var _this$props = this.props,
          manageChecked = _this$props.manageChecked,
          onChange = _this$props.onChange,
          readonly = _this$props.readonly,
          disabled = _this$props.disabled,
          label = _this$props.label,
          name = _this$props.name,
          value = _this$props.value;
      var currentValue = this.state.checkedValue;
      var newValue = currentValue === "indeterminate" || !currentValue;
      var canChange = !readonly && !disabled;
      if (!manageChecked && canChange) this.setState({
        checkedValue: newValue
      });
      onChange({
        value: currentValue,
        valueName: value,
        label: label,
        name: name
      });
    }
  }, {
    key: "onInvalidAction",
    value: function onInvalidAction(e) {
      var _this$props2 = this.props,
          manageInvalid = _this$props2.manageInvalid,
          onInvalid = _this$props2.onInvalid,
          label = _this$props2.label,
          name = _this$props2.name,
          value = _this$props2.value;
      var currentValue = this.state.invalidValue;

      if (!manageInvalid) {
        currentValue = true;
        this.setState({
          invalidValue: currentValue
        });
      }

      onInvalid(e, {
        value: currentValue,
        valueName: value,
        label: label,
        name: name
      });
    }
  }, {
    key: "setIndeterminate",
    value: function setIndeterminate() {
      if (this.checkboxRef && this.checkboxRef.current) {
        var input = this.checkboxRef.current.querySelector('input');
        var value = this.state.checkedValue === "indeterminate";
        if (input) input.indeterminate = value;
      }
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
      if (manageChecked && checkedValue !== checked) this.setState({
        checkedValue: checked
      });
      if (manageInvalid && invalidValue !== invalid) this.setState({
        invalidValue: invalid
      });
      this.setIndeterminate();
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
          required = _this$props4.required,
          visible = _this$props4.visible,
          className = _this$props4.className,
          value = _this$props4.value,
          invalid = _this$props4.invalid,
          labelClassName = _this$props4.labelClassName,
          inlineRequired = _this$props4.inlineRequired;
      var isIndeterminate = this.state.checkedValue === 'indeterminate';
      var checkedValue = isIndeterminate || this.state.checkedValue;
      var checkBoxClasses = (0, _classnames["default"])({
        "swf-checkbox-container": true,
        "disabled": disabled,
        "readonly": readonly,
        "invalid": this.state.invalidValue
      });
      return visible ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: className,
          children: [(label || required) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
            className: labelClassName,
            invalid: invalid,
            required: required,
            label: label
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: checkBoxClasses,
            ref: function ref(el) {
              return _this2.checkboxRef.current = el;
            },
            onClick: this.onChangeAction,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              className: "checkbox-input",
              type: "checkbox",
              disabled: disabled,
              required: required,
              name: name,
              value: this.state.checkedValue,
              checked: checkedValue,
              onInvalid: this.onInvalidAction,
              onChange: function onChange(e) {
                e.preventDefault();
                e.stopPropagation();
              },
              onClick: function onClick(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "checkbox-container",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "checkbox-information",
                children: value && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
                  htmlFor: name,
                  className: "checkbox-label",
                  required: inlineRequired,
                  label: value
                })
              })
            })]
          })]
        })
      }) : null;
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
  required: false,
  visible: true,
  className: {},
  onInvalid: function onInvalid() {
    return void 0;
  },
  onChange: function onChange() {
    return void 0;
  },
  labelClassName: {},
  inlineRequired: false
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
  onChange: _propTypes["default"].func,
  visible: _propTypes["default"].bool,
  className: _propTypes["default"].object,
  value: _propTypes["default"].string,
  labelClassName: _propTypes["default"].object,
  inlineRequired: _propTypes["default"].bool
};
var _default = Checkbox;
exports["default"] = _default;