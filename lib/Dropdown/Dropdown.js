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

var _Popover = _interopRequireDefault(require("../Popover/Popover"));

var _utils = require("./utils");

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
    _this.dropdownRef = null;
    _this.itemsContainerRef = null;
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
        clickedItem: (0, _utils.getItemById)(id, items),
        selectedItems: currentSelectedIds
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
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;

      var _this$props4 = this.props,
          items = _this$props4.items,
          scrollToSelected = _this$props4.scrollToSelected;
      var _this$state = this.state,
          opened = _this$state.opened,
          selectedItems = _this$state.selectedItems;
      var listStyles = {
        '--popover-border-radius': '0 0 0.5rem 0.5rem',
        '--popover-border': '1px solid rgb(228, 230, 231)',
        '--popover-shadow': 'none',
        'padding': '0',
        'width': 'calc(10rem - 2px)'
      };
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
        positionTarget: this.dropdownRef,
        manageOpened: true,
        opened: opened,
        hideTail: true,
        onOuterPopoverClicked: function onOuterPopoverClicked() {
          return _this2.dropdownClicked();
        },
        positions: [{
          target: "bottom-start",
          content: "top-start"
        }],
        contentStyles: listStyles,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "dropdown-items-container",
            ref: function ref(el) {
              return _this2.itemsContainerRef = el;
            },
            children: opened && items.map(function (item) {
              var id = item.id,
                  label = item.label,
                  disabled = item.disabled;
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DropdownItem["default"], {
                onSelectAction: _this2.itemSelected,
                id: id,
                label: label,
                disabled: _this2.props.disabled || disabled,
                isSelected: selectedItems.includes(id),
                showOnMount: scrollToSelected
              }, id);
            })
          })
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props5 = this.props,
          disabled = _this$props5.disabled,
          placeholder = _this$props5.placeholder,
          items = _this$props5.items,
          name = _this$props5.name;
      var _this$state2 = this.state,
          selectedItems = _this$state2.selectedItems,
          opened = _this$state2.opened;
      var hasSelected = selectedItems && selectedItems.length > 0;
      var hasLabel = hasSelected || placeholder;
      var buttonClasses = (0, _classnames["default"])({
        "dropdown-button": true,
        "opened": opened,
        "disabled": disabled
      });
      var labelClasses = (0, _classnames["default"])({
        "dropdown-label": true,
        "placeholder": !hasSelected
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "swf-dropdown-container",
          ref: function ref(el) {
            return _this3.dropdownRef = {
              current: el
            };
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "hidden",
            name: name
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            onClick: this.dropdownClicked,
            disabled: disabled,
            className: buttonClasses,
            children: [hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: labelClasses,
              children: hasSelected && (0, _utils.getItemById)(selectedItems[0], items) ? (0, _utils.getItemById)(selectedItems[0], items).label : placeholder
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "dropdown-caret",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
                icon: "caret-down-fill",
                customSize: 12
              })
            })]
          }), this.dropdownRef && this.renderItems()]
        })
      });
    }
  }]);

  return Dropdown;
}(React.Component);

Dropdown.defaultProps = {
  disabled: false,
  scrollToSelected: true,
  items: [],
  manageOpened: false,
  manageSelectedItems: false,
  opened: false,
  selectedItems: []
};
Dropdown.propTypes = {
  name: _propTypes["default"].string,
  scrollToSelected: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    label: _propTypes["default"].string,
    disabled: _propTypes["default"].bool
  })),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ecm9wZG93bi9Ecm9wZG93bi5qcyJdLCJuYW1lcyI6WyJEcm9wZG93biIsInByb3BzIiwiaXRlbVNlbGVjdGVkIiwiYmluZCIsInJlbmRlckl0ZW1zIiwiZHJvcGRvd25DbGlja2VkIiwic3RhdGUiLCJvcGVuZWQiLCJzZWxlY3RlZEl0ZW1zIiwiZHJvcGRvd25SZWYiLCJpdGVtc0NvbnRhaW5lclJlZiIsIm1hbmFnZU9wZW5lZCIsIm9uT3BlbmVkIiwiY3VycmVudE9wZW5lZCIsInNldFN0YXRlIiwiaWQiLCJtYW5hZ2VTZWxlY3RlZEl0ZW1zIiwib25JdGVtU2VsZWN0ZWQiLCJpdGVtcyIsImN1cnJlbnRTZWxlY3RlZElkcyIsImNsaWNrZWRJdGVtIiwic2Nyb2xsVG9TZWxlY3RlZCIsImxpc3RTdHlsZXMiLCJ0YXJnZXQiLCJjb250ZW50IiwiZWwiLCJtYXAiLCJpdGVtIiwibGFiZWwiLCJkaXNhYmxlZCIsImluY2x1ZGVzIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwiaGFzU2VsZWN0ZWQiLCJsZW5ndGgiLCJoYXNMYWJlbCIsImJ1dHRvbkNsYXNzZXMiLCJsYWJlbENsYXNzZXMiLCJjdXJyZW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiYXJyYXlPZiIsInNoYXBlIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7OztBQUVGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLCtCQUFwQjtBQUNBLFVBQUtDLFdBQUwsR0FBa0IsTUFBS0EsV0FBTCxDQUFpQkQs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LElBQUFBLEtBQUssRUFBRWMsc0JBQVVDLE1BTEw7QUFNWmQsSUFBQUEsUUFBUSxFQUFFYSxzQkFBVUU7QUFOUixHQUFoQixDQURHLENBSlU7QUFjakJqQyxFQUFBQSxZQUFZLEVBQUUrQixzQkFBVUUsSUFkUDtBQWVqQjVCLEVBQUFBLG1CQUFtQixFQUFFMEIsc0JBQVVFLElBZmQ7QUFnQmpCckMsRUFBQUEsTUFBTSxFQUFFbUMsc0JBQVVFLElBaEJEO0FBaUJqQmIsRUFBQUEsV0FBVyxFQUFFVyxzQkFBVUMsTUFqQk47QUFrQmpCbkMsRUFBQUEsYUFBYSxFQUFFa0Msc0JBQVVHLE9BQVYsQ0FDWEgsc0JBQVVLLFNBQVYsQ0FBb0IsQ0FDaEJMLHNCQUFVQyxNQURNLEVBRWhCRCxzQkFBVU0sTUFGTSxDQUFwQixDQURXLENBbEJFO0FBdUJqQnBDLEVBQUFBLFFBQVEsRUFBRThCLHNCQUFVTyxJQXZCSDtBQXdCakJoQyxFQUFBQSxjQUFjLEVBQUV5QixzQkFBVU87QUF4QlQsQ0FBckI7ZUEyQmVqRCxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBEcm9wZG93bkl0ZW0gZnJvbSBcIi4vRHJvcGRvd25JdGVtXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIlxyXG5pbXBvcnQgUG9wb3ZlciBmcm9tIFwiLi4vUG9wb3Zlci9Qb3BvdmVyXCI7XHJcbmltcG9ydCB7Z2V0SXRlbUJ5SWR9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsZWN0ZWQgPSB0aGlzLml0ZW1TZWxlY3RlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVySXRlbXM9IHRoaXMucmVuZGVySXRlbXMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRyb3Bkb3duQ2xpY2tlZCA9IHRoaXMuZHJvcGRvd25DbGlja2VkLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wZW5lZDogdGhpcy5wcm9wcy5vcGVuZWQsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM6IHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtc1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kcm9wZG93blJlZiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pdGVtc0NvbnRhaW5lclJlZiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZHJvcGRvd25DbGlja2VkKCl7XHJcbiAgICAgICAgY29uc3Qge21hbmFnZU9wZW5lZCwgb25PcGVuZWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBjdXJyZW50T3BlbmVkID0gdGhpcy5zdGF0ZS5vcGVuZWQ7XHJcblxyXG4gICAgICAgIGlmKCFtYW5hZ2VPcGVuZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZDogIWN1cnJlbnRPcGVuZWR9KVxyXG5cclxuICAgICAgICBpZihvbk9wZW5lZClcclxuICAgICAgICAgICAgb25PcGVuZWQoeyBvcGVuZWQ6IGN1cnJlbnRPcGVuZWR9KTtcclxuICAgIH1cclxuXHJcbiAgICBpdGVtU2VsZWN0ZWQoe2lkfSl7XHJcbiAgICAgICAgY29uc3Qge21hbmFnZVNlbGVjdGVkSXRlbXMsIG9uSXRlbVNlbGVjdGVkLCBtYW5hZ2VPcGVuZWQsIGl0ZW1zfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGVkSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zO1xyXG5cclxuICAgICAgICBpZighbWFuYWdlU2VsZWN0ZWRJdGVtcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW1zOiBbaWRdIH0pO1xyXG4gICAgICAgICAgICBpZighbWFuYWdlT3BlbmVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkOiBmYWxzZX0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvbkl0ZW1TZWxlY3RlZClcclxuICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQoe1xyXG4gICAgICAgICAgICAgICAgY2xpY2tlZEl0ZW06IGdldEl0ZW1CeUlkKGlkLCBpdGVtcyksXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiBjdXJyZW50U2VsZWN0ZWRJZHNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHtvcGVuZWQsIHNlbGVjdGVkSXRlbXMsIG1hbmFnZU9wZW5lZCwgbWFuYWdlU2VsZWN0ZWRJdGVtc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZihtYW5hZ2VPcGVuZWQgJiYgb3BlbmVkICE9PSB0aGlzLnN0YXRlLm9wZW5lZClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkOiBvcGVuZWR9KVxyXG5cclxuICAgICAgICBpZihtYW5hZ2VTZWxlY3RlZEl0ZW1zICYmIHNlbGVjdGVkSXRlbXMhPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRJdGVtczogc2VsZWN0ZWRJdGVtc30pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckl0ZW1zKCkge1xyXG4gICAgICAgIGNvbnN0IHtpdGVtcywgc2Nyb2xsVG9TZWxlY3RlZH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtvcGVuZWQsIHNlbGVjdGVkSXRlbXN9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IGxpc3RTdHlsZXMgPSB7XHJcbiAgICAgICAgICAgICctLXBvcG92ZXItYm9yZGVyLXJhZGl1cyc6ICcwIDAgMC41cmVtIDAuNXJlbScsXHJcbiAgICAgICAgICAgICctLXBvcG92ZXItYm9yZGVyJzogJzFweCBzb2xpZCByZ2IoMjI4LCAyMzAsIDIzMSknLFxyXG4gICAgICAgICAgICAnLS1wb3BvdmVyLXNoYWRvdyc6ICdub25lJyxcclxuICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCcsXHJcbiAgICAgICAgICAgICd3aWR0aCc6ICdjYWxjKDEwcmVtIC0gMnB4KSdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblRhcmdldD17dGhpcy5kcm9wZG93blJlZn1cclxuICAgICAgICAgICAgICAgICAgICBtYW5hZ2VPcGVuZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZVRhaWw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25PdXRlclBvcG92ZXJDbGlja2VkPXsoKSA9PiB0aGlzLmRyb3Bkb3duQ2xpY2tlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucz17W3t0YXJnZXQ6IFwiYm90dG9tLXN0YXJ0XCIsIGNvbnRlbnQ6IFwidG9wLXN0YXJ0XCJ9XX1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50U3R5bGVzPXtsaXN0U3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJkcm9wZG93bi1pdGVtcy1jb250YWluZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZiA9IHtlbCA9PiB0aGlzLml0ZW1zQ29udGFpbmVyUmVmID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcGVuZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge2lkLCBsYWJlbCwgZGlzYWJsZWR9ID0gaXRlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RBY3Rpb249e3RoaXMuaXRlbVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWQgfHwgZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtzZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dPbk1vdW50ID0ge3Njcm9sbFRvU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICBpdGVtcyxcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCB7c2VsZWN0ZWRJdGVtcywgb3BlbmVkfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGxldCBoYXNTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXMgJiYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCApO1xyXG4gICAgICAgIGxldCBoYXNMYWJlbCA9IGhhc1NlbGVjdGVkIHx8IHBsYWNlaG9sZGVyO1xyXG5cclxuICAgICAgICBsZXQgYnV0dG9uQ2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICBcImRyb3Bkb3duLWJ1dHRvblwiIDogdHJ1ZSxcclxuICAgICAgICAgICAgXCJvcGVuZWRcIjogb3BlbmVkLFxyXG4gICAgICAgICAgICBcImRpc2FibGVkXCI6IGRpc2FibGVkXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgbGFiZWxDbGFzc2VzID0gY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgIFwiZHJvcGRvd24tbGFiZWxcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiAhaGFzU2VsZWN0ZWRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic3dmLWRyb3Bkb3duLWNvbnRhaW5lclwifVxyXG4gICAgICAgICAgICAgICAgICAgICByZWYgPSB7ZWwgPT4gdGhpcy5kcm9wZG93blJlZiA9ICB7Y3VycmVudDogZWx9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT17bmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kcm9wZG93bkNsaWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidXR0b25DbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2hhc0xhYmVsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAgY2xhc3NOYW1lPXtsYWJlbENsYXNzZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaGFzU2VsZWN0ZWQgJiYgZ2V0SXRlbUJ5SWQoc2VsZWN0ZWRJdGVtc1swXSwgaXRlbXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZ2V0SXRlbUJ5SWQoc2VsZWN0ZWRJdGVtc1swXSwgaXRlbXMpLmxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZHJvcGRvd24tY2FyZXRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e1wiY2FyZXQtZG93bi1maWxsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tU2l6ZT17MTJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmRyb3Bkb3duUmVmICYmIHRoaXMucmVuZGVySXRlbXMoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbkRyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIHNjcm9sbFRvU2VsZWN0ZWQ6IHRydWUsXHJcbiAgICBpdGVtczogW10sXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IGZhbHNlLFxyXG4gICAgbWFuYWdlU2VsZWN0ZWRJdGVtczogZmFsc2UsXHJcbiAgICBvcGVuZWQ6IGZhbHNlLFxyXG4gICAgc2VsZWN0ZWRJdGVtczogW11cclxufVxyXG5cclxuRHJvcGRvd24ucHJvcFR5cGVzID0ge1xyXG4gICAgbmFtZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNjcm9sbFRvU2VsZWN0ZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgaXRlbXM6IHByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICAgIHByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgICAgIGlkOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICAgICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBwcm9wVHlwZXMubnVtYmVyXHJcbiAgICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sXHJcbiAgICAgICAgfVxyXG4gICAgKSksXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlU2VsZWN0ZWRJdGVtczogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgcGxhY2Vob2xkZXI6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzZWxlY3RlZEl0ZW1zOiBwcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBwcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgcHJvcFR5cGVzLm51bWJlcl1cclxuICAgICAgICApKSxcclxuICAgIG9uT3BlbmVkOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uSXRlbVNlbGVjdGVkOiBwcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxyXG4iXX0=