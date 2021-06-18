"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Result = function Result(props) {
  var records = props.records,
      onClick = props.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: records.map(function (record) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        className: "result--item",
        onMouseDown: function onMouseDown() {
          return onClick(record);
        },
        children: record.referenceData.map(function (data, index) {
          if (index === 0) return /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "main",
            children: data.value
          }, index);
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "additional",
            children: data.value
          }, index);
        })
      }, record.sysId);
    })
  });
};

Result.defaultProps = {
  records: [],
  onClick: _utils.noop
};
Result.propTypes = {
  records: _propTypes["default"].array,
  onClick: _propTypes["default"].func
};
var _default = Result;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb29rdXBGaWVsZC9SZXN1bHQuanMiXSwibmFtZXMiOlsiUmVzdWx0IiwicHJvcHMiLCJyZWNvcmRzIiwib25DbGljayIsIm1hcCIsInJlY29yZCIsInJlZmVyZW5jZURhdGEiLCJkYXRhIiwiaW5kZXgiLCJ2YWx1ZSIsInN5c0lkIiwiZGVmYXVsdFByb3BzIiwibm9vcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNmQyxPQURlLEdBQ0tELEtBREwsQ0FDZkMsT0FEZTtBQUFBLE1BQ05DLE9BRE0sR0FDS0YsS0FETCxDQUNORSxPQURNO0FBR3RCLHNCQUFPO0FBQUEsY0FDRkQsT0FBTyxDQUFDRSxHQUFSLENBQVksVUFBQUMsTUFBTSxFQUFJO0FBQ25CLDBCQUNJO0FBQUksUUFBQSxTQUFTLEVBQUMsY0FBZDtBQUNJLFFBQUEsV0FBVyxFQUFFO0FBQUEsaUJBQU1GLE9BQU8sQ0FBQ0UsTUFBRCxDQUFiO0FBQUEsU0FEakI7QUFBQSxrQkFFS0EsTUFBTSxDQUFDQyxhQUFQLENBQXFCRixHQUFyQixDQUF5QixVQUFDRyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDdkMsY0FBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUIsb0JBQU87QUFBSSxZQUFBLFNBQVMsRUFBQyxNQUFkO0FBQUEsc0JBQWtDRCxJQUFJLENBQUNFO0FBQXZDLGFBQTBCRCxLQUExQixDQUFQO0FBQ2pCLDhCQUFPO0FBQU0sWUFBQSxTQUFTLEVBQUMsWUFBaEI7QUFBQSxzQkFBMENELElBQUksQ0FBQ0U7QUFBL0MsYUFBa0NELEtBQWxDLENBQVA7QUFDSCxTQUhBO0FBRkwsU0FBa0NILE1BQU0sQ0FBQ0ssS0FBekMsQ0FESjtBQVNILEtBVkE7QUFERSxJQUFQO0FBYUgsQ0FoQkQ7O0FBa0JBVixNQUFNLENBQUNXLFlBQVAsR0FBc0I7QUFDbEJULEVBQUFBLE9BQU8sRUFBRSxFQURTO0FBRWxCQyxFQUFBQSxPQUFPLEVBQUVTO0FBRlMsQ0FBdEI7QUFLQVosTUFBTSxDQUFDYSxTQUFQLEdBQW1CO0FBQ2ZYLEVBQUFBLE9BQU8sRUFBRVksc0JBQVVDLEtBREo7QUFFZlosRUFBQUEsT0FBTyxFQUFFVyxzQkFBVUU7QUFGSixDQUFuQjtlQUtlaEIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7bm9vcH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5jb25zdCBSZXN1bHQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtyZWNvcmRzLCBvbkNsaWNrfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIHtyZWNvcmRzLm1hcChyZWNvcmQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlc3VsdC0taXRlbVwiIGtleT17cmVjb3JkLnN5c0lkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiBvbkNsaWNrKHJlY29yZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZWNvcmQucmVmZXJlbmNlRGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkgcmV0dXJuIDxoMyBjbGFzc05hbWU9XCJtYWluXCIga2V5PXtpbmRleH0+e2RhdGEudmFsdWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImFkZGl0aW9uYWxcIiBrZXk9e2luZGV4fT57ZGF0YS52YWx1ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICA8Lz5cclxufTtcclxuXHJcblJlc3VsdC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICByZWNvcmRzOiBbXSxcclxuICAgIG9uQ2xpY2s6IG5vb3BcclxufVxyXG5cclxuUmVzdWx0LnByb3BUeXBlcyA9IHtcclxuICAgIHJlY29yZHM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdCJdfQ==