Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.WithIcon = exports.WithMember = exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _Pill = _interopRequireDefault(require('./Pill'));

const _jsxRuntime = require('react/jsx-runtime');
const _tableCategories = require('../../.storybook/tableCategories');

const _utils = require('../utils');

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
  title: 'swf-ui-kit/DataVisualisation/Pill',
  component: _Pill.default,
  argTypes: {
    icon: _tableCategories.TABLE_CATEGORIES.VALUE,
    member: _tableCategories.TABLE_CATEGORIES.VALUE,
    label: _tableCategories.TABLE_CATEGORIES.VALUE,
    canDismiss: _tableCategories.TABLE_CATEGORIES.STATE,
    disabled: _tableCategories.TABLE_CATEGORIES.STATE,
    clickable: _tableCategories.TABLE_CATEGORIES.STATE,
    outline: _tableCategories.TABLE_CATEGORIES.STYLE,
    size: _tableCategories.TABLE_CATEGORIES.STYLE,
    classNames: _tableCategories.TABLE_CATEGORIES.STYLE,
    color: _tableCategories.TABLE_CATEGORIES.STYLE,
    deleteIcon: _tableCategories.TABLE_CATEGORIES.STYLE,
    onDelete: _tableCategories.TABLE_CATEGORIES.ACTION,
    onClick: _tableCategories.TABLE_CATEGORIES.ACTION,
  },
  args: {
    label: 'label',
  },
};
exports.default = _default;

const Template = function Template(args) {
  return /* #__PURE__ */(0, _jsxRuntime.jsx)(_Pill.default, _objectSpread({}, args));
};

const WithMember = Template.bind({});
exports.WithMember = WithMember;
WithMember.args = {
  member: {
    name: 'Name Surname',
    title: 'title',
    id: '1',
  },
};
const WithIcon = Template.bind({});
exports.WithIcon = WithIcon;
WithIcon.args = {
  icon: 'alarm',
  canDismiss: true,
  color: 'primary',
  size: 'sm',
  onDelete: _utils.noop,
};
