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

const _findByType = _interopRequireWildcard(require('../utils/findByType'));

const _jsxRuntime = require('react/jsx-runtime');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const LabelValue = /* #__PURE__ */React.forwardRef((props, ref) => {
  const { labelClassName } = props;
  const { valueClassName } = props;
  const { className } = props;
  const { label } = props;
  const { value } = props;
  const { children } = props;
  const { importantLabel } = props;
  const { onClick } = props;
  const { inline } = props;
  const { size } = props;

  const renderValue = function renderValue() {
    const slotValue = (0, _findByType.default)(children, 'Value');
    const noSlot = !slotValue || slotValue.length < 1;
    if (noSlot && !value) return null;
    const renderValue = value || slotValue;
    const valueClasses = (0, _classnames.default)('value-content', valueClassName, {
      '--text-value': value,
      '--inline': inline,
    });
    return /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
      className: valueClasses,
      children: renderValue,
    });
  };

  const classes = (0, _classnames.default)('label-value-container', '--'.concat(size), className, {
    '--display-flex': inline,
    '--unimportant': !importantLabel,
  });
  const labelClasses = (0, _classnames.default)('label-content', labelClassName, {
    '--unimportant': !importantLabel,
  });
  return /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
    className: classes,
    onClick,
    ref,
    children: [label && /* #__PURE__ */(0, _jsxRuntime.jsx)('label', {
      className: labelClasses,
      children: label,
    }), renderValue()],
  });
});
LabelValue.Value = (0, _findByType.createSubComponent)('Value');
LabelValue.defaultProps = {
  className: {},
  labelClassName: {},
  valueClassName: {},
  inline: false,
  onClick: function onClick() {
    return void 0;
  },
  importantLabel: true,
  size: 'md',
};
LabelValue.propTypes = {
  label: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  labelClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  valueClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  onClick: _propTypes.default.func,
  inline: _propTypes.default.bool,
  value: _propTypes.default.string,
  importantLabel: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
};
const _default = LabelValue;
exports.default = _default;
