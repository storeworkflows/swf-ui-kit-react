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

const _reactFastCompare = _interopRequireDefault(require('react-fast-compare'));

const _jsxRuntime = require('react/jsx-runtime');
const _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const RadioOption = /* #__PURE__ */React.forwardRef((props, ref) => {
  const { id } = props;
  const { checked } = props;
  const { readonly } = props;
  const { disabled } = props;
  const { name } = props;
  const { value } = props;
  const { label } = props;
  const { onChangeAction } = props;
  const { onInvalidAction } = props;
  const { invalid } = props;
  const { isHorizontal } = props;
  const { required } = props;
  const { className } = props;
  const optionClasses = (0, _classnames.default)(className, 'radio-option-container', {
    disabled,
    readonly,
    invalid,
    horizontal: isHorizontal,
  });
  const canChangeValue = !readonly && !disabled;
  return /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
    className: optionClasses,
    onClick: function onClick() {
      return canChangeValue && onChangeAction({
        id,
        name,
        value,
      });
    },
    ref,
    children: [/* #__PURE__ */(0, _jsxRuntime.jsx)('input', {
      className: (0, _classnames.default)('radio-option', {
        checked,
      }),
      type: 'radio',
      id,
      checked,
      value: value || label || '',
      disabled,
      readOnly: readonly,
      name,
      required,
      onChange: function onChange() {
        return void 0;
      },
      onInvalid: function onInvalid(e) {
        return onInvalidAction({
          e,
          id,
        });
      },
    }), /* #__PURE__ */(0, _jsxRuntime.jsx)('label', {
      className: 'radio-option-label',
      children: label,
    })],
  });
});
RadioOption.defaultProps = {
  name: '',
  label: '',
  className: '',
  onChangeAction: _utils.noop,
  onInvalidAction: _utils.noop,
};
RadioOption.propTypes = {
  id: _propTypes.default.string,
  label: _propTypes.default.string,
  value: _propTypes.default.string,
  checked: _propTypes.default.bool,
  readonly: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  invalid: _propTypes.default.bool,
  isHorizontal: _propTypes.default.bool,
  name: _propTypes.default.string,
  onChangeAction: _propTypes.default.func,
  onInvalidAction: _propTypes.default.func,
  required: _propTypes.default.bool,
  className: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
};

const _default = /* #__PURE__ */React.memo(RadioOption, (prev, next) => (0, _reactFastCompare.default)(prev, next));

exports.default = _default;
