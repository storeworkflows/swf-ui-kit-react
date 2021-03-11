"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles2 = _interopRequireDefault(require("./styles.scss"));

var _findByType = _interopRequireWildcard(require("../utils/findByType"));

var _utils = require("./utils");

var _classnames = _interopRequireDefault(require("classnames"));

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
    _this.updateOpenedState = _this.updateOpenedState.bind(_assertThisInitialized(_this));
    _this.state = {
      opened: false
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
          roundBorder = _this$props.roundBorder;
      var content = (0, _findByType["default"])(children, "Content");
      if (!content) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames["default"])({
          "popover-content": true,
          "noRoundBorder": !roundBorder
        }),
        ref: this.contentRef,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "popover-content-keeper",
          children: content
        })
      });
    }
  }, {
    key: "renderTarget",
    value: function renderTarget() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          positionTarget = _this$props2.positionTarget;
      var target = (0, _findByType["default"])(children, "Target");

      if (positionTarget) {
        if (this.targetRef.current === null || this.targetRef !== positionTarget) {
          this.targetRef = positionTarget;

          if (this.contentRef && this.contentRef.current) {
            this.resetStyles();
            if (this.state.opened) this.setStylesToContent();
          }
        }

        this.targetRef.current.onclick = this.targetClicked;
        return null;
      }

      if (!target) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "popover-target",
        ref: this.targetRef,
        onClick: this.targetClicked,
        children: target
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
        this.updateOpenedState(currentState);
      }

      if (onClick !== undefined && onClick !== null) onClick({
        value: currentState
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateOpenedState(this.props.opened);
    }
  }, {
    key: "setStylesToContent",
    value: function setStylesToContent() {
      if (this.contentRef && this.contentRef.current) {
        var _this$props4 = this.props,
            positions = _this$props4.positions,
            hideTail = _this$props4.hideTail,
            roundBorder = _this$props4.roundBorder;
        var contentElement = this.contentRef.current;
        var targetDimensions = this.targetRef.current.getBoundingClientRect();
        var contentDimensions = contentElement.getBoundingClientRect();
        var windowParam = {
          startY: 0,
          startX: 0,
          endY: window.innerHeight,
          endX: window.innerWidth
        };
        var stylesInfo = (0, _utils.getPopoverStyle)(positions, targetDimensions, contentDimensions, windowParam, hideTail, roundBorder);
        var _styles = stylesInfo.style;
        contentElement.style.transform = _styles.transform;
        contentElement.style.left = _styles.left;
        contentElement.style.top = _styles.top;
        contentElement.style.visibility = "visible";
        if (_styles.maxHeight) contentElement.children[0].style.maxHeight = _styles.maxHeight;
        if (_styles.maxWidth) contentElement.children[0].style.maxWidth = _styles.maxWidth;

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
      if (this.contentRef && this.contentRef.current) {
        var contentElement = this.contentRef.current;
        contentElement.style.visibility = "hidden";
        contentElement.style.transform = "translate3d(".concat(0, "px, ", 0, "px, 0)");
        contentElement.style.left = 0;
        contentElement.style.top = 0;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var openedValue = this.props.opened;
      if (this.props.manageOpened && this.props.opened !== this.state.opened) this.updateOpenedState(openedValue);
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
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles2["default"]
        }), this.renderContent(), this.renderTarget()]
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
  roundBorder: true
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
  onClick: _propTypes["default"].func,
  roundBorder: _propTypes["default"].bool
};
var _default = Popover;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qb3BvdmVyL1BvcG92ZXIuanMiXSwibmFtZXMiOlsiUG9wb3ZlciIsInByb3BzIiwidGFyZ2V0Q2xpY2tlZCIsImJpbmQiLCJ1cGRhdGVPcGVuZWRTdGF0ZSIsInN0YXRlIiwib3BlbmVkIiwidGFyZ2V0UmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJjb250ZW50UmVmIiwiY2hpbGRyZW4iLCJyb3VuZEJvcmRlciIsImNvbnRlbnQiLCJwb3NpdGlvblRhcmdldCIsInRhcmdldCIsImN1cnJlbnQiLCJyZXNldFN0eWxlcyIsInNldFN0eWxlc1RvQ29udGVudCIsIm9uY2xpY2siLCJtYW5hZ2VPcGVuZWQiLCJvbkNsaWNrIiwiY3VycmVudFN0YXRlIiwidW5kZWZpbmVkIiwidmFsdWUiLCJwb3NpdGlvbnMiLCJoaWRlVGFpbCIsImNvbnRlbnRFbGVtZW50IiwidGFyZ2V0RGltZW5zaW9ucyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnRlbnREaW1lbnNpb25zIiwid2luZG93UGFyYW0iLCJzdGFydFkiLCJzdGFydFgiLCJlbmRZIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJlbmRYIiwiaW5uZXJXaWR0aCIsInN0eWxlc0luZm8iLCJzdHlsZXMiLCJzdHlsZSIsInRyYW5zZm9ybSIsImxlZnQiLCJ0b3AiLCJ2aXNpYmlsaXR5IiwibWF4SGVpZ2h0IiwibWF4V2lkdGgiLCJoYXNBcnJvdyIsIk9iamVjdCIsImVudHJpZXMiLCJhcnJvd1N0eWxlIiwia2V5Iiwic2V0UHJvcGVydHkiLCJvcGVuZWRWYWx1ZSIsInNldFN0YXRlIiwicmVuZGVyQ29udGVudCIsInJlbmRlclRhcmdldCIsIkNvbXBvbmVudCIsIkNvbnRlbnQiLCJUYXJnZXQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJib29sIiwib25lT2ZUeXBlIiwiZnVuYyIsInNoYXBlIiwiYW55IiwiYXJyYXlPZiIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FB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O0FBSWhCakQsRUFBQUEsY0FBYyxFQUFFZ0Qsc0JBQVVFLFNBQVYsQ0FBb0IsQ0FDaENGLHNCQUFVRyxJQURzQixFQUVoQ0gsc0JBQVVJLEtBQVYsQ0FBZ0I7QUFBRWxELElBQUFBLE9BQU8sRUFBRThDLHNCQUFVSztBQUFyQixHQUFoQixDQUZnQyxDQUFwQixDQUpBO0FBUWhCMUMsRUFBQUEsU0FBUyxFQUFFcUMsc0JBQVVNLE9BQVYsQ0FBa0JOLHNCQUFVSSxLQUFWLENBQWdCO0FBQ3pDbkQsSUFBQUEsTUFBTSxFQUFFK0Msc0JBQVVPLE1BRHVCO0FBRXpDeEQsSUFBQUEsT0FBTyxFQUFFaUQsc0JBQVVPO0FBRnNCLEdBQWhCLENBQWxCLENBUks7QUFZaEJoRCxFQUFBQSxPQUFPLEVBQUV5QyxzQkFBVUcsSUFaSDtBQWFoQnJELEVBQUFBLFdBQVcsRUFBRWtELHNCQUFVQztBQWJQLENBQXBCO2VBZ0JlL0QsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XHJcbmltcG9ydCBmaW5kQnlUeXBlLCB7Y3JlYXRlU3ViQ29tcG9uZW50fSBmcm9tIFwiLi4vdXRpbHMvZmluZEJ5VHlwZVwiO1xyXG5pbXBvcnQge2dldEFsbFBvc3NpYmxlVmFyaWFudHMsIGdldFBvcG92ZXJTdHlsZX0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy50YXJnZXRDbGlja2VkID0gdGhpcy50YXJnZXRDbGlja2VkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPcGVuZWRTdGF0ZSA9IHRoaXMudXBkYXRlT3BlbmVkU3RhdGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgb3BlbmVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDb250ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHtjaGlsZHJlbiwgcm91bmRCb3JkZXJ9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgXCJDb250ZW50XCIpO1xyXG5cclxuICAgICAgICBpZiAoIWNvbnRlbnQpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIFwicG9wb3Zlci1jb250ZW50XCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJub1JvdW5kQm9yZGVyXCI6ICFyb3VuZEJvcmRlclxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5jb250ZW50UmVmfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicG9wb3Zlci1jb250ZW50LWtlZXBlclwifT57Y29udGVudH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJUYXJnZXQoKSB7XHJcbiAgICAgICAgY29uc3Qge2NoaWxkcmVuLCBwb3NpdGlvblRhcmdldH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGZpbmRCeVR5cGUoY2hpbGRyZW4sIFwiVGFyZ2V0XCIpO1xyXG5cclxuICAgICAgICBpZihwb3NpdGlvblRhcmdldCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGFyZ2V0UmVmLmN1cnJlbnQgPT09IG51bGwgfHwgdGhpcy50YXJnZXRSZWYhPT1wb3NpdGlvblRhcmdldClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRSZWYgPSBwb3NpdGlvblRhcmdldDtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuY29udGVudFJlZiAmJiB0aGlzLmNvbnRlbnRSZWYuY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFN0eWxlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUub3BlbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0eWxlc1RvQ29udGVudCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0UmVmLmN1cnJlbnQub25jbGljayA9IHRoaXMudGFyZ2V0Q2xpY2tlZDtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRhcmdldClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJwb3BvdmVyLXRhcmdldFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy50YXJnZXRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMudGFyZ2V0Q2xpY2tlZCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFyZ2V0fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRhcmdldENsaWNrZWQgKCl7XHJcbiAgICAgICAgY29uc3Qge21hbmFnZU9wZW5lZCwgb25DbGlja30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBjdXJyZW50U3RhdGUgPSB0aGlzLnN0YXRlLm9wZW5lZDtcclxuICAgICAgICBpZighbWFuYWdlT3BlbmVkKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9ICFjdXJyZW50U3RhdGVcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVPcGVuZWRTdGF0ZShjdXJyZW50U3RhdGUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvbkNsaWNrIT09dW5kZWZpbmVkICYmIG9uQ2xpY2shPT1udWxsKVxyXG4gICAgICAgICAgICBvbkNsaWNrKHt2YWx1ZTogY3VycmVudFN0YXRlfSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZU9wZW5lZFN0YXRlKHRoaXMucHJvcHMub3BlbmVkKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRTdHlsZXNUb0NvbnRlbnQoKSB7XHJcbiAgICAgICAgaWYodGhpcy5jb250ZW50UmVmICYmIHRoaXMuY29udGVudFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtwb3NpdGlvbnMsIGhpZGVUYWlsLCByb3VuZEJvcmRlcn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgICAgICBsZXQgY29udGVudEVsZW1lbnQgPSB0aGlzLmNvbnRlbnRSZWYuY3VycmVudDtcclxuXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXREaW1lbnNpb25zID0gdGhpcy50YXJnZXRSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICBsZXQgY29udGVudERpbWVuc2lvbnMgPSBjb250ZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB3aW5kb3dQYXJhbSA9IHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0WTogMCxcclxuICAgICAgICAgICAgICAgIHN0YXJ0WDogMCxcclxuICAgICAgICAgICAgICAgIGVuZFk6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgICAgIGVuZFg6IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBzdHlsZXNJbmZvID0gZ2V0UG9wb3ZlclN0eWxlKHBvc2l0aW9ucywgdGFyZ2V0RGltZW5zaW9ucywgY29udGVudERpbWVuc2lvbnMsIHdpbmRvd1BhcmFtLCBoaWRlVGFpbCwgcm91bmRCb3JkZXIpO1xyXG4gICAgICAgICAgICBsZXQgc3R5bGVzID0gc3R5bGVzSW5mby5zdHlsZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHN0eWxlcy50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnN0eWxlLmxlZnQgPSBzdHlsZXMubGVmdDtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUudG9wID0gc3R5bGVzLnRvcDtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICBpZihzdHlsZXMubWF4SGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgY29udGVudEVsZW1lbnQuY2hpbGRyZW5bMF0uc3R5bGUubWF4SGVpZ2h0PSBzdHlsZXMubWF4SGVpZ2h0O1xyXG4gICAgICAgICAgICBpZihzdHlsZXMubWF4V2lkdGgpXHJcbiAgICAgICAgICAgICAgICBjb250ZW50RWxlbWVudC5jaGlsZHJlblswXS5zdHlsZS5tYXhXaWR0aCA9IHN0eWxlcy5tYXhXaWR0aDtcclxuXHJcbiAgICAgICAgICAgIGlmICghaGlkZVRhaWwgJiYgc3R5bGVzSW5mby5oYXNBcnJvdykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc3R5bGVzSW5mby5hcnJvd1N0eWxlKSlcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldFN0eWxlcygpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGVudFJlZiAmJiB0aGlzLmNvbnRlbnRSZWYuY3VycmVudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50RWxlbWVudCA9IHRoaXMuY29udGVudFJlZi5jdXJyZW50O1xyXG4gICAgICAgICAgICBjb250ZW50RWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7MH1weCwgJHswfXB4LCAwKWBcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUubGVmdCA9ICAwO1xyXG4gICAgICAgICAgICBjb250ZW50RWxlbWVudC5zdHlsZS50b3AgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCl7XHJcbiAgICAgICAgbGV0IG9wZW5lZFZhbHVlID0gdGhpcy5wcm9wcy5vcGVuZWQ7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5tYW5hZ2VPcGVuZWQgJiYgdGhpcy5wcm9wcy5vcGVuZWQhPT0gdGhpcy5zdGF0ZS5vcGVuZWQpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT3BlbmVkU3RhdGUob3BlbmVkVmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlT3BlbmVkU3RhdGUodmFsdWUpe1xyXG4gICAgICAgIGlmKHZhbHVlKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0eWxlc1RvQ29udGVudCgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5yZXNldFN0eWxlcygpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWQ6IHZhbHVlfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29udGVudCgpfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGFyZ2V0KCl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Qb3BvdmVyLkNvbnRlbnQgPSBjcmVhdGVTdWJDb21wb25lbnQoXCJDb250ZW50XCIpO1xyXG5Qb3BvdmVyLlRhcmdldCA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIlRhcmdldFwiKTtcclxuXHJcblBvcG92ZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaGlkZVRhaWw6IGZhbHNlLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBmYWxzZSxcclxuICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICBwb3NpdGlvbnM6IGdldEFsbFBvc3NpYmxlVmFyaWFudHMoKSxcclxuICAgIHJvdW5kQm9yZGVyOiB0cnVlLFxyXG59XHJcblxyXG5Qb3BvdmVyLnByb3BUeXBlcyA9IHtcclxuICAgIGhpZGVUYWlsOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZU9wZW5lZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgcG9zaXRpb25UYXJnZXQ6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIHByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIHByb3BUeXBlcy5zaGFwZSh7IGN1cnJlbnQ6IHByb3BUeXBlcy5hbnkgfSlcclxuICAgIF0pLFxyXG4gICAgcG9zaXRpb25zOiBwcm9wVHlwZXMuYXJyYXlPZihwcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHRhcmdldDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBjb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSkpLFxyXG4gICAgb25DbGljazogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICByb3VuZEJvcmRlcjogcHJvcFR5cGVzLmJvb2xcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlciJdfQ==