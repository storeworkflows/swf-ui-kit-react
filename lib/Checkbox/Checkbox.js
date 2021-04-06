"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var Checkbox = /*#__PURE__*/function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  var _super = _createSuper(Checkbox);

  function Checkbox(props) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _super.call(this, props);
    _this.onChangeAction = _this.onChangeAction.bind(_assertThisInitialized(_this));
    _this.onInvalidAction = _this.onInvalidAction.bind(_assertThisInitialized(_this));
    _this.setIndeterminate = _this.setIndeterminate.bind(_assertThisInitialized(_this));
    _this.state = {
      checkedValue: _this.props.checked,
      invalidValue: _this.props.invalid,
      indeterminateValue: false
    };
    _this.checkboxRef = null;
    return _this;
  }

  _createClass(Checkbox, [{
    key: "onChangeAction",
    value: function onChangeAction(e) {
      e === null || e === void 0 ? void 0 : e.preventDefault();
      e === null || e === void 0 ? void 0 : e.stopPropagation();
      var _this$props = this.props,
          manageChecked = _this$props.manageChecked,
          onChange = _this$props.onChange,
          readonly = _this$props.readonly,
          disabled = _this$props.disabled;
      var currentValue = this.state.checkedValue;
      var newValue = currentValue === "indeterminate" || !currentValue;
      var canChange = !readonly && !disabled;
      if (!manageChecked && canChange) this.setState({
        checkedValue: newValue
      });
      onChange({
        value: currentValue
      });
    }
  }, {
    key: "onInvalidAction",
    value: function onInvalidAction(e) {
      var _this$props2 = this.props,
          manageInvalid = _this$props2.manageInvalid,
          onInvalid = _this$props2.onInvalid;
      var currentValue = this.state.invalidValue;

      if (!manageInvalid) {
        currentValue = true;
        this.setState({
          invalidValue: currentValue
        });
      }

      onInvalid(e, {
        value: currentValue
      });
    }
  }, {
    key: "setIndeterminate",
    value: function setIndeterminate() {
      var input = this.checkboxRef.querySelector('input');
      var value = this.state.checkedValue === "indeterminate";
      if (input) input.indeterminate = value;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props3 = this.props,
          checked = _this$props3.checked,
          invalid = _this$props3.invalid,
          manageChecked = _this$props3.manageChecked,
          manageInvalid = _this$props3.manageInvalid;
      var _this$state = this.state,
          invalidValue = _this$state.invalidValue,
          checkedValue = _this$state.checkedValue;
      if (manageChecked && checkedValue !== checked) this.setState({
        checkedValue: checked
      });
      if (manageInvalid && invalidValue !== invalid) this.setState({
        invalidValue: invalid
      });
      this.setIndeterminate();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setIndeterminate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          disabled = _this$props4.disabled,
          label = _this$props4.label,
          name = _this$props4.name,
          readonly = _this$props4.readonly,
          required = _this$props4.required,
          visible = _this$props4.visible,
          className = _this$props4.className,
          value = _this$props4.value,
          invalid = _this$props4.invalid,
          labelClassName = _this$props4.labelClassName,
          inlineRequired = _this$props4.inlineRequired;
      var isIndeterminate = this.state.checkedValue === 'indeterminate';
      var checkedValue = isIndeterminate || this.state.checkedValue;
      var checkBoxClasses = (0, _classnames["default"])({
        "swf-checkbox-container": true,
        "disabled": disabled,
        "readonly": readonly,
        "invalid": this.state.invalidValue
      });
      return visible ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: className,
          children: [(label || required) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
            className: labelClassName,
            invalid: invalid,
            required: required,
            label: label
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: checkBoxClasses,
            ref: function ref(el) {
              return _this2.checkboxRef = el;
            },
            onClick: this.onChangeAction,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              className: "checkbox-input",
              type: "checkbox",
              disabled: disabled,
              required: required,
              name: name,
              value: this.state.checkedValue,
              checked: checkedValue,
              onInvalid: this.onInvalidAction,
              onChange: function onChange(e) {
                e.preventDefault();
                e.stopPropagation();
              },
              onClick: function onClick(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "checkbox-container",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "checkbox-information",
                children: value && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredLabel["default"], {
                  htmlFor: name,
                  className: "checkbox-label",
                  required: inlineRequired,
                  label: value
                })
              })
            })]
          })]
        })
      }) : null;
    }
  }]);

  return Checkbox;
}(React.Component);

;
Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  invalid: false,
  manageChecked: false,
  manageInvalid: false,
  readonly: false,
  required: false,
  visible: true,
  className: {},
  onInvalid: function onInvalid() {
    return void 0;
  },
  onChange: function onChange() {
    return void 0;
  },
  labelClassName: {},
  inlineRequired: false
};
Checkbox.propTypes = {
  checked: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(["indeterminate"])]),
  disabled: _propTypes["default"].bool,
  invalid: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  manageChecked: _propTypes["default"].bool,
  manageInvalid: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  readonly: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  onInvalid: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  visible: _propTypes["default"].bool,
  className: _propTypes["default"].object,
  value: _propTypes["default"].string,
  labelClassName: _propTypes["default"].object,
  inlineRequired: _propTypes["default"].bool
};
var _default = Checkbox;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DaGVja2JveC9DaGVja2JveC5qcyJdLCJuYW1lcyI6WyJDaGVja2JveCIsInByb3BzIiwib25DaGFuZ2VBY3Rpb24iLCJiaW5kIiwib25JbnZhbGlkQWN0aW9uIiwic2V0SW5kZXRlcm1pbmF0ZSIsInN0YXRlIiwiY2hlY2tlZFZhbHVlIiwiY2hlY2tlZCIsImludmFsaWRWYWx1ZSIsImludmFsaWQiLCJpbmRldGVybWluYXRlVmFsdWUiLCJjaGVja2JveFJlZiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm1hbmFnZUNoZWNrZWQiLCJvbkNoYW5nZSIsInJlYWRvbmx5IiwiZGlzYWJsZWQiLCJjdXJyZW50VmFsdWUiLCJuZXdWYWx1ZSIsImNhbkNoYW5nZSIsInNldFN0YXRlIiwidmFsdWUiLCJtYW5hZ2VJbnZhbGlkIiwib25JbnZhbGlkIiwiaW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwiaW5kZXRlcm1pbmF0ZSIsImxhYmVsIiwibmFtZSIsInJlcXVpcmVkIiwidmlzaWJsZSIsImNsYXNzTmFtZSIsImxhYmVsQ2xhc3NOYW1lIiwiaW5saW5lUmVxdWlyZWQiLCJpc0luZGV0ZXJtaW5hdGUiLCJjaGVja0JveENsYXNzZXMiLCJlbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiYm9vbCIsIm9uZU9mIiwic3RyaW5nIiwiZnVuYyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7OztBQUNGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLCtCQUF0QjtBQUNBLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0Es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VyxzQkFBVUUsSUFaSDtBQWFqQm5CLEVBQUFBLFNBQVMsRUFBRWlCLHNCQUFVSyxJQWJKO0FBY2pCL0IsRUFBQUEsUUFBUSxFQUFFMEIsc0JBQVVLLElBZEg7QUFlakJmLEVBQUFBLE9BQU8sRUFBRVUsc0JBQVVFLElBZkY7QUFnQmpCWCxFQUFBQSxTQUFTLEVBQUVTLHNCQUFVTSxNQWhCSjtBQWlCakJ6QixFQUFBQSxLQUFLLEVBQUVtQixzQkFBVUksTUFqQkE7QUFrQmpCWixFQUFBQSxjQUFjLEVBQUVRLHNCQUFVTSxNQWxCVDtBQW1CakJiLEVBQUFBLGNBQWMsRUFBRU8sc0JBQVVFO0FBbkJULENBQXJCO2VBc0JlN0MsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IFJlcXVpcmVkTGFiZWwgZnJvbSBcIi4uL1JlcXVpcmVkTGFiZWwvUmVxdWlyZWRMYWJlbFwiO1xyXG5cclxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUFjdGlvbiA9IHRoaXMub25DaGFuZ2VBY3Rpb24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uSW52YWxpZEFjdGlvbiA9IHRoaXMub25JbnZhbGlkQWN0aW9uLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXRJbmRldGVybWluYXRlID0gdGhpcy5zZXRJbmRldGVybWluYXRlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNoZWNrZWRWYWx1ZTogdGhpcy5wcm9wcy5jaGVja2VkLFxyXG4gICAgICAgICAgICBpbnZhbGlkVmFsdWU6ICB0aGlzLnByb3BzLmludmFsaWQsXHJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGVWYWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tib3hSZWYgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkNoYW5nZUFjdGlvbihlKXtcclxuICAgICAgICBlPy5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGU/LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VDaGVja2VkLCBvbkNoYW5nZSwgcmVhZG9ubHksIGRpc2FibGVkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5zdGF0ZS5jaGVja2VkVmFsdWU7XHJcblxyXG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IChjdXJyZW50VmFsdWU9PT1cImluZGV0ZXJtaW5hdGVcIikgfHwgIWN1cnJlbnRWYWx1ZTtcclxuICAgICAgICBsZXQgY2FuQ2hhbmdlID0gIXJlYWRvbmx5ICYmICFkaXNhYmxlZDtcclxuXHJcbiAgICAgICAgaWYoIW1hbmFnZUNoZWNrZWQgJiYgY2FuQ2hhbmdlKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tlZFZhbHVlOiBuZXdWYWx1ZSB9KTtcclxuXHJcblxyXG4gICAgICAgIG9uQ2hhbmdlKHt2YWx1ZTogY3VycmVudFZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnZhbGlkQWN0aW9uKGUpe1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VJbnZhbGlkLCBvbkludmFsaWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgY3VycmVudFZhbHVlID0gdGhpcy5zdGF0ZS5pbnZhbGlkVmFsdWU7XHJcblxyXG4gICAgICAgIGlmKCFtYW5hZ2VJbnZhbGlkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY3VycmVudFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGludmFsaWRWYWx1ZTogY3VycmVudFZhbHVlIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbkludmFsaWQoZSwge3ZhbHVlOiBjdXJyZW50VmFsdWV9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbmRldGVybWluYXRlKCl7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gdGhpcy5jaGVja2JveFJlZi5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUuY2hlY2tlZFZhbHVlID09PSBcImluZGV0ZXJtaW5hdGVcIjtcclxuICAgICAgICBpZihpbnB1dClcclxuICAgICAgICAgICAgaW5wdXQuaW5kZXRlcm1pbmF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xyXG4gICAgICAgIGNvbnN0IHtjaGVja2VkLCBpbnZhbGlkLCBtYW5hZ2VDaGVja2VkLCBtYW5hZ2VJbnZhbGlkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge2ludmFsaWRWYWx1ZSwgY2hlY2tlZFZhbHVlfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmKG1hbmFnZUNoZWNrZWQgJiYgY2hlY2tlZFZhbHVlICE9PSBjaGVja2VkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjaGVja2VkVmFsdWU6IGNoZWNrZWR9KTtcclxuXHJcblxyXG4gICAgICAgIGlmKG1hbmFnZUludmFsaWQgJiYgaW52YWxpZFZhbHVlIT09IGludmFsaWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ludmFsaWRWYWx1ZTogaW52YWxpZH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0SW5kZXRlcm1pbmF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHJlYWRvbmx5LFxyXG4gICAgICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICAgICAgdmlzaWJsZSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgIGludmFsaWQsXHJcbiAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lLFxyXG4gICAgICAgICAgICBpbmxpbmVSZXF1aXJlZFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgaXNJbmRldGVybWluYXRlID0gdGhpcy5zdGF0ZS5jaGVja2VkVmFsdWUgPT09ICdpbmRldGVybWluYXRlJ1xyXG4gICAgICAgIGxldCBjaGVja2VkVmFsdWUgPSAgaXNJbmRldGVybWluYXRlIHx8IHRoaXMuc3RhdGUuY2hlY2tlZFZhbHVlO1xyXG5cclxuICAgICAgICBsZXQgY2hlY2tCb3hDbGFzc2VzID0gY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgIFwic3dmLWNoZWNrYm94LWNvbnRhaW5lclwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImRpc2FibGVkXCI6IGRpc2FibGVkLFxyXG4gICAgICAgICAgICBcInJlYWRvbmx5XCI6IHJlYWRvbmx5LFxyXG4gICAgICAgICAgICBcImludmFsaWRcIjogdGhpcy5zdGF0ZS5pbnZhbGlkVmFsdWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB2aXNpYmxlID9cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsobGFiZWwgfHwgcmVxdWlyZWQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXF1aXJlZExhYmVsIGNsYXNzTmFtZT17bGFiZWxDbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ9e2ludmFsaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NoZWNrQm94Q2xhc3Nlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHJlZiA9IHsgZWwgPT4gdGhpcy5jaGVja2JveFJlZiA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNoYW5nZUFjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImNoZWNrYm94LWlucHV0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNoZWNrZWRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW52YWxpZD17dGhpcy5vbkludmFsaWRBY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpOyBlLnN0b3BQcm9wYWdhdGlvbigpO319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKGUpID0+IHtlLnByZXZlbnREZWZhdWx0KCk7IGUuc3RvcFByb3BhZ2F0aW9uKCk7fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2hlY2tib3gtY29udGFpbmVyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2hlY2tib3gtaW5mb3JtYXRpb25cIn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVxdWlyZWRMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjaGVja2JveC1sYWJlbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lubGluZVJlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5DaGVja2JveC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGludmFsaWQ6IGZhbHNlLFxyXG4gICAgbWFuYWdlQ2hlY2tlZDogZmFsc2UsXHJcbiAgICBtYW5hZ2VJbnZhbGlkOiBmYWxzZSxcclxuICAgIHJlYWRvbmx5OiBmYWxzZSxcclxuICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIHZpc2libGU6IHRydWUsXHJcbiAgICBjbGFzc05hbWU6IHt9LFxyXG4gICAgb25JbnZhbGlkOiAoKSA9PiB2b2lkIDAsXHJcbiAgICBvbkNoYW5nZTogKCkgPT4gdm9pZCAwLFxyXG4gICAgbGFiZWxDbGFzc05hbWU6IHt9LFxyXG4gICAgaW5saW5lUmVxdWlyZWQ6IGZhbHNlXHJcbn07XHJcblxyXG5DaGVja2JveC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGVja2VkOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBwcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBwcm9wVHlwZXMub25lT2YoW1wiaW5kZXRlcm1pbmF0ZVwiXSlcclxuICAgIF0pLFxyXG4gICAgZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgaW52YWxpZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG1hbmFnZUNoZWNrZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlSW52YWxpZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBuYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcmVhZG9ubHk6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVxdWlyZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgb25JbnZhbGlkOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uQ2hhbmdlOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIHZpc2libGU6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgdmFsdWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsYWJlbENsYXNzTmFtZTogcHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlubGluZVJlcXVpcmVkOiBwcm9wVHlwZXMuYm9vbFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveCJdfQ==