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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
    var isInvalidValue = value ? !dateValue.isValid() : false;
    var invalidValue = manageInvalid ? invalid : isInvalidValue;
    _this.state = {
      stringValue: value,
      currentDate: dateValue.isValid() ? dateValue.toDate() : null,
      isOpened: opened,
      isInvalid: invalidValue
    };
    _this.inputRef = null;
    _this.renderInput = _this.renderInput.bind(_assertThisInitialized(_this));
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
        if ((0, _moment["default"])(newDateString, format, true).isValid()) this.setState({
          currentDate: newDateString
        });
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
      if (manageOpened && opened !== isOpened) this.setState({
        isOpened: opened
      });

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
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.inputRef && this.inputRef.current) {
        var inputEl = this.inputRef.current.querySelector('input');

        inputEl.onclick = function (e) {
          return inputEl.selectionStart = inputEl.selectionEnd = _this2.state.stringValue.length;
        };

        inputEl.onkeydown = function (e) {
          return setTimeout(function () {
            inputEl.selectionStart = inputEl.selectionEnd = _this2.state.stringValue.length;
          }, 0);
        };
      }
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this3 = this;

      var _this$props7 = this.props,
          label = _this$props7.label,
          format = _this$props7.format,
          message = _this$props7.message,
          required = _this$props7.required,
          name = _this$props7.name;
      var _this$state3 = this.state,
          stringValue = _this$state3.stringValue,
          isInvalid = _this$state3.isInvalid;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
        label: label,
        placeholder: label ? "" : format,
        value: stringValue,
        name: name,
        manageInvalid: true,
        invalid: isInvalid,
        onInvalid: function onInvalid() {
          return _this3.invalidInput(true);
        },
        onChange: this.changeValue,
        message: message,
        required: required,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"].End, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
            icon: "calendar",
            variant: "tertiary",
            onClick: this.openCalendar
          })
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state4 = this.state,
          currentDate = _this$state4.currentDate,
          isOpened = _this$state4.isOpened;
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
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          ref: function ref(el) {
            return _this4.inputRef = {
              current: el
            };
          },
          children: [this.renderInput(), this.inputRef && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
            hideTail: true,
            manageOpened: true,
            opened: isOpened,
            positions: calendarPositions,
            positionTarget: this.inputRef,
            onOuterPopoverClicked: this.openCalendar,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SmallCalendar["default"], {
                onSelected: function onSelected(_ref) {
                  var date = _ref.date;
                  return _this4.dateSelected(date);
                },
                openedDate: currentDate
              })
            })
          })]
        })
      });
    }
  }]);

  return DatePicker;
}(React.Component);

DatePicker.defaultProps = {
  format: "YYYY-MM-DD",
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
  name: _propTypes["default"].string,
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
  onInvalid: _propTypes["default"].func,
  onValueChange: _propTypes["default"].func
};
var _default = DatePicker;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EYXRlUGlja2VyL0RhdGVQaWNrZXIuanMiXSwibmFtZXMiOlsiRGF0ZVBpY2tlciIsInByb3BzIiwidmFsdWUiLCJmb3JtYXQiLCJvcGVuZWQiLCJpbnZhbGlkIiwibWFuYWdlSW52YWxpZCIsImRhdGVWYWx1ZSIsImlzSW52YWxpZFZhbHVlIiwiaXNWYWxpZCIsImludmFsaWRWYWx1ZSIsInN0YXRlIiwic3RyaW5nVmFsdWUiLCJjdXJyZW50RGF0ZSIsInRvRGF0ZSIsImlzT3BlbmVkIiwiaXNJbnZhbGlkIiwiaW5wdXRSZWYiLCJyZW5kZXJJbnB1dCIsImJpbmQiLCJjaGFuZ2VWYWx1ZSIsIm9wZW5DYWxlbmRhciIsImRhdGVTZWxlY3RlZCIsImludmFsaWRJbnB1dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwibmF0aXZlRXZlbnQiLCJkYXRhIiwibWFuYWdlVmFsdWUiLCJvblZhbHVlQ2hhbmdlIiwib2xkVmFsdWUiLCJuZXdEYXRlU3RyaW5nIiwic2V0U3RhdGUiLCJkYXRlIiwiZGF0ZUluRm9ybWF0IiwibmV3VmFsdWUiLCJvbkludmFsaWQiLCJtYW5hZ2VPcGVuZWQiLCJvbk9wZW4iLCJvcGVuU3RhdGUiLCJpc1ZhbGlkU3RyaW5nRGF0ZSIsImN1cnJlbnQiLCJpbnB1dEVsIiwicXVlcnlTZWxlY3RvciIsIm9uY2xpY2siLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsImxlbmd0aCIsIm9ua2V5ZG93biIsInNldFRpbWVvdXQiLCJsYWJlbCIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsIm5hbWUiLCJjYWxlbmRhclBvc2l0aW9ucyIsInRhcmdldCIsImNvbnRlbnQiLCJlbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicmVhZG9ubHkiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiYXJyYXlPZiIsInNoYXBlIiwic3RhdHVzIiwib25lT2YiLCJpY29uIiwiZnVuYyJdLCJtYXBwaW5n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RWtDLHNCQUFVRSxJQVhKO0FBWW5CYixFQUFBQSxPQUFPLEVBQUVXLHNCQUFVRyxPQUFWLENBQWtCSCxzQkFBVUksS0FBVixDQUFnQjtBQUN2Q0MsSUFBQUEsTUFBTSxFQUFFTCxzQkFBVU0sS0FBVixDQUFnQixDQUFDLFVBQUQsRUFBYSxTQUFiLEVBQXdCLFVBQXhCLEVBQW9DLE1BQXBDLEVBQTRDLFlBQTVDLENBQWhCLENBRCtCO0FBRXZDWixJQUFBQSxPQUFPLEVBQUVNLHNCQUFVQyxNQUZvQjtBQUd2Q00sSUFBQUEsSUFBSSxFQUFFUCxzQkFBVUM7QUFIdUIsR0FBaEIsQ0FBbEIsQ0FaVTtBQWlCbkJ6QixFQUFBQSxNQUFNLEVBQUV3QixzQkFBVVEsSUFqQkM7QUFrQm5CbEMsRUFBQUEsU0FBUyxFQUFFMEIsc0JBQVVRLElBbEJGO0FBbUJuQnpDLEVBQUFBLGFBQWEsRUFBRWlDLHNCQUFVUTtBQW5CTixDQUF2QjtlQXNCZXZFLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vSW5wdXQvSW5wdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgUG9wb3ZlciBmcm9tIFwiLi4vUG9wb3Zlci9Qb3BvdmVyXCI7XHJcbmltcG9ydCBTbWFsbENhbGVuZGFyIGZyb20gXCIuLi9TbWFsbENhbGVuZGFyL1NtYWxsQ2FsZW5kYXJcIjtcclxuXHJcbmltcG9ydCB7YWRkQ2hhclRvRGF0ZX0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGNvbnN0IHt2YWx1ZSwgZm9ybWF0LCBvcGVuZWQsIGludmFsaWQsIG1hbmFnZUludmFsaWR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IGRhdGVWYWx1ZSA9IG1vbWVudCh2YWx1ZSwgZm9ybWF0KTtcclxuICAgICAgICBsZXQgaXNJbnZhbGlkVmFsdWUgPSAodmFsdWUpID8gIWRhdGVWYWx1ZS5pc1ZhbGlkKCkgOiBmYWxzZTtcclxuICAgICAgICBsZXQgaW52YWxpZFZhbHVlID0gbWFuYWdlSW52YWxpZCA/IGludmFsaWQgOiBpc0ludmFsaWRWYWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc3RyaW5nVmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICBjdXJyZW50RGF0ZTogZGF0ZVZhbHVlLmlzVmFsaWQoKSA/IGRhdGVWYWx1ZS50b0RhdGUoKSA6IG51bGwsXHJcbiAgICAgICAgICAgIGlzT3BlbmVkOiBvcGVuZWQsXHJcbiAgICAgICAgICAgIGlzSW52YWxpZDogaW52YWxpZFZhbHVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlucHV0UmVmID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJJbnB1dCA9IHRoaXMucmVuZGVySW5wdXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVZhbHVlID0gdGhpcy5jaGFuZ2VWYWx1ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub3BlbkNhbGVuZGFyID0gdGhpcy5vcGVuQ2FsZW5kYXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRhdGVTZWxlY3RlZCA9IHRoaXMuZGF0ZVNlbGVjdGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkSW5wdXQgPSB0aGlzLmludmFsaWRJbnB1dC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVZhbHVlKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgaW5wdXQgPSBlLm5hdGl2ZUV2ZW50LmRhdGE7XHJcbiAgICAgICAgY29uc3Qge2Zvcm1hdCwgbWFuYWdlVmFsdWUsIG9uVmFsdWVDaGFuZ2V9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7c3RyaW5nVmFsdWV9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgb25WYWx1ZUNoYW5nZSh7b2xkVmFsdWU6IHN0cmluZ1ZhbHVlLCBpbnB1dDogaW5wdXR9KTtcclxuXHJcbiAgICAgICAgaWYoIW1hbmFnZVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdEYXRlU3RyaW5nID0gYWRkQ2hhclRvRGF0ZShmb3JtYXQsIHN0cmluZ1ZhbHVlLCBpbnB1dCk7XHJcblxyXG4gICAgICAgICAgICBpZihtb21lbnQobmV3RGF0ZVN0cmluZywgZm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50RGF0ZTogbmV3RGF0ZVN0cmluZ30pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdHJpbmdWYWx1ZTogbmV3RGF0ZVN0cmluZ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGVTZWxlY3RlZChkYXRlKXtcclxuICAgICAgICBjb25zdCB7bWFuYWdlVmFsdWUsIG9uVmFsdWVDaGFuZ2V9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgZGF0ZUluRm9ybWF0ID0gIG1vbWVudChkYXRlKS5mb3JtYXQodGhpcy5wcm9wcy5mb3JtYXQpO1xyXG5cclxuICAgICAgICBpZighbWFuYWdlVmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvblZhbHVlQ2hhbmdlKHtvbGRWYWx1ZTogdGhpcy5zdGF0ZS5zdHJpbmdWYWx1ZSwgbmV3VmFsdWU6IGRhdGVJbkZvcm1hdH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlOiBkYXRlLFxyXG4gICAgICAgICAgICAgICAgc3RyaW5nVmFsdWU6IGRhdGVJbkZvcm1hdFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnZhbGlkSW5wdXQoaXNJbnZhbGlkKXtcclxuICAgICAgICBjb25zdCB7bWFuYWdlSW52YWxpZCwgb25JbnZhbGlkfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmKCFtYW5hZ2VJbnZhbGlkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0ludmFsaWQ6IGlzSW52YWxpZH0pO1xyXG4gICAgICAgIG9uSW52YWxpZChpc0ludmFsaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5DYWxlbmRhcigpe1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VPcGVuZWQsIG9uT3BlbiwgZm9ybWF0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge2lzT3BlbmVkLCBzdHJpbmdWYWx1ZX0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBsZXQgb3BlblN0YXRlID0gaXNPcGVuZWQ7XHJcbiAgICAgICAgbGV0IGlzVmFsaWRTdHJpbmdEYXRlID0gbW9tZW50KHN0cmluZ1ZhbHVlLCBmb3JtYXQpLmlzVmFsaWQoKTtcclxuXHJcbiAgICAgICAgaWYoIW1hbmFnZU9wZW5lZCkge1xyXG4gICAgICAgICAgICBvcGVuU3RhdGUgPSAhb3BlblN0YXRlO1xyXG5cclxuICAgICAgICAgICAgaWYoaXNWYWxpZFN0cmluZ0RhdGUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50RGF0ZTogbW9tZW50KHN0cmluZ1ZhbHVlLCBmb3JtYXQpLnRvRGF0ZSgpfSlcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ1ZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc09wZW5lZDogb3BlblN0YXRlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbk9wZW4ob3BlblN0YXRlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICBjb25zdCB7bWFuYWdlSW52YWxpZCwgbWFuYWdlT3BlbmVkLCBtYW5hZ2VWYWx1ZSwgb3BlbmVkLCBpbnZhbGlkLCB2YWx1ZSwgZm9ybWF0fSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7aXNJbnZhbGlkLCBpc09wZW5lZCwgc3RyaW5nVmFsdWV9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYobWFuYWdlSW52YWxpZCAmJiBpc0ludmFsaWQgIT09IGludmFsaWQpXHJcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZElucHV0KGludmFsaWQpXHJcblxyXG4gICAgICAgIGlmKG1hbmFnZU9wZW5lZCAmJiBvcGVuZWQhPT1pc09wZW5lZClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNPcGVuZWQ6IG9wZW5lZH0pO1xyXG5cclxuICAgICAgICBpZihtYW5hZ2VWYWx1ZSAmJiB2YWx1ZSE9PXN0cmluZ1ZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRhdGVWYWx1ZSA9IG1vbWVudCh2YWx1ZSwgZm9ybWF0KTtcclxuICAgICAgICAgICAgbGV0IGludmFsaWRWYWx1ZSA9IGludmFsaWQgfHwgKCB2YWx1ZSAmJiAhbWFuYWdlSW52YWxpZCAmJiAhZGF0ZVZhbHVlLmlzVmFsaWQoKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHN0cmluZ1ZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlOiBkYXRlVmFsdWUuaXNWYWxpZCgpID8gZGF0ZVZhbHVlLnRvRGF0ZSgpIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGludmFsaWQ6IGludmFsaWRWYWx1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYodGhpcy5pbnB1dFJlZiAmJiB0aGlzLmlucHV0UmVmLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICBsZXQgaW5wdXRFbCA9IHRoaXMuaW5wdXRSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnB1dEVsLm9uY2xpY2sgPSAoZSkgPT5cclxuICAgICAgICAgICAgICAgIGlucHV0RWwuc2VsZWN0aW9uU3RhcnQgPSBpbnB1dEVsLnNlbGVjdGlvbkVuZCA9IHRoaXMuc3RhdGUuc3RyaW5nVmFsdWUubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgaW5wdXRFbC5vbmtleWRvd24gPSAoZSkgPT5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PnsgaW5wdXRFbC5zZWxlY3Rpb25TdGFydCA9IGlucHV0RWwuc2VsZWN0aW9uRW5kID0gdGhpcy5zdGF0ZS5zdHJpbmdWYWx1ZS5sZW5ndGg7IH0sIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJJbnB1dCgpe1xyXG4gICAgICAgIGNvbnN0IHtsYWJlbCwgZm9ybWF0LCBtZXNzYWdlLCByZXF1aXJlZCwgbmFtZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtzdHJpbmdWYWx1ZSwgaXNJbnZhbGlkfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17KGxhYmVsKSA/IFwiXCIgOiBmb3JtYXR9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RyaW5nVmFsdWV9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgbWFuYWdlSW52YWxpZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGludmFsaWQgPSB7aXNJbnZhbGlkfVxyXG4gICAgICAgICAgICAgICAgb25JbnZhbGlkPXsoKSA9PiB0aGlzLmludmFsaWRJbnB1dCh0cnVlKX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IHttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQuRW5kPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17XCJjYWxlbmRhclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtcInRlcnRpYXJ5XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub3BlbkNhbGVuZGFyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0LkVuZD5cclxuICAgICAgICAgICAgPC9JbnB1dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7Y3VycmVudERhdGUsIGlzT3BlbmVkfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgY29uc3QgY2FsZW5kYXJQb3NpdGlvbnMgPSBbXHJcbiAgICAgICAgICAgIHt0YXJnZXQ6IFwiYm90dG9tLWVuZFwiLCBjb250ZW50OiBcInRvcC1lbmRcIn0sXHJcbiAgICAgICAgICAgIHt0YXJnZXQ6IFwidG9wLWVuZFwiLCBjb250ZW50OiBcImJvdHRvbS1lbmRcIn0sXHJcbiAgICAgICAgICAgIHt0YXJnZXQ6IFwiYm90dG9tLWNlbnRlclwiLCBjb250ZW50OiBcInRvcC1jZW50ZXJcIn0sXHJcbiAgICAgICAgICAgIHt0YXJnZXQ6IFwidG9wLWNlbnRlclwiLCBjb250ZW50OiBcImJvdHRvbS1jZW50ZXJcIn0sXHJcbiAgICAgICAgICAgIHt0YXJnZXQ6IFwiY2VudGVyLWVuZFwiLCBjb250ZW50OiBcImNlbnRlci1zdGFydFwifSxcclxuICAgICAgICAgICAge3RhcmdldDogXCJjZW50ZXItc3RhcnRcIiwgY29udGVudDogXCJjZW50ZXItZW5kXCJ9LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmID0ge2VsID0+IHRoaXMuaW5wdXRSZWYgPSB7Y3VycmVudDogZWx9fT5cclxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVySW5wdXQoKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLmlucHV0UmVmICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlVGFpbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZU9wZW5lZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lZD17aXNPcGVuZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnM9e2NhbGVuZGFyUG9zaXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25UYXJnZXQ9e3RoaXMuaW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk91dGVyUG9wb3ZlckNsaWNrZWQ9e3RoaXMub3BlbkNhbGVuZGFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wb3Zlci5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbENhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0ZWQ9eyh7ZGF0ZX0pID0+IHRoaXMuZGF0ZVNlbGVjdGVkKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuZWREYXRlPXtjdXJyZW50RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5EYXRlUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGZvcm1hdDogXCJZWVlZLU1NLUREXCIsXHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIHJlYWRvbmx5OiBmYWxzZSxcclxuICAgIGludmFsaWQ6IGZhbHNlLFxyXG4gICAgb3BlbmVkOiBmYWxzZSxcclxuICAgIG1hbmFnZU9wZW5lZDogZmFsc2UsXHJcbiAgICBtYW5hZ2VJbnZhbGlkOiBmYWxzZSxcclxuICAgIG1hbmFnZVZhbHVlOiBmYWxzZSxcclxuICAgIG9uT3BlbjogKCkgPT4gdm9pZCAwLFxyXG4gICAgb25JbnZhbGlkOiAoKSA9PiB2b2lkIDAsXHJcbiAgICBvblZhbHVlQ2hhbmdlOiAoKSA9PiB2b2lkIDBcclxufVxyXG5cclxuRGF0ZVBpY2tlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBuYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB2YWx1ZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGZvcm1hdDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlYWRvbmx5OiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGludmFsaWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgb3BlbmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZU9wZW5lZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VJbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZVZhbHVlOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1lc3NhZ2U6IHByb3BUeXBlcy5hcnJheU9mKHByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgc3RhdHVzOiBwcm9wVHlwZXMub25lT2YoW1wiY3JpdGljYWxcIiwgXCJ3YXJuaW5nXCIsIFwicG9zaXRpdmVcIiwgXCJpbmZvXCIsIFwic3VnZ2VzdGlvblwiXSksXHJcbiAgICAgICAgY29udGVudDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBpY29uOiBwcm9wVHlwZXMuc3RyaW5nXHJcbiAgICB9KSksXHJcbiAgICBvbk9wZW46IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25JbnZhbGlkOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uVmFsdWVDaGFuZ2U6IHByb3BUeXBlcy5mdW5jLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlUGlja2VyXHJcbiJdfQ==