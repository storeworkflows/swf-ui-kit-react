"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCssVariables = void 0;

var createCssVariables = function createCssVariables(palette) {
  var link = palette.link,
      label = palette.label,
      circle = palette.circle;
  var unfinished = circle.unfinished,
      current = circle.current,
      currentBorder = circle.currentBorder,
      currentBorderInner = circle.currentBorderInner,
      finished = circle.finished,
      hover = circle.hover;
  return ".stepper{--circle-unfinished:".concat(unfinished || '#F9F871', ";") + "--circle-hover:".concat(hover || '#FFC75F', ";") + "--circle-finished:".concat(finished || '#FF6F91', ";") + "--circle-current:".concat(current || '#D65DB1', ";") + "--circle-border:".concat(currentBorder || '#D65DB1', ";") + "--circle-border-inner:".concat(currentBorderInner || '#FFFFFF', ";") + "--link:".concat(link || '#D65DB1', ";") + "--label:".concat(label || '#000000') + "}";
};

exports.createCssVariables = createCssVariables;
//# sourceMappingURL=utils.js.map