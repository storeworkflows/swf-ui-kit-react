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
            }), _slotElement && children]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwiZGlzYWJsZWQiLCJpY29uIiwibGFiZWwiLCJ0b29sdGlwQ29udGVudCIsInNpemUiLCJ2YXJpYW50IiwiY3VzdG9tU3R5bGUiLCJkaXNwYXRjaCIsImNoaWxkcmVuIiwiYWRkaXRpb25hbFN0eWxlIiwiX2hhc0ljb24iLCJsZW5ndGgiLCJfaGFzTGFiZWwiLCJfaGFzT25seUljb24iLCJfc2xvdEVsZW1lbnQiLCJ1bmRlZmluZWQiLCJfaWNvblNpemUiLCJzdHlsZXMiLCJTV0ZfQlVUVE9OIiwiQ0xJQ0tFRCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJTUEsTSxXQURMLGtDOzs7Ozs7Ozs7Ozs7O1dBR0Esa0JBQVM7QUFBQSx3QkFZSixLQUFLQyxLQVpEO0FBQUEsVUFHUEMsUUFITyxlQUdQQSxRQUhPO0FBQUEsVUFJUEMsSUFKTyxlQUlQQSxJQUpPO0FBQUEsVUFLUEMsS0FMTyxlQUtQQSxLQUxPO0FBQUEsVUFNUEMsY0FOTyxlQU1QQSxjQU5PO0FBQUEsVUFPUEMsSUFQTyxlQU9QQSxJQVBPO0FBQUEsVUFRUEMsT0FSTyxlQVFQQSxPQVJPO0FBQUEsVUFTUEMsV0FUTyxlQVNQQSxXQVRPO0FBQUEsVUFVUEMsUUFWTyxlQVVQQSxRQVZPO0FBQUEsVUFXUEMsUUFYTyxlQVdQQSxRQVhPO0FBY1IsVUFBTUMsZUFBZSxHQUFHLHNCQUFVSCxXQUFWLENBQXhCOztBQUVBLFVBQU1JLFFBQVEsR0FBR1QsSUFBSSxDQUFDVSxNQUFMLEdBQVksQ0FBN0I7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHVixLQUFLLENBQUNTLE1BQU4sR0FBYSxDQUEvQjs7QUFDQSxVQUFNRSxZQUFZLEdBQUdILFFBQVEsSUFBSSxDQUFDRSxTQUFsQzs7QUFDQSxVQUFNRSxZQUFZLEdBQUcsQ0FBQ0YsU0FBRCxJQUFjLENBQUNGLFFBQWYsSUFBMkJGLFFBQVEsS0FBR08sU0FBM0Q7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHLHdCQUFZVixXQUFaLEVBQXlCTCxJQUF6QixFQUErQkcsSUFBL0IsQ0FBbEI7O0FBRUEsMEJBQ0M7QUFBQSxnQ0FDQztBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0JhO0FBQXhCLFVBREQsZUFFQztBQUNDLFVBQUEsU0FBUyxFQUFFLDRCQUNWWixPQURVLG1CQUVBRCxJQUZBLEdBR1Y7QUFDQywwQkFBYyxJQURmO0FBRUMsc0JBQVUsQ0FBQ0osUUFGWjtBQUdDLHdCQUFZVTtBQUhiLFdBSFUsQ0FEWjtBQVVDLFVBQUEsT0FBTyxFQUFFO0FBQUEsbUJBQU1ILFFBQVEsQ0FBQ1csc0JBQVdDLE9BQVosQ0FBZDtBQUFBLFdBVlY7QUFXQyxVQUFBLFFBQVEsRUFBSW5CLFFBWGI7QUFZQyxVQUFBLEtBQUssRUFBSUcsY0FaVjtBQWFDLFVBQUEsS0FBSyxFQUFFTSxlQWJSO0FBQUEsaUNBZUM7QUFBSyxZQUFBLFNBQVMsRUFBQyxTQUFmO0FBQUEsdUJBQ0VDLFFBQVEsaUJBQ1I7QUFBSyxjQUFBLFNBQVMsRUFBRSw0QkFDZjtBQUNDLCtCQUFlLElBRGhCO0FBRUMscUNBQXFCLENBQUNHO0FBRnZCLGVBRGUsQ0FBaEI7QUFBQSxxQ0FNQyxxQkFBQyxnQkFBRDtBQUNDLGdCQUFBLElBQUksRUFBRVosSUFEUDtBQUVDLGdCQUFBLFVBQVUsRUFBRWU7QUFGYjtBQU5ELGNBRkYsRUFlR0osU0FBUyxpQkFBSTtBQUFBLHdCQUFRVjtBQUFSLGNBZmhCLEVBZ0JFWSxZQUFZLElBQUlOLFFBaEJsQjtBQUFBO0FBZkQsVUFGRDtBQUFBLFFBREQ7QUF3Q0E7Ozs7RUFoRW1CWSxLQUFLLENBQUNDLFM7QUFtRTNCdkIsTUFBTSxDQUFDd0IsWUFBUCxHQUFzQjtBQUNyQnRCLEVBQUFBLFFBQVEsRUFBRSxLQURXO0FBRXJCQyxFQUFBQSxJQUFJLEVBQUUsRUFGZTtBQUdyQkMsRUFBQUEsS0FBSyxFQUFFLEVBSGM7QUFJckJDLEVBQUFBLGNBQWMsRUFBRSxFQUpLO0FBS3JCQyxFQUFBQSxJQUFJLEVBQUUsSUFMZTtBQU1yQkMsRUFBQUEsT0FBTyxFQUFHLFdBTlc7QUFPckJDLEVBQUFBLFdBQVcsRUFBRTtBQVBRLENBQXRCO0FBVUFSLE1BQU0sQ0FBQ3lCLFNBQVAsR0FBbUI7QUFDbEJ2QixFQUFBQSxRQUFRLEVBQUV1QixzQkFBVUMsSUFERjtBQUVsQnZCLEVBQUFBLElBQUksRUFBRXNCLHNCQUFVRSxNQUZFO0FBR2xCdkIsRUFBQUEsS0FBSyxFQUFFcUIsc0JBQVVFLE1BSEM7QUFJbEJ0QixFQUFBQSxjQUFjLEVBQUVvQixzQkFBVUUsTUFKUjtBQUtsQnJCLEVBQUFBLElBQUksRUFBRW1CLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLENBQWhCLENBTFk7QUFNbEJyQixFQUFBQSxPQUFPLEVBQUdrQixzQkFBVUcsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBYSxrQkFBYixFQUFrQyxrQkFBbEMsRUFBdUQsV0FBdkQsRUFDdkIsb0JBRHVCLEVBQ0Esb0JBREEsRUFDdUIsVUFEdkIsRUFDb0MsU0FEcEMsRUFDK0MsRUFEL0MsQ0FBaEIsQ0FOUTtBQVFsQnBCLEVBQUFBLFdBQVcsRUFBRWlCLHNCQUFVSTtBQVJMLENBQW5CO2VBV2U3QixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xyXG5pbXBvcnQge1NXRl9CVVRUT059IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge2FkZFN0eWxlcywgZ2V0SWNvblNpemV9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gXCIuLi91dGlscy9kaXNwYXRjaERlY29yYXRvclwiO1xyXG5cclxuXHJcbkBkaXNwYXRjaCgpXHJcbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHJcblx0XHRjb25zdCB7XHJcblx0XHRcdGRpc2FibGVkLFxyXG5cdFx0XHRpY29uLFxyXG5cdFx0XHRsYWJlbCxcclxuXHRcdFx0dG9vbHRpcENvbnRlbnQsXHJcblx0XHRcdHNpemUsXHJcblx0XHRcdHZhcmlhbnQsXHJcblx0XHRcdGN1c3RvbVN0eWxlLFxyXG5cdFx0XHRkaXNwYXRjaCxcclxuXHRcdFx0Y2hpbGRyZW5cclxuXHRcdH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdGNvbnN0IGFkZGl0aW9uYWxTdHlsZSA9IGFkZFN0eWxlcyhjdXN0b21TdHlsZSk7XHJcblxyXG5cdFx0Y29uc3QgX2hhc0ljb24gPSBpY29uLmxlbmd0aD4wO1xyXG5cdFx0Y29uc3QgX2hhc0xhYmVsID0gbGFiZWwubGVuZ3RoPjA7XHJcblx0XHRjb25zdCBfaGFzT25seUljb24gPSBfaGFzSWNvbiAmJiAhX2hhc0xhYmVsO1xyXG5cdFx0Y29uc3QgX3Nsb3RFbGVtZW50ID0gIV9oYXNMYWJlbCAmJiAhX2hhc0ljb24gJiYgY2hpbGRyZW4hPT11bmRlZmluZWQ7XHJcblx0XHRjb25zdCBfaWNvblNpemUgPSBnZXRJY29uU2l6ZShjdXN0b21TdHlsZSwgaWNvbiwgc2l6ZSk7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxyXG5cdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuXHRcdFx0XHRcdFx0dmFyaWFudCxcclxuXHRcdFx0XHRcdFx0YGJ1dHRvbi0ke3NpemV9YCxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwic3dmLWJ1dHRvblwiOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFwiYWN0aXZlXCI6ICFkaXNhYmxlZCxcclxuXHRcdFx0XHRcdFx0XHRcImhhcy1pY29uXCI6IF9oYXNJY29uXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChTV0ZfQlVUVE9OLkNMSUNLRUQpfVxyXG5cdFx0XHRcdFx0ZGlzYWJsZWQgPSB7ZGlzYWJsZWR9XHJcblx0XHRcdFx0XHR0aXRsZSA9IHt0b29sdGlwQ29udGVudH1cclxuXHRcdFx0XHRcdHN0eWxlPXthZGRpdGlvbmFsU3R5bGV9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdHtfaGFzSWNvbiAmJlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcImJ1dHRvbi1pY29uXCI6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwibGFiZWwtYnV0dG9uLWljb25cIjogIV9oYXNPbmx5SWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17aWNvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VzdG9tU2l6ZT17X2ljb25TaXplfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0eyBfaGFzTGFiZWwgJiYgPGxhYmVsPntsYWJlbH08L2xhYmVsPiB9XHJcblx0XHRcdFx0XHRcdHtfc2xvdEVsZW1lbnQgJiYgY2hpbGRyZW59XHJcblxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDwvPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcclxuXHRkaXNhYmxlZDogZmFsc2UsXHJcblx0aWNvbjogXCJcIixcclxuXHRsYWJlbDogXCJcIixcclxuXHR0b29sdGlwQ29udGVudDogXCJcIixcclxuXHRzaXplOiAnbWQnLFxyXG5cdHZhcmlhbnQ6ICBcInNlY29uZGFyeVwiLFxyXG5cdGN1c3RvbVN0eWxlOiBudWxsXHJcbn1cclxuXHJcbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcblx0ZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxyXG5cdGljb246IHByb3BUeXBlcy5zdHJpbmcsXHJcblx0bGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcblx0dG9vbHRpcENvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcblx0c2l6ZTogcHJvcFR5cGVzLm9uZU9mKFsnc20nLCAnbWQnLCAnbGcnXSksXHJcblx0dmFyaWFudDogIHByb3BUeXBlcy5vbmVPZihbXCJwcmltYXJ5XCIgLCBcInByaW1hcnktcG9zaXRpdmVcIiAsIFwicHJpbWFyeS1uZWdhdGl2ZVwiICwgXCJzZWNvbmRhcnlcIiAsXHJcblx0XHRcdFx0XCJzZWNvbmRhcnktcG9zaXRpdmVcIiAsIFwic2Vjb25kYXJ5LW5lZ2F0aXZlXCIgLCBcInRlcnRpYXJ5XCIgLCBcImluaGVyaXRcIiwgXCJcIl0pLFxyXG5cdGN1c3RvbVN0eWxlOiBwcm9wVHlwZXMub2JqZWN0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxyXG4iXX0=