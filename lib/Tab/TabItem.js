"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _Popover = _interopRequireDefault(require("../Popover/Popover"));

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

var TabItem = /*#__PURE__*/function (_React$Component) {
  _inherits(TabItem, _React$Component);

  var _super = _createSuper(TabItem);

  function TabItem(props) {
    var _this;

    _classCallCheck(this, TabItem);

    _this = _super.call(this, props);
    _this.state = {
      infoOpened: false
    };
    _this.infoRef = null;
    return _this;
  }

  _createClass(TabItem, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return this.state.infoOpened !== nextState.infoOpened || this.props !== nextProps;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

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
          style = _this$props$item.style,
          _this$props$item$requ = _this$props$item.required,
          required = _this$props$item$requ === void 0 ? false : _this$props$item$requ,
          _this$props$item$inva = _this$props$item.invalid,
          invalid = _this$props$item$inva === void 0 ? false : _this$props$item$inva,
          infoMessage = _this$props$item.infoMessage;
      var hasIcon = icon !== undefined && icon.length > 0;
      var curState = this.state.infoOpened;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _classnames["default"])({
          "swf-tab": true,
          "active": isSelected && !disabled,
          "disabled": disabled,
          "invalid": invalid
        }),
        onClick: function onClick(e) {
          tabSelected(item.id, disabled);
        },
        style: style || {},
        children: [hasIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
          icon: icon,
          size: "sm"
        }), !hideLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "label",
          children: label
        }), required && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
          icon: 'asterisk',
          customSize: 8
        }), infoMessage && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "info-icon-container",
          ref: function ref(el) {
            return _this2.infoRef = el;
          },
          onClick: function onClick(e) {
            e.preventDefault();
            e.stopPropagation();

            _this2.setState({
              infoOpened: !curState
            });
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
            className: "info-icon",
            icon: this.state.infoOpened ? 'info-circle-fill' : 'info-circle',
            size: "sm"
          })
        }), this.infoRef && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
          hideTail: true,
          manageOpened: true,
          opened: this.state.infoOpened,
          onOuterPopoverClicked: function onOuterPopoverClicked(e) {
            return _this2.setState({
              infoOpened: false
            });
          },
          positionTarget: {
            current: this.infoRef
          },
          positions: [{
            target: "top-center",
            content: "bottom-center"
          }, {
            target: "top-start",
            content: "bottom-start"
          }, {
            target: "top-end",
            content: "bottom-end"
          }, {
            target: "bottom-center",
            content: "top-center"
          }, {
            target: "bottom-start",
            content: "top-start"
          }, {
            target: "bottom-end",
            content: "top-end"
          }],
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "info-content",
              children: infoMessage
            })
          })
        })]
      }, id);
    }
  }]);

  return TabItem;
}(React.Component);

;
var _default = TabItem;
exports["default"] = _default;