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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Modal = function Modal(props) {
  var _classnames;

  var modalRef = (0, React.useRef)(null);

  var _useState = (0, React.useState)(_constants.SWF_MODAL.MODAL_SIZE.DEFAULT),
      _useState2 = _slicedToArray(_useState, 2),
      currentStatus = _useState2[0],
      setCurrentStatus = _useState2[1];

  var _useState3 = (0, React.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      openModal = _useState4[0],
      setOpenModal = _useState4[1];

  var _useState5 = (0, React.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      mobileFooterOpened = _useState6[0],
      setMobileFooterOpened = _useState6[1];

  var showPrint = props.showPrint,
      closeRef = props.closeRef,
      manageOpened = props.manageOpened,
      onClose = props.onClose,
      display = props.display,
      headerElements = props.headerElements,
      animation = props.animation,
      children = props.children,
      onSizeChanged = props.onSizeChanged;

  var expand = function expand() {
    var isFullSize = currentStatus === _constants.SWF_MODAL.MODAL_SIZE.FULL;
    var modalNode = modalRef === null || modalRef === void 0 ? void 0 : modalRef.current.querySelector(".modal-dialog");

    if (isFullSize) {
      modalNode.removeAttribute("style");
      setCurrentStatus(_constants.SWF_MODAL.MODAL_SIZE.DEFAULT);
      return;
    }

    modalNode.setAttribute("style", "width: 100%; height: 98%;");
    setCurrentStatus(_constants.SWF_MODAL.MODAL_SIZE.FULL);
  };

  var desktopButtons = function desktopButtons() {
    var isFullSize = currentStatus === _constants.SWF_MODAL.MODAL_SIZE.FULL;
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
          return setCurrentStatus(status);
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        icon: "x",
        innerRef: closeRef,
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
          !manageOpened && setOpenModal(false);
          onClose();
        }
      })]
    });
  };

  var mobileButtons = function mobileButtons() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
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
          return setMobileFooterOpened(true);
        }
      })
    });
  };

  (0, React.useEffect)(function () {
    onSizeChanged(currentStatus);
  }, [currentStatus]);
  (0, React.useEffect)(function () {
    var _modalRef$current;

    modalRef === null || modalRef === void 0 ? void 0 : (_modalRef$current = modalRef.current) === null || _modalRef$current === void 0 ? void 0 : _modalRef$current.addEventListener("click", function (event) {
      mobileFooterOpened && setMobileFooterOpened(false);
    });

    if (mobileFooterOpened) {
      var _modalRef$current2, _modalRef$current2$qu, _modalRef$current3;

      var footerContentHeight = modalRef === null || modalRef === void 0 ? void 0 : (_modalRef$current2 = modalRef.current) === null || _modalRef$current2 === void 0 ? void 0 : (_modalRef$current2$qu = _modalRef$current2.querySelector(".footer-content")) === null || _modalRef$current2$qu === void 0 ? void 0 : _modalRef$current2$qu.offsetHeight;
      modalRef === null || modalRef === void 0 ? void 0 : (_modalRef$current3 = modalRef.current) === null || _modalRef$current3 === void 0 ? void 0 : _modalRef$current3.style.setProperty("--swf-modal-footer-height", footerContentHeight + "px");
    }
  }, [mobileFooterOpened]);
  var isFullSize = currentStatus === _constants.SWF_MODAL.MODAL_SIZE.FULL;
  var showModal = manageOpened ? props.openModal : openModal;

  var isMobile = _constants.SWF_MODAL.MOBILE_REGEXP.test(navigator.userAgent);

  return showModal ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames2["default"])("swf-modal-overlay", isMobile && "--mobile"),
      ref: function ref(elm) {
        return modalRef.current = elm;
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames2["default"])({
          "modal": true,
          "--animated": animation,
          "--mobile": isMobile,
          "--desktop": !isMobile
        }),
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
              className: "additional-buttons",
              children: (0, _findByType["default"])(children, "Buttons")
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "main-buttons",
              children: isMobile ? mobileButtons() : desktopButtons()
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "header-content",
              children: (0, _findByType["default"])(children, "Header")
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "modal-body",
            children: (0, _findByType["default"])(children, "Body")
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
              children: [(0, _findByType["default"])(children, "Footer"), (0, _findByType["default"])(children, "HeaderButtons")]
            }) : (0, _findByType["default"])(children, "Footer")
          })]
        })
      })
    })
  }) : null;
};

Modal.Buttons = (0, _findByType.createSubComponent)("Buttons");
Modal.Header = (0, _findByType.createSubComponent)("Header");
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
  showPrint: false,
  closeRef: /*#__PURE__*/React.createRef(),
  withAnimation: false,
  onSizeChanged: _utils.noop
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
  animation: _propTypes["default"].bool,
  display: _propTypes["default"].oneOf(['block', 'inline', 'inline-block', 'grid', 'flex', 'inline-grid', 'inline-flex', 'none']),
  headerElements: _propTypes["default"].number,
  showPrint: _propTypes["default"].bool,
  closeRef: _propTypes["default"].object,
  onSizeChanged: _propTypes["default"].func
};
var _default = Modal;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Nb2RhbC9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInByb3BzIiwibW9kYWxSZWYiLCJTV0ZfTU9EQUwiLCJNT0RBTF9TSVpFIiwiREVGQVVMVCIsImN1cnJlbnRTdGF0dXMiLCJzZXRDdXJyZW50U3RhdHVzIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwibW9iaWxlRm9vdGVyT3BlbmVkIiwic2V0TW9iaWxlRm9vdGVyT3BlbmVkIiwic2hvd1ByaW50IiwiY2xvc2VSZWYiLCJtYW5hZ2VPcGVuZWQiLCJvbkNsb3NlIiwiZGlzcGxheSIsImhlYWRlckVsZW1lbnRzIiwiYW5pbWF0aW9uIiwiY2hpbGRyZW4iLCJvblNpemVDaGFuZ2VkIiwiZXhwYW5kIiwiaXNGdWxsU2l6ZSIsIkZVTEwiLCJtb2RhbE5vZGUiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvciIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImRlc2t0b3BCdXR0b25zIiwic3RhdHVzIiwid2luZG93IiwicHJpbnQiLCJtb2JpbGVCdXR0b25zIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZm9vdGVyQ29udGVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJzaG93TW9kYWwiLCJpc01vYmlsZSIsIk1PQklMRV9SRUdFWFAiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZWxtIiwiQnV0dG9ucyIsIkhlYWRlciIsIkJvZHkiLCJGb290ZXIiLCJkZWZhdWx0UHJvcHMiLCJzaG93UG9wb3ZlciIsIm5vb3AiLCJwb3BvdmVyQ29udGVudCIsIlJlYWN0IiwiY3JlYXRlUmVmIiwid2l0aEFuaW1hdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJmdW5jIiwic2hhcGUiLCJ0YWdsaW5lIiwib2JqZWN0IiwiY29udGVudCIsImFjdGlvbnMiLCJvbmVPZiIsIm51bWJlciJdLCJtYXBwaW5n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IGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7U1dGX01PREFMfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCBmaW5kQnlUeXBlLCB7Y3JlYXRlU3ViQ29tcG9uZW50fSBmcm9tIFwiLi4vdXRpbHMvZmluZEJ5VHlwZVwiO1xyXG5pbXBvcnQge25vb3B9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBNb2RhbCA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IG1vZGFsUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50U3RhdHVzLCBzZXRDdXJyZW50U3RhdHVzXSA9IHVzZVN0YXRlKFNXRl9NT0RBTC5NT0RBTF9TSVpFLkRFRkFVTFQpO1xyXG4gICAgY29uc3QgW29wZW5Nb2RhbCwgc2V0T3Blbk1vZGFsXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbbW9iaWxlRm9vdGVyT3BlbmVkLCBzZXRNb2JpbGVGb290ZXJPcGVuZWRdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgICBjb25zdCB7c2hvd1ByaW50LCBjbG9zZVJlZiwgbWFuYWdlT3BlbmVkLCBvbkNsb3NlLCBkaXNwbGF5LFxyXG4gICAgICAgIGhlYWRlckVsZW1lbnRzLCBhbmltYXRpb24sIGNoaWxkcmVuLCBvblNpemVDaGFuZ2VkfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IGV4cGFuZCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBpc0Z1bGxTaXplID0gY3VycmVudFN0YXR1cyA9PT0gU1dGX01PREFMLk1PREFMX1NJWkUuRlVMTDtcclxuICAgICAgICBjb25zdCBtb2RhbE5vZGUgPSBtb2RhbFJlZj8uY3VycmVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWRpYWxvZ1wiKTtcclxuXHJcbiAgICAgICAgaWYgKGlzRnVsbFNpemUpIHtcclxuICAgICAgICAgICAgbW9kYWxOb2RlLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50U3RhdHVzKFNXRl9NT0RBTC5NT0RBTF9TSVpFLkRFRkFVTFQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1vZGFsTm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDk4JTtcIik7XHJcbiAgICAgICAgc2V0Q3VycmVudFN0YXR1cyhTV0ZfTU9EQUwuTU9EQUxfU0laRS5GVUxMKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlc2t0b3BCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzRnVsbFNpemUgPSBjdXJyZW50U3RhdHVzID09PSBTV0ZfTU9EQUwuTU9EQUxfU0laRS5GVUxMO1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IGlzRnVsbFNpemUgPyBTV0ZfTU9EQUwuTU9EQUxfU0laRS5ERUZBVUxUIDogU1dGX01PREFMLk1PREFMX1NJWkUuRlVMTDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93UHJpbnQgJiYgaXNGdWxsU2l6ZSAmJiA8QnV0dG9uIGljb249XCJwcmludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ0FyaWE9e3tcImJ1dHRvblwiOiB7XCJhcmlhLWxhYmVsXCI6IFwiUHJpbnRcIn19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcENvbnRlbnQ9e1wiUHJpbnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5wcmludCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249e2lzRnVsbFNpemUgPyBcImFycm93cy1hbmdsZS1jb250cmFjdFwiIDogXCJhcnJvd3MtYW5nbGUtZXhwYW5kXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhcmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ0FyaWE9e3tcImJ1dHRvblwiOiB7XCJhcmlhLWxhYmVsXCI6IFwiRXhwYW5kXCJ9fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcENvbnRlbnQ9e2lzRnVsbFNpemUgPyBcIkNvbGxhcHNlXCIgOiBcIkV4cGFuZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50U3RhdHVzKHN0YXR1cyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwieFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyUmVmPXtjbG9zZVJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cInRyaWdnZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWdBcmlhPXt7XCJidXR0b25cIjoge1wiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCJ9fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcENvbnRlbnQ9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFtYW5hZ2VPcGVuZWQgJiYgc2V0T3Blbk1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vYmlsZUJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwidGhyZWUtZG90c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBiYXJlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnQXJpYT17e1wiYnV0dG9uXCI6IHtcImFyaWEtbGFiZWxcIjogXCJTaG93IEFjdGlvbnNcIn19fVxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50PVwiU2hvdyBBY3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2JpbGVGb290ZXJPcGVuZWQodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBvblNpemVDaGFuZ2VkKGN1cnJlbnRTdGF0dXMpO1xyXG4gICAgfSwgW2N1cnJlbnRTdGF0dXNdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbW9kYWxSZWY/LmN1cnJlbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbW9iaWxlRm9vdGVyT3BlbmVkICYmIHNldE1vYmlsZUZvb3Rlck9wZW5lZChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChtb2JpbGVGb290ZXJPcGVuZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZm9vdGVyQ29udGVudEhlaWdodCA9IG1vZGFsUmVmPy5jdXJyZW50Py5xdWVyeVNlbGVjdG9yKFwiLmZvb3Rlci1jb250ZW50XCIpPy5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgIG1vZGFsUmVmPy5jdXJyZW50Py5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc3dmLW1vZGFsLWZvb3Rlci1oZWlnaHRcIiwgZm9vdGVyQ29udGVudEhlaWdodCArIFwicHhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21vYmlsZUZvb3Rlck9wZW5lZF0pXHJcblxyXG4gICAgY29uc3QgaXNGdWxsU2l6ZSA9IGN1cnJlbnRTdGF0dXMgPT09IFNXRl9NT0RBTC5NT0RBTF9TSVpFLkZVTEw7XHJcblxyXG4gICAgY29uc3Qgc2hvd01vZGFsID0gbWFuYWdlT3BlbmVkID8gcHJvcHMub3Blbk1vZGFsIDogb3Blbk1vZGFsO1xyXG5cclxuICAgIGNvbnN0IGlzTW9iaWxlID0gU1dGX01PREFMLk1PQklMRV9SRUdFWFAudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2hvd01vZGFsID8gPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcInN3Zi1tb2RhbC1vdmVybGF5XCIsIGlzTW9iaWxlICYmIFwiLS1tb2JpbGVcIil9XHJcbiAgICAgICAgICAgICByZWY9e2VsbSA9PiBtb2RhbFJlZi5jdXJyZW50ID0gZWxtfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgXCJtb2RhbFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCItLWFuaW1hdGVkXCI6IGFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgIFwiLS1tb2JpbGVcIjogaXNNb2JpbGUsXHJcbiAgICAgICAgICAgICAgICBcIi0tZGVza3RvcFwiOiAhaXNNb2JpbGVcclxuICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIFwibW9kYWwtZGlhbG9nXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgW2AtLSR7ZGlzcGxheX1gXTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBbYC0tZnVsbC0ke2lzTW9iaWxlID8gXCJtb2JpbGVcIiA6IFwiZGVza3RvcFwifWBdOiBpc01vYmlsZSB8fCBpc0Z1bGxTaXplXHJcbiAgICAgICAgICAgICAgICB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGFsLWhlYWRlclwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tbW9iaWxlXCI6IGlzTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tZGVza3RvcC1jb250ZW50XCI6ICFpc01vYmlsZSAmJiBoZWFkZXJFbGVtZW50cyA9PT0gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCItLWRlc2t0b3BcIjogIWlzTW9iaWxlICYmIGhlYWRlckVsZW1lbnRzID09PSAzXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZGl0aW9uYWwtYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbmRCeVR5cGUoY2hpbGRyZW4sIFwiQnV0dG9uc1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNNb2JpbGUgPyBtb2JpbGVCdXR0b25zKCkgOiBkZXNrdG9wQnV0dG9ucygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbmRCeVR5cGUoY2hpbGRyZW4sIFwiSGVhZGVyXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpbmRCeVR5cGUoY2hpbGRyZW4sIFwiQm9keVwiKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7aXNNb2JpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVudS1iYWNrZ3JvdW5kXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLWFjdGl2ZVwiOiBtb2JpbGVGb290ZXJPcGVuZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGFsLWZvb3RlclwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tbW9iaWxlXCI6IGlzTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0tYWN0aXZlXCI6IG1vYmlsZUZvb3Rlck9wZW5lZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzTW9iaWxlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmluZEJ5VHlwZShjaGlsZHJlbiwgXCJGb290ZXJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbmRCeVR5cGUoY2hpbGRyZW4sIFwiSGVhZGVyQnV0dG9uc1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZEJ5VHlwZShjaGlsZHJlbiwgXCJGb290ZXJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC8+IDogbnVsbFxyXG59O1xyXG5cclxuTW9kYWwuQnV0dG9ucyA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkJ1dHRvbnNcIik7XHJcbk1vZGFsLkhlYWRlciA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkhlYWRlclwiKTtcclxuTW9kYWwuQm9keSA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkJvZHlcIik7XHJcbk1vZGFsLkZvb3RlciA9IGNyZWF0ZVN1YkNvbXBvbmVudChcIkZvb3RlclwiKTtcclxuXHJcbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIG9wZW5Nb2RhbDogZmFsc2UsXHJcbiAgICBzaG93UG9wb3ZlcjogZmFsc2UsXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IGZhbHNlLFxyXG4gICAgb25DbG9zZTogbm9vcCxcclxuICAgIHBvcG92ZXJDb250ZW50OiB7fSxcclxuICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgaGVhZGVyRWxlbWVudHM6IDIsXHJcbiAgICBzaG93UHJpbnQ6IGZhbHNlLFxyXG4gICAgY2xvc2VSZWY6IFJlYWN0LmNyZWF0ZVJlZigpLFxyXG4gICAgd2l0aEFuaW1hdGlvbjogZmFsc2UsXHJcbiAgICBvblNpemVDaGFuZ2VkOiBub29wXHJcbn1cclxuXHJcbk1vZGFsLnByb3BUeXBlcyA9IHtcclxuICAgIG9wZW5Nb2RhbDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzaG93UG9wb3ZlcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtYW5hZ2VPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBwb3BvdmVyQ29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICB0YWdsaW5lOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgYWN0aW9uczogUHJvcFR5cGVzLm9iamVjdFxyXG4gICAgfSksXHJcbiAgICBhbmltYXRpb246IFByb3BUeXBlcy5ib29sLFxyXG4gICAgZGlzcGxheTogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgICAgICAnYmxvY2snLFxyXG4gICAgICAgICdpbmxpbmUnLFxyXG4gICAgICAgICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICdncmlkJyxcclxuICAgICAgICAnZmxleCcsXHJcbiAgICAgICAgJ2lubGluZS1ncmlkJyxcclxuICAgICAgICAnaW5saW5lLWZsZXgnLFxyXG4gICAgICAgICdub25lJ1xyXG4gICAgXSksXHJcbiAgICBoZWFkZXJFbGVtZW50czogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHNob3dQcmludDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjbG9zZVJlZjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIG9uU2l6ZUNoYW5nZWQ6IFByb3BUeXBlcy5mdW5jXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsIl19