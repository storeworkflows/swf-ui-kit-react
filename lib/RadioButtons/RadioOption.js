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
            onChange: function onChange(e) {
              console.log(e);
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
  required: _propTypes["default"].bool
};
var _default = RadioOption;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SYWRpb0J1dHRvbnMvUmFkaW9PcHRpb24uanMiXSwibmFtZXMiOlsiUmFkaW9PcHRpb24iLCJwcm9wcyIsImlkIiwiY2hlY2tlZCIsInJlYWRvbmx5IiwiZGlzYWJsZWQiLCJuYW1lIiwidmFsdWUiLCJsYWJlbCIsIm9uQ2hhbmdlQWN0aW9uIiwiaW52YWxpZCIsImlzSG9yaXpvbnRhbCIsInJlcXVpcmVkIiwiY2FuQ2hhbmdlVmFsdWUiLCJzdHlsZXMiLCJlIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7QUFDRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTO0FBRWxCOzs7O1dBRUQsNkJBQW9CLENBQ25COzs7V0FFRCxrQkFBUztBQUFBLHdCQWFELEtBQUtBLEtBYko7QUFBQSxVQUVEQyxFQUZDLGVBRURBLEVBRkM7QUFBQSxVQUdEQyxPQUhDLGVBR0RBLE9BSEM7QUFBQSxVQUlEQyxRQUpDLGVBSURBLFFBSkM7QUFBQSxVQUtEQyxRQUxDLGVBS0RBLFFBTEM7QUFBQSxVQU1EQyxJQU5DLGVBTURBLElBTkM7QUFBQSxVQU9EQyxLQVBDLGVBT0RBLEtBUEM7QUFBQSxVQVFEQyxLQVJDLGVBUURBLEtBUkM7QUFBQSxVQVNEQyxjQVRDLGVBU0RBLGNBVEM7QUFBQSxVQVVEQyxPQVZDLGVBVURBLE9BVkM7QUFBQSxVQVdEQyxZQVhDLGVBV0RBLFlBWEM7QUFBQSxVQVlEQyxRQVpDLGVBWURBLFFBWkM7QUFlTCxVQUFJQyxjQUFjLEdBQUcsQ0FBQ1QsUUFBRCxJQUFhLENBQUNDLFFBQW5DO0FBQ0EsMEJBQ0k7QUFBQSxnQ0FDSTtBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0JTO0FBQXhCLFVBREosZUFFSTtBQUFLLFVBQUEsU0FBUyxFQUFFLDRCQUFXO0FBQ3ZCLHNDQUEwQixJQURIO0FBRXZCLHdCQUFZVCxRQUZXO0FBR3ZCLHdCQUFZRCxRQUhXO0FBSXZCLHVCQUFXTSxPQUpZO0FBS3ZCLDBCQUFjQztBQUxTLFdBQVgsQ0FBaEI7QUFPSyxVQUFBLE9BQU8sRUFBRTtBQUFBLG1CQUFLRSxjQUFjLElBQUlKLGNBQWMsQ0FBQztBQUFDUCxjQUFBQSxFQUFFLEVBQUVBLEVBQUw7QUFBU0ksY0FBQUEsSUFBSSxFQUFFQSxJQUFmO0FBQXFCQyxjQUFBQSxLQUFLLEVBQUVBO0FBQTVCLGFBQUQsQ0FBckM7QUFBQSxXQVBkO0FBQUEsa0NBU0k7QUFDSSxZQUFBLFNBQVMsRUFBRSxjQURmO0FBRUksWUFBQSxJQUFJLEVBQUMsT0FGVDtBQUdJLFlBQUEsRUFBRSxFQUFFTCxFQUhSO0FBSUksWUFBQSxPQUFPLEVBQUVDLE9BSmI7QUFLSSxZQUFBLEtBQUssRUFBRUksS0FBSyxHQUFHQSxLQUFILEdBQVdDLEtBTDNCO0FBTUksWUFBQSxRQUFRLEVBQUVILFFBTmQ7QUFPSSxZQUFBLFFBQVEsRUFBRUQsUUFQZDtBQVFJLFlBQUEsSUFBSSxFQUFFRSxJQVJWO0FBU0ksWUFBQSxRQUFRLEVBQUVNLFFBVGQ7QUFVSSxZQUFBLFFBQVEsRUFBRSxrQkFBQ0csQ0FBRCxFQUFLO0FBQUNDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQWU7QUFWbkMsWUFUSixlQXFCSTtBQUFPLFlBQUEsU0FBUyxFQUFFLG9CQUFsQjtBQUFBLHNCQUF5Q1A7QUFBekMsWUFyQko7QUFBQSxVQUZKO0FBQUEsUUFESjtBQTRCSDs7OztFQXBEcUJVLEtBQUssQ0FBQ0MsUzs7QUF1RGhDbkIsV0FBVyxDQUFDb0IsWUFBWixHQUEyQjtBQUN2QmpCLEVBQUFBLE9BQU8sRUFBRSxLQURjO0FBRXZCQyxFQUFBQSxRQUFRLEVBQUUsS0FGYTtBQUd2QkMsRUFBQUEsUUFBUSxFQUFFLEtBSGE7QUFJdkJLLEVBQUFBLE9BQU8sRUFBRSxLQUpjO0FBS3ZCQyxFQUFBQSxZQUFZLEVBQUUsS0FMUztBQU12QkMsRUFBQUEsUUFBUSxFQUFFLEtBTmE7QUFPdkJOLEVBQUFBLElBQUksRUFBRSxFQVBpQjtBQVF2QkUsRUFBQUEsS0FBSyxFQUFFO0FBUmdCLENBQTNCO0FBV0FSLFdBQVcsQ0FBQ3FCLFNBQVosR0FBd0I7QUFDcEJuQixFQUFBQSxFQUFFLEVBQUVtQixzQkFBVUMsTUFETTtBQUVwQmQsRUFBQUEsS0FBSyxFQUFFYSxzQkFBVUMsTUFGRztBQUdwQmYsRUFBQUEsS0FBSyxFQUFFYyxzQkFBVUMsTUFIRztBQUlwQm5CLEVBQUFBLE9BQU8sRUFBRWtCLHNCQUFVRSxJQUpDO0FBS3BCbkIsRUFBQUEsUUFBUSxFQUFFaUIsc0JBQVVFLElBTEE7QUFNcEJsQixFQUFBQSxRQUFRLEVBQUVnQixzQkFBVUUsSUFOQTtBQU9wQmIsRUFBQUEsT0FBTyxFQUFFVyxzQkFBVUUsSUFQQztBQVFwQlosRUFBQUEsWUFBWSxFQUFFVSxzQkFBVUUsSUFSSjtBQVNwQmpCLEVBQUFBLElBQUksRUFBRWUsc0JBQVVDLE1BVEk7QUFVcEJiLEVBQUFBLGNBQWMsRUFBRVksc0JBQVVHLElBVk47QUFXcEJaLEVBQUFBLFFBQVEsRUFBRVMsc0JBQVVFO0FBWEEsQ0FBeEI7ZUFjZXZCLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiXHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5jbGFzcyBSYWRpb09wdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgY2hlY2tlZCxcclxuICAgICAgICAgICAgcmVhZG9ubHksXHJcbiAgICAgICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlQWN0aW9uLFxyXG4gICAgICAgICAgICBpbnZhbGlkLFxyXG4gICAgICAgICAgICBpc0hvcml6b250YWwsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCBjYW5DaGFuZ2VWYWx1ZSA9ICFyZWFkb25seSAmJiAhZGlzYWJsZWQ7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJyYWRpby1vcHRpb24tY29udGFpbmVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiBkaXNhYmxlZCxcclxuICAgICAgICAgICAgICAgICAgICBcInJlYWRvbmx5XCI6IHJlYWRvbmx5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaW52YWxpZFwiOiBpbnZhbGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbFwiOiBpc0hvcml6b250YWxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IGNhbkNoYW5nZVZhbHVlICYmIG9uQ2hhbmdlQWN0aW9uKHtpZDogaWQsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wicmFkaW8tb3B0aW9uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlID8gdmFsdWUgOiBsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17cmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e2NvbnNvbGUubG9nKGUpfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e1wicmFkaW8tb3B0aW9uLWxhYmVsXCJ9PntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblJhZGlvT3B0aW9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgaW52YWxpZDogZmFsc2UsXHJcbiAgICBpc0hvcml6b250YWw6IGZhbHNlLFxyXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGxhYmVsOiBcIlwiXHJcbn07XHJcblxyXG5SYWRpb09wdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgICBpZDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjaGVja2VkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlYWRvbmx5OiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGludmFsaWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgaXNIb3Jpem9udGFsOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG5hbWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbkNoYW5nZUFjdGlvbjogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICByZXF1aXJlZDogcHJvcFR5cGVzLmJvb2xcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFkaW9PcHRpb25cclxuIl19