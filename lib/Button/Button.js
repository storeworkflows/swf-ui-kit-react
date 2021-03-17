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
          onClick = _this$props.onClick;
      var additionalStyle = (0, _utils.addStyles)(customStyle);

      var _hasIcon = icon.length > 0;

      var _hasLabel = label.length > 0;

      var _hasOnlyIcon = _hasIcon && !_hasLabel;

      var _slotElement = !_hasLabel && !_hasIcon && children !== undefined;

      var _iconSize = (0, _utils.getIconSize)(customStyle, icon, size);

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          //ref={elm => this.props.innerRef(elm)}
          className: (0, _classnames["default"])(variant, "button-".concat(size), {
            "swf-button": true,
            "active": !disabled,
            "disabled": disabled,
            "has-icon": _hasIcon
          }),
          onClick: onClick,
          disabled: disabled,
          title: tooltipContent,
          style: additionalStyle,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "content",
            children: [_hasIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: (0, _classnames["default"])({
                "button-icon": true,
                "label-button-icon": !_hasOnlyIcon
              }),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
                icon: icon,
                customSize: _iconSize
              })
            }), _hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "button-label",
              children: label
            }), _slotElement && children]
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
  customStyle: null
};
Button.propTypes = {
  disabled: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
  label: _propTypes["default"].string,
  tooltipContent: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(['sm', 'md', 'lg']),
  variant: _propTypes["default"].oneOf(["primary", "primary-positive", "primary-negative", "secondary", "secondary-positive", "secondary-negative", "tertiary", "inherit", ""]),
  customStyle: _propTypes["default"].object,
  onClick: _propTypes["default"].func //innerRef: propTypes.func

};
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwiZGlzYWJsZWQiLCJpY29uIiwibGFiZWwiLCJ0b29sdGlwQ29udGVudCIsInNpemUiLCJ2YXJpYW50IiwiY3VzdG9tU3R5bGUiLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJhZGRpdGlvbmFsU3R5bGUiLCJfaGFzSWNvbiIsImxlbmd0aCIsIl9oYXNMYWJlbCIsIl9oYXNPbmx5SWNvbiIsIl9zbG90RWxlbWVudCIsInVuZGVmaW5lZCIsIl9pY29uU2l6ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwib2JqZWN0IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7Ozs7Ozs7Ozs7O1dBRUwsa0JBQVM7QUFBQSx3QkFZSixLQUFLQyxLQVpEO0FBQUEsVUFHUEMsUUFITyxlQUdQQSxRQUhPO0FBQUEsVUFJUEMsSUFKTyxlQUlQQSxJQUpPO0FBQUEsVUFLUEMsS0FMTyxlQUtQQSxLQUxPO0FBQUEsVUFNUEMsY0FOTyxlQU1QQSxjQU5PO0FBQUEsVUFPUEMsSUFQTyxlQU9QQSxJQVBPO0FBQUEsVUFRUEMsT0FSTyxlQVFQQSxPQVJPO0FBQUEsVUFTUEMsV0FUTyxlQVNQQSxXQVRPO0FBQUEsVUFVUEMsUUFWTyxlQVVQQSxRQVZPO0FBQUEsVUFXUEMsT0FYTyxlQVdQQSxPQVhPO0FBY1IsVUFBTUMsZUFBZSxHQUFHLHNCQUFVSCxXQUFWLENBQXhCOztBQUVBLFVBQU1JLFFBQVEsR0FBR1QsSUFBSSxDQUFDVSxNQUFMLEdBQVksQ0FBN0I7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHVixLQUFLLENBQUNTLE1BQU4sR0FBYSxDQUEvQjs7QUFDQSxVQUFNRSxZQUFZLEdBQUdILFFBQVEsSUFBSSxDQUFDRSxTQUFsQzs7QUFDQSxVQUFNRSxZQUFZLEdBQUcsQ0FBQ0YsU0FBRCxJQUFjLENBQUNGLFFBQWYsSUFBMkJILFFBQVEsS0FBR1EsU0FBM0Q7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHLHdCQUFZVixXQUFaLEVBQXlCTCxJQUF6QixFQUErQkcsSUFBL0IsQ0FBbEI7O0FBRUEsMEJBQ0M7QUFBQSwrQkFDQztBQUNDO0FBQ0EsVUFBQSxTQUFTLEVBQUUsNEJBQ1ZDLE9BRFUsbUJBRUFELElBRkEsR0FHVjtBQUNDLDBCQUFjLElBRGY7QUFFQyxzQkFBVSxDQUFDSixRQUZaO0FBR0Msd0JBQVlBLFFBSGI7QUFJQyx3QkFBWVU7QUFKYixXQUhVLENBRlo7QUFZQyxVQUFBLE9BQU8sRUFBRUYsT0FaVjtBQWFDLFVBQUEsUUFBUSxFQUFJUixRQWJiO0FBY0MsVUFBQSxLQUFLLEVBQUlHLGNBZFY7QUFlQyxVQUFBLEtBQUssRUFBRU0sZUFmUjtBQUFBLGlDQWlCQztBQUFLLFlBQUEsU0FBUyxFQUFDLFNBQWY7QUFBQSx1QkFDRUMsUUFBUSxpQkFDUjtBQUFLLGNBQUEsU0FBUyxFQUFFLDRCQUNmO0FBQ0MsK0JBQWUsSUFEaEI7QUFFQyxxQ0FBcUIsQ0FBQ0c7QUFGdkIsZUFEZSxDQUFoQjtBQUFBLHFDQU1DLHFCQUFDLGdCQUFEO0FBQ0MsZ0JBQUEsSUFBSSxFQUFFWixJQURQO0FBRUMsZ0JBQUEsVUFBVSxFQUFFZTtBQUZiO0FBTkQsY0FGRixFQWVHSixTQUFTLGlCQUFJO0FBQU8sY0FBQSxTQUFTLEVBQUUsY0FBbEI7QUFBQSx3QkFBbUNWO0FBQW5DLGNBZmhCLEVBZ0JFWSxZQUFZLElBQUlQLFFBaEJsQjtBQUFBO0FBakJEO0FBREQsUUFERDtBQXlDQTs7OztFQWpFbUJVLEtBQUssQ0FBQ0MsUzs7QUFvRTNCcEIsTUFBTSxDQUFDcUIsWUFBUCxHQUFzQjtBQUNyQm5CLEVBQUFBLFFBQVEsRUFBRSxLQURXO0FBRXJCQyxFQUFBQSxJQUFJLEVBQUUsRUFGZTtBQUdyQkMsRUFBQUEsS0FBSyxFQUFFLEVBSGM7QUFJckJDLEVBQUFBLGNBQWMsRUFBRSxFQUpLO0FBS3JCQyxFQUFBQSxJQUFJLEVBQUUsSUFMZTtBQU1yQkMsRUFBQUEsT0FBTyxFQUFHLFdBTlc7QUFPckJDLEVBQUFBLFdBQVcsRUFBRTtBQVBRLENBQXRCO0FBVUFSLE1BQU0sQ0FBQ3NCLFNBQVAsR0FBbUI7QUFDbEJwQixFQUFBQSxRQUFRLEVBQUVvQixzQkFBVUMsSUFERjtBQUVsQnBCLEVBQUFBLElBQUksRUFBRW1CLHNCQUFVRSxNQUZFO0FBR2xCcEIsRUFBQUEsS0FBSyxFQUFFa0Isc0JBQVVFLE1BSEM7QUFJbEJuQixFQUFBQSxjQUFjLEVBQUVpQixzQkFBVUUsTUFKUjtBQUtsQmxCLEVBQUFBLElBQUksRUFBRWdCLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLENBQWhCLENBTFk7QUFNbEJsQixFQUFBQSxPQUFPLEVBQUdlLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFhLGtCQUFiLEVBQWtDLGtCQUFsQyxFQUF1RCxXQUF2RCxFQUN2QixvQkFEdUIsRUFDQSxvQkFEQSxFQUN1QixVQUR2QixFQUNvQyxTQURwQyxFQUMrQyxFQUQvQyxDQUFoQixDQU5RO0FBUWxCakIsRUFBQUEsV0FBVyxFQUFFYyxzQkFBVUksTUFSTDtBQVNsQmhCLEVBQUFBLE9BQU8sRUFBRVksc0JBQVVLLElBVEQsQ0FVbEI7O0FBVmtCLENBQW5CO2VBYWUzQixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IHthZGRTdHlsZXMsIGdldEljb25TaXplfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcblx0cmVuZGVyKCkge1xyXG5cclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0ZGlzYWJsZWQsXHJcblx0XHRcdGljb24sXHJcblx0XHRcdGxhYmVsLFxyXG5cdFx0XHR0b29sdGlwQ29udGVudCxcclxuXHRcdFx0c2l6ZSxcclxuXHRcdFx0dmFyaWFudCxcclxuXHRcdFx0Y3VzdG9tU3R5bGUsXHJcblx0XHRcdGNoaWxkcmVuLFxyXG5cdFx0XHRvbkNsaWNrXHJcblx0XHR9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRjb25zdCBhZGRpdGlvbmFsU3R5bGUgPSBhZGRTdHlsZXMoY3VzdG9tU3R5bGUpO1xyXG5cclxuXHRcdGNvbnN0IF9oYXNJY29uID0gaWNvbi5sZW5ndGg+MDtcclxuXHRcdGNvbnN0IF9oYXNMYWJlbCA9IGxhYmVsLmxlbmd0aD4wO1xyXG5cdFx0Y29uc3QgX2hhc09ubHlJY29uID0gX2hhc0ljb24gJiYgIV9oYXNMYWJlbDtcclxuXHRcdGNvbnN0IF9zbG90RWxlbWVudCA9ICFfaGFzTGFiZWwgJiYgIV9oYXNJY29uICYmIGNoaWxkcmVuIT09dW5kZWZpbmVkO1xyXG5cdFx0Y29uc3QgX2ljb25TaXplID0gZ2V0SWNvblNpemUoY3VzdG9tU3R5bGUsIGljb24sIHNpemUpO1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0Ly9yZWY9e2VsbSA9PiB0aGlzLnByb3BzLmlubmVyUmVmKGVsbSl9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcblx0XHRcdFx0XHRcdHZhcmlhbnQsXHJcblx0XHRcdFx0XHRcdGBidXR0b24tJHtzaXplfWAsXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcInN3Zi1idXR0b25cIjogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcImFjdGl2ZVwiOiAhZGlzYWJsZWQsXHJcblx0XHRcdFx0XHRcdFx0XCJkaXNhYmxlZFwiOiBkaXNhYmxlZCxcclxuXHRcdFx0XHRcdFx0XHRcImhhcy1pY29uXCI6IF9oYXNJY29uXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXtvbkNsaWNrfVxyXG5cdFx0XHRcdFx0ZGlzYWJsZWQgPSB7ZGlzYWJsZWR9XHJcblx0XHRcdFx0XHR0aXRsZSA9IHt0b29sdGlwQ29udGVudH1cclxuXHRcdFx0XHRcdHN0eWxlPXthZGRpdGlvbmFsU3R5bGV9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdHtfaGFzSWNvbiAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcImJ1dHRvbi1pY29uXCI6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwibGFiZWwtYnV0dG9uLWljb25cIjogIV9oYXNPbmx5SWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17aWNvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VzdG9tU2l6ZT17X2ljb25TaXplfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0eyBfaGFzTGFiZWwgJiYgPGxhYmVsIGNsYXNzTmFtZT17XCJidXR0b24tbGFiZWxcIn0+e2xhYmVsfTwvbGFiZWw+IH1cclxuXHRcdFx0XHRcdFx0e19zbG90RWxlbWVudCAmJiBjaGlsZHJlbn1cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PC8+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xyXG5cdGRpc2FibGVkOiBmYWxzZSxcclxuXHRpY29uOiBcIlwiLFxyXG5cdGxhYmVsOiBcIlwiLFxyXG5cdHRvb2x0aXBDb250ZW50OiBcIlwiLFxyXG5cdHNpemU6ICdtZCcsXHJcblx0dmFyaWFudDogIFwic2Vjb25kYXJ5XCIsXHJcblx0Y3VzdG9tU3R5bGU6IG51bGxcclxufVxyXG5cclxuQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuXHRkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcblx0aWNvbjogcHJvcFR5cGVzLnN0cmluZyxcclxuXHRsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuXHR0b29sdGlwQ29udGVudDogcHJvcFR5cGVzLnN0cmluZyxcclxuXHRzaXplOiBwcm9wVHlwZXMub25lT2YoWydzbScsICdtZCcsICdsZyddKSxcclxuXHR2YXJpYW50OiAgcHJvcFR5cGVzLm9uZU9mKFtcInByaW1hcnlcIiAsIFwicHJpbWFyeS1wb3NpdGl2ZVwiICwgXCJwcmltYXJ5LW5lZ2F0aXZlXCIgLCBcInNlY29uZGFyeVwiICxcclxuXHRcdFx0XHRcInNlY29uZGFyeS1wb3NpdGl2ZVwiICwgXCJzZWNvbmRhcnktbmVnYXRpdmVcIiAsIFwidGVydGlhcnlcIiAsIFwiaW5oZXJpdFwiLCBcIlwiXSksXHJcblx0Y3VzdG9tU3R5bGU6IHByb3BUeXBlcy5vYmplY3QsXHJcblx0b25DbGljazogcHJvcFR5cGVzLmZ1bmMsXHJcblx0Ly9pbm5lclJlZjogcHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXHJcbiJdfQ==