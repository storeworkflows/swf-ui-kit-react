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
        var name = curProps.name === "class" ? "className" : curProps.name;
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
        children: _toConsumableArray(node.children).map(function (child) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("path", _objectSpread({}, _this.getAttrs(child.attributes)));
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
  className: "",
  innerRef: /*#__PURE__*/React.createRef()
};
Icon.propTypes = {
  icon: _propTypes["default"].string.isRequired,
  size: _propTypes["default"].oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  customSize: _propTypes["default"].number,
  color: _propTypes["default"].string,
  className: _propTypes["default"].string,
  innerRef: _propTypes["default"].object
};
var _default = Icon;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uL0ljb24uanMiXSwibmFtZXMiOlsiSWNvbiIsInByb3BzIiwiY29sb3IiLCJzaXplIiwiY3VzdG9tU2l6ZSIsInN0eWxlIiwiZmluYWxTaXplIiwiU0laRSIsImhlaWdodCIsIndpZHRoIiwiaWNvbiIsIndyYXBwZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJpY29ucyIsImNoaWxkcmVuIiwiYXR0cnMiLCJpIiwibGVuZ3RoIiwiY3VyUHJvcHMiLCJpdGVtIiwibmFtZSIsInZhbHVlIiwibm9kZSIsImdlbmVyYXRlU3ZnIiwiY29uc29sZSIsImVycm9yIiwiZWxtIiwiaW5uZXJSZWYiLCJjdXJyZW50IiwiZ2V0QXR0cnMiLCJhdHRyaWJ1dGVzIiwiZ2V0U3R5bGVzIiwibWFwIiwiY2hpbGQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsImNyZWF0ZVJlZiIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvbmVPZiIsIm51bWJlciIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7Ozs7Ozs7Ozs7O1dBRUoscUJBQVc7QUFBQSx3QkFLTCxLQUFLQyxLQUxBO0FBQUEsVUFFUEMsS0FGTyxlQUVQQSxLQUZPO0FBQUEsVUFHUEMsSUFITyxlQUdQQSxJQUhPO0FBQUEsVUFJUEMsVUFKTyxlQUlQQSxVQUpPO0FBT1QsVUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxVQUFJQyxTQUFTLEdBQUlGLFVBQUQsR0FBZUEsVUFBZixHQUE0QkcsZ0JBQUtKLElBQUwsQ0FBNUM7QUFFQUUsTUFBQUEsS0FBSyxDQUFDRyxNQUFOLEdBQWVGLFNBQWY7QUFDQUQsTUFBQUEsS0FBSyxDQUFDSSxLQUFOLEdBQWNILFNB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b20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgaWNvbnMgZnJvbSBcIi4vaWNvbnNcIjtcclxuaW1wb3J0IHtTSVpFfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmNsYXNzIEljb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBnZXRTdHlsZXMoKXtcclxuICAgIGNvbnN0IHtcclxuICAgICAgY29sb3IsXHJcbiAgICAgIHNpemUsXHJcbiAgICAgIGN1c3RvbVNpemVcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGxldCBzdHlsZSA9IHt9XHJcbiAgICBsZXQgZmluYWxTaXplID0gKGN1c3RvbVNpemUpID8gY3VzdG9tU2l6ZSA6IFNJWkVbc2l6ZV07XHJcblxyXG4gICAgc3R5bGUuaGVpZ2h0ID0gZmluYWxTaXplO1xyXG4gICAgc3R5bGUud2lkdGggPSBmaW5hbFNpemU7XHJcblxyXG4gICAgaWYoY29sb3IpXHJcbiAgICAgIHN0eWxlLmNvbG9yID0gY29sb3I7XHJcblxyXG4gICAgcmV0dXJuIHN0eWxlO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVTdmcoaWNvbil7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICB3cmFwcGVyLmlubmVySFRNTCA9IGljb25zW2ljb25dO1xyXG4gICAgcmV0dXJuIHdyYXBwZXIuY2hpbGRyZW5bMF07XHJcbiAgfVxyXG5cclxuICBnZXRBdHRycyhhdHRycyl7XHJcbiAgICBsZXQgcHJvcHMgPSB7fTtcclxuICAgIGZvcihsZXQgaT0wOyBpPGF0dHJzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgbGV0IGN1clByb3BzID0gYXR0cnMuaXRlbShpKTtcclxuICAgICAgbGV0IG5hbWUgPSBjdXJQcm9wcy5uYW1lID09PSBcImNsYXNzXCIgPyBcImNsYXNzTmFtZVwiIDogY3VyUHJvcHMubmFtZTtcclxuICAgICAgcHJvcHNbbmFtZV0gPSBjdXJQcm9wcy52YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcm9wcztcclxuICB9XHJcblxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgbGV0IG5vZGUgPSB0aGlzLmdlbmVyYXRlU3ZnKHRoaXMucHJvcHMuaWNvbik7XHJcblxyXG4gICAgaWYgKCFub2RlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEljb24gZXJyb3I6IHVucmVnaXN0ZXJlZCBpY29uICR7dGhpcy5wcm9wcy5pY29ufWApXHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMucHJvcHMuaW5uZXJSZWYuY3VycmVudCA9IGVsbX1cclxuICAgICAgICAgICAgey4uLnRoaXMuZ2V0QXR0cnMobm9kZS5hdHRyaWJ1dGVzKX1cclxuICAgICAgICAgICAgc3R5bGU9e3RoaXMuZ2V0U3R5bGVzKCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtbIC4uLm5vZGUuY2hpbGRyZW4gXS5tYXAoIGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAgPHBhdGggey4uLnRoaXMuZ2V0QXR0cnMoY2hpbGQuYXR0cmlidXRlcyl9IC8+XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcblxyXG4gICAgO1xyXG4gIH1cclxufVxyXG5cclxuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaWNvbjogXCJcIixcclxuICBzaXplOiAnbWQnLFxyXG4gIGNvbG9yOiBcIlwiLFxyXG4gIGNsYXNzTmFtZTogXCJcIixcclxuICBpbm5lclJlZjogUmVhY3QuY3JlYXRlUmVmKClcclxufVxyXG5cclxuSWNvbi5wcm9wVHlwZXMgPSB7XHJcbiAgaWNvbjogcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHNpemU6IHByb3BUeXBlcy5vbmVPZihbJ3hzJywnc20nLCAnbWQnLCAnbGcnLCAneGwnLCAneHhsJ10pLFxyXG4gIGN1c3RvbVNpemU6IHByb3BUeXBlcy5udW1iZXIsXHJcbiAgY29sb3I6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY2xhc3NOYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGlubmVyUmVmOiBwcm9wVHlwZXMub2JqZWN0XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uXHJcbiJdfQ==