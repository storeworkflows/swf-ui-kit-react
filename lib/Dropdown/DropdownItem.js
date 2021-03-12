"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DropdownItem = /*#__PURE__*/function (_React$Component) {
  _inherits(DropdownItem, _React$Component);

  var _super = _createSuper(DropdownItem);

  function DropdownItem(props) {
    var _this;

    _classCallCheck(this, DropdownItem);

    _this = _super.call(this, props);
    _this.itemSelected = _this.itemSelected.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DropdownItem, [{
    key: "itemSelected",
    value: function itemSelected() {
      var _this$props = this.props,
          id = _this$props.id,
          disabled = _this$props.disabled,
          onSelectAction = _this$props.onSelectAction;
      if (!disabled) onSelectAction({
        id: id
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          label = _this$props2.label,
          disabled = _this$props2.disabled,
          isSelected = _this$props2.isSelected;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames["default"])({
            "dropdown-item": true,
            "disabled": disabled,
            "selected": isSelected
          }),
          onClick: function onClick() {
            return _this2.itemSelected();
          },
          children: label
        })
      });
    }
  }]);

  return DropdownItem;
}(React.Component);

DropdownItem.defaultProps = {
  disabled: false,
  isSelected: false
};
DropdownItem.propTypes = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  onSelectAction: _propTypes["default"].func,
  isSelected: _propTypes["default"].bool
};
var _default = DropdownItem;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ecm9wZG93bi9Ecm9wZG93bkl0ZW0uanMiXSwibmFtZXMiOlsiRHJvcGRvd25JdGVtIiwicHJvcHMiLCJpdGVtU2VsZWN0ZWQiLCJiaW5kIiwiaWQiLCJkaXNhYmxlZCIsIm9uU2VsZWN0QWN0aW9uIiwibGFiZWwiLCJpc1NlbGVjdGVkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxZOzs7OztBQUVGLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLCtCQUFwQjtBQUZlO0FBR2xCOzs7O1dBRUQsd0JBQWU7QUFBQSx3QkFDNEIsS0FBS0YsS0FEakM7QUFBQSxVQUNKRyxFQURJLGVBQ0pBLEVBREk7QUFBQSxVQUNBQyxRQURBLGVBQ0FBLFFBREE7QUFBQSxVQUNVQyxjQURWLGVBQ1VBLGNBRFY7QUFHWCxVQUFHLENBQUNELFFBQUosRUFDSUMsY0FBYyxDQUFDO0FBQUNGLFFBQUFBLEVBQUUsRUFBRUE7QUFBTCxPQUFELENBQWQ7QUFDUDs7O1dBRUQsa0JBQVM7QUFBQTs7QUFBQSx5QkFNRCxLQUFLSCxLQU5KO0FBQUEsVUFHRE0sS0FIQyxnQkFHREEsS0FIQztBQUFBLFVBSURGLFFBSkMsZ0JBSURBLFFBSkM7QUFBQSxVQUtERyxVQUxDLGdCQUtEQSxVQUxDO0FBUUwsMEJBQ0k7QUFBQSwrQkFDRztBQUFLLFVBQUEsU0FBUyxFQUFFLDRCQUFXO0FBQ3ZCLDZCQUFpQixJQURNO0FBRXZCLHdCQUFZSCxRQUZXO0FBR3ZCLHdCQUFZRztBQUhXLFdBQVgsQ0FBaEI7QUFLSyxVQUFBLE9BQU8sRUFBRTtBQUFBLG1CQUFNLE1BQUksQ0FBQ04sWUFBTCxFQUFOO0FBQUEsV0FMZDtBQUFBLG9CQU9LSztBQVBMO0FBREgsUUFESjtBQWFIOzs7O0VBbkNzQkUsS0FBSyxDQUFDQyxTOztBQXNDakNWLFlBQVksQ0FBQ1csWUFBYixHQUE0QjtBQUN4Qk4sRUFBQUEsUUFBUSxFQUFFLEtBRGM7QUFFeEJHLEVBQUFBLFVBQVUsRUFBRTtBQUZZLENBQTVCO0FBS0FSLFlBQVksQ0FBQ1ksU0FBYixHQUF5QjtBQUNyQlIsRUFBQUEsRUFBRSxFQUFFUSxzQkFBVUMsU0FBVixDQUFvQixDQUNwQkQsc0JBQVVFLE1BRFUsRUFFcEJGLHNCQUFVRyxNQUZVLENBQXBCLENBRGlCO0FBS3JCUixFQUFBQSxLQUFLLEVBQUVLLHNCQUFVRSxNQUxJO0FBTXJCVCxFQUFBQSxRQUFRLEVBQUVPLHNCQUFVSSxJQU5DO0FBT3JCVixFQUFBQSxjQUFjLEVBQUVNLHNCQUFVSyxJQVBMO0FBUXJCVCxFQUFBQSxVQUFVLEVBQUVJLHNCQUFVSTtBQVJELENBQXpCO2VBV2VoQixZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmNsYXNzIERyb3Bkb3duSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsZWN0ZWQgPSB0aGlzLml0ZW1TZWxlY3RlZC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGl0ZW1TZWxlY3RlZCgpIHtcclxuICAgICAgICBjb25zdCB7aWQsIGRpc2FibGVkLCBvblNlbGVjdEFjdGlvbn0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZighZGlzYWJsZWQpXHJcbiAgICAgICAgICAgIG9uU2VsZWN0QWN0aW9uKHtpZDogaWR9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgICAgICBpc1NlbGVjdGVkXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgIFwiZHJvcGRvd24taXRlbVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiBkaXNhYmxlZCxcclxuICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogaXNTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLml0ZW1TZWxlY3RlZCgpfVxyXG4gICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbkRyb3Bkb3duSXRlbS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBpc1NlbGVjdGVkOiBmYWxzZVxyXG59XHJcblxyXG5Ecm9wZG93bkl0ZW0ucHJvcFR5cGVzID0ge1xyXG4gICAgaWQ6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgcHJvcFR5cGVzLm51bWJlclxyXG4gICAgXSksXHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG9uU2VsZWN0QWN0aW9uOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIGlzU2VsZWN0ZWQ6IHByb3BUeXBlcy5ib29sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duSXRlbSJdfQ==