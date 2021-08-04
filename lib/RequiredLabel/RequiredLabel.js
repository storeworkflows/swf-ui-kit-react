function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _propTypes = _interopRequireDefault(require('prop-types'));

const React = _interopRequireWildcard(require('react'));

const _Icon = _interopRequireDefault(require('../Icon/Icon'));

const _classnames = _interopRequireDefault(require('classnames'));

const _jsxRuntime = require('react/jsx-runtime');

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RequiredLabel = /* #__PURE__ */React.forwardRef((props, ref) => {
  const { required } = props;
  const { label } = props;
  const { invalid } = props;
  const { className } = props;
  const { htmlFor } = props;
  const labelClasses = (0, _classnames.default)(className, 'label-area', {
    '--invalid': invalid,
  });
  return required || label ? /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
    className: labelClasses,
    ref,
    children: [label && /* #__PURE__ */(0, _jsxRuntime.jsx)('label', {
      htmlFor,
      className: 'label-text',
      children: label,
    }), required && /* #__PURE__ */(0, _jsxRuntime.jsx)(_Icon.default, {
      className: 'label-icon',
      icon: 'asterisk',
      customSize: 7,
    })],
  }) : null;
});
RequiredLabel.defaultProps = {
  required: false,
  invalid: false,
  className: {},
};
RequiredLabel.propTypes = {
  required: _propTypes.default.bool,
  invalid: _propTypes.default.bool,
  label: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  htmlFor: _propTypes.default.string,
};
const _default = RequiredLabel;
exports.default = _default;
