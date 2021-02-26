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
    _this.stepperContainerRef = false;
    _this.stepperItemRef = false;
    return _this;
  }

  _createClass(Stepper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        stepsPerPage: Math.floor(this.stepperContainerRef.clientWidth / 200)
      });
      window.addEventListener('resize', function () {
        _this2.setState({
          stepsPerPage: Math.floor(_this2.stepperContainerRef.clientWidth / 200)
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
          arrows = _this$props2.arrows,
          iconSize = _this$props2.iconSize;
      var _this$state2 = this.state,
          selected = _this$state2.selected,
          containerRightPos = _this$state2.containerRightPos,
          stepsPerPage = _this$state2.stepsPerPage;
      var isArrowsNeeded = stepsPerPage < steps.length;
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
  iconSize: 'xl',
  hideLabels: false,
  vertical: false,
  showCompletedCount: false,
  selectedItem: 1
};
var _default = Stepper;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsIk1hdGgiLCJtaW4iLCJzdGVwcyIsImxlbmd0aCIsInNlbGVjdGVkSXRlbSIsInN0ZXBzUGVyUGFnZSIsImNvbnRhaW5lclJpZ2h0UG9zIiwic3RlcHBlckNvbnRhaW5lclJlZiIsInN0ZXBwZXJJdGVtUmVmIiwic2V0U3RhdGUiLCJmbG9vciIsImNsaWVudFdpZHRoIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluZGV4IiwiaWQiLCJvblN0ZXBDbGljayIsImRpcmVjdGlvbiIsIm5ld0NvbnRhaW5lclJpZ2h0VmFsdWUiLCJtYXhSaWdodFBvcyIsIm1heCIsImhpZGVMYWJlbHMiLCJpY29uIiwicGFsZXR0ZSIsImljb25TaXplIiwibWFwIiwic3RlcCIsImlzU2VsZWN0ZWQiLCJpc0JlZm9yZVNlbGVjdGVkIiwiaWNvbkNvbG9yIiwicHJvZ3Jlc3MiLCJmaW5pc2hlZCIsInVuZmluaXNoZWQiLCJkaXNhYmxlZCIsInNlbGVjdFN0ZXAiLCJlbG0iLCJsYWJlbCIsInN1YmxhYmVsIiwidmVydGljYWwiLCJzaG93Q29tcGxldGVkQ291bnQiLCJhcnJvd3MiLCJpc0Fycm93c05lZWRlZCIsInN0eWxlcyIsIm9uQXJyb3dDbGljayIsIndpZHRoIiwicmlnaHQiLCJyZW5kZXJTdGVwcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiY2lyY2xlIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE87Ozs7O0FBQ0YsbUJBQVlDLEtB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VUksSUFOZDtBQU9oQmxELEVBQUFBLFlBQVksRUFBRThDLHNCQUFVSyxNQVBSO0FBUWhCdkMsRUFBQUEsV0FBVyxFQUFFa0Msc0JBQVVNO0FBUlAsQ0FBcEI7QUFXQTVELE9BQU8sQ0FBQzZELFlBQVIsR0FBdUI7QUFDbkJ2RCxFQUFBQSxLQUFLLEVBQUUsRUFEWTtBQUVuQnFCLEVBQUFBLE9BQU8sRUFBRTtBQUNMRCxJQUFBQSxJQUFJLEVBQUU7QUFDRlMsTUFBQUEsUUFBUSxFQUFFLEVBRFI7QUFFRkMsTUFBQUEsVUFBVSxFQUFFO0FBRlYsS0FERDtBQUtMMEIsSUFBQUEsTUFBTSxFQUFFLEVBTEg7QUFNTEMsSUFBQUEsSUFBSSxFQUFFLEVBTkQ7QUFPTHZCLElBQUFBLEtBQUssRUFBRSxFQVBGO0FBUUxJLElBQUFBLE1BQU0sRUFBRTtBQVJILEdBRlU7QUFZbkJoQixFQUFBQSxRQUFRLEVBQUUsSUFaUztBQWFuQkgsRUFBQUEsVUFBVSxFQUFFLEtBYk87QUFjbkJpQixFQUFBQSxRQUFRLEVBQUUsS0FkUztBQWVuQkMsRUFBQUEsa0JBQWtCLEVBQUUsS0FmRDtBQWdCbkJuQyxFQUFBQSxZQUFZLEVBQUU7QUFoQkssQ0FBdkI7ZUFtQmVSLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL1N0ZXBwZXIuc2Nzc1wiO1xyXG5pbXBvcnQgU3RlcCBmcm9tICcuL1N0ZXAvU3RlcCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNzc1ZhcmlhYmxlcyB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuXHJcbmNsYXNzIFN0ZXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IE1hdGgubWluKHByb3BzLnN0ZXBzLmxlbmd0aCAtIDEsIHByb3BzLnNlbGVjdGVkSXRlbSAtIDEpLFxyXG4gICAgICAgICAgICBzdGVwc1BlclBhZ2U6IDAsXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclJpZ2h0UG9zOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0ZXBwZXJDb250YWluZXJSZWYgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0ZXBwZXJJdGVtUmVmID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHN0ZXBzUGVyUGFnZTogTWF0aC5mbG9vcih0aGlzLnN0ZXBwZXJDb250YWluZXJSZWYuY2xpZW50V2lkdGggLyAyMDApXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc3RlcHNQZXJQYWdlOiBNYXRoLmZsb29yKHRoaXMuc3RlcHBlckNvbnRhaW5lclJlZi5jbGllbnRXaWR0aCAvIDIwMClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RTdGVwKGluZGV4LCBpZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uU3RlcENsaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TdGVwQ2xpY2soeyBpbmRleCwgaWQgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBpbmRleFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkFycm93Q2xpY2soZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgeyBjb250YWluZXJSaWdodFBvcywgc3RlcHNQZXJQYWdlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHsgc3RlcHMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbnRhaW5lclJpZ2h0VmFsdWUgPSBjb250YWluZXJSaWdodFBvcyArICgyMDAgKiBkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBtYXhSaWdodFBvcyA9IDIwMCAqIChzdGVwcy5sZW5ndGggLSBzdGVwc1BlclBhZ2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJSaWdodFBvczogTWF0aC5taW4oTWF0aC5tYXgobmV3Q29udGFpbmVyUmlnaHRWYWx1ZSwgMCksIG1heFJpZ2h0UG9zKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTdGVwcygpIHtcclxuICAgICAgICBjb25zdCB7IHN0ZXBzLCBoaWRlTGFiZWxzLCBwYWxldHRlOiB7IGljb24gfSwgaWNvblNpemUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgc3RlcHMubWFwKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkID09PSBpbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQmVmb3JlU2VsZWN0ZWQgPSBzZWxlY3RlZCA+IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbkNvbG9yID0gKGlzU2VsZWN0ZWQgfHwgaXNCZWZvcmVTZWxlY3RlZClcclxuICAgICAgICAgICAgICAgICYmIChzdGVwLnByb2dyZXNzICE9PSAnbm9uZScgJiYgc3RlcC5wcm9ncmVzcyAhPT0gJ3BhcnRpYWwnKVxyXG4gICAgICAgICAgICAgICAgfHwgc3RlcC5wcm9ncmVzcyA9PT0gJ2RvbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoaWNvbi5maW5pc2hlZCB8fCAnd2hpdGUnKSA6IChpY29uLnVuZmluaXNoZWQgfHwgJ2JsYWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHBlci1pdGVtJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLXNlbGVjdGVkJzogaXNTZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLWJlZm9yZS1zZWxlY3RlZCc6IGlzQmVmb3JlU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1kaXNhYmxlZCc6IHN0ZXAuZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17J3N0ZXAnICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyFzdGVwLmRpc2FibGVkICYmIHRoaXMuc2VsZWN0U3RlcChpbmRleCwgc3RlcC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMuc3RlcHBlckl0ZW1SZWYgPSBlbG19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RlcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17c3RlcC5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbG9yPXtpY29uQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uU2l6ZT17aWNvblNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17c3RlcC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmxhYmVsPXtzdGVwLnN1YmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3N0ZXAucHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTGFiZWw9e2hpZGVMYWJlbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHBhbGV0dGUsIHZlcnRpY2FsLCBzaG93Q29tcGxldGVkQ291bnQsIHN0ZXBzLCBhcnJvd3MsIGljb25TaXplIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgc2VsZWN0ZWQsIGNvbnRhaW5lclJpZ2h0UG9zLCBzdGVwc1BlclBhZ2UgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQXJyb3dzTmVlZGVkID0gc3RlcHNQZXJQYWdlIDwgc3RlcHMubGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57Y3JlYXRlQ3NzVmFyaWFibGVzKHBhbGV0dGUsIGljb25TaXplKSArIHN0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0ZXBwZXItY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9e2VsbSA9PiB0aGlzLnN0ZXBwZXJDb250YWluZXJSZWYgPSBlbG19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQXJyb3dzTmVlZGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJvdyBhcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFycm93Q2xpY2soLTEpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjaGV2cm9uLWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtwYWxldHRlLmFycm93c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdGVwcy13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpc0Fycm93c05lZWRlZCA/IHN0ZXBzUGVyUGFnZSAqIDIwMCA6ICcxMDAlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHMnOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLXZlcnRpY2FsJzogdmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaXNBcnJvd3NOZWVkZWQgPyBzdGVwcy5sZW5ndGggKiAyMDAgOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IGNvbnRhaW5lclJpZ2h0UG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdGVwcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2lzQXJyb3dzTmVlZGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJvdyBhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BcnJvd0NsaWNrKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjaGV2cm9uLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17cGFsZXR0ZS5hcnJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcHBlci1jb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dDb21wbGV0ZWRDb3VudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGAke3NlbGVjdGVkICsgMX0vJHtzdGVwcy5sZW5ndGh9IENvbXBsZXRlZGBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuU3RlcHBlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBzdGVwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBwYWxldHRlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaWNvblNpemU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBoaWRlTGFiZWxzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNob3dDb21wbGV0ZWRDb3VudDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvblN0ZXBDbGljazogUHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuU3RlcHBlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzdGVwczogW10sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBmaW5pc2hlZDogJycsXHJcbiAgICAgICAgICAgIHVuZmluaXNoZWQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaXJjbGU6ICcnLFxyXG4gICAgICAgIGxpbms6ICcnLFxyXG4gICAgICAgIGxhYmVsOiAnJyxcclxuICAgICAgICBhcnJvd3M6ICdibGFjaydcclxuICAgIH0sXHJcbiAgICBpY29uU2l6ZTogJ3hsJyxcclxuICAgIGhpZGVMYWJlbHM6IGZhbHNlLFxyXG4gICAgdmVydGljYWw6IGZhbHNlLFxyXG4gICAgc2hvd0NvbXBsZXRlZENvdW50OiBmYWxzZSxcclxuICAgIHNlbGVjdGVkSXRlbTogMVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGVwcGVyOyJdfQ==