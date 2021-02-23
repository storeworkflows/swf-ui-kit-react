import * as React from "react";
import propTypes from "prop-types";

import styles from "./styles.scss";
import findByType from "../utils/findByType";
import {getPopoverStyle} from "./utils";

const Content = () => null;
const Target = () => null;


class Popover extends React.Component {
    constructor(props) {
        super(props);
        this.targetClicked = this.targetClicked.bind(this)

        this.state = {
            opened: false,
            height: 0,
            width: 0
        }

        this.targetRef = React.createRef();
        this.contentRef = React.createRef();
    }

    renderContent() {
        const {children, hideTail} = this.props;
        const content = findByType(children, Content);

        if (!content)
            return null;

        return <div className="popover-content arrow arrow-up"
                    ref={this.contentRef}>
                {content.props.children} </div>
    }

    renderTarget() {
        const {children, positionTarget} = this.props;
        const target = findByType(children, Target);

        let targetContent = (!target) ? positionTarget : target.props.children ;

        if (!targetContent)
            return null;

        return <div id ="popover-target"
                    ref={this.targetRef}
                    onClick={ this.targetClicked }>
                {targetContent} </div>
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
    }

    componentDidUpdate(){
        if(this.contentRef.current)
        {
            let targetDimensions = this.targetRef.current.getBoundingClientRect();
            let contentDimensions = this.contentRef.current.getBoundingClientRect();
            let position = this.props.positions;

            let stylesInfo =  getPopoverStyle(position, targetDimensions, contentDimensions, window.innerWidth, this.props.hideTail);
            let styles = stylesInfo.style;
            this.contentRef.current.style.transform = styles.transform;
            this.contentRef.current.style.left = styles.left;
            this.contentRef.current.style.top = styles.top;

            if(!this.props.hideTail && stylesInfo.hasArrow){
                for (const [key, value] of Object.entries(stylesInfo.arrowStyle))
                     this.contentRef.current.style.setProperty(key, value);
            } else
                 this.contentRef.current.style.setProperty("--popover-arrow-size", 0);

        }
    }


    render() {
        const {opened} = this.state;

        return (
            <>
                <style type="text/css">{styles}</style>
                <div className={"popover-element"}>
                    {this.renderTarget()}
                    {opened && this.renderContent()}
                </div>
            </>
        );
    }
};

Popover.Content = Content;
Popover.Target = Target;

Popover.defaultProps = {
    hideTail: false,
    manageOpened: false,
    opened: false,
    positions: [
        { target: 'bottom-start', content: 'top-start' },
        { target: 'bottom-end', content: 'top-end' },
        { target: 'top-start', content: 'bottom-start' },
        { target: 'top-end', content: 'bottom-end' },
        { target: 'top-end', content: 'top-start' },
        { target: 'bottom-end', content: 'bottom-start' },
        { target: 'top-start', content: 'top-end' },
        { target: 'bottom-start', content: 'bottom-end' }
    ]
}

Popover.propTypes = {
    hideTail: propTypes.bool,
    manageOpened: propTypes.bool,
    opened: propTypes.bool,
    positionTarget: propTypes.element,
    positions: propTypes.array,
    onClick: propTypes.func
}

export default Popover