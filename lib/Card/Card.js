"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames2 = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _Preloader = _interopRequireDefault(require("./Preloader"));

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

var Card = /*#__PURE__*/function (_Component) {
  _inherits(Card, _Component);

  var _super = _createSuper(Card);

  function Card(props) {
    _classCallCheck(this, Card);

    return _super.call(this, props);
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          vertical = _this$props.vertical,
          loading = _this$props.loading,
          customStyles = _this$props.customStyles,
          size = _this$props.size;
      if (loading) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Preloader["default"], {});
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames2["default"])(_defineProperty({
            "swf-card": true,
            "vertical": vertical
          }, "--".concat(size), true)),
          style: customStyles,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
            children: _react.Children.only(this.props.children)
          })
        })
      });
    }
  }]);

  return Card;
}(_react.Component);

Card.propTypes = {
  vertical: _propTypes["default"].bool,
  loading: _propTypes["default"].bool,
  customStyles: _propTypes["default"].object,
  size: _propTypes["default"].oneOf(["s", "m", "l"]),
  dispatch: _propTypes["default"].func
};
var _default = Card;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXJkL0NhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwidmVydGljYWwiLCJsb2FkaW5nIiwiY3VzdG9tU3R5bGVzIiwic2l6ZSIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYm9vbCIsIm9iamVjdCIsIm9uZU9mIiwiZGlzcGF0Y2giLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNQSxJOzs7OztBQUNMLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1pBLEtBRFk7QUFFbEI7Ozs7V0FFRCxrQkFBUztBQUFBLHdCQUMwQyxLQUFLQSxLQUQvQztBQUFBLFVBQ0FDLFFBREEsZUFDQUEsUUFEQTtBQUFBLFVBQ1VDLE9BRFYsZUFDVUEsT0FEVjtBQUFBLFVBQ21CQyxZQURuQixlQUNtQkEsWUFEbkI7QUFBQSxVQUNpQ0MsSUFEakMsZUFDaUNBLElBRGpDO0FBR1IsVUFBSUYsT0FBSixFQUFhLG9CQUFPLHFCQUFDLHFCQUFELEtBQVA7QUFFYiwwQkFDQztBQUFBLCtCQUNDO0FBQUssVUFBQSxTQUFTLEVBQ2I7QUFDQyx3QkFBWSxJQURiO0FBRUMsd0JBQVlEO0FBRmIseUJBR09HLElBSFAsR0FHZ0IsSUFIaEIsRUFERDtBQU1FLFVBQUEsS0FBSyxFQUFFRCxZQU5UO0FBQUEsaUNBT0MscUJBQUMsZUFBRDtBQUFBLHNCQUFXRSxnQkFBU0MsSUFBVCxDQUFjLEtBQUtOLEtBQUwsQ0FBV08sUUFBekI7QUFBWDtBQVBEO0FBREQsUUFERDtBQWFBOzs7O0VBdkJpQkMsZ0I7O0FBMEJuQlQsSUFBSSxDQUFDVSxTQUFMLEdBQWlCO0FBQ2hCUixFQUFBQSxRQUFRLEVBQUVRLHNCQUFVQyxJQURKO0FBRWhCUixFQUFBQSxPQUFPLEVBQUVPLHNCQUFVQyxJQUZIO0FBR2hCUCxFQUFBQSxZQUFZLEVBQUVNLHNCQUFVRSxNQUhSO0FBSWhCUCxFQUFBQSxJQUFJLEVBQUVLLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWhCLENBSlU7QUFLaEJDLEVBQUFBLFFBQVEsRUFBRUosc0JBQVVLO0FBTEosQ0FBakI7ZUFRZWYsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHtDb21wb25lbnQsIEZyYWdtZW50LCBDaGlsZHJlbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJkUHJlbG9hZGVyIGZyb20gXCIuL1ByZWxvYWRlclwiO1xyXG5cclxuXHJcbmNsYXNzIENhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHZlcnRpY2FsLCBsb2FkaW5nLCBjdXN0b21TdHlsZXMsIHNpemUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0aWYgKGxvYWRpbmcpIHJldHVybiA8Q2FyZFByZWxvYWRlci8+XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17XHJcblx0XHRcdFx0XHRjbGFzc25hbWVzKHtcclxuXHRcdFx0XHRcdFx0XCJzd2YtY2FyZFwiOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcInZlcnRpY2FsXCI6IHZlcnRpY2FsLFxyXG5cdFx0XHRcdFx0XHRbYC0tJHtzaXplfWBdOiB0cnVlXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0gc3R5bGU9e2N1c3RvbVN0eWxlc30+XHJcblx0XHRcdFx0XHQ8RnJhZ21lbnQ+e0NoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbil9PC9GcmFnbWVudD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC8+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5DYXJkLnByb3BUeXBlcyA9IHtcclxuXHR2ZXJ0aWNhbDogcHJvcFR5cGVzLmJvb2wsXHJcblx0bG9hZGluZzogcHJvcFR5cGVzLmJvb2wsXHJcblx0Y3VzdG9tU3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxyXG5cdHNpemU6IHByb3BUeXBlcy5vbmVPZihbXCJzXCIsIFwibVwiLCBcImxcIl0pLFxyXG5cdGRpc3BhdGNoOiBwcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkIl19