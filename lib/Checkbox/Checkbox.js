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

var Checkbox = /*#__PURE__*/function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  var _super = _createSuper(Checkbox);

  function Checkbox(props) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _super.call(this, props);
    _this.onChangeAction = _this.onChangeAction.bind(_assertThisInitialized(_this));
    _this.onInvalidAction = _this.onInvalidAction.bind(_assertThisInitialized(_this));
    _this.setIndeterminate = _this.setIndeterminate.bind(_assertThisInitialized(_this));
    _this.state = {
      checkedValue: _this.props.checked,
      invalidValue: _this.props.invalid,
      checkboxRef: /*#__PURE__*/React.createRef()
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: "onChangeAction",
    value: function onChangeAction() {
      var _this$props = this.props,
          manageChecked = _this$props.manageChecked,
          onChange = _this$props.onChange,
          readonly = _this$props.readonly,
          disabled = _this$props.disabled;
      var currentValue = this.state.checkedValue;
      var newValue = currentValue === "indeterminate" ? true : !currentValue;
      var canChange = !readonly && !disabled;
      if (canChange && manageChecked) onChange({
        value: currentValue
      });else if (canChange) this.setState({
        checkedValue: newValue
      });else if (currentValue === "indeterminate") this.setIndeterminate();
    }
  }, {
    key: "onInvalidAction",
    value: function onInvalidAction() {
      var _this$props2 = this.props,
          manageInvalid = _this$props2.manageInvalid,
          onInvalid = _this$props2.onInvalid;
      var currentValue = this.state.invalidValue;
      if (manageInvalid) onInvalid({
        value: currentValue
      });else this.setState({
        invalidValue: !currentValue
      });
    }
  }, {
    key: "setIndeterminate",
    value: function setIndeterminate() {
      var input = this.state.checkboxRef.current.querySelector('input');
      if (this.props.checked === "indeterminate") input.indeterminate = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props3 = this.props,
          checked = _this$props3.checked,
          invalid = _this$props3.invalid,
          manageChecked = _this$props3.manageChecked,
          manageInvalid = _this$props3.manageInvalid;
      var _this$state = this.state,
          invalidValue = _this$state.invalidValue,
          checkedValue = _this$state.checkedValue;

      if (manageChecked && checkedValue !== checked) {
        this.setState({
          checkedValue: checked
        });
        this.setIndeterminate();
      }

      if (manageInvalid && invalidValue !== invalid) this.setState({
        invalidValue: invalid
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setIndeterminate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          disabled = _this$props4.disabled,
          label = _this$props4.label,
          name = _this$props4.name,
          readonly = _this$props4.readonly,
          required = _this$props4.required;
      var isIndeterminate = this.state.checkedValue === 'indeterminate';
      var checkedValue = isIndeterminate ? false : this.state.checkedValue;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _classnames["default"])({
            "checkbox-container": true,
            "disabled": disabled,
            "readonly": readonly,
            "invalid": this.state.invalidValue
          }),
          ref: this.state.checkboxRef,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            className: "checkbox-input",
            type: "checkbox",
            checked: checkedValue,
            disabled: disabled,
            required: required,
            name: name,
            value: this.state.checkedValue ? "true" : "false",
            onInvalid: function onInvalid(e) {
              return _this2.onInvalidAction(e);
            },
            onChange: function onChange(e) {
              return _this2.onChangeAction(e);
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "checkbox-information",
            children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "checkbox-label",
              children: label
            }), required && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "checkbox-required",
              children: "*"
            })]
          })]
        })]
      });
    }
  }]);

  return Checkbox;
}(React.Component);

;
Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  invalid: false,
  manageChecked: false,
  manageInvalid: false,
  readonly: false,
  required: false
};
Checkbox.propTypes = {
  checked: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(["indeterminate"])]),
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  manageChecked: _propTypes["default"].bool,
  manageInvalid: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  onInvalid: _propTypes["default"].func,
  onChange: _propTypes["default"].func
};
var _default = Checkbox;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DaGVja2JveC9DaGVja2JveC5qcyJdLCJuYW1lcyI6WyJDaGVja2JveCIsInByb3BzIiwib25DaGFuZ2VBY3Rpb24iLCJiaW5kIiwib25JbnZhbGlkQWN0aW9uIiwic2V0SW5kZXRlcm1pbmF0ZSIsInN0YXRlIiwiY2hlY2tlZFZhbHVlIiwiY2hlY2tlZCIsImludmFsaWRWYWx1ZSIsImludmFsaWQiLCJjaGVja2JveFJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwibWFuYWdlQ2hlY2tlZCIsIm9uQ2hhbmdlIiwicmVhZG9ubHkiLCJkaXNhYmxlZCIsImN1cnJlbnRWYWx1ZSIsIm5ld1ZhbHVlIiwiY2FuQ2hhbmdlIiwidmFsdWUiLCJzZXRTdGF0ZSIsIm1hbmFnZUludmFsaWQiLCJvbkludmFsaWQiLCJpbnB1dCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5kZXRlcm1pbmF0ZSIsImxhYmVsIiwibmFtZSIsInJlcXVpcmVkIiwiaXNJbmRldGVybWluYXRlIiwic3R5bGVzIiwiZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImJvb2wiLCJvbmVPZiIsInN0cmluZyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsUTs7Ozs7QUFDRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQiwrQkFBdEI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJELElBQXJCLCtCQUF2QjtBQUNBLFVBQUtFLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCRixJQUF0QiwrQkFBeEI7QUFFQSxVQUFLRyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsWUFBWSxF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dXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCJcclxuXHJcbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VBY3Rpb24gPSB0aGlzLm9uQ2hhbmdlQWN0aW9uLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkludmFsaWRBY3Rpb24gPSB0aGlzLm9uSW52YWxpZEFjdGlvbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0SW5kZXRlcm1pbmF0ZSA9IHRoaXMuc2V0SW5kZXRlcm1pbmF0ZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjaGVja2VkVmFsdWU6IHRoaXMucHJvcHMuY2hlY2tlZCxcclxuICAgICAgICAgICAgaW52YWxpZFZhbHVlOiAgdGhpcy5wcm9wcy5pbnZhbGlkLFxyXG4gICAgICAgICAgICBjaGVja2JveFJlZjogUmVhY3QuY3JlYXRlUmVmKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VBY3Rpb24oKXtcclxuICAgICAgICBjb25zdCB7bWFuYWdlQ2hlY2tlZCwgb25DaGFuZ2UsIHJlYWRvbmx5LCBkaXNhYmxlZH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuc3RhdGUuY2hlY2tlZFZhbHVlO1xyXG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IChjdXJyZW50VmFsdWU9PT1cImluZGV0ZXJtaW5hdGVcIikgPyB0cnVlIDogIWN1cnJlbnRWYWx1ZTtcclxuICAgICAgICBsZXQgY2FuQ2hhbmdlID0gIXJlYWRvbmx5ICYmICFkaXNhYmxlZDtcclxuXHJcbiAgICAgICAgaWYoY2FuQ2hhbmdlICYmIG1hbmFnZUNoZWNrZWQpXHJcbiAgICAgICAgICAgICBvbkNoYW5nZSh7dmFsdWU6IGN1cnJlbnRWYWx1ZX0pO1xyXG4gICAgICAgIGVsc2UgaWYoY2FuQ2hhbmdlKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tlZFZhbHVlOiBuZXdWYWx1ZSB9KTtcclxuICAgICAgICBlbHNlIGlmKGN1cnJlbnRWYWx1ZT09PVwiaW5kZXRlcm1pbmF0ZVwiKVxyXG4gICAgICAgICAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uSW52YWxpZEFjdGlvbigpe1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VJbnZhbGlkLCBvbkludmFsaWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLnN0YXRlLmludmFsaWRWYWx1ZTtcclxuXHJcbiAgICAgICAgaWYobWFuYWdlSW52YWxpZClcclxuICAgICAgICAgICAgb25JbnZhbGlkKHt2YWx1ZTogY3VycmVudFZhbHVlfSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW52YWxpZFZhbHVlOiAhY3VycmVudFZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5kZXRlcm1pbmF0ZSgpe1xyXG4gICAgICAgIGxldCBpbnB1dCA9IHRoaXMuc3RhdGUuY2hlY2tib3hSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY2hlY2tlZCA9PT0gXCJpbmRldGVybWluYXRlXCIpXHJcbiAgICAgICAgICAgIGlucHV0LmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xyXG4gICAgICAgIGNvbnN0IHtjaGVja2VkLCBpbnZhbGlkLCBtYW5hZ2VDaGVja2VkLCBtYW5hZ2VJbnZhbGlkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge2ludmFsaWRWYWx1ZSwgY2hlY2tlZFZhbHVlfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmKG1hbmFnZUNoZWNrZWQgJiYgY2hlY2tlZFZhbHVlICE9PSBjaGVja2VkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2hlY2tlZFZhbHVlOiBjaGVja2VkfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SW5kZXRlcm1pbmF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobWFuYWdlSW52YWxpZCAmJiBpbnZhbGlkVmFsdWUhPT0gaW52YWxpZClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW52YWxpZFZhbHVlOiBpbnZhbGlkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJbmRldGVybWluYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgcmVhZG9ubHksXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCBpc0luZGV0ZXJtaW5hdGUgPSB0aGlzLnN0YXRlLmNoZWNrZWRWYWx1ZSA9PT0gJ2luZGV0ZXJtaW5hdGUnXHJcbiAgICAgICAgbGV0IGNoZWNrZWRWYWx1ZSA9ICBpc0luZGV0ZXJtaW5hdGUgPyBmYWxzZTogdGhpcy5zdGF0ZS5jaGVja2VkVmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY2hlY2tib3gtY29udGFpbmVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiBkaXNhYmxlZCxcclxuICAgICAgICAgICAgICAgICAgICBcInJlYWRvbmx5XCI6IHJlYWRvbmx5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW52YWxpZFwiOiB0aGlzLnN0YXRlLmludmFsaWRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICByZWYgPSB7dGhpcy5zdGF0ZS5jaGVja2JveFJlZn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImNoZWNrYm94LWlucHV0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsodGhpcy5zdGF0ZS5jaGVja2VkVmFsdWUpID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW52YWxpZD17ZSA9PiB0aGlzLm9uSW52YWxpZEFjdGlvbihlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5vbkNoYW5nZUFjdGlvbihlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNoZWNrYm94LWluZm9ybWF0aW9uXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWwgJiYgPGxhYmVsIGNsYXNzTmFtZT17XCJjaGVja2JveC1sYWJlbFwifT57bGFiZWx9PC9sYWJlbD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQgJiYgPHNwYW4gY2xhc3NOYW1lPXtcImNoZWNrYm94LXJlcXVpcmVkXCJ9Pio8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5DaGVja2JveC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGludmFsaWQ6IGZhbHNlLFxyXG4gICAgbWFuYWdlQ2hlY2tlZDogZmFsc2UsXHJcbiAgICBtYW5hZ2VJbnZhbGlkOiBmYWxzZSxcclxuICAgIHJlYWRvbmx5OiBmYWxzZSxcclxuICAgIHJlcXVpcmVkOiBmYWxzZVxyXG59O1xyXG5cclxuQ2hlY2tib3gucHJvcFR5cGVzID0ge1xyXG4gICAgY2hlY2tlZDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgcHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgcHJvcFR5cGVzLm9uZU9mKFtcImluZGV0ZXJtaW5hdGVcIl0pXHJcbiAgICBdKSxcclxuICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGludmFsaWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBtYW5hZ2VDaGVja2VkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZUludmFsaWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbmFtZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHJlYWRvbmx5OiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlcXVpcmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG9uSW52YWxpZDogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkNoYW5nZTogcHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3giXX0=