"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPopoverStyle = void 0;

var _constants = require("./constants");

var ALIGNMENT = _constants.POPOVER.ALIGNMENT,
    ARROW_SIZE = _constants.POPOVER.ARROW_SIZE,
    ARROW_ALIGN = _constants.POPOVER.ARROW_ALIGN,
    NO_ARROW_POSITIONS = _constants.POPOVER.NO_ARROW_POSITIONS,
    ARROW_SIDES = _constants.POPOVER.ARROW_SIDES,
    ARROW_SPACE = _constants.POPOVER.ARROW_SPACE;
var verticalAlignment = [ALIGNMENT.TOP, ALIGNMENT.CENTER, ALIGNMENT.BOTTOM];
var horizontalAlignment = [ALIGNMENT.START, ALIGNMENT.CENTER, ALIGNMENT.END];

var setArrowColor = function setArrowColor(align) {
  return "--arrow-".concat(align, "-color");
};

var setMargin = function setMargin(align) {
  return "margin-".concat(align);
};

var setArrowSize = function setArrowSize(align) {
  return "--arrow-".concat(align, "-size");
};

var hasArrowByPosition = function hasArrowByPosition(position, roundBorder) {
  return !(isOneOfNoArrow(position) || roundBorder && !isCenterArrow(position));
};

var isOneOfNoArrow = function isOneOfNoArrow(position) {
  var targetPosition = position.target.split('-');
  var contentPosition = position.content.split('-');
  var result = false;
  NO_ARROW_POSITIONS.forEach(function (_ref) {
    var content = _ref.content,
        target = _ref.target;
    var elTargetPosition = target.split('-');
    var elContentPosition = content.split('-');
    var isSameTargetParams = targetPosition[0] === elTargetPosition[0] && targetPosition[1] === elTargetPosition[1];
    var isSameContentParams = contentPosition[0] === elContentPosition[0] && contentPosition[1] === elContentPosition[1];
    if (isSameTargetParams && isSameContentParams) result = true;
  });
  return result;
};

var isCenterArrow = function isCenterArrow(position) {
  var contentPosition = position.content.split('-');
  return contentPosition[0] === ALIGNMENT.CENTER || contentPosition[1] === ALIGNMENT.CENTER;
};

var calculatePosition = function calculatePosition(alignType, arrayType, startPosition) {
  var addPx = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var result = "".concat(addPx, "px");
  if (alignType === arrayType[1]) result = "".concat(Math.round(startPosition / 2) + addPx, "px");else if (alignType === arrayType[2]) result = "".concat(startPosition + addPx, "px");
  return result;
};

var getArrowAlignment = function getArrowAlignment(arrayType, align, parentSize, size) {
  if (align === arrayType[1]) return Math.round(parentSize / 2) - size;else if (align === arrayType[2]) return parentSize - size * 2;else return 0;
};

var getArrowStyles = function getArrowStyles(position, contentDimensions) {
  var style = {};
  var targetPosition = position.target.split('-');
  var contentPosition = position.content.split('-');
  var margin = "".concat(ARROW_SIZE + ARROW_SPACE, "px");
  var isDown = targetPosition[0] === ALIGNMENT.TOP && contentPosition[0] === ALIGNMENT.BOTTOM;
  var isLeft = targetPosition[1] === ALIGNMENT.END && contentPosition[1] === ALIGNMENT.START;
  var isRight = targetPosition[1] === ALIGNMENT.START && contentPosition[1] === ALIGNMENT.END;
  var isUp = targetPosition[0] === ALIGNMENT.BOTTOM && contentPosition[0] === ALIGNMENT.TOP;
  var hasArrow = true;
  var sideToZero = null;
  var colorSide = null;
  var top = 0;
  var left = 0;

  switch (true) {
    case isDown:
      sideToZero = ARROW_SIDES.BOTTOM;
      colorSide = ARROW_SIDES.TOP;
      top = contentDimensions.height;
      left = getArrowAlignment(horizontalAlignment, contentPosition[1], contentDimensions.width, ARROW_SIZE);
      break;

    case isRight:
      sideToZero = ARROW_SIDES.RIGHT;
      colorSide = ARROW_SIDES.LEFT;
      top = getArrowAlignment(verticalAlignment, contentPosition[0], contentDimensions.height, ARROW_SIZE);
      left = contentDimensions.width;
      break;

    case isLeft:
      sideToZero = ARROW_SIDES.LEFT;
      colorSide = ARROW_SIDES.RIGHT;
      top = getArrowAlignment(verticalAlignment, contentPosition[0], contentDimensions.height, ARROW_SIZE);
      left = -ARROW_SIZE;
      break;

    case isUp:
      sideToZero = ARROW_SIDES.TOP;
      colorSide = ARROW_SIDES.BOTTOM;
      top = -ARROW_SIZE;
      left = getArrowAlignment(horizontalAlignment, contentPosition[1], contentDimensions.width, ARROW_SIZE);
      break;

    default:
      hasArrow = false;
      break;
  }

  if (hasArrow) {
    style[ARROW_ALIGN.TOP] = "".concat(top, "px");
    style[ARROW_ALIGN.LEFT] = "".concat(left, "px");
    style[setArrowColor(colorSide)] = 'var(--popover-background)';
    style[setArrowSize(sideToZero)] = 0;
    style[setMargin(sideToZero)] = margin;
  }

  return {
    hasArrow: hasArrow,
    style: style
  };
};

var getStyleByPosition = function getStyleByPosition(position, targetDimensions, contentDimensions, windowWidth, hasArrow) {
  var style = {};
  var targetPosition = position.target.split('-');
  var contentPosition = position.content.split('-');

  if (targetPosition) {
    var verticalAlign = targetPosition[0];
    var horizontalAlign = targetPosition[1];
    var targetWidth = targetDimensions.width;
    var targetHeight = targetDimensions.height;
    var addPx = 0;
    var addPxY = 0;
    var needMoveContent = verticalAlign === ALIGNMENT.TOP && contentPosition[0] === ALIGNMENT.BOTTOM;
    var needMoveContentY = horizontalAlign === ALIGNMENT.START && contentPosition[1] === ALIGNMENT.END;
    if (needMoveContent && hasArrow) addPx = -ARROW_SIZE - ARROW_SPACE;
    if (needMoveContentY && hasArrow) addPxY = -ARROW_SIZE - ARROW_SPACE;
    style.top = calculatePosition(verticalAlign, verticalAlignment, targetHeight, addPx);
    style.left = calculatePosition(horizontalAlign, horizontalAlignment, targetWidth, addPxY);
  }

  var x, y;

  if (contentPosition) {
    var _verticalAlign = contentPosition[0];
    var _horizontalAlign = contentPosition[1];
    var contentWidth = contentDimensions.width;
    var contentHeight = contentDimensions.height;
    y = calculatePosition(_verticalAlign, verticalAlignment, -contentHeight);
    x = calculatePosition(_horizontalAlign, horizontalAlignment, -contentWidth);
    style.transform = "translate3d(".concat(x, ", ").concat(y, ", 0)");
  }

  var resultX = targetDimensions.x + parseInt(style.left.replace("px", '')) + parseInt(x.replace("px", ''));
  var resultY = targetDimensions.y + parseInt(style.top.replace("px", '')) + parseInt(y.replace("px", ''));
  var isXVisible = resultX > 0 && resultX + contentDimensions.width < windowWidth;
  var isYVisible = resultY > 0;
  var isVisible = isXVisible && isYVisible;
  return {
    style: style,
    isVisible: isVisible
  };
};

var getAllStyles = function getAllStyles(position, targetDimensions, contentDimensions, windowWidth, hasArrow) {
  var arrowStyles = {
    hasArrow: false,
    style: {}
  };
  var popoverStyles = getStyleByPosition(position, targetDimensions, contentDimensions, windowWidth, hasArrow);
  if (hasArrow && popoverStyles.isVisible) arrowStyles = getArrowStyles(position, contentDimensions);
  return {
    isVisible: popoverStyles.isVisible,
    style: popoverStyles.style,
    hasArrow: arrowStyles.hasArrow,
    arrowStyle: arrowStyles.style
  };
};

var getPopoverStyle = function getPopoverStyle(positions, targetDimensions, contentDimensions, windowWidth, hideTail, roundBorder) {
  var result = {};

  for (var i = 0; i < positions.length; i++) {
    var hasArrow = !hideTail && hasArrowByPosition(positions[i], roundBorder);
    result = getAllStyles(positions[i], targetDimensions, contentDimensions, windowWidth, hasArrow);
    if (result.isVisible) break;else if (i === positions.length - 1) result = getAllStyles(positions[0], targetDimensions, contentDimensions, windowWidth, hasArrow);
  }

  return result;
};

exports.getPopoverStyle = getPopoverStyle;
//# sourceMappingURL=utils.js.map