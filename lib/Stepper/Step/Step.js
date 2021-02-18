"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./Step.scss");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

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
          hideLabel = _this$props.hideLabel,
          selected = _this$props.selected,
          beforeSelected = _this$props.beforeSelected,
          vertical = _this$props.vertical;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _classnames["default"])({
          'step': true,
          'step-container': true,
          '--vertical': vertical
        }),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames["default"])({
            'step-circle': true,
            '--selected': selected,
            '--before-selected': beforeSelected
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "step-icon",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
              icon: icon,
              color: iconColor || 'white',
              size: "xl"
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames["default"])({
            'step-label': true,
            '--selected': selected
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: !hideLabel && label
          })
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
  hideLabel: _propTypes["default"].bool,
  selected: _propTypes["default"].bool,
  beforeSelected: _propTypes["default"].bool,
  vertical: _propTypes["default"].bool
};
Step.defaultProps = {
  icon: '',
  iconColor: '',
  label: '',
  hideLabel: false,
  selected: false,
  beforeSelected: false,
  vertical: false
};
var _default = Step;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdGVwcGVyL1N0ZXAvU3RlcC5qcyJdLCJuYW1lcyI6WyJTdGVwIiwicHJvcHMiLCJpY29uIiwiaWNvbkNvbG9yIiwibGFiZWwiLCJoaWRlTGFiZWwiLCJzZWxlY3RlZCIsImJlZm9yZVNlbGVjdGVkIiwidmVydGljYWwiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7OztBQUNGLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1RBLEtBRFM7QUFFbEI7Ozs7V0FFRCxrQkFBUztBQUFBLHdCQUM2RSxLQUFLQSxLQURsRjtBQUFBLFVBQ0dDLElBREgsZUFDR0EsSUFESDtBQUFBLFVBQ1NDLFNBRFQsZUFDU0EsU0FEVDtBQUFBLFVBQ29CQyxLQURwQixlQUNvQkEsS0FEcEI7QUFBQSxVQUMyQkMsU0FEM0IsZUFDMkJBLFNBRDNCO0FBQUEsVUFDc0NDLFFBRHRDLGVBQ3NDQSxRQUR0QztBQUFBLFVBQ2dEQyxjQURoRCxlQUNnREEsY0FEaEQ7QUFBQSxVQUNnRUMsUUFEaEUsZUFDZ0VBLFFBRGhFO0FBR0wsMEJBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBRSw0QkFBVztBQUNuQixrQkFBUSxJQURXO0FBRW5CLDRCQUFrQixJQUZDO0FBR25CLHdCQUFjQTtBQUhLLFNBQVgsQ0FBaEI7QUFBQSxnQ0FNSTtBQUNJLFVBQUEsU0FBUyxFQUFFLDRCQUFXO0FBQ2xCLDJCQUFlLElBREc7QUFFbEIsMEJBQWNGLFFBRkk7QUFHbEIsaUNBQXFCQztBQUhILFdBQVgsQ0FEZjtBQUFBLGlDQU9JO0FBQUssWUFBQSxTQUFTLEVBQUMsV0FBZjtBQUFBLG1DQUNJLHFCQUFDLGdCQUFEO0FBQ0ksY0FBQSxJQUFJLEVBQUVMLElBRFY7QUFFSSxjQUFBLEtBQUssRUFBRUMsU0FBUyxJQUFJLE9BRnhCO0FBR0ksY0FBQSxJQUFJLEVBQUM7QUFIVDtBQURKO0FBUEosVUFOSixlQXFCSTtBQUNJLFVBQUEsU0FBUyxFQUFFLDRCQUFXO0FBQ2xCLDBCQUFjLElBREk7QUFFbEIsMEJBQWNHO0FBRkksV0FBWCxDQURmO0FBQUEsaUNBTUk7QUFBQSxzQkFBTyxDQUFDRCxTQUFELElBQWNEO0FBQXJCO0FBTkosVUFyQko7QUFBQSxRQURKO0FBZ0NIOzs7O0VBeENjSyxrQkFBTUMsUzs7QUEyQ3pCVixJQUFJLENBQUNXLFNBQUwsR0FBaUI7QUFDYlQsRUFBQUEsSUFBSSxFQUFFVSxzQkFBVUMsTUFESDtBQUViVixFQUFBQSxTQUFTLEVBQUVTLHNCQUFVQyxNQUZSO0FBR2JULEVBQUFBLEtBQUssRUFBRVEsc0JBQVVDLE1BSEo7QUFJYlIsRUFBQUEsU0FBUyxFQUFFTyxzQkFBVUUsSUFKUjtBQUtiUixFQUFBQSxRQUFRLEVBQUVNLHNCQUFVRSxJQUxQO0FBTWJQLEVBQUFBLGNBQWMsRUFBRUssc0JBQVVFLElBTmI7QUFPYk4sRUFBQUEsUUFBUSxFQUFFSSxzQkFBVUU7QUFQUCxDQUFqQjtBQVVBZCxJQUFJLENBQUNlLFlBQUwsR0FBb0I7QUFDaEJiLEVBQUFBLElBQUksRUFBRSxFQURVO0FBRWhCQyxFQUFBQSxTQUFTLEVBQUUsRUFGSztBQUdoQkMsRUFBQUEsS0FBSyxFQUFFLEVBSFM7QUFJaEJDLEVBQUFBLFNBQVMsRUFBRSxLQUpLO0FBS2hCQyxFQUFBQSxRQUFRLEVBQUUsS0FMTTtBQU1oQkMsRUFBQUEsY0FBYyxFQUFFLEtBTkE7QUFPaEJDLEVBQUFBLFFBQVEsRUFBRTtBQVBNLENBQXBCO2VBVWVSLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vU3RlcC5zY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9JY29uL0ljb24nO1xyXG5cclxuY2xhc3MgU3RlcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpY29uLCBpY29uQ29sb3IsIGxhYmVsLCBoaWRlTGFiZWwsIHNlbGVjdGVkLCBiZWZvcmVTZWxlY3RlZCwgdmVydGljYWwgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAnc3RlcCc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0ZXAtY29udGFpbmVyJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAnLS12ZXJ0aWNhbCc6IHZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwLWNpcmNsZSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICctLXNlbGVjdGVkJzogc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICctLWJlZm9yZS1zZWxlY3RlZCc6IGJlZm9yZVNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17aWNvbkNvbG9yIHx8ICd3aGl0ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwieGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXAtbGFiZWwnOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnLS1zZWxlY3RlZCc6IHNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnshaGlkZUxhYmVsICYmIGxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblN0ZXAucHJvcFR5cGVzID0ge1xyXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGljb25Db2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaGlkZUxhYmVsOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGJlZm9yZVNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbFxyXG59O1xyXG5cclxuU3RlcC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBpY29uOiAnJyxcclxuICAgIGljb25Db2xvcjogJycsXHJcbiAgICBsYWJlbDogJycsXHJcbiAgICBoaWRlTGFiZWw6IGZhbHNlLFxyXG4gICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgYmVmb3JlU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgdmVydGljYWw6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGVwOyJdfQ==