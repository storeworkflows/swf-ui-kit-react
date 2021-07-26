import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import {SWF_TOGGLE} from "./constants";
import {useState} from "react";

const _addStyles = (customStyle) => {
    let styles = {};
    customStyle && SWF_TOGGLE.AVAILABLE_CUSTOM_STYLES.forEach((styleName) => {
        if (customStyle[styleName] !== undefined)
            styles[`--${styleName}`] = customStyle[styleName];
    })

    return styles;
}

const Toggle = React.memo(React.forwardRef((props, ref) => {

    const {disabled, size, customStyle, className, manageChecked, checked, visible, onClick} = props;
    const [isChecked, setIsChecked] = useState(checked)

    const onToggleClick = () => {
        if (manageChecked) {
            onClick({value: checked});
        } else {
            setIsChecked(!isChecked);
            onClick({value: !isChecked});
        }
    }

    const additionalStyle = _addStyles(customStyle);
    let toggleClasses = classnames(
        className,
        `toggle-${size}`,
        {
            "switch": true,
            "disabled": disabled
        })

    return visible && <label className={toggleClasses}
                           style={additionalStyle}
                           ref={ref}
        >
            <input type="checkbox"
                   checked={manageChecked ? checked : isChecked}
                   disabled={disabled}
                   onChange={() => !disabled && onToggleClick()}
            />
            <span className="slider"/>
        </label>
}));

Toggle.defaultProps = {
    size: "md",
    onClick: () => void 0,
    className: "",
    visible: true,
    checked: false
}

Toggle.propTypes = {
    /**
     * Available to change only when manageChecked=true
     */
    checked: propTypes.bool,
    disabled: propTypes.bool,
    manageChecked: propTypes.bool,
    size: propTypes.oneOf(["sm", "md"]),
    /**
     * Available custom styles: "width",   "height",   "circle-border-size", "border-size", "circle-gap",
     "active-border-color", "active-background-color",
     "border-color", "background-color",
     "circle-border-color", "circle-background", "hover-circle-background"
     */
    customStyle: propTypes.object,
    onClick: propTypes.func,
    className: propTypes.oneOfType([propTypes.string, propTypes.object]),
    visible: propTypes.bool
}

export default Toggle;
