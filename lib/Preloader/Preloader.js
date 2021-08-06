function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const React = _interopRequireWildcard(require('react'));

const _classnames = _interopRequireDefault(require('classnames'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _jsxRuntime = require('react/jsx-runtime');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Preloader = /* #__PURE__ */React.forwardRef((props, ref) => {
  const { count } = props;
  const { items } = props;
  const { width } = props;
  const { height } = props;
  const { flexDirectionGeneral } = props;
  const { background } = props;
  const { mainStyles } = props;
  const { blur } = props;
  return /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
    className: 'swf-preloader',
    style: {
      flexDirection: flexDirectionGeneral,
      flexWrap: 'wrap',
    },
    ref,
    children: new Array(count).fill(null).map((el, i) =>
    /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
        className: (0, _classnames.default)({
          'mock-container': true,
          gray: background,
        }),
        style: {
          width,
          height,
          ...mainStyles,
        },
        children: [/* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
          className: 'light-container',
          children: /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
            className: 'light',
            style: {
              filter: 'blur('.concat(blur, ')'),
            },
          }),
        }), items.map((_ref, i) => {
          const { repeat } = _ref;
          const { width } = _ref;
          const { height } = _ref;
          const { styles } = _ref;
          const { itemStyles } = _ref;
          return /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
            style: { display: 'flex', ...itemStyles },
            children: new Array(repeat).fill(null).map((_, i) => {
              const style = styles ? styles[i] : {};
              return /* #__PURE__ */(0, _jsxRuntime.jsx)('div', {
                className: 'mock-row',
                style: {
                  width,
                  height,
                  ...style,
                },
              }, ''.concat(width, '-').concat(height, '-').concat(count, '-').concat(repeat, '-')
                .concat(i, '-preloader-mock-row'));
            }),
          }, ''.concat(width, '-').concat(height, '-').concat(count, '-').concat(repeat, '-')
            .concat(i, '-preloader-row-container'));
        })],
      }, ''.concat(width, '-').concat(height, '-').concat(count, '-').concat(i, '-preloader-mock-container'))),
  });
});
Preloader.defaultProps = {
  count: 0,
  items: [],
  width: 'auto',
  height: 'auto',
  flexDirectionGeneral: 'column',
  background: true,
  mainStyles: {},
  blur: '4rem',
};
Preloader.propTypes = {
  count: _propTypes.default.number,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    repeat: _propTypes.default.number,
    width: _propTypes.default.string,
    height: _propTypes.default.string,
    styles: _propTypes.default.arrayOf(_propTypes.default.object),
    itemStyles: _propTypes.default.object,
  })),
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  flexDirectionGeneral: _propTypes.default.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  background: _propTypes.default.bool,
  mainStyles: _propTypes.default.object,
  blur: _propTypes.default.string,
};
const _default = Preloader;
exports.default = _default;
