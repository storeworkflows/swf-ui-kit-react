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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdldENpcmNsZVNpemUiLCJpY29uU2l6ZSIsImNyZWF0ZUNzc1ZhcmlhYmxlcyIsInBhbGV0dGUiLCJsaW5rIiwibGFiZWwiLCJjaXJjbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFFBQUQsRUFBYztBQUNoQyxVQUFRQSxRQUFSO0FBQ0ksU0FBSyxJQUFMO0FBQ0ksYUFBTyxNQUFQOztBQUNKLFNBQUssSUFBTDtBQUNJLGFBQU8sTUFBUDs7QUFDSixTQUFLLElBQUw7QUFDSSxhQUFPLE1BQVA7O0FBQ0osU0FBSyxJQUFMO0FBQ0ksYUFBTyxNQUFQOztBQUNKLFNBQUssSUFBTDtBQUNJLGFBQU8sTUFBUDs7QUFDSixTQUFLLEtBQUw7QUFDSSxhQUFPLE1BQVA7O0FBQ0o7QUFDSSx1QkFBVUEsUUFBUSxHQUFHLENBQXJCO0FBZFI7QUFnQkgsQ0FqQkQ7O0FBbUJPLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsT0FBRCxFQUFVRixRQUFWLEVBQXVCO0FBQUEsTUFDN0NHLElBRDZDLEdBQ3JCRCxPQURxQixDQUM3Q0MsSUFENkM7QUFBQSxNQUN2Q0MsS0FEdUMsR0FDckJGLE9BRHFCLENBQ3ZDRSxLQUR1QztBQUFBLE1BQ2hDQyxNQURnQyxHQUNyQkgsT0FEcUIsQ0FDaENHLE1BRGdDO0FBR3JELFNBQU8sdUNBQ2VBLE1BQU0sSUFBSSxTQUR6QixnQ0FFYUYsSUFBSSxJQUFJRSxNQUFSLElBQWtCLFNBRi9CLGlDQUdjRCxLQUFLLElBQUksU0FIdkIsaUNBSWNMLGFBQWEsQ0FBQ0MsUUFBRCxDQUFiLElBQTJCLE1BSnpDLE9BQVA7QUFNSCxDQVRNLEMsQ0FXUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRDaXJjbGVTaXplID0gKGljb25TaXplKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGljb25TaXplKSB7XHJcbiAgICAgICAgY2FzZSAneHMnOlxyXG4gICAgICAgICAgICByZXR1cm4gJzJyZW0nO1xyXG4gICAgICAgIGNhc2UgJ3NtJzpcclxuICAgICAgICAgICAgcmV0dXJuICcycmVtJztcclxuICAgICAgICBjYXNlICdtZCc6XHJcbiAgICAgICAgICAgIHJldHVybiAnM3JlbSc7XHJcbiAgICAgICAgY2FzZSAnbGcnOlxyXG4gICAgICAgICAgICByZXR1cm4gJzRyZW0nO1xyXG4gICAgICAgIGNhc2UgJ3hsJzpcclxuICAgICAgICAgICAgcmV0dXJuICc1cmVtJztcclxuICAgICAgICBjYXNlICd4eGwnOlxyXG4gICAgICAgICAgICByZXR1cm4gJzZyZW0nO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtpY29uU2l6ZSAqIDJ9cHhgO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQ3NzVmFyaWFibGVzID0gKHBhbGV0dGUsIGljb25TaXplKSA9PiB7XHJcbiAgICBjb25zdCB7IGxpbmssIGxhYmVsLCBjaXJjbGUgfSA9IHBhbGV0dGU7XHJcblxyXG4gICAgcmV0dXJuIGAuc3RlcHBlcntgICtcclxuICAgICAgICBgLS1jaXJjbGUtY29sb3I6JHtjaXJjbGUgfHwgJyMzOUE0NTAnfTtgICtcclxuICAgICAgICBgLS1saW5rLWNvbG9yOiR7bGluayB8fCBjaXJjbGUgfHwgJyMzOUE0NTAnfTtgICtcclxuICAgICAgICBgLS1sYWJlbC1jb2xvcjoke2xhYmVsIHx8ICcjMDAwMDAwJ307YCArXHJcbiAgICAgICAgYC0tY2lyY2xlLXNpemU6JHtnZXRDaXJjbGVTaXplKGljb25TaXplKSB8fCAnMnJlbSd9YCArXHJcbiAgICAgICAgYH1gXHJcbn1cclxuXHJcbi8vIGNvbnN0IGFhcm9uc0V4YW1wbGVQYWxldHRlID0ge1xyXG4vLyAgICAgaWNvbjoge1xyXG4vLyAgICAgICAgIGZpbmlzaGVkOiAnd2hpdGUnLFxyXG4vLyAgICAgICAgIHVuZmluaXNoZWQ6ICdibGFjaydcclxuLy8gICAgIH0sXHJcbi8vICAgICBjaXJjbGU6ICcjMDA2OUM4JyxcclxuLy8gICAgIGxpbms6ICcjMDA2OUM4JyxcclxuLy8gICAgIGxhYmVsOiAnYmxhY2snXHJcbi8vIH0iXX0=