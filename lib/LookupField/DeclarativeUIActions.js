"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var DeclarativeUIActions = /*#__PURE__*/function (_React$Component) {
  _inherits(DeclarativeUIActions, _React$Component);

  var _super = _createSuper(DeclarativeUIActions);

  function DeclarativeUIActions(props) {
    var _this;

    _classCallCheck(this, DeclarativeUIActions);

    _this = _super.call(this, props);
    _this.formatActions = _this.formatActions.bind(_assertThisInitialized(_this));
    _this.state = {
      actions: []
    };
    return _this;
  }

  _createClass(DeclarativeUIActions, [{
    key: "compareIcon",
    value: function compareIcon(icon) {
      var icons = {
        "circle-info-outline": "info-circle",
        "magnifying-glass-outline": "search"
      };
      return icons[icon];
    }
  }, {
    key: "formatActions",
    value: function formatActions(props) {
      var _this2 = this;

      var actions = props.declarativeUiActions;
      var formattedActions = actions === null || actions === void 0 ? void 0 : actions.map(function (_ref) {
        var actionDispatch = _ref.actionDispatch,
            assignmentId = _ref.assignmentId,
            icon = _ref.icon,
            requiresValue = _ref.requiresValue,
            tooltip = _ref.tooltip;
        return {
          actionDispatch: actionDispatch,
          icon: _this2.compareIcon(icon),
          id: assignmentId,
          requiresValue: requiresValue,
          tooltip: tooltip
        };
      });

      if (!_lodash["default"].isEqual(formattedActions, this.state.actions)) {
        this.setState({
          actions: formattedActions
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      this.formatActions(this.props);
      var actions = this.state.actions;
      return actions.map(function (action) {
        var _this3$props, _this3$props$record;

        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          title: action === null || action === void 0 ? void 0 : action.tooltip,
          className: (0, _classnames["default"])({
            "action": true,
            "visible": !(action !== null && action !== void 0 && action.requiresValue) || ((_this3$props = _this3.props) === null || _this3$props === void 0 ? void 0 : (_this3$props$record = _this3$props.record) === null || _this3$props$record === void 0 ? void 0 : _this3$props$record.sysId)
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
            icon: action === null || action === void 0 ? void 0 : action.icon,
            size: "sm"
          })
        }, action === null || action === void 0 ? void 0 : action.id);
      });
    }
  }]);

  return DeclarativeUIActions;
}(React.Component);

DeclarativeUIActions.propTypes = {
  declarativeUiActions: _propTypes["default"].array,
  record: _propTypes["default"].object.required
};
var _default = DeclarativeUIActions;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb29rdXBGaWVsZC9EZWNsYXJhdGl2ZVVJQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJEZWNsYXJhdGl2ZVVJQWN0aW9ucyIsInByb3BzIiwiZm9ybWF0QWN0aW9ucyIsImJpbmQiLCJzdGF0ZSIsImFjdGlvbnMiLCJpY29uIiwiaWNvbnMiLCJkZWNsYXJhdGl2ZVVpQWN0aW9ucyIsImZvcm1hdHRlZEFjdGlvbnMiLCJtYXAiLCJhY3Rpb25EaXNwYXRjaCIsImFzc2lnbm1lbnRJZCIsInJlcXVpcmVzVmFsdWUiLCJ0b29sdGlwIiwiY29tcGFyZUljb24iLCJpZCIsIl8iLCJpc0VxdWFsIiwic2V0U3RhdGUiLCJhY3Rpb24iLCJyZWNvcmQiLCJzeXNJZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYXJyYXkiLCJvYmplY3QiLCJyZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxvQjs7Ozs7QUFDRixnQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CQyxJQUFuQiwrQkFBckI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsT0FBTyxFQUFFO0FBREEsS0FBYjtBQUhlO0FBTWxCOzs7O1dBRUQscUJBQVlDLElBQVosRUFBa0I7QUFDZCxVQUFNQyxLQUFLLEdBQUc7QUFDViwrQkFBdUIsYUFEYjtBQUVWLG9DQUE0QjtBQUZsQixPQUFkO0FBS0EsYUFBT0EsS0FBSyxDQUFDRCxJQUFELENBQVo7QUFDSDs7O1dBRUQsdUJBQWNMLEtBQWQsRUFBcUI7QUFBQTs7QUFDakIsVUFBTUksT0FBTyxHQUFHSixLQUFLLENBQUNPLG9CQUF0QjtBQUVBLFVBQU1DLGdCQUFnQixHQUFHSixPQUFILGFBQUdBLE9BQUgsdUJBQUdBLE9BQU8sQ0FBRUssR0FBVCxDQUFhLGdCQUFrRTtBQUFBLFlBQWhFQyxjQUFnRSxRQUFoRUEsY0FBZ0U7QUFBQSxZQUFoREMsWUFBZ0QsUUFBaERBLFlBQWdEO0FBQUEsWUFBbENOLElBQWtDLFFBQWxDQSxJQUFrQztBQUFBLFlBQTVCTyxhQUE0QixRQUE1QkEsYUFBNEI7QUFBQSxZQUFiQyxPQUFhLFFBQWJBLE9BQWE7QUFDcEcsZUFBTztBQUNISCxVQUFBQSxjQUFjLEVBQUVBLGNBRGI7QUFFSEwsVUFBQUEsSUFBSSxFQUFFLE1BQUksQ0FBQ1MsV0FBTCxDQUFpQlQsSUFBakIsQ0FGSDtBQUdIVSxVQUFBQSxFQUFFLEVBQUVKLFlBSEQ7QUFJSEMsVUFBQUEsYUFBYSxFQUFiQSxhQUpHO0FBS0hDLFVBQUFBLE9BQU8sRUFBUEE7QUFMRyxTQUFQO0FBT0gsT0FSd0IsQ0FBekI7O0FBVUEsVUFBSSxDQUFDRyxtQkFBRUMsT0FBRixDQUFVVCxnQkFBVixFQUE0QixLQUFLTCxLQUFMLENBQVdDLE9BQXZDLENBQUwsRUFBc0Q7QUFDbEQsYUFBS2MsUUFBTCxDQUFjO0FBQ1ZkLFVBQUFBLE9BQU8sRUFBRUk7QUFEQyxTQUFkO0FBR0g7QUFFSjs7O1dBRUQsa0JBQVM7QUFBQTs7QUFDTCxXQUFLUCxhQUFMLENBQW1CLEtBQUtELEtBQXhCO0FBREssVUFFRUksT0FGRixHQUVhLEtBQUtELEtBRmxCLENBRUVDLE9BRkY7QUFJTCxhQUFPQSxPQUFPLENBQUNLLEdBQVIsQ0FBWSxVQUFBVSxNQUFNO0FBQUE7O0FBQUEsNEJBQ3JCO0FBRUksVUFBQSxLQUFLLEVBQUVBLE1BQUYsYUFBRUEsTUFBRix1QkFBRUEsTUFBTSxDQUFFTixPQUZuQjtBQUdJLFVBQUEsU0FBUyxFQUNMLDRCQUFXO0FBQ1Asc0JBQVUsSUFESDtBQUVQLHVCQUFXLEVBQUNNLE1BQUQsYUFBQ0EsTUFBRCxlQUFDQSxNQUFNLENBQUVQLGFBQVQsc0JBQTBCLE1BQUksQ0FBQ1osS0FBL0Isd0VBQTBCLGFBQVlvQixNQUF0Qyx3REFBMEIsb0JBQW9CQyxLQUE5QztBQUZKLFdBQVgsQ0FKUjtBQUFBLGlDQVFNLHFCQUFDLGdCQUFEO0FBQU0sWUFBQSxJQUFJLEVBQUVGLE1BQUYsYUFBRUEsTUFBRix1QkFBRUEsTUFBTSxDQUFFZCxJQUFwQjtBQUEwQixZQUFBLElBQUksRUFBQztBQUEvQjtBQVJOLFdBQ1NjLE1BRFQsYUFDU0EsTUFEVCx1QkFDU0EsTUFBTSxDQUFFSixFQURqQixDQURxQjtBQUFBLE9BQWxCLENBQVA7QUFXSDs7OztFQXREOEJPLEtBQUssQ0FBQ0MsUzs7QUEyRHpDeEIsb0JBQW9CLENBQUN5QixTQUFyQixHQUFpQztBQUM3QmpCLEVBQUFBLG9CQUFvQixFQUFFaUIsc0JBQVVDLEtBREg7QUFFN0JMLEVBQUFBLE1BQU0sRUFBRUksc0JBQVVFLE1BQVYsQ0FBaUJDO0FBRkksQ0FBakM7ZUFLZTVCLG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXHJcblxyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5jbGFzcyBEZWNsYXJhdGl2ZVVJQWN0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmZvcm1hdEFjdGlvbnMgPSB0aGlzLmZvcm1hdEFjdGlvbnMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhY3Rpb25zOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wYXJlSWNvbihpY29uKSB7XHJcbiAgICAgICAgY29uc3QgaWNvbnMgPSB7XHJcbiAgICAgICAgICAgIFwiY2lyY2xlLWluZm8tb3V0bGluZVwiOiBcImluZm8tY2lyY2xlXCIsXHJcbiAgICAgICAgICAgIFwibWFnbmlmeWluZy1nbGFzcy1vdXRsaW5lXCI6IFwic2VhcmNoXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpY29uc1tpY29uXTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXRBY3Rpb25zKHByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHByb3BzLmRlY2xhcmF0aXZlVWlBY3Rpb25zO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtYXR0ZWRBY3Rpb25zID0gYWN0aW9ucz8ubWFwKCh7YWN0aW9uRGlzcGF0Y2gsIGFzc2lnbm1lbnRJZCwgaWNvbiwgcmVxdWlyZXNWYWx1ZSwgdG9vbHRpcH0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbkRpc3BhdGNoOiBhY3Rpb25EaXNwYXRjaCxcclxuICAgICAgICAgICAgICAgIGljb246IHRoaXMuY29tcGFyZUljb24oaWNvbiksXHJcbiAgICAgICAgICAgICAgICBpZDogYXNzaWdubWVudElkLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZXNWYWx1ZSxcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIV8uaXNFcXVhbChmb3JtYXR0ZWRBY3Rpb25zLCB0aGlzLnN0YXRlLmFjdGlvbnMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uczogZm9ybWF0dGVkQWN0aW9uc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZm9ybWF0QWN0aW9ucyh0aGlzLnByb3BzKVxyXG4gICAgICAgIGNvbnN0IHthY3Rpb25zfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiBhY3Rpb25zLm1hcChhY3Rpb24gPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2FjdGlvbj8uaWR9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17YWN0aW9uPy50b29sdGlwfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6ICFhY3Rpb24/LnJlcXVpcmVzVmFsdWUgfHwgdGhpcy5wcm9wcz8ucmVjb3JkPy5zeXNJZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9PjxJY29uIGljb249e2FjdGlvbj8uaWNvbn0gc2l6ZT1cInNtXCIvPjwvZGl2PlxyXG4gICAgICAgICkpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuRGVjbGFyYXRpdmVVSUFjdGlvbnMucHJvcFR5cGVzID0ge1xyXG4gICAgZGVjbGFyYXRpdmVVaUFjdGlvbnM6IHByb3BUeXBlcy5hcnJheSxcclxuICAgIHJlY29yZDogcHJvcFR5cGVzLm9iamVjdC5yZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWNsYXJhdGl2ZVVJQWN0aW9uczsiXX0=