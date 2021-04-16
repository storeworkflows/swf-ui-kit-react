import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import Icon from "../Icon/Icon";

class HighlightedValue extends React.Component {

    getIconSize(size, icon){
        switch (size){
            case "sm": return icon? 11: 7;
            case "lg": return icon? 18: 10;
            default: return icon ? 14: 8;
        }
    }
    render() {
        const {
            roundBorder,
            className,
            showIcon,
            onClick,
            variant,
            color,
            label,
            icon,
            size
        } = this.props;

        const classes = classnames(
            "highlighted-value-container",
            `--${size}`,
            `--${variant}`,
            color,
            className, {
                "--round": roundBorder
            }
        )

        let iconSize = this.getIconSize(size, icon);

        return (
            <>
                <div
                    className={classes}
                    onClick={onClick}
                >
                    {showIcon && <Icon
                        className="highlighted-icon"
                        icon={icon? icon : "circle-fill"}
                        customSize={iconSize}
                    />}
                    {label && <span>{label}</span>}
                </div>
            </>
        )
    }
}

HighlightedValue.defaultProps = {
    className: {},
    onClick: () => void 0,
    showIcon: false,
    size: "md",
    variant: "primary",
    color: "red",
    roundBorder: true
}

HighlightedValue.propTypes = {
    roundBorder:propTypes.bool,
    label: propTypes.string,
    className: propTypes.oneOfType([propTypes.string, propTypes.object]),
    onClick: propTypes.func,
    icon: propTypes.string,
    showIcon: propTypes.bool,
    size: propTypes.oneOf(["sm", "md", "lg"]),
    variant: propTypes.oneOf(["primary", "secondary", "tertiary"]),
    color: propTypes.oneOf(["yellow" , "red" , "green" , "blue" , "grey" , "grey-blue"])
}

export default HighlightedValue