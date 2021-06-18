"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../../../Icon/Icon"));

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

var DropdownListHeader = /*#__PURE__*/function (_React$Component) {
  _inherits(DropdownListHeader, _React$Component);

  var _super = _createSuper(DropdownListHeader);

  function DropdownListHeader(props) {
    var _this;

    _classCallCheck(this, DropdownListHeader);

    _this = _super.call(this, props);
    _this.inputRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(DropdownListHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.inputRef.current) setTimeout(function () {
        return _this2.inputRef.current.focus();
      }, 200);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          searchValue = _this$props.searchValue,
          onSearch = _this$props.onSearch,
          selectedItem = _this$props.selectedItem,
          itemSelected = _this$props.itemSelected,
          searchBarWidth = _this$props.searchBarWidth;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "dropdown-list__header",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "swf-form-group",
          style: {
            maxWidth: searchBarWidth
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "input-group",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "text",
              className: "form-control",
              autoFocus: true,
              ref: function ref(elm) {
                return _this3.inputRef.current = elm;
              },
              placeholder: "Search",
              value: searchValue,
              onChange: function onChange(e) {
                return onSearch({
                  value: e.target.value
                });
              }
            })
          })
        }), selectedItem && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "header-breadcrumbs",
          children: selectedItem.map(function (item, index) {
            return (item.dropdownClicked || index > 0) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: (0, _classnames["default"])({
                "header-breadcrumbs_item": true,
                "--first-item": index === 0
              }),
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "header-breadcrumbs_item-label",
                onClick: function onClick() {
                  return itemSelected({
                    id: item.id,
                    dropdownClicked: false,
                    listIndex: item.listIndex
                  });
                },
                children: item.label
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "header-breadcrumbs_item-arrow-container",
                onClick: function onClick() {
                  return itemSelected({
                    id: item.id,
                    dropdownClicked: true,
                    listIndex: item.listIndex
                  });
                },
                children: item.dropdownClicked && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon["default"], {
                  icon: "arrow-right",
                  size: "sm"
                })
              })]
            });
          })
        })]
      });
    }
  }]);

  return DropdownListHeader;
}(React.Component);

var _default = DropdownListHeader;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRXhwYW5kRHJvcGRvd24vRHJvcGRvd25MaXN0SGVhZGVyLmpzIl0sIm5hbWVzIjpbIkRyb3Bkb3duTGlzdEhlYWRlciIsInByb3BzIiwiaW5wdXRSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwiZm9jdXMiLCJzZWFyY2hWYWx1ZSIsIm9uU2VhcmNoIiwic2VsZWN0ZWRJdGVtIiwiaXRlbVNlbGVjdGVkIiwic2VhcmNoQmFyV2lkdGgiLCJtYXhXaWR0aCIsImVsbSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRyb3Bkb3duQ2xpY2tlZCIsImlkIiwibGlzdEluZGV4IiwibGFiZWwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJTUEsa0I7Ozs7O0FBQ0YsOEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFFBQUwsZ0JBQWdCQyxLQUFLLENBQUNDLFNBQU4sRUFBaEI7QUFGZTtBQUdsQjs7OztXQUVELDZCQUFvQjtBQUFBOztBQUNoQixVQUFJLEtBQUtGLFFBQUwsQ0FBY0csT0FBbEIsRUFDSUMsVUFBVSxDQUFDO0FBQUEsZUFBTSxNQUFJLENBQUNKLFFBQUwsQ0FBY0csT0FBZCxDQUFzQkUsS0FBdEIsRUFBTjtBQUFBLE9BQUQsRUFBc0MsR0FBdEMsQ0FBVjtBQUNQOzs7V0FFRCxrQkFBUztBQUFBOztBQUFBLHdCQUN5RSxLQUFLTixLQUQ5RTtBQUFBLFVBQ0dPLFdBREgsZUFDR0EsV0FESDtBQUFBLFVBQ2dCQyxRQURoQixlQUNnQkEsUUFEaEI7QUFBQSxVQUMwQkMsWUFEMUIsZUFDMEJBLFlBRDFCO0FBQUEsVUFDd0NDLFlBRHhDLGVBQ3dDQSxZQUR4QztBQUFBLFVBQ3NEQyxjQUR0RCxlQUNzREEsY0FEdEQ7QUFHTCwwQkFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDLHVCQUFmO0FBQUEsZ0NBQ0k7QUFBSyxVQUFBLFNBQVMsRUFBQyxnQkFBZjtBQUFnQyxVQUFBLEtBQUssRUFBRTtBQUFDQyxZQUFBQSxRQUFRLEVBQUVEO0FBQVgsV0FBdkM7QUFBQSxpQ0FDSTtBQUFLLFlBQUEsU0FBUyxFQUFDLGFBQWY7QUFBQSxtQ0FDSTtBQUFPLGNBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsY0FBQSxTQUFTLEVBQUMsY0FBN0I7QUFBNEMsY0FBQSxTQUFTLEVBQUUsSUFBdkQ7QUFBNkQsY0FBQSxHQUFHLEVBQUUsYUFBQUUsR0FBRztBQUFBLHVCQUFJLE1BQUksQ0FBQ1osUUFBTCxDQUFjRyxPQUFkLEdBQXdCUyxHQUE1QjtBQUFBLGVBQXJFO0FBQXNHLGNBQUEsV0FBVyxFQUFDLFFBQWxIO0FBQTJILGNBQUEsS0FBSyxFQUFFTixXQUFsSTtBQUErSSxjQUFBLFFBQVEsRUFBRSxrQkFBQ08sQ0FBRDtBQUFBLHVCQUFPTixRQUFRLENBQUM7QUFBQ08sa0JBQUFBLEtBQUssRUFBRUQsQ0FBQyxDQUFDRSxNQUFGLENBQVNEO0FBQWpCLGlCQUFELENBQWY7QUFBQTtBQUF6SjtBQURKO0FBREosVUFESixFQU1NTixZQUFELGlCQUFrQjtBQUFLLFVBQUEsU0FBUyxFQUFDLG9CQUFmO0FBQUEsb0JBQ2RBLFlBQVksQ0FBQ1EsR0FBYixDQUFpQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxtQkFDZCxDQUFDRCxJQUFJLENBQUNFLGVBQUwsSUFBd0JELEtBQUssR0FBRyxDQUFqQyxrQkFBdUM7QUFBSyxjQUFBLFNBQVMsRUFDakQsNEJBQVc7QUFBQywyQ0FBMkIsSUFBNUI7QUFBa0MsZ0NBQWdCQSxLQUFLLEtBQUs7QUFBNUQsZUFBWCxDQURtQztBQUFBLHNDQUVuQztBQUFLLGdCQUFBLFNBQVMsRUFBQywrQkFBZjtBQUErQyxnQkFBQSxPQUFPLEVBQUU7QUFBQSx5QkFBTVQsWUFBWSxDQUFDO0FBQUNXLG9CQUFBQSxFQUFFLEVBQUVILElBQUksQ0FBQ0csRUFBVjtBQUFjRCxvQkFBQUEsZUFBZSxFQUFFLEtBQS9CO0FBQXNDRSxvQkFBQUEsU0FBUyxFQUFFSixJQUFJLENBQUNJO0FBQXRELG1CQUFELENBQWxCO0FBQUEsaUJBQXhEO0FBQUEsMEJBQStJSixJQUFJLENBQUNLO0FBQXBKLGdCQUZtQyxlQUduQztBQUFLLGdCQUFBLFNBQVMsRUFBQyx5Q0FBZjtBQUF5RCxnQkFBQSxPQUFPLEVBQUU7QUFBQSx5QkFBTWIsWUFBWSxDQUFDO0FBQUNXLG9CQUFBQSxFQUFFLEVBQUVILElBQUksQ0FBQ0csRUFBVjtBQUFjRCxvQkFBQUEsZUFBZSxFQUFFLElBQS9CO0FBQXFDRSxvQkFBQUEsU0FBUyxFQUFFSixJQUFJLENBQUNJO0FBQXJELG1CQUFELENBQWxCO0FBQUEsaUJBQWxFO0FBQUEsMEJBQ0tKLElBQUksQ0FBQ0UsZUFBTCxpQkFBd0IscUJBQUMsZ0JBQUQ7QUFBTSxrQkFBQSxJQUFJLEVBQUMsYUFBWDtBQUF5QixrQkFBQSxJQUFJLEVBQUM7QUFBOUI7QUFEN0IsZ0JBSG1DO0FBQUEsY0FEekI7QUFBQSxXQUFqQjtBQURjLFVBTnZCO0FBQUEsUUFESjtBQXFCSDs7OztFQW5DNEJsQixLQUFLLENBQUNzQixTOztlQXNDeEJ6QixrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uLy4uL0ljb24vSWNvblwiO1xyXG5cclxuXHJcblxyXG5jbGFzcyBEcm9wZG93bkxpc3RIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0UmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnB1dFJlZi5jdXJyZW50LmZvY3VzKCksIDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc2VhcmNoVmFsdWUsIG9uU2VhcmNoLCBzZWxlY3RlZEl0ZW0sIGl0ZW1TZWxlY3RlZCwgc2VhcmNoQmFyV2lkdGggfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWxpc3RfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2YtZm9ybS1ncm91cFwiIHN0eWxlPXt7bWF4V2lkdGg6IHNlYXJjaEJhcldpZHRofX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBhdXRvRm9jdXM9e3RydWV9IHJlZj17ZWxtID0+IHRoaXMuaW5wdXRSZWYuY3VycmVudCA9IGVsbX0gcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiB2YWx1ZT17c2VhcmNoVmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gb25TZWFyY2goe3ZhbHVlOiBlLnRhcmdldC52YWx1ZX0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7KHNlbGVjdGVkSXRlbSkgJiYgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYnJlYWRjcnVtYnNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJdGVtLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0uZHJvcGRvd25DbGlja2VkIHx8IGluZGV4ID4gMCkgJiYgPGRpdiBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lcyh7XCJoZWFkZXItYnJlYWRjcnVtYnNfaXRlbVwiOiB0cnVlLCBcIi0tZmlyc3QtaXRlbVwiOiBpbmRleCA9PT0gMH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJyZWFkY3J1bWJzX2l0ZW0tbGFiZWxcIiBvbkNsaWNrPXsoKSA9PiBpdGVtU2VsZWN0ZWQoe2lkOiBpdGVtLmlkLCBkcm9wZG93bkNsaWNrZWQ6IGZhbHNlLCBsaXN0SW5kZXg6IGl0ZW0ubGlzdEluZGV4fSl9PntpdGVtLmxhYmVsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYnJlYWRjcnVtYnNfaXRlbS1hcnJvdy1jb250YWluZXJcIiBvbkNsaWNrPXsoKSA9PiBpdGVtU2VsZWN0ZWQoe2lkOiBpdGVtLmlkLCBkcm9wZG93bkNsaWNrZWQ6IHRydWUsIGxpc3RJbmRleDogaXRlbS5saXN0SW5kZXh9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZHJvcGRvd25DbGlja2VkICYmIDxJY29uIGljb249XCJhcnJvdy1yaWdodFwiIHNpemU9XCJzbVwiLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bkxpc3RIZWFkZXI7Il19