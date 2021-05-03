import * as React from "react";
import classNames from "classnames";

import Icon from "../Icon/Icon";
import Popover from "../Popover/Popover";

class TabItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            infoOpened: false
        }
        this.infoRef = null

    }

    shouldComponentUpdate(nextProps, nextState, nextContext){
        return this.state.infoOpened!==nextState.infoOpened|| this.props!==nextProps;
    }

    render() {
        const {item, isSelected, hideLabel, tabSelected} = this.props;
        const {label, icon, id, disabled, style,
            required = false, invalid = false, infoMessage} = this.props.item;

        const hasIcon = icon !== undefined && icon.length > 0;
        const curState = this.state.infoOpened;

        return (
            <div
                key={id}
                className={classNames({
                    "swf-tab": true,
                    "active": isSelected && !disabled,
                    "disabled": disabled,
                    "invalid": invalid
                })}
                onClick={(e) => {
                    tabSelected(item.id, disabled)}
                }
                style={style || {}}
            >
                { hasIcon && <Icon icon={icon} size="sm"/> }
                { !hideLabel && <div className="label">{label}</div> }
                { required && <Icon icon={'asterisk'} customSize={8}/>}
                { infoMessage && <div
                    className={"info-icon-container"}
                    ref={el => this.infoRef = el}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.setState({infoOpened: !curState})
                    }}
                >
                    <Icon
                        className={"info-icon"}
                        icon={this.state.infoOpened ? 'info-circle-fill': 'info-circle'}
                        size={"sm"}
                    />
                </div>
                }
                { this.infoRef && <Popover
                    hideTail={true}
                    manageOpened={true}
                    opened={this.state.infoOpened}
                    onOuterPopoverClicked = { e => this.setState({infoOpened: false})}
                    positionTarget={{current: this.infoRef}}
                    positions={[
                        {target: "top-center", content: "bottom-center"},
                        {target: "top-start", content: "bottom-start"},
                        {target: "top-end", content: "bottom-end"},
                        {target: "bottom-center", content: "top-center"},
                        {target: "bottom-start", content: "top-start"},
                        {target: "bottom-end", content: "top-end"}
                    ]}
                >
                    <Popover.Content>
                        <span className={"info-content"}>{infoMessage}</span>
                    </Popover.Content>
                </Popover>}
            </div>
        )
    }
};

export default TabItem;