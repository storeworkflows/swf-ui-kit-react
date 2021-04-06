"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _DropdownItem = _interopRequireDefault(require("./DropdownItem"));

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
    return _this;
  }

  _createClass(DropdownList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          items = _this$props.items,
          expandIcon = _this$props.expandIcon,
          selectedItems = _this$props.selectedItems,
          onSelectAction = _this$props.onSelectAction,
          listIndex = _this$props.listIndex;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-list",
          children: items.map(function (item) {
            var id = item.id,
                label = item.label,
                disabled = item.disabled,
                table = item.table;
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DropdownItem["default"], {
              onSelectAction: onSelectAction,
              id: id,
              label: label,
              disabled: _this2.props.disabled || disabled,
              isSelected: selectedItems.includes(id),
              expandIcon: expandIcon,
              reference: !!table,
              listIndex: listIndex
            }, id);
          })
        })
      });
    }
  }]);

  return DropdownList;
}(React.Component);

exports["default"] = DropdownList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRXhwYW5kRHJvcGRvd24vRHJvcGRvd25MaXN0LmpzIl0sIm5hbWVzIjpbIkRyb3Bkb3duTGlzdCIsInByb3BzIiwic3RhdGUiLCJvcGVuZWQiLCJzZWxlY3RlZEl0ZW1zIiwiaXRlbXMiLCJleHBhbmRJY29uIiwib25TZWxlY3RBY3Rpb24iLCJsaXN0SW5kZXgiLCJtYXAiLCJpdGVtIiwiaWQiLCJsYWJlbCIsImRpc2FibGVkIiwidGFibGUiLCJpbmNsdWRlcyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7OztBQUNqQix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLE1BQU0sRUFBRSxNQUFLRixLQUFMLENBQVdFLE1BRFY7QUFFVEMsTUFBQUEsYUFBYSxFQUFFLE1BQUtILEtBQUwsQ0FBV0c7QUFGakIsS0FBYjtBQUZlO0FBTWxCOzs7O1dBRUQsa0JBQVM7QUFBQTs7QUFBQSx3QkFDaUUsS0FBS0gsS0FEdEU7QUFBQSxVQUNFSSxLQURGLGVBQ0VBLEtBREY7QUFBQSxVQUNTQyxVQURULGVBQ1NBLFVBRFQ7QUFBQSxVQUNxQkYsYUFEckIsZUFDcUJBLGFBRHJCO0FBQUEsVUFDb0NHLGNBRHBDLGVBQ29DQSxjQURwQztBQUFBLFVBQ29EQyxTQURwRCxlQUNvREEsU0FEcEQ7QUFFRCwwQkFDSTtBQUFBLCtCQUNJO0FBQUssVUFBQSxTQUFTLEVBQUMsZUFBZjtBQUFBLG9CQUNLSCxLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFBQSxnQkFDVkMsRUFEVSxHQUNvQkQsSUFEcEIsQ0FDVkMsRUFEVTtBQUFBLGdCQUNOQyxLQURNLEdBQ29CRixJQURwQixDQUNORSxLQURNO0FBQUEsZ0JBQ0NDLFFBREQsR0FDb0JILElBRHBCLENBQ0NHLFFBREQ7QUFBQSxnQkFDV0MsS0FEWCxHQUNvQkosSUFEcEIsQ0FDV0ksS0FEWDtBQUdqQixnQ0FDUSxxQkFBQyx3QkFBRDtBQUVJLGNBQUEsY0FBYyxFQUFFUCxjQUZwQjtBQUdJLGNBQUEsRUFBRSxFQUFFSSxFQUhSO0FBSUksY0FBQSxLQUFLLEVBQUVDLEtBSlg7QUFLSSxjQUFBLFFBQVEsRUFBRSxNQUFJLENBQUNYLEtBQUwsQ0FBV1ksUUFBWCxJQUF1QkEsUUFMckM7QUFNSSxjQUFBLFVBQVUsRUFBRVQsYUFBYSxDQUFDVyxRQUFkLENBQXVCSixFQUF2QixDQU5oQjtBQU9JLGNBQUEsVUFBVSxFQUFFTCxVQVBoQjtBQVFJLGNBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQ1EsS0FSakI7QUFTSSxjQUFBLFNBQVMsRUFBRU47QUFUZixlQUNXRyxFQURYLENBRFI7QUFhSCxXQWhCQTtBQURMO0FBREosUUFESjtBQXVCUDs7OztFQWxDcUNLLEtBQUssQ0FBQ0MsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJvcGRvd25JdGVtIGZyb20gXCIuL0Ryb3Bkb3duSXRlbVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wZW5lZDogdGhpcy5wcm9wcy5vcGVuZWQsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM6IHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtcyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtpdGVtcywgZXhwYW5kSWNvbiwgc2VsZWN0ZWRJdGVtcywgb25TZWxlY3RBY3Rpb24sIGxpc3RJbmRleH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge2lkLCBsYWJlbCwgZGlzYWJsZWQsIHRhYmxlfSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0QWN0aW9uPXtvblNlbGVjdEFjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkIHx8IGRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17c2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhpZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRJY29uPXtleHBhbmRJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlPXshIXRhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEluZGV4PXtsaXN0SW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0=