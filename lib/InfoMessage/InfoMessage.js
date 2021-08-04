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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) {
  let _i = arr && (typeof Symbol !== 'undefined' && arr[Symbol.iterator] || arr['@@iterator']); if (_i == null) return; const _arr = []; let _n = true; let _d = false; let _s; let
    _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return != null) _i.return(); } finally { if (_d) throw _e; } } return _arr;
}

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const InfoMessage = /* #__PURE__ */React.forwardRef((props, ref) => {
  const { content } = props;
  const { delay } = props;
  const { status } = props;
  const { icon } = props;
  const { className } = props;
  const { iconSize } = props;

  const _useState = (0, React.useState)(content);
  const _useState2 = _slicedToArray(_useState, 2);
  const contentValue = _useState2[0];
  const setContentValue = _useState2[1];

  let timer = null;

  const setDelay = function setDelay() {
    if (delay) {
      timer = setTimeout(() => setContentValue(undefined), delay);
    }
  };

  (0, React.useEffect)(() => {
    setContentValue(content);
    setDelay();
  }, [content]);
  (0, React.useEffect)(() => {
    setDelay();
    return clearTimeout(timer);
  }, []);
  const messageClasses = (0, _classnames.default)(className, status, 'info-message');
  return contentValue ? /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
    className: messageClasses,
    ref,
    children: [icon && /* #__PURE__ */(0, _jsxRuntime.jsx)(_Icon.default, {
      className: 'input-message-icon',
      icon,
      customSize: iconSize,
    }), /* #__PURE__ */(0, _jsxRuntime.jsx)('span', {
      className: 'input-message-content',
      children: contentValue,
    })],
  }) : null;
});
InfoMessage.defaultProps = {
  status: 'red',
  className: '',
  iconSize: 16,
};
InfoMessage.propTypes = {
  status: _propTypes.default.oneOf(['yellow', 'red', 'green', 'blue', 'grey', 'grey-blue']),
  content: _propTypes.default.string,
  icon: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  iconSize: _propTypes.default.number,
  delay: _propTypes.default.number,
};

const _default = /* #__PURE__ */React.memo(InfoMessage);

exports.default = _default;
