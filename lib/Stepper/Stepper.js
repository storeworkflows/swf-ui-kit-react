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
        var iconColor = (!step.progress || step.progress === 'done') && (isSelected || isBeforeSelected) ? icon.finished || 'white' : icon.unfinished || 'black';
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react["default"].Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classnames["default"])({
              'stepper-item': true,
              '--selected': isSelected,
              '--before-selected': isBeforeSelected
            }),
            onClick: _this3.selectStep(index),
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
          vertical = _this$props2.vertical;
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
  vertical: _propTypes["default"].bool
};
Stepper.defaultProps = {
  steps: [],
  palette: {
    circle: {
      unfinished: '',
      current: '',
      currentBorder: '',
      currentBorderInner: '',
      finished: '',
      hover: ''
    },
    icon: {
      finished: '',
      unfinished: ''
    },
    link: '',
    label: ''
  },
  hideLabels: false,
  vertical: false
};
var _default = Stepper;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsImluZGV4Iiwic2V0U3RhdGUiLCJzdGVwcyIsImhpZGVMYWJlbHMiLCJpY29uIiwicGFsZXR0ZSIsIm1hcCIsInN0ZXAiLCJpc1NlbGVjdGVkIiwiaXNCZWZvcmVTZWxlY3RlZCIsImljb25Db2xvciIsInByb2dyZXNzIiwiZmluaXNoZWQiLCJ1bmZpbmlzaGVkIiwic2VsZWN0U3RlcCIsImxhYmVsIiwic3VibGFiZWwiLCJsZW5ndGgiLCJ2ZXJ0aWNhbCIsInN0eWxlcyIsInJlbmRlclN0ZXBzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0IiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsImNpcmNsZSIsImN1cnJlbnQiLCJjdXJyZW50Qm9yZGVyIiwiY3VycmVudEJvcmRlcklubmVyIiwiaG92ZXIiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsTzs7Ozs7QUFDRixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQUVDLE1BQUFBLFFBQVEsRUFBRTtBQUFaLEtBQWI7QUFGZTtBQUdsQjs7OztXQUVELG9CQUFXQyxLQUFYLEVBQWtCO0FBQUE7O0FBQ2QsYUFBTyxZQUFNO0FBQ1QsUUFBQSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUNWRixVQUFBQSxRQUFRLEVBQUVDO0FBREEsU0FBZDtBQUdILE9BSkQ7QUFLSDs7O1dBRUQsdUJBQWM7QUFBQTs7QUFBQSx3QkFDdUMsS0FBS0gsS0FENUM7QUFBQSxVQUNGSyxLQURFLGVBQ0ZBLEtBREU7QUFBQSxV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RSxFQUhYO0FBSUpDLE1BQUFBLGtCQUFrQixFQUFFLEVBSmhCO0FBS0pwQixNQUFBQSxRQUFRLEVBQUUsRUFMTjtBQU1KcUIsTUFBQUEsS0FBSyxFQUFFO0FBTkgsS0FESDtBQVNMN0IsSUFBQUEsSUFBSSxFQUFFO0FBQ0ZRLE1BQUFBLFFBQVEsRUFBRSxFQURSO0FBRUZDLE1BQUFBLFVBQVUsRUFBRTtBQUZWLEtBVEQ7QUFhTHFCLElBQUFBLElBQUksRUFBRSxFQWJEO0FBY0xuQixJQUFBQSxLQUFLLEVBQUU7QUFkRixHQUZVO0FBa0JuQlosRUFBQUEsVUFBVSxFQUFFLEtBbEJPO0FBbUJuQmUsRUFBQUEsUUFBUSxFQUFFO0FBbkJTLENBQXZCO2VBc0JldEIsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU3RlcHBlci5zY3NzXCI7XHJcbmltcG9ydCBTdGVwIGZyb20gJy4vU3RlcC9TdGVwJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rL0xpbmsnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDc3NWYXJpYWJsZXMgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuY2xhc3MgU3RlcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0geyBzZWxlY3RlZDogMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFN0ZXAoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBpbmRleFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTdGVwcygpIHtcclxuICAgICAgICBjb25zdCB7IHN0ZXBzLCBoaWRlTGFiZWxzLCBwYWxldHRlOiB7IGljb24gfSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgc3RlcHMubWFwKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQgPT09IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNCZWZvcmVTZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQgPiBpbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGljb25Db2xvciA9ICghc3RlcC5wcm9ncmVzcyB8fCBzdGVwLnByb2dyZXNzID09PSAnZG9uZScpICYmIChpc1NlbGVjdGVkIHx8IGlzQmVmb3JlU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoaWNvbi5maW5pc2hlZCB8fCAnd2hpdGUnKSA6IChpY29uLnVuZmluaXNoZWQgfHwgJ2JsYWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXsnc3RlcCcgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBwZXItaXRlbSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLWJlZm9yZS1zZWxlY3RlZCc6IGlzQmVmb3JlU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZWxlY3RTdGVwKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtzdGVwLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbG9yPXtpY29uQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3N0ZXAubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibGFiZWw9e3N0ZXAuc3VibGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3N0ZXAucHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUxhYmVsPXtoaWRlTGFiZWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoaW5kZXggIT09IHN0ZXBzLmxlbmd0aCAtIDEpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBwZXItaXRlbSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tYmVmb3JlLXNlbGVjdGVkJzogaXNCZWZvcmVTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYWxldHRlLCB2ZXJ0aWNhbCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57Y3JlYXRlQ3NzVmFyaWFibGVzKHBhbGV0dGUpICsgc3R5bGVzfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBwZXInOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHBlci1jb250YWluZXInOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnLS12ZXJ0aWNhbCc6IHZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU3RlcHMoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblN0ZXBwZXIucHJvcFR5cGVzID0ge1xyXG4gICAgc3RlcHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgcGFsZXR0ZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGhpZGVMYWJlbHM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgdmVydGljYWw6IFByb3BUeXBlcy5ib29sXHJcbn1cclxuXHJcblN0ZXBwZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3RlcHM6IFtdLFxyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICAgIGNpcmNsZToge1xyXG4gICAgICAgICAgICB1bmZpbmlzaGVkOiAnJyxcclxuICAgICAgICAgICAgY3VycmVudDogJycsXHJcbiAgICAgICAgICAgIGN1cnJlbnRCb3JkZXI6ICcnLFxyXG4gICAgICAgICAgICBjdXJyZW50Qm9yZGVySW5uZXI6ICcnLFxyXG4gICAgICAgICAgICBmaW5pc2hlZDogJycsXHJcbiAgICAgICAgICAgIGhvdmVyOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBmaW5pc2hlZDogJycsXHJcbiAgICAgICAgICAgIHVuZmluaXNoZWQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW5rOiAnJyxcclxuICAgICAgICBsYWJlbDogJydcclxuICAgIH0sXHJcbiAgICBoaWRlTGFiZWxzOiBmYWxzZSxcclxuICAgIHZlcnRpY2FsOiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGVwcGVyOyJdfQ==