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
          customSize = _this$props.customSize,
          zeroSize = _this$props.zeroSize;
      var style = {};

      if (!zeroSize) {
        var finalSize = customSize ? customSize : _constants.SIZE[size];
        style.height = finalSize;
        style.width = finalSize;
      }

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
  innerRef: _propTypes["default"].object,
  zeroSize: _propTypes["default"].bool
};
var _default = Icon;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uL0ljb24uanMiXSwibmFtZXMiOlsiSWNvbiIsInByb3BzIiwiY29sb3IiLCJzaXplIiwiY3VzdG9tU2l6ZSIsInplcm9TaXplIiwic3R5bGUiLCJmaW5hbFNpemUiLCJTSVpFIiwiaGVpZ2h0Iiwid2lkdGgiLCJpY29uIiwid3JhcHBlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImljb25zIiwiY2hpbGRyZW4iLCJhdHRycyIsImkiLCJsZW5ndGgiLCJjdXJQcm9wcyIsIml0ZW0iLCJuYW1lIiwidmFsdWUiLCJub2RlIiwiZ2VuZXJhdGVTdmciLCJjb25zb2xlIiwiZXJyb3IiLCJlbG0iLCJpbm5lclJlZiIsImN1cnJlbnQiLCJnZXRBdHRycyIsImF0dHJpYnV0ZXMiLCJnZXRTdHlsZXMiLCJjbGFzc05hbWUiLCJtYXAiLCJjaGlsZCIsImlkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJjcmVhdGVSZWYiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib25lT2YiLCJudW1iZXIiLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEk7Ozs7Ozs7Ozs7Ozs7V0FFSixxQkFBVztBQUFBLHdCQU1MLEtBQUtDLEtBTkE7QUFBQSxVQUVQQyxLQUZPLGVBRVBBLEtBRk87QUFBQSxVQUdQQyxJQUhPLGVBR1BBLElBSE87QUFBQSxVQUlQQyxVQUpPLGVBSVBBLFVBSk87QUFBQSxVQUtQQyxRQUxPLGVBS1BBLFFBTE87QUFRVCxVQUFJQyxLQUFLLEdBQUcsRUFBWjs7QUFFQSxVQUFJLENBQUNELFFBQUwsRUFBZTtBQUNiLFlBQU1FLFNBQVMsR0FBSUgsVUFBRCxHQUFlQSxVQUFmLEdBQTRCSSxnQkFB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RUFBQUEsSUFBSSxFQUFFd0Msc0JBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0IsSUFBeEIsRUFBOEIsS0FBOUIsQ0FBaEIsQ0FGUztBQUdmMUMsRUFBQUEsVUFBVSxFQUFFdUMsc0JBQVVJLE1BSFA7QUFJZjdDLEVBQUFBLEtBQUssRUFBRXlDLHNCQUFVQyxNQUpGO0FBS2ZULEVBQUFBLFNBQVMsRUFBRVEsc0JBQVVLLFNBQVYsQ0FBb0IsQ0FBQ0wsc0JBQVVNLE1BQVgsRUFBbUJOLHNCQUFVQyxNQUE3QixDQUFwQixDQUxJO0FBTWZkLEVBQUFBLFFBQVEsRUFBRWEsc0JBQVVNLE1BTkw7QUFPZjVDLEVBQUFBLFFBQVEsRUFBRXNDLHNCQUFVTztBQVBMLENBQWpCO2VBVWVsRCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCBpY29ucyBmcm9tIFwiLi9pY29uc1wiO1xyXG5pbXBvcnQge1NJWkV9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgSWNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGdldFN0eWxlcygpe1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBjb2xvcixcclxuICAgICAgc2l6ZSxcclxuICAgICAgY3VzdG9tU2l6ZSxcclxuICAgICAgemVyb1NpemVcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGxldCBzdHlsZSA9IHt9XHJcblxyXG4gICAgaWYgKCF6ZXJvU2l6ZSkge1xyXG4gICAgICBjb25zdCBmaW5hbFNpemUgPSAoY3VzdG9tU2l6ZSkgPyBjdXN0b21TaXplIDogU0laRVtzaXplXTtcclxuXHJcbiAgICAgIHN0eWxlLmhlaWdodCA9IGZpbmFsU2l6ZTtcclxuICAgICAgc3R5bGUud2lkdGggPSBmaW5hbFNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoY29sb3IpXHJcbiAgICAgIHN0eWxlLmNvbG9yID0gY29sb3I7XHJcblxyXG4gICAgcmV0dXJuIHN0eWxlO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVTdmcoaWNvbil7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICB3cmFwcGVyLmlubmVySFRNTCA9IGljb25zW2ljb25dO1xyXG4gICAgcmV0dXJuIHdyYXBwZXIuY2hpbGRyZW5bMF07XHJcbiAgfVxyXG5cclxuICBnZXRBdHRycyhhdHRycyl7XHJcbiAgICBsZXQgcHJvcHMgPSB7fTtcclxuICAgIGZvcihsZXQgaT0wOyBpPGF0dHJzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgbGV0IGN1clByb3BzID0gYXR0cnMuaXRlbShpKTtcclxuICAgICAgbGV0IG5hbWUgPSBjdXJQcm9wcy5uYW1lO1xyXG5cclxuICAgICAgaWYgKGN1clByb3BzLm5hbWUgPT09IFwiY2xhc3NcIilcclxuICAgICAgICBuYW1lID0gXCJjbGFzc05hbWVcIjtcclxuICAgICAgaWYgKGN1clByb3BzLm5hbWUgPT09IFwiZmlsbC1ydWxlXCIpXHJcbiAgICAgICAgbmFtZSA9IFwiZmlsbFJ1bGVcIjtcclxuICAgICAgaWYgKGN1clByb3BzLm5hbWUgPT09IFwiZmlsbHJ1bGVcIilcclxuICAgICAgICBuYW1lID0gXCJmaWxsUnVsZVwiO1xyXG5cclxuICAgICAgcHJvcHNbbmFtZV0gPSBjdXJQcm9wcy52YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcm9wcztcclxuICB9XHJcblxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgbGV0IG5vZGUgPSB0aGlzLmdlbmVyYXRlU3ZnKHRoaXMucHJvcHMuaWNvbik7XHJcblxyXG4gICAgaWYgKCFub2RlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEljb24gZXJyb3I6IHVucmVnaXN0ZXJlZCBpY29uICR7dGhpcy5wcm9wcy5pY29ufWApXHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMucHJvcHMuaW5uZXJSZWYuY3VycmVudCA9IGVsbX1cclxuICAgICAgICAgICAgey4uLnRoaXMuZ2V0QXR0cnMobm9kZS5hdHRyaWJ1dGVzKX1cclxuICAgICAgICAgICAgc3R5bGU9e3RoaXMuZ2V0U3R5bGVzKCl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtbIC4uLm5vZGUuY2hpbGRyZW4gXS5tYXAoIChjaGlsZCwgaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAgPHBhdGggey4uLnRoaXMuZ2V0QXR0cnMoY2hpbGQuYXR0cmlidXRlcyl9IGtleSA9IHtpZH0vPlxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG5cclxuICAgIDtcclxuICB9XHJcbn1cclxuXHJcbkljb24uZGVmYXVsdFByb3BzID0ge1xyXG4gIGljb246IFwiXCIsXHJcbiAgc2l6ZTogJ21kJyxcclxuICBjb2xvcjogXCJcIixcclxuICBjbGFzc05hbWU6IHt9LFxyXG4gIGlubmVyUmVmOiBSZWFjdC5jcmVhdGVSZWYoKVxyXG59XHJcblxyXG5JY29uLnByb3BUeXBlcyA9IHtcclxuICBpY29uOiBwcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc2l6ZTogcHJvcFR5cGVzLm9uZU9mKFsneHMnLCdzbScsICdtZCcsICdsZycsICd4bCcsICd4eGwnXSksXHJcbiAgY3VzdG9tU2l6ZTogcHJvcFR5cGVzLm51bWJlcixcclxuICBjb2xvcjogcHJvcFR5cGVzLnN0cmluZyxcclxuICBjbGFzc05hbWU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5vYmplY3QsIHByb3BUeXBlcy5zdHJpbmddKSxcclxuICBpbm5lclJlZjogcHJvcFR5cGVzLm9iamVjdCxcclxuICB6ZXJvU2l6ZTogcHJvcFR5cGVzLmJvb2xcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvblxyXG4iXX0=