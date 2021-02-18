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
        var isSelected = _this3.state.selected === index;
        var isBeforeSelected = _this3.state.selected > index;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react["default"].Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            onClick: _this3.selectStep(index),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
              icon: step.icon,
              label: step.label,
              selected: isSelected,
              beforeSelected: isBeforeSelected
            })
          }), index !== steps.length - 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link["default"], {
            beforeSelected: isBeforeSelected
          })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsImluZGV4Iiwic2V0U3RhdGUiLCJzdGVwcyIsIm1hcCIsInN0ZXAiLCJpc1NlbGVjdGVkIiwiaXNCZWZvcmVTZWxlY3RlZCIsInNlbGVjdFN0ZXAiLCJpY29uIiwibGFiZWwiLCJsZW5ndGgiLCJzdHlsZXMiLCJyZW5kZXJTdGVwcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE87Ozs7O0FBQ0YsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFDQyxNQUFBQSxRQUFRLEVBQUU7QUFBWCxLQUFiO0FBRmU7QUFHbEI7Ozs7V0FFRCxvQkFBV0MsS0FBWCxFQUFrQjtBQUFBOztBQUNkLGFBQU8sWUFBTTtBQUNULFFBQUEsTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFDVkYsVUFBQUEsUUFBUSxFQUFFQztBQURBLFNBQWQ7QUFHSCxPQUpEO0FBS0g7OztXQUVELHFCQUFZRSxLQUFaLEVBQW1CO0FBQUE7O0FBQ2YsYUFDSUEsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPSixLQUFQLEVBQWlCO0FBQ3ZCLFlBQU1LLFVBQVUsR0FBRyxNQUFJLENBQUNQLEtBQUwsQ0FBV0MsUUFBWCxLQUF3QkMsS0FBM0M7QUFDQSxZQUFNTSxnQkFBZ0IsR0FBRyxNQUFJLENBQUNSLEtBQUwsQ0FBV0MsUUFBWCxHQUFzQkMsS0FBL0M7QUFFQSw0QkFDSSxzQkFBQyxpQkFBRCxDQUFPLFFBQVA7QUFBQSxrQ0FDSTtBQUFLLFlBQUEsT0FBTyxFQUFFLE1BQUksQ0FBQ08sVUFBTCxDQUFnQlAsS0FBaEIsQ0FBZDtBQUFBLG1DQUNJLHFCQUFDLGdCQUFEO0FBQ0ksY0FBQSxJQUFJLEVBQUVJLElBQUksQ0FBQ0ksSUFEZjtBQUVJLGNBQUEsS0FBSyxFQUFFSixJQUFJLENBQUNLLEtBRmhCO0FBR0ksY0FBQSxRQUFRLEVBQUVKLFVBSGQ7QUFJSSxjQUFBLGNBQWMsRUFBRUM7QUFKcEI7QUFESixZQURKLEVBU01OLEtBQUssS0FBS0UsS0FBSyxDQUFDUSxNQUFOLEdBQWUsQ0FBMUIsaUJBQ0QscUJBQUMsZ0JBQUQ7QUFDSSxZQUFBLGNBQWMsRUFBRUo7QUFEcEIsWUFWSjtBQUFBLFdBQXFCLFNBQVNOLEtBQTlCLENBREo7QUFpQkgsT0FyQkQsQ0FESjtBQXdCSDs7O1dBRUQsa0JBQVM7QUFDTCwwQkFDSTtBQUFBLGdDQUNJO0FBQU8sVUFBQSxJQUFJLEVBQUMsVUFBWjtBQUFBLG9CQUF3Qlc7QUFBeEIsVUFESixlQUVJO0FBQUssVUFBQSxTQUFTLEVBQUMsMkJBQWY7QUFBQSxvQkFDSyxLQUFLQyxXQUFMLENBQWlCLEtBQUtmLEtBQUwsQ0FBV0ssS0FBNUI7QUFETCxVQUZKO0FBQUEsUUFESjtBQVFIOzs7O0VBbERpQlcsa0JBQU1DLFM7O0FBcUQ1QmxCLE9BQU8sQ0FBQ21CLFNBQVIsR0FBb0I7QUFDaEJiLEVBQUFBLEtBQUssRUFBRWMsc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVRSxNQUE1QjtBQURTLENBQXBCO2VBSWV0QixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TdGVwcGVyLnNjc3NcIjtcbmltcG9ydCBTdGVwIGZyb20gJy4vU3RlcC9TdGVwJztcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluay9MaW5rJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTdGVwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7c2VsZWN0ZWQ6IDB9XG4gICAgfVxuXG4gICAgc2VsZWN0U3RlcChpbmRleCkge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGluZGV4XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyU3RlcHMoc3RlcHMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHN0ZXBzLm1hcCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gdGhpcy5zdGF0ZS5zZWxlY3RlZCA9PT0gaW5kZXg7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNCZWZvcmVTZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQgPiBpbmRleDtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9eydzdGVwJyArIGluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5zZWxlY3RTdGVwKGluZGV4KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17c3RlcC5pY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17c3RlcC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbGVjdGVkPXtpc0JlZm9yZVNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsoaW5kZXggIT09IHN0ZXBzLmxlbmd0aCAtIDEpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbGVjdGVkPXtpc0JlZm9yZVNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcHBlciBzdGVwcGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdGVwcyh0aGlzLnByb3BzLnN0ZXBzKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5TdGVwcGVyLnByb3BUeXBlcyA9IHtcbiAgICBzdGVwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RlcHBlcjsiXX0=