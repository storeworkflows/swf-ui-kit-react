"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = require("uuid");

var React = _interopRequireWildcard(require("react"));

var _FilterBreadcrumbItem = _interopRequireDefault(require("./FilterBreadCrumbItem/FilterBreadcrumbItem"));

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

var FilterBreadcrumbs = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterBreadcrumbs, _React$Component);

  var _super = _createSuper(FilterBreadcrumbs);

  function FilterBreadcrumbs(props) {
    _classCallCheck(this, FilterBreadcrumbs);

    return _super.call(this, props);
  }

  _createClass(FilterBreadcrumbs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          clickBtn = _this$props.clickBtn;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "breadcrumbs-container",
        children: items.map(function (el, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "item-container",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterBreadcrumbItem["default"], {
              itemData: el,
              itemIndex: index,
              clickBtn: clickBtn
            }, (0, _uuid.v4)())
          }, el.id);
        })
      });
    }
  }]);

  return FilterBreadcrumbs;
}(React.Component);

exports["default"] = FilterBreadcrumbs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRmlsdGVyQnJlYWRjcnVtYnMvRmlsdGVyQnJlYWRjcnVtYnMuanMiXSwibmFtZXMiOlsiRmlsdGVyQnJlYWRjcnVtYnMiLCJwcm9wcyIsIml0ZW1zIiwiY2xpY2tCdG4iLCJtYXAiLCJlbCIsImluZGV4IiwiaWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7Ozs7O0FBQ2pCLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1RBLEtBRFM7QUFFbEI7Ozs7V0FDRCxrQkFBUztBQUFBLHdCQUN1QixLQUFLQSxLQUQ1QjtBQUFBLFVBQ0dDLEtBREgsZUFDR0EsS0FESDtBQUFBLFVBQ1VDLFFBRFYsZUFDVUEsUUFEVjtBQUVMLDBCQUNJO0FBQUssUUFBQSxTQUFTLEVBQUMsdUJBQWY7QUFBQSxrQkFFUUQsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQ0MsRUFBRCxFQUFLQyxLQUFMLEVBQWU7QUFDckIsOEJBQ0k7QUFBSyxZQUFBLFNBQVMsRUFBQyxnQkFBZjtBQUFBLG1DQUNJLHFCQUFDLGdDQUFEO0FBQXNCLGNBQUEsUUFBUSxFQUFFRCxFQUFoQztBQUFtRCxjQUFBLFNBQVMsRUFBRUMsS0FBOUQ7QUFBcUUsY0FBQSxRQUFRLEVBQUVIO0FBQS9FLGVBQXlDLGVBQXpDO0FBREosYUFBcUNFLEVBQUUsQ0FBQ0UsRUFBeEMsQ0FESjtBQUtILFNBTkQ7QUFGUixRQURKO0FBYUg7Ozs7RUFuQjBDQyxLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBGaWx0ZXJCcmVhZGNydW1iSXRlbSBmcm9tIFwiLi9GaWx0ZXJCcmVhZENydW1iSXRlbS9GaWx0ZXJCcmVhZGNydW1iSXRlbVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyQnJlYWRjcnVtYnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVtcywgY2xpY2tCdG4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhZGNydW1icy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWNvbnRhaW5lclwiIGtleT17ZWwuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJCcmVhZGNydW1iSXRlbSBpdGVtRGF0YT17ZWx9IGtleT17dXVpZHY0KCl9IGl0ZW1JbmRleD17aW5kZXh9IGNsaWNrQnRuPXtjbGlja0J0bn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdfQ==