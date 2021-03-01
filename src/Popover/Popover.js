import * as React from "react";
import propTypes from "prop-types";

import styles from "./styles.scss";
import findByType, {createSubComponent} from "../utils/findByType";
import {getAllPossibleVariants, getPopoverStyle} from "./utils";

class Popover extends React.Component {
    constructor(props) {
        super(props);
        this.targetClicked = this.targetClicked.bind(this)

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
            if(this.targetRef.current === null)
                this.targetRef = positionTarget;

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
            this.setState({
                opened: currentState
            });
        }

        if(onClick!==undefined && onClick!==null)
            onClick({value: currentState})
    }

    componentDidMount() {
        this.setState({
            opened: this.props.opened
        })
        this.setStylesToContent();
    }


    setStylesToContent() {

        const {positions, hideTail, roundBorder} = this.props;
        let contentElement = this.contentRef.current;

        let targetDimensions = this.targetRef.current.getBoundingClientRect()
        let contentDimensions = contentElement.getBoundingClientRect();

      //  console.log("target", targetDimensions);
        console.log("content", contentDimensions);

        let stylesInfo = getPopoverStyle(positions, targetDimensions, contentDimensions, window.innerWidth, hideTail, roundBorder);
        let styles = stylesInfo.style;
        let addTop = parseInt(styles.top.replace("px", ''));
        let addLeft = parseInt(styles.left.replace("px", ''));

        contentElement.style.transform = styles.transform;
        contentElement.style.left = targetDimensions.x - contentDimensions.x + addLeft + "px";
        contentElement.style.top = targetDimensions.y - contentDimensions.y + addTop  + "px";
        contentElement.style.visibility = "visible";
        console.log("transform ", styles);
        // console.log(contentElement.getBoundingClientRect())

        if (!hideTail && stylesInfo.hasArrow) {
            for (const [key, value] of Object.entries(stylesInfo.arrowStyle))
                contentElement.style.setProperty(key, value);
        }
    }

    changeContentVisibility(visibility){
        let contentElement = this.contentRef.current;

        if(contentElement)
            contentElement.style.visibility = visibility;
    }


    componentDidUpdate(){
        const visible = "visible";
        const hidden = "hidden";

        if(this.props.manageOpened && this.props.opened!== this.state.opened)
            this.setState({opened: this.props.opened})

        if(this.state.opened) {

            this.setStylesToContent();
           // this.changeContentVisibility(visible);
        }
        else
            this.changeContentVisibility(hidden);

        console.log("styles", this.contentRef.current.getBoundingClientRect() )
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