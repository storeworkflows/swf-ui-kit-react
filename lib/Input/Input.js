"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.css"));

var _constants = require("./constants");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _findByType = _interopRequireDefault(require("../utils/findByType"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var Start = function Start() {
  return null;
};

var End = function End() {
  return null;
};

var Input = /*#__PURE__*/function (_React$Component) {
  _inherits(Input, _React$Component);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);
    _this.state = {
      checked: _this.props.checked,
      hasStart: false,
      hasEnd: false
    };
    return _this;
  }

  _createClass(Input, [{
    key: "renderStart",
    value: function renderStart() {
      var children = this.props.children;
      var start = (0, _findByType["default"])(children, Start);
      if (!start) return null;
      !this.state.hasStart && this.setState({
        hasStart: true
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "form-control--start",
        children: start.props.children
      });
    }
  }, {
    key: "renderEnd",
    value: function renderEnd() {
      var children = this.props.children;
      var end = (0, _findByType["default"])(children, End);
      if (!end) return null;
      !this.state.hasEnd && this.setState({
        hasEnd: true
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "form-control--end",
        children: end.props.children
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          label = _this$props.label,
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
          children: [_hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            htmlFor: "name",
            children: label
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: (0, _classnames2["default"])({
              "input-group": true
            }),
            children: [this.renderStart(), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              className: (0, _classnames2["default"])(_defineProperty({
                "form-control": true,
                "no-start-border": this.state.hasStart,
                "no-end-border": this.state.hasEnd
              }, this.props.className, true)),
              id: "name",
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
              onInput: this.props.onInput,
              onChange: this.props.onChange
            }), this.renderEnd()]
          }), _hasMessages && message.map(function (el) {
            var _hasIcon = el.icon !== undefined && el.icon.length > 0;

            var _hasContent = el.content !== undefined && el.content.length > 0;

            var _exist = _hasIcon || _hasContent;

            return _exist ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: (0, _classnames2["default"])(el.status),
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

Input.Start = Start;
Input.End = End;
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
  type: "text",
  onInput: function onInput() {
    return void 0;
  },
  onChange: function onChange() {
    return void 0;
  }
};
Input.propTypes = {
  autofocus: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
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
  name: _propTypes["default"].string.required,
  pattern: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  className: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  step: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].oneOf["any"]]),
  type: _propTypes["default"].oneOf(["password", "email", "number", "url", "tel", "search", "date", "datetime", "datetime-local", "month", "week", "time"]),
  value: _propTypes["default"].string,
  onInput: _propTypes["default"].func,
  onChange: _propTypes["default"].func
};
var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6WyJTdGFydCIsIkVuZCIsIklucHV0IiwicHJvcHMiLCJzdGF0ZSIsImNoZWNrZWQiLCJoYXNTdGFydCIsImhhc0VuZCIsImNoaWxkcmVuIiwic3RhcnQiLCJzZXRTdGF0ZSIsImVuZCIsImRpc2FibGVkIiwibGFiZWwiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJyZWFkb25seSIsInJlcXVpcmVkIiwidHlwZSIsInZhbHVlIiwiaW52YWxpZCIsInN0ZXAiLCJhdXRvZm9jdXMiLCJtYXgiLCJtaW4iLCJtYXhsZW5ndGgiLCJtaW5sZW5ndGgiLCJwYXR0ZXJuIiwibXVsdGlwbGUiLCJtZXNzYWdlIiwiX2hhc0xhYmVsIiwidW5kZWZpbmVkIiwiX2hhc01lc3NhZ2VzIiwibGVuZ3RoIiwic3R5bGVzIiwicmVuZGVyU3RhcnQiLCJjbGFzc05hbWUiLCJvbklucHV0Iiwib25DaGFuZ2UiLCJyZW5kZXJFbmQiLCJtYXAiLCJlbCIsIl9oYXNJY29uIiwiaWNvbiIsIl9oYXNDb250ZW50IiwiY29udGVudCIsIl9leGlzdCIsInN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwibWFuYWdlSW52YWxpZCIsIm1hbmFnZVZhbHVlIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mIiwib25lT2ZUeXBlIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxTQUFNLElBQU47QUFBQSxDQUFkOztBQUNBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNO0FBQUEsU0FBTSxJQUFOO0FBQUEsQ0FBWjs7SUFFTUMsSzs7Ozs7QUFDTCxpQkFBWUMs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QmpCakMsRUFBQUEsSUFBSSxFQUFFZ0Msc0JBQVVPLFNBQVYsQ0FBb0IsQ0FDekJQLHNCQUFVRyxNQURlLEVBRXpCSCxzQkFBVU0sS0FBVixDQUFnQixLQUFoQixDQUZ5QixDQUFwQixDQXZCVztBQTJCakJ6QyxFQUFBQSxJQUFJLEVBQUVtQyxzQkFBVU0sS0FBVixDQUFnQixDQUFDLFVBQUQsRUFBYSxPQUFiLEVBQXNCLFFBQXRCLEVBQWdDLEtBQWhDLEVBQXVDLEtBQXZDLEVBQThDLFFBQTlDLEVBQXdELE1BQXhELEVBQWdFLFVBQWhFLEVBQTRFLGdCQUE1RSxFQUE4RixPQUE5RixFQUF1RyxNQUF2RyxFQUErRyxNQUEvRyxDQUFoQixDQTNCVztBQTRCakJ4QyxFQUFBQSxLQUFLLEVBQUVrQyxzQkFBVUUsTUE1QkE7QUE2QmpCbEIsRUFBQUEsT0FBTyxFQUFFZ0Isc0JBQVVRLElBN0JGO0FBOEJqQnZCLEVBQUFBLFFBQVEsRUFBRWUsc0JBQVVRO0FBOUJILENBQWxCO2VBaUNlM0QsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLmNzc1wiO1xuXG5pbXBvcnQge1NXRl9JTlBVVH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgZmluZEJ5VHlwZSBmcm9tIFwiLi4vdXRpbHMvZmluZEJ5VHlwZVwiO1xuXG5jb25zdCBTdGFydCA9ICgpID0+IG51bGw7XG5jb25zdCBFbmQgPSAoKSA9PiBudWxsO1xuXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQsXG5cdFx0XHRoYXNTdGFydDogZmFsc2UsXG5cdFx0XHRoYXNFbmQ6IGZhbHNlXG5cdFx0fVxuXHR9O1xuXG5cdHJlbmRlclN0YXJ0ICgpIHtcblx0XHRjb25zdCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCBzdGFydCA9IGZpbmRCeVR5cGUoY2hpbGRyZW4sIFN0YXJ0KTtcblxuXHRcdGlmICghc3RhcnQpIHJldHVybiBudWxsO1xuXG5cdFx0IXRoaXMuc3RhdGUuaGFzU3RhcnQgJiYgdGhpcy5zZXRTdGF0ZSh7aGFzU3RhcnQ6IHRydWV9KVxuXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLS1zdGFydFwiPntzdGFydC5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cblx0fVxuXG5cdHJlbmRlckVuZCAoKSB7XG5cdFx0Y29uc3Qge2NoaWxkcmVufSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgZW5kID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgRW5kKTtcblxuXHRcdGlmICghZW5kKSByZXR1cm4gbnVsbDtcblxuXHRcdCF0aGlzLnN0YXRlLmhhc0VuZCAmJiB0aGlzLnNldFN0YXRlKHtoYXNFbmQ6IHRydWV9KVxuXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLS1lbmRcIj57ZW5kLnByb3BzLmNoaWxkcmVufTwvZGl2PlxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGRpc2FibGVkLFxuXHRcdFx0bGFiZWwsXG5cdFx0XHRuYW1lPSBcIm5hbWVcIixcblx0XHRcdHBsYWNlaG9sZGVyLFxuXHRcdFx0cmVhZG9ubHksXG5cdFx0XHRyZXF1aXJlZCxcblx0XHRcdHR5cGUsXG5cdFx0XHR2YWx1ZSxcblx0XHRcdGludmFsaWQsXG5cdFx0XHRzdGVwLFxuXHRcdFx0YXV0b2ZvY3VzLFxuXHRcdFx0bWF4LFxuXHRcdFx0bWluLFxuXHRcdFx0bWF4bGVuZ3RoLFxuXHRcdFx0bWlubGVuZ3RoLFxuXHRcdFx0cGF0dGVybixcblx0XHRcdG11bHRpcGxlLFxuXHRcdFx0bWVzc2FnZVxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgX2hhc0xhYmVsID0gbGFiZWwgIT09IHVuZGVmaW5lZDtcblx0XHRjb25zdCBfaGFzTWVzc2FnZXMgPSBtZXNzYWdlLmxlbmd0aCA+IDA7XG5cdFx0cmV0dXJuIChcblx0XHRcdDw+XG5cdFx0XHRcdDxzdHlsZT57c3R5bGVzfTwvc3R5bGU+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdHsgX2hhc0xhYmVsICYmIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPntsYWJlbH08L2xhYmVsPn1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XG5cdFx0XHRcdFx0XHRcImlucHV0LWdyb3VwXCI6IHRydWVcblx0XHRcdFx0XHR9KX0+XG5cdFx0XHRcdFx0XHR7dGhpcy5yZW5kZXJTdGFydCgpfVxuXHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XG5cdFx0XHRcdFx0XHRcdFwiZm9ybS1jb250cm9sXCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFwibm8tc3RhcnQtYm9yZGVyXCI6IHRoaXMuc3RhdGUuaGFzU3RhcnQsXG5cdFx0XHRcdFx0XHRcdFwibm8tZW5kLWJvcmRlclwiOiB0aGlzLnN0YXRlLmhhc0VuZCxcblx0XHRcdFx0XHRcdFx0W3RoaXMucHJvcHMuY2xhc3NOYW1lXTogdHJ1ZVxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdCAgIGlkPVwibmFtZVwiXG5cdFx0XHRcdFx0XHRcdCAgIG5hbWU9e25hbWV9XG5cdFx0XHRcdFx0XHRcdCAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdFx0ICAgc3RlcD17c3RlcH1cblx0XHRcdFx0XHRcdFx0ICAgdHlwZT17dHlwZX1cblx0XHRcdFx0XHRcdFx0ICAgYXJpYS1yZXF1aXJlZD17cmVxdWlyZWR9XG5cdFx0XHRcdFx0XHRcdCAgIGFyaWEtaW52YWxpZD17aW52YWxpZH1cblx0XHRcdFx0XHRcdFx0ICAgdmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRcdFx0XHQgICByZWFkT25seT17cmVhZG9ubHl9XG5cdFx0XHRcdFx0XHRcdCAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cblx0XHRcdFx0XHRcdFx0ICAgYXV0b0ZvY3VzID17YXV0b2ZvY3VzfVxuXHRcdFx0XHRcdFx0XHQgICBtYXg9e21heH1cblx0XHRcdFx0XHRcdFx0ICAgbWluPXttaW59XG5cdFx0XHRcdFx0XHRcdCAgIG1heExlbmd0aD17bWF4bGVuZ3RofVxuXHRcdFx0XHRcdFx0XHQgICBtaW5MZW5ndGg9e21pbmxlbmd0aH1cblx0XHRcdFx0XHRcdFx0ICAgcGF0dGVybj17cGF0dGVybn1cblx0XHRcdFx0XHRcdFx0ICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuXHRcdFx0XHRcdFx0XHQgICBtdWx0aXBsZT17bXVsdGlwbGV9XG5cdFx0XHRcdFx0XHRcdCAgIG9uSW5wdXQ9e3RoaXMucHJvcHMub25JbnB1dH1cblx0XHRcdFx0XHRcdFx0ICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0e3RoaXMucmVuZGVyRW5kKCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0eyBfaGFzTWVzc2FnZXMgJiZcblx0XHRcdFx0XHRtZXNzYWdlLm1hcCgoZWwpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IF9oYXNJY29uID0gZWwuaWNvbiAhPT0gdW5kZWZpbmVkICYmIGVsLmljb24ubGVuZ3RoPjA7XG5cdFx0XHRcdFx0XHRjb25zdCBfaGFzQ29udGVudCA9IGVsLmNvbnRlbnQgIT09dW5kZWZpbmVkICYmIGVsLmNvbnRlbnQubGVuZ3RoPjA7XG5cblx0XHRcdFx0XHRcdGNvbnN0IF9leGlzdCA9IF9oYXNJY29uIHx8IF9oYXNDb250ZW50O1xuXHRcdFx0XHRcdFx0cmV0dXJuKFxuXHRcdFx0XHRcdFx0XHRfZXhpc3Rcblx0XHRcdFx0XHRcdFx0XHQ/XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoZWwuc3RhdHVzKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7X2hhc0ljb24gJiYgbnVsbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLzx4LW1vYmktc3dmLWljb24gaWNvbj17ZWwuaWNvbn0gc2l6ZT1cInNtXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0e19oYXNDb250ZW50ICYmXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57ZWwuY29udGVudH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0OiBudWxsXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fSlcblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8Lz5cblx0XHQpXG5cdH1cbn1cblxuSW5wdXQuU3RhcnQgPSBTdGFydDtcbklucHV0LkVuZCA9IEVuZDtcblxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuXHRhdXRvZm9jdXM6IGZhbHNlLFxuXHRkaXNhYmxlZDogZmFsc2UsXG5cdGludmFsaWQ6IGZhbHNlLFxuXHRtYW5hZ2VJbnZhbGlkOiBmYWxzZSxcblx0bWFuYWdlVmFsdWU6IGZhbHNlLFxuXHRtZXNzYWdlOiBbXSxcblx0bXVsdGlwbGU6IGZhbHNlLFxuXHRyZWFkb25seTogZmFsc2UsXG5cdHJlcXVpcmVkOiBmYWxzZSxcblx0c3RlcDogXCJhbnlcIixcblx0dHlwZTogXCJ0ZXh0XCIsXG5cdG9uSW5wdXQ6ICgpID0+IHZvaWQgMCxcblx0b25DaGFuZ2U6ICgpID0+IHZvaWQgMFxufVxuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG5cdGF1dG9mb2N1czogcHJvcFR5cGVzLmJvb2wsXG5cdGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcblx0aW52YWxpZDogcHJvcFR5cGVzLmJvb2wsXG5cdGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxuXHRtYW5hZ2VJbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcblx0bWFuYWdlVmFsdWU6IHByb3BUeXBlcy5ib29sLFxuXHRtYXg6IHByb3BUeXBlcy5udW1iZXIsXG5cdG1pbjogcHJvcFR5cGVzLm51bWJlcixcblx0bWF4bGVuZ3RoOiBwcm9wVHlwZXMubnVtYmVyLFxuXHRtaW5sZW5ndGg6IHByb3BUeXBlcy5udW1iZXIsXG5cdG1lc3NhZ2U6ICBwcm9wVHlwZXMuYXJyYXlPZihwcm9wVHlwZXMuc2hhcGUoe1xuXHRcdHN0YXR1czogcHJvcFR5cGVzLm9uZU9mKFtcImNyaXRpY2FsXCIgLCBcIndhcm5pbmdcIiAsIFwicG9zaXRpdmVcIiAsIFwiaW5mb1wiICwgXCJzdWdnZXN0aW9uXCJdKSxcblx0XHRjb250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxuXHRcdGljb246IHByb3BUeXBlcy5zdHJpbmdcblx0fSkpLFxuXHRtdWx0aXBsZTogcHJvcFR5cGVzLmJvb2wsXG5cdG5hbWU6IHByb3BUeXBlcy5zdHJpbmcucmVxdWlyZWQsXG5cdHBhdHRlcm46IHByb3BUeXBlcy5zdHJpbmcsXG5cdHBsYWNlaG9sZGVyOiBwcm9wVHlwZXMuc3RyaW5nLFxuXHRjbGFzc05hbWU6IHByb3BUeXBlcy5zdHJpbmcsXG5cdHJlYWRvbmx5OiBwcm9wVHlwZXMuYm9vbCxcblx0cmVxdWlyZWQ6IHByb3BUeXBlcy5ib29sLFxuXHRzdGVwOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcblx0XHRwcm9wVHlwZXMubnVtYmVyLFxuXHRcdHByb3BUeXBlcy5vbmVPZltcImFueVwiXVxuXHRdKSxcblx0dHlwZTogcHJvcFR5cGVzLm9uZU9mKFtcInBhc3N3b3JkXCIsIFwiZW1haWxcIiwgXCJudW1iZXJcIiwgXCJ1cmxcIiwgXCJ0ZWxcIiwgXCJzZWFyY2hcIiwgXCJkYXRlXCIsIFwiZGF0ZXRpbWVcIiwgXCJkYXRldGltZS1sb2NhbFwiLCBcIm1vbnRoXCIsIFwid2Vla1wiLCBcInRpbWVcIl0pLFxuXHR2YWx1ZTogcHJvcFR5cGVzLnN0cmluZyxcblx0b25JbnB1dDogcHJvcFR5cGVzLmZ1bmMsXG5cdG9uQ2hhbmdlOiBwcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ==