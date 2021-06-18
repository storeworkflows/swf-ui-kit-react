"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

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
      var clickBtn = _this.props.clickBtn;
      clickBtn({
        action: "breadcrumbs",
        payload: {
          data: data,
          operation: operation
        }
      });
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
            onClick: function onClick() {
              return _this2.breadcrumbItemClicked(itemData, "remove-next");
            },
            children: ">"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "label",
            "aria-describedby": "tooltipLabel",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRmlsdGVyQnJlYWRjcnVtYnMvRmlsdGVyQnJlYWRDcnVtYkl0ZW0vRmlsdGVyQnJlYWRjcnVtYkl0ZW0uanMiXSwibmFtZXMiOlsiRmlsdGVyQnJlYWRjcnVtYkl0ZW0iLCJwcm9wcyIsImJyZWFkY3J1bWJJdGVtQ2xpY2tlZCIsImRhdGEiLCJvcGVyYXRpb24iLCJjbGlja0J0biIsImFjdGlvbiIsInBheWxvYWQiLCJpdGVtRGF0YSIsIml0ZW1JbmRleCIsImxhYmVsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxvQjs7Ozs7QUFDakIsZ0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxVQUluQkMscUJBSm1CLEdBSUssVUFBQ0MsSUFBRCxFQUFPQyxTQUFQLEVBQXFCO0FBQUEsVUFDakNDLFFBRGlDLEdBQ3BCLE1BQUtKLEtBRGUsQ0FDakNJLFFBRGlDO0FBRXpDQSxNQUFBQSxRQUFRLENBQUM7QUFBQ0MsUUFBQUEsTUFBTSxFQUFFLGFBQVQ7QUFBd0JDLFFBQUFBLE9BQU8sRUFBRTtBQUFFSixVQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBUUMsVUFBQUEsU0FBUyxFQUFUQTtBQUFSO0FBQWpDLE9BQUQsQ0FBUjtBQUNILEtBUGtCOztBQUFBO0FBRWxCOzs7O1dBT0Qsa0JBQVM7QUFBQTs7QUFBQSx3QkFDMkIsS0FBS0gsS0FEaEM7QUFBQSxVQUNHTyxRQURILGVBQ0dBLFFBREg7QUFBQSxVQUNhQyxTQURiLGVBQ2FBLFNBRGI7QUFJTCxVQUFJLENBQUNELFFBQVEsQ0FBQ0UsS0FBZCxFQUFxQjtBQUVyQiwwQkFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDLGdCQUFmO0FBQUEsbUJBQ0tELFNBQVMsS0FBSyxDQUFkLGlCQUNEO0FBQUEsaUNBQ0k7QUFDSSxZQUFBLFNBQVMsRUFBQyxhQURkO0FBRUksZ0NBQWlCLGNBRnJCO0FBR0ksWUFBQSxPQUFPLEVBQUU7QUFBQSxxQkFBTSxNQUFJLENBQUNQLHFCQUFMLENBQTJCTSxRQUEzQixFQUFxQyxhQUFyQyxDQUFOO0FBQUEsYUFIYjtBQUFBO0FBQUE7QUFESixVQUZKLGVBV0k7QUFBQSxpQ0FDSTtBQUNJLFlBQUEsU0FBUyxFQUFDLE9BRGQ7QUFFSSxnQ0FBaUIsY0FGckI7QUFHSSxZQUFBLE9BQU8sRUFBRTtBQUFBLHFCQUFNLE1BQUksQ0FBQ04scUJBQUwsQ0FBMkJNLFFBQTNCLEVBQXFDLG1CQUFyQyxDQUFOO0FBQUEsYUFIYjtBQUFBLHNCQUtLQSxRQUFRLENBQUNFO0FBTGQ7QUFESixVQVhKO0FBQUEsUUFESjtBQXdCSDs7OztFQXhDNkNDLEtBQUssQ0FBQ0MsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyQnJlYWRjcnVtYkl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJyZWFkY3J1bWJJdGVtQ2xpY2tlZCA9IChkYXRhLCBvcGVyYXRpb24pID0+IHtcclxuICAgICAgICBjb25zdCB7IGNsaWNrQnRuIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNsaWNrQnRuKHthY3Rpb246IFwiYnJlYWRjcnVtYnNcIiwgcGF5bG9hZDogeyBkYXRhLCBvcGVyYXRpb24gfX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGl0ZW1EYXRhLCBpdGVtSW5kZXggfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cclxuICAgICAgICBpZiAoIWl0ZW1EYXRhLmxhYmVsKSByZXR1cm47XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge2l0ZW1JbmRleCAhPT0gMCAmJiBcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnJlYWQtYXJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidG9vbHRpcEFycm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5icmVhZGNydW1iSXRlbUNsaWNrZWQoaXRlbURhdGEsIFwicmVtb3ZlLW5leHRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmZ3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ0b29sdGlwTGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmJyZWFkY3J1bWJJdGVtQ2xpY2tlZChpdGVtRGF0YSwgXCJyZW1vdmUtc3Vic2VxdWVudFwiKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtRGF0YS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXX0=