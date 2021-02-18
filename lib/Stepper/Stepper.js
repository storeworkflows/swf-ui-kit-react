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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsImluZGV4Iiwic2V0U3RhdGUiLCJzdGVwcyIsIm1hcCIsInN0ZXAiLCJpY29uIiwibGFiZWwiLCJzZWxlY3RTdGVwIiwibGVuZ3RoIiwic3R5bGVzIiwicmVuZGVyU3RlcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7OztBQUNGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBRUMsTUFBQUEsUUFBUSxFQUFFO0FBQVosS0FBYjtBQUZlO0FBR2xCOzs7O1dBRUQsb0JBQVdDLEtBQVgsRUFBa0I7QUFBQTs7QUFDZCxhQUFPLFlBQU07QUFDVCxRQUFBLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQ1ZGLFVBQUFBLFFBQVEsRUFBRUM7QUFEQSxTQUFkO0FBR0gsT0FKRDtBQUtIOzs7V0FFRCxxQkFBWUUsS0FBWixFQUFtQjtBQUFBOztBQUNmLGFBQ0lBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0osS0FBUDtBQUFBLDRCQUNOLHNCQUFDLGlCQUFELENBQU8sUUFBUDtBQUFBLGtDQUNJLHFCQUFDLGdCQUFEO0FBQ0ksWUFBQSxJQUFJLEVBQUVJLElBQUksQ0FBQ0MsSUFEZjtBQUVJLFlBQUEsS0FBSyxFQUFFRCxJQUFJLENBQUNFLEtBRmhCO0FBR0ksWUFBQSxRQUFRLEVBQUUsTUFBSSxDQUFDUixLQUFMLENBQVdDLFFBQVgsS0FBd0JDLEtBSHRDO0FBSUksWUFBQSxPQUFPLEVBQUUsTUFBSSxDQUFDTyxVQUFMLENBQWdCUCxLQUFoQjtBQUpiLFlBREosRUFPTUEsS0FBSyxLQUFLRSxLQUFLLENBQUNNLE1BQU4sR0FBZSxDQUExQixpQkFDRyxxQkFBQyxnQkFBRCxLQVJSO0FBQUEsV0FBcUIsU0FBU1IsS0FBOUIsQ0FETTtBQUFBLE9BQVYsQ0FESjtBQWVIOzs7V0FFRCxrQkFBUztBQUNMLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBTyxVQUFBLElBQUksRUFBQyxVQUFaO0FBQUEsb0JBQXdCUztBQUF4QixVQURKLGVBRUk7QUFBSyxVQUFBLFNBQVMsRUFBQywyQkFBZjtBQUFBLG9CQUNLLEtBQUtDLFdBQUwsQ0FBaUIsS0FBS2IsS0FBTCxDQUFXSyxLQUE1QjtBQURMLFVBRko7QUFBQSxRQURKO0FBUUg7Ozs7RUF6Q2lCUyxrQkFBTUMsUzs7QUE0QzVCaEIsT0FBTyxDQUFDaUIsU0FBUixHQUFvQjtBQUNoQlgsRUFBQUEsS0FBSyxFQUFFWSxzQkFBVUMsT0FBVixDQUFrQkQsc0JBQVVFLE1BQTVCO0FBRFMsQ0FBcEI7ZUFJZXBCLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL1N0ZXBwZXIuc2Nzc1wiO1xuaW1wb3J0IFN0ZXAgZnJvbSAnLi9TdGVwL1N0ZXAnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rL0xpbmsnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFN0ZXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgc2VsZWN0ZWQ6IDAgfVxuICAgIH1cblxuICAgIHNlbGVjdFN0ZXAoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBpbmRleFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlclN0ZXBzKHN0ZXBzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBzdGVwcy5tYXAoKHN0ZXAsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17J3N0ZXAnICsgaW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8U3RlcFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17c3RlcC5pY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3N0ZXAubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZCA9PT0gaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbGVjdFN0ZXAoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7KGluZGV4ICE9PSBzdGVwcy5sZW5ndGggLSAxKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApKVxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcHBlciBzdGVwcGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdGVwcyh0aGlzLnByb3BzLnN0ZXBzKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5TdGVwcGVyLnByb3BUeXBlcyA9IHtcbiAgICBzdGVwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RlcHBlcjsiXX0=