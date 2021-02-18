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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwiZGlzYWJsZWQiLCJpY29uIiwibGFiZWwiLCJ0b29sdGlwQ29udGVudCIsInNpemUiLCJ2YXJpYW50IiwiY3VzdG9tU3R5bGUiLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJhZGRpdGlvbmFsU3R5bGUiLCJfaGFzSWNvbiIsImxlbmd0aCIsIl9oYXNMYWJlbCIsIl9oYXNPbmx5SWNvbiIsIl9zbG90RWxlbWVudCIsInVuZGVmaW5lZCIsIl9pY29uU2l6ZSIsInN0eWxlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwib2JqZWN0IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7Ozs7Ozs7Ozs7O1dBRUwsa0JBQVM7QUFBQSx3QkFZSixLQUFLQyxLQVpEO0FBQUEsVUFHUEMsUUFITyxlQUdQQSxRQUhPO0FBQUEsVUFJUEMsSUFKTyxlQUlQQSxJQUpPO0FBQUEsVUFLUEMsS0FMTyxlQUtQQSxLQUxPO0FBQUEsVUFNUEMsY0FOTyxlQU1QQSxjQU5PO0FBQUEsVUFPUEMsSUFQTyxlQU9QQSxJQVBPO0FBQUEsVUFRUEMsT0FSTyxlQVFQQSxPQVJPO0FBQUEsVUFTUEMsV0FUTyxlQVNQQSxXQVRPO0FBQUEsVUFVUEMsUUFWTyxlQVVQQSxRQVZPO0FBQUEsVUFXUEMsT0FYTyxlQVdQQSxPQVhPO0FBY1IsVUFBTUMsZUFBZSxHQUFHLHNCQUFVSCxXQUFWLENBQXhCOztBQUVBLFVBQU1JLFFBQVEsR0FBR1QsSUFBSSxDQUFDVSxNQUFMLEdBQVksQ0FBN0I7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHVixLQUFLLENBQUNTLE1BQU4sR0FBYSxDQUEvQjs7QUFDQSxVQUFNRSxZQUFZLEdBQUdILFFBQVEsSUFBSSxDQUFDRSxTQUFsQzs7QUFDQSxVQUFNRSxZQUFZLEdBQUcsQ0FBQ0YsU0FBRCxJQUFjLENBQUNGLFFBQWYsSUFBMkJILFFBQVEsS0FBR1EsU0FBM0Q7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHLHdCQUFZVixXQUFaLEVBQXlCTCxJQUF6QixFQUErQkcsSUFBL0IsQ0FBbEI7O0FBRUEsMEJBQ0M7QUFBQSxnQ0FDQztBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0JhO0FBQXhCLFVBREQsZUFFQztBQUNDLFVBQUEsU0FBUyxFQUFFLDRCQUNWWixPQURVLG1CQUVBRCxJQUZBLEdBR1Y7QUFDQywwQkFBYyxJQURmO0FBRUMsc0JBQVUsQ0FBQ0osUUFGWjtBQUdDLHdCQUFZVTtBQUhiLFdBSFUsQ0FEWjtBQVVDLFVBQUEsT0FBTyxFQUFFRixPQVZWO0FBV0MsVUFBQSxRQUFRLEVBQUlSLFFBWGI7QUFZQyxVQUFBLEtBQUssRUFBSUcsY0FaVjtBQWFDLFVBQUEsS0FBSyxFQUFFTSxlQWJSO0FBQUEsaUNBZUM7QUFBSyxZQUFBLFNBQVMsRUFBQyxTQUFmO0FBQUEsdUJBQ0VDLFFBQVEsaUJBQ1I7QUFBSyxjQUFBLFNBQVMsRUFBRSw0QkFDZjtBQUNDLCtCQUFlLElBRGhCO0FBRUMscUNBQXFCLENBQUNHO0FBRnZCLGVBRGUsQ0FBaEI7QUFBQSxxQ0FNQyxxQkFBQyxnQkFBRDtBQUNDLGdCQUFBLElBQUksRUFBRVosSUFEUDtBQUVDLGdCQUFBLFVBQVUsRUFBRWU7QUFGYjtBQU5ELGNBRkYsRUFlR0osU0FBUyxpQkFBSTtBQUFBLHdCQUFRVjtBQUFSLGNBZmhCLEVBZ0JFWSxZQUFZLElBQUlQLFFBaEJsQjtBQUFBO0FBZkQsVUFGRDtBQUFBLFFBREQ7QUF3Q0E7Ozs7RUFoRW1CVyxLQUFLLENBQUNDLFM7O0FBbUUzQnJCLE1BQU0sQ0FBQ3NCLFlBQVAsR0FBc0I7QUFDckJwQixFQUFBQSxRQUFRLEVBQUUsS0FEVztBQUVyQkMsRUFBQUEsSUFBSSxFQUFFLEVBRmU7QUFHckJDLEVBQUFBLEtBQUssRUFBRSxFQUhjO0FBSXJCQyxFQUFBQSxjQUFjLEVBQUUsRUFKSztBQUtyQkMsRUFBQUEsSUFBSSxFQUFFLElBTGU7QUFNckJDLEVBQUFBLE9BQU8sRUFBRyxXQU5XO0FBT3JCQyxFQUFBQSxXQUFXLEVBQUU7QUFQUSxDQUF0QjtBQVVBUixNQUFNLENBQUN1QixTQUFQLEdBQW1CO0FBQ2xCckIsRUFBQUEsUUFBUSxFQUFFcUIsc0JBQVVDLElBREY7QUFFbEJyQixFQUFBQSxJQUFJLEVBQUVvQixzQkFBVUUsTUFGRTtBQUdsQnJCLEVBQUFBLEtBQUssRUFBRW1CLHNCQUFVRSxNQUhDO0FBSWxCcEIsRUFBQUEsY0FBYyxFQUFFa0Isc0JBQVVFLE1BSlI7QUFLbEJuQixFQUFBQSxJQUFJLEVBQUVpQixzQkFBVUcsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixDQUFoQixDQUxZO0FBTWxCbkIsRUFBQUEsT0FBTyxFQUFHZ0Isc0JBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQWEsa0JBQWIsRUFBa0Msa0JBQWxDLEVBQXVELFdBQXZELEVBQ3ZCLG9CQUR1QixFQUNBLG9CQURBLEVBQ3VCLFVBRHZCLEVBQ29DLFNBRHBDLEVBQytDLEVBRC9DLENBQWhCLENBTlE7QUFRbEJsQixFQUFBQSxXQUFXLEVBQUVlLHNCQUFVSSxNQVJMO0FBU2xCakIsRUFBQUEsT0FBTyxFQUFFYSxzQkFBVUs7QUFURCxDQUFuQjtlQVllNUIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IHthZGRTdHlsZXMsIGdldEljb25TaXplfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcblx0cmVuZGVyKCkge1xyXG5cclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0ZGlzYWJsZWQsXHJcblx0XHRcdGljb24sXHJcblx0XHRcdGxhYmVsLFxyXG5cdFx0XHR0b29sdGlwQ29udGVudCxcclxuXHRcdFx0c2l6ZSxcclxuXHRcdFx0dmFyaWFudCxcclxuXHRcdFx0Y3VzdG9tU3R5bGUsXHJcblx0XHRcdGNoaWxkcmVuLFxyXG5cdFx0XHRvbkNsaWNrXHJcblx0XHR9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRjb25zdCBhZGRpdGlvbmFsU3R5bGUgPSBhZGRTdHlsZXMoY3VzdG9tU3R5bGUpO1xyXG5cclxuXHRcdGNvbnN0IF9oYXNJY29uID0gaWNvbi5sZW5ndGg+MDtcclxuXHRcdGNvbnN0IF9oYXNMYWJlbCA9IGxhYmVsLmxlbmd0aD4wO1xyXG5cdFx0Y29uc3QgX2hhc09ubHlJY29uID0gX2hhc0ljb24gJiYgIV9oYXNMYWJlbDtcclxuXHRcdGNvbnN0IF9zbG90RWxlbWVudCA9ICFfaGFzTGFiZWwgJiYgIV9oYXNJY29uICYmIGNoaWxkcmVuIT09dW5kZWZpbmVkO1xyXG5cdFx0Y29uc3QgX2ljb25TaXplID0gZ2V0SWNvblNpemUoY3VzdG9tU3R5bGUsIGljb24sIHNpemUpO1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cclxuXHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcblx0XHRcdFx0XHRcdHZhcmlhbnQsXHJcblx0XHRcdFx0XHRcdGBidXR0b24tJHtzaXplfWAsXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcInN3Zi1idXR0b25cIjogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcImFjdGl2ZVwiOiAhZGlzYWJsZWQsXHJcblx0XHRcdFx0XHRcdFx0XCJoYXMtaWNvblwiOiBfaGFzSWNvblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0b25DbGljaz17b25DbGlja31cclxuXHRcdFx0XHRcdGRpc2FibGVkID0ge2Rpc2FibGVkfVxyXG5cdFx0XHRcdFx0dGl0bGUgPSB7dG9vbHRpcENvbnRlbnR9XHJcblx0XHRcdFx0XHRzdHlsZT17YWRkaXRpb25hbFN0eWxlfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHR7X2hhc0ljb24gJiZcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJidXR0b24taWNvblwiOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcImxhYmVsLWJ1dHRvbi1pY29uXCI6ICFfaGFzT25seUljb25cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdGljb249e2ljb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1c3RvbVNpemU9e19pY29uU2l6ZX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHsgX2hhc0xhYmVsICYmIDxsYWJlbD57bGFiZWx9PC9sYWJlbD4gfVxyXG5cdFx0XHRcdFx0XHR7X3Nsb3RFbGVtZW50ICYmIGNoaWxkcmVufVxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XHJcblx0ZGlzYWJsZWQ6IGZhbHNlLFxyXG5cdGljb246IFwiXCIsXHJcblx0bGFiZWw6IFwiXCIsXHJcblx0dG9vbHRpcENvbnRlbnQ6IFwiXCIsXHJcblx0c2l6ZTogJ21kJyxcclxuXHR2YXJpYW50OiAgXCJzZWNvbmRhcnlcIixcclxuXHRjdXN0b21TdHlsZTogbnVsbFxyXG59XHJcblxyXG5CdXR0b24ucHJvcFR5cGVzID0ge1xyXG5cdGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuXHRpY29uOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdHRvb2x0aXBDb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdHNpemU6IHByb3BUeXBlcy5vbmVPZihbJ3NtJywgJ21kJywgJ2xnJ10pLFxyXG5cdHZhcmlhbnQ6ICBwcm9wVHlwZXMub25lT2YoW1wicHJpbWFyeVwiICwgXCJwcmltYXJ5LXBvc2l0aXZlXCIgLCBcInByaW1hcnktbmVnYXRpdmVcIiAsIFwic2Vjb25kYXJ5XCIgLFxyXG5cdFx0XHRcdFwic2Vjb25kYXJ5LXBvc2l0aXZlXCIgLCBcInNlY29uZGFyeS1uZWdhdGl2ZVwiICwgXCJ0ZXJ0aWFyeVwiICwgXCJpbmhlcml0XCIsIFwiXCJdKSxcclxuXHRjdXN0b21TdHlsZTogcHJvcFR5cGVzLm9iamVjdCxcclxuXHRvbkNsaWNrOiBwcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cclxuIl19