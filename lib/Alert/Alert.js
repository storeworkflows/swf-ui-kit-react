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

var _Button = _interopRequireDefault(require("../Button/Button"));

var _TextLink = _interopRequireDefault(require("../TextLink/TextLink"));

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

var Alert = /*#__PURE__*/function (_React$Component) {
  _inherits(Alert, _React$Component);

  var _super = _createSuper(Alert);

  function Alert(props) {
    var _this;

    _classCallCheck(this, Alert);

    _this = _super.call(this, props);
    _this.buttonClicked = _this.buttonClicked.bind(_assertThisInitialized(_this));
    _this.expandAction = _this.expandAction.bind(_assertThisInitialized(_this));
    _this.defineSizes = _this.defineSizes.bind(_assertThisInitialized(_this));
    _this.setDelay = _this.setDelay.bind(_assertThisInitialized(_this));
    _this.state = {
      expanded: _this.props.expanded,
      isOverflowed: !_this.props.expanded,
      oneLineText: false,
      visible: _this.props.visible
    };
    _this.contentRef = /*#__PURE__*/React.createRef();
    _this.textRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(Alert, [{
    key: "setDelay",
    value: function setDelay() {
      var _this2 = this;

      var _this$props = this.props,
          delay = _this$props.delay,
          onCloseAction = _this$props.onCloseAction,
          manageVisibility = _this$props.manageVisibility;

      if (delay) {
        setTimeout(function () {
          if (!manageVisibility) _this2.setState({
            visible: false
          });
          onCloseAction();
        }, delay);
      }
    }
  }, {
    key: "buttonClicked",
    value: function buttonClicked(e) {
      e.preventDefault();
      var _this$props2 = this.props,
          action = _this$props2.action,
          manageVisibility = _this$props2.manageVisibility,
          onButtonClick = _this$props2.onButtonClick,
          manageButtonClick = _this$props2.manageButtonClick;

      if (!manageButtonClick) {
        if (!manageVisibility) this.setState({
          visible: false
        });
        if (action.href) (0, _utils.openLink)(action.href);
      }

      onButtonClick(e, action);
    }
  }, {
    key: "expandAction",
    value: function expandAction(e) {
      e.preventDefault();
      var _this$props3 = this.props,
          manageExpanded = _this$props3.manageExpanded,
          onExpandAction = _this$props3.onExpandAction;
      var currentState = this.state.expanded;

      if (!manageExpanded) {
        currentState = !this.state.expanded;
        this.setState({
          expanded: currentState,
          isOverflowed: !currentState
        });
      }

      onExpandAction({
        isExpanded: currentState
      });
    }
  }, {
    key: "defineSizes",
    value: function defineSizes() {
      var _this$props4 = this.props,
          header = _this$props4.header,
          content = _this$props4.content;

      if (this.contentRef.current && this.textRef.current) {
        var contentRef = this.contentRef.current;
        var text = this.textRef.current;
        var onlyHeader = header && !content;
        var oneLineText = !header && text.getBoundingClientRect().height < 32;
        this.setState({
          isOverflowed: contentRef.scrollHeight < text.scrollHeight,
          oneLineText: onlyHeader || oneLineText
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.defineSizes();
      this.setDelay();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this$props5 = this.props,
          manageExpanded = _this$props5.manageExpanded,
          expanded = _this$props5.expanded,
          content = _this$props5.content,
          header = _this$props5.header,
          manageVisibility = _this$props5.manageVisibility,
          visible = _this$props5.visible;
      if (manageExpanded && expanded !== this.state.expanded) this.setState({
        expanded: expanded,
        isOverflowed: !expanded
      });

      if (manageVisibility && visible !== this.state.visible) {
        this.setState({
          visible: visible
        });
        this.setDelay();
        this.defineSizes();
      }

      if (content !== prevProps.content || header !== prevProps.header) this.defineSizes();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props6 = this.props,
          action = _this$props6.action,
          content = _this$props6.content,
          header = _this$props6.header,
          icon = _this$props6.icon,
          color = _this$props6.color,
          textLinkProps = _this$props6.textLinkProps,
          onTextLinkClicked = _this$props6.onTextLinkClicked;
      var _this$state = this.state,
          isOverflowed = _this$state.isOverflowed,
          oneLineText = _this$state.oneLineText,
          expanded = _this$state.expanded,
          visible = _this$state.visible;
      var mainContainerClasses = (0, _classnames["default"])(color, {
        "swf-alert-container": true,
        "--alignCenter": !isOverflowed && !expanded,
        "--overflowed": isOverflowed,
        "--oneLineContent": oneLineText,
        "--expanded": expanded,
        "--no-icon": !icon
      });
      var textStyles = (0, _classnames["default"])({
        "text-container": true,
        "--overflowed": isOverflowed,
        "--setToOneLine": header && isOverflowed,
        "--expanded": expanded
      });
      var showLabel = expanded ? "less" : "more";
      var isButtonWithText = action.type === "acknowledge" || action.type === "open";
      return visible ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: mainContainerClasses,
          children: [icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
            className: "alert-icon",
            icon: icon
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "alert-content",
            ref: function ref(el) {
              return _this3.contentRef.current = el;
            },
            children: [header && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "alert-header",
              children: header
            }), content && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              ref: function ref(el) {
                return _this3.textRef.current = el;
              },
              className: textStyles,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
                className: "alert-text",
                children: [content, " ", textLinkProps && /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextLink["default"], {
                  label: textLinkProps.label,
                  href: textLinkProps.href,
                  openWindows: textLinkProps.openWindows || false,
                  download: textLinkProps.download || false,
                  onClick: onTextLinkClicked
                })]
              })
            }), (isOverflowed || expanded) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
              className: "show-more-button",
              variant: "tertiary",
              onClick: this.expandAction,
              children: "Show ".concat(showLabel)
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
            className: (0, _classnames["default"])("alert-button", {
              "dismiss": !isButtonWithText
            }),
            label: isButtonWithText ? action.label || (action.type === "acknowledge" ? "Ok" : "Open") : undefined,
            icon: !isButtonWithText ? "x" : undefined,
            size: isButtonWithText ? "md" : "lg",
            onClick: this.buttonClicked,
            variant: "inherit"
          })]
        })
      }) : null;
    }
  }]);

  return Alert;
}(React.Component);

Alert.defaultProps = {
  expanded: false,
  manageExpanded: false,
  color: "blue",
  onExpandAction: function onExpandAction() {
    return void 0;
  },
  action: {
    type: "dismiss"
  },
  onTextLinkClicked: function onTextLinkClicked() {
    return void 0;
  },
  onButtonClick: function onButtonClick() {
    return void 0;
  },
  onCloseAction: function onCloseAction() {
    return void 0;
  },
  visible: true,
  manageVisibility: false,
  manageButtonClick: false
};
Alert.propTypes = {
  action: _propTypes["default"].shape({
    type: _propTypes["default"].oneOf(["dismiss", "acknowledge", "open"]).isRequired,
    href: _propTypes["default"].string,
    label: _propTypes["default"].string
  }),
  content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  expanded: _propTypes["default"].bool,
  header: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  manageExpanded: _propTypes["default"].bool,
  color: _propTypes["default"].oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
  textLinkProps: _propTypes["default"].shape({
    label: _propTypes["default"].string,
    href: _propTypes["default"].string,
    openWindows: _propTypes["default"].bool,
    download: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
  }),
  onExpandAction: _propTypes["default"].func,
  onTextLinkClicked: _propTypes["default"].func,
  onButtonClick: _propTypes["default"].func,
  visible: _propTypes["default"].bool,
  manageVisibility: _propTypes["default"].bool,
  delay: _propTypes["default"].number,
  onCloseAction: _propTypes["default"].func,
  manageButtonClick: _propTypes["default"].bool
};
var _default = Alert;
exports["default"] = _default;