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
          icon = _this$props.icon,
          iconColor = _this$props.iconColor,
          label = _this$props.label,
          sublabel = _this$props.sublabel,
          progress = _this$props.progress,
          hideLabel = _this$props.hideLabel;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "step step-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames2["default"])(_defineProperty({
            'step-circle': true
          }, "--".concat(progress), progress)),
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
  progress: _propTypes["default"].string,
  hideLabel: _propTypes["default"].bool
};
Step.defaultProps = {
  icon: '',
  iconColor: '',
  label: '',
  sublabel: '',
  progress: '',
  hideLabel: false
};
var _default = Step;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdGVwcGVyL1N0ZXAvU3RlcC5qcyJdLCJuYW1lcyI6WyJTdGVwIiwicHJvcHMiLCJpY29uIiwiaWNvbkNvbG9yIiwibGFiZWwiLCJzdWJsYWJlbCIsInByb2dyZXNzIiwiaGlkZUxhYmVsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7OztBQUNGLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1RBLEtBRFM7QUFFbEI7Ozs7V0FFRCxrQkFBUztBQUFBLHdCQUM2RCxLQUFLQSxLQURsRTtBQUFBLFVBQ0dDLElBREgsZUFDR0EsSUFESDtBQUFBLFVBQ1NDLFNBRFQsZUFDU0EsU0FEVDtBQUFBLFVBQ29CQyxLQURwQixlQUNvQkEsS0FEcEI7QUFBQSxVQUMyQkMsUUFEM0IsZUFDMkJBLFFBRDNCO0FBQUEsVUFDcUNDLFFBRHJDLGVBQ3FDQSxRQURyQztBQUFBLFVBQytDQyxTQUQvQyxlQUMrQ0EsU0FEL0M7QUFHTCwwQkFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDLHFCQUFmO0FBQUEsZ0NBQ0k7QUFDSSxVQUFBLFNBQVMsRUFBRTtBQUNQLDJCQUFlO0FBRFIseUJBRURELFFBRkMsR0FFWUEsUUFGWixFQURmO0FBQUEsaUNBTUk7QUFBSyxZQUFBLFNBQVMsRUFBQyxXQUFmO0FBQUEsc0JBQ0tKLElBQUksaUJBQ0QscUJBQUMsZ0JBQUQ7QUFDSSxjQUFBLElBQUksRUFBRUEsSUFEVjtBQUVJLGNBQUEsS0FBSyxFQUFFQyxTQUFTLElBQUksT0FGeEI7QUFHSSxjQUFBLElBQUksRUFBQztBQUhUO0FBRlI7QUFOSixVQURKLGVBaUJJO0FBQUssVUFBQSxTQUFTLEVBQUMsWUFBZjtBQUFBLGtDQUNJO0FBQUEsc0JBQU8sQ0FBQ0ksU0FBRCxJQUFjSDtBQUFyQixZQURKLGVBRUk7QUFBTSxZQUFBLFNBQVMsRUFBQyxVQUFoQjtBQUFBLHNCQUE0QixDQUFDRyxTQUFELElBQWNGO0FBQTFDLFlBRko7QUFBQSxVQWpCSjtBQUFBLFFBREo7QUF3Qkg7Ozs7RUFoQ2NHLGtCQUFNQyxTOztBQW1DekJULElBQUksQ0FBQ1UsU0FBTCxHQUFpQjtBQUNiUixFQUFBQSxJQUFJLEVBQUVTLHNCQUFVQyxNQURIO0FBRWJULEVBQUFBLFNBQVMsRUFBRVEsc0JBQVVDLE1BRlI7QUFHYlIsRUFBQUEsS0FBSyxFQUFFTyxzQkFBVUMsTUFISjtBQUliUCxFQUFBQSxRQUFRLEVBQUVNLHNCQUFVQyxNQUpQO0FBS2JOLEVBQUFBLFFBQVEsRUFBRUssc0JBQVVDLE1BTFA7QUFNYkwsRUFBQUEsU0FBUyxFQUFFSSxzQkFBVUU7QUFOUixDQUFqQjtBQVNBYixJQUFJLENBQUNjLFlBQUwsR0FBb0I7QUFDaEJaLEVBQUFBLElBQUksRUFBRSxFQURVO0FBRWhCQyxFQUFBQSxTQUFTLEVBQUUsRUFGSztBQUdoQkMsRUFBQUEsS0FBSyxFQUFFLEVBSFM7QUFJaEJDLEVBQUFBLFFBQVEsRUFBRSxFQUpNO0FBS2hCQyxFQUFBQSxRQUFRLEVBQUUsRUFMTTtBQU1oQkMsRUFBQUEsU0FBUyxFQUFFO0FBTkssQ0FBcEI7ZUFTZVAsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9TdGVwLnNjc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9JY29uL0ljb24nO1xyXG5cclxuY2xhc3MgU3RlcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpY29uLCBpY29uQ29sb3IsIGxhYmVsLCBzdWJsYWJlbCwgcHJvZ3Jlc3MsIGhpZGVMYWJlbCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0ZXAgc3RlcC1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwLWNpcmNsZSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgLS0ke3Byb2dyZXNzfWBdOiBwcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpY29uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2ljb25Db2xvciB8fCAnd2hpdGUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJ4bFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnshaGlkZUxhYmVsICYmIGxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJsYWJlbFwiPnshaGlkZUxhYmVsICYmIHN1YmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblN0ZXAucHJvcFR5cGVzID0ge1xyXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGljb25Db2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc3VibGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBwcm9ncmVzczogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGhpZGVMYWJlbDogUHJvcFR5cGVzLmJvb2xcclxufTtcclxuXHJcblN0ZXAuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaWNvbjogJycsXHJcbiAgICBpY29uQ29sb3I6ICcnLFxyXG4gICAgbGFiZWw6ICcnLFxyXG4gICAgc3VibGFiZWw6ICcnLFxyXG4gICAgcHJvZ3Jlc3M6ICcnLFxyXG4gICAgaGlkZUxhYmVsOiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RlcDsiXX0=