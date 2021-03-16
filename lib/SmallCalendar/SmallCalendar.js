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

var _styles = _interopRequireDefault(require("./styles.scss"));

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
    console.log(date);
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
    value: function renderCalendarElement(day, isActive) {
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
      });
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
          result.push(this.renderCalendarElement(currentDay.format('D'), isActive));
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
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
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
            children: DAYS_OF_WEEK.map(function (el) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "calendar-element week-day",
                children: [" ", el, " "]
              });
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "calendar-view",
            children: this.renderMonth().map(function (el) {
              return el;
            })
          })]
        })]
      });
    }
  }]);

  return SmallCalendar;
}(React.Component);

SmallCalendar.defaultProps = {
  openedDate: null
};
SmallCalendar.propTypes = {
  openedDate: _propTypes["default"].number,
  onSelected: _propTypes["default"].func
};
var _default = SmallCalendar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TbWFsbENhbGVuZGFyL1NtYWxsQ2FsZW5kYXIuanMiXSwibmFtZXMiOlsiREFZU19PRl9XRUVLIiwiU21hbGxDYWxlbmRhciIsInByb3BzIiwiY2hhbmdlTW9udGgiLCJiaW5kIiwic2V0RGF0ZSIsImRlZmF1bHREYXRlIiwic3RhdGUiLCJzZWxlY3RlZERhdGUiLCJEYXRlIiwib3BlbmVkRGF0ZSIsImRheSIsImlzQWN0aXZlIiwib25TZWxlY3RlZCIsIm5ld1NlbGVjdGVkIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImlzTmV4dCIsInVwZGF0ZWRNb250aCIsImFkZCIsInRvRGF0ZSIsInNldFN0YXRlIiwiZGF0ZSIsImFkZGl0aW9uVmFsdWUiLCJjaGFuZ2VkVG8iLCJkYXlOdW1iZXIiLCJwYXJzZUludCIsInNlbGVjdGVkTW9udGgiLCJzZWxlY3RlZFllYXIiLCJvcGVuZWRNb250aCIsIm9wZW5lZFllYXIiLCJuZXh0TW9udGgiLCJwcmV2TW9udGgiLCJuZXh0WWVhciIsInByZXZZZWFyIiwiaXNTZWxlY3RlZERhdGVJbk9wZW5lZE1vbnRoIiwiaXNTZWxlY3RlZERhdGVJbk5leHRNb250aCIsImlzU2VsZWN0ZWREYXRlSW5QcmV2TW9udGgiLCJpc1NlbGVjdGVkIiwiZ2V0RGF0ZSIsImNhbGVuZGFyRWxlbSIsIm1jIiwiSGFtbWVyIiwib24iLCJyZXN1bHQiLCJjdXJyZW50V2VlayIsInN0YXJ0T2YiLCJ3IiwiY3VycmVudERheSIsImQiLCJmb3JtYXQiLCJwdXNoIiwicmVuZGVyQ2FsZW5kYXJFbGVtZW50IiwiY3VycmVudERhdGUiLCJjdXJNb250aExhYmVsIiwieWVhciIsInN0eWxlcyIsImVsIiwicmVuZGVyQXJyb3dCdXR0b24iLCJtYXAiLCJyZW5kZXJNb250aCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwibm93IiwicHJvcFR5cGVzIiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7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aEI7QUFBQSx1QkFDSyxLQUFLQyxpQkFBTCxDQUF1QixLQUF2QixDQURMLGVBRUk7QUFBTSxjQUFBLFNBQVMsRUFBRSx1QkFBakI7QUFBQSx3QkFDS0o7QUFETCxjQUZKLEVBS0ssS0FBS0ksaUJBQUwsQ0FBdUIsSUFBdkIsQ0FMTDtBQUFBLFlBTEosZUFZSTtBQUFLLFlBQUEsU0FBUyxFQUFFLHFCQUFoQjtBQUFBLHNCQUNLMUQsWUFBWSxDQUFDMkQsR0FBYixDQUFrQixVQUFBRixFQUFFLEVBQUk7QUFDckIsa0NBQU87QUFBSyxnQkFBQSxTQUFTLEVBQUUsMkJBQWhCO0FBQUEsZ0NBQStDQSxFQUEvQztBQUFBLGdCQUFQO0FBQ0gsYUFGQTtBQURMLFlBWkosZUFpQkk7QUFBSyxZQUFBLFNBQVMsRUFBRSxlQUFoQjtBQUFBLHNCQUNLLEtBQUtHLFdBQUwsR0FBbUJELEdBQW5CLENBQXVCLFVBQUFGLEVBQUU7QUFBQSxxQkFBSUEsRUFBSjtBQUFBLGFBQXpCO0FBREwsWUFqQko7QUFBQSxVQUhKO0FBQUEsUUFESjtBQTJCSDs7OztFQTNLdUJJLEtBQUssQ0FBQ0MsUzs7QUE4S2xDN0QsYUFBYSxDQUFDOEQsWUFBZCxHQUE2QjtBQUN6QnpELEVBQUFBLFdBQVcsRUFBRUcsSUFBSSxDQUFDdUQsR0FBTDtBQURZLENBQTdCO0FBSUEvRCxhQUFhLENBQUNnRSxTQUFkLEdBQTBCO0FBQ3RCM0QsRUFBQUEsV0FBVyxFQUFFMkQsc0JBQVVDLE1BREQ7QUFFdEJyRCxFQUFBQSxVQUFVLEVBQUVvRCxzQkFBVUU7QUFGQSxDQUExQjtlQU9lbEUsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuaW1wb3J0IGhhbW1lciBmcm9tIFwiaGFtbWVyanNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIlxyXG5cclxuY29uc3QgREFZU19PRl9XRUVLID0gWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddO1xyXG5cclxuY2xhc3MgU21hbGxDYWxlbmRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmNoYW5nZU1vbnRoID0gdGhpcy5jaGFuZ2VNb250aC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0ZSA9IHRoaXMuc2V0RGF0ZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICBjb25zdCB7ZGVmYXVsdERhdGV9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWREYXRlOiBuZXcgRGF0ZShkZWZhdWx0RGF0ZSksXHJcbiAgICAgICAgICAgIG9wZW5lZERhdGU6IG5ldyBEYXRlKGRlZmF1bHREYXRlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0ZShkYXksIGlzQWN0aXZlKXtcclxuICAgICAgICBjb25zdCB7b3BlbmVkRGF0ZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtvblNlbGVjdGVkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IG5ld1NlbGVjdGVkO1xyXG5cclxuICAgICAgICBpZihpc0FjdGl2ZSlcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQgPSBuZXcgRGF0ZShvcGVuZWREYXRlLmdldEZ1bGxZZWFyKCksIG9wZW5lZERhdGUuZ2V0TW9udGgoKSwgZGF5KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGlzTmV4dCA9IGRheT4xNSA/IC0xIDogMTtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZWRNb250aCA9IG1vbWVudChvcGVuZWREYXRlKS5hZGQoaXNOZXh0LCBcIm1vbnRoXCIpLnRvRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQgPSBuZXcgRGF0ZSh1cGRhdGVkTW9udGguZ2V0RnVsbFllYXIoKSwgdXBkYXRlZE1vbnRoLmdldE1vbnRoKCksIGRheSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZERhdGU6IHVwZGF0ZWRNb250aH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWREYXRlOiBuZXdTZWxlY3RlZH0pO1xyXG4gICAgICAgIGlmKG9uU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIG9uU2VsZWN0ZWQoe2RhdGU6IG5ld1NlbGVjdGVkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTW9udGgoaXNOZXh0KSB7XHJcbiAgICAgICAgbGV0IGFkZGl0aW9uVmFsdWUgPSBpc05leHQgPyAxIDogLTE7XHJcbiAgICAgICAgbGV0IGNoYW5nZWRUbyA9IG1vbWVudCh0aGlzLnN0YXRlLm9wZW5lZERhdGUpLmFkZChhZGRpdGlvblZhbHVlLCBcIm1vbnRoXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWREYXRlOiBjaGFuZ2VkVG8udG9EYXRlKCl9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNhbGVuZGFyRWxlbWVudChkYXksIGlzQWN0aXZlKXtcclxuICAgICAgICBjb25zdCB7b3BlbmVkRGF0ZSwgc2VsZWN0ZWREYXRlfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGxldCBkYXlOdW1iZXIgPSBwYXJzZUludChkYXkpXHJcblxyXG4gICAgICAgIGxldCBzZWxlY3RlZE1vbnRoID0gc2VsZWN0ZWREYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkWWVhciA9IHNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGxldCBvcGVuZWRNb250aCA9ICBvcGVuZWREYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgbGV0IG9wZW5lZFllYXIgPSBvcGVuZWREYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIGxldCBuZXh0TW9udGggPSAob3BlbmVkTW9udGggKyAxKSAlIDEyO1xyXG4gICAgICAgIGxldCBwcmV2TW9udGggPSAob3BlbmVkTW9udGggLSAxKSAlIDEyO1xyXG4gICAgICAgIGxldCBuZXh0WWVhciA9IChuZXh0TW9udGggPT09IDApID8gKG9wZW5lZFllYXIgKyAxKSA6IG9wZW5lZFllYXI7XHJcbiAgICAgICAgbGV0IHByZXZZZWFyID0gKHByZXZNb250aCA9PT0gMTEpID8gKG9wZW5lZFllYXIgLSAxKSA6IG9wZW5lZFllYXI7XHJcblxyXG4gICAgICAgIGxldCBpc1NlbGVjdGVkRGF0ZUluT3BlbmVkTW9udGggPSBpc0FjdGl2ZSAmJiBzZWxlY3RlZE1vbnRoID09PSBvcGVuZWRNb250aCAmJiBzZWxlY3RlZFllYXIgPT09IG9wZW5lZFllYXIgO1xyXG4gICAgICAgIGxldCBpc1NlbGVjdGVkRGF0ZUluTmV4dE1vbnRoID0gICFpc0FjdGl2ZSAmJiBzZWxlY3RlZE1vbnRoID09PSBuZXh0TW9udGggJiYgc2VsZWN0ZWRZZWFyID09PSBuZXh0WWVhcjtcclxuICAgICAgICBsZXQgaXNTZWxlY3RlZERhdGVJblByZXZNb250aCA9ICAhaXNBY3RpdmUgJiYgc2VsZWN0ZWRNb250aCA9PT0gcHJldk1vbnRoICYmIHNlbGVjdGVkWWVhciA9PT0gcHJldlllYXI7XHJcblxyXG5cclxuICAgICAgICBsZXQgaXNTZWxlY3RlZCA9ICBzZWxlY3RlZERhdGUuZ2V0RGF0ZSgpID09PSBkYXlOdW1iZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCBpc1NlbGVjdGVkRGF0ZUluT3BlbmVkTW9udGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgaXNTZWxlY3RlZERhdGVJbk5leHRNb250aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCBpc1NlbGVjdGVkRGF0ZUluUHJldk1vbnRoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjYWxlbmRhci1lbGVtZW50XCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXktZWxlbWVudFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm90QWN0aXZlXCI6ICFpc0FjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZVwiOiBpc0FjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkXCI6IGlzU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICB0aGlzLnNldERhdGUoZGF5TnVtYmVyLCBpc0FjdGl2ZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkYXl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgIGlmKHRoaXMuY2FsZW5kYXJFbGVtKXtcclxuICAgICAgICAgICAgbGV0IG1jID0gbmV3IEhhbW1lcih0aGlzLmNhbGVuZGFyRWxlbSk7XHJcbiAgICAgICAgICAgIG1jLm9uKFwic3dpcGVsZWZ0XCIsICgpID0+IHRoaXMuY2hhbmdlTW9udGgodHJ1ZSkpXHJcbiAgICAgICAgICAgIG1jLm9uKFwic3dpcGVyaWdodFwiLCAoKSA9PiB0aGlzLmNoYW5nZU1vbnRoKGZhbHNlKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlck1vbnRoKCl7XHJcbiAgICAgICAgY29uc3Qge29wZW5lZERhdGV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcblxyXG4gICAgICAgIGxldCBvcGVuZWRNb250aCA9IG9wZW5lZERhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRXZWVrID0gbW9tZW50KG9wZW5lZERhdGUpO1xyXG4gICAgICAgIGN1cnJlbnRXZWVrLnN0YXJ0T2YoXCJtb250aFwiKS5zdGFydE9mKFwid2Vla1wiKVxyXG5cclxuICAgICAgICBmb3IobGV0IHc9MDsgdzw1OyB3KyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih3PjApXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50V2Vlay5hZGQoMSwgJ3dlZWsnKTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnREYXkgPSBjdXJyZW50V2Vlay5zdGFydE9mKFwid2Vla1wiKTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgZD0wOyBkPDc7IGQrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoZD4wKVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnREYXkuYWRkKDEsIFwiZGF5XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gY3VycmVudERheS5mb3JtYXQoJ00nKSA9PT0gYCR7b3BlbmVkTW9udGh9YDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMucmVuZGVyQ2FsZW5kYXJFbGVtZW50KGN1cnJlbnREYXkuZm9ybWF0KCdEJyksIGlzQWN0aXZlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlckFycm93QnV0dG9uKGlzTmV4dCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICBcImNhbGVuZGFyLWFycm93XCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXh0XCI6IGlzTmV4dFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrID0geygpID0+IHRoaXMuY2hhbmdlTW9udGgoaXNOZXh0KX1cclxuICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17aXNOZXh0ID8gXCJjaGV2cm9uLXJpZ2h0XCIgOiBcImNoZXZyb24tbGVmdFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9e1wic21cIn0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge29wZW5lZERhdGV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG1vbWVudChvcGVuZWREYXRlKVxyXG4gICAgICAgIGxldCBjdXJNb250aExhYmVsID0gYCR7Y3VycmVudERhdGUuZm9ybWF0KCdNTU1NJyl9ICR7Y3VycmVudERhdGUueWVhcigpfWA7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGU+e3N0eWxlc308L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1widWkta2l0X19jYWxlbmRhci1jb250YWluZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICByZWYgPSB7ZWwgPT4gdGhpcy5jYWxlbmRhckVsZW0gPSBlbH1cclxuICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FsZW5kYXItaGVhZGVyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJBcnJvd0J1dHRvbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJjYWxlbmRhci1oZWFkZXItbGFiZWxcIn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1ck1vbnRoTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQXJyb3dCdXR0b24odHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wid2Vlay1kYXlzLWNvbnRhaW5lclwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0RBWVNfT0ZfV0VFSy5tYXAoIGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJjYWxlbmRhci1lbGVtZW50IHdlZWstZGF5XCJ9PiB7ZWx9IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYWxlbmRhci12aWV3XCJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTW9udGgoKS5tYXAoZWwgPT4gZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuU21hbGxDYWxlbmRhci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBkZWZhdWx0RGF0ZTogRGF0ZS5ub3coKVxyXG59XHJcblxyXG5TbWFsbENhbGVuZGFyLnByb3BUeXBlcyA9IHtcclxuICAgIGRlZmF1bHREYXRlOiBwcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgb25TZWxlY3RlZDogcHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbWFsbENhbGVuZGFyOyJdfQ==