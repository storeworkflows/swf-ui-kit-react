"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./Step.scss");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../../Icon/Icon"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Step = /*#__PURE__*/function (_React$Component) {
  _inherits(Step, _React$Component);

  var _super = _createSuper(Step);

  function Step(props) {
    _classCallCheck(this, Step);

    return _super.call(this, props);
  }

  _createClass(Step, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          label = _this$props.label,
          selected = _this$props.selected,
          beforeSelected = _this$props.beforeSelected;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "step step-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames["default"])({
            'step-circle': true,
            '--selected': selected,
            '--before-selected': beforeSelected
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "step-icon",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
              icon: icon,
              color: "white",
              size: "xl"
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames["default"])({
            'step-label': true,
            '--selected': selected
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: label
          })
        })]
      });
    }
  }]);

  return Step;
}(_react["default"].Component);

Step.propTypes = {
  icon: _propTypes["default"].string,
  label: _propTypes["default"].string,
  selected: _propTypes["default"].bool,
  beforeSelected: _propTypes["default"].bool
};
var _default = Step;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdGVwcGVyL1N0ZXAvU3RlcC5qcyJdLCJuYW1lcyI6WyJTdGVwIiwicHJvcHMiLCJpY29uIiwibGFiZWwiLCJzZWxlY3RlZCIsImJlZm9yZVNlbGVjdGVkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsSTs7Ozs7QUFDRixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTO0FBRWxCOzs7O1dBRUQsa0JBQVM7QUFBQSx3QkFDNkMsS0FBS0EsS0FEbEQ7QUFBQSxVQUNHQyxJQURILGVBQ0dBLElBREg7QUFBQSxVQUNTQyxLQURULGVBQ1NBLEtBRFQ7QUFBQSxVQUNnQkMsUUFEaEIsZUFDZ0JBLFFBRGhCO0FBQUEsVUFDMEJDLGNBRDFCLGVBQzBCQSxjQUQxQjtBQUdMLDBCQUNJO0FBQUssUUFBQSxTQUFTLEVBQUMscUJBQWY7QUFBQSxnQ0FDSTtBQUNJLFVBQUEsU0FBUyxFQUFFLDRCQUFXO0FBQ2xCLDJCQUFlLElBREc7QUFFbEIsMEJBQWNELFFBRkk7QUFHbEIsaUNBQXFCQztBQUhILFdBQVgsQ0FEZjtBQUFBLGlDQU9JO0FBQUssWUFBQSxTQUFTLEVBQUMsV0FBZjtBQUFBLG1DQUNJLHFCQUFDLGdCQUFEO0FBQ0ksY0FBQSxJQUFJLEVBQUVILElBRFY7QUFFSSxjQUFBLEtBQUssRUFBQyxPQUZWO0FBR0ksY0FBQSxJQUFJLEVBQUM7QUFIVDtBQURKO0FBUEosVUFESixlQWdCSTtBQUNJLFVBQUEsU0FBUyxFQUFFLDRCQUFXO0FBQ2xCLDBCQUFjLElBREk7QUFFbEIsMEJBQWNFO0FBRkksV0FBWCxDQURmO0FBQUEsaUNBTUk7QUFBQSxzQkFBT0Q7QUFBUDtBQU5KLFVBaEJKO0FBQUEsUUFESjtBQTJCSDs7OztFQW5DY0csa0JBQU1DLFM7O0FBc0N6QlAsSUFBSSxDQUFDUSxTQUFMLEdBQWlCO0FBQ2JOLEVBQUFBLElBQUksRUFBRU8sc0JBQVVDLE1BREg7QUFFYlAsRUFBQUEsS0FBSyxFQUFFTSxzQkFBVUMsTUFGSjtBQUdiTixFQUFBQSxRQUFRLEVBQUVLLHNCQUFVRSxJQUhQO0FBSWJOLEVBQUFBLGNBQWMsRUFBRUksc0JBQVVFO0FBSmIsQ0FBakI7ZUFPZVgsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9TdGVwLnNjc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL0ljb24vSWNvbic7XHJcblxyXG5jbGFzcyBTdGVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGljb24sIGxhYmVsLCBzZWxlY3RlZCwgYmVmb3JlU2VsZWN0ZWQgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcCBzdGVwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwLWNpcmNsZSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICctLXNlbGVjdGVkJzogc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICctLWJlZm9yZS1zZWxlY3RlZCc6IGJlZm9yZVNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJ4bFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RlcC1sYWJlbCc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICctLXNlbGVjdGVkJzogc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblN0ZXAucHJvcFR5cGVzID0ge1xyXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgYmVmb3JlU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0ZXA7Il19