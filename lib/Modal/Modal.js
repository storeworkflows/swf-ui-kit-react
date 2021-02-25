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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
      openModal: _this.props.openModal,
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
          return _this2.setState({
            openModal: false
          });
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
      var _this5 = this;

      this.modalRef.current.addEventListener("click", function (event) {
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
          headerElements = _this$props2.headerElements;
      var _this$state = this.state,
          mobileFooterOpened = _this$state.mobileFooterOpened,
          currentStatus = _this$state.currentStatus;
      var isFullSize = currentStatus === _constants.SWF_MODAL.MODAL_SIZE.FULL;

      var isMobile = _constants.SWF_MODAL.MOBILE_REGEXP.test(navigator.userAgent);

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
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
  popoverContent: {},
  display: "grid",
  headerElements: 2
};
Modal.propTypes = {
  openModal: _propTypes["default"].bool,
  showPopover: _propTypes["default"].bool,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Nb2RhbC9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInByb3BzIiwibW9kYWxSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImV4cGFuZCIsImJpbmQiLCJkZXNrdG9wQnV0dG9ucyIsIm1vYmlsZUJ1dHRvbnMiLCJyZW5kZXJQb3BvdmVyIiwic3RhdGUiLCJjdXJyZW50U3RhdHVzIiwiU1dGX01PREFMIiwiTU9EQUxfU0laRSIsIkRFRkFVTFQiLCJvcGVuTW9kYWwiLCJtb2JpbGVGb290ZXJPcGVuZWQiLCJpc0Z1bGxTaXplIiwiRlVMTCIsIm1vZGFsTm9kZSIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0U3RhdGUiLCJzZXRBdHRyaWJ1dGUiLCJzaG93UG9wb3ZlciIsInBvcG92ZXJDb250ZW50IiwidGFnbGluZSIsImNvbnRlbnQiLCJhY3Rpb25zIiwic3RhdHVzIiwibW9kYWxPcGVuZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJkaXNwbGF5IiwiaGVhZGVyRWxlbWVudHMiLCJpc01vYmlsZSIsIk1PQklMRV9SRUdFWFAiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwic3R5bGVzIiwiZWxtIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJIZWFkZXIiLCJIZWFkZXJCdXR0b25zIiwiQm9keSIsIkZvb3RlciIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzaGFwZSIsIm9iamVjdCIsIm9uZU9mIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsSzs7Ozs7QUFDRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsUUFBTCxnQkFB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O0FBbEJaLENBQWxCO2VBcUJleEQsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQge1NXRl9NT0RBTH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCBmaW5kQnlUeXBlLCB7Y3JlYXRlU3ViQ29tcG9uZW50fSBmcm9tIFwiLi4vdXRpbHMvZmluZEJ5VHlwZVwiO1xyXG5cclxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgICAgIHRoaXMuZXhwYW5kID0gdGhpcy5leHBhbmQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRlc2t0b3BCdXR0b25zID0gdGhpcy5kZXNrdG9wQnV0dG9ucy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubW9iaWxlQnV0dG9ucyA9IHRoaXMubW9iaWxlQnV0dG9ucy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyUG9wb3ZlciA9IHRoaXMucmVuZGVyUG9wb3Zlci5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50U3RhdHVzOiBTV0ZfTU9EQUwuTU9EQUxfU0laRS5ERUZBVUxULFxyXG4gICAgICAgICAgICBvcGVuTW9kYWw6IHRoaXMucHJvcHMub3Blbk1vZGFsLFxyXG4gICAgICAgICAgICBtb2JpbGVGb290ZXJPcGVuZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cGFuZCgpIHtcclxuICAgICAgICBjb25zdCBpc0Z1bGxTaXplID0gdGhpcy5zdGF0ZS5jdXJyZW50U3RhdHVzID09PSBTV0ZfTU9EQUwuTU9EQUxfU0laRS5GVUxMO1xyXG5cclxuICAgICAgICBjb25zdCBtb2RhbE5vZGUgPSB0aGlzLm1vZGFsUmVmLmN1cnJlbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtZGlhbG9nXCIpO1xyXG5cclxuICAgICAgICBpZiAoaXNGdWxsU2l6ZSkge1xyXG4gICAgICAgICAgICBtb2RhbE5vZGUucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRTdGF0dXM6IFNXRl9NT0RBTC5NT0RBTF9TSVpFLkRFRkFVTFR9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbW9kYWxOb2RlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDEwMCU7IGhlaWdodDogOTglO1wiKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdHVzOiBTV0ZfTU9EQUwuTU9EQUxfU0laRS5GVUxMfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUG9wb3ZlcigpIHtcclxuICAgICAgICBjb25zdCB7c2hvd1BvcG92ZXIsIHBvcG92ZXJDb250ZW50OiB7dGFnbGluZSwgY29udGVudCwgYWN0aW9uc319ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKHNob3dQb3BvdmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bm93LXBvcG92ZXJcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YXJnZXRcIjogXCJib3R0b20tZW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjogXCJ0b3AtZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwieFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90PVwidHJpZ2dlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdBcmlhPXt7XCJidXR0b25cIjoge1wiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCJ9fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50PVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5vdy10ZW1wbGF0ZS1jYXJkLW9tbmljaGFubmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnbGluZT17dGFnbGluZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17Y29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17YWN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9ub3ctcG9wb3Zlcj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwieFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBiYXJlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2xvdD1cInRyaWdnZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ0FyaWE9e3tcImJ1dHRvblwiOiB7XCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIn19fVxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50PVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe29wZW5Nb2RhbDogZmFsc2V9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZGVza3RvcEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgaXNGdWxsU2l6ZSA9IHRoaXMuc3RhdGUuY3VycmVudFN0YXR1cyA9PT0gU1dGX01PREFMLk1PREFMX1NJWkUuRlVMTDtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSBpc0Z1bGxTaXplID8gU1dGX01PREFMLk1PREFMX1NJWkUuREVGQVVMVCA6IFNXRl9NT0RBTC5NT0RBTF9TSVpFLkZVTEw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJkYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnQXJpYT17e1wiYnV0dG9uXCI6IHtcImFyaWEtbGFiZWxcIjogXCJDb2xsYXBzZVwifX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50PVwiQ29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHttb2RhbE9wZW5lZDogdHJ1ZX0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17aXNGdWxsU2l6ZSA/IFwiYXJyb3dzLWFuZ2xlLWNvbnRyYWN0XCIgOiBcImFycm93cy1hbmdsZS1leHBhbmRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnQXJpYT17e1wiYnV0dG9uXCI6IHtcImFyaWEtbGFiZWxcIjogXCJFeHBhbmRcIn19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwQ29udGVudD17aXNGdWxsU2l6ZSA/IFwiQ29sbGFwc2VcIiA6IFwiRXhwYW5kXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRTdGF0dXM6IHN0YXR1c30pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclBvcG92ZXIoKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIG1vYmlsZUJ1dHRvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiYXJyb3ctbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBiYXJlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnQXJpYT17e1wiYnV0dG9uXCI6IHtcImFyaWEtbGFiZWxcIjogXCJCYWNrXCJ9fX1cclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwQ29udGVudD1cIkJhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe21vZGFsT3BlbmVkOiBmYWxzZX0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwidGhyZWUtZG90c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBiYXJlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnQXJpYT17e1wiYnV0dG9uXCI6IHtcImFyaWEtbGFiZWxcIjogXCJTaG93IEFjdGlvbnNcIn19fVxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50PVwiU2hvdyBBY3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHttb2JpbGVGb290ZXJPcGVuZWQ6IHRydWV9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5tb2JpbGVGb290ZXJPcGVuZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21vYmlsZUZvb3Rlck9wZW5lZDogZmFsc2V9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2Rpc3BsYXksIGhlYWRlckVsZW1lbnRzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge21vYmlsZUZvb3Rlck9wZW5lZCwgY3VycmVudFN0YXR1c30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGlzRnVsbFNpemUgPSBjdXJyZW50U3RhdHVzID09PSBTV0ZfTU9EQUwuTU9EQUxfU0laRS5GVUxMO1xyXG5cclxuICAgICAgICBjb25zdCBpc01vYmlsZSA9IFNXRl9NT0RBTC5NT0JJTEVfUkVHRVhQLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoPD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICByZWY9e2VsbSA9PiB0aGlzLm1vZGFsUmVmLmN1cnJlbnQgPSBlbG19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGFsLWRpYWxvZ1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7ZGlzcGxheX1gXTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtgLS1mdWxsLSR7aXNNb2JpbGUgPyBcIm1vYmlsZVwiIDogXCJkZXNrdG9wXCJ9YF06IGlzTW9iaWxlIHx8IGlzRnVsbFNpemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kYWwtaGVhZGVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLW1vYmlsZVwiOiBpc01vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tZGVza3RvcC1jb250ZW50XCI6ICFpc01vYmlsZSAmJiBoZWFkZXJFbGVtZW50cyA9PT0gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tZGVza3RvcFwiOiAhaXNNb2JpbGUgJiYgaGVhZGVyRWxlbWVudHMgPT09IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNNb2JpbGUgPyB0aGlzLm1vYmlsZUJ1dHRvbnMoKSA6IHRoaXMuZGVza3RvcEJ1dHRvbnMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaW5kQnlUeXBlKHRoaXMucHJvcHMuY2hpbGRyZW4sIFwiSGVhZGVyXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyRWxlbWVudHMgPT09IDMgPyA8ZGl2IGNsYXNzTmFtZT1cImFkZGl0aW9uYWwtYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc01vYmlsZSAmJmZpbmRCeVR5cGUodGhpcy5wcm9wcy5jaGlsZHJlbiwgXCJIZWFkZXJCdXR0b25zXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaW5kQnlUeXBlKHRoaXMucHJvcHMuY2hpbGRyZW4sIFwiQm9keVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTW9iaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVudS1iYWNrZ3JvdW5kXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tYWN0aXZlXCI6IG1vYmlsZUZvb3Rlck9wZW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kYWwtZm9vdGVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLW1vYmlsZVwiOiBpc01vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tYWN0aXZlXCI6IG1vYmlsZUZvb3Rlck9wZW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc01vYmlsZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaW5kQnlUeXBlKHRoaXMucHJvcHMuY2hpbGRyZW4sIFwiRm9vdGVyXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbmRCeVR5cGUodGhpcy5wcm9wcy5jaGlsZHJlbiwgXCJIZWFkZXJCdXR0b25zXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5kQnlUeXBlKHRoaXMucHJvcHMuY2hpbGRyZW4sIFwiRm9vdGVyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuTW9kYWwuSGVhZGVyID0gY3JlYXRlU3ViQ29tcG9uZW50KFwiSGVhZGVyXCIpO1xyXG5Nb2RhbC5IZWFkZXJCdXR0b25zID0gY3JlYXRlU3ViQ29tcG9uZW50KFwiSGVhZGVyQnV0dG9uc1wiKTtcclxuTW9kYWwuQm9keSA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkJvZHlcIik7XHJcbk1vZGFsLkZvb3RlciA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkZvb3RlclwiKTtcclxuXHJcbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIG9wZW5Nb2RhbDogZmFsc2UsXHJcbiAgICBzaG93UG9wb3ZlcjogZmFsc2UsXHJcbiAgICBwb3BvdmVyQ29udGVudDoge30sXHJcbiAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgIGhlYWRlckVsZW1lbnRzOiAyXHJcbn1cclxuXHJcbk1vZGFsLnByb3BUeXBlcyA9IHtcclxuICAgIG9wZW5Nb2RhbDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzaG93UG9wb3ZlcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBwb3BvdmVyQ29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICB0YWdsaW5lOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgYWN0aW9uczogUHJvcFR5cGVzLm9iamVjdFxyXG4gICAgfSksXHJcbiAgICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2YoW1xyXG4gICAgICAgICdibG9jaycsXHJcbiAgICAgICAgJ2lubGluZScsXHJcbiAgICAgICAgJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgJ2dyaWQnLFxyXG4gICAgICAgICdmbGV4JyxcclxuICAgICAgICAnaW5saW5lLWdyaWQnLFxyXG4gICAgICAgICdpbmxpbmUtZmxleCcsXHJcbiAgICAgICAgJ25vbmUnXHJcbiAgICBdKSxcclxuICAgIGhlYWRlckVsZW1lbnRzOiBQcm9wVHlwZXMubnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsIl19