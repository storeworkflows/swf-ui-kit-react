"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Standard = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("./Card"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Containers/Card',
  component: _Card["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card["default"], _objectSpread(_objectSpread({}, args), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: "Content"
    })
  }));
};

var Standard = Template.bind({});
exports.Standard = Standard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXJkL2NhcmQuc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIkNhcmQiLCJUZW1wbGF0ZSIsImFyZ3MiLCJTdGFuZGFyZCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7O2VBRWU7QUFDWEEsRUFBQUEsS0FBSyxFQUFFLDRCQURJO0FBRVhDLEVBQUFBLFNBQVMsRUFBRUM7QUFGQSxDOzs7QUFNZixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFEO0FBQUEsc0JBQVUscUJBQUMsZ0JBQUQsa0NBQVVBLElBQVY7QUFBQSwyQkFDdkI7QUFBQTtBQUFBO0FBRHVCLEtBQVY7QUFBQSxDQUFqQjs7QUFJTyxJQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBDYXJkIH0gZnJvbSAnLi9DYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHRpdGxlOiAnc3dmLXVpLWtpdC9Db250YWluZXJzL0NhcmQnLFxyXG4gICAgY29tcG9uZW50OiBDYXJkLFxyXG59O1xyXG5cclxuXHJcbmNvbnN0IFRlbXBsYXRlID0gKGFyZ3MpID0+IDxDYXJkIHsuLi5hcmdzfT5cclxuICAgIDxkaXY+Q29udGVudDwvZGl2PlxyXG48L0NhcmQ+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0YW5kYXJkID0gVGVtcGxhdGUuYmluZCh7fSk7XHJcbiJdfQ==