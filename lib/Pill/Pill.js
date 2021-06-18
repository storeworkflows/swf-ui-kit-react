"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _Avatar = _interopRequireDefault(require("../Avatar/Avatar"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _utils = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Pill = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classnames;

  var canDismiss = props.canDismiss,
      icon = props.icon,
      classNames = props.classNames,
      member = props.member,
      label = props.label,
      outline = props.outline,
      size = props.size,
      clickable = props.clickable,
      color = props.color,
      deleteIcon = props.deleteIcon,
      onDelete = props.onDelete,
      disabled = props.disabled,
      _onClick = props.onClick;

  var removePill = function removePill(e) {
    e === null || e === void 0 ? void 0 : e.stopPropagation();
    e === null || e === void 0 ? void 0 : e.preventDefault();

    if (onDelete === _utils.noop) {
      var curEl = e.target.parentElement.parentElement;
      var iconEl = curEl.classList.contains("pill-icon") ? curEl.parentElement : curEl;
      iconEl === null || iconEl === void 0 ? void 0 : iconEl.remove();
    }

    onDelete(props);
  };

  var hasMember = member;
  var hasIcon = !hasMember && icon;
  var showPillIcon = hasMember || hasIcon;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      ref: ref,
      className: (0, _classnames2["default"])((_classnames = {
        "pill": true,
        "--disabled": disabled,
        "--clickable": clickable && !disabled,
        "--outlined": outline
      }, _defineProperty(_classnames, "--".concat(size), true), _defineProperty(_classnames, "--".concat(color), true), _defineProperty(_classnames, classNames, true), _classnames)),
      onClick: function onClick() {
        return _onClick(props);
      },
      children: [showPillIcon && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "pill-icon",
        children: [hasMember && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar["default"], {
          member: member,
          clickable: false
        }), hasIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
          icon: icon,
          size: "sm"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: (0, _classnames2["default"])("pill-label", ["--".concat(size)]),
        children: label
      }), canDismiss && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pill-icon --delete",
        onClick: removePill,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
          icon: deleteIcon || "x",
          size: "sm"
        })
      })]
    })
  });
});
Pill.defaultProps = {
  canDismiss: false,
  disabled: false,
  icon: null,
  member: null,
  label: "",
  outline: false,
  size: "md",
  classNames: "",
  clickable: false,
  color: "default",
  deleteIcon: null,
  onDelete: _utils.noop,
  onClick: _utils.noop
};
Pill.propTypes = {
  canDismiss: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
  member: _propTypes["default"].shape({
    name: _propTypes["default"].string.isRequired,
    title: _propTypes["default"].string,
    avatar: _propTypes["default"].string,
    id: _propTypes["default"].string.isRequired
  }),
  disabled: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  outline: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["sm", "md", "xl"]),
  classNames: _propTypes["default"].string,
  clickable: _propTypes["default"].bool,
  color: _propTypes["default"].oneOf(["default", "primary", "negative"]),
  deleteIcon: _propTypes["default"].string,
  onDelete: _propTypes["default"].func,
  onClick: _propTypes["default"].func
};

var _default = /*#__PURE__*/React.memo(Pill);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QaWxsL1BpbGwuanMiXSwibmFtZXMiOlsiUGlsbCIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiY2FuRGlzbWlzcyIsImljb24iLCJjbGFzc05hbWVzIiwibWVtYmVyIiwibGFiZWwiLCJvdXRsaW5lIiwic2l6ZSIsImNsaWNrYWJsZSIsImNvbG9yIiwiZGVsZXRlSWNvbiIsIm9uRGVsZXRlIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwicmVtb3ZlUGlsbCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIm5vb3AiLCJjdXJFbCIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJpY29uRWwiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImhhc01lbWJlciIsImhhc0ljb24iLCJzaG93UGlsbEljb24iLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwic2hhcGUiLCJuYW1lIiwiaXNSZXF1aXJlZCIsInRpdGxlIiwiYXZhdGFyIiwiaWQiLCJvbmVPZiIsImZ1bmMiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEsSUFBSSxnQkFBR0MsS0FBSyxDQUFDQyxVQUFOLENBQWlCLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUFBOztBQUFBLE1BRXRDQyxVQUZzQyxHQWV0Q0YsS0Fmc0MsQ0FFdENFLFVBRnNDO0FBQUEsTUFHdENDLElBSHNDLEdBZXRDSCxLQWZzQyxDQUd0Q0csSUFIc0M7QUFBQSxNQUl0Q0MsVUFKc0MsR0FldENKLEtBZnNDLENBSXRDSSxVQUpzQztBQUFBLE1BS3RDQyxNQUxzQyxHQWV0Q0wsS0Fmc0MsQ0FLdENLLE1BTHNDO0FBQUEsTUFNdENDLEtBTnNDLEdBZXRDTixLQWZzQyxDQU10Q00sS0FOc0M7QUFB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RUFBQUEsVUFBVSxFQUFFNEIsc0JBQVVFLE1BYlQ7QUFjYnpCLEVBQUFBLFNBQVMsRUFBRXVCLHNCQUFVQyxJQWRSO0FBZWJ2QixFQUFBQSxLQUFLLEVBQUVzQixzQkFBVVMsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFVBQXZCLENBQWhCLENBZk07QUFnQmI5QixFQUFBQSxVQUFVLEVBQUVxQixzQkFBVUUsTUFoQlQ7QUFpQmJ0QixFQUFBQSxRQUFRLEVBQUVvQixzQkFBVVUsSUFqQlA7QUFrQmI1QixFQUFBQSxPQUFPLEVBQUVrQixzQkFBVVU7QUFsQk4sQ0FBakI7OzRCQXFCZTVDLEtBQUssQ0FBQzZDLElBQU4sQ0FBVzlDLElBQVgsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIi4uL0F2YXRhci9BdmF0YXJcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5pbXBvcnQge25vb3B9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQge3VzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQaWxsID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGNhbkRpc21pc3MsXHJcbiAgICAgICAgaWNvbixcclxuICAgICAgICBjbGFzc05hbWVzLFxyXG4gICAgICAgIG1lbWJlcixcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICBvdXRsaW5lLFxyXG4gICAgICAgIHNpemUsXHJcbiAgICAgICAgY2xpY2thYmxlLFxyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgICAgIGRlbGV0ZUljb24sXHJcbiAgICAgICAgb25EZWxldGUsXHJcbiAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgb25DbGlja1xyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZVBpbGwgPSAoZSkgPT57XHJcbiAgICAgICAgZT8uc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZT8ucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKG9uRGVsZXRlID09PSBub29wKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1ckVsID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBpY29uRWwgPSBjdXJFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJwaWxsLWljb25cIikgPyBjdXJFbC5wYXJlbnRFbGVtZW50IDogY3VyRWw7XHJcblxyXG4gICAgICAgICAgICBpY29uRWw/LnJlbW92ZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbkRlbGV0ZShwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYXNNZW1iZXIgPSBtZW1iZXI7XHJcbiAgICBjb25zdCBoYXNJY29uID0gIWhhc01lbWJlciAmJiBpY29uO1xyXG4gICAgY29uc3Qgc2hvd1BpbGxJY29uID0gaGFzTWVtYmVyIHx8IGhhc0ljb247XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJwaWxsXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCItLWRpc2FibGVkXCI6IGRpc2FibGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLS1jbGlja2FibGVcIjogY2xpY2thYmxlICYmICFkaXNhYmxlZCxcclxuICAgICAgICAgICAgICAgICAgICBcIi0tb3V0bGluZWRcIjogb3V0bGluZSxcclxuICAgICAgICAgICAgICAgICAgICBbYC0tJHtzaXplfWBdOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIFtgLS0ke2NvbG9yfWBdOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc05hbWVzXTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHByb3BzKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Nob3dQaWxsSWNvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cInBpbGwtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtoYXNNZW1iZXIgJiYgPEF2YXRhciBtZW1iZXI9e21lbWJlcn0gY2xpY2thYmxlPXtmYWxzZX0vPn1cclxuICAgICAgICAgICAgICAgICAgICB7aGFzSWNvbiAmJiA8SWNvbiBpY29uPXtpY29ufSBzaXplPVwic21cIi8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJwaWxsLWxhYmVsXCIsIFtgLS0ke3NpemV9YF0gKX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge2NhbkRpc21pc3MgJiYgPGRpdiBjbGFzc05hbWU9XCJwaWxsLWljb24gLS1kZWxldGVcIiBvbkNsaWNrPXtyZW1vdmVQaWxsfT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtkZWxldGVJY29uIHx8IFwieFwifSBzaXplPVwic21cIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufSk7XHJcblxyXG5QaWxsLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNhbkRpc21pc3M6IGZhbHNlLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgaWNvbjogbnVsbCxcclxuICAgIG1lbWJlcjogbnVsbCxcclxuICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgb3V0bGluZTogZmFsc2UsXHJcbiAgICBzaXplOiBcIm1kXCIsXHJcbiAgICBjbGFzc05hbWVzOiBcIlwiLFxyXG4gICAgY2xpY2thYmxlOiBmYWxzZSxcclxuICAgIGNvbG9yOiBcImRlZmF1bHRcIixcclxuICAgIGRlbGV0ZUljb246IG51bGwsXHJcbiAgICBvbkRlbGV0ZTogbm9vcCxcclxuICAgIG9uQ2xpY2s6IG5vb3BcclxufVxyXG5cclxuUGlsbC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjYW5EaXNtaXNzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBtZW1iZXI6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGF2YXRhcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXHJcbiAgICB9KSxcclxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb3V0bGluZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wic21cIiwgXCJtZFwiLCBcInhsXCJdKSxcclxuICAgIGNsYXNzTmFtZXM6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjbGlja2FibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXCJkZWZhdWx0XCIsIFwicHJpbWFyeVwiLCBcIm5lZ2F0aXZlXCJdKSxcclxuICAgIGRlbGV0ZUljb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbkRlbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQaWxsKSJdfQ==