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

var _Button = _interopRequireDefault(require("../Button/Button"));

var _TextLink = _interopRequireDefault(require("../TextLink/TextLink"));

var _utils = require("./utils");

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

var Alert = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var action = props.action,
      content = props.content,
      header = props.header,
      icon = props.icon,
      color = props.color,
      visible = props.visible,
      textLinkProps = props.textLinkProps,
      manageExpanded = props.manageExpanded,
      manageVisibility = props.manageVisibility,
      manageButtonClick = props.manageButtonClick,
      onTextLinkClicked = props.onTextLinkClicked,
      onButtonClick = props.onButtonClick,
      onExpandAction = props.onExpandAction,
      expanded = props.expanded,
      onCloseAction = props.onCloseAction,
      delay = props.delay;

  var _useState = (0, React.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      oneLineText = _useState2[0],
      setOneLineText = _useState2[1];

  var _useState3 = (0, React.useState)(!expanded),
      _useState4 = _slicedToArray(_useState3, 2),
      isOverflowed = _useState4[0],
      setIsOverflowed = _useState4[1];

  var _useState5 = (0, React.useState)(expanded),
      _useState6 = _slicedToArray(_useState5, 2),
      isExpanded = _useState6[0],
      setIsExpanded = _useState6[1];

  var _useState7 = (0, React.useState)(visible),
      _useState8 = _slicedToArray(_useState7, 2),
      isVisible = _useState8[0],
      setIsVisible = _useState8[1];

  var contentRef = (0, React.useRef)(null);
  var textRef = (0, React.useRef)(null);
  var timer = null;
  var expandedFinal = manageExpanded ? expanded : isExpanded;
  var visibleFinal = manageVisibility ? visible : isVisible;

  var setDelay = function setDelay() {
    if (delay) {
      timer = setTimeout(function () {
        !manageVisibility && setIsVisible(false);
        onCloseAction();
      }, delay);
    }
  };

  var buttonClicked = function buttonClicked(e) {
    e.preventDefault();

    if (!manageButtonClick) {
      !manageVisibility && setIsVisible(false);
      if (action.href) (0, _utils.openLink)(action.href);
    }

    onButtonClick(e, action);
  };

  var expandAction = function expandAction(e) {
    e.preventDefault();
    var curValue = expandedFinal;

    if (!manageExpanded) {
      curValue = !isExpanded;
      setIsOverflowed(!curValue);
      setIsExpanded(curValue);
    }

    onExpandAction({
      isExpanded: curValue
    });
  };

  var defineSizes = (0, React.useCallback)(function () {
    var contentEl = contentRef === null || contentRef === void 0 ? void 0 : contentRef.current;
    var text = textRef === null || textRef === void 0 ? void 0 : textRef.current;

    if (contentEl && text) {
      var onlyHeader = header && !content;

      var _oneLineText = !header && text.getBoundingClientRect().height < 32;

      setIsOverflowed(contentEl.scrollHeight < text.scrollHeight);
      setOneLineText(onlyHeader || _oneLineText);
    }
  }, [header, content, contentRef, textRef]);
  (0, React.useEffect)(defineSizes, [content, header]);
  (0, React.useEffect)(function () {
    if (manageVisibility) {
      setDelay();
      defineSizes();
    }
  }, [visible, manageVisibility]);
  (0, React.useEffect)(function () {
    manageExpanded && setIsOverflowed(!expanded);
  }, [expanded, manageExpanded]);
  (0, React.useEffect)(function () {
    defineSizes();
    setDelay();
    return function () {
      return clearTimeout(timer);
    };
  }, []);
  var mainContainerClasses = (0, _classnames["default"])(color, {
    "swf-alert-container": true,
    "--alignCenter": !isOverflowed && !expandedFinal,
    "--overflowed": isOverflowed,
    "--oneLineContent": oneLineText,
    "--expanded": expandedFinal,
    "--no-icon": !icon
  });
  var textStyles = (0, _classnames["default"])({
    "text-container": true,
    "--overflowed": isOverflowed,
    "--setToOneLine": header && isOverflowed,
    "--expanded": expandedFinal
  });
  var showLabel = expandedFinal ? "less" : "more";
  var isButtonWithText = action.type === "acknowledge" || action.type === "open";
  return visibleFinal && /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: mainContainerClasses,
      ref: ref,
      children: [icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
        className: "alert-icon",
        icon: icon
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "alert-content",
        ref: function ref(el) {
          return contentRef.current = el;
        },
        children: [header && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "alert-header",
          children: header
        }), content && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          ref: function ref(el) {
            return textRef.current = el;
          },
          className: textStyles,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            className: "alert-text",
            children: [content, " ", textLinkProps && /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextLink["default"], {
              label: textLinkProps.label,
              href: textLinkProps.href,
              openWindows: textLinkProps.openWindows || false,
              download: textLinkProps.download || false,
              onClick: onTextLinkClicked
            })]
          })
        }), (isOverflowed || expandedFinal) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
          className: "show-more-button",
          variant: "tertiary",
          onClick: expandAction,
          children: "Show ".concat(showLabel)
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        className: (0, _classnames["default"])("alert-button", {
          "dismiss": !isButtonWithText
        }),
        label: isButtonWithText ? action.label || (action.type === "acknowledge" ? "Ok" : "Open") : undefined,
        icon: !isButtonWithText ? "x" : undefined,
        size: isButtonWithText ? "md" : "lg",
        onClick: buttonClicked,
        variant: "inherit"
      })]
    })
  });
});
Alert.defaultProps = {
  color: "blue",
  action: {
    type: "dismiss"
  },
  visible: true,
  expanded: false,
  manageExpanded: false,
  manageVisibility: false,
  manageButtonClick: false,
  onTextLinkClicked: function onTextLinkClicked() {
    return void 0;
  },
  onExpandAction: function onExpandAction() {
    return void 0;
  },
  onButtonClick: function onButtonClick() {
    return void 0;
  },
  onCloseAction: function onCloseAction() {
    return void 0;
  }
};
Alert.propTypes = {
  action: _propTypes["default"].shape({
    type: _propTypes["default"].oneOf(["dismiss", "acknowledge", "open"]).isRequired,
    href: _propTypes["default"].string,
    label: _propTypes["default"].string
  }),
  content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),

  /**
   * Can control only if manageExpanded = true
   */
  expanded: _propTypes["default"].bool,
  header: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  manageExpanded: _propTypes["default"].bool,
  color: _propTypes["default"].oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
  textLinkProps: _propTypes["default"].shape({
    label: _propTypes["default"].string,
    href: _propTypes["default"].string,
    openWindows: _propTypes["default"].bool,
    download: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
  }),
  onExpandAction: _propTypes["default"].func,
  onTextLinkClicked: _propTypes["default"].func,
  onButtonClick: _propTypes["default"].func,

  /**
   *  Can control only if manageVisibility = true
   */
  visible: _propTypes["default"].bool,
  manageVisibility: _propTypes["default"].bool,

  /**
   * Time before remove (in milliseconds)
   */
  delay: _propTypes["default"].number,
  onCloseAction: _propTypes["default"].func,
  manageButtonClick: _propTypes["default"].bool
};

var _default = /*#__PURE__*/React.memo(Alert);

exports["default"] = _default;