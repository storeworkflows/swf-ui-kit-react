import {SWF_MODAL} from "./constants";
import {makeObservable} from "mobx"

export class ModalStore {
    currentStatus;
    modalOpened;
    mobileFooterOpened;

    constructor({currentStatus, modalOpened, mobileFooterOpened}) {
        makeObservable(this, {
            currentStatus:  SWF_MODAL.MODAL_SIZE.DEFAULT,
            modalOpened: false,
            mobileFooterOpened: false,
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
