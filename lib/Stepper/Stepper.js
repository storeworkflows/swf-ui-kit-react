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
              sublabel: step.sublabel,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGVwcGVyL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsImluZGV4Iiwic2V0U3RhdGUiLCJzdGVwcyIsImhpZGVMYWJlbHMiLCJpY29uIiwicGFsZXR0ZSIsIm1hcCIsInN0ZXAiLCJpc1NlbGVjdGVkIiwiaXNCZWZvcmVTZWxlY3RlZCIsInNlbGVjdFN0ZXAiLCJsYWJlbCIsInN1YmxhYmVsIiwibGVuZ3RoIiwidmVydGljYWwiLCJzdHlsZXMiLCJyZW5kZXJTdGVwcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJjaXJjbGUiLCJ1bmZpbmlzaGVkIiwiY3VycmVudCIsImN1cnJlbnRCb3JkZXIiLCJjdXJyZW50Qm9yZGVySW5uZXIiLCJmaW5pc2hlZCIsImhvdmVyIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE87Ozs7O0FBQ0YsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFDQyxNQUFBQSxRQUFRLEVBQUU7QUFBWCxLQUFiO0FBRmU7QUFHbEI7Ozs7V0FFRCxvQkFBV0MsS0FBWCxFQUFrQjtBQUFBOztBQUNkLGFBQU8sWUFBTTtBQUNULFFBQUEsTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFDVkYsVUFBQUEsUUFBUSxFQUFFQztBQURBLFNBQWQ7QUFHSCxPQUpEO0FBS0g7OztXQUVELHVCQUFjO0FBQUE7O0FBQUEsd0JBQ3VDLEtBQUtILEtBRDVDO0FBQUEsVUFDRkssS0FERSxlQUNGQSxLQURFO0FBQUEsVUFDS0MsVUFETCxlQUNLQSxVQURMO0FB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LENBQXZCO2VBbUJlbEIsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU3RlcHBlci5zY3NzXCI7XHJcbmltcG9ydCBTdGVwIGZyb20gJy4vU3RlcC9TdGVwJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rL0xpbmsnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDc3NWYXJpYWJsZXMgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuY2xhc3MgU3RlcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge3NlbGVjdGVkOiAwfTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RTdGVwKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogaW5kZXhcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU3RlcHMoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdGVwcywgaGlkZUxhYmVscywgcGFsZXR0ZTogeyBpY29uIH0gfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHN0ZXBzLm1hcCgoc3RlcCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkID09PSBpbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQmVmb3JlU2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkID4gaW5kZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXsnc3RlcCcgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBwZXItaXRlbSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy0tc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctLWJlZm9yZS1zZWxlY3RlZCc6IGlzQmVmb3JlU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZWxlY3RTdGVwKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtzdGVwLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbG9yPXtpY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtzdGVwLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmxhYmVsPXtzdGVwLnN1YmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVMYWJlbD17aGlkZUxhYmVsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KGluZGV4ICE9PSBzdGVwcy5sZW5ndGggLSAxKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwcGVyLWl0ZW0nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLS1iZWZvcmUtc2VsZWN0ZWQnOiBpc0JlZm9yZVNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFsZXR0ZSwgdmVydGljYWwgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e2NyZWF0ZUNzc1ZhcmlhYmxlcyhwYWxldHRlKSArIHN0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwcGVyJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXBwZXItY29udGFpbmVyJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJy0tdmVydGljYWwnOiB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN0ZXBzKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5TdGVwcGVyLnByb3BUeXBlcyA9IHtcclxuICAgIHN0ZXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIHBhbGV0dGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBoaWRlTGFiZWxzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbFxyXG59XHJcblxyXG5TdGVwcGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHN0ZXBzOiBbXSxcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgICBjaXJjbGU6IHtcclxuICAgICAgICAgICAgdW5maW5pc2hlZDogJycsXHJcbiAgICAgICAgICAgIGN1cnJlbnQ6ICcnLFxyXG4gICAgICAgICAgICBjdXJyZW50Qm9yZGVyOiAnJyxcclxuICAgICAgICAgICAgY3VycmVudEJvcmRlcklubmVyOiAnJyxcclxuICAgICAgICAgICAgZmluaXNoZWQ6ICcnLFxyXG4gICAgICAgICAgICBob3ZlcjogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbms6ICcnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIGxhYmVsOiAnJ1xyXG4gICAgfSxcclxuICAgIGhpZGVMYWJlbHM6IGZhbHNlLFxyXG4gICAgdmVydGljYWw6IGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0ZXBwZXI7Il19