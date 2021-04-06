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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXJkL0NhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwidmVydGljYWwiLCJsb2FkaW5nIiwiY3VzdG9tU3R5bGVzIiwic2l6ZSIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYm9vbCIsIm9iamVjdCIsIm9uZU9mIiwiZGlzcGF0Y2giLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNQSxJOzs7OztBQUNMLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1pBLEtBRFk7QUFFbEI7Ozs7V0FFRCxrQkFBUztBQUFBLHdCQUMwQyxLQUFLQSxLQUQvQztBQUFBLFVBQ0FDLFFBREEsZUFDQUEsUUFEQTtBQUFBLFVBQ1VDLE9BRFYsZUFDVUEsT0FEVjtBQUFBLFVBQ21CQyxZQURuQixlQUNtQkEsWUFEbkI7QUFBQSxVQUNpQ0MsSUFEakMsZUFDaUNBLElBRGpDO0FBR1IsVUFBSUYsT0FBSixFQUFhLG9CQUFPLHFCQUFDLHFCQUFELEtBQVA7QUFFYiwwQkFDQztBQUFBLCtCQUNDO0FBQ0MsVUFBQSxTQUFTLEVBQ1I7QUFDQyx3QkFBWSxJQURiO0FBRUMsd0JBQVlEO0FBRmIseUJBR09HLElBSFAsR0FHZ0IsSUFIaEIsRUFGRjtBQVFFLFVBQUEsS0FBSyxFQUFFRCxZQVJUO0FBQUEsaUNBVUMscUJBQUMsZUFBRDtBQUFBLHNCQUFXRSxnQkFBU0MsSUFBVCxDQUFjLEtBQUtOLEtBQUwsQ0FBV08sUUFBekI7QUFBWDtBQVZEO0FBREQsUUFERDtBQWdCQTs7OztFQTFCaUJDLGdCOztBQTZCbkJULElBQUksQ0FBQ1UsU0FBTCxHQUFpQjtBQUNoQlIsRUFBQUEsUUFBUSxFQUFFUSxzQkFBVUMsSUFESjtBQUVoQlIsRUFBQUEsT0FBTyxFQUFFTyxzQkFBVUMsSUFGSDtBQUdoQlAsRUFBQUEsWUFBWSxFQUFFTSxzQkFBVUUsTUFIUjtBQUloQlAsRUFBQUEsSUFBSSxFQUFFSyxzQkFBVUcsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFoQixDQUpVO0FBS2hCQyxFQUFBQSxRQUFRLEVBQUVKLHNCQUFVSztBQUxKLENBQWpCO2VBUWVmLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBGcmFnbWVudCwgQ2hpbGRyZW59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2FyZFByZWxvYWRlciBmcm9tIFwiLi9QcmVsb2FkZXJcIjtcclxuXHJcblxyXG5jbGFzcyBDYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyB2ZXJ0aWNhbCwgbG9hZGluZywgY3VzdG9tU3R5bGVzLCBzaXplIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdGlmIChsb2FkaW5nKSByZXR1cm4gPENhcmRQcmVsb2FkZXIvPlxyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtcclxuXHRcdFx0XHRcdFx0Y2xhc3NuYW1lcyh7XHJcblx0XHRcdFx0XHRcdFx0XCJzd2YtY2FyZFwiOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFwidmVydGljYWxcIjogdmVydGljYWwsXHJcblx0XHRcdFx0XHRcdFx0W2AtLSR7c2l6ZX1gXTogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0IHN0eWxlPXtjdXN0b21TdHlsZXN9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PEZyYWdtZW50PntDaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pfTwvRnJhZ21lbnQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuQ2FyZC5wcm9wVHlwZXMgPSB7XHJcblx0dmVydGljYWw6IHByb3BUeXBlcy5ib29sLFxyXG5cdGxvYWRpbmc6IHByb3BUeXBlcy5ib29sLFxyXG5cdGN1c3RvbVN0eWxlczogcHJvcFR5cGVzLm9iamVjdCxcclxuXHRzaXplOiBwcm9wVHlwZXMub25lT2YoW1wic1wiLCBcIm1cIiwgXCJsXCJdKSxcclxuXHRkaXNwYXRjaDogcHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZCJdfQ==