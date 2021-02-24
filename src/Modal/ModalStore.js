import {SWF_MODAL} from "./constants";
import {action, makeObservable, observable} from "mobx"

export class ModalStore {
    currentStatus;
    modalOpened;
    mobileFooterOpened;

    constructor({currentStatus = SWF_MODAL.MODAL_SIZE.DEFAULT, modalOpened = false, mobileFooterOpened = false}) {
        makeObservable(this, {
            currentStatus: observable,
            modalOpened: observable,
            mobileFooterOpened: observable,
            setCurrentStatus: action,
            setModalOpened: action,
            setMobileFooterOpened: action
        })

        this.currentStatus = currentStatus;
        this.modalOpened = modalOpened;
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
