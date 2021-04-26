"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCorrectSelected = exports.getDisplayValue = exports.getItemById = void 0;

var getItemById = function getItemById(id, items) {
  return items.find(function (el) {
    return el.id === id;
  });
};

exports.getItemById = getItemById;

var getDisplayValue = function getDisplayValue() {
  var selectedItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var placeholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  switch (true) {
    case selectedItems.length === 1:
      var selectedId = getItemById(selectedItems[0], items);
      return selectedId ? selectedId.label : placeholder;

    case selectedItems.length > 1:
      return "".concat(selectedItems.length, " items selected");

    default:
      return placeholder;
  }
};

exports.getDisplayValue = getDisplayValue;

var getCorrectSelected = function getCorrectSelected(items, selectedItems) {
  if (items && selectedItems) return selectedItems.filter(function (el) {
    return getItemById(el, items);
  });
  return [];
};

exports.getCorrectSelected = getCorrectSelected;