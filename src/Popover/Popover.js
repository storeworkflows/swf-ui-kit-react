import * as React from "react";
import propTypes from "prop-types";

import findByType, {createSubComponent} from "../utils/findByType";
import {getAllPossibleVariants, getPopoverStyle} from "./utils";
import classnames from "classnames";
import {isPointInsideTheElement} from "../DatePicker/utils";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class Popover extends React.Component {
    constructor(props) {
        super(props);
        this.targetClicked = this.targetClicked.bind(this);
        this.documentClicked = this.documentClicked.bind(this);
        this.changeOpenedState = this.changeOpenedState.bind(this);
        this.updateOpenedState = this.updateOpenedState.bind(this);
        this.contentResized = this.contentResized.bind(this);

        this.state = {
            opened: false,
            haveScroll: false,
            contentHeight: 0
        }

        this.targetRef = null;
        this.contentRef = null;
    }

    renderContent() {
        const {children, roundBorder, contentStyles} = this.props;
        const content = findByType(children, "Content");

        if (!content)
            return null;

        return (
            <div className={classnames({
                        "popover-content": true,
                        "noRoundBorder": !roundBorder
                    })}
                 ref={el => this.contentRef = el}
                 style={contentStyles}
            >
                <div
                    className={"popover-content-keeper"}
                    onresize={this.contentResized()}
                >
                    {content}</div>
            </div>
        );
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

            this.targetRef.onclick = (e) => this.targetClicked(e)
            return null;
        }

        if (!target)
            return null;

        return <div className={"popover-target"}
                    ref={ el => this.targetRef = el}
                    onClick={ (e) => this.targetClicked(e) }>
                        {target}
                </div>

    }

    async contentResized() {
        const {opened, contentHeight} = this.state;
        if (this.contentRef) {
            let el = this.contentRef.children[0];
            let curHeight = contentHeight;

            await sleep(100);
            curHeight = el.scrollHeight;
            if (curHeight !== contentHeight) {
                this.setState({contentHeight: curHeight})

                this.resetStyles();
                if (opened)
                    this.setStylesToContent();
            }
        }
    }

    changeOpenedState(){
        const {manageOpened} = this.props;
        let currentState = this.state.opened;

        if(!manageOpened) {
            currentState = !currentState
            this.updateOpenedState(currentState)
        }
    }

    targetClicked (e){
        e.preventDefault();
        const {manageOpened, onTargetClick} = this.props;
        const {opened} = this.state;

        if(isPointInsideTheElement(this.targetRef, e.clientX, e.clientY)) {
            this.changeOpenedState();
            onTargetClick({value: manageOpened ? opened : !opened})
        }
    }

    documentClicked(event){
        const {manageOpened, onOuterPopoverClicked} = this.props;
        event.preventDefault();

        let pointX = event.clientX;
        let pointY = event.clientY;
        let currentState = this.state.opened;
        let contentElement = this.contentRef;
        let targetElement = this.targetRef;

        if( currentState && contentElement && targetElement) {

            let isOutsideContent = !isPointInsideTheElement(contentElement, pointX, pointY);
            let isOutsideTarget = !isPointInsideTheElement(targetElement, pointX, pointY);

            if(isOutsideContent && isOutsideTarget) {
                if(!manageOpened)
                    this.changeOpenedState();
                onOuterPopoverClicked();
            }
        }
    }

    setStylesToContent() {
        if(this.contentRef && this.targetRef) {
            const {positions, hideTail, roundBorder, contentStyles} = this.props;

            let padding = contentStyles && contentStyles['padding'].split('px')[0] ;
            let contentElement = this.contentRef;
            let targetDimensions = this.targetRef.getBoundingClientRect()
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

    resetStyles(){
        let contentElement = this.contentRef;
        if(contentElement)
        {
            contentElement.style.visibility = "hidden";
            contentElement.style.transform = `translate3d(0, 0, 0)`;
            contentElement.style.left =  0;
            contentElement.style.top = 0;
            contentElement.children[0].style.maxHeight = contentElement.style.height || contentElement.style.maxHeight;
            contentElement.children[0].style.maxWidth = contentElement.style.width || contentElement.style.maxWidth;
            contentElement.style.margin = 0;
        }
    }

    updateOpenedState(value){
        if(value)
            this.setStylesToContent();
        else
            this.resetStyles();

        this.setState({opened: value})
    }


    componentDidUpdate(prevProps){
        let {opened, manageOpened} = this.props;

        if(manageOpened && opened!== this.state.opened)
            this.updateOpenedState(opened)
    }


    componentDidMount() {
        document.addEventListener("click", e => this.documentClicked(e));
        this.updateOpenedState(this.props.opened)
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
    onTargetClick: () => void 0,
    onOuterPopoverClicked: () => void 0
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
    contentStyles: propTypes.object
}

export default Popover