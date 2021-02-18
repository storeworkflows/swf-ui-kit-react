"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames2 = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _dispatchDecorator = require("../utils/dispatchDecorator");

var _react = require("react");

var _Preloader = _interopRequireDefault(require("./Preloader"));

var _jsxRuntime = require("react/jsx-runtime");

var _dec, _class;

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

var Card = (_dec = (0, _dispatchDecorator.dispatch)(), _dec(_class = /*#__PURE__*/function (_Component) {
  _inherits(Card, _Component);

  var _super = _createSuper(Card);

  function Card(props) {
    _classCallCheck(this, Card);

    return _super.call(this, props);
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          vertical = _this$props.vertical,
          loading = _this$props.loading,
          customStyles = _this$props.customStyles,
          size = _this$props.size;
      if (loading) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Preloader["default"], {});
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames2["default"])(_defineProperty({
            "swf-card": true,
            "vertical": vertical
          }, "--".concat(size), true)),
          style: customStyles,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: function onClick() {
              return _this.props.dispatch("TEST_DISPATCH", {
                Log: "adadsdasd"
              });
            },
            children: "Dispatch"
          })
        })]
      });
    }
  }]);

  return Card;
}(_react.Component)) || _class);
Card.propTypes = {
  vertical: _propTypes["default"].bool,
  loading: _propTypes["default"].bool,
  customStyles: _propTypes["default"].object,
  size: _propTypes["default"].oneOf(["s", "m", "l"]),
  dispatch: _propTypes["default"].func
};
var _default = Card;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXJkL0NhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwidmVydGljYWwiLCJsb2FkaW5nIiwiY3VzdG9tU3R5bGVzIiwic2l6ZSIsInN0eWxlcyIsImRpc3BhdGNoIiwiTG9nIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYm9vbCIsIm9iamVjdCIsIm9uZU9mIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNQSxJLFdBREwsa0M7Ozs7O0FBRUEsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDWkEsS0FEWTtBQUVsQjs7OztXQUVELGtCQUFTO0FBQUE7O0FBQUEsd0JBQzBDLEtBQUtBLEtBRC9DO0FBQUEsVUFDQUMsUUFEQSxlQUNBQSxRQURBO0FBQUEsVUFDVUMsT0FEVixlQUNVQSxPQURWO0FBQUEsVUFDbUJDLFlBRG5CLGVBQ21CQSxZQURuQjtBQUFBLFVBQ2lDQyxJQURqQyxlQUNpQ0EsSUFEakM7QUFHUixVQUFJRixPQUFKLEVBQWEsb0JBQU8scUJBQUMscUJBQUQsS0FBUDtBQUViLDBCQUNDO0FBQUEsZ0NBQ0M7QUFBTyxVQUFBLElBQUksRUFBQyxVQUFaO0FBQUEsb0JBQXdCRztBQUF4QixVQURELGVBRUM7QUFBSyxVQUFBLFNBQVMsRUFDYjtBQUNDLHdCQUFZLElBRGI7QUFFQyx3QkFBWUo7QUFGYix5QkFHT0csSUFIUCxHQUdnQixJQUhoQixFQUREO0FBTUUsVUFBQSxLQUFLLEVBQUVELFlBTlQ7QUFBQSxpQ0FPQztBQUFRLFlBQUEsT0FBTyxFQUFFO0FBQUEscUJBQU0sS0FBSSxDQUFDSCxLQUFMLENBQVdNLFFBQVgsQ0FBb0IsZUFBcEIsRUFBcUM7QUFBQ0MsZ0JBQUFBLEdBQUcsRUFBRTtBQUFOLGVBQXJDLENBQU47QUFBQSxhQUFqQjtBQUFBO0FBQUE7QUFQRCxVQUZEO0FBQUEsUUFERDtBQWNBOzs7O0VBeEJpQkMsZ0I7QUEyQm5CVCxJQUFJLENBQUNVLFNBQUwsR0FBaUI7QUFDaEJSLEVBQUFBLFFBQVEsRUFBRVEsc0JBQVVDLElBREo7QUFFaEJSLEVBQUFBLE9BQU8sRUFBRU8sc0JBQVVDLElBRkg7QUFHaEJQLEVBQUFBLFlBQVksRUFBRU0sc0JBQVVFLE1BSFI7QUFJaEJQLEVBQUFBLElBQUksRUFBRUssc0JBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBaEIsQ0FKVTtBQUtoQk4sRUFBQUEsUUFBUSxFQUFFRyxzQkFBVUk7QUFMSixDQUFqQjtlQVFlZCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcbmltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gXCIuLi91dGlscy9kaXNwYXRjaERlY29yYXRvclwiXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2FyZFByZWxvYWRlciBmcm9tIFwiLi9QcmVsb2FkZXJcIjtcblxuQGRpc3BhdGNoKClcbmNsYXNzIENhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHZlcnRpY2FsLCBsb2FkaW5nLCBjdXN0b21TdHlsZXMsIHNpemUgfSA9IHRoaXMucHJvcHM7XG5cblx0XHRpZiAobG9hZGluZykgcmV0dXJuIDxDYXJkUHJlbG9hZGVyLz5cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0Y2xhc3NuYW1lcyh7XG5cdFx0XHRcdFx0XHRcInN3Zi1jYXJkXCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcInZlcnRpY2FsXCI6IHZlcnRpY2FsLFxuXHRcdFx0XHRcdFx0W2AtLSR7c2l6ZX1gXTogdHJ1ZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0gc3R5bGU9e2N1c3RvbVN0eWxlc30+XG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRpc3BhdGNoKFwiVEVTVF9ESVNQQVRDSFwiLCB7TG9nOiBcImFkYWRzZGFzZFwifSl9PkRpc3BhdGNoPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC8+XG5cdFx0KVxuXHR9XG59XG5cbkNhcmQucHJvcFR5cGVzID0ge1xuXHR2ZXJ0aWNhbDogcHJvcFR5cGVzLmJvb2wsXG5cdGxvYWRpbmc6IHByb3BUeXBlcy5ib29sLFxuXHRjdXN0b21TdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXG5cdHNpemU6IHByb3BUeXBlcy5vbmVPZihbXCJzXCIsIFwibVwiLCBcImxcIl0pLFxuXHRkaXNwYXRjaDogcHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZCJdfQ==