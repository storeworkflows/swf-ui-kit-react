import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import Icon from "../Icon/Icon";
import {addStyles, getIconSize} from "./utils";

const Button = (props) => {

    const {
        disabled,
        icon,
        label,
        tooltipContent,
        size,
        variant,
        customStyle,
        children,
        onClick,
        className,
        type
    } = props;

    const additionalStyle = addStyles(customStyle);

    const _hasIcon = icon.length > 0;
    const _hasLabel = label.length > 0;
    const _hasOnlyIcon = _hasIcon && !_hasLabel;
    const _iconSize = getIconSize(customStyle, icon, size);

    const buttonClasses = classnames(
        className,
        variant,
        `button-${size}`,
        {
            "swf-button": true,
            "active": !disabled,
            "disabled": disabled,
            "has-icon": _hasIcon
        }
    );

    const iconClasses = classnames({
        "button-icon": true,
        "label-button-icon": !_hasOnlyIcon
    });

    return <button
                ref={elm => props.innerRef.current = elm}
                className={buttonClasses}
                onClick={onClick}
                disabled={disabled}
                title={tooltipContent}
                style={additionalStyle}
                type={type}
            >
                <div className="content">
                    {_hasIcon &&
                        <div className={iconClasses}>
                            <Icon
                                icon={icon}
                                customSize={_iconSize}
                            />
                        </div>
                    }

                    {_hasLabel && <label className={"button-label"}>{label}</label>}
                    { children }
                </div>
    </button>
}

Button.defaultProps = {
    disabled: false,
    icon: "",
    label: "",
    tooltipContent: "",
    size: 'md',
    variant: "secondary",
    customStyle: null,
    className: {},
    innerRef: React.createRef(),
    type: "button"
}

Button.propTypes = {
    disabled: propTypes.bool,
    icon: propTypes.string,
    label: propTypes.string,
    tooltipContent: propTypes.string,
    size: propTypes.oneOf(['sm', 'md', 'lg']),
    variant: propTypes.oneOf(["primary", "primary-positive", "primary-negative", "secondary",
        "secondary-positive", "secondary-negative", "tertiary", "inherit", ""]),
    customStyle: propTypes.object,
    onClick: propTypes.func,
    className: propTypes.oneOfType([propTypes.object, propTypes.string]),
    innerRef: propTypes.object,
    type: propTypes.oneOf(["button", "reset", "submit"])
}

export default React.memo(Button);

