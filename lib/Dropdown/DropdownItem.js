"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var DropdownItem = /*#__PURE__*/function (_React$Component) {
  _inherits(DropdownItem, _React$Component);

  var _super = _createSuper(DropdownItem);

  function DropdownItem(props) {
    var _this;

    _classCallCheck(this, DropdownItem);

    _this = _super.call(this, props);
    _this.itemSelected = _this.itemSelected.bind(_assertThisInitialized(_this));
    _this.itemRef = null;
    return _this;
  }

  _createClass(DropdownItem, [{
    key: "itemSelected",
    value: function itemSelected() {
      var _this$props = this.props,
          id = _this$props.id,
          disabled = _this$props.disabled,
          onSelectAction = _this$props.onSelectAction;
      if (!disabled) onSelectAction({
        id: id
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          showOnMount = _this$props2.showOnMount,
          isSelected = _this$props2.isSelected;
      if (this.itemRef && isSelected && showOnMount) this.itemRef.scrollIntoView();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          id = _this$props3.id,
          label = _this$props3.label,
          disabled = _this$props3.disabled,
          isSelected = _this$props3.isSelected,
          className = _this$props3.className;
      var classes = (0, _classnames["default"])(className, "dropdown-item", {
        "disabled": disabled,
        "selected": isSelected
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: classes,
          onClick: this.itemSelected,
          "data-key": id,
          ref: function ref(el) {
            return _this2.itemRef = el;
          },
          children: label
        })
      });
    }
  }]);

  return DropdownItem;
}(React.Component);

DropdownItem.defaultProps = {
  disabled: false,
  isSelected: false,
  showOnMount: true,
  className: {}
};
DropdownItem.propTypes = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  onSelectAction: _propTypes["default"].func,
  isSelected: _propTypes["default"].bool,
  showOnMount: _propTypes["default"].bool,
  className: _propTypes["default"].object
};
var _default = DropdownItem;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ecm9wZG93bi9Ecm9wZG93bkl0ZW0uanMiXSwibmFtZXMiOlsiRHJvcGRvd25JdGVtIiwicHJvcHMiLCJpdGVtU2VsZWN0ZWQiLCJiaW5kIiwiaXRlbVJlZiIsImlkIiwiZGlzYWJsZWQiLCJvblNlbGVjdEFjdGlvbiIsInNob3dPbk1vdW50IiwiaXNTZWxlY3RlZCIsInNjcm9sbEludG9WaWV3IiwibGFiZWwiLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwiZWwiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm51bWJlciIsImJvb2wiLCJmdW5jIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFk7Ozs7O0FBRUYsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsK0JBQXBCO0FBRUEsVUFBS0MsT0FBTCxHQUFlLElBQWY7QUFKZTtBQUtsQjs7OztXQUVELHdCQUFlO0FBQUEsd0JBQzRCLEtBQUtILEtBRGpDO0FBQUEsVUFDSkksRUFESSxlQUNKQSxFQURJO0FBQUEsVUFDQUMsUUFEQSxlQUNBQSxRQURBO0FBQUEsVUFDVUMsY0FEVixlQUNVQSxjQURWO0FBR1gsVUFBRyxDQUFDRCxRQUFKLEVBQ0lDLGNBQWMsQ0FBQztBQUFDRixRQUFBQSxFQUFFLEVBQUVBO0FBQUwsT0FBRCxDQUFkO0FBQ1A7OztXQUVELDZCQUFvQjtBQUFBLHlCQUNrQixLQUFLSixLQUR2QjtBQUFBLFVBQ1RPLFdBRFMsZ0JBQ1RBLFdBRFM7QUFBQSxVQUNJQyxVQURKLGdCQUNJQSxVQURKO0FBRWhCLFVBQUcsS0FBS0wsT0FBTCxJQUFnQkssVUFBaEIsSUFBOEJELFdBQWpDLEVBQ0ksS0FBS0osT0FBTCxDQUFhTSxjQUFiO0FBQ1A7OztXQUVELGtCQUFTO0FBQUE7O0FBQUEseUJBRWtELEtBQUtULEtBRnZEO0FBQUEsVUFFR0ksRUFGSCxnQkFFR0EsRUFGSDtBQUFBLFVBRU9NLEtBRlAsZ0JBRU9BLEtBRlA7QUFBQSxVQUVjTCxRQUZkLGdCQUVjQSxRQUZkO0FBQUEsVUFFd0JHLFVBRnhCLGdCQUV3QkEsVUFGeEI7QUFBQSxVQUVvQ0csU0FGcEMsZ0JBRW9DQSxTQUZwQztBQUlMLFVBQUlDLE9BQU8sR0FBRyw0QkFDVkQsU0FEVSxFQUVWLGVBRlUsRUFHVjtBQUNJLG9CQUFZTixRQURoQjtBQUVJLG9CQUFZRztBQUZoQixPQUhVLENBQWQ7QUFRQSwwQkFDSTtBQUFBLCtCQUNHO0FBQUssVUFBQSxTQUFTLEVBQUVJLE9BQWhCO0FBQ0ssVUFBQSxPQUFPLEVBQUUsS0FBS1gsWUFEbkI7QUFFSyxzQkFBVUcsRUFGZjtBQUdLLFVBQUEsR0FBRyxFQUFJLGFBQUFTLEVBQUU7QUFBQSxtQkFBSSxNQUFJLENBQUNWLE9BQUwsR0FBZVUsRUFBbkI7QUFBQSxXQUhkO0FBQUEsb0JBS0tIO0FBTEw7QUFESCxRQURKO0FBV0g7Ozs7RUE3Q3NCSSxLQUFLLENBQUNDLFM7O0FBZ0RqQ2hCLFlBQVksQ0FBQ2lCLFlBQWIsR0FBNEI7QUFDeEJYLEVBQUFBLFFBQVEsRUFBRSxLQURjO0FBRXhCRyxFQUFBQSxVQUFVLEVBQUUsS0FGWTtBQUd4QkQsRUFBQUEsV0FBVyxFQUFFLElBSFc7QUFJeEJJLEVBQUFBLFNBQVMsRUFBRTtBQUphLENBQTVCO0FBT0FaLFlBQVksQ0FBQ2tCLFNBQWIsR0FBeUI7QUFDckJiLEVBQUFBLEVBQUUsRUFBRWEsc0JBQVVDLFNBQVYsQ0FBb0IsQ0FDcEJELHNCQUFVRSxNQURVLEVBRXBCRixzQkFBVUcsTUFGVSxDQUFwQixDQURpQjtBQUtyQlYsRUFBQUEsS0FBSyxFQUFFTyxzQkFBVUUsTUFMSTtBQU1yQmQsRUFBQUEsUUFBUSxFQUFFWSxzQkFBVUksSUFOQztBQU9yQmYsRUFBQUEsY0FBYyxFQUFFVyxzQkFBVUssSUFQTDtBQVFyQmQsRUFBQUEsVUFBVSxFQUFFUyxzQkFBVUksSUFSRDtBQVNyQmQsRUFBQUEsV0FBVyxFQUFFVSxzQkFBVUksSUFURjtBQVVyQlYsRUFBQUEsU0FBUyxFQUFFTSxzQkFBVU07QUFWQSxDQUF6QjtlQWFleEIsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5jbGFzcyBEcm9wZG93bkl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaXRlbVNlbGVjdGVkID0gdGhpcy5pdGVtU2VsZWN0ZWQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtUmVmID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpdGVtU2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgY29uc3Qge2lkLCBkaXNhYmxlZCwgb25TZWxlY3RBY3Rpb259ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYoIWRpc2FibGVkKVxyXG4gICAgICAgICAgICBvblNlbGVjdEFjdGlvbih7aWQ6IGlkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3Qge3Nob3dPbk1vdW50LCBpc1NlbGVjdGVkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYodGhpcy5pdGVtUmVmICYmIGlzU2VsZWN0ZWQgJiYgc2hvd09uTW91bnQpXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbVJlZi5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBpZCwgbGFiZWwsIGRpc2FibGVkLCBpc1NlbGVjdGVkLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCBjbGFzc2VzID0gY2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICBcImRyb3Bkb3duLWl0ZW1cIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiBkaXNhYmxlZCxcclxuICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogaXNTZWxlY3RlZFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5pdGVtU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1rZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IHtlbCA9PiB0aGlzLml0ZW1SZWYgPSBlbH1cclxuICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5Ecm9wZG93bkl0ZW0uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgaXNTZWxlY3RlZDogZmFsc2UsXHJcbiAgICBzaG93T25Nb3VudDogdHJ1ZSxcclxuICAgIGNsYXNzTmFtZToge31cclxufVxyXG5cclxuRHJvcGRvd25JdGVtLnByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHByb3BUeXBlcy5udW1iZXJcclxuICAgIF0pLFxyXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvblNlbGVjdEFjdGlvbjogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBpc1NlbGVjdGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHNob3dPbk1vdW50OiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLm9iamVjdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bkl0ZW0iXX0=