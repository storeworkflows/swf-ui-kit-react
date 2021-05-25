import classnames from "classnames";
import * as React from "react";
import propTypes from "prop-types";
import Icon from "../../Icon/Icon";

const ArrowButton = React.forwardRef((props, ref) => {
    const {isNext, onClick} = props;

    const classes = classnames({
        "calendar-arrow": true,
        "next": isNext
    });

    return (
        <div
            className={classes}
            onClick={(e) => onClick(e, isNext)}>
            <Icon
                icon={isNext ? "chevron-right" : "chevron-left"}
                size={"sm"}/>
        </div>
    )
})

ArrowButton.defaultProps = {
    onClick: () => void 0
}

ArrowButton.propTypes = {
    isNext: propTypes.bool,
    onClick: propTypes.func
}

export default ArrowButton;