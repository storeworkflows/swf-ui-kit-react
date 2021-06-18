"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Preloader = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var count = props.count,
      items = props.items,
      width = props.width,
      height = props.height,
      flexDirectionGeneral = props.flexDirectionGeneral,
      background = props.background,
      mainStyles = props.mainStyles,
      blur = props.blur;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "swf-preloader",
    style: {
      flexDirection: flexDirectionGeneral,
      flexWrap: 'wrap'
    },
    ref: ref,
    children: new Array(count).fill(null).map(function (el, i) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _classnames["default"])({
          "mock-container": true,
          "gray": background
        }),
        style: Object.assign({
          width: width,
          height: height
        }, mainStyles),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "light-container",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "light",
            style: {
              filter: "blur(".concat(blur, ")")
            }
          })
        }), items.map(function (_ref, i) {
          var repeat = _ref.repeat,
              width = _ref.width,
              height = _ref.height,
              styles = _ref.styles,
              itemStyles = _ref.itemStyles;
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: Object.assign({
              display: "flex"
            }, itemStyles),
            children: new Array(repeat).fill(null).map(function (_, i) {
              var style = styles ? styles[i] : {};
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "mock-row",
                style: Object.assign({
                  width: width,
                  height: height
                }, style)
              }, "".concat(width, "-").concat(height, "-").concat(count, "-").concat(repeat, "-").concat(i, "-preloader-mock-row"));
            })
          }, "".concat(width, "-").concat(height, "-").concat(count, "-").concat(repeat, "-").concat(i, "-preloader-row-container"));
        })]
      }, "".concat(width, "-").concat(height, "-").concat(count, "-").concat(i, "-preloader-mock-container"));
    })
  });
});
Preloader.defaultProps = {
  count: 0,
  items: [],
  width: "auto",
  height: "auto",
  flexDirectionGeneral: "column",
  background: true,
  mainStyles: {},
  blur: "4rem"
};
Preloader.propTypes = {
  count: _propTypes["default"].number,
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    repeat: _propTypes["default"].number,
    width: _propTypes["default"].string,
    height: _propTypes["default"].string,
    styles: _propTypes["default"].arrayOf(_propTypes["default"].object),
    itemStyles: _propTypes["default"].object
  })),
  width: _propTypes["default"].string,
  height: _propTypes["default"].string,
  flexDirectionGeneral: _propTypes["default"].oneOf(["row", "row-reverse", "column", "column-reverse"]),
  background: _propTypes["default"].bool,
  mainStyles: _propTypes["default"].object,
  blur: _propTypes["default"].string
};
var _default = Preloader;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QcmVsb2FkZXIvUHJlbG9hZGVyLmpzIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiY291bnQiLCJpdGVtcyIsIndpZHRoIiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbkdlbmVyYWwiLCJiYWNrZ3JvdW5kIiwibWFpblN0eWxlcyIsImJsdXIiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFdyYXAiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJlbCIsImkiLCJPYmplY3QiLCJhc3NpZ24iLCJmaWx0ZXIiLCJyZXBlYXQiLCJzdHlsZXMiLCJpdGVtU3R5bGVzIiwiZGlzcGxheSIsIl8iLCJzdHlsZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImFycmF5T2YiLCJzaGFwZSIsInN0cmluZyIsIm9iamVjdCIsIm9uZU9mIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLGdCQUFHQyxLQUFLLENBQUNDLFVBQU4sQ0FBaUIsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQUEsTUFFeENDLEtBRndDLEdBRTJDRixLQUYzQyxDQUV4Q0UsS0FGd0M7QUFBQSxNQUVqQ0MsS0FGaUMsR0FFMkNILEtBRjNDLENBRWpDRyxLQUZpQztBQUFBLE1BRTFCQyxLQUYwQixHQUUyQ0osS0FGM0MsQ0FFMUJJLEtBRjBCO0FBQUEsTUFFbkJDLE1BRm1CLEdBRTJDTCxLQUYzQyxDQUVuQkssTUFGbUI7QUFBQSxNQUVYQyxvQkFGVyxHQUUyQ04sS0FGM0MsQ0FFWE0sb0JBRlc7QUFBQSxNQUVXQyxVQUZYLEdBRTJDUCxLQUYzQyxDQUVXTyxVQUZYO0FBQUEsTUFFdUJDLFVBRnZCLEdBRTJDUixLQUYzQyxDQUV1QlEsVUFGdkI7QUFBQSxNQUVtQ0MsSUFGbkMsR0FFMkNULEtBRjNDLENBRW1D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O0FBQ2xCekIsRUFBQUEsS0FBSyxFQUFFMEIsc0JBQVVDLE1BREM7QUFFbEIxQixFQUFBQSxLQUFLLEVBQUV5QixzQkFBVUUsT0FBVixDQUNIRixzQkFBVUcsS0FBVixDQUFnQjtBQUNaWCxJQUFBQSxNQUFNLEVBQUVRLHNCQUFVQyxNQUROO0FBRVp6QixJQUFBQSxLQUFLLEVBQUV3QixzQkFBVUksTUFGTDtBQUdaM0IsSUFBQUEsTUFBTSxFQUFFdUIsc0JBQVVJLE1BSE47QUFJWlgsSUFBQUEsTUFBTSxFQUFFTyxzQkFBVUUsT0FBVixDQUFrQkYsc0JBQVVLLE1BQTVCLENBSkk7QUFLWlgsSUFBQUEsVUFBVSxFQUFFTSxzQkFBVUs7QUFMVixHQUFoQixDQURHLENBRlc7QUFXbEI3QixFQUFBQSxLQUFLLEVBQUV3QixzQkFBVUksTUFYQztBQVlsQjNCLEVBQUFBLE1BQU0sRUFBRXVCLHNCQUFVSSxNQVpBO0FBYWxCMUIsRUFBQUEsb0JBQW9CLEVBQUVzQixzQkFBVU0sS0FBVixDQUFnQixDQUNsQyxLQURrQyxFQUMzQixhQUQyQixFQUNaLFFBRFksRUFDRixnQkFERSxDQUFoQixDQWJKO0FBZ0JsQjNCLEVBQUFBLFVBQVUsRUFBRXFCLHNCQUFVTyxJQWhCSjtBQWlCbEIzQixFQUFBQSxVQUFVLEVBQUVvQixzQkFBVUssTUFqQko7QUFrQmxCeEIsRUFBQUEsSUFBSSxFQUFFbUIsc0JBQVVJO0FBbEJFLENBQXRCO2VBcUJlbkMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jb25zdCBQcmVsb2FkZXIgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2NvdW50LCBpdGVtcywgd2lkdGgsIGhlaWdodCwgZmxleERpcmVjdGlvbkdlbmVyYWwsIGJhY2tncm91bmQsIG1haW5TdHlsZXMsIGJsdXJ9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3Zi1wcmVsb2FkZXJcIiBzdHlsZT17e2ZsZXhEaXJlY3Rpb246IGZsZXhEaXJlY3Rpb25HZW5lcmFsLCBmbGV4V3JhcDogJ3dyYXAnfX1cclxuICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7bmV3IEFycmF5KGNvdW50KS5maWxsKG51bGwpLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1wibW9jay1jb250YWluZXJcIjogdHJ1ZSwgXCJncmF5XCI6IGJhY2tncm91bmR9KX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17T2JqZWN0LmFzc2lnbih7d2lkdGgsIGhlaWdodH0sIG1haW5TdHlsZXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YCR7d2lkdGh9LSR7aGVpZ2h0fS0ke2NvdW50fS0ke2l9LXByZWxvYWRlci1tb2NrLWNvbnRhaW5lcmB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWdodFwiIHN0eWxlPXt7ZmlsdGVyOiBgYmx1cigke2JsdXJ9KWB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKHtyZXBlYXQsIHdpZHRoLCBoZWlnaHQsIHN0eWxlcywgaXRlbVN0eWxlc30sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e09iamVjdC5hc3NpZ24oe2Rpc3BsYXk6IFwiZmxleFwifSwgaXRlbVN0eWxlcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake3dpZHRofS0ke2hlaWdodH0tJHtjb3VudH0tJHtyZXBlYXR9LSR7aX0tcHJlbG9hZGVyLXJvdy1jb250YWluZXJgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3IEFycmF5KHJlcGVhdCkuZmlsbChudWxsKS5tYXAoKF8sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlcyA/IHN0eWxlc1tpXSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vY2stcm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtPYmplY3QuYXNzaWduKHt3aWR0aCwgaGVpZ2h0fSwgc3R5bGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHt3aWR0aH0tJHtoZWlnaHR9LSR7Y291bnR9LSR7cmVwZWF0fS0ke2l9LXByZWxvYWRlci1tb2NrLXJvd2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0pO1xyXG5QcmVsb2FkZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY291bnQ6IDAsXHJcbiAgICBpdGVtczogW10sXHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgZmxleERpcmVjdGlvbkdlbmVyYWw6IFwiY29sdW1uXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgbWFpblN0eWxlczoge30sXHJcbiAgICBibHVyOiBcIjRyZW1cIlxyXG59O1xyXG5cclxuUHJlbG9hZGVyLnByb3BUeXBlcyA9IHtcclxuICAgIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgICAgIHJlcGVhdDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICAgICAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgc3R5bGVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgICAgICAgICAgaXRlbVN0eWxlczogUHJvcFR5cGVzLm9iamVjdFxyXG4gICAgICAgIH0pXHJcbiAgICApLFxyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBmbGV4RGlyZWN0aW9uR2VuZXJhbDogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgICAgICBcInJvd1wiLCBcInJvdy1yZXZlcnNlXCIsIFwiY29sdW1uXCIsIFwiY29sdW1uLXJldmVyc2VcIlxyXG4gICAgXSksXHJcbiAgICBiYWNrZ3JvdW5kOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG1haW5TdHlsZXM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBibHVyOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZWxvYWRlcjtcclxuIl19