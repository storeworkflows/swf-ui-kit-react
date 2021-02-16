"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames2 = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Card(props) {
  var vertical = props.vertical,
      loading = props.loading,
      customStyles = props.customStyles,
      size = props.size;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
      type: "text/css",
      children: _styles["default"]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames2["default"])(_defineProperty({
        "swf-card": true,
        "vertical": vertical
      }, "--".concat(size), true)),
      style: customStyles,
      children: props.children
    })]
  });
}

Card.propTypes = {
  vertical: _propTypes["default"].bool,
  loading: _propTypes["default"].bool,
  customStyles: _propTypes["default"].object,
  size: _propTypes["default"].oneOf(["s", "m", "l"])
};
var _default = Card;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXJkL0NhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwidmVydGljYWwiLCJsb2FkaW5nIiwiY3VzdG9tU3R5bGVzIiwic2l6ZSIsInN0eWxlcyIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwiYm9vbCIsIm9iamVjdCIsIm9uZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsU0FBU0EsSUFBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUEsTUFDYkMsUUFEYSxHQUM2QkQsS0FEN0IsQ0FDYkMsUUFEYTtBQUFBLE1BQ0hDLE9BREcsR0FDNkJGLEtBRDdCLENBQ0hFLE9BREc7QUFBQSxNQUNNQyxZQUROLEdBQzZCSCxLQUQ3QixDQUNNRyxZQUROO0FBQUEsTUFDb0JDLElBRHBCLEdBQzZCSixLQUQ3QixDQUNvQkksSUFEcEI7QUFHckIsc0JBQ0M7QUFBQSw0QkFDQztBQUFPLE1BQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxnQkFBd0JDO0FBQXhCLE1BREQsZUFFQztBQUFLLE1BQUEsU0FBUyxFQUNiO0FBQ0Msb0JBQVksSUFEYjtBQUVDLG9CQUFZSjtBQUZiLHFCQUdPRyxJQUhQLEdBR2dCLElBSGhCLEVBREQ7QUFNRSxNQUFBLEtBQUssRUFBRUQsWUFOVDtBQUFBLGdCQU9FSCxLQUFLLENBQUNNO0FBUFIsTUFGRDtBQUFBLElBREQ7QUFjQTs7QUFFRFAsSUFBSSxDQUFDUSxTQUFMLEdBQWlCO0FBQ2hCTixFQUFBQSxRQUFRLEVBQUVNLHNCQUFVQyxJQURKO0FBRWhCTixFQUFBQSxPQUFPLEVBQUVLLHNCQUFVQyxJQUZIO0FBR2hCTCxFQUFBQSxZQUFZLEVBQUVJLHNCQUFVRSxNQUhSO0FBSWhCTCxFQUFBQSxJQUFJLEVBQUVHLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWhCO0FBSlUsQ0FBakI7ZUFPZVgsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuZnVuY3Rpb24gQ2FyZCAocHJvcHMpIHtcclxuXHRjb25zdCB7IHZlcnRpY2FsLCBsb2FkaW5nLCBjdXN0b21TdHlsZXMsIHNpemUgfSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e1xyXG5cdFx0XHRcdGNsYXNzbmFtZXMoe1xyXG5cdFx0XHRcdFx0XCJzd2YtY2FyZFwiOiB0cnVlLFxyXG5cdFx0XHRcdFx0XCJ2ZXJ0aWNhbFwiOiB2ZXJ0aWNhbCxcclxuXHRcdFx0XHRcdFtgLS0ke3NpemV9YF06IHRydWVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9IHN0eWxlPXtjdXN0b21TdHlsZXN9PlxyXG5cdFx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn1cclxuXHJcbkNhcmQucHJvcFR5cGVzID0ge1xyXG5cdHZlcnRpY2FsOiBwcm9wVHlwZXMuYm9vbCxcclxuXHRsb2FkaW5nOiBwcm9wVHlwZXMuYm9vbCxcclxuXHRjdXN0b21TdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXHJcblx0c2l6ZTogcHJvcFR5cGVzLm9uZU9mKFtcInNcIiwgXCJtXCIsIFwibFwiXSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxyXG4iXX0=