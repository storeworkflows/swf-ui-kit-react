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

const _index = require('../index');

const _utils = require('../utils');

const _Icon = _interopRequireDefault(require('../Icon/Icon'));

const _jsxRuntime = require('react/jsx-runtime');

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

const AvatarGroup = function AvatarGroup(props) {
  const { size } = props;
  const { max } = props;
  const { canAdd } = props;
  const { members } = props;
  const { canRemove } = props;
  const { onRemove } = props;
  const { customIcon } = props;
  const { manageOpened } = props;
  const { onClick } = props;
  const { onAdd } = props;
  const { clickable } = props;

  const _useState = (0, React.useState)(-1);
  const _useState2 = _slicedToArray(_useState, 2);
  const openedAvatar = _useState2[0];
  const setOpenedAvatar = _useState2[1];

  const openAvatar = function openAvatar(index) {
    const isSameClicked = openedAvatar === index;
    setOpenedAvatar(isSameClicked ? -1 : index);
  };

  const handleClick = function handleClick(_ref) {
    const { index } = _ref;
    const { avatar } = _ref;
    !manageOpened && openAvatar(index);
    return onClick({
      index,
      avatar,
    });
  };

  const hasAdditionalMembers = members.length > max + 1;
  const maxViewers = hasAdditionalMembers ? max : members.length;
  const additionalMembers = members.length - max;
  const viewers = members.slice(0, maxViewers).reverse().filter((viewer) => viewer.name);
  return /* #__PURE__ */(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
      //  ref={elm => props.innerRef.current = elm}
      className: (0, _classnames2.default)(_defineProperty({
        'swf-avatar-container': true,
      }, '--'.concat(size), true)),
      children: [canAdd && /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
        className: (0, _classnames2.default)('avatar-multiple', 'add-new-member', 'additional-avatar'),
        onClick: function onClick() {
          return clickable && onAdd();
        },
        children: /* #__PURE__ */(0, _jsxRuntime.jsx)(_Icon.default, {
          icon: customIcon || 'person-plus',
          size,
        }),
      }), hasAdditionalMembers && /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
        className: (0, _classnames2.default)('avatar-multiple', 'additional-members'),
        children: /* #__PURE__ */(0, _jsxRuntime.jsxs)('p', {
          className: 'additional-avatar',
          children: [String.fromCharCode(43), additionalMembers],
        }),
      }), viewers.map((viewer, index) =>
      /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
          children: /* #__PURE__ */(0, _jsxRuntime.jsx)(_index.Avatar, {
            id: viewer.id || index,
            size,
            canRemove,
            onRemove,
            member: viewer,
            manageOpened: true,
            onClick: function onClick() {
              return handleClick({
                index,
                avatar: viewer,
              });
            },
            open: manageOpened ? viewer.open : openedAvatar === index,
          }),
        }, index + viewer.name.replace('', '_')))],
    }),
  });
};

AvatarGroup.defaultProps = {
  clickable: true,
  max: 5,
  size: 'xs',
  members: [],
  canRemove: true,
  canAdd: true,
  onAdd: _utils.noop,
  onRemove: _utils.noop,
  onClick: _utils.noop,
  manageOpened: false,
  innerRef: /* #__PURE__ */React.createRef(),
  customIcon: '',
};
AvatarGroup.propTypes = {
  clickable: _propTypes.default.bool,
  max: _propTypes.default.number,
  size: _propTypes.default.oneOf(['xs', 'md', 'lg']),
  manageOpened: _propTypes.default.bool,
  members: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    title: _propTypes.default.string,
    avatar: _propTypes.default.string,
    open: _propTypes.default.bool,
  })),
  canRemove: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  canAdd: _propTypes.default.bool,
  customIcon: _propTypes.default.string,
  onAdd: _propTypes.default.func,
  onRemove: _propTypes.default.func,
  innerRef: _propTypes.default.object,
};
const _default = AvatarGroup;
exports.default = _default;
