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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdmF0YXIvQXZhdGFyLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJzaGFsbG93Q2xvbmVMb2ciLCJ0eXBlU3RyaW5nIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJjYWxsIiwiYmluZCIsIk9iamVjdCIsInRvU3RyaW5nIiwibG9nIiwiYXBwbHkiLCJBcnJheSIsIm1hcCIsImFyZ3VtZW50cyIsIngiLCJzbGljZSIsIm91dCIsImNyZWF0ZSIsImdldFByb3RvdHlwZU9mIiwiY29uc3RydWN0b3IiLCJrZXkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiQXZhdGFyIiwicHJvcHMiLCJmaXhQaG90b1NpemUiLCJvbkNsaWNrIiwic3RhdGUiLCJvcGVuIiwiY2xpY2thYmxlIiwic2V0U3RhdGUiLCJuYW1lIiwic3BsaXQiLCJpIiwiam9pbiIsInRvVXBwZXJDYXNlIiwiZXZlbnQiLCJuYXRpdmVFdmVudCIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJpbWFnZSIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJzaXplcyIsInBhcmFtZXRlcnMiLCJzaXplIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImF2YXRhclZpc2libGUiLCJjb2xvciIsIm1hbmFnZU9wZW5lZCIsIm1lbWJlciIsImF2YXRhciIsInRpdGxlIiwiaWQiLCJjYW5SZW1vdmUiLCJoYXNBdmF0YXIiLCJCb29sZWFuIiwiYXZhdGFySXNWaXNpYmxlIiwib3BlblN0YXRlIiwic3R5bGVzIiwiZ2V0SW5pdGlhbHMiLCJlIiwib25SZW1vdmUiLCJzdG9wUHJvcGFnYXRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm5vb3AiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwib25lT2YiLCJzaGFwZSIsInN0cmluZyIsInJlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FB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QSxNQUFNLEVBQUVtQixzQkFBVUcsS0FBVixDQUFnQjtBQUNwQjNDLElBQUFBLElBQUksRUFBRXdDLHNCQUFVSSxNQUFWLENBQWlCQyxRQURIO0FBRXBCdEIsSUFBQUEsS0FBSyxFQUFFaUIsc0JBQVVJLE1BRkc7QUFHcEJ0QixJQUFBQSxNQUFNLEVBQUVrQixzQkFBVUksTUFIRTtBQUlwQnBCLElBQUFBLEVBQUUsRUFBRWdCLHNCQUFVSSxNQUFWLENBQWlCQztBQUpELEdBQWhCLENBUE87QUFhZlosRUFBQUEsUUFBUSxFQUFFTyxzQkFBVU0sSUFiTDtBQWNmM0IsRUFBQUEsS0FBSyxFQUFFcUIsc0JBQVVFLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixVQUF2QixDQUFoQixDQWRRO0FBZWYvQyxFQUFBQSxPQUFPLEVBQUU2QyxzQkFBVU07QUFmSixDQUFuQjtlQWtCZXRELE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQge25vb3AsIG5vcm1hbGl6ZVVSTH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQge0ljb259IGZyb20gXCIuLi9pbmRleFwiO1xuXG5jb25zb2xlLnNoYWxsb3dDbG9uZUxvZyA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHR5cGVTdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpXG4gICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24oeCl7XG4gICAgICAgIHN3aXRjaCAodHlwZVN0cmluZyh4KS5zbGljZSg4LCAtMSkpIHtcbiAgICAgICAgICAgIGNhc2UgJ051bWJlcic6IGNhc2UgJ1N0cmluZyc6IGNhc2UgJ1VuZGVmaW5lZCc6IGNhc2UgJ051bGwnOiBjYXNlICdCb29sZWFuJzogcmV0dXJuIHg7XG4gICAgICAgICAgICBjYXNlICdBcnJheSc6IHJldHVybiB4LnNsaWNlKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHZhciBvdXQgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih4KSk7XG4gICAgICAgICAgICAgICAgb3V0LmNvbnN0cnVjdG9yID0geC5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4geCkge1xuICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9IHhba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG91dCwgJ2NvbnN0cnVjdG9yJywge3ZhbHVlOiB4LmNvbnN0cnVjdG9yfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfVxuICAgIH0pKTtcbn1cblxuXG5jbGFzcyBBdmF0YXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5maXhQaG90b1NpemUgPSB0aGlzLmZpeFBob3RvU2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGlja2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46ICF0aGlzLnN0YXRlPy5vcGVufSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SW5pdGlhbHMobmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZVxuICAgICAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAgICAgLm1hcChpID0+IGlbMF0pXG4gICAgICAgICAgICAuam9pbihcIlwiKVxuICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgZml4UGhvdG9TaXplKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHtuYXRpdmVFdmVudH0gPSBldmVudDtcbiAgICAgICAgY29uc3QgeyBwYXRoID0gbmF0aXZlRXZlbnQuY29tcG9zZWRQYXRoKCkgfSA9IG5hdGl2ZUV2ZW50O1xuXG4gICAgICAgIGNvbnN0IGltYWdlID0gcGF0aFswXTtcbiAgICAgICAgY29uc3QgeyBuYXR1cmFsV2lkdGgsIG5hdHVyYWxIZWlnaHQgfSA9IGltYWdlO1xuXG4gICAgICAgIGNvbnN0IHNpemVzID0ge1xuICAgICAgICAgICAgXCJ4c1wiOiBcIjEuNXJlbVwiLFxuICAgICAgICAgICAgXCJtZFwiOiBcIjJyZW1cIixcbiAgICAgICAgICAgIFwibGdcIjogXCIyLjVyZW1cIlxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHNpemVzW3RoaXMucHJvcHMuc2l6ZV1cblxuICAgICAgICBpbWFnZS5zdHlsZS53aWR0aCA9IG5hdHVyYWxXaWR0aCA8IG5hdHVyYWxIZWlnaHQgPyBwYXJhbWV0ZXJzIDogXCJhdXRvXCI7XG4gICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IG5hdHVyYWxXaWR0aCA8IG5hdHVyYWxIZWlnaHQgPyBcImF1dG9cIiA6IHBhcmFtZXRlcnM7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGF2YXRhclZpc2libGUsXG4gICAgICAgICAgICBvcGVuLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBtYW5hZ2VPcGVuZWQsXG4gICAgICAgICAgICBtZW1iZXI6IHtcbiAgICAgICAgICAgICAgICBhdmF0YXIsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNpemUsXG4gICAgICAgICAgICBjYW5SZW1vdmUsXG4gICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgaGFzQXZhdGFyID0gQm9vbGVhbihhdmF0YXIpO1xuICAgICAgICBjb25zdCBhdmF0YXJJc1Zpc2libGUgPSAhaGFzQXZhdGFyICYmIGF2YXRhclZpc2libGU7XG5cbiAgICAgICAgY29uc3Qgb3BlblN0YXRlID0gbWFuYWdlT3BlbmVkID8gb3BlbiA6IHRoaXMuc3RhdGU/Lm9wZW47XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhclwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7c2l6ZX1gXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgLS0ke2NvbG9yfWBdOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCItLWNsaWNrYWJsZVwiOiBjbGlja2FibGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tc2VsZWN0ZWRcIjogb3BlblN0YXRlLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2hhc0F2YXRhciAmJiA8ZGl2IGNsYXNzTmFtZT1cInBob3RvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZD17dGhpcy5maXhQaG90b1NpemV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVtYmVyLXBob3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e25vcm1hbGl6ZVVSTChgLyR7YXZhdGFyfWApfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICB7YXZhdGFySXNWaXNpYmxlICYmIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWVtYmVyLWNvbnRhaW5lclwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCItLXNlbGVjdGVkXCI6IHRoaXMuc3RhdGU/Lm9wZW5cbiAgICAgICAgICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5pdGlhbHNcIiB0aXRsZT17bmFtZX0+e3RoaXMuZ2V0SW5pdGlhbHMobmFtZSl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZW1iZXItaW5mb1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBvcGVuU3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj57bmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVtb3ZlKHtpZH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVtb3ZlXCI6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogY2FuUmVtb3ZlICYmIG9wZW5TdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwieFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbkF2YXRhci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG9wZW46IGZhbHNlLFxuICAgIG1hbmFnZU9wZW5lZDogZmFsc2UsXG4gICAgc2l6ZTogXCJ4c1wiLFxuICAgIGNhblJlbW92ZTogZmFsc2UsXG4gICAgYXZhdGFyVmlzaWJsZTogdHJ1ZSxcbiAgICBjb2xvcjogXCJkZWZhdWx0XCIsXG4gICAgb25SZW1vdmU6IG5vb3AsXG4gICAgb25DbGljazogbm9vcFxufVxuXG5BdmF0YXIucHJvcFR5cGVzID0ge1xuICAgIGF2YXRhclZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGNhblJlbW92ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xpY2thYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtYW5hZ2VPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJ4c1wiLCBcIm1kXCIsIFwibGdcIl0pLFxuICAgIG1lbWJlcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5yZXF1aXJlZCxcbiAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGF2YXRhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcucmVxdWlyZWRcbiAgICB9KSxcbiAgICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXCJkZWZhdWx0XCIsIFwicHJpbWFyeVwiLCBcIm5lZ2F0aXZlXCJdKSxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdmF0YXIiXX0=