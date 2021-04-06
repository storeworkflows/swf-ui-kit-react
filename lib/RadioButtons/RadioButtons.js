"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _RadioOption = _interopRequireDefault(require("./RadioOption.js"));

var _constants = require("./constants");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _RequiredLabel = _interopRequireDefault(require("../RequiredLabel/RequiredLabel"));

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

var RadioButtons = /*#__PURE__*/function (_React$Component) {
  _inherits(RadioButtons, _React$Component);

  var _super = _createSuper(RadioButtons);

  function RadioButtons(props) {
    var _this;

    _classCallCheck(this, RadioButtons);

    _this = _super.call(this, props);
    _this.optionClicked = _this.optionClicked.bind(_assertThisInitialized(_this));
    _this.optionInvalid = _this.optionInvalid.bind(_assertThisInitialized(_this));
    _this.state = {
      selectedValue: _this.props.value,
      isInvalid: _this.props.invalid
    };
    return _this;
  }

  _createClass(RadioButtons, [{
    key: "optionClicked",
    value: function optionClicked(option) {
      var _this$props = this.props,
          manageValue = _this$props.manageValue,
          onChange = _this$props.onChange;
      if (!manageValue) this.setState({
        selectedValue: option.id
      });
      onChange(option);
    }
  }, {
    key: "optionInvalid",
    value: function optionInvalid(e) {
      var _this$props2 = this.props,
          manageInvalid = _this$props2.manageInvalid,
          onInvalid = _this$props2.onInvalid;
      if (!manageInvalid) this.setState({
        isInvalid: true
      });
      onInvalid(e);
    }
  }, {
    key: "renderValue",
    value: function renderValue(option, name) {
      var id = option.id,
          label = option.label,
          value = option.value,
          checked = option.checked,
          readonly = option.readonly,
          disabled = option.disabled;
      var isChecked = this.state.selectedValue ? this.state.selectedValue === id : checked;
      var isHorizontal = this.props.layout === _constants.RADIO_BUTTONS_LAYOUT.horizontal;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadioOption["default"], {
        id: id,
        label: label,
        value: value,
        checked: isChecked,
        readonly: readonly || this.props.readonly,
        disabled: disabled || this.props.disabled,
        required: this.props.required,
        invalid: this.state.isInvalid,
        name: name,
        onChangeAction: this.optionClicked,
        onInvalidAction: this.optionInvalid,
        isHorizontal: isHorizontal
      }, id);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          invalid = _this$props3.invalid,
          manageValue = _this$props3.manageValue,
          manageInvalid = _this$props3.manageInvalid;
      if (manageValue && value !== this.state.selectedValue) this.setState({
        selectedValue: value
      });
      if (manageInvalid && invalid !== this.state.isInvalid) this.setState({
        isInvalid: invalid
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          label = _this$props4.label,
          name = _this$props4.name,
          options = _this$props4.options,
          required = _this$props4.required,
          visible = _this$props4.visible,
          className = _this$props4.className,
          labelClassName = _this$props4.labelClassName,
          invalid = _this$props4.invalid;
      return visible ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _classnames["default"])(className, "radio-buttons-container"),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classnames["default"])({
              "radio-buttons-header": true,
              "invalid": this.state.isInvalid
            }),
            children: (label || required) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
              className: labelClassName,
              invalid: invalid,
              required: required,
              label: label
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "group-of-radio-buttons",
            children: options.map(function (option) {
              return _this2.renderValue(option, name);
            })
          })]
        })
      }) : null;
    }
  }]);

  return RadioButtons;
}(React.Component);

;
RadioButtons.defaultProps = {
  disabled: false,
  layout: _constants.RADIO_BUTTONS_LAYOUT.vertical,
  manageValue: false,
  options: [],
  readonly: false,
  required: false,
  manageInvalid: false,
  visible: true,
  onChange: function onChange() {
    return void 0;
  },
  onInvalid: function onInvalid() {
    return void 0;
  },
  className: {},
  labelClassName: {}
};
RadioButtons.propTypes = {
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  layout: _propTypes["default"].oneOf([_constants.RADIO_BUTTONS_LAYOUT.vertical, _constants.RADIO_BUTTONS_LAYOUT.horizontal]),
  manageValue: _propTypes["default"].bool,
  manageInvalid: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    label: _propTypes["default"].string,
    value: _propTypes["default"].string,
    checked: _propTypes["default"].bool,
    readonly: _propTypes["default"].bool,
    disabled: _propTypes["default"].bool
  })),
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onInvalid: _propTypes["default"].func,
  visible: _propTypes["default"].bool,
  className: _propTypes["default"].object,
  labelClassName: _propTypes["default"].object
};
var _default = RadioButtons;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SYWRpb0J1dHRvbnMvUmFkaW9CdXR0b25zLmpzIl0sIm5hbWVzIjpbIlJhZGlvQnV0dG9ucyIsInByb3BzIiwib3B0aW9uQ2xpY2tlZCIsImJpbmQiLCJvcHRpb25JbnZhbGlkIiwic3RhdGUiLCJzZWxlY3RlZFZhbHVlIiwidmFsdWUiLCJpc0ludmFsaWQiLCJpbnZhbGlkIiwib3B0aW9uIiwibWFuYWdlVmFsdWUiLCJvbkNoYW5nZSIsInNldFN0YXRlIiwiaWQiLCJlIiwibWFuYWdlSW52YWxpZCIsIm9uSW52YWxpZCIsIm5hbWUiLCJsYWJlbCIsImNoZWNrZWQiLCJyZWFkb25seSIsImRpc2FibGVkIiwiaXNDaGVja2VkIiwiaXNIb3Jpem9udGFsIiwibGF5b3V0IiwiUkFESU9fQlVUVE9OU19MQVlPVVQiLCJob3Jpem9udGFsIiwicmVxdWlyZWQiLCJvcHRpb25zIiwidmlzaWJsZSIsImNsYXNzTmFtZSIsImxhYmVsQ2xhc3NOYW1lIiwibWFwIiwicmVuZGVyVmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInZlcnRpY2FsIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwiYXJyYXlPZiIsInNoYXBlIiwiZnVuYyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxZOzs7OztBQUNGLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLCtCQUFyQjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsK0JBQXJCO0FBRUEsVUFBS0UsS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLGFBQWEsRUFBRSxNQUFLTCxL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Rkw7QUFHWmxDLElBQUFBLEtBQUssRUFBRWdDLHNCQUFVRSxNQUhMO0FBSVpyQixJQUFBQSxPQUFPLEVBQUVtQixzQkFBVUMsSUFKUDtBQUtabkIsSUFBQUEsUUFBUSxFQUFFa0Isc0JBQVVDLElBTFI7QUFNWmxCLElBQUFBLFFBQVEsRUFBRWlCLHNCQUFVQztBQU5SLEdBQWhCLENBREssQ0FWWTtBQW1CckJuQixFQUFBQSxRQUFRLEVBQUVrQixzQkFBVUMsSUFuQkM7QUFvQnJCWixFQUFBQSxRQUFRLEVBQUVXLHNCQUFVQyxJQXBCQztBQXFCckJqQyxFQUFBQSxLQUFLLEVBQUVnQyxzQkFBVUUsTUFyQkk7QUFzQnJCN0IsRUFBQUEsUUFBUSxFQUFFMkIsc0JBQVVNLElBdEJDO0FBdUJyQjVCLEVBQUFBLFNBQVMsRUFBRXNCLHNCQUFVTSxJQXZCQTtBQXdCckJmLEVBQUFBLE9BQU8sRUFBRVMsc0JBQVVDLElBeEJFO0FBeUJyQlQsRUFBQUEsU0FBUyxFQUFFUSxzQkFBVU8sTUF6QkE7QUEwQnJCZCxFQUFBQSxjQUFjLEVBQUVPLHNCQUFVTztBQTFCTCxDQUF6QjtlQTZCZTlDLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IFJhZGlvT3B0aW9uIGZyb20gXCIuL1JhZGlvT3B0aW9uLmpzXCJcclxuaW1wb3J0IHtSQURJT19CVVRUT05TX0xBWU9VVH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IFJlcXVpcmVkTGFiZWwgZnJvbSBcIi4uL1JlcXVpcmVkTGFiZWwvUmVxdWlyZWRMYWJlbFwiO1xyXG5cclxuY2xhc3MgUmFkaW9CdXR0b25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMub3B0aW9uQ2xpY2tlZCA9IHRoaXMub3B0aW9uQ2xpY2tlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub3B0aW9uSW52YWxpZCA9IHRoaXMub3B0aW9uSW52YWxpZC5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWxlY3RlZFZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLFxyXG4gICAgICAgICAgICBpc0ludmFsaWQ6IHRoaXMucHJvcHMuaW52YWxpZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcHRpb25DbGlja2VkKG9wdGlvbil7XHJcbiAgICAgICAgY29uc3Qge21hbmFnZVZhbHVlLCBvbkNoYW5nZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmKCFtYW5hZ2VWYWx1ZSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRWYWx1ZTogb3B0aW9uLmlkfSk7XHJcbiAgICAgICAgb25DaGFuZ2Uob3B0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbkludmFsaWQoZSl7XHJcbiAgICAgICAgY29uc3Qge21hbmFnZUludmFsaWQsIG9uSW52YWxpZH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmKCFtYW5hZ2VJbnZhbGlkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0ludmFsaWQ6IHRydWV9KTtcclxuICAgICAgICBvbkludmFsaWQoZSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJWYWx1ZShvcHRpb24sIG5hbWUpe1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgY2hlY2tlZCxcclxuICAgICAgICAgICAgcmVhZG9ubHksXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgfSA9IG9wdGlvbjtcclxuXHJcblxyXG4gICAgICAgIGxldCBpc0NoZWNrZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWUgPyB0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWUgPT09IGlkIDogY2hlY2tlZFxyXG4gICAgICAgIGxldCBpc0hvcml6b250YWwgPSB0aGlzLnByb3BzLmxheW91dCA9PT0gUkFESU9fQlVUVE9OU19MQVlPVVQuaG9yaXpvbnRhbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJhZGlvT3B0aW9uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgaWQgPSB7aWR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9IHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZCA9IHtpc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICByZWFkb25seSA9IHtyZWFkb25seSB8fCB0aGlzLnByb3BzLnJlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB7ZGlzYWJsZWQgfHwgdGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkID0ge3RoaXMucHJvcHMucmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkID0ge3RoaXMuc3RhdGUuaXNJbnZhbGlkfVxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2VBY3Rpb24gPSB7dGhpcy5vcHRpb25DbGlja2VkfVxyXG4gICAgICAgICAgICAgICAgb25JbnZhbGlkQWN0aW9uID0ge3RoaXMub3B0aW9uSW52YWxpZH1cclxuICAgICAgICAgICAgICAgIGlzSG9yaXpvbnRhbCA9IHtpc0hvcml6b250YWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xyXG4gICAgICAgIGxldCB7dmFsdWUsIGludmFsaWQsIG1hbmFnZVZhbHVlLCBtYW5hZ2VJbnZhbGlkfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmKG1hbmFnZVZhbHVlICYmIHZhbHVlIT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRWYWx1ZTogdmFsdWV9KTtcclxuXHJcbiAgICAgICAgaWYobWFuYWdlSW52YWxpZCAmJiBpbnZhbGlkIT09IHRoaXMuc3RhdGUuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0ludmFsaWQ6IGludmFsaWR9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgICAgICB2aXNpYmxlLFxyXG4gICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lLFxyXG4gICAgICAgICAgICBpbnZhbGlkXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHZpc2libGUgP1xyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NOYW1lLCBcInJhZGlvLWJ1dHRvbnMtY29udGFpbmVyXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmFkaW8tYnV0dG9ucy1oZWFkZXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnZhbGlkXCI6IHRoaXMuc3RhdGUuaXNJbnZhbGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KGxhYmVsIHx8IHJlcXVpcmVkKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlcXVpcmVkTGFiZWwgY2xhc3NOYW1lPXtsYWJlbENsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ9e2ludmFsaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZ3JvdXAtb2YtcmFkaW8tYnV0dG9uc1wifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IHRoaXMucmVuZGVyVmFsdWUob3B0aW9uLCBuYW1lKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuUmFkaW9CdXR0b25zLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGxheW91dDogUkFESU9fQlVUVE9OU19MQVlPVVQudmVydGljYWwsXHJcbiAgICBtYW5hZ2VWYWx1ZTogZmFsc2UsXHJcbiAgICBvcHRpb25zOiBbXSxcclxuICAgIHJlYWRvbmx5OiBmYWxzZSxcclxuICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIG1hbmFnZUludmFsaWQ6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgIG9uQ2hhbmdlOiAoKSA9PiB2b2lkIDAsXHJcbiAgICBvbkludmFsaWQ6ICgpID0+IHZvaWQgMCxcclxuICAgIGNsYXNzTmFtZToge30sXHJcbiAgICBsYWJlbENsYXNzTmFtZToge31cclxufTtcclxuXHJcblJhZGlvQnV0dG9ucy5wcm9wVHlwZXMgPSB7XHJcbiAgICBkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpbnZhbGlkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGF5b3V0OiBwcm9wVHlwZXMub25lT2YoXHJcbiAgICAgICAgW1JBRElPX0JVVFRPTlNfTEFZT1VULnZlcnRpY2FsLCBSQURJT19CVVRUT05TX0xBWU9VVC5ob3Jpem9udGFsXVxyXG4gICAgKSxcclxuICAgIG1hbmFnZVZhbHVlOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZUludmFsaWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbmFtZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9wdGlvbnM6IHByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICAgIHByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgICAgIGlkOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgICAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgIGNoZWNrZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgICAgICByZWFkb25seTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbFxyXG4gICAgfSkpLFxyXG4gICAgcmVhZG9ubHk6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVxdWlyZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgdmFsdWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbkNoYW5nZTogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkludmFsaWQ6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgdmlzaWJsZTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjbGFzc05hbWU6IHByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBsYWJlbENsYXNzTmFtZTogcHJvcFR5cGVzLm9iamVjdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYWRpb0J1dHRvbnMiXX0=