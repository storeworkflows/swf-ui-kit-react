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

const _classnames2 = _interopRequireDefault(require('classnames'));

const _Avatar = _interopRequireDefault(require('../Avatar/Avatar'));

const _Icon = _interopRequireDefault(require('../Icon/Icon'));

const _jsxRuntime = require('react/jsx-runtime');
const _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value, enumerable: true, configurable: true, writable: true,
    });
  } else { obj[key] = value; } return obj;
}

const Pill = /* #__PURE__ */React.memo(/* #__PURE__ */React.forwardRef((props, ref) => {
  let _classnames;

  const { canDismiss } = props;
  const { icon } = props;
  const { classNames } = props;
  const { member } = props;
  const { label } = props;
  const { outline } = props;
  const { size } = props;
  const { clickable } = props;
  const { color } = props;
  const { deleteIcon } = props;
  const { onDelete } = props;
  const { disabled } = props;
  const _onClick = props.onClick;

  const removePill = function removePill(e) {
    e === null || e === void 0 ? void 0 : e.stopPropagation();
    e === null || e === void 0 ? void 0 : e.preventDefault();

    if (onDelete === _utils.noop) {
      const curEl = e.target.parentElement.parentElement;
      const iconEl = curEl.classList.contains('pill-icon') ? curEl.parentElement : curEl;
      iconEl === null || iconEl === void 0 ? void 0 : iconEl.remove();
    }

    onDelete(props);
  };

  const hasMember = member;
  const hasIcon = !hasMember && icon;
  const showPillIcon = hasMember || hasIcon;
  return /* #__PURE__ */(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
      ref,
      className: (0, _classnames2.default)((_classnames = {
        pill: true,
        '--disabled': disabled,
        '--clickable': clickable && !disabled,
        '--outlined': outline,
      }, _defineProperty(_classnames, '--'.concat(size), true), _defineProperty(_classnames, '--'.concat(color), true), _defineProperty(_classnames, classNames, true), _classnames)),
      onClick: function onClick() {
        return _onClick(props);
      },
      children: [showPillIcon && /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
        className: 'pill-icon',
        children: [hasMember && /* #__PURE__ */(0, _jsxRuntime.jsx)(_Avatar.default, {
          member,
          clickable: false,
        }), hasIcon && /* #__PURE__ */(0, _jsxRuntime.jsx)(_Icon.default, {
          icon,
          size: 'sm',
        })],
      }), /* #__PURE__ */(0, _jsxRuntime.jsx)('span', {
        className: (0, _classnames2.default)('pill-label', ['--'.concat(size)]),
        children: label,
      }), canDismiss && /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
        className: 'pill-icon --delete',
        onClick: removePill,
        children: /* #__PURE__ */(0, _jsxRuntime.jsx)(_Icon.default, {
          icon: deleteIcon || 'x',
          size: 'sm',
        }),
      })],
    }),
  });
}));
Pill.defaultProps = {
  canDismiss: false,
  disabled: false,
  icon: null,
  member: null,
  label: '',
  outline: false,
  size: 'md',
  classNames: '',
  clickable: false,
  color: 'default',
  deleteIcon: null,
  onDelete: _utils.noop,
  onClick: _utils.noop,
};
Pill.propTypes = {
  canDismiss: _propTypes.default.bool,
  icon: _propTypes.default.string,
  member: _propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    title: _propTypes.default.string,
    avatar: _propTypes.default.string,
    id: _propTypes.default.string.isRequired,
  }),
  disabled: _propTypes.default.bool,
  label: _propTypes.default.string,
  outline: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['sm', 'md', 'xl']),
  classNames: _propTypes.default.string,
  clickable: _propTypes.default.bool,
  color: _propTypes.default.oneOf(['default', 'primary', 'negative']),
  deleteIcon: _propTypes.default.string,
  onDelete: _propTypes.default.func,
  onClick: _propTypes.default.func,
};
const _default = Pill;
exports.default = _default;
