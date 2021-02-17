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

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _mock = require("../Toggle/mock");

var _dispatchDecorator = require("../utils/dispatchDecorator");

var _constants = require("./constants");

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

          _this2.setState({
            currentSelectedItem: id
          });
        }
      };

      var renderLabel = function renderLabel(label, hide) {
        if (!hide) return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "label",
          children: label
        });
      };

      var renderItem = function renderItem(item, isSelected, hideLabel) {
        var label = item.label,
            icon = item.icon,
            id = item.id,
            disabled = item.disabled,
            style = item.style;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _classnames["default"])({
            "swf-tab": true,
            "active": isSelected && !disabled,
            "disabled": disabled
          }),
          disabled: disabled,
          "on-click": function onClick() {
            return tabSelected(item.id, disabled);
          },
          style: style || {},
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
            icon: icon,
            size: "sm"
          }), renderLabel(label, hideLabel)]
        }, id);
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
            return renderItem(item, currentSelectedItem === item.id, hideLabel);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWIvVGFiLmpzIl0sIm5hbWVzIjpbIlRhYiIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50U2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWRJdGVtIiwiaGlkZUxhYmVsIiwiaXRlbXMiLCJmaXhlZFdpZHRoIiwibWF4V2lkdGgiLCJtYW5hZ2VTZWxlY3RlZEl0ZW0iLCJ0YWJzQWxpZ25tZW50IiwiZGlzcGF0Y2giLCJ0YWJTZWxlY3RlZCIsImlkIiwiZGlzYWJsZWQiLCJTV0ZfVEFCX1NFTEVDVEVEIiwic2V0U3RhdGUiLCJyZW5kZXJMYWJlbCIsImxhYmVsIiwiaGlkZSIsInJlbmRlckl0ZW0iLCJpdGVtIiwiaXNTZWxlY3RlZCIsImljb24iLCJzdHlsZSIsInN0eWxlcyIsIl8iLCJvcmRlckJ5IiwibWFwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJJVEVNUyIsIkFMSUdOTUVOVCIsIlNUUkVUQ0giLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJjb3VudCIsIm51bWJlciIsInByZXNlbmNlIiwiYm9vbCIsIm9uZU9mIiwiT2JqZWN0IiwidmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJTUEsRyxXQURMLGtDOzs7OztBQUdHLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxtQkFBbUIsRUFBRUYsS0FBSyxDQUFDRztBQURsQixLQUFiO0FBRmU7QUFLbEI7Ozs7V0FHRCxrQkFBUztBQUFBOztBQUFBLHdCQVVELEtBQUtILEtBVko7QUFBQSxVQUdESSxTQUhDLGVBR0RBLFNBSEM7QUFBQSxVQUlEQyxLQUpDLGVBSURBLEtBSkM7QUFBQSxVQUtE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bSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IHtJVEVNU30gZnJvbSBcIi4uL1RvZ2dsZS9tb2NrXCI7XHJcbmltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gXCIuLi91dGlscy9kaXNwYXRjaERlY29yYXRvclwiO1xyXG5pbXBvcnQge0FMSUdOTUVOVCwgU1dGX1RBQl9TRUxFQ1RFRH0gZnJvbSAnLi9jb25zdGFudHMnXHJcblxyXG5cclxuQGRpc3BhdGNoKClcclxuY2xhc3MgVGFiIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50U2VsZWN0ZWRJdGVtOiBwcm9wcy5zZWxlY3RlZEl0ZW1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBoaWRlTGFiZWwsXHJcbiAgICAgICAgICAgIGl0ZW1zLFxyXG4gICAgICAgICAgICBmaXhlZFdpZHRoLFxyXG4gICAgICAgICAgICBtYXhXaWR0aCxcclxuICAgICAgICAgICAgbWFuYWdlU2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICB0YWJzQWxpZ25tZW50LFxyXG4gICAgICAgICAgICBkaXNwYXRjaFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIGNvbnN0IHtjdXJyZW50U2VsZWN0ZWRJdGVtfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhYlNlbGVjdGVkID0gKGlkLCBkaXNhYmxlZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChTV0ZfVEFCX1NFTEVDVEVELCB7aWQ6IGlkfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2VsZWN0ZWRJdGVtOiBpZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyTGFiZWwgPSAobGFiZWwsIGhpZGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFoaWRlKSByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPntsYWJlbH08L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVySXRlbSA9IChpdGVtLCBpc1NlbGVjdGVkLCBoaWRlTGFiZWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qge2xhYmVsLCBpY29uLCBpZCwgZGlzYWJsZWQsIHN0eWxlfSA9IGl0ZW1cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3dmLXRhYlwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZVwiOiBpc1NlbGVjdGVkICYmICFkaXNhYmxlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbi1jbGljaz17KCkgPT4gdGFiU2VsZWN0ZWQoaXRlbS5pZCwgZGlzYWJsZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZSB8fCB7fX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtpY29ufSBzaXplPVwic21cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlbmRlckxhYmVsKGxhYmVsLCBoaWRlTGFiZWwpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIFwic3dmLXRhYnMtY29udGFpbmVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4LXN0YXJ0XCI6IHRhYnNBbGlnbm1lbnQgPT09ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICBcImZsZXgtZW5kXCI6IHRhYnNBbGlnbm1lbnQgPT09ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjZW50ZXJcIjogdGFic0FsaWdubWVudCA9PT0gJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHJldGNoXCI6IHRhYnNBbGlnbm1lbnQgPT09ICdzdHJldGNoJ1xyXG4gICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcmRlckJ5KGl0ZW1zLCBbJ2NvdW50J10sIFsnYXNjJ10pLm1hcChpdGVtID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtKGl0ZW0sIGN1cnJlbnRTZWxlY3RlZEl0ZW0gPT09IGl0ZW0uaWQsIGhpZGVMYWJlbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuVGFiLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGl0ZW1zOiBJVEVNUyxcclxuICAgIGZpeGVkV2lkdGg6IGZhbHNlLFxyXG4gICAgaGlkZUxhYmVsOiBmYWxzZSxcclxuICAgIG1hbmFnZVNlbGVjdGVkSXRlbTogZmFsc2UsXHJcbiAgICBtYXhXaWR0aDogMjQwLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiAnJyxcclxuICAgIHRhYnNBbGlnbm1lbnQ6IEFMSUdOTUVOVC5TVFJFVENIXHJcbn1cclxuXHJcblRhYi5wcm9wVHlwZXMgPSB7XHJcbiAgICBpdGVtczogcHJvcFR5cGVzLmFycmF5T2YocHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBpZDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBpY29uOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNvdW50OiBwcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIHByZXNlbmNlOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbFxyXG4gICAgfSkpLFxyXG4gICAgZml4ZWRXaWR0aDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBoaWRlTGFiZWw6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlU2VsZWN0ZWRJdGVtOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1heFdpZHRoOiBwcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdGFic0FsaWdubWVudDogcHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoQUxJR05NRU5UKSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiOyJdfQ==