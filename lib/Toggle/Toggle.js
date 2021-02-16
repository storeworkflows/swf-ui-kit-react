"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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
  //console.log(toggle);
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
          disable = _this$props.disable,
          manageChecked = _this$props.manageChecked,
          size = _this$props.size,
          customStyle = _this$props.customStyle;

      var additionalStyle = _addStyles(customStyle);

      var toggleClick = function toggleClick() {
        var checked = _this2.state.checked;

        if (!manageChecked) {
          checked = !_this2.state.checked;

          _this2.setState({
            checked: checked
          });
        } //this.props.helpers.dispatch(SWF_TOGGLE.CLICKED, {value: checked});

      };

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _style["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
          className: (0, _classnames["default"])(size, {
            "switch": true,
            "disabled": disable
          }),
          style: additionalStyle,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "checkbox",
            checked: this.state.checked,
            disabled: disable,
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
  disable: false,
  manageChecked: false,
  size: "md",
  customStyle: null
};
Toggle.propTypes = {
  checked: _propTypes["default"].bool,
  disable: _propTypes["default"].bool,
  manageChecked: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["sm", "md"]),
  customStyle: _propTypes["default"].object
};
var _default = Toggle;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub2dnbGUvVG9nZ2xlLmpzIl0sIm5hbWVzIjpbIl9hZGRTdHlsZXMiLCJjdXN0b21TdHlsZSIsInN0eWxlcyIsImhhc1N0eWxlcyIsIlNXRl9UT0dHTEUiLCJBVkFJTEFCTEVfQ1VTVE9NX1NUWUxFUyIsImZvckVhY2giLCJzdHlsZU5hbWUiLCJ1bmRlZmluZWQiLCJUb2dnbGUiLCJwcm9wcyIsInN0YXRlIiwiY2hlY2tlZCIsImRpc2FibGUiLCJtYW5hZ2VDaGVja2VkIiwic2l6ZSIsImFkZGl0aW9uYWxTdHlsZSIsInRvZ2dsZUNsaWNrIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImJvb2wiLCJvbmVPZiIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFdBQUQsRUFBaUI7QUFDbkM7QUFDQSxNQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQU1DLFNBQVMsR0FBR0YsV0FBVyxLQUFLLElBQWxDO0FBQ0EsTUFBR0UsU0FBSCxFQUNDQyxzQkFBV0MsdUJBQVgsQ0FBbUNDLE9BQW5DLENBQTJDLFVBQUNDLFNBQUQsRUFBYTtBQUN2RCxRQUFHTixXQUFXLENBQUNNLFNBQUQsQ0FBWCxLQUF5QkMsU0FBNUIsRUFDQ04sTUFBTSxDQUFDSyxTQUFELENBQU4sR0FBb0JOLFdBQVcsQ0FBQ00sU0FBRCxDQUEvQjtBQUNELEdBSEQ7QUFLRCxTQUFPTCxNQUFQO0FBQ0EsQ0FYRDs7SUFhTU8sTTs7Ozs7QUFFTCxrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNaQyxNQUFBQSxPQUFPLEVBQUUsTUFBS0YsS0FBTCxDQUFXRTtBQURSLEtBQWI7QUFGa0I7QUFLbEI7Ozs7V0FFRCxrQkFBUztBQUFBOztBQUFBLHdCQU1KLEtBQUtGLEtBTkQ7QUFBQSxVQUVQRyxPQUZPLGVBRVBBLE9BRk87QUFBQSxVQUdQQyxhQUhPLGVBR1BBLGFBSE87QUFBQSxVQUlQQyxJQUpPLGVBSVBBLElBSk87QUFBQSxVQUtQZCxXQUxPLGVBS1BBLFdBTE87O0FBUVIsVUFBTWUsZUFBZSxHQUFHaEIsVUFBVSxDQUFDQyxXQUFELENBQWxDOztBQUVBLFVBQU1nQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3pCLFlBQUlMLE9BQU8sR0FBRyxNQUFJLENBQUNELEtBQUwsQ0FBV0MsT0FBekI7O0FBQ0EsWUFBRyxDQUFDRSxhQUFKLEVBQW1CO0FBQ2xCRixVQUFBQSxPQUFPLEdBQUcsQ0FBQyxNQUFJLENBQUNELEtBQUwsQ0FBV0MsT0FBdEI7O0FBQ0EsVUFBQSxNQUFJLENBQUNNLFFBQUwsQ0FBYztBQUFDTixZQUFBQSxPQUFPLEVBQUVBO0FBQVYsV0FBZDtBQUNBLFNBTHdCLENBTXpCOztBQUNBLE9BUEQ7O0FBU0EsMEJBQ0M7QUFBQSxnQ0FDQztBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0JWO0FBQXhCLFVBREQsZUFFQztBQUFPLFVBQUEsU0FBUyxFQUFHLDRCQUNsQmEsSUFEa0IsRUFFbEI7QUFDQyxzQkFBVSxJQURYO0FBRUMsd0JBQVlGO0FBRmIsV0FGa0IsQ0FBbkI7QUFNSSxVQUFBLEtBQUssRUFBRUcsZUFOWDtBQUFBLGtDQVFDO0FBQU8sWUFBQSxJQUFJLEVBQUMsVUFBWjtBQUNJLFlBQUEsT0FBTyxFQUFLLEtBQUtMLEtBQUwsQ0FBV0MsT0FEM0I7QUFFSSxZQUFBLFFBQVEsRUFBSUMsT0FGaEI7QUFHSSxZQUFBLFFBQVEsRUFBSUk7QUFIaEIsWUFSRCxlQWFFO0FBQU0sWUFBQSxTQUFTLEVBQUM7QUFBaEIsWUFiRjtBQUFBLFVBRkQ7QUFBQSxRQUREO0FBb0JBOzs7O0VBaERtQkUsS0FBSyxDQUFDQyxTOztBQW1EM0JYLE1BQU0sQ0FBQ1ksWUFBUCxHQUFzQjtBQUNyQlQsRUFBQUEsT0FBTyxFQUFFLEtBRFk7QUFFckJDLEVBQUFBLE9BQU8sRUFBRSxLQUZZO0FBR3JCQyxFQUFBQSxhQUFhLEVBQUUsS0FITTtBQUlyQkMsRUFBQUEsSUFBSSxFQUFFLElBSmU7QUFLckJkLEVBQUFBLFdBQVcsRUFBRTtBQUxRLENBQXRCO0FBUUFRLE1BQU0sQ0FBQ2EsU0FBUCxHQUFtQjtBQUNsQlYsRUFBQUEsT0FBTyxFQUFFVSxzQkFBVUMsSUFERDtBQUVsQlYsRUFBQUEsT0FBTyxFQUFFUyxzQkFBVUMsSUFGRDtBQUdsQlQsRUFBQUEsYUFBYSxFQUFFUSxzQkFBVUMsSUFIUDtBQUlsQlIsRUFBQUEsSUFBSSxFQUFFTyxzQkFBVUUsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLENBQWhCLENBSlk7QUFLbEJ2QixFQUFBQSxXQUFXLEVBQUVxQixzQkFBVUc7QUFMTCxDQUFuQjtlQVFlaEIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHtTV0ZfVE9HR0xFfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgX2FkZFN0eWxlcyA9IChjdXN0b21TdHlsZSkgPT4ge1xuXHQvL2NvbnNvbGUubG9nKHRvZ2dsZSk7XG5cdGxldCBzdHlsZXMgPSB7fTtcblx0Y29uc3QgaGFzU3R5bGVzID0gY3VzdG9tU3R5bGUgIT09IG51bGw7XG5cdGlmKGhhc1N0eWxlcylcblx0XHRTV0ZfVE9HR0xFLkFWQUlMQUJMRV9DVVNUT01fU1RZTEVTLmZvckVhY2goKHN0eWxlTmFtZSk9Pntcblx0XHRcdGlmKGN1c3RvbVN0eWxlW3N0eWxlTmFtZV0hPT11bmRlZmluZWQpXG5cdFx0XHRcdHN0eWxlc1tzdHlsZU5hbWVdID0gY3VzdG9tU3R5bGVbc3R5bGVOYW1lXTtcblx0XHR9KVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmNsYXNzIFRvZ2dsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZFxuXHRcdH1cblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGlzYWJsZSxcblx0XHRcdG1hbmFnZUNoZWNrZWQsXG5cdFx0XHRzaXplLFxuXHRcdFx0Y3VzdG9tU3R5bGVcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IGFkZGl0aW9uYWxTdHlsZSA9IF9hZGRTdHlsZXMoY3VzdG9tU3R5bGUpO1xuXG5cdFx0Y29uc3QgdG9nZ2xlQ2xpY2sgPSAoKSA9PiB7XG5cdFx0XHRsZXQgY2hlY2tlZCA9IHRoaXMuc3RhdGUuY2hlY2tlZFxuXHRcdFx0aWYoIW1hbmFnZUNoZWNrZWQpIHtcblx0XHRcdFx0Y2hlY2tlZCA9ICF0aGlzLnN0YXRlLmNoZWNrZWRcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7Y2hlY2tlZDogY2hlY2tlZH0pXG5cdFx0XHR9XG5cdFx0XHQvL3RoaXMucHJvcHMuaGVscGVycy5kaXNwYXRjaChTV0ZfVE9HR0xFLkNMSUNLRUQsIHt2YWx1ZTogY2hlY2tlZH0pO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cblx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoXG5cdFx0XHRcdFx0c2l6ZSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInN3aXRjaFwiOiB0cnVlLFxuXHRcdFx0XHRcdFx0XCJkaXNhYmxlZFwiOiBkaXNhYmxlXG5cdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0ICAgc3R5bGU9e2FkZGl0aW9uYWxTdHlsZX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxuXHRcdFx0XHRcdFx0ICAgY2hlY2tlZCAgPSB7dGhpcy5zdGF0ZS5jaGVja2VkfVxuXHRcdFx0XHRcdFx0ICAgZGlzYWJsZWQgPSB7ZGlzYWJsZX1cblx0XHRcdFx0XHRcdCAgIG9uQ2hhbmdlID0ge3RvZ2dsZUNsaWNrfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzbGlkZXJcIi8+XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHQ8Lz5cblx0XHQpXG5cdH1cbn1cblxuVG9nZ2xlLmRlZmF1bHRQcm9wcyA9IHtcblx0Y2hlY2tlZDogZmFsc2UsXG5cdGRpc2FibGU6IGZhbHNlLFxuXHRtYW5hZ2VDaGVja2VkOiBmYWxzZSxcblx0c2l6ZTogXCJtZFwiLFxuXHRjdXN0b21TdHlsZTogbnVsbFxufVxuXG5Ub2dnbGUucHJvcFR5cGVzID0ge1xuXHRjaGVja2VkOiBwcm9wVHlwZXMuYm9vbCxcblx0ZGlzYWJsZTogcHJvcFR5cGVzLmJvb2wsXG5cdG1hbmFnZUNoZWNrZWQ6IHByb3BUeXBlcy5ib29sLFxuXHRzaXplOiBwcm9wVHlwZXMub25lT2YoW1wic21cIiwgXCJtZFwiXSksXG5cdGN1c3RvbVN0eWxlOiBwcm9wVHlwZXMub2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZTtcbiJdfQ==