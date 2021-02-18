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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL3V0aWxzLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNzc1ZhcmlhYmxlcyIsInBhbGV0dGUiLCJsaW5rIiwibGFiZWwiLCJjaXJjbGUiLCJ1bmZpbmlzaGVkIiwiY3VycmVudCIsImN1cnJlbnRCb3JkZXIiLCJjdXJyZW50Qm9yZGVySW5uZXIiLCJmaW5pc2hlZCIsImhvdmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxPQUFELEVBQWE7QUFBQSxNQUNuQ0MsSUFEbUMsR0FDWEQsT0FEVyxDQUNuQ0MsSUFEbUM7QUFBQSxNQUM3QkMsS0FENkIsR0FDWEYsT0FEVyxDQUM3QkUsS0FENkI7QUFBQSxNQUN0QkMsTUFEc0IsR0FDWEgsT0FEVyxDQUN0QkcsTUFEc0I7QUFBQSxNQUVuQ0MsVUFGbUMsR0FFeUNELE1BRnpDLENBRW5DQyxVQUZtQztBQUFBLE1BRXZCQyxPQUZ1QixHQUV5Q0YsTUFGekMsQ0FFdkJFLE9BRnVCO0FBQUEsTUFFZEMsYUFGYyxHQUV5Q0gsTUFGekMsQ0FFZEcsYUFGYztBQUFBLE1BRUNDLGtCQUZELEdBRXlDSixNQUZ6QyxDQUVDSSxrQkFGRDtBQUFBLE1BRXFCQyxRQUZyQixHQUV5Q0wsTUFGekMsQ0FFcUJLLFFBRnJCO0FBQUEsTUFFK0JDLEtBRi9CLEdBRXlDTixNQUZ6QyxDQUUrQk0sS0FGL0I7QUFJM0MsU0FBTyx1Q0FBZ0NMLFVBQVUsSUFBSSxTQUE5QyxrQ0FDZUssS0FBSyxJQUFJLFNBRHhCLHFDQUVrQkQsUUFBUSxJQUFJLFNBRjlCLG9DQUdpQkgsT0FBTyxJQUFJLFNBSDVCLG1DQUlnQkMsYUFBYSxJQUFJLFNBSmpDLHlDQUtzQkMsa0JBQWtCLElBQUksU0FMNUMsMEJBTU9OLElBQUksSUFBSSxTQU5mLDJCQU9RQyxLQUFLLElBQUksU0FQakIsT0FBUDtBQVNILENBYk0iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY3JlYXRlQ3NzVmFyaWFibGVzID0gKHBhbGV0dGUpID0+IHtcclxuICAgIGNvbnN0IHsgbGluaywgbGFiZWwsIGNpcmNsZSB9ID0gcGFsZXR0ZTtcclxuICAgIGNvbnN0IHsgdW5maW5pc2hlZCwgY3VycmVudCwgY3VycmVudEJvcmRlciwgY3VycmVudEJvcmRlcklubmVyLCBmaW5pc2hlZCwgaG92ZXIgfSA9IGNpcmNsZTtcclxuXHJcbiAgICByZXR1cm4gYC5zdGVwcGVyey0tY2lyY2xlLXVuZmluaXNoZWQ6JHt1bmZpbmlzaGVkIHx8ICcjRjlGODcxJ307YCArXHJcbiAgICAgICAgYC0tY2lyY2xlLWhvdmVyOiR7aG92ZXIgfHwgJyNGRkM3NUYnfTtgICtcclxuICAgICAgICBgLS1jaXJjbGUtZmluaXNoZWQ6JHtmaW5pc2hlZCB8fCAnI0ZGNkY5MSd9O2AgK1xyXG4gICAgICAgIGAtLWNpcmNsZS1jdXJyZW50OiR7Y3VycmVudCB8fCAnI0Q2NURCMSd9O2AgK1xyXG4gICAgICAgIGAtLWNpcmNsZS1ib3JkZXI6JHtjdXJyZW50Qm9yZGVyIHx8ICcjRDY1REIxJ307YCArXHJcbiAgICAgICAgYC0tY2lyY2xlLWJvcmRlci1pbm5lcjoke2N1cnJlbnRCb3JkZXJJbm5lciB8fCAnI0ZGRkZGRid9O2AgK1xyXG4gICAgICAgIGAtLWxpbms6JHtsaW5rIHx8ICcjRDY1REIxJ307YCArXHJcbiAgICAgICAgYC0tbGFiZWw6JHtsYWJlbCB8fCAnIzAwMDAwMCd9YCArXHJcbiAgICAgICAgYH1gXHJcbn0iXX0=