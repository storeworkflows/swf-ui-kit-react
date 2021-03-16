"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _DropdownItem = _interopRequireDefault(require("./DropdownItem"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

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

var Dropdown = /*#__PURE__*/function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  var _super = _createSuper(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, props);
    _this.itemSelected = _this.itemSelected.bind(_assertThisInitialized(_this));
    _this.renderItems = _this.renderItems.bind(_assertThisInitialized(_this));
    _this.dropdownClicked = _this.dropdownClicked.bind(_assertThisInitialized(_this));
    _this.state = {
      opened: _this.props.opened,
      selectedItems: _this.props.selectedItems
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: "dropdownClicked",
    value: function dropdownClicked() {
      var _this$props = this.props,
          manageOpened = _this$props.manageOpened,
          onOpened = _this$props.onOpened;
      var currentOpened = this.state.opened;
      if (!manageOpened) this.setState({
        opened: !currentOpened
      });
      if (onOpened) onOpened({
        opened: currentOpened
      });
    }
  }, {
    key: "itemSelected",
    value: function itemSelected(_ref) {
      var id = _ref.id;
      var _this$props2 = this.props,
          manageSelectedItems = _this$props2.manageSelectedItems,
          onItemSelected = _this$props2.onItemSelected,
          manageOpened = _this$props2.manageOpened,
          items = _this$props2.items;
      var currentSelectedIds = this.state.selectedItems;

      if (!manageSelectedItems) {
        this.setState({
          selectedItems: [id]
        });
        if (!manageOpened) this.setState({
          opened: false
        });
      }

      if (onItemSelected) onItemSelected({
        clickedItem: this.getItemById(id, items),
        selectedItems: currentSelectedIds
      });
    }
  }, {
    key: "getItemById",
    value: function getItemById(id, items) {
      var result = null;
      items.map(function (el) {
        if (el.id === id) result = el;
      });
      return result;
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;

      var items = this.props.items;
      var _this$state = this.state,
          opened = _this$state.opened,
          selectedItems = _this$state.selectedItems;

      if (opened) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-items",
          children: items.map(function (item) {
            var id = item.id,
                label = item.label,
                disabled = item.disabled;
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DropdownItem["default"], {
              onSelectAction: _this2.itemSelected,
              id: id,
              label: label,
              disabled: _this2.props.disabled || disabled,
              isSelected: selectedItems.includes(id)
            }, id);
          })
        });
      } else return null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props3 = this.props,
          opened = _this$props3.opened,
          selectedItems = _this$props3.selectedItems,
          manageOpened = _this$props3.manageOpened,
          manageSelectedItems = _this$props3.manageSelectedItems;
      if (manageOpened && opened !== this.state.opened) this.setState({
        opened: opened
      });
      if (manageSelectedItems && selectedItems !== this.state.selectedItems) this.setState({
        selectedItems: selectedItems
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props4 = this.props,
          disabled = _this$props4.disabled,
          placeholder = _this$props4.placeholder,
          items = _this$props4.items,
          name = _this$props4.name;
      var _this$state2 = this.state,
          selectedItems = _this$state2.selectedItems,
          opened = _this$state2.opened;
      var hasSelected = selectedItems && selectedItems.length > 0;
      var hasLabel = hasSelected || placeholder;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "dropdown-container",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "hidden",
            name: name
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            onClick: function onClick() {
              return _this3.dropdownClicked();
            },
            disabled: disabled,
            className: (0, _classnames["default"])({
              "dropdown-button": true,
              "opened": opened,
              "disabled": disabled
            }),
            children: [hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: (0, _classnames["default"])({
                "dropdown-label": true,
                "placeholder": !hasSelected
              }),
              children: hasSelected && this.getItemById(selectedItems[0], items) ? this.getItemById(selectedItems[0], items).label : placeholder
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "dropdown-caret",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
                icon: "caret-down-fill",
                customSize: 12
              })
            })]
          }), this.renderItems()]
        })]
      });
    }
  }]);

  return Dropdown;
}(React.Component);

Dropdown.defaultProps = {
  disabled: false,
  items: [],
  manageOpened: false,
  manageSelectedItems: false,
  opened: false,
  selectedItems: []
};
Dropdown.propTypes = {
  name: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  items: _propTypes["default"].shape({
    id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    label: _propTypes["default"].string,
    disabled: _propTypes["default"].bool
  }),
  manageOpened: _propTypes["default"].bool,
  manageSelectedItems: _propTypes["default"].bool,
  opened: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  selectedItems: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])),
  onOpened: _propTypes["default"].func,
  onItemSelected: _propTypes["default"].func
};
var _default = Dropdown;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ecm9wZG93bi9Ecm9wZG93bi5qcyJdLCJuYW1lcyI6WyJEcm9wZG93biIsInByb3BzIiwiaXRlbVNlbGVjdGVkIiwiYmluZCIsInJlbmRlckl0ZW1zIiwiZHJvcGRvd25DbGlja2VkIiwic3RhdGUiLCJvcGVuZWQiLCJzZWxlY3RlZEl0ZW1zIiwibWFuYWdlT3BlbmVkIiwib25PcGVuZWQiLCJjdXJyZW50T3BlbmVkIiwic2V0U3RhdGUiLCJpZCIsIm1hbmFnZVNlbGVjdGVkSXRlbXMiLCJvbkl0ZW1TZWxlY3RlZCIsIml0ZW1zIiwiY3VycmVudFNlbGVjdGVkSWRzIiwiY2xpY2tlZEl0ZW0iLCJnZXRJdGVtQnlJZCIsInJlc3VsdCIsIm1hcCIsImVsIiwiaXRlbSIsImxhYmVsIiwiZGlzYWJsZWQiLCJpbmNsdWRlcyIsInBsYWNlaG9sZGVyIiwibmFtZSIsImhhc1NlbGVjdGVkIiwibGVuZ3RoIiwiaGFzTGFiZWwiLCJzdHlsZXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJzaGFwZSIsIm9uZU9mVHlwZSIsIm51bWJlciIsImFycmF5T2YiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFE7Ozs7O0FBRUYsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsK0JBQXBCO0FBQ0EsVUFBS0MsV0FBTCxHQUFrQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQiwrQkFBbEI7QUFDQSxVQUFLRSxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJGLElBQXJCLCtCQUF2QjtBQUVBLFVBQUtHLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxN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Q2pCUixFQUFBQSxJQUFJLEVBQUVRLHNCQUFVQyxNQURDO0FBRWpCWixFQUFBQSxRQUFRLEVBQUVXLHNCQUFVRSxJQUZIO0FBR2pCdEIsRUFBQUEsS0FBSyxFQUFFb0Isc0JBQVVHLEtBQVYsQ0FBZ0I7QUFDbkIxQixJQUFBQSxFQUFFLEVBQUV1QixzQkFBVUksU0FBVixDQUFvQixDQUNwQkosc0JBQVVDLE1BRFUsRUFFcEJELHNCQUFVSyxNQUZVLENBQXBCLENBRGU7QUFLbkJqQixJQUFBQSxLQUFLLEVBQUVZLHNCQUFVQyxNQUxFO0FBTW5CWixJQUFBQSxRQUFRLEVBQUVXLHNCQUFVRTtBQU5ELEdBQWhCLENBSFU7QUFXakI3QixFQUFBQSxZQUFZLEVBQUUyQixzQkFBVUUsSUFYUDtBQVlqQnhCLEVBQUFBLG1CQUFtQixFQUFFc0Isc0JBQVVFLElBWmQ7QUFhakIvQixFQUFBQSxNQUFNLEVBQUU2QixzQkFBVUUsSUFiRDtBQWNqQlgsRUFBQUEsV0FBVyxFQUFFUyxzQkFBVUMsTUFkTjtBQWVqQjdCLEVBQUFBLGFBQWEsRUFBRTRCLHNCQUFVTSxPQUFWLENBQ1hOLHNCQUFVSSxTQUFWLENBQW9CLENBQ2hCSixzQkFBVUMsTUFETSxFQUVoQkQsc0JBQVVLLE1BRk0sQ0FBcEIsQ0FEVyxDQWZFO0FBb0JqQi9CLEVBQUFBLFFBQVEsRUFBRTBCLHNCQUFVTyxJQXBCSDtBQXFCakI1QixFQUFBQSxjQUFjLEVBQUVxQixzQkFBVU87QUFyQlQsQ0FBckI7ZUF3QmUzQyxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IERyb3Bkb3duSXRlbSBmcm9tIFwiLi9Ecm9wZG93bkl0ZW1cIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiXHJcblxyXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsZWN0ZWQgPSB0aGlzLml0ZW1TZWxlY3RlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVySXRlbXM9IHRoaXMucmVuZGVySXRlbXMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRyb3Bkb3duQ2xpY2tlZCA9IHRoaXMuZHJvcGRvd25DbGlja2VkLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wZW5lZDogdGhpcy5wcm9wcy5vcGVuZWQsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM6IHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtc1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJvcGRvd25DbGlja2VkKCl7XHJcbiAgICAgICAgY29uc3Qge21hbmFnZU9wZW5lZCwgb25PcGVuZWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBjdXJyZW50T3BlbmVkID0gdGhpcy5zdGF0ZS5vcGVuZWQ7XHJcblxyXG4gICAgICAgIGlmKCFtYW5hZ2VPcGVuZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZDogIWN1cnJlbnRPcGVuZWR9KVxyXG5cclxuICAgICAgICBpZihvbk9wZW5lZClcclxuICAgICAgICAgICAgb25PcGVuZWQoeyBvcGVuZWQ6IGN1cnJlbnRPcGVuZWR9KTtcclxuICAgIH1cclxuXHJcbiAgICBpdGVtU2VsZWN0ZWQoe2lkfSl7XHJcbiAgICAgICAgY29uc3Qge21hbmFnZVNlbGVjdGVkSXRlbXMsIG9uSXRlbVNlbGVjdGVkLCBtYW5hZ2VPcGVuZWQsIGl0ZW1zfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGVkSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zO1xyXG5cclxuICAgICAgICBpZighbWFuYWdlU2VsZWN0ZWRJdGVtcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkSXRlbXM6IFtpZF19KTtcclxuICAgICAgICAgICAgaWYoIW1hbmFnZU9wZW5lZClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZDogZmFsc2V9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYob25JdGVtU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkKHtcclxuICAgICAgICAgICAgICAgIGNsaWNrZWRJdGVtOiB0aGlzLmdldEl0ZW1CeUlkKGlkLCBpdGVtcyksXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiBjdXJyZW50U2VsZWN0ZWRJZHNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbUJ5SWQgKGlkLCBpdGVtcykge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIGl0ZW1zLm1hcCggZWwgPT4ge1xyXG4gICAgICAgICAgICBpZihlbC5pZCA9PT0gaWQpXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBlbDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySXRlbXMoKSB7XHJcbiAgICAgICAgY29uc3Qge2l0ZW1zfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge29wZW5lZCwgc2VsZWN0ZWRJdGVtc30gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBpZihvcGVuZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcImRyb3Bkb3duLWl0ZW1zXCJ9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtpZCwgbGFiZWwsIGRpc2FibGVkfSA9IGl0ZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RBY3Rpb249e3RoaXMuaXRlbVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWQgfHwgZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e3NlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICBjb25zdCB7b3BlbmVkLCBzZWxlY3RlZEl0ZW1zLCBtYW5hZ2VPcGVuZWQsIG1hbmFnZVNlbGVjdGVkSXRlbXN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYobWFuYWdlT3BlbmVkICYmIG9wZW5lZCAhPT0gdGhpcy5zdGF0ZS5vcGVuZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZDogb3BlbmVkfSk7XHJcblxyXG4gICAgICAgIGlmKG1hbmFnZVNlbGVjdGVkSXRlbXMgJiYgc2VsZWN0ZWRJdGVtcyE9PSB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbXMpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkSXRlbXM6IHNlbGVjdGVkSXRlbXN9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICBpdGVtcyxcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCB7c2VsZWN0ZWRJdGVtcywgb3BlbmVkfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGxldCBoYXNTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXMgJiYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCApO1xyXG4gICAgICAgIGxldCBoYXNMYWJlbCA9IGhhc1NlbGVjdGVkIHx8IHBsYWNlaG9sZGVyO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRyb3Bkb3duLWNvbnRhaW5lclwifT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9e25hbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT50aGlzLmRyb3Bkb3duQ2xpY2tlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkcm9wZG93bi1idXR0b25cIiA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wZW5lZFwiOiBvcGVuZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpc2FibGVkXCI6IGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2hhc0xhYmVsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkcm9wZG93bi1sYWJlbFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6ICFoYXNTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaGFzU2VsZWN0ZWQgJiYgdGhpcy5nZXRJdGVtQnlJZChzZWxlY3RlZEl0ZW1zWzBdLCBpdGVtcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmdldEl0ZW1CeUlkKHNlbGVjdGVkSXRlbXNbMF0sIGl0ZW1zKS5sYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRyb3Bkb3duLWNhcmV0XCJ9PjxJY29uIGljb249e1wiY2FyZXQtZG93bi1maWxsXCJ9IGN1c3RvbVNpemU9ezEyfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckl0ZW1zKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5Ecm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBpdGVtczogW10sXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IGZhbHNlLFxyXG4gICAgbWFuYWdlU2VsZWN0ZWRJdGVtczogZmFsc2UsXHJcbiAgICBvcGVuZWQ6IGZhbHNlLFxyXG4gICAgc2VsZWN0ZWRJdGVtczogW11cclxufVxyXG5cclxuRHJvcGRvd24ucHJvcFR5cGVzID0ge1xyXG4gICAgbmFtZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGl0ZW1zOiBwcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIGlkOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgcHJvcFR5cGVzLm51bWJlclxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbFxyXG4gICAgfSksXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlU2VsZWN0ZWRJdGVtczogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgcGxhY2Vob2xkZXI6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzZWxlY3RlZEl0ZW1zOiBwcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBwcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgcHJvcFR5cGVzLm51bWJlcl1cclxuICAgICAgICApKSxcclxuICAgIG9uT3BlbmVkOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uSXRlbVNlbGVjdGVkOiBwcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxyXG4iXX0=