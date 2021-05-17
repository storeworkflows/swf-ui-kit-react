import classnames from "classnames";
import propTypes from "prop-types";
import React from 'react';
import {Component, Fragment, Children} from "react";
import CardPreloader from "./Preloader";

const Card = React.forwardRef((props, ref) => {
    const {vertical, loading, customStyles, size, children} = props;

    if (loading) return <CardPreloader/>

    return (
        <>
            <div
                className={
                    classnames({
                        "swf-card": true,
                        "vertical": vertical,
                        [`--${size}`]: true
                    })
                }
                style={customStyles}
                ref={ref}
            >
                <Fragment>{Children.only(children)}</Fragment>
            </div>
        </>
    )
});

Card.propTypes = {
    vertical: propTypes.bool,
    loading: propTypes.bool,
    customStyles: propTypes.object,
    size: propTypes.oneOf(["s", "m", "l"]),
    dispatch: propTypes.func
}

Card.defaultProps = {
    vertical: false,
    loading: false,
    customStyles: {},
    size: "m",
    dispatch: () => void 0
}

export default Card