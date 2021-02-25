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
      containerRightPos: 0
    };
    _this.stepperRef = false;
    _this.stepperItemRef = false;
    return _this;
  }

  _createClass(Stepper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        stepsPerPage: Math.floor(this.stepperRef.clientWidth / 200)
      });
      window.addEventListener('resize', function () {
        _this2.setState({
          stepsPerPage: Math.floor(_this2.stepperRef.clientWidth / 200)
        });
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
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react["default"].Fragment, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
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
          arrows = _this$props2.arrows;
      var _this$state2 = this.state,
          selected = _this$state2.selected,
          containerRightPos = _this$state2.containerRightPos,
          stepsPerPage = _this$state2.stepsPerPage;
      var isArrowsNeeded = stepsPerPage < steps.length;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: (0, _utils.createCssVariables)(palette) + _Stepper["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "stepper-container",
          ref: function ref(elm) {
            return _this6.stepperRef = elm;
          },
          children: [isArrowsNeeded && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "arrow arrow-left",
            onClick: this.onArrowClick(-1),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "arrow-icon",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
                icon: "chevron-left",
                color: arrows.color,
                size: arrows.size
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
                color: arrows.color,
                size: arrows.size
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
  arrows: _propTypes["default"].object,
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
  arrows: {
    color: 'black',
    size: 'md'
  },
  iconSize: 'md',
  hideLabels: false,
  vertical: false,
  showCompletedCount: false,
  selectedItem: 1
};
var _default = Stepper;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsIk1hdGgiLCJtaW4iLCJzdGVwcyIsImxlbmd0aCIsInNlbGVjdGVkSXRlbSIsInN0ZXBzUGVyUGFnZSIsImNvbnRhaW5lclJpZ2h0UG9zIiwic3RlcHBlclJlZiIsInN0ZXBwZXJJdGVtUmVmIiwic2V0U3RhdGUiLCJmbG9vciIsImNsaWVudFdpZHRoIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluZGV4IiwiaWQiLCJvblN0ZXBDbGljayIsImRpcmVjdGlvbiIsIm5ld0NvbnRhaW5lclJpZ2h0VmFsdWUiLCJtYXhSaWdodFBvcyIsIm1heCIsImhpZGVMYWJlbHMiLCJpY29uIiwicGFsZXR0ZSIsImljb25TaXplIiwibWFwIiwic3RlcCIsImlzU2VsZWN0ZWQiLCJpc0JlZm9yZVNlbGVjdGVkIiwiaWNvbkNvbG9yIiwicHJvZ3Jlc3MiLCJmaW5pc2hlZCIsInVuZmluaXNoZWQiLCJkaXNhYmxlZCIsInNlbGVjdFN0ZXAiLCJlbG0iLCJsYWJlbCIsInN1YmxhYmVsIiwidmVydGljYWwiLCJzaG93Q29tcGxldGVkQ291bnQiLCJhcnJvd3MiLCJpc0Fycm93c05lZWRlZCIsInN0eWxlcyIsIm9uQXJyb3dDbGljayIsImNvbG9yIiwic2l6ZSIsIndpZHRoIiwicmlnaHQiLCJyZW5kZXJTdGVwcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiY2lyY2xlIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE87Ozs7O0FBQ0YsbUJB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LHNCQUFVSSxJQUxOO0FBTWhCbEIsRUFBQUEsUUFBUSxFQUFFYyxzQkFBVUksSUFOSjtBQU9oQmpCLEVBQUFBLGtCQUFrQixFQUFFYSxzQkFBVUksSUFQZDtBQVFoQnBELEVBQUFBLFlBQVksRUFBRWdELHNCQUFVSyxNQVJSO0FBU2hCekMsRUFBQUEsV0FBVyxFQUFFb0Msc0JBQVVNO0FBVFAsQ0FBcEI7QUFZQTlELE9BQU8sQ0FBQytELFlBQVIsR0FBdUI7QUFDbkJ6RCxFQUFBQSxLQUFLLEVBQUUsRUFEWTtBQUVuQnFCLEVBQUFBLE9BQU8sRUFBRTtBQUNMRCxJQUFBQSxJQUFJLEVBQUU7QUFDRlMsTUFBQUEsUUFBUSxFQUFFLEVBRFI7QUFFRkMsTUFBQUEsVUFBVSxFQUFFO0FBRlYsS0FERDtBQUtMNEIsSUFBQUEsTUFBTSxFQUFFLEVBTEg7QUFNTEMsSUFBQUEsSUFBSSxFQUFFLEVBTkQ7QUFPTHpCLElBQUFBLEtBQUssRUFBRTtBQVBGLEdBRlU7QUFXbkJJLEVBQUFBLE1BQU0sRUFBRTtBQUNKSSxJQUFBQSxLQUFLLEVBQUUsT0FESDtBQUVKQyxJQUFBQSxJQUFJLEVBQUU7QUFGRixHQVhXO0FBZW5CckIsRUFBQUEsUUFBUSxFQUFFLElBZlM7QUFnQm5CSCxFQUFBQSxVQUFVLEVBQUUsS0FoQk87QUFpQm5CaUIsRUFBQUEsUUFBUSxFQUFFLEtBakJTO0FBa0JuQkMsRUFBQUEsa0JBQWtCLEVBQUUsS0FsQkQ7QUFtQm5CbkMsRUFBQUEsWUFBWSxFQUFFO0FBbkJLLENBQXZCO2VBc0JlUixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TdGVwcGVyLnNjc3NcIjtcclxuaW1wb3J0IFN0ZXAgZnJvbSAnLi9TdGVwL1N0ZXAnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDc3NWYXJpYWJsZXMgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcblxyXG5jbGFzcyBTdGVwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOiBNYXRoLm1pbihwcm9wcy5zdGVwcy5sZW5ndGggLSAxLCBwcm9wcy5zZWxlY3RlZEl0ZW0gLSAxKSxcclxuICAgICAgICAgICAgc3RlcHNQZXJQYWdlOiAwLFxyXG4gICAgICAgICAgICBjb250YWluZXJSaWdodFBvczogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdGVwcGVyUmVmID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGVwcGVySXRlbVJlZiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzdGVwc1BlclBhZ2U6IE1hdGguZmxvb3IodGhpcy5zdGVwcGVyUmVmLmNsaWVudFdpZHRoIC8gMjAwKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHN0ZXBzUGVyUGFnZTogTWF0aC5mbG9vcih0aGlzLnN0ZXBwZXJSZWYuY2xpZW50V2lkdGggLyAyMDApXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0U3RlcChpbmRleCwgaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblN0ZXBDbGljaykge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU3RlcENsaWNrKHsgaW5kZXgsIGlkIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogaW5kZXhcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25BcnJvd0NsaWNrKGRpcmVjdGlvbikge1xyXG4gICAgICAgIGNvbnN0IHsgY29udGFpbmVyUmlnaHRQb3MsIHN0ZXBzUGVyUGFnZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IHN0ZXBzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdDb250YWluZXJSaWdodFZhbHVlID0gY29udGFpbmVyUmlnaHRQb3MgKyAoMjAwICogZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgbWF4UmlnaHRQb3MgPSAyMDAgKiAoc3RlcHMubGVuZ3RoIC0gc3RlcHNQZXJQYWdlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyUmlnaHRQb3M6IE1hdGgubWluKE1hdGgubWF4KG5ld0NvbnRhaW5lclJpZ2h0VmFsdWUsIDApLCBtYXhSaWdodFBvcylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU3RlcHMoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdGVwcywgaGlkZUxhYmVscywgcGFsZXR0ZTogeyBpY29uIH0sIGljb25TaXplIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHN0ZXBzLm1hcCgoc3RlcCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZCA9PT0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0JlZm9yZVNlbGVjdGVkID0gc2VsZWN0ZWQgPiBpbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGljb25Db2xvciA9IChpc1NlbGVjdGVkIHx8IGlzQmVmb3JlU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICAmJiAoc3RlcC5wcm9ncmVzcyAhPT0gJ25vbmUnICYmIHN0ZXAucHJvZ3Jlc3MgIT09ICdwYXJ0aWFsJylcclxuICAgICAgICAgICAgICAgIHx8IHN0ZXAucHJvZ3Jlc3MgPT09ICdkb25lJ1xyXG4gICAgICAgICAgICAgICAgICAgID8gKGljb24uZmluaXNoZWQgfHwgJ3doaXRlJykgOiAoaWNvbi51bmZpbmlzaGVkIHx8ICdibGFjaycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17J3N0ZXAnICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwcGVyLWl0ZW0nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLXNlbGVjdGVkJzogaXNTZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1iZWZvcmUtc2VsZWN0ZWQnOiBpc0JlZm9yZVNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLWRpc2FibGVkJzogc3RlcC5kaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXshc3RlcC5kaXNhYmxlZCAmJiB0aGlzLnNlbGVjdFN0ZXAoaW5kZXgsIHN0ZXAuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlbG0gPT4gdGhpcy5zdGVwcGVySXRlbVJlZiA9IGVsbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtzdGVwLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbG9yPXtpY29uQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblNpemU9e2ljb25TaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtzdGVwLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmxhYmVsPXtzdGVwLnN1YmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzPXtzdGVwLnByb2dyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVMYWJlbD17aGlkZUxhYmVsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHBhbGV0dGUsIHZlcnRpY2FsLCBzaG93Q29tcGxldGVkQ291bnQsIHN0ZXBzLCBhcnJvd3MgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZCwgY29udGFpbmVyUmlnaHRQb3MsIHN0ZXBzUGVyUGFnZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNBcnJvd3NOZWVkZWQgPSBzdGVwc1BlclBhZ2UgPCBzdGVwcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e2NyZWF0ZUNzc1ZhcmlhYmxlcyhwYWxldHRlKSArIHN0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0ZXBwZXItY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9e2VsbSA9PiB0aGlzLnN0ZXBwZXJSZWYgPSBlbG19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQXJyb3dzTmVlZGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJvdyBhcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFycm93Q2xpY2soLTEpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjaGV2cm9uLWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXthcnJvd3MuY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17YXJyb3dzLnNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RlcHMtd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaXNBcnJvd3NOZWVkZWQgPyBzdGVwc1BlclBhZ2UgKiAyMDAgOiAnMTAwJSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBzJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS12ZXJ0aWNhbCc6IHZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGlzQXJyb3dzTmVlZGVkID8gc3RlcHMubGVuZ3RoICogMjAwIDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBjb250YWluZXJSaWdodFBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU3RlcHMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0Fycm93c05lZWRlZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJyb3cgYXJyb3ctcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQXJyb3dDbGljaygxKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2hldnJvbi1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2Fycm93cy5jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXthcnJvd3Muc2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwcGVyLWNvdW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c2hvd0NvbXBsZXRlZENvdW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYCR7c2VsZWN0ZWQgKyAxfS8ke3N0ZXBzLmxlbmd0aH0gQ29tcGxldGVkYFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5TdGVwcGVyLnByb3BUeXBlcyA9IHtcclxuICAgIHN0ZXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIHBhbGV0dGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpY29uU2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGFycm93czogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGhpZGVMYWJlbHM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgdmVydGljYWw6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc2hvd0NvbXBsZXRlZENvdW50OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG9uU3RlcENsaWNrOiBQcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5TdGVwcGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHN0ZXBzOiBbXSxcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICAgIGZpbmlzaGVkOiAnJyxcclxuICAgICAgICAgICAgdW5maW5pc2hlZDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNpcmNsZTogJycsXHJcbiAgICAgICAgbGluazogJycsXHJcbiAgICAgICAgbGFiZWw6ICcnXHJcbiAgICB9LFxyXG4gICAgYXJyb3dzOiB7XHJcbiAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgc2l6ZTogJ21kJ1xyXG4gICAgfSxcclxuICAgIGljb25TaXplOiAnbWQnLFxyXG4gICAgaGlkZUxhYmVsczogZmFsc2UsXHJcbiAgICB2ZXJ0aWNhbDogZmFsc2UsXHJcbiAgICBzaG93Q29tcGxldGVkQ291bnQ6IGZhbHNlLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiAxXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0ZXBwZXI7Il19