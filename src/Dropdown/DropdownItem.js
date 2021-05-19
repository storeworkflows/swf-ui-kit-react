import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

import Icon from "../Icon/Icon";

const DropdownItem = React.forwardRef((props, ref) => {

    const {
        id, disabled, onSelectAction, isSelected,
        label, className, sublabel, number, icon
    } = props;

    let classes = classnames(
        className,
        "swf-dropdown-item",
        {
            "disabled": disabled,
            "selected": isSelected,
            "--no-icon": !icon
        });

    return (
        <>
            <div className={classes}
                 onClick={() => !disabled && onSelectAction({id})}
                 data-key={id}
                 ref={ref}
            >
                {icon && <Icon
                    className={"item-element item-start"}
                    icon={icon}
                    customSize={20}
                />}
                <div className={"text-items"}>
                    <label className={"label"}>{label}</label>
                    {sublabel && <div className={"sublabel"}>{sublabel}</div>}
                </div>
                {number && <span className={"item-element item-end"}>{number}</span>}
            </div>
        </>
    )
});

DropdownItem.defaultProps = {
    disabled: false,
    isSelected: false,
    className: {}
}

DropdownItem.propTypes = {
    id: propTypes.oneOfType([
        propTypes.string,
        propTypes.number
    ]),
    label: propTypes.string,
    disabled: propTypes.bool,
    onSelectAction: propTypes.func,
    isSelected: propTypes.bool,
    className: propTypes.object,
    sublabel: propTypes.string,
    number: propTypes.number,
    icon: propTypes.string,
}

export default DropdownItem