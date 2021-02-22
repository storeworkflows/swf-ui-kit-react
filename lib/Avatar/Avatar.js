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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
    value: function onClick() {
      var _this$state;

      this.setState({
        open: !((_this$state = this.state) !== null && _this$state !== void 0 && _this$state.open)
      });
      this.props.onClick();
    }
  }, {
    key: "getInitials",
    value: function getInitials(name) {
      return name.split(" ").map(function (i) {
        return i[0];
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
          _classnames,
          _this$state3,
          _this2 = this;

      var _this$props = this.props,
          avatarVisible = _this$props.avatarVisible,
          open = _this$props.open,
          color = _this$props.color,
          manageOpened = _this$props.manageOpened,
          _this$props$member = _this$props.member,
          avatar = _this$props$member.avatar,
          name = _this$props$member.name,
          title = _this$props$member.title,
          id = _this$props$member.id,
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
          className: (0, _classnames2["default"])((_classnames = {
            "avatar": true
          }, _defineProperty(_classnames, "--".concat(size), true), _defineProperty(_classnames, "--".concat(color), true), _defineProperty(_classnames, "--selected", openState), _classnames)),
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
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Icon, {
            onClick: function onClick(e) {
              _this2.props.onRemove({
                id: id
              });

              e.stopPropagation();
            },
            className: (0, _classnames2["default"])({
              "remove": true,
              "visible": openState
            }),
            icon: "x",
            size: "md"
          })]
        })]
      });
    }
  }]);

  return Avatar;
}(React.Component);

Avatar.defaultProps = {
  clickable: true,
  open: false,
  manageOpened: false,
  size: "xs",
  canRemove: false,
  avatarVisible: true,
  color: "default",
  onRemove: _utils.noop,
  onClick: _utils.noop
};
Avatar.propTypes = {
  avatarVisible: _propTypes["default"].bool,
  canRemove: _propTypes["default"].bool,
  clickable: _propTypes["default"].bool,
  manageOpened: _propTypes["default"].bool,
  open: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["xs", "md", "lg"]),
  member: _propTypes["default"].shape({
    name: _propTypes["default"].string.required,
    title: _propTypes["default"].string,
    avatar: _propTypes["default"].string,
    id: _propTypes["default"].string.required
  }),
  onRemove: _propTypes["default"].func,
  color: _propTypes["default"].oneOf(["default", "primary", "negative"]),
  onClick: _propTypes["default"].func
};
var _default = Avatar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdmF0YXIvQXZhdGFyLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJzaGFsbG93Q2xvbmVMb2ciLCJ0eXBlU3RyaW5nIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJjYWxsIiwiYmluZCIsIk9iamVjdCIsInRvU3RyaW5nIiwibG9nIiwiYXBwbHkiLCJBcnJheSIsIm1hcCIsImFyZ3VtZW50cyIsIngiLCJzbGljZSIsIm91dCIsImNyZWF0ZSIsImdldFByb3RvdHlwZU9mIiwiY29uc3RydWN0b3IiLCJrZXkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiQXZhdGFyIiwicHJvcHMiLCJmaXhQaG90b1NpemUiLCJvbkNsaWNrIiwic3RhdGUiLCJvcGVuIiwic2V0U3RhdGUiLCJuYW1lIiwic3BsaXQiLCJpIiwiam9pbiIsInRvVXBwZXJDYXNlIiwiZXZlbnQiLCJuYXRpdmVFdmVudCIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJpbWFnZSIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJzaXplcyIsInBhcmFtZXRlcnMiLCJzaXplIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImF2YXRhclZpc2libGUiLCJjb2xvciIsIm1hbmFnZU9wZW5lZCIsIm1lbWJlciIsImF2YXRhciIsInRpdGxlIiwiaWQiLCJjYW5SZW1vdmUiLCJjbGlja2FibGUiLCJoYXNBdmF0YXIiLCJCb29sZWFuIiwiYXZhdGFySXNWaXNpYmxlIiwib3BlblN0YXRlIiwic3R5bGVzIiwiZ2V0SW5pdGlhbHMiLCJlIiwib25SZW1vdmUiLCJzdG9wUHJvcGFnYXRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm5vb3AiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwib25lT2YiLCJzaGFwZSIsInN0cmluZyIsInJlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FB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O0FBRXBCdkIsSUFBQUEsS0FBSyxFQUFFa0Isc0JBQVVJLE1BRkc7QUFHcEJ2QixJQUFBQSxNQUFNLEVBQUVtQixzQkFBVUksTUFIRTtBQUlwQnJCLElBQUFBLEVBQUUsRUFBRWlCLHNCQUFVSSxNQUFWLENBQWlCQztBQUpELEdBQWhCLENBUE87QUFhZlosRUFBQUEsUUFBUSxFQUFFTyxzQkFBVU0sSUFiTDtBQWNmNUIsRUFBQUEsS0FBSyxFQUFFc0Isc0JBQVVFLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixVQUF2QixDQUFoQixDQWRRO0FBZWYvQyxFQUFBQSxPQUFPLEVBQUU2QyxzQkFBVU07QUFmSixDQUFuQjtlQWtCZXRELE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQge25vb3AsIG5vcm1hbGl6ZVVSTH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQge0ljb259IGZyb20gXCIuLi9pbmRleFwiO1xuXG5jb25zb2xlLnNoYWxsb3dDbG9uZUxvZyA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHR5cGVTdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpXG4gICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24oeCl7XG4gICAgICAgIHN3aXRjaCAodHlwZVN0cmluZyh4KS5zbGljZSg4LCAtMSkpIHtcbiAgICAgICAgICAgIGNhc2UgJ051bWJlcic6IGNhc2UgJ1N0cmluZyc6IGNhc2UgJ1VuZGVmaW5lZCc6IGNhc2UgJ051bGwnOiBjYXNlICdCb29sZWFuJzogcmV0dXJuIHg7XG4gICAgICAgICAgICBjYXNlICdBcnJheSc6IHJldHVybiB4LnNsaWNlKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHZhciBvdXQgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih4KSk7XG4gICAgICAgICAgICAgICAgb3V0LmNvbnN0cnVjdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4geCkge1xuICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9IHhba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG91dCwgJ2NvbnN0cnVjdG9yJywge3ZhbHVlOiB4LmNvbnN0cnVjdG9yfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfVxuICAgIH0pKTtcbn1cblxuXG5jbGFzcyBBdmF0YXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5maXhQaG90b1NpemUgPSB0aGlzLmZpeFBob3RvU2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiAhdGhpcy5zdGF0ZT8ub3Blbn0pXG4gICAgICAgIHRoaXMucHJvcHMub25DbGljaygpO1xuICAgIH1cblxuICAgIGdldEluaXRpYWxzKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5hbWVcbiAgICAgICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgICAgIC5tYXAoaSA9PiBpWzBdKVxuICAgICAgICAgICAgLmpvaW4oXCJcIilcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIGZpeFBob3RvU2l6ZShldmVudCkge1xuICAgICAgICBjb25zdCB7bmF0aXZlRXZlbnR9ID0gZXZlbnQ7XG4gICAgICAgIGNvbnN0IHsgcGF0aCA9IG5hdGl2ZUV2ZW50LmNvbXBvc2VkUGF0aCgpIH0gPSBuYXRpdmVFdmVudDtcblxuICAgICAgICBjb25zdCBpbWFnZSA9IHBhdGhbMF07XG4gICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoLCBuYXR1cmFsSGVpZ2h0IH0gPSBpbWFnZTtcblxuICAgICAgICBjb25zdCBzaXplcyA9IHtcbiAgICAgICAgICAgIFwieHNcIjogXCIxLjVyZW1cIixcbiAgICAgICAgICAgIFwibWRcIjogXCIycmVtXCIsXG4gICAgICAgICAgICBcImxnXCI6IFwiMi41cmVtXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBzaXplc1t0aGlzLnByb3BzLnNpemVdXG5cbiAgICAgICAgaW1hZ2Uuc3R5bGUud2lkdGggPSBuYXR1cmFsV2lkdGggPCBuYXR1cmFsSGVpZ2h0ID8gcGFyYW1ldGVycyA6IFwiYXV0b1wiO1xuICAgICAgICBpbWFnZS5zdHlsZS5oZWlnaHQgPSBuYXR1cmFsV2lkdGggPCBuYXR1cmFsSGVpZ2h0ID8gXCJhdXRvXCIgOiBwYXJhbWV0ZXJzO1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhdmF0YXJWaXNpYmxlLFxuICAgICAgICAgICAgb3BlbixcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgbWFuYWdlT3BlbmVkLFxuICAgICAgICAgICAgbWVtYmVyOiB7XG4gICAgICAgICAgICAgICAgYXZhdGFyLFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaXplLFxuICAgICAgICAgICAgY2FuUmVtb3ZlLFxuICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGhhc0F2YXRhciA9IEJvb2xlYW4oYXZhdGFyKTtcbiAgICAgICAgY29uc3QgYXZhdGFySXNWaXNpYmxlID0gIWhhc0F2YXRhciAmJiBhdmF0YXJWaXNpYmxlO1xuXG4gICAgICAgIGNvbnN0IG9wZW5TdGF0ZSA9IG1hbmFnZU9wZW5lZCA/IG9wZW4gOiB0aGlzLnN0YXRlPy5vcGVuO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgLS0ke3NpemV9YF06IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBbYC0tJHtjb2xvcn1gXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1zZWxlY3RlZFwiOiBvcGVuU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aGFzQXZhdGFyICYmIDxkaXYgY2xhc3NOYW1lPVwicGhvdG8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkPXt0aGlzLmZpeFBob3RvU2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW1iZXItcGhvdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bm9ybWFsaXplVVJMKGAvJHthdmF0YXJ9YCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIHthdmF0YXJJc1Zpc2libGUgJiYgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZW1iZXItY29udGFpbmVyXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tc2VsZWN0ZWRcIjogdGhpcy5zdGF0ZT8ub3BlblxuICAgICAgICAgICAgICAgICAgICB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbml0aWFsc1wiIHRpdGxlPXtuYW1lfT57dGhpcy5nZXRJbml0aWFscyhuYW1lKX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lbWJlci1pbmZvXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IG9wZW5TdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmFtZVwiPntuYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25SZW1vdmUoe2lkfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZW1vdmVcIjp0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBvcGVuU3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5BdmF0YXIuZGVmYXVsdFByb3BzID0ge1xuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBvcGVuOiBmYWxzZSxcbiAgICBtYW5hZ2VPcGVuZWQ6IGZhbHNlLFxuICAgIHNpemU6IFwieHNcIixcbiAgICBjYW5SZW1vdmU6IGZhbHNlLFxuICAgIGF2YXRhclZpc2libGU6IHRydWUsXG4gICAgY29sb3I6IFwiZGVmYXVsdFwiLFxuICAgIG9uUmVtb3ZlOiBub29wLFxuICAgIG9uQ2xpY2s6IG5vb3Bcbn1cblxuQXZhdGFyLnByb3BUeXBlcyA9IHtcbiAgICBhdmF0YXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjYW5SZW1vdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsaWNrYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbWFuYWdlT3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wieHNcIiwgXCJtZFwiLCBcImxnXCJdKSxcbiAgICBtZW1iZXI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcucmVxdWlyZWQsXG4gICAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBhdmF0YXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLnJlcXVpcmVkXG4gICAgfSksXG4gICAgb25SZW1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1wiZGVmYXVsdFwiLCBcInByaW1hcnlcIiwgXCJuZWdhdGl2ZVwiXSksXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyIl19