import {SWF_MODAL} from "./constants";
import {action, makeObservable, observable} from "mobx"

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
            setMobileFooterOpened: action
        })

        this.currentStatus = currentStatus;
        this.openModal = modalOpened;
        this.mobileFooterOpened = mobileFooterOpened;
    }

    setCurrentStatus (status) {
        this.currentStatus = status;
    }

    setModalOpened (status) {
        this.modalOpened = status;
    }

    setMobileFooterOpened (status) {
        this.mobileFooterOpened = status
    }
}
