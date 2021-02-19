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
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.state = {
      value: "",
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
      var _classnames,
          _this2 = this;

      var _hasLabel = Boolean(this.props.label);

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
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
            value: this.props.value || this.state.value,
            onInput: this.onChange,
            onKeyDown: this.onChange,
            onFocus: this.onFocus,
            onBlur: this.onBlur
          })]
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
  resize: true,
  label: ""
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
  resize: _propTypes["default"].bool
};
var _default = TextArea;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0QXJlYS9UZXh0QXJlYS5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsInByb3BzIiwidGV4dEFyZWFSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIm9uQ2hhbmdlIiwiYmluZCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJzdGF0ZSIsInZhbHVlIiwicGFyZW50SGVpZ2h0IiwidGV4dGFyZWFIZWlnaHQiLCJmb2N1c2VkIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm9uS2V5RG93biIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiYXV0b2ZvY3VzIiwiY3VycmVudCIsImZvY3VzIiwiX2hhc0xhYmVsIiwiQm9vbGVhbiIsImxhYmVsIiwic3R5bGVzIiwibWluSGVpZ2h0IiwiY2xhc3NOYW1lIiwicmVzaXplIiwiZWxtIiwibmFtZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImF1dG9yZXNpemUiLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFE7Ozs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFdBQUwsZ0JBQW1CQyxLQUFLLENBQUNDLFNBQU4sRUFBbkI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrQkFBaEI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLCtCQUFmO0FBQ0EsVUFBS0UsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUYsSUFBWiwrQkFBZDtBQUNBLFVBQUtHLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxLQUFLLEVBQUUsRUFERTtBQUVUQyxNQUFBQSxZQUFZLEVBQUUsTUFGTDtBQUdUQyxNQUFBQSxjQUFjLEVBQUUsTUFIUDtBQUlUQyxNQUFBQSxPQUFPLEVBQUU7QUFKQSxLQUFiO0FBTmU7QUFZbEI7Ozs7V0FFRCxrQkFBVUMsS0FBVixFQUFpQjtBQUNiLFdBQUtDLFFBQUwsQ0FBYztBQUFDTCxRQUFBQSxLQUFLLEVBQUVJLEtBQUssQ0FBQ0UsTUFBTixDQUFhTjtBQUFyQixPQUFkO0FBQ0EsV0FBS1QsS0FBTCxDQUFXZ0IsU0FBWCxDQUFxQkgsS0FBckI7QUFDSDs7O1dBQ0QsaUJBQVFBLEtBQVIsRUFBZTtBQUNYLFdBQUtDLFFBQUwsQ0FBYztBQUFDRixRQUFBQSxPQUFPLEVBQUU7QUFBVixPQUFkO0FBQ0g7OztXQUVELGtCQUFVO0FBQ04sV0FBS0UsUUFBTCxDQUFjO0FBQUNGLFFBQUFBLE9BQU8sRUFBRTtBQUFWLE9BQWQ7QUFDSDs7O1dBRUQsNEJBQW1CSyxTQUFuQixFQUE4QkMsU0FBOUIsRUFBeUNDLFFBQXpDLEVBQW1EO0FBQy9DLFVBQUksS0FBS25CLEtBQUwsQ0FBV29CLFNBQVgsSUFBd0IsS0FBS25CLFdBQUwsQ0FBaUJvQixPQUE3QyxFQUFzRDtBQUNsRCxrQ0FBUyxLQUFLcEIsV0FBTCxDQUFpQm9CLE9BQTFCO0FBQ0g7QUFDSjs7O1dBRUQsNkJBQW9CO0FBQ2hCLFVBQUksS0FBS3JCLEtBQUwsQ0FBV29CLFNBQVgsSUFBd0IsS0FBS25CLFdBQUwsQ0FBaUJvQixPQUE3QyxFQUFzRDtBQUNsRCxhQUFLcEIsV0FBTCxDQUFpQm9CLE9BQWpCLENBQXlCQyxLQUF6QjtBQUNBLGtDQUFTLEtBQUtyQixXQUFMLENBQWlCb0IsT0FBMUI7QUFDSDtBQUNKOzs7V0FFRCxrQkFBUztBQUFBO0FBQUE7O0FBQ0wsVUFBTUUsU0FBUyxHQUFHQyxPQUFPLENBQUMsS0FBS3hCLEtBQUwsQ0FBV3lCLEtBQVosQ0FBekI7O0FBQ0EsMEJBQ0k7QUFBQSxnQ0FDSTtBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0JDO0FBQXhCLFVBREosZUFFSTtBQUNJLFVBQUEsU0FBUyxFQUFDLFlBRGQ7QUFFSSxVQUFBLEtBQUssRUFBRTtBQUNIQyxZQUFBQSxTQUFTLEVBQUUsS0FBS25CLEtBQUwsQ0FBV0U7QUFEbkIsV0FGWDtBQUFBLHFCQU1LYSxTQUFTLGlCQUFJO0FBQU8sWUFBQSxPQUFPLEVBQUMsTUFBZjtBQUFzQixZQUFBLFNBQVMsRUFBRSw2QkFBVztBQUN0RCx5QkFBVyxLQUFLZixLQUFMLENBQVdJLE9BQVgsSUFBdUIsS0FBS1osS0FBTCxDQUFXUyxLQUFYLElBQW9CLEtBQUtELEtBQUwsQ0FBV0MsS0FEWDtBQUV0RCwyQkFBYSxLQUFLRCxLQUFMLENBQVdJO0FBRjhCLGFBQVgsQ0FBakM7QUFBQSxzQkFHVCxLQUFLWixLQUFMLENBQVd5QjtBQUhGLFlBTmxCLGVBVUk7QUFDSSxZQUFBLFNBQVMsRUFBRTtBQUNQLDhCQUFnQjtBQURULDRDQUVOLEtBQUt6QixLQUFMLENBQVc0QixTQUZMLEVBRWlCLElBRmpCLGdDQUdQLFFBSE8sRUFHRyxLQUFLNUIsS0FBTCxDQUFXNkIsTUFIZCxnQkFEZjtBQU1JLFlBQUEsR0FBRyxFQUFFLGFBQUNDLEdBQUQ7QUFBQSxxQkFBUyxNQUFJLENBQUM3QixXQUFMLENBQWlCb0IsT0FBakIsR0FBMkJTLEdBQXBDO0FBQUEsYUFOVDtBQU9JLFlBQUEsSUFBSSxFQUFFLEtBQUs5QixLQUFMLENBQVcrQixJQVByQjtBQVFJLFlBQUEsS0FBSyxFQUFFLEtBQUsvQixLQUFMLENBQVdTLEtBQVgsSUFBb0IsS0FBS0QsS0FBTCxDQUFXQyxLQVIxQztBQVNJLFlBQUEsT0FBTyxFQUFFLEtBQUtMLFFBVGxCO0FBVUksWUFBQSxTQUFTLEVBQUUsS0FBS0EsUUFWcEI7QUFXSSxZQUFBLE9BQU8sRUFBRSxLQUFLRSxPQVhsQjtBQVlJLFlBQUEsTUFBTSxFQUFFLEtBQUtDO0FBWmpCLFlBVko7QUFBQSxVQUZKO0FBQUEsUUFESjtBQThCSDs7OztFQXhFa0JMLEtBQUssQ0FBQzhCLFM7O0FBMkU3QmpDLFFBQVEsQ0FBQ2tDLFlBQVQsR0FBd0I7QUFDcEJDLEVBQUFBLFVBQVUsRUFBRSxLQURRO0FBRXBCZCxFQUFBQSxTQUFTLEVBQUUsSUFGUztBQUdwQlEsRUFBQUEsU0FBUyxFQUFFLEVBSFM7QUFJcEJ4QixFQUFBQSxRQUFRLEVBQUU7QUFBQSxXQUFNLEtBQUssQ0FBWDtBQUFBLEdBSlU7QUFLcEJZLEVBQUFBLFNBQVMsRUFBRTtBQUFBLFdBQU0sS0FBSyxDQUFYO0FBQUEsR0FMUztBQU1wQmUsRUFBQUEsSUFBSSxFQUFFLEVBTmM7QUFPcEJ0QixFQUFBQSxLQUFLLEVBQUUsRUFQYTtBQVFwQm9CLEVBQUFBLE1BQU0sRUFBRSxJQVJZO0FBU3BCSixFQUFBQSxLQUFLLEVBQUU7QUFUYSxDQUF4QjtBQVlBMUIsUUFBUSxDQUFDb0MsU0FBVCxHQUFxQjtBQUNqQkQsRUFBQUEsVUFBVSxFQUFFQyxzQkFBVUMsSUFETDtBQUVqQjNCLEVBQUFBLEtBQUssRUFBRTBCLHNCQUFVRSxNQUZBO0FBR2pCWixFQUFBQSxLQUFLLEVBQUVVLHNCQUFVRSxNQUhBO0FBSWpCTixFQUFBQSxJQUFJLEVBQUVJLHNCQUFVRSxNQUpDO0FBS2pCakMsRUFBQUEsUUFBUSxFQUFFK0Isc0JBQVVHLElBTEg7QUFNakJ0QixFQUFBQSxTQUFTLEVBQUVtQixzQkFBVUcsSUFOSjtBQU9qQlYsRUFBQUEsU0FBUyxFQUFFTyxzQkFBVUUsTUFQSjtBQVFqQmpCLEVBQUFBLFNBQVMsRUFBRWUsc0JBQVVDLElBUko7QUFTakJQLEVBQUFBLE1BQU0sRUFBRU0sc0JBQVVDO0FBVEQsQ0FBckI7ZUFZZXJDLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBhdXRvc2l6ZSBmcm9tIFwiYXV0b3NpemUvZGlzdC9hdXRvc2l6ZVwiO1xuXG5jbGFzcyBUZXh0QXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnRleHRBcmVhUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgIHBhcmVudEhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgICB0ZXh0YXJlYUhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgICBmb2N1c2VkOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGFuZ2UgKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KVxuICAgICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihldmVudClcbiAgICB9XG4gICAgb25Gb2N1cyhldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiB0cnVlfSlcbiAgICB9XG5cbiAgICBvbkJsdXIgKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiBmYWxzZX0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5hdXRvZm9jdXMgJiYgdGhpcy50ZXh0QXJlYVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBhdXRvc2l6ZSh0aGlzLnRleHRBcmVhUmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9mb2N1cyAmJiB0aGlzLnRleHRBcmVhUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dEFyZWFSZWYuY3VycmVudC5mb2N1cygpXG4gICAgICAgICAgICBhdXRvc2l6ZSh0aGlzLnRleHRBcmVhUmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBfaGFzTGFiZWwgPSBCb29sZWFuKHRoaXMucHJvcHMubGFiZWwpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHRoaXMuc3RhdGUucGFyZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7X2hhc0xhYmVsICYmIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tbW92ZWRcIjogdGhpcy5zdGF0ZS5mb2N1c2VkIHx8ICh0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMuc3RhdGUudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCItLWZvY3VzZWRcIjogdGhpcy5zdGF0ZS5mb2N1c2VkXG4gICAgICAgICAgICAgICAgICAgIH0pfT57dGhpcy5wcm9wcy5sYWJlbH08L2xhYmVsPn1cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1jb250cm9sXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlc2l6ZVwiOiB0aGlzLnByb3BzLnJlc2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9eyhlbG0pID0+IHRoaXMudGV4dEFyZWFSZWYuY3VycmVudCA9IGVsbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5UZXh0QXJlYS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgYXV0b3Jlc2l6ZTogZmFsc2UsXG4gICAgYXV0b2ZvY3VzOiB0cnVlLFxuICAgIGNsYXNzTmFtZTogXCJcIixcbiAgICBvbkNoYW5nZTogKCkgPT4gdm9pZCAwLFxuICAgIG9uS2V5RG93bjogKCkgPT4gdm9pZCAwLFxuICAgIG5hbWU6IFwiXCIsXG4gICAgdmFsdWU6IFwiXCIsXG4gICAgcmVzaXplOiB0cnVlLFxuICAgIGxhYmVsOiBcIlwiXG59XG5cblRleHRBcmVhLnByb3BUeXBlcyA9IHtcbiAgICBhdXRvcmVzaXplOiBwcm9wVHlwZXMuYm9vbCxcbiAgICB2YWx1ZTogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBuYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBwcm9wVHlwZXMuZnVuYyxcbiAgICBvbktleURvd246IHByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBhdXRvZm9jdXM6IHByb3BUeXBlcy5ib29sLFxuICAgIHJlc2l6ZTogcHJvcFR5cGVzLmJvb2xcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWFcbiJdfQ==