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

var _RadioOption = _interopRequireDefault(require("./RadioOption.js"));

var _constants = require("./constants");

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RadioButtons = /*#__PURE__*/function (_React$Component) {
  _inherits(RadioButtons, _React$Component);

  var _super = _createSuper(RadioButtons);

  function RadioButtons(props) {
    var _this;

    _classCallCheck(this, RadioButtons);

    _this = _super.call(this, props);
    _this.optionClicked = _this.optionClicked.bind(_assertThisInitialized(_this));
    _this.state = {
      selectedValue: _this.props.value
    };
    return _this;
  }

  _createClass(RadioButtons, [{
    key: "optionClicked",
    value: function optionClicked(option) {
      var _this$props = this.props,
          manageValue = _this$props.manageValue,
          onChange = _this$props.onChange;
      if (manageValue) onChange(option);else this.setState({
        selectedValue: option.id
      });
    }
  }, {
    key: "renderValue",
    value: function renderValue(option, name) {
      var id = option.id,
          label = option.label,
          value = option.value,
          checked = option.checked,
          readonly = option.readonly,
          disabled = option.disabled;
      var isChecked = this.state.selectedValue ? this.state.selectedValue === id : checked;
      var isHorizontal = this.props.layout === _constants.RADIO_BUTTONS_LAYOUT.horizontal;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadioOption["default"], {
        id: id,
        label: label,
        value: value,
        checked: isChecked,
        readonly: readonly || this.props.readonly,
        disabled: disabled || this.props.disabled,
        required: this.props.required,
        invalid: this.props.invalid,
        name: name,
        onChangeAction: this.optionClicked,
        isHorizontal: isHorizontal
      }, id);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var selectedValue = this.props.value;
      if (this.props.manageValue && selectedValue !== this.state.selectedValue) this.setState({
        selectedValue: selectedValue
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          invalid = _this$props2.invalid,
          label = _this$props2.label,
          name = _this$props2.name,
          options = _this$props2.options,
          required = _this$props2.required;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "radio-buttons-container",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: (0, _classnames["default"])({
              "radio-buttons-header": true,
              "invalid": invalid
            }),
            children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "radio-buttons-label",
              children: label
            }), required && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "radio-buttons-required",
              children: "*"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "group-of-radio-buttons",
            children: options.map(function (option) {
              return _this2.renderValue(option, name);
            })
          })]
        })]
      });
    }
  }]);

  return RadioButtons;
}(React.Component);

;
RadioButtons.defaultProps = {
  disabled: false,
  layout: _constants.RADIO_BUTTONS_LAYOUT.vertical,
  manageValue: false,
  options: [],
  readonly: false,
  required: false
};
RadioButtons.propTypes = {
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  layout: _propTypes["default"].oneOf([_constants.RADIO_BUTTONS_LAYOUT.vertical, _constants.RADIO_BUTTONS_LAYOUT.horizontal]),
  manageValue: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    label: _propTypes["default"].string,
    value: _propTypes["default"].string,
    checked: _propTypes["default"].bool,
    readonly: _propTypes["default"].bool,
    disabled: _propTypes["default"].bool
  })),
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};
var _default = RadioButtons;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SYWRpb0J1dHRvbnMvUmFkaW9CdXR0b25zLmpzIl0sIm5hbWVzIjpbIlJhZGlvQnV0dG9ucyIsInByb3BzIiwib3B0aW9uQ2xpY2tlZCIsImJpbmQiLCJzdGF0ZSIsInNlbGVjdGVkVmFsdWUiLCJ2YWx1ZSIsIm9wdGlvbiIsIm1hbmFnZVZhbHVlIiwib25DaGFuZ2UiLCJzZXRTdGF0ZSIsImlkIiwibmFtZSIsImxhYmVsIiwiY2hlY2tlZCIsInJlYWRvbmx5IiwiZGlzYWJsZWQiLCJpc0NoZWNrZWQiLCJpc0hvcml6b250YWwiLCJsYXlvdXQiLCJSQURJT19CVVRUT05TX0xBWU9VVCIsImhvcml6b250YWwiLCJyZXF1aXJlZCIsImludmFsaWQiLCJvcHRpb25zIiwic3R5bGVzIiwibWFwIiwicmVuZGVyVmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInZlcnRpY2FsIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwiYXJyYXlPZiIsInNoYXBlIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxZOzs7OztBQUNGLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLCtCQUFyQjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxhQUFhLEVBQUUsTUFBS0osS0FBTCxDQUFXSztBQURqQixLQUFiO0FBSmU7QUFPbEI7Ozs7V0FFRCx1QkFBY0MsTUFBZCxFQUFxQjtBQUFBLHdCQUNlLEtBQUtOLEtBRHBCO0FBQUEsVUFDVk8sV0FEVSxlQUNWQSxXQURVO0FBQUEsVUFDR0MsUUFESCxlQUNHQSxRQURIO0FBRWpCLFVBQUdELFdBQUgsRUFDSUMs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RUFBRWdCLHNCQUFVQztBQU5SLEdBQWhCLENBREssQ0FUWTtBQWtCckJsQixFQUFBQSxRQUFRLEVBQUVpQixzQkFBVUMsSUFsQkM7QUFtQnJCWCxFQUFBQSxRQUFRLEVBQUVVLHNCQUFVQyxJQW5CQztBQW9CckIzQixFQUFBQSxLQUFLLEVBQUUwQixzQkFBVUUsTUFwQkk7QUFxQnJCekIsRUFBQUEsUUFBUSxFQUFFdUIsc0JBQVVNO0FBckJDLENBQXpCO2VBd0JldEMsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCJcclxuaW1wb3J0IFJhZGlvT3B0aW9uIGZyb20gXCIuL1JhZGlvT3B0aW9uLmpzXCJcclxuaW1wb3J0IHtSQURJT19CVVRUT05TX0xBWU9VVH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5jbGFzcyBSYWRpb0J1dHRvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25DbGlja2VkID0gdGhpcy5vcHRpb25DbGlja2VkLmJpbmQodGhpcykgO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWxlY3RlZFZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbkNsaWNrZWQob3B0aW9uKXtcclxuICAgICAgICBjb25zdCB7bWFuYWdlVmFsdWUsIG9uQ2hhbmdlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYobWFuYWdlVmFsdWUpXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlKG9wdGlvbilcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkVmFsdWU6IG9wdGlvbi5pZH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJWYWx1ZShvcHRpb24sIG5hbWUpe1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgY2hlY2tlZCxcclxuICAgICAgICAgICAgcmVhZG9ubHksXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgfSA9IG9wdGlvbjtcclxuXHJcbiAgICAgICAgbGV0IGlzQ2hlY2tlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZSA/IHRoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZSA9PT0gaWQgOiBjaGVja2VkXHJcbiAgICAgICAgbGV0IGlzSG9yaXpvbnRhbCA9IHRoaXMucHJvcHMubGF5b3V0ID09PSBSQURJT19CVVRUT05TX0xBWU9VVC5ob3Jpem9udGFsO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmFkaW9PcHRpb25cclxuICAgICAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgICAgICBpZCA9IHtpZH1cclxuICAgICAgICAgICAgICAgIGxhYmVsID0ge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkID0ge2lzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgIHJlYWRvbmx5ID0ge3JlYWRvbmx5IHx8IHRoaXMucHJvcHMucmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IHtkaXNhYmxlZCB8fCB0aGlzLnByb3BzLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQgPSB7dGhpcy5wcm9wcy5yZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgIGludmFsaWQgPSB7dGhpcy5wcm9wcy5pbnZhbGlkfVxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2VBY3Rpb24gPSB7dGhpcy5vcHRpb25DbGlja2VkfVxyXG4gICAgICAgICAgICAgICAgaXNIb3Jpem9udGFsID0ge2lzSG9yaXpvbnRhbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCl7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkVmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMubWFuYWdlVmFsdWUgJiYgc2VsZWN0ZWRWYWx1ZSE9PSB0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWUpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkVmFsdWU6IHNlbGVjdGVkVmFsdWV9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaW52YWxpZCxcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicmFkaW8tYnV0dG9ucy1jb250YWluZXJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJhZGlvLWJ1dHRvbnMtaGVhZGVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW52YWxpZFwiOiBpbnZhbGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT17XCJyYWRpby1idXR0b25zLWxhYmVsXCJ9PntsYWJlbH08L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkICYmIDxzcGFuIGNsYXNzTmFtZT17XCJyYWRpby1idXR0b25zLXJlcXVpcmVkXCJ9Pio8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyb3VwLW9mLXJhZGlvLWJ1dHRvbnNcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB0aGlzLnJlbmRlclZhbHVlKG9wdGlvbiwgbmFtZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5SYWRpb0J1dHRvbnMuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgbGF5b3V0OiBSQURJT19CVVRUT05TX0xBWU9VVC52ZXJ0aWNhbCxcclxuICAgIG1hbmFnZVZhbHVlOiBmYWxzZSxcclxuICAgIG9wdGlvbnM6IFtdLFxyXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxyXG4gICAgcmVxdWlyZWQ6IGZhbHNlXHJcbn07XHJcblxyXG5SYWRpb0J1dHRvbnMucHJvcFR5cGVzID0ge1xyXG4gICAgZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgaW52YWxpZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxheW91dDogcHJvcFR5cGVzLm9uZU9mKFxyXG4gICAgICAgIFtSQURJT19CVVRUT05TX0xBWU9VVC52ZXJ0aWNhbCwgUkFESU9fQlVUVE9OU19MQVlPVVQuaG9yaXpvbnRhbF1cclxuICAgICksXHJcbiAgICBtYW5hZ2VWYWx1ZTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBuYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb3B0aW9uczogcHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgICAgcHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICAgICAgaWQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgY2hlY2tlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgICAgIHJlYWRvbmx5OiBwcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sXHJcbiAgICB9KSksXHJcbiAgICByZWFkb25seTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICByZXF1aXJlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICB2YWx1ZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uQ2hhbmdlOiBwcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYWRpb0J1dHRvbnMiXX0=