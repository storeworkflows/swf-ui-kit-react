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
  return ".stepper{--circle-unfinished:".concat(unfinished || '#82B6A1', ";") + "--circle-hover:".concat(hover || '#abdebc', ";") + "--circle-finished:".concat(finished || '#3C6841', ";") + "--circle-current:".concat(current || '#39A450', ";") + "--circle-border:".concat(currentBorder || current || '#39A450', ";") + "--circle-border-inner:".concat(currentBorderInner || '#FFFFFF', ";") + "--link:".concat(link || '#39A450', ";") + "--label:".concat(label || '#000000') + "}";
}; // const aaronsExamplePalette = {
//     circle: {
//         unfinished: '#2AC195',
//         current: '#008A62',
//         currentBorder: '#008A62',
//         currentBorderInner: 'white',
//         finished: '#0069C8',
//         hover: '#70FACB'
//     },
//     link: '#0069C8',
//     icon: 'white',
//     label: 'black'
// }


exports.createCssVariables = createCssVariables;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL3V0aWxzLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNzc1ZhcmlhYmxlcyIsInBhbGV0dGUiLCJsaW5rIiwibGFiZWwiLCJjaXJjbGUiLCJ1bmZpbmlzaGVkIiwiY3VycmVudCIsImN1cnJlbnRCb3JkZXIiLCJjdXJyZW50Qm9yZGVySW5uZXIiLCJmaW5pc2hlZCIsImhvdmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxPQUFELEVBQWE7QUFBQSxNQUNuQ0MsSUFEbUMsR0FDWEQsT0FEVyxDQUNuQ0MsSUFEbUM7QUFBQSxNQUM3QkMsS0FENkIsR0FDWEYsT0FEVyxDQUM3QkUsS0FENkI7QUFBQSxNQUN0QkMsTUFEc0IsR0FDWEgsT0FEVyxDQUN0QkcsTUFEc0I7QUFBQSxNQUVuQ0MsVUFGbUMsR0FFeUNELE1BRnpDLENBRW5DQyxVQUZtQztBQUFBLE1BRXZCQyxPQUZ1QixHQUV5Q0YsTUFGekMsQ0FFdkJFLE9BRnVCO0FBQUEsTUFFZEMsYUFGYyxHQUV5Q0gsTUFGekMsQ0FFZEcsYUFGYztBQUFBLE1BRUNDLGtCQUZELEdBRXlDSixNQUZ6QyxDQUVDSSxrQkFGRDtBQUFBLE1BRXFCQyxRQUZyQixHQUV5Q0wsTUFGekMsQ0FFcUJLLFFBRnJCO0FBQUEsTUFFK0JDLEtBRi9CLEdBRXlDTixNQUZ6QyxDQUUrQk0sS0FGL0I7QUFJM0MsU0FBTyx1Q0FBZ0NMLFVBQVUsSUFBSSxTQUE5QyxrQ0FDZUssS0FBSyxJQUFJLFNBRHhCLHFDQUVrQkQsUUFBUSxJQUFJLFNBRjlCLG9DQUdpQkgsT0FBTyxJQUFJLFNBSDVCLG1DQUlnQkMsYUFBYSxJQUFJRCxPQUFqQixJQUE0QixTQUo1Qyx5Q0FLc0JFLGtCQUFrQixJQUFJLFNBTDVDLDBCQU1PTixJQUFJLElBQUksU0FOZiwyQkFPUUMsS0FBSyxJQUFJLFNBUGpCLE9BQVA7QUFTSCxDQWJNLEMsQ0FlUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjcmVhdGVDc3NWYXJpYWJsZXMgPSAocGFsZXR0ZSkgPT4ge1xyXG4gICAgY29uc3QgeyBsaW5rLCBsYWJlbCwgY2lyY2xlIH0gPSBwYWxldHRlO1xyXG4gICAgY29uc3QgeyB1bmZpbmlzaGVkLCBjdXJyZW50LCBjdXJyZW50Qm9yZGVyLCBjdXJyZW50Qm9yZGVySW5uZXIsIGZpbmlzaGVkLCBob3ZlciB9ID0gY2lyY2xlO1xyXG5cclxuICAgIHJldHVybiBgLnN0ZXBwZXJ7LS1jaXJjbGUtdW5maW5pc2hlZDoke3VuZmluaXNoZWQgfHwgJyM4MkI2QTEnfTtgICtcclxuICAgICAgICBgLS1jaXJjbGUtaG92ZXI6JHtob3ZlciB8fCAnI2FiZGViYyd9O2AgK1xyXG4gICAgICAgIGAtLWNpcmNsZS1maW5pc2hlZDoke2ZpbmlzaGVkIHx8ICcjM0M2ODQxJ307YCArXHJcbiAgICAgICAgYC0tY2lyY2xlLWN1cnJlbnQ6JHtjdXJyZW50IHx8ICcjMzlBNDUwJ307YCArXHJcbiAgICAgICAgYC0tY2lyY2xlLWJvcmRlcjoke2N1cnJlbnRCb3JkZXIgfHwgY3VycmVudCB8fCAnIzM5QTQ1MCd9O2AgK1xyXG4gICAgICAgIGAtLWNpcmNsZS1ib3JkZXItaW5uZXI6JHtjdXJyZW50Qm9yZGVySW5uZXIgfHwgJyNGRkZGRkYnfTtgICtcclxuICAgICAgICBgLS1saW5rOiR7bGluayB8fCAnIzM5QTQ1MCd9O2AgK1xyXG4gICAgICAgIGAtLWxhYmVsOiR7bGFiZWwgfHwgJyMwMDAwMDAnfWAgK1xyXG4gICAgICAgIGB9YFxyXG59XHJcblxyXG4vLyBjb25zdCBhYXJvbnNFeGFtcGxlUGFsZXR0ZSA9IHtcclxuLy8gICAgIGNpcmNsZToge1xyXG4vLyAgICAgICAgIHVuZmluaXNoZWQ6ICcjMkFDMTk1JyxcclxuLy8gICAgICAgICBjdXJyZW50OiAnIzAwOEE2MicsXHJcbi8vICAgICAgICAgY3VycmVudEJvcmRlcjogJyMwMDhBNjInLFxyXG4vLyAgICAgICAgIGN1cnJlbnRCb3JkZXJJbm5lcjogJ3doaXRlJyxcclxuLy8gICAgICAgICBmaW5pc2hlZDogJyMwMDY5QzgnLFxyXG4vLyAgICAgICAgIGhvdmVyOiAnIzcwRkFDQidcclxuLy8gICAgIH0sXHJcbi8vICAgICBsaW5rOiAnIzAwNjlDOCcsXHJcbi8vICAgICBpY29uOiAnd2hpdGUnLFxyXG4vLyAgICAgbGFiZWw6ICdibGFjaydcclxuLy8gfSJdfQ==