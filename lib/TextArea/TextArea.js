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
      this.setState({
        value: event.target.value
      });
      this.props.onKeyDown(event);
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
      var _classnames,
          _this2 = this;

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "input-group",
          style: {
            minHeight: this.state.parentHeight
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
            className: (0, _classnames2["default"])((_classnames = {
              "form-control": true
            }, _defineProperty(_classnames, this.props.className, true), _defineProperty(_classnames, "resize", this.props.resize), _classnames)),
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
  value: "",
  resize: true
};
TextArea.propTypes = {
  autoresize: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  name: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  className: _propTypes["default"].string,
  autofocus: _propTypes["default"].bool,
  resize: _propTypes["default"].bool
};
var _default = TextArea;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0QXJlYS9UZXh0QXJlYS5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsInByb3BzIiwidGV4dEFyZWFSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIm9uQ2hhbmdlIiwiYmluZCIsInN0YXRlIiwidmFsdWUiLCJwYXJlbnRIZWlnaHQiLCJ0ZXh0YXJlYUhlaWdodCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJvbktleURvd24iLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImF1dG9mb2N1cyIsImN1cnJlbnQiLCJmb2N1cyIsInN0eWxlcyIsIm1pbkhlaWdodCIsImNsYXNzTmFtZSIsInJlc2l6ZSIsImVsbSIsIm5hbWUiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJhdXRvcmVzaXplIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7OztBQUNGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxXQUFMLGdCQUFtQkMsS0FBSyxDQUFDQyxTQUFOLEVBQW5CO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsK0JBQWhCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLEtBQUssRUFBRSxFQURFO0FBRVRDLE1BQUFBLFlBQVksRUFBRSxNQUZMO0FBR1RDLE1BQUFBLGNBQWMsRUFBRTtBQUhQLEtBQWI7QUFKZTtBQVNsQjs7OztXQUVELGtCQUFVQyxLQUFWLEVBQWlCO0FBQ2IsV0FBS0MsUUFBTCxDQUFjO0FBQUNKLFFBQUFBLEtBQUssRUFBRUcsS0FBSyxDQUFDRSxNQUFOLENBQWFMO0FBQXJCLE9BQWQ7QUFDQSxXQUFLUCxLQUFMLENBQVdhLFNBQVgsQ0FBcUJILEtBQXJCO0FBQ0g7OztXQUVELDRCQUFtQkksU0FBbkIsRUFBOEJDLFNBQTlCLEVBQXlDQyxRQUF6QyxFQUFtRDtBQUMvQyxVQUFJLEtBQUtoQixLQUFMLENBQVdpQixTQUFYLElBQXdCLEtBQUtoQixXQUFMLENBQWlCaUIsT0FBN0MsRUFBc0Q7QUFDbEQsa0NBQVMsS0FBS2pCLFdBQUwsQ0FBaUJpQixPQUExQjtBQUNIO0FBQ0o7OztXQUVELDZCQUFvQjtBQUNoQixVQUFJLEtBQUtsQixLQUFMLENBQVdpQixTQUFYLElBQXdCLEtBQUtoQixXQUFMLENBQWlCaUIsT0FBN0MsRUFBc0Q7QUFDbEQsYUFBS2pCLFdBQUwsQ0FBaUJpQixPQUFqQixDQUF5QkMsS0FBekI7QUFDQSxrQ0FBUyxLQUFLbEIsV0FBTCxDQUFpQmlCLE9BQTFCO0FBQ0g7QUFDSjs7O1dBRUQsa0JBQVM7QUFBQTtBQUFBOztBQUNMLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBTyxVQUFBLElBQUksRUFBQyxVQUFaO0FBQUEsb0JBQXdCRTtBQUF4QixVQURKLGVBRUk7QUFDSSxVQUFBLFNBQVMsRUFBQyxhQURkO0FBRUksVUFBQSxLQUFLLEVBQUU7QUFDSEMsWUFBQUEsU0FBUyxFQUFFLEtBQUtmLEtBQUwsQ0FBV0U7QUFEbkIsV0FGWDtBQUFBLGlDQU1JO0FBQ0ksWUFBQSxTQUFTLEVBQUU7QUFDUCw4QkFBZ0I7QUFEVCw0Q0FFTixLQUFLUixLQUFMLENBQVdzQixTQUZMLEVBRWlCLElBRmpCLGdDQUdQLFFBSE8sRUFHRyxLQUFLdEIsS0FBTCxDQUFXdUIsTUFIZCxnQkFEZjtBQU1JLFlBQUEsR0FBRyxFQUFFLGFBQUNDLEdBQUQ7QUFBQSxxQkFBUyxNQUFJLENBQUN2QixXQUFMLENBQWlCaUIsT0FBakIsR0FBMkJNLEdBQXBDO0FBQUEsYUFOVDtBQU9JLFlBQUEsSUFBSSxFQUFFLEtBQUt4QixLQUFMLENBQVd5QixJQVByQjtBQVFJLFlBQUEsS0FBSyxFQUFFLEtBQUt6QixLQUFMLENBQVdPLEtBQVgsSUFBb0IsS0FBS0QsS0FBTCxDQUFXQyxLQVIxQztBQVNJLFlBQUEsT0FBTyxFQUFFLEtBQUtILFFBVGxCO0FBVUksWUFBQSxTQUFTLEVBQUUsS0FBS0E7QUFWcEI7QUFOSixVQUZKO0FBQUEsUUFESjtBQXdCSDs7OztFQXZEa0JGLEtBQUssQ0FBQ3dCLFM7O0FBMEQ3QjNCLFFBQVEsQ0FBQzRCLFlBQVQsR0FBd0I7QUFDcEJDLEVBQUFBLFVBQVUsRUFBRSxLQURRO0FBRXBCWCxFQUFBQSxTQUFTLEVBQUUsSUFGUztBQUdwQkssRUFBQUEsU0FBUyxFQUFFLEVBSFM7QUFJcEJsQixFQUFBQSxRQUFRLEVBQUU7QUFBQSxXQUFNLEtBQUssQ0FBWDtBQUFBLEdBSlU7QUFLcEJTLEVBQUFBLFNBQVMsRUFBRTtBQUFBLFdBQU0sS0FBSyxDQUFYO0FBQUEsR0FMUztBQU1wQlksRUFBQUEsSUFBSSxFQUFFLEVBTmM7QUFPcEJsQixFQUFBQSxLQUFLLEVBQUUsRUFQYTtBQVFwQmdCLEVBQUFBLE1BQU0sRUFBRTtBQVJZLENBQXhCO0FBV0F4QixRQUFRLENBQUM4QixTQUFULEdBQXFCO0FBQ2pCRCxFQUFBQSxVQUFVLEVBQUVDLHNCQUFVQyxJQURMO0FBRWpCdkIsRUFBQUEsS0FBSyxFQUFFc0Isc0JBQVVFLE1BRkE7QUFHakJOLEVBQUFBLElBQUksRUFBRUksc0JBQVVFLE1BSEM7QUFJakIzQixFQUFBQSxRQUFRLEVBQUV5QixzQkFBVUcsSUFKSDtBQUtqQm5CLEVBQUFBLFNBQVMsRUFBRWdCLHNCQUFVRyxJQUxKO0FBTWpCVixFQUFBQSxTQUFTLEVBQUVPLHNCQUFVRSxNQU5KO0FBT2pCZCxFQUFBQSxTQUFTLEVBQUVZLHNCQUFVQyxJQVBKO0FBUWpCUCxFQUFBQSxNQUFNLEVBQUVNLHNCQUFVQztBQVJELENBQXJCO2VBV2UvQixRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgYXV0b3NpemUgZnJvbSBcImF1dG9zaXplL2Rpc3QvYXV0b3NpemVcIjtcblxuY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy50ZXh0QXJlYVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICBwYXJlbnRIZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgdGV4dGFyZWFIZWlnaHQ6IFwiYXV0b1wiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZSAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gICAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGV2ZW50KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b2ZvY3VzICYmIHRoaXMudGV4dEFyZWFSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgYXV0b3NpemUodGhpcy50ZXh0QXJlYVJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5hdXRvZm9jdXMgJiYgdGhpcy50ZXh0QXJlYVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRleHRBcmVhUmVmLmN1cnJlbnQuZm9jdXMoKVxuICAgICAgICAgICAgYXV0b3NpemUodGhpcy50ZXh0QXJlYVJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogdGhpcy5zdGF0ZS5wYXJlbnRIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY29udHJvbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmNsYXNzTmFtZV06IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXNpemVcIjogdGhpcy5wcm9wcy5yZXNpemVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsoZWxtKSA9PiB0aGlzLnRleHRBcmVhUmVmLmN1cnJlbnQgPSBlbG19XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5UZXh0QXJlYS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgYXV0b3Jlc2l6ZTogZmFsc2UsXG4gICAgYXV0b2ZvY3VzOiB0cnVlLFxuICAgIGNsYXNzTmFtZTogXCJcIixcbiAgICBvbkNoYW5nZTogKCkgPT4gdm9pZCAwLFxuICAgIG9uS2V5RG93bjogKCkgPT4gdm9pZCAwLFxuICAgIG5hbWU6IFwiXCIsXG4gICAgdmFsdWU6IFwiXCIsXG4gICAgcmVzaXplOiB0cnVlXG59XG5cblRleHRBcmVhLnByb3BUeXBlcyA9IHtcbiAgICBhdXRvcmVzaXplOiBwcm9wVHlwZXMuYm9vbCxcbiAgICB2YWx1ZTogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBuYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBwcm9wVHlwZXMuZnVuYyxcbiAgICBvbktleURvd246IHByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBhdXRvZm9jdXM6IHByb3BUeXBlcy5ib29sLFxuICAgIHJlc2l6ZTogcHJvcFR5cGVzLmJvb2xcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWFcbiJdfQ==