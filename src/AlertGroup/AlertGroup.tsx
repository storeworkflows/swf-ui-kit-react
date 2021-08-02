import * as React from "react";
import {FC, LegacyRef} from 'react';
import classnames from "classnames";
import Alert, {IAlertProps} from "../Alert/Alert";

interface IAlertGroupProps {
    alerts: IAlertProps[],
    delay: number,
    className: any,
    defaultPosition: boolean,
    verticalPositions: "top"| "center"| "bottom",
    horizontalPositions: "start"| "center"| "end"
}

const AlertGroup: FC<IAlertGroupProps> = React.forwardRef((props, ref: LegacyRef<HTMLDivElement> | undefined) => {

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

export default React.memo(AlertGroup)
