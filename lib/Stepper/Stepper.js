"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Step = _interopRequireDefault(require("./Step/Step"));

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
            visibleStepsAmount = state.visibleStepsAmount;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic2hpZnRTdGVwc0FjY29yZGluZ2x5VG9TZWxlY3RlZEl0ZW0iLCJzZXRTdGF0ZSIsInN0YXRlIiwic3RlcHMiLCJzZWxlY3RlZEl0ZW0iLCJzdGVwU2l6ZSIsInZpc2libGVTdGVwc0Ftb3VudCIsIm5ld1N0ZXBzUG9zVmFsdWUiLCJtYXhTdGVwc1BvcyIsImxlbmd0aCIsInN0ZXBzQ3VyclNoaWZ0ZWRQb3MiLCJNYXRoIiwibWluIiwibWF4IiwidXBkYXRlVmlzaWJsZVN0ZXBzQW1vdW50IiwidmVydGljYWwiLCJhcnJvd3NTaXplIiwiY29udGFpbmVyU2l6ZSIsInN0ZXBwZXJDb250YWluZXJSZWYiLCJpc0Fycm93c05lZWRlZCIsImN1cnJBcnJvd3NTaXplIiwiZmxvb3IiLCJzZWxlY3RTdGVwIiwiaW5kZXgiLCJpZCIsIm9uU3RlcENsaWNrIiwib25BcnJvd0NsaWNrIiwiZGlyZWN0aW9uIiwicGFyc2VJbnQiLCJpY29uU2l6ZSIsImRpc2FibGVTY3JvbGwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicHJldlByb3BzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhpZGVMYWJlbHMiLCJpY29uIiwicGFsZXR0ZSIsIm1hcCIsInN0ZXAiLCJpc1NlbGVjdGVkIiwiaXNCZWZvcmVTZWxlY3RlZCIsImljb25Db2xvciIsInByb2dyZXNzIiwiZmluaXNoZWQiLCJ1bmZpbmlzaGVkIiwiZGlzYWJsZWQiLCJ1bmRlZmluZWQiLCJjb21wbGV0ZWRDb3VudGVyIiwiZWxtIiwiYXJyb3dzIiwid2lkdGgiLCJoZWlnaHQiLCJyaWdodCIsImJvdHRvbSIsInJlbmRlclN0ZXBzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0Iiwic3RyaW5nIiwiYm9vbCIsIm51bWJlciIsImZ1bmMiLCJk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VUFBVSxFQUFFO0FBRlYsS0FERDtBQUtMc0IsSUFBQUEsTUFBTSxFQUFFLEVBTEg7QUFNTEMsSUFBQUEsSUFBSSxFQUFFLEVBTkQ7QUFPTEMsSUFBQUEsS0FBSyxFQUFFLEVBUEY7QUFRTG5CLElBQUFBLE1BQU0sRUFBRTtBQVJILEdBRlU7QUFZbkJyQixFQUFBQSxRQUFRLEVBQUUsSUFaUztBQWFuQk0sRUFBQUEsVUFBVSxFQUFFLEtBYk87QUFjbkJwQixFQUFBQSxRQUFRLEVBQUUsS0FkUztBQWVuQmlDLEVBQUFBLGdCQUFnQixFQUFFLEtBZkM7QUFnQm5CNUMsRUFBQUEsWUFBWSxFQUFFLENBaEJLO0FBaUJuQjBCLEVBQUFBLGFBQWEsRUFBRTtBQWpCSSxDQUF2QjtlQW9CZWhDLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RlcCBmcm9tICcuL1N0ZXAvU3RlcCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNzc1ZhcmlhYmxlcywgZ2V0Q2lyY2xlU2l6ZSB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuXHJcbmNsYXNzIFN0ZXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmlzaWJsZVN0ZXBzQW1vdW50OiAwLFxyXG4gICAgICAgICAgICBzdGVwc0N1cnJTaGlmdGVkUG9zOiAwLFxyXG4gICAgICAgICAgICBpc0Fycm93c05lZWRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0ZXBTaXplOiB0aGlzLnByb3BzLnZlcnRpY2FsID8gMTIwIDogMTQwLFxyXG4gICAgICAgICAgICBhcnJvd3NTaXplOiBwYXJzZUludChnZXRDaXJjbGVTaXplKHRoaXMucHJvcHMuaWNvblNpemUpKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdGVwcGVyQ29udGFpbmVyUmVmID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZVNjcm9sbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVTdGVwc0Ftb3VudCgpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVZpc2libGVTdGVwc0Ftb3VudCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hpZnRTdGVwc0FjY29yZGluZ2x5VG9TZWxlY3RlZEl0ZW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVTY3JvbGwgJiYgKHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtICE9PSBwcmV2UHJvcHMuc2VsZWN0ZWRJdGVtKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNoaWZ0U3RlcHNBY2NvcmRpbmdseVRvU2VsZWN0ZWRJdGVtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVZpc2libGVTdGVwc0Ftb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hpZnRTdGVwc0FjY29yZGluZ2x5VG9TZWxlY3RlZEl0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoKHN0YXRlLCBwcm9wcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IHN0ZXBzLCBzZWxlY3RlZEl0ZW0gfSA9IHByb3BzO1xyXG4gICAgICAgICAgICBjb25zdCB7IHN0ZXBTaXplLCB2aXNpYmxlU3RlcHNBbW91bnQgfSA9IHN0YXRlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3U3RlcHNQb3NWYWx1ZSA9IHNlbGVjdGVkSXRlbSAqIHN0ZXBTaXplO1xyXG4gICAgICAgICAgICBjb25zdCBtYXhTdGVwc1BvcyA9IHN0ZXBTaXplICogKHN0ZXBzLmxlbmd0aCAtIHZpc2libGVTdGVwc0Ftb3VudCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RlcHNDdXJyU2hpZnRlZFBvczogTWF0aC5taW4oTWF0aC5tYXgobmV3U3RlcHNQb3NWYWx1ZSwgMCksIG1heFN0ZXBzUG9zKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWaXNpYmxlU3RlcHNBbW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB2ZXJ0aWNhbCwgc3RlcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBzdGVwU2l6ZSwgYXJyb3dzU2l6ZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyU2l6ZSA9IHRoaXMuc3RlcHBlckNvbnRhaW5lclJlZlt2ZXJ0aWNhbCA/ICdjbGllbnRIZWlnaHQnIDogJ2NsaWVudFdpZHRoJ107XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQXJyb3dzTmVlZGVkID0gc3RlcHMubGVuZ3RoICogc3RlcFNpemUgPiBjb250YWluZXJTaXplO1xyXG4gICAgICAgIGNvbnN0IGN1cnJBcnJvd3NTaXplID0gaXNBcnJvd3NOZWVkZWQgPyBhcnJvd3NTaXplIDogMDtcclxuXHJcbiAgICAgICAgY29uc3QgdmlzaWJsZVN0ZXBzQW1vdW50ID0gTWF0aC5mbG9vcigoY29udGFpbmVyU2l6ZSAtIChjdXJyQXJyb3dzU2l6ZSAqIDIpKSAvIHN0ZXBTaXplKSB8fCAxO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaWJsZVN0ZXBzQW1vdW50LFxyXG4gICAgICAgICAgICBpc0Fycm93c05lZWRlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFN0ZXAgPSAoaW5kZXgsIGlkKSA9PiAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25TdGVwQ2xpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN0ZXBDbGljayh7IGluZGV4LCBpZCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25BcnJvd0NsaWNrID0gKGRpcmVjdGlvbikgPT4gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdmlzaWJsZVN0ZXBzQW1vdW50LCBzdGVwU2l6ZSwgc3RlcHNDdXJyU2hpZnRlZFBvcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IHN0ZXBzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdTdGVwc1Bvc1ZhbHVlID0gc3RlcHNDdXJyU2hpZnRlZFBvcyArIChzdGVwU2l6ZSAqIGRpcmVjdGlvbik7XHJcbiAgICAgICAgY29uc3QgbWF4U3RlcHNQb3MgPSBzdGVwU2l6ZSAqIChzdGVwcy5sZW5ndGggLSB2aXNpYmxlU3RlcHNBbW91bnQpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc3RlcHNDdXJyU2hpZnRlZFBvczogTWF0aC5taW4oTWF0aC5tYXgobmV3U3RlcHNQb3NWYWx1ZSwgMCksIG1heFN0ZXBzUG9zKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclN0ZXBzKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RlcHMsIGhpZGVMYWJlbHMsIHBhbGV0dGU6IHsgaWNvbiB9LCBpY29uU2l6ZSwgc2VsZWN0ZWRJdGVtIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBzdGVwcy5tYXAoKHN0ZXAsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRJdGVtID09PSBpbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQmVmb3JlU2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW0gPiBpbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGljb25Db2xvciA9IChpc1NlbGVjdGVkIHx8IGlzQmVmb3JlU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICAmJiAoc3RlcC5wcm9ncmVzcyAhPT0gJ25vbmUnICYmIHN0ZXAucHJvZ3Jlc3MgIT09ICdwYXJ0aWFsJylcclxuICAgICAgICAgICAgICAgIHx8IHN0ZXAucHJvZ3Jlc3MgPT09ICdkb25lJ1xyXG4gICAgICAgICAgICAgICAgICAgID8gKGljb24uZmluaXNoZWQgfHwgJ3doaXRlJykgOiAoaWNvbi51bmZpbmlzaGVkIHx8ICdibGFjaycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBzLWl0ZW0nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tYmVmb3JlLXNlbGVjdGVkJzogaXNCZWZvcmVTZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLWRpc2FibGVkJzogc3RlcC5kaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsnc3RlcCcgKyBpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c3RlcC5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHRoaXMuc2VsZWN0U3RlcChpbmRleCwgc3RlcC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RlcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbG9yPXtpY29uQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uU2l6ZT17aWNvblNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXtzdGVwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUxhYmVsPXtoaWRlTGFiZWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmVmb3JlU2VsZWN0ZWQ9e2lzQmVmb3JlU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHBhbGV0dGUsIHZlcnRpY2FsLCBjb21wbGV0ZWRDb3VudGVyLCBzdGVwcywgaWNvblNpemUsIHNlbGVjdGVkSXRlbSwgZGlzYWJsZVNjcm9sbCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IHN0ZXBzQ3VyclNoaWZ0ZWRQb3MsIHZpc2libGVTdGVwc0Ftb3VudCwgaXNBcnJvd3NOZWVkZWQsIGFycm93c1NpemUsIHN0ZXBTaXplIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICdzdGVwcGVyJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAnLS12ZXJ0aWNhbCc6IHZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntjcmVhdGVDc3NWYXJpYWJsZXMocGFsZXR0ZSwgaWNvblNpemUpfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RlcHBlci1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMuc3RlcHBlckNvbnRhaW5lclJlZiA9IGVsbX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXNBcnJvd3NOZWVkZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFycm93IGFycm93LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQXJyb3dDbGljaygtMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17dmVydGljYWwgPyBcImNoZXZyb24tdXBcIiA6IFwiY2hldnJvbi1sZWZ0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3BhbGV0dGUuYXJyb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHMtc2hvd24nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tdmVydGljYWwnOiB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB2ZXJ0aWNhbCB8fCBkaXNhYmxlU2Nyb2xsID8gJzEwMCUnIDogdmlzaWJsZVN0ZXBzQW1vdW50ICogc3RlcFNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZlcnRpY2FsID8gdmlzaWJsZVN0ZXBzQW1vdW50ICogc3RlcFNpemUgOiBhcnJvd3NTaXplICogNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RlcHMtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGlzQXJyb3dzTmVlZGVkICYmICF2ZXJ0aWNhbCA/IHN0ZXBzLmxlbmd0aCAqIHN0ZXBTaXplIDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB2ZXJ0aWNhbCA/IDAgOiBzdGVwc0N1cnJTaGlmdGVkUG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogdmVydGljYWwgPyBzdGVwc0N1cnJTaGlmdGVkUG9zIDogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU3RlcHMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0Fycm93c05lZWRlZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJyb3cgYXJyb3ctcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQXJyb3dDbGljaygxKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXt2ZXJ0aWNhbCA/IFwiY2hldnJvbi1kb3duXCIgOiBcImNoZXZyb24tcmlnaHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17cGFsZXR0ZS5hcnJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcHBlci1jb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbXBsZXRlZENvdW50ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICBgJHtzZWxlY3RlZEl0ZW0gKyAxfS8ke3N0ZXBzLmxlbmd0aH0gQ29tcGxldGVkYFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblN0ZXBwZXIucHJvcFR5cGVzID0ge1xyXG4gICAgc3RlcHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgcGFsZXR0ZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGljb25TaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaGlkZUxhYmVsczogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICB2ZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjb21wbGV0ZWRDb3VudGVyOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG9uU3RlcENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGRpc2FibGVTY3JvbGw6IFByb3BUeXBlcy5ib29sXHJcbn1cclxuXHJcblN0ZXBwZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3RlcHM6IFtdLFxyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICAgIGljb246IHtcclxuICAgICAgICAgICAgZmluaXNoZWQ6ICcnLFxyXG4gICAgICAgICAgICB1bmZpbmlzaGVkOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2lyY2xlOiAnJyxcclxuICAgICAgICBsaW5rOiAnJyxcclxuICAgICAgICBsYWJlbDogJycsXHJcbiAgICAgICAgYXJyb3dzOiAnYmxhY2snXHJcbiAgICB9LFxyXG4gICAgaWNvblNpemU6ICdzbScsXHJcbiAgICBoaWRlTGFiZWxzOiBmYWxzZSxcclxuICAgIHZlcnRpY2FsOiBmYWxzZSxcclxuICAgIGNvbXBsZXRlZENvdW50ZXI6IGZhbHNlLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiAwLFxyXG4gICAgZGlzYWJsZVNjcm9sbDogZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RlcHBlcjsiXX0=