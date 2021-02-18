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

var _dec, _class;

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

var Toggle = (_dec = (0, _dispatchDecorator.dispatch)(), _dec(_class = /*#__PURE__*/function (_React$Component) {
  _inherits(Toggle, _React$Component);

  var _super = _createSuper(Toggle);

  function Toggle(props) {
    var _this;

    _classCallCheck(this, Toggle);

    _this = _super.call(this, props);
    console.log(props);
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
          dispatch = _this$props.dispatch;

      var additionalStyle = _addStyles(customStyle);

      var toggleClick = function toggleClick() {
        var checked = _this2.state.checked;

        if (!manageChecked) {
          checked = !_this2.state.checked;

          _this2.setState({
            checked: checked
          });
        }

        dispatch(_constants.SWF_TOGGLE.CLICKED, {
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
}(React.Component)) || _class);
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
  customStyle: _propTypes["default"].object
};
var _default = Toggle;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub2dnbGUvVG9nZ2xlLmpzIl0sIm5hbWVzIjpbIl9hZGRTdHlsZXMiLCJjdXN0b21TdHlsZSIsInN0eWxlcyIsImhhc1N0eWxlcyIsIlNXRl9UT0dHTEUiLCJBVkFJTEFCTEVfQ1VTVE9NX1NUWUxFUyIsImZvckVhY2giLCJzdHlsZU5hbWUiLCJ1bmRlZmluZWQiLCJUb2dnbGUiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImNoZWNrZWQiLCJkaXNhYmxlZCIsIm1hbmFnZUNoZWNrZWQiLCJzaXplIiwiZGlzcGF0Y2giLCJhZGRpdGlvbmFsU3R5bGUiLCJ0b2dnbGVDbGljayIsInNldFN0YXRlIiwiQ0xJQ0tFRCIsInZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJib29sIiwib25lT2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFdBQUQsRUFBaUI7QUFDbkMsTUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFNQyxTQUFTLEdBQUdGLFdBQVcsS0FBSyxJQUFsQztBQUNBLE1BQUdFLFNBQUgsRUFDQ0Msc0JBQVdDLHVCQUFYLENBQW1DQyxPQUFuQyxDQUEyQyxVQUFDQyxTQUFELEVBQWE7QUFDdkQsUUFBR04sV0FBVyxDQUFDTSxTQUFELENBQVgsS0FBeUJDLFNBQTVCLEVBQ0NOLE1BQU0sQ0FBQ0ssU0FBRCxDQUFOLEdBQW9CTixXQUFXLENBQUNNLFNBQUQsQ0FBL0I7QUFDRCxHQUhEO0FBS0QsU0FBT0wsTUFBUDtBQUNBLENBVkQ7O0lBYU1PLE0sV0FETCxrQzs7Ozs7QUFHQSxrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLFVBQUtHLEtBQUwsR0FBYTtBQUNaQyxNQUFBQSxPQUFPLEVBQUUsTUFBS0osS0FBTCxDQUFXSTtBQURSLEtBQWI7QUFIa0I7QUFNbEI7Ozs7V0FFRCxrQkFBUztBQUFBOztBQUFBLHdCQU9KLEtBQUtKLEtBUEQ7QUFBQSxVQUVQSyxRQUZPLGVBRVBBLFFBRk87QUFBQSxVQUdQQyxhQUhPLGVBR1BBLGFBSE87QUFBQSxVQUlQQyxJQUpPLGVBSVBBLElBSk87QUFBQSxVQUtQaEIsV0FMTyxlQUtQQSxXQUxPO0FBQUEsVUFNUGlCLFFBTk8sZUFNUEEsUUFOTzs7QUFTUixVQUFNQyxlQUFlLEdBQUduQixVQUFVLENBQUNDLFdBQUQsQ0FBbEM7O0FBRUEsVUFBTW1CLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDekIsWUFBSU4sT0FBTyxHQUFHLE1BQUksQ0FBQ0QsS0FBTCxDQUFXQyxPQUF6Qjs7QUFDQSxZQUFHLENBQUNFLGFBQUosRUFBbUI7QUFDbEJGLFVBQUFBLE9BQU8sR0FBRyxDQUFDLE1BQUksQ0FBQ0QsS0FBTCxDQUFXQyxPQUF0Qjs7QUFDQSxVQUFBLE1BQUksQ0FBQ08sUUFBTCxDQUFjO0FBQUNQLFlBQUFBLE9BQU8sRUFBRUE7QUFBVixXQUFkO0FBQ0E7O0FBQ0RJLFFBQUFBLFFBQVEsQ0FBQ2Qsc0JBQVdrQixPQUFaLEVBQXFCO0FBQUNDLFVBQUFBLEtBQUssRUFBRVQ7QUFBUixTQUFyQixDQUFSO0FBQ0EsT0FQRDs7QUFTQSwwQkFDQztBQUFBLGdDQUNDO0FBQU8sVUFBQSxJQUFJLEVBQUMsVUFBWjtBQUFBLG9CQUF3Qlo7QUFBeEIsVUFERCxlQUVDO0FBQU8sVUFBQSxTQUFTLEVBQUcsNkNBQ1JlLElBRFEsR0FFbEI7QUFDQyxzQkFBVSxJQURYO0FBRUMsd0JBQVlGO0FBRmIsV0FGa0IsQ0FBbkI7QUFNSSxVQUFBLEtBQUssRUFBRUksZUFOWDtBQUFBLGtDQVFDO0FBQU8sWUFBQSxJQUFJLEVBQUMsVUFBWjtBQUNJLFlBQUEsT0FBTyxFQUFLLEtBQUtOLEtBQUwsQ0FBV0MsT0FEM0I7QUFFSSxZQUFBLFFBQVEsRUFBSUMsUUFGaEI7QUFHSSxZQUFBLFFBQVEsRUFBSUs7QUFIaEIsWUFSRCxlQWFFO0FBQU0sWUFBQSxTQUFTLEVBQUM7QUFBaEIsWUFiRjtBQUFBLFVBRkQ7QUFBQSxRQUREO0FBb0JBOzs7O0VBbERtQkksS0FBSyxDQUFDQyxTO0FBcUQzQmhCLE1BQU0sQ0FBQ2lCLFlBQVAsR0FBc0I7QUFDckJaLEVBQUFBLE9BQU8sRUFBRSxLQURZO0FBRXJCQyxFQUFBQSxRQUFRLEVBQUUsS0FGVztBQUdyQkMsRUFBQUEsYUFBYSxFQUFFLEtBSE07QUFJckJDLEVBQUFBLElBQUksRUFBRSxJQUplO0FBS3JCaEIsRUFBQUEsV0FBVyxFQUFFO0FBTFEsQ0FBdEI7QUFRQVEsTUFBTSxDQUFDa0IsU0FBUCxHQUFtQjtBQUNsQmIsRUFBQUEsT0FBTyxFQUFFYSxzQkFBVUMsSUFERDtBQUVsQmIsRUFBQUEsUUFBUSxFQUFFWSxzQkFBVUMsSUFGRjtBQUdsQlosRUFBQUEsYUFBYSxFQUFFVyxzQkFBVUMsSUFIUDtBQUlsQlgsRUFBQUEsSUFBSSxFQUFFVSxzQkFBVUUsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLENBQWhCLENBSlk7QUFLbEI1QixFQUFBQSxXQUFXLEVBQUUwQixzQkFBVUc7QUFMTCxDQUFuQjtlQVFlckIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQge1NXRl9UT0dHTEV9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSBcIi4uL3V0aWxzL2Rpc3BhdGNoRGVjb3JhdG9yXCI7XG5cbmNvbnN0IF9hZGRTdHlsZXMgPSAoY3VzdG9tU3R5bGUpID0+IHtcblx0bGV0IHN0eWxlcyA9IHt9O1xuXHRjb25zdCBoYXNTdHlsZXMgPSBjdXN0b21TdHlsZSAhPT0gbnVsbDtcblx0aWYoaGFzU3R5bGVzKVxuXHRcdFNXRl9UT0dHTEUuQVZBSUxBQkxFX0NVU1RPTV9TVFlMRVMuZm9yRWFjaCgoc3R5bGVOYW1lKT0+e1xuXHRcdFx0aWYoY3VzdG9tU3R5bGVbc3R5bGVOYW1lXSE9PXVuZGVmaW5lZClcblx0XHRcdFx0c3R5bGVzW3N0eWxlTmFtZV0gPSBjdXN0b21TdHlsZVtzdHlsZU5hbWVdO1xuXHRcdH0pXG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuQGRpc3BhdGNoKClcbmNsYXNzIFRvZ2dsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0Y29uc29sZS5sb2cocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWRcblx0XHR9XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGRpc2FibGVkLFxuXHRcdFx0bWFuYWdlQ2hlY2tlZCxcblx0XHRcdHNpemUsXG5cdFx0XHRjdXN0b21TdHlsZSxcblx0XHRcdGRpc3BhdGNoXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBhZGRpdGlvbmFsU3R5bGUgPSBfYWRkU3R5bGVzKGN1c3RvbVN0eWxlKTtcblxuXHRcdGNvbnN0IHRvZ2dsZUNsaWNrID0gKCkgPT4ge1xuXHRcdFx0bGV0IGNoZWNrZWQgPSB0aGlzLnN0YXRlLmNoZWNrZWRcblx0XHRcdGlmKCFtYW5hZ2VDaGVja2VkKSB7XG5cdFx0XHRcdGNoZWNrZWQgPSAhdGhpcy5zdGF0ZS5jaGVja2VkXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2NoZWNrZWQ6IGNoZWNrZWR9KVxuXHRcdFx0fVxuXHRcdFx0ZGlzcGF0Y2goU1dGX1RPR0dMRS5DTElDS0VELCB7dmFsdWU6IGNoZWNrZWR9KTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDw+XG5cdFx0XHRcdDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XG5cdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9eyBjbGFzc25hbWVzKFxuXHRcdFx0XHRcdGB0b2dnbGUtJHtzaXplfWAsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJzd2l0Y2hcIjogdHJ1ZSxcblx0XHRcdFx0XHRcdFwiZGlzYWJsZWRcIjogZGlzYWJsZWRcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQgICBzdHlsZT17YWRkaXRpb25hbFN0eWxlfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiXG5cdFx0XHRcdFx0XHQgICBjaGVja2VkICA9IHt0aGlzLnN0YXRlLmNoZWNrZWR9XG5cdFx0XHRcdFx0XHQgICBkaXNhYmxlZCA9IHtkaXNhYmxlZH1cblx0XHRcdFx0XHRcdCAgIG9uQ2hhbmdlID0ge3RvZ2dsZUNsaWNrfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzbGlkZXJcIi8+XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHQ8Lz5cblx0XHQpXG5cdH1cbn1cblxuVG9nZ2xlLmRlZmF1bHRQcm9wcyA9IHtcblx0Y2hlY2tlZDogZmFsc2UsXG5cdGRpc2FibGVkOiBmYWxzZSxcblx0bWFuYWdlQ2hlY2tlZDogZmFsc2UsXG5cdHNpemU6IFwibWRcIixcblx0Y3VzdG9tU3R5bGU6IG51bGxcbn1cblxuVG9nZ2xlLnByb3BUeXBlcyA9IHtcblx0Y2hlY2tlZDogcHJvcFR5cGVzLmJvb2wsXG5cdGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcblx0bWFuYWdlQ2hlY2tlZDogcHJvcFR5cGVzLmJvb2wsXG5cdHNpemU6IHByb3BUeXBlcy5vbmVPZihbXCJzbVwiLCBcIm1kXCJdKSxcblx0Y3VzdG9tU3R5bGU6IHByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlO1xuIl19