"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCssVariables = void 0;

var createCssVariables = function createCssVariables(palette) {
  var link = palette.link,
      label = palette.label,
      circle = palette.circle;
  return ".stepper-container{" + "--circle:".concat(circle || '#39A450', ";") + "--link:".concat(link || circle || '#39A450', ";") + "--label:".concat(label || '#000000') + "}";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL3V0aWxzLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNzc1ZhcmlhYmxlcyIsInBhbGV0dGUiLCJsaW5rIiwibGFiZWwiLCJjaXJjbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLE9BQUQsRUFBYTtBQUFBLE1BQ25DQyxJQURtQyxHQUNYRCxPQURXLENBQ25DQyxJQURtQztBQUFBLE1BQzdCQyxLQUQ2QixHQUNYRixPQURXLENBQzdCRSxLQUQ2QjtBQUFBLE1BQ3RCQyxNQURzQixHQUNYSCxPQURXLENBQ3RCRyxNQURzQjtBQUczQyxTQUFPLDJDQUNTQSxNQUFNLElBQUksU0FEbkIsMEJBRU9GLElBQUksSUFBSUUsTUFBUixJQUFrQixTQUZ6QiwyQkFHUUQsS0FBSyxJQUFJLFNBSGpCLE9BQVA7QUFLSCxDQVJNLEMsQ0FVUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY3JlYXRlQ3NzVmFyaWFibGVzID0gKHBhbGV0dGUpID0+IHtcclxuICAgIGNvbnN0IHsgbGluaywgbGFiZWwsIGNpcmNsZSB9ID0gcGFsZXR0ZTtcclxuXHJcbiAgICByZXR1cm4gYC5zdGVwcGVyLWNvbnRhaW5lcntgICtcclxuICAgICAgICBgLS1jaXJjbGU6JHtjaXJjbGUgfHwgJyMzOUE0NTAnfTtgICtcclxuICAgICAgICBgLS1saW5rOiR7bGluayB8fCBjaXJjbGUgfHwgJyMzOUE0NTAnfTtgICtcclxuICAgICAgICBgLS1sYWJlbDoke2xhYmVsIHx8ICcjMDAwMDAwJ31gICtcclxuICAgICAgICBgfWBcclxufVxyXG5cclxuLy8gY29uc3QgYWFyb25zRXhhbXBsZVBhbGV0dGUgPSB7XHJcbi8vICAgICBpY29uOiB7XHJcbi8vICAgICAgICAgZmluaXNoZWQ6ICd3aGl0ZScsXHJcbi8vICAgICAgICAgdW5maW5pc2hlZDogJ2JsYWNrJ1xyXG4vLyAgICAgfSxcclxuLy8gICAgIGNpcmNsZTogJyMwMDY5QzgnLFxyXG4vLyAgICAgbGluazogJyMwMDY5QzgnLFxyXG4vLyAgICAgbGFiZWw6ICdibGFjaydcclxuLy8gfSJdfQ==