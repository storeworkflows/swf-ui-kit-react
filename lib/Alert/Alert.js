"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _TextLink = _interopRequireDefault(require("../TextLink/TextLink"));

var _utils = require("./utils");

var _utils2 = require("../utils");

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Alert = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classnames;

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
      delay = props.delay,
      className = props.className,
      defaultPosition = props.defaultPosition,
      verticalPositions = props.verticalPositions,
      horizontalPositions = props.horizontalPositions,
      onVisibilityChange = props.onVisibilityChange,
      textAlignCenter = props.textAlignCenter;

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
    return onVisibilityChange(visibleFinal);
  }, [visibleFinal]);
  (0, React.useEffect)(function () {
    return manageExpanded && setIsOverflowed(!expanded);
  }, [expanded, manageExpanded]);
  (0, React.useEffect)(function () {
    if (manageVisibility) {
      setDelay();
      defineSizes();
    }
  }, [visible, manageVisibility]);
  (0, React.useEffect)(function () {
    defineSizes();
    setDelay();
    return function () {
      return clearTimeout(timer);
    };
  }, []);
  var mainContainerClasses = (0, _classnames2["default"])(color, className, "swf-alert-container", (_classnames = {
    "--fixed": !defaultPosition,
    "--alignCenter": !isOverflowed && !expandedFinal,
    "--oneLineContent": oneLineText,
    "--expanded": expandedFinal,
    "--no-icon": !icon
  }, _defineProperty(_classnames, "--vertical-".concat(verticalPositions), verticalPositions), _defineProperty(_classnames, "--horizontal-".concat(horizontalPositions), horizontalPositions), _classnames));
  var alertContentClasses = (0, _classnames2["default"])("alert-content", {
    "text-align-center": textAlignCenter
  });
  var textStyles = (0, _classnames2["default"])({
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
        className: alertContentClasses,
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
        className: (0, _classnames2["default"])("alert-button", {
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
  className: "",
  onVisibilityChange: _utils2.noop,
  onTextLinkClicked: _utils2.noop,
  onExpandAction: _utils2.noop,
  onButtonClick: _utils2.noop,
  onCloseAction: _utils2.noop,
  verticalPositions: "top",
  horizontalPositions: "center"
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
  textAlignCenter: _propTypes["default"].bool,
  manageExpanded: _propTypes["default"].bool,
  color: _propTypes["default"].oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
  textLinkProps: _propTypes["default"].shape({
    label: _propTypes["default"].string,
    href: _propTypes["default"].string,
    openWindows: _propTypes["default"].bool,
    download: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
  }),
  onVisibilityChange: _propTypes["default"].func,
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
  manageButtonClick: _propTypes["default"].bool,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  defaultPosition: _propTypes["default"].bool,
  verticalPositions: _propTypes["default"].oneOf(["top", "center", "bottom"]),
  horizontalPositions: _propTypes["default"].oneOf(["start", "center", "end"])
};

var _default = /*#__PURE__*/React.memo(Alert, function (prev, next) {
  return (0, _reactFastCompare["default"])(prev, next);
});

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BbGVydC9BbGVydC5qcyJdLCJuYW1lcyI6WyJBbGVydCIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiYWN0aW9uIiwiY29udGVudCIsImhlYWRlciIsImljb24iLCJjb2xvciIsInZpc2libGUiLCJ0ZXh0TGlua1Byb3BzIiwibWFuYWdlRXhwYW5kZWQiLCJtYW5hZ2VWaXNpYmlsaXR5IiwibWFuYWdlQnV0dG9uQ2xpY2siLCJvblRleHRMaW5rQ2xpY2tlZCIsIm9uQnV0dG9uQ2xpY2siLCJvbkV4cGFuZEFjdGlvbiIsImV4cGFuZGVkIiwib25DbG9zZUFjdGlvbiIsImRlbGF5IiwiY2xhc3NOYW1lIiwiZGVmYXVsdFBvc2l0aW9uIiwidmVydGljYWxQb3NpdGlvbnMiLCJob3Jpem9udGFsUG9zaXRpb25zIiwib25WaXNpYmlsaXR5Q2hhbmdlIiwidGV4dEFsaWduQ2VudGVyIiwib25lTGluZVRleHQiLCJzZXRPbmVMaW5lVGV4dCIsImlzT3ZlcmZsb3dlZCIsInNldElzT3ZlcmZsb3dlZCIsImlzRXhwYW5kZWQiLCJzZXRJc0V4cGFuZGVkIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwiY29udGVudFJlZiIsInRleHRSZWYiLCJ0aW1lciIsImV4cGFuZGVkRmluYWwiLCJ2aXNpYmxlRmluYWwiLCJzZXREZWxheSIsInNldFRpbWVvdXQiLCJidXR0b25DbGlja2VkIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImV4cGFuZEFjdGlvbiIsImN1clZhbHVlIiwiZGVmaW5lU2l6ZXMiLCJjb250ZW50RWwiLCJjdXJyZW50IiwidGV4dCIsIm9ubHlIZWFkZXIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjbGVhclRpbWVvdXQiLCJtYWluQ29udGFpbmVyQ2xhc3NlcyIsImFsZXJ0Q29udGVudENsYXNzZXMiLCJ0ZXh0U3R5bGVzIiwic2hvd0xhYmVsIiwiaXNCdXR0b25XaXRoVGV4dCIsInR5cGUiLCJlbCIsImxhYmVsIiwib3BlbldpbmRvd3MiLCJkb3dubG9hZCIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsIm5vb3AiLCJwcm9wVHlwZXMiLCJzaGFwZSIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm9iamVjdCIsImJvb2wiLCJmdW5jIiwibnVtYmVyIiwibWVtbyIsInByZXYiLCJuZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxnQkFBR0MsS0FBSyxDQUFDQyxVQUFOLENBQWlCLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUFBOztBQUFBLE1BR3ZDQyxNQUh1QyxHQVN2Q0YsS0FUdUMsQ0FHdkNFLE1BSHVDO0FBQUEsTUFHL0JDLE9BSCtCLEdBU3ZDSCxLQVR1QyxDQUcvQkcsT0FIK0I7QUFBQSxNQUd0QkMsTUFIc0IsR0FTdkNKLEtBVHVDLENBR3RCSSxNQUhzQjtBQUFBLE1BR2RDLElBSGMsR0FTdkNMLEtBVHVDLENBR2RLLElBSGM7QUFBQSxNQUdSQyxLQUhRLEdBU3ZDTixLQVR1QyxDQUdSTSxLQUhRO0FBQUEsTUFHREMsT0FIQyxHQVN2Q1AsS0FUdUMsQ0FHRE8sT0FIQztBQUFBLE1BR1FDLGFBSFIsR0FTdkNSLEtBVHVDLENBR1FRLGFBSFI7QUFBQSxNQUl2Q0MsY0FKdUMsR0FTdkNULEtBVHVDLENBSXZDUyxjQUp1QztBQUFBLE1BSXZCQyxnQkFKdUIsR0FTdkNWLEtBVHVDLENBSXZCVSxnQkFKdUI7QUFBQSxNQUlMQyxpQkFKSyxHQVN2Q1gsS0FUdUMsQ0FJTFcsaUJBSks7QUFBQSxNQUt2Q0MsaUJBTHVDLEdBU3ZDWixLQVR1QyxDQUt2Q1ksaUJBTHVDO0FBQUEsTUFLcEJDLGFBTG9CLEdBU3ZDYixLQVR1QyxDQUtwQmEsYUFMb0I7QUFB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aEUsRUFBQUEsZ0JBQWdCLEVBQUV5RCxzQkFBVU8sSUEvQmQ7O0FBZ0NkO0FBQ0o7QUFDQTtBQUNJekQsRUFBQUEsS0FBSyxFQUFFa0Qsc0JBQVVTLE1BbkNIO0FBb0NkNUQsRUFBQUEsYUFBYSxFQUFFbUQsc0JBQVVRLElBcENYO0FBcUNkaEUsRUFBQUEsaUJBQWlCLEVBQUV3RCxzQkFBVU8sSUFyQ2Y7QUFzQ2R4RCxFQUFBQSxTQUFTLEVBQUVpRCxzQkFBVUssU0FBVixDQUFvQixDQUFDTCxzQkFBVUksTUFBWCxFQUFtQkosc0JBQVVNLE1BQTdCLENBQXBCLENBdENHO0FBdUNkdEQsRUFBQUEsZUFBZSxFQUFFZ0Qsc0JBQVVPLElBdkNiO0FBd0NkdEQsRUFBQUEsaUJBQWlCLEVBQUUrQyxzQkFBVUUsS0FBVixDQUFnQixDQUFDLEtBQUQsRUFBUSxRQUFSLEVBQWtCLFFBQWxCLENBQWhCLENBeENMO0FBeUNkaEQsRUFBQUEsbUJBQW1CLEVBQUU4QyxzQkFBVUUsS0FBVixDQUFnQixDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLEtBQXBCLENBQWhCO0FBekNQLENBQWxCOzs0QkE0Q2V2RSxLQUFLLENBQUMrRSxJQUFOLENBQVdoRixLQUFYLEVBQWtCLFVBQUNpRixJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDN0MsU0FBTyxrQ0FBUUQsSUFBUixFQUFjQyxJQUFkLENBQVA7QUFDSCxDQUZjLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgVGV4dExpbmsgZnJvbSBcIi4uL1RleHRMaW5rL1RleHRMaW5rXCI7XHJcbmltcG9ydCB7b3Blbkxpbmt9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCB7bm9vcH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCBpc0VxdWFsIGZyb20gXCJyZWFjdC1mYXN0LWNvbXBhcmVcIjtcclxuXHJcbmNvbnN0IEFsZXJ0ID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBhY3Rpb24sIGNvbnRlbnQsIGhlYWRlciwgaWNvbiwgY29sb3IsIHZpc2libGUsIHRleHRMaW5rUHJvcHMsXHJcbiAgICAgICAgbWFuYWdlRXhwYW5kZWQsIG1hbmFnZVZpc2liaWxpdHksIG1hbmFnZUJ1dHRvbkNsaWNrLFxyXG4gICAgICAgIG9uVGV4dExpbmtDbGlja2VkLCBvbkJ1dHRvbkNsaWNrLCBvbkV4cGFuZEFjdGlvbixcclxuICAgICAgICBleHBhbmRlZCwgb25DbG9zZUFjdGlvbiwgZGVsYXksIGNsYXNzTmFtZSxcclxuICAgICAgICBkZWZhdWx0UG9zaXRpb24sIHZlcnRpY2FsUG9zaXRpb25zLCBob3Jpem9udGFsUG9zaXRpb25zLFxyXG4gICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSwgdGV4dEFsaWduQ2VudGVyXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgW29uZUxpbmVUZXh0LCBzZXRPbmVMaW5lVGV4dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNPdmVyZmxvd2VkLCBzZXRJc092ZXJmbG93ZWRdID0gdXNlU3RhdGUoIWV4cGFuZGVkKTtcclxuICAgIGNvbnN0IFtpc0V4cGFuZGVkLCBzZXRJc0V4cGFuZGVkXSA9IHVzZVN0YXRlKGV4cGFuZGVkKTtcclxuICAgIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSAgdXNlU3RhdGUodmlzaWJsZSk7XHJcblxyXG4gICAgY29uc3QgY29udGVudFJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBsZXQgdGltZXIgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IGV4cGFuZGVkRmluYWwgPSBtYW5hZ2VFeHBhbmRlZCA/IGV4cGFuZGVkIDogaXNFeHBhbmRlZDtcclxuICAgIGNvbnN0IHZpc2libGVGaW5hbCA9IG1hbmFnZVZpc2liaWxpdHkgPyB2aXNpYmxlIDogaXNWaXNpYmxlO1xyXG5cclxuICAgIGNvbnN0IHNldERlbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChkZWxheSkge1xyXG4gICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIW1hbmFnZVZpc2liaWxpdHkgJiYgc2V0SXNWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZUFjdGlvbigpO1xyXG4gICAgICAgICAgICB9LCBkZWxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkNsaWNrZWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKCFtYW5hZ2VCdXR0b25DbGljaykge1xyXG4gICAgICAgICAgICAhbWFuYWdlVmlzaWJpbGl0eSAmJiBzZXRJc1Zpc2libGUoZmFsc2UpXHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaHJlZilcclxuICAgICAgICAgICAgICAgIG9wZW5MaW5rKGFjdGlvbi5ocmVmKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uQnV0dG9uQ2xpY2soZSwgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBleHBhbmRBY3Rpb24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbGV0IGN1clZhbHVlID0gZXhwYW5kZWRGaW5hbDtcclxuICAgICAgICBpZiAoIW1hbmFnZUV4cGFuZGVkKSB7XHJcbiAgICAgICAgICAgIGN1clZhbHVlID0gIWlzRXhwYW5kZWQ7XHJcbiAgICAgICAgICAgIHNldElzT3ZlcmZsb3dlZCghY3VyVmFsdWUpO1xyXG4gICAgICAgICAgICBzZXRJc0V4cGFuZGVkKGN1clZhbHVlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25FeHBhbmRBY3Rpb24oe2lzRXhwYW5kZWQ6IGN1clZhbHVlfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWZpbmVTaXplcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBsZXQgY29udGVudEVsID0gY29udGVudFJlZj8uY3VycmVudDtcclxuICAgICAgICBsZXQgdGV4dCA9IHRleHRSZWY/LmN1cnJlbnQ7XHJcblxyXG4gICAgICAgIGlmIChjb250ZW50RWwgJiYgdGV4dCkge1xyXG4gICAgICAgICAgICBsZXQgb25seUhlYWRlciA9IGhlYWRlciAmJiAhY29udGVudDtcclxuICAgICAgICAgICAgbGV0IG9uZUxpbmVUZXh0ID0gIWhlYWRlciAmJiB0ZXh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCA8IDMyO1xyXG5cclxuICAgICAgICAgICAgc2V0SXNPdmVyZmxvd2VkKGNvbnRlbnRFbC5zY3JvbGxIZWlnaHQgPCB0ZXh0LnNjcm9sbEhlaWdodCk7XHJcbiAgICAgICAgICAgIHNldE9uZUxpbmVUZXh0KG9ubHlIZWFkZXIgfHwgb25lTGluZVRleHQpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2hlYWRlciwgY29udGVudCwgY29udGVudFJlZiwgdGV4dFJlZl0pXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCggZGVmaW5lU2l6ZXMsIFtjb250ZW50LCBoZWFkZXJdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiBvblZpc2liaWxpdHlDaGFuZ2UodmlzaWJsZUZpbmFsKSwgW3Zpc2libGVGaW5hbF0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IG1hbmFnZUV4cGFuZGVkICYmIHNldElzT3ZlcmZsb3dlZCghZXhwYW5kZWQpLCBbZXhwYW5kZWQsIG1hbmFnZUV4cGFuZGVkXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKG1hbmFnZVZpc2liaWxpdHkpe1xyXG4gICAgICAgICAgICBzZXREZWxheSgpO1xyXG4gICAgICAgICAgICBkZWZpbmVTaXplcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt2aXNpYmxlLCBtYW5hZ2VWaXNpYmlsaXR5XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRlZmluZVNpemVzKCk7XHJcbiAgICAgICAgc2V0RGVsYXkoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IG1haW5Db250YWluZXJDbGFzc2VzID0gY2xhc3NuYW1lcyhcclxuICAgICAgICBjb2xvcixcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgXCJzd2YtYWxlcnQtY29udGFpbmVyXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcIi0tZml4ZWRcIjogIWRlZmF1bHRQb3NpdGlvbixcclxuICAgICAgICAgICAgXCItLWFsaWduQ2VudGVyXCI6ICFpc092ZXJmbG93ZWQgJiYgIWV4cGFuZGVkRmluYWwsXHJcbiAgICAgICAgICAgIFwiLS1vbmVMaW5lQ29udGVudFwiOiBvbmVMaW5lVGV4dCxcclxuICAgICAgICAgICAgXCItLWV4cGFuZGVkXCI6IGV4cGFuZGVkRmluYWwsXHJcbiAgICAgICAgICAgIFwiLS1uby1pY29uXCI6ICFpY29uLFxyXG4gICAgICAgICAgICBbYC0tdmVydGljYWwtJHt2ZXJ0aWNhbFBvc2l0aW9uc31gXTogdmVydGljYWxQb3NpdGlvbnMsXHJcbiAgICAgICAgICAgIFtgLS1ob3Jpem9udGFsLSR7aG9yaXpvbnRhbFBvc2l0aW9uc31gXTogaG9yaXpvbnRhbFBvc2l0aW9ucyxcclxuICAgICAgICB9XHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgYWxlcnRDb250ZW50Q2xhc3NlcyA9IGNsYXNzbmFtZXMoXCJhbGVydC1jb250ZW50XCIsXHJcbiAgICAgICAgeyBcInRleHQtYWxpZ24tY2VudGVyXCI6IHRleHRBbGlnbkNlbnRlciB9XHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgdGV4dFN0eWxlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgIFwidGV4dC1jb250YWluZXJcIjogdHJ1ZSxcclxuICAgICAgICBcIi0tb3ZlcmZsb3dlZFwiOiBpc092ZXJmbG93ZWQsXHJcbiAgICAgICAgXCItLXNldFRvT25lTGluZVwiOiBoZWFkZXIgJiYgaXNPdmVyZmxvd2VkLFxyXG4gICAgICAgIFwiLS1leHBhbmRlZFwiOiBleHBhbmRlZEZpbmFsXHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBzaG93TGFiZWwgPSBleHBhbmRlZEZpbmFsID8gXCJsZXNzXCIgOiBcIm1vcmVcIjtcclxuICAgIGxldCBpc0J1dHRvbldpdGhUZXh0ID0gYWN0aW9uLnR5cGUgPT09IFwiYWNrbm93bGVkZ2VcIiB8fCBhY3Rpb24udHlwZSA9PT0gXCJvcGVuXCJcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICB2aXNpYmxlRmluYWwgJiZcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluQ29udGFpbmVyQ2xhc3Nlc30gcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpY29uICYmIDxJY29uIGNsYXNzTmFtZT17XCJhbGVydC1pY29uXCJ9IGljb249e2ljb259Lz59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthbGVydENvbnRlbnRDbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlbCA9PiBjb250ZW50UmVmLmN1cnJlbnQgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIgJiYgPGRpdiBjbGFzc05hbWU9e1wiYWxlcnQtaGVhZGVyXCJ9PntoZWFkZXJ9PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17ZWwgPT4gdGV4dFJlZi5jdXJyZW50ID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0ZXh0U3R5bGVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17XCJhbGVydC10ZXh0XCJ9Pntjb250ZW50fSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dExpbmtQcm9wcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dGV4dExpbmtQcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dGV4dExpbmtQcm9wcy5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuV2luZG93cz17dGV4dExpbmtQcm9wcy5vcGVuV2luZG93cyB8fCBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWQ9e3RleHRMaW5rUHJvcHMuZG93bmxvYWQgfHwgZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uVGV4dExpbmtDbGlja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KGlzT3ZlcmZsb3dlZCB8fCBleHBhbmRlZEZpbmFsKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wic2hvdy1tb3JlLWJ1dHRvblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJ0ZXJ0aWFyeVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXhwYW5kQWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFNob3cgJHtzaG93TGFiZWx9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiYWxlcnQtYnV0dG9uXCIsIHtcImRpc21pc3NcIjogIWlzQnV0dG9uV2l0aFRleHR9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpc0J1dHRvbldpdGhUZXh0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWN0aW9uLmxhYmVsIHx8IChhY3Rpb24udHlwZSA9PT0gXCJhY2tub3dsZWRnZVwiID8gXCJPa1wiIDogXCJPcGVuXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXshaXNCdXR0b25XaXRoVGV4dCA/IFwieFwiIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17aXNCdXR0b25XaXRoVGV4dCA/IFwibWRcIiA6IFwibGdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2J1dHRvbkNsaWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtcImluaGVyaXRcIn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgKTtcclxufSk7XHJcblxyXG5BbGVydC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjb2xvcjogXCJibHVlXCIsXHJcbiAgICBhY3Rpb246IHt0eXBlOiBcImRpc21pc3NcIn0sXHJcblxyXG4gICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgIGNsYXNzTmFtZTogXCJcIixcclxuXHJcbiAgICBvblZpc2liaWxpdHlDaGFuZ2U6IG5vb3AsXHJcbiAgICBvblRleHRMaW5rQ2xpY2tlZDogbm9vcCxcclxuICAgIG9uRXhwYW5kQWN0aW9uOiBub29wLFxyXG4gICAgb25CdXR0b25DbGljazogbm9vcCxcclxuICAgIG9uQ2xvc2VBY3Rpb246IG5vb3AsXHJcblxyXG4gICAgdmVydGljYWxQb3NpdGlvbnM6IFwidG9wXCIsXHJcbiAgICBob3Jpem9udGFsUG9zaXRpb25zOiBcImNlbnRlclwiXHJcbn1cclxuXHJcbkFsZXJ0LnByb3BUeXBlcyA9IHtcclxuICAgIGFjdGlvbjogcHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICB0eXBlOiBwcm9wVHlwZXMub25lT2YoW1wiZGlzbWlzc1wiLCBcImFja25vd2xlZGdlXCIsIFwib3BlblwiXSkuaXNSZXF1aXJlZCxcclxuICAgICAgICBocmVmOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nXHJcbiAgICB9KSxcclxuICAgIGNvbnRlbnQ6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5vYmplY3RdKSxcclxuICAgIC8qKlxyXG4gICAgICogQ2FuIGNvbnRyb2wgb25seSBpZiBtYW5hZ2VFeHBhbmRlZCA9IHRydWVcclxuICAgICAqL1xyXG4gICAgZXhwYW5kZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgaGVhZGVyOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaWNvbjogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHRleHRBbGlnbkNlbnRlcjogcHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgbWFuYWdlRXhwYW5kZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgY29sb3I6IHByb3BUeXBlcy5vbmVPZihbXCJ5ZWxsb3dcIiwgXCJyZWRcIiwgXCJncmVlblwiLCBcImJsdWVcIiwgXCJncmV5XCIsIFwiZ3JleS1ibHVlXCJdKSxcclxuICAgIHRleHRMaW5rUHJvcHM6IHByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgaHJlZjogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBvcGVuV2luZG93czogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgZG93bmxvYWQ6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5vYmplY3RdKVxyXG4gICAgfSksXHJcbiAgICBvblZpc2liaWxpdHlDaGFuZ2U6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25FeHBhbmRBY3Rpb246IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25UZXh0TGlua0NsaWNrZWQ6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25CdXR0b25DbGljazogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAvKipcclxuICAgICAqICBDYW4gY29udHJvbCBvbmx5IGlmIG1hbmFnZVZpc2liaWxpdHkgPSB0cnVlXHJcbiAgICAgKi9cclxuICAgIHZpc2libGU6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlVmlzaWJpbGl0eTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICAvKipcclxuICAgICAqIFRpbWUgYmVmb3JlIHJlbW92ZSAoaW4gbWlsbGlzZWNvbmRzKVxyXG4gICAgICovXHJcbiAgICBkZWxheTogcHJvcFR5cGVzLm51bWJlcixcclxuICAgIG9uQ2xvc2VBY3Rpb246IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgbWFuYWdlQnV0dG9uQ2xpY2s6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMub2JqZWN0XSksXHJcbiAgICBkZWZhdWx0UG9zaXRpb246IHByb3BUeXBlcy5ib29sLFxyXG4gICAgdmVydGljYWxQb3NpdGlvbnM6IHByb3BUeXBlcy5vbmVPZihbXCJ0b3BcIiwgXCJjZW50ZXJcIiwgXCJib3R0b21cIl0pLFxyXG4gICAgaG9yaXpvbnRhbFBvc2l0aW9uczogcHJvcFR5cGVzLm9uZU9mKFtcInN0YXJ0XCIsIFwiY2VudGVyXCIsIFwiZW5kXCJdKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEFsZXJ0LCAocHJldiwgbmV4dCkgPT4ge1xyXG4gICAgcmV0dXJuIGlzRXF1YWwocHJldiwgbmV4dCk7XHJcbn0pO1xyXG4iXX0=