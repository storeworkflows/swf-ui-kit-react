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

var _constants = require("./constants");

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

var SmallCalendar = /*#__PURE__*/function (_React$Component) {
  _inherits(SmallCalendar, _React$Component);

  var _super = _createSuper(SmallCalendar);

  function SmallCalendar(props) {
    var _this;

    _classCallCheck(this, SmallCalendar);

    _this = _super.call(this, props);
    _this.changeMonth = _this.changeMonth.bind(_assertThisInitialized(_this));
    _this.setDate = _this.setDate.bind(_assertThisInitialized(_this));
    var defaultDate = _this.props.defaultDate;
    _this.state = {
      selectedDate: new Date(defaultDate),
      openedDate: new Date(defaultDate)
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
      var isSelected = selectedDate.getDate() === dayNumber && (isSelectedDateInOpenedMonth || isSelectedDateInNextMonth || isSelectedDateInPrevMonth);
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
    key: "renderMonth",
    value: function renderMonth() {
      var openedDate = this.state.openedDate;
      var result = [];
      var openedMonth = openedDate.getMonth() + 1;
      var currentWeek = (0, _moment["default"])(openedDate);
      currentWeek.startOf("month").startOf("week");

      for (var w = 0; w < 5; w++) {
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

      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames["default"])({
          "calendar-arrow": true,
          "next": isNext
        }),
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
            children: _constants.DAYS_OF_WEEK.map(function (el) {
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
  defaultDate: Date.now()
};
SmallCalendar.propTypes = {
  defaultDate: _propTypes["default"].number,
  onSelected: _propTypes["default"].func
};
var _default = SmallCalendar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TbWFsbENhbGVuZGFyL1NtYWxsQ2FsZW5kYXIuanMiXSwibmFtZXMiOlsiU21hbGxDYWxlbmRhciIsInByb3BzIiwiX2dldEtleUJ5VmFsdWUiLCJ2YWx1ZSIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJmaW5kIiwia2V5Iiwic3RhdGUiLCJzZWxlY3RlZERhdGUiLCJkZWZhdWx0RGF0ZSIsIl9hZGRTd2lwZUV2ZW50cyIsImJpbmQiLCJlbGVtIiwibWMiLCJIYW1tZXIiLCJvbiIsImhhbmRsZUNoYW5nZU1vbnRoQ2xpY2tlZCIsImRhdGUiLCJidXR0b24iLCJjdXJyZW50RGF0ZSIsInllYXIiLCJtb250aCIsImRheSIsImZvcm1hdHRlZEN1ckRhdGUiLCJmb3JtYXQiLCJzdHlsZXMiLCJ2YWx1ZXMiLCJtb250aExpc3QiLCJtYXAiLCJjaG9vc2VuTW9udGgiLCJjaG9vc2VuWWVhciIsIkRBWVNfT0ZfV0VFSyIsImNsYXNzRmxhZ3MiLCJwcmV2SXNDYWxsZWQiLCJuZXh0SXNDYWxsZWQiLCJtb21lbnREYXRlIiwid2lkdGgiLCJoZWF0TWFwIiwiaGVpZ2h0IiwiaW5UaGlzTW9udGgiLCJpc01vbWVudERhdGVTZWxlY3RlZCIsImJvcmRlclJhZGl1cyIsImhhbmRsZURhdGVDbGljayIsImNvbG9yIiwiZm9udFdlaWdodCIsImlzVGFzayIsInNob3dQcm9qZWN0cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwid2VlayIsImdldCIsInByb3BUeXBlcyIsInNoYXBlIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGE7Ozs7O0FBQ0YseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxVQWlCbkJDLGNBakJtQixHQWlCRixV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MkMsc0JBQVVDLEtBQVYsQ0FBZ0I7QUFDekJILElBQUFBLElBQUksRUFBRUUsc0JBQVVFLE1BRFM7QUFFekJoQyxJQUFBQSxHQUFHLEVBQUU4QixzQkFBVUUsTUFGVTtBQUd6QmpDLElBQUFBLEtBQUssRUFBRStCLHNCQUFVRSxNQUhRO0FBSXpCbEMsSUFBQUEsSUFBSSxFQUFFZ0Msc0JBQVVFO0FBSlMsR0FBaEI7QUFEUyxDQUExQjtlQVdleEQsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuaW1wb3J0IGhhbW1lciBmcm9tIFwiaGFtbWVyanNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCB7IERBWVNfT0ZfV0VFSyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiXHJcblxyXG5jbGFzcyBTbWFsbENhbGVuZGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWxlY3RlZERhdGU6IHRoaXMucHJvcHMuZGVmYXVsdERhdGVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2FkZFN3aXBlRXZlbnRzID0gdGhpcy5fYWRkU3dpcGVFdmVudHMuYmluZCh0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgX2FkZFN3aXBlRXZlbnRzKGVsZW0pIHtcclxuICAgICAgICBsZXQgbWMgPSBuZXcgSGFtbWVyKGVsZW0pO1xyXG4gICAgICAgIG1jLm9uKFwic3dpcGVsZWZ0XCIsIHRoaXMuaGFuZGxlQ2hhbmdlTW9udGhDbGlja2VkLmJpbmQodGhpcywgJ25leHQnKSlcclxuICAgICAgICBtYy5vbihcInN3aXBlcmlnaHRcIiwgdGhpcy5oYW5kbGVDaGFuZ2VNb250aENsaWNrZWQuYmluZCh0aGlzLCAncHJldicpKVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRLZXlCeVZhbHVlID0gKHZhbHVlLCBvYmopID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5maW5kKGtleSA9PiBvYmpba2V5XSA9PT0gdmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRGF0ZUNsaWNrKGRhdGUpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlTW9udGhDbGlja2VkKGJ1dHRvbikge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGRlZmF1bHREYXRlLFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG1vbWVudChbZGVmYXVsdERhdGUueWVhciwgZGVmYXVsdERhdGUubW9udGgsIGRlZmF1bHREYXRlLmRheV0pXHJcbiAgICAgICAgbGV0IGZvcm1hdHRlZEN1ckRhdGUgPSBjdXJyZW50RGF0ZS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPntzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItbW9iaWxlX193cmFwcGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItbW9iaWxlX19jb250cm9sbGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1hcnJvdy0tbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tYXJyb3ctLWxlZnQtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZU1vbnRoQ2xpY2tlZC5iaW5kKHRoaXMsICdwcmV2Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cImFycm93LWxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhbGVuZGFyLW1vYmlsZV9fbW9udGgtaXRlbXNcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LnZhbHVlcyhtb250aExpc3QpLm1hcChtb250aCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgLS0ke3RoaXMuX2dldEtleUJ5VmFsdWUobW9udGgsIG1vbnRoTGlzdCl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHttb250aFswXS5jaG9vc2VuTW9udGh9ICR7bW9udGhbMF0uY2hvb3NlblllYXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tYXJyb3ctLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1hcnJvdy0tcmlnaHQtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZU1vbnRoQ2xpY2tlZC5iaW5kKHRoaXMsICduZXh0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cImFycm93LXJpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLW1vYmlsZV9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtEQVlTX09GX1dFRUsubWFwKGRheSA9PiAoPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1tb2JpbGVfX2hlYWRlci1pdGVtXCI+e2RheX08L2Rpdj4pKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhbGVuZGFyLW1vYmlsZV9fYm9keS13cmFwcGVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tcHJldi1tb250aFwiOiBjbGFzc0ZsYWdzLnByZXZJc0NhbGxlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1jdXJyZW50LW1vbnRoXCI6ICFjbGFzc0ZsYWdzLnByZXZJc0NhbGxlZCAmJiAhY2xhc3NGbGFncy5uZXh0SXNDYWxsZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tbmV4dC1tb250aFwiOiBjbGFzc0ZsYWdzLm5leHRJc0NhbGxlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5fYWRkU3dpcGVFdmVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LnZhbHVlcyhtb250aExpc3QpLm1hcChtb250aCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxlbmRhci1tb2JpbGVfX2JvZHlcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9udGgubWFwKGRhdGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1jaG9vc2VuXCI6IG1vbWVudERhdGUgPT09IGZvcm1hdHRlZEN1ckRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaGVhdE1hcCA/IFwiMTAwJVwiIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVhdE1hcCA/IFwiMTAwJVwiIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBoZWF0TWFwID8gXCIwXCIgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxlbmRhci1tb2JpbGVfX2RheVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1kaXNhYmxlZFwiOiAhZGF0ZS5pblRoaXNNb250aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tY3VycmVudFwiOiBpc01vbWVudERhdGVTZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tY2hvb3NlblwiOiBpc01vbWVudERhdGVTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IGhlYXRNYXAgPyBcIm5vbmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZURhdGVDbGljay5iaW5kKHRoaXMsIGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc01vbWVudERhdGVTZWxlY3RlZCAmJiBoZWF0TWFwID8gXCIjMDAwXCIgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBpc01vbWVudERhdGVTZWxlY3RlZCAmJiBoZWF0TWFwID8gXCI4MDBcIiA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlLmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGUuaXNUYXNrICYmICFoZWF0TWFwICYmIHNob3dQcm9qZWN0cyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFzay1wcmVzZW5jZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuU21hbGxDYWxlbmRhci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBkZWZhdWx0RGF0ZToge1xyXG4gICAgICAgIHdlZWs6IG1vbWVudCgpLmdldChcIndlZWtcIiksXHJcbiAgICAgICAgZGF5OiBtb21lbnQoKS5nZXQoXCJkYXRlXCIpLFxyXG4gICAgICAgIG1vbnRoOiBtb21lbnQoKS5tb250aCgpLFxyXG4gICAgICAgIHllYXI6IG1vbWVudCgpLnllYXIoKSxcclxuICAgIH1cclxufVxyXG5cclxuU21hbGxDYWxlbmRhci5wcm9wVHlwZXMgPSB7XHJcbiAgICBkZWZhdWx0RGF0ZTogcHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICB3ZWVrOiBwcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIGRheTogcHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBtb250aDogcHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICB5ZWFyOiBwcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNtYWxsQ2FsZW5kYXI7Il19