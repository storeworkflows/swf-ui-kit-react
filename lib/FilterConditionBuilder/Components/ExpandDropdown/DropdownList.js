"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var _DropdownItem = _interopRequireDefault(require("./DropdownItem"));

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

var DropdownList = /*#__PURE__*/function (_React$Component) {
  _inherits(DropdownList, _React$Component);

  var _super = _createSuper(DropdownList);

  function DropdownList(props) {
    var _this;

    _classCallCheck(this, DropdownList);

    _this = _super.call(this, props);
    _this.state = {
      opened: _this.props.opened,
      selectedItems: _this.props.selectedItems
    };
    _this.dropdownRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(DropdownList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          listIndex = _this$props.listIndex,
          getWidth = _this$props.getWidth;

      if (this.dropdownRef.current && listIndex === 0) {
        getWidth({
          elm: this.dropdownRef.current
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          items = _this$props2.items,
          expandIcon = _this$props2.expandIcon,
          selectedItems = _this$props2.selectedItems,
          onSelectAction = _this$props2.onSelectAction,
          listIndex = _this$props2.listIndex;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames["default"])({
            "dropdown-list-container": true,
            "--not-first": listIndex > 0
          }),
          ref: function ref(elem) {
            return _this2.dropdownRef.current = elem;
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "dropdown-list",
            children: !!items.length ? items.map(function (item) {
              var id = item.id,
                  label = item.label,
                  disabled = item.disabled,
                  reference = item.reference;
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DropdownItem["default"], {
                onSelectAction: onSelectAction,
                id: id,
                label: label,
                disabled: _this2.props.disabled || disabled,
                isSelected: selectedItems[listIndex] ? selectedItems[listIndex].id === id : false,
                expandIcon: expandIcon,
                reference: reference === "true",
                listIndex: listIndex,
                isDropdown: selectedItems[listIndex] ? selectedItems[listIndex].dropdownClicked && selectedItems[listIndex].id === id : false
              }, id + listIndex);
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "no-search-results",
              children: "No Results"
            })
          })
        })
      });
    }
  }]);

  return DropdownList;
}(React.Component);

exports["default"] = DropdownList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRXhwYW5kRHJvcGRvd24vRHJvcGRvd25MaXN0LmpzIl0sIm5hbWVzIjpbIkRyb3Bkb3duTGlzdCIsInByb3BzIiwic3RhdGUiLCJvcGVuZWQiLCJzZWxlY3RlZEl0ZW1zIiwiZHJvcGRvd25SZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImxpc3RJbmRleCIsImdldFdpZHRoIiwiY3VycmVudCIsImVsbSIsIml0ZW1zIiwiZXhwYW5kSWNvbiIsIm9uU2VsZWN0QWN0aW9uIiwiZWxlbSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpZCIsImxhYmVsIiwiZGlzYWJsZWQiLCJyZWZlcmVuY2UiLCJkcm9wZG93bkNsaWNrZWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7O0FBQ2pCLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsTUFBTSxFQUFFLE1BQUtGLEtBQUwsQ0FBV0UsTUFEVjtBQUVUQyxNQUFBQSxhQUFhLEVBQUUsTUFBS0gsS0FBTCxDQUFXRztBQUZqQixLQUFiO0FBSUEsVUFBS0MsV0FBTCxnQkFBbUJDLEtBQUssQ0FBQ0MsU0FBTixFQUFuQjtBQU5lO0FBT2xCOzs7O1dBRUQsNkJBQW9CO0FBQUEsd0JBQ2dCLEtBQUtOLEtBRHJCO0FBQUEsVUFDUk8sU0FEUSxlQUNSQSxTQURRO0FBQUEsVUFDR0MsUUFESCxlQUNHQSxRQURIOztBQUdoQixVQUFJLEtBQUtKLFdBQUwsQ0FBaUJLLE9BQWpCLElBQTRCRixTQUFTLEtBQUssQ0FBOUMsRUFBaUQ7QUFDN0NDLFFBQUFBLFFBQVEsQ0FBQztBQUFDRSxVQUFBQSxHQUFHLEVBQUUsS0FBS04sV0FBTCxDQUFpQks7QUFBdkIsU0FBRCxDQUFSO0FBQ0g7QUFDSjs7O1dBRUQsa0JBQVM7QUFBQTs7QUFBQSx5QkFDbUUsS0FBS1QsS0FEeEU7QUFBQSxVQUNHVyxLQURILGdCQUNHQSxLQURIO0FBQUEsVUFDVUMsVUFEVixnQkFDVUEsVUFEVjtBQUFBLFVBQ3NCVCxhQUR0QixnQkFDc0JBLGFBRHRCO0FBQUEsVUFDcUNVLGNBRHJDLGdCQUNxQ0EsY0FEckM7QUFBQSxVQUNxRE4sU0FEckQsZ0JBQ3FEQSxTQURyRDtBQUVMLDBCQUNJO0FBQUEsK0JBQ0k7QUFBSyxVQUFBLFNBQVMsRUFBRSw0QkFBVztBQUN2Qix1Q0FBMkIsSUFESjtBQUV2QiwyQkFBZUEsU0FBUyxHQUFHO0FBRkosV0FBWCxDQUFoQjtBQUlJLFVBQUEsR0FBRyxFQUFFLGFBQUFPLElBQUk7QUFBQSxtQkFBSSxNQUFJLENBQUNWLFdBQUwsQ0FBaUJLLE9BQWpCLEdBQTJCSyxJQUEvQjtBQUFBLFdBSmI7QUFBQSxpQ0FNSTtBQUFLLFlBQUEsU0FBUyxFQUFDLGVBQWY7QUFBQSxzQkFDSyxDQUFDLENBQUNILEtBQUssQ0FBQ0ksTUFBUixHQUFpQkosS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQUEsa0JBQzNCQyxFQUQyQixHQUNPRCxJQURQLENBQzNCQyxFQUQyQjtBQUFBLGtCQUN2QkMsS0FEdUIsR0FDT0YsSUFEUCxDQUN2QkUsS0FEdUI7QUFBQSxrQkFDaEJDLFFBRGdCLEdBQ09ILElBRFAsQ0FDaEJHLFFBRGdCO0FBQUEsa0JBQ05DLFNBRE0sR0FDT0osSUFEUCxDQUNOSSxTQURNO0FBR2xDLGtDQUNRLHFCQUFDLHdCQUFEO0FBRUksZ0JBQUEsY0FBYyxFQUFFUixjQUZwQjtBQUdJLGdCQUFBLEVBQUUsRUFBRUssRUFIUjtBQUlJLGdCQUFBLEtBQUssRUFBRUMsS0FKWDtBQUtJLGdCQUFBLFFBQVEsRUFBRSxNQUFJLENBQUNuQixLQUFMLENBQVdvQixRQUFYLElBQXVCQSxRQUxyQztBQU1JLGdCQUFBLFVBQVUsRUFBRWpCLGFBQWEsQ0FBQ0ksU0FBRCxDQUFiLEdBQTJCSixhQUFhLENBQUNJLFNBQUQsQ0FBYixDQUF5QlcsRUFBekIsS0FBZ0NBLEVBQTNELEdBQWdFLEtBTmhGO0FBT0ksZ0JBQUEsVUFBVSxFQUFFTixVQVBoQjtBQVFJLGdCQUFBLFNBQVMsRUFBRVMsU0FBUyxLQUFLLE1BUjdCO0FBU0ksZ0JBQUEsU0FBUyxFQUFFZCxTQVRmO0FBVUksZ0JBQUEsVUFBVSxFQUFFSixhQUFhLENBQUNJLFNBQUQsQ0FBYixHQUE0QkosYUFBYSxDQUFDSSxTQUFELENBQWIsQ0FBeUJlLGVBQXpCLElBQTRDbkIsYUFBYSxDQUFDSSxTQUFELENBQWIsQ0FBeUJXLEVBQXpCLEtBQWdDQSxFQUF4RyxHQUE4RztBQVY5SCxpQkFDU0EsRUFBRSxHQUFHWCxTQURkLENBRFI7QUFjSCxhQWpCaUIsQ0FBakIsZ0JBaUJHO0FBQUssY0FBQSxTQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBbEJSO0FBTko7QUFESixRQURKO0FBK0JIOzs7O0VBbkRxQ0YsS0FBSyxDQUFDa0IsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IERyb3Bkb3duSXRlbSBmcm9tIFwiLi9Ecm9wZG93bkl0ZW1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBvcGVuZWQ6IHRoaXMucHJvcHMub3BlbmVkLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiB0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJvcGRvd25SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCB7IGxpc3RJbmRleCwgZ2V0V2lkdGggfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRyb3Bkb3duUmVmLmN1cnJlbnQgJiYgbGlzdEluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIGdldFdpZHRoKHtlbG06IHRoaXMuZHJvcGRvd25SZWYuY3VycmVudH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpdGVtcywgZXhwYW5kSWNvbiwgc2VsZWN0ZWRJdGVtcywgb25TZWxlY3RBY3Rpb24sIGxpc3RJbmRleCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZHJvcGRvd24tbGlzdC1jb250YWluZXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBcIi0tbm90LWZpcnN0XCI6IGxpc3RJbmRleCA+IDBcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZWxlbSA9PiB0aGlzLmRyb3Bkb3duUmVmLmN1cnJlbnQgPSBlbGVtIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyEhaXRlbXMubGVuZ3RoID8gaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7aWQsIGxhYmVsLCBkaXNhYmxlZCwgcmVmZXJlbmNlfSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWQgKyBsaXN0SW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdEFjdGlvbj17b25TZWxlY3RBY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZCB8fCBkaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e3NlbGVjdGVkSXRlbXNbbGlzdEluZGV4XSA/IHNlbGVjdGVkSXRlbXNbbGlzdEluZGV4XS5pZCA9PT0gaWQgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEljb249e2V4cGFuZEljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U9e3JlZmVyZW5jZSA9PT0gXCJ0cnVlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0SW5kZXg9e2xpc3RJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRHJvcGRvd249e3NlbGVjdGVkSXRlbXNbbGlzdEluZGV4XSA/IChzZWxlY3RlZEl0ZW1zW2xpc3RJbmRleF0uZHJvcGRvd25DbGlja2VkICYmIHNlbGVjdGVkSXRlbXNbbGlzdEluZGV4XS5pZCA9PT0gaWQpIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTogPGRpdiBjbGFzc05hbWU9XCJuby1zZWFyY2gtcmVzdWx0c1wiPk5vIFJlc3VsdHM8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19