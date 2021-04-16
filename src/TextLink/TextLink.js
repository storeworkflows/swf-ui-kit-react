import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

class TextLink extends React.Component {

    render() {

        const {
            download,
            href,
            label,
            openWindows,
            underline,
            variant,
            onClick,
            className
        } = this.props;

        let linkClasses = classnames(
            "swf-text-link",
            variant,
            className,
            { "underline": underline }
        )

        return (
                <a href={href}
                   download={download}
                   onClick={onClick}
                   className={linkClasses}
                   target={openWindows ? "_blank" : "_self"}
                >{label}</a>
        )
    }
}

TextLink.defaultProps = {
    download: false,
    openWindows: false,
    underline: false,
    variant: "primary",
    onClick: () => void 0,
    className: {}
}

TextLink.propTypes = {
    download: propTypes.oneOfType([
        propTypes.string,
        propTypes.bool
    ]),
    href: propTypes.string,
    label: propTypes.string,
    openWindows: propTypes.bool,
    underline: propTypes.bool,
    variant: propTypes.oneOf(["primary", "secondary"]),
    onClick:propTypes.func,
    className: propTypes.oneOfType([propTypes.string, propTypes.object])
}

export default TextLink