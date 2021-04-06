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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

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
    _this.contentResized = _this.contentResized.bind(_assertThisInitialized(_this));
    _this.state = {
      opened: false,
      haveScroll: false,
      contentHeight: 0
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
          onresize: this.contentResized(),
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
    key: "contentResized",
    value: function () {
      var _contentResized = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this$state, opened, contentHeight, el, curHeight;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$state = this.state, opened = _this$state.opened, contentHeight = _this$state.contentHeight;

                if (!this.contentRef) {
                  _context.next = 8;
                  break;
                }

                el = this.contentRef.children[0];
                curHeight = contentHeight;
                _context.next = 6;
                return sleep(100);

              case 6:
                curHeight = el.scrollHeight;

                if (curHeight !== contentHeight) {
                  this.setState({
                    contentHeight: curHeight
                  });
                  this.resetStyles();
                  if (opened) this.setStylesToContent();
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function contentResized() {
        return _contentResized.apply(this, arguments);
      }

      return contentResized;
    }()
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
            roundBorder = _this$props5.roundBorder,
            contentStyles = _this$props5.contentStyles;
        var padding = contentStyles && contentStyles['padding'].split('px')[0];
        var contentElement = this.contentRef;
        var targetDimensions = this.targetRef.getBoundingClientRect();
        var contentDimensions = contentElement.getBoundingClientRect();
        var windowParam = {
          startY: 0,
          startX: 0,
          endY: window.innerHeight,
          endX: window.innerWidth
        };
        var stylesInfo = (0, _utils.getPopoverStyle)(positions, targetDimensions, contentDimensions, windowParam, hideTail, roundBorder, padding);
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
        contentElement.children[0].style.maxHeight = contentElement.style.height || contentElement.style.maxHeight;
        contentElement.children[0].style.maxWidth = contentElement.style.width || contentElement.style.maxWidth;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qb3BvdmVyL1BvcG92ZXIuanMiXSwibmFtZXMiOlsic2xlZXAiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIlBvcG92ZXIiLCJwcm9wcyIsInRhcmdldENsaWNrZWQiLCJiaW5kIiwiZG9jdW1lbnRDbGlja2VkIiwiY2hhbmdlT3BlbmVkU3RhdGUiLCJ1cGRhdGVPcGVuZWRTdGF0ZSIsImNvbnRlbnRSZXNpemVkIiwic3RhdGUiLCJvcGVuZWQiLCJoYXZlU2Nyb2xsIiwiY29udGVudEhlaWdodCIsInRhcmdldFJlZiIsImNvbnRlbnRSZWYiLCJjaGlsZHJlbiIsInJvdW5kQm9yZGVyIiwiY29udGVudFN0eWxlcyIsImNvbnRlbnQiLCJlbCIsInBvc2l0aW9uVGFyZ2V0IiwidGFyZ2V0IiwiY3VycmVudCIsInJlc2V0U3R5bGVzIiwic2V0U3R5bGVzVG9Db250ZW50Iiwib25jbGljayIsImUiLCJjdXJIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJzZXRTdGF0ZSIsIm1hbmFnZU9wZW5lZCIsImN1cnJlbnRTdGF0ZSIsInByZXZlbnREZWZhdWx0Iiwib25UYXJnZXRDbGljayIsImNsaWVudFgiLCJjbGllbnRZIiwidmFsdWUiLCJldmVudCIsIm9uT3V0ZXJQb3BvdmVyQ2xpY2tlZCIsInBvaW50WCIsInBvaW50WSIsImNvbnRlbnRFbGVtZW50IiwidGFyZ2V0RWxlbWVudCIsImlzT3V0c2lkZUNvbnRlbnQiLCJpc091dHNpZGVUYXJnZXQiLCJwb3NpdGlvbnMiLCJoaWRlVGFpbCIsInBhZGRpbmciLCJzcGxpdCIsInRhcmdldERpbWVuc2lvbnMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjb250ZW50RGltZW5zaW9ucyIsIndpbmRvd1BhcmFtIiwic3RhcnRZIiwic3RhcnRYIiwiZW5kWSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZW5kWCIsImlubmVyV2lkdGgiLCJzdHlsZXNJbmZvIiwic3R5bGVzIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJsZWZ0IiwidG9wIiwidmlzaWJpbGl0eSIsIm1heEhlaWdodCIsIm1heFdpZHRoIiwiaGFzQXJyb3ciLCJPYmplY3QiLCJlbnRyaWVzIiwiYXJyb3dTdHlsZSIsImtleSIsInNldFByb3BlcnR5IiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW4iLCJwcmV2UHJvcHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXJDb250ZW50IiwicmVuZGVyVGFyZ2V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJDb250ZW50IiwiVGFyZ2V0IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsIm9uZU9mVHlwZSIsImZ1bmMiLCJzaGFwZSIsImFueSIsImFycmF5T2YiLCJzdHJpbmciLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxFQUFmLEVBQW1CO0FBQ2YsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQUMsT0FBTztBQUFBLFdBQUlDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVRixFQUFWLENBQWQ7QUFBQSxHQUFuQixDQUFQO0FBQ0g7O0lBRUtJLE87Ozs7O0FBQ0YsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsK0JBQXJCO0FBQ0EsVUFBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCRCxJQUFyQiwrQkFBdkI7QUFDQSxVQUFLRSxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkYsSUFBdkIsK0JBQXpCO0FBQ0EsVUFBS0csaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJILElBQXZCLCtCQUF6QjtBQUNBLFVBQUtJLGNBQUwsR0FBc0Is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QUUsb0NBSlE7QUFLbkI3QixFQUFBQSxXQUFXLEVBQUUsSUFMTTtBQU1uQmlCLEVBQUFBLGFBQWEsRUFBRTtBQUFBLFdBQU0sS0FBSyxDQUFYO0FBQUEsR0FOSTtBQU9uQkssRUFBQUEscUJBQXFCLEVBQUU7QUFBQSxXQUFNLEtBQUssQ0FBWDtBQUFBO0FBUEosQ0FBdkI7QUFVQXJDLE9BQU8sQ0FBQ3VGLFNBQVIsR0FBb0I7QUFDaEIxQyxFQUFBQSxRQUFRLEVBQUUwQyxzQkFBVUMsSUFESjtBQUVoQjNELEVBQUFBLFlBQVksRUFBRTBELHNCQUFVQyxJQUZSO0FBR2hCL0UsRUFBQUEsTUFBTSxFQUFFOEUsc0JBQVVDLElBSEY7QUFJaEJyRSxFQUFBQSxjQUFjLEVBQUVvRSxzQkFBVUUsU0FBVixDQUFvQixDQUNoQ0Ysc0JBQVVHLElBRHNCLEVBRWhDSCxzQkFBVUksS0FBVixDQUFnQjtBQUFFdEUsSUFBQUEsT0FBTyxFQUFFa0Usc0JBQVVLO0FBQXJCLEdBQWhCLENBRmdDLENBQXBCLENBSkE7QUFRaEJoRCxFQUFBQSxTQUFTLEVBQUUyQyxzQkFBVU0sT0FBVixDQUFrQk4sc0JBQVVJLEtBQVYsQ0FBZ0I7QUFDekN2RSxJQUFBQSxNQUFNLEVBQUVtRSxzQkFBVU8sTUFEdUI7QUFFekM3RSxJQUFBQSxPQUFPLEVBQUVzRSxzQkFBVU87QUFGc0IsR0FBaEIsQ0FBbEIsQ0FSSztBQVloQjlELEVBQUFBLGFBQWEsRUFBRXVELHNCQUFVRyxJQVpUO0FBYWhCckQsRUFBQUEscUJBQXFCLEVBQUVrRCxzQkFBVUcsSUFiakI7QUFjaEIzRSxFQUFBQSxXQUFXLEVBQUV3RSxzQkFBVUMsSUFkUDtBQWVoQnhFLEVBQUFBLGFBQWEsRUFBRXVFLHNCQUFVUTtBQWZULENBQXBCO2VBa0JlL0YsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgZmluZEJ5VHlwZSwge2NyZWF0ZVN1YkNvbXBvbmVudH0gZnJvbSBcIi4uL3V0aWxzL2ZpbmRCeVR5cGVcIjtcclxuaW1wb3J0IHtnZXRBbGxQb3NzaWJsZVZhcmlhbnRzLCBnZXRQb3BvdmVyU3R5bGV9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7aXNQb2ludEluc2lkZVRoZUVsZW1lbnR9IGZyb20gXCIuLi9EYXRlUGlja2VyL3V0aWxzXCI7XHJcblxyXG5mdW5jdGlvbiBzbGVlcChtcykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG59XHJcblxyXG5jbGFzcyBQb3BvdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0Q2xpY2tlZCA9IHRoaXMudGFyZ2V0Q2xpY2tlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZG9jdW1lbnRDbGlja2VkID0gdGhpcy5kb2N1bWVudENsaWNrZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNoYW5nZU9wZW5lZFN0YXRlID0gdGhpcy5jaGFuZ2VPcGVuZWRTdGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3BlbmVkU3RhdGUgPSB0aGlzLnVwZGF0ZU9wZW5lZFN0YXRlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50UmVzaXplZCA9IHRoaXMuY29udGVudFJlc2l6ZWQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgb3BlbmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaGF2ZVNjcm9sbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRlbnRIZWlnaHQ6IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGFyZ2V0UmVmID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWYgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNvbnRlbnQoKSB7XHJcbiAgICAgICAgY29uc3Qge2NoaWxkcmVuLCByb3VuZEJvcmRlciwgY29udGVudFN0eWxlc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBcIkNvbnRlbnRcIik7XHJcblxyXG4gICAgICAgIGlmICghY29udGVudClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3BvdmVyLWNvbnRlbnRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub1JvdW5kQm9yZGVyXCI6ICFyb3VuZEJvcmRlclxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4gdGhpcy5jb250ZW50UmVmID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e2NvbnRlbnRTdHlsZXN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wicG9wb3Zlci1jb250ZW50LWtlZXBlclwifVxyXG4gICAgICAgICAgICAgICAgICAgIG9ucmVzaXplPXt0aGlzLmNvbnRlbnRSZXNpemVkKCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVGFyZ2V0KCkge1xyXG4gICAgICAgIGNvbnN0IHtjaGlsZHJlbiwgcG9zaXRpb25UYXJnZXR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBcIlRhcmdldFwiKTtcclxuXHJcbiAgICAgICAgaWYocG9zaXRpb25UYXJnZXQpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnRhcmdldFJlZiA9PT0gbnVsbCB8fCB0aGlzLnRhcmdldFJlZiE9PXBvc2l0aW9uVGFyZ2V0LmN1cnJlbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UmVmID0gcG9zaXRpb25UYXJnZXQuY3VycmVudDtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuY29udGVudFJlZil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFN0eWxlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUub3BlbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0eWxlc1RvQ29udGVudCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0UmVmLm9uY2xpY2sgPSAoZSkgPT4gdGhpcy50YXJnZXRDbGlja2VkKGUpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0YXJnZXQpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wicG9wb3Zlci10YXJnZXRcIn1cclxuICAgICAgICAgICAgICAgICAgICByZWY9eyBlbCA9PiB0aGlzLnRhcmdldFJlZiA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoZSkgPT4gdGhpcy50YXJnZXRDbGlja2VkKGUpIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YXJnZXR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29udGVudFJlc2l6ZWQoKSB7XHJcbiAgICAgICAgY29uc3Qge29wZW5lZCwgY29udGVudEhlaWdodH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnRSZWYpIHtcclxuICAgICAgICAgICAgbGV0IGVsID0gdGhpcy5jb250ZW50UmVmLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICBsZXQgY3VySGVpZ2h0ID0gY29udGVudEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHNsZWVwKDEwMCk7XHJcbiAgICAgICAgICAgIGN1ckhlaWdodCA9IGVsLnNjcm9sbEhlaWdodDtcclxuICAgICAgICAgICAgaWYgKGN1ckhlaWdodCAhPT0gY29udGVudEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29udGVudEhlaWdodDogY3VySGVpZ2h0fSlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0U3R5bGVzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob3BlbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3R5bGVzVG9Db250ZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlT3BlbmVkU3RhdGUoKXtcclxuICAgICAgICBjb25zdCB7bWFuYWdlT3BlbmVkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTdGF0ZSA9IHRoaXMuc3RhdGUub3BlbmVkO1xyXG5cclxuICAgICAgICBpZighbWFuYWdlT3BlbmVkKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9ICFjdXJyZW50U3RhdGVcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVPcGVuZWRTdGF0ZShjdXJyZW50U3RhdGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRhcmdldENsaWNrZWQgKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7bWFuYWdlT3BlbmVkLCBvblRhcmdldENsaWNrfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge29wZW5lZH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBpZihpc1BvaW50SW5zaWRlVGhlRWxlbWVudCh0aGlzLnRhcmdldFJlZiwgZS5jbGllbnRYLCBlLmNsaWVudFkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlT3BlbmVkU3RhdGUoKTtcclxuICAgICAgICAgICAgb25UYXJnZXRDbGljayh7dmFsdWU6IG1hbmFnZU9wZW5lZCA/IG9wZW5lZCA6ICFvcGVuZWR9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudENsaWNrZWQoZXZlbnQpe1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VPcGVuZWQsIG9uT3V0ZXJQb3BvdmVyQ2xpY2tlZH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBwb2ludFggPSBldmVudC5jbGllbnRYO1xyXG4gICAgICAgIGxldCBwb2ludFkgPSBldmVudC5jbGllbnRZO1xyXG4gICAgICAgIGxldCBjdXJyZW50U3RhdGUgPSB0aGlzLnN0YXRlLm9wZW5lZDtcclxuICAgICAgICBsZXQgY29udGVudEVsZW1lbnQgPSB0aGlzLmNvbnRlbnRSZWY7XHJcbiAgICAgICAgbGV0IHRhcmdldEVsZW1lbnQgPSB0aGlzLnRhcmdldFJlZjtcclxuXHJcbiAgICAgICAgaWYoIGN1cnJlbnRTdGF0ZSAmJiBjb250ZW50RWxlbWVudCAmJiB0YXJnZXRFbGVtZW50KSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXNPdXRzaWRlQ29udGVudCA9ICFpc1BvaW50SW5zaWRlVGhlRWxlbWVudChjb250ZW50RWxlbWVudCwgcG9pbnRYLCBwb2ludFkpO1xyXG4gICAgICAgICAgICBsZXQgaXNPdXRzaWRlVGFyZ2V0ID0gIWlzUG9pbnRJbnNpZGVUaGVFbGVtZW50KHRhcmdldEVsZW1lbnQsIHBvaW50WCwgcG9pbnRZKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGlzT3V0c2lkZUNvbnRlbnQgJiYgaXNPdXRzaWRlVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBpZighbWFuYWdlT3BlbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlT3BlbmVkU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIG9uT3V0ZXJQb3BvdmVyQ2xpY2tlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFN0eWxlc1RvQ29udGVudCgpIHtcclxuICAgICAgICBpZih0aGlzLmNvbnRlbnRSZWYgJiYgdGhpcy50YXJnZXRSZWYpIHtcclxuICAgICAgICAgICAgY29uc3Qge3Bvc2l0aW9ucywgaGlkZVRhaWwsIHJvdW5kQm9yZGVyLCBjb250ZW50U3R5bGVzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFkZGluZyA9IGNvbnRlbnRTdHlsZXMgJiYgY29udGVudFN0eWxlc1sncGFkZGluZyddLnNwbGl0KCdweCcpWzBdIDtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnRFbGVtZW50ID0gdGhpcy5jb250ZW50UmVmO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0RGltZW5zaW9ucyA9IHRoaXMudGFyZ2V0UmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICAgIGxldCBjb250ZW50RGltZW5zaW9ucyA9IGNvbnRlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHdpbmRvd1BhcmFtID0ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRZOiAwLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRYOiAwLFxyXG4gICAgICAgICAgICAgICAgZW5kWTogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgZW5kWDogd2luZG93LmlubmVyV2lkdGhcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHN0eWxlc0luZm8gPSBnZXRQb3BvdmVyU3R5bGUocG9zaXRpb25zLCB0YXJnZXREaW1lbnNpb25zLCBjb250ZW50RGltZW5zaW9ucywgd2luZG93UGFyYW0sIGhpZGVUYWlsLCByb3VuZEJvcmRlciwgcGFkZGluZyk7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZXMgPSBzdHlsZXNJbmZvLnN0eWxlO1xyXG5cclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gc3R5bGVzLnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUubGVmdCA9IHN0eWxlcy5sZWZ0O1xyXG4gICAgICAgICAgICBjb250ZW50RWxlbWVudC5zdHlsZS50b3AgPSBzdHlsZXMudG9wO1xyXG4gICAgICAgICAgICBjb250ZW50RWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcblxyXG4gICAgICAgICAgICBpZihzdHlsZXMubWF4SGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgY29udGVudEVsZW1lbnQuY2hpbGRyZW5bMF0uc3R5bGUubWF4SGVpZ2h0ID0gc3R5bGVzLm1heEhlaWdodCA7XHJcbiAgICAgICAgICAgIGlmKHN0eWxlcy5tYXhXaWR0aClcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LmNoaWxkcmVuWzBdLnN0eWxlLm1heFdpZHRoID0gc3R5bGVzLm1heFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFoaWRlVGFpbCAmJiBzdHlsZXNJbmZvLmhhc0Fycm93KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzdHlsZXNJbmZvLmFycm93U3R5bGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0U3R5bGVzKCl7XHJcbiAgICAgICAgbGV0IGNvbnRlbnRFbGVtZW50ID0gdGhpcy5jb250ZW50UmVmO1xyXG4gICAgICAgIGlmKGNvbnRlbnRFbGVtZW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCAwLCAwKWA7XHJcbiAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnN0eWxlLmxlZnQgPSAgMDtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUudG9wID0gMDtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuY2hpbGRyZW5bMF0uc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0IHx8IGNvbnRlbnRFbGVtZW50LnN0eWxlLm1heEhlaWdodDtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuY2hpbGRyZW5bMF0uc3R5bGUubWF4V2lkdGggPSBjb250ZW50RWxlbWVudC5zdHlsZS53aWR0aCB8fCBjb250ZW50RWxlbWVudC5zdHlsZS5tYXhXaWR0aDtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUubWFyZ2luID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlT3BlbmVkU3RhdGUodmFsdWUpe1xyXG4gICAgICAgIGlmKHZhbHVlKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0eWxlc1RvQ29udGVudCgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5yZXNldFN0eWxlcygpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWQ6IHZhbHVlfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcyl7XHJcbiAgICAgICAgbGV0IHtvcGVuZWQsIG1hbmFnZU9wZW5lZH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZihtYW5hZ2VPcGVuZWQgJiYgb3BlbmVkIT09IHRoaXMuc3RhdGUub3BlbmVkKVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9wZW5lZFN0YXRlKG9wZW5lZClcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gdGhpcy5kb2N1bWVudENsaWNrZWQoZSkpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3BlbmVkU3RhdGUodGhpcy5wcm9wcy5vcGVuZWQpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb250ZW50KCl9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUYXJnZXQoKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufTtcclxuXHJcblBvcG92ZXIuQ29udGVudCA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkNvbnRlbnRcIik7XHJcblBvcG92ZXIuVGFyZ2V0ID0gY3JlYXRlU3ViQ29tcG9uZW50KFwiVGFyZ2V0XCIpO1xyXG5cclxuUG9wb3Zlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBoaWRlVGFpbDogZmFsc2UsXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IGZhbHNlLFxyXG4gICAgb3BlbmVkOiBmYWxzZSxcclxuICAgIHBvc2l0aW9uczogZ2V0QWxsUG9zc2libGVWYXJpYW50cygpLFxyXG4gICAgcm91bmRCb3JkZXI6IHRydWUsXHJcbiAgICBvblRhcmdldENsaWNrOiAoKSA9PiB2b2lkIDAsXHJcbiAgICBvbk91dGVyUG9wb3ZlckNsaWNrZWQ6ICgpID0+IHZvaWQgMFxyXG59XHJcblxyXG5Qb3BvdmVyLnByb3BUeXBlcyA9IHtcclxuICAgIGhpZGVUYWlsOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZU9wZW5lZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgcG9zaXRpb25UYXJnZXQ6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIHByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIHByb3BUeXBlcy5zaGFwZSh7IGN1cnJlbnQ6IHByb3BUeXBlcy5hbnkgfSlcclxuICAgIF0pLFxyXG4gICAgcG9zaXRpb25zOiBwcm9wVHlwZXMuYXJyYXlPZihwcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHRhcmdldDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBjb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSkpLFxyXG4gICAgb25UYXJnZXRDbGljazogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbk91dGVyUG9wb3ZlckNsaWNrZWQ6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgcm91bmRCb3JkZXI6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgY29udGVudFN0eWxlczogcHJvcFR5cGVzLm9iamVjdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyIl19