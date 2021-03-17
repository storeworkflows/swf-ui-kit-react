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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
    _this.contentRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(Alert, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.contentRef) {
        var content = this.contentRef.current;
        console.log(content.clientHeight, content.scrollHeight, content.clientHeight < content.scrollHeight);
        this.setState({
          isOverflowed: content.clientHeight < content.scrollHeight
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          action = _this$props.action,
          content = _this$props.content,
          header = _this$props.header,
          icon = _this$props.icon,
          manageExpanded = _this$props.manageExpanded,
          status = _this$props.status,
          textLinkProps = _this$props.textLinkProps;
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
            children: [header && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "alert-header",
              children: header
            }), content && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              ref: this.contentRef,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                className: "alert-text",
                children: content
              })
            }), this.state.isOverflowed && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Show more"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
            children: "Ok"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BbGVydC9BbGVydC5qcyJdLCJuYW1lcyI6WyJBbGVydCIsInByb3BzIiwic3RhdGUiLCJleHBhbmRlZCIsImlzT3ZlcmZsb3dlZCIsImNvbnRlbnRSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImNvbnRlbnQiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInNldFN0YXRlIiwiYWN0aW9uIiwiaGVhZGVyIiwiaWNvbiIsIm1hbmFnZUV4cGFuZGVkIiwic3RhdHVzIiwidGV4dExpbmtQcm9wcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInNoYXBlIiwidHlwZSIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImhyZWYiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJib29sIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsSzs7Ozs7QUFFRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLFFBQVEsRUFBRSxNQUFLRixLQUFMLENBQVdFLFFBRFo7QUFFVEMsTUFBQUEsWUFBWSxFQUFFO0FBRkwsS0FBYjtBQUtBLFVBQUtDLFVBQUwsZ0JBQWtCQyxLQUFLLENBQUNDLFNBQU4sRUFBbEI7QUFSZTtBQVNsQjs7OztXQUVELDZCQUFvQjtBQUNoQixVQUFHLEtBQUtGLFVBQVIsRUFBbUI7QUFDZixZQUFJRyxPQUFPLEdBQUcsS0FBS0gsVUFBTCxDQUFnQkksT0FBOUI7QUFDQUMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILE9BQU8sQ0FBQ0ksWUFBcEIsRUFBa0NKLE9BQU8sQ0FBQ0ssWUFBMUMsRUFBd0RMLE9BQU8sQ0FBQ0ksWUFBUixHQUFxQkosT0FBTyxDQUFDSyxZQUFyRjtBQUNBLGFBQUtDLFFBQUwsQ0FBYztBQUFDVixVQUFBQSxZQUFZLEVBQUVJLE9BQU8sQ0FBQ0ksWUFBUixHQUFxQkosT0FBTyxDQUFDSztBQUE1QyxTQUFkO0FBQ0g7QUFDSjs7O1dBRUQsa0JBQVM7QUFBQSx3QkFVRCxLQUFLWixLQVZKO0FBQUEsVUFHRGMsTUFIQyxlQUdEQSxNQUhDO0FBQUEsVUFJRFAsT0FKQyxlQUlEQSxPQUpDO0FBQUEsVUFLRFEsTUFMQyxlQUtEQSxNQUxDO0FBQUEsVUFNREMsSUFOQyxlQU1EQSxJQU5DO0FBQUEsVUFPREMsY0FQQyxlQU9EQSxjQVBDO0FBQUEsVUFRREMsTUFSQyxlQVFEQSxNQVJDO0FBQUEsVUFTREMsYUFUQyxlQVNEQSxhQVRDO0FBWUwsMEJBQ0k7QUFBQSwrQkFDSTtBQUFLLFVBQUEsU0FBUyxFQUFFLHFCQUFoQjtBQUFBLHFCQUNLSCxJQUFJLGlCQUFJO0FBQUssWUFBQSxTQUFTLEVBQUUsWUFBaEI7QUFBQSxtQ0FBOEIscUJBQUMsZ0JBQUQ7QUFBTSxjQUFBLElBQUksRUFBSUE7QUFBZDtBQUE5QixZQURiLGVBRUk7QUFBSyxZQUFBLFNBQVMsRUFBRSxlQUFoQjtBQUFBLHVCQUNLRCxNQUFNLGlCQUFJO0FBQUssY0FBQSxTQUFTLEVBQUUsY0FBaEI7QUFBQSx3QkFBaUNBO0FBQWpDLGNBRGYsRUFFS1IsT0FBTyxpQkFDSjtBQUFLLGNBQUEsR0FBRyxFQUFJLEtBQUtILFVBQWpCO0FBQUEscUNBQ0k7QUFBRyxnQkFBQSxTQUFTLEVBQUUsWUFBZDtBQUFBLDBCQUE4Qkc7QUFBOUI7QUFESixjQUhSLEVBT0ssS0FBS04sS0FBTCxDQUFXRSxZQUFYLGlCQUEyQjtBQUFBO0FBQUEsY0FQaEM7QUFBQSxZQUZKLGVBV0kscUJBQUMsa0JBQUQ7QUFBQTtBQUFBLFlBWEo7QUFBQTtBQURKLFFBREo7QUFpQkg7Ozs7RUFsRGVFLEtBQUssQ0FBQ2UsUzs7QUFxRDFCckIsS0FBSyxDQUFDc0IsWUFBTixHQUFxQjtBQUNqQm5CLEVBQUFBLFFBQVEsRUFBRSxLQURPO0FBRWpCZSxFQUFBQSxjQUFjLEVBQUUsS0FGQztBQUdqQkMsRUFBQUEsTUFBTSxFQUFFO0FBSFMsQ0FBckI7QUFNQW5CLEtBQUssQ0FBQ3VCLFNBQU4sR0FBa0I7QUFDZFIsRUFBQUEsTUFBTSxFQUFFUSxzQkFBVUMsS0FBVixDQUFnQjtBQUNwQkMsSUFBQUEsSUFBSSxFQUFFRixzQkFBVUcsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBYSxhQUFiLEVBQTZCLE1BQTdCLENBQWhCLEVBQXNEQyxVQUR4QztBQUVwQkMsSUFBQUEsSUFBSSxFQUFFTCxzQkFBVU07QUFGSSxHQUFoQixDQURNO0FBS2RyQixFQUFBQSxPQUFPLEVBQUVlLHNCQUFVTyxTQUFWLENBQW9CLENBQUNQLHNCQUFVTSxNQUFYLEVBQW1CTixzQkFBVVEsTUFBN0IsQ0FBcEIsQ0FMSztBQU1kNUIsRUFBQUEsUUFBUSxFQUFFb0Isc0JBQVVTLElBTk47QUFPZGhCLEVBQUFBLE1BQU0sRUFBRU8sc0JBQVVNLE1BUEo7QUFRZFosRUFBQUEsSUFBSSxFQUFFTSxzQkFBVU0sTUFSRjtBQVNkWCxFQUFBQSxjQUFjLEVBQUVLLHNCQUFVUyxJQVRaO0FBVWRiLEVBQUFBLE1BQU0sRUFBRUksc0JBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxVQUFELEVBQWMsTUFBZCxFQUF1QixVQUF2QixFQUFvQyxTQUFwQyxFQUFnRCxNQUFoRCxFQUF5RCxVQUF6RCxFQUFzRSxLQUF0RSxDQUFoQixDQVZNO0FBV2ROLEVBQUFBLGFBQWEsRUFBRUcsc0JBQVVDLEtBQVYsQ0FBZ0I7QUFDM0JTLElBQUFBLEtBQUssRUFBRVYsc0JBQVVNLE1BRFU7QUFFM0JELElBQUFBLElBQUksRUFBRUwsc0JBQVVNO0FBRlcsR0FBaEI7QUFYRCxDQUFsQjtlQWlCZTdCLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b24vQnV0dG9uXCI7XHJcblxyXG5jbGFzcyBBbGVydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGV4cGFuZGVkOiB0aGlzLnByb3BzLmV4cGFuZGVkLFxyXG4gICAgICAgICAgICBpc092ZXJmbG93ZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZih0aGlzLmNvbnRlbnRSZWYpe1xyXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IHRoaXMuY29udGVudFJlZi5jdXJyZW50O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50LmNsaWVudEhlaWdodCwgY29udGVudC5zY3JvbGxIZWlnaHQsIGNvbnRlbnQuY2xpZW50SGVpZ2h0PGNvbnRlbnQuc2Nyb2xsSGVpZ2h0KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc092ZXJmbG93ZWQ6IGNvbnRlbnQuY2xpZW50SGVpZ2h0PGNvbnRlbnQuc2Nyb2xsSGVpZ2h0fSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgaGVhZGVyLFxyXG4gICAgICAgICAgICBpY29uLFxyXG4gICAgICAgICAgICBtYW5hZ2VFeHBhbmRlZCxcclxuICAgICAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgICAgICB0ZXh0TGlua1Byb3BzXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzd2YtYWxlcnQtY29udGFpbmVyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpY29uICYmIDxkaXYgY2xhc3NOYW1lPXtcImFsZXJ0LWljb25cIn0+PEljb24gaWNvbiA9IHtpY29ufS8+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImFsZXJ0LWNvbnRlbnRcIn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyICYmIDxkaXYgY2xhc3NOYW1lPXtcImFsZXJ0LWhlYWRlclwifT57aGVhZGVyfTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmID0ge3RoaXMuY29udGVudFJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcImFsZXJ0LXRleHRcIn0gPntjb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzT3ZlcmZsb3dlZCAmJiA8c3Bhbj5TaG93IG1vcmU8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+T2s8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbkFsZXJ0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGV4cGFuZGVkOiBmYWxzZSxcclxuICAgIG1hbmFnZUV4cGFuZGVkOiBmYWxzZSxcclxuICAgIHN0YXR1czogXCJpbmZvXCJcclxufVxyXG5cclxuQWxlcnQucHJvcFR5cGVzID0ge1xyXG4gICAgYWN0aW9uOiBwcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHR5cGU6IHByb3BUeXBlcy5vbmVPZihbXCJkaXNtaXNzXCIgLCBcImFja25vd2xlZGdlXCIgLCBcIm9wZW5cIl0pLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgaHJlZjogcHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBjb250ZW50OiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMub2JqZWN0XSksXHJcbiAgICBleHBhbmRlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBoZWFkZXI6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpY29uOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbWFuYWdlRXhwYW5kZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgc3RhdHVzOiBwcm9wVHlwZXMub25lT2YoW1wiY3JpdGljYWxcIiAsIFwiaGlnaFwiICwgXCJtb2RlcmF0ZVwiICwgXCJ3YXJuaW5nXCIgLCBcImluZm9cIiAsIFwicG9zaXRpdmVcIiAsIFwibG93XCJdKSxcclxuICAgIHRleHRMaW5rUHJvcHM6IHByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgaHJlZjogcHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcclxuIl19