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

    _this.updateStepsPerPageAmount = function () {
      var vertical = _this.props.vertical;
      var containerSize = _this.stepperContainerRef[vertical ? 'clientHeight' : 'clientWidth'];
      var stepSize = vertical ? 120 : 200;
      var isArrowsNeeded = _this.props.steps.length * stepSize > containerSize;
      var currArrowsSize = isArrowsNeeded ? _this.state.arrowsSize : 0;
      var stepsPerPage = Math.floor((containerSize - currArrowsSize * 2) / stepSize) || 1;

      _this.setState({
        stepsPerPage: stepsPerPage,
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
        var stepsPerPage = _this.state.stepsPerPage;
        var _this$props = _this.props,
            steps = _this$props.steps,
            vertical = _this$props.vertical;
        var stepSize = vertical ? 120 : 150;
        var currContainerPosVariable = vertical ? 'containerBottomPos' : 'containerRightPos';
        var newContainerPosValue = _this.state[currContainerPosVariable] + stepSize * direction;
        var maxContainerPos = stepSize * (steps.length - stepsPerPage);

        _this.setState(_defineProperty({}, currContainerPosVariable, Math.min(Math.max(newContainerPosValue, 0), maxContainerPos)));
      };
    };

    _this.state = {
      stepsPerPage: 0,
      containerRightPos: 0,
      containerBottomPos: 0,
      isArrowsNeeded: false,
      arrowsSize: parseInt((0, _utils.getCircleSize)(props.iconSize))
    };
    _this.stepperContainerRef = false;
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
    key: "renderSteps",
    value: function renderSteps() {
      var _this3 = this;

      var _this$props2 = this.props,
          steps = _this$props2.steps,
          hideLabels = _this$props2.hideLabels,
          icon = _this$props2.palette.icon,
          iconSize = _this$props2.iconSize,
          selectedItem = _this$props2.selectedItem;
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
          onClick: step.disabled ? undefined : _this3.selectStep(index, step.id),
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
      var _this4 = this;

      var _this$props3 = this.props,
          palette = _this$props3.palette,
          vertical = _this$props3.vertical,
          completedCounter = _this$props3.completedCounter,
          steps = _this$props3.steps,
          iconSize = _this$props3.iconSize,
          selectedItem = _this$props3.selectedItem;
      var _this$state = this.state,
          containerRightPos = _this$state.containerRightPos,
          containerBottomPos = _this$state.containerBottomPos,
          stepsPerPage = _this$state.stepsPerPage,
          isArrowsNeeded = _this$state.isArrowsNeeded,
          arrowsSize = _this$state.arrowsSize;
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
            return _this4.stepperContainerRef = elm;
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
              width: vertical ? '100%' : stepsPerPage * 150,
              height: vertical ? stepsPerPage * 120 : arrowsSize * 4
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "steps-all",
              style: {
                width: isArrowsNeeded && !vertical ? steps.length * 150 : '100%',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwidXBkYXRlU3RlcHNQZXJQYWdlQW1vdW50IiwidmVydGljYWwiLCJjb250YWluZXJTaXplIiwic3RlcHBlckNvbnRhaW5lclJlZiIsInN0ZXBTaXplIiwiaXNBcnJvd3NOZWVkZWQiLCJzdGVwcyIsImxlbmd0aCIsImN1cnJBcnJvd3NTaXplIiwic3RhdGUiLCJhcnJvd3NTaXplIiwic3RlcHNQZXJQYWdlIiwiTWF0aCIsImZsb29yIiwic2V0U3RhdGUiLCJzZWxlY3RTdGVwIiwiaW5kZXgiLCJpZCIsIm9uU3RlcENsaWNrIiwib25BcnJvd0NsaWNrIiwiZGlyZWN0aW9uIiwiY3VyckNvbnRhaW5lclBvc1ZhcmlhYmxlIiwibmV3Q29udGFpbmVyUG9zVmFsdWUiLCJtYXhDb250YWluZXJQb3MiLCJtaW4iLCJtYXgiLCJjb250YWluZXJSaWdodFBvcyIsImNvbnRhaW5lckJvdHRvbVBvcyIsInBhcnNlSW50IiwiaWNvblNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGlkZUxhYmVscyIsImljb24iLCJwYWxldHRlIiwic2VsZWN0ZWRJdGVtIiwibWFwIiwic3RlcCIsImlzU2VsZWN0ZWQiLCJpc0JlZm9yZVNlbGVjdGVkIiwiaWNvbkNvbG9yIiwicHJvZ3Jlc3MiLCJmaW5pc2hlZCIsInVuZmluaXNoZWQiLCJkaXNhYmxlZCIsInVuZGVmaW5lZCIsImNvbXBsZXRlZENvdW50ZXIiLCJlbG0iLCJhcnJvd3MiLCJ3aWR0aCIsImhlaWdodCIsInJpZ2h0IiwiYm90dG9tIiwicmVuZGVyU3RlcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsImNpcmNsZSIsImxpbmsiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsTzs7Ozs7QUFDRixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBb0JuQkMsd0JBcEJtQixHQW9CUSxZQUFNO0FBQUEsVUFDckJDLFFBRHFCLEdBQ1IsTUFBS0YsS0FERyxDQUNyQkUsUUFEcUI7QUFHN0IsVUFBTUMsYUFBYSxHQUFHLE1BQUtDLG1CQUFMLENBQXlCRixRQUFRLEdBQUcsY0FBSCxHQUFvQixhQUFyRCxDQUF0QjtBQUNBLFVBQU1HLFFBQVEsR0FBR0gsUUFBUSxHQUFHLEdBQUgsR0FBUyxHQUFsQztBQUVBLFVBQU1JLGNBQWMsR0FBRyxNQUFLTixLQUFMLENBQVdPLEtBQVgsQ0FBaUJDLE1BQWpCLEdBQTBCSCxRQUExQixHQUFxQ0YsYUFBNUQ7QUFDQSxVQUFNTSxjQUFjLEdBQUdILGNBQWMsR0FBRyxNQUFLSSxLQUFMLENBQVdDLFVBQWQsR0FBMkIsQ0FBaEU7QUFFQSxVQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNYLGFBQWEsR0FBSU0sY0FBYyxHQUFHLENBQW5DLElBQXlDSixRQUFwRCxLQUFpRSxDQUF0Rjs7QUFFQSxZQUFLVSxRQUFMLENBQWM7QUFDVkgsUUFBQUEsWUFBWSxFQUFaQSxZQURVO0FBRVZOLFFBQUFBLGNBQWMsRUFBZEE7QUFGVSxPQUFkO0FBSUgsS0FuQ2tCOztBQUFBLFVBcUNuQlUsVUFyQ21CLEdBcUNOLFVBQUNDLEtBQUQsRUFBUUMsRUFBUjtBQUFBLGFBQWUsWUFBTTtBQUM5QixZQUFJLE1BQUtsQixLQUFMLENBQVdtQixXQUFmLEVBQTRCO0FBQ3hCLGdCQUFLbkIsS0FBTCxDQUFXbUIsV0FBWCxDQUF1QjtBQUFFRixZQUFBQSxLQUFLLEVBQUxBLEtBQUY7QUFBU0MsWUFBQUEsRUFBRSxFQUFGQTtBQUFULFdBQXZCO0FBQ0g7QUFDSixPQUpZO0FBQUEsS0FyQ007O0FBQUEsVUEyQ25CRSxZQTNDbUIsR0EyQ0osVUFBQ0MsU0FBRDtBQUFBLGFBQWUsWUFBTTtBQUFBLFlBQ3hCVCxZQUR3QixHQUNQLE1BQUtGLEtBREUsQ0FDeEJFLFlBRHdCO0FBQUEsMEJBRUosTUFBS1osS0FGRDtBQUFBLFlBRXhCTyxLQUZ3QixlQUV4QkEsS0FGd0I7QUFBQSxZQUVqQkwsUUFGaUIsZUFFakJBLFFBRmlCO0FBSWhDLFlBQU1HLFFBQVEsR0FBR0gsUUFBUSxHQUFHLEdBQUgsR0FBUyxHQUFsQztBQUVBLFlBQU1vQix3QkFBd0IsR0FBR3BCLFFBQVEsR0FBRyxvQkFBSCxHQUEwQixtQkFBbkU7QUFDQSxZQUFNcUIsb0JBQW9CLEdBQUcsTUFBS2IsS0FBTCxDQUFXWSx3QkFBWCxJQUF3Q2pCLFFBQVEsR0FBR2dCLFNBQWhGO0FBQ0EsWUFBTUcsZUFBZSxHQUFHbkIsUUFBUSxJQUFJRSxLQUFLLENBQUNDLE1BQU4sR0FBZUksWUFBbkIsQ0FBaEM7O0FBRUEsY0FBS0csUUFBTCxxQkFDS08sd0JBREwsRUFFUVQsSUFBSSxDQUFDWSxHQUFMLENBQVNaLElBQUksQ0FBQ2EsR0FBTCxDQUFTSCxvQkFBVCxFQUErQixDQUEvQixDQUFULEVBQTRDQyxlQUE1QyxDQUZSO0FBSUgsT0FkYztBQUFBLEtBM0NJOztBQUVmLFVBQUtkLEtBQUwsR0FBYTtBQUNURSxNQUFBQSxZQUFZLEVBQUUsQ0FETDtBQUVUZSxNQUFBQSxpQkFBaUIsRUFBRSxDQUZWO0FBR1RDLE1BQUFBLGtCQUFrQixFQUFFLENBSFg7QUFJVHRCLE1BQUFBLGNBQWMsRUFBRSxLQUpQO0FBS1RLLE1BQUFBLFVBQVUsRUFBRWtCLFFBQVEsQ0FBQywwQkFBYzdCLEtBQUssQ0FBQzhCLFFBQXBCLENBQUQ7QUFMWCxLQUFiO0FBT0EsVUFBSzFCLG1CQUFMLEdBQTJCLEtBQTNCO0FBVGU7QUFVbEI7Ozs7V0FFRCw2QkFBb0I7QUFBQTs7QUFDaEIsV0FBS0gsd0JBQUw7QUFFQThCLE1BQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUNwQyxRQUFBLE1BQUksQ0FBQy9CLHdCQUFMO0FBQ0gsT0FGRDtBQUdIOzs7V0F5Q0QsdUJBQWM7QUFBQTs7QUFBQSx5QkFDK0QsS0FBS0QsS0FEcEU7QUFBQSxVQUNGTyxLQURFLGdCQUNGQSxLQURFO0FBQUEsVUFDSzBCLFVBREwsZ0JBQ0tBLFVBREw7QUFBQSxVQUM0QkMsSUFENUIsZ0JBQ2lCQyxPQURqQixDQUM0QkQsSUFENUI7QUFBQSxVQUNvQ0osUUFEcEMsZ0JBQ29DQSxRQURwQztBQUFBLFVBQzhDTSxZQUQ5QyxnQkFDOENBLFlBRDlDO0FBR1YsYUFDSTdCLEtBQUssQ0FBQzhCLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9yQixLQUFQLEVBQWlCO0FBQ3ZCLFlBQU1zQixVQUFVLEdBQUdILFlBQVksS0FBS25CLEtBQXBDO0FBQ0EsWUFBTXVCLGdCQUFnQixHQUFHSixZQUFZLEdBQUduQixLQUF4QztBQUNBLFlBQU13QixTQUFTLEdBQUcsQ0FBQ0YsVUFBVSxJQUFJQyxnQkFBZixLQUNkRixJQUFJLENBQUNJLFFBQUwsS0FBa0IsTUFBbEIsSUFBNEJKLElBQUksQ0FBQ0ksUUFBTCxLQUFrQixTQURoQyxJQUVmSixJQUFJLENBQUNJLFFBQUwsS0FBa0IsTUFGSCxHQUdYUixJQUFJLENBQUNTLFFBQUwsSUFBaUIsT0FITixHQUdrQlQsSUFBSSxDQUFDVSxVQUFMLElBQW1CLE9BSHZEO0FBS0EsNEJBQ0k7QUFDSSxVQUFBLFNBQVMsRUFBRSw0QkFBVztBQUNsQiwwQkFBYyxJQURJO0FBRWxCLDBCQUFjTCxVQUZJO0FBR2xCLGlDQUFxQkMsZ0JBSEg7QUFJbEIsMEJBQWNGLElBQUksQ0FBQ087QUFKRCxXQUFYLENBRGY7QUFRSSxVQUFBLE9BQU8sRUFBRVAsSUFBSSxDQUFDTyxRQUFMLEdBQWdCQyxTQUFoQixHQUE0QixNQUFJLENBQUM5QixVQUFMLENBQWdCQyxLQUFoQixFQUF1QnFCLElBQUksQ0FBQ3BCLEVBQTVCLENBUnpDO0FBQUEsaUNBVUkscUJBQUMsZ0JBQUQ7QUFDSSxZQUFBLFNBQVMsRUFBRXVCLFNBRGY7QUFFSSxZQUFBLFFBQVEsRUFBRVgsUUFGZDtBQUdJLFlBQUEsSUFBSSxFQUFFUSxJQUhWO0FBSUksWUFBQSxTQUFTLEVBQUVMLFVBSmY7QUFLSSxZQUFBLFVBQVUsRUFBRU0sVUFMaEI7QUFNSSxZQUFBLGdCQUFnQixFQUFFQztBQU50QjtBQVZKLFdBT1MsU0FBU3ZCLEtBUGxCLENBREo7QUFxQkgsT0E3QkQsQ0FESjtBQWdDSDs7O1dBRUQsa0JBQVM7QUFBQTs7QUFBQSx5QkFDMEUsS0FBS2pCLEtBRC9FO0FBQUEsVUFDR21DLE9BREgsZ0JBQ0dBLE9BREg7QUFBQSxVQUNZakMsUUFEWixnQkFDWUEsUUFEWjtBQUFBLFVBQ3NCNkMsZ0JBRHRCLGdCQUNzQkEsZ0JBRHRCO0FBQUEsVUFDd0N4QyxLQUR4QyxnQkFDd0NBLEtBRHhDO0FBQUEsVUFDK0N1QixRQUQvQyxnQkFDK0NBLFFBRC9DO0FBQUEsVUFDeURNLFlBRHpELGdCQUN5REEsWUFEekQ7QUFBQSx3QkFFdUYsS0FBSzFCLEtBRjVGO0FBQUEsVUFFR2lCLGlCQUZILGVBRUdBLGlCQUZIO0FBQUEsVUFFc0JDLGtCQUZ0QixlQUVzQkEsa0JBRnRCO0FBQUEsVUFFMENoQixZQUYxQyxlQUUwQ0EsWUFGMUM7QUFBQSxVQUV3RE4sY0FGeEQsZUFFd0RBLGNBRnhEO0FBQUEsVUFFd0VLLFVBRnhFLGVBRXdFQSxVQUZ4RTtBQUlMLDBCQUNJO0FBQ0ksUUFBQSxTQUFTLEVBQUUsNEJBQVc7QUFDbEIscUJBQVcsSUFETztBQUVsQix3QkFBY1Q7QUFGSSxTQUFYLENBRGY7QUFBQSxnQ0FNSTtBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0IsK0JBQW1CaUMsT0FBbkIsRUFBNEJMLFFBQTVCO0FBQXhCLFVBTkosZUFPSTtBQUNJLFVBQUEsU0FBUyxFQUFDLG1CQURkO0FBRUksVUFBQSxHQUFHLEVBQUUsYUFBQWtCLEdBQUc7QUFBQSxtQkFBSSxNQUFJLENBQUM1QyxtQkFBTCxHQUEyQjRDLEdBQS9CO0FBQUEsV0FGWjtBQUFBLHFCQUlLMUMsY0FBYyxpQkFDZjtBQUNJLFlBQUEsU0FBUyxFQUFDLGtCQURkO0FBRUksWUFBQSxPQUFPLEVBQUUsS0FBS2MsWUFBTCxDQUFrQixDQUFDLENBQW5CLENBRmI7QUFBQSxtQ0FJSTtBQUFLLGNBQUEsU0FBUyxFQUFDLFlBQWY7QUFBQSxxQ0FDSSxxQkFBQyxnQkFBRDtBQUNJLGdCQUFBLElBQUksRUFBRWxCLFFBQVEsR0FBRyxZQUFILEdBQWtCLGNBRHBDO0FBRUksZ0JBQUEsS0FBSyxFQUFFaUMsT0FBTyxDQUFDYztBQUZuQjtBQURKO0FBSkosWUFMSixlQWtCSTtBQUNJLFlBQUEsU0FBUyxFQUFFLDRCQUFXO0FBQ2xCLDZCQUFlLElBREc7QUFFbEIsNEJBQWMvQztBQUZJLGFBQVgsQ0FEZjtBQUtJLFlBQUEsS0FBSyxFQUFFO0FBQ0hnRCxjQUFBQSxLQUFLLEVBQUVoRCxRQUFRLEdBQUcsTUFBSCxHQUFZVSxZQUFZLEdBQUcsR0FEdkM7QUFFSHVDLGNBQUFBLE1BQU0sRUFBRWpELFFBQVEsR0FBR1UsWUFBWSxHQUFHLEdBQWxCLEdBQXdCRCxVQUFVLEdBQUc7QUFGbEQsYUFMWDtBQUFBLG1DQVVJO0FBQ0ksY0FBQSxTQUFTLEVBQUMsV0FEZDtBQUVJLGNBQUEsS0FBSyxFQUFFO0FBQ0h1QyxnQkFBQUEsS0FBSyxFQUFFNUMsY0FBYyxJQUFJLENBQUNKLFFBQW5CLEdBQThCSyxLQUFLLENBQUNDLE1BQU4sR0FBZSxHQUE3QyxHQUFtRCxNQUR2RDtBQUVINEMsZ0JBQUFBLEtBQUssRUFBRWxELFFBQVEsR0FBRyxDQUFILEdBQU95QixpQkFGbkI7QUFHSDBCLGdCQUFBQSxNQUFNLEVBQUVuRCxRQUFRLEdBQUcwQixrQkFBSCxHQUF3QjtBQUhyQyxlQUZYO0FBQUEsd0JBUUssS0FBSzBCLFdBQUw7QUFSTDtBQVZKLFlBbEJKLEVBd0NLaEQsY0FBYyxpQkFDZjtBQUNJLFlBQUEsU0FBUyxFQUFDLG1CQURkO0FBRUksWUFBQSxPQUFPLEVBQUUsS0FBS2MsWUFBTCxDQUFrQixDQUFsQixDQUZiO0FBQUEsbUNBSUk7QUFBSyxjQUFBLFNBQVMsRUFBQyxZQUFmO0FBQUEscUNBQ0kscUJBQUMsZ0JBQUQ7QUFDSSxnQkFBQSxJQUFJLEVBQUVsQixRQUFRLEdBQUcsY0FBSCxHQUFvQixlQUR0QztBQUVJLGdCQUFBLEtBQUssRUFBRWlDLE9BQU8sQ0FBQ2M7QUFGbkI7QUFESjtBQUpKLFlBekNKO0FBQUEsVUFQSixlQTZESTtBQUFLLFVBQUEsU0FBUyxFQUFDLGlCQUFmO0FBQUEsb0JBQ0tGLGdCQUFnQixjQUNkWCxZQUFZLEdBQUcsQ0FERCxjQUNNN0IsS0FBSyxDQUFDQyxNQURaO0FBRHJCLFVBN0RKO0FBQUEsUUFESjtBQXFFSDs7OztFQTFLaUIrQyxrQkFBTUMsUzs7QUE2SzVCekQsT0FBTyxDQUFDMEQsU0FBUixHQUFvQjtBQUNoQmxELEVBQUFBLEtBQUssRUFBRW1ELHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsTUFBNUIsQ0FEUztBQUVoQnpCLEVBQUFBLE9BQU8sRUFBRXVCLHNCQUFVRSxNQUZIO0FBR2hCOUIsRUFBQUEsUUFBUSxFQUFFNEIsc0JBQVVHLE1BSEo7QUFJaEI1QixFQUFBQSxVQUFVLEVBQUV5QixzQkFBVUksSUFKTjtBQUtoQjVELEVBQUFBLFFBQVEsRUFBRXdELHNCQUFVSSxJQUxKO0FBTWhCZixFQUFBQSxnQkFBZ0IsRUFBRVcsc0JBQVVJLElBTlo7QUFPaEIxQixFQUFBQSxZQUFZLEVBQUVzQixzQkFBVUssTUFQUjtBQVFoQjVDLEVBQUFBLFdBQVcsRUFBRXVDLHNCQUFVTTtBQVJQLENBQXBCO0FBV0FqRSxPQUFPLENBQUNrRSxZQUFSLEdBQXVCO0FBQ25CMUQsRUFBQUEsS0FBSyxFQUFFLEVBRFk7QUFFbkI0QixFQUFBQSxPQUFPLEVBQUU7QUFDTEQsSUFBQUEsSUFBSSxFQUFFO0FBQ0ZTLE1BQUFBLFFBQVEsRUFBRSxFQURSO0FBRUZDLE1BQUFBLFVBQVUsRUFBRTtBQUZWLEtBREQ7QUFLTHNCLElBQUFBLE1BQU0sRUFBRSxFQUxIO0FBTUxDLElBQUFBLElBQUksRUFBRSxFQU5EO0FBT0xDLElBQUFBLEtBQUssRUFBRSxFQVBGO0FBUUxuQixJQUFBQSxNQUFNLEVBQUU7QUFSSCxHQUZVO0FBWW5CbkIsRUFBQUEsUUFBUSxFQUFFLElBWlM7QUFhbkJHLEVBQUFBLFVBQVUsRUFBRSxLQWJPO0FBY25CL0IsRUFBQUEsUUFBUSxFQUFFLEtBZFM7QUFlbkI2QyxFQUFBQSxnQkFBZ0IsRUFBRSxLQWZDO0FBZ0JuQlgsRUFBQUEsWUFBWSxFQUFFO0FBaEJLLENBQXZCO2VBbUJlckMsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGVwIGZyb20gJy4vU3RlcC9TdGVwJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ3NzVmFyaWFibGVzLCBnZXRDaXJjbGVTaXplIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5cclxuY2xhc3MgU3RlcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzdGVwc1BlclBhZ2U6IDAsXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclJpZ2h0UG9zOiAwLFxyXG4gICAgICAgICAgICBjb250YWluZXJCb3R0b21Qb3M6IDAsXHJcbiAgICAgICAgICAgIGlzQXJyb3dzTmVlZGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgYXJyb3dzU2l6ZTogcGFyc2VJbnQoZ2V0Q2lyY2xlU2l6ZShwcm9wcy5pY29uU2l6ZSkpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0ZXBwZXJDb250YWluZXJSZWYgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0ZXBzUGVyUGFnZUFtb3VudCgpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0ZXBzUGVyUGFnZUFtb3VudCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RlcHNQZXJQYWdlQW1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdmVydGljYWwgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSB0aGlzLnN0ZXBwZXJDb250YWluZXJSZWZbdmVydGljYWwgPyAnY2xpZW50SGVpZ2h0JyA6ICdjbGllbnRXaWR0aCddO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBTaXplID0gdmVydGljYWwgPyAxMjAgOiAyMDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQXJyb3dzTmVlZGVkID0gdGhpcy5wcm9wcy5zdGVwcy5sZW5ndGggKiBzdGVwU2l6ZSA+IGNvbnRhaW5lclNpemU7XHJcbiAgICAgICAgY29uc3QgY3VyckFycm93c1NpemUgPSBpc0Fycm93c05lZWRlZCA/IHRoaXMuc3RhdGUuYXJyb3dzU2l6ZSA6IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0ZXBzUGVyUGFnZSA9IE1hdGguZmxvb3IoKGNvbnRhaW5lclNpemUgLSAoY3VyckFycm93c1NpemUgKiAyKSkgLyBzdGVwU2l6ZSkgfHwgMTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHN0ZXBzUGVyUGFnZSxcclxuICAgICAgICAgICAgaXNBcnJvd3NOZWVkZWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RTdGVwID0gKGluZGV4LCBpZCkgPT4gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uU3RlcENsaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TdGVwQ2xpY2soeyBpbmRleCwgaWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQXJyb3dDbGljayA9IChkaXJlY3Rpb24pID0+ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHN0ZXBzUGVyUGFnZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IHN0ZXBzLCB2ZXJ0aWNhbCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3Qgc3RlcFNpemUgPSB2ZXJ0aWNhbCA/IDEyMCA6IDE1MDtcclxuXHJcbiAgICAgICAgY29uc3QgY3VyckNvbnRhaW5lclBvc1ZhcmlhYmxlID0gdmVydGljYWwgPyAnY29udGFpbmVyQm90dG9tUG9zJyA6ICdjb250YWluZXJSaWdodFBvcyc7XHJcbiAgICAgICAgY29uc3QgbmV3Q29udGFpbmVyUG9zVmFsdWUgPSB0aGlzLnN0YXRlW2N1cnJDb250YWluZXJQb3NWYXJpYWJsZV0gKyAoc3RlcFNpemUgKiBkaXJlY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IG1heENvbnRhaW5lclBvcyA9IHN0ZXBTaXplICogKHN0ZXBzLmxlbmd0aCAtIHN0ZXBzUGVyUGFnZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBbY3VyckNvbnRhaW5lclBvc1ZhcmlhYmxlXTpcclxuICAgICAgICAgICAgICAgIE1hdGgubWluKE1hdGgubWF4KG5ld0NvbnRhaW5lclBvc1ZhbHVlLCAwKSwgbWF4Q29udGFpbmVyUG9zKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU3RlcHMoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdGVwcywgaGlkZUxhYmVscywgcGFsZXR0ZTogeyBpY29uIH0sIGljb25TaXplLCBzZWxlY3RlZEl0ZW0gfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHN0ZXBzLm1hcCgoc3RlcCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW0gPT09IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNCZWZvcmVTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbSA+IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbkNvbG9yID0gKGlzU2VsZWN0ZWQgfHwgaXNCZWZvcmVTZWxlY3RlZClcclxuICAgICAgICAgICAgICAgICYmIChzdGVwLnByb2dyZXNzICE9PSAnbm9uZScgJiYgc3RlcC5wcm9ncmVzcyAhPT0gJ3BhcnRpYWwnKVxyXG4gICAgICAgICAgICAgICAgfHwgc3RlcC5wcm9ncmVzcyA9PT0gJ2RvbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoaWNvbi5maW5pc2hlZCB8fCAnd2hpdGUnKSA6IChpY29uLnVuZmluaXNoZWQgfHwgJ2JsYWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHMtaXRlbSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1zZWxlY3RlZCc6IGlzU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1iZWZvcmUtc2VsZWN0ZWQnOiBpc0JlZm9yZVNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tZGlzYWJsZWQnOiBzdGVwLmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9eydzdGVwJyArIGluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdGVwLmRpc2FibGVkID8gdW5kZWZpbmVkIDogdGhpcy5zZWxlY3RTdGVwKGluZGV4LCBzdGVwLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29sb3I9e2ljb25Db2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25TaXplPXtpY29uU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTGFiZWw9e2hpZGVMYWJlbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCZWZvcmVTZWxlY3RlZD17aXNCZWZvcmVTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFsZXR0ZSwgdmVydGljYWwsIGNvbXBsZXRlZENvdW50ZXIsIHN0ZXBzLCBpY29uU2l6ZSwgc2VsZWN0ZWRJdGVtIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgY29udGFpbmVyUmlnaHRQb3MsIGNvbnRhaW5lckJvdHRvbVBvcywgc3RlcHNQZXJQYWdlLCBpc0Fycm93c05lZWRlZCwgYXJyb3dzU2l6ZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAnc3RlcHBlcic6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJy0tdmVydGljYWwnOiB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57Y3JlYXRlQ3NzVmFyaWFibGVzKHBhbGV0dGUsIGljb25TaXplKX08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0ZXBwZXItY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9e2VsbSA9PiB0aGlzLnN0ZXBwZXJDb250YWluZXJSZWYgPSBlbG19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQXJyb3dzTmVlZGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJvdyBhcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFycm93Q2xpY2soLTEpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3ZlcnRpY2FsID8gXCJjaGV2cm9uLXVwXCIgOiBcImNoZXZyb24tbGVmdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtwYWxldHRlLmFycm93c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBzLXNob3duJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLXZlcnRpY2FsJzogdmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogdmVydGljYWwgPyAnMTAwJScgOiBzdGVwc1BlclBhZ2UgKiAxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZlcnRpY2FsID8gc3RlcHNQZXJQYWdlICogMTIwIDogYXJyb3dzU2l6ZSAqIDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0ZXBzLWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpc0Fycm93c05lZWRlZCAmJiAhdmVydGljYWwgPyBzdGVwcy5sZW5ndGggKiAxNTAgOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHZlcnRpY2FsID8gMCA6IGNvbnRhaW5lclJpZ2h0UG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogdmVydGljYWwgPyBjb250YWluZXJCb3R0b21Qb3MgOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdGVwcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2lzQXJyb3dzTmVlZGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJvdyBhcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BcnJvd0NsaWNrKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3ZlcnRpY2FsID8gXCJjaGV2cm9uLWRvd25cIiA6IFwiY2hldnJvbi1yaWdodFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtwYWxldHRlLmFycm93c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwcGVyLWNvdW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29tcGxldGVkQ291bnRlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGAke3NlbGVjdGVkSXRlbSArIDF9LyR7c3RlcHMubGVuZ3RofSBDb21wbGV0ZWRgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuU3RlcHBlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBzdGVwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBwYWxldHRlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaWNvblNpemU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBoaWRlTGFiZWxzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGNvbXBsZXRlZENvdW50ZXI6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgb25TdGVwQ2xpY2s6IFByb3BUeXBlcy5mdW5jXHJcbn1cclxuXHJcblN0ZXBwZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3RlcHM6IFtdLFxyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICAgIGljb246IHtcclxuICAgICAgICAgICAgZmluaXNoZWQ6ICcnLFxyXG4gICAgICAgICAgICB1bmZpbmlzaGVkOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2lyY2xlOiAnJyxcclxuICAgICAgICBsaW5rOiAnJyxcclxuICAgICAgICBsYWJlbDogJycsXHJcbiAgICAgICAgYXJyb3dzOiAnYmxhY2snXHJcbiAgICB9LFxyXG4gICAgaWNvblNpemU6ICdzbScsXHJcbiAgICBoaWRlTGFiZWxzOiBmYWxzZSxcclxuICAgIHZlcnRpY2FsOiBmYWxzZSxcclxuICAgIGNvbXBsZXRlZENvdW50ZXI6IGZhbHNlLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiAxXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0ZXBwZXI7Il19