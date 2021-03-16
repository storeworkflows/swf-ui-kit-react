"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _constants = require("./constants");

var _styles = _interopRequireDefault(require("./styles.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _findByType = _interopRequireWildcard(require("../utils/findByType"));

var _utils = require("../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Modal = /*#__PURE__*/function (_React$Component) {
  _inherits(Modal, _React$Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);
    _this.modalRef = /*#__PURE__*/React.createRef();
    _this.expand = _this.expand.bind(_assertThisInitialized(_this));
    _this.desktopButtons = _this.desktopButtons.bind(_assertThisInitialized(_this));
    _this.mobileButtons = _this.mobileButtons.bind(_assertThisInitialized(_this));
    _this.renderPopover = _this.renderPopover.bind(_assertThisInitialized(_this));
    _this.state = {
      currentStatus: _constants.SWF_MODAL.MODAL_SIZE.DEFAULT,
      openModal: true,
      mobileFooterOpened: false
    };
    return _this;
  }

  _createClass(Modal, [{
    key: "expand",
    value: function expand() {
      var isFullSize = this.state.currentStatus === _constants.SWF_MODAL.MODAL_SIZE.FULL;
      var modalNode = this.modalRef.current.querySelector(".modal-dialog");

      if (isFullSize) {
        modalNode.removeAttribute("style");
        this.setState({
          currentStatus: _constants.SWF_MODAL.MODAL_SIZE.DEFAULT
        });
        return;
      }

      modalNode.setAttribute("style", "width: 100%; height: 98%;");
      this.setState({
        currentStatus: _constants.SWF_MODAL.MODAL_SIZE.FULL
      });
    }
  }, {
    key: "renderPopover",
    value: function renderPopover() {
      var _this2 = this;

      var _this$props = this.props,
          showPopover = _this$props.showPopover,
          _this$props$popoverCo = _this$props.popoverContent,
          tagline = _this$props$popoverCo.tagline,
          content = _this$props$popoverCo.content,
          actions = _this$props$popoverCo.actions;

      if (showPopover) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("now-popover", {
          positions: [{
            "target": "bottom-end",
            "content": "top-end"
          }],
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
            icon: "x",
            variant: "tertiary",
            bare: true,
            size: "md",
            slot: "trigger",
            configAria: {
              "button": {
                "aria-label": "Close"
              }
            },
            tooltipContent: "Close"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("now-template-card-omnichannel", {
            slot: "content",
            tagline: tagline,
            content: content,
            actions: actions
          })]
        });
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        icon: "x",
        variant: "tertiary",
        bare: true,
        size: "md",
        slot: "trigger",
        configAria: {
          "button": {
            "aria-label": "Close"
          }
        },
        tooltipContent: "Close",
        onClick: function onClick() {
          _this2.setState({
            openModal: false
          });

          _this2.props.onClose();
        }
      });
    }
  }, {
    key: "desktopButtons",
    value: function desktopButtons() {
      var _this3 = this;

      var isFullSize = this.state.currentStatus === _constants.SWF_MODAL.MODAL_SIZE.FULL;
      var status = isFullSize ? _constants.SWF_MODAL.MODAL_SIZE.DEFAULT : _constants.SWF_MODAL.MODAL_SIZE.FULL;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
          icon: "dash",
          variant: "tertiary",
          bare: true,
          size: "md",
          configAria: {
            "button": {
              "aria-label": "Collapse"
            }
          },
          tooltipContent: "Collapse",
          onClick: function onClick() {
            return _this3.setState({
              modalOpened: true
            });
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
          icon: isFullSize ? "arrows-angle-contract" : "arrows-angle-expand",
          variant: "tertiary",
          bare: true,
          size: "md",
          configAria: {
            "button": {
              "aria-label": "Expand"
            }
          },
          tooltipContent: isFullSize ? "Collapse" : "Expand",
          onClick: function onClick() {
            return _this3.setState({
              currentStatus: status
            });
          }
        }), this.renderPopover()]
      });
    }
  }, {
    key: "mobileButtons",
    value: function mobileButtons() {
      var _this4 = this;

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
          icon: "arrow-left",
          variant: "tertiary",
          bare: true,
          size: "md",
          configAria: {
            "button": {
              "aria-label": "Back"
            }
          },
          tooltipContent: "Back",
          onClick: function onClick() {
            return _this4.setState({
              modalOpened: false
            });
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
          icon: "three-dots",
          variant: "tertiary",
          bare: true,
          size: "md",
          configAria: {
            "button": {
              "aria-label": "Show Actions"
            }
          },
          tooltipContent: "Show Actions",
          onClick: function onClick() {
            return _this4.setState({
              mobileFooterOpened: true
            });
          }
        })]
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$modalRef,
          _this$modalRef$curren,
          _this5 = this;

      (_this$modalRef = this.modalRef) === null || _this$modalRef === void 0 ? void 0 : (_this$modalRef$curren = _this$modalRef.current) === null || _this$modalRef$curren === void 0 ? void 0 : _this$modalRef$curren.addEventListener("click", function (event) {
        if (_this5.state.mobileFooterOpened) {
          _this5.setState({
            mobileFooterOpened: false
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this,
          _classnames;

      var _this$props2 = this.props,
          display = _this$props2.display,
          openModal = _this$props2.openModal,
          headerElements = _this$props2.headerElements,
          manageOpened = _this$props2.manageOpened;
      var _this$state = this.state,
          mobileFooterOpened = _this$state.mobileFooterOpened,
          open = _this$state.openModal,
          currentStatus = _this$state.currentStatus;
      var isFullSize = currentStatus === _constants.SWF_MODAL.MODAL_SIZE.FULL;
      var showModal = manageOpened ? openModal : open;

      var isMobile = _constants.SWF_MODAL.MOBILE_REGEXP.test(navigator.userAgent);

      return showModal && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "modal-overlay",
          ref: function ref(elm) {
            return _this6.modalRef.current = elm;
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "modal",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: (0, _classnames2["default"])((_classnames = {
                "modal-dialog": true
              }, _defineProperty(_classnames, "--".concat(display), true), _defineProperty(_classnames, "--full-".concat(isMobile ? "mobile" : "desktop"), isMobile || isFullSize), _classnames)),
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: (0, _classnames2["default"])({
                  "modal-header": true,
                  "--mobile": isMobile,
                  "--desktop-content": !isMobile && headerElements === 2,
                  "--desktop": !isMobile && headerElements === 3
                }),
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "main-buttons",
                  children: isMobile ? this.mobileButtons() : this.desktopButtons()
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "header-content",
                  children: (0, _findByType["default"])(this.props.children, "Header")
                }), headerElements === 3 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "additional-buttons",
                  children: !isMobile && (0, _findByType["default"])(this.props.children, "HeaderButtons")
                }) : ""]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "modal-body",
                children: (0, _findByType["default"])(this.props.children, "Body")
              }), isMobile ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: (0, _classnames2["default"])({
                  "menu-background": true,
                  "--active": mobileFooterOpened
                })
              }) : "", /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: (0, _classnames2["default"])({
                  "modal-footer": true,
                  "--mobile": isMobile,
                  "--active": mobileFooterOpened
                }),
                children: isMobile ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "footer-content",
                  children: [(0, _findByType["default"])(this.props.children, "Footer"), (0, _findByType["default"])(this.props.children, "HeaderButtons")]
                }) : (0, _findByType["default"])(this.props.children, "Footer")
              })]
            })
          })
        })]
      });
    }
  }]);

  return Modal;
}(React.Component);

Modal.Header = (0, _findByType.createSubComponent)("Header");
Modal.HeaderButtons = (0, _findByType.createSubComponent)("HeaderButtons");
Modal.Body = (0, _findByType.createSubComponent)("Body");
Modal.Footer = (0, _findByType.createSubComponent)("Footer");
Modal.defaultProps = {
  openModal: false,
  showPopover: false,
  manageOpened: false,
  onClose: _utils.noop,
  popoverContent: {},
  display: "grid",
  headerElements: 2
};
Modal.propTypes = {
  openModal: _propTypes["default"].bool,
  showPopover: _propTypes["default"].bool,
  manageOpened: _propTypes["default"].bool,
  onClose: _propTypes["default"].func,
  popoverContent: _propTypes["default"].shape({
    tagline: _propTypes["default"].object,
    content: _propTypes["default"].object,
    actions: _propTypes["default"].object
  }),
  display: _propTypes["default"].oneOf(['block', 'inline', 'inline-block', 'grid', 'flex', 'inline-grid', 'inline-flex', 'none']),
  headerElements: _propTypes["default"].number
};
var _default = Modal;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Nb2RhbC9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInByb3BzIiwibW9kYWxSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImV4cGFuZCIsImJpbmQiLCJkZXNrdG9wQnV0dG9ucyIsIm1vYmlsZUJ1dHRvbnMiLCJyZW5kZXJQb3BvdmVyIiwic3RhdGUiLCJjdXJyZW50U3RhdHVzIiwiU1dGX01PREFMIiwiTU9EQUxfU0laRSIsIkRFRkFVTFQiLCJvcGVuTW9kYWwiLCJtb2JpbGVGb290ZXJPcGVuZWQiLCJpc0Z1bGxTaXplIiwiRlVMTCIsIm1vZGFsTm9kZSIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0U3RhdGUiLCJzZXRBdHRyaWJ1dGUiLCJzaG93UG9wb3ZlciIsInBvcG92ZXJDb250ZW50IiwidGFnbGluZSIsImNvbnRlbnQiLCJhY3Rpb25zIiwib25DbG9zZSIsInN0YXR1cyIsIm1vZGFsT3BlbmVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZGlzcGxheSIsImhlYWRlckVsZW1lbnRzIiwibWFuYWdlT3BlbmVkIiwib3BlbiIsInNob3dNb2RhbCIsImlzTW9iaWxlIiwiTU9CSUxFX1JFR0VYUCIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzdHlsZXMiLCJlbG0iLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsIkhlYWRlciIsIkhlYWRlckJ1dHRvbnMiLCJCb2R5IiwiRm9vdGVyIiwiZGVmYXVsdFByb3BzIiwibm9vcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJmdW5jIiwic2hhcGUiLCJvYmplY3QiLCJvbmVPZiIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEs7Ozs7O0FBQ0YsaUJB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QkFBVUMsSUFIVjtBQUlkM0IsRUFBQUEsT0FBTyxFQUFFMEIsc0JBQVVFLElBSkw7QUFLZGhDLEVBQUFBLGNBQWMsRUFBRThCLHNCQUFVRyxLQUFWLENBQWdCO0FBQzVCaEMsSUFBQUEsT0FBTyxFQUFFNkIsc0JBQVVJLE1BRFM7QUFFNUJoQyxJQUFBQSxPQUFPLEVBQUU0QixzQkFBVUksTUFGUztBQUc1Qi9CLElBQUFBLE9BQU8sRUFBRTJCLHNCQUFVSTtBQUhTLEdBQWhCLENBTEY7QUFVZHpCLEVBQUFBLE9BQU8sRUFBRXFCLHNCQUFVSyxLQUFWLENBQWdCLENBQ3JCLE9BRHFCLEVBRXJCLFFBRnFCLEVBR3JCLGNBSHFCLEVBSXJCLE1BSnFCLEVBS3JCLE1BTHFCLEVBTXJCLGFBTnFCLEVBT3JCLGFBUHFCLEVBUXJCLE1BUnFCLENBQWhCLENBVks7QUFvQmR6QixFQUFBQSxjQUFjLEVBQUVvQixzQkFBVU07QUFwQlosQ0FBbEI7ZUF1QmU5RCxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7U1dGX01PREFMfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL0J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IGZpbmRCeVR5cGUsIHtjcmVhdGVTdWJDb21wb25lbnR9IGZyb20gXCIuLi91dGlscy9maW5kQnlUeXBlXCI7XHJcbmltcG9ydCB7bm9vcH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm1vZGFsUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICAgICAgdGhpcy5leHBhbmQgPSB0aGlzLmV4cGFuZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGVza3RvcEJ1dHRvbnMgPSB0aGlzLmRlc2t0b3BCdXR0b25zLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5tb2JpbGVCdXR0b25zID0gdGhpcy5tb2JpbGVCdXR0b25zLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQb3BvdmVyID0gdGhpcy5yZW5kZXJQb3BvdmVyLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0dXM6IFNXRl9NT0RBTC5NT0RBTF9TSVpFLkRFRkFVTFQsXHJcbiAgICAgICAgICAgIG9wZW5Nb2RhbDogdHJ1ZSxcclxuICAgICAgICAgICAgbW9iaWxlRm9vdGVyT3BlbmVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBhbmQoKSB7XHJcbiAgICAgICAgY29uc3QgaXNGdWxsU2l6ZSA9IHRoaXMuc3RhdGUuY3VycmVudFN0YXR1cyA9PT0gU1dGX01PREFMLk1PREFMX1NJWkUuRlVMTDtcclxuXHJcbiAgICAgICAgY29uc3QgbW9kYWxOb2RlID0gdGhpcy5tb2RhbFJlZi5jdXJyZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWRpYWxvZ1wiKTtcclxuXHJcbiAgICAgICAgaWYgKGlzRnVsbFNpemUpIHtcclxuICAgICAgICAgICAgbW9kYWxOb2RlLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdHVzOiBTV0ZfTU9EQUwuTU9EQUxfU0laRS5ERUZBVUxUfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1vZGFsTm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDk4JTtcIik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXR1czogU1dGX01PREFMLk1PREFMX1NJWkUuRlVMTH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcG92ZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3Nob3dQb3BvdmVyLCBwb3BvdmVyQ29udGVudDoge3RhZ2xpbmUsIGNvbnRlbnQsIGFjdGlvbnN9fSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmIChzaG93UG9wb3Zlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPG5vdy1wb3BvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFyZ2V0XCI6IFwiYm90dG9tLWVuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IFwidG9wLWVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cInhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhcmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cInRyaWdnZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnQXJpYT17e1wiYnV0dG9uXCI6IHtcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwifX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwQ29udGVudD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxub3ctdGVtcGxhdGUtY2FyZC1vbW5pY2hhbm5lbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbG90PVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ2xpbmU9e3RhZ2xpbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvbm93LXBvcG92ZXI+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cInhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYmFyZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJ0cmlnZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBjb25maWdBcmlhPXt7XCJidXR0b25cIjoge1wiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCJ9fX1cclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwQ29udGVudD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5Nb2RhbDogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZGVza3RvcEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgaXNGdWxsU2l6ZSA9IHRoaXMuc3RhdGUuY3VycmVudFN0YXR1cyA9PT0gU1dGX01PREFMLk1PREFMX1NJWkUuRlVMTDtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSBpc0Z1bGxTaXplID8gU1dGX01PREFMLk1PREFMX1NJWkUuREVGQVVMVCA6IFNXRl9NT0RBTC5NT0RBTF9TSVpFLkZVTEw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJkYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnQXJpYT17e1wiYnV0dG9uXCI6IHtcImFyaWEtbGFiZWxcIjogXCJDb2xsYXBzZVwifX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50PVwiQ29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHttb2RhbE9wZW5lZDogdHJ1ZX0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17aXNGdWxsU2l6ZSA/IFwiYXJyb3dzLWFuZ2xlLWNvbnRyYWN0XCIgOiBcImFycm93cy1hbmdsZS1leHBhbmRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnQXJpYT17e1wiYnV0dG9uXCI6IHtcImFyaWEtbGFiZWxcIjogXCJFeHBhbmRcIn19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwQ29udGVudD17aXNGdWxsU2l6ZSA/IFwiQ29sbGFwc2VcIiA6IFwiRXhwYW5kXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRTdGF0dXM6IHN0YXR1c30pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclBvcG92ZXIoKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIG1vYmlsZUJ1dHRvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBiYXJlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnQXJpYT17e1wiYnV0dG9uXCI6IHtcImFyaWEtbGFiZWxcIjogXCJCYWNrXCJ9fX1cclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwQ29udGVudD1cIkJhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe21vZGFsT3BlbmVkOiBmYWxzZX0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwidGhyZWUtZG90c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBiYXJlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnQXJpYT17e1wiYnV0dG9uXCI6IHtcImFyaWEtbGFiZWxcIjogXCJTaG93IEFjdGlvbnNcIn19fVxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50PVwiU2hvdyBBY3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHttb2JpbGVGb290ZXJPcGVuZWQ6IHRydWV9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsUmVmPy5jdXJyZW50Py5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm1vYmlsZUZvb3Rlck9wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bW9iaWxlRm9vdGVyT3BlbmVkOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7ZGlzcGxheSwgb3Blbk1vZGFsLCBoZWFkZXJFbGVtZW50cywgbWFuYWdlT3BlbmVkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge21vYmlsZUZvb3Rlck9wZW5lZCwgb3Blbk1vZGFsOiBvcGVuLCBjdXJyZW50U3RhdHVzfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgaXNGdWxsU2l6ZSA9IGN1cnJlbnRTdGF0dXMgPT09IFNXRl9NT0RBTC5NT0RBTF9TSVpFLkZVTEw7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3dNb2RhbCA9IG1hbmFnZU9wZW5lZCA/IG9wZW5Nb2RhbCA6IG9wZW47XHJcblxyXG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gU1dGX01PREFMLk1PQklMRV9SRUdFWFAudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNob3dNb2RhbCAmJiA8PlxyXG4gICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIlxyXG4gICAgICAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMubW9kYWxSZWYuY3VycmVudCA9IGVsbX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RhbC1kaWFsb2dcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7ZGlzcGxheX1gXTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2AtLWZ1bGwtJHtpc01vYmlsZSA/IFwibW9iaWxlXCIgOiBcImRlc2t0b3BcIn1gXTogaXNNb2JpbGUgfHwgaXNGdWxsU2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RhbC1oZWFkZXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1tb2JpbGVcIjogaXNNb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tZGVza3RvcC1jb250ZW50XCI6ICFpc01vYmlsZSAmJiBoZWFkZXJFbGVtZW50cyA9PT0gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1kZXNrdG9wXCI6ICFpc01vYmlsZSAmJiBoZWFkZXJFbGVtZW50cyA9PT0gM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc01vYmlsZSA/IHRoaXMubW9iaWxlQnV0dG9ucygpIDogdGhpcy5kZXNrdG9wQnV0dG9ucygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbmRCeVR5cGUodGhpcy5wcm9wcy5jaGlsZHJlbiwgXCJIZWFkZXJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJFbGVtZW50cyA9PT0gMyA/IDxkaXYgY2xhc3NOYW1lPVwiYWRkaXRpb25hbC1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaXNNb2JpbGUgJiYgZmluZEJ5VHlwZSh0aGlzLnByb3BzLmNoaWxkcmVuLCBcIkhlYWRlckJ1dHRvbnNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmluZEJ5VHlwZSh0aGlzLnByb3BzLmNoaWxkcmVuLCBcIkJvZHlcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNNb2JpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lbnUtYmFja2dyb3VuZFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tYWN0aXZlXCI6IG1vYmlsZUZvb3Rlck9wZW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kYWwtZm9vdGVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tbW9iaWxlXCI6IGlzTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLWFjdGl2ZVwiOiBtb2JpbGVGb290ZXJPcGVuZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTW9iaWxlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaW5kQnlUeXBlKHRoaXMucHJvcHMuY2hpbGRyZW4sIFwiRm9vdGVyXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmluZEJ5VHlwZSh0aGlzLnByb3BzLmNoaWxkcmVuLCBcIkhlYWRlckJ1dHRvbnNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRCeVR5cGUodGhpcy5wcm9wcy5jaGlsZHJlbiwgXCJGb290ZXJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICB9XHJcbn1cclxuXHJcbk1vZGFsLkhlYWRlciA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkhlYWRlclwiKTtcclxuTW9kYWwuSGVhZGVyQnV0dG9ucyA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkhlYWRlckJ1dHRvbnNcIik7XHJcbk1vZGFsLkJvZHkgPSBjcmVhdGVTdWJDb21wb25lbnQoXCJCb2R5XCIpO1xyXG5Nb2RhbC5Gb290ZXIgPSBjcmVhdGVTdWJDb21wb25lbnQoXCJGb290ZXJcIik7XHJcblxyXG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBvcGVuTW9kYWw6IGZhbHNlLFxyXG4gICAgc2hvd1BvcG92ZXI6IGZhbHNlLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBmYWxzZSxcclxuICAgIG9uQ2xvc2U6IG5vb3AsXHJcbiAgICBwb3BvdmVyQ29udGVudDoge30sXHJcbiAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgIGhlYWRlckVsZW1lbnRzOiAyXHJcbn1cclxuXHJcbk1vZGFsLnByb3BUeXBlcyA9IHtcclxuICAgIG9wZW5Nb2RhbDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzaG93UG9wb3ZlcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBwb3BvdmVyQ29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICB0YWdsaW5lOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgYWN0aW9uczogUHJvcFR5cGVzLm9iamVjdFxyXG4gICAgfSksXHJcbiAgICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2YoW1xyXG4gICAgICAgICdibG9jaycsXHJcbiAgICAgICAgJ2lubGluZScsXHJcbiAgICAgICAgJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgJ2dyaWQnLFxyXG4gICAgICAgICdmbGV4JyxcclxuICAgICAgICAnaW5saW5lLWdyaWQnLFxyXG4gICAgICAgICdpbmxpbmUtZmxleCcsXHJcbiAgICAgICAgJ25vbmUnXHJcbiAgICBdKSxcclxuICAgIGhlYWRlckVsZW1lbnRzOiBQcm9wVHlwZXMubnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsIl19