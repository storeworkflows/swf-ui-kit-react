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

const _Icon = _interopRequireDefault(require('../Icon/Icon'));

const _jsxRuntime = require('react/jsx-runtime');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const getIconSize = function getIconSize(size, icon) {
  switch (size) {
    case 'sm':
      return icon ? 11 : 7;

    case 'lg':
      return icon ? 18 : 10;

    default:
      return icon ? 14 : 8;
  }
};

const HighlightedValue = /* #__PURE__ */React.forwardRef((props, ref) => {
  const { roundBorder } = props;
  const { className } = props;
  const { showIcon } = props;
  const { onClick } = props;
  const { variant } = props;
  const { color } = props;
  const { label } = props;
  const { icon } = props;
  const { size } = props;
  const classes = (0, _classnames.default)('highlighted-value-container', '--'.concat(size), color, className, {
    '--round': roundBorder,
  });
  const containerClasses = (0, _classnames.default)('highlighted-color-container', '--'.concat(variant), {
    '--round': roundBorder,
  });
  const iconSize = getIconSize(size, icon);
  return /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
    className: classes,
    ref,
    children: /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
      className: containerClasses,
      onClick,
      children: [showIcon && /* #__PURE__ */(0, _jsxRuntime.jsx)(_Icon.default, {
        className: 'highlighted-icon',
        icon: icon || 'circle-fill',
        customSize: iconSize,
      }), label && /* #__PURE__ */(0, _jsxRuntime.jsx)('span', {
        children: label,
      })],
    }),
  });
});
HighlightedValue.defaultProps = {
  className: {},
  onClick: function onClick() {
    return void 0;
  },
  showIcon: false,
  size: 'md',
  variant: 'primary',
  color: 'red',
  roundBorder: true,
};
HighlightedValue.propTypes = {
  roundBorder: _propTypes.default.bool,
  label: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  onClick: _propTypes.default.func,
  icon: _propTypes.default.string,
  showIcon: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary']),
  color: _propTypes.default.oneOf(['yellow', 'red', 'green', 'blue', 'grey', 'grey-blue']),
};
const _default = HighlightedValue;
exports.default = _default;
