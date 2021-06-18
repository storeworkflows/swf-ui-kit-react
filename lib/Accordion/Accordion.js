"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _findByType = _interopRequireWildcard(require("../utils/findByType"));

var _AccordionItem = _interopRequireDefault(require("./AccordionItem"));

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Accordion = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      selectMany = props.selectMany,
      onItemClicked = props.onItemClicked,
      className = props.className;

  var _useState = (0, React.useState)("-1"),
      _useState2 = _slicedToArray(_useState, 2),
      selectedItemKey = _useState2[0],
      setSelectedItemKey = _useState2[1];

  var itemSelected = (0, React.useCallback)(function (_ref) {
    var key = _ref.key;
    var updatedKey = selectedItemKey === key ? "-1" : key;
    !selectMany && setSelectedItemKey(updatedKey);
    onItemClicked({
      key: key
    });
  }, [onItemClicked, selectedItemKey, selectMany]);

  var renderItems = function renderItems() {
    var items = (0, _findByType["default"])(children, "Item");
    if (!items || !items.length) return null;
    return items.map(function (el, i) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AccordionItem["default"], _objectSpread({
        opened: el.key === selectedItemKey,
        manageOpened: !selectMany,
        onSelected: itemSelected,
        isLastItem: i === items.length - 1,
        isFirstItem: i === 0,
        id: el.key
      }, el.props), el.key);
    });
  };

  var classes = (0, _classnames["default"])(className, "accordion-container");
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: classes,
    ref: ref,
    children: renderItems()
  });
}));
Accordion.Item = (0, _findByType.createSubComponent)("Item");
Accordion.Header = (0, _findByType.createSubComponent)("Header");
Accordion.defaultProps = {
  selectMany: true,
  onItemClicked: function onItemClicked() {
    return void 0;
  },
  className: ""
};
Accordion.propTypes = {
  selectMany: _propTypes["default"].bool,
  onItemClicked: _propTypes["default"].func,
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string])
};
var _default = Accordion;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb24vQWNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsIlJlYWN0IiwibWVtbyIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImNoaWxkcmVuIiwic2VsZWN0TWFueSIsIm9uSXRlbUNsaWNrZWQiLCJjbGFzc05hbWUiLCJzZWxlY3RlZEl0ZW1LZXkiLCJzZXRTZWxlY3RlZEl0ZW1LZXkiLCJpdGVtU2VsZWN0ZWQiLCJrZXkiLCJ1cGRhdGVkS2V5IiwicmVuZGVySXRlbXMiLCJpdGVtcyIsImxlbmd0aCIsIm1hcCIsImVsIiwiaSIsImNsYXNzZXMiLCJJdGVtIiwiSGVhZGVyIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsImZ1bmMiLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxnQkFBR0MsS0FBSyxDQUFDQyxJQUFOLGVBQVdELEtBQUssQ0FBQ0UsVUFBTixDQUFpQixVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFBQSxNQUVuREMsUUFGbUQsR0FFREYsS0FGQyxDQUVuREUsUUFGbUQ7QUFBQSxNQUV6Q0MsVUFGeUMsR0FFREgsS0FGQyxDQUV6Q0csVUFGeUM7QUFBQSxNQUU3QkMsYUFGNkIsR0FFREosS0FGQyxDQUU3QkksYUFGNkI7QUFBQSxNQUVkQyxTQUZjLEdBRURMLEtBRkMsQ0FFZEssU0FGYzs7QUFBQSxrQkFHWixvQkFBUyxJQUFULENBSFk7QUFBQTtBQUFBLE1BR25EQyxlQUhtRDtBQUFBLE1BR2xDQyxrQkFIa0M7O0FBSzFELE1BQU1DLFlBQVksR0FBRyx1QkFBWSxnQkFBVztBQUFBLFFBQVRDLEdBQVMsUUFBVEEsR0FBUztBQUN4QyxRQUFJQyxVQUFVLEdBQUlKLGVBQWUsS0FBS0csR0FBckIsR0FBNEIsSUFBNUIsR0FBbUNBLEdBQXBEO0FBQ0EsS0FBQ04sVUFBRCxJQUFlSSxrQkFBa0IsQ0FBQ0csVUFBRCxDQUFqQztBQUVBTixJQUFBQSxhQUFhLENBQUM7QUFBQ0ssTUFBQUEsR0FBRyxFQUFIQTtBQUFELEtBQUQsQ0FBYjtBQUNILEdBTG9CLEVBS2xCLENBQUNMLGFBQUQsRUFBZ0JFLGVBQWhCLEVBQWlDSCxVQUFqQyxDQUxrQixDQUFyQjs7QUFPQSxNQUFNUSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFFBQU1DLEtBQUssR0FBRyw0QkFBV1YsUUFBWCxFQUFxQixNQUFyQixDQUFkO0FBRUEsUUFBSSxDQUFDVSxLQUFELElBQVUsQ0FBQ0EsS0FBSyxDQUFDQyxNQUFyQixFQUNJLE9BQU8sSUFBUDtBQUVKLFdBQU9ELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNDLEVBQUQsRUFBS0MsQ0FBTDtBQUFBLDBCQUFXLHFCQUFDLHlCQUFEO0FBRWhCLFFBQUEsTUFBTSxFQUFFRCxFQUFFLENBQUNOLEdBQUgsS0FBV0gsZUFGSDtBQUdoQixRQUFBLFlBQVksRUFBRSxDQUFDSCxVQUhDO0FBSWhCLFFBQUEsVUFBVSxFQUFFSyxZQUpJO0FBS2hCLFFBQUEsVUFBVSxFQUFFUSxDQUFDLEtBQU1KLEtBQUssQ0FBQ0MsTUFBTixHQUFlLENBTGxCO0FBTWhCLFFBQUEsV0FBVyxFQUFFRyxDQUFDLEtBQUssQ0FOSDtBQU9oQixRQUFBLEVBQUUsRUFBRUQsRUFBRSxDQUFDTjtBQVBTLFNBUVpNLEVBQUUsQ0FBQ2YsS0FSUyxHQUNYZSxFQUFFLENBQUNOLEdBRFEsQ0FBWDtBQUFBLEtBQVYsQ0FBUDtBQVdILEdBakJEOztBQW1CQSxNQUFNUSxPQUFPLEdBQUcsNEJBQ1paLFNBRFksRUFFWixxQkFGWSxDQUFoQjtBQUtBLHNCQUFPO0FBQUssSUFBQSxTQUFTLEVBQUVZLE9BQWhCO0FBQXlCLElBQUEsR0FBRyxFQUFFaEIsR0FBOUI7QUFBQSxjQUNNVSxXQUFXO0FBRGpCLElBQVA7QUFHSCxDQXZDNEIsQ0FBWCxDQUFsQjtBQXlDQWYsU0FBUyxDQUFDc0IsSUFBVixHQUFpQixvQ0FBbUIsTUFBbkIsQ0FBakI7QUFDQXRCLFNBQVMsQ0FBQ3VCLE1BQVYsR0FBbUIsb0NBQW1CLFFBQW5CLENBQW5CO0FBRUF2QixTQUFTLENBQUN3QixZQUFWLEdBQXlCO0FBQ3JCakIsRUFBQUEsVUFBVSxFQUFFLElBRFM7QUFFckJDLEVBQUFBLGFBQWEsRUFBRTtBQUFBLFdBQU0sS0FBSyxDQUFYO0FBQUEsR0FGTTtBQUdyQkMsRUFBQUEsU0FBUyxFQUFFO0FBSFUsQ0FBekI7QUFNQVQsU0FBUyxDQUFDeUIsU0FBVixHQUFzQjtBQUNsQmxCLEVBQUFBLFVBQVUsRUFBRWtCLHNCQUFVQyxJQURKO0FBRWxCbEIsRUFBQUEsYUFBYSxFQUFFaUIsc0JBQVVFLElBRlA7QUFHbEJsQixFQUFBQSxTQUFTLEVBQUVnQixzQkFBVUcsU0FBVixDQUFvQixDQUFDSCxzQkFBVUksTUFBWCxFQUFtQkosc0JBQVVLLE1BQTdCLENBQXBCO0FBSE8sQ0FBdEI7ZUFNZTlCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgZmluZEJ5VHlwZSwge2NyZWF0ZVN1YkNvbXBvbmVudH0gZnJvbSBcIi4uL3V0aWxzL2ZpbmRCeVR5cGVcIjtcclxuaW1wb3J0IEFjY29yZGlvbkl0ZW0gZnJvbSBcIi4vQWNjb3JkaW9uSXRlbVwiO1xyXG5pbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBpc0VxdWFsIGZyb20gXCJyZWFjdC1mYXN0LWNvbXBhcmVcIjtcclxuXHJcbmNvbnN0IEFjY29yZGlvbiA9IFJlYWN0Lm1lbW8oUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtjaGlsZHJlbiwgc2VsZWN0TWFueSwgb25JdGVtQ2xpY2tlZCwgY2xhc3NOYW1lfSA9IHByb3BzO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkSXRlbUtleSwgc2V0U2VsZWN0ZWRJdGVtS2V5XSA9IHVzZVN0YXRlKFwiLTFcIilcclxuXHJcbiAgICBjb25zdCBpdGVtU2VsZWN0ZWQgPSB1c2VDYWxsYmFjaygoe2tleX0pID0+IHtcclxuICAgICAgICBsZXQgdXBkYXRlZEtleSA9IChzZWxlY3RlZEl0ZW1LZXkgPT09IGtleSkgPyBcIi0xXCIgOiBrZXk7XHJcbiAgICAgICAgIXNlbGVjdE1hbnkgJiYgc2V0U2VsZWN0ZWRJdGVtS2V5KHVwZGF0ZWRLZXkpXHJcblxyXG4gICAgICAgIG9uSXRlbUNsaWNrZWQoe2tleX0pO1xyXG4gICAgfSwgW29uSXRlbUNsaWNrZWQsIHNlbGVjdGVkSXRlbUtleSwgc2VsZWN0TWFueV0pXHJcblxyXG4gICAgY29uc3QgcmVuZGVySXRlbXMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBcIkl0ZW1cIik7XHJcblxyXG4gICAgICAgIGlmICghaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtcy5tYXAoKGVsLCBpKSA9PiA8QWNjb3JkaW9uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17ZWwua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5lZD17ZWwua2V5ID09PSBzZWxlY3RlZEl0ZW1LZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgbWFuYWdlT3BlbmVkPXshc2VsZWN0TWFueX1cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGVkPXtpdGVtU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNMYXN0SXRlbT17aSA9PT0gKGl0ZW1zLmxlbmd0aCAtIDEpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzRmlyc3RJdGVtPXtpID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtlbC5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmVsLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICBcImFjY29yZGlvbi1jb250YWluZXJcIlxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30gcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICAgICAge3JlbmRlckl0ZW1zKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG59KSk7XHJcblxyXG5BY2NvcmRpb24uSXRlbSA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkl0ZW1cIik7XHJcbkFjY29yZGlvbi5IZWFkZXIgPSBjcmVhdGVTdWJDb21wb25lbnQoXCJIZWFkZXJcIik7XHJcblxyXG5BY2NvcmRpb24uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc2VsZWN0TWFueTogdHJ1ZSxcclxuICAgIG9uSXRlbUNsaWNrZWQ6ICgpID0+IHZvaWQgMCxcclxuICAgIGNsYXNzTmFtZTogXCJcIlxyXG59XHJcblxyXG5BY2NvcmRpb24ucHJvcFR5cGVzID0ge1xyXG4gICAgc2VsZWN0TWFueTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvbkl0ZW1DbGlja2VkOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLm9iamVjdCwgcHJvcFR5cGVzLnN0cmluZ10pLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247Il19