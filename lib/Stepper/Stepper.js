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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      selected: Math.min(props.steps.length - 1, props.selectedItem - 1),
      stepsPerPage: 0,
      containerRightPos: 0,
      containerBottomPos: 0,
      isArrowsNeeded: false
    };
    _this.stepperContainerRef = false;
    _this.arrowRef = false;
    return _this;
  }

  _createClass(Stepper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.updateStepsPerPageAmount();
      window.addEventListener('resize', function () {
        _this2.updateStepsPerPageAmount();
      });
    }
  }, {
    key: "updateStepsPerPageAmount",
    value: function updateStepsPerPageAmount() {
      var _this$arrowRef;

      var vertical = this.props.vertical;
      var currArrowsSize = this.state.isArrowsNeeded ? ((_this$arrowRef = this.arrowRef) === null || _this$arrowRef === void 0 ? void 0 : _this$arrowRef.clientWidth) * 2 : 0;
      var stepsPerPage = Math.floor((this.stepperContainerRef[vertical ? 'clientHeight' : 'clientWidth'] - currArrowsSize) / (vertical ? 120 : 200)) || 1;
      this.setState({
        stepsPerPage: stepsPerPage,
        isArrowsNeeded: stepsPerPage < this.props.steps.length
      });
    }
  }, {
    key: "selectStep",
    value: function selectStep(index, id) {
      var _this3 = this;

      if (this.props.onStepClick) {
        this.props.onStepClick({
          index: index,
          id: id
        });
      }

      return function () {
        _this3.setState({
          selected: index
        });
      };
    }
  }, {
    key: "onArrowClick",
    value: function onArrowClick(direction) {
      var _this4 = this;

      var stepsPerPage = this.state.stepsPerPage;
      var _this$props = this.props,
          steps = _this$props.steps,
          vertical = _this$props.vertical;
      return function () {
        var newContainerPosValue = _this4.state[vertical ? 'containerBottomPos' : 'containerRightPos'] + (vertical ? 120 : 200) * direction;
        var maxContainerPos = (vertical ? 120 : 150) * (steps.length - stepsPerPage);

        _this4.setState(_defineProperty({}, vertical ? 'containerBottomPos' : 'containerRightPos', Math.min(Math.max(newContainerPosValue, 0), maxContainerPos)));
      };
    }
  }, {
    key: "renderSteps",
    value: function renderSteps() {
      var _this5 = this;

      var _this$props2 = this.props,
          steps = _this$props2.steps,
          hideLabels = _this$props2.hideLabels,
          icon = _this$props2.palette.icon,
          iconSize = _this$props2.iconSize;
      var selected = this.state.selected;
      return steps.map(function (step, index) {
        var isSelected = selected === index;
        var isBeforeSelected = selected > index;
        var iconColor = (isSelected || isBeforeSelected) && step.progress !== 'none' && step.progress !== 'partial' || step.progress === 'done' ? icon.finished || 'white' : icon.unfinished || 'black';
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames["default"])({
            'steps-item': true,
            '--selected': isSelected,
            '--before-selected': isBeforeSelected,
            '--disabled': step.disabled
          }),
          onClick: step.disabled ? undefined : _this5.selectStep(index, step.id),
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
      var _this6 = this;

      var _this$props3 = this.props,
          palette = _this$props3.palette,
          vertical = _this$props3.vertical,
          completedCounter = _this$props3.completedCounter,
          steps = _this$props3.steps,
          iconSize = _this$props3.iconSize;
      var _this$state = this.state,
          selected = _this$state.selected,
          containerRightPos = _this$state.containerRightPos,
          containerBottomPos = _this$state.containerBottomPos,
          stepsPerPage = _this$state.stepsPerPage,
          isArrowsNeeded = _this$state.isArrowsNeeded;
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
            return _this6.stepperContainerRef = elm;
          },
          children: [isArrowsNeeded && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "arrow arrow-left",
            onClick: this.onArrowClick(-1),
            ref: function ref(elm) {
              return _this6.arrowRef = elm;
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "arrow-icon",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
                icon: vertical ? "chevron-up" : "chevron-left",
                color: palette.arrows
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "steps-shown",
            style: {
              width: '100%',
              height: stepsPerPage * 120
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "steps-all",
              style: {
                width: isArrowsNeeded && !vertical ? steps.length * 200 : '100%',
                right: vertical ? 0 : containerRightPos,
                bottom: vertical ? containerBottomPos : 0
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
          children: completedCounter && "".concat(selected + 1, "/").concat(steps.length, " Completed")
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
    label: '',
    arrows: 'black'
  },
  iconSize: 'sm',
  hideLabels: false,
  vertical: false,
  completedCounter: false,
  selectedItem: 1
};
var _default = Stepper;
exports["default"] = _default;