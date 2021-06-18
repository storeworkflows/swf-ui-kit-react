"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _utils = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RadioOption = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var id = props.id,
      checked = props.checked,
      readonly = props.readonly,
      disabled = props.disabled,
      name = props.name,
      value = props.value,
      label = props.label,
      onChangeAction = props.onChangeAction,
      onInvalidAction = props.onInvalidAction,
      invalid = props.invalid,
      isHorizontal = props.isHorizontal,
      required = props.required,
      className = props.className;
  var optionClasses = (0, _classnames["default"])(className, "radio-option-container", {
    "disabled": disabled,
    "readonly": readonly,
    "invalid": invalid,
    "horizontal": isHorizontal
  });
  var canChangeValue = !readonly && !disabled;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: optionClasses,
    onClick: function onClick() {
      return canChangeValue && onChangeAction({
        id: id,
        name: name,
        value: value
      });
    },
    ref: ref,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      className: (0, _classnames["default"])("radio-option", {
        "checked": checked
      }),
      type: "radio",
      id: id,
      checked: checked,
      value: value ? value : label || "",
      disabled: disabled,
      readOnly: readonly,
      name: name,
      required: required,
      onChange: function onChange() {
        return void 0;
      },
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
  });
});
RadioOption.defaultProps = {
  name: "",
  label: "",
  className: "",
  onChangeAction: _utils.noop,
  onInvalidAction: _utils.noop
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
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string])
};

var _default = /*#__PURE__*/React.memo(RadioOption, function (prev, next) {
  return (0, _reactFastCompare["default"])(prev, next);
});

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SYWRpb0J1dHRvbnMvUmFkaW9PcHRpb24uanMiXSwibmFtZXMiOlsiUmFkaW9PcHRpb24iLCJSZWFjdCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImlkIiwiY2hlY2tlZCIsInJlYWRvbmx5IiwiZGlzYWJsZWQiLCJuYW1lIiwidmFsdWUiLCJsYWJlbCIsIm9uQ2hhbmdlQWN0aW9uIiwib25JbnZhbGlkQWN0aW9uIiwiaW52YWxpZCIsImlzSG9yaXpvbnRhbCIsInJlcXVpcmVkIiwiY2xhc3NOYW1lIiwib3B0aW9uQ2xhc3NlcyIsImNhbkNoYW5nZVZhbHVlIiwiZSIsImRlZmF1bHRQcm9wcyIsIm5vb3AiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZnVuYyIsIm9uZU9mVHlwZSIsIm9iamVjdCIsIm1lbW8iLCJwcmV2IiwibmV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQyxLQUFLLENBQUNDLFVBQU4sQ0FBaUIsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQUEsTUFHN0NDLEVBSDZDLEdBZ0I3Q0YsS0FoQjZDLENBRzdDRSxFQUg2QztBQUFBLE1BSTdDQyxPQUo2QyxHQWdCN0NILEtBaEI2QyxDQUk3Q0csT0FKNkM7QUFBQSxNQUs3Q0MsUUFMNkMsR0FnQjdDSixLQWhCNkMsQ0FLN0NJLFFBTDZDO0FBQUEsTUFNN0NDLFFBTjZDLEdBZ0I3Q0wsS0FoQjZDLENBTTdDSyxRQU42QztBQUFBLE1BTzdDQyxJQVA2QyxHQWdCN0NOLEtBaEI2QyxDQU83Q00sSUFQNkM7QUFBQSxNQVE3Q0MsS0FSNkMsR0FnQjdDUCxLQWhCNkMsQ0FRN0NPLEtBUjZDO0FBQUEsTUFTN0NDLEtBVDZDLEdBZ0I3Q1IsS0FoQjZDLENBUzdDUSxLQVQ2QztBQUFBLE1BVTdDQyxjQVY2QyxHQWdCN0NULEtBaEI2QyxDQVU3Q1MsY0FW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QVVHLElBVk47QUFXcEJiLEVBQUFBLGVBQWUsRUFBRVUsc0JBQVVHLElBWFA7QUFZcEJWLEVBQUFBLFFBQVEsRUFBRU8sc0JBQVVFLElBWkE7QUFhcEJSLEVBQUFBLFNBQVMsRUFBRU0sc0JBQVVJLFNBQVYsQ0FBb0IsQ0FBQ0osc0JBQVVLLE1BQVgsRUFBbUJMLHNCQUFVQyxNQUE3QixDQUFwQjtBQWJTLENBQXhCOzs0QkFpQmV2QixLQUFLLENBQUM0QixJQUFOLENBQVc3QixXQUFYLEVBQXdCLFVBQUM4QixJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDbkQsU0FBTyxrQ0FBUUQsSUFBUixFQUFjQyxJQUFkLENBQVA7QUFDSCxDQUZjLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IGlzRXF1YWwgZnJvbSBcInJlYWN0LWZhc3QtY29tcGFyZVwiO1xyXG5pbXBvcnQge25vb3B9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuY29uc3QgUmFkaW9PcHRpb24gPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGNoZWNrZWQsXHJcbiAgICAgICAgcmVhZG9ubHksXHJcbiAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICBvbkNoYW5nZUFjdGlvbixcclxuICAgICAgICBvbkludmFsaWRBY3Rpb24sXHJcbiAgICAgICAgaW52YWxpZCxcclxuICAgICAgICBpc0hvcml6b250YWwsXHJcbiAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgbGV0IG9wdGlvbkNsYXNzZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICBcInJhZGlvLW9wdGlvbi1jb250YWluZXJcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogZGlzYWJsZWQsXHJcbiAgICAgICAgICAgIFwicmVhZG9ubHlcIjogcmVhZG9ubHksXHJcbiAgICAgICAgICAgIFwiaW52YWxpZFwiOiBpbnZhbGlkLFxyXG4gICAgICAgICAgICBcImhvcml6b250YWxcIjogaXNIb3Jpem9udGFsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBsZXQgY2FuQ2hhbmdlVmFsdWUgPSAhcmVhZG9ubHkgJiYgIWRpc2FibGVkO1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtvcHRpb25DbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNhbkNoYW5nZVZhbHVlICYmIG9uQ2hhbmdlQWN0aW9uKHtpZDogaWQsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJyYWRpby1vcHRpb25cIiwge1wiY2hlY2tlZFwiOiBjaGVja2VkfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUgPyB2YWx1ZSA6IGxhYmVsIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdm9pZCAwfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uSW52YWxpZD17KGUpID0+IG9uSW52YWxpZEFjdGlvbih7ZSwgaWQ6IGlkfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17XCJyYWRpby1vcHRpb24tbGFiZWxcIn0+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxufSk7XHJcblxyXG5SYWRpb09wdGlvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgbGFiZWw6IFwiXCIsXHJcbiAgICBjbGFzc05hbWU6IFwiXCIsXHJcbiAgICBvbkNoYW5nZUFjdGlvbjogbm9vcCxcclxuICAgIG9uSW52YWxpZEFjdGlvbjogbm9vcCxcclxufTtcclxuXHJcblJhZGlvT3B0aW9uLnByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB2YWx1ZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNoZWNrZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVhZG9ubHk6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgaW52YWxpZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpc0hvcml6b250YWw6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbmFtZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uQ2hhbmdlQWN0aW9uOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uSW52YWxpZEFjdGlvbjogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICByZXF1aXJlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjbGFzc05hbWU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5vYmplY3QsIHByb3BUeXBlcy5zdHJpbmddKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhSYWRpb09wdGlvbiwgKHByZXYsIG5leHQpID0+IHtcclxuICAgIHJldHVybiBpc0VxdWFsKHByZXYsIG5leHQpO1xyXG59KTsiXX0=