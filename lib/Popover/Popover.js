"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _findByType = _interopRequireWildcard(require("../utils/findByType"));

var _utils = require("./utils");

var _classnames = _interopRequireDefault(require("classnames"));

var _utils2 = require("../DatePicker/utils");

var _resizeObserver = require("resize-observer");

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

var Popover = /*#__PURE__*/React.forwardRef(function (props, _ref) {
  var children = props.children,
      roundBorder = props.roundBorder,
      contentStyles = props.contentStyles,
      positionTarget = props.positionTarget,
      manageOpened = props.manageOpened,
      onTargetClick = props.onTargetClick,
      onOuterPopoverClicked = props.onOuterPopoverClicked,
      positions = props.positions,
      hideTail = props.hideTail,
      opened = props.opened;

  var _useState = (0, React.useState)(opened),
      _useState2 = _slicedToArray(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var targetRef = (0, React.useRef)(null);
  var contentRef = (0, React.useRef)(null);
  var openedFinal = manageOpened ? opened : isOpened;
  var resizeObserver;

  var renderContent = function renderContent() {
    var content = (0, _findByType["default"])(children, "Content");
    if (!content) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames["default"])({
        "popover-content": true,
        "noRoundBorder": !roundBorder
      }),
      ref: function ref(el) {
        contentRef.current = el;
        _ref = el;
      },
      style: contentStyles,
      onClick: function onClick(e) {
        return e === null || e === void 0 ? void 0 : e.stopPropagation();
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "popover-content-keeper",
        children: content
      })
    });
  };

  console.log(targetRef);

  var renderTarget = function renderTarget() {
    var target = (0, _findByType["default"])(children, "Target");

    if (positionTarget) {
      if (targetRef === null || (targetRef === null || targetRef === void 0 ? void 0 : targetRef.current) !== positionTarget.current) {
        targetRef.current = positionTarget.current;

        if (contentRef !== null && contentRef !== void 0 && contentRef.current) {
          resetStyles();
          openedFinal && setStylesToContent();
        }
      }

      if (targetRef !== null && targetRef !== void 0 && targetRef.current) targetRef.current.onclick = function (e) {
        return targetClicked(e);
      };
      return null;
    }

    if (!target) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "popover-target",
      ref: function ref(el) {
        return targetRef.current = el;
      },
      onClick: function onClick(e) {
        return targetClicked(e);
      },
      children: target
    });
  };

  var contentResized = function contentResized() {
    resetStyles();
    openedFinal && setStylesToContent();
  };

  var targetClicked = function targetClicked(e) {
    e.preventDefault();

    if ((0, _utils2.isPointInsideTheElement)(targetRef === null || targetRef === void 0 ? void 0 : targetRef.current, e.clientX, e.clientY)) {
      !manageOpened && setIsOpened(!isOpened);
      onTargetClick({
        value: manageOpened ? opened : !isOpened
      });
    }
  };

  var documentClicked = function documentClicked(event) {
    var pointX = event.clientX;
    var pointY = event.clientY;
    var contentElement = contentRef === null || contentRef === void 0 ? void 0 : contentRef.current;
    var targetElement = targetRef === null || targetRef === void 0 ? void 0 : targetRef.current;

    if (openedFinal && contentElement && targetElement) {
      var isOutsideContent = !(0, _utils2.isPointInsideTheElement)(contentElement, pointX, pointY);
      var isOutsideTarget = !(0, _utils2.isPointInsideTheElement)(targetElement, pointX, pointY);

      if (isOutsideContent && isOutsideTarget) {
        !manageOpened && setIsOpened(!isOpened);
        onOuterPopoverClicked(event);
      }
    }
  };

  var setStylesToContent = function setStylesToContent() {
    if (contentRef !== null && contentRef !== void 0 && contentRef.current && targetRef !== null && targetRef !== void 0 && targetRef.current) {
      var padding = contentStyles && contentStyles['padding'] && contentStyles['padding'].split('px')[0];
      var contentElement = contentRef.current;
      var targetDimensions = targetRef.current.getBoundingClientRect();
      var contentDimensions = contentElement.getBoundingClientRect();
      var windowParam = {
        startY: 0,
        startX: 0,
        endY: window.innerHeight,
        endX: window.innerWidth
      };
      var stylesInfo = (0, _utils.getPopoverStyle)(positions, targetDimensions, contentDimensions, windowParam, hideTail, roundBorder, padding);
      var styles = stylesInfo.style;
      contentElement.style.transform = styles.transform;
      contentElement.style.left = styles.left;
      contentElement.style.top = styles.top;
      contentElement.style.visibility = "visible";
      if (styles.maxHeight) contentElement.children[0].style.maxHeight = styles.maxHeight;
      if (styles.maxWidth) contentElement.children[0].style.maxWidth = styles.maxWidth;

      if (!hideTail && stylesInfo.hasArrow) {
        for (var _i2 = 0, _Object$entries = Object.entries(stylesInfo.arrowStyle); _i2 < _Object$entries.length; _i2++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          contentElement.style.setProperty(key, value);
        }
      }
    }
  };

  var resetStyles = function resetStyles() {
    var contentElement = contentRef === null || contentRef === void 0 ? void 0 : contentRef.current;

    if (contentElement) {
      contentElement.style.visibility = "hidden";
      contentElement.style.transform = "translate3d(0, 0, 0)";
      contentElement.style.left = 0;
      contentElement.style.top = 0;
      contentElement.children[0].style.maxHeight = contentElement.style.maxHeight || contentElement.style.height;
      contentElement.children[0].style.maxWidth = contentElement.style.maxWidth || contentElement.style.width;
      contentElement.style.margin = 0;
    }
  };

  var updateOpenedState = function updateOpenedState(value) {
    resetStyles();
    value && setStylesToContent();
  };

  (0, React.useEffect)(function () {
    var currentValue = manageOpened ? opened : isOpened;
    updateOpenedState(currentValue);
  }, [opened, isOpened]);
  (0, React.useEffect)(function () {
    resizeObserver = new _resizeObserver.ResizeObserver(contentResized);
    updateOpenedState(opened);
    return resizeObserver.disconnect();
  }, []);
  (0, React.useEffect)(function () {
    document.addEventListener("click", function (e) {
      return documentClicked(e);
    });

    if (resizeObserver) {
      resizeObserver.disconnect();
      if (targetRef !== null && targetRef !== void 0 && targetRef.current) resizeObserver.observe(targetRef.current);
      resizeObserver.observe(contentRef === null || contentRef === void 0 ? void 0 : contentRef.current.children[0].children[0]);
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [renderContent(), renderTarget()]
  });
});
Popover.Content = (0, _findByType.createSubComponent)("Content");
Popover.Target = (0, _findByType.createSubComponent)("Target");
Popover.defaultProps = {
  hideTail: false,
  manageOpened: false,
  opened: false,
  positions: (0, _utils.getAllPossibleVariants)(),
  roundBorder: true,
  onTargetClick: function onTargetClick() {
    return void 0;
  },
  onOuterPopoverClicked: function onOuterPopoverClicked() {
    return void 0;
  },
  fitTargetWidth: false
};
Popover.propTypes = {
  hideTail: _propTypes["default"].bool,
  manageOpened: _propTypes["default"].bool,
  opened: _propTypes["default"].bool,
  positionTarget: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].any
  })]),
  positions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    target: _propTypes["default"].string,
    content: _propTypes["default"].string
  })),
  onTargetClick: _propTypes["default"].func,
  onOuterPopoverClicked: _propTypes["default"].func,
  roundBorder: _propTypes["default"].bool,
  contentStyles: _propTypes["default"].object,
  fitTargetWidth: _propTypes["default"].bool
};
var _default = Popover;
exports["default"] = _default;