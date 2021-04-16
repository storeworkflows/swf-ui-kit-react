"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var HighlightedValue = /*#__PURE__*/function (_React$Component) {
  _inherits(HighlightedValue, _React$Component);

  var _super = _createSuper(HighlightedValue);

  function HighlightedValue() {
    _classCallCheck(this, HighlightedValue);

    return _super.apply(this, arguments);
  }

  _createClass(HighlightedValue, [{
    key: "getIconSize",
    value: function getIconSize(size, icon) {
      switch (size) {
        case "sm":
          return icon ? 11 : 7;

        case "lg":
          return icon ? 18 : 10;

        default:
          return icon ? 14 : 8;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          roundBorder = _this$props.roundBorder,
          className = _this$props.className,
          showIcon = _this$props.showIcon,
          onClick = _this$props.onClick,
          variant = _this$props.variant,
          color = _this$props.color,
          label = _this$props.label,
          icon = _this$props.icon,
          size = _this$props.size;
      var classes = (0, _classnames["default"])("highlighted-value-container", "--".concat(size), "--".concat(variant), color, className, {
        "--round": roundBorder
      });
      var iconSize = this.getIconSize(size, icon);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: classes,
          onClick: onClick,
          children: [showIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
            className: "highlighted-icon",
            icon: icon ? icon : "circle-fill",
            customSize: iconSize
          }), label && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: label
          })]
        })
      });
    }
  }]);

  return HighlightedValue;
}(React.Component);

HighlightedValue.defaultProps = {
  className: {},
  onClick: function onClick() {
    return void 0;
  },
  showIcon: false,
  size: "md",
  variant: "primary",
  color: "red",
  roundBorder: true
};
HighlightedValue.propTypes = {
  roundBorder: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  onClick: _propTypes["default"].func,
  icon: _propTypes["default"].string,
  showIcon: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["sm", "md", "lg"]),
  variant: _propTypes["default"].oneOf(["primary", "secondary", "tertiary"]),
  color: _propTypes["default"].oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"])
};
var _default = HighlightedValue;
exports["default"] = _default;