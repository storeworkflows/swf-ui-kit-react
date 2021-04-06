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

var _InfoMessage = _interopRequireDefault(require("../InfoMessage/InfoMessage"));

var _RequiredLabel = _interopRequireDefault(require("../RequiredLabel/RequiredLabel"));

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
    _this.onInvalid = _this.onInvalid.bind(_assertThisInitialized(_this));
    _this.state = {
      opened: _this.props.opened,
      invalid: _this.props.invalid,
      selectedItems: _this.props.selectedItems
    };
    _this.dropdownRef = null;
    _this.itemsContainerRef = null;
    return _this;
  }

  _createClass(Dropdown, [{
    key: "onInvalid",
    value: function onInvalid(e) {
      var _this$props = this.props,
          manageInvalid = _this$props.manageInvalid,
          onInvalid = _this$props.onInvalid;
      if (!manageInvalid) this.setState({
        invalid: true
      });
      onInvalid(e);
    }
  }, {
    key: "dropdownClicked",
    value: function dropdownClicked() {
      var _this$props2 = this.props,
          manageOpened = _this$props2.manageOpened,
          onOpened = _this$props2.onOpened;
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
      var _this$props3 = this.props,
          manageSelectedItems = _this$props3.manageSelectedItems,
          onItemSelected = _this$props3.onItemSelected,
          manageOpened = _this$props3.manageOpened,
          items = _this$props3.items;
      var currentSelectedIds = this.state.selectedItems;
      if (!manageSelectedItems) this.setState({
        selectedItems: [id]
      });
      if (!manageOpened) this.setState({
        opened: false
      });
      if (onItemSelected) onItemSelected({
        clickedItem: (0, _utils.getItemById)(id, items),
        selectedItems: currentSelectedIds
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props4 = this.props,
          opened = _this$props4.opened,
          selectedItems = _this$props4.selectedItems,
          invalid = _this$props4.invalid,
          manageOpened = _this$props4.manageOpened,
          manageSelectedItems = _this$props4.manageSelectedItems,
          manageInvalid = _this$props4.manageInvalid;
      if (manageOpened && opened !== this.state.opened) this.setState({
        opened: opened
      });
      if (manageSelectedItems && selectedItems !== this.state.selectedItems) this.setState({
        selectedItems: selectedItems
      });
      if (manageInvalid && invalid !== this.state.invalid) this.setState({
        invalid: invalid
      });
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;

      var _this$props5 = this.props,
          items = _this$props5.items,
          scrollToSelected = _this$props5.scrollToSelected,
          itemClassName = _this$props5.itemClassName;
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
                showOnMount: scrollToSelected,
                className: itemClassName
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

      var _this$props6 = this.props,
          disabled = _this$props6.disabled,
          placeholder = _this$props6.placeholder,
          items = _this$props6.items,
          name = _this$props6.name,
          label = _this$props6.label,
          required = _this$props6.required,
          message = _this$props6.message,
          className = _this$props6.className,
          labelClassName = _this$props6.labelClassName,
          visible = _this$props6.visible;
      var _this$state2 = this.state,
          selectedItems = _this$state2.selectedItems,
          opened = _this$state2.opened,
          invalid = _this$state2.invalid;
      var hasSelected = selectedItems && selectedItems.length > 0;
      var hasLabel = hasSelected || placeholder;
      var buttonClasses = (0, _classnames["default"])(className, {
        "dropdown-button": true,
        "opened": opened,
        "disabled": disabled,
        "invalid": invalid
      });
      var labelClasses = (0, _classnames["default"])({
        "dropdown-label": true,
        "placeholder": !hasSelected
      });
      return visible ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "swf-dropdown-container",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "hidden",
            name: name,
            required: required,
            onInvalid: this.onInvalid,
            value: selectedItems
          }), (required || label) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
            label: label,
            required: required,
            invalid: invalid,
            className: labelClassName
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            onClick: this.dropdownClicked,
            disabled: disabled,
            className: buttonClasses,
            ref: function ref(el) {
              return _this3.dropdownRef = {
                current: el
              };
            },
            children: [hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: labelClasses,
              children: hasSelected && (0, _utils.getItemById)(selectedItems[0], items) ? (0, _utils.getItemById)(selectedItems[0], items).label : placeholder
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
              className: "dropdown-caret",
              icon: "caret-down-fill",
              customSize: 12
            })]
          }), this.dropdownRef && this.renderItems(), message.length > 0 && message.map(function (el) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_InfoMessage["default"], {
              iconSize: el.iconSize,
              className: el.className,
              content: el.content,
              icon: el.icon,
              status: el.status
            });
          })]
        })
      }) : null;
    }
  }]);

  return Dropdown;
}(React.Component);

;
Dropdown.defaultProps = {
  disabled: false,
  scrollToSelected: true,
  items: [],
  manageOpened: false,
  manageSelectedItems: false,
  opened: false,
  selectedItems: [],
  required: false,
  invalid: false,
  message: [],
  className: {},
  labelClassName: {},
  itemClassName: {},
  visible: true,
  manageInvalid: true,
  onInvalid: function onInvalid() {
    return void 0;
  }
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
  onItemSelected: _propTypes["default"].func,
  label: _propTypes["default"].string,
  invalid: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  message: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    status: _propTypes["default"].oneOf(["critical", "warning", "positive", "info", "suggestion"]),
    content: _propTypes["default"].string,
    icon: _propTypes["default"].string,
    className: _propTypes["default"].object,
    iconSize: _propTypes["default"].number
  })),
  className: _propTypes["default"].object,
  labelClassName: _propTypes["default"].object,
  itemClassName: _propTypes["default"].object,
  visible: _propTypes["default"].bool,
  manageInvalid: _propTypes["default"].bool,
  onInvalid: _propTypes["default"].func
};
var _default = Dropdown;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ecm9wZG93bi9Ecm9wZG93bi5qcyJdLCJuYW1lcyI6WyJEcm9wZG93biIsInByb3BzIiwiaXRlbVNlbGVjdGVkIiwiYmluZCIsInJlbmRlckl0ZW1zIiwiZHJvcGRvd25DbGlja2VkIiwib25JbnZhbGlkIiwic3RhdGUiLCJvcGVuZWQiLCJpbnZhbGlkIiwic2VsZWN0ZWRJdGVtcyIsImRyb3Bkb3duUmVmIiwiaXRlbXNDb250YWluZXJSZWYiLCJlIiwibWFuYWdlSW52YWxpZCIsInNldFN0YXRlIiwibWFuYWdlT3BlbmVkIiwib25PcGVuZWQiLCJjdXJyZW50T3BlbmVkIiwiaWQiLCJtYW5hZ2VTZWxlY3RlZEl0ZW1zIiwib25JdGVtU2VsZWN0ZWQiLCJpdGVtcyIsImN1cnJlbnRTZWxlY3RlZElkcyIsImNsaWNrZWRJdGVtIiwic2Nyb2xsVG9TZWxlY3RlZCIsIml0ZW1DbGFzc05hbWUiLCJsaXN0U3R5bGVzIiwidGFyZ2V0IiwiY29udGVudCIsImVsIiwibWFwIiwiaXRlbSIsImxhYmVsIiwiZGlzYWJsZWQiLCJpbmNsdWRlcyIsInBsYWNlaG9sZGVyIiwibmFtZSIsInJlcXVpcmVkIiwibWVzc2FnZSIsImNsYXNzTmFtZSIsImxhYmVsQ2xhc3NOYW1lIiwidmlzaWJsZSIsImhhc1NlbGVjdGVkIiwibGVuZ3RoIiwiaGFzTGFiZWwiLCJidXR0b25DbGFzc2VzIiwibGFiZWxDbGFzc2VzIiwiY3VycmVudCIsImljb25TaXplIiwiaWNvbiIsInN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mVHlwZSIsIm51bWJlciIsImZ1bmMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7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QixHQUFoQixDQUFsQixDQTVCUTtBQW1DakJyQixFQUFBQSxTQUFTLEVBQUVlLHNCQUFVVSxNQW5DSjtBQW9DakJ4QixFQUFBQSxjQUFjLEVBQUVjLHNCQUFVVSxNQXBDVDtBQXFDakJ2QyxFQUFBQSxhQUFhLEVBQUM2QixzQkFBVVUsTUFyQ1A7QUFzQ2pCdkIsRUFBQUEsT0FBTyxFQUFFYSxzQkFBVUUsSUF0Q0Y7QUF1Q2pCM0MsRUFBQUEsYUFBYSxFQUFFeUMsc0JBQVVFLElBdkNSO0FBd0NqQm5ELEVBQUFBLFNBQVMsRUFBRWlELHNCQUFVTztBQXhDSixDQUFyQjtlQTJDZTlELFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IERyb3Bkb3duSXRlbSBmcm9tIFwiLi9Ecm9wZG93bkl0ZW1cIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiXHJcbmltcG9ydCBQb3BvdmVyIGZyb20gXCIuLi9Qb3BvdmVyL1BvcG92ZXJcIjtcclxuaW1wb3J0IHtnZXRJdGVtQnlJZH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgSW5mb01lc3NhZ2UgZnJvbSBcIi4uL0luZm9NZXNzYWdlL0luZm9NZXNzYWdlXCI7XHJcbmltcG9ydCBSZXF1aXJlZExhYmVsIGZyb20gXCIuLi9SZXF1aXJlZExhYmVsL1JlcXVpcmVkTGFiZWxcIjtcclxuXHJcbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLml0ZW1TZWxlY3RlZCA9IHRoaXMuaXRlbVNlbGVjdGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJJdGVtcz0gdGhpcy5yZW5kZXJJdGVtcy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZHJvcGRvd25DbGlja2VkID0gdGhpcy5kcm9wZG93bkNsaWNrZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uSW52YWxpZCA9IHRoaXMub25JbnZhbGlkLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wZW5lZDogdGhpcy5wcm9wcy5vcGVuZWQsXHJcbiAgICAgICAgICAgIGludmFsaWQ6IHRoaXMucHJvcHMuaW52YWxpZCxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtczogdGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyb3Bkb3duUmVmID0gbnVsbDtcclxuICAgICAgICB0aGlzLml0ZW1zQ29udGFpbmVyUmVmID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvbkludmFsaWQoZSl7XHJcbiAgICAgICAgY29uc3Qge21hbmFnZUludmFsaWQsIG9uSW52YWxpZH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmKCFtYW5hZ2VJbnZhbGlkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnZhbGlkOiB0cnVlfSk7XHJcbiAgICAgICAgb25JbnZhbGlkKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyb3Bkb3duQ2xpY2tlZCgpe1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VPcGVuZWQsIG9uT3BlbmVkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE9wZW5lZCA9IHRoaXMuc3RhdGUub3BlbmVkO1xyXG5cclxuICAgICAgICBpZighbWFuYWdlT3BlbmVkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWQ6ICFjdXJyZW50T3BlbmVkfSlcclxuXHJcbiAgICAgICAgaWYob25PcGVuZWQpXHJcbiAgICAgICAgICAgIG9uT3BlbmVkKHsgb3BlbmVkOiBjdXJyZW50T3BlbmVkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXRlbVNlbGVjdGVkKHtpZH0pe1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VTZWxlY3RlZEl0ZW1zLCBvbkl0ZW1TZWxlY3RlZCwgbWFuYWdlT3BlbmVkLCBpdGVtc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZWxlY3RlZElkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtcztcclxuXHJcbiAgICAgICAgaWYoIW1hbmFnZVNlbGVjdGVkSXRlbXMpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW1zOiBbaWRdIH0pO1xyXG5cclxuICAgICAgICBpZighbWFuYWdlT3BlbmVkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWQ6IGZhbHNlfSlcclxuXHJcbiAgICAgICAgaWYob25JdGVtU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkKHtcclxuICAgICAgICAgICAgICAgIGNsaWNrZWRJdGVtOiBnZXRJdGVtQnlJZChpZCwgaXRlbXMpLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtczogY3VycmVudFNlbGVjdGVkSWRzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICBjb25zdCB7b3BlbmVkLCBzZWxlY3RlZEl0ZW1zLCBpbnZhbGlkLFxyXG4gICAgICAgICAgICBtYW5hZ2VPcGVuZWQsIG1hbmFnZVNlbGVjdGVkSXRlbXMsIG1hbmFnZUludmFsaWR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYobWFuYWdlT3BlbmVkICYmIG9wZW5lZCAhPT0gdGhpcy5zdGF0ZS5vcGVuZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZDogb3BlbmVkfSlcclxuXHJcbiAgICAgICAgaWYobWFuYWdlU2VsZWN0ZWRJdGVtcyAmJiBzZWxlY3RlZEl0ZW1zIT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtcylcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRJdGVtczogc2VsZWN0ZWRJdGVtc30pO1xyXG5cclxuICAgICAgICBpZihtYW5hZ2VJbnZhbGlkICYmIGludmFsaWQhPT10aGlzLnN0YXRlLmludmFsaWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ludmFsaWQ6IGludmFsaWR9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckl0ZW1zKCkge1xyXG4gICAgICAgIGNvbnN0IHtpdGVtcywgc2Nyb2xsVG9TZWxlY3RlZCwgaXRlbUNsYXNzTmFtZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtvcGVuZWQsIHNlbGVjdGVkSXRlbXN9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IGxpc3RTdHlsZXMgPSB7XHJcbiAgICAgICAgICAgICctLXBvcG92ZXItYm9yZGVyLXJhZGl1cyc6ICcwIDAgMC41cmVtIDAuNXJlbScsXHJcbiAgICAgICAgICAgICctLXBvcG92ZXItYm9yZGVyJzogJzFweCBzb2xpZCByZ2IoMjI4LCAyMzAsIDIzMSknLFxyXG4gICAgICAgICAgICAnLS1wb3BvdmVyLXNoYWRvdyc6ICdub25lJyxcclxuICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCcsXHJcbiAgICAgICAgICAgICd3aWR0aCc6ICdjYWxjKDEwcmVtIC0gMnB4KSdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblRhcmdldD17dGhpcy5kcm9wZG93blJlZn1cclxuICAgICAgICAgICAgICAgICAgICBtYW5hZ2VPcGVuZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZVRhaWw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25PdXRlclBvcG92ZXJDbGlja2VkPXsoKSA9PiB0aGlzLmRyb3Bkb3duQ2xpY2tlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucz17W3t0YXJnZXQ6IFwiYm90dG9tLXN0YXJ0XCIsIGNvbnRlbnQ6IFwidG9wLXN0YXJ0XCJ9XX1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50U3R5bGVzPXtsaXN0U3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJkcm9wZG93bi1pdGVtcy1jb250YWluZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZiA9IHtlbCA9PiB0aGlzLml0ZW1zQ29udGFpbmVyUmVmID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcGVuZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge2lkLCBsYWJlbCwgZGlzYWJsZWR9ID0gaXRlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RBY3Rpb249e3RoaXMuaXRlbVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWQgfHwgZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtzZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dPbk1vdW50ID0ge3Njcm9sbFRvU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2l0ZW1DbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICBpdGVtcyxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lLFxyXG4gICAgICAgICAgICB2aXNpYmxlXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHtzZWxlY3RlZEl0ZW1zLCBvcGVuZWQsIGludmFsaWR9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IGhhc1NlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcyAmJiAoc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwICk7XHJcbiAgICAgICAgbGV0IGhhc0xhYmVsID0gaGFzU2VsZWN0ZWQgfHwgcGxhY2Vob2xkZXI7XHJcblxyXG4gICAgICAgIGxldCBidXR0b25DbGFzc2VzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUse1xyXG4gICAgICAgICAgICBcImRyb3Bkb3duLWJ1dHRvblwiIDogdHJ1ZSxcclxuICAgICAgICAgICAgXCJvcGVuZWRcIjogb3BlbmVkLFxyXG4gICAgICAgICAgICBcImRpc2FibGVkXCI6IGRpc2FibGVkLFxyXG4gICAgICAgICAgICBcImludmFsaWRcIjogaW52YWxpZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGxhYmVsQ2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICBcImRyb3Bkb3duLWxhYmVsXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwicGxhY2Vob2xkZXJcIjogIWhhc1NlbGVjdGVkXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdmlzaWJsZSA/XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzd2YtZHJvcGRvd24tY29udGFpbmVyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkludmFsaWQ9e3RoaXMub25JbnZhbGlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRJdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgKHJlcXVpcmVkIHx8IGxhYmVsKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVxdWlyZWRMYWJlbCBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtsYWJlbENsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZHJvcGRvd25DbGlja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidXR0b25DbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0ge2VsID0+IHRoaXMuZHJvcGRvd25SZWYgPSAge2N1cnJlbnQ6IGVsfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc0xhYmVsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gIGNsYXNzTmFtZT17bGFiZWxDbGFzc2VzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBoYXNTZWxlY3RlZCAmJiBnZXRJdGVtQnlJZChzZWxlY3RlZEl0ZW1zWzBdLCBpdGVtcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZ2V0SXRlbUJ5SWQoc2VsZWN0ZWRJdGVtc1swXSwgaXRlbXMpLmxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e1wiZHJvcGRvd24tY2FyZXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e1wiY2FyZXQtZG93bi1maWxsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21TaXplPXsxMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuZHJvcGRvd25SZWYgJiYgdGhpcy5yZW5kZXJJdGVtcygpfVxyXG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLmxlbmd0aD4wICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubWFwKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxJbmZvTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25TaXplPXtlbC5pY29uU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2VsLmNsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtlbC5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2VsLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzPXtlbC5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59O1xyXG5cclxuRHJvcGRvd24uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgc2Nyb2xsVG9TZWxlY3RlZDogdHJ1ZSxcclxuICAgIGl0ZW1zOiBbXSxcclxuICAgIG1hbmFnZU9wZW5lZDogZmFsc2UsXHJcbiAgICBtYW5hZ2VTZWxlY3RlZEl0ZW1zOiBmYWxzZSxcclxuICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICBzZWxlY3RlZEl0ZW1zOiBbXSxcclxuICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIGludmFsaWQ6IGZhbHNlLFxyXG4gICAgbWVzc2FnZTogW10sXHJcbiAgICBjbGFzc05hbWU6IHt9LFxyXG4gICAgbGFiZWxDbGFzc05hbWU6IHt9LFxyXG4gICAgaXRlbUNsYXNzTmFtZToge30sXHJcbiAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgbWFuYWdlSW52YWxpZDogdHJ1ZSxcclxuICAgIG9uSW52YWxpZDogKCkgPT4gdm9pZCAwXHJcbn1cclxuXHJcbkRyb3Bkb3duLnByb3BUeXBlcyA9IHtcclxuICAgIG5hbWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzY3JvbGxUb1NlbGVjdGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGl0ZW1zOiBwcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBwcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgICAgICBpZDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHJvcFR5cGVzLm51bWJlclxyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbFxyXG4gICAgICAgIH1cclxuICAgICkpLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZVNlbGVjdGVkSXRlbXM6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgb3BlbmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHBsYWNlaG9sZGVyOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2VsZWN0ZWRJdGVtczogcHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgICAgcHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgIHByb3BUeXBlcy5udW1iZXJdXHJcbiAgICAgICAgKSksXHJcbiAgICBvbk9wZW5lZDogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkl0ZW1TZWxlY3RlZDogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGludmFsaWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVxdWlyZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWVzc2FnZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBzdGF0dXM6IFByb3BUeXBlcy5vbmVPZihbXCJjcml0aWNhbFwiLCBcIndhcm5pbmdcIiwgXCJwb3NpdGl2ZVwiLCBcImluZm9cIiwgXCJzdWdnZXN0aW9uXCJdKSxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGljb25TaXplOiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9KSksXHJcbiAgICBjbGFzc05hbWU6IHByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBsYWJlbENsYXNzTmFtZTogcHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGl0ZW1DbGFzc05hbWU6cHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHZpc2libGU6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlSW52YWxpZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvbkludmFsaWQ6IHByb3BUeXBlcy5mdW5jXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXHJcbiJdfQ==