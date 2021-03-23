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
      var hasIcon = icon !== undefined && icon.length > 0;
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
        children: [hasIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWIvVGFiSXRlbS5qcyJdLCJuYW1lcyI6WyJUYWJJdGVtIiwicHJvcHMiLCJpdGVtIiwiaXNTZWxlY3RlZCIsImhpZGVMYWJlbCIsInRhYlNlbGVjdGVkIiwibGFiZWwiLCJpY29uIiwiaWQiLCJkaXNhYmxlZCIsInN0eWxlIiwiaGFzSWNvbiIsInVuZGVmaW5lZCIsImxlbmd0aCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE87Ozs7Ozs7Ozs7Ozs7V0FFRixrQkFBUztBQUFBLHdCQUM4QyxLQUFLQyxLQURuRDtBQUFBLFVBQ0VDLElBREYsZUFDRUEsSUFERjtBQUFBLFVBQ1FDLFVBRFIsZUFDUUEsVUFEUjtBQUFBLFVBQ29CQyxTQURwQixlQUNvQkEsU0FEcEI7QUFBQSxVQUMrQkMsV0FEL0IsZUFDK0JBLFdBRC9CO0FBQUEsNkJBRXNDLEtBQUtKLEtBQUwsQ0FBV0MsSUFGakQ7QUFBQSxVQUVFSSxLQUZGLG9CQUVFQSxLQUZGO0FBQUEsVUFFU0MsSUFGVCxvQkFFU0EsSUFGVDtBQUFBLFVBRWVDLEVBRmYsb0JBRWVBLEVBRmY7QUFBQSxVQUVtQkMsUUFGbkIsb0JBRW1CQSxRQUZuQjtBQUFBLFVBRTZCQyxLQUY3QixvQkFFNkJBLEtBRjdCO0FBSUwsVUFBTUMsT0FBTyxHQUFHSixJQUFJLEtBQUtLLFNBQVQsSUFBc0JMLElBQUksQ0FBQ00sTUFBTCxHQUFjLENBQXBEO0FBQ0EsMEJBQ0k7QUFFSSxRQUFBLFNBQVMsRUFBRSw0QkFBVztBQUNsQixxQkFBVyxJQURPO0FBRWxCLG9CQUFVVixVQUFVLElBQUksQ0FBQ00sUUFGUDtBQUdsQixzQkFBWUE7QUFITSxTQUFYLENBRmY7QUFPSSxRQUFBLFFBQVEsRUFBRUEsUUFQZDtBQVFJLFFBQUEsT0FBTyxFQUFFO0FBQUEsaUJBQU1KLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDTSxFQUFOLEVBQVVDLFFBQVYsQ0FBakI7QUFBQSxTQVJiO0FBU0ksUUFBQSxLQUFLLEVBQUVDLEtBQUssSUFBSSxFQVRwQjtBQUFBLG1CQVdNQyxPQUFPLGlCQUFJLHFCQUFDLGdCQUFEO0FBQU0sVUFBQSxJQUFJLEVBQUVKLElBQVo7QUFBa0IsVUFBQSxJQUFJLEVBQUM7QUFBdkIsVUFYakIsRUFZTSxDQUFDSCxTQUFELGlCQUFjO0FBQUssVUFBQSxTQUFTLEVBQUMsT0FBZjtBQUFBLG9CQUF3QkU7QUFBeEIsVUFacEI7QUFBQSxTQUNTRSxFQURULENBREo7QUFnQkg7Ozs7RUF2QmlCTSxLQUFLLENBQUNDLFM7O2VBMEJiZixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcblxyXG5jbGFzcyBUYWJJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2l0ZW0sIGlzU2VsZWN0ZWQsIGhpZGVMYWJlbCwgdGFiU2VsZWN0ZWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7bGFiZWwsIGljb24sIGlkLCBkaXNhYmxlZCwgc3R5bGV9ID0gdGhpcy5wcm9wcy5pdGVtO1xyXG5cclxuICAgICAgICBjb25zdCBoYXNJY29uID0gaWNvbiAhPT0gdW5kZWZpbmVkICYmIGljb24ubGVuZ3RoID4gMDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICBcInN3Zi10YWJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZVwiOiBpc1NlbGVjdGVkICYmICFkaXNhYmxlZCxcclxuICAgICAgICAgICAgICAgICAgICBcImRpc2FibGVkXCI6IGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRhYlNlbGVjdGVkKGl0ZW0uaWQsIGRpc2FibGVkKX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZSB8fCB7fX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyBoYXNJY29uICYmIDxJY29uIGljb249e2ljb259IHNpemU9XCJzbVwiLz4gfVxyXG4gICAgICAgICAgICAgICAgeyAhaGlkZUxhYmVsICYmIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj57bGFiZWx9PC9kaXY+IH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJJdGVtOyJdfQ==