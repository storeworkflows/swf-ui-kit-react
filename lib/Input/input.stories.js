"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandedInput = exports.Standard = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Input = _interopRequireDefault(require("./Input"));

var _tableCategories = require("../../.storybook/tableCategories");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Input/Input',
  component: _Input["default"],
  argTypes: {
    autofocus: _tableCategories.TABLE_CATEGORIES.VALUE,
    label: _tableCategories.TABLE_CATEGORIES.VALUE,
    max: _tableCategories.TABLE_CATEGORIES.VALUE,
    min: _tableCategories.TABLE_CATEGORIES.VALUE,
    maxlength: _tableCategories.TABLE_CATEGORIES.VALUE,
    minlength: _tableCategories.TABLE_CATEGORIES.VALUE,
    message: _tableCategories.TABLE_CATEGORIES.VALUE,
    name: _tableCategories.TABLE_CATEGORIES.VALUE,
    pattern: _tableCategories.TABLE_CATEGORIES.VALUE,
    placeholder: _tableCategories.TABLE_CATEGORIES.VALUE,
    step: _tableCategories.TABLE_CATEGORIES.VALUE,
    type: _tableCategories.TABLE_CATEGORIES.VALUE,
    value: _tableCategories.TABLE_CATEGORIES.VALUE,
    internalRef: _tableCategories.TABLE_CATEGORIES.VALUE,
    multiple: _tableCategories.TABLE_CATEGORIES.VALUE,
    manageInvalid: _tableCategories.TABLE_CATEGORIES.MANAGING,
    manageValue: _tableCategories.TABLE_CATEGORIES.MANAGING,
    onInput: _tableCategories.TABLE_CATEGORIES.ACTION,
    onChange: _tableCategories.TABLE_CATEGORIES.ACTION,
    onFocus: _tableCategories.TABLE_CATEGORIES.ACTION,
    onKeyDown: _tableCategories.TABLE_CATEGORIES.ACTION,
    onBlur: _tableCategories.TABLE_CATEGORIES.ACTION,
    onInvalid: _tableCategories.TABLE_CATEGORIES.ACTION,
    onPaste: _tableCategories.TABLE_CATEGORIES.ACTION,
    disabled: _tableCategories.TABLE_CATEGORIES.STATE,
    invalid: _tableCategories.TABLE_CATEGORIES.STATE,
    readonly: _tableCategories.TABLE_CATEGORIES.STATE,
    required: _tableCategories.TABLE_CATEGORIES.STATE,
    inputClass: _tableCategories.TABLE_CATEGORIES.STYLE,
    containerClass: _tableCategories.TABLE_CATEGORIES.STYLE,
    className: _tableCategories.TABLE_CATEGORIES.STYLE
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], _objectSpread({}, args));
};

var Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  label: "Label"
};

var ExpandedInput = function ExpandedInput(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Input["default"], _objectSpread(_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"].Start, {
      children: "Start"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"].End, {
      children: "End"
    })]
  }));
};

exports.ExpandedInput = ExpandedInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbnB1dC9pbnB1dC5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwiSW5wdXQiLCJhcmdUeXBlcyIsImF1dG9mb2N1cyIsIlRBQkxFX0NBVEVHT1JJRVMiLCJWQUxVRSIsImxhYmVsIiwibWF4IiwibWluIiwibWF4bGVuZ3RoIiwibWlubGVuZ3RoIiwibWVzc2FnZSIsIm5hbWUiLCJwYXR0ZXJuIiwicGxhY2Vob2xkZXIiLCJzdGVwIiwidHlwZSIsInZhbHVlIiwiaW50ZXJuYWxSZWYiLCJtdWx0aXBsZSIsIm1hbmFnZUludmFsaWQiLCJNQU5BR0lORyIsIm1hbmFnZVZhbHVlIiwib25JbnB1dCIsIkFDVElPTiIsIm9uQ2hhbmdlIiwib25Gb2N1cyIsIm9uS2V5RG93biIsIm9uQmx1ciIsIm9uSW52YWxpZCIsIm9uUGFzdGUiLCJkaXNhYmxlZCIsIlNUQVRFIiwiaW52YWxpZCIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJpbnB1dENsYXNzIiwiU1RZTEUiLCJjb250YWluZXJDbGFzcyIsImNsYXNzTmFtZSIsIlRlbXBsYXRlIiwiYXJncyIsIlN0YW5kYXJkIiwiYmluZCIsIkV4cGFuZGVkSW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7O2VBRWU7QUFDWEEsRUFBQUEsS0FBSyxFQUFFLHdCQURJO0FBRVhDLEVBQUFBLFNBQVMsRUFBRUMsaUJBRkE7QUFHWEMsRUFBQUEsUUFBUSxFQUFFO0FBQ05DLElBQUFBLFNBQVMsRUFBRUMsa0NBQWlCQyxLQUR0QjtBQUVOQyxJQUFBQSxLQUFLLEVBQUVGLGtDQUFpQkMsS0FGbEI7QUFHTkUsSUFBQUEsR0FBRyxFQUFFSCxrQ0FBaUJDLEtBSGhCO0FBSU5HLElBQUFBLEdBQUcsRUFBRUosa0NBQWlCQyxLQUpoQjtBQUtOSSxJQUFBQSxTQUFTLEVBQUVMLGtDQUFpQkMsS0FMdEI7QUFNTkssSUFBQUEsU0FBUyxFQUFFTixrQ0FBaUJDLEtBTnRCO0FBT05NLElBQUFBLE9BQU8sRUFBRVAsa0NBQWlCQyxLQVBwQjtBQVFOTyxJQUFBQSxJQUFJLEVBQUVSLGtDQUFpQkMsS0FSakI7QUFTTlEsSUFBQUEsT0FBTyxFQUFFVCxrQ0FBaUJDLEtBVHBCO0FBVU5TLElBQUFBLFdBQVcsRUFBRVYsa0NBQWlCQyxLQVZ4QjtBQVdOVSxJQUFBQSxJQUFJLEVBQUVYLGtDQUFpQkMsS0FYakI7QUFZTlcsSUFBQUEsSUFBSSxFQUFFWixrQ0FBaUJDLEtBWmpCO0FBYU5ZLElBQUFBLEtBQUssRUFBRWIsa0NBQWlCQyxLQWJsQjtBQWNOYSxJQUFBQSxXQUFXLEVBQUVkLGtDQUFpQkMsS0FkeEI7QUFlTmMsSUFBQUEsUUFBUSxFQUFFZixrQ0FBaUJDLEtBZnJCO0FBaUJOZSxJQUFBQSxhQUFhLEVBQUVoQixrQ0FBaUJpQixRQWpCMUI7QUFrQk5DLElBQUFBLFdBQVcsRUFBRWxCLGtDQUFpQmlCLFFBbEJ4QjtBQW9CTkUsSUFBQUEsT0FBTyxFQUFFbkIsa0NBQWlCb0IsTUFwQnBCO0FBcUJOQyxJQUFBQSxRQUFRLEVBQUVyQixrQ0FBaUJvQixNQXJCckI7QUFzQk5FLElBQUFBLE9BQU8sRUFBRXRCLGtDQUFpQm9CLE1BdEJwQjtBQXVCTkcsSUFBQUEsU0FBUyxFQUFFdkIsa0NBQWlCb0IsTUF2QnRCO0FBd0JOSSxJQUFBQSxNQUFNLEVBQUV4QixrQ0FBaUJvQixNQXhCbkI7QUF5Qk5LLElBQUFBLFNBQVMsRUFBRXpCLGtDQUFpQm9CLE1BekJ0QjtBQTBCTk0sSUFBQUEsT0FBTyxFQUFFMUIsa0NBQWlCb0IsTUExQnBCO0FBNEJOTyxJQUFBQSxRQUFRLEVBQUUzQixrQ0FBaUI0QixLQTVCckI7QUE2Qk5DLElBQUFBLE9BQU8sRUFBRTdCLGtDQUFpQjRCLEtBN0JwQjtBQThCTkUsSUFBQUEsUUFBUSxFQUFFOUIsa0NBQWlCNEIsS0E5QnJCO0FBK0JORyxJQUFBQSxRQUFRLEVBQUUvQixrQ0FBaUI0QixLQS9CckI7QUFpQ05JLElBQUFBLFVBQVUsRUFBRWhDLGtDQUFpQmlDLEtBakN2QjtBQWtDTkMsSUFBQUEsY0FBYyxFQUFFbEMsa0NBQWlCaUMsS0FsQzNCO0FBbUNORSxJQUFBQSxTQUFTLEVBQUVuQyxrQ0FBaUJpQztBQW5DdEI7QUFIQyxDOzs7QUEyQ2YsSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLHNCQUFVLHFCQUFDLGlCQUFELG9CQUFXQSxJQUFYLEVBQVY7QUFBQSxDQUFqQjs7QUFFTyxJQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBakI7O0FBQ1BELFFBQVEsQ0FBQ0QsSUFBVCxHQUFnQjtBQUNabkMsRUFBQUEsS0FBSyxFQUFFO0FBREssQ0FBaEI7O0FBSU8sSUFBTXNDLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0gsSUFBRDtBQUFBLHNCQUFVLHNCQUFDLGlCQUFELGtDQUFXQSxJQUFYO0FBQUEsNEJBQ25DLHFCQUFDLGlCQUFELENBQU8sS0FBUDtBQUFBO0FBQUEsTUFEbUMsZUFJbkMscUJBQUMsaUJBQUQsQ0FBTyxHQUFQO0FBQUE7QUFBQSxNQUptQztBQUFBLEtBQVY7QUFBQSxDQUF0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIElucHV0IH0gZnJvbSAnLi9JbnB1dCc7XHJcbmltcG9ydCB7VEFCTEVfQ0FURUdPUklFU30gZnJvbSBcIi4uLy4uLy5zdG9yeWJvb2svdGFibGVDYXRlZ29yaWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICB0aXRsZTogJ3N3Zi11aS1raXQvSW5wdXQvSW5wdXQnLFxyXG4gICAgY29tcG9uZW50OiBJbnB1dCxcclxuICAgIGFyZ1R5cGVzOiB7XHJcbiAgICAgICAgYXV0b2ZvY3VzOiBUQUJMRV9DQVRFR09SSUVTLlZBTFVFLFxyXG4gICAgICAgIGxhYmVsOiBUQUJMRV9DQVRFR09SSUVTLlZBTFVFLFxyXG4gICAgICAgIG1heDogVEFCTEVfQ0FURUdPUklFUy5WQUxVRSxcclxuICAgICAgICBtaW46IFRBQkxFX0NBVEVHT1JJRVMuVkFMVUUsXHJcbiAgICAgICAgbWF4bGVuZ3RoOiBUQUJMRV9DQVRFR09SSUVTLlZBTFVFLFxyXG4gICAgICAgIG1pbmxlbmd0aDogVEFCTEVfQ0FURUdPUklFUy5WQUxVRSxcclxuICAgICAgICBtZXNzYWdlOiBUQUJMRV9DQVRFR09SSUVTLlZBTFVFLFxyXG4gICAgICAgIG5hbWU6IFRBQkxFX0NBVEVHT1JJRVMuVkFMVUUsXHJcbiAgICAgICAgcGF0dGVybjogVEFCTEVfQ0FURUdPUklFUy5WQUxVRSxcclxuICAgICAgICBwbGFjZWhvbGRlcjogVEFCTEVfQ0FURUdPUklFUy5WQUxVRSxcclxuICAgICAgICBzdGVwOiBUQUJMRV9DQVRFR09SSUVTLlZBTFVFLFxyXG4gICAgICAgIHR5cGU6IFRBQkxFX0NBVEVHT1JJRVMuVkFMVUUsXHJcbiAgICAgICAgdmFsdWU6IFRBQkxFX0NBVEVHT1JJRVMuVkFMVUUsXHJcbiAgICAgICAgaW50ZXJuYWxSZWY6IFRBQkxFX0NBVEVHT1JJRVMuVkFMVUUsXHJcbiAgICAgICAgbXVsdGlwbGU6IFRBQkxFX0NBVEVHT1JJRVMuVkFMVUUsXHJcblxyXG4gICAgICAgIG1hbmFnZUludmFsaWQ6IFRBQkxFX0NBVEVHT1JJRVMuTUFOQUdJTkcsXHJcbiAgICAgICAgbWFuYWdlVmFsdWU6IFRBQkxFX0NBVEVHT1JJRVMuTUFOQUdJTkcsXHJcblxyXG4gICAgICAgIG9uSW5wdXQ6IFRBQkxFX0NBVEVHT1JJRVMuQUNUSU9OLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBUQUJMRV9DQVRFR09SSUVTLkFDVElPTixcclxuICAgICAgICBvbkZvY3VzOiBUQUJMRV9DQVRFR09SSUVTLkFDVElPTixcclxuICAgICAgICBvbktleURvd246IFRBQkxFX0NBVEVHT1JJRVMuQUNUSU9OLFxyXG4gICAgICAgIG9uQmx1cjogVEFCTEVfQ0FURUdPUklFUy5BQ1RJT04sXHJcbiAgICAgICAgb25JbnZhbGlkOiBUQUJMRV9DQVRFR09SSUVTLkFDVElPTixcclxuICAgICAgICBvblBhc3RlOiBUQUJMRV9DQVRFR09SSUVTLkFDVElPTixcclxuXHJcbiAgICAgICAgZGlzYWJsZWQ6IFRBQkxFX0NBVEVHT1JJRVMuU1RBVEUsXHJcbiAgICAgICAgaW52YWxpZDogVEFCTEVfQ0FURUdPUklFUy5TVEFURSxcclxuICAgICAgICByZWFkb25seTogVEFCTEVfQ0FURUdPUklFUy5TVEFURSxcclxuICAgICAgICByZXF1aXJlZDogVEFCTEVfQ0FURUdPUklFUy5TVEFURSxcclxuXHJcbiAgICAgICAgaW5wdXRDbGFzczogVEFCTEVfQ0FURUdPUklFUy5TVFlMRSxcclxuICAgICAgICBjb250YWluZXJDbGFzczogVEFCTEVfQ0FURUdPUklFUy5TVFlMRSxcclxuICAgICAgICBjbGFzc05hbWU6IFRBQkxFX0NBVEVHT1JJRVMuU1RZTEVcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5jb25zdCBUZW1wbGF0ZSA9IChhcmdzKSA9PiA8SW5wdXQgey4uLmFyZ3N9IC8+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0YW5kYXJkID0gVGVtcGxhdGUuYmluZCh7fSk7XHJcblN0YW5kYXJkLmFyZ3MgPSB7XHJcbiAgICBsYWJlbDogXCJMYWJlbFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFeHBhbmRlZElucHV0ID0gKGFyZ3MpID0+IDxJbnB1dCB7Li4uYXJnc30+XHJcbiAgICA8SW5wdXQuU3RhcnQ+XHJcbiAgICAgICAgU3RhcnRcclxuICAgIDwvSW5wdXQuU3RhcnQ+XHJcbiAgICA8SW5wdXQuRW5kPlxyXG4gICAgICAgIEVuZFxyXG4gICAgPC9JbnB1dC5FbmQ+XHJcbjwvSW5wdXQ+XHJcblxyXG5cclxuXHJcbiJdfQ==