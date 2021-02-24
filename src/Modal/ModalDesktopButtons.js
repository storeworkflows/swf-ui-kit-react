import Button from "../Button/Button";
import {SWF_MODAL} from "./constants";

function ModalDesktopButtons (props) {
    return ( <>
        <Button icon="arrows-angle-expand"
                variant="tertiary"
                bare={true}
                size="md"
                configAria={{"button": {"aria-label": "Collapse"}}}
                tooltipContent="Collapse"
                onClick={() => this.setState({modalOpened: true})}
        />
        <Button icon={isFullSize ? "collapse-fill" : "arrows-angle-expand"}
                variant="tertiary"
                bare={true}
                size="md"
                configAria={{"button": {"aria-label": "Expand"}}}
                tooltipContent={isFullSize ? "Collapse" : "Expand"}
                onClick={() => this.setState({currentStatus: SWF_MODAL.MODAL_SIZE.FULL})}
        />
    </>)
}