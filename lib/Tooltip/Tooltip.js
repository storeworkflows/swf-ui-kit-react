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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub29sdGlwL1Rvb2x0aXAuanMiXSwibmFtZXMiOlsiVG9vbHRpcCIsInByb3BzIiwicmVuZGVyQ29udGVudCIsImNvbnRlbnQiLCJjaGlsZHJlbiIsImNoaWxkIiwidGFyZ2V0SG92ZXJlZCIsInN0YXRlIiwib3BlbmVkIiwic2V0VGltZW91dCIsInNldFN0YXRlIiwiZGVsYXkiLCJ0YXJnZXRSZWYiLCJ0YXJnZXRFbGVtZW50IiwiYmluZCIsIm1hbmFnZU9wZW5lZCIsInRhcmdldCIsImN1cnJlbnQiLCJvbm1vdXNlb3ZlciIsInBvc2l0aW9uIiwicm91bmRCb3JkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRlbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJmdW5jIiwic2hhcGUiLCJhbnkiLCJudW1iZXIiLCJib29sIiwiYXJyYXlPZiIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7OztBQUNGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsVUFhbkJDLGFBYm1CLEdBYUgsWUFBTTtBQUFBLHdCQUNVLE1BQUtELEtBRGY7QUFBQSxVQUNYRSxPQURXLGVBQ1hBLE9BRFc7QUFBQSxVQUNGQyxRQURFLGVBQ0ZBLFFBREU7QUFFbEIsVUFBTUMsS0FBSyxHQUFHLDRCQUFXRCxRQUFYLEVBQXFCLFNBQXJCLENBQWQ7QUFFQSxVQUFHLENBQUNDLEtBQUQsSUFBVSxDQUFDRixPQUFkLEVBQ0ksT0FBTyxJQUFQLENBREosS0FFSyxJQUFHLENBQUNFLEtBQUosRUFDRCxvQkFBTztBQUFBLGtCQUFPRjtBQUFQLFFBQVAsQ0FEQyxLQUdELE9BQU9FLEtBQVA7QUFDUCxLQXZCa0I7O0FBQUEsVUF5Qm5CQyxhQXpCbUIsR0F5QkgsWUFBTTtBQUNs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dGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUG9wb3ZlciBmcm9tIFwiLi4vUG9wb3Zlci9Qb3BvdmVyXCI7XHJcbmltcG9ydCBmaW5kQnlUeXBlLCB7Y3JlYXRlU3ViQ29tcG9uZW50fSBmcm9tIFwiLi4vdXRpbHMvZmluZEJ5VHlwZVwiO1xyXG5cclxuY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBjb25zdCB7dGFyZ2V0UmVmLCBvcGVuZWR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgb3BlbmVkOiBvcGVuZWQsXHJcbiAgICAgICAgICAgIHRhcmdldEVsZW1lbnQ6ICB0YXJnZXRSZWZcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyQ29udGVudCA9IHRoaXMucmVuZGVyQ29udGVudC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0SG92ZXJlZCA9IHRoaXMudGFyZ2V0SG92ZXJlZC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge2NvbnRlbnQsIGNoaWxkcmVufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgY2hpbGQgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBcIkNvbnRlbnRcIik7XHJcblxyXG4gICAgICAgIGlmKCFjaGlsZCAmJiAhY29udGVudClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgZWxzZSBpZighY2hpbGQpXHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57Y29udGVudH08L3NwYW4+XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGFyZ2V0SG92ZXJlZCA9ICgpID0+IHtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5vcGVuZWQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZDogZmFsc2V9KSAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWxheSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG9wZW5lZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMubWFuYWdlT3BlbmVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuc3RhdGUudGFyZ2V0RWxlbWVudDtcclxuICAgICAgICAgICAgdGFyZ2V0LmN1cnJlbnQub25tb3VzZW92ZXIgPSAoKSA9PiB0aGlzLnRhcmdldEhvdmVyZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGFyZ2V0RWxlbWVudCA6IHRhcmdldH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgcG9zaXRpb24sXHJcbiAgICAgICAgICAgIHJvdW5kQm9yZGVyLFxyXG4gICAgICAgICAgICB0YXJnZXRSZWZcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgbWFuYWdlT3BlbmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5lZD17dGhpcy5zdGF0ZS5vcGVuZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zPXtwb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICByb3VuZEJvcmRlcj17cm91bmRCb3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25UYXJnZXQ9e3RhcmdldFJlZn1cclxuICAgICAgICAgICAgICAgICAgICBoaWRlVGFpbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8UG9wb3Zlci5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb250ZW50KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Ub29sdGlwLkNvbnRlbnQgPSBjcmVhdGVTdWJDb21wb25lbnQoXCJDb250ZW50XCIpO1xyXG5cclxuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBkZWxheTogNzAwLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBmYWxzZSxcclxuICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICB0YXJnZXRSZWY6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIHByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIHByb3BUeXBlcy5zaGFwZSh7IGN1cnJlbnQ6IHByb3BUeXBlcy5hbnkgfSlcclxuICAgIF0pLFxyXG4gICAgcG9zaXRpb246XHJcbiAgICAgICAgW3sgdGFyZ2V0OlwidG9wLWNlbnRlclwiLCBjb250ZW50OiBcImJvdHRvbS1jZW50ZXJcIn0sXHJcbiAgICAgICAgICAgIHsgdGFyZ2V0OiBcImJvdHRvbS1jZW50ZXJcIiwgY29udGVudDogXCJ0b3AtY2VudGVyXCJ9LFxyXG4gICAgICAgICAgICB7IHRhcmdldDogXCJjZW50ZXItZW5kXCIsIGNvbnRlbnQ6XCJjZW50ZXItc3RhcnRcIn0sXHJcbiAgICAgICAgICAgIHsgdGFyZ2V0OiBcImNlbnRlci1zdGFydFwiLCBjb250ZW50OiBcImNlbnRlci1lbmRcIn0sXHJcbiAgICAgICAgICAgIHsgdGFyZ2V0OiBcInRvcC1lbmRcIiwgY29udGVudDogXCJ0b3Atc3RhcnRcIn0sXHJcbiAgICAgICAgICAgIHsgdGFyZ2V0OiBcImJvdHRvbS1lbmRcIiwgY29udGVudDpcImJvdHRvbS1zdGFydFwifSxcclxuICAgICAgICAgICAgeyB0YXJnZXQ6IFwidG9wLXN0YXJ0XCIsIGNvbnRlbnQ6IFwidG9wLWVuZFwifSxcclxuICAgICAgICAgICAgeyB0YXJnZXQ6IFwiYm90dG9tLXN0YXJ0XCIsIGNvbnRlbnQ6IFwiYm90dG9tLWVuZFwifV0sXHJcbiAgICByb3VuZEJvcmRlcjogdHJ1ZSxcclxuICAgIGNvbnRlbnQ6ICcnLFxyXG59XHJcblxyXG5Ub29sdGlwLnByb3BUeXBlcyA9IHtcclxuICAgIGRlbGF5OiBwcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG9wZW5lZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICB0YXJnZXRSZWY6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIHByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIHByb3BUeXBlcy5zaGFwZSh7IGN1cnJlbnQ6IHByb3BUeXBlcy5hbnkgfSlcclxuICAgIF0pLFxyXG4gICAgcG9zaXRpb246IHByb3BUeXBlcy5hcnJheU9mKHByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgdGFyZ2V0OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KSksXHJcbiAgICByb3VuZEJvcmRlcjogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXAiXX0=