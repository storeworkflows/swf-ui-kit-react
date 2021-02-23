import * as React from "react";
import classNames from "classnames";

import Icon from "../Icon/Icon";

class TabItem extends React.Component {

    render() {
        const {item, isSelected, hideLabel, tabSelected} = this.props;
        const {label, icon, id, disabled, style} = this.props.item;

        const hasIcon = icon !== undefined && icon.length > 0;
        return (
            <div
                key={id}
                className={classNames({
                    "swf-tab": true,
                    "active": isSelected && !disabled,
                    "disabled": disabled
                })}
                disabled={disabled}
                onClick={() => tabSelected(item.id, disabled)}
                style={style || {}}
            >
                { hasIcon && <Icon icon={icon} size="sm"/> }
                { !hideLabel && <div className="label">{label}</div> }
            </div>
        )
    }
}

export default TabItem;