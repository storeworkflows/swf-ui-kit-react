"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Stepper = _interopRequireDefault(require("./Stepper.scss"));

var _Step = _interopRequireDefault(require("./Step/Step"));

var _Link = _interopRequireDefault(require("./Link/Link"));

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
      selected: Math.min(props.steps.length - 1, props.selectedItem - 1)
    };
    return _this;
  }

  _createClass(Stepper, [{
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
    key: "renderSteps",
    value: function renderSteps() {
      var _this3 = this;

      var _this$props = this.props,
          steps = _this$props.steps,
          hideLabels = _this$props.hideLabels,
          icon = _this$props.palette.icon,
          iconSize = _this$props.iconSize;
      return steps.map(function (step, index) {
        var isSelected = _this3.state.selected === index;
        var isBeforeSelected = _this3.state.selected > index;
        var iconColor = (isSelected || isBeforeSelected) && step.progress !== 'none' && step.progress !== 'partial' || step.progress === 'done' ? icon.finished || 'white' : icon.unfinished || 'black';
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react["default"].Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classnames["default"])({
              'stepper-item': true,
              '--selected': isSelected,
              '--before-selected': isBeforeSelected,
              '--disabled': step.disabled
            }),
            onClick: !step.disabled && _this3.selectStep(index, step.id),
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
      var _this$props2 = this.props,
          palette = _this$props2.palette,
          vertical = _this$props2.vertical,
          showCompletedCount = _this$props2.showCompletedCount,
          steps = _this$props2.steps;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: (0, _utils.createCssVariables)(palette) + _Stepper["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames["default"])({
            'stepper': true,
            'stepper-container': true,
            '--vertical': vertical
          }),
          children: this.renderSteps()
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "stepper-counter",
          children: showCompletedCount && "".concat(this.state.selected + 1, "/").concat(steps.length, " Completed")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsIk1hdGgiLCJtaW4iLCJzdGVwcyIsImxlbmd0aCIsInNlbGVjdGVkSXRlbSIsImluZGV4IiwiaWQiLCJvblN0ZXBDbGljayIsInNldFN0YXRlIiwiaGlkZUxhYmVscyIsImljb24iLCJwYWxldHRlIiwiaWNvblNpemUiLCJtYXAiLCJzdGVwIiwiaXNTZWxlY3RlZCIsImlzQmVmb3JlU2VsZWN0ZWQiLCJpY29uQ29sb3IiLCJwcm9ncmVzcyIsImZpbmlzaGVkIiwidW5maW5pc2hlZCIsImRpc2FibGVkIiwic2VsZWN0U3RlcCIsImxhYmVsIiwic3VibGFiZWwiLCJ2ZXJ0aWNhbCIsInNob3dDb21wbGV0ZWRDb3VudCIsInN0eWxlcyIsInJlbmRlclN0ZXBzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0Iiwic3RyaW5nIiwiYm9vbCIsIm51bWJlciIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJjaXJjbGUiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsTzs7Ozs7QUFDRixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQUVDLE1BQUFBLFFBQVEsRUFBRUMsSUFBSSxDQUFDQyxHQUFMLENBQVNKLEtBQUssQ0FBQ0ssS0FBTixDQUFZQyxNQUFaLEdBQXFCLENBQTlCLEVBQWlDTixLQUFLLENBQUNPLFlBQU4sR0FBcUIsQ0FBdEQ7QUFBWixLQUFiO0FBRmU7QUFHbEI7Ozs7V0FFRCxvQkFBV0MsS0FBWCxFQUFrQkMsRUFBbEIsRUFBc0I7QUFBQTs7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RixHQUZVO0FBV25CWCxFQUFBQSxRQUFRLEVBQUUsSUFYUztBQVluQkgsRUFBQUEsVUFBVSxFQUFFLEtBWk87QUFhbkJnQixFQUFBQSxRQUFRLEVBQUUsS0FiUztBQWNuQkMsRUFBQUEsa0JBQWtCLEVBQUUsS0FkRDtBQWVuQnRCLEVBQUFBLFlBQVksRUFBRTtBQWZLLENBQXZCO2VBa0JlUixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TdGVwcGVyLnNjc3NcIjtcclxuaW1wb3J0IFN0ZXAgZnJvbSAnLi9TdGVwL1N0ZXAnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsvTGluayc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNzc1ZhcmlhYmxlcyB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBTdGVwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHNlbGVjdGVkOiBNYXRoLm1pbihwcm9wcy5zdGVwcy5sZW5ndGggLSAxLCBwcm9wcy5zZWxlY3RlZEl0ZW0gLSAxKSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFN0ZXAoaW5kZXgsIGlkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25TdGVwQ2xpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN0ZXBDbGljayh7IGluZGV4LCBpZCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGluZGV4XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclN0ZXBzKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RlcHMsIGhpZGVMYWJlbHMsIHBhbGV0dGU6IHsgaWNvbiB9LCBpY29uU2l6ZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgc3RlcHMubWFwKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQgPT09IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNCZWZvcmVTZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQgPiBpbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGljb25Db2xvciA9IChpc1NlbGVjdGVkIHx8IGlzQmVmb3JlU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgKHN0ZXAucHJvZ3Jlc3MgIT09ICdub25lJyAmJiBzdGVwLnByb2dyZXNzICE9PSAncGFydGlhbCcpXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgc3RlcC5wcm9ncmVzcyA9PT0gJ2RvbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoaWNvbi5maW5pc2hlZCB8fCAnd2hpdGUnKSA6IChpY29uLnVuZmluaXNoZWQgfHwgJ2JsYWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXsnc3RlcCcgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBwZXItaXRlbSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLWJlZm9yZS1zZWxlY3RlZCc6IGlzQmVmb3JlU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tZGlzYWJsZWQnOiBzdGVwLmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyFzdGVwLmRpc2FibGVkICYmIHRoaXMuc2VsZWN0U3RlcChpbmRleCwgc3RlcC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17c3RlcC5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db2xvcj17aWNvbkNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25TaXplPXtpY29uU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17c3RlcC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJsYWJlbD17c3RlcC5zdWJsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcz17c3RlcC5wcm9ncmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTGFiZWw9e2hpZGVMYWJlbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhpbmRleCAhPT0gc3RlcHMubGVuZ3RoIC0gMSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHBlci1pdGVtJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1iZWZvcmUtc2VsZWN0ZWQnOiBpc0JlZm9yZVNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHBhbGV0dGUsIHZlcnRpY2FsLCBzaG93Q29tcGxldGVkQ291bnQsIHN0ZXBzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntjcmVhdGVDc3NWYXJpYWJsZXMocGFsZXR0ZSkgKyBzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHBlcic6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwcGVyLWNvbnRhaW5lcic6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICctLXZlcnRpY2FsJzogdmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdGVwcygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXBwZXItY291bnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93Q29tcGxldGVkQ291bnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5zdGF0ZS5zZWxlY3RlZCArIDF9LyR7c3RlcHMubGVuZ3RofSBDb21wbGV0ZWRgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuU3RlcHBlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBzdGVwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBwYWxldHRlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaWNvblNpemU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBoaWRlTGFiZWxzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNob3dDb21wbGV0ZWRDb3VudDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvblN0ZXBDbGljazogUHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuU3RlcHBlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzdGVwczogW10sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBmaW5pc2hlZDogJycsXHJcbiAgICAgICAgICAgIHVuZmluaXNoZWQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaXJjbGU6ICcnLFxyXG4gICAgICAgIGxpbms6ICcnLFxyXG4gICAgICAgIGxhYmVsOiAnJ1xyXG4gICAgfSxcclxuICAgIGljb25TaXplOiAnc20nLFxyXG4gICAgaGlkZUxhYmVsczogZmFsc2UsXHJcbiAgICB2ZXJ0aWNhbDogZmFsc2UsXHJcbiAgICBzaG93Q29tcGxldGVkQ291bnQ6IGZhbHNlLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiAxXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0ZXBwZXI7Il19