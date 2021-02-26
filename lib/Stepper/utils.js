"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCssVariables = void 0;

var getCircleSize = function getCircleSize(iconSize) {
  switch (iconSize) {
    case 'xs':
      return '2rem';

    case 'sm':
      return '2rem';

    case 'md':
      return '3rem';

    case 'lg':
      return '4rem';

    case 'xl':
      return '5rem';

    case 'xxl':
      return '6rem';

    default:
      return "".concat(iconSize * 2, "px");
  }
};

var createCssVariables = function createCssVariables(palette, iconSize) {
  var link = palette.link,
      label = palette.label,
      circle = palette.circle;
  return ".stepper{" + "--circle-color:".concat(circle || '#39A450', ";") + "--link-color:".concat(link || circle || '#39A450', ";") + "--label-color:".concat(label || '#000000', ";") + "--circle-size:".concat(getCircleSize(iconSize) || '2rem') + "}";
}; // const aaronsExamplePalette = {
//     icon: {
//         finished: 'white',
//         unfinished: 'black'
//     },
//     circle: '#0069C8',
//     link: '#0069C8',
//     label: 'black'
// }


exports.createCssVariables = createCssVariables;
//# sourceMappingURL=utils.js.map