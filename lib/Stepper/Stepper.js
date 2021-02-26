"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Stepper = _interopRequireDefault(require("./Stepper.scss"));

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

  function Stepper(props) {
    var _this;

    _classCallCheck(this, Stepper);

    _this = _super.call(this, props);
    _this.state = {
      selected: Math.min(props.steps.length - 1, props.selectedItem - 1),
      stepsPerPage: 0,
      containerRightPos: 0,
      isArrowsNeeded: false
    };
    _this.stepperContainerRef = false;
    _this.stepperItemRef = false;
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

      var currArrowsWidth = this.state.isArrowsNeeded ? ((_this$arrowRef = this.arrowRef) === null || _this$arrowRef === void 0 ? void 0 : _this$arrowRef.clientWidth) * 2 : 0;
      var stepsPerPage = Math.floor((this.stepperContainerRef.clientWidth - currArrowsWidth) / 200) || 1;
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

      var _this$state = this.state,
          containerRightPos = _this$state.containerRightPos,
          stepsPerPage = _this$state.stepsPerPage;
      var steps = this.props.steps;
      return function () {
        var newContainerRightValue = containerRightPos + 200 * direction;
        var maxRightPos = 200 * (steps.length - stepsPerPage);

        _this4.setState({
          containerRightPos: Math.min(Math.max(newContainerRightValue, 0), maxRightPos)
        });
      };
    }
  }, {
    key: "renderSteps",
    value: function renderSteps() {
      var _this5 = this;

      var _this$props = this.props,
          steps = _this$props.steps,
          hideLabels = _this$props.hideLabels,
          icon = _this$props.palette.icon,
          iconSize = _this$props.iconSize;
      var selected = this.state.selected;
      return steps.map(function (step, index) {
        var isSelected = selected === index;
        var isBeforeSelected = selected > index;
        var iconColor = (isSelected || isBeforeSelected) && step.progress !== 'none' && step.progress !== 'partial' || step.progress === 'done' ? icon.finished || 'white' : icon.unfinished || 'black';
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames["default"])({
            'stepper-item': true,
            '--selected': isSelected,
            '--before-selected': isBeforeSelected,
            '--disabled': step.disabled
          }),
          onClick: !step.disabled && _this5.selectStep(index, step.id),
          ref: function ref(elm) {
            return _this5.stepperItemRef = elm;
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
            icon: step.icon,
            iconColor: iconColor,
            iconSize: iconSize,
            label: step.label,
            sublabel: step.sublabel,
            progress: step.progress,
            hideLabel: hideLabels
          })
        }, 'step' + index);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$props2 = this.props,
          palette = _this$props2.palette,
          vertical = _this$props2.vertical,
          showCompletedCount = _this$props2.showCompletedCount,
          steps = _this$props2.steps,
          iconSize = _this$props2.iconSize;
      var _this$state2 = this.state,
          selected = _this$state2.selected,
          containerRightPos = _this$state2.containerRightPos,
          stepsPerPage = _this$state2.stepsPerPage,
          isArrowsNeeded = _this$state2.isArrowsNeeded; // const isArrowsNeeded = stepsPerPage < steps.length;

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "stepper",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: (0, _utils.createCssVariables)(palette, iconSize) + _Stepper["default"]
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
                icon: "chevron-left",
                color: palette.arrows
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "steps-wrapper",
            style: {
              width: isArrowsNeeded ? stepsPerPage * 200 : '100%'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: (0, _classnames["default"])({
                'steps': true,
                '--vertical': vertical
              }),
              style: {
                width: isArrowsNeeded ? steps.length * 200 : '100%',
                right: containerRightPos
              },
              children: this.renderSteps()
            })
          }), isArrowsNeeded && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "arrow arrow-right",
            onClick: this.onArrowClick(1),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "arrow-icon",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
                icon: "chevron-right",
                color: palette.arrows
              })
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "stepper-counter",
          children: showCompletedCount && "".concat(selected + 1, "/").concat(steps.length, " Completed")
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
    label: '',
    arrows: 'black'
  },
  iconSize: 'sm',
  hideLabels: false,
  vertical: false,
  showCompletedCount: false,
  selectedItem: 1
};
var _default = Stepper;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsIk1hdGgiLCJtaW4iLCJzdGVwcyIsImxlbmd0aCIsInNlbGVjdGVkSXRlbSIsInN0ZXBzUGVyUGFnZSIsImNvbnRhaW5lclJpZ2h0UG9zIiwiaXNBcnJvd3NOZWVkZWQiLCJzdGVwcGVyQ29udGFpbmVyUmVmIiwic3RlcHBlckl0ZW1SZWYiLCJhcnJvd1JlZiIsInVwZGF0ZVN0ZXBzUGVyUGFnZUFtb3VudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyQXJyb3dzV2lkdGgiLCJjbGllbnRXaWR0aCIsImZsb29yIiwic2V0U3RhdGUiLCJpbmRleCIsImlkIiwib25TdGVwQ2xpY2siLCJkaXJlY3Rpb24iLCJuZXdDb250YWluZXJSaWdodFZhbHVlIiwibWF4UmlnaHRQb3MiLCJtYXgiLCJoaWRlTGFiZWxzIiwiaWNvbiIsInBhbGV0dGUiLCJpY29uU2l6ZSIsIm1hcCIsInN0ZXAiLCJpc1NlbGVjdGVkIiwiaXNCZWZvcmVTZWxlY3RlZCIsImljb25Db2xvciIsInByb2dyZXNzIiwiZmluaXNoZWQiLCJ1bmZpbmlzaGVkIiwiZGlzYWJsZWQiLCJzZWxlY3RTdGVwIiwiZWxtIiwibGFiZWwiLCJzdWJsYWJlbCIsInZlcnRpY2FsIiwic2hvd0NvbXBsZXRlZENvdW50Iiwic3R5bGVzIiwib25BcnJvd0NsaWNrIiwiYXJyb3dzIiwid2lkdGgiLCJyaWdodCIsInJlbmRlclN0ZXBzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0Iiwic3RyaW5nIiwiYm9vbCIsIm51bWJlciIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJjaXJjbGUiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7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c3NcIjtcclxuaW1wb3J0IFN0ZXAgZnJvbSAnLi9TdGVwL1N0ZXAnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDc3NWYXJpYWJsZXMgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcblxyXG5jbGFzcyBTdGVwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOiBNYXRoLm1pbihwcm9wcy5zdGVwcy5sZW5ndGggLSAxLCBwcm9wcy5zZWxlY3RlZEl0ZW0gLSAxKSxcclxuICAgICAgICAgICAgc3RlcHNQZXJQYWdlOiAwLFxyXG4gICAgICAgICAgICBjb250YWluZXJSaWdodFBvczogMCxcclxuICAgICAgICAgICAgaXNBcnJvd3NOZWVkZWQ6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0ZXBwZXJDb250YWluZXJSZWYgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0ZXBwZXJJdGVtUmVmID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hcnJvd1JlZiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RlcHNQZXJQYWdlQW1vdW50KCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RlcHNQZXJQYWdlQW1vdW50KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGVwc1BlclBhZ2VBbW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgY3VyckFycm93c1dpZHRoID0gdGhpcy5zdGF0ZS5pc0Fycm93c05lZWRlZCA/IHRoaXMuYXJyb3dSZWY/LmNsaWVudFdpZHRoICogMiA6IDA7XHJcbiAgICAgICAgY29uc3Qgc3RlcHNQZXJQYWdlID0gTWF0aC5mbG9vcigodGhpcy5zdGVwcGVyQ29udGFpbmVyUmVmLmNsaWVudFdpZHRoIC0gY3VyckFycm93c1dpZHRoKSAvIDIwMCkgfHwgMTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHN0ZXBzUGVyUGFnZSxcclxuICAgICAgICAgICAgaXNBcnJvd3NOZWVkZWQ6IHN0ZXBzUGVyUGFnZSA8IHRoaXMucHJvcHMuc3RlcHMubGVuZ3RoXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0U3RlcChpbmRleCwgaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblN0ZXBDbGljaykge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU3RlcENsaWNrKHsgaW5kZXgsIGlkIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogaW5kZXhcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25BcnJvd0NsaWNrKGRpcmVjdGlvbikge1xyXG4gICAgICAgIGNvbnN0IHsgY29udGFpbmVyUmlnaHRQb3MsIHN0ZXBzUGVyUGFnZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IHN0ZXBzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdDb250YWluZXJSaWdodFZhbHVlID0gY29udGFpbmVyUmlnaHRQb3MgKyAoMjAwICogZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgbWF4UmlnaHRQb3MgPSAyMDAgKiAoc3RlcHMubGVuZ3RoIC0gc3RlcHNQZXJQYWdlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyUmlnaHRQb3M6IE1hdGgubWluKE1hdGgubWF4KG5ld0NvbnRhaW5lclJpZ2h0VmFsdWUsIDApLCBtYXhSaWdodFBvcylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU3RlcHMoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdGVwcywgaGlkZUxhYmVscywgcGFsZXR0ZTogeyBpY29uIH0sIGljb25TaXplIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHN0ZXBzLm1hcCgoc3RlcCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZCA9PT0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0JlZm9yZVNlbGVjdGVkID0gc2VsZWN0ZWQgPiBpbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGljb25Db2xvciA9IChpc1NlbGVjdGVkIHx8IGlzQmVmb3JlU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICAmJiAoc3RlcC5wcm9ncmVzcyAhPT0gJ25vbmUnICYmIHN0ZXAucHJvZ3Jlc3MgIT09ICdwYXJ0aWFsJylcclxuICAgICAgICAgICAgICAgIHx8IHN0ZXAucHJvZ3Jlc3MgPT09ICdkb25lJ1xyXG4gICAgICAgICAgICAgICAgICAgID8gKGljb24uZmluaXNoZWQgfHwgJ3doaXRlJykgOiAoaWNvbi51bmZpbmlzaGVkIHx8ICdibGFjaycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBwZXItaXRlbSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1zZWxlY3RlZCc6IGlzU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1iZWZvcmUtc2VsZWN0ZWQnOiBpc0JlZm9yZVNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tZGlzYWJsZWQnOiBzdGVwLmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9eydzdGVwJyArIGluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXshc3RlcC5kaXNhYmxlZCAmJiB0aGlzLnNlbGVjdFN0ZXAoaW5kZXgsIHN0ZXAuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsbSA9PiB0aGlzLnN0ZXBwZXJJdGVtUmVmID0gZWxtfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3N0ZXAuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db2xvcj17aWNvbkNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblNpemU9e2ljb25TaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3N0ZXAubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJsYWJlbD17c3RlcC5zdWJsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzPXtzdGVwLnByb2dyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUxhYmVsPXtoaWRlTGFiZWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYWxldHRlLCB2ZXJ0aWNhbCwgc2hvd0NvbXBsZXRlZENvdW50LCBzdGVwcywgaWNvblNpemUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZCwgY29udGFpbmVyUmlnaHRQb3MsIHN0ZXBzUGVyUGFnZSwgaXNBcnJvd3NOZWVkZWQgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IGlzQXJyb3dzTmVlZGVkID0gc3RlcHNQZXJQYWdlIDwgc3RlcHMubGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57Y3JlYXRlQ3NzVmFyaWFibGVzKHBhbGV0dGUsIGljb25TaXplKSArIHN0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0ZXBwZXItY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9e2VsbSA9PiB0aGlzLnN0ZXBwZXJDb250YWluZXJSZWYgPSBlbG19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQXJyb3dzTmVlZGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJvdyBhcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFycm93Q2xpY2soLTEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsbSA9PiB0aGlzLmFycm93UmVmID0gZWxtfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjaGV2cm9uLWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtwYWxldHRlLmFycm93c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdGVwcy13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpc0Fycm93c05lZWRlZCA/IHN0ZXBzUGVyUGFnZSAqIDIwMCA6ICcxMDAlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHMnOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLXZlcnRpY2FsJzogdmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaXNBcnJvd3NOZWVkZWQgPyBzdGVwcy5sZW5ndGggKiAyMDAgOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IGNvbnRhaW5lclJpZ2h0UG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdGVwcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2lzQXJyb3dzTmVlZGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJvdyBhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BcnJvd0NsaWNrKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjaGV2cm9uLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17cGFsZXR0ZS5hcnJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcHBlci1jb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dDb21wbGV0ZWRDb3VudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGAke3NlbGVjdGVkICsgMX0vJHtzdGVwcy5sZW5ndGh9IENvbXBsZXRlZGBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuU3RlcHBlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBzdGVwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBwYWxldHRlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaWNvblNpemU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBoaWRlTGFiZWxzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNob3dDb21wbGV0ZWRDb3VudDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvblN0ZXBDbGljazogUHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuU3RlcHBlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzdGVwczogW10sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBmaW5pc2hlZDogJycsXHJcbiAgICAgICAgICAgIHVuZmluaXNoZWQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaXJjbGU6ICcnLFxyXG4gICAgICAgIGxpbms6ICcnLFxyXG4gICAgICAgIGxhYmVsOiAnJyxcclxuICAgICAgICBhcnJvd3M6ICdibGFjaydcclxuICAgIH0sXHJcbiAgICBpY29uU2l6ZTogJ3NtJyxcclxuICAgIGhpZGVMYWJlbHM6IGZhbHNlLFxyXG4gICAgdmVydGljYWw6IGZhbHNlLFxyXG4gICAgc2hvd0NvbXBsZXRlZENvdW50OiBmYWxzZSxcclxuICAgIHNlbGVjdGVkSXRlbTogMVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGVwcGVyOyJdfQ==