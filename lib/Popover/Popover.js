"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles2 = _interopRequireDefault(require("./styles.scss"));

var _findByType = _interopRequireDefault(require("../utils/findByType"));

var _utils = require("./utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var Content = function Content() {
  return null;
};

var Target = function Target() {
  return null;
};

var Popover = /*#__PURE__*/function (_React$Component) {
  _inherits(Popover, _React$Component);

  var _super = _createSuper(Popover);

  function Popover(props) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _super.call(this, props);
    _this.targetClicked = _this.targetClicked.bind(_assertThisInitialized(_this));
    _this.state = {
      opened: false,
      height: 0,
      width: 0
    };
    _this.targetRef = /*#__PURE__*/React.createRef();
    _this.contentRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(Popover, [{
    key: "renderContent",
    value: function renderContent() {
      var _this$props = this.props,
          children = _this$props.children,
          hideTail = _this$props.hideTail;
      var content = (0, _findByType["default"])(children, Content);
      if (!content) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "popover-content arrow arrow-up",
        ref: this.contentRef,
        children: [content.props.children, " "]
      });
    }
  }, {
    key: "renderTarget",
    value: function renderTarget() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          positionTarget = _this$props2.positionTarget;
      var target = (0, _findByType["default"])(children, Target);
      var targetContent = !target ? positionTarget : target.props.children;
      if (!targetContent) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        id: "popover-target",
        ref: this.targetRef,
        onClick: this.targetClicked,
        children: [targetContent, " "]
      });
    }
  }, {
    key: "targetClicked",
    value: function targetClicked() {
      var _this$props3 = this.props,
          manageOpened = _this$props3.manageOpened,
          onClick = _this$props3.onClick;
      var currentState = this.state.opened;

      if (!manageOpened) {
        currentState = !currentState;
        this.setState({
          opened: currentState
        });
      }

      if (onClick !== undefined && onClick !== null) onClick({
        value: currentState
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        opened: this.props.opened
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.contentRef.current) {
        var targetDimensions = this.targetRef.current.getBoundingClientRect();
        var contentDimensions = this.contentRef.current.getBoundingClientRect();
        var _this$props4 = this.props,
            positions = _this$props4.positions,
            hideTail = _this$props4.hideTail,
            roundBorder = _this$props4.roundBorder;
        var stylesInfo = (0, _utils.getPopoverStyle)(positions, targetDimensions, contentDimensions, window.innerWidth, hideTail, roundBorder);
        var _styles = stylesInfo.style;
        this.contentRef.current.style.transform = _styles.transform;
        this.contentRef.current.style.left = _styles.left;
        this.contentRef.current.style.top = _styles.top;

        if (!hideTail && stylesInfo.hasArrow) {
          for (var _i = 0, _Object$entries = Object.entries(stylesInfo.arrowStyle); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            this.contentRef.current.style.setProperty(key, value);
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var opened = this.state.opened;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles2["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "popover-element",
          children: [this.renderTarget(), opened && this.renderContent()]
        })]
      });
    }
  }]);

  return Popover;
}(React.Component);

;
Popover.Content = Content;
Popover.Target = Target;
Popover.defaultProps = {
  hideTail: false,
  manageOpened: false,
  opened: false,
  positions: [{
    target: 'bottom-start',
    content: 'top-start'
  }, {
    target: 'bottom-end',
    content: 'top-end'
  }, {
    target: 'top-start',
    content: 'bottom-start'
  }, {
    target: 'top-end',
    content: 'bottom-end'
  }, {
    target: 'top-end',
    content: 'top-start'
  }, {
    target: 'bottom-end',
    content: 'bottom-start'
  }, {
    target: 'top-start',
    content: 'top-end'
  }, {
    target: 'bottom-start',
    content: 'bottom-end'
  }],
  roundBorder: true
};
Popover.propTypes = {
  hideTail: _propTypes["default"].bool,
  manageOpened: _propTypes["default"].bool,
  opened: _propTypes["default"].bool,
  positionTarget: _propTypes["default"].element,
  positions: _propTypes["default"].array,
  onClick: _propTypes["default"].func,
  roundBorder: _propTypes["default"].bool
};
var _default = Popover;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qb3BvdmVyL1BvcG92ZXIuanMiXSwibmFtZXMiOlsiQ29udGVudCIsIlRhcmdldCIsIlBvcG92ZXIiLCJwcm9wcyIsInRhcmdldENsaWNrZWQiLCJiaW5kIiwic3RhdGUiLCJvcGVuZWQiLCJoZWlnaHQiLCJ3aWR0aCIsInRhcmdldFJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiY29udGVudFJlZiIsImNoaWxkcmVuIiwiaGlkZVRhaWwiLCJjb250ZW50IiwicG9zaXRpb25UYXJnZXQiLCJ0YXJnZXQiLCJ0YXJnZXRDb250ZW50IiwibWFuYWdlT3BlbmVkIiwib25DbGljayIsImN1cnJlbnRTdGF0ZSIsInNldFN0YXRlIiwidW5kZWZpbmVkIiwidmFsdWUiLCJjdXJyZW50IiwidGFyZ2V0RGltZW5zaW9ucyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnRlbnREaW1lbnNpb25zIiwicG9zaXRpb25zIiwicm91bmRCb3JkZXIiLCJzdHlsZXNJbmZvIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInN0eWxlcyIsInN0eWxlIiwidHJhbnNmb3JtIiwibGVmdCIsInRvcCIsImhhc0Fycm93IiwiT2JqZWN0IiwiZW50cmllcyIsImFycm93U3R5bGUiLCJrZXkiLCJzZXRQcm9wZXJ0eSIsInJlbmRlclRhcmdldCIsInJlbmRlckNvbnRlbnQiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJib29sIiwiZWxlbWVudCIsImFycmF5IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsU0FBTSxJQUFOO0FBQUEsQ0FBaEI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxTQUFNLElBQU47QUFBQSxDQUFmOztJ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QUU4QixzQkFBVUMsSUFGUjtBQUdoQjVDLEVBQUFBLE1BQU0sRUFBRTJDLHNCQUFVQyxJQUhGO0FBSWhCbEMsRUFBQUEsY0FBYyxFQUFFaUMsc0JBQVVFLE9BSlY7QUFLaEJ0QixFQUFBQSxTQUFTLEVBQUVvQixzQkFBVUcsS0FMTDtBQU1oQmhDLEVBQUFBLE9BQU8sRUFBRTZCLHNCQUFVSSxJQU5IO0FBT2hCdkIsRUFBQUEsV0FBVyxFQUFFbUIsc0JBQVVDO0FBUFAsQ0FBcEI7ZUFVZWpELE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xyXG5pbXBvcnQgZmluZEJ5VHlwZSBmcm9tIFwiLi4vdXRpbHMvZmluZEJ5VHlwZVwiO1xyXG5pbXBvcnQge2dldFBvcG92ZXJTdHlsZX0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmNvbnN0IENvbnRlbnQgPSAoKSA9PiBudWxsO1xyXG5jb25zdCBUYXJnZXQgPSAoKSA9PiBudWxsO1xyXG5cclxuXHJcbmNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy50YXJnZXRDbGlja2VkID0gdGhpcy50YXJnZXRDbGlja2VkLmJpbmQodGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgb3BlbmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDb250ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHtjaGlsZHJlbiwgaGlkZVRhaWx9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgQ29udGVudCk7XHJcblxyXG4gICAgICAgIGlmICghY29udGVudClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBvcG92ZXItY29udGVudCBhcnJvdyBhcnJvdy11cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLmNvbnRlbnRSZWZ9PlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnQucHJvcHMuY2hpbGRyZW59IDwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRhcmdldCgpIHtcclxuICAgICAgICBjb25zdCB7Y2hpbGRyZW4sIHBvc2l0aW9uVGFyZ2V0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgVGFyZ2V0KTtcclxuXHJcbiAgICAgICAgbGV0IHRhcmdldENvbnRlbnQgPSAoIXRhcmdldCkgPyBwb3NpdGlvblRhcmdldCA6IHRhcmdldC5wcm9wcy5jaGlsZHJlbiA7XHJcblxyXG4gICAgICAgIGlmICghdGFyZ2V0Q29udGVudClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGlkID1cInBvcG92ZXItdGFyZ2V0XCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMudGFyZ2V0UmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLnRhcmdldENsaWNrZWQgfT5cclxuICAgICAgICAgICAgICAgIHt0YXJnZXRDb250ZW50fSA8L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICB0YXJnZXRDbGlja2VkICgpe1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VPcGVuZWQsIG9uQ2xpY2t9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgY3VycmVudFN0YXRlID0gdGhpcy5zdGF0ZS5vcGVuZWQ7XHJcblxyXG4gICAgICAgIGlmKCFtYW5hZ2VPcGVuZWQpIHtcclxuICAgICAgICAgICAgY3VycmVudFN0YXRlID0gIWN1cnJlbnRTdGF0ZVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG9wZW5lZDogY3VycmVudFN0YXRlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYob25DbGljayE9PXVuZGVmaW5lZCAmJiBvbkNsaWNrIT09bnVsbClcclxuICAgICAgICAgICAgb25DbGljayh7dmFsdWU6IGN1cnJlbnRTdGF0ZX0pXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG9wZW5lZDogdGhpcy5wcm9wcy5vcGVuZWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGVudFJlZi5jdXJyZW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRhcmdldERpbWVuc2lvbnMgPSB0aGlzLnRhcmdldFJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBsZXQgY29udGVudERpbWVuc2lvbnMgPSB0aGlzLmNvbnRlbnRSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3Qge3Bvc2l0aW9ucywgaGlkZVRhaWwsIHJvdW5kQm9yZGVyfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3R5bGVzSW5mbyA9ICBnZXRQb3BvdmVyU3R5bGUocG9zaXRpb25zLCB0YXJnZXREaW1lbnNpb25zLCBjb250ZW50RGltZW5zaW9ucywgd2luZG93LmlubmVyV2lkdGgsIGhpZGVUYWlsLCByb3VuZEJvcmRlcik7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZXMgPSBzdHlsZXNJbmZvLnN0eWxlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBzdHlsZXMudHJhbnNmb3JtO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRSZWYuY3VycmVudC5zdHlsZS5sZWZ0ID0gc3R5bGVzLmxlZnQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudFJlZi5jdXJyZW50LnN0eWxlLnRvcCA9IHN0eWxlcy50b3A7XHJcblxyXG4gICAgICAgICAgICBpZighaGlkZVRhaWwgJiYgc3R5bGVzSW5mby5oYXNBcnJvdykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc3R5bGVzSW5mby5hcnJvd1N0eWxlKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRSZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtvcGVuZWR9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwb3BvdmVyLWVsZW1lbnRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGFyZ2V0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAge29wZW5lZCAmJiB0aGlzLnJlbmRlckNvbnRlbnQoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuUG9wb3Zlci5Db250ZW50ID0gQ29udGVudDtcclxuUG9wb3Zlci5UYXJnZXQgPSBUYXJnZXQ7XHJcblxyXG5Qb3BvdmVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGhpZGVUYWlsOiBmYWxzZSxcclxuICAgIG1hbmFnZU9wZW5lZDogZmFsc2UsXHJcbiAgICBvcGVuZWQ6IGZhbHNlLFxyXG4gICAgcG9zaXRpb25zOiBbXHJcbiAgICAgICAgeyB0YXJnZXQ6ICdib3R0b20tc3RhcnQnLCBjb250ZW50OiAndG9wLXN0YXJ0JyB9LFxyXG4gICAgICAgIHsgdGFyZ2V0OiAnYm90dG9tLWVuZCcsIGNvbnRlbnQ6ICd0b3AtZW5kJyB9LFxyXG4gICAgICAgIHsgdGFyZ2V0OiAndG9wLXN0YXJ0JywgY29udGVudDogJ2JvdHRvbS1zdGFydCcgfSxcclxuICAgICAgICB7IHRhcmdldDogJ3RvcC1lbmQnLCBjb250ZW50OiAnYm90dG9tLWVuZCcgfSxcclxuICAgICAgICB7IHRhcmdldDogJ3RvcC1lbmQnLCBjb250ZW50OiAndG9wLXN0YXJ0JyB9LFxyXG4gICAgICAgIHsgdGFyZ2V0OiAnYm90dG9tLWVuZCcsIGNvbnRlbnQ6ICdib3R0b20tc3RhcnQnIH0sXHJcbiAgICAgICAgeyB0YXJnZXQ6ICd0b3Atc3RhcnQnLCBjb250ZW50OiAndG9wLWVuZCcgfSxcclxuICAgICAgICB7IHRhcmdldDogJ2JvdHRvbS1zdGFydCcsIGNvbnRlbnQ6ICdib3R0b20tZW5kJyB9XHJcbiAgICBdLFxyXG4gICAgcm91bmRCb3JkZXI6IHRydWUsXHJcbn1cclxuXHJcblBvcG92ZXIucHJvcFR5cGVzID0ge1xyXG4gICAgaGlkZVRhaWw6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIG9wZW5lZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBwb3NpdGlvblRhcmdldDogcHJvcFR5cGVzLmVsZW1lbnQsXHJcbiAgICBwb3NpdGlvbnM6IHByb3BUeXBlcy5hcnJheSxcclxuICAgIG9uQ2xpY2s6IHByb3BUeXBlcy5mdW5jLFxyXG4gICAgcm91bmRCb3JkZXI6IHByb3BUeXBlcy5ib29sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXIiXX0=