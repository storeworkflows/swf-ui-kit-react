import * as React from "react";
import propTypes from "prop-types";

import findByType, {createSubComponent} from "../utils/findByType";
import {getAllPossibleVariants, getPopoverStyle} from "./utils";
import classnames from "classnames";

class Popover extends React.Component {
    constructor(props) {
        super(props);
        this.targetClicked = this.targetClicked.bind(this);
        this.updateOpenedState = this.updateOpenedState.bind(this);

        this.state = {
            opened: false
        }

        this.targetRef = null;
        this.contentRef = null;
    }

    renderContent() {
        const {children, roundBorder} = this.props;
        const content = findByType(children, "Content");

        if (!content)
            return null;

        return <div className={classnames({
                    "popover-content": true,
                    "noRoundBorder": !roundBorder
                    })}
                    ref={el => this.contentRef = el}>
            <div className={"popover-content-keeper"}>{content}</div>
            </div>;

    }

    renderTarget() {
        const {children, positionTarget} = this.props;
        const target = findByType(children, "Target");

        if(positionTarget){
            if(this.targetRef === null || this.targetRef!==positionTarget.current)
            {
                this.targetRef = positionTarget.current;
                if(this.contentRef){
                    this.resetStyles();
                    if(this.state.opened)
                        this.setStylesToContent()
                }
            }

            this.targetRef.onclick = this.targetClicked;
            return null;
        }

        if (!target)
            return null;

        return <div className={"popover-target"}
                    ref={ el => this.targetRef = el}
                    onClick={ this.targetClicked }>
                        {target}
                </div>

    }

    targetClicked (){
        const {manageOpened, onClick} = this.props;
        let currentState = this.state.opened;
        if(!manageOpened) {
            currentState = !currentState
            this.updateOpenedState(currentState)
        }

        if(onClick!==undefined && onClick!==null)
            onClick({value: currentState})
    }

    componentDidMount() {
        this.updateOpenedState(this.props.opened)
    }


    setStylesToContent() {
        if(this.contentRef && this.targetRef) {
            const {positions, hideTail, roundBorder} = this.props;
            let contentElement = this.contentRef;
            let targetDimensions = this.targetRef.getBoundingClientRect()
            let contentDimensions = contentElement.getBoundingClientRect();

            let windowParam = {
                startY: 0,
                startX: 0,
                endY: window.innerHeight,
                endX: window.innerWidth
            }

            let stylesInfo = getPopoverStyle(positions, targetDimensions, contentDimensions, windowParam, hideTail, roundBorder);
            let styles = stylesInfo.style;

            contentElement.style.transform = styles.transform;
            contentElement.style.left = styles.left;
            contentElement.style.top = styles.top;
            contentElement.style.visibility = "visible";

            if(styles.maxHeight)
                contentElement.children[0].style.maxHeight = styles.maxHeight;
            if(styles.maxWidth)
                contentElement.children[0].style.maxWidth = styles.maxWidth;

            if (!hideTail && stylesInfo.hasArrow) {
                for (const [key, value] of Object.entries(stylesInfo.arrowStyle))
                    contentElement.style.setProperty(key, value);
            }
        }
    }

    resetStyles(){
        let contentElement = this.contentRef;
        if(contentElement)
        {
            contentElement.style.visibility = "hidden";
            contentElement.style.transform = `translate3d(0, 0, 0)`;
            contentElement.style.left =  0;
            contentElement.style.top = 0;
            contentElement.children[0].style.maxHeight = 'none';
            contentElement.children[0].style.maxWidth = 'none';
            contentElement.style.margin = 0;
        }
    }


    componentDidUpdate(){
        let openedValue = this.props.opened;
        if(this.props.manageOpened && this.props.opened!== this.state.opened)
            this.updateOpenedState(openedValue)
    }

    updateOpenedState(value){
        if(value)
            this.setStylesToContent();
        else
            this.resetStyles();

        this.setState({opened: value})
    }


    render() {
        return (
            <>
                {this.renderContent()}
                {this.renderTarget()}
            </>
        );
    }
};

Popover.Content = createSubComponent("Content");
Popover.Target = createSubComponent("Target");

Popover.defaultProps = {
    hideTail: false,
    manageOpened: false,
    opened: false,
    positions: getAllPossibleVariants(),
    roundBorder: true,
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
    onClick: propTypes.func,
    roundBorder: propTypes.bool
}

export default Popover