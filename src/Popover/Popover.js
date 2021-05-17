import * as React from "react";
import propTypes from "prop-types";

import findByType, {createSubComponent} from "../utils/findByType";
import {addResizeObserver, getAllPossibleVariants, getPopoverStyle} from "./utils";
import classnames from "classnames";
import {isPointInsideTheElement} from "../DatePicker/utils";
import {useEffect, useRef, useState} from "react";

const Popover = React.forwardRef((props, ref) => {

    const {children, roundBorder, contentStyles, positionTarget, manageOpened,
        onTargetClick, onOuterPopoverClicked, positions, hideTail, opened} = props;

    const [isOpened, setIsOpened] = useState(false);

    const targetRef = useRef(null);
    const contentRef = useRef(null);

    const openedFinal = manageOpened ? opened : isOpened;

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

    const renderTarget = () => {
        const target = findByType(children, "Target");

        if(positionTarget){
            if(targetRef === null || targetRef?.current!==positionTarget.current)
            {
                targetRef.current = positionTarget.current;
                if(contentRef?.current){
                    resetStyles();
                    openedFinal && setStylesToContent()
                }
            }
            targetRef.current.onclick = (e) => targetClicked(e)
            return null;
        }

        if (!target)
            return null;

        return <div className={"popover-target"}
                    ref={ el => targetRef.current = el}
                    onClick={ (e) => targetClicked(e) }>
                        {target}
                </div>
    }

     const contentResized = () => {
        resetStyles();
        openedFinal && setStylesToContent();
    }

    const targetClicked = (e) =>{
        e.preventDefault();

        if(isPointInsideTheElement(targetRef?.current, e.clientX, e.clientY)) {
            !manageOpened &&  setIsOpened(!isOpened)
            onTargetClick({value: manageOpened ? opened : !isOpened})
        }
    }

    const documentClicked = (event) =>{
        let pointX = event.clientX;
        let pointY = event.clientY;
        let contentElement = contentRef?.current;
        let targetElement = targetRef?.current;

        if( openedFinal && contentElement && targetElement) {

            let isOutsideContent = !isPointInsideTheElement(contentElement, pointX, pointY);
            let isOutsideTarget = !isPointInsideTheElement(targetElement, pointX, pointY);

            if(isOutsideContent && isOutsideTarget) {
                !manageOpened && setIsOpened(!isOpened)
                onOuterPopoverClicked(event);
            }
        }
    }

    const setStylesToContent = () => {
        if(contentRef?.current && targetRef?.current) {

            let padding = contentStyles && contentStyles['padding'] && contentStyles['padding'].split('px')[0] ;
            let contentElement = contentRef.current;
            let targetDimensions = targetRef.current.getBoundingClientRect()
            let contentDimensions = contentElement.getBoundingClientRect();

            let windowParam = {
                startY: 0,
                startX: 0,
                endY: window.innerHeight,
                endX: window.innerWidth
            }

            let stylesInfo = getPopoverStyle(positions, targetDimensions, contentDimensions, windowParam, hideTail, roundBorder, padding);
            let styles = stylesInfo.style;

            contentElement.style.transform = styles.transform;
            contentElement.style.left = styles.left;
            contentElement.style.top = styles.top;
            contentElement.style.visibility = "visible";

            if(styles.maxHeight)
                contentElement.children[0].style.maxHeight = styles.maxHeight ;
            if(styles.maxWidth)
                contentElement.children[0].style.maxWidth = styles.maxWidth;

            if (!hideTail && stylesInfo.hasArrow) {
                for (const [key, value] of Object.entries(stylesInfo.arrowStyle))
                    contentElement.style.setProperty(key, value);
            }
        }
    }

    const resetStyles = () =>{
        let contentElement = contentRef?.current;
        if(contentElement)
        {
            contentElement.style.visibility = "hidden";
            contentElement.style.transform = `translate3d(0, 0, 0)`;
            contentElement.style.left =  0;
            contentElement.style.top = 0;
            contentElement.children[0].style.maxHeight = contentElement.style.maxHeight || contentElement.style.height;
            contentElement.children[0].style.maxWidth = contentElement.style.maxWidth || contentElement.style.width ;
            contentElement.style.margin = 0;
        }
    }

    const updateOpenedState = (value) => {
        if(value)
            setStylesToContent();
        else
            resetStyles();
    }

    useEffect(() => {
        const undatedValue = manageOpened ? opened : isOpened;
        updateOpenedState(undatedValue);
    }, [opened, isOpened])


    useEffect(() => {
        document.addEventListener("click", e => documentClicked(e));
        updateOpenedState(opened);

        addResizeObserver(targetRef?.current, contentResized);
        addResizeObserver(contentRef?.current.children[0].children[0], contentResized);
    }, [])


    return <>
            {renderContent()}
            {renderTarget()}
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