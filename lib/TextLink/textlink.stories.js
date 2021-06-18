"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Secondary = exports.Underline = exports.Primary = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextLink = _interopRequireDefault(require("./TextLink"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Label&Value/TextLink',
  component: _TextLink["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextLink["default"], _objectSpread({}, args));
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  label: "Label",
  href: "https://www.google.com.ua/"
};
var Underline = Template.bind({});
exports.Underline = Underline;
Underline.args = _objectSpread(_objectSpread({}, Primary.args), {}, {
  underline: true
});
var Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = _objectSpread(_objectSpread({}, Primary.args), {}, {
  variant: "secondary"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0TGluay90ZXh0bGluay5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwiVGV4dExpbmsiLCJUZW1wbGF0ZSIsImFyZ3MiLCJQcmltYXJ5IiwiYmluZCIsImxhYmVsIiwiaHJlZiIsIlVuZGVybGluZSIsInVuZGVybGluZSIsIlNlY29uZGFyeSIsInZhcmlhbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7O2VBRWU7QUFDWEEsRUFBQUEsS0FBSyxFQUFFLGlDQURJO0FBRVhDLEVBQUFBLFNBQVMsRUFBRUM7QUFGQSxDOzs7QUFNZixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFEO0FBQUEsc0JBQVUscUJBQUMsb0JBQUQsb0JBQWNBLElBQWQsRUFBVjtBQUFBLENBQWpCOztBQUVPLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFoQjs7QUFDUEQsT0FBTyxDQUFDRCxJQUFSLEdBQWU7QUFDWEcsRUFBQUEsS0FBSyxFQUFFLE9BREk7QUFFWEMsRUFBQUEsSUFBSSxFQUFFO0FBRkssQ0FBZjtBQUtPLElBQU1DLFNBQVMsR0FBR04sUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFsQjs7QUFDUEcsU0FBUyxDQUFDTCxJQUFWLG1DQUNPQyxPQUFPLENBQUNELElBRGY7QUFFSU0sRUFBQUEsU0FBUyxFQUFFO0FBRmY7QUFLTyxJQUFNQyxTQUFTLEdBQUdSLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBbEI7O0FBQ1BLLFNBQVMsQ0FBQ1AsSUFBVixtQ0FDT0MsT0FBTyxDQUFDRCxJQURmO0FBRUlRLEVBQUFBLE9BQU8sRUFBRTtBQUZiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgVGV4dExpbmt9IGZyb20gJy4vVGV4dExpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgdGl0bGU6ICdzd2YtdWkta2l0L0xhYmVsJlZhbHVlL1RleHRMaW5rJyxcclxuICAgIGNvbXBvbmVudDogVGV4dExpbmssXHJcbn07XHJcblxyXG5cclxuY29uc3QgVGVtcGxhdGUgPSAoYXJncykgPT4gPFRleHRMaW5rIHsuLi5hcmdzfS8+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByaW1hcnkgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcclxuUHJpbWFyeS5hcmdzID0ge1xyXG4gICAgbGFiZWw6IFwiTGFiZWxcIixcclxuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS51YS9cIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVW5kZXJsaW5lID0gVGVtcGxhdGUuYmluZCh7fSk7XHJcblVuZGVybGluZS5hcmdzID0ge1xyXG4gICAgLi4uUHJpbWFyeS5hcmdzLFxyXG4gICAgdW5kZXJsaW5lOiB0cnVlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTZWNvbmRhcnkgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcclxuU2Vjb25kYXJ5LmFyZ3MgPSB7XHJcbiAgICAuLi5QcmltYXJ5LmFyZ3MsXHJcbiAgICB2YXJpYW50OiBcInNlY29uZGFyeVwiLFxyXG59XHJcbiJdfQ==