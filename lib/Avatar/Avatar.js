"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AvatarMember = void 0;

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
        s;
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

var Avatar = function Avatar(props) {
  var _classnames;

  var id = props.id,
      avatarVisible = props.avatarVisible,
      open = props.open,
      color = props.color,
      manageOpened = props.manageOpened,
      _props$member = props.member,
      avatar = _props$member.avatar,
      name = _props$member.name,
      title = _props$member.title,
      size = props.size,
      canRemove = props.canRemove,
      clickable = props.clickable,
      className = props.className,
      onClick = props.onClick,
      onRemove = props.onRemove;

  var _useState = (0, React.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var onAvatarClick = function onAvatarClick(event) {
    event.preventDefault();
    event.stopPropagation();

    if (clickable) {
      setIsOpen(!isOpen);
      onClick();
    }
  };

  var getInitials = function getInitials(name) {
    return name.split(" ").map(function (letter, index) {
      return index < 2 ? letter[0] : '';
    }).join("").toUpperCase();
  };

  var fixPhotoSize = function fixPhotoSize(event) {
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
    var parameters = sizes[size];
    image.style.width = naturalWidth < naturalHeight ? parameters : "auto";
    image.style.height = naturalWidth < naturalHeight ? "auto" : parameters;
  };

  var hasAvatar = Boolean(avatar);
  var avatarIsVisible = !hasAvatar && avatarVisible;
  var openState = manageOpened ? open : isOpen;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      ref: function ref(elm) {
        return props.innerRef.current = elm;
      },
      className: (0, _classnames2["default"])((_classnames = {
        "swf-avatar": true
      }, _defineProperty(_classnames, "--".concat(size), true), _defineProperty(_classnames, "--".concat(color), true), _defineProperty(_classnames, "--clickable", clickable), _defineProperty(_classnames, "--selected", openState), _defineProperty(_classnames, className, true), _classnames)),
      onClick: onAvatarClick,
      children: [hasAvatar && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "photo-container",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          title: name,
          onLoad: fixPhotoSize,
          className: "member-photo",
          src: avatar
        })
      }), avatarIsVisible && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames2["default"])({
          "member-container": true,
          "--selected": isOpen
        }),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "initials",
          title: name,
          children: getInitials(name)
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
      }), canRemove && openState && /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Icon, {
        className: "remove",
        onClick: function onClick(e) {
          e.stopPropagation();
          e.preventDefault();
          onRemove({
            id: id
          });
        },
        icon: "x",
        size: "md"
      })]
    })
  });
};

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
var AvatarMember = {
  name: _propTypes["default"].string.isRequired,
  title: _propTypes["default"].string,
  avatar: _propTypes["default"].string
};
exports.AvatarMember = AvatarMember;
Avatar.propTypes = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  avatarVisible: _propTypes["default"].bool,
  canRemove: _propTypes["default"].bool,
  clickable: _propTypes["default"].bool,
  manageOpened: _propTypes["default"].bool,
  open: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["xs", "md", "lg"]),
  member: _propTypes["default"].shape(AvatarMember),
  onRemove: _propTypes["default"].func,
  color: _propTypes["default"].oneOf(["default", "primary", "negative"]),
  onClick: _propTypes["default"].func,
  innerRef: _propTypes["default"].object,
  className: _propTypes["default"].string
};

var _default = /*#__PURE__*/React.memo(Avatar);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdmF0YXIvQXZhdGFyLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJzaGFsbG93Q2xvbmVMb2ciLCJ0eXBlU3RyaW5nIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJjYWxsIiwiYmluZCIsIk9iamVjdCIsInRvU3RyaW5nIiwibG9nIiwiYXBwbHkiLCJBcnJheSIsIm1hcCIsImFyZ3VtZW50cyIsIngiLCJzbGljZSIsInMiLCJvdXQiLCJjcmVhdGUiLCJnZXRQcm90b3R5cGVPZiIsImNvbnN0cnVjdG9yIiwia2V5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIkF2YXRhciIsInByb3BzIiwiaWQiLCJhdmF0YXJWaXNpYmxlIiwib3BlbiIsImNvbG9yIiwibWFuYWdlT3BlbmVkIiwibWVtYmVyIiwiYXZhdGFyIiwibmFtZSIsInRpdGxlIiwic2l6ZSIsImNhblJlbW92ZSIsImNsaWNrYWJsZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJvblJlbW92ZSIsImlzT3BlbiIsInNldElzT3BlbiIsIm9uQXZhdGFyQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZ2V0SW5pdGlhbHMiLCJzcGxpdCIsImxldHRlciIsImluZGV4Iiwiam9pbiIsInRvVXBwZXJDYXNlIiwiZml4UGhvdG9TaXplIiwibmF0aXZlRXZlbnQiLCJwYXRoIiwiY29tcG9zZWRQYXRoIiwiaW1hZ2UiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0Iiwic2l6ZXMiLCJwYXJhbWV0ZXJzIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImhhc0F2YXRhciIsIkJvb2xlYW4iLCJhdmF0YXJJc1Zpc2libGUiLCJvcGVuU3RhdGUiLCJlbG0iLCJpbm5lclJlZiIsImN1cnJlbnQiLCJlIiwiZGVmYXVsdFByb3BzIiwibm9vcCIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiQXZhdGFyTWVtYmVyIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImJvb2wiLCJvbmVPZiIsInNoYXBlIiwiZnVuYyIsIm9iamVjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQUEsT0FBTyxDQUFDQyxlQUFSLEdBQTBCLFlBQVk7QUFDbEMsTUFBSUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLFNBQVQsQ0FBbUJDLElBQW5CLENBQXdCQyxJQUF4QixDQUE2QkMsTUFBTSxDQUFDSCxTQUFQLENBQWlCSSxRQUE5QyxDQUFqQjtBQUNBUixFQUFBQSxPQUFPLENBQUNTLEdBQVIsQ0FBWUMsS0FBWixDQUFrQlYsT0FBbEIsRUFBMkJXLEtBQUssQ0FBQ1AsU0FBTixDQUFnQlEsR0FBaEIsQ0FBb0JQLElBQXBCLENBQXlCUSxTQUF6QixFQUFvQyxVQUFVQyxDQUFWLEVBQWE7QUFDeEUsWUFBUVosVUFBVSxDQUFDWSxDQUFELENBQVYsQ0FBY0MsS0FBZCxDQUFvQixDQUFwQixFQUF1QixDQUFDLENBQXhCLENBQVI7QUFDSSxXQUFLLFFBQUw7QUFDQSxXQUFLLFFBQUw7QUFDQSxXQUFLLFdBQUw7QUFDQSxXQUFLLE1BQUw7QUFDQSxXQUFLLFNBQUw7QUFDSSxlQUFPRCxDQUFQOztBQUNKLFdBQUssT0FBTDtBQUFhRSxRQUFBQSxDQUFDO0FBQ1YsZUFBT0YsQ0FBQyxDQUFDQyxLQUFGLEVBQVA7O0FBQ0o7QUFDSSxZQUFJRSxHQUFHLEdBQUdWLE1BQU0sQ0FBQ1csTUFBUCxDQUFjWCxNQUFNLENBQUNZLGNBQVAsQ0FBc0JMLENBQXRCLENBQWQsQ0FBVjtBQUNBRyxRQUFBQSxHQUFHLENBQUNHLFdBQUosR0FBa0JOLENBQUMsQ0FBQ00sV0FBcEI7O0FBQ0EsYUFBSyxJQUFJQyxHQUFULElBQWdCUCxDQUFoQixFQUFtQjtBQUNmRyxVQUFBQSxHQUFHLENBQUNJLEdBQUQsQ0FBSCxHQUFXUCxDQUFDLENB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QVlmakIsRUFBQUEsUUFBUSxFQUFFUSxzQkFBVVUsTUFaTDtBQWFmbEQsRUFBQUEsU0FBUyxFQUFFd0Msc0JBQVVDO0FBYk4sQ0FBbkI7OzRCQWdCZUosS0FBSyxDQUFDYyxJQUFOLENBQVdqRSxNQUFYLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge25vb3AsIG5vcm1hbGl6ZVVSTH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7SWNvbn0gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc29sZS5zaGFsbG93Q2xvbmVMb2cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdHlwZVN0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZylcclxuICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlU3RyaW5nKHgpLnNsaWNlKDgsIC0xKSkge1xyXG4gICAgICAgICAgICBjYXNlICdOdW1iZXInOlxyXG4gICAgICAgICAgICBjYXNlICdTdHJpbmcnOlxyXG4gICAgICAgICAgICBjYXNlICdVbmRlZmluZWQnOlxyXG4gICAgICAgICAgICBjYXNlICdOdWxsJzpcclxuICAgICAgICAgICAgY2FzZSAnQm9vbGVhbic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcclxuICAgICAgICAgICAgY2FzZSAnQXJyYXknOnNcclxuICAgICAgICAgICAgICAgIHJldHVybiB4LnNsaWNlKCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB2YXIgb3V0ID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YoeCkpO1xyXG4gICAgICAgICAgICAgICAgb3V0LmNvbnN0cnVjdG9yID0geC5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0W2tleV0gPSB4W2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3V0LCAnY29uc3RydWN0b3InLCB7dmFsdWU6IHguY29uc3RydWN0b3J9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSkpO1xyXG59XHJcblxyXG5cclxuY29uc3QgQXZhdGFyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGF2YXRhclZpc2libGUsXHJcbiAgICAgICAgb3BlbixcclxuICAgICAgICBjb2xvcixcclxuICAgICAgICBtYW5hZ2VPcGVuZWQsXHJcbiAgICAgICAgbWVtYmVyOiB7XHJcbiAgICAgICAgICAgIGF2YXRhcixcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNpemUsXHJcbiAgICAgICAgY2FuUmVtb3ZlLFxyXG4gICAgICAgIGNsaWNrYWJsZSxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgb25DbGljaywgb25SZW1vdmVcclxuICAgIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgb25BdmF0YXJDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChjbGlja2FibGUpIHtcclxuICAgICAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pXHJcbiAgICAgICAgICAgIG9uQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0SW5pdGlhbHMgPSAobmFtZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuYW1lXHJcbiAgICAgICAgICAgIC5zcGxpdChcIiBcIilcclxuICAgICAgICAgICAgLm1hcCgobGV0dGVyLCBpbmRleCkgPT4gaW5kZXggPCAyID8gbGV0dGVyWzBdIDogJycpXHJcbiAgICAgICAgICAgIC5qb2luKFwiXCIpXHJcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpeFBob3RvU2l6ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtuYXRpdmVFdmVudH0gPSBldmVudDtcclxuICAgICAgICBjb25zdCB7cGF0aCA9IG5hdGl2ZUV2ZW50LmNvbXBvc2VkUGF0aCgpfSA9IG5hdGl2ZUV2ZW50O1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZSA9IHBhdGhbMF07XHJcbiAgICAgICAgY29uc3Qge25hdHVyYWxXaWR0aCwgbmF0dXJhbEhlaWdodH0gPSBpbWFnZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2l6ZXMgPSB7XHJcbiAgICAgICAgICAgIFwieHNcIjogXCIxLjVyZW1cIixcclxuICAgICAgICAgICAgXCJtZFwiOiBcIjJyZW1cIixcclxuICAgICAgICAgICAgXCJsZ1wiOiBcIjIuNXJlbVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gc2l6ZXNbc2l6ZV1cclxuXHJcbiAgICAgICAgaW1hZ2Uuc3R5bGUud2lkdGggPSBuYXR1cmFsV2lkdGggPCBuYXR1cmFsSGVpZ2h0ID8gcGFyYW1ldGVycyA6IFwiYXV0b1wiO1xyXG4gICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IG5hdHVyYWxXaWR0aCA8IG5hdHVyYWxIZWlnaHQgPyBcImF1dG9cIiA6IHBhcmFtZXRlcnM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhc0F2YXRhciA9IEJvb2xlYW4oYXZhdGFyKTtcclxuICAgIGNvbnN0IGF2YXRhcklzVmlzaWJsZSA9ICFoYXNBdmF0YXIgJiYgYXZhdGFyVmlzaWJsZTtcclxuXHJcbiAgICBjb25zdCBvcGVuU3RhdGUgPSBtYW5hZ2VPcGVuZWQgPyBvcGVuIDogaXNPcGVuO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgcmVmPXtlbG0gPT4gcHJvcHMuaW5uZXJSZWYuY3VycmVudCA9IGVsbX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzd2YtYXZhdGFyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgW2AtLSR7c2l6ZX1gXTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBbYC0tJHtjb2xvcn1gXTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBcIi0tY2xpY2thYmxlXCI6IGNsaWNrYWJsZSxcclxuICAgICAgICAgICAgICAgICAgICBcIi0tc2VsZWN0ZWRcIjogb3BlblN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc05hbWVdOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQXZhdGFyQ2xpY2t9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtoYXNBdmF0YXIgJiYgPGRpdiBjbGFzc05hbWU9XCJwaG90by1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQ9e2ZpeFBob3RvU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVtYmVyLXBob3RvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXthdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIHthdmF0YXJJc1Zpc2libGUgJiYgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIFwibWVtYmVyLWNvbnRhaW5lclwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLS1zZWxlY3RlZFwiOiBpc09wZW5cclxuICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbml0aWFsc1wiIHRpdGxlPXtuYW1lfT57Z2V0SW5pdGlhbHMobmFtZSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZW1iZXItaW5mb1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogb3BlblN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5hbWVcIj57bmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Y2FuUmVtb3ZlICYmIG9wZW5TdGF0ZSAmJiA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbW92ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmUoe2lkfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwieFwiIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuQXZhdGFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGlkOiAwLFxyXG4gICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgb3BlbjogZmFsc2UsXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IGZhbHNlLFxyXG4gICAgc2l6ZTogXCJ4c1wiLFxyXG4gICAgY2FuUmVtb3ZlOiBmYWxzZSxcclxuICAgIGF2YXRhclZpc2libGU6IHRydWUsXHJcbiAgICBjb2xvcjogXCJkZWZhdWx0XCIsXHJcbiAgICBvblJlbW92ZTogbm9vcCxcclxuICAgIG9uQ2xpY2s6IG5vb3AsXHJcbiAgICBpbm5lclJlZjogUmVhY3QuY3JlYXRlUmVmKCksXHJcbiAgICBjbGFzc05hbWU6IFwiXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF2YXRhck1lbWJlciA9IHtcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYXZhdGFyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59XHJcblxyXG5BdmF0YXIucHJvcFR5cGVzID0ge1xyXG4gICAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcclxuICAgIGF2YXRhclZpc2libGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgY2FuUmVtb3ZlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGNsaWNrYWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wieHNcIiwgXCJtZFwiLCBcImxnXCJdKSxcclxuICAgIG1lbWJlcjogUHJvcFR5cGVzLnNoYXBlKEF2YXRhck1lbWJlciksXHJcbiAgICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcImRlZmF1bHRcIiwgXCJwcmltYXJ5XCIsIFwibmVnYXRpdmVcIl0pLFxyXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBpbm5lclJlZjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEF2YXRhcikiXX0=