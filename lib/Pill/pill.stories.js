"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithIcon = exports.WithMember = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Pill = _interopRequireDefault(require("./Pill"));

var _tableCategories = require("../../.storybook/tableCategories");

var _utils = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/DataVisualisation/Pill',
  component: _Pill["default"],
  argTypes: {
    icon: _tableCategories.TABLE_CATEGORIES.VALUE,
    member: _tableCategories.TABLE_CATEGORIES.VALUE,
    label: _tableCategories.TABLE_CATEGORIES.VALUE,
    canDismiss: _tableCategories.TABLE_CATEGORIES.STATE,
    disabled: _tableCategories.TABLE_CATEGORIES.STATE,
    clickable: _tableCategories.TABLE_CATEGORIES.STATE,
    outline: _tableCategories.TABLE_CATEGORIES.STYLE,
    size: _tableCategories.TABLE_CATEGORIES.STYLE,
    classNames: _tableCategories.TABLE_CATEGORIES.STYLE,
    color: _tableCategories.TABLE_CATEGORIES.STYLE,
    deleteIcon: _tableCategories.TABLE_CATEGORIES.STYLE,
    onDelete: _tableCategories.TABLE_CATEGORIES.ACTION,
    onClick: _tableCategories.TABLE_CATEGORIES.ACTION
  },
  args: {
    label: "label"
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pill["default"], _objectSpread({}, args));
};

var WithMember = Template.bind({});
exports.WithMember = WithMember;
WithMember.args = {
  member: {
    name: "Name Surname",
    title: "title",
    id: "1"
  }
};
var WithIcon = Template.bind({});
exports.WithIcon = WithIcon;
WithIcon.args = {
  icon: "alarm",
  canDismiss: true,
  color: "primary",
  size: "sm",
  onDelete: _utils.noop
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QaWxsL3BpbGwuc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIlBpbGwiLCJhcmdUeXBlcyIsImljb24iLCJUQUJMRV9DQVRFR09SSUVTIiwiVkFMVUUiLCJtZW1iZXIiLCJsYWJlbCIsImNhbkRpc21pc3MiLCJTVEFURSIsImRpc2FibGVkIiwiY2xpY2thYmxlIiwib3V0bGluZSIsIlNUWUxFIiwic2l6ZSIsImNsYXNzTmFtZXMiLCJjb2xvciIsImRlbGV0ZUljb24iLCJvbkRlbGV0ZSIsIkFDVElPTiIsIm9uQ2xpY2siLCJhcmdzIiwiVGVtcGxhdGUiLCJXaXRoTWVtYmVyIiwiYmluZCIsIm5hbWUiLCJpZCIsIldpdGhJY29uIiwibm9vcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7ZUFFZTtBQUNYQSxFQUFBQSxLQUFLLEVBQUUsbUNBREk7QUFFWEMsRUFBQUEsU0FBUyxFQUFFQyxnQkFGQTtBQUdYQyxFQUFBQSxRQUFRLEVBQUU7QUFDTkMsSUFBQUEsSUFBSSxFQUFFQyxrQ0FBaUJDLEtBRGpCO0FBRU5DLElBQUFBLE1BQU0sRUFBRUYsa0NBQWlCQyxLQUZuQjtBQUdORSxJQUFBQSxLQUFLLEVBQUVILGtDQUFpQkMsS0FIbEI7QUFLTkcsSUFBQUEsVUFBVSxFQUFFSixrQ0FBaUJLLEtBTHZCO0FBTU5DLElBQUFBLFFBQVEsRUFBRU4sa0NBQWlCSyxLQU5yQjtBQU9ORSxJQUFBQSxTQUFTLEVBQUVQLGtDQUFpQkssS0FQdEI7QUFTTkcsSUFBQUEsT0FBTyxFQUFFUixrQ0FBaUJTLEtBVHBCO0FBVU5DLElBQUFBLElBQUksRUFBRVYsa0NBQWlCUyxLQVZqQjtBQVdORSxJQUFBQSxVQUFVLEVBQUVYLGtDQUFpQlMsS0FYdkI7QUFZTkcsSUFBQUEsS0FBSyxFQUFFWixrQ0FBaUJTLEtBWmxCO0FBYU5JLElBQUFBLFVBQVUsRUFBRWIsa0NBQWlCUyxLQWJ2QjtBQWVOSyxJQUFBQSxRQUFRLEVBQUVkLGtDQUFpQmUsTUFmckI7QUFnQk5DLElBQUFBLE9BQU8sRUFBRWhCLGtDQUFpQmU7QUFoQnBCLEdBSEM7QUFxQlhFLEVBQUFBLElBQUksRUFBRTtBQUNGZCxJQUFBQSxLQUFLLEVBQUU7QUFETDtBQXJCSyxDOzs7QUEyQmYsSUFBTWUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0QsSUFBRDtBQUFBLHNCQUFVLHFCQUFDLGdCQUFELG9CQUFVQSxJQUFWLEVBQVY7QUFBQSxDQUFqQjs7QUFFTyxJQUFNRSxVQUFVLEdBQUdELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjLEVBQWQsQ0FBbkI7O0FBQ1BELFVBQVUsQ0FBQ0YsSUFBWCxHQUFrQjtBQUNkZixFQUFBQSxNQUFNLEVBQUU7QUFDQW1CLElBQUFBLElBQUksRUFBRSxjQUROO0FBRUExQixJQUFBQSxLQUFLLEVBQUUsT0FGUDtBQUdBMkIsSUFBQUEsRUFBRSxFQUFFO0FBSEo7QUFETSxDQUFsQjtBQVFPLElBQU1DLFFBQVEsR0FBR0wsUUFBUSxDQUFDRSxJQUFULENBQWMsRUFBZCxDQUFqQjs7QUFDUEcsUUFBUSxDQUFDTixJQUFULEdBQWdCO0FBQ1psQixFQUFBQSxJQUFJLEVBQUUsT0FETTtBQUVaSyxFQUFBQSxVQUFVLEVBQUUsSUFGQTtBQUdaUSxFQUFBQSxLQUFLLEVBQUUsU0FISztBQUlaRixFQUFBQSxJQUFJLEVBQUUsSUFKTTtBQUtaSSxFQUFBQSxRQUFRLEVBQUVVO0FBTEUsQ0FBaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBQaWxsfSBmcm9tICcuL1BpbGwnO1xyXG5pbXBvcnQge1RBQkxFX0NBVEVHT1JJRVN9IGZyb20gXCIuLi8uLi8uc3Rvcnlib29rL3RhYmxlQ2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQge25vb3B9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgdGl0bGU6ICdzd2YtdWkta2l0L0RhdGFWaXN1YWxpc2F0aW9uL1BpbGwnLFxyXG4gICAgY29tcG9uZW50OiBQaWxsLFxyXG4gICAgYXJnVHlwZXM6IHtcclxuICAgICAgICBpY29uOiBUQUJMRV9DQVRFR09SSUVTLlZBTFVFLFxyXG4gICAgICAgIG1lbWJlcjogVEFCTEVfQ0FURUdPUklFUy5WQUxVRSxcclxuICAgICAgICBsYWJlbDogVEFCTEVfQ0FURUdPUklFUy5WQUxVRSxcclxuXHJcbiAgICAgICAgY2FuRGlzbWlzczogVEFCTEVfQ0FURUdPUklFUy5TVEFURSxcclxuICAgICAgICBkaXNhYmxlZDogVEFCTEVfQ0FURUdPUklFUy5TVEFURSxcclxuICAgICAgICBjbGlja2FibGU6IFRBQkxFX0NBVEVHT1JJRVMuU1RBVEUsXHJcblxyXG4gICAgICAgIG91dGxpbmU6IFRBQkxFX0NBVEVHT1JJRVMuU1RZTEUsXHJcbiAgICAgICAgc2l6ZTogVEFCTEVfQ0FURUdPUklFUy5TVFlMRSxcclxuICAgICAgICBjbGFzc05hbWVzOiBUQUJMRV9DQVRFR09SSUVTLlNUWUxFLFxyXG4gICAgICAgIGNvbG9yOiBUQUJMRV9DQVRFR09SSUVTLlNUWUxFLFxyXG4gICAgICAgIGRlbGV0ZUljb246IFRBQkxFX0NBVEVHT1JJRVMuU1RZTEUsXHJcblxyXG4gICAgICAgIG9uRGVsZXRlOiBUQUJMRV9DQVRFR09SSUVTLkFDVElPTixcclxuICAgICAgICBvbkNsaWNrOiBUQUJMRV9DQVRFR09SSUVTLkFDVElPTlxyXG4gICAgfSxcclxuICAgIGFyZ3M6IHtcclxuICAgICAgICBsYWJlbDogXCJsYWJlbFwiXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuY29uc3QgVGVtcGxhdGUgPSAoYXJncykgPT4gPFBpbGwgey4uLmFyZ3N9Lz47XHJcblxyXG5leHBvcnQgY29uc3QgV2l0aE1lbWJlciA9IFRlbXBsYXRlLmJpbmQoe30pO1xyXG5XaXRoTWVtYmVyLmFyZ3MgPSB7XHJcbiAgICBtZW1iZXI6IHtcclxuICAgICAgICAgICAgbmFtZTogXCJOYW1lIFN1cm5hbWVcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwidGl0bGVcIixcclxuICAgICAgICAgICAgaWQ6IFwiMVwiXHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV2l0aEljb24gPSBUZW1wbGF0ZS5iaW5kKHt9KTtcclxuV2l0aEljb24uYXJncyA9IHtcclxuICAgIGljb246IFwiYWxhcm1cIixcclxuICAgIGNhbkRpc21pc3M6IHRydWUsXHJcbiAgICBjb2xvcjogXCJwcmltYXJ5XCIsXHJcbiAgICBzaXplOiBcInNtXCIsXHJcbiAgICBvbkRlbGV0ZTogbm9vcFxyXG59XHJcblxyXG4iXX0=