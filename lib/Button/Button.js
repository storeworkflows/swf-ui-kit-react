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
  onClick: _propTypes["default"].func
};
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwiZGlzYWJsZWQiLCJpY29uIiwibGFiZWwiLCJ0b29sdGlwQ29udGVudCIsInNpemUiLCJ2YXJpYW50IiwiY3VzdG9tU3R5bGUiLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJhZGRpdGlvbmFsU3R5bGUiLCJfaGFzSWNvbiIsImxlbmd0aCIsIl9oYXNMYWJlbCIsIl9oYXNPbmx5SWNvbiIsIl9zbG90RWxlbWVudCIsInVuZGVmaW5lZCIsIl9pY29uU2l6ZSIsInN0eWxlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwib2JqZWN0IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7Ozs7Ozs7Ozs7O1dBRUwsa0JBQVM7QUFBQSx3QkFZSixLQUFLQyxLQVpEO0FBQUEsVUFHUEMsUUFITyxlQUdQQSxRQUhPO0FBQUEsVUFJUEMsSUFKTyxlQUlQQSxJQUpPO0FBQUEsVUFLUEMsS0FMTyxlQUtQQSxLQUxPO0FBQUEsVUFNUEMsY0FOTyxlQU1QQSxjQU5PO0FBQUEsVUFPUEMsSUFQTyxlQU9QQSxJQVBPO0FBQUEsVUFRUEMsT0FSTyxlQVFQQSxPQVJPO0FBQUEsVUFTUEMsV0FUTyxlQVNQQSxXQVRPO0FBQUEsVUFVUEMsUUFWTyxlQVVQQSxRQVZPO0FBQUEsVUFXUEMsT0FYTyxlQVdQQSxPQVhPO0FBY1IsVUFBTUMsZUFBZSxHQUFHLHNCQUFVSCxXQUFWLENBQXhCOztBQUVBLFVBQU1JLFFBQVEsR0FBR1QsSUFBSSxDQUFDVSxNQUFMLEdBQVksQ0FBN0I7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHVixLQUFLLENBQUNTLE1BQU4sR0FBYSxDQUEvQjs7QUFDQSxVQUFNRSxZQUFZLEdBQUdILFFBQVEsSUFBSSxDQUFDRSxTQUFsQzs7QUFDQSxVQUFNRSxZQUFZLEdBQUcsQ0FBQ0YsU0FBRCxJQUFjLENBQUNGLFFBQWYsSUFBMkJILFFBQVEsS0FBR1EsU0FBM0Q7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHLHdCQUFZVixXQUFaLEVBQXlCTCxJQUF6QixFQUErQkcsSUFBL0IsQ0FBbEI7O0FBRUEsMEJBQ0M7QUFBQSxnQ0FDQztBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0JhO0FBQXhCLFVBREQsZUFFQztBQUNDLFVBQUEsU0FBUyxFQUFFLDRCQUNWWixPQURVLG1CQUVBRCxJQUZBLEdBR1Y7QUFDQywwQkFBYyxJQURmO0FBRUMsc0JBQVUsQ0FBQ0osUUFGWjtBQUdDLHdCQUFZVTtBQUhiLFdBSFUsQ0FEWjtBQVVDLFVBQUEsT0FBTyxFQUFFRixPQVZWO0FBV0MsVUFBQSxRQUFRLEVBQUlSLFFBWGI7QUFZQyxVQUFBLEtBQUssRUFBSUcsY0FaVjtBQWFDLFVBQUEsS0FBSyxFQUFFTSxlQWJSO0FBQUEsaUNBZUM7QUFBSyxZQUFBLFNBQVMsRUFBQyxTQUFmO0FBQUEsdUJBQ0VDLFFBQVEsaUJBQ1I7QUFBSyxjQUFBLFNBQVMsRUFBRSw0QkFDZjtBQUNDLCtCQUFlLElBRGhCO0FBRUMscUNBQXFCLENBQUNHO0FBRnZCLGVBRGUsQ0FBaEI7QUFBQSxxQ0FNQyxxQkFBQyxnQkFBRDtBQUNDLGdCQUFBLElBQUksRUFBRVosSUFEUDtBQUVDLGdCQUFBLFVBQVUsRUFBRWU7QUFGYjtBQU5ELGNBRkYsRUFlR0osU0FBUyxpQkFBSTtBQUFBLHdCQUFRVjtBQUFSLGNBZmhCLEVBZ0JFWSxZQUFZLElBQUlQLFFBaEJsQjtBQUFBO0FBZkQsVUFGRDtBQUFBLFFBREQ7QUF3Q0E7Ozs7RUFoRW1CVyxLQUFLLENBQUNDLFM7O0FBbUUzQnJCLE1BQU0sQ0FBQ3NCLFlBQVAsR0FBc0I7QUFDckJwQixFQUFBQSxRQUFRLEVBQUUsS0FEVztBQUVyQkMsRUFBQUEsSUFBSSxFQUFFLEVBRmU7QUFHckJDLEVBQUFBLEtBQUssRUFBRSxFQUhjO0FBSXJCQyxFQUFBQSxjQUFjLEVBQUUsRUFKSztBQUtyQkMsRUFBQUEsSUFBSSxFQUFFLElBTGU7QUFNckJDLEVBQUFBLE9BQU8sRUFBRyxXQU5XO0FBT3JCQyxFQUFBQSxXQUFXLEVBQUU7QUFQUSxDQUF0QjtBQVVBUixNQUFNLENBQUN1QixTQUFQLEdBQW1CO0FBQ2xCckIsRUFBQUEsUUFBUSxFQUFFcUIsc0JBQVVDLElBREY7QUFFbEJyQixFQUFBQSxJQUFJLEVBQUVvQixzQkFBVUUsTUFGRTtBQUdsQnJCLEVBQUFBLEtBQUssRUFBRW1CLHNCQUFVRSxNQUhDO0FBSWxCcEIsRUFBQUEsY0FBYyxFQUFFa0Isc0JBQVVFLE1BSlI7QUFLbEJuQixFQUFBQSxJQUFJLEVBQUVpQixzQkFBVUcsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixDQUFoQixDQUxZO0FBTWxCbkIsRUFBQUEsT0FBTyxFQUFHZ0Isc0JBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQWEsa0JBQWIsRUFBa0Msa0JBQWxDLEVBQXVELFdBQXZELEVBQ3ZCLG9CQUR1QixFQUNBLG9CQURBLEVBQ3VCLFVBRHZCLEVBQ29DLFNBRHBDLEVBQytDLEVBRC9DLENBQWhCLENBTlE7QUFRbEJsQixFQUFBQSxXQUFXLEVBQUVlLHNCQUFVSSxNQVJMO0FBU2xCakIsRUFBQUEsT0FBTyxFQUFFYSxzQkFBVUs7QUFURCxDQUFuQjtlQVllNUIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IHthZGRTdHlsZXMsIGdldEljb25TaXplfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGRpc2FibGVkLFxuXHRcdFx0aWNvbixcblx0XHRcdGxhYmVsLFxuXHRcdFx0dG9vbHRpcENvbnRlbnQsXG5cdFx0XHRzaXplLFxuXHRcdFx0dmFyaWFudCxcblx0XHRcdGN1c3RvbVN0eWxlLFxuXHRcdFx0Y2hpbGRyZW4sXG5cdFx0XHRvbkNsaWNrXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBhZGRpdGlvbmFsU3R5bGUgPSBhZGRTdHlsZXMoY3VzdG9tU3R5bGUpO1xuXG5cdFx0Y29uc3QgX2hhc0ljb24gPSBpY29uLmxlbmd0aD4wO1xuXHRcdGNvbnN0IF9oYXNMYWJlbCA9IGxhYmVsLmxlbmd0aD4wO1xuXHRcdGNvbnN0IF9oYXNPbmx5SWNvbiA9IF9oYXNJY29uICYmICFfaGFzTGFiZWw7XG5cdFx0Y29uc3QgX3Nsb3RFbGVtZW50ID0gIV9oYXNMYWJlbCAmJiAhX2hhc0ljb24gJiYgY2hpbGRyZW4hPT11bmRlZmluZWQ7XG5cdFx0Y29uc3QgX2ljb25TaXplID0gZ2V0SWNvblNpemUoY3VzdG9tU3R5bGUsIGljb24sIHNpemUpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDw+XG5cdFx0XHRcdDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG5cdFx0XHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0XHRcdFx0YGJ1dHRvbi0ke3NpemV9YCxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJzd2YtYnV0dG9uXCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFwiYWN0aXZlXCI6ICFkaXNhYmxlZCxcblx0XHRcdFx0XHRcdFx0XCJoYXMtaWNvblwiOiBfaGFzSWNvblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0b25DbGljaz17b25DbGlja31cblx0XHRcdFx0XHRkaXNhYmxlZCA9IHtkaXNhYmxlZH1cblx0XHRcdFx0XHR0aXRsZSA9IHt0b29sdGlwQ29udGVudH1cblx0XHRcdFx0XHRzdHlsZT17YWRkaXRpb25hbFN0eWxlfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0XHR7X2hhc0ljb24gJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XCJidXR0b24taWNvblwiOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XCJsYWJlbC1idXR0b24taWNvblwiOiAhX2hhc09ubHlJY29uXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQpfT5cblx0XHRcdFx0XHRcdFx0XHQ8SWNvblxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17aWNvbn1cblx0XHRcdFx0XHRcdFx0XHRcdGN1c3RvbVNpemU9e19pY29uU2l6ZX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0eyBfaGFzTGFiZWwgJiYgPGxhYmVsPntsYWJlbH08L2xhYmVsPiB9XG5cdFx0XHRcdFx0XHR7X3Nsb3RFbGVtZW50ICYmIGNoaWxkcmVufVxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC8+XG5cdFx0KVxuXHR9XG59XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG5cdGRpc2FibGVkOiBmYWxzZSxcblx0aWNvbjogXCJcIixcblx0bGFiZWw6IFwiXCIsXG5cdHRvb2x0aXBDb250ZW50OiBcIlwiLFxuXHRzaXplOiAnbWQnLFxuXHR2YXJpYW50OiAgXCJzZWNvbmRhcnlcIixcblx0Y3VzdG9tU3R5bGU6IG51bGxcbn1cblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcblx0ZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxuXHRpY29uOiBwcm9wVHlwZXMuc3RyaW5nLFxuXHRsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcblx0dG9vbHRpcENvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXG5cdHNpemU6IHByb3BUeXBlcy5vbmVPZihbJ3NtJywgJ21kJywgJ2xnJ10pLFxuXHR2YXJpYW50OiAgcHJvcFR5cGVzLm9uZU9mKFtcInByaW1hcnlcIiAsIFwicHJpbWFyeS1wb3NpdGl2ZVwiICwgXCJwcmltYXJ5LW5lZ2F0aXZlXCIgLCBcInNlY29uZGFyeVwiICxcblx0XHRcdFx0XCJzZWNvbmRhcnktcG9zaXRpdmVcIiAsIFwic2Vjb25kYXJ5LW5lZ2F0aXZlXCIgLCBcInRlcnRpYXJ5XCIgLCBcImluaGVyaXRcIiwgXCJcIl0pLFxuXHRjdXN0b21TdHlsZTogcHJvcFR5cGVzLm9iamVjdCxcblx0b25DbGljazogcHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iXX0=