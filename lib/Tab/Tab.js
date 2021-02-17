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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWIvVGFiLmpzIl0sIm5hbWVzIjpbIlRhYiIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50U2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWRJdGVtIiwiaGlkZUxhYmVsIiwiaXRlbXMiLCJmaXhlZFdpZHRoIiwibWF4V2lkdGgiLCJtYW5hZ2VTZWxlY3RlZEl0ZW0iLCJ0YWJzQWxpZ25tZW50IiwiZGlzcGF0Y2giLCJ0YWJTZWxlY3RlZCIsImlkIiwiZGlzYWJsZWQiLCJTV0ZfVEFCX1NFTEVDVEVEIiwic2V0U3RhdGUiLCJyZW5kZXJMYWJlbCIsImxhYmVsIiwiaGlkZSIsInJlbmRlckl0ZW0iLCJpdGVtIiwiaXNTZWxlY3RlZCIsImljb24iLCJzdHlsZSIsInN0eWxlcyIsIl8iLCJvcmRlckJ5IiwibWFwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJJVEVNUyIsIkFMSUdOTUVOVCIsIlNUUkVUQ0giLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJjb3VudCIsIm51bWJlciIsInByZXNlbmNlIiwiYm9vbCIsIm9uZU9mIiwiT2JqZWN0IiwidmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJTUEsRyxXQURMLGtDOzs7OztBQUdDLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQVk7QUFDVkMsTUFBQUEsbUJBQW1CLEVBQUVGLEtBQUssQ0FBQ0c7QUFEakIsS0FBWjtBQUZpQjtBQUtsQjs7OztXQUdDLGtCQUFTO0FBQUE7O0FBQUEsd0JBVUQsS0FBS0gsS0FWSjtBQUFBLFVBR0RJLFNBSEMsZUFHREEsU0FIQztBQUFBLFVBSURDLEtBSkMsZUFJREEsS0FKQztBQUFBLFVB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cm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xyXG5pbXBvcnQge0lURU1TfSBmcm9tIFwiLi4vVG9nZ2xlL21vY2tcIjtcclxuaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSBcIi4uL3V0aWxzL2Rpc3BhdGNoRGVjb3JhdG9yXCI7XHJcbmltcG9ydCB7QUxJR05NRU5ULCBTV0ZfVEFCX1NFTEVDVEVEfSBmcm9tICcuL2NvbnN0YW50cydcclxuXHJcblxyXG5AZGlzcGF0Y2goKVxyXG5jbGFzcyBUYWIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9e1xyXG4gICAgICBjdXJyZW50U2VsZWN0ZWRJdGVtOiBwcm9wcy5zZWxlY3RlZEl0ZW1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBoaWRlTGFiZWwsXHJcbiAgICAgICAgICAgIGl0ZW1zLFxyXG4gICAgICAgICAgICBmaXhlZFdpZHRoLFxyXG4gICAgICAgICAgICBtYXhXaWR0aCxcclxuICAgICAgICAgICAgbWFuYWdlU2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICB0YWJzQWxpZ25tZW50LFxyXG4gICAgICAgICAgICBkaXNwYXRjaFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIGNvbnN0IHtjdXJyZW50U2VsZWN0ZWRJdGVtfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhYlNlbGVjdGVkID0gKGlkLCBkaXNhYmxlZCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChTV0ZfVEFCX1NFTEVDVEVELCB7aWQ6IGlkfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGN1cnJlbnRTZWxlY3RlZEl0ZW06IGlkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJMYWJlbCA9IChsYWJlbCwgaGlkZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWhpZGUpIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+e2xhYmVsfTwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJJdGVtID0gKGl0ZW0sIGlzU2VsZWN0ZWQsIGhpZGVMYWJlbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7bGFiZWwsIGljb24sIGlkLCBkaXNhYmxlZCwgc3R5bGV9ID0gaXRlbVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzd2YtdGFiXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlXCI6IGlzU2VsZWN0ZWQgJiYgIWRpc2FibGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpc2FibGVkXCI6IGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uLWNsaWNrPXsoKSA9PiB0YWJTZWxlY3RlZChpdGVtLmlkLCBkaXNhYmxlZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlIHx8IHt9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e2ljb259IHNpemU9XCJzbVwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVyTGFiZWwobGFiZWwsIGhpZGVMYWJlbCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzd2YtdGFicy1jb250YWluZXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBcImZsZXgtc3RhcnRcIjogdGFic0FsaWdubWVudCA9PT0gJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmxleC1lbmRcIjogdGFic0FsaWdubWVudCA9PT0gJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICBcImNlbnRlclwiOiB0YWJzQWxpZ25tZW50ID09PSAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBcInN0cmV0Y2hcIjogdGFic0FsaWdubWVudCA9PT0gJ3N0cmV0Y2gnXHJcbiAgICAgICAgICAgICAgICB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9yZGVyQnkoaXRlbXMsIFsnY291bnQnXSwgWydhc2MnXSkubWFwKGl0ZW0gPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW0oaXRlbSwgY3VycmVudFNlbGVjdGVkSXRlbSA9PT0gaXRlbS5pZCwgaGlkZUxhYmVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5UYWIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaXRlbXM6IElURU1TLFxyXG4gICAgZml4ZWRXaWR0aDogZmFsc2UsXHJcbiAgICBoaWRlTGFiZWw6IGZhbHNlLFxyXG4gICAgbWFuYWdlU2VsZWN0ZWRJdGVtOiBmYWxzZSxcclxuICAgIG1heFdpZHRoOiAyNDAsXHJcbiAgICBzZWxlY3RlZEl0ZW06ICcnLFxyXG4gICAgdGFic0FsaWdubWVudDogQUxJR05NRU5ULlNUUkVUQ0hcclxufVxyXG5cclxuVGFiLnByb3BUeXBlcyA9IHtcclxuICAgIGl0ZW1zOiBwcm9wVHlwZXMuYXJyYXlPZihwcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIGlkOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGljb246IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgY291bnQ6IHByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgcHJlc2VuY2U6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sXHJcbiAgICB9KSksXHJcbiAgICBmaXhlZFdpZHRoOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGhpZGVMYWJlbDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VTZWxlY3RlZEl0ZW06IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWF4V2lkdGg6IHByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBzZWxlY3RlZEl0ZW06IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0YWJzQWxpZ25tZW50OiBwcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhBTElHTk1FTlQpKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWI7Il19