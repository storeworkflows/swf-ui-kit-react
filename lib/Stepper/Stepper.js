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
          iconSize = _this$props2.iconSize,
          selectedItem = _this$props2.selectedItem;
      var selected = this.state.selected;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsIk1hdGgiLCJtaW4iLCJzdGVwcyIsImxlbmd0aCIsInNlbGVjdGVkSXRlbSIsInN0ZXBzUGVyUGFnZSIsImNvbnRhaW5lclJpZ2h0UG9zIiwiY29udGFpbmVyQm90dG9tUG9zIiwiaXNBcnJvd3NOZWVkZWQiLCJzdGVwcGVyQ29udGFpbmVyUmVmIiwiYXJyb3dSZWYiLCJ1cGRhdGVTdGVwc1BlclBhZ2VBbW91bnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidmVydGljYWwiLCJjdXJyQXJyb3dzU2l6ZSIsImNsaWVudFdpZHRoIiwiZmxvb3IiLCJzZXRTdGF0ZSIsImluZGV4IiwiaWQiLCJvblN0ZXBDbGljayIsImRpcmVjdGlvbiIsIm5ld0NvbnRhaW5lclBvc1ZhbHVlIiwibWF4Q29udGFpbmVyUG9zIiwibWF4IiwiaGlkZUxhYmVscyIsImljb24iLCJwYWxldHRlIiwiaWNvblNpemUiLCJtYXAiLCJzdGVwIiwiaXNTZWxlY3RlZCIsImlzQmVmb3JlU2VsZWN0ZWQiLCJpY29uQ29sb3IiLCJwcm9ncmVzcyIsImZpbmlzaGVkIiwidW5maW5pc2hlZCIsImRpc2FibGVkIiwidW5kZWZpbmVkIiwic2VsZWN0U3RlcCIsImNvbXBsZXRlZENvdW50ZXIiLCJlbG0iLCJvbkFycm93Q2xpY2siLCJhcnJvd3MiLCJ3aWR0aCIsImhlaWdodCIsInJpZ2h0IiwiYm90dG9tIiwicmVuZGVyU3RlcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsImNpcmNsZSIsImxpbmsiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7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QUFBLEtBQUssRUFBRSxFQVBGO0FBUUxuQixJQUFBQSxNQUFNLEVBQUU7QUFSSCxHQUZVO0FBWW5CZixFQUFBQSxRQUFRLEVBQUUsSUFaUztBQWFuQkgsRUFBQUEsVUFBVSxFQUFFLEtBYk87QUFjbkJaLEVBQUFBLFFBQVEsRUFBRSxLQWRTO0FBZW5CMkIsRUFBQUEsZ0JBQWdCLEVBQUUsS0FmQztBQWdCbkJyQyxFQUFBQSxZQUFZLEVBQUU7QUFoQkssQ0FBdkI7ZUFtQmVSLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RlcCBmcm9tICcuL1N0ZXAvU3RlcCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNzc1ZhcmlhYmxlcyB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuXHJcbmNsYXNzIFN0ZXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IE1hdGgubWluKHByb3BzLnN0ZXBzLmxlbmd0aCAtIDEsIHByb3BzLnNlbGVjdGVkSXRlbSAtIDEpLFxyXG4gICAgICAgICAgICBzdGVwc1BlclBhZ2U6IDAsXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclJpZ2h0UG9zOiAwLFxyXG4gICAgICAgICAgICBjb250YWluZXJCb3R0b21Qb3M6IDAsXHJcbiAgICAgICAgICAgIGlzQXJyb3dzTmVlZGVkOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdGVwcGVyQ29udGFpbmVyUmVmID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hcnJvd1JlZiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RlcHNQZXJQYWdlQW1vdW50KCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RlcHNQZXJQYWdlQW1vdW50KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGVwc1BlclBhZ2VBbW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgeyB2ZXJ0aWNhbCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgY3VyckFycm93c1NpemUgPSB0aGlzLnN0YXRlLmlzQXJyb3dzTmVlZGVkID8gdGhpcy5hcnJvd1JlZj8uY2xpZW50V2lkdGggKiAyIDogMDtcclxuICAgICAgICBjb25zdCBzdGVwc1BlclBhZ2UgPSBNYXRoLmZsb29yKCh0aGlzLnN0ZXBwZXJDb250YWluZXJSZWZbdmVydGljYWwgPyAnY2xpZW50SGVpZ2h0JyA6ICdjbGllbnRXaWR0aCddIC0gY3VyckFycm93c1NpemUpIC8gKHZlcnRpY2FsID8gMTIwIDogMjAwKSkgfHwgMTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHN0ZXBzUGVyUGFnZSxcclxuICAgICAgICAgICAgaXNBcnJvd3NOZWVkZWQ6IHN0ZXBzUGVyUGFnZSA8IHRoaXMucHJvcHMuc3RlcHMubGVuZ3RoXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFN0ZXAoaW5kZXgsIGlkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25TdGVwQ2xpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN0ZXBDbGljayh7IGluZGV4LCBpZCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGluZGV4XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQXJyb3dDbGljayhkaXJlY3Rpb24pIHtcclxuICAgICAgICBjb25zdCB7IHN0ZXBzUGVyUGFnZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IHN0ZXBzLCB2ZXJ0aWNhbCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Q29udGFpbmVyUG9zVmFsdWUgPSB0aGlzLnN0YXRlW3ZlcnRpY2FsID8gJ2NvbnRhaW5lckJvdHRvbVBvcycgOiAnY29udGFpbmVyUmlnaHRQb3MnXVxyXG4gICAgICAgICAgICAgICAgKyAoKHZlcnRpY2FsID8gMTIwIDogMjAwKSAqIGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heENvbnRhaW5lclBvcyA9ICh2ZXJ0aWNhbCA/IDEyMCA6IDE1MCkgKiAoc3RlcHMubGVuZ3RoIC0gc3RlcHNQZXJQYWdlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgW3ZlcnRpY2FsID8gJ2NvbnRhaW5lckJvdHRvbVBvcycgOiAnY29udGFpbmVyUmlnaHRQb3MnXTpcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihNYXRoLm1heChuZXdDb250YWluZXJQb3NWYWx1ZSwgMCksIG1heENvbnRhaW5lclBvcylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclN0ZXBzKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RlcHMsIGhpZGVMYWJlbHMsIHBhbGV0dGU6IHsgaWNvbiB9LCBpY29uU2l6ZSwgc2VsZWN0ZWRJdGVtIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHN0ZXBzLm1hcCgoc3RlcCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW0gPT09IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNCZWZvcmVTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbSA+IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbkNvbG9yID0gKGlzU2VsZWN0ZWQgfHwgaXNCZWZvcmVTZWxlY3RlZClcclxuICAgICAgICAgICAgICAgICYmIChzdGVwLnByb2dyZXNzICE9PSAnbm9uZScgJiYgc3RlcC5wcm9ncmVzcyAhPT0gJ3BhcnRpYWwnKVxyXG4gICAgICAgICAgICAgICAgfHwgc3RlcC5wcm9ncmVzcyA9PT0gJ2RvbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoaWNvbi5maW5pc2hlZCB8fCAnd2hpdGUnKSA6IChpY29uLnVuZmluaXNoZWQgfHwgJ2JsYWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHMtaXRlbSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1zZWxlY3RlZCc6IGlzU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1iZWZvcmUtc2VsZWN0ZWQnOiBpc0JlZm9yZVNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tZGlzYWJsZWQnOiBzdGVwLmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9eydzdGVwJyArIGluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdGVwLmRpc2FibGVkID8gdW5kZWZpbmVkIDogdGhpcy5zZWxlY3RTdGVwKGluZGV4LCBzdGVwLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29sb3I9e2ljb25Db2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25TaXplPXtpY29uU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTGFiZWw9e2hpZGVMYWJlbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCZWZvcmVTZWxlY3RlZD17aXNCZWZvcmVTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFsZXR0ZSwgdmVydGljYWwsIGNvbXBsZXRlZENvdW50ZXIsIHN0ZXBzLCBpY29uU2l6ZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IHNlbGVjdGVkLCBjb250YWluZXJSaWdodFBvcywgY29udGFpbmVyQm90dG9tUG9zLCBzdGVwc1BlclBhZ2UsIGlzQXJyb3dzTmVlZGVkIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICdzdGVwcGVyJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAnLS12ZXJ0aWNhbCc6IHZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntjcmVhdGVDc3NWYXJpYWJsZXMocGFsZXR0ZSwgaWNvblNpemUpfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RlcHBlci1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMuc3RlcHBlckNvbnRhaW5lclJlZiA9IGVsbX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXNBcnJvd3NOZWVkZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFycm93IGFycm93LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQXJyb3dDbGljaygtMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMuYXJyb3dSZWYgPSBlbG19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17dmVydGljYWwgPyBcImNoZXZyb24tdXBcIiA6IFwiY2hldnJvbi1sZWZ0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3BhbGV0dGUuYXJyb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0ZXBzLXNob3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHN0ZXBzUGVyUGFnZSAqIDEyMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RlcHMtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGlzQXJyb3dzTmVlZGVkICYmICF2ZXJ0aWNhbCA/IHN0ZXBzLmxlbmd0aCAqIDIwMCA6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogdmVydGljYWwgPyAwIDogY29udGFpbmVyUmlnaHRQb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiB2ZXJ0aWNhbCA/IGNvbnRhaW5lckJvdHRvbVBvcyA6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN0ZXBzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7aXNBcnJvd3NOZWVkZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFycm93IGFycm93LXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFycm93Q2xpY2soMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17dmVydGljYWwgPyBcImNoZXZyb24tZG93blwiIDogXCJjaGV2cm9uLXJpZ2h0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3BhbGV0dGUuYXJyb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXBwZXItY291bnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21wbGV0ZWRDb3VudGVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYCR7c2VsZWN0ZWQgKyAxfS8ke3N0ZXBzLmxlbmd0aH0gQ29tcGxldGVkYFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblN0ZXBwZXIucHJvcFR5cGVzID0ge1xyXG4gICAgc3RlcHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgcGFsZXR0ZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGljb25TaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaGlkZUxhYmVsczogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICB2ZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjb21wbGV0ZWRDb3VudGVyOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG9uU3RlcENsaWNrOiBQcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5TdGVwcGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHN0ZXBzOiBbXSxcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICAgIGZpbmlzaGVkOiAnJyxcclxuICAgICAgICAgICAgdW5maW5pc2hlZDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNpcmNsZTogJycsXHJcbiAgICAgICAgbGluazogJycsXHJcbiAgICAgICAgbGFiZWw6ICcnLFxyXG4gICAgICAgIGFycm93czogJ2JsYWNrJ1xyXG4gICAgfSxcclxuICAgIGljb25TaXplOiAnc20nLFxyXG4gICAgaGlkZUxhYmVsczogZmFsc2UsXHJcbiAgICB2ZXJ0aWNhbDogZmFsc2UsXHJcbiAgICBjb21wbGV0ZWRDb3VudGVyOiBmYWxzZSxcclxuICAgIHNlbGVjdGVkSXRlbTogMVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGVwcGVyOyJdfQ==