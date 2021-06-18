"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test = exports.Standard = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Input/Dropdown',
  component: _Dropdown["default"],
  argTypes: {
    select: {
      defaultValue: 'single',
      description: "\"none\" | \"single\" | \"multi\"",
      table: {
        category: "Category",
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: '"single"'
        }
      },
      control: {
        type: "select",
        options: ["none", "single", "multi"]
      }
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], _objectSpread({}, args));
};

var Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  items: [{
    id: 1,
    label: "first",
    disabled: true,
    number: 7,
    icon: "alarm"
  }, {
    id: 2,
    label: "second",
    number: 100,
    icon: "alarm"
  }, {
    id: 3,
    label: "third"
  }, {
    id: 4,
    label: "fourth",
    subLabel: "sublabel"
  }, {
    id: 5,
    label: "first",
    disabled: true,
    number: 7,
    icon: "alarm"
  }, {
    id: 6,
    label: "second",
    number: 100,
    icon: "alarm"
  }, {
    id: 7,
    label: "third"
  }, {
    id: 8,
    label: "fourth",
    subLabel: "sublabel"
  }]
};

var Test = function Test(args) {
  var TestDropdown = function TestDropdown(props) {
    var _useState = (0, _react.useState)(100),
        _useState2 = _slicedToArray(_useState, 2),
        height = _useState2[0],
        setHeight = _useState2[1];

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        height: "".concat(height, "px"),
        border: "1px solid red"
      },
      onClick: function onClick() {
        return setHeight(height + 10);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown["default"], _objectSpread({}, args))
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TestDropdown, _objectSpread({}, args));
};

exports.Test = Test;
Test.args = _objectSpread({}, Standard.args);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ecm9wZG93bi9kcm9wZG93bi5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwiRHJvcGRvd24iLCJhcmdUeXBlcyIsInNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsImRlc2NyaXB0aW9uIiwidGFibGUiLCJjYXRlZ29yeSIsInR5cGUiLCJzdW1tYXJ5IiwiY29udHJvbCIsIm9wdGlvbnMiLCJUZW1wbGF0ZSIsImFyZ3MiLCJTdGFuZGFyZCIsImJpbmQiLCJpdGVtcyIsImlkIiwibGFiZWwiLCJkaXNhYmxlZCIsIm51bWJlciIsImljb24iLCJzdWJMYWJlbCIsIlRlc3QiLCJUZXN0RHJvcGRvd24iLCJwcm9wcyIsImhlaWdodCIsInNldEhlaWdodCIsImJvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFZTtBQUNYQSxFQUFBQSxLQUFLLEVBQUUsMkJBREk7QUFFWEMsRUFBQUEsU0FBUyxFQUFFQyxvQkFGQTtBQUdYQyxFQUFBQSxRQUFRLEVBQUU7QUFDTkMsSUFBQUEsTUFBTSxFQUFFO0FBQ0pDLE1BQUFBLFlBQVksRUFBRSxRQURWO0FBRUpDLE1BQUFBLFdBQVcscUNBRlA7QUFHSkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFFBQUFBLFFBQVEsRUFBRSxVQURQO0FBRUhDLFFBQUFBLElBQUksRUFBRTtBQUFFQyxVQUFBQSxPQUFPLEVBQUU7QUFBWCxTQUZIO0FBR0hMLFFBQUFBLFlBQVksRUFBRTtBQUFFSyxVQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUhYLE9BSEg7QUFRSkMsTUFBQUEsT0FBTyxFQUFFO0FBQ0xGLFFBQUFBLElBQUksRUFBRSxRQUREO0FBRUxHLFFBQUFBLE9BQU8sRUFBRSxDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLE9BQW5CO0FBRko7QUFSTDtBQURGO0FBSEMsQzs7O0FBcUJmLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQ7QUFBQSxzQkFBVSxxQkFBQyxvQkFBRCxvQkFBY0EsSUFBZCxFQUFWO0FBQUEsQ0FBakI7O0FBRU8sSUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWpCOztBQUNQRCxRQUFRLENBQUNELElBQVQsR0FBZ0I7QUFDWkcsRUFBQUEsS0FBSyxFQUFFLENBQ0g7QUFDSUMsSUFBQUEsRUFBRSxFQUFFLENBRFI7QUFFSUMsSUFBQUEsS0FBSyxFQUFFLE9BRlg7QUFHSUMsSUFBQUEsUUFBUSxFQUFFLElBSGQ7QUFJSUMsSUFBQUEsTUFBTSxFQUFFLENBSlo7QUFLSUMsSUFBQUEsSUFBSSxFQUFFO0FBTFYsR0FERyxFQVFIO0FBQ0lKLElBQUFBLEVBQUUsRUFBRSxDQURSO0FBRUlDLElBQUFBLEtBQUssRUFBRSxRQUZYO0FBR0lFLElBQUFBLE1BQU0sRUFBRSxHQUhaO0FBSUlDLElBQUFBLElBQUksRUFBRTtBQUpWLEdBUkcsRUFjSDtBQUNJSixJQUFBQSxFQUFFLEVBQUUsQ0FEUjtBQUVJQyxJQUFBQSxLQUFLLEVBQUU7QUFGWCxHQWRHLEVBa0JIO0FBQ0lELElBQUFBLEVBQUUsRUFBRSxDQURSO0FBRUlDLElBQUFBLEtBQUssRUFBRSxRQUZYO0FBR0lJLElBQUFBLFFBQVEsRUFBRTtBQUhkLEdBbEJHLEVBdUJIO0FBQ0lMLElBQUFBLEVBQUUsRUFBRSxDQURSO0FBRUlDLElBQUFBLEtBQUssRUFBRSxPQUZYO0FBR0lDLElBQUFBLFFBQVEsRUFBRSxJQUhkO0FBSUlDLElBQUFBLE1BQU0sRUFBRSxDQUpaO0FBS0lDLElBQUFBLElBQUksRUFBRTtBQUxWLEdBdkJHLEVBOEJIO0FBQ0lKLElBQUFBLEVBQUUsRUFBRSxDQURSO0FBRUlDLElBQUFBLEtBQUssRUFBRSxRQUZYO0FBR0lFLElBQUFBLE1BQU0sRUFBRSxHQUhaO0FBSUlDLElBQUFBLElBQUksRUFBRTtBQUpWLEdBOUJHLEVBb0NIO0FBQ0lKLElBQUFBLEVBQUUsRUFBRSxDQURSO0FBRUlDLElBQUFBLEtBQUssRUFBRTtBQUZYLEdBcENHLEVBd0NIO0FBQ0lELElBQUFBLEVBQUUsRUFBRSxDQURSO0FBRUlDLElBQUFBLEtBQUssRUFBRSxRQUZYO0FBR0lJLElBQUFBLFFBQVEsRUFBRTtBQUhkLEdBeENHO0FBREssQ0FBaEI7O0FBaURPLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNWLElBQUQsRUFBVTtBQUMxQixNQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQSxvQkFDQSxxQkFBUyxHQUFULENBREE7QUFBQTtBQUFBLFFBQ3JCQyxNQURxQjtBQUFBLFFBQ2JDLFNBRGE7O0FBRzVCLHdCQUFPO0FBQUssTUFBQSxLQUFLLEVBQUU7QUFBQ0QsUUFBQUEsTUFBTSxZQUFLQSxNQUFMLE9BQVA7QUFBd0JFLFFBQUFBLE1BQU0sRUFBRTtBQUFoQyxPQUFaO0FBQ0ssTUFBQSxPQUFPLEVBQUU7QUFBQSxlQUFNRCxTQUFTLENBQUNELE1BQU0sR0FBQyxFQUFSLENBQWY7QUFBQSxPQURkO0FBQUEsNkJBRUgscUJBQUMsb0JBQUQsb0JBQ1FiLElBRFI7QUFGRyxNQUFQO0FBT0gsR0FWRDs7QUFXQSxzQkFBTyxxQkFBQyxZQUFELG9CQUFrQkEsSUFBbEIsRUFBUDtBQUNILENBYk07OztBQWNQVSxJQUFJLENBQUNWLElBQUwscUJBQ09DLFFBQVEsQ0FBQ0QsSUFEaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBEcm9wZG93biB9IGZyb20gJy4vRHJvcGRvd24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgdGl0bGU6ICdzd2YtdWkta2l0L0lucHV0L0Ryb3Bkb3duJyxcclxuICAgIGNvbXBvbmVudDogRHJvcGRvd24sXHJcbiAgICBhcmdUeXBlczoge1xyXG4gICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6ICdzaW5nbGUnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYFwibm9uZVwiIHwgXCJzaW5nbGVcIiB8IFwibXVsdGlcImAsXHJcbiAgICAgICAgICAgIHRhYmxlOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJDYXRlZ29yeVwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogeyBzdW1tYXJ5OiAnc3RyaW5nJyB9LFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiB7IHN1bW1hcnk6ICdcInNpbmdsZVwiJyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250cm9sOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW1wibm9uZVwiLCBcInNpbmdsZVwiLCBcIm11bHRpXCJdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuY29uc3QgVGVtcGxhdGUgPSAoYXJncykgPT4gPERyb3Bkb3duIHsuLi5hcmdzfS8+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0YW5kYXJkID0gVGVtcGxhdGUuYmluZCh7fSk7XHJcblN0YW5kYXJkLmFyZ3MgPSB7XHJcbiAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcImZpcnN0XCIsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICBudW1iZXI6IDcsXHJcbiAgICAgICAgICAgIGljb246IFwiYWxhcm1cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgbGFiZWw6IFwic2Vjb25kXCIsXHJcbiAgICAgICAgICAgIG51bWJlcjogMTAwLFxyXG4gICAgICAgICAgICBpY29uOiBcImFsYXJtXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcInRoaXJkXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICBsYWJlbDogXCJmb3VydGhcIixcclxuICAgICAgICAgICAgc3ViTGFiZWw6IFwic3VibGFiZWxcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNSxcclxuICAgICAgICAgICAgbGFiZWw6IFwiZmlyc3RcIixcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIG51bWJlcjogNyxcclxuICAgICAgICAgICAgaWNvbjogXCJhbGFybVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA2LFxyXG4gICAgICAgICAgICBsYWJlbDogXCJzZWNvbmRcIixcclxuICAgICAgICAgICAgbnVtYmVyOiAxMDAsXHJcbiAgICAgICAgICAgIGljb246IFwiYWxhcm1cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNyxcclxuICAgICAgICAgICAgbGFiZWw6IFwidGhpcmRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcImZvdXJ0aFwiLFxyXG4gICAgICAgICAgICBzdWJMYWJlbDogXCJzdWJsYWJlbFwiXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGVzdCA9IChhcmdzKSA9PiB7XHJcbiAgICBjb25zdCBUZXN0RHJvcGRvd24gPSAocHJvcHMpID0+IHtcclxuICAgICAgICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUoMTAwKVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17e2hlaWdodDogYCR7aGVpZ2h0fXB4YCwgYm9yZGVyOiBcIjFweCBzb2xpZCByZWRcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SGVpZ2h0KGhlaWdodCsxMCl9PlxyXG4gICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgIHsuLi5hcmdzfVxyXG5cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxuICAgIHJldHVybiA8VGVzdERyb3Bkb3duIHsuLi5hcmdzfS8+XHJcbn1cclxuVGVzdC5hcmdzID0ge1xyXG4gICAgLi4uU3RhbmRhcmQuYXJnc1xyXG59Il19