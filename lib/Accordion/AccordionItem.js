"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _findByType = _interopRequireDefault(require("../utils/findByType"));

var _Button = _interopRequireDefault(require("../Button/Button"));

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

var Header = function Header() {
  return null;
};

var AccordionItem = /*#__PURE__*/function (_React$Component) {
  _inherits(AccordionItem, _React$Component);

  var _super = _createSuper(AccordionItem);

  function AccordionItem(props) {
    var _this;

    _classCallCheck(this, AccordionItem);

    _this = _super.call(this, props);
    _this.itemClicked = _this.itemClicked.bind(_assertThisInitialized(_this));
    _this.state = {
      opened: props.opened
    };
    return _this;
  }

  _createClass(AccordionItem, [{
    key: "itemClicked",
    value: function itemClicked() {
      var opened = this.state.opened;
      var _this$props = this.props,
          manageOpened = _this$props.manageOpened,
          onClick = _this$props.onClick,
          onSelected = _this$props.onSelected;
      var updateOpened = opened;

      if (!manageOpened) {
        updateOpened = !opened;
        this.setState({
          opened: updateOpened
        });
      }

      onClick({
        opened: updateOpened
      });
      onSelected();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this$props2 = this.props,
          manageOpened = _this$props2.manageOpened,
          opened = _this$props2.opened;
      if (manageOpened && opened !== this.state.opened) this.setState({
        opened: opened
      });
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          label = _this$props3.label;
      var header = (0, _findByType["default"])(children, "Header");
      if (!header || header.length < 1) return /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        children: label
      });
      return header;
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var children = this.props.children;
      var header = (0, _findByType["default"])(children, "Header");
      var contentElements = [].concat(children);
      if (header && header.length > 0) contentElements = contentElements.filter(function (child) {
        return child.type !== header[0].type;
      });
      if (contentElements.length > 0) return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "accordion-content",
        children: contentElements
      });
      return null;
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var _this$props4 = this.props,
          triggerIcon = _this$props4.triggerIcon,
          iconToStart = _this$props4.iconToStart;
      var classes = (0, _classnames["default"])({
        "trigger-icon": true,
        "left": iconToStart,
        "right": !iconToStart
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        className: classes,
        icon: triggerIcon,
        variant: "tertiary"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          iconToStart = _this$props5.iconToStart,
          isLastItem = _this$props5.isLastItem,
          isFirstItem = _this$props5.isFirstItem,
          className = _this$props5.className;
      var opened = this.state.opened;
      var itemStyles = (0, _classnames["default"])(className, {
        "accordion-item": true,
        "last": isLastItem,
        "first": isFirstItem
      });
      var headerContentStyles = (0, _classnames["default"])({
        "accordion-header-content": true,
        "left": !iconToStart,
        "right": iconToStart,
        "opened": opened
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: itemStyles,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "accordion-item-header",
            onClick: this.itemClicked,
            children: [iconToStart && this.renderIcon(), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: headerContentStyles,
              children: this.renderHeader()
            }), !iconToStart && this.renderIcon()]
          }), opened && this.renderContent()]
        })
      });
    }
  }]);

  return AccordionItem;
}(React.Component);

AccordionItem.defaultProps = {
  opened: false,
  manageOpened: false,
  triggerIcon: "chevron-down",
  iconToStart: false,
  className: {},
  onClick: function onClick() {
    return void 0;
  },
  onSelected: function onSelected() {
    return void 0;
  },
  isLastItem: false,
  isFirstItem: false
};
AccordionItem.propTypes = {
  label: _propTypes["default"].string,
  opened: _propTypes["default"].bool,
  manageOpened: _propTypes["default"].bool,
  onSelected: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  triggerIcon: _propTypes["default"].string,
  iconToStart: _propTypes["default"].bool,
  isLastItem: _propTypes["default"].bool,
  isFirstItem: _propTypes["default"].bool,
  className: _propTypes["default"].object
};
var _default = AccordionItem;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BY2NvcmRpb24vQWNjb3JkaW9uSXRlbS5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJBY2NvcmRpb25JdGVtIiwicHJvcHMiLCJpdGVtQ2xpY2tlZCIsImJpbmQiLCJzdGF0ZSIsIm9wZW5lZCIsIm1hbmFnZU9wZW5lZCIsIm9uQ2xpY2siLCJvblNlbGVjdGVkIiwidXBkYXRlT3BlbmVkIiwic2V0U3RhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImNoaWxkcmVuIiwibGFiZWwiLCJoZWFkZXIiLCJsZW5ndGgiLCJjb250ZW50RWxlbWVudHMiLCJjb25jYXQiLCJmaWx0ZXIiLCJjaGlsZCIsInR5cGUiLCJ0cmlnZ2VySWNvbiIsImljb25Ub1N0YXJ0IiwiY2xhc3NlcyIsImlzTGFzdEl0ZW0iLCJpc0ZpcnN0SXRlbSIsImNsYXNzTmFtZSIsIml0ZW1TdHlsZXMiLCJoZWFkZXJDb250ZW50U3R5bGVzIiwicmVuZGVySWNvbiIsInJlbmRlckhlYWRlciIsInJlbmRlckNvbnRlbnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJmdW5jIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxTQUFNLElBQU47QUFBQSxDQUFmOztJQUVNQyxhOzs7OztBQUVGLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLCtCQUFuQjtBQUVBLFVBQUtDLEtBQUwsR0FBVztBQUNQQyxNQUFBQSxNQUFNLEVBQUVKLEtBQUssQ0FBQ0k7QUFEUCxLQUFYO0FBSmU7QUFPbEI7Ozs7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QUFFO0FBQUEsV0FBTSxLQUFLLENBQVg7QUFBQSxHQVBhO0FBUXpCa0IsRUFBQUEsVUFBVSxFQUFFLEtBUmE7QUFTekJDLEVBQUFBLFdBQVcsRUFBRTtBQVRZLENBQTdCO0FBWUEzQixhQUFhLENBQUNxQyxTQUFkLEdBQTBCO0FBQ3RCdEIsRUFBQUEsS0FBSyxFQUFFc0Isc0JBQVVDLE1BREs7QUFFdEJqQyxFQUFBQSxNQUFNLEVBQUVnQyxzQkFBVUUsSUFGSTtBQUd0QmpDLEVBQUFBLFlBQVksRUFBRStCLHNCQUFVRSxJQUhGO0FBSXRCL0IsRUFBQUEsVUFBVSxFQUFFNkIsc0JBQVVHLElBSkE7QUFLdEJqQyxFQUFBQSxPQUFPLEVBQUU4QixzQkFBVUcsSUFMRztBQU10QmpCLEVBQUFBLFdBQVcsRUFBRWMsc0JBQVVDLE1BTkQ7QUFPdEJkLEVBQUFBLFdBQVcsRUFBRWEsc0JBQVVFLElBUEQ7QUFRdEJiLEVBQUFBLFVBQVUsRUFBRVcsc0JBQVVFLElBUkE7QUFTdEJaLEVBQUFBLFdBQVcsRUFBRVUsc0JBQVVFLElBVEQ7QUFVdEJYLEVBQUFBLFNBQVMsRUFBRVMsc0JBQVVJO0FBVkMsQ0FBMUI7ZUFhZXpDLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgZmluZEJ5VHlwZSBmcm9tIFwiLi4vdXRpbHMvZmluZEJ5VHlwZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b24vQnV0dG9uXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiBudWxsO1xyXG5cclxuY2xhc3MgQWNjb3JkaW9uSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5pdGVtQ2xpY2tlZCA9IHRoaXMuaXRlbUNsaWNrZWQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIG9wZW5lZDogcHJvcHMub3BlbmVkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGl0ZW1DbGlja2VkKCl7XHJcbiAgICAgICAgY29uc3Qge29wZW5lZH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VPcGVuZWQsIG9uQ2xpY2ssIG9uU2VsZWN0ZWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgdXBkYXRlT3BlbmVkID0gb3BlbmVkO1xyXG5cclxuICAgICAgICBpZighbWFuYWdlT3BlbmVkKXtcclxuICAgICAgICAgICAgdXBkYXRlT3BlbmVkID0gIW9wZW5lZDtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkOiB1cGRhdGVPcGVuZWR9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25DbGljayh7b3BlbmVkOiB1cGRhdGVPcGVuZWR9KTtcclxuICAgICAgICBvblNlbGVjdGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VPcGVuZWQsIG9wZW5lZH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIGlmKG1hbmFnZU9wZW5lZCAmJiBvcGVuZWQgIT09IHRoaXMuc3RhdGUub3BlbmVkKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWQ6IG9wZW5lZH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckhlYWRlcigpIHtcclxuICAgICAgICBjb25zdCB7Y2hpbGRyZW4sIGxhYmVsfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgXCJIZWFkZXJcIik7XHJcblxyXG4gICAgICAgIGlmICghaGVhZGVyIHx8IGhlYWRlci5sZW5ndGg8MSkgcmV0dXJuIDxsYWJlbD57bGFiZWx9PC9sYWJlbD47XHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXJcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDb250ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHtjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGZpbmRCeVR5cGUoY2hpbGRyZW4sIFwiSGVhZGVyXCIpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGNvbnRlbnRFbGVtZW50cyA9IFtdLmNvbmNhdChjaGlsZHJlbik7XHJcbiAgICAgICAgaWYoaGVhZGVyICYmIGhlYWRlci5sZW5ndGg+IDApXHJcbiAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50cyA9IGNvbnRlbnRFbGVtZW50cy5maWx0ZXIoY2hpbGQgPT4gY2hpbGQudHlwZSAhPT0gaGVhZGVyWzBdLnR5cGUpXHJcblxyXG4gICAgICAgIGlmKGNvbnRlbnRFbGVtZW50cy5sZW5ndGg+MClcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcImFjY29yZGlvbi1jb250ZW50XCJ9PlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnRFbGVtZW50c31cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJJY29uKCl7XHJcbiAgICAgICAgY29uc3Qge3RyaWdnZXJJY29uLCBpY29uVG9TdGFydH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBjbGFzc2VzID0gY2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgIFwidHJpZ2dlci1pY29uXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwibGVmdFwiOiBpY29uVG9TdGFydCxcclxuICAgICAgICAgICAgXCJyaWdodFwiOiAhaWNvblRvU3RhcnRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlc31cclxuICAgICAgICAgICAgaWNvbj17dHJpZ2dlckljb259XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9e1widGVydGlhcnlcIn1cclxuICAgICAgICAvPlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpY29uVG9TdGFydCwgaXNMYXN0SXRlbSwgaXNGaXJzdEl0ZW0sIGNsYXNzTmFtZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtvcGVuZWR9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbVN0eWxlcyA9ICBjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjb3JkaW9uLWl0ZW1cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwibGFzdFwiOiBpc0xhc3RJdGVtLFxyXG4gICAgICAgICAgICAgICAgXCJmaXJzdFwiOiBpc0ZpcnN0SXRlbVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBoZWFkZXJDb250ZW50U3R5bGVzID0gIGNsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgXCJhY2NvcmRpb24taGVhZGVyLWNvbnRlbnRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwibGVmdFwiOiAhaWNvblRvU3RhcnQsXHJcbiAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IGljb25Ub1N0YXJ0LFxyXG4gICAgICAgICAgICAgICAgXCJvcGVuZWRcIjogb3BlbmVkXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXRlbVN0eWxlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiYWNjb3JkaW9uLWl0ZW0taGVhZGVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaXRlbUNsaWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aWNvblRvU3RhcnQgJiYgdGhpcy5yZW5kZXJJY29uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtoZWFkZXJDb250ZW50U3R5bGVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckhlYWRlcigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFpY29uVG9TdGFydCAmJiB0aGlzLnJlbmRlckljb24oKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7IG9wZW5lZCAmJiB0aGlzLnJlbmRlckNvbnRlbnQoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbkFjY29yZGlvbkl0ZW0uZGVmYXVsdFByb3BzID0ge1xyXG4gICAgb3BlbmVkOiBmYWxzZSxcclxuICAgIG1hbmFnZU9wZW5lZDogZmFsc2UsXHJcbiAgICB0cmlnZ2VySWNvbjogXCJjaGV2cm9uLWRvd25cIixcclxuICAgIGljb25Ub1N0YXJ0OiBmYWxzZSxcclxuICAgIGNsYXNzTmFtZToge30sXHJcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkIDAsXHJcbiAgICBvblNlbGVjdGVkOiAoKSA9PiB2b2lkIDAsXHJcbiAgICBpc0xhc3RJdGVtOiBmYWxzZSxcclxuICAgIGlzRmlyc3RJdGVtOiBmYWxzZVxyXG59XHJcblxyXG5BY2NvcmRpb25JdGVtLnByb3BUeXBlcyA9IHtcclxuICAgIGxhYmVsOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb3BlbmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZU9wZW5lZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvblNlbGVjdGVkOiBwcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uQ2xpY2s6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgdHJpZ2dlckljb246IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpY29uVG9TdGFydDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpc0xhc3RJdGVtOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGlzRmlyc3RJdGVtOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIGNsYXNzTmFtZTogcHJvcFR5cGVzLm9iamVjdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb25JdGVtIl19