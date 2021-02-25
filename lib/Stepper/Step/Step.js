"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./Step.scss");

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../../Icon/Icon"));

var _utils = require("../utils");

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

var Step = /*#__PURE__*/function (_React$Component) {
  _inherits(Step, _React$Component);

  var _super = _createSuper(Step);

  function Step(props) {
    _classCallCheck(this, Step);

    return _super.call(this, props);
  }

  _createClass(Step, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          iconColor = _this$props.iconColor,
          iconSize = _this$props.iconSize,
          label = _this$props.label,
          sublabel = _this$props.sublabel,
          progress = _this$props.progress,
          hideLabel = _this$props.hideLabel;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "step-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "step-item --line",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "step-line --before"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "step-item --body",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classnames2["default"])(_defineProperty({
              'step-circle': true
            }, "--".concat(progress), progress)),
            style: {
              width: (0, _utils.getCircleSize)(iconSize),
              height: (0, _utils.getCircleSize)(iconSize)
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "step-icon",
              children: icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
                icon: icon,
                color: iconColor || 'white',
                size: iconSize,
                customSize: typeof iconSize === 'number' ? iconSize : undefined
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "step-label",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: !hideLabel && label
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "step-sublabel",
              children: !hideLabel && sublabel
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "step-item --line",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "step-line --after"
          })
        })]
      });
    }
  }]);

  return Step;
}(_react["default"].Component);

Step.propTypes = {
  icon: _propTypes["default"].string,
  iconColor: _propTypes["default"].string,
  iconSize: _propTypes["default"].string,
  label: _propTypes["default"].string,
  sublabel: _propTypes["default"].string,
  progress: _propTypes["default"].string,
  hideLabel: _propTypes["default"].bool
};
Step.defaultProps = {
  icon: '',
  iconColor: 'white',
  iconSize: 'sm',
  label: '',
  sublabel: '',
  progress: '',
  hideLabel: false
};
var _default = Step;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TdGVwcGVyL1N0ZXAvU3RlcC5qcyJdLCJuYW1lcyI6WyJTdGVwIiwicHJvcHMiLCJpY29uIiwiaWNvbkNvbG9yIiwiaWNvblNpemUiLCJsYWJlbCIsInN1YmxhYmVsIiwicHJvZ3Jlc3MiLCJoaWRlTGFiZWwiLCJ3aWR0aCIsImhlaWdodCIsInVuZGVmaW5lZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsSTs7Ozs7QUFDRixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTO0FBRWxCOzs7O1dBRUQsa0JBQVM7QUFBQSx3QkFDdUUsS0FBS0EsS0FENUU7QUFBQSxVQUNHQyxJQURILGVBQ0dBLElBREg7QUFBQSxVQUNTQyxTQURULGVBQ1NBLFNBRFQ7QUFBQSxVQUNvQkMsUUFEcEIsZUFDb0JBLFFBRHBCO0FBQUEsVUFDOEJDLEtBRDlCLGVBQzhCQSxLQUQ5QjtBQUFBLFVBQ3FDQyxRQURyQyxlQUNxQ0EsUUFEckM7QUFBQSxVQUMrQ0MsUUFEL0MsZUFDK0NBLFFBRC9DO0FBQUEsVUFDeURDLFNBRHpELGVBQ3lEQSxTQUR6RDtBQUdMLDBCQUNJO0FBQUssUUFBQSxTQUFTLEVBQUMsZ0JBQWY7QUFBQSxnQ0FDSTtBQUFLLFVBQUEsU0FBUyxFQUFDLGtCQUFmO0FBQUEsaUNBQ0k7QUFBSyxZQUFBLFNBQVMsRUFBQztBQUFmO0FBREosVUFESixlQUlJO0FBQUssVUFBQSxTQUFTLEVBQUMsa0JBQWY7QUFBQSxrQ0FDSTtBQUNJLFlBQUEsU0FBUyxFQUFFO0FBQ1AsNkJBQWU7QUFEUiwyQkFFREQsUUFGQyxHQUVZQSxRQUZaLEVBRGY7QUFLSSxZQUFBLEtBQUssRUFBRTtBQUNIRSxjQUFBQSxLQUFLLEVBQUUsMEJBQWNMLFFBQWQsQ0FESjtBQUVITSxjQUFBQSxNQUFNLEVBQUUsMEJBQWNOLFFBQWQ7QUFGTCxhQUxYO0FBQUEsbUNBVUk7QUFBSyxjQUFBLFNBQVMsRUFBQyxXQUFmO0FBQUEsd0JBQ0tGLElBQUksaUJBQ0wscUJBQUMsZ0JBQUQ7QUFDSSxnQkFBQSxJQUFJLEVBQUVBLElBRFY7QUFFSSxnQkFBQSxLQUFLLEVBQUVDLFNBQVMsSUFBSSxPQUZ4QjtBQUdJLGdCQUFBLElBQUksRUFBRUMsUUFIVjtBQUlJLGdCQUFBLFVBQVUsRUFBRSxPQUFPQSxRQUFQLEtBQW9CLFFBQXBCLEdBQStCQSxRQUEvQixHQUEwQ087QUFKMUQ7QUFGSjtBQVZKLFlBREosZUFzQkk7QUFBSyxZQUFBLFNBQVMsRUFBQyxZQUFmO0FBQUEsb0NBQ0k7QUFBQSx3QkFBTyxDQUFDSCxTQUFELElBQWNIO0FBQXJCLGNBREosZUFFSTtBQUFNLGNBQUEsU0FBUyxFQUFDLGVBQWhCO0FBQUEsd0JBQWlDLENBQUNHLFNBQUQsSUFBY0Y7QUFBL0MsY0FGSjtBQUFBLFlBdEJKO0FBQUEsVUFKSixlQWdDSTtBQUFLLFVBQUEsU0FBUyxFQUFDLGtCQUFmO0FBQUEsaUNBQ0k7QUFBSyxZQUFBLFNBQVMsRUFBQztBQUFmO0FBREosVUFoQ0o7QUFBQSxRQURKO0FBc0NIOzs7O0VBOUNjTSxrQkFBTUMsUzs7QUFpRHpCYixJQUFJLENBQUNjLFNBQUwsR0FBaUI7QUFDYlosRUFBQUEsSUFBSSxFQUFFYSxzQkFBVUMsTUFESDtBQUViYixFQUFBQSxTQUFTLEVBQUVZLHNCQUFVQyxNQUZSO0FBR2JaLEVBQUFBLFFBQVEsRUFBRVcsc0JBQVVDLE1BSFA7QUFJYlgsRUFBQUEsS0FBSyxFQUFFVSxzQkFBVUMsTUFKSjtBQUtiVixFQUFBQSxRQUFRLEVBQUVTLHNCQUFVQyxNQUxQO0FBTWJULEVBQUFBLFFBQVEsRUFBRVEsc0JBQVVDLE1BTlA7QUFPYlIsRUFBQUEsU0FBUyxFQUFFTyxzQkFBVUU7QUFQUixDQUFqQjtBQVVBakIsSUFBSSxDQUFDa0IsWUFBTCxHQUFvQjtBQUNoQmhCLEVBQUFBLElBQUksRUFBRSxFQURVO0FBRWhCQyxFQUFBQSxTQUFTLEVBQUUsT0FGSztBQUdoQkMsRUFBQUEsUUFBUSxFQUFFLElBSE07QUFJaEJDLEVBQUFBLEtBQUssRUFBRSxFQUpTO0FBS2hCQyxFQUFBQSxRQUFRLEVBQUUsRUFMTTtBQU1oQkMsRUFBQUEsUUFBUSxFQUFFLEVBTk07QUFPaEJDLEVBQUFBLFNBQVMsRUFBRTtBQVBLLENBQXBCO2VBVWVSLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vU3RlcC5zY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vSWNvbi9JY29uJztcclxuaW1wb3J0IHsgZ2V0Q2lyY2xlU2l6ZSB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuY2xhc3MgU3RlcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpY29uLCBpY29uQ29sb3IsIGljb25TaXplLCBsYWJlbCwgc3VibGFiZWwsIHByb2dyZXNzLCBoaWRlTGFiZWwgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGVwLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RlcC1pdGVtIC0tbGluZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWxpbmUgLS1iZWZvcmVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1pdGVtIC0tYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGVwLWNpcmNsZSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYC0tJHtwcm9ncmVzc31gXTogcHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogZ2V0Q2lyY2xlU2l6ZShpY29uU2l6ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGdldENpcmNsZVNpemUoaWNvblNpemUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17aWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17aWNvbkNvbG9yIHx8ICd3aGl0ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17aWNvblNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tU2l6ZT17dHlwZW9mIGljb25TaXplID09PSAnbnVtYmVyJyA/IGljb25TaXplIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnshaGlkZUxhYmVsICYmIGxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RlcC1zdWJsYWJlbFwiPnshaGlkZUxhYmVsICYmIHN1YmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGVwLWl0ZW0gLS1saW5lJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtbGluZSAtLWFmdGVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuU3RlcC5wcm9wVHlwZXMgPSB7XHJcbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaWNvbkNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaWNvblNpemU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHN1YmxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcHJvZ3Jlc3M6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBoaWRlTGFiZWw6IFByb3BUeXBlcy5ib29sXHJcbn07XHJcblxyXG5TdGVwLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGljb246ICcnLFxyXG4gICAgaWNvbkNvbG9yOiAnd2hpdGUnLFxyXG4gICAgaWNvblNpemU6ICdzbScsXHJcbiAgICBsYWJlbDogJycsXHJcbiAgICBzdWJsYWJlbDogJycsXHJcbiAgICBwcm9ncmVzczogJycsXHJcbiAgICBoaWRlTGFiZWw6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGVwOyJdfQ==