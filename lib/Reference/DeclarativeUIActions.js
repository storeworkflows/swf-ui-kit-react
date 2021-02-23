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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZWZlcmVuY2UvRGVjbGFyYXRpdmVVSUFjdGlvbnMuanMiXSwibmFtZXMiOlsiRGVjbGFyYXRpdmVVSUFjdGlvbnMiLCJwcm9wcyIsImZvcm1hdEFjdGlvbnMiLCJiaW5kIiwic3RhdGUiLCJhY3Rpb25zIiwiaWNvbiIsImljb25zIiwiZGVjbGFyYXRpdmVVaUFjdGlvbnMiLCJmb3JtYXR0ZWRBY3Rpb25zIiwibWFwIiwiYWN0aW9uRGlzcGF0Y2giLCJhc3NpZ25tZW50SWQiLCJyZXF1aXJlc1ZhbHVlIiwidG9vbHRpcCIsImNvbXBhcmVJY29uIiwiaWQiLCJfIiwiaXNFcXVhbCIsInNldFN0YXRlIiwiYWN0aW9uIiwicmVjb3JkIiwic3lzSWQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImFycmF5Iiwib2JqZWN0IiwicmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsb0I7Ozs7O0FBQ0YsZ0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsK0JBQXJCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLE9BQU8sRUFBRTtBQURBLEtBQWI7QUFIZTtBQU1sQjs7OztXQUVELHFCQUFZQyxJQUFaLEVBQWtCO0FBQ2QsVUFBTUMsS0FBSyxHQUFHO0FBQ1YsK0JBQXVCLGFBRGI7QUFFVixvQ0FBNEI7QUFGbEIsT0FBZDtBQUtBLGFBQU9BLEtBQUssQ0FBQ0QsSUFBRCxDQUFaO0FBQ0g7OztXQUVELHVCQUFjTCxLQUFkLEVBQXFCO0FBQUE7O0FBQ2pCLFVBQU1JLE9BQU8sR0FBR0osS0FBSyxDQUFDTyxvQkFBdEI7QUFFQSxVQUFNQyxnQkFBZ0IsR0FBR0osT0FBTyxDQUFDSyxHQUFSLENBQVksZ0JBQWtFO0FBQUEsWUFBaEVDLGNBQWdFLFFBQWhFQSxjQUFnRTtBQUFBLFlBQWhEQyxZQUFnRCxRQUFoREEsWUFBZ0Q7QUFBQSxZQUFsQ04sSUFBa0MsUUFBbENBLElBQWtDO0FBQUEsWUFBNUJPLGFBQTRCLFFBQTVCQSxhQUE0QjtBQUFBLFlBQWJDLE9BQWEsUUFBYkEsT0FBYTtBQUNuRyxlQUFPO0FBQ0hILFVBQUFBLGNBQWMsRUFBRUEsY0FEYjtBQUVITCxVQUFBQSxJQUFJLEVBQUUsTUFBSSxDQUFDUyxXQUFMLENBQWlCVCxJQUFqQixDQUZIO0FBR0hVLFVBQUFBLEVBQUUsRUFBRUosWUFIRDtBQUlIQyxVQUFBQSxhQUFhLEVBQWJBLGFBSkc7QUFLSEMsVUFBQUEsT0FBTyxFQUFQQTtBQUxHLFNBQVA7QUFPSCxPQVJ3QixDQUF6Qjs7QUFVQSxVQUFJLENBQUNHLG1CQUFFQyxPQUFGLENBQVVULGdCQUFWLEVBQTRCLEtBQUtMLEtBQUwsQ0FBV0MsT0FBdkMsQ0FBTCxFQUFzRDtBQUNsRCxhQUFLYyxRQUFMLENBQWM7QUFDVmQsVUFBQUEsT0FBTyxFQUFFSTtBQURDLFNBQWQ7QUFHSDtBQUVKOzs7V0FFRCxrQkFBUztBQUFBOztBQUNMLFdBQUtQLGFBQUwsQ0FBbUIsS0FBS0QsS0FBeEI7QUFESyxVQUVFSSxPQUZGLEdBRWEsS0FBS0QsS0FGbEIsQ0FFRUMsT0FGRjtBQUlMLGFBQU9BLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLFVBQUFVLE1BQU07QUFBQSw0QkFDckI7QUFFSSxVQUFBLEtBQUssRUFBRUEsTUFBTSxDQUFDTixPQUZsQjtBQUdJLFVBQUEsU0FBUyxFQUNMLDRCQUFXO0FBQ1Asc0JBQVUsSUFESDtBQUVQLHVCQUFXLENBQUNNLE1BQU0sQ0FBQ1AsYUFBUixJQUF5QixNQUFJLENBQUNaLEtBQUwsQ0FBV29CLE1BQVgsQ0FBa0JDO0FBRi9DLFdBQVgsQ0FKUjtBQUFBLGlDQVFNLHFCQUFDLGdCQUFEO0FBQU0sWUFBQSxJQUFJLEVBQUVGLE1BQU0sQ0FBQ2Q7QUFBbkI7QUFSTixXQUNTYyxNQUFNLENBQUNKLEVBRGhCLENBRHFCO0FBQUEsT0FBbEIsQ0FBUDtBQVdIOzs7O0VBdEQ4Qk8sS0FBSyxDQUFDQyxTOztBQTJEekN4QixvQkFBb0IsQ0FBQ3lCLFNBQXJCLEdBQWlDO0FBQzdCakIsRUFBQUEsb0JBQW9CLEVBQUVpQixzQkFBVUMsS0FESDtBQUU3QkwsRUFBQUEsTUFBTSxFQUFFSSxzQkFBVUUsTUFBVixDQUFpQkM7QUFGSSxDQUFqQztlQUtlNUIsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcclxuXHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmNsYXNzIERlY2xhcmF0aXZlVUlBY3Rpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuZm9ybWF0QWN0aW9ucyA9IHRoaXMuZm9ybWF0QWN0aW9ucy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFjdGlvbnM6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBhcmVJY29uKGljb24pIHtcclxuICAgICAgICBjb25zdCBpY29ucyA9IHtcclxuICAgICAgICAgICAgXCJjaXJjbGUtaW5mby1vdXRsaW5lXCI6IFwiaW5mby1jaXJjbGVcIixcclxuICAgICAgICAgICAgXCJtYWduaWZ5aW5nLWdsYXNzLW91dGxpbmVcIjogXCJzZWFyY2hcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGljb25zW2ljb25dO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdEFjdGlvbnMocHJvcHMpIHtcclxuICAgICAgICBjb25zdCBhY3Rpb25zID0gcHJvcHMuZGVjbGFyYXRpdmVVaUFjdGlvbnM7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZEFjdGlvbnMgPSBhY3Rpb25zLm1hcCgoe2FjdGlvbkRpc3BhdGNoLCBhc3NpZ25tZW50SWQsIGljb24sIHJlcXVpcmVzVmFsdWUsIHRvb2x0aXB9KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25EaXNwYXRjaDogYWN0aW9uRGlzcGF0Y2gsXHJcbiAgICAgICAgICAgICAgICBpY29uOiB0aGlzLmNvbXBhcmVJY29uKGljb24pLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGFzc2lnbm1lbnRJZCxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVzVmFsdWUsXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFfLmlzRXF1YWwoZm9ybWF0dGVkQWN0aW9ucywgdGhpcy5zdGF0ZS5hY3Rpb25zKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IGZvcm1hdHRlZEFjdGlvbnNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmZvcm1hdEFjdGlvbnModGhpcy5wcm9wcylcclxuICAgICAgICBjb25zdCB7YWN0aW9uc30gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gYWN0aW9ucy5tYXAoYWN0aW9uID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXthY3Rpb24uaWR9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17YWN0aW9uLnRvb2x0aXB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogIWFjdGlvbi5yZXF1aXJlc1ZhbHVlIHx8IHRoaXMucHJvcHMucmVjb3JkLnN5c0lkXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0+PEljb24gaWNvbj17YWN0aW9uLmljb259Lz48L2Rpdj5cclxuICAgICAgICApKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbkRlY2xhcmF0aXZlVUlBY3Rpb25zLnByb3BUeXBlcyA9IHtcclxuICAgIGRlY2xhcmF0aXZlVWlBY3Rpb25zOiBwcm9wVHlwZXMuYXJyYXksXHJcbiAgICByZWNvcmQ6IHByb3BUeXBlcy5vYmplY3QucmVxdWlyZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVjbGFyYXRpdmVVSUFjdGlvbnM7Il19