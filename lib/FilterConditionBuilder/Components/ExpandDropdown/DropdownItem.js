"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../../../Icon/Icon"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
    _this.itemSelected = _this.itemSelected.bind(_assertThisInitialized(_this));
    _this.state = {
      expanded: false
    };
    return _this;
  }

  _createClass(DropdownItem, [{
    key: "itemSelected",
    value: function itemSelected(_ref) {
      var dropdownClicked = _ref.dropdownClicked;
      var _this$props = this.props,
          id = _this$props.id,
          disabled = _this$props.disabled,
          onSelectAction = _this$props.onSelectAction,
          listIndex = _this$props.listIndex;
      if (!disabled) onSelectAction({
        id: id,
        dropdownClicked: dropdownClicked,
        listIndex: listIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          id = _this$props2.id,
          expandIcon = _this$props2.expandIcon,
          label = _this$props2.label,
          disabled = _this$props2.disabled,
          isSelected = _this$props2.isSelected,
          reference = _this$props2.reference;
      var expanded = this.state.expanded;
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

            _this2.setState({
              expanded: false
            });

            e.stopPropagation();
          },
          "data-key": id,
          children: [label, expandIcon && !!reference && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            onClick: function onClick(e) {
              _this2.itemSelected({
                dropdownClicked: true
              });

              _this2.setState({
                expanded: true
              });

              e.stopPropagation();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
              icon: expanded && isSelected ? "".concat(expandIcon, "-fill") : expandIcon,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRXhwYW5kRHJvcGRvd24vRHJvcGRvd25JdGVtLmpzIl0sIm5hbWVzIjpbIkRyb3Bkb3duSXRlbSIsInByb3BzIiwiaXRlbVNlbGVjdGVkIiwiYmluZCIsInN0YXRlIiwiZXhwYW5kZWQiLCJkcm9wZG93bkNsaWNrZWQiLCJpZCIsImRpc2FibGVkIiwib25TZWxlY3RBY3Rpb24iLCJsaXN0SW5kZXgiLCJleHBhbmRJY29uIiwibGFiZWwiLCJpc1NlbGVjdGVkIiwicmVmZXJlbmNlIiwiZSIsInNldFN0YXRlIiwic3RvcFByb3BhZ2F0aW9uIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwiZnVuYyIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsWTs7Ozs7QUFFRix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQiwrQkFBcEI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsUUFBUSxFQUFFO0FBREQsS0FBYjtBQUhlO0FBTWxCOzs7O1dBRUQsNEJBQWdDO0FBQUEsVUFBbEJDLGVBQWtCLFFBQWxCQSxlQUFrQjtBQUFBLHdCQUNzQixLQUFLTCxLQUQzQjtBQUFBLFVBQ3JCTSxFQURxQixlQUNyQkEsRUFEcUI7QUFBQSxVQUNqQkMsUUFEaUIsZUFDakJBLFFBRGlCO0FBQUEsVUFDUEMsY0FETyxlQUNQQSxjQURPO0FBQUEsVUFDU0MsU0FEVCxlQUNTQSxTQURUO0FBRzVCLFVBQUcsQ0FBQ0YsUUFBSixFQUNJQyxjQUFjLENBQUM7QUFBQ0YsUUFBQUEsRUFBRSxFQUFGQSxFQUFEO0FBQUtELFFBQUFBLGVBQWUsRUFBZkEsZUFBTDtBQUFzQkksUUFBQUEsU0FBUyxFQUFUQTtBQUF0QixPQUFELENBQWQ7QUFDUDs7O1dBSUQsa0JBQVM7QUFBQTs7QUFBQSx5QkFRRCxLQUFLVCxLQVJKO0FBQUEsVUFFRE0sRUFGQyxnQkFFREEsRUFGQztBQUFBLFVBR0RJLFVBSEMsZ0JBR0RBLFVBSEM7QUFBQSxVQUlEQyxLQUpDLGdCQUlEQSxLQUpDO0FBQUEsVUFLREosUUFMQyxnQkFLREEsUUFMQztBQUFBLFVBTURLLFVBTkMsZ0JBTURBLFVBTkM7QUFBQSxVQU9EQyxTQVBDLGdCQU9EQSxTQVBDO0FBQUEsVUFVR1QsUUFWSCxHQVVnQixLQUFLRCxLQVZyQixDQVVHQyxRQVZIO0FBWUwsMEJBQ0k7QUFBQSwrQkFDRztBQUFLLFVBQUEsU0FBUyxFQUFFLDRCQUFXO0FBQ3ZCLDZCQUFpQixJQURNO0FBRXZCLHdCQUFZRyxRQUZXO0FBR3ZCLHdCQUFZSztBQUhXLFdBQVgsQ0FBaEI7QUFLSyxVQUFBLE9BQU8sRUFBRSxpQkFBQ0UsQ0FBRCxFQUFPO0FBQ1osWUFBQSxNQUFJLENBQUNiLFlBQUwsQ0FBa0I7QUFBQ0ksY0FBQUEsZUFBZSxFQUFFO0FBQWxCLGFBQWxCOztBQUNBLFlBQUEsTUFBSSxDQUFDVSxRQUFMLENBQWM7QUFBQ1gsY0FBQUEsUUFBUSxFQUFFO0FBQVgsYUFBZDs7QUFDQVUsWUFBQUEsQ0FBQyxDQUFDRSxlQUFGO0FBQ0gsV0FUTjtBQVVLLHNCQUFVVixFQVZmO0FBQUEscUJBWUtLLEtBWkwsRUFhTUQsVUFBVSxJQUFJLENBQUMsQ0FBQ0csU0FBakIsaUJBQStCO0FBQUssWUFBQSxPQUFPLEVBQUUsaUJBQUNDLENBQUQsRUFBTztBQUM1QyxjQUFBLE1BQUksQ0FBQ2IsWUFBTCxDQUFrQjtBQUFDSSxnQkFBQUEsZUFBZSxFQUFFO0FBQWxCLGVBQWxCOztBQUNBLGNBQUEsTUFBSSxDQUFDVSxRQUFMLENBQWM7QUFBQ1gsZ0JBQUFBLFFBQVEsRUFBRTtBQUFYLGVBQWQ7O0FBQ0FVLGNBQUFBLENBQUMsQ0FBQ0UsZUFBRjtBQUNKLGFBSjJCO0FBQUEsbUNBSXpCLHFCQUFDLGdCQUFEO0FBQU0sY0FBQSxJQUFJLEVBQUdaLFFBQVEsSUFBSVEsVUFBYixhQUE4QkYsVUFBOUIsYUFBa0RBLFVBQTlEO0FBQTBFLGNBQUEsSUFBSSxFQUFDO0FBQS9FO0FBSnlCLFlBYnBDO0FBQUE7QUFESCxRQURKO0FBdUJIOzs7O0VBdERzQk8sS0FBSyxDQUFDQyxTOztBQXlEakNuQixZQUFZLENBQUNvQixZQUFiLEdBQTRCO0FBQ3hCWixFQUFBQSxRQUFRLEVBQUUsS0FEYztBQUV4QkssRUFBQUEsVUFBVSxFQUFFO0FBRlksQ0FBNUI7QUFLQWIsWUFBWSxDQUFDcUIsU0FBYixHQUF5QjtBQUNyQmQsRUFBQUEsRUFBRSxFQUFFYyxzQkFBVUMsU0FBVixDQUFvQixDQUNwQkQsc0JBQVVFLE1BRFUsRUFFcEJGLHNCQUFVRyxNQUZVLENBQXBCLENBRGlCO0FBS3JCWixFQUFBQSxLQUFLLEVBQUVTLHNCQUFVRSxNQUxJO0FBTXJCZixFQUFBQSxRQUFRLEVBQUVhLHNCQUFVSSxJQU5DO0FBT3JCaEIsRUFBQUEsY0FBYyxFQUFFWSxzQkFBVUssSUFQTDtBQVFyQmIsRUFBQUEsVUFBVSxFQUFFUSxzQkFBVUksSUFSRDtBQVNyQkUsRUFBQUEsSUFBSSxFQUFFTixzQkFBVUU7QUFUSyxDQUF6QjtlQVlldkIsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi8uLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuXHJcbmNsYXNzIERyb3Bkb3duSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsZWN0ZWQgPSB0aGlzLml0ZW1TZWxlY3RlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGV4cGFuZGVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpdGVtU2VsZWN0ZWQoe2Ryb3Bkb3duQ2xpY2tlZH0pIHtcclxuICAgICAgICBjb25zdCB7aWQsIGRpc2FibGVkLCBvblNlbGVjdEFjdGlvbiwgbGlzdEluZGV4fSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmKCFkaXNhYmxlZClcclxuICAgICAgICAgICAgb25TZWxlY3RBY3Rpb24oe2lkLCBkcm9wZG93bkNsaWNrZWQsIGxpc3RJbmRleH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBleHBhbmRJY29uLFxyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZVxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCB7IGV4cGFuZGVkIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICBcImRyb3Bkb3duLWl0ZW1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogZGlzYWJsZWQsXHJcbiAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkXCI6IGlzU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtU2VsZWN0ZWQoe2Ryb3Bkb3duQ2xpY2tlZDogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXhwYW5kZWQ6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEta2V5PXtpZH1cclxuICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgeyhleHBhbmRJY29uICYmICEhcmVmZXJlbmNlKSAmJiA8ZGl2IG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1TZWxlY3RlZCh7ZHJvcGRvd25DbGlja2VkOiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtleHBhbmRlZDogdHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH19PjxJY29uIGljb249eyhleHBhbmRlZCAmJiBpc1NlbGVjdGVkKSA/IGAke2V4cGFuZEljb259LWZpbGxgIDogZXhwYW5kSWNvbn0gc2l6ZT1cInNtXCIgLz48L2Rpdj59XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbkRyb3Bkb3duSXRlbS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBpc1NlbGVjdGVkOiBmYWxzZSxcclxufVxyXG5cclxuRHJvcGRvd25JdGVtLnByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHByb3BUeXBlcy5udW1iZXJcclxuICAgIF0pLFxyXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvblNlbGVjdEFjdGlvbjogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBpc1NlbGVjdGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGljb246IHByb3BUeXBlcy5zdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25JdGVtIl19