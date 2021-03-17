"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _constants = require("./constants");

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

      return showModal && /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "swf-modal-overlay",
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
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Nb2RhbC9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInByb3BzIiwibW9kYWxSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImV4cGFuZCIsImJpbmQiLCJkZXNrdG9wQnV0dG9ucyIsIm1vYmlsZUJ1dHRvbnMiLCJyZW5kZXJQb3BvdmVyIiwic3RhdGUiLCJjdXJyZW50U3RhdHVzIiwiU1dGX01PREFMIiwiTU9EQUxfU0laRSIsIkRFRkFVTFQiLCJvcGVuTW9kYWwiLCJtb2JpbGVGb290ZXJPcGVuZWQiLCJpc0Z1bGxTaXplIiwiRlVMTCIsIm1vZGFsTm9kZSIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0U3RhdGUiLCJzZXRBdHRyaWJ1dGUiLCJzaG93UG9wb3ZlciIsInBvcG92ZXJDb250ZW50IiwidGFnbGluZSIsImNvbnRlbnQiLCJhY3Rpb25zIiwib25DbG9zZSIsInN0YXR1cyIsIm1vZGFsT3BlbmVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZGlzcGxheSIsImhlYWRlckVsZW1lbnRzIiwibWFuYWdlT3BlbmVkIiwib3BlbiIsInNob3dNb2RhbCIsImlzTW9iaWxlIiwiTU9CSUxFX1JFR0VYUCIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJlbG0iLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsIkhlYWRlciIsIkhlYWRlckJ1dHRvbnMiLCJCb2R5IiwiRm9vdGVyIiwiZGVmYXVsdFByb3BzIiwibm9vcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJmdW5jIiwic2hhcGUiLCJvYmplY3QiLCJvbmVPZiIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEs7Ozs7O0FBQ0YsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFFBQUwsZ0JBQWdCQyxLQUFLLENBQUNDLFNBQU4sRUFBaEI7QUFDQSxVQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZQyxJQUFaLCtCQUFkO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CRCxJQUFwQiwrQkFBdEI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLCtCQUFyQjtBQUNBLFVBQUtHLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkgsSUFBbkIsK0JBQXJCO0FBRUEsVUFBS0ksS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLGFBQWEsRUFBRUMscUJBQVVDLFVBQVYsQ0FBcUJDLE9BRDNCO0FBRVRDLE1BQUFBLFNBQVMsRUFBRSxJQUZGO0FBR1RDLE1BQUFBLGtCQUFrQixFQUFFO0FBSFgsS0FBYjtBQVJlO0FBYWxCOzs7O1dBRUQsa0JBQVM7QUFDTCxVQUFNQyxVQUFVLEdBQUcsS0FBS1AsS0FBTCxDQUFXQyxhQUFYLEtBQTZCQyxxQkFBVUMsVUFBVixDQUFxQkssSUFBckU7QUFFQSxVQUFNQyxTQUFTLEdBQUcsS0FBS2pCLFFBQUwsQ0FBY2tCLE9BQWQsQ0FDYkMsYUFEYSxDQUNDLGVBREQsQ0FBbEI7O0FBR0EsVUFBSUosVUFBSixFQUFnQjtBQUNaRSxRQUFBQSxTQUFTLENBQUNHLGVBQVYsQ0FBMEIsT0FBMUI7QUFDQSxhQUFLQyxRQUFMLENBQWM7QUFBQ1osVUFBQUEsYUFBYSxFQUFFQyxxQkFBVUMsVUFBVixDQUFxQkM7QUFBckMsU0FBZDtBQUNBO0FBQ0g7O0FBRURLLE1BQUFBLFNBQVMsQ0FBQ0ssWUFBVixDQUF1QixPQUF2QixFQUFnQywyQkFBaEM7QUFDQSxXQUFLRCxRQUFMLENBQWM7QUFBQ1osUUFBQUEsYUFBYSxFQUFFQyxxQkFBVUMsVUFBVixDQUFxQks7QUFBckMsT0FBZDtBQUNIOzs7V0FFRCx5QkFBZ0I7QUFBQTs7QUFBQSx3QkFDdUQsS0FBS2pCLEtBRDVEO0FBQUEsVUFDTHdCLFdBREssZUFDTEEsV0FESztBQUFBLDhDQUNRQyxjQURSO0FBQUEsVUFDeUJDLE9BRHpCLHlCQUN5QkEsT0FEekI7QUFBQSxVQUNrQ0MsT0FEbEMseUJBQ2tDQSxPQURsQztBQUFBLFVBQzJDQyxPQUQzQyx5QkFDMkNBLE9BRDNDOztBQUdaLFVBQUlKLFdBQUosRUFBaUI7QUFDYiw0QkFDSTtBQUNJLFVBQUEsU0FBUyxFQUFFLENBQ1A7QUFDSSxzQkFBVSxZQURkO0FBRUksdUJBQVc7QUFGZixXQURPLENBRGY7QUFBQSxrQ0FRSSxxQkFBQyxrQkFBRDtBQUFRLFlBQUEsSUFBSSxFQUFDLEdBQWI7QUFDUSxZQUFBLE9BQU8sRUFBQyxVQURoQjtBQUVRLFlBQUEsSUFBSSxFQUFFLElBRmQ7QUFHUSxZQUFBLElBQUksRUFBQyxJQUhiO0FBSVEsWUFBQSxJQUFJLEVBQUMsU0FKYjtBQUtRLFlBQUEsVUFBVSxFQUFFO0FBQUMsd0JBQVU7QUFBQyw4QkFBYztBQUFmO0FBQVgsYUFMcEI7QUFNUSxZQUFBLGNBQWMsRUFBQztBQU52QixZQVJKLGVBZ0JJO0FBQ0ksWUFBQSxJQUFJLEVBQUMsU0FEVDtBQUVJLFlBQUEsT0FBTyxFQUFFRSxPQUZiO0FBR0ksWUFBQSxPQUFPLEVBQUVDLE9BSGI7QUFJSSxZQUFBLE9BQU8sRUFBRUM7QUFKYixZQWhCSjtBQUFBLFVBREo7QUF5Qkg7O0FBRUQsMEJBQ0kscUJBQUMsa0JBQUQ7QUFBUSxRQUFBLElBQUksRUFBQyxHQUFiO0FBQ1EsUUFBQSxPQUFPLEVBQUMsVUFEaEI7QUFFUSxRQUFBLElBQUksRUFBRSxJQUZkO0FBR1EsUUFBQSxJQUFJLEVBQUMsSUFIYjtBQUlRLFFBQUEsSUFBSSxFQUFDLFNBSmI7QUFLUSxRQUFBLFVBQVUsRUFBRTtBQUFDLG9CQUFVO0FBQUMsMEJBQWM7QUFBZjtBQUFYLFNBTHBCO0FBTVEsUUFBQSxjQUFjLEVBQUMsT0FOdkI7QUFPUSxRQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNYLFVBQUEsTUFBSSxDQUFDTixRQUFMLENBQWM7QUFBQ1IsWUFBQUEsU0FBUyxFQUFFO0FBQVosV0FBZDs7QUFDQSxVQUFBLE1BQUksQ0FBQ2QsS0FBTCxDQUFXNkIsT0FBWDtBQUNIO0FBVlQsUUFESjtBQWNIOzs7V0FFRCwwQkFBaUI7QUFBQTs7QUFDYixVQUFNYixVQUFVLEdBQUcsS0FBS1AsS0FBTCxDQUFXQyxhQUFYLEtBQTZCQyxxQkFBVUMsVUFBVixDQUFxQkssSUFBckU7QUFDQSxVQUFNYSxNQUFNLEdBQUdkLFVBQVUsR0FBR0wscUJBQVVDLFVBQVYsQ0FBcUJDLE9BQXhCLEdBQWtDRixxQkFBVUMsVUFBVixDQUFxQkssSUFBaEY7QUFFQSwwQkFDSTtBQUFBLGdDQUNJLHFCQUFDLGtCQUFEO0FBQVEsVUFBQSxJQUFJLEVBQUMsTUFBYjtBQUNRLFVBQUEsT0FBTyxFQUFDLFVBRGhCO0FBRVEsVUFBQSxJQUFJLEVBQUUsSUFGZDtBQUdRLFVBQUEsSUFBSSxFQUFDLElBSGI7QUFJUSxVQUFBLFVBQVUsRUFBRTtBQUFDLHNCQUFVO0FBQUMsNEJBQWM7QUFBZjtBQUFYLFdBSnBCO0FBS1EsVUFBQSxjQUFjLEVBQUMsVUFMdkI7QUFNUSxVQUFBLE9BQU8sRUFBRTtBQUFBLG1CQUFNLE1BQUksQ0FBQ0ssUUFBTCxDQUFjO0FBQUNTLGNBQUFBLFdBQVcsRUFBRTtBQUFkLGFBQWQsQ0FBTjtBQUFBO0FBTmpCLFVBREosZUFTSSxxQkFBQyxrQkFBRDtBQUFRLFVBQUEsSUFBSSxFQUFFZixVQUFVLEdBQUcsdUJBQUgsR0FBNkIscUJBQXJEO0FBQ1EsVUFBQSxPQUFPLEVBQUMsVUFEaEI7QUFFUSxVQUFBLElBQUksRUFBRSxJQUZkO0FBR1EsVUFBQSxJQUFJLEVBQUMsSUFIYjtBQUlRLFVBQUEsVUFBVSxFQUFFO0FBQUMsc0JBQVU7QUFBQyw0QkFBYztBQUFmO0FBQVgsV0FKcEI7QUFLUSxVQUFBLGNBQWMsRUFBRUEsVUFBVSxHQUFHLFVBQUgsR0FBZ0IsUUFMbEQ7QUFNUSxVQUFBLE9BQU8sRUFBRTtBQUFBLG1CQUFNLE1BQUksQ0FBQ00sUUFBTCxDQUFjO0FBQUNaLGNBQUFBLGFBQWEsRUFBRW9CO0FBQWhCLGFBQWQsQ0FBTjtBQUFBO0FBTmpCLFVBVEosRUFpQkssS0FBS3RCLGFBQUwsRUFqQkw7QUFBQSxRQURKO0FBcUJIOzs7V0FFRCx5QkFBZ0I7QUFBQTs7QUFDWiwwQkFDSTtBQUFBLGdDQUNJLHFCQUFDLGtCQUFEO0FBQ0ksVUFBQSxJQUFJLEVBQUMsWUFEVDtBQUVJLFVBQUEsT0FBTyxFQUFDLFVBRlo7QUFHSSxVQUFBLElBQUksRUFBRSxJQUhWO0FBSUksVUFBQSxJQUFJLEVBQUMsSUFKVDtBQUtJLFVBQUEsVUFBVSxFQUFFO0FBQUMsc0JBQVU7QUFBQyw0QkFBYztBQUFmO0FBQVgsV0FMaEI7QUFNSSxVQUFBLGNBQWMsRUFBQyxNQU5uQjtBQU9JLFVBQUEsT0FBTyxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDYyxRQUFMLENBQWM7QUFBQ1MsY0FBQUEsV0FBVyxFQUFFO0FBQWQsYUFBZCxDQUFOO0FBQUE7QUFQYixVQURKLGVBVUkscUJBQUMsa0JBQUQ7QUFDSSxVQUFBLElBQUksRUFBQyxZQURUO0FBRUksVUFBQSxPQUFPLEVBQUMsVUFGWjtBQUdJLFVBQUEsSUFBSSxFQUFFLElBSFY7QUFJSSxVQUFBLElBQUksRUFBQyxJQUpUO0FBS0ksVUFBQSxVQUFVLEVBQUU7QUFBQyxzQkFBVTtBQUFDLDRCQUFjO0FBQWY7QUFBWCxXQUxoQjtBQU1JLFVBQUEsY0FBYyxFQUFDLGNBTm5CO0FBT0ksVUFBQSxPQUFPLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNULFFBQUwsQ0FBYztBQUFDUCxjQUFBQSxrQkFBa0IsRUFBRTtBQUFyQixhQUFkLENBQU47QUFBQTtBQVBiLFVBVko7QUFBQSxRQURKO0FBc0JIOzs7V0FFRCw2QkFBb0I7QUFBQTtBQUFBO0FBQUE7O0FBQ2hCLDZCQUFLZCxRQUFMLDJGQUFla0IsT0FBZixnRkFBd0JhLGdCQUF4QixDQUF5QyxPQUF6QyxFQUFrRCxVQUFDQyxLQUFELEVBQVc7QUFDekQsWUFBSSxNQUFJLENBQUN4QixLQUFMLENBQVdNLGtCQUFmLEVBQW1DO0FBQy9CLFVBQUEsTUFBSSxDQUFDTyxRQUFMLENBQWM7QUFBQ1AsWUFBQUEsa0JBQWtCLEVBQUU7QUFBckIsV0FBZDtBQUNIO0FBQ0osT0FKRDtBQUtIOzs7V0FFRCxrQkFBUztBQUFBO0FBQUE7O0FBQUEseUJBQ3NELEtBQUtmLEtBRDNEO0FBQUEsVUFDRWtDLE9BREYsZ0JBQ0VBLE9BREY7QUFBQSxVQUNXcEIsU0FEWCxnQkFDV0EsU0FEWDtBQUFBLFVBQ3NCcUIsY0FEdEIsZ0JBQ3NCQSxjQUR0QjtBQUFBLFVBQ3NDQyxZQUR0QyxnQkFDc0NBLFlBRHRDO0FBQUEsd0JBRXdELEtBQUszQixLQUY3RDtBQUFBLFVBRUVNLGtCQUZGLGVBRUVBLGtCQUZGO0FBQUEsVUFFaUNzQixJQUZqQyxlQUVzQnZCLFNBRnRCO0FBQUEsVUFFdUNKLGFBRnZDLGVBRXVDQSxhQUZ2QztBQUdMLFVBQU1NLFVBQVUsR0FBR04sYUFBYSxLQUFLQyxxQkFBVUMsVUFBVixDQUFxQkssSUFBMUQ7QUFFQSxVQUFNcUIsU0FBUyxHQUFHRixZQUFZLEdBQUd0QixTQUFILEdBQWV1QixJQUE3Qzs7QUFFQSxVQUFNRSxRQUFRLEdBQUc1QixxQkFBVTZCLGFBQVYsQ0FBd0JDLElBQXhCLENBQTZCQyxTQUFTLENBQUNDLFNBQXZDLENBQWpCOztBQUVBLGFBQU9MLFNBQVMsaUJBQUk7QUFBQSwrQkFDaEI7QUFBSyxVQUFBLFNBQVMsRUFBQyxtQkFBZjtBQUNLLFVBQUEsR0FBRyxFQUFFLGFBQUFNLEdBQUc7QUFBQSxtQkFBSSxNQUFJLENBQUMzQyxRQUFMLENBQWNrQixPQUFkLEdBQXdCeUIsR0FBNUI7QUFBQSxXQURiO0FBQUEsaUNBR0k7QUFBSyxZQUFBLFNBQVMsRUFBQyxPQUFmO0FBQUEsbUNBQ0k7QUFBSyxjQUFBLFNBQVMsRUFBRTtBQUNaLGdDQUFnQjtBQURKLDBEQUVOVixPQUZNLEdBRU0sSUFGTixpREFHREssUUFBUSxHQUFHLFFBQUgsR0FBYyxTQUhyQixHQUdtQ0EsUUFBUSxJQUFJdkIsVUFIL0MsZ0JBQWhCO0FBQUEsc0NBS0k7QUFBSyxnQkFBQSxTQUFTLEVBQUUsNkJBQVc7QUFDdkIsa0NBQWdCLElBRE87QUFFdkIsOEJBQVl1QixRQUZXO0FBR3ZCLHVDQUFxQixDQUFDQSxRQUFELElBQWFKLGNBQWMsS0FBSyxDQUg5QjtBQUl2QiwrQkFBYSxDQUFDSSxRQUFELElBQWFKLGNBQWMsS0FBSztBQUp0QixpQkFBWCxDQUFoQjtBQUFBLHdDQU1JO0FBQUssa0JBQUEsU0FBUyxFQUFDLGNBQWY7QUFBQSw0QkFDS0ksUUFBUSxHQUFHLEtBQUtoQyxhQUFMLEVBQUgsR0FBMEIsS0FBS0QsY0FBTDtBQUR2QyxrQkFOSixlQVNJO0FBQUssa0JBQUEsU0FBUyxFQUFDLGdCQUFmO0FBQUEsNEJBQ0ssNEJBQVcsS0FBS04sS0FBTCxDQUFXNkMsUUFBdEIsRUFBZ0MsUUFBaEM7QUFETCxrQkFUSixFQWFRVixjQUFjLEtBQUssQ0FBbkIsZ0JBQXVCO0FBQUssa0JBQUEsU0FBUyxFQUFDLG9CQUFmO0FBQUEsNEJBQ2xCLENBQUNJLFFBQUQsSUFBYSw0QkFBVyxLQUFLdkMsS0FBTCxDQUFXNkMsUUFBdEIsRUFBZ0MsZUFBaEM7QUFESyxrQkFBdkIsR0FFUyxFQWZqQjtBQUFBLGdCQUxKLGVBd0JJO0FBQ0ksZ0JBQUEsU0FBUyxFQUFDLFlBRGQ7QUFBQSwwQkFHSyw0QkFBVyxLQUFLN0MsS0FBTCxDQUFXNkMsUUFBdEIsRUFBZ0MsTUFBaEM7QUFITCxnQkF4QkosRUE2QktOLFFBQVEsZ0JBRUw7QUFDSSxnQkFBQSxTQUFTLEVBQUUsNkJBQVc7QUFDbEIscUNBQW1CLElBREQ7QUFFbEIsOEJBQVl4QjtBQUZNLGlCQUFYO0FBRGYsZ0JBRkssR0FTTCxFQXRDUixlQXVDSTtBQUFLLGdCQUFBLFNBQVMsRUFBRSw2QkFBVztBQUN2QixrQ0FBZ0IsSUFETztBQUV2Qiw4QkFBWXdCLFFBRlc7QUFHdkIsOEJBQVl4QjtBQUhXLGlCQUFYLENBQWhCO0FBQUEsMEJBS0t3QixRQUFRLGdCQUNMO0FBQUssa0JBQUEsU0FBUyxFQUFDLGdCQUFmO0FBQUEsNkJBQ0ssNEJBQVcsS0FBS3ZDLEtBQUwsQ0FBVzZDLFFBQXRCLEVBQWdDLFFBQWhDLENBREwsRUFFSyw0QkFBVyxLQUFLN0MsS0FBTCxDQUFXNkMsUUFBdEIsRUFBZ0MsZUFBaEMsQ0FGTDtBQUFBLGtCQURLLEdBTUwsNEJBQVcsS0FBSzdDLEtBQUwsQ0FBVzZDLFFBQXRCLEVBQWdDLFFBQWhDO0FBWFIsZ0JBdkNKO0FBQUE7QUFESjtBQUhKO0FBRGdCLFFBQXBCO0FBOERIOzs7O0VBbE5lM0MsS0FBSyxDQUFDNEMsUzs7QUFxTjFCL0MsS0FBSyxDQUFDZ0QsTUFBTixHQUFlLG9DQUFtQixRQUFuQixDQUFmO0FBQ0FoRCxLQUFLLENBQUNpRCxhQUFOLEdBQXNCLG9DQUFtQixlQUFuQixDQUF0QjtBQUNBakQsS0FBSyxDQUFDa0QsSUFBTixHQUFhLG9DQUFtQixNQUFuQixDQUFiO0FBQ0FsRCxLQUFLLENBQUNtRCxNQUFOLEdBQWUsb0NBQW1CLFFBQW5CLENBQWY7QUFFQW5ELEtBQUssQ0FBQ29ELFlBQU4sR0FBcUI7QUFDakJyQyxFQUFBQSxTQUFTLEVBQUUsS0FETTtBQUVqQlUsRUFBQUEsV0FBVyxFQUFFLEtBRkk7QUFHakJZLEVBQUFBLFlBQVksRUFBRSxLQUhHO0FBSWpCUCxFQUFBQSxPQUFPLEVBQUV1QixXQUpRO0FBS2pCM0IsRUFBQUEsY0FBYyxFQUFFLEVBTEM7QUFNakJTLEVBQUFBLE9BQU8sRUFBRSxNQU5RO0FBT2pCQyxFQUFBQSxjQUFjLEVBQUU7QUFQQyxDQUFyQjtBQVVBcEMsS0FBSyxDQUFDc0QsU0FBTixHQUFrQjtBQUNkdkMsRUFBQUEsU0FBUyxFQUFFd0Msc0JBQVVDLElBRFA7QUFFZC9CLEVBQUFBLFdBQVcsRUFBRThCLHNCQUFVQyxJQUZUO0FBR2RuQixFQUFBQSxZQUFZLEVBQUVrQixzQkFBVUMsSUFIVjtBQUlkMUIsRUFBQUEsT0FBTyxFQUFFeUIsc0JBQVVFLElBSkw7QUFLZC9CLEVBQUFBLGNBQWMsRUFBRTZCLHNCQUFVRyxLQUFWLENBQWdCO0FBQzVCL0IsSUFBQUEsT0FBTyxFQUFFNEIsc0JBQVVJLE1BRFM7QUFFNUIvQixJQUFBQSxPQUFPLEVBQUUyQixzQkFBVUksTUFGUztBQUc1QjlCLElBQUFBLE9BQU8sRUFBRTBCLHNCQUFVSTtBQUhTLEdBQWhCLENBTEY7QUFVZHhCLEVBQUFBLE9BQU8sRUFBRW9CLHNCQUFVSyxLQUFWLENBQWdCLENBQ3JCLE9BRHFCLEVBRXJCLFFBRnFCLEVBR3JCLGNBSHFCLEVBSXJCLE1BSnFCLEVBS3JCLE1BTHFCLEVBTXJCLGFBTnFCLEVBT3JCLGFBUHFCLEVBUXJCLE1BUnFCLENBQWhCLENBVks7QUFvQmR4QixFQUFBQSxjQUFjLEVBQUVtQixzQkFBVU07QUFwQlosQ0FBbEI7ZUF1QmU3RCxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7U1dGX01PREFMfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCBmaW5kQnlUeXBlLCB7Y3JlYXRlU3ViQ29tcG9uZW50fSBmcm9tIFwiLi4vdXRpbHMvZmluZEJ5VHlwZVwiO1xyXG5pbXBvcnQge25vb3B9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgICAgIHRoaXMuZXhwYW5kID0gdGhpcy5leHBhbmQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRlc2t0b3BCdXR0b25zID0gdGhpcy5kZXNrdG9wQnV0dG9ucy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubW9iaWxlQnV0dG9ucyA9IHRoaXMubW9iaWxlQnV0dG9ucy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyUG9wb3ZlciA9IHRoaXMucmVuZGVyUG9wb3Zlci5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50U3RhdHVzOiBTV0ZfTU9EQUwuTU9EQUxfU0laRS5ERUZBVUxULFxyXG4gICAgICAgICAgICBvcGVuTW9kYWw6IHRydWUsXHJcbiAgICAgICAgICAgIG1vYmlsZUZvb3Rlck9wZW5lZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwYW5kKCkge1xyXG4gICAgICAgIGNvbnN0IGlzRnVsbFNpemUgPSB0aGlzLnN0YXRlLmN1cnJlbnRTdGF0dXMgPT09IFNXRl9NT0RBTC5NT0RBTF9TSVpFLkZVTEw7XHJcblxyXG4gICAgICAgIGNvbnN0IG1vZGFsTm9kZSA9IHRoaXMubW9kYWxSZWYuY3VycmVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1kaWFsb2dcIik7XHJcblxyXG4gICAgICAgIGlmIChpc0Z1bGxTaXplKSB7XHJcbiAgICAgICAgICAgIG1vZGFsTm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXR1czogU1dGX01PREFMLk1PREFMX1NJWkUuREVGQVVMVH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtb2RhbE5vZGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiA5OCU7XCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRTdGF0dXM6IFNXRl9NT0RBTC5NT0RBTF9TSVpFLkZVTEx9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQb3BvdmVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtzaG93UG9wb3ZlciwgcG9wb3ZlckNvbnRlbnQ6IHt0YWdsaW5lLCBjb250ZW50LCBhY3Rpb25zfX0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoc2hvd1BvcG92ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxub3ctcG9wb3ZlclxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhcmdldFwiOiBcImJvdHRvbS1lbmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiBcInRvcC1lbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJ4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJ0cmlnZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ0FyaWE9e3tcImJ1dHRvblwiOiB7XCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIn19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcENvbnRlbnQ9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bm93LXRlbXBsYXRlLWNhcmQtb21uaWNoYW5uZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdsaW5lPXt0YWdsaW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L25vdy1wb3BvdmVyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QnV0dG9uIGljb249XCJ4XCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGJhcmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICBzbG90PVwidHJpZ2dlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnQXJpYT17e1wiYnV0dG9uXCI6IHtcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwifX19XHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcENvbnRlbnQ9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuTW9kYWw6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGRlc2t0b3BCdXR0b25zKCkge1xyXG4gICAgICAgIGNvbnN0IGlzRnVsbFNpemUgPSB0aGlzLnN0YXRlLmN1cnJlbnRTdGF0dXMgPT09IFNXRl9NT0RBTC5NT0RBTF9TSVpFLkZVTEw7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gaXNGdWxsU2l6ZSA/IFNXRl9NT0RBTC5NT0RBTF9TSVpFLkRFRkFVTFQgOiBTV0ZfTU9EQUwuTU9EQUxfU0laRS5GVUxMO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwiZGFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhcmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ0FyaWE9e3tcImJ1dHRvblwiOiB7XCJhcmlhLWxhYmVsXCI6IFwiQ29sbGFwc2VcIn19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwQ29udGVudD1cIkNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7bW9kYWxPcGVuZWQ6IHRydWV9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249e2lzRnVsbFNpemUgPyBcImFycm93cy1hbmdsZS1jb250cmFjdFwiIDogXCJhcnJvd3MtYW5nbGUtZXhwYW5kXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhcmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ0FyaWE9e3tcImJ1dHRvblwiOiB7XCJhcmlhLWxhYmVsXCI6IFwiRXhwYW5kXCJ9fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcENvbnRlbnQ9e2lzRnVsbFNpemUgPyBcIkNvbGxhcHNlXCIgOiBcIkV4cGFuZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdHVzOiBzdGF0dXN9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQb3BvdmVyKCl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBtb2JpbGVCdXR0b25zKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFycm93LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYmFyZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ0FyaWE9e3tcImJ1dHRvblwiOiB7XCJhcmlhLWxhYmVsXCI6IFwiQmFja1wifX19XHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcENvbnRlbnQ9XCJCYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHttb2RhbE9wZW5lZDogZmFsc2V9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRocmVlLWRvdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYmFyZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ0FyaWE9e3tcImJ1dHRvblwiOiB7XCJhcmlhLWxhYmVsXCI6IFwiU2hvdyBBY3Rpb25zXCJ9fX1cclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwQ29udGVudD1cIlNob3cgQWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7bW9iaWxlRm9vdGVyT3BlbmVkOiB0cnVlfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFJlZj8uY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5tb2JpbGVGb290ZXJPcGVuZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21vYmlsZUZvb3Rlck9wZW5lZDogZmFsc2V9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2Rpc3BsYXksIG9wZW5Nb2RhbCwgaGVhZGVyRWxlbWVudHMsIG1hbmFnZU9wZW5lZH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHttb2JpbGVGb290ZXJPcGVuZWQsIG9wZW5Nb2RhbDogb3BlbiwgY3VycmVudFN0YXR1c30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGlzRnVsbFNpemUgPSBjdXJyZW50U3RhdHVzID09PSBTV0ZfTU9EQUwuTU9EQUxfU0laRS5GVUxMO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93TW9kYWwgPSBtYW5hZ2VPcGVuZWQgPyBvcGVuTW9kYWwgOiBvcGVuO1xyXG5cclxuICAgICAgICBjb25zdCBpc01vYmlsZSA9IFNXRl9NT0RBTC5NT0JJTEVfUkVHRVhQLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG4gICAgICAgIHJldHVybiBzaG93TW9kYWwgJiYgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2YtbW9kYWwtb3ZlcmxheVwiXHJcbiAgICAgICAgICAgICAgICAgcmVmPXtlbG0gPT4gdGhpcy5tb2RhbFJlZi5jdXJyZW50ID0gZWxtfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGFsLWRpYWxvZ1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYC0tJHtkaXNwbGF5fWBdOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYC0tZnVsbC0ke2lzTW9iaWxlID8gXCJtb2JpbGVcIiA6IFwiZGVza3RvcFwifWBdOiBpc01vYmlsZSB8fCBpc0Z1bGxTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGFsLWhlYWRlclwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLW1vYmlsZVwiOiBpc01vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1kZXNrdG9wLWNvbnRlbnRcIjogIWlzTW9iaWxlICYmIGhlYWRlckVsZW1lbnRzID09PSAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLWRlc2t0b3BcIjogIWlzTW9iaWxlICYmIGhlYWRlckVsZW1lbnRzID09PSAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTW9iaWxlID8gdGhpcy5tb2JpbGVCdXR0b25zKCkgOiB0aGlzLmRlc2t0b3BCdXR0b25zKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmluZEJ5VHlwZSh0aGlzLnByb3BzLmNoaWxkcmVuLCBcIkhlYWRlclwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckVsZW1lbnRzID09PSAzID8gPGRpdiBjbGFzc05hbWU9XCJhZGRpdGlvbmFsLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc01vYmlsZSAmJiBmaW5kQnlUeXBlKHRoaXMucHJvcHMuY2hpbGRyZW4sIFwiSGVhZGVyQnV0dG9uc1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaW5kQnlUeXBlKHRoaXMucHJvcHMuY2hpbGRyZW4sIFwiQm9keVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc01vYmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVudS1iYWNrZ3JvdW5kXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1hY3RpdmVcIjogbW9iaWxlRm9vdGVyT3BlbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RhbC1mb290ZXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1tb2JpbGVcIjogaXNNb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tYWN0aXZlXCI6IG1vYmlsZUZvb3Rlck9wZW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNNb2JpbGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbmRCeVR5cGUodGhpcy5wcm9wcy5jaGlsZHJlbiwgXCJGb290ZXJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaW5kQnlUeXBlKHRoaXMucHJvcHMuY2hpbGRyZW4sIFwiSGVhZGVyQnV0dG9uc1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZEJ5VHlwZSh0aGlzLnByb3BzLmNoaWxkcmVuLCBcIkZvb3RlclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIH1cclxufVxyXG5cclxuTW9kYWwuSGVhZGVyID0gY3JlYXRlU3ViQ29tcG9uZW50KFwiSGVhZGVyXCIpO1xyXG5Nb2RhbC5IZWFkZXJCdXR0b25zID0gY3JlYXRlU3ViQ29tcG9uZW50KFwiSGVhZGVyQnV0dG9uc1wiKTtcclxuTW9kYWwuQm9keSA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkJvZHlcIik7XHJcbk1vZGFsLkZvb3RlciA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkZvb3RlclwiKTtcclxuXHJcbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIG9wZW5Nb2RhbDogZmFsc2UsXHJcbiAgICBzaG93UG9wb3ZlcjogZmFsc2UsXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IGZhbHNlLFxyXG4gICAgb25DbG9zZTogbm9vcCxcclxuICAgIHBvcG92ZXJDb250ZW50OiB7fSxcclxuICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgaGVhZGVyRWxlbWVudHM6IDJcclxufVxyXG5cclxuTW9kYWwucHJvcFR5cGVzID0ge1xyXG4gICAgb3Blbk1vZGFsOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNob3dQb3BvdmVyOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG1hbmFnZU9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIHBvcG92ZXJDb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHRhZ2xpbmU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBhY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0XHJcbiAgICB9KSxcclxuICAgIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICAgICAgJ2Jsb2NrJyxcclxuICAgICAgICAnaW5saW5lJyxcclxuICAgICAgICAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAnZ3JpZCcsXHJcbiAgICAgICAgJ2ZsZXgnLFxyXG4gICAgICAgICdpbmxpbmUtZ3JpZCcsXHJcbiAgICAgICAgJ2lubGluZS1mbGV4JyxcclxuICAgICAgICAnbm9uZSdcclxuICAgIF0pLFxyXG4gICAgaGVhZGVyRWxlbWVudHM6IFByb3BUeXBlcy5udW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWwiXX0=