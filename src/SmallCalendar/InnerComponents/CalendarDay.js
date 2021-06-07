import classnames from "classnames";
import * as React from "react";
import propTypes from "prop-types";
import isEqual from "react-fast-compare";
import {noop} from "../../utils";

const CalendarDay = React.forwardRef((props, ref) => {
    const {
        dateInMilliseconds, active, selected,
        extreme, className, onClick, isNowDate,
        onMouseLeave, onMouseEnter, hovered, inSelectedPeriod, borders,
        selectedBorders, disabled
    } = props;

    const borderStyles = classnames({
        "border-container": true,
        [`--${extreme}-in-period`]: extreme,
        "--border-top": borders.includes("top"),
        "--border-bottom": borders.includes("bottom"),
        "--border-right": borders.includes("right"),
        "--border-left": borders.includes("left"),
        "--hovered": hovered && !disabled,
        "--disabled": disabled
    })
    const dayContainerClasses = classnames(
        className,
        "calendar-day-container", {
            "--disabled": disabled && active,
            "--cursor-default": disabled,
            "--selected": selected,
            "--in-selected-period": active && inSelectedPeriod,
            "--border-top": borders.includes("top"),
            "--border-bottom": borders.includes("bottom"),
            "--selected-border-top": selectedBorders.includes("top"),
            "--selected-border-bottom": selectedBorders.includes("bottom"),
            "--selected-border-right": selectedBorders.includes("right"),
            "--selected-border-left": selectedBorders.includes("left"),
            [`--${disabled}-disabled`]: disabled
        }
    )

    const dayClasses = classnames({
        "calendar-element": true,
        "day-element": true,
        "notActive": !active,
        "active": active,
        "selected": selected,
        "now-date": isNowDate,
        "--can-hover": !disabled
    })


    const actEvent = (event, params) => !disabled ? event(params) : () => void 0;
    const date = new Date(dateInMilliseconds)

    return <div
        className={dayContainerClasses}
        ref={ref}
        onClick={e => actEvent(onClick, {dateInMilliseconds, active, e})}
        onMouseEnter={() => actEvent(onMouseEnter, dateInMilliseconds)}
        onMouseLeave={() => actEvent(onMouseLeave, null)}
    >
        <div className={borderStyles}/>
        <div className={dayClasses}>
            {date.getDate()}
        </div>
    </div>
})

CalendarDay.propTypes = {
    dateInMilliseconds: propTypes.number,
    isNowDate: propTypes.bool,

    active: propTypes.bool,
    selected: propTypes.bool,
    disabled: propTypes.oneOfType([
        propTypes.oneOf(["none", "start", "end"]),
        propTypes.bool
    ]),
    hovered: propTypes.bool,
    inSelectedPeriod: propTypes.bool,
    extreme: propTypes.oneOf(["first", "last", "one", "none"]),

    className: propTypes.oneOfType([propTypes.object, propTypes.string]),
    onClick: propTypes.func,
    onMouseEnter: propTypes.func,
    onMouseLeave: propTypes.func,
    borders: propTypes.arrayOf(propTypes.string),
    selectedBorders: propTypes.arrayOf(propTypes.string),
}

CalendarDay.defaultProps = {
    borders: [],
    selectedBorders: [],
    dateInMilliseconds: 0,
    active: true,
    className: "",
    onClick: noop,
    onMouseEnter: noop,
    onMouseLeave: noop
}

export default React.memo(CalendarDay, (prev, next) => {
    const previousProps = {
        ...prev,
        onClick: noop,
        onMouseEnter: noop,
        onMouseLeave: noop,
    };

    const nextProps = {
        ...next,
        onClick: noop,
        onMouseEnter: noop,
        onMouseLeave: noop,
    }

    return isEqual(previousProps, nextProps);
});