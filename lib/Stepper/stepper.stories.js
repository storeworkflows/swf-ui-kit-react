"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Stepper = _interopRequireDefault(require("./Stepper"));

var _tableCategories = require("../../.storybook/tableCategories");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Controls/Stepper',
  component: _Stepper["default"],
  argTypes: {
    steps: _tableCategories.TABLE_CATEGORIES.VALUE,
    selectedItem: _tableCategories.TABLE_CATEGORIES.VALUE,
    palette: _tableCategories.TABLE_CATEGORIES.STYLE,
    iconSize: _tableCategories.TABLE_CATEGORIES.STYLE,
    hideLabels: _tableCategories.TABLE_CATEGORIES.STYLE,
    disableScroll: _tableCategories.TABLE_CATEGORIES.STYLE,
    vertical: _tableCategories.TABLE_CATEGORIES.STYLE,
    completedCounter: _tableCategories.TABLE_CATEGORIES.STYLE,
    onStepClick: _tableCategories.TABLE_CATEGORIES.ACTION
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Stepper["default"], _objectSpread({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  steps: [{
    id: "1",
    icon: "alarm",
    label: "Label 1",
    sublabel: "sublabel"
  }, {
    id: "2",
    icon: "bell",
    label: "Label 2",
    progress: "partial"
  }, {
    id: "3",
    icon: "bicycle",
    label: "Label 3"
  }, {
    id: "4",
    icon: "book",
    label: "Label 4",
    disabled: true
  }]
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL3N0ZXBwZXIuc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIlN0ZXBwZXIiLCJhcmdUeXBlcyIsInN0ZXBzIiwiVEFCTEVfQ0FURUdPUklFUyIsIlZBTFVFIiwic2VsZWN0ZWRJdGVtIiwicGFsZXR0ZSIsIlNUWUxFIiwiaWNvblNpemUiLCJoaWRlTGFiZWxzIiwiZGlzYWJsZVNjcm9sbCIsInZlcnRpY2FsIiwiY29tcGxldGVkQ291bnRlciIsIm9uU3RlcENsaWNrIiwiQUNUSU9OIiwiVGVtcGxhdGUiLCJhcmdzIiwiRGVmYXVsdCIsImJpbmQiLCJpZCIsImljb24iLCJsYWJlbCIsInN1YmxhYmVsIiwicHJvZ3Jlc3MiLCJkaXNhYmxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7ZUFFZTtBQUNYQSxFQUFBQSxLQUFLLEVBQUUsNkJBREk7QUFFWEMsRUFBQUEsU0FBUyxFQUFFQyxtQkFGQTtBQUdYQyxFQUFBQSxRQUFRLEVBQUU7QUFDTkMsSUFBQUEsS0FBSyxFQUFFQyxrQ0FBaUJDLEtBRGxCO0FBRU5DLElBQUFBLFlBQVksRUFBRUYsa0NBQWlCQyxLQUZ6QjtBQUlORSxJQUFBQSxPQUFPLEVBQUVILGtDQUFpQkksS0FKcEI7QUFLTkMsSUFBQUEsUUFBUSxFQUFFTCxrQ0FBaUJJLEtBTHJCO0FBTU5FLElBQUFBLFVBQVUsRUFBRU4sa0NBQWlCSSxLQU52QjtBQU9ORyxJQUFBQSxhQUFhLEVBQUVQLGtDQUFpQkksS0FQMUI7QUFRTkksSUFBQUEsUUFBUSxFQUFFUixrQ0FBaUJJLEtBUnJCO0FBU05LLElBQUFBLGdCQUFnQixFQUFFVCxrQ0FBaUJJLEtBVDdCO0FBV05NLElBQUFBLFdBQVcsRUFBRVYsa0NBQWlCVztBQVh4QjtBQUhDLEM7OztBQW1CZixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFEO0FBQUEsc0JBQVUscUJBQUMsbUJBQUQsb0JBQWFBLElBQWIsRUFBVjtBQUFBLENBQWpCOztBQUVPLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFoQjs7QUFDUEQsT0FBTyxDQUFDRCxJQUFSLEdBQWU7QUFDWGQsRUFBQUEsS0FBSyxFQUFFLENBQ0g7QUFDSWlCLElBQUFBLEVBQUUsRUFBRSxHQURSO0FBRUlDLElBQUFBLElBQUksRUFBRSxPQUZWO0FBR0lDLElBQUFBLEtBQUssRUFBRSxTQUhYO0FBSUlDLElBQUFBLFFBQVEsRUFBRTtBQUpkLEdBREcsRUFPSDtBQUNJSCxJQUFBQSxFQUFFLEVBQUUsR0FEUjtBQUVJQyxJQUFBQSxJQUFJLEVBQUUsTUFGVjtBQUdJQyxJQUFBQSxLQUFLLEVBQUUsU0FIWDtBQUlJRSxJQUFBQSxRQUFRLEVBQUU7QUFKZCxHQVBHLEVBYUg7QUFDSUosSUFBQUEsRUFBRSxFQUFFLEdBRFI7QUFFSUMsSUFBQUEsSUFBSSxFQUFFLFNBRlY7QUFHSUMsSUFBQUEsS0FBSyxFQUFFO0FBSFgsR0FiRyxFQWtCSDtBQUNJRixJQUFBQSxFQUFFLEVBQUUsR0FEUjtBQUVJQyxJQUFBQSxJQUFJLEVBQUUsTUFGVjtBQUdJQyxJQUFBQSxLQUFLLEVBQUUsU0FIWDtBQUlJRyxJQUFBQSxRQUFRLEVBQUU7QUFKZCxHQWxCRztBQURJLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBTdGVwcGVyfSBmcm9tICcuL1N0ZXBwZXInO1xyXG5pbXBvcnQge1RBQkxFX0NBVEVHT1JJRVN9IGZyb20gXCIuLi8uLi8uc3Rvcnlib29rL3RhYmxlQ2F0ZWdvcmllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgdGl0bGU6ICdzd2YtdWkta2l0L0NvbnRyb2xzL1N0ZXBwZXInLFxyXG4gICAgY29tcG9uZW50OiBTdGVwcGVyLFxyXG4gICAgYXJnVHlwZXM6IHtcclxuICAgICAgICBzdGVwczogVEFCTEVfQ0FURUdPUklFUy5WQUxVRSxcclxuICAgICAgICBzZWxlY3RlZEl0ZW06IFRBQkxFX0NBVEVHT1JJRVMuVkFMVUUsXHJcblxyXG4gICAgICAgIHBhbGV0dGU6IFRBQkxFX0NBVEVHT1JJRVMuU1RZTEUsXHJcbiAgICAgICAgaWNvblNpemU6IFRBQkxFX0NBVEVHT1JJRVMuU1RZTEUsXHJcbiAgICAgICAgaGlkZUxhYmVsczogVEFCTEVfQ0FURUdPUklFUy5TVFlMRSxcclxuICAgICAgICBkaXNhYmxlU2Nyb2xsOiBUQUJMRV9DQVRFR09SSUVTLlNUWUxFLFxyXG4gICAgICAgIHZlcnRpY2FsOiBUQUJMRV9DQVRFR09SSUVTLlNUWUxFLFxyXG4gICAgICAgIGNvbXBsZXRlZENvdW50ZXI6IFRBQkxFX0NBVEVHT1JJRVMuU1RZTEUsXHJcblxyXG4gICAgICAgIG9uU3RlcENsaWNrOiBUQUJMRV9DQVRFR09SSUVTLkFDVElPTlxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmNvbnN0IFRlbXBsYXRlID0gKGFyZ3MpID0+IDxTdGVwcGVyIHsuLi5hcmdzfS8+O1xyXG5cclxuZXhwb3J0IGNvbnN0IERlZmF1bHQgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcclxuRGVmYXVsdC5hcmdzID0ge1xyXG4gICAgc3RlcHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBcIjFcIixcclxuICAgICAgICAgICAgaWNvbjogXCJhbGFybVwiLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJMYWJlbCAxXCIsXHJcbiAgICAgICAgICAgIHN1YmxhYmVsOiBcInN1YmxhYmVsXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwiMlwiLFxyXG4gICAgICAgICAgICBpY29uOiBcImJlbGxcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiTGFiZWwgMlwiLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogXCJwYXJ0aWFsXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwiM1wiLFxyXG4gICAgICAgICAgICBpY29uOiBcImJpY3ljbGVcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiTGFiZWwgM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBcIjRcIixcclxuICAgICAgICAgICAgaWNvbjogXCJib29rXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkxhYmVsIDRcIixcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbiJdfQ==