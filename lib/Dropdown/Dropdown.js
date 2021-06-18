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

var _utils2 = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Dropdown = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var opened = props.opened,
      invalid = props.invalid,
      selectedItems = props.selectedItems,
      items = props.items,
      visible = props.visible,
      manageInvalid = props.manageInvalid,
      onInvalid = props.onInvalid,
      manageOpened = props.manageOpened,
      onOpened = props.onOpened,
      manageSelectedItems = props.manageSelectedItems,
      onItemSelected = props.onItemSelected,
      select = props.select,
      autoWidth = props.autoWidth,
      onClick = props.onClick;

  var _useState = (0, React.useState)(opened),
      _useState2 = _slicedToArray(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var _useState3 = (0, React.useState)(invalid),
      _useState4 = _slicedToArray(_useState3, 2),
      isInvalid = _useState4[0],
      setIsInvalid = _useState4[1];

  var _useState5 = (0, React.useState)(2),
      _useState6 = _slicedToArray(_useState5, 2),
      dropdownWidth = _useState6[0],
      setDropdownWidth = _useState6[1];

  var _useState7 = (0, React.useState)((0, _utils.getCorrectSelected)(items, selectedItems)),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedItemsState = _useState8[0],
      setSelectedItemState = _useState8[1];

  var dropdownRef = (0, React.useRef)(null);
  var itemsContainerRef = (0, React.useRef)(null);
  var itemToScroll = (0, React.useRef)(null);
  var invalidValue = manageInvalid ? invalid : isInvalid;
  var openedValue = manageOpened ? opened : isOpened;
  var selectsItemsValue = manageSelectedItems ? selectedItems : selectedItemsState;

  var onInvalidAction = function onInvalidAction(e) {
    onInvalid(e);
    !manageInvalid && setIsInvalid(true);
  };

  var dropdownClicked = function dropdownClicked(e) {
    onClick(e);
    onOpened({
      opened: manageOpened ? opened : !isOpened
    });
    !manageOpened && setIsOpened(!isOpened);
  };

  var itemSelected = (0, React.useCallback)(function (_ref) {
    var id = _ref.id;
    var currentSelectedIds = selectsItemsValue;

    if (!manageSelectedItems) {
      currentSelectedIds = (0, _utils.getUpdatedSelectedItems)(selectsItemsValue, select, id);
      setSelectedItemState(currentSelectedIds);
    }

    if (select !== _constants.DROPDOWN.SELECT.MULTI) {
      !manageOpened && setIsOpened(false);
      onOpened(manageOpened);
    }

    onItemSelected({
      clickedItem: (0, _utils.getItemById)(id, items),
      selectedItems: currentSelectedIds
    });
  }, [onItemSelected, selectsItemsValue, manageSelectedItems, select, manageOpened, onOpened, items]);
  (0, React.useEffect)(function () {
    if (openedValue && itemToScroll !== null && itemToScroll !== void 0 && itemToScroll.current) itemToScroll.current.scrollIntoView();
  }, [isOpened, opened]);
  (0, React.useEffect)(function () {
    return dropdownRef.current && setDropdownWidth(dropdownRef.current.offsetWidth);
  }, [dropdownRef.current, autoWidth]);

  var renderItems = function renderItems() {
    var scrollToSelected = props.scrollToSelected,
        itemClassName = props.itemClassName;
    var listStyles = {
      '--popover-border-radius': '0 0 0.5rem 0.5rem',
      '--popover-border': '1px solid rgb(228, 230, 231)',
      '--popover-shadow': 'none',
      'padding': '0',
      'width': "calc( ".concat(dropdownWidth, "px - 2px)"),
      'maxHeight': '15rem'
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
      hideTail: true,
      manageOpened: true,
      opened: openedValue,
      positions: [{
        target: "bottom-start",
        content: "top-start"
      }],
      positionTarget: dropdownRef,
      onOuterPopoverClicked: dropdownClicked,
      contentStyles: listStyles,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-items-container",
          ref: function ref(el) {
            return itemsContainerRef.current = el;
          },
          children: items.map(function (item) {
            var id = item.id,
                disabled = item.disabled;
            var isItemToScroll = scrollToSelected && id === selectsItemsValue[0];
            return /*#__PURE__*/(0, React.createElement)(_DropdownItem["default"], _objectSpread(_objectSpread({}, item), {}, {
              key: id,
              ref: function ref(el) {
                if (isItemToScroll) itemToScroll.current = el;
              },
              onSelectAction: itemSelected,
              disabled: props.disabled || disabled,
              isSelected: selectsItemsValue.includes(id),
              className: itemClassName
            }));
          })
        })
      })
    });
  };

  var renderElement = function renderElement() {
    var disabled = props.disabled,
        placeholder = props.placeholder,
        name = props.name,
        label = props.label,
        required = props.required,
        message = props.message,
        className = props.className,
        labelClassName = props.labelClassName,
        hideCaret = props.hideCaret;
    var hasSelected = selectsItemsValue && selectsItemsValue.length;
    var buttonClasses = (0, _classnames["default"])({
      "dropdown-button": true,
      "opened": openedValue,
      "disabled": disabled,
      "invalid": invalidValue,
      "hideCaret": hideCaret
    });
    var labelClasses = (0, _classnames["default"])({
      "dropdown-label": true,
      "placeholder": !hasSelected
    });
    var containerClasses = (0, _classnames["default"])("swf-dropdown-main-container", "dropdown-container", {
      "--autoWidth": autoWidth
    }, className);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: containerClasses,
        ref: ref,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "hidden",
          name: name,
          required: required,
          onInvalid: onInvalidAction,
          value: selectsItemsValue
        }), label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
          label: label,
          required: required,
          invalid: invalidValue,
          className: labelClassName
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
          onClick: dropdownClicked,
          disabled: disabled,
          className: buttonClasses,
          ref: function ref(el) {
            return dropdownRef.current = el;
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: labelClasses,
            children: (0, _utils.getDisplayValue)(selectsItemsValue, items, placeholder)
          }), !hideCaret && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
            className: "dropdown-caret",
            icon: "caret-down-fill",
            customSize: 12
          })]
        }), (dropdownRef === null || dropdownRef === void 0 ? void 0 : dropdownRef.current) && renderItems(), message.map(function (el) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_InfoMessage["default"], _objectSpread({}, el));
        })]
      })
    });
  };

  return visible ? renderElement() : null;
});
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
    return _utils2.noop;
  },
  onInvalid: function onInvalid() {
    return _utils2.noop;
  },
  onItemSelected: function onItemSelected() {
    return _utils2.noop;
  },
  onClick: function onClick() {
    return _utils2.noop;
  },
  select: _constants.DROPDOWN.SELECT.SINGLE,
  hideCaret: false
};
var dropdownItem = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  sublabel: _propTypes["default"].string,
  number: _propTypes["default"].number,
  icon: _propTypes["default"].string
};
var dropdownSection = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  label: _propTypes["default"].string,
  children: _propTypes["default"].arrayOf(_propTypes["default"].shape(dropdownItem))
};
var messageItem = {
  status: _propTypes["default"].oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
  content: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  className: _propTypes["default"].object,
  iconSize: _propTypes["default"].number,
  delay: _propTypes["default"].number
};
Dropdown.propTypes = {
  //basic props
  name: _propTypes["default"].string,
  label: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  items: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].shape(dropdownItem), _propTypes["default"].shape(dropdownSection)])),
  selectedItems: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])),
  message: _propTypes["default"].arrayOf(_propTypes["default"].shape(messageItem)),
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
  onClick: _propTypes["default"].func,
  //style
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  labelClassName: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  itemClassName: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  autoWidth: _propTypes["default"].bool
};
var _default = Dropdown;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ecm9wZG93bi9Ecm9wZG93bi5qcyJdLCJuYW1lcyI6WyJEcm9wZG93biIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwib3BlbmVkIiwiaW52YWxpZCIsInNlbGVjdGVkSXRlbXMiLCJpdGVtcyIsInZpc2libGUiLCJtYW5hZ2VJbnZhbGlkIiwib25JbnZhbGlkIiwibWFuYWdlT3BlbmVkIiwib25PcGVuZWQiLCJtYW5hZ2VTZWxlY3RlZEl0ZW1zIiwib25JdGVtU2VsZWN0ZWQiLCJzZWxlY3QiLCJhdXRvV2lkdGgiLCJvbkNsaWNrIiwiaXNPcGVuZWQiLCJzZXRJc09wZW5lZCIsImlzSW52YWxpZCIsInNldElzSW52YWxpZCIsImRyb3Bkb3duV2lkdGgiLCJzZXREcm9wZG93bldpZHRoIiwic2VsZWN0ZWRJdGVtc1N0YXRlIiwic2V0U2VsZWN0ZWRJdGVtU3RhdGUiLCJkcm9wZG93blJlZiIsIml0ZW1zQ29udGFpbmVyUmVmIiwiaXRlbVRvU2Nyb2xsIiwiaW52YWxpZFZhbHVlIiwib3BlbmVkVmFsdWUiLCJzZWxlY3RzSXRlbXNWYWx1ZSIsIm9uSW52YWxpZEFjdGlvbiIsImUiLCJkcm9wZG93bkNsaWNrZWQiLCJpdGVtU2VsZWN0ZWQiLCJpZCIsImN1cnJlbnRTZWxlY3RlZElkcyIsIkRST1BET1dOIiwiU0VMRUNUIiwiTVVMVEkiLCJjbGlja2VkSXRlbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsIm9mZnNldFdpZHRoIiwicmVuZGVySXRlbXMiLCJzY3JvbGxUb1NlbGVjdGVkIiwiaXRlbUNsYXNzTmFtZSIsImxpc3RTdHlsZXMiLCJ0YXJnZXQiLCJjb250ZW50IiwiZWwiLCJtYXAiLCJpdGVtIiwiZGlzYWJsZWQiLCJpc0l0ZW1Ub1Njcm9sbCIsImluY2x1ZGVzIiwicmVuZGVyRWxlbWVudCIsInBsYWNlaG9sZGVyIiwibmFtZSIsImxhYmVsIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwiY2xhc3NOYW1lIiwibGFiZWxDbGFzc05hbWUiLCJoaWRlQ2FyZXQiLCJoYXNTZWxlY3RlZCIsImxlbmd0aCIsImJ1dHRvbkNsYXNzZXMiLCJsYWJlbENsYXNzZXMiLCJjb250YWluZXJDbGFzc2VzIiwiZGVmYXVsdFByb3BzIiwibm9vcCIsIlNJTkdMRSIsImRyb3Bkb3duSXRlbSIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm51bWJlciIsImJvb2wiLCJzdWJsYWJlbCIsImljb24iLCJkcm9wZG93blNlY3Rpb24iLCJjaGlsZHJlbiIsImFycmF5T2YiLCJzaGFwZSIsIm1lc3NhZ2VJdGVtIiwic3RhdHVzIiwib25lT2YiLCJvYmplY3QiLCJpY29uU2l6ZSIsImRlbGF5IiwiTk9ORSIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxnQkFBR0MsS0FBSyxDQUFDQyxVQUFOLENBQWlCLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUFBLE1BRTFDQyxNQUYwQyxHQU0xQ0YsS0FOMEMsQ0FFMUNFLE1BRjBDO0FBQUEsTUFFbENDLE9BRmtDLEdBTTFDSCxLQU4wQyxDQUVsQ0csT0FGa0M7QUFBQSxNQUV6QkMsYUFGeUIsR0FNMUNKLEtBTjBDLENBRXpCSSxhQUZ5QjtBQUFBLE1BRVZDLEtBRlUsR0FNMUNMLEtBTjBDLENBRVZLLEtBRlU7QUFBQSxNQUVIQyxPQUZHLEdBTTFDTixLQU4wQyxDQUVITSxPQUZHO0FBQUEsTUFHMUNDLGFBSDBDLEdBTTFDUCxLQU4wQyxDQUcxQ08sYUFIMEM7QUFBQSxNQUczQkMsU0FIMkIsR0FNMUNSLEtBTjBDLENBRzNCUSxTQUgyQjtBQUFBLE1BSTFDQyxZQUowQyxHQU0xQ1QsS0FOMEMsQ0FJMUNTLFlBSjBDO0FBQUEsTUFJNUJDLFFBSjRCLEdBTTFDVixLQU4wQyxDQUk1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QUFzQ2pCO0FBQ0E5QixFQUFBQSxTQUFTLEVBQUVZLHNCQUFVQyxTQUFWLENBQW9CLENBQUNELHNCQUFVYyxNQUFYLEVBQW1CZCxzQkFBVUUsTUFBN0IsQ0FBcEIsQ0F2Q007QUF3Q2pCYixFQUFBQSxjQUFjLEVBQUVXLHNCQUFVQyxTQUFWLENBQW9CLENBQUNELHNCQUFVYyxNQUFYLEVBQW1CZCxzQkFBVUUsTUFBN0IsQ0FBcEIsQ0F4Q0M7QUF5Q2pCOUIsRUFBQUEsYUFBYSxFQUFFNEIsc0JBQVVDLFNBQVYsQ0FBb0IsQ0FBQ0Qsc0JBQVVjLE1BQVgsRUFBbUJkLHNCQUFVRSxNQUE3QixDQUFwQixDQXpDRTtBQTJDakI3RCxFQUFBQSxTQUFTLEVBQUUyRCxzQkFBVUk7QUEzQ0osQ0FBckI7ZUE4Q2VoRixRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIlxyXG5pbXBvcnQgUG9wb3ZlciBmcm9tIFwiLi4vUG9wb3Zlci9Qb3BvdmVyXCI7XHJcbmltcG9ydCBEcm9wZG93bkl0ZW0gZnJvbSBcIi4vRHJvcGRvd25JdGVtXCI7XHJcbmltcG9ydCBJbmZvTWVzc2FnZSBmcm9tIFwiLi4vSW5mb01lc3NhZ2UvSW5mb01lc3NhZ2VcIjtcclxuaW1wb3J0IFJlcXVpcmVkTGFiZWwgZnJvbSBcIi4uL1JlcXVpcmVkTGFiZWwvUmVxdWlyZWRMYWJlbFwiO1xyXG5cclxuaW1wb3J0IHtnZXRDb3JyZWN0U2VsZWN0ZWQsIGdldERpc3BsYXlWYWx1ZSwgZ2V0SXRlbUJ5SWQsIGdldFVwZGF0ZWRTZWxlY3RlZEl0ZW1zfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQge0RST1BET1dOfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHtub29wfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmNvbnN0IERyb3Bkb3duID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG9wZW5lZCwgaW52YWxpZCwgc2VsZWN0ZWRJdGVtcywgaXRlbXMsIHZpc2libGUsXHJcbiAgICAgICAgbWFuYWdlSW52YWxpZCwgb25JbnZhbGlkLFxyXG4gICAgICAgIG1hbmFnZU9wZW5lZCwgb25PcGVuZWQsXHJcbiAgICAgICAgbWFuYWdlU2VsZWN0ZWRJdGVtcywgb25JdGVtU2VsZWN0ZWQsIHNlbGVjdCwgYXV0b1dpZHRoLCBvbkNsaWNrXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgW2lzT3BlbmVkLCBzZXRJc09wZW5lZF0gPSB1c2VTdGF0ZShvcGVuZWQpO1xyXG4gICAgY29uc3QgW2lzSW52YWxpZCwgc2V0SXNJbnZhbGlkXSA9IHVzZVN0YXRlKGludmFsaWQpO1xyXG4gICAgY29uc3QgW2Ryb3Bkb3duV2lkdGgsIHNldERyb3Bkb3duV2lkdGhdID0gdXNlU3RhdGUoMilcclxuICAgIGNvbnN0IFtzZWxlY3RlZEl0ZW1zU3RhdGUsIHNldFNlbGVjdGVkSXRlbVN0YXRlXSA9IHVzZVN0YXRlKGdldENvcnJlY3RTZWxlY3RlZChpdGVtcywgc2VsZWN0ZWRJdGVtcykpXHJcblxyXG4gICAgY29uc3QgZHJvcGRvd25SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBpdGVtc0NvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGl0ZW1Ub1Njcm9sbCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBpbnZhbGlkVmFsdWUgPSBtYW5hZ2VJbnZhbGlkID8gaW52YWxpZCA6IGlzSW52YWxpZDtcclxuICAgIGNvbnN0IG9wZW5lZFZhbHVlID0gbWFuYWdlT3BlbmVkID8gb3BlbmVkIDogaXNPcGVuZWQ7XHJcbiAgICBjb25zdCBzZWxlY3RzSXRlbXNWYWx1ZSA9IG1hbmFnZVNlbGVjdGVkSXRlbXMgPyBzZWxlY3RlZEl0ZW1zIDogc2VsZWN0ZWRJdGVtc1N0YXRlO1xyXG5cclxuICAgIGNvbnN0IG9uSW52YWxpZEFjdGlvbiA9IChlKSA9PiB7XHJcbiAgICAgICAgb25JbnZhbGlkKGUpO1xyXG4gICAgICAgICFtYW5hZ2VJbnZhbGlkICYmIHNldElzSW52YWxpZCh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRyb3Bkb3duQ2xpY2tlZCA9IChlKSA9PiB7XHJcbiAgICAgICAgb25DbGljayhlKTtcclxuICAgICAgICBvbk9wZW5lZCh7b3BlbmVkOiBtYW5hZ2VPcGVuZWQgPyBvcGVuZWQgOiAhaXNPcGVuZWR9KVxyXG4gICAgICAgICFtYW5hZ2VPcGVuZWQgJiYgc2V0SXNPcGVuZWQoIWlzT3BlbmVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpdGVtU2VsZWN0ZWQgPSB1c2VDYWxsYmFjaygoe2lkfSkgPT4ge1xyXG4gICAgICAgIGxldCBjdXJyZW50U2VsZWN0ZWRJZHMgPSBzZWxlY3RzSXRlbXNWYWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKCFtYW5hZ2VTZWxlY3RlZEl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTZWxlY3RlZElkcyA9IGdldFVwZGF0ZWRTZWxlY3RlZEl0ZW1zKHNlbGVjdHNJdGVtc1ZhbHVlLCBzZWxlY3QsIGlkKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtU3RhdGUoY3VycmVudFNlbGVjdGVkSWRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3QgIT09IERST1BET1dOLlNFTEVDVC5NVUxUSSkge1xyXG4gICAgICAgICAgICAhbWFuYWdlT3BlbmVkICYmIHNldElzT3BlbmVkKGZhbHNlKTtcclxuICAgICAgICAgICAgb25PcGVuZWQobWFuYWdlT3BlbmVkKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25JdGVtU2VsZWN0ZWQoe1xyXG4gICAgICAgICAgICBjbGlja2VkSXRlbTogZ2V0SXRlbUJ5SWQoaWQsIGl0ZW1zKSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtczogY3VycmVudFNlbGVjdGVkSWRzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbb25JdGVtU2VsZWN0ZWQsIHNlbGVjdHNJdGVtc1ZhbHVlLCBtYW5hZ2VTZWxlY3RlZEl0ZW1zLCBzZWxlY3QsIG1hbmFnZU9wZW5lZCwgb25PcGVuZWQsIGl0ZW1zXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKG9wZW5lZFZhbHVlICYmIGl0ZW1Ub1Njcm9sbD8uY3VycmVudClcclxuICAgICAgICAgICAgaXRlbVRvU2Nyb2xsLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoKVxyXG4gICAgfSwgW2lzT3BlbmVkLCBvcGVuZWRdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiBkcm9wZG93blJlZi5jdXJyZW50ICYmIHNldERyb3Bkb3duV2lkdGgoZHJvcGRvd25SZWYuY3VycmVudC5vZmZzZXRXaWR0aCksXHJcbiAgICAgICAgW2Ryb3Bkb3duUmVmLmN1cnJlbnQsIGF1dG9XaWR0aF0pXHJcblxyXG4gICAgY29uc3QgcmVuZGVySXRlbXMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3Njcm9sbFRvU2VsZWN0ZWQsIGl0ZW1DbGFzc05hbWV9ID0gcHJvcHM7XHJcblxyXG4gICAgICAgIGxldCBsaXN0U3R5bGVzID0ge1xyXG4gICAgICAgICAgICAnLS1wb3BvdmVyLWJvcmRlci1yYWRpdXMnOiAnMCAwIDAuNXJlbSAwLjVyZW0nLFxyXG4gICAgICAgICAgICAnLS1wb3BvdmVyLWJvcmRlcic6ICcxcHggc29saWQgcmdiKDIyOCwgMjMwLCAyMzEpJyxcclxuICAgICAgICAgICAgJy0tcG9wb3Zlci1zaGFkb3cnOiAnbm9uZScsXHJcbiAgICAgICAgICAgICdwYWRkaW5nJzogJzAnLFxyXG4gICAgICAgICAgICAnd2lkdGgnOiBgY2FsYyggJHtkcm9wZG93bldpZHRofXB4IC0gMnB4KWAsXHJcbiAgICAgICAgICAgICdtYXhIZWlnaHQnOiAnMTVyZW0nXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPFBvcG92ZXJcclxuICAgICAgICAgICAgICAgIGhpZGVUYWlsXHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VPcGVuZWRcclxuICAgICAgICAgICAgICAgIG9wZW5lZD17b3BlbmVkVmFsdWV9XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnM9e1t7dGFyZ2V0OiBcImJvdHRvbS1zdGFydFwiLCBjb250ZW50OiBcInRvcC1zdGFydFwifV19XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvblRhcmdldD17ZHJvcGRvd25SZWZ9XHJcbiAgICAgICAgICAgICAgICBvbk91dGVyUG9wb3ZlckNsaWNrZWQ9e2Ryb3Bkb3duQ2xpY2tlZH1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e2xpc3RTdHlsZXN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZHJvcGRvd24taXRlbXMtY29udGFpbmVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4gaXRlbXNDb250YWluZXJSZWYuY3VycmVudCA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge2lkLCBkaXNhYmxlZH0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzSXRlbVRvU2Nyb2xsID0gc2Nyb2xsVG9TZWxlY3RlZCAmJiBpZCA9PT0gc2VsZWN0c0l0ZW1zVmFsdWVbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPERyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5pdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0ge2VsID0+IHsgaWYoaXNJdGVtVG9TY3JvbGwpIGl0ZW1Ub1Njcm9sbC5jdXJyZW50ID0gZWwgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdEFjdGlvbj17aXRlbVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZCB8fCBkaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtzZWxlY3RzSXRlbXNWYWx1ZS5pbmNsdWRlcyhpZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtQ2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVyRWxlbWVudCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGRpc2FibGVkLCBwbGFjZWhvbGRlciwgbmFtZSwgbGFiZWwsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkLCBtZXNzYWdlLCBjbGFzc05hbWUsIGxhYmVsQ2xhc3NOYW1lLCBoaWRlQ2FyZXRcclxuICAgICAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgICAgIGxldCBoYXNTZWxlY3RlZCA9IHNlbGVjdHNJdGVtc1ZhbHVlICYmIHNlbGVjdHNJdGVtc1ZhbHVlLmxlbmd0aDtcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbkNsYXNzZXMgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgXCJkcm9wZG93bi1idXR0b25cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJvcGVuZWRcIjogb3BlbmVkVmFsdWUsXHJcbiAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogZGlzYWJsZWQsXHJcbiAgICAgICAgICAgIFwiaW52YWxpZFwiOiBpbnZhbGlkVmFsdWUsXHJcbiAgICAgICAgICAgIFwiaGlkZUNhcmV0XCI6IGhpZGVDYXJldFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBsYWJlbENsYXNzZXMgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgXCJkcm9wZG93bi1sYWJlbFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6ICFoYXNTZWxlY3RlZFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckNsYXNzZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICBcInN3Zi1kcm9wZG93bi1tYWluLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBcImRyb3Bkb3duLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICB7XCItLWF1dG9XaWR0aFwiOiBhdXRvV2lkdGggfSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lKVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVmfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnZhbGlkPXtvbkludmFsaWRBY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RzSXRlbXNWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZXF1aXJlZExhYmVsIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17aW52YWxpZFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bGFiZWxDbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkcm9wZG93bkNsaWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidXR0b25DbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsID0+IGRyb3Bkb3duUmVmLmN1cnJlbnQgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2xhYmVsQ2xhc3Nlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldERpc3BsYXlWYWx1ZShzZWxlY3RzSXRlbXNWYWx1ZSwgaXRlbXMsIHBsYWNlaG9sZGVyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFoaWRlQ2FyZXQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtcImRyb3Bkb3duLWNhcmV0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e1wiY2FyZXQtZG93bi1maWxsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVNpemU9ezEyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7ZHJvcGRvd25SZWY/LmN1cnJlbnQgJiYgcmVuZGVySXRlbXMoKX1cclxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS5tYXAoZWwgPT4gPEluZm9NZXNzYWdlIHsuLi5lbH0vPil9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAgdmlzaWJsZSA/IHJlbmRlckVsZW1lbnQoKTogbnVsbFxyXG59KTtcclxuXHJcbkRyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIHNjcm9sbFRvU2VsZWN0ZWQ6IHRydWUsXHJcbiAgICBpdGVtczogW10sXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IGZhbHNlLFxyXG4gICAgbWFuYWdlU2VsZWN0ZWRJdGVtczogZmFsc2UsXHJcbiAgICBvcGVuZWQ6IGZhbHNlLFxyXG4gICAgc2VsZWN0ZWRJdGVtczogW10sXHJcbiAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICBpbnZhbGlkOiBmYWxzZSxcclxuICAgIG1lc3NhZ2U6IFtdLFxyXG4gICAgY2xhc3NOYW1lOiB7fSxcclxuICAgIGxhYmVsQ2xhc3NOYW1lOiB7fSxcclxuICAgIGl0ZW1DbGFzc05hbWU6IHt9LFxyXG4gICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgIG1hbmFnZUludmFsaWQ6IHRydWUsXHJcbiAgICBvbk9wZW5lZDogKCkgPT4gbm9vcCxcclxuICAgIG9uSW52YWxpZDogKCkgPT4gbm9vcCxcclxuICAgIG9uSXRlbVNlbGVjdGVkOiAoKSA9PiBub29wLFxyXG4gICAgb25DbGljazogKCkgPT4gbm9vcCxcclxuICAgIHNlbGVjdDogRFJPUERPV04uU0VMRUNULlNJTkdMRSxcclxuICAgIGhpZGVDYXJldDogZmFsc2VcclxufVxyXG5cclxuY29uc3QgZHJvcGRvd25JdGVtID0ge1xyXG4gICAgaWQ6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgcHJvcFR5cGVzLm51bWJlclxyXG4gICAgXSksXHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHN1YmxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbnVtYmVyOiBwcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgaWNvbjogcHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuY29uc3QgZHJvcGRvd25TZWN0aW9uID0ge1xyXG4gICAgaWQ6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgcHJvcFR5cGVzLm51bWJlclxyXG4gICAgXSksXHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNoaWxkcmVuOiBwcm9wVHlwZXMuYXJyYXlPZihwcm9wVHlwZXMuc2hhcGUoZHJvcGRvd25JdGVtKSlcclxufTtcclxuXHJcbmNvbnN0IG1lc3NhZ2VJdGVtID0ge1xyXG4gICAgc3RhdHVzOiBwcm9wVHlwZXMub25lT2YoW1wieWVsbG93XCIsIFwicmVkXCIsIFwiZ3JlZW5cIiwgXCJibHVlXCIsIFwiZ3JleVwiLCBcImdyZXktYmx1ZVwiXSksXHJcbiAgICBjb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaWNvbjogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGljb25TaXplOiBwcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgZGVsYXk6IHByb3BUeXBlcy5udW1iZXJcclxufVxyXG5Ecm9wZG93bi5wcm9wVHlwZXMgPSB7XHJcbiAgICAvL2Jhc2ljIHByb3BzXHJcbiAgICBuYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlcjogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGl0ZW1zOiBwcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBwcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICAgICAgcHJvcFR5cGVzLnNoYXBlKGRyb3Bkb3duSXRlbSksXHJcbiAgICAgICAgICAgIHByb3BUeXBlcy5zaGFwZShkcm9wZG93blNlY3Rpb24pXHJcbiAgICAgICAgXSlcclxuICAgICksXHJcbiAgICBzZWxlY3RlZEl0ZW1zOiBwcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBwcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgcHJvcFR5cGVzLm51bWJlcl1cclxuICAgICAgICApKSxcclxuICAgIG1lc3NhZ2U6IHByb3BUeXBlcy5hcnJheU9mKHByb3BUeXBlcy5zaGFwZShtZXNzYWdlSXRlbSkpLFxyXG5cclxuICAgIC8vZGlzcGxheSBjaGFyYWN0ZXJpc3RpY1xyXG4gICAgc2VsZWN0OiBwcm9wVHlwZXMub25lT2YoW0RST1BET1dOLlNFTEVDVC5OT05FLCBEUk9QRE9XTi5TRUxFQ1QuU0lOR0xFLCBEUk9QRE9XTi5TRUxFQ1QuTVVMVEldKSxcclxuICAgIHZpc2libGU6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgc2Nyb2xsVG9TZWxlY3RlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgaW52YWxpZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICByZXF1aXJlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBoaWRlQ2FyZXQ6IHByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8vYWN0aW9uIHByb3BzXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlSW52YWxpZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VTZWxlY3RlZEl0ZW1zOiBwcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICBvbk9wZW5lZDogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkludmFsaWQ6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25JdGVtU2VsZWN0ZWQ6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25DbGljazogcHJvcFR5cGVzLmZ1bmMsXHJcblxyXG4gICAgLy9zdHlsZVxyXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMub2JqZWN0LCBwcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgICBsYWJlbENsYXNzTmFtZTogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLm9iamVjdCwgcHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gICAgaXRlbUNsYXNzTmFtZTogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLm9iamVjdCwgcHJvcFR5cGVzLnN0cmluZ10pLFxyXG5cclxuICAgIGF1dG9XaWR0aDogcHJvcFR5cGVzLmJvb2xcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cclxuIl19