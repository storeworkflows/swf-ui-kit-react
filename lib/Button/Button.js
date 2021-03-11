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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwiZGlzYWJsZWQiLCJpY29uIiwibGFiZWwiLCJ0b29sdGlwQ29udGVudCIsInNpemUiLCJ2YXJpYW50IiwiY3VzdG9tU3R5bGUiLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJhZGRpdGlvbmFsU3R5bGUiLCJfaGFzSWNvbiIsImxlbmd0aCIsIl9oYXNMYWJlbCIsIl9oYXNPbmx5SWNvbiIsIl9zbG90RWxlbWVudCIsInVuZGVmaW5lZCIsIl9pY29uU2l6ZSIsInN0eWxlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwib2JqZWN0IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7Ozs7Ozs7Ozs7O1dBRUwsa0JBQVM7QUFBQSx3QkFZSixLQUFLQyxLQVpEO0FBQUEsVUFHUEMsUUFITyxlQUdQQSxRQUhPO0FBQUEsVUFJUEMsSUFKTyxlQUlQQSxJQUpPO0FBQUEsVUFLUEMsS0FMTyxlQUtQQSxLQUxPO0FBQUEsVUFNUEMsY0FOTyxlQU1QQSxjQU5PO0FBQUEsVUFPUEMsSUFQTyxlQU9QQSxJQVBPO0FBQUEsVUFRUEMsT0FSTyxlQVFQQSxPQVJPO0FBQUEsVUFTUEMsV0FUTyxlQVNQQSxXQVRPO0FBQUEsVUFVUEMsUUFWTyxlQVVQQSxRQVZPO0FBQUEsVUFXUEMsT0FYTyxlQVdQQSxPQVhPO0FBY1IsVUFBTUMsZUFBZSxHQUFHLHNCQUFVSCxXQUFWLENBQXhCOztBQUVBLFVBQU1JLFFBQVEsR0FBR1QsSUFBSSxDQUFDVSxNQUFMLEdBQVksQ0FBN0I7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHVixLQUFLLENBQUNTLE1BQU4sR0FBYSxDQUEvQjs7QUFDQSxVQUFNRSxZQUFZLEdBQUdILFFBQVEsSUFBSSxDQUFDRSxTQUFsQzs7QUFDQSxVQUFNRSxZQUFZLEdBQUcsQ0FBQ0YsU0FBRCxJQUFjLENBQUNGLFFBQWYsSUFBMkJILFFBQVEsS0FBR1EsU0FBM0Q7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHLHdCQUFZVixXQUFaLEVBQXlCTCxJQUF6QixFQUErQkcsSUFBL0IsQ0FBbEI7O0FBRUEsMEJBQ0M7QUFBQSxnQ0FDQztBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0JhO0FBQXhCLFVBREQsZUFFQztBQUNDO0FBQ0EsVUFBQSxTQUFTLEVBQUUsNEJBQ1ZaLE9BRFUsbUJBRUFELElBRkEsR0FHVjtBQUNDLDBCQUFjLElBRGY7QUFFQyxzQkFBVSxDQUFDSixRQUZaO0FBR0Msd0JBQVlVO0FBSGIsV0FIVSxDQUZaO0FBV0MsVUFBQSxPQUFPLEVBQUVGLE9BWFY7QUFZQyxVQUFBLFFBQVEsRUFBSVIsUUFaYjtBQWFDLFVBQUEsS0FBSyxFQUFJRyxjQWJWO0FBY0MsVUFBQSxLQUFLLEVBQUVNLGVBZFI7QUFBQSxpQ0FnQkM7QUFBSyxZQUFBLFNBQVMsRUFBQyxTQUFmO0FBQUEsdUJBQ0VDLFFBQVEsaUJBQ1I7QUFBSyxjQUFBLFNBQVMsRUFBRSw0QkFDZjtBQUNDLCtCQUFlLElBRGhCO0FBRUMscUNBQXFCLENBQUNHO0FBRnZCLGVBRGUsQ0FBaEI7QUFBQSxxQ0FNQyxxQkFBQyxnQkFBRDtBQUNDLGdCQUFBLElBQUksRUFBRVosSUFEUDtBQUVDLGdCQUFBLFVBQVUsRUFBRWU7QUFGYjtBQU5ELGNBRkYsRUFlR0osU0FBUyxpQkFBSTtBQUFBLHdCQUFRVjtBQUFSLGNBZmhCLEVBZ0JFWSxZQUFZLElBQUlQLFFBaEJsQjtBQUFBO0FBaEJELFVBRkQ7QUFBQSxRQUREO0FBeUNBOzs7O0VBakVtQlcsS0FBSyxDQUFDQyxTOztBQW9FM0JyQixNQUFNLENBQUNzQixZQUFQLEdBQXNCO0FBQ3JCcEIsRUFBQUEsUUFBUSxFQUFFLEtBRFc7QUFFckJDLEVBQUFBLElBQUksRUFBRSxFQUZlO0FBR3JCQyxFQUFBQSxLQUFLLEVBQUUsRUFIYztBQUlyQkMsRUFBQUEsY0FBYyxFQUFFLEVBSks7QUFLckJDLEVBQUFBLElBQUksRUFBRSxJQUxlO0FBTXJCQyxFQUFBQSxPQUFPLEVBQUcsV0FOVztBQU9yQkMsRUFBQUEsV0FBVyxFQUFFO0FBUFEsQ0FBdEI7QUFVQVIsTUFBTSxDQUFDdUIsU0FBUCxHQUFtQjtBQUNsQnJCLEVBQUFBLFFBQVEsRUFBRXFCLHNCQUFVQyxJQURGO0FBRWxCckIsRUFBQUEsSUFBSSxFQUFFb0Isc0JBQVVFLE1BRkU7QUFHbEJyQixFQUFBQSxLQUFLLEVBQUVtQixzQkFBVUUsTUFIQztBQUlsQnBCLEVBQUFBLGNBQWMsRUFBRWtCLHNCQUFVRSxNQUpSO0FBS2xCbkIsRUFBQUEsSUFBSSxFQUFFaUIsc0JBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsQ0FBaEIsQ0FMWTtBQU1sQm5CLEVBQUFBLE9BQU8sRUFBR2dCLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFhLGtCQUFiLEVBQWtDLGtCQUFsQyxFQUF1RCxXQUF2RCxFQUN2QixvQkFEdUIsRUFDQSxvQkFEQSxFQUN1QixVQUR2QixFQUNvQyxTQURwQyxFQUMrQyxFQUQvQyxDQUFoQixDQU5RO0FBUWxCbEIsRUFBQUEsV0FBVyxFQUFFZSxzQkFBVUksTUFSTDtBQVNsQmpCLEVBQUFBLE9BQU8sRUFBRWEsc0JBQVVLLElBVEQsQ0FVbEI7O0FBVmtCLENBQW5CO2VBYWU1QixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xyXG5pbXBvcnQge2FkZFN0eWxlcywgZ2V0SWNvblNpemV9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuXHRyZW5kZXIoKSB7XHJcblxyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRkaXNhYmxlZCxcclxuXHRcdFx0aWNvbixcclxuXHRcdFx0bGFiZWwsXHJcblx0XHRcdHRvb2x0aXBDb250ZW50LFxyXG5cdFx0XHRzaXplLFxyXG5cdFx0XHR2YXJpYW50LFxyXG5cdFx0XHRjdXN0b21TdHlsZSxcclxuXHRcdFx0Y2hpbGRyZW4sXHJcblx0XHRcdG9uQ2xpY2tcclxuXHRcdH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdGNvbnN0IGFkZGl0aW9uYWxTdHlsZSA9IGFkZFN0eWxlcyhjdXN0b21TdHlsZSk7XHJcblxyXG5cdFx0Y29uc3QgX2hhc0ljb24gPSBpY29uLmxlbmd0aD4wO1xyXG5cdFx0Y29uc3QgX2hhc0xhYmVsID0gbGFiZWwubGVuZ3RoPjA7XHJcblx0XHRjb25zdCBfaGFzT25seUljb24gPSBfaGFzSWNvbiAmJiAhX2hhc0xhYmVsO1xyXG5cdFx0Y29uc3QgX3Nsb3RFbGVtZW50ID0gIV9oYXNMYWJlbCAmJiAhX2hhc0ljb24gJiYgY2hpbGRyZW4hPT11bmRlZmluZWQ7XHJcblx0XHRjb25zdCBfaWNvblNpemUgPSBnZXRJY29uU2l6ZShjdXN0b21TdHlsZSwgaWNvbiwgc2l6ZSk7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxyXG5cdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdC8vcmVmPXtlbG0gPT4gdGhpcy5wcm9wcy5pbm5lclJlZihlbG0pfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG5cdFx0XHRcdFx0XHR2YXJpYW50LFxyXG5cdFx0XHRcdFx0XHRgYnV0dG9uLSR7c2l6ZX1gLFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJzd2YtYnV0dG9uXCI6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XCJhY3RpdmVcIjogIWRpc2FibGVkLFxyXG5cdFx0XHRcdFx0XHRcdFwiaGFzLWljb25cIjogX2hhc0ljb25cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9e29uQ2xpY2t9XHJcblx0XHRcdFx0XHRkaXNhYmxlZCA9IHtkaXNhYmxlZH1cclxuXHRcdFx0XHRcdHRpdGxlID0ge3Rvb2x0aXBDb250ZW50fVxyXG5cdFx0XHRcdFx0c3R5bGU9e2FkZGl0aW9uYWxTdHlsZX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0e19oYXNJY29uICYmXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFwiYnV0dG9uLWljb25cIjogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJsYWJlbC1idXR0b24taWNvblwiOiAhX2hhc09ubHlJY29uXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0KX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8SWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXtpY29ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXN0b21TaXplPXtfaWNvblNpemV9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR7IF9oYXNMYWJlbCAmJiA8bGFiZWw+e2xhYmVsfTwvbGFiZWw+IH1cclxuXHRcdFx0XHRcdFx0e19zbG90RWxlbWVudCAmJiBjaGlsZHJlbn1cclxuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PC8+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xyXG5cdGRpc2FibGVkOiBmYWxzZSxcclxuXHRpY29uOiBcIlwiLFxyXG5cdGxhYmVsOiBcIlwiLFxyXG5cdHRvb2x0aXBDb250ZW50OiBcIlwiLFxyXG5cdHNpemU6ICdtZCcsXHJcblx0dmFyaWFudDogIFwic2Vjb25kYXJ5XCIsXHJcblx0Y3VzdG9tU3R5bGU6IG51bGxcclxufVxyXG5cclxuQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuXHRkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcblx0aWNvbjogcHJvcFR5cGVzLnN0cmluZyxcclxuXHRsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuXHR0b29sdGlwQ29udGVudDogcHJvcFR5cGVzLnN0cmluZyxcclxuXHRzaXplOiBwcm9wVHlwZXMub25lT2YoWydzbScsICdtZCcsICdsZyddKSxcclxuXHR2YXJpYW50OiAgcHJvcFR5cGVzLm9uZU9mKFtcInByaW1hcnlcIiAsIFwicHJpbWFyeS1wb3NpdGl2ZVwiICwgXCJwcmltYXJ5LW5lZ2F0aXZlXCIgLCBcInNlY29uZGFyeVwiICxcclxuXHRcdFx0XHRcInNlY29uZGFyeS1wb3NpdGl2ZVwiICwgXCJzZWNvbmRhcnktbmVnYXRpdmVcIiAsIFwidGVydGlhcnlcIiAsIFwiaW5oZXJpdFwiLCBcIlwiXSksXHJcblx0Y3VzdG9tU3R5bGU6IHByb3BUeXBlcy5vYmplY3QsXHJcblx0b25DbGljazogcHJvcFR5cGVzLmZ1bmMsXHJcblx0Ly9pbm5lclJlZjogcHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXHJcbiJdfQ==