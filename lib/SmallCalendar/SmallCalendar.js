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

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

var SmallCalendar = /*#__PURE__*/function (_React$Component) {
  _inherits(SmallCalendar, _React$Component);

  var _super = _createSuper(SmallCalendar);

  function SmallCalendar(props) {
    var _this;

    _classCallCheck(this, SmallCalendar);

    _this = _super.call(this, props);
    _this.changeMonth = _this.changeMonth.bind(_assertThisInitialized(_this));
    _this.setDate = _this.setDate.bind(_assertThisInitialized(_this));
    var openedDate = _this.props.openedDate;
    var date = openedDate ? new Date(openedDate) : null;
    _this.state = {
      selectedDate: date,
      openedDate: date ? date : new Date()
    };
    return _this;
  }

  _createClass(SmallCalendar, [{
    key: "setDate",
    value: function setDate(day, isActive) {
      var openedDate = this.state.openedDate;
      var onSelected = this.props.onSelected;
      var newSelected;
      if (isActive) newSelected = new Date(openedDate.getFullYear(), openedDate.getMonth(), day);else {
        var isNext = day > 15 ? -1 : 1;
        var updatedMonth = (0, _moment["default"])(openedDate).add(isNext, "month").toDate();
        newSelected = new Date(updatedMonth.getFullYear(), updatedMonth.getMonth(), day);
        this.setState({
          openedDate: updatedMonth
        });
      }
      this.setState({
        selectedDate: newSelected
      });
      if (onSelected) onSelected({
        date: newSelected
      });
    }
  }, {
    key: "changeMonth",
    value: function changeMonth(isNext) {
      var additionValue = isNext ? 1 : -1;
      var changedTo = (0, _moment["default"])(this.state.openedDate).add(additionValue, "month");
      this.setState({
        openedDate: changedTo.toDate()
      });
    }
  }, {
    key: "renderCalendarElement",
    value: function renderCalendarElement(day, isActive, key) {
      var _this2 = this;

      var _this$state = this.state,
          openedDate = _this$state.openedDate,
          selectedDate = _this$state.selectedDate;
      var dayNumber = parseInt(day);
      var isSelected = false;

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
        isSelected = selectedDate.getDate() === dayNumber && (isSelectedDateInOpenedMonth || isSelectedDateInNextMonth || isSelectedDateInPrevMonth);
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames["default"])({
          "calendar-element": true,
          "day-element": true,
          "notActive": !isActive,
          "active": isActive,
          "selected": isSelected
        }),
        onClick: function onClick() {
          return _this2.setDate(dayNumber, isActive);
        },
        children: day
      }, key);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (this.calendarElem) {
        var mc = new Hammer(this.calendarElem);
        mc.on("swipeleft", function () {
          return _this3.changeMonth(true);
        });
        mc.on("swiperight", function () {
          return _this3.changeMonth(false);
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var openedDate = this.props.openedDate;

      if (openedDate !== prevProps.openedDate) {
        var date = openedDate ? new Date(openedDate) : null;
        this.setState({
          selectedDate: date,
          openedDate: date ? date : new Date()
        });
      }
    }
  }, {
    key: "renderMonth",
    value: function renderMonth() {
      var openedDate = this.state.openedDate;
      var result = [];
      var openedMonth = openedDate.getMonth() + 1;
      var currentWeek = (0, _moment["default"])(openedDate);
      currentWeek.startOf("month").startOf("week");

      for (var w = 0; w < 6; w++) {
        if (w > 0) currentWeek.add(1, 'week');
        var currentDay = currentWeek.startOf("week");

        for (var d = 0; d < 7; d++) {
          if (d > 0) currentDay.add(1, "day");
          var isActive = currentDay.format('M') === "".concat(openedMonth);
          result.push(this.renderCalendarElement(currentDay.format('D'), isActive, currentDay));
        }
      }

      return result;
    }
  }, {
    key: "renderArrowButton",
    value: function renderArrowButton(isNext) {
      var _this4 = this;

      var classes = (0, _classnames["default"])({
        "calendar-arrow": true,
        "next": isNext
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: classes,
        onClick: function onClick() {
          return _this4.changeMonth(isNext);
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
          icon: isNext ? "chevron-right" : "chevron-left",
          size: "sm"
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var openedDate = this.state.openedDate;
      var currentDate = (0, _moment["default"])(openedDate);
      var curMonthLabel = "".concat(currentDate.format('MMMM'), " ").concat(currentDate.year());
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "ui-kit__calendar-container",
          ref: function ref(el) {
            return _this5.calendarElem = el;
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "calendar-header",
            children: [this.renderArrowButton(false), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "calendar-header-label",
              children: curMonthLabel
            }), this.renderArrowButton(true)]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "week-days-container",
            children: DAYS_OF_WEEK.map(function (el, id) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "calendar-element week-day",
                children: [" ", el, " "]
              }, id);
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "calendar-view",
            children: this.renderMonth().map(function (el) {
              return el;
            })
          })]
        })
      });
    }
  }]);

  return SmallCalendar;
}(React.Component);

SmallCalendar.defaultProps = {
  openedDate: null
};
SmallCalendar.propTypes = {
  openedDate: _propTypes["default"].any,
  onSelected: _propTypes["default"].func
};
var _default = SmallCalendar;
exports["default"] = _default;