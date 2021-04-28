import * as React from "react";
import classnames from "classnames";
import {SWF_MODAL} from "./constants";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import findByType, {createSubComponent} from "../utils/findByType";
import {noop} from "../utils";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.modalRef = React.createRef();
        this.expand = this.expand.bind(this);
        this.desktopButtons = this.desktopButtons.bind(this);
        this.mobileButtons = this.mobileButtons.bind(this);

        this.state = {
            currentStatus: SWF_MODAL.MODAL_SIZE.DEFAULT,
            openModal: true,
            mobileFooterOpened: false
        }
    }

    expand() {
        const isFullSize = this.state.currentStatus === SWF_MODAL.MODAL_SIZE.FULL;

        const modalNode = this.modalRef.current
            .querySelector(".modal-dialog");

        if (isFullSize) {
            modalNode.removeAttribute("style");
            this.setState({currentStatus: SWF_MODAL.MODAL_SIZE.DEFAULT});
            return;
        }

        modalNode.setAttribute("style", "width: 100%; height: 98%;");
        this.setState({currentStatus: SWF_MODAL.MODAL_SIZE.FULL});
    }

    desktopButtons() {
        const {showPrint} = this.props;
        const isFullSize = this.state.currentStatus === SWF_MODAL.MODAL_SIZE.FULL;
        const status = isFullSize ? SWF_MODAL.MODAL_SIZE.DEFAULT : SWF_MODAL.MODAL_SIZE.FULL;

        return (
            <>
                {/*<Button icon="dash"*/}
                {/*        variant="tertiary"*/}
                {/*        bare={true}*/}
                {/*        size="md"*/}
                {/*        configAria={{"button": {"aria-label": "Collapse"}}}*/}
                {/*        tooltipContent="Collapse"*/}
                {/*        onClick={() => this.setState({modalOpened: true})}*/}
                {/*/>*/}
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
                        onClick={() => this.setState({currentStatus: status})}
                />
                <Button icon="x"
                        innerRef={this.props.closeRef}
                        variant="tertiary"
                        bare={true}
                        size="md"
                        slot="trigger"
                        configAria={{"button": {"aria-label": "Close"}}}
                        tooltipContent="Close"
                        onClick={() => {
                            if (!this.props.manageOpened) {
                                this.setState({openModal: false});
                            }
                            this.props.onClose();
                        }}
                />
            </>
        )
    }

    mobileButtons() {
        return (
            <>
                {/*<Button*/}
                {/*    icon="arrow-left"*/}
                {/*    variant="tertiary"*/}
                {/*    bare={true}*/}
                {/*    size="md"*/}
                {/*    configAria={{"button": {"aria-label": "Back"}}}*/}
                {/*    tooltipContent="Back"*/}
                {/*    onClick={() => this.setState({modalOpened: false})}*/}
                {/*/>*/}
                <Button
                    icon="three-dots"
                    variant="tertiary"
                    bare={true}
                    size="md"
                    configAria={{"button": {"aria-label": "Show Actions"}}}
                    tooltipContent="Show Actions"
                    onClick={() => this.setState({mobileFooterOpened: true})}
                />
            </>
        )
    }

    componentDidMount() {
        this.modalRef?.current?.addEventListener("click", (event) => {
            if (this.state.mobileFooterOpened) {
                this.setState({mobileFooterOpened: false})
            }
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.mobileFooterOpened) {
            const footerContentHeight = this.modalRef.current.querySelector(".footer-content").offsetHeight;
            this.modalRef.current.style.setProperty("--swf-modal-footer-height", footerContentHeight + "px");
        }
    }

    setClass = () => {
        setTimeout(() => {
            this.modalRef?.current.querySelector(".modal").classList[this.props.openModal ? "add" : "remove"]("--opened");
        }, 100);
    }

    render() {
        const {display, openModal, headerElements, manageOpened} = this.props;
        const {mobileFooterOpened, openModal: open, currentStatus} = this.state;
        const isFullSize = currentStatus === SWF_MODAL.MODAL_SIZE.FULL;

        const showModal = manageOpened ? openModal : open;

        const isMobile = SWF_MODAL.MOBILE_REGEXP.test(navigator.userAgent);

        this.setClass();

        return showModal && <>
            <div className="swf-modal-overlay"
                 ref={elm => this.modalRef.current = elm}
            >
                <div className={classnames({modal: true})}>
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
                                {findByType(this.props.children, "Buttons")}
                            </div>
                            <div className="main-buttons">
                                {isMobile ? this.mobileButtons() : this.desktopButtons()}
                            </div>
                            <div className="header-content">
                                {findByType(this.props.children, "Header")}
                            </div>
                        </div>
                        <div
                            className="modal-body"
                        >
                            {findByType(this.props.children, "Body")}
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
                                    {findByType(this.props.children, "Footer")}
                                    {findByType(this.props.children, "HeaderButtons")}
                                </div>
                                :
                                findByType(this.props.children, "Footer")
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}

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
    closeRef: React.createRef()
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
    closeRef: PropTypes.object
}

export default Modal