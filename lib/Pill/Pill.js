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
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.pillRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(Pill, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.onClick(this.props);
    }
  }, {
    key: "removePill",
    value: function removePill(e) {
      e === null || e === void 0 ? void 0 : e.stopPropagation();
      e === null || e === void 0 ? void 0 : e.preventDefault();

      if (this.props.onDelete === _utils.noop) {
        var _this$pillRef, _this$pillRef$current;

        (_this$pillRef = this.pillRef) === null || _this$pillRef === void 0 ? void 0 : (_this$pillRef$current = _this$pillRef.current) === null || _this$pillRef$current === void 0 ? void 0 : _this$pillRef$current.remove();
      }

      this.props.onDelete(this.props);
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
      var showPillIcon = hasMember || hasIcon;
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
          onClick: this.handleClick,
          children: [showPillIcon && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
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
  label: "",
  outline: false,
  size: "md",
  classNames: "",
  clickable: false,
  color: "default",
  deleteIcon: null,
  onDelete: _utils.noop,
  onClick: _utils.noop
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
  onDelete: _propTypes["default"].func,
  onClick: _propTypes["default"].func
};
var _default = Pill;
exports["default"] = _default;