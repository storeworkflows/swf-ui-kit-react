"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNowDate = exports.isSelected = void 0;

var isSelected = function isSelected(openedDate, selectedDate, dayNumber, isActive) {
  if (selectedDate) {
    var selectedMonth = selectedDate.getMonth();
    var selectedYear = selectedDate.getFullYear();
    var openedMonth = openedDate.getMonth();
    var openedYear = openedDate.getFullYear();
    var nextMonth = (openedMonth + 1) % 12;
    var prevMonth = (openedMonth - 1) % 12;
    var nextYear = nextMonth === 0 ? openedYear + 1 : openedYear;
    var prevYear = prevMonth === 11 ? openedYear - 1 : openedYear;
    var isSelectedDateInOpenedMonth = isActive && selectedMonth === openedMonth && selectedYear === openedYear;
    var isSelectedDateInNextMonth = !isActive && selectedMonth === nextMonth && selectedYear === nextYear;
    var isSelectedDateInPrevMonth = !isActive && selectedMonth === prevMonth && selectedYear === prevYear;
    return selectedDate.getDate() === dayNumber && (isSelectedDateInOpenedMonth || isSelectedDateInNextMonth || isSelectedDateInPrevMonth);
  }

  return false;
};

exports.isSelected = isSelected;

var isNowDate = function isNowDate(openedDate, isActive, dayNumber) {
  var selectedDate = new Date();
  return isSelected(openedDate, selectedDate, dayNumber, isActive);
};

exports.isNowDate = isNowDate;