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
          className: "form-group",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJJbnB1dCIsInByb3BzIiwic3RhdGUiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJ0eXBlIiwidmFsdWUiLCJpbnZhbGlkIiwic3RlcCIsImF1dG9mb2N1cyIsIm1heCIsIm1pbiIsIm1heGxlbmd0aCIsIm1pbmxlbmd0aCIsInBhdHRlcm4iLCJtdWx0aXBsZSIsIm1lc3NhZ2UiLCJfaGFzTGFiZWwiLCJ1bmRlZmluZWQiLCJfaGFzTWVzc2FnZXMiLCJsZW5ndGgiLCJzdHlsZXMiLCJvbklucHV0IiwibWFwIiwiZWwiLCJfaGFzSWNvbiIsImljb24iLCJfaGFzQ29udGVudCIsImNvbnRlbnQiLCJfZXhpc3QiLCJzdGF0dXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm1hbmFnZUludmFsaWQiLCJtYW5hZ2VWYWx1ZSIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJudW1iZXIiLCJhcnJheU9mIiwic2hhcGUiLCJvbmVPZiIsIm9uZU9mVHlwZSIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsSzs7Ozs7QUFDTCxpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNaQyxNQUFBQSxPQUFPLEVBQUUsTUFBS0YsS0FBTCxDQUFXRTtBQURSLEtBQWI7QUFGa0I7QUFLbEI7Ozs7V0FFRCxrQkFBUztBQUFBLHdCQW9CSixLQUFLRixLQXBCRDtBQUFBLFVBRVBHLFFBRk8sZUFFUEEsUUFGTztBQUFBLDBDQUdQQyxLQUhPO0FBQUEsVUFHUEEsS0FITyxrQ0FHQyxPQUhEO0FBQUEseUNBSVBD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QUFBQSxJQUFJLEVBQUVVLHNCQUFVRTtBQUgyQixHQUFoQixDQUFsQixDQVpPO0FBaUJqQnZCLEVBQUFBLFFBQVEsRUFBRXFCLHNCQUFVQyxJQWpCSDtBQWtCakJwQyxFQUFBQSxJQUFJLEVBQUVtQyxzQkFBVUUsTUFsQkM7QUFtQmpCeEIsRUFBQUEsT0FBTyxFQUFFc0Isc0JBQVVFLE1BbkJGO0FBb0JqQnBDLEVBQUFBLFdBQVcsRUFBRWtDLHNCQUFVRSxNQXBCTjtBQXFCakJuQyxFQUFBQSxRQUFRLEVBQUVpQyxzQkFBVUMsSUFyQkg7QUFzQmpCakMsRUFBQUEsUUFBUSxFQUFFZ0Msc0JBQVVDLElBdEJIO0FBdUJqQjdCLEVBQUFBLElBQUksRUFBRTRCLHNCQUFVTyxTQUFWLENBQW9CLENBQ3pCUCxzQkFBVUcsTUFEZSxFQUV6Qkgsc0JBQVVNLEtBQVYsQ0FBZ0IsS0FBaEIsQ0FGeUIsQ0FBcEIsQ0F2Qlc7QUEyQmpCcEIsRUFBQUEsT0FBTyxFQUFFYyxzQkFBVVEsSUEzQkY7QUE0QmpCdkMsRUFBQUEsSUFBSSxFQUFFK0Isc0JBQVVNLEtBQVYsQ0FBZ0IsQ0FBQyxVQUFELEVBQWEsT0FBYixFQUFzQixRQUF0QixFQUFnQyxLQUFoQyxFQUF1QyxLQUF2QyxFQUE4QyxRQUE5QyxFQUF3RCxNQUF4RCxFQUFnRSxVQUFoRSxFQUE0RSxnQkFBNUUsRUFBOEYsT0FBOUYsRUFBdUcsTUFBdkcsRUFBK0csTUFBL0csQ0FBaEIsQ0E1Qlc7QUE2QmpCcEMsRUFBQUEsS0FBSyxFQUFFOEIsc0JBQVVFO0FBN0JBLENBQWxCO2VBZ0NlM0MsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcclxuXHJcbmltcG9ydCB7U1dGX0lOUFVUfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWRcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7XHJcblx0XHRcdGRpc2FibGVkLFxyXG5cdFx0XHRsYWJlbCA9IFwibGFiZWxcIixcclxuXHRcdFx0bmFtZT0gXCJuYW1lXCIsXHJcblx0XHRcdHBsYWNlaG9sZGVyLFxyXG5cdFx0XHRyZWFkb25seSxcclxuXHRcdFx0cmVxdWlyZWQsXHJcblx0XHRcdHR5cGUsXHJcblx0XHRcdHZhbHVlLFxyXG5cdFx0XHRpbnZhbGlkLFxyXG5cdFx0XHRzdGVwLFxyXG5cdFx0XHRhdXRvZm9jdXMsXHJcblx0XHRcdG1heCxcclxuXHRcdFx0bWluLFxyXG5cdFx0XHRtYXhsZW5ndGgsXHJcblx0XHRcdG1pbmxlbmd0aCxcclxuXHRcdFx0cGF0dGVybixcclxuXHRcdFx0bXVsdGlwbGUsXHJcblx0XHRcdG1lc3NhZ2VcclxuXHRcdH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdGNvbnN0IF9oYXNMYWJlbCA9IGxhYmVsICE9PSB1bmRlZmluZWQ7XHJcblx0XHRjb25zdCBfaGFzTWVzc2FnZXMgPSBtZXNzYWdlLmxlbmd0aD4wO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8c3R5bGU+e3N0eWxlc308L3N0eWxlPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0eyBfaGFzTGFiZWwgJiZcclxuXHRcdFx0XHRcdDxzcGFuPntsYWJlbH08L3NwYW4+XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdCAgIG5hbWU9e25hbWV9XHJcblx0XHRcdFx0XHRcdCAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuXHRcdFx0XHRcdFx0ICAgc3RlcD17c3RlcH1cclxuXHRcdFx0XHRcdFx0ICAgdHlwZT17dHlwZX1cclxuXHRcdFx0XHRcdFx0ICAgYXJpYS1yZXF1aXJlZD17cmVxdWlyZWR9XHJcblx0XHRcdFx0XHRcdCAgIGFyaWEtaW52YWxpZD17aW52YWxpZH1cclxuXHRcdFx0XHRcdFx0ICAgdmFsdWU9e3ZhbHVlfVxyXG5cdFx0XHRcdFx0XHQgICByZWFkT25seT17cmVhZG9ubHl9XHJcblx0XHRcdFx0XHRcdCAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuXHRcdFx0XHRcdFx0ICAgYXV0b0ZvY3VzID17YXV0b2ZvY3VzfVxyXG5cdFx0XHRcdFx0XHQgICBtYXg9e21heH1cclxuXHRcdFx0XHRcdFx0ICAgbWluPXttaW59XHJcblx0XHRcdFx0XHRcdCAgIG1heExlbmd0aD17bWF4bGVuZ3RofVxyXG5cdFx0XHRcdFx0XHQgICBtaW5MZW5ndGg9e21pbmxlbmd0aH1cclxuXHRcdFx0XHRcdFx0ICAgcGF0dGVybj17cGF0dGVybn1cclxuXHRcdFx0XHRcdFx0ICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG5cdFx0XHRcdFx0XHQgICBtdWx0aXBsZT17bXVsdGlwbGV9XHJcblx0XHRcdFx0XHRcdCAgIG9uSW5wdXQ9e3RoaXMucHJvcHMub25JbnB1dH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHR7IF9oYXNNZXNzYWdlcyAmJlxyXG5cdFx0XHRcdFx0bWVzc2FnZS5tYXAoKGVsKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IF9oYXNJY29uID0gZWwuaWNvbiAhPT0gdW5kZWZpbmVkICYmIGVsLmljb24ubGVuZ3RoPjA7XHJcblx0XHRcdFx0XHRcdGNvbnN0IF9oYXNDb250ZW50ID0gZWwuY29udGVudCAhPT11bmRlZmluZWQgJiYgZWwuY29udGVudC5sZW5ndGg+MDtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnN0IF9leGlzdCA9IF9oYXNJY29uIHx8IF9oYXNDb250ZW50O1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4oXHJcblx0XHRcdFx0XHRcdFx0X2V4aXN0XHJcblx0XHRcdFx0XHRcdFx0XHQ/XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhlbC5zdGF0dXMpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e19oYXNJY29uICYmIG51bGxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLzx4LW1vYmktc3dmLWljb24gaWNvbj17ZWwuaWNvbn0gc2l6ZT1cInNtXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtfaGFzQ29udGVudCAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57ZWwuY29udGVudH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0OiBudWxsXHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Lz5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcclxuXHRhdXRvZm9jdXM6IGZhbHNlLFxyXG5cdGRpc2FibGVkOiBmYWxzZSxcclxuXHRpbnZhbGlkOiBmYWxzZSxcclxuXHRtYW5hZ2VJbnZhbGlkOiBmYWxzZSxcclxuXHRtYW5hZ2VWYWx1ZTogZmFsc2UsXHJcblx0bWVzc2FnZTogW10sXHJcblx0bXVsdGlwbGU6IGZhbHNlLFxyXG5cdHJlYWRvbmx5OiBmYWxzZSxcclxuXHRyZXF1aXJlZDogZmFsc2UsXHJcblx0c3RlcDogXCJhbnlcIixcclxuXHR0eXBlOiBcInRleHRcIlxyXG59XHJcblxyXG5JbnB1dC5wcm9wVHlwZXMgPSB7XHJcblx0YXV0b2ZvY3VzOiBwcm9wVHlwZXMuYm9vbCxcclxuXHRkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcblx0Ly8gaGVscGVyQ29udGVudDogcHJvcFR5cGVzLnN0cmluZyxcclxuXHRpbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcclxuXHRsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuXHRtYW5hZ2VJbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcclxuXHRtYW5hZ2VWYWx1ZTogcHJvcFR5cGVzLmJvb2wsXHJcblx0bWF4OiBwcm9wVHlwZXMubnVtYmVyLFxyXG5cdG1pbjogcHJvcFR5cGVzLm51bWJlcixcclxuXHRtYXhsZW5ndGg6IHByb3BUeXBlcy5udW1iZXIsXHJcblx0bWlubGVuZ3RoOiBwcm9wVHlwZXMubnVtYmVyLFxyXG5cdG1lc3NhZ2U6ICBwcm9wVHlwZXMuYXJyYXlPZihwcm9wVHlwZXMuc2hhcGUoe1xyXG5cdFx0c3RhdHVzOiBwcm9wVHlwZXMub25lT2YoW1wiY3JpdGljYWxcIiAsIFwid2FybmluZ1wiICwgXCJwb3NpdGl2ZVwiICwgXCJpbmZvXCIgLCBcInN1Z2dlc3Rpb25cIl0pLFxyXG5cdFx0Y29udGVudDogcHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdGljb246IHByb3BUeXBlcy5zdHJpbmdcclxuXHR9KSksXHJcblx0bXVsdGlwbGU6IHByb3BUeXBlcy5ib29sLFxyXG5cdG5hbWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcblx0cGF0dGVybjogcHJvcFR5cGVzLnN0cmluZyxcclxuXHRwbGFjZWhvbGRlcjogcHJvcFR5cGVzLnN0cmluZyxcclxuXHRyZWFkb25seTogcHJvcFR5cGVzLmJvb2wsXHJcblx0cmVxdWlyZWQ6IHByb3BUeXBlcy5ib29sLFxyXG5cdHN0ZXA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG5cdFx0cHJvcFR5cGVzLm51bWJlcixcclxuXHRcdHByb3BUeXBlcy5vbmVPZltcImFueVwiXVxyXG5cdF0pLFxyXG5cdG9uSW5wdXQ6IHByb3BUeXBlcy5mdW5jLFxyXG5cdHR5cGU6IHByb3BUeXBlcy5vbmVPZihbXCJwYXNzd29yZFwiLCBcImVtYWlsXCIsIFwibnVtYmVyXCIsIFwidXJsXCIsIFwidGVsXCIsIFwic2VhcmNoXCIsIFwiZGF0ZVwiLCBcImRhdGV0aW1lXCIsIFwiZGF0ZXRpbWUtbG9jYWxcIiwgXCJtb250aFwiLCBcIndlZWtcIiwgXCJ0aW1lXCJdKSxcclxuXHR2YWx1ZTogcHJvcFR5cGVzLnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcclxuIl19