import * as React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.scss";

class Pill extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            canDismiss,
            icon,
            classNames,
            imageSrc,
            label,
            outline,
            size,
            clickable,
            color,
            deleteIcon,
            onDelete,
            disabled
        } = this.props;


        return (
            <>
                <style type="text/css">{styles}</style>
                <div className={classnames({
                    "pill": true,
                    "--disabled": disabled,
                    "--clickable": clickable && !disabled,
                    "--outlined": outline,
                    [`--${size}`]: true,
                    [`--${color}`]: true
                })}>
                    <span className={classnames({
                        "pill-label": true,
                        [`--${size}`]: true
                    })}>{label}</span>
                </div>
            </>

        )
    }
}

Pill.defaultProps = {
    canDismiss: false,
    disabled: false,
    icon: null,
    imageSrc: null,
    label: "Test",
    outline: false,
    size: "md",
    classNames: "",
    clickable: false,
    color: "default",
    deleteIcon: null,
    onDelete: () => void 0
}

Pill.propTypes = {
    canDismiss: PropTypes.bool,
    icon: PropTypes.string,
    imageSrc: PropTypes.string,
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