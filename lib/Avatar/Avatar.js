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
              console.log("Remove clicked", id);

              _this2.props.onRemove({
                id: id
              });
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Icon, {
              className: (0, _classnames2["default"])({
                "remove": true,
                "visible": canRemove && openState
              }),
              icon: "x",
              size: "md"
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
  onClick: _utils.noop
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
  onClick: _propTypes["default"].func
};
var _default = Avatar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdmF0YXIvQXZhdGFyLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJzaGFsbG93Q2xvbmVMb2ciLCJ0eXBlU3RyaW5nIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJjYWxsIiwiYmluZCIsIk9iamVjdCIsInRvU3RyaW5nIiwibG9nIiwiYXBwbHkiLCJBcnJheSIsIm1hcCIsImFyZ3VtZW50cyIsIngiLCJzbGljZSIsIm91dCIsImNyZWF0ZSIsImdldFByb3RvdHlwZU9mIiwiY29uc3RydWN0b3IiLCJrZXkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiQXZhdGFyIiwicHJvcHMiLCJmaXhQaG90b1NpemUiLCJvbkNsaWNrIiwic3RhdGUiLCJvcGVuIiwiY2xpY2thYmxlIiwic2V0U3RhdGUiLCJuYW1lIiwic3BsaXQiLCJpIiwiam9pbiIsInRvVXBwZXJDYXNlIiwiZXZlbnQiLCJuYXRpdmVFdmVudCIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJpbWFnZSIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJzaXplcyIsInBhcmFtZXRlcnMiLCJzaXplIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImlkIiwiYXZhdGFyVmlzaWJsZSIsImNvbG9yIiwibWFuYWdlT3BlbmVkIiwibWVtYmVyIiwiYXZhdGFyIiwidGl0bGUiLCJjYW5SZW1vdmUiLCJoYXNBdmF0YXIiLCJCb29sZWFuIiwiYXZhdGFySXNWaXNpYmxlIiwib3BlblN0YXRlIiwic3R5bGVzIiwiZ2V0SW5pdGlhbHMiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwib25SZW1vdmUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm5vb3AiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwib25lT2YiLCJzaGFwZSIsInJlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7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VUksSUFITjtBQUlmOUMsRUFBQUEsU0FBUyxFQUFFMEMsc0JBQVVJLElBSk47QUFLZnZCLEVBQUFBLFlBQVksRUFBRW1CLHNCQUFVSSxJQUxUO0FBTWYvQyxFQUFBQSxJQUFJLEVBQUUyQyxzQkFBVUksSUFORDtBQU9mOUIsRUFBQUEsSUFBSSxFQUFFMEIsc0JBQVVLLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsQ0FBaEIsQ0FQUztBQVFmdkIsRUFBQUEsTUFBTSxFQUFFa0Isc0JBQVVNLEtBQVYsQ0FBZ0I7QUFDcEI5QyxJQUFBQSxJQUFJLEVBQUV3QyxzQkFBVUUsTUFBVixDQUFpQkssUUFESDtBQUVwQnZCLElBQUFBLEtBQUssRUFBRWdCLHNCQUFVRSxNQUZHO0FBR3BCbkIsSUFBQUEsTUFBTSxFQUFFaUIsc0JBQVVFO0FBSEUsR0FBaEIsQ0FSTztBQWFmUixFQUFBQSxRQUFRLEVBQUVNLHNCQUFVUSxJQWJMO0FBY2Y1QixFQUFBQSxLQUFLLEVBQUVvQixzQkFBVUssS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFVBQXZCLENBQWhCLENBZFE7QUFlZmxELEVBQUFBLE9BQU8sRUFBRTZDLHNCQUFVUTtBQWZKLENBQW5CO2VBa0JleEQsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7bm9vcCwgbm9ybWFsaXplVVJMfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xyXG5pbXBvcnQge0ljb259IGZyb20gXCIuLi9pbmRleFwiO1xyXG5cclxuY29uc29sZS5zaGFsbG93Q2xvbmVMb2cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdHlwZVN0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZylcclxuICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlU3RyaW5nKHgpLnNsaWNlKDgsIC0xKSkge1xyXG4gICAgICAgICAgICBjYXNlICdOdW1iZXInOlxyXG4gICAgICAgICAgICBjYXNlICdTdHJpbmcnOlxyXG4gICAgICAgICAgICBjYXNlICdVbmRlZmluZWQnOlxyXG4gICAgICAgICAgICBjYXNlICdOdWxsJzpcclxuICAgICAgICAgICAgY2FzZSAnQm9vbGVhbic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcclxuICAgICAgICAgICAgY2FzZSAnQXJyYXknOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHguc2xpY2UoKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHZhciBvdXQgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih4KSk7XHJcbiAgICAgICAgICAgICAgICBvdXQuY29uc3RydWN0b3IgPSB4LmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9IHhba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvdXQsICdjb25zdHJ1Y3RvcicsIHt2YWx1ZTogeC5jb25zdHJ1Y3Rvcn0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcclxuICAgICAgICB9XHJcbiAgICB9KSk7XHJcbn1cclxuXHJcblxyXG5jbGFzcyBBdmF0YXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5maXhQaG90b1NpemUgPSB0aGlzLmZpeFBob3RvU2l6ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xpY2thYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46ICF0aGlzLnN0YXRlPy5vcGVufSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEluaXRpYWxzKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gbmFtZVxyXG4gICAgICAgICAgICAuc3BsaXQoXCIgXCIpXHJcbiAgICAgICAgICAgIC5tYXAoaSA9PiBpWzBdKVxyXG4gICAgICAgICAgICAuam9pbihcIlwiKVxyXG4gICAgICAgICAgICAudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaXhQaG90b1NpemUoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB7bmF0aXZlRXZlbnR9ID0gZXZlbnQ7XHJcbiAgICAgICAgY29uc3Qge3BhdGggPSBuYXRpdmVFdmVudC5jb21wb3NlZFBhdGgoKX0gPSBuYXRpdmVFdmVudDtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBwYXRoWzBdO1xyXG4gICAgICAgIGNvbnN0IHtuYXR1cmFsV2lkdGgsIG5hdHVyYWxIZWlnaHR9ID0gaW1hZ2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHNpemVzID0ge1xyXG4gICAgICAgICAgICBcInhzXCI6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgICAgIFwibWRcIjogXCIycmVtXCIsXHJcbiAgICAgICAgICAgIFwibGdcIjogXCIyLjVyZW1cIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHNpemVzW3RoaXMucHJvcHMuc2l6ZV1cclxuXHJcbiAgICAgICAgaW1hZ2Uuc3R5bGUud2lkdGggPSBuYXR1cmFsV2lkdGggPCBuYXR1cmFsSGVpZ2h0ID8gcGFyYW1ldGVycyA6IFwiYXV0b1wiO1xyXG4gICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IG5hdHVyYWxXaWR0aCA8IG5hdHVyYWxIZWlnaHQgPyBcImF1dG9cIiA6IHBhcmFtZXRlcnM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBhdmF0YXJWaXNpYmxlLFxyXG4gICAgICAgICAgICBvcGVuLFxyXG4gICAgICAgICAgICBjb2xvcixcclxuICAgICAgICAgICAgbWFuYWdlT3BlbmVkLFxyXG4gICAgICAgICAgICBtZW1iZXI6IHtcclxuICAgICAgICAgICAgICAgIGF2YXRhcixcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaXplLFxyXG4gICAgICAgICAgICBjYW5SZW1vdmUsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZVxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBoYXNBdmF0YXIgPSBCb29sZWFuKGF2YXRhcik7XHJcbiAgICAgICAgY29uc3QgYXZhdGFySXNWaXNpYmxlID0gIWhhc0F2YXRhciAmJiBhdmF0YXJWaXNpYmxlO1xyXG5cclxuICAgICAgICBjb25zdCBvcGVuU3RhdGUgPSBtYW5hZ2VPcGVuZWQgPyBvcGVuIDogdGhpcy5zdGF0ZT8ub3BlbjtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7c2l6ZX1gXTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7Y29sb3J9YF06IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1jbGlja2FibGVcIjogY2xpY2thYmxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tc2VsZWN0ZWRcIjogb3BlblN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aGFzQXZhdGFyICYmIDxkaXYgY2xhc3NOYW1lPVwicGhvdG8tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkPXt0aGlzLmZpeFBob3RvU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbWJlci1waG90b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e25vcm1hbGl6ZVVSTChgLyR7YXZhdGFyfWApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7YXZhdGFySXNWaXNpYmxlICYmIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZW1iZXItY29udGFpbmVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1zZWxlY3RlZFwiOiB0aGlzLnN0YXRlPy5vcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbml0aWFsc1wiIHRpdGxlPXtuYW1lfT57dGhpcy5nZXRJbml0aWFscyhuYW1lKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZW1iZXItaW5mb1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IG9wZW5TdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj57bmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVtb3ZlIGNsaWNrZWRcIiwgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25SZW1vdmUoe2lkfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlbW92ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBjYW5SZW1vdmUgJiYgb3BlblN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuQXZhdGFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGlkOiAwLFxyXG4gICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgb3BlbjogZmFsc2UsXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IGZhbHNlLFxyXG4gICAgc2l6ZTogXCJ4c1wiLFxyXG4gICAgY2FuUmVtb3ZlOiBmYWxzZSxcclxuICAgIGF2YXRhclZpc2libGU6IHRydWUsXHJcbiAgICBjb2xvcjogXCJkZWZhdWx0XCIsXHJcbiAgICBvblJlbW92ZTogbm9vcCxcclxuICAgIG9uQ2xpY2s6IG5vb3BcclxufVxyXG5cclxuQXZhdGFyLnByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcbiAgICBhdmF0YXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGNhblJlbW92ZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjbGlja2FibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG9wZW46IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcInhzXCIsIFwibWRcIiwgXCJsZ1wiXSksXHJcbiAgICBtZW1iZXI6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5yZXF1aXJlZCxcclxuICAgICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBhdmF0YXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KSxcclxuICAgIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1wiZGVmYXVsdFwiLCBcInByaW1hcnlcIiwgXCJuZWdhdGl2ZVwiXSksXHJcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdmF0YXIiXX0=