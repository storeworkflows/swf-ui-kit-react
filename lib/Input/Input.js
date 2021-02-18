"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.css"));

var _constants = require("./constants");

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var Input = /*#__PURE__*/function (_React$Component) {
  _inherits(Input, _React$Component);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);
    _this.state = {
      checked: _this.props.checked
    };
    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          _this$props$label = _this$props.label,
          label = _this$props$label === void 0 ? "label" : _this$props$label,
          _this$props$name = _this$props.name,
          name = _this$props$name === void 0 ? "name" : _this$props$name,
          placeholder = _this$props.placeholder,
          readonly = _this$props.readonly,
          required = _this$props.required,
          type = _this$props.type,
          value = _this$props.value,
          invalid = _this$props.invalid,
          step = _this$props.step,
          autofocus = _this$props.autofocus,
          max = _this$props.max,
          min = _this$props.min,
          maxlength = _this$props.maxlength,
          minlength = _this$props.minlength,
          pattern = _this$props.pattern,
          multiple = _this$props.multiple,
          message = _this$props.message;

      var _hasLabel = label !== undefined;

      var _hasMessages = message.length > 0;

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "input-container",
          children: [_hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: label
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            className: "form-control",
            name: name,
            placeholder: placeholder,
            step: step,
            type: type,
            "aria-required": required,
            "aria-invalid": invalid,
            value: value,
            readOnly: readonly,
            required: required,
            autoFocus: autofocus,
            max: max,
            min: min,
            maxLength: maxlength,
            minLength: minlength,
            pattern: pattern,
            disabled: disabled,
            multiple: multiple,
            onInput: this.props.onInput
          }), _hasMessages && message.map(function (el) {
            var _hasIcon = el.icon !== undefined && el.icon.length > 0;

            var _hasContent = el.content !== undefined && el.content.length > 0;

            var _exist = _hasIcon || _hasContent;

            return _exist ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: (0, _classnames["default"])(el.status),
              children: [_hasIcon && null //<x-mobi-swf-icon icon={el.icon} size="sm"/>
              , _hasContent && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: el.content
              })]
            }) : null;
          })]
        })]
      });
    }
  }]);

  return Input;
}(React.Component);

Input.defaultProps = {
  autofocus: false,
  disabled: false,
  invalid: false,
  manageInvalid: false,
  manageValue: false,
  message: [],
  multiple: false,
  readonly: false,
  required: false,
  step: "any",
  type: "text"
};
Input.propTypes = {
  autofocus: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  // helperContent: propTypes.string,
  invalid: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  manageInvalid: _propTypes["default"].bool,
  manageValue: _propTypes["default"].bool,
  max: _propTypes["default"].number,
  min: _propTypes["default"].number,
  maxlength: _propTypes["default"].number,
  minlength: _propTypes["default"].number,
  message: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    status: _propTypes["default"].oneOf(["critical", "warning", "positive", "info", "suggestion"]),
    content: _propTypes["default"].string,
    icon: _propTypes["default"].string
  })),
  multiple: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  pattern: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  step: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].oneOf["any"]]),
  onInput: _propTypes["default"].func,
  type: _propTypes["default"].oneOf(["password", "email", "number", "url", "tel", "search", "date", "datetime", "datetime-local", "month", "week", "time"]),
  value: _propTypes["default"].string
};
var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJJbnB1dCIsInByb3BzIiwic3RhdGUiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJ0eXBlIiwidmFsdWUiLCJpbnZhbGlkIiwic3RlcCIsImF1dG9mb2N1cyIsIm1heCIsIm1pbiIsIm1heGxlbmd0aCIsIm1pbmxlbmd0aCIsInBhdHRlcm4iLCJtdWx0aXBsZSIsIm1lc3NhZ2UiLCJfaGFzTGFiZWwiLCJ1bmRlZmluZWQiLCJfaGFzTWVzc2FnZXMiLCJsZW5ndGgiLCJzdHlsZXMiLCJvbklucHV0IiwibWFwIiwiZWwiLCJfaGFzSWNvbiIsImljb24iLCJfaGFzQ29udGVudCIsImNvbnRlbnQiLCJfZXhpc3QiLCJzdGF0dXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm1hbmFnZUludmFsaWQiLCJtYW5hZ2VWYWx1ZSIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJudW1iZXIiLCJhcnJheU9mIiwic2hhcGUiLCJvbmVPZiIsIm9uZU9mVHlwZSIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsSzs7Ozs7QUFDTCxpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNaQyxNQUFBQSxPQUFPLEVBQUUsTUFBS0YsS0FBTCxDQUFXRTtBQURSLEtBQWI7QUFGa0I7QUFLbEI7Ozs7V0FFRCxrQkFBUztBQUFBLHdCQW9CSixLQUFLRixLQXBCRDtBQUFBLFVBRVBHLFFBRk8sZUFFUEEsUUFGTztBQUFBLDBDQUdQQyxLQUhPO0FBQUEsVUFHUEEsS0FITyxrQ0FHQyxPQUhEO0FBQUEseUNBSVBD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LElBQUFBLElBQUksRUFBRVUsc0JBQVVFO0FBSDJCLEdBQWhCLENBQWxCLENBWk87QUFpQmpCdkIsRUFBQUEsUUFBUSxFQUFFcUIsc0JBQVVDLElBakJIO0FBa0JqQnBDLEVBQUFBLElBQUksRUFBRW1DLHNCQUFVRSxNQWxCQztBQW1CakJ4QixFQUFBQSxPQUFPLEVBQUVzQixzQkFBVUUsTUFuQkY7QUFvQmpCcEMsRUFBQUEsV0FBVyxFQUFFa0Msc0JBQVVFLE1BcEJOO0FBcUJqQm5DLEVBQUFBLFFBQVEsRUFBRWlDLHNCQUFVQyxJQXJCSDtBQXNCakJqQyxFQUFBQSxRQUFRLEVBQUVnQyxzQkFBVUMsSUF0Qkg7QUF1QmpCN0IsRUFBQUEsSUFBSSxFQUFFNEIsc0JBQVVPLFNBQVYsQ0FBb0IsQ0FDekJQLHNCQUFVRyxNQURlLEVBRXpCSCxzQkFBVU0sS0FBVixDQUFnQixLQUFoQixDQUZ5QixDQUFwQixDQXZCVztBQTJCakJwQixFQUFBQSxPQUFPLEVBQUVjLHNCQUFVUSxJQTNCRjtBQTRCakJ2QyxFQUFBQSxJQUFJLEVBQUUrQixzQkFBVU0sS0FBVixDQUFnQixDQUFDLFVBQUQsRUFBYSxPQUFiLEVBQXNCLFFBQXRCLEVBQWdDLEtBQWhDLEVBQXVDLEtBQXZDLEVBQThDLFFBQTlDLEVBQXdELE1BQXhELEVBQWdFLFVBQWhFLEVBQTRFLGdCQUE1RSxFQUE4RixPQUE5RixFQUF1RyxNQUF2RyxFQUErRyxNQUEvRyxDQUFoQixDQTVCVztBQTZCakJwQyxFQUFBQSxLQUFLLEVBQUU4QixzQkFBVUU7QUE3QkEsQ0FBbEI7ZUFnQ2UzQyxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCB7U1dGX0lOUFVUfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkXG5cdFx0fVxuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRkaXNhYmxlZCxcblx0XHRcdGxhYmVsID0gXCJsYWJlbFwiLFxuXHRcdFx0bmFtZT0gXCJuYW1lXCIsXG5cdFx0XHRwbGFjZWhvbGRlcixcblx0XHRcdHJlYWRvbmx5LFxuXHRcdFx0cmVxdWlyZWQsXG5cdFx0XHR0eXBlLFxuXHRcdFx0dmFsdWUsXG5cdFx0XHRpbnZhbGlkLFxuXHRcdFx0c3RlcCxcblx0XHRcdGF1dG9mb2N1cyxcblx0XHRcdG1heCxcblx0XHRcdG1pbixcblx0XHRcdG1heGxlbmd0aCxcblx0XHRcdG1pbmxlbmd0aCxcblx0XHRcdHBhdHRlcm4sXG5cdFx0XHRtdWx0aXBsZSxcblx0XHRcdG1lc3NhZ2Vcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IF9oYXNMYWJlbCA9IGxhYmVsICE9PSB1bmRlZmluZWQ7XG5cdFx0Y29uc3QgX2hhc01lc3NhZ2VzID0gbWVzc2FnZS5sZW5ndGg+MDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PHN0eWxlPntzdHlsZXN9PC9zdHlsZT5cblx0XHRcdFx0PGRpdiAgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0eyBfaGFzTGFiZWwgJiZcblx0XHRcdFx0XHQ8c3Bhbj57bGFiZWx9PC9zcGFuPlxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0ICAgbmFtZT17bmFtZX1cblx0XHRcdFx0XHRcdCAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdCAgIHN0ZXA9e3N0ZXB9XG5cdFx0XHRcdFx0XHQgICB0eXBlPXt0eXBlfVxuXHRcdFx0XHRcdFx0ICAgYXJpYS1yZXF1aXJlZD17cmVxdWlyZWR9XG5cdFx0XHRcdFx0XHQgICBhcmlhLWludmFsaWQ9e2ludmFsaWR9XG5cdFx0XHRcdFx0XHQgICB2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdFx0XHQgICByZWFkT25seT17cmVhZG9ubHl9XG5cdFx0XHRcdFx0XHQgICByZXF1aXJlZD17cmVxdWlyZWR9XG5cdFx0XHRcdFx0XHQgICBhdXRvRm9jdXMgPXthdXRvZm9jdXN9XG5cdFx0XHRcdFx0XHQgICBtYXg9e21heH1cblx0XHRcdFx0XHRcdCAgIG1pbj17bWlufVxuXHRcdFx0XHRcdFx0ICAgbWF4TGVuZ3RoPXttYXhsZW5ndGh9XG5cdFx0XHRcdFx0XHQgICBtaW5MZW5ndGg9e21pbmxlbmd0aH1cblx0XHRcdFx0XHRcdCAgIHBhdHRlcm49e3BhdHRlcm59XG5cdFx0XHRcdFx0XHQgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG5cdFx0XHRcdFx0XHQgICBtdWx0aXBsZT17bXVsdGlwbGV9XG5cdFx0XHRcdFx0XHQgICBvbklucHV0PXt0aGlzLnByb3BzLm9uSW5wdXR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7IF9oYXNNZXNzYWdlcyAmJlxuXHRcdFx0XHRcdG1lc3NhZ2UubWFwKChlbCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgX2hhc0ljb24gPSBlbC5pY29uICE9PSB1bmRlZmluZWQgJiYgZWwuaWNvbi5sZW5ndGg+MDtcblx0XHRcdFx0XHRcdGNvbnN0IF9oYXNDb250ZW50ID0gZWwuY29udGVudCAhPT11bmRlZmluZWQgJiYgZWwuY29udGVudC5sZW5ndGg+MDtcblxuXHRcdFx0XHRcdFx0Y29uc3QgX2V4aXN0ID0gX2hhc0ljb24gfHwgX2hhc0NvbnRlbnQ7XG5cdFx0XHRcdFx0XHRyZXR1cm4oXG5cdFx0XHRcdFx0XHRcdF9leGlzdFxuXHRcdFx0XHRcdFx0XHRcdD9cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhlbC5zdGF0dXMpfT5cblx0XHRcdFx0XHRcdFx0XHRcdHtfaGFzSWNvbiAmJiBudWxsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vPHgtbW9iaS1zd2YtaWNvbiBpY29uPXtlbC5pY29ufSBzaXplPVwic21cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR7X2hhc0NvbnRlbnQgJiZcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntlbC5jb250ZW50fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ6IG51bGxcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvPlxuXHRcdClcblx0fVxufVxuXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG5cdGF1dG9mb2N1czogZmFsc2UsXG5cdGRpc2FibGVkOiBmYWxzZSxcblx0aW52YWxpZDogZmFsc2UsXG5cdG1hbmFnZUludmFsaWQ6IGZhbHNlLFxuXHRtYW5hZ2VWYWx1ZTogZmFsc2UsXG5cdG1lc3NhZ2U6IFtdLFxuXHRtdWx0aXBsZTogZmFsc2UsXG5cdHJlYWRvbmx5OiBmYWxzZSxcblx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRzdGVwOiBcImFueVwiLFxuXHR0eXBlOiBcInRleHRcIlxufVxuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG5cdGF1dG9mb2N1czogcHJvcFR5cGVzLmJvb2wsXG5cdGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcblx0Ly8gaGVscGVyQ29udGVudDogcHJvcFR5cGVzLnN0cmluZyxcblx0aW52YWxpZDogcHJvcFR5cGVzLmJvb2wsXG5cdGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxuXHRtYW5hZ2VJbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcblx0bWFuYWdlVmFsdWU6IHByb3BUeXBlcy5ib29sLFxuXHRtYXg6IHByb3BUeXBlcy5udW1iZXIsXG5cdG1pbjogcHJvcFR5cGVzLm51bWJlcixcblx0bWF4bGVuZ3RoOiBwcm9wVHlwZXMubnVtYmVyLFxuXHRtaW5sZW5ndGg6IHByb3BUeXBlcy5udW1iZXIsXG5cdG1lc3NhZ2U6ICBwcm9wVHlwZXMuYXJyYXlPZihwcm9wVHlwZXMuc2hhcGUoe1xuXHRcdHN0YXR1czogcHJvcFR5cGVzLm9uZU9mKFtcImNyaXRpY2FsXCIgLCBcIndhcm5pbmdcIiAsIFwicG9zaXRpdmVcIiAsIFwiaW5mb1wiICwgXCJzdWdnZXN0aW9uXCJdKSxcblx0XHRjb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxuXHRcdGljb246IHByb3BUeXBlcy5zdHJpbmdcblx0fSkpLFxuXHRtdWx0aXBsZTogcHJvcFR5cGVzLmJvb2wsXG5cdG5hbWU6IHByb3BUeXBlcy5zdHJpbmcsXG5cdHBhdHRlcm46IHByb3BUeXBlcy5zdHJpbmcsXG5cdHBsYWNlaG9sZGVyOiBwcm9wVHlwZXMuc3RyaW5nLFxuXHRyZWFkb25seTogcHJvcFR5cGVzLmJvb2wsXG5cdHJlcXVpcmVkOiBwcm9wVHlwZXMuYm9vbCxcblx0c3RlcDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG5cdFx0cHJvcFR5cGVzLm51bWJlcixcblx0XHRwcm9wVHlwZXMub25lT2ZbXCJhbnlcIl1cblx0XSksXG5cdG9uSW5wdXQ6IHByb3BUeXBlcy5mdW5jLFxuXHR0eXBlOiBwcm9wVHlwZXMub25lT2YoW1wicGFzc3dvcmRcIiwgXCJlbWFpbFwiLCBcIm51bWJlclwiLCBcInVybFwiLCBcInRlbFwiLCBcInNlYXJjaFwiLCBcImRhdGVcIiwgXCJkYXRldGltZVwiLCBcImRhdGV0aW1lLWxvY2FsXCIsIFwibW9udGhcIiwgXCJ3ZWVrXCIsIFwidGltZVwiXSksXG5cdHZhbHVlOiBwcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19