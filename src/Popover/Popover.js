import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import {ResizeObserver} from "resize-observer";
import {useEffect, useRef, useState} from "react";

import findByType, {createSubComponent} from "../utils/findByType";
import {getAllPossibleVariants, getPopoverStyle} from "./utils";
import {isPointInsideTheElement} from "../DatePicker/utils";
import {POPOVER} from "./constants";

const Popover = React.forwardRef((props, ref) => {

    const {children, roundBorder, contentStyles, positionTarget, manageOpened,
        onTargetClick, onOuterPopoverClicked, positions, hideTail, opened} = props;

    const [contentDimensions, setContentDimensions] = useState(null);
    const [targetDimensions, setTargetDimensions] = useState(null);
    const [popoverStyles, setPopoverStyles] = useState({})
    const [isOpened, setIsOpened] = useState(opened);

    const targetRef = useRef(null);
    const contentRef = useRef(null);

    let openedFinal = manageOpened ? opened : isOpened;

    useEffect( () => calculateStyles(),
        [targetDimensions, targetRef.current, contentRef.current, contentDimensions, hideTail, positions, contentStyles])

    useEffect(() => setStyles(!openedFinal),
        [openedFinal, hideTail, contentRef.current, popoverStyles])

    useEffect(() => {
        const targetValue = targetRef.current
        if(targetValue){
            targetValue.addEventListener("click", targetClicked)
            return () => targetValue.removeEventListener("click", targetClicked)
        }
    }, [targetRef.current, openedFinal, manageOpened, opened, isOpened])

    useEffect(() => {
        let resizeObserver = new ResizeObserver((e) => {
            setStyles(true)
            const target = e[0].target
            target.parentElement.classList.contains("popover-content-keeper")
                ? setContentDimensions(target.getBoundingClientRect())
                : setTargetDimensions(target.getBoundingClientRect())
        });

        if(targetRef.current)
            resizeObserver.observe(targetRef.current);
        resizeObserver.observe(contentRef.current.children[0].children[0]);

        return () => resizeObserver.disconnect();
    }, [targetRef.current, contentRef.current])

    useEffect(() => {
        document.addEventListener("click", documentClicked);
        return () => document.removeEventListener("click", documentClicked)
    }, [targetRef.current, contentRef.current, openedFinal, manageOpened, onOuterPopoverClicked])

    useEffect(() => {
        const targetValue = positionTarget?.current;
        if(targetValue)
            targetRef.current = targetValue;
    }, [ positionTarget])

    const targetClicked = (e) => {
        e.preventDefault();

        if(isPointInsideTheElement(targetRef?.current, e.clientX, e.clientY)) {
            !manageOpened &&  setIsOpened(!isOpened)
            let value = manageOpened ? opened : !isOpened;
            onTargetClick({value})
        }
    }

    const documentClicked = (event) =>{
        let pointX = event.clientX;
        let pointY = event.clientY;
        let contentElement = contentRef.current;
        let targetElement = targetRef.current;

        if( openedFinal && contentElement && targetElement) {
            let isOutsideContent = !isPointInsideTheElement(contentElement, pointX, pointY);
            let isOutsideTarget = !isPointInsideTheElement(targetElement, pointX, pointY);

            if(isOutsideContent && isOutsideTarget) {
                !manageOpened && setIsOpened(!isOpened)
                onOuterPopoverClicked(event);
            }
        }
    }

    const setStyles = (isHidden) => {
        let contentElement = contentRef?.current;
        if(!contentElement) return;

        const stylesToSet = isHidden ? POPOVER.hiddenStyles : popoverStyles.style;
        if (!stylesToSet) return;

        Object.entries(stylesToSet).map(([key, value])=> {
            if(key === 'maxHeight' || key === 'maxWidth')
                contentElement.children[0].style[`${key}`] = value ;
            else contentElement.style[`${key}`] = value
        })

        if(isHidden) {
            contentElement.children[0].style.maxHeight = contentElement.style.maxHeight || contentElement.style.height;
            contentElement.children[0].style.maxWidth = contentElement.style.maxWidth || contentElement.style.width;

        } else if(!hideTail && stylesToSet.hasArrow){
            Object.entries(popoverStyles.arrowStyle).map(([key, value])=>
                contentElement.style[`${key}`] = value
            )
        }
    }

    const calculateStyles = () => {
        let contentElement = contentRef?.current;

        if(contentElement && targetDimensions) {
            let padding = contentStyles && contentStyles['padding'] && contentStyles['padding'].split('px')[0] ;
            let contentDimensions = contentElement.getBoundingClientRect();

            let stylesInfo = getPopoverStyle(positions, targetDimensions, contentDimensions, hideTail, roundBorder, padding);
            stylesInfo.style.visibility = "visible";
            setPopoverStyles(stylesInfo)
        }
    }

    const renderTarget = () => {
        const target = findByType(children, "Target");

        if (!target)
            return null;

        return <div className={"popover-target"}
                    ref={targetRef}>{target}</div>
    }

    const renderContent = () => {
        const content = findByType(children, "Content");

        if (!content)
            return null;

        return (
            <div className={classnames({
                "popover-content": true,
                "noRoundBorder": !roundBorder
            })}
                 ref={el => {contentRef.current = el; ref=el}}
                 style={contentStyles}
                 onClick={e => e?.stopPropagation()}
            >
                <div className={"popover-content-keeper"}>
                    {content}</div>
            </div>
        );
    }

    return <>
            {renderContent()}
            {!positionTarget?.current && renderTarget()}
    </>;
});

Popover.Content = createSubComponent("Content");
Popover.Target = createSubComponent("Target");

Popover.defaultProps = {
    hideTail: false,
    manageOpened: false,
    opened: false,
    positions: getAllPossibleVariants(),
    roundBorder: true,
    onTargetClick: () => void 0,
    onOuterPopoverClicked: () => void 0,
    fitTargetWidth: false
}

Popover.propTypes = {
    hideTail: propTypes.bool,
    manageOpened: propTypes.bool,
    opened: propTypes.bool,
    positionTarget: propTypes.oneOfType([
        propTypes.func,
        propTypes.shape({ current: propTypes.any })
    ]),
    positions: propTypes.arrayOf(propTypes.shape({
        target: propTypes.string,
        content: propTypes.string,
    })),
    onTargetClick: propTypes.func,
    onOuterPopoverClicked: propTypes.func,
    roundBorder: propTypes.bool,
    contentStyles: propTypes.object,
    fitTargetWidth: propTypes.bool
}

export default Popover