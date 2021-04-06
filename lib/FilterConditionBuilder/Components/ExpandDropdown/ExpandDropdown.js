"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DropdownList = _interopRequireDefault(require("./DropdownList"));

var _Icon = _interopRequireDefault(require("../../../Icon/Icon"));

var _Popover = _interopRequireDefault(require("../../../Popover/Popover"));

var _utils = require("./utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var ExpandDropdown = /*#__PURE__*/function (_React$Component) {
  _inherits(ExpandDropdown, _React$Component);

  var _super = _createSuper(ExpandDropdown);

  function ExpandDropdown(props) {
    var _this;

    _classCallCheck(this, ExpandDropdown);

    _this = _super.call(this, props);

    _this.getDropdownContainerWidth = function (width) {
      _this.setState({
        containerWidth: width
      });
    };

    _this.itemSelected = _this.itemSelected.bind(_assertThisInitialized(_this));
    _this.renderItems = _this.renderItems.bind(_assertThisInitialized(_this));
    _this.dropdownClicked = _this.dropdownClicked.bind(_assertThisInitialized(_this));
    _this.state = {
      opened: _this.props.opened,
      selectedItems: _this.props.selectedItems,
      itemsContainerRef: null,
      containerWidth: 0,
      selectedItem: _this.props.selectedItem
    };
    _this.dropdownRef = null;
    _this.itemsContainerRef = null;
    return _this;
  }

  _createClass(ExpandDropdown, [{
    key: "dropdownClicked",
    value: function dropdownClicked() {
      var _this$props = this.props,
          manageOpened = _this$props.manageOpened,
          onOpened = _this$props.onOpened,
          scrollToSelected = _this$props.scrollToSelected;
      var currentOpened = this.state.opened;
      var container = this.itemsContainerRef;

      if (!manageOpened) {
        if (!currentOpened && container && scrollToSelected) container.scrollTop = (0, _utils.calculateScroll)(container, this.state.selectedItems);
        this.setState({
          opened: !currentOpened
        });
      }

      if (onOpened) onOpened({
        opened: currentOpened
      });
    }
  }, {
    key: "itemSelected",
    value: function itemSelected(_ref) {
      var id = _ref.id,
          dropdownClicked = _ref.dropdownClicked,
          listIndex = _ref.listIndex;
      var _this$props2 = this.props,
          manageSelectedItems = _this$props2.manageSelectedItems,
          onItemSelected = _this$props2.onItemSelected,
          manageOpened = _this$props2.manageOpened,
          updateSelectedItem = _this$props2.updateSelectedItem,
          selectedItem = _this$props2.selectedItem;
      var processedItems;
      var items = this.props.lists[listIndex].items;

      var item = _objectSpread(_objectSpread({}, items.find(function (item) {
        return item.id === id;
      })), {}, {
        listIndex: listIndex
      });

      var currentSelectedIds = this.state.selectedItems; // console.log(selectedItem.items)
      // if (selectedItem && selectedItem.items) {
      //     processedItems = selectedItem.items.filter(item => item.listIndex < listIndex);
      // }
      // if (processedItems) {

      updateSelectedItem({
        item: item,
        command: "push"
      });

      if (selectedItem.items) {
        if (selectedItem.items[selectedItem.items.length - 1].listIndex >= listIndex) {
          updateSelectedItem({
            item: item,
            command: "same_list_index",
            listIndex: listIndex
          });
        }
      }

      if (!manageSelectedItems) {
        this.setState({
          selectedItems: [id]
        });
        if (!dropdownClicked && !manageOpened) this.setState({
          opened: false
        });
      }

      if (onItemSelected) onItemSelected({
        clickedItem: _objectSpread(_objectSpread({}, (0, _utils.getItemById)(id, items)), {}, {
          listIndex: listIndex,
          dropdownClicked: dropdownClicked
        }),
        selectedItems: currentSelectedIds,
        isReferenceClicked: dropdownClicked
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props3 = this.props,
          opened = _this$props3.opened,
          selectedItems = _this$props3.selectedItems,
          manageOpened = _this$props3.manageOpened,
          manageSelectedItems = _this$props3.manageSelectedItems,
          scrollToSelected = _this$props3.scrollToSelected;
      var container = this.itemsContainerRef;

      if (manageOpened && opened !== this.state.opened) {
        if (this.state.opened && container && scrollToSelected) container.scrollTop = (0, _utils.calculateScroll)(container, this.state.selectedItems);
        this.setState({
          opened: opened
        });
      }

      if (manageSelectedItems && selectedItems !== this.state.selectedItems) this.setState({
        selectedItems: selectedItems
      });
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;

      var _this$props4 = this.props,
          expandIcon = _this$props4.expandIcon,
          lists = _this$props4.lists;
      var _this$state = this.state,
          opened = _this$state.opened,
          selectedItems = _this$state.selectedItems;
      var listStyles = {
        '--popover-border-radius': '0 0 0.5rem 0.5rem',
        '--popover-border': '1px solid rgb(228, 230, 231)',
        '--popover-shadow': 'none',
        'padding': '0',
        'width': 'max-content',
        maxWidth: "800px"
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
            style: {
              "display": "grid",
              gridAutoFlow: "column"
            },
            children: lists.map(function (list, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DropdownList["default"], {
                onSelectAction: _this2.itemSelected,
                items: list.items,
                selectedItems: selectedItems,
                expandIcon: expandIcon,
                listIndex: index
              });
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
          name = _this$props5.name,
          expandIcon = _this$props5.expandIcon,
          referenceTableFieldsData = _this$props5.referenceTableFieldsData,
          selectedItem = _this$props5.selectedItem;
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
          className: "swf-expand-dropdown-container",
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
              children: hasSelected ? selectedItem.label : placeholder
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

  return ExpandDropdown;
}(React.Component);

ExpandDropdown.defaultProps = {
  disabled: false,
  scrollToSelected: true,
  items: [],
  manageOpened: false,
  manageSelectedItems: false,
  opened: false,
  selectedItems: [],
  selectedItem: {},
  expandIcon: "",
  referenceTableFieldsData: []
};
ExpandDropdown.propTypes = {
  selectedItem: _propTypes["default"].object,
  name: _propTypes["default"].string,
  scrollToSelected: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    label: _propTypes["default"].string,
    disabled: _propTypes["default"].bool,
    reference: _propTypes["default"].string
  })),
  manageOpened: _propTypes["default"].bool,
  manageSelectedItems: _propTypes["default"].bool,
  opened: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  selectedItems: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])),
  onOpened: _propTypes["default"].func,
  onItemSelected: _propTypes["default"].func,
  expandIcon: _propTypes["default"].string
};
var _default = ExpandDropdown;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRXhwYW5kRHJvcGRvd24vRXhwYW5kRHJvcGRvd24uanMiXSwibmFtZXMiOlsiRXhwYW5kRHJvcGRvd24iLCJwcm9wcyIsImdldERyb3Bkb3duQ29udGFpbmVyV2lkdGgiLCJ3aWR0aCIsInNldFN0YXRlIiwiY29udGFpbmVyV2lkdGgiLCJpdGVtU2VsZWN0ZWQiLCJiaW5kIiwicmVuZGVySXRlbXMiLCJkcm9wZG93bkNsaWNrZWQiLCJzdGF0ZSIsIm9wZW5lZCIsInNlbGVjdGVkSXRlbXMiLCJpdGVtc0NvbnRhaW5lclJlZiIsInNlbGVjdGVkSXRlbSIsImRyb3Bkb3duUmVmIiwibWFuYWdlT3BlbmVkIiwib25PcGVuZWQiLCJzY3JvbGxUb1NlbGVjdGVkIiwiY3VycmVudE9wZW5lZCIsImNvbnRhaW5lciIsInNjcm9sbFRvcCIsImlkIiwibGlzdEluZGV4IiwibWFuYWdlU2VsZWN0ZWRJdGVtcyIsIm9uSXRlbVNlbGVjdGVkIiwidXBkYXRlU2VsZWN0ZWRJdGVtIiwicHJvY2Vzc2VkSXRlbXMiLCJpdGVtcyIsImxpc3RzIiwiaXRlbSIsImZpbmQiLCJjdXJyZW50U2VsZWN0ZWRJZHMiLCJjb21tYW5kIiwibGVuZ3RoIiwiY2xpY2tlZEl0ZW0iLCJpc1JlZmVyZW5jZUNsaWNrZWQiLCJleHBhbmRJY29uIiwibGlzdFN0eWxlcyIsIm1heFdpZHRoIiwidGFyZ2V0IiwiY29udGVudCIsImdyaWRBdXRvRmxvdyIsIm1hcCIsImxpc3QiLCJpbmRleCIsImRpc2FibGVkIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwicmVmZXJlbmNlVGFibGVGaWVsZHNEYXRhIiwiaGFzU2VsZWN0ZWQiLCJoYXNMYWJlbCIsImJ1dHRvbkNsYXNzZXMiLCJsYWJlbENsYXNzZXMiLCJlbCIsImN1cnJlbnQiLCJsYWJlbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwib2JqZWN0Iiwic3RyaW5nIiwiYm9vbCIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mVHlwZSIsIm51bWJlciIsInJlZmVyZW5jZSIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsYzs7Ozs7QUFFRiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBb0ZuQkMseUJBcEZtQixHQW9GUyxVQUFDQyxLQUFELEVBQVc7QUFDbkMsWUFBS0MsUUFBTCxDQUFjO0FBQUNDLFFBQUFBLGNBQWMsRUFBRUY7QUFBakIsT0FBZDtBQUNILEtBdEZrQjs7QUFFZixVQUFLRyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLCtCQUFwQjtBQUNBLFVBQUtDLFdBQUwsR0FBa0IsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsK0JBQWxCO0FBQ0EsVUFBS0UsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCRixJQUFyQiwrQkFBdkI7QUFFQSxVQUFLRyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsTUFBTSxFQUFFLE1BQUtWLEtBQUwsQ0FBV1UsTUFEVjtBQUVUQyxNQUFBQSxhQUFhLEVBQUUsTUFBS1gsS0FBTCxDQUFXVyxhQUZqQjtBQUdUQyxNQUFBQSxpQkFBaUIsRUFBRSxJQUhWO0FBSVRSLE1BQUFBLGNBQWMsRUFBRSxDQUpQO0FBS1RTLE1BQUFBLFlBQVksRUFBRSxNQUFLYixLQUFMLENBQVdhO0FBTGhCLEtBQWI7QUFRQSxVQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsVUFBS0YsaUJBQUwsR0FBeUIsSUFBekI7QUFmZTtBQWdCbEI7Ozs7V0FFRCwyQkFBaUI7QUFBQSx3QkFDc0MsS0FBS1osS0FEM0M7QUFBQSxVQUNOZSxZQURNLGVBQ05BLFlBRE07QUFBQSxVQUNRQyxRQURSLGVBQ1FBLFFBRFI7QUFBQSxVQUNrQkMsZ0JBRGxCLGVBQ2tCQSxnQkFEbEI7QUFFYixVQUFNQyxhQUFhLEdBQUcsS0FBS1QsS0FBTCxDQUFXQyxNQUFqQztBQUNBLFVBQU1TLFNBQVMsR0FBRyxLQUFLUCxpQkFBdkI7O0FBR0EsVUFBRyxDQUFDRyxZQUFKLEVBQWlCO0FBQ2IsWUFBRyxDQUFDRyxhQUFELElBQWtCQyxTQUFsQixJQUErQkYsZ0JBQWxDLEVBQ0lFLFNBQVMsQ0FBQ0MsU0FBVixHQUFzQiw0QkFBZ0JELFNBQWhCLEVBQTJCLEtBQUtWLEtBQUwsQ0FBV0UsYUFBdEMsQ0FBdEI7QUFDSixhQUFLUixRQUFMLENBQWM7QUFBQ08sVUFBQUEsTUFBTSxFQUFFLENBQUNRO0FBQVYsU0FBZDtBQUNIOztBQUVELFVBQUdGLFFBQUgsRUFDSUEsUUFBUSxDQUFDO0FBQUVOLFFBQUFBLE1BQU0sRUFBRVE7QUFBVixPQUFELENBQVI7QUFDUDs7O1dBRUQsNEJBQThDO0FBQUEsVUFBaENHLEVBQWdDLFFBQWhDQSxFQUFnQztBQUFBLFVBQTVCYixlQUE0QixRQUE1QkEsZUFBNEI7QUFBQSxVQUFYYyxTQUFXLFFBQVhBLFNBQVc7QUFBQSx5QkFDb0QsS0FBS3RCLEtBRHpEO0FBQUEsVUFDbkN1QixtQkFEbUMsZ0JBQ25DQSxtQkFEbUM7QUFBQSxVQUNkQyxjQURjLGdCQUNkQSxjQURjO0FBQUEsVUFDRVQsWUFERixnQkFDRUEsWUFERjtBQUFBLFVBQ2dCVSxrQkFEaEIsZ0JBQ2dCQSxrQkFEaEI7QUFBQSxVQUNvQ1osWUFEcEMsZ0JBQ29DQSxZQURwQztBQUcxQyxVQUFJYSxjQUFKO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLEtBQUszQixLQUFMLENBQVc0QixLQUFYLENBQWlCTixTQUFqQixFQUE0QkssS0FBeEM7O0FBQ0EsVUFBSUUsSUFBSSxtQ0FBT0YsS0FBSyxDQUFDRyxJQUFOLENBQVcsVUFBQUQsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ1IsRUFBTCxLQUFZQSxFQUFoQjtBQUFBLE9BQWYsQ0FBUDtBQUEyQ0MsUUFBQUEsU0FBUyxFQUFUQTtBQUEzQyxRQUFSOztBQUNBLFVBQU1TLGtCQUFrQixHQUFHLEtBQUt0QixLQUFMLENBQVdFLGFBQXRDLENBTjBDLENBTzFDO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUFjLE1BQUFBLGtCQUFrQixDQUFDO0FBQUNJLFFBQUFBLElBQUksRUFBSkEsSUFBRDtBQUFPRyxRQUFBQSxPQUFPLEVBQUU7QUFBaEIsT0FBRCxDQUFsQjs7QUFDQSxVQUFJbkIsWUFBWSxDQUFDYyxLQUFqQixFQUF3QjtBQUNwQixZQUFJZCxZQUFZLENBQUNjLEtBQWIsQ0FBbUJkLFlBQVksQ0FBQ2MsS0FBYixDQUFtQk0sTUFBbkIsR0FBNEIsQ0FBL0MsRUFBa0RYLFNBQWxELElBQStEQSxTQUFuRSxFQUE4RTtBQUMxRUcsVUFBQUEsa0JBQWtCLENBQUM7QUFBQ0ksWUFBQUEsSUFBSSxFQUFKQSxJQUFEO0FBQU9HLFlBQUFBLE9BQU8sRUFBRSxpQkFBaEI7QUFBbUNWLFlBQUFBLFNBQVMsRUFBVEE7QUFBbkMsV0FBRCxDQUFsQjtBQUNIO0FBQ0o7O0FBRUQsVUFBRyxDQUFDQyxtQkFBSixFQUNBO0FBQ0ksYUFBS3BCLFFBQUwsQ0FBYztBQUFFUSxVQUFBQSxhQUFhLEVBQUUsQ0FBQ1UsRUFBRDtBQUFqQixTQUFkO0FBQ0EsWUFBRyxDQUFDYixlQUFELElBQW9CLENBQUNPLFlBQXhCLEVBQ0ksS0FBS1osUUFBTCxDQUFjO0FBQUNPLFVBQUFBLE1BQU0sRUFBRTtBQUFULFNBQWQ7QUFDUDs7QUFFRCxVQUFHYyxjQUFILEVBQ0lBLGNBQWMsQ0FBQztBQUNYVSxRQUFBQSxXQUFXLGtDQUFNLHdCQUFZYixFQUFaLEVBQWdCTSxLQUFoQixDQUFOO0FBQThCTCxVQUFBQSxTQUFTLEVBQVRBLFNBQTlCO0FBQXlDZCxVQUFBQSxlQUFlLEVBQUVBO0FBQTFELFVBREE7QUFFWEcsUUFBQUEsYUFBYSxFQUFFb0Isa0JBRko7QUFHWEksUUFBQUEsa0JBQWtCLEVBQUUzQjtBQUhULE9BQUQsQ0FBZDtBQUtQOzs7V0FFRCw4QkFBcUI7QUFBQSx5QkFDb0UsS0FBS1IsS0FEekU7QUFBQSxVQUNWVSxNQURVLGdCQUNWQSxNQURVO0FBQUEsVUFDRkMsYUFERSxnQkFDRkEsYUFERTtBQUFBLFVBQ2FJLFlBRGIsZ0JBQ2FBLFlBRGI7QUFBQSxVQUMyQlEsbUJBRDNCLGdCQUMyQkEsbUJBRDNCO0FBQUEsVUFDZ0ROLGdCQURoRCxnQkFDZ0RBLGdCQURoRDtBQUVqQixVQUFNRSxTQUFTLEdBQUcsS0FBS1AsaUJBQXZCOztBQUVBLFVBQUdHLFlBQVksSUFBSUwsTUFBTSxLQUFLLEtBQUtELEtBQUwsQ0FBV0MsTUFBekMsRUFBZ0Q7QUFDNUMsWUFBRyxLQUFLRCxLQUFMLENBQVdDLE1BQVgsSUFBcUJTLFNBQXJCLElBQWtDRixnQkFBckMsRUFDSUUsU0FBUyxDQUFDQyxTQUFWLEdBQXNCLDRCQUFnQkQsU0FBaEIsRUFBMkIsS0FBS1YsS0FBTCxDQUFXRSxhQUF0QyxDQUF0QjtBQUNKLGFBQUtSLFFBQUwsQ0FBYztBQUFDTyxVQUFBQSxNQUFNLEVBQUVBO0FBQVQsU0FBZDtBQUNIOztBQUVELFVBQUdhLG1CQUFtQixJQUFJWixhQUFhLEtBQUksS0FBS0YsS0FBTCxDQUFXRSxhQUF0RCxFQUNRLEtBQUtSLFFBQUwsQ0FBYztBQUFDUSxRQUFBQSxhQUFhLEVBQUVBO0FBQWhCLE9BQWQ7QUFDWDs7O1dBTUQsdUJBQWM7QUFBQTs7QUFBQSx5QkFDa0IsS0FBS1gsS0FEdkI7QUFBQSxVQUNIb0MsVUFERyxnQkFDSEEsVUFERztBQUFBLFVBQ1NSLEtBRFQsZ0JBQ1NBLEtBRFQ7QUFBQSx3QkFFc0IsS0FBS25CLEtBRjNCO0FBQUEsVUFFSEMsTUFGRyxlQUVIQSxNQUZHO0FBQUEsVUFFS0MsYUFGTCxlQUVLQSxhQUZMO0FBSVYsVUFBSTBCLFVBQVUsR0FBRztBQUNiLG1DQUEyQixtQkFEZDtBQUViLDRCQUFvQiw4QkFGUDtBQUdiLDRCQUFvQixNQUhQO0FBSWIsbUJBQVcsR0FKRTtBQUtiLGlCQUFTLGFBTEk7QUFNYkMsUUFBQUEsUUFBUSxFQUFFO0FBTkcsT0FBakI7QUFRSSwwQkFDSSxxQkFBQyxtQkFBRDtBQUNJLFFBQUEsY0FBYyxFQUFFLEtBQUt4QixXQUR6QjtBQUVJLFFBQUEsWUFBWSxFQUFFLElBRmxCO0FBR0ksUUFBQSxNQUFNLEVBQUVKLE1BSFo7QUFJSSxRQUFBLFFBQVEsRUFBRSxJQUpkO0FBS0ksUUFBQSxxQkFBcUIsRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ0YsZUFBTCxFQUFOO0FBQUEsU0FMM0I7QUFNSSxRQUFBLFNBQVMsRUFBRSxDQUFDO0FBQUMrQixVQUFBQSxNQUFNLEVBQUUsY0FBVDtBQUF5QkMsVUFBQUEsT0FBTyxFQUFFO0FBQWxDLFNBQUQsQ0FOZjtBQU9JLFFBQUEsYUFBYSxFQUFFSCxVQVBuQjtBQUFBLCtCQVNJLHFCQUFDLG1CQUFELENBQVMsT0FBVDtBQUFBLGlDQUNJO0FBQ0ksWUFBQSxTQUFTLEVBQUUsMEJBRGY7QUFFSSxZQUFBLEtBQUssRUFDRDtBQUNJLHlCQUFXLE1BRGY7QUFFSUksY0FBQUEsWUFBWSxFQUFFO0FBRmxCLGFBSFI7QUFBQSxzQkFTS2IsS0FBSyxDQUFDYyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsa0NBQ1AscUJBQUMsd0JBQUQ7QUFDSSxnQkFBQSxjQUFjLEVBQUUsTUFBSSxDQUFDdkMsWUFEekI7QUFFSSxnQkFBQSxLQUFLLEVBQUVzQyxJQUFJLENBQUNoQixLQUZoQjtBQUdJLGdCQUFBLGFBQWEsRUFBRWhCLGFBSG5CO0FBSUksZ0JBQUEsVUFBVSxFQUFFeUIsVUFKaEI7QUFLSSxnQkFBQSxTQUFTLEVBQUVRO0FBTGYsZ0JBRE87QUFBQSxhQUFWO0FBVEw7QUFESjtBQVRKLFFBREo7QUFpRFA7OztXQUVELGtCQUFTO0FBQUE7O0FBQUEseUJBVUQsS0FBSzVDLEtBVko7QUFBQSxVQUdENkMsUUFIQyxnQkFHREEsUUFIQztBQUFBLFVBSURDLFdBSkMsZ0JBSURBLFdBSkM7QUFBQSxVQUtEbkIsS0FMQyxnQkFLREEsS0FMQztBQUFBLFVBTURvQixJQU5DLGdCQU1EQSxJQU5DO0FBQUEsVUFPRFgsVUFQQyxnQkFPREEsVUFQQztBQUFBLFVBUURZLHdCQVJDLGdCQVFEQSx3QkFSQztBQUFBLFVBU0RuQyxZQVRDLGdCQVNEQSxZQVRDO0FBQUEseUJBWTJCLEtBQUtKLEtBWmhDO0FBQUEsVUFZRUUsYUFaRixnQkFZRUEsYUFaRjtBQUFBLFVBWWlCRCxNQVpqQixnQkFZaUJBLE1BWmpCO0FBYUwsVUFBSXVDLFdBQVcsR0FBR3RDLGFBQWEsSUFBS0EsYUFBYSxDQUFDc0IsTUFBZCxHQUF1QixDQUEzRDtBQUNBLFVBQUlpQixRQUFRLEdBQUdELFdBQVcsSUFBSUgsV0FBOUI7QUFFQSxVQUFJSyxhQUFhLEdBQUcsNEJBQVc7QUFDM0IsMkJBQW9CLElBRE87QUFFM0Isa0JBQVV6QyxNQUZpQjtBQUczQixvQkFBWW1DO0FBSGUsT0FBWCxDQUFwQjtBQUtBLFVBQUlPLFlBQVksR0FBRyw0QkFBVztBQUMxQiwwQkFBa0IsSUFEUTtBQUUxQix1QkFBZSxDQUFDSDtBQUZVLE9BQVgsQ0FBbkI7QUFLQSwwQkFDSTtBQUFBLCtCQUNJO0FBQUssVUFBQSxTQUFTLEVBQUUsK0JBQWhCO0FBQ0ssVUFBQSxHQUFHLEVBQUksYUFBQUksRUFBRTtBQUFBLG1CQUFJLE1BQUksQ0FBQ3ZDLFdBQUwsR0FBb0I7QUFBQ3dDLGNBQUFBLE9BQU8sRUFBRUQ7QUFBVixhQUF4QjtBQUFBLFdBRGQ7QUFBQSxrQ0FHSTtBQUFPLFlBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsWUFBQSxJQUFJLEVBQUVOO0FBQTNCLFlBSEosZUFJSTtBQUNJLFlBQUEsT0FBTyxFQUFFLEtBQUt2QyxlQURsQjtBQUVJLFlBQUEsUUFBUSxFQUFFcUMsUUFGZDtBQUdJLFlBQUEsU0FBUyxFQUFFTSxhQUhmO0FBQUEsdUJBS0tELFFBQVEsaUJBQ0w7QUFBTyxjQUFBLFNBQVMsRUFBRUUsWUFBbEI7QUFBQSx3QkFDTUgsV0FBVyxHQUNQcEMsWUFBWSxDQUFDMEMsS0FETixHQUVQVDtBQUhWLGNBTlIsZUFhSTtBQUFLLGNBQUEsU0FBUyxFQUFFLGdCQUFoQjtBQUFBLHFDQUNJLHFCQUFDLGdCQUFEO0FBQ0ksZ0JBQUEsSUFBSSxFQUFFLGlCQURWO0FBRUksZ0JBQUEsVUFBVSxFQUFFO0FBRmhCO0FBREosY0FiSjtBQUFBLFlBSkosRUF1QkssS0FBS2hDLFdBQUwsSUFBb0IsS0FBS1AsV0FBTCxFQXZCekI7QUFBQTtBQURKLFFBREo7QUF5REg7Ozs7RUE1T3dCaUQsS0FBSyxDQUFDQyxTOztBQStPbkMxRCxjQUFjLENBQUMyRCxZQUFmLEdBQThCO0FBQzFCYixFQUFBQSxRQUFRLEVBQUUsS0FEZ0I7QUFFMUI1QixFQUFBQSxnQkFBZ0IsRUFBRSxJQUZRO0FBRzFCVSxFQUFBQSxLQUFLLEVBQUUsRUFIbUI7QUFJMUJaLEVBQUFBLFlBQVksRUFBRSxLQUpZO0FBSzFCUSxFQUFBQSxtQkFBbUIsRUFBRSxLQUxLO0FBTTFCYixFQUFBQSxNQUFNLEVBQUUsS0FOa0I7QUFPMUJDLEVBQUFBLGFBQWEsRUFBRSxFQVBXO0FBUTFCRSxFQUFBQSxZQUFZLEVBQUUsRUFSWTtBQVMxQnVCLEVBQUFBLFVBQVUsRUFBRSxFQVRjO0FBVTFCWSxFQUFBQSx3QkFBd0IsRUFBRTtBQVZBLENBQTlCO0FBYUFqRCxjQUFjLENBQUM0RCxTQUFmLEdBQTJCO0FBQ3ZCOUMsRUFBQUEsWUFBWSxFQUFFOEMsc0JBQVVDLE1BREQ7QUFFdkJiLEVBQUFBLElBQUksRUFBRVksc0JBQVVFLE1BRk87QUFHdkI1QyxFQUFBQSxnQkFBZ0IsRUFBRTBDLHNCQUFVRyxJQUhMO0FBSXZCakIsRUFBQUEsUUFBUSxFQUFFYyxzQkFBVUcsSUFKRztBQUt2Qm5DLEVBQUFBLEtBQUssRUFBRWdDLHNCQUFVSSxPQUFWLENBQ0hKLHNCQUFVSyxLQUFWLENBQWdCO0FBQ1ozQyxJQUFBQSxFQUFFLEVBQUVzQyxzQkFBVU0sU0FBVixDQUFvQixDQUNwQk4sc0JBQVVFLE1BRFUsRUFFcEJGLHNCQUFVTyxNQUZVLENBQXBCLENBRFE7QUFLWlgsSUFBQUEsS0FBSyxFQUFFSSxzQkFBVUUsTUFMTDtBQU1aaEIsSUFBQUEsUUFBUSxFQUFFYyxzQkFBVUcsSUFOUjtBQU9aSyxJQUFBQSxTQUFTLEVBQUVSLHNCQUFVRTtBQVBULEdBQWhCLENBREcsQ0FMZ0I7QUFnQnZCOUMsRUFBQUEsWUFBWSxFQUFFNEMsc0JBQVVHLElBaEJEO0FBaUJ2QnZDLEVBQUFBLG1CQUFtQixFQUFFb0Msc0JBQVVHLElBakJSO0FBa0J2QnBELEVBQUFBLE1BQU0sRUFBRWlELHNCQUFVRyxJQWxCSztBQW1CdkJoQixFQUFBQSxXQUFXLEVBQUVhLHNCQUFVRSxNQW5CQTtBQW9CdkJsRCxFQUFBQSxhQUFhLEVBQUVnRCxzQkFBVUksT0FBVixDQUNYSixzQkFBVU0sU0FBVixDQUFvQixDQUNoQk4sc0JBQVVFLE1BRE0sRUFFaEJGLHNCQUFVTyxNQUZNLENBQXBCLENBRFcsQ0FwQlE7QUF5QnZCbEQsRUFBQUEsUUFBUSxFQUFFMkMsc0JBQVVTLElBekJHO0FBMEJ2QjVDLEVBQUFBLGNBQWMsRUFBRW1DLHNCQUFVUyxJQTFCSDtBQTJCdkJoQyxFQUFBQSxVQUFVLEVBQUV1QixzQkFBVUU7QUEzQkMsQ0FBM0I7ZUE4QmU5RCxjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBEcm9wZG93bkxpc3QgZnJvbSBcIi4vRHJvcGRvd25MaXN0XCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi8uLi9JY29uL0ljb25cIlxyXG5pbXBvcnQgUG9wb3ZlciBmcm9tIFwiLi4vLi4vLi4vUG9wb3Zlci9Qb3BvdmVyXCI7XHJcbmltcG9ydCB7Y2FsY3VsYXRlU2Nyb2xsLCBnZXRJdGVtQnlJZH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmNsYXNzIEV4cGFuZERyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLml0ZW1TZWxlY3RlZCA9IHRoaXMuaXRlbVNlbGVjdGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJJdGVtcz0gdGhpcy5yZW5kZXJJdGVtcy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZHJvcGRvd25DbGlja2VkID0gdGhpcy5kcm9wZG93bkNsaWNrZWQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgb3BlbmVkOiB0aGlzLnByb3BzLm9wZW5lZCxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtczogdGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zLFxyXG4gICAgICAgICAgICBpdGVtc0NvbnRhaW5lclJlZjogbnVsbCxcclxuICAgICAgICAgICAgY29udGFpbmVyV2lkdGg6IDAsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbTogdGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZHJvcGRvd25SZWYgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXRlbXNDb250YWluZXJSZWYgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGRyb3Bkb3duQ2xpY2tlZCgpe1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VPcGVuZWQsIG9uT3BlbmVkLCBzY3JvbGxUb1NlbGVjdGVkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE9wZW5lZCA9IHRoaXMuc3RhdGUub3BlbmVkO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuaXRlbXNDb250YWluZXJSZWY7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFtYW5hZ2VPcGVuZWQpe1xyXG4gICAgICAgICAgICBpZighY3VycmVudE9wZW5lZCAmJiBjb250YWluZXIgJiYgc2Nyb2xsVG9TZWxlY3RlZClcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBjYWxjdWxhdGVTY3JvbGwoY29udGFpbmVyLCB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbXMpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZDogIWN1cnJlbnRPcGVuZWR9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihvbk9wZW5lZClcclxuICAgICAgICAgICAgb25PcGVuZWQoeyBvcGVuZWQ6IGN1cnJlbnRPcGVuZWR9KTtcclxuICAgIH1cclxuXHJcbiAgICBpdGVtU2VsZWN0ZWQoe2lkLCBkcm9wZG93bkNsaWNrZWQsIGxpc3RJbmRleH0pe1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VTZWxlY3RlZEl0ZW1zLCBvbkl0ZW1TZWxlY3RlZCwgbWFuYWdlT3BlbmVkLCB1cGRhdGVTZWxlY3RlZEl0ZW0sIHNlbGVjdGVkSXRlbX0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgcHJvY2Vzc2VkSXRlbXM7XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5wcm9wcy5saXN0c1tsaXN0SW5kZXhdLml0ZW1zO1xyXG4gICAgICAgIGxldCBpdGVtID0gey4uLml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBpZCksIGxpc3RJbmRleH07XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGVkSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkSXRlbS5pdGVtcylcclxuXHJcbiAgICAgICAgLy8gaWYgKHNlbGVjdGVkSXRlbSAmJiBzZWxlY3RlZEl0ZW0uaXRlbXMpIHtcclxuICAgICAgICAvLyAgICAgcHJvY2Vzc2VkSXRlbXMgPSBzZWxlY3RlZEl0ZW0uaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5saXN0SW5kZXggPCBsaXN0SW5kZXgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAocHJvY2Vzc2VkSXRlbXMpIHtcclxuICAgICAgICBcclxuICAgICAgICB1cGRhdGVTZWxlY3RlZEl0ZW0oe2l0ZW0sIGNvbW1hbmQ6IFwicHVzaFwifSlcclxuICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW0uaXRlbXNbc2VsZWN0ZWRJdGVtLml0ZW1zLmxlbmd0aCAtIDFdLmxpc3RJbmRleCA+PSBsaXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGVkSXRlbSh7aXRlbSwgY29tbWFuZDogXCJzYW1lX2xpc3RfaW5kZXhcIiwgbGlzdEluZGV4fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCFtYW5hZ2VTZWxlY3RlZEl0ZW1zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSXRlbXM6IFtpZF0gfSk7XHJcbiAgICAgICAgICAgIGlmKCFkcm9wZG93bkNsaWNrZWQgJiYgIW1hbmFnZU9wZW5lZClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZDogZmFsc2V9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYob25JdGVtU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkKHtcclxuICAgICAgICAgICAgICAgIGNsaWNrZWRJdGVtOiB7Li4uZ2V0SXRlbUJ5SWQoaWQsIGl0ZW1zKSwgbGlzdEluZGV4LCBkcm9wZG93bkNsaWNrZWQ6IGRyb3Bkb3duQ2xpY2tlZH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiBjdXJyZW50U2VsZWN0ZWRJZHMsXHJcbiAgICAgICAgICAgICAgICBpc1JlZmVyZW5jZUNsaWNrZWQ6IGRyb3Bkb3duQ2xpY2tlZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHtvcGVuZWQsIHNlbGVjdGVkSXRlbXMsIG1hbmFnZU9wZW5lZCwgbWFuYWdlU2VsZWN0ZWRJdGVtcywgc2Nyb2xsVG9TZWxlY3RlZH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuaXRlbXNDb250YWluZXJSZWY7XHJcblxyXG4gICAgICAgIGlmKG1hbmFnZU9wZW5lZCAmJiBvcGVuZWQgIT09IHRoaXMuc3RhdGUub3BlbmVkKXtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5vcGVuZWQgJiYgY29udGFpbmVyICYmIHNjcm9sbFRvU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gY2FsY3VsYXRlU2Nyb2xsKGNvbnRhaW5lciwgdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWQ6IG9wZW5lZH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihtYW5hZ2VTZWxlY3RlZEl0ZW1zICYmIHNlbGVjdGVkSXRlbXMhPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRJdGVtczogc2VsZWN0ZWRJdGVtc30pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERyb3Bkb3duQ29udGFpbmVyV2lkdGggPSAod2lkdGgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb250YWluZXJXaWR0aDogd2lkdGh9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJJdGVtcygpIHtcclxuICAgICAgICBjb25zdCB7ZXhwYW5kSWNvbiwgbGlzdHN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7b3BlbmVkLCBzZWxlY3RlZEl0ZW1zfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGxldCBsaXN0U3R5bGVzID0ge1xyXG4gICAgICAgICAgICAnLS1wb3BvdmVyLWJvcmRlci1yYWRpdXMnOiAnMCAwIDAuNXJlbSAwLjVyZW0nLFxyXG4gICAgICAgICAgICAnLS1wb3BvdmVyLWJvcmRlcic6ICcxcHggc29saWQgcmdiKDIyOCwgMjMwLCAyMzEpJyxcclxuICAgICAgICAgICAgJy0tcG9wb3Zlci1zaGFkb3cnOiAnbm9uZScsXHJcbiAgICAgICAgICAgICdwYWRkaW5nJzogJzAnLFxyXG4gICAgICAgICAgICAnd2lkdGgnOiAnbWF4LWNvbnRlbnQnLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogXCI4MDBweFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblRhcmdldD17dGhpcy5kcm9wZG93blJlZn1cclxuICAgICAgICAgICAgICAgICAgICBtYW5hZ2VPcGVuZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZVRhaWw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25PdXRlclBvcG92ZXJDbGlja2VkPXsoKSA9PiB0aGlzLmRyb3Bkb3duQ2xpY2tlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucz17W3t0YXJnZXQ6IFwiYm90dG9tLXN0YXJ0XCIsIGNvbnRlbnQ6IFwidG9wLXN0YXJ0XCJ9XX1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50U3R5bGVzPXtsaXN0U3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJkcm9wZG93bi1pdGVtcy1jb250YWluZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZEF1dG9GbG93OiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RzLm1hcCgobGlzdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25MaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0QWN0aW9uPXt0aGlzLml0ZW1TZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2xpc3QuaXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3NlbGVjdGVkSXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEljb249e2V4cGFuZEljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxEcm9wZG93bkxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdEFjdGlvbj17dGhpcy5pdGVtU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3NlbGVjdGVkSXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kSWNvbj17ZXhwYW5kSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ISFyZWZlcmVuY2VUYWJsZUZpZWxkc0RhdGEubGVuZ3RoICYmIHJlZmVyZW5jZVRhYmxlRmllbGRzRGF0YS5tYXAocmVmSXRlbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0QWN0aW9uPXt0aGlzLml0ZW1TZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtyZWZJdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3NlbGVjdGVkSXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRJY29uPXtleHBhbmRJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICBpdGVtcyxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgZXhwYW5kSWNvbixcclxuICAgICAgICAgICAgcmVmZXJlbmNlVGFibGVGaWVsZHNEYXRhLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1cclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3Qge3NlbGVjdGVkSXRlbXMsIG9wZW5lZH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBoYXNTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXMgJiYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCApO1xyXG4gICAgICAgIGxldCBoYXNMYWJlbCA9IGhhc1NlbGVjdGVkIHx8IHBsYWNlaG9sZGVyO1xyXG5cclxuICAgICAgICBsZXQgYnV0dG9uQ2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICBcImRyb3Bkb3duLWJ1dHRvblwiIDogdHJ1ZSxcclxuICAgICAgICAgICAgXCJvcGVuZWRcIjogb3BlbmVkLFxyXG4gICAgICAgICAgICBcImRpc2FibGVkXCI6IGRpc2FibGVkXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgbGFiZWxDbGFzc2VzID0gY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgIFwiZHJvcGRvd24tbGFiZWxcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiAhaGFzU2VsZWN0ZWRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic3dmLWV4cGFuZC1kcm9wZG93bi1jb250YWluZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgcmVmID0ge2VsID0+IHRoaXMuZHJvcGRvd25SZWYgPSAge2N1cnJlbnQ6IGVsfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9e25hbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZHJvcGRvd25DbGlja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3Nlc31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNMYWJlbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gIGNsYXNzTmFtZT17bGFiZWxDbGFzc2VzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhhc1NlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZWN0ZWRJdGVtLmxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZHJvcGRvd24tY2FyZXRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e1wiY2FyZXQtZG93bi1maWxsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tU2l6ZT17MTJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmRyb3Bkb3duUmVmICYmIHRoaXMucmVuZGVySXRlbXMoKX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7Lyoge3RoaXMuZHJvcGRvd25SZWYgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25MaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25SZWY9e3RoaXMuZHJvcGRvd25SZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ecm9wZG93bkNsaWNrZWQ9e3RoaXMuZHJvcGRvd25DbGlja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lZD17b3BlbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlbmVkPXt0aGlzLnByb3BzLm9uT3BlbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17KHJlZikgPT4gUmVhY3RET00uZmluZERPTU5vZGUocmVmKSA/IHRoaXMuaXRlbXNDb250YWluZXJSZWYgPSBSZWFjdERPTS5maW5kRE9NTm9kZShyZWYpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wZG93bi1pdGVtcy1jb250YWluZXJcIilbMF0gOiAoKSA9PiB2b2lkKDApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0QWN0aW9uPXt0aGlzLml0ZW1TZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17c2VsZWN0ZWRJdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRJY29uPXtleHBhbmRJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93blJlZj17dGhpcy5kcm9wZG93blJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyb3Bkb3duQ2xpY2tlZD17dGhpcy5kcm9wZG93bkNsaWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT17dGhpcy5pdGVtc0NvbnRhaW5lclJlZiA/IHtcImxlZnRcIjogYCR7dGhpcy5pdGVtc0NvbnRhaW5lclJlZi5vZmZzZXRXaWR0aH1gfSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuZWQ9e3RoaXMucHJvcHMub25PcGVuZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVmPXsocmVmKSA9PiBSZWFjdERPTS5maW5kRE9NTm9kZShyZWYpID8gdGhpcy5pdGVtc0NvbnRhaW5lclJlZiA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHJlZikuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyb3Bkb3duLWl0ZW1zLWNvbnRhaW5lclwiKVswXSA6ICgpID0+IHZvaWQoMCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RBY3Rpb249e3RoaXMuaXRlbVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtzZWxlY3RlZEl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEljb249e2V4cGFuZEljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5FeHBhbmREcm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBzY3JvbGxUb1NlbGVjdGVkOiB0cnVlLFxyXG4gICAgaXRlbXM6IFtdLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBmYWxzZSxcclxuICAgIG1hbmFnZVNlbGVjdGVkSXRlbXM6IGZhbHNlLFxyXG4gICAgb3BlbmVkOiBmYWxzZSxcclxuICAgIHNlbGVjdGVkSXRlbXM6IFtdLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiB7fSxcclxuICAgIGV4cGFuZEljb246IFwiXCIsXHJcbiAgICByZWZlcmVuY2VUYWJsZUZpZWxkc0RhdGE6IFtdXHJcbn1cclxuXHJcbkV4cGFuZERyb3Bkb3duLnByb3BUeXBlcyA9IHtcclxuICAgIHNlbGVjdGVkSXRlbTogcHJvcFR5cGVzLm9iamVjdCxcclxuICAgIG5hbWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzY3JvbGxUb1NlbGVjdGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGl0ZW1zOiBwcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBwcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgICAgICBpZDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHJvcFR5cGVzLm51bWJlclxyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICAgICAgcmVmZXJlbmNlOiBwcm9wVHlwZXMuc3RyaW5nXHJcbiAgICAgICAgfVxyXG4gICAgKSksXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlU2VsZWN0ZWRJdGVtczogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgcGxhY2Vob2xkZXI6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzZWxlY3RlZEl0ZW1zOiBwcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBwcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgcHJvcFR5cGVzLm51bWJlcl1cclxuICAgICAgICApKSxcclxuICAgIG9uT3BlbmVkOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uSXRlbVNlbGVjdGVkOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIGV4cGFuZEljb246IHByb3BUeXBlcy5zdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kRHJvcGRvd25cclxuIl19