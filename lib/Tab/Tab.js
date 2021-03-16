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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
              tabSelected: _this2.tabSelected
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWIvVGFiLmpzIl0sIm5hbWVzIjpbIlRhYiIsInByb3BzIiwidGFiU2VsZWN0ZWQiLCJiaW5kIiwic3RhdGUiLCJjdXJyZW50U2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWRJdGVtIiwibWFuYWdlU2VsZWN0ZWRJdGVtIiwic2V0U3RhdGUiLCJpZCIsImRpc2FibGVkIiwib25DbGljayIsImhpZGVMYWJlbCIsIml0ZW1zIiwiZml4ZWRXaWR0aCIsIm1heFdpZHRoIiwidGFic0FsaWdubWVudCIsInN0eWxlcyIsIl8iLCJvcmRlckJ5IiwibWFwIiwiaXRlbSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiSVRFTVMiLCJBTElHTk1FTlQiLCJTVFJFVENIIiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIiwibGFiZWwiLCJpY29uIiwiY291bnQiLCJudW1iZXIiLCJwcmVzZW5jZSIsImJvb2wiLCJvbmVPZiIsIk9iamVjdCIsInZhbHVlcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHTUEsRzs7Ozs7QUFFRixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLCtCQUFuQjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxtQkFBbUIsRUFBRUosS0FBSyxDQUFDSztBQURsQixLQUFiO0FBSmU7QUFPbEI7Ozs7V0FFRCw4QkFBcUI7QUFBQSx3QkFDMEIsS0FBS0wsS0FEL0I7QUFBQSxVQUNWTSxrQkFEVSxlQUNWQSxrQkFEVTtBQUFBLFVBQ1VELFlBRFYsZUFDVUEsWUFEVjtBQUVqQixVQUFHQyxrQkFBa0IsSUFBSUQsWUFBWSxLQUFL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REs7QUFTWnZCLEVBQUFBLFVBQVUsRUFBRWMsc0JBQVVTLElBVFY7QUFVWnpCLEVBQUFBLFNBQVMsRUFBRWdCLHNCQUFVUyxJQVZUO0FBV1o5QixFQUFBQSxrQkFBa0IsRUFBRXFCLHNCQUFVUyxJQVhsQjtBQVladEIsRUFBQUEsUUFBUSxFQUFFYSxzQkFBVU8sTUFaUjtBQWFaN0IsRUFBQUEsWUFBWSxFQUFFc0Isc0JBQVVHLE1BYlo7QUFjWmYsRUFBQUEsYUFBYSxFQUFFWSxzQkFBVVUsS0FBVixDQUFnQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNkLG9CQUFkLENBQWhCLENBZEg7QUFlWmYsRUFBQUEsT0FBTyxFQUFFaUIsc0JBQVVhO0FBZlAsQ0FBaEI7ZUFrQmV6QyxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCBUYWJJdGVtIGZyb20gXCIuL1RhYkl0ZW1cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xyXG5pbXBvcnQge0lURU1TfSBmcm9tIFwiLi9tb2NrXCI7XHJcbmltcG9ydCB7QUxJR05NRU5UfSBmcm9tICcuL2NvbnN0YW50cydcclxuXHJcblxyXG5jbGFzcyBUYWIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWQgPSB0aGlzLnRhYlNlbGVjdGVkLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTZWxlY3RlZEl0ZW06IHByb3BzLnNlbGVjdGVkSXRlbVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAgICAgY29uc3Qge21hbmFnZVNlbGVjdGVkSXRlbSwgc2VsZWN0ZWRJdGVtfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYobWFuYWdlU2VsZWN0ZWRJdGVtICYmIHNlbGVjdGVkSXRlbSAhPT0gdGhpcy5zdGF0ZS5jdXJyZW50U2VsZWN0ZWRJdGVtKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U2VsZWN0ZWRJdGVtIDogc2VsZWN0ZWRJdGVtfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFiU2VsZWN0ZWQoaWQsIGRpc2FibGVkKXtcclxuICAgICAgICBjb25zdCB7bWFuYWdlU2VsZWN0ZWRJdGVtLCBvbkNsaWNrfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICghZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgaWYob25DbGljaylcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2soe2lkOiBpZH0pO1xyXG5cclxuICAgICAgICAgICAgaWYoIW1hbmFnZVNlbGVjdGVkSXRlbSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50U2VsZWN0ZWRJdGVtOiBpZCB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGhpZGVMYWJlbCxcclxuICAgICAgICAgICAgaXRlbXMsXHJcbiAgICAgICAgICAgIGZpeGVkV2lkdGgsXHJcbiAgICAgICAgICAgIG1heFdpZHRoLFxyXG4gICAgICAgICAgICB0YWJzQWxpZ25tZW50XHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgY29uc3Qge2N1cnJlbnRTZWxlY3RlZEl0ZW19ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzd2YtdGFicy1jb250YWluZXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBcImZsZXgtc3RhcnRcIjogdGFic0FsaWdubWVudCA9PT0gJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmxleC1lbmRcIjogdGFic0FsaWdubWVudCA9PT0gJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICBcImNlbnRlclwiOiB0YWJzQWxpZ25tZW50ID09PSAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBcInN0cmV0Y2hcIjogdGFic0FsaWdubWVudCA9PT0gJ3N0cmV0Y2gnXHJcbiAgICAgICAgICAgICAgICB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9yZGVyQnkoaXRlbXMsIFsnY291bnQnXSwgWydhc2MnXSkubWFwKGl0ZW0gPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQgPSB7Y3VycmVudFNlbGVjdGVkSXRlbSA9PT0gaXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTGFiZWwgPSB7aGlkZUxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYlNlbGVjdGVkID0ge3RoaXMudGFiU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5UYWIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaXRlbXM6IElURU1TLFxyXG4gICAgZml4ZWRXaWR0aDogZmFsc2UsXHJcbiAgICBoaWRlTGFiZWw6IGZhbHNlLFxyXG4gICAgbWFuYWdlU2VsZWN0ZWRJdGVtOiBmYWxzZSxcclxuICAgIG1heFdpZHRoOiAyNDAsXHJcbiAgICBzZWxlY3RlZEl0ZW06ICcnLFxyXG4gICAgdGFic0FsaWdubWVudDogQUxJR05NRU5ULlNUUkVUQ0hcclxufVxyXG5cclxuVGFiLnByb3BUeXBlcyA9IHtcclxuICAgIGl0ZW1zOiBwcm9wVHlwZXMuYXJyYXlPZihwcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIGlkOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGljb246IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgY291bnQ6IHByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgcHJlc2VuY2U6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sXHJcbiAgICB9KSksXHJcbiAgICBmaXhlZFdpZHRoOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGhpZGVMYWJlbDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VTZWxlY3RlZEl0ZW06IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWF4V2lkdGg6IHByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBzZWxlY3RlZEl0ZW06IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0YWJzQWxpZ25tZW50OiBwcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhBTElHTk1FTlQpKSxcclxuICAgIG9uQ2xpY2s6IHByb3BUeXBlcy5mdW5jXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYjsiXX0=