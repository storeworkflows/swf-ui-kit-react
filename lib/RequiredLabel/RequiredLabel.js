"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _classnames = _interopRequireDefault(require("classnames"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RequiredLabel = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var required = props.required,
      label = props.label,
      invalid = props.invalid,
      className = props.className,
      htmlFor = props.htmlFor;
  var labelClasses = (0, _classnames["default"])(className, "label-area", {
    "--invalid": invalid
  });
  return required || label ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: labelClasses,
    ref: ref,
    children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      htmlFor: htmlFor,
      className: "label-text",
      children: label
    }), required && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
      className: "label-icon",
      icon: "asterisk",
      customSize: 7
    })]
  }) : null;
});
RequiredLabel.defaultProps = {
  required: false,
  invalid: false,
  className: {}
};
RequiredLabel.propTypes = {
  required: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  htmlFor: _propTypes["default"].string
};
var _default = RequiredLabel;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXF1aXJlZExhYmVsL1JlcXVpcmVkTGFiZWwuanMiXSwibmFtZXMiOlsiUmVxdWlyZWRMYWJlbCIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwicmVxdWlyZWQiLCJsYWJlbCIsImludmFsaWQiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwibGFiZWxDbGFzc2VzIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFHQSxJQUFNQSxhQUFhLGdCQUFHQyxLQUFLLENBQUNDLFVBQU4sQ0FBaUIsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQUEsTUFFNUNDLFFBRjRDLEdBRUlGLEtBRkosQ0FFNUNFLFFBRjRDO0FBQUEsTUFFbENDLEtBRmtDLEdBRUlILEtBRkosQ0FFbENHLEtBRmtDO0FBQUEsTUFFM0JDLE9BRjJCLEdBRUlKLEtBRkosQ0FFM0JJLE9BRjJCO0FBQUEsTUFFbEJDLFNBRmtCLEdBRUlMLEtBRkosQ0FFbEJLLFNBRmtCO0FBQUEsTUFFUEMsT0FGTyxHQUVJTixLQUZKLENBRVBNLE9BRk87QUFHbkQsTUFBTUMsWUFBWSxHQUFHLDRCQUNqQkYsU0FEaUIsRUFFakIsWUFGaUIsRUFHakI7QUFBQyxpQkFBYUQ7QUFBZCxHQUhpQixDQUFyQjtBQUtBLFNBQ0tGLFFBQVEsSUFBSUMsS0FBYixnQkFFSTtBQUFLLElBQUEsU0FBUyxFQUFFSSxZQUFoQjtBQUE4QixJQUFBLEdBQUcsRUFBRU4sR0FBbkM7QUFBQSxlQUNLRSxLQUFLLGlCQUFJO0FBQU8sTUFBQSxPQUFPLEVBQUVHLE9BQWhCO0FBQXlCLE1BQUEsU0FBUyxFQUFFLFlBQXBDO0FBQUEsZ0JBQW1ESDtBQUFuRCxNQURkLEVBRUtELFFBQVEsaUJBQUkscUJBQUMsZ0JBQUQ7QUFBTSxNQUFBLFNBQVMsRUFBRSxZQUFqQjtBQUErQixNQUFBLElBQUksRUFBQyxVQUFwQztBQUErQyxNQUFBLFVBQVUsRUFBRTtBQUEzRCxNQUZqQjtBQUFBLElBRkosR0FNRSxJQVBOO0FBU0gsQ0FqQnFCLENBQXRCO0FBb0JBTCxhQUFhLENBQUNXLFlBQWQsR0FBNkI7QUFDekJOLEVBQUFBLFFBQVEsRUFBRSxLQURlO0FBRXpCRSxFQUFBQSxPQUFPLEVBQUUsS0FGZ0I7QUFHekJDLEVBQUFBLFNBQVMsRUFBRTtBQUhjLENBQTdCO0FBTUFSLGFBQWEsQ0FBQ1ksU0FBZCxHQUEwQjtBQUN0QlAsRUFBQUEsUUFBUSxFQUFFUSxzQkFBVUMsSUFERTtBQUV0QlAsRUFBQUEsT0FBTyxFQUFFTSxzQkFBVUMsSUFGRztBQUd0QlIsRUFBQUEsS0FBSyxFQUFFTyxzQkFBVUUsTUFISztBQUl0QlAsRUFBQUEsU0FBUyxFQUFFSSxzQkFBVUksU0FBVixDQUFvQixDQUFDSixzQkFBVUssTUFBWCxFQUFtQkwsc0JBQVVHLE1BQTdCLENBQXBCLENBSlc7QUFLdEJOLEVBQUFBLE9BQU8sRUFBRUksc0JBQVVFO0FBTEcsQ0FBMUI7ZUFRZWYsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgUmVxdWlyZWRMYWJlbCA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuXHJcbiAgICBjb25zdCB7cmVxdWlyZWQsIGxhYmVsLCBpbnZhbGlkLCBjbGFzc05hbWUsIGh0bWxGb3J9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBsYWJlbENsYXNzZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICBcImxhYmVsLWFyZWFcIixcclxuICAgICAgICB7XCItLWludmFsaWRcIjogaW52YWxpZH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAocmVxdWlyZWQgfHwgbGFiZWwpXHJcbiAgICAgICAgICAgID9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2xhYmVsQ2xhc3Nlc30gcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICAgICAge2xhYmVsICYmIDxsYWJlbCBodG1sRm9yPXtodG1sRm9yfSBjbGFzc05hbWU9e1wibGFiZWwtdGV4dFwifT57bGFiZWx9PC9sYWJlbD59XHJcbiAgICAgICAgICAgICAgICB7cmVxdWlyZWQgJiYgPEljb24gY2xhc3NOYW1lPXtcImxhYmVsLWljb25cIn0gaWNvbj1cImFzdGVyaXNrXCIgY3VzdG9tU2l6ZT17N30vPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgOiBudWxsXHJcbiAgICApO1xyXG59KTtcclxuXHJcblxyXG5SZXF1aXJlZExhYmVsLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIGludmFsaWQ6IGZhbHNlLFxyXG4gICAgY2xhc3NOYW1lOiB7fVxyXG59XHJcblxyXG5SZXF1aXJlZExhYmVsLnByb3BUeXBlcyA9IHtcclxuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjbGFzc05hbWU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5vYmplY3QsIHByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgIGh0bWxGb3I6IFByb3BUeXBlcy5zdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWlyZWRMYWJlbCJdfQ==