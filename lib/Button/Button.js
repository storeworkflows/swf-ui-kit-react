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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Button = /*#__PURE__*/function (_React$Component) {
  _inherits(Button, _React$Component);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          icon = _this$props.icon,
          label = _this$props.label,
          tooltipContent = _this$props.tooltipContent,
          size = _this$props.size,
          variant = _this$props.variant,
          customStyle = _this$props.customStyle,
          children = _this$props.children,
          onClick = _this$props.onClick,
          className = _this$props.className;
      var additionalStyle = (0, _utils.addStyles)(customStyle);

      var _hasIcon = icon.length > 0;

      var _hasLabel = label.length > 0;

      var _hasOnlyIcon = _hasIcon && !_hasLabel;

      var _slotElement = !_hasLabel && !_hasIcon && children !== undefined;

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
          //ref={elm => this.props.innerRef(elm)}
          className: buttonClasses,
          onClick: onClick,
          disabled: disabled,
          title: tooltipContent,
          style: additionalStyle,
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
            }), children && children]
          })
        })
      });
    }
  }]);

  return Button;
}(React.Component);

Button.defaultProps = {
  disabled: false,
  icon: "",
  label: "",
  tooltipContent: "",
  size: 'md',
  variant: "secondary",
  customStyle: null,
  className: {}
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
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]) //innerRef: propTypes.func

};
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwiZGlzYWJsZWQiLCJpY29uIiwibGFiZWwiLCJ0b29sdGlwQ29udGVudCIsInNpemUiLCJ2YXJpYW50IiwiY3VzdG9tU3R5bGUiLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJhZGRpdGlvbmFsU3R5bGUiLCJfaGFzSWNvbiIsImxlbmd0aCIsIl9oYXNMYWJlbCIsIl9oYXNPbmx5SWNvbiIsIl9zbG90RWxlbWVudCIsInVuZGVmaW5lZCIsIl9pY29uU2l6ZSIsImJ1dHRvbkNsYXNzZXMiLCJpY29uQ2xhc3NlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwib2JqZWN0IiwiZnVuYyIsIm9uZU9mVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7Ozs7Ozs7Ozs7O1dBRUwsa0JBQVM7QUFBQSx3QkFhSixLQUFLQyxLQWJEO0FBQUEsVUFHUEMsUUFITyxlQUdQQSxRQUhPO0FBQUEsVUFJUEMsSUFKTyxlQUlQQSxJQUpPO0FBQUEsVUFLUEMsS0FMTyxlQUtQQSxLQUxPO0FBQUEsVUFNUEMsY0FOTyxlQU1QQSxjQU5PO0FBQUEsVUFPUEMsSUFQTyxlQU9QQSxJQVBPO0FBQUEsVUFRUEMsT0FSTyxlQVFQQSxPQVJPO0FBQUEsVUFTUEMsV0FUTyxlQVNQQSxXQVRPO0FBQUEsVUFVUEMsUUFWTyxlQVVQQSxRQVZPO0FBQUEsVUFXUEMsT0FYTyxlQVdQQSxPQVhPO0FBQUEsVUFZUEMsU0FaTyxlQVlQQSxTQVpPO0FBZVIsVUFBTUMsZUFBZSxHQUFHLHNCQUFVSixXQUFWLENBQXhCOztBQUVBLFVBQU1LLFFBQVEsR0FBR1YsSUFBSSxDQUFDVyxNQUFM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LENBVk8sQ0FXbEI7O0FBWGtCLENBQW5CO2VBY2UzQixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IHthZGRTdHlsZXMsIGdldEljb25TaXplfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcblx0cmVuZGVyKCkge1xyXG5cclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0ZGlzYWJsZWQsXHJcblx0XHRcdGljb24sXHJcblx0XHRcdGxhYmVsLFxyXG5cdFx0XHR0b29sdGlwQ29udGVudCxcclxuXHRcdFx0c2l6ZSxcclxuXHRcdFx0dmFyaWFudCxcclxuXHRcdFx0Y3VzdG9tU3R5bGUsXHJcblx0XHRcdGNoaWxkcmVuLFxyXG5cdFx0XHRvbkNsaWNrLFxyXG5cdFx0XHRjbGFzc05hbWVcclxuXHRcdH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdGNvbnN0IGFkZGl0aW9uYWxTdHlsZSA9IGFkZFN0eWxlcyhjdXN0b21TdHlsZSk7XHJcblxyXG5cdFx0Y29uc3QgX2hhc0ljb24gPSBpY29uLmxlbmd0aD4wO1xyXG5cdFx0Y29uc3QgX2hhc0xhYmVsID0gbGFiZWwubGVuZ3RoPjA7XHJcblx0XHRjb25zdCBfaGFzT25seUljb24gPSBfaGFzSWNvbiAmJiAhX2hhc0xhYmVsO1xyXG5cdFx0Y29uc3QgX3Nsb3RFbGVtZW50ID0gIV9oYXNMYWJlbCAmJiAhX2hhc0ljb24gJiYgY2hpbGRyZW4hPT11bmRlZmluZWQ7XHJcblx0XHRjb25zdCBfaWNvblNpemUgPSBnZXRJY29uU2l6ZShjdXN0b21TdHlsZSwgaWNvbiwgc2l6ZSk7XHJcblxyXG5cdFx0Y29uc3QgYnV0dG9uQ2xhc3NlcyA9IGNsYXNzbmFtZXMoXHJcblx0XHRcdGNsYXNzTmFtZSxcclxuXHRcdFx0dmFyaWFudCxcclxuXHRcdFx0YGJ1dHRvbi0ke3NpemV9YCxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwic3dmLWJ1dHRvblwiOiB0cnVlLFxyXG5cdFx0XHRcdFwiYWN0aXZlXCI6ICFkaXNhYmxlZCxcclxuXHRcdFx0XHRcImRpc2FibGVkXCI6IGRpc2FibGVkLFxyXG5cdFx0XHRcdFwiaGFzLWljb25cIjogX2hhc0ljb25cclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0XHRjb25zdCBpY29uQ2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG5cdFx0XHRcdFwiYnV0dG9uLWljb25cIjogdHJ1ZSxcclxuXHRcdFx0XHRcImxhYmVsLWJ1dHRvbi1pY29uXCI6ICFfaGFzT25seUljb25cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHQvL3JlZj17ZWxtID0+IHRoaXMucHJvcHMuaW5uZXJSZWYoZWxtKX1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YnV0dG9uQ2xhc3Nlc31cclxuXHRcdFx0XHRcdG9uQ2xpY2s9e29uQ2xpY2t9XHJcblx0XHRcdFx0XHRkaXNhYmxlZCA9IHtkaXNhYmxlZH1cclxuXHRcdFx0XHRcdHRpdGxlID0ge3Rvb2x0aXBDb250ZW50fVxyXG5cdFx0XHRcdFx0c3R5bGU9e2FkZGl0aW9uYWxTdHlsZX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0e19oYXNJY29uICYmXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2ljb25DbGFzc2VzfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdGljb249e2ljb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1c3RvbVNpemU9e19pY29uU2l6ZX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHsgX2hhc0xhYmVsICYmIDxsYWJlbCBjbGFzc05hbWU9e1wiYnV0dG9uLWxhYmVsXCJ9PntsYWJlbH08L2xhYmVsPiB9XHJcblx0XHRcdFx0XHRcdHtjaGlsZHJlbiAmJiBjaGlsZHJlbn1cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PC8+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xyXG5cdGRpc2FibGVkOiBmYWxzZSxcclxuXHRpY29uOiBcIlwiLFxyXG5cdGxhYmVsOiBcIlwiLFxyXG5cdHRvb2x0aXBDb250ZW50OiBcIlwiLFxyXG5cdHNpemU6ICdtZCcsXHJcblx0dmFyaWFudDogIFwic2Vjb25kYXJ5XCIsXHJcblx0Y3VzdG9tU3R5bGU6IG51bGwsXHJcblx0Y2xhc3NOYW1lOiB7fVxyXG59XHJcblxyXG5CdXR0b24ucHJvcFR5cGVzID0ge1xyXG5cdGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuXHRpY29uOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdHRvb2x0aXBDb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdHNpemU6IHByb3BUeXBlcy5vbmVPZihbJ3NtJywgJ21kJywgJ2xnJ10pLFxyXG5cdHZhcmlhbnQ6ICBwcm9wVHlwZXMub25lT2YoW1wicHJpbWFyeVwiICwgXCJwcmltYXJ5LXBvc2l0aXZlXCIgLCBcInByaW1hcnktbmVnYXRpdmVcIiAsIFwic2Vjb25kYXJ5XCIgLFxyXG5cdFx0XHRcdFwic2Vjb25kYXJ5LXBvc2l0aXZlXCIgLCBcInNlY29uZGFyeS1uZWdhdGl2ZVwiICwgXCJ0ZXJ0aWFyeVwiICwgXCJpbmhlcml0XCIsIFwiXCJdKSxcclxuXHRjdXN0b21TdHlsZTogcHJvcFR5cGVzLm9iamVjdCxcclxuXHRvbkNsaWNrOiBwcm9wVHlwZXMuZnVuYyxcclxuXHRjbGFzc05hbWU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5vYmplY3QsIHByb3BUeXBlcy5zdHJpbmddKVxyXG5cdC8vaW5uZXJSZWY6IHByb3BUeXBlcy5mdW5jXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxyXG4iXX0=