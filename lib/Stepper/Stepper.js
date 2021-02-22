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

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

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
      selected: Math.min(props.steps.length - 1, props.selectedItem - 1)
    };
    return _this;
  }

  _createClass(Stepper, [{
    key: "selectStep",
    value: function selectStep(index, id) {
      var _this2 = this;

      if (this.props.onStepClick) {
        this.props.onStepClick({
          index: index,
          id: id
        });
      }

      return function () {
        _this2.setState({
          selected: index
        });
      };
    }
  }, {
    key: "renderSteps",
    value: function renderSteps() {
      var _this3 = this;

      var _this$props = this.props,
          steps = _this$props.steps,
          hideLabels = _this$props.hideLabels,
          icon = _this$props.palette.icon;
      return steps.map(function (step, index) {
        var isSelected = _this3.state.selected === index;
        var isBeforeSelected = _this3.state.selected > index;
        var iconColor = (isSelected || isBeforeSelected) && step.progress !== 'none' && step.progress !== 'partial' || step.progress === 'done' ? icon.finished || 'white' : icon.unfinished || 'black';
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react["default"].Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classnames["default"])({
              'stepper-item': true,
              '--selected': isSelected,
              '--before-selected': isBeforeSelected,
              '--disabled': step.disabled
            }),
            onClick: !step.disabled && _this3.selectStep(index, step.id),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
              icon: step.icon,
              iconColor: iconColor,
              label: step.label,
              sublabel: step.sublabel,
              progress: step.progress,
              hideLabel: hideLabels
            })
          }), index !== steps.length - 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classnames["default"])({
              'stepper-item': true,
              '--before-selected': isBeforeSelected
            }),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link["default"], {})
          })]
        }, 'step' + index);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          palette = _this$props2.palette,
          vertical = _this$props2.vertical,
          showCompletedCount = _this$props2.showCompletedCount,
          steps = _this$props2.steps;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: (0, _utils.createCssVariables)(palette) + _Stepper["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames["default"])({
            'stepper': true,
            'stepper-container': true,
            '--vertical': vertical
          }),
          children: this.renderSteps()
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "stepper-counter",
          children: showCompletedCount && "".concat(this.state.selected + 1, "/").concat(steps.length, " Completed")
        })]
      });
    }
  }]);

  return Stepper;
}(_react["default"].Component);

Stepper.propTypes = {
  steps: _propTypes["default"].arrayOf(_propTypes["default"].object),
  palette: _propTypes["default"].object,
  hideLabels: _propTypes["default"].bool,
  vertical: _propTypes["default"].bool,
  showCompletedCount: _propTypes["default"].bool,
  selectedItem: _propTypes["default"].number,
  onStepClick: _propTypes["default"].func
};
Stepper.defaultProps = {
  steps: [],
  palette: {
    icon: {
      finished: '',
      unfinished: ''
    },
    circle: '',
    link: '',
    label: ''
  },
  hideLabels: false,
  vertical: false,
  showCompletedCount: false,
  selectedItem: 1
};
var _default = Stepper;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsIk1hdGgiLCJtaW4iLCJzdGVwcyIsImxlbmd0aCIsInNlbGVjdGVkSXRlbSIsImluZGV4IiwiaWQiLCJvblN0ZXBDbGljayIsInNldFN0YXRlIiwiaGlkZUxhYmVscyIsImljb24iLCJwYWxldHRlIiwibWFwIiwic3RlcCIsImlzU2VsZWN0ZWQiLCJpc0JlZm9yZVNlbGVjdGVkIiwiaWNvbkNvbG9yIiwicHJvZ3Jlc3MiLCJmaW5pc2hlZCIsInVuZmluaXNoZWQiLCJkaXNhYmxlZCIsInNlbGVjdFN0ZXAiLCJsYWJlbCIsInN1YmxhYmVsIiwidmVydGljYWwiLCJzaG93Q29tcGxldGVkQ291bnQiLCJzdHlsZXMiLCJyZW5kZXJTdGVwcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImJvb2wiLCJudW1iZXIiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiY2lyY2xlIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE87Ozs7O0FBQ0YsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFFQyxNQUFBQSxRQUFRLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxDQUFTSixLQUFLLENBQUNLLEtBQU4sQ0FBWUMsTUFBWixHQUFxQixDQUE5QixFQUFpQ04sS0FBSyxDQUFDTyxZQUFOLEdBQXFCLENBQXREO0FBQVosS0FBYjtBQUZlO0FBR2xCOzs7O1dBRUQsb0JBQVdDLEtBQVgsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQUE7O0FBQ2xCLFVBQUksS0FBS1QsS0FB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O0FBZEssQ0FBdkI7ZUFpQmVSLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL1N0ZXBwZXIuc2Nzc1wiO1xyXG5pbXBvcnQgU3RlcCBmcm9tICcuL1N0ZXAvU3RlcCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluay9MaW5rJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ3NzVmFyaWFibGVzIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmNsYXNzIFN0ZXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgc2VsZWN0ZWQ6IE1hdGgubWluKHByb3BzLnN0ZXBzLmxlbmd0aCAtIDEsIHByb3BzLnNlbGVjdGVkSXRlbSAtIDEpIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0U3RlcChpbmRleCwgaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblN0ZXBDbGljaykge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU3RlcENsaWNrKHsgaW5kZXgsIGlkIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogaW5kZXhcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU3RlcHMoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdGVwcywgaGlkZUxhYmVscywgcGFsZXR0ZTogeyBpY29uIH0gfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHN0ZXBzLm1hcCgoc3RlcCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkID09PSBpbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQmVmb3JlU2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkID4gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uQ29sb3IgPSAoaXNTZWxlY3RlZCB8fCBpc0JlZm9yZVNlbGVjdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIChzdGVwLnByb2dyZXNzICE9PSAnbm9uZScgJiYgc3RlcC5wcm9ncmVzcyAhPT0gJ3BhcnRpYWwnKVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IHN0ZXAucHJvZ3Jlc3MgPT09ICdkb25lJ1xyXG4gICAgICAgICAgICAgICAgICAgID8gKGljb24uZmluaXNoZWQgfHwgJ3doaXRlJykgOiAoaWNvbi51bmZpbmlzaGVkIHx8ICdibGFjaycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17J3N0ZXAnICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwcGVyLWl0ZW0nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLXNlbGVjdGVkJzogaXNTZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1iZWZvcmUtc2VsZWN0ZWQnOiBpc0JlZm9yZVNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLWRpc2FibGVkJzogc3RlcC5kaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXshc3RlcC5kaXNhYmxlZCAmJiB0aGlzLnNlbGVjdFN0ZXAoaW5kZXgsIHN0ZXAuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RlcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3N0ZXAuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29sb3I9e2ljb25Db2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17c3RlcC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJsYWJlbD17c3RlcC5zdWJsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcz17c3RlcC5wcm9ncmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTGFiZWw9e2hpZGVMYWJlbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhpbmRleCAhPT0gc3RlcHMubGVuZ3RoIC0gMSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHBlci1pdGVtJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1iZWZvcmUtc2VsZWN0ZWQnOiBpc0JlZm9yZVNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHBhbGV0dGUsIHZlcnRpY2FsLCBzaG93Q29tcGxldGVkQ291bnQsIHN0ZXBzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntjcmVhdGVDc3NWYXJpYWJsZXMocGFsZXR0ZSkgKyBzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHBlcic6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwcGVyLWNvbnRhaW5lcic6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICctLXZlcnRpY2FsJzogdmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdGVwcygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXBwZXItY291bnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93Q29tcGxldGVkQ291bnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5zdGF0ZS5zZWxlY3RlZCArIDF9LyR7c3RlcHMubGVuZ3RofSBDb21wbGV0ZWRgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuU3RlcHBlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBzdGVwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBwYWxldHRlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaGlkZUxhYmVsczogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICB2ZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzaG93Q29tcGxldGVkQ291bnQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgb25TdGVwQ2xpY2s6IFByb3BUeXBlcy5mdW5jXHJcbn1cclxuXHJcblN0ZXBwZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3RlcHM6IFtdLFxyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICAgIGljb246IHtcclxuICAgICAgICAgICAgZmluaXNoZWQ6ICcnLFxyXG4gICAgICAgICAgICB1bmZpbmlzaGVkOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2lyY2xlOiAnJyxcclxuICAgICAgICBsaW5rOiAnJyxcclxuICAgICAgICBsYWJlbDogJydcclxuICAgIH0sXHJcbiAgICBoaWRlTGFiZWxzOiBmYWxzZSxcclxuICAgIHZlcnRpY2FsOiBmYWxzZSxcclxuICAgIHNob3dDb21wbGV0ZWRDb3VudDogZmFsc2UsXHJcbiAgICBzZWxlY3RlZEl0ZW06IDFcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RlcHBlcjsiXX0=