"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Preloader = /*#__PURE__*/function (_Component) {
  _inherits(Preloader, _Component);

  var _super = _createSuper(Preloader);

  function Preloader(props) {
    _classCallCheck(this, Preloader);

    return _super.call(this, props);
  }

  _createClass(Preloader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          count = _this$props.count,
          items = _this$props.items,
          width = _this$props.width,
          height = _this$props.height,
          flexDirectionGeneral = _this$props.flexDirectionGeneral,
          background = _this$props.background,
          mainStyles = _this$props.mainStyles,
          blur = _this$props.blur;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "swf-preloader",
        style: {
          flexDirection: flexDirectionGeneral
        },
        children: new Array(count).fill(null).map(function () {
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
            }), items.map(function (_ref) {
              var repeat = _ref.repeat,
                  width = _ref.width,
                  height = _ref.height,
                  styles = _ref.styles,
                  itemStyles = _ref.itemStyles;
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                style: Object.assign({
                  display: "flex"
                }, itemStyles),
                children: new Array(repeat).fill(null).map(function (_, index) {
                  var style = styles ? styles[index] : {};
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "mock-row",
                    style: Object.assign({
                      width: width,
                      height: height
                    }, style)
                  });
                })
              });
            })]
          });
        })
      });
    }
  }]);

  return Preloader;
}(_react.Component);

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
  items: _propTypes["default"].array,
  width: _propTypes["default"].string,
  height: _propTypes["default"].string,
  flexDirectionGeneral: _propTypes["default"].string,
  background: _propTypes["default"].bool,
  mainStyles: _propTypes["default"].object,
  blur: _propTypes["default"].string
};
var _default = Preloader;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QcmVsb2FkZXIvUHJlbG9hZGVyLmpzIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsInByb3BzIiwiY291bnQiLCJpdGVtcyIsIndpZHRoIiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbkdlbmVyYWwiLCJiYWNrZ3JvdW5kIiwibWFpblN0eWxlcyIsImJsdXIiLCJmbGV4RGlyZWN0aW9uIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiT2JqZWN0IiwiYXNzaWduIiwiZmlsdGVyIiwicmVwZWF0Iiwic3R5bGVzIiwiaXRlbVN0eWxlcyIsImRpc3BsYXkiLCJfIiwiaW5kZXgiLCJzdHlsZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImFycmF5Iiwic3RyaW5nIiwiYm9vbCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFM7Ozs7O0FBQ0YscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDVEEsS0FEUztBQUVsQjs7OztXQUNELGtCQUFTO0FBQUEsd0JBQ3VGLEtBQUtBLEtBRDVGO0FBQUEsVUFDR0MsS0FESCxlQUNHQSxLQURIO0FBQUEsVUFDVUMsS0FEVixlQUNVQSxLQURWO0FBQUEsVUFDaUJDLEtBRGpCLGVBQ2lCQSxLQURqQjtBQUFBLFVBQ3dCQyxNQUR4QixlQUN3QkEsTUFEeEI7QUFBQSxVQUNnQ0Msb0JBRGhDLGVBQ2dDQSxvQkFEaEM7QUFBQSxVQUNzREMsVUFEdEQsZUFDc0RBLFVBRHREO0FBQUEsVUFDa0VDLFVBRGxFLGVBQ2tFQSxVQURsRTtBQUFBLFVBQzhFQyxJQUQ5RSxlQUM4RUEsSUFEOUU7QUFFTCwwQkFBTztBQUFLLFFBQUEsU0FBUyxFQUFDLGVBQWY7QUFBK0IsUUFBQSxLQUFLLEVBQUU7QUFBRUMsVUFBQUEsYUFBYSxFQUFFSjtBQUFqQixTQUF0QztBQUFB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b25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY291bnQsIGl0ZW1zLCB3aWR0aCwgaGVpZ2h0LCBmbGV4RGlyZWN0aW9uR2VuZXJhbCwgYmFja2dyb3VuZCwgbWFpblN0eWxlcywgYmx1ciB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzd2YtcHJlbG9hZGVyXCIgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogZmxleERpcmVjdGlvbkdlbmVyYWwgfX0+XHJcbiAgICAgICAgICAgIHtuZXcgQXJyYXkoY291bnQpLmZpbGwobnVsbCkubWFwKCgpID0+IDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgXCJtb2NrLWNvbnRhaW5lclwiOiB0cnVlLCBcImdyYXlcIjogYmFja2dyb3VuZCB9KX0gc3R5bGU9e09iamVjdC5hc3NpZ24oeyB3aWR0aCwgaGVpZ2h0IH0sIG1haW5TdHlsZXMpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlnaHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWdodFwiIHN0eWxlPXt7IGZpbHRlcjogYGJsdXIoJHtibHVyfSlgIH19Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKHsgcmVwZWF0LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZXMsIGl0ZW1TdHlsZXMgfSkgPT4gPGRpdiBzdHlsZT17T2JqZWN0LmFzc2lnbih7IGRpc3BsYXk6IFwiZmxleFwiIH0sIGl0ZW1TdHlsZXMpfT5cclxuICAgICAgICAgICAgICAgICAgICB7bmV3IEFycmF5KHJlcGVhdCkuZmlsbChudWxsKS5tYXAoKF8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVzID8gc3R5bGVzW2luZGV4XSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibW9jay1yb3dcIiBzdHlsZT17T2JqZWN0LmFzc2lnbih7IHdpZHRoLCBoZWlnaHQgfSwgc3R5bGUpfS8+KTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5QcmVsb2FkZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY291bnQ6IDAsXHJcbiAgICBpdGVtczogW10sXHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgZmxleERpcmVjdGlvbkdlbmVyYWw6IFwiY29sdW1uXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgbWFpblN0eWxlczoge30sXHJcbiAgICBibHVyOiBcIjRyZW1cIlxyXG59O1xyXG5cclxuUHJlbG9hZGVyLnByb3BUeXBlcyA9IHtcclxuICAgIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgIHdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZmxleERpcmVjdGlvbkdlbmVyYWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBiYWNrZ3JvdW5kOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG1haW5TdHlsZXM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBibHVyOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZWxvYWRlcjtcclxuIl19