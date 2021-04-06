"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../index");

var _classnames = _interopRequireDefault(require("classnames"));

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

var FilterDropdownItem = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterDropdownItem, _React$Component);

  var _super = _createSuper(FilterDropdownItem);

  function FilterDropdownItem(props) {
    var _this;

    _classCallCheck(this, FilterDropdownItem);

    _this = _super.call(this, props);
    _this.state = {
      isItemActive: false
    };
    return _this;
  }

  _createClass(FilterDropdownItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          column = _this$props.column,
          changeDropdownValue = _this$props.changeDropdownValue;
      var isItemActive = this.state.isItemActive;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _classnames["default"])({
          "dropdown-item": true,
          "--active": isItemActive
        }),
        onClick: function onClick() {
          _this2.setState({
            isItemActive: true
          });

          changeDropdownValue(column.label);
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-item__label",
          children: column.label
        }), !!column.reference && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-item__reference-icon",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Icon, {
            icon: isItemActive ? "arrow-right-circle-fill" : "arrow-right-circle",
            size: "sm",
            color: isItemActive && "rgb(23,100,82)"
          })
        })]
      });
    }
  }]);

  return FilterDropdownItem;
}(React.Component);

exports["default"] = FilterDropdownItem;
FilterDropdownItem.defaultProps = {
  column: []
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRmlsdGVyRHJvcGRvd25JdGVtL0ZpbHRlckRyb3Bkb3duSXRlbS5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJEcm9wZG93bkl0ZW0iLCJwcm9wcyIsInN0YXRlIiwiaXNJdGVtQWN0aXZlIiwiY29sdW1uIiwiY2hhbmdlRHJvcGRvd25WYWx1ZSIsInNldFN0YXRlIiwibGFiZWwiLCJyZWZlcmVuY2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsa0I7Ozs7O0FBQ2pCLDhCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsWUFBWSxFQUFFO0FBREwsS0FBYjtBQUZlO0FBS2xCOzs7O1dBQ0Qsa0JBQVM7QUFBQTs7QUFBQSx3QkFDbUMsS0FBS0YsS0FEeEM7QUFBQSxVQUNHRyxNQURILGVBQ0dBLE1BREg7QUFBQSxVQUNXQyxtQkFEWCxlQUNXQSxtQkFEWDtBQUFBLFVBRUdGLFlBRkgsR0FFb0IsS0FBS0QsS0FGekIsQ0FFR0MsWUFGSDtBQUdMLDBCQUNJO0FBQ0ksUUFBQSxTQUFTLEVBQ0wsNEJBQVc7QUFDUCwyQkFBaUIsSUFEVjtBQUVQLHNCQUFZQTtBQUZMLFNBQVgsQ0FGUjtBQU9JLFFBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ1gsVUFBQSxNQUFJLENBQUNHLFFBQUwsQ0FBYztBQUFDSCxZQUFBQSxZQUFZLEVBQUU7QUFBZixXQUFkOztBQUNBRSxVQUFBQSxtQkFBbUIsQ0FBQ0QsTUFBTSxDQUFDRyxLQUFSLENBQW5CO0FBQ0gsU0FWTDtBQUFBLGdDQVlJO0FBQUssVUFBQSxTQUFTLEVBQUMsc0JBQWY7QUFBQSxvQkFDS0gsTUFBTSxDQUFDRztBQURaLFVBWkosRUFlSyxDQUFDLENBQUNILE1BQU0sQ0FBQ0ksU0FBVCxpQkFBc0I7QUFBSyxVQUFBLFNBQVMsRUFBQywrQkFBZjtBQUFBLGlDQUNuQixxQkFBQyxXQUFEO0FBQU0sWUFBQSxJQUFJLEVBQUVMLFlBQVksR0FBSSx5QkFBSixHQUFnQyxvQkFBeEQ7QUFBOEUsWUFBQSxJQUFJLEVBQUMsSUFBbkY7QUFBd0YsWUFBQSxLQUFLLEVBQUVBLFlBQVksSUFBSTtBQUEvRztBQURtQixVQWYzQjtBQUFBLFFBREo7QUFxQkg7Ozs7RUEvQjJDTSxLQUFLLENBQUNDLFM7OztBQWtDdERWLGtCQUFrQixDQUFDVyxZQUFuQixHQUFrQztBQUM5QlAsRUFBQUEsTUFBTSxFQUFFO0FBRHNCLENBQWxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyRHJvcGRvd25JdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzSXRlbUFjdGl2ZTogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY29sdW1uLCBjaGFuZ2VEcm9wZG93blZhbHVlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgaXNJdGVtQWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkcm9wZG93bi1pdGVtXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1hY3RpdmVcIjogaXNJdGVtQWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0l0ZW1BY3RpdmU6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VEcm9wZG93blZhbHVlKGNvbHVtbi5sYWJlbClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbV9fbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ISFjb2x1bW4ucmVmZXJlbmNlICYmIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbV9fcmVmZXJlbmNlLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtpc0l0ZW1BY3RpdmUgPyAgXCJhcnJvdy1yaWdodC1jaXJjbGUtZmlsbFwiIDogXCJhcnJvdy1yaWdodC1jaXJjbGVcIn0gc2l6ZT1cInNtXCIgY29sb3I9e2lzSXRlbUFjdGl2ZSAmJiBcInJnYigyMywxMDAsODIpXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuRmlsdGVyRHJvcGRvd25JdGVtLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNvbHVtbjogW11cclxufSJdfQ==