import * as React from "react";
import propTypes from "prop-types";
import Popover from "../Popover/Popover";
import findByType, {createSubComponent} from "../utils/findByType";
import {useEffect, useState} from "react";

const Tooltip = React.forwardRef((props, ref) => {
    const {
        targetRef, opened, manageOpened, content, children, delay,
        onHover, onTimerStop, position, roundBorder
    } = props;

    const [isOpened, setIsOpened] = useState(opened);
    const openedFinal = manageOpened ? opened : isOpened;

    let timer = null;

    const renderContent = () => {
        const child = findByType(children, "Content");

        if (!child && !content)
            return null;
        else if (!child)
            return <span>{content}</span>
        else
            return child;
    }

    const targetHovered = (e) => {
        if (!openedFinal) {
            timer = setTimeout(() => {
                !manageOpened && setIsOpened(false);
                onTimerStop();
            }, delay);

            !manageOpened && setIsOpened(true);
            onHover(e);
        }
    }

    useEffect(() => {
        if(targetRef?.current)
            targetRef.current.onmouseover = targetHovered;
        return clearTimeout(timer);
    }, [])

    return (
        <>
            <Popover
                manageOpened={true}
                opened={openedFinal}
                positions={position}
                roundBorder={roundBorder}
                positionTarget={targetRef}
                hideTail={true}
                ref={ref}
            >
                <Popover.Content>
                    {renderContent()}
                </Popover.Content>
            </Popover>
        </>
    );

});

Tooltip.Content = createSubComponent("Content");

Tooltip.defaultProps = {
    delay: 700,
    manageOpened: false,
    opened: false,
    position:
        [{target: "top-center", content: "bottom-center"},
            {target: "bottom-center", content: "top-center"},
            {target: "center-end", content: "center-start"},
            {target: "center-start", content: "center-end"},
            {target: "top-end", content: "top-start"},
            {target: "bottom-end", content: "bottom-start"},
            {target: "top-start", content: "top-end"},
            {target: "bottom-start", content: "bottom-end"}],
    roundBorder: true,
    content: '',
    onHover: () => void 0,
    onTimerStop: () => void 0
}

Tooltip.propTypes = {
    delay: propTypes.number,
    manageOpened: propTypes.bool,
    opened: propTypes.bool,
    targetRef: propTypes.oneOfType([
        propTypes.func,
        propTypes.shape({current: propTypes.any})
    ]),
    position: propTypes.arrayOf(propTypes.shape({
        target: propTypes.string,
        content: propTypes.string,
    })),
    roundBorder: propTypes.bool,
    content: propTypes.string,
    onHover: propTypes.func,
    onTimerStop: propTypes.func
}

export default Tooltip