"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.createSubComponent = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var findByType = function findByType(children, type) {
  return _react["default"].Children.map(children, function (child) {
    var _child$type;

    return (child === null || child === void 0 ? void 0 : (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.displayName) === type ? child : null;
  });
};

var createSubComponent = function createSubComponent(name) {
  var subComponent = function subComponent(_ref) {
    var children = _ref.children;
    return children;
  };

  Object.defineProperty(subComponent, "displayName", {
    value: name,
    writable: false
  });
  return subComponent;
};

exports.createSubComponent = createSubComponent;
var _default = findByType;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9maW5kQnlUeXBlLmpzIl0sIm5hbWVzIjpbImZpbmRCeVR5cGUiLCJjaGlsZHJlbiIsInR5cGUiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJkaXNwbGF5TmFtZSIsImNyZWF0ZVN1YkNvbXBvbmVudCIsIm5hbWUiLCJzdWJDb21wb25lbnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwid3JpdGFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFFBQUQsRUFBV0MsSUFBWCxFQUFvQjtBQUNuQyxTQUFPQyxrQkFBTUMsUUFBTixDQUFlQyxHQUFmLENBQW1CSixRQUFuQixFQUE2QixVQUFBSyxLQUFLLEVBQUk7QUFBQTs7QUFDekMsV0FBTyxDQUFBQSxLQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLDJCQUFBQSxLQUFLLENBQUVKLElBQVAsNERBQWFLLFdBQWIsTUFBNkJMLElBQTdCLEdBQW9DSSxLQUFwQyxHQUE0QyxJQUFuRDtBQUNILEdBRk0sQ0FBUDtBQUdILENBSkQ7O0FBTU8sSUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFELEVBQVU7QUFDeEMsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxRQUFFVCxRQUFGLFFBQUVBLFFBQUY7QUFBQSxXQUFnQkEsUUFBaEI7QUFBQSxHQUFyQjs7QUFFQVUsRUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCRixZQUF0QixFQUFvQyxhQUFwQyxFQUFtRDtBQUFDRyxJQUFBQSxLQUFLLEVBQUVKLElBQVI7QUFBY0ssSUFBQUEsUUFBUSxFQUFFO0FBQXhCLEdBQW5EO0FBQ0EsU0FBT0osWUFBUDtBQUNILENBTE07OztlQU9RVixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgZmluZEJ5VHlwZSA9IChjaGlsZHJlbiwgdHlwZSkgPT4ge1xyXG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4ge1xyXG4gICAgICAgIHJldHVybiBjaGlsZD8udHlwZT8uZGlzcGxheU5hbWUgPT09IHR5cGUgPyBjaGlsZCA6IG51bGxcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlU3ViQ29tcG9uZW50ID0gKG5hbWUpID0+IHtcclxuICAgIGNvbnN0IHN1YkNvbXBvbmVudCA9ICh7Y2hpbGRyZW59KSA9PiBjaGlsZHJlbjtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ29tcG9uZW50LCBcImRpc3BsYXlOYW1lXCIsIHt2YWx1ZTogbmFtZSwgd3JpdGFibGU6IGZhbHNlfSk7XHJcbiAgICByZXR1cm4gc3ViQ29tcG9uZW50XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpbmRCeVR5cGUiXX0=