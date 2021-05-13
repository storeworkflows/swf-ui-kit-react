import propTypes from "prop-types";
import * as React from "react";

const Badge = React.forwardRef((props, ref) => {

    return <div className="swf-badge-root" ref={ref}>
        {props.children}
        <span className="swf-badge">
            {props?.count}
        </span>
    </div>

});

Badge.propTypes = {
    variant: propTypes.oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
    count: propTypes.number,
    children: propTypes.element
}

Badge.defaultProps = {
    variant: "green",
    count: 0,
    children: null
}

export default Badge