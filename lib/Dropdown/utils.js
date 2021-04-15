"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCorrectSelected = exports.getDisplayValue = exports.getItemById = void 0;

var getItemById = function getItemById(id, items) {
  var result = null;
  items.map(function (el) {
    if (el.id === id) result = el;
  });
  return result;
};

exports.getItemById = getItemById;

var getDisplayValue = function getDisplayValue(selectedItems, items, placeholder) {
  switch (true) {
    case (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) === 1:
      return getItemById(selectedItems[0], items).label;

    case (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 1:
      return "".concat(selectedItems.length, " items selected");

    case placeholder !== undefined:
      return placeholder;

    default:
      return "";
  }
};

exports.getDisplayValue = getDisplayValue;

var getCorrectSelected = function getCorrectSelected(items, selectedItems) {
  var result = [];

  if (items && selectedItems) {
    selectedItems.map(function (el) {
      var findEl = getItemById(el, items);
      if (findEl !== null) result.push(el);
    });
  }

  return result;
};

exports.getCorrectSelected = getCorrectSelected;