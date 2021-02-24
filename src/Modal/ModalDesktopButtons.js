import Button from "../Button/Button";
import {SWF_MODAL} from "./constants";
import PropTypes from "prop-types";
import {ModalStore} from "./ModalStore";

const ModalDesktopButtons = (modalStore) => {
    return ( <>
        <Button icon="x"
                variant="tertiary"
                bare={true}
                size="md"
                configAria={{"button": {"aria-label": "Collapse"}}}
                tooltipContent="Collapse"
                onClick={() => modalStore.openModal(true)}
        />
        <Button icon={modalStore.isFullSize ? "x" : "x"}
                variant="tertiary"
                bare={true}
                size="md"
                configAria={{"button": {"aria-label": "Expand"}}}
                tooltipContent={modalStore.isFullSize ? "Collapse" : "Expand"}
                onClick={() => modalStore.currentStatus(SWF_MODAL.MODAL_SIZE.FULL)}
        />
    </>)
}

ModalDesktopButtons.propTypes = {
    modalStore: PropTypes.instanceOf(ModalStore)
}

export default ModalDesktopButtons