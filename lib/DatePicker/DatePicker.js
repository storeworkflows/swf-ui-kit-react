"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Input = _interopRequireDefault(require("../Input/Input"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _Popover = _interopRequireDefault(require("../Popover/Popover"));

var _SmallCalendar = _interopRequireDefault(require("../SmallCalendar/SmallCalendar"));

var _utils = require("./utils");

var _utils2 = require("../SmallCalendar/utils");

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

var DatePicker = /*#__PURE__*/React.forwardRef(function (props, _ref) {
  var _inputRef$current;

  var opened = props.opened,
      value = props.value,
      format = props.format,
      min = props.min,
      max = props.max,
      visible = props.visible,
      invalid = props.invalid,
      manageValue = props.manageValue,
      onValueChange = props.onValueChange,
      onValueSet = props.onValueSet,
      manageInvalid = props.manageInvalid,
      onInvalid = props.onInvalid,
      manageOpened = props.manageOpened,
      onOpen = props.onOpen;

  var _useState = (0, React.useState)((0, _moment["default"])((0, _utils2.checkDate)(value)).format(format)),
      _useState2 = _slicedToArray(_useState, 2),
      dateValue = _useState2[0],
      setDateValue = _useState2[1];

  var _useState3 = (0, React.useState)(opened),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpened = _useState4[0],
      setIsOpened = _useState4[1];

  var _useState5 = (0, React.useState)(invalid),
      _useState6 = _slicedToArray(_useState5, 2),
      isInvalid = _useState6[0],
      setIsInvalid = _useState6[1];

  var _useState7 = (0, React.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      errorMessages = _useState8[0],
      setErrorMessages = _useState8[1];

  var inputRef = (0, React.useRef)(null);
  (0, React.useEffect)(function () {
    return manageOpened && setIsOpened(opened);
  }, [manageOpened, opened]);
  (0, React.useEffect)(function () {
    return manageInvalid && setIsInvalid(invalid);
  }, [manageInvalid, invalid]);

  var setDateFromProps = function setDateFromProps() {
    if ((0, _moment["default"])(value, format, true).isValid()) {
      var errors = (0, _utils.getErrorMessages)(value, format, min, max);
      invalidInput(errors, value);
      setDateValue((0, _moment["default"])(value).format(format));
    } else setDateValue(value);
  };

  var changeValue = function changeValue(e) {
    e.preventDefault();
    var input = e.nativeEvent.data;
    var newValue = (0, _utils.addCharToDate)(format, dateValue, input);
    !manageValue && setDateValue(newValue);

    if (!newValue.length) {
      onValueSet({
        value: ""
      });
      invalidInput([], "");
    } else if ((0, _moment["default"])(newValue, format, true).isValid()) {
      var errors = (0, _utils.getErrorMessages)(newValue, format, min, max);
      invalidInput(errors, newValue);
      !errors.length && onValueSet({
        value: newValue
      });
    } //onValueChange({oldValue: dateValue, input, newValue});


    onValueChange({
      input: input,
      newValue: newValue
    });
  };

  var invalidInput = (0, React.useCallback)(function () {
    var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var date = arguments.length > 1 ? arguments[1] : undefined;
    var isInvalidCurrent = errors.length > 0;
    var hasChanges = hasChanges(errors, errorMessages);

    if (!manageInvalid) {
      setIsInvalid(isInvalidCurrent);
      hasChanges && setErrorMessages(errors);
    }

    if (hasChanges || isInvalidCurrent !== isInvalid) onInvalid({
      isInvalid: isInvalidCurrent,
      errors: errors,
      date: date
    });
  }, [manageInvalid, onInvalid, isInvalid, errorMessages]);
  var dateSelected = (0, React.useCallback)(function (date) {
    var newValue = (0, _moment["default"])(date).format(format);
    var errors = (0, _utils.getErrorMessages)(newValue, format, min, max);
    invalidInput(errors, newValue);
    !manageValue && setDateValue(newValue);
    !errors.length && onValueSet({
      value: newValue
    }); //onValueChange({oldValue: dateValue, newValue});

    onValueChange({
      newValue: newValue
    });
  }, [format, min, max, manageValue, onValueChange, onValueSet, invalidInput]);
  var openCalendar = (0, React.useCallback)(function (e, onFocusClose) {
    if (!onFocusClose || isOpened) {
      var openState = isOpened;

      if (!manageOpened) {
        openState = !isOpened;
        setIsOpened(openState);
        var isValidStringDate = (0, _moment["default"])(dateValue, format).isValid();
        setDateValue(isValidStringDate ? (0, _moment["default"])(dateValue).format(format) : '');
      }

      onOpen({
        openState: openState
      });

      if (!onFocusClose && !openState) {
        var errors = (0, _utils.getErrorMessages)(dateValue, format, min, max);
        invalidInput(errors, dateValue);
      }
    }
  }, [isOpened, invalidInput, dateValue, format, min, max, onOpen]);

  var onBlur = function onBlur(e) {
    var _e$target, _e$relatedTarget, _e$relatedTarget$pare;

    var sameParent = ((_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.parentElement) === ((_e$relatedTarget = e.relatedTarget) === null || _e$relatedTarget === void 0 ? void 0 : (_e$relatedTarget$pare = _e$relatedTarget.parentElement) === null || _e$relatedTarget$pare === void 0 ? void 0 : _e$relatedTarget$pare.parentElement);

    if (!sameParent) {
      var errors = (0, _utils.getErrorMessages)(dateValue, format, min, max);
      invalidInput(errors, dateValue);
    }
  };

  (0, React.useEffect)(function () {
    return manageValue && setDateFromProps();
  }, [value]);
  (0, React.useEffect)(function () {
    setDateFromProps();

    if (inputRef !== null && inputRef !== void 0 && inputRef.current) {
      var inputEl = inputRef.current.querySelector('input');

      inputEl.onclick = function () {
        return inputEl.selectionStart = inputEl.selectionEnd = inputEl.value.length;
      };

      inputEl.onkeydown = function () {
        return setTimeout(function () {
          return inputEl.selectionStart = inputEl.selectionEnd = inputEl.value.length;
        }, 0);
      };
    }
  }, []);

  var renderInput = function renderInput() {
    var label = props.label,
        _props$message = props.message,
        message = _props$message === void 0 ? [] : _props$message,
        required = props.required,
        readonly = props.readonly,
        name = props.name,
        className = props.className;
    var allMessages = errorMessages.concat(message);
    var dateStr = dateValue.toString();
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
      label: label,
      placeholder: label ? "" : format,
      value: dateStr,
      name: name,
      manageInvalid: true,
      invalid: isInvalid,
      onInvalid: function onInvalid(e) {
        return invalidInput([e], dateValue);
      },
      onChange: changeValue,
      onFocus: function onFocus(e) {
        return openCalendar(e, true);
      },
      message: allMessages,
      required: required,
      className: className,
      onBlur: onBlur,
      readonly: readonly,
      manageValue: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"].End, {
        children: readonly ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
          className: "datepicker-button",
          icon: "calendar-event",
          variant: "tertiary",
          onClick: openCalendar
        })
      })
    });
  };

  var calendarPositions = [{
    target: "bottom-end",
    content: "top-end"
  }, {
    target: "top-end",
    content: "bottom-end"
  }, {
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
  var popoverTarget = inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.getElementsByClassName("input-group")[0];
  return visible && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: function ref(el) {
      inputRef.current = el;
      _ref = {
        el: el
      };
    },
    children: [renderInput(), popoverTarget && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
      hideTail: true,
      manageOpened: true,
      opened: isOpened,
      positions: calendarPositions,
      positionTarget: {
        current: popoverTarget
      },
      onOuterPopoverClicked: openCalendar,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SmallCalendar["default"], {
          onSelected: dateSelected,
          selectedDate: dateValue,
          manageValue: true
        })
      })
    })]
  });
});
DatePicker.defaultProps = {
  value: new Date(),
  format: "YYYY-MM-DD",
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
  onValueSet: function onValueSet() {
    return void 0;
  },
  onValueChange: function onValueChange() {
    return void 0;
  },
  visible: true
};
DatePicker.propTypes = {
  name: _propTypes["default"].string,
  label: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  min: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  max: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  format: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  readonly: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  opened: _propTypes["default"].bool,
  manageOpened: _propTypes["default"].bool,
  manageInvalid: _propTypes["default"].bool,
  manageValue: _propTypes["default"].bool,
  message: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    status: _propTypes["default"].oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
    content: _propTypes["default"].string,
    icon: _propTypes["default"].string,
    className: _propTypes["default"].object,
    iconSize: _propTypes["default"].number
  })),
  onOpen: _propTypes["default"].func,
  onInvalid: _propTypes["default"].func,
  onValueChange: _propTypes["default"].func,
  onValueSet: _propTypes["default"].func,
  visible: _propTypes["default"].bool,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
};
var _default = DatePicker;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EYXRlUGlja2VyL0RhdGVQaWNrZXIuanMiXSwibmFtZXMiOlsiRGF0ZVBpY2tlciIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwib3BlbmVkIiwidmFsdWUiLCJmb3JtYXQiLCJtaW4iLCJtYXgiLCJ2aXNpYmxlIiwiaW52YWxpZCIsIm1hbmFnZVZhbHVlIiwib25WYWx1ZUNoYW5nZSIsIm9uVmFsdWVTZXQiLCJtYW5hZ2VJbnZhbGlkIiwib25JbnZhbGlkIiwibWFuYWdlT3BlbmVkIiwib25PcGVuIiwiZGF0ZVZhbHVlIiwic2V0RGF0ZVZhbHVlIiwiaXNPcGVuZWQiLCJzZXRJc09wZW5lZCIsImlzSW52YWxpZCIsInNldElzSW52YWxpZCIsImVycm9yTWVzc2FnZXMiLCJzZXRFcnJvck1lc3NhZ2VzIiwiaW5wdXRSZWYiLCJzZXREYXRlRnJvbVByb3BzIiwiaXNWYWxpZCIsImVycm9ycyIsImludmFsaWRJbnB1dCIsImNoYW5nZVZhbHVlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJuYXRpdmVFdmVudCIsImRhdGEiLCJuZXdWYWx1ZSIsImxlbmd0aCIsImRhdGUiLCJpc0ludmFsaWRDdXJyZW50IiwiaGFzQ2hhbmdlcyIsImRhdGVTZWxlY3RlZCIsIm9wZW5DYWxlbmRhciIsIm9uRm9jdXNDbG9zZSIsIm9wZW5TdGF0ZSIsImlzVmFsaWRTdHJpbmdEYXRlIiwib25CbHVyIiwic2FtZVBhcmVudCIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJyZWxhdGVkVGFyZ2V0IiwiY3VycmVudCIsImlucHV0RWwiLCJxdWVyeVNlbGVjdG9yIiwib25jbGljayIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwib25rZXlkb3duIiwic2V0VGltZW91dCIsInJlbmRlcklucHV0IiwibGFiZWwiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJyZWFkb25seSIsIm5hbWUiLCJjbGFzc05hbWUiLCJhbGxNZXNzYWdlcyIsImNvbmNhdCIsImRhdGVTdHIiLCJ0b1N0cmluZyIsImNhbGVuZGFyUG9zaXRpb25zIiwiY29udGVudCIsInBvcG92ZXJUYXJnZXQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZWwiLCJkZWZhdWx0UHJvcHMiLCJEYXRlIiwicHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2ZUeXBlIiwib2JqZWN0IiwiYm9vbCIsImFycmF5T2YiLCJzaGFwZSIsInN0YXR1cyIsIm9uZU9mIiwiaWNvbiIsImljb25TaXplIiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLGdCQUFHQyxLQUFLLENBQUNDLFVBQU4sQ0FBaUIsVUFBQ0MsS0FBRCxFQUFRQyxJQUFSLEVBQWdCO0FBQUE7O0FBQUEsTUFHNUNDLE1BSDRDLEdBTzVDRixLQVA0QyxDQUc1Q0UsTUFINEM7QUFBQSxNQUdwQ0MsS0FIb0MsR0FPNUNILEtBUDRDLENBR3BDRyxLQUhvQztBQUFBLE1BRzdCQyxNQUg2QixHQU81Q0osS0FQNEMsQ0FHN0JJLE1BSDZCO0FBQUEsTUFHckJDLEdBSHFCLEdBTzVDTCxLQVA0QyxDQUdyQkssR0FIcUI7QUFBQSxNQUdoQkMsR0FIZ0IsR0FPNUNOLEtBUDRDLENBR2hCTSxHQUhnQjtBQUFBLE1BR1hDLE9BSFcsR0FPNUNQLEtBUDRDLENBR1hPLE9BSFc7QUFBQSxNQUdGQyxPQUhFLEdBTzVDUixLQVA0QyxDQUdGUSxPQUhFO0FBQUEsTUFJNUNDLFdBSjRDLEdBTzVDVCxLQVA0QyxDQUk1Q1MsV0FKNEM7QUFBQSxNQUkvQkMsYUFKK0IsR0FPNUNWLEtBUDRDLENBSS9CVSxhQUorQjtBQUFBLE1BSWhCQyxVQUpnQixHQU81Q1gsS0FQNEMsQ0FJaEJXLFVBSmdCO0FBQUEsTUFLNUNDLGFBTDRDLEdBTzVDWixLQVA0QyxDQUs1Q1ksYUFMNEM7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cm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9JbnB1dC9JbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCBQb3BvdmVyIGZyb20gXCIuLi9Qb3BvdmVyL1BvcG92ZXJcIjtcclxuaW1wb3J0IFNtYWxsQ2FsZW5kYXIgZnJvbSBcIi4uL1NtYWxsQ2FsZW5kYXIvU21hbGxDYWxlbmRhclwiO1xyXG5cclxuaW1wb3J0IHthZGRDaGFyVG9EYXRlLCBjb21wYXJlRXJyb3JzLCBnZXRFcnJvck1lc3NhZ2VzLCBoYXNDaGFuZ2VzfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQge2NoZWNrRGF0ZX0gZnJvbSBcIi4uL1NtYWxsQ2FsZW5kYXIvdXRpbHNcIjtcclxuXHJcbmNvbnN0IERhdGVQaWNrZXIgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG9wZW5lZCwgdmFsdWUsIGZvcm1hdCwgbWluLCBtYXgsIHZpc2libGUsIGludmFsaWQsXHJcbiAgICAgICAgbWFuYWdlVmFsdWUsIG9uVmFsdWVDaGFuZ2UsIG9uVmFsdWVTZXQsXHJcbiAgICAgICAgbWFuYWdlSW52YWxpZCwgb25JbnZhbGlkLFxyXG4gICAgICAgIG1hbmFnZU9wZW5lZCwgb25PcGVuXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgW2RhdGVWYWx1ZSwgc2V0RGF0ZVZhbHVlXSA9IHVzZVN0YXRlKG1vbWVudChjaGVja0RhdGUodmFsdWUpKS5mb3JtYXQoZm9ybWF0KSk7XHJcbiAgICBjb25zdCBbaXNPcGVuZWQsIHNldElzT3BlbmVkXSA9IHVzZVN0YXRlKG9wZW5lZCk7XHJcbiAgICBjb25zdCBbaXNJbnZhbGlkLCBzZXRJc0ludmFsaWRdID0gdXNlU3RhdGUoaW52YWxpZCk7XHJcbiAgICBjb25zdCBbZXJyb3JNZXNzYWdlcywgc2V0RXJyb3JNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IG1hbmFnZU9wZW5lZCAmJiBzZXRJc09wZW5lZChvcGVuZWQpLCBbbWFuYWdlT3BlbmVkLCBvcGVuZWRdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IG1hbmFnZUludmFsaWQgJiYgc2V0SXNJbnZhbGlkKGludmFsaWQpLCBbbWFuYWdlSW52YWxpZCwgaW52YWxpZF0pXHJcblxyXG4gICAgY29uc3Qgc2V0RGF0ZUZyb21Qcm9wcyA9ICgpID0+IHtcclxuICAgICAgICBpZihtb21lbnQodmFsdWUsIGZvcm1hdCwgdHJ1ZSkuaXNWYWxpZCgpKXtcclxuICAgICAgICAgICAgbGV0IGVycm9ycyA9IGdldEVycm9yTWVzc2FnZXModmFsdWUsIGZvcm1hdCwgbWluLCBtYXgpO1xyXG4gICAgICAgICAgICBpbnZhbGlkSW5wdXQoZXJyb3JzLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHNldERhdGVWYWx1ZShtb21lbnQodmFsdWUpLmZvcm1hdChmb3JtYXQpKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgc2V0RGF0ZVZhbHVlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VWYWx1ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBpbnB1dCA9IGUubmF0aXZlRXZlbnQuZGF0YTtcclxuICAgICAgICBsZXQgbmV3VmFsdWUgPSBhZGRDaGFyVG9EYXRlKGZvcm1hdCwgZGF0ZVZhbHVlLCBpbnB1dCk7XHJcblxyXG4gICAgICAgICFtYW5hZ2VWYWx1ZSAmJiBzZXREYXRlVmFsdWUobmV3VmFsdWUpXHJcblxyXG4gICAgICAgIGlmICghbmV3VmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG9uVmFsdWVTZXQoe3ZhbHVlOiBcIlwifSk7XHJcbiAgICAgICAgICAgIGludmFsaWRJbnB1dChbXSwgXCJcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKG1vbWVudChuZXdWYWx1ZSwgZm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCkpe1xyXG4gICAgICAgICAgICBsZXQgZXJyb3JzID0gZ2V0RXJyb3JNZXNzYWdlcyhuZXdWYWx1ZSwgZm9ybWF0LCBtaW4sIG1heCk7XHJcbiAgICAgICAgICAgIGludmFsaWRJbnB1dChlcnJvcnMsIG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICFlcnJvcnMubGVuZ3RoICYmIG9uVmFsdWVTZXQoe3ZhbHVlOiBuZXdWYWx1ZX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9vblZhbHVlQ2hhbmdlKHtvbGRWYWx1ZTogZGF0ZVZhbHVlLCBpbnB1dCwgbmV3VmFsdWV9KTtcclxuICAgICAgICBvblZhbHVlQ2hhbmdlKHtpbnB1dCwgbmV3VmFsdWV9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnZhbGlkSW5wdXQgPSB1c2VDYWxsYmFjaygoZXJyb3JzID0gW10sIGRhdGUpID0+IHtcclxuICAgICAgICBsZXQgaXNJbnZhbGlkQ3VycmVudCA9IGVycm9ycy5sZW5ndGggPiAwO1xyXG4gICAgICAgIGNvbnN0IGhhc0NoYW5nZXMgPSBoYXNDaGFuZ2VzKGVycm9ycywgZXJyb3JNZXNzYWdlcylcclxuXHJcbiAgICAgICAgaWYgKCFtYW5hZ2VJbnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHNldElzSW52YWxpZChpc0ludmFsaWRDdXJyZW50KTtcclxuICAgICAgICAgICAgaGFzQ2hhbmdlcyAmJiBzZXRFcnJvck1lc3NhZ2VzKGVycm9ycyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGFzQ2hhbmdlcyB8fCAoaXNJbnZhbGlkQ3VycmVudCAhPT0gaXNJbnZhbGlkKSlcclxuICAgICAgICAgICAgb25JbnZhbGlkKHtcclxuICAgICAgICAgICAgICAgIGlzSW52YWxpZDogaXNJbnZhbGlkQ3VycmVudCxcclxuICAgICAgICAgICAgICAgIGVycm9ycywgZGF0ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFttYW5hZ2VJbnZhbGlkLCBvbkludmFsaWQsIGlzSW52YWxpZCwgZXJyb3JNZXNzYWdlc10pXHJcblxyXG4gICAgY29uc3QgZGF0ZVNlbGVjdGVkID0gdXNlQ2FsbGJhY2soKGRhdGUpID0+IHtcclxuICAgICAgICBsZXQgbmV3VmFsdWUgPSBtb21lbnQoZGF0ZSkuZm9ybWF0KGZvcm1hdCk7XHJcblxyXG4gICAgICAgIGxldCBlcnJvcnMgPSBnZXRFcnJvck1lc3NhZ2VzKG5ld1ZhbHVlLCBmb3JtYXQsIG1pbiwgbWF4KTtcclxuICAgICAgICBpbnZhbGlkSW5wdXQoZXJyb3JzLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgIW1hbmFnZVZhbHVlICYmIHNldERhdGVWYWx1ZShuZXdWYWx1ZSk7XHJcblxyXG4gICAgICAgICFlcnJvcnMubGVuZ3RoICYmIG9uVmFsdWVTZXQoe3ZhbHVlOiBuZXdWYWx1ZX0pO1xyXG4gICAgICAgIC8vb25WYWx1ZUNoYW5nZSh7b2xkVmFsdWU6IGRhdGVWYWx1ZSwgbmV3VmFsdWV9KTtcclxuICAgICAgICBvblZhbHVlQ2hhbmdlKHtuZXdWYWx1ZX0pO1xyXG4gICAgfSwgW2Zvcm1hdCwgbWluLCBtYXgsIG1hbmFnZVZhbHVlLCBvblZhbHVlQ2hhbmdlLCBvblZhbHVlU2V0LCBpbnZhbGlkSW5wdXRdKVxyXG5cclxuICAgIGNvbnN0IG9wZW5DYWxlbmRhciA9IHVzZUNhbGxiYWNrKChlLCBvbkZvY3VzQ2xvc2UpID0+IHtcclxuICAgICAgICBpZiAoIW9uRm9jdXNDbG9zZSB8fCBpc09wZW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgb3BlblN0YXRlID0gaXNPcGVuZWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1hbmFnZU9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgb3BlblN0YXRlID0gIWlzT3BlbmVkO1xyXG4gICAgICAgICAgICAgICAgc2V0SXNPcGVuZWQob3BlblN0YXRlKVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpc1ZhbGlkU3RyaW5nRGF0ZSA9IG1vbWVudChkYXRlVmFsdWUsIGZvcm1hdCkuaXNWYWxpZCgpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0ZVZhbHVlKGlzVmFsaWRTdHJpbmdEYXRlID8gbW9tZW50KGRhdGVWYWx1ZSkuZm9ybWF0KGZvcm1hdCkgOiAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG9uT3Blbih7b3BlblN0YXRlfSlcclxuICAgICAgICAgICAgaWYgKCFvbkZvY3VzQ2xvc2UgJiYgIW9wZW5TdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVycm9ycyA9IGdldEVycm9yTWVzc2FnZXMoZGF0ZVZhbHVlLCBmb3JtYXQsIG1pbiwgbWF4KTtcclxuICAgICAgICAgICAgICAgIGludmFsaWRJbnB1dChlcnJvcnMsIGRhdGVWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgIH0sIFtpc09wZW5lZCwgaW52YWxpZElucHV0LCBkYXRlVmFsdWUsIGZvcm1hdCwgbWluLCBtYXgsIG9uT3Blbl0pXHJcblxyXG4gICAgY29uc3Qgb25CbHVyID0gKGUpID0+IHtcclxuICAgICAgICBsZXQgc2FtZVBhcmVudCA9IGUudGFyZ2V0Py5wYXJlbnRFbGVtZW50ID09PSBlLnJlbGF0ZWRUYXJnZXQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICghc2FtZVBhcmVudCkge1xyXG4gICAgICAgICAgICBsZXQgZXJyb3JzID0gZ2V0RXJyb3JNZXNzYWdlcyhkYXRlVmFsdWUsIGZvcm1hdCwgbWluLCBtYXgpO1xyXG4gICAgICAgICAgICBpbnZhbGlkSW5wdXQoZXJyb3JzLCBkYXRlVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4gbWFuYWdlVmFsdWUgJiYgc2V0RGF0ZUZyb21Qcm9wcygpLCBbdmFsdWVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldERhdGVGcm9tUHJvcHMoKTtcclxuICAgICAgICBpZihpbnB1dFJlZj8uY3VycmVudCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGlucHV0RWwgPSBpbnB1dFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGlucHV0RWwub25jbGljayA9ICgpID0+XHJcbiAgICAgICAgICAgICAgICBpbnB1dEVsLnNlbGVjdGlvblN0YXJ0ID0gaW5wdXRFbC5zZWxlY3Rpb25FbmQgPSBpbnB1dEVsLnZhbHVlLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGlucHV0RWwub25rZXlkb3duID0gKCkgPT5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsLnNlbGVjdGlvblN0YXJ0ID0gaW5wdXRFbC5zZWxlY3Rpb25FbmQgPSBpbnB1dEVsLnZhbHVlLmxlbmd0aCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgcmVuZGVySW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge2xhYmVsLCBtZXNzYWdlID0gW10sIHJlcXVpcmVkLCByZWFkb25seSwgbmFtZSwgY2xhc3NOYW1lfSA9IHByb3BzO1xyXG4gICAgICAgIGxldCBhbGxNZXNzYWdlcyA9IGVycm9yTWVzc2FnZXMuY29uY2F0KG1lc3NhZ2UpO1xyXG4gICAgICAgIGxldCBkYXRlU3RyID0gZGF0ZVZhbHVlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIHJldHVybiA8SW5wdXRcclxuICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17IGxhYmVsID8gXCJcIiA6IGZvcm1hdH1cclxuICAgICAgICAgICAgdmFsdWU9e2RhdGVTdHJ9XHJcbiAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgIG1hbmFnZUludmFsaWQ9e3RydWV9XHJcbiAgICAgICAgICAgIGludmFsaWQ9e2lzSW52YWxpZH1cclxuICAgICAgICAgICAgb25JbnZhbGlkPXsoZSkgPT4gaW52YWxpZElucHV0KFtlXSwgZGF0ZVZhbHVlKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVZhbHVlfVxyXG4gICAgICAgICAgICBvbkZvY3VzPXsoZSkgPT4gb3BlbkNhbGVuZGFyKGUsIHRydWUpfVxyXG4gICAgICAgICAgICBtZXNzYWdlPXthbGxNZXNzYWdlc31cclxuICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgb25CbHVyPXtvbkJsdXJ9XHJcbiAgICAgICAgICAgIHJlYWRvbmx5PXtyZWFkb25seX1cclxuICAgICAgICAgICAgbWFuYWdlVmFsdWU9e3RydWV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXQuRW5kPlxyXG4gICAgICAgICAgICAgICAge3JlYWRvbmx5ID8gPHNwYW4vPiA6IDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZGF0ZXBpY2tlci1idXR0b25cIn1cclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtcImNhbGVuZGFyLWV2ZW50XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJ0ZXJ0aWFyeVwifVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5DYWxlbmRhcn1cclxuICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICA8L0lucHV0LkVuZD5cclxuICAgICAgICA8L0lucHV0PlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGVuZGFyUG9zaXRpb25zID0gW1xyXG4gICAgICAgIHt0YXJnZXQ6IFwiYm90dG9tLWVuZFwiLCBjb250ZW50OiBcInRvcC1lbmRcIn0sXHJcbiAgICAgICAge3RhcmdldDogXCJ0b3AtZW5kXCIsIGNvbnRlbnQ6IFwiYm90dG9tLWVuZFwifSxcclxuICAgICAgICB7dGFyZ2V0OiBcImJvdHRvbS1jZW50ZXJcIiwgY29udGVudDogXCJ0b3AtY2VudGVyXCJ9LFxyXG4gICAgICAgIHt0YXJnZXQ6IFwidG9wLWNlbnRlclwiLCBjb250ZW50OiBcImJvdHRvbS1jZW50ZXJcIn0sXHJcbiAgICAgICAge3RhcmdldDogXCJjZW50ZXItZW5kXCIsIGNvbnRlbnQ6IFwiY2VudGVyLXN0YXJ0XCJ9LFxyXG4gICAgICAgIHt0YXJnZXQ6IFwiY2VudGVyLXN0YXJ0XCIsIGNvbnRlbnQ6IFwiY2VudGVyLWVuZFwifSxcclxuICAgIF1cclxuXHJcbiAgICBsZXQgcG9wb3ZlclRhcmdldCA9IGlucHV0UmVmPy5jdXJyZW50Py5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW5wdXQtZ3JvdXBcIilbMF1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgdmlzaWJsZSAmJlxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17IGVsID0+IHtpbnB1dFJlZi5jdXJyZW50ID0gZWw7IHJlZj17ZWx9O319PlxyXG4gICAgICAgICAgICAgICAge3JlbmRlcklucHV0KCl9XHJcbiAgICAgICAgICAgICAgICB7cG9wb3ZlclRhcmdldCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVUYWlsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VPcGVuZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lZD17aXNPcGVuZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucz17Y2FsZW5kYXJQb3NpdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uVGFyZ2V0PXt7Y3VycmVudDogcG9wb3ZlclRhcmdldH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uT3V0ZXJQb3BvdmVyQ2xpY2tlZD17b3BlbkNhbGVuZGFyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbENhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RlZD17ZGF0ZVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRGF0ZT17ZGF0ZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufSk7XHJcblxyXG5EYXRlUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHZhbHVlOiBuZXcgRGF0ZSgpLFxyXG4gICAgZm9ybWF0OiBcIllZWVktTU0tRERcIixcclxuICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIHJlYWRvbmx5OiBmYWxzZSxcclxuICAgIGludmFsaWQ6IGZhbHNlLFxyXG4gICAgb3BlbmVkOiBmYWxzZSxcclxuICAgIG1hbmFnZU9wZW5lZDogZmFsc2UsXHJcbiAgICBtYW5hZ2VJbnZhbGlkOiBmYWxzZSxcclxuICAgIG1hbmFnZVZhbHVlOiBmYWxzZSxcclxuICAgIG9uT3BlbjogKCkgPT4gdm9pZCAwLFxyXG4gICAgb25JbnZhbGlkOiAoKSA9PiB2b2lkIDAsXHJcbiAgICBvblZhbHVlU2V0OiAoKSA9PiB2b2lkIDAsXHJcbiAgICBvblZhbHVlQ2hhbmdlOiAoKSA9PiB2b2lkIDAsXHJcbiAgICB2aXNpYmxlOiB0cnVlXHJcbn1cclxuXHJcbkRhdGVQaWNrZXIucHJvcFR5cGVzID0ge1xyXG4gICAgbmFtZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5vYmplY3RdKSxcclxuXHJcbiAgICBtaW46IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5vYmplY3RdKSxcclxuICAgIG1heDogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLnN0cmluZywgcHJvcFR5cGVzLm9iamVjdF0pLFxyXG5cclxuICAgIGZvcm1hdDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlYWRvbmx5OiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGludmFsaWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgb3BlbmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZU9wZW5lZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VJbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZVZhbHVlOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1lc3NhZ2U6IHByb3BUeXBlcy5hcnJheU9mKHByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgc3RhdHVzOiBwcm9wVHlwZXMub25lT2YoW1wieWVsbG93XCIsIFwicmVkXCIsIFwiZ3JlZW5cIiwgXCJibHVlXCIsIFwiZ3JleVwiLCBcImdyZXktYmx1ZVwiXSksXHJcbiAgICAgICAgY29udGVudDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBpY29uOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBpY29uU2l6ZTogcHJvcFR5cGVzLm51bWJlclxyXG4gICAgfSkpLFxyXG4gICAgb25PcGVuOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uSW52YWxpZDogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvblZhbHVlQ2hhbmdlOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uVmFsdWVTZXQ6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgdmlzaWJsZTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjbGFzc05hbWU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5vYmplY3RdKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlUGlja2VyXHJcbiJdfQ==