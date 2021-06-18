"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Standard = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Toggle = _interopRequireDefault(require("./Toggle"));

var _tableCategories = require("../../.storybook/tableCategories");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Input/Toggle',
  component: _Toggle["default"],
  argTypes: {
    checked: _tableCategories.TABLE_CATEGORIES.STATE,
    disabled: _tableCategories.TABLE_CATEGORIES.STATE,
    manageChecked: _tableCategories.TABLE_CATEGORIES.MANAGING,
    size: _tableCategories.TABLE_CATEGORIES.STYLE,
    customStyle: _tableCategories.TABLE_CATEGORIES.STYLE,
    onClick: _tableCategories.TABLE_CATEGORIES.ACTION
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Toggle["default"], _objectSpread({}, args));
};

var Standard = Template.bind({});
exports.Standard = Standard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub2dnbGUvdG9vZ2xlLnN0b3JpZXMuanMiXSwibmFtZXMiOlsidGl0bGUiLCJjb21wb25lbnQiLCJUb2dnbGUiLCJhcmdUeXBlcyIsImNoZWNrZWQiLCJUQUJMRV9DQVRFR09SSUVTIiwiU1RBVEUiLCJkaXNhYmxlZCIsIm1hbmFnZUNoZWNrZWQiLCJNQU5BR0lORyIsInNpemUiLCJTVFlMRSIsImN1c3RvbVN0eWxlIiwib25DbGljayIsIkFDVElPTiIsIlRlbXBsYXRlIiwiYXJncyIsIlN0YW5kYXJkIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7ZUFFZTtBQUNYQSxFQUFBQSxLQUFLLEVBQUUseUJBREk7QUFFWEMsRUFBQUEsU0FBUyxFQUFFQyxrQkFGQTtBQUdYQyxFQUFBQSxRQUFRLEVBQUU7QUFDTkMsSUFBQUEsT0FBTyxFQUFFQyxrQ0FBaUJDLEtBRHBCO0FBRU5DLElBQUFBLFFBQVEsRUFBRUYsa0NBQWlCQyxLQUZyQjtBQUdORSxJQUFBQSxhQUFhLEVBQUVILGtDQUFpQkksUUFIMUI7QUFJTkMsSUFBQUEsSUFBSSxFQUFFTCxrQ0FBaUJNLEtBSmpCO0FBS05DLElBQUFBLFdBQVcsRUFBRVAsa0NBQWlCTSxLQUx4QjtBQU1ORSxJQUFBQSxPQUFPLEVBQUVSLGtDQUFpQlM7QUFOcEI7QUFIQyxDOzs7QUFjZixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFEO0FBQUEsc0JBQVUscUJBQUMsa0JBQUQsb0JBQVlBLElBQVosRUFBVjtBQUFBLENBQWpCOztBQUVPLElBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIFRvZ2dsZX0gZnJvbSAnLi9Ub2dnbGUnO1xyXG5pbXBvcnQge1RBQkxFX0NBVEVHT1JJRVN9IGZyb20gXCIuLi8uLi8uc3Rvcnlib29rL3RhYmxlQ2F0ZWdvcmllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgdGl0bGU6ICdzd2YtdWkta2l0L0lucHV0L1RvZ2dsZScsXHJcbiAgICBjb21wb25lbnQ6IFRvZ2dsZSxcclxuICAgIGFyZ1R5cGVzOiB7XHJcbiAgICAgICAgY2hlY2tlZDogVEFCTEVfQ0FURUdPUklFUy5TVEFURSxcclxuICAgICAgICBkaXNhYmxlZDogVEFCTEVfQ0FURUdPUklFUy5TVEFURSxcclxuICAgICAgICBtYW5hZ2VDaGVja2VkOiBUQUJMRV9DQVRFR09SSUVTLk1BTkFHSU5HLFxyXG4gICAgICAgIHNpemU6IFRBQkxFX0NBVEVHT1JJRVMuU1RZTEUsXHJcbiAgICAgICAgY3VzdG9tU3R5bGU6IFRBQkxFX0NBVEVHT1JJRVMuU1RZTEUsXHJcbiAgICAgICAgb25DbGljazogVEFCTEVfQ0FURUdPUklFUy5BQ1RJT05cclxuICAgIH1cclxufTtcclxuXHJcblxyXG5jb25zdCBUZW1wbGF0ZSA9IChhcmdzKSA9PiA8VG9nZ2xlIHsuLi5hcmdzfS8+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0YW5kYXJkID0gVGVtcGxhdGUuYmluZCh7fSk7XHJcblxyXG4iXX0=