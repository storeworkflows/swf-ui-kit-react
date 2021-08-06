Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Standard = exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _Toggle = _interopRequireDefault(require('./Toggle'));

const _jsxRuntime = require('react/jsx-runtime');
const _tableCategories = require('../../.storybook/tableCategories');

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
  title: 'swf-ui-kit/Input/Toggle',
  component: _Toggle.default,
  argTypes: {
    checked: _tableCategories.TABLE_CATEGORIES.STATE,
    disabled: _tableCategories.TABLE_CATEGORIES.STATE,
    manageChecked: _tableCategories.TABLE_CATEGORIES.MANAGING,
    size: _tableCategories.TABLE_CATEGORIES.STYLE,
    customStyle: _tableCategories.TABLE_CATEGORIES.STYLE,
    onClick: _tableCategories.TABLE_CATEGORIES.ACTION,
  },
};
exports.default = _default;

const Template = function Template(args) {
  return /* #__PURE__ */(0, _jsxRuntime.jsx)(_Toggle.default, _objectSpread({}, args));
};

const Standard = Template.bind({});
exports.Standard = Standard;
