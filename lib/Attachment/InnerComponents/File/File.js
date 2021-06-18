"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../../../Icon/Icon"));

var _findByType = _interopRequireWildcard(require("../../../utils/findByType"));

var _utils = require("../../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var File = function File(props) {
  var children = props.children,
      className = props.className,
      file = props.file,
      displayValue = props.displayValue,
      icon = props.icon;

  var renderEnd = function renderEnd() {
    var end = (0, _findByType["default"])(children, "End");
    if (!end || end.length < 1) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "swf-file--end",
      children: end
    });
  };

  var fileClasses = (0, _classnames["default"])(className, "swf-file");
  var sizeStr = "".concat((file.size / 1024).toFixed(3), " Kb");
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: fileClasses,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
        className: "file-icon",
        icon: icon || (0, _utils.getIconByFileType)(file.type),
        customSize: 30
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "file-info-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "file-header",
          children: displayValue || file.name
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "file-size",
          children: sizeStr
        })]
      }), renderEnd()]
    })
  });
};

File.End = (0, _findByType.createSubComponent)("End");
File.defaultProps = {
  className: ""
};
File.propTypes = {
  file: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    size: _propTypes["default"].number,
    type: _propTypes["default"].string
  }),
  displayValue: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
};
var _default = File;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9BdHRhY2htZW50L0lubmVyQ29tcG9uZW50cy9GaWxlL0ZpbGUuanMiXSwibmFtZXMiOlsiRmlsZSIsInByb3BzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJmaWxlIiwiZGlzcGxheVZhbHVlIiwiaWNvbiIsInJlbmRlckVuZCIsImVuZCIsImxlbmd0aCIsImZpbGVDbGFzc2VzIiwic2l6ZVN0ciIsInNpemUiLCJ0b0ZpeGVkIiwidHlwZSIsIm5hbWUiLCJFbmQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsIm51bWJlciIsIm9uZU9mVHlwZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNaQyxRQURZLEdBQ3NDRCxLQUR0QyxDQUNaQyxRQURZO0FBQUEsTUFDRkMsU0FERSxHQUNzQ0YsS0FEdEMsQ0FDRkUsU0FERTtBQUFBLE1BQ1NDLElBRFQsR0FDc0NILEtBRHRDLENBQ1NHLElBRFQ7QUFBQSxNQUNlQyxZQURmLEdBQ3NDSixLQUR0QyxDQUNlSSxZQURmO0FBQUEsTUFDNkJDLElBRDdCLEdBQ3NDTCxLQUR0QyxDQUM2QkssSUFEN0I7O0FBR3BCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEIsUUFBTUMsR0FBRyxHQUFHLDRCQUFXTixRQUFYLEVBQXFCLEtBQXJCLENBQVo7QUFFQSxRQUFJLENBQUNNLEdBQUQsSUFBUUEsR0FBRyxDQUFDQyxNQUFKLEdBQWEsQ0FBekIsRUFBNEIsT0FBTyxJQUFQO0FBQzVCLHdCQUFPO0FBQUssTUFBQSxTQUFTLEVBQUUsZUFBaEI7QUFBQSxnQkFBa0NEO0FBQWxDLE1BQVA7QUFDSCxHQUxEOztBQU9BLE1BQU1FLFdBQVcsR0FBRyw0QkFDaEJQLFNBRGdCLEVBRWhCLFVBRmdCLENBQXBCO0FBS0EsTUFBSVEsT0FBTyxhQUFNLENBQUNQLElBQUksQ0FBQ1EsSUFBTCxHQUFZLElBQWIsRUFBbUJDLE9BQW5CLENBQTJCLENBQTNCLENBQU4sUUFBWDtBQUVBLHNCQUFPO0FBQUEsMkJBQ0g7QUFBSyxNQUFBLFNBQVMsRUFBRUgsV0FBaEI7QUFBQSw4QkFDSSxxQkFBQyxnQkFBRDtBQUNJLFFBQUEsU0FBUyxFQUFFLFdBRGY7QUFFSSxRQUFBLElBQUksRUFBRUosSUFBSSxJQUFJLDhCQUFrQkYsSUFBSSxDQUFDVSxJQUF2QixDQUZsQjtBQUdJLFFBQUEsVUFBVSxFQUFFO0FBSGhCLFFBREosZUFNSTtBQUFLLFFBQUEsU0FBUyxFQUFFLHFCQUFoQjtBQUFBLGdDQUNJO0FBQUssVUFBQSxTQUFTLEVBQUUsYUFBaEI7QUFBQSxvQkFBZ0NULFlBQVksSUFBSUQsSUFBSSxDQUFDVztBQUFyRCxVQURKLGVBRUk7QUFBSyxVQUFBLFNBQVMsRUFBRSxXQUFoQjtBQUFBLG9CQUE4Qko7QUFBOUIsVUFGSjtBQUFBLFFBTkosRUFVS0osU0FBUyxFQVZkO0FBQUE7QUFERyxJQUFQO0FBY0gsQ0EvQkQ7O0FBa0NBUCxJQUFJLENBQUNnQixHQUFMLEdBQVcsb0NBQW1CLEtBQW5CLENBQVg7QUFFQWhCLElBQUksQ0FBQ2lCLFlBQUwsR0FBb0I7QUFDaEJkLEVBQUFBLFNBQVMsRUFBRTtBQURLLENBQXBCO0FBSUFILElBQUksQ0FBQ2tCLFNBQUwsR0FBaUI7QUFDYmQsRUFBQUEsSUFBSSxFQUFFYyxzQkFBVUMsS0FBVixDQUFnQjtBQUNsQkosSUFBQUEsSUFBSSxFQUFFRyxzQkFBVUUsTUFERTtBQUVsQlIsSUFBQUEsSUFBSSxFQUFFTSxzQkFBVUcsTUFGRTtBQUdsQlAsSUFBQUEsSUFBSSxFQUFFSSxzQkFBVUU7QUFIRSxHQUFoQixDQURPO0FBTWJmLEVBQUFBLFlBQVksRUFBRWEsc0JBQVVFLE1BTlg7QUFPYmQsRUFBQUEsSUFBSSxFQUFFWSxzQkFBVUUsTUFQSDtBQVFiakIsRUFBQUEsU0FBUyxFQUFFZSxzQkFBVUksU0FBVixDQUFvQixDQUFDSixzQkFBVUUsTUFBWCxFQUFtQkYsc0JBQVVLLE1BQTdCLENBQXBCO0FBUkUsQ0FBakI7ZUFZZXZCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCBmaW5kQnlUeXBlLCB7Y3JlYXRlU3ViQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZmluZEJ5VHlwZVwiO1xyXG5pbXBvcnQge2dldEljb25CeUZpbGVUeXBlfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuXHJcbmNvbnN0IEZpbGUgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgZmlsZSwgZGlzcGxheVZhbHVlLCBpY29uIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCByZW5kZXJFbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZW5kID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgXCJFbmRcIik7XHJcblxyXG4gICAgICAgIGlmICghZW5kIHx8IGVuZC5sZW5ndGggPCAxKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wic3dmLWZpbGUtLWVuZFwifT57ZW5kfTwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbGVDbGFzc2VzID0gY2xhc3NuYW1lcyhcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgXCJzd2YtZmlsZVwiXHJcbiAgICApXHJcblxyXG4gICAgbGV0IHNpemVTdHIgPSBgJHsoZmlsZS5zaXplIC8gMTAyNCkudG9GaXhlZCgzKX0gS2JgXHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ZpbGVDbGFzc2VzfT5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmaWxlLWljb25cIn1cclxuICAgICAgICAgICAgICAgIGljb249e2ljb24gfHwgZ2V0SWNvbkJ5RmlsZVR5cGUoZmlsZS50eXBlKX1cclxuICAgICAgICAgICAgICAgIGN1c3RvbVNpemU9ezMwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJmaWxlLWluZm8tY29udGFpbmVyXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZmlsZS1oZWFkZXJcIn0+e2Rpc3BsYXlWYWx1ZSB8fCBmaWxlLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJmaWxlLXNpemVcIn0+e3NpemVTdHJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7cmVuZGVyRW5kKCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxufVxyXG47XHJcblxyXG5GaWxlLkVuZCA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkVuZFwiKTtcclxuXHJcbkZpbGUuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcIlwiXHJcbn1cclxuXHJcbkZpbGUucHJvcFR5cGVzID0ge1xyXG4gICAgZmlsZTogcHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBuYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHNpemU6IHByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgdHlwZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLFxyXG4gICAgZGlzcGxheVZhbHVlOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaWNvbjogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLnN0cmluZywgcHJvcFR5cGVzLm9iamVjdF0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxlIl19