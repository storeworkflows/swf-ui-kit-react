import * as React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Avatar from "../Avatar/Avatar";
import Icon from "../Icon/Icon";
import {noop} from "../utils";
import {useRef} from "react";

const Pill = React.forwardRef((props, ref) => {
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
        disabled,
        onClick
    } = props;

    const removePill = (e) =>{
        e?.stopPropagation();
        e?.preventDefault();

        if (onDelete === noop) {
            const curEl = e.target.parentElement.parentElement;
            const iconEl = curEl.classList.contains("pill-icon") ? curEl.parentElement : curEl;

            iconEl?.remove()
        }

        onDelete(props)
    }

    const hasMember = member;
    const hasIcon = !hasMember && icon;
    const showPillIcon = hasMember || hasIcon;

    return (
        <>
            <div
                ref={ref}
                className={classnames({
                    "pill": true,
                    "--disabled": disabled,
                    "--clickable": clickable && !disabled,
                    "--outlined": outline,
                    [`--${size}`]: true,
                    [`--${color}`]: true,
                    [classNames]: true
                })}
                onClick={() => onClick(props)}
            >
                {showPillIcon && <div className="pill-icon">
                    {hasMember && <Avatar member={member} clickable={false}/>}
                    {hasIcon && <Icon icon={icon} size="sm"/>}
                </div>
                }
                <span className={classnames("pill-label", [`--${size}`] )}>
                    {label}
                </span>
                {canDismiss && <div className="pill-icon --delete" onClick={removePill}>
                    <Icon icon={deleteIcon || "x"} size="sm"/>
                </div>}
            </div>
        </>

    )
});

Pill.defaultProps = {
    canDismiss: false,
    disabled: false,
    icon: null,
    member: null,
    label: "",
    outline: false,
    size: "md",
    classNames: "",
    clickable: false,
    color: "default",
    deleteIcon: null,
    onDelete: noop,
    onClick: noop
}

Pill.propTypes = {
    canDismiss: PropTypes.bool,
    icon: PropTypes.string,
    member: PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string,
        avatar: PropTypes.string,
        id: PropTypes.string.isRequired
    }),
    disabled: PropTypes.bool,
    label: PropTypes.string,
    outline: PropTypes.bool,
    size: PropTypes.oneOf(["sm", "md", "xl"]),
    classNames: PropTypes.string,
    clickable: PropTypes.bool,
    color: PropTypes.oneOf(["default", "primary", "negative"]),
    deleteIcon: PropTypes.string,
    onDelete: PropTypes.func,
    onClick: PropTypes.func,
}

export default React.memo(Pill)