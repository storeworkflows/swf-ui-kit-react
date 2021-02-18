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
    _this.state = {
      value: "",
      parentHeight: "auto",
      textareaHeight: "auto"
    };
    return _this;
  }

  _createClass(TextArea, [{
    key: "onChange",
    value: function onChange(event) {
      console.log(this.textAreaRef.current);

      if (this.props.autoresize) {
        this.setState({
          parentHeight: "".concat(this.textAreaRef.current.scrollHeight, "px")
        });
        this.setState({
          textareaHeight: "".concat(this.textAreaRef.current.scrollHeight, "px")
        });
        this.setState({
          value: event.target.value
        });
      }

      this.props.onChange(event);
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
      console.log(this.textAreaRef);

      if (this.props.autofocus && this.textAreaRef.current) {
        this.textAreaRef.current.focus();
        (0, _autosize["default"])(this.textAreaRef.current);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "form-group",
          style: {
            minHeight: this.state.parentHeight
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
            className: (0, _classnames2["default"])(_defineProperty({
              "form-control": true
            }, this.props.className, true)),
            ref: function ref(elm) {
              return _this2.textAreaRef.current = elm;
            },
            name: this.props.name,
            value: this.props.value || this.state.value,
            onInput: this.onChange,
            onKeyDown: this.onChange
          })
        })]
      });
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
  value: ""
};
TextArea.propTypes = {
  autoresize: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  name: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  className: _propTypes["default"].string,
  autofocus: _propTypes["default"].bool
};
var _default = TextArea;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0QXJlYS9UZXh0QXJlYS5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsInByb3BzIiwidGV4dEFyZWFSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIm9uQ2hhbmdlIiwiYmluZCIsInN0YXRlIiwidmFsdWUiLCJwYXJlbnRIZWlnaHQiLCJ0ZXh0YXJlYUhlaWdodCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJhdXRvcmVzaXplIiwic2V0U3RhdGUiLCJzY3JvbGxIZWlnaHQiLCJ0YXJnZXQiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImF1dG9mb2N1cyIsImZvY3VzIiwic3R5bGVzIiwibWluSGVpZ2h0IiwiY2xhc3NOYW1lIiwiZWxtIiwibmFtZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm9uS2V5RG93biIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsUTs7Ozs7QUFDRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsV0FBTCxnQkFBbUJDLEtBQUssQ0FBQ0MsU0FBTixFQUFuQjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxLQUFLLEVBQUUsRUFERTtBQUVUQyxNQUFBQSxZQUFZLEVBQUUsTUFGTDtBQUdUQyxNQUFBQSxjQUFjLEVBQUU7QUFIUCxLQUFiO0FBSmU7QUFTbEI7Ozs7V0FFRCxrQkFBVUMsS0FBVixFQUFpQjtBQUNiQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLWCxXQUFMLENBQWlCWSxPQUE3Qjs7QUFDQSxVQUFJLEtB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QUpIO0FBS2pCSixFQUFBQSxTQUFTLEVBQUVDLHNCQUFVRyxJQUxKO0FBTWpCVCxFQUFBQSxTQUFTLEVBQUVNLHNCQUFVRSxNQU5KO0FBT2pCWixFQUFBQSxTQUFTLEVBQUVVLHNCQUFVQztBQVBKLENBQXJCO2VBVWVqQyxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgYXV0b3NpemUgZnJvbSBcImF1dG9zaXplL2Rpc3QvYXV0b3NpemVcIjtcblxuY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy50ZXh0QXJlYVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICBwYXJlbnRIZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgdGV4dGFyZWFIZWlnaHQ6IFwiYXV0b1wiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZSAoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50ZXh0QXJlYVJlZi5jdXJyZW50KVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hdXRvcmVzaXplKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXJlbnRIZWlnaHQ6IGAke3RoaXMudGV4dEFyZWFSZWYuY3VycmVudC5zY3JvbGxIZWlnaHR9cHhgfSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RleHRhcmVhSGVpZ2h0OiBgJHt0aGlzLnRleHRBcmVhUmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0fXB4YH0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b2ZvY3VzICYmIHRoaXMudGV4dEFyZWFSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgYXV0b3NpemUodGhpcy50ZXh0QXJlYVJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRleHRBcmVhUmVmKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hdXRvZm9jdXMgJiYgdGhpcy50ZXh0QXJlYVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRleHRBcmVhUmVmLmN1cnJlbnQuZm9jdXMoKVxuICAgICAgICAgICAgYXV0b3NpemUodGhpcy50ZXh0QXJlYVJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiB0aGlzLnN0YXRlLnBhcmVudEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1jb250cm9sXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuY2xhc3NOYW1lXTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9eyhlbG0pID0+IHRoaXMudGV4dEFyZWFSZWYuY3VycmVudCA9IGVsbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cblRleHRBcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBhdXRvcmVzaXplOiBmYWxzZSxcbiAgICBhdXRvZm9jdXM6IHRydWUsXG4gICAgY2xhc3NOYW1lOiBcIlwiLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB2b2lkIDAsXG4gICAgb25LZXlEb3duOiAoKSA9PiB2b2lkIDAsXG4gICAgbmFtZTogXCJcIixcbiAgICB2YWx1ZTogXCJcIlxufVxuXG5UZXh0QXJlYS5wcm9wVHlwZXMgPSB7XG4gICAgYXV0b3Jlc2l6ZTogcHJvcFR5cGVzLmJvb2wsXG4gICAgdmFsdWU6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmFtZTogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogcHJvcFR5cGVzLmZ1bmMsXG4gICAgb25LZXlEb3duOiBwcm9wVHlwZXMuZnVuYyxcbiAgICBjbGFzc05hbWU6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgYXV0b2ZvY3VzOiBwcm9wVHlwZXMuYm9vbFxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0QXJlYVxuIl19