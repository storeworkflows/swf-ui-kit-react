"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Icon = /*#__PURE__*/function (_React$Component) {
  _inherits(Icon, _React$Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          size = _this$props.size,
          customSize = _this$props.customSize;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: this.props.className,
        dangerouslySetInnerHTML: {
          __html: (0, _utils.generateSvg)(this.props)
        },
        style: (0, _utils.setSize)(size, customSize)
      });
    }
  }]);

  return Icon;
}(React.Component);

Icon.defaultProps = {
  icon: "",
  size: 'md',
  color: "",
  className: ""
};
Icon.propTypes = {
  icon: _propTypes["default"].string.isRequired,
  size: _propTypes["default"].oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  customSize: _propTypes["default"].number,
  color: _propTypes["default"].string,
  className: _propTypes["default"].string
};
var _default = Icon;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uL0ljb24uanMiXSwibmFtZXMiOlsiSWNvbiIsInByb3BzIiwic2l6ZSIsImN1c3RvbVNpemUiLCJjbGFzc05hbWUiLCJfX2h0bWwiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImljb24iLCJjb2xvciIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvbmVPZiIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7Ozs7Ozs7Ozs7O1dBRUosa0JBQVU7QUFBQSx3QkFDbUIsS0FBS0MsS0FEeEI7QUFBQSxVQUNEQyxJQURDLGVBQ0RBLElBREM7QUFBQSxVQUNLQyxVQURMLGVBQ0tBLFVBREw7QUFHUiwwQkFDSTtBQUNJLFFBQUEsU0FBUyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0csU0FEMUI7QUFFSSxRQUFBLHVCQUF1QixFQUFFO0FBQUNDLFVBQUFBLE1BQU0sRUFBRSx3QkFBWSxLQUFLSixLQUFqQjtBQUFULFNBRjdCO0FBR0ksUUFBQSxLQUFLLEVBQUUsb0JBQVFDLElBQVIsRUFBY0MsVUFBZDtBQUhYLFFBREo7QUFPRDs7OztFQVpnQkcsS0FBSyxDQUFDQyxTOztBQWV6QlAsSUFBSSxDQUFDUSxZQUFMLEdBQW9CO0FBQ2xCQyxFQUFBQSxJQUFJLEVBQUUsRUFEWTtBQUVsQlAsRUFBQUEsSUFBSSxFQUFFLElBRlk7QUFHbEJRLEVBQUFBLEtBQUssRUFBRSxFQUhXO0FBSWxCTixFQUFBQSxTQUFTLEVBQUU7QUFKTyxDQUFwQjtBQU9BSixJQUFJLENBQUNXLFNBQUwsR0FBaUI7QUFDZkYsRUFBQUEsSUFBSSxFQUFFRSxzQkFBVUMsTUFBVixDQUFpQkMsVUFEUjtBQUVmWCxFQUFBQSxJQUFJLEVBQUVTLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLEtBQTlCLENBQWhCLENBRlM7QUFHZlgsRUFBQUEsVUFBVSxFQUFFUSxzQkFBVUksTUFIUDtBQUlmTCxFQUFBQSxLQUFLLEVBQUVDLHNCQUFVQyxNQUpGO0FBS2ZSLEVBQUFBLFNBQVMsRUFBRU8sc0JBQVVDO0FBTE4sQ0FBakI7ZUFRZVosSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQge2dlbmVyYXRlU3ZnLCBzZXRTaXplfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuY2xhc3MgSWNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7c2l6ZSwgY3VzdG9tU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGdlbmVyYXRlU3ZnKHRoaXMucHJvcHMpIH19XHJcbiAgICAgICAgICAgIHN0eWxlPXtzZXRTaXplKHNpemUsIGN1c3RvbVNpemUpfVxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaWNvbjogXCJcIixcclxuICBzaXplOiAnbWQnLFxyXG4gIGNvbG9yOiBcIlwiLFxyXG4gIGNsYXNzTmFtZTogXCJcIlxyXG59XHJcblxyXG5JY29uLnByb3BUeXBlcyA9IHtcclxuICBpY29uOiBwcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc2l6ZTogcHJvcFR5cGVzLm9uZU9mKFsneHMnLCdzbScsICdtZCcsICdsZycsICd4bCcsICd4eGwnXSksXHJcbiAgY3VzdG9tU2l6ZTogcHJvcFR5cGVzLm51bWJlcixcclxuICBjb2xvcjogcHJvcFR5cGVzLnN0cmluZyxcclxuICBjbGFzc05hbWU6IHByb3BUeXBlcy5zdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvblxyXG4iXX0=