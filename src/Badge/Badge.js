import propTypes from "prop-types";
import * as React from "react";
import classnames from "classnames";

const Badge = React.forwardRef((props, ref) => {
    const {children, text, className, count} = props;

    const isOneChar = text ? (text?.length === 1) : (count < 10 && count>-1);

    const containerClasses = classnames(
        className,
        "swf-badge-root");

    const badgeClasses = classnames(
        "swf-badge",
            { "--with-padding": !isOneChar });

    return <div className={containerClasses} ref={ref}>
        {children}
        <span className={badgeClasses}>
            {text ? text : count}
        </span>
    </div>

});

Badge.propTypes = {
    variant: propTypes.oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
    children: propTypes.element,
    text: propTypes.string,
    count: propTypes.number,
    className: propTypes.oneOfType([propTypes.string, propTypes.object])
}

Badge.defaultProps = {
    variant: "green",
    children: null,
    className: "",
    text: "0"
}

export default Badge