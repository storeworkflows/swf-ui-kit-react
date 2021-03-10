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
  generateMonth: function generateMonth(startCalendar, currentMonth, currentDate, choosenDay, week, days) {
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
        choosenMonth: startCalendar.endOf("week").format("MMMM"),
        choosenYear: startCalendar.endOf("week").format("YYYY"),
        inThisMonth: nextDate.isSame(currentMonth, "month"),
        weekday: nextDate.weekday() + 1,
        startOfWeek: nextDate.weekday() === 0,
        endOfWeek: nextDate.weekday() === 6,
        isChoosen: (0, _moment["default"])(nextDate).isSame(choosenDay),
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
    var choosenMonth = _ref.choosenMonth,
        direction = _ref.direction,
        choosenDay = _ref.choosenDay,
        dispatch = _ref.dispatch;
    var currentDate = (0, _moment["default"])().startOf("day");
    var calendar = [];
    var week = [];
    var days = [];
    var currentMnth = choosenMonth.clone();
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
    } //  dispatch(mobileViewActionTypes.calendarDataSetted({ calendar, week, days }))
    //   const { monthList: { nextMonth, prevMonth } } = calendar;
    //const sysparm_query = `start>=javascript:gs.dateGenerate('${moment(prevMonth[0]).format("YYYY-MM-DD")}','end')^end<=javascript:gs.dateGenerate('${moment(nextMonth[nextMonth.length - 1]).format("YYYY-MM-DD")}','start')`;
    // dispatch(mobileViewActions.mobileViewFetchItems(sysparm_query))


    return calendar;
  }
};
exports.CALENDAR_UTILS = CALENDAR_UTILS;
var _default = CALENDAR_UTILS;
exports["default"] = _default;