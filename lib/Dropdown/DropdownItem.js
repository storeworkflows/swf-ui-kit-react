"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DropdownItem = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var id = props.id,
      disabled = props.disabled,
      onSelectAction = props.onSelectAction,
      isSelected = props.isSelected,
      label = props.label,
      className = props.className,
      sublabel = props.sublabel,
      number = props.number,
      icon = props.icon;
  var classes = (0, _classnames["default"])(className, "swf-dropdown-item", {
    "disabled": disabled,
    "selected": isSelected,
    "--no-icon": !icon
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classes,
    onClick: function onClick() {
      return !disabled && onSelectAction({
        id: id
      });
    },
    "data-key": id,
    ref: ref,
    children: [icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
      className: "item-element item-start",
      icon: icon,
      customSize: 20
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "text-items",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        className: "label",
        children: label
      }), sublabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "sublabel",
        children: sublabel
      })]
    }), number && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "item-element item-end",
      children: number
    })]
  });
});
DropdownItem.defaultProps = {
  disabled: false,
  isSelected: false,
  className: ""
};
DropdownItem.propTypes = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  onSelectAction: _propTypes["default"].func,
  isSelected: _propTypes["default"].bool,
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  sublabel: _propTypes["default"].string,
  number: _propTypes["default"].number,
  icon: _propTypes["default"].string
};

var _default = /*#__PURE__*/React.memo(DropdownItem, function (prev, next) {
  return (0, _reactFastCompare["default"])(prev, next);
});

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ecm9wZG93bi9Ecm9wZG93bkl0ZW0uanMiXSwibmFtZXMiOlsiRHJvcGRvd25JdGVtIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJpZCIsImRpc2FibGVkIiwib25TZWxlY3RBY3Rpb24iLCJpc1NlbGVjdGVkIiwibGFiZWwiLCJjbGFzc05hbWUiLCJzdWJsYWJlbCIsIm51bWJlciIsImljb24iLCJjbGFzc2VzIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJvYmplY3QiLCJtZW1vIiwicHJldiIsIm5leHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxnQkFBR0MsS0FBSyxDQUFDQyxVQUFOLENBQWlCLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUFBLE1BRzlDQyxFQUg4QyxHQUs5Q0YsS0FMOEMsQ0FHOUNFLEVBSDhDO0FBQUEsTUFHMUNDLFFBSDBDLEdBSzlDSCxLQUw4QyxDQUcxQ0csUUFIMEM7QUFBQSxNQUdoQ0MsY0FIZ0MsR0FLOUNKLEtBTDhDLENBR2hDSSxjQUhnQztBQUFBLE1BR2hCQyxVQUhnQixHQUs5Q0wsS0FMOEMsQ0FHaEJLLFVBSGdCO0FBQUEsTUFJOUNDLEtBSjhDLEdBSzlDTixLQUw4QyxDQUk5Q00sS0FKOEM7QUFBQSxNQUl2Q0MsU0FKdUMsR0FLOUNQLEtBTDhDLENBSXZDTyxTQUp1QztBQUFBLE1BSTVCQyxRQUo0QixHQUs5Q1IsS0FMOEMsQ0FJNUJRLFFBSjRCO0FBQUEsTUFJbEJDLE1BSmtCLEdBSzlDVCxLQUw4QyxDQUlsQlMsTUFKa0I7QUFBQSxNQUlWQyxJQUpVLEdBSzlDVixLQUw4QyxDQUlWVSxJQUpVO0FBT2xELE1BQUlDLE9BQU8sR0FBRyw0QkFDVkosU0FEVSxFQUVWLG1CQUZVLEVBR1Y7QUFDSSxnQkFBWUosUUFEaEI7QUFFSSxnQkFBWUUsVUFGaEI7QUFHSSxpQkFBYSxDQUFDSztBQUhsQixHQUhVLENBQWQ7QUFTQSxzQkFBTztBQUFLLElBQUEsU0FBUyxFQUFFQyxPQUFoQjtBQUNNLElBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTSxDQUFDUixRQUFELElBQWFDLGNBQWMsQ0FBQztBQUFDRixRQUFBQSxFQUFFLEVBQUZBO0FBQUQsT0FBRCxDQUFqQztBQUFBLEtBRGY7QUFFTSxnQkFBVUEsRUFGaEI7QUFHTSxJQUFBLEdBQUcsRUFBRUQsR0FIWDtBQUFBLGVBS01TLElBQUksaUJBQUkscUJBQUMsZ0JBQUQ7QUFDTCxNQUFBLFNBQVMsRUFBRSx5QkFETjtBQUVMLE1BQUEsSUFBSSxFQUFFQSxJQUZEO0FBR0wsTUFBQSxVQUFVLEVBQUU7QUFIUCxNQUxkLGVBVUs7QUFBSyxNQUFBLFNBQVMsRUFBRSxZQUFoQjtBQUFBLDhCQUNJO0FBQU8sUUFBQSxTQUFTLEVBQUUsT0FBbEI7QUFBQSxrQkFBNEJKO0FBQTVCLFFBREosRUFFS0UsUUFBUSxpQkFBSTtBQUFLLFFBQUEsU0FBUyxFQUFFLFVBQWhCO0FBQUEsa0JBQTZCQTtBQUE3QixRQUZqQjtBQUFBLE1BVkwsRUFjTUMsTUFBTSxpQkFBSTtBQUFNLE1BQUEsU0FBUyxFQUFFLHVCQUFqQjtBQUFBLGdCQUEyQ0E7QUFBM0MsTUFkaEI7QUFBQSxJQUFQO0FBZ0JILENBaENvQixDQUFyQjtBQWtDQVosWUFBWSxDQUFDZSxZQUFiLEdBQTRCO0FBQ3hCVCxFQUFBQSxRQUFRLEVBQUUsS0FEYztBQUV4QkUsRUFBQUEsVUFBVSxFQUFFLEtBRlk7QUFHeEJFLEVBQUFBLFNBQVMsRUFBRTtBQUhhLENBQTVCO0FBTUFWLFlBQVksQ0FBQ2dCLFNBQWIsR0FBeUI7QUFDckJYLEVBQUFBLEVBQUUsRUFBRVcsc0JBQVVDLFNBQVYsQ0FBb0IsQ0FDcEJELHNCQUFVRSxNQURVLEVBRXBCRixzQkFBVUosTUFGVSxDQUFwQixDQURpQjtBQUtyQkgsRUFBQUEsS0FBSyxFQUFFTyxzQkFBVUUsTUFMSTtBQU1yQlosRUFBQUEsUUFBUSxFQUFFVSxzQkFBVUcsSUFOQztBQU9yQlosRUFBQUEsY0FBYyxFQUFFUyxzQkFBVUksSUFQTDtBQVFyQlosRUFBQUEsVUFBVSxFQUFFUSxzQkFBVUcsSUFSRDtBQVNyQlQsRUFBQUEsU0FBUyxFQUFFTSxzQkFBVUMsU0FBVixDQUFvQixDQUFDRCxzQkFBVUssTUFBWCxFQUFtQkwsc0JBQVVFLE1BQTdCLENBQXBCLENBVFU7QUFVckJQLEVBQUFBLFFBQVEsRUFBRUssc0JBQVVFLE1BVkM7QUFXckJOLEVBQUFBLE1BQU0sRUFBRUksc0JBQVVKLE1BWEc7QUFZckJDLEVBQUFBLElBQUksRUFBRUcsc0JBQVVFO0FBWkssQ0FBekI7OzRCQWVlakIsS0FBSyxDQUFDcUIsSUFBTixDQUFXdEIsWUFBWCxFQUF5QixVQUFDdUIsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQ3BELFNBQU8sa0NBQVFELElBQVIsRUFBY0MsSUFBZCxDQUFQO0FBQ0gsQ0FGYyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IGlzRXF1YWwgZnJvbSBcInJlYWN0LWZhc3QtY29tcGFyZVwiO1xyXG5cclxuY29uc3QgRHJvcGRvd25JdGVtID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBpZCwgZGlzYWJsZWQsIG9uU2VsZWN0QWN0aW9uLCBpc1NlbGVjdGVkLFxyXG4gICAgICAgIGxhYmVsLCBjbGFzc05hbWUsIHN1YmxhYmVsLCBudW1iZXIsIGljb25cclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBsZXQgY2xhc3NlcyA9IGNsYXNzbmFtZXMoXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIFwic3dmLWRyb3Bkb3duLWl0ZW1cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogZGlzYWJsZWQsXHJcbiAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogaXNTZWxlY3RlZCxcclxuICAgICAgICAgICAgXCItLW5vLWljb25cIjogIWljb25cclxuICAgICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9XHJcbiAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gIWRpc2FibGVkICYmIG9uU2VsZWN0QWN0aW9uKHtpZH0pfVxyXG4gICAgICAgICAgICAgICAgIGRhdGEta2V5PXtpZH1cclxuICAgICAgICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2ljb24gJiYgPEljb25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiaXRlbS1lbGVtZW50IGl0ZW0tc3RhcnRcIn1cclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbVNpemU9ezIwfVxyXG4gICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0ZXh0LWl0ZW1zXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e1wibGFiZWxcIn0+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAge3N1YmxhYmVsICYmIDxkaXYgY2xhc3NOYW1lPXtcInN1YmxhYmVsXCJ9PntzdWJsYWJlbH08L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtudW1iZXIgJiYgPHNwYW4gY2xhc3NOYW1lPXtcIml0ZW0tZWxlbWVudCBpdGVtLWVuZFwifT57bnVtYmVyfTwvc3Bhbj59XHJcbiAgICA8L2Rpdj5cclxufSk7XHJcblxyXG5Ecm9wZG93bkl0ZW0uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgaXNTZWxlY3RlZDogZmFsc2UsXHJcbiAgICBjbGFzc05hbWU6IFwiXCJcclxufVxyXG5cclxuRHJvcGRvd25JdGVtLnByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHByb3BUeXBlcy5udW1iZXJcclxuICAgIF0pLFxyXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvblNlbGVjdEFjdGlvbjogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBpc1NlbGVjdGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLm9iamVjdCwgcHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gICAgc3VibGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBudW1iZXI6IHByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBpY29uOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKERyb3Bkb3duSXRlbSwgKHByZXYsIG5leHQpID0+IHtcclxuICAgIHJldHVybiBpc0VxdWFsKHByZXYsIG5leHQpO1xyXG59KTsiXX0=