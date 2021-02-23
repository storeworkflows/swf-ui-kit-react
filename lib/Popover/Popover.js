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
        var position = this.props.positions;
        var stylesInfo = (0, _utils.getPopoverStyle)(position, targetDimensions, contentDimensions, window.innerWidth, this.props.hideTail);
        var _styles = stylesInfo.style;
        this.contentRef.current.style.transform = _styles.transform;
        this.contentRef.current.style.left = _styles.left;
        this.contentRef.current.style.top = _styles.top;
        console.log("this.props.hideTail", this.props.hideTail);
        console.log("stylesInfo.hasArrow", stylesInfo.hasArrow);
        console.log("stylesInfo.arrowStyle", stylesInfo.arrowStyle);

        if (!this.props.hideTail && stylesInfo.hasArrow) {
          for (var _i = 0, _Object$entries = Object.entries(stylesInfo.arrowStyle); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            this.contentRef.current.style.setProperty(key, value);
          }
        } else {
          this.contentRef.current.style.setProperty("--popover-arrow-size", 0);
        } //console.log("styles", this.contentRef.current.style[]);

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
  }]
};
Popover.propTypes = {
  hideTail: _propTypes["default"].bool,
  manageOpened: _propTypes["default"].bool,
  opened: _propTypes["default"].bool,
  positionTarget: _propTypes["default"].element,
  positions: _propTypes["default"].array,
  onClick: _propTypes["default"].func
};
var _default = Popover;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qb3BvdmVyL1BvcG92ZXIuanMiXSwibmFtZXMiOlsiQ29udGVudCIsIlRhcmdldCIsIlBvcG92ZXIiLCJwcm9wcyIsInRhcmdldENsaWNrZWQiLCJiaW5kIiwic3RhdGUiLCJvcGVuZWQiLCJoZWlnaHQiLCJ3aWR0aCIsInRhcmdldFJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiY29udGVudFJlZiIsImNoaWxkcmVuIiwiaGlkZVRhaWwiLCJjb250ZW50IiwicG9zaXRpb25UYXJnZXQiLCJ0YXJnZXQiLCJ0YXJnZXRDb250ZW50IiwibWFuYWdlT3BlbmVkIiwib25DbGljayIsImN1cnJlbnRTdGF0ZSIsInNldFN0YXRlIiwidW5kZWZpbmVkIiwidmFsdWUiLCJjdXJyZW50IiwidGFyZ2V0RGltZW5zaW9ucyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnRlbnREaW1lbnNpb25zIiwicG9zaXRpb24iLCJwb3NpdGlvbnMiLCJzdHlsZXNJbmZvIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInN0eWxlcyIsInN0eWxlIiwidHJhbnNmb3JtIiwibGVmdCIsInRvcCIsImNvbnNvbGUiLCJsb2ciLCJoYXNBcnJvdyIsImFycm93U3R5bGUiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5Iiwic2V0UHJvcGVydHkiLCJyZW5kZXJUYXJnZXQiLCJyZW5kZXJDb250ZW50IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYm9vbCIsImVsZW1lbnQiLCJhcnJheSIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQU0sSUFBTjtBQUFBLENBQWhCOztBQUNBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsU0FBTSxJQUFO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RTtBQUFqQyxHQU5PLEVBT1A7QUFBRUUsSUFBQUEsTUFBTSxFQUFFLFdBQVY7QUFBdUJGLElBQUFBLE9BQU8sRUFBRTtBQUFoQyxHQVBPLEVBUVA7QUFBRUUsSUFBQUEsTUFBTSxFQUFFLGNBQVY7QUFBMEJGLElBQUFBLE9BQU8sRUFBRTtBQUFuQyxHQVJPO0FBSlEsQ0FBdkI7QUFnQkFkLE9BQU8sQ0FBQ2tELFNBQVIsR0FBb0I7QUFDaEJyQyxFQUFBQSxRQUFRLEVBQUVxQyxzQkFBVUMsSUFESjtBQUVoQmpDLEVBQUFBLFlBQVksRUFBRWdDLHNCQUFVQyxJQUZSO0FBR2hCOUMsRUFBQUEsTUFBTSxFQUFFNkMsc0JBQVVDLElBSEY7QUFJaEJwQyxFQUFBQSxjQUFjLEVBQUVtQyxzQkFBVUUsT0FKVjtBQUtoQnZCLEVBQUFBLFNBQVMsRUFBRXFCLHNCQUFVRyxLQUxMO0FBTWhCbEMsRUFBQUEsT0FBTyxFQUFFK0Isc0JBQVVJO0FBTkgsQ0FBcEI7ZUFTZXRELE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xyXG5pbXBvcnQgZmluZEJ5VHlwZSBmcm9tIFwiLi4vdXRpbHMvZmluZEJ5VHlwZVwiO1xyXG5pbXBvcnQge2dldFBvcG92ZXJTdHlsZX0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmNvbnN0IENvbnRlbnQgPSAoKSA9PiBudWxsO1xyXG5jb25zdCBUYXJnZXQgPSAoKSA9PiBudWxsO1xyXG5cclxuXHJcbmNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy50YXJnZXRDbGlja2VkID0gdGhpcy50YXJnZXRDbGlja2VkLmJpbmQodGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgb3BlbmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDb250ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHtjaGlsZHJlbiwgaGlkZVRhaWx9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgQ29udGVudCk7XHJcblxyXG4gICAgICAgIGlmICghY29udGVudClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBvcG92ZXItY29udGVudCBhcnJvdyBhcnJvdy11cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLmNvbnRlbnRSZWZ9PlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnQucHJvcHMuY2hpbGRyZW59IDwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRhcmdldCgpIHtcclxuICAgICAgICBjb25zdCB7Y2hpbGRyZW4sIHBvc2l0aW9uVGFyZ2V0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZmluZEJ5VHlwZShjaGlsZHJlbiwgVGFyZ2V0KTtcclxuXHJcbiAgICAgICAgbGV0IHRhcmdldENvbnRlbnQgPSAoIXRhcmdldCkgPyBwb3NpdGlvblRhcmdldCA6IHRhcmdldC5wcm9wcy5jaGlsZHJlbiA7XHJcblxyXG4gICAgICAgIGlmICghdGFyZ2V0Q29udGVudClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGlkID1cInBvcG92ZXItdGFyZ2V0XCJcclxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMudGFyZ2V0UmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLnRhcmdldENsaWNrZWQgfT5cclxuICAgICAgICAgICAgICAgIHt0YXJnZXRDb250ZW50fSA8L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICB0YXJnZXRDbGlja2VkICgpe1xyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VPcGVuZWQsIG9uQ2xpY2t9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgY3VycmVudFN0YXRlID0gdGhpcy5zdGF0ZS5vcGVuZWQ7XHJcblxyXG4gICAgICAgIGlmKCFtYW5hZ2VPcGVuZWQpIHtcclxuICAgICAgICAgICAgY3VycmVudFN0YXRlID0gIWN1cnJlbnRTdGF0ZVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG9wZW5lZDogY3VycmVudFN0YXRlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYob25DbGljayE9PXVuZGVmaW5lZCAmJiBvbkNsaWNrIT09bnVsbClcclxuICAgICAgICAgICAgb25DbGljayh7dmFsdWU6IGN1cnJlbnRTdGF0ZX0pXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG9wZW5lZDogdGhpcy5wcm9wcy5vcGVuZWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuY29udGVudFJlZi5jdXJyZW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRhcmdldERpbWVuc2lvbnMgPSB0aGlzLnRhcmdldFJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBsZXQgY29udGVudERpbWVuc2lvbnMgPSB0aGlzLmNvbnRlbnRSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5wcm9wcy5wb3NpdGlvbnM7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3R5bGVzSW5mbyA9ICBnZXRQb3BvdmVyU3R5bGUocG9zaXRpb24sIHRhcmdldERpbWVuc2lvbnMsIGNvbnRlbnREaW1lbnNpb25zLCB3aW5kb3cuaW5uZXJXaWR0aCwgdGhpcy5wcm9wcy5oaWRlVGFpbCk7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZXMgPSBzdHlsZXNJbmZvLnN0eWxlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBzdHlsZXMudHJhbnNmb3JtO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRSZWYuY3VycmVudC5zdHlsZS5sZWZ0ID0gc3R5bGVzLmxlZnQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudFJlZi5jdXJyZW50LnN0eWxlLnRvcCA9IHN0eWxlcy50b3A7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMucHJvcHMuaGlkZVRhaWxcIiwgdGhpcy5wcm9wcy5oaWRlVGFpbCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3R5bGVzSW5mby5oYXNBcnJvd1wiLCBzdHlsZXNJbmZvLmhhc0Fycm93KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdHlsZXNJbmZvLmFycm93U3R5bGVcIiwgc3R5bGVzSW5mby5hcnJvd1N0eWxlKTtcclxuICAgICAgICAgICAgaWYoIXRoaXMucHJvcHMuaGlkZVRhaWwgJiYgc3R5bGVzSW5mby5oYXNBcnJvdyl7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzdHlsZXNJbmZvLmFycm93U3R5bGUpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFJlZi5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRSZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcG9wb3Zlci1hcnJvdy1zaXplXCIsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzdHlsZXNcIiwgdGhpcy5jb250ZW50UmVmLmN1cnJlbnQuc3R5bGVbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge29wZW5lZH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInBvcG92ZXItZWxlbWVudFwifT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUYXJnZXQoKX1cclxuICAgICAgICAgICAgICAgICAgICB7b3BlbmVkICYmIHRoaXMucmVuZGVyQ29udGVudCgpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Qb3BvdmVyLkNvbnRlbnQgPSBDb250ZW50O1xyXG5Qb3BvdmVyLlRhcmdldCA9IFRhcmdldDtcclxuXHJcblBvcG92ZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaGlkZVRhaWw6IGZhbHNlLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBmYWxzZSxcclxuICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICBwb3NpdGlvbnM6IFtcclxuICAgICAgICB7IHRhcmdldDogJ2JvdHRvbS1zdGFydCcsIGNvbnRlbnQ6ICd0b3Atc3RhcnQnIH0sXHJcbiAgICAgICAgeyB0YXJnZXQ6ICdib3R0b20tZW5kJywgY29udGVudDogJ3RvcC1lbmQnIH0sXHJcbiAgICAgICAgeyB0YXJnZXQ6ICd0b3Atc3RhcnQnLCBjb250ZW50OiAnYm90dG9tLXN0YXJ0JyB9LFxyXG4gICAgICAgIHsgdGFyZ2V0OiAndG9wLWVuZCcsIGNvbnRlbnQ6ICdib3R0b20tZW5kJyB9LFxyXG4gICAgICAgIHsgdGFyZ2V0OiAndG9wLWVuZCcsIGNvbnRlbnQ6ICd0b3Atc3RhcnQnIH0sXHJcbiAgICAgICAgeyB0YXJnZXQ6ICdib3R0b20tZW5kJywgY29udGVudDogJ2JvdHRvbS1zdGFydCcgfSxcclxuICAgICAgICB7IHRhcmdldDogJ3RvcC1zdGFydCcsIGNvbnRlbnQ6ICd0b3AtZW5kJyB9LFxyXG4gICAgICAgIHsgdGFyZ2V0OiAnYm90dG9tLXN0YXJ0JywgY29udGVudDogJ2JvdHRvbS1lbmQnIH1cclxuICAgIF1cclxufVxyXG5cclxuUG9wb3Zlci5wcm9wVHlwZXMgPSB7XHJcbiAgICBoaWRlVGFpbDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IHByb3BUeXBlcy5ib29sLFxyXG4gICAgb3BlbmVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICAgIHBvc2l0aW9uVGFyZ2V0OiBwcm9wVHlwZXMuZWxlbWVudCxcclxuICAgIHBvc2l0aW9uczogcHJvcFR5cGVzLmFycmF5LFxyXG4gICAgb25DbGljazogcHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlciJdfQ==