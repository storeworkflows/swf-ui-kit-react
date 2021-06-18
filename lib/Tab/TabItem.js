"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var _Popover = _interopRequireDefault(require("../Popover/Popover"));

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

var TabItem = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var infoRef = (0, React.useRef)(null);

  var _useState = (0, React.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      infoOpened = _useState2[0],
      setInfoOpened = _useState2[1];

  var item = props.item,
      isSelected = props.isSelected,
      hideLabel = props.hideLabel,
      tabSelected = props.tabSelected,
      disabled = props.disabled;
  var label = item.label,
      icon = item.icon,
      id = item.id,
      style = item.style,
      _item$required = item.required,
      required = _item$required === void 0 ? false : _item$required,
      _item$invalid = item.invalid,
      invalid = _item$invalid === void 0 ? false : _item$invalid,
      infoMessage = item.infoMessage;
  var hasIcon = !!icon;
  var hasRef = infoRef && infoRef.current;
  var tabClasses = (0, _classnames["default"])({
    "swf-tab": true,
    "active": isSelected && !disabled && !item.disabled,
    "disabled": disabled || item.disabled,
    "invalid": invalid
  });
  var popoverPositions = [{
    target: "top-center",
    content: "bottom-center"
  }, {
    target: "top-start",
    content: "bottom-start"
  }, {
    target: "top-end",
    content: "bottom-end"
  }, {
    target: "bottom-center",
    content: "top-center"
  }, {
    target: "bottom-start",
    content: "top-start"
  }, {
    target: "bottom-end",
    content: "top-end"
  }];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: tabClasses,
    onClick: function onClick() {
      return tabSelected(item, item.id, disabled || item.disabled);
    },
    style: style || {},
    ref: ref,
    children: [hasIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
      icon: icon,
      size: "sm"
    }), !hideLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "label",
      children: label
    }), required && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
      icon: 'asterisk',
      customSize: 8
    }), infoMessage && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "info-icon-container",
      ref: function ref(el) {
        return infoRef.current = el;
      },
      onClick: function onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        setInfoOpened(!infoOpened);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
        className: "info-icon",
        icon: infoOpened ? 'info-circle-fill' : 'info-circle',
        size: "sm"
      })
    }), hasRef && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"], {
      hideTail: true,
      manageOpened: true,
      opened: infoOpened,
      onOuterPopoverClicked: function onOuterPopoverClicked() {
        return setInfoOpened(false);
      },
      positionTarget: infoRef,
      positions: popoverPositions,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Popover["default"].Content, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "info-content",
          children: infoMessage
        })
      })
    })]
  }, id);
});

var _default = /*#__PURE__*/React.memo(TabItem);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWIvVGFiSXRlbS5qcyJdLCJuYW1lcyI6WyJUYWJJdGVtIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJpbmZvUmVmIiwiaW5mb09wZW5lZCIsInNldEluZm9PcGVuZWQiLCJpdGVtIiwiaXNTZWxlY3RlZCIsImhpZGVMYWJlbCIsInRhYlNlbGVjdGVkIiwiZGlzYWJsZWQiLCJsYWJlbCIsImljb24iLCJpZCIsInN0eWxlIiwicmVxdWlyZWQiLCJpbnZhbGlkIiwiaW5mb01lc3NhZ2UiLCJoYXNJY29uIiwiaGFzUmVmIiwiY3VycmVudCIsInRhYkNsYXNzZXMiLCJwb3BvdmVyUG9zaXRpb25zIiwidGFyZ2V0IiwiY29udGVudCIsImVsIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFNQSxPQUFPLGdCQUFHQyxLQUFLLENBQUNDLFVBQU4sQ0FBaUIsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQzdDLE1BQU1DLE9BQU8sR0FBRyxrQkFBTyxJQUFQLENBQWhCOztBQUQ2QyxrQkFFVCxvQkFBUyxLQUFULENBRlM7QUFBQTtBQUFBLE1BRXRDQyxVQUZzQztBQUFBLE1BRTFCQyxhQUYwQjs7QUFBQSxNQUl0Q0MsSUFKc0MsR0FJZ0JMLEtBSmhCLENBSXRDSyxJQUpzQztBQUFBLE1BSWhDQyxVQUpnQyxHQUlnQk4sS0FKaEIsQ0FJaENNLFVBSmdDO0FBQUEsTUFJcEJDLFNBSm9CLEdBSWdCUCxLQUpoQixDQUlwQk8sU0FKb0I7QUFBQSxNQUlUQyxXQUpTLEdBSWdCUixLQUpoQixDQUlUUSxXQUpTO0FBQUEsTUFJSUMsUUFKSixHQUlnQlQsS0FKaEIsQ0FJSVMsUUFKSjtBQUFBLE1BTXpDQyxLQU55QyxHQVF6Q0wsSUFSeUMsQ0FNekNLLEtBTnlD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RUEsVUFBVSxHQUFHLGtCQUFILEdBQXdCLGFBRjVDO0FBR0ksUUFBQSxJQUFJLEVBQUU7QUFIVjtBQVRZLE1BVmIsRUEwQkZlLE1BQU0saUJBQUkscUJBQUMsbUJBQUQ7QUFDUCxNQUFBLFFBQVEsRUFBRSxJQURIO0FBRVAsTUFBQSxZQUFZLEVBQUUsSUFGUDtBQUdQLE1BQUEsTUFBTSxFQUFFZixVQUhEO0FBSVAsTUFBQSxxQkFBcUIsRUFBRTtBQUFBLGVBQU1DLGFBQWEsQ0FBQyxLQUFELENBQW5CO0FBQUEsT0FKaEI7QUFLUCxNQUFBLGNBQWMsRUFBRUYsT0FMVDtBQU1QLE1BQUEsU0FBUyxFQUFFbUIsZ0JBTko7QUFBQSw2QkFRUCxxQkFBQyxtQkFBRCxDQUFTLE9BQVQ7QUFBQSwrQkFDSTtBQUFNLFVBQUEsU0FBUyxFQUFFLGNBQWpCO0FBQUEsb0JBQWtDTDtBQUFsQztBQURKO0FBUk8sTUExQlI7QUFBQSxLQUNFSixFQURGLENBQVA7QUF1Q0gsQ0FwRWUsQ0FBaEI7OzRCQXNFZWQsS0FBSyxDQUFDOEIsSUFBTixDQUFXL0IsT0FBWCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCBQb3BvdmVyIGZyb20gXCIuLi9Qb3BvdmVyL1BvcG92ZXJcIjtcclxuaW1wb3J0IHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRhYkl0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICBjb25zdCBpbmZvUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2luZm9PcGVuZWQsIHNldEluZm9PcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3Qge2l0ZW0sIGlzU2VsZWN0ZWQsIGhpZGVMYWJlbCwgdGFiU2VsZWN0ZWQsIGRpc2FibGVkfSA9IHByb3BzO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGxhYmVsLCBpY29uLCBpZCwgc3R5bGUsXHJcbiAgICAgICAgcmVxdWlyZWQgPSBmYWxzZSwgaW52YWxpZCA9IGZhbHNlLCBpbmZvTWVzc2FnZVxyXG4gICAgfSA9IGl0ZW07XHJcblxyXG4gICAgY29uc3QgaGFzSWNvbiA9ICEhaWNvbjtcclxuICAgIGNvbnN0IGhhc1JlZiA9IGluZm9SZWYgJiYgaW5mb1JlZi5jdXJyZW50O1xyXG5cclxuICAgIGNvbnN0IHRhYkNsYXNzZXMgPSBjbGFzc05hbWVzKHtcclxuICAgICAgICBcInN3Zi10YWJcIjogdHJ1ZSxcclxuICAgICAgICBcImFjdGl2ZVwiOiBpc1NlbGVjdGVkICYmICghZGlzYWJsZWQgJiYgIWl0ZW0uZGlzYWJsZWQpLFxyXG4gICAgICAgIFwiZGlzYWJsZWRcIjogZGlzYWJsZWQgfHwgaXRlbS5kaXNhYmxlZCxcclxuICAgICAgICBcImludmFsaWRcIjogaW52YWxpZFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBwb3BvdmVyUG9zaXRpb25zID0gW1xyXG4gICAgICAgIHt0YXJnZXQ6IFwidG9wLWNlbnRlclwiLCBjb250ZW50OiBcImJvdHRvbS1jZW50ZXJcIn0sXHJcbiAgICAgICAge3RhcmdldDogXCJ0b3Atc3RhcnRcIiwgY29udGVudDogXCJib3R0b20tc3RhcnRcIn0sXHJcbiAgICAgICAge3RhcmdldDogXCJ0b3AtZW5kXCIsIGNvbnRlbnQ6IFwiYm90dG9tLWVuZFwifSxcclxuICAgICAgICB7dGFyZ2V0OiBcImJvdHRvbS1jZW50ZXJcIiwgY29udGVudDogXCJ0b3AtY2VudGVyXCJ9LFxyXG4gICAgICAgIHt0YXJnZXQ6IFwiYm90dG9tLXN0YXJ0XCIsIGNvbnRlbnQ6IFwidG9wLXN0YXJ0XCJ9LFxyXG4gICAgICAgIHt0YXJnZXQ6IFwiYm90dG9tLWVuZFwiLCBjb250ZW50OiBcInRvcC1lbmRcIn1cclxuICAgIF1cclxuXHJcbiAgICByZXR1cm4gPGRpdlxyXG4gICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgY2xhc3NOYW1lPXt0YWJDbGFzc2VzfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHRhYlNlbGVjdGVkKGl0ZW0sIGl0ZW0uaWQsIChkaXNhYmxlZCB8fCBpdGVtLmRpc2FibGVkKSl9XHJcbiAgICAgICAgc3R5bGU9e3N0eWxlIHx8IHt9fVxyXG4gICAgICAgIHJlZj17cmVmfVxyXG4gICAgPlxyXG4gICAgICAgIHtoYXNJY29uICYmIDxJY29uIGljb249e2ljb259IHNpemU9XCJzbVwiLz59XHJcbiAgICAgICAgeyFoaWRlTGFiZWwgJiYgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPntsYWJlbH08L2Rpdj59XHJcbiAgICAgICAge3JlcXVpcmVkICYmIDxJY29uIGljb249eydhc3Rlcmlzayd9IGN1c3RvbVNpemU9ezh9Lz59XHJcbiAgICAgICAge2luZm9NZXNzYWdlICYmIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImluZm8taWNvbi1jb250YWluZXJcIn1cclxuICAgICAgICAgICAgcmVmPXtlbCA9PiBpbmZvUmVmLmN1cnJlbnQgPSBlbH1cclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRJbmZvT3BlbmVkKCFpbmZvT3BlbmVkKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJpbmZvLWljb25cIn1cclxuICAgICAgICAgICAgICAgIGljb249e2luZm9PcGVuZWQgPyAnaW5mby1jaXJjbGUtZmlsbCcgOiAnaW5mby1jaXJjbGUnfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT17XCJzbVwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICB7aGFzUmVmICYmIDxQb3BvdmVyXHJcbiAgICAgICAgICAgIGhpZGVUYWlsPXt0cnVlfVxyXG4gICAgICAgICAgICBtYW5hZ2VPcGVuZWQ9e3RydWV9XHJcbiAgICAgICAgICAgIG9wZW5lZD17aW5mb09wZW5lZH1cclxuICAgICAgICAgICAgb25PdXRlclBvcG92ZXJDbGlja2VkPXsoKSA9PiBzZXRJbmZvT3BlbmVkKGZhbHNlKX1cclxuICAgICAgICAgICAgcG9zaXRpb25UYXJnZXQ9e2luZm9SZWZ9XHJcbiAgICAgICAgICAgIHBvc2l0aW9ucz17cG9wb3ZlclBvc2l0aW9uc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiaW5mby1jb250ZW50XCJ9PntpbmZvTWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvUG9wb3Zlci5Db250ZW50PlxyXG4gICAgICAgIDwvUG9wb3Zlcj59XHJcbiAgICA8L2Rpdj5cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFRhYkl0ZW0pOyJdfQ==