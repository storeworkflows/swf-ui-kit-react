"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _findByType = _interopRequireDefault(require("../utils/findByType"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AccordionItem = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var manageOpened = props.manageOpened,
      onClick = props.onClick,
      onSelected = props.onSelected,
      opened = props.opened,
      children = props.children,
      className = props.className,
      label = props.label,
      triggerIcon = props.triggerIcon,
      iconToStart = props.iconToStart,
      headerClassName = props.headerClassName,
      isLastItem = props.isLastItem,
      isFirstItem = props.isFirstItem;

  var _useState = (0, React.useState)(opened),
      _useState2 = _slicedToArray(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var itemClicked = function itemClicked() {
    onClick({
      opened: manageOpened ? opened : !isOpened
    });
    !manageOpened && setIsOpened(!isOpened);
    onSelected();
  };

  var renderHeader = function renderHeader() {
    var header = (0, _findByType["default"])(children, "Header");
    if (!header || !header.length) return /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      children: label
    });
    return header;
  };

  var renderContent = function renderContent() {
    if (!children) return;
    var header = (0, _findByType["default"])(children, "Header");
    var contentElements = React.Children.toArray(children).slice();

    if (header && header.length) {
      var headerType = header[0].type;
      contentElements = contentElements.filter(function (child) {
        return child.type !== headerType;
      });
    }

    if (contentElements.length) return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "accordion-content",
      children: contentElements
    });
    return null;
  };

  var renderIcon = function renderIcon() {
    var classes = (0, _classnames["default"])({
      "trigger-icon": true,
      "left": iconToStart,
      "right": !iconToStart
    });
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
      className: classes,
      icon: triggerIcon,
      variant: "tertiary"
    });
  };

  var currentOpened = manageOpened ? opened : isOpened;
  var itemStyles = (0, _classnames["default"])(className, {
    "accordion-item": true,
    "last": isLastItem,
    "first": isFirstItem
  });
  var headerContentStyles = (0, _classnames["default"])({
    "accordion-header-content": true,
    "left": !iconToStart,
    "right": iconToStart,
    "opened": currentOpened
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: itemStyles,
      ref: ref,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _classnames["default"])(headerClassName, "accordion-item-header"),
        onClick: itemClicked,
        children: [iconToStart && renderIcon(), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: headerContentStyles,
          children: renderHeader()
        }), !iconToStart && renderIcon()]
      }), currentOpened && renderContent()]
    })
  });
});
AccordionItem.defaultProps = {
  opened: false,
  manageOpened: false,
  triggerIcon: "chevron-down",
  iconToStart: false,
  className: "",
  onClick: function onClick() {
    return void 0;
  },
  onSelected: function onSelected() {
    return void 0;
  },
  isLastItem: false,
  isFirstItem: false,
  headerClassName: ""
};
AccordionItem.propTypes = {
  label: _propTypes["default"].string,
  opened: _propTypes["default"].bool,
  manageOpened: _propTypes["default"].bool,
  onSelected: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  triggerIcon: _propTypes["default"].string,
  iconToStart: _propTypes["default"].bool,
  isLastItem: _propTypes["default"].bool,
  isFirstItem: _propTypes["default"].bool,
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  headerClassName: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string])
};
var _default = AccordionItem;
exports["default"] = _default;