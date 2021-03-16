"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _styles = _interopRequireDefault(require("./styles.scss"));

var _index = require("../index");

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

console.shallowCloneLog = function () {
  var typeString = Function.prototype.call.bind(Object.prototype.toString);
  console.log.apply(console, Array.prototype.map.call(arguments, function (x) {
    switch (typeString(x).slice(8, -1)) {
      case 'Number':
      case 'String':
      case 'Undefined':
      case 'Null':
      case 'Boolean':
        return x;

      case 'Array':
        return x.slice();

      default:
        var out = Object.create(Object.getPrototypeOf(x));
        out.constructor = x.constructor;

        for (var key in x) {
          out[key] = x[key];
        }

        Object.defineProperty(out, 'constructor', {
          value: x.constructor
        });
        return out;
    }
  }));
};

var Avatar = /*#__PURE__*/function (_React$Component) {
  _inherits(Avatar, _React$Component);

  var _super = _createSuper(Avatar);

  function Avatar(props) {
    var _this;

    _classCallCheck(this, Avatar);

    _this = _super.call(this, props);
    _this.fixPhotoSize = _this.fixPhotoSize.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(Avatar, [{
    key: "onClick",
    value: function onClick(event) {
      event.preventDefault();
      event.stopPropagation();

      if (this.props.clickable) {
        var _this$state;

        this.setState({
          open: !((_this$state = this.state) !== null && _this$state !== void 0 && _this$state.open)
        });
        this.props.onClick();
      }
    }
  }, {
    key: "getInitials",
    value: function getInitials(name) {
      return name.split(" ").map(function (letter, index) {
        return index < 2 ? letter[0] : '';
      }).join("").toUpperCase();
    }
  }, {
    key: "fixPhotoSize",
    value: function fixPhotoSize(event) {
      var nativeEvent = event.nativeEvent;
      var _nativeEvent$path = nativeEvent.path,
          path = _nativeEvent$path === void 0 ? nativeEvent.composedPath() : _nativeEvent$path;
      var image = path[0];
      var naturalWidth = image.naturalWidth,
          naturalHeight = image.naturalHeight;
      var sizes = {
        "xs": "1.5rem",
        "md": "2rem",
        "lg": "2.5rem"
      };
      var parameters = sizes[this.props.size];
      image.style.width = naturalWidth < naturalHeight ? parameters : "auto";
      image.style.height = naturalWidth < naturalHeight ? "auto" : parameters;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2,
          _this2 = this,
          _classnames,
          _this$state3;

      var _this$props = this.props,
          id = _this$props.id,
          avatarVisible = _this$props.avatarVisible,
          open = _this$props.open,
          color = _this$props.color,
          manageOpened = _this$props.manageOpened,
          _this$props$member = _this$props.member,
          avatar = _this$props$member.avatar,
          name = _this$props$member.name,
          title = _this$props$member.title,
          size = _this$props.size,
          canRemove = _this$props.canRemove,
          clickable = _this$props.clickable;
      var hasAvatar = Boolean(avatar);
      var avatarIsVisible = !hasAvatar && avatarVisible;
      var openState = manageOpened ? open : (_this$state2 = this.state) === null || _this$state2 === void 0 ? void 0 : _this$state2.open;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          ref: function ref(elm) {
            return _this2.props.innerRef.current = elm;
          },
          className: (0, _classnames2["default"])((_classnames = {
            "avatar": true
          }, _defineProperty(_classnames, "--".concat(size), true), _defineProperty(_classnames, "--".concat(color), true), _defineProperty(_classnames, "--clickable", clickable), _defineProperty(_classnames, "--selected", openState), _classnames)),
          onClick: this.onClick,
          children: [hasAvatar && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "photo-container",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              title: name,
              onLoad: this.fixPhotoSize,
              className: "member-photo",
              src: (0, _utils.normalizeURL)("/".concat(avatar))
            })
          }), avatarIsVisible && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: (0, _classnames2["default"])({
              "member-container": true,
              "--selected": (_this$state3 = this.state) === null || _this$state3 === void 0 ? void 0 : _this$state3.open
            }),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "initials",
              title: name,
              children: this.getInitials(name)
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: (0, _classnames2["default"])({
              "member-info": true,
              "visible": openState
            }),
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "name",
              children: name
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "title",
              children: title
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            onClick: function onClick(e) {
              e.stopPropagation();
              e.preventDefault();

              _this2.props.onRemove({
                id: id
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: (0, _classnames2["default"])({
                "remove": true,
                "visible": canRemove && openState
              }),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Icon, {
                icon: "x",
                size: "md"
              })
            })
          })]
        })]
      });
    }
  }]);

  return Avatar;
}(React.Component);

Avatar.defaultProps = {
  id: 0,
  clickable: true,
  open: false,
  manageOpened: false,
  size: "xs",
  canRemove: false,
  avatarVisible: true,
  color: "default",
  onRemove: _utils.noop,
  onClick: _utils.noop,
  innerRef: /*#__PURE__*/React.createRef()
};
Avatar.propTypes = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  avatarVisible: _propTypes["default"].bool,
  canRemove: _propTypes["default"].bool,
  clickable: _propTypes["default"].bool,
  manageOpened: _propTypes["default"].bool,
  open: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["xs", "md", "lg"]),
  member: _propTypes["default"].shape({
    name: _propTypes["default"].string.required,
    title: _propTypes["default"].string,
    avatar: _propTypes["default"].string
  }),
  onRemove: _propTypes["default"].func,
  color: _propTypes["default"].oneOf(["default", "primary", "negative"]),
  onClick: _propTypes["default"].func,
  innerRef: _propTypes["default"].object
};
var _default = Avatar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdmF0YXIvQXZhdGFyLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJzaGFsbG93Q2xvbmVMb2ciLCJ0eXBlU3RyaW5nIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJjYWxsIiwiYmluZCIsIk9iamVjdCIsInRvU3RyaW5nIiwibG9nIiwiYXBwbHkiLCJBcnJheSIsIm1hcCIsImFyZ3VtZW50cyIsIngiLCJzbGljZSIsIm91dCIsImNyZWF0ZSIsImdldFByb3RvdHlwZU9mIiwiY29uc3RydWN0b3IiLCJrZXkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiQXZhdGFyIiwicHJvcHMiLCJmaXhQaG90b1NpemUiLCJvbkNsaWNrIiwic3RhdGUiLCJvcGVuIiwiY2xpY2thYmxlIiwic2V0U3RhdGUiLCJuYW1lIiwic3BsaXQiLCJsZXR0ZXIiLCJpbmRleCIsImpvaW4iLCJ0b1VwcGVyQ2FzZSIsImV2ZW50IiwibmF0aXZlRXZlbnQiLCJwYXRoIiwiY29tcG9zZWRQYXRoIiwiaW1hZ2UiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0Iiwic2l6ZXMiLCJwYXJhbWV0ZXJzIiwic2l6ZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJpZCIsImF2YXRhclZpc2libGUiLCJjb2xvciIsIm1hbmFnZU9wZW5lZCIsIm1lbWJlciIsImF2YXRhciIsInRpdGxlIiwiY2FuUmVtb3ZlIiwiaGFzQXZhdGFyIiwiQm9vbGVhbiIsImF2YXRhcklzVmlzaWJsZSIsIm9wZW5TdGF0ZSIsInN0eWxlcyIsImVsbSIsImlubmVyUmVmIiwiY3VycmVudCIsImdldEluaXRpYWxzIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIm9uUmVtb3ZlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJub29wIiwiY3JlYXRlUmVmIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbCIsIm9uZU9mIiwi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InJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHtub29wLCBub3JtYWxpemVVUkx9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XHJcbmltcG9ydCB7SWNvbn0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5jb25zb2xlLnNoYWxsb3dDbG9uZUxvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0eXBlU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKVxyXG4gICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGVTdHJpbmcoeCkuc2xpY2UoOCwgLTEpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ051bWJlcic6XHJcbiAgICAgICAgICAgIGNhc2UgJ1N0cmluZyc6XHJcbiAgICAgICAgICAgIGNhc2UgJ1VuZGVmaW5lZCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ051bGwnOlxyXG4gICAgICAgICAgICBjYXNlICdCb29sZWFuJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB4O1xyXG4gICAgICAgICAgICBjYXNlICdBcnJheSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geC5zbGljZSgpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdmFyIG91dCA9IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHgpKTtcclxuICAgICAgICAgICAgICAgIG91dC5jb25zdHJ1Y3RvciA9IHguY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4geCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dFtrZXldID0geFtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG91dCwgJ2NvbnN0cnVjdG9yJywge3ZhbHVlOiB4LmNvbnN0cnVjdG9yfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgICAgIH1cclxuICAgIH0pKTtcclxufVxyXG5cclxuXHJcbmNsYXNzIEF2YXRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmZpeFBob3RvU2l6ZSA9IHRoaXMuZml4UGhvdG9TaXplLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgb3BlbjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljaygpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGlja2FibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogIXRoaXMuc3RhdGU/Lm9wZW59KVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5pdGlhbHMobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBuYW1lXHJcbiAgICAgICAgICAgIC5zcGxpdChcIiBcIilcclxuICAgICAgICAgICAgLm1hcCgobGV0dGVyLCBpbmRleCkgPT4gaW5kZXggPCAyID8gbGV0dGVyWzBdOiAnJylcclxuICAgICAgICAgICAgLmpvaW4oXCJcIilcclxuICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZml4UGhvdG9TaXplKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3Qge25hdGl2ZUV2ZW50fSA9IGV2ZW50O1xyXG4gICAgICAgIGNvbnN0IHtwYXRoID0gbmF0aXZlRXZlbnQuY29tcG9zZWRQYXRoKCl9ID0gbmF0aXZlRXZlbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlID0gcGF0aFswXTtcclxuICAgICAgICBjb25zdCB7bmF0dXJhbFdpZHRoLCBuYXR1cmFsSGVpZ2h0fSA9IGltYWdlO1xyXG5cclxuICAgICAgICBjb25zdCBzaXplcyA9IHtcclxuICAgICAgICAgICAgXCJ4c1wiOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgICBcIm1kXCI6IFwiMnJlbVwiLFxyXG4gICAgICAgICAgICBcImxnXCI6IFwiMi41cmVtXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBzaXplc1t0aGlzLnByb3BzLnNpemVdXHJcblxyXG4gICAgICAgIGltYWdlLnN0eWxlLndpZHRoID0gbmF0dXJhbFdpZHRoIDwgbmF0dXJhbEhlaWdodCA/IHBhcmFtZXRlcnMgOiBcImF1dG9cIjtcclxuICAgICAgICBpbWFnZS5zdHlsZS5oZWlnaHQgPSBuYXR1cmFsV2lkdGggPCBuYXR1cmFsSGVpZ2h0ID8gXCJhdXRvXCIgOiBwYXJhbWV0ZXJzO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgYXZhdGFyVmlzaWJsZSxcclxuICAgICAgICAgICAgb3BlbixcclxuICAgICAgICAgICAgY29sb3IsXHJcbiAgICAgICAgICAgIG1hbmFnZU9wZW5lZCxcclxuICAgICAgICAgICAgbWVtYmVyOiB7XHJcbiAgICAgICAgICAgICAgICBhdmF0YXIsXHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2l6ZSxcclxuICAgICAgICAgICAgY2FuUmVtb3ZlLFxyXG4gICAgICAgICAgICBjbGlja2FibGVcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgaGFzQXZhdGFyID0gQm9vbGVhbihhdmF0YXIpO1xyXG4gICAgICAgIGNvbnN0IGF2YXRhcklzVmlzaWJsZSA9ICFoYXNBdmF0YXIgJiYgYXZhdGFyVmlzaWJsZTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3BlblN0YXRlID0gbWFuYWdlT3BlbmVkID8gb3BlbiA6IHRoaXMuc3RhdGU/Lm9wZW47XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMucHJvcHMuaW5uZXJSZWYuY3VycmVudCA9IGVsbX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhclwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYC0tJHtzaXplfWBdOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYC0tJHtjb2xvcn1gXTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCItLWNsaWNrYWJsZVwiOiBjbGlja2FibGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1zZWxlY3RlZFwiOiBvcGVuU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtoYXNBdmF0YXIgJiYgPGRpdiBjbGFzc05hbWU9XCJwaG90by1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQ9e3RoaXMuZml4UGhvdG9TaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVtYmVyLXBob3RvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bm9ybWFsaXplVVJMKGAvJHthdmF0YXJ9YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHthdmF0YXJJc1Zpc2libGUgJiYgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1lbWJlci1jb250YWluZXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCItLXNlbGVjdGVkXCI6IHRoaXMuc3RhdGU/Lm9wZW5cclxuICAgICAgICAgICAgICAgICAgICB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluaXRpYWxzXCIgdGl0bGU9e25hbWV9Pnt0aGlzLmdldEluaXRpYWxzKG5hbWUpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lbWJlci1pbmZvXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogb3BlblN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmFtZVwiPntuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdmUgY2xpY2tlZFwiLCBpZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlbW92ZSh7aWR9KTtcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVtb3ZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGNhblJlbW92ZSAmJiBvcGVuU3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5BdmF0YXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaWQ6IDAsXHJcbiAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICBvcGVuOiBmYWxzZSxcclxuICAgIG1hbmFnZU9wZW5lZDogZmFsc2UsXHJcbiAgICBzaXplOiBcInhzXCIsXHJcbiAgICBjYW5SZW1vdmU6IGZhbHNlLFxyXG4gICAgYXZhdGFyVmlzaWJsZTogdHJ1ZSxcclxuICAgIGNvbG9yOiBcImRlZmF1bHRcIixcclxuICAgIG9uUmVtb3ZlOiBub29wLFxyXG4gICAgb25DbGljazogbm9vcCxcclxuICAgIGlubmVyUmVmOiBSZWFjdC5jcmVhdGVSZWYoKVxyXG59XHJcblxyXG5BdmF0YXIucHJvcFR5cGVzID0ge1xyXG4gICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcclxuICAgIGF2YXRhclZpc2libGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgY2FuUmVtb3ZlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGNsaWNrYWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wieHNcIiwgXCJtZFwiLCBcImxnXCJdKSxcclxuICAgIG1lbWJlcjogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLnJlcXVpcmVkLFxyXG4gICAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGF2YXRhcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLFxyXG4gICAgb25SZW1vdmU6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXCJkZWZhdWx0XCIsIFwicHJpbWFyeVwiLCBcIm5lZ2F0aXZlXCJdKSxcclxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgaW5uZXJSZWY6IFByb3BUeXBlcy5vYmplY3RcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyIl19