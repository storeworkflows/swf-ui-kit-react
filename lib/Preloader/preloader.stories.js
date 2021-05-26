"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Preloader = _interopRequireDefault(require("./Preloader"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Containers/Preloader',
  component: _Preloader["default"],
  argTypes: {
    background: {
      control: {
        type: 'boolean'
      }
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Preloader["default"], _objectSpread({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  count: 1,
  items: [{
    width: "100%",
    height: "0.8rem",
    repeat: 3,
    styles: [{
      width: "3.75rem",
      height: "1.2rem"
    }, {
      width: "7.5rem",
      height: "1.2rem",
      marginLeft: "auto"
    }, {
      width: "1.2rem",
      height: "1.2rem",
      minWidth: "1.2rem",
      borderRadius: "0.3rem"
    }]
  }, {
    width: "70%",
    height: "1.7rem",
    repeat: 1
  }, {
    width: "90%",
    height: "0.8rem",
    repeat: 2,
    styles: [{
      width: "1.1rem",
      height: "1.1rem",
      borderRadius: "50%"
    }, {
      width: "3rem",
      margin: "6px 0 0 0"
    }]
  }, {
    width: "4rem",
    height: "0.8rem",
    repeat: 2,
    styles: [{
      margin: "2px"
    }, {
      margin: "2px"
    }]
  }, {
    width: "100%",
    height: "2rem",
    repeat: 2,
    styles: [{
      width: "2rem",
      height: "2rem",
      borderRadius: "50%"
    }, {
      width: "7rem",
      height: "1.2rem",
      marginTop: "10px"
    }]
  }],
  height: "11rem",
  width: "100%",
  flexDirectionGeneral: "row",
  blur: "3rem"
};