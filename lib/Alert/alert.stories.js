Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Open = exports.Acknowledge = exports.Dismiss = exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _Alert = _interopRequireDefault(require('./Alert'));

const _tableCategories = require('../../.storybook/tableCategories');

const _propTypes = _interopRequireDefault(require('prop-types'));

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
  title: 'swf-ui-kit/Messages/Alert',
  component: _Alert.default,
  argTypes: {
    content: _tableCategories.TABLE_CATEGORIES.VALUE,
    header: _tableCategories.TABLE_CATEGORIES.VALUE,
    icon: _tableCategories.TABLE_CATEGORIES.VALUE,
    textLinkProps: _tableCategories.TABLE_CATEGORIES.VALUE,
    action: _tableCategories.TABLE_CATEGORIES.VALUE,
    color: _objectSpread(_objectSpread({}, _tableCategories.TABLE_CATEGORIES.STYLE), {}, {
      options: ['yellow', 'red', 'green', 'blue', 'grey', 'grey-blue'],
      control: {
        type: 'select',
      },
    }),
    delay: _tableCategories.TABLE_CATEGORIES.STATE,
    visible: _tableCategories.TABLE_CATEGORIES.STATE,
    expanded: _tableCategories.TABLE_CATEGORIES.STATE,
    manageExpanded: _tableCategories.TABLE_CATEGORIES.MANAGING,
    manageVisibility: _tableCategories.TABLE_CATEGORIES.MANAGING,
    manageButtonClick: _tableCategories.TABLE_CATEGORIES.MANAGING,
    onExpandAction: _tableCategories.TABLE_CATEGORIES.ACTION,
    onTextLinkClicked: _tableCategories.TABLE_CATEGORIES.ACTION,
    onButtonClick: _tableCategories.TABLE_CATEGORIES.ACTION,
    onCloseAction: _tableCategories.TABLE_CATEGORIES.ACTION,
  },
};
exports.default = _default;
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const Template = function Template(args) {
  return /* #__PURE__ */(0, _jsxRuntime.jsx)(_Alert.default, _objectSpread({}, args));
};

const Dismiss = Template.bind({});
exports.Dismiss = Dismiss;
Dismiss.args = {
  content: lorem,
};
const Acknowledge = Template.bind({});
exports.Acknowledge = Acknowledge;
Acknowledge.args = _objectSpread(_objectSpread({}, Dismiss.args), {}, {
  action: {
    type: 'acknowledge',
  },
  header: 'Header',
  color: 'red',
  verticalPositions: 'center',
});
const Open = Template.bind({});
exports.Open = Open;
Open.args = {
  content: 'Small content',
  action: {
    type: 'open',
  },
  header: 'Header',
  textLinkProps: {
    label: 'link',
    href: 'href',
    openWindows: true,
  },
  icon: 'alarm',
  color: 'green',
  verticalPositions: 'bottom',
  visible: false,
  delay: 2000,
  manageVisibility: true,
};
