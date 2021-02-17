"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  customSize: 16,
  color: ""
};
Icon.propTypes = {
  icon: _propTypes["default"].string.isRequired,
  size: _propTypes["default"].oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  customSize: _propTypes["default"].number,
  color: _propTypes["default"].string
};
var _default = Icon;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uL0ljb24uanMiXSwibmFtZXMiOlsiSWNvbiIsInByb3BzIiwic2l6ZSIsImN1c3RvbVNpemUiLCJfX2h0bWwiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImljb24iLCJjb2xvciIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvbmVPZiIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNQSxJOzs7Ozs7Ozs7Ozs7O1dBRUosa0JBQVU7QUFBQSx3QkFDbUIsS0FBS0MsS0FEeEI7QUFBQSxVQUNEQyxJQURDLGVBQ0RBLElBREM7QUFBQSxVQUNLQyxVQURMLGVBQ0tBLFVBREw7QUFHUiwwQkFDSTtBQUNJLFFBQUEsdUJBQXVCLEVBQUU7QUFBQ0MsVUFBQUEsTUFBTSxFQUFFLHdCQUFZLEtBQUtILEtBQWpCO0FBQVQsU0FEN0I7QUFFSSxRQUFBLEtBQUssRUFBRSxvQkFBUUMsSUFBUixFQUFjQyxVQUFkO0FBRlgsUUFESjtBQU1EOzs7O0VBWGdCRSxLQUFLLENBQUNDLFM7O0FBY3pCTixJQUFJLENBQUNPLFlBQUwsR0FBb0I7QUFDbEJDLEVBQUFBLElBQUksRUFBRSxFQURZO0FBRWxCTixFQUFBQSxJQUFJLEVBQUUsSUFGWTtBQUdsQkMsRUFBQUEsVUFBVSxFQUFFLEVBSE07QUFJbEJNLEVBQUFBLEtBQUssRUFBRTtBQUpXLENBQXBCO0FBT0FULElBQUksQ0FBQ1UsU0FBTCxHQUFpQjtBQUNmRixFQUFBQSxJQUFJLEVBQUVFLHNCQUFVQyxNQUFWLENBQWlCQyxVQURSO0FBRWZWLEVBQUFBLElBQUksRUFBRVEsc0JBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0IsSUFBeEIsRUFBOEIsS0FBOUIsQ0FBaEIsQ0FGUztBQUdmVixFQUFBQSxVQUFVLEVBQUVPLHNCQUFVSSxNQUhQO0FBSWZMLEVBQUFBLEtBQUssRUFBRUMsc0JBQVVDO0FBSkYsQ0FBakI7ZUFPZVgsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge2dlbmVyYXRlU3ZnLCBzZXRTaXplfSBmcm9tICcuL3V0aWxzJ1xuXG5cbmNsYXNzIEljb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge3NpemUsIGN1c3RvbVNpemV9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogZ2VuZXJhdGVTdmcodGhpcy5wcm9wcykgfX1cbiAgICAgICAgICAgIHN0eWxlPXtzZXRTaXplKHNpemUsIGN1c3RvbVNpemUpfVxuICAgICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGljb246IFwiXCIsXG4gIHNpemU6ICdtZCcsXG4gIGN1c3RvbVNpemU6IDE2LFxuICBjb2xvcjogXCJcIlxufVxuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgaWNvbjogcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzaXplOiBwcm9wVHlwZXMub25lT2YoWyd4cycsJ3NtJywgJ21kJywgJ2xnJywgJ3hsJywgJ3h4bCddKSxcbiAgY3VzdG9tU2l6ZTogcHJvcFR5cGVzLm51bWJlcixcbiAgY29sb3I6IHByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvblxuIl19