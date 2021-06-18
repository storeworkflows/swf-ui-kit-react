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

  var _onKeyDown = props.onKeyDown,
      onChange = props.onChange,
      autofocus = props.autofocus,
      readonly = props.readonly,
      label = props.label,
      className = props.className,
      resize = props.resize,
      name = props.name,
      placeholder = props.placeholder,
      onPaste = props.onPaste;

  var onChangeAction = function onChangeAction(event) {
    setValue(event.target.value);
    onChange(event);

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
    textAreaRef.current && (0, _autosize["default"])(textAreaRef.current);
  }, [value, textAreaRef]);
  (0, React.useEffect)(function () {
    setValue(props.value);

    if (textAreaRef.current) {
      (0, _autosize["default"])(textAreaRef.current);
      textAreaRef.current.value = props.value;
    }
  }, [props.value, textAreaRef]);

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
        onPaste: onPaste,
        onChange: function onChange(e) {
          return !readonly && onChangeAction(e);
        },
        onKeyDown: function onKeyDown(e) {
          return !readonly && _onKeyDown(e);
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
  onPaste: function onPaste() {
    return void 0;
  },
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
  onPaste: _propTypes["default"].func,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0QXJlYS9UZXh0QXJlYS5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsInByb3BzIiwidGV4dEFyZWFSZWYiLCJ2YWx1ZSIsInNldFZhbHVlIiwicGFyZW50SGVpZ2h0Iiwic2V0UGFyZW50SGVpZ2h0IiwiZm9jdXNlZCIsInNldEZvY3VzZWQiLCJvbktleURvd24iLCJvbkNoYW5nZSIsImF1dG9mb2N1cyIsInJlYWRvbmx5IiwibGFiZWwiLCJjbGFzc05hbWUiLCJyZXNpemUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJvblBhc3RlIiwib25DaGFuZ2VBY3Rpb24iLCJldmVudCIsInRhcmdldCIsImN1cnJlbnQiLCJvbkZvY3VzIiwib25CbHVyIiwiZm9jdXMiLCJfaGFzTGFiZWwiLCJCb29sZWFuIiwiZWxtIiwiaW5uZXJSZWYiLCJtaW5IZWlnaHQiLCJlIiwiZGVmYXVsdFByb3BzIiwiYXV0b3Jlc2l6ZSIsIlJlYWN0IiwiY3JlYXRlUmVmIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImZ1bmMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFFeEIsTUFBTUMsV0FBVyxHQUFHLGtCQUFPLElBQVAsQ0FBcEI7O0FBRndCLGtCQUlFLG9CQUFTRCxLQUFLLENBQUNFLEtBQWYsQ0FKRjtBQUFBO0FBQUEsTUFJakJBLEtBSmlCO0FBQUEsTUFJVkMsUUFKVTs7QUFBQSxtQkFLZ0Isb0JBQVMsTUFBVCxDQUxoQjtBQUFBO0FBQUEsTUFLakJDLFlBTGlCO0FBQUEsTUFLSEMsZUFMRzs7QUFBQSxtQkFNTSxvQkFBUyxLQUFULENBTk47QUFBQTtBQUFBLE1BTWpCQyxPQU5pQjtBQUFBLE1BTVJDLFVBTlE7O0FBQUEsTUFTcEJDLFVBVG9CLEdBV3BC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QUFVRSxNQVhOO0FBWWpCVCxFQUFBQSxRQUFRLEVBQUVPLHNCQUFVSSxNQVpIO0FBYWpCaEIsRUFBQUEsTUFBTSxFQUFFWSxzQkFBVUcsSUFiRDtBQWNqQjNCLEVBQUFBLFFBQVEsRUFBRXdCLHNCQUFVQztBQWRILENBQXJCO2VBaUJlckMsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBhdXRvc2l6ZSBmcm9tIFwiYXV0b3NpemUvZGlzdC9hdXRvc2l6ZVwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUZXh0QXJlYSA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHRleHRBcmVhUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUocHJvcHMudmFsdWUpO1xyXG4gICAgY29uc3QgW3BhcmVudEhlaWdodCwgc2V0UGFyZW50SGVpZ2h0XSA9IHVzZVN0YXRlKFwiYXV0b1wiKTtcclxuICAgIGNvbnN0IFtmb2N1c2VkLCBzZXRGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgb25LZXlEb3duLCBvbkNoYW5nZSwgYXV0b2ZvY3VzLCByZWFkb25seSwgbGFiZWwsIGNsYXNzTmFtZSwgcmVzaXplLFxyXG4gICAgICAgIG5hbWUsIHBsYWNlaG9sZGVyLCBvblBhc3RlXHJcbiAgICB9ID0gcHJvcHNcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUFjdGlvbiA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgb25DaGFuZ2UoZXZlbnQpXHJcbiAgICAgICAgaWYgKHRleHRBcmVhUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgYXV0b3NpemUodGV4dEFyZWFSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uRm9jdXMgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRGb2N1c2VkKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQmx1ciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldEZvY3VzZWQoZmFsc2UpO1xyXG4gICAgICAgIHByb3BzLm9uQmx1cihldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoYXV0b2ZvY3VzICYmIHRleHRBcmVhUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdGV4dEFyZWFSZWYuY3VycmVudC5mb2N1cygpXHJcbiAgICAgICAgICAgIGF1dG9zaXplKHRleHRBcmVhUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdGV4dEFyZWFSZWYuY3VycmVudCAmJiBhdXRvc2l6ZSh0ZXh0QXJlYVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFt2YWx1ZSwgdGV4dEFyZWFSZWZdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUocHJvcHMudmFsdWUpXHJcbiAgICAgICAgaWYodGV4dEFyZWFSZWYuY3VycmVudCl7XHJcbiAgICAgICAgICAgIGF1dG9zaXplKHRleHRBcmVhUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICB0ZXh0QXJlYVJlZi5jdXJyZW50LnZhbHVlID0gcHJvcHMudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLnZhbHVlLCB0ZXh0QXJlYVJlZl0pXHJcblxyXG5cclxuICAgIGNvbnN0IF9oYXNMYWJlbCA9IEJvb2xlYW4obGFiZWwpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgcmVmPXtlbG0gPT4gcHJvcHMuaW5uZXJSZWYuY3VycmVudCA9IGVsbX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHBhcmVudEhlaWdodFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge19oYXNMYWJlbCAmJiA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIFwiLS1tb3ZlZFwiOiBmb2N1c2VkIHx8IChwcm9wcy52YWx1ZSB8fCB2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgXCItLWZvY3VzZWRcIjogZm9jdXNlZFxyXG4gICAgICAgICAgICAgICAgfSl9PntsYWJlbH08L2xhYmVsPn1cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1jb250cm9sXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc05hbWVdOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlc2l6ZVwiOiByZXNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVhZG9ubHlcIjogcmVhZG9ubHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlXCI6ICFyZWFkb25seVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17KGVsbSkgPT4gdGV4dEFyZWFSZWYuY3VycmVudCA9IGVsbX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25QYXN0ZT17b25QYXN0ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiAhcmVhZG9ubHkgJiYgb25DaGFuZ2VBY3Rpb24oZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtlID0+ICFyZWFkb25seSAmJiBvbktleURvd24oZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiAhcmVhZG9ubHkgJiYgb25Gb2N1cyhlKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2UgPT4gIXJlYWRvbmx5ICYmIG9uQmx1cihlKX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17IV9oYXNMYWJlbCA/IHBsYWNlaG9sZGVyIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufTtcclxuXHJcblRleHRBcmVhLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGF1dG9yZXNpemU6IGZhbHNlLFxyXG4gICAgYXV0b2ZvY3VzOiBmYWxzZSxcclxuICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgIG9uUGFzdGU6ICgpID0+IHZvaWQgMCxcclxuICAgIG9uQ2hhbmdlOiAoKSA9PiB2b2lkIDAsXHJcbiAgICBvbktleURvd246ICgpID0+IHZvaWQgMCxcclxuICAgIG9uQmx1cjogKCkgPT4gdm9pZCAwLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgcmVzaXplOiB0cnVlLFxyXG4gICAgbGFiZWw6IFwiXCIsXHJcbiAgICBwbGFjZWhvbGRlcjogXCJcIixcclxuICAgIGlubmVyUmVmOiBSZWFjdC5jcmVhdGVSZWYoKSxcclxuICAgIHJlYWRvbmx5OiBmYWxzZVxyXG59XHJcblxyXG5UZXh0QXJlYS5wcm9wVHlwZXMgPSB7XHJcbiAgICBhdXRvcmVzaXplOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHZhbHVlOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBuYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25QYXN0ZTogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkNoYW5nZTogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbktleURvd246IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYXV0b2ZvY3VzOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlc2l6ZTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBwbGFjZWhvbGRlcjogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGlubmVyUmVmOiBwcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgb25CbHVyOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIHJlYWRvbmx5OiBwcm9wVHlwZXMuYm9vbFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0QXJlYVxyXG4iXX0=