"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tertiary = exports.Secondary = exports.Primary = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _HighlightedValue = _interopRequireDefault(require("./HighlightedValue"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Label&Value/HighlightedValue',
  component: _HighlightedValue["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_HighlightedValue["default"], _objectSpread({}, args));
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  label: 'Label'
};
var Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = _objectSpread(_objectSpread({}, Primary.args), {}, {
  showIcon: true,
  variant: "secondary"
});
var Tertiary = Template.bind({});
exports.Tertiary = Tertiary;
Tertiary.args = _objectSpread(_objectSpread({}, Primary.args), {}, {
  showIcon: true,
  icon: "alarm",
  variant: "tertiary"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IaWdobGlnaHRlZFZhbHVlL0hpZ2hsaWdodGVkVmFsdWUuc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIkhpZ2hsaWdodGVkVmFsdWUiLCJUZW1wbGF0ZSIsImFyZ3MiLCJQcmltYXJ5IiwiYmluZCIsImxhYmVsIiwiU2Vjb25kYXJ5Iiwic2hvd0ljb24iLCJ2YXJpYW50IiwiVGVydGlhcnkiLCJpY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7OztlQUVlO0FBQ1hBLEVBQUFBLEtBQUssRUFBRSx5Q0FESTtBQUVYQyxFQUFBQSxTQUFTLEVBQUVDO0FBRkEsQzs7O0FBS2YsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLHNCQUFVLHFCQUFDLDRCQUFELG9CQUFzQkEsSUFBdEIsRUFBVjtBQUFBLENBQWpCOztBQUVPLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFoQjs7QUFDUEQsT0FBTyxDQUFDRCxJQUFSLEdBQWU7QUFDWEcsRUFBQUEsS0FBSyxFQUFFO0FBREksQ0FBZjtBQUlPLElBQU1DLFNBQVMsR0FBR0wsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFsQjs7QUFDUEUsU0FBUyxDQUFDSixJQUFWLG1DQUNPQyxPQUFPLENBQUNELElBRGY7QUFFSUssRUFBQUEsUUFBUSxFQUFFLElBRmQ7QUFHSUMsRUFBQUEsT0FBTyxFQUFFO0FBSGI7QUFNTyxJQUFNQyxRQUFRLEdBQUdSLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBakI7O0FBQ1BLLFFBQVEsQ0FBQ1AsSUFBVCxtQ0FDT0MsT0FBTyxDQUFDRCxJQURmO0FBRUlLLEVBQUFBLFFBQVEsRUFBRSxJQUZkO0FBR0lHLEVBQUFBLElBQUksRUFBRSxPQUhWO0FBSUlGLEVBQUFBLE9BQU8sRUFBRTtBQUpiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgSGlnaGxpZ2h0ZWRWYWx1ZSB9IGZyb20gJy4vSGlnaGxpZ2h0ZWRWYWx1ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICB0aXRsZTogJ3N3Zi11aS1raXQvTGFiZWwmVmFsdWUvSGlnaGxpZ2h0ZWRWYWx1ZScsXHJcbiAgICBjb21wb25lbnQ6IEhpZ2hsaWdodGVkVmFsdWVcclxufTtcclxuXHJcbmNvbnN0IFRlbXBsYXRlID0gKGFyZ3MpID0+IDxIaWdobGlnaHRlZFZhbHVlIHsuLi5hcmdzfSAvPjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmltYXJ5ID0gVGVtcGxhdGUuYmluZCh7fSk7XHJcblByaW1hcnkuYXJncyA9IHtcclxuICAgIGxhYmVsOiAnTGFiZWwnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlY29uZGFyeSA9IFRlbXBsYXRlLmJpbmQoe30pO1xyXG5TZWNvbmRhcnkuYXJncyA9IHtcclxuICAgIC4uLlByaW1hcnkuYXJncyxcclxuICAgIHNob3dJY29uOiB0cnVlLFxyXG4gICAgdmFyaWFudDogXCJzZWNvbmRhcnlcIlxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRlcnRpYXJ5ID0gVGVtcGxhdGUuYmluZCh7fSk7XHJcblRlcnRpYXJ5LmFyZ3MgPSB7XHJcbiAgICAuLi5QcmltYXJ5LmFyZ3MsXHJcbiAgICBzaG93SWNvbjogdHJ1ZSxcclxuICAgIGljb246IFwiYWxhcm1cIixcclxuICAgIHZhcmlhbnQ6IFwidGVydGlhcnlcIlxyXG59O1xyXG4iXX0=