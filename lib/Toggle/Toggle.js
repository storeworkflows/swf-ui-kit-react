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

const _jsxRuntime = require('react/jsx-runtime');
const _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) {
  let _i = arr && (typeof Symbol !== 'undefined' && arr[Symbol.iterator] || arr['@@iterator']); if (_i == null) return; const _arr = []; let _n = true; let _d = false; let _s; let
    _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return != null) _i.return(); } finally { if (_d) throw _e; } } return _arr;
}

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const _addStyles = function _addStyles(customStyle) {
  const styles = {};
  customStyle && _constants.SWF_TOGGLE.AVAILABLE_CUSTOM_STYLES.forEach((styleName) => {
    if (customStyle[styleName] !== undefined) styles['--'.concat(styleName)] = customStyle[styleName];
  });
  return styles;
};

const Toggle = /* #__PURE__ */React.memo(/* #__PURE__ */React.forwardRef((props, ref) => {
  const { disabled } = props;
  const { size } = props;
  const { customStyle } = props;
  const { className } = props;
  const { manageChecked } = props;
  const { checked } = props;
  const { visible } = props;
  const { onClick } = props;

  const _useState = (0, React.useState)(checked);
  const _useState2 = _slicedToArray(_useState, 2);
  const isChecked = _useState2[0];
  const setIsChecked = _useState2[1];

  const onToggleClick = function onToggleClick() {
    if (manageChecked) {
      onClick({
        value: checked,
      });
    } else {
      setIsChecked(!isChecked);
      onClick({
        value: !isChecked,
      });
    }
  };

  const additionalStyle = _addStyles(customStyle);

  const toggleClasses = (0, _classnames.default)(className, 'toggle-'.concat(size), {
    switch: true,
    disabled,
  });
  return visible && /* #__PURE__ */(0, _jsxRuntime.jsxs)('label', {
    className: toggleClasses,
    style: additionalStyle,
    ref,
    children: [/* #__PURE__ */(0, _jsxRuntime.jsx)('input', {
      type: 'checkbox',
      checked: manageChecked ? checked : isChecked,
      disabled,
      onChange: function onChange() {
        return !disabled && onToggleClick();
      },
    }), /* #__PURE__ */(0, _jsxRuntime.jsx)('span', {
      className: 'slider',
    })],
  });
}));
Toggle.defaultProps = {
  size: 'md',
  onClick: function onClick() {
    return void 0;
  },
  className: '',
  visible: true,
  checked: false,
};
Toggle.propTypes = {
  /**
   * Available to change only when manageChecked=true
   */
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  manageChecked: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['sm', 'md']),

  /**
   * Available custom styles: "width",   "height",   "circle-border-size", "border-size", "circle-gap",
   "active-border-color", "active-background-color",
   "border-color", "background-color",
   "circle-border-color", "circle-background", "hover-circle-background"
   */
  customStyle: _propTypes.default.object,
  onClick: _propTypes.default.func,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  visible: _propTypes.default.bool,
};
const _default = Toggle;
exports.default = _default;
