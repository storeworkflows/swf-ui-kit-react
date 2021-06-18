"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _classnames = _interopRequireDefault(require("classnames"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var InfoMessage = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var content = props.content,
      delay = props.delay,
      status = props.status,
      icon = props.icon,
      className = props.className,
      iconSize = props.iconSize;

  var _useState = (0, React.useState)(content),
      _useState2 = _slicedToArray(_useState, 2),
      contentValue = _useState2[0],
      setContentValue = _useState2[1];

  var timer = null;

  var setDelay = function setDelay() {
    if (delay) timer = setTimeout(function () {
      return setContentValue(undefined);
    }, delay);
  };

  (0, React.useEffect)(function () {
    setContentValue(content);
    setDelay();
  }, [content]);
  (0, React.useEffect)(function () {
    setDelay();
    return clearTimeout(timer);
  }, []);
  var messageClasses = (0, _classnames["default"])(className, status, "info-message");
  return contentValue ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: messageClasses,
    ref: ref,
    children: [icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
      className: "input-message-icon",
      icon: icon,
      customSize: iconSize
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "input-message-content",
      children: contentValue
    })]
  }) : null;
});
InfoMessage.defaultProps = {
  status: "red",
  className: "",
  iconSize: 16
};
InfoMessage.propTypes = {
  status: _propTypes["default"].oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
  content: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  iconSize: _propTypes["default"].number,
  delay: _propTypes["default"].number
};

var _default = /*#__PURE__*/React.memo(InfoMessage);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbmZvTWVzc2FnZS9JbmZvTWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJJbmZvTWVzc2FnZSIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiY29udGVudCIsImRlbGF5Iiwic3RhdHVzIiwiaWNvbiIsImNsYXNzTmFtZSIsImljb25TaXplIiwiY29udGVudFZhbHVlIiwic2V0Q29udGVudFZhbHVlIiwidGltZXIiLCJzZXREZWxheSIsInNldFRpbWVvdXQiLCJ1bmRlZmluZWQiLCJjbGVhclRpbWVvdXQiLCJtZXNzYWdlQ2xhc3NlcyIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwic3RyaW5nIiwib25lT2ZUeXBlIiwib2JqZWN0IiwibnVtYmVyIiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFNQSxXQUFXLGdCQUFHQyxLQUFLLENBQUNDLFVBQU4sQ0FBaUIsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQUEsTUFDMUNDLE9BRDBDLEdBQ1dGLEtBRFgsQ0FDMUNFLE9BRDBDO0FBQUEsTUFDakNDLEtBRGlDLEdBQ1dILEtBRFgsQ0FDakNHLEtBRGlDO0FBQUEsTUFDMUJDLE1BRDBCLEdBQ1dKLEtBRFgsQ0FDMUJJLE1BRDBCO0FBQUEsTUFDbEJDLElBRGtCLEdBQ1dMLEtBRFgsQ0FDbEJLLElBRGtCO0FBQUEsTUFDWkMsU0FEWSxHQUNXTixLQURYLENBQ1pNLFNBRFk7QUFBQSxNQUNEQyxRQURDLEdBQ1dQLEtBRFgsQ0FDRE8sUUFEQzs7QUFBQSxrQkFFVCxvQkFBU0wsT0FBVCxDQUZTO0FBQUE7QUFBQSxNQUUxQ00sWUFGMEM7QUFBQSxNQUU1QkMsZUFGNEI7O0FBR2pELE1BQUlDLEtBQUssR0FBRyxJQUFaOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkIsUUFBSVIsS0FBSixFQUNJTyxLQUFLLEdBQUdFLFVBQVUsQ0FBQztBQUFBLGFBQU1ILGVBQWUsQ0FBQ0ksU0FBRCxDQUFyQjtBQUFBLEtBQUQsRUFBbUNWLEtBQW5DLENBQWxCO0FBQ1AsR0FIRDs7QUFLQSx1QkFBVSxZQUFJO0FBQ1ZNLElBQUFBLGVBQWUsQ0FBQ1AsT0FBRCxDQUFmO0FBQ0FTLElBQUFBLFFBQVE7QUFDWCxHQUhELEVBR0csQ0FBQ1QsT0FBRCxDQUhIO0FBS0EsdUJBQVUsWUFBSTtBQUNWUyxJQUFBQSxRQUFRO0FBQ1IsV0FBUUcsWUFBWSxDQUFDSixLQUFELENBQXBCO0FBQ0gsR0FIRCxFQUdHLEVBSEg7QUFNQSxNQUFNSyxjQUFjLEdBQUcsNEJBQ25CVCxTQURtQixFQUVuQkYsTUFGbUIsRUFHbkIsY0FIbUIsQ0FBdkI7QUFNQSxTQUNJSSxZQUFZLGdCQUVSO0FBQUssSUFBQSxTQUFTLEVBQUVPLGNBQWhCO0FBQWdDLElBQUEsR0FBRyxFQUFFZCxHQUFyQztBQUFBLGVBQ0tJLElBQUksaUJBQUkscUJBQUMsZ0JBQUQ7QUFBTSxNQUFBLFNBQVMsRUFBQyxvQkFBaEI7QUFBcUMsTUFBQSxJQUFJLEVBQUVBLElBQTNDO0FBQWlELE1BQUEsVUFBVSxFQUFFRTtBQUE3RCxNQURiLGVBRUk7QUFBTSxNQUFBLFNBQVMsRUFBQyx1QkFBaEI7QUFBQSxnQkFBeUNDO0FBQXpDLE1BRko7QUFBQSxJQUZRLEdBTU4sSUFQVjtBQVVILENBckNtQixDQUFwQjtBQXdDQVgsV0FBVyxDQUFDbUIsWUFBWixHQUEyQjtBQUN2QlosRUFBQUEsTUFBTSxFQUFFLEtBRGU7QUFFdkJFLEVBQUFBLFNBQVMsRUFBRSxFQUZZO0FBR3ZCQyxFQUFBQSxRQUFRLEVBQUU7QUFIYSxDQUEzQjtBQU1BVixXQUFXLENBQUNvQixTQUFaLEdBQXdCO0FBQ3BCYixFQUFBQSxNQUFNLEVBQUVjLHNCQUFVQyxLQUFWLENBQWdCLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBa0IsT0FBbEIsRUFBMkIsTUFBM0IsRUFBbUMsTUFBbkMsRUFBMkMsV0FBM0MsQ0FBaEIsQ0FEWTtBQUVwQmpCLEVBQUFBLE9BQU8sRUFBRWdCLHNCQUFVRSxNQUZDO0FBR3BCZixFQUFBQSxJQUFJLEVBQUVhLHNCQUFVRSxNQUhJO0FBSXBCZCxFQUFBQSxTQUFTLEVBQUVXLHNCQUFVSSxTQUFWLENBQW9CLENBQUNKLHNCQUFVSyxNQUFYLEVBQW1CTCxzQkFBVUcsTUFBN0IsQ0FBcEIsQ0FKUztBQUtwQmIsRUFBQUEsUUFBUSxFQUFFVyxzQkFBVUssTUFMQTtBQU1wQnBCLEVBQUFBLEtBQUssRUFBRWMsc0JBQVVNO0FBTkcsQ0FBeEI7OzRCQVNlekIsS0FBSyxDQUFDMEIsSUFBTixDQUFXM0IsV0FBWCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBJbmZvTWVzc2FnZSA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICAgIGNvbnN0IHtjb250ZW50LCBkZWxheSwgc3RhdHVzLCBpY29uLCBjbGFzc05hbWUsIGljb25TaXplfSA9IHByb3BzO1xyXG4gICAgY29uc3QgW2NvbnRlbnRWYWx1ZSwgc2V0Q29udGVudFZhbHVlXSA9IHVzZVN0YXRlKGNvbnRlbnQpO1xyXG4gICAgbGV0IHRpbWVyID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCBzZXREZWxheSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZGVsYXkpXHJcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBzZXRDb250ZW50VmFsdWUodW5kZWZpbmVkKSwgZGVsYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldENvbnRlbnRWYWx1ZShjb250ZW50KTtcclxuICAgICAgICBzZXREZWxheSgpO1xyXG4gICAgfSwgW2NvbnRlbnRdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldERlbGF5KCk7XHJcbiAgICAgICAgcmV0dXJuICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2VDbGFzc2VzID0gY2xhc3NuYW1lcyhcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIFwiaW5mby1tZXNzYWdlXCJcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBjb250ZW50VmFsdWVcclxuICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWVzc2FnZUNsYXNzZXN9IHJlZj17cmVmfT5cclxuICAgICAgICAgICAgICAgIHtpY29uICYmIDxJY29uIGNsYXNzTmFtZT1cImlucHV0LW1lc3NhZ2UtaWNvblwiIGljb249e2ljb259IGN1c3RvbVNpemU9e2ljb25TaXplfS8+fVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtbWVzc2FnZS1jb250ZW50XCI+e2NvbnRlbnRWYWx1ZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgICk7XHJcblxyXG59KTtcclxuXHJcblxyXG5JbmZvTWVzc2FnZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzdGF0dXM6IFwicmVkXCIsXHJcbiAgICBjbGFzc05hbWU6IFwiXCIsXHJcbiAgICBpY29uU2l6ZTogMTZcclxufVxyXG5cclxuSW5mb01lc3NhZ2UucHJvcFR5cGVzID0ge1xyXG4gICAgc3RhdHVzOiBQcm9wVHlwZXMub25lT2YoW1wieWVsbG93XCIsIFwicmVkXCIsIFwiZ3JlZW5cIiwgXCJibHVlXCIsIFwiZ3JleVwiLCBcImdyZXktYmx1ZVwiXSksXHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLm9iamVjdCwgcHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gICAgaWNvblNpemU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBkZWxheTogcHJvcFR5cGVzLm51bWJlclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEluZm9NZXNzYWdlKSJdfQ==