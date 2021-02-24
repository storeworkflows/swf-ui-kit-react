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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Nb2RhbC9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInByb3BzIiwibW9kYWxSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImV4cGFuZCIsImJpbmQiLCJkZXNrdG9wQnV0dG9ucyIsIm1vYmlsZUJ1dHRvbnMiLCJyZW5kZXJQb3BvdmVyIiwic3RhdGUiLCJjdXJyZW50U3RhdHVzIiwiU1dGX01PREFMIiwiTU9EQUxfU0laRSIsIkRFRkFVTFQiLCJtb2RhbE9wZW5lZCIsIm1vYmlsZUZvb3Rlck9wZW5lZCIsImlzRnVsbFNpemUiLCJGVUxMIiwibW9kYWxOb2RlIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRTdGF0ZSIsInNldEF0dHJpYnV0ZSIsInNob3dQb3BvdmVyIiwicG9wb3ZlckNvbnRlbnQiLCJ0YWdsaW5lIiwiY29udGVudCIsImFjdGlvbnMiLCJfY2xvc2VNb2RhbCIsImRpc3BsYXkiLCJoZWFkZXJFbGVtZW50cyIsImlzTW9iaWxlIiwiTU9CSUxFX1JFR0VYUCIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzdHlsZXMiLCJlbG0iLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvcGVuTW9kYWwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic2hhcGUiLCJvYmplY3QiLCJvbmVPZiIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEs7Ozs7O0FBQ0YsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLFFBQUwsZ0JBQWdCQyxLQUFLLENBQUNDLFNBQU4sRUFBaEI7QUFDQSxVQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZQyxJQUFaLCtCQUFkO0FBQ0Es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b250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQge1NXRl9NT0RBTH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b24vQnV0dG9uXCI7XHJcblxyXG5jbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm1vZGFsUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICAgICAgdGhpcy5leHBhbmQgPSB0aGlzLmV4cGFuZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGVza3RvcEJ1dHRvbnMgPSB0aGlzLmRlc2t0b3BCdXR0b25zLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5tb2JpbGVCdXR0b25zID0gdGhpcy5tb2JpbGVCdXR0b25zLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQb3BvdmVyID0gdGhpcy5yZW5kZXJQb3BvdmVyLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0dXM6IFNXRl9NT0RBTC5NT0RBTF9TSVpFLkRFRkFVTFQsXHJcbiAgICAgICAgICAgIG1vZGFsT3BlbmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgbW9iaWxlRm9vdGVyT3BlbmVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBhbmQoKSB7XHJcbiAgICAgICAgY29uc3QgaXNGdWxsU2l6ZSA9IHRoaXMuc3RhdGUuY3VycmVudFN0YXR1cyA9PT0gU1dGX01PREFMLk1PREFMX1NJWkUuRlVMTDtcclxuXHJcbiAgICAgICAgY29uc3QgbW9kYWxOb2RlID0gdGhpcy5tb2RhbFJlZi5jdXJyZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWRpYWxvZ1wiKTtcclxuXHJcbiAgICAgICAgaWYgKGlzRnVsbFNpemUpIHtcclxuICAgICAgICAgICAgbW9kYWxOb2RlLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdHVzOiBTV0ZfTU9EQUwuTU9EQUxfU0laRS5ERUZBVUxUfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1vZGFsTm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDk4JTtcIik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXR1czogU1dGX01PREFMLk1PREFMX1NJWkUuRlVMTH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcG92ZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3Nob3dQb3BvdmVyLCBwb3BvdmVyQ29udGVudDoge3RhZ2xpbmUsIGNvbnRlbnQsIGFjdGlvbnN9fSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmIChzaG93UG9wb3Zlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPG5vdy1wb3BvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFyZ2V0XCI6IFwiYm90dG9tLWVuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IFwidG9wLWVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxub3ctYnV0dG9uLWljb25pYyBpY29uPVwiY2xvc2UtZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhcmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJ0cmlnZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnQXJpYT17e1wiYnV0dG9uXCI6IHtcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwifX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50PVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5vdy10ZW1wbGF0ZS1jYXJkLW9tbmljaGFubmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnbGluZT17dGFnbGluZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17Y29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17YWN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9ub3ctcG9wb3Zlcj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG5vdy1idXR0b24taWNvbmljIGljb249XCJjbG9zZS1maWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJ0cmlnZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ0FyaWE9e3tcImJ1dHRvblwiOiB7XCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIn19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcENvbnRlbnQ9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbi1jbGljaz17X2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGRlc2t0b3BCdXR0b25zKCkge1xyXG4gICAgICAgIGNvbnN0IGlzRnVsbFNpemUgPSB0aGlzLnN0YXRlLmN1cnJlbnRTdGF0dXMgPT09IFNXRl9NT0RBTC5NT0RBTF9TSVpFLkZVTEw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJhcnJvd3MtYW5nbGUtZXhwYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnQXJpYT17e1wiYnV0dG9uXCI6IHtcImFyaWEtbGFiZWxcIjogXCJDb2xsYXBzZVwifX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50PVwiQ29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHttb2RhbE9wZW5lZDogdHJ1ZX0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17aXNGdWxsU2l6ZSA/IFwiY29sbGFwc2UtZmlsbFwiIDogXCJhcnJvd3MtYW5nbGUtZXhwYW5kXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnQXJpYT17e1wiYnV0dG9uXCI6IHtcImFyaWEtbGFiZWxcIjogXCJFeHBhbmRcIn19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50PXtpc0Z1bGxTaXplID8gXCJDb2xsYXBzZVwiIDogXCJFeHBhbmRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdHVzOiBTV0ZfTU9EQUwuTU9EQUxfU0laRS5GVUxMfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUG9wb3ZlcigpfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgbW9iaWxlQnV0dG9ucygpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPG5vdy1idXR0b24taWNvbmljXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFycm93LWxlZnQtZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBiYXJlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnQXJpYT17e1wiYnV0dG9uXCI6IHtcImFyaWEtbGFiZWxcIjogXCJCYWNrXCJ9fX1cclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwQ29udGVudD1cIkJhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe21vZGFsT3BlbmVkOiBmYWxzZX0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7ZGlzcGxheSwgaGVhZGVyRWxlbWVudHN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7bW9iaWxlRm9vdGVyT3BlbmVkfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gU1dGX01PREFMLk1PQklMRV9SRUdFWFAudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICg8PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtb3ZlcmxheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWxtID0+IHRoaXMubW9kYWxSZWYuY3VycmVudCA9IGVsbX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kYWwtZGlhbG9nXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYC0tJHtkaXNwbGF5fWBdOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2AtLWZ1bGxgXTogaXNNb2JpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kYWwtaGVhZGVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLW1vYmlsZVwiOiBpc01vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tZGVza3RvcC1jb250ZW50XCI6ICFpc01vYmlsZSAmJiBoZWFkZXJFbGVtZW50cyA9PT0gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tZGVza3RvcFwiOiAhaXNNb2JpbGUgJiYgaGVhZGVyRWxlbWVudHMgPT09IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNNb2JpbGUgPyB0aGlzLm1vYmlsZUJ1dHRvbnMoKSA6IHRoaXMuZGVza3RvcEJ1dHRvbnMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJoZWFkZXJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJFbGVtZW50cyA9PT0gMyA/IDxkaXYgY2xhc3NOYW1lPVwiYWRkaXRpb25hbC1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNNb2JpbGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ctYnV0dG9uLWljb25pY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZWxsaXBzaXMtaC1maWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdBcmlhPXt7XCJidXR0b25cIjoge1wiYXJpYS1sYWJlbFwiOiBcIlNob3cgQWN0aW9uc1wifX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50PVwiU2hvdyBBY3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7bW9iaWxlRm9vdGVyT3BlbmVkOiB0cnVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImhlYWRlci1idXR0b25zXCIvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiYm9keVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTW9iaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVudS1iYWNrZ3JvdW5kXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tYWN0aXZlXCI6IG1vYmlsZUZvb3Rlck9wZW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kYWwtZm9vdGVyXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLW1vYmlsZVwiOiBpc01vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tYWN0aXZlXCI6IG1vYmlsZUZvb3Rlck9wZW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc01vYmlsZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJmb290ZXJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyLWJ1dHRvbnNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJmb290ZXJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuTW9kYWwuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgb3Blbk1vZGFsOiBmYWxzZSxcclxuICAgIHNob3dQb3BvdmVyOiBmYWxzZSxcclxuICAgIHBvcG92ZXJDb250ZW50OiB7fSxcclxuICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgaGVhZGVyRWxlbWVudHM6IDJcclxufVxyXG5cclxuTW9kYWwucHJvcFR5cGVzID0ge1xyXG4gICAgb3Blbk1vZGFsOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNob3dQb3BvdmVyOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHBvcG92ZXJDb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHRhZ2xpbmU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBhY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0XHJcbiAgICB9KSxcclxuICAgIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICAgICAgJ2Jsb2NrJyxcclxuICAgICAgICAnaW5saW5lJyxcclxuICAgICAgICAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAnZ3JpZCcsXHJcbiAgICAgICAgJ2ZsZXgnLFxyXG4gICAgICAgICdpbmxpbmUtZ3JpZCcsXHJcbiAgICAgICAgJ2lubGluZS1mbGV4JyxcclxuICAgICAgICAnbm9uZSdcclxuICAgIF0pLFxyXG4gICAgaGVhZGVyRWxlbWVudHM6IFByb3BUeXBlcy5udW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWwiXX0=