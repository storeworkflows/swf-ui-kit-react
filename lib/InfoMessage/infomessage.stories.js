"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithIcon = exports.Standard = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _InfoMessage = _interopRequireDefault(require("./InfoMessage"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Messages/InfoMessage',
  component: _InfoMessage["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_InfoMessage["default"], _objectSpread({}, args));
};

var Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  status: "red",
  content: "Message content"
};
var WithIcon = Template.bind({});
exports.WithIcon = WithIcon;
WithIcon.args = {
  status: "green",
  content: "Message content",
  icon: "alarm"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbmZvTWVzc2FnZS9pbmZvbWVzc2FnZS5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwiSW5mb01lc3NhZ2UiLCJUZW1wbGF0ZSIsImFyZ3MiLCJTdGFuZGFyZCIsImJpbmQiLCJzdGF0dXMiLCJjb250ZW50IiwiV2l0aEljb24iLCJpY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7OztlQUVlO0FBQ1hBLEVBQUFBLEtBQUssRUFBRSxpQ0FESTtBQUVYQyxFQUFBQSxTQUFTLEVBQUVDO0FBRkEsQzs7O0FBS2YsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLHNCQUFVLHFCQUFDLHVCQUFELG9CQUFpQkEsSUFBakIsRUFBVjtBQUFBLENBQWpCOztBQUVPLElBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFqQjs7QUFDUEQsUUFBUSxDQUFDRCxJQUFULEdBQWdCO0FBQ1pHLEVBQUFBLE1BQU0sRUFBRSxLQURJO0FBRVpDLEVBQUFBLE9BQU8sRUFBRTtBQUZHLENBQWhCO0FBS08sSUFBTUMsUUFBUSxHQUFHTixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWpCOztBQUNQRyxRQUFRLENBQUNMLElBQVQsR0FBZ0I7QUFDWkcsRUFBQUEsTUFBTSxFQUFFLE9BREk7QUFFWkMsRUFBQUEsT0FBTyxFQUFFLGlCQUZHO0FBR1pFLEVBQUFBLElBQUksRUFBRTtBQUhNLENBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgSW5mb01lc3NhZ2UgfSBmcm9tICcuL0luZm9NZXNzYWdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHRpdGxlOiAnc3dmLXVpLWtpdC9NZXNzYWdlcy9JbmZvTWVzc2FnZScsXHJcbiAgICBjb21wb25lbnQ6IEluZm9NZXNzYWdlXHJcbn07XHJcblxyXG5jb25zdCBUZW1wbGF0ZSA9IChhcmdzKSA9PiA8SW5mb01lc3NhZ2Ugey4uLmFyZ3N9Lz47XHJcblxyXG5leHBvcnQgY29uc3QgU3RhbmRhcmQgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcclxuU3RhbmRhcmQuYXJncyA9IHtcclxuICAgIHN0YXR1czogXCJyZWRcIixcclxuICAgIGNvbnRlbnQ6IFwiTWVzc2FnZSBjb250ZW50XCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFdpdGhJY29uID0gVGVtcGxhdGUuYmluZCh7fSk7XHJcbldpdGhJY29uLmFyZ3MgPSB7XHJcbiAgICBzdGF0dXM6IFwiZ3JlZW5cIixcclxuICAgIGNvbnRlbnQ6IFwiTWVzc2FnZSBjb250ZW50XCIsXHJcbiAgICBpY29uOiBcImFsYXJtXCJcclxufVxyXG4iXX0=