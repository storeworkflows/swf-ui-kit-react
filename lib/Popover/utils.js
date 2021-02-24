"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPopoverStyle = void 0;
var verticalAlignment = ["top", "center", "bottom"];
var horizontalAlignment = ["start", "center", "end"];

var calculatePosition = function calculatePosition(alignType, arrayType, startPosition) {
  var result = "0";
  if (alignType === arrayType[1]) result = "".concat(startPosition / 2, "px");else if (alignType === arrayType[2]) result = "".concat(startPosition, "px");
  return result;
};

var getArrowStyles = function getArrowStyles(position, contentDimensions) {
  var style = {};
  var borderStyle = "var(--popover-border-width) solid rgba(0, 0, 0, 0.3)";
  var targetPosition = position.target.split('-');
  var contentPosition = position.content.split('-');
  var hasArrow = true;

  if (targetPosition[0] === "top" && contentPosition[0] === "bottom") {
    //down
    style['--popover-arrow-border-right'] = borderStyle;
    style['--popover-arrow-border-bottom'] = borderStyle;
    style['--popover-arrow-top'] = contentDimensions.height + "px";
    style['--popover-arrow-left'] = calculatePosition(contentPosition[1], horizontalAlignment, contentDimensions.width);
  } else if (targetPosition[1] === "start" && contentPosition[1] === "end") {
    //right
    style['--popover-arrow-border-right'] = borderStyle;
    style['--popover-arrow-border-top'] = borderStyle;
    style['--popover-arrow-top'] = calculatePosition(contentPosition[0], verticalAlignment, contentDimensions.height);
    style['--popover-arrow-left'] = contentDimensions.width + "px";
  } else if (targetPosition[1] === "end" && contentPosition[1] === "start") {
    //left
    style['--popover-arrow-border-left'] = borderStyle;
    style['--popover-arrow-border-bottom'] = borderStyle;
    style['--popover-arrow-top'] = calculatePosition(contentPosition[0], verticalAlignment, contentDimensions.height);
    style['--popover-arrow-left'] = 0;
  } else if (targetPosition[0] === "bottom" && contentPosition[0] === "top") {
    //up
    style['--popover-arrow-border-left'] = borderStyle;
    style['--popover-arrow-border-top'] = borderStyle;
    style['--popover-arrow-top'] = 0;
    style['--popover-arrow-left'] = calculatePosition(contentPosition[1], horizontalAlignment, contentDimensions.width);
  } else hasArrow = false;

  return {
    hasArrow: hasArrow,
    style: style
  };
};

var getStyleByPosition = function getStyleByPosition(position, targetDimensions, contentDimensions, windowWidth) {
  var style = {};
  var targetPosition = position.target;
  var contentPosition = position.content;

  if (targetPosition) {
    var verticalAlign = targetPosition.split('-')[0];
    var horizontalAlign = targetPosition.split('-')[1];
    var targetWidth = targetDimensions.width;
    var targetHeight = targetDimensions.height;
    style.top = calculatePosition(verticalAlign, verticalAlignment, targetHeight);
    style.left = calculatePosition(horizontalAlign, horizontalAlignment, targetWidth);
  }

  var x, y;

  if (contentPosition) {
    var _verticalAlign = contentPosition.split('-')[0];
    var _horizontalAlign = contentPosition.split('-')[1];
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
  console.log("visibility", isVisible);
  return {
    style: style,
    isVisible: isVisible
  };
};

var getPopoverStyle = function getPopoverStyle(positions, targetDimensions, contentDimensions, windowWidth) {
  var style = {};
  var result;
  var arrowStyles;

  for (var i = 0; i < positions.length; i++) {
    result = getStyleByPosition(positions[i], targetDimensions, contentDimensions, windowWidth);

    if (result.isVisible) {
      style = result.style;
      arrowStyles = getArrowStyles(positions[i], contentDimensions);
      break;
    } else if (i === positions.length - 1) {
      style = getStyleByPosition(positions[0], targetDimensions, contentDimensions, windowWidth).style;
      arrowStyles = getArrowStyles(positions[0], contentDimensions);
    }
  }

  return {
    style: style,
    hasArrow: arrowStyles.has,
    arrowStyle: arrowStyles.style
  };
};

exports.getPopoverStyle = getPopoverStyle;
//# sourceMappingURL=utils.js.map