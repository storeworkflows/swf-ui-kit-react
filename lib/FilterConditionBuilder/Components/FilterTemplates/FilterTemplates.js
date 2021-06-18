"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../../../index");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var FilterTemplates = /*#__PURE__*/function (_React$Component) {
  _inherits(FilterTemplates, _React$Component);

  var _super = _createSuper(FilterTemplates);

  function FilterTemplates(props) {
    var _this;

    _classCallCheck(this, FilterTemplates);

    _this = _super.call(this, props);

    _this.handleSelectItem = function (_ref) {
      var _clickedItem$id;

      var clickedItem = _ref.clickedItem;
      var _this$props = _this.props,
          setQuery = _this$props.setQuery,
          setAdvanced = _this$props.setAdvanced;
      var isAdvanced = ["advanced"].includes(clickedItem === null || clickedItem === void 0 ? void 0 : clickedItem.id);

      _this.setState({
        selectedItem: _objectSpread(_objectSpread({}, _this.state.selectedItem), {}, _defineProperty({}, _this.props.table, clickedItem))
      });

      var query = isAdvanced ? "" : (_clickedItem$id = clickedItem === null || clickedItem === void 0 ? void 0 : clickedItem.id) !== null && _clickedItem$id !== void 0 ? _clickedItem$id : "";
      setAdvanced(isAdvanced);
      setQuery({
        query: query
      });
    };

    _this.filters = function () {
      var filterList = _this.props.filterList;
      return [].concat(_toConsumableArray(filterList.map(function (_ref2) {
        var title = _ref2.title,
            filter = _ref2.filter;
        return {
          id: filter,
          label: title
        };
      })), _toConsumableArray(_this.advancedMode));
    };

    _this.advancedMode = [{
      id: "advanced",
      label: "Advanced"
    }];
    _this.state = {
      popoverToogle: false,
      popoverTarget: null,
      btnRef: null,
      filteredValues: [],
      searchValue: "",
      selectedItem: _defineProperty({}, props.table, {
        id: "",
        label: ""
      })
    };
    return _this;
  }

  _createClass(FilterTemplates, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.table !== this.props.table) {
        if (!(this.props.table in this.state.selectedItem)) {
          this.setState({
            selectedItem: _objectSpread(_objectSpread({}, this.state.selectedItem), {}, _defineProperty({}, this.props.table, {
              id: "",
              label: ""
            }))
          });
        }

        this.handleSelectItem({
          clickedItem: this.state.selectedItem[this.props.table]
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _selectedItem$table;

      var table = this.props.table;
      var selectedItem = this.state.selectedItem;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          marginRight: "1rem"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Dropdown, {
          items: this.filters(),
          manageSelectedItems: true,
          onItemSelected: this.handleSelectItem,
          selectedItems: [(_selectedItem$table = selectedItem[table]) === null || _selectedItem$table === void 0 ? void 0 : _selectedItem$table.id],
          select: "single",
          placeholder: "-- Choose filter --"
        })
      });
    }
  }]);

  return FilterTemplates;
}(React.Component);

exports["default"] = FilterTemplates;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRmlsdGVyVGVtcGxhdGVzL0ZpbHRlclRlbXBsYXRlcy5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJUZW1wbGF0ZXMiLCJwcm9wcyIsImhhbmRsZVNlbGVjdEl0ZW0iLCJjbGlja2VkSXRlbSIsInNldFF1ZXJ5Iiwic2V0QWR2YW5jZWQiLCJpc0FkdmFuY2VkIiwiaW5jbHVkZXMiLCJpZCIsInNldFN0YXRlIiwic2VsZWN0ZWRJdGVtIiwic3RhdGUiLCJ0YWJsZSIsInF1ZXJ5IiwiZmlsdGVycyIsImZpbHRlckxpc3QiLCJtYXAiLCJ0aXRsZSIsImZpbHRlciIsImxhYmVsIiwiYWR2YW5jZWRNb2RlIiwicG9wb3ZlclRvb2dsZSIsInBvcG92ZXJUYXJnZXQiLCJidG5SZWYiLCJmaWx0ZXJlZFZhbHVlcyIsInNlYXJjaFZhbHVlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJtYXJnaW5SaWdodCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7QUFDakIsMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxVQXNDbkJDLGdCQXRDbUIsR0FzQ0EsZ0JBQW1CO0FBQUE7O0FBQUEsVUFBakJDLFdBQWlCLFFBQWpCQSxXQUFpQjtBQUFBLHdCQUNGLE1BQUtGLEtBREg7QUFBQSxVQUMzQkcsUUFEMkIsZUFDM0JBLFFBRDJCO0FBQUEsVUFDakJDLFdBRGlCLGVBQ2pCQSxXQURpQjtBQUVsQyxVQUFNQyxVQUFVLEdBQUcsQ0FBQyxVQUFELEVBQWFDLFFBQWIsQ0FBc0JKLFdBQXRCLGFBQXNCQSxXQUF0Qix1QkFBc0JBLFdBQVcsQ0FBRUssRUFBbkMsQ0FBbkI7O0FBRUEs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QWIsd0RBQUMsb0JBQXFCSixFQUF0QixDQUpuQjtBQUtJLFVBQUEsTUFBTSxFQUFDLFFBTFg7QUFNSSxVQUFBLFdBQVcsRUFBQztBQU5oQjtBQURKLFFBREo7QUFZSDs7OztFQWpGd0NzQixLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtEcm9wZG93bn0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJUZW1wbGF0ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5hZHZhbmNlZE1vZGUgPSBbe1xyXG4gICAgICAgICAgICBpZDogXCJhZHZhbmNlZFwiLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJBZHZhbmNlZFwiXHJcbiAgICAgICAgfV07XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcG9wb3ZlclRvb2dsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHBvcG92ZXJUYXJnZXQ6IG51bGwsXHJcbiAgICAgICAgICAgIGJ0blJlZjogbnVsbCxcclxuICAgICAgICAgICAgZmlsdGVyZWRWYWx1ZXM6IFtdLFxyXG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiB7XHJcbiAgICAgICAgICAgICAgICBbcHJvcHMudGFibGVdOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XHJcbiAgICAgICAgaWYgKHByZXZQcm9wcy50YWJsZSAhPT0gdGhpcy5wcm9wcy50YWJsZSkge1xyXG4gICAgICAgICAgICBpZiAoISh0aGlzLnByb3BzLnRhYmxlIGluIHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy50YWJsZV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RJdGVtKHtjbGlja2VkSXRlbTogdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1bdGhpcy5wcm9wcy50YWJsZV19KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxlY3RJdGVtID0gKHtjbGlja2VkSXRlbX0pID0+IHtcclxuICAgICAgICBjb25zdCB7c2V0UXVlcnksIHNldEFkdmFuY2VkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgaXNBZHZhbmNlZCA9IFtcImFkdmFuY2VkXCJdLmluY2x1ZGVzKGNsaWNrZWRJdGVtPy5pZCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW06IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgICAgICAgICAgW3RoaXMucHJvcHMudGFibGVdOiBjbGlja2VkSXRlbVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gaXNBZHZhbmNlZCA/IFwiXCIgOiBjbGlja2VkSXRlbT8uaWQgPz8gXCJcIjtcclxuXHJcbiAgICAgICAgc2V0QWR2YW5jZWQoaXNBZHZhbmNlZCk7XHJcbiAgICAgICAgc2V0UXVlcnkoe3F1ZXJ5fSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVycyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7ZmlsdGVyTGlzdH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gWy4uLmZpbHRlckxpc3QubWFwKCh7dGl0bGUsIGZpbHRlcn0pID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiBmaWx0ZXIsXHJcbiAgICAgICAgICAgIGxhYmVsOiB0aXRsZVxyXG4gICAgICAgIH0pKSwgLi4udGhpcy5hZHZhbmNlZE1vZGVdXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHt0YWJsZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtzZWxlY3RlZEl0ZW19ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjFyZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMuZmlsdGVycygpfVxyXG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZVNlbGVjdGVkSXRlbXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0ZWQ9e3RoaXMuaGFuZGxlU2VsZWN0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtbc2VsZWN0ZWRJdGVtW3RhYmxlXT8uaWRdfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdD1cInNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCItLSBDaG9vc2UgZmlsdGVyIC0tXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ==