import {SWF_MODAL} from "./constants";
import {makeObservable} from "mobx"

class ModalStore {
    currentStatus =  SWF_MODAL.MODAL_SIZE.DEFAULT;
    modalOpened =  false;
    mobileFooterOpened = false;

    constructor() {
        makeObservable(this)
    }

    setCurrentStatus (status) {
        this.currentStatus = status;
    }

    setModalOpened (status) {
        this.modalOpened = status;
    }

    mobileFooterOpened (status) {
        this.mobileFooterOpened = status
    }
}