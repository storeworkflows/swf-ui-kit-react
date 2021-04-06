"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _findByType = _interopRequireWildcard(require("../utils/findByType"));

var _AccordionItem = _interopRequireDefault(require("./AccordionItem"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Accordion = /*#__PURE__*/function (_React$Component) {
  _inherits(Accordion, _React$Component);

  var _super = _createSuper(Accordion);

  function Accordion(props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _super.call(this, props);
    _this.itemSelected = _this.itemSelected.bind(_assertThisInitialized(_this));
    _this.state = {
      selectedItemKey: null
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: "itemSelected",
    value: function itemSelected(_ref) {
      var key = _ref.key;
      var onItemClicked = this.props.onItemClicked;
      var selectedItemKey = this.state.selectedItemKey;
      var updatedKey = key === selectedItemKey ? null : key;
      this.setState({
        selectedItemKey: updatedKey
      });
      onItemClicked({
        key: key
      });
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          selectMany = _this$props.selectMany;
      var selectedItemKey = this.state.selectedItemKey;
      var items = (0, _findByType["default"])(children, "Item");
      if (!items || items.length < 1) return null;
      return items.map(function (el, i) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AccordionItem["default"], _objectSpread({
          opened: el.key === selectedItemKey,
          manageOpened: !selectMany,
          onSelected: function onSelected() {
            return !selectMany && _this2.itemSelected({
              key: el.key
            });
          },
          isLastItem: i === items.length - 1,
          isFirstItem: i === 0
        }, el.props), el.key);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var classes = (0, _classnames["default"])(this.props.className, "accordion-container");
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: classes,
          children: this.renderItems()
        })
      });
    }
  }]);

  return Accordion;
}(React.Component);

Accordion.Item = (0, _findByType.createSubComponent)("Item");
Accordion.Header = (0, _findByType.createSubComponent)("Header");
Accordion.defaultProps = {
  selectMany: true,
  hideDividers: false,
  onItemClicked: function onItemClicked() {
    return void 0;
  },
  className: {}
};
Accordion.propTypes = {
  selectMany: _propTypes["default"].bool,
  onItemClicked: _propTypes["default"].func,
  hideDividers: _propTypes["default"].bool,
  className: _propTypes["default"].object
};
var _default = Accordion;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb24vQWNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsInByb3BzIiwiaXRlbVNlbGVjdGVkIiwiYmluZCIsInN0YXRlIiwic2VsZWN0ZWRJdGVtS2V5Iiwia2V5Iiwib25JdGVtQ2xpY2tlZCIsInVwZGF0ZWRLZXkiLCJzZXRTdGF0ZSIsImNoaWxkcmVuIiwic2VsZWN0TWFueSIsIml0ZW1zIiwibGVuZ3RoIiwibWFwIiwiZWwiLCJpIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsInJlbmRlckl0ZW1zIiwiUmVhY3QiLCJDb21wb25lbnQiLCJJdGVtIiwiSGVhZGVyIiwiZGVmYXVsdFByb3BzIiwiaGlkZURpdmlkZXJzIiwicHJvcFR5cGVzIiwiYm9vbCIsImZ1bmMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsUzs7Ozs7QUFFRixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQiwrQkFBcEI7QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsZUFBZSxFQUFFO0FBRFIsS0FBYjtBQUplO0FBUWxCOzs7O1dBRUQsNEJBQW1CO0FBQUEsVUFBTEMsR0FBSyxRQUFMQSxHQUFLO0FBQUEsVUFDUkMsYUFEUSxHQUNTLEtBQUtOLEtBRGQsQ0FDUk0sYUFEUTtBQUFBLFVBRVJGLGVBRlEsR0FFVyxLQUFLRCxLQUZoQixDQUVSQyxlQUZRO0FBSWYsVUFBSUcsVUFBVSxHQUFJRixHQUFHLEtBQUtELGVBQVQsR0FBNEIsSUFBNUIsR0FBbUNDLEdBQXBEO0FBQ0EsV0FBS0csUUFBTCxDQUFjO0FBQUNKLFFBQUFBLGVBQWUsRUFBRUc7QUFBbEIsT0FBZDtBQUVBRCxNQUFBQSxhQUFhLENBQUM7QUFBQ0QsUUFBQUEsR0FBRyxFQUFFQTtBQUFOLE9BQUQsQ0FBYjtBQUNIOzs7V0FFRCx1QkFBYztBQUFBOztBQUFBLHdCQUNxQixLQUFLTCxLQUQxQjtBQUFBLFVBQ0hTLFFBREcsZUFDSEEsUUFERztBQUFBLFVBQ09DLFVBRFAsZUFDT0EsVUFEUDtBQUFBLFVBRUhOLGVBRkcsR0FFZ0IsS0FBS0QsS0FGckIsQ0FFSEMsZUFGRztBQUdWLFVBQU1PLEtBQUssR0FBRyw0QkFBV0YsUUFBWCxFQUFxQixNQUFyQixDQUFkO0FBRUEsVUFBSSxDQUFDRSxLQUFELElBQVVBLEtBQUssQ0FBQ0MsTUFBTixHQUFhLENBQTNCLEVBQ0ksT0FBTyxJQUFQO0FBRUosYUFBT0QsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQ0MsRUFBRCxFQUFLQyxDQUFMLEVBQVc7QUFDeEIsNEJBQ0kscUJBQUMseUJBQUQ7QUFFSSxVQUFBLE1BQU0sRUFBRUQsRUFBRSxDQUFDVCxHQUFILEtBQVdELGVBRnZCO0FBR0ksVUFBQSxZQUFZLEVBQUUsQ0FBQ00sVUFIbkI7QUFJSSxVQUFBLFVBQVUsRUFBRTtBQUFBLG1CQUFNLENBQUNBLFVBQUQsSUFBZSxNQUFJLENBQUNULFlBQUwsQ0FBa0I7QUFBQ0ksY0FBQUEsR0FBRyxFQUFFUyxFQUFFLENBQUNUO0FBQVQsYUFBbEIsQ0FBckI7QUFBQSxXQUpoQjtBQUtJLFVBQUEsVUFBVSxFQUFJVSxDQUFDLEtBQUlKLEtBQUssQ0FBQ0MsTUFBTixHQUFhLENBTHBDO0FBTUksVUFBQSxXQUFXLEVBQUlHLENBQUMsS0FBRztBQU52QixXQU9RRCxFQUFFLENBQUNkLEtBUFgsR0FDU2MsRUFBRSxDQUFDVCxHQURaLENBREo7QUFXSCxPQVpNLENBQVA7QUFhSDs7O1dBR0Qsa0JBQVM7QUFDTCxVQUFNVyxPQUFPLEdBQUcsNEJBQ1osS0FBS2hCLEtBQUwsQ0FBV2lCLFNBREMsRUFFWixxQkFGWSxDQUFoQjtBQUtBLDBCQUNJO0FBQUEsK0JBQ0k7QUFBSyxVQUFBLFNBQVMsRUFBRUQsT0FBaEI7QUFBQSxvQkFDSyxLQUFLRSxXQUFMO0FBREw7QUFESixRQURKO0FBT0g7Ozs7RUEzRG1CQyxLQUFLLENBQUNDLFM7O0FBOEQ5QnJCLFNBQVMsQ0FBQ3NCLElBQVYsR0FBaUIsb0NBQW1CLE1BQW5CLENBQWpCO0FBQ0F0QixTQUFTLENBQUN1QixNQUFWLEdBQW1CLG9DQUFtQixRQUFuQixDQUFuQjtBQUVBdkIsU0FBUyxDQUFDd0IsWUFBVixHQUF5QjtBQUNyQmIsRUFBQUEsVUFBVSxFQUFFLElBRFM7QUFFckJjLEVBQUFBLFlBQVksRUFBRSxLQUZPO0FBR3JCbEIsRUFBQUEsYUFBYSxFQUFFO0FBQUEsV0FBTSxLQUFLLENBQVg7QUFBQSxHQUhNO0FBSXJCVyxFQUFBQSxTQUFTLEVBQUU7QUFKVSxDQUF6QjtBQU9BbEIsU0FBUyxDQUFDMEIsU0FBVixHQUFzQjtBQUNsQmYsRUFBQUEsVUFBVSxFQUFFZSxzQkFBVUMsSUFESjtBQUVsQnBCLEVBQUFBLGFBQWEsRUFBRW1CLHNCQUFVRSxJQUZQO0FBR2xCSCxFQUFBQSxZQUFZLEVBQUVDLHNCQUFVQyxJQUhOO0FBSWxCVCxFQUFBQSxTQUFTLEVBQUVRLHNCQUFVRztBQUpILENBQXRCO2VBT2U3QixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IGZpbmRCeVR5cGUsIHtjcmVhdGVTdWJDb21wb25lbnR9IGZyb20gXCIuLi91dGlscy9maW5kQnlUeXBlXCI7XHJcbmltcG9ydCBBY2NvcmRpb25JdGVtIGZyb20gXCIuL0FjY29yZGlvbkl0ZW1cIjtcclxuXHJcbmNsYXNzIEFjY29yZGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsZWN0ZWQgPSB0aGlzLml0ZW1TZWxlY3RlZC5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1LZXk6IG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGl0ZW1TZWxlY3RlZCh7a2V5fSl7XHJcbiAgICAgICAgY29uc3Qge29uSXRlbUNsaWNrZWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7c2VsZWN0ZWRJdGVtS2V5fSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGxldCB1cGRhdGVkS2V5ID0gKGtleSA9PT0gc2VsZWN0ZWRJdGVtS2V5KSA/IG51bGwgOiBrZXk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRJdGVtS2V5OiB1cGRhdGVkS2V5fSk7XHJcblxyXG4gICAgICAgIG9uSXRlbUNsaWNrZWQoe2tleToga2V5fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySXRlbXMoKSB7XHJcbiAgICAgICAgY29uc3Qge2NoaWxkcmVuLCBzZWxlY3RNYW55fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge3NlbGVjdGVkSXRlbUtleX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgXCJJdGVtXCIpO1xyXG5cclxuICAgICAgICBpZiAoIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aDwxKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLm1hcCgoZWwsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXtlbC5rZXkgPT09IHNlbGVjdGVkSXRlbUtleX1cclxuICAgICAgICAgICAgICAgICAgICBtYW5hZ2VPcGVuZWQ9eyFzZWxlY3RNYW55fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0ZWQ9eygpID0+ICFzZWxlY3RNYW55ICYmIHRoaXMuaXRlbVNlbGVjdGVkKHtrZXk6IGVsLmtleX0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzTGFzdEl0ZW0gPSB7aT09PShpdGVtcy5sZW5ndGgtMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGaXJzdEl0ZW0gPSB7aT09PTB9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmVsLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICBcImFjY29yZGlvbi1jb250YWluZXJcIlxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJdGVtcygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuQWNjb3JkaW9uLkl0ZW0gPSBjcmVhdGVTdWJDb21wb25lbnQoXCJJdGVtXCIpO1xyXG5BY2NvcmRpb24uSGVhZGVyID0gY3JlYXRlU3ViQ29tcG9uZW50KFwiSGVhZGVyXCIpO1xyXG5cclxuQWNjb3JkaW9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHNlbGVjdE1hbnk6IHRydWUsXHJcbiAgICBoaWRlRGl2aWRlcnM6IGZhbHNlLFxyXG4gICAgb25JdGVtQ2xpY2tlZDogKCkgPT4gdm9pZCAwLFxyXG4gICAgY2xhc3NOYW1lOiB7fVxyXG59XHJcblxyXG5BY2NvcmRpb24ucHJvcFR5cGVzID0ge1xyXG4gICAgc2VsZWN0TWFueTogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvbkl0ZW1DbGlja2VkOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIGhpZGVEaXZpZGVyczogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjbGFzc05hbWU6IHByb3BUeXBlcy5vYmplY3QsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbiJdfQ==