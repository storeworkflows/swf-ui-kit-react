"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
          breadcrumbItemClicked = _this$props.breadcrumbItemClicked;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "breadcrumbs-container",
        children: items.map(function (el, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "item-container",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterBreadcrumbItem["default"], {
              itemData: el,
              itemIndex: index,
              onBreadcrumbItemClicked: breadcrumbItemClicked
            })
          }, el.id);
        })
      });
    }
  }]);

  return FilterBreadcrumbs;
}(React.Component);

exports["default"] = FilterBreadcrumbs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRmlsdGVyQnJlYWRjcnVtYnMvRmlsdGVyQnJlYWRjcnVtYnMuanMiXSwibmFtZXMiOlsiRmlsdGVyQnJlYWRjcnVtYnMiLCJwcm9wcyIsIml0ZW1zIiwiYnJlYWRjcnVtYkl0ZW1DbGlja2VkIiwibWFwIiwiZWwiLCJpbmRleCIsImlkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7OztBQUNqQiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTO0FBRWxCOzs7O1dBQ0Qsa0JBQVM7QUFBQSx3QkFDb0MsS0FBS0EsS0FEekM7QUFBQSxVQUNHQyxLQURILGVBQ0dBLEtBREg7QUFBQSxVQUNVQyxxQkFEVixlQUNVQSxxQkFEVjtBQUVMLDBCQUNJO0FBQUssUUFBQSxTQUFTLEVBQUMsdUJBQWY7QUFBQSxrQkFFUUQsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQ0MsRUFBRCxFQUFLQyxLQUFMLEVBQWU7QUFDckIsOEJBQ0k7QUFBSyxZQUFBLFNBQVMsRUFBQyxnQkFBZjtBQUFBLG1DQUNJLHFCQUFDLGdDQUFEO0FBQXNCLGNBQUEsUUFBUSxFQUFFRCxFQUFoQztBQUFvQyxjQUFBLFNBQVMsRUFBRUMsS0FBL0M7QUFBc0QsY0FBQSx1QkFBdUIsRUFBRUg7QUFBL0U7QUFESixhQUFxQ0UsRUFBRSxDQUFDRSxFQUF4QyxDQURKO0FBS0gsU0FORDtBQUZSLFFBREo7QUFhSDs7OztFQW5CMENDLEtBQUssQ0FBQ0MsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRmlsdGVyQnJlYWRjcnVtYkl0ZW0gZnJvbSBcIi4vRmlsdGVyQnJlYWRDcnVtYkl0ZW0vRmlsdGVyQnJlYWRjcnVtYkl0ZW1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckJyZWFkY3J1bWJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaXRlbXMsIGJyZWFkY3J1bWJJdGVtQ2xpY2tlZCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFkY3J1bWJzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tY29udGFpbmVyXCIga2V5PXtlbC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlckJyZWFkY3J1bWJJdGVtIGl0ZW1EYXRhPXtlbH0gaXRlbUluZGV4PXtpbmRleH0gb25CcmVhZGNydW1iSXRlbUNsaWNrZWQ9e2JyZWFkY3J1bWJJdGVtQ2xpY2tlZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdfQ==