"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.scss"));

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
      invalidValue: _this.props.invalid
    };
    _this.checkboxRef = null;
    return _this;
  }

  _createClass(Checkbox, [{
    key: "onChangeAction",
    value: function onChangeAction() {
      var _this$props = this.props,
          manageChecked = _this$props.manageChecked,
          onChange = _this$props.onChange,
          readonly = _this$props.readonly,
          disabled = _this$props.disabled;
      var currentValue = this.state.checkedValue;
      var newValue = currentValue === "indeterminate" || !currentValue;
      var canChange = !readonly && !disabled;
      if (canChange && manageChecked) onChange({
        value: currentValue
      });else if (canChange) this.setState({
        checkedValue: newValue
      });else if (currentValue === "indeterminate") this.setIndeterminate();
    }
  }, {
    key: "onInvalidAction",
    value: function onInvalidAction() {
      var _this$props2 = this.props,
          manageInvalid = _this$props2.manageInvalid,
          onInvalid = _this$props2.onInvalid;
      var currentValue = this.state.invalidValue;
      if (manageInvalid) onInvalid({
        value: currentValue
      });else this.setState({
        invalidValue: true
      });
    }
  }, {
    key: "setIndeterminate",
    value: function setIndeterminate() {
      var input = this.checkboxRef.querySelector('input');
      if (this.props.checked === "indeterminate") input.indeterminate = true;
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

      if (manageChecked && checkedValue !== checked) {
        this.setState({
          checkedValue: checked
        });
        this.setIndeterminate();
      }

      if (manageInvalid && invalidValue !== invalid) this.setState({
        invalidValue: invalid
      });
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
          required = _this$props4.required;
      var isIndeterminate = this.state.checkedValue === 'indeterminate';
      var checkedValue = isIndeterminate || this.state.checkedValue;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _classnames["default"])({
            "checkbox-container": true,
            "disabled": disabled,
            "readonly": readonly,
            "invalid": this.state.invalidValue
          }),
          ref: function ref(el) {
            return _this2.checkboxRef = el;
          },
          onClick: function onClick() {
            return _this2.onChangeAction();
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            className: "checkbox-input",
            type: "checkbox",
            checked: checkedValue,
            disabled: disabled,
            required: required,
            name: name,
            value: this.state.checkedValue ? "true" : "false",
            onInvalid: function onInvalid(e) {
              return _this2.onInvalidAction(e);
            },
            onChange: function onChange(e) {
              return _this2.onChangeAction(e);
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "checkbox-information",
            children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "checkbox-label",
              children: label
            }), required && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "checkbox-required",
              children: "*"
            })]
          })]
        })]
      });
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
  required: false
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
  onChange: _propTypes["default"].func
};
var _default = Checkbox;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DaGVja2JveC9DaGVja2JveC5qcyJdLCJuYW1lcyI6WyJDaGVja2JveCIsInByb3BzIiwib25DaGFuZ2VBY3Rpb24iLCJiaW5kIiwib25JbnZhbGlkQWN0aW9uIiwic2V0SW5kZXRlcm1pbmF0ZSIsInN0YXRlIiwiY2hlY2tlZFZhbHVlIiwiY2hlY2tlZCIsImludmFsaWRWYWx1ZSIsImludmFsaWQiLCJjaGVja2JveFJlZiIsIm1hbmFnZUNoZWNrZWQiLCJvbkNoYW5nZSIsInJlYWRvbmx5IiwiZGlzYWJsZWQiLCJjdXJyZW50VmFsdWUiLCJuZXdWYWx1ZSIsImNhbkNoYW5nZSIsInZhbHVlIiwic2V0U3RhdGUiLCJtYW5hZ2VJbnZhbGlkIiwib25JbnZhbGlkIiwiaW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwiaW5kZXRlcm1pbmF0ZSIsImxhYmVsIiwibmFtZSIsInJlcXVpcmVkIiwiaXNJbmRldGVybWluYXRlIiwic3R5bGVzIiwiZWwiLCJlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJib29sIiwib25lT2YiLCJzdHJpbmciLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFE7Ozs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsK0JBQXRCO0FBQ0EsVUFBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCRCxJQUFyQiwrQkFBdkI7QUFDQSxVQUFLRSxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkYsSUFBdEIsK0JBQXhCO0FBRUEsVUFBS0csS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLFlBQVksRUFBRSxNQUFLTixLQUFMLENBQVdPLE9BRGhCO0FBRVRDLE1BQUFBLFlBQVksRUFBRyxNQUFLUixLQUFMLENBQVdTO0FBRmpCLEtBQWI7QUFLQSxVQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBWGU7QUFZbEI7Ozs7V0FFRCwwQkFBZ0I7QUFBQSx3QkFDMEMsS0FBS1YsS0FEL0M7QUFBQSxVQUNMVyxhQURLLGVBQ0xBLGFBREs7QUFBQSxVQUNVQyxRQURWLGVBQ1VBLFFBRFY7QUFBQSxVQUNvQkMsUUFEcEIsZUFDb0JBLFFBRHBCO0FBQUEsVUFDOEJDLFFBRDlCLGVBQzhCQSxRQUQ5QjtBQUVaLFVBQU1DLFlBQVksR0FBRyxLQUFLVixLQUFMLENBQVdDLFlBQWhDO0FBQ0EsVUFBSVUsUUFBUSxHQUFJRCxZQUFZLEtBQUcsZUFBaEIsSUFBb0MsQ0FBQ0EsWUFBcEQ7QUFDQSxVQUFJRSxTQUFTLEdBQUcsQ0FBQ0osUUFBRCxJQUFhLENBQUNDLFFBQTlCO0FBRUEsVUFBR0csU0FBUyxJQUFJTixhQUFoQixFQUNLQyxRQUFRLENBQUM7QUFBQ00sUUFBQUEsS0FBSyxFQUFFSDtBQUFSLE9BQUQsQ0FBUixDQURMLEtBRUssSUFBR0UsU0FBSCxFQUNELEtBQUtFLFFBQUwsQ0FBYztBQUFFYixRQUFBQSxZQUFZLEVBQUVVO0FBQWhCLE9BQWQsRUFEQyxLQUVBLElBQUdELFlBQVksS0FBRyxlQUFsQixFQUNELEtBQUtYLGdCQUFMO0FBQ1A7OztXQUVELDJCQUFpQjtBQUFBLHlCQUNzQixLQUFLSixLQUQzQjtBQUFBLFVBQ05vQixhQURNLGdCQUNOQSxhQURNO0FBQUEsVUFDU0MsU0FEVCxnQkFDU0EsU0FEVDtBQUViLFVBQU1OLFlBQVksR0FBRyxLQUFLVixLQUFMLENBQVdHLFlBQWhDO0FBRUEsVUFBR1ksYUFBSCxFQUNJQyxTQUFTLENBQUM7QUFBQ0gsUUFBQUEsS0FBSyxFQUFFSDtBQUFSLE9BQUQsQ0FBVCxDQURKLEtBR0ksS0FBS0ksUUFBTCxDQUFjO0FBQUVYLFFBQUFBLFlBQVksRUFBRTtBQUFoQixPQUFkO0FBQ1A7OztXQUVELDRCQUFrQjtBQUNkLFVBQUljLEtBQUssR0FBRyxLQUFLWixXQUFMLENBQWlCYSxhQUFqQixDQUErQixPQUEvQixDQUFaO0FBQ0EsVUFBRyxLQUFLdkIsS0FBTCxDQUFXTyxPQUFYLEtBQXVCLGVBQTFCLEVBQ0llLEtBQUssQ0FBQ0UsYUFBTixHQUFzQixJQUF0QjtBQUNQOzs7V0FFRCw4QkFBb0I7QUFBQSx5QkFDeUMsS0FBS3hCLEtBRDlDO0FBQUEsVUFDVE8sT0FEUyxnQkFDVEEsT0FEUztBQUFBLFVBQ0FFLE9BREEsZ0JBQ0FBLE9BREE7QUFBQSxVQUNTRSxhQURULGdCQUNTQSxhQURUO0FBQUEsVUFDd0JTLGFBRHhCLGdCQUN3QkEsYUFEeEI7QUFBQSx3QkFFcUIsS0FBS2YsS0FGMUI7QUFBQSxVQUVURyxZQUZTLGVBRVRBLFlBRlM7QUFBQSxVQUVLRixZQUZMLGVBRUtBLFlBRkw7O0FBSWhCLFVBQUdLLGFBQWEsSUFBSUwsWUFBWSxLQUFLQyxPQUFyQyxFQUNBO0FBQ0ksYUFBS1ksUUFBTCxDQUFjO0FBQUNiLFVBQUFBLFlBQVksRUFBRUM7QUFBZixTQUFkO0FBQ0EsYUFBS0gsZ0JBQUw7QUFDSDs7QUFFRCxVQUFHZ0IsYUFBYSxJQUFJWixZQUFZLEtBQUlDLE9BQXBDLEVBQ0ksS0FBS1UsUUFBTCxDQUFjO0FBQUNYLFFBQUFBLFlBQVksRUFBRUM7QUFBZixPQUFkO0FBRVA7OztXQUVELDZCQUFvQjtBQUNoQixXQUFLTCxnQkFBTDtBQUNIOzs7V0FFRCxrQkFBUztBQUFBOztBQUFBLHlCQVFELEtBQUtKLEtBUko7QUFBQSxVQUdEYyxRQUhDLGdCQUdEQSxRQUhDO0FBQUEsVUFJRFcsS0FKQyxnQkFJREEsS0FKQztBQUFBLFVBS0RDLElBTEMsZ0JBS0RBLElBTEM7QUFBQSxVQU1EYixRQU5DLGdCQU1EQSxRQU5DO0FBQUEsVUFPRGMsUUFQQyxnQkFPREEsUUFQQztBQVVMLFVBQUlDLGVBQWUsR0FBRyxLQUFLdkIsS0FBTCxDQUFXQyxZQUFYLEtBQTRCLGVBQWxEO0FBQ0EsVUFBSUEsWUFBWSxHQUFJc0IsZUFBZSxJQUFJLEtBQUt2QixLQUFMLENBQVdDLFlBQWxEO0FBRUEsMEJBQ0k7QUFBQSxnQ0FDSTtBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0J1QjtBQUF4QixVQURKLGVBRUk7QUFBSyxVQUFBLFNBQVMsRUFBRSw0QkFBVztBQUN2QixrQ0FBc0IsSUFEQztBQUV2Qix3QkFBWWYsUUFGVztBQUd2Qix3QkFBWUQsUUFIVztBQUl2Qix1QkFBVyxLQUFLUixLQUFMLENBQVdHO0FBSkMsV0FBWCxDQUFoQjtBQU1LLFVBQUEsR0FBRyxFQUFLLGFBQUFzQixFQUFFO0FBQUEsbUJBQUksTUFBSSxDQUFDcEIsV0FBTCxHQUFtQm9CLEVBQXZCO0FBQUEsV0FOZjtBQU9LLFVBQUEsT0FBTyxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDN0IsY0FBTCxFQUFOO0FBQUEsV0FQZDtBQUFBLGtDQVNJO0FBQ0ksWUFBQSxTQUFTLEVBQUUsZ0JBRGY7QUFFSSxZQUFBLElBQUksRUFBQyxVQUZUO0FBR0ksWUFBQSxPQUFPLEVBQUVLLFlBSGI7QUFJSSxZQUFBLFFBQVEsRUFBRVEsUUFKZDtBQUtJLFlBQUEsUUFBUSxFQUFFYSxRQUxkO0FBTUksWUFBQSxJQUFJLEVBQUVELElBTlY7QUFPSSxZQUFBLEtBQUssRUFBRyxLQUFLckIsS0FBTCxDQUFXQyxZQUFaLEdBQTRCLE1BQTVCLEdBQXFDLE9BUGhEO0FBUUksWUFBQSxTQUFTLEVBQUUsbUJBQUF5QixDQUFDO0FBQUEscUJBQUksTUFBSSxDQUFDNUIsZUFBTCxDQUFxQjRCLENBQXJCLENBQUo7QUFBQSxhQVJoQjtBQVNJLFlBQUEsUUFBUSxFQUFFLGtCQUFBQSxDQUFDO0FBQUEscUJBQUksTUFBSSxDQUFDOUIsY0FBTCxDQUFvQjhCLENBQXBCLENBQUo7QUFBQTtBQVRmLFlBVEosZUFvQkk7QUFBSyxZQUFBLFNBQVMsRUFBRSxzQkFBaEI7QUFBQSx1QkFDTU4sS0FBSyxpQkFBSTtBQUFPLGNBQUEsU0FBUyxFQUFFLGdCQUFsQjtBQUFBLHdCQUFxQ0E7QUFBckMsY0FEZixFQUVNRSxRQUFRLGlCQUFJO0FBQU0sY0FBQSxTQUFTLEVBQUUsbUJBQWpCO0FBQUE7QUFBQSxjQUZsQjtBQUFBLFlBcEJKO0FBQUEsVUFGSjtBQUFBLFFBREo7QUE4Qkg7Ozs7RUEzR2tCSyxLQUFLLENBQUNDLFM7O0FBNEc1QjtBQUVEbEMsUUFBUSxDQUFDbUMsWUFBVCxHQUF3QjtBQUNwQjNCLEVBQUFBLE9BQU8sRUFBRSxLQURXO0FBRXBCTyxFQUFBQSxRQUFRLEVBQUUsS0FGVTtBQUdwQkwsRUFBQUEsT0FBTyxFQUFFLEtBSFc7QUFJcEJFLEVBQUFBLGFBQWEsRUFBRSxLQUpLO0FBS3BCUyxFQUFBQSxhQUFhLEVBQUUsS0FMSztBQU1wQlAsRUFBQUEsUUFBUSxFQUFFLEtBTlU7QUFPcEJjLEVBQUFBLFFBQVEsRUFBRTtBQVBVLENBQXhCO0FBVUE1QixRQUFRLENBQUNvQyxTQUFULEdBQXFCO0FBQ2pCNUIsRUFBQUEsT0FBTyxFQUFFNEIsc0JBQVVDLFNBQVYsQ0FBb0IsQ0FDekJELHNCQUFVRSxJQURlLEVBRXpCRixzQkFBVUcsS0FBVixDQUFnQixDQUFDLGVBQUQsQ0FBaEIsQ0FGeUIsQ0FBcEIsQ0FEUTtBQUtqQnhCLEVBQUFBLFFBQVEsRUFBRXFCLHNCQUFVRSxJQUxIO0FBTWpCNUIsRUFBQUEsT0FBTyxFQUFFMEIsc0JBQVVFLElBTkY7QUFPakJaLEVBQUFBLEtBQUssRUFBRVUsc0JBQVVJLE1BUEE7QUFRakI1QixFQUFBQSxhQUFhLEVBQUV3QixzQkFBVUUsSUFSUjtBQVNqQmpCLEVBQUFBLGFBQWEsRUFBRWUsc0JBQVVFLElBVFI7QUFVakJYLEVBQUFBLElBQUksRUFBRVMsc0JBQVVJLE1BVkM7QUFXakIxQixFQUFBQSxRQUFRLEVBQUVzQixzQkFBVUUsSUFYSDtBQVlqQlYsRUFBQUEsUUFBUSxFQUFFUSxzQkFBVUUsSUFaSDtBQWFqQmhCLEVBQUFBLFNBQVMsRUFBRWMsc0JBQVVLLElBYko7QUFjakI1QixFQUFBQSxRQUFRLEVBQUV1QixzQkFBVUs7QUFkSCxDQUFyQjtlQWlCZXpDLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiXHJcblxyXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQWN0aW9uID0gdGhpcy5vbkNoYW5nZUFjdGlvbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25JbnZhbGlkQWN0aW9uID0gdGhpcy5vbkludmFsaWRBY3Rpb24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGUgPSB0aGlzLnNldEluZGV0ZXJtaW5hdGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY2hlY2tlZFZhbHVlOiB0aGlzLnByb3BzLmNoZWNrZWQsXHJcbiAgICAgICAgICAgIGludmFsaWRWYWx1ZTogIHRoaXMucHJvcHMuaW52YWxpZFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGVja2JveFJlZiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VBY3Rpb24oKXtcclxuICAgICAgICBjb25zdCB7bWFuYWdlQ2hlY2tlZCwgb25DaGFuZ2UsIHJlYWRvbmx5LCBkaXNhYmxlZH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuc3RhdGUuY2hlY2tlZFZhbHVlO1xyXG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IChjdXJyZW50VmFsdWU9PT1cImluZGV0ZXJtaW5hdGVcIikgfHwgIWN1cnJlbnRWYWx1ZTtcclxuICAgICAgICBsZXQgY2FuQ2hhbmdlID0gIXJlYWRvbmx5ICYmICFkaXNhYmxlZDtcclxuXHJcbiAgICAgICAgaWYoY2FuQ2hhbmdlICYmIG1hbmFnZUNoZWNrZWQpXHJcbiAgICAgICAgICAgICBvbkNoYW5nZSh7dmFsdWU6IGN1cnJlbnRWYWx1ZX0pO1xyXG4gICAgICAgIGVsc2UgaWYoY2FuQ2hhbmdlKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tlZFZhbHVlOiBuZXdWYWx1ZSB9KTtcclxuICAgICAgICBlbHNlIGlmKGN1cnJlbnRWYWx1ZT09PVwiaW5kZXRlcm1pbmF0ZVwiKVxyXG4gICAgICAgICAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uSW52YWxpZEFjdGlvbigpe1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VJbnZhbGlkLCBvbkludmFsaWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLnN0YXRlLmludmFsaWRWYWx1ZTtcclxuXHJcbiAgICAgICAgaWYobWFuYWdlSW52YWxpZClcclxuICAgICAgICAgICAgb25JbnZhbGlkKHt2YWx1ZTogY3VycmVudFZhbHVlfSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW52YWxpZFZhbHVlOiB0cnVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5kZXRlcm1pbmF0ZSgpe1xyXG4gICAgICAgIGxldCBpbnB1dCA9IHRoaXMuY2hlY2tib3hSZWYucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgICAgICBpZih0aGlzLnByb3BzLmNoZWNrZWQgPT09IFwiaW5kZXRlcm1pbmF0ZVwiKVxyXG4gICAgICAgICAgICBpbnB1dC5pbmRldGVybWluYXRlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcclxuICAgICAgICBjb25zdCB7Y2hlY2tlZCwgaW52YWxpZCwgbWFuYWdlQ2hlY2tlZCwgbWFuYWdlSW52YWxpZH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtpbnZhbGlkVmFsdWUsIGNoZWNrZWRWYWx1ZX0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBpZihtYW5hZ2VDaGVja2VkICYmIGNoZWNrZWRWYWx1ZSAhPT0gY2hlY2tlZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NoZWNrZWRWYWx1ZTogY2hlY2tlZH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG1hbmFnZUludmFsaWQgJiYgaW52YWxpZFZhbHVlIT09IGludmFsaWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ludmFsaWRWYWx1ZTogaW52YWxpZH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICByZWFkb25seSxcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IGlzSW5kZXRlcm1pbmF0ZSA9IHRoaXMuc3RhdGUuY2hlY2tlZFZhbHVlID09PSAnaW5kZXRlcm1pbmF0ZSdcclxuICAgICAgICBsZXQgY2hlY2tlZFZhbHVlID0gIGlzSW5kZXRlcm1pbmF0ZSB8fCB0aGlzLnN0YXRlLmNoZWNrZWRWYWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaGVja2JveC1jb250YWluZXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBcImRpc2FibGVkXCI6IGRpc2FibGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicmVhZG9ubHlcIjogcmVhZG9ubHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbnZhbGlkXCI6IHRoaXMuc3RhdGUuaW52YWxpZFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgIHJlZiA9IHsgZWwgPT4gdGhpcy5jaGVja2JveFJlZiA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ2hhbmdlQWN0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjaGVja2JveC1pbnB1dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17KHRoaXMuc3RhdGUuY2hlY2tlZFZhbHVlKSA/IFwidHJ1ZVwiIDogXCJmYWxzZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkludmFsaWQ9e2UgPT4gdGhpcy5vbkludmFsaWRBY3Rpb24oZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMub25DaGFuZ2VBY3Rpb24oZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjaGVja2JveC1pbmZvcm1hdGlvblwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbCAmJiA8bGFiZWwgY2xhc3NOYW1lPXtcImNoZWNrYm94LWxhYmVsXCJ9PntsYWJlbH08L2xhYmVsPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZCAmJiA8c3BhbiBjbGFzc05hbWU9e1wiY2hlY2tib3gtcmVxdWlyZWRcIn0+Kjwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbkNoZWNrYm94LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgaW52YWxpZDogZmFsc2UsXHJcbiAgICBtYW5hZ2VDaGVja2VkOiBmYWxzZSxcclxuICAgIG1hbmFnZUludmFsaWQ6IGZhbHNlLFxyXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxyXG4gICAgcmVxdWlyZWQ6IGZhbHNlXHJcbn07XHJcblxyXG5DaGVja2JveC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGVja2VkOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBwcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBwcm9wVHlwZXMub25lT2YoW1wiaW5kZXRlcm1pbmF0ZVwiXSlcclxuICAgIF0pLFxyXG4gICAgZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgaW52YWxpZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG1hbmFnZUNoZWNrZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlSW52YWxpZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBuYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcmVhZG9ubHk6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVxdWlyZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgb25JbnZhbGlkOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uQ2hhbmdlOiBwcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveCJdfQ==