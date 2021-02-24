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
    value: function onArrowClick(containerRightPos, itemWidth, stepsAmount, stepperWidth) {
      var _this3 = this;

      return function (direction) {
        var newContainerRightValue = containerRightPos + itemWidth * 2 * direction;

        _this3.setState({
          containerRightPos: Math.min(Math.max(newContainerRightValue, 0), itemWidth * (stepsAmount * 2 - 1) - stepperWidth + 40)
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
      var _this$state = this.state,
          selected = _this$state.selected,
          containerWidth = _this$state.containerWidth,
          containerRightPos = _this$state.containerRightPos,
          itemWidth = _this$state.itemWidth;
      var containerStyle = {
        width: containerWidth,
        right: containerRightPos
      };
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
          style: containerStyle,
          children: this.renderSteps()
        }), stepsPerPage && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Arrows["default"], {
          onArrowClick: this.onArrowClick(containerRightPos, itemWidth, steps.length, this.stepperRef.clientWidth)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsIk1hdGgiLCJtaW4iLCJzdGVwcyIsImxlbmd0aCIsInNlbGVjdGVkSXRlbSIsIml0ZW1XaWR0aCIsImNvbnRhaW5lcldpZHRoIiwiY29udGFpbmVyUmlnaHRQb3MiLCJzdGVwcGVyUmVmIiwic3RlcHBlckl0ZW1SZWYiLCJzZXRTdGF0ZSIsImNsaWVudFdpZHRoIiwic3RlcHNQZXJQYWdlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJpbmRleCIsImlkIiwib25TdGVwQ2xpY2siLCJzdGVwc0Ftb3VudCIsInN0ZXBwZXJXaWR0aCIsImRpcmVjdGlvbiIsIm5ld0NvbnRhaW5lclJpZ2h0VmFsdWUiLCJtYXgiLCJoaWRlTGFiZWxzIiwiaWNvbiIsInBhbGV0dGUiLCJpY29uU2l6ZSIsIm1hcCIsInN0ZXAiLCJpc1NlbGVjdGVkIiwiaXNCZWZvcmVTZWxlY3RlZCIsImljb25Db2xvciIsInByb2dyZXNzIiwiZmluaXNoZWQiLCJ1bmZpbmlzaGVkIiwiZGlzYWJsZWQiLCJzZWxlY3RTdGVwIiwiZWxtIiwibGFiZWwiLCJzdWJsYWJlbCIsInZlcnRpY2FsIiwic2hvd0NvbXBsZXRlZENvdW50IiwiY29udGFpbmVyU3R5bGUiLCJ3aWR0aCIsInJpZ2h0Iiwic3R5bGVzIiwicmVuZGVyU3RlcHMiLCJvbkFycm93Q2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsImNpcmNsZSIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBQSxJQUFJLEVBQUUsRUFORDtBQU9MdEIsSUFBQUEsS0FBSyxFQUFFO0FBUEYsR0FGVTtBQVduQlosRUFBQUEsUUFBUSxFQUFFLElBWFM7QUFZbkJILEVBQUFBLFVBQVUsRUFBRSxLQVpPO0FBYW5CaUIsRUFBQUEsUUFBUSxFQUFFLEtBYlM7QUFjbkJDLEVBQUFBLGtCQUFrQixFQUFFLEtBZEQ7QUFlbkJ0QyxFQUFBQSxZQUFZLEVBQUU7QUFmSyxDQUF2QjtlQWtCZVIsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU3RlcHBlci5zY3NzXCI7XHJcbmltcG9ydCBTdGVwIGZyb20gJy4vU3RlcC9TdGVwJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rL0xpbmsnO1xyXG5pbXBvcnQgQXJyb3dzIGZyb20gXCIuL0Fycm93cy9BcnJvd3NcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ3NzVmFyaWFibGVzIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmNsYXNzIFN0ZXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IE1hdGgubWluKHByb3BzLnN0ZXBzLmxlbmd0aCAtIDEsIHByb3BzLnNlbGVjdGVkSXRlbSAtIDEpLFxyXG4gICAgICAgICAgICBpdGVtV2lkdGg6IDAsXHJcbiAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclJpZ2h0UG9zOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0ZXBwZXJSZWYgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0ZXBwZXJJdGVtUmVmID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiB0aGlzLnN0ZXBwZXJSZWYuY2xpZW50V2lkdGggLyB0aGlzLnByb3BzLnN0ZXBzUGVyUGFnZSAqIHRoaXMucHJvcHMuc3RlcHMubGVuZ3RoIHx8ICcxMDAlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGVwcGVySXRlbVJlZi5jbGllbnRXaWR0aCAhPT0gcHJldlN0YXRlLml0ZW1XaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1XaWR0aDogdGhpcy5zdGVwcGVySXRlbVJlZi5jbGllbnRXaWR0aCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFN0ZXAoaW5kZXgsIGlkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25TdGVwQ2xpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN0ZXBDbGljayh7IGluZGV4LCBpZCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGluZGV4XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQXJyb3dDbGljayhjb250YWluZXJSaWdodFBvcywgaXRlbVdpZHRoLCBzdGVwc0Ftb3VudCwgc3RlcHBlcldpZHRoKSB7XHJcbiAgICAgICAgcmV0dXJuIChkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Q29udGFpbmVyUmlnaHRWYWx1ZSA9IGNvbnRhaW5lclJpZ2h0UG9zICsgKGl0ZW1XaWR0aCAqIDIgKiBkaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJSaWdodFBvczogTWF0aC5taW4oTWF0aC5tYXgobmV3Q29udGFpbmVyUmlnaHRWYWx1ZSwgMCksIChpdGVtV2lkdGggKiAoc3RlcHNBbW91bnQgKiAyIC0gMSkgLSBzdGVwcGVyV2lkdGggKyA0MCkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclN0ZXBzKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RlcHMsIGhpZGVMYWJlbHMsIHBhbGV0dGU6IHsgaWNvbiB9LCBpY29uU2l6ZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBzdGVwcy5tYXAoKHN0ZXAsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWQgPT09IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNCZWZvcmVTZWxlY3RlZCA9IHNlbGVjdGVkID4gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uQ29sb3IgPSAoaXNTZWxlY3RlZCB8fCBpc0JlZm9yZVNlbGVjdGVkKVxyXG4gICAgICAgICAgICAgICAgJiYgKHN0ZXAucHJvZ3Jlc3MgIT09ICdub25lJyAmJiBzdGVwLnByb2dyZXNzICE9PSAncGFydGlhbCcpXHJcbiAgICAgICAgICAgICAgICB8fCBzdGVwLnByb2dyZXNzID09PSAnZG9uZSdcclxuICAgICAgICAgICAgICAgICAgICA/IChpY29uLmZpbmlzaGVkIHx8ICd3aGl0ZScpIDogKGljb24udW5maW5pc2hlZCB8fCAnYmxhY2snKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9eydzdGVwJyArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHBlci1pdGVtJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1zZWxlY3RlZCc6IGlzU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tYmVmb3JlLXNlbGVjdGVkJzogaXNCZWZvcmVTZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1kaXNhYmxlZCc6IHN0ZXAuZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IXN0ZXAuZGlzYWJsZWQgJiYgdGhpcy5zZWxlY3RTdGVwKGluZGV4LCBzdGVwLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMuc3RlcHBlckl0ZW1SZWYgPSBlbG19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17c3RlcC5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db2xvcj17aWNvbkNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25TaXplPXtpY29uU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17c3RlcC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJsYWJlbD17c3RlcC5zdWJsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcz17c3RlcC5wcm9ncmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTGFiZWw9e2hpZGVMYWJlbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhpbmRleCAhPT0gc3RlcHMubGVuZ3RoIC0gMSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHBlci1pdGVtJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1iZWZvcmUtc2VsZWN0ZWQnOiBpc0JlZm9yZVNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHBhbGV0dGUsIHZlcnRpY2FsLCBzaG93Q29tcGxldGVkQ291bnQsIHN0ZXBzLCBzdGVwc1BlclBhZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZCwgY29udGFpbmVyV2lkdGgsIGNvbnRhaW5lclJpZ2h0UG9zLCBpdGVtV2lkdGggfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogY29udGFpbmVyV2lkdGgsXHJcbiAgICAgICAgICAgIHJpZ2h0OiBjb250YWluZXJSaWdodFBvc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc3RlcHBlcidcclxuICAgICAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMuc3RlcHBlclJlZiA9IGVsbX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntjcmVhdGVDc3NWYXJpYWJsZXMocGFsZXR0ZSkgKyBzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHBlci1jb250YWluZXInOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnLS12ZXJ0aWNhbCc6IHZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2NvbnRhaW5lclN0eWxlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN0ZXBzKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtzdGVwc1BlclBhZ2UgJiZcclxuICAgICAgICAgICAgICAgIDxBcnJvd3NcclxuICAgICAgICAgICAgICAgICAgICBvbkFycm93Q2xpY2s9e3RoaXMub25BcnJvd0NsaWNrKGNvbnRhaW5lclJpZ2h0UG9zLCBpdGVtV2lkdGgsIHN0ZXBzLmxlbmd0aCwgdGhpcy5zdGVwcGVyUmVmLmNsaWVudFdpZHRoKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXBwZXItY291bnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93Q29tcGxldGVkQ291bnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBgJHtzZWxlY3RlZCArIDF9LyR7c3RlcHMubGVuZ3RofSBDb21wbGV0ZWRgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuU3RlcHBlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBzdGVwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBwYWxldHRlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaWNvblNpemU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBoaWRlTGFiZWxzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNob3dDb21wbGV0ZWRDb3VudDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvblN0ZXBDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBzdGVwc1BlclBhZ2U6IFByb3BUeXBlcy5udW1iZXJcclxufVxyXG5cclxuU3RlcHBlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzdGVwczogW10sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBmaW5pc2hlZDogJycsXHJcbiAgICAgICAgICAgIHVuZmluaXNoZWQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaXJjbGU6ICcnLFxyXG4gICAgICAgIGxpbms6ICcnLFxyXG4gICAgICAgIGxhYmVsOiAnJ1xyXG4gICAgfSxcclxuICAgIGljb25TaXplOiAnc20nLFxyXG4gICAgaGlkZUxhYmVsczogZmFsc2UsXHJcbiAgICB2ZXJ0aWNhbDogZmFsc2UsXHJcbiAgICBzaG93Q29tcGxldGVkQ291bnQ6IGZhbHNlLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiAxXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0ZXBwZXI7Il19