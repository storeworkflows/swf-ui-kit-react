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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SmallCalendar = /*#__PURE__*/function (_React$Component) {
  _inherits(SmallCalendar, _React$Component);

  var _super = _createSuper(SmallCalendar);

  function SmallCalendar(props) {
    var _this;

    _classCallCheck(this, SmallCalendar);

    _this = _super.call(this, props);

    _this._getKeyByValue = function (value, obj) {
      return Object.keys(obj).find(function (key) {
        return obj[key] === value;
      });
    };

    _this.state = {
      selectedDate: _this.props.defaultDate
    };
    _this._addSwipeEvents = _this._addSwipeEvents.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SmallCalendar, [{
    key: "_addSwipeEvents",
    value: function _addSwipeEvents(elem) {
      var mc = new Hammer(elem);
      mc.on("swipeleft", this.handleChangeMonthClicked.bind(this, 'next'));
      mc.on("swiperight", this.handleChangeMonthClicked.bind(this, 'prev'));
    }
  }, {
    key: "handleDateClick",
    value: function handleDateClick(date) {}
  }, {
    key: "handleChangeMonthClicked",
    value: function handleChangeMonthClicked(button) {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var defaultDate = this.props.defaultDate;
      var currentDate = (0, _moment["default"])([defaultDate.year, defaultDate.month, defaultDate.day]);
      var formattedCurDate = currentDate.format("YYYY-MM-DD");
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "calendar-mobile__wrapper",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "calendar-mobile__controller",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "navigation-arrow--left",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "navigation-arrow--left-btn",
                onClick: this.handleChangeMonthClicked.bind(this, 'prev'),
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
                  icon: "arrow-left"
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: (0, _classnames["default"])({
                "calendar-mobile__month-items": true
              }),
              children: Object.values(monthList).map(function (month) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "--".concat(_this2._getKeyByValue(month, monthList)),
                  children: "".concat(month[0].choosenMonth, " ").concat(month[0].choosenYear)
                });
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "navigation-arrow--right",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "navigation-arrow--right-btn",
                onClick: this.handleChangeMonthClicked.bind(this, 'next'),
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
                  icon: "arrow-right"
                })
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "calendar-mobile__header",
            children: _constants.DAYS_OF_WEEK.map(function (day) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "calendar-mobile__header-item",
                children: day
              });
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classnames["default"])({
              "calendar-mobile__body-wrapper": true,
              "--prev-month": classFlags.prevIsCalled,
              "--current-month": !classFlags.prevIsCalled && !classFlags.nextIsCalled,
              "--next-month": classFlags.nextIsCalled
            }),
            ref: this._addSwipeEvents,
            children: Object.values(monthList).map(function (month) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: (0, _classnames["default"])({
                  "calendar-mobile__body": true
                }),
                children: month.map(function (date) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: (0, _classnames["default"])({
                      "date": true,
                      "--choosen": momentDate === formattedCurDate
                    }),
                    style: {
                      width: heatMap ? "100%" : "",
                      height: heatMap ? "100%" : "",
                      "border-radius": heatMap ? "0" : ""
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                      className: (0, _classnames["default"])({
                        "calendar-mobile__day": true,
                        "--disabled": !date.inThisMonth,
                        "--current": isMomentDateSelected,
                        "--choosen": isMomentDateSelected
                      }),
                      style: {
                        borderRadius: heatMap ? "none" : ""
                      },
                      onClick: _this2.handleDateClick.bind(_this2, date),
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        style: {
                          color: isMomentDateSelected && heatMap ? "#000" : "",
                          fontWeight: isMomentDateSelected && heatMap ? "800" : ""
                        },
                        children: date.day
                      }), date.isTask && !heatMap && showProjects ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                        className: "task-presence"
                      }) : null]
                    })
                  });
                })
              });
            })
          })]
        })]
      });
    }
  }]);

  return SmallCalendar;
}(React.Component);

SmallCalendar.defaultProps = {
  defaultDate: {
    week: (0, _moment["default"])().get("week"),
    day: (0, _moment["default"])().get("date"),
    month: (0, _moment["default"])().month(),
    year: (0, _moment["default"])().year()
  }
};
SmallCalendar.propTypes = {
  defaultDate: _propTypes["default"].shape({
    week: _propTypes["default"].number,
    day: _propTypes["default"].number,
    month: _propTypes["default"].number,
    year: _propTypes["default"].number
  })
};
var _default = SmallCalendar;
exports["default"] = _default;