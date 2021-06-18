"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _AvatarGroup = _interopRequireDefault(require("./AvatarGroup"));

var Avatar = _interopRequireWildcard(require("../Avatar/avatar.stories"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/DataVisualisation/AvatarGroup',
  component: _AvatarGroup["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AvatarGroup["default"], _objectSpread({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  members: [_objectSpread(_objectSpread({}, Avatar.Default.args.member), {}, {
    name: 'name 1',
    title: 'title 1'
  }), _objectSpread(_objectSpread({}, Avatar.Default.args.member), {}, {
    name: 'name 2',
    title: 'title 2'
  }), _objectSpread(_objectSpread({}, Avatar.Default.args.member), {}, {
    name: 'name 3',
    title: 'title 3'
  }), _objectSpread(_objectSpread({}, Avatar.Default.args.member), {}, {
    name: 'name 4',
    title: 'title 4'
  })]
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdmF0YXJHcm91cC9hdmF0YXJncm91cC5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwiQXZhdGFyR3JvdXAiLCJUZW1wbGF0ZSIsImFyZ3MiLCJEZWZhdWx0IiwiYmluZCIsIm1lbWJlcnMiLCJBdmF0YXIiLCJtZW1iZXIiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztlQUVlO0FBQ1hBLEVBQUFBLEtBQUssRUFBRSwwQ0FESTtBQUVYQyxFQUFBQSxTQUFTLEVBQUVDO0FBRkEsQzs7O0FBTWYsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLHNCQUFVLHFCQUFDLHVCQUFELG9CQUFpQkEsSUFBakIsRUFBVjtBQUFBLENBQWpCOztBQUNPLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFoQjs7QUFFUEQsT0FBTyxDQUFDRCxJQUFSLEdBQWU7QUFDWEcsRUFBQUEsT0FBTyxFQUFFLGlDQUNBQyxNQUFNLENBQUNILE9BQVAsQ0FBZUQsSUFBZixDQUFvQkssTUFEcEI7QUFDNEJDLElBQUFBLElBQUksRUFBRSxRQURsQztBQUM0Q1YsSUFBQUEsS0FBSyxFQUFFO0FBRG5ELHNDQUVBUSxNQUFNLENBQUNILE9BQVAsQ0FBZUQsSUFBZixDQUFvQkssTUFGcEI7QUFFNEJDLElBQUFBLElBQUksRUFBRSxRQUZsQztBQUU0Q1YsSUFBQUEsS0FBSyxFQUFFO0FBRm5ELHNDQUdBUSxNQUFNLENBQUNILE9BQVAsQ0FBZUQsSUFBZixDQUFvQkssTUFIcEI7QUFHNEJDLElBQUFBLElBQUksRUFBRSxRQUhsQztBQUc0Q1YsSUFBQUEsS0FBSyxFQUFFO0FBSG5ELHNDQUlBUSxNQUFNLENBQUNILE9BQVAsQ0FBZUQsSUFBZixDQUFvQkssTUFKcEI7QUFJNEJDLElBQUFBLElBQUksRUFBRSxRQUpsQztBQUk0Q1YsSUFBQUEsS0FBSyxFQUFFO0FBSm5EO0FBREUsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIEF2YXRhckdyb3VwIH0gZnJvbSAnLi9BdmF0YXJHcm91cCc7XHJcbmltcG9ydCAqIGFzIEF2YXRhciBmcm9tICcuLi9BdmF0YXIvYXZhdGFyLnN0b3JpZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgdGl0bGU6ICdzd2YtdWkta2l0L0RhdGFWaXN1YWxpc2F0aW9uL0F2YXRhckdyb3VwJyxcclxuICAgIGNvbXBvbmVudDogQXZhdGFyR3JvdXAsXHJcbn07XHJcblxyXG5cclxuY29uc3QgVGVtcGxhdGUgPSAoYXJncykgPT4gPEF2YXRhckdyb3VwIHsuLi5hcmdzfS8+O1xyXG5leHBvcnQgY29uc3QgRGVmYXVsdCA9IFRlbXBsYXRlLmJpbmQoe30pO1xyXG5cclxuRGVmYXVsdC5hcmdzID0ge1xyXG4gICAgbWVtYmVyczogW1xyXG4gICAgICAgIHsgLi4uQXZhdGFyLkRlZmF1bHQuYXJncy5tZW1iZXIsIG5hbWU6ICduYW1lIDEnLCB0aXRsZTogJ3RpdGxlIDEnIH0sXHJcbiAgICAgICAgeyAuLi5BdmF0YXIuRGVmYXVsdC5hcmdzLm1lbWJlciwgbmFtZTogJ25hbWUgMicsIHRpdGxlOiAndGl0bGUgMicgfSxcclxuICAgICAgICB7IC4uLkF2YXRhci5EZWZhdWx0LmFyZ3MubWVtYmVyLCBuYW1lOiAnbmFtZSAzJywgdGl0bGU6ICd0aXRsZSAzJyB9LFxyXG4gICAgICAgIHsgLi4uQXZhdGFyLkRlZmF1bHQuYXJncy5tZW1iZXIsIG5hbWU6ICduYW1lIDQnLCB0aXRsZTogJ3RpdGxlIDQnIH0sXHJcbiAgICBdLFxyXG59O1xyXG5cclxuIl19