"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCssVariables = void 0;

var createCssVariables = function createCssVariables(palette) {
  var link = palette.link,
      label = palette.label,
      circle = palette.circle;
  return ".stepper{" + "--circle:".concat(circle || '#39A450', ";") + "--link:".concat(link || circle || '#39A450', ";") + "--label:".concat(label || '#000000') + "}";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL3V0aWxzLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNzc1ZhcmlhYmxlcyIsInBhbGV0dGUiLCJsaW5rIiwibGFiZWwiLCJjaXJjbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLE9BQUQsRUFBYTtBQUFBLE1BQ25DQyxJQURtQyxHQUNYRCxPQURXLENBQ25DQyxJQURtQztBQUFBLE1BQzdCQyxLQUQ2QixHQUNYRixPQURXLENBQzdCRSxLQUQ2QjtBQUFBLE1BQ3RCQyxNQURzQixHQUNYSCxPQURXLENBQ3RCRyxNQURzQjtBQUczQyxTQUFPLGlDQUNTQSxNQUFNLElBQUksU0FEbkIsMEJBRU9GLElBQUksSUFBSUUsTUFBUixJQUFrQixTQUZ6QiwyQkFHUUQsS0FBSyxJQUFJLFNBSGpCLE9BQVA7QUFLSCxDQVJNLEMsQ0FVUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY3JlYXRlQ3NzVmFyaWFibGVzID0gKHBhbGV0dGUpID0+IHtcclxuICAgIGNvbnN0IHsgbGluaywgbGFiZWwsIGNpcmNsZSB9ID0gcGFsZXR0ZTtcclxuXHJcbiAgICByZXR1cm4gYC5zdGVwcGVye2AgK1xyXG4gICAgICAgIGAtLWNpcmNsZToke2NpcmNsZSB8fCAnIzM5QTQ1MCd9O2AgK1xyXG4gICAgICAgIGAtLWxpbms6JHtsaW5rIHx8IGNpcmNsZSB8fCAnIzM5QTQ1MCd9O2AgK1xyXG4gICAgICAgIGAtLWxhYmVsOiR7bGFiZWwgfHwgJyMwMDAwMDAnfWAgK1xyXG4gICAgICAgIGB9YFxyXG59XHJcblxyXG4vLyBjb25zdCBhYXJvbnNFeGFtcGxlUGFsZXR0ZSA9IHtcclxuLy8gICAgIGljb246IHtcclxuLy8gICAgICAgICBmaW5pc2hlZDogJ3doaXRlJyxcclxuLy8gICAgICAgICB1bmZpbmlzaGVkOiAnYmxhY2snXHJcbi8vICAgICB9LFxyXG4vLyAgICAgY2lyY2xlOiAnIzAwNjlDOCcsXHJcbi8vICAgICBsaW5rOiAnIzAwNjlDOCcsXHJcbi8vICAgICBsYWJlbDogJ2JsYWNrJ1xyXG4vLyB9Il19