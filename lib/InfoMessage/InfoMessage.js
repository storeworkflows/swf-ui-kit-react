"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _classnames = _interopRequireDefault(require("classnames"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var InfoMessage = /*#__PURE__*/function (_React$Component) {
  _inherits(InfoMessage, _React$Component);

  var _super = _createSuper(InfoMessage);

  function InfoMessage(props) {
    var _this;

    _classCallCheck(this, InfoMessage);

    _this = _super.call(this, props);
    _this.state = {
      content: _this.props.content
    };
    _this.setDelay = _this.setDelay.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InfoMessage, [{
    key: "setDelay",
    value: function setDelay() {
      var _this2 = this;

      var delay = this.props.delay;
      console.log(delay);
      if (delay) setTimeout(function () {
        return _this2.setState({
          content: undefined
        });
      }, delay);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setDelay();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var content = this.props.content;

      if (content !== prevProps.content) {
        this.setState({
          content: content
        });
        this.setDelay();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          status = _this$props.status,
          icon = _this$props.icon,
          className = _this$props.className,
          iconSize = _this$props.iconSize;
      var content = this.state.content;
      var messageClasses = (0, _classnames["default"])(className, status, "info-message");
      return content ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: messageClasses,
        children: [icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
          className: "input-message-icon",
          icon: icon,
          customSize: iconSize
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "input-message-content",
          children: content
        })]
      }) : null;
    }
  }]);

  return InfoMessage;
}(React.Component);

InfoMessage.defaultProps = {
  status: "critical",
  className: {}
};
InfoMessage.propTypes = {
  status: _propTypes["default"].oneOf(["critical", "warning", "positive", "info", "suggestion"]),
  content: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  className: _propTypes["default"].object,
  iconSize: _propTypes["default"].number,
  delay: _propTypes["default"].number
};
var _default = InfoMessage;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbmZvTWVzc2FnZS9JbmZvTWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJJbmZvTWVzc2FnZSIsInByb3BzIiwic3RhdGUiLCJjb250ZW50Iiwic2V0RGVsYXkiLCJiaW5kIiwiZGVsYXkiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsInNldFN0YXRlIiwidW5kZWZpbmVkIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJzdGF0dXMiLCJpY29uIiwiY2xhc3NOYW1lIiwiaWNvblNpemUiLCJtZXNzYWdlQ2xhc3NlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2YiLCJzdHJpbmciLCJvYmplY3QiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHTUEsVzs7Ozs7QUFDRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLE9BQU8sRUFBRSxNQUFLRixLQUFMLENBQVdFO0FBRFgsS0FBYjtBQUdBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQU5lO0FBT2xCOzs7O1dBRUQsb0JBQVU7QUFBQTs7QUFBQSxVQUNDQyxLQURELEdBQ1UsS0FBS0wsS0FEZixDQUNDSyxLQUREO0FBRU5DLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsVUFBR0EsS0FBSCxFQUNJRyxVQUFVLENBQUM7QUFBQSxlQUNILE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUNQLFVBQUFBLE9BQU8sRUFBRVE7QUFBVixTQUFkLENBREc7QUFBQSxPQUFELEVBRU5MLEtBRk0sQ0FBVjtBQUdQOzs7V0FHRCw2QkFBb0I7QUFDaEIsV0FBS0YsUUFBTDtBQUNIOzs7V0FFRCw0QkFBbUJRLFNBQW5CLEVBQThCQyxTQUE5QixFQUF5Q0MsUUFBekMsRUFBbUQ7QUFBQSxVQUN4Q1gsT0FEd0MsR0FDN0IsS0FBS0YsS0FEd0IsQ0FDeENFLE9BRHdDOztBQUcvQyxVQUFHQSxPQUFPLEtBQUtTLFNBQVMsQ0FBQ1QsT0FBekIsRUFBaUM7QUFDN0IsYUFBS08sUUFBTCxDQUFjO0FBQUNQLFVBQUFBLE9BQU8sRUFBRUE7QUFBVixTQUFkO0FBQ0EsYUFBS0MsUUFBTDtBQUNIO0FBQ0o7OztXQUVELGtCQUFTO0FBQUEsd0JBQ3dDLEtBQUtILEtBRDdDO0FBQUEsVUFDR2MsTUFESCxlQUNHQSxNQURIO0FBQUEsVUFDV0MsSUFEWCxlQUNXQSxJQURYO0FBQUEsVUFDaUJDLFNBRGpCLGVBQ2lCQSxTQURqQjtBQUFBLFVBQzRCQyxRQUQ1QixlQUM0QkEsUUFENUI7QUFBQSxVQUVFZixPQUZGLEdBRWEsS0FBS0QsS0FGbEIsQ0FFRUMsT0FGRjtBQUlMLFVBQU1nQixjQUFjLEdBQUcsNEJBQ25CRixTQURtQixFQUVuQkYsTUFGbUIsRUFHbkIsY0FIbUIsQ0FBdkI7QUFNQSxhQUNJWixPQUFPLGdCQUVDO0FBQUssUUFBQSxTQUFTLEVBQUVnQixjQUFoQjtBQUFBLG1CQUNLSCxJQUFJLGlCQUFJLHFCQUFDLGdCQUFEO0FBQU0sVUFBQSxTQUFTLEVBQUMsb0JBQWhCO0FBQXFDLFVBQUEsSUFBSSxFQUFFQSxJQUEzQztBQUFpRCxVQUFBLFVBQVUsRUFBRUU7QUFBN0QsVUFEYixlQUVJO0FBQU0sVUFBQSxTQUFTLEVBQUMsdUJBQWhCO0FBQUEsb0JBQXlDZjtBQUF6QyxVQUZKO0FBQUEsUUFGRCxHQU1ELElBUFY7QUFTSDs7OztFQXBEcUJpQixLQUFLLENBQUNDLFM7O0FBd0RoQ3JCLFdBQVcsQ0FBQ3NCLFlBQVosR0FBMkI7QUFDdkJQLEVBQUFBLE1BQU0sRUFBRSxVQURlO0FBRXZCRSxFQUFBQSxTQUFTLEVBQUU7QUFGWSxDQUEzQjtBQUtBakIsV0FBVyxDQUFDdUIsU0FBWixHQUF3QjtBQUNwQlIsRUFBQUEsTUFBTSxFQUFFUyxzQkFBVUMsS0FBVixDQUFnQixDQUFDLFVBQUQsRUFBYSxTQUFiLEVBQXdCLFVBQXhCLEVBQW9DLE1BQXBDLEVBQTRDLFlBQTVDLENBQWhCLENBRFk7QUFFcEJ0QixFQUFBQSxPQUFPLEVBQUVxQixzQkFBVUUsTUFGQztBQUdwQlYsRUFBQUEsSUFBSSxFQUFFUSxzQkFBVUUsTUFISTtBQUlwQlQsRUFBQUEsU0FBUyxFQUFFTSxzQkFBVUksTUFKRDtBQUtwQlQsRUFBQUEsUUFBUSxFQUFFTSxzQkFBVUksTUFMQTtBQU1wQnRCLEVBQUFBLEtBQUssRUFBRWlCLHNCQUFVSztBQU5HLENBQXhCO2VBU2U1QixXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jbGFzcyBJbmZvTWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLnByb3BzLmNvbnRlbnRcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXREZWxheSA9IHRoaXMuc2V0RGVsYXkuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREZWxheSgpe1xyXG4gICAgICAgIGNvbnN0IHtkZWxheX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRlbGF5KVxyXG4gICAgICAgIGlmKGRlbGF5KVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29udGVudDogdW5kZWZpbmVkfSkgLFxyXG4gICAgICAgICAgICAgICAgZGVsYXkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldERlbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xyXG4gICAgICAgIGNvbnN0IHtjb250ZW50fSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmKGNvbnRlbnQgIT09IHByZXZQcm9wcy5jb250ZW50KXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29udGVudDogY29udGVudH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldERlbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHN0YXR1cywgaWNvbiwgY2xhc3NOYW1lLCBpY29uU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtjb250ZW50fSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VDbGFzc2VzID0gY2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgICAgIFwiaW5mby1tZXNzYWdlXCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21lc3NhZ2VDbGFzc2VzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ljb24gJiYgPEljb24gY2xhc3NOYW1lPVwiaW5wdXQtbWVzc2FnZS1pY29uXCIgaWNvbj17aWNvbn0gY3VzdG9tU2l6ZT17aWNvblNpemV9Lz4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1tZXNzYWdlLWNvbnRlbnRcIj57Y29udGVudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuSW5mb01lc3NhZ2UuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3RhdHVzOiBcImNyaXRpY2FsXCIsXHJcbiAgICBjbGFzc05hbWU6IHt9LFxyXG59XHJcblxyXG5JbmZvTWVzc2FnZS5wcm9wVHlwZXMgPSB7XHJcbiAgICBzdGF0dXM6IFByb3BUeXBlcy5vbmVPZihbXCJjcml0aWNhbFwiLCBcIndhcm5pbmdcIiwgXCJwb3NpdGl2ZVwiLCBcImluZm9cIiwgXCJzdWdnZXN0aW9uXCJdKSxcclxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaWNvblNpemU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBkZWxheTogcHJvcFR5cGVzLm51bWJlclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmZvTWVzc2FnZSJdfQ==