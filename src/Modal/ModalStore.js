import {SWF_MODAL} from "./constants";
import {action, computed, makeObservable, observable} from "mobx"

export class ModalStore {
    currentStatus;
    openModal;
    mobileFooterOpened;

    constructor({currentStatus = SWF_MODAL.MODAL_SIZE.DEFAULT, openModal = false, mobileFooterOpened = false}) {
        makeObservable(this, {
            currentStatus: observable,
            openModal: observable,
            mobileFooterOpened: observable,
            setCurrentStatus: action,
            setModalOpened: action,
            setMobileFooterOpened: action,
            isFullSize: computed
        })

        this.currentStatus = currentStatus;
        this.openModal = openModal;
        this.mobileFooterOpened = mobileFooterOpened;
    }

    get isFullSize () {
        return this.currentStatus === SWF_MODAL.MODAL_SIZE.FULL;
    }

    setCurrentStatus (status) {
        this.currentStatus = status;
    }

    setModalOpened (status) {
        this.openModal = status;
    }

    setMobileFooterOpened (status) {
        this.mobileFooterOpened = status
    }
}
