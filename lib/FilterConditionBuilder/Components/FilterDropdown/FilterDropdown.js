"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../../../index");

var _FilterDropdownList = _interopRequireDefault(require("../FilterDropdownList/FilterDropdownList"));

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

var FilterDropdown = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterDropdown, _React$Component);

  var _super = _createSuper(FilterDropdown);

  function FilterDropdown(props) {
    var _this;

    _classCallCheck(this, FilterDropdown);

    _this = _super.call(this, props);

    _this.changeDropdownValue = function (value) {
      _this.setState({
        dropdownValue: value
      });
    };

    _this.expandDropdown = function (columnsArr) {
      var dropdownExpanded = _this.state.dropdownExpanded;
      columnsArr.length && _this.setState({
        dropdownExpanded: !dropdownExpanded
      });
    };

    _this.state = {
      dropdownExpanded: false,
      dropdownValue: ""
    };
    return _this;
  }

  _createClass(FilterDropdown, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          dropdownExpanded = _this$state.dropdownExpanded,
          dropdownValue = _this$state.dropdownValue;
      var tableFields = this.props.tableFields;
      var columns = tableFields.columns;
      var columnsArr = Object.values(columns).sort(function (a, b) {
        return a.label < b.label ? -1 : 0;
      });
      var styles = dropdownExpanded ? {
        borderBottomLeftRadius: 0
      } : {};
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
          className: "filter-dropdown-btn",
          style: styles,
          onClick: function onClick() {
            return _this2.expandDropdown(columnsArr);
          },
          children: [!!columnsArr.length ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "dropdown-value",
            children: dropdownValue ? dropdownValue : columnsArr[0].label
          }) : "...", /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Icon, {
            icon: "caret-down-fill",
            size: "sm"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterDropdownList["default"], {
          dropdownExpanded: dropdownExpanded,
          columnsArr: columnsArr,
          changeDropdownValue: this.changeDropdownValue
        })]
      });
    }
  }]);

  return FilterDropdown;
}(React.Component);

exports["default"] = FilterDropdown;
FilterDropdown.defaultProps = {
  tableFields: {
    columns: {}
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRmlsdGVyRHJvcGRvd24vRmlsdGVyRHJvcGRvd24uanMiXSwibmFtZXMiOlsiRmlsdGVyRHJvcGRvd24iLCJwcm9wcyIsImNoYW5nZURyb3Bkb3duVmFsdWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwiZHJvcGRvd25WYWx1ZSIsImV4cGFuZERyb3Bkb3duIiwiY29sdW1uc0FyciIsImRyb3Bkb3duRXhwYW5kZWQiLCJzdGF0ZSIsImxlbmd0aCIsInRhYmxlRmllbGRzIiwiY29sdW1ucyIsIk9iamVjdCIsInZhbHVlcyIsInNvcnQiLCJhIiwiYiIsImxhYmVsIiwic3R5bGVzIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7OztBQUNqQiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBUW5CQyxtQkFSbUIsR0FRRyxVQUFDQyxLQUFELEVBQVc7QUFDN0IsWUFBS0MsUUFBTCxDQUFjO0FBQUNDLFFBQUFBLGFBQWEsRUFBRUY7QUFBaEIsT0FBZDtBQUNILEtBVmtCOztBQUFBLFVBWW5CRyxjQVptQixHQVlGLFVBQUNDLFVBQUQsRUFBZ0I7QUFBQSxVQUNyQkMsZ0JBRHFCLEdBQ0EsTUFBS0MsS0FETCxDQUNyQkQsZ0JBRHFCO0FBRTdCRCxNQUFBQSxVQUFVLENBQUNHLE1BQVgsSUFBcUIsTUFBS04sUUFBTCxDQUFjO0FBQUVJLFFBQUFBLGdCQUFnQixFQUFFLENBQUNBO0FBQXJCLE9BQWQsQ0FBckI7QUFDSCxLQWZrQjs7QUFFZixVQUFLQyxLQUFMLEdBQWE7QUFDVEQsTUFBQUEsZ0JBQWdCLEVBQUUsS0FEVDtBQUVUSCxNQUFBQSxhQUFhLEVBQUU7QUFGTixLQUFiO0FBRmU7QUFNbEI7Ozs7V0FXRCxrQkFBUztBQUFBOztBQUFBLHdCQUN1QyxLQUFLSSxLQUQ1QztBQUFBLFVBQ0dELGdCQURILGVBQ0dBLGdCQURIO0FBQUEsVUFDcUJILGFBRHJCLGVBQ3FCQSxhQURyQjtBQUFBLFVBRUdNLFdBRkgsR0FFbUIsS0FBS1YsS0FGeEIsQ0FFR1UsV0FGSDtBQUFBLFVBR0dDLE9BSEgsR0FHZUQsV0FIZixDQUdHQyxPQUhIO0FBSUwsVUFBTUwsVUFBVSxHQUFHTSxNQUFNLENBQUNDLE1BQVAsQ0FBY0YsT0FBZCxFQUF1QkcsSUFBdkIsQ0FBNEIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVUQsQ0FBQyxDQUFDRSxLQUFGLEdBQVVELENBQUMsQ0FBQ0MsS0FBWixHQUFvQixDQUFDLENBQXJCLEdBQXlCLENBQW5DO0FBQUEsT0FBNUIsQ0FBbkI7QUFDQSxVQUFNQyxNQUFNLEdBQUdYLGdCQUFnQixHQUFHO0FBQzlCWSxRQUFBQSxzQkFBc0IsRUFBRTtBQURNLE9BQUgsR0FFM0IsRUFGSjtBQUdBLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBUSxVQUFBLFNBQVMsRUFBQyxxQkFBbEI7QUFBd0MsVUFBQSxLQUFLLEVBQUVELE1BQS9DO0FBQXVELFVBQUEsT0FBTyxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDYixjQUFMLENBQW9CQyxVQUFwQixDQUFOO0FBQUEsV0FBaEU7QUFBQSxxQkFDSyxDQUFDLENBQUNBLFVBQVUsQ0FBQ0csTUFBYixnQkFBc0I7QUFBTSxZQUFBLFNBQVMsRUFBQyxnQkFBaEI7QUFBQSxzQkFBa0NMLGFBQWEsR0FBR0EsYUFBSCxHQUFtQkUsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjVztBQUFoRixZQUF0QixHQUFzSCxLQUQzSCxlQUVJLHFCQUFDLFdBQUQ7QUFBTSxZQUFBLElBQUksRUFBQyxpQkFBWDtBQUE2QixZQUFBLElBQUksRUFBQztBQUFsQyxZQUZKO0FBQUEsVUFESixlQUtJLHFCQUFDLDhCQUFEO0FBQW9CLFVBQUEsZ0JBQWdCLEVBQUVWLGdCQUF0QztBQUF3RCxVQUFBLFVBQVUsRUFBRUQsVUFBcEU7QUFBZ0YsVUFBQSxtQkFBbUIsRUFBRSxLQUFLTDtBQUExRyxVQUxKO0FBQUEsUUFESjtBQVNIOzs7O0VBbkN1Q21CLEtBQUssQ0FBQ0MsUzs7O0FBc0NsRHRCLGNBQWMsQ0FBQ3VCLFlBQWYsR0FBOEI7QUFDMUJaLEVBQUFBLFdBQVcsRUFBRTtBQUNUQyxJQUFBQSxPQUFPLEVBQUU7QUFEQTtBQURhLENBQTlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjtcclxuaW1wb3J0IEZpbHRlckRyb3Bkb3duTGlzdCBmcm9tIFwiLi4vRmlsdGVyRHJvcGRvd25MaXN0L0ZpbHRlckRyb3Bkb3duTGlzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZHJvcGRvd25FeHBhbmRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRyb3Bkb3duVmFsdWU6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRHJvcGRvd25WYWx1ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Ryb3Bkb3duVmFsdWU6IHZhbHVlfSlcclxuICAgIH1cclxuXHJcbiAgICBleHBhbmREcm9wZG93biA9IChjb2x1bW5zQXJyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkcm9wZG93bkV4cGFuZGVkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbHVtbnNBcnIubGVuZ3RoICYmIHRoaXMuc2V0U3RhdGUoeyBkcm9wZG93bkV4cGFuZGVkOiAhZHJvcGRvd25FeHBhbmRlZCB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGRyb3Bkb3duRXhwYW5kZWQsIGRyb3Bkb3duVmFsdWUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgeyB0YWJsZUZpZWxkcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IGNvbHVtbnMgfSA9IHRhYmxlRmllbGRzO1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbnNBcnIgPSBPYmplY3QudmFsdWVzKGNvbHVtbnMpLnNvcnQoKGEsIGIpID0+IGEubGFiZWwgPCBiLmxhYmVsID8gLTEgOiAwKTtcclxuICAgICAgICBjb25zdCBzdHlsZXMgPSBkcm9wZG93bkV4cGFuZGVkID8ge1xyXG4gICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAwXHJcbiAgICAgICAgfSA6IHt9XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmaWx0ZXItZHJvcGRvd24tYnRuXCIgc3R5bGU9e3N0eWxlc30gb25DbGljaz17KCkgPT4gdGhpcy5leHBhbmREcm9wZG93bihjb2x1bW5zQXJyKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyEhY29sdW1uc0Fyci5sZW5ndGggPyA8c3BhbiBjbGFzc05hbWU9XCJkcm9wZG93bi12YWx1ZVwiPntkcm9wZG93blZhbHVlID8gZHJvcGRvd25WYWx1ZSA6IGNvbHVtbnNBcnJbMF0ubGFiZWx9PC9zcGFuPiA6IFwiLi4uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cImNhcmV0LWRvd24tZmlsbFwiIHNpemU9XCJzbVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJEcm9wZG93bkxpc3QgZHJvcGRvd25FeHBhbmRlZD17ZHJvcGRvd25FeHBhbmRlZH0gY29sdW1uc0Fycj17Y29sdW1uc0Fycn0gY2hhbmdlRHJvcGRvd25WYWx1ZT17dGhpcy5jaGFuZ2VEcm9wZG93blZhbHVlfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbkZpbHRlckRyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHRhYmxlRmllbGRzOiB7XHJcbiAgICAgICAgY29sdW1uczoge31cclxuICAgIH1cclxufSJdfQ==