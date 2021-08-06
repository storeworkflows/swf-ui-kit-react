Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Standard = exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _Icon = _interopRequireDefault(require('./Icon'));

const _jsxRuntime = require('react/jsx-runtime');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach((key) => { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach((key) => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value, enumerable: true, configurable: true, writable: true,
    });
  } else { obj[key] = value; } return obj;
}

const _default = {
  title: 'swf-ui-kit/DataVisualisation/Icon',
  component: _Icon.default,
};
exports.default = _default;

const Template = function Template(args) {
  return /* #__PURE__ */(0, _jsxRuntime.jsx)(_Icon.default, _objectSpread({}, args));
};

const Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  icon: 'lightning-charge-fill',
};
