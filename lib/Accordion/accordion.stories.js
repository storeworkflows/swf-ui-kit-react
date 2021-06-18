"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Accordion = _interopRequireDefault(require("./Accordion"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Controls/Accordion/Accordion',
  component: _Accordion["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Accordion["default"], _objectSpread(_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion["default"].Item, {
      label: "label 1"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Accordion["default"].Item, {
      label: "label 2",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: "First div"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: "Second div"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Accordion["default"].Item, {
      label: "label 3",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion["default"].Header, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          children: "Header1"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: "Hello2"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion["default"].Item, {
      label: "label 4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion["default"].Header, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          children: "Header"
        })
      })
    })]
  }));
};

var Default = Template.bind({});
exports.Default = Default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb24vYWNjb3JkaW9uLnN0b3JpZXMuanMiXSwibmFtZXMiOlsidGl0bGUiLCJjb21wb25lbnQiLCJBY2NvcmRpb24iLCJUZW1wbGF0ZSIsImFyZ3MiLCJEZWZhdWx0IiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7ZUFFZTtBQUNYQSxFQUFBQSxLQUFLLEVBQUUseUNBREk7QUFFWEMsRUFBQUEsU0FBUyxFQUFFQztBQUZBLEM7OztBQU1mLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQ7QUFBQSxzQkFBVSxzQkFBQyxxQkFBRCxrQ0FBZUEsSUFBZjtBQUFBLDRCQUNuQixxQkFBQyxxQkFBRCxDQUFXLElBQVg7QUFBZ0IsTUFBQSxLQUFLLEVBQUU7QUFBdkIsTUFEbUIsZUFFbkIsc0JBQUMscUJBQUQsQ0FBVyxJQUFYO0FBQ0ksTUFBQSxLQUFLLEVBQUUsU0FEWDtBQUFBLDhCQUVJO0FBQUE7QUFBQSxRQUZKLGVBR0k7QUFBQTtBQUFBLFFBSEo7QUFBQSxNQUZtQixlQU9uQixzQkFBQyxxQkFBRCxDQUFXLElBQVg7QUFBZ0IsTUFBQSxLQUFLLEVBQUUsU0FBdkI7QUFBQSw4QkFDSSxxQkFBQyxxQkFBRCxDQUFXLE1BQVg7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFESixRQURKLGVBSUk7QUFBQTtBQUFBLFFBSko7QUFBQSxNQVBtQixlQWFuQixxQkFBQyxxQkFBRCxDQUFXLElBQVg7QUFBZ0IsTUFBQSxLQUFLLEVBQUUsU0FBdkI7QUFBQSw2QkFDSSxxQkFBQyxxQkFBRCxDQUFXLE1BQVg7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFESjtBQURKLE1BYm1CO0FBQUEsS0FBVjtBQUFBLENBQWpCOztBQW9CTyxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBaEIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgQWNjb3JkaW9ufSBmcm9tICcuL0FjY29yZGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICB0aXRsZTogJ3N3Zi11aS1raXQvQ29udHJvbHMvQWNjb3JkaW9uL0FjY29yZGlvbicsXHJcbiAgICBjb21wb25lbnQ6IEFjY29yZGlvbixcclxufTtcclxuXHJcblxyXG5jb25zdCBUZW1wbGF0ZSA9IChhcmdzKSA9PiA8QWNjb3JkaW9uIHsuLi5hcmdzfT5cclxuICAgICAgICA8QWNjb3JkaW9uLkl0ZW0gbGFiZWw9e1wibGFiZWwgMVwifS8+XHJcbiAgICAgICAgPEFjY29yZGlvbi5JdGVtXHJcbiAgICAgICAgICAgIGxhYmVsPXtcImxhYmVsIDJcIn0+XHJcbiAgICAgICAgICAgIDxkaXY+Rmlyc3QgZGl2PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+U2Vjb25kIGRpdjwvZGl2PlxyXG4gICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XHJcbiAgICAgICAgPEFjY29yZGlvbi5JdGVtIGxhYmVsPXtcImxhYmVsIDNcIn0gPlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5IZWFkZXIxPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb24uSGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2PkhlbGxvMjwvZGl2PlxyXG4gICAgICAgIDwvQWNjb3JkaW9uLkl0ZW0+XHJcbiAgICAgICAgPEFjY29yZGlvbi5JdGVtIGxhYmVsPXtcImxhYmVsIDRcIn0+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb24uSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkhlYWRlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uLkhlYWRlcj5cclxuICAgICAgICA8L0FjY29yZGlvbi5JdGVtPlxyXG48L0FjY29yZGlvbj47XHJcblxyXG5leHBvcnQgY29uc3QgRGVmYXVsdCA9IFRlbXBsYXRlLmJpbmQoe30pO1xyXG5cclxuXHJcblxyXG4iXX0=