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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwic3RhdGUiLCJpY29uQ29sb3IiLCJTV0ZfQlVUVE9OIiwiVEVYVF9DT0xPUiIsImZvY3VzZWQiLCJkaXNhYmxlZCIsImljb24iLCJsYWJlbCIsInRvb2x0aXBDb250ZW50Iiwic2l6ZSIsInZhcmlhbnQiLCJjdXN0b21TdHlsZSIsImFkZGl0aW9uYWxTdHlsZSIsIl9oYXNJY29uIiwibGVuZ3RoIiwiX2hhc0xhYmVsIiwiX2hhc09ubHlJY29uIiwiX2VtcHR5RWxlbWVudCIsIl9pY29uU2l6ZSIsInN0eWxlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFJTUEsTTs7Ozs7QUFDTCxrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNaQyxNQUFBQSxTQUFTLEVBQUVDLHNCQUFXQyxVQURWO0FBRVpDLE1BQUFBLE9BQU8sRUFBRTtBQUZHLEtBQWI7QUFGa0I7QUFNbEI7Ozs7V0FFRCxrQkFBUztBQUFBLHdCQUVxQixLQUFLSixLQUYxQjtBQUFBLFVBRURDLFNBRkMsZUFFREEsU0FGQztBQUFBLFVBRVVHLE9BRlYsZUFFVUEsT0FGVjtBQUFBLHdCQVdKLEtBQUtMLEtBWEQ7QUFBQSxVQUlQTSxRQUpPLGVBSVBBLFFBSk87QUFBQSxVQUtQQyxJQUxPLGVBS1BBLElBTE87QUFBQSxVQU1QQyxLQU5PLGVBTVBBLEtBTk87QUFBQSxVQU9QQyxjQVBPLGVBT1BBLGNBUE87QUFBQSxVQVFQQyxJQVJPLGVBUVBBLElBUk87QUFBQSxVQVNQQyxPQVRPLGVBU1BBLE9BVE87QUFBQSxVQVVQQyxXQVZPLGVBVVBBLFdBVk87QUFhUixVQUFNQyxlQUFlLEdBQUcsc0JBQVVELFdBQVYsQ0FBeEI7O0FBRUEsVUFBTUUsUUFBUSxHQUFHUCxJQUFJLENBQUNRLE1BQUwsR0FBWSxDQUE3Qjs7QUFDQSxVQUFNQyxTQUFTLEdBQUdSLEtBQUssQ0FBQ08sTUFBTixHQUFhLENBQS9COztBQUNBLFVBQU1FLFlBQVksR0FBR0gsUUFBUSxJQUFJLENBQUNFLFNBQWxDOztBQUNBLFVBQU1FLGFBQWEsR0FBRyxDQUFDRixTQUFELElBQWMsQ0FBQ0YsUUFBckM7O0FBQ0EsVUFBTUssU0FBUyxHQUFHLHdCQUFZUCxXQUFaLEVBQXlCTCxJQUF6QixFQUErQkcsSUFBL0IsQ0FBbEIsQ0FuQlEsQ0FxQlI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsMEJBQ0M7QUFBQSxnQ0FDQztBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0JVO0FBQXhCLFVBREQsZUFFQztBQUNDLFVBQUEsU0FBUyxFQUFFLDRCQUNWVCxPQURVLG1CQUVBRCxJQUZBLEdBR1Y7QUFDQywwQkFBYyxJQURmO0FBRUMsc0JBQVUsQ0FBQ0osUUFGWjtBQUdDLHdCQUFZUTtBQUhiLFdBSFUsQ0FEWixDQVVDO0FBVkQ7QUFXQyxVQUFBLFFBQVEsRUFBSVIsUUFYYjtBQVlDLFVBQUEsS0FBSyxFQUFJRyxjQVpWO0FBYUMsVUFBQSxLQUFLLEVBQUVJLGVBYlIsQ0FjQztBQUNBO0FBQ0E7QUFDQTtBQWpCRDtBQUFBLGlDQW1CQztBQUFLLFlBQUEsU0FBUyxFQUFDLFNBQWY7QUFBQSx1QkFDRUMsUUFBUSxpQkFDUixxQkFBQyxnQkFBRDtBQUNDLGNBQUEsU0FBUyxFQUFFLDRCQUNWO0FBQ0MsK0JBQWUsSUFEaEI7QUFFQyxxQ0FBcUIsQ0FBQ0c7QUFGdkIsZUFEVSxDQURaO0FBT0MsY0FBQSxJQUFJLEVBQUVWLElBUFAsQ0FRQztBQVJEO0FBU0MsY0FBQSxVQUFVLEVBQUVZO0FBVGIsY0FGRixFQWVHSCxTQUFTLGlCQUFJO0FBQUEsd0JBQVFSO0FBQVIsY0FmaEIsRUFpQkVVLGFBQWEsaUJBQUksZ0NBakJuQjtBQUFBO0FBbkJELFVBRkQ7QUFBQSxRQUREO0FBNENBOzs7O0VBbEdtQkcsS0FBSyxDQUFDQyxTOztBQXFHM0J2QixNQUFNLENBQUN3QixZQUFQLEdBQXNCO0FBQ3JCakIsRUFBQUEsUUFBUSxFQUFFLEtBRFc7QUFFckJDLEVBQUFBLElBQUksRUFBRSxFQUZlO0FBR3JCQyxFQUFBQSxLQUFLLEVBQUUsRUFIYztBQUlyQkMsRUFBQUEsY0FBYyxFQUFFLEVBSks7QUFLckJDLEVBQUFBLElBQUksRUFBRSxJQUxlO0FBTXJCQyxFQUFBQSxPQUFPLEVBQUcsV0FOVztBQU9yQkMsRUFBQUEsV0FBVyxFQUFFO0FBUFEsQ0FBdEI7QUFVQWIsTUFBTSxDQUFDeUIsU0FBUCxHQUFtQjtBQUNsQmxCLEVBQUFBLFFBQVEsRUFBRWtCLHNCQUFVQyxJQURGO0FBRWxCbEIsRUFBQUEsSUFBSSxFQUFFaUIsc0JBQVVFLE1BRkU7QUFHbEJsQixFQUFBQSxLQUFLLEVBQUVnQixzQkFBVUUsTUFIQztBQUlsQmpCLEVBQUFBLGNBQWMsRUFBRWUsc0JBQVVFLE1BSlI7QUFLbEJoQixFQUFBQSxJQUFJLEVBQUVjLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLENBQWhCLENBTFk7QUFNbEJoQixFQUFBQSxPQUFPLEVBQUdhLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFhLGtCQUFiLEVBQWtDLGtCQUFsQyxFQUF1RCxXQUF2RCxFQUN2QixvQkFEdUIsRUFDQSxvQkFEQSxFQUN1QixVQUR2QixFQUNvQyxTQURwQyxFQUMrQyxFQUQvQyxDQUFoQixDQU5RO0FBUWxCZixFQUFBQSxXQUFXLEVBQUVZLHNCQUFVSTtBQVJMLENBQW5CO2VBV2U3QixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IHtTV0ZfQlVUVE9OfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHthZGRTdHlsZXMsIGdldEljb25TaXplfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcblxyXG4vL2ltcG9ydCBcIi4uL3gtbW9iaS1zd2YtaWNvblwiXHJcblxyXG5cclxuXHJcbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdGljb25Db2xvcjogU1dGX0JVVFRPTi5URVhUX0NPTE9SLFxyXG5cdFx0XHRmb2N1c2VkOiBmYWxzZVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHJcblx0XHRjb25zdCB7aWNvbkNvbG9yLCBmb2N1c2VkfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRjb25zdCB7XHJcblx0XHRcdGRpc2FibGVkLFxyXG5cdFx0XHRpY29uLFxyXG5cdFx0XHRsYWJlbCxcclxuXHRcdFx0dG9vbHRpcENvbnRlbnQsXHJcblx0XHRcdHNpemUsXHJcblx0XHRcdHZhcmlhbnQsXHJcblx0XHRcdGN1c3RvbVN0eWxlXHJcblx0XHR9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRjb25zdCBhZGRpdGlvbmFsU3R5bGUgPSBhZGRTdHlsZXMoY3VzdG9tU3R5bGUpO1xyXG5cclxuXHRcdGNvbnN0IF9oYXNJY29uID0gaWNvbi5sZW5ndGg+MDtcclxuXHRcdGNvbnN0IF9oYXNMYWJlbCA9IGxhYmVsLmxlbmd0aD4wO1xyXG5cdFx0Y29uc3QgX2hhc09ubHlJY29uID0gX2hhc0ljb24gJiYgIV9oYXNMYWJlbDtcclxuXHRcdGNvbnN0IF9lbXB0eUVsZW1lbnQgPSAhX2hhc0xhYmVsICYmICFfaGFzSWNvbjtcclxuXHRcdGNvbnN0IF9pY29uU2l6ZSA9IGdldEljb25TaXplKGN1c3RvbVN0eWxlLCBpY29uLCBzaXplKTtcclxuXHJcblx0XHQvLyBjb25zdCBmb2N1cyA9ICgpID0+IHtcclxuXHRcdC8vIFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHQvLyBcdFx0Zm9jdXNlZDogdHJ1ZSxcclxuXHRcdC8vIFx0XHRpY29uQ29sb3I6IFNXRl9CVVRUT04uQUNUSVZFX1RFWFRfQ09MT1JcclxuXHRcdC8vIFx0fSlcclxuXHRcdC8vIH07XHJcblx0XHQvL1xyXG5cdFx0Ly8gY29uc3QgYmx1ciA9ICgpID0+IHtcclxuXHRcdC8vIFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHQvLyBcdFx0Zm9jdXNlZDogZmFsc2UsXHJcblx0XHQvLyBcdFx0aWNvbkNvbG9yOiBTV0ZfQlVUVE9OLlRFWFRfQ09MT1JcclxuXHRcdC8vIFx0fSlcclxuXHRcdC8vIH1cclxuXHRcdC8vXHJcblx0XHQvLyBjb25zdCBtb3VzZU92ZXIgPSAoKSA9PiB7XHJcblx0XHQvLyBcdGlmKCFmb2N1c2VkKVxyXG5cdFx0Ly8gXHRcdHRoaXMuc2V0U3RhdGUoe2ljb25Db2xvcjogU1dGX0JVVFRPTi5IT1ZFUl9URVhUX0NPTE9SfSlcclxuXHRcdC8vIH1cclxuXHRcdC8vXHJcblx0XHQvLyBjb25zdCBtb3VzZU91dCA9ICgpID0+IHtcclxuXHRcdC8vIFx0aWYoIWZvY3VzZWQpXHJcblx0XHQvLyBcdFx0dGhpcy5zZXRTdGF0ZSh7aWNvbkNvbG9yOiBTV0ZfQlVUVE9OLlRFWFRfQ09MT1J9KVxyXG5cdFx0Ly8gfVxyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cclxuXHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcblx0XHRcdFx0XHRcdHZhcmlhbnQsXHJcblx0XHRcdFx0XHRcdGBidXR0b24tJHtzaXplfWAsXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcInN3Zi1idXR0b25cIjogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcImFjdGl2ZVwiOiAhZGlzYWJsZWQsXHJcblx0XHRcdFx0XHRcdFx0XCJoYXMtaWNvblwiOiBfaGFzSWNvblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0Ly9vbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChTV0ZfQlVUVE9OLkNMSUNLRUQpfVxyXG5cdFx0XHRcdFx0ZGlzYWJsZWQgPSB7ZGlzYWJsZWR9XHJcblx0XHRcdFx0XHR0aXRsZSA9IHt0b29sdGlwQ29udGVudH1cclxuXHRcdFx0XHRcdHN0eWxlPXthZGRpdGlvbmFsU3R5bGV9XHJcblx0XHRcdFx0XHQvLyBvbkZvY3VzPXsoKSA9PiBmb2N1cygpfVxyXG5cdFx0XHRcdFx0Ly8gb25CbHVyPXsoKSA9PiBibHVyKCl9XHJcblx0XHRcdFx0XHQvLyBvbk1vdXNlT3Zlcj17KCkgPT4gbW91c2VPdmVyKCl9XHJcblx0XHRcdFx0XHQvLyBvbk1vdXNlT3V0PXsoKSA9PiBtb3VzZU91dCgpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHR7X2hhc0ljb24gJiZcclxuXHRcdFx0XHRcdFx0XHQ8SWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XCJidXR0b24taWNvblwiOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwibGFiZWwtYnV0dG9uLWljb25cIjogIV9oYXNPbmx5SWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0aWNvbj17aWNvbn1cclxuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbG9yPXtpY29uQ29sb3J9XHJcblx0XHRcdFx0XHRcdFx0XHRjdXN0b21TaXplPXtfaWNvblNpemV9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0eyBfaGFzTGFiZWwgJiYgPGxhYmVsPntsYWJlbH08L2xhYmVsPiB9XHJcblxyXG5cdFx0XHRcdFx0XHR7X2VtcHR5RWxlbWVudCAmJiA8c2xvdC8+IH1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XHJcblx0ZGlzYWJsZWQ6IGZhbHNlLFxyXG5cdGljb246IFwiXCIsXHJcblx0bGFiZWw6IFwiXCIsXHJcblx0dG9vbHRpcENvbnRlbnQ6IFwiXCIsXHJcblx0c2l6ZTogJ21kJyxcclxuXHR2YXJpYW50OiAgXCJzZWNvbmRhcnlcIixcclxuXHRjdXN0b21TdHlsZTogbnVsbFxyXG59XHJcblxyXG5CdXR0b24ucHJvcFR5cGVzID0ge1xyXG5cdGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuXHRpY29uOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdHRvb2x0aXBDb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdHNpemU6IHByb3BUeXBlcy5vbmVPZihbJ3NtJywgJ21kJywgJ2xnJ10pLFxyXG5cdHZhcmlhbnQ6ICBwcm9wVHlwZXMub25lT2YoW1wicHJpbWFyeVwiICwgXCJwcmltYXJ5LXBvc2l0aXZlXCIgLCBcInByaW1hcnktbmVnYXRpdmVcIiAsIFwic2Vjb25kYXJ5XCIgLFxyXG5cdFx0XHRcdFwic2Vjb25kYXJ5LXBvc2l0aXZlXCIgLCBcInNlY29uZGFyeS1uZWdhdGl2ZVwiICwgXCJ0ZXJ0aWFyeVwiICwgXCJpbmhlcml0XCIsIFwiXCJdKSxcclxuXHRjdXN0b21TdHlsZTogcHJvcFR5cGVzLm9iamVjdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cclxuIl19