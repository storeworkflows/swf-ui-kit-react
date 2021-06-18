"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../../../Icon/Icon"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var DropdownItem = /*#__PURE__*/function (_React$Component) {
  _inherits(DropdownItem, _React$Component);

  var _super = _createSuper(DropdownItem);

  function DropdownItem(props) {
    var _this;

    _classCallCheck(this, DropdownItem);

    _this = _super.call(this, props);

    _this.itemSelected = function (_ref) {
      var dropdownClicked = _ref.dropdownClicked;
      var _this$props = _this.props,
          id = _this$props.id,
          disabled = _this$props.disabled,
          onSelectAction = _this$props.onSelectAction,
          listIndex = _this$props.listIndex;
      if (!disabled) onSelectAction({
        id: id,
        dropdownClicked: dropdownClicked,
        listIndex: listIndex
      });
    };

    return _this;
  }

  _createClass(DropdownItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          id = _this$props2.id,
          expandIcon = _this$props2.expandIcon,
          label = _this$props2.label,
          disabled = _this$props2.disabled,
          isSelected = _this$props2.isSelected,
          reference = _this$props2.reference,
          isDropdown = _this$props2.isDropdown;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _classnames["default"])({
            "dropdown-item": true,
            "disabled": disabled,
            "selected": isSelected
          }),
          onClick: function onClick(e) {
            _this2.itemSelected({
              dropdownClicked: false
            });

            e.stopPropagation();
          },
          "data-key": id,
          children: [label, expandIcon && !!reference && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: {
              display: "flex",
              alignSelf: "center"
            },
            onClick: function onClick(e) {
              _this2.itemSelected({
                dropdownClicked: true
              });

              e.stopPropagation();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
              icon: isDropdown ? "".concat(expandIcon, "-fill") : expandIcon,
              size: "sm"
            })
          })]
        })
      });
    }
  }]);

  return DropdownItem;
}(React.Component);

DropdownItem.defaultProps = {
  disabled: false,
  isSelected: false
};
DropdownItem.propTypes = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  onSelectAction: _propTypes["default"].func,
  isSelected: _propTypes["default"].bool,
  icon: _propTypes["default"].string
};
var _default = DropdownItem;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRXhwYW5kRHJvcGRvd24vRHJvcGRvd25JdGVtLmpzIl0sIm5hbWVzIjpbIkRyb3Bkb3duSXRlbSIsInByb3BzIiwiaXRlbVNlbGVjdGVkIiwiZHJvcGRvd25DbGlja2VkIiwiaWQiLCJkaXNhYmxlZCIsIm9uU2VsZWN0QWN0aW9uIiwibGlzdEluZGV4IiwiZXhwYW5kSWNvbiIsImxhYmVsIiwiaXNTZWxlY3RlZCIsInJlZmVyZW5jZSIsImlzRHJvcGRvd24iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZGlzcGxheSIsImFsaWduU2VsZiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbCIsImZ1bmMiLCJpY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFk7Ozs7O0FBRUYsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxVQUluQkMsWUFKbUIsR0FJSixnQkFBdUI7QUFBQSxVQUFyQkMsZUFBcUIsUUFBckJBLGVBQXFCO0FBQUEsd0JBQ2dCLE1BQUtGLEtBRHJCO0FBQUEsVUFDM0JHLEVBRDJCLGVBQzNCQSxFQUQyQjtBQUFBLFVBQ3ZCQyxRQUR1QixlQUN2QkEsUUFEdUI7QUFBQSxVQUNiQyxjQURhLGVBQ2JBLGNBRGE7QUFBQSxVQUNHQyxTQURILGVBQ0dBLFNBREg7QUFHbEMsVUFBRyxDQUFDRixRQUFKLEVBQ0lDLGNBQWMsQ0FBQztBQUFDRixRQUFBQSxFQUFFLEVBQUZBLEVBQUQ7QUFBS0QsUUFBQUEsZUFBZSxFQUFmQSxlQUFMO0FBQXNCSSxRQUFBQSxTQUFTLEVBQVRBO0FBQXRCLE9BQUQsQ0FBZDtBQUNQLEtBVGtCOztBQUFBO0FBRWxCOzs7O1dBV0Qsa0JBQVM7QUFBQTs7QUFBQSx5QkFTRCxLQUFLTixLQVRKO0FBQUEsVUFFREcsRUFGQyxnQkFFREEsRUFGQztBQUFBLFVBR0RJLFVBSEMsZ0JBR0RBLFVBSEM7QUFBQSxVQUlEQyxLQUpDLGdCQUlEQSxLQUpDO0FBQUEsVUFLREosUUFMQyxnQkFLREEsUUFMQztBQUFBLFVBTURLLFVBTkMsZ0JBTURBLFVBTkM7QUFBQSxVQU9EQyxTQVBDLGdCQU9EQSxTQVBDO0FBQUEsVUFRREMsVUFSQyxnQkFRREEsVUFSQztBQVdMLDBCQUNJO0FBQUEsK0JBQ0c7QUFBSyxVQUFBLFNBQVMsRUFBRSw0QkFBVztBQUN2Qiw2QkFBaUIsSUFETTtBQUV2Qix3QkFBWVAsUUFGVztBQUd2Qix3QkFBWUs7QUFIVyxXQUFYLENBQWhCO0FBS0ssVUFBQSxPQUFPLEVBQUUsaUJBQUNHLENBQUQsRUFBTztBQUNaLFlBQUEsTUFBSSxDQUFDWCxZQUFMLENBQWtCO0FBQUNDLGNBQUFBLGVBQWUsRUFBRTtBQUFsQixhQUFsQjs7QUFDQVUsWUFBQUEsQ0FBQyxDQUFDQyxlQUFGO0FBQ0gsV0FSTjtBQVNLLHNCQUFVVixFQVRmO0FBQUEscUJBV0tLLEtBWEwsRUFZTUQsVUFBVSxJQUFJLENBQUMsQ0FBQ0csU0FBakIsaUJBQStCO0FBQUssWUFBQSxLQUFLLEVBQUU7QUFBQ0ksY0FBQUEsT0FBTyxFQUFFLE1BQVY7QUFBa0JDLGNBQUFBLFNBQVMsRUFBRTtBQUE3QixhQUFaO0FBQW9ELFlBQUEsT0FBTyxFQUFFLGlCQUFDSCxDQUFELEVBQU87QUFDM0YsY0FBQSxNQUFJLENBQUNYLFlBQUwsQ0FBa0I7QUFBQ0MsZ0JBQUFBLGVBQWUsRUFBRTtBQUFsQixlQUFsQjs7QUFDQVUsY0FBQUEsQ0FBQyxDQUFDQyxlQUFGO0FBQ0osYUFIMkI7QUFBQSxtQ0FHekIscUJBQUMsZ0JBQUQ7QUFBTSxjQUFBLElBQUksRUFBR0YsVUFBRCxhQUFrQkosVUFBbEIsYUFBc0NBLFVBQWxEO0FBQThELGNBQUEsSUFBSSxFQUFDO0FBQW5FO0FBSHlCLFlBWnBDO0FBQUE7QUFESCxRQURKO0FBcUJIOzs7O0VBL0NzQlMsS0FBSyxDQUFDQyxTOztBQWtEakNsQixZQUFZLENBQUNtQixZQUFiLEdBQTRCO0FBQ3hCZCxFQUFBQSxRQUFRLEVBQUUsS0FEYztBQUV4QkssRUFBQUEsVUFBVSxFQUFFO0FBRlksQ0FBNUI7QUFLQVYsWUFBWSxDQUFDb0IsU0FBYixHQUF5QjtBQUNyQmhCLEVBQUFBLEVBQUUsRUFBRWdCLHNCQUFVQyxTQUFWLENBQW9CLENBQ3BCRCxzQkFBVUUsTUFEVSxFQUVwQkYsc0JBQVVHLE1BRlUsQ0FBcEIsQ0FEaUI7QUFLckJkLEVBQUFBLEtBQUssRUFBRVcsc0JBQVVFLE1BTEk7QUFNckJqQixFQUFBQSxRQUFRLEVBQUVlLHNCQUFVSSxJQU5DO0FBT3JCbEIsRUFBQUEsY0FBYyxFQUFFYyxzQkFBVUssSUFQTDtBQVFyQmYsRUFBQUEsVUFBVSxFQUFFVSxzQkFBVUksSUFSRDtBQVNyQkUsRUFBQUEsSUFBSSxFQUFFTixzQkFBVUU7QUFUSyxDQUF6QjtlQVlldEIsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vLi4vSWNvbi9JY29uXCI7XHJcblxyXG5jbGFzcyBEcm9wZG93bkl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGl0ZW1TZWxlY3RlZCA9ICh7ZHJvcGRvd25DbGlja2VkfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtpZCwgZGlzYWJsZWQsIG9uU2VsZWN0QWN0aW9uLCBsaXN0SW5kZXh9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYoIWRpc2FibGVkKVxyXG4gICAgICAgICAgICBvblNlbGVjdEFjdGlvbih7aWQsIGRyb3Bkb3duQ2xpY2tlZCwgbGlzdEluZGV4fSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIGV4cGFuZEljb24sXHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgICAgaXNTZWxlY3RlZCxcclxuICAgICAgICAgICAgcmVmZXJlbmNlLFxyXG4gICAgICAgICAgICBpc0Ryb3Bkb3duXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgIFwiZHJvcGRvd24taXRlbVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiBkaXNhYmxlZCxcclxuICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogaXNTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1TZWxlY3RlZCh7ZHJvcGRvd25DbGlja2VkOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1rZXk9e2lkfVxyXG4gICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICB7KGV4cGFuZEljb24gJiYgISFyZWZlcmVuY2UpICYmIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25TZWxmOiBcImNlbnRlclwifX0gb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVNlbGVjdGVkKHtkcm9wZG93bkNsaWNrZWQ6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfX0+PEljb24gaWNvbj17KGlzRHJvcGRvd24pID8gYCR7ZXhwYW5kSWNvbn0tZmlsbGAgOiBleHBhbmRJY29ufSBzaXplPVwic21cIiAvPjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuRHJvcGRvd25JdGVtLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxyXG59XHJcblxyXG5Ecm9wZG93bkl0ZW0ucHJvcFR5cGVzID0ge1xyXG4gICAgaWQ6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgcHJvcFR5cGVzLm51bWJlclxyXG4gICAgXSksXHJcbiAgICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG9uU2VsZWN0QWN0aW9uOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIGlzU2VsZWN0ZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgaWNvbjogcHJvcFR5cGVzLnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bkl0ZW0iXX0=