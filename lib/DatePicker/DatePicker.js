"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _Input = _interopRequireDefault(require("../Input/Input"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _Popover = _interopRequireDefault(require("../Popover/Popover"));

var _SmallCalendar = _interopRequireDefault(require("../SmallCalendar/SmallCalendar"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var DatePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  var _super = _createSuper(DatePicker);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _super.call(this, props);
    var defaultDate = _this.props.defaultDate;
    var currentDateValue = defaultDate ? new Date(defaultDate) : null;
    _this.state = {
      stringValue: currentDateValue,
      currentDate: currentDateValue,
      isOpenedCalendar: false
    };
    _this.inputRef = null;
    _this.openCalendar = _this.openCalendar.bind(_assertThisInitialized(_this));
    _this.changeValue = _this.changeValue.bind(_assertThisInitialized(_this));
    _this.dateSelected = _this.dateSelected.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DatePicker, [{
    key: "changeValue",
    value: function changeValue(_ref) {
      var input = _ref.input;
      console.log(input);
      var format = this.props.format;
      var stringValue = this.state.stringValue;
      var isYearFirst = format[0] === 'Y';
      var separator = isYearFirst ? format[4] : format[2];
      var currentPosition = stringValue.length;
      var isNumber = input >= '0' && input <= '9';

      if (isNumber) {// if(currentPosition ===0 && )
      }

      this.setState(function (state) {
        return {
          stringValue: state.stringValue + input
        };
      });
    }
  }, {
    key: "openCalendar",
    value: function openCalendar() {
      this.setState(function (state) {
        return {
          isOpenedCalendar: !state.isOpenedCalendar
        };
      });
    }
  }, {
    key: "getDateString",
    value: function getDateString(date, format) {
      var monthNumber = date.getMonth() + 1;
      var dayNumber = date.getDate();
      var month = monthNumber < 10 ? "0".concat(monthNumber) : monthNumber;
      var day = dayNumber < 10 ? "0".concat(dayNumber) : dayNumber;
      var year = date.getFullYear();
      return format.replace('MM', month).replace('DD', day).replace('YYYY', year);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.inputRef && this.inputRef.current) {
        var input = this.inputRef.current.querySelector("input");
        console.log("mount", input);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          label = _this$props.label,
          defaultDate = _this$props.defaultDate,
          format = _this$props.format;
      var _this$state = this.state,
          stringValue = _this$state.stringValue,
          currentDate = _this$state.currentDate,
          isOpenedCalendar = _this$state.isOpenedCalendar;
      var dateValue = currentDate ? this.getDateString(currentDate, format) : '';
      var separator = format[1];
      var patternValue = "d{2}".concat(separator, "d{2}").concat(separator, "d{4}");
      console.log(separator, patternValue);
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          ref: function ref(el) {
            return _this2.inputRef = {
              current: el
            };
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
            label: label,
            value: stringValue,
            onChange: function onChange(e) {
              return _this2.changeValue({
                input: e.nativeEvent.data
              });
            },
            placeholder: format,
            pattern: patternValue,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"].End, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
                icon: "calendar",
                variant: "tertiary",
                onClick: function onClick() {
                  return _this2.openCalendar();
                }
              })
            })
          }), this.inputRef && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
            positionTarget: this.inputRef,
            positions: [{
              target: "bottom-center",
              content: "top-center"
            }, {
              target: "top-center",
              content: "bottom-center"
            }, {
              target: "center-end",
              content: "center-start"
            }, {
              target: "center-start",
              content: "center-end"
            }],
            hideTail: true,
            manageOpened: true,
            opened: isOpenedCalendar,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SmallCalendar["default"], {
                onSelected: function onSelected(_ref2) {
                  var date = _ref2.date;
                  return _this2.setState({
                    currentDate: date
                  });
                },
                defaultDate: defaultDate ? defaultDate : undefined
              })
            })
          })]
        })]
      });
    }
  }]);

  return DatePicker;
}(React.Component);

var GENERATE_FORMATS = function GENERATE_FORMATS() {
  var result = [];
  var separators = [".", "/", "-"];
  separators.forEach(function (s) {
    result.push("MM".concat(s, "DD").concat(s, "YYYY"));
    result.push("MM".concat(s, "YYYY").concat(s, "DD"));
    result.push("DD".concat(s, "MM").concat(s, "YYYY"));
    result.push("DD".concat(s, "YYYY").concat(s, "MM"));
    result.push("YYYY".concat(s, "DD").concat(s, "MM"));
    result.push("YYYY".concat(s, "MM").concat(s, "DD"));
  });
  return result;
};

DatePicker.defaultProps = {
  label: undefined,
  format: "MM.DD.YYYY"
};
DatePicker.propTypes = {
  label: _propTypes["default"].string,
  defaultDate: _propTypes["default"].number,
  format: _propTypes["default"].oneOf(GENERATE_FORMATS)
};
var _default = DatePicker;
exports["default"] = _default;