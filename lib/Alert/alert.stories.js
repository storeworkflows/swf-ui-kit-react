"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Open = exports.Acknowledge = exports.Dismiss = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Alert = _interopRequireDefault(require("./Alert"));

var _tableCategories = require("../../.storybook/tableCategories");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Messages/Alert',
  component: _Alert["default"],
  argTypes: {
    content: _tableCategories.TABLE_CATEGORIES.VALUE,
    header: _tableCategories.TABLE_CATEGORIES.VALUE,
    icon: _tableCategories.TABLE_CATEGORIES.VALUE,
    textLinkProps: _tableCategories.TABLE_CATEGORIES.VALUE,
    action: _tableCategories.TABLE_CATEGORIES.VALUE,
    color: _objectSpread(_objectSpread({}, _tableCategories.TABLE_CATEGORIES.STYLE), {}, {
      options: ["yellow", "red", "green", "blue", "grey", "grey-blue"],
      control: {
        type: 'select'
      }
    }),
    delay: _tableCategories.TABLE_CATEGORIES.STATE,
    visible: _tableCategories.TABLE_CATEGORIES.STATE,
    expanded: _tableCategories.TABLE_CATEGORIES.STATE,
    manageExpanded: _tableCategories.TABLE_CATEGORIES.MANAGING,
    manageVisibility: _tableCategories.TABLE_CATEGORIES.MANAGING,
    manageButtonClick: _tableCategories.TABLE_CATEGORIES.MANAGING,
    onExpandAction: _tableCategories.TABLE_CATEGORIES.ACTION,
    onTextLinkClicked: _tableCategories.TABLE_CATEGORIES.ACTION,
    onButtonClick: _tableCategories.TABLE_CATEGORIES.ACTION,
    onCloseAction: _tableCategories.TABLE_CATEGORIES.ACTION
  }
};
exports["default"] = _default;
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Alert["default"], _objectSpread({}, args));
};

var Dismiss = Template.bind({});
exports.Dismiss = Dismiss;
Dismiss.args = {
  content: lorem
};
var Acknowledge = Template.bind({});
exports.Acknowledge = Acknowledge;
Acknowledge.args = _objectSpread(_objectSpread({}, Dismiss.args), {}, {
  action: {
    type: "acknowledge"
  },
  header: "Header",
  color: "red",
  verticalPositions: "center"
});
var Open = Template.bind({});
exports.Open = Open;
Open.args = {
  content: "Small content",
  action: {
    type: "open"
  },
  header: "Header",
  textLinkProps: {
    label: "link",
    href: "href",
    openWindows: true
  },
  icon: "alarm",
  color: "green",
  verticalPositions: "bottom",
  delay: 2000
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BbGVydC9hbGVydC5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwiQWxlcnQiLCJhcmdUeXBlcyIsImNvbnRlbnQiLCJUQUJMRV9DQVRFR09SSUVTIiwiVkFMVUUiLCJoZWFkZXIiLCJpY29uIiwidGV4dExpbmtQcm9wcyIsImFjdGlvbiIsImNvbG9yIiwiU1RZTEUiLCJvcHRpb25zIiwiY29udHJvbCIsInR5cGUiLCJkZWxheSIsIlNUQVRFIiwidmlzaWJsZSIsImV4cGFuZGVkIiwibWFuYWdlRXhwYW5kZWQiLCJNQU5BR0lORyIsIm1hbmFnZVZpc2liaWxpdHkiLCJtYW5hZ2VCdXR0b25DbGljayIsIm9uRXhwYW5kQWN0aW9uIiwiQUNUSU9OIiwib25UZXh0TGlua0NsaWNrZWQiLCJvbkJ1dHRvbkNsaWNrIiwib25DbG9zZUFjdGlvbiIsImxvcmVtIiwiVGVtcGxhdGUiLCJhcmdzIiwiRGlzbWlzcyIsImJpbmQiLCJBY2tub3dsZWRnZSIsInZlcnRpY2FsUG9zaXRpb25zIiwiT3BlbiIsImxhYmVsIiwiaHJlZiIsIm9wZW5XaW5kb3dzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztlQUVlO0FBQ1hBLEVBQUFBLEtBQUssRUFBRSwyQkFESTtBQUVYQyxFQUFBQSxTQUFTLEVBQUVDLGlCQUZBO0FBR1hDLEVBQUFBLFFBQVEsRUFBRTtBQUNOQyxJQUFBQSxPQUFPLEVBQUVDLGtDQUFpQkMsS0FEcEI7QUFFTkMsSUFBQUEsTUFBTSxFQUFFRixrQ0FBaUJDLEtBRm5CO0FBR05FLElBQUFBLElBQUksRUFBRUgsa0NBQWlCQyxLQUhqQjtBQUlORyxJQUFBQSxhQUFhLEVBQUVKLGtDQUFpQkMsS0FKMUI7QUFLTkksSUFBQUEsTUFBTSxFQUFFTCxrQ0FBaUJDLEtBTG5CO0FBT05LLElBQUFBLEtBQUssa0NBQ0VOLGtDQUFpQk8sS0FEbkI7QUFFREMsTUFBQUEsT0FBTyxFQUFFLENBQUMsUUFBRCxFQUFZLEtBQVosRUFBb0IsT0FBcEIsRUFBOEIsTUFBOUIsRUFBdUMsTUFBdkMsRUFBZ0QsV0FBaEQsQ0FGUjtBQUdEQyxNQUFBQSxPQUFPLEVBQUU7QUFBQ0MsUUFBQUEsSUFBSSxFQUFFO0FBQVA7QUFIUixNQVBDO0FBYU5DLElBQUFBLEtBQUssRUFBRVgsa0NBQWlCWSxLQWJsQjtBQWNOQyxJQUFBQSxPQUFPLEVBQUViLGtDQUFpQlksS0FkcEI7QUFlTkUsSUFBQUEsUUFBUSxFQUFFZCxrQ0FBaUJZLEtBZnJCO0FBaUJORyxJQUFBQSxjQUFjLEVBQUVmLGtDQUFpQmdCLFFBakIzQjtBQWtCTkMsSUFBQUEsZ0JBQWdCLEVBQUVqQixrQ0FBaUJnQixRQWxCN0I7QUFtQk5FLElBQUFBLGlCQUFpQixFQUFFbEIsa0NBQWlCZ0IsUUFuQjlCO0FBcUJORyxJQUFBQSxjQUFjLEVBQUVuQixrQ0FBaUJvQixNQXJCM0I7QUFzQk5DLElBQUFBLGlCQUFpQixFQUFFckIsa0NBQWlCb0IsTUF0QjlCO0FBdUJORSxJQUFBQSxhQUFhLEVBQUV0QixrQ0FBaUJvQixNQXZCMUI7QUF3Qk5HLElBQUFBLGFBQWEsRUFBRXZCLGtDQUFpQm9CO0FBeEIxQjtBQUhDLEM7O0FBK0JmLElBQU1JLEtBQUssR0FBRywrYkFBZDs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFEO0FBQUEsc0JBQVUscUJBQUMsaUJBQUQsb0JBQVdBLElBQVgsRUFBVjtBQUFBLENBQWpCOztBQUVPLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFoQjs7QUFDUEQsT0FBTyxDQUFDRCxJQUFSLEdBQWU7QUFDWDNCLEVBQUFBLE9BQU8sRUFBRXlCO0FBREUsQ0FBZjtBQUlPLElBQU1LLFdBQVcsR0FBR0osUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFwQjs7QUFDUEMsV0FBVyxDQUFDSCxJQUFaLG1DQUNPQyxPQUFPLENBQUNELElBRGY7QUFFSXJCLEVBQUFBLE1BQU0sRUFBRTtBQUFFSyxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUZaO0FBR0lSLEVBQUFBLE1BQU0sRUFBRSxRQUhaO0FBSUlJLEVBQUFBLEtBQUssRUFBRSxLQUpYO0FBS0l3QixFQUFBQSxpQkFBaUIsRUFBRTtBQUx2QjtBQVFPLElBQU1DLElBQUksR0FBR04sUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFiOztBQUNQRyxJQUFJLENBQUNMLElBQUwsR0FBWTtBQUNSM0IsRUFBQUEsT0FBTyxFQUFFLGVBREQ7QUFFUk0sRUFBQUEsTUFBTSxFQUFFO0FBQUNLLElBQUFBLElBQUksRUFBRTtBQUFQLEdBRkE7QUFHUlIsRUFBQUEsTUFBTSxFQUFFLFFBSEE7QUFJUkUsRUFBQUEsYUFBYSxFQUFFO0FBQ1g0QixJQUFBQSxLQUFLLEVBQUUsTUFESTtBQUVYQyxJQUFBQSxJQUFJLEVBQUUsTUFGSztBQUdYQyxJQUFBQSxXQUFXLEVBQUU7QUFIRixHQUpQO0FBU1IvQixFQUFBQSxJQUFJLEVBQUUsT0FURTtBQVVSRyxFQUFBQSxLQUFLLEVBQUUsT0FWQztBQVdSd0IsRUFBQUEsaUJBQWlCLEVBQUUsUUFYWDtBQVlSbkIsRUFBQUEsS0FBSyxFQUFFO0FBWkMsQ0FBWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIEFsZXJ0IH0gZnJvbSAnLi9BbGVydCc7XHJcbmltcG9ydCB7VEFCTEVfQ0FURUdPUklFU30gZnJvbSBcIi4uLy4uLy5zdG9yeWJvb2svdGFibGVDYXRlZ29yaWVzXCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHRpdGxlOiAnc3dmLXVpLWtpdC9NZXNzYWdlcy9BbGVydCcsXHJcbiAgICBjb21wb25lbnQ6IEFsZXJ0LFxyXG4gICAgYXJnVHlwZXM6IHtcclxuICAgICAgICBjb250ZW50OiBUQUJMRV9DQVRFR09SSUVTLlZBTFVFLFxyXG4gICAgICAgIGhlYWRlcjogVEFCTEVfQ0FURUdPUklFUy5WQUxVRSxcclxuICAgICAgICBpY29uOiBUQUJMRV9DQVRFR09SSUVTLlZBTFVFLFxyXG4gICAgICAgIHRleHRMaW5rUHJvcHM6IFRBQkxFX0NBVEVHT1JJRVMuVkFMVUUsXHJcbiAgICAgICAgYWN0aW9uOiBUQUJMRV9DQVRFR09SSUVTLlZBTFVFLFxyXG5cclxuICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgICAuLi5UQUJMRV9DQVRFR09SSUVTLlNUWUxFLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbXCJ5ZWxsb3dcIiAsIFwicmVkXCIgLCBcImdyZWVuXCIgLCBcImJsdWVcIiAsIFwiZ3JleVwiICwgXCJncmV5LWJsdWVcIl0sXHJcbiAgICAgICAgICAgIGNvbnRyb2w6IHt0eXBlOiAnc2VsZWN0J31cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkZWxheTogVEFCTEVfQ0FURUdPUklFUy5TVEFURSxcclxuICAgICAgICB2aXNpYmxlOiBUQUJMRV9DQVRFR09SSUVTLlNUQVRFLFxyXG4gICAgICAgIGV4cGFuZGVkOiBUQUJMRV9DQVRFR09SSUVTLlNUQVRFLFxyXG5cclxuICAgICAgICBtYW5hZ2VFeHBhbmRlZDogVEFCTEVfQ0FURUdPUklFUy5NQU5BR0lORyxcclxuICAgICAgICBtYW5hZ2VWaXNpYmlsaXR5OiBUQUJMRV9DQVRFR09SSUVTLk1BTkFHSU5HLFxyXG4gICAgICAgIG1hbmFnZUJ1dHRvbkNsaWNrOiBUQUJMRV9DQVRFR09SSUVTLk1BTkFHSU5HLFxyXG5cclxuICAgICAgICBvbkV4cGFuZEFjdGlvbjogVEFCTEVfQ0FURUdPUklFUy5BQ1RJT04sXHJcbiAgICAgICAgb25UZXh0TGlua0NsaWNrZWQ6IFRBQkxFX0NBVEVHT1JJRVMuQUNUSU9OLFxyXG4gICAgICAgIG9uQnV0dG9uQ2xpY2s6IFRBQkxFX0NBVEVHT1JJRVMuQUNUSU9OLFxyXG4gICAgICAgIG9uQ2xvc2VBY3Rpb246IFRBQkxFX0NBVEVHT1JJRVMuQUNUSU9OXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBsb3JlbSA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiXHJcblxyXG5jb25zdCBUZW1wbGF0ZSA9IChhcmdzKSA9PiA8QWxlcnQgey4uLmFyZ3N9IC8+O1xyXG5cclxuZXhwb3J0IGNvbnN0IERpc21pc3MgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcclxuRGlzbWlzcy5hcmdzID0ge1xyXG4gICAgY29udGVudDogbG9yZW1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBY2tub3dsZWRnZSA9IFRlbXBsYXRlLmJpbmQoe30pO1xyXG5BY2tub3dsZWRnZS5hcmdzID0ge1xyXG4gICAgLi4uRGlzbWlzcy5hcmdzLFxyXG4gICAgYWN0aW9uOiB7IHR5cGU6IFwiYWNrbm93bGVkZ2VcIiB9LFxyXG4gICAgaGVhZGVyOiBcIkhlYWRlclwiLFxyXG4gICAgY29sb3I6IFwicmVkXCIsXHJcbiAgICB2ZXJ0aWNhbFBvc2l0aW9uczogXCJjZW50ZXJcIlxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE9wZW4gPSBUZW1wbGF0ZS5iaW5kKHt9KTtcclxuT3Blbi5hcmdzID0ge1xyXG4gICAgY29udGVudDogXCJTbWFsbCBjb250ZW50XCIsXHJcbiAgICBhY3Rpb246IHt0eXBlOiBcIm9wZW5cIn0sXHJcbiAgICBoZWFkZXI6IFwiSGVhZGVyXCIsXHJcbiAgICB0ZXh0TGlua1Byb3BzOiB7XHJcbiAgICAgICAgbGFiZWw6IFwibGlua1wiLFxyXG4gICAgICAgIGhyZWY6IFwiaHJlZlwiLFxyXG4gICAgICAgIG9wZW5XaW5kb3dzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgaWNvbjogXCJhbGFybVwiLFxyXG4gICAgY29sb3I6IFwiZ3JlZW5cIixcclxuICAgIHZlcnRpY2FsUG9zaXRpb25zOiBcImJvdHRvbVwiLFxyXG4gICAgZGVsYXk6IDIwMDBcclxufTtcclxuXHJcblxyXG5cclxuIl19