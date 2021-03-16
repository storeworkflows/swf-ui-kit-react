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

var _styles = _interopRequireDefault(require("./styles.scss"));

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

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
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
        })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwiZGlzYWJsZWQiLCJpY29uIiwibGFiZWwiLCJ0b29sdGlwQ29udGVudCIsInNpemUiLCJ2YXJpYW50IiwiY3VzdG9tU3R5bGUiLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJhZGRpdGlvbmFsU3R5bGUiLCJfaGFzSWNvbiIsImxlbmd0aCIsIl9oYXNMYWJlbCIsIl9oYXNPbmx5SWNvbiIsIl9zbG90RWxlbWVudCIsInVuZGVmaW5lZCIsIl9pY29uU2l6ZSIsInN0eWxlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwib2JqZWN0IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7Ozs7Ozs7Ozs7O1dBRUwsa0JBQVM7QUFBQSx3QkFZSixLQUFLQyxLQVpEO0FBQUEsVUFHUEMsUUFITyxlQUdQQSxRQUhPO0FBQUEsVUFJUEMsSUFKTyxlQUlQQSxJQUpPO0FBQUEsVUFLUEMsS0FMTyxlQUtQQSxLQUxPO0FBQUEsVUFNUEMsY0FOTyxlQU1QQSxjQU5PO0FBQUEsVUFPUEMsSUFQTyxlQU9QQSxJQVBPO0FBQUEsVUFRUEMsT0FSTyxlQVFQQSxPQVJPO0FBQUEsVUFTUEMsV0FUTyxlQVNQQSxXQVRPO0FBQUEsVUFVUEMsUUFWTyxlQVVQQSxRQVZPO0FBQUEsVUFXUEMsT0FYTyxlQVdQQSxPQVhPO0FBY1IsVUFBTUMsZUFBZSxHQUFHLHNCQUFVSCxXQUFWLENBQXhCOztBQUVBLFVBQU1JLFFBQVEsR0FBR1QsSUFBSSxDQUFDVSxNQUFMLEdBQVksQ0FBN0I7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHVixLQUFLLENBQUNTLE1BQU4sR0FBYSxDQUEvQjs7QUFDQSxVQUFNRSxZQUFZLEdBQUdILFFBQVEsSUFBSSxDQUFDRSxTQUFsQzs7QUFDQSxVQUFNRSxZQUFZLEdBQUcsQ0FBQ0YsU0FBRCxJQUFjLENBQUNGLFFBQWYsSUFBMkJILFFBQVEsS0FBR1EsU0FBM0Q7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHLHdCQUFZVixXQUFaLEVBQXlCTCxJQUF6QixFQUErQkcsSUFBL0IsQ0FBbEI7O0FBRUEsMEJBQ0M7QUFBQSxnQ0FDQztBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0JhO0FBQXhCLFVBREQsZUFFQztBQUNDO0FBQ0EsVUFBQSxTQUFTLEVBQUUsNEJBQ1ZaLE9BRFUsbUJBRUFELElBRkEsR0FHVjtBQUNDLDBCQUFjLElBRGY7QUFFQyxzQkFBVSxDQUFDSixRQUZaO0FBR0Msd0JBQVlBLFFBSGI7QUFJQyx3QkFBWVU7QUFKYixXQUhVLENBRlo7QUFZQyxVQUFBLE9BQU8sRUFBRUYsT0FaVjtBQWFDLFVBQUEsUUFBUSxFQUFJUixRQWJiO0FBY0MsVUFBQSxLQUFLLEVBQUlHLGNBZFY7QUFlQyxVQUFBLEtBQUssRUFBRU0sZUFmUjtBQUFBLGlDQWlCQztBQUFLLFlBQUEsU0FBUyxFQUFDLFNBQWY7QUFBQSx1QkFDRUMsUUFBUSxpQkFDUjtBQUFLLGNBQUEsU0FBUyxFQUFFLDRCQUNmO0FBQ0MsK0JBQWUsSUFEaEI7QUFFQyxxQ0FBcUIsQ0FBQ0c7QUFGdkIsZUFEZSxDQUFoQjtBQUFBLHFDQU1DLHFCQUFDLGdCQUFEO0FBQ0MsZ0JBQUEsSUFBSSxFQUFFWixJQURQO0FBRUMsZ0JBQUEsVUFBVSxFQUFFZTtBQUZiO0FBTkQsY0FGRixFQWVHSixTQUFTLGlCQUFJO0FBQU8sY0FBQSxTQUFTLEVBQUUsY0FBbEI7QUFBQSx3QkFBbUNWO0FBQW5DLGNBZmhCLEVBZ0JFWSxZQUFZLElBQUlQLFFBaEJsQjtBQUFBO0FBakJELFVBRkQ7QUFBQSxRQUREO0FBMENBOzs7O0VBbEVtQlcsS0FBSyxDQUFDQyxTOztBQXFFM0JyQixNQUFNLENBQUNzQixZQUFQLEdBQXNCO0FBQ3JCcEIsRUFBQUEsUUFBUSxFQUFFLEtBRFc7QUFFckJDLEVBQUFBLElBQUksRUFBRSxFQUZlO0FBR3JCQyxFQUFBQSxLQUFLLEVBQUUsRUFIYztBQUlyQkMsRUFBQUEsY0FBYyxFQUFFLEVBSks7QUFLckJDLEVBQUFBLElBQUksRUFBRSxJQUxlO0FBTXJCQyxFQUFBQSxPQUFPLEVBQUcsV0FOVztBQU9yQkMsRUFBQUEsV0FBVyxFQUFFO0FBUFEsQ0FBdEI7QUFVQVIsTUFBTSxDQUFDdUIsU0FBUCxHQUFtQjtBQUNsQnJCLEVBQUFBLFFBQVEsRUFBRXFCLHNCQUFVQyxJQURGO0FBRWxCckIsRUFBQUEsSUFBSSxFQUFFb0Isc0JBQVVFLE1BRkU7QUFHbEJyQixFQUFBQSxLQUFLLEVBQUVtQixzQkFBVUUsTUFIQztBQUlsQnBCLEVBQUFBLGNBQWMsRUFBRWtCLHNCQUFVRSxNQUpSO0FBS2xCbkIsRUFBQUEsSUFBSSxFQUFFaUIsc0JBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsQ0FBaEIsQ0FMWTtBQU1sQm5CLEVBQUFBLE9BQU8sRUFBR2dCLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFhLGtCQUFiLEVBQWtDLGtCQUFsQyxFQUF1RCxXQUF2RCxFQUN2QixvQkFEdUIsRUFDQSxvQkFEQSxFQUN1QixVQUR2QixFQUNvQyxTQURwQyxFQUMrQyxFQUQvQyxDQUFoQixDQU5RO0FBUWxCbEIsRUFBQUEsV0FBVyxFQUFFZSxzQkFBVUksTUFSTDtBQVNsQmpCLEVBQUFBLE9BQU8sRUFBRWEsc0JBQVVLLElBVEQsQ0FVbEI7O0FBVmtCLENBQW5CO2VBYWU1QixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xyXG5pbXBvcnQge2FkZFN0eWxlcywgZ2V0SWNvblNpemV9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuXHRyZW5kZXIoKSB7XHJcblxyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRkaXNhYmxlZCxcclxuXHRcdFx0aWNvbixcclxuXHRcdFx0bGFiZWwsXHJcblx0XHRcdHRvb2x0aXBDb250ZW50LFxyXG5cdFx0XHRzaXplLFxyXG5cdFx0XHR2YXJpYW50LFxyXG5cdFx0XHRjdXN0b21TdHlsZSxcclxuXHRcdFx0Y2hpbGRyZW4sXHJcblx0XHRcdG9uQ2xpY2tcclxuXHRcdH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdGNvbnN0IGFkZGl0aW9uYWxTdHlsZSA9IGFkZFN0eWxlcyhjdXN0b21TdHlsZSk7XHJcblxyXG5cdFx0Y29uc3QgX2hhc0ljb24gPSBpY29uLmxlbmd0aD4wO1xyXG5cdFx0Y29uc3QgX2hhc0xhYmVsID0gbGFiZWwubGVuZ3RoPjA7XHJcblx0XHRjb25zdCBfaGFzT25seUljb24gPSBfaGFzSWNvbiAmJiAhX2hhc0xhYmVsO1xyXG5cdFx0Y29uc3QgX3Nsb3RFbGVtZW50ID0gIV9oYXNMYWJlbCAmJiAhX2hhc0ljb24gJiYgY2hpbGRyZW4hPT11bmRlZmluZWQ7XHJcblx0XHRjb25zdCBfaWNvblNpemUgPSBnZXRJY29uU2l6ZShjdXN0b21TdHlsZSwgaWNvbiwgc2l6ZSk7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxyXG5cdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdC8vcmVmPXtlbG0gPT4gdGhpcy5wcm9wcy5pbm5lclJlZihlbG0pfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG5cdFx0XHRcdFx0XHR2YXJpYW50LFxyXG5cdFx0XHRcdFx0XHRgYnV0dG9uLSR7c2l6ZX1gLFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJzd2YtYnV0dG9uXCI6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XCJhY3RpdmVcIjogIWRpc2FibGVkLFxyXG5cdFx0XHRcdFx0XHRcdFwiZGlzYWJsZWRcIjogZGlzYWJsZWQsXHJcblx0XHRcdFx0XHRcdFx0XCJoYXMtaWNvblwiOiBfaGFzSWNvblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0b25DbGljaz17b25DbGlja31cclxuXHRcdFx0XHRcdGRpc2FibGVkID0ge2Rpc2FibGVkfVxyXG5cdFx0XHRcdFx0dGl0bGUgPSB7dG9vbHRpcENvbnRlbnR9XHJcblx0XHRcdFx0XHRzdHlsZT17YWRkaXRpb25hbFN0eWxlfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHR7X2hhc0ljb24gJiZcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJidXR0b24taWNvblwiOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcImxhYmVsLWJ1dHRvbi1pY29uXCI6ICFfaGFzT25seUljb25cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdGljb249e2ljb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1c3RvbVNpemU9e19pY29uU2l6ZX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHsgX2hhc0xhYmVsICYmIDxsYWJlbCBjbGFzc05hbWU9e1wiYnV0dG9uLWxhYmVsXCJ9PntsYWJlbH08L2xhYmVsPiB9XHJcblx0XHRcdFx0XHRcdHtfc2xvdEVsZW1lbnQgJiYgY2hpbGRyZW59XHJcblxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDwvPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcclxuXHRkaXNhYmxlZDogZmFsc2UsXHJcblx0aWNvbjogXCJcIixcclxuXHRsYWJlbDogXCJcIixcclxuXHR0b29sdGlwQ29udGVudDogXCJcIixcclxuXHRzaXplOiAnbWQnLFxyXG5cdHZhcmlhbnQ6ICBcInNlY29uZGFyeVwiLFxyXG5cdGN1c3RvbVN0eWxlOiBudWxsXHJcbn1cclxuXHJcbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcblx0ZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxyXG5cdGljb246IHByb3BUeXBlcy5zdHJpbmcsXHJcblx0bGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcblx0dG9vbHRpcENvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcblx0c2l6ZTogcHJvcFR5cGVzLm9uZU9mKFsnc20nLCAnbWQnLCAnbGcnXSksXHJcblx0dmFyaWFudDogIHByb3BUeXBlcy5vbmVPZihbXCJwcmltYXJ5XCIgLCBcInByaW1hcnktcG9zaXRpdmVcIiAsIFwicHJpbWFyeS1uZWdhdGl2ZVwiICwgXCJzZWNvbmRhcnlcIiAsXHJcblx0XHRcdFx0XCJzZWNvbmRhcnktcG9zaXRpdmVcIiAsIFwic2Vjb25kYXJ5LW5lZ2F0aXZlXCIgLCBcInRlcnRpYXJ5XCIgLCBcImluaGVyaXRcIiwgXCJcIl0pLFxyXG5cdGN1c3RvbVN0eWxlOiBwcm9wVHlwZXMub2JqZWN0LFxyXG5cdG9uQ2xpY2s6IHByb3BUeXBlcy5mdW5jLFxyXG5cdC8vaW5uZXJSZWY6IHByb3BUeXBlcy5mdW5jXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxyXG4iXX0=