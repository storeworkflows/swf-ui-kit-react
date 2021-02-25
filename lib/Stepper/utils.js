"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCircleSize = exports.createCssVariables = void 0;

var createCssVariables = function createCssVariables(palette) {
  var link = palette.link,
      label = palette.label,
      circle = palette.circle;
  return ".stepper-container{" + "--circle:".concat(circle || '#39A450', ";") + "--link:".concat(link || circle || '#39A450', ";") + "--label:".concat(label || '#000000') + "}";
};

exports.createCssVariables = createCssVariables;

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
}; // const aaronsExamplePalette = {
//     icon: {
//         finished: 'white',
//         unfinished: 'black'
//     },
//     circle: '#0069C8',
//     link: '#0069C8',
//     label: 'black'
// }


exports.getCircleSize = getCircleSize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL3V0aWxzLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNzc1ZhcmlhYmxlcyIsInBhbGV0dGUiLCJsaW5rIiwibGFiZWwiLCJjaXJjbGUiLCJnZXRDaXJjbGVTaXplIiwiaWNvblNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLE9BQUQsRUFBYTtBQUFBLE1BQ25DQyxJQURtQyxHQUNYRCxPQURXLENBQ25DQyxJQURtQztBQUFBLE1BQzdCQyxLQUQ2QixHQUNYRixPQURXLENBQzdCRSxLQUQ2QjtBQUFBLE1BQ3RCQyxNQURzQixHQUNYSCxPQURXLENBQ3RCRyxNQURzQjtBQUczQyxTQUFPLDJDQUNTQSxNQUFNLElBQUksU0FEbkIsMEJBRU9GLElBQUksSUFBSUUsTUFBUixJQUFrQixTQUZ6QiwyQkFHUUQsS0FBSyxJQUFJLFNBSGpCLE9BQVA7QUFLSCxDQVJNOzs7O0FBVUEsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsVUFBUUEsUUFBUjtBQUNJLFNBQUssSUFBTDtBQUNJLGFBQU8sTUFBUDs7QUFDSixTQUFLLElBQUw7QUFDSSxhQUFPLE1BQVA7O0FBQ0osU0FBSyxJQUFMO0FBQ0ksYUFBTyxNQUFQOztBQUNKLFNBQUssSUFBTDtBQUNJLGFBQU8sTUFBUDs7QUFDSixTQUFLLElBQUw7QUFDSSxhQUFPLE1BQVA7O0FBQ0osU0FBSyxLQUFMO0FBQ0ksYUFBTyxNQUFQOztBQUNKO0FBQ0ksdUJBQVVBLFFBQVEsR0FBRyxDQUFyQjtBQWRSO0FBZ0JILENBakJNLEMsQ0FtQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNyZWF0ZUNzc1ZhcmlhYmxlcyA9IChwYWxldHRlKSA9PiB7XHJcbiAgICBjb25zdCB7IGxpbmssIGxhYmVsLCBjaXJjbGUgfSA9IHBhbGV0dGU7XHJcblxyXG4gICAgcmV0dXJuIGAuc3RlcHBlci1jb250YWluZXJ7YCArXHJcbiAgICAgICAgYC0tY2lyY2xlOiR7Y2lyY2xlIHx8ICcjMzlBNDUwJ307YCArXHJcbiAgICAgICAgYC0tbGluazoke2xpbmsgfHwgY2lyY2xlIHx8ICcjMzlBNDUwJ307YCArXHJcbiAgICAgICAgYC0tbGFiZWw6JHtsYWJlbCB8fCAnIzAwMDAwMCd9YCArXHJcbiAgICAgICAgYH1gXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDaXJjbGVTaXplID0gKGljb25TaXplKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGljb25TaXplKSB7XHJcbiAgICAgICAgY2FzZSAneHMnOlxyXG4gICAgICAgICAgICByZXR1cm4gJzJyZW0nO1xyXG4gICAgICAgIGNhc2UgJ3NtJzpcclxuICAgICAgICAgICAgcmV0dXJuICcycmVtJztcclxuICAgICAgICBjYXNlICdtZCc6XHJcbiAgICAgICAgICAgIHJldHVybiAnM3JlbSc7XHJcbiAgICAgICAgY2FzZSAnbGcnOlxyXG4gICAgICAgICAgICByZXR1cm4gJzRyZW0nO1xyXG4gICAgICAgIGNhc2UgJ3hsJzpcclxuICAgICAgICAgICAgcmV0dXJuICc1cmVtJztcclxuICAgICAgICBjYXNlICd4eGwnOlxyXG4gICAgICAgICAgICByZXR1cm4gJzZyZW0nO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtpY29uU2l6ZSAqIDJ9cHhgO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBhYXJvbnNFeGFtcGxlUGFsZXR0ZSA9IHtcclxuLy8gICAgIGljb246IHtcclxuLy8gICAgICAgICBmaW5pc2hlZDogJ3doaXRlJyxcclxuLy8gICAgICAgICB1bmZpbmlzaGVkOiAnYmxhY2snXHJcbi8vICAgICB9LFxyXG4vLyAgICAgY2lyY2xlOiAnIzAwNjlDOCcsXHJcbi8vICAgICBsaW5rOiAnIzAwNjlDOCcsXHJcbi8vICAgICBsYWJlbDogJ2JsYWNrJ1xyXG4vLyB9Il19