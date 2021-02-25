"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Button = _interopRequireDefault(require("../Button/Button"));

var _jsxRuntime = require("react/jsx-runtime");

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MobileButtons = function MobileButtons() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
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
        return _this.setState({
          modalOpened: false
        });
      }
    })
  });
};

var _default = MobileButtons;
exports["default"] = _default;
//# sourceMappingURL=ModalMobileButtons.js.map