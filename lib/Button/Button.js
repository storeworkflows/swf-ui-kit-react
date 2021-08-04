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
const _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Button = function Button(props) {
  const { disabled } = props;
  const { icon } = props;
  const { label } = props;
  const { tooltipContent } = props;
  const { size } = props;
  const { variant } = props;
  const { customStyle } = props;
  const { children } = props;
  const { onClick } = props;
  const { className } = props;
  const { type } = props;
  const additionalStyle = (0, _utils.addStyles)(customStyle);

  const _hasIcon = icon.length > 0;

  const _hasLabel = label.length > 0;

  const _hasOnlyIcon = _hasIcon && !_hasLabel;

  const _iconSize = (0, _utils.getIconSize)(customStyle, icon, size);

  const buttonClasses = (0, _classnames.default)(className, variant, 'button-'.concat(size), {
    'swf-button': true,
    active: !disabled,
    disabled,
    'has-icon': _hasIcon,
  });
  const iconClasses = (0, _classnames.default)({
    'button-icon': true,
    'label-button-icon': !_hasOnlyIcon,
  });
  return /* #__PURE__ */(0, _jsxRuntime.jsx)('button', {
    ref: function ref(elm) {
      return props.innerRef.current = elm;
    },
    className: buttonClasses,
    onClick,
    disabled,
    title: tooltipContent,
    style: additionalStyle,
    type,
    children: /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
      className: 'content',
      children: [_hasIcon && /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
        className: iconClasses,
        children: /* #__PURE__ */(0, _jsxRuntime.jsx)(_Icon.default, {
          icon,
          customSize: _iconSize,
        }),
      }), _hasLabel && /* #__PURE__ */(0, _jsxRuntime.jsx)('label', {
        className: 'button-label',
        children: label,
      }), children],
    }),
  });
};

Button.defaultProps = {
  disabled: false,
  icon: '',
  label: '',
  tooltipContent: '',
  size: 'md',
  variant: 'secondary',
  customStyle: null,
  className: {},
  innerRef: /* #__PURE__ */React.createRef(),
  type: 'button',
};
Button.propTypes = {
  disabled: _propTypes.default.bool,
  icon: _propTypes.default.string,
  label: _propTypes.default.string,
  tooltipContent: _propTypes.default.string,
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  variant: _propTypes.default.oneOf(['primary', 'primary-positive', 'primary-negative', 'secondary', 'secondary-positive', 'secondary-negative', 'tertiary', 'inherit', '']),
  customStyle: _propTypes.default.object,
  onClick: _propTypes.default.func,
  className: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  innerRef: _propTypes.default.object,
  type: _propTypes.default.oneOf(['button', 'reset', 'submit']),
};

const _default = /* #__PURE__ */React.memo(Button);

exports.default = _default;
