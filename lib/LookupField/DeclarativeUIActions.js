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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb29rdXBGaWVsZC9EZWNsYXJhdGl2ZVVJQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJEZWNsYXJhdGl2ZVVJQWN0aW9ucyIsInByb3BzIiwiZm9ybWF0QWN0aW9ucyIsImJpbmQiLCJzdGF0ZSIsImFjdGlvbnMiLCJpY29uIiwiaWNvbnMiLCJkZWNsYXJhdGl2ZVVpQWN0aW9ucyIsImZvcm1hdHRlZEFjdGlvbnMiLCJtYXAiLCJhY3Rpb25EaXNwYXRjaCIsImFzc2lnbm1lbnRJZCIsInJlcXVpcmVzVmFsdWUiLCJ0b29sdGlwIiwiY29tcGFyZUljb24iLCJpZCIsIl8iLCJpc0VxdWFsIiwic2V0U3RhdGUiLCJhY3Rpb24iLCJyZWNvcmQiLCJzeXNJZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYXJyYXkiLCJvYmplY3QiLCJyZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxvQjs7Ozs7QUFDRixnQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CQyxJQUFuQiwrQkFBckI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsT0FBTyxFQUFFO0FBREEsS0FBYjtBQUhlO0FBTWxCOzs7O1dBRUQscUJBQVlDLElBQVosRUFBa0I7QUFDZCxVQUFNQyxLQUFLLEdBQUc7QUFDViwrQkFBdUIsYUFEYjtBQUVWLG9DQUE0QjtBQUZsQixPQUFkO0FBS0EsYUFBT0EsS0FBSyxDQUFDRCxJQUFELENBQVo7QUFDSDs7O1dBRUQsdUJBQWNMLEtBQWQsRUFBcUI7QUFBQTs7QUFDakIsVUFBTUksT0FBTyxHQUFHSixLQUFLLENBQUNPLG9CQUF0QjtBQUVBLFVBQU1DLGdCQUFnQixHQUFHSixPQUFPLENBQUNLLEdBQVIsQ0FBWSxnQkFBa0U7QUFBQSxZQUFoRUMsY0FBZ0UsUUFBaEVBLGNBQWdFO0FBQUEsWUFBaERDLFlBQWdELFFBQWhEQSxZQUFnRDtBQUFBLFlBQWxDTixJQUFrQyxRQUFsQ0EsSUFBa0M7QUFBQSxZQUE1Qk8sYUFBNEIsUUFBNUJBLGFBQTRCO0FBQUEsWUFBYkMsT0FBYSxRQUFiQSxPQUFhO0FBQ25HLGVBQU87QUFDSEgsVUFBQUEsY0FBYyxFQUFFQSxjQURiO0FBRUhMLFVBQUFBLElBQUksRUFBRSxNQUFJLENBQUNTLFdBQUwsQ0FBaUJULElBQWpCLENBRkg7QUFHSFUsVUFBQUEsRUFBRSxFQUFFSixZQUhEO0FBSUhDLFVBQUFBLGFBQWEsRUFBYkEsYUFKRztBQUtIQyxVQUFBQSxPQUFPLEVBQVBBO0FBTEcsU0FBUDtBQU9ILE9BUndCLENBQXpCOztBQVVBLFVBQUksQ0FBQ0csbUJBQUVDLE9BQUYsQ0FBVVQsZ0JBQVYsRUFBNEIsS0FBS0wsS0FBTCxDQUFXQyxPQUF2QyxDQUFMLEVBQXNEO0FBQ2xELGFBQUtjLFFBQUwsQ0FBYztBQUNWZCxVQUFBQSxPQUFPLEVBQUVJO0FBREMsU0FBZDtBQUdIO0FBRUo7OztXQUVELGtCQUFTO0FBQUE7O0FBQ0wsV0FBS1AsYUFBTCxDQUFtQixLQUFLRCxLQUF4QjtBQURLLFVBRUVJLE9BRkYsR0FFYSxLQUFLRCxLQUZsQixDQUVFQyxPQUZGO0FBSUwsYUFBT0EsT0FBTyxDQUFDSyxHQUFSLENBQVksVUFBQVUsTUFBTTtBQUFBLDRCQUNyQjtBQUVJLFVBQUEsS0FBSyxFQUFFQSxNQUFNLENBQUNOLE9BRmxCO0FBR0ksVUFBQSxTQUFTLEVBQ0wsNEJBQVc7QUFDUCxzQkFBVSxJQURIO0FBRVAsdUJBQVcsQ0FBQ00sTUFBTSxDQUFDUCxhQUFSLElBQXlCLE1BQUksQ0FBQ1osS0FBTCxDQUFXb0IsTUFBWCxDQUFrQkM7QUFGL0MsV0FBWCxDQUpSO0FBQUEsaUNBUU0scUJBQUMsZ0JBQUQ7QUFBTSxZQUFBLElBQUksRUFBRUYsTUFBTSxDQUFDZDtBQUFuQjtBQVJOLFdBQ1NjLE1BQU0sQ0FBQ0osRUFEaEIsQ0FEcUI7QUFBQSxPQUFsQixDQUFQO0FBV0g7Ozs7RUF0RDhCTyxLQUFLLENBQUNDLFM7O0FBMkR6Q3hCLG9CQUFvQixDQUFDeUIsU0FBckIsR0FBaUM7QUFDN0JqQixFQUFBQSxvQkFBb0IsRUFBRWlCLHNCQUFVQyxLQURIO0FBRTdCTCxFQUFBQSxNQUFNLEVBQUVJLHNCQUFVRSxNQUFWLENBQWlCQztBQUZJLENBQWpDO2VBS2U1QixvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxyXG5cclxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuY2xhc3MgRGVjbGFyYXRpdmVVSUFjdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5mb3JtYXRBY3Rpb25zID0gdGhpcy5mb3JtYXRBY3Rpb25zLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYWN0aW9uczogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGFyZUljb24oaWNvbikge1xyXG4gICAgICAgIGNvbnN0IGljb25zID0ge1xyXG4gICAgICAgICAgICBcImNpcmNsZS1pbmZvLW91dGxpbmVcIjogXCJpbmZvLWNpcmNsZVwiLFxyXG4gICAgICAgICAgICBcIm1hZ25pZnlpbmctZ2xhc3Mtb3V0bGluZVwiOiBcInNlYXJjaFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaWNvbnNbaWNvbl07XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0QWN0aW9ucyhwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBwcm9wcy5kZWNsYXJhdGl2ZVVpQWN0aW9ucztcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkQWN0aW9ucyA9IGFjdGlvbnMubWFwKCh7YWN0aW9uRGlzcGF0Y2gsIGFzc2lnbm1lbnRJZCwgaWNvbiwgcmVxdWlyZXNWYWx1ZSwgdG9vbHRpcH0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbkRpc3BhdGNoOiBhY3Rpb25EaXNwYXRjaCxcclxuICAgICAgICAgICAgICAgIGljb246IHRoaXMuY29tcGFyZUljb24oaWNvbiksXHJcbiAgICAgICAgICAgICAgICBpZDogYXNzaWdubWVudElkLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZXNWYWx1ZSxcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIV8uaXNFcXVhbChmb3JtYXR0ZWRBY3Rpb25zLCB0aGlzLnN0YXRlLmFjdGlvbnMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uczogZm9ybWF0dGVkQWN0aW9uc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZm9ybWF0QWN0aW9ucyh0aGlzLnByb3BzKVxyXG4gICAgICAgIGNvbnN0IHthY3Rpb25zfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiBhY3Rpb25zLm1hcChhY3Rpb24gPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2FjdGlvbi5pZH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXthY3Rpb24udG9vbHRpcH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiAhYWN0aW9uLnJlcXVpcmVzVmFsdWUgfHwgdGhpcy5wcm9wcy5yZWNvcmQuc3lzSWRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfT48SWNvbiBpY29uPXthY3Rpb24uaWNvbn0vPjwvZGl2PlxyXG4gICAgICAgICkpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuRGVjbGFyYXRpdmVVSUFjdGlvbnMucHJvcFR5cGVzID0ge1xyXG4gICAgZGVjbGFyYXRpdmVVaUFjdGlvbnM6IHByb3BUeXBlcy5hcnJheSxcclxuICAgIHJlY29yZDogcHJvcFR5cGVzLm9iamVjdC5yZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWNsYXJhdGl2ZVVJQWN0aW9uczsiXX0=