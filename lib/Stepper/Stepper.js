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
    value: function selectStep(index) {
      var _this2 = this;

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
          icon = _this$props.palette.icon;
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
            onClick: !step.disabled && _this3.selectStep(index),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
              icon: step.icon,
              iconColor: iconColor,
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
  hideLabels: _propTypes["default"].bool,
  vertical: _propTypes["default"].bool,
  showCompletedCount: _propTypes["default"].bool,
  selectedItem: _propTypes["default"].number
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
  hideLabels: false,
  vertical: false,
  showCompletedCount: false,
  selectedItem: 1
};
var _default = Stepper;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsIk1hdGgiLCJtaW4iLCJzdGVwcyIsImxlbmd0aCIsInNlbGVjdGVkSXRlbSIsImluZGV4Iiwic2V0U3RhdGUiLCJoaWRlTGFiZWxzIiwiaWNvbiIsInBhbGV0dGUiLCJtYXAiLCJzdGVwIiwiaXNTZWxlY3RlZCIsImlzQmVmb3JlU2VsZWN0ZWQiLCJpY29uQ29sb3IiLCJwcm9ncmVzcyIsImZpbmlzaGVkIiwidW5maW5pc2hlZCIsImRpc2FibGVkIiwic2VsZWN0U3RlcCIsImxhYmVsIiwic3VibGFiZWwiLCJ2ZXJ0aWNhbCIsInNob3dDb21wbGV0ZWRDb3VudCIsInN0eWxlcyIsInJlbmRlclN0ZXBzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0IiwiYm9vbCIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsImNpcmNsZSIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7OztBQUNGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBRUMsTUFBQUEsUUFBUSxFQUFFQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0osS0FBSyxDQUFDSyxLQUFOLENBQVlDLE1BQVosR0FBcUIsQ0FBOUIsRUFBaUNOLEtBQUssQ0FBQ08sWUFBTixHQUFxQixDQUF0RDtBQUFaLEtBQWI7QUFGZTtBQUdsQjs7OztXQUVELG9CQUFXQyxLQUFYLEVBQWtCO0FBQUE7O0FBQ2QsYUFBTyxZQUFNO0FBQ1QsUUFBQSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUNWUCxVQUFBQSxR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TUMsUzs7QUF1RjVCL0IsT0FBTyxDQUFDZ0MsU0FBUixHQUFvQjtBQUNoQjFCLEVBQUFBLEtBQUssRUFBRTJCLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsTUFBNUIsQ0FEUztBQUVoQnRCLEVBQUFBLE9BQU8sRUFBRW9CLHNCQUFVRSxNQUZIO0FBR2hCeEIsRUFBQUEsVUFBVSxFQUFFc0Isc0JBQVVHLElBSE47QUFJaEJWLEVBQUFBLFFBQVEsRUFBRU8sc0JBQVVHLElBSko7QUFLaEJULEVBQUFBLGtCQUFrQixFQUFFTSxzQkFBVUcsSUFMZDtBQU1oQjVCLEVBQUFBLFlBQVksRUFBRXlCLHNCQUFVSTtBQU5SLENBQXBCO0FBU0FyQyxPQUFPLENBQUNzQyxZQUFSLEdBQXVCO0FBQ25CaEMsRUFBQUEsS0FBSyxFQUFFLEVBRFk7QUFFbkJPLEVBQUFBLE9BQU8sRUFBRTtBQUNMRCxJQUFBQSxJQUFJLEVBQUU7QUFDRlEsTUFBQUEsUUFBUSxFQUFFLEVBRFI7QUFFRkMsTUFBQUEsVUFBVSxFQUFFO0FBRlYsS0FERDtBQUtMa0IsSUFBQUEsTUFBTSxFQUFFLEVBTEg7QUFNTEMsSUFBQUEsSUFBSSxFQUFFLEVBTkQ7QUFPTGhCLElBQUFBLEtBQUssRUFBRTtBQVBGLEdBRlU7QUFXbkJiLEVBQUFBLFVBQVUsRUFBRSxLQVhPO0FBWW5CZSxFQUFBQSxRQUFRLEVBQUUsS0FaUztBQWFuQkMsRUFBQUEsa0JBQWtCLEVBQUUsS0FiRDtBQWNuQm5CLEVBQUFBLFlBQVksRUFBRTtBQWRLLENBQXZCO2VBaUJlUixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TdGVwcGVyLnNjc3NcIjtcclxuaW1wb3J0IFN0ZXAgZnJvbSAnLi9TdGVwL1N0ZXAnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsvTGluayc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNzc1ZhcmlhYmxlcyB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBTdGVwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHNlbGVjdGVkOiBNYXRoLm1pbihwcm9wcy5zdGVwcy5sZW5ndGggLSAxLCBwcm9wcy5zZWxlY3RlZEl0ZW0gLSAxKSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFN0ZXAoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBpbmRleFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTdGVwcygpIHtcclxuICAgICAgICBjb25zdCB7IHN0ZXBzLCBoaWRlTGFiZWxzLCBwYWxldHRlOiB7IGljb24gfSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgc3RlcHMubWFwKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQgPT09IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNCZWZvcmVTZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQgPiBpbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGljb25Db2xvciA9IChpc1NlbGVjdGVkIHx8IGlzQmVmb3JlU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgKHN0ZXAucHJvZ3Jlc3MgIT09ICdub25lJyAmJiBzdGVwLnByb2dyZXNzICE9PSAncGFydGlhbCcpXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgc3RlcC5wcm9ncmVzcyA9PT0gJ2RvbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoaWNvbi5maW5pc2hlZCB8fCAnd2hpdGUnKSA6IChpY29uLnVuZmluaXNoZWQgfHwgJ2JsYWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXsnc3RlcCcgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBwZXItaXRlbSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLWJlZm9yZS1zZWxlY3RlZCc6IGlzQmVmb3JlU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tZGlzYWJsZWQnOiBzdGVwLmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyFzdGVwLmRpc2FibGVkICYmIHRoaXMuc2VsZWN0U3RlcChpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17c3RlcC5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db2xvcj17aWNvbkNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtzdGVwLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmxhYmVsPXtzdGVwLnN1YmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzPXtzdGVwLnByb2dyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVMYWJlbD17aGlkZUxhYmVsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KGluZGV4ICE9PSBzdGVwcy5sZW5ndGggLSAxKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwcGVyLWl0ZW0nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLWJlZm9yZS1zZWxlY3RlZCc6IGlzQmVmb3JlU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluay8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFsZXR0ZSwgdmVydGljYWwsIHNob3dDb21wbGV0ZWRDb3VudCwgc3RlcHMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e2NyZWF0ZUNzc1ZhcmlhYmxlcyhwYWxldHRlKSArIHN0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwcGVyJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBwZXItY29udGFpbmVyJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJy0tdmVydGljYWwnOiB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN0ZXBzKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcHBlci1jb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dDb21wbGV0ZWRDb3VudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLnN0YXRlLnNlbGVjdGVkICsgMX0vJHtzdGVwcy5sZW5ndGh9IENvbXBsZXRlZGBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5TdGVwcGVyLnByb3BUeXBlcyA9IHtcclxuICAgIHN0ZXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIHBhbGV0dGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBoaWRlTGFiZWxzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNob3dDb21wbGV0ZWRDb3VudDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5udW1iZXJcclxufVxyXG5cclxuU3RlcHBlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzdGVwczogW10sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBmaW5pc2hlZDogJycsXHJcbiAgICAgICAgICAgIHVuZmluaXNoZWQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaXJjbGU6ICcnLFxyXG4gICAgICAgIGxpbms6ICcnLFxyXG4gICAgICAgIGxhYmVsOiAnJ1xyXG4gICAgfSxcclxuICAgIGhpZGVMYWJlbHM6IGZhbHNlLFxyXG4gICAgdmVydGljYWw6IGZhbHNlLFxyXG4gICAgc2hvd0NvbXBsZXRlZENvdW50OiBmYWxzZSxcclxuICAgIHNlbGVjdGVkSXRlbTogMVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGVwcGVyOyJdfQ==