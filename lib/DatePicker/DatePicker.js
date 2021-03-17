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
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
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
            hideTail: true // manageOpened={true}
            ,
            opened: isOpened,
            positions: calendarPositions,
            positionTarget: this.inputRef,
            onOuterPopoverClicked: function onOuterPopoverClicked() {
              return _this2.openCalendar();
            },
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
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EYXRlUGlja2VyL0RhdGVQaWNrZXIuanMiXSwibmFtZXMiOlsiRGF0ZVBpY2tlciIsInByb3BzIiwidmFsdWUiLCJmb3JtYXQiLCJvcGVuZWQiLCJpbnZhbGlkIiwibWFuYWdlSW52YWxpZCIsImRhdGVWYWx1ZSIsImludmFsaWRWYWx1ZSIsImlzVmFsaWQiLCJzdGF0ZSIsInN0cmluZ1ZhbHVlIiwiY3VycmVudERhdGUiLCJ0b0RhdGUiLCJpc09wZW5lZCIsImlzSW52YWxpZCIsImlucHV0UmVmIiwiY2hhbmdlVmFsdWUiLCJiaW5kIiwib3BlbkNhbGVuZGFyIiwiZGF0ZVNlbGVjdGVkIiwiaW52YWxpZElucHV0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJuYXRpdmVFdmVudCIsImRhdGEiLCJtYW5hZ2VWYWx1ZSIsIm9uVmFsdWVDaGFuZ2UiLCJvbGRWYWx1ZSIsIm5ld0RhdGVTdHJpbmciLCJzZXRTdGF0ZSIsImRhdGUiLCJkYXRlSW5Gb3JtYXQiLCJuZXdWYWx1ZSIsIm9uSW52YWxpZCIsIm1hbmFnZU9wZW5lZCIsIm9uT3BlbiIsIm9wZW5TdGF0ZSIsImlzVmFsaWRTdHJpbmdEYXRlIiwibGFiZWwiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJjYWxlbmRhclBvc2l0aW9ucyIsInRhcmdldCIsImNvbnRlbnQiLCJlbCIsImN1cnJlbnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsInJlYWRvbmx5IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImFycmF5T2YiLCJzaGFwZSIsInN0YXR1cyIsIm9uZU9mIiwiaWNvbiIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVTs7Ozs7QUFFRixzQkFBWUMsS0FBWixFQUFt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QkFBVUM7QUFIdUIsR0FBaEIsQ0FBbEIsQ0FYVTtBQWdCbkJqQixFQUFBQSxNQUFNLEVBQUVnQixzQkFBVVEsSUFoQkM7QUFpQm5CMUIsRUFBQUEsU0FBUyxFQUFFa0IscUJBakJRO0FBa0JuQnpCLEVBQUFBLGFBQWEsRUFBRXlCLHNCQUFVUTtBQWxCTixDQUF2QjtlQXFCZTdELFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vSW5wdXQvSW5wdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgUG9wb3ZlciBmcm9tIFwiLi4vUG9wb3Zlci9Qb3BvdmVyXCI7XHJcbmltcG9ydCBTbWFsbENhbGVuZGFyIGZyb20gXCIuLi9TbWFsbENhbGVuZGFyL1NtYWxsQ2FsZW5kYXJcIjtcclxuXHJcbmltcG9ydCB7YWRkQ2hhclRvRGF0ZX0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGNvbnN0IHt2YWx1ZSwgZm9ybWF0LCBvcGVuZWQsIGludmFsaWQsIG1hbmFnZUludmFsaWR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IGRhdGVWYWx1ZSA9IG1vbWVudCh2YWx1ZSwgZm9ybWF0KTtcclxuICAgICAgICBsZXQgaW52YWxpZFZhbHVlID0gaW52YWxpZCB8fCAoIHZhbHVlICYmICFtYW5hZ2VJbnZhbGlkICYmICFkYXRlVmFsdWUuaXNWYWxpZCgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc3RyaW5nVmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICBjdXJyZW50RGF0ZTogZGF0ZVZhbHVlLmlzVmFsaWQoKSA/IGRhdGVWYWx1ZS50b0RhdGUoKSA6IG51bGwsXHJcbiAgICAgICAgICAgIGlzT3BlbmVkOiBvcGVuZWQsXHJcbiAgICAgICAgICAgIGlzSW52YWxpZDogaW52YWxpZFZhbHVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlucHV0UmVmID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSA9IHRoaXMuY2hhbmdlVmFsdWUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9wZW5DYWxlbmRhciA9IHRoaXMub3BlbkNhbGVuZGFyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kYXRlU2VsZWN0ZWQgPSB0aGlzLmRhdGVTZWxlY3RlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW52YWxpZElucHV0ID0gdGhpcy5pbnZhbGlkSW5wdXQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VWYWx1ZShlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gZS5uYXRpdmVFdmVudC5kYXRhO1xyXG4gICAgICAgIGNvbnN0IHtmb3JtYXQsIG1hbmFnZVZhbHVlLCBvblZhbHVlQ2hhbmdlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge3N0cmluZ1ZhbHVlfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIG9uVmFsdWVDaGFuZ2Uoe29sZFZhbHVlOiBzdHJpbmdWYWx1ZSwgaW5wdXQ6IGlucHV0fSk7XHJcblxyXG4gICAgICAgIGlmKCFtYW5hZ2VWYWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgbmV3RGF0ZVN0cmluZyA9IGFkZENoYXJUb0RhdGUoZm9ybWF0LCBzdHJpbmdWYWx1ZSwgaW5wdXQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdHJpbmdWYWx1ZTogbmV3RGF0ZVN0cmluZ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGVTZWxlY3RlZChkYXRlKXtcclxuICAgICAgICBjb25zdCB7bWFuYWdlVmFsdWUsIG9uVmFsdWVDaGFuZ2V9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgZGF0ZUluRm9ybWF0ID0gIG1vbWVudChkYXRlKS5mb3JtYXQodGhpcy5wcm9wcy5mb3JtYXQpO1xyXG5cclxuICAgICAgICBpZighbWFuYWdlVmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvblZhbHVlQ2hhbmdlKHtvbGRWYWx1ZTogdGhpcy5zdGF0ZS5zdHJpbmdWYWx1ZSwgbmV3VmFsdWU6IGRhdGVJbkZvcm1hdH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlOiBkYXRlLFxyXG4gICAgICAgICAgICAgICAgc3RyaW5nVmFsdWU6IGRhdGVJbkZvcm1hdFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnZhbGlkSW5wdXQoaXNJbnZhbGlkKXtcclxuICAgICAgICBjb25zdCB7bWFuYWdlSW52YWxpZCwgb25JbnZhbGlkfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmKCFtYW5hZ2VJbnZhbGlkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0ludmFsaWQ6IGlzSW52YWxpZH0pO1xyXG4gICAgICAgIG9uSW52YWxpZChpc0ludmFsaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5DYWxlbmRhcigpe1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VPcGVuZWQsIG9uT3BlbiwgZm9ybWF0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge2lzT3BlbmVkLCBzdHJpbmdWYWx1ZX0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBsZXQgb3BlblN0YXRlID0gaXNPcGVuZWQ7XHJcbiAgICAgICAgbGV0IGlzVmFsaWRTdHJpbmdEYXRlID0gbW9tZW50KHN0cmluZ1ZhbHVlLCBmb3JtYXQpLmlzVmFsaWQoKTtcclxuXHJcbiAgICAgICAgaWYoIW1hbmFnZU9wZW5lZCkge1xyXG4gICAgICAgICAgICBvcGVuU3RhdGUgPSAhb3BlblN0YXRlO1xyXG5cclxuICAgICAgICAgICAgaWYoaXNWYWxpZFN0cmluZ0RhdGUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50RGF0ZTogbW9tZW50KHN0cmluZ1ZhbHVlLCBmb3JtYXQpLnRvRGF0ZSgpfSlcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ1ZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc09wZW5lZDogb3BlblN0YXRlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbk9wZW4ob3BlblN0YXRlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICBjb25zdCB7bWFuYWdlSW52YWxpZCwgbWFuYWdlT3BlbmVkLCBtYW5hZ2VWYWx1ZSwgb3BlbmVkLCBpbnZhbGlkLCB2YWx1ZSwgZm9ybWF0fSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7aXNJbnZhbGlkLCBpc09wZW5lZCwgc3RyaW5nVmFsdWV9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYobWFuYWdlSW52YWxpZCAmJiBpc0ludmFsaWQgIT09IGludmFsaWQpXHJcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZElucHV0KGludmFsaWQpXHJcbiAgICAgICAgaWYobWFuYWdlT3BlbmVkICYmIG9wZW5lZCE9PWlzT3BlbmVkKVxyXG4gICAgICAgICAgICB0aGlzLm9wZW5DYWxlbmRhcigpO1xyXG4gICAgICAgIGlmKG1hbmFnZVZhbHVlICYmIHZhbHVlIT09c3RyaW5nVmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZVZhbHVlID0gbW9tZW50KHZhbHVlLCBmb3JtYXQpO1xyXG4gICAgICAgICAgICBsZXQgaW52YWxpZFZhbHVlID0gaW52YWxpZCB8fCAoIHZhbHVlICYmICFtYW5hZ2VJbnZhbGlkICYmICFkYXRlVmFsdWUuaXNWYWxpZCgpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nVmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudERhdGU6IGRhdGVWYWx1ZS5pc1ZhbGlkKCkgPyBkYXRlVmFsdWUudG9EYXRlKCkgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgaW52YWxpZDogaW52YWxpZFZhbHVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtsYWJlbCwgZm9ybWF0LCBtZXNzYWdlLCByZXF1aXJlZH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtzdHJpbmdWYWx1ZSwgY3VycmVudERhdGUsIGlzT3BlbmVkLCBpc0ludmFsaWR9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgICAgICBjb25zdCBjYWxlbmRhclBvc2l0aW9ucyA9IFtcclxuICAgICAgICAgICAge3RhcmdldDogXCJib3R0b20tY2VudGVyXCIsIGNvbnRlbnQ6IFwidG9wLWNlbnRlclwifSxcclxuICAgICAgICAgICAge3RhcmdldDogXCJ0b3AtY2VudGVyXCIsIGNvbnRlbnQ6IFwiYm90dG9tLWNlbnRlclwifSxcclxuICAgICAgICAgICAge3RhcmdldDogXCJjZW50ZXItZW5kXCIsIGNvbnRlbnQ6IFwiY2VudGVyLXN0YXJ0XCJ9LFxyXG4gICAgICAgICAgICB7dGFyZ2V0OiBcImNlbnRlci1zdGFydFwiLCBjb250ZW50OiBcImNlbnRlci1lbmRcIn0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWYgPSB7ZWwgPT4gdGhpcy5pbnB1dFJlZiA9IHtjdXJyZW50OiBlbH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmb3JtYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHJpbmdWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlSW52YWxpZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZCA9IHtpc0ludmFsaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW52YWxpZD17KCkgPT4gdGhpcy5pbnZhbGlkSW5wdXQodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5jaGFuZ2VWYWx1ZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IHttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuRW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e1wiY2FsZW5kYXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtcInRlcnRpYXJ5XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vcGVuQ2FsZW5kYXIoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXQuRW5kPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLmlucHV0UmVmICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlVGFpbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZU9wZW5lZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lZD17aXNPcGVuZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnM9e2NhbGVuZGFyUG9zaXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25UYXJnZXQ9e3RoaXMuaW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNtYWxsQ2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RlZD17KHtkYXRlfSkgPT4gdGhpcy5kYXRlU2VsZWN0ZWQoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lZERhdGU9e2N1cnJlbnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbkRhdGVQaWNrZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgbGFiZWw6IHVuZGVmaW5lZCxcclxuICAgIGZvcm1hdDogXCJNTS5ERC5ZWVlZXCIsXHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIHJlYWRvbmx5OiBmYWxzZSxcclxuICAgIGludmFsaWQ6IGZhbHNlLFxyXG4gICAgb3BlbmVkOiBmYWxzZSxcclxuICAgIG1hbmFnZU9wZW5lZDogZmFsc2UsXHJcbiAgICBtYW5hZ2VJbnZhbGlkOiBmYWxzZSxcclxuICAgIG1hbmFnZVZhbHVlOiBmYWxzZSxcclxuICAgIG9uT3BlbjogKCkgPT4gdm9pZCAwLFxyXG4gICAgb25JbnZhbGlkOiAoKSA9PiB2b2lkIDAsXHJcbiAgICBvblZhbHVlQ2hhbmdlOiAoKSA9PiB2b2lkIDBcclxufVxyXG5cclxuRGF0ZVBpY2tlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHZhbHVlOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZm9ybWF0OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVhZG9ubHk6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgaW52YWxpZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZUludmFsaWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlVmFsdWU6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWVzc2FnZTogcHJvcFR5cGVzLmFycmF5T2YocHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBzdGF0dXM6IHByb3BUeXBlcy5vbmVPZihbXCJjcml0aWNhbFwiLCBcIndhcm5pbmdcIiwgXCJwb3NpdGl2ZVwiLCBcImluZm9cIiwgXCJzdWdnZXN0aW9uXCJdKSxcclxuICAgICAgICBjb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGljb246IHByb3BUeXBlcy5zdHJpbmdcclxuICAgIH0pKSxcclxuICAgIG9uT3BlbjogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkludmFsaWQ6IHByb3BUeXBlcyxcclxuICAgIG9uVmFsdWVDaGFuZ2U6IHByb3BUeXBlcy5mdW5jLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlUGlja2VyXHJcbiJdfQ==