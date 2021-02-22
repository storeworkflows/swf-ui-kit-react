import * as React from "react";
import propTypes from "prop-types";

import styles from "./styles.scss";



const getChild = (children, slotValue) => {
    let result = null;
    children.forEach( child => {
        if(child.props.slot === slotValue)
            result = child;
    })
    return result;
}
class Popover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: props.opened
        }
    }

    render() {

        const {
            hideTail,
            manageOpened,
            positionTarget,
            positions,
            children,
            onClick
        } = this.props

        const {opened} = this.state;

        console.log(positionTarget);
        console.log(children);
        console.log(children[2]);

        const _hasPositionTarget = (positionTarget !== undefined);
        const _target = _hasPositionTarget ? positionTarget : getChild(children, "target");
        const _content = getChild(children, "content");
        const _isManagedByUser = manageOpened && onClick !== undefined;

        console.log("target", _target);
        console.log("content", _content);

        const targetClicked = () => {
            console.log("oldState", opened);
            this.setState((oldState) => ({
                opened: !oldState.opened
            }));
        }

        return (
            <>
                <style type="text/css">{styles}</style>
                <div
                    className="popover-target"
                    onClick={ _isManagedByUser ? onClick({opened: opened}) : targetClicked }
                >
                    {_target}
                </div>
                {opened &&
                    <div className="popover-content">
                        {_content}
                    </div>
                }
            </>
        );
    }
}

Popover.defaultProps = {
    hideTail: false,
    manageOpened: false,
    opened: false
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