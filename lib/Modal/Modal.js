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

      var showPrint = this.props.showPrint;
      var isFullSize = this.state.currentStatus === _constants.SWF_MODAL.MODAL_SIZE.FULL;
      var status = isFullSize ? _constants.SWF_MODAL.MODAL_SIZE.DEFAULT : _constants.SWF_MODAL.MODAL_SIZE.FULL;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [showPrint && isFullSize && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
          icon: "printer",
          variant: "tertiary",
          bare: true,
          size: "md",
          configAria: {
            "button": {
              "aria-label": "Print"
            }
          },
          tooltipContent: "Print",
          onClick: function onClick() {
            return window.print();
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
  headerElements: 2,
  showPrint: false
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
  headerElements: _propTypes["default"].number,
  showPrint: _propTypes["default"].bool
};
var _default = Modal;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Nb2RhbC9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInByb3BzIiwibW9kYWxSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImV4cGFuZCIsImJpbmQiLCJkZXNrdG9wQnV0dG9ucyIsIm1vYmlsZUJ1dHRvbnMiLCJyZW5kZXJQb3BvdmVyIiwic3RhdGUiLCJjdXJyZW50U3RhdHVzIiwiU1dGX01PREFMIiwiTU9EQUxfU0laRSIsIkRFRkFVTFQiLCJvcGVuTW9kYWwiLCJtb2JpbGVGb290ZXJPcGVuZWQiLCJpc0Z1bGxTaXplIiwiRlVMTCIsIm1vZGFsTm9kZSIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0U3RhdGUiLCJzZXRBdHRyaWJ1dGUiLCJzaG93UG9wb3ZlciIsInBvcG92ZXJDb250ZW50IiwidGFnbGluZSIsImNvbnRlbnQiLCJhY3Rpb25zIiwib25DbG9zZSIsInNob3dQcmludCIsInN0YXR1cyIsIndpbmRvdyIsInByaW50IiwibW9kYWxPcGVuZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJkaXNwbGF5IiwiaGVhZGVyRWxlbWVudHMiLCJtYW5hZ2VPcGVuZWQiLCJvcGVuIiwic2hvd01vZGFsIiwiaXNNb2JpbGUiLCJNT0JJTEVfUkVHRVhQIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImVsbSIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiSGVhZGVyIiwiSGVhZGVyQnV0dG9ucyIsIkJvZHkiLCJGb290ZXIiLCJkZWZhdWx0UHJvcHMiLCJub29wIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImZ1bmMiLCJzaGFwZSIsIm9iamVjdCIsIm9uZU9mIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEs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QUFBLFlBQVksRUFBRWtCLHNCQUFVQyxJQUhWO0FBSWQ3QixFQUFBQSxPQUFPLEVBQUU0QixzQkFBVUUsSUFKTDtBQUtkbEMsRUFBQUEsY0FBYyxFQUFFZ0Msc0JBQVVHLEtBQVYsQ0FBZ0I7QUFDNUJsQyxJQUFBQSxPQUFPLEVBQUUrQixzQkFBVUksTUFEUztBQUU1QmxDLElBQUFBLE9BQU8sRUFBRThCLHNCQUFVSSxNQUZTO0FBRzVCakMsSUFBQUEsT0FBTyxFQUFFNkIsc0JBQVVJO0FBSFMsR0FBaEIsQ0FMRjtBQVVkeEIsRUFBQUEsT0FBTyxFQUFFb0Isc0JBQVVLLEtBQVYsQ0FBZ0IsQ0FDckIsT0FEcUIsRUFFckIsUUFGcUIsRUFHckIsY0FIcUIsRUFJckIsTUFKcUIsRUFLckIsTUFMcUIsRUFNckIsYUFOcUIsRUFPckIsYUFQcUIsRUFRckIsTUFScUIsQ0FBaEIsQ0FWSztBQW9CZHhCLEVBQUFBLGNBQWMsRUFBRW1CLHNCQUFVTSxNQXBCWjtBQXFCZGpDLEVBQUFBLFNBQVMsRUFBRTJCLHNCQUFVQztBQXJCUCxDQUFsQjtlQXdCZTNELEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHtTV0ZfTU9EQUx9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL0J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IGZpbmRCeVR5cGUsIHtjcmVhdGVTdWJDb21wb25lbnR9IGZyb20gXCIuLi91dGlscy9maW5kQnlUeXBlXCI7XHJcbmltcG9ydCB7bm9vcH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm1vZGFsUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICAgICAgdGhpcy5leHBhbmQgPSB0aGlzLmV4cGFuZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGVza3RvcEJ1dHRvbnMgPSB0aGlzLmRlc2t0b3BCdXR0b25zLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5tb2JpbGVCdXR0b25zID0gdGhpcy5tb2JpbGVCdXR0b25zLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQb3BvdmVyID0gdGhpcy5yZW5kZXJQb3BvdmVyLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0dXM6IFNXRl9NT0RBTC5NT0RBTF9TSVpFLkRFRkFVTFQsXHJcbiAgICAgICAgICAgIG9wZW5Nb2RhbDogdHJ1ZSxcclxuICAgICAgICAgICAgbW9iaWxlRm9vdGVyT3BlbmVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBhbmQoKSB7XHJcbiAgICAgICAgY29uc3QgaXNGdWxsU2l6ZSA9IHRoaXMuc3RhdGUuY3VycmVudFN0YXR1cyA9PT0gU1dGX01PREFMLk1PREFMX1NJWkUuRlVMTDtcclxuXHJcbiAgICAgICAgY29uc3QgbW9kYWxOb2RlID0gdGhpcy5tb2RhbFJlZi5jdXJyZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWRpYWxvZ1wiKTtcclxuXHJcbiAgICAgICAgaWYgKGlzRnVsbFNpemUpIHtcclxuICAgICAgICAgICAgbW9kYWxOb2RlLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdHVzOiBTV0ZfTU9EQUwuTU9EQUxfU0laRS5ERUZBVUxUfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1vZGFsTm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDk4JTtcIik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXR1czogU1dGX01PREFMLk1PREFMX1NJWkUuRlVMTH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcG92ZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3Nob3dQb3BvdmVyLCBwb3BvdmVyQ29udGVudDoge3RhZ2xpbmUsIGNvbnRlbnQsIGFjdGlvbnN9fSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmIChzaG93UG9wb3Zlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPG5vdy1wb3BvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFyZ2V0XCI6IFwiYm90dG9tLWVuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IFwidG9wLWVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cInhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhcmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cInRyaWdnZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnQXJpYT17e1wiYnV0dG9uXCI6IHtcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwifX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwQ29udGVudD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxub3ctdGVtcGxhdGUtY2FyZC1vbW5pY2hhbm5lbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbG90PVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ2xpbmU9e3RhZ2xpbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvbm93LXBvcG92ZXI+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cInhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYmFyZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJ0cmlnZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBjb25maWdBcmlhPXt7XCJidXR0b25cIjoge1wiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCJ9fX1cclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwQ29udGVudD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5Nb2RhbDogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZGVza3RvcEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgY29uc3Qge3Nob3dQcmludH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGlzRnVsbFNpemUgPSB0aGlzLnN0YXRlLmN1cnJlbnRTdGF0dXMgPT09IFNXRl9NT0RBTC5NT0RBTF9TSVpFLkZVTEw7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gaXNGdWxsU2l6ZSA/IFNXRl9NT0RBTC5NT0RBTF9TSVpFLkRFRkFVTFQgOiBTV0ZfTU9EQUwuTU9EQUxfU0laRS5GVUxMO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgey8qPEJ1dHRvbiBpY29uPVwiZGFzaFwiKi99XHJcbiAgICAgICAgICAgICAgICB7LyogICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiKi99XHJcbiAgICAgICAgICAgICAgICB7LyogICAgICAgIGJhcmU9e3RydWV9Ki99XHJcbiAgICAgICAgICAgICAgICB7LyogICAgICAgIHNpemU9XCJtZFwiKi99XHJcbiAgICAgICAgICAgICAgICB7LyogICAgICAgIGNvbmZpZ0FyaWE9e3tcImJ1dHRvblwiOiB7XCJhcmlhLWxhYmVsXCI6IFwiQ29sbGFwc2VcIn19fSovfVxyXG4gICAgICAgICAgICAgICAgey8qICAgICAgICB0b29sdGlwQ29udGVudD1cIkNvbGxhcHNlXCIqL31cclxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7bW9kYWxPcGVuZWQ6IHRydWV9KX0qL31cclxuICAgICAgICAgICAgICAgIHsvKi8+Ki99XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd1ByaW50ICYmIGlzRnVsbFNpemUgJiYgPEJ1dHRvbiBpY29uPVwicHJpbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhcmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ0FyaWE9e3tcImJ1dHRvblwiOiB7XCJhcmlhLWxhYmVsXCI6IFwiUHJpbnRcIn19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwQ29udGVudD17XCJQcmludFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cucHJpbnQoKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXtpc0Z1bGxTaXplID8gXCJhcnJvd3MtYW5nbGUtY29udHJhY3RcIiA6IFwiYXJyb3dzLWFuZ2xlLWV4cGFuZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXJlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWdBcmlhPXt7XCJidXR0b25cIjoge1wiYXJpYS1sYWJlbFwiOiBcIkV4cGFuZFwifX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50PXtpc0Z1bGxTaXplID8gXCJDb2xsYXBzZVwiIDogXCJFeHBhbmRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXR1czogc3RhdHVzfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUG9wb3ZlcigpfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgbW9iaWxlQnV0dG9ucygpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJhcnJvdy1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGJhcmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICBjb25maWdBcmlhPXt7XCJidXR0b25cIjoge1wiYXJpYS1sYWJlbFwiOiBcIkJhY2tcIn19fVxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50PVwiQmFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7bW9kYWxPcGVuZWQ6IGZhbHNlfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJ0aHJlZS1kb3RzXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGJhcmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICBjb25maWdBcmlhPXt7XCJidXR0b25cIjoge1wiYXJpYS1sYWJlbFwiOiBcIlNob3cgQWN0aW9uc1wifX19XHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcENvbnRlbnQ9XCJTaG93IEFjdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe21vYmlsZUZvb3Rlck9wZW5lZDogdHJ1ZX0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMubW9kYWxSZWY/LmN1cnJlbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubW9iaWxlRm9vdGVyT3BlbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttb2JpbGVGb290ZXJPcGVuZWQ6IGZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtkaXNwbGF5LCBvcGVuTW9kYWwsIGhlYWRlckVsZW1lbnRzLCBtYW5hZ2VPcGVuZWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7bW9iaWxlRm9vdGVyT3BlbmVkLCBvcGVuTW9kYWw6IG9wZW4sIGN1cnJlbnRTdGF0dXN9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBpc0Z1bGxTaXplID0gY3VycmVudFN0YXR1cyA9PT0gU1dGX01PREFMLk1PREFMX1NJWkUuRlVMTDtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd01vZGFsID0gbWFuYWdlT3BlbmVkID8gb3Blbk1vZGFsIDogb3BlbjtcclxuXHJcbiAgICAgICAgY29uc3QgaXNNb2JpbGUgPSBTV0ZfTU9EQUwuTU9CSUxFX1JFR0VYUC50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gc2hvd01vZGFsICYmIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dmLW1vZGFsLW92ZXJsYXlcIlxyXG4gICAgICAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMubW9kYWxSZWYuY3VycmVudCA9IGVsbX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RhbC1kaWFsb2dcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7ZGlzcGxheX1gXTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2AtLWZ1bGwtJHtpc01vYmlsZSA/IFwibW9iaWxlXCIgOiBcImRlc2t0b3BcIn1gXTogaXNNb2JpbGUgfHwgaXNGdWxsU2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RhbC1oZWFkZXJcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1tb2JpbGVcIjogaXNNb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tZGVza3RvcC1jb250ZW50XCI6ICFpc01vYmlsZSAmJiBoZWFkZXJFbGVtZW50cyA9PT0gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1kZXNrdG9wXCI6ICFpc01vYmlsZSAmJiBoZWFkZXJFbGVtZW50cyA9PT0gM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc01vYmlsZSA/IHRoaXMubW9iaWxlQnV0dG9ucygpIDogdGhpcy5kZXNrdG9wQnV0dG9ucygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbmRCeVR5cGUodGhpcy5wcm9wcy5jaGlsZHJlbiwgXCJIZWFkZXJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJFbGVtZW50cyA9PT0gMyA/IDxkaXYgY2xhc3NOYW1lPVwiYWRkaXRpb25hbC1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaXNNb2JpbGUgJiYgZmluZEJ5VHlwZSh0aGlzLnByb3BzLmNoaWxkcmVuLCBcIkhlYWRlckJ1dHRvbnNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmluZEJ5VHlwZSh0aGlzLnByb3BzLmNoaWxkcmVuLCBcIkJvZHlcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNNb2JpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lbnUtYmFja2dyb3VuZFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tYWN0aXZlXCI6IG1vYmlsZUZvb3Rlck9wZW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kYWwtZm9vdGVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tbW9iaWxlXCI6IGlzTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLWFjdGl2ZVwiOiBtb2JpbGVGb290ZXJPcGVuZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTW9iaWxlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaW5kQnlUeXBlKHRoaXMucHJvcHMuY2hpbGRyZW4sIFwiRm9vdGVyXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmluZEJ5VHlwZSh0aGlzLnByb3BzLmNoaWxkcmVuLCBcIkhlYWRlckJ1dHRvbnNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRCeVR5cGUodGhpcy5wcm9wcy5jaGlsZHJlbiwgXCJGb290ZXJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICB9XHJcbn1cclxuXHJcbk1vZGFsLkhlYWRlciA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkhlYWRlclwiKTtcclxuTW9kYWwuSGVhZGVyQnV0dG9ucyA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkhlYWRlckJ1dHRvbnNcIik7XHJcbk1vZGFsLkJvZHkgPSBjcmVhdGVTdWJDb21wb25lbnQoXCJCb2R5XCIpO1xyXG5Nb2RhbC5Gb290ZXIgPSBjcmVhdGVTdWJDb21wb25lbnQoXCJGb290ZXJcIik7XHJcblxyXG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBvcGVuTW9kYWw6IGZhbHNlLFxyXG4gICAgc2hvd1BvcG92ZXI6IGZhbHNlLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBmYWxzZSxcclxuICAgIG9uQ2xvc2U6IG5vb3AsXHJcbiAgICBwb3BvdmVyQ29udGVudDoge30sXHJcbiAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgIGhlYWRlckVsZW1lbnRzOiAyLFxyXG4gICAgc2hvd1ByaW50OiBmYWxzZVxyXG59XHJcblxyXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XHJcbiAgICBvcGVuTW9kYWw6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc2hvd1BvcG92ZXI6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWFuYWdlT3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgcG9wb3ZlckNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgdGFnbGluZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3RcclxuICAgIH0pLFxyXG4gICAgZGlzcGxheTogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgICAgICAnYmxvY2snLFxyXG4gICAgICAgICdpbmxpbmUnLFxyXG4gICAgICAgICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICdncmlkJyxcclxuICAgICAgICAnZmxleCcsXHJcbiAgICAgICAgJ2lubGluZS1ncmlkJyxcclxuICAgICAgICAnaW5saW5lLWZsZXgnLFxyXG4gICAgICAgICdub25lJ1xyXG4gICAgXSksXHJcbiAgICBoZWFkZXJFbGVtZW50czogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHNob3dQcmludDogUHJvcFR5cGVzLmJvb2xcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWwiXX0=