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

var _utils = require("./utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Button = function Button(props) {
  var disabled = props.disabled,
      icon = props.icon,
      label = props.label,
      tooltipContent = props.tooltipContent,
      size = props.size,
      variant = props.variant,
      customStyle = props.customStyle,
      children = props.children,
      onClick = props.onClick,
      className = props.className,
      type = props.type;
  var additionalStyle = (0, _utils.addStyles)(customStyle);

  var _hasIcon = icon.length > 0;

  var _hasLabel = label.length > 0;

  var _hasOnlyIcon = _hasIcon && !_hasLabel;

  var _iconSize = (0, _utils.getIconSize)(customStyle, icon, size);

  var buttonClasses = (0, _classnames["default"])(className, variant, "button-".concat(size), {
    "swf-button": true,
    "active": !disabled,
    "disabled": disabled,
    "has-icon": _hasIcon
  });
  var iconClasses = (0, _classnames["default"])({
    "button-icon": true,
    "label-button-icon": !_hasOnlyIcon
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      ref: function ref(elm) {
        return props.innerRef.current = elm;
      },
      className: buttonClasses,
      onClick: onClick,
      disabled: disabled,
      title: tooltipContent,
      style: additionalStyle,
      type: type,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "content",
        children: [_hasIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: iconClasses,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
            icon: icon,
            customSize: _iconSize
          })
        }), _hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          className: "button-label",
          children: label
        }), children]
      })
    })
  });
};

Button.defaultProps = {
  disabled: false,
  icon: "",
  label: "",
  tooltipContent: "",
  size: 'md',
  variant: "secondary",
  customStyle: null,
  className: {},
  innerRef: /*#__PURE__*/React.createRef(),
  type: "button"
};
Button.propTypes = {
  disabled: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
  label: _propTypes["default"].string,
  tooltipContent: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(['sm', 'md', 'lg']),
  variant: _propTypes["default"].oneOf(["primary", "primary-positive", "primary-negative", "secondary", "secondary-positive", "secondary-negative", "tertiary", "inherit", ""]),
  customStyle: _propTypes["default"].object,
  onClick: _propTypes["default"].func,
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  innerRef: _propTypes["default"].object,
  type: _propTypes["default"].oneOf(["button", "reset", "submit"])
};

var _default = /*#__PURE__*/React.memo(Button);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwiZGlzYWJsZWQiLCJpY29uIiwibGFiZWwiLCJ0b29sdGlwQ29udGVudCIsInNpemUiLCJ2YXJpYW50IiwiY3VzdG9tU3R5bGUiLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJ0eXBlIiwiYWRkaXRpb25hbFN0eWxlIiwiX2hhc0ljb24iLCJsZW5ndGgiLCJfaGFzTGFiZWwiLCJfaGFzT25seUljb24iLCJfaWNvblNpemUiLCJidXR0b25DbGFzc2VzIiwiaWNvbkNsYXNzZXMiLCJlbG0iLCJpbm5lclJlZiIsImN1cnJlbnQiLCJkZWZhdWx0UHJvcHMiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJvbmVPZiIsIm9iamVjdCIsImZ1bmMiLCJvbmVPZlR5cGUiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BR2xCQyxRQUhrQixHQWNsQkQsS0Fka0IsQ0FHbEJDLFFBSGtCO0FBQUEsTUFJbEJDLElBSmtCLEdBY2xCRixLQWRrQixDQUlsQkUsSUFKa0I7QUFBQSxNQUtsQkMsS0FMa0IsR0FjbEJILEtBZGtCLENBS2xCRyxLQUxrQjtBQUFBLE1BTWxCQyxjQU5rQixHQWNsQkosS0Fka0IsQ0FNbEJJLGNBTmtCO0FBQUEsTUFPbEJDLElBUGtCLEdBY2xCTCxLQWRrQixDQU9sQkssSUFQa0I7QUFBQSxNQVFsQkMsT0FSa0IsR0FjbEJOLEtBZGtCLENBUWxCTSxPQVJrQjtBQUFBLE1BU2xCQyxXQVRrQixHQWNsQlAsS0Fka0IsQ0FTbEJPLFdBVGtCO0FBQUEsTUFVbEJDLFFBVmtCLEdBY2xCUixLQWRrQixDQVVsQlEsUUFWa0I7QUFBQSxN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QUFnQixDQUFDLFNBQUQsRUFBWSxrQkFBWixFQUFnQyxrQkFBaEMsRUFBb0QsV0FBcEQsRUFDckIsb0JBRHFCLEVBQ0Msb0JBREQsRUFDdUIsVUFEdkIsRUFDbUMsU0FEbkMsRUFDOEMsRUFEOUMsQ0FBaEIsQ0FOTTtBQVFmdEIsRUFBQUEsV0FBVyxFQUFFbUIsc0JBQVVJLE1BUlI7QUFTZnJCLEVBQUFBLE9BQU8sRUFBRWlCLHNCQUFVSyxJQVRKO0FBVWZyQixFQUFBQSxTQUFTLEVBQUVnQixzQkFBVU0sU0FBVixDQUFvQixDQUFDTixzQkFBVUksTUFBWCxFQUFtQkosc0JBQVVFLE1BQTdCLENBQXBCLENBVkk7QUFXZlAsRUFBQUEsUUFBUSxFQUFFSyxzQkFBVUksTUFYTDtBQVlmbkIsRUFBQUEsSUFBSSxFQUFFZSxzQkFBVUcsS0FBVixDQUFnQixDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLFFBQXBCLENBQWhCO0FBWlMsQ0FBbkI7OzRCQWVlTCxLQUFLLENBQUNTLElBQU4sQ0FBV2xDLE1BQVgsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCB7YWRkU3R5bGVzLCBnZXRJY29uU2l6ZX0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICBpY29uLFxyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHRvb2x0aXBDb250ZW50LFxyXG4gICAgICAgIHNpemUsXHJcbiAgICAgICAgdmFyaWFudCxcclxuICAgICAgICBjdXN0b21TdHlsZSxcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgICAgICBvbkNsaWNrLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICB0eXBlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgYWRkaXRpb25hbFN0eWxlID0gYWRkU3R5bGVzKGN1c3RvbVN0eWxlKTtcclxuXHJcbiAgICBjb25zdCBfaGFzSWNvbiA9IGljb24ubGVuZ3RoID4gMDtcclxuICAgIGNvbnN0IF9oYXNMYWJlbCA9IGxhYmVsLmxlbmd0aCA+IDA7XHJcbiAgICBjb25zdCBfaGFzT25seUljb24gPSBfaGFzSWNvbiAmJiAhX2hhc0xhYmVsO1xyXG4gICAgY29uc3QgX2ljb25TaXplID0gZ2V0SWNvblNpemUoY3VzdG9tU3R5bGUsIGljb24sIHNpemUpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkNsYXNzZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICB2YXJpYW50LFxyXG4gICAgICAgIGBidXR0b24tJHtzaXplfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInN3Zi1idXR0b25cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJhY3RpdmVcIjogIWRpc2FibGVkLFxyXG4gICAgICAgICAgICBcImRpc2FibGVkXCI6IGRpc2FibGVkLFxyXG4gICAgICAgICAgICBcImhhcy1pY29uXCI6IF9oYXNJY29uXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBpY29uQ2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgIFwiYnV0dG9uLWljb25cIjogdHJ1ZSxcclxuICAgICAgICBcImxhYmVsLWJ1dHRvbi1pY29uXCI6ICFfaGFzT25seUljb25cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgcmVmPXtlbG0gPT4gcHJvcHMuaW5uZXJSZWYuY3VycmVudCA9IGVsbX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3Nlc31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17dG9vbHRpcENvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17YWRkaXRpb25hbFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge19oYXNJY29uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpY29uQ2xhc3Nlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tU2l6ZT17X2ljb25TaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7X2hhc0xhYmVsICYmIDxsYWJlbCBjbGFzc05hbWU9e1wiYnV0dG9uLWxhYmVsXCJ9PntsYWJlbH08L2xhYmVsPn1cclxuICAgICAgICAgICAgICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGljb246IFwiXCIsXHJcbiAgICBsYWJlbDogXCJcIixcclxuICAgIHRvb2x0aXBDb250ZW50OiBcIlwiLFxyXG4gICAgc2l6ZTogJ21kJyxcclxuICAgIHZhcmlhbnQ6IFwic2Vjb25kYXJ5XCIsXHJcbiAgICBjdXN0b21TdHlsZTogbnVsbCxcclxuICAgIGNsYXNzTmFtZToge30sXHJcbiAgICBpbm5lclJlZjogUmVhY3QuY3JlYXRlUmVmKCksXHJcbiAgICB0eXBlOiBcImJ1dHRvblwiXHJcbn1cclxuXHJcbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgICBkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpY29uOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0b29sdGlwQ29udGVudDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNpemU6IHByb3BUeXBlcy5vbmVPZihbJ3NtJywgJ21kJywgJ2xnJ10pLFxyXG4gICAgdmFyaWFudDogcHJvcFR5cGVzLm9uZU9mKFtcInByaW1hcnlcIiwgXCJwcmltYXJ5LXBvc2l0aXZlXCIsIFwicHJpbWFyeS1uZWdhdGl2ZVwiLCBcInNlY29uZGFyeVwiLFxyXG4gICAgICAgIFwic2Vjb25kYXJ5LXBvc2l0aXZlXCIsIFwic2Vjb25kYXJ5LW5lZ2F0aXZlXCIsIFwidGVydGlhcnlcIiwgXCJpbmhlcml0XCIsIFwiXCJdKSxcclxuICAgIGN1c3RvbVN0eWxlOiBwcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgb25DbGljazogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjbGFzc05hbWU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5vYmplY3QsIHByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgIGlubmVyUmVmOiBwcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgdHlwZTogcHJvcFR5cGVzLm9uZU9mKFtcImJ1dHRvblwiLCBcInJlc2V0XCIsIFwic3VibWl0XCJdKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEJ1dHRvbik7XHJcblxyXG4iXX0=