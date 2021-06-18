"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Standard = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _mock = require("./mock");

var _Tab = _interopRequireDefault(require("./Tab"));

var _tableCategories = require("../../.storybook/tableCategories");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Controls/Tab',
  component: _Tab["default"],
  argTypes: {
    items: _tableCategories.TABLE_CATEGORIES.VALUE,
    fixedWidth: _tableCategories.TABLE_CATEGORIES.STYLE,
    hideLabel: _tableCategories.TABLE_CATEGORIES.STYLE,
    manageSelectedItem: _tableCategories.TABLE_CATEGORIES.MANAGING,
    maxWidth: _tableCategories.TABLE_CATEGORIES.STYLE,
    selectedItem: _tableCategories.TABLE_CATEGORIES.VALUE,
    tabsAlignment: _tableCategories.TABLE_CATEGORIES.STYLE,
    onClick: _tableCategories.TABLE_CATEGORIES.ACTION
  },
  args: {
    items: _mock.ITEMS
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab["default"], _objectSpread({}, args));
};

var Standard = Template.bind({});
exports.Standard = Standard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWIvdGFicy5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwiVGFiIiwiYXJnVHlwZXMiLCJpdGVtcyIsIlRBQkxFX0NBVEVHT1JJRVMiLCJWQUxVRSIsImZpeGVkV2lkdGgiLCJTVFlMRSIsImhpZGVMYWJlbCIsIm1hbmFnZVNlbGVjdGVkSXRlbSIsIk1BTkFHSU5HIiwibWF4V2lkdGgiLCJzZWxlY3RlZEl0ZW0iLCJ0YWJzQWxpZ25tZW50Iiwib25DbGljayIsIkFDVElPTiIsImFyZ3MiLCJJVEVNUyIsIlRlbXBsYXRlIiwiU3RhbmRhcmQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztlQUVlO0FBQ1hBLEVBQUFBLEtBQUssRUFBRSx5QkFESTtBQUVYQyxFQUFBQSxTQUFTLEVBQUVDLGVBRkE7QUFHWEMsRUFBQUEsUUFBUSxFQUFFO0FBQ05DLElBQUFBLEtBQUssRUFBRUMsa0NBQWlCQyxLQURsQjtBQUVOQyxJQUFBQSxVQUFVLEVBQUVGLGtDQUFpQkcsS0FGdkI7QUFHTkMsSUFBQUEsU0FBUyxFQUFFSixrQ0FBaUJHLEtBSHRCO0FBSU5FLElBQUFBLGtCQUFrQixFQUFFTCxrQ0FBaUJNLFFBSi9CO0FBS05DLElBQUFBLFFBQVEsRUFBRVAsa0NBQWlCRyxLQUxyQjtBQU1OSyxJQUFBQSxZQUFZLEVBQUVSLGtDQUFpQkMsS0FOekI7QUFPTlEsSUFBQUEsYUFBYSxFQUFDVCxrQ0FBaUJHLEtBUHpCO0FBUU5PLElBQUFBLE9BQU8sRUFBRVYsa0NBQWlCVztBQVJwQixHQUhDO0FBYVhDLEVBQUFBLElBQUksRUFBRTtBQUNGYixJQUFBQSxLQUFLLEVBQUVjO0FBREw7QUFiSyxDOzs7QUFtQmYsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0YsSUFBRDtBQUFBLHNCQUFVLHFCQUFDLGVBQUQsb0JBQVNBLElBQVQsRUFBVjtBQUFBLENBQWpCOztBQUVPLElBQU1HLFFBQVEsR0FBR0QsUUFBUSxDQUFDRSxJQUFULENBQWMsRUFBZCxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge0lURU1TfSBmcm9tIFwiLi9tb2NrXCI7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgVGFifSBmcm9tICcuL1RhYic7XHJcbmltcG9ydCB7VEFCTEVfQ0FURUdPUklFU30gZnJvbSBcIi4uLy4uLy5zdG9yeWJvb2svdGFibGVDYXRlZ29yaWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICB0aXRsZTogJ3N3Zi11aS1raXQvQ29udHJvbHMvVGFiJyxcclxuICAgIGNvbXBvbmVudDogVGFiLFxyXG4gICAgYXJnVHlwZXM6IHtcclxuICAgICAgICBpdGVtczogVEFCTEVfQ0FURUdPUklFUy5WQUxVRSxcclxuICAgICAgICBmaXhlZFdpZHRoOiBUQUJMRV9DQVRFR09SSUVTLlNUWUxFLFxyXG4gICAgICAgIGhpZGVMYWJlbDogVEFCTEVfQ0FURUdPUklFUy5TVFlMRSxcclxuICAgICAgICBtYW5hZ2VTZWxlY3RlZEl0ZW06IFRBQkxFX0NBVEVHT1JJRVMuTUFOQUdJTkcsXHJcbiAgICAgICAgbWF4V2lkdGg6IFRBQkxFX0NBVEVHT1JJRVMuU1RZTEUsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBUQUJMRV9DQVRFR09SSUVTLlZBTFVFLFxyXG4gICAgICAgIHRhYnNBbGlnbm1lbnQ6VEFCTEVfQ0FURUdPUklFUy5TVFlMRSxcclxuICAgICAgICBvbkNsaWNrOiBUQUJMRV9DQVRFR09SSUVTLkFDVElPTlxyXG4gICAgfSxcclxuICAgIGFyZ3M6IHtcclxuICAgICAgICBpdGVtczogSVRFTVNcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5jb25zdCBUZW1wbGF0ZSA9IChhcmdzKSA9PiA8VGFiIHsuLi5hcmdzfS8+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0YW5kYXJkID0gVGVtcGxhdGUuYmluZCh7fSk7XHJcblxyXG4iXX0=