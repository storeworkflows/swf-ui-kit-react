"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _Button = _interopRequireDefault(require("../Button/Button"));

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Alert = /*#__PURE__*/function (_React$Component) {
  _inherits(Alert, _React$Component);

  var _super = _createSuper(Alert);

  function Alert(props) {
    var _this;

    _classCallCheck(this, Alert);

    _this = _super.call(this, props);
    _this.state = {
      expanded: _this.props.expanded,
      isOverflowed: false
    };
    _this.contentRef = null;
    _this.textRef = null;
    return _this;
  }

  _createClass(Alert, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.contentRef && this.textRef) {
        var content = this.contentRef;
        var text = this.textRef;
        var contentEndX = content.getBoundingClientRect().y + content.clientHeight;
        var textEndX = text.getBoundingClientRect().y + text.clientHeight;
        console.log(contentEndX < textEndX);
        this.setState({
          isOverflowed: contentEndX < textEndX
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          action = _this$props.action,
          content = _this$props.content,
          header = _this$props.header,
          icon = _this$props.icon,
          manageExpanded = _this$props.manageExpanded,
          status = _this$props.status,
          textLinkProps = _this$props.textLinkProps;
      var isOverflowed = this.state.isOverflowed;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "swf-alert-container",
          children: [icon && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "alert-icon",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
              icon: icon
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "alert-content",
            ref: function ref(el) {
              return _this2.contentRef = el;
            },
            children: [header && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "alert-header",
              children: header
            }), content && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              ref: function ref(el) {
                return _this2.textRef = el;
              },
              className: (0, _classnames["default"])({
                "text-container": true,
                "overflowed": isOverflowed
              }),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                className: "alert-text",
                children: content
              })
            }), isOverflowed && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Show more"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
            label: "Ok"
          })]
        })
      });
    }
  }]);

  return Alert;
}(React.Component);

Alert.defaultProps = {
  expanded: false,
  manageExpanded: false,
  status: "info"
};
Alert.propTypes = {
  action: _propTypes["default"].shape({
    type: _propTypes["default"].oneOf(["dismiss", "acknowledge", "open"]).isRequired,
    href: _propTypes["default"].string
  }),
  content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  expanded: _propTypes["default"].bool,
  header: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  manageExpanded: _propTypes["default"].bool,
  status: _propTypes["default"].oneOf(["critical", "high", "moderate", "warning", "info", "positive", "low"]),
  textLinkProps: _propTypes["default"].shape({
    label: _propTypes["default"].string,
    href: _propTypes["default"].string
  })
};
var _default = Alert;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BbGVydC9BbGVydC5qcyJdLCJuYW1lcyI6WyJBbGVydCIsInByb3BzIiwic3RhdGUiLCJleHBhbmRlZCIsImlzT3ZlcmZsb3dlZCIsImNvbnRlbnRSZWYiLCJ0ZXh0UmVmIiwiY29udGVudCIsInRleHQiLCJjb250ZW50RW5kWCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInkiLCJjbGllbnRIZWlnaHQiLCJ0ZXh0RW5kWCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImFjdGlvbiIsImhlYWRlciIsImljb24iLCJtYW5hZ2VFeHBhbmRlZCIsInN0YXR1cyIsInRleHRMaW5rUHJvcHMiLCJlbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwic2hhcGUiLCJ0eXBlIiwib25lT2YiLCJpc1JlcXVpcmVkIiwiaHJlZiIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm9iamVjdCIsImJvb2wiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7OztBQUVGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsUUFBUSxFQUFFLE1BQUtGLEtBQUwsQ0FBV0UsUUFEWjtBQUVUQyxNQUFBQSxZQUFZLEVBQUU7QUFGTCxLQUFiO0FBS0EsVUFBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxJQUFmO0FBVGU7QUFVbEI7Ozs7V0FFRCw2QkFBb0I7QUFDaEIsVUFBRyxLQUFLRCxVQUFMLElBQW1CLEtBQUtDLE9BQTNCLEVBQW1DO0FBQy9CLFlBQUlDLE9BQU8sR0FBRyxLQUFLRixVQUFuQjtBQUNBLFlBQUlHLElBQUksR0FBRyxLQUFLRixPQUFoQjtBQUVBLFlBQUlHLFdB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UkY7QUFTZGIsRUFBQUEsY0FBYyxFQUFFTyxzQkFBVVMsSUFUWjtBQVVkZixFQUFBQSxNQUFNLEVBQUVNLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsVUFBRCxFQUFjLE1BQWQsRUFBdUIsVUFBdkIsRUFBb0MsU0FBcEMsRUFBZ0QsTUFBaEQsRUFBeUQsVUFBekQsRUFBc0UsS0FBdEUsQ0FBaEIsQ0FWTTtBQVdkUixFQUFBQSxhQUFhLEVBQUVLLHNCQUFVQyxLQUFWLENBQWdCO0FBQzNCUyxJQUFBQSxLQUFLLEVBQUVWLHNCQUFVTSxNQURVO0FBRTNCRCxJQUFBQSxJQUFJLEVBQUVMLHNCQUFVTTtBQUZXLEdBQWhCO0FBWEQsQ0FBbEI7ZUFpQmVqQyxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xyXG5cclxuY2xhc3MgQWxlcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBleHBhbmRlZDogdGhpcy5wcm9wcy5leHBhbmRlZCxcclxuICAgICAgICAgICAgaXNPdmVyZmxvd2VkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb250ZW50UmVmID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRleHRSZWYgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmKHRoaXMuY29udGVudFJlZiAmJiB0aGlzLnRleHRSZWYpe1xyXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IHRoaXMuY29udGVudFJlZjtcclxuICAgICAgICAgICAgbGV0IHRleHQgPSB0aGlzLnRleHRSZWY7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29udGVudEVuZFggPSBjb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgKyBjb250ZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgbGV0IHRleHRFbmRYID0gdGV4dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55ICsgdGV4dC5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50RW5kWDx0ZXh0RW5kWClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNPdmVyZmxvd2VkOiBjb250ZW50RW5kWDx0ZXh0RW5kWH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICAgIGhlYWRlcixcclxuICAgICAgICAgICAgaWNvbixcclxuICAgICAgICAgICAgbWFuYWdlRXhwYW5kZWQsXHJcbiAgICAgICAgICAgIHN0YXR1cyxcclxuICAgICAgICAgICAgdGV4dExpbmtQcm9wc1xyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCB7aXNPdmVyZmxvd2VkfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzd2YtYWxlcnQtY29udGFpbmVyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpY29uICYmIDxkaXYgY2xhc3NOYW1lPXtcImFsZXJ0LWljb25cIn0+PEljb24gaWNvbiA9IHtpY29ufS8+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImFsZXJ0LWNvbnRlbnRcIn0gcmVmID0geyBlbCA9PiB0aGlzLmNvbnRlbnRSZWYgPSBlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIgJiYgPGRpdiBjbGFzc05hbWU9e1wiYWxlcnQtaGVhZGVyXCJ9PntoZWFkZXJ9PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZiA9IHsgZWwgPT4gdGhpcy50ZXh0UmVmID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWNvbnRhaW5lclwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm92ZXJmbG93ZWRcIjogaXNPdmVyZmxvd2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcImFsZXJ0LXRleHRcIn0gPntjb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc092ZXJmbG93ZWQgJiYgPHNwYW4+U2hvdyBtb3JlPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPXtcIk9rXCJ9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbkFsZXJ0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGV4cGFuZGVkOiBmYWxzZSxcclxuICAgIG1hbmFnZUV4cGFuZGVkOiBmYWxzZSxcclxuICAgIHN0YXR1czogXCJpbmZvXCJcclxufVxyXG5cclxuQWxlcnQucHJvcFR5cGVzID0ge1xyXG4gICAgYWN0aW9uOiBwcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHR5cGU6IHByb3BUeXBlcy5vbmVPZihbXCJkaXNtaXNzXCIgLCBcImFja25vd2xlZGdlXCIgLCBcIm9wZW5cIl0pLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgaHJlZjogcHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBjb250ZW50OiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMub2JqZWN0XSksXHJcbiAgICBleHBhbmRlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBoZWFkZXI6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpY29uOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbWFuYWdlRXhwYW5kZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgc3RhdHVzOiBwcm9wVHlwZXMub25lT2YoW1wiY3JpdGljYWxcIiAsIFwiaGlnaFwiICwgXCJtb2RlcmF0ZVwiICwgXCJ3YXJuaW5nXCIgLCBcImluZm9cIiAsIFwicG9zaXRpdmVcIiAsIFwibG93XCJdKSxcclxuICAgIHRleHRMaW5rUHJvcHM6IHByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgaHJlZjogcHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcclxuIl19