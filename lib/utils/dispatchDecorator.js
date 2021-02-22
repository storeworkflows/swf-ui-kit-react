"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatch = dispatch;

var React = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    key: "componentDidMount",
    value: function componentDidMount() {
      var currentNode = _reactDom["default"].findDOMNode(this);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kaXNwYXRjaERlY29yYXRvci5qcyJdLCJuYW1lcyI6WyJEaXNwYXRjaERldGVjdG9yIiwic3RhdGUiLCJkaXNwYXRjaCIsImN1cnJlbnROb2RlIiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsInR5cGUiLCJwYXlsb2FkIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImNvbXBvc2VkIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkZXRhaWwiLCJkaXNwYXRjaEV2ZW50Iiwic2V0U3RhdGUiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsIkNoaWxkcmVuIiwib25seSIsInByb3BzIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsZ0I7Ozs7O0FBQ0YsOEJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFFQyxNQUFBQSxRQUFRLEVBQUU7QUFBQSxlQUFNLEtBQUssQ0FBWDtBQUFBO0FBQVosS0FBYjtBQUZVO0FBR2I7Ozs7V0FFRCw2QkFBb0I7QUFDaEIsVUFBTUMsV0FBVyxHQUFHQyxxQkFBU0MsV0FBVCxDQUFxQixJQUFyQixDQUFwQjs7QUFFQSxVQUFNSCxRQUFRLEdBQUksU0FBWkEsUUFBWSxDQUFDSSxJQUFELEVBQU9DLE9BQVAsRUFBbUI7QUFDakMsWUFBTUMsS0FBSyxHQUFHLElBQUlDLFdBQUosQ0FBZ0JILElBQWhCLEVBQXNCO0FBQ2hDSSxVQUFBQSxRQUFRLEVBQUUsSUFEc0I7QUFFaENDLFVBQUFBLE9BQU8sRUFBRSxJQUZ1QjtBQUdoQ0MsVUFBQUEsVUFBVSxFQUFFLElBSG9CO0FBSWhDQyxVQUFBQSxNQUFNLEVBQUU7QUFDSk4sWUFBQUEsT0FBTztBQUNIRCxjQUFBQSxJQUFJLEVBQUpBO0FBREcsZUFFQUMsT0FGQTtBQUdIQyxjQUFBQSxLQUFLLEVBQUU7QUFDSEYsZ0JBQUFBLElBQUksRUFBSkE7QUFERztBQUhKO0FBREg7QUFKd0IsU0FBdEIsQ0FBZDtBQWVBSCxRQUFBQSxXQUFXLENBQUNXLGFBQVosQ0FBMEJOLEtBQTFCO0FBQ0gsT0FqQkQ7O0FBbUJBLFdBQUtPLFFBQUwsQ0FBYztBQUNWYixRQUFBQSxRQUFRLEVBQVJBO0FBRFUsT0FBZDtBQUdIOzs7V0FFRCxrQkFBUztBQUNMLDBCQUFPYyxLQUFLLENBQUNDLFlBQU4sQ0FDSEQsS0FBSyxDQUFDRSxRQUFOLENBQWVDLElBQWYsQ0FBb0IsS0FBS0MsS0FBTCxDQUFXQyxRQUEvQixDQURHLEVBRUg7QUFBQ25CLFFBQUFBLFFBQVEsRUFBRSxLQUFLRCxLQUFMLENBQVdDO0FBQXRCLE9BRkcsQ0FBUDtBQUlIOzs7O0VBdEMwQmMsS0FBSyxDQUFDTSxTOztBQXlDOUIsU0FBU3BCLFFBQVQsR0FBb0I7QUFDdkIsU0FBTyxVQUFDb0IsU0FBRDtBQUFBLFdBQWUsVUFBQ0YsS0FBRDtBQUFBLDBCQUNsQixxQkFBQyxnQkFBRDtBQUFBLCtCQUNJLHFCQUFDLFNBQUQsb0JBQWVBLEtBQWY7QUFESixRQURrQjtBQUFBLEtBQWY7QUFBQSxHQUFQO0FBSUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmNsYXNzIERpc3BhdGNoRGV0ZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBkaXNwYXRjaDogKCkgPT4gdm9pZCAwIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnROb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICAgICAgY29uc3QgZGlzcGF0Y2ggPSAgKHR5cGUsIHBheWxvYWQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIHtcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRpc3BhdGNoXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgICAgICAgICAgUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSxcbiAgICAgICAgICAgIHtkaXNwYXRjaDogdGhpcy5zdGF0ZS5kaXNwYXRjaH1cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICByZXR1cm4gKENvbXBvbmVudCkgPT4gKHByb3BzKSA9PlxuICAgICAgICA8RGlzcGF0Y2hEZXRlY3Rvcj5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICA8L0Rpc3BhdGNoRGV0ZWN0b3I+XG59Il19