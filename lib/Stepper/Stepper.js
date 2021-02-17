"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Stepper = _interopRequireDefault(require("./Stepper.scss"));

var _Step = _interopRequireDefault(require("./Step/Step"));

var _Link = _interopRequireDefault(require("./Link/Link"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

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

var Stepper = /*#__PURE__*/function (_React$Component) {
  _inherits(Stepper, _React$Component);

  var _super = _createSuper(Stepper);

  function Stepper(props) {
    var _this;

    _classCallCheck(this, Stepper);

    _this = _super.call(this, props);
    _this.state = {
      selected: 0
    };
    return _this;
  }

  _createClass(Stepper, [{
    key: "selectStep",
    value: function selectStep(index) {
      var _this2 = this;

      return function () {
        _this2.setState({
          selected: index
        });
      };
    }
  }, {
    key: "renderSteps",
    value: function renderSteps(steps) {
      var _this3 = this;

      return steps.map(function (step, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react["default"].Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
            icon: step.icon,
            label: step.label,
            selected: _this3.state.selected === index,
            beforeSelected: _this3.state.selected > index,
            onClick: _this3.selectStep(index)
          }), index !== steps.length - 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link["default"], {})]
        }, 'step' + index);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _Stepper["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "stepper stepper-container",
          children: this.renderSteps(this.props.steps)
        })]
      });
    }
  }]);

  return Stepper;
}(_react["default"].Component);

Stepper.propTypes = {
  steps: _propTypes["default"].arrayOf(_propTypes["default"].object)
};
var _default = Stepper;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsImluZGV4Iiwic2V0U3RhdGUiLCJzdGVwcyIsIm1hcCIsInN0ZXAiLCJpY29uIiwibGFiZWwiLCJzZWxlY3RTdGVwIiwibGVuZ3RoIiwic3R5bGVzIiwicmVuZGVyU3RlcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7OztBQUNGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBRUMsTUFBQUEsUUFBUSxFQUFFO0FBQVosS0FBYjtBQUZlO0FBR2xCOzs7O1dBRUQsb0JBQVdDLEtBQVgsRUFBa0I7QUFBQTs7QUFDZCxhQUFPLFlBQU07QUFDVCxRQUFBLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQ1ZGLFVBQUFBLFFBQVEsRUFBRUM7QUFEQSxTQUFkO0FBR0gsT0FKRDtBQUtIOzs7V0FFRCxxQkFBWUUsS0FBWixFQUFtQjtBQUFBOztBQUNmLGFBQ0lBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0osS0FBUDtBQUFBLDRCQUNOLHNCQUFDLGlCQUFELENBQU8sUUFBUDtBQUFBLGtDQUNJLHFCQUFDLGdCQUFEO0FBQ0ksWUFBQSxJQUFJLEVBQUVJLElBQUksQ0FBQ0MsSUFEZjtBQUVJLFlBQUEsS0FBSyxFQUFFRCxJQUFJLENBQUNFLEtBRmhCO0FBR0ksWUFBQSxRQUFRLEVBQUUsTUFBSSxDQUFDUixLQUFMLENBQVdDLFFBQVgsS0FBd0JDLEtBSHRDO0FBSUksWUFBQSxjQUFjLEVBQUUsTUFBSSxDQUFDRixLQUFMLENBQVdDLFFBQVgsR0FBc0JDLEtBSjFDO0FBS0ksWUFBQSxPQUFPLEVBQUUsTUFBSSxDQUFDTyxVQUFMLENBQWdCUCxLQUFoQjtBQUxiLFlBREosRUFRTUEsS0FBSyxLQUFLRSxLQUFLLENBQUNNLE1BQU4sR0FBZSxDQUExQixpQkFDRyxxQkFBQyxnQkFBRCxLQVRSO0FBQUEsV0FBcUIsU0FBU1IsS0FBOUIsQ0FETTtBQUFBLE9BQVYsQ0FESjtBQWdCSDs7O1dBRUQsa0JBQVM7QUFDTCwwQkFDSTtBQUFBLGdDQUNJO0FBQU8sVUFBQSxJQUFJLEVBQUMsVUFBWjtBQUFBLG9CQUF3QlM7QUFBeEIsVUFESixlQUVJO0FBQUssVUFBQSxTQUFTLEVBQUMsMkJBQWY7QUFBQSxvQkFDSyxLQUFLQyxXQUFMLENBQWlCLEtBQUtiLEtBQUwsQ0FBV0ssS0FBNUI7QUFETCxVQUZKO0FBQUEsUUFESjtBQVFIOzs7O0VBMUNpQlMsa0JBQU1DLFM7O0FBNkM1QmhCLE9BQU8sQ0FBQ2lCLFNBQVIsR0FBb0I7QUFDaEJYLEVBQUFBLEtBQUssRUFBRVksc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVRSxNQUE1QjtBQURTLENBQXBCO2VBSWVwQixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TdGVwcGVyLnNjc3NcIjtcclxuaW1wb3J0IFN0ZXAgZnJvbSAnLi9TdGVwL1N0ZXAnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsvTGluayc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTdGVwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHNlbGVjdGVkOiAwIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RTdGVwKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogaW5kZXhcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU3RlcHMoc3RlcHMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBzdGVwcy5tYXAoKHN0ZXAsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXsnc3RlcCcgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0ZXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17c3RlcC5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17c3RlcC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWQgPT09IGluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZWxlY3RlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZCA+IGluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbGVjdFN0ZXAoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhpbmRleCAhPT0gc3RlcHMubGVuZ3RoIC0gMSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXBwZXIgc3RlcHBlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdGVwcyh0aGlzLnByb3BzLnN0ZXBzKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblN0ZXBwZXIucHJvcFR5cGVzID0ge1xyXG4gICAgc3RlcHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0ZXBwZXI7Il19