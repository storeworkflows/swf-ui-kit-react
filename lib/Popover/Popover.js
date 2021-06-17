"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _resizeObserver = require("resize-observer");

var _findByType = _interopRequireWildcard(require("../utils/findByType"));

var _utils = require("./utils");

var _utils2 = require("../DatePicker/utils");

var _constants = require("./constants");

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

var Popover = /*#__PURE__*/React.forwardRef(function (props, _ref5) {
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

  var _useState = (0, React.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      contentDimensions = _useState2[0],
      setContentDimensions = _useState2[1];

  var _useState3 = (0, React.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      targetDimensions = _useState4[0],
      setTargetDimensions = _useState4[1];

  var _useState5 = (0, React.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      popoverStyles = _useState6[0],
      setPopoverStyles = _useState6[1];

  var _useState7 = (0, React.useState)(opened),
      _useState8 = _slicedToArray(_useState7, 2),
      isOpened = _useState8[0],
      setIsOpened = _useState8[1];

  var targetRef = (0, React.useRef)(null);
  var contentRef = (0, React.useRef)(null);
  var openedFinal = manageOpened ? opened : isOpened;
  (0, React.useEffect)(function () {
    setStyles(true);
    calculateStyles();
  }, [targetDimensions, targetRef.current, contentRef.current, contentDimensions, hideTail, positions, contentStyles]);
  (0, React.useEffect)(function () {
    return setStyles(!openedFinal);
  }, [openedFinal, hideTail, contentRef.current, popoverStyles]);
  (0, React.useEffect)(function () {
    var targetValue = targetRef.current;

    if (targetValue) {
      targetValue.addEventListener("click", targetClicked);
      return function () {
        return targetValue.removeEventListener("click", targetClicked);
      };
    }
  }, [targetRef.current, openedFinal, manageOpened, opened, isOpened]);
  (0, React.useEffect)(function () {
    var resizeObserver = new _resizeObserver.ResizeObserver(function (e) {
      var target = e[0].target;
      target.parentElement.classList.contains("popover-content-keeper") ? setContentDimensions(target.getBoundingClientRect()) : setTargetDimensions(target.getBoundingClientRect());
    });
    if (targetRef.current) resizeObserver.observe(targetRef.current);
    resizeObserver.observe(contentRef.current.children[0].children[0]);
    return function () {
      return resizeObserver.disconnect();
    };
  }, [targetRef.current, contentRef.current]);
  (0, React.useEffect)(function () {
    document.addEventListener("click", documentClicked);
    return function () {
      return document.removeEventListener("click", documentClicked);
    };
  }, [targetRef.current, contentRef.current, openedFinal, manageOpened, onOuterPopoverClicked]);
  (0, React.useEffect)(function () {
    var targetValue = positionTarget === null || positionTarget === void 0 ? void 0 : positionTarget.current; // if(targetValue)

    targetRef.current = targetValue;
  }, [positionTarget]);

  var targetClicked = function targetClicked(e) {
    e.preventDefault();

    if ((0, _utils2.isPointInsideTheElement)(targetRef === null || targetRef === void 0 ? void 0 : targetRef.current, e.clientX, e.clientY)) {
      !manageOpened && setIsOpened(!isOpened);
      var value = manageOpened ? opened : !isOpened;
      onTargetClick({
        value: value
      });
    }
  };

  var documentClicked = function documentClicked(event) {
    var pointX = event.clientX;
    var pointY = event.clientY;
    var contentElement = contentRef.current;
    var targetElement = targetRef.current;

    if (openedFinal && contentElement && targetElement) {
      var isOutsideContent = !(0, _utils2.isPointInsideTheElement)(contentElement, pointX, pointY);
      var isOutsideTarget = !(0, _utils2.isPointInsideTheElement)(targetElement, pointX, pointY);

      if (isOutsideContent && isOutsideTarget) {
        !manageOpened && setIsOpened(!isOpened);
        onOuterPopoverClicked(event);
      }
    }
  };

  var setStyles = function setStyles(isHidden) {
    var contentElement = contentRef === null || contentRef === void 0 ? void 0 : contentRef.current;
    if (!contentElement) return;
    var stylesToSet = isHidden ? _constants.POPOVER.hiddenStyles : popoverStyles.style;
    if (!stylesToSet) return;
    Object.entries(stylesToSet).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      if (key === 'maxHeight' || key === 'maxWidth') contentElement.children[0].style["".concat(key)] = value;else contentElement.style["".concat(key)] = value;
    });

    if (isHidden) {
      contentElement.children[0].style.maxHeight = contentElement.style.maxHeight || contentElement.style.height;
      contentElement.children[0].style.maxWidth = contentElement.style.maxWidth || contentElement.style.width;
    } else if (!hideTail && stylesToSet.hasArrow) {
      Object.entries(popoverStyles.arrowStyle).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        return contentElement.style["".concat(key)] = value;
      });
    }
  };

  var calculateStyles = function calculateStyles() {
    var contentElement = contentRef === null || contentRef === void 0 ? void 0 : contentRef.current;

    if (contentElement && targetDimensions) {
      var padding = contentStyles && contentStyles['padding'] && contentStyles['padding'].split('px')[0];

      var _contentDimensions = contentElement.getBoundingClientRect();

      var stylesInfo = (0, _utils.getPopoverStyle)(positions, targetDimensions, _contentDimensions, hideTail, roundBorder, padding);
      stylesInfo.style.visibility = "visible";
      setPopoverStyles(stylesInfo);
    }
  };

  var renderTarget = function renderTarget() {
    var target = (0, _findByType["default"])(children, "Target");
    if (!target) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "popover-target",
      ref: targetRef,
      children: target
    });
  };

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
        _ref5 = el;
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

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [renderContent(), !(positionTarget !== null && positionTarget !== void 0 && positionTarget.current) && renderTarget()]
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