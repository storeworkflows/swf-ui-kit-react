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

var RequiredLabel = /*#__PURE__*/function (_React$Component) {
  _inherits(RequiredLabel, _React$Component);

  var _super = _createSuper(RequiredLabel);

  function RequiredLabel(props) {
    _classCallCheck(this, RequiredLabel);

    return _super.call(this, props);
  }

  _createClass(RequiredLabel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          required = _this$props.required,
          label = _this$props.label,
          invalid = _this$props.invalid,
          className = _this$props.className,
          htmlFor = _this$props.htmlFor;
      var labelClasses = (0, _classnames["default"])(className, "label-area", {
        "--invalid": invalid
      });
      return required || label ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: labelClasses,
        children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          htmlFor: htmlFor,
          className: "label-text",
          children: label
        }), required && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
          className: "label-icon",
          icon: "asterisk",
          customSize: 7
        })]
      }) : null;
    }
  }]);

  return RequiredLabel;
}(React.Component);

RequiredLabel.defaultProps = {
  required: false,
  invalid: false,
  className: {}
};
RequiredLabel.propTypes = {
  required: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  htmlFor: _propTypes["default"].string
};
var _default = RequiredLabel;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXF1aXJlZExhYmVsL1JlcXVpcmVkTGFiZWwuanMiXSwibmFtZXMiOlsiUmVxdWlyZWRMYWJlbCIsInByb3BzIiwicmVxdWlyZWQiLCJsYWJlbCIsImludmFsaWQiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwibGFiZWxDbGFzc2VzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib25lT2ZUeXBlIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR01BLGE7Ozs7O0FBQ0YseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDVEEsS0FEUztBQUVsQjs7OztXQUVELGtCQUFTO0FBQUEsd0JBQ2tELEtBQUtBLEtBRHZEO0FBQUEsVUFDRUMsUUFERixlQUNFQSxRQURGO0FBQUEsVUFDWUMsS0FEWixlQUNZQSxLQURaO0FBQUEsVUFDbUJDLE9BRG5CLGVBQ21CQSxPQURuQjtBQUFBLFVBQzRCQyxTQUQ1QixlQUM0QkEsU0FENUI7QUFBQSxVQUN1Q0MsT0FEdkMsZUFDdUNBLE9BRHZDO0FBRUwsVUFBTUMsWUFBWSxHQUFHLDRCQUNqQkYsU0FEaUIsRUFFakIsWUFGaUIsRUFHakI7QUFBRSxxQkFBYUQ7QUFBZixPQUhpQixDQUFyQjtBQUtBLGFBQ0tGLFFBQVEsSUFBSUMsS0FBYixnQkFFSTtBQUFLLFFBQUEsU0FBUyxFQUFFSSxZQUFoQjtBQUFBLG1CQUNLSixLQUFLLGlCQUFJO0FBQU8sVUFBQSxPQUFPLEVBQUVHLE9BQWhCO0FBQXlCLFVBQUEsU0FBUyxFQUFFLFlBQXBDO0FBQUEsb0JBQW1ESDtBQUFuRCxVQURkLEVBRUtELFFBQVEsaUJBQUkscUJBQUMsZ0JBQUQ7QUFBTSxVQUFBLFNBQVMsRUFBRSxZQUFqQjtBQUErQixVQUFBLElBQUksRUFBQyxVQUFwQztBQUErQyxVQUFBLFVBQVUsRUFBRTtBQUEzRCxVQUZqQjtBQUFBLFFBRkosR0FNTSxJQVBWO0FBU0g7Ozs7RUFyQnVCTSxLQUFLLENBQUNDLFM7O0FBeUJsQ1QsYUFBYSxDQUFDVSxZQUFkLEdBQTZCO0FBQ3pCUixFQUFBQSxRQUFRLEVBQUUsS0FEZTtBQUV6QkUsRUFBQUEsT0FBTyxFQUFFLEtBRmdCO0FBR3pCQyxFQUFBQSxTQUFTLEVBQUU7QUFIYyxDQUE3QjtBQU1BTCxhQUFhLENBQUNXLFNBQWQsR0FBMEI7QUFDdEJULEVBQUFBLFFBQVEsRUFBRVUsc0JBQVVDLElBREU7QUFFdEJULEVBQUFBLE9BQU8sRUFBRVEsc0JBQVVDLElBRkc7QUFHdEJWLEVBQUFBLEtBQUssRUFBRVMsc0JBQVVFLE1BSEs7QUFJdEJULEVBQUFBLFNBQVMsRUFBRU0sc0JBQVVJLFNBQVYsQ0FBb0IsQ0FBQ0osc0JBQVVLLE1BQVgsRUFBbUJMLHNCQUFVRyxNQUE3QixDQUFwQixDQUpXO0FBS3RCUixFQUFBQSxPQUFPLEVBQUVNLHNCQUFVRTtBQUxHLENBQTFCO2VBUWVkLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNsYXNzIFJlcXVpcmVkTGFiZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3JlcXVpcmVkLCBsYWJlbCwgaW52YWxpZCwgY2xhc3NOYW1lLCBodG1sRm9yfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgbGFiZWxDbGFzc2VzID0gY2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICBcImxhYmVsLWFyZWFcIixcclxuICAgICAgICAgICAgeyBcIi0taW52YWxpZFwiOiBpbnZhbGlkIH0gKVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAocmVxdWlyZWQgfHwgbGFiZWwpXHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bGFiZWxDbGFzc2VzfT5cclxuICAgICAgICAgICAgICAgICAgICB7bGFiZWwgJiYgPGxhYmVsIGh0bWxGb3I9e2h0bWxGb3J9IGNsYXNzTmFtZT17XCJsYWJlbC10ZXh0XCJ9PntsYWJlbH08L2xhYmVsPn1cclxuICAgICAgICAgICAgICAgICAgICB7cmVxdWlyZWQgJiYgPEljb24gY2xhc3NOYW1lPXtcImxhYmVsLWljb25cIn0gaWNvbj1cImFzdGVyaXNrXCIgY3VzdG9tU2l6ZT17N30gLz4gfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuUmVxdWlyZWRMYWJlbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICBpbnZhbGlkOiBmYWxzZSxcclxuICAgIGNsYXNzTmFtZToge31cclxufVxyXG5cclxuUmVxdWlyZWRMYWJlbC5wcm9wVHlwZXMgPSB7XHJcbiAgICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMub2JqZWN0LCBwcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgICBodG1sRm9yOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkTGFiZWwiXX0=