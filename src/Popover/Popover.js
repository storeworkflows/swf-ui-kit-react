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
      //  console.log(positionTarget);
        if(positionTarget){

            if(this.targetRef.current === null)
                this.targetRef = positionTarget;

            let el = this.targetRef.current;
            el.onclick = this.targetClicked ;
            el.classList.toggle(`popover-target`);

            return null;
        } else {
            if (!target)
                return null;

            return <div className={"popover-target"}
                        ref={this.targetRef}
                        onClick={ this.targetClicked }>
                             {target}
                    </div>
        }
    }

    targetClicked (){
        const {manageOpened, onClick} = this.props;
        let currentState = this.state.opened;
      //  console.log(manageOpened);
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
    }

    setStylesToContent(){
        if(this.contentRef.current)
        {
            let targetDimensions = this.targetRef.current.getBoundingClientRect();
            let contentDimensions = this.contentRef.current.getBoundingClientRect();
            const {positions, hideTail, roundBorder} = this.props;

            let stylesInfo =  getPopoverStyle(positions, targetDimensions, contentDimensions, window.innerWidth, hideTail, roundBorder);
            let styles = stylesInfo.style;
            this.contentRef.current.style.transform = styles.transform;
            this.contentRef.current.style.left = styles.left;
            this.contentRef.current.style.top = styles.top;
            this.contentRef.current.style.visibility = "visible";


            if(!hideTail && stylesInfo.hasArrow) {
                for (const [key, value] of Object.entries(stylesInfo.arrowStyle))
                    this.contentRef.current.style.setProperty(key, value);
            }
        }
    }

    componentDidUpdate(){
        if(this.props.manageOpened && this.props.opened!== this.state.opened)
            this.setState({opened: this.props.opened})


        if(this.state.opened) {
            this.targetRef.current.appendChild(this.contentRef.current);
            this.setStylesToContent();
        }
        else
        {
            let elToRemove = this.targetRef.current.querySelector(".popover-content");
            if(elToRemove !==null)
                elToRemove.remove();
        }
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