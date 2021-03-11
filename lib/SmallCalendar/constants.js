"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DAYS_OF_WEEK = exports.MAX_WEEKS = exports.CALENDAR_VIEW_MOBILE = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CALENDAR_VIEW_MOBILE = {
  CHOOSE_DAY: "CALENDAR_VIEW_MOBILE#CHOOSE_DAY",
  DATE_BUTTON: {
    CLICKED: "CALENDAR_VIEW_MOBILE#DATE_BUTTON#CLICKED",
    CURRENT: "CALENDAR_VIEW_MOBILE#DATE_BUTTON#CURRENT"
  },
  SEND_DATE_FOR_TASKS: "CALENDAR_VIEW_MOBILE#SEND_DATE_FOR_TASKS"
};
exports.CALENDAR_VIEW_MOBILE = CALENDAR_VIEW_MOBILE;
var MAX_WEEKS = 6;
exports.MAX_WEEKS = MAX_WEEKS;
var DAYS_OF_WEEK = Array(7).fill(0).map(function (_, index) {
  return (0, _moment["default"])().clone().isoWeekday(index).format('dd').slice(0, 1);
});
exports.DAYS_OF_WEEK = DAYS_OF_WEEK;