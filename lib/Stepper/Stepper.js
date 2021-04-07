"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Step = _interopRequireDefault(require("./Step"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Stepper = /*#__PURE__*/function (_React$Component) {
  _inherits(Stepper, _React$Component);

  var _super = _createSuper(Stepper);

  function Stepper(_props) {
    var _this;

    _classCallCheck(this, Stepper);

    _this = _super.call(this, _props);

    _this.shiftStepsAccordinglyToSelectedItem = function () {
      return _this.setState(function (state, props) {
        var steps = props.steps,
            selectedItem = props.selectedItem;
        var stepSize = state.stepSize,
            visibleStepsAmount = state.visibleStepsAmount,
            isArrowsNeeded = state.isArrowsNeeded;
        if (!isArrowsNeeded) return;
        var newStepsPosValue = selectedItem * stepSize;
        var maxStepsPos = stepSize * (steps.length - visibleStepsAmount);
        return {
          stepsCurrShiftedPos: Math.min(Math.max(newStepsPosValue, 0), maxStepsPos)
        };
      });
    };

    _this.updateVisibleStepsAmount = function () {
      var _this$props = _this.props,
          vertical = _this$props.vertical,
          steps = _this$props.steps;
      var _this$state = _this.state,
          stepSize = _this$state.stepSize,
          arrowsSize = _this$state.arrowsSize;
      var containerSize = _this.stepperContainerRef[vertical ? 'clientHeight' : 'clientWidth'];
      var isArrowsNeeded = steps.length * stepSize > containerSize;
      var currArrowsSize = isArrowsNeeded ? arrowsSize : 0;
      var visibleStepsAmount = Math.floor((containerSize - currArrowsSize * 2) / stepSize) || 1;

      _this.setState({
        visibleStepsAmount: visibleStepsAmount,
        isArrowsNeeded: isArrowsNeeded
      });
    };

    _this.selectStep = function (index, id) {
      return function () {
        if (_this.props.onStepClick) {
          _this.props.onStepClick({
            index: index,
            id: id
          });
        }
      };
    };

    _this.onArrowClick = function (direction) {
      return function () {
        var _this$state2 = _this.state,
            visibleStepsAmount = _this$state2.visibleStepsAmount,
            stepSize = _this$state2.stepSize,
            stepsCurrShiftedPos = _this$state2.stepsCurrShiftedPos;
        var steps = _this.props.steps;
        var newStepsPosValue = stepsCurrShiftedPos + stepSize * direction;
        var maxStepsPos = stepSize * (steps.length - visibleStepsAmount);

        _this.setState({
          stepsCurrShiftedPos: Math.min(Math.max(newStepsPosValue, 0), maxStepsPos)
        });
      };
    };

    _this.state = {
      visibleStepsAmount: 0,
      stepsCurrShiftedPos: 0,
      isArrowsNeeded: false,
      stepSize: _this.props.vertical ? 120 : 140,
      arrowsSize: parseInt((0, _utils.getCircleSize)(_this.props.iconSize))
    };
    _this.stepperContainerRef = false;
    return _this;
  }

  _createClass(Stepper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.disableScroll) return;
      this.updateVisibleStepsAmount();
      window.addEventListener('resize', this.updateVisibleStepsAmount);
      this.shiftStepsAccordinglyToSelectedItem();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!this.props.disableScroll && this.props.selectedItem !== prevProps.selectedItem) {
        this.shiftStepsAccordinglyToSelectedItem();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateVisibleStepsAmount);
    }
  }, {
    key: "renderSteps",
    value: function renderSteps() {
      var _this2 = this;

      var _this$props2 = this.props,
          steps = _this$props2.steps,
          hideLabels = _this$props2.hideLabels,
          icon = _this$props2.palette.icon,
          selectedItem = _this$props2.selectedItem;
      return steps.map(function (step, index) {
        var isSelected = selectedItem === index;
        var isBeforeSelected = selectedItem > index;
        var iconColor = (isSelected || isBeforeSelected) && step.progress !== 'none' && step.progress !== 'partial' || step.progress === 'done' ? icon.finished || 'white' : icon.unfinished || 'black';
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames["default"])({
            'steps-item': true,
            '--selected': isSelected,
            '--before-selected': isBeforeSelected,
            '--disabled': step.disabled
          }),
          onClick: step.disabled ? undefined : _this2.selectStep(index, step.id),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
            iconColor: iconColor,
            step: step,
            hideLabel: hideLabels,
            isSelected: isSelected,
            isBeforeSelected: isBeforeSelected
          })
        }, 'step' + index);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          palette = _this$props3.palette,
          vertical = _this$props3.vertical,
          completedCounter = _this$props3.completedCounter,
          steps = _this$props3.steps,
          iconSize = _this$props3.iconSize,
          selectedItem = _this$props3.selectedItem,
          disableScroll = _this$props3.disableScroll;
      var _this$state3 = this.state,
          stepsCurrShiftedPos = _this$state3.stepsCurrShiftedPos,
          visibleStepsAmount = _this$state3.visibleStepsAmount,
          isArrowsNeeded = _this$state3.isArrowsNeeded,
          arrowsSize = _this$state3.arrowsSize,
          stepSize = _this$state3.stepSize;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _classnames["default"])({
          'stepper': true,
          '--vertical': vertical
        }),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: (0, _utils.createCssVariables)(palette, iconSize)
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "stepper-container",
          ref: function ref(elm) {
            return _this3.stepperContainerRef = elm;
          },
          children: [isArrowsNeeded && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "arrow arrow-left",
            onClick: this.onArrowClick(-1),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "arrow-icon",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
                icon: vertical ? "chevron-up" : "chevron-left",
                color: palette.arrows
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classnames["default"])({
              'steps-shown': true,
              '--vertical': vertical
            }),
            style: {
              width: vertical || disableScroll ? '100%' : visibleStepsAmount * stepSize,
              height: vertical ? visibleStepsAmount * stepSize : arrowsSize * 4
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "steps-all",
              style: {
                width: isArrowsNeeded && !vertical ? steps.length * stepSize : '100%',
                right: vertical ? 0 : stepsCurrShiftedPos,
                bottom: vertical ? stepsCurrShiftedPos : 0
              },
              children: this.renderSteps()
            })
          }), isArrowsNeeded && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "arrow arrow-right",
            onClick: this.onArrowClick(1),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "arrow-icon",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
                icon: vertical ? "chevron-down" : "chevron-right",
                color: palette.arrows
              })
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "stepper-counter",
          children: completedCounter && "".concat(selectedItem + 1, "/").concat(steps.length, " Completed")
        })]
      });
    }
  }]);

  return Stepper;
}(_react["default"].Component);

Stepper.propTypes = {
  steps: _propTypes["default"].arrayOf(_propTypes["default"].object),
  palette: _propTypes["default"].object,
  iconSize: _propTypes["default"].string,
  hideLabels: _propTypes["default"].bool,
  vertical: _propTypes["default"].bool,
  completedCounter: _propTypes["default"].bool,
  selectedItem: _propTypes["default"].number,
  onStepClick: _propTypes["default"].func,
  disableScroll: _propTypes["default"].bool
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
    label: '',
    arrows: 'black'
  },
  iconSize: 'sm',
  hideLabels: false,
  vertical: false,
  completedCounter: false,
  selectedItem: 0,
  disableScroll: false
};
var _default = Stepper;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic2hpZnRTdGVwc0FjY29yZGluZ2x5VG9TZWxlY3RlZEl0ZW0iLCJzZXRTdGF0ZSIsInN0YXRlIiwic3RlcHMiLCJzZWxlY3RlZEl0ZW0iLCJzdGVwU2l6ZSIsInZpc2libGVTdGVwc0Ftb3VudCIsImlzQXJyb3dzTmVlZGVkIiwibmV3U3RlcHNQb3NWYWx1ZSIsIm1heFN0ZXBzUG9zIiwibGVuZ3RoIiwic3RlcHNDdXJyU2hpZnRlZFBvcyIsIk1hdGgiLCJtaW4iLCJtYXgiLCJ1cGRhdGVWaXNpYmxlU3RlcHNBbW91bnQiLCJ2ZXJ0aWNhbCIsImFycm93c1NpemUiLCJjb250YWluZXJTaXplIiwic3RlcHBlckNvbnRhaW5lclJlZiIsImN1cnJBcnJvd3NTaXplIiwiZmxvb3IiLCJzZWxlY3RTdGVwIiwiaW5kZXgiLCJpZCIsIm9uU3RlcENsaWNrIiwib25BcnJvd0NsaWNrIiwiZGlyZWN0aW9uIiwicGFyc2VJbnQiLCJpY29uU2l6ZSIsImRpc2FibGVTY3JvbGwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicHJldlByb3BzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhpZGVMYWJlbHMiLCJpY29uIiwicGFsZXR0ZSIsIm1hcCIsInN0ZXAiLCJpc1NlbGVjdGVkIiwiaXNCZWZvcmVTZWxlY3RlZCIsImljb25Db2xvciIsInByb2dyZXNzIiwiZmluaXNoZWQiLCJ1bmZpbmlzaGVkIiwiZGlzYWJsZWQiLCJ1bmRlZmluZWQiLCJjb21wbGV0ZWRDb3VudGVyIiwiZWxtIiwiYXJyb3dzIiwid2lkdGgiLCJoZWlnaHQiLCJyaWdodCIsImJvdHRvbSIsInJlbmRlclN0ZXBzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0Iiwic3RyaW5nIiwiYm9vbCIsIm51bWJlciIsImZ1bmMiLCJk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QURSO0FBRUZDLE1BQUFBLFVBQVUsRUFBRTtBQUZWLEtBREQ7QUFLTHNCLElBQUFBLE1BQU0sRUFBRSxFQUxIO0FBTUxDLElBQUFBLElBQUksRUFBRSxFQU5EO0FBT0xDLElBQUFBLEtBQUssRUFBRSxFQVBGO0FBUUxuQixJQUFBQSxNQUFNLEVBQUU7QUFSSCxHQUZVO0FBWW5CckIsRUFBQUEsUUFBUSxFQUFFLElBWlM7QUFhbkJNLEVBQUFBLFVBQVUsRUFBRSxLQWJPO0FBY25CbkIsRUFBQUEsUUFBUSxFQUFFLEtBZFM7QUFlbkJnQyxFQUFBQSxnQkFBZ0IsRUFBRSxLQWZDO0FBZ0JuQjVDLEVBQUFBLFlBQVksRUFBRSxDQWhCSztBQWlCbkIwQixFQUFBQSxhQUFhLEVBQUU7QUFqQkksQ0FBdkI7ZUFvQmVoQyxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0ZXAgZnJvbSAnLi9TdGVwJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ3NzVmFyaWFibGVzLCBnZXRDaXJjbGVTaXplIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5cclxuY2xhc3MgU3RlcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2aXNpYmxlU3RlcHNBbW91bnQ6IDAsXHJcbiAgICAgICAgICAgIHN0ZXBzQ3VyclNoaWZ0ZWRQb3M6IDAsXHJcbiAgICAgICAgICAgIGlzQXJyb3dzTmVlZGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgc3RlcFNpemU6IHRoaXMucHJvcHMudmVydGljYWwgPyAxMjAgOiAxNDAsXHJcbiAgICAgICAgICAgIGFycm93c1NpemU6IHBhcnNlSW50KGdldENpcmNsZVNpemUodGhpcy5wcm9wcy5pY29uU2l6ZSkpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0ZXBwZXJDb250YWluZXJSZWYgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlU2Nyb2xsKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZVN0ZXBzQW1vdW50KCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlVmlzaWJsZVN0ZXBzQW1vdW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5zaGlmdFN0ZXBzQWNjb3JkaW5nbHlUb1NlbGVjdGVkSXRlbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZVNjcm9sbCAmJiAodGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW0gIT09IHByZXZQcm9wcy5zZWxlY3RlZEl0ZW0pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpZnRTdGVwc0FjY29yZGluZ2x5VG9TZWxlY3RlZEl0ZW0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlVmlzaWJsZVN0ZXBzQW1vdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzaGlmdFN0ZXBzQWNjb3JkaW5nbHlUb1NlbGVjdGVkSXRlbSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSgoc3RhdGUsIHByb3BzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgc3RlcHMsIHNlbGVjdGVkSXRlbSB9ID0gcHJvcHM7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgc3RlcFNpemUsIHZpc2libGVTdGVwc0Ftb3VudCwgaXNBcnJvd3NOZWVkZWQgfSA9IHN0YXRlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc0Fycm93c05lZWRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3U3RlcHNQb3NWYWx1ZSA9IHNlbGVjdGVkSXRlbSAqIHN0ZXBTaXplO1xyXG4gICAgICAgICAgICBjb25zdCBtYXhTdGVwc1BvcyA9IHN0ZXBTaXplICogKHN0ZXBzLmxlbmd0aCAtIHZpc2libGVTdGVwc0Ftb3VudCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RlcHNDdXJyU2hpZnRlZFBvczogTWF0aC5taW4oTWF0aC5tYXgobmV3U3RlcHNQb3NWYWx1ZSwgMCksIG1heFN0ZXBzUG9zKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWaXNpYmxlU3RlcHNBbW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB2ZXJ0aWNhbCwgc3RlcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBzdGVwU2l6ZSwgYXJyb3dzU2l6ZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyU2l6ZSA9IHRoaXMuc3RlcHBlckNvbnRhaW5lclJlZlt2ZXJ0aWNhbCA/ICdjbGllbnRIZWlnaHQnIDogJ2NsaWVudFdpZHRoJ107XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQXJyb3dzTmVlZGVkID0gc3RlcHMubGVuZ3RoICogc3RlcFNpemUgPiBjb250YWluZXJTaXplO1xyXG4gICAgICAgIGNvbnN0IGN1cnJBcnJvd3NTaXplID0gaXNBcnJvd3NOZWVkZWQgPyBhcnJvd3NTaXplIDogMDtcclxuXHJcbiAgICAgICAgY29uc3QgdmlzaWJsZVN0ZXBzQW1vdW50ID0gTWF0aC5mbG9vcigoY29udGFpbmVyU2l6ZSAtIChjdXJyQXJyb3dzU2l6ZSAqIDIpKSAvIHN0ZXBTaXplKSB8fCAxO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaWJsZVN0ZXBzQW1vdW50LFxyXG4gICAgICAgICAgICBpc0Fycm93c05lZWRlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFN0ZXAgPSAoaW5kZXgsIGlkKSA9PiAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25TdGVwQ2xpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN0ZXBDbGljayh7IGluZGV4LCBpZCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25BcnJvd0NsaWNrID0gKGRpcmVjdGlvbikgPT4gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdmlzaWJsZVN0ZXBzQW1vdW50LCBzdGVwU2l6ZSwgc3RlcHNDdXJyU2hpZnRlZFBvcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IHN0ZXBzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdTdGVwc1Bvc1ZhbHVlID0gc3RlcHNDdXJyU2hpZnRlZFBvcyArIChzdGVwU2l6ZSAqIGRpcmVjdGlvbik7XHJcbiAgICAgICAgY29uc3QgbWF4U3RlcHNQb3MgPSBzdGVwU2l6ZSAqIChzdGVwcy5sZW5ndGggLSB2aXNpYmxlU3RlcHNBbW91bnQpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc3RlcHNDdXJyU2hpZnRlZFBvczogTWF0aC5taW4oTWF0aC5tYXgobmV3U3RlcHNQb3NWYWx1ZSwgMCksIG1heFN0ZXBzUG9zKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclN0ZXBzKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RlcHMsIGhpZGVMYWJlbHMsIHBhbGV0dGU6IHsgaWNvbiB9LCBzZWxlY3RlZEl0ZW0gfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHN0ZXBzLm1hcCgoc3RlcCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW0gPT09IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNCZWZvcmVTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbSA+IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbkNvbG9yID0gKGlzU2VsZWN0ZWQgfHwgaXNCZWZvcmVTZWxlY3RlZClcclxuICAgICAgICAgICAgICAgICYmIChzdGVwLnByb2dyZXNzICE9PSAnbm9uZScgJiYgc3RlcC5wcm9ncmVzcyAhPT0gJ3BhcnRpYWwnKVxyXG4gICAgICAgICAgICAgICAgfHwgc3RlcC5wcm9ncmVzcyA9PT0gJ2RvbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoaWNvbi5maW5pc2hlZCB8fCAnd2hpdGUnKSA6IChpY29uLnVuZmluaXNoZWQgfHwgJ2JsYWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHMtaXRlbSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1zZWxlY3RlZCc6IGlzU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1iZWZvcmUtc2VsZWN0ZWQnOiBpc0JlZm9yZVNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tZGlzYWJsZWQnOiBzdGVwLmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9eydzdGVwJyArIGluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdGVwLmRpc2FibGVkID8gdW5kZWZpbmVkIDogdGhpcy5zZWxlY3RTdGVwKGluZGV4LCBzdGVwLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29sb3I9e2ljb25Db2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTGFiZWw9e2hpZGVMYWJlbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCZWZvcmVTZWxlY3RlZD17aXNCZWZvcmVTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFsZXR0ZSwgdmVydGljYWwsIGNvbXBsZXRlZENvdW50ZXIsIHN0ZXBzLCBpY29uU2l6ZSwgc2VsZWN0ZWRJdGVtLCBkaXNhYmxlU2Nyb2xsIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgc3RlcHNDdXJyU2hpZnRlZFBvcywgdmlzaWJsZVN0ZXBzQW1vdW50LCBpc0Fycm93c05lZWRlZCwgYXJyb3dzU2l6ZSwgc3RlcFNpemUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0ZXBwZXInOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICctLXZlcnRpY2FsJzogdmVydGljYWxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e2NyZWF0ZUNzc1ZhcmlhYmxlcyhwYWxldHRlLCBpY29uU2l6ZSl9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdGVwcGVyLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtlbG0gPT4gdGhpcy5zdGVwcGVyQ29udGFpbmVyUmVmID0gZWxtfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0Fycm93c05lZWRlZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJyb3cgYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BcnJvd0NsaWNrKC0xKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXt2ZXJ0aWNhbCA/IFwiY2hldnJvbi11cFwiIDogXCJjaGV2cm9uLWxlZnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17cGFsZXR0ZS5hcnJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwcy1zaG93bic6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS12ZXJ0aWNhbCc6IHZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHZlcnRpY2FsIHx8IGRpc2FibGVTY3JvbGwgPyAnMTAwJScgOiB2aXNpYmxlU3RlcHNBbW91bnQgKiBzdGVwU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogdmVydGljYWwgPyB2aXNpYmxlU3RlcHNBbW91bnQgKiBzdGVwU2l6ZSA6IGFycm93c1NpemUgKiA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdGVwcy1hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaXNBcnJvd3NOZWVkZWQgJiYgIXZlcnRpY2FsID8gc3RlcHMubGVuZ3RoICogc3RlcFNpemUgOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHZlcnRpY2FsID8gMCA6IHN0ZXBzQ3VyclNoaWZ0ZWRQb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiB2ZXJ0aWNhbCA/IHN0ZXBzQ3VyclNoaWZ0ZWRQb3MgOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdGVwcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2lzQXJyb3dzTmVlZGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJvdyBhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BcnJvd0NsaWNrKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3ZlcnRpY2FsID8gXCJjaGV2cm9uLWRvd25cIiA6IFwiY2hldnJvbi1yaWdodFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtwYWxldHRlLmFycm93c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwcGVyLWNvdW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29tcGxldGVkQ291bnRlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGAke3NlbGVjdGVkSXRlbSArIDF9LyR7c3RlcHMubGVuZ3RofSBDb21wbGV0ZWRgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuU3RlcHBlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBzdGVwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBwYWxldHRlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaWNvblNpemU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBoaWRlTGFiZWxzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGNvbXBsZXRlZENvdW50ZXI6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgb25TdGVwQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgZGlzYWJsZVNjcm9sbDogUHJvcFR5cGVzLmJvb2xcclxufVxyXG5cclxuU3RlcHBlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzdGVwczogW10sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBmaW5pc2hlZDogJycsXHJcbiAgICAgICAgICAgIHVuZmluaXNoZWQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaXJjbGU6ICcnLFxyXG4gICAgICAgIGxpbms6ICcnLFxyXG4gICAgICAgIGxhYmVsOiAnJyxcclxuICAgICAgICBhcnJvd3M6ICdibGFjaydcclxuICAgIH0sXHJcbiAgICBpY29uU2l6ZTogJ3NtJyxcclxuICAgIGhpZGVMYWJlbHM6IGZhbHNlLFxyXG4gICAgdmVydGljYWw6IGZhbHNlLFxyXG4gICAgY29tcGxldGVkQ291bnRlcjogZmFsc2UsXHJcbiAgICBzZWxlY3RlZEl0ZW06IDAsXHJcbiAgICBkaXNhYmxlU2Nyb2xsOiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGVwcGVyOyJdfQ==