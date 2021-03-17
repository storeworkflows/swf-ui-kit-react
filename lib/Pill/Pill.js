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
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
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
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QaWxsL1BpbGwuanMiXSwibmFtZXMiOlsiUGlsbCIsInByb3BzIiwicmVtb3ZlUGlsbCIsImJpbmQiLCJwaWxsUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJvbkRlbGV0ZSIsIm5vb3AiLCJjdXJyZW50IiwicmVtb3ZlIiwiY2FuRGlzbWlzcyIsImljb24iLCJjbGFzc05hbWVzIiwibWVtYmVyIiwibGFiZWwiLCJvdXRsaW5lIiwic2l6ZSIsImNsaWNrYWJsZSIsImNvbG9yIiwiZGVsZXRlSWNvbiIsImRpc2FibGVkIiwiaGFzTWVtYmVyIiwiaGFzSWNvbiIsImVsbSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJzaGFwZSIsIm5hbWUiLCJyZXF1aXJlZCIsInRpdGxlIiwiYXZhdGFyIiwiaWQiLCJvbmVPZiIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7OztBQUNGLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLCtCQUFsQjtBQUNBLFVBQUtDLE9BQUwsZ0JBQWVDLEtBQUssQ0FBQ0MsU0FBTixFQUFmO0FBSGU7QUFJbEI7Ozs7V0FFRCxzQkFBYTtBQUNULFVBQUksS0FBS0wsS0FBTCxDQUFXTSxRQUFYLEtBQXdCQyxXQUE1QixFQUFrQztBQUFBOztBQUM5Qiw4QkFBS0osT0FBTCx5RkFBY0ssT0FBZCxnRkFBdUJDLE1BQXZCO0FBQ0g7O0FBQ0QsV0FBS1QsS0FBTCxDQUFXTSxRQUFYO0FBQ0g7OztXQUVELGtCQUFTO0FBQUE7QUFBQTs7QUFBQSx3QkFjRCxLQUFLTixLQWRKO0FBQUEsVUFFRFUs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LEtBQUssRUFBRU4sc0JBQVVFLE1BRkc7QUFHcEJLLElBQUFBLE1BQU0sRUFBRVAsc0JBQVVFLE1BSEU7QUFJcEJNLElBQUFBLEVBQUUsRUFBRVIsc0JBQVVFLE1BQVYsQ0FBaUJHO0FBSkQsR0FBaEIsQ0FISztBQVNiWixFQUFBQSxRQUFRLEVBQUVPLHNCQUFVQyxJQVRQO0FBVWJkLEVBQUFBLEtBQUssRUFBRWEsc0JBQVVFLE1BVko7QUFXYmQsRUFBQUEsT0FBTyxFQUFFWSxzQkFBVUMsSUFYTjtBQVliWixFQUFBQSxJQUFJLEVBQUVXLHNCQUFVUyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLENBQWhCLENBWk87QUFhYnhCLEVBQUFBLFVBQVUsRUFBRWUsc0JBQVVFLE1BYlQ7QUFjYlosRUFBQUEsU0FBUyxFQUFFVSxzQkFBVUMsSUFkUjtBQWViVixFQUFBQSxLQUFLLEVBQUVTLHNCQUFVUyxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsVUFBdkIsQ0FBaEIsQ0FmTTtBQWdCYmpCLEVBQUFBLFVBQVUsRUFBRVEsc0JBQVVFLE1BaEJUO0FBaUJidkIsRUFBQUEsUUFBUSxFQUFFcUIsc0JBQVVVO0FBakJQLENBQWpCO2VBb0JldEMsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIi4uL0F2YXRhci9BdmF0YXJcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5pbXBvcnQge25vb3B9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuY2xhc3MgUGlsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnJlbW92ZVBpbGwgPSB0aGlzLnJlbW92ZVBpbGwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnBpbGxSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVQaWxsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uRGVsZXRlID09PSBub29wKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGlsbFJlZj8uY3VycmVudD8ucmVtb3ZlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkRlbGV0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgY2FuRGlzbWlzcyxcclxuICAgICAgICAgICAgaWNvbixcclxuICAgICAgICAgICAgY2xhc3NOYW1lcyxcclxuICAgICAgICAgICAgbWVtYmVyLFxyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgb3V0bGluZSxcclxuICAgICAgICAgICAgc2l6ZSxcclxuICAgICAgICAgICAgY2xpY2thYmxlLFxyXG4gICAgICAgICAgICBjb2xvcixcclxuICAgICAgICAgICAgZGVsZXRlSWNvbixcclxuICAgICAgICAgICAgb25EZWxldGUsXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc01lbWJlciA9IG1lbWJlcjtcclxuXHJcbiAgICAgICAgY29uc3QgaGFzSWNvbiA9ICFoYXNNZW1iZXIgJiYgaWNvbjtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtlbG0gPT4gdGhpcy5waWxsUmVmLmN1cnJlbnQgPSBlbG19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwaWxsXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1kaXNhYmxlZFwiOiBkaXNhYmxlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCItLWNsaWNrYWJsZVwiOiBjbGlja2FibGUgJiYgIWRpc2FibGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tb3V0bGluZWRcIjogb3V0bGluZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7c2l6ZX1gXTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7Y29sb3J9YF06IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc05hbWVzXTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbGwtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aGFzTWVtYmVyICYmIDxBdmF0YXIgbWVtYmVyPXttZW1iZXJ9IGNsaWNrYWJsZT17ZmFsc2V9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNJY29uICYmIDxJY29uIGljb249e2ljb259IHNpemU9XCJzbVwiLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwaWxsLWxhYmVsXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgLS0ke3NpemV9YF06IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KX0+e2xhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FuRGlzbWlzcyAmJiA8ZGl2IGNsYXNzTmFtZT1cInBpbGwtaWNvbiAtLWRlbGV0ZVwiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlUGlsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e2RlbGV0ZUljb24gfHwgXCJ4XCJ9IHNpemU9XCJzbVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuUGlsbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjYW5EaXNtaXNzOiBmYWxzZSxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGljb246IG51bGwsXHJcbiAgICBtZW1iZXI6IG51bGwsXHJcbiAgICBsYWJlbDogXCJUZXN0XCIsXHJcbiAgICBvdXRsaW5lOiBmYWxzZSxcclxuICAgIHNpemU6IFwibWRcIixcclxuICAgIGNsYXNzTmFtZXM6IFwiXCIsXHJcbiAgICBjbGlja2FibGU6IGZhbHNlLFxyXG4gICAgY29sb3I6IFwiZGVmYXVsdFwiLFxyXG4gICAgZGVsZXRlSWNvbjogbnVsbCxcclxuICAgIG9uRGVsZXRlOiBub29wXHJcbn1cclxuXHJcblBpbGwucHJvcFR5cGVzID0ge1xyXG4gICAgY2FuRGlzbWlzczogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbWVtYmVyOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcucmVxdWlyZWQsXHJcbiAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgYXZhdGFyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLnJlcXVpcmVkXHJcbiAgICB9KSxcclxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb3V0bGluZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wic21cIiwgXCJtZFwiLCBcInhsXCJdKSxcclxuICAgIGNsYXNzTmFtZXM6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjbGlja2FibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXCJkZWZhdWx0XCIsIFwicHJpbWFyeVwiLCBcIm5lZ2F0aXZlXCJdKSxcclxuICAgIGRlbGV0ZUljb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbkRlbGV0ZTogUHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGlsbCJdfQ==