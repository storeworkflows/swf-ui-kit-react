"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames2 = _interopRequireDefault(require("classnames"));

var _constants = require("./constants");

var _styles = _interopRequireDefault(require("./styles.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _react = require("react");

var _mobxReactLite = require("mobx-react-lite");

var _ModalStore = require("./ModalStore");

var _jsxRuntime = require("react/jsx-runtime");

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Modal = (0, _mobxReactLite.observer)(function (props) {
  var _classnames;

  var modalRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(function () {
    return new _ModalStore.ModalStore(_objectSpread({}, props));
  }),
      _useState2 = _slicedToArray(_useState, 1),
      modalStore = _useState2[0];

  var status = modalStore.status,
      modalOpened = modalStore.modalOpened,
      mobileFooterOpened = modalStore.mobileFooterOpened;
  var display = props.display,
      headerElements = props.headerElements;

  var isMobile = _constants.SWF_MODAL.MOBILE_REGEXP.test(navigator.userAgent);

  console.log(status, modalOpened, mobileFooterOpened);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
      type: "text/css",
      children: _styles["default"]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "modal-overlay",
      ref: modalRef,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "modal",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _classnames2["default"])((_classnames = {
            "modal-dialog": true
          }, _defineProperty(_classnames, "--".concat(display), true), _defineProperty(_classnames, "--full", isMobile), _classnames)),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: (0, _classnames2["default"])({
              "modal-header": true,
              "--mobile": isMobile,
              "--desktop-content": !isMobile && headerElements === 2,
              "--desktop": !isMobile && headerElements === 3
            }),
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "main-buttons"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "header-content",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("slot", {
                name: "header"
              })
            }), headerElements === 3 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "additional-buttons",
              children: isMobile ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
                icon: "x",
                variant: "primary",
                bare: true,
                size: "md",
                configAria: {
                  "button": {
                    "aria-label": "Show Actions"
                  }
                },
                tooltipContent: "Show Actions",
                onClick: function onClick() {
                  return _this.setState({
                    mobileFooterOpened: true
                  });
                }
              }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("slot", {
                name: "header-buttons"
              })
            }) : ""]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("slot", {
              name: "body"
            })
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
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("slot", {
                name: "footer"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("slot", {
                name: "header-buttons"
              })]
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("slot", {
              name: "footer"
            })
          })]
        })
      })
    })]
  });
}); // class Modal extends React.Component {
//     constructor(props) {
//         super(props);
//         this.modalRef = React.createRef();
//         this.expand = this.expand.bind(this);
//         this.desktopButtons = this.desktopButtons.bind(this);
//         this.mobileButtons = this.mobileButtons.bind(this);
//         this.renderPopover = this.renderPopover.bind(this);
//
//         this.state = {
//             currentStatus: SWF_MODAL.MODAL_SIZE.DEFAULT,
//             modalOpened: false,
//             mobileFooterOpened: false
//         }
//     }
//
//     expand() {
//         const isFullSize = this.state.currentStatus === SWF_MODAL.MODAL_SIZE.FULL;
//
//         const modalNode = this.modalRef.current
//             .querySelector(".modal-dialog");
//
//         if (isFullSize) {
//             modalNode.removeAttribute("style");
//             this.setState({currentStatus: SWF_MODAL.MODAL_SIZE.DEFAULT});
//             return;
//         }
//
//         modalNode.setAttribute("style", "width: 100%; height: 98%;");
//         this.setState({currentStatus: SWF_MODAL.MODAL_SIZE.FULL});
//     }
//
//     renderPopover() {
//         const {showPopover, popoverContent: {tagline, content, actions}} = this.props;
//
//         if (showPopover) {
//             return (
//                 <now-popover
//                     positions={[
//                         {
//                             "target": "bottom-end",
//                             "content": "top-end"
//                         }
//                     ]}
//                 >
//                     <Button icon="x"
//                             variant="tertiary"
//                             bare={true}
//                             size="md"
//                             slot="trigger"
//                             configAria={{"button": {"aria-label": "Close"}}}
//                             tooltipContent="Close"
//                     />
//                     <now-template-card-omnichannel
//                         slot="content"
//                         tagline={tagline}
//                         content={content}
//                         actions={actions}
//                     />
//                 </now-popover>
//             )
//         }
//
//         return (
//             <Button icon="x"
//                     variant="tertiary"
//                     bare={true}
//                     size="md"
//                     slot="trigger"
//                     configAria={{"button": {"aria-label": "Close"}}}
//                     tooltipContent="Close"
//                     onClick={() => void 0}
//             />
//         )
//     }
//
//     desktopButtons() {
//         const isFullSize = this.state.currentStatus === SWF_MODAL.MODAL_SIZE.FULL;
//
//         return (
//             <>
//                 <Button icon="arrows-angle-expand"
//                         variant="tertiary"
//                         bare={true}
//                         size="md"
//                         configAria={{"button": {"aria-label": "Collapse"}}}
//                         tooltipContent="Collapse"
//                         onClick={() => this.setState({modalOpened: true})}
//                 />
//                 <Button icon={isFullSize ? "collapse-fill" : "arrows-angle-expand"}
//                         variant="tertiary"
//                         bare={true}
//                         size="md"
//                         configAria={{"button": {"aria-label": "Expand"}}}
//                         tooltipContent={isFullSize ? "Collapse" : "Expand"}
//                         onClick={() => this.setState({currentStatus: SWF_MODAL.MODAL_SIZE.FULL})}
//                 />
//                 {this.renderPopover()}
//             </>
//         )
//     }
//
//     mobileButtons() {
//         return (
//             <>
//                 <Button
//                     icon="arrow-left-fill"
//                     variant="tertiary"
//                     bare={true}
//                     size="lg"
//                     configAria={{"button": {"aria-label": "Back"}}}
//                     tooltipContent="Back"
//                     onClick={() => this.setState({modalOpened: false})}
//                 />
//             </>
//         )
//     }
//
//     render() {
//         const {display, headerElements} = this.props;
//         const {mobileFooterOpened} = this.state;
//
//         const isMobile = SWF_MODAL.MOBILE_REGEXP.test(navigator.userAgent);
//
//         return (<>
//                 <style type="text/css">{styles}</style>
//                 <div className="modal-overlay"
//                      ref={elm => this.modalRef.current = elm}
//                 >
//                     <div className="modal">
//                         <div className={classnames({
//                             "modal-dialog": true,
//                             [`--${display}`]: true,
//                             [`--full`]: isMobile
//                         })}>
//                             <div className={classnames({
//                                 "modal-header": true,
//                                 "--mobile": isMobile,
//                                 "--desktop-content": !isMobile && headerElements === 2,
//                                 "--desktop": !isMobile && headerElements === 3
//                             })}>
//                                 <div className="main-buttons">
//                                     {isMobile ? this.mobileButtons() : this.desktopButtons()}
//                                 </div>
//                                 <div className="header-content">
//                                     <slot name="header"/>
//                                 </div>
//                                 {
//                                     headerElements === 3 ? <div className="additional-buttons">
//                                         {isMobile ?
//                                             <now-button-iconic
//                                                 icon="ellipsis-h-fill"
//                                                 variant="primary"
//                                                 bare={true}
//                                                 size="md"
//                                                 configAria={{"button": {"aria-label": "Show Actions"}}}
//                                                 tooltipContent="Show Actions"
//                                                 onClick={() => this.setState({mobileFooterOpened: true})}
//                                             />
//                                             :
//                                             <slot name="header-buttons"/>}
//                                     </div> : ""
//                                 }
//
//                             </div>
//                             <div
//                                 className="modal-body"
//                             >
//                                 <slot name="body"/>
//                             </div>
//                             {isMobile
//                                 ?
//                                 <div
//                                     className={classnames({
//                                         "menu-background": true,
//                                         "--active": mobileFooterOpened
//                                     })}
//                                 />
//                                 :
//                                 ""}
//                             <div className={classnames({
//                                 "modal-footer": true,
//                                 "--mobile": isMobile,
//                                 "--active": mobileFooterOpened
//                             })}>
//                                 {isMobile ?
//                                     <div className="footer-content">
//                                         <slot name="footer"/>
//                                         <slot name="header-buttons"/>
//                                     </div>
//                                     :
//                                     <slot name="footer"/>
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

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
//# sourceMappingURL=Modal.js.map