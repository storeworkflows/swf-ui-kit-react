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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qb3BvdmVyL1BvcG92ZXIuanMiXSwibmFtZXMiOlsiUG9wb3ZlciIsInByb3BzIiwidGFyZ2V0Q2xpY2tlZCIsImJpbmQiLCJkb2N1bWVudENsaWNrZWQiLCJjaGFuZ2VPcGVuZWRTdGF0ZSIsInVwZGF0ZU9wZW5lZFN0YXRlIiwic3RhdGUiLCJvcGVuZWQiLCJ0YXJnZXRSZWYiLCJjb250ZW50UmVmIiwiY2hpbGRyZW4iLCJyb3VuZEJvcmRlciIsImNvbnRlbnRTdHlsZXMiLCJjb250ZW50IiwiZWwiLCJwb3NpdGlvblRhcmdldCIsInRhcmdldCIsImN1cnJlbnQiLCJyZXNldFN0eWxlcyIsInNldFN0eWxlc1RvQ29udGVudCIsIm9uY2xpY2siLCJlIiwibWFuYWdlT3BlbmVkIiwiY3VycmVudFN0YXRlIiwicHJldmVudERlZmF1bHQiLCJvblRhcmdldENsaWNrIiwiY2xpZW50WCIsImNsaWVudFkiLCJ2YWx1ZSIsImV2ZW50Iiwib25PdXRlclBvcG92ZXJDbGlja2VkIiwicG9pbnRYIiwicG9pbnRZIiwiY29udGVudEVsZW1lbnQiLCJ0YXJnZXRFbGVtZW50IiwiaXNPdXRzaWRlQ29udGVudCIsImlzT3V0c2lkZVRhcmdldCIsInBvc2l0aW9ucyIsImhpZGVUYWlsIiwidGFyZ2V0RGltZW5zaW9ucyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnRlbnREaW1lbnNpb25zIiwid2luZG93UGFyYW0iLCJzdGFydFkiLCJzdGFydFgiLCJlbmRZIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJlbmRYIiwiaW5uZXJXaWR0aCIsInN0eWxlc0luZm8iLCJzdHlsZXMiLCJzdHlsZSIsInRyYW5zZm9ybSIsImxlZnQiLCJ0b3AiLCJ2aXNpYmlsaXR5IiwibWF4SGVpZ2h0IiwibWF4V2lkdGgiLCJoYXNBcnJvdyIsIk9iamVjdCIsImVudHJpZXMiLCJhcnJvd1N0eWxlIiwia2V5Iiwic2V0UHJvcGVydHkiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsInNldFN0YXRlIiwicHJldlByb3BzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyQ29udGVudCIsInJlbmRlclRhcmdldCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udGVudCIsIlRhcmdldCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImJvb2wiLCJvbmVPZlR5cGUiLCJmdW5jIiwic2hhcGUiLCJhbnkiLCJhcnJheU9mIiwic3RyaW5nIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE87Ozs7O0FBQ0YsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsK0JBQXJCO0FBQ0EsVUFBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCRCxJQUFyQiwrQkFBdkI7QUFDQSxVQUFLRSxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkYsSUFBdkIsK0JBQXpCO0FBQ0EsVUFBS0csaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJILElBQXZCLCtCQUF6QjtBQUVBLFVBQUtJLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxNQUFNLEVBQUU7QUFEQyxLQUFiO0FBSUEsVUFBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFaZTtBQWFsQjs7OztXQUVELHlCQUFnQjtBQUFBOztBQUFBLHdCQUNtQyxLQUFLVCxLQUR4QztBQUFBLFVBQ0xVLFFBREssZUFDTEEsUUFESztBQUFBLFVBQ0tDLFdBREwsZUFDS0EsV0FETDtBQUFBLFVBQ2tCQyxhQURsQixlQUNrQkEsYUFEbEI7QUFFWixVQUFNQyxPQUFPLEdBQUcsNEJBQVdILFFBQVgsRUFBcUIsU0FBckIsQ0FB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QUFBLFFBQVEsRUFBRXlDLHNCQUFVQyxJQURKO0FBRWhCMUQsRUFBQUEsWUFBWSxFQUFFeUQsc0JBQVVDLElBRlI7QUFHaEJ6RSxFQUFBQSxNQUFNLEVBQUV3RSxzQkFBVUMsSUFIRjtBQUloQmpFLEVBQUFBLGNBQWMsRUFBRWdFLHNCQUFVRSxTQUFWLENBQW9CLENBQ2hDRixzQkFBVUcsSUFEc0IsRUFFaENILHNCQUFVSSxLQUFWLENBQWdCO0FBQUVsRSxJQUFBQSxPQUFPLEVBQUU4RCxzQkFBVUs7QUFBckIsR0FBaEIsQ0FGZ0MsQ0FBcEIsQ0FKQTtBQVFoQi9DLEVBQUFBLFNBQVMsRUFBRTBDLHNCQUFVTSxPQUFWLENBQWtCTixzQkFBVUksS0FBVixDQUFnQjtBQUN6Q25FLElBQUFBLE1BQU0sRUFBRStELHNCQUFVTyxNQUR1QjtBQUV6Q3pFLElBQUFBLE9BQU8sRUFBRWtFLHNCQUFVTztBQUZzQixHQUFoQixDQUFsQixDQVJLO0FBWWhCN0QsRUFBQUEsYUFBYSxFQUFFc0Qsc0JBQVVHLElBWlQ7QUFhaEJwRCxFQUFBQSxxQkFBcUIsRUFBRWlELHNCQUFVRyxJQWJqQjtBQWNoQnZFLEVBQUFBLFdBQVcsRUFBRW9FLHNCQUFVQyxJQWRQO0FBZWhCcEUsRUFBQUEsYUFBYSxFQUFFbUUsc0JBQVVRO0FBZlQsQ0FBcEI7ZUFrQmV4RixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCBmaW5kQnlUeXBlLCB7Y3JlYXRlU3ViQ29tcG9uZW50fSBmcm9tIFwiLi4vdXRpbHMvZmluZEJ5VHlwZVwiO1xyXG5pbXBvcnQge2dldEFsbFBvc3NpYmxlVmFyaWFudHMsIGdldFBvcG92ZXJTdHlsZX0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHtpc1BvaW50SW5zaWRlVGhlRWxlbWVudH0gZnJvbSBcIi4uL0RhdGVQaWNrZXIvdXRpbHNcIjtcclxuXHJcbmNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy50YXJnZXRDbGlja2VkID0gdGhpcy50YXJnZXRDbGlja2VkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kb2N1bWVudENsaWNrZWQgPSB0aGlzLmRvY3VtZW50Q2xpY2tlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlT3BlbmVkU3RhdGUgPSB0aGlzLmNoYW5nZU9wZW5lZFN0YXRlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPcGVuZWRTdGF0ZSA9IHRoaXMudXBkYXRlT3BlbmVkU3RhdGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgb3BlbmVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXRSZWYgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29udGVudFJlZiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ29udGVudCgpIHtcclxuICAgICAgICBjb25zdCB7Y2hpbGRyZW4sIHJvdW5kQm9yZGVyLCBjb250ZW50U3R5bGVzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGZpbmRCeVR5cGUoY2hpbGRyZW4sIFwiQ29udGVudFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb250ZW50KVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBvcG92ZXItY29udGVudFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vUm91bmRCb3JkZXJcIjogIXJvdW5kQm9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgcmVmPXtlbCA9PiB0aGlzLmNvbnRlbnRSZWYgPSBlbH1cclxuICAgICAgICAgICAgICAgICBzdHlsZT17Y29udGVudFN0eWxlc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicG9wb3Zlci1jb250ZW50LWtlZXBlclwifT57Y29udGVudH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJUYXJnZXQoKSB7XHJcbiAgICAgICAgY29uc3Qge2NoaWxkcmVuLCBwb3NpdGlvblRhcmdldH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGZpbmRCeVR5cGUoY2hpbGRyZW4sIFwiVGFyZ2V0XCIpO1xyXG5cclxuICAgICAgICBpZihwb3NpdGlvblRhcmdldCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGFyZ2V0UmVmID09PSBudWxsIHx8IHRoaXMudGFyZ2V0UmVmIT09cG9zaXRpb25UYXJnZXQuY3VycmVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRSZWYgPSBwb3NpdGlvblRhcmdldC5jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jb250ZW50UmVmKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0U3R5bGVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5vcGVuZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3R5bGVzVG9Db250ZW50KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy50YXJnZXRSZWYub25jbGljayA9IChlKSA9PiB0aGlzLnRhcmdldENsaWNrZWQoZSlcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRhcmdldClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJwb3BvdmVyLXRhcmdldFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17IGVsID0+IHRoaXMudGFyZ2V0UmVmID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IChlKSA9PiB0aGlzLnRhcmdldENsaWNrZWQoZSkgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RhcmdldH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VPcGVuZWRTdGF0ZSgpe1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VPcGVuZWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgY3VycmVudFN0YXRlID0gdGhpcy5zdGF0ZS5vcGVuZWQ7XHJcblxyXG4gICAgICAgIGlmKCFtYW5hZ2VPcGVuZWQpIHtcclxuICAgICAgICAgICAgY3VycmVudFN0YXRlID0gIWN1cnJlbnRTdGF0ZVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9wZW5lZFN0YXRlKGN1cnJlbnRTdGF0ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGFyZ2V0Q2xpY2tlZCAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VPcGVuZWQsIG9uVGFyZ2V0Q2xpY2t9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7b3BlbmVkfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmKGlzUG9pbnRJbnNpZGVUaGVFbGVtZW50KHRoaXMudGFyZ2V0UmVmLCBlLmNsaWVudFgsIGUuY2xpZW50WSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VPcGVuZWRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBvblRhcmdldENsaWNrKHt2YWx1ZTogbWFuYWdlT3BlbmVkID8gb3BlbmVkIDogIW9wZW5lZH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50Q2xpY2tlZChldmVudCl7XHJcbiAgICAgICAgY29uc3Qge21hbmFnZU9wZW5lZCwgb25PdXRlclBvcG92ZXJDbGlja2VkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbGV0IHBvaW50WCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgbGV0IHBvaW50WSA9IGV2ZW50LmNsaWVudFk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTdGF0ZSA9IHRoaXMuc3RhdGUub3BlbmVkO1xyXG4gICAgICAgIGxldCBjb250ZW50RWxlbWVudCA9IHRoaXMuY29udGVudFJlZjtcclxuICAgICAgICBsZXQgdGFyZ2V0RWxlbWVudCA9IHRoaXMudGFyZ2V0UmVmO1xyXG5cclxuICAgICAgICBpZiggY3VycmVudFN0YXRlICYmIGNvbnRlbnRFbGVtZW50ICYmIHRhcmdldEVsZW1lbnQpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBpc091dHNpZGVDb250ZW50ID0gIWlzUG9pbnRJbnNpZGVUaGVFbGVtZW50KGNvbnRlbnRFbGVtZW50LCBwb2ludFgsIHBvaW50WSk7XHJcbiAgICAgICAgICAgIGxldCBpc091dHNpZGVUYXJnZXQgPSAhaXNQb2ludEluc2lkZVRoZUVsZW1lbnQodGFyZ2V0RWxlbWVudCwgcG9pbnRYLCBwb2ludFkpO1xyXG5cclxuICAgICAgICAgICAgaWYoaXNPdXRzaWRlQ29udGVudCAmJiBpc091dHNpZGVUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIGlmKCFtYW5hZ2VPcGVuZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VPcGVuZWRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgb25PdXRlclBvcG92ZXJDbGlja2VkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3R5bGVzVG9Db250ZW50KCkge1xyXG4gICAgICAgIGlmKHRoaXMuY29udGVudFJlZiAmJiB0aGlzLnRhcmdldFJlZikge1xyXG4gICAgICAgICAgICBjb25zdCB7cG9zaXRpb25zLCBoaWRlVGFpbCwgcm91bmRCb3JkZXJ9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnRFbGVtZW50ID0gdGhpcy5jb250ZW50UmVmO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0RGltZW5zaW9ucyA9IHRoaXMudGFyZ2V0UmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICAgIGxldCBjb250ZW50RGltZW5zaW9ucyA9IGNvbnRlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHdpbmRvd1BhcmFtID0ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRZOiAwLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRYOiAwLFxyXG4gICAgICAgICAgICAgICAgZW5kWTogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgZW5kWDogd2luZG93LmlubmVyV2lkdGhcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHN0eWxlc0luZm8gPSBnZXRQb3BvdmVyU3R5bGUocG9zaXRpb25zLCB0YXJnZXREaW1lbnNpb25zLCBjb250ZW50RGltZW5zaW9ucywgd2luZG93UGFyYW0sIGhpZGVUYWlsLCByb3VuZEJvcmRlcik7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZXMgPSBzdHlsZXNJbmZvLnN0eWxlO1xyXG5cclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gc3R5bGVzLnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUubGVmdCA9IHN0eWxlcy5sZWZ0O1xyXG4gICAgICAgICAgICBjb250ZW50RWxlbWVudC5zdHlsZS50b3AgPSBzdHlsZXMudG9wO1xyXG4gICAgICAgICAgICBjb250ZW50RWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcblxyXG4gICAgICAgICAgICBpZihzdHlsZXMubWF4SGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgY29udGVudEVsZW1lbnQuY2hpbGRyZW5bMF0uc3R5bGUubWF4SGVpZ2h0ID0gc3R5bGVzLm1heEhlaWdodDtcclxuICAgICAgICAgICAgaWYoc3R5bGVzLm1heFdpZHRoKVxyXG4gICAgICAgICAgICAgICAgY29udGVudEVsZW1lbnQuY2hpbGRyZW5bMF0uc3R5bGUubWF4V2lkdGggPSBzdHlsZXMubWF4V2lkdGg7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhpZGVUYWlsICYmIHN0eWxlc0luZm8uaGFzQXJyb3cpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHN0eWxlc0luZm8uYXJyb3dTdHlsZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRTdHlsZXMoKXtcclxuICAgICAgICBsZXQgY29udGVudEVsZW1lbnQgPSB0aGlzLmNvbnRlbnRSZWY7XHJcbiAgICAgICAgaWYoY29udGVudEVsZW1lbnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb250ZW50RWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsIDAsIDApYDtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUubGVmdCA9ICAwO1xyXG4gICAgICAgICAgICBjb250ZW50RWxlbWVudC5zdHlsZS50b3AgPSAwO1xyXG4gICAgICAgICAgICBjb250ZW50RWxlbWVudC5jaGlsZHJlblswXS5zdHlsZS5tYXhIZWlnaHQgPSBjb250ZW50RWxlbWVudC5zdHlsZS5oZWlnaHQgfHwgY29udGVudEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0O1xyXG4gICAgICAgICAgICBjb250ZW50RWxlbWVudC5jaGlsZHJlblswXS5zdHlsZS5tYXhXaWR0aCA9IGNvbnRlbnRFbGVtZW50LnN0eWxlLndpZHRoIHx8IGNvbnRlbnRFbGVtZW50LnN0eWxlLm1heFdpZHRoO1xyXG4gICAgICAgICAgICBjb250ZW50RWxlbWVudC5zdHlsZS5tYXJnaW4gPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVPcGVuZWRTdGF0ZSh2YWx1ZSl7XHJcbiAgICAgICAgaWYodmFsdWUpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3R5bGVzVG9Db250ZW50KCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnJlc2V0U3R5bGVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZDogdmFsdWV9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKXtcclxuICAgICAgICBsZXQge29wZW5lZCwgbWFuYWdlT3BlbmVkfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmKG1hbmFnZU9wZW5lZCAmJiBvcGVuZWQhPT0gdGhpcy5zdGF0ZS5vcGVuZWQpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT3BlbmVkU3RhdGUob3BlbmVkKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB0aGlzLmRvY3VtZW50Q2xpY2tlZChlKSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPcGVuZWRTdGF0ZSh0aGlzLnByb3BzLm9wZW5lZClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbnRlbnQoKX1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhcmdldCgpfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuUG9wb3Zlci5Db250ZW50ID0gY3JlYXRlU3ViQ29tcG9uZW50KFwiQ29udGVudFwiKTtcclxuUG9wb3Zlci5UYXJnZXQgPSBjcmVhdGVTdWJDb21wb25lbnQoXCJUYXJnZXRcIik7XHJcblxyXG5Qb3BvdmVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGhpZGVUYWlsOiBmYWxzZSxcclxuICAgIG1hbmFnZU9wZW5lZDogZmFsc2UsXHJcbiAgICBvcGVuZWQ6IGZhbHNlLFxyXG4gICAgcG9zaXRpb25zOiBnZXRBbGxQb3NzaWJsZVZhcmlhbnRzKCksXHJcbiAgICByb3VuZEJvcmRlcjogdHJ1ZSxcclxuICAgIG9uVGFyZ2V0Q2xpY2s6ICgpID0+IHZvaWQgMCxcclxuICAgIG9uT3V0ZXJQb3BvdmVyQ2xpY2tlZDogKCkgPT4gdm9pZCAwXHJcbn1cclxuXHJcblBvcG92ZXIucHJvcFR5cGVzID0ge1xyXG4gICAgaGlkZVRhaWw6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG9wZW5lZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBwb3NpdGlvblRhcmdldDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgICAgcHJvcFR5cGVzLnNoYXBlKHsgY3VycmVudDogcHJvcFR5cGVzLmFueSB9KVxyXG4gICAgXSksXHJcbiAgICBwb3NpdGlvbnM6IHByb3BUeXBlcy5hcnJheU9mKHByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgdGFyZ2V0OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KSksXHJcbiAgICBvblRhcmdldENsaWNrOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uT3V0ZXJQb3BvdmVyQ2xpY2tlZDogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICByb3VuZEJvcmRlcjogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjb250ZW50U3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXIiXX0=