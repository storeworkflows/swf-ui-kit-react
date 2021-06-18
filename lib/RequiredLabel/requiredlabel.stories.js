"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Invalid = exports.Required = exports.Default = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _RequiredLabel = _interopRequireDefault(require("./RequiredLabel"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Label&Value/RequiredLabel',
  component: _RequiredLabel["default"],
  args: {
    label: "Label",
    required: true
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], _objectSpread({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: 'Label'
};
var Required = Template.bind({});
exports.Required = Required;
Required.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  required: true
});
var Invalid = Template.bind({});
exports.Invalid = Invalid;
Invalid.args = _objectSpread(_objectSpread({}, Required.args), {}, {
  invalid: true
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXF1aXJlZExhYmVsL3JlcXVpcmVkbGFiZWwuc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIlJlcXVpcmVkTGFiZWwiLCJhcmdzIiwibGFiZWwiLCJyZXF1aXJlZCIsIlRlbXBsYXRlIiwiRGVmYXVsdCIsImJpbmQiLCJSZXF1aXJlZCIsIkludmFsaWQiLCJpbnZhbGlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7OztlQUVlO0FBQ1hBLEVBQUFBLEtBQUssRUFBRSxzQ0FESTtBQUVYQyxFQUFBQSxTQUFTLEVBQUVDLHlCQUZBO0FBR1hDLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxLQUFLLEVBQUUsT0FETDtBQUVGQyxJQUFBQSxRQUFRLEVBQUU7QUFGUjtBQUhLLEM7OztBQVVmLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNILElBQUQ7QUFBQSxzQkFBVyxxQkFBQyx5QkFBRCxvQkFBbUJBLElBQW5CLEVBQVg7QUFBQSxDQUFqQjs7QUFFTyxJQUFNSSxPQUFPLEdBQUdELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjLEVBQWQsQ0FBaEI7O0FBQ1BELE9BQU8sQ0FBQ0osSUFBUixHQUFlO0FBQ1hDLEVBQUFBLEtBQUssRUFBRTtBQURJLENBQWY7QUFJTyxJQUFNSyxRQUFRLEdBQUdILFFBQVEsQ0FBQ0UsSUFBVCxDQUFjLEVBQWQsQ0FBakI7O0FBQ1BDLFFBQVEsQ0FBQ04sSUFBVCxtQ0FDT0ksT0FBTyxDQUFDSixJQURmO0FBRUlFLEVBQUFBLFFBQVEsRUFBRTtBQUZkO0FBS08sSUFBTUssT0FBTyxHQUFHSixRQUFRLENBQUNFLElBQVQsQ0FBYyxFQUFkLENBQWhCOztBQUNQRSxPQUFPLENBQUNQLElBQVIsbUNBQ09NLFFBQVEsQ0FBQ04sSUFEaEI7QUFFSVEsRUFBQUEsT0FBTyxFQUFFO0FBRmIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBSZXF1aXJlZExhYmVsfSBmcm9tICcuL1JlcXVpcmVkTGFiZWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgdGl0bGU6ICdzd2YtdWkta2l0L0xhYmVsJlZhbHVlL1JlcXVpcmVkTGFiZWwnLFxyXG4gICAgY29tcG9uZW50OiBSZXF1aXJlZExhYmVsLFxyXG4gICAgYXJnczoge1xyXG4gICAgICAgIGxhYmVsOiBcIkxhYmVsXCIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5jb25zdCBUZW1wbGF0ZSA9IChhcmdzKSAgPT4gPFJlcXVpcmVkTGFiZWwgey4uLmFyZ3N9Lz47XHJcblxyXG5leHBvcnQgY29uc3QgRGVmYXVsdCA9IFRlbXBsYXRlLmJpbmQoe30pO1xyXG5EZWZhdWx0LmFyZ3MgPSB7XHJcbiAgICBsYWJlbDogJ0xhYmVsJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSZXF1aXJlZCA9IFRlbXBsYXRlLmJpbmQoe30pO1xyXG5SZXF1aXJlZC5hcmdzID0ge1xyXG4gICAgLi4uRGVmYXVsdC5hcmdzLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnZhbGlkID0gVGVtcGxhdGUuYmluZCh7fSk7XHJcbkludmFsaWQuYXJncyA9IHtcclxuICAgIC4uLlJlcXVpcmVkLmFyZ3MsXHJcbiAgICBpbnZhbGlkOiB0cnVlXHJcbn07XHJcblxyXG5cclxuXHJcbiJdfQ==