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
  openedDate: _propTypes["default"].number,
  onSelected: _propTypes["default"].func
};
var _default = SmallCalendar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TbWFsbENhbGVuZGFyL1NtYWxsQ2FsZW5kYXIuanMiXSwibmFtZXMiOlsiREFZU19PRl9XRUVLIiwiU21hbGxDYWxlbmRhciIsInByb3BzIiwiY2hhbmdlTW9udGgiLCJiaW5kIiwic2V0RGF0ZSIsIm9wZW5lZERhdGUiLCJkYXRlIiwiRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInNlbGVjdGVkRGF0ZSIsImRheSIsImlzQWN0aXZlIiwib25TZWxlY3RlZCIsIm5ld1NlbGVjdGVkIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImlzTmV4dCIsInVwZGF0ZWRNb250aCIsImFkZCIsInRvRGF0ZSIsInNldFN0YXRlIiwiYWRkaXRpb25WYWx1ZSIsImNoYW5nZWRUbyIsImRheU51bWJlciIsInBhcnNlSW50IiwiaXNTZWxlY3RlZCIsInNlbGVjdGVkTW9udGgiLCJzZWxlY3RlZFllYXIiLCJvcGVuZWRNb250aCIsIm9wZW5lZFllYXIiLCJuZXh0TW9udGgiLCJwcmV2TW9udGgiLCJuZXh0WWVhciIsInByZXZZZWFyIiwiaXNTZWxlY3RlZERhdGVJbk9wZW5lZE1vbnRoIiwiaXNTZWxlY3RlZERhdGVJbk5leHRNb250aCIsImlzU2VsZWN0ZWREYXRlSW5QcmV2TW9udGgiLCJnZXREYXRlIiwiY2FsZW5kYXJFbGVtIiwibWMiLCJIYW1tZXIiLCJvbiIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwicmVzdWx0IiwiY3VycmVudFdlZWsiLCJzdGFydE9mIiwidyIsImN1cnJlbnREYXkiLCJkIiwiZm9ybWF0IiwicHVzaCIsInJlbmRlckNhbGVuZGFyRWxlbWVudCIsImNsYXNzZXMiLCJjdXJyZW50RGF0ZSIsImN1ck1vbnRoTGFiZWwiLCJ5ZWFyIiwiZWwiLCJyZW5kZXJBcnJvd0J1dHRvbiIsIm1hcCIsInJlbmRlck1vbnRoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJu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SyxLQUFLRyxXQUFMLEdBQW1CRCxHQUFuQixDQUF1QixVQUFBRixFQUFFO0FBQUEscUJBQUlBLEVBQUo7QUFBQSxhQUF6QjtBQURMLFlBakJKO0FBQUE7QUFESixRQURKO0FBeUJIOzs7O0VBNUx1QkksS0FBSyxDQUFDQyxTOztBQStMbENqRSxhQUFhLENBQUNrRSxZQUFkLEdBQTZCO0FBQ3pCN0QsRUFBQUEsVUFBVSxFQUFFO0FBRGEsQ0FBN0I7QUFJQUwsYUFBYSxDQUFDbUUsU0FBZCxHQUEwQjtBQUN0QjlELEVBQUFBLFVBQVUsRUFBRThELHNCQUFVQyxNQURBO0FBRXRCdEQsRUFBQUEsVUFBVSxFQUFFcUQsc0JBQVVFO0FBRkEsQ0FBMUI7ZUFPZXJFLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCBoYW1tZXIgZnJvbSBcImhhbW1lcmpzXCI7XHJcblxyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCJcclxuXHJcbmNvbnN0IERBWVNfT0ZfV0VFSyA9IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXTtcclxuXHJcbmNsYXNzIFNtYWxsQ2FsZW5kYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VNb250aCA9IHRoaXMuY2hhbmdlTW9udGguYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldERhdGUgPSB0aGlzLnNldERhdGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgY29uc3Qge29wZW5lZERhdGV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgZGF0ZSA9IChvcGVuZWREYXRlKSA/IG5ldyBEYXRlKG9wZW5lZERhdGUpIDogbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRlKVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWxlY3RlZERhdGU6IGRhdGUsXHJcbiAgICAgICAgICAgIG9wZW5lZERhdGU6IChkYXRlKSA/IGRhdGUgOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRlKGRheSwgaXNBY3RpdmUpe1xyXG4gICAgICAgIGNvbnN0IHtvcGVuZWREYXRlfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge29uU2VsZWN0ZWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgbmV3U2VsZWN0ZWQ7XHJcblxyXG4gICAgICAgIGlmKGlzQWN0aXZlKVxyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZCA9IG5ldyBEYXRlKG9wZW5lZERhdGUuZ2V0RnVsbFllYXIoKSwgb3BlbmVkRGF0ZS5nZXRNb250aCgpLCBkYXkpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgaXNOZXh0ID0gZGF5PjE1ID8gLTEgOiAxO1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlZE1vbnRoID0gbW9tZW50KG9wZW5lZERhdGUpLmFkZChpc05leHQsIFwibW9udGhcIikudG9EYXRlKCk7XHJcblxyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZCA9IG5ldyBEYXRlKHVwZGF0ZWRNb250aC5nZXRGdWxsWWVhcigpLCB1cGRhdGVkTW9udGguZ2V0TW9udGgoKSwgZGF5KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkRGF0ZTogdXBkYXRlZE1vbnRofSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZERhdGU6IG5ld1NlbGVjdGVkfSk7XHJcbiAgICAgICAgaWYob25TZWxlY3RlZClcclxuICAgICAgICAgICAgb25TZWxlY3RlZCh7ZGF0ZTogbmV3U2VsZWN0ZWR9KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VNb250aChpc05leHQpIHtcclxuICAgICAgICBsZXQgYWRkaXRpb25WYWx1ZSA9IGlzTmV4dCA/IDEgOiAtMTtcclxuICAgICAgICBsZXQgY2hhbmdlZFRvID0gbW9tZW50KHRoaXMuc3RhdGUub3BlbmVkRGF0ZSkuYWRkKGFkZGl0aW9uVmFsdWUsIFwibW9udGhcIik7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZERhdGU6IGNoYW5nZWRUby50b0RhdGUoKX0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2FsZW5kYXJFbGVtZW50KGRheSwgaXNBY3RpdmUpe1xyXG4gICAgICAgIGNvbnN0IHtvcGVuZWREYXRlLCBzZWxlY3RlZERhdGV9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IGRheU51bWJlciA9IHBhcnNlSW50KGRheSlcclxuXHJcbiAgICAgICAgbGV0IGlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpZihzZWxlY3RlZERhdGUpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkTW9udGggPSBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkWWVhciA9IHNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBsZXQgb3BlbmVkTW9udGggPSBvcGVuZWREYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgICAgIGxldCBvcGVuZWRZZWFyID0gb3BlbmVkRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5leHRNb250aCA9IChvcGVuZWRNb250aCArIDEpICUgMTI7XHJcbiAgICAgICAgICAgIGxldCBwcmV2TW9udGggPSAob3BlbmVkTW9udGggLSAxKSAlIDEyO1xyXG4gICAgICAgICAgICBsZXQgbmV4dFllYXIgPSAobmV4dE1vbnRoID09PSAwKSA/IChvcGVuZWRZZWFyICsgMSkgOiBvcGVuZWRZZWFyO1xyXG4gICAgICAgICAgICBsZXQgcHJldlllYXIgPSAocHJldk1vbnRoID09PSAxMSkgPyAob3BlbmVkWWVhciAtIDEpIDogb3BlbmVkWWVhcjtcclxuXHJcbiAgICAgICAgICAgIGxldCBpc1NlbGVjdGVkRGF0ZUluT3BlbmVkTW9udGggPSBpc0FjdGl2ZSAmJiBzZWxlY3RlZE1vbnRoID09PSBvcGVuZWRNb250aCAmJiBzZWxlY3RlZFllYXIgPT09IG9wZW5lZFllYXI7XHJcbiAgICAgICAgICAgIGxldCBpc1NlbGVjdGVkRGF0ZUluTmV4dE1vbnRoID0gIWlzQWN0aXZlICYmIHNlbGVjdGVkTW9udGggPT09IG5leHRNb250aCAmJiBzZWxlY3RlZFllYXIgPT09IG5leHRZZWFyO1xyXG4gICAgICAgICAgICBsZXQgaXNTZWxlY3RlZERhdGVJblByZXZNb250aCA9ICFpc0FjdGl2ZSAmJiBzZWxlY3RlZE1vbnRoID09PSBwcmV2TW9udGggJiYgc2VsZWN0ZWRZZWFyID09PSBwcmV2WWVhcjtcclxuXHJcblxyXG4gICAgICAgICAgICBpc1NlbGVjdGVkID0gc2VsZWN0ZWREYXRlLmdldERhdGUoKSA9PT0gZGF5TnVtYmVyICYmXHJcbiAgICAgICAgICAgICAgICAoaXNTZWxlY3RlZERhdGVJbk9wZW5lZE1vbnRoXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgaXNTZWxlY3RlZERhdGVJbk5leHRNb250aFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IGlzU2VsZWN0ZWREYXRlSW5QcmV2TW9udGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjYWxlbmRhci1lbGVtZW50XCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXktZWxlbWVudFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibm90QWN0aXZlXCI6ICFpc0FjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZVwiOiBpc0FjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkXCI6IGlzU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICB0aGlzLnNldERhdGUoZGF5TnVtYmVyLCBpc0FjdGl2ZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkYXl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgIGlmKHRoaXMuY2FsZW5kYXJFbGVtKXtcclxuICAgICAgICAgICAgbGV0IG1jID0gbmV3IEhhbW1lcih0aGlzLmNhbGVuZGFyRWxlbSk7XHJcbiAgICAgICAgICAgIG1jLm9uKFwic3dpcGVsZWZ0XCIsICgpID0+IHRoaXMuY2hhbmdlTW9udGgodHJ1ZSkpXHJcbiAgICAgICAgICAgIG1jLm9uKFwic3dpcGVyaWdodFwiLCAoKSA9PiB0aGlzLmNoYW5nZU1vbnRoKGZhbHNlKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xyXG5cclxuICAgICAgICBjb25zdCB7b3BlbmVkRGF0ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmKG9wZW5lZERhdGUgIT09IHByZXZQcm9wcy5vcGVuZWREYXRlKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRlID0gKG9wZW5lZERhdGUpID8gbmV3IERhdGUob3BlbmVkRGF0ZSkgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGU6IGRhdGUsXHJcbiAgICAgICAgICAgICAgICBvcGVuZWREYXRlOiAoZGF0ZSkgPyBkYXRlIDogbmV3IERhdGUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyTW9udGgoKXtcclxuICAgICAgICBjb25zdCB7b3BlbmVkRGF0ZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IG9wZW5lZE1vbnRoID0gb3BlbmVkRGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgICAgICBsZXQgY3VycmVudFdlZWsgPSBtb21lbnQob3BlbmVkRGF0ZSk7XHJcbiAgICAgICAgY3VycmVudFdlZWsuc3RhcnRPZihcIm1vbnRoXCIpLnN0YXJ0T2YoXCJ3ZWVrXCIpXHJcblxyXG4gICAgICAgIGZvcihsZXQgdz0wOyB3PDY7IHcrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHc+MClcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRXZWVrLmFkZCgxLCAnd2VlaycpO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudERheSA9IGN1cnJlbnRXZWVrLnN0YXJ0T2YoXCJ3ZWVrXCIpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBkPTA7IGQ8NzsgZCsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihkPjApXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudERheS5hZGQoMSwgXCJkYXlcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBjdXJyZW50RGF5LmZvcm1hdCgnTScpID09PSBgJHtvcGVuZWRNb250aH1gO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5yZW5kZXJDYWxlbmRhckVsZW1lbnQoY3VycmVudERheS5mb3JtYXQoJ0QnKSwgaXNBY3RpdmUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyQXJyb3dCdXR0b24oaXNOZXh0KXtcclxuICAgICAgICBsZXQgY2xhc3NlcyA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICBcImNhbGVuZGFyLWFycm93XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwibmV4dFwiOiBpc05leHRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiB0aGlzLmNoYW5nZU1vbnRoKGlzTmV4dCl9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17aXNOZXh0ID8gXCJjaGV2cm9uLXJpZ2h0XCIgOiBcImNoZXZyb24tbGVmdFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9e1wic21cIn0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge29wZW5lZERhdGV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG1vbWVudChvcGVuZWREYXRlKVxyXG4gICAgICAgIGxldCBjdXJNb250aExhYmVsID0gYCR7Y3VycmVudERhdGUuZm9ybWF0KCdNTU1NJyl9ICR7Y3VycmVudERhdGUueWVhcigpfWA7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInVpLWtpdF9fY2FsZW5kYXItY29udGFpbmVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmID0ge2VsID0+IHRoaXMuY2FsZW5kYXJFbGVtID0gZWx9XHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhbGVuZGFyLWhlYWRlclwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQXJyb3dCdXR0b24oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiY2FsZW5kYXItaGVhZGVyLWxhYmVsXCJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJNb250aExhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckFycm93QnV0dG9uKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIndlZWstZGF5cy1jb250YWluZXJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtEQVlTX09GX1dFRUsubWFwKCBlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wiY2FsZW5kYXItZWxlbWVudCB3ZWVrLWRheVwifT4ge2VsfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FsZW5kYXItdmlld1wifSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck1vbnRoKCkubWFwKGVsID0+IGVsKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblNtYWxsQ2FsZW5kYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgb3BlbmVkRGF0ZTogbnVsbFxyXG59XHJcblxyXG5TbWFsbENhbGVuZGFyLnByb3BUeXBlcyA9IHtcclxuICAgIG9wZW5lZERhdGU6IHByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvblNlbGVjdGVkOiBwcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNtYWxsQ2FsZW5kYXI7Il19