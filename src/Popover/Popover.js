import * as React from "react";
import propTypes from "prop-types";

import styles from "./styles.scss";
import findByType, {createSubComponent} from "../utils/findByType";
import {getAllPossibleVariants, getPopoverStyle} from "./utils";

class Popover extends React.Component {
    constructor(props) {
        super(props);
        this.targetClicked = this.targetClicked.bind(this);
        this.updateOpenedState = this.updateOpenedState.bind(this);

        this.state = {
            opened: false
        }

        this.targetRef = React.createRef();
        this.contentRef = React.createRef();
    }

    renderContent() {
        const {children} = this.props;
        const content = findByType(children, "Content");

        if (!content)
            return null;

        return <div className="popover-content"
                    ref={this.contentRef}>
            {content} </div>;

    }

    renderTarget() {
        const {children, positionTarget} = this.props;
        const target = findByType(children, "Target");

        if(positionTarget){
            if(this.targetRef.current === null || this.targetRef!==positionTarget)
            {
                this.targetRef = positionTarget;
                if(this.contentRef && this.contentRef.current){
                    this.resetStyles();
                    if(this.state.opened)
                        this.setStylesToContent()
                }
            }

            this.targetRef.current.onclick = this.targetClicked;
            return null;
        }

        if (!target)
            return null;

        return <div className={"popover-target"}
                    ref={this.targetRef}
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
        if(this.contentRef) {
            const {positions, hideTail, roundBorder} = this.props;
            let contentElement = this.contentRef.current;

            let targetDimensions = this.targetRef.current.getBoundingClientRect()
            let contentDimensions = contentElement.getBoundingClientRect();

            let stylesInfo = getPopoverStyle(positions, targetDimensions, contentDimensions, window.innerWidth, hideTail, roundBorder);
            let styles = stylesInfo.style;

            contentElement.style.transform = styles.transform;
            contentElement.style.left = styles.left;
            contentElement.style.top = styles.top;
            contentElement.style.visibility = "visible";

            if (!hideTail && stylesInfo.hasArrow) {
                for (const [key, value] of Object.entries(stylesInfo.arrowStyle))
                    contentElement.style.setProperty(key, value);
            }
        }
    }

    resetStyles(){
        if(this.contentRef)
        {
            let contentElement = this.contentRef.current;
            contentElement.style.visibility = "hidden";
            contentElement.style.transform = `translate3d(${0}px, ${0}px, 0)`
            contentElement.style.left =  0;
            contentElement.style.top = 0;
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
                <style type="text/css">{styles}</style>
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