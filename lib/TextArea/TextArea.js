"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

      if (this.textAreaRef.current) {
        (0, _autosize["default"])(this.textAreaRef.current);
      }
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
    value: function onBlur(event) {
      this.setState({
        focused: false
      });
      this.props.onBlur(event);
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

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
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
        })
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
  onBlur: function onBlur() {
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
  innerRef: _propTypes["default"].object,
  onBlur: _propTypes["default"].func
};
var _default = TextArea;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0QXJlYS9UZXh0QXJlYS5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsInByb3BzIiwidGV4dEFyZWFSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIm9uQ2hhbmdlIiwiYmluZCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJzdGF0ZSIsInZhbHVlIiwicGFyZW50SGVpZ2h0IiwidGV4dGFyZWFIZWlnaHQiLCJmb2N1c2VkIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm9uS2V5RG93biIsImN1cnJlbnQiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImF1dG9mb2N1cyIsImZvY3VzIiwiX2hhc0xhYmVsIiwiQm9vbGVhbiIsImxhYmVsIiwiZWxtIiwiaW5uZXJSZWYiLCJtaW5IZWlnaHQiLCJjbGFzc05hbWUiLCJyZXNpemUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJuZXdQcm9wcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImF1dG9yZXNpemUiLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiZnVuYyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFE7Ozs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFdBQUwsZ0JBQW1CQyxLQUFLLENBQUNDLFNBQU4sRUFBbkI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrQkFBaEI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLCtCQUFmO0FBQ0EsVUFBS0UsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUYsSUFBWiwrQkFBZDtBQUNBLFVBQUtHLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxLQUFLLEVBQUUsTUFBS1Qs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O0FBR2pCZCxFQUFBQSxLQUFLLEVBQUVZLHNCQUFVRSxNQUhBO0FBSWpCUixFQUFBQSxJQUFJLEVBQUVNLHNCQUFVRSxNQUpDO0FBS2pCbkMsRUFBQUEsUUFBUSxFQUFFaUMsc0JBQVVHLElBTEg7QUFNakJ4QixFQUFBQSxTQUFTLEVBQUVxQixzQkFBVUcsSUFOSjtBQU9qQlgsRUFBQUEsU0FBUyxFQUFFUSxzQkFBVUUsTUFQSjtBQVFqQmxCLEVBQUFBLFNBQVMsRUFBRWdCLHNCQUFVQyxJQVJKO0FBU2pCUixFQUFBQSxNQUFNLEVBQUVPLHNCQUFVQyxJQVREO0FBVWpCTixFQUFBQSxXQUFXLEVBQUVLLHNCQUFVRSxNQVZOO0FBV2pCWixFQUFBQSxRQUFRLEVBQUVVLHNCQUFVSSxNQVhIO0FBWWpCbEMsRUFBQUEsTUFBTSxFQUFFOEIsc0JBQVVHO0FBWkQsQ0FBckI7ZUFlZXpDLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgYXV0b3NpemUgZnJvbSBcImF1dG9zaXplL2Rpc3QvYXV0b3NpemVcIjtcclxuXHJcbmNsYXNzIFRleHRBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMudGV4dEFyZWFSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcclxuICAgICAgICAgICAgcGFyZW50SGVpZ2h0OiBcImF1dG9cIixcclxuICAgICAgICAgICAgdGV4dGFyZWFIZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICBmb2N1c2VkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSAoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihldmVudClcclxuICAgICAgICBpZiAodGhpcy50ZXh0QXJlYVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGF1dG9zaXplKHRoaXMudGV4dEFyZWFSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRm9jdXMoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiB0cnVlfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkJsdXIgKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogZmFsc2V9KVxyXG4gICAgICAgIHRoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b2ZvY3VzICYmIHRoaXMudGV4dEFyZWFSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBhdXRvc2l6ZSh0aGlzLnRleHRBcmVhUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hdXRvZm9jdXMgJiYgdGhpcy50ZXh0QXJlYVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEFyZWFSZWYuY3VycmVudC5mb2N1cygpXHJcbiAgICAgICAgICAgIGF1dG9zaXplKHRoaXMudGV4dEFyZWFSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgKG5ld1Byb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsdWU6IG5ld1Byb3BzLnZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBfaGFzTGFiZWwgPSBCb29sZWFuKHRoaXMucHJvcHMubGFiZWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMucHJvcHMuaW5uZXJSZWYuY3VycmVudCA9IGVsbSB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB0aGlzLnN0YXRlLnBhcmVudEhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge19oYXNMYWJlbCAmJiA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tbW92ZWRcIjogdGhpcy5zdGF0ZS5mb2N1c2VkIHx8ICh0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMuc3RhdGUudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tZm9jdXNlZFwiOiB0aGlzLnN0YXRlLmZvY3VzZWRcclxuICAgICAgICAgICAgICAgICAgICB9KX0+e3RoaXMucHJvcHMubGFiZWx9PC9sYWJlbD59XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY29udHJvbFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuY2xhc3NOYW1lXTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVzaXplXCI6IHRoaXMucHJvcHMucmVzaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9eyhlbG0pID0+IHRoaXMudGV4dEFyZWFSZWYuY3VycmVudCA9IGVsbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17IV9oYXNMYWJlbCA/IHRoaXMucHJvcHMucGxhY2Vob2xkZXIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5UZXh0QXJlYS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBhdXRvcmVzaXplOiBmYWxzZSxcclxuICAgIGF1dG9mb2N1czogdHJ1ZSxcclxuICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgIG9uQ2hhbmdlOiAoKSA9PiB2b2lkIDAsXHJcbiAgICBvbktleURvd246ICgpID0+IHZvaWQgMCxcclxuICAgIG9uQmx1cjogKCkgPT4gdm9pZCAwLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgcmVzaXplOiB0cnVlLFxyXG4gICAgbGFiZWw6IFwiXCIsXHJcbiAgICBwbGFjZWhvbGRlcjogXCJcIixcclxuICAgIGlubmVyUmVmOiBSZWFjdC5jcmVhdGVSZWYoKVxyXG59XHJcblxyXG5UZXh0QXJlYS5wcm9wVHlwZXMgPSB7XHJcbiAgICBhdXRvcmVzaXplOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHZhbHVlOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBuYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25DaGFuZ2U6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25LZXlEb3duOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGF1dG9mb2N1czogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICByZXNpemU6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgcGxhY2Vob2xkZXI6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpbm5lclJlZjogcHJvcFR5cGVzLm9iamVjdCxcclxuICAgIG9uQmx1cjogcHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWFcclxuIl19