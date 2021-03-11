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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "step-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "step-body",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "step-line --before"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classnames2["default"])(_defineProperty({
              'step-circle': true
            }, "--".concat(step.progress), step.progress)),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "step-icon",
              children: step.icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
                icon: step.icon,
                color: iconColor || 'white',
                size: iconSize,
                customSize: typeof iconSize === 'number' ? iconSize : undefined
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "step-line --after"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "step-label",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: !hideLabel && step.label
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "step-sublabel",
            children: !hideLabel && step.sublabel
          })]
        })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdGVwcGVyL1N0ZXAvU3RlcC5qcyJdLCJuYW1lcyI6WyJTdGVwIiwicHJvcHMiLCJzdGVwIiwiaWNvbkNvbG9yIiwiaWNvblNpemUiLCJoaWRlTGFiZWwiLCJwcm9ncmVzcyIsImljb24iLCJ1bmRlZmluZWQiLCJsYWJlbCIsInN1YmxhYmVsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJzdHJpbmciLCJib29sIiwiZGVmYXVsdFByb3BzIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEk7Ozs7O0FBQ0YsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDVEEsS0FEUztBQUVsQjs7OztXQUVELGtCQUFTO0FBQUEsd0JBQzRDLEtBQUtBLEtBRGpEO0FBQUEsVUFDR0MsSUFESCxlQUNHQSxJQURIO0FBQUEsVUFDU0MsU0FEVCxlQUNTQSxTQURUO0FBQUEsVUFDb0JDLFFBRHBCLGVBQ29CQSxRQURwQjtBQUFBLFVBQzhCQyxTQUQ5QixlQUM4QkEsU0FEOUI7QUFHTCwwQkFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDLGdCQUFmO0FBQUEsZ0NBQ0k7QUFBSyxVQUFBLFNBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0k7QUFBSyxZQUFBLFNBQVMsRUFBQztBQUFmLFlBREosZUFFSTtBQUNJLFlBQUEsU0FBUyxFQUFFO0FBQ1AsNkJBQWU7QUFEUiwyQkFFREgsSUFBSSxDQUFDSSxRQUZKLEdBRWlCSixJQUFJLENBQUNJLFFBRnRCLEVBRGY7QUFBQSxtQ0FNSTtBQUFLLGNBQUEsU0FBUyxFQUFDLFdBQWY7QUFBQSx3QkFDS0osSUFBSSxDQUFDSyxJQUFMLGlCQUNELHFCQUFDLGdCQUFEO0FBQ0ksZ0JBQUEsSUFBSSxFQUFFTCxJQUFJLENBQUNLLElBRGY7QUFFSSxnQkFBQSxLQUFLLEVBQUVKLFNBQVMsSUFBSSxPQUZ4QjtBQUdJLGdCQUFBLElBQUksRUFBRUMsUUFIVjtBQUlJLGdCQUFBLFVBQVUsRUFBRSxPQUFPQSxRQUFQLEtBQW9CLFFBQXBCLEdBQStCQSxRQUEvQixHQUEwQ0k7QUFKMUQ7QUFGSjtBQU5KLFlBRkosZUFtQkk7QUFBSyxZQUFBLFNBQVMsRUFBQztBQUFmLFlBbkJKO0FBQUEsVUFESixlQXNCSTtBQUFLLFVBQUEsU0FBUyxFQUFDLFlBQWY7QUFBQSxrQ0FDSTtBQUFBLHNCQUFPLENBQUNILFNBQUQsSUFBY0gsSUFBSSxDQUFDTztBQUExQixZQURKLGVBRUk7QUFBTSxZQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFBLHNCQUFpQyxDQUFDSixTQUFELElBQWNILElBQUksQ0FBQ1E7QUFBcEQsWUFGSjtBQUFBLFVBdEJKO0FBQUEsUUFESjtBQTZCSDs7OztFQXJDY0Msa0JBQU1DLFM7O0FBd0N6QlosSUFBSSxDQUFDYSxTQUFMLEdBQWlCO0FBQ2JYLEVBQUFBLElBQUksRUFBRVksc0JBQVVDLE1BREg7QUFFYlosRUFBQUEsU0FBUyxFQUFFVyxzQkFBVUUsTUFGUjtBQUdiWixFQUFBQSxRQUFRLEVBQUVVLHNCQUFVRSxNQUhQO0FBSWJYLEVBQUFBLFNBQVMsRUFBRVMsc0JBQVVHO0FBSlIsQ0FBakI7QUFPQWpCLElBQUksQ0FBQ2tCLFlBQUwsR0FBb0I7QUFDaEJoQixFQUFBQSxJQUFJLEVBQUU7QUFDRmlCLElBQUFBLEVBQUUsRUFBRSxFQURGO0FBRUZaLElBQUFBLElBQUksRUFBRSxFQUZKO0FBR0ZFLElBQUFBLEtBQUssRUFBRztBQUhOLEdBRFU7QUFNaEJOLEVBQUFBLFNBQVMsRUFBRSxPQU5LO0FBT2hCQyxFQUFBQSxRQUFRLEVBQUUsSUFQTTtBQVFoQkMsRUFBQUEsU0FBUyxFQUFFO0FBUkssQ0FBcEI7ZUFXZUwsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9TdGVwLnNjc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9JY29uL0ljb24nO1xyXG5cclxuY2xhc3MgU3RlcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdGVwLCBpY29uQ29sb3IsIGljb25TaXplLCBoaWRlTGFiZWwgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGVwLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1saW5lIC0tYmVmb3JlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwLWNpcmNsZSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYC0tJHtzdGVwLnByb2dyZXNzfWBdOiBzdGVwLnByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwLmljb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17c3RlcC5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtpY29uQ29sb3IgfHwgJ3doaXRlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtpY29uU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21TaXplPXt0eXBlb2YgaWNvblNpemUgPT09ICdudW1iZXInID8gaWNvblNpemUgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtbGluZSAtLWFmdGVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57IWhpZGVMYWJlbCAmJiBzdGVwLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGVwLXN1YmxhYmVsXCI+eyFoaWRlTGFiZWwgJiYgc3RlcC5zdWJsYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5TdGVwLnByb3BUeXBlcyA9IHtcclxuICAgIHN0ZXA6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpY29uQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpY29uU2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGhpZGVMYWJlbDogUHJvcFR5cGVzLmJvb2xcclxufTtcclxuXHJcblN0ZXAuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3RlcDoge1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICBsYWJlbDogICcnXHJcbiAgICB9LFxyXG4gICAgaWNvbkNvbG9yOiAnd2hpdGUnLFxyXG4gICAgaWNvblNpemU6ICdzbScsXHJcbiAgICBoaWRlTGFiZWw6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGVwOyJdfQ==