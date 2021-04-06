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
          clickable = _this$props.clickable,
          className = _this$props.className;
      var hasAvatar = Boolean(avatar);
      var avatarIsVisible = !hasAvatar && avatarVisible;
      var openState = manageOpened ? open : (_this$state2 = this.state) === null || _this$state2 === void 0 ? void 0 : _this$state2.open;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          ref: function ref(elm) {
            return _this2.props.innerRef.current = elm;
          },
          className: (0, _classnames2["default"])((_classnames = {
            "swf-avatar": true
          }, _defineProperty(_classnames, "--".concat(size), true), _defineProperty(_classnames, "--".concat(color), true), _defineProperty(_classnames, "--clickable", clickable), _defineProperty(_classnames, "--selected", openState), _defineProperty(_classnames, className, true), _classnames)),
          onClick: this.onClick,
          children: [hasAvatar && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "photo-container",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              title: name,
              onLoad: this.fixPhotoSize,
              className: "member-photo",
              src: avatar
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
            children: canRemove && openState && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: (0, _classnames2["default"])({
                "remove": true
              }),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Icon, {
                icon: "x",
                size: "md"
              })
            })
          })]
        })
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
  innerRef: /*#__PURE__*/React.createRef(),
  className: ""
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
  innerRef: _propTypes["default"].object,
  className: _propTypes["default"].string
};
var _default = Avatar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdmF0YXIvQXZhdGFyLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJzaGFsbG93Q2xvbmVMb2ciLCJ0eXBlU3RyaW5nIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJjYWxsIiwiYmluZCIsIk9iamVjdCIsInRvU3RyaW5nIiwibG9nIiwiYXBwbHkiLCJBcnJheSIsIm1hcCIsImFyZ3VtZW50cyIsIngiLCJzbGljZSIsIm91dCIsImNyZWF0ZSIsImdldFByb3RvdHlwZU9mIiwiY29uc3RydWN0b3IiLCJrZXkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiQXZhdGFyIiwicHJvcHMiLCJmaXhQaG90b1NpemUiLCJvbkNsaWNrIiwic3RhdGUiLCJvcGVuIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNsaWNrYWJsZSIsInNldFN0YXRlIiwibmFtZSIsInNwbGl0IiwibGV0dGVyIiwiaW5kZXgiLCJqb2luIiwidG9VcHBlckNhc2UiLCJuYXRpdmVFdmVudCIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJpbWFnZSIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJzaXplcyIsInBhcmFtZXRlcnMiLCJzaXplIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImlkIiwiYXZhdGFyVmlzaWJsZSIsImNvbG9yIiwibWFuYWdlT3BlbmVkIiwibWVtYmVyIiwiYXZhdGFyIiwidGl0bGUiLCJjYW5SZW1vdmUiLCJjbGFzc05hbWUiLCJoYXNBdmF0YXIiLCJCb29sZWFuIiwiYXZhdGFySXNWaXNpYmxlIiwib3BlblN0YXRlIiwiZWxtIiwiaW5uZXJSZWYiLCJjdXJyZW50IiwiZ2V0SW5pdGlhbHMiLCJlIiwib25SZW1vdmUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm5vb3AiLCJjcmVhdGVSZWYiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1i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QUFRLEVBQUVXLHNCQUFVUyxNQWhCTDtBQWlCZjFCLEVBQUFBLFNBQVMsRUFBRWlCLHNCQUFVRTtBQWpCTixDQUFuQjtlQW9CZXhELE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge25vb3AsIG5vcm1hbGl6ZVVSTH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7SWNvbn0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5jb25zb2xlLnNoYWxsb3dDbG9uZUxvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0eXBlU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKVxyXG4gICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGVTdHJpbmcoeCkuc2xpY2UoOCwgLTEpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ051bWJlcic6XHJcbiAgICAgICAgICAgIGNhc2UgJ1N0cmluZyc6XHJcbiAgICAgICAgICAgIGNhc2UgJ1VuZGVmaW5lZCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ051bGwnOlxyXG4gICAgICAgICAgICBjYXNlICdCb29sZWFuJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB4O1xyXG4gICAgICAgICAgICBjYXNlICdBcnJheSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geC5zbGljZSgpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdmFyIG91dCA9IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHgpKTtcclxuICAgICAgICAgICAgICAgIG91dC5jb25zdHJ1Y3RvciA9IHguY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4geCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dFtrZXldID0geFtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG91dCwgJ2NvbnN0cnVjdG9yJywge3ZhbHVlOiB4LmNvbnN0cnVjdG9yfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgICAgIH1cclxuICAgIH0pKTtcclxufVxyXG5cclxuXHJcbmNsYXNzIEF2YXRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmZpeFBob3RvU2l6ZSA9IHRoaXMuZml4UGhvdG9TaXplLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgb3BlbjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNsaWNrYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiAhdGhpcy5zdGF0ZT8ub3Blbn0pXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJbml0aWFscyhuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWVcclxuICAgICAgICAgICAgLnNwbGl0KFwiIFwiKVxyXG4gICAgICAgICAgICAubWFwKChsZXR0ZXIsIGluZGV4KSA9PiBpbmRleCA8IDIgPyBsZXR0ZXJbMF06ICcnKVxyXG4gICAgICAgICAgICAuam9pbihcIlwiKVxyXG4gICAgICAgICAgICAudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaXhQaG90b1NpemUoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB7bmF0aXZlRXZlbnR9ID0gZXZlbnQ7XHJcbiAgICAgICAgY29uc3Qge3BhdGggPSBuYXRpdmVFdmVudC5jb21wb3NlZFBhdGgoKX0gPSBuYXRpdmVFdmVudDtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBwYXRoWzBdO1xyXG4gICAgICAgIGNvbnN0IHtuYXR1cmFsV2lkdGgsIG5hdHVyYWxIZWlnaHR9ID0gaW1hZ2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHNpemVzID0ge1xyXG4gICAgICAgICAgICBcInhzXCI6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgICAgIFwibWRcIjogXCIycmVtXCIsXHJcbiAgICAgICAgICAgIFwibGdcIjogXCIyLjVyZW1cIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHNpemVzW3RoaXMucHJvcHMuc2l6ZV1cclxuXHJcbiAgICAgICAgaW1hZ2Uuc3R5bGUud2lkdGggPSBuYXR1cmFsV2lkdGggPCBuYXR1cmFsSGVpZ2h0ID8gcGFyYW1ldGVycyA6IFwiYXV0b1wiO1xyXG4gICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IG5hdHVyYWxXaWR0aCA8IG5hdHVyYWxIZWlnaHQgPyBcImF1dG9cIiA6IHBhcmFtZXRlcnM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBhdmF0YXJWaXNpYmxlLFxyXG4gICAgICAgICAgICBvcGVuLFxyXG4gICAgICAgICAgICBjb2xvcixcclxuICAgICAgICAgICAgbWFuYWdlT3BlbmVkLFxyXG4gICAgICAgICAgICBtZW1iZXI6IHtcclxuICAgICAgICAgICAgICAgIGF2YXRhcixcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaXplLFxyXG4gICAgICAgICAgICBjYW5SZW1vdmUsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc0F2YXRhciA9IEJvb2xlYW4oYXZhdGFyKTtcclxuICAgICAgICBjb25zdCBhdmF0YXJJc1Zpc2libGUgPSAhaGFzQXZhdGFyICYmIGF2YXRhclZpc2libGU7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wZW5TdGF0ZSA9IG1hbmFnZU9wZW5lZCA/IG9wZW4gOiB0aGlzLnN0YXRlPy5vcGVuO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMucHJvcHMuaW5uZXJSZWYuY3VycmVudCA9IGVsbX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN3Zi1hdmF0YXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7c2l6ZX1gXTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7Y29sb3J9YF06IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1jbGlja2FibGVcIjogY2xpY2thYmxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tc2VsZWN0ZWRcIjogb3BlblN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3NOYW1lXTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aGFzQXZhdGFyICYmIDxkaXYgY2xhc3NOYW1lPVwicGhvdG8tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkPXt0aGlzLmZpeFBob3RvU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbWJlci1waG90b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2F2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge2F2YXRhcklzVmlzaWJsZSAmJiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWVtYmVyLWNvbnRhaW5lclwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tc2VsZWN0ZWRcIjogdGhpcy5zdGF0ZT8ub3BlblxyXG4gICAgICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5pdGlhbHNcIiB0aXRsZT17bmFtZX0+e3RoaXMuZ2V0SW5pdGlhbHMobmFtZSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVtYmVyLWluZm9cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBvcGVuU3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuYW1lXCI+e25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVtb3ZlKHtpZH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FuUmVtb3ZlICYmIG9wZW5TdGF0ZSAmJiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlbW92ZVwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuQXZhdGFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGlkOiAwLFxyXG4gICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgb3BlbjogZmFsc2UsXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IGZhbHNlLFxyXG4gICAgc2l6ZTogXCJ4c1wiLFxyXG4gICAgY2FuUmVtb3ZlOiBmYWxzZSxcclxuICAgIGF2YXRhclZpc2libGU6IHRydWUsXHJcbiAgICBjb2xvcjogXCJkZWZhdWx0XCIsXHJcbiAgICBvblJlbW92ZTogbm9vcCxcclxuICAgIG9uQ2xpY2s6IG5vb3AsXHJcbiAgICBpbm5lclJlZjogUmVhY3QuY3JlYXRlUmVmKCksXHJcbiAgICBjbGFzc05hbWU6IFwiXCJcclxufVxyXG5cclxuQXZhdGFyLnByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcbiAgICBhdmF0YXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGNhblJlbW92ZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjbGlja2FibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG9wZW46IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcInhzXCIsIFwibWRcIiwgXCJsZ1wiXSksXHJcbiAgICBtZW1iZXI6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5yZXF1aXJlZCxcclxuICAgICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBhdmF0YXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KSxcclxuICAgIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1wiZGVmYXVsdFwiLCBcInByaW1hcnlcIiwgXCJuZWdhdGl2ZVwiXSksXHJcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGlubmVyUmVmOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF2YXRhciJdfQ==