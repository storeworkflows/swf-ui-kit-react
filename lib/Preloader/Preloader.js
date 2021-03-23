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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
                  }, "".concat(width, "-").concat(height, "-").concat(count, "-").concat(repeat, "-preloader-mock-row"));
                })
              }, "".concat(width, "-").concat(height, "-").concat(count, "-").concat(repeat, "-preloader-row-container"));
            })]
          }, "".concat(width, "-").concat(height, "-").concat(count, "-preloader-mock-container"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QcmVsb2FkZXIvUHJlbG9hZGVyLmpzIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsInByb3BzIiwiY291bnQiLCJpdGVtcyIsIndpZHRoIiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbkdlbmVyYWwiLCJiYWNrZ3JvdW5kIiwibWFpblN0eWxlcyIsImJsdXIiLCJmbGV4RGlyZWN0aW9uIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiZWwiLCJpIiwiT2JqZWN0IiwiYXNzaWduIiwiZmlsdGVyIiwicmVwZWF0Iiwic3R5bGVzIiwiaXRlbVN0eWxlcyIsImRpc3BsYXkiLCJfIiwic3R5bGUiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJhcnJheSIsInN0cmluZyIsImJvb2wiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxTOzs7OztBQUNGLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1RBLEtBRFM7QUFFbEI7Ozs7V0FFRCxrQkFBUztBQUFBLHdCQUN1RixLQUFLQSxLQUQ1RjtBQUFBLFVBQ0dDLEtBREgsZUFDR0EsS0FESDtBQUFBLFVBQ1VDLEtBRFYsZUFDVUEsS0FEVjtBQUFBLFVBQ2lCQyxLQURqQixlQUNpQkEsS0FEakI7QUFBQSxVQUN3QkMsTUFEeEIsZUFDd0JBLE1BRHhCO0FBQUEsVUFDZ0NDLG9CQURoQyxlQUNnQ0Esb0JBRGhDO0FBQUEsVUFDc0RDLFVBRHRELGVBQ3NEQSxVQUR0RDtBQUFBLFVBQ2tFQyxVQURsRSxlQUNrRUEsVUFEbEU7QUFBQSxVQUM4RUMsSUFEOUUsZUFDOEVBLElBRDlFO0FBR0wsMEJBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBQyxlQUFmO0FBQStCLFFBQUEsS0FBSyxFQUFFO0FBQUVDLFVBQUFBLGFBQWEsRUFBRUo7QUFBakIsU0FBdEM7QUFB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QVVHLE1BTGQ7QUFNbEJ4QixFQUFBQSxVQUFVLEVBQUVxQixzQkFBVUksSUFOSjtBQU9sQnhCLEVBQUFBLFVBQVUsRUFBRW9CLHNCQUFVSyxNQVBKO0FBUWxCeEIsRUFBQUEsSUFBSSxFQUFFbUIsc0JBQVVHO0FBUkUsQ0FBdEI7ZUFXZS9CLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNvdW50LCBpdGVtcywgd2lkdGgsIGhlaWdodCwgZmxleERpcmVjdGlvbkdlbmVyYWwsIGJhY2tncm91bmQsIG1haW5TdHlsZXMsIGJsdXIgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dmLXByZWxvYWRlclwiIHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246IGZsZXhEaXJlY3Rpb25HZW5lcmFsIH19PlxyXG4gICAgICAgICAgICAgICAge25ldyBBcnJheShjb3VudCkuZmlsbChudWxsKS5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBcIm1vY2stY29udGFpbmVyXCI6IHRydWUsIFwiZ3JheVwiOiBiYWNrZ3JvdW5kIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17T2JqZWN0LmFzc2lnbih7IHdpZHRoLCBoZWlnaHQgfSwgbWFpblN0eWxlcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7d2lkdGh9LSR7aGVpZ2h0fS0ke2NvdW50fS1wcmVsb2FkZXItbW9jay1jb250YWluZXJgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlnaHRcIiBzdHlsZT17eyBmaWx0ZXI6IGBibHVyKCR7Ymx1cn0pYCB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoeyByZXBlYXQsIHdpZHRoLCBoZWlnaHQsIHN0eWxlcywgaXRlbVN0eWxlcyB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e09iamVjdC5hc3NpZ24oeyBkaXNwbGF5OiBcImZsZXhcIiB9LCBpdGVtU3R5bGVzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake3dpZHRofS0ke2hlaWdodH0tJHtjb3VudH0tJHtyZXBlYXR9LXByZWxvYWRlci1yb3ctY29udGFpbmVyYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3IEFycmF5KHJlcGVhdCkuZmlsbChudWxsKS5tYXAoKF8sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBzdHlsZXMgPyBzdHlsZXNbaV0gOiB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2NrLXJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e09iamVjdC5hc3NpZ24oeyB3aWR0aCwgaGVpZ2h0IH0sIHN0eWxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake3dpZHRofS0ke2hlaWdodH0tJHtjb3VudH0tJHtyZXBlYXR9LXByZWxvYWRlci1tb2NrLXJvd2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuUHJlbG9hZGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNvdW50OiAwLFxyXG4gICAgaXRlbXM6IFtdLFxyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAgIGZsZXhEaXJlY3Rpb25HZW5lcmFsOiBcImNvbHVtblwiLFxyXG4gICAgYmFja2dyb3VuZDogdHJ1ZSxcclxuICAgIG1haW5TdHlsZXM6IHt9LFxyXG4gICAgYmx1cjogXCI0cmVtXCJcclxufTtcclxuXHJcblByZWxvYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBjb3VudDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGZsZXhEaXJlY3Rpb25HZW5lcmFsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYmFja2dyb3VuZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYWluU3R5bGVzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgYmx1cjogUHJvcFR5cGVzLnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmVsb2FkZXI7XHJcbiJdfQ==