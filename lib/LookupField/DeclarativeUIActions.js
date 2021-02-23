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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
      var formattedActions = actions.map(function (_ref) {
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
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          title: action.tooltip,
          className: (0, _classnames["default"])({
            "action": true,
            "visible": !action.requiresValue || _this3.props.record.sysId
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
            icon: action.icon
          })
        }, action.id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb29rdXBGaWVsZC9EZWNsYXJhdGl2ZVVJQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJEZWNsYXJhdGl2ZVVJQWN0aW9ucyIsInByb3BzIiwiZm9ybWF0QWN0aW9ucyIsImJpbmQiLCJzdGF0ZSIsImFjdGlvbnMiLCJpY29uIiwiaWNvbnMiLCJkZWNsYXJhdGl2ZVVpQWN0aW9ucyIsImZvcm1hdHRlZEFjdGlvbnMiLCJtYXAiLCJhY3Rpb25EaXNwYXRjaCIsImFzc2lnbm1lbnRJZCIsInJlcXVpcmVzVmFsdWUiLCJ0b29sdGlwIiwiY29tcGFyZUljb24iLCJpZCIsIl8iLCJpc0VxdWFsIiwic2V0U3RhdGUiLCJhY3Rpb24iLCJyZWNvcmQiLCJzeXNJZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYXJyYXkiLCJvYmplY3QiLCJyZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxvQjs7Ozs7QUFDRixnQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CQyxJQUFuQiwrQkFBckI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsT0FBTyxFQUFFO0FBREEsS0FBYjtBQUhlO0FBTWxCOzs7O1dBRUQscUJBQVlDLElBQVosRUFBa0I7QUFDZCxVQUFNQyxLQUFLLEdBQUc7QUFDViwrQkFBdUIsYUFEYjtBQUVWLG9DQUE0QjtBQUZsQixPQUFkO0FBS0EsYUFBT0EsS0FBSyxDQUFDRCxJQUFELENBQVo7QUFDSDs7O1dBRUQsdUJBQWNMLEtBQWQsRUFBcUI7QUFBQTs7QUFDakIsVUFBTUksT0FBTyxHQUFHSixLQUFLLENBQUNPLG9CQUF0QjtBQUVBLFVBQU1DLGdCQUFnQixHQUFHSixPQUFPLENBQUNLLEdBQVIsQ0FBWSxnQkFBa0U7QUFBQSxZQUFoRUMsY0FBZ0UsUUFBaEVBLGNBQWdFO0FBQUEsWUFBaERDLFlBQWdELFFBQWhEQSxZQUFnRDtBQUFBLFlBQWxDTixJQUFrQyxRQUFsQ0EsSUFBa0M7QUFBQSxZQUE1Qk8sYUFBNEIsUUFBNUJBLGFBQTRCO0FBQUEsWUFBYkMsT0FBYSxRQUFiQSxPQUFhO0FBQ25HLGVBQU87QUFDSEgsVUFBQUEsY0FBYyxFQUFFQSxjQURiO0FBRUhMLFVBQUFBLElBQUksRUFBRSxNQUFJLENBQUNTLFdBQUwsQ0FBaUJULElBQWpCLENBRkg7QUFHSFUsVUFBQUEsRUFBRSxFQUFFSixZQUhEO0FBSUhDLFVBQUFBLGFBQWEsRUFBYkEsYUFKRztBQUtIQyxVQUFBQSxPQUFPLEVBQVBBO0FBTEcsU0FBUDtBQU9ILE9BUndCLENBQXpCOztBQVVBLFVBQUksQ0FBQ0csbUJBQUVDLE9BQUYsQ0FBVVQsZ0JBQVYsRUFBNEIsS0FBS0wsS0FBTCxDQUFXQyxPQUF2QyxDQUFMLEVBQXNEO0FBQ2xELGFBQUtjLFFBQUwsQ0FBYztBQUNWZCxVQUFBQSxPQUFPLEVBQUVJO0FBREMsU0FBZDtBQUdIO0FBRUo7OztXQUVELGtCQUFTO0FBQUE7O0FBQ0wsV0FBS1AsYUFBTCxDQUFtQixLQUFLRCxLQUF4QjtBQURLLFVBRUVJLE9BRkYsR0FFYSxLQUFLRCxLQUZsQixDQUVFQyxPQUZGO0FBSUwsYUFBT0EsT0FBTyxDQUFDSyxHQUFSLENBQVksVUFBQVUsTUFBTTtBQUFBLDRCQUNyQjtBQUVJLFVBQUEsS0FBSyxFQUFFQSxNQUFNLENBQUNOLE9BRmxCO0FBR0ksVUFBQSxTQUFTLEVBQ0wsNEJBQVc7QUFDUCxzQkFBVSxJQURIO0FBRVAsdUJBQVcsQ0FBQ00sTUFBTSxDQUFDUCxhQUFSLElBQXlCLE1BQUksQ0FBQ1osS0FBTCxDQUFXb0IsTUFBWCxDQUFrQkM7QUFGL0MsV0FBWCxDQUpSO0FBQUEsaUNBUU0scUJBQUMsZ0JBQUQ7QUFBTSxZQUFBLElBQUksRUFBRUYsTUFBTSxDQUFDZDtBQUFuQjtBQVJOLFdBQ1NjLE1BQU0sQ0FBQ0osRUFEaEIsQ0FEcUI7QUFBQSxPQUFsQixDQUFQO0FBV0g7Ozs7RUF0RDhCTyxLQUFLLENBQUNDLFM7O0FBMkR6Q3hCLG9CQUFvQixDQUFDeUIsU0FBckIsR0FBaUM7QUFDN0JqQixFQUFBQSxvQkFBb0IsRUFBRWlCLHNCQUFVQyxLQURIO0FBRTdCTCxFQUFBQSxNQUFNLEVBQUVJLHNCQUFVRSxNQUFWLENBQWlCQztBQUZJLENBQWpDO2VBS2U1QixvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmNsYXNzIERlY2xhcmF0aXZlVUlBY3Rpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZm9ybWF0QWN0aW9ucyA9IHRoaXMuZm9ybWF0QWN0aW9ucy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aW9uczogW11cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBhcmVJY29uKGljb24pIHtcbiAgICAgICAgY29uc3QgaWNvbnMgPSB7XG4gICAgICAgICAgICBcImNpcmNsZS1pbmZvLW91dGxpbmVcIjogXCJpbmZvLWNpcmNsZVwiLFxuICAgICAgICAgICAgXCJtYWduaWZ5aW5nLWdsYXNzLW91dGxpbmVcIjogXCJzZWFyY2hcIlxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGljb25zW2ljb25dO1xuICAgIH1cblxuICAgIGZvcm1hdEFjdGlvbnMocHJvcHMpIHtcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHByb3BzLmRlY2xhcmF0aXZlVWlBY3Rpb25zO1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZEFjdGlvbnMgPSBhY3Rpb25zLm1hcCgoe2FjdGlvbkRpc3BhdGNoLCBhc3NpZ25tZW50SWQsIGljb24sIHJlcXVpcmVzVmFsdWUsIHRvb2x0aXB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFjdGlvbkRpc3BhdGNoOiBhY3Rpb25EaXNwYXRjaCxcbiAgICAgICAgICAgICAgICBpY29uOiB0aGlzLmNvbXBhcmVJY29uKGljb24pLFxuICAgICAgICAgICAgICAgIGlkOiBhc3NpZ25tZW50SWQsXG4gICAgICAgICAgICAgICAgcmVxdWlyZXNWYWx1ZSxcbiAgICAgICAgICAgICAgICB0b29sdGlwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghXy5pc0VxdWFsKGZvcm1hdHRlZEFjdGlvbnMsIHRoaXMuc3RhdGUuYWN0aW9ucykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFjdGlvbnM6IGZvcm1hdHRlZEFjdGlvbnNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5mb3JtYXRBY3Rpb25zKHRoaXMucHJvcHMpXG4gICAgICAgIGNvbnN0IHthY3Rpb25zfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIGFjdGlvbnMubWFwKGFjdGlvbiA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXthY3Rpb24uaWR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2FjdGlvbi50b29sdGlwfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiAhYWN0aW9uLnJlcXVpcmVzVmFsdWUgfHwgdGhpcy5wcm9wcy5yZWNvcmQuc3lzSWRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9PjxJY29uIGljb249e2FjdGlvbi5pY29ufS8+PC9kaXY+XG4gICAgICAgICkpXG4gICAgfVxuXG59XG5cblxuRGVjbGFyYXRpdmVVSUFjdGlvbnMucHJvcFR5cGVzID0ge1xuICAgIGRlY2xhcmF0aXZlVWlBY3Rpb25zOiBwcm9wVHlwZXMuYXJyYXksXG4gICAgcmVjb3JkOiBwcm9wVHlwZXMub2JqZWN0LnJlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IERlY2xhcmF0aXZlVUlBY3Rpb25zOyJdfQ==