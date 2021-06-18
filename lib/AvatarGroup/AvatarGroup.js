"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _index = require("../index");

var _utils = require("../utils");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

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

var AvatarGroup = function AvatarGroup(props) {
  var size = props.size,
      max = props.max,
      canAdd = props.canAdd,
      members = props.members,
      canRemove = props.canRemove,
      onRemove = props.onRemove,
      customIcon = props.customIcon,
      manageOpened = props.manageOpened,
      onClick = props.onClick,
      onAdd = props.onAdd,
      clickable = props.clickable;

  var _useState = (0, React.useState)(-1),
      _useState2 = _slicedToArray(_useState, 2),
      openedAvatar = _useState2[0],
      setOpenedAvatar = _useState2[1];

  var openAvatar = function openAvatar(index) {
    var isSameClicked = openedAvatar === index;
    setOpenedAvatar(isSameClicked ? -1 : index);
  };

  var handleClick = function handleClick(_ref) {
    var index = _ref.index,
        avatar = _ref.avatar;
    !manageOpened && openAvatar(index);
    return onClick({
      index: index,
      avatar: avatar
    });
  };

  var hasAdditionalMembers = members.length > max + 1;
  var maxViewers = hasAdditionalMembers ? max : members.length;
  var additionalMembers = members.length - max;
  var viewers = members.slice(0, maxViewers).reverse().filter(function (viewer) {
    return viewer.name;
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      //  ref={elm => props.innerRef.current = elm}
      className: (0, _classnames2["default"])(_defineProperty({
        "swf-avatar-container": true
      }, "--".concat(size), true)),
      children: [canAdd && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames2["default"])("avatar-multiple", "add-new-member", "additional-avatar"),
        onClick: function onClick() {
          return clickable && onAdd();
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
          icon: customIcon || "person-plus",
          size: size
        })
      }), hasAdditionalMembers && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames2["default"])("avatar-multiple", "additional-members"),
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          className: "additional-avatar",
          children: [String.fromCharCode(43), additionalMembers]
        })
      }), viewers.map(function (viewer, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Avatar, {
            id: viewer.id || index,
            size: size,
            canRemove: canRemove,
            onRemove: onRemove,
            member: viewer,
            manageOpened: true,
            onClick: function onClick() {
              return handleClick({
                index: index,
                avatar: viewer
              });
            },
            open: manageOpened ? viewer.open : openedAvatar === index
          })
        }, index + viewer.name.replace("", "_"));
      })]
    })
  });
};

AvatarGroup.defaultProps = {
  clickable: true,
  max: 5,
  size: "xs",
  members: [],
  canRemove: true,
  canAdd: true,
  onAdd: _utils.noop,
  onRemove: _utils.noop,
  onClick: _utils.noop,
  manageOpened: false,
  innerRef: /*#__PURE__*/React.createRef(),
  customIcon: ""
};
AvatarGroup.propTypes = {
  clickable: _propTypes["default"].bool,
  max: _propTypes["default"].number,
  size: _propTypes["default"].oneOf(["xs", "md", "lg"]),
  manageOpened: _propTypes["default"].bool,
  members: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string.isRequired,
    title: _propTypes["default"].string,
    avatar: _propTypes["default"].string,
    open: _propTypes["default"].bool
  })),
  canRemove: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  canAdd: _propTypes["default"].bool,
  customIcon: _propTypes["default"].string,
  onAdd: _propTypes["default"].func,
  onRemove: _propTypes["default"].func,
  innerRef: _propTypes["default"].object
};
var _default = AvatarGroup;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdmF0YXJHcm91cC9BdmF0YXJHcm91cC5qcyJdLCJuYW1lcyI6WyJBdmF0YXJHcm91cCIsInByb3BzIiwic2l6ZSIsIm1heCIsImNhbkFkZCIsIm1lbWJlcnMiLCJjYW5SZW1vdmUiLCJvblJlbW92ZSIsImN1c3RvbUljb24iLCJtYW5hZ2VPcGVuZWQiLCJvbkNsaWNrIiwib25BZGQiLCJjbGlja2FibGUiLCJvcGVuZWRBdmF0YXIiLCJzZXRPcGVuZWRBdmF0YXIiLCJvcGVuQXZhdGFyIiwiaW5kZXgiLCJpc1NhbWVDbGlja2VkIiwiaGFuZGxlQ2xpY2siLCJhdmF0YXIiLCJoYXNBZGRpdGlvbmFsTWVtYmVycyIsImxlbmd0aCIsIm1heFZpZXdlcnMiLCJhZGRpdGlvbmFsTWVtYmVycyIsInZpZXdlcnMiLCJzbGljZSIsInJldmVyc2UiLCJmaWx0ZXIiLCJ2aWV3ZXIiLCJuYW1lIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibWFwIiwiaWQiLCJvcGVuIiwicmVwbGFjZSIsImRlZmF1bHRQcm9wcyIsIm5vb3AiLCJpbm5lclJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwicHJvcFR5cGVzIiwiYm9vbCIsIm51bWJlciIsIm9uZU9mIiwiYXJyYXlPZiIsInNoYXBlIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInRpdGxlIiwiZnVuYyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BRXZCQyxJQUZ1QixHQUl2QkQsS0FKdUIsQ0FFdkJDLElBRnVCO0FBQUEsTUFFakJDLEdBRmlCLEdBSXZCRixLQUp1QixDQUVqQkUsR0FGaUI7QUFBQSxNQUVaQyxNQUZZLEdBSXZCSCxLQUp1QixDQUVaRyxNQUZZO0FBQUEsTUFF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QSxTQUFTLEVBQUU2QixzQkFBVUMsSUFERDtBQUVwQnZDLEVBQUFBLEdBQUcsRUFBRXNDLHNCQUFVRSxNQUZLO0FBR3BCekMsRUFBQUEsSUFBSSxFQUFFdUMsc0JBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsQ0FBaEIsQ0FIYztBQUlwQm5DLEVBQUFBLFlBQVksRUFBRWdDLHNCQUFVQyxJQUpKO0FBS3BCckMsRUFBQUEsT0FBTyxFQUFFb0Msc0JBQVVJLE9BQVYsQ0FBa0JKLHNCQUFVSyxLQUFWLENBQWdCO0FBQ3ZDakIsSUFBQUEsSUFBSSxFQUFFa0Isc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRGdCO0FBRXZDQyxJQUFBQSxLQUFLLEVBQUVILHNCQUFVQyxNQUZzQjtBQUd2QzdCLElBQUFBLE1BQU0sRUFBRTRCLHNCQUFVQyxNQUhxQjtBQUl2Q2QsSUFBQUEsSUFBSSxFQUFFYSxzQkFBVUw7QUFKdUIsR0FBaEIsQ0FBbEIsQ0FMVztBQVdwQnBDLEVBQUFBLFNBQVMsRUFBRW1DLHNCQUFVQyxJQVhEO0FBWXBCaEMsRUFBQUEsT0FBTyxFQUFFK0Isc0JBQVVVLElBWkM7QUFhcEIvQyxFQUFBQSxNQUFNLEVBQUVxQyxzQkFBVUMsSUFiRTtBQWNwQmxDLEVBQUFBLFVBQVUsRUFBRWlDLHNCQUFVTyxNQWRGO0FBZXBCckMsRUFBQUEsS0FBSyxFQUFFOEIsc0JBQVVVLElBZkc7QUFnQnBCNUMsRUFBQUEsUUFBUSxFQUFFa0Msc0JBQVVVLElBaEJBO0FBaUJwQmIsRUFBQUEsUUFBUSxFQUFFRyxzQkFBVVc7QUFqQkEsQ0FBeEI7ZUFxQmVwRCxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHtBdmF0YXJ9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQge25vb3B9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQXZhdGFyR3JvdXAgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBzaXplLCBtYXgsIGNhbkFkZCwgbWVtYmVycywgY2FuUmVtb3ZlLCBvblJlbW92ZSwgY3VzdG9tSWNvbixcclxuICAgICAgICBtYW5hZ2VPcGVuZWQsIG9uQ2xpY2ssIG9uQWRkLCBjbGlja2FibGVcclxuICAgIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFtvcGVuZWRBdmF0YXIsIHNldE9wZW5lZEF2YXRhcl0gPSB1c2VTdGF0ZSgtMSlcclxuXHJcbiAgICBjb25zdCBvcGVuQXZhdGFyID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNTYW1lQ2xpY2tlZCA9IG9wZW5lZEF2YXRhciA9PT0gaW5kZXg7XHJcbiAgICAgICAgc2V0T3BlbmVkQXZhdGFyKGlzU2FtZUNsaWNrZWQgPyAtMSA6IGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICh7aW5kZXgsIGF2YXRhcn0pID0+IHtcclxuICAgICAgICAhbWFuYWdlT3BlbmVkICYmIG9wZW5BdmF0YXIoaW5kZXgpXHJcbiAgICAgICAgcmV0dXJuIG9uQ2xpY2soe2luZGV4LCBhdmF0YXJ9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYXNBZGRpdGlvbmFsTWVtYmVycyA9IG1lbWJlcnMubGVuZ3RoID4gbWF4ICsgMTtcclxuICAgIGNvbnN0IG1heFZpZXdlcnMgPSBoYXNBZGRpdGlvbmFsTWVtYmVycyA/IG1heCA6IG1lbWJlcnMubGVuZ3RoO1xyXG4gICAgY29uc3QgYWRkaXRpb25hbE1lbWJlcnMgPSBtZW1iZXJzLmxlbmd0aCAtIG1heDtcclxuXHJcbiAgICBjb25zdCB2aWV3ZXJzID0gbWVtYmVycy5zbGljZSgwLCBtYXhWaWV3ZXJzKS5yZXZlcnNlKCkuZmlsdGVyKHZpZXdlciA9PiB2aWV3ZXIubmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgLy8gIHJlZj17ZWxtID0+IHByb3BzLmlubmVyUmVmLmN1cnJlbnQgPSBlbG19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN3Zi1hdmF0YXItY29udGFpbmVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgLS0ke3NpemV9YF06IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2FuQWRkICYmIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyLW11bHRpcGxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkLW5ldy1tZW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRpdGlvbmFsLWF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbGlja2FibGUgJiYgb25BZGQoKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtjdXN0b21JY29uIHx8IFwicGVyc29uLXBsdXNcIn0gc2l6ZT17c2l6ZX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG5cclxuICAgICAgICAgICAgICAgIHtoYXNBZGRpdGlvbmFsTWVtYmVycyAmJiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBcImF2YXRhci1tdWx0aXBsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYWRkaXRpb25hbC1tZW1iZXJzXCJcclxuICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFkZGl0aW9uYWwtYXZhdGFyXCI+e1N0cmluZy5mcm9tQ2hhckNvZGUoNDMpfXthZGRpdGlvbmFsTWVtYmVyc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgICAgICAgICAge3ZpZXdlcnMubWFwKCh2aWV3ZXIsIGluZGV4KSA9PiAgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleCArIHZpZXdlci5uYW1lLnJlcGxhY2UoXCJcIiwgXCJfXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3ZpZXdlci5pZCB8fCBpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e3NpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5SZW1vdmU9e2NhblJlbW92ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXtvblJlbW92ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcj17dmlld2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlT3BlbmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soe2luZGV4LCBhdmF0YXI6IHZpZXdlcn0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17bWFuYWdlT3BlbmVkID8gdmlld2VyLm9wZW4gOiBvcGVuZWRBdmF0YXIgPT09IGluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbkF2YXRhckdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgIG1heDogNSxcclxuICAgIHNpemU6IFwieHNcIixcclxuICAgIG1lbWJlcnM6IFtdLFxyXG4gICAgY2FuUmVtb3ZlOiB0cnVlLFxyXG4gICAgY2FuQWRkOiB0cnVlLFxyXG4gICAgb25BZGQ6IG5vb3AsXHJcbiAgICBvblJlbW92ZTogbm9vcCxcclxuICAgIG9uQ2xpY2s6IG5vb3AsXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IGZhbHNlLFxyXG4gICAgaW5uZXJSZWY6IFJlYWN0LmNyZWF0ZVJlZigpLFxyXG4gICAgY3VzdG9tSWNvbjogXCJcIlxyXG59XHJcblxyXG5BdmF0YXJHcm91cC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGlja2FibGU6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWF4OiBwcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgc2l6ZTogcHJvcFR5cGVzLm9uZU9mKFtcInhzXCIsIFwibWRcIiwgXCJsZ1wiXSksXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWVtYmVyczogcHJvcFR5cGVzLmFycmF5T2YocHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgYXZhdGFyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIG9wZW46IFByb3BUeXBlcy5ib29sXHJcbiAgICB9KSksXHJcbiAgICBjYW5SZW1vdmU6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgb25DbGljazogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjYW5BZGQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgY3VzdG9tSWNvbjogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uQWRkOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uUmVtb3ZlOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIGlubmVyUmVmOiBwcm9wVHlwZXMub2JqZWN0LFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyR3JvdXBcclxuIl19