"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _Popover = _interopRequireDefault(require("../Popover/Popover"));

var _DropdownItem = _interopRequireDefault(require("./DropdownItem"));

var _InfoMessage = _interopRequireDefault(require("../InfoMessage/InfoMessage"));

var _RequiredLabel = _interopRequireDefault(require("../RequiredLabel/RequiredLabel"));

var _utils = require("./utils");

var _constants = require("./constants");

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

var Dropdown = /*#__PURE__*/function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  var _super = _createSuper(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, props);
    _this.dropdownClicked = _this.dropdownClicked.bind(_assertThisInitialized(_this));
    _this.itemSelected = _this.itemSelected.bind(_assertThisInitialized(_this));
    _this.renderItems = _this.renderItems.bind(_assertThisInitialized(_this));
    _this.onInvalid = _this.onInvalid.bind(_assertThisInitialized(_this));
    var _this$props = _this.props,
        opened = _this$props.opened,
        invalid = _this$props.invalid,
        selectedItems = _this$props.selectedItems,
        items = _this$props.items;
    _this.state = {
      opened: opened,
      invalid: invalid,
      selectedItems: (0, _utils.getCorrectSelected)(items, selectedItems)
    };
    _this.dropdownRef = /*#__PURE__*/React.createRef();
    _this.itemsContainerRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(Dropdown, [{
    key: "onInvalid",
    value: function onInvalid(e) {
      var _this$props2 = this.props,
          manageInvalid = _this$props2.manageInvalid,
          onInvalid = _this$props2.onInvalid;
      if (!manageInvalid) this.setState({
        invalid: true
      });
      onInvalid(e);
    }
  }, {
    key: "dropdownClicked",
    value: function dropdownClicked() {
      var _this$props3 = this.props,
          manageOpened = _this$props3.manageOpened,
          onOpened = _this$props3.onOpened;
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
      var _this$props4 = this.props,
          manageSelectedItems = _this$props4.manageSelectedItems,
          onItemSelected = _this$props4.onItemSelected,
          manageOpened = _this$props4.manageOpened,
          items = _this$props4.items,
          select = _this$props4.select;
      var currentSelectedIds = this.state.selectedItems;

      if (!manageSelectedItems) {
        switch (select) {
          case _constants.DROPDOWN.SELECT.SINGLE:
            currentSelectedIds = currentSelectedIds[0] === id ? [] : [id];
            break;

          case _constants.DROPDOWN.SELECT.MULTI:
            if (currentSelectedIds.includes(id)) currentSelectedIds = currentSelectedIds.filter(function (currentId) {
              return currentId !== id;
            });else currentSelectedIds.push(id);
            break;

          default:
            currentSelectedIds = [];
            break;
        }

        this.setState({
          selectedItems: currentSelectedIds
        });
      }

      if (!manageOpened && select !== _constants.DROPDOWN.SELECT.MULTI) this.setState({
        opened: false
      });
      onItemSelected({
        clickedItem: (0, _utils.getItemById)(id, items),
        selectedItems: currentSelectedIds
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props5 = this.props,
          opened = _this$props5.opened,
          selectedItems = _this$props5.selectedItems,
          invalid = _this$props5.invalid,
          manageOpened = _this$props5.manageOpened,
          manageSelectedItems = _this$props5.manageSelectedItems,
          manageInvalid = _this$props5.manageInvalid;
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

      var _this$props6 = this.props,
          items = _this$props6.items,
          scrollToSelected = _this$props6.scrollToSelected,
          itemClassName = _this$props6.itemClassName;
      var _this$state = this.state,
          opened = _this$state.opened,
          selectedItems = _this$state.selectedItems;
      var listStyles = {
        '--popover-border-radius': '0 0 0.5rem 0.5rem',
        '--popover-border': '1px solid rgb(228, 230, 231)',
        '--popover-shadow': 'none',
        'padding': '0',
        'width': 'calc( 100% - 2px)',
        'maxHeight': '15rem'
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
              return _this2.itemsContainerRef.current = el;
            },
            children: items.map(function (item) {
              var id = item.id,
                  disabled = item.disabled;
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DropdownItem["default"], _objectSpread(_objectSpread({}, item), {}, {
                onSelectAction: _this2.itemSelected,
                disabled: _this2.props.disabled || disabled,
                isSelected: selectedItems.includes(id),
                showOnMount: scrollToSelected && id === selectedItems[0],
                className: itemClassName
              }));
            })
          })
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this,
          _this$dropdownRef;

      var _this$props7 = this.props,
          disabled = _this$props7.disabled,
          placeholder = _this$props7.placeholder,
          items = _this$props7.items,
          name = _this$props7.name,
          label = _this$props7.label,
          required = _this$props7.required,
          message = _this$props7.message,
          className = _this$props7.className,
          labelClassName = _this$props7.labelClassName,
          visible = _this$props7.visible,
          hideCaret = _this$props7.hideCaret;
      var _this$state2 = this.state,
          selectedItems = _this$state2.selectedItems,
          opened = _this$state2.opened,
          invalid = _this$state2.invalid;
      var hasSelected = selectedItems && selectedItems.length > 0; //let hasLabel = hasSelected || placeholder;

      var buttonClasses = (0, _classnames["default"])({
        "dropdown-button": true,
        "opened": opened,
        "disabled": disabled,
        "invalid": invalid,
        "hideCaret": hideCaret
      });
      var labelClasses = (0, _classnames["default"])({
        "dropdown-label": true,
        "placeholder": !hasSelected
      });
      return visible ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _classnames["default"])(className, "swf-dropdown-main-container"),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "hidden",
            name: name,
            required: required,
            onInvalid: this.onInvalid,
            value: selectedItems
          }), label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
            label: label,
            required: required,
            invalid: invalid,
            className: labelClassName
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            onClick: this.dropdownClicked,
            disabled: disabled,
            className: buttonClasses,
            ref: function ref(el) {
              return _this3.dropdownRef.current = el;
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: labelClasses,
              children: (0, _utils.getDisplayValue)(selectedItems, items, placeholder)
            }), !hideCaret && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
              className: "dropdown-caret",
              icon: "caret-down-fill",
              customSize: 12
            })]
          }), ((_this$dropdownRef = this.dropdownRef) === null || _this$dropdownRef === void 0 ? void 0 : _this$dropdownRef.current) && this.renderItems(), message.map(function (el) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_InfoMessage["default"], _objectSpread({}, el));
          })]
        })
      }) : null;
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
  selectedItems: [],
  required: false,
  invalid: false,
  message: [],
  className: {},
  labelClassName: {},
  itemClassName: {},
  visible: true,
  manageInvalid: true,
  onOpened: function onOpened() {
    return void 0;
  },
  onInvalid: function onInvalid() {
    return void 0;
  },
  onItemSelected: function onItemSelected() {
    return void 0;
  },
  select: _constants.DROPDOWN.SELECT.SINGLE,
  hideCaret: false
};

var dropdownItem = _propTypes["default"].shape({
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  sublabel: _propTypes["default"].string,
  number: _propTypes["default"].number,
  icon: _propTypes["default"].string
});

var dropdownSection = _propTypes["default"].shape({
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  label: _propTypes["default"].string,
  children: _propTypes["default"].arrayOf(dropdownItem)
});

var messageItem = _propTypes["default"].shape({
  status: _propTypes["default"].oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
  content: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  className: _propTypes["default"].object,
  iconSize: _propTypes["default"].number,
  delay: _propTypes["default"].number
});

Dropdown.propTypes = {
  //basic props
  name: _propTypes["default"].string,
  label: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  items: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(dropdownItem), _propTypes["default"].arrayOf(dropdownSection)]),
  selectedItems: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])),
  message: _propTypes["default"].arrayOf(messageItem),
  //display characteristic
  select: _propTypes["default"].oneOf([_constants.DROPDOWN.SELECT.NONE, _constants.DROPDOWN.SELECT.SINGLE, _constants.DROPDOWN.SELECT.MULTI]),
  visible: _propTypes["default"].bool,
  scrollToSelected: _propTypes["default"].bool,
  opened: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  hideCaret: _propTypes["default"].bool,
  //action props
  manageOpened: _propTypes["default"].bool,
  manageInvalid: _propTypes["default"].bool,
  manageSelectedItems: _propTypes["default"].bool,
  onOpened: _propTypes["default"].func,
  onInvalid: _propTypes["default"].func,
  onItemSelected: _propTypes["default"].func,
  //style
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  labelClassName: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  itemClassName: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]) //todo
  //icon: propTypes.string,
  //search: propTypes.oneOf(["none", "managed", "initial", "contains"]),

};
var _default = Dropdown;
exports["default"] = _default;