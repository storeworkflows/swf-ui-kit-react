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
//# sourceMappingURL=findByType.js.map