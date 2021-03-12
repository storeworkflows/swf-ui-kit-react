"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DAYS_OF_WEEK = exports.MAX_WEEKS = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MAX_WEEKS = 6;
exports.MAX_WEEKS = MAX_WEEKS;
var DAYS_OF_WEEK = Array(7).fill(0).map(function (_, index) {
  return (0, _moment["default"])().clone().isoWeekday(index).format('dd').slice(0, 2);
});
exports.DAYS_OF_WEEK = DAYS_OF_WEEK;