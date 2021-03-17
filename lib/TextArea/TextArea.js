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
            value: this.props.value,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0QXJlYS9UZXh0QXJlYS5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsInByb3BzIiwidGV4dEFyZWFSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIm9uQ2hhbmdlIiwiYmluZCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJzdGF0ZSIsInZhbHVlIiwicGFyZW50SGVpZ2h0IiwidGV4dGFyZWFIZWlnaHQiLCJmb2N1c2VkIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm9uS2V5RG93biIsImN1cnJlbnQiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImF1dG9mb2N1cyIsImZvY3VzIiwiX2hhc0xhYmVsIiwiQm9vbGVhbiIsImxhYmVsIiwiZWxtIiwiaW5uZXJSZWYiLCJtaW5IZWlnaHQiLCJjbGFzc05hbWUiLCJyZXNpemUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJuZXdQcm9wcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImF1dG9yZXNpemUiLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiZnVuYyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFE7Ozs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFdBQUwsZ0JBQW1CQyxLQUFLLENBQUNDLFNBQU4sRUFBbkI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrQkFBaEI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLCtCQUFmO0FBQ0EsVUFBS0UsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUYsSUFBWiwrQkFBZDtBQUNBLFVBQUtHLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxLQUFLLEVBQUUsTUFBS1Qs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LElBTEg7QUFNakJ4QixFQUFBQSxTQUFTLEVBQUVxQixzQkFBVUcsSUFOSjtBQU9qQlgsRUFBQUEsU0FBUyxFQUFFUSxzQkFBVUUsTUFQSjtBQVFqQmxCLEVBQUFBLFNBQVMsRUFBRWdCLHNCQUFVQyxJQVJKO0FBU2pCUixFQUFBQSxNQUFNLEVBQUVPLHNCQUFVQyxJQVREO0FBVWpCTixFQUFBQSxXQUFXLEVBQUVLLHNCQUFVRSxNQVZOO0FBV2pCWixFQUFBQSxRQUFRLEVBQUVVLHNCQUFVSTtBQVhILENBQXJCO2VBY2UxQyxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IGF1dG9zaXplIGZyb20gXCJhdXRvc2l6ZS9kaXN0L2F1dG9zaXplXCI7XHJcblxyXG5jbGFzcyBUZXh0QXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnRleHRBcmVhUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXHJcbiAgICAgICAgICAgIHBhcmVudEhlaWdodDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIHRleHRhcmVhSGVpZ2h0OiBcImF1dG9cIixcclxuICAgICAgICAgICAgZm9jdXNlZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UgKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZXZlbnQpXHJcbiAgICAgICAgaWYgKHRoaXMudGV4dEFyZWFSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBhdXRvc2l6ZSh0aGlzLnRleHRBcmVhUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkZvY3VzKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogdHJ1ZX0pXHJcbiAgICB9XHJcblxyXG4gICAgb25CbHVyICgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiBmYWxzZX0pXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9mb2N1cyAmJiB0aGlzLnRleHRBcmVhUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgYXV0b3NpemUodGhpcy50ZXh0QXJlYVJlZi5jdXJyZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b2ZvY3VzICYmIHRoaXMudGV4dEFyZWFSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRBcmVhUmVmLmN1cnJlbnQuZm9jdXMoKVxyXG4gICAgICAgICAgICBhdXRvc2l6ZSh0aGlzLnRleHRBcmVhUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIChuZXdQcm9wcykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBuZXdQcm9wcy52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgX2hhc0xhYmVsID0gQm9vbGVhbih0aGlzLnByb3BzLmxhYmVsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICByZWY9e2VsbSA9PiB0aGlzLnByb3BzLmlubmVyUmVmLmN1cnJlbnQgPSBlbG0gfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogdGhpcy5zdGF0ZS5wYXJlbnRIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtfaGFzTGFiZWwgJiYgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCItLW1vdmVkXCI6IHRoaXMuc3RhdGUuZm9jdXNlZCB8fCAodGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnN0YXRlLnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCItLWZvY3VzZWRcIjogdGhpcy5zdGF0ZS5mb2N1c2VkXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9Pnt0aGlzLnByb3BzLmxhYmVsfTwvbGFiZWw+fVxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2xcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmNsYXNzTmFtZV06IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlc2l6ZVwiOiB0aGlzLnByb3BzLnJlc2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsoZWxtKSA9PiB0aGlzLnRleHRBcmVhUmVmLmN1cnJlbnQgPSBlbG19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMub25Gb2N1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyFfaGFzTGFiZWwgPyB0aGlzLnByb3BzLnBsYWNlaG9sZGVyIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuVGV4dEFyZWEuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgYXV0b3Jlc2l6ZTogZmFsc2UsXHJcbiAgICBhdXRvZm9jdXM6IHRydWUsXHJcbiAgICBjbGFzc05hbWU6IFwiXCIsXHJcbiAgICBvbkNoYW5nZTogKCkgPT4gdm9pZCAwLFxyXG4gICAgb25LZXlEb3duOiAoKSA9PiB2b2lkIDAsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgICByZXNpemU6IHRydWUsXHJcbiAgICBsYWJlbDogXCJcIixcclxuICAgIHBsYWNlaG9sZGVyOiBcIlwiLFxyXG4gICAgaW5uZXJSZWY6IFJlYWN0LmNyZWF0ZVJlZigpXHJcbn1cclxuXHJcblRleHRBcmVhLnByb3BUeXBlcyA9IHtcclxuICAgIGF1dG9yZXNpemU6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgdmFsdWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG5hbWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbkNoYW5nZTogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbktleURvd246IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYXV0b2ZvY3VzOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlc2l6ZTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBwbGFjZWhvbGRlcjogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGlubmVyUmVmOiBwcm9wVHlwZXMub2JqZWN0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhXHJcbiJdfQ==