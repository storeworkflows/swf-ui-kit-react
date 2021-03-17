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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
          roundBorder = _this$props.roundBorder;
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
  roundBorder: _propTypes["default"].bool
};
var _default = Popover;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qb3BvdmVyL1BvcG92ZXIuanMiXSwibmFtZXMiOlsiUG9wb3ZlciIsInByb3BzIiwidGFyZ2V0Q2xpY2tlZCIsImJpbmQiLCJ1cGRhdGVPcGVuZWRTdGF0ZSIsInN0YXRlIiwib3BlbmVkIiwidGFyZ2V0UmVmIiwiY29udGVudFJlZiIsImNoaWxkcmVuIiwicm91bmRCb3JkZXIiLCJjb250ZW50IiwiZWwiLCJwb3NpdGlvblRhcmdldCIsInRhcmdldCIsImN1cnJlbnQiLCJyZXNldFN0eWxlcyIsInNldFN0eWxlc1RvQ29udGVudCIsIm9uY2xpY2siLCJtYW5hZ2VPcGVuZWQiLCJvbkNsaWNrIiwiY3VycmVudFN0YXRlIiwidW5kZWZpbmVkIiwidmFsdWUiLCJwb3NpdGlvbnMiLCJoaWRlVGFpbCIsImNvbnRlbnRFbGVtZW50IiwidGFyZ2V0RGltZW5zaW9ucyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnRlbnREaW1lbnNpb25zIiwid2luZG93UGFyYW0iLCJzdGFydFkiLCJzdGFydFgiLCJlbmRZIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJlbmRYIiwiaW5uZXJXaWR0aCIsInN0eWxlc0luZm8iLCJzdHlsZXMiLCJzdHlsZSIsInRyYW5zZm9ybSIsImxlZnQiLCJ0b3AiLCJ2aXNpYmlsaXR5IiwibWF4SGVpZ2h0IiwibWF4V2lkdGgiLCJoYXNBcnJvdyIsIk9iamVjdCIsImVudHJpZXMiLCJhcnJvd1N0eWxlIiwia2V5Iiwic2V0UHJvcGVydHkiLCJtYXJnaW4iLCJvcGVuZWRWYWx1ZSIsInNldFN0YXRlIiwicmVuZGVyQ29udGVudCIsInJlbmRlclRhcmdldCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udGVudCIsIlRhcmdldCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImJvb2wiLCJvbmVPZlR5cGUiLCJmdW5jIiwic2hhcGUiLCJhbnkiLCJhcnJheU9mIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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RUFBRXNDLHNCQUFVQyxJQURKO0FBRWhCN0MsRUFBQUEsWUFBWSxFQUFFNEMsc0JBQVVDLElBRlI7QUFHaEIxRCxFQUFBQSxNQUFNLEVBQUV5RCxzQkFBVUMsSUFIRjtBQUloQm5ELEVBQUFBLGNBQWMsRUFBRWtELHNCQUFVRSxTQUFWLENBQW9CLENBQ2hDRixzQkFBVUcsSUFEc0IsRUFFaENILHNCQUFVSSxLQUFWLENBQWdCO0FBQUVwRCxJQUFBQSxPQUFPLEVBQUVnRCxzQkFBVUs7QUFBckIsR0FBaEIsQ0FGZ0MsQ0FBcEIsQ0FKQTtBQVFoQjVDLEVBQUFBLFNBQVMsRUFBRXVDLHNCQUFVTSxPQUFWLENBQWtCTixzQkFBVUksS0FBVixDQUFnQjtBQUN6Q3JELElBQUFBLE1BQU0sRUFBRWlELHNCQUFVTyxNQUR1QjtBQUV6QzNELElBQUFBLE9BQU8sRUFBRW9ELHNCQUFVTztBQUZzQixHQUFoQixDQUFsQixDQVJLO0FBWWhCbEQsRUFBQUEsT0FBTyxFQUFFMkMsc0JBQVVHLElBWkg7QUFhaEJ4RCxFQUFBQSxXQUFXLEVBQUVxRCxzQkFBVUM7QUFiUCxDQUFwQjtlQWdCZWhFLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuaW1wb3J0IGZpbmRCeVR5cGUsIHtjcmVhdGVTdWJDb21wb25lbnR9IGZyb20gXCIuLi91dGlscy9maW5kQnlUeXBlXCI7XHJcbmltcG9ydCB7Z2V0QWxsUG9zc2libGVWYXJpYW50cywgZ2V0UG9wb3ZlclN0eWxlfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuY2xhc3MgUG9wb3ZlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnRhcmdldENsaWNrZWQgPSB0aGlzLnRhcmdldENsaWNrZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZU9wZW5lZFN0YXRlID0gdGhpcy51cGRhdGVPcGVuZWRTdGF0ZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBvcGVuZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRhcmdldFJlZiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb250ZW50UmVmID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDb250ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHtjaGlsZHJlbiwgcm91bmRCb3JkZXJ9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgXCJDb250ZW50XCIpO1xyXG5cclxuICAgICAgICBpZiAoIWNvbnRlbnQpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIFwicG9wb3Zlci1jb250ZW50XCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub1JvdW5kQm9yZGVyXCI6ICFyb3VuZEJvcmRlclxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4gdGhpcy5jb250ZW50UmVmID0gZWx9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwb3BvdmVyLWNvbnRlbnQta2VlcGVyXCJ9Pntjb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRhcmdldCgpIHtcclxuICAgICAgICBjb25zdCB7Y2hpbGRyZW4sIHBvc2l0aW9uVGFyZ2V0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgXCJUYXJnZXRcIik7XHJcblxyXG4gICAgICAgIGlmKHBvc2l0aW9uVGFyZ2V0KXtcclxuICAgICAgICAgICAgaWYodGhpcy50YXJnZXRSZWYgPT09IG51bGwgfHwgdGhpcy50YXJnZXRSZWYhPT1wb3NpdGlvblRhcmdldC5jdXJyZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFJlZiA9IHBvc2l0aW9uVGFyZ2V0LmN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNvbnRlbnRSZWYpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRTdHlsZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLm9wZW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdHlsZXNUb0NvbnRlbnQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldFJlZi5vbmNsaWNrID0gdGhpcy50YXJnZXRDbGlja2VkO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGFyZ2V0KVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcInBvcG92ZXItdGFyZ2V0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsgZWwgPT4gdGhpcy50YXJnZXRSZWYgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy50YXJnZXRDbGlja2VkIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YXJnZXR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGFyZ2V0Q2xpY2tlZCAoKXtcclxuICAgICAgICBjb25zdCB7bWFuYWdlT3BlbmVkLCBvbkNsaWNrfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTdGF0ZSA9IHRoaXMuc3RhdGUub3BlbmVkO1xyXG4gICAgICAgIGlmKCFtYW5hZ2VPcGVuZWQpIHtcclxuICAgICAgICAgICAgY3VycmVudFN0YXRlID0gIWN1cnJlbnRTdGF0ZVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9wZW5lZFN0YXRlKGN1cnJlbnRTdGF0ZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG9uQ2xpY2shPT11bmRlZmluZWQgJiYgb25DbGljayE9PW51bGwpXHJcbiAgICAgICAgICAgIG9uQ2xpY2soe3ZhbHVlOiBjdXJyZW50U3RhdGV9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3BlbmVkU3RhdGUodGhpcy5wcm9wcy5vcGVuZWQpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldFN0eWxlc1RvQ29udGVudCgpIHtcclxuICAgICAgICBpZih0aGlzLmNvbnRlbnRSZWYgJiYgdGhpcy50YXJnZXRSZWYpIHtcclxuICAgICAgICAgICAgY29uc3Qge3Bvc2l0aW9ucywgaGlkZVRhaWwsIHJvdW5kQm9yZGVyfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50RWxlbWVudCA9IHRoaXMuY29udGVudFJlZjtcclxuICAgICAgICAgICAgbGV0IHRhcmdldERpbWVuc2lvbnMgPSB0aGlzLnRhcmdldFJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICBsZXQgY29udGVudERpbWVuc2lvbnMgPSBjb250ZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB3aW5kb3dQYXJhbSA9IHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0WTogMCxcclxuICAgICAgICAgICAgICAgIHN0YXJ0WDogMCxcclxuICAgICAgICAgICAgICAgIGVuZFk6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgICAgIGVuZFg6IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBzdHlsZXNJbmZvID0gZ2V0UG9wb3ZlclN0eWxlKHBvc2l0aW9ucywgdGFyZ2V0RGltZW5zaW9ucywgY29udGVudERpbWVuc2lvbnMsIHdpbmRvd1BhcmFtLCBoaWRlVGFpbCwgcm91bmRCb3JkZXIpO1xyXG4gICAgICAgICAgICBsZXQgc3R5bGVzID0gc3R5bGVzSW5mby5zdHlsZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHN0eWxlcy50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnN0eWxlLmxlZnQgPSBzdHlsZXMubGVmdDtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUudG9wID0gc3R5bGVzLnRvcDtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG5cclxuICAgICAgICAgICAgaWYoc3R5bGVzLm1heEhlaWdodClcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LmNoaWxkcmVuWzBdLnN0eWxlLm1heEhlaWdodCA9IHN0eWxlcy5tYXhIZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmKHN0eWxlcy5tYXhXaWR0aClcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LmNoaWxkcmVuWzBdLnN0eWxlLm1heFdpZHRoID0gc3R5bGVzLm1heFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFoaWRlVGFpbCAmJiBzdHlsZXNJbmZvLmhhc0Fycm93KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzdHlsZXNJbmZvLmFycm93U3R5bGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0U3R5bGVzKCl7XHJcbiAgICAgICAgbGV0IGNvbnRlbnRFbGVtZW50ID0gdGhpcy5jb250ZW50UmVmO1xyXG4gICAgICAgIGlmKGNvbnRlbnRFbGVtZW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCAwLCAwKWA7XHJcbiAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnN0eWxlLmxlZnQgPSAgMDtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUudG9wID0gMDtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuY2hpbGRyZW5bMF0uc3R5bGUubWF4SGVpZ2h0ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBjb250ZW50RWxlbWVudC5jaGlsZHJlblswXS5zdHlsZS5tYXhXaWR0aCA9ICdub25lJztcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUubWFyZ2luID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xyXG4gICAgICAgIGxldCBvcGVuZWRWYWx1ZSA9IHRoaXMucHJvcHMub3BlbmVkO1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMubWFuYWdlT3BlbmVkICYmIHRoaXMucHJvcHMub3BlbmVkIT09IHRoaXMuc3RhdGUub3BlbmVkKVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9wZW5lZFN0YXRlKG9wZW5lZFZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU9wZW5lZFN0YXRlKHZhbHVlKXtcclxuICAgICAgICBpZih2YWx1ZSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdHlsZXNUb0NvbnRlbnQoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRTdHlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkOiB2YWx1ZX0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29udGVudCgpfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGFyZ2V0KCl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Qb3BvdmVyLkNvbnRlbnQgPSBjcmVhdGVTdWJDb21wb25lbnQoXCJDb250ZW50XCIpO1xyXG5Qb3BvdmVyLlRhcmdldCA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIlRhcmdldFwiKTtcclxuXHJcblBvcG92ZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaGlkZVRhaWw6IGZhbHNlLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBmYWxzZSxcclxuICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICBwb3NpdGlvbnM6IGdldEFsbFBvc3NpYmxlVmFyaWFudHMoKSxcclxuICAgIHJvdW5kQm9yZGVyOiB0cnVlLFxyXG59XHJcblxyXG5Qb3BvdmVyLnByb3BUeXBlcyA9IHtcclxuICAgIGhpZGVUYWlsOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZU9wZW5lZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgcG9zaXRpb25UYXJnZXQ6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIHByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIHByb3BUeXBlcy5zaGFwZSh7IGN1cnJlbnQ6IHByb3BUeXBlcy5hbnkgfSlcclxuICAgIF0pLFxyXG4gICAgcG9zaXRpb25zOiBwcm9wVHlwZXMuYXJyYXlPZihwcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHRhcmdldDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBjb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSkpLFxyXG4gICAgb25DbGljazogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICByb3VuZEJvcmRlcjogcHJvcFR5cGVzLmJvb2xcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlciJdfQ==