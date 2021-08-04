function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const React = _interopRequireWildcard(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _classnames = _interopRequireDefault(require('classnames'));

const _RadioOption = _interopRequireDefault(require('./RadioOption.js'));

const _jsxRuntime = require('react/jsx-runtime');
const _constants = require('./constants');

const _RequiredLabel = _interopRequireDefault(require('../RequiredLabel/RequiredLabel'));

const _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) {
  let _i = arr && (typeof Symbol !== 'undefined' && arr[Symbol.iterator] || arr['@@iterator']); if (_i == null) return; const _arr = []; let _n = true; let _d = false; let _s; let
    _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return != null) _i.return(); } finally { if (_d) throw _e; } } return _arr;
}

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const RadioButtons = /* #__PURE__ */React.forwardRef((props, ref) => {
  const { value } = props;
  const { invalid } = props;
  const { manageValue } = props;
  const { onChange } = props;
  const { readonly } = props;
  const { manageInvalid } = props;
  const { onInvalid } = props;
  const { layout } = props;
  const { required } = props;

  const _useState = (0, React.useState)(value);
  const _useState2 = _slicedToArray(_useState, 2);
  const selectedValue = _useState2[0];
  const setSelectedValue = _useState2[1];

  const _useState3 = (0, React.useState)(invalid);
  const _useState4 = _slicedToArray(_useState3, 2);
  const isInvalid = _useState4[0];
  const setIsInvalid = _useState4[1];

  const selectedFinal = manageValue ? value : selectedValue;
  const invalidFinal = manageInvalid ? invalid : isInvalid;
  const optionClicked = (0, React.useCallback)((option) => {
    if (!readonly) {
      !manageValue && setSelectedValue(option.id);
      onChange(option);
    }
  }, [readonly, manageValue, onChange]);
  const optionInvalid = (0, React.useCallback)((e) => {
    !manageInvalid && setIsInvalid(true);
    onInvalid(e);
  }, [manageInvalid, onInvalid]);

  const renderValue = function renderValue(option, name) {
    const { id } = option;
    const { label } = option;
    const { value } = option;
    const { checked } = option;
    const { readonly } = option;
    const { disabled } = option;
    const isChecked = selectedFinal ? selectedFinal === id : checked;
    const isHorizontal = layout === _constants.RADIO_BUTTONS_LAYOUT.horizontal;
    return /* #__PURE__ */(0, _jsxRuntime.jsx)(_RadioOption.default, {
      id,
      label,
      value,
      checked: isChecked,
      readonly: readonly || props.readonly,
      disabled: disabled || props.disabled,
      required,
      invalid: invalidFinal,
      name,
      onChangeAction: optionClicked,
      onInvalidAction: optionInvalid,
      isHorizontal,
    }, id);
  };

  const { label } = props;
  const { name } = props;
  const { options } = props;
  const { visible } = props;
  const { className } = props;
  const { labelClassName } = props;
  return visible ? /* #__PURE__ */(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
      className: (0, _classnames.default)(className, 'radio-buttons-container'),
      ref,
      children: [/* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
        className: (0, _classnames.default)({
          'radio-buttons-header': true,
          invalid: invalidFinal,
        }),
        children: (label || required) && /* #__PURE__ */(0, _jsxRuntime.jsx)(_RequiredLabel.default, {
          className: labelClassName,
          invalid: invalidFinal,
          required,
          label,
        }),
      }), /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
        className: 'group-of-radio-buttons',
        children: options.map((option) => renderValue(option, name)),
      })],
    }),
  }) : null;
});
RadioButtons.defaultProps = {
  disabled: false,
  layout: _constants.RADIO_BUTTONS_LAYOUT.vertical,
  manageValue: false,
  options: [],
  readonly: false,
  required: false,
  manageInvalid: false,
  visible: true,
  onChange: _utils.noop,
  onInvalid: _utils.noop,
  className: {},
  labelClassName: {},
};
RadioButtons.propTypes = {
  disabled: _propTypes.default.bool,
  invalid: _propTypes.default.bool,
  label: _propTypes.default.string,
  layout: _propTypes.default.oneOf([_constants.RADIO_BUTTONS_LAYOUT.vertical, _constants.RADIO_BUTTONS_LAYOUT.horizontal]),
  manageValue: _propTypes.default.bool,
  manageInvalid: _propTypes.default.bool,
  name: _propTypes.default.string,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    label: _propTypes.default.string,
    value: _propTypes.default.string,
    checked: _propTypes.default.bool,
    readonly: _propTypes.default.bool,
    disabled: _propTypes.default.bool,
  })),
  readonly: _propTypes.default.bool,
  required: _propTypes.default.bool,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func,
  onInvalid: _propTypes.default.func,
  visible: _propTypes.default.bool,
  className: _propTypes.default.object,
  labelClassName: _propTypes.default.object,
};
const _default = RadioButtons;
exports.default = _default;
