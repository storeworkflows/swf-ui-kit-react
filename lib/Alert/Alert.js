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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BbGVydC9BbGVydC5qcyJdLCJuYW1lcyI6WyJBbGVydCIsInByb3BzIiwic3RhdGUiLCJleHBhbmRlZCIsImlzT3ZlcmZsb3dlZCIsImNvbnRlbnRSZWYiLCJ0ZXh0UmVmIiwiY29udGVudCIsInRleHQiLCJjb250ZW50RW5kWCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInkiLCJjbGllbnRIZWlnaHQiLCJ0ZXh0RW5kWCIsInNldFN0YXRlIiwiYWN0aW9uIiwiaGVhZGVyIiwiaWNvbiIsIm1hbmFnZUV4cGFuZGVkIiwic3RhdHVzIiwidGV4dExpbmtQcm9wcyIsImVsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJzaGFwZSIsInR5cGUiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJocmVmIiwic3RyaW5nIiwib25lT2ZUeXBlIiwib2JqZWN0IiwiYm9vbCIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEs7Ozs7O0FBRUYsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxRQUFRLEVBQUUsTUFBS0YsS0FBTCxDQUFXRSxRQURaO0FBRVRDLE1BQUFBLFlBQVksRUFBRTtBQUZMLEtBQWI7QUFLQSxVQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLElBQWY7QUFUZTtBQVVsQjs7OztXQUVELDZCQUFvQjtBQUNoQixVQUFHLEtBQUtELFVBQUwsSUFBbUIsS0FBS0MsT0FBM0IsRUFBbUM7QUFDL0IsWUFBSUMsT0FBTyxHQUFHLEtBQUtGLFVBQW5CO0FBQ0EsWUFBSUcsSUFBSSxHQUFHLEtBQUtGLE9BQWhCO0FBRUEsWUFBSUcsV0FBVyxHQUFHRixPQUFPLENBQUNHLHFCQUFSLEdBQWdDQyxDQUFoQyxHQUFvQ0osT0FBTyxDQUFDSyxZQUE5RDtBQUNBLFlBQUlDLFFBQVEsR0FBR0wsSUFBSSxDQUFDRSxxQkFBTCxHQUE2QkMsQ0FBN0IsR0FBaUNILElBQUksQ0FBQ0ksWUFBckQ7QUFDQSxhQUFLRSxRQUFMLENBQWM7QUFBQ1YsVUFBQUEsWUFBWSxFQUFFSyxXQUFXLEdBQUNJO0FBQTNCLFNBQWQ7QUFDSDtBQUNKOzs7V0FFRCxrQkFBUztBQUFBOztBQUFBLHdCQVVELEtBQUtaLEtBVko7QUFBQSxVQUdEYyxNQUhDLGVBR0RBLE1BSEM7QUFBQSxVQUlEUixPQUpDLGVBSURBLE9BSkM7QUFBQSxVQUtEUyxNQUxDLGVBS0RBLE1BTEM7QUFBQSxVQU1EQyxJQU5DLGVBTURBLElBTkM7QUFBQSxVQU9EQyxjQVBDLGVBT0RBLGNBUEM7QUFBQSxVQVFEQyxNQVJDLGVBUURBLE1BUkM7QUFBQSxVQVNEQyxhQVRDLGVBU0RBLGFBVEM7QUFBQSxVQVlFaEIsWUFaRixHQVlrQixLQUFLRixLQVp2QixDQVlFRSxZQVpGO0FBY0wsMEJBQ0k7QUFBQSwrQkFDSTtBQUFLLFVBQUEsU0FBUyxFQUFFLHFCQUFoQjtBQUFBLHFCQUNLYSxJQUFJLGlCQUFJO0FBQUssWUFBQSxTQUFTLEVBQUUsWUFBaEI7QUFBQSxtQ0FBOEIscUJBQUMsZ0JBQUQ7QUFBTSxjQUFBLElBQUksRUFBSUE7QUFBZDtBQUE5QixZQURiLGVBRUk7QUFBSyxZQUFBLFNBQVMsRUFBRSxlQUFoQjtBQUFpQyxZQUFBLEdBQUcsRUFBSyxhQUFBSSxFQUFFO0FBQUEscUJBQUksTUFBSSxDQUFDaEIsVUFBTCxHQUFrQmdCLEVBQXRCO0FBQUEsYUFBM0M7QUFBQSx1QkFDS0wsTUFBTSxpQkFBSTtBQUFLLGNBQUEsU0FBUyxFQUFFLGNBQWhCO0FBQUEsd0JBQWlDQTtBQUFqQyxjQURmLEVBRUtULE9BQU8saUJBQ0o7QUFDSSxjQUFBLEdBQUcsRUFBSyxhQUFBYyxFQUFFO0FBQUEsdUJBQUksTUFBSSxDQUFDZixPQUFMLEdBQWVlLEVBQW5CO0FBQUEsZUFEZDtBQUVJLGNBQUEsU0FBUyxFQUFFLDRCQUFXO0FBQ2xCLGtDQUFrQixJQURBO0FBRWxCLDhCQUFjakI7QUFGSSxlQUFYLENBRmY7QUFBQSxxQ0FPSTtBQUFHLGdCQUFBLFNBQVMsRUFBRSxZQUFkO0FBQUEsMEJBQThCRztBQUE5QjtBQVBKLGNBSFIsRUFhS0gsWUFBWSxpQkFBSTtBQUFBO0FBQUEsY0FickI7QUFBQSxZQUZKLGVBaUJJLHFCQUFDLGtCQUFEO0FBQVEsWUFBQSxLQUFLLEVBQUU7QUFBZixZQWpCSjtBQUFBO0FBREosUUFESjtBQXVCSDs7OztFQTlEZWtCLEtBQUssQ0FBQ0MsUzs7QUFpRTFCdkIsS0FBSyxDQUFDd0IsWUFBTixHQUFxQjtBQUNqQnJCLEVBQUFBLFFBQVEsRUFBRSxLQURPO0FBRWpCZSxFQUFBQSxjQUFjLEVBQUUsS0FGQztBQUdqQkMsRUFBQUEsTUFBTSxFQUFFO0FBSFMsQ0FBckI7QUFNQW5CLEtBQUssQ0FBQ3lCLFNBQU4sR0FBa0I7QUFDZFYsRUFBQUEsTUFBTSxFQUFFVSxzQkFBVUMsS0FBVixDQUFnQjtBQUNwQkMsSUFBQUEsSUFBSSxFQUFFRixzQkFBVUcsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBYSxhQUFiLEVBQTZCLE1BQTdCLENBQWhCLEVBQXNEQyxVQUR4QztBQUVwQkMsSUFBQUEsSUFBSSxFQUFFTCxzQkFBVU07QUFGSSxHQUFoQixDQURNO0FBS2R4QixFQUFBQSxPQUFPLEVBQUVrQixzQkFBVU8sU0FBVixDQUFvQixDQUFDUCxzQkFBVU0sTUFBWCxFQUFtQk4sc0JBQVVRLE1BQTdCLENBQXBCLENBTEs7QUFNZDlCLEVBQUFBLFFBQVEsRUFBRXNCLHNCQUFVUyxJQU5OO0FBT2RsQixFQUFBQSxNQUFNLEVBQUVTLHNCQUFVTSxNQVBKO0FBUWRkLEVBQUFBLElBQUksRUFBRVEsc0JBQVVNLE1BUkY7QUFTZGIsRUFBQUEsY0FBYyxFQUFFTyxzQkFBVVMsSUFUWjtBQVVkZixFQUFBQSxNQUFNLEVBQUVNLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsVUFBRCxFQUFjLE1BQWQsRUFBdUIsVUFBdkIsRUFBb0MsU0FBcEMsRUFBZ0QsTUFBaEQsRUFBeUQsVUFBekQsRUFBc0UsS0FBdEUsQ0FBaEIsQ0FWTTtBQVdkUixFQUFBQSxhQUFhLEVBQUVLLHNCQUFVQyxLQUFWLENBQWdCO0FBQzNCUyxJQUFBQSxLQUFLLEVBQUVWLHNCQUFVTSxNQURVO0FBRTNCRCxJQUFBQSxJQUFJLEVBQUVMLHNCQUFVTTtBQUZXLEdBQWhCO0FBWEQsQ0FBbEI7ZUFpQmUvQixLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xyXG5cclxuY2xhc3MgQWxlcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBleHBhbmRlZDogdGhpcy5wcm9wcy5leHBhbmRlZCxcclxuICAgICAgICAgICAgaXNPdmVyZmxvd2VkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb250ZW50UmVmID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRleHRSZWYgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmKHRoaXMuY29udGVudFJlZiAmJiB0aGlzLnRleHRSZWYpe1xyXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IHRoaXMuY29udGVudFJlZjtcclxuICAgICAgICAgICAgbGV0IHRleHQgPSB0aGlzLnRleHRSZWY7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29udGVudEVuZFggPSBjb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgKyBjb250ZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgbGV0IHRleHRFbmRYID0gdGV4dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55ICsgdGV4dC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzT3ZlcmZsb3dlZDogY29udGVudEVuZFg8dGV4dEVuZFh9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICBoZWFkZXIsXHJcbiAgICAgICAgICAgIGljb24sXHJcbiAgICAgICAgICAgIG1hbmFnZUV4cGFuZGVkLFxyXG4gICAgICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgICAgIHRleHRMaW5rUHJvcHNcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3Qge2lzT3ZlcmZsb3dlZH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic3dmLWFsZXJ0LWNvbnRhaW5lclwifT5cclxuICAgICAgICAgICAgICAgICAgICB7aWNvbiAmJiA8ZGl2IGNsYXNzTmFtZT17XCJhbGVydC1pY29uXCJ9PjxJY29uIGljb24gPSB7aWNvbn0vPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJhbGVydC1jb250ZW50XCJ9IHJlZiA9IHsgZWwgPT4gdGhpcy5jb250ZW50UmVmID0gZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyICYmIDxkaXYgY2xhc3NOYW1lPXtcImFsZXJ0LWhlYWRlclwifT57aGVhZGVyfTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYgPSB7IGVsID0+IHRoaXMudGV4dFJlZiA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1jb250YWluZXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvdmVyZmxvd2VkXCI6IGlzT3ZlcmZsb3dlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17XCJhbGVydC10ZXh0XCJ9ID57Y29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNPdmVyZmxvd2VkICYmIDxzcGFuPlNob3cgbW9yZTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD17XCJPa1wifS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5BbGVydC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBleHBhbmRlZDogZmFsc2UsXHJcbiAgICBtYW5hZ2VFeHBhbmRlZDogZmFsc2UsXHJcbiAgICBzdGF0dXM6IFwiaW5mb1wiXHJcbn1cclxuXHJcbkFsZXJ0LnByb3BUeXBlcyA9IHtcclxuICAgIGFjdGlvbjogcHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICB0eXBlOiBwcm9wVHlwZXMub25lT2YoW1wiZGlzbWlzc1wiICwgXCJhY2tub3dsZWRnZVwiICwgXCJvcGVuXCJdKS5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGhyZWY6IHByb3BUeXBlcy5zdHJpbmdcclxuICAgIH0pLFxyXG4gICAgY29udGVudDogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLnN0cmluZywgcHJvcFR5cGVzLm9iamVjdF0pLFxyXG4gICAgZXhwYW5kZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgaGVhZGVyOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaWNvbjogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG1hbmFnZUV4cGFuZGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHN0YXR1czogcHJvcFR5cGVzLm9uZU9mKFtcImNyaXRpY2FsXCIgLCBcImhpZ2hcIiAsIFwibW9kZXJhdGVcIiAsIFwid2FybmluZ1wiICwgXCJpbmZvXCIgLCBcInBvc2l0aXZlXCIgLCBcImxvd1wiXSksXHJcbiAgICB0ZXh0TGlua1Byb3BzOiBwcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGhyZWY6IHByb3BUeXBlcy5zdHJpbmdcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XHJcbiJdfQ==