"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./Step.scss");

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../../Icon/Icon"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var Step = /*#__PURE__*/function (_React$Component) {
  _inherits(Step, _React$Component);

  var _super = _createSuper(Step);

  function Step(props) {
    _classCallCheck(this, Step);

    return _super.call(this, props);
  }

  _createClass(Step, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          step = _this$props.step,
          iconColor = _this$props.iconColor,
          iconSize = _this$props.iconSize,
          hideLabel = _this$props.hideLabel;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "step-container",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "step-body",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: (0, _classnames2["default"])(_defineProperty({
              'step-circle': true
            }, "--".concat(step.progress), step.progress)),
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "step-icon",
              children: step.icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
                icon: step.icon,
                color: iconColor || 'white',
                size: iconSize,
                customSize: typeof iconSize === 'number' ? iconSize : undefined
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "step-label",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: !hideLabel && step.label
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "step-sublabel",
                children: !hideLabel && step.sublabel
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "step-line --after"
          })]
        })
      });
    }
  }]);

  return Step;
}(_react["default"].Component);

Step.propTypes = {
  step: _propTypes["default"].object,
  iconColor: _propTypes["default"].string,
  iconSize: _propTypes["default"].string,
  hideLabel: _propTypes["default"].bool
};
Step.defaultProps = {
  step: {
    id: '',
    icon: '',
    label: ''
  },
  iconColor: 'white',
  iconSize: 'sm',
  hideLabel: false
};
var _default = Step;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdGVwcGVyL1N0ZXAvU3RlcC5qcyJdLCJuYW1lcyI6WyJTdGVwIiwicHJvcHMiLCJzdGVwIiwiaWNvbkNvbG9yIiwiaWNvblNpemUiLCJoaWRlTGFiZWwiLCJwcm9ncmVzcyIsImljb24iLCJ1bmRlZmluZWQiLCJsYWJlbCIsInN1YmxhYmVsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJzdHJpbmciLCJib29sIiwiZGVmYXVsdFByb3BzIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEk7Ozs7O0FBQ0YsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDVEEsS0FEUztBQUVsQjs7OztXQUVELGtCQUFTO0FBQUEsd0JBQzRDLEtBQUtBLEtBRGpEO0FBQUEsVUFDR0MsSUFESCxlQUNHQSxJQURIO0FBQUEsVUFDU0MsU0FEVCxlQUNTQSxTQURUO0FBQUEsVUFDb0JDLFFBRHBCLGVBQ29CQSxRQURwQjtBQUFBLFVBQzhCQyxTQUQ5QixlQUM4QkEsU0FEOUI7QUFHTCwwQkFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDLGdCQUFmO0FBQUEsK0JBQ0k7QUFBSyxVQUFBLFNBQVMsRUFBQyxXQUFmO0FBQUEsa0NBRUk7QUFDSSxZQUFBLFNBQVMsRUFBRTtBQUNQLDZCQUFlO0FBRFIsMkJBRURILElBQUksQ0FBQ0ksUUFGSixHQUVpQkosSUFBSSxDQUFDSSxRQUZ0QixFQURmO0FBQUEsb0NBTUk7QUFBSyxjQUFBLFNBQVMsRUFBQyxXQUFmO0FBQUEsd0JBQ0tKLElBQUksQ0FBQ0ssSUFBTCxpQkFDRCxxQkFBQyxnQkFBRDtBQUNJLGdCQUFBLElBQUksRUFBRUwsSUFBSSxDQUFDSyxJQURmO0FBRUksZ0JBQUEsS0FBSyxFQUFFSixTQUFTLElBQUksT0FGeEI7QUFHSSxnQkFBQSxJQUFJLEVBQUVDLFFBSFY7QUFJSSxnQkFBQSxVQUFVLEVBQUUsT0FBT0EsUUFBUCxLQUFvQixRQUFwQixHQUErQkEsUUFBL0IsR0FBMENJO0FBSjFEO0FBRkosY0FOSixlQWdCSTtBQUFLLGNBQUEsU0FBUyxFQUFDLFlBQWY7QUFBQSxzQ0FDSTtBQUFBLDBCQUFPLENBQUNILFNBQUQsSUFBY0gsSUFBSSxDQUFDTztBQUExQixnQkFESixlQUVJO0FBQU0sZ0JBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQUEsMEJBQWlDLENBQUNKLFNBQUQsSUFBY0gsSUFBSSxDQUFDUTtBQUFwRCxnQkFGSjtBQUFBLGNBaEJKO0FBQUEsWUFGSixlQXVCSTtBQUFLLFlBQUEsU0FBUyxFQUFDO0FBQWYsWUF2Qko7QUFBQTtBQURKLFFBREo7QUE2Qkg7Ozs7RUFyQ2NDLGtCQUFNQyxTOztBQXdDekJaLElBQUksQ0FBQ2EsU0FBTCxHQUFpQjtBQUNiWCxFQUFBQSxJQUFJLEVBQUVZLHNCQUFVQyxNQURIO0FBRWJaLEVBQUFBLFNBQVMsRUFBRVcsc0JBQVVFLE1BRlI7QUFHYlosRUFBQUEsUUFBUSxFQUFFVSxzQkFBVUUsTUFIUDtBQUliWCxFQUFBQSxTQUFTLEVBQUVTLHNCQUFVRztBQUpSLENBQWpCO0FBT0FqQixJQUFJLENBQUNrQixZQUFMLEdBQW9CO0FBQ2hCaEIsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZpQixJQUFBQSxFQUFFLEVBQUUsRUFERjtBQUVGWixJQUFBQSxJQUFJLEVBQUUsRUFGSjtBQUdGRSxJQUFBQSxLQUFLLEVBQUc7QUFITixHQURVO0FBTWhCTixFQUFBQSxTQUFTLEVBQUUsT0FOSztBQU9oQkMsRUFBQUEsUUFBUSxFQUFFLElBUE07QUFRaEJDLEVBQUFBLFNBQVMsRUFBRTtBQVJLLENBQXBCO2VBV2VMLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vU3RlcC5zY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vSWNvbi9JY29uJztcclxuXHJcbmNsYXNzIFN0ZXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RlcCwgaWNvbkNvbG9yLCBpY29uU2l6ZSwgaGlkZUxhYmVsIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RlcC1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtbGluZSAtLWJlZm9yZVwiLz4qL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RlcC1jaXJjbGUnOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7c3RlcC5wcm9ncmVzc31gXTogc3RlcC5wcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RlcC5pY29uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3N0ZXAuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17aWNvbkNvbG9yIHx8ICd3aGl0ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17aWNvblNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tU2l6ZT17dHlwZW9mIGljb25TaXplID09PSAnbnVtYmVyJyA/IGljb25TaXplIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+eyFoaWRlTGFiZWwgJiYgc3RlcC5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGVwLXN1YmxhYmVsXCI+eyFoaWRlTGFiZWwgJiYgc3RlcC5zdWJsYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1saW5lIC0tYWZ0ZXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5TdGVwLnByb3BUeXBlcyA9IHtcclxuICAgIHN0ZXA6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpY29uQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpY29uU2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGhpZGVMYWJlbDogUHJvcFR5cGVzLmJvb2xcclxufTtcclxuXHJcblN0ZXAuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3RlcDoge1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICBsYWJlbDogICcnXHJcbiAgICB9LFxyXG4gICAgaWNvbkNvbG9yOiAnd2hpdGUnLFxyXG4gICAgaWNvblNpemU6ICdzbScsXHJcbiAgICBoaWRlTGFiZWw6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGVwOyJdfQ==