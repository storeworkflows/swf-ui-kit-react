"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactDom = _interopRequireDefault(require("react-dom"));

var React = _interopRequireWildcard(require("react"));

var _index = require("../../../index");

var _PopoverContent = _interopRequireDefault(require("./PopoverContent/PopoverContent"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var FilterTemplates = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterTemplates, _React$Component);

  var _super = _createSuper(FilterTemplates);

  function FilterTemplates(props) {
    var _this;

    _classCallCheck(this, FilterTemplates);

    _this = _super.call(this, props);

    _this.managePopover = function () {
      _this.setState({
        popoverToogle: !_this.state.popoverToogle
      });
    };

    _this.findTarget = function (elem) {
      _this.setState({
        popoverTarget: elem
      });
    };

    _this.componentDidMount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var myHeaders;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              myHeaders = new Headers();
              myHeaders.append("X-UserToken", window.g_ck); // myHeaders.append("Authorization", "Basic c3dmX2RldmVsb3Blcjpzd2ZfZGV2ZWxvcGVy")

              _context.next = 4;
              return fetch("".concat(window.location.origin, "/api/now/table/sys_filter"), {
                method: "GET",
                headers: myHeaders
              }).then(function (res) {
                return res.json();
              }).then(function (jsonRes) {
                return _this.filterList = jsonRes.result;
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    _this.state = {
      popoverToogle: false,
      popoverTarget: null,
      btnRef: null
    };
    return _this;
  }

  _createClass(FilterTemplates, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var btnStyles = {
        "text-color": "rgb(1,119,142)",
        "hover-text-color": "rgb(1,89,107)",
        "active-text-color": "rgb(1,60,71)"
      };
      var _this$state = this.state,
          popoverToogle = _this$state.popoverToogle,
          popoverTarget = _this$state.popoverTarget;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "popoverTarget",
          ref: this.findTarget,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Button, {
            label: "Filters",
            onClick: this.managePopover,
            ref: function ref(e) {
              return _this2.btnRef = e;
            },
            customStyle: btnStyles,
            variant: "tertiary"
          })
        }), popoverToogle && popoverTarget && /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Popover, {
          opened: popoverToogle,
          positionTarget: {
            current: popoverTarget
          },
          hideTail: false,
          positions: [{
            "target": "bottom-end",
            "content": "top-end"
          }],
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Popover.Content, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PopoverContent["default"], {
              filterList: this.filterList
            })
          })
        })]
      });
    }
  }]);

  return FilterTemplates;
}(React.Component);

exports["default"] = FilterTemplates;