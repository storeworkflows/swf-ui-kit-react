"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _findByType = _interopRequireWildcard(require("../utils/findByType"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var LabelValue = /*#__PURE__*/function (_React$Component) {
  _inherits(LabelValue, _React$Component);

  var _super = _createSuper(LabelValue);

  function LabelValue(props) {
    _classCallCheck(this, LabelValue);

    return _super.call(this, props);
  }

  _createClass(LabelValue, [{
    key: "renderValue",
    value: function renderValue() {
      var _this$props = this.props,
          children = _this$props.children,
          value = _this$props.value,
          valueClassName = _this$props.valueClassName,
          inline = _this$props.inline;
      var valueClasses = (0, _classnames["default"])("value-content", valueClassName, {
        "--text-value": value,
        "--inline": inline
      });
      if (value) return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: valueClasses,
        children: value
      });
      var slotValue = (0, _findByType["default"])(children, "Value");
      if (!slotValue || slotValue.length < 1) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: valueClasses,
        children: slotValue
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          labelClassName = _this$props2.labelClassName,
          importantLabel = _this$props2.importantLabel,
          className = _this$props2.className,
          onClick = _this$props2.onClick,
          inline = _this$props2.inline,
          label = _this$props2.label,
          size = _this$props2.size;
      var classes = (0, _classnames["default"])("label-value-container", "--".concat(size), className, {
        "--display-flex": inline,
        "--unimportant": !importantLabel
      });
      var labelClasses = (0, _classnames["default"])("label-content", labelClassName, {
        "--unimportant": !importantLabel
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: classes,
          onClick: onClick,
          children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: labelClasses,
            children: label
          }), this.renderValue()]
        })
      });
    }
  }]);

  return LabelValue;
}(React.Component);

LabelValue.Value = (0, _findByType.createSubComponent)("Value");
LabelValue.defaultProps = {
  className: {},
  labelClassName: {},
  valueClassName: {},
  inline: false,
  onClick: function onClick() {
    return void 0;
  },
  importantLabel: true,
  size: "md"
};
LabelValue.propTypes = {
  label: _propTypes["default"].string,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  labelClassName: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  valueClassName: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  onClick: _propTypes["default"].func,
  inline: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  importantLabel: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["sm", "md", "lg"])
};
var _default = LabelValue;
exports["default"] = _default;