import * as React from "react";
import {useState, useEffect, useRef} from 'react';
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
        expanded, onCloseAction, delay
    } = props;

    const [isExpanded, setIsExpanded] = useState(expanded);
    const [isOverflowed, setIsOverflowed] = useState(!expanded);
    const [oneLineText, setOneLineText] = useState(false);
    const [isVisible, setIsVisible] =  useState(visible);

    const contentRef = useRef(null);
    const textRef = useRef(null);
    let timer = null;


    const setDelay = () => {
        if (delay) {
            timer = setTimeout(() => {
                if (!manageVisibility)
                    setIsVisible(false)
                onCloseAction();
            }, delay);
        }
    }

    const buttonClicked = (e) => {
        e.preventDefault();

        if (!manageButtonClick) {
            if (!manageVisibility)
                setIsVisible(false)
            if (action.href)
                openLink(action.href);
        }

        onButtonClick(e, action);
    }

    const expandAction = (e) => {
        e.preventDefault();

        let curValue = isExpanded;
        if (!manageExpanded) {
            curValue = !isExpanded;
            setIsOverflowed(!curValue);
            setIsExpanded(curValue)
        }

        onExpandAction({isExpanded: curValue})
    }

    const defineSizes = () => {
        const {header, content} = props;
        let contentEl = contentRef?.current;
        let text = textRef?.current;

        if (contentEl && text) {
            let onlyHeader = header && !content;
            let oneLineText = !header && text.getBoundingClientRect().height < 32;

            setIsOverflowed(contentEl.scrollHeight < text.scrollHeight);
            setOneLineText(onlyHeader || oneLineText)
        }
    }


    useEffect( defineSizes, [content, header])

    useEffect(() => {
        if(manageVisibility){
            setIsVisible(visible)
            setDelay();
            defineSizes();
        }
    }, [visible])

    useEffect(() => {
        if(manageExpanded){
            setIsExpanded(expanded);
            setIsOverflowed(!expanded)
        }
    }, [expanded])

    useEffect(() => {
        defineSizes();
        setDelay();

        return () => clearTimeout(timer);
    }, []);


    const mainContainerClasses = classnames(color, {
        "swf-alert-container": true,
        "--alignCenter": !isOverflowed && !isExpanded,
        "--overflowed": isOverflowed,
        "--oneLineContent": oneLineText,
        "--expanded": isExpanded,
        "--no-icon": !icon
    })

    const textStyles = classnames({
        "text-container": true,
        "--overflowed": isOverflowed,
        "--setToOneLine": header && isOverflowed,
        "--expanded": isExpanded
    })

    let showLabel = isExpanded ? "less" : "more";
    let isButtonWithText = action.type === "acknowledge" || action.type === "open"

    return (
        isVisible ?
            <>
                <div className={mainContainerClasses} ref={ref}>
                    {icon && <Icon className={"alert-icon"} icon={icon}/>}

                    <div className={"alert-content"}
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
                        {(isOverflowed || isExpanded) &&
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
            : null
    );
    //}
});

Alert.defaultProps = {
    color: "blue",
    action: {type: "dismiss"},

    visible: true,
    expanded: false,

    manageExpanded: false,
    manageVisibility: false,
    manageButtonClick: false,

    onTextLinkClicked: () => void 0,
    onExpandAction: () => void 0,
    onButtonClick: () => void 0,
    onCloseAction: () => void 0
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
    manageExpanded: propTypes.bool,
    color: propTypes.oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
    textLinkProps: propTypes.shape({
        label: propTypes.string,
        href: propTypes.string,
        openWindows: propTypes.bool,
        download: propTypes.oneOfType([propTypes.string, propTypes.object])
    }),
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
    manageButtonClick: propTypes.bool
}

export default Alert
