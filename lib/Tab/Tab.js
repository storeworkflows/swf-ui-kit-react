"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TabItem = _interopRequireDefault(require("./TabItem"));

var _constants = require("./constants");

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

var Tab = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var hideLabel = props.hideLabel,
      items = props.items,
      tabsAlignment = props.tabsAlignment,
      selectedItem = props.selectedItem,
      manageSelectedItem = props.manageSelectedItem,
      onClick = props.onClick,
      disabled = props.disabled;

  var _useState = (0, React.useState)(selectedItem),
      _useState2 = _slicedToArray(_useState, 2),
      currentSelectedItem = _useState2[0],
      setCurrentSelectedItem = _useState2[1];

  var tabSelected = (0, React.useCallback)(function (item, id, disabled) {
    if (!disabled) {
      onClick({
        id: id,
        item: item
      });
      if (!manageSelectedItem) setCurrentSelectedItem(id);
    }
  }, [disabled, items, manageSelectedItem, onClick]);
  (0, React.useEffect)(function () {
    if (manageSelectedItem) setCurrentSelectedItem(selectedItem);
  }, [selectedItem, manageSelectedItem]);
  var tabsClasses = (0, _classnames["default"])({
    "swf-tabs-container": true,
    "flex-start": tabsAlignment === 'left',
    "flex-end": tabsAlignment === 'right',
    "center": tabsAlignment === 'center',
    "stretch": tabsAlignment === 'stretch'
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: tabsClasses,
      ref: ref,
      children: _lodash["default"].orderBy(items, ['count'], ['asc']).map(function (item) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabItem["default"], {
          item: item,
          isSelected: currentSelectedItem === item.id,
          hideLabel: hideLabel,
          tabSelected: tabSelected,
          disabled: disabled
        }, item.id);
      })
    })
  });
});
Tab.defaultProps = {
  items: [],
  hideLabel: false,
  manageSelectedItem: false,
  selectedItem: '',
  tabsAlignment: _constants.ALIGNMENT.STRETCH,
  onClick: function onClick() {
    return void 0;
  }
};
Tab.propTypes = {
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    label: _propTypes["default"].string,
    icon: _propTypes["default"].string,
    count: _propTypes["default"].number,
    presence: _propTypes["default"].string,
    disabled: _propTypes["default"].bool,
    required: _propTypes["default"].bool,
    invalid: _propTypes["default"].bool,
    infoMessage: _propTypes["default"].string
  })),
  hideLabel: _propTypes["default"].bool,
  manageSelectedItem: _propTypes["default"].bool,
  selectedItem: _propTypes["default"].string,
  tabsAlignment: _propTypes["default"].oneOf(['left', 'right', 'center', 'stretch']),
  onClick: _propTypes["default"].func,
  disabled: _propTypes["default"].bool
};

var _default = /*#__PURE__*/React.memo(Tab);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWIvVGFiLmpzIl0sIm5hbWVzIjpbIlRhYiIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiaGlkZUxhYmVsIiwiaXRlbXMiLCJ0YWJzQWxpZ25tZW50Iiwic2VsZWN0ZWRJdGVtIiwibWFuYWdlU2VsZWN0ZWRJdGVtIiwib25DbGljayIsImRpc2FibGVkIiwiY3VycmVudFNlbGVjdGVkSXRlbSIsInNldEN1cnJlbnRTZWxlY3RlZEl0ZW0iLCJ0YWJTZWxlY3RlZCIsIml0ZW0iLCJpZCIsInRhYnNDbGFzc2VzIiwiXyIsIm9yZGVyQnkiLCJtYXAiLCJkZWZhdWx0UHJvcHMiLCJBTElHTk1FTlQiLCJTVFJFVENIIiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIiwibGFiZWwiLCJpY29uIiwiY291bnQiLCJudW1iZXIiLCJwcmVzZW5jZSIsImJvb2wiLCJyZXF1aXJlZCIsImludmFsaWQiLCJpbmZvTWVzc2FnZSIsIm9uZU9mIiwiZnVuYyIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTUEsR0FBRyxnQkFBR0MsS0FBSyxDQUFDQyxVQUFOLENBQWlCLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUFBLE1BQ2pDQyxTQURpQyxHQUVrQkYsS0FGbEIsQ0FDakNFLFNBRGlDO0FBQUEsTUFDdEJDLEtBRHNCLEdBRWtCSCxLQUZsQixDQUN0QkcsS0FEc0I7QUFBQSxNQUNmQyxhQURlLEdBRWtCSixLQUZsQixDQUNmSSxhQURlO0FBQUEsTUFFckNDLFlBRnFDLEdBRWtCTCxLQUZsQixDQUVyQ0ssWUFGcUM7QUFBQSxNQUV2QkMsa0JBRnVCLEdBRWtCTixLQUZsQixDQUV2Qk0sa0JBRnVCO0FBQUEsTUFFSEMsT0FGRyxHQUVrQlAsS0FGbEIsQ0FFSE8sT0FGRztBQUFBLE1BRU1D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REs7QUFZWnRCLEVBQUFBLFNBQVMsRUFBRW1CLHNCQUFVUyxJQVpUO0FBYVp4QixFQUFBQSxrQkFBa0IsRUFBRWUsc0JBQVVTLElBYmxCO0FBY1p6QixFQUFBQSxZQUFZLEVBQUVnQixzQkFBVUcsTUFkWjtBQWVacEIsRUFBQUEsYUFBYSxFQUFFaUIsc0JBQVVhLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixTQUE1QixDQUFoQixDQWZIO0FBZ0JaM0IsRUFBQUEsT0FBTyxFQUFFYyxzQkFBVWMsSUFoQlA7QUFpQlozQixFQUFBQSxRQUFRLEVBQUVhLHNCQUFVUztBQWpCUixDQUFoQjs7NEJBb0JlaEMsS0FBSyxDQUFDc0MsSUFBTixDQUFXdkMsR0FBWCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCBUYWJJdGVtIGZyb20gXCIuL1RhYkl0ZW1cIjtcclxuaW1wb3J0IHtBTElHTk1FTlR9IGZyb20gJy4vY29uc3RhbnRzJ1xyXG5pbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5jb25zdCBUYWIgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICBjb25zdCB7IGhpZGVMYWJlbCwgaXRlbXMsIHRhYnNBbGlnbm1lbnQsXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtLCBtYW5hZ2VTZWxlY3RlZEl0ZW0sIG9uQ2xpY2ssIGRpc2FibGVkfSA9IHByb3BzXHJcbiAgICBjb25zdCBbY3VycmVudFNlbGVjdGVkSXRlbSwgc2V0Q3VycmVudFNlbGVjdGVkSXRlbV0gPSB1c2VTdGF0ZShzZWxlY3RlZEl0ZW0pO1xyXG5cclxuICAgIGNvbnN0IHRhYlNlbGVjdGVkID0gdXNlQ2FsbGJhY2soKGl0ZW0sIGlkLCBkaXNhYmxlZCkgPT4ge1xyXG4gICAgICAgIGlmICghZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgb25DbGljayh7aWQsIGl0ZW19KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbWFuYWdlU2VsZWN0ZWRJdGVtKVxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFNlbGVjdGVkSXRlbShpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc2FibGVkLCBpdGVtcywgbWFuYWdlU2VsZWN0ZWRJdGVtLCBvbkNsaWNrXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKG1hbmFnZVNlbGVjdGVkSXRlbSlcclxuICAgICAgICAgICAgc2V0Q3VycmVudFNlbGVjdGVkSXRlbShzZWxlY3RlZEl0ZW0pO1xyXG4gICAgfSwgW3NlbGVjdGVkSXRlbSwgbWFuYWdlU2VsZWN0ZWRJdGVtXSlcclxuXHJcbiAgICBjb25zdCB0YWJzQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xyXG4gICAgICAgIFwic3dmLXRhYnMtY29udGFpbmVyXCI6IHRydWUsXHJcbiAgICAgICAgXCJmbGV4LXN0YXJ0XCI6IHRhYnNBbGlnbm1lbnQgPT09ICdsZWZ0JyxcclxuICAgICAgICBcImZsZXgtZW5kXCI6IHRhYnNBbGlnbm1lbnQgPT09ICdyaWdodCcsXHJcbiAgICAgICAgXCJjZW50ZXJcIjogdGFic0FsaWdubWVudCA9PT0gJ2NlbnRlcicsXHJcbiAgICAgICAgXCJzdHJldGNoXCI6IHRhYnNBbGlnbm1lbnQgPT09ICdzdHJldGNoJ1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0YWJzQ2xhc3Nlc30gcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIF8ub3JkZXJCeShpdGVtcywgWydjb3VudCddLCBbJ2FzYyddKS5tYXAoaXRlbSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e2N1cnJlbnRTZWxlY3RlZEl0ZW0gPT09IGl0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTGFiZWw9e2hpZGVMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYlNlbGVjdGVkPXt0YWJTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0ge2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG5cclxufSk7XHJcblxyXG5cclxuVGFiLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGl0ZW1zOiBbXSxcclxuICAgIGhpZGVMYWJlbDogZmFsc2UsXHJcbiAgICBtYW5hZ2VTZWxlY3RlZEl0ZW06IGZhbHNlLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiAnJyxcclxuICAgIHRhYnNBbGlnbm1lbnQ6IEFMSUdOTUVOVC5TVFJFVENILFxyXG4gICAgb25DbGljazogKCkgPT4gdm9pZCAwXHJcbn1cclxuXHJcblRhYi5wcm9wVHlwZXMgPSB7XHJcbiAgICBpdGVtczogcHJvcFR5cGVzLmFycmF5T2YocHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBpZDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBpY29uOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNvdW50OiBwcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIHByZXNlbmNlOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICByZXF1aXJlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgaW52YWxpZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgaW5mb01lc3NhZ2U6IHByb3BUeXBlcy5zdHJpbmdcclxuICAgIH0pKSxcclxuICAgIGhpZGVMYWJlbDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VTZWxlY3RlZEl0ZW06IHByb3BUeXBlcy5ib29sLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdGFic0FsaWdubWVudDogcHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInLCAnc3RyZXRjaCddKSxcclxuICAgIG9uQ2xpY2s6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oVGFiKTsiXX0=