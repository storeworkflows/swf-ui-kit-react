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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QaWxsL1BpbGwuanMiXSwibmFtZXMiOlsiUGlsbCIsInByb3BzIiwiY2FuRGlzbWlzcyIsImljb24iLCJjbGFzc05hbWVzIiwiaW1hZ2VTcmMiLCJsYWJlbCIsIm91dGxpbmUiLCJzaXplIiwiY2xpY2thYmxlIiwiY29sb3IiLCJkZWxldGVJY29uIiwib25EZWxldGUiLCJkaXNhYmxlZCIsInN0eWxlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEk7Ozs7O0FBQ0YsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDVEEsS0FEUztBQUVsQjs7OztXQUVELGtCQUFTO0FBQUE7O0FBQUEsd0JBY0QsS0FBS0EsS0FkSjtBQUFBLFVBRURDLFVBRkMsZUFFREEsVUFGQztBQUFBLFVBR0RDLElBSEMsZUFHREEsSUFIQztBQUFBLFVBSURDLFVBSkMsZUFJREEsVUFKQztBQUFBLFVBS0RDLFFBTEMsZUFLREEsUUFMQztBQUFBLFVBTURDLEtBTkMsZUFNREEsS0FOQztBQUFBLFVBT0RDLE9BUEMsZUFPREEsT0FQQztBQUFBLFVBUURDLElBUkMsZUFRREEsSUFSQztBQUFBLFVBU0RDLFNBVEMsZUFTREEsU0FUQztBQUFBLFVBVURDLEtBVkMsZUFVREEsS0FWQztBQUFBLFVBV0RDLFVBWEMsZUFXREEsVUFYQztBQUFBLFVBWURDLFFBWkMsZUFZREEsUUFaQztBQUFBLFVBYURDLFFBYkMsZUFhREEsUUFiQztBQWlCTCwwQkFDSTtBQUFBLGdDQUNJO0FBQU8sVUFBQSxJQUFJLEVBQUMsVUFBWjtBQUFBLG9CQUF3QkM7QUFBeEIsVUFESixlQUVJO0FBQUssVUFBQSxTQUFTLEVBQUU7QUFDWixvQkFBUSxJQURJO0FBRVosMEJBQWNELFFBRkY7QUFHWiwyQkFBZUosU0FBUyxJQUFJLENBQUNJLFFBSGpCO0FBSVosMEJBQWNOO0FBSkYsc0RBS05DLElBTE0sR0FLRyxJQUxILDRDQU1ORSxLQU5NLEdBTUksSUFOSixnQkFBaEI7QUFBQSxpQ0FRSTtBQUFNLFlBQUEsU0FBUyxFQUFFO0FBQ2IsNEJBQWM7QUFERCwyQkFFUEYsSUFGTyxHQUVFLElBRkYsRUFBakI7QUFBQSxzQkFHS0Y7QUFITDtBQVJKLFVBRko7QUFBQSxRQURKO0FBbUJIOzs7O0VBekNjUyxLQUFLLENBQUNDLFM7O0FBNEN6QmhCLElBQUksQ0FBQ2lCLFlBQUwsR0FBb0I7QUFDaEJmLEVBQUFBLFVBQVUsRUFBRSxLQURJO0FBRWhCVyxFQUFBQSxRQUFRLEVBQUUsS0FGTTtBQUdoQlYsRUFBQUEsSUFBSSxFQUFFLElBSFU7QUFJaEJFLEVBQUFBLFFBQVEsRUFBRSxJQUpNO0FBS2hCQyxFQUFBQSxLQUFLLEVBQUUsTUFMUztBQU1oQkMsRUFBQUEsT0FBTyxFQUFFLEtBTk87QUFPaEJDLEVBQUFBLElBQUksRUFBRSxJQVBVO0FBUWhCSixFQUFBQSxVQUFVLEVBQUUsRUFSSTtBQVNoQkssRUFBQUEsU0FBUyxFQUFFLEtBVEs7QUFVaEJDLEVBQUFBLEtBQUssRUFBRSxTQVZTO0FBV2hCQyxFQUFBQSxVQUFVLEVBQUUsSUFYSTtBQVloQkMsRUFBQUEsUUFBUSxFQUFFO0FBQUEsV0FBTSxLQUFLLENBQVg7QUFBQTtBQVpNLENBQXBCO0FBZUFaLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUI7QUFDYmhCLEVBQUFBLFVBQVUsRUFBRWlCLHNCQUFVQyxJQURUO0FBRWJqQixFQUFBQSxJQUFJLEVBQUVnQixzQkFBVUUsTUFGSDtBQUdiaEIsRUFBQUEsUUFBUSxFQUFFYyxzQkFBVUUsTUFIUDtBQUliUixFQUFBQSxRQUFRLEVBQUVNLHNCQUFVQyxJQUpQO0FBS2JkLEVBQUFBLEtBQUssRUFBRWEsc0JBQVVFLE1BTEo7QUFNYmQsRUFBQUEsT0FBTyxFQUFFWSxzQkFBVUMsSUFOTjtBQU9iWixFQUFBQSxJQUFJLEVBQUVXLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLENBQWhCLENBUE87QUFRYmxCLEVBQUFBLFVBQVUsRUFBRWUsc0JBQVVFLE1BUlQ7QUFTYlosRUFBQUEsU0FBUyxFQUFFVSxzQkFBVUMsSUFUUjtBQVViVixFQUFBQSxLQUFLLEVBQUVTLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsVUFBdkIsQ0FBaEIsQ0FWTTtBQVdiWCxFQUFBQSxVQUFVLEVBQUVRLHNCQUFVRSxNQVhUO0FBWWJULEVBQUFBLFFBQVEsRUFBRU8sc0JBQVVJO0FBWlAsQ0FBakI7ZUFlZXZCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5cbmNsYXNzIFBpbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNhbkRpc21pc3MsXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgY2xhc3NOYW1lcyxcbiAgICAgICAgICAgIGltYWdlU3JjLFxuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBvdXRsaW5lLFxuICAgICAgICAgICAgc2l6ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZSxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgZGVsZXRlSWNvbixcbiAgICAgICAgICAgIG9uRGVsZXRlLFxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgXCJwaWxsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiLS1kaXNhYmxlZFwiOiBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgXCItLWNsaWNrYWJsZVwiOiBjbGlja2FibGUgJiYgIWRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICBcIi0tb3V0bGluZWRcIjogb3V0bGluZSxcbiAgICAgICAgICAgICAgICAgICAgW2AtLSR7c2l6ZX1gXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgW2AtLSR7Y29sb3J9YF06IHRydWVcbiAgICAgICAgICAgICAgICB9KX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInBpbGwtbGFiZWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgLS0ke3NpemV9YF06IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSl9PntsYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cblxuICAgICAgICApXG4gICAgfVxufVxuXG5QaWxsLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjYW5EaXNtaXNzOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaWNvbjogbnVsbCxcbiAgICBpbWFnZVNyYzogbnVsbCxcbiAgICBsYWJlbDogXCJUZXN0XCIsXG4gICAgb3V0bGluZTogZmFsc2UsXG4gICAgc2l6ZTogXCJtZFwiLFxuICAgIGNsYXNzTmFtZXM6IFwiXCIsXG4gICAgY2xpY2thYmxlOiBmYWxzZSxcbiAgICBjb2xvcjogXCJkZWZhdWx0XCIsXG4gICAgZGVsZXRlSWNvbjogbnVsbCxcbiAgICBvbkRlbGV0ZTogKCkgPT4gdm9pZCAwXG59XG5cblBpbGwucHJvcFR5cGVzID0ge1xuICAgIGNhbkRpc21pc3M6IFByb3BUeXBlcy5ib29sLFxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW1hZ2VTcmM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG91dGxpbmU6IFByb3BUeXBlcy5ib29sLFxuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJzbVwiLCBcIm1kXCIsIFwieGxcIl0pLFxuICAgIGNsYXNzTmFtZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xpY2thYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcImRlZmF1bHRcIiwgXCJwcmltYXJ5XCIsIFwibmVnYXRpdmVcIl0pLFxuICAgIGRlbGV0ZUljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25EZWxldGU6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBpbGwiXX0=