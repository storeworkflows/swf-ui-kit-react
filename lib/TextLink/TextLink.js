"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TextLink = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var download = props.download,
      href = props.href,
      label = props.label,
      openWindows = props.openWindows,
      underline = props.underline,
      variant = props.variant,
      onClick = props.onClick,
      className = props.className;
  var linkClasses = (0, _classnames["default"])("swf-text-link", variant, className, {
    "underline": underline
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
    href: href,
    download: download,
    onClick: onClick,
    className: linkClasses,
    target: openWindows ? "_blank" : "_self",
    ref: ref,
    children: label
  });
});
TextLink.defaultProps = {
  download: false,
  openWindows: false,
  underline: false,
  variant: "primary",
  onClick: function onClick() {
    return void 0;
  },
  className: {}
};
TextLink.propTypes = {
  download: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool]),
  href: _propTypes["default"].string,
  label: _propTypes["default"].string,
  openWindows: _propTypes["default"].bool,
  underline: _propTypes["default"].bool,
  variant: _propTypes["default"].oneOf(["primary", "secondary"]),
  onClick: _propTypes["default"].func,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
};
var _default = TextLink;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0TGluay9UZXh0TGluay5qcyJdLCJuYW1lcyI6WyJUZXh0TGluayIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiZG93bmxvYWQiLCJocmVmIiwibGFiZWwiLCJvcGVuV2luZG93cyIsInVuZGVybGluZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwibGlua0NsYXNzZXMiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJib29sIiwib25lT2YiLCJmdW5jIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsZ0JBQUdDLEtBQUssQ0FBQ0MsVUFBTixDQUFpQixVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFBQSxNQUcxQ0MsUUFIMEMsR0FLMUNGLEtBTDBDLENBRzFDRSxRQUgwQztBQUFBLE1BR2hDQyxJQUhnQyxHQUsxQ0gsS0FMMEMsQ0FHaENHLElBSGdDO0FBQUEsTUFHMUJDLEtBSDBCLEdBSzFDSixLQUwwQyxDQUcxQkksS0FIMEI7QUFBQSxNQUduQkMsV0FIbUIsR0FLMUNMLEtBTDBDLENBR25CSyxXQUhtQjtBQUFBLE1BSTFDQyxTQUowQyxHQUsxQ04sS0FMMEMsQ0FJMUNNLFNBSjBDO0FBQUEsTUFJL0JDLE9BSitCLEdBSzFDUCxLQUwwQyxDQUkvQk8sT0FKK0I7QUFBQSxNQUl0QkMsT0FKc0IsR0FLMUNSLEtBTDBDLENBSXRCUSxPQUpzQjtBQUFBLE1BSWJDLFNBSmEsR0FLMUNULEtBTDBDLENBSWJTLFNBSmE7QUFPOUMsTUFBSUMsV0FBVyxHQUFHLDRCQUNkLGVBRGMsRUFFZEgsT0FGYyxFQUdkRSxTQUhjLEVBSWQ7QUFBRSxpQkFBYUg7QUFBZixHQUpjLENBQWxCO0FBT0Esc0JBQ0k7QUFBRyxJQUFBLElBQUksRUFBRUgsSUFBVDtBQUNHLElBQUEsUUFBUSxFQUFFRCxRQURiO0FBRUcsSUFBQSxPQUFPLEVBQUVNLE9BRlo7QUFHRyxJQUFBLFNBQVMsRUFBRUUsV0FIZDtBQUlHLElBQUEsTUFBTSxFQUFFTCxXQUFXLEdBQUcsUUFBSCxHQUFjLE9BSnBDO0FBS0csSUFBQSxHQUFHLEVBQUVKLEdBTFI7QUFBQSxjQU9LRztBQVBMLElBREo7QUFXSCxDQXpCZ0IsQ0FBakI7QUEyQkFQLFFBQVEsQ0FBQ2MsWUFBVCxHQUF3QjtBQUNwQlQsRUFBQUEsUUFBUSxFQUFFLEtBRFU7QUFFcEJHLEVBQUFBLFdBQVcsRUFBRSxLQUZPO0FBR3BCQyxFQUFBQSxTQUFTLEVBQUUsS0FIUztBQUlwQkMsRUFBQUEsT0FBTyxFQUFFLFNBSlc7QUFLcEJDLEVBQUFBLE9BQU8sRUFBRTtBQUFBLFdBQU0sS0FBSyxDQUFYO0FBQUEsR0FMVztBQU1wQkMsRUFBQUEsU0FBUyxFQUFFO0FBTlMsQ0FBeEI7QUFTQVosUUFBUSxDQUFDZSxTQUFULEdBQXFCO0FBQ2pCVixFQUFBQSxRQUFRLEVBQUVVLHNCQUFVQyxTQUFWLENBQW9CLENBQzFCRCxzQkFBVUUsTUFEZ0IsRUFFMUJGLHNCQUFVRyxJQUZnQixDQUFwQixDQURPO0FBS2pCWixFQUFBQSxJQUFJLEVBQUVTLHNCQUFVRSxNQUxDO0FBTWpCVixFQUFBQSxLQUFLLEVBQUVRLHNCQUFVRSxNQU5BO0FBT2pCVCxFQUFBQSxXQUFXLEVBQUVPLHNCQUFVRyxJQVBOO0FBUWpCVCxFQUFBQSxTQUFTLEVBQUVNLHNCQUFVRyxJQVJKO0FBU2pCUixFQUFBQSxPQUFPLEVBQUVLLHNCQUFVSSxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLFdBQVosQ0FBaEIsQ0FUUTtBQVVqQlIsRUFBQUEsT0FBTyxFQUFFSSxzQkFBVUssSUFWRjtBQVdqQlIsRUFBQUEsU0FBUyxFQUFFRyxzQkFBVUMsU0FBVixDQUFvQixDQUFDRCxzQkFBVUUsTUFBWCxFQUFtQkYsc0JBQVVNLE1BQTdCLENBQXBCO0FBWE0sQ0FBckI7ZUFjZXJCLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuY29uc3QgVGV4dExpbmsgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRvd25sb2FkLCBocmVmLCBsYWJlbCwgb3BlbldpbmRvd3MsXHJcbiAgICAgICAgdW5kZXJsaW5lLCB2YXJpYW50LCBvbkNsaWNrLCBjbGFzc05hbWVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBsZXQgbGlua0NsYXNzZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICAgIFwic3dmLXRleHQtbGlua1wiLFxyXG4gICAgICAgIHZhcmlhbnQsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIHsgXCJ1bmRlcmxpbmVcIjogdW5kZXJsaW5lIH1cclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgICAgZG93bmxvYWQ9e2Rvd25sb2FkfVxyXG4gICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgY2xhc3NOYW1lPXtsaW5rQ2xhc3Nlc31cclxuICAgICAgICAgICB0YXJnZXQ9e29wZW5XaW5kb3dzID8gXCJfYmxhbmtcIiA6IFwiX3NlbGZcIn1cclxuICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICA8L2E+XHJcbiAgICApXHJcbn0pO1xyXG5cclxuVGV4dExpbmsuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZG93bmxvYWQ6IGZhbHNlLFxyXG4gICAgb3BlbldpbmRvd3M6IGZhbHNlLFxyXG4gICAgdW5kZXJsaW5lOiBmYWxzZSxcclxuICAgIHZhcmlhbnQ6IFwicHJpbWFyeVwiLFxyXG4gICAgb25DbGljazogKCkgPT4gdm9pZCAwLFxyXG4gICAgY2xhc3NOYW1lOiB7fVxyXG59XHJcblxyXG5UZXh0TGluay5wcm9wVHlwZXMgPSB7XHJcbiAgICBkb3dubG9hZDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBwcm9wVHlwZXMuYm9vbFxyXG4gICAgXSksXHJcbiAgICBocmVmOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvcGVuV2luZG93czogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICB1bmRlcmxpbmU6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgdmFyaWFudDogcHJvcFR5cGVzLm9uZU9mKFtcInByaW1hcnlcIiwgXCJzZWNvbmRhcnlcIl0pLFxyXG4gICAgb25DbGljazogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjbGFzc05hbWU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5vYmplY3RdKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0TGlua1xyXG4iXX0=