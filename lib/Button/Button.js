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
          dispatch = _this$props.dispatch,
          children = _this$props.children;
      console.log(this.props.children);
      var additionalStyle = (0, _utils.addStyles)(customStyle);

      var _hasIcon = icon.length > 0;

      var _hasLabel = label.length > 0;

      var _hasOnlyIcon = _hasIcon && !_hasLabel;

      var _slotElement = !_hasLabel && !_hasIcon && children !== undefined;

      var _iconSize = (0, _utils.getIconSize)(customStyle, icon, size);

      console.log("2:", children);
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
            })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwiZGlzYWJsZWQiLCJpY29uIiwibGFiZWwiLCJ0b29sdGlwQ29udGVudCIsInNpemUiLCJ2YXJpYW50IiwiY3VzdG9tU3R5bGUiLCJkaXNwYXRjaCIsImNoaWxkcmVuIiwiY29uc29sZSIsImxvZyIsImFkZGl0aW9uYWxTdHlsZSIsIl9oYXNJY29uIiwibGVuZ3RoIiwiX2hhc0xhYmVsIiwiX2hhc09ubHlJY29uIiwiX3Nsb3RFbGVtZW50IiwidW5kZWZpbmVkIiwiX2ljb25TaXplIiwic3R5bGVzIiwiU1dGX0JVVFRPTiIsIkNMSUNLRUQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJvbmVPZiIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU1BLE0sV0FETCxrQzs7Ozs7Ozs7Ozs7OztXQUdBLGtCQUFTO0FBQUEsd0JBWUosS0FBS0MsS0FaRDtBQUFBLFVBR1BDLFFBSE8sZUFHUEEsUUFITztBQUFBLFVBSVBDLElBSk8sZUFJUEEsSUFKTztBQUFBLFVBS1BDLEtBTE8sZUFLUEEsS0FMTztBQUFBLFVBTVBDLGNBTk8sZUFNUEEsY0FOTztBQUFBLFVBT1BDLElBUE8sZUFPUEEsSUFQTztBQUFBLFVBUVBDLE9BUk8sZUFRUEEsT0FSTztBQUFBLFVBU1BDLFdBVE8sZUFTUEEsV0FUTztBQUFBLFVBVVBDLFFBVk8sZUFVUEEsUUFWTztBQUFBLFVBV1BDLFFBWE8sZUFXUEEsUUFYTztBQWNSQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLWCxLQUFMLENBQVdTLFFBQXZCO0FBRUEsVUFBTUcsZUFBZSxHQUFHLHNCQUFVTCxXQUFWLENBQXhCOztBQUVBLFVBQU1NLFFBQVEsR0FBR1gsSUFBSSxDQUFDWSxNQUFMLEdBQVksQ0FBN0I7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHWixLQUFLLENBQUNXLE1BQU4sR0FBYSxDQUEvQjs7QUFDQSxVQUFNRSxZQUFZLEdBQUdILFFBQVEsSUFBSSxDQUFDRSxTQUFsQzs7QUFDQSxVQUFNRSxZQUFZLEdBQUcsQ0FBQ0YsU0FBRCxJQUFjLENBQUNGLFFBQWYsSUFBMkJKLFFBQVEsS0FBR1MsU0FBM0Q7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHLHdCQUFZWixXQUFaLEVBQXlCTCxJQUF6QixFQUErQkcsSUFBL0IsQ0FBbEI7O0FBRUFLLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRUFBa0JGLFFBQWxCO0FBRUEsMEJBQ0M7QUFBQSxnQ0FDQztBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0JXO0FBQXhCLFVBREQsZUFFQztBQUNDLFVBQUEsU0FBUyxFQUFFLDRCQUNWZCxPQURVLG1CQUVBRCxJQUZBLEdBR1Y7QUFDQywwQkFBYyxJQURmO0FBRUMsc0JBQVUsQ0FBQ0osUUFGWjtBQUdDLHdCQUFZWTtBQUhiLFdBSFUsQ0FEWjtBQVVDLFVBQUEsT0FBTyxFQUFFO0FBQUEsbUJBQU1MLFFBQVEsQ0FBQ2Esc0JBQVdDLE9BQVosQ0FBZDtBQUFBLFdBVlY7QUFXQyxVQUFBLFFBQVEsRUFBSXJCLFFBWGI7QUFZQyxVQUFBLEtBQUssRUFBSUcsY0FaVjtBQWFDLFVBQUEsS0FBSyxFQUFFUSxlQWJSO0FBQUEsaUNBZUM7QUFBSyxZQUFBLFNBQVMsRUFBQyxTQUFmO0FBQUEsdUJBQ0VDLFFBQVEsaUJBQ1I7QUFBSyxjQUFBLFNBQVMsRUFBRSw0QkFDZjtBQUNDLCtCQUFlLElBRGhCO0FBRUMscUNBQXFCLENBQUNHO0FBRnZCLGVBRGUsQ0FBaEI7QUFBQSxxQ0FNQyxxQkFBQyxnQkFBRDtBQUNDLGdCQUFBLElBQUksRUFBRWQsSUFEUDtBQUVDLGdCQUFBLFVBQVUsRUFBRWlCO0FBRmI7QUFORCxjQUZGLEVBZUdKLFNBQVMsaUJBQUk7QUFBQSx3QkFBUVo7QUFBUixjQWZoQjtBQUFBO0FBZkQsVUFGRDtBQUFBLFFBREQ7QUF3Q0E7Ozs7RUFwRW1Cb0IsS0FBSyxDQUFDQyxTO0FBdUUzQnpCLE1BQU0sQ0FBQzBCLFlBQVAsR0FBc0I7QUFDckJ4QixFQUFBQSxRQUFRLEVBQUUsS0FEVztBQUVyQkMsRUFBQUEsSUFBSSxFQUFFLEVBRmU7QUFHckJDLEVBQUFBLEtBQUssRUFBRSxFQUhjO0FBSXJCQyxFQUFBQSxjQUFjLEVBQUUsRUFKSztBQUtyQkMsRUFBQUEsSUFBSSxFQUFFLElBTGU7QUFNckJDLEVBQUFBLE9BQU8sRUFBRyxXQU5XO0FBT3JCQyxFQUFBQSxXQUFXLEVBQUU7QUFQUSxDQUF0QjtBQVVBUixNQUFNLENBQUMyQixTQUFQLEdBQW1CO0FBQ2xCekIsRUFBQUEsUUFBUSxFQUFFeUIsc0JBQVVDLElBREY7QUFFbEJ6QixFQUFBQSxJQUFJLEVBQUV3QixzQkFBVUUsTUFGRTtBQUdsQnpCLEVBQUFBLEtBQUssRUFBRXVCLHNCQUFVRSxNQUhDO0FBSWxCeEIsRUFBQUEsY0FBYyxFQUFFc0Isc0JBQVVFLE1BSlI7QUFLbEJ2QixFQUFBQSxJQUFJLEVBQUVxQixzQkFBVUcsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixDQUFoQixDQUxZO0FBTWxCdkIsRUFBQUEsT0FBTyxFQUFHb0Isc0JBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQWEsa0JBQWIsRUFBa0Msa0JBQWxDLEVBQXVELFdBQXZELEVBQ3ZCLG9CQUR1QixFQUNBLG9CQURBLEVBQ3VCLFVBRHZCLEVBQ29DLFNBRHBDLEVBQytDLEVBRC9DLENBQWhCLENBTlE7QUFRbEJ0QixFQUFBQSxXQUFXLEVBQUVtQixzQkFBVUk7QUFSTCxDQUFuQjtlQVdlL0IsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IHtTV0ZfQlVUVE9OfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7YWRkU3R5bGVzLCBnZXRJY29uU2l6ZX0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gXCIuLi91dGlscy9kaXNwYXRjaERlY29yYXRvclwiO1xuXG5cbkBkaXNwYXRjaCgpXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGRpc2FibGVkLFxuXHRcdFx0aWNvbixcblx0XHRcdGxhYmVsLFxuXHRcdFx0dG9vbHRpcENvbnRlbnQsXG5cdFx0XHRzaXplLFxuXHRcdFx0dmFyaWFudCxcblx0XHRcdGN1c3RvbVN0eWxlLFxuXHRcdFx0ZGlzcGF0Y2gsXG5cdFx0XHRjaGlsZHJlblxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cblx0XHRjb25zdCBhZGRpdGlvbmFsU3R5bGUgPSBhZGRTdHlsZXMoY3VzdG9tU3R5bGUpO1xuXG5cdFx0Y29uc3QgX2hhc0ljb24gPSBpY29uLmxlbmd0aD4wO1xuXHRcdGNvbnN0IF9oYXNMYWJlbCA9IGxhYmVsLmxlbmd0aD4wO1xuXHRcdGNvbnN0IF9oYXNPbmx5SWNvbiA9IF9oYXNJY29uICYmICFfaGFzTGFiZWw7XG5cdFx0Y29uc3QgX3Nsb3RFbGVtZW50ID0gIV9oYXNMYWJlbCAmJiAhX2hhc0ljb24gJiYgY2hpbGRyZW4hPT11bmRlZmluZWQ7XG5cdFx0Y29uc3QgX2ljb25TaXplID0gZ2V0SWNvblNpemUoY3VzdG9tU3R5bGUsIGljb24sIHNpemUpO1xuXG5cdFx0Y29uc29sZS5sb2coXCIyOlwiLCBjaGlsZHJlbik7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcblx0XHRcdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHRcdFx0XHRgYnV0dG9uLSR7c2l6ZX1gLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInN3Zi1idXR0b25cIjogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XCJhY3RpdmVcIjogIWRpc2FibGVkLFxuXHRcdFx0XHRcdFx0XHRcImhhcy1pY29uXCI6IF9oYXNJY29uXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChTV0ZfQlVUVE9OLkNMSUNLRUQpfVxuXHRcdFx0XHRcdGRpc2FibGVkID0ge2Rpc2FibGVkfVxuXHRcdFx0XHRcdHRpdGxlID0ge3Rvb2x0aXBDb250ZW50fVxuXHRcdFx0XHRcdHN0eWxlPXthZGRpdGlvbmFsU3R5bGV9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdHtfaGFzSWNvbiAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcImJ1dHRvbi1pY29uXCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcImxhYmVsLWJ1dHRvbi1pY29uXCI6ICFfaGFzT25seUljb25cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCl9PlxuXHRcdFx0XHRcdFx0XHRcdDxJY29uXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXtpY29ufVxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VzdG9tU2l6ZT17X2ljb25TaXplfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR7IF9oYXNMYWJlbCAmJiA8bGFiZWw+e2xhYmVsfTwvbGFiZWw+IH1cblx0XHRcdFx0XHRcdHsvKntfc2xvdEVsZW1lbnQgJiYgY2hpbGRyZW59Ki99XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8Lz5cblx0XHQpXG5cdH1cbn1cblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcblx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRpY29uOiBcIlwiLFxuXHRsYWJlbDogXCJcIixcblx0dG9vbHRpcENvbnRlbnQ6IFwiXCIsXG5cdHNpemU6ICdtZCcsXG5cdHZhcmlhbnQ6ICBcInNlY29uZGFyeVwiLFxuXHRjdXN0b21TdHlsZTogbnVsbFxufVxuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuXHRkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXG5cdGljb246IHByb3BUeXBlcy5zdHJpbmcsXG5cdGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxuXHR0b29sdGlwQ29udGVudDogcHJvcFR5cGVzLnN0cmluZyxcblx0c2l6ZTogcHJvcFR5cGVzLm9uZU9mKFsnc20nLCAnbWQnLCAnbGcnXSksXG5cdHZhcmlhbnQ6ICBwcm9wVHlwZXMub25lT2YoW1wicHJpbWFyeVwiICwgXCJwcmltYXJ5LXBvc2l0aXZlXCIgLCBcInByaW1hcnktbmVnYXRpdmVcIiAsIFwic2Vjb25kYXJ5XCIgLFxuXHRcdFx0XHRcInNlY29uZGFyeS1wb3NpdGl2ZVwiICwgXCJzZWNvbmRhcnktbmVnYXRpdmVcIiAsIFwidGVydGlhcnlcIiAsIFwiaW5oZXJpdFwiLCBcIlwiXSksXG5cdGN1c3RvbVN0eWxlOiBwcm9wVHlwZXMub2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIl19