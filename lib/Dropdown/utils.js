"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemById = void 0;

var getItemById = function getItemById(id, items) {
  var result = null;
  items.map(function (el) {
    if (el.id === id) result = el;
  });
  return result;
};

exports.getItemById = getItemById;