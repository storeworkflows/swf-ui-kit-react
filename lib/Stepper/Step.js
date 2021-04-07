"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

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
          hideLabel = _this$props.hideLabel;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "step-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "step-body",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "step-line --before"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
            viewBox: "0 0 16 16",
            className: (0, _classnames3["default"])(_defineProperty({
              'step-circle': true
            }, "--".concat(step.progress), step.progress)),
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
              cx: "50%",
              cy: "50%",
              r: "50%",
              className: (0, _classnames3["default"])(_defineProperty({}, "--".concat(step.progress), step.progress))
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("foreignObject", {
              x: "25.25%",
              y: "0",
              height: "100%",
              width: "50%",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "step-icon",
                children: step.icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
                  icon: step.icon,
                  color: iconColor || 'white',
                  zeroSize: true
                })
              })
            })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXAuanMiXSwibmFtZXMiOlsiU3RlcCIsInByb3BzIiwic3RlcCIsImljb25Db2xvciIsImhpZGVMYWJlbCIsInByb2dyZXNzIiwiaWNvbiIsImxhYmVsIiwic3VibGFiZWwiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyIsImljb25TaXplIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7OztBQUNGLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1RBLEtBRFM7QUFFbEI7Ozs7V0FFRCxrQkFBUztBQUFBLHdCQUNrQyxLQUFLQSxLQUR2QztBQUFBLFVBQ0dDLElBREgsZUFDR0EsSUFESDtBQUFBLFVBQ1NDLFNBRFQsZUFDU0EsU0FEVDtBQUFBLFVBQ29CQyxTQURwQixlQUNvQkEsU0FEcEI7QUFHTCwwQkFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDLGdCQUFmO0FBQUEsZ0NBQ0k7QUFBSyxVQUFBLFNBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0k7QUFBSyxZQUFBLFNBQVMsRUFBQztBQUFmLFlBREosZUFFSTtBQUNJLFlBQUEsT0FBTyxFQUFDLFdBRFo7QUFFSSxZQUFBLFNBQVMsRUFBRTtBQUNWLDZCQUFlO0FBREwsMkJBRUpGLElBQUksQ0FBQ0csUUFGRCxHQUVjSCxJQUFJLENBQUNHLFFBRm5CLEVBRmY7QUFBQSxvQ0FPSTtBQUNJLGNBQUEsRUFBRSxFQUFDLEtBRFA7QUFDYSxjQUFBLEVBQUUsRUFBQyxLQURoQjtBQUNzQixjQUFBLENBQUMsRUFBQyxLQUR4QjtBQUVJLGNBQUEsU0FBUyxFQUFFLDZEQUNESCxJQUFJLENBQUNHLFFBREosR0FDaUJILElBQUksQ0FBQ0csUUFEdEI7QUFGZixjQVBKLGVBY0k7QUFBZSxjQUFBLENBQUMsRUFBQyxRQUFqQjtBQUEwQixjQUFBLENBQUMsRUFBQyxHQUE1QjtBQUFnQyxjQUFBLE1BQU0sRUFBQyxNQUF2QztBQUE4QyxjQUFBLEtBQUssRUFBQyxLQUFwRDtBQUFBLHFDQUNJO0FBQUssZ0JBQUEsU0FBUyxFQUFDLFdBQWY7QUFBQSwwQkFDS0gsSUFBSSxDQUFDSSxJQUFMLGlCQUNELHFCQUFDLGdCQUFEO0FBQ0ksa0JBQUEsSUFBSSxFQUFFSixJQUFJLENBQUNJLElBRGY7QUFFSSxrQkFBQSxLQUFLLEVBQUVILFNBQVMsSUFBSSxPQUZ4QjtBQUdJLGtCQUFBLFFBQVE7QUFIWjtBQUZKO0FBREosY0FkSjtBQUFBLFlBRkosZUE0Qkk7QUFBSyxZQUFBLFNBQVMsRUFBQztBQUFmLFlBNUJKO0FBQUEsVUFESixlQStCSTtBQUFLLFVBQUEsU0FBUyxFQUFDLFlBQWY7QUFBQSxrQ0FDSTtBQUFBLHNCQUFPLENBQUNDLFNBQUQsSUFBY0YsSUFBSSxDQUFDSztBQUExQixZQURKLGVBRUk7QUFBTSxZQUFBLFNBQVMsRUFBQyxlQUFoQjtBQUFBLHNCQUFpQyxDQUFDSCxTQUFELElBQWNGLElBQUksQ0FBQ007QUFBcEQsWUFGSjtBQUFBLFVBL0JKO0FBQUEsUUFESjtBQXNDSDs7OztFQTlDY0Msa0JBQU1DLFM7O0FBaUR6QlYsSUFBSSxDQUFDVyxTQUFMLEdBQWlCO0FBQ2JULEVBQUFBLElBQUksRUFBRVUsc0JBQVVDLE1BREg7QUFFYlYsRUFBQUEsU0FBUyxFQUFFUyxzQkFBVUUsTUFGUjtBQUdiQyxFQUFBQSxRQUFRLEVBQUVILHNCQUFVRSxNQUhQO0FBSWJWLEVBQUFBLFNBQVMsRUFBRVEsc0JBQVVJO0FBSlIsQ0FBakI7QUFPQWhCLElBQUksQ0FBQ2lCLFlBQUwsR0FBb0I7QUFDaEJmLEVBQUFBLElBQUksRUFBRTtBQUNGZ0IsSUFBQUEsRUFBRSxFQUFFLEVBREY7QUFFRlosSUFBQUEsSUFBSSxFQUFFLEVBRko7QUFHRkMsSUFBQUEsS0FBSyxFQUFHO0FBSE4sR0FEVTtBQU1oQkosRUFBQUEsU0FBUyxFQUFFLE9BTks7QUFPaEJZLEVBQUFBLFFBQVEsRUFBRSxJQVBNO0FBUWhCWCxFQUFBQSxTQUFTLEVBQUU7QUFSSyxDQUFwQjtlQVdlSixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbi9JY29uJztcclxuXHJcbmNsYXNzIFN0ZXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RlcCwgaWNvbkNvbG9yLCBoaWRlTGFiZWwgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGVwLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1saW5lIC0tYmVmb3JlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc3RlcC1jaXJjbGUnOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7c3RlcC5wcm9ncmVzc31gXTogc3RlcC5wcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN4PVwiNTAlXCIgY3k9XCI1MCVcIiByPVwiNTAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7c3RlcC5wcm9ncmVzc31gXTogc3RlcC5wcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9yZWlnbk9iamVjdCB4PVwiMjUuMjUlXCIgeT1cIjBcIiBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCI1MCVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAuaWNvbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3N0ZXAuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2ljb25Db2xvciB8fCAnd2hpdGUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ZXJvU2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9yZWlnbk9iamVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtbGluZSAtLWFmdGVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57IWhpZGVMYWJlbCAmJiBzdGVwLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGVwLXN1YmxhYmVsXCI+eyFoaWRlTGFiZWwgJiYgc3RlcC5zdWJsYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5TdGVwLnByb3BUeXBlcyA9IHtcclxuICAgIHN0ZXA6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpY29uQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpY29uU2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGhpZGVMYWJlbDogUHJvcFR5cGVzLmJvb2xcclxufTtcclxuXHJcblN0ZXAuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3RlcDoge1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICBsYWJlbDogICcnXHJcbiAgICB9LFxyXG4gICAgaWNvbkNvbG9yOiAnd2hpdGUnLFxyXG4gICAgaWNvblNpemU6ICdzbScsXHJcbiAgICBoaWRlTGFiZWw6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGVwOyJdfQ==