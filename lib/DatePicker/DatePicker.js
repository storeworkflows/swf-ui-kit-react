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

var _styles = _interopRequireDefault(require("./styles.scss"));

var _Input = _interopRequireDefault(require("../Input/Input"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _Popover = _interopRequireDefault(require("../Popover/Popover"));

var _SmallCalendar = _interopRequireDefault(require("../SmallCalendar/SmallCalendar"));

var _utils = require("./utils");

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

var DatePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  var _super = _createSuper(DatePicker);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _super.call(this, props);
    var _this$props = _this.props,
        value = _this$props.value,
        format = _this$props.format,
        opened = _this$props.opened,
        invalid = _this$props.invalid,
        manageInvalid = _this$props.manageInvalid;
    var dateValue = (0, _moment["default"])(value, format);
    var invalidValue = invalid || value && !manageInvalid && !dateValue.isValid();
    _this.state = {
      stringValue: value,
      currentDate: dateValue.isValid() ? dateValue.toDate() : null,
      isOpened: opened,
      isInvalid: invalidValue
    };
    _this.inputRef = null;
    _this.changeValue = _this.changeValue.bind(_assertThisInitialized(_this));
    _this.openCalendar = _this.openCalendar.bind(_assertThisInitialized(_this));
    _this.dateSelected = _this.dateSelected.bind(_assertThisInitialized(_this));
    _this.invalidInput = _this.invalidInput.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DatePicker, [{
    key: "changeValue",
    value: function changeValue(e) {
      e.preventDefault();
      var input = e.nativeEvent.data;
      var _this$props2 = this.props,
          format = _this$props2.format,
          manageValue = _this$props2.manageValue,
          onValueChange = _this$props2.onValueChange;
      var stringValue = this.state.stringValue;
      onValueChange({
        oldValue: stringValue,
        input: input
      });

      if (!manageValue) {
        var newDateString = (0, _utils.addCharToDate)(format, stringValue, input);
        this.setState({
          stringValue: newDateString
        });
      }
    }
  }, {
    key: "dateSelected",
    value: function dateSelected(date) {
      var _this$props3 = this.props,
          manageValue = _this$props3.manageValue,
          onValueChange = _this$props3.onValueChange;
      var dateInFormat = (0, _moment["default"])(date).format(this.props.format);

      if (!manageValue) {
        onValueChange({
          oldValue: this.state.stringValue,
          newValue: dateInFormat
        });
        this.setState({
          currentDate: date,
          stringValue: dateInFormat
        });
      }
    }
  }, {
    key: "invalidInput",
    value: function invalidInput(isInvalid) {
      var _this$props4 = this.props,
          manageInvalid = _this$props4.manageInvalid,
          onInvalid = _this$props4.onInvalid;
      if (!manageInvalid) this.setState({
        isInvalid: isInvalid
      });
      onInvalid(isInvalid);
    }
  }, {
    key: "openCalendar",
    value: function openCalendar() {
      var _this$props5 = this.props,
          manageOpened = _this$props5.manageOpened,
          onOpen = _this$props5.onOpen,
          format = _this$props5.format;
      var _this$state = this.state,
          isOpened = _this$state.isOpened,
          stringValue = _this$state.stringValue;
      var openState = isOpened;
      var isValidStringDate = (0, _moment["default"])(stringValue, format).isValid();

      if (!manageOpened) {
        openState = !openState;
        if (isValidStringDate) this.setState({
          currentDate: (0, _moment["default"])(stringValue, format).toDate()
        });else this.setState({
          stringValue: '',
          currentDate: null
        });
        this.setState({
          isOpened: openState
        });
      }

      onOpen(openState);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props6 = this.props,
          manageInvalid = _this$props6.manageInvalid,
          manageOpened = _this$props6.manageOpened,
          manageValue = _this$props6.manageValue,
          opened = _this$props6.opened,
          invalid = _this$props6.invalid,
          value = _this$props6.value,
          format = _this$props6.format;
      var _this$state2 = this.state,
          isInvalid = _this$state2.isInvalid,
          isOpened = _this$state2.isOpened,
          stringValue = _this$state2.stringValue;
      if (manageInvalid && isInvalid !== invalid) this.invalidInput(invalid);
      if (manageOpened && opened !== isOpened) this.openCalendar();

      if (manageValue && value !== stringValue) {
        var dateValue = (0, _moment["default"])(value, format);
        var invalidValue = invalid || value && !manageInvalid && !dateValue.isValid();
        this.setState({
          stringValue: value,
          currentDate: dateValue.isValid() ? dateValue.toDate() : null,
          invalid: invalidValue
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props7 = this.props,
          label = _this$props7.label,
          format = _this$props7.format,
          message = _this$props7.message,
          required = _this$props7.required;
      var _this$state3 = this.state,
          stringValue = _this$state3.stringValue,
          currentDate = _this$state3.currentDate,
          isOpened = _this$state3.isOpened,
          isInvalid = _this$state3.isInvalid;
      var calendarPositions = [{
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
      }];
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
            placeholder: format,
            value: stringValue,
            manageInvalid: true,
            invalid: isInvalid,
            onInvalid: function onInvalid() {
              return _this2.invalidInput(true);
            },
            onChange: function onChange(e) {
              return _this2.changeValue(e);
            },
            message: message,
            required: required,
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
            hideTail: true,
            manageOpened: true,
            opened: isOpened,
            positions: calendarPositions,
            positionTarget: this.inputRef,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SmallCalendar["default"], {
                onSelected: function onSelected(_ref) {
                  var date = _ref.date;
                  return _this2.dateSelected(date);
                },
                openedDate: currentDate
              })
            })
          })]
        })]
      });
    }
  }]);

  return DatePicker;
}(React.Component);

DatePicker.defaultProps = {
  label: undefined,
  format: "MM.DD.YYYY",
  value: "",
  required: false,
  readonly: false,
  invalid: false,
  opened: false,
  manageOpened: false,
  manageInvalid: false,
  manageValue: false,
  onOpen: function onOpen() {
    return void 0;
  },
  onInvalid: function onInvalid() {
    return void 0;
  },
  onValueChange: function onValueChange() {
    return void 0;
  }
};
DatePicker.propTypes = {
  label: _propTypes["default"].string,
  value: _propTypes["default"].string,
  format: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  readonly: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  opened: _propTypes["default"].bool,
  manageOpened: _propTypes["default"].bool,
  manageInvalid: _propTypes["default"].bool,
  manageValue: _propTypes["default"].bool,
  message: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    status: _propTypes["default"].oneOf(["critical", "warning", "positive", "info", "suggestion"]),
    content: _propTypes["default"].string,
    icon: _propTypes["default"].string
  })),
  onOpen: _propTypes["default"].func,
  onInvalid: _propTypes["default"],
  onValueChange: _propTypes["default"].func
};
var _default = DatePicker;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EYXRlUGlja2VyL0RhdGVQaWNrZXIuanMiXSwibmFtZXMiOlsiRGF0ZVBpY2tlciIsInByb3BzIiwibCIsInZhbHVlIiwiY3VycmVudERhdGVWYWx1ZSIsIkRhdGUiLCJzdGF0ZSIsInN0cmluZ1ZhbHVlIiwiY3VycmVudERhdGUiLCJpc09wZW5lZENhbGVuZGFyIiwiaW5wdXRSZWYiLCJjaGFuZ2VWYWx1ZSIsImJpbmQiLCJvcGVuQ2FsZW5kYXIiLCJkYXRlU2VsZWN0ZWQiLCJpbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJwYXR0ZXJuIiwiaXNZZWFyRmlyc3QiLCJzZXBhcmF0b3IiLCJjdXJyZW50UG9zaXRpb24iLCJsZW5ndGgiLCJpc051bWJlciIsInNldFN0YXRlIiwiZGF0ZSIsIm1vbnRoTnVtYmVyIiwiZ2V0TW9udGgiLCJkYXlOdW1iZXIiLCJnZXREYXRlIiwibW9udGgiLCJkYXkiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJyZXBsYWNlIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsYWJlbCIsImRhdGVWYWx1ZSIsImdldERhdGVTdHJpbmciLCJwYXR0ZXJuVmFsdWUiLCJzdHlsZXMiLCJlbCIsInRhcmdldCIsImNvbnRlbnQiLCJ1bmRlZmluZWQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkdFTkVSQVRFX0ZPUk1BVFMiLCJyZXN1bHQiLCJzZXBhcmF0b3JzIiwiZm9yRWFjaCIsInMiLCJwdXNoIiwiZGVmYXVsdFByb3BzIiwibWFuZGF0b3J5IiwicmVhZG9ubHkiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsIm9uVmFsdWVDaGFuZ2UiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxVOzs7OztBQUVGLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7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O0FBSW5CWSxFQUFBQSxhQUFhLEVBQUVILHNCQUFVSSxJQUpOO0FBS25CTixFQUFBQSxTQUFTLEVBQUVFLHNCQUFVSyxJQUxGO0FBTW5CTixFQUFBQSxRQUFRLEVBQUVDLHNCQUFVSztBQU5ELENBQXZCO2VBU2U5RCxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9JbnB1dC9JbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCBQb3BvdmVyIGZyb20gXCIuLi9Qb3BvdmVyL1BvcG92ZXJcIjtcclxuaW1wb3J0IFNtYWxsQ2FsZW5kYXIgZnJvbSBcIi4uL1NtYWxsQ2FsZW5kYXIvU21hbGxDYWxlbmRhclwiO1xyXG5cclxuY2xhc3MgRGF0ZVBpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgY29uc3Qge3ZhbHVlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IGN1cnJlbnREYXRlVmFsdWUgPSAodmFsdWUpID8gbmV3IERhdGUodmFsdWUpIDogbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc3RyaW5nVmFsdWU6IGN1cnJlbnREYXRlVmFsdWUsXHJcbiAgICAgICAgICAgIGN1cnJlbnREYXRlOiBjdXJyZW50RGF0ZVZhbHVlLFxyXG4gICAgICAgICAgICBpc09wZW5lZENhbGVuZGFyOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbnB1dFJlZiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlVmFsdWUgPSB0aGlzLmNoYW5nZVZhbHVlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vcGVuQ2FsZW5kYXIgPSB0aGlzLm9wZW5DYWxlbmRhci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGF0ZVNlbGVjdGVkID0gdGhpcy5kYXRlU2VsZWN0ZWQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VWYWx1ZSh7aW5wdXR9KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dClcclxuICAgICAgICBjb25zdCB7cGF0dGVybn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtzdHJpbmdWYWx1ZX0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBsZXQgaXNZZWFyRmlyc3QgPSAocGF0dGVyblswXSA9PT0gJ1knKTtcclxuICAgICAgICBsZXQgc2VwYXJhdG9yID0gaXNZZWFyRmlyc3QgPyBwYXR0ZXJuWzRdIDogcGF0dGVyblsyXTtcclxuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gc3RyaW5nVmFsdWUubGVuZ3RoO1xyXG5cclxuICAgICAgICBsZXQgaXNOdW1iZXIgPSBpbnB1dD49JzAnICYmIGlucHV0IDw9JzknO1xyXG4gICAgICAgIGlmKGlzTnVtYmVyKXtcclxuICAgICAgICAgICAvLyBpZihjdXJyZW50UG9zaXRpb24gPT09MCAmJiApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSk9PntyZXR1cm4ge3N0cmluZ1ZhbHVlOiBzdGF0ZS5zdHJpbmdWYWx1ZStpbnB1dH19KVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGVTZWxlY3RlZChkYXRlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50RGF0ZTogZGF0ZSwgc3RyaW5nVmFsdWU6IGRhdGV9KVxyXG4gICAgfVxyXG5cclxubFxyXG4gICAgb3BlbkNhbGVuZGFyKCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJue2lzT3BlbmVkQ2FsZW5kYXI6ICFzdGF0ZS5pc09wZW5lZENhbGVuZGFyfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGVTdHJpbmcoZGF0ZSwgcGF0dGVybil7XHJcblxyXG4gICAgICAgIGxldCBtb250aE51bWJlciA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgbGV0IGRheU51bWJlciA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG5cclxuICAgICAgICBsZXQgbW9udGggPSBtb250aE51bWJlcjwxMCA/IGAwJHttb250aE51bWJlcn1gIDogbW9udGhOdW1iZXI7XHJcbiAgICAgICAgbGV0IGRheSA9IGRheU51bWJlcjwxMCA/IGAwJHtkYXlOdW1iZXJ9YCA6IGRheU51bWJlcjtcclxuICAgICAgICBsZXQgeWVhciA9ZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICByZXR1cm4gcGF0dGVybi5yZXBsYWNlKCdNTScsIG1vbnRoKS5yZXBsYWNlKCdERCcsIGRheSkucmVwbGFjZSgnWVlZWScsIHllYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmKHRoaXMuaW5wdXRSZWYgJiYgdGhpcy5pbnB1dFJlZi5jdXJyZW50KXtcclxuICAgICAgICAgICAgbGV0IGlucHV0ID0gdGhpcy5pbnB1dFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm1vdW50XCIsIGlucHV0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtsYWJlbCwgdmFsdWUsIHBhdHRlcm59ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7c3RyaW5nVmFsdWUsIGN1cnJlbnREYXRlLCBpc09wZW5lZENhbGVuZGFyfSA9IHRoaXMuc3RhdGVcclxuXHJcblxyXG4gICAgICAgIGxldCBkYXRlVmFsdWUgPSAoY3VycmVudERhdGUpXHJcbiAgICAgICAgICAgID8gdGhpcy5nZXREYXRlU3RyaW5nKGN1cnJlbnREYXRlLCBwYXR0ZXJuKVxyXG4gICAgICAgICAgICA6ICcnO1xyXG5cclxuICAgICAgICBsZXQgc2VwYXJhdG9yID0gKHBhdHRlcm5bMF0gPT09ICdZJykgPyBwYXR0ZXJuWzRdIDogcGF0dGVyblsyXTtcclxuICAgICAgICBsZXQgcGF0dGVyblZhbHVlID0gYGR7Mn0ke3NlcGFyYXRvcn1kezJ9JHtzZXBhcmF0b3J9ZHs0fWBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZXBhcmF0b3IsIHBhdHRlcm5WYWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWYgPSB7ZWwgPT4gdGhpcy5pbnB1dFJlZiA9IHtjdXJyZW50OiBlbH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vb25DaGFuZ2U9eyhlKT0+IHRoaXMuY2hhbmdlVmFsdWUoeyBpbnB1dDogZS5uYXRpdmVFdmVudC5kYXRhfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwYXR0ZXJufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPXtwYXR0ZXJuVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQgPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5FbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17XCJjYWxlbmRhclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1widGVydGlhcnlcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9wZW5DYWxlbmRhcigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dC5FbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuaW5wdXRSZWYgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uVGFyZ2V0PXt0aGlzLmlucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhcmdldDogXCJib3R0b20tY2VudGVyXCIsIGNvbnRlbnQ6IFwidG9wLWNlbnRlclwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFyZ2V0OiBcInRvcC1jZW50ZXJcIiwgY29udGVudDogXCJib3R0b20tY2VudGVyXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YXJnZXQ6IFwiY2VudGVyLWVuZFwiLCBjb250ZW50OiBcImNlbnRlci1zdGFydFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFyZ2V0OiBcImNlbnRlci1zdGFydFwiLCBjb250ZW50OiBcImNlbnRlci1lbmRcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVRhaWw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VPcGVuZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuZWQ9e2lzT3BlbmVkQ2FsZW5kYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNtYWxsQ2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RlZD17KHtkYXRlfSkgPT4gdGhpcy5kYXRlU2VsZWN0ZWQoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHREYXRlPXsodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlci5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IEdFTkVSQVRFX0ZPUk1BVFMgPSAoKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICBsZXQgc2VwYXJhdG9ycyA9IFtcIi5cIiwgXCIvXCIsIFwiLVwiXTtcclxuXHJcbiAgICBzZXBhcmF0b3JzLmZvckVhY2goIHMgPT4ge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKGBNTSR7c31ERCR7c31ZWVlZYCk7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goYE1NJHtzfVlZWVkke3N9RERgKTtcclxuICAgICAgICByZXN1bHQucHVzaChgREQke3N9TU0ke3N9WVlZWWApO1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKGBERCR7c31ZWVlZJHtzfU1NYCk7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goYFlZWVkke3N9REQke3N9TU1gKTtcclxuICAgICAgICByZXN1bHQucHVzaChgWVlZWSR7c31NTSR7c31ERGApO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5EYXRlUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGxhYmVsOiB1bmRlZmluZWQsXHJcbiAgICBwYXR0ZXJuOiBcIk1NLkRELllZWVlcIixcclxuICAgIG1hbmRhdG9yeTogZmFsc2UsXHJcbiAgICByZWFkb25seTogZmFsc2VcclxufVxyXG5cclxuRGF0ZVBpY2tlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHZhbHVlOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcGF0dGVybjogcHJvcFR5cGVzLm9uZU9mKEdFTkVSQVRFX0ZPUk1BVFMpLFxyXG4gICAgb25WYWx1ZUNoYW5nZTogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBtYW5kYXRvcnk6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVhZG9ubHk6IHByb3BUeXBlcy5ib29sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVQaWNrZXJcclxuIl19