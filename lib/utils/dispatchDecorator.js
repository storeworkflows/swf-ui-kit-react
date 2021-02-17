"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatch = dispatch;

var React = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var DispatchDetector = /*#__PURE__*/function (_React$Component) {
  _inherits(DispatchDetector, _React$Component);

  var _super = _createSuper(DispatchDetector);

  function DispatchDetector() {
    var _this;

    _classCallCheck(this, DispatchDetector);

    _this = _super.call(this);
    _this.state = {
      dispatch: function dispatch() {
        return void 0;
      }
    };
    return _this;
  }

  _createClass(DispatchDetector, [{
    key: "findReactElement",
    value: function findReactElement(node) {
      for (var key in node) {
        if (key.startsWith("__reactInternalInstance$")) {
          return node[key]._debugOwner.stateNode;
        }
      }

      return null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("Mounted");
      console.log(React);
      console.log(this); // const currentNode = findDOMNode(this);

      var dispatch = function dispatch(type, payload) {
        var event = new CustomEvent(type, {
          composed: true,
          bubbles: true,
          cancelable: true,
          detail: {
            payload: _objectSpread(_objectSpread({
              type: type
            }, payload), {}, {
              event: {
                type: type
              }
            })
          }
        });
        currentNode.dispatchEvent(event);
      };

      this.setState({
        dispatch: dispatch
      });
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState, nextContext) {
      console.log({
        nextState: nextState
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("unmounted");
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.cloneElement(React.Children.only(this.props.children), {
        dispatch: this.state.dispatch
      });
    }
  }]);

  return DispatchDetector;
}(React.Component);

function dispatch() {
  return function (Component) {
    return function (props) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(DispatchDetector, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, _objectSpread({}, props))
      });
    };
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kaXNwYXRjaERlY29yYXRvci5qcyJdLCJuYW1lcyI6WyJEaXNwYXRjaERldGVjdG9yIiwic3RhdGUiLCJkaXNwYXRjaCIsIm5vZGUiLCJrZXkiLCJzdGFydHNXaXRoIiwiX2RlYnVnT3duZXIiLCJzdGF0ZU5vZGUiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJ0eXBlIiwicGF5bG9hZCIsImV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJjb21wb3NlZCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGV0YWlsIiwiY3VycmVudE5vZGUiLCJkaXNwYXRjaEV2ZW50Iiwic2V0U3RhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJuZXh0Q29udGV4dCIsImNsb25lRWxlbWVudCIsIkNoaWxkcmVuIiwib25seSIsInByb3BzIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGdCOzs7OztBQUNGLDhCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBQ0MsTUFBQUEsUUFBUSxFQUFFO0FBQUEsZUFBTSxLQUFLLENBQVg7QUFBQTtBQUFYLEtBQWI7QUFGVTtBQUdiOzs7O1dBRUQsMEJBQWlCQyxJQUFqQixFQUF1QjtBQUNuQixXQUFLLElBQUlDLEdBQVQsSUFBZ0JELElBQWhCLEVBQXNCO0FBQ2xCLFlBQUlDLEdBQUcsQ0FBQ0MsVUFBSixDQUFlLDBCQUFmLENBQUosRUFBZ0Q7QUFDNUMsaUJBQU9GLElBQUksQ0FBQ0MsR0FBRCxDQUFKLENBQVVFLFdBQVYsQ0FBc0JDLFNBQTdCO0FBQ0g7QUFDSjs7QUFDRCxhQUFPLElBQVA7QUFDQzs7O1dBRUwsNkJBQW9CO0FBQ2hCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaO0FBQ0FGLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRUFIZ0IsQ0FJakI7O0FBRUMsVUFBTVAsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ1MsSUFBRCxFQUFPQyxPQUFQLEVBQW1CO0FBQ2hDLFlBQU1DLEtBQUssR0FBRyxJQUFJQyxXQUFKLENBQWdCSCxJQUFoQixFQUFzQjtBQUNoQ0ksVUFBQUEsUUFBUSxFQUFFLElBRHNCO0FBRWhDQyxVQUFBQSxPQUFPLEVBQUUsSUFGdUI7QUFHaENDLFVBQUFBLFVBQVUsRUFBRSxJQUhvQjtBQUloQ0MsVUFBQUEsTUFBTSxFQUFFO0FBQ0pOLFlBQUFBLE9BQU87QUFDSEQsY0FBQUEsSUFBSSxFQUFKQTtBQURHLGVBRUFDLE9BRkE7QUFHSEMsY0FBQUEsS0FBSyxFQUFFO0FBQ0hGLGdCQUFBQSxJQUFJLEVBQUpBO0FBREc7QUFISjtBQURIO0FBSndCLFNBQXRCLENBQWQ7QUFlQVEsUUFBQUEsV0FBVyxDQUFDQyxhQUFaLENBQTBCUCxLQUExQjtBQUNILE9BakJEOztBQW1CQSxXQUFLUSxRQUFMLENBQWM7QUFDVm5CLFFBQUFBLFFBQVEsRUFBUkE7QUFEVSxPQUFkO0FBR0g7OztXQUVELDZCQUFvQm9CLFNBQXBCLEVBQStCQyxTQUEvQixFQUEwQ0MsV0FBMUMsRUFBdUQ7QUFDbkRoQixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDYyxRQUFBQSxTQUFTLEVBQVRBO0FBQUQsT0FBWjtBQUNIOzs7V0FFRCxnQ0FBdUI7QUFDbkJmLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDSDs7O1dBRUQsa0JBQVM7QUFDTCwwQkFBT0MsS0FBSyxDQUFDZSxZQUFOLENBQ0hmLEtBQUssQ0FBQ2dCLFFBQU4sQ0FBZUMsSUFBZixDQUFvQixLQUFLQyxLQUFMLENBQVdDLFFBQS9CLENBREcsRUFFSDtBQUFDM0IsUUFBQUEsUUFBUSxFQUFFLEtBQUtELEtBQUwsQ0FBV0M7QUFBdEIsT0FGRyxDQUFQO0FBSUg7Ozs7RUExRDBCUSxLQUFLLENBQUNvQixTOztBQTZEOUIsU0FBUzVCLFFBQVQsR0FBb0I7QUFDdkIsU0FBTyxVQUFDNEIsU0FBRDtBQUFBLFdBQWUsVUFBQ0YsS0FBRDtBQUFBLDBCQUNsQixxQkFBQyxnQkFBRDtBQUFBLCtCQUNJLHFCQUFDLFNBQUQsb0JBQWVBLEtBQWY7QUFESixRQURrQjtBQUFBLEtBQWY7QUFBQSxHQUFQO0FBSUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtmaW5kRE9NTm9kZX0gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuY2xhc3MgRGlzcGF0Y2hEZXRlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7ZGlzcGF0Y2g6ICgpID0+IHZvaWQgMH07XHJcbiAgICB9XHJcblxyXG4gICAgZmluZFJlYWN0RWxlbWVudChub2RlKSB7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG5vZGUpIHtcclxuICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKFwiX19yZWFjdEludGVybmFsSW5zdGFuY2UkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVtrZXldLl9kZWJ1Z093bmVyLnN0YXRlTm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNb3VudGVkXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coUmVhY3QpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcylcclxuICAgICAgIC8vIGNvbnN0IGN1cnJlbnROb2RlID0gZmluZERPTU5vZGUodGhpcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3BhdGNoID0gKHR5cGUsIHBheWxvYWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSwge1xyXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkaXNwYXRjaFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgbmV4dENvbnRleHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh7bmV4dFN0YXRlfSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVubW91bnRlZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFxyXG4gICAgICAgICAgICBSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLFxyXG4gICAgICAgICAgICB7ZGlzcGF0Y2g6IHRoaXMuc3RhdGUuZGlzcGF0Y2h9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2goKSB7XHJcbiAgICByZXR1cm4gKENvbXBvbmVudCkgPT4gKHByb3BzKSA9PlxyXG4gICAgICAgIDxEaXNwYXRjaERldGVjdG9yPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cclxuICAgICAgICA8L0Rpc3BhdGNoRGV0ZWN0b3I+XHJcbn0iXX0=