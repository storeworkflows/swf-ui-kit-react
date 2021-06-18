"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _findByType = _interopRequireWildcard(require("../utils/findByType"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LabelValue = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var labelClassName = props.labelClassName,
      valueClassName = props.valueClassName,
      className = props.className,
      label = props.label,
      value = props.value,
      children = props.children,
      importantLabel = props.importantLabel,
      onClick = props.onClick,
      inline = props.inline,
      size = props.size;

  var renderValue = function renderValue() {
    var slotValue = (0, _findByType["default"])(children, "Value");
    var noSlot = !slotValue || slotValue.length < 1;
    if (noSlot && !value) return null;
    var renderValue = value || slotValue;
    var valueClasses = (0, _classnames["default"])("value-content", valueClassName, {
      "--text-value": value,
      "--inline": inline
    });
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: valueClasses,
      children: renderValue
    });
  };

  var classes = (0, _classnames["default"])("label-value-container", "--".concat(size), className, {
    "--display-flex": inline,
    "--unimportant": !importantLabel
  });
  var labelClasses = (0, _classnames["default"])("label-content", labelClassName, {
    "--unimportant": !importantLabel
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: classes,
      onClick: onClick,
      ref: ref,
      children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        className: labelClasses,
        children: label
      }), renderValue()]
    })
  });
});
LabelValue.Value = (0, _findByType.createSubComponent)("Value");
LabelValue.defaultProps = {
  className: {},
  labelClassName: {},
  valueClassName: {},
  inline: false,
  onClick: function onClick() {
    return void 0;
  },
  importantLabel: true,
  size: "md"
};
LabelValue.propTypes = {
  label: _propTypes["default"].string,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  labelClassName: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  valueClassName: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  onClick: _propTypes["default"].func,
  inline: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  importantLabel: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["sm", "md", "lg"])
};
var _default = LabelValue;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MYWJlbFZhbHVlL0xhYmVsVmFsdWUuanMiXSwibmFtZXMiOlsiTGFiZWxWYWx1ZSIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwibGFiZWxDbGFzc05hbWUiLCJ2YWx1ZUNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImxhYmVsIiwidmFsdWUiLCJjaGlsZHJlbiIsImltcG9ydGFudExhYmVsIiwib25DbGljayIsImlubGluZSIsInNpemUiLCJyZW5kZXJWYWx1ZSIsInNsb3RWYWx1ZSIsIm5vU2xvdCIsImxlbmd0aCIsInZhbHVlQ2xhc3NlcyIsImNsYXNzZXMiLCJsYWJlbENsYXNzZXMiLCJWYWx1ZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm9iamVjdCIsImZ1bmMiLCJib29sIiwib25lT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxnQkFBR0MsS0FBSyxDQUFDQyxVQUFOLENBQWlCLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUFBLE1BRzVDQyxjQUg0QyxHQU01Q0YsS0FONEMsQ0FHNUNFLGNBSDRDO0FBQUEsTUFHNUJDLGNBSDRCLEdBTTVDSCxLQU40QyxDQUc1QkcsY0FINEI7QUFBQSxNQUdaQyxTQUhZLEdBTTVDSixLQU40QyxDQUdaSSxTQUhZO0FBQUEsTUFJNUNDLEtBSjRDLEdBTTVDTCxLQU40QyxDQUk1Q0ssS0FKNEM7QUFBQSxNQUlyQ0MsS0FKcUMsR0FNNUNOLEtBTjRDLENBSXJDTSxLQUpxQztBQUFBLE1BSTlCQyxRQUo4QixHQU01Q1AsS0FONEMsQ0FJOUJPLFFBSjhCO0FBQUEsTUFJcEJDLGNBSm9CLEdBTTVDUixLQU40QyxDQUlwQlEsY0FKb0I7QUFBQSxNQUs1Q0MsT0FMNEMsR0FNNUNULEtBTjRDLENBSzVDUyxPQUw0QztBQUFBLE1BS25DQyxNQUxtQyxH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cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IGZpbmRCeVR5cGUsIHtjcmVhdGVTdWJDb21wb25lbnR9IGZyb20gXCIuLi91dGlscy9maW5kQnlUeXBlXCI7XHJcblxyXG5jb25zdCBMYWJlbFZhbHVlID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBsYWJlbENsYXNzTmFtZSwgdmFsdWVDbGFzc05hbWUsIGNsYXNzTmFtZSxcclxuICAgICAgICBsYWJlbCwgdmFsdWUsIGNoaWxkcmVuLCBpbXBvcnRhbnRMYWJlbCxcclxuICAgICAgICBvbkNsaWNrLCBpbmxpbmUsIHNpemVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCByZW5kZXJWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzbG90VmFsdWUgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBcIlZhbHVlXCIpO1xyXG4gICAgICAgIGNvbnN0IG5vU2xvdCA9ICFzbG90VmFsdWUgfHwgc2xvdFZhbHVlLmxlbmd0aCA8IDE7XHJcbiAgICAgICAgaWYgKG5vU2xvdCAmJiAhdmFsdWUpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJWYWx1ZSA9IHZhbHVlIHx8IHNsb3RWYWx1ZTtcclxuICAgICAgICBjb25zdCB2YWx1ZUNsYXNzZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICBcInZhbHVlLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgdmFsdWVDbGFzc05hbWUsIHtcclxuICAgICAgICAgICAgICAgIFwiLS10ZXh0LXZhbHVlXCI6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgXCItLWlubGluZVwiOiBpbmxpbmVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXt2YWx1ZUNsYXNzZXN9PntyZW5kZXJWYWx1ZX08L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhcclxuICAgICAgICBcImxhYmVsLXZhbHVlLWNvbnRhaW5lclwiLFxyXG4gICAgICAgIGAtLSR7c2l6ZX1gLFxyXG4gICAgICAgIGNsYXNzTmFtZSwge1xyXG4gICAgICAgICAgICBcIi0tZGlzcGxheS1mbGV4XCI6IGlubGluZSxcclxuICAgICAgICAgICAgXCItLXVuaW1wb3J0YW50XCI6ICFpbXBvcnRhbnRMYWJlbFxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICBjb25zdCBsYWJlbENsYXNzZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICAgIFwibGFiZWwtY29udGVudFwiLFxyXG4gICAgICAgIGxhYmVsQ2xhc3NOYW1lLCB7XHJcbiAgICAgICAgICAgIFwiLS11bmltcG9ydGFudFwiOiAhaW1wb3J0YW50TGFiZWxcclxuICAgICAgICB9XHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsYWJlbCAmJiA8bGFiZWwgY2xhc3NOYW1lPXtsYWJlbENsYXNzZXN9PntsYWJlbH08L2xhYmVsPn1cclxuICAgICAgICAgICAgICAgIHtyZW5kZXJWYWx1ZSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSk7XHJcblxyXG5MYWJlbFZhbHVlLlZhbHVlID0gY3JlYXRlU3ViQ29tcG9uZW50KFwiVmFsdWVcIik7XHJcblxyXG5MYWJlbFZhbHVlLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNsYXNzTmFtZToge30sXHJcbiAgICBsYWJlbENsYXNzTmFtZToge30sXHJcbiAgICB2YWx1ZUNsYXNzTmFtZToge30sXHJcbiAgICBpbmxpbmU6IGZhbHNlLFxyXG4gICAgb25DbGljazogKCkgPT4gdm9pZCAwLFxyXG4gICAgaW1wb3J0YW50TGFiZWw6IHRydWUsXHJcbiAgICBzaXplOiBcIm1kXCJcclxufVxyXG5cclxuTGFiZWxWYWx1ZS5wcm9wVHlwZXMgPSB7XHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLnN0cmluZywgcHJvcFR5cGVzLm9iamVjdF0pLFxyXG4gICAgbGFiZWxDbGFzc05hbWU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5vYmplY3RdKSxcclxuICAgIHZhbHVlQ2xhc3NOYW1lOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMub2JqZWN0XSksXHJcbiAgICBvbkNsaWNrOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIGlubGluZTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICB2YWx1ZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGltcG9ydGFudExhYmVsOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHNpemU6IHByb3BUeXBlcy5vbmVPZihbXCJzbVwiLCBcIm1kXCIsIFwibGdcIl0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhYmVsVmFsdWUiXX0=