"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var findByType = function findByType(children, component) {
  var result = [];
  var type = [component.name];

  _react["default"].Children.forEach(children, function (child) {
    var childType = child && child.type && child.type.name;
    if (type.includes(childType)) result.push(child);
  });

  return result[0];
};

var _default = findByType;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9maW5kQnlUeXBlLmpzIl0sIm5hbWVzIjpbImZpbmRCeVR5cGUiLCJjaGlsZHJlbiIsImNvbXBvbmVudCIsInJlc3VsdCIsInR5cGUiLCJuYW1lIiwiUmVhY3QiLCJDaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsImNoaWxkVHlwZSIsImluY2x1ZGVzIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsUUFBRCxFQUFXQyxTQUFYLEVBQXlCO0FBQ3pDLE1BQU1DLE1BQU0sR0FBRyxFQUFmO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLENBQUNGLFNBQVMsQ0FBQ0csSUFBWCxDQUFiOztBQUVBQyxvQkFBTUMsUUFBTixDQUFlQyxPQUFmLENBQXVCUCxRQUF2QixFQUFpQyxVQUFBUSxLQUFLLEVBQUk7QUFDdEMsUUFBTUMsU0FBUyxHQUFHRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0wsSUFBZixJQUF3QkssS0FBSyxDQUFDTCxJQUFOLENBQVdDLElBQXJEO0FBQ0EsUUFBSUQsSUFBSSxDQUFDTyxRQUFMLENBQWNELFNBQWQsQ0FBSixFQUE4QlAsTUFBTSxDQUFDUyxJQUFQLENBQVlILEtBQVo7QUFDakMsR0FIRDs7QUFLQyxTQUFPTixNQUFNLENBQUMsQ0FBRCxDQUFiO0FBQ0gsQ0FWRDs7ZUFZZUgsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgZmluZEJ5VHlwZSA9IChjaGlsZHJlbiwgY29tcG9uZW50KSA9PiB7XG4gICBjb25zdCByZXN1bHQgPSBbXTtcbiAgIGNvbnN0IHR5cGUgPSBbY29tcG9uZW50Lm5hbWVdO1xuXG4gICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICAgY29uc3QgY2hpbGRUeXBlID0gY2hpbGQgJiYgY2hpbGQudHlwZSAmJiAoY2hpbGQudHlwZS5uYW1lKTtcbiAgICAgICBpZiAodHlwZS5pbmNsdWRlcyhjaGlsZFR5cGUpKSByZXN1bHQucHVzaChjaGlsZCk7XG4gICB9KVxuXG4gICAgcmV0dXJuIHJlc3VsdFswXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmluZEJ5VHlwZSJdfQ==