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
          iconSize = _this$props2.iconSize,
          selectedItem = _this$props2.selectedItem,
          disableScroll = _this$props2.disableScroll;
      var stepSize = this.state.stepSize;
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
          style: {
            maxWidth: disableScroll ? '100%' : stepSize
          },
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