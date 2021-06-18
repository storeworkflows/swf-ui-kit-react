"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _findByType = _interopRequireWildcard(require("../utils/findByType"));

var _utils = require("./utils");

var _utils2 = require("../DatePicker/utils");

var _constants = require("./constants");

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _utils3 = require("../utils");

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

var Popover = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(function (props, _ref5) {
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

    if (isOpened && contentElement && targetElement) {
      var isOutsideContent = !(0, _utils2.isPointInsideTheElement)(contentElement, pointX, pointY);
      var isOutsideTarget = !(0, _utils2.isPointInsideTheElement)(targetElement, pointX, pointY);

      if (isOutsideContent && isOutsideTarget) {
        !manageOpened && setIsOpened(!isOpened);
        onOuterPopoverClicked(event);
      }
    }
  };

  var setStyles = function setStyles(isHidden, popoverStyles) {
    var contentElement = contentRef === null || contentRef === void 0 ? void 0 : contentRef.current;
    if (!contentElement) return;
    var stylesToSet = isHidden ? _constants.POPOVER.hiddenStyles : popoverStyles === null || popoverStyles === void 0 ? void 0 : popoverStyles.style;
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
    var targetElement = targetRef === null || targetRef === void 0 ? void 0 : targetRef.current;

    if (contentElement && targetElement) {
      var padding = contentStyles && contentStyles['padding'] && contentStyles['padding'].split('px')[0];
      var contentDimensions = contentElement.getBoundingClientRect();
      var targetDimensions = targetElement.getBoundingClientRect();
      var stylesInfo = (0, _utils.getPopoverStyle)(positions, targetDimensions, contentDimensions, hideTail, roundBorder, padding);
      stylesInfo.style.visibility = "visible";
      return stylesInfo;
    }
  };

  (0, React.useEffect)(function () {
    return targetRef.current = positionTarget === null || positionTarget === void 0 ? void 0 : positionTarget.current;
  }, [positionTarget === null || positionTarget === void 0 ? void 0 : positionTarget.current]);
  (0, React.useEffect)(function () {
    return manageOpened && setIsOpened(opened);
  }, [opened, manageOpened]);
  (0, React.useEffect)(function () {
    setStyles(true);
    isOpened && setStyles(false, calculateStyles());
  }, [isOpened]);
  (0, React.useEffect)(function () {
    var targetValue = targetRef.current;

    if (targetValue) {
      targetValue.addEventListener("click", targetClicked);
      return function () {
        return targetValue.removeEventListener("click", targetClicked);
      };
    }
  }, [targetRef.current, onTargetClick, manageOpened]);
  (0, React.useEffect)(function () {
    document.addEventListener("click", documentClicked);
    return function () {
      return document.removeEventListener("click", documentClicked);
    };
  }, [contentRef.current, targetRef.current, isOpened, manageOpened, onOuterPopoverClicked]);

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
}), function (prev, next) {
  return (0, _reactFastCompare["default"])(prev, next);
});
Popover.Content = (0, _findByType.createSubComponent)("Content");
Popover.Target = (0, _findByType.createSubComponent)("Target");
Popover.defaultProps = {
  hideTail: false,
  manageOpened: false,
  opened: false,
  positions: (0, _utils.getAllPossibleVariants)(),
  roundBorder: true,
  onTargetClick: _utils3.noop,
  onOuterPopoverClicked: _utils3.noop,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qb3BvdmVyL1BvcG92ZXIuanMiXSwibmFtZXMiOlsiUG9wb3ZlciIsIlJlYWN0IiwibWVtbyIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImNoaWxkcmVuIiwicm91bmRCb3JkZXIiLCJjb250ZW50U3R5bGVzIiwicG9zaXRpb25UYXJnZXQiLCJtYW5hZ2VPcGVuZWQiLCJvblRhcmdldENsaWNrIiwib25PdXRlclBvcG92ZXJDbGlja2VkIiwicG9zaXRpb25zIiwiaGlkZVRhaWwiLCJvcGVuZWQiLCJpc09wZW5lZCIsInNldElzT3BlbmVkIiwidGFyZ2V0UmVmIiwiY29udGVudFJlZiIsInRhcmdldENsaWNrZWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJ2YWx1ZSIsImRvY3VtZW50Q2xpY2tlZCIsImV2ZW50IiwicG9pbnRYIiwicG9pbnRZIiwiY29udGVudEVsZW1lbnQiLCJ0YXJnZXRFbGVtZW50IiwiaXNPdXRzaWRlQ29udGVudCIsImlzT3V0c2lkZVRhcmdldCIsInNldFN0eWxlcyIsImlzSGlkZGVuIiwicG9wb3ZlclN0eWxlcyIsInN0eWxlc1RvU2V0IiwiUE9QT1ZFUiIsImhpZGRlblN0eWxlcyIsInN0eWxlIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImtleSIsIm1heEhlaWdodCIsImhlaWdodCIsIm1heFdpZHRoIiwid2lkdGgiLCJoYXNBcnJvdyIsImFycm93U3R5bGUiLCJjYWxjdWxhdGVTdHlsZXMiLCJwYWRkaW5nIiwic3BsaXQiLCJjb250ZW50RGltZW5zaW9ucyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhcmdldERpbWVuc2lvbnMiLCJzdHlsZXNJbmZvIiwidmlzaWJpbGl0eSIsInRhcmdldFZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsInJlbmRlclRhcmdldCIsInRhcmdldCIsInJlbmRlckNvbnRlbnQiLCJjb250ZW50IiwiZWwiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2IiwibmV4dCIsIkNvbnRlbnQiLCJUYXJnZXQiLCJkZWZhdWx0UHJvcHMiLCJub29wIiwiZml0VGFyZ2V0V2lkdGgiLCJwcm9wVHlwZXMiLCJib29sIiwib25lT2ZUeXBlIiwiZnVuYyIsInNoYXBlIiwiYW55IiwiYXJyYXlPZiIsInN0cmluZyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLGdCQUFHQyxLQUFLLENBQUNDLElBQU4sZUFBV0QsS0FBSyxDQUFDRSxVQUFOLENBQWlCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFnQjtBQUFBLE1BRWpEQyxRQUZpRCxHQUdpQkYsS0FIakIsQ0FFakRFLFFBRmlEO0FBQUEsTUFFdkNDLFdBRnVDLEdBR2lCSCxLQUhqQixDQUV2Q0csV0FGdUM7QUFBQSxNQUUxQkMsYUFGMEIsR0FHaUJKLEtBSGpCLENBRTFCSSxhQUYwQjtBQUFBLE1BRVhDLGNBRlcsR0FHaUJMLEtBSGpCLENBRVhLLGNBRlc7QUFBQSxNQUVLQyxZQUZMLEdBR2lCTixLQUhqQixDQUVLTSxZQUZMO0FBQUEsTUFHcERDLGFBSG9ELEdBR2lCUCxLQUhqQixDQUdwRE8sYUFIb0Q7QUFBQSxNQUdyQ0MscUJBSHFDLEdBR2lCUixLQUhqQixDQUdyQ1EscUJBSHFDO0FBQUEsTUFHZEMsU0FIYyxHQUdpQlQsS0FIakIsQ0FHZFMsU0FIYztBQUFBLE1BR0hDLFFBSEcsR0FHaUJWLEtBSGpCLENBR0hVLFFBSEc7QUFBQSxNQUdPQyxNQUhQLEdBR2lCWCxLQUhqQixDQUdPVyxNQUhQOztBQUFBLGtCQUt4QixvQkFBU0EsTUFBVCxDQUx3QjtBQUFBO0FBQUEsTUFLakRDLFFBTGlEO0FBQUEsTUFLdkNDLFdBTHVDOztBQU94RCxNQUFNQyxTQUFT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c0JBQVVJLEtBQVYsQ0FBZ0I7QUFDekNoQixJQUFBQSxNQUFNLEVBQUVZLHNCQUFVTyxNQUR1QjtBQUV6Q2pCLElBQUFBLE9BQU8sRUFBRVUsc0JBQVVPO0FBRnNCLEdBQWhCLENBQWxCLENBUks7QUFZaEJ6RSxFQUFBQSxhQUFhLEVBQUVrRSxzQkFBVUcsSUFaVDtBQWFoQnBFLEVBQUFBLHFCQUFxQixFQUFFaUUsc0JBQVVHLElBYmpCO0FBY2hCekUsRUFBQUEsV0FBVyxFQUFFc0Usc0JBQVVDLElBZFA7QUFlaEJ0RSxFQUFBQSxhQUFhLEVBQUVxRSxzQkFBVVEsTUFmVDtBQWdCaEJULEVBQUFBLGNBQWMsRUFBRUMsc0JBQVVDO0FBaEJWLENBQXBCO2VBbUJlOUUsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgZmluZEJ5VHlwZSwge2NyZWF0ZVN1YkNvbXBvbmVudH0gZnJvbSBcIi4uL3V0aWxzL2ZpbmRCeVR5cGVcIjtcclxuaW1wb3J0IHtnZXRBbGxQb3NzaWJsZVZhcmlhbnRzLCBnZXRQb3BvdmVyU3R5bGV9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCB7aXNQb2ludEluc2lkZVRoZUVsZW1lbnR9IGZyb20gXCIuLi9EYXRlUGlja2VyL3V0aWxzXCI7XHJcbmltcG9ydCB7UE9QT1ZFUn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBpc0VxdWFsIGZyb20gXCJyZWFjdC1mYXN0LWNvbXBhcmVcIjtcclxuaW1wb3J0IHtub29wfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmNvbnN0IFBvcG92ZXIgPSBSZWFjdC5tZW1vKFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuXHJcbiAgICBjb25zdCB7Y2hpbGRyZW4sIHJvdW5kQm9yZGVyLCBjb250ZW50U3R5bGVzLCBwb3NpdGlvblRhcmdldCwgbWFuYWdlT3BlbmVkLFxyXG4gICAgICAgIG9uVGFyZ2V0Q2xpY2ssIG9uT3V0ZXJQb3BvdmVyQ2xpY2tlZCwgcG9zaXRpb25zLCBoaWRlVGFpbCwgb3BlbmVkfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IFtpc09wZW5lZCwgc2V0SXNPcGVuZWRdID0gdXNlU3RhdGUob3BlbmVkKTtcclxuXHJcbiAgICBjb25zdCB0YXJnZXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldENsaWNrZWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYoaXNQb2ludEluc2lkZVRoZUVsZW1lbnQodGFyZ2V0UmVmPy5jdXJyZW50LCBlLmNsaWVudFgsIGUuY2xpZW50WSkpIHtcclxuICAgICAgICAgICAgIW1hbmFnZU9wZW5lZCAmJiAgc2V0SXNPcGVuZWQoIWlzT3BlbmVkKVxyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBtYW5hZ2VPcGVuZWQgPyBvcGVuZWQgOiAhaXNPcGVuZWQ7XHJcbiAgICAgICAgICAgIG9uVGFyZ2V0Q2xpY2soe3ZhbHVlfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZG9jdW1lbnRDbGlja2VkID0gKGV2ZW50KSA9PntcclxuICAgICAgICBsZXQgcG9pbnRYID0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgICBsZXQgcG9pbnRZID0gZXZlbnQuY2xpZW50WTtcclxuICAgICAgICBsZXQgY29udGVudEVsZW1lbnQgPSBjb250ZW50UmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgbGV0IHRhcmdldEVsZW1lbnQgPSB0YXJnZXRSZWYuY3VycmVudDtcclxuXHJcbiAgICAgICAgaWYoIGlzT3BlbmVkICYmIGNvbnRlbnRFbGVtZW50ICYmIHRhcmdldEVsZW1lbnQpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBpc091dHNpZGVDb250ZW50ID0gIWlzUG9pbnRJbnNpZGVUaGVFbGVtZW50KGNvbnRlbnRFbGVtZW50LCBwb2ludFgsIHBvaW50WSk7XHJcbiAgICAgICAgICAgIGxldCBpc091dHNpZGVUYXJnZXQgPSAhaXNQb2ludEluc2lkZVRoZUVsZW1lbnQodGFyZ2V0RWxlbWVudCwgcG9pbnRYLCBwb2ludFkpO1xyXG5cclxuICAgICAgICAgICAgaWYoaXNPdXRzaWRlQ29udGVudCAmJiBpc091dHNpZGVUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICFtYW5hZ2VPcGVuZWQgJiYgc2V0SXNPcGVuZWQoIWlzT3BlbmVkKVxyXG4gICAgICAgICAgICAgICAgb25PdXRlclBvcG92ZXJDbGlja2VkKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRTdHlsZXMgPSAoaXNIaWRkZW4sIHBvcG92ZXJTdHlsZXMpID0+IHtcclxuICAgICAgICBsZXQgY29udGVudEVsZW1lbnQgPSBjb250ZW50UmVmPy5jdXJyZW50O1xyXG4gICAgICAgIGlmKCFjb250ZW50RWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBzdHlsZXNUb1NldCA9IGlzSGlkZGVuID8gUE9QT1ZFUi5oaWRkZW5TdHlsZXMgOiBwb3BvdmVyU3R5bGVzPy5zdHlsZTtcclxuICAgICAgICBpZiAoIXN0eWxlc1RvU2V0KSByZXR1cm47XHJcblxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHN0eWxlc1RvU2V0KS5tYXAoKFtrZXksIHZhbHVlXSk9PiB7XHJcbiAgICAgICAgICAgIGlmKGtleSA9PT0gJ21heEhlaWdodCcgfHwga2V5ID09PSAnbWF4V2lkdGgnKVxyXG4gICAgICAgICAgICAgICAgY29udGVudEVsZW1lbnQuY2hpbGRyZW5bMF0uc3R5bGVbYCR7a2V5fWBdID0gdmFsdWUgO1xyXG4gICAgICAgICAgICBlbHNlIGNvbnRlbnRFbGVtZW50LnN0eWxlW2Ake2tleX1gXSA9IHZhbHVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYoaXNIaWRkZW4pIHtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuY2hpbGRyZW5bMF0uc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0IHx8IGNvbnRlbnRFbGVtZW50LnN0eWxlLmhlaWdodDtcclxuICAgICAgICAgICAgY29udGVudEVsZW1lbnQuY2hpbGRyZW5bMF0uc3R5bGUubWF4V2lkdGggPSBjb250ZW50RWxlbWVudC5zdHlsZS5tYXhXaWR0aCB8fCBjb250ZW50RWxlbWVudC5zdHlsZS53aWR0aDtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmKCFoaWRlVGFpbCAmJiBzdHlsZXNUb1NldC5oYXNBcnJvdyl7XHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHBvcG92ZXJTdHlsZXMuYXJyb3dTdHlsZSkubWFwKChba2V5LCB2YWx1ZV0pPT5cclxuICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnN0eWxlW2Ake2tleX1gXSA9IHZhbHVlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXRlU3R5bGVzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBjb250ZW50RWxlbWVudCA9IGNvbnRlbnRSZWY/LmN1cnJlbnQ7XHJcbiAgICAgICAgbGV0IHRhcmdldEVsZW1lbnQgPSB0YXJnZXRSZWY/LmN1cnJlbnQ7XHJcblxyXG4gICAgICAgIGlmKGNvbnRlbnRFbGVtZW50ICYmIHRhcmdldEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbGV0IHBhZGRpbmcgPSBjb250ZW50U3R5bGVzICYmIGNvbnRlbnRTdHlsZXNbJ3BhZGRpbmcnXSAmJiBjb250ZW50U3R5bGVzWydwYWRkaW5nJ10uc3BsaXQoJ3B4JylbMF0gO1xyXG4gICAgICAgICAgICBsZXQgY29udGVudERpbWVuc2lvbnMgPSBjb250ZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgbGV0IHRhcmdldERpbWVuc2lvbnMgPSB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0eWxlc0luZm8gPSBnZXRQb3BvdmVyU3R5bGUocG9zaXRpb25zLCB0YXJnZXREaW1lbnNpb25zLCBjb250ZW50RGltZW5zaW9ucywgaGlkZVRhaWwsIHJvdW5kQm9yZGVyLCBwYWRkaW5nKTtcclxuICAgICAgICAgICAgc3R5bGVzSW5mby5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHlsZXNJbmZvXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB0YXJnZXRSZWYuY3VycmVudCA9IHBvc2l0aW9uVGFyZ2V0Py5jdXJyZW50LCBbIHBvc2l0aW9uVGFyZ2V0Py5jdXJyZW50XSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiBtYW5hZ2VPcGVuZWQgJiYgc2V0SXNPcGVuZWQob3BlbmVkKSwgW29wZW5lZCwgbWFuYWdlT3BlbmVkXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBzZXRTdHlsZXModHJ1ZSlcclxuICAgICAgICBpc09wZW5lZCAmJiBzZXRTdHlsZXMoZmFsc2UsIGNhbGN1bGF0ZVN0eWxlcygpKVxyXG4gICAgfSxbaXNPcGVuZWRdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0VmFsdWUgPSB0YXJnZXRSZWYuY3VycmVudFxyXG4gICAgICAgIGlmKHRhcmdldFZhbHVlKXtcclxuICAgICAgICAgICAgdGFyZ2V0VmFsdWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhcmdldENsaWNrZWQpXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB0YXJnZXRWYWx1ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFyZ2V0Q2xpY2tlZClcclxuICAgICAgICB9XHJcbiAgICB9LCBbdGFyZ2V0UmVmLmN1cnJlbnQsIG9uVGFyZ2V0Q2xpY2ssIG1hbmFnZU9wZW5lZF0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9jdW1lbnRDbGlja2VkKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvY3VtZW50Q2xpY2tlZClcclxuICAgIH0sIFtjb250ZW50UmVmLmN1cnJlbnQsIHRhcmdldFJlZi5jdXJyZW50LCBpc09wZW5lZCwgbWFuYWdlT3BlbmVkLCBvbk91dGVyUG9wb3ZlckNsaWNrZWRdKVxyXG5cclxuICAgIGNvbnN0IHJlbmRlclRhcmdldCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBcIlRhcmdldFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCF0YXJnZXQpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wicG9wb3Zlci10YXJnZXRcIn1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e3RhcmdldFJlZn0+e3RhcmdldH08L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBcIkNvbnRlbnRcIik7XHJcblxyXG4gICAgICAgIGlmICghY29udGVudClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgIFwicG9wb3Zlci1jb250ZW50XCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcIm5vUm91bmRCb3JkZXJcIjogIXJvdW5kQm9yZGVyXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4ge2NvbnRlbnRSZWYuY3VycmVudCA9IGVsOyByZWY9ZWx9fVxyXG4gICAgICAgICAgICAgICAgIHN0eWxlPXtjb250ZW50U3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gZT8uc3RvcFByb3BhZ2F0aW9uKCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInBvcG92ZXItY29udGVudC1rZWVwZXJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgIHtyZW5kZXJDb250ZW50KCl9XHJcbiAgICAgICAgICAgIHshcG9zaXRpb25UYXJnZXQ/LmN1cnJlbnQgJiYgcmVuZGVyVGFyZ2V0KCl9XHJcbiAgICA8Lz47XHJcbn0pLCAocHJldiwgbmV4dCkgPT4ge1xyXG4gICAgcmV0dXJuIGlzRXF1YWwocHJldiwgbmV4dCk7XHJcbn0pO1xyXG5cclxuUG9wb3Zlci5Db250ZW50ID0gY3JlYXRlU3ViQ29tcG9uZW50KFwiQ29udGVudFwiKTtcclxuUG9wb3Zlci5UYXJnZXQgPSBjcmVhdGVTdWJDb21wb25lbnQoXCJUYXJnZXRcIik7XHJcblxyXG5Qb3BvdmVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGhpZGVUYWlsOiBmYWxzZSxcclxuICAgIG1hbmFnZU9wZW5lZDogZmFsc2UsXHJcbiAgICBvcGVuZWQ6IGZhbHNlLFxyXG4gICAgcG9zaXRpb25zOiBnZXRBbGxQb3NzaWJsZVZhcmlhbnRzKCksXHJcbiAgICByb3VuZEJvcmRlcjogdHJ1ZSxcclxuICAgIG9uVGFyZ2V0Q2xpY2s6IG5vb3AsXHJcbiAgICBvbk91dGVyUG9wb3ZlckNsaWNrZWQ6IG5vb3AsXHJcbiAgICBmaXRUYXJnZXRXaWR0aDogZmFsc2VcclxufVxyXG5cclxuUG9wb3Zlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBoaWRlVGFpbDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgb3BlbmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHBvc2l0aW9uVGFyZ2V0OiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBwcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBwcm9wVHlwZXMuc2hhcGUoeyBjdXJyZW50OiBwcm9wVHlwZXMuYW55IH0pXHJcbiAgICBdKSxcclxuICAgIHBvc2l0aW9uczogcHJvcFR5cGVzLmFycmF5T2YocHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICB0YXJnZXQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgY29udGVudDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pKSxcclxuICAgIG9uVGFyZ2V0Q2xpY2s6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25PdXRlclBvcG92ZXJDbGlja2VkOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIHJvdW5kQm9yZGVyOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGNvbnRlbnRTdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBmaXRUYXJnZXRXaWR0aDogcHJvcFR5cGVzLmJvb2xcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlciJdfQ==