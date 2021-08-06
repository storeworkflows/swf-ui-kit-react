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

const _Icon = _interopRequireDefault(require('../../../Icon/Icon'));

const _findByType = _interopRequireWildcard(require('../../../utils/findByType'));

const _jsxRuntime = require('react/jsx-runtime');
const _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const File = function File(props) {
  const { children } = props;
  const { className } = props;
  const { file } = props;
  const { displayValue } = props;
  const { icon } = props;

  const renderEnd = function renderEnd() {
    const end = (0, _findByType.default)(children, 'End');
    if (!end || end.length < 1) return null;
    return /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
      className: 'swf-file--end',
      children: end,
    });
  };

  const fileClasses = (0, _classnames.default)(className, 'swf-file');
  const sizeStr = ''.concat((file.size / 1024).toFixed(3), ' Kb');
  return /* #__PURE__ */(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
      className: fileClasses,
      children: [/* #__PURE__ */(0, _jsxRuntime.jsx)(_Icon.default, {
        className: 'file-icon',
        icon: icon || (0, _utils.getIconByFileType)(file.type),
        customSize: 30,
      }), /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
        className: 'file-info-container',
        children: [/* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
          className: 'file-header',
          children: displayValue || file.name,
        }), /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
          className: 'file-size',
          children: sizeStr,
        })],
      }), renderEnd()],
    }),
  });
};

File.End = (0, _findByType.createSubComponent)('End');
File.defaultProps = {
  className: '',
};
File.propTypes = {
  file: _propTypes.default.shape({
    name: _propTypes.default.string,
    size: _propTypes.default.number,
    type: _propTypes.default.string,
  }),
  displayValue: _propTypes.default.string,
  icon: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
};
const _default = File;
exports.default = _default;
