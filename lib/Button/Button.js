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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          //ref={elm => this.props.innerRef(elm)}
          className: (0, _classnames["default"])(className, variant, "button-".concat(size), {
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
  className: _propTypes["default"].object //innerRef: propTypes.func

};
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwiZGlzYWJsZWQiLCJpY29uIiwibGFiZWwiLCJ0b29sdGlwQ29udGVudCIsInNpemUiLCJ2YXJpYW50IiwiY3VzdG9tU3R5bGUiLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJhZGRpdGlvbmFsU3R5bGUiLCJfaGFzSWNvbiIsImxlbmd0aCIsIl9oYXNMYWJlbCIsIl9oYXNPbmx5SWNvbiIsIl9zbG90RWxlbWVudCIsInVuZGVmaW5lZCIsIl9pY29uU2l6ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwib2JqZWN0IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7Ozs7Ozs7Ozs7O1dBRUwsa0JBQVM7QUFBQSx3QkFhSixLQUFLQyxLQWJEO0FBQUEsVUFHUEMsUUFITyxlQUdQQSxRQUhPO0FBQUEsVUFJUEMsSUFKTyxlQUlQQSxJQUpPO0FBQUEsVUFLUEMsS0FMTyxlQUtQQSxLQUxPO0FBQUEsVUFNUEMsY0FOTyxlQU1QQSxjQU5PO0FBQUEsVUFPUEMsSUFQTyxlQU9QQSxJQVBPO0FBQUEsVUFRUEMsT0FSTyxlQVFQQSxPQVJPO0FBQUEsVUFTUEMsV0FUTyxlQVNQQSxXQVRPO0FBQUEsVUFVUEMsUUFWTyxlQVVQQSxRQVZPO0FBQUEsVUFXUEMsT0FYTyxlQVdQQSxPQVhPO0FBQUEsVUFZUEMsU0FaTyxlQVlQQSxTQVpPO0FBZVIsVUFBTUMsZUFBZSxHQUFHLHNCQUFVSixXQUFWLENBQXhCOztBQUVBLFVBQU1LLFFBQVEsR0FBR1YsSUFBSSxDQUFDVyxNQUFMLEdBQVksQ0FBN0I7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHWCxLQUFLLENBQUNVLE1BQU4sR0FBYSxDQUEvQjs7QUFDQSxVQUFNRSxZQUFZLEdBQUdILFFBQVEsSUFBSSxDQUFDRSxTQUFsQzs7QUFDQSxVQUFNRSxZQUFZLEdBQUcsQ0FBQ0YsU0FBRCxJQUFjLENBQUNGLFFBQWYsSUFBMkJKLFFBQVEsS0FBR1MsU0FBM0Q7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHLHdCQUFZWCxXQUFaLEVBQXlCTCxJQUF6QixFQUErQkcsSUFBL0IsQ0FBbEI7O0FBRUEsMEJBQ0M7QUFBQSwrQkFDQztBQUNDO0FBQ0EsVUFBQSxTQUFTLEVBQUUsNEJBQ1ZLLFNBRFUsRUFFVkosT0FGVSxtQkFHQUQsSUFIQSxHQUlWO0FBQ0MsMEJBQWMsSUFEZjtBQUVDLHNCQUFVLENBQUNKLFFBRlo7QUFHQyx3QkFBWUEsUUFIYjtBQUlDLHdCQUFZVztBQUpiLFdBSlUsQ0FGWjtBQWFDLFVBQUEsT0FBTyxFQUFFSCxPQWJWO0FBY0MsVUFBQSxRQUFRLEVBQUlSLFFBZGI7QUFlQyxVQUFBLEtBQUssRUFBSUcsY0FmVjtBQWdCQyxVQUFBLEtBQUssRUFBRU8sZUFoQlI7QUFBQSxpQ0FrQkM7QUFBSyxZQUFBLFNBQVMsRUFBQyxTQUFmO0FBQUEsdUJBQ0VDLFFBQVEsaUJBQ1I7QUFBSyxjQUFBLFNBQVMsRUFBRSw0QkFDZjtBQUNDLCtCQUFlLElBRGhCO0FBRUMscUNBQXFCLENBQUNHO0FBRnZCLGVBRGUsQ0FBaEI7QUFBQSxxQ0FNQyxxQkFBQyxnQkFBRDtBQUNDLGdCQUFBLElBQUksRUFBRWIsSUFEUDtBQUVDLGdCQUFBLFVBQVUsRUFBRWdCO0FBRmI7QUFORCxjQUZGLEVBZUdKLFNBQVMsaUJBQUk7QUFBTyxjQUFBLFNBQVMsRUFBRSxjQUFsQjtBQUFBLHdCQUFtQ1g7QUFBbkMsY0FmaEIsRUFnQkVhLFlBQVksSUFBSVIsUUFoQmxCO0FBQUE7QUFsQkQ7QUFERCxRQUREO0FBMENBOzs7O0VBbkVtQlcsS0FBSyxDQUFDQyxTOztBQXNFM0JyQixNQUFNLENBQUNzQixZQUFQLEdBQXNCO0FBQ3JCcEIsRUFBQUEsUUFBUSxFQUFFLEtBRFc7QUFFckJDLEVBQUFBLElBQUksRUFBRSxFQUZlO0FBR3JCQyxFQUFBQSxLQUFLLEVBQUUsRUFIYztBQUlyQkMsRUFBQUEsY0FBYyxFQUFFLEVBSks7QUFLckJDLEVBQUFBLElBQUksRUFBRSxJQUxlO0FBTXJCQyxFQUFBQSxPQUFPLEVBQUcsV0FOVztBQU9yQkMsRUFBQUEsV0FBVyxFQUFFLElBUFE7QUFRckJHLEVBQUFBLFNBQVMsRUFBRTtBQVJVLENBQXRCO0FBV0FYLE1BQU0sQ0FBQ3VCLFNBQVAsR0FBbUI7QUFDbEJyQixFQUFBQSxRQUFRLEVBQUVxQixzQkFBVUMsSUFERjtBQUVsQnJCLEVBQUFBLElBQUksRUFBRW9CLHNCQUFVRSxNQUZFO0FBR2xCckIsRUFBQUEsS0FBSyxFQUFFbUIsc0JBQVVFLE1BSEM7QUFJbEJwQixFQUFBQSxjQUFjLEVBQUVrQixzQkFBVUUsTUFKUjtBQUtsQm5CLEVBQUFBLElBQUksRUFBRWlCLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLENBQWhCLENBTFk7QUFNbEJuQixFQUFBQSxPQUFPLEVBQUdnQixzQkFBVUcsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBYSxrQkFBYixFQUFrQyxrQkFBbEMsRUFBdUQsV0FBdkQsRUFDdkIsb0JBRHVCLEVBQ0Esb0JBREEsRUFDdUIsVUFEdkIsRUFDb0MsU0FEcEMsRUFDK0MsRUFEL0MsQ0FBaEIsQ0FOUTtBQVFsQmxCLEVBQUFBLFdBQVcsRUFBRWUsc0JBQVVJLE1BUkw7QUFTbEJqQixFQUFBQSxPQUFPLEVBQUVhLHNCQUFVSyxJQVREO0FBVWxCakIsRUFBQUEsU0FBUyxFQUFFWSxzQkFBVUksTUFWSCxDQVdsQjs7QUFYa0IsQ0FBbkI7ZUFjZTNCLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5pbXBvcnQge2FkZFN0eWxlcywgZ2V0SWNvblNpemV9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuXHRyZW5kZXIoKSB7XHJcblxyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRkaXNhYmxlZCxcclxuXHRcdFx0aWNvbixcclxuXHRcdFx0bGFiZWwsXHJcblx0XHRcdHRvb2x0aXBDb250ZW50LFxyXG5cdFx0XHRzaXplLFxyXG5cdFx0XHR2YXJpYW50LFxyXG5cdFx0XHRjdXN0b21TdHlsZSxcclxuXHRcdFx0Y2hpbGRyZW4sXHJcblx0XHRcdG9uQ2xpY2ssXHJcblx0XHRcdGNsYXNzTmFtZVxyXG5cdFx0fSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0Y29uc3QgYWRkaXRpb25hbFN0eWxlID0gYWRkU3R5bGVzKGN1c3RvbVN0eWxlKTtcclxuXHJcblx0XHRjb25zdCBfaGFzSWNvbiA9IGljb24ubGVuZ3RoPjA7XHJcblx0XHRjb25zdCBfaGFzTGFiZWwgPSBsYWJlbC5sZW5ndGg+MDtcclxuXHRcdGNvbnN0IF9oYXNPbmx5SWNvbiA9IF9oYXNJY29uICYmICFfaGFzTGFiZWw7XHJcblx0XHRjb25zdCBfc2xvdEVsZW1lbnQgPSAhX2hhc0xhYmVsICYmICFfaGFzSWNvbiAmJiBjaGlsZHJlbiE9PXVuZGVmaW5lZDtcclxuXHRcdGNvbnN0IF9pY29uU2l6ZSA9IGdldEljb25TaXplKGN1c3RvbVN0eWxlLCBpY29uLCBzaXplKTtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdC8vcmVmPXtlbG0gPT4gdGhpcy5wcm9wcy5pbm5lclJlZihlbG0pfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWUsXHJcblx0XHRcdFx0XHRcdHZhcmlhbnQsXHJcblx0XHRcdFx0XHRcdGBidXR0b24tJHtzaXplfWAsXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcInN3Zi1idXR0b25cIjogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcImFjdGl2ZVwiOiAhZGlzYWJsZWQsXHJcblx0XHRcdFx0XHRcdFx0XCJkaXNhYmxlZFwiOiBkaXNhYmxlZCxcclxuXHRcdFx0XHRcdFx0XHRcImhhcy1pY29uXCI6IF9oYXNJY29uXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXtvbkNsaWNrfVxyXG5cdFx0XHRcdFx0ZGlzYWJsZWQgPSB7ZGlzYWJsZWR9XHJcblx0XHRcdFx0XHR0aXRsZSA9IHt0b29sdGlwQ29udGVudH1cclxuXHRcdFx0XHRcdHN0eWxlPXthZGRpdGlvbmFsU3R5bGV9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdHtfaGFzSWNvbiAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcImJ1dHRvbi1pY29uXCI6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwibGFiZWwtYnV0dG9uLWljb25cIjogIV9oYXNPbmx5SWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17aWNvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VzdG9tU2l6ZT17X2ljb25TaXplfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0eyBfaGFzTGFiZWwgJiYgPGxhYmVsIGNsYXNzTmFtZT17XCJidXR0b24tbGFiZWxcIn0+e2xhYmVsfTwvbGFiZWw+IH1cclxuXHRcdFx0XHRcdFx0e19zbG90RWxlbWVudCAmJiBjaGlsZHJlbn1cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PC8+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xyXG5cdGRpc2FibGVkOiBmYWxzZSxcclxuXHRpY29uOiBcIlwiLFxyXG5cdGxhYmVsOiBcIlwiLFxyXG5cdHRvb2x0aXBDb250ZW50OiBcIlwiLFxyXG5cdHNpemU6ICdtZCcsXHJcblx0dmFyaWFudDogIFwic2Vjb25kYXJ5XCIsXHJcblx0Y3VzdG9tU3R5bGU6IG51bGwsXHJcblx0Y2xhc3NOYW1lOiB7fVxyXG59XHJcblxyXG5CdXR0b24ucHJvcFR5cGVzID0ge1xyXG5cdGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuXHRpY29uOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdHRvb2x0aXBDb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdHNpemU6IHByb3BUeXBlcy5vbmVPZihbJ3NtJywgJ21kJywgJ2xnJ10pLFxyXG5cdHZhcmlhbnQ6ICBwcm9wVHlwZXMub25lT2YoW1wicHJpbWFyeVwiICwgXCJwcmltYXJ5LXBvc2l0aXZlXCIgLCBcInByaW1hcnktbmVnYXRpdmVcIiAsIFwic2Vjb25kYXJ5XCIgLFxyXG5cdFx0XHRcdFwic2Vjb25kYXJ5LXBvc2l0aXZlXCIgLCBcInNlY29uZGFyeS1uZWdhdGl2ZVwiICwgXCJ0ZXJ0aWFyeVwiICwgXCJpbmhlcml0XCIsIFwiXCJdKSxcclxuXHRjdXN0b21TdHlsZTogcHJvcFR5cGVzLm9iamVjdCxcclxuXHRvbkNsaWNrOiBwcm9wVHlwZXMuZnVuYyxcclxuXHRjbGFzc05hbWU6IHByb3BUeXBlcy5vYmplY3RcclxuXHQvL2lubmVyUmVmOiBwcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cclxuIl19