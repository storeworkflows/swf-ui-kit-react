import * as React from "react";
import classnames from "classnames";
import {SWF_MODAL} from "./constants";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import findByType, {createSubComponent} from "../utils/findByType";
import {noop} from "../utils";
import {useEffect, useRef, useState} from "react";

const Modal = (props) => {

    const modalRef = useRef(null);

    const [currentStatus, setCurrentStatus] = useState(SWF_MODAL.MODAL_SIZE.DEFAULT);
    const [openModal, setOpenModal] = useState(true)
    const [mobileFooterOpened, setMobileFooterOpened] = useState(true)

    const {showPrint, closeRef, manageOpened, onClose, display,
        headerElements, animation, children, onSizeChanged} = props;

    const expand = () => {
        const isFullSize = currentStatus === SWF_MODAL.MODAL_SIZE.FULL;
        const modalNode = modalRef?.current.querySelector(".modal-dialog");

        if (isFullSize) {
            modalNode.removeAttribute("style");
            setCurrentStatus(SWF_MODAL.MODAL_SIZE.DEFAULT)
            return;
        }

        modalNode.setAttribute("style", "width: 100%; height: 98%;");
        setCurrentStatus(SWF_MODAL.MODAL_SIZE.FULL)
    }

    const desktopButtons = () => {
        const isFullSize = currentStatus === SWF_MODAL.MODAL_SIZE.FULL;
        const status = isFullSize ? SWF_MODAL.MODAL_SIZE.DEFAULT : SWF_MODAL.MODAL_SIZE.FULL;

        return (
            <>
                {
                    showPrint && isFullSize && <Button icon="printer"
                                                       variant="tertiary"
                                                       bare={true}
                                                       size="md"
                                                       configAria={{"button": {"aria-label": "Print"}}}
                                                       tooltipContent={"Print"}
                                                       onClick={() => window.print()}
                    />
                }
                <Button icon={isFullSize ? "arrows-angle-contract" : "arrows-angle-expand"}
                        variant="tertiary"
                        bare={true}
                        size="md"
                        configAria={{"button": {"aria-label": "Expand"}}}
                        tooltipContent={isFullSize ? "Collapse" : "Expand"}
                        onClick={() => setCurrentStatus(status)}
                />
                <Button icon="x"
                        innerRef={closeRef}
                        variant="tertiary"
                        bare={true}
                        size="md"
                        slot="trigger"
                        configAria={{"button": {"aria-label": "Close"}}}
                        tooltipContent="Close"
                        onClick={() => {
                            !manageOpened && setOpenModal(false);
                            onClose()
                        }}
                />
            </>
        )
    }

    const mobileButtons = () => {
        return (
            <>
                <Button
                    icon="three-dots"
                    variant="tertiary"
                    bare={true}
                    size="md"
                    configAria={{"button": {"aria-label": "Show Actions"}}}
                    tooltipContent="Show Actions"
                    onClick={() => setMobileFooterOpened(true)}
                />
            </>
        )
    }

    useEffect(() => {
        onSizeChanged(currentStatus);
    }, [currentStatus])

    useEffect(() => {
        modalRef?.current?.addEventListener("click", (event) => {
            mobileFooterOpened && setMobileFooterOpened(false);
        });

        if (mobileFooterOpened) {
            const footerContentHeight = modalRef?.current?.querySelector(".footer-content")?.offsetHeight;
            modalRef?.current?.style.setProperty("--swf-modal-footer-height", footerContentHeight + "px");
        }
    }, [mobileFooterOpened])

    const isFullSize = currentStatus === SWF_MODAL.MODAL_SIZE.FULL;

    const showModal = manageOpened ? props.openModal : openModal;

    const isMobile = SWF_MODAL.MOBILE_REGEXP.test(navigator.userAgent);

    return showModal ? <>
        <div className={classnames("swf-modal-overlay", isMobile && "--mobile")}
             ref={elm => modalRef.current = elm}
        >
            <div className={classnames({
                "modal": true,
                "--animated": animation,
                "--mobile": isMobile,
                "--desktop": !isMobile
            })}>
                <div className={classnames({
                    "modal-dialog": true,
                    [`--${display}`]: true,
                    [`--full-${isMobile ? "mobile" : "desktop"}`]: isMobile || isFullSize
                })}>
                    <div className={classnames({
                        "modal-header": true,
                        "--mobile": isMobile,
                        "--desktop-content": !isMobile && headerElements === 2,
                        "--desktop": !isMobile && headerElements === 3
                    })}>
                        <div className="additional-buttons">
                            {findByType(children, "Buttons")}
                        </div>
                        <div className="main-buttons">
                            {isMobile ? mobileButtons() : desktopButtons()}
                        </div>
                        <div className="header-content">
                            {findByType(children, "Header")}
                        </div>
                    </div>
                    <div
                        className="modal-body"
                    >
                        {findByType(children, "Body")}
                    </div>
                    {isMobile
                        ?
                        <div
                            className={classnames({
                                "menu-background": true,
                                "--active": mobileFooterOpened
                            })}
                        />
                        :
                        ""}
                    <div className={classnames({
                        "modal-footer": true,
                        "--mobile": isMobile,
                        "--active": mobileFooterOpened
                    })}>
                        {isMobile ?
                            <div className="footer-content">
                                {findByType(children, "Footer")}
                                {findByType(children, "HeaderButtons")}
                            </div>
                            :
                            findByType(children, "Footer")
                        }
                    </div>
                </div>
            </div>
        </div>
    </> : null
};

Modal.Buttons = createSubComponent("Buttons");
Modal.Header = createSubComponent("Header");
Modal.Body = createSubComponent("Body");
Modal.Footer = createSubComponent("Footer");

Modal.defaultProps = {
    openModal: false,
    showPopover: false,
    manageOpened: false,
    onClose: noop,
    popoverContent: {},
    display: "grid",
    headerElements: 2,
    showPrint: false,
    closeRef: React.createRef(),
    withAnimation: false,
    onSizeChanged: noop
}

Modal.propTypes = {
    openModal: PropTypes.bool,
    showPopover: PropTypes.bool,
    manageOpened: PropTypes.bool,
    onClose: PropTypes.func,
    popoverContent: PropTypes.shape({
        tagline: PropTypes.object,
        content: PropTypes.object,
        actions: PropTypes.object
    }),
    animation: PropTypes.bool,
    display: PropTypes.oneOf([
        'block',
        'inline',
        'inline-block',
        'grid',
        'flex',
        'inline-grid',
        'inline-flex',
        'none'
    ]),
    headerElements: PropTypes.number,
    showPrint: PropTypes.bool,
    closeRef: PropTypes.object,
    onSizeChanged: PropTypes.func
}

export default Modal