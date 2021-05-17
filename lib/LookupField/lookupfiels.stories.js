"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _LookupField = _interopRequireDefault(require("./LookupField"));

var _msw = require("msw");

var _attachment = require("../Attachment/attachment.stories");

var _storybookAddonMock = _interopRequireDefault(require("storybook-addon-mock"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Input/LookupField',
  component: _LookupField["default"],
  // parameters: {
  //     fetch: {
  //         json: payload
  //
  //     }
  // },
  decorators: [_storybookAddonMock["default"]]
};
exports["default"] = _default;
var payload = {
  JavaScript: 3390991,
  'C++': 44974,
  TypeScript: 15530,
  CoffeeScript: 12253,
  Python: 9383,
  C: 5341,
  Shell: 5115,
  HTML: 3420,
  CSS: 3171,
  Makefile: 189
};

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_LookupField["default"], _objectSpread({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: "LookupField"
}; // Default.mockData =
//     [{
//         url: 'http://localhost:6006/api/now/graphql',
//         method: 'POST',
//         status: 200,
//         response: {
//             data: 'This is a Mock Response!',
//         },
//     }]