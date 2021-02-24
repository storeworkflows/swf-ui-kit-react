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
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Icon, {
            onClick: function onClick(e) {
              _this2.props.onRemove({
                id: id
              });

              e.stopPropagation();
            },
            className: (0, _classnames2["default"])({
              "remove": true,
              "visible": canRemove && openState
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdmF0YXIvQXZhdGFyLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJzaGFsbG93Q2xvbmVMb2ciLCJ0eXBlU3RyaW5nIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJjYWxsIiwiYmluZCIsIk9iamVjdCIsInRvU3RyaW5nIiwibG9nIiwiYXBwbHkiLCJBcnJheSIsIm1hcCIsImFyZ3VtZW50cyIsIngiLCJzbGljZSIsIm91dCIsImNyZWF0ZSIsImdldFByb3RvdHlwZU9mIiwiY29uc3RydWN0b3IiLCJrZXkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiQXZhdGFyIiwicHJvcHMiLCJmaXhQaG90b1NpemUiLCJvbkNsaWNrIiwic3RhdGUiLCJvcGVuIiwiY2xpY2thYmxlIiwic2V0U3RhdGUiLCJuYW1lIiwic3BsaXQiLCJpIiwiam9pbiIsInRvVXBwZXJDYXNlIiwiZXZlbnQiLCJuYXRpdmVFdmVudCIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJpbWFnZSIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJzaXplcyIsInBhcmFtZXRlcnMiLCJzaXplIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImF2YXRhclZpc2libGUiLCJjb2xvciIsIm1hbmFnZU9wZW5lZCIsIm1lbWJlciIsImF2YXRhciIsInRpdGxlIiwiaWQiLCJjYW5SZW1vdmUiLCJoYXNBdmF0YXIiLCJCb29sZWFuIiwiYXZhdGFySXNWaXNpYmxlIiwib3BlblN0YXRlIiwic3R5bGVzIiwiZ2V0SW5pdGlhbHMiLCJlIiwib25SZW1vdmUiLCJzdG9wUHJvcGFnYXRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm5vb3AiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwib25lT2YiLCJzaGFwZSIsInN0cmluZyIsInJlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FB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QSxNQUFNLEVBQUVtQixzQkFBVUcsS0FBVixDQUFnQjtBQUNwQjNDLElBQUFBLElBQUksRUFBRXdDLHNCQUFVSSxNQUFWLENBQWlCQyxRQURIO0FBRXBCdEIsSUFBQUEsS0FBSyxFQUFFaUIsc0JBQVVJLE1BRkc7QUFHcEJ0QixJQUFBQSxNQUFNLEVBQUVrQixzQkFBVUksTUFIRTtBQUlwQnBCLElBQUFBLEVBQUUsRUFBRWdCLHNCQUFVSSxNQUFWLENBQWlCQztBQUpELEdBQWhCLENBUE87QUFhZlosRUFBQUEsUUFBUSxFQUFFTyxzQkFBVU0sSUFiTDtBQWNmM0IsRUFBQUEsS0FBSyxFQUFFcUIsc0JBQVVFLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixVQUF2QixDQUFoQixDQWRRO0FBZWYvQyxFQUFBQSxPQUFPLEVBQUU2QyxzQkFBVU07QUFmSixDQUFuQjtlQWtCZXRELE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge25vb3AsIG5vcm1hbGl6ZVVSTH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IHtJY29ufSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcbmNvbnNvbGUuc2hhbGxvd0Nsb25lTG9nID0gZnVuY3Rpb24oKXtcclxuICAgIHZhciB0eXBlU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKVxyXG4gICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24oeCl7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlU3RyaW5nKHgpLnNsaWNlKDgsIC0xKSkge1xyXG4gICAgICAgICAgICBjYXNlICdOdW1iZXInOiBjYXNlICdTdHJpbmcnOiBjYXNlICdVbmRlZmluZWQnOiBjYXNlICdOdWxsJzogY2FzZSAnQm9vbGVhbic6IHJldHVybiB4O1xyXG4gICAgICAgICAgICBjYXNlICdBcnJheSc6IHJldHVybiB4LnNsaWNlKCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB2YXIgb3V0ID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YoeCkpO1xyXG4gICAgICAgICAgICAgICAgb3V0LmNvbnN0cnVjdG9yID0geC5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0W2tleV0gPSB4W2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3V0LCAnY29uc3RydWN0b3InLCB7dmFsdWU6IHguY29uc3RydWN0b3J9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSkpO1xyXG59XHJcblxyXG5cclxuY2xhc3MgQXZhdGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuZml4UGhvdG9TaXplID0gdGhpcy5maXhQaG90b1NpemUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNsaWNrYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiAhdGhpcy5zdGF0ZT8ub3Blbn0pXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJbml0aWFscyhuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWVcclxuICAgICAgICAgICAgLnNwbGl0KFwiIFwiKVxyXG4gICAgICAgICAgICAubWFwKGkgPT4gaVswXSlcclxuICAgICAgICAgICAgLmpvaW4oXCJcIilcclxuICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZml4UGhvdG9TaXplKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3Qge25hdGl2ZUV2ZW50fSA9IGV2ZW50O1xyXG4gICAgICAgIGNvbnN0IHsgcGF0aCA9IG5hdGl2ZUV2ZW50LmNvbXBvc2VkUGF0aCgpIH0gPSBuYXRpdmVFdmVudDtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBwYXRoWzBdO1xyXG4gICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoLCBuYXR1cmFsSGVpZ2h0IH0gPSBpbWFnZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2l6ZXMgPSB7XHJcbiAgICAgICAgICAgIFwieHNcIjogXCIxLjVyZW1cIixcclxuICAgICAgICAgICAgXCJtZFwiOiBcIjJyZW1cIixcclxuICAgICAgICAgICAgXCJsZ1wiOiBcIjIuNXJlbVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gc2l6ZXNbdGhpcy5wcm9wcy5zaXplXVxyXG5cclxuICAgICAgICBpbWFnZS5zdHlsZS53aWR0aCA9IG5hdHVyYWxXaWR0aCA8IG5hdHVyYWxIZWlnaHQgPyBwYXJhbWV0ZXJzIDogXCJhdXRvXCI7XHJcbiAgICAgICAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gbmF0dXJhbFdpZHRoIDwgbmF0dXJhbEhlaWdodCA/IFwiYXV0b1wiIDogcGFyYW1ldGVycztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgYXZhdGFyVmlzaWJsZSxcclxuICAgICAgICAgICAgb3BlbixcclxuICAgICAgICAgICAgY29sb3IsXHJcbiAgICAgICAgICAgIG1hbmFnZU9wZW5lZCxcclxuICAgICAgICAgICAgbWVtYmVyOiB7XHJcbiAgICAgICAgICAgICAgICBhdmF0YXIsXHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaXplLFxyXG4gICAgICAgICAgICBjYW5SZW1vdmUsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZVxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBoYXNBdmF0YXIgPSBCb29sZWFuKGF2YXRhcik7XHJcbiAgICAgICAgY29uc3QgYXZhdGFySXNWaXNpYmxlID0gIWhhc0F2YXRhciAmJiBhdmF0YXJWaXNpYmxlO1xyXG5cclxuICAgICAgICBjb25zdCBvcGVuU3RhdGUgPSBtYW5hZ2VPcGVuZWQgPyBvcGVuIDogdGhpcy5zdGF0ZT8ub3BlbjtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7c2l6ZX1gXTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7Y29sb3J9YF06IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1jbGlja2FibGVcIjogY2xpY2thYmxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tc2VsZWN0ZWRcIjogb3BlblN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aGFzQXZhdGFyICYmIDxkaXYgY2xhc3NOYW1lPVwicGhvdG8tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkPXt0aGlzLmZpeFBob3RvU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbWJlci1waG90b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e25vcm1hbGl6ZVVSTChgLyR7YXZhdGFyfWApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7YXZhdGFySXNWaXNpYmxlICYmIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZW1iZXItY29udGFpbmVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1zZWxlY3RlZFwiOiB0aGlzLnN0YXRlPy5vcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbml0aWFsc1wiIHRpdGxlPXtuYW1lfT57dGhpcy5nZXRJbml0aWFscyhuYW1lKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZW1iZXItaW5mb1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IG9wZW5TdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj57bmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlbW92ZSh7aWR9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVtb3ZlXCI6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBjYW5SZW1vdmUgJiYgb3BlblN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwieFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbkF2YXRhci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICBvcGVuOiBmYWxzZSxcclxuICAgIG1hbmFnZU9wZW5lZDogZmFsc2UsXHJcbiAgICBzaXplOiBcInhzXCIsXHJcbiAgICBjYW5SZW1vdmU6IGZhbHNlLFxyXG4gICAgYXZhdGFyVmlzaWJsZTogdHJ1ZSxcclxuICAgIGNvbG9yOiBcImRlZmF1bHRcIixcclxuICAgIG9uUmVtb3ZlOiBub29wLFxyXG4gICAgb25DbGljazogbm9vcFxyXG59XHJcblxyXG5BdmF0YXIucHJvcFR5cGVzID0ge1xyXG4gICAgYXZhdGFyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjYW5SZW1vdmU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgY2xpY2thYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZU9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJ4c1wiLCBcIm1kXCIsIFwibGdcIl0pLFxyXG4gICAgbWVtYmVyOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcucmVxdWlyZWQsXHJcbiAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgYXZhdGFyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLnJlcXVpcmVkXHJcbiAgICB9KSxcclxuICAgIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1wiZGVmYXVsdFwiLCBcInByaW1hcnlcIiwgXCJuZWdhdGl2ZVwiXSksXHJcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdmF0YXIiXX0=