"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlotValue = exports.UnimportantLabel = exports.Inline = exports.Standard = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _LabelValue = _interopRequireDefault(require("./LabelValue"));

var _index = require("../index");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Label&Value/LabelValue',
  component: _LabelValue["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_LabelValue["default"], _objectSpread({}, args));
};

var Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  label: "Label",
  value: "value"
};
var Inline = Template.bind({});
exports.Inline = Inline;
Inline.args = _objectSpread(_objectSpread({}, Standard.args), {}, {
  inline: true
});
var UnimportantLabel = Template.bind({});
exports.UnimportantLabel = UnimportantLabel;
UnimportantLabel.args = _objectSpread(_objectSpread({}, Standard.args), {}, {
  importantLabel: false
});

var SlotValue = function SlotValue(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_LabelValue["default"], _objectSpread(_objectSpread({}, args), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LabelValue["default"].Value, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Checkbox, {
        value: "slot value"
      })
    })
  }));
};

exports.SlotValue = SlotValue;
SlotValue.args = {
  label: "Label"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MYWJlbFZhbHVlL2xhYmVsdmFsdWUuc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIkxhYmVsVmFsdWUiLCJUZW1wbGF0ZSIsImFyZ3MiLCJTdGFuZGFyZCIsImJpbmQiLCJsYWJlbCIsInZhbHVlIiwiSW5saW5lIiwiaW5saW5lIiwiVW5pbXBvcnRhbnRMYWJlbCIsImltcG9ydGFudExhYmVsIiwiU2xvdFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7OztlQUVlO0FBQ1hBLEVBQUFBLEtBQUssRUFBRSxtQ0FESTtBQUVYQyxFQUFBQSxTQUFTLEVBQUVDO0FBRkEsQzs7O0FBTWYsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLHNCQUFVLHFCQUFDLHNCQUFELG9CQUFnQkEsSUFBaEIsRUFBVjtBQUFBLENBQWpCOztBQUVPLElBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFqQjs7QUFDUEQsUUFBUSxDQUFDRCxJQUFULEdBQWdCO0FBQ1pHLEVBQUFBLEtBQUssRUFBRSxPQURLO0FBRVpDLEVBQUFBLEtBQUssRUFBRTtBQUZLLENBQWhCO0FBS08sSUFBTUMsTUFBTSxHQUFHTixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWY7O0FBQ1BHLE1BQU0sQ0FBQ0wsSUFBUCxtQ0FDT0MsUUFBUSxDQUFDRCxJQURoQjtBQUVJTSxFQUFBQSxNQUFNLEVBQUU7QUFGWjtBQUtPLElBQU1DLGdCQUFnQixHQUFHUixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQXpCOztBQUNQSyxnQkFBZ0IsQ0FBQ1AsSUFBakIsbUNBQ09DLFFBQVEsQ0FBQ0QsSUFEaEI7QUFFSVEsRUFBQUEsY0FBYyxFQUFFO0FBRnBCOztBQUtPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNULElBQUQ7QUFBQSxzQkFBVSxxQkFBQyxzQkFBRCxrQ0FBZ0JBLElBQWhCO0FBQUEsMkJBQy9CLHFCQUFDLHNCQUFELENBQVksS0FBWjtBQUFBLDZCQUNJLHFCQUFDLGVBQUQ7QUFBVSxRQUFBLEtBQUssRUFBRTtBQUFqQjtBQURKO0FBRCtCLEtBQVY7QUFBQSxDQUFsQjs7O0FBS1BTLFNBQVMsQ0FBQ1QsSUFBVixHQUFpQjtBQUNiRyxFQUFBQSxLQUFLLEVBQUU7QUFETSxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIExhYmVsVmFsdWUgfSBmcm9tICcuL0xhYmVsVmFsdWUnO1xyXG5pbXBvcnQge0NoZWNrYm94fSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHRpdGxlOiAnc3dmLXVpLWtpdC9MYWJlbCZWYWx1ZS9MYWJlbFZhbHVlJyxcclxuICAgIGNvbXBvbmVudDogTGFiZWxWYWx1ZSxcclxufTtcclxuXHJcblxyXG5jb25zdCBUZW1wbGF0ZSA9IChhcmdzKSA9PiA8TGFiZWxWYWx1ZSB7Li4uYXJnc30vPjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdGFuZGFyZCA9IFRlbXBsYXRlLmJpbmQoe30pO1xyXG5TdGFuZGFyZC5hcmdzID0ge1xyXG4gICAgbGFiZWw6IFwiTGFiZWxcIixcclxuICAgIHZhbHVlOiBcInZhbHVlXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IElubGluZSA9IFRlbXBsYXRlLmJpbmQoe30pO1xyXG5JbmxpbmUuYXJncyA9IHtcclxuICAgIC4uLlN0YW5kYXJkLmFyZ3MsXHJcbiAgICBpbmxpbmU6IHRydWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVuaW1wb3J0YW50TGFiZWwgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcclxuVW5pbXBvcnRhbnRMYWJlbC5hcmdzID0ge1xyXG4gICAgLi4uU3RhbmRhcmQuYXJncyxcclxuICAgIGltcG9ydGFudExhYmVsOiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2xvdFZhbHVlID0gKGFyZ3MpID0+IDxMYWJlbFZhbHVlIHsuLi5hcmdzfT5cclxuICAgIDxMYWJlbFZhbHVlLlZhbHVlPlxyXG4gICAgICAgIDxDaGVja2JveCB2YWx1ZT17XCJzbG90IHZhbHVlXCJ9Lz5cclxuICAgIDwvTGFiZWxWYWx1ZS5WYWx1ZT5cclxuPC9MYWJlbFZhbHVlPlxyXG5TbG90VmFsdWUuYXJncyA9IHtcclxuICAgIGxhYmVsOiBcIkxhYmVsXCIsXHJcbn0iXX0=