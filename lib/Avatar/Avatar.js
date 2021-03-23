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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdmF0YXIvQXZhdGFyLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJzaGFsbG93Q2xvbmVMb2ciLCJ0eXBlU3RyaW5nIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJjYWxsIiwiYmluZCIsIk9iamVjdCIsInRvU3RyaW5nIiwibG9nIiwiYXBwbHkiLCJBcnJheSIsIm1hcCIsImFyZ3VtZW50cyIsIngiLCJzbGljZSIsIm91dCIsImNyZWF0ZSIsImdldFByb3RvdHlwZU9mIiwiY29uc3RydWN0b3IiLCJrZXkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiQXZhdGFyIiwicHJvcHMiLCJmaXhQaG90b1NpemUiLCJvbkNsaWNrIiwic3RhdGUiLCJvcGVuIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNsaWNrYWJsZSIsInNldFN0YXRlIiwibmFtZSIsInNwbGl0IiwibGV0dGVyIiwiaW5kZXgiLCJqb2luIiwidG9VcHBlckNhc2UiLCJuYXRpdmVFdmVudCIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJpbWFnZSIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJzaXplcyIsInBhcmFtZXRlcnMiLCJzaXplIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImlkIiwiYXZhdGFyVmlzaWJsZSIsImNvbG9yIiwibWFuYWdlT3BlbmVkIiwibWVtYmVyIiwiYXZhdGFyIiwidGl0bGUiLCJjYW5SZW1vdmUiLCJjbGFzc05hbWUiLCJoYXNBdmF0YXIiLCJCb29sZWFuIiwiYXZhdGFySXNWaXNpYmxlIiwib3BlblN0YXRlIiwiZWxtIiwiaW5uZXJSZWYiLCJjdXJyZW50IiwiZ2V0SW5pdGlhbHMiLCJlIiwib25SZW1vdmUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm5vb3AiLCJjcmVhdGVSZWYiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1i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QWdCZm5CLEVBQUFBLFFBQVEsRUFBRVcsc0JBQVVTLE1BaEJMO0FBaUJmMUIsRUFBQUEsU0FBUyxFQUFFaUIsc0JBQVVFO0FBakJOLENBQW5CO2VBb0JleEQsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7bm9vcCwgbm9ybWFsaXplVVJMfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHtJY29ufSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcbmNvbnNvbGUuc2hhbGxvd0Nsb25lTG9nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHR5cGVTdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpXHJcbiAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZVN0cmluZyh4KS5zbGljZSg4LCAtMSkpIHtcclxuICAgICAgICAgICAgY2FzZSAnTnVtYmVyJzpcclxuICAgICAgICAgICAgY2FzZSAnU3RyaW5nJzpcclxuICAgICAgICAgICAgY2FzZSAnVW5kZWZpbmVkJzpcclxuICAgICAgICAgICAgY2FzZSAnTnVsbCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ0Jvb2xlYW4nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XHJcbiAgICAgICAgICAgIGNhc2UgJ0FycmF5JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB4LnNsaWNlKCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB2YXIgb3V0ID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YoeCkpO1xyXG4gICAgICAgICAgICAgICAgb3V0LmNvbnN0cnVjdG9yID0geC5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0W2tleV0gPSB4W2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3V0LCAnY29uc3RydWN0b3InLCB7dmFsdWU6IHguY29uc3RydWN0b3J9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSkpO1xyXG59XHJcblxyXG5cclxuY2xhc3MgQXZhdGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuZml4UGhvdG9TaXplID0gdGhpcy5maXhQaG90b1NpemUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xpY2thYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46ICF0aGlzLnN0YXRlPy5vcGVufSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEluaXRpYWxzKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gbmFtZVxyXG4gICAgICAgICAgICAuc3BsaXQoXCIgXCIpXHJcbiAgICAgICAgICAgIC5tYXAoKGxldHRlciwgaW5kZXgpID0+IGluZGV4IDwgMiA/IGxldHRlclswXTogJycpXHJcbiAgICAgICAgICAgIC5qb2luKFwiXCIpXHJcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpeFBob3RvU2l6ZShldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHtuYXRpdmVFdmVudH0gPSBldmVudDtcclxuICAgICAgICBjb25zdCB7cGF0aCA9IG5hdGl2ZUV2ZW50LmNvbXBvc2VkUGF0aCgpfSA9IG5hdGl2ZUV2ZW50O1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZSA9IHBhdGhbMF07XHJcbiAgICAgICAgY29uc3Qge25hdHVyYWxXaWR0aCwgbmF0dXJhbEhlaWdodH0gPSBpbWFnZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2l6ZXMgPSB7XHJcbiAgICAgICAgICAgIFwieHNcIjogXCIxLjVyZW1cIixcclxuICAgICAgICAgICAgXCJtZFwiOiBcIjJyZW1cIixcclxuICAgICAgICAgICAgXCJsZ1wiOiBcIjIuNXJlbVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gc2l6ZXNbdGhpcy5wcm9wcy5zaXplXVxyXG5cclxuICAgICAgICBpbWFnZS5zdHlsZS53aWR0aCA9IG5hdHVyYWxXaWR0aCA8IG5hdHVyYWxIZWlnaHQgPyBwYXJhbWV0ZXJzIDogXCJhdXRvXCI7XHJcbiAgICAgICAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gbmF0dXJhbFdpZHRoIDwgbmF0dXJhbEhlaWdodCA/IFwiYXV0b1wiIDogcGFyYW1ldGVycztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIGF2YXRhclZpc2libGUsXHJcbiAgICAgICAgICAgIG9wZW4sXHJcbiAgICAgICAgICAgIGNvbG9yLFxyXG4gICAgICAgICAgICBtYW5hZ2VPcGVuZWQsXHJcbiAgICAgICAgICAgIG1lbWJlcjoge1xyXG4gICAgICAgICAgICAgICAgYXZhdGFyLFxyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNpemUsXHJcbiAgICAgICAgICAgIGNhblJlbW92ZSxcclxuICAgICAgICAgICAgY2xpY2thYmxlLFxyXG4gICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgaGFzQXZhdGFyID0gQm9vbGVhbihhdmF0YXIpO1xyXG4gICAgICAgIGNvbnN0IGF2YXRhcklzVmlzaWJsZSA9ICFoYXNBdmF0YXIgJiYgYXZhdGFyVmlzaWJsZTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3BlblN0YXRlID0gbWFuYWdlT3BlbmVkID8gb3BlbiA6IHRoaXMuc3RhdGU/Lm9wZW47XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtlbG0gPT4gdGhpcy5wcm9wcy5pbm5lclJlZi5jdXJyZW50ID0gZWxtfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3dmLWF2YXRhclwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYC0tJHtzaXplfWBdOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYC0tJHtjb2xvcn1gXTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCItLWNsaWNrYWJsZVwiOiBjbGlja2FibGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1zZWxlY3RlZFwiOiBvcGVuU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc05hbWVdOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtoYXNBdmF0YXIgJiYgPGRpdiBjbGFzc05hbWU9XCJwaG90by1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQ9e3RoaXMuZml4UGhvdG9TaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVtYmVyLXBob3RvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bm9ybWFsaXplVVJMKGAvJHthdmF0YXJ9YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHthdmF0YXJJc1Zpc2libGUgJiYgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1lbWJlci1jb250YWluZXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCItLXNlbGVjdGVkXCI6IHRoaXMuc3RhdGU/Lm9wZW5cclxuICAgICAgICAgICAgICAgICAgICB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluaXRpYWxzXCIgdGl0bGU9e25hbWV9Pnt0aGlzLmdldEluaXRpYWxzKG5hbWUpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lbWJlci1pbmZvXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogb3BlblN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmFtZVwiPntuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlbW92ZSh7aWR9KTtcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZW1vdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBjYW5SZW1vdmUgJiYgb3BlblN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbkF2YXRhci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBpZDogMCxcclxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgIG9wZW46IGZhbHNlLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBmYWxzZSxcclxuICAgIHNpemU6IFwieHNcIixcclxuICAgIGNhblJlbW92ZTogZmFsc2UsXHJcbiAgICBhdmF0YXJWaXNpYmxlOiB0cnVlLFxyXG4gICAgY29sb3I6IFwiZGVmYXVsdFwiLFxyXG4gICAgb25SZW1vdmU6IG5vb3AsXHJcbiAgICBvbkNsaWNrOiBub29wLFxyXG4gICAgaW5uZXJSZWY6IFJlYWN0LmNyZWF0ZVJlZigpLFxyXG4gICAgY2xhc3NOYW1lOiBcIlwiXHJcbn1cclxuXHJcbkF2YXRhci5wcm9wVHlwZXMgPSB7XHJcbiAgICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gICAgYXZhdGFyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjYW5SZW1vdmU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgY2xpY2thYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZU9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJ4c1wiLCBcIm1kXCIsIFwibGdcIl0pLFxyXG4gICAgbWVtYmVyOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcucmVxdWlyZWQsXHJcbiAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgYXZhdGFyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSksXHJcbiAgICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcImRlZmF1bHRcIiwgXCJwcmltYXJ5XCIsIFwibmVnYXRpdmVcIl0pLFxyXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBpbm5lclJlZjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdmF0YXIiXX0=