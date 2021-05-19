import propTypes from "prop-types";
import * as React from "react";
import classnames from "classnames";

const Badge = React.forwardRef((props, ref) => {
    const {text, className, variant} = props;

    const isOneChar = text?.length === 1;

    const containerClasses = classnames(
        className,
        "swf-badge-root");

    const badgeClasses = classnames(
        "swf-badge",
            variant,
            { "--with-padding": !isOneChar });

    return <div className={containerClasses} ref={ref}>
        <span className={badgeClasses}>
            {text}
        </span>
    </div>

});

Badge.propTypes = {
    variant: propTypes.oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
    text: propTypes.string,
    className: propTypes.oneOfType([propTypes.string, propTypes.object])
}

Badge.defaultProps = {
    variant: "green",
    className: "",
    text: "0"
}

export default Badge