import * as React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import {Icon} from "../index";

const Progress = React.memo(React.forwardRef((props, ref) => {
    const {value, status, showInfo, showStatus, className} = props
    const hasValue = !isNaN(value)
    const valueStr = `${value}%`;
    const realStatus = (status === "done" && value!==100) ? "active": status

    const classes = classnames("swf-progress-container", {
        [realStatus]: showStatus,
    }, className)


    return hasValue && <div className={classes} ref={ref}>
        <div className={"progress-bar"}>
            <div className={"progress-bar-fill"} style={{width: valueStr}}>

            </div>
        </div>
        {showInfo &&
            <div className={"progress-info-container"}>
                {realStatus === 'active' || !showStatus
                    ? <span className={"progress-info"}>{valueStr}</span>
                    : <Icon
                        icon={realStatus === "done" ? "check-circle-fill" : "x-circle-fill"}
                        customSize={20}
                    />
                }
            </div>}
    </div>
}))

Progress.defaultProps = {
    showStatus: true,
    showInfo: true,
    status: "active",
    className: ""
}

Progress.propTypes = {
    value: propTypes.number,
    status: propTypes.oneOf(["active", "done", "exception"]),
    showInfo: propTypes.bool,
    showStatus: propTypes.bool,
    className: propTypes.string
}


export default Progress;