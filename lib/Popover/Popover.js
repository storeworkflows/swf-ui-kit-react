"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles2 = _interopRequireDefault(require("./styles.scss"));

var _findByType = _interopRequireDefault(require("../utils/findByType"));

var _utils = require("./utils");

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

var Content = function Content() {
  return null;
};

var Target = function Target() {
  return null;
};

var Popover = /*#__PURE__*/function (_React$Component) {
  _inherits(Popover, _React$Component);

  var _super = _createSuper(Popover);

  function Popover(props) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _super.call(this, props);
    _this.targetClicked = _this.targetClicked.bind(_assertThisInitialized(_this));
    _this.state = {
      opened: false,
      height: 0,
      width: 0
    };
    _this.targetRef = /*#__PURE__*/React.createRef();
    _this.contentRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(Popover, [{
    key: "renderContent",
    value: function renderContent() {
      var _this$props = this.props,
          children = _this$props.children,
          hideTail = _this$props.hideTail;
      var content = (0, _findByType["default"])(children, Content);
      if (!content) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "popover-content arrow arrow-up",
        ref: this.contentRef,
        children: [content.props.children, " "]
      });
    }
  }, {
    key: "renderTarget",
    value: function renderTarget() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          positionTarget = _this$props2.positionTarget;
      var target = (0, _findByType["default"])(children, Target);
      var targetContent = !target ? positionTarget : target.props.children;
      if (!targetContent) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        id: "popover-target",
        ref: this.targetRef,
        onClick: this.targetClicked,
        children: [targetContent, " "]
      });
    }
  }, {
    key: "targetClicked",
    value: function targetClicked() {
      var _this$props3 = this.props,
          manageOpened = _this$props3.manageOpened,
          onClick = _this$props3.onClick;
      var currentState = this.state.opened;

      if (!manageOpened) {
        currentState = !currentState;
        this.setState({
          opened: currentState
        });
      }

      if (onClick !== undefined && onClick !== null) onClick({
        value: currentState
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        opened: this.props.opened
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.contentRef.current) {
        var targetDimensions = this.targetRef.current.getBoundingClientRect();
        var contentDimensions = this.contentRef.current.getBoundingClientRect();
        var position = this.props.positions;
        var stylesInfo = (0, _utils.getPopoverStyle)(position, targetDimensions, contentDimensions, window.innerWidth);
        var _styles = stylesInfo.style;
        this.contentRef.current.style.transform = _styles.transform;
        this.contentRef.current.style.left = _styles.left;
        this.contentRef.current.style.top = _styles.top;

        if (!this.props.hideTail && stylesInfo.hasArrow) {
          stylesInfo.arrowStyle.forEach(function (style) {
            console.log(style); // this.contentRef.current.style[style] =
          });
        } //console.log("styles", this.contentRef.current.style[]);

      }
    }
  }, {
    key: "render",
    value: function render() {
      var opened = this.state.opened;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles2["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "popover-element",
          children: [this.renderTarget(), opened && this.renderContent()]
        })]
      });
    }
  }]);

  return Popover;
}(React.Component);

;
Popover.Content = Content;
Popover.Target = Target;
Popover.defaultProps = {
  hideTail: false,
  manageOpened: false,
  opened: false,
  positions: [{
    target: 'bottom-start',
    content: 'top-start'
  }, {
    target: 'bottom-end',
    content: 'top-end'
  }, {
    target: 'top-start',
    content: 'bottom-start'
  }, {
    target: 'top-end',
    content: 'bottom-end'
  }, {
    target: 'top-end',
    content: 'top-start'
  }, {
    target: 'bottom-end',
    content: 'bottom-start'
  }, {
    target: 'top-start',
    content: 'top-end'
  }, {
    target: 'bottom-start',
    content: 'bottom-end'
  }]
};
Popover.propTypes = {
  hideTail: _propTypes["default"].bool,
  manageOpened: _propTypes["default"].bool,
  opened: _propTypes["default"].bool,
  positionTarget: _propTypes["default"].element,
  positions: _propTypes["default"].array,
  onClick: _propTypes["default"].func
};
var _default = Popover;
exports["default"] = _default;
//# sourceMappingURL=Popover.js.map