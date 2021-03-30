"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TabItem = _interopRequireDefault(require("./TabItem"));

var _mock = require("./mock");

var _constants = require("./constants");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Tab = /*#__PURE__*/function (_React$Component) {
  _inherits(Tab, _React$Component);

  var _super = _createSuper(Tab);

  function Tab(props) {
    var _this;

    _classCallCheck(this, Tab);

    _this = _super.call(this, props);
    _this.tabSelected = _this.tabSelected.bind(_assertThisInitialized(_this));
    _this.state = {
      currentSelectedItem: props.selectedItem
    };
    return _this;
  }

  _createClass(Tab, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props = this.props,
          manageSelectedItem = _this$props.manageSelectedItem,
          selectedItem = _this$props.selectedItem;
      if (manageSelectedItem && selectedItem !== this.state.currentSelectedItem) this.setState({
        currentSelectedItem: selectedItem
      });
    }
  }, {
    key: "tabSelected",
    value: function tabSelected(id, disabled) {
      var _this$props2 = this.props,
          manageSelectedItem = _this$props2.manageSelectedItem,
          onClick = _this$props2.onClick;

      if (!disabled) {
        if (onClick) onClick({
          id: id
        });
        if (!manageSelectedItem) this.setState({
          currentSelectedItem: id
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          hideLabel = _this$props3.hideLabel,
          items = _this$props3.items,
          fixedWidth = _this$props3.fixedWidth,
          maxWidth = _this$props3.maxWidth,
          tabsAlignment = _this$props3.tabsAlignment;
      var currentSelectedItem = this.state.currentSelectedItem;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames["default"])({
            "swf-tabs-container": true,
            "flex-start": tabsAlignment === 'left',
            "flex-end": tabsAlignment === 'right',
            "center": tabsAlignment === 'center',
            "stretch": tabsAlignment === 'stretch'
          }),
          children: _lodash["default"].orderBy(items, ['count'], ['asc']).map(function (item) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabItem["default"], {
              item: item,
              isSelected: currentSelectedItem === item.id,
              hideLabel: hideLabel,
              tabSelected: _this2.tabSelected
            }, item.id);
          })
        })
      });
    }
  }]);

  return Tab;
}(React.Component);

Tab.defaultProps = {
  items: _mock.ITEMS,
  fixedWidth: false,
  hideLabel: false,
  manageSelectedItem: false,
  maxWidth: 240,
  selectedItem: '',
  tabsAlignment: _constants.ALIGNMENT.STRETCH
};
Tab.propTypes = {
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    label: _propTypes["default"].string,
    icon: _propTypes["default"].string,
    count: _propTypes["default"].number,
    presence: _propTypes["default"].string,
    disabled: _propTypes["default"].bool
  })),
  fixedWidth: _propTypes["default"].bool,
  hideLabel: _propTypes["default"].bool,
  manageSelectedItem: _propTypes["default"].bool,
  maxWidth: _propTypes["default"].number,
  selectedItem: _propTypes["default"].string,
  tabsAlignment: _propTypes["default"].oneOf(Object.values(_constants.ALIGNMENT)),
  onClick: _propTypes["default"].func
};
var _default = Tab;
exports["default"] = _default;