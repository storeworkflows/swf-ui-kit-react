"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithHeader = exports.Default = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _AccordionItem = _interopRequireDefault(require("./AccordionItem"));

var _Accordion = _interopRequireDefault(require("../Accordion/Accordion"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Controls/Accordion/Item',
  component: _AccordionItem["default"],
  argTypes: {
    isLastItem: {
      table: {
        disable: true
      }
    },
    isFirstItem: {
      table: {
        disable: true
      }
    }
  }
}; //const Template =

exports["default"] = _default;

var Default = function Default(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AccordionItem["default"], _objectSpread(_objectSpread({}, args), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: "AccordionItem content"
    })
  }));
};

exports.Default = Default;
Default.args = {
  label: "example label"
};

var WithHeader = function WithHeader(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_AccordionItem["default"], _objectSpread(_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion["default"].Header, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: "Example of header"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: "AccordionItem content"
    })]
  }));
};

exports.WithHeader = WithHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb24vYWNjb3JkaW9uaXRlbS5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwiQWNjb3JkaW9uSXRlbSIsImFyZ1R5cGVzIiwiaXNMYXN0SXRlbSIsInRhYmxlIiwiZGlzYWJsZSIsImlzRmlyc3RJdGVtIiwiRGVmYXVsdCIsImFyZ3MiLCJsYWJlbCIsIldpdGhIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O2VBRWU7QUFDWEEsRUFBQUEsS0FBSyxFQUFFLG9DQURJO0FBRVhDLEVBQUFBLFNBQVMsRUFBRUMseUJBRkE7QUFHWEMsRUFBQUEsUUFBUSxFQUFFO0FBQ05DLElBQUFBLFVBQVUsRUFBQztBQUNQQyxNQUFBQSxLQUFLLEVBQUM7QUFDRkMsUUFBQUEsT0FBTyxFQUFDO0FBRE47QUFEQyxLQURMO0FBTU5DLElBQUFBLFdBQVcsRUFBQztBQUNSRixNQUFBQSxLQUFLLEVBQUM7QUFDRkMsUUFBQUEsT0FBTyxFQUFDO0FBRE47QUFERTtBQU5OO0FBSEMsQyxFQWtCZjs7OztBQUVPLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLElBQUQ7QUFBQSxzQkFBVSxxQkFBQyx5QkFBRCxrQ0FBbUJBLElBQW5CO0FBQUEsMkJBQzdCO0FBQUE7QUFBQTtBQUQ2QixLQUFWO0FBQUEsQ0FBaEI7OztBQUdQRCxPQUFPLENBQUNDLElBQVIsR0FBZTtBQUNYQyxFQUFBQSxLQUFLLEVBQUU7QUFESSxDQUFmOztBQUtPLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNGLElBQUQ7QUFBQSxzQkFBVSxzQkFBQyx5QkFBRCxrQ0FBbUJBLElBQW5CO0FBQUEsNEJBQ2hDLHFCQUFDLHFCQUFELENBQVcsTUFBWDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQURKLE1BRGdDLGVBSWhDO0FBQUE7QUFBQSxNQUpnQztBQUFBLEtBQVY7QUFBQSxDQUFuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7ZGVmYXVsdCBhcyBBY2NvcmRpb25JdGVtfSBmcm9tICcuL0FjY29yZGlvbkl0ZW0nXHJcbmltcG9ydCB7ZGVmYXVsdCBhcyBBY2NvcmRpb259IGZyb20gJy4uL0FjY29yZGlvbi9BY2NvcmRpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICB0aXRsZTogJ3N3Zi11aS1raXQvQ29udHJvbHMvQWNjb3JkaW9uL0l0ZW0nLFxyXG4gICAgY29tcG9uZW50OiBBY2NvcmRpb25JdGVtLFxyXG4gICAgYXJnVHlwZXM6IHtcclxuICAgICAgICBpc0xhc3RJdGVtOntcclxuICAgICAgICAgICAgdGFibGU6e1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZTp0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzRmlyc3RJdGVtOntcclxuICAgICAgICAgICAgdGFibGU6e1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZTp0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuLy9jb25zdCBUZW1wbGF0ZSA9XHJcblxyXG5leHBvcnQgY29uc3QgRGVmYXVsdCA9IChhcmdzKSA9PiA8QWNjb3JkaW9uSXRlbSB7Li4uYXJnc30+XHJcbiAgICA8ZGl2PkFjY29yZGlvbkl0ZW0gY29udGVudDwvZGl2PlxyXG48L0FjY29yZGlvbkl0ZW0+O1xyXG5EZWZhdWx0LmFyZ3MgPSB7XHJcbiAgICBsYWJlbDogXCJleGFtcGxlIGxhYmVsXCIsXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV2l0aEhlYWRlciA9IChhcmdzKSA9PiA8QWNjb3JkaW9uSXRlbSB7Li4uYXJnc30+XHJcbiAgICA8QWNjb3JkaW9uLkhlYWRlcj5cclxuICAgICAgICA8ZGl2PkV4YW1wbGUgb2YgaGVhZGVyPC9kaXY+XHJcbiAgICA8L0FjY29yZGlvbi5IZWFkZXI+XHJcbiAgICA8ZGl2PkFjY29yZGlvbkl0ZW0gY29udGVudDwvZGl2PlxyXG48L0FjY29yZGlvbkl0ZW0+O1xyXG4iXX0=