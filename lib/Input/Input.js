function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const React = _interopRequireWildcard(require('react'));

const _classnames3 = _interopRequireDefault(require('classnames'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _findByType = _interopRequireWildcard(require('../utils/findByType'));

const _jsxRuntime = require('react/jsx-runtime');
const _utils = require('../utils');

const _Icon = _interopRequireDefault(require('../Icon/Icon'));

const _InfoMessage = _interopRequireDefault(require('../InfoMessage/InfoMessage'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach((key) => { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach((key) => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value, enumerable: true, configurable: true, writable: true,
    });
  } else { obj[key] = value; } return obj;
}

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) {
  let _i = arr && (typeof Symbol !== 'undefined' && arr[Symbol.iterator] || arr['@@iterator']); if (_i == null) return; const _arr = []; let _n = true; let _d = false; let _s; let
    _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return != null) _i.return(); } finally { if (_d) throw _e; } } return _arr;
}

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const Start = function Start() {
  return null;
};

const End = function End() {
  return null;
};

const Input = function Input(props) {
  const { children } = props;
  const { readonly } = props;
  const { disabled } = props;
  const { manageInvalid } = props;
  const { onInvalid } = props;
  const { invalid } = props;
  const { value } = props;
  const { manageValue } = props;

  const _useState = (0, React.useState)(invalid);
  const _useState2 = _slicedToArray(_useState, 2);
  const isInvalid = _useState2[0];
  const setIsInvalid = _useState2[1];

  const _useState3 = (0, React.useState)(false);
  const _useState4 = _slicedToArray(_useState3, 2);
  const hasStart = _useState4[0];
  const setHasStart = _useState4[1];

  const _useState5 = (0, React.useState)(false);
  const _useState6 = _slicedToArray(_useState5, 2);
  const hasEnd = _useState6[0];
  const setHasEnd = _useState6[1];

  const _useState7 = (0, React.useState)(false);
  const _useState8 = _slicedToArray(_useState7, 2);
  const focused = _useState8[0];
  const setFocused = _useState8[1];

  const _useState9 = (0, React.useState)(value);
  const _useState10 = _slicedToArray(_useState9, 2);
  const valueState = _useState10[0];
  const setValueState = _useState10[1];

  const valueFinal = manageValue ? value : valueState;
  const invalidFinal = manageInvalid ? invalid : isInvalid;

  const renderStart = function renderStart() {
    const start = (0, _findByType.default)(children, 'Start');
    const classes = (0, _classnames3.default)({
      'form-control--start': true,
      '--invalid': invalidFinal,
      '--focused': focused,
      '--readonly': readonly,
      '--disabled': disabled,
    });
    if (!start || start.length < 1) return null;
    !hasStart && setHasStart(true);
    return /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
      className: classes,
      children: start,
    });
  };

  const renderEnd = function renderEnd() {
    const end = (0, _findByType.default)(children, 'End');
    const classes = (0, _classnames3.default)({
      'form-control--end': true,
      '--invalid': invalidFinal,
      '--readonly': readonly,
      '--disabled': disabled,
      '--focused': focused,
    });
    if (!end || end.length < 1) return null;
    !hasEnd && setHasEnd(true);
    return /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
      className: classes,
      children: end,
    });
  }; // type is one of "onBlur", "onInput", "onFocus"

  const onEvent = function onEvent(event, type) {
    const eventValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFinal;
    const canChange = !readonly && !disabled;
    if (!canChange) return;
    !manageValue && setValueState(eventValue);
    setFocused(type !== 'onBlur');
    props[type](event);
  };

  const onInvalidAction = function onInvalidAction(e) {
    !manageInvalid && setIsInvalid(true);
    onInvalid(e);
  };

  const { label } = props;
  const _props$name = props.name;
  const name = _props$name === void 0 ? 'name' : _props$name;
  const { placeholder } = props;
  const { required } = props;
  const { type } = props;
  const { step } = props;
  const { autofocus } = props;
  const { max } = props;
  const { min } = props;
  const { maxlength } = props;
  const { minlength } = props;
  const { pattern } = props;
  const { multiple } = props;
  const { message } = props;
  const { className } = props;
  const { containerClass } = props;
  const { inputClass } = props;
  const { onChange } = props;
  const { onKeyDown } = props;
  const { onPaste } = props;

  const _hasLabel = label !== undefined;

  const _hasMessages = message.length > 0;

  const _moved = focused || valueFinal || hasStart;

  const containerClasses = (0, _classnames3.default)(className, _defineProperty({
    'swf-form-group': true,
    '--invalid': invalidFinal,
    '--readonly': readonly,
    '--focused': focused,
  }, containerClass, true));
  const labelClasses = (0, _classnames3.default)({
    'inp-label': true,
    '--moved': _moved,
    '--focused': focused,
    '--invalid': invalidFinal,
    '--readonly': readonly,
  });
  const requiredClasses = (0, _classnames3.default)({
    'inp-required': true,
    '--focused': focused,
    '--invalid': invalidFinal,
  });
  const inputClasses = (0, _classnames3.default)(_defineProperty({
    'form-control': true,
    'no-start-border': hasStart,
    'no-end-border': hasEnd,
    '--invalid': invalidFinal,
    '--readonly': readonly,
  }, inputClass, true));
  return /* #__PURE__ */(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
      className: containerClasses,
      ref: function ref(elm) {
        return props.internalRef.current = elm;
      },
      children: [_hasLabel && /* #__PURE__ */(0, _jsxRuntime.jsxs)('span', {
        className: labelClasses,
        children: [/* #__PURE__ */(0, _jsxRuntime.jsx)('label', {
          htmlFor: 'name',
          children: label,
        }), required && /* #__PURE__ */(0, _jsxRuntime.jsx)(_Icon.default, {
          icon: 'asterisk',
          className: requiredClasses,
          customSize: 7,
        })],
      }), /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
        className: 'input-group',
        children: [renderStart(), /* #__PURE__ */(0, _jsxRuntime.jsx)('input', {
          className: inputClasses,
          id: 'name',
          name,
          placeholder,
          step,
          type,
          'aria-required': required,
          'aria-invalid': invalidFinal,
          'aria-readonly': readonly,
          value: valueFinal,
          readOnly: readonly,
          required,
          autoFocus: autofocus,
          max,
          min,
          maxLength: maxlength,
          minLength: minlength,
          pattern,
          disabled,
          multiple,
          onChange,
          onPaste,
          onKeyDown,
          onFocus: function onFocus(e) {
            return onEvent(e, 'onFocus');
          },
          onBlur: function onBlur(e) {
            return onEvent(e, 'onBlur');
          },
          onInput: function onInput(e) {
            return onEvent(e, 'onInput', e.target.value);
          },
          onInvalid: onInvalidAction,
        }), renderEnd()],
      }), _hasMessages && message.map((el, index) => el && /* #__PURE__ */(0, React.createElement)(_InfoMessage.default, _objectSpread(_objectSpread({}, el), {}, {
        key: index,
      })))],
    }),
  });
};

Input.Start = (0, _findByType.createSubComponent)('Start');
Input.End = (0, _findByType.createSubComponent)('End');
Input.defaultProps = {
  autofocus: false,
  disabled: false,
  invalid: false,
  manageInvalid: false,
  message: [],
  multiple: false,
  readonly: false,
  required: false,
  inputClass: '',
  containerClass: '',
  step: 'any',
  type: 'text',
  value: '',
  internalRef: /* #__PURE__ */React.createRef(),
  onInput: _utils.noop,
  onChange: _utils.noop,
  onBlur: _utils.noop,
  onFocus: _utils.noop,
  onInvalid: _utils.noop,
  onKeyDown: _utils.noop,
  onPaste: _utils.noop,
  className: {},
};
Input.propTypes = {
  autofocus: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  invalid: _propTypes.default.bool,
  label: _propTypes.default.string,
  manageInvalid: _propTypes.default.bool,
  manageValue: _propTypes.default.bool,
  max: _propTypes.default.number,
  min: _propTypes.default.number,
  maxlength: _propTypes.default.number,
  minlength: _propTypes.default.number,
  message: _propTypes.default.arrayOf(_propTypes.default.shape({
    status: _propTypes.default.oneOf(['yellow', 'red', 'green', 'blue', 'grey', 'grey-blue']),
    content: _propTypes.default.string,
    icon: _propTypes.default.string,
    className: _propTypes.default.object,
    iconSize: _propTypes.default.number,
    delay: _propTypes.default.number,
  })),
  multiple: _propTypes.default.bool,
  name: _propTypes.default.string,
  pattern: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  inputClass: _propTypes.default.string,
  containerClass: _propTypes.default.string,
  readonly: _propTypes.default.bool,
  required: _propTypes.default.bool,
  step: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['any'])]),
  type: _propTypes.default.oneOf(['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'date', 'datetime', 'datetime-local', 'month', 'week', 'time']),
  value: _propTypes.default.string,
  onInput: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onKeyDown: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onInvalid: _propTypes.default.func,
  onPaste: _propTypes.default.func,
  internalRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.any,
  })]),
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
};
const _default = Input;
exports.default = _default;
