import classnames from "classnames";
import {SWF_MODAL} from "./constants";
import styles from "./styles.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import {useState, useRef} from "react";

function Modal (props) {
    const modalRef = useRef(null);
    const [status, setStatus] = useState(SWF_MODAL.MODAL_SIZE.DEFAULT);
    const [modalOpened, setModalOpened] = useState(false);
    const [mobileFooterOpened, setMobileFooterOpened] = useState(false);

    const {display, headerElements} = props;

    const isMobile = SWF_MODAL.MOBILE_REGEXP.test(navigator.userAgent);

    return (<>
            <style type="text/css">{styles}</style>
            <div className="modal-overlay"
                 ref={modalRef}
            >
                <div className="modal">
                    <div className={classnames({
                        "modal-dialog": true,
                        [`--${display}`]: true,
                        [`--full`]: isMobile
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
                                <slot name="header"/>
                            </div>
                            {
                                headerElements === 3 ? <div className="additional-buttons">
                                    {isMobile ?
                                        <now-button-iconic
                                            icon="ellipsis-h-fill"
                                            variant="primary"
                                            bare={true}
                                            size="md"
                                            configAria={{"button": {"aria-label": "Show Actions"}}}
                                            tooltipContent="Show Actions"
                                            onClick={() => this.setState({mobileFooterOpened: true})}
                                        />
                                        :
                                        <slot name="header-buttons"/>}
                                </div> : ""
                            }

                        </div>
                        <div
                            className="modal-body"
                        >
                            <slot name="body"/>
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
                                    <slot name="footer"/>
                                    <slot name="header-buttons"/>
                                </div>
                                :
                                <slot name="footer"/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

// class Modal extends React.Component {
//     constructor(props) {
//         super(props);
//         this.modalRef = React.createRef();
//         this.expand = this.expand.bind(this);
//         this.desktopButtons = this.desktopButtons.bind(this);
//         this.mobileButtons = this.mobileButtons.bind(this);
//         this.renderPopover = this.renderPopover.bind(this);
//
//         this.state = {
//             currentStatus: SWF_MODAL.MODAL_SIZE.DEFAULT,
//             modalOpened: false,
//             mobileFooterOpened: false
//         }
//     }
//
//     expand() {
//         const isFullSize = this.state.currentStatus === SWF_MODAL.MODAL_SIZE.FULL;
//
//         const modalNode = this.modalRef.current
//             .querySelector(".modal-dialog");
//
//         if (isFullSize) {
//             modalNode.removeAttribute("style");
//             this.setState({currentStatus: SWF_MODAL.MODAL_SIZE.DEFAULT});
//             return;
//         }
//
//         modalNode.setAttribute("style", "width: 100%; height: 98%;");
//         this.setState({currentStatus: SWF_MODAL.MODAL_SIZE.FULL});
//     }
//
//     renderPopover() {
//         const {showPopover, popoverContent: {tagline, content, actions}} = this.props;
//
//         if (showPopover) {
//             return (
//                 <now-popover
//                     positions={[
//                         {
//                             "target": "bottom-end",
//                             "content": "top-end"
//                         }
//                     ]}
//                 >
//                     <Button icon="x"
//                             variant="tertiary"
//                             bare={true}
//                             size="md"
//                             slot="trigger"
//                             configAria={{"button": {"aria-label": "Close"}}}
//                             tooltipContent="Close"
//                     />
//                     <now-template-card-omnichannel
//                         slot="content"
//                         tagline={tagline}
//                         content={content}
//                         actions={actions}
//                     />
//                 </now-popover>
//             )
//         }
//
//         return (
//             <Button icon="x"
//                     variant="tertiary"
//                     bare={true}
//                     size="md"
//                     slot="trigger"
//                     configAria={{"button": {"aria-label": "Close"}}}
//                     tooltipContent="Close"
//                     onClick={() => void 0}
//             />
//         )
//     }
//
//     desktopButtons() {
//         const isFullSize = this.state.currentStatus === SWF_MODAL.MODAL_SIZE.FULL;
//
//         return (
//             <>
//                 <Button icon="arrows-angle-expand"
//                         variant="tertiary"
//                         bare={true}
//                         size="md"
//                         configAria={{"button": {"aria-label": "Collapse"}}}
//                         tooltipContent="Collapse"
//                         onClick={() => this.setState({modalOpened: true})}
//                 />
//                 <Button icon={isFullSize ? "collapse-fill" : "arrows-angle-expand"}
//                         variant="tertiary"
//                         bare={true}
//                         size="md"
//                         configAria={{"button": {"aria-label": "Expand"}}}
//                         tooltipContent={isFullSize ? "Collapse" : "Expand"}
//                         onClick={() => this.setState({currentStatus: SWF_MODAL.MODAL_SIZE.FULL})}
//                 />
//                 {this.renderPopover()}
//             </>
//         )
//     }
//
//     mobileButtons() {
//         return (
//             <>
//                 <Button
//                     icon="arrow-left-fill"
//                     variant="tertiary"
//                     bare={true}
//                     size="lg"
//                     configAria={{"button": {"aria-label": "Back"}}}
//                     tooltipContent="Back"
//                     onClick={() => this.setState({modalOpened: false})}
//                 />
//             </>
//         )
//     }
//
//     render() {
//         const {display, headerElements} = this.props;
//         const {mobileFooterOpened} = this.state;
//
//         const isMobile = SWF_MODAL.MOBILE_REGEXP.test(navigator.userAgent);
//
//         return (<>
//                 <style type="text/css">{styles}</style>
//                 <div className="modal-overlay"
//                      ref={elm => this.modalRef.current = elm}
//                 >
//                     <div className="modal">
//                         <div className={classnames({
//                             "modal-dialog": true,
//                             [`--${display}`]: true,
//                             [`--full`]: isMobile
//                         })}>
//                             <div className={classnames({
//                                 "modal-header": true,
//                                 "--mobile": isMobile,
//                                 "--desktop-content": !isMobile && headerElements === 2,
//                                 "--desktop": !isMobile && headerElements === 3
//                             })}>
//                                 <div className="main-buttons">
//                                     {isMobile ? this.mobileButtons() : this.desktopButtons()}
//                                 </div>
//                                 <div className="header-content">
//                                     <slot name="header"/>
//                                 </div>
//                                 {
//                                     headerElements === 3 ? <div className="additional-buttons">
//                                         {isMobile ?
//                                             <now-button-iconic
//                                                 icon="ellipsis-h-fill"
//                                                 variant="primary"
//                                                 bare={true}
//                                                 size="md"
//                                                 configAria={{"button": {"aria-label": "Show Actions"}}}
//                                                 tooltipContent="Show Actions"
//                                                 onClick={() => this.setState({mobileFooterOpened: true})}
//                                             />
//                                             :
//                                             <slot name="header-buttons"/>}
//                                     </div> : ""
//                                 }
//
//                             </div>
//                             <div
//                                 className="modal-body"
//                             >
//                                 <slot name="body"/>
//                             </div>
//                             {isMobile
//                                 ?
//                                 <div
//                                     className={classnames({
//                                         "menu-background": true,
//                                         "--active": mobileFooterOpened
//                                     })}
//                                 />
//                                 :
//                                 ""}
//                             <div className={classnames({
//                                 "modal-footer": true,
//                                 "--mobile": isMobile,
//                                 "--active": mobileFooterOpened
//                             })}>
//                                 {isMobile ?
//                                     <div className="footer-content">
//                                         <slot name="footer"/>
//                                         <slot name="header-buttons"/>
//                                     </div>
//                                     :
//                                     <slot name="footer"/>
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

Modal.defaultProps = {
    openModal: false,
    showPopover: false,
    popoverContent: {},
    display: "grid",
    headerElements: 2
}

Modal.propTypes = {
    openModal: PropTypes.bool,
    showPopover: PropTypes.bool,
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