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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdmF0YXIvQXZhdGFyLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJzaGFsbG93Q2xvbmVMb2ciLCJ0eXBlU3RyaW5nIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJjYWxsIiwiYmluZCIsIk9iamVjdCIsInRvU3RyaW5nIiwibG9nIiwiYXBwbHkiLCJBcnJheSIsIm1hcCIsImFyZ3VtZW50cyIsIngiLCJzbGljZSIsIm91dCIsImNyZWF0ZSIsImdldFByb3RvdHlwZU9mIiwiY29uc3RydWN0b3IiLCJrZXkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiQXZhdGFyIiwicHJvcHMiLCJmaXhQaG90b1NpemUiLCJvbkNsaWNrIiwic3RhdGUiLCJvcGVuIiwic2V0U3RhdGUiLCJuYW1lIiwic3BsaXQiLCJpIiwiam9pbiIsInRvVXBwZXJDYXNlIiwiZXZlbnQiLCJuYXRpdmVFdmVudCIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJpbWFnZSIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJzaXplcyIsInBhcmFtZXRlcnMiLCJzaXplIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImF2YXRhclZpc2libGUiLCJjb2xvciIsIm1hbmFnZU9wZW5lZCIsIm1lbWJlciIsImF2YXRhciIsInRpdGxlIiwiaWQiLCJjYW5SZW1vdmUiLCJjbGlja2FibGUiLCJoYXNBdmF0YXIiLCJCb29sZWFuIiwiYXZhdGFySXNWaXNpYmxlIiwib3BlblN0YXRlIiwic3R5bGVzIiwiZ2V0SW5pdGlhbHMiLCJlIiwib25SZW1vdmUiLCJzdG9wUHJvcGFnYXRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm5vb3AiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwib25lT2YiLCJzaGFwZSIsInN0cmluZyIsInJlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FB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Q0FBaUJDLFFBREg7QUFFcEJ2QixJQUFBQSxLQUFLLEVBQUVrQixzQkFBVUksTUFGRztBQUdwQnZCLElBQUFBLE1BQU0sRUFBRW1CLHNCQUFVSSxNQUhFO0FBSXBCckIsSUFBQUEsRUFBRSxFQUFFaUIsc0JBQVVJLE1BQVYsQ0FBaUJDO0FBSkQsR0FBaEIsQ0FQTztBQWFmWixFQUFBQSxRQUFRLEVBQUVPLHNCQUFVTSxJQWJMO0FBY2Y1QixFQUFBQSxLQUFLLEVBQUVzQixzQkFBVUUsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFVBQXZCLENBQWhCLENBZFE7QUFlZi9DLEVBQUFBLE9BQU8sRUFBRTZDLHNCQUFVTTtBQWZKLENBQW5CO2VBa0JldEQsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7bm9vcCwgbm9ybWFsaXplVVJMfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xyXG5pbXBvcnQge0ljb259IGZyb20gXCIuLi9pbmRleFwiO1xyXG5cclxuY29uc29sZS5zaGFsbG93Q2xvbmVMb2cgPSBmdW5jdGlvbigpe1xyXG4gICAgdmFyIHR5cGVTdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpXHJcbiAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbih4KXtcclxuICAgICAgICBzd2l0Y2ggKHR5cGVTdHJpbmcoeCkuc2xpY2UoOCwgLTEpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ051bWJlcic6IGNhc2UgJ1N0cmluZyc6IGNhc2UgJ1VuZGVmaW5lZCc6IGNhc2UgJ051bGwnOiBjYXNlICdCb29sZWFuJzogcmV0dXJuIHg7XHJcbiAgICAgICAgICAgIGNhc2UgJ0FycmF5JzogcmV0dXJuIHguc2xpY2UoKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHZhciBvdXQgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih4KSk7XHJcbiAgICAgICAgICAgICAgICBvdXQuY29uc3RydWN0b3IgPSB4LmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9IHhba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvdXQsICdjb25zdHJ1Y3RvcicsIHt2YWx1ZTogeC5jb25zdHJ1Y3Rvcn0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcclxuICAgICAgICB9XHJcbiAgICB9KSk7XHJcbn1cclxuXHJcblxyXG5jbGFzcyBBdmF0YXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5maXhQaG90b1NpemUgPSB0aGlzLmZpeFBob3RvU2l6ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogIXRoaXMuc3RhdGU/Lm9wZW59KVxyXG4gICAgICAgIHRoaXMucHJvcHMub25DbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluaXRpYWxzKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gbmFtZVxyXG4gICAgICAgICAgICAuc3BsaXQoXCIgXCIpXHJcbiAgICAgICAgICAgIC5tYXAoaSA9PiBpWzBdKVxyXG4gICAgICAgICAgICAuam9pbihcIlwiKVxyXG4gICAgICAgICAgICAudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaXhQaG90b1NpemUoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB7bmF0aXZlRXZlbnR9ID0gZXZlbnQ7XHJcbiAgICAgICAgY29uc3QgeyBwYXRoID0gbmF0aXZlRXZlbnQuY29tcG9zZWRQYXRoKCkgfSA9IG5hdGl2ZUV2ZW50O1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZSA9IHBhdGhbMF07XHJcbiAgICAgICAgY29uc3QgeyBuYXR1cmFsV2lkdGgsIG5hdHVyYWxIZWlnaHQgfSA9IGltYWdlO1xyXG5cclxuICAgICAgICBjb25zdCBzaXplcyA9IHtcclxuICAgICAgICAgICAgXCJ4c1wiOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgICBcIm1kXCI6IFwiMnJlbVwiLFxyXG4gICAgICAgICAgICBcImxnXCI6IFwiMi41cmVtXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBzaXplc1t0aGlzLnByb3BzLnNpemVdXHJcblxyXG4gICAgICAgIGltYWdlLnN0eWxlLndpZHRoID0gbmF0dXJhbFdpZHRoIDwgbmF0dXJhbEhlaWdodCA/IHBhcmFtZXRlcnMgOiBcImF1dG9cIjtcclxuICAgICAgICBpbWFnZS5zdHlsZS5oZWlnaHQgPSBuYXR1cmFsV2lkdGggPCBuYXR1cmFsSGVpZ2h0ID8gXCJhdXRvXCIgOiBwYXJhbWV0ZXJzO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBhdmF0YXJWaXNpYmxlLFxyXG4gICAgICAgICAgICBvcGVuLFxyXG4gICAgICAgICAgICBjb2xvcixcclxuICAgICAgICAgICAgbWFuYWdlT3BlbmVkLFxyXG4gICAgICAgICAgICBtZW1iZXI6IHtcclxuICAgICAgICAgICAgICAgIGF2YXRhcixcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNpemUsXHJcbiAgICAgICAgICAgIGNhblJlbW92ZSxcclxuICAgICAgICAgICAgY2xpY2thYmxlXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc0F2YXRhciA9IEJvb2xlYW4oYXZhdGFyKTtcclxuICAgICAgICBjb25zdCBhdmF0YXJJc1Zpc2libGUgPSAhaGFzQXZhdGFyICYmIGF2YXRhclZpc2libGU7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wZW5TdGF0ZSA9IG1hbmFnZU9wZW5lZCA/IG9wZW4gOiB0aGlzLnN0YXRlPy5vcGVuO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhclwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYC0tJHtzaXplfWBdOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYC0tJHtjb2xvcn1gXTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCItLXNlbGVjdGVkXCI6IG9wZW5TdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2hhc0F2YXRhciAmJiA8ZGl2IGNsYXNzTmFtZT1cInBob3RvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZD17dGhpcy5maXhQaG90b1NpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW1iZXItcGhvdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtub3JtYWxpemVVUkwoYC8ke2F2YXRhcn1gKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge2F2YXRhcklzVmlzaWJsZSAmJiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWVtYmVyLWNvbnRhaW5lclwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tc2VsZWN0ZWRcIjogdGhpcy5zdGF0ZT8ub3BlblxyXG4gICAgICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5pdGlhbHNcIiB0aXRsZT17bmFtZX0+e3RoaXMuZ2V0SW5pdGlhbHMobmFtZSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVtYmVyLWluZm9cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBvcGVuU3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuYW1lXCI+e25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25SZW1vdmUoe2lkfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlbW92ZVwiOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogY2FuUmVtb3ZlICYmIG9wZW5TdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5BdmF0YXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgb3BlbjogZmFsc2UsXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IGZhbHNlLFxyXG4gICAgc2l6ZTogXCJ4c1wiLFxyXG4gICAgY2FuUmVtb3ZlOiBmYWxzZSxcclxuICAgIGF2YXRhclZpc2libGU6IHRydWUsXHJcbiAgICBjb2xvcjogXCJkZWZhdWx0XCIsXHJcbiAgICBvblJlbW92ZTogbm9vcCxcclxuICAgIG9uQ2xpY2s6IG5vb3BcclxufVxyXG5cclxuQXZhdGFyLnByb3BUeXBlcyA9IHtcclxuICAgIGF2YXRhclZpc2libGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgY2FuUmVtb3ZlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGNsaWNrYWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wieHNcIiwgXCJtZFwiLCBcImxnXCJdKSxcclxuICAgIG1lbWJlcjogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLnJlcXVpcmVkLFxyXG4gICAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGF2YXRhcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5yZXF1aXJlZFxyXG4gICAgfSksXHJcbiAgICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcImRlZmF1bHRcIiwgXCJwcmltYXJ5XCIsIFwibmVnYXRpdmVcIl0pLFxyXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyIl19