"use strict";

var _Button = _interopRequireDefault(require("../Button/Button"));

var _constants = require("./constants");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ModalDesktopButtons(props) {
  var _this = this;

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
        return _this.setState({
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
        return _this.setState({
          currentStatus: _constants.SWF_MODAL.MODAL_SIZE.FULL
        });
      }
    })]
  });
}
//# sourceMappingURL=ModalDesktopButtons.js.map