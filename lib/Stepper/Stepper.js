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
    value: function renderSteps(steps) {
      var _this3 = this;

      var _this$props = this.props,
          hideLabels = _this$props.hideLabels,
          vertical = _this$props.vertical,
          icon = _this$props.palette.icon;
      return steps.map(function (step, index) {
        var isSelected = _this3.state.selected === index;
        var isBeforeSelected = _this3.state.selected > index;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react["default"].Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "stepper-item",
            onClick: _this3.selectStep(index),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
              icon: step.icon,
              iconColor: icon,
              label: step.label,
              selected: isSelected,
              beforeSelected: isBeforeSelected,
              hideLabel: hideLabels,
              vertical: vertical
            })
          }), index !== steps.length - 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "stepper-item",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link["default"], {
              beforeSelected: isBeforeSelected,
              vertical: vertical
            })
          })]
        }, 'step' + index);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          palette = _this$props2.palette,
          steps = _this$props2.steps,
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
          children: this.renderSteps(steps)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsImluZGV4Iiwic2V0U3RhdGUiLCJzdGVwcyIsImhpZGVMYWJlbHMiLCJ2ZXJ0aWNhbCIsImljb24iLCJwYWxldHRlIiwibWFwIiwic3RlcCIsImlzU2VsZWN0ZWQiLCJpc0JlZm9yZVNlbGVjdGVkIiwic2VsZWN0U3RlcCIsImxhYmVsIiwibGVuZ3RoIiwic3R5bGVzIiwicmVuZGVyU3RlcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJib29sIiwiZGVmYXVsdFByb3BzIiwiY2lyY2xlIiwidW5maW5pc2hlZCIsImN1cnJlbnQiLCJjdXJyZW50Qm9yZGVyIiwiY3VycmVudEJvcmRlcklubmVyIiwiZmluaXNoZWQiLCJob3ZlciIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7OztBQUNGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBQ0MsTUFBQUEsUUFBUSxFQUFFO0FBQVgsS0FBYjtBQUZlO0FBR2xCOzs7O1dBRUQsb0JBQVdDLEtBQVgsRUFBa0I7QUFBQTs7QUFDZCxhQUFPLFlBQU07QUFDVCxRQUFBLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQ1ZGLFVBQUFBLFFBQVEsRUFBRUM7QUFEQSxTQUFkO0FBR0gsT0FKRDtBQUtIOzs7V0FFRCxxQkFBWUUsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdCQUNxQyxLQUFLTCxLQUQxQztBQUFBLFVBQ1BNLFVBRE8sZUFDUEEsVUFETztBQUFBLFVBQ0tDLFFBREwsZUFDS0EsUUFETDtB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bkJDLEVBQUFBLFFBQVEsRUFBRTtBQWhCUyxDQUF2QjtlQW1CZVIsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU3RlcHBlci5zY3NzXCI7XHJcbmltcG9ydCBTdGVwIGZyb20gJy4vU3RlcC9TdGVwJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rL0xpbmsnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDc3NWYXJpYWJsZXMgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuY2xhc3MgU3RlcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge3NlbGVjdGVkOiAwfTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RTdGVwKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogaW5kZXhcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU3RlcHMoc3RlcHMpIHtcclxuICAgICAgICBjb25zdCB7IGhpZGVMYWJlbHMsIHZlcnRpY2FsLCBwYWxldHRlOiB7IGljb24gfSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgc3RlcHMubWFwKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQgPT09IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNCZWZvcmVTZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQgPiBpbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9eydzdGVwJyArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RlcHBlci1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VsZWN0U3RlcChpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17c3RlcC5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db2xvcj17aWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17c3RlcC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17aXNTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZWxlY3RlZD17aXNCZWZvcmVTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTGFiZWw9e2hpZGVMYWJlbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw9e3ZlcnRpY2FsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoaW5kZXggIT09IHN0ZXBzLmxlbmd0aCAtIDEpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXBwZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbGVjdGVkPXtpc0JlZm9yZVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbD17dmVydGljYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFsZXR0ZSwgc3RlcHMsIHZlcnRpY2FsIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntjcmVhdGVDc3NWYXJpYWJsZXMocGFsZXR0ZSkgKyBzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RlcHBlcic6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwcGVyLWNvbnRhaW5lcic6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICctLXZlcnRpY2FsJzogdmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdGVwcyhzdGVwcyl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5TdGVwcGVyLnByb3BUeXBlcyA9IHtcclxuICAgIHN0ZXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIHBhbGV0dGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBoaWRlTGFiZWxzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbFxyXG59XHJcblxyXG5TdGVwcGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHN0ZXBzOiBbXSxcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgICBjaXJjbGU6IHtcclxuICAgICAgICAgICAgdW5maW5pc2hlZDogJycsXHJcbiAgICAgICAgICAgIGN1cnJlbnQ6ICcnLFxyXG4gICAgICAgICAgICBjdXJyZW50Qm9yZGVyOiAnJyxcclxuICAgICAgICAgICAgY3VycmVudEJvcmRlcklubmVyOiAnJyxcclxuICAgICAgICAgICAgZmluaXNoZWQ6ICcnLFxyXG4gICAgICAgICAgICBob3ZlcjogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbms6ICcnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIGxhYmVsOiAnJ1xyXG4gICAgfSxcclxuICAgIGhpZGVMYWJlbHM6IGZhbHNlLFxyXG4gICAgdmVydGljYWw6IGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0ZXBwZXI7Il19