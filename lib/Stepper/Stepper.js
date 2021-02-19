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
              iconColor: icon,
              label: step.label,
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
    link: '',
    icon: '',
    label: ''
  },
  hideLabels: false,
  vertical: false
};
var _default = Stepper;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsImluZGV4Iiwic2V0U3RhdGUiLCJzdGVwcyIsImhpZGVMYWJlbHMiLCJpY29uIiwicGFsZXR0ZSIsIm1hcCIsInN0ZXAiLCJpc1NlbGVjdGVkIiwiaXNCZWZvcmVTZWxlY3RlZCIsInNlbGVjdFN0ZXAiLCJsYWJlbCIsImxlbmd0aCIsInZlcnRpY2FsIiwic3R5bGVzIiwicmVuZGVyU3RlcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJib29sIiwiZGVmYXVsdFByb3BzIiwiY2lyY2xlIiwidW5maW5pc2hlZCIsImN1cnJlbnQiLCJjdXJyZW50Qm9yZGVyIiwiY3VycmVudEJvcmRlcklubmVyIiwiZmluaXNoZWQiLCJob3ZlciIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7OztBQUNGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBQ0MsTUFBQUEsUUFBUSxFQUFFO0FBQVgsS0FBYjtBQUZlO0FBR2xCOzs7O1dBRUQsb0JBQVdDLEtBQVgsRUFBa0I7QUFBQTs7QUFDZCxhQUFPLFlBQU07QUFDVCxRQUFBLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQ1ZGLFVBQUFBLFFBQVEsRUFBRUM7QUFEQSxTQUFkO0FBR0gsT0FKRDtBQUtIOzs7V0FFRCx1QkFBYztBQUFBOztBQUFBLHdCQUN1QyxLQUFLSCxLQUQ1QztBQUFBLFVBQ0ZLLEtBREUsZUFDRkEsS0FERTtBQUFBLFVBQ0tDLFVBREwsZUFDS0EsVUFETDtBQUFBLFVBQzRCQyxJ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cyBmcm9tIFwiLi9TdGVwcGVyLnNjc3NcIjtcclxuaW1wb3J0IFN0ZXAgZnJvbSAnLi9TdGVwL1N0ZXAnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsvTGluayc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNzc1ZhcmlhYmxlcyB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBTdGVwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7c2VsZWN0ZWQ6IDB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFN0ZXAoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBpbmRleFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTdGVwcygpIHtcclxuICAgICAgICBjb25zdCB7IHN0ZXBzLCBoaWRlTGFiZWxzLCBwYWxldHRlOiB7IGljb24gfSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgc3RlcHMubWFwKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQgPT09IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNCZWZvcmVTZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQgPiBpbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9eydzdGVwJyArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHBlci1pdGVtJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1zZWxlY3RlZCc6IGlzU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tYmVmb3JlLXNlbGVjdGVkJzogaXNCZWZvcmVTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbGVjdFN0ZXAoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RlcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3N0ZXAuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29sb3I9e2ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3N0ZXAubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUxhYmVsPXtoaWRlTGFiZWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoaW5kZXggIT09IHN0ZXBzLmxlbmd0aCAtIDEpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBwZXItaXRlbSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLWJlZm9yZS1zZWxlY3RlZCc6IGlzQmVmb3JlU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYWxldHRlLCB2ZXJ0aWNhbCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57Y3JlYXRlQ3NzVmFyaWFibGVzKHBhbGV0dGUpICsgc3R5bGVzfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBwZXInOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHBlci1jb250YWluZXInOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnLS12ZXJ0aWNhbCc6IHZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU3RlcHMoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblN0ZXBwZXIucHJvcFR5cGVzID0ge1xyXG4gICAgc3RlcHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgcGFsZXR0ZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGhpZGVMYWJlbHM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgdmVydGljYWw6IFByb3BUeXBlcy5ib29sXHJcbn1cclxuXHJcblN0ZXBwZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3RlcHM6IFtdLFxyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICAgIGNpcmNsZToge1xyXG4gICAgICAgICAgICB1bmZpbmlzaGVkOiAnJyxcclxuICAgICAgICAgICAgY3VycmVudDogJycsXHJcbiAgICAgICAgICAgIGN1cnJlbnRCb3JkZXI6ICcnLFxyXG4gICAgICAgICAgICBjdXJyZW50Qm9yZGVySW5uZXI6ICcnLFxyXG4gICAgICAgICAgICBmaW5pc2hlZDogJycsXHJcbiAgICAgICAgICAgIGhvdmVyOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluazogJycsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgbGFiZWw6ICcnXHJcbiAgICB9LFxyXG4gICAgaGlkZUxhYmVsczogZmFsc2UsXHJcbiAgICB2ZXJ0aWNhbDogZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RlcHBlcjsiXX0=