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

var _constants = require("./constants");

var _utils = require("./utils");

var _dispatchDecorator = require("../utils/dispatchDecorator");

var _jsxRuntime = require("react/jsx-runtime");

var _dec, _class;

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

var Button = (_dec = (0, _dispatchDecorator.dispatch)(), _dec(_class = /*#__PURE__*/function (_React$Component) {
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
          dispatch = _this$props.dispatch;
      var additionalStyle = (0, _utils.addStyles)(customStyle);

      var _hasIcon = icon.length > 0;

      var _hasLabel = label.length > 0;

      var _hasOnlyIcon = _hasIcon && !_hasLabel;

      var _emptyElement = !_hasLabel && !_hasIcon;

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
          onClick: function onClick() {
            return dispatch(_constants.SWF_BUTTON.CLICKED);
          },
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
            }), _emptyElement && /*#__PURE__*/(0, _jsxRuntime.jsx)("slot", {})]
          })
        })]
      });
    }
  }]);

  return Button;
}(React.Component)) || _class);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwiZGlzYWJsZWQiLCJpY29uIiwibGFiZWwiLCJ0b29sdGlwQ29udGVudCIsInNpemUiLCJ2YXJpYW50IiwiY3VzdG9tU3R5bGUiLCJkaXNwYXRjaCIsImFkZGl0aW9uYWxTdHlsZSIsIl9oYXNJY29uIiwibGVuZ3RoIiwiX2hhc0xhYmVsIiwiX2hhc09ubHlJY29uIiwiX2VtcHR5RWxlbWVudCIsIl9pY29uU2l6ZSIsInN0eWxlcyIsIlNXRl9CVVRUT04iLCJDTElDS0VEIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib25lT2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlNQSxNLFdBREwsa0M7Ozs7Ozs7Ozs7Ozs7V0FHQSxrQkFBUztBQUFBLHdCQVdKLEtBQUtDLEtBWEQ7QUFBQSxVQUdQQyxRQUhPLGVBR1BBLFFBSE87QUFBQSxVQUlQQyxJQUpPLGVBSVBBLElBSk87QUFBQSxVQUtQQyxLQUxPLGVBS1BBLEtBTE87QUFBQSxVQU1QQyxjQU5PLGVBTVBBLGNBTk87QUFBQSxVQU9QQyxJQVBPLGVBT1BBLElBUE87QUFBQSxVQVFQQyxPQVJPLGVBUVBBLE9BUk87QUFBQSxVQVNQQyxXQVRPLGVBU1BBLFdBVE87QUFBQSxVQVVQQyxRQVZPLGVBVVBBLFFBVk87QUFhUixVQUFNQyxlQUFlLEdBQUcsc0JBQVVGLFdBQVYsQ0FBeEI7O0FBRUEsVUFBTUcsUUFBUSxHQUFHUixJQUFJLENBQUNTLE1BQUwsR0FBWSxDQUE3Qjs7QUFDQSxVQUFNQyxTQUFTLEdBQUdULEtBQUssQ0FBQ1EsTUFBTixHQUFhLENBQS9COztBQUNBLFVBQU1FLFlBQVksR0FBR0gsUUFBUSxJQUFJLENBQUNFLFNBQWxDOztBQUNBLFVBQU1FLGFBQWEsR0FBRyxDQUFDRixTQUFELElBQWMsQ0FBQ0YsUUFBckM7O0FBQ0EsVUFBTUssU0FBUyxHQUFHLHdCQUFZUixXQUFaLEVBQXlCTCxJQUF6QixFQUErQkcsSUFBL0IsQ0FBbEI7O0FBRUEsMEJBQ0M7QUFBQSxnQ0FDQztBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0JXO0FBQXhCLFVBREQsZUFFQztBQUNDLFVBQUEsU0FBUyxFQUFFLDRCQUNWVixPQURVLG1CQUVBRCxJQUZBLEdBR1Y7QUFDQywwQkFBYyxJQURmO0FBRUMsc0JBQVUsQ0FBQ0osUUFGWjtBQUdDLHdCQUFZUztBQUhiLFdBSFUsQ0FEWjtBQVVDLFVBQUEsT0FBTyxFQUFFO0FBQUEsbUJBQU1GLFFBQVEsQ0FBQ1Msc0JBQVdDLE9BQVosQ0FBZDtBQUFBLFdBVlY7QUFXQyxVQUFBLFFBQVEsRUFBSWpCLFFBWGI7QUFZQyxVQUFBLEtBQUssRUFBSUcsY0FaVjtBQWFDLFVBQUEsS0FBSyxFQUFFSyxlQWJSO0FBQUEsaUNBZUM7QUFBSyxZQUFBLFNBQVMsRUFBQyxTQUFmO0FBQUEsdUJBQ0VDLFFBQVEsaUJBQ1I7QUFBSyxjQUFBLFNBQVMsRUFBRSw0QkFDZjtBQUNDLCtCQUFlLElBRGhCO0FBRUMscUNBQXFCLENBQUNHO0FBRnZCLGVBRGUsQ0FBaEI7QUFBQSxxQ0FNQyxxQkFBQyxnQkFBRDtBQUNDLGdCQUFBLElBQUksRUFBRVgsSUFEUDtBQUVDLGdCQUFBLFVBQVUsRUFBRWE7QUFGYjtBQU5ELGNBRkYsRUFlR0gsU0FBUyxpQkFBSTtBQUFBLHdCQUFRVDtBQUFSLGNBZmhCLEVBZ0JFVyxhQUFhLGlCQUFJLGdDQWhCbkI7QUFBQTtBQWZELFVBRkQ7QUFBQSxRQUREO0FBd0NBOzs7O0VBL0RtQkssS0FBSyxDQUFDQyxTO0FBa0UzQnJCLE1BQU0sQ0FBQ3NCLFlBQVAsR0FBc0I7QUFDckJwQixFQUFBQSxRQUFRLEVBQUUsS0FEVztBQUVyQkMsRUFBQUEsSUFBSSxFQUFFLEVBRmU7QUFHckJDLEVBQUFBLEtBQUssRUFBRSxFQUhjO0FBSXJCQyxFQUFBQSxjQUFjLEVBQUUsRUFKSztBQUtyQkMsRUFBQUEsSUFBSSxFQUFFLElBTGU7QUFNckJDLEVBQUFBLE9BQU8sRUFBRyxXQU5XO0FBT3JCQyxFQUFBQSxXQUFXLEVBQUU7QUFQUSxDQUF0QjtBQVVBUixNQUFNLENBQUN1QixTQUFQLEdBQW1CO0FBQ2xCckIsRUFBQUEsUUFBUSxFQUFFcUIsc0JBQVVDLElBREY7QUFFbEJyQixFQUFBQSxJQUFJLEVBQUVvQixzQkFBVUUsTUFGRTtBQUdsQnJCLEVBQUFBLEtBQUssRUFBRW1CLHNCQUFVRSxNQUhDO0FBSWxCcEIsRUFBQUEsY0FBYyxFQUFFa0Isc0JBQVVFLE1BSlI7QUFLbEJuQixFQUFBQSxJQUFJLEVBQUVpQixzQkFBVUcsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixDQUFoQixDQUxZO0FBTWxCbkIsRUFBQUEsT0FBTyxFQUFHZ0Isc0JBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQWEsa0JBQWIsRUFBa0Msa0JBQWxDLEVBQXVELFdBQXZELEVBQ3ZCLG9CQUR1QixFQUNBLG9CQURBLEVBQ3VCLFVBRHZCLEVBQ29DLFNBRHBDLEVBQytDLEVBRC9DLENBQWhCLENBTlE7QUFRbEJsQixFQUFBQSxXQUFXLEVBQUVlLHNCQUFVSTtBQVJMLENBQW5CO2VBV2UzQixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQge1NXRl9CVVRUT059IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHthZGRTdHlsZXMsIGdldEljb25TaXplfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSBcIi4uL3V0aWxzL2Rpc3BhdGNoRGVjb3JhdG9yXCI7XG5cblxuQGRpc3BhdGNoKClcbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGlzYWJsZWQsXG5cdFx0XHRpY29uLFxuXHRcdFx0bGFiZWwsXG5cdFx0XHR0b29sdGlwQ29udGVudCxcblx0XHRcdHNpemUsXG5cdFx0XHR2YXJpYW50LFxuXHRcdFx0Y3VzdG9tU3R5bGUsXG5cdFx0XHRkaXNwYXRjaFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgYWRkaXRpb25hbFN0eWxlID0gYWRkU3R5bGVzKGN1c3RvbVN0eWxlKTtcblxuXHRcdGNvbnN0IF9oYXNJY29uID0gaWNvbi5sZW5ndGg+MDtcblx0XHRjb25zdCBfaGFzTGFiZWwgPSBsYWJlbC5sZW5ndGg+MDtcblx0XHRjb25zdCBfaGFzT25seUljb24gPSBfaGFzSWNvbiAmJiAhX2hhc0xhYmVsO1xuXHRcdGNvbnN0IF9lbXB0eUVsZW1lbnQgPSAhX2hhc0xhYmVsICYmICFfaGFzSWNvbjtcblx0XHRjb25zdCBfaWNvblNpemUgPSBnZXRJY29uU2l6ZShjdXN0b21TdHlsZSwgaWNvbiwgc2l6ZSk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcblx0XHRcdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHRcdFx0XHRgYnV0dG9uLSR7c2l6ZX1gLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInN3Zi1idXR0b25cIjogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XCJhY3RpdmVcIjogIWRpc2FibGVkLFxuXHRcdFx0XHRcdFx0XHRcImhhcy1pY29uXCI6IF9oYXNJY29uXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChTV0ZfQlVUVE9OLkNMSUNLRUQpfVxuXHRcdFx0XHRcdGRpc2FibGVkID0ge2Rpc2FibGVkfVxuXHRcdFx0XHRcdHRpdGxlID0ge3Rvb2x0aXBDb250ZW50fVxuXHRcdFx0XHRcdHN0eWxlPXthZGRpdGlvbmFsU3R5bGV9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdHtfaGFzSWNvbiAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcImJ1dHRvbi1pY29uXCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcImxhYmVsLWJ1dHRvbi1pY29uXCI6ICFfaGFzT25seUljb25cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCl9PlxuXHRcdFx0XHRcdFx0XHRcdDxJY29uXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXtpY29ufVxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VzdG9tU2l6ZT17X2ljb25TaXplfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR7IF9oYXNMYWJlbCAmJiA8bGFiZWw+e2xhYmVsfTwvbGFiZWw+IH1cblx0XHRcdFx0XHRcdHtfZW1wdHlFbGVtZW50ICYmIDxzbG90Lz4gfVxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC8+XG5cdFx0KVxuXHR9XG59XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG5cdGRpc2FibGVkOiBmYWxzZSxcblx0aWNvbjogXCJcIixcblx0bGFiZWw6IFwiXCIsXG5cdHRvb2x0aXBDb250ZW50OiBcIlwiLFxuXHRzaXplOiAnbWQnLFxuXHR2YXJpYW50OiAgXCJzZWNvbmRhcnlcIixcblx0Y3VzdG9tU3R5bGU6IG51bGxcbn1cblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcblx0ZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxuXHRpY29uOiBwcm9wVHlwZXMuc3RyaW5nLFxuXHRsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcblx0dG9vbHRpcENvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXG5cdHNpemU6IHByb3BUeXBlcy5vbmVPZihbJ3NtJywgJ21kJywgJ2xnJ10pLFxuXHR2YXJpYW50OiAgcHJvcFR5cGVzLm9uZU9mKFtcInByaW1hcnlcIiAsIFwicHJpbWFyeS1wb3NpdGl2ZVwiICwgXCJwcmltYXJ5LW5lZ2F0aXZlXCIgLCBcInNlY29uZGFyeVwiICxcblx0XHRcdFx0XCJzZWNvbmRhcnktcG9zaXRpdmVcIiAsIFwic2Vjb25kYXJ5LW5lZ2F0aXZlXCIgLCBcInRlcnRpYXJ5XCIgLCBcImluaGVyaXRcIiwgXCJcIl0pLFxuXHRjdXN0b21TdHlsZTogcHJvcFR5cGVzLm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiJdfQ==