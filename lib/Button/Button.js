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
      var _this2 = this;

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

      var _iconSize = (0, _utils.getIconSize)(customStyle, icon, size);

      console.log("icon size", _iconSize);
      console.log("icon color", this.state.iconColor);

      var focus = function focus() {
        _this2.setState({
          focused: true,
          iconColor: _constants.SWF_BUTTON.ACTIVE_TEXT_COLOR
        });
      };

      var blur = function blur() {
        _this2.setState({
          focused: false,
          iconColor: _constants.SWF_BUTTON.TEXT_COLOR
        });
      };

      var mouseOver = function mouseOver() {
        if (!focused) _this2.setState({
          iconColor: _constants.SWF_BUTTON.HOVER_TEXT_COLOR
        });
      };

      var mouseOut = function mouseOut() {
        if (!focused) _this2.setState({
          iconColor: _constants.SWF_BUTTON.TEXT_COLOR
        });
      };

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
          style: additionalStyle,
          onFocus: function onFocus() {
            return focus();
          },
          onBlur: function onBlur() {
            return blur();
          },
          onMouseOver: function onMouseOver() {
            return mouseOver();
          },
          onMouseOut: function onMouseOut() {
            return mouseOut();
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "content",
            children: [_hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwic3RhdGUiLCJpY29uQ29sb3IiLCJTV0ZfQlVUVE9OIiwiVEVYVF9DT0xPUiIsImZvY3VzZWQiLCJkaXNhYmxlZCIsImljb24iLCJsYWJlbCIsInRvb2x0aXBDb250ZW50Iiwic2l6ZSIsInZhcmlhbnQiLCJjdXN0b21TdHlsZSIsImFkZGl0aW9uYWxTdHlsZSIsIl9oYXNJY29uIiwibGVuZ3RoIiwiX2hhc0xhYmVsIiwiX2hhc09ubHlJY29uIiwiX2VtcHR5RWxlbWVudCIsIl9pY29uU2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJmb2N1cyIsInNldFN0YXRlIiwiQUNUSVZFX1RFWFRfQ09MT1IiLCJibHVyIiwibW91c2VPdmVyIiwiSE9WRVJfVEVYVF9DT0xPUiIsIm1vdXNlT3V0Iiwic3R5bGVzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib25lT2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUlNQSxNOzs7OztBQUNMLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1pDLE1BQUFBLFNBQVMsRUFBRUMsc0JBQVdDLFVBRFY7QUFFWkMsTUFBQUEsT0FBTyxFQUFFO0FBRkcsS0FBYjtBQUZrQjtBQU1sQjs7OztXQUVELGtCQUFTO0FBQUE7O0FBQUEsd0JBRXFCLEtBQUtKLEtBRjFCO0FBQUEsVUFFREMsU0FGQyxlQUVEQSxTQUZDO0FBQUEsVUFFVUcsT0FGVixlQUVVQSxPQUZWO0FBQUEsd0JBV0osS0FBS0wsS0FYRDtBQUFBLFVBSVBNLFFBSk8sZUFJUEEsUUFKTztB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RUFyR21CWSxLQUFLLENBQUNDLFM7O0FBd0czQmhDLE1BQU0sQ0FBQ2lDLFlBQVAsR0FBc0I7QUFDckIxQixFQUFBQSxRQUFRLEVBQUUsS0FEVztBQUVyQkMsRUFBQUEsSUFBSSxFQUFFLEVBRmU7QUFHckJDLEVBQUFBLEtBQUssRUFBRSxFQUhjO0FBSXJCQyxFQUFBQSxjQUFjLEVBQUUsRUFKSztBQUtyQkMsRUFBQUEsSUFBSSxFQUFFLElBTGU7QUFNckJDLEVBQUFBLE9BQU8sRUFBRyxXQU5XO0FBT3JCQyxFQUFBQSxXQUFXLEVBQUU7QUFQUSxDQUF0QjtBQVVBYixNQUFNLENBQUNrQyxTQUFQLEdBQW1CO0FBQ2xCM0IsRUFBQUEsUUFBUSxFQUFFMkIsc0JBQVVDLElBREY7QUFFbEIzQixFQUFBQSxJQUFJLEVBQUUwQixzQkFBVUUsTUFGRTtBQUdsQjNCLEVBQUFBLEtBQUssRUFBRXlCLHNCQUFVRSxNQUhDO0FBSWxCMUIsRUFBQUEsY0FBYyxFQUFFd0Isc0JBQVVFLE1BSlI7QUFLbEJ6QixFQUFBQSxJQUFJLEVBQUV1QixzQkFBVUcsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixDQUFoQixDQUxZO0FBTWxCekIsRUFBQUEsT0FBTyxFQUFHc0Isc0JBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQWEsa0JBQWIsRUFBa0Msa0JBQWxDLEVBQXVELFdBQXZELEVBQ3ZCLG9CQUR1QixFQUNBLG9CQURBLEVBQ3VCLFVBRHZCLEVBQ29DLFNBRHBDLEVBQytDLEVBRC9DLENBQWhCLENBTlE7QUFRbEJ4QixFQUFBQSxXQUFXLEVBQUVxQixzQkFBVUk7QUFSTCxDQUFuQjtlQVdldEMsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IHtTV0ZfQlVUVE9OfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7YWRkU3R5bGVzLCBnZXRJY29uU2l6ZX0gZnJvbSBcIi4vdXRpbHNcIjtcblxuLy9pbXBvcnQgXCIuLi94LW1vYmktc3dmLWljb25cIlxuXG5cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGljb25Db2xvcjogU1dGX0JVVFRPTi5URVhUX0NPTE9SLFxuXHRcdFx0Zm9jdXNlZDogZmFsc2Vcblx0XHR9XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge2ljb25Db2xvciwgZm9jdXNlZH0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IHtcblx0XHRcdGRpc2FibGVkLFxuXHRcdFx0aWNvbixcblx0XHRcdGxhYmVsLFxuXHRcdFx0dG9vbHRpcENvbnRlbnQsXG5cdFx0XHRzaXplLFxuXHRcdFx0dmFyaWFudCxcblx0XHRcdGN1c3RvbVN0eWxlXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBhZGRpdGlvbmFsU3R5bGUgPSBhZGRTdHlsZXMoY3VzdG9tU3R5bGUpO1xuXG5cdFx0Y29uc3QgX2hhc0ljb24gPSBpY29uLmxlbmd0aD4wO1xuXHRcdGNvbnN0IF9oYXNMYWJlbCA9IGxhYmVsLmxlbmd0aD4wO1xuXHRcdGNvbnN0IF9oYXNPbmx5SWNvbiA9IF9oYXNJY29uICYmICFfaGFzTGFiZWw7XG5cdFx0Y29uc3QgX2VtcHR5RWxlbWVudCA9ICFfaGFzTGFiZWwgJiYgIV9oYXNJY29uO1xuXHRcdGNvbnN0IF9pY29uU2l6ZSA9IGdldEljb25TaXplKGN1c3RvbVN0eWxlLCBpY29uLCBzaXplKTtcblx0XHRjb25zb2xlLmxvZyhcImljb24gc2l6ZVwiLCBfaWNvblNpemUpO1xuXHRcdGNvbnNvbGUubG9nKFwiaWNvbiBjb2xvclwiLCB0aGlzLnN0YXRlLmljb25Db2xvcik7XG5cblx0XHRjb25zdCBmb2N1cyA9ICgpID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRmb2N1c2VkOiB0cnVlLFxuXHRcdFx0XHRpY29uQ29sb3I6IFNXRl9CVVRUT04uQUNUSVZFX1RFWFRfQ09MT1Jcblx0XHRcdH0pXG5cdFx0fTtcblxuXHRcdGNvbnN0IGJsdXIgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0Zm9jdXNlZDogZmFsc2UsXG5cdFx0XHRcdGljb25Db2xvcjogU1dGX0JVVFRPTi5URVhUX0NPTE9SXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdGNvbnN0IG1vdXNlT3ZlciA9ICgpID0+IHtcblx0XHRcdGlmKCFmb2N1c2VkKVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtpY29uQ29sb3I6IFNXRl9CVVRUT04uSE9WRVJfVEVYVF9DT0xPUn0pXG5cdFx0fVxuXG5cdFx0Y29uc3QgbW91c2VPdXQgPSAoKSA9PiB7XG5cdFx0XHRpZighZm9jdXNlZClcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7aWNvbkNvbG9yOiBTV0ZfQlVUVE9OLlRFWFRfQ09MT1J9KVxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuXHRcdFx0XHRcdFx0dmFyaWFudCxcblx0XHRcdFx0XHRcdGBidXR0b24tJHtzaXplfWAsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwic3dmLWJ1dHRvblwiOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcImFjdGl2ZVwiOiAhZGlzYWJsZWQsXG5cdFx0XHRcdFx0XHRcdFwiaGFzLWljb25cIjogX2hhc0ljb25cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdC8vb25DbGljaz17KCkgPT4gZGlzcGF0Y2goU1dGX0JVVFRPTi5DTElDS0VEKX1cblx0XHRcdFx0XHRkaXNhYmxlZCA9IHtkaXNhYmxlZH1cblx0XHRcdFx0XHR0aXRsZSA9IHt0b29sdGlwQ29udGVudH1cblx0XHRcdFx0XHRzdHlsZT17YWRkaXRpb25hbFN0eWxlfVxuXHRcdFx0XHRcdG9uRm9jdXM9eygpID0+IGZvY3VzKCl9XG5cdFx0XHRcdFx0b25CbHVyPXsoKSA9PiBibHVyKCl9XG5cdFx0XHRcdFx0b25Nb3VzZU92ZXI9eygpID0+IG1vdXNlT3ZlcigpfVxuXHRcdFx0XHRcdG9uTW91c2VPdXQ9eygpID0+IG1vdXNlT3V0KCl9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdHsvKntfaGFzSWNvbiAmJiovfVxuXHRcdFx0XHRcdFx0ey8qXHQ8eC1tb2JpLXN3Zi1pY29uKi99XG5cdFx0XHRcdFx0XHR7LypcdFx0Y2xhc3NOYW1lPXtjbGFzc25hbWVzKCovfVxuXHRcdFx0XHRcdFx0ey8qXHRcdFx0eyovfVxuXHRcdFx0XHRcdFx0ey8qXHRcdFx0XHRcImJ1dHRvbi1pY29uXCI6IHRydWUsKi99XG5cdFx0XHRcdFx0XHR7LypcdFx0XHRcdFwibGFiZWwtYnV0dG9uLWljb25cIjogIV9oYXNPbmx5SWNvbiovfVxuXHRcdFx0XHRcdFx0ey8qXHRcdFx0fSovfVxuXHRcdFx0XHRcdFx0ey8qXHRcdCl9Ki99XG5cdFx0XHRcdFx0XHR7LypcdFx0c2xvdD1cImRlZmF1bHRTbG90XCIqL31cblx0XHRcdFx0XHRcdHsvKlx0XHRpY29uPXtpY29ufSovfVxuXHRcdFx0XHRcdFx0ey8qXHRcdGNvbG9yPXtpY29uQ29sb3J9Ki99XG5cdFx0XHRcdFx0XHR7LypcdFx0Y3VzdG9tU2l6ZT17X2ljb25TaXplfSovfVxuXHRcdFx0XHRcdFx0ey8qXHQvPiovfVxuXHRcdFx0XHRcdFx0ey8qfSovfVxuXG5cdFx0XHRcdFx0XHR7IF9oYXNMYWJlbCAmJiA8bGFiZWw+e2xhYmVsfTwvbGFiZWw+IH1cblxuXHRcdFx0XHRcdFx0e19lbXB0eUVsZW1lbnQgJiYgPHNsb3QvPiB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC8+XG5cdFx0KVxuXHR9XG59XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG5cdGRpc2FibGVkOiBmYWxzZSxcblx0aWNvbjogXCJcIixcblx0bGFiZWw6IFwiXCIsXG5cdHRvb2x0aXBDb250ZW50OiBcIlwiLFxuXHRzaXplOiAnbWQnLFxuXHR2YXJpYW50OiAgXCJzZWNvbmRhcnlcIixcblx0Y3VzdG9tU3R5bGU6IG51bGxcbn1cblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcblx0ZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxuXHRpY29uOiBwcm9wVHlwZXMuc3RyaW5nLFxuXHRsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcblx0dG9vbHRpcENvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXG5cdHNpemU6IHByb3BUeXBlcy5vbmVPZihbJ3NtJywgJ21kJywgJ2xnJ10pLFxuXHR2YXJpYW50OiAgcHJvcFR5cGVzLm9uZU9mKFtcInByaW1hcnlcIiAsIFwicHJpbWFyeS1wb3NpdGl2ZVwiICwgXCJwcmltYXJ5LW5lZ2F0aXZlXCIgLCBcInNlY29uZGFyeVwiICxcblx0XHRcdFx0XCJzZWNvbmRhcnktcG9zaXRpdmVcIiAsIFwic2Vjb25kYXJ5LW5lZ2F0aXZlXCIgLCBcInRlcnRpYXJ5XCIgLCBcImluaGVyaXRcIiwgXCJcIl0pLFxuXHRjdXN0b21TdHlsZTogcHJvcFR5cGVzLm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiJdfQ==