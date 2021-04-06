"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icons = _interopRequireDefault(require("./icons"));

var _constants = require("./constants");

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Icon = /*#__PURE__*/function (_React$Component) {
  _inherits(Icon, _React$Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "getStyles",
    value: function getStyles() {
      var _this$props = this.props,
          color = _this$props.color,
          size = _this$props.size,
          customSize = _this$props.customSize;
      var style = {};
      var finalSize = customSize ? customSize : _constants.SIZE[size];
      style.height = finalSize;
      style.width = finalSize;
      if (color) style.color = color;
      return style;
    }
  }, {
    key: "generateSvg",
    value: function generateSvg(icon) {
      var wrapper = document.createElement("span");
      wrapper.innerHTML = _icons["default"][icon];
      return wrapper.children[0];
    }
  }, {
    key: "getAttrs",
    value: function getAttrs(attrs) {
      var props = {};

      for (var i = 0; i < attrs.length; i++) {
        var curProps = attrs.item(i);
        var name = curProps.name;
        if (curProps.name === "class") name = "className";
        if (curProps.name === "fill-rule") name = "fillRule";
        if (curProps.name === "fillrule") name = "fillRule";
        props[name] = curProps.value;
      }

      return props;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var node = this.generateSvg(this.props.icon);

      if (!node) {
        console.error("Icon error: unregistered icon ".concat(this.props.icon));
        return null;
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({
        ref: function ref(elm) {
          return _this.props.innerRef.current = elm;
        }
      }, this.getAttrs(node.attributes)), {}, {
        style: this.getStyles(),
        className: this.props.className,
        children: _toConsumableArray(node.children).map(function (child, id) {
          return /*#__PURE__*/(0, React.createElement)("path", _objectSpread(_objectSpread({}, _this.getAttrs(child.attributes)), {}, {
            key: id
          }));
        })
      }));
    }
  }]);

  return Icon;
}(React.Component);

Icon.defaultProps = {
  icon: "",
  size: 'md',
  color: "",
  className: {},
  innerRef: /*#__PURE__*/React.createRef()
};
Icon.propTypes = {
  icon: _propTypes["default"].string.isRequired,
  size: _propTypes["default"].oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  customSize: _propTypes["default"].number,
  color: _propTypes["default"].string,
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  innerRef: _propTypes["default"].object
};
var _default = Icon;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uL0ljb24uanMiXSwibmFtZXMiOlsiSWNvbiIsInByb3BzIiwiY29sb3IiLCJzaXplIiwiY3VzdG9tU2l6ZSIsInN0eWxlIiwiZmluYWxTaXplIiwiU0laRSIsImhlaWdodCIsIndpZHRoIiwiaWNvbiIsIndyYXBwZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJpY29ucyIsImNoaWxkcmVuIiwiYXR0cnMiLCJpIiwibGVuZ3RoIiwiY3VyUHJvcHMiLCJpdGVtIiwibmFtZSIsInZhbHVlIiwibm9kZSIsImdlbmVyYXRlU3ZnIiwiY29uc29sZSIsImVycm9yIiwiZWxtIiwiaW5uZXJSZWYiLCJjdXJyZW50IiwiZ2V0QXR0cnMiLCJhdHRyaWJ1dGVzIiwiZ2V0U3R5bGVzIiwiY2xhc3NOYW1lIiwibWFwIiwiY2hpbGQiLCJpZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiY3JlYXRlUmVmIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9uZU9mIiwibnVtYmVyIiwib25lT2ZUeXBlIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEk7Ozs7Ozs7Ozs7Ozs7V0FFSixxQkFBVztBQUFBLHdCQUtMLEtBQUtDLEtBTEE7QUFBQSxVQUVQQyxLQUZPLGVBRVBBLEtBRk87QUFBQSxVQUdQQyxJQUhPLGVBR1BBLElBSE87QUFBQSxVQUlQQyxVQUpPLGVBSVBBLFVBSk87QUFPVCxVQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLFVBQUlDLFNBQVMsR0FBSUYsVUFBRCxHQUFlQSxVQUFmLEdBQTRCRyxnQkFBS0osSUFBTCxDQUE1QztBQUVBRSxNQUFBQSxLQUFLLENBQUNHLE1BQU4sR0FBZUYsU0FBZjtBQUNBRCxNQUFBQSxLQUFLLENB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RUFBd0IsSUFBeEIsRUFBOEIsS0FBOUIsQ0FBaEIsQ0FGUztBQUdmekMsRUFBQUEsVUFBVSxFQUFFc0Msc0JBQVVJLE1BSFA7QUFJZjVDLEVBQUFBLEtBQUssRUFBRXdDLHNCQUFVQyxNQUpGO0FBS2ZULEVBQUFBLFNBQVMsRUFBRVEsc0JBQVVLLFNBQVYsQ0FBb0IsQ0FBQ0wsc0JBQVVNLE1BQVgsRUFBbUJOLHNCQUFVQyxNQUE3QixDQUFwQixDQUxJO0FBTWZkLEVBQUFBLFFBQVEsRUFBRWEsc0JBQVVNO0FBTkwsQ0FBakI7ZUFTZWhELEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuaW1wb3J0IGljb25zIGZyb20gXCIuL2ljb25zXCI7XHJcbmltcG9ydCB7U0laRX0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5jbGFzcyBJY29uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgZ2V0U3R5bGVzKCl7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNvbG9yLFxyXG4gICAgICBzaXplLFxyXG4gICAgICBjdXN0b21TaXplXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBsZXQgc3R5bGUgPSB7fVxyXG4gICAgbGV0IGZpbmFsU2l6ZSA9IChjdXN0b21TaXplKSA/IGN1c3RvbVNpemUgOiBTSVpFW3NpemVdO1xyXG5cclxuICAgIHN0eWxlLmhlaWdodCA9IGZpbmFsU2l6ZTtcclxuICAgIHN0eWxlLndpZHRoID0gZmluYWxTaXplO1xyXG5cclxuICAgIGlmKGNvbG9yKVxyXG4gICAgICBzdHlsZS5jb2xvciA9IGNvbG9yO1xyXG5cclxuICAgIHJldHVybiBzdHlsZTtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlU3ZnKGljb24pe1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgd3JhcHBlci5pbm5lckhUTUwgPSBpY29uc1tpY29uXTtcclxuICAgIHJldHVybiB3cmFwcGVyLmNoaWxkcmVuWzBdO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXR0cnMoYXR0cnMpe1xyXG4gICAgbGV0IHByb3BzID0ge307XHJcbiAgICBmb3IobGV0IGk9MDsgaTxhdHRycy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGxldCBjdXJQcm9wcyA9IGF0dHJzLml0ZW0oaSk7XHJcbiAgICAgIGxldCBuYW1lID0gY3VyUHJvcHMubmFtZTtcclxuXHJcbiAgICAgIGlmIChjdXJQcm9wcy5uYW1lID09PSBcImNsYXNzXCIpXHJcbiAgICAgICAgbmFtZSA9IFwiY2xhc3NOYW1lXCI7XHJcbiAgICAgIGlmIChjdXJQcm9wcy5uYW1lID09PSBcImZpbGwtcnVsZVwiKVxyXG4gICAgICAgIG5hbWUgPSBcImZpbGxSdWxlXCI7XHJcbiAgICAgIGlmIChjdXJQcm9wcy5uYW1lID09PSBcImZpbGxydWxlXCIpXHJcbiAgICAgICAgbmFtZSA9IFwiZmlsbFJ1bGVcIjtcclxuXHJcbiAgICAgIHByb3BzW25hbWVdID0gY3VyUHJvcHMudmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvcHM7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGxldCBub2RlID0gdGhpcy5nZW5lcmF0ZVN2Zyh0aGlzLnByb3BzLmljb24pO1xyXG5cclxuICAgIGlmICghbm9kZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBJY29uIGVycm9yOiB1bnJlZ2lzdGVyZWQgaWNvbiAke3RoaXMucHJvcHMuaWNvbn1gKVxyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICByZWY9e2VsbSA9PiB0aGlzLnByb3BzLmlubmVyUmVmLmN1cnJlbnQgPSBlbG19XHJcbiAgICAgICAgICAgIHsuLi50aGlzLmdldEF0dHJzKG5vZGUuYXR0cmlidXRlcyl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt0aGlzLmdldFN0eWxlcygpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgICB7WyAuLi5ub2RlLmNoaWxkcmVuIF0ubWFwKCAoY2hpbGQsIGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIDxwYXRoIHsuLi50aGlzLmdldEF0dHJzKGNoaWxkLmF0dHJpYnV0ZXMpfSBrZXkgPSB7aWR9Lz5cclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxuXHJcbiAgICA7XHJcbiAgfVxyXG59XHJcblxyXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpY29uOiBcIlwiLFxyXG4gIHNpemU6ICdtZCcsXHJcbiAgY29sb3I6IFwiXCIsXHJcbiAgY2xhc3NOYW1lOiB7fSxcclxuICBpbm5lclJlZjogUmVhY3QuY3JlYXRlUmVmKClcclxufVxyXG5cclxuSWNvbi5wcm9wVHlwZXMgPSB7XHJcbiAgaWNvbjogcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHNpemU6IHByb3BUeXBlcy5vbmVPZihbJ3hzJywnc20nLCAnbWQnLCAnbGcnLCAneGwnLCAneHhsJ10pLFxyXG4gIGN1c3RvbVNpemU6IHByb3BUeXBlcy5udW1iZXIsXHJcbiAgY29sb3I6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY2xhc3NOYW1lOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMub2JqZWN0LCBwcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgaW5uZXJSZWY6IHByb3BUeXBlcy5vYmplY3RcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvblxyXG4iXX0=