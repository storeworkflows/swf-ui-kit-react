"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalStore = void 0;

var _constants = require("./constants");

var _mobx = require("mobx");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ModalStore = /*#__PURE__*/function () {
  function ModalStore(_ref) {
    var currentStatus = _ref.currentStatus,
        modalOpened = _ref.modalOpened,
        mobileFooterOpened = _ref.mobileFooterOpened;

    _classCallCheck(this, ModalStore);

    this.currentStatus = void 0;
    this.modalOpened = void 0;
    this.mobileFooterOpened = void 0;
    (0, _mobx.makeObservable)(this, {
      currentStatus: _constants.SWF_MODAL.MODAL_SIZE.DEFAULT,
      modalOpened: false,
      mobileFooterOpened: false
    });
    this.currentStatus = currentStatus;
    this.modalOpened = modalOpened;
    this.mobileFooterOpened = mobileFooterOpened;
  }

  _createClass(ModalStore, [{
    key: "setCurrentStatus",
    value: function setCurrentStatus(status) {
      this.currentStatus = status;
    }
  }, {
    key: "setModalOpened",
    value: function setModalOpened(status) {
      this.modalOpened = status;
    }
  }, {
    key: "setMobileFooterOpened",
    value: function setMobileFooterOpened(status) {
      this.mobileFooterOpened = status;
    }
  }]);

  return ModalStore;
}();

exports.ModalStore = ModalStore;
//# sourceMappingURL=ModalStore.js.map