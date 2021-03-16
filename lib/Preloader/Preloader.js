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
        className: "mock-component",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QcmVsb2FkZXIvUHJlbG9hZGVyLmpzIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsInByb3BzIiwiY291bnQiLCJpdGVtcyIsIndpZHRoIiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbkdlbmVyYWwiLCJiYWNrZ3JvdW5kIiwibWFpblN0eWxlcyIsImJsdXIiLCJmbGV4RGlyZWN0aW9uIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiT2JqZWN0IiwiYXNzaWduIiwiZmlsdGVyIiwicmVwZWF0Iiwic3R5bGVzIiwiaXRlbVN0eWxlcyIsImRpc3BsYXkiLCJfIiwiaW5kZXgiLCJzdHlsZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImFycmF5Iiwic3RyaW5nIiwiYm9vbCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFM7Ozs7O0FBQ0YscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDVEEsS0FEUztBQUVsQjs7OztXQUNELGtCQUFTO0FBQUEsd0JBQ3VGLEtBQUtBLEtBRDVGO0FBQUEsVUFDR0MsS0FESCxlQUNHQSxLQURIO0FBQUEsVUFDVUMsS0FEVixlQUNVQSxLQURWO0FBQUEsVUFDaUJDLEtBRGpCLGVBQ2lCQSxLQURqQjtBQUFBLFVBQ3dCQyxNQUR4QixlQUN3QkEsTUFEeEI7QUFBQSxVQUNnQ0Msb0JBRGhDLGVBQ2dDQSxvQkFEaEM7QUFBQSxVQUNzREMsVUFEdEQsZUFDc0RBLFVBRHREO0FBQUEsVUFDa0VDLFVBRGxFLGVBQ2tFQSxVQURsRTtBQUFBLFVBQzhFQyxJQUQ5RSxlQUM4RUEsSUFEOUU7QUFFTCwwQkFBTztBQUFLLFFBQUEsU0FBUyxFQUFDLGdCQUFmO0FBQWdDLFFBQUEsS0FBSyxFQUFFO0FBQUVDLFVBQUFBLGFBQWEsRUFBRUo7QUFBakIsU0FBdkM7QUFB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cG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNvdW50LCBpdGVtcywgd2lkdGgsIGhlaWdodCwgZmxleERpcmVjdGlvbkdlbmVyYWwsIGJhY2tncm91bmQsIG1haW5TdHlsZXMsIGJsdXIgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibW9jay1jb21wb25lbnRcIiBzdHlsZT17eyBmbGV4RGlyZWN0aW9uOiBmbGV4RGlyZWN0aW9uR2VuZXJhbCB9fT5cclxuICAgICAgICAgICAge25ldyBBcnJheShjb3VudCkuZmlsbChudWxsKS5tYXAoKCkgPT4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBcIm1vY2stY29udGFpbmVyXCI6IHRydWUsIFwiZ3JheVwiOiBiYWNrZ3JvdW5kIH0pfSBzdHlsZT17T2JqZWN0LmFzc2lnbih7IHdpZHRoLCBoZWlnaHQgfSwgbWFpblN0eWxlcyl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpZ2h0XCIgc3R5bGU9e3sgZmlsdGVyOiBgYmx1cigke2JsdXJ9KWAgfX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoeyByZXBlYXQsIHdpZHRoLCBoZWlnaHQsIHN0eWxlcywgaXRlbVN0eWxlcyB9KSA9PiA8ZGl2IHN0eWxlPXtPYmplY3QuYXNzaWduKHsgZGlzcGxheTogXCJmbGV4XCIgfSwgaXRlbVN0eWxlcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtuZXcgQXJyYXkocmVwZWF0KS5maWxsKG51bGwpLm1hcCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBzdHlsZXMgPyBzdHlsZXNbaW5kZXhdIDoge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJtb2NrLXJvd1wiIHN0eWxlPXtPYmplY3QuYXNzaWduKHsgd2lkdGgsIGhlaWdodCB9LCBzdHlsZSl9Lz4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblByZWxvYWRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjb3VudDogMCxcclxuICAgIGl0ZW1zOiBbXSxcclxuICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uR2VuZXJhbDogXCJjb2x1bW5cIixcclxuICAgIGJhY2tncm91bmQ6IHRydWUsXHJcbiAgICBtYWluU3R5bGVzOiB7fSxcclxuICAgIGJsdXI6IFwiNHJlbVwiXHJcbn07XHJcblxyXG5QcmVsb2FkZXIucHJvcFR5cGVzID0ge1xyXG4gICAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBmbGV4RGlyZWN0aW9uR2VuZXJhbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGJhY2tncm91bmQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFpblN0eWxlczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGJsdXI6IFByb3BUeXBlcy5zdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlbG9hZGVyO1xyXG4iXX0=