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