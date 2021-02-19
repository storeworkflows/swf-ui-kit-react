"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./Step.scss");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../../Icon/Icon"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
          icon = _this$props.icon,
          iconColor = _this$props.iconColor,
          label = _this$props.label,
          sublabel = _this$props.sublabel,
          hideLabel = _this$props.hideLabel;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "step step-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "step-circle",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "step-icon",
            children: icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
              icon: icon,
              color: iconColor || 'white',
              size: "xl"
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "step-label",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: !hideLabel && label
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "sublabel",
            children: !hideLabel && sublabel
          })]
        })]
      });
    }
  }]);

  return Step;
}(_react["default"].Component);

Step.propTypes = {
  icon: _propTypes["default"].string,
  iconColor: _propTypes["default"].string,
  label: _propTypes["default"].string,
  sublabel: _propTypes["default"].string,
  hideLabel: _propTypes["default"].bool
};
Step.defaultProps = {
  icon: '',
  iconColor: '',
  label: '',
  sublabel: '',
  hideLabel: false
};
var _default = Step;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdGVwcGVyL1N0ZXAvU3RlcC5qcyJdLCJuYW1lcyI6WyJTdGVwIiwicHJvcHMiLCJpY29uIiwiaWNvbkNvbG9yIiwibGFiZWwiLCJzdWJsYWJlbCIsImhpZGVMYWJlbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEk7Ozs7O0FBQ0YsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDVEEsS0FEUztBQUVsQjs7OztXQUVELGtCQUFTO0FBQUEsd0JBQ21ELEtBQUtBLEtBRHhEO0FBQUEsVUFDR0MsSUFESCxlQUNHQSxJQURIO0FBQUEsVUFDU0MsU0FEVCxlQUNTQSxTQURUO0FBQUEsVUFDb0JDLEtBRHBCLGVBQ29CQSxLQURwQjtBQUFBLFVBQzJCQyxRQUQzQixlQUMyQkEsUUFEM0I7QUFBQSxVQUNxQ0MsU0FEckMsZUFDcUNBLFNBRHJDO0FBR0wsMEJBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBQyxxQkFBZjtBQUFBLGdDQUNJO0FBQUssVUFBQSxTQUFTLEVBQUMsYUFBZjtBQUFBLGlDQUNJO0FBQUssWUFBQSxTQUFTLEVBQUMsV0FBZjtBQUFBLHNCQUNLSixJQUFJLGlCQUNELHFCQUFDLGdCQUFEO0FBQ0ksY0FBQSxJQUFJLEVBQUVBLElBRFY7QUFFSSxjQUFBLEtBQUssRUFBRUMsU0FBUyxJQUFJLE9BRnhCO0FBR0ksY0FBQSxJQUFJLEVBQUM7QUFIVDtBQUZSO0FBREosVUFESixlQVlJO0FBQUssVUFBQSxTQUFTLEVBQUMsWUFBZjtBQUFBLGtDQUNJO0FBQUEsc0JBQU8sQ0FBQ0csU0FBRCxJQUFjRjtBQUFyQixZQURKLGVBRUk7QUFBTSxZQUFBLFNBQVMsRUFBQyxVQUFoQjtBQUFBLHNCQUE0QixDQUFDRSxTQUFELElBQWNEO0FBQTFDLFlBRko7QUFBQSxVQVpKO0FBQUEsUUFESjtBQW1CSDs7OztFQTNCY0Usa0JBQU1DLFM7O0FBOEJ6QlIsSUFBSSxDQUFDUyxTQUFMLEdBQWlCO0FBQ2JQLEVBQUFBLElBQUksRUFBRVEsc0JBQVVDLE1BREg7QUFFYlIsRUFBQUEsU0FBUyxFQUFFTyxzQkFBVUMsTUFGUjtBQUdiUCxFQUFBQSxLQUFLLEVBQUVNLHNCQUFVQyxNQUhKO0FBSWJOLEVBQUFBLFFBQVEsRUFBRUssc0JBQVVDLE1BSlA7QUFLYkwsRUFBQUEsU0FBUyxFQUFFSSxzQkFBVUU7QUFMUixDQUFqQjtBQVFBWixJQUFJLENBQUNhLFlBQUwsR0FBb0I7QUFDaEJYLEVBQUFBLElBQUksRUFBRSxFQURVO0FBRWhCQyxFQUFBQSxTQUFTLEVBQUUsRUFGSztBQUdoQkMsRUFBQUEsS0FBSyxFQUFFLEVBSFM7QUFJaEJDLEVBQUFBLFFBQVEsRUFBRSxFQUpNO0FBS2hCQyxFQUFBQSxTQUFTLEVBQUU7QUFMSyxDQUFwQjtlQVFlTixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL1N0ZXAuc2Nzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vSWNvbi9JY29uJztcclxuXHJcbmNsYXNzIFN0ZXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaWNvbiwgaWNvbkNvbG9yLCBsYWJlbCwgc3VibGFiZWwsIGhpZGVMYWJlbCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0ZXAgc3RlcC1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2ljb25Db2xvciB8fCAnd2hpdGUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJ4bFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnshaGlkZUxhYmVsICYmIGxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJsYWJlbFwiPnshaGlkZUxhYmVsICYmIHN1YmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblN0ZXAucHJvcFR5cGVzID0ge1xyXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGljb25Db2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc3VibGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBoaWRlTGFiZWw6IFByb3BUeXBlcy5ib29sXHJcbn07XHJcblxyXG5TdGVwLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGljb246ICcnLFxyXG4gICAgaWNvbkNvbG9yOiAnJyxcclxuICAgIGxhYmVsOiAnJyxcclxuICAgIHN1YmxhYmVsOiAnJyxcclxuICAgIGhpZGVMYWJlbDogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0ZXA7Il19