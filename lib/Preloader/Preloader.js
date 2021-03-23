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
                  }, 'preloader-mock-row-' + i);
                })
              }, 'preloader-row-container-' + i);
            })]
          }, 'preloader-mock-container-' + i);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QcmVsb2FkZXIvUHJlbG9hZGVyLmpzIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsInByb3BzIiwiY291bnQiLCJpdGVtcyIsIndpZHRoIiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbkdlbmVyYWwiLCJiYWNrZ3JvdW5kIiwibWFpblN0eWxlcyIsImJsdXIiLCJmbGV4RGlyZWN0aW9uIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiZWwiLCJpIiwiT2JqZWN0IiwiYXNzaWduIiwiZmlsdGVyIiwicmVwZWF0Iiwic3R5bGVzIiwiaXRlbVN0eWxlcyIsImRpc3BsYXkiLCJfIiwic3R5bGUiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJhcnJheSIsInN0cmluZyIsImJvb2wiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxTOzs7OztBQUNGLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1RBLEtBRFM7QUFFbEI7Ozs7V0FFRCxrQkFBUztBQUFBLHdCQUN1RixLQUFLQSxLQUQ1RjtBQUFBLFVBQ0dDLEtBREgsZUFDR0EsS0FESDtBQUFBLFVBQ1VDLEtBRFYsZUFDVUEsS0FEVjtBQUFBLFVBQ2lCQyxLQURqQixlQUNpQkEsS0FEakI7QUFBQSxVQUN3QkMsTUFEeEIsZUFDd0JBLE1BRHhCO0FBQUEsVUFDZ0NDLG9CQURoQyxlQUNnQ0Esb0JBRGhDO0FBQUEsVUFDc0RDLFVBRHRELGVBQ3NEQSxVQUR0RDtBQUFBLFVBQ2tFQyxVQURsRSxlQUNrRUEsVUFEbEU7QUFBQSxVQUM4RUMsSUFEOUUsZUFDOEVBLElBRDlFO0FBR0wsMEJBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBQyxlQUFmO0FBQStCLFFBQUEsS0FBSyxFQUFFO0FBQUVDLFVBQUFBLGFBQWEsRUFBRUo7QUFBakIsU0FBdEM7QUFB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bEJ4QixFQUFBQSxJQUFJLEVBQUVtQixzQkFBVUc7QUFSRSxDQUF0QjtlQVdlL0IsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY291bnQsIGl0ZW1zLCB3aWR0aCwgaGVpZ2h0LCBmbGV4RGlyZWN0aW9uR2VuZXJhbCwgYmFja2dyb3VuZCwgbWFpblN0eWxlcywgYmx1ciB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2YtcHJlbG9hZGVyXCIgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogZmxleERpcmVjdGlvbkdlbmVyYWwgfX0+XHJcbiAgICAgICAgICAgICAgICB7bmV3IEFycmF5KGNvdW50KS5maWxsKG51bGwpLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IFwibW9jay1jb250YWluZXJcIjogdHJ1ZSwgXCJncmF5XCI6IGJhY2tncm91bmQgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtPYmplY3QuYXNzaWduKHsgd2lkdGgsIGhlaWdodCB9LCBtYWluU3R5bGVzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsncHJlbG9hZGVyLW1vY2stY29udGFpbmVyLScgKyBpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlnaHRcIiBzdHlsZT17eyBmaWx0ZXI6IGBibHVyKCR7Ymx1cn0pYCB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoeyByZXBlYXQsIHdpZHRoLCBoZWlnaHQsIHN0eWxlcywgaXRlbVN0eWxlcyB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e09iamVjdC5hc3NpZ24oeyBkaXNwbGF5OiBcImZsZXhcIiB9LCBpdGVtU3R5bGVzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eydwcmVsb2FkZXItcm93LWNvbnRhaW5lci0nICsgaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3IEFycmF5KHJlcGVhdCkuZmlsbChudWxsKS5tYXAoKF8sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBzdHlsZXMgPyBzdHlsZXNbaV0gOiB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2NrLXJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e09iamVjdC5hc3NpZ24oeyB3aWR0aCwgaGVpZ2h0IH0sIHN0eWxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eydwcmVsb2FkZXItbW9jay1yb3ctJyArIGl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuUHJlbG9hZGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNvdW50OiAwLFxyXG4gICAgaXRlbXM6IFtdLFxyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAgIGZsZXhEaXJlY3Rpb25HZW5lcmFsOiBcImNvbHVtblwiLFxyXG4gICAgYmFja2dyb3VuZDogdHJ1ZSxcclxuICAgIG1haW5TdHlsZXM6IHt9LFxyXG4gICAgYmx1cjogXCI0cmVtXCJcclxufTtcclxuXHJcblByZWxvYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBjb3VudDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGZsZXhEaXJlY3Rpb25HZW5lcmFsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYmFja2dyb3VuZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYWluU3R5bGVzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgYmx1cjogUHJvcFR5cGVzLnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmVsb2FkZXI7XHJcbiJdfQ==