"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _classnames = _interopRequireDefault(require("classnames"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var InfoMessage = /*#__PURE__*/function (_React$Component) {
  _inherits(InfoMessage, _React$Component);

  var _super = _createSuper(InfoMessage);

  function InfoMessage(props) {
    var _this;

    _classCallCheck(this, InfoMessage);

    _this = _super.call(this, props);
    _this.state = {
      content: _this.props.content
    };
    _this.setDelay = _this.setDelay.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InfoMessage, [{
    key: "setDelay",
    value: function setDelay() {
      var _this2 = this;

      var delay = this.props.delay;
      console.log(delay);
      if (delay) setTimeout(function () {
        return _this2.setState({
          content: undefined
        });
      }, delay);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setDelay();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var content = this.props.content;

      if (content !== prevProps.content) {
        this.setState({
          content: content
        });
        this.setDelay();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          status = _this$props.status,
          icon = _this$props.icon,
          className = _this$props.className,
          iconSize = _this$props.iconSize;
      var content = this.state.content;
      var messageClasses = (0, _classnames["default"])(className, status, "info-message");
      return content ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: messageClasses,
        children: [icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
          className: "input-message-icon",
          icon: icon,
          customSize: iconSize
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "input-message-content",
          children: content
        })]
      }) : null;
    }
  }]);

  return InfoMessage;
}(React.Component);

InfoMessage.defaultProps = {
  status: "critical",
  className: {}
};
InfoMessage.propTypes = {
  status: _propTypes["default"].oneOf(["critical", "warning", "positive", "info", "suggestion"]),
  content: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  className: _propTypes["default"].object,
  iconSize: _propTypes["default"].number,
  delay: _propTypes["default"].number
};
var _default = InfoMessage;
exports["default"] = _default;