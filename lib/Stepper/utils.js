"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCssVariables = exports.getCircleSize = void 0;

var getCircleSize = function getCircleSize(iconSize) {
  switch (iconSize) {
    case 'xs':
      return '16px';

    case 'sm':
      return '32px';

    case 'md':
      return '48px';

    case 'lg':
      return '64px';

    case 'xl':
      return '96px';

    case 'xxl':
      return '128px';

    default:
      return "".concat(iconSize * 2, "px");
  }
};

exports.getCircleSize = getCircleSize;

var createCssVariables = function createCssVariables(palette, iconSize) {
  var link = palette.link,
      label = palette.label,
      circle = palette.circle;
  return ".stepper{" + "--circle-color:".concat(circle || '#39A450', ";") + "--link-color:".concat(link || circle || '#39A450', ";") + "--label-color:".concat(label || '#000000', ";") + "--circle-size:".concat(getCircleSize(iconSize) || '16px') + "}";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdldENpcmNsZVNpemUiLCJpY29uU2l6ZSIsImNyZWF0ZUNzc1ZhcmlhYmxlcyIsInBhbGV0dGUiLCJsaW5rIiwibGFiZWwiLCJjaXJjbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxVQUFRQSxRQUFSO0FBQ0ksU0FBSyxJQUFMO0FBQ0ksYUFBTyxNQUFQOztBQUNKLFNBQUssSUFBTDtBQUNJLGFBQU8sTUFBUDs7QUFDSixTQUFLLElBQUw7QUFDSSxhQUFPLE1BQVA7O0FBQ0osU0FBSyxJQUFMO0FBQ0ksYUFBTyxNQUFQOztBQUNKLFNBQUssSUFBTDtBQUNJLGFBQU8sTUFBUDs7QUFDSixTQUFLLEtBQUw7QUFDSSxhQUFPLE9BQVA7O0FBQ0o7QUFDSSx1QkFBVUEsUUFBUSxHQUFHLENBQXJCO0FBZFI7QUFnQkgsQ0FqQk07Ozs7QUFtQkEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxPQUFELEVBQVVGLFFBQVYsRUFBdUI7QUFBQSxNQUM3Q0csSUFENkMsR0FDckJELE9BRHFCLENBQzdDQyxJQUQ2QztBQUFBLE1BQ3ZDQyxLQUR1QyxHQUNyQkYsT0FEcUIsQ0FDdkNFLEtBRHVDO0FBQUEsTUFDaENDLE1BRGdDLEdBQ3JCSCxPQURxQixDQUNoQ0csTUFEZ0M7QUFHckQsU0FBTyx1Q0FDZUEsTUFBTSxJQUFJLFNBRHpCLGdDQUVhRixJQUFJLElBQUlFLE1BQVIsSUFBa0IsU0FGL0IsaUNBR2NELEtBQUssSUFBSSxTQUh2QixpQ0FJY0wsYUFBYSxDQUFDQyxRQUFELENBQWIsSUFBMkIsTUFKekMsT0FBUDtBQU1ILENBVE0sQyxDQVdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRDaXJjbGVTaXplID0gKGljb25TaXplKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGljb25TaXplKSB7XHJcbiAgICAgICAgY2FzZSAneHMnOlxyXG4gICAgICAgICAgICByZXR1cm4gJzE2cHgnO1xyXG4gICAgICAgIGNhc2UgJ3NtJzpcclxuICAgICAgICAgICAgcmV0dXJuICczMnB4JztcclxuICAgICAgICBjYXNlICdtZCc6XHJcbiAgICAgICAgICAgIHJldHVybiAnNDhweCc7XHJcbiAgICAgICAgY2FzZSAnbGcnOlxyXG4gICAgICAgICAgICByZXR1cm4gJzY0cHgnO1xyXG4gICAgICAgIGNhc2UgJ3hsJzpcclxuICAgICAgICAgICAgcmV0dXJuICc5NnB4JztcclxuICAgICAgICBjYXNlICd4eGwnOlxyXG4gICAgICAgICAgICByZXR1cm4gJzEyOHB4JztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gYCR7aWNvblNpemUgKiAyfXB4YDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNzc1ZhcmlhYmxlcyA9IChwYWxldHRlLCBpY29uU2l6ZSkgPT4ge1xyXG4gICAgY29uc3QgeyBsaW5rLCBsYWJlbCwgY2lyY2xlIH0gPSBwYWxldHRlO1xyXG5cclxuICAgIHJldHVybiBgLnN0ZXBwZXJ7YCArXHJcbiAgICAgICAgYC0tY2lyY2xlLWNvbG9yOiR7Y2lyY2xlIHx8ICcjMzlBNDUwJ307YCArXHJcbiAgICAgICAgYC0tbGluay1jb2xvcjoke2xpbmsgfHwgY2lyY2xlIHx8ICcjMzlBNDUwJ307YCArXHJcbiAgICAgICAgYC0tbGFiZWwtY29sb3I6JHtsYWJlbCB8fCAnIzAwMDAwMCd9O2AgK1xyXG4gICAgICAgIGAtLWNpcmNsZS1zaXplOiR7Z2V0Q2lyY2xlU2l6ZShpY29uU2l6ZSkgfHwgJzE2cHgnfWAgK1xyXG4gICAgICAgIGB9YFxyXG59XHJcblxyXG4vLyBjb25zdCBhYXJvbnNFeGFtcGxlUGFsZXR0ZSA9IHtcclxuLy8gICAgIGljb246IHtcclxuLy8gICAgICAgICBmaW5pc2hlZDogJ3doaXRlJyxcclxuLy8gICAgICAgICB1bmZpbmlzaGVkOiAnYmxhY2snXHJcbi8vICAgICB9LFxyXG4vLyAgICAgY2lyY2xlOiAnIzAwNjlDOCcsXHJcbi8vICAgICBsaW5rOiAnIzAwNjlDOCcsXHJcbi8vICAgICBsYWJlbDogJ2JsYWNrJ1xyXG4vLyB9Il19