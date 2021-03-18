"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _findByType = _interopRequireWildcard(require("../utils/findByType"));

var _utils = require("./utils");

var _classnames = _interopRequireDefault(require("classnames"));

var _utils2 = require("../DatePicker/utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var Popover = /*#__PURE__*/function (_React$Component) {
  _inherits(Popover, _React$Component);

  var _super = _createSuper(Popover);

  function Popover(props) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _super.call(this, props);
    _this.targetClicked = _this.targetClicked.bind(_assertThisInitialized(_this));
    _this.documentClicked = _this.documentClicked.bind(_assertThisInitialized(_this));
    _this.changeOpenedState = _this.changeOpenedState.bind(_assertThisInitialized(_this));
    _this.updateOpenedState = _this.updateOpenedState.bind(_assertThisInitialized(_this));
    _this.state = {
      opened: false
    };
    _this.targetRef = null;
    _this.contentRef = null;
    return _this;
  }

  _createClass(Popover, [{
    key: "renderContent",
    value: function renderContent() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          roundBorder = _this$props.roundBorder,
          contentStyles = _this$props.contentStyles;
      var content = (0, _findByType["default"])(children, "Content");
      if (!content) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames["default"])({
          "popover-content": true,
          "noRoundBorder": !roundBorder
        }),
        ref: function ref(el) {
          return _this2.contentRef = el;
        },
        style: contentStyles,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "popover-content-keeper",
          children: content
        })
      });
    }
  }, {
    key: "renderTarget",
    value: function renderTarget() {
      var _this3 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          positionTarget = _this$props2.positionTarget;
      var target = (0, _findByType["default"])(children, "Target");

      if (positionTarget) {
        if (this.targetRef === null || this.targetRef !== positionTarget.current) {
          this.targetRef = positionTarget.current;

          if (this.contentRef) {
            this.resetStyles();
            if (this.state.opened) this.setStylesToContent();
          }
        }

        this.targetRef.onclick = function (e) {
          return _this3.targetClicked(e);
        };

        return null;
      }

      if (!target) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "popover-target",
        ref: function ref(el) {
          return _this3.targetRef = el;
        },
        onClick: function onClick(e) {
          return _this3.targetClicked(e);
        },
        children: target
      });
    }
  }, {
    key: "changeOpenedState",
    value: function changeOpenedState() {
      var manageOpened = this.props.manageOpened;
      var currentState = this.state.opened;

      if (!manageOpened) {
        currentState = !currentState;
        this.updateOpenedState(currentState);
      }
    }
  }, {
    key: "targetClicked",
    value: function targetClicked(e) {
      e.preventDefault();
      var _this$props3 = this.props,
          manageOpened = _this$props3.manageOpened,
          onTargetClick = _this$props3.onTargetClick;
      var opened = this.state.opened;

      if ((0, _utils2.isPointInsideTheElement)(this.targetRef, e.clientX, e.clientY)) {
        this.changeOpenedState();
        onTargetClick({
          value: manageOpened ? opened : !opened
        });
      }
    }
  }, {
    key: "documentClicked",
    value: function documentClicked(event) {
      var _this$props4 = this.props,
          manageOpened = _this$props4.manageOpened,
          onOuterPopoverClicked = _this$props4.onOuterPopoverClicked;
      event.preventDefault();
      var pointX = event.clientX;
      var pointY = event.clientY;
      var currentState = this.state.opened;
      var contentElement = this.contentRef;
      var targetElement = this.targetRef;

      if (currentState && contentElement && targetElement) {
        var isOutsideContent = !(0, _utils2.isPointInsideTheElement)(contentElement, pointX, pointY);
        var isOutsideTarget = !(0, _utils2.isPointInsideTheElement)(targetElement, pointX, pointY);

        if (isOutsideContent && isOutsideTarget) {
          if (!manageOpened) this.changeOpenedState();
          onOuterPopoverClicked();
        }
      }
    }
  }, {
    key: "setStylesToContent",
    value: function setStylesToContent() {
      if (this.contentRef && this.targetRef) {
        var _this$props5 = this.props,
            positions = _this$props5.positions,
            hideTail = _this$props5.hideTail,
            roundBorder = _this$props5.roundBorder;
        var contentElement = this.contentRef;
        var targetDimensions = this.targetRef.getBoundingClientRect();
        var contentDimensions = contentElement.getBoundingClientRect();
        var windowParam = {
          startY: 0,
          startX: 0,
          endY: window.innerHeight,
          endX: window.innerWidth
        };
        var stylesInfo = (0, _utils.getPopoverStyle)(positions, targetDimensions, contentDimensions, windowParam, hideTail, roundBorder);
        var styles = stylesInfo.style;
        contentElement.style.transform = styles.transform;
        contentElement.style.left = styles.left;
        contentElement.style.top = styles.top;
        contentElement.style.visibility = "visible";
        if (styles.maxHeight) contentElement.children[0].style.maxHeight = styles.maxHeight;
        if (styles.maxWidth) contentElement.children[0].style.maxWidth = styles.maxWidth;

        if (!hideTail && stylesInfo.hasArrow) {
          for (var _i = 0, _Object$entries = Object.entries(stylesInfo.arrowStyle); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            contentElement.style.setProperty(key, value);
          }
        }
      }
    }
  }, {
    key: "resetStyles",
    value: function resetStyles() {
      var contentElement = this.contentRef;

      if (contentElement) {
        contentElement.style.visibility = "hidden";
        contentElement.style.transform = "translate3d(0, 0, 0)";
        contentElement.style.left = 0;
        contentElement.style.top = 0;
        contentElement.children[0].style.maxHeight = 'none';
        contentElement.children[0].style.maxWidth = 'none';
        contentElement.style.margin = 0;
      }
    }
  }, {
    key: "updateOpenedState",
    value: function updateOpenedState(value) {
      if (value) this.setStylesToContent();else this.resetStyles();
      this.setState({
        opened: value
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props,
          opened = _this$props6.opened,
          manageOpened = _this$props6.manageOpened;
      if (manageOpened && opened !== this.state.opened) this.updateOpenedState(opened);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      document.addEventListener("click", function (e) {
        return _this4.documentClicked(e);
      });
      this.updateOpenedState(this.props.opened);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [this.renderContent(), this.renderTarget()]
      });
    }
  }]);

  return Popover;
}(React.Component);

;
Popover.Content = (0, _findByType.createSubComponent)("Content");
Popover.Target = (0, _findByType.createSubComponent)("Target");
Popover.defaultProps = {
  hideTail: false,
  manageOpened: false,
  opened: false,
  positions: (0, _utils.getAllPossibleVariants)(),
  roundBorder: true,
  onTargetClick: function onTargetClick() {
    return void 0;
  },
  onOuterPopoverClicked: function onOuterPopoverClicked() {
    return void 0;
  }
};
Popover.propTypes = {
  hideTail: _propTypes["default"].bool,
  manageOpened: _propTypes["default"].bool,
  opened: _propTypes["default"].bool,
  positionTarget: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].any
  })]),
  positions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    target: _propTypes["default"].string,
    content: _propTypes["default"].string
  })),
  onTargetClick: _propTypes["default"].func,
  onOuterPopoverClicked: _propTypes["default"].func,
  roundBorder: _propTypes["default"].bool,
  contentStyles: _propTypes["default"].object
};
var _default = Popover;
exports["default"] = _default;