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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRmlsdGVyVGVtcGxhdGVzL0ZpbHRlclRlbXBsYXRlcy5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJUZW1wbGF0ZXMiLCJwcm9wcyIsIm1hbmFnZVBvcG92ZXIiLCJzZXRTdGF0ZSIsInBvcG92ZXJUb29nbGUiLCJzdGF0ZSIsImZpbmRUYXJnZXQiLCJlbGVtIiwicG9wb3ZlclRhcmdldCIsImNvbXBvbmVudERpZE1vdW50IiwibXlIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsIndpbmRvdyIsImdfY2siLCJmZXRjaCIsImxvY2F0aW9uIiwib3JpZ2luIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwianNvblJlcyIsImZpbHRlckxpc3QiLCJyZXN1bHQiLCJidG5SZWYiLCJidG5TdHlsZXMiLCJlIiwiY3VycmVudCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7QUFDakIsMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxVQVNuQkMsYUFUbUIsR0FTSCxZQUFNO0FBQ2xCLFlBQUtDLFFBQUwsQ0FBYztBQUFDQyxRQUFBQSxhQUFhLEVBQUUsQ0FBQyxNQUFLQyxLQUFMLENBQVdEO0FBQTVCLE9BQWQ7QUFDSCxLQVhrQjs7QUFBQSxVQWFuQkUsVUFibUIsR0FhTixVQUFDQyxJQUFELEVBQVU7QUFDbkIsWUFBS0osUUFBTCxDQUFjO0FBQUNLLFFBQUFBLGFBQWEsRUFBRUQ7QUFBaEIsT0FBZDtBQUNILEtBZmtCOztBQUFBLFVBaUJuQkUsaUJBakJtQix3RUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hDLGNBQUFBLFNBRFcsR0FDQyxJQUFJQyxPQUFKLEVBREQ7QUFFakJELGNBQUFBLFNBQVMsQ0FBQ0UsTUFBVixDQUFpQixhQUFqQixFQUFnQ0MsTUFBTSxDQUFDQyxJQUF2QyxFQUZpQixDQUdqQjs7QUFIaUI7QUFBQSxxQkFLWEMsS0FBSyxXQUFJRixNQUFNLENBQUNHLFFBQVAsQ0FBZ0JDLE1BQXBCLGdDQUF1RDtBQUM5REMsZ0JBQUFBLE1BQU0sRUFBRSxLQURzRDtBQUU5REMsZ0JBQUFBLE9BQU8sRUFBRVQ7QUFGcUQsZUFBdkQsQ0FBTCxDQUlMVSxJQUpLLENBSUEsVUFBQUMsR0FBRztBQUFBLHVCQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLGVBSkgsRUFLTEYsSUFMSyxDQUtBLFVBQUFHLE9BQU87QUFBQSx1QkFBSSxNQUFLQyxVQUFMLEdBQWtCRCxPQUFPLENBQUNFLE1BQTlCO0FBQUEsZUFMUCxDQUxXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBakJGO0FBRWYsVUFBS3BCLEtBQUwsR0FBYTtBQUNURCxNQUFBQSxhQUFhLEVBQUUsS0FETjtBQUVUSSxNQUFBQSxhQUFhLEVBQUUsSUFGTjtBQUdUa0IsTUFBQUEsTUFBTSxFQUFFO0FBSEMsS0FBYjtBQUZlO0FBT2xCOzs7O1dBeUJELGtCQUFTO0FBQUE7O0FBQ0wsVUFBTUMsU0FBUyxHQUFHO0FBQ2Qsc0JBQWMsZ0JBREE7QUFFZCw0QkFBb0IsZUFGTjtBQUdkLDZCQUFxQjtBQUhQLE9BQWxCO0FBREssd0JBT29DLEtBQUt0QixLQVB6QztBQUFBLFVBT0dELGFBUEgsZUFPR0EsYUFQSDtBQUFBLFVBT2tCSSxhQVBsQixlQU9rQkEsYUFQbEI7QUFTTCwwQkFDSTtBQUFBLGdDQUNJO0FBQUssVUFBQSxTQUFTLEVBQUMsZUFBZjtBQUErQixVQUFBLEdBQUcsRUFBRSxLQUFLRixVQUF6QztBQUFBLGlDQUNJLHFCQUFDLGFBQUQ7QUFBUSxZQUFBLEtBQUssRUFBQyxTQUFkO0FBQXdCLFlBQUEsT0FBTyxFQUFFLEtBQUtKLGFBQXRDO0FBQXFELFlBQUEsR0FBRyxFQUFFLGFBQUEwQixDQUFDO0FBQUEscUJBQUksTUFBSSxDQUFDRixNQUFMLEdBQWNFLENBQWxCO0FBQUEsYUFBM0Q7QUFBZ0YsWUFBQSxXQUFXLEVBQUVELFNBQTdGO0FBQXdHLFlBQUEsT0FBTyxFQUFDO0FBQWhIO0FBREosVUFESixFQUlLdkIsYUFBYSxJQUFJSSxhQUFqQixpQkFBa0MscUJBQUMsY0FBRDtBQUFTLFVBQUEsTUFBTSxFQUFFSixhQUFqQjtBQUFnQyxVQUFBLGNBQWMsRUFBRTtBQUFDeUIsWUFBQUEsT0FBTyxFQUFFckI7QUFBVixXQUFoRDtBQUEwRSxVQUFBLFFBQVEsRUFBRSxLQUFwRjtBQUEyRixVQUFBLFNBQVMsRUFBRSxDQUFDO0FBQUMsc0JBQVMsWUFBVjtBQUF1Qix1QkFBVTtBQUFqQyxXQUFELENBQXRHO0FBQUEsaUNBQy9CLHFCQUFDLGNBQUQsQ0FBUyxPQUFUO0FBQUEsbUNBQ0kscUJBQUMsMEJBQUQ7QUFBZ0IsY0FBQSxVQUFVLEVBQUUsS0FBS2dCO0FBQWpDO0FBREo7QUFEK0IsVUFKdkM7QUFBQSxRQURKO0FBWUg7Ozs7RUF0RHdDTSxLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24sIFBvcG92ZXIgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjtcclxuaW1wb3J0IFBvcG92ZXJDb250ZW50IGZyb20gJy4vUG9wb3ZlckNvbnRlbnQvUG9wb3ZlckNvbnRlbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyVGVtcGxhdGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBvcG92ZXJUb29nbGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwb3BvdmVyVGFyZ2V0OiBudWxsLFxyXG4gICAgICAgICAgICBidG5SZWY6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG1hbmFnZVBvcG92ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cG9wb3ZlclRvb2dsZTogIXRoaXMuc3RhdGUucG9wb3ZlclRvb2dsZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRUYXJnZXQgPSAoZWxlbSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3BvcG92ZXJUYXJnZXQ6IGVsZW19KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50ICA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIG15SGVhZGVycy5hcHBlbmQoXCJYLVVzZXJUb2tlblwiLCB3aW5kb3cuZ19jayk7XHJcbiAgICAgICAgLy8gbXlIZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjM2RtWDJSbGRtVnNiM0JsY2pwemQyWmZaR1YyWld4dmNHVnlcIilcclxuXHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vYXBpL25vdy90YWJsZS9zeXNfZmlsdGVyYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG15SGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oanNvblJlcyA9PiB0aGlzLmZpbHRlckxpc3QgPSBqc29uUmVzLnJlc3VsdClcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgYnRuU3R5bGVzID0ge1xyXG4gICAgICAgICAgICBcInRleHQtY29sb3JcIjogXCJyZ2IoMSwxMTksMTQyKVwiLFxyXG4gICAgICAgICAgICBcImhvdmVyLXRleHQtY29sb3JcIjogXCJyZ2IoMSw4OSwxMDcpXCIsXHJcbiAgICAgICAgICAgIFwiYWN0aXZlLXRleHQtY29sb3JcIjogXCJyZ2IoMSw2MCw3MSlcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeyBwb3BvdmVyVG9vZ2xlLCBwb3BvdmVyVGFyZ2V0IH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcG92ZXJUYXJnZXRcIiByZWY9e3RoaXMuZmluZFRhcmdldH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIkZpbHRlcnNcIiBvbkNsaWNrPXt0aGlzLm1hbmFnZVBvcG92ZXJ9IHJlZj17ZSA9PiB0aGlzLmJ0blJlZiA9IGV9IGN1c3RvbVN0eWxlPXtidG5TdHlsZXN9IHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtwb3BvdmVyVG9vZ2xlICYmIHBvcG92ZXJUYXJnZXQgJiYgPFBvcG92ZXIgb3BlbmVkPXtwb3BvdmVyVG9vZ2xlfSBwb3NpdGlvblRhcmdldD17e2N1cnJlbnQ6IHBvcG92ZXJUYXJnZXR9fSBoaWRlVGFpbD17ZmFsc2V9IHBvc2l0aW9ucz17W3tcInRhcmdldFwiOlwiYm90dG9tLWVuZFwiLFwiY29udGVudFwiOlwidG9wLWVuZFwifV19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyQ29udGVudCBmaWx0ZXJMaXN0PXt0aGlzLmZpbHRlckxpc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIFxyXG4gICAgfVxyXG59Il19