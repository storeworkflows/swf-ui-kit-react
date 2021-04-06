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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
          iconSize = _this$props2.iconSize,
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
            iconSize: iconSize,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic2hpZnRTdGVwc0FjY29yZGluZ2x5VG9TZWxlY3RlZEl0ZW0iLCJzZXRTdGF0ZSIsInN0YXRlIiwic3RlcHMiLCJzZWxlY3RlZEl0ZW0iLCJzdGVwU2l6ZSIsInZpc2libGVTdGVwc0Ftb3VudCIsImlzQXJyb3dzTmVlZGVkIiwibmV3U3RlcHNQb3NWYWx1ZSIsIm1heFN0ZXBzUG9zIiwibGVuZ3RoIiwic3RlcHNDdXJyU2hpZnRlZFBvcyIsIk1hdGgiLCJtaW4iLCJtYXgiLCJ1cGRhdGVWaXNpYmxlU3RlcHNBbW91bnQiLCJ2ZXJ0aWNhbCIsImFycm93c1NpemUiLCJjb250YWluZXJTaXplIiwic3RlcHBlckNvbnRhaW5lclJlZiIsImN1cnJBcnJvd3NTaXplIiwiZmxvb3IiLCJzZWxlY3RTdGVwIiwiaW5kZXgiLCJpZCIsIm9uU3RlcENsaWNrIiwib25BcnJvd0NsaWNrIiwiZGlyZWN0aW9uIiwicGFyc2VJbnQiLCJpY29uU2l6ZSIsImRpc2FibGVTY3JvbGwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicHJldlByb3BzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhpZGVMYWJlbHMiLCJpY29uIiwicGFsZXR0ZSIsIm1hcCIsInN0ZXAiLCJpc1NlbGVjdGVkIiwiaXNCZWZvcmVTZWxlY3RlZCIsImljb25Db2xvciIsInByb2dyZXNzIiwiZmluaXNoZWQiLCJ1bmZpbmlzaGVkIiwiZGlzYWJsZWQiLCJ1bmRlZmluZWQiLCJjb21wbGV0ZWRDb3VudGVyIiwiZWxtIiwiYXJyb3dzIiwid2lkdGgiLCJoZWlnaHQiLCJyaWdodCIsImJvdHRvbSIsInJlbmRlclN0ZXBzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0Iiwic3RyaW5nIiwiYm9vbCIsIm51bWJlciIsImZ1bmMiLCJk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QUEsT0FBTyxFQUFFO0FBQ0xELElBQUFBLElBQUksRUFBRTtBQUNGUSxNQUFBQSxRQUFRLEVBQUUsRUFEUjtBQUVGQyxNQUFBQSxVQUFVLEVBQUU7QUFGVixLQUREO0FBS0xzQixJQUFBQSxNQUFNLEVBQUUsRUFMSDtBQU1MQyxJQUFBQSxJQUFJLEVBQUUsRUFORDtBQU9MQyxJQUFBQSxLQUFLLEVBQUUsRUFQRjtBQVFMbkIsSUFBQUEsTUFBTSxFQUFFO0FBUkgsR0FGVTtBQVluQnJCLEVBQUFBLFFBQVEsRUFBRSxJQVpTO0FBYW5CTSxFQUFBQSxVQUFVLEVBQUUsS0FiTztBQWNuQm5CLEVBQUFBLFFBQVEsRUFBRSxLQWRTO0FBZW5CZ0MsRUFBQUEsZ0JBQWdCLEVBQUUsS0FmQztBQWdCbkI1QyxFQUFBQSxZQUFZLEVBQUUsQ0FoQks7QUFpQm5CMEIsRUFBQUEsYUFBYSxFQUFFO0FBakJJLENBQXZCO2VBb0JlaEMsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGVwIGZyb20gJy4vU3RlcCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNzc1ZhcmlhYmxlcywgZ2V0Q2lyY2xlU2l6ZSB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuXHJcbmNsYXNzIFN0ZXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmlzaWJsZVN0ZXBzQW1vdW50OiAwLFxyXG4gICAgICAgICAgICBzdGVwc0N1cnJTaGlmdGVkUG9zOiAwLFxyXG4gICAgICAgICAgICBpc0Fycm93c05lZWRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0ZXBTaXplOiB0aGlzLnByb3BzLnZlcnRpY2FsID8gMTIwIDogMTQwLFxyXG4gICAgICAgICAgICBhcnJvd3NTaXplOiBwYXJzZUludChnZXRDaXJjbGVTaXplKHRoaXMucHJvcHMuaWNvblNpemUpKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdGVwcGVyQ29udGFpbmVyUmVmID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZVNjcm9sbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVTdGVwc0Ftb3VudCgpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVZpc2libGVTdGVwc0Ftb3VudCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hpZnRTdGVwc0FjY29yZGluZ2x5VG9TZWxlY3RlZEl0ZW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVTY3JvbGwgJiYgKHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtICE9PSBwcmV2UHJvcHMuc2VsZWN0ZWRJdGVtKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNoaWZ0U3RlcHNBY2NvcmRpbmdseVRvU2VsZWN0ZWRJdGVtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVZpc2libGVTdGVwc0Ftb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hpZnRTdGVwc0FjY29yZGluZ2x5VG9TZWxlY3RlZEl0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoKHN0YXRlLCBwcm9wcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IHN0ZXBzLCBzZWxlY3RlZEl0ZW0gfSA9IHByb3BzO1xyXG4gICAgICAgICAgICBjb25zdCB7IHN0ZXBTaXplLCB2aXNpYmxlU3RlcHNBbW91bnQsIGlzQXJyb3dzTmVlZGVkIH0gPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNBcnJvd3NOZWVkZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0ZXBzUG9zVmFsdWUgPSBzZWxlY3RlZEl0ZW0gKiBzdGVwU2l6ZTtcclxuICAgICAgICAgICAgY29uc3QgbWF4U3RlcHNQb3MgPSBzdGVwU2l6ZSAqIChzdGVwcy5sZW5ndGggLSB2aXNpYmxlU3RlcHNBbW91bnQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0ZXBzQ3VyclNoaWZ0ZWRQb3M6IE1hdGgubWluKE1hdGgubWF4KG5ld1N0ZXBzUG9zVmFsdWUsIDApLCBtYXhTdGVwc1BvcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlzaWJsZVN0ZXBzQW1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdmVydGljYWwsIHN0ZXBzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgc3RlcFNpemUsIGFycm93c1NpemUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSB0aGlzLnN0ZXBwZXJDb250YWluZXJSZWZbdmVydGljYWwgPyAnY2xpZW50SGVpZ2h0JyA6ICdjbGllbnRXaWR0aCddO1xyXG5cclxuICAgICAgICBjb25zdCBpc0Fycm93c05lZWRlZCA9IHN0ZXBzLmxlbmd0aCAqIHN0ZXBTaXplID4gY29udGFpbmVyU2l6ZTtcclxuICAgICAgICBjb25zdCBjdXJyQXJyb3dzU2l6ZSA9IGlzQXJyb3dzTmVlZGVkID8gYXJyb3dzU2l6ZSA6IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpc2libGVTdGVwc0Ftb3VudCA9IE1hdGguZmxvb3IoKGNvbnRhaW5lclNpemUgLSAoY3VyckFycm93c1NpemUgKiAyKSkgLyBzdGVwU2l6ZSkgfHwgMTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZpc2libGVTdGVwc0Ftb3VudCxcclxuICAgICAgICAgICAgaXNBcnJvd3NOZWVkZWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RTdGVwID0gKGluZGV4LCBpZCkgPT4gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uU3RlcENsaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TdGVwQ2xpY2soeyBpbmRleCwgaWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQXJyb3dDbGljayA9IChkaXJlY3Rpb24pID0+ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHZpc2libGVTdGVwc0Ftb3VudCwgc3RlcFNpemUsIHN0ZXBzQ3VyclNoaWZ0ZWRQb3MgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgeyBzdGVwcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgbmV3U3RlcHNQb3NWYWx1ZSA9IHN0ZXBzQ3VyclNoaWZ0ZWRQb3MgKyAoc3RlcFNpemUgKiBkaXJlY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IG1heFN0ZXBzUG9zID0gc3RlcFNpemUgKiAoc3RlcHMubGVuZ3RoIC0gdmlzaWJsZVN0ZXBzQW1vdW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHN0ZXBzQ3VyclNoaWZ0ZWRQb3M6IE1hdGgubWluKE1hdGgubWF4KG5ld1N0ZXBzUG9zVmFsdWUsIDApLCBtYXhTdGVwc1BvcylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTdGVwcygpIHtcclxuICAgICAgICBjb25zdCB7IHN0ZXBzLCBoaWRlTGFiZWxzLCBwYWxldHRlOiB7IGljb24gfSwgaWNvblNpemUsIHNlbGVjdGVkSXRlbSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgc3RlcHMubWFwKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbSA9PT0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0JlZm9yZVNlbGVjdGVkID0gc2VsZWN0ZWRJdGVtID4gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uQ29sb3IgPSAoaXNTZWxlY3RlZCB8fCBpc0JlZm9yZVNlbGVjdGVkKVxyXG4gICAgICAgICAgICAgICAgJiYgKHN0ZXAucHJvZ3Jlc3MgIT09ICdub25lJyAmJiBzdGVwLnByb2dyZXNzICE9PSAncGFydGlhbCcpXHJcbiAgICAgICAgICAgICAgICB8fCBzdGVwLnByb2dyZXNzID09PSAnZG9uZSdcclxuICAgICAgICAgICAgICAgICAgICA/IChpY29uLmZpbmlzaGVkIHx8ICd3aGl0ZScpIDogKGljb24udW5maW5pc2hlZCB8fCAnYmxhY2snKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwcy1pdGVtJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLXNlbGVjdGVkJzogaXNTZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLWJlZm9yZS1zZWxlY3RlZCc6IGlzQmVmb3JlU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1kaXNhYmxlZCc6IHN0ZXAuZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17J3N0ZXAnICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N0ZXAuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB0aGlzLnNlbGVjdFN0ZXAoaW5kZXgsIHN0ZXAuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db2xvcj17aWNvbkNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblNpemU9e2ljb25TaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17c3RlcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVMYWJlbD17aGlkZUxhYmVsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JlZm9yZVNlbGVjdGVkPXtpc0JlZm9yZVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYWxldHRlLCB2ZXJ0aWNhbCwgY29tcGxldGVkQ291bnRlciwgc3RlcHMsIGljb25TaXplLCBzZWxlY3RlZEl0ZW0sIGRpc2FibGVTY3JvbGwgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBzdGVwc0N1cnJTaGlmdGVkUG9zLCB2aXNpYmxlU3RlcHNBbW91bnQsIGlzQXJyb3dzTmVlZGVkLCBhcnJvd3NTaXplLCBzdGVwU2l6ZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAnc3RlcHBlcic6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJy0tdmVydGljYWwnOiB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57Y3JlYXRlQ3NzVmFyaWFibGVzKHBhbGV0dGUsIGljb25TaXplKX08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0ZXBwZXItY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9e2VsbSA9PiB0aGlzLnN0ZXBwZXJDb250YWluZXJSZWYgPSBlbG19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQXJyb3dzTmVlZGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJvdyBhcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFycm93Q2xpY2soLTEpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3ZlcnRpY2FsID8gXCJjaGV2cm9uLXVwXCIgOiBcImNoZXZyb24tbGVmdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtwYWxldHRlLmFycm93c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBzLXNob3duJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLXZlcnRpY2FsJzogdmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogdmVydGljYWwgfHwgZGlzYWJsZVNjcm9sbCA/ICcxMDAlJyA6IHZpc2libGVTdGVwc0Ftb3VudCAqIHN0ZXBTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB2ZXJ0aWNhbCA/IHZpc2libGVTdGVwc0Ftb3VudCAqIHN0ZXBTaXplIDogYXJyb3dzU2l6ZSAqIDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0ZXBzLWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpc0Fycm93c05lZWRlZCAmJiAhdmVydGljYWwgPyBzdGVwcy5sZW5ndGggKiBzdGVwU2l6ZSA6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogdmVydGljYWwgPyAwIDogc3RlcHNDdXJyU2hpZnRlZFBvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IHZlcnRpY2FsID8gc3RlcHNDdXJyU2hpZnRlZFBvcyA6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN0ZXBzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7aXNBcnJvd3NOZWVkZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFycm93IGFycm93LXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFycm93Q2xpY2soMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17dmVydGljYWwgPyBcImNoZXZyb24tZG93blwiIDogXCJjaGV2cm9uLXJpZ2h0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3BhbGV0dGUuYXJyb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXBwZXItY291bnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21wbGV0ZWRDb3VudGVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYCR7c2VsZWN0ZWRJdGVtICsgMX0vJHtzdGVwcy5sZW5ndGh9IENvbXBsZXRlZGBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5TdGVwcGVyLnByb3BUeXBlcyA9IHtcclxuICAgIHN0ZXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIHBhbGV0dGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpY29uU2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGhpZGVMYWJlbHM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgdmVydGljYWw6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgY29tcGxldGVkQ291bnRlcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvblN0ZXBDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBkaXNhYmxlU2Nyb2xsOiBQcm9wVHlwZXMuYm9vbFxyXG59XHJcblxyXG5TdGVwcGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHN0ZXBzOiBbXSxcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICAgIGZpbmlzaGVkOiAnJyxcclxuICAgICAgICAgICAgdW5maW5pc2hlZDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNpcmNsZTogJycsXHJcbiAgICAgICAgbGluazogJycsXHJcbiAgICAgICAgbGFiZWw6ICcnLFxyXG4gICAgICAgIGFycm93czogJ2JsYWNrJ1xyXG4gICAgfSxcclxuICAgIGljb25TaXplOiAnc20nLFxyXG4gICAgaGlkZUxhYmVsczogZmFsc2UsXHJcbiAgICB2ZXJ0aWNhbDogZmFsc2UsXHJcbiAgICBjb21wbGV0ZWRDb3VudGVyOiBmYWxzZSxcclxuICAgIHNlbGVjdGVkSXRlbTogMCxcclxuICAgIGRpc2FibGVTY3JvbGw6IGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0ZXBwZXI7Il19