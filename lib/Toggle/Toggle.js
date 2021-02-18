"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _style = _interopRequireDefault(require("./style.scss"));

var _constants = require("./constants");

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

var _addStyles = function _addStyles(customStyle) {
  var styles = {};
  var hasStyles = customStyle !== null;
  if (hasStyles) _constants.SWF_TOGGLE.AVAILABLE_CUSTOM_STYLES.forEach(function (styleName) {
    if (customStyle[styleName] !== undefined) styles[styleName] = customStyle[styleName];
  });
  return styles;
};

var Toggle = /*#__PURE__*/function (_React$Component) {
  _inherits(Toggle, _React$Component);

  var _super = _createSuper(Toggle);

  function Toggle(props) {
    var _this;

    _classCallCheck(this, Toggle);

    _this = _super.call(this, props);
    _this.state = {
      checked: _this.props.checked
    };
    return _this;
  }

  _createClass(Toggle, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          disabled = _this$props.disabled,
          manageChecked = _this$props.manageChecked,
          size = _this$props.size,
          customStyle = _this$props.customStyle,
          onClick = _this$props.onClick;

      var additionalStyle = _addStyles(customStyle);

      var toggleClick = function toggleClick() {
        var checked = _this2.state.checked;

        if (!manageChecked) {
          checked = !_this2.state.checked;

          _this2.setState({
            checked: checked
          });
        }

        onClick({
          value: checked
        });
      };

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _style["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
          className: (0, _classnames["default"])("toggle-".concat(size), {
            "switch": true,
            "disabled": disabled
          }),
          style: additionalStyle,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "checkbox",
            checked: this.state.checked,
            disabled: disabled,
            onChange: toggleClick
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "slider"
          })]
        })]
      });
    }
  }]);

  return Toggle;
}(React.Component);

Toggle.defaultProps = {
  checked: false,
  disabled: false,
  manageChecked: false,
  size: "md",
  customStyle: null
};
Toggle.propTypes = {
  checked: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  manageChecked: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["sm", "md"]),
  customStyle: _propTypes["default"].object,
  onClick: _propTypes["default"].func
};
var _default = Toggle;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub2dnbGUvVG9nZ2xlLmpzIl0sIm5hbWVzIjpbIl9hZGRTdHlsZXMiLCJjdXN0b21TdHlsZSIsInN0eWxlcyIsImhhc1N0eWxlcyIsIlNXRl9UT0dHTEUiLCJBVkFJTEFCTEVfQ1VTVE9NX1NUWUxFUyIsImZvckVhY2giLCJzdHlsZU5hbWUiLCJ1bmRlZmluZWQiLCJUb2dnbGUiLCJwcm9wcyIsInN0YXRlIiwiY2hlY2tlZCIsImRpc2FibGVkIiwibWFuYWdlQ2hlY2tlZCIsInNpemUiLCJvbkNsaWNrIiwiYWRkaXRpb25hbFN0eWxlIiwidG9nZ2xlQ2xpY2siLCJzZXRTdGF0ZSIsInZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJib29sIiwib25lT2YiLCJvYmplY3QiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsV0FBRCxFQUFpQjtBQUNuQyxNQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQU1DLFNBQVMsR0FBR0YsV0FBVyxLQUFLLElBQWxDO0FBQ0EsTUFBR0UsU0FBSCxFQUNDQyxzQkFBV0MsdUJBQVgsQ0FBbUNDLE9BQW5DLENBQTJDLFVBQUNDLFNBQUQsRUFBYTtBQUN2RCxRQUFHTixXQUFXLENBQUNNLFNBQUQsQ0FBWCxLQUF5QkMsU0FBNUIsRUFDQ04sTUFBTSxDQUFDSyxTQUFELENBQU4sR0FBb0JOLFdBQVcsQ0FBQ00sU0FBRCxDQUEvQjtBQUNELEdBSEQ7QUFLRCxTQUFPTCxNQUFQO0FBQ0EsQ0FWRDs7SUFZTU8sTTs7Ozs7QUFFTCxrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNaQyxNQUFBQSxPQUFPLEVBQUUsTUFBS0YsS0FBTCxDQUFXRTtBQURSLEtBQWI7QUFGa0I7QUFLbEI7Ozs7V0FFRCxrQkFBUztBQUFBOztBQUFBLHdCQU9KLEtBQUtGLEtBUEQ7QUFBQSxVQUVQRyxRQUZPLGVBRVBBLFFBRk87QUFBQSxVQUdQQyxhQUhPLGVBR1BBLGFBSE87QUFBQSxVQUlQQyxJQUpPLGVBSVBBLElBSk87QUFBQSxVQUtQZCxXQUxPLGVBS1BBLFdBTE87QUFBQSxVQU1QZSxPQU5PLGVBTVBBLE9BTk87O0FBU1IsVUFBTUMsZUFBZSxHQUFHakIsVUFBVSxDQUFDQyxXQUFELENBQWxDOztBQUVBLFVBQU1pQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3pCLFlBQUlOLE9BQU8sR0FBRyxNQUFJLENBQUNELEtBQUwsQ0FBV0MsT0FBekI7O0FBQ0EsWUFBRyxDQUFDRSxhQUFKLEVBQW1CO0FBQ2xCRixVQUFBQSxPQUFPLEdBQUcsQ0FBQyxNQUFJLENBQUNELEtBQUwsQ0FBV0MsT0FBdEI7O0FBQ0EsVUFBQSxNQUFJLENBQUNPLFFBQUwsQ0FBYztBQUFDUCxZQUFBQSxPQUFPLEVBQUVBO0FBQVYsV0FBZDtBQUNBOztBQUNESSxRQUFBQSxPQUFPLENBQUM7QUFBQ0ksVUFBQUEsS0FBSyxFQUFFUjtBQUFSLFNBQUQsQ0FBUDtBQUNBLE9BUEQ7O0FBU0EsMEJBQ0M7QUFBQSxnQ0FDQztBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0JWO0FBQXhCLFVBREQsZUFFQztBQUFPLFVBQUEsU0FBUyxFQUFHLDZDQUNSYSxJQURRLEdBRWxCO0FBQ0Msc0JBQVUsSUFEWDtBQUVDLHdCQUFZRjtBQUZiLFdBRmtCLENBQW5CO0FBTUksVUFBQSxLQUFLLEVBQUVJLGVBTlg7QUFBQSxrQ0FRQztBQUFPLFlBQUEsSUFBSSxFQUFDLFVBQVo7QUFDSSxZQUFBLE9BQU8sRUFBSyxLQUFLTixLQUFMLENBQVdDLE9BRDNCO0FBRUksWUFBQSxRQUFRLEVBQUlDLFFBRmhCO0FBR0ksWUFBQSxRQUFRLEVBQUlLO0FBSGhCLFlBUkQsZUFhRTtBQUFNLFlBQUEsU0FBUyxFQUFDO0FBQWhCLFlBYkY7QUFBQSxVQUZEO0FBQUEsUUFERDtBQW9CQTs7OztFQWpEbUJHLEtBQUssQ0FBQ0MsUzs7QUFvRDNCYixNQUFNLENBQUNjLFlBQVAsR0FBc0I7QUFDckJYLEVBQUFBLE9BQU8sRUFBRSxLQURZO0FBRXJCQyxFQUFBQSxRQUFRLEVBQUUsS0FGVztBQUdyQkMsRUFBQUEsYUFBYSxFQUFFLEtBSE07QUFJckJDLEVBQUFBLElBQUksRUFBRSxJQUplO0FBS3JCZCxFQUFBQSxXQUFXLEVBQUU7QUFMUSxDQUF0QjtBQVFBUSxNQUFNLENBQUNlLFNBQVAsR0FBbUI7QUFDbEJaLEVBQUFBLE9BQU8sRUFBRVksc0JBQVVDLElBREQ7QUFFbEJaLEVBQUFBLFFBQVEsRUFBRVcsc0JBQVVDLElBRkY7QUFHbEJYLEVBQUFBLGFBQWEsRUFBRVUsc0JBQVVDLElBSFA7QUFJbEJWLEVBQUFBLElBQUksRUFBRVMsc0JBQVVFLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFoQixDQUpZO0FBS2xCekIsRUFBQUEsV0FBVyxFQUFFdUIsc0JBQVVHLE1BTEw7QUFNbEJYLEVBQUFBLE9BQU8sRUFBRVEsc0JBQVVJO0FBTkQsQ0FBbkI7ZUFTZW5CLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHtTV0ZfVE9HR0xFfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgX2FkZFN0eWxlcyA9IChjdXN0b21TdHlsZSkgPT4ge1xuXHRsZXQgc3R5bGVzID0ge307XG5cdGNvbnN0IGhhc1N0eWxlcyA9IGN1c3RvbVN0eWxlICE9PSBudWxsO1xuXHRpZihoYXNTdHlsZXMpXG5cdFx0U1dGX1RPR0dMRS5BVkFJTEFCTEVfQ1VTVE9NX1NUWUxFUy5mb3JFYWNoKChzdHlsZU5hbWUpPT57XG5cdFx0XHRpZihjdXN0b21TdHlsZVtzdHlsZU5hbWVdIT09dW5kZWZpbmVkKVxuXHRcdFx0XHRzdHlsZXNbc3R5bGVOYW1lXSA9IGN1c3RvbVN0eWxlW3N0eWxlTmFtZV07XG5cdFx0fSlcblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5jbGFzcyBUb2dnbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWRcblx0XHR9XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGRpc2FibGVkLFxuXHRcdFx0bWFuYWdlQ2hlY2tlZCxcblx0XHRcdHNpemUsXG5cdFx0XHRjdXN0b21TdHlsZSxcblx0XHRcdG9uQ2xpY2tcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IGFkZGl0aW9uYWxTdHlsZSA9IF9hZGRTdHlsZXMoY3VzdG9tU3R5bGUpO1xuXG5cdFx0Y29uc3QgdG9nZ2xlQ2xpY2sgPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2hlY2tlZCA9IHRoaXMuc3RhdGUuY2hlY2tlZFxuXHRcdFx0aWYoIW1hbmFnZUNoZWNrZWQpIHtcblx0XHRcdFx0Y2hlY2tlZCA9ICF0aGlzLnN0YXRlLmNoZWNrZWRcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7Y2hlY2tlZDogY2hlY2tlZH0pXG5cdFx0XHR9XG5cdFx0XHRvbkNsaWNrKHt2YWx1ZTogY2hlY2tlZH0pO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cblx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoXG5cdFx0XHRcdFx0YHRvZ2dsZS0ke3NpemV9YCxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInN3aXRjaFwiOiB0cnVlLFxuXHRcdFx0XHRcdFx0XCJkaXNhYmxlZFwiOiBkaXNhYmxlZFxuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdCAgIHN0eWxlPXthZGRpdGlvbmFsU3R5bGV9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcblx0XHRcdFx0XHRcdCAgIGNoZWNrZWQgID0ge3RoaXMuc3RhdGUuY2hlY2tlZH1cblx0XHRcdFx0XHRcdCAgIGRpc2FibGVkID0ge2Rpc2FibGVkfVxuXHRcdFx0XHRcdFx0ICAgb25DaGFuZ2UgPSB7dG9nZ2xlQ2xpY2t9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlclwiLz5cblx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdDwvPlxuXHRcdClcblx0fVxufVxuXG5Ub2dnbGUuZGVmYXVsdFByb3BzID0ge1xuXHRjaGVja2VkOiBmYWxzZSxcblx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRtYW5hZ2VDaGVja2VkOiBmYWxzZSxcblx0c2l6ZTogXCJtZFwiLFxuXHRjdXN0b21TdHlsZTogbnVsbFxufVxuXG5Ub2dnbGUucHJvcFR5cGVzID0ge1xuXHRjaGVja2VkOiBwcm9wVHlwZXMuYm9vbCxcblx0ZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxuXHRtYW5hZ2VDaGVja2VkOiBwcm9wVHlwZXMuYm9vbCxcblx0c2l6ZTogcHJvcFR5cGVzLm9uZU9mKFtcInNtXCIsIFwibWRcIl0pLFxuXHRjdXN0b21TdHlsZTogcHJvcFR5cGVzLm9iamVjdCxcblx0b25DbGljazogcHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlO1xuIl19