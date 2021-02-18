"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

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

var TabItem = /*#__PURE__*/function (_React$Component) {
  _inherits(TabItem, _React$Component);

  var _super = _createSuper(TabItem);

  function TabItem() {
    _classCallCheck(this, TabItem);

    return _super.apply(this, arguments);
  }

  _createClass(TabItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          item = _this$props.item,
          isSelected = _this$props.isSelected,
          hideLabel = _this$props.hideLabel,
          tabSelected = _this$props.tabSelected;
      var _this$props$item = this.props.item,
          label = _this$props$item.label,
          icon = _this$props$item.icon,
          id = _this$props$item.id,
          disabled = _this$props$item.disabled,
          style = _this$props$item.style;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _classnames["default"])({
          "swf-tab": true,
          "active": isSelected && !disabled,
          "disabled": disabled
        }),
        disabled: disabled,
        onClick: function onClick() {
          return tabSelected(item.id, disabled);
        },
        style: style || {},
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
          icon: icon,
          size: "sm"
        }), !hideLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "label",
          children: label
        })]
      }, id);
    }
  }]);

  return TabItem;
}(React.Component);

var _default = TabItem;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWIvVGFiSXRlbS5qcyJdLCJuYW1lcyI6WyJUYWJJdGVtIiwicHJvcHMiLCJpdGVtIiwiaXNTZWxlY3RlZCIsImhpZGVMYWJlbCIsInRhYlNlbGVjdGVkIiwibGFiZWwiLCJpY29uIiwiaWQiLCJkaXNhYmxlZCIsInN0eWxlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsTzs7Ozs7Ozs7Ozs7OztXQUVGLGtCQUFTO0FBQUEsd0JBQzhDLEtBQUtDLEtBRG5EO0FBQUEsVUFDRUMsSUFERixlQUNFQSxJQURGO0FBQUEsVUFDUUMsVUFEUixlQUNRQSxVQURSO0FBQUEsVUFDb0JDLFNBRHBCLGVBQ29CQSxTQURwQjtBQUFBLFVBQytCQyxXQUQvQixlQUMrQkEsV0FEL0I7QUFBQSw2QkFFc0MsS0FBS0osS0FBTCxDQUFXQyxJQUZqRDtBQUFBLFVBRUVJLEtBRkYsb0JBRUVBLEtBRkY7QUFBQSxVQUVTQyxJQUZULG9CQUVTQSxJQUZUO0FBQUEsVUFFZUMsRUFGZixvQkFFZUEsRUFGZjtBQUFBLFVBRW1CQyxRQUZuQixvQkFFbUJBLFFBRm5CO0FBQUEsVUFFNkJDLEtBRjdCLG9CQUU2QkEsS0FGN0I7QUFJTCwwQkFDSTtBQUVJLFFBQUEsU0FBUyxFQUFFLDRCQUFXO0FBQ2xCLHFCQUFXLElBRE87QUFFbEIsb0JBQVVQLFVBQVUsSUFBSSxDQUFDTSxRQUZQO0FBR2xCLHNCQUFZQTtBQUhNLFNBQVgsQ0FGZjtBQU9JLFFBQUEsUUFBUSxFQUFFQSxRQVBkO0FBUUksUUFBQSxPQUFPLEVBQUU7QUFBQSxpQkFBTUosV0FBVyxDQUFDSCxJQUFJLENBQUNNLEVBQU4sRUFBVUMsUUFBVixDQUFqQjtBQUFBLFNBUmI7QUFTSSxRQUFBLEtBQUssRUFBRUMsS0FBSyxJQUFJLEVBVHBCO0FBQUEsZ0NBV0kscUJBQUMsZ0JBQUQ7QUFBTSxVQUFBLElBQUksRUFBRUgsSUFBWjtBQUFrQixVQUFBLElBQUksRUFBQztBQUF2QixVQVhKLEVBWU0sQ0FBQ0gsU0FBRCxpQkFBYztBQUFLLFVBQUEsU0FBUyxFQUFDLE9BQWY7QUFBQSxvQkFBd0JFO0FBQXhCLFVBWnBCO0FBQUEsU0FDU0UsRUFEVCxDQURKO0FBZ0JIOzs7O0VBdEJpQkcsS0FBSyxDQUFDQyxTOztlQXlCYlosTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5cclxuY2xhc3MgVGFiSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtpdGVtLCBpc1NlbGVjdGVkLCBoaWRlTGFiZWwsIHRhYlNlbGVjdGVkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge2xhYmVsLCBpY29uLCBpZCwgZGlzYWJsZWQsIHN0eWxlfSA9IHRoaXMucHJvcHMuaXRlbTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzd2YtdGFiXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmVcIjogaXNTZWxlY3RlZCAmJiAhZGlzYWJsZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0YWJTZWxlY3RlZChpdGVtLmlkLCBkaXNhYmxlZCl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGUgfHwge319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJY29uIGljb249e2ljb259IHNpemU9XCJzbVwiLz5cclxuICAgICAgICAgICAgICAgIHsgIWhpZGVMYWJlbCAmJiA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+e2xhYmVsfTwvZGl2PiB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiSXRlbTsiXX0=