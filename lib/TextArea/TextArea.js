"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _autosize = _interopRequireDefault(require("autosize/dist/autosize"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TextArea = function TextArea(props) {
  var _classnames;

  var textAreaRef = (0, React.useRef)(null);

  var _useState = (0, React.useState)(props.value),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, React.useState)("auto"),
      _useState4 = _slicedToArray(_useState3, 2),
      parentHeight = _useState4[0],
      setParentHeight = _useState4[1];

  var _useState5 = (0, React.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      focused = _useState6[0],
      setFocused = _useState6[1];

  var onKeyDown = props.onKeyDown,
      autofocus = props.autofocus,
      readonly = props.readonly,
      label = props.label,
      className = props.className,
      resize = props.resize,
      name = props.name,
      placeholder = props.placeholder;

  var _onChange = function onChange(event) {
    setValue(event.target.value);
    onKeyDown(event);

    if (textAreaRef.current) {
      (0, _autosize["default"])(textAreaRef.current);
    }
  };

  var _onFocus = function onFocus(event) {
    setFocused(true);
  };

  var _onBlur = function onBlur(event) {
    setFocused(false);
    props.onBlur(event);
  };

  (0, React.useEffect)(function () {
    if (autofocus && textAreaRef.current) {
      textAreaRef.current.focus();
      (0, _autosize["default"])(textAreaRef.current);
    }
  }, []);
  (0, React.useEffect)(function () {
    return autofocus && textAreaRef.current && (0, _autosize["default"])(textAreaRef.current);
  });
  (0, React.useEffect)(function () {
    return setValue(props.value);
  }, [props.value]);

  var _hasLabel = Boolean(label);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      ref: function ref(elm) {
        return props.innerRef.current = elm;
      },
      className: "form-group",
      style: {
        minHeight: parentHeight
      },
      children: [_hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        htmlFor: "name",
        className: (0, _classnames2["default"])({
          "--moved": focused || props.value || value,
          "--focused": focused
        }),
        children: label
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
        className: (0, _classnames2["default"])((_classnames = {
          "form-control": true
        }, _defineProperty(_classnames, className, true), _defineProperty(_classnames, "resize", resize), _defineProperty(_classnames, "readonly", readonly), _defineProperty(_classnames, "active", !readonly), _classnames)),
        ref: function ref(elm) {
          return textAreaRef.current = elm;
        },
        name: name,
        readOnly: readonly,
        value: value,
        onChange: function onChange(e) {
          return !readonly && _onChange(e);
        },
        onKeyDown: function onKeyDown(e) {
          return !readonly && _onChange(e);
        },
        onFocus: function onFocus(e) {
          return !readonly && _onFocus(e);
        },
        onBlur: function onBlur(e) {
          return !readonly && _onBlur(e);
        },
        placeholder: !_hasLabel ? placeholder : ""
      })]
    })
  });
};

TextArea.defaultProps = {
  autoresize: false,
  autofocus: false,
  className: "",
  onChange: function onChange() {
    return void 0;
  },
  onKeyDown: function onKeyDown() {
    return void 0;
  },
  onBlur: function onBlur() {
    return void 0;
  },
  name: "",
  value: "",
  resize: true,
  label: "",
  placeholder: "",
  innerRef: /*#__PURE__*/React.createRef(),
  readonly: false
};
TextArea.propTypes = {
  autoresize: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  label: _propTypes["default"].string,
  name: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  className: _propTypes["default"].string,
  autofocus: _propTypes["default"].bool,
  resize: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  innerRef: _propTypes["default"].object,
  onBlur: _propTypes["default"].func,
  readonly: _propTypes["default"].bool
};
var _default = TextArea;
exports["default"] = _default;