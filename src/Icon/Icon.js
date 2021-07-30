import * as React from "react";
import propTypes from "prop-types";

import {SIZE} from "./constants";
import Icons from "bootstrap-icons/bootstrap-icons.svg";

import classnames from "classnames";

const Icon = (props) => {
    const {
        icon, size, customSize, color, className,
        innerRef, zeroSize, onClick
    } = props;


    const finalSize = customSize ? customSize : SIZE[size];
    const dimensions = zeroSize ? 0 : finalSize;

    const classes = classnames("bi", className)
    const styles = {
        color: color,
        height: dimensions,
        width: dimensions
    }

    return <svg
        onClick={onClick}
        ref={elm => innerRef.current = elm}
        className={classes}
        style={styles}
        width={dimensions}
        height={dimensions}
        fill="currentColor"
    >
        <use xlinkHref={`${Icons}#${icon}`}/>
    </svg>

}

Icon.defaultProps = {
    icon: "",
    size: 'md',
    color: "black",
    className: "",
    innerRef: React.createRef(),
    onClick: () => void 0
}

Icon.propTypes = {
    icon: propTypes.string.isRequired,
    size: propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
    customSize: propTypes.number,
    color: propTypes.string,
    className: propTypes.oneOfType([propTypes.object, propTypes.string]),
    innerRef: propTypes.object,
    zeroSize: propTypes.bool,
    onClick: propTypes.func
}

export default Icon
