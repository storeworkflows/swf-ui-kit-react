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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Tooltip = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var targetRef = props.targetRef,
      opened = props.opened,
      manageOpened = props.manageOpened,
      content = props.content,
      children = props.children,
      delay = props.delay,
      onHover = props.onHover,
      onTimerStop = props.onTimerStop,
      position = props.position,
      roundBorder = props.roundBorder;

  var _useState = (0, React.useState)(opened),
      _useState2 = _slicedToArray(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var openedFinal = manageOpened ? opened : isOpened;
  var timer = null;

  var renderContent = function renderContent() {
    var child = (0, _findByType["default"])(children, "Content");
    if (!child && !content) return null;else if (!child) return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: content
    });else return child;
  };

  var targetHovered = function targetHovered(e) {
    if (!openedFinal) {
      timer = setTimeout(function () {
        !manageOpened && setIsOpened(false);
        onTimerStop();
      }, delay);
      !manageOpened && setIsOpened(true);
      onHover(e);
    }
  };

  (0, React.useEffect)(function () {
    if (targetRef !== null && targetRef !== void 0 && targetRef.current) targetRef.current.onmouseover = targetHovered;
    return clearTimeout(timer);
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
      manageOpened: true,
      opened: openedFinal,
      positions: position,
      roundBorder: roundBorder,
      positionTarget: targetRef,
      hideTail: true,
      ref: ref,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
        children: renderContent()
      })
    })
  });
});
Tooltip.Content = (0, _findByType.createSubComponent)("Content");
Tooltip.defaultProps = {
  delay: 700,
  manageOpened: false,
  opened: false,
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
  content: '',
  onHover: function onHover() {
    return void 0;
  },
  onTimerStop: function onTimerStop() {
    return void 0;
  }
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
  content: _propTypes["default"].string,
  onHover: _propTypes["default"].func,
  onTimerStop: _propTypes["default"].func
};
var _default = Tooltip;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub29sdGlwL1Rvb2x0aXAuanMiXSwibmFtZXMiOlsiVG9vbHRpcCIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwidGFyZ2V0UmVmIiwib3BlbmVkIiwibWFuYWdlT3BlbmVkIiwiY29udGVudCIsImNoaWxkcmVuIiwiZGVsYXkiLCJvbkhvdmVyIiwib25UaW1lclN0b3AiLCJwb3NpdGlvbiIsInJvdW5kQm9yZGVyIiwiaXNPcGVuZWQiLCJzZXRJc09wZW5lZCIsIm9wZW5lZEZpbmFsIiwidGltZXIiLCJyZW5kZXJDb250ZW50IiwiY2hpbGQiLCJ0YXJnZXRIb3ZlcmVkIiwiZSIsInNldFRpbWVvdXQiLCJjdXJyZW50Iiwib25tb3VzZW92ZXIiLCJjbGVhclRpbWVvdXQiLCJDb250ZW50IiwiZGVmYXVsdFByb3BzIiwidGFyZ2V0IiwicHJvcFR5cGVzIiwibnVtYmVyIiwiYm9vbCIsIm9uZU9mVHlwZSIsImZ1bmMiLCJzaGFwZSIsImFueSIsImFycmF5T2YiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEsT0FBTyxnQkFBR0MsS0FBSyxDQUFDQyxVQUFOLENBQWlCLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUFBLE1BRXpDQyxTQUZ5QyxHQUl6Q0YsS0FKeUMsQ0FFekNFLFNBRnlDO0FBQUEsTUFFOUJDLE1BRjhCLEdBSXpDSCxLQUp5QyxDQUU5QkcsTUFGOEI7QUFBQSxNQUV0QkMsWUFGc0IsR0FJekNKLEtBSnlDLENBRXRCSSxZQUZzQjtBQUFBLE1BRVJDLE9BRlEsR0FJekNMLEtBSnlDLENBRVJLLE9BRlE7QUFBQSxNQUVDQyxRQUZELEdBSXpDTixLQUp5QyxDQUVDTSxRQUZEO0FBQUEsTUFFV0MsS0FGWCxHQUl6Q1AsS0FKeUMsQ0FFV08sS0FGWDtBQUFBLE1BR3pDQyxPQUh5QyxHQUl6Q1IsS0FK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QixFQUFBQSxPQUFPLEVBQUVzQixzQkFBVVEsTUFiSDtBQWNoQjNCLEVBQUFBLE9BQU8sRUFBRW1CLHNCQUFVSSxJQWRIO0FBZWhCdEIsRUFBQUEsV0FBVyxFQUFFa0Isc0JBQVVJO0FBZlAsQ0FBcEI7ZUFrQmVsQyxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFBvcG92ZXIgZnJvbSBcIi4uL1BvcG92ZXIvUG9wb3ZlclwiO1xyXG5pbXBvcnQgZmluZEJ5VHlwZSwge2NyZWF0ZVN1YkNvbXBvbmVudH0gZnJvbSBcIi4uL3V0aWxzL2ZpbmRCeVR5cGVcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRvb2x0aXAgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgdGFyZ2V0UmVmLCBvcGVuZWQsIG1hbmFnZU9wZW5lZCwgY29udGVudCwgY2hpbGRyZW4sIGRlbGF5LFxyXG4gICAgICAgIG9uSG92ZXIsIG9uVGltZXJTdG9wLCBwb3NpdGlvbiwgcm91bmRCb3JkZXJcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBbaXNPcGVuZWQsIHNldElzT3BlbmVkXSA9IHVzZVN0YXRlKG9wZW5lZCk7XHJcbiAgICBjb25zdCBvcGVuZWRGaW5hbCA9IG1hbmFnZU9wZW5lZCA/IG9wZW5lZCA6IGlzT3BlbmVkO1xyXG5cclxuICAgIGxldCB0aW1lciA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjaGlsZCA9IGZpbmRCeVR5cGUoY2hpbGRyZW4sIFwiQ29udGVudFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFjaGlsZCAmJiAhY29udGVudClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgZWxzZSBpZiAoIWNoaWxkKVxyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+e2NvbnRlbnR9PC9zcGFuPlxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRhcmdldEhvdmVyZWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmICghb3BlbmVkRmluYWwpIHtcclxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICFtYW5hZ2VPcGVuZWQgJiYgc2V0SXNPcGVuZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgb25UaW1lclN0b3AoKTtcclxuICAgICAgICAgICAgfSwgZGVsYXkpO1xyXG5cclxuICAgICAgICAgICAgIW1hbmFnZU9wZW5lZCAmJiBzZXRJc09wZW5lZCh0cnVlKTtcclxuICAgICAgICAgICAgb25Ib3ZlcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZih0YXJnZXRSZWY/LmN1cnJlbnQpXHJcbiAgICAgICAgICAgIHRhcmdldFJlZi5jdXJyZW50Lm9ubW91c2VvdmVyID0gdGFyZ2V0SG92ZXJlZDtcclxuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAgPD5cclxuICAgICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgICAgIG1hbmFnZU9wZW5lZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9wZW5lZD17b3BlbmVkRmluYWx9XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnM9e3Bvc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgcm91bmRCb3JkZXI9e3JvdW5kQm9yZGVyfVxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25UYXJnZXQ9e3RhcmdldFJlZn1cclxuICAgICAgICAgICAgICAgIGhpZGVUYWlsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlbmRlckNvbnRlbnQoKX1cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlci5Db250ZW50PlxyXG4gICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICA8Lz5cclxufSk7XHJcblxyXG5Ub29sdGlwLkNvbnRlbnQgPSBjcmVhdGVTdWJDb21wb25lbnQoXCJDb250ZW50XCIpO1xyXG5cclxuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBkZWxheTogNzAwLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBmYWxzZSxcclxuICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICBwb3NpdGlvbjpcclxuICAgICAgICBbe3RhcmdldDogXCJ0b3AtY2VudGVyXCIsIGNvbnRlbnQ6IFwiYm90dG9tLWNlbnRlclwifSxcclxuICAgICAgICAgICAge3RhcmdldDogXCJib3R0b20tY2VudGVyXCIsIGNvbnRlbnQ6IFwidG9wLWNlbnRlclwifSxcclxuICAgICAgICAgICAge3RhcmdldDogXCJjZW50ZXItZW5kXCIsIGNvbnRlbnQ6IFwiY2VudGVyLXN0YXJ0XCJ9LFxyXG4gICAgICAgICAgICB7dGFyZ2V0OiBcImNlbnRlci1zdGFydFwiLCBjb250ZW50OiBcImNlbnRlci1lbmRcIn0sXHJcbiAgICAgICAgICAgIHt0YXJnZXQ6IFwidG9wLWVuZFwiLCBjb250ZW50OiBcInRvcC1zdGFydFwifSxcclxuICAgICAgICAgICAge3RhcmdldDogXCJib3R0b20tZW5kXCIsIGNvbnRlbnQ6IFwiYm90dG9tLXN0YXJ0XCJ9LFxyXG4gICAgICAgICAgICB7dGFyZ2V0OiBcInRvcC1zdGFydFwiLCBjb250ZW50OiBcInRvcC1lbmRcIn0sXHJcbiAgICAgICAgICAgIHt0YXJnZXQ6IFwiYm90dG9tLXN0YXJ0XCIsIGNvbnRlbnQ6IFwiYm90dG9tLWVuZFwifV0sXHJcbiAgICByb3VuZEJvcmRlcjogdHJ1ZSxcclxuICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgb25Ib3ZlcjogKCkgPT4gdm9pZCAwLFxyXG4gICAgb25UaW1lclN0b3A6ICgpID0+IHZvaWQgMFxyXG59XHJcblxyXG5Ub29sdGlwLnByb3BUeXBlcyA9IHtcclxuICAgIGRlbGF5OiBwcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG9wZW5lZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICB0YXJnZXRSZWY6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIHByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIHByb3BUeXBlcy5zaGFwZSh7Y3VycmVudDogcHJvcFR5cGVzLmFueX0pXHJcbiAgICBdKSxcclxuICAgIHBvc2l0aW9uOiBwcm9wVHlwZXMuYXJyYXlPZihwcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHRhcmdldDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBjb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSkpLFxyXG4gICAgcm91bmRCb3JkZXI6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgY29udGVudDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uSG92ZXI6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25UaW1lclN0b3A6IHByb3BUeXBlcy5mdW5jXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXAiXX0=