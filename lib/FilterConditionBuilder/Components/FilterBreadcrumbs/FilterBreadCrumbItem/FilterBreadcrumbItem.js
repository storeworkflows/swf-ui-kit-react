"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Tooltip = _interopRequireDefault(require("../../../../Tooltip/Tooltip"));

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

var FilterBreadcrumbItem = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterBreadcrumbItem, _React$Component);

  var _super = _createSuper(FilterBreadcrumbItem);

  function FilterBreadcrumbItem(props) {
    var _this;

    _classCallCheck(this, FilterBreadcrumbItem);

    _this = _super.call(this, props);

    _this.breadcrumbItemClicked = function (data, operation) {
      var onBreadcrumbItemClicked = _this.props.onBreadcrumbItemClicked;
      onBreadcrumbItemClicked({
        data: data,
        operation: operation
      });
    };

    _this.setArrowTargetRef = function (ref) {
      return setTimeout(function () {
        return _this.setState({
          arrowTargetRef: ref
        });
      });
    };

    _this.setLabelTargetRef = function (ref) {
      return setTimeout(function () {
        return _this.setState({
          labelTargetRef: ref
        });
      });
    };

    _this.state = {
      arrowTargetRef: null,
      labelTargetRef: null
    };
    return _this;
  }

  _createClass(FilterBreadcrumbItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          itemData = _this$props.itemData,
          itemIndex = _this$props.itemIndex;
      if (!itemData.label) return;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "item-container",
        children: [itemIndex !== 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "bread-arrow",
            "aria-describedby": "tooltipArrow",
            ref: this.setArrowTargetRef,
            onClick: function onClick() {
              return _this2.breadcrumbItemClicked(itemData, "remove-next");
            },
            children: ">"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "label",
            "aria-describedby": "tooltipLabel",
            ref: this.setLabelTargetRef,
            onClick: function onClick() {
              return _this2.breadcrumbItemClicked(itemData, "remove-subsequent");
            },
            children: itemData.label
          })
        })]
      });
    }
  }]);

  return FilterBreadcrumbItem;
}(React.Component);

exports["default"] = FilterBreadcrumbItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRmlsdGVyQnJlYWRjcnVtYnMvRmlsdGVyQnJlYWRDcnVtYkl0ZW0vRmlsdGVyQnJlYWRjcnVtYkl0ZW0uanMiXSwibmFtZXMiOlsiRmlsdGVyQnJlYWRjcnVtYkl0ZW0iLCJwcm9wcyIsImJyZWFkY3J1bWJJdGVtQ2xpY2tlZCIsImRhdGEiLCJvcGVyYXRpb24iLCJvbkJyZWFkY3J1bWJJdGVtQ2xpY2tlZCIsInNldEFycm93VGFyZ2V0UmVmIiwicmVmIiwic2V0VGltZW91dCIsInNldFN0YXRlIiwiYXJyb3dUYXJnZXRSZWYiLCJzZXRMYWJlbFRhcmdldFJlZiIsImxhYmVsVGFyZ2V0UmVmIiwic3RhdGUiLCJpdGVtRGF0YSIsIml0ZW1JbmRleCIsImxhYmVsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLG9COzs7OztBQUNqQixnQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBUW5CQyxxQkFSbUIsR0FRSyxVQUFDQyxJQUFELEVBQU9DLFNBQVAsRUFBcUI7QUFBQSxVQUNqQ0MsdUJBRGlDLEdBQ0wsTUFBS0osS0FEQSxDQUNqQ0ksdUJBRGlDO0FBRXpDQSxNQUFBQSx1QkFBdUIsQ0FBQztBQUFDRixRQUFBQSxJQUFJLEVBQUpBLElBQUQ7QUFBT0MsUUFBQUEsU0FBUyxFQUFUQTtBQUFQLE9BQUQsQ0FBdkI7QUFDSCxLQVhrQjs7QUFBQSxVQWFuQkUsaUJBYm1CLEdBYUMsVUFBQ0MsR0FBRDtBQUFBLGFBQVNDLFVBQVUsQ0FBQztBQUFBLGVBQU0sTUFBS0MsUUFBTCxDQUFjO0FBQUVDLFVBQUFBLGNBQWMsRUFBRUg7QUFBbEIsU0FBZCxDQUFOO0FBQUEsT0FBRCxDQUFuQjtBQUFBLEtBYkQ7O0FBQUEsVUFjbkJJLGlCQWRtQixHQWNDLFVBQUNKLEdBQUQ7QUFBQSxhQUFTQyxVQUFVLENBQUM7QUFBQSxlQUFNLE1BQUtDLFFBQUwsQ0FBYztBQUFFRyxVQUFBQSxjQUFjLEVBQUVMO0FBQWxCLFNBQWQsQ0FBTjtBQUFBLE9BQUQsQ0FBbkI7QUFBQSxLQWREOztBQUVmLFVBQUtNLEtBQUwsR0FBYTtBQUNUSCxNQUFBQSxjQUFjLEVBQUUsSUFEUDtBQUVURSxNQUFBQSxjQUFjLEVBQUU7QUFGUCxLQUFiO0FBRmU7QUFNbEI7Ozs7V0FVRCxrQkFBUztBQUFBOztBQUFBLHdCQUMyQixLQUFLWCxLQURoQztBQUFBLFVBQ0dhLFFBREgsZUFDR0EsUUFESDtBQUFBLFVBQ2FDLFNBRGIsZUFDYUEsU0FEYjtBQUlMLFVBQUksQ0FBQ0QsUUFBUSxDQUFDRSxLQUFkLEVBQXFCO0FBRXJCLDBCQUNJO0FBQUssUUFBQSxTQUFTLEVBQUMsZ0JBQWY7QUFBQSxtQkFDS0QsU0FBUyxLQUFLLENBQWQsaUJBQ0Q7QUFBQSxpQ0FRSTtBQUNJLFlBQUEsU0FBUyxFQUFDLGFBRGQ7QUFFSSxnQ0FBaUIsY0FGckI7QUFHSSxZQUFBLEdBQUcsRUFBRSxLQUFLVCxpQkFIZDtBQUlJLFlBQUEsT0FBTyxFQUFFO0FBQUEscUJBQU0sTUFBSSxDQUFDSixxQkFBTCxDQUEyQlksUUFBM0IsRUFBcUMsYUFBckMsQ0FBTjtBQUFBLGFBSmI7QUFBQTtBQUFBO0FBUkosVUFGSixlQW1CSTtBQUFBLGlDQVFJO0FBQ0ksWUFBQSxTQUFTLEVBQUMsT0FEZDtBQUVJLGdDQUFpQixjQUZyQjtBQUdJLFlBQUEsR0FBRyxFQUFFLEtBQUtILGlCQUhkO0FBSUksWUFBQSxPQUFPLEVBQUU7QUFBQSxxQkFBTSxNQUFJLENBQUNULHFCQUFMLENBQTJCWSxRQUEzQixFQUFxQyxtQkFBckMsQ0FBTjtBQUFBLGFBSmI7QUFBQSxzQkFNS0EsUUFBUSxDQUFDRTtBQU5kO0FBUkosVUFuQko7QUFBQSxRQURKO0FBd0NIOzs7O0VBL0Q2Q0MsS0FBSyxDQUFDQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgVG9vbHRpcCBmcm9tIFwiLi4vLi4vLi4vLi4vVG9vbHRpcC9Ub29sdGlwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJCcmVhZGNydW1iSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhcnJvd1RhcmdldFJlZjogbnVsbCxcclxuICAgICAgICAgICAgbGFiZWxUYXJnZXRSZWY6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJyZWFkY3J1bWJJdGVtQ2xpY2tlZCA9IChkYXRhLCBvcGVyYXRpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IG9uQnJlYWRjcnVtYkl0ZW1DbGlja2VkIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIG9uQnJlYWRjcnVtYkl0ZW1DbGlja2VkKHtkYXRhLCBvcGVyYXRpb259KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBcnJvd1RhcmdldFJlZiA9IChyZWYpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFycm93VGFyZ2V0UmVmOiByZWYgfSkpO1xyXG4gICAgc2V0TGFiZWxUYXJnZXRSZWYgPSAocmVmKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBsYWJlbFRhcmdldFJlZjogcmVmIH0pKTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVtRGF0YSwgaXRlbUluZGV4IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKCFpdGVtRGF0YS5sYWJlbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHtpdGVtSW5kZXggIT09IDAgJiYgXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiB7dGhpcy5zdGF0ZS5hcnJvd1RhcmdldFJlZiAmJiA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvb2x0aXBBcnJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFJlZj17dGhpcy5zdGF0ZS5hcnJvd1RhcmdldFJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249e1tcImJvdHRvbS1jZW50ZXIgdG9wLWNlbnRlclwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIlJlbW92ZSBuZXh0IGNvbmRpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXszMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz59ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJyZWFkLWFycm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInRvb2x0aXBBcnJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5zZXRBcnJvd1RhcmdldFJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5icmVhZGNydW1iSXRlbUNsaWNrZWQoaXRlbURhdGEsIFwicmVtb3ZlLW5leHRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmZ3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7Lyoge3RoaXMuc3RhdGUubGFiZWxUYXJnZXRSZWYgJiYgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b29sdGlwTGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRSZWY9e3RoaXMuc3RhdGUubGFiZWxUYXJnZXRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtbXCJib3R0b20tY2VudGVyIHRvcC1jZW50ZXJcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJDbGljayB0byByZW1vdmUgc3Vic2VxdWVudCBjb25kaXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezMwMH1cclxuICAgICAgICAgICAgICAgICAgICAvPn0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidG9vbHRpcExhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnNldExhYmVsVGFyZ2V0UmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmJyZWFkY3J1bWJJdGVtQ2xpY2tlZChpdGVtRGF0YSwgXCJyZW1vdmUtc3Vic2VxdWVudFwiKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtRGF0YS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXX0=