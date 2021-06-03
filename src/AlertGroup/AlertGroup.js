import * as React from "react";
import {useState, useEffect, useRef, useCallback} from 'react';
import propTypes from "prop-types";
import classnames from "classnames";
import Alert from "../Alert/Alert";


const AlertGroup = React.forwardRef((props, ref) => {

    const {
        alerts, delay, className,
        defaultPosition, verticalPositions, horizontalPositions
    } = props;

    const alertGroupClasses = classnames(
        className,
        "swf-alert-group", {
            "--fixed": !defaultPosition,
            [`--vertical-${verticalPositions}`]: verticalPositions,
            [`--horizontal-${horizontalPositions}`]: horizontalPositions,
        }
    )

    return <div ref={ref} className={alertGroupClasses}>
        {alerts.map((el, i) => {
            return <Alert
                key={i + el.content}
                {...el}
                defaultPosition={true}
                delay = {delay || el.delay}
            />
        })}
    </div>

});

AlertGroup.defaultProps = {
    className: "",

    verticalPositions: "top",
    horizontalPositions: "start",
}

const alertObj = {
    action: propTypes.shape({
        type: propTypes.oneOf(["dismiss", "acknowledge", "open"]).isRequired,
        href: propTypes.string,
        label: propTypes.string
    }),
    content: propTypes.oneOfType([propTypes.string, propTypes.object]),
    expanded: propTypes.bool,
    header: propTypes.string,
    icon: propTypes.string,
    manageExpanded: propTypes.bool,
    color: propTypes.oneOf(["yellow", "red", "green", "blue", "grey", "grey-blue"]),
    textLinkProps: propTypes.shape({
        label: propTypes.string,
        href: propTypes.string,
        openWindows: propTypes.bool,
        download: propTypes.oneOfType([propTypes.string, propTypes.object])
    }),
    onExpandAction: propTypes.func,
    onTextLinkClicked: propTypes.func,
    onButtonClick: propTypes.func,
    visible: propTypes.bool,
    manageVisibility: propTypes.bool,
    delay: propTypes.number,
    onCloseAction: propTypes.func,
    manageButtonClick: propTypes.bool,
    className: propTypes.oneOfType([propTypes.string, propTypes.object]),
}

AlertGroup.propTypes = {
    alerts: propTypes.arrayOf(propTypes.shape(alertObj)),
    delay: propTypes.number,

    className: propTypes.oneOfType([propTypes.string, propTypes.object]),
    defaultPosition: propTypes.bool,
    verticalPositions: propTypes.oneOf(["top", "center", "bottom"]),
    horizontalPositions: propTypes.oneOf(["start", "center", "end"]),
}

export default React.memo(AlertGroup)
