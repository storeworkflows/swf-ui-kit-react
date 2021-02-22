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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsImluZGV4Iiwic2V0U3RhdGUiLCJzdGVwcyIsImhpZGVMYWJlbHMiLCJpY29uIiwicGFsZXR0ZSIsIm1hcCIsInN0ZXAiLCJpc1NlbGVjdGVkIiwiaXNCZWZvcmVTZWxlY3RlZCIsImljb25Db2xvciIsInByb2dyZXNzIiwiZmluaXNoZWQiLCJ1bmZpbmlzaGVkIiwic2VsZWN0U3RlcCIsImxhYmVsIiwic3VibGFiZWwiLCJsZW5ndGgiLCJ2ZXJ0aWNhbCIsInNob3dDb21wbGV0ZWRDb3VudCIsInN0eWxlcyIsInJlbmRlclN0ZXBzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0IiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsImNpcmNsZSIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7OztBQUNGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBRUMsTUFBQUEsUUFBUSxFQUFFO0FBQVosS0FBYjtBQUZlO0FBR2xCOzs7O1dBRUQsb0JBQVdDLEtBQVgsRUFBa0I7QUFBQTs7QUFDZCxhQUFPLFlBQU07QUFDVCxRQUFBLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQ1ZGLFVBQUFBLFFBQVEsRUFBRUM7QUFEQSxTQUFkO0FBR0gsT0FKRDtBQUtIOzs7V0FFRCx1QkFBYztBQUFBOztBQUFBLHdCQUN1QyxLQUFLSCxLQUQ1QztBQUFBLFVBQ0ZLLEtBREUsZUFDRkEsS0FERTtBQUFBLFVBQ0tDLFVBREwsZUFDS0EsVUFETDtBQUFBLFVBQzRCQyxJ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VUcsSUFKSjtBQUtoQlQsRUFBQUEsa0JBQWtCLEVBQUVNLHNCQUFVRztBQUxkLENBQXBCO0FBUUFoQyxPQUFPLENBQUNpQyxZQUFSLEdBQXVCO0FBQ25CM0IsRUFBQUEsS0FBSyxFQUFFLEVBRFk7QUFFbkJHLEVBQUFBLE9BQU8sRUFBRTtBQUNMRCxJQUFBQSxJQUFJLEVBQUU7QUFDRlEsTUFBQUEsUUFBUSxFQUFFLEVBRFI7QUFFRkMsTUFBQUEsVUFBVSxFQUFFO0FBRlYsS0FERDtBQUtMaUIsSUFBQUEsTUFBTSxFQUFFLEVBTEg7QUFNTEMsSUFBQUEsSUFBSSxFQUFFLEVBTkQ7QUFPTGhCLElBQUFBLEtBQUssRUFBRTtBQVBGLEdBRlU7QUFXbkJaLEVBQUFBLFVBQVUsRUFBRSxLQVhPO0FBWW5CZSxFQUFBQSxRQUFRLEVBQUUsS0FaUztBQWFuQkMsRUFBQUEsa0JBQWtCLEVBQUU7QUFiRCxDQUF2QjtlQWdCZXZCLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL1N0ZXBwZXIuc2Nzc1wiO1xyXG5pbXBvcnQgU3RlcCBmcm9tICcuL1N0ZXAvU3RlcCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluay9MaW5rJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ3NzVmFyaWFibGVzIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmNsYXNzIFN0ZXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgc2VsZWN0ZWQ6IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RTdGVwKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogaW5kZXhcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU3RlcHMoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdGVwcywgaGlkZUxhYmVscywgcGFsZXR0ZTogeyBpY29uIH0gfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHN0ZXBzLm1hcCgoc3RlcCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkID09PSBpbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQmVmb3JlU2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkID4gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uQ29sb3IgPSAoaXNTZWxlY3RlZCB8fCBpc0JlZm9yZVNlbGVjdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIChzdGVwLnByb2dyZXNzICE9PSAnbm9uZScgJiYgc3RlcC5wcm9ncmVzcyAhPT0gJ3BhcnRpYWwnKVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IHN0ZXAucHJvZ3Jlc3MgPT09ICdkb25lJ1xyXG4gICAgICAgICAgICAgICAgICAgID8gKGljb24uZmluaXNoZWQgfHwgJ3doaXRlJykgOiAoaWNvbi51bmZpbmlzaGVkIHx8ICdibGFjaycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17J3N0ZXAnICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwcGVyLWl0ZW0nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLXNlbGVjdGVkJzogaXNTZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1iZWZvcmUtc2VsZWN0ZWQnOiBpc0JlZm9yZVNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VsZWN0U3RlcChpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17c3RlcC5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db2xvcj17aWNvbkNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtzdGVwLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmxhYmVsPXtzdGVwLnN1YmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzPXtzdGVwLnByb2dyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVMYWJlbD17aGlkZUxhYmVsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KGluZGV4ICE9PSBzdGVwcy5sZW5ndGggLSAxKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwcGVyLWl0ZW0nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLWJlZm9yZS1zZWxlY3RlZCc6IGlzQmVmb3JlU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluay8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFsZXR0ZSwgdmVydGljYWwsIHNob3dDb21wbGV0ZWRDb3VudCwgc3RlcHMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e2NyZWF0ZUNzc1ZhcmlhYmxlcyhwYWxldHRlKSArIHN0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwcGVyJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBwZXItY29udGFpbmVyJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJy0tdmVydGljYWwnOiB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN0ZXBzKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcHBlci1jb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dDb21wbGV0ZWRDb3VudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLnN0YXRlLnNlbGVjdGVkICsgMX0vJHtzdGVwcy5sZW5ndGh9IENvbXBsZXRlZGBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5TdGVwcGVyLnByb3BUeXBlcyA9IHtcclxuICAgIHN0ZXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIHBhbGV0dGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBoaWRlTGFiZWxzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNob3dDb21wbGV0ZWRDb3VudDogUHJvcFR5cGVzLmJvb2xcclxufVxyXG5cclxuU3RlcHBlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzdGVwczogW10sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBmaW5pc2hlZDogJycsXHJcbiAgICAgICAgICAgIHVuZmluaXNoZWQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaXJjbGU6ICcnLFxyXG4gICAgICAgIGxpbms6ICcnLFxyXG4gICAgICAgIGxhYmVsOiAnJ1xyXG4gICAgfSxcclxuICAgIGhpZGVMYWJlbHM6IGZhbHNlLFxyXG4gICAgdmVydGljYWw6IGZhbHNlLFxyXG4gICAgc2hvd0NvbXBsZXRlZENvdW50OiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGVwcGVyOyJdfQ==