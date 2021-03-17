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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
        var maxContainerPos = (vertical ? 120 : 200) * (steps.length - stepsPerPage);

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
          onClick: !step.disabled && _this5.selectStep(index, step.id),
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
              width: isArrowsNeeded && !vertical ? stepsPerPage * 200 : '100%',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsIk1hdGgiLCJtaW4iLCJzdGVwcyIsImxlbmd0aCIsInNlbGVjdGVkSXRlbSIsInN0ZXBzUGVyUGFnZSIsImNvbnRhaW5lclJpZ2h0UG9zIiwiY29udGFpbmVyQm90dG9tUG9zIiwiaXNBcnJvd3NOZWVkZWQiLCJzdGVwcGVyQ29udGFpbmVyUmVmIiwiYXJyb3dSZWYiLCJ1cGRhdGVTdGVwc1BlclBhZ2VBbW91bnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidmVydGljYWwiLCJjdXJyQXJyb3dzU2l6ZSIsImNsaWVudFdpZHRoIiwiZmxvb3IiLCJzZXRTdGF0ZSIsImluZGV4IiwiaWQiLCJvblN0ZXBDbGljayIsImRpcmVjdGlvbiIsIm5ld0NvbnRhaW5lclBvc1ZhbHVlIiwibWF4Q29udGFpbmVyUG9zIiwibWF4IiwiaGlkZUxhYmVscyIsImljb24iLCJwYWxldHRlIiwiaWNvblNpemUiLCJtYXAiLCJzdGVwIiwiaXNTZWxlY3RlZCIsImlzQmVmb3JlU2VsZWN0ZWQiLCJpY29uQ29sb3IiLCJwcm9ncmVzcyIsImZpbmlzaGVkIiwidW5maW5pc2hlZCIsImRpc2FibGVkIiwic2VsZWN0U3RlcCIsImNvbXBsZXRlZENvdW50ZXIiLCJlbG0iLCJvbkFycm93Q2xpY2siLCJhcnJvd3MiLCJ3aWR0aCIsImhlaWdodCIsInJpZ2h0IiwiYm90dG9tIiwicmVuZGVyU3RlcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsImNpcmNsZSIsImxpbmsiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7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LElBQUFBLEtBQUssRUFBRSxFQVBGO0FBUUxuQixJQUFBQSxNQUFNLEVBQUU7QUFSSCxHQUZVO0FBWW5CZCxFQUFBQSxRQUFRLEVBQUUsSUFaUztBQWFuQkgsRUFBQUEsVUFBVSxFQUFFLEtBYk87QUFjbkJaLEVBQUFBLFFBQVEsRUFBRSxLQWRTO0FBZW5CMEIsRUFBQUEsZ0JBQWdCLEVBQUUsS0FmQztBQWdCbkJwQyxFQUFBQSxZQUFZLEVBQUU7QUFoQkssQ0FBdkI7ZUFtQmVSLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RlcCBmcm9tICcuL1N0ZXAvU3RlcCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNzc1ZhcmlhYmxlcyB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuXHJcbmNsYXNzIFN0ZXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IE1hdGgubWluKHByb3BzLnN0ZXBzLmxlbmd0aCAtIDEsIHByb3BzLnNlbGVjdGVkSXRlbSAtIDEpLFxyXG4gICAgICAgICAgICBzdGVwc1BlclBhZ2U6IDAsXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclJpZ2h0UG9zOiAwLFxyXG4gICAgICAgICAgICBjb250YWluZXJCb3R0b21Qb3M6IDAsXHJcbiAgICAgICAgICAgIGlzQXJyb3dzTmVlZGVkOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdGVwcGVyQ29udGFpbmVyUmVmID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hcnJvd1JlZiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RlcHNQZXJQYWdlQW1vdW50KCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RlcHNQZXJQYWdlQW1vdW50KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGVwc1BlclBhZ2VBbW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgeyB2ZXJ0aWNhbCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgY3VyckFycm93c1NpemUgPSB0aGlzLnN0YXRlLmlzQXJyb3dzTmVlZGVkID8gdGhpcy5hcnJvd1JlZj8uY2xpZW50V2lkdGggKiAyIDogMDtcclxuICAgICAgICBjb25zdCBzdGVwc1BlclBhZ2UgPSBNYXRoLmZsb29yKCh0aGlzLnN0ZXBwZXJDb250YWluZXJSZWZbdmVydGljYWwgPyAnY2xpZW50SGVpZ2h0JyA6ICdjbGllbnRXaWR0aCddIC0gY3VyckFycm93c1NpemUpIC8gKHZlcnRpY2FsID8gMTIwIDogMjAwKSkgfHwgMTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHN0ZXBzUGVyUGFnZSxcclxuICAgICAgICAgICAgaXNBcnJvd3NOZWVkZWQ6IHN0ZXBzUGVyUGFnZSA8IHRoaXMucHJvcHMuc3RlcHMubGVuZ3RoXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFN0ZXAoaW5kZXgsIGlkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25TdGVwQ2xpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN0ZXBDbGljayh7IGluZGV4LCBpZCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGluZGV4XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQXJyb3dDbGljayhkaXJlY3Rpb24pIHtcclxuICAgICAgICBjb25zdCB7IHN0ZXBzUGVyUGFnZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IHN0ZXBzLCB2ZXJ0aWNhbCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Q29udGFpbmVyUG9zVmFsdWUgPSB0aGlzLnN0YXRlW3ZlcnRpY2FsID8gJ2NvbnRhaW5lckJvdHRvbVBvcycgOiAnY29udGFpbmVyUmlnaHRQb3MnXVxyXG4gICAgICAgICAgICAgICAgKyAoKHZlcnRpY2FsID8gMTIwIDogMjAwKSAqIGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heENvbnRhaW5lclBvcyA9ICh2ZXJ0aWNhbCA/IDEyMCA6IDIwMCkgKiAoc3RlcHMubGVuZ3RoIC0gc3RlcHNQZXJQYWdlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgW3ZlcnRpY2FsID8gJ2NvbnRhaW5lckJvdHRvbVBvcycgOiAnY29udGFpbmVyUmlnaHRQb3MnXTpcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihNYXRoLm1heChuZXdDb250YWluZXJQb3NWYWx1ZSwgMCksIG1heENvbnRhaW5lclBvcylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclN0ZXBzKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RlcHMsIGhpZGVMYWJlbHMsIHBhbGV0dGU6IHsgaWNvbiB9LCBpY29uU2l6ZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBzdGVwcy5tYXAoKHN0ZXAsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWQgPT09IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNCZWZvcmVTZWxlY3RlZCA9IHNlbGVjdGVkID4gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uQ29sb3IgPSAoaXNTZWxlY3RlZCB8fCBpc0JlZm9yZVNlbGVjdGVkKVxyXG4gICAgICAgICAgICAgICAgJiYgKHN0ZXAucHJvZ3Jlc3MgIT09ICdub25lJyAmJiBzdGVwLnByb2dyZXNzICE9PSAncGFydGlhbCcpXHJcbiAgICAgICAgICAgICAgICB8fCBzdGVwLnByb2dyZXNzID09PSAnZG9uZSdcclxuICAgICAgICAgICAgICAgICAgICA/IChpY29uLmZpbmlzaGVkIHx8ICd3aGl0ZScpIDogKGljb24udW5maW5pc2hlZCB8fCAnYmxhY2snKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwcy1pdGVtJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLXNlbGVjdGVkJzogaXNTZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLWJlZm9yZS1zZWxlY3RlZCc6IGlzQmVmb3JlU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1kaXNhYmxlZCc6IHN0ZXAuZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17J3N0ZXAnICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyFzdGVwLmRpc2FibGVkICYmIHRoaXMuc2VsZWN0U3RlcChpbmRleCwgc3RlcC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RlcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbG9yPXtpY29uQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uU2l6ZT17aWNvblNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXtzdGVwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUxhYmVsPXtoaWRlTGFiZWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmVmb3JlU2VsZWN0ZWQ9e2lzQmVmb3JlU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHBhbGV0dGUsIHZlcnRpY2FsLCBjb21wbGV0ZWRDb3VudGVyLCBzdGVwcywgaWNvblNpemUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZCwgY29udGFpbmVyUmlnaHRQb3MsIGNvbnRhaW5lckJvdHRvbVBvcywgc3RlcHNQZXJQYWdlLCBpc0Fycm93c05lZWRlZCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAnc3RlcHBlcic6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJy0tdmVydGljYWwnOiB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57Y3JlYXRlQ3NzVmFyaWFibGVzKHBhbGV0dGUsIGljb25TaXplKX08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0ZXBwZXItY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9e2VsbSA9PiB0aGlzLnN0ZXBwZXJDb250YWluZXJSZWYgPSBlbG19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQXJyb3dzTmVlZGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJvdyBhcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFycm93Q2xpY2soLTEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsbSA9PiB0aGlzLmFycm93UmVmID0gZWxtfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3ZlcnRpY2FsID8gXCJjaGV2cm9uLXVwXCIgOiBcImNoZXZyb24tbGVmdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtwYWxldHRlLmFycm93c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdGVwcy1zaG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaXNBcnJvd3NOZWVkZWQgJiYgIXZlcnRpY2FsID8gc3RlcHNQZXJQYWdlICogMjAwIDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzdGVwc1BlclBhZ2UgKiAxMjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0ZXBzLWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpc0Fycm93c05lZWRlZCAmJiAhdmVydGljYWwgPyBzdGVwcy5sZW5ndGggKiAyMDAgOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHZlcnRpY2FsID8gMCA6IGNvbnRhaW5lclJpZ2h0UG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogdmVydGljYWwgPyBjb250YWluZXJCb3R0b21Qb3MgOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdGVwcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2lzQXJyb3dzTmVlZGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJvdyBhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BcnJvd0NsaWNrKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3ZlcnRpY2FsID8gXCJjaGV2cm9uLWRvd25cIiA6IFwiY2hldnJvbi1yaWdodFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtwYWxldHRlLmFycm93c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwcGVyLWNvdW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29tcGxldGVkQ291bnRlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGAke3NlbGVjdGVkICsgMX0vJHtzdGVwcy5sZW5ndGh9IENvbXBsZXRlZGBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5TdGVwcGVyLnByb3BUeXBlcyA9IHtcclxuICAgIHN0ZXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIHBhbGV0dGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpY29uU2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGhpZGVMYWJlbHM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgdmVydGljYWw6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgY29tcGxldGVkQ291bnRlcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvblN0ZXBDbGljazogUHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuU3RlcHBlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzdGVwczogW10sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBmaW5pc2hlZDogJycsXHJcbiAgICAgICAgICAgIHVuZmluaXNoZWQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaXJjbGU6ICcnLFxyXG4gICAgICAgIGxpbms6ICcnLFxyXG4gICAgICAgIGxhYmVsOiAnJyxcclxuICAgICAgICBhcnJvd3M6ICdibGFjaydcclxuICAgIH0sXHJcbiAgICBpY29uU2l6ZTogJ3NtJyxcclxuICAgIGhpZGVMYWJlbHM6IGZhbHNlLFxyXG4gICAgdmVydGljYWw6IGZhbHNlLFxyXG4gICAgY29tcGxldGVkQ291bnRlcjogZmFsc2UsXHJcbiAgICBzZWxlY3RlZEl0ZW06IDFcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RlcHBlcjsiXX0=