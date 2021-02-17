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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwiZGlzYWJsZWQiLCJpY29uIiwibGFiZWwiLCJ0b29sdGlwQ29udGVudCIsInNpemUiLCJ2YXJpYW50IiwiY3VzdG9tU3R5bGUiLCJkaXNwYXRjaCIsImFkZGl0aW9uYWxTdHlsZSIsIl9oYXNJY29uIiwibGVuZ3RoIiwiX2hhc0xhYmVsIiwiX2hhc09ubHlJY29uIiwiX2VtcHR5RWxlbWVudCIsIl9pY29uU2l6ZSIsInN0eWxlcyIsIlNXRl9CVVRUT04iLCJDTElDS0VEIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib25lT2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlNQSxNLFdBREwsa0M7Ozs7Ozs7Ozs7Ozs7V0FHQSxrQkFBUztBQUFBLHdCQVdKLEtBQUtDLEtBWEQ7QUFBQSxVQUdQQyxRQUhPLGVBR1BBLFFBSE87QUFBQSxVQUlQQyxJQUpPLGVBSVBBLElBSk87QUFBQSxVQUtQQyxLQUxPLGVBS1BBLEtBTE87QUFBQSxVQU1QQyxjQU5PLGVBTVBBLGNBTk87QUFBQSxVQU9QQyxJQVBPLGVBT1BBLElBUE87QUFBQSxVQVFQQyxPQVJPLGVBUVBBLE9BUk87QUFBQSxVQVNQQyxXQVRPLGVBU1BBLFdBVE87QUFBQSxVQVVQQyxRQVZPLGVBVVBBLFFBVk87QUFhUixVQUFNQyxlQUFlLEdBQUcsc0JBQVVGLFdBQVYsQ0FBeEI7O0FBRUEsVUFBTUcsUUFBUSxHQUFHUixJQUFJLENBQUNTLE1BQUwsR0FBWSxDQUE3Qjs7QUFDQSxVQUFNQyxTQUFTLEdBQUdULEtBQUssQ0FBQ1EsTUFBTixHQUFhLENBQS9COztBQUNBLFVBQU1FLFlBQVksR0FBR0gsUUFBUSxJQUFJLENBQUNFLFNBQWxDOztBQUNBLFVBQU1FLGFBQWEsR0FBRyxDQUFDRixTQUFELElBQWMsQ0FBQ0YsUUFBckM7O0FBQ0EsVUFBTUssU0FBUyxHQUFHLHdCQUFZUixXQUFaLEVBQXlCTCxJQUF6QixFQUErQkcsSUFBL0IsQ0FBbEI7O0FBRUEsMEJBQ0M7QUFBQSxnQ0FDQztBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0JXO0FBQXhCLFVBREQsZUFFQztBQUNDLFVBQUEsU0FBUyxFQUFFLDRCQUNWVixPQURVLG1CQUVBRCxJQUZBLEdBR1Y7QUFDQywwQkFBYyxJQURmO0FBRUMsc0JBQVUsQ0FBQ0osUUFGWjtBQUdDLHdCQUFZUztBQUhiLFdBSFUsQ0FEWjtBQVVDLFVBQUEsT0FBTyxFQUFFO0FBQUEsbUJBQU1GLFFBQVEsQ0FBQ1Msc0JBQVdDLE9BQVosQ0FBZDtBQUFBLFdBVlY7QUFXQyxVQUFBLFFBQVEsRUFBSWpCLFFBWGI7QUFZQyxVQUFBLEtBQUssRUFBSUcsY0FaVjtBQWFDLFVBQUEsS0FBSyxFQUFFSyxlQWJSO0FBQUEsaUNBZUM7QUFBSyxZQUFBLFNBQVMsRUFBQyxTQUFmO0FBQUEsdUJBQ0VDLFFBQVEsaUJBQ1I7QUFBSyxjQUFBLFNBQVMsRUFBRSw0QkFDZjtBQUNDLCtCQUFlLElBRGhCO0FBRUMscUNBQXFCLENBQUNHO0FBRnZCLGVBRGUsQ0FBaEI7QUFBQSxxQ0FNQyxxQkFBQyxnQkFBRDtBQUNDLGdCQUFBLElBQUksRUFBRVgsSUFEUDtBQUVDLGdCQUFBLFVBQVUsRUFBRWE7QUFGYjtBQU5ELGNBRkYsRUFlR0gsU0FBUyxpQkFBSTtBQUFBLHdCQUFRVDtBQUFSLGNBZmhCLEVBZ0JFVyxhQUFhLGlCQUFJLGdDQWhCbkI7QUFBQTtBQWZELFVBRkQ7QUFBQSxRQUREO0FBd0NBOzs7O0VBL0RtQkssS0FBSyxDQUFDQyxTO0FBa0UzQnJCLE1BQU0sQ0FBQ3NCLFlBQVAsR0FBc0I7QUFDckJwQixFQUFBQSxRQUFRLEVBQUUsS0FEVztBQUVyQkMsRUFBQUEsSUFBSSxFQUFFLEVBRmU7QUFHckJDLEVBQUFBLEtBQUssRUFBRSxFQUhjO0FBSXJCQyxFQUFBQSxjQUFjLEVBQUUsRUFKSztBQUtyQkMsRUFBQUEsSUFBSSxFQUFFLElBTGU7QUFNckJDLEVBQUFBLE9BQU8sRUFBRyxXQU5XO0FBT3JCQyxFQUFBQSxXQUFXLEVBQUU7QUFQUSxDQUF0QjtBQVVBUixNQUFNLENBQUN1QixTQUFQLEdBQW1CO0FBQ2xCckIsRUFBQUEsUUFBUSxFQUFFcUIsc0JBQVVDLElBREY7QUFFbEJyQixFQUFBQSxJQUFJLEVBQUVvQixzQkFBVUUsTUFGRTtBQUdsQnJCLEVBQUFBLEtBQUssRUFBRW1CLHNCQUFVRSxNQUhDO0FBSWxCcEIsRUFBQUEsY0FBYyxFQUFFa0Isc0JBQVVFLE1BSlI7QUFLbEJuQixFQUFBQSxJQUFJLEVBQUVpQixzQkFBVUcsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixDQUFoQixDQUxZO0FBTWxCbkIsRUFBQUEsT0FBTyxFQUFHZ0Isc0JBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQWEsa0JBQWIsRUFBa0Msa0JBQWxDLEVBQXVELFdBQXZELEVBQ3ZCLG9CQUR1QixFQUNBLG9CQURBLEVBQ3VCLFVBRHZCLEVBQ29DLFNBRHBDLEVBQytDLEVBRC9DLENBQWhCLENBTlE7QUFRbEJsQixFQUFBQSxXQUFXLEVBQUVlLHNCQUFVSTtBQVJMLENBQW5CO2VBV2UzQixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xyXG5pbXBvcnQge1NXRl9CVVRUT059IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge2FkZFN0eWxlcywgZ2V0SWNvblNpemV9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gXCIuLi91dGlscy9kaXNwYXRjaERlY29yYXRvclwiO1xyXG5cclxuXHJcbkBkaXNwYXRjaCgpXHJcbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHJcblx0XHRjb25zdCB7XHJcblx0XHRcdGRpc2FibGVkLFxyXG5cdFx0XHRpY29uLFxyXG5cdFx0XHRsYWJlbCxcclxuXHRcdFx0dG9vbHRpcENvbnRlbnQsXHJcblx0XHRcdHNpemUsXHJcblx0XHRcdHZhcmlhbnQsXHJcblx0XHRcdGN1c3RvbVN0eWxlLFxyXG5cdFx0XHRkaXNwYXRjaFxyXG5cdFx0fSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0Y29uc3QgYWRkaXRpb25hbFN0eWxlID0gYWRkU3R5bGVzKGN1c3RvbVN0eWxlKTtcclxuXHJcblx0XHRjb25zdCBfaGFzSWNvbiA9IGljb24ubGVuZ3RoPjA7XHJcblx0XHRjb25zdCBfaGFzTGFiZWwgPSBsYWJlbC5sZW5ndGg+MDtcclxuXHRcdGNvbnN0IF9oYXNPbmx5SWNvbiA9IF9oYXNJY29uICYmICFfaGFzTGFiZWw7XHJcblx0XHRjb25zdCBfZW1wdHlFbGVtZW50ID0gIV9oYXNMYWJlbCAmJiAhX2hhc0ljb247XHJcblx0XHRjb25zdCBfaWNvblNpemUgPSBnZXRJY29uU2l6ZShjdXN0b21TdHlsZSwgaWNvbiwgc2l6ZSk7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxyXG5cdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuXHRcdFx0XHRcdFx0dmFyaWFudCxcclxuXHRcdFx0XHRcdFx0YGJ1dHRvbi0ke3NpemV9YCxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwic3dmLWJ1dHRvblwiOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFwiYWN0aXZlXCI6ICFkaXNhYmxlZCxcclxuXHRcdFx0XHRcdFx0XHRcImhhcy1pY29uXCI6IF9oYXNJY29uXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChTV0ZfQlVUVE9OLkNMSUNLRUQpfVxyXG5cdFx0XHRcdFx0ZGlzYWJsZWQgPSB7ZGlzYWJsZWR9XHJcblx0XHRcdFx0XHR0aXRsZSA9IHt0b29sdGlwQ29udGVudH1cclxuXHRcdFx0XHRcdHN0eWxlPXthZGRpdGlvbmFsU3R5bGV9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdHtfaGFzSWNvbiAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcImJ1dHRvbi1pY29uXCI6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwibGFiZWwtYnV0dG9uLWljb25cIjogIV9oYXNPbmx5SWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17aWNvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VzdG9tU2l6ZT17X2ljb25TaXplfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0eyBfaGFzTGFiZWwgJiYgPGxhYmVsPntsYWJlbH08L2xhYmVsPiB9XHJcblx0XHRcdFx0XHRcdHtfZW1wdHlFbGVtZW50ICYmIDxzbG90Lz4gfVxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XHJcblx0ZGlzYWJsZWQ6IGZhbHNlLFxyXG5cdGljb246IFwiXCIsXHJcblx0bGFiZWw6IFwiXCIsXHJcblx0dG9vbHRpcENvbnRlbnQ6IFwiXCIsXHJcblx0c2l6ZTogJ21kJyxcclxuXHR2YXJpYW50OiAgXCJzZWNvbmRhcnlcIixcclxuXHRjdXN0b21TdHlsZTogbnVsbFxyXG59XHJcblxyXG5CdXR0b24ucHJvcFR5cGVzID0ge1xyXG5cdGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuXHRpY29uOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdHRvb2x0aXBDb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG5cdHNpemU6IHByb3BUeXBlcy5vbmVPZihbJ3NtJywgJ21kJywgJ2xnJ10pLFxyXG5cdHZhcmlhbnQ6ICBwcm9wVHlwZXMub25lT2YoW1wicHJpbWFyeVwiICwgXCJwcmltYXJ5LXBvc2l0aXZlXCIgLCBcInByaW1hcnktbmVnYXRpdmVcIiAsIFwic2Vjb25kYXJ5XCIgLFxyXG5cdFx0XHRcdFwic2Vjb25kYXJ5LXBvc2l0aXZlXCIgLCBcInNlY29uZGFyeS1uZWdhdGl2ZVwiICwgXCJ0ZXJ0aWFyeVwiICwgXCJpbmhlcml0XCIsIFwiXCJdKSxcclxuXHRjdXN0b21TdHlsZTogcHJvcFR5cGVzLm9iamVjdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cclxuIl19