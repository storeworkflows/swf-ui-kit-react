"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

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
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("click", function (e) {
        console.log("clicked", e);
      });
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
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "swf-dropdown-container",
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
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ecm9wZG93bi9Ecm9wZG93bi5qcyJdLCJuYW1lcyI6WyJEcm9wZG93biIsInByb3BzIiwiaXRlbVNlbGVjdGVkIiwiYmluZCIsInJlbmRlckl0ZW1zIiwiZHJvcGRvd25DbGlja2VkIiwic3RhdGUiLCJvcGVuZWQiLCJzZWxlY3RlZEl0ZW1zIiwibWFuYWdlT3BlbmVkIiwib25PcGVuZWQiLCJjdXJyZW50T3BlbmVkIiwic2V0U3RhdGUiLCJpZCIsIm1hbmFnZVNlbGVjdGVkSXRlbXMiLCJvbkl0ZW1TZWxlY3RlZCIsIml0ZW1zIiwiY3VycmVudFNlbGVjdGVkSWRzIiwiY2xpY2tlZEl0ZW0iLCJnZXRJdGVtQnlJZCIsInJlc3VsdCIsIm1hcCIsImVsIiwiaXRlbSIsImxhYmVsIiwiZGlzYWJsZWQiLCJpbmNsdWRlcyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb25zb2xlIiwibG9nIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwiaGFzU2VsZWN0ZWQiLCJsZW5ndGgiLCJoYXNMYWJlbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsInNoYXBlIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiYXJyYXlPZiIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsUTs7Ozs7QUFFRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQiwrQkFBcEI7QUFDQSxVQUFLQyxXQUFMLEdBQWtCLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLCtCQUFsQjtBQUNBLFVBQUtFLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkYsSUFBckIsK0JBQXZC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TTtBQUlwQkssRUFBQUEsbUJBQW1CLEVBQUUsS0FKRDtBQUtwQlAsRUFBQUEsTUFBTSxFQUFFLEtBTFk7QUFNcEJDLEVBQUFBLGFBQWEsRUFBRTtBQU5LLENBQXhCO0FBU0FSLFFBQVEsQ0FBQ3dDLFNBQVQsR0FBcUI7QUFDakJQLEVBQUFBLElBQUksRUFBRU8sc0JBQVVDLE1BREM7QUFFakJoQixFQUFBQSxRQUFRLEVBQUVlLHNCQUFVRSxJQUZIO0FBR2pCMUIsRUFBQUEsS0FBSyxFQUFFd0Isc0JBQVVHLEtBQVYsQ0FBZ0I7QUFDbkI5QixJQUFBQSxFQUFFLEVBQUUyQixzQkFBVUksU0FBVixDQUFvQixDQUNwQkosc0JBQVVDLE1BRFUsRUFFcEJELHNCQUFVSyxNQUZVLENBQXBCLENBRGU7QUFLbkJyQixJQUFBQSxLQUFLLEVBQUVnQixzQkFBVUMsTUFMRTtBQU1uQmhCLElBQUFBLFFBQVEsRUFBRWUsc0JBQVVFO0FBTkQsR0FBaEIsQ0FIVTtBQVdqQmpDLEVBQUFBLFlBQVksRUFBRStCLHNCQUFVRSxJQVhQO0FBWWpCNUIsRUFBQUEsbUJBQW1CLEVBQUUwQixzQkFBVUUsSUFaZDtBQWFqQm5DLEVBQUFBLE1BQU0sRUFBRWlDLHNCQUFVRSxJQWJEO0FBY2pCVixFQUFBQSxXQUFXLEVBQUVRLHNCQUFVQyxNQWROO0FBZWpCakMsRUFBQUEsYUFBYSxFQUFFZ0Msc0JBQVVNLE9BQVYsQ0FDWE4sc0JBQVVJLFNBQVYsQ0FBb0IsQ0FDaEJKLHNCQUFVQyxNQURNLEVBRWhCRCxzQkFBVUssTUFGTSxDQUFwQixDQURXLENBZkU7QUFvQmpCbkMsRUFBQUEsUUFBUSxFQUFFOEIsc0JBQVVPLElBcEJIO0FBcUJqQmhDLEVBQUFBLGNBQWMsRUFBRXlCLHNCQUFVTztBQXJCVCxDQUFyQjtlQXdCZS9DLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IERyb3Bkb3duSXRlbSBmcm9tIFwiLi9Ecm9wZG93bkl0ZW1cIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiXHJcblxyXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsZWN0ZWQgPSB0aGlzLml0ZW1TZWxlY3RlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVySXRlbXM9IHRoaXMucmVuZGVySXRlbXMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRyb3Bkb3duQ2xpY2tlZCA9IHRoaXMuZHJvcGRvd25DbGlja2VkLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wZW5lZDogdGhpcy5wcm9wcy5vcGVuZWQsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM6IHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtc1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZHJvcGRvd25DbGlja2VkKCl7XHJcbiAgICAgICAgY29uc3Qge21hbmFnZU9wZW5lZCwgb25PcGVuZWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBjdXJyZW50T3BlbmVkID0gdGhpcy5zdGF0ZS5vcGVuZWQ7XHJcblxyXG4gICAgICAgIGlmKCFtYW5hZ2VPcGVuZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZDogIWN1cnJlbnRPcGVuZWR9KVxyXG5cclxuICAgICAgICBpZihvbk9wZW5lZClcclxuICAgICAgICAgICAgb25PcGVuZWQoeyBvcGVuZWQ6IGN1cnJlbnRPcGVuZWR9KTtcclxuICAgIH1cclxuXHJcbiAgICBpdGVtU2VsZWN0ZWQoe2lkfSl7XHJcbiAgICAgICAgY29uc3Qge21hbmFnZVNlbGVjdGVkSXRlbXMsIG9uSXRlbVNlbGVjdGVkLCBtYW5hZ2VPcGVuZWQsIGl0ZW1zfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGVkSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zO1xyXG5cclxuICAgICAgICBpZighbWFuYWdlU2VsZWN0ZWRJdGVtcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkSXRlbXM6IFtpZF19KTtcclxuICAgICAgICAgICAgaWYoIW1hbmFnZU9wZW5lZClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZDogZmFsc2V9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYob25JdGVtU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkKHtcclxuICAgICAgICAgICAgICAgIGNsaWNrZWRJdGVtOiB0aGlzLmdldEl0ZW1CeUlkKGlkLCBpdGVtcyksXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiBjdXJyZW50U2VsZWN0ZWRJZHNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbUJ5SWQgKGlkLCBpdGVtcykge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIGl0ZW1zLm1hcCggZWwgPT4ge1xyXG4gICAgICAgICAgICBpZihlbC5pZCA9PT0gaWQpXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBlbDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySXRlbXMoKSB7XHJcbiAgICAgICAgY29uc3Qge2l0ZW1zfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge29wZW5lZCwgc2VsZWN0ZWRJdGVtc30gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBpZihvcGVuZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcImRyb3Bkb3duLWl0ZW1zXCJ9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtpZCwgbGFiZWwsIGRpc2FibGVkfSA9IGl0ZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RBY3Rpb249e3RoaXMuaXRlbVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWQgfHwgZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e3NlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtjb25zb2xlLmxvZyhcImNsaWNrZWRcIiwgZSl9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAgICAgY29uc3Qge29wZW5lZCwgc2VsZWN0ZWRJdGVtcywgbWFuYWdlT3BlbmVkLCBtYW5hZ2VTZWxlY3RlZEl0ZW1zfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmKG1hbmFnZU9wZW5lZCAmJiBvcGVuZWQgIT09IHRoaXMuc3RhdGUub3BlbmVkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWQ6IG9wZW5lZH0pO1xyXG5cclxuICAgICAgICBpZihtYW5hZ2VTZWxlY3RlZEl0ZW1zICYmIHNlbGVjdGVkSXRlbXMhPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEl0ZW1zOiBzZWxlY3RlZEl0ZW1zfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgaXRlbXMsXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3Qge3NlbGVjdGVkSXRlbXMsIG9wZW5lZH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBsZXQgaGFzU2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW1zICYmIChzZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDAgKTtcclxuICAgICAgICBsZXQgaGFzTGFiZWwgPSBoYXNTZWxlY3RlZCB8fCBwbGFjZWhvbGRlcjtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInN3Zi1kcm9wZG93bi1jb250YWluZXJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPXtuYW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+dGhpcy5kcm9wZG93bkNsaWNrZWQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZHJvcGRvd24tYnV0dG9uXCIgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcGVuZWRcIjogb3BlbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNMYWJlbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZHJvcGRvd24tbGFiZWxcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiAhaGFzU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhhc1NlbGVjdGVkICYmIHRoaXMuZ2V0SXRlbUJ5SWQoc2VsZWN0ZWRJdGVtc1swXSwgaXRlbXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5nZXRJdGVtQnlJZChzZWxlY3RlZEl0ZW1zWzBdLCBpdGVtcykubGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkcm9wZG93bi1jYXJldFwifT48SWNvbiBpY29uPXtcImNhcmV0LWRvd24tZmlsbFwifSBjdXN0b21TaXplPXsxMn0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJdGVtcygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuRHJvcGRvd24uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgaXRlbXM6IFtdLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBmYWxzZSxcclxuICAgIG1hbmFnZVNlbGVjdGVkSXRlbXM6IGZhbHNlLFxyXG4gICAgb3BlbmVkOiBmYWxzZSxcclxuICAgIHNlbGVjdGVkSXRlbXM6IFtdXHJcbn1cclxuXHJcbkRyb3Bkb3duLnByb3BUeXBlcyA9IHtcclxuICAgIG5hbWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpdGVtczogcHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBpZDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgIHByb3BUeXBlcy5udW1iZXJcclxuICAgICAgICBdKSxcclxuICAgICAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2xcclxuICAgIH0pLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZVNlbGVjdGVkSXRlbXM6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgb3BlbmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHBsYWNlaG9sZGVyOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2VsZWN0ZWRJdGVtczogcHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgICAgcHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgIHByb3BUeXBlcy5udW1iZXJdXHJcbiAgICAgICAgKSksXHJcbiAgICBvbk9wZW5lZDogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkl0ZW1TZWxlY3RlZDogcHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cclxuIl19