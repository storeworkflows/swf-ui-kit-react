"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _uuid = require("uuid");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var React = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _Popover = _interopRequireDefault(require("../../../Popover/Popover"));

var _DropdownList = _interopRequireDefault(require("./DropdownList"));

var _Icon = _interopRequireDefault(require("../../../Icon/Icon"));

var _DropdownListHeader = _interopRequireDefault(require("./DropdownListHeader"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

    _this.getWidth = function (_ref) {
      var elm = _ref.elm;
      if (_this.state.clientWidth !== elm.clientWidth) _this.setState({
        clientWidth: elm.clientWidth
      });
    };

    _this.getDropdownContainerWidth = function (width) {
      _this.setState({
        containerWidth: width
      });
    };

    _this.onSearch = function (_ref2) {
      var value = _ref2.value;
      var _this$props = _this.props,
          lists = _this$props.lists,
          selectedItems = _this$props.selectedItems;
      var searchValue = value.trim();
      var filteredList = lists.map(function (list, index) {
        return {
          items: [].concat(_toConsumableArray([selectedItems[index]].filter(Boolean)), _toConsumableArray(list.items.filter(function (item) {
            var itemsToReturn = !!selectedItems[index] ? !!item.label.toLowerCase().match(searchValue.toLowerCase()) && selectedItems[index].id !== item.id : !!item.label.toLowerCase().match(searchValue.toLowerCase());
            return itemsToReturn;
          })))
        };
      });

      _this.setState({
        searchValue: searchValue,
        filteredList: filteredList
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
      selectedItem: _this.props.selectedItem,
      searchValue: "",
      filteredList: [],
      clickedFields: [],
      clientWidth: 0
    };
    _this.dropdownRef = null;
    _this.itemsContainerRef = null;
    _this.firstListRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(ExpandDropdown, [{
    key: "dropdownClicked",
    value: function dropdownClicked() {
      var _this$props2 = this.props,
          manageOpened = _this$props2.manageOpened,
          onOpened = _this$props2.onOpened,
          scrollToSelected = _this$props2.scrollToSelected;
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
    value: function itemSelected(_ref3) {
      var id = _ref3.id,
          dropdownClicked = _ref3.dropdownClicked,
          listIndex = _ref3.listIndex;
      var _this$props3 = this.props,
          manageSelectedItems = _this$props3.manageSelectedItems,
          onItemSelected = _this$props3.onItemSelected,
          manageOpened = _this$props3.manageOpened,
          updateSelectedItem = _this$props3.updateSelectedItem,
          selectedItem = _this$props3.selectedItem;
      var items = this.props.lists[listIndex].items;

      var item = _objectSpread(_objectSpread({}, items.find(function (item) {
        return item.id === id;
      })), {}, {
        listIndex: listIndex,
        dropdownClicked: dropdownClicked
      });

      var currentSelectedIds = this.state.selectedItems.map(function (item) {
        return item.id;
      });
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
    value: function componentDidUpdate(prevProps) {
      var _this$props4 = this.props,
          opened = _this$props4.opened,
          selectedItems = _this$props4.selectedItems,
          manageOpened = _this$props4.manageOpened,
          manageSelectedItems = _this$props4.manageSelectedItems,
          scrollToSelected = _this$props4.scrollToSelected,
          lists = _this$props4.lists;
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
      if (prevProps.lists !== lists) this.onSearch({
        value: this.state.searchValue
      });
    }
  }, {
    key: "renderItems",
    value: function renderItems(_ref4) {
      var _this2 = this;

      var autofocus = _ref4.autofocus;
      var _this$props5 = this.props,
          expandIcon = _this$props5.expandIcon,
          lists = _this$props5.lists,
          selectedItems = _this$props5.selectedItems,
          selectedItem = _this$props5.selectedItem;
      var _this$state = this.state,
          opened = _this$state.opened,
          filteredList = _this$state.filteredList,
          searchValue = _this$state.searchValue,
          clientWidth = _this$state.clientWidth;
      var key = (0, _uuid.v4)();
      var listStyles = {
        '--popover-border-radius': '0 0 0.5rem 0.5rem',
        '--popover-border': '1px solid rgb(228, 230, 231)',
        '--popover-shadow': 'none',
        'padding': '0',
        'width': 'max-content',
        maxWidth: "800px"
      };
      var valueToShow = !!searchValue && !!filteredList.length ? filteredList : lists;
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
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Popover["default"].Content, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DropdownListHeader["default"], {
            onSearch: this.onSearch,
            searchBarWidth: clientWidth,
            searchValue: searchValue,
            selectedItem: selectedItem.items,
            itemSelected: this.itemSelected
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "dropdown-items-container",
            style: {
              "display": "grid",
              gridAutoFlow: "column"
            },
            children: valueToShow.map(function (list, index) {
              return opened && /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DropdownList["default"], {
                  onSelectAction: _this2.itemSelected,
                  items: list.items,
                  selectedItems: selectedItems,
                  expandIcon: expandIcon,
                  listIndex: index,
                  autofocus: autofocus,
                  getWidth: _this2.getWidth
                }, index + (0, _uuid.v4)().split("-").join(""))
              });
            })
          })]
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
          name = _this$props6.name,
          selectedItem = _this$props6.selectedItem;
      var _this$state2 = this.state,
          selectedItems = _this$state2.selectedItems,
          opened = _this$state2.opened;
      var hasSelected = selectedItems && selectedItems.length > 0 && !!selectedItem.label;
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
          }), this.dropdownRef && this.state.opened && this.renderItems({
            autofocus: true
          })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRXhwYW5kRHJvcGRvd24vRXhwYW5kRHJvcGRvd24uanMiXSwibmFtZXMiOlsiRXhwYW5kRHJvcGRvd24iLCJwcm9wcyIsImdldFdpZHRoIiwiZWxtIiwic3RhdGUiLCJjbGllbnRXaWR0aCIsInNldFN0YXRlIiwiZ2V0RHJvcGRvd25Db250YWluZXJXaWR0aCIsIndpZHRoIiwiY29udGFpbmVyV2lkdGgiLCJvblNlYXJjaCIsInZhbHVlIiwibGlzdHMiLCJzZWxlY3RlZEl0ZW1zIiwic2VhcmNoVmFsdWUiLCJ0cmltIiwiZmlsdGVyZWRMaXN0IiwibWFwIiwibGlzdCIsImluZGV4IiwiaXRlbXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiaXRlbSIsIml0ZW1zVG9SZXR1cm4iLCJsYWJlbCIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJpZCIsIml0ZW1TZWxlY3RlZCIsImJpbmQiLCJyZW5kZXJJdGVtcyIsImRyb3Bkb3duQ2xpY2tlZCIsIm9wZW5lZCIsIml0ZW1zQ29udGFpbmVyUmVmIiwic2VsZWN0ZWRJdGVtIiwiY2xpY2tlZEZpZWxkcyIsImRyb3Bkb3duUmVmIiwiZmlyc3RMaXN0UmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJtYW5hZ2VPcGVuZWQiLCJvbk9wZW5lZCIsInNjcm9sbFRvU2VsZWN0ZWQiLCJjdXJyZW50T3BlbmVkIiwiY29udGFpbmVyIiwic2Nyb2xsVG9wIiwibGlzdEluZGV4IiwibWFuYWdlU2VsZWN0ZWRJdGVtcyIsIm9uSXRlbVNlbGVjdGVkIiwidXBkYXRlU2VsZWN0ZWRJdGVtIiwiZmluZCIsImN1cnJlbnRTZWxlY3RlZElkcyIsImNvbW1hbmQiLCJsZW5ndGgiLCJjbGlja2VkSXRlbSIsImlzUmVmZXJlbmNlQ2xpY2tlZCIsInByZXZQcm9wcyIsImF1dG9mb2N1cyIsImV4cGFuZEljb24iLCJrZXkiLCJsaXN0U3R5bGVzIiwibWF4V2lkdGgiLCJ2YWx1ZVRvU2hvdyIsInRhcmdldCIsImNvbnRlbnQiLCJncmlkQXV0b0Zsb3ciLCJzcGxpdCIsImpvaW4iLCJkaXNhYmxlZCIsInBsYWNlaG9sZGVyIiwibmFtZSIsImhhc1NlbGVjdGVkIiwiaGFzTGFiZWwiLCJidXR0b25DbGFzc2VzIiwibGFiZWxDbGFzc2VzIiwiZWwiLCJjdXJyZW50IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicmVmZXJlbmNlVGFibGVGaWVsZHNEYXRhIiwicHJvcFR5cGVzIiwib2JqZWN0Iiwic3RyaW5nIiwiYm9vbCIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mVHlwZSIsIm51bWJlciIsInJlZmVyZW5jZSIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsYzs7Ozs7QUFFRiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBdUNuQkMsUUF2Q21CLEdBdUNSLGdCQUFXO0FBQUEsVUFBVEMsR0FBUyxRQUFUQSxHQUFTO0FBQ2xCLFVBQUksTUFBS0MsS0FBTCxDQUFXQyxXQUFYLEtBQTJCRixHQUFHLENBQUNFLFdBQW5DLEVBQ0ksTUFBS0MsUUFBTCxDQUFjO0FBQUNELFFBQUFBLFdBQVcsRUFBRUYsR0FBRyxDQUFDRTtBQUFsQixPQUFkO0FBQ1AsS0ExQ2tCOztBQUFBLFVBeUZuQkUseUJBekZtQixHQXlGUyxVQUFDQyxLQUFELEVBQVc7QUFDbkMsWUFBS0YsUUFBTCxDQUFjO0FBQUNHLFFBQUFBLGNBQWMsRUFBRUQ7QUFBakIsT0FBZDtBQUNILEtBM0ZrQjs7QUFBQSxVQTZGbkJFLFFBN0ZtQixHQTZGUixpQkFBYTtBQUFBLFVBQVhDLEtBQVcsU0FBWEEsS0FBVztBQUFBLHdCQUNhLE1BQUtWLEtBRGxCO0FB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LFNBQVYsQ0FBb0IsQ0FDaEJOLHNCQUFVRSxNQURNLEVBRWhCRixzQkFBVU8sTUFGTSxDQUFwQixDQURXLENBcEJRO0FBeUJ2QjlDLEVBQUFBLFFBQVEsRUFBRXVDLHNCQUFVUyxJQXpCRztBQTBCdkJ6QyxFQUFBQSxjQUFjLEVBQUVnQyxzQkFBVVMsSUExQkg7QUEyQnZCL0IsRUFBQUEsVUFBVSxFQUFFc0Isc0JBQVVFO0FBM0JDLENBQTNCO2VBOEJlbkYsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtjYWxjdWxhdGVTY3JvbGwsIGdldEl0ZW1CeUlkfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgUG9wb3ZlciBmcm9tIFwiLi4vLi4vLi4vUG9wb3Zlci9Qb3BvdmVyXCI7XHJcbmltcG9ydCBEcm9wZG93bkxpc3QgZnJvbSBcIi4vRHJvcGRvd25MaXN0XCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi8uLi9JY29uL0ljb25cIlxyXG5pbXBvcnQgRHJvcGRvd25MaXN0SGVhZGVyIGZyb20gXCIuL0Ryb3Bkb3duTGlzdEhlYWRlclwiO1xyXG5cclxuY2xhc3MgRXhwYW5kRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaXRlbVNlbGVjdGVkID0gdGhpcy5pdGVtU2VsZWN0ZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlbmRlckl0ZW1zPSB0aGlzLnJlbmRlckl0ZW1zLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kcm9wZG93bkNsaWNrZWQgPSB0aGlzLmRyb3Bkb3duQ2xpY2tlZC5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBvcGVuZWQ6IHRoaXMucHJvcHMub3BlbmVkLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiB0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMsXHJcbiAgICAgICAgICAgIGl0ZW1zQ29udGFpbmVyUmVmOiBudWxsLFxyXG4gICAgICAgICAgICBjb250YWluZXJXaWR0aDogMCxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiB0aGlzLnByb3BzLnNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgICAgc2VhcmNoVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGZpbHRlcmVkTGlzdDogW10sXHJcbiAgICAgICAgICAgIGNsaWNrZWRGaWVsZHM6IFtdLFxyXG4gICAgICAgICAgICBjbGllbnRXaWR0aDogMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kcm9wZG93blJlZiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pdGVtc0NvbnRhaW5lclJlZiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5maXJzdExpc3RSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcm9wZG93bkNsaWNrZWQoKXtcclxuICAgICAgICBjb25zdCB7bWFuYWdlT3BlbmVkLCBvbk9wZW5lZCwgc2Nyb2xsVG9TZWxlY3RlZH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRPcGVuZWQgPSB0aGlzLnN0YXRlLm9wZW5lZDtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLml0ZW1zQ29udGFpbmVyUmVmO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBpZighbWFuYWdlT3BlbmVkKXtcclxuICAgICAgICAgICAgaWYoIWN1cnJlbnRPcGVuZWQgJiYgY29udGFpbmVyICYmIHNjcm9sbFRvU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gY2FsY3VsYXRlU2Nyb2xsKGNvbnRhaW5lciwgdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWQ6ICFjdXJyZW50T3BlbmVkfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYob25PcGVuZWQpXHJcbiAgICAgICAgICAgIG9uT3BlbmVkKHsgb3BlbmVkOiBjdXJyZW50T3BlbmVkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2lkdGggPSAoe2VsbX0pID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jbGllbnRXaWR0aCAhPT0gZWxtLmNsaWVudFdpZHRoKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjbGllbnRXaWR0aDogZWxtLmNsaWVudFdpZHRofSlcclxuICAgIH1cclxuXHJcbiAgICBpdGVtU2VsZWN0ZWQoe2lkLCBkcm9wZG93bkNsaWNrZWQsIGxpc3RJbmRleH0pe1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VTZWxlY3RlZEl0ZW1zLCBvbkl0ZW1TZWxlY3RlZCwgbWFuYWdlT3BlbmVkLCB1cGRhdGVTZWxlY3RlZEl0ZW0sIHNlbGVjdGVkSXRlbX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBpdGVtcyA9IHRoaXMucHJvcHMubGlzdHNbbGlzdEluZGV4XS5pdGVtcztcclxuICAgICAgICBsZXQgaXRlbSA9IHsuLi5pdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpLCBsaXN0SW5kZXgsIGRyb3Bkb3duQ2xpY2tlZH07XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGVkSWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zLm1hcChpdGVtID0+IGl0ZW0uaWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHVwZGF0ZVNlbGVjdGVkSXRlbSh7aXRlbSwgY29tbWFuZDogXCJwdXNoXCJ9KVxyXG4gICAgICAgIGlmIChzZWxlY3RlZEl0ZW0uaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbS5pdGVtc1tzZWxlY3RlZEl0ZW0uaXRlbXMubGVuZ3RoIC0gMV0ubGlzdEluZGV4ID49IGxpc3RJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2VsZWN0ZWRJdGVtKHtpdGVtLCBjb21tYW5kOiBcInNhbWVfbGlzdF9pbmRleFwiLCBsaXN0SW5kZXh9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIW1hbmFnZVNlbGVjdGVkSXRlbXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtczogW2lkXSB9KTtcclxuICAgICAgICAgICAgaWYoIWRyb3Bkb3duQ2xpY2tlZCAmJiAhbWFuYWdlT3BlbmVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkOiBmYWxzZX0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvbkl0ZW1TZWxlY3RlZClcclxuICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQoe1xyXG4gICAgICAgICAgICAgICAgY2xpY2tlZEl0ZW06IHsuLi5nZXRJdGVtQnlJZChpZCwgaXRlbXMpLCBsaXN0SW5kZXgsIGRyb3Bkb3duQ2xpY2tlZDogZHJvcGRvd25DbGlja2VkfSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM6IGN1cnJlbnRTZWxlY3RlZElkcyxcclxuICAgICAgICAgICAgICAgIGlzUmVmZXJlbmNlQ2xpY2tlZDogZHJvcGRvd25DbGlja2VkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgY29uc3Qge29wZW5lZCwgc2VsZWN0ZWRJdGVtcywgbWFuYWdlT3BlbmVkLCBtYW5hZ2VTZWxlY3RlZEl0ZW1zLCBzY3JvbGxUb1NlbGVjdGVkLCBsaXN0c30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuaXRlbXNDb250YWluZXJSZWY7XHJcblxyXG4gICAgICAgIGlmIChtYW5hZ2VPcGVuZWQgJiYgb3BlbmVkICE9PSB0aGlzLnN0YXRlLm9wZW5lZCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLm9wZW5lZCAmJiBjb250YWluZXIgJiYgc2Nyb2xsVG9TZWxlY3RlZClcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBjYWxjdWxhdGVTY3JvbGwoY29udGFpbmVyLCB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbXMpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZDogb3BlbmVkfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYW5hZ2VTZWxlY3RlZEl0ZW1zICYmIHNlbGVjdGVkSXRlbXMhPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRJdGVtczogc2VsZWN0ZWRJdGVtc30pO1xyXG5cclxuICAgICAgICBpZiAocHJldlByb3BzLmxpc3RzICE9PSBsaXN0cylcclxuICAgICAgICAgICAgdGhpcy5vblNlYXJjaCh7dmFsdWU6IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWV9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldERyb3Bkb3duQ29udGFpbmVyV2lkdGggPSAod2lkdGgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb250YWluZXJXaWR0aDogd2lkdGh9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaCA9ICh7dmFsdWV9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBsaXN0cywgc2VsZWN0ZWRJdGVtcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBzZWFyY2hWYWx1ZSA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZExpc3QgPSBsaXN0cy5tYXAoKGxpc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLltzZWxlY3RlZEl0ZW1zW2luZGV4XV0uZmlsdGVyKEJvb2xlYW4pLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmxpc3QuaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbXNUb1JldHVybiA9ICEhc2VsZWN0ZWRJdGVtc1tpbmRleF0gPyAhIWl0ZW0ubGFiZWwudG9Mb3dlckNhc2UoKS5tYXRjaChzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSAmJiBzZWxlY3RlZEl0ZW1zW2luZGV4XS5pZCAhPT0gaXRlbS5pZCA6ICghIWl0ZW0ubGFiZWwudG9Mb3dlckNhc2UoKS5tYXRjaChzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zVG9SZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoVmFsdWUsIGZpbHRlcmVkTGlzdH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckl0ZW1zKHthdXRvZm9jdXN9KSB7XHJcbiAgICAgICAgY29uc3Qge2V4cGFuZEljb24sIGxpc3RzLCBzZWxlY3RlZEl0ZW1zLCBzZWxlY3RlZEl0ZW19ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7b3BlbmVkLCBmaWx0ZXJlZExpc3QsIHNlYXJjaFZhbHVlLCBjbGllbnRXaWR0aH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBrZXkgPSB1dWlkdjQoKTtcclxuXHJcbiAgICAgICAgbGV0IGxpc3RTdHlsZXMgPSB7XHJcbiAgICAgICAgICAgICctLXBvcG92ZXItYm9yZGVyLXJhZGl1cyc6ICcwIDAgMC41cmVtIDAuNXJlbScsXHJcbiAgICAgICAgICAgICctLXBvcG92ZXItYm9yZGVyJzogJzFweCBzb2xpZCByZ2IoMjI4LCAyMzAsIDIzMSknLFxyXG4gICAgICAgICAgICAnLS1wb3BvdmVyLXNoYWRvdyc6ICdub25lJyxcclxuICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCcsXHJcbiAgICAgICAgICAgICd3aWR0aCc6ICdtYXgtY29udGVudCcsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjgwMHB4XCJcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmFsdWVUb1Nob3cgPSAoISFzZWFyY2hWYWx1ZSAmJiAhIWZpbHRlcmVkTGlzdC5sZW5ndGgpID8gZmlsdGVyZWRMaXN0IDogbGlzdHM7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uVGFyZ2V0PXt0aGlzLmRyb3Bkb3duUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZU9wZW5lZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvcGVuZWQ9e29wZW5lZH1cclxuICAgICAgICAgICAgICAgICAgICBoaWRlVGFpbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbk91dGVyUG9wb3ZlckNsaWNrZWQ9eygpID0+IHRoaXMuZHJvcGRvd25DbGlja2VkKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zPXtbe3RhcmdldDogXCJib3R0b20tc3RhcnRcIiwgY29udGVudDogXCJ0b3Atc3RhcnRcIn1dfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e2xpc3RTdHlsZXN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTGlzdEhlYWRlciBvblNlYXJjaD17dGhpcy5vblNlYXJjaH0gc2VhcmNoQmFyV2lkdGg9e2NsaWVudFdpZHRofSBzZWFyY2hWYWx1ZT17c2VhcmNoVmFsdWV9IHNlbGVjdGVkSXRlbT17c2VsZWN0ZWRJdGVtLml0ZW1zfSBpdGVtU2VsZWN0ZWQ9e3RoaXMuaXRlbVNlbGVjdGVkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImRyb3Bkb3duLWl0ZW1zLWNvbnRhaW5lclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkQXV0b0Zsb3c6IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWVUb1Nob3cubWFwKChsaXN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25MaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RBY3Rpb249e3RoaXMuaXRlbVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtsaXN0Lml0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3NlbGVjdGVkSXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kSWNvbj17ZXhwYW5kSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0SW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1cz17YXV0b2ZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXggKyB1dWlkdjQoKS5zcGxpdChcIi1cIikuam9pbihcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRXaWR0aD17dGhpcy5nZXRXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbVxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCB7c2VsZWN0ZWRJdGVtcywgb3BlbmVkfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGhhc1NlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcyAmJiAoc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwICkgJiYgISFzZWxlY3RlZEl0ZW0ubGFiZWw7XHJcbiAgICAgICAgbGV0IGhhc0xhYmVsID0gaGFzU2VsZWN0ZWQgfHwgcGxhY2Vob2xkZXI7XHJcblxyXG4gICAgICAgIGxldCBidXR0b25DbGFzc2VzID0gY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgIFwiZHJvcGRvd24tYnV0dG9uXCIgOiB0cnVlLFxyXG4gICAgICAgICAgICBcIm9wZW5lZFwiOiBvcGVuZWQsXHJcbiAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogZGlzYWJsZWRcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBsYWJlbENsYXNzZXMgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgXCJkcm9wZG93bi1sYWJlbFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6ICFoYXNTZWxlY3RlZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInN3Zi1leHBhbmQtZHJvcGRvd24tY29udGFpbmVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgIHJlZiA9IHtlbCA9PiB0aGlzLmRyb3Bkb3duUmVmID0gIHtjdXJyZW50OiBlbH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPXtuYW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRyb3Bkb3duQ2xpY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aGFzTGFiZWwgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICBjbGFzc05hbWU9e2xhYmVsQ2xhc3Nlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBoYXNTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGVjdGVkSXRlbS5sYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRyb3Bkb3duLWNhcmV0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtcImNhcmV0LWRvd24tZmlsbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVNpemU9ezEyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7KHRoaXMuZHJvcGRvd25SZWYgJiYgdGhpcy5zdGF0ZS5vcGVuZWQpICYmIHRoaXMucmVuZGVySXRlbXMoe2F1dG9mb2N1czogdHJ1ZX0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuRXhwYW5kRHJvcGRvd24uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgc2Nyb2xsVG9TZWxlY3RlZDogdHJ1ZSxcclxuICAgIGl0ZW1zOiBbXSxcclxuICAgIG1hbmFnZU9wZW5lZDogZmFsc2UsXHJcbiAgICBtYW5hZ2VTZWxlY3RlZEl0ZW1zOiBmYWxzZSxcclxuICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICBzZWxlY3RlZEl0ZW1zOiBbXSxcclxuICAgIHNlbGVjdGVkSXRlbToge30sXHJcbiAgICBleHBhbmRJY29uOiBcIlwiLFxyXG4gICAgcmVmZXJlbmNlVGFibGVGaWVsZHNEYXRhOiBbXVxyXG59XHJcblxyXG5FeHBhbmREcm9wZG93bi5wcm9wVHlwZXMgPSB7XHJcbiAgICBzZWxlY3RlZEl0ZW06IHByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBuYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2Nyb2xsVG9TZWxlY3RlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpdGVtczogcHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgICAgcHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICAgICAgaWQ6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgICAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgICAgIHByb3BUeXBlcy5udW1iZXJcclxuICAgICAgICAgICAgXSksXHJcbiAgICAgICAgICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZTogcHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgICAgIH1cclxuICAgICkpLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZVNlbGVjdGVkSXRlbXM6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgb3BlbmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHBsYWNlaG9sZGVyOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2VsZWN0ZWRJdGVtczogcHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgICAgcHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgIHByb3BUeXBlcy5udW1iZXJdXHJcbiAgICAgICAgKSksXHJcbiAgICBvbk9wZW5lZDogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkl0ZW1TZWxlY3RlZDogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBleHBhbmRJY29uOiBwcm9wVHlwZXMuc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGFuZERyb3Bkb3duXHJcbiJdfQ==