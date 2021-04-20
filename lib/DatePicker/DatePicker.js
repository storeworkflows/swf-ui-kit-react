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

var invalidFormatMess = {
  content: "Invalid date format",
  icon: "exclamation-circle",
  delay: 5000
};

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
        manageInvalid = _this$props.manageInvalid,
        onInvalid = _this$props.onInvalid;
    var dateValue = value ? (0, _moment["default"])(value, format) : null;
    var isInvalidValue = value ? !dateValue.isValid() : false;
    var invalidValue = manageInvalid ? invalid : isInvalidValue;
    if (isInvalidValue) onInvalid(true);
    _this.state = {
      stringValue: dateValue && dateValue.format(format),
      currentDate: value && !isInvalidValue ? dateValue.toDate() : null,
      isOpened: opened,
      isInvalid: invalidValue,
      errorMessages: invalidValue ? [invalidFormatMess] : []
    };
    _this.inputRef = /*#__PURE__*/React.createRef();
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.renderInput = _this.renderInput.bind(_assertThisInitialized(_this));
    _this.changeValue = _this.changeValue.bind(_assertThisInitialized(_this));
    _this.openCalendar = _this.openCalendar.bind(_assertThisInitialized(_this));
    _this.dateSelected = _this.dateSelected.bind(_assertThisInitialized(_this));
    _this.invalidInput = _this.invalidInput.bind(_assertThisInitialized(_this));
    _this.checkIsInvalid = _this.checkIsInvalid.bind(_assertThisInitialized(_this));
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
          onValueChange = _this$props2.onValueChange,
          manageInvalid = _this$props2.manageInvalid,
          onValueSet = _this$props2.onValueSet,
          min = _this$props2.min,
          max = _this$props2.max;
      var stringValue = this.state.stringValue; //  if(!manageValue) {

      var newDateString = (0, _utils.addCharToDate)(format, stringValue, input);

      if ((0, _moment["default"])(newDateString, format, true).isValid()) {
        var minError = (0, _utils.getErrorOnBoundaryValue)(newDateString, min, format);
        var maxError = (0, _utils.getErrorOnBoundaryValue)(newDateString, max, format, false);

        if (minError || maxError) {
          this.invalidInput(true);
          this.setState({
            errorMessages: [minError || maxError]
          });
        } else {
          this.invalidInput(false);
          this.setState({
            currentDate: newDateString,
            errorMessages: []
          });
          onValueSet({
            value: newDateString
          });
        }
      }

      !manageValue && this.setState({
        stringValue: newDateString
      });
      onValueChange({
        oldValue: stringValue,
        input: input,
        newValue: newDateString
      }); // } else
      //    onValueChange({oldValue: stringValue, input: input});
    }
  }, {
    key: "dateSelected",
    value: function dateSelected(date) {
      var _this$props3 = this.props,
          onValueChange = _this$props3.onValueChange,
          format = _this$props3.format,
          onValueSet = _this$props3.onValueSet,
          min = _this$props3.min,
          max = _this$props3.max;
      var dateInFormat = (0, _moment["default"])(date).format(format);
      var minError = (0, _utils.getErrorOnBoundaryValue)(dateInFormat, min, format);
      var maxError = (0, _utils.getErrorOnBoundaryValue)(dateInFormat, max, format, false);

      if (minError || maxError) {
        this.invalidInput(true);
        this.setState({
          errorMessages: [minError || maxError]
        });
      } else {
        this.invalidInput(false);
        this.setState({
          currentDate: date,
          stringValue: dateInFormat,
          isOpened: false,
          errorMessages: []
        });
      }

      onValueChange({
        oldValue: this.state.stringValue,
        newValue: dateInFormat
      });
      onValueSet({
        value: dateInFormat
      });
    }
  }, {
    key: "invalidInput",
    value: function invalidInput(isInvalid) {
      var _this$props4 = this.props,
          manageInvalid = _this$props4.manageInvalid,
          onInvalid = _this$props4.onInvalid;

      if (!manageInvalid) {
        this.setState({
          isInvalid: isInvalid
        });
        if (!isInvalid) this.setState({
          errorMessages: []
        });
      }

      onInvalid(isInvalid);
    }
  }, {
    key: "openCalendar",
    value: function openCalendar(event) {
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
        this.checkIsInvalid();
        this.setState({
          isOpened: openState
        });
      }

      onOpen({
        openState: openState,
        event: event
      });
    }
  }, {
    key: "checkIsInvalid",
    value: function checkIsInvalid() {
      var _this$props6 = this.props,
          format = _this$props6.format,
          manageInvalid = _this$props6.manageInvalid,
          min = _this$props6.min,
          max = _this$props6.max;
      var stringValue = this.state.stringValue;
      var isEmptyStr = !stringValue || stringValue.length < 1;
      var isValidValue = isEmptyStr || (0, _moment["default"])(stringValue, format, true).isValid();
      var errorMessages = [];
      if (!manageInvalid && !isValidValue) errorMessages = [invalidFormatMess];else if (isValidValue) {
        var minError = (0, _utils.getErrorOnBoundaryValue)(stringValue, min, format);
        var maxError = (0, _utils.getErrorOnBoundaryValue)(stringValue, max, format, false);
        var hasError = minError || maxError;

        if (hasError) {
          isValidValue = false;
          errorMessages = [hasError];
        }
      }
      this.setState({
        errorMessages: errorMessages
      });
      this.invalidInput(!isValidValue);
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var _e$target, _e$relatedTarget, _e$relatedTarget$pare;

      var sameParent = ((_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.parentElement) === ((_e$relatedTarget = e.relatedTarget) === null || _e$relatedTarget === void 0 ? void 0 : (_e$relatedTarget$pare = _e$relatedTarget.parentElement) === null || _e$relatedTarget$pare === void 0 ? void 0 : _e$relatedTarget$pare.parentElement);
      if (!sameParent) this.checkIsInvalid();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this$props7 = this.props,
          manageInvalid = _this$props7.manageInvalid,
          manageOpened = _this$props7.manageOpened,
          manageValue = _this$props7.manageValue,
          opened = _this$props7.opened,
          invalid = _this$props7.invalid,
          value = _this$props7.value,
          format = _this$props7.format;
      var _this$state2 = this.state,
          isInvalid = _this$state2.isInvalid,
          isOpened = _this$state2.isOpened,
          stringValue = _this$state2.stringValue;
      if (manageInvalid && isInvalid !== invalid) this.invalidInput(invalid);
      if (manageOpened && opened !== isOpened) this.setState({
        isOpened: opened
      });

      if (manageValue && value !== prevProps.value) {
        var dateValue = value ? (0, _moment["default"])(value, format) : null;
        var newStr = dateValue && dateValue.format(format);
        var invalidValue = invalid || value && !manageInvalid && !dateValue.isValid();
        this.setState({
          stringValue: newStr,
          currentDate: dateValue !== null && dateValue !== void 0 && dateValue.isValid() ? dateValue.toDate() : null,
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
          return inputEl.selectionStart = inputEl.selectionEnd = _this2.state.stringValue === null ? 0 : _this2.state.stringValue.length;
        };

        inputEl.onkeydown = function (e) {
          return setTimeout(function () {
            inputEl.selectionStart = inputEl.selectionEnd = _this2.state.stringValue === null ? 0 : _this2.state.stringValue.length;
          }, 0);
        };
      }
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this3 = this;

      var _this$props8 = this.props,
          label = _this$props8.label,
          format = _this$props8.format,
          _this$props8$message = _this$props8.message,
          message = _this$props8$message === void 0 ? [] : _this$props8$message,
          required = _this$props8.required,
          name = _this$props8.name,
          className = _this$props8.className,
          min = _this$props8.min,
          max = _this$props8.max;
      var _this$state3 = this.state,
          stringValue = _this$state3.stringValue,
          isInvalid = _this$state3.isInvalid,
          errorMessages = _this$state3.errorMessages;
      var allMessages = errorMessages.concat(message);
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
        message: allMessages,
        required: required,
        className: className,
        onBlur: this.onBlur,
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

      var visible = this.props.visible;
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
      var refExist = this.inputRef && this.inputRef.current;
      return visible ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        ref: function ref(el) {
          return _this4.inputRef.current = el;
        },
        children: [this.renderInput(), refExist && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
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
      }) : null;
    }
  }]);

  return DatePicker;
}(React.Component);

DatePicker.defaultProps = {
  value: new Date(),
  format: "YYYY-MM-DD",
  required: false,
  readonly: false,
  invalid: false,
  opened: false,
  manageOpened: false,
  manageInvalid: false,
  manageValueChange: false,
  manageValueSet: false,
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
  manageValueChange: _propTypes["default"].bool,
  manageValueSet: _propTypes["default"].bool,
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