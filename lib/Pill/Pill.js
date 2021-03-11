"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _Avatar = _interopRequireDefault(require("../Avatar/Avatar"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _utils = require("../utils");

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Pill = /*#__PURE__*/function (_React$Component) {
  _inherits(Pill, _React$Component);

  var _super = _createSuper(Pill);

  function Pill(props) {
    var _this;

    _classCallCheck(this, Pill);

    _this = _super.call(this, props);
    _this.removePill = _this.removePill.bind(_assertThisInitialized(_this));
    _this.pillRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(Pill, [{
    key: "removePill",
    value: function removePill() {
      if (this.props.onDelete === _utils.noop) {
        var _this$pillRef, _this$pillRef$current;

        (_this$pillRef = this.pillRef) === null || _this$pillRef === void 0 ? void 0 : (_this$pillRef$current = _this$pillRef.current) === null || _this$pillRef$current === void 0 ? void 0 : _this$pillRef$current.remove();
      }

      this.props.onDelete();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _classnames;

      var _this$props = this.props,
          canDismiss = _this$props.canDismiss,
          icon = _this$props.icon,
          classNames = _this$props.classNames,
          member = _this$props.member,
          label = _this$props.label,
          outline = _this$props.outline,
          size = _this$props.size,
          clickable = _this$props.clickable,
          color = _this$props.color,
          deleteIcon = _this$props.deleteIcon,
          onDelete = _this$props.onDelete,
          disabled = _this$props.disabled;
      var hasMember = member;
      var hasIcon = !hasMember && icon;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          ref: function ref(elm) {
            return _this2.pillRef.current = elm;
          },
          className: (0, _classnames3["default"])((_classnames = {
            "pill": true,
            "--disabled": disabled,
            "--clickable": clickable && !disabled,
            "--outlined": outline
          }, _defineProperty(_classnames, "--".concat(size), true), _defineProperty(_classnames, "--".concat(color), true), _defineProperty(_classnames, classNames, true), _classnames)),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pill-icon",
            children: [hasMember && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar["default"], {
              member: member,
              clickable: false
            }), hasIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
              icon: icon,
              size: "sm"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: (0, _classnames3["default"])(_defineProperty({
              "pill-label": true
            }, "--".concat(size), true)),
            children: label
          }), canDismiss && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "pill-icon --delete",
            onClick: this.removePill,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
              icon: deleteIcon || "x",
              size: "sm"
            })
          })]
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
  member: null,
  label: "Test",
  outline: false,
  size: "md",
  classNames: "",
  clickable: false,
  color: "default",
  deleteIcon: null,
  onDelete: _utils.noop
};
Pill.propTypes = {
  canDismiss: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
  member: _propTypes["default"].shape({
    name: _propTypes["default"].string.required,
    title: _propTypes["default"].string,
    avatar: _propTypes["default"].string,
    id: _propTypes["default"].string.required
  }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QaWxsL1BpbGwuanMiXSwibmFtZXMiOlsiUGlsbCIsInByb3BzIiwicmVtb3ZlUGlsbCIsImJpbmQiLCJwaWxsUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJvbkRlbGV0ZSIsIm5vb3AiLCJjdXJyZW50IiwicmVtb3ZlIiwiY2FuRGlzbWlzcyIsImljb24iLCJjbGFzc05hbWVzIiwibWVtYmVyIiwibGFiZWwiLCJvdXRsaW5lIiwic2l6ZSIsImNsaWNrYWJsZSIsImNvbG9yIiwiZGVsZXRlSWNvbiIsImRpc2FibGVkIiwiaGFzTWVtYmVyIiwiaGFzSWNvbiIsInN0eWxlcyIsImVsbSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJzaGFwZSIsIm5hbWUiLCJyZXF1aXJlZCIsInRpdGxlIiwiYXZhdGFyIiwiaWQiLCJvbmVPZiIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7OztBQUNGLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLCtCQUFsQjtBQUNBLFVBQUtDLE9BQUwsZ0JBQWVDLEtBQUssQ0FBQ0MsU0FBTixFQUFmO0FBSGU7QUFJbEI7Ozs7V0FFRCxzQkFBYTtBQUNULFVBQUksS0FBS0wsS0FBTCxDQUFXTSxRQUFYLEtBQXdCQyxXQUE1QixFQUFrQztBQUFBOztBQUM5Qiw4QkFBS0osT0FBTCx5RkFBY0ssT0FBZCxnRkFBdUJDLE1BQXZCO0FBQ0g7O0FBQ0QsV0FBS1QsS0FBTCxDQUFXTSxRQUFYO0FBQ0g7OztXQUVELGtCQUFTO0FBQUE7QUFBQTs7QUFBQSx3QkFjRCxLQUFLTixL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QUFVRyxLQUFWLENBQWdCO0FBQ3BCQyxJQUFBQSxJQUFJLEVBQUVKLHNCQUFVRSxNQUFWLENBQWlCRyxRQURIO0FBRXBCQyxJQUFBQSxLQUFLLEVBQUVOLHNCQUFVRSxNQUZHO0FBR3BCSyxJQUFBQSxNQUFNLEVBQUVQLHNCQUFVRSxNQUhFO0FBSXBCTSxJQUFBQSxFQUFFLEVBQUVSLHNCQUFVRSxNQUFWLENBQWlCRztBQUpELEdBQWhCLENBSEs7QUFTYmIsRUFBQUEsUUFBUSxFQUFFUSxzQkFBVUMsSUFUUDtBQVViZixFQUFBQSxLQUFLLEVBQUVjLHNCQUFVRSxNQVZKO0FBV2JmLEVBQUFBLE9BQU8sRUFBRWEsc0JBQVVDLElBWE47QUFZYmIsRUFBQUEsSUFBSSxFQUFFWSxzQkFBVVMsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixDQUFoQixDQVpPO0FBYWJ6QixFQUFBQSxVQUFVLEVBQUVnQixzQkFBVUUsTUFiVDtBQWNiYixFQUFBQSxTQUFTLEVBQUVXLHNCQUFVQyxJQWRSO0FBZWJYLEVBQUFBLEtBQUssRUFBRVUsc0JBQVVTLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixVQUF2QixDQUFoQixDQWZNO0FBZ0JibEIsRUFBQUEsVUFBVSxFQUFFUyxzQkFBVUUsTUFoQlQ7QUFpQmJ4QixFQUFBQSxRQUFRLEVBQUVzQixzQkFBVVU7QUFqQlAsQ0FBakI7ZUFvQmV2QyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiLi4vQXZhdGFyL0F2YXRhclwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IHtub29wfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmNsYXNzIFBpbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVQaWxsID0gdGhpcy5yZW1vdmVQaWxsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5waWxsUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlUGlsbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkRlbGV0ZSA9PT0gbm9vcCkge1xyXG4gICAgICAgICAgICB0aGlzLnBpbGxSZWY/LmN1cnJlbnQ/LnJlbW92ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvcHMub25EZWxldGUoKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGNhbkRpc21pc3MsXHJcbiAgICAgICAgICAgIGljb24sXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXMsXHJcbiAgICAgICAgICAgIG1lbWJlcixcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIG91dGxpbmUsXHJcbiAgICAgICAgICAgIHNpemUsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZSxcclxuICAgICAgICAgICAgY29sb3IsXHJcbiAgICAgICAgICAgIGRlbGV0ZUljb24sXHJcbiAgICAgICAgICAgIG9uRGVsZXRlLFxyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBoYXNNZW1iZXIgPSBtZW1iZXI7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc0ljb24gPSAhaGFzTWVtYmVyICYmIGljb247XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICByZWY9e2VsbSA9PiB0aGlzLnBpbGxSZWYuY3VycmVudCA9IGVsbX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBpbGxcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCItLWRpc2FibGVkXCI6IGRpc2FibGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tY2xpY2thYmxlXCI6IGNsaWNrYWJsZSAmJiAhZGlzYWJsZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1vdXRsaW5lZFwiOiBvdXRsaW5lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYC0tJHtzaXplfWBdOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYC0tJHtjb2xvcn1gXTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzTmFtZXNdOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGlsbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNNZW1iZXIgJiYgPEF2YXRhciBtZW1iZXI9e21lbWJlcn0gY2xpY2thYmxlPXtmYWxzZX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2hhc0ljb24gJiYgPEljb24gaWNvbj17aWNvbn0gc2l6ZT1cInNtXCIvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBpbGwtbGFiZWxcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7c2l6ZX1gXTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfT57bGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYW5EaXNtaXNzICYmIDxkaXYgY2xhc3NOYW1lPVwicGlsbC1pY29uIC0tZGVsZXRlXCIgb25DbGljaz17dGhpcy5yZW1vdmVQaWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj17ZGVsZXRlSWNvbiB8fCBcInhcIn0gc2l6ZT1cInNtXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5QaWxsLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNhbkRpc21pc3M6IGZhbHNlLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgaWNvbjogbnVsbCxcclxuICAgIG1lbWJlcjogbnVsbCxcclxuICAgIGxhYmVsOiBcIlRlc3RcIixcclxuICAgIG91dGxpbmU6IGZhbHNlLFxyXG4gICAgc2l6ZTogXCJtZFwiLFxyXG4gICAgY2xhc3NOYW1lczogXCJcIixcclxuICAgIGNsaWNrYWJsZTogZmFsc2UsXHJcbiAgICBjb2xvcjogXCJkZWZhdWx0XCIsXHJcbiAgICBkZWxldGVJY29uOiBudWxsLFxyXG4gICAgb25EZWxldGU6IG5vb3BcclxufVxyXG5cclxuUGlsbC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjYW5EaXNtaXNzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBtZW1iZXI6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5yZXF1aXJlZCxcclxuICAgICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBhdmF0YXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcucmVxdWlyZWRcclxuICAgIH0pLFxyXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvdXRsaW5lOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJzbVwiLCBcIm1kXCIsIFwieGxcIl0pLFxyXG4gICAgY2xhc3NOYW1lczogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNsaWNrYWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcImRlZmF1bHRcIiwgXCJwcmltYXJ5XCIsIFwibmVnYXRpdmVcIl0pLFxyXG4gICAgZGVsZXRlSWNvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uRGVsZXRlOiBQcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaWxsIl19