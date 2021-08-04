function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = exports.AvatarMember = void 0;

const React = _interopRequireWildcard(require('react'));

const _classnames2 = _interopRequireDefault(require('classnames'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _jsxRuntime = require('react/jsx-runtime');
const _utils = require('../utils');

const _index = require('../index');

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) {
  let _i = arr && (typeof Symbol !== 'undefined' && arr[Symbol.iterator] || arr['@@iterator']); if (_i == null) return; const _arr = []; let _n = true; let _d = false; let _s; let
    _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return != null) _i.return(); } finally { if (_d) throw _e; } } return _arr;
}

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

console.shallowCloneLog = function () {
  const typeString = Function.prototype.call.bind(Object.prototype.toString);
  console.log.apply(console, Array.prototype.map.call(arguments, (x) => {
    switch (typeString(x).slice(8, -1)) {
      case 'Number':
      case 'String':
      case 'Undefined':
      case 'Null':
      case 'Boolean':
        return x;

      case 'Array':
        s;
        return x.slice();

      default:
        var out = Object.create(Object.getPrototypeOf(x));
        out.constructor = x.constructor;

        for (const key in x) {
          out[key] = x[key];
        }

        Object.defineProperty(out, 'constructor', {
          value: x.constructor,
        });
        return out;
    }
  }));
};

const Avatar = function Avatar(props) {
  let _classnames;

  const { id } = props;
  const { avatarVisible } = props;
  const { open } = props;
  const { color } = props;
  const { manageOpened } = props;
  const _props$member = props.member;
  const { avatar } = _props$member;
  const { name } = _props$member;
  const { title } = _props$member;
  const { size } = props;
  const { canRemove } = props;
  const { clickable } = props;
  const { className } = props;
  const { onClick } = props;
  const { onRemove } = props;

  const _useState = (0, React.useState)(false);
  const _useState2 = _slicedToArray(_useState, 2);
  const isOpen = _useState2[0];
  const setIsOpen = _useState2[1];

  const onAvatarClick = function onAvatarClick(event) {
    event.preventDefault();
    event.stopPropagation();

    if (clickable) {
      setIsOpen(!isOpen);
      onClick();
    }
  };

  const getInitials = function getInitials(name) {
    return name.split(' ').map((letter, index) => (index < 2 ? letter[0] : '')).join('').toUpperCase();
  };

  const fixPhotoSize = function fixPhotoSize(event) {
    const { nativeEvent } = event;
    const _nativeEvent$path = nativeEvent.path;
    const path = _nativeEvent$path === void 0 ? nativeEvent.composedPath() : _nativeEvent$path;
    const image = path[0];
    const { naturalWidth } = image;
    const { naturalHeight } = image;
    const sizes = {
      xs: '1.5rem',
      md: '2rem',
      lg: '2.5rem',
    };
    const parameters = sizes[size];
    image.style.width = naturalWidth < naturalHeight ? parameters : 'auto';
    image.style.height = naturalWidth < naturalHeight ? 'auto' : parameters;
  };

  const hasAvatar = Boolean(avatar);
  const avatarIsVisible = !hasAvatar && avatarVisible;
  const openState = manageOpened ? open : isOpen;
  return /* #__PURE__ */(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
      ref: function ref(elm) {
        return props.innerRef.current = elm;
      },
      className: (0, _classnames2.default)((_classnames = {
        'swf-avatar': true,
      }, _defineProperty(_classnames, '--'.concat(size), true), _defineProperty(_classnames, '--'.concat(color), true), _defineProperty(_classnames, '--clickable', clickable), _defineProperty(_classnames, '--selected', openState), _defineProperty(_classnames, className, true), _classnames)),
      onClick: onAvatarClick,
      children: [hasAvatar && /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
        className: 'photo-container',
        children: /* #__PURE__ */(0, _jsxRuntime.jsx)('img', {
          title: name,
          onLoad: fixPhotoSize,
          className: 'member-photo',
          src: avatar,
        }),
      }), avatarIsVisible && /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
        className: (0, _classnames2.default)({
          'member-container': true,
          '--selected': isOpen,
        }),
        children: /* #__PURE__ */(0, _jsxRuntime.jsx)('p', {
          className: 'initials',
          title: name,
          children: getInitials(name),
        }),
      }), /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
        className: (0, _classnames2.default)({
          'member-info': true,
          visible: openState,
        }),
        children: [/* #__PURE__ */(0, _jsxRuntime.jsx)('p', {
          className: 'name',
          children: name,
        }), /* #__PURE__ */(0, _jsxRuntime.jsx)('p', {
          className: 'title',
          children: title,
        })],
      }), canRemove && openState && /* #__PURE__ */(0, _jsxRuntime.jsx)(_index.Icon, {
        className: 'remove',
        onClick: function onClick(e) {
          e.stopPropagation();
          e.preventDefault();
          onRemove({
            id,
          });
        },
        icon: 'x',
        size: 'md',
      })],
    }),
  });
};

Avatar.defaultProps = {
  id: 0,
  clickable: true,
  open: false,
  manageOpened: false,
  size: 'xs',
  canRemove: false,
  avatarVisible: true,
  color: 'default',
  onRemove: _utils.noop,
  onClick: _utils.noop,
  innerRef: /* #__PURE__ */React.createRef(),
  className: '',
};
const AvatarMember = {
  name: _propTypes.default.string.isRequired,
  title: _propTypes.default.string,
  avatar: _propTypes.default.string,
};
exports.AvatarMember = AvatarMember;
Avatar.propTypes = {
  id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  avatarVisible: _propTypes.default.bool,
  canRemove: _propTypes.default.bool,
  clickable: _propTypes.default.bool,
  manageOpened: _propTypes.default.bool,
  open: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['xs', 'md', 'lg']),
  member: _propTypes.default.shape(AvatarMember),
  onRemove: _propTypes.default.func,
  color: _propTypes.default.oneOf(['default', 'primary', 'negative']),
  onClick: _propTypes.default.func,
  innerRef: _propTypes.default.object,
  className: _propTypes.default.string,
};

const _default = /* #__PURE__ */React.memo(Avatar);

exports.default = _default;
