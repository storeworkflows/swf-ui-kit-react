"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Standard = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Input/Checkbox',
  component: _Checkbox["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: _defineProperty({}, "z-index", 1),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox["default"], _objectSpread({}, args))
  });
};

var Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  label: "Label",
  value: "value"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DaGVja2JveC9jaGVja2JveC5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwiQ2hlY2tib3giLCJUZW1wbGF0ZSIsImFyZ3MiLCJTdGFuZGFyZCIsImJpbmQiLCJsYWJlbCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7OztlQUVlO0FBQ1hBLEVBQUFBLEtBQUssRUFBRSwyQkFESTtBQUVYQyxFQUFBQSxTQUFTLEVBQUVDO0FBRkEsQzs7O0FBTWYsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLHNCQUFVO0FBQUssSUFBQSxLQUFLLGlDQUFnQixDQUFoQixDQUFWO0FBQUEsMkJBQThCLHFCQUFDLG9CQUFELG9CQUFjQSxJQUFkO0FBQTlCLElBQVY7QUFBQSxDQUFqQjs7QUFFTyxJQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBakI7O0FBQ1BELFFBQVEsQ0FBQ0QsSUFBVCxHQUFnQjtBQUNaRyxFQUFBQSxLQUFLLEVBQUUsT0FESztBQUVaQyxFQUFBQSxLQUFLLEVBQUU7QUFGSyxDQUFoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIENoZWNrYm94IH0gZnJvbSAnLi9DaGVja2JveCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICB0aXRsZTogJ3N3Zi11aS1raXQvSW5wdXQvQ2hlY2tib3gnLFxyXG4gICAgY29tcG9uZW50OiBDaGVja2JveCxcclxufTtcclxuXHJcblxyXG5jb25zdCBUZW1wbGF0ZSA9IChhcmdzKSA9PiA8ZGl2IHN0eWxlPXt7W2B6LWluZGV4YF06IDF9fT48Q2hlY2tib3ggey4uLmFyZ3N9Lz48L2Rpdj47XHJcblxyXG5leHBvcnQgY29uc3QgU3RhbmRhcmQgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcclxuU3RhbmRhcmQuYXJncyA9IHtcclxuICAgIGxhYmVsOiBcIkxhYmVsXCIsXHJcbiAgICB2YWx1ZTogXCJ2YWx1ZVwiXHJcbn1cclxuIl19