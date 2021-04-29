import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import TextLink from "../TextLink/TextLink";
import {openLink} from "./utils";

class Alert extends React.Component {

    constructor(props) {
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
        this.expandAction = this.expandAction.bind(this);
        this.defineSizes = this.defineSizes.bind(this);
        this.setDelay = this.setDelay.bind(this);

        this.state = {
            expanded: this.props.expanded,
            isOverflowed: !this.props.expanded,
            oneLineText: false,
            visible: this.props.visible
        }

        this.contentRef = React.createRef();
        this.textRef = React.createRef();
        this.timer = null;
    }

    setDelay(){
        const {delay, onCloseAction, manageVisibility} = this.props;
        if(delay) {
            this.timer = setTimeout(() => {
                if (!manageVisibility)
                    this.setState({visible: false});
                onCloseAction();
            }, delay);
        }
    }

    buttonClicked(e){
        e.preventDefault();
        const {action, manageVisibility, onButtonClick, manageButtonClick} = this.props;

        if(!manageButtonClick){
            if(!manageVisibility)
                this.setState({visible: false})
            if(action.href)
                openLink(action.href);
        }

        onButtonClick(e, action);
    }

    expandAction(e){
        e.preventDefault();
        const {manageExpanded, onExpandAction} = this.props
        let currentState = this.state.expanded;

        if(!manageExpanded){
            currentState = !this.state.expanded;
            this.setState({
                expanded: currentState,
                isOverflowed: !currentState
            })
        }

        onExpandAction({isExpanded: currentState})
    }

    defineSizes(){
        const {header, content} = this.props;
        if(this.contentRef.current && this.textRef.current){
            let contentRef = this.contentRef.current;
            let text = this.textRef.current;

            let onlyHeader = header && !content;
            let oneLineText = !header && text.getBoundingClientRect().height < 32;

            this.setState({
                isOverflowed: contentRef.scrollHeight<text.scrollHeight,
                oneLineText: onlyHeader || oneLineText
            })
        }
    }

    componentDidMount() {
       this.defineSizes();
       this.setDelay();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {manageExpanded, expanded, content, header, manageVisibility, visible} = this.props

        if(manageExpanded && expanded!==this.state.expanded)
            this.setState({
                expanded: expanded,
                isOverflowed: !expanded
            })

        if(manageVisibility && visible!==this.state.visible) {
            this.setState({
                visible: visible
            });
            this.setDelay();
            this.defineSizes();
        }

        if(content !== prevProps.content || header !== prevProps.header)
            this.defineSizes()
    }

    render() {

        const {
            action,
            content,
            header,
            icon,
            color,
            textLinkProps,
            onTextLinkClicked
        } = this.props;

        const {isOverflowed, oneLineText, expanded, visible} = this.state


        const mainContainerClasses = classnames( color, {
            "swf-alert-container": true,
            "--alignCenter": !isOverflowed && !expanded,
            "--overflowed": isOverflowed,
            "--oneLineContent": oneLineText,
            "--expanded": expanded,
            "--no-icon": !icon
        })

        const textStyles = classnames({
            "text-container": true,
            "--overflowed": isOverflowed,
            "--setToOneLine": header && isOverflowed,
            "--expanded": expanded
        })

        let showLabel = expanded ? "less" : "more";
        let isButtonWithText = action.type === "acknowledge" || action.type === "open"

        return (
            visible ?
            <>
                <div className={mainContainerClasses}>
                    {icon && <Icon className={"alert-icon"} icon = {icon}/>}

                    <div className={"alert-content"}
                         ref = { el => this.contentRef.current = el}
                    >
                        {header && <div className={"alert-header"}>{header}</div>}
                        {content &&
                            <div ref = { el => this.textRef.current = el}
                                 className={textStyles}>
                                <p className={"alert-text"} >{content} {
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
                        {(isOverflowed || expanded) &&
                            <Button
                                className={"show-more-button"}
                                variant={"tertiary"}
                                onClick={this.expandAction}
                            >
                                {`Show ${showLabel}`}
                            </Button>}
                    </div>
                    <Button  className={classnames("alert-button", {"dismiss": !isButtonWithText})}
                             label={ isButtonWithText ?
                                 (action.label || (action.type === "acknowledge" ? "Ok" : "Open"))
                                 : undefined
                             }
                             icon={ !isButtonWithText ? "x" : undefined}
                             size={ isButtonWithText ? "md" : "lg"}
                             onClick={this.buttonClicked}
                             variant={"inherit"}
                    />
                </div>
            </>
                : null
        )
    }
}

Alert.defaultProps = {
    expanded: false,
    manageExpanded: false,
    color: "blue",
    onExpandAction: () => void 0,
    action: { type: "dismiss" },
    onTextLinkClicked: () => void 0,
    onButtonClick: () => void 0,
    onCloseAction: () => void 0,
    visible: true,
    manageVisibility: false,
    manageButtonClick: false
}

Alert.propTypes = {
    action: propTypes.shape({
        type: propTypes.oneOf(["dismiss" , "acknowledge" , "open"]).isRequired,
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
    color: propTypes.oneOf(["yellow" , "red" , "green" , "blue" , "grey" , "grey-blue"]),
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
