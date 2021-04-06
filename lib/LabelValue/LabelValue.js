"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _findByType = _interopRequireWildcard(require("../utils/findByType"));

var _jsxRuntime = require("react/jsx-runtime");

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var LabelValue = /*#__PURE__*/function (_React$Component) {
  _inherits(LabelValue, _React$Component);

  var _super = _createSuper(LabelValue);

  function LabelValue(props) {
    _classCallCheck(this, LabelValue);

    return _super.call(this, props);
  }

  _createClass(LabelValue, [{
    key: "renderValue",
    value: function renderValue() {
      var children = this.props.children;
      var value = (0, _findByType["default"])(children, "Value");
      if (!value || value.length < 1) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "label-value-content",
        children: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          labelClassName = _this$props.labelClassName,
          className = _this$props.className,
          onClick = _this$props.onClick,
          label = _this$props.label;
      var classes = (0, _classnames["default"])("label-value-container", className);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: classes,
          onClick: onClick,
          children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: labelClassName,
            children: label
          }), this.renderValue()]
        })
      });
    }
  }]);

  return LabelValue;
}(React.Component);

LabelValue.Value = (0, _findByType.createSubComponent)("Value");
LabelValue.defaultProps = {
  className: {},
  onClick: function onClick() {
    return void 0;
  }
};
LabelValue.propTypes = {
  label: _propTypes["default"].string,
  className: _propTypes["default"].object,
  labelClassName: _propTypes["default"].object,
  onClick: _propTypes["default"].func
};
var _default = LabelValue;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MYWJlbFZhbHVlL0xhYmVsVmFsdWUuanMiXSwibmFtZXMiOlsiTGFiZWxWYWx1ZSIsInByb3BzIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsImxlbmd0aCIsImxhYmVsQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwib25DbGljayIsImxhYmVsIiwiY2xhc3NlcyIsInJlbmRlclZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJWYWx1ZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVTs7Ozs7QUFFRixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTO0FBRWxCOzs7O1dBRUQsdUJBQWE7QUFBQSxVQUNGQyxRQURFLEdBQ1UsS0FBS0QsS0FEZixDQUNGQyxRQURFO0FBRVQsVUFBTUMsS0FBSyxHQUFHLDRCQUFXRCxRQUFYLEVBQXFCLE9BQXJCLENBQWQ7QUFFQSxVQUFJLENBQUNDLEtBQUQsSUFBVUEsS0FBSyxDQUFDQyxNQUFOLEdBQWEsQ0FBM0IsRUFDSSxPQUFPLElBQVA7QUFDSiwwQkFBTztBQUFLLFFBQUEsU0FBUyxFQUFFLHFCQUFoQjtBQUFBLGtCQUF3Q0Q7QUFBeEMsUUFBUDtBQUNIOzs7V0FHRCxrQkFBUztBQUFBLHdCQU1ELEtBQUtGLEtBTko7QUFBQSxVQUVESSxjQUZDLGVBRURBLGNBRkM7QUFBQSxVQUdEQyxTQUhDLGVBR0RBLFNBSEM7QUFBQSxVQUlEQyxPQUpDLGVBSURBLE9BSkM7QUFBQSxVQUtEQyxLQUxDLGVBS0RBLEtBTEM7QUFRTCxVQUFNQyxPQUFPLEdBQUcsNEJBQ1osdUJBRFksRUFFWkgsU0FGWSxDQUFoQjtBQUtBLDBCQUNJO0FBQUEsK0JBQ0k7QUFDSSxVQUFBLFNBQVMsRUFBRUcsT0FEZjtBQUVJLFVBQUEsT0FBTyxFQUFFRixPQUZiO0FBQUEscUJBSUtDLEtBQUssaUJBQUk7QUFBTyxZQUFBLFNBQVMsRUFBRUgsY0FBbEI7QUFBQSxzQkFBbUNHO0FBQW5DLFlBSmQsRUFLSyxLQUFLRSxXQUFMLEVBTEw7QUFBQTtBQURKLFFBREo7QUFXSDs7OztFQXhDb0JDLEtBQUssQ0FBQ0MsUzs7QUEyQy9CWixVQUFVLENBQUNhLEtBQVgsR0FBbUIsb0NBQW1CLE9BQW5CLENBQW5CO0FBRUFiLFVBQVUsQ0FBQ2MsWUFBWCxHQUEwQjtBQUN0QlIsRUFBQUEsU0FBUyxFQUFFLEVBRFc7QUFFdEJDLEVBQUFBLE9BQU8sRUFBRTtBQUFBLFdBQU0sS0FBSyxDQUFYO0FBQUE7QUFGYSxDQUExQjtBQUtBUCxVQUFVLENBQUNlLFNBQVgsR0FBdUI7QUFDbkJQLEVBQUFBLEtBQUssRUFBRU8sc0JBQVVDLE1BREU7QUFFbkJWLEVBQUFBLFNBQVMsRUFBRVMsc0JBQVVFLE1BRkY7QUFHbkJaLEVBQUFBLGNBQWMsRUFBRVUsc0JBQVVFLE1BSFA7QUFJbkJWLEVBQUFBLE9BQU8sRUFBRVEsc0JBQVVHO0FBSkEsQ0FBdkI7ZUFPZWxCLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgZmluZEJ5VHlwZSwge2NyZWF0ZVN1YkNvbXBvbmVudH0gZnJvbSBcIi4uL3V0aWxzL2ZpbmRCeVR5cGVcIjtcclxuXHJcbmNsYXNzIExhYmVsVmFsdWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclZhbHVlKCl7XHJcbiAgICAgICAgY29uc3Qge2NoaWxkcmVufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBcIlZhbHVlXCIpO1xyXG5cclxuICAgICAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLmxlbmd0aDwxKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wibGFiZWwtdmFsdWUtY29udGVudFwifT57dmFsdWV9PC9kaXY+XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lLFxyXG4gICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgIG9uQ2xpY2ssXHJcbiAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICBcImxhYmVsLXZhbHVlLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2xhYmVsICYmIDxsYWJlbCBjbGFzc05hbWU9e2xhYmVsQ2xhc3NOYW1lfT57bGFiZWx9PC9sYWJlbD59XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVmFsdWUoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbkxhYmVsVmFsdWUuVmFsdWUgPSBjcmVhdGVTdWJDb21wb25lbnQoXCJWYWx1ZVwiKTtcclxuXHJcbkxhYmVsVmFsdWUuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lOiB7fSxcclxuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQgMFxyXG59XHJcblxyXG5MYWJlbFZhbHVlLnByb3BUeXBlcyA9IHtcclxuICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgbGFiZWxDbGFzc05hbWU6IHByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBvbkNsaWNrOiBwcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYWJlbFZhbHVlIl19