import * as React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Avatar from "../Avatar/Avatar";
import Icon from "../Icon/Icon";
import {noop} from "../utils";

class Pill extends React.Component {
    constructor(props) {
        super(props);
        this.removePill = this.removePill.bind(this);
        this.pillRef = React.createRef();
    }

    removePill() {
        if (this.props.onDelete === noop) {
            this.pillRef?.current?.remove()
        }
        this.props.onDelete()
    }

    render() {
        const {
            canDismiss,
            icon,
            classNames,
            member,
            label,
            outline,
            size,
            clickable,
            color,
            deleteIcon,
            onDelete,
            disabled
        } = this.props;

        const hasMember = member;

        const hasIcon = !hasMember && icon;

        const showPillIcon = hasMember || hasIcon;

        return (
            <>
                <div
                    ref={elm => this.pillRef.current = elm}
                    className={classnames({
                        "pill": true,
                        "--disabled": disabled,
                        "--clickable": clickable && !disabled,
                        "--outlined": outline,
                        [`--${size}`]: true,
                        [`--${color}`]: true,
                        [classNames]: true
                    })}>
                    {showPillIcon && <div className="pill-icon">
                        {hasMember && <Avatar member={member} clickable={false}/>}
                        {hasIcon && <Icon icon={icon} size="sm"/>}
                    </div> }
                    <span className={classnames({
                        "pill-label": true,
                        [`--${size}`]: true
                    })}>{label}</span>
                    {canDismiss && <div className="pill-icon --delete" onClick={this.removePill}>
                        <Icon icon={deleteIcon || "x"} size="sm"/>
                    </div>}
                </div>
            </>

        )
    }
}

Pill.defaultProps = {
    canDismiss: false,
    disabled: false,
    icon: null,
    member: null,
    label: "Test",
    outline: false,
    size: "md",
    classNames: "",
    clickable: false,
    color: "default",
    deleteIcon: null,
    onDelete: noop
}

Pill.propTypes = {
    canDismiss: PropTypes.bool,
    icon: PropTypes.string,
    member: PropTypes.shape({
        name: PropTypes.string.required,
        title: PropTypes.string,
        avatar: PropTypes.string,
        id: PropTypes.string.required
    }),
    disabled: PropTypes.bool,
    label: PropTypes.string,
    outline: PropTypes.bool,
    size: PropTypes.oneOf(["sm", "md", "xl"]),
    classNames: PropTypes.string,
    clickable: PropTypes.bool,
    color: PropTypes.oneOf(["default", "primary", "negative"]),
    deleteIcon: PropTypes.string,
    onDelete: PropTypes.func
}

export default Pill