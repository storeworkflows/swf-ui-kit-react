"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Popover = _interopRequireDefault(require("../Popover/Popover"));

var _findByType = _interopRequireWildcard(require("../utils/findByType"));

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Tooltip = /*#__PURE__*/function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  var _super = _createSuper(Tooltip);

  function Tooltip(props) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _super.call(this, props);

    _this.renderContent = function () {
      var _this$props = _this.props,
          content = _this$props.content,
          children = _this$props.children;
      var child = (0, _findByType["default"])(children, "Content");
      if (!child && !content) return null;else if (!child) return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: content
      });else return child;
    };

    _this.targetHovered = function () {
      if (!_this.state.opened) {
        setTimeout(function () {
          return _this.setState({
            opened: false
          });
        }, _this.props.delay);

        _this.setState({
          opened: true
        });
      }
    };

    var _this$props2 = _this.props,
        targetRef = _this$props2.targetRef,
        opened = _this$props2.opened;
    _this.state = {
      opened: opened,
      targetElement: targetRef
    };
    _this.renderContent = _this.renderContent.bind(_assertThisInitialized(_this));
    _this.targetHovered = _this.targetHovered.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.props.manageOpened) {
        var target = this.state.targetElement;

        target.current.onmouseover = function () {
          return _this2.targetHovered();
        };

        this.setState({
          targetElement: target
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          position = _this$props3.position,
          roundBorder = _this$props3.roundBorder,
          targetRef = _this$props3.targetRef;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
          manageOpened: true,
          opened: this.state.opened,
          positions: position,
          roundBorder: roundBorder,
          positionTarget: targetRef,
          hideTail: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
            children: this.renderContent()
          })
        })
      });
    }
  }]);

  return Tooltip;
}(React.Component);

;
Tooltip.Content = (0, _findByType.createSubComponent)("Content");
Tooltip.defaultProps = {
  delay: 700,
  manageOpened: false,
  opened: false,
  targetRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].any
  })]),
  position: [{
    target: "top-center",
    content: "bottom-center"
  }, {
    target: "bottom-center",
    content: "top-center"
  }, {
    target: "center-end",
    content: "center-start"
  }, {
    target: "center-start",
    content: "center-end"
  }, {
    target: "top-end",
    content: "top-start"
  }, {
    target: "bottom-end",
    content: "bottom-start"
  }, {
    target: "top-start",
    content: "top-end"
  }, {
    target: "bottom-start",
    content: "bottom-end"
  }],
  roundBorder: true,
  content: ''
};
Tooltip.propTypes = {
  delay: _propTypes["default"].number,
  manageOpened: _propTypes["default"].bool,
  opened: _propTypes["default"].bool,
  targetRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].any
  })]),
  position: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    target: _propTypes["default"].string,
    content: _propTypes["default"].string
  })),
  roundBorder: _propTypes["default"].bool,
  content: _propTypes["default"].string
};
var _default = Tooltip;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub29sdGlwL1Rvb2x0aXAuanMiXSwibmFtZXMiOlsiVG9vbHRpcCIsInByb3BzIiwicmVuZGVyQ29udGVudCIsImNvbnRlbnQiLCJjaGlsZHJlbiIsImNoaWxkIiwidGFyZ2V0SG92ZXJlZCIsInN0YXRlIiwib3BlbmVkIiwic2V0VGltZW91dCIsInNldFN0YXRlIiwiZGVsYXkiLCJ0YXJnZXRSZWYiLCJ0YXJnZXRFbGVtZW50IiwiYmluZCIsIm1hbmFnZU9wZW5lZCIsInRhcmdldCIsImN1cnJlbnQiLCJvbm1vdXNlb3ZlciIsInBvc2l0aW9uIiwicm91bmRCb3JkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRlbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJmdW5jIiwic2hhcGUiLCJhbnkiLCJudW1iZXIiLCJib29sIiwiYXJyYXlPZiIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7OztBQUNGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsVUFjbkJDLGFBZG1CLEdBY0gsWUFBTTtBQUFBLHdCQUNVLE1BQUtELEtBRGY7QUFBQSxVQUNYRSxPQURXLGVBQ1hBLE9BRFc7QUFBQSxVQUNGQyxRQURFLGVBQ0ZBLFFBREU7QUFFbEIsVUFBTUMsS0FBSyxHQUFHLDRCQUFXRCxRQUFYLEVBQXFCLFNBQXJCLENBQWQ7QUFFQSxVQUFHLENBQUNDLEtBQUQsSUFBVSxDQUFDRixPQUFkLEVBQ0ksT0FBTyxJQUFQLENBREosS0FFSyxJQUFHLENBQUNFLEtBQUosRUFDRCxvQkFBTztBQUFBLGtCQUFPRjtBQUFQLFFBQVAsQ0FEQyxLQUdELE9BQU9FLEtBQVA7QUFDUCxLQXhCa0I7O0FBQUEsVUEwQm5CQyxhQTFCbUIsR0EwQkgsWUFBTTtBQUNs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dGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUG9wb3ZlciBmcm9tIFwiLi4vUG9wb3Zlci9Qb3BvdmVyXCI7XHJcbmltcG9ydCBmaW5kQnlUeXBlLCB7Y3JlYXRlU3ViQ29tcG9uZW50fSBmcm9tIFwiLi4vdXRpbHMvZmluZEJ5VHlwZVwiO1xyXG5cclxuY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBjb25zdCB7dGFyZ2V0UmVmLCBvcGVuZWR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgb3BlbmVkOiBvcGVuZWQsXHJcbiAgICAgICAgICAgIHRhcmdldEVsZW1lbnQ6ICB0YXJnZXRSZWZcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlbmRlckNvbnRlbnQgPSB0aGlzLnJlbmRlckNvbnRlbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRhcmdldEhvdmVyZWQgPSB0aGlzLnRhcmdldEhvdmVyZWQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtjb250ZW50LCBjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgXCJDb250ZW50XCIpO1xyXG5cclxuICAgICAgICBpZighY2hpbGQgJiYgIWNvbnRlbnQpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIGVsc2UgaWYoIWNoaWxkKVxyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+e2NvbnRlbnR9PC9zcGFuPlxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIHRhcmdldEhvdmVyZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUub3BlbmVkKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWQ6IGZhbHNlfSkgLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVsYXkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBvcGVuZWQ6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLm1hbmFnZU9wZW5lZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnN0YXRlLnRhcmdldEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHRhcmdldC5jdXJyZW50Lm9ubW91c2VvdmVyID0gKCkgPT4gdGhpcy50YXJnZXRIb3ZlcmVkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RhcmdldEVsZW1lbnQgOiB0YXJnZXR9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLFxyXG4gICAgICAgICAgICByb3VuZEJvcmRlcixcclxuICAgICAgICAgICAgdGFyZ2V0UmVmXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZU9wZW5lZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvcGVuZWQ9e3RoaXMuc3RhdGUub3BlbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucz17cG9zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgcm91bmRCb3JkZXI9e3JvdW5kQm9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uVGFyZ2V0PXt0YXJnZXRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZVRhaWw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29udGVudCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlci5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuVG9vbHRpcC5Db250ZW50ID0gY3JlYXRlU3ViQ29tcG9uZW50KFwiQ29udGVudFwiKTtcclxuXHJcblRvb2x0aXAuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZGVsYXk6IDcwMCxcclxuICAgIG1hbmFnZU9wZW5lZDogZmFsc2UsXHJcbiAgICBvcGVuZWQ6IGZhbHNlLFxyXG4gICAgdGFyZ2V0UmVmOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBwcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBwcm9wVHlwZXMuc2hhcGUoeyBjdXJyZW50OiBwcm9wVHlwZXMuYW55IH0pXHJcbiAgICBdKSxcclxuICAgIHBvc2l0aW9uOlxyXG4gICAgICAgIFt7IHRhcmdldDpcInRvcC1jZW50ZXJcIiwgY29udGVudDogXCJib3R0b20tY2VudGVyXCJ9LFxyXG4gICAgICAgICAgICB7IHRhcmdldDogXCJib3R0b20tY2VudGVyXCIsIGNvbnRlbnQ6IFwidG9wLWNlbnRlclwifSxcclxuICAgICAgICAgICAgeyB0YXJnZXQ6IFwiY2VudGVyLWVuZFwiLCBjb250ZW50OlwiY2VudGVyLXN0YXJ0XCJ9LFxyXG4gICAgICAgICAgICB7IHRhcmdldDogXCJjZW50ZXItc3RhcnRcIiwgY29udGVudDogXCJjZW50ZXItZW5kXCJ9LFxyXG4gICAgICAgICAgICB7IHRhcmdldDogXCJ0b3AtZW5kXCIsIGNvbnRlbnQ6IFwidG9wLXN0YXJ0XCJ9LFxyXG4gICAgICAgICAgICB7IHRhcmdldDogXCJib3R0b20tZW5kXCIsIGNvbnRlbnQ6XCJib3R0b20tc3RhcnRcIn0sXHJcbiAgICAgICAgICAgIHsgdGFyZ2V0OiBcInRvcC1zdGFydFwiLCBjb250ZW50OiBcInRvcC1lbmRcIn0sXHJcbiAgICAgICAgICAgIHsgdGFyZ2V0OiBcImJvdHRvbS1zdGFydFwiLCBjb250ZW50OiBcImJvdHRvbS1lbmRcIn1dLFxyXG4gICAgcm91bmRCb3JkZXI6IHRydWUsXHJcbiAgICBjb250ZW50OiAnJyxcclxufVxyXG5cclxuVG9vbHRpcC5wcm9wVHlwZXMgPSB7XHJcbiAgICBkZWxheTogcHJvcFR5cGVzLm51bWJlcixcclxuICAgIG1hbmFnZU9wZW5lZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgdGFyZ2V0UmVmOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBwcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBwcm9wVHlwZXMuc2hhcGUoeyBjdXJyZW50OiBwcm9wVHlwZXMuYW55IH0pXHJcbiAgICBdKSxcclxuICAgIHBvc2l0aW9uOiBwcm9wVHlwZXMuYXJyYXlPZihwcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHRhcmdldDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBjb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSkpLFxyXG4gICAgcm91bmRCb3JkZXI6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgY29udGVudDogcHJvcFR5cGVzLnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwIl19