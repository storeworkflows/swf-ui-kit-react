"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Stepper = _interopRequireDefault(require("./Stepper.scss"));

var _Step = _interopRequireDefault(require("./Step/Step"));

var _Arrows = _interopRequireDefault(require("./Arrows/Arrows"));

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
      containerWidth: '100%',
      containerRightPos: 0
    };
    _this.stepperRef = false;
    _this.stepperItemRef = false;
    return _this;
  }

  _createClass(Stepper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        containerWidth: 200 * this.props.steps.length,
        stepsPerPage: Math.floor(this.stepperRef.clientWidth / 200)
      });
    }
  }, {
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
    key: "onArrowClick",
    value: function onArrowClick(direction) {
      var _this3 = this;

      var _this$state = this.state,
          containerRightPos = _this$state.containerRightPos,
          stepsPerPage = _this$state.stepsPerPage;
      var steps = this.props.steps;
      return function () {
        var newContainerRightValue = containerRightPos + 200 * direction;
        var maxRightPos = 200 * (steps.length - stepsPerPage);

        _this3.setState({
          containerRightPos: Math.min(Math.max(newContainerRightValue, 0), maxRightPos)
        });
      };
    }
  }, {
    key: "renderSteps",
    value: function renderSteps() {
      var _this4 = this;

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
            onClick: !step.disabled && _this4.selectStep(index, step.id),
            ref: function ref(elm) {
              return _this4.stepperItemRef = elm;
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
      var _this5 = this;

      var _this$props2 = this.props,
          palette = _this$props2.palette,
          vertical = _this$props2.vertical,
          showCompletedCount = _this$props2.showCompletedCount,
          steps = _this$props2.steps,
          arrows = _this$props2.arrows;
      var _this$state2 = this.state,
          selected = _this$state2.selected,
          containerWidth = _this$state2.containerWidth,
          containerRightPos = _this$state2.containerRightPos,
          stepsPerPage = _this$state2.stepsPerPage;
      var isArrowsNeeded = stepsPerPage < steps.length;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: (0, _utils.createCssVariables)(palette) + _Stepper["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "stepper",
          ref: function ref(elm) {
            return _this5.stepperRef = elm;
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
            className: "stepper-wrapper",
            style: {
              width: stepsPerPage * 200
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: (0, _classnames["default"])({
                'stepper-container': true,
                '--vertical': vertical
              }),
              style: {
                width: containerWidth,
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
  onStepClick: _propTypes["default"].func,
  stepsPerPage: _propTypes["default"].number
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
  iconSize: 'sm',
  hideLabels: false,
  vertical: false,
  showCompletedCount: false,
  selectedItem: 1
};
var _default = Stepper;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsIk1hdGgiLCJtaW4iLCJzdGVwcyIsImxlbmd0aCIsInNlbGVjdGVkSXRlbSIsInN0ZXBzUGVyUGFnZSIsImNvbnRhaW5lcldpZHRoIiwiY29udGFpbmVyUmlnaHRQb3MiLCJzdGVwcGVyUmVmIiwic3RlcHBlckl0ZW1SZWYiLCJzZXRTdGF0ZSIsImZsb29yIiwiY2xpZW50V2lkdGgiLCJpbmRleCIsImlkIiwib25TdGVwQ2xpY2siLCJkaXJlY3Rpb24iLCJuZXdDb250YWluZXJSaWdodFZhbHVlIiwibWF4UmlnaHRQb3MiLCJtYXgiLCJoaWRlTGFiZWxzIiwiaWNvbiIsInBhbGV0dGUiLCJpY29uU2l6ZSIsIm1hcCIsInN0ZXAiLCJpc1NlbGVjdGVkIiwiaXNCZWZvcmVTZWxlY3RlZCIsImljb25Db2xvciIsInByb2dyZXNzIiwiZmluaXNoZWQiLCJ1bmZpbmlzaGVkIiwiZGlzYWJsZWQiLCJzZWxlY3RTdGVwIiwiZWxtIiwibGFiZWwiLCJzdWJsYWJlbCIsInZlcnRpY2FsIiwic2hvd0NvbXBsZXRlZENvdW50IiwiYXJyb3dzIiwiaXNBcnJvd3NOZWVkZWQiLCJzdHlsZXMiLCJvbkFycm93Q2xpY2siLCJjb2xvciIsInNpemUiLCJ3aWR0aCIsInJpZ2h0IiwicmVuZGVyU3RlcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsImNpcmNsZSIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7OztBQUNGLG1CQUFZQyxL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SyxFQUFFLEVBRFk7QUFFbkJvQixFQUFBQSxPQUFPLEVBQUU7QUFDTEQsSUFBQUEsSUFBSSxFQUFFO0FBQ0ZTLE1BQUFBLFFBQVEsRUFBRSxFQURSO0FBRUZDLE1BQUFBLFVBQVUsRUFBRTtBQUZWLEtBREQ7QUFLTDRCLElBQUFBLE1BQU0sRUFBRSxFQUxIO0FBTUxDLElBQUFBLElBQUksRUFBRSxFQU5EO0FBT0x6QixJQUFBQSxLQUFLLEVBQUU7QUFQRixHQUZVO0FBV25CSSxFQUFBQSxNQUFNLEVBQUU7QUFDSkksSUFBQUEsS0FBSyxFQUFFLE9BREg7QUFFSkMsSUFBQUEsSUFBSSxFQUFFO0FBRkYsR0FYVztBQWVuQnJCLEVBQUFBLFFBQVEsRUFBRSxJQWZTO0FBZ0JuQkgsRUFBQUEsVUFBVSxFQUFFLEtBaEJPO0FBaUJuQmlCLEVBQUFBLFFBQVEsRUFBRSxLQWpCUztBQWtCbkJDLEVBQUFBLGtCQUFrQixFQUFFLEtBbEJEO0FBbUJuQmxDLEVBQUFBLFlBQVksRUFBRTtBQW5CSyxDQUF2QjtlQXNCZVIsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU3RlcHBlci5zY3NzXCI7XHJcbmltcG9ydCBTdGVwIGZyb20gJy4vU3RlcC9TdGVwJztcclxuaW1wb3J0IEFycm93cyBmcm9tIFwiLi9BcnJvd3MvQXJyb3dzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNzc1ZhcmlhYmxlcyB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuXHJcbmNsYXNzIFN0ZXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IE1hdGgubWluKHByb3BzLnN0ZXBzLmxlbmd0aCAtIDEsIHByb3BzLnNlbGVjdGVkSXRlbSAtIDEpLFxyXG4gICAgICAgICAgICBzdGVwc1BlclBhZ2U6IDAsXHJcbiAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclJpZ2h0UG9zOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0ZXBwZXJSZWYgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0ZXBwZXJJdGVtUmVmID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiAyMDAgKiB0aGlzLnByb3BzLnN0ZXBzLmxlbmd0aCxcclxuICAgICAgICAgICAgc3RlcHNQZXJQYWdlOiBNYXRoLmZsb29yKHRoaXMuc3RlcHBlclJlZi5jbGllbnRXaWR0aCAvIDIwMClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RTdGVwKGluZGV4LCBpZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uU3RlcENsaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TdGVwQ2xpY2soeyBpbmRleCwgaWQgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBpbmRleFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkFycm93Q2xpY2soZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgeyBjb250YWluZXJSaWdodFBvcywgc3RlcHNQZXJQYWdlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHsgc3RlcHMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbnRhaW5lclJpZ2h0VmFsdWUgPSBjb250YWluZXJSaWdodFBvcyArICgyMDAgKiBkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBtYXhSaWdodFBvcyA9IDIwMCAqIChzdGVwcy5sZW5ndGggLSBzdGVwc1BlclBhZ2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJSaWdodFBvczogTWF0aC5taW4oTWF0aC5tYXgobmV3Q29udGFpbmVyUmlnaHRWYWx1ZSwgMCksIG1heFJpZ2h0UG9zKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTdGVwcygpIHtcclxuICAgICAgICBjb25zdCB7IHN0ZXBzLCBoaWRlTGFiZWxzLCBwYWxldHRlOiB7IGljb24gfSwgaWNvblNpemUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgc3RlcHMubWFwKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkID09PSBpbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQmVmb3JlU2VsZWN0ZWQgPSBzZWxlY3RlZCA+IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbkNvbG9yID0gKGlzU2VsZWN0ZWQgfHwgaXNCZWZvcmVTZWxlY3RlZClcclxuICAgICAgICAgICAgICAgICYmIChzdGVwLnByb2dyZXNzICE9PSAnbm9uZScgJiYgc3RlcC5wcm9ncmVzcyAhPT0gJ3BhcnRpYWwnKVxyXG4gICAgICAgICAgICAgICAgfHwgc3RlcC5wcm9ncmVzcyA9PT0gJ2RvbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoaWNvbi5maW5pc2hlZCB8fCAnd2hpdGUnKSA6IChpY29uLnVuZmluaXNoZWQgfHwgJ2JsYWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXsnc3RlcCcgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBwZXItaXRlbSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLWJlZm9yZS1zZWxlY3RlZCc6IGlzQmVmb3JlU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tZGlzYWJsZWQnOiBzdGVwLmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyFzdGVwLmRpc2FibGVkICYmIHRoaXMuc2VsZWN0U3RlcChpbmRleCwgc3RlcC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsbSA9PiB0aGlzLnN0ZXBwZXJJdGVtUmVmID0gZWxtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RlcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3N0ZXAuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29sb3I9e2ljb25Db2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uU2l6ZT17aWNvblNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3N0ZXAubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibGFiZWw9e3N0ZXAuc3VibGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3N0ZXAucHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUxhYmVsPXtoaWRlTGFiZWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFsZXR0ZSwgdmVydGljYWwsIHNob3dDb21wbGV0ZWRDb3VudCwgc3RlcHMsIGFycm93cyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IHNlbGVjdGVkLCBjb250YWluZXJXaWR0aCwgY29udGFpbmVyUmlnaHRQb3MsIHN0ZXBzUGVyUGFnZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNBcnJvd3NOZWVkZWQgPSBzdGVwc1BlclBhZ2UgPCBzdGVwcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e2NyZWF0ZUNzc1ZhcmlhYmxlcyhwYWxldHRlKSArIHN0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0ZXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMuc3RlcHBlclJlZiA9IGVsbX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXNBcnJvd3NOZWVkZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFycm93IGFycm93LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQXJyb3dDbGljaygtMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNoZXZyb24tbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2Fycm93cy5jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXthcnJvd3Muc2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdGVwcGVyLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHN0ZXBzUGVyUGFnZSAqIDIwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHBlci1jb250YWluZXInOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLXZlcnRpY2FsJzogdmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY29udGFpbmVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IGNvbnRhaW5lclJpZ2h0UG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdGVwcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2lzQXJyb3dzTmVlZGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJvdyBhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BcnJvd0NsaWNrKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjaGV2cm9uLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17YXJyb3dzLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e2Fycm93cy5zaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7Lyp7aXNBcnJvd3NOZWVkZWQgJiYqL31cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8QXJyb3dzKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qICAgIG9uQXJyb3dDbGljaz17dGhpcy5vbkFycm93Q2xpY2soKX0qL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogICAgYXJyb3dzQ29sb3I9e2Fycm93cy5jb2xvcn0qL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogICAgYXJyb3dzU2l6ZT17YXJyb3dzLnNpemV9Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qLz4qL31cclxuICAgICAgICAgICAgICAgICAgICB7Lyp9Ki99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwic3RlcHBlci1jb3VudGVyXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qICAgIHtzaG93Q29tcGxldGVkQ291bnQgJiYqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogICAgYCR7c2VsZWN0ZWQgKyAxfS8ke3N0ZXBzLmxlbmd0aH0gQ29tcGxldGVkYCovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiAgICB9Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuU3RlcHBlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBzdGVwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBwYWxldHRlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaWNvblNpemU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBhcnJvd3M6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBoaWRlTGFiZWxzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNob3dDb21wbGV0ZWRDb3VudDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvblN0ZXBDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBzdGVwc1BlclBhZ2U6IFByb3BUeXBlcy5udW1iZXJcclxufVxyXG5cclxuU3RlcHBlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzdGVwczogW10sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBmaW5pc2hlZDogJycsXHJcbiAgICAgICAgICAgIHVuZmluaXNoZWQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaXJjbGU6ICcnLFxyXG4gICAgICAgIGxpbms6ICcnLFxyXG4gICAgICAgIGxhYmVsOiAnJ1xyXG4gICAgfSxcclxuICAgIGFycm93czoge1xyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIHNpemU6ICdtZCdcclxuICAgIH0sXHJcbiAgICBpY29uU2l6ZTogJ3NtJyxcclxuICAgIGhpZGVMYWJlbHM6IGZhbHNlLFxyXG4gICAgdmVydGljYWw6IGZhbHNlLFxyXG4gICAgc2hvd0NvbXBsZXRlZENvdW50OiBmYWxzZSxcclxuICAgIHNlbGVjdGVkSXRlbTogMVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGVwcGVyOyJdfQ==