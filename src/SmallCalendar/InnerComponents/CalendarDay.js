import classnames from "classnames";
import * as React from "react";
import propTypes from "prop-types";

const CalendarDay = React.forwardRef( (props, ref) => {
    const { number,  active, selected,
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

    const actEvent = (event) => !disabled ? event : () => void 0;

    //console.log("render")
    return <div
        className={dayContainerClasses}
        ref={ref}
        onClick={actEvent(onClick)}
        onMouseEnter={  actEvent( onMouseEnter)}
        onMouseLeave={  actEvent( onMouseLeave)}
    >
        <div className={borderStyles}/>
        <div className={dayClasses}>
            {number}
        </div>
    </div>
})

CalendarDay.propTypes = {
    number: propTypes.oneOfType([propTypes.number, propTypes.string]),
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
    number: 0,
    active: true,
    className: "",
    onClick: () => void 0,
    onMouseEnter: () => void 0,
    onMouseLeave: () => void 0
}

export default React.memo(CalendarDay);