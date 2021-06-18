"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TargetRef = exports.Default = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Popover = _interopRequireDefault(require("./Popover"));

var _Toggle = _interopRequireDefault(require("../Toggle/Toggle"));

var _InfoMessage = _interopRequireDefault(require("../InfoMessage/InfoMessage"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Containers/Popover',
  component: _Popover["default"],
  args: {
    positions: [{
      target: "bottom-start",
      content: "top-start"
    }, {
      target: "center-end",
      content: "center-start"
    }],
    hideTail: true
  }
};
exports["default"] = _default;

var Default = function Default(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Popover["default"], _objectSpread(_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Target, {
      children: "Target"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          width: "800px",
          height: "100px",
          padding: "10px"
        },
        children: "Example Content"
      })
    })]
  }));
};

exports.Default = Default;

var TargetRef = function TargetRef(args) {
  var PopoverWithRef = /*#__PURE__*/function (_React$Component) {
    _inherits(PopoverWithRef, _React$Component);

    var _super = _createSuper(PopoverWithRef);

    function PopoverWithRef(props) {
      var _this;

      _classCallCheck(this, PopoverWithRef);

      _this = _super.call(this, props);
      _this.state = {
        styles: {
          width: "100px",
          height: "100px",
          padding: "10px"
        },
        current: null
      };
      _this.popoverRef = /*#__PURE__*/(0, _react.createRef)();
      return _this;
    }

    _createClass(PopoverWithRef, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !_.isEqual(nextState, this.state);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InfoMessage["default"], {
            content: "Message content"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            ref: function ref(el) {
              return _this2.setState({
                current: el
              });
            },
            children: "Target by ref"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], _objectSpread(_objectSpread({}, this.props), {}, {
            positionTarget: {
              current: this.state.current
            },
            opened: true,
            ref: function ref(el) {
              return _this2.popoverRef.current = el;
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                style: this.state.styles,
                onClick: function onClick() {
                  return _this2.setState({
                    styles: {
                      width: "100px",
                      height: "200px",
                      padding: "10px"
                    }
                  });
                },
                children: ["Example Content", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Toggle["default"], {})]
              })
            })
          }))]
        });
      }
    }]);

    return PopoverWithRef;
  }(_react["default"].Component);

  ;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(PopoverWithRef, _objectSpread({}, args));
};

exports.TargetRef = TargetRef;
TargetRef.parameters = {
  docs: {
    source: {
      type: 'code'
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qb3BvdmVyL3BvcG92ZXIuc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIlBvcG92ZXIiLCJhcmdzIiwicG9zaXRpb25zIiwidGFyZ2V0IiwiY29udGVudCIsImhpZGVUYWlsIiwiRGVmYXVsdCIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsIlRhcmdldFJlZiIsIlBvcG92ZXJXaXRoUmVmIiwicHJvcHMiLCJzdGF0ZSIsInN0eWxlcyIsImN1cnJlbnQiLCJwb3BvdmVyUmVmIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwibmV4dENvbnRleHQiLCJfIiwiaXNFcXVhbCIsImVsIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInBhcmFtZXRlcnMiLCJkb2NzIiwic291cmNlIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUVlO0FBQ1hBLEVBQUFBLEtBQUssRUFBRSwrQkFESTtBQUVYQyxFQUFBQSxTQUFTLEVBQUVDLG1CQUZBO0FBR1hDLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxTQUFTLEVBQUUsQ0FDUDtBQUNJQyxNQUFBQSxNQUFNLEVBQUUsY0FEWjtBQUVJQyxNQUFBQSxPQUFPLEVBQUU7QUFGYixLQURPLEVBS1A7QUFDSUQsTUFBQUEsTUFBTSxFQUFFLFlBRFo7QUFFSUMsTUFBQUEsT0FBTyxFQUFFO0FBRmIsS0FMTyxDQURUO0FBV0ZDLElBQUFBLFFBQVEsRUFBRTtBQVhSO0FBSEssQzs7O0FBbUJSLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNMLElBQUQ7QUFBQSxzQkFBVSxzQkFBQyxtQkFBRCxrQ0FBYUEsSUFBYjtBQUFBLDRCQUM3QixxQkFBQyxtQkFBRCxDQUFTLE1BQVQ7QUFBQTtBQUFBLE1BRDZCLGVBSTdCLHFCQUFDLG1CQUFELENBQVMsT0FBVDtBQUFBLDZCQUNJO0FBQUssUUFBQSxLQUFLLEVBQUU7QUFBQ00sVUFBQUEsS0FBSyxFQUFFLE9BQVI7QUFBaUJDLFVBQUFBLE1BQU0sRUFBRSxPQUF6QjtBQUFrQ0MsVUFBQUEsT0FBTyxFQUFFO0FBQTNDLFNBQVo7QUFBQTtBQUFBO0FBREosTUFKNkI7QUFBQSxLQUFWO0FBQUEsQ0FBaEI7Ozs7QUFXQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDVCxJQUFELEVBQVU7QUFBQSxNQUN6QlUsY0FEeUI7QUFBQTs7QUFBQTs7QUFFM0IsNEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZixnQ0FBTUEsS0FBTjtBQUNBLFlBQUtDLEtBQUwsR0FBYTtBQUNUQyxRQUFBQSxNQUFNLEVBQUU7QUFBQ1AsVUFBQUEsS0FBSyxFQUFFLE9BQVI7QUFBaUJDLFVBQUFBLE1BQU0sRUFBRSxPQUF6QjtBQUFrQ0MsVUFBQUEsT0FBTyxFQUFFO0FBQTNDLFNBREM7QUFFVE0sUUFBQUEsT0FBTyxFQUFFO0FBRkEsT0FBYjtBQUtBLFlBQUtDLFVBQUwsZ0JBQWtCLHVCQUFsQjtBQVBlO0FBUWxCOztBQVYwQjtBQUFBO0FBQUEsYUFZM0IsK0JBQXNCQyxTQUF0QixFQUFpQ0MsU0FBakMsRUFBNENDLFdBQTVDLEVBQXlEO0FBQ3JELGVBQU8sQ0FBQ0MsQ0FBQyxDQUFDQyxPQUFGLENBQVVILFNBQVYsRUFBcUIsS0FBS0wsS0FBMUIsQ0FBUjtBQUNIO0FBZDBCO0FBQUE7QUFBQSxhQWlCM0Isa0JBQVU7QUFBQTs7QUFDTiw0QkFDSTtBQUFBLGtDQUNJLHFCQUFDLHVCQUFEO0FBQWEsWUFBQSxPQUFPLEVBQUU7QUFBdEIsWUFESixlQUVJO0FBQUssWUFBQSxHQUFHLEVBQUUsYUFBQVMsRUFBRTtBQUFBLHFCQUFJLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUNSLGdCQUFBQSxPQUFPLEVBQUVPO0FBQVYsZUFBZCxDQUFKO0FBQUEsYUFBWjtBQUFBO0FBQUEsWUFGSixlQUlJLHFCQUFDLG1CQUFELGtDQUFhLEtBQUtWLEtBQWxCO0FBQ1MsWUFBQSxjQUFjLEVBQUU7QUFBQ0csY0FBQUEsT0FBTyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0U7QUFBckIsYUFEekI7QUFFUyxZQUFBLE1BQU0sRUFBRSxJQUZqQjtBQUdTLFlBQUEsR0FBRyxFQUFFLGFBQUFPLEVBQUU7QUFBQSxxQkFBRyxNQUFJLENBQUNOLFVBQUwsQ0FBZ0JELE9BQWhCLEdBQTBCTyxFQUE3QjtBQUFBLGFBSGhCO0FBQUEsbUNBS0kscUJBQUMsbUJBQUQsQ0FBUyxPQUFUO0FBQUEscUNBQ0k7QUFBSyxnQkFBQSxLQUFLLEVBQUUsS0FBS1QsS0FBTCxDQUFXQyxNQUF2QjtBQUNLLGdCQUFBLE9BQU8sRUFBRTtBQUFBLHlCQUFNLE1BQUksQ0FBQ1MsUUFBTCxDQUFjO0FBQ3pCVCxvQkFBQUEsTUFBTSxFQUFFO0FBQUNQLHNCQUFBQSxLQUFLLEVBQUUsT0FBUjtBQUFpQkMsc0JBQUFBLE1BQU0sRUFBRSxPQUF6QjtBQUFrQ0Msc0JBQUFBLE9BQU8sRUFBRTtBQUEzQztBQURpQixtQkFBZCxDQUFOO0FBQUEsaUJBRGQ7QUFBQSwyREFLSSxxQkFBQyxrQkFBRCxLQUxKO0FBQUE7QUFESjtBQUxKLGFBSko7QUFBQSxVQURKO0FBdUJIO0FBekMwQjs7QUFBQTtBQUFBLElBQ0ZlLGtCQUFNQyxTQURKOztBQTBDOUI7QUFFRCxzQkFBTyxxQkFBQyxjQUFELG9CQUFvQnhCLElBQXBCLEVBQVA7QUFFSCxDQTlDTTs7O0FBK0NQUyxTQUFTLENBQUNnQixVQUFWLEdBQXNCO0FBQ2xCQyxFQUFBQSxJQUFJLEVBQUU7QUFDRkMsSUFBQUEsTUFBTSxFQUFFO0FBQ0pDLE1BQUFBLElBQUksRUFBRTtBQURGO0FBRE47QUFEWSxDQUF0QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHtjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgUG9wb3Zlcn0gZnJvbSAnLi9Qb3BvdmVyJztcclxuaW1wb3J0IFRvZ2dsZSBmcm9tIFwiLi4vVG9nZ2xlL1RvZ2dsZVwiO1xyXG5pbXBvcnQgSW5mb01lc3NhZ2UgZnJvbSBcIi4uL0luZm9NZXNzYWdlL0luZm9NZXNzYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICB0aXRsZTogJ3N3Zi11aS1raXQvQ29udGFpbmVycy9Qb3BvdmVyJyxcclxuICAgIGNvbXBvbmVudDogUG9wb3ZlcixcclxuICAgIGFyZ3M6IHtcclxuICAgICAgICBwb3NpdGlvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBcImJvdHRvbS1zdGFydFwiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJ0b3Atc3RhcnRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiY2VudGVyLWVuZFwiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJjZW50ZXItc3RhcnRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBoaWRlVGFpbDogdHJ1ZVxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBEZWZhdWx0ID0gKGFyZ3MpID0+IDxQb3BvdmVyIHsuLi5hcmdzfT5cclxuICAgIDxQb3BvdmVyLlRhcmdldD5cclxuICAgICAgICBUYXJnZXRcclxuICAgIDwvUG9wb3Zlci5UYXJnZXQ+XHJcbiAgICA8UG9wb3Zlci5Db250ZW50PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogXCI4MDBweFwiLCBoZWlnaHQ6IFwiMTAwcHhcIiwgcGFkZGluZzogXCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgRXhhbXBsZSBDb250ZW50XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L1BvcG92ZXIuQ29udGVudD5cclxuPC9Qb3BvdmVyPjtcclxuXHJcbmV4cG9ydCBjb25zdCBUYXJnZXRSZWYgPSAoYXJncykgPT4ge1xyXG4gICAgY2xhc3MgUG9wb3ZlcldpdGhSZWYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgc3R5bGVzOiB7d2lkdGg6IFwiMTAwcHhcIiwgaGVpZ2h0OiBcIjEwMHB4XCIsIHBhZGRpbmc6IFwiMTBweFwifSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IG51bGxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wb3BvdmVyUmVmID0gY3JlYXRlUmVmKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhXy5pc0VxdWFsKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZW5kZXIgKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mb01lc3NhZ2UgY29udGVudD17XCJNZXNzYWdlIGNvbnRlbnRcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtlbCA9PiB0aGlzLnNldFN0YXRlKHtjdXJyZW50OiBlbH0pfT5UYXJnZXQgYnkgcmVmPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qe3RoaXMuc3RhdGUuaGFzVGFyZ2V0ICYmKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXIgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25UYXJnZXQ9e3tjdXJyZW50OiB0aGlzLnN0YXRlLmN1cnJlbnR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsPT4gdGhpcy5wb3BvdmVyUmVmLmN1cnJlbnQgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHt3aWR0aDogXCIxMDBweFwiLCBoZWlnaHQ6IFwiMjAwcHhcIiwgcGFkZGluZzogXCIxMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeGFtcGxlIENvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXIuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qfSovfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gPFBvcG92ZXJXaXRoUmVmIHsuLi5hcmdzfS8+XHJcblxyXG59O1xyXG5UYXJnZXRSZWYucGFyYW1ldGVycyA9e1xyXG4gICAgZG9jczoge1xyXG4gICAgICAgIHNvdXJjZToge1xyXG4gICAgICAgICAgICB0eXBlOiAnY29kZSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0=