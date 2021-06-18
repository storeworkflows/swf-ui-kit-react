"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Standard = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _RadioButtons = _interopRequireDefault(require("./RadioButtons"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Input/RadioButtons',
  component: _RadioButtons["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadioButtons["default"], _objectSpread({}, args));
};

var Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  label: "Label",
  options: [{
    id: "1",
    label: "label 1",
    value: "value 1: readonly",
    readonly: true
  }, {
    id: "2",
    label: "label 2",
    value: "value 2"
  }, {
    id: "3",
    label: "label 3",
    value: "value 3: disabled",
    disabled: true
  }, {
    id: "4",
    label: "label 4",
    value: "value 4"
  }]
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SYWRpb0J1dHRvbnMvcmFkaW9idXR0b24uc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIlJhZGlvQnV0dG9ucyIsIlRlbXBsYXRlIiwiYXJncyIsIlN0YW5kYXJkIiwiYmluZCIsImxhYmVsIiwib3B0aW9ucyIsImlkIiwidmFsdWUiLCJyZWFkb25seSIsImRpc2FibGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7OztlQUVlO0FBQ1hBLEVBQUFBLEtBQUssRUFBRSwrQkFESTtBQUVYQyxFQUFBQSxTQUFTLEVBQUVDO0FBRkEsQzs7O0FBTWYsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLHNCQUFVLHFCQUFDLHdCQUFELG9CQUFrQkEsSUFBbEIsRUFBVjtBQUFBLENBQWpCOztBQUVPLElBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFqQjs7QUFDUEQsUUFBUSxDQUFDRCxJQUFULEdBQWdCO0FBQ1pHLEVBQUFBLEtBQUssRUFBRSxPQURLO0FBRVpDLEVBQUFBLE9BQU8sRUFBRSxDQUNMO0FBQ0lDLElBQUFBLEVBQUUsRUFBRSxHQURSO0FBRUlGLElBQUFBLEtBQUssRUFBRSxTQUZYO0FBR0lHLElBQUFBLEtBQUssRUFBRSxtQkFIWDtBQUlJQyxJQUFBQSxRQUFRLEVBQUU7QUFKZCxHQURLLEVBT0w7QUFDSUYsSUFBQUEsRUFBRSxFQUFFLEdBRFI7QUFFSUYsSUFBQUEsS0FBSyxFQUFFLFNBRlg7QUFHSUcsSUFBQUEsS0FBSyxFQUFFO0FBSFgsR0FQSyxFQVlMO0FBQ0lELElBQUFBLEVBQUUsRUFBRSxHQURSO0FBRUlGLElBQUFBLEtBQUssRUFBRSxTQUZYO0FBR0lHLElBQUFBLEtBQUssRUFBRSxtQkFIWDtBQUlJRSxJQUFBQSxRQUFRLEVBQUU7QUFKZCxHQVpLLEVBa0JMO0FBQ0lILElBQUFBLEVBQUUsRUFBRSxHQURSO0FBRUlGLElBQUFBLEtBQUssRUFBRSxTQUZYO0FBR0lHLElBQUFBLEtBQUssRUFBRTtBQUhYLEdBbEJLO0FBRkcsQ0FBaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBSYWRpb0J1dHRvbnN9IGZyb20gJy4vUmFkaW9CdXR0b25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHRpdGxlOiAnc3dmLXVpLWtpdC9JbnB1dC9SYWRpb0J1dHRvbnMnLFxyXG4gICAgY29tcG9uZW50OiBSYWRpb0J1dHRvbnMsXHJcbn07XHJcblxyXG5cclxuY29uc3QgVGVtcGxhdGUgPSAoYXJncykgPT4gPFJhZGlvQnV0dG9ucyB7Li4uYXJnc30vPjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdGFuZGFyZCA9IFRlbXBsYXRlLmJpbmQoe30pO1xyXG5TdGFuZGFyZC5hcmdzID0ge1xyXG4gICAgbGFiZWw6IFwiTGFiZWxcIixcclxuICAgIG9wdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBcIjFcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwibGFiZWwgMVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJ2YWx1ZSAxOiByZWFkb25seVwiLFxyXG4gICAgICAgICAgICByZWFkb25seTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCIyXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcImxhYmVsIDJcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwidmFsdWUgMlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBcIjNcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwibGFiZWwgM1wiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJ2YWx1ZSAzOiBkaXNhYmxlZFwiLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCI0XCIsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcImxhYmVsIDRcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwidmFsdWUgNFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIF1cclxufVxyXG5cclxuIl19