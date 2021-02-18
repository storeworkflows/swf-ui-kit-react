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

var _dispatchDecorator = require("../utils/dispatchDecorator");

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
}; //@dispatch()


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
          dispatch = _this$props.dispatch,
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

        onClick(checked); //dispatch(SWF_TOGGLE.CLICKED, {value: checked});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub2dnbGUvVG9nZ2xlLmpzIl0sIm5hbWVzIjpbIl9hZGRTdHlsZXMiLCJjdXN0b21TdHlsZSIsInN0eWxlcyIsImhhc1N0eWxlcyIsIlNXRl9UT0dHTEUiLCJBVkFJTEFCTEVfQ1VTVE9NX1NUWUxFUyIsImZvckVhY2giLCJzdHlsZU5hbWUiLCJ1bmRlZmluZWQiLCJUb2dnbGUiLCJwcm9wcyIsInN0YXRlIiwiY2hlY2tlZCIsImRpc2FibGVkIiwibWFuYWdlQ2hlY2tlZCIsInNpemUiLCJkaXNwYXRjaCIsIm9uQ2xpY2siLCJhZGRpdGlvbmFsU3R5bGUiLCJ0b2dnbGVDbGljayIsInNldFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJib29sIiwib25lT2YiLCJvYmplY3QiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsV0FBRCxFQUFpQjtBQUNuQyxNQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQU1DLFNBQVMsR0FBR0YsV0FBVyxLQUFLLElBQWxDO0FBQ0EsTUFBR0UsU0FBSCxFQUNDQyxzQkFBV0MsdUJBQVgsQ0FBbUNDLE9BQW5DLENBQTJDLFVBQUNDLFNBQUQsRUFBYTtBQUN2RCxRQUFHTixXQUFXLENBQUNNLFNBQUQsQ0FBWCxLQUF5QkMsU0FBNUIsRUFDQ04sTUFBTSxDQUFDSyxTQUFELENBQU4sR0FBb0JOLFdBQVcsQ0FBQ00sU0FBRCxDQUEvQjtBQUNELEdBSEQ7QUFLRCxTQUFPTCxNQUFQO0FBQ0EsQ0FWRCxDLENBWUE7OztJQUNNTyxNOzs7OztBQUVMLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1pDLE1BQUFBLE9BQU8sRUFBRSxNQUFLRixLQUFMLENBQVdFO0FBRFIsS0FBYjtBQUZrQjtBQUtsQjs7OztXQUVELGtCQUFTO0FBQUE7O0FBQUEsd0JBUUosS0FBS0YsS0FSRDtBQUFBLFVBRVBHLFFBRk8sZUFFUEEsUUFGTztBQUFBLFVBR1BDLGFBSE8sZUFHUEEsYUFITztBQUFBLFVBSVBDLElBSk8sZUFJUEEsSUFKTztBQUFBLFVBS1BkLFdBTE8sZUFLUEEsV0FMTztBQUFBLFVBTVBlLFFBTk8sZUFNUEEsUUFOTztBQUFBLFVBT1BDLE9BUE8sZUFPUEEsT0FQTzs7QUFVUixVQUFNQyxlQUFlLEdBQUdsQixVQUFVLENBQUNDLFdBQUQsQ0FBbEM7O0FBRUEsVUFBTWtCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDekIsWUFBSVAsT0FBTyxHQUFHLE1BQUksQ0FBQ0QsS0FBTCxDQUFXQyxPQUF6Qjs7QUFDQSxZQUFHLENBQUNFLGFBQUosRUFBbUI7QUFDbEJGLFVBQUFBLE9BQU8sR0FBRyxDQUFDLE1BQUksQ0FBQ0QsS0FBTCxDQUFXQyxPQUF0Qjs7QUFDQSxVQUFBLE1BQUksQ0FBQ1EsUUFBTCxDQUFjO0FBQUNSLFlBQUFBLE9BQU8sRUFBRUE7QUFBVixXQUFkO0FBQ0E7O0FBQ0RLLFFBQUFBLE9BQU8sQ0FBQ0wsT0FBRCxDQUFQLENBTnlCLENBT3pCO0FBQ0EsT0FSRDs7QUFVQSwwQkFDQztBQUFBLGdDQUNDO0FBQU8sVUFBQSxJQUFJLEVBQUMsVUFBWjtBQUFBLG9CQUF3QlY7QUFBeEIsVUFERCxlQUVDO0FBQU8sVUFBQSxTQUFTLEVBQUcsNkNBQ1JhLElBRFEsR0FFbEI7QUFDQyxzQkFBVSxJQURYO0FBRUMsd0JBQVlGO0FBRmIsV0FGa0IsQ0FBbkI7QUFNSSxVQUFBLEtBQUssRUFBRUssZUFOWDtBQUFBLGtDQVFDO0FBQU8sWUFBQSxJQUFJLEVBQUMsVUFBWjtBQUNJLFlBQUEsT0FBTyxFQUFLLEtBQUtQLEtBQUwsQ0FBV0MsT0FEM0I7QUFFSSxZQUFBLFFBQVEsRUFBSUMsUUFGaEI7QUFHSSxZQUFBLFFBQVEsRUFBSU07QUFIaEIsWUFSRCxlQWFFO0FBQU0sWUFBQSxTQUFTLEVBQUM7QUFBaEIsWUFiRjtBQUFBLFVBRkQ7QUFBQSxRQUREO0FBb0JBOzs7O0VBbkRtQkUsS0FBSyxDQUFDQyxTOztBQXNEM0JiLE1BQU0sQ0FBQ2MsWUFBUCxHQUFzQjtBQUNyQlgsRUFBQUEsT0FBTyxFQUFFLEtBRFk7QUFFckJDLEVBQUFBLFFBQVEsRUFBRSxLQUZXO0FBR3JCQyxFQUFBQSxhQUFhLEVBQUUsS0FITTtBQUlyQkMsRUFBQUEsSUFBSSxFQUFFLElBSmU7QUFLckJkLEVBQUFBLFdBQVcsRUFBRTtBQUxRLENBQXRCO0FBUUFRLE1BQU0sQ0FBQ2UsU0FBUCxHQUFtQjtBQUNsQlosRUFBQUEsT0FBTyxFQUFFWSxzQkFBVUMsSUFERDtBQUVsQlosRUFBQUEsUUFBUSxFQUFFVyxzQkFBVUMsSUFGRjtBQUdsQlgsRUFBQUEsYUFBYSxFQUFFVSxzQkFBVUMsSUFIUDtBQUlsQlYsRUFBQUEsSUFBSSxFQUFFUyxzQkFBVUUsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLENBQWhCLENBSlk7QUFLbEJ6QixFQUFBQSxXQUFXLEVBQUV1QixzQkFBVUcsTUFMTDtBQU1sQlYsRUFBQUEsT0FBTyxFQUFFTyxzQkFBVUk7QUFORCxDQUFuQjtlQVNlbkIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IHtTV0ZfVE9HR0xFfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSBcIi4uL3V0aWxzL2Rpc3BhdGNoRGVjb3JhdG9yXCI7XHJcblxyXG5jb25zdCBfYWRkU3R5bGVzID0gKGN1c3RvbVN0eWxlKSA9PiB7XHJcblx0bGV0IHN0eWxlcyA9IHt9O1xyXG5cdGNvbnN0IGhhc1N0eWxlcyA9IGN1c3RvbVN0eWxlICE9PSBudWxsO1xyXG5cdGlmKGhhc1N0eWxlcylcclxuXHRcdFNXRl9UT0dHTEUuQVZBSUxBQkxFX0NVU1RPTV9TVFlMRVMuZm9yRWFjaCgoc3R5bGVOYW1lKT0+e1xyXG5cdFx0XHRpZihjdXN0b21TdHlsZVtzdHlsZU5hbWVdIT09dW5kZWZpbmVkKVxyXG5cdFx0XHRcdHN0eWxlc1tzdHlsZU5hbWVdID0gY3VzdG9tU3R5bGVbc3R5bGVOYW1lXTtcclxuXHRcdH0pXHJcblxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbi8vQGRpc3BhdGNoKClcclxuY2xhc3MgVG9nZ2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZFxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0ZGlzYWJsZWQsXHJcblx0XHRcdG1hbmFnZUNoZWNrZWQsXHJcblx0XHRcdHNpemUsXHJcblx0XHRcdGN1c3RvbVN0eWxlLFxyXG5cdFx0XHRkaXNwYXRjaCxcclxuXHRcdFx0b25DbGlja1xyXG5cdFx0fSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0Y29uc3QgYWRkaXRpb25hbFN0eWxlID0gX2FkZFN0eWxlcyhjdXN0b21TdHlsZSk7XHJcblxyXG5cdFx0Y29uc3QgdG9nZ2xlQ2xpY2sgPSAoKSA9PiB7XHJcblx0XHRcdGxldCBjaGVja2VkID0gdGhpcy5zdGF0ZS5jaGVja2VkXHJcblx0XHRcdGlmKCFtYW5hZ2VDaGVja2VkKSB7XHJcblx0XHRcdFx0Y2hlY2tlZCA9ICF0aGlzLnN0YXRlLmNoZWNrZWRcclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtjaGVja2VkOiBjaGVja2VkfSlcclxuXHRcdFx0fVxyXG5cdFx0XHRvbkNsaWNrKGNoZWNrZWQpO1xyXG5cdFx0XHQvL2Rpc3BhdGNoKFNXRl9UT0dHTEUuQ0xJQ0tFRCwge3ZhbHVlOiBjaGVja2VkfSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cclxuXHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXsgY2xhc3NuYW1lcyhcclxuXHRcdFx0XHRcdGB0b2dnbGUtJHtzaXplfWAsXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwic3dpdGNoXCI6IHRydWUsXHJcblx0XHRcdFx0XHRcdFwiZGlzYWJsZWRcIjogZGlzYWJsZWRcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0ICAgc3R5bGU9e2FkZGl0aW9uYWxTdHlsZX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcclxuXHRcdFx0XHRcdFx0ICAgY2hlY2tlZCAgPSB7dGhpcy5zdGF0ZS5jaGVja2VkfVxyXG5cdFx0XHRcdFx0XHQgICBkaXNhYmxlZCA9IHtkaXNhYmxlZH1cclxuXHRcdFx0XHRcdFx0ICAgb25DaGFuZ2UgPSB7dG9nZ2xlQ2xpY2t9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzbGlkZXJcIi8+XHJcblx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0PC8+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5Ub2dnbGUuZGVmYXVsdFByb3BzID0ge1xyXG5cdGNoZWNrZWQ6IGZhbHNlLFxyXG5cdGRpc2FibGVkOiBmYWxzZSxcclxuXHRtYW5hZ2VDaGVja2VkOiBmYWxzZSxcclxuXHRzaXplOiBcIm1kXCIsXHJcblx0Y3VzdG9tU3R5bGU6IG51bGxcclxufVxyXG5cclxuVG9nZ2xlLnByb3BUeXBlcyA9IHtcclxuXHRjaGVja2VkOiBwcm9wVHlwZXMuYm9vbCxcclxuXHRkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcblx0bWFuYWdlQ2hlY2tlZDogcHJvcFR5cGVzLmJvb2wsXHJcblx0c2l6ZTogcHJvcFR5cGVzLm9uZU9mKFtcInNtXCIsIFwibWRcIl0pLFxyXG5cdGN1c3RvbVN0eWxlOiBwcm9wVHlwZXMub2JqZWN0LFxyXG5cdG9uQ2xpY2s6IHByb3BUeXBlcy5mdW5jXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZTtcclxuIl19