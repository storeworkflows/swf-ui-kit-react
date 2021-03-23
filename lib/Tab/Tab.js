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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWIvVGFiLmpzIl0sIm5hbWVzIjpbIlRhYiIsInByb3BzIiwidGFiU2VsZWN0ZWQiLCJiaW5kIiwic3RhdGUiLCJjdXJyZW50U2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWRJdGVtIiwibWFuYWdlU2VsZWN0ZWRJdGVtIiwic2V0U3RhdGUiLCJpZCIsImRpc2FibGVkIiwib25DbGljayIsImhpZGVMYWJlbCIsIml0ZW1zIiwiZml4ZWRXaWR0aCIsIm1heFdpZHRoIiwidGFic0FsaWdubWVudCIsIl8iLCJvcmRlckJ5IiwibWFwIiwiaXRlbSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiSVRFTVMiLCJBTElHTk1FTlQiLCJTVFJFVENIIiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIiwibGFiZWwiLCJpY29uIiwiY291bnQiLCJudW1iZXIiLCJwcmVzZW5jZSIsImJvb2wiLCJvbmVPZiIsIk9iamVjdCIsInZhbHVlcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHTUEsRzs7Ozs7QUFFRixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLCtCQUFuQjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxtQkFBbUIsRUFBRUosS0FBSyxDQUFDSztBQURsQixLQUFiO0FBSmU7QUFPbEI7Ozs7V0FFRCw4QkFBcUI7QUFBQSx3QkFDMEIsS0FBS0wsS0FEL0I7QUFBQSxVQUNWTSxrQkFEVSxlQUNWQSxrQkFEVTtBQUFBLFVBQ1VELFlBRFYsZUFDVUEsWUFEVjtBQUVqQixVQUFHQyxrQkFBa0IsSUFBSUQsWUFBWSxLQUFLLEtBQUtGLEtBQUwsQ0FB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QVdaN0IsRUFBQUEsa0JBQWtCLEVBQUVvQixzQkFBVVMsSUFYbEI7QUFZWnJCLEVBQUFBLFFBQVEsRUFBRVksc0JBQVVPLE1BWlI7QUFhWjVCLEVBQUFBLFlBQVksRUFBRXFCLHNCQUFVRyxNQWJaO0FBY1pkLEVBQUFBLGFBQWEsRUFBRVcsc0JBQVVVLEtBQVYsQ0FBZ0JDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjZCxvQkFBZCxDQUFoQixDQWRIO0FBZVpkLEVBQUFBLE9BQU8sRUFBRWdCLHNCQUFVYTtBQWZQLENBQWhCO2VBa0JleEMsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5pbXBvcnQgVGFiSXRlbSBmcm9tIFwiLi9UYWJJdGVtXCI7XHJcbmltcG9ydCB7SVRFTVN9IGZyb20gXCIuL21vY2tcIjtcclxuaW1wb3J0IHtBTElHTk1FTlR9IGZyb20gJy4vY29uc3RhbnRzJ1xyXG5cclxuXHJcbmNsYXNzIFRhYiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy50YWJTZWxlY3RlZCA9IHRoaXMudGFiU2VsZWN0ZWQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY3VycmVudFNlbGVjdGVkSXRlbTogcHJvcHMuc2VsZWN0ZWRJdGVtXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICBjb25zdCB7bWFuYWdlU2VsZWN0ZWRJdGVtLCBzZWxlY3RlZEl0ZW19ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZihtYW5hZ2VTZWxlY3RlZEl0ZW0gJiYgc2VsZWN0ZWRJdGVtICE9PSB0aGlzLnN0YXRlLmN1cnJlbnRTZWxlY3RlZEl0ZW0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRTZWxlY3RlZEl0ZW0gOiBzZWxlY3RlZEl0ZW19KTtcclxuICAgIH1cclxuXHJcbiAgICB0YWJTZWxlY3RlZChpZCwgZGlzYWJsZWQpe1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VTZWxlY3RlZEl0ZW0sIG9uQ2xpY2t9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKCFkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBpZihvbkNsaWNrKVxyXG4gICAgICAgICAgICAgICAgb25DbGljayh7aWQ6IGlkfSk7XHJcblxyXG4gICAgICAgICAgICBpZighbWFuYWdlU2VsZWN0ZWRJdGVtKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTZWxlY3RlZEl0ZW06IGlkIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaGlkZUxhYmVsLFxyXG4gICAgICAgICAgICBpdGVtcyxcclxuICAgICAgICAgICAgZml4ZWRXaWR0aCxcclxuICAgICAgICAgICAgbWF4V2lkdGgsXHJcbiAgICAgICAgICAgIHRhYnNBbGlnbm1lbnRcclxuICAgICAgICB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBjb25zdCB7Y3VycmVudFNlbGVjdGVkSXRlbX0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIFwic3dmLXRhYnMtY29udGFpbmVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4LXN0YXJ0XCI6IHRhYnNBbGlnbm1lbnQgPT09ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICBcImZsZXgtZW5kXCI6IHRhYnNBbGlnbm1lbnQgPT09ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjZW50ZXJcIjogdGFic0FsaWdubWVudCA9PT0gJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHJldGNoXCI6IHRhYnNBbGlnbm1lbnQgPT09ICdzdHJldGNoJ1xyXG4gICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcmRlckJ5KGl0ZW1zLCBbJ2NvdW50J10sIFsnYXNjJ10pLm1hcChpdGVtID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkID0ge2N1cnJlbnRTZWxlY3RlZEl0ZW0gPT09IGl0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUxhYmVsID0ge2hpZGVMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJTZWxlY3RlZCA9IHt0aGlzLnRhYlNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuVGFiLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGl0ZW1zOiBJVEVNUyxcclxuICAgIGZpeGVkV2lkdGg6IGZhbHNlLFxyXG4gICAgaGlkZUxhYmVsOiBmYWxzZSxcclxuICAgIG1hbmFnZVNlbGVjdGVkSXRlbTogZmFsc2UsXHJcbiAgICBtYXhXaWR0aDogMjQwLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiAnJyxcclxuICAgIHRhYnNBbGlnbm1lbnQ6IEFMSUdOTUVOVC5TVFJFVENIXHJcbn1cclxuXHJcblRhYi5wcm9wVHlwZXMgPSB7XHJcbiAgICBpdGVtczogcHJvcFR5cGVzLmFycmF5T2YocHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBpZDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBpY29uOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNvdW50OiBwcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIHByZXNlbmNlOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbFxyXG4gICAgfSkpLFxyXG4gICAgZml4ZWRXaWR0aDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBoaWRlTGFiZWw6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlU2VsZWN0ZWRJdGVtOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1heFdpZHRoOiBwcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdGFic0FsaWdubWVudDogcHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoQUxJR05NRU5UKSksXHJcbiAgICBvbkNsaWNrOiBwcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWI7Il19