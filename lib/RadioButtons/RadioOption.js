"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var RadioOption = /*#__PURE__*/function (_React$Component) {
  _inherits(RadioOption, _React$Component);

  var _super = _createSuper(RadioOption);

  function RadioOption(props) {
    _classCallCheck(this, RadioOption);

    return _super.call(this, props);
  }

  _createClass(RadioOption, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          checked = _this$props.checked,
          readonly = _this$props.readonly,
          disabled = _this$props.disabled,
          name = _this$props.name,
          value = _this$props.value,
          label = _this$props.label,
          onChangeAction = _this$props.onChangeAction,
          onInvalidAction = _this$props.onInvalidAction,
          invalid = _this$props.invalid,
          isHorizontal = _this$props.isHorizontal,
          required = _this$props.required;
      var canChangeValue = !readonly && !disabled;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _classnames["default"])({
            "radio-option-container": true,
            "disabled": disabled,
            "readonly": readonly,
            "invalid": invalid,
            "horizontal": isHorizontal
          }),
          onClick: function onClick() {
            return canChangeValue && onChangeAction({
              id: id,
              name: name,
              value: value
            });
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            className: "radio-option",
            type: "radio",
            id: id,
            checked: checked,
            value: value ? value : label,
            disabled: disabled,
            readOnly: readonly,
            name: name,
            required: required,
            onChange: function onChange() {
              return canChangeValue && onChangeAction({
                id: id,
                name: name,
                value: value
              });
            },
            onInvalid: function onInvalid() {
              return onInvalidAction({
                id: id
              });
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "radio-option-label",
            children: label
          })]
        })]
      });
    }
  }]);

  return RadioOption;
}(React.Component);

RadioOption.defaultProps = {
  checked: false,
  readonly: false,
  disabled: false,
  invalid: false,
  isHorizontal: false,
  required: false,
  name: "",
  label: ""
};
RadioOption.propTypes = {
  id: _propTypes["default"].string,
  label: _propTypes["default"].string,
  value: _propTypes["default"].string,
  checked: _propTypes["default"].bool,
  readonly: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  isHorizontal: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  onChangeAction: _propTypes["default"].func,
  onInvalidAction: _propTypes["default"].func,
  required: _propTypes["default"].bool
};
var _default = RadioOption;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SYWRpb0J1dHRvbnMvUmFkaW9PcHRpb24uanMiXSwibmFtZXMiOlsiUmFkaW9PcHRpb24iLCJwcm9wcyIsImlkIiwiY2hlY2tlZCIsInJlYWRvbmx5IiwiZGlzYWJsZWQiLCJuYW1lIiwidmFsdWUiLCJsYWJlbCIsIm9uQ2hhbmdlQWN0aW9uIiwib25JbnZhbGlkQWN0aW9uIiwiaW52YWxpZCIsImlzSG9yaXpvbnRhbCIsInJlcXVpcmVkIiwiY2FuQ2hhbmdlVmFsdWUiLCJzdHlsZXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFc7Ozs7O0FBQ0YsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDVEEsS0FEUztBQUVsQjs7OztXQUVELDZCQUFvQixDQUNuQjs7O1dBRUQsa0JBQVM7QUFBQSx3QkFjRCxLQUFLQSxLQWRKO0FBQUEsVUFFREMsRUFGQyxlQUVEQSxFQUZDO0FBQUEsVUFHREMsT0FIQyxlQUdEQSxPQUhDO0FBQUEsVUFJREMsUUFKQyxlQUlEQSxRQUpDO0FBQUEsVUFLREMsUUFMQyxlQUtEQSxRQUxDO0FBQUEsVUFNREMsSUFOQyxlQU1EQSxJQU5DO0FBQUEsVUFPREMsS0FQQyxlQU9EQSxLQVBDO0FBQUEsVUFRREMsS0FSQyxlQVFEQSxLQVJDO0FBQUEsVUFTREMsY0FUQyxlQVNEQSxjQVRDO0FBQUEsVUFVREMsZUFWQyxlQVVEQSxlQVZDO0FBQUEsVUFXREMsT0FYQyxlQVdEQSxPQVhDO0FBQUEsVUFZREMsWUFaQyxlQVlEQSxZQVpDO0FBQUEsVUFhREMsUUFiQyxlQWFEQSxRQWJDO0FBZ0JMLFVBQUlDLGNBQWMsR0FBRyxDQUFDVixRQUFELElBQWEsQ0FBQ0MsUUFBbkM7QUFDQSwwQkFD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cm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIlxyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuY2xhc3MgUmFkaW9PcHRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIGNoZWNrZWQsXHJcbiAgICAgICAgICAgIHJlYWRvbmx5LFxyXG4gICAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICBvbkNoYW5nZUFjdGlvbixcclxuICAgICAgICAgICAgb25JbnZhbGlkQWN0aW9uLFxyXG4gICAgICAgICAgICBpbnZhbGlkLFxyXG4gICAgICAgICAgICBpc0hvcml6b250YWwsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCBjYW5DaGFuZ2VWYWx1ZSA9ICFyZWFkb25seSAmJiAhZGlzYWJsZWQ7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJyYWRpby1vcHRpb24tY29udGFpbmVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiBkaXNhYmxlZCxcclxuICAgICAgICAgICAgICAgICAgICBcInJlYWRvbmx5XCI6IHJlYWRvbmx5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW52YWxpZFwiOiBpbnZhbGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbFwiOiBpc0hvcml6b250YWxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IGNhbkNoYW5nZVZhbHVlICYmIG9uQ2hhbmdlQWN0aW9uKHtpZDogaWQsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wicmFkaW8tb3B0aW9uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlID8gdmFsdWUgOiBsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17cmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGNhbkNoYW5nZVZhbHVlICYmIG9uQ2hhbmdlQWN0aW9uKHtpZDogaWQsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkludmFsaWQ9eygpID0+IG9uSW52YWxpZEFjdGlvbih7aWQ6IGlkfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtcInJhZGlvLW9wdGlvbi1sYWJlbFwifT57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5SYWRpb09wdGlvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIHJlYWRvbmx5OiBmYWxzZSxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGludmFsaWQ6IGZhbHNlLFxyXG4gICAgaXNIb3Jpem9udGFsOiBmYWxzZSxcclxuICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBsYWJlbDogXCJcIlxyXG59O1xyXG5cclxuUmFkaW9PcHRpb24ucHJvcFR5cGVzID0ge1xyXG4gICAgaWQ6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHZhbHVlOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY2hlY2tlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICByZWFkb25seTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGlzSG9yaXpvbnRhbDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBuYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25DaGFuZ2VBY3Rpb246IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25JbnZhbGlkQWN0aW9uOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIHJlcXVpcmVkOiBwcm9wVHlwZXMuYm9vbFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYWRpb09wdGlvblxyXG4iXX0=