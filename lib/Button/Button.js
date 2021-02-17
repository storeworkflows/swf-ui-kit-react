"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _constants = require("./constants");

var _utils = require("./utils");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

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

//import "../x-mobi-swf-icon"
var Button = /*#__PURE__*/function (_React$Component) {
  _inherits(Button, _React$Component);

  var _super = _createSuper(Button);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _super.call(this, props);
    _this.state = {
      iconColor: _constants.SWF_BUTTON.TEXT_COLOR,
      focused: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          iconColor = _this$state.iconColor,
          focused = _this$state.focused;
      var _this$props = this.props,
          disabled = _this$props.disabled,
          icon = _this$props.icon,
          label = _this$props.label,
          tooltipContent = _this$props.tooltipContent,
          size = _this$props.size,
          variant = _this$props.variant,
          customStyle = _this$props.customStyle;
      var additionalStyle = (0, _utils.addStyles)(customStyle);

      var _hasIcon = icon.length > 0;

      var _hasLabel = label.length > 0;

      var _hasOnlyIcon = _hasIcon && !_hasLabel;

      var _emptyElement = !_hasLabel && !_hasIcon;

      var _iconSize = (0, _utils.getIconSize)(customStyle, icon, size); // const focus = () => {
      // 	this.setState({
      // 		focused: true,
      // 		iconColor: SWF_BUTTON.ACTIVE_TEXT_COLOR
      // 	})
      // };
      //
      // const blur = () => {
      // 	this.setState({
      // 		focused: false,
      // 		iconColor: SWF_BUTTON.TEXT_COLOR
      // 	})
      // }
      //
      // const mouseOver = () => {
      // 	if(!focused)
      // 		this.setState({iconColor: SWF_BUTTON.HOVER_TEXT_COLOR})
      // }
      //
      // const mouseOut = () => {
      // 	if(!focused)
      // 		this.setState({iconColor: SWF_BUTTON.TEXT_COLOR})
      // }


      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: (0, _classnames["default"])(variant, "button-".concat(size), {
            "swf-button": true,
            "active": !disabled,
            "has-icon": _hasIcon
          }) //onClick={() => dispatch(SWF_BUTTON.CLICKED)}
          ,
          disabled: disabled,
          title: tooltipContent,
          style: additionalStyle // onFocus={() => focus()}
          // onBlur={() => blur()}
          // onMouseOver={() => mouseOver()}
          // onMouseOut={() => mouseOut()}
          ,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "content",
            children: [_hasIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
              className: (0, _classnames["default"])({
                "button-icon": true,
                "label-button-icon": !_hasOnlyIcon
              }),
              icon: icon // color={iconColor}
              ,
              customSize: _iconSize
            }), _hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              children: label
            }), _emptyElement && /*#__PURE__*/(0, _jsxRuntime.jsx)("slot", {})]
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
  customStyle: _propTypes["default"].object
};
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwic3RhdGUiLCJpY29uQ29sb3IiLCJTV0ZfQlVUVE9OIiwiVEVYVF9DT0xPUiIsImZvY3VzZWQiLCJkaXNhYmxlZCIsImljb24iLCJsYWJlbCIsInRvb2x0aXBDb250ZW50Iiwic2l6ZSIsInZhcmlhbnQiLCJjdXN0b21TdHlsZSIsImFkZGl0aW9uYWxTdHlsZSIsIl9oYXNJY29uIiwibGVuZ3RoIiwiX2hhc0xhYmVsIiwiX2hhc09ubHlJY29uIiwiX2VtcHR5RWxlbWVudCIsIl9pY29uU2l6ZSIsInN0eWxlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFJTUEsTTs7Ozs7QUFDTCxrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNaQyxNQUFBQSxTQUFTLEVBQUVDLHNCQUFXQyxVQURWO0FBRVpDLE1BQUFBLE9BQU8sRUFBRTtBQUZHLEtBQWI7QUFGa0I7QUFNbEI7Ozs7V0FFRCxrQkFBUztBQUFBLHdCQUVxQixLQUFLSixLQUYxQjtBQUFBLFVBRURDLFNBRkMsZUFFREEsU0FGQztBQUFBLFVBRVVHLE9BRlYsZUFFVUEsT0FGVjtBQUFBLHdCQVdKLEtBQUtMLEtBWEQ7QUFBQSxVQUlQTSxRQUpPLGVBSVBBLFFBSk87QUFBQSxVQUtQQyxJQUxPLGVBS1BBLElBTE87QUFBQSxVQU1QQyxLQU5PLGVBTVBBLEtBTk87QUFBQSxVQU9QQyxjQVBPLGVBT1BBLGNBUE87QUFBQSxVQVFQQyxJQVJPLGVBUVBBLElB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LEVBQUVZLHNCQUFVSTtBQVJMLENBQW5CO2VBV2U3QixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQge1NXRl9CVVRUT059IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHthZGRTdHlsZXMsIGdldEljb25TaXplfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuXG4vL2ltcG9ydCBcIi4uL3gtbW9iaS1zd2YtaWNvblwiXG5cblxuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aWNvbkNvbG9yOiBTV0ZfQlVUVE9OLlRFWFRfQ09MT1IsXG5cdFx0XHRmb2N1c2VkOiBmYWxzZVxuXHRcdH1cblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7aWNvbkNvbG9yLCBmb2N1c2VkfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGlzYWJsZWQsXG5cdFx0XHRpY29uLFxuXHRcdFx0bGFiZWwsXG5cdFx0XHR0b29sdGlwQ29udGVudCxcblx0XHRcdHNpemUsXG5cdFx0XHR2YXJpYW50LFxuXHRcdFx0Y3VzdG9tU3R5bGVcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IGFkZGl0aW9uYWxTdHlsZSA9IGFkZFN0eWxlcyhjdXN0b21TdHlsZSk7XG5cblx0XHRjb25zdCBfaGFzSWNvbiA9IGljb24ubGVuZ3RoPjA7XG5cdFx0Y29uc3QgX2hhc0xhYmVsID0gbGFiZWwubGVuZ3RoPjA7XG5cdFx0Y29uc3QgX2hhc09ubHlJY29uID0gX2hhc0ljb24gJiYgIV9oYXNMYWJlbDtcblx0XHRjb25zdCBfZW1wdHlFbGVtZW50ID0gIV9oYXNMYWJlbCAmJiAhX2hhc0ljb247XG5cdFx0Y29uc3QgX2ljb25TaXplID0gZ2V0SWNvblNpemUoY3VzdG9tU3R5bGUsIGljb24sIHNpemUpO1xuXG5cdFx0Ly8gY29uc3QgZm9jdXMgPSAoKSA9PiB7XG5cdFx0Ly8gXHR0aGlzLnNldFN0YXRlKHtcblx0XHQvLyBcdFx0Zm9jdXNlZDogdHJ1ZSxcblx0XHQvLyBcdFx0aWNvbkNvbG9yOiBTV0ZfQlVUVE9OLkFDVElWRV9URVhUX0NPTE9SXG5cdFx0Ly8gXHR9KVxuXHRcdC8vIH07XG5cdFx0Ly9cblx0XHQvLyBjb25zdCBibHVyID0gKCkgPT4ge1xuXHRcdC8vIFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0Ly8gXHRcdGZvY3VzZWQ6IGZhbHNlLFxuXHRcdC8vIFx0XHRpY29uQ29sb3I6IFNXRl9CVVRUT04uVEVYVF9DT0xPUlxuXHRcdC8vIFx0fSlcblx0XHQvLyB9XG5cdFx0Ly9cblx0XHQvLyBjb25zdCBtb3VzZU92ZXIgPSAoKSA9PiB7XG5cdFx0Ly8gXHRpZighZm9jdXNlZClcblx0XHQvLyBcdFx0dGhpcy5zZXRTdGF0ZSh7aWNvbkNvbG9yOiBTV0ZfQlVUVE9OLkhPVkVSX1RFWFRfQ09MT1J9KVxuXHRcdC8vIH1cblx0XHQvL1xuXHRcdC8vIGNvbnN0IG1vdXNlT3V0ID0gKCkgPT4ge1xuXHRcdC8vIFx0aWYoIWZvY3VzZWQpXG5cdFx0Ly8gXHRcdHRoaXMuc2V0U3RhdGUoe2ljb25Db2xvcjogU1dGX0JVVFRPTi5URVhUX0NPTE9SfSlcblx0XHQvLyB9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcblx0XHRcdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHRcdFx0XHRgYnV0dG9uLSR7c2l6ZX1gLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInN3Zi1idXR0b25cIjogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XCJhY3RpdmVcIjogIWRpc2FibGVkLFxuXHRcdFx0XHRcdFx0XHRcImhhcy1pY29uXCI6IF9oYXNJY29uXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQvL29uQ2xpY2s9eygpID0+IGRpc3BhdGNoKFNXRl9CVVRUT04uQ0xJQ0tFRCl9XG5cdFx0XHRcdFx0ZGlzYWJsZWQgPSB7ZGlzYWJsZWR9XG5cdFx0XHRcdFx0dGl0bGUgPSB7dG9vbHRpcENvbnRlbnR9XG5cdFx0XHRcdFx0c3R5bGU9e2FkZGl0aW9uYWxTdHlsZX1cblx0XHRcdFx0XHQvLyBvbkZvY3VzPXsoKSA9PiBmb2N1cygpfVxuXHRcdFx0XHRcdC8vIG9uQmx1cj17KCkgPT4gYmx1cigpfVxuXHRcdFx0XHRcdC8vIG9uTW91c2VPdmVyPXsoKSA9PiBtb3VzZU92ZXIoKX1cblx0XHRcdFx0XHQvLyBvbk1vdXNlT3V0PXsoKSA9PiBtb3VzZU91dCgpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0XHR7X2hhc0ljb24gJiZcblx0XHRcdFx0XHRcdFx0PEljb25cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiYnV0dG9uLWljb25cIjogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJsYWJlbC1idXR0b24taWNvblwiOiAhX2hhc09ubHlJY29uXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRpY29uPXtpY29ufVxuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbG9yPXtpY29uQ29sb3J9XG5cdFx0XHRcdFx0XHRcdFx0Y3VzdG9tU2l6ZT17X2ljb25TaXplfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR7IF9oYXNMYWJlbCAmJiA8bGFiZWw+e2xhYmVsfTwvbGFiZWw+IH1cblxuXHRcdFx0XHRcdFx0e19lbXB0eUVsZW1lbnQgJiYgPHNsb3QvPiB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC8+XG5cdFx0KVxuXHR9XG59XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG5cdGRpc2FibGVkOiBmYWxzZSxcblx0aWNvbjogXCJcIixcblx0bGFiZWw6IFwiXCIsXG5cdHRvb2x0aXBDb250ZW50OiBcIlwiLFxuXHRzaXplOiAnbWQnLFxuXHR2YXJpYW50OiAgXCJzZWNvbmRhcnlcIixcblx0Y3VzdG9tU3R5bGU6IG51bGxcbn1cblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcblx0ZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxuXHRpY29uOiBwcm9wVHlwZXMuc3RyaW5nLFxuXHRsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcblx0dG9vbHRpcENvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXG5cdHNpemU6IHByb3BUeXBlcy5vbmVPZihbJ3NtJywgJ21kJywgJ2xnJ10pLFxuXHR2YXJpYW50OiAgcHJvcFR5cGVzLm9uZU9mKFtcInByaW1hcnlcIiAsIFwicHJpbWFyeS1wb3NpdGl2ZVwiICwgXCJwcmltYXJ5LW5lZ2F0aXZlXCIgLCBcInNlY29uZGFyeVwiICxcblx0XHRcdFx0XCJzZWNvbmRhcnktcG9zaXRpdmVcIiAsIFwic2Vjb25kYXJ5LW5lZ2F0aXZlXCIgLCBcInRlcnRpYXJ5XCIgLCBcImluaGVyaXRcIiwgXCJcIl0pLFxuXHRjdXN0b21TdHlsZTogcHJvcFR5cGVzLm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiJdfQ==