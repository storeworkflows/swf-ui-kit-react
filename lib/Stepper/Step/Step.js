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
          iconSize = _this$props.iconSize,
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
              size: iconSize
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "step-label",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: !hideLabel && label
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "step-sublabel",
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
  iconSize: _propTypes["default"].string,
  label: _propTypes["default"].string,
  sublabel: _propTypes["default"].string,
  progress: _propTypes["default"].string,
  hideLabel: _propTypes["default"].bool
};
Step.defaultProps = {
  icon: '',
  iconColor: 'white',
  iconSize: 'sm',
  label: '',
  sublabel: '',
  progress: '',
  hideLabel: false
};
var _default = Step;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdGVwcGVyL1N0ZXAvU3RlcC5qcyJdLCJuYW1lcyI6WyJTdGVwIiwicHJvcHMiLCJpY29uIiwiaWNvbkNvbG9yIiwiaWNvblNpemUiLCJsYWJlbCIsInN1YmxhYmVsIiwicHJvZ3Jlc3MiLCJoaWRlTGFiZWwiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEk7Ozs7O0FBQ0YsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDVEEsS0FEUztBQUVsQjs7OztXQUVELGtCQUFTO0FBQUEsd0JBQ3VFLEtBQUtBLEtBRDVFO0FBQUEsVUFDR0MsSUFESCxlQUNHQSxJQURIO0FBQUEsVUFDU0MsU0FEVCxlQUNTQSxTQURUO0FBQUEsVUFDb0JDLFFBRHBCLGVBQ29CQSxRQURwQjtBQUFBLFVBQzhCQyxLQUQ5QixlQUM4QkEsS0FEOUI7QUFBQSxVQUNxQ0MsUUFEckMsZUFDcUNBLFFBRHJDO0FBQUEsVUFDK0NDLFFBRC9DLGVBQytDQSxRQUQvQztBQUFBLFVBQ3lEQyxTQUR6RCxlQUN5REEsU0FEekQ7QUFHTCwwQkFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDLHFCQUFmO0FBQUEsZ0NBQ0k7QUFDSSxVQUFBLFNBQVMsRUFBRTtBQUNQLDJCQUFlO0FBRFIseUJBRURELFFBRkMsR0FFWUEsUUFGWixFQURmO0FBQUEsaUNBTUk7QUFBSyxZQUFBLFNBQVMsRUFBQyxXQUFmO0FBQUEsc0JBQ0tMLElBQUksaUJBQ0QscUJBQUMsZ0JBQUQ7QUFDSSxjQUFBLElBQUksRUFBRUEsSUFEVjtBQUVJLGNBQUEsS0FBSyxFQUFFQyxTQUFTLElBQUksT0FGeEI7QUFHSSxjQUFBLElBQUksRUFBRUM7QUFIVjtBQUZSO0FBTkosVUFESixlQWlCSTtBQUFLLFVBQUEsU0FBUyxFQUFDLFlBQWY7QUFBQSxrQ0FDSTtBQUFBLHNCQUFPLENBQUNJLFNBQUQsSUFBY0g7QUFBckIsWUFESixlQUVJO0FBQU0sWUFBQSxTQUFTLEVBQUMsZUFBaEI7QUFBQSxzQkFBaUMsQ0FBQ0csU0FBRCxJQUFjRjtBQUEvQyxZQUZKO0FBQUEsVUFqQko7QUFBQSxRQURKO0FBd0JIOzs7O0VBaENjRyxrQkFBTUMsUzs7QUFtQ3pCVixJQUFJLENBQUNXLFNBQUwsR0FBaUI7QUFDYlQsRUFBQUEsSUFBSSxFQUFFVSxzQkFBVUMsTUFESDtBQUViVixFQUFBQSxTQUFTLEVBQUVTLHNCQUFVQyxNQUZSO0FBR2JULEVBQUFBLFFBQVEsRUFBRVEsc0JBQVVDLE1BSFA7QUFJYlIsRUFBQUEsS0FBSyxFQUFFTyxzQkFBVUMsTUFKSjtBQUtiUCxFQUFBQSxRQUFRLEVBQUVNLHNCQUFVQyxNQUxQO0FBTWJOLEVBQUFBLFFBQVEsRUFBRUssc0JBQVVDLE1BTlA7QUFPYkwsRUFBQUEsU0FBUyxFQUFFSSxzQkFBVUU7QUFQUixDQUFqQjtBQVVBZCxJQUFJLENBQUNlLFlBQUwsR0FBb0I7QUFDaEJiLEVBQUFBLElBQUksRUFBRSxFQURVO0FBRWhCQyxFQUFBQSxTQUFTLEVBQUUsT0FGSztBQUdoQkMsRUFBQUEsUUFBUSxFQUFFLElBSE07QUFJaEJDLEVBQUFBLEtBQUssRUFBRSxFQUpTO0FBS2hCQyxFQUFBQSxRQUFRLEVBQUUsRUFMTTtBQU1oQkMsRUFBQUEsUUFBUSxFQUFFLEVBTk07QUFPaEJDLEVBQUFBLFNBQVMsRUFBRTtBQVBLLENBQXBCO2VBVWVSLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vU3RlcC5zY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vSWNvbi9JY29uJztcclxuXHJcbmNsYXNzIFN0ZXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaWNvbiwgaWNvbkNvbG9yLCBpY29uU2l6ZSwgbGFiZWwsIHN1YmxhYmVsLCBwcm9ncmVzcywgaGlkZUxhYmVsIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RlcCBzdGVwLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXAtY2lyY2xlJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7cHJvZ3Jlc3N9YF06IHByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ljb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17aWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17aWNvbkNvbG9yIHx8ICd3aGl0ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17aWNvblNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnshaGlkZUxhYmVsICYmIGxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGVwLXN1YmxhYmVsXCI+eyFoaWRlTGFiZWwgJiYgc3VibGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuU3RlcC5wcm9wVHlwZXMgPSB7XHJcbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaWNvbkNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaWNvblNpemU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHN1YmxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcHJvZ3Jlc3M6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBoaWRlTGFiZWw6IFByb3BUeXBlcy5ib29sXHJcbn07XHJcblxyXG5TdGVwLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGljb246ICcnLFxyXG4gICAgaWNvbkNvbG9yOiAnd2hpdGUnLFxyXG4gICAgaWNvblNpemU6ICdzbScsXHJcbiAgICBsYWJlbDogJycsXHJcbiAgICBzdWJsYWJlbDogJycsXHJcbiAgICBwcm9ncmVzczogJycsXHJcbiAgICBoaWRlTGFiZWw6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGVwOyJdfQ==