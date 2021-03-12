"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles.css"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _autosize = _interopRequireDefault(require("autosize/dist/autosize"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var TextArea = /*#__PURE__*/function (_React$Component) {
  _inherits(TextArea, _React$Component);

  var _super = _createSuper(TextArea);

  function TextArea(props) {
    var _this;

    _classCallCheck(this, TextArea);

    _this = _super.call(this, props);
    _this.textAreaRef = /*#__PURE__*/React.createRef();
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.state = {
      value: _this.props.value,
      parentHeight: "auto",
      textareaHeight: "auto",
      focused: false
    };
    return _this;
  }

  _createClass(TextArea, [{
    key: "onChange",
    value: function onChange(event) {
      this.setState({
        value: event.target.value
      });
      this.props.onKeyDown(event);
    }
  }, {
    key: "onFocus",
    value: function onFocus(event) {
      this.setState({
        focused: true
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.setState({
        focused: false
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.autofocus && this.textAreaRef.current) {
        (0, _autosize["default"])(this.textAreaRef.current);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autofocus && this.textAreaRef.current) {
        this.textAreaRef.current.focus();
        (0, _autosize["default"])(this.textAreaRef.current);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _classnames;

      var _hasLabel = Boolean(this.props.label);

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          ref: function ref(elm) {
            return _this2.props.innerRef.current = elm;
          },
          className: "form-group",
          style: {
            minHeight: this.state.parentHeight
          },
          children: [_hasLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            htmlFor: "name",
            className: (0, _classnames2["default"])({
              "--moved": this.state.focused || this.props.value || this.state.value,
              "--focused": this.state.focused
            }),
            children: this.props.label
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
            className: (0, _classnames2["default"])((_classnames = {
              "form-control": true
            }, _defineProperty(_classnames, this.props.className, true), _defineProperty(_classnames, "resize", this.props.resize), _classnames)),
            ref: function ref(elm) {
              return _this2.textAreaRef.current = elm;
            },
            name: this.props.name,
            value: this.state.value,
            onChange: this.onChange,
            onKeyDown: this.onChange,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            placeholder: !_hasLabel ? this.props.placeholder : ""
          })]
        })]
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(newProps) {
      return {
        value: newProps.value
      };
    }
  }]);

  return TextArea;
}(React.Component);

TextArea.defaultProps = {
  autoresize: false,
  autofocus: true,
  className: "",
  onChange: function onChange() {
    return void 0;
  },
  onKeyDown: function onKeyDown() {
    return void 0;
  },
  name: "",
  value: "",
  resize: true,
  label: "",
  placeholder: "",
  innerRef: /*#__PURE__*/React.createRef()
};
TextArea.propTypes = {
  autoresize: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  label: _propTypes["default"].string,
  name: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  className: _propTypes["default"].string,
  autofocus: _propTypes["default"].bool,
  resize: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  innerRef: _propTypes["default"].object
};
var _default = TextArea;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0QXJlYS9UZXh0QXJlYS5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsInByb3BzIiwidGV4dEFyZWFSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIm9uQ2hhbmdlIiwiYmluZCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJzdGF0ZSIsInZhbHVlIiwicGFyZW50SGVpZ2h0IiwidGV4dGFyZWFIZWlnaHQiLCJmb2N1c2VkIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm9uS2V5RG93biIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiYXV0b2ZvY3VzIiwiY3VycmVudCIsImZvY3VzIiwiX2hhc0xhYmVsIiwiQm9vbGVhbiIsImxhYmVsIiwic3R5bGVzIiwiZWxtIiwiaW5uZXJSZWYiLCJtaW5IZWlnaHQiLCJjbGFzc05hbWUiLCJyZXNpemUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJuZXdQcm9wcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImF1dG9yZXNpemUiLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiZnVuYyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFE7Ozs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFdBQUwsZ0JBQW1CQyxLQUFLLENBQUNDLFNBQU4sRUFBbkI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrQkFBaEI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLCtCQUFmO0FBQ0EsVUFBS0UsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUYsSUFBWiwrQkFBZDtBQUNBLFVBQUtHLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxL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akJ6QixFQUFBQSxTQUFTLEVBQUVzQixzQkFBVUcsSUFOSjtBQU9qQlgsRUFBQUEsU0FBUyxFQUFFUSxzQkFBVUUsTUFQSjtBQVFqQnBCLEVBQUFBLFNBQVMsRUFBRWtCLHNCQUFVQyxJQVJKO0FBU2pCUixFQUFBQSxNQUFNLEVBQUVPLHNCQUFVQyxJQVREO0FBVWpCTixFQUFBQSxXQUFXLEVBQUVLLHNCQUFVRSxNQVZOO0FBV2pCWixFQUFBQSxRQUFRLEVBQUVVLHNCQUFVSTtBQVhILENBQXJCO2VBY2UzQyxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBhdXRvc2l6ZSBmcm9tIFwiYXV0b3NpemUvZGlzdC9hdXRvc2l6ZVwiO1xyXG5cclxuY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy50ZXh0QXJlYVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLFxyXG4gICAgICAgICAgICBwYXJlbnRIZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICB0ZXh0YXJlYUhlaWdodDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIGZvY3VzZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlIChldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGV2ZW50KVxyXG4gICAgfVxyXG4gICAgb25Gb2N1cyhldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IHRydWV9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uQmx1ciAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogZmFsc2V9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hdXRvZm9jdXMgJiYgdGhpcy50ZXh0QXJlYVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGF1dG9zaXplKHRoaXMudGV4dEFyZWFSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9mb2N1cyAmJiB0aGlzLnRleHRBcmVhUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0QXJlYVJlZi5jdXJyZW50LmZvY3VzKClcclxuICAgICAgICAgICAgYXV0b3NpemUodGhpcy50ZXh0QXJlYVJlZi5jdXJyZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAobmV3UHJvcHMpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWx1ZTogbmV3UHJvcHMudmFsdWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IF9oYXNMYWJlbCA9IEJvb2xlYW4odGhpcy5wcm9wcy5sYWJlbCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMucHJvcHMuaW5uZXJSZWYuY3VycmVudCA9IGVsbSB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB0aGlzLnN0YXRlLnBhcmVudEhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge19oYXNMYWJlbCAmJiA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tbW92ZWRcIjogdGhpcy5zdGF0ZS5mb2N1c2VkIHx8ICh0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMuc3RhdGUudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tZm9jdXNlZFwiOiB0aGlzLnN0YXRlLmZvY3VzZWRcclxuICAgICAgICAgICAgICAgICAgICB9KX0+e3RoaXMucHJvcHMubGFiZWx9PC9sYWJlbD59XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY29udHJvbFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuY2xhc3NOYW1lXTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVzaXplXCI6IHRoaXMucHJvcHMucmVzaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9eyhlbG0pID0+IHRoaXMudGV4dEFyZWFSZWYuY3VycmVudCA9IGVsbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17IV9oYXNMYWJlbCA/IHRoaXMucHJvcHMucGxhY2Vob2xkZXIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5UZXh0QXJlYS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBhdXRvcmVzaXplOiBmYWxzZSxcclxuICAgIGF1dG9mb2N1czogdHJ1ZSxcclxuICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgIG9uQ2hhbmdlOiAoKSA9PiB2b2lkIDAsXHJcbiAgICBvbktleURvd246ICgpID0+IHZvaWQgMCxcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIHJlc2l6ZTogdHJ1ZSxcclxuICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgcGxhY2Vob2xkZXI6IFwiXCIsXHJcbiAgICBpbm5lclJlZjogUmVhY3QuY3JlYXRlUmVmKClcclxufVxyXG5cclxuVGV4dEFyZWEucHJvcFR5cGVzID0ge1xyXG4gICAgYXV0b3Jlc2l6ZTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICB2YWx1ZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbmFtZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uQ2hhbmdlOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uS2V5RG93bjogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjbGFzc05hbWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBhdXRvZm9jdXM6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVzaXplOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHBsYWNlaG9sZGVyOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaW5uZXJSZWY6IHByb3BUeXBlcy5vYmplY3RcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWFcclxuIl19