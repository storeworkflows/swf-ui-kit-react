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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub2dnbGUvVG9nZ2xlLmpzIl0sIm5hbWVzIjpbIl9hZGRTdHlsZXMiLCJjdXN0b21TdHlsZSIsInN0eWxlcyIsImhhc1N0eWxlcyIsIlNXRl9UT0dHTEUiLCJBVkFJTEFCTEVfQ1VTVE9NX1NUWUxFUyIsImZvckVhY2giLCJzdHlsZU5hbWUiLCJ1bmRlZmluZWQiLCJUb2dnbGUiLCJwcm9wcyIsInN0YXRlIiwiY2hlY2tlZCIsImRpc2FibGVkIiwibWFuYWdlQ2hlY2tlZCIsInNpemUiLCJvbkNsaWNrIiwiYWRkaXRpb25hbFN0eWxlIiwidG9nZ2xlQ2xpY2siLCJzZXRTdGF0ZSIsInZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJib29sIiwib25lT2YiLCJvYmplY3QiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsV0FBRCxFQUFpQjtBQUNuQyxNQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQU1DLFNBQVMsR0FBR0YsV0FBVyxLQUFLLElBQWxDO0FBQ0EsTUFBR0UsU0FBSCxFQUNDQyxzQkFBV0MsdUJBQVgsQ0FBbUNDLE9BQW5DLENBQTJDLFVBQUNDLFNBQUQsRUFBYTtBQUN2RCxRQUFHTixXQUFXLENBQUNNLFNBQUQsQ0FBWCxLQUF5QkMsU0FBNUIsRUFDQ04sTUFBTSxDQUFDSyxTQUFELENBQU4sR0FBb0JOLFdBQVcsQ0FBQ00sU0FBRCxDQUEvQjtBQUNELEdBSEQ7QUFLRCxTQUFPTCxNQUFQO0FBQ0EsQ0FWRDs7SUFZTU8sTTs7Ozs7QUFFTCxrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNaQyxNQUFBQSxPQUFPLEVBQUUsTUFBS0YsS0FBTCxDQUFXRTtBQURSLEtBQWI7QUFGa0I7QUFLbEI7Ozs7V0FFRCxrQkFBUztBQUFBOztBQUFBLHdCQU9KLEtBQUtGLEtBUEQ7QUFBQSxVQUVQRyxRQUZPLGVBRVBBLFFBRk87QUFBQSxVQUdQQyxhQUhPLGVBR1BBLGFBSE87QUFBQSxVQUlQQyxJQUpPLGVBSVBBLElBSk87QUFBQSxVQUtQZCxXQUxPLGVBS1BBLFdBTE87QUFBQSxVQU1QZSxPQU5PLGVBTVBBLE9BTk87O0FBU1IsVUFBTUMsZUFBZSxHQUFHakIsVUFBVSxDQUFDQyxXQUFELENBQWxDOztBQUVBLFVBQU1pQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3pCLFlBQUlOLE9BQU8sR0FBRyxNQUFJLENBQUNELEtBQUwsQ0FBV0MsT0FBekI7O0FBQ0EsWUFBRyxDQUFDRSxhQUFKLEVBQW1CO0FBQ2xCRixVQUFBQSxPQUFPLEdBQUcsQ0FBQyxNQUFJLENBQUNELEtBQUwsQ0FBV0MsT0FBdEI7O0FBQ0EsVUFBQSxNQUFJLENBQUNPLFFBQUwsQ0FBYztBQUFDUCxZQUFBQSxPQUFPLEVBQUVBO0FBQVYsV0FBZDtBQUNBOztBQUNESSxRQUFBQSxPQUFPLENBQUM7QUFBQ0ksVUFBQUEsS0FBSyxFQUFFUjtBQUFSLFNBQUQsQ0FBUDtBQUNBLE9BUEQ7O0FBU0EsMEJBQ0M7QUFBQSxnQ0FDQztBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0JWO0FBQXhCLFVBREQsZUFFQztBQUFPLFVBQUEsU0FBUyxFQUFHLDZDQUNSYSxJQURRLEdBRWxCO0FBQ0Msc0JBQVUsSUFEWDtBQUVDLHdCQUFZRjtBQUZiLFdBRmtCLENBQW5CO0FBTUksVUFBQSxLQUFLLEVBQUVJLGVBTlg7QUFBQSxrQ0FRQztBQUFPLFlBQUEsSUFBSSxFQUFDLFVBQVo7QUFDSSxZQUFBLE9BQU8sRUFBSyxLQUFLTixLQUFMLENBQVdDLE9BRDNCO0FBRUksWUFBQSxRQUFRLEVBQUlDLFFBRmhCO0FBR0ksWUFBQSxRQUFRLEVBQUlLO0FBSGhCLFlBUkQsZUFhRTtBQUFNLFlBQUEsU0FBUyxFQUFDO0FBQWhCLFlBYkY7QUFBQSxVQUZEO0FBQUEsUUFERDtBQW9CQTs7OztFQWpEbUJHLEtBQUssQ0FBQ0MsUzs7QUFvRDNCYixNQUFNLENBQUNjLFlBQVAsR0FBc0I7QUFDckJYLEVBQUFBLE9BQU8sRUFBRSxLQURZO0FBRXJCQyxFQUFBQSxRQUFRLEVBQUUsS0FGVztBQUdyQkMsRUFBQUEsYUFBYSxFQUFFLEtBSE07QUFJckJDLEVBQUFBLElBQUksRUFBRSxJQUplO0FBS3JCZCxFQUFBQSxXQUFXLEVBQUU7QUFMUSxDQUF0QjtBQVFBUSxNQUFNLENBQUNlLFNBQVAsR0FBbUI7QUFDbEJaLEVBQUFBLE9BQU8sRUFBRVksc0JBQVVDLElBREQ7QUFFbEJaLEVBQUFBLFFBQVEsRUFBRVcsc0JBQVVDLElBRkY7QUFHbEJYLEVBQUFBLGFBQWEsRUFBRVUsc0JBQVVDLElBSFA7QUFJbEJWLEVBQUFBLElBQUksRUFBRVMsc0JBQVVFLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFoQixDQUpZO0FBS2xCekIsRUFBQUEsV0FBVyxFQUFFdUIsc0JBQVVHLE1BTEw7QUFNbEJYLEVBQUFBLE9BQU8sRUFBRVEsc0JBQVVJO0FBTkQsQ0FBbkI7ZUFTZW5CLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCB7U1dGX1RPR0dMRX0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBfYWRkU3R5bGVzID0gKGN1c3RvbVN0eWxlKSA9PiB7XHJcblx0bGV0IHN0eWxlcyA9IHt9O1xyXG5cdGNvbnN0IGhhc1N0eWxlcyA9IGN1c3RvbVN0eWxlICE9PSBudWxsO1xyXG5cdGlmKGhhc1N0eWxlcylcclxuXHRcdFNXRl9UT0dHTEUuQVZBSUxBQkxFX0NVU1RPTV9TVFlMRVMuZm9yRWFjaCgoc3R5bGVOYW1lKT0+e1xyXG5cdFx0XHRpZihjdXN0b21TdHlsZVtzdHlsZU5hbWVdIT09dW5kZWZpbmVkKVxyXG5cdFx0XHRcdHN0eWxlc1tzdHlsZU5hbWVdID0gY3VzdG9tU3R5bGVbc3R5bGVOYW1lXTtcclxuXHRcdH0pXHJcblxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmNsYXNzIFRvZ2dsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWRcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7XHJcblx0XHRcdGRpc2FibGVkLFxyXG5cdFx0XHRtYW5hZ2VDaGVja2VkLFxyXG5cdFx0XHRzaXplLFxyXG5cdFx0XHRjdXN0b21TdHlsZSxcclxuXHRcdFx0b25DbGlja1xyXG5cdFx0fSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0Y29uc3QgYWRkaXRpb25hbFN0eWxlID0gX2FkZFN0eWxlcyhjdXN0b21TdHlsZSk7XHJcblxyXG5cdFx0Y29uc3QgdG9nZ2xlQ2xpY2sgPSAoKSA9PiB7XHJcblx0XHRcdGxldCBjaGVja2VkID0gdGhpcy5zdGF0ZS5jaGVja2VkXHJcblx0XHRcdGlmKCFtYW5hZ2VDaGVja2VkKSB7XHJcblx0XHRcdFx0Y2hlY2tlZCA9ICF0aGlzLnN0YXRlLmNoZWNrZWRcclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtjaGVja2VkOiBjaGVja2VkfSlcclxuXHRcdFx0fVxyXG5cdFx0XHRvbkNsaWNrKHt2YWx1ZTogY2hlY2tlZH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XHJcblx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoXHJcblx0XHRcdFx0XHRgdG9nZ2xlLSR7c2l6ZX1gLFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInN3aXRjaFwiOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcImRpc2FibGVkXCI6IGRpc2FibGVkXHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdCAgIHN0eWxlPXthZGRpdGlvbmFsU3R5bGV9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiXHJcblx0XHRcdFx0XHRcdCAgIGNoZWNrZWQgID0ge3RoaXMuc3RhdGUuY2hlY2tlZH1cclxuXHRcdFx0XHRcdFx0ICAgZGlzYWJsZWQgPSB7ZGlzYWJsZWR9XHJcblx0XHRcdFx0XHRcdCAgIG9uQ2hhbmdlID0ge3RvZ2dsZUNsaWNrfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyXCIvPlxyXG5cdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdDwvPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuVG9nZ2xlLmRlZmF1bHRQcm9wcyA9IHtcclxuXHRjaGVja2VkOiBmYWxzZSxcclxuXHRkaXNhYmxlZDogZmFsc2UsXHJcblx0bWFuYWdlQ2hlY2tlZDogZmFsc2UsXHJcblx0c2l6ZTogXCJtZFwiLFxyXG5cdGN1c3RvbVN0eWxlOiBudWxsXHJcbn1cclxuXHJcblRvZ2dsZS5wcm9wVHlwZXMgPSB7XHJcblx0Y2hlY2tlZDogcHJvcFR5cGVzLmJvb2wsXHJcblx0ZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxyXG5cdG1hbmFnZUNoZWNrZWQ6IHByb3BUeXBlcy5ib29sLFxyXG5cdHNpemU6IHByb3BUeXBlcy5vbmVPZihbXCJzbVwiLCBcIm1kXCJdKSxcclxuXHRjdXN0b21TdHlsZTogcHJvcFR5cGVzLm9iamVjdCxcclxuXHRvbkNsaWNrOiBwcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2dnbGU7XHJcbiJdfQ==