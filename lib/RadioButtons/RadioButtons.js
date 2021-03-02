"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _RadioOption = _interopRequireDefault(require("./RadioOption.js"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

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

var RadioButtons = /*#__PURE__*/function (_React$Component) {
  _inherits(RadioButtons, _React$Component);

  var _super = _createSuper(RadioButtons);

  function RadioButtons(props) {
    _classCallCheck(this, RadioButtons);

    return _super.call(this, props);
  }

  _createClass(RadioButtons, [{
    key: "renderValue",
    value: function renderValue(option, name) {
      var id = option.id,
          label = option.label,
          value = option.value,
          checked = option.checked,
          readonly = option.readonly,
          disabled = option.disabled;
      var isChecked = this.props.value ? this.props.value === id : checked;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadioOption["default"], {
        id: id,
        label: label,
        value: value,
        checked: isChecked,
        readonly: readonly || this.props.readonly,
        disabled: disabled || this.props.disabled,
        name: name
      }, id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          invalid = _this$props.invalid,
          label = _this$props.label,
          layout = _this$props.layout,
          manageValue = _this$props.manageValue,
          name = _this$props.name,
          options = _this$props.options,
          required = _this$props.required;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "radio-buttons-container",
          children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: label
          }), required && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
            icon: "exclamation",
            customSize: 20,
            color: invalid ? "red" : "black"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "group-of-radio-buttons",
            children: options.map(function (option) {
              return _this.renderValue(option, name);
            })
          })]
        })]
      });
    }
  }]);

  return RadioButtons;
}(React.Component);

;
RadioButtons.defaultProps = {
  disabled: false,
  layout: "vertical",
  manageValue: false,
  options: [],
  readonly: false,
  required: false
};
RadioButtons.propTypes = {
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  layout: _propTypes["default"].oneOf(["vertical", "horizontal"]),
  manageValue: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    label: _propTypes["default"].string,
    value: _propTypes["default"].string,
    checked: _propTypes["default"].bool,
    readonly: _propTypes["default"].bool,
    disabled: _propTypes["default"].bool
  })),
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  value: _propTypes["default"].string
};
var _default = RadioButtons;
exports["default"] = _default;
//# sourceMappingURL=RadioButtons.js.map