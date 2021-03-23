"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RadioButtons = /*#__PURE__*/function (_React$Component) {
  _inherits(RadioButtons, _React$Component);

  var _super = _createSuper(RadioButtons);

  function RadioButtons(props) {
    var _this;

    _classCallCheck(this, RadioButtons);

    _this = _super.call(this, props);
    _this.optionClicked = _this.optionClicked.bind(_assertThisInitialized(_this));
    _this.optionInvalid = _this.optionInvalid.bind(_assertThisInitialized(_this));
    _this.state = {
      selectedValue: _this.props.value,
      isInvalid: _this.props.invalid
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
    key: "optionInvalid",
    value: function optionInvalid() {
      var _this$props2 = this.props,
          manageInvalid = _this$props2.manageInvalid,
          onInvalid = _this$props2.onInvalid;
      if (manageInvalid) onInvalid();else this.setState({
        isInvalid: true
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
        invalid: this.state.isInvalid,
        name: name,
        onChangeAction: this.optionClicked,
        onInvalidAction: this.optionInvalid,
        isHorizontal: isHorizontal
      }, id);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          invalid = _this$props3.invalid,
          manageValue = _this$props3.manageValue,
          manageInvalid = _this$props3.manageInvalid;
      if (manageValue && value !== this.state.selectedValue) this.setState({
        selectedValue: value
      });
      if (manageInvalid && invalid !== this.state.isInvalid) this.setState({
        isInvalid: invalid
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          label = _this$props4.label,
          name = _this$props4.name,
          options = _this$props4.options,
          required = _this$props4.required;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "radio-buttons-container",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: (0, _classnames["default"])({
              "radio-buttons-header": true,
              "invalid": this.state.isInvalid
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
        })
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
  required: false,
  manageInvalid: false
};
RadioButtons.propTypes = {
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  layout: _propTypes["default"].oneOf([_constants.RADIO_BUTTONS_LAYOUT.vertical, _constants.RADIO_BUTTONS_LAYOUT.horizontal]),
  manageValue: _propTypes["default"].bool,
  manageInvalid: _propTypes["default"].bool,
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
  onChange: _propTypes["default"].func,
  onInvalid: _propTypes["default"].func
};
var _default = RadioButtons;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SYWRpb0J1dHRvbnMvUmFkaW9CdXR0b25zLmpzIl0sIm5hbWVzIjpbIlJhZGlvQnV0dG9ucyIsInByb3BzIiwib3B0aW9uQ2xpY2tlZCIsImJpbmQiLCJvcHRpb25JbnZhbGlkIiwic3RhdGUiLCJzZWxlY3RlZFZhbHVlIiwidmFsdWUiLCJpc0ludmFsaWQiLCJpbnZhbGlkIiwib3B0aW9uIiwibWFuYWdlVmFsdWUiLCJvbkNoYW5nZSIsInNldFN0YXRlIiwiaWQiLCJtYW5hZ2VJbnZhbGlkIiwib25JbnZhbGlkIiwibmFtZSIsImxhYmVsIiwiY2hlY2tlZCIsInJlYWRvbmx5IiwiZGlzYWJsZWQiLCJpc0NoZWNrZWQiLCJpc0hvcml6b250YWwiLCJsYXlvdXQiLCJSQURJT19CVVRUT05TX0xBWU9VVCIsImhvcml6b250YWwiLCJyZXF1aXJlZCIsIm9wdGlvbnMiLCJtYXAiLCJyZW5kZXJWYWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwidmVydGljYWwiLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib25lT2YiLCJhcnJheU9mIiwic2hhcGUiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFk7Ozs7O0FBQ0Ysd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsK0JBQXJCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQiwrQkFBckI7QUFFQSxVQUFLRSxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsYUFBYSxFQUFFLE1BQUtMLEtBQUwsQ0FBV00sS0FEakI7QUFFVEMsTUFBQUEsU0FBUyxFQUFFLE1BQUtQLEtBQUwsQ0FBV1E7QUFGYixLQUFi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QjNCLEVBQUFBLE9BQU8sRUFBRTBCLHNCQUFVQyxJQUZFO0FBR3JCbEIsRUFBQUEsS0FBSyxFQUFFaUIsc0JBQVVFLE1BSEk7QUFJckJiLEVBQUFBLE1BQU0sRUFBRVcsc0JBQVVHLEtBQVYsQ0FDSixDQUFDYixnQ0FBcUJTLFFBQXRCLEVBQWdDVCxnQ0FBcUJDLFVBQXJELENBREksQ0FKYTtBQU9yQmYsRUFBQUEsV0FBVyxFQUFFd0Isc0JBQVVDLElBUEY7QUFRckJyQixFQUFBQSxhQUFhLEVBQUVvQixzQkFBVUMsSUFSSjtBQVNyQm5CLEVBQUFBLElBQUksRUFBRWtCLHNCQUFVRSxNQVRLO0FBVXJCVCxFQUFBQSxPQUFPLEVBQUVPLHNCQUFVSSxPQUFWLENBQ0xKLHNCQUFVSyxLQUFWLENBQWdCO0FBQ1oxQixJQUFBQSxFQUFFLEVBQUVxQixzQkFBVUUsTUFERjtBQUVabkIsSUFBQUEsS0FBSyxFQUFFaUIsc0JBQVVFLE1BRkw7QUFHWjlCLElBQUFBLEtBQUssRUFBRTRCLHNCQUFVRSxNQUhMO0FBSVpsQixJQUFBQSxPQUFPLEVBQUVnQixzQkFBVUMsSUFKUDtBQUtaaEIsSUFBQUEsUUFBUSxFQUFFZSxzQkFBVUMsSUFMUjtBQU1aZixJQUFBQSxRQUFRLEVBQUVjLHNCQUFVQztBQU5SLEdBQWhCLENBREssQ0FWWTtBQW1CckJoQixFQUFBQSxRQUFRLEVBQUVlLHNCQUFVQyxJQW5CQztBQW9CckJULEVBQUFBLFFBQVEsRUFBRVEsc0JBQVVDLElBcEJDO0FBcUJyQjdCLEVBQUFBLEtBQUssRUFBRTRCLHNCQUFVRSxNQXJCSTtBQXNCckJ6QixFQUFBQSxRQUFRLEVBQUV1QixzQkFBVU0sSUF0QkM7QUF1QnJCekIsRUFBQUEsU0FBUyxFQUFFbUIsc0JBQVVNO0FBdkJBLENBQXpCO2VBMEJlekMsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5pbXBvcnQgUmFkaW9PcHRpb24gZnJvbSBcIi4vUmFkaW9PcHRpb24uanNcIlxyXG5pbXBvcnQge1JBRElPX0JVVFRPTlNfTEFZT1VUfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmNsYXNzIFJhZGlvQnV0dG9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9wdGlvbkNsaWNrZWQgPSB0aGlzLm9wdGlvbkNsaWNrZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9wdGlvbkludmFsaWQgPSB0aGlzLm9wdGlvbkludmFsaWQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcclxuICAgICAgICAgICAgaXNJbnZhbGlkOiB0aGlzLnByb3BzLmludmFsaWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9uQ2xpY2tlZChvcHRpb24pe1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VWYWx1ZSwgb25DaGFuZ2V9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZihtYW5hZ2VWYWx1ZSlcclxuICAgICAgICAgICAgb25DaGFuZ2Uob3B0aW9uKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRWYWx1ZTogb3B0aW9uLmlkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9uSW52YWxpZCgpe1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VJbnZhbGlkLCBvbkludmFsaWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZihtYW5hZ2VJbnZhbGlkKVxyXG4gICAgICAgICAgICBvbkludmFsaWQoKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNJbnZhbGlkOiB0cnVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVmFsdWUob3B0aW9uLCBuYW1lKXtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIGNoZWNrZWQsXHJcbiAgICAgICAgICAgIHJlYWRvbmx5LFxyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgIH0gPSBvcHRpb247XHJcblxyXG4gICAgICAgIGxldCBpc0NoZWNrZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWUgPyB0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWUgPT09IGlkIDogY2hlY2tlZFxyXG4gICAgICAgIGxldCBpc0hvcml6b250YWwgPSB0aGlzLnByb3BzLmxheW91dCA9PT0gUkFESU9fQlVUVE9OU19MQVlPVVQuaG9yaXpvbnRhbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJhZGlvT3B0aW9uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgaWQgPSB7aWR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9IHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZCA9IHtpc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICByZWFkb25seSA9IHtyZWFkb25seSB8fCB0aGlzLnByb3BzLnJlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB7ZGlzYWJsZWQgfHwgdGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkID0ge3RoaXMucHJvcHMucmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkID0ge3RoaXMuc3RhdGUuaXNJbnZhbGlkfVxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2VBY3Rpb24gPSB7dGhpcy5vcHRpb25DbGlja2VkfVxyXG4gICAgICAgICAgICAgICAgb25JbnZhbGlkQWN0aW9uID0ge3RoaXMub3B0aW9uSW52YWxpZH1cclxuICAgICAgICAgICAgICAgIGlzSG9yaXpvbnRhbCA9IHtpc0hvcml6b250YWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xyXG4gICAgICAgIGxldCB7dmFsdWUsIGludmFsaWQsIG1hbmFnZVZhbHVlLCBtYW5hZ2VJbnZhbGlkfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmKG1hbmFnZVZhbHVlICYmIHZhbHVlIT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRWYWx1ZTogdmFsdWV9KTtcclxuXHJcbiAgICAgICAgaWYobWFuYWdlSW52YWxpZCAmJiBpbnZhbGlkIT09IHRoaXMuc3RhdGUuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0ludmFsaWQ6IGludmFsaWR9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJyYWRpby1idXR0b25zLWNvbnRhaW5lclwifT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmFkaW8tYnV0dG9ucy1oZWFkZXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnZhbGlkXCI6IHRoaXMuc3RhdGUuaXNJbnZhbGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT17XCJyYWRpby1idXR0b25zLWxhYmVsXCJ9PntsYWJlbH08L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkICYmIDxzcGFuIGNsYXNzTmFtZT17XCJyYWRpby1idXR0b25zLXJlcXVpcmVkXCJ9Pio8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImdyb3VwLW9mLXJhZGlvLWJ1dHRvbnNcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB0aGlzLnJlbmRlclZhbHVlKG9wdGlvbiwgbmFtZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5SYWRpb0J1dHRvbnMuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgbGF5b3V0OiBSQURJT19CVVRUT05TX0xBWU9VVC52ZXJ0aWNhbCxcclxuICAgIG1hbmFnZVZhbHVlOiBmYWxzZSxcclxuICAgIG9wdGlvbnM6IFtdLFxyXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxyXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgbWFuYWdlSW52YWxpZDogZmFsc2VcclxufTtcclxuXHJcblJhZGlvQnV0dG9ucy5wcm9wVHlwZXMgPSB7XHJcbiAgICBkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGF5b3V0OiBwcm9wVHlwZXMub25lT2YoXHJcbiAgICAgICAgW1JBRElPX0JVVFRPTlNfTEFZT1VULnZlcnRpY2FsLCBSQURJT19CVVRUT05TX0xBWU9VVC5ob3Jpem9udGFsXVxyXG4gICAgKSxcclxuICAgIG1hbmFnZVZhbHVlOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZUludmFsaWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbmFtZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9wdGlvbnM6IHByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICAgIHByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgICAgIGlkOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgICAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgIGNoZWNrZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgICAgICByZWFkb25seTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbFxyXG4gICAgfSkpLFxyXG4gICAgcmVhZG9ubHk6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVxdWlyZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgdmFsdWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbkNoYW5nZTogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkludmFsaWQ6IHByb3BUeXBlcy5mdW5jXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhZGlvQnV0dG9ucyJdfQ==