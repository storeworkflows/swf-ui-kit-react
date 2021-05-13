"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _findByType = _interopRequireDefault(require("../utils/findByType"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Header = function Header() {
  return null;
};

var AccordionItem = /*#__PURE__*/function (_React$Component) {
  _inherits(AccordionItem, _React$Component);

  var _super = _createSuper(AccordionItem);

  function AccordionItem(props) {
    var _this;

    _classCallCheck(this, AccordionItem);

    _this = _super.call(this, props);
    _this.itemClicked = _this.itemClicked.bind(_assertThisInitialized(_this));
    _this.state = {
      opened: props.opened
    };
    return _this;
  }

  _createClass(AccordionItem, [{
    key: "itemClicked",
    value: function itemClicked() {
      var opened = this.state.opened;
      var _this$props = this.props,
          manageOpened = _this$props.manageOpened,
          onClick = _this$props.onClick,
          onSelected = _this$props.onSelected;
      var updateOpened = opened;

      if (!manageOpened) {
        updateOpened = !opened;
        this.setState({
          opened: updateOpened
        });
      }

      onClick({
        opened: updateOpened
      });
      onSelected();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this$props2 = this.props,
          manageOpened = _this$props2.manageOpened,
          opened = _this$props2.opened;
      if (manageOpened && opened !== this.state.opened) this.setState({
        opened: opened
      });
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          label = _this$props3.label;
      var header = (0, _findByType["default"])(children, "Header");
      if (!header || header.length < 1) return /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        children: label
      });
      return header;
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var children = this.props.children;
      var header = (0, _findByType["default"])(children, "Header");
      var contentElements = [].concat(children);
      if (header && header.length > 0) contentElements = contentElements.filter(function (child) {
        return child.type !== header[0].type;
      });
      if (contentElements.length > 0) return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "accordion-content",
        children: contentElements
      });
      return null;
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var _this$props4 = this.props,
          triggerIcon = _this$props4.triggerIcon,
          iconToStart = _this$props4.iconToStart;
      var classes = (0, _classnames["default"])({
        "trigger-icon": true,
        "left": iconToStart,
        "right": !iconToStart
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        className: classes,
        icon: triggerIcon,
        variant: "tertiary"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          iconToStart = _this$props5.iconToStart,
          isLastItem = _this$props5.isLastItem,
          isFirstItem = _this$props5.isFirstItem,
          className = _this$props5.className,
          headerClassName = _this$props5.headerClassName;
      var opened = this.state.opened;
      var itemStyles = (0, _classnames["default"])(className, {
        "accordion-item": true,
        "last": isLastItem,
        "first": isFirstItem
      });
      var headerContentStyles = (0, _classnames["default"])({
        "accordion-header-content": true,
        "left": !iconToStart,
        "right": iconToStart,
        "opened": opened
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: itemStyles,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: (0, _classnames["default"])(headerClassName, "accordion-item-header"),
            onClick: this.itemClicked,
            children: [iconToStart && this.renderIcon(), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: headerContentStyles,
              children: this.renderHeader()
            }), !iconToStart && this.renderIcon()]
          }), opened && this.renderContent()]
        })
      });
    }
  }]);

  return AccordionItem;
}(React.Component);

AccordionItem.defaultProps = {
  opened: false,
  manageOpened: false,
  triggerIcon: "chevron-down",
  iconToStart: false,
  className: "",
  onClick: function onClick() {
    return void 0;
  },
  onSelected: function onSelected() {
    return void 0;
  },
  isLastItem: false,
  isFirstItem: false,
  headerClassName: ""
};
AccordionItem.propTypes = {
  label: _propTypes["default"].string,
  opened: _propTypes["default"].bool,
  manageOpened: _propTypes["default"].bool,
  onSelected: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  triggerIcon: _propTypes["default"].string,
  iconToStart: _propTypes["default"].bool,
  isLastItem: _propTypes["default"].bool,
  isFirstItem: _propTypes["default"].bool,
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  headerClassName: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string])
};
var _default = AccordionItem;
exports["default"] = _default;