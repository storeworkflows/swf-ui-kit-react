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