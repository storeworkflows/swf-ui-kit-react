"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var Arrows = /*#__PURE__*/function (_React$Component) {
  _inherits(Arrows, _React$Component);

  var _super = _createSuper(Arrows);

  function Arrows(props) {
    _classCallCheck(this, Arrows);

    return _super.call(this, props);
  }

  _createClass(Arrows, [{
    key: "render",
    value: function render() {
      var onArrowClick = this.props.onArrowClick;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "arrow arrow-left",
          onClick: function onClick() {
            return onArrowClick(-1);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "arrow-icon",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
              icon: "chevron-left",
              color: "black",
              size: "lg"
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "arrow arrow-right",
          onClick: function onClick() {
            return onArrowClick(1);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "arrow-icon",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
              icon: "chevron-right",
              color: "black",
              size: "lg"
            })
          })
        })]
      });
    }
  }]);

  return Arrows;
}(_react["default"].Component);

Arrows.propTypes = {
  onArrowClick: _propTypes["default"].func
};
var _default = Arrows;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdGVwcGVyL0Fycm93cy9BcnJvd3MuanMiXSwibmFtZXMiOlsiQXJyb3dzIiwicHJvcHMiLCJvbkFycm93Q2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7OztBQUNGLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1RBLEtBRFM7QUFFbEI7Ozs7V0FFRCxrQkFBUztBQUFBLFVBQ0dDLFlBREgsR0FDb0IsS0FBS0QsS0FEekIsQ0FDR0MsWUFESDtBQUdMLDBCQUNJO0FBQUEsZ0NBQ0k7QUFDSSxVQUFBLFNBQVMsRUFBQyxrQkFEZDtBQUVJLFVBQUEsT0FBTyxFQUFFO0FBQUEsbUJBQU1BLFlBQVksQ0FBQyxDQUFDLENBQUYsQ0FBbEI7QUFBQSxXQUZiO0FBQUEsaUNBSUk7QUFBSyxZQUFBLFNBQVMsRUFBQyxZQUFmO0FBQUEsbUNBQ0kscUJBQUMsZ0JBQUQ7QUFDSSxjQUFBLElBQUksRUFBQyxjQURUO0FBRUksY0FBQSxLQUFLLEVBQUMsT0FGVjtBQUdJLGNBQUEsSUFBSSxFQUFDO0FBSFQ7QUFESjtBQUpKLFVBREosZUFhSTtBQUNJLFVBQUEsU0FBUyxFQUFDLG1CQURkO0FBRUksVUFBQSxPQUFPLEVBQUU7QUFBQSxtQkFBTUEsWUFBWSxDQUFDLENBQUQsQ0FBbEI7QUFBQSxXQUZiO0FBQUEsaUNBSUk7QUFBSyxZQUFBLFNBQVMsRUFBQyxZQUFmO0FBQUEsbUNBQ0kscUJBQUMsZ0JBQUQ7QUFDSSxjQUFBLElBQUksRUFBQyxlQURUO0FBRUksY0FBQSxLQUFLLEVBQUMsT0FGVjtBQUdJLGNBQUEsSUFBSSxFQUFDO0FBSFQ7QUFESjtBQUpKLFVBYko7QUFBQSxRQURKO0FBNEJIOzs7O0VBcENnQkMsa0JBQU1DLFM7O0FBdUMzQkosTUFBTSxDQUFDSyxTQUFQLEdBQW1CO0FBQ2ZILEVBQUFBLFlBQVksRUFBRUksc0JBQVVDO0FBRFQsQ0FBbkI7ZUFJZVAsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9JY29uL0ljb25cIjtcclxuXHJcbmNsYXNzIEFycm93cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBvbkFycm93Q2xpY2sgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJyb3cgYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BcnJvd0NsaWNrKC0xKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjaGV2cm9uLWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJyb3cgYXJyb3ctcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQXJyb3dDbGljaygxKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjaGV2cm9uLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5BcnJvd3MucHJvcFR5cGVzID0ge1xyXG4gICAgb25BcnJvd0NsaWNrOiBQcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnJvd3M7Il19