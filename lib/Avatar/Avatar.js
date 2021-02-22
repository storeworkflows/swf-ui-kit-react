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
          _this$state4,
          _this2 = this,
          _this$state5;

      var _this$props = this.props,
          avatarVisible = _this$props.avatarVisible,
          open = _this$props.open,
          color = _this$props.color,
          _this$props$member = _this$props.member,
          avatar = _this$props$member.avatar,
          name = _this$props$member.name,
          title = _this$props$member.title,
          id = _this$props$member.id,
          size = _this$props.size,
          removable = _this$props.removable,
          clickable = _this$props.clickable;
      var hasAvatar = Boolean(avatar);
      var avatarIsVisible = !hasAvatar && avatarVisible;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _classnames2["default"])((_classnames = {
            "avatar": true
          }, _defineProperty(_classnames, "--".concat(size), true), _defineProperty(_classnames, "--".concat(color), true), _defineProperty(_classnames, "--selected", (_this$state2 = this.state) === null || _this$state2 === void 0 ? void 0 : _this$state2.open), _classnames)),
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
              "visible": (_this$state4 = this.state) === null || _this$state4 === void 0 ? void 0 : _this$state4.open
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
              _this2.props.onDelete({
                id: id
              });

              e.stopPropagation();
            },
            className: (0, _classnames2["default"])({
              "remove": true,
              "visible": removable && ((_this$state5 = this.state) === null || _this$state5 === void 0 ? void 0 : _this$state5.open)
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
  size: "xs",
  removable: false,
  avatarVisible: true,
  color: "default",
  onDelete: _utils.noop
};
Avatar.propTypes = {
  avatarVisible: _propTypes["default"].bool,
  removable: _propTypes["default"].bool,
  clickable: _propTypes["default"].bool,
  open: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["xs", "md", "lg"]),
  member: _propTypes["default"].shape({
    name: _propTypes["default"].string.required,
    title: _propTypes["default"].string,
    avatar: _propTypes["default"].string,
    id: _propTypes["default"].string.required
  }),
  onDelete: _propTypes["default"].func,
  color: _propTypes["default"].oneOf(["default", "primary", "negative"])
};
var _default = Avatar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdmF0YXIvQXZhdGFyLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJzaGFsbG93Q2xvbmVMb2ciLCJ0eXBlU3RyaW5nIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJjYWxsIiwiYmluZCIsIk9iamVjdCIsInRvU3RyaW5nIiwibG9nIiwiYXBwbHkiLCJBcnJheSIsIm1hcCIsImFyZ3VtZW50cyIsIngiLCJzbGljZSIsIm91dCIsImNyZWF0ZSIsImdldFByb3RvdHlwZU9mIiwiY29uc3RydWN0b3IiLCJrZXkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiQXZhdGFyIiwicHJvcHMiLCJmaXhQaG90b1NpemUiLCJvbkNsaWNrIiwic3RhdGUiLCJvcGVuIiwic2V0U3RhdGUiLCJuYW1lIiwic3BsaXQiLCJpIiwiam9pbiIsInRvVXBwZXJDYXNlIiwiZXZlbnQiLCJuYXRpdmVFdmVudCIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJpbWFnZSIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJzaXplcyIsInBhcmFtZXRlcnMiLCJzaXplIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImF2YXRhclZpc2libGUiLCJjb2xvciIsIm1lbWJlciIsImF2YXRhciIsInRpdGxlIiwiaWQiLCJyZW1vdmFibGUiLCJjbGlja2FibGUiLCJoYXNBdmF0YXIiLCJCb29sZWFuIiwiYXZhdGFySXNWaXNpYmxlIiwic3R5bGVzIiwiZ2V0SW5pdGlhbHMiLCJlIiwib25EZWxldGUiLCJzdG9wUHJvcGFnYXRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm5vb3AiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwib25lT2YiLCJzaGFwZSIsInN0cmluZyIsInJlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUVPLHNCQUFVTSxJQVpMO0FBYWYxQixFQUFBQSxLQUFLLEVBQUVvQixzQkFBVUUsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFVBQXZCLENBQWhCO0FBYlEsQ0FBbkI7ZUFnQmVoRCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtub29wLCBub3JtYWxpemVVUkx9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IHtJY29ufSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuY29uc29sZS5zaGFsbG93Q2xvbmVMb2cgPSBmdW5jdGlvbigpe1xuICAgIHZhciB0eXBlU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKVxuICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uKHgpe1xuICAgICAgICBzd2l0Y2ggKHR5cGVTdHJpbmcoeCkuc2xpY2UoOCwgLTEpKSB7XG4gICAgICAgICAgICBjYXNlICdOdW1iZXInOiBjYXNlICdTdHJpbmcnOiBjYXNlICdVbmRlZmluZWQnOiBjYXNlICdOdWxsJzogY2FzZSAnQm9vbGVhbic6IHJldHVybiB4O1xuICAgICAgICAgICAgY2FzZSAnQXJyYXknOiByZXR1cm4geC5zbGljZSgpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB2YXIgb3V0ID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YoeCkpO1xuICAgICAgICAgICAgICAgIG91dC5jb25zdHJ1Y3RvciA9IHguY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHgpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0W2tleV0gPSB4W2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvdXQsICdjb25zdHJ1Y3RvcicsIHt2YWx1ZTogeC5jb25zdHJ1Y3Rvcn0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgIH1cbiAgICB9KSk7XG59XG5cblxuY2xhc3MgQXZhdGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZml4UGhvdG9TaXplID0gdGhpcy5maXhQaG90b1NpemUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogIXRoaXMuc3RhdGU/Lm9wZW59KVxuICAgIH1cblxuICAgIGdldEluaXRpYWxzKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5hbWVcbiAgICAgICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgICAgIC5tYXAoaSA9PiBpWzBdKVxuICAgICAgICAgICAgLmpvaW4oXCJcIilcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIGZpeFBob3RvU2l6ZShldmVudCkge1xuICAgICAgICBjb25zdCB7bmF0aXZlRXZlbnR9ID0gZXZlbnQ7XG4gICAgICAgIGNvbnN0IHsgcGF0aCA9IG5hdGl2ZUV2ZW50LmNvbXBvc2VkUGF0aCgpIH0gPSBuYXRpdmVFdmVudDtcblxuICAgICAgICBjb25zdCBpbWFnZSA9IHBhdGhbMF07XG4gICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoLCBuYXR1cmFsSGVpZ2h0IH0gPSBpbWFnZTtcblxuICAgICAgICBjb25zdCBzaXplcyA9IHtcbiAgICAgICAgICAgIFwieHNcIjogXCIxLjVyZW1cIixcbiAgICAgICAgICAgIFwibWRcIjogXCIycmVtXCIsXG4gICAgICAgICAgICBcImxnXCI6IFwiMi41cmVtXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBzaXplc1t0aGlzLnByb3BzLnNpemVdXG5cbiAgICAgICAgaW1hZ2Uuc3R5bGUud2lkdGggPSBuYXR1cmFsV2lkdGggPCBuYXR1cmFsSGVpZ2h0ID8gcGFyYW1ldGVycyA6IFwiYXV0b1wiO1xuICAgICAgICBpbWFnZS5zdHlsZS5oZWlnaHQgPSBuYXR1cmFsV2lkdGggPCBuYXR1cmFsSGVpZ2h0ID8gXCJhdXRvXCIgOiBwYXJhbWV0ZXJzO1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhdmF0YXJWaXNpYmxlLFxuICAgICAgICAgICAgb3BlbixcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgbWVtYmVyOiB7XG4gICAgICAgICAgICAgICAgYXZhdGFyLFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaXplLFxuICAgICAgICAgICAgcmVtb3ZhYmxlLFxuICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGhhc0F2YXRhciA9IEJvb2xlYW4oYXZhdGFyKTtcbiAgICAgICAgY29uc3QgYXZhdGFySXNWaXNpYmxlID0gIWhhc0F2YXRhciAmJiBhdmF0YXJWaXNpYmxlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgLS0ke3NpemV9YF06IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBbYC0tJHtjb2xvcn1gXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1zZWxlY3RlZFwiOiB0aGlzLnN0YXRlPy5vcGVuLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2hhc0F2YXRhciAmJiA8ZGl2IGNsYXNzTmFtZT1cInBob3RvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZD17dGhpcy5maXhQaG90b1NpemV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVtYmVyLXBob3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e25vcm1hbGl6ZVVSTChgLyR7YXZhdGFyfWApfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICB7YXZhdGFySXNWaXNpYmxlICYmIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWVtYmVyLWNvbnRhaW5lclwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCItLXNlbGVjdGVkXCI6IHRoaXMuc3RhdGU/Lm9wZW5cbiAgICAgICAgICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5pdGlhbHNcIiB0aXRsZT17bmFtZX0+e3RoaXMuZ2V0SW5pdGlhbHMobmFtZSl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZW1iZXItaW5mb1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0aGlzLnN0YXRlPy5vcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuYW1lXCI+e25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkRlbGV0ZSh7aWR9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlbW92ZVwiOnRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHJlbW92YWJsZSAmJiB0aGlzLnN0YXRlPy5vcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuQXZhdGFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgb3BlbjogZmFsc2UsXG4gICAgc2l6ZTogXCJ4c1wiLFxuICAgIHJlbW92YWJsZTogZmFsc2UsXG4gICAgYXZhdGFyVmlzaWJsZTogdHJ1ZSxcbiAgICBjb2xvcjogXCJkZWZhdWx0XCIsXG4gICAgb25EZWxldGU6IG5vb3Bcbn1cblxuQXZhdGFyLnByb3BUeXBlcyA9IHtcbiAgICBhdmF0YXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZW1vdmFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsaWNrYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcInhzXCIsIFwibWRcIiwgXCJsZ1wiXSksXG4gICAgbWVtYmVyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLnJlcXVpcmVkLFxuICAgICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYXZhdGFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5yZXF1aXJlZFxuICAgIH0pLFxuICAgIG9uRGVsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcImRlZmF1bHRcIiwgXCJwcmltYXJ5XCIsIFwibmVnYXRpdmVcIl0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF2YXRhciJdfQ==