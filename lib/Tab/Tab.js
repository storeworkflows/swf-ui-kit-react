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

var _mock = require("../Toggle/mock");

var _constants = require("./constants");

var _dispatchDecorator = require("../utils/dispatchDecorator");

var _jsxRuntime = require("react/jsx-runtime");

var _dec, _class;

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

var Tab = (_dec = (0, _dispatchDecorator.dispatch)(), _dec(_class = /*#__PURE__*/function (_React$Component) {
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
          dispatch = _this$props.dispatch;
      var currentSelectedItem = this.state.currentSelectedItem;

      var tabSelected = function tabSelected(id, disabled) {
        if (!disabled) {
          dispatch(_constants.SWF_TAB_SELECTED, {
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
}(React.Component)) || _class);
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
  tabsAlignment: _propTypes["default"].oneOf(Object.values(_constants.ALIGNMENT))
};
var _default = Tab;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWIvVGFiLmpzIl0sIm5hbWVzIjpbIlRhYiIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50U2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWRJdGVtIiwiaGlkZUxhYmVsIiwiaXRlbXMiLCJmaXhlZFdpZHRoIiwibWF4V2lkdGgiLCJtYW5hZ2VTZWxlY3RlZEl0ZW0iLCJ0YWJzQWxpZ25tZW50IiwiZGlzcGF0Y2giLCJ0YWJTZWxlY3RlZCIsImlkIiwiZGlzYWJsZWQiLCJTV0ZfVEFCX1NFTEVDVEVEIiwic2V0U3RhdGUiLCJzdHlsZXMiLCJfIiwib3JkZXJCeSIsIm1hcCIsIml0ZW0iLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIklURU1TIiwiQUxJR05NRU5UIiwiU1RSRVRDSCIsInByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsInN0cmluZyIsImxhYmVsIiwiaWNvbiIsImNvdW50IiwibnVtYmVyIiwicHJlc2VuY2UiLCJib29sIiwib25lT2YiLCJPYmplY3QiLCJ2YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlNQSxHLFdBREwsa0M7Ozs7O0FBR0csZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLG1CQUFtQixFQUFFRixLQUFLLENBQUNHO0FBRGxCLEtBQWI7QUFGZTtBQUtsQjs7OztXQUdELGtCQUFTO0FBQUE7O0FBQUEsd0JBVUQsS0FBS0gsS0FWSjtBQUFBLFVBR0RJLFNBSEMsZUFHREEsU0FIQztBQUFBLFVBSURDLEtBSkMsZUFJREEsS0FKQztBQUFBLFVBS0RDLFVBTEMsZUFLREEsVUFMQztBQUFBLFVBTURDLFFBTkMsZUFNREEsUUFOQztBQUFBLFVBT0RD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QVAsQ0FBY2Qsb0JBQWQsQ0FBaEI7QUFkSCxDQUFoQjtlQWlCZTFCLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgVGFiSXRlbSBmcm9tIFwiLi9UYWJJdGVtXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQge0lURU1TfSBmcm9tIFwiLi4vVG9nZ2xlL21vY2tcIjtcbmltcG9ydCB7QUxJR05NRU5ULCBTV0ZfVEFCX1NFTEVDVEVEfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gXCIuLi91dGlscy9kaXNwYXRjaERlY29yYXRvclwiO1xuXG5cbkBkaXNwYXRjaCgpXG5jbGFzcyBUYWIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY3VycmVudFNlbGVjdGVkSXRlbTogcHJvcHMuc2VsZWN0ZWRJdGVtXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBoaWRlTGFiZWwsXG4gICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICAgIGZpeGVkV2lkdGgsXG4gICAgICAgICAgICBtYXhXaWR0aCxcbiAgICAgICAgICAgIG1hbmFnZVNlbGVjdGVkSXRlbSxcbiAgICAgICAgICAgIHRhYnNBbGlnbm1lbnQsXG4gICAgICAgICAgICBkaXNwYXRjaFxuICAgICAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGNvbnN0IHtjdXJyZW50U2VsZWN0ZWRJdGVtfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgY29uc3QgdGFiU2VsZWN0ZWQgPSAoaWQsIGRpc2FibGVkKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goU1dGX1RBQl9TRUxFQ1RFRCwge2lkOiBpZH0pO1xuXG4gICAgICAgICAgICAgICAgaWYoIW1hbmFnZVNlbGVjdGVkSXRlbSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTZWxlY3RlZEl0ZW06IGlkIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgXCJzd2YtdGFicy1jb250YWluZXJcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4LXN0YXJ0XCI6IHRhYnNBbGlnbm1lbnQgPT09ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4LWVuZFwiOiB0YWJzQWxpZ25tZW50ID09PSAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICBcImNlbnRlclwiOiB0YWJzQWxpZ25tZW50ID09PSAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgXCJzdHJldGNoXCI6IHRhYnNBbGlnbm1lbnQgPT09ICdzdHJldGNoJ1xuICAgICAgICAgICAgICAgIH0pfT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcmRlckJ5KGl0ZW1zLCBbJ2NvdW50J10sIFsnYXNjJ10pLm1hcChpdGVtID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZCA9IHtjdXJyZW50U2VsZWN0ZWRJdGVtID09PSBpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTGFiZWwgPSB7aGlkZUxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJTZWxlY3RlZCA9IHt0YWJTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuVGFiLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpdGVtczogSVRFTVMsXG4gICAgZml4ZWRXaWR0aDogZmFsc2UsXG4gICAgaGlkZUxhYmVsOiBmYWxzZSxcbiAgICBtYW5hZ2VTZWxlY3RlZEl0ZW06IGZhbHNlLFxuICAgIG1heFdpZHRoOiAyNDAsXG4gICAgc2VsZWN0ZWRJdGVtOiAnJyxcbiAgICB0YWJzQWxpZ25tZW50OiBBTElHTk1FTlQuU1RSRVRDSFxufVxuXG5UYWIucHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBwcm9wVHlwZXMuYXJyYXlPZihwcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBpZDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGljb246IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGNvdW50OiBwcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBwcmVzZW5jZTogcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sXG4gICAgfSkpLFxuICAgIGZpeGVkV2lkdGg6IHByb3BUeXBlcy5ib29sLFxuICAgIGhpZGVMYWJlbDogcHJvcFR5cGVzLmJvb2wsXG4gICAgbWFuYWdlU2VsZWN0ZWRJdGVtOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBtYXhXaWR0aDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBzZWxlY3RlZEl0ZW06IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFic0FsaWdubWVudDogcHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoQUxJR05NRU5UKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiOyJdfQ==