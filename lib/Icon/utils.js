"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSize = exports.generateSvg = void 0;

var _constants = require("./constants");

var _icons = _interopRequireDefault(require("./icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getSize = function getSize(sizeEnum, customSize) {
  if (customSize) {
    return {
      width: customSize,
      height: customSize
    };
  }

  return {
    width: _constants.SIZE[sizeEnum],
    height: _constants.SIZE[sizeEnum]
  };
};

var setSize = function setSize(size, customSize) {
  var dimensions = getSize(size, customSize);
  var style = {};
  style.width = dimensions.width;
  style.height = dimensions.height;
  return style;
};

exports.setSize = setSize;

var generateSvg = function generateSvg(props) {
  var icon = props.icon,
      color = props.color;
  var wrapper = document.createElement("span");
  wrapper.innerHTML = _icons["default"][icon];
  var svg = wrapper.children[0];
  svg.style.width = "inherit";
  svg.style.height = "inherit";
  if (color) svg.style.color = color;
  return svg.outerHTML;
};

exports.generateSvg = generateSvg;
//# sourceMappingURL=utils.js.map