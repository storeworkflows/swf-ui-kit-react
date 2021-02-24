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

var _styles = _interopRequireDefault(require("./styles.scss"));

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
    _this.state = {
      currentSelectedItem: props.selectedItem
    };
    return _this;
  }

  _createClass(Tab, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          hideLabel = _this$props.hideLabel,
          items = _this$props.items,
          fixedWidth = _this$props.fixedWidth,
          maxWidth = _this$props.maxWidth,
          manageSelectedItem = _this$props.manageSelectedItem,
          tabsAlignment = _this$props.tabsAlignment,
          onClick = _this$props.onClick;
      var currentSelectedItem = this.state.currentSelectedItem;

      var tabSelected = function tabSelected(id, disabled) {
        if (!disabled) {
          onClick({
            id: id
          });
          if (!manageSelectedItem) _this2.setState({
            currentSelectedItem: id
          });
        }
      };

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
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
              tabSelected: tabSelected
            }, item.id);
          })
        })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWIvVGFiLmpzIl0sIm5hbWVzIjpbIlRhYiIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50U2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWRJdGVtIiwiaGlkZUxhYmVsIiwiaXRlbXMiLCJmaXhlZFdpZHRoIiwibWF4V2lkdGgiLCJtYW5hZ2VTZWxlY3RlZEl0ZW0iLCJ0YWJzQWxpZ25tZW50Iiwib25DbGljayIsInRhYlNlbGVjdGVkIiwiaWQiLCJkaXNhYmxlZCIsInNldFN0YXRlIiwic3R5bGVzIiwiXyIsIm9yZGVyQnkiLCJtYXAiLCJpdGVtIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJJVEVNUyIsIkFMSUdOTUVOVCIsIlNUUkVUQ0giLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJsYWJlbCIsImljb24iLCJjb3VudCIsIm51bWJlciIsInByZXNlbmNlIiwiYm9vbCIsIm9uZU9mIiwiT2JqZWN0IiwidmFsdWVzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNQSxHOzs7OztBQUVGLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxtQkFBbUIsRUFBRUYsS0FBSyxDQUFDRztBQURsQixLQUFiO0FBRmU7QUFLbEI7Ozs7V0FHRCxrQkFBUztBQUFBOztBQUFBLHdCQVVELEtBQUtILEtBVko7QUFBQSxVQUdESSxTQUhDLGVBR0RBLFNBSEM7QUFBQSxVQUlEQyxLQUpDLGVBSURBLEtBSkM7QUFBQSxVQUtEQyxVQUxDLGVBS0RBLFVBTEM7QUFBQSxVQU1EQyxRQU5DLGVBTURBLFFBTkM7QUFBQSxVQU9EQyxrQkFQQyxlQU9EQSxrQkFQQztBQUFBLFVBUURD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RUFBRWdCLHNCQUFVYTtBQWZQLENBQWhCO2VBa0JleEMsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5pbXBvcnQgVGFiSXRlbSBmcm9tIFwiLi9UYWJJdGVtXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IHtJVEVNU30gZnJvbSBcIi4vbW9ja1wiO1xyXG5pbXBvcnQge0FMSUdOTUVOVH0gZnJvbSAnLi9jb25zdGFudHMnXHJcblxyXG5cclxuY2xhc3MgVGFiIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50U2VsZWN0ZWRJdGVtOiBwcm9wcy5zZWxlY3RlZEl0ZW1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBoaWRlTGFiZWwsXHJcbiAgICAgICAgICAgIGl0ZW1zLFxyXG4gICAgICAgICAgICBmaXhlZFdpZHRoLFxyXG4gICAgICAgICAgICBtYXhXaWR0aCxcclxuICAgICAgICAgICAgbWFuYWdlU2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICB0YWJzQWxpZ25tZW50LFxyXG4gICAgICAgICAgICBvbkNsaWNrXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgY29uc3Qge2N1cnJlbnRTZWxlY3RlZEl0ZW19ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFiU2VsZWN0ZWQgPSAoaWQsIGRpc2FibGVkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2soe2lkOiBpZH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCFtYW5hZ2VTZWxlY3RlZEl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTZWxlY3RlZEl0ZW06IGlkIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIFwic3dmLXRhYnMtY29udGFpbmVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4LXN0YXJ0XCI6IHRhYnNBbGlnbm1lbnQgPT09ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICBcImZsZXgtZW5kXCI6IHRhYnNBbGlnbm1lbnQgPT09ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjZW50ZXJcIjogdGFic0FsaWdubWVudCA9PT0gJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHJldGNoXCI6IHRhYnNBbGlnbm1lbnQgPT09ICdzdHJldGNoJ1xyXG4gICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcmRlckJ5KGl0ZW1zLCBbJ2NvdW50J10sIFsnYXNjJ10pLm1hcChpdGVtID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkID0ge2N1cnJlbnRTZWxlY3RlZEl0ZW0gPT09IGl0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUxhYmVsID0ge2hpZGVMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJTZWxlY3RlZCA9IHt0YWJTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblRhYi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBpdGVtczogSVRFTVMsXHJcbiAgICBmaXhlZFdpZHRoOiBmYWxzZSxcclxuICAgIGhpZGVMYWJlbDogZmFsc2UsXHJcbiAgICBtYW5hZ2VTZWxlY3RlZEl0ZW06IGZhbHNlLFxyXG4gICAgbWF4V2lkdGg6IDI0MCxcclxuICAgIHNlbGVjdGVkSXRlbTogJycsXHJcbiAgICB0YWJzQWxpZ25tZW50OiBBTElHTk1FTlQuU1RSRVRDSFxyXG59XHJcblxyXG5UYWIucHJvcFR5cGVzID0ge1xyXG4gICAgaXRlbXM6IHByb3BUeXBlcy5hcnJheU9mKHByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgaWQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgaWNvbjogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBjb3VudDogcHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBwcmVzZW5jZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2xcclxuICAgIH0pKSxcclxuICAgIGZpeGVkV2lkdGg6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgaGlkZUxhYmVsOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZVNlbGVjdGVkSXRlbTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYXhXaWR0aDogcHJvcFR5cGVzLm51bWJlcixcclxuICAgIHNlbGVjdGVkSXRlbTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHRhYnNBbGlnbm1lbnQ6IHByb3BUeXBlcy5vbmVPZihPYmplY3QudmFsdWVzKEFMSUdOTUVOVCkpLFxyXG4gICAgb25DbGljazogcHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiOyJdfQ==