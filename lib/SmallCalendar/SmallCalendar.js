"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _hammerjs = _interopRequireDefault(require("hammerjs"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _utils = require("./utils");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

var ArrowButton = function ArrowButton(props) {
  var isNext = props.isNext,
      _onClick = props.onClick;
  var classes = (0, _classnames["default"])({
    "calendar-arrow": true,
    "next": isNext
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: classes,
    onClick: function onClick(e) {
      return _onClick(e, isNext);
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
      icon: isNext ? "chevron-right" : "chevron-left",
      size: "sm"
    })
  });
};

var SmallCalendar = /*#__PURE__*/React.forwardRef(function (props, _ref) {
  var openedDate = props.openedDate,
      onSelected = props.onSelected;
  var calendarElem = null;
  var date = openedDate ? new Date(openedDate) : null;

  var _useState = (0, React.useState)(date),
      _useState2 = _slicedToArray(_useState, 2),
      selectedDate = _useState2[0],
      setSelectedDate = _useState2[1];

  var _useState3 = (0, React.useState)(date ? date : new Date()),
      _useState4 = _slicedToArray(_useState3, 2),
      openedDateValue = _useState4[0],
      setOpenedDateValue = _useState4[1];

  var setDate = function setDate(day, isActive, e) {
    e === null || e === void 0 ? void 0 : e.stopPropagation();
    var newSelected;
    if (isActive) newSelected = new Date(openedDateValue.getFullYear(), openedDateValue.getMonth(), day);else {
      var isNext = day > 15 ? -1 : 1;
      var updatedMonth = (0, _moment["default"])(openedDateValue).add(isNext, "month").toDate();
      newSelected = new Date(updatedMonth.getFullYear(), updatedMonth.getMonth(), day);
      setOpenedDateValue(updatedMonth);
    }
    setSelectedDate(newSelected);
    if (onSelected) onSelected({
      date: newSelected
    });
  };

  var changeMonth = function changeMonth(e, isNext) {
    e === null || e === void 0 ? void 0 : e.stopPropagation();
    var additionValue = isNext ? 1 : -1;
    var changedTo = (0, _moment["default"])(openedDateValue).add(additionValue, "month");
    setOpenedDateValue(changedTo.toDate());
  };

  (0, React.useEffect)(function () {
    if (calendarElem) {
      var mc = new Hammer(calendarElem);
      mc.on("swipeleft", function (e) {
        return changeMonth(e, true);
      });
      mc.on("swiperight", function (e) {
        return changeMonth(e, false);
      });
    }
  }, []);
  (0, React.useEffect)(function () {
    var date = openedDate ? new Date(openedDate) : null;
    setOpenedDateValue(date ? date : new Date());
    setSelectedDate(date);
  }, [openedDate]);

  var renderCalendarElement = function renderCalendarElement(day, isActive, key) {
    var dayNumber = parseInt(day);
    var dayClasses = (0, _classnames["default"])({
      "calendar-element": true,
      "day-element": true,
      "notActive": !isActive,
      "active": isActive,
      "selected": (0, _utils.isSelected)(openedDateValue, selectedDate, dayNumber, isActive),
      "now-date": (0, _utils.isNowDate)(openedDateValue, isActive, dayNumber)
    });
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: dayClasses,
      onClick: function onClick(e) {
        return setDate(dayNumber, isActive, e);
      },
      children: day
    }, key);
  };

  var renderMonth = function renderMonth() {
    var result = [];
    var openedMonth = openedDateValue.getMonth() + 1;
    var currentWeek = (0, _moment["default"])(openedDateValue);
    currentWeek.startOf("month").startOf("week");

    for (var w = 0, i = 0; w < 6; w++) {
      if (w > 0) currentWeek.add(1, 'week');
      var currentDay = currentWeek.startOf("week");

      for (var d = 0; d < 7; d++, i++) {
        if (d > 0) currentDay.add(1, "day");
        var isActive = currentDay.format('M') === "".concat(openedMonth);
        result.push(renderCalendarElement(currentDay.format('D'), isActive, i));
      }
    }

    return result;
  };

  var currentDate = (0, _moment["default"])(openedDateValue);
  var curMonthLabel = "".concat(currentDate.format('MMMM'), " ").concat(currentDate.year());
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "ui-kit__calendar-container",
      ref: function ref(el) {
        calendarElem = el;
        _ref = el;
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "calendar-header",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowButton, {
          isNext: false,
          onClick: changeMonth
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "calendar-header-label",
          children: curMonthLabel
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowButton, {
          isNext: true,
          onClick: changeMonth
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "calendar-view",
        children: [DAYS_OF_WEEK.map(function (el, id) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "calendar-element week-day",
            children: [" ", el, " "]
          }, id);
        }), renderMonth().map(function (el) {
          return el;
        })]
      })]
    })
  });
});
SmallCalendar.defaultProps = {
  openedDate: null
};
SmallCalendar.propTypes = {
  openedDate: _propTypes["default"].any,
  onSelected: _propTypes["default"].func
};
var _default = SmallCalendar;
exports["default"] = _default;