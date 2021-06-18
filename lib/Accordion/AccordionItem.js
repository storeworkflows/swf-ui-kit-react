"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _findByType = _interopRequireDefault(require("../utils/findByType"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _utils = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AccordionItem = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(function (props, ref) {
  var manageOpened = props.manageOpened,
      onClick = props.onClick,
      onSelected = props.onSelected,
      opened = props.opened,
      children = props.children,
      className = props.className,
      label = props.label,
      triggerIcon = props.triggerIcon,
      iconToStart = props.iconToStart,
      headerClassName = props.headerClassName,
      isLastItem = props.isLastItem,
      isFirstItem = props.isFirstItem,
      id = props.id;

  var _useState = (0, React.useState)(opened),
      _useState2 = _slicedToArray(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var itemClicked = function itemClicked() {
    onClick({
      opened: manageOpened ? opened : !isOpened
    });
    !manageOpened && setIsOpened(!isOpened);
    onSelected({
      key: id
    });
  };

  var renderHeader = function renderHeader() {
    var header = (0, _findByType["default"])(children, "Header");
    if (!header || !header.length) return /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      children: label
    });
    return header;
  };

  var renderContent = function renderContent() {
    if (!children) return;
    var header = (0, _findByType["default"])(children, "Header");
    var contentElements = React.Children.toArray(children).slice();

    if (header && header.length) {
      var headerType = header[0].type;
      contentElements = contentElements.filter(function (child) {
        return child.type !== headerType;
      });
    }

    if (contentElements.length) return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "accordion-content",
      children: contentElements
    });
    return null;
  };

  var renderIcon = function renderIcon() {
    var classes = (0, _classnames["default"])({
      "trigger-icon": true,
      "left": iconToStart,
      "right": !iconToStart
    });
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
      className: classes,
      icon: triggerIcon,
      variant: "tertiary"
    });
  };

  var currentOpened = manageOpened ? opened : isOpened;
  var itemStyles = (0, _classnames["default"])(className, {
    "accordion-item": true,
    "last": isLastItem,
    "first": isFirstItem
  });
  var headerContentStyles = (0, _classnames["default"])({
    "accordion-header-content": true,
    "left": !iconToStart,
    "right": iconToStart,
    "opened": currentOpened
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: itemStyles,
    ref: ref,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames["default"])(headerClassName, "accordion-item-header"),
      onClick: itemClicked,
      children: [iconToStart && renderIcon(), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: headerContentStyles,
        children: renderHeader()
      }), !iconToStart && renderIcon()]
    }), currentOpened && renderContent()]
  });
}), function (prev, next) {
  return (0, _reactFastCompare["default"])(prev, next);
});
AccordionItem.defaultProps = {
  triggerIcon: "chevron-down",
  className: "",
  onClick: _utils.noop,
  onSelected: _utils.noop,
  headerClassName: "",
  id: "-1"
};
AccordionItem.propTypes = {
  label: _propTypes["default"].string,
  opened: _propTypes["default"].bool,
  manageOpened: _propTypes["default"].bool,
  onSelected: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  triggerIcon: _propTypes["default"].string,
  iconToStart: _propTypes["default"].bool,
  isLastItem: _propTypes["default"].bool,
  isFirstItem: _propTypes["default"].bool,
  className: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  headerClassName: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  id: _propTypes["default"].string
};
var _default = AccordionItem;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb24vQWNjb3JkaW9uSXRlbS5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb25JdGVtIiwiUmVhY3QiLCJtZW1vIiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwibWFuYWdlT3BlbmVkIiwib25DbGljayIsIm9uU2VsZWN0ZWQiLCJvcGVuZWQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImxhYmVsIiwidHJpZ2dlckljb24iLCJpY29uVG9TdGFydCIsImhlYWRlckNsYXNzTmFtZSIsImlzTGFzdEl0ZW0iLCJpc0ZpcnN0SXRlbSIsImlkIiwiaXNPcGVuZWQiLCJzZXRJc09wZW5lZCIsIml0ZW1DbGlja2VkIiwia2V5IiwicmVuZGVySGVhZGVyIiwiaGVhZGVyIiwibGVuZ3RoIiwicmVuZGVyQ29udGVudCIsImNvbnRlbnRFbGVtZW50cyIsIkNoaWxkcmVuIiwidG9BcnJheSIsInNsaWNlIiwiaGVhZGVyVHlwZSIsInR5cGUiLCJmaWx0ZXIiLCJjaGlsZCIsInJlbmRlckljb24iLCJjbGFzc2VzIiwiY3VycmVudE9wZW5lZCIsIml0ZW1TdHlsZXMiLCJoZWFkZXJDb250ZW50U3R5bGVzIiwicHJldiIsIm5leHQiLCJkZWZhdWx0UHJvcHMiLCJub29wIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJvbmVPZlR5cGUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxnQkFBR0MsS0FBSyxDQUFDQyxJQUFOLGVBQVdELEtBQUssQ0FBQ0UsVUFBTixDQUFpQixVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFBQSxNQUcxREMsWUFIMEQsR0FLMURGLEtBTDBELENBRzFERSxZQUgwRDtBQUFBLE1BRzVDQyxPQUg0QyxHQUsxREgsS0FMMEQsQ0FHNUNHLE9BSDRDO0FB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YUFBYSxDQUFDNEMsU0FBZCxHQUEwQjtBQUN0QmhDLEVBQUFBLEtBQUssRUFBRWdDLHNCQUFVQyxNQURLO0FBRXRCcEMsRUFBQUEsTUFBTSxFQUFFbUMsc0JBQVVFLElBRkk7QUFHdEJ4QyxFQUFBQSxZQUFZLEVBQUVzQyxzQkFBVUUsSUFIRjtBQUl0QnRDLEVBQUFBLFVBQVUsRUFBRW9DLHNCQUFVRyxJQUpBO0FBS3RCeEMsRUFBQUEsT0FBTyxFQUFFcUMsc0JBQVVHLElBTEc7QUFNdEJsQyxFQUFBQSxXQUFXLEVBQUUrQixzQkFBVUMsTUFORDtBQU90Qi9CLEVBQUFBLFdBQVcsRUFBRThCLHNCQUFVRSxJQVBEO0FBUXRCOUIsRUFBQUEsVUFBVSxFQUFFNEIsc0JBQVVFLElBUkE7QUFTdEI3QixFQUFBQSxXQUFXLEVBQUUyQixzQkFBVUUsSUFURDtBQVV0Qm5DLEVBQUFBLFNBQVMsRUFBRWlDLHNCQUFVSSxTQUFWLENBQW9CLENBQUNKLHNCQUFVSyxNQUFYLEVBQW1CTCxzQkFBVUMsTUFBN0IsQ0FBcEIsQ0FWVztBQVd0QjlCLEVBQUFBLGVBQWUsRUFBRTZCLHNCQUFVSSxTQUFWLENBQW9CLENBQUNKLHNCQUFVSyxNQUFYLEVBQW1CTCxzQkFBVUMsTUFBN0IsQ0FBcEIsQ0FYSztBQVl0QjNCLEVBQUFBLEVBQUUsRUFBRTBCLHNCQUFVQztBQVpRLENBQTFCO2VBZWU3QyxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IGZpbmRCeVR5cGUgZnJvbSBcIi4uL3V0aWxzL2ZpbmRCeVR5cGVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGlzRXF1YWwgZnJvbSBcInJlYWN0LWZhc3QtY29tcGFyZVwiO1xyXG5pbXBvcnQge25vb3B9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuY29uc3QgQWNjb3JkaW9uSXRlbSA9IFJlYWN0Lm1lbW8oUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBtYW5hZ2VPcGVuZWQsIG9uQ2xpY2ssIG9uU2VsZWN0ZWQsIG9wZW5lZCwgY2hpbGRyZW4sIGNsYXNzTmFtZSwgbGFiZWwsXHJcbiAgICAgICAgdHJpZ2dlckljb24sIGljb25Ub1N0YXJ0LCBoZWFkZXJDbGFzc05hbWUsIGlzTGFzdEl0ZW0sIGlzRmlyc3RJdGVtLCBpZFxyXG4gICAgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgW2lzT3BlbmVkLCBzZXRJc09wZW5lZF0gPSB1c2VTdGF0ZShvcGVuZWQpXHJcblxyXG4gICAgY29uc3QgaXRlbUNsaWNrZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgb25DbGljayh7b3BlbmVkOiBtYW5hZ2VPcGVuZWQgPyBvcGVuZWQgOiAhaXNPcGVuZWR9KTtcclxuICAgICAgICAhbWFuYWdlT3BlbmVkICYmIHNldElzT3BlbmVkKCFpc09wZW5lZClcclxuICAgICAgICBvblNlbGVjdGVkKHtrZXk6IGlkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGZpbmRCeVR5cGUoY2hpbGRyZW4sIFwiSGVhZGVyXCIpO1xyXG5cclxuICAgICAgICBpZiAoIWhlYWRlciB8fCAhaGVhZGVyLmxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuIDxsYWJlbD57bGFiZWx9PC9sYWJlbD47XHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCFjaGlsZHJlbikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBmaW5kQnlUeXBlKGNoaWxkcmVuLCBcIkhlYWRlclwiKTtcclxuICAgICAgICBsZXQgY29udGVudEVsZW1lbnRzID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikuc2xpY2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGhlYWRlciAmJiBoZWFkZXIubGVuZ3RoKXtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyVHlwZSA9IGhlYWRlclswXS50eXBlO1xyXG4gICAgICAgICAgICBjb250ZW50RWxlbWVudHMgPSBjb250ZW50RWxlbWVudHMuZmlsdGVyKGNoaWxkID0+IGNoaWxkLnR5cGUgIT09IGhlYWRlclR5cGUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29udGVudEVsZW1lbnRzLmxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcImFjY29yZGlvbi1jb250ZW50XCJ9PlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnRFbGVtZW50c31cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJJY29uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgXCJ0cmlnZ2VyLWljb25cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJsZWZ0XCI6IGljb25Ub1N0YXJ0LFxyXG4gICAgICAgICAgICBcInJpZ2h0XCI6ICFpY29uVG9TdGFydFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cclxuICAgICAgICAgICAgaWNvbj17dHJpZ2dlckljb259XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9e1widGVydGlhcnlcIn1cclxuICAgICAgICAvPlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRPcGVuZWQgPSBtYW5hZ2VPcGVuZWQgPyBvcGVuZWQgOiBpc09wZW5lZDtcclxuXHJcbiAgICBjb25zdCBpdGVtU3R5bGVzID0gY2xhc3NuYW1lcyhcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImFjY29yZGlvbi1pdGVtXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwibGFzdFwiOiBpc0xhc3RJdGVtLFxyXG4gICAgICAgICAgICBcImZpcnN0XCI6IGlzRmlyc3RJdGVtXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBjb25zdCBoZWFkZXJDb250ZW50U3R5bGVzID0gY2xhc3NuYW1lcyhcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiYWNjb3JkaW9uLWhlYWRlci1jb250ZW50XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwibGVmdFwiOiAhaWNvblRvU3RhcnQsXHJcbiAgICAgICAgICAgIFwicmlnaHRcIjogaWNvblRvU3RhcnQsXHJcbiAgICAgICAgICAgIFwib3BlbmVkXCI6IGN1cnJlbnRPcGVuZWRcclxuICAgICAgICB9KVxyXG5cclxuICAgIHJldHVybiAgPGRpdiBjbGFzc05hbWU9e2l0ZW1TdHlsZXN9IHJlZj17cmVmfT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoaGVhZGVyQ2xhc3NOYW1lLCBcImFjY29yZGlvbi1pdGVtLWhlYWRlclwiKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtpdGVtQ2xpY2tlZH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aWNvblRvU3RhcnQgJiYgcmVuZGVySWNvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtoZWFkZXJDb250ZW50U3R5bGVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckhlYWRlcigpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHshaWNvblRvU3RhcnQgJiYgcmVuZGVySWNvbigpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVudE9wZW5lZCAmJiByZW5kZXJDb250ZW50KCl9XHJcbiAgICA8L2Rpdj5cclxuXHJcbn0pLCAocHJldiwgbmV4dCkgPT4ge1xyXG4gICAgcmV0dXJuIGlzRXF1YWwocHJldiwgbmV4dCk7XHJcbn0pO1xyXG5cclxuQWNjb3JkaW9uSXRlbS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB0cmlnZ2VySWNvbjogXCJjaGV2cm9uLWRvd25cIixcclxuICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgIG9uQ2xpY2s6IG5vb3AsXHJcbiAgICBvblNlbGVjdGVkOiBub29wLFxyXG4gICAgaGVhZGVyQ2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgaWQ6IFwiLTFcIlxyXG59XHJcblxyXG5BY2NvcmRpb25JdGVtLnByb3BUeXBlcyA9IHtcclxuICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb3BlbmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZU9wZW5lZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvblNlbGVjdGVkOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uQ2xpY2s6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgdHJpZ2dlckljb246IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpY29uVG9TdGFydDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpc0xhc3RJdGVtOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGlzRmlyc3RJdGVtOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLm9iamVjdCwgcHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gICAgaGVhZGVyQ2xhc3NOYW1lOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMub2JqZWN0LCBwcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgICBpZDogcHJvcFR5cGVzLnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb25JdGVtIl19