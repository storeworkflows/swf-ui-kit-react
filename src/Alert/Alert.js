import * as React from "react";
import {useState, useEffect, useRef, useCallback} from 'react';
import propTypes from "prop-types";
import classnames from "classnames";

import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import TextLink from "../TextLink/TextLink";
import {openLink} from "./utils";

const Alert = React.forwardRef((props, ref) => {

    const {
        action, content, header, icon, color, visible, textLinkProps,
        manageExpanded, manageVisibility, manageButtonClick,
        onTextLinkClicked, onButtonClick, onExpandAction,
        expanded, onCloseAction, delay, className,
        defaultPosition, verticalPositions, horizontalPositions,
        onVisibilityChange, textAlignCenter
    } = props;

    const [oneLineText, setOneLineText] = useState(false);
    const [isOverflowed, setIsOverflowed] = useState(!expanded);
    const [isExpanded, setIsExpanded] = useState(expanded);
    const [isVisible, setIsVisible] =  useState(visible);

    const contentRef = useRef(null);
    const textRef = useRef(null);
    let timer = null;

    const expandedFinal = manageExpanded ? expanded : isExpanded;
    const visibleFinal = manageVisibility ? visible : isVisible;

    const setDelay = () => {
        if (delay) {
            timer = setTimeout(() => {
                !manageVisibility && setIsVisible(false)
                onCloseAction();
            }, delay);
        }
    }

    const buttonClicked = (e) => {
        e.preventDefault();

        if (!manageButtonClick) {
            !manageVisibility && setIsVisible(false)
            if (action.href)
                openLink(action.href);
        }

        onButtonClick(e, action);
    }

    const expandAction = (e) => {
        e.preventDefault();

        let curValue = expandedFinal;
        if (!manageExpanded) {
            curValue = !isExpanded;
            setIsOverflowed(!curValue);
            setIsExpanded(curValue)
        }

        onExpandAction({isExpanded: curValue})
    }

    const defineSizes = useCallback(() => {
        let contentEl = contentRef?.current;
        let text = textRef?.current;

        if (contentEl && text) {
            let onlyHeader = header && !content;
            let oneLineText = !header && text.getBoundingClientRect().height < 32;

            setIsOverflowed(contentEl.scrollHeight < text.scrollHeight);
            setOneLineText(onlyHeader || oneLineText)
        }
    }, [header, content, contentRef, textRef])


    useEffect( defineSizes, [content, header])

    useEffect(() => onVisibilityChange(visibleFinal), [visibleFinal])

    useEffect(() => manageExpanded && setIsOverflowed(!expanded), [expanded, manageExpanded])

    useEffect(() => {
        if(manageVisibility){
            setDelay();
            defineSizes();
        }
    }, [visible, manageVisibility])

    useEffect(() => {
        defineSizes();
        setDelay();

        return () => clearTimeout(timer);
    }, []);


    const mainContainerClasses = classnames(
        color,
        className,
        "swf-alert-container",
        {
            "--fixed": !defaultPosition,
            "--alignCenter": !isOverflowed && !expandedFinal,
            "--oneLineContent": oneLineText,
            "--expanded": expandedFinal,
            "--no-icon": !icon,
            [`--vertical-${verticalPositions}`]: verticalPositions,
            [`--horizontal-${horizontalPositions}`]: horizontalPositions,
        }
    )

    const alertContentClasses = classnames("alert-content",
        { "text-align-center": textAlignCenter }
    )

    const textStyles = classnames({
        "text-container": true,
        "--overflowed": isOverflowed,
        "--setToOneLine": header && isOverflowed,
        "--expanded": expandedFinal
    })

    let showLabel = expandedFinal ? "less" : "more";
    let isButtonWithText = action.type === "acknowledge" || action.type === "open"

    return (
         visibleFinal &&
            <>
                <div className={mainContainerClasses} ref={ref}>
                    {icon && <Icon className={"alert-icon"} icon={icon}/>}

                    <div className={alertContentClasses}
                         ref={el => contentRef.current = el}
                    >
                        {header && <div className={"alert-header"}>{header}</div>}
                        {content &&
                        <div ref={el => textRef.current = el}
                             className={textStyles}>
                            <p className={"alert-text"}>{content} {
                                textLinkProps &&
                                <TextLink
                                    label={textLinkProps.label}
                                    href={textLinkProps.href}
                                    openWindows={textLinkProps.openWindows || false}
                                    download={textLinkProps.download || false}
                                    onClick={onTextLinkClicked}
                                />
                            }</p>
                        </div>
                        }
                        {(isOverflowed || expandedFinal) &&
                        <Button
                            className={"show-more-button"}
                            variant={"tertiary"}
                            onClick={expandAction}
                        >
                            {`Show ${showLabel}`}
                        </Button>}
                    </div>
                    <Button className={classnames("alert-button", {"dismiss": !isButtonWithText})}
                            label={isButtonWithText ?
                                (action.label || (action.type === "acknowledge" ? "Ok" : "Open"))
                                : undefined
                            }
                            icon={!isButtonWithText ? "x" : undefined}
                            size={isButtonWithText ? "md" : "lg"}
                            onClick={buttonClicked}
                            variant={"inherit"}
                    />
                </div>
            </>
    );
});

Alert.defaultProps = {
    color: "blue",
    action: {type: "dismiss"},

    visible: true,
    expanded: false,
    className: "",

    manageExpanded: false,
    manageVisibility: false,
    manageButtonClick: false,

    onVisibilityChange: () => void 0,
    onTextLinkClicked: () => void 0,
    onExpandAction: () => void 0,
    onButtonClick: () => void 0,
    onCloseAction: () => void 0,

    verticalPositions: "top",
    horizontalPositions: "center"
}

Alert.propTypes = {
    action: propTypes.shape({
        type: propTypes.oneOf(["dismiss", "acknowledge", "open"]).isRequired,
        href: propTypes.string,
        label: propTypes.string
    }),
    content: propTypes.oneOfType([propTypes.string, propTypes.object]),
    /**
     * Can control only if manageExpanded = true
     */
    expanded: propTypes.bool,
    header: propTypes.string,
    icon: propTypes.string,
    textAlignCenter: propTypes.bool,

    manageExpanded: propTypes.bool,
    color: propTypes.oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
    textLinkProps: propTypes.shape({
        label: propTypes.string,
        href: propTypes.string,
        openWindows: propTypes.bool,
        download: propTypes.oneOfType([propTypes.string, propTypes.object])
    }),
    onVisibilityChange: propTypes.func,
    onExpandAction: propTypes.func,
    onTextLinkClicked: propTypes.func,
    onButtonClick: propTypes.func,
    /**
     *  Can control only if manageVisibility = true
     */
    visible: propTypes.bool,
    manageVisibility: propTypes.bool,
    /**
     * Time before remove (in milliseconds)
     */
    delay: propTypes.number,
    onCloseAction: propTypes.func,
    manageButtonClick: propTypes.bool,
    className: propTypes.oneOfType([propTypes.string, propTypes.object]),
    defaultPosition: propTypes.bool,
    verticalPositions: propTypes.oneOf(["top", "center", "bottom"]),
    horizontalPositions: propTypes.oneOf(["start", "center", "end"])
}

export default React.memo(Alert)
