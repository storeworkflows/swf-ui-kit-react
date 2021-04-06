"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RadioOption = /*#__PURE__*/function (_React$Component) {
  _inherits(RadioOption, _React$Component);

  var _super = _createSuper(RadioOption);

  function RadioOption(props) {
    _classCallCheck(this, RadioOption);

    return _super.call(this, props);
  }

  _createClass(RadioOption, [{
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
          required = _this$props.required,
          className = _this$props.className;
      var optionClasses = (0, _classnames["default"])(className, "radio-option-container", {
        "disabled": disabled,
        "readonly": readonly,
        "invalid": invalid,
        "horizontal": isHorizontal
      });
      var canChangeValue = !readonly && !disabled;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: optionClasses,
          onClick: function onClick() {
            canChangeValue && onChangeAction({
              id: id,
              name: name,
              value: value
            });
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            className: (0, _classnames["default"])("radio-option", {
              "checked": checked
            }),
            type: "radio",
            id: id,
            checked: checked,
            value: value ? value : label,
            disabled: disabled,
            readOnly: readonly,
            name: name,
            required: required,
            onChange: function onChange() {},
            onInvalid: function onInvalid(e) {
              return onInvalidAction({
                e: e,
                id: id
              });
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "radio-option-label",
            children: label
          })]
        })
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
  label: "",
  className: {}
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
  required: _propTypes["default"].bool,
  className: _propTypes["default"].object
};
var _default = RadioOption;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SYWRpb0J1dHRvbnMvUmFkaW9PcHRpb24uanMiXSwibmFtZXMiOlsiUmFkaW9PcHRpb24iLCJwcm9wcyIsImlkIiwiY2hlY2tlZCIsInJlYWRvbmx5IiwiZGlzYWJsZWQiLCJuYW1lIiwidmFsdWUiLCJsYWJlbCIsIm9uQ2hhbmdlQWN0aW9uIiwib25JbnZhbGlkQWN0aW9uIiwiaW52YWxpZCIsImlzSG9yaXpvbnRhbCIsInJlcXVpcmVkIiwiY2xhc3NOYW1lIiwib3B0aW9uQ2xhc3NlcyIsImNhbkNoYW5nZVZhbHVlIiwiZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7QUFDRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTO0FBRWxCOzs7O1dBR0Qsa0JBQVM7QUFBQSx3QkFlRCxLQUFLQSxLQWZKO0FBQUEsVUFFREMsRUFGQyxlQUVEQSxFQUZDO0FBQUEsVUFHREMsT0FIQyxlQUdEQSxPQUhDO0FBQUEsVUFJREMsUUFKQyxlQUlEQSxRQUpDO0FBQUEsVUFLREMsUUFMQyxlQUtEQSxRQUxDO0FBQUEsVUFNREMsSUFOQyxlQU1EQSxJQU5DO0FBQUEsVUFPREMsS0FQQyxlQU9EQSxLQVBDO0FBQUEsVUFRREMsS0FSQyxlQVFEQSxLQVJDO0FBQUEsVUFTREMsY0FUQyxlQVNEQSxjQVRDO0FBQUEsVUFVREMsZUFWQyxlQVVEQSxlQVZDO0FBQUEsVUFXREMsT0FYQyxlQVdEQSxPQVhDO0FBQUEsVUFZREMsWUFaQyxlQVlEQSxZQVpDO0FBQUEsVUFhREMsUUFiQyxlQWFEQSxRQWJDO0FBQUEsVUFjREMsU0FkQyxlQWNEQSxTQWRDO0FBaUJMLFVBQUlDLGFBQWEsR0FBRSw0QkFD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IGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuY2xhc3MgUmFkaW9PcHRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBjaGVja2VkLFxyXG4gICAgICAgICAgICByZWFkb25seSxcclxuICAgICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgb25DaGFuZ2VBY3Rpb24sXHJcbiAgICAgICAgICAgIG9uSW52YWxpZEFjdGlvbixcclxuICAgICAgICAgICAgaW52YWxpZCxcclxuICAgICAgICAgICAgaXNIb3Jpem9udGFsLFxyXG4gICAgICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25DbGFzc2VzPSBjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgIFwicmFkaW8tb3B0aW9uLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImRpc2FibGVkXCI6IGRpc2FibGVkLFxyXG4gICAgICAgICAgICAgICAgXCJyZWFkb25seVwiOiByZWFkb25seSxcclxuICAgICAgICAgICAgICAgIFwiaW52YWxpZFwiOiBpbnZhbGlkLFxyXG4gICAgICAgICAgICAgICAgXCJob3Jpem9udGFsXCI6IGlzSG9yaXpvbnRhbFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgY2FuQ2hhbmdlVmFsdWUgPSAhcmVhZG9ubHkgJiYgIWRpc2FibGVkO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3B0aW9uQ2xhc3Nlc31cclxuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiB7Y2FuQ2hhbmdlVmFsdWUgJiYgb25DaGFuZ2VBY3Rpb24oe2lkOiBpZCwgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlfSl9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJyYWRpby1vcHRpb25cIiwge1wiY2hlY2tlZFwiOiBjaGVja2VkfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlID8gdmFsdWUgOiBsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17cmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkludmFsaWQ9eyhlKSA9PiBvbkludmFsaWRBY3Rpb24oe2UsIGlkOiBpZH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17XCJyYWRpby1vcHRpb24tbGFiZWxcIn0+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuUmFkaW9PcHRpb24uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2hlY2tlZDogZmFsc2UsXHJcbiAgICByZWFkb25seTogZmFsc2UsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBpbnZhbGlkOiBmYWxzZSxcclxuICAgIGlzSG9yaXpvbnRhbDogZmFsc2UsXHJcbiAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgbGFiZWw6IFwiXCIsXHJcbiAgICBjbGFzc05hbWU6IHt9XHJcbn07XHJcblxyXG5SYWRpb09wdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgICBpZDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjaGVja2VkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlYWRvbmx5OiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGludmFsaWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgaXNIb3Jpem9udGFsOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG5hbWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbkNoYW5nZUFjdGlvbjogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkludmFsaWRBY3Rpb246IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgcmVxdWlyZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMub2JqZWN0XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYWRpb09wdGlvblxyXG4iXX0=