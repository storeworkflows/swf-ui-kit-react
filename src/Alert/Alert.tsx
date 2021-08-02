import * as React from "react";
import {useState, useEffect, useRef, useCallback, FC, LegacyRef} from 'react';
import propTypes from "prop-types";
import classnames from "classnames";

import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import TextLink from "../TextLink/TextLink";
import {openLink} from "./utils";
import {noop} from "../utils";
import isEqual from "react-fast-compare";

export interface IAlertProps {
    action: {
        type: "dismiss" | "acknowledge" | "open",
        href?: string,
        label?: string
    },
    content: any,
    /**
     * Can control only if manageExpanded = true
     */
    expanded: boolean,
    header: string,
    icon: string,
    textAlignCenter: boolean,
    manageExpanded: boolean,
    color: "yellow" | "red" | "green" | "blue" | "grey" | "grey-blue",
    textLinkProps: {
        label: string,
        href: string,
        openWindows: boolean,
        download: any
    },

    onVisibilityChange: Function,
    onExpandAction: Function,
    onTextLinkClicked: Function,
    onButtonClick: Function,
    /**
     *  Can control only if manageVisibility = true
     */
    visible: boolean,
    manageVisibility: boolean,
    /**
     * Time before remove (in milliseconds)
     */
    delay: number,
    onCloseAction: Function,
    manageButtonClick: boolean,
    className: any,

    defaultPosition: boolean,
    verticalPositions: "top"| "center"| "bottom",
    horizontalPositions: "start"| "center"| "end"
}

const Alert: FC<IAlertProps> = React.forwardRef((props, ref: LegacyRef<HTMLDivElement> | undefined) => {

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
    const [isVisible, setIsVisible] = useState(visible);

    const contentRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLElement>(null);
    let timer: NodeJS.Timeout;

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

    const buttonClicked = (e: Event) => {
        e.preventDefault();

        if (!manageButtonClick) {
            !manageVisibility && setIsVisible(false)
            if (action.href)
                openLink(action.href);
        }

        onButtonClick(e, action);
    }

    const expandAction = (e: Event) => {
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

    useEffect(defineSizes, [content, header])

    useEffect(() =>{ onVisibilityChange(visibleFinal) }, [visibleFinal])

    useEffect(() => { manageExpanded && setIsOverflowed(!expanded)}, [expanded, manageExpanded])

    useEffect(() => {
        if (manageVisibility) {
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
        {"text-align-center": textAlignCenter}
    )

    const textStyles = classnames({
        "text-container": true,
        "--overflowed": isOverflowed,
        "--setToOneLine": header && isOverflowed,
        "--expanded": expandedFinal
    })

    let showLabel = expandedFinal ? "less" : "more";
    let isButtonWithText = action.type === "acknowledge" || action.type === "open"

    if (!visibleFinal) return null;

    return (
        <>
            <div className={mainContainerClasses} ref={ref}>
                {icon && <Icon className={"alert-icon"} icon={icon}/>}

                <div className={alertContentClasses}
                     //@ts-ignore
                     ref={el => contentRef.current = el}
                >
                    {header && <div className={"alert-header"}>{header}</div>}
                    {content &&
                    //@ts-ignore
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
    className: "",

    onVisibilityChange: noop,
    onTextLinkClicked: noop,
    onExpandAction: noop,
    onButtonClick: noop,
    onCloseAction: noop,

    verticalPositions: "top",
    horizontalPositions: "center"
}

export default React.memo(Alert, (prev, next) => {
    return isEqual(prev, next);
});
