"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Button = _interopRequireDefault(require("../Button/Button"));

var _constants = require("./constants");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ModalStore = require("./ModalStore");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ModalDesktopButtons = function ModalDesktopButtons(props) {
  var modalStore = props.modalStore;
  console.log(props);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
      icon: "x",
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
        return modalStore.openModal(true);
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
      icon: modalStore.isFullSize ? "x" : "x",
      variant: "tertiary",
      bare: true,
      size: "md",
      configAria: {
        "button": {
          "aria-label": "Expand"
        }
      },
      tooltipContent: modalStore.isFullSize ? "Collapse" : "Expand",
      onClick: function onClick() {
        return modalStore.currentStatus(_constants.SWF_MODAL.MODAL_SIZE.FULL);
      }
    })]
  });
};

ModalDesktopButtons.propTypes = {
  modalStore: _propTypes["default"].instanceOf(_ModalStore.ModalStore)
};
var _default = ModalDesktopButtons;
exports["default"] = _default;
//# sourceMappingURL=ModalDesktopButtons.js.map