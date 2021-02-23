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
      modalOpened: false,
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
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("now-button-iconic", {
            icon: "close-fill",
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

      return /*#__PURE__*/(0, _jsxRuntime.jsx)("now-button-iconic", {
        icon: "close-fill",
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
        "on-click": _closeModal
      });
    }
  }, {
    key: "desktopButtons",
    value: function desktopButtons() {
      var _this2 = this;

      var isFullSize = this.state.currentStatus === _constants.SWF_MODAL.MODAL_SIZE.FULL;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
          icon: "arrows-angle-expand",
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
            return _this2.setState({
              modalOpened: true
            });
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
          icon: isFullSize ? "collapse-fill" : "arrows-angle-expand",
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
            return _this2.setState({
              currentStatus: _constants.SWF_MODAL.MODAL_SIZE.FULL
            });
          }
        }), this.renderPopover()]
      });
    }
  }, {
    key: "mobileButtons",
    value: function mobileButtons() {
      var _this3 = this;

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("now-button-iconic", {
          icon: "arrow-left-fill",
          variant: "tertiary",
          bare: true,
          size: "lg",
          configAria: {
            "button": {
              "aria-label": "Back"
            }
          },
          tooltipContent: "Back",
          onClick: function onClick() {
            return _this3.setState({
              modalOpened: false
            });
          }
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this,
          _classnames;

      var _this$props2 = this.props,
          display = _this$props2.display,
          headerElements = _this$props2.headerElements;
      var mobileFooterOpened = this.state.mobileFooterOpened;

      var isMobile = _constants.SWF_MODAL.MOBILE_REGEXP.test(navigator.userAgent);

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
          type: "text/css",
          children: _styles["default"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "modal-overlay",
          ref: function ref(elm) {
            return _this4.modalRef.current = elm;
          },
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
                  className: "main-buttons",
                  children: isMobile ? this.mobileButtons() : this.desktopButtons()
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "header-content",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("slot", {
                    name: "header"
                  })
                }), headerElements === 3 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "additional-buttons",
                  children: isMobile ? /*#__PURE__*/(0, _jsxRuntime.jsx)("now-button-iconic", {
                    icon: "ellipsis-h-fill",
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
                      return _this4.setState({
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
    }
  }]);

  return Modal;
}(React.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Nb2RhbC9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInByb3BzIiwibW9kYWxSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImV4cGFuZCIsImJpbmQiLCJkZXNrdG9wQnV0dG9ucyIsIm1vYmlsZUJ1dHRvbnMiLCJyZW5kZXJQb3BvdmVyIiwic3RhdGUiLCJjdXJyZW50U3RhdHVzIiwiU1dGX01PREFMIiwiTU9EQUxfU0laRSIsIkRFRkFVTFQiLCJtb2RhbE9wZW5lZCIsIm1vYmlsZUZvb3Rlck9wZW5lZCIsImlzRnVsbFNpemUiLCJGVUxMIiwibW9kYWxOb2RlIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRTdGF0ZSIsInNldEF0dHJpYnV0ZSIsInNob3dQb3BvdmVyIiwicG9wb3ZlckNvbnRlbnQiLCJ0YWdsaW5lIiwiY29udGVudCIsImFjdGlvbnMiLCJfY2xvc2VNb2RhbCIsImRpc3BsYXkiLCJoZWFkZXJFbGVtZW50cyIsImlzTW9iaWxlIiwiTU9CSUxFX1JFR0VYUCIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzdHlsZXMiLCJlbG0iLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvcGVuTW9kYWwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic2hhcGUiLCJvYmplY3QiLCJvbmVPZiIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEs7Ozs7O0FBQ0YsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFFBQUwsZ0JBQWdCQyxLQUFLLENBQUNDLFNBQU4sRUFBaEI7QUFDQSxVQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZQyxJQUFaLCtCQUFkO0FBQ0Es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b250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7U1dGX01PREFMfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL0J1dHRvbi9CdXR0b25cIjtcblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLmV4cGFuZCA9IHRoaXMuZXhwYW5kLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGVza3RvcEJ1dHRvbnMgPSB0aGlzLmRlc2t0b3BCdXR0b25zLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW9iaWxlQnV0dG9ucyA9IHRoaXMubW9iaWxlQnV0dG9ucy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlclBvcG92ZXIgPSB0aGlzLnJlbmRlclBvcG92ZXIuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY3VycmVudFN0YXR1czogU1dGX01PREFMLk1PREFMX1NJWkUuREVGQVVMVCxcbiAgICAgICAgICAgIG1vZGFsT3BlbmVkOiBmYWxzZSxcbiAgICAgICAgICAgIG1vYmlsZUZvb3Rlck9wZW5lZDogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cGFuZCgpIHtcbiAgICAgICAgY29uc3QgaXNGdWxsU2l6ZSA9IHRoaXMuc3RhdGUuY3VycmVudFN0YXR1cyA9PT0gU1dGX01PREFMLk1PREFMX1NJWkUuRlVMTDtcblxuICAgICAgICBjb25zdCBtb2RhbE5vZGUgPSB0aGlzLm1vZGFsUmVmLmN1cnJlbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWRpYWxvZ1wiKTtcblxuICAgICAgICBpZiAoaXNGdWxsU2l6ZSkge1xuICAgICAgICAgICAgbW9kYWxOb2RlLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXR1czogU1dGX01PREFMLk1PREFMX1NJWkUuREVGQVVMVH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9kYWxOb2RlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDEwMCU7IGhlaWdodDogOTglO1wiKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXR1czogU1dGX01PREFMLk1PREFMX1NJWkUuRlVMTH0pO1xuICAgIH1cblxuICAgIHJlbmRlclBvcG92ZXIoKSB7XG4gICAgICAgIGNvbnN0IHtzaG93UG9wb3ZlciwgcG9wb3ZlckNvbnRlbnQ6IHt0YWdsaW5lLCBjb250ZW50LCBhY3Rpb25zfX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChzaG93UG9wb3Zlcikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bm93LXBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YXJnZXRcIjogXCJib3R0b20tZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IFwidG9wLWVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bm93LWJ1dHRvbi1pY29uaWMgaWNvbj1cImNsb3NlLWZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhcmU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cInRyaWdnZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnQXJpYT17e1wiYnV0dG9uXCI6IHtcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwifX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwQ29udGVudD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPG5vdy10ZW1wbGF0ZS1jYXJkLW9tbmljaGFubmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbG90PVwiY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdsaW5lPXt0YWdsaW5lfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17Y29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9ub3ctcG9wb3Zlcj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bm93LWJ1dHRvbi1pY29uaWMgaWNvbj1cImNsb3NlLWZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJ0cmlnZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdBcmlhPXt7XCJidXR0b25cIjoge1wiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCJ9fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwQ29udGVudD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbi1jbGljaz17X2Nsb3NlTW9kYWx9XG4gICAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgZGVza3RvcEJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IGlzRnVsbFNpemUgPSB0aGlzLnN0YXRlLmN1cnJlbnRTdGF0dXMgPT09IFNXRl9NT0RBTC5NT0RBTF9TSVpFLkZVTEw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwiYXJyb3dzLWFuZ2xlLWV4cGFuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGVydGlhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWdBcmlhPXt7XCJidXR0b25cIjoge1wiYXJpYS1sYWJlbFwiOiBcIkNvbGxhcHNlXCJ9fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50PVwiQ29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7bW9kYWxPcGVuZWQ6IHRydWV9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17aXNGdWxsU2l6ZSA/IFwiY29sbGFwc2UtZmlsbFwiIDogXCJhcnJvd3MtYW5nbGUtZXhwYW5kXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhcmU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ0FyaWE9e3tcImJ1dHRvblwiOiB7XCJhcmlhLWxhYmVsXCI6IFwiRXhwYW5kXCJ9fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcENvbnRlbnQ9e2lzRnVsbFNpemUgPyBcIkNvbGxhcHNlXCIgOiBcIkV4cGFuZFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdHVzOiBTV0ZfTU9EQUwuTU9EQUxfU0laRS5GVUxMfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQb3BvdmVyKCl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIG1vYmlsZUJ1dHRvbnMoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxub3ctYnV0dG9uLWljb25pY1xuICAgICAgICAgICAgICAgICAgICBpY29uPVwiYXJyb3ctbGVmdC1maWxsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgYmFyZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnQXJpYT17e1wiYnV0dG9uXCI6IHtcImFyaWEtbGFiZWxcIjogXCJCYWNrXCJ9fX1cbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcENvbnRlbnQ9XCJCYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7bW9kYWxPcGVuZWQ6IGZhbHNlfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7ZGlzcGxheSwgaGVhZGVyRWxlbWVudHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qge21vYmlsZUZvb3Rlck9wZW5lZH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gU1dGX01PREFMLk1PQklMRV9SRUdFWFAudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIlxuICAgICAgICAgICAgICAgICAgICAgcmVmPXtlbG0gPT4gdGhpcy5tb2RhbFJlZi5jdXJyZW50ID0gZWxtfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kYWwtZGlhbG9nXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2AtLSR7ZGlzcGxheX1gXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYC0tZnVsbGBdOiBpc01vYmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RhbC1oZWFkZXJcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLW1vYmlsZVwiOiBpc01vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLWRlc2t0b3AtY29udGVudFwiOiAhaXNNb2JpbGUgJiYgaGVhZGVyRWxlbWVudHMgPT09IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1kZXNrdG9wXCI6ICFpc01vYmlsZSAmJiBoZWFkZXJFbGVtZW50cyA9PT0gM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc01vYmlsZSA/IHRoaXMubW9iaWxlQnV0dG9ucygpIDogdGhpcy5kZXNrdG9wQnV0dG9ucygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImhlYWRlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckVsZW1lbnRzID09PSAzID8gPGRpdiBjbGFzc05hbWU9XCJhZGRpdGlvbmFsLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNNb2JpbGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bm93LWJ1dHRvbi1pY29uaWNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJlbGxpcHNpcy1oLWZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdBcmlhPXt7XCJidXR0b25cIjoge1wiYXJpYS1sYWJlbFwiOiBcIlNob3cgQWN0aW9uc1wifX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwQ29udGVudD1cIlNob3cgQWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHttb2JpbGVGb290ZXJPcGVuZWQ6IHRydWV9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyLWJ1dHRvbnNcIi8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImJvZHlcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTW9iaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lbnUtYmFja2dyb3VuZFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1hY3RpdmVcIjogbW9iaWxlRm9vdGVyT3BlbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RhbC1mb290ZXJcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLW1vYmlsZVwiOiBpc01vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLWFjdGl2ZVwiOiBtb2JpbGVGb290ZXJPcGVuZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc01vYmlsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImZvb3RlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyLWJ1dHRvbnNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJmb290ZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgb3Blbk1vZGFsOiBmYWxzZSxcbiAgICBzaG93UG9wb3ZlcjogZmFsc2UsXG4gICAgcG9wb3ZlckNvbnRlbnQ6IHt9LFxuICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgIGhlYWRlckVsZW1lbnRzOiAyXG59XG5cbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgICBvcGVuTW9kYWw6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dQb3BvdmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwb3BvdmVyQ29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgdGFnbGluZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgYWN0aW9uczogUHJvcFR5cGVzLm9iamVjdFxuICAgIH0pLFxuICAgIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICAgICdibG9jaycsXG4gICAgICAgICdpbmxpbmUnLFxuICAgICAgICAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgJ2dyaWQnLFxuICAgICAgICAnZmxleCcsXG4gICAgICAgICdpbmxpbmUtZ3JpZCcsXG4gICAgICAgICdpbmxpbmUtZmxleCcsXG4gICAgICAgICdub25lJ1xuICAgIF0pLFxuICAgIGhlYWRlckVsZW1lbnRzOiBQcm9wVHlwZXMubnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsIl19