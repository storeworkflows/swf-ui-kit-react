import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import {useCallback, useEffect, useRef, useState} from "react";

import findByType, {createSubComponent} from "../utils/findByType";
import {getAllPossibleVariants, getPopoverStyle} from "./utils";
import {isPointInsideTheElement} from "../DatePicker/utils";
import {POPOVER} from "./constants";
import isEqual from "react-fast-compare";
import {noop} from "../utils";

const Popover = React.memo(React.forwardRef((props, ref) => {

    const {children, roundBorder, contentStyles, positionTarget, manageOpened,
        onTargetClick, onOuterPopoverClicked, positions, hideTail, opened} = props;

    const [isOpened, setIsOpened] = useState(opened);

    const targetRef = useRef(null);
    const contentRef = useRef(null);

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

        if( isOpened && contentElement && targetElement) {

            let isOutsideContent = !isPointInsideTheElement(contentElement, pointX, pointY);
            let isOutsideTarget = !isPointInsideTheElement(targetElement, pointX, pointY);

            if(isOutsideContent && isOutsideTarget) {
                !manageOpened && setIsOpened(!isOpened)
                onOuterPopoverClicked(event);
            }
        }
    }

    const setStyles = (isHidden, popoverStyles) => {
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
        let targetElement = targetRef?.current;

        if(contentElement && targetElement) {
            let padding = contentStyles && contentStyles['padding'] && contentStyles['padding'].split('px')[0] ;
            let contentDimensions = contentElement.getBoundingClientRect();
            let targetDimensions = targetElement.getBoundingClientRect();

            let stylesInfo = getPopoverStyle(positions, targetDimensions, contentDimensions, hideTail, roundBorder, padding);
            stylesInfo.style.visibility = "visible";
            return stylesInfo
        }
    }

    useEffect(() => targetRef.current = positionTarget?.current, [ positionTarget.current])
    useEffect(() => manageOpened && setIsOpened(opened), [opened, manageOpened])

    useEffect( () => {
        setStyles(true)
        isOpened && setStyles(false, calculateStyles())
    },[isOpened])

    useEffect(() => {
        const targetValue = targetRef.current
        if(targetValue){
            targetValue.addEventListener("click", targetClicked)
            return () => targetValue.removeEventListener("click", targetClicked)
        }
    }, [targetRef.current, onTargetClick, manageOpened])

    useEffect(() => {
        document.addEventListener("click", documentClicked);
        return () => document.removeEventListener("click", documentClicked)
    }, [contentRef.current, targetRef.current, isOpened, manageOpened, onOuterPopoverClicked])

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
}), (prev, next) => {
    return isEqual(prev, next);
});

Popover.Content = createSubComponent("Content");
Popover.Target = createSubComponent("Target");

Popover.defaultProps = {
    hideTail: false,
    manageOpened: false,
    opened: false,
    positions: getAllPossibleVariants(),
    roundBorder: true,
    onTargetClick: noop,
    onOuterPopoverClicked: noop,
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