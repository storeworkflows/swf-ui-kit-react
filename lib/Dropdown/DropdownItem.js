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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
          isSelected = _this$props3.isSelected;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: (0, _classnames["default"])({
            "dropdown-item": true,
            "disabled": disabled,
            "selected": isSelected
          }),
          onClick: function onClick() {
            return _this2.itemSelected();
          },
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
  showOnMount: true
};
DropdownItem.propTypes = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  onSelectAction: _propTypes["default"].func,
  isSelected: _propTypes["default"].bool,
  showOnMount: _propTypes["default"].bool
};
var _default = DropdownItem;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ecm9wZG93bi9Ecm9wZG93bkl0ZW0uanMiXSwibmFtZXMiOlsiRHJvcGRvd25JdGVtIiwicHJvcHMiLCJpdGVtU2VsZWN0ZWQiLCJiaW5kIiwiaXRlbVJlZiIsImlkIiwiZGlzYWJsZWQiLCJvblNlbGVjdEFjdGlvbiIsInNob3dPbk1vdW50IiwiaXNTZWxlY3RlZCIsInNjcm9sbEludG9WaWV3IiwibGFiZWwiLCJlbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsWTs7Ozs7QUFFRix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQiwrQkFBcEI7QUFFQSxVQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUplO0FBS2xCOzs7O1dBRUQsd0JBQWU7QUFBQSx3QkFDNEIsS0FBS0gsS0FEakM7QUFBQSxVQUNKSSxFQURJLGVBQ0pBLEVBREk7QUFBQSxVQUNBQyxRQURBLGVBQ0FBLFFBREE7QUFBQSxVQUNVQyxjQURWLGVBQ1VBLGNBRFY7QUFHWCxVQUFHLENBQUNELFFBQUosRUFDSUMsY0FBYyxDQUFDO0FBQUNGLFFBQUFBLEVBQUUsRUFBRUE7QUFBTCxPQUFELENBQWQ7QUFDUDs7O1dBRUQsNkJBQW9CO0FBQUEseUJBQ2tCLEtBQUtKLEtBRHZCO0FBQUEsVUFDVE8sV0FEUyxnQkFDVEEsV0FEUztBQUFBLFVBQ0lDLFVBREosZ0JBQ0lBLFVBREo7QUFFaEIsVUFBRyxLQUFLTCxPQUFMLElBQWdCSyxVQUFoQixJQUE4QkQsV0FBakMsRUFDSSxLQUFLSixPQUFMLENBQWFNLGNBQWI7QUFDUDs7O1dBRUQsa0JBQVM7QUFBQTs7QUFBQSx5QkFPRCxLQUFLVCxLQVBKO0FBQUEsVUFHREksRUFIQyxnQkFHREEsRUFIQztBQUFBLFVBSURNLEtBSkMsZ0JBSURBLEtBSkM7QUFBQSxVQUtETCxRQUxDLGdCQUtEQSxRQUxDO0FBQUEsVUFNREcsVUFOQyxnQkFNREEsVUFOQztBQVNMLDBCQUNJO0FBQUEsK0JBQ0c7QUFBSyxVQUFBLFNBQVMsRUFBRSw0QkFBVztBQUN2Qiw2QkFBaUIsSUFETTtBQUV2Qix3QkFBWUgsUUFGVztBQUd2Qix3QkFBWUc7QUFIVyxXQUFYLENBQWhCO0FBS0ssVUFBQSxPQUFPLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNQLFlBQUwsRUFBTjtBQUFBLFdBTGQ7QUFNSyxzQkFBVUcsRUFOZjtBQU9LLFVBQUEsR0FBRyxFQUFJLGFBQUFPLEVBQUU7QUFBQSxtQkFBSSxNQUFJLENBQUNSLE9BQUwsR0FBZVEsRUFBbkI7QUFBQSxXQVBkO0FBQUEsb0JBU0tEO0FBVEw7QUFESCxRQURKO0FBZUg7Ozs7RUE5Q3NCRSxLQUFLLENBQUNDLFM7O0FBaURqQ2QsWUFBWSxDQUFDZSxZQUFiLEdBQTRCO0FBQ3hCVCxFQUFBQSxRQUFRLEVBQUUsS0FEYztBQUV4QkcsRUFBQUEsVUFBVSxFQUFFLEtBRlk7QUFHeEJELEVBQUFBLFdBQVcsRUFBRTtBQUhXLENBQTVCO0FBTUFSLFlBQVksQ0FBQ2dCLFNBQWIsR0FBeUI7QUFDckJYLEVBQUFBLEVBQUUsRUFBRVcsc0JBQVVDLFNBQVYsQ0FBb0IsQ0FDcEJELHNCQUFVRSxNQURVLEVBRXBCRixzQkFBVUcsTUFGVSxDQUFwQixDQURpQjtBQUtyQlIsRUFBQUEsS0FBSyxFQUFFSyxzQkFBVUUsTUFMSTtBQU1yQlosRUFBQUEsUUFBUSxFQUFFVSxzQkFBVUksSUFOQztBQU9yQmIsRUFBQUEsY0FBYyxFQUFFUyxzQkFBVUssSUFQTDtBQVFyQlosRUFBQUEsVUFBVSxFQUFFTyxzQkFBVUksSUFSRDtBQVNyQlosRUFBQUEsV0FBVyxFQUFFUSxzQkFBVUk7QUFURixDQUF6QjtlQVllcEIsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5jbGFzcyBEcm9wZG93bkl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaXRlbVNlbGVjdGVkID0gdGhpcy5pdGVtU2VsZWN0ZWQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtUmVmID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpdGVtU2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgY29uc3Qge2lkLCBkaXNhYmxlZCwgb25TZWxlY3RBY3Rpb259ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYoIWRpc2FibGVkKVxyXG4gICAgICAgICAgICBvblNlbGVjdEFjdGlvbih7aWQ6IGlkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3Qge3Nob3dPbk1vdW50LCBpc1NlbGVjdGVkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYodGhpcy5pdGVtUmVmICYmIGlzU2VsZWN0ZWQgJiYgc2hvd09uTW91bnQpXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbVJlZi5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgICAgICBpc1NlbGVjdGVkXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgIFwiZHJvcGRvd24taXRlbVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiBkaXNhYmxlZCxcclxuICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogaXNTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLml0ZW1TZWxlY3RlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEta2V5PXtpZH1cclxuICAgICAgICAgICAgICAgICAgICByZWYgPSB7ZWwgPT4gdGhpcy5pdGVtUmVmID0gZWx9XHJcbiAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuRHJvcGRvd25JdGVtLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgc2hvd09uTW91bnQ6IHRydWVcclxufVxyXG5cclxuRHJvcGRvd25JdGVtLnByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHByb3BUeXBlcy5udW1iZXJcclxuICAgIF0pLFxyXG4gICAgbGFiZWw6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvblNlbGVjdEFjdGlvbjogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBpc1NlbGVjdGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHNob3dPbk1vdW50OiBwcm9wVHlwZXMuYm9vbCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25JdGVtIl19