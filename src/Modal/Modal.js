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
        this.renderPopover = this.renderPopover.bind(this);

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

    renderPopover() {
        const {showPopover, popoverContent: {tagline, content, actions}} = this.props;

        if (showPopover) {
            return (
                <now-popover
                    positions={[
                        {
                            "target": "bottom-end",
                            "content": "top-end"
                        }
                    ]}
                >
                    <Button icon="x"
                            variant="tertiary"
                            bare={true}
                            size="md"
                            slot="trigger"
                            configAria={{"button": {"aria-label": "Close"}}}
                            tooltipContent="Close"
                    />
                    <now-template-card-omnichannel
                        slot="content"
                        tagline={tagline}
                        content={content}
                        actions={actions}
                    />
                </now-popover>
            )
        }

        return (
            <Button icon="x"
                    variant="tertiary"
                    bare={true}
                    size="md"
                    slot="trigger"
                    configAria={{"button": {"aria-label": "Close"}}}
                    tooltipContent="Close"
                    onClick={() => {
                        this.setState({openModal: false});
                        this.props.onClose();
                    }}
            />
        )
    }

    desktopButtons() {
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
                    isFullSize && <Button icon="printer"
                                          variant="tertiary"
                                          bare={true}
                                          size="md"
                                          configAria={{"button": {"aria-label": "Print"}}}
                                          tooltipContent={isFullSize ? "Collapse" : "Print"}
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
                {this.renderPopover()}
            </>
        )
    }

    mobileButtons() {
        return (
            <>
                <Button
                    icon="arrow-left"
                    variant="tertiary"
                    bare={true}
                    size="md"
                    configAria={{"button": {"aria-label": "Back"}}}
                    tooltipContent="Back"
                    onClick={() => this.setState({modalOpened: false})}
                />
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

    render() {
        const {display, openModal, headerElements, manageOpened} = this.props;
        const {mobileFooterOpened, openModal: open, currentStatus} = this.state;
        const isFullSize = currentStatus === SWF_MODAL.MODAL_SIZE.FULL;

        const showModal = manageOpened ? openModal : open;

        const isMobile = SWF_MODAL.MOBILE_REGEXP.test(navigator.userAgent);

        return showModal && <>
            <div className="swf-modal-overlay"
                 ref={elm => this.modalRef.current = elm}
            >
                <div className="modal">
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
                            <div className="main-buttons">
                                {isMobile ? this.mobileButtons() : this.desktopButtons()}
                            </div>
                            <div className="header-content">
                                {findByType(this.props.children, "Header")}
                            </div>
                            {
                                headerElements === 3 ? <div className="additional-buttons">
                                    {!isMobile && findByType(this.props.children, "HeaderButtons")}
                                </div> : ""
                            }

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

Modal.Header = createSubComponent("Header");
Modal.HeaderButtons = createSubComponent("HeaderButtons");
Modal.Body = createSubComponent("Body");
Modal.Footer = createSubComponent("Footer");

Modal.defaultProps = {
    openModal: false,
    showPopover: false,
    manageOpened: false,
    onClose: noop,
    popoverContent: {},
    display: "grid",
    headerElements: 2
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
    headerElements: PropTypes.number
}

export default Modal