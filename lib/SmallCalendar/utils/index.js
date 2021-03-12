"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CALENDAR_UTILS = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _constants = require("../constants");

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CALENDAR_UTILS = {
  generateMonth: function generateMonth(startCalendar, currentMonth, currentDate, chosenDay, week, days) {
    var prevDate = startCalendar.clone().subtract(1, "day");
    var month = [];

    while (month.length < 42) {
      var nextDate = prevDate.add(1, "day").clone();
      month.push({
        year: nextDate.get("year"),
        month: nextDate.get("month"),
        week: nextDate.isoWeek(),
        day: nextDate.get("date"),
        current: currentDate.isSame(nextDate),
        chosenMonth: startCalendar.endOf("week").format("MMMM"),
        chosenYear: startCalendar.endOf("week").format("YYYY"),
        inThisMonth: nextDate.isSame(currentMonth, "month"),
        weekday: nextDate.weekday() + 1,
        startOfWeek: nextDate.weekday() === 0,
        endOfWeek: nextDate.weekday() === 6,
        isChosen: (0, _moment["default"])(nextDate).isSame(chosenDay),
        isTask: false
      });

      if (!week.includes(nextDate.isoWeek())) {
        week.push(nextDate.isoWeek());
      }

      days.push({
        full: nextDate.format("dddd"),
        "short": nextDate.format("ddd")
      });
    }

    return month;
  },
  generateCalendar: function generateCalendar(_ref) {
    var chosenMonth = _ref.chosenMonth,
        direction = _ref.direction,
        chosenDay = _ref.chosenDay,
        dispatch = _ref.dispatch;
    var currentDate = (0, _moment["default"])().startOf("day");
    var calendar = [];
    var week = [];
    var days = [];
    var currentMnth = chosenMonth.clone();
    var startCalendar = currentMnth.clone();
    calendar = {
      classFlags: {
        nextIsCalled: direction === "next",
        prevIsCalled: direction === "prev"
      },
      monthList: {
        prevMonth: _this.generateMonth(startCalendar.clone().subtract(1, "month").startOf("month").startOf("week"), currentMnth.clone().subtract(1, "month"), currentDate, choosenDay, week, days),
        currentMonth: _this.generateMonth(startCalendar.clone().startOf("month").startOf("week"), currentMnth, currentDate, choosenDay, week, days),
        nextMonth: _this.generateMonth(startCalendar.clone().add(1, "month").startOf("month").startOf("week"), currentMnth.clone().add(1, "month"), currentDate, choosenDay, week, days)
      }
    };
    days.length = 7;
    week = week.splice(1);

    if (week.length > _constants.MAX_WEEKS) {
      week.splice(0, week.length - _constants.MAX_WEEKS);
    }

    return calendar;
  }
};
exports.CALENDAR_UTILS = CALENDAR_UTILS;
var _default = CALENDAR_UTILS;
exports["default"] = _default;