"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelIconButton = exports.IconButton = exports.LabelButton = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var _tableCategories = require("../../.storybook/tableCategories");

var _storybookAddonDesigns = require("storybook-addon-designs");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Controls/Button',
  component: _Button["default"],
  argTypes: {
    label: _tableCategories.TABLE_CATEGORIES.VALUE,
    icon: _tableCategories.TABLE_CATEGORIES.VALUE,
    disabled: _tableCategories.TABLE_CATEGORIES.VALUE,
    innerRef: _tableCategories.TABLE_CATEGORIES.VALUE,
    variant: _tableCategories.TABLE_CATEGORIES.STYLE,
    size: _tableCategories.TABLE_CATEGORIES.STYLE,
    tooltipContent: _tableCategories.TABLE_CATEGORIES.STYLE,
    className: _tableCategories.TABLE_CATEGORIES.STYLE,
    customStyle: _tableCategories.TABLE_CATEGORIES.STYLE,
    onClick: _tableCategories.TABLE_CATEGORIES.ACTION
  },
  decorators: [_storybookAddonDesigns.withDesign],
  parameters: {
    controls: {
      sort: 'requiredFirst'
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/UNUiwIzQiaJzr42cHV3rki/Storybook?node-id=0%3A1'
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], _objectSpread({}, args));
};

var LabelButton = Template.bind({});
exports.LabelButton = LabelButton;
LabelButton.args = {
  label: 'Button'
};
var IconButton = Template.bind({});
exports.IconButton = IconButton;
IconButton.args = {
  icon: 'alarm',
  variant: "primary",
  size: "sm"
};
var LabelIconButton = Template.bind({});
exports.LabelIconButton = LabelIconButton;
LabelIconButton.args = {
  label: "Label",
  icon: 'alarm',
  variant: "tertiary",
  size: "lg"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uLnN0b3JpZXMuanMiXSwibmFtZXMiOlsidGl0bGUiLCJjb21wb25lbnQiLCJCdXR0b24iLCJhcmdUeXBlcyIsImxhYmVsIiwiVEFCTEVfQ0FURUdPUklFUyIsIlZBTFVFIiwiaWNvbiIsImRpc2FibGVkIiwiaW5uZXJSZWYiLCJ2YXJpYW50IiwiU1RZTEUiLCJzaXplIiwidG9vbHRpcENvbnRlbnQiLCJjbGFzc05hbWUiLCJjdXN0b21TdHlsZSIsIm9uQ2xpY2siLCJBQ1RJT04iLCJkZWNvcmF0b3JzIiwid2l0aERlc2lnbiIsInBhcmFtZXRlcnMiLCJjb250cm9scyIsInNvcnQiLCJkZXNpZ24iLCJ0eXBlIiwidXJsIiwiVGVtcGxhdGUiLCJhcmdzIiwiTGFiZWxCdXR0b24iLCJiaW5kIiwiSWNvbkJ1dHRvbiIsIkxhYmVsSWNvbkJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7ZUFHZTtBQUNYQSxFQUFBQSxLQUFLLEVBQUUsNEJBREk7QUFFWEMsRUFBQUEsU0FBUyxFQUFFQyxrQkFGQTtBQUdYQyxFQUFBQSxRQUFRLEVBQUU7QUFDTkMsSUFBQUEsS0FBSyxFQUFFQyxrQ0FBaUJDLEtBRGxCO0FBRU5DLElBQUFBLElBQUksRUFBRUYsa0NBQWlCQyxLQUZqQjtBQUdORSxJQUFBQSxRQUFRLEVBQUVILGtDQUFpQkMsS0FIckI7QUFJTkcsSUFBQUEsUUFBUSxFQUFFSixrQ0FBaUJDLEtBSnJCO0FBTU5JLElBQUFBLE9BQU8sRUFBRUwsa0NBQWlCTSxLQU5wQjtBQU9OQyxJQUFBQSxJQUFJLEVBQUVQLGtDQUFpQk0sS0FQakI7QUFRTkUsSUFBQUEsY0FBYyxFQUFFUixrQ0FBaUJNLEtBUjNCO0FBU05HLElBQUFBLFNBQVMsRUFBRVQsa0NBQWlCTSxLQVR0QjtBQVVOSSxJQUFBQSxXQUFXLEVBQUVWLGtDQUFpQk0sS0FWeEI7QUFZTkssSUFBQUEsT0FBTyxFQUFFWCxrQ0FBaUJZO0FBWnBCLEdBSEM7QUFpQlhDLEVBQUFBLFVBQVUsRUFBRSxDQUFDQyxpQ0FBRCxDQWpCRDtBQWtCWEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRTtBQUNOQyxNQUFBQSxJQUFJLEVBQUU7QUFEQSxLQURGO0FBSVJDLElBQUFBLE1BQU0sRUFBRTtBQUNKQyxNQUFBQSxJQUFJLEVBQUUsT0FERjtBQUVKQyxNQUFBQSxHQUFHLEVBQUU7QUFGRDtBQUpBO0FBbEJELEM7OztBQStCZixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFEO0FBQUEsc0JBQVUscUJBQUMsa0JBQUQsb0JBQVlBLElBQVosRUFBVjtBQUFBLENBQWpCOztBQUVPLElBQU1DLFdBQVcsR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFwQjs7QUFDUEQsV0FBVyxDQUFDRCxJQUFaLEdBQW1CO0FBQ2Z2QixFQUFBQSxLQUFLLEVBQUU7QUFEUSxDQUFuQjtBQUlPLElBQU0wQixVQUFVLEdBQUdKLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBbkI7O0FBQ1BDLFVBQVUsQ0FBQ0gsSUFBWCxHQUFrQjtBQUNkcEIsRUFBQUEsSUFBSSxFQUFFLE9BRFE7QUFFZEcsRUFBQUEsT0FBTyxFQUFFLFNBRks7QUFHZEUsRUFBQUEsSUFBSSxFQUFFO0FBSFEsQ0FBbEI7QUFPTyxJQUFNbUIsZUFBZSxHQUFHTCxRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQXhCOztBQUNQRSxlQUFlLENBQUNKLElBQWhCLEdBQXVCO0FBQ25CdkIsRUFBQUEsS0FBSyxFQUFFLE9BRFk7QUFFbkJHLEVBQUFBLElBQUksRUFBRSxPQUZhO0FBR25CRyxFQUFBQSxPQUFPLEVBQUUsVUFIVTtBQUluQkUsRUFBQUEsSUFBSSxFQUFFO0FBSmEsQ0FBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XHJcbmltcG9ydCB7VEFCTEVfQ0FURUdPUklFU30gZnJvbSBcIi4uLy4uLy5zdG9yeWJvb2svdGFibGVDYXRlZ29yaWVzXCI7XHJcbmltcG9ydCB7d2l0aERlc2lnbn0gZnJvbSBcInN0b3J5Ym9vay1hZGRvbi1kZXNpZ25zXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgdGl0bGU6ICdzd2YtdWkta2l0L0NvbnRyb2xzL0J1dHRvbicsXHJcbiAgICBjb21wb25lbnQ6IEJ1dHRvbixcclxuICAgIGFyZ1R5cGVzOiB7XHJcbiAgICAgICAgbGFiZWw6IFRBQkxFX0NBVEVHT1JJRVMuVkFMVUUsXHJcbiAgICAgICAgaWNvbjogVEFCTEVfQ0FURUdPUklFUy5WQUxVRSxcclxuICAgICAgICBkaXNhYmxlZDogVEFCTEVfQ0FURUdPUklFUy5WQUxVRSxcclxuICAgICAgICBpbm5lclJlZjogVEFCTEVfQ0FURUdPUklFUy5WQUxVRSxcclxuXHJcbiAgICAgICAgdmFyaWFudDogVEFCTEVfQ0FURUdPUklFUy5TVFlMRSxcclxuICAgICAgICBzaXplOiBUQUJMRV9DQVRFR09SSUVTLlNUWUxFLFxyXG4gICAgICAgIHRvb2x0aXBDb250ZW50OiBUQUJMRV9DQVRFR09SSUVTLlNUWUxFLFxyXG4gICAgICAgIGNsYXNzTmFtZTogVEFCTEVfQ0FURUdPUklFUy5TVFlMRSxcclxuICAgICAgICBjdXN0b21TdHlsZTogVEFCTEVfQ0FURUdPUklFUy5TVFlMRSxcclxuXHJcbiAgICAgICAgb25DbGljazogVEFCTEVfQ0FURUdPUklFUy5BQ1RJT05cclxuICAgIH0sXHJcbiAgICBkZWNvcmF0b3JzOiBbd2l0aERlc2lnbl0sXHJcbiAgICBwYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgY29udHJvbHM6IHtcclxuICAgICAgICAgICAgc29ydDogJ3JlcXVpcmVkRmlyc3QnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXNpZ246IHtcclxuICAgICAgICAgICAgdHlwZTogJ2ZpZ21hJyxcclxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmlnbWEuY29tL2ZpbGUvVU5VaXdJelFpYUp6cjQyY0hWM3JraS9TdG9yeWJvb2s/bm9kZS1pZD0wJTNBMSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuXHJcbmNvbnN0IFRlbXBsYXRlID0gKGFyZ3MpID0+IDxCdXR0b24gey4uLmFyZ3N9IC8+O1xyXG5cclxuZXhwb3J0IGNvbnN0IExhYmVsQnV0dG9uID0gVGVtcGxhdGUuYmluZCh7fSk7XHJcbkxhYmVsQnV0dG9uLmFyZ3MgPSB7XHJcbiAgICBsYWJlbDogJ0J1dHRvbicsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSWNvbkJ1dHRvbiA9IFRlbXBsYXRlLmJpbmQoe30pO1xyXG5JY29uQnV0dG9uLmFyZ3MgPSB7XHJcbiAgICBpY29uOiAnYWxhcm0nLFxyXG4gICAgdmFyaWFudDogXCJwcmltYXJ5XCIsXHJcbiAgICBzaXplOiBcInNtXCJcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTGFiZWxJY29uQnV0dG9uID0gVGVtcGxhdGUuYmluZCh7fSk7XHJcbkxhYmVsSWNvbkJ1dHRvbi5hcmdzID0ge1xyXG4gICAgbGFiZWw6IFwiTGFiZWxcIixcclxuICAgIGljb246ICdhbGFybScsXHJcbiAgICB2YXJpYW50OiBcInRlcnRpYXJ5XCIsXHJcbiAgICBzaXplOiBcImxnXCJcclxufTtcclxuIl19