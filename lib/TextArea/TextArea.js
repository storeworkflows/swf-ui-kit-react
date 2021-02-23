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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZXh0QXJlYS9UZXh0QXJlYS5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsInByb3BzIiwidGV4dEFyZWFSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIm9uQ2hhbmdlIiwiYmluZCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJzdGF0ZSIsInZhbHVlIiwicGFyZW50SGVpZ2h0IiwidGV4dGFyZWFIZWlnaHQiLCJmb2N1c2VkIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm9uS2V5RG93biIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiYXV0b2ZvY3VzIiwiY3VycmVudCIsImZvY3VzIiwiX2hhc0xhYmVsIiwiQm9vbGVhbiIsImxhYmVsIiwic3R5bGVzIiwibWluSGVpZ2h0IiwiY2xhc3NOYW1lIiwicmVzaXplIiwiZWxtIiwibmFtZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImF1dG9yZXNpemUiLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFE7Ozs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFdBQUwsZ0JBQW1CQyxLQUFLLENBQUNDLFNBQU4sRUFBbkI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrQkFBaEI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLCtCQUFmO0FBQ0EsVUFBS0UsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUYsSUFBWiwrQkFBZDtBQUNBLFVBQUtHLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxLQUFLLEVBQUUsRUFERTtBQUVUQyxNQUFBQSxZQUFZLEVBQUUsTUFGTDtBQUdUQyxNQUFBQSxjQUFjLEVBQUUsTUFIUDtBQUlUQyxNQUFBQSxPQUFPLEVBQUU7QUFKQSxLQUFiO0FBTmU7QUFZbEI7Ozs7V0FFRCxrQkFBVUMsS0FBVixFQUFpQjtBQUNiLFdBQUtDLFFBQUwsQ0FBYztBQUFDTCxRQUFBQSxLQUFLLEVBQUVJLEtBQUssQ0FBQ0UsTUFBTixDQUFhTjtBQUFyQixPQUFkO0FBQ0EsV0FBS1QsS0FBTCxDQUFXZ0IsU0FBWCxDQUFxQkgsS0FBckI7QUFDSDs7O1dBQ0QsaUJBQVFBLEtBQVIsRUFBZTtBQUNYLFdBQUtDLFFBQUwsQ0FBYztBQUFDRixRQUFBQSxPQUFPLEVBQUU7QUFBVixPQUFkO0FBQ0g7OztXQUVELGtCQUFVO0FBQ04sV0FBS0UsUUFBTCxDQUFjO0FBQUNGLFFBQUFBLE9BQU8sRUFBRTtBQUFWLE9BQWQ7QUFDSDs7O1dBRUQsNEJBQW1CSyxTQUFuQixFQUE4QkMsU0FBOUIsRUFBeUNDLFFBQXpDLEVBQW1EO0FBQy9DLFVBQUksS0FBS25CLEtBQUwsQ0FBV29CLFNBQVgsSUFBd0IsS0FBS25CLFdBQUwsQ0FBaUJvQixPQUE3QyxFQUFzRDtBQUNsRCxrQ0FBUyxLQUFLcEIsV0FBTCxDQUFpQm9CLE9BQTFCO0FBQ0g7QUFDSjs7O1dBRUQsNkJBQW9CO0FBQ2hCLFVBQUksS0FBS3JCLEtBQUwsQ0FBV29CLFNBQVgsSUFBd0IsS0FBS25CLFdBQUwsQ0FBaUJvQixPQUE3QyxFQUFzRDtBQUNsRCxhQUFLcEIsV0FBTCxDQUFpQm9CLE9BQWpCLENBQXlCQyxLQUF6QjtBQUNBLGtDQUFTLEtBQUtyQixXQUFMLENBQWlCb0IsT0FBMUI7QUFDSDtBQUNKOzs7V0FFRCxrQkFBUztBQUFBO0FBQUE7O0FBQ0wsVUFBTUUsU0FBUyxHQUFHQyxPQUFPLENBQUMsS0FBS3hCLEtBQUwsQ0FBV3lCLEtBQVosQ0FBekI7O0FBQ0EsMEJBQ0k7QUFBQSxnQ0FDSTtBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0JDO0FBQXhCLFVBREosZUFFSTtBQUNJLFVBQUEsU0FBUyxFQUFDLFlBRGQ7QUFFSSxVQUFBLEtBQUssRUFBRTtBQUNIQyxZQUFBQSxTQUFTLEVBQUUsS0FBS25CLEtBQUwsQ0FBV0U7QUFEbkIsV0FGWDtBQUFBLHFCQU1LYSxTQUFTLGlCQUFJO0FBQU8sWUFBQSxPQUFPLEVBQUMsTUFBZjtBQUFzQixZQUFBLFNBQVMsRUFBRSw2QkFBVztBQUN0RCx5QkFBVyxLQUFLZixLQUFMLENBQVdJLE9BQVgsSUFBdUIsS0FBS1osS0FBTCxDQUFXUyxLQUFYLElBQW9CLEtBQUtELEtBQUwsQ0FBV0MsS0FEWDtBQUV0RCwyQkFBYSxLQUFLRCxLQUFMLENBQVdJO0FBRjhCLGFBQVgsQ0FBakM7QUFBQSxzQkFHVCxLQUFLWixLQUFMLENBQVd5QjtBQUhGLFlBTmxCLGVBVUk7QUFDSSxZQUFBLFNBQVMsRUFBRTtBQUNQLDhCQUFnQjtBQURULDRDQUVOLEtBQUt6QixLQUFMLENBQVc0QixTQUZMLEVBRWlCLElBRmpCLGdDQUdQLFFBSE8sRUFHRyxLQUFLNUIsS0FBTCxDQUFXNkIsTUFIZCxnQkFEZjtBQU1JLFlBQUEsR0FBRyxFQUFFLGFBQUNDLEdBQUQ7QUFBQSxxQkFBUyxNQUFJLENBQUM3QixXQUFMLENBQWlCb0IsT0FBakIsR0FBMkJTLEdBQXBDO0FBQUEsYUFOVDtBQU9JLFlBQUEsSUFBSSxFQUFFLEtBQUs5QixLQUFMLENBQVcrQixJQVByQjtBQVFJLFlBQUEsS0FBSyxFQUFFLEtBQUsvQixLQUFMLENBQVdTLEtBQVgsSUFBb0IsS0FBS0QsS0FBTCxDQUFXQyxLQVIxQztBQVNJLFlBQUEsT0FBTyxFQUFFLEtBQUtMLFFBVGxCO0FBVUksWUFBQSxTQUFTLEVBQUUsS0FBS0EsUUFWcEI7QUFXSSxZQUFBLE9BQU8sRUFBRSxLQUFLRSxPQVhsQjtBQVlJLFlBQUEsTUFBTSxFQUFFLEtBQUtDO0FBWmpCLFlBVko7QUFBQSxVQUZKO0FBQUEsUUFESjtBQThCSDs7OztFQXhFa0JMLEtBQUssQ0FBQzhCLFM7O0FBMkU3QmpDLFFBQVEsQ0FBQ2tDLFlBQVQsR0FBd0I7QUFDcEJDLEVBQUFBLFVBQVUsRUFBRSxLQURRO0FBRXBCZCxFQUFBQSxTQUFTLEVBQUUsSUFGUztBQUdwQlEsRUFBQUEsU0FBUyxFQUFFLEVBSFM7QUFJcEJ4QixFQUFBQSxRQUFRLEVBQUU7QUFBQSxXQUFNLEtBQUssQ0FBWDtBQUFBLEdBSlU7QUFLcEJZLEVBQUFBLFNBQVMsRUFBRTtBQUFBLFdBQU0sS0FBSyxDQUFYO0FBQUEsR0FMUztBQU1wQmUsRUFBQUEsSUFBSSxFQUFFLEVBTmM7QUFPcEJ0QixFQUFBQSxLQUFLLEVBQUUsRUFQYTtBQVFwQm9CLEVBQUFBLE1BQU0sRUFBRSxJQVJZO0FBU3BCSixFQUFBQSxLQUFLLEVBQUU7QUFUYSxDQUF4QjtBQVlBMUIsUUFBUSxDQUFDb0MsU0FBVCxHQUFxQjtBQUNqQkQsRUFBQUEsVUFBVSxFQUFFQyxzQkFBVUMsSUFETDtBQUVqQjNCLEVBQUFBLEtBQUssRUFBRTBCLHNCQUFVRSxNQUZBO0FBR2pCWixFQUFBQSxLQUFLLEVBQUVVLHNCQUFVRSxNQUhBO0FBSWpCTixFQUFBQSxJQUFJLEVBQUVJLHNCQUFVRSxNQUpDO0FBS2pCakMsRUFBQUEsUUFBUSxFQUFFK0Isc0JBQVVHLElBTEg7QUFNakJ0QixFQUFBQSxTQUFTLEVBQUVtQixzQkFBVUcsSUFOSjtBQU9qQlYsRUFBQUEsU0FBUyxFQUFFTyxzQkFBVUUsTUFQSjtBQVFqQmpCLEVBQUFBLFNBQVMsRUFBRWUsc0JBQVVDLElBUko7QUFTakJQLEVBQUFBLE1BQU0sRUFBRU0sc0JBQVVDO0FBVEQsQ0FBckI7ZUFZZXJDLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IGF1dG9zaXplIGZyb20gXCJhdXRvc2l6ZS9kaXN0L2F1dG9zaXplXCI7XHJcblxyXG5jbGFzcyBUZXh0QXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnRleHRBcmVhUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhcmVudEhlaWdodDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIHRleHRhcmVhSGVpZ2h0OiBcImF1dG9cIixcclxuICAgICAgICAgICAgZm9jdXNlZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UgKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZXZlbnQpXHJcbiAgICB9XHJcbiAgICBvbkZvY3VzKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogdHJ1ZX0pXHJcbiAgICB9XHJcblxyXG4gICAgb25CbHVyICgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiBmYWxzZX0pXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9mb2N1cyAmJiB0aGlzLnRleHRBcmVhUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgYXV0b3NpemUodGhpcy50ZXh0QXJlYVJlZi5jdXJyZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b2ZvY3VzICYmIHRoaXMudGV4dEFyZWFSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRBcmVhUmVmLmN1cnJlbnQuZm9jdXMoKVxyXG4gICAgICAgICAgICBhdXRvc2l6ZSh0aGlzLnRleHRBcmVhUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgX2hhc0xhYmVsID0gQm9vbGVhbih0aGlzLnByb3BzLmxhYmVsKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHRoaXMuc3RhdGUucGFyZW50SGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7X2hhc0xhYmVsICYmIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1tb3ZlZFwiOiB0aGlzLnN0YXRlLmZvY3VzZWQgfHwgKHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5zdGF0ZS52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1mb2N1c2VkXCI6IHRoaXMuc3RhdGUuZm9jdXNlZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfT57dGhpcy5wcm9wcy5sYWJlbH08L2xhYmVsPn1cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1jb250cm9sXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5jbGFzc05hbWVdOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXNpemVcIjogdGhpcy5wcm9wcy5yZXNpemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17KGVsbSkgPT4gdGhpcy50ZXh0QXJlYVJlZi5jdXJyZW50ID0gZWxtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5UZXh0QXJlYS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBhdXRvcmVzaXplOiBmYWxzZSxcclxuICAgIGF1dG9mb2N1czogdHJ1ZSxcclxuICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgIG9uQ2hhbmdlOiAoKSA9PiB2b2lkIDAsXHJcbiAgICBvbktleURvd246ICgpID0+IHZvaWQgMCxcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIHJlc2l6ZTogdHJ1ZSxcclxuICAgIGxhYmVsOiBcIlwiXHJcbn1cclxuXHJcblRleHRBcmVhLnByb3BUeXBlcyA9IHtcclxuICAgIGF1dG9yZXNpemU6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgdmFsdWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG5hbWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbkNoYW5nZTogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbktleURvd246IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYXV0b2ZvY3VzOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlc2l6ZTogcHJvcFR5cGVzLmJvb2xcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWFcclxuIl19