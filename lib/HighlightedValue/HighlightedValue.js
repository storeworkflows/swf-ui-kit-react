"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getIconSize = function getIconSize(size, icon) {
  switch (size) {
    case "sm":
      return icon ? 11 : 7;

    case "lg":
      return icon ? 18 : 10;

    default:
      return icon ? 14 : 8;
  }
};

var HighlightedValue = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var roundBorder = props.roundBorder,
      className = props.className,
      showIcon = props.showIcon,
      onClick = props.onClick,
      variant = props.variant,
      color = props.color,
      label = props.label,
      icon = props.icon,
      size = props.size;
  var classes = (0, _classnames["default"])("highlighted-value-container", "--".concat(size), color, className, {
    "--round": roundBorder
  });
  var containerClasses = (0, _classnames["default"])("highlighted-color-container", "--".concat(variant), {
    "--round": roundBorder
  });
  var iconSize = getIconSize(size, icon);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: classes,
      ref: ref,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: containerClasses,
        onClick: onClick,
        children: [showIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
          className: "highlighted-icon",
          icon: icon || "circle-fill",
          customSize: iconSize
        }), label && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: label
        })]
      })
    })
  });
});
HighlightedValue.defaultProps = {
  className: {},
  onClick: function onClick() {
    return void 0;
  },
  showIcon: false,
  size: "md",
  variant: "primary",
  color: "red",
  roundBorder: true
};
HighlightedValue.propTypes = {
  roundBorder: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  onClick: _propTypes["default"].func,
  icon: _propTypes["default"].string,
  showIcon: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["sm", "md", "lg"]),
  variant: _propTypes["default"].oneOf(["primary", "secondary", "tertiary"]),
  color: _propTypes["default"].oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"])
};
var _default = HighlightedValue;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IaWdobGlnaHRlZFZhbHVlL0hpZ2hsaWdodGVkVmFsdWUuanMiXSwibmFtZXMiOlsiZ2V0SWNvblNpemUiLCJzaXplIiwiaWNvbiIsIkhpZ2hsaWdodGVkVmFsdWUiLCJSZWFjdCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsInJvdW5kQm9yZGVyIiwiY2xhc3NOYW1lIiwic2hvd0ljb24iLCJvbkNsaWNrIiwidmFyaWFudCIsImNvbG9yIiwibGFiZWwiLCJjbGFzc2VzIiwiY29udGFpbmVyQ2xhc3NlcyIsImljb25TaXplIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm9iamVjdCIsImZ1bmMiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDaEMsVUFBUUQsSUFBUjtBQUNJLFNBQUssSUFBTDtBQUNJLGFBQU9DLElBQUksR0FBRyxFQUFILEdBQVEsQ0FBbkI7O0FBQ0osU0FBSyxJQUFMO0FBQ0ksYUFBT0EsSUFBSSxHQUFHLEVBQUgsR0FBUSxFQUFuQjs7QUFDSjtBQUNJLGFBQU9BLElBQUksR0FBRyxFQUFILEdBQVEsQ0FBbkI7QUFOUjtBQVFILENBVEQ7O0FBV0EsSUFBTUMsZ0JBQWdCLGdCQUFHQyxLQUFLLENBQUNDLFVBQU4sQ0FBaUIsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQUEsTUFHbERDLFdBSGtELEdBWWxERixLQVprRCxDQUdsREUsV0FIa0Q7QUFBQSxNQUlsREMsU0FKa0QsR0FZbERILEtBWmtELENBSWxERyxTQUprRDtBQUFBLE1BS2xEQyxRQUxrRCxHQVlsREosS0Faa0QsQ0FLbERJLFFBTGtEO0FBQUEsTUFNbERDLE9BTmtELEdBWWxETCxLQVprRCxDQU1sREssT0FOa0Q7QUFBQSxNQU9sREMsT0FQa0QsR0FZbEROLEtBWmtELENBT2xETSxPQVBrRDtBQUFBLE1BUWxEQyxLQVJrRCxHQVlsRFAsS0Faa0QsQ0FRbERPLEtBUmtEO0FBQUEsTUFTbERDLEtBVGtELEdBWWxEUixLQVprRCxDQVNsRFEsS0FUa0Q7QUFBQSxNQVVsRFosSUFWa0QsR0FZbERJLEtBWmtELENBVWxESixJQVZrRDtBQUFBLE1BV2xERCxJQVhrRCxHQVlsREssS0Faa0QsQ0FXbERMLElBWGtEO0FBY3RELE1BQU1jLE9BQU8sR0FBRyw0QkFDWiw2QkFEWSxjQUVQZCxJQUZPLEdBR1pZLEtBSFksRUFJWkosU0FKWSxFQUlEO0FBQ1AsZUFBV0Q7QUFESixHQUpDLENBQWhCO0FBU0EsTUFBTVEsZ0JBQWdCLEdBQUcsNEJBQ3JCLDZCQURxQixjQUVoQkosT0FGZ0IsR0FFTDtBQUNaLGVBQVdKO0FBREMsR0FGSyxDQUF6QjtBQU9BLE1BQUlTLFFBQVEsR0FBR2pCLFdBQVcsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLENBQTFCO0FBRUEsc0JBQ0k7QUFBQSwyQkFDSTtBQUFLLE1BQUEsU0FBUyxFQUFFYSxPQUFoQjtBQUF5QixNQUFBLEdBQUcsRUFBRVIsR0FBOUI7QUFBQSw2QkFDSTtBQUNJLFFBQUEsU0FBUyxFQUFFUyxnQkFEZjtBQUVJLFFBQUEsT0FBTyxFQUFFTCxPQUZiO0FBQUEsbUJBSUtELFFBQVEsaUJBQUkscUJBQUMsZ0JBQUQ7QUFDVCxVQUFBLFNBQVMsRUFBQyxrQkFERDtBQUVULFVBQUEsSUFBSSxFQUFFUixJQUFJLElBQUksYUFGTDtBQUdULFVBQUEsVUFBVSxFQUFFZTtBQUhILFVBSmpCLEVBU0tILEtBQUssaUJBQUk7QUFBQSxvQkFBT0E7QUFBUCxVQVRkO0FBQUE7QUFESjtBQURKLElBREo7QUFpQkgsQ0FqRHdCLENBQXpCO0FBbURBWCxnQkFBZ0IsQ0FBQ2UsWUFBakIsR0FBZ0M7QUFDNUJULEVBQUFBLFNBQVMsRUFBRSxFQURpQjtBQUU1QkUsRUFBQUEsT0FBTyxFQUFFO0FBQUEsV0FBTSxLQUFLLENBQVg7QUFBQSxHQUZtQjtBQUc1QkQsRUFBQUEsUUFBUSxFQUFFLEtBSGtCO0FBSTVCVCxFQUFBQSxJQUFJLEVBQUUsSUFKc0I7QUFLNUJXLEVBQUFBLE9BQU8sRUFBRSxTQUxtQjtBQU01QkMsRUFBQUEsS0FBSyxFQUFFLEtBTnFCO0FBTzVCTCxFQUFBQSxXQUFXLEVBQUU7QUFQZSxDQUFoQztBQVVBTCxnQkFBZ0IsQ0FBQ2dCLFNBQWpCLEdBQTZCO0FBQ3pCWCxFQUFBQSxXQUFXLEVBQUVXLHNCQUFVQyxJQURFO0FBRXpCTixFQUFBQSxLQUFLLEVBQUVLLHNCQUFVRSxNQUZRO0FBR3pCWixFQUFBQSxTQUFTLEVBQUVVLHNCQUFVRyxTQUFWLENBQW9CLENBQUNILHNCQUFVRSxNQUFYLEVBQW1CRixzQkFBVUksTUFBN0IsQ0FBcEIsQ0FIYztBQUl6QlosRUFBQUEsT0FBTyxFQUFFUSxzQkFBVUssSUFKTTtBQUt6QnRCLEVBQUFBLElBQUksRUFBRWlCLHNCQUFVRSxNQUxTO0FBTXpCWCxFQUFBQSxRQUFRLEVBQUVTLHNCQUFVQyxJQU5LO0FBT3pCbkIsRUFBQUEsSUFBSSxFQUFFa0Isc0JBQVVNLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsQ0FBaEIsQ0FQbUI7QUFRekJiLEVBQUFBLE9BQU8sRUFBRU8sc0JBQVVNLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksV0FBWixFQUF5QixVQUF6QixDQUFoQixDQVJnQjtBQVN6QlosRUFBQUEsS0FBSyxFQUFFTSxzQkFBVU0sS0FBVixDQUFnQixDQUFDLFFBQUQsRUFBVyxLQUFYLEVBQWtCLE9BQWxCLEVBQTJCLE1BQTNCLEVBQW1DLE1BQW5DLEVBQTJDLFdBQTNDLENBQWhCO0FBVGtCLENBQTdCO2VBWWV0QixnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuXHJcbmNvbnN0IGdldEljb25TaXplID0gKHNpemUsIGljb24pID0+IHtcclxuICAgIHN3aXRjaCAoc2l6ZSkge1xyXG4gICAgICAgIGNhc2UgXCJzbVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gaWNvbiA/IDExIDogNztcclxuICAgICAgICBjYXNlIFwibGdcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGljb24gPyAxOCA6IDEwO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBpY29uID8gMTQgOiA4O1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBIaWdobGlnaHRlZFZhbHVlID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICByb3VuZEJvcmRlcixcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgc2hvd0ljb24sXHJcbiAgICAgICAgb25DbGljayxcclxuICAgICAgICB2YXJpYW50LFxyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIGljb24sXHJcbiAgICAgICAgc2l6ZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICAgIFwiaGlnaGxpZ2h0ZWQtdmFsdWUtY29udGFpbmVyXCIsXHJcbiAgICAgICAgYC0tJHtzaXplfWAsXHJcbiAgICAgICAgY29sb3IsXHJcbiAgICAgICAgY2xhc3NOYW1lLCB7XHJcbiAgICAgICAgICAgIFwiLS1yb3VuZFwiOiByb3VuZEJvcmRlclxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICBjb25zdCBjb250YWluZXJDbGFzc2VzID0gY2xhc3NuYW1lcyhcclxuICAgICAgICBcImhpZ2hsaWdodGVkLWNvbG9yLWNvbnRhaW5lclwiLFxyXG4gICAgICAgIGAtLSR7dmFyaWFudH1gLCB7XHJcbiAgICAgICAgICAgIFwiLS1yb3VuZFwiOiByb3VuZEJvcmRlclxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICBsZXQgaWNvblNpemUgPSBnZXRJY29uU2l6ZShzaXplLCBpY29uKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfSByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dJY29uICYmIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZ2hsaWdodGVkLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpY29uIHx8IFwiY2lyY2xlLWZpbGxcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tU2l6ZT17aWNvblNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAge2xhYmVsICYmIDxzcGFuPntsYWJlbH08L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59KTtcclxuXHJcbkhpZ2hsaWdodGVkVmFsdWUuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lOiB7fSxcclxuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQgMCxcclxuICAgIHNob3dJY29uOiBmYWxzZSxcclxuICAgIHNpemU6IFwibWRcIixcclxuICAgIHZhcmlhbnQ6IFwicHJpbWFyeVwiLFxyXG4gICAgY29sb3I6IFwicmVkXCIsXHJcbiAgICByb3VuZEJvcmRlcjogdHJ1ZVxyXG59XHJcblxyXG5IaWdobGlnaHRlZFZhbHVlLnByb3BUeXBlcyA9IHtcclxuICAgIHJvdW5kQm9yZGVyOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMub2JqZWN0XSksXHJcbiAgICBvbkNsaWNrOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIGljb246IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzaG93SWNvbjogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzaXplOiBwcm9wVHlwZXMub25lT2YoW1wic21cIiwgXCJtZFwiLCBcImxnXCJdKSxcclxuICAgIHZhcmlhbnQ6IHByb3BUeXBlcy5vbmVPZihbXCJwcmltYXJ5XCIsIFwic2Vjb25kYXJ5XCIsIFwidGVydGlhcnlcIl0pLFxyXG4gICAgY29sb3I6IHByb3BUeXBlcy5vbmVPZihbXCJ5ZWxsb3dcIiwgXCJyZWRcIiwgXCJncmVlblwiLCBcImJsdWVcIiwgXCJncmV5XCIsIFwiZ3JleS1ibHVlXCJdKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIaWdobGlnaHRlZFZhbHVlIl19