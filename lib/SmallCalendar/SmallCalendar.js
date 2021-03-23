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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TbWFsbENhbGVuZGFyL1NtYWxsQ2FsZW5kYXIuanMiXSwibmFtZXMiOlsiREFZU19PRl9XRUVLIiwiU21hbGxDYWxlbmRhciIsInByb3BzIiwiY2hhbmdlTW9udGgiLCJiaW5kIiwic2V0RGF0ZSIsIm9wZW5lZERhdGUiLCJkYXRlIiwiRGF0ZSIsInN0YXRlIiwic2VsZWN0ZWREYXRlIiwiZGF5IiwiaXNBY3RpdmUiLCJvblNlbGVjdGVkIiwibmV3U2VsZWN0ZWQiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiaXNOZXh0IiwidXBkYXRlZE1vbnRoIiwiYWRkIiwidG9EYXRlIiwic2V0U3RhdGUiLCJhZGRpdGlvblZhbHVlIiwiY2hhbmdlZFRvIiwia2V5IiwiZGF5TnVtYmVyIiwicGFyc2VJbnQiLCJpc1NlbGVjdGVkIiwic2VsZWN0ZWRNb250aCIsInNlbGVjdGVkWWVhciIsIm9wZW5lZE1vbnRoIiwib3BlbmVkWWVhciIsIm5leHRNb250aCIsInByZXZNb250aCIsIm5leHRZZWFyIiwicHJldlllYXIiLCJpc1NlbGVjdGVkRGF0ZUluT3BlbmVkTW9udGgiLCJpc1NlbGVjdGVkRGF0ZUluTmV4dE1vbnRoIiwiaXNTZWxlY3RlZERhdGVJblByZXZNb250aCIsImdldERhdGUiLCJjYWxlbmRhckVsZW0iLCJtYyIsIkhhbW1lciIsIm9uIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJyZXN1bHQiLCJjdXJyZW50V2VlayIsInN0YXJ0T2YiLCJ3IiwiY3VycmVudERheSIsImQiLCJmb3JtYXQiLCJwdXNoIiwicmVuZGVyQ2FsZW5kYXJFbGVtZW50IiwiY2xhc3NlcyIsImN1cnJlbnREYXRlIiwiY3VyTW9udGhMYWJlbCIsInllYXIiLCJlbCIsInJlbmRlckFycm93QnV0dG9uIiwibWFwIiwiaWQiLCJyZW5kZXJNb250aCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYW55Iiwi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QUUsZUFBaEI7QUFBQSxzQkFDSyxLQUFLQyxXQUFMLEdBQW1CRixHQUFuQixDQUF1QixVQUFBRixFQUFFO0FBQUEscUJBQUlBLEVBQUo7QUFBQSxhQUF6QjtBQURMLFlBakJKO0FBQUE7QUFESixRQURKO0FBeUJIOzs7O0VBNUx1QkssS0FBSyxDQUFDQyxTOztBQStMbENqRSxhQUFhLENBQUNrRSxZQUFkLEdBQTZCO0FBQ3pCN0QsRUFBQUEsVUFBVSxFQUFFO0FBRGEsQ0FBN0I7QUFJQUwsYUFBYSxDQUFDbUUsU0FBZCxHQUEwQjtBQUN0QjlELEVBQUFBLFVBQVUsRUFBRThELHNCQUFVQyxHQURBO0FBRXRCeEQsRUFBQUEsVUFBVSxFQUFFdUQsc0JBQVVFO0FBRkEsQ0FBMUI7ZUFLZXJFLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCBoYW1tZXIgZnJvbSBcImhhbW1lcmpzXCI7XHJcblxyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCJcclxuXHJcbmNvbnN0IERBWVNfT0ZfV0VFSyA9IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXTtcclxuXHJcbmNsYXNzIFNtYWxsQ2FsZW5kYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VNb250aCA9IHRoaXMuY2hhbmdlTW9udGguYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldERhdGUgPSB0aGlzLnNldERhdGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgY29uc3Qge29wZW5lZERhdGV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgZGF0ZSA9IChvcGVuZWREYXRlKSA/IG5ldyBEYXRlKG9wZW5lZERhdGUpIDogbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWREYXRlOiBkYXRlLFxyXG4gICAgICAgICAgICBvcGVuZWREYXRlOiAoZGF0ZSkgPyBkYXRlIDogbmV3IERhdGUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0ZShkYXksIGlzQWN0aXZlKXtcclxuICAgICAgICBjb25zdCB7b3BlbmVkRGF0ZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtvblNlbGVjdGVkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkO1xyXG5cclxuICAgICAgICBpZihpc0FjdGl2ZSlcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQgPSBuZXcgRGF0ZShvcGVuZWREYXRlLmdldEZ1bGxZZWFyKCksIG9wZW5lZERhdGUuZ2V0TW9udGgoKSwgZGF5KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGlzTmV4dCA9IGRheT4xNSA/IC0xIDogMTtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZWRNb250aCA9IG1vbWVudChvcGVuZWREYXRlKS5hZGQoaXNOZXh0LCBcIm1vbnRoXCIpLnRvRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQgPSBuZXcgRGF0ZSh1cGRhdGVkTW9udGguZ2V0RnVsbFllYXIoKSwgdXBkYXRlZE1vbnRoLmdldE1vbnRoKCksIGRheSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZERhdGU6IHVwZGF0ZWRNb250aH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWREYXRlOiBuZXdTZWxlY3RlZH0pO1xyXG4gICAgICAgIGlmKG9uU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIG9uU2VsZWN0ZWQoe2RhdGU6IG5ld1NlbGVjdGVkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTW9udGgoaXNOZXh0KSB7XHJcbiAgICAgICAgbGV0IGFkZGl0aW9uVmFsdWUgPSBpc05leHQgPyAxIDogLTE7XHJcbiAgICAgICAgbGV0IGNoYW5nZWRUbyA9IG1vbWVudCh0aGlzLnN0YXRlLm9wZW5lZERhdGUpLmFkZChhZGRpdGlvblZhbHVlLCBcIm1vbnRoXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWREYXRlOiBjaGFuZ2VkVG8udG9EYXRlKCl9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNhbGVuZGFyRWxlbWVudChkYXksIGlzQWN0aXZlLCBrZXkpe1xyXG4gICAgICAgIGNvbnN0IHtvcGVuZWREYXRlLCBzZWxlY3RlZERhdGV9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IGRheU51bWJlciA9IHBhcnNlSW50KGRheSlcclxuXHJcbiAgICAgICAgbGV0IGlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpZihzZWxlY3RlZERhdGUpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkTW9udGggPSBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkWWVhciA9IHNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBsZXQgb3BlbmVkTW9udGggPSBvcGVuZWREYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgICAgIGxldCBvcGVuZWRZZWFyID0gb3BlbmVkRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5leHRNb250aCA9IChvcGVuZWRNb250aCArIDEpICUgMTI7XHJcbiAgICAgICAgICAgIGxldCBwcmV2TW9udGggPSAob3BlbmVkTW9udGggLSAxKSAlIDEyO1xyXG4gICAgICAgICAgICBsZXQgbmV4dFllYXIgPSAobmV4dE1vbnRoID09PSAwKSA/IChvcGVuZWRZZWFyICsgMSkgOiBvcGVuZWRZZWFyO1xyXG4gICAgICAgICAgICBsZXQgcHJldlllYXIgPSAocHJldk1vbnRoID09PSAxMSkgPyAob3BlbmVkWWVhciAtIDEpIDogb3BlbmVkWWVhcjtcclxuXHJcbiAgICAgICAgICAgIGxldCBpc1NlbGVjdGVkRGF0ZUluT3BlbmVkTW9udGggPSBpc0FjdGl2ZSAmJiBzZWxlY3RlZE1vbnRoID09PSBvcGVuZWRNb250aCAmJiBzZWxlY3RlZFllYXIgPT09IG9wZW5lZFllYXI7XHJcbiAgICAgICAgICAgIGxldCBpc1NlbGVjdGVkRGF0ZUluTmV4dE1vbnRoID0gIWlzQWN0aXZlICYmIHNlbGVjdGVkTW9udGggPT09IG5leHRNb250aCAmJiBzZWxlY3RlZFllYXIgPT09IG5leHRZZWFyO1xyXG4gICAgICAgICAgICBsZXQgaXNTZWxlY3RlZERhdGVJblByZXZNb250aCA9ICFpc0FjdGl2ZSAmJiBzZWxlY3RlZE1vbnRoID09PSBwcmV2TW9udGggJiYgc2VsZWN0ZWRZZWFyID09PSBwcmV2WWVhcjtcclxuXHJcblxyXG4gICAgICAgICAgICBpc1NlbGVjdGVkID0gc2VsZWN0ZWREYXRlLmdldERhdGUoKSA9PT0gZGF5TnVtYmVyICYmXHJcbiAgICAgICAgICAgICAgICAoaXNTZWxlY3RlZERhdGVJbk9wZW5lZE1vbnRoXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgaXNTZWxlY3RlZERhdGVJbk5leHRNb250aFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IGlzU2VsZWN0ZWREYXRlSW5QcmV2TW9udGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjYWxlbmRhci1lbGVtZW50XCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXktZWxlbWVudFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm90QWN0aXZlXCI6ICFpc0FjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZVwiOiBpc0FjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkXCI6IGlzU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICB0aGlzLnNldERhdGUoZGF5TnVtYmVyLCBpc0FjdGl2ZSl9XHJcbiAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkYXl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgIGlmKHRoaXMuY2FsZW5kYXJFbGVtKXtcclxuICAgICAgICAgICAgbGV0IG1jID0gbmV3IEhhbW1lcih0aGlzLmNhbGVuZGFyRWxlbSk7XHJcbiAgICAgICAgICAgIG1jLm9uKFwic3dpcGVsZWZ0XCIsICgpID0+IHRoaXMuY2hhbmdlTW9udGgodHJ1ZSkpXHJcbiAgICAgICAgICAgIG1jLm9uKFwic3dpcGVyaWdodFwiLCAoKSA9PiB0aGlzLmNoYW5nZU1vbnRoKGZhbHNlKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xyXG5cclxuICAgICAgICBjb25zdCB7b3BlbmVkRGF0ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmKG9wZW5lZERhdGUgIT09IHByZXZQcm9wcy5vcGVuZWREYXRlKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRlID0gKG9wZW5lZERhdGUpID8gbmV3IERhdGUob3BlbmVkRGF0ZSkgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGU6IGRhdGUsXHJcbiAgICAgICAgICAgICAgICBvcGVuZWREYXRlOiAoZGF0ZSkgPyBkYXRlIDogbmV3IERhdGUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyTW9udGgoKXtcclxuICAgICAgICBjb25zdCB7b3BlbmVkRGF0ZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IG9wZW5lZE1vbnRoID0gb3BlbmVkRGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgICAgICBsZXQgY3VycmVudFdlZWsgPSBtb21lbnQob3BlbmVkRGF0ZSk7XHJcbiAgICAgICAgY3VycmVudFdlZWsuc3RhcnRPZihcIm1vbnRoXCIpLnN0YXJ0T2YoXCJ3ZWVrXCIpXHJcblxyXG4gICAgICAgIGZvcihsZXQgdz0wOyB3PDY7IHcrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHc+MClcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRXZWVrLmFkZCgxLCAnd2VlaycpO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudERheSA9IGN1cnJlbnRXZWVrLnN0YXJ0T2YoXCJ3ZWVrXCIpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBkPTA7IGQ8NzsgZCsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihkPjApXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudERheS5hZGQoMSwgXCJkYXlcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBjdXJyZW50RGF5LmZvcm1hdCgnTScpID09PSBgJHtvcGVuZWRNb250aH1gO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5yZW5kZXJDYWxlbmRhckVsZW1lbnQoY3VycmVudERheS5mb3JtYXQoJ0QnKSwgaXNBY3RpdmUsIGN1cnJlbnREYXkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyQXJyb3dCdXR0b24oaXNOZXh0KXtcclxuICAgICAgICBsZXQgY2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICBcImNhbGVuZGFyLWFycm93XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwibmV4dFwiOiBpc05leHRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB0aGlzLmNoYW5nZU1vbnRoKGlzTmV4dCl9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17aXNOZXh0ID8gXCJjaGV2cm9uLXJpZ2h0XCIgOiBcImNoZXZyb24tbGVmdFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9e1wic21cIn0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge29wZW5lZERhdGV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG1vbWVudChvcGVuZWREYXRlKVxyXG4gICAgICAgIGxldCBjdXJNb250aExhYmVsID0gYCR7Y3VycmVudERhdGUuZm9ybWF0KCdNTU1NJyl9ICR7Y3VycmVudERhdGUueWVhcigpfWA7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInVpLWtpdF9fY2FsZW5kYXItY29udGFpbmVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmID0ge2VsID0+IHRoaXMuY2FsZW5kYXJFbGVtID0gZWx9XHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhbGVuZGFyLWhlYWRlclwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQXJyb3dCdXR0b24oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiY2FsZW5kYXItaGVhZGVyLWxhYmVsXCJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJNb250aExhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckFycm93QnV0dG9uKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIndlZWstZGF5cy1jb250YWluZXJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtEQVlTX09GX1dFRUsubWFwKCAoZWwsIGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wiY2FsZW5kYXItZWxlbWVudCB3ZWVrLWRheVwifSBrZXk9e2lkfT4ge2VsfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FsZW5kYXItdmlld1wifSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck1vbnRoKCkubWFwKGVsID0+IGVsKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblNtYWxsQ2FsZW5kYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgb3BlbmVkRGF0ZTogbnVsbFxyXG59XHJcblxyXG5TbWFsbENhbGVuZGFyLnByb3BUeXBlcyA9IHtcclxuICAgIG9wZW5lZERhdGU6IHByb3BUeXBlcy5hbnksXHJcbiAgICBvblNlbGVjdGVkOiBwcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbWFsbENhbGVuZGFyOyJdfQ==