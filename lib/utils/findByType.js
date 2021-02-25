"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.createSubComponent = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var findByType = function findByType(children, component) {
  var result = [];
  var type = [component.name];

  _react["default"].Children.forEach(children, function (child) {
    var childType = child && child.type && (child.type.name || child.type.displayName);
    if (type.includes(childType)) result.push(child);
  });

  return result[0];
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
//# sourceMappingURL=findByType.js.map