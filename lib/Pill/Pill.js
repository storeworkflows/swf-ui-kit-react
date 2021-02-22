"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Pill = /*#__PURE__*/function (_React$Component) {
  _inherits(Pill, _React$Component);

  var _super = _createSuper(Pill);

  function Pill(props) {
    _classCallCheck(this, Pill);

    return _super.call(this, props);
  }

  _createClass(Pill, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          canDismiss = _this$props.canDismiss,
          icon = _this$props.icon,
          classNames = _this$props.classNames,
          imageSrc = _this$props.imageSrc,
          label = _this$props.label,
          outline = _this$props.outline,
          size = _this$props.size,
          clickable = _this$props.clickable,
          color = _this$props.color,
          deleteIcon = _this$props.deleteIcon,
          onDelete = _this$props.onDelete,
          disabled = _this$props.disabled;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames3["default"])((_classnames = {
            "pill": true,
            "--disabled": disabled,
            "--clickable": clickable && !disabled,
            "--outlined": outline
          }, _defineProperty(_classnames, "--".concat(size), true), _defineProperty(_classnames, "--".concat(color), true), _classnames)),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: (0, _classnames3["default"])(_defineProperty({
              "pill-label": true
            }, "--".concat(size), true)),
            children: label
          })
        })]
      });
    }
  }]);

  return Pill;
}(React.Component);

Pill.defaultProps = {
  canDismiss: false,
  disabled: false,
  icon: null,
  imageSrc: null,
  label: "Test",
  outline: false,
  size: "md",
  classNames: "",
  clickable: false,
  color: "default",
  deleteIcon: null,
  onDelete: function onDelete() {
    return void 0;
  }
};
Pill.propTypes = {
  canDismiss: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
  imageSrc: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  outline: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["sm", "md", "xl"]),
  classNames: _propTypes["default"].string,
  clickable: _propTypes["default"].bool,
  color: _propTypes["default"].oneOf(["default", "primary", "negative"]),
  deleteIcon: _propTypes["default"].string,
  onDelete: _propTypes["default"].func
};
var _default = Pill;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QaWxsL1BpbGwuanMiXSwibmFtZXMiOlsiUGlsbCIsInByb3BzIiwiY2FuRGlzbWlzcyIsImljb24iLCJjbGFzc05hbWVzIiwiaW1hZ2VTcmMiLCJsYWJlbCIsIm91dGxpbmUiLCJzaXplIiwiY2xpY2thYmxlIiwiY29sb3IiLCJkZWxldGVJY29uIiwib25EZWxldGUiLCJkaXNhYmxlZCIsInN0eWxlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEk7Ozs7O0FBQ0YsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDVEEsS0FEUztBQUVsQjs7OztXQUVELGtCQUFTO0FBQUE7O0FBQUEsd0JBY0QsS0FBS0EsS0FkSjtBQUFBLFVBRURDLFVBRkMsZUFFREEsVUFGQztBQUFBLFVBR0RDLElBSEMsZUFHREEsSUFIQztBQUFBLFVBSURDLFVBSkMsZUFJREEsVUFKQztBQUFBLFVBS0RDLFFBTEMsZUFLREEsUUFMQztBQUFBLFVBTURDLEtBTkMsZUFNREEsS0FOQztBQUFBLFVBT0RDLE9BUEMsZUFPREEsT0FQQztBQUFBLFVBUURDLElBUkMsZUFRREEsSUFSQztBQUFBLFVBU0RDLFNBVEMsZUFTREEsU0FUQztBQUFBLFVBVURDLEtBVkMsZUFVREEsS0FWQztBQUFBLFVBV0RDLFVBWEMsZUFXREEsVUFYQztBQUFBLFVBWURDLFFBWkMsZUFZREEsUUFaQztBQUFBLFVBYURDLFFBYkMsZUFhREEsUUFiQztBQWlCTCwwQkFDSTtBQUFBLGdDQUNJO0FBQU8sVUFBQSxJQUFJLEVBQUMsVUFBWjtBQUFBLG9CQUF3QkM7QUFBeEIsVUFESixlQUVJO0FBQUssVUFBQSxTQUFTLEVBQUU7QUFDWixvQkFBUSxJQURJO0FBRVosMEJBQWNELFFBRkY7QUFHWiwyQkFBZUosU0FBUyxJQUFJLENBQUNJLFFBSGpCO0FBSVosMEJBQWNOO0FBSkYsc0RBS05DLElBTE0sR0FLRyxJQUxILDRDQU1ORSxLQU5NLEdBTUksSUFOSixnQkFBaEI7QUFBQSxpQ0FRSTtBQUFNLFlBQUEsU0FBUyxFQUFFO0FBQ2IsNEJBQWM7QUFERCwyQkFFUEYsSUFGTyxHQUVFLElBRkYsRUFBakI7QUFBQSxzQkFHS0Y7QUFITDtBQVJKLFVBRko7QUFBQSxRQURKO0FBbUJIOzs7O0VBekNjUyxLQUFLLENBQUNDLFM7O0FBNEN6QmhCLElBQUksQ0FBQ2lCLFlBQUwsR0FBb0I7QUFDaEJmLEVBQUFBLFVBQVUsRUFBRSxLQURJO0FBRWhCVyxFQUFBQSxRQUFRLEVBQUUsS0FGTTtBQUdoQlYsRUFBQUEsSUFBSSxFQUFFLElBSFU7QUFJaEJFLEVBQUFBLFFBQVEsRUFBRSxJQUpNO0FBS2hCQyxFQUFBQSxLQUFLLEVBQUUsTUFMUztBQU1oQkMsRUFBQUEsT0FBTyxFQUFFLEtBTk87QUFPaEJDLEVBQUFBLElBQUksRUFBRSxJQVBVO0FBUWhCSixFQUFBQSxVQUFVLEVBQUUsRUFSSTtBQVNoQkssRUFBQUEsU0FBUyxFQUFFLEtBVEs7QUFVaEJDLEVBQUFBLEtBQUssRUFBRSxTQVZTO0FBV2hCQyxFQUFBQSxVQUFVLEVBQUUsSUFYSTtBQVloQkMsRUFBQUEsUUFBUSxFQUFFO0FBQUEsV0FBTSxLQUFLLENBQVg7QUFBQTtBQVpNLENBQXBCO0FBZUFaLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUI7QUFDYmhCLEVBQUFBLFVBQVUsRUFBRWlCLHNCQUFVQyxJQURUO0FBRWJqQixFQUFBQSxJQUFJLEVBQUVnQixzQkFBVUUsTUFGSDtBQUdiaEIsRUFBQUEsUUFBUSxFQUFFYyxzQkFBVUUsTUFIUDtBQUliUixFQUFBQSxRQUFRLEVBQUVNLHNCQUFVQyxJQUpQO0FBS2JkLEVBQUFBLEtBQUssRUFBRWEsc0JBQVVFLE1BTEo7QUFNYmQsRUFBQUEsT0FBTyxFQUFFWSxzQkFBVUMsSUFOTjtBQU9iWixFQUFBQSxJQUFJLEVBQUVXLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLENBQWhCLENBUE87QUFRYmxCLEVBQUFBLFVBQVUsRUFBRWUsc0JBQVVFLE1BUlQ7QUFTYlosRUFBQUEsU0FBUyxFQUFFVSxzQkFBVUMsSUFUUjtBQVViVixFQUFBQSxLQUFLLEVBQUVTLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsVUFBdkIsQ0FBaEIsQ0FWTTtBQVdiWCxFQUFBQSxVQUFVLEVBQUVRLHNCQUFVRSxNQVhUO0FBWWJULEVBQUFBLFFBQVEsRUFBRU8sc0JBQVVJO0FBWlAsQ0FBakI7ZUFlZXZCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XHJcblxyXG5jbGFzcyBQaWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGNhbkRpc21pc3MsXHJcbiAgICAgICAgICAgIGljb24sXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXMsXHJcbiAgICAgICAgICAgIGltYWdlU3JjLFxyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgb3V0bGluZSxcclxuICAgICAgICAgICAgc2l6ZSxcclxuICAgICAgICAgICAgY2xpY2thYmxlLFxyXG4gICAgICAgICAgICBjb2xvcixcclxuICAgICAgICAgICAgZGVsZXRlSWNvbixcclxuICAgICAgICAgICAgb25EZWxldGUsXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICBcInBpbGxcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBcIi0tZGlzYWJsZWRcIjogZGlzYWJsZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCItLWNsaWNrYWJsZVwiOiBjbGlja2FibGUgJiYgIWRpc2FibGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLS1vdXRsaW5lZFwiOiBvdXRsaW5lLFxyXG4gICAgICAgICAgICAgICAgICAgIFtgLS0ke3NpemV9YF06IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgW2AtLSR7Y29sb3J9YF06IHRydWVcclxuICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBpbGwtbGFiZWxcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7c2l6ZX1gXTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfT57bGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblBpbGwuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2FuRGlzbWlzczogZmFsc2UsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBpY29uOiBudWxsLFxyXG4gICAgaW1hZ2VTcmM6IG51bGwsXHJcbiAgICBsYWJlbDogXCJUZXN0XCIsXHJcbiAgICBvdXRsaW5lOiBmYWxzZSxcclxuICAgIHNpemU6IFwibWRcIixcclxuICAgIGNsYXNzTmFtZXM6IFwiXCIsXHJcbiAgICBjbGlja2FibGU6IGZhbHNlLFxyXG4gICAgY29sb3I6IFwiZGVmYXVsdFwiLFxyXG4gICAgZGVsZXRlSWNvbjogbnVsbCxcclxuICAgIG9uRGVsZXRlOiAoKSA9PiB2b2lkIDBcclxufVxyXG5cclxuUGlsbC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjYW5EaXNtaXNzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpbWFnZVNyYzogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb3V0bGluZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wic21cIiwgXCJtZFwiLCBcInhsXCJdKSxcclxuICAgIGNsYXNzTmFtZXM6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjbGlja2FibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXCJkZWZhdWx0XCIsIFwicHJpbWFyeVwiLCBcIm5lZ2F0aXZlXCJdKSxcclxuICAgIGRlbGV0ZUljb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbkRlbGV0ZTogUHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGlsbCJdfQ==