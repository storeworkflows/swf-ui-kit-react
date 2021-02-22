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
      selected: 0
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
  showCompletedCount: _propTypes["default"].bool
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
  showCompletedCount: false
};
var _default = Stepper;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsImluZGV4Iiwic2V0U3RhdGUiLCJzdGVwcyIsImhpZGVMYWJlbHMiLCJpY29uIiwicGFsZXR0ZSIsIm1hcCIsInN0ZXAiLCJpc1NlbGVjdGVkIiwiaXNCZWZvcmVTZWxlY3RlZCIsImljb25Db2xvciIsInByb2dyZXNzIiwiZmluaXNoZWQiLCJ1bmZpbmlzaGVkIiwiZGlzYWJsZWQiLCJzZWxlY3RTdGVwIiwibGFiZWwiLCJzdWJsYWJlbCIsImxlbmd0aCIsInZlcnRpY2FsIiwic2hvd0NvbXBsZXRlZENvdW50Iiwic3R5bGVzIiwicmVuZGVyU3RlcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJib29sIiwiZGVmYXVsdFByb3BzIiwiY2lyY2xlIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE87Ozs7O0FBQ0YsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFFQyxNQUFBQSxRQUFRLEVBQUU7QUFBWixLQUFiO0FBRmU7QUFHbEI7Ozs7V0FFRCxvQkFBV0MsS0FBWCxFQUFrQjtBQUFBOztBQUNkLGFBQU8sWUFBTTtBQUNULFFBQUEsTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFDVkYsVUFBQUEsUUFBUSxFQUFFQztBQURBLFNBQWQ7QUFHSCxPQUpEO0FBS0g7OztXQUVELHVCQUFjO0FBQUE7O0FBQUEsd0JBQ3VDLEtBQUtILEtBRDVDO0FBQUEsVUFDRkssS0FERSxlQUNGQSxLQURFO0FBQUEsVUFDS0MsVUFETCxlQUNLQSxVQURMO0FBQUEsVUFDNEJDLElBRDVCLGVBQ2lCQyxPQURqQixDQUM0QkQsSUFENUI7QUFHVixhQUNJRixLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9QLEtBQVAsRUFBaUI7QUFDdkIsWUFBTVEsVUFBVSxHQUFHLE1BQUksQ0FBQ1YsS0FBTCxDQUFXQyxRQUFYLEtBQXdCQyxLQUEzQztBQUNBLFlBQU1TLGdCQUFnQixHQUFHLE1BQUksQ0FBQ1gsS0FBTCxDQUFXQyxRQUFYLEdBQXNCQyxLQUEvQztBQUNBLFlBQU1VLFNBQVMsR0FBRyxDQUFDRixVQUFVLElBQUlDLGdCQUFmLEtBQ1ZGLElBQUksQ0FBQ0ksUUFBTCxLQUFrQixNQUFsQixJQUE0QkosSUFBSSxDQUFDSSxRQUFMLEtBQWtCLFNBRHBDLElBRVhKLElBQUksQ0FBQ0ksUUFBTCxLQUFrQixNQUZQLEdBR1hQLElBQUksQ0FBQ1EsUUFBTCxJQUFpQixPQUhOLEdBR2tCUixJQUFJLENBQUNTLFVBQUwsSUFBbUIsT0FIdkQ7QUFLQSw0QkFDSSxzQkFBQyxpQkFBRCxDQUFPLFFBQVA7QUFBQSxrQ0FDSTtBQUNJLFlBQUEsU0FBUyxFQUFFLDRCQUFXO0FBQ2xCLDhCQUFnQixJQURFO0FBRWxCLDRCQUFjTCxVQUZJO0FBR2xCLG1DQUFxQkMsZ0JBSEg7QUFJbEIsNEJBQWNGLElBQUksQ0FBQ087QUFKRCxhQUFYLENBRGY7QUFPSSxZQUFBLE9BQU8sRUFBRSxDQUFDUCxJQUFJLENBQUNPLFFBQU4sSUFBa0IsTUFBSSxDQUFDQyxVQUFMLENBQWdCZixLQUFoQixDQVAvQjtBQUFBLG1DQVNJLHFCQUFDLGdCQUFEO0FBQ0ksY0FBQSxJQUFJLEVBQUVPLElBQUksQ0FBQ0gsSUFEZjtBQUVJLGNBQUEsU0FBUyxFQUFFTSxTQUZmO0FBR0ksY0FBQSxLQUFLLEVBQUVILElBQUksQ0FBQ1MsS0FIaEI7QUFJSSxjQUFBLFFBQVEsRUFBRVQsSUFBSSxDQUFDVSxRQUpuQjtBQUtJLGNBQUEsUUFBUSxFQUFFVixJQUFJLENBQUNJLFFBTG5CO0FBTUksY0FBQSxTQUFTLEVBQUVSO0FBTmY7QUFUSixZQURKLEVBbUJNSCxLQUFLLEtBQUtFLEtBQUssQ0FBQ2dCLE1BQU4sR0FBZSxDQUExQixpQkFDRDtBQUNJLFlBQUEsU0FBUyxFQUFFLDRCQUFXO0FBQ2xCLDhCQUFnQixJQURFO0FBRWxCLG1DQUFxQlQ7QUFGSCxhQUFYLENBRGY7QUFBQSxtQ0FNSSxxQkFBQyxnQkFBRDtBQU5KLFlBcEJKO0FBQUEsV0FBcUIsU0FBU1QsS0FBOUIsQ0FESjtBQWdDSCxPQXhDRCxDQURKO0FBMkNIOzs7V0FFRCxrQkFBUztBQUFBLHlCQUNvRCxLQUFLSCxLQUR6RDtBQUFBLFVBQ0dRLE9BREgsZ0JBQ0dBLE9BREg7QUFBQSxVQUNZYyxRQURaLGdCQUNZQSxRQURaO0FBQUEsVUFDc0JDLGtCQUR0QixnQkFDc0JBLGtCQUR0QjtBQUFBLFVBQzBDbEIsS0FEMUMsZ0JBQzBDQSxLQUQxQztBQUdMLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBTyxVQUFBLElBQUksRUFBQyxVQUFaO0FBQUEsb0JBQXdCLCtCQUFtQkcsT0FBbkIsSUFBOEJnQjtBQUF0RCxVQURKLGVBRUk7QUFDSSxVQUFBLFNBQVMsRUFBRSw0QkFBVztBQUNsQix1QkFBVyxJQURPO0FBRWxCLGlDQUFxQixJQUZIO0FBR2xCLDBCQUFjRjtBQUhJLFdBQVgsQ0FEZjtBQUFBLG9CQU9LLEtBQUtHLFdBQUw7QUFQTCxVQUZKLGVBV0k7QUFBSyxVQUFBLFNBQVMsRUFBQyxpQkFBZjtBQUFBLG9CQUNLRixrQkFBa0IsY0FDWixLQUFLdEIsS0FBTCxDQUFXQyxRQUFYLEdBQXNCLENBRFYsY0FDZUcsS0FBSyxDQUFDZ0IsTUFEckI7QUFEdkIsVUFYSjtBQUFBLFFBREo7QUFtQkg7Ozs7RUFwRmlCSyxrQkFBTUMsUzs7QUF1RjVCNUIsT0FBTyxDQUFDNkIsU0FBUixHQUFvQjtBQUNoQnZCLEVBQUFBLEtBQUssRUFBRXdCLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsTUFBNUIsQ0FEUztBQUVoQnZCLEVBQUFBLE9BQU8sRUFBRXFCLHNCQUFVRSxNQUZIO0FBR2hCekIsRUFBQUEsVUFBVSxFQUFFdUIsc0JBQVVHLElBSE47QUFJaEJWLEVBQUFBLFFBQVEsRUFBRU8sc0JBQVVHLElBSko7QUFLaEJULEVBQUFBLGtCQUFrQixFQUFFTSxzQkFBVUc7QUFMZCxDQUFwQjtBQVFBakMsT0FBTyxDQUFDa0MsWUFBUixHQUF1QjtBQUNuQjVCLEVBQUFBLEtBQUssRUFBRSxFQURZO0FBRW5CRyxFQUFBQSxPQUFPLEVBQUU7QUFDTEQsSUFBQUEsSUFBSSxFQUFFO0FBQ0ZRLE1BQUFBLFFBQVEsRUFBRSxFQURSO0FBRUZDLE1BQUFBLFVBQVUsRUFBRTtBQUZWLEtBREQ7QUFLTGtCLElBQUFBLE1BQU0sRUFBRSxFQUxIO0FBTUxDLElBQUFBLElBQUksRUFBRSxFQU5EO0FBT0xoQixJQUFBQSxLQUFLLEVBQUU7QUFQRixHQUZVO0FBV25CYixFQUFBQSxVQUFVLEVBQUUsS0FYTztBQVluQmdCLEVBQUFBLFFBQVEsRUFBRSxLQVpTO0FBYW5CQyxFQUFBQSxrQkFBa0IsRUFBRTtBQWJELENBQXZCO2VBZ0JleEIsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU3RlcHBlci5zY3NzXCI7XHJcbmltcG9ydCBTdGVwIGZyb20gJy4vU3RlcC9TdGVwJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rL0xpbmsnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDc3NWYXJpYWJsZXMgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuY2xhc3MgU3RlcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0geyBzZWxlY3RlZDogMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFN0ZXAoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBpbmRleFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTdGVwcygpIHtcclxuICAgICAgICBjb25zdCB7IHN0ZXBzLCBoaWRlTGFiZWxzLCBwYWxldHRlOiB7IGljb24gfSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgc3RlcHMubWFwKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQgPT09IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNCZWZvcmVTZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQgPiBpbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGljb25Db2xvciA9IChpc1NlbGVjdGVkIHx8IGlzQmVmb3JlU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgKHN0ZXAucHJvZ3Jlc3MgIT09ICdub25lJyAmJiBzdGVwLnByb2dyZXNzICE9PSAncGFydGlhbCcpXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgc3RlcC5wcm9ncmVzcyA9PT0gJ2RvbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoaWNvbi5maW5pc2hlZCB8fCAnd2hpdGUnKSA6IChpY29uLnVuZmluaXNoZWQgfHwgJ2JsYWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXsnc3RlcCcgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBwZXItaXRlbSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLWJlZm9yZS1zZWxlY3RlZCc6IGlzQmVmb3JlU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tZGlzYWJsZWQnOiBzdGVwLmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyFzdGVwLmRpc2FibGVkICYmIHRoaXMuc2VsZWN0U3RlcChpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17c3RlcC5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db2xvcj17aWNvbkNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtzdGVwLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmxhYmVsPXtzdGVwLnN1YmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzPXtzdGVwLnByb2dyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVMYWJlbD17aGlkZUxhYmVsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KGluZGV4ICE9PSBzdGVwcy5sZW5ndGggLSAxKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwcGVyLWl0ZW0nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLWJlZm9yZS1zZWxlY3RlZCc6IGlzQmVmb3JlU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluay8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFsZXR0ZSwgdmVydGljYWwsIHNob3dDb21wbGV0ZWRDb3VudCwgc3RlcHMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e2NyZWF0ZUNzc1ZhcmlhYmxlcyhwYWxldHRlKSArIHN0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwcGVyJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBwZXItY29udGFpbmVyJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJy0tdmVydGljYWwnOiB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN0ZXBzKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcHBlci1jb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dDb21wbGV0ZWRDb3VudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLnN0YXRlLnNlbGVjdGVkICsgMX0vJHtzdGVwcy5sZW5ndGh9IENvbXBsZXRlZGBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5TdGVwcGVyLnByb3BUeXBlcyA9IHtcclxuICAgIHN0ZXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIHBhbGV0dGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBoaWRlTGFiZWxzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNob3dDb21wbGV0ZWRDb3VudDogUHJvcFR5cGVzLmJvb2xcclxufVxyXG5cclxuU3RlcHBlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzdGVwczogW10sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBmaW5pc2hlZDogJycsXHJcbiAgICAgICAgICAgIHVuZmluaXNoZWQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaXJjbGU6ICcnLFxyXG4gICAgICAgIGxpbms6ICcnLFxyXG4gICAgICAgIGxhYmVsOiAnJ1xyXG4gICAgfSxcclxuICAgIGhpZGVMYWJlbHM6IGZhbHNlLFxyXG4gICAgdmVydGljYWw6IGZhbHNlLFxyXG4gICAgc2hvd0NvbXBsZXRlZENvdW50OiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGVwcGVyOyJdfQ==