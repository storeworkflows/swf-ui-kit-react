import * as React from "react";
import classNames from "classnames";

import Icon from "../Icon/Icon";

class TabItem extends React.Component {

    render() {
        const {item, isSelected, hideLabel, tabSelected} = this.props;
        const {label, icon, id, disabled, style} = this.props.item;

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
                <Icon icon={icon} size="sm"/>
                { !hideLabel && <div className="label">{label}</div> }
            </div>
        )
    }
}

export default TabItem;