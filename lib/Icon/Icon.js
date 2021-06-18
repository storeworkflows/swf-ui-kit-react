"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("./constants");

var _utils = require("./utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Icon = function Icon(props) {
  var icon = props.icon,
      size = props.size,
      customSize = props.customSize,
      color = props.color,
      className = props.className,
      innerRef = props.innerRef,
      zeroSize = props.zeroSize,
      onClick = props.onClick;

  var getStyles = function getStyles() {
    var style = {};

    if (!zeroSize) {
      var finalSize = customSize ? customSize : _constants.SIZE[size];
      style.height = finalSize;
      style.width = finalSize;
    }

    if (color) style.color = color;
    return style;
  };

  var node = (0, _utils.generateSvg)(icon);

  if (!node) {
    console.error("Icon error: unregistered icon ".concat(icon));
    return null;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({
    ref: function ref(elm) {
      return innerRef.current = elm;
    }
  }, (0, _utils.getAttrs)(node.attributes)), {}, {
    style: getStyles(),
    className: className,
    onClick: onClick,
    children: _toConsumableArray(node.children).map(function (child, id) {
      var Tag = child.tagName,
          attributes = child.attributes;
      return /*#__PURE__*/(0, React.createElement)(Tag, _objectSpread(_objectSpread({}, (0, _utils.getAttrs)(attributes)), {}, {
        key: id,
        style: {
          fill: "currentColor"
        }
      }));
    })
  }));
};

Icon.defaultProps = {
  icon: "",
  size: 'md',
  color: "",
  className: {},
  innerRef: /*#__PURE__*/React.createRef(),
  onClick: function onClick() {
    return void 0;
  }
};
Icon.propTypes = {
  icon: _propTypes["default"].string.isRequired,
  size: _propTypes["default"].oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  customSize: _propTypes["default"].number,
  color: _propTypes["default"].string,
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  innerRef: _propTypes["default"].object,
  zeroSize: _propTypes["default"].bool,
  onClick: _propTypes["default"].func
};
var _default = Icon;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uL0ljb24uanMiXSwibmFtZXMiOlsiSWNvbiIsInByb3BzIiwiaWNvbiIsInNpemUiLCJjdXN0b21TaXplIiwiY29sb3IiLCJjbGFzc05hbWUiLCJpbm5lclJlZiIsInplcm9TaXplIiwib25DbGljayIsImdldFN0eWxlcyIsInN0eWxlIiwiZmluYWxTaXplIiwiU0laRSIsImhlaWdodCIsIndpZHRoIiwibm9kZSIsImNvbnNvbGUiLCJlcnJvciIsImVsbSIsImN1cnJlbnQiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImlkIiwiVGFnIiwidGFnTmFtZSIsImZpbGwiLCJkZWZhdWx0UHJvcHMiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvbmVPZiIsIm51bWJlciIsIm9uZU9mVHlwZSIsIm9iamVjdCIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ2RDLElBRGMsR0FFZUQsS0FGZixDQUNkQyxJQURjO0FBQUEsTUFDUkMsSUFEUSxHQUVlRixLQUZmLENBQ1JFLElBRFE7QUFBQSxNQUNGQyxVQURFLEdBRWVILEtBRmYsQ0FDRkcsVUFERTtBQUFBLE1BQ1VDLEtBRFYsR0FFZUosS0FGZixDQUNVSSxLQURWO0FBQUEsTUFDaUJDLFNBRGpCLEdBRWVMLEtBRmYsQ0FDaUJLLFNBRGpCO0FBQUEsTUFFaEJDLFFBRmdCLEdBRWVOLEtBRmYsQ0FFaEJNLFFBRmdCO0FBQUEsTUFFTkMsUUFGTSxHQUVlUCxLQUZmLENBRU5PLFFBRk07QUFBQSxNQUVJQyxPQUZKLEdBRWVSLEtBRmYsQ0FFSVEsT0FGSjs7QUFJdEIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixRQUFJQyxLQUFLLEdBQUcsRUFBWjs7QUFFQSxRQUFJLENBQUNILFFBQUwsRUFBZTtBQUNiLFVBQU1JLFNBQVMsR0FBSVIsVUFBRCxHQUFlQSxVQUFmLEdBQTRCUyxnQkFBS1YsSUFBTCxDQUE5QztBQUVBUSxNQUFBQSxLQUFLLENBQUNHLE1BQU4sR0FBZUYsU0FBZjtBQUNBRCxNQUFBQSxLQUFLLENBQUNJLEtBQU4sR0FBY0gsU0FBZDtBQUNEOztBQUVELFFBQUlQLEtBQUosRUFDRU0sS0FBSyxDQUFDTixLQUFOLEdBQWNBLEtBQWQ7QUFFRixXQUFPTSxLQUFQO0FBQ0QsR0FkRDs7QUFnQkEsTUFBSUssSUFBSSxHQUFHLHdCQUFZZCxJQUFaLENBQVg7O0FBRUEsTUFBSSxDQUFDYyxJQUFMLEVBQVc7QUFDVEMsSUFBQUEsT0FBTyxDQUFDQyxLQUFSLHlDQUErQ2hCLElBQS9DO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsc0JBQ007QUFDSSxJQUFBLEdBQUcsRUFBRSxhQUFBaUIsR0FBRztBQUFBLGFBQUlaLFFBQVEsQ0FBQ2EsT0FBVCxHQUFtQkQsR0FBdkI7QUFBQTtBQURaLEtBRVEscUJBQVNILElBQUksQ0FBQ0ssVUFBZCxDQUZSO0FBR0ksSUFBQSxLQUFLLEVBQUVYLFNBQVMsRUFIcEI7QUFJSSxJQUFBLFNBQVMsRUFBRUosU0FKZjtBQUtJLElBQUEsT0FBTyxFQUFFRyxPQUxiO0FBQUEsY0FPRyxtQkFBSU8sSUFBSSxDQUFDTSxRQUFULEVBQW1CQyxHQUFuQixDQUF1QixVQUFDQyxLQUFELEVBQVFDLEVBQVIsRUFBZTtBQUFBLFVBQ3JCQyxHQURxQixHQUNGRixLQURFLENBQzlCRyxPQUQ4QjtBQUFBLFVBQ2hCTixVQURnQixHQUNGRyxLQURFLENBQ2hCSCxVQURnQjtBQUVyQywwQkFBTyx5QkFBQyxHQUFELGtDQUFTLHFCQUFTQSxVQUFULENBQVQ7QUFBK0IsUUFBQSxHQUFHLEVBQUVJLEVBQXBDO0FBQXdDLFFBQUEsS0FBSyxFQUFFO0FBQUNHLFVBQUFBLElBQUksRUFBRTtBQUFQO0FBQS9DLFNBQVA7QUFDRCxLQUhBO0FBUEgsS0FETjtBQWNELENBekNEOztBQTJDQTVCLElBQUksQ0FBQzZCLFlBQUwsR0FBb0I7QUFDaEIzQixFQUFBQSxJQUFJLEVBQUUsRUFEVTtBQUVoQkMsRUFBQUEsSUFBSSxFQUFFLElBRlU7QUFHaEJFLEVBQUFBLEtBQUssRUFBRSxFQUhTO0FBSWhCQyxFQUFBQSxTQUFTLEVBQUUsRUFKSztBQUtoQkMsRUFBQUEsUUFBUSxlQUFFdUIsS0FBSyxDQUFDQyxTQUFOLEVBTE07QUFNaEJ0QixFQUFBQSxPQUFPLEVBQUU7QUFBQSxXQUFNLEtBQUssQ0FBWDtBQUFBO0FBTk8sQ0FBcEI7QUFTQVQsSUFBSSxDQUFDZ0MsU0FBTCxHQUFpQjtBQUNiOUIsRUFBQUEsSUFBSSxFQUFFOEIsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRFY7QUFFYi9CLEVBQUFBLElBQUksRUFBRTZCLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCLEtBQS9CLENBQWhCLENBRk87QUFHYi9CLEVBQUFBLFVBQVUsRUFBRTRCLHNCQUFVSSxNQUhUO0FBSWIvQixFQUFBQSxLQUFLLEVBQUUyQixzQkFBVUMsTUFKSjtBQUtiM0IsRUFBQUEsU0FBUyxFQUFFMEIsc0JBQVVLLFNBQVYsQ0FBb0IsQ0FBQ0wsc0JBQVVNLE1BQVgsRUFBbUJOLHNCQUFVQyxNQUE3QixDQUFwQixDQUxFO0FBTWIxQixFQUFBQSxRQUFRLEVBQUV5QixzQkFBVU0sTUFOUDtBQU9iOUIsRUFBQUEsUUFBUSxFQUFFd0Isc0JBQVVPLElBUFA7QUFRYjlCLEVBQUFBLE9BQU8sRUFBRXVCLHNCQUFVUTtBQVJOLENBQWpCO2VBV2V4QyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7U0laRX0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7Z2VuZXJhdGVTdmcsIGdldEF0dHJzfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuY29uc3QgSWNvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaWNvbiwgc2l6ZSwgY3VzdG9tU2l6ZSwgY29sb3IsIGNsYXNzTmFtZSxcclxuICAgICAgICBpbm5lclJlZiwgemVyb1NpemUsIG9uQ2xpY2t9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGdldFN0eWxlcyA9ICgpID0+IHtcclxuICAgIGxldCBzdHlsZSA9IHt9XHJcblxyXG4gICAgaWYgKCF6ZXJvU2l6ZSkge1xyXG4gICAgICBjb25zdCBmaW5hbFNpemUgPSAoY3VzdG9tU2l6ZSkgPyBjdXN0b21TaXplIDogU0laRVtzaXplXTtcclxuXHJcbiAgICAgIHN0eWxlLmhlaWdodCA9IGZpbmFsU2l6ZTtcclxuICAgICAgc3R5bGUud2lkdGggPSBmaW5hbFNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbG9yKVxyXG4gICAgICBzdHlsZS5jb2xvciA9IGNvbG9yXHJcblxyXG4gICAgcmV0dXJuIHN0eWxlO1xyXG4gIH1cclxuXHJcbiAgbGV0IG5vZGUgPSBnZW5lcmF0ZVN2ZyhpY29uKTtcclxuXHJcbiAgaWYgKCFub2RlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGBJY29uIGVycm9yOiB1bnJlZ2lzdGVyZWQgaWNvbiAke2ljb259YClcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgcmVmPXtlbG0gPT4gaW5uZXJSZWYuY3VycmVudCA9IGVsbX1cclxuICAgICAgICAgICAgey4uLmdldEF0dHJzKG5vZGUuYXR0cmlidXRlcyl9XHJcbiAgICAgICAgICAgIHN0eWxlPXtnZXRTdHlsZXMoKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1suLi5ub2RlLmNoaWxkcmVuXS5tYXAoKGNoaWxkLCBpZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7dGFnTmFtZTogVGFnLCBhdHRyaWJ1dGVzfSA9IGNoaWxkXHJcbiAgICAgICAgICAgIHJldHVybiA8VGFnIHsuLi5nZXRBdHRycyhhdHRyaWJ1dGVzKX0ga2V5PXtpZH0gc3R5bGU9e3tmaWxsOiBcImN1cnJlbnRDb2xvclwifX0vPlxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn1cclxuXHJcbkljb24uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaWNvbjogXCJcIixcclxuICAgIHNpemU6ICdtZCcsXHJcbiAgICBjb2xvcjogXCJcIixcclxuICAgIGNsYXNzTmFtZToge30sXHJcbiAgICBpbm5lclJlZjogUmVhY3QuY3JlYXRlUmVmKCksXHJcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkIDBcclxufVxyXG5cclxuSWNvbi5wcm9wVHlwZXMgPSB7XHJcbiAgICBpY29uOiBwcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBzaXplOiBwcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCcsICd4eGwnXSksXHJcbiAgICBjdXN0b21TaXplOiBwcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgY29sb3I6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjbGFzc05hbWU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5vYmplY3QsIHByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgIGlubmVyUmVmOiBwcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgemVyb1NpemU6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgb25DbGljazogcHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvblxyXG4iXX0=