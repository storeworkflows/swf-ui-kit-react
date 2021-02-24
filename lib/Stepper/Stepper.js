"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Stepper = _interopRequireDefault(require("./Stepper.scss"));

var _Step = _interopRequireDefault(require("./Step/Step"));

var _Link = _interopRequireDefault(require("./Link/Link"));

var _Arrows = _interopRequireDefault(require("./Arrows/Arrows"));

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
      selected: Math.min(props.steps.length - 1, props.selectedItem - 1),
      itemWidth: 0,
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
        containerWidth: this.stepperRef.clientWidth / this.props.stepsPerPage * this.props.steps.length || '100%'
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.stepperItemRef.clientWidth !== prevState.itemWidth) {
        this.setState({
          itemWidth: this.stepperItemRef.clientWidth
        });
      }
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
    value: function onArrowClick() {
      var _this3 = this;

      var _this$state = this.state,
          containerRightPos = _this$state.containerRightPos,
          itemWidth = _this$state.itemWidth;
      var steps = this.props.steps;
      return function (direction) {
        var newContainerRightValue = containerRightPos + itemWidth * 2 * direction;
        var maxRightPos = itemWidth * (steps.length * 2 - 1) - _this3.stepperRef.clientWidth + 40;

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
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react["default"].Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
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
      var _this5 = this;

      var _this$props2 = this.props,
          palette = _this$props2.palette,
          vertical = _this$props2.vertical,
          showCompletedCount = _this$props2.showCompletedCount,
          steps = _this$props2.steps,
          stepsPerPage = _this$props2.stepsPerPage;
      var _this$state2 = this.state,
          selected = _this$state2.selected,
          containerWidth = _this$state2.containerWidth,
          containerRightPos = _this$state2.containerRightPos;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "stepper",
        ref: function ref(elm) {
          return _this5.stepperRef = elm;
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: (0, _utils.createCssVariables)(palette) + _Stepper["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames["default"])({
            'stepper-container': true,
            '--vertical': vertical
          }),
          style: {
            width: containerWidth,
            right: containerRightPos
          },
          children: this.renderSteps()
        }), stepsPerPage && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Arrows["default"], {
          onArrowClick: this.onArrowClick()
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
  iconSize: 'sm',
  hideLabels: false,
  vertical: false,
  showCompletedCount: false,
  selectedItem: 1
};
var _default = Stepper;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsIk1hdGgiLCJtaW4iLCJzdGVwcyIsImxlbmd0aCIsInNlbGVjdGVkSXRlbSIsIml0ZW1XaWR0aCIsImNvbnRhaW5lcldpZHRoIiwiY29udGFpbmVyUmlnaHRQb3MiLCJzdGVwcGVyUmVmIiwic3RlcHBlckl0ZW1SZWYiLCJzZXRTdGF0ZSIsImNsaWVudFdpZHRoIiwic3RlcHNQZXJQYWdlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJpbmRleCIsImlkIiwib25TdGVwQ2xpY2siLCJkaXJlY3Rpb24iLCJuZXdDb250YWluZXJSaWdodFZhbHVlIiwibWF4UmlnaHRQb3MiLCJtYXgiLCJoaWRlTGFiZWxzIiwiaWNvbiIsInBhbGV0dGUiLCJpY29uU2l6ZSIsIm1hcCIsInN0ZXAiLCJpc1NlbGVjdGVkIiwiaXNCZWZvcmVTZWxlY3RlZCIsImljb25Db2xvciIsInByb2dyZXNzIiwiZmluaXNoZWQiLCJ1bmZpbmlzaGVkIiwiZGlzYWJsZWQiLCJzZWxlY3RTdGVwIiwiZWxtIiwibGFiZWwiLCJzdWJsYWJlbCIsInZlcnRpY2FsIiwic2hvd0NvbXBsZXRlZENvdW50Iiwic3R5bGVzIiwid2lkdGgiLCJyaWdodCIsInJlbmRlclN0ZXBzIiwib25BcnJvd0NsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0Iiwic3RyaW5nIiwiYm9vbCIsIm51bWJlciIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJjaXJjbGUiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsTzs7Ozs7QUFDRixtQkFBWUMsS0FB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SyxFQUFFO0FBUEYsR0FGVTtBQVduQlosRUFBQUEsUUFBUSxFQUFFLElBWFM7QUFZbkJILEVBQUFBLFVBQVUsRUFBRSxLQVpPO0FBYW5CaUIsRUFBQUEsUUFBUSxFQUFFLEtBYlM7QUFjbkJDLEVBQUFBLGtCQUFrQixFQUFFLEtBZEQ7QUFlbkJyQyxFQUFBQSxZQUFZLEVBQUU7QUFmSyxDQUF2QjtlQWtCZVIsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU3RlcHBlci5zY3NzXCI7XHJcbmltcG9ydCBTdGVwIGZyb20gJy4vU3RlcC9TdGVwJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rL0xpbmsnO1xyXG5pbXBvcnQgQXJyb3dzIGZyb20gXCIuL0Fycm93cy9BcnJvd3NcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ3NzVmFyaWFibGVzIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmNsYXNzIFN0ZXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IE1hdGgubWluKHByb3BzLnN0ZXBzLmxlbmd0aCAtIDEsIHByb3BzLnNlbGVjdGVkSXRlbSAtIDEpLFxyXG4gICAgICAgICAgICBpdGVtV2lkdGg6IDAsXHJcbiAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclJpZ2h0UG9zOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0ZXBwZXJSZWYgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0ZXBwZXJJdGVtUmVmID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiB0aGlzLnN0ZXBwZXJSZWYuY2xpZW50V2lkdGggLyB0aGlzLnByb3BzLnN0ZXBzUGVyUGFnZSAqIHRoaXMucHJvcHMuc3RlcHMubGVuZ3RoIHx8ICcxMDAlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGVwcGVySXRlbVJlZi5jbGllbnRXaWR0aCAhPT0gcHJldlN0YXRlLml0ZW1XaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1XaWR0aDogdGhpcy5zdGVwcGVySXRlbVJlZi5jbGllbnRXaWR0aCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFN0ZXAoaW5kZXgsIGlkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25TdGVwQ2xpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN0ZXBDbGljayh7IGluZGV4LCBpZCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGluZGV4XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQXJyb3dDbGljaygpIHtcclxuICAgICAgICBjb25zdCB7IGNvbnRhaW5lclJpZ2h0UG9zLCBpdGVtV2lkdGggfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgeyBzdGVwcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Q29udGFpbmVyUmlnaHRWYWx1ZSA9IGNvbnRhaW5lclJpZ2h0UG9zICsgKGl0ZW1XaWR0aCAqIDIgKiBkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBtYXhSaWdodFBvcyA9IChpdGVtV2lkdGggKiAoc3RlcHMubGVuZ3RoICogMiAtIDEpIC0gdGhpcy5zdGVwcGVyUmVmLmNsaWVudFdpZHRoICsgNDApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJSaWdodFBvczogTWF0aC5taW4oTWF0aC5tYXgobmV3Q29udGFpbmVyUmlnaHRWYWx1ZSwgMCksIG1heFJpZ2h0UG9zKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTdGVwcygpIHtcclxuICAgICAgICBjb25zdCB7IHN0ZXBzLCBoaWRlTGFiZWxzLCBwYWxldHRlOiB7IGljb24gfSwgaWNvblNpemUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgc3RlcHMubWFwKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkID09PSBpbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQmVmb3JlU2VsZWN0ZWQgPSBzZWxlY3RlZCA+IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbkNvbG9yID0gKGlzU2VsZWN0ZWQgfHwgaXNCZWZvcmVTZWxlY3RlZClcclxuICAgICAgICAgICAgICAgICYmIChzdGVwLnByb2dyZXNzICE9PSAnbm9uZScgJiYgc3RlcC5wcm9ncmVzcyAhPT0gJ3BhcnRpYWwnKVxyXG4gICAgICAgICAgICAgICAgfHwgc3RlcC5wcm9ncmVzcyA9PT0gJ2RvbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoaWNvbi5maW5pc2hlZCB8fCAnd2hpdGUnKSA6IChpY29uLnVuZmluaXNoZWQgfHwgJ2JsYWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXsnc3RlcCcgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBwZXItaXRlbSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLWJlZm9yZS1zZWxlY3RlZCc6IGlzQmVmb3JlU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tZGlzYWJsZWQnOiBzdGVwLmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyFzdGVwLmRpc2FibGVkICYmIHRoaXMuc2VsZWN0U3RlcChpbmRleCwgc3RlcC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsbSA9PiB0aGlzLnN0ZXBwZXJJdGVtUmVmID0gZWxtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RlcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3N0ZXAuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29sb3I9e2ljb25Db2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uU2l6ZT17aWNvblNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3N0ZXAubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibGFiZWw9e3N0ZXAuc3VibGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3N0ZXAucHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUxhYmVsPXtoaWRlTGFiZWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoaW5kZXggIT09IHN0ZXBzLmxlbmd0aCAtIDEpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBwZXItaXRlbSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tYmVmb3JlLXNlbGVjdGVkJzogaXNCZWZvcmVTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYWxldHRlLCB2ZXJ0aWNhbCwgc2hvd0NvbXBsZXRlZENvdW50LCBzdGVwcywgc3RlcHNQZXJQYWdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgc2VsZWN0ZWQsIGNvbnRhaW5lcldpZHRoLCBjb250YWluZXJSaWdodFBvcyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzdGVwcGVyJ1xyXG4gICAgICAgICAgICAgICAgcmVmPXtlbG0gPT4gdGhpcy5zdGVwcGVyUmVmID0gZWxtfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e2NyZWF0ZUNzc1ZhcmlhYmxlcyhwYWxldHRlKSArIHN0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwcGVyLWNvbnRhaW5lcic6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICctLXZlcnRpY2FsJzogdmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY29udGFpbmVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBjb250YWluZXJSaWdodFBvc1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU3RlcHMoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3N0ZXBzUGVyUGFnZSAmJlxyXG4gICAgICAgICAgICAgICAgPEFycm93c1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQXJyb3dDbGljaz17dGhpcy5vbkFycm93Q2xpY2soKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXBwZXItY291bnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93Q29tcGxldGVkQ291bnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBgJHtzZWxlY3RlZCArIDF9LyR7c3RlcHMubGVuZ3RofSBDb21wbGV0ZWRgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuU3RlcHBlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBzdGVwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBwYWxldHRlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaWNvblNpemU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBoaWRlTGFiZWxzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNob3dDb21wbGV0ZWRDb3VudDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvblN0ZXBDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBzdGVwc1BlclBhZ2U6IFByb3BUeXBlcy5udW1iZXJcclxufVxyXG5cclxuU3RlcHBlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzdGVwczogW10sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBmaW5pc2hlZDogJycsXHJcbiAgICAgICAgICAgIHVuZmluaXNoZWQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaXJjbGU6ICcnLFxyXG4gICAgICAgIGxpbms6ICcnLFxyXG4gICAgICAgIGxhYmVsOiAnJ1xyXG4gICAgfSxcclxuICAgIGljb25TaXplOiAnc20nLFxyXG4gICAgaGlkZUxhYmVsczogZmFsc2UsXHJcbiAgICB2ZXJ0aWNhbDogZmFsc2UsXHJcbiAgICBzaG93Q29tcGxldGVkQ291bnQ6IGZhbHNlLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiAxXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0ZXBwZXI7Il19