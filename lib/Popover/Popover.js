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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qb3BvdmVyL1BvcG92ZXIuanMiXSwibmFtZXMiOlsiQ29udGVudCIsIlRhcmdldCIsIlBvcG92ZXIiLCJwcm9wcyIsInRhcmdldENsaWNrZWQiLCJiaW5kIiwic3RhdGUiLCJvcGVuZWQiLCJoZWlnaHQiLCJ3aWR0aCIsInRhcmdldFJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiY29udGVudFJlZiIsImNoaWxkcmVuIiwiaGlkZVRhaWwiLCJjb250ZW50IiwicG9zaXRpb25UYXJnZXQiLCJ0YXJnZXQiLCJ0YXJnZXRDb250ZW50IiwibWFuYWdlT3BlbmVkIiwib25DbGljayIsImN1cnJlbnRTdGF0ZSIsInNldFN0YXRlIiwidW5kZWZpbmVkIiwidmFsdWUiLCJjdXJyZW50IiwidGFyZ2V0RGltZW5zaW9ucyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnRlbnREaW1lbnNpb25zIiwicG9zaXRpb24iLCJwb3NpdGlvbnMiLCJzdHlsZXNJbmZvIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInN0eWxlcyIsInN0eWxlIiwidHJhbnNmb3JtIiwibGVmdCIsInRvcCIsImhhc0Fycm93IiwiYXJyb3dTdHlsZSIsImZvckVhY2giLCJjb25zb2xlIiwibG9nIiwicmVuZGVyVGFyZ2V0IiwicmVuZGVyQ29udGVudCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImJvb2wiLCJlbGVtZW50IiwiYXJyYXkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUFNLElBQU47QUFBQSxDQUFoQjs7QUFDQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFNBQU0sSUFBTjtBQUFBLENBQWY7O0lBR01DLE87Ozs7O0FBQ0YsbUJBQVlDLEtBQVos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c0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IGZpbmRCeVR5cGUgZnJvbSBcIi4uL3V0aWxzL2ZpbmRCeVR5cGVcIjtcclxuaW1wb3J0IHtnZXRQb3BvdmVyU3R5bGV9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5jb25zdCBDb250ZW50ID0gKCkgPT4gbnVsbDtcclxuY29uc3QgVGFyZ2V0ID0gKCkgPT4gbnVsbDtcclxuXHJcblxyXG5jbGFzcyBQb3BvdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0Q2xpY2tlZCA9IHRoaXMudGFyZ2V0Q2xpY2tlZC5iaW5kKHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgICAgd2lkdGg6IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGFyZ2V0UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ29udGVudCgpIHtcclxuICAgICAgICBjb25zdCB7Y2hpbGRyZW4sIGhpZGVUYWlsfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGZpbmRCeVR5cGUoY2hpbGRyZW4sIENvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoIWNvbnRlbnQpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwb3BvdmVyLWNvbnRlbnQgYXJyb3cgYXJyb3ctdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5jb250ZW50UmVmfT5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50LnByb3BzLmNoaWxkcmVufSA8L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJUYXJnZXQoKSB7XHJcbiAgICAgICAgY29uc3Qge2NoaWxkcmVuLCBwb3NpdGlvblRhcmdldH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGZpbmRCeVR5cGUoY2hpbGRyZW4sIFRhcmdldCk7XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRDb250ZW50ID0gKCF0YXJnZXQpID8gcG9zaXRpb25UYXJnZXQgOiB0YXJnZXQucHJvcHMuY2hpbGRyZW4gO1xyXG5cclxuICAgICAgICBpZiAoIXRhcmdldENvbnRlbnQpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBpZCA9XCJwb3BvdmVyLXRhcmdldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnRhcmdldFJlZn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy50YXJnZXRDbGlja2VkIH0+XHJcbiAgICAgICAgICAgICAgICB7dGFyZ2V0Q29udGVudH0gPC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgdGFyZ2V0Q2xpY2tlZCAoKXtcclxuICAgICAgICBjb25zdCB7bWFuYWdlT3BlbmVkLCBvbkNsaWNrfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTdGF0ZSA9IHRoaXMuc3RhdGUub3BlbmVkO1xyXG5cclxuICAgICAgICBpZighbWFuYWdlT3BlbmVkKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9ICFjdXJyZW50U3RhdGVcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBvcGVuZWQ6IGN1cnJlbnRTdGF0ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG9uQ2xpY2shPT11bmRlZmluZWQgJiYgb25DbGljayE9PW51bGwpXHJcbiAgICAgICAgICAgIG9uQ2xpY2soe3ZhbHVlOiBjdXJyZW50U3RhdGV9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBvcGVuZWQ6IHRoaXMucHJvcHMub3BlbmVkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcclxuICAgICAgICBpZih0aGlzLmNvbnRlbnRSZWYuY3VycmVudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXREaW1lbnNpb25zID0gdGhpcy50YXJnZXRSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnREaW1lbnNpb25zID0gdGhpcy5jb250ZW50UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMucHJvcHMucG9zaXRpb25zO1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0eWxlc0luZm8gPSAgZ2V0UG9wb3ZlclN0eWxlKHBvc2l0aW9uLCB0YXJnZXREaW1lbnNpb25zLCBjb250ZW50RGltZW5zaW9ucywgd2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICAgICAgICBsZXQgc3R5bGVzID0gc3R5bGVzSW5mby5zdHlsZTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50UmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gc3R5bGVzLnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50UmVmLmN1cnJlbnQuc3R5bGUubGVmdCA9IHN0eWxlcy5sZWZ0O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRSZWYuY3VycmVudC5zdHlsZS50b3AgPSBzdHlsZXMudG9wO1xyXG5cclxuICAgICAgICAgICAgaWYoIXRoaXMucHJvcHMuaGlkZVRhaWwgJiYgc3R5bGVzSW5mby5oYXNBcnJvdyl7XHJcbiAgICAgICAgICAgICAgICBzdHlsZXNJbmZvLmFycm93U3R5bGUuZm9yRWFjaCgoc3R5bGUpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0eWxlKTtcclxuICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY29udGVudFJlZi5jdXJyZW50LnN0eWxlW3N0eWxlXSA9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzdHlsZXNcIiwgdGhpcy5jb250ZW50UmVmLmN1cnJlbnQuc3R5bGVbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge29wZW5lZH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInBvcG92ZXItZWxlbWVudFwifT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUYXJnZXQoKX1cclxuICAgICAgICAgICAgICAgICAgICB7b3BlbmVkICYmIHRoaXMucmVuZGVyQ29udGVudCgpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Qb3BvdmVyLkNvbnRlbnQgPSBDb250ZW50O1xyXG5Qb3BvdmVyLlRhcmdldCA9IFRhcmdldDtcclxuXHJcblBvcG92ZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaGlkZVRhaWw6IGZhbHNlLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBmYWxzZSxcclxuICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICBwb3NpdGlvbnM6IFtcclxuICAgICAgICB7IHRhcmdldDogJ2JvdHRvbS1zdGFydCcsIGNvbnRlbnQ6ICd0b3Atc3RhcnQnIH0sXHJcbiAgICAgICAgeyB0YXJnZXQ6ICdib3R0b20tZW5kJywgY29udGVudDogJ3RvcC1lbmQnIH0sXHJcbiAgICAgICAgeyB0YXJnZXQ6ICd0b3Atc3RhcnQnLCBjb250ZW50OiAnYm90dG9tLXN0YXJ0JyB9LFxyXG4gICAgICAgIHsgdGFyZ2V0OiAndG9wLWVuZCcsIGNvbnRlbnQ6ICdib3R0b20tZW5kJyB9LFxyXG4gICAgICAgIHsgdGFyZ2V0OiAndG9wLWVuZCcsIGNvbnRlbnQ6ICd0b3Atc3RhcnQnIH0sXHJcbiAgICAgICAgeyB0YXJnZXQ6ICdib3R0b20tZW5kJywgY29udGVudDogJ2JvdHRvbS1zdGFydCcgfSxcclxuICAgICAgICB7IHRhcmdldDogJ3RvcC1zdGFydCcsIGNvbnRlbnQ6ICd0b3AtZW5kJyB9LFxyXG4gICAgICAgIHsgdGFyZ2V0OiAnYm90dG9tLXN0YXJ0JywgY29udGVudDogJ2JvdHRvbS1lbmQnIH1cclxuICAgIF1cclxufVxyXG5cclxuUG9wb3Zlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBoaWRlVGFpbDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgb3BlbmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHBvc2l0aW9uVGFyZ2V0OiBwcm9wVHlwZXMuZWxlbWVudCxcclxuICAgIHBvc2l0aW9uczogcHJvcFR5cGVzLmFycmF5LFxyXG4gICAgb25DbGljazogcHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlciJdfQ==