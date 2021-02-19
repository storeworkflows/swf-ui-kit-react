"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

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
          className: (0, _classnames2["default"])((_classnames = {
            "pill": true,
            "--clickable": clickable,
            "--outlined": outline,
            "--disabled": disabled
          }, _defineProperty(_classnames, "--".concat(size), true), _defineProperty(_classnames, "--".concat(color), true), _classnames)),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "pill-label",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QaWxsL1BpbGwuanMiXSwibmFtZXMiOlsiUGlsbCIsInByb3BzIiwiY2FuRGlzbWlzcyIsImljb24iLCJjbGFzc05hbWVzIiwiaW1hZ2VTcmMiLCJsYWJlbCIsIm91dGxpbmUiLCJzaXplIiwiY2xpY2thYmxlIiwiY29sb3IiLCJkZWxldGVJY29uIiwib25EZWxldGUiLCJkaXNhYmxlZCIsInN0eWxlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEk7Ozs7O0FBQ0YsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDVEEsS0FEUztBQUVsQjs7OztXQUVELGtCQUFTO0FBQUE7O0FBQUEsd0JBY0QsS0FBS0EsS0FkSjtBQUFBLFVBRURDLFVBRkMsZUFFREEsVUFGQztBQUFBLFVBR0RDLElBSEMsZUFHREEsSUFIQztBQUFBLFVBSURDLFVBSkMsZUFJREEsVUFKQztBQUFBLFVBS0RDLFFBTEMsZUFLREEsUUFMQztBQUFBLFVBTURDLEtBTkMsZUFNREEsS0FOQztBQUFBLFVBT0RDLE9BUEMsZUFPREEsT0FQQztBQUFBLFVBUURDLElBUkMsZUFRREEsSUFSQztBQUFBLFVBU0RDLFNBVEMsZUFTREEsU0FUQztBQUFBLFVBVURDLEtBVkMsZUFVREEsS0FWQztBQUFBLFVBV0RDLFVBWEMsZUFXREEsVUFYQztBQUFBLFVBWURDLFFBWkMsZUFZREEsUUFaQztBQUFBLFVBYURDLFFBYkMsZUFhREEsUUFiQztBQWlCTCwwQkFDSTtBQUFBLGdDQUNJO0FBQU8sVUFBQSxJQUFJLEVBQUMsVUFBWjtBQUFBLG9CQUF3QkM7QUFBeEIsVUFESixlQUVJO0FBQUssVUFBQSxTQUFTLEVBQUU7QUFDWixvQkFBUSxJQURJO0FBRVosMkJBQWVMLFNBRkg7QUFHWiwwQkFBY0YsT0FIRjtBQUlaLDBCQUFjTTtBQUpGLHNEQUtOTCxJQUxNLEdBS0csSUFMSCw0Q0FNTkUsS0FOTSxHQU1JLElBTkosZ0JBQWhCO0FBQUEsaUNBUUk7QUFBTSxZQUFBLFNBQVMsRUFBQyxZQUFoQjtBQUFBLHNCQUE4Qko7QUFBOUI7QUFSSixVQUZKO0FBQUEsUUFESjtBQWdCSDs7OztFQXRDY1MsS0FBSyxDQUFDQyxTOztBQXlDekJoQixJQUFJLENBQUNpQixZQUFMLEdBQW9CO0FBQ2hCZixFQUFBQSxVQUFVLEVBQUUsS0FESTtBQUVoQlcsRUFBQUEsUUFBUSxFQUFFLEtBRk07QUFHaEJWLEVBQUFBLElBQUksRUFBRSxJQUhVO0FBSWhCRSxFQUFBQSxRQUFRLEVBQUUsSUFKTTtBQUtoQkMsRUFBQUEsS0FBSyxFQUFFLE1BTFM7QUFNaEJDLEVBQUFBLE9BQU8sRUFBRSxLQU5PO0FBT2hCQyxFQUFBQSxJQUFJLEVBQUUsSUFQVTtBQVFoQkosRUFBQUEsVUFBVSxFQUFFLEVBUkk7QUFTaEJLLEVBQUFBLFNBQVMsRUFBRSxLQVRLO0FBVWhCQyxFQUFBQSxLQUFLLEVBQUUsU0FWUztBQVdoQkMsRUFBQUEsVUFBVSxFQUFFLElBWEk7QUFZaEJDLEVBQUFBLFFBQVEsRUFBRTtBQUFBLFdBQU0sS0FBSyxDQUFYO0FBQUE7QUFaTSxDQUFwQjtBQWVBWixJQUFJLENBQUNrQixTQUFMLEdBQWlCO0FBQ2JoQixFQUFBQSxVQUFVLEVBQUVpQixzQkFBVUMsSUFEVDtBQUViakIsRUFBQUEsSUFBSSxFQUFFZ0Isc0JBQVVFLE1BRkg7QUFHYmhCLEVBQUFBLFFBQVEsRUFBRWMsc0JBQVVFLE1BSFA7QUFJYlIsRUFBQUEsUUFBUSxFQUFFTSxzQkFBVUMsSUFKUDtBQUtiZCxFQUFBQSxLQUFLLEVBQUVhLHNCQUFVRSxNQUxKO0FBTWJkLEVBQUFBLE9BQU8sRUFBRVksc0JBQVVDLElBTk47QUFPYlosRUFBQUEsSUFBSSxFQUFFVyxzQkFBVUcsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixDQUFoQixDQVBPO0FBUWJsQixFQUFBQSxVQUFVLEVBQUVlLHNCQUFVRSxNQVJUO0FBU2JaLEVBQUFBLFNBQVMsRUFBRVUsc0JBQVVDLElBVFI7QUFVYlYsRUFBQUEsS0FBSyxFQUFFUyxzQkFBVUcsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFVBQXZCLENBQWhCLENBVk07QUFXYlgsRUFBQUEsVUFBVSxFQUFFUSxzQkFBVUUsTUFYVDtBQVliVCxFQUFBQSxRQUFRLEVBQUVPLHNCQUFVSTtBQVpQLENBQWpCO2VBZWV2QixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xuXG5jbGFzcyBQaWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjYW5EaXNtaXNzLFxuICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgIGNsYXNzTmFtZXMsXG4gICAgICAgICAgICBpbWFnZVNyYyxcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgb3V0bGluZSxcbiAgICAgICAgICAgIHNpemUsXG4gICAgICAgICAgICBjbGlja2FibGUsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIGRlbGV0ZUljb24sXG4gICAgICAgICAgICBvbkRlbGV0ZSxcbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgIFwicGlsbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcIi0tY2xpY2thYmxlXCI6IGNsaWNrYWJsZSxcbiAgICAgICAgICAgICAgICAgICAgXCItLW91dGxpbmVkXCI6IG91dGxpbmUsXG4gICAgICAgICAgICAgICAgICAgIFwiLS1kaXNhYmxlZFwiOiBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgW2AtLSR7c2l6ZX1gXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgW2AtLSR7Y29sb3J9YF06IHRydWVcbiAgICAgICAgICAgICAgICB9KX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBpbGwtbGFiZWxcIj57bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuUGlsbC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2FuRGlzbWlzczogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGljb246IG51bGwsXG4gICAgaW1hZ2VTcmM6IG51bGwsXG4gICAgbGFiZWw6IFwiVGVzdFwiLFxuICAgIG91dGxpbmU6IGZhbHNlLFxuICAgIHNpemU6IFwibWRcIixcbiAgICBjbGFzc05hbWVzOiBcIlwiLFxuICAgIGNsaWNrYWJsZTogZmFsc2UsXG4gICAgY29sb3I6IFwiZGVmYXVsdFwiLFxuICAgIGRlbGV0ZUljb246IG51bGwsXG4gICAgb25EZWxldGU6ICgpID0+IHZvaWQgMFxufVxuXG5QaWxsLnByb3BUeXBlcyA9IHtcbiAgICBjYW5EaXNtaXNzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGltYWdlU3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvdXRsaW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wic21cIiwgXCJtZFwiLCBcInhsXCJdKSxcbiAgICBjbGFzc05hbWVzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsaWNrYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXCJkZWZhdWx0XCIsIFwicHJpbWFyeVwiLCBcIm5lZ2F0aXZlXCJdKSxcbiAgICBkZWxldGVJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uRGVsZXRlOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBQaWxsIl19