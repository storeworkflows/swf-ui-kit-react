"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CalendarMonth = _interopRequireDefault(require("./InnerComponents/CalendarMonth"));

var _ArrowButton = _interopRequireDefault(require("./InnerComponents/ArrowButton"));

var _utils = require("./utils");

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _utils2 = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SmallCalendar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var selectedDate = props.selectedDate,
      onSelected = props.onSelected,
      manageValue = props.manageValue;

  var _useWrappedState = (0, _utils.useWrappedState)(selectedDate, _utils.checkDate),
      _useWrappedState2 = _slicedToArray(_useWrappedState, 2),
      selected = _useWrappedState2[0],
      setSelectedDate = _useWrappedState2[1];

  var _useWrappedState3 = (0, _utils.useWrappedState)(selectedDate, _utils.getDefinedDate),
      _useWrappedState4 = _slicedToArray(_useWrappedState3, 2),
      openedDateValue = _useWrappedState4[0],
      setOpenedDateValue = _useWrappedState4[1];

  (0, React.useEffect)(function () {
    if (manageValue) {
      setSelectedDate(selectedDate);
      setOpenedDateValue(selectedDate);
    }
  }, [selectedDate, manageValue]);
  var selectAction = (0, React.useCallback)(function (date) {
    if (!manageValue) {
      setSelectedDate(date);
      setOpenedDateValue(date);
    }

    onSelected(date);
  }, [manageValue, onSelected]);
  var changeMonth = (0, React.useCallback)(function (e, isNext, selectedDate) {
    e === null || e === void 0 ? void 0 : e.stopPropagation();
    var additionValue = isNext ? 1 : -1;
    var changedTo = (0, _moment["default"])(openedDateValue).add(additionValue, "month");

    if (selectedDate) {
      !manageValue && setSelectedDate(selectedDate);
      onSelected(selectedDate);
    }

    setOpenedDateValue(changedTo.toDate());
  }, [openedDateValue]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: ref,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_CalendarMonth["default"], {
      openedDate: openedDateValue,
      selectedDate: selected,
      onSelected: selectAction,
      manageSelected: true,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CalendarMonth["default"].HeaderStart, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowButton["default"], {
          onClick: changeMonth
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CalendarMonth["default"].HeaderEnd, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowButton["default"], {
          isNext: true,
          onClick: changeMonth
        })
      })]
    })
  });
});
SmallCalendar.defaultProps = {
  openedDate: null,
  onSelected: _utils2.noop
};
SmallCalendar.propTypes = {
  selectedDate: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].object]),
  onSelected: _propTypes["default"].func,
  manageValue: _propTypes["default"].bool
};

var _default = /*#__PURE__*/React.memo(SmallCalendar, function (prev, next) {
  return (0, _reactFastCompare["default"])(prev, next);
});

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TbWFsbENhbGVuZGFyL1NtYWxsQ2FsZW5kYXIuanMiXSwibmFtZXMiOlsiU21hbGxDYWxlbmRhciIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwic2VsZWN0ZWREYXRlIiwib25TZWxlY3RlZCIsIm1hbmFnZVZhbHVlIiwiY2hlY2tEYXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZERhdGUiLCJnZXREZWZpbmVkRGF0ZSIsIm9wZW5lZERhdGVWYWx1ZSIsInNldE9wZW5lZERhdGVWYWx1ZSIsInNlbGVjdEFjdGlvbiIsImRhdGUiLCJjaGFuZ2VNb250aCIsImUiLCJpc05leHQiLCJzdG9wUHJvcGFnYXRpb24iLCJhZGRpdGlvblZhbHVlIiwiY2hhbmdlZFRvIiwiYWRkIiwidG9EYXRlIiwiZGVmYXVsdFByb3BzIiwib3BlbmVkRGF0ZSIsIm5vb3AiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJzdHJpbmciLCJvYmplY3QiLCJmdW5jIiwiYm9vbCIsIm1lbW8iLCJwcmV2IiwibmV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLGdCQUFHQyxLQUFLLENBQUNDLFVBQU4sQ0FBaUIsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQUEsTUFFNUNDLFlBRjRDLEdBRUhGLEtBRkcsQ0FFNUNFLFlBRjRDO0FBQUEsTUFFOUJDLFVBRjhCLEdBRUhILEtBRkcsQ0FFOUJHLFVBRjhCO0FBQUEsTUFFbEJDLFdBRmtCLEdBRUhKLEtBRkcsQ0FFbEJJLFdBRmtCOztBQUFBLHlCQUlmLDRCQUFnQkYsWUFBaEIsRUFBOEJHLGdCQUE5QixDQUplO0FBQUE7QUFBQSxNQUk1Q0MsUUFKNEM7QUFBQSxNQUlsQ0MsZUFKa0M7O0FBQUEsMEJBS0wsNEJBQWdCTCxZQUFoQixF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XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2FsZW5kYXJNb250aCBmcm9tIFwiLi9Jbm5lckNvbXBvbmVudHMvQ2FsZW5kYXJNb250aFwiO1xyXG5pbXBvcnQgQXJyb3dCdXR0b24gZnJvbSBcIi4vSW5uZXJDb21wb25lbnRzL0Fycm93QnV0dG9uXCI7XHJcbmltcG9ydCB7Y2hlY2tEYXRlLCBnZXREZWZpbmVkRGF0ZSwgdXNlV3JhcHBlZFN0YXRlfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgaXNFcXVhbCBmcm9tIFwicmVhY3QtZmFzdC1jb21wYXJlXCI7XHJcbmltcG9ydCB7bm9vcH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5jb25zdCBTbWFsbENhbGVuZGFyID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtzZWxlY3RlZERhdGUsIG9uU2VsZWN0ZWQsIG1hbmFnZVZhbHVlfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWREYXRlXSA9IHVzZVdyYXBwZWRTdGF0ZShzZWxlY3RlZERhdGUsIGNoZWNrRGF0ZSk7XHJcbiAgICBjb25zdCBbb3BlbmVkRGF0ZVZhbHVlLCBzZXRPcGVuZWREYXRlVmFsdWVdID0gdXNlV3JhcHBlZFN0YXRlKHNlbGVjdGVkRGF0ZSwgZ2V0RGVmaW5lZERhdGUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1hbmFnZVZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRGF0ZShzZWxlY3RlZERhdGUpO1xyXG4gICAgICAgICAgICBzZXRPcGVuZWREYXRlVmFsdWUoc2VsZWN0ZWREYXRlKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtzZWxlY3RlZERhdGUsIG1hbmFnZVZhbHVlXSlcclxuXHJcbiAgICBjb25zdCBzZWxlY3RBY3Rpb24gPSB1c2VDYWxsYmFjaygoZGF0ZSkgPT4ge1xyXG4gICAgICAgIGlmICghbWFuYWdlVmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWREYXRlKGRhdGUpO1xyXG4gICAgICAgICAgICBzZXRPcGVuZWREYXRlVmFsdWUoZGF0ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgb25TZWxlY3RlZChkYXRlKVxyXG4gICAgfSwgW21hbmFnZVZhbHVlLCBvblNlbGVjdGVkXSlcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VNb250aCA9IHVzZUNhbGxiYWNrKChlLCBpc05leHQsIHNlbGVjdGVkRGF0ZSkgPT57XHJcbiAgICAgICAgZT8uc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGxldCBhZGRpdGlvblZhbHVlID0gaXNOZXh0ID8gMSA6IC0xO1xyXG4gICAgICAgIGxldCBjaGFuZ2VkVG8gPSBtb21lbnQob3BlbmVkRGF0ZVZhbHVlKS5hZGQoYWRkaXRpb25WYWx1ZSwgXCJtb250aFwiKTtcclxuXHJcbiAgICAgICAgaWYoc2VsZWN0ZWREYXRlKSB7XHJcbiAgICAgICAgICAgICFtYW5hZ2VWYWx1ZSAmJiBzZXRTZWxlY3RlZERhdGUoc2VsZWN0ZWREYXRlKVxyXG4gICAgICAgICAgICBvblNlbGVjdGVkKHNlbGVjdGVkRGF0ZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE9wZW5lZERhdGVWYWx1ZShjaGFuZ2VkVG8udG9EYXRlKCkpXHJcbiAgICB9LCBbb3BlbmVkRGF0ZVZhbHVlXSlcclxuXHJcbiAgICByZXR1cm4gPGRpdiByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgIDxDYWxlbmRhck1vbnRoXHJcbiAgICAgICAgICAgICAgICBvcGVuZWREYXRlPXtvcGVuZWREYXRlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGU9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3RlZD17c2VsZWN0QWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgbWFuYWdlU2VsZWN0ZWRcclxuICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDYWxlbmRhck1vbnRoLkhlYWRlclN0YXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJvd0J1dHRvbiBvbkNsaWNrPXtjaGFuZ2VNb250aH0vPlxyXG4gICAgICAgICAgICAgICAgPC9DYWxlbmRhck1vbnRoLkhlYWRlclN0YXJ0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxDYWxlbmRhck1vbnRoLkhlYWRlckVuZD5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyb3dCdXR0b24gaXNOZXh0PXt0cnVlfSBvbkNsaWNrPXtjaGFuZ2VNb250aH0vPlxyXG4gICAgICAgICAgICAgICAgPC9DYWxlbmRhck1vbnRoLkhlYWRlckVuZD5cclxuXHJcbiAgICAgICAgICAgIDwvQ2FsZW5kYXJNb250aD5cclxuICAgIDwvZGl2PlxyXG59KTtcclxuXHJcblNtYWxsQ2FsZW5kYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgb3BlbmVkRGF0ZTogbnVsbCxcclxuICAgIG9uU2VsZWN0ZWQ6IG5vb3BcclxufVxyXG5cclxuU21hbGxDYWxlbmRhci5wcm9wVHlwZXMgPSB7XHJcbiAgICBzZWxlY3RlZERhdGU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5udW1iZXIsIHByb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5vYmplY3RdKSxcclxuICAgIG9uU2VsZWN0ZWQ6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgbWFuYWdlVmFsdWU6IHByb3BUeXBlcy5ib29sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU21hbGxDYWxlbmRhciwgKHByZXYsIG5leHQpID0+IHtcclxuICAgIHJldHVybiBpc0VxdWFsKHByZXYsIG5leHQpO1xyXG59KTsiXX0=