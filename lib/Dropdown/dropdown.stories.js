function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Test = exports.Standard = exports.default = void 0;

const _react = _interopRequireWildcard(require('react'));

const _Dropdown = _interopRequireDefault(require('./Dropdown'));

const _jsxRuntime = require('react/jsx-runtime');
const _index = require('../index');

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
  title: 'swf-ui-kit/Input/Dropdown',
  component: _Dropdown.default,
  argTypes: {
    select: {
      defaultValue: 'single',
      description: '"none" | "single" | "multi"',
      table: {
        category: 'Category',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '"single"',
        },
      },
      control: {
        type: 'select',
        options: ['none', 'single', 'multi'],
      },
    },
  },
};
exports.default = _default;
const dropdownItems = [{
  id: 1,
  label: 'first',
  disabled: true,
  number: 7,
  icon: 'alarm',
}, {
  id: 2,
  label: 'second',
  number: 100,
  icon: 'alarm',
}, {
  id: 3,
  label: 'third',
}, {
  id: 4,
  label: 'fourth',
  subLabel: 'sublabel',
}, {
  id: 5,
  label: 'first',
  disabled: true,
  number: 7,
  icon: 'alarm',
}, {
  id: 6,
  label: 'second',
  number: 100,
  icon: 'alarm',
}, {
  id: 7,
  label: 'third',
}, {
  id: 8,
  label: 'fourth',
  subLabel: 'sublabel',
}];

const Template = function Template(args) {
  return /* #__PURE__ */(0, _jsxRuntime.jsx)(_Dropdown.default, _objectSpread({}, args));
};

const Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  items: dropdownItems,
};

const Test = function Test(args) {
  const TestDropdown = function TestDropdown(props) {
    const _useState = (0, _react.useState)(100);
    const _useState2 = _slicedToArray(_useState, 2);
    const height = _useState2[0];
    const setHeight = _useState2[1];

    const _useState3 = (0, _react.useState)([]);
    const _useState4 = _slicedToArray(_useState3, 2);
    const items = _useState4[0];
    const setItems = _useState4[1];

    return /* #__PURE__ */(0, _jsxRuntime.jsxs)('div', {
      style: {
        height: ''.concat(height, 'px'),
        border: '1px solid red',
      },
      onClick: function onClick() {
        return setHeight(height + 10);
      },
      children: [/* #__PURE__ */(0, _jsxRuntime.jsx)(_Dropdown.default, _objectSpread(_objectSpread({}, args), {}, {
        items,
      })), /* #__PURE__ */(0, _jsxRuntime.jsx)(_index.Button, {
        label: 'Get Items',
        onClick: function onClick() {
          return setItems(dropdownItems);
        },
      })],
    });
  };

  return /* #__PURE__ */(0, _jsxRuntime.jsx)(TestDropdown, _objectSpread({}, args));
};

exports.Test = Test;
