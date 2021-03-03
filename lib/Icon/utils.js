"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSize = void 0;

var _constants = require("./constants");

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

exports.getSize = getSize;
//# sourceMappingURL=utils.js.map