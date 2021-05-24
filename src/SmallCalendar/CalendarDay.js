import classnames from "classnames";
import {isNowDate, isSelected} from "./utils";
import * as React from "react";
import propTypes from "prop-types";

const CalendarDay = React.forwardRef( (props, ref) => {
    const { number,  active, selected,
        extreme, className, onClick, isNowDate,
        onMouseLeave, onMouseEnter, hovered, inSelectedPeriod
    } = props;


    const dayContainerClasses = classnames(
        className,
        "calendar-day-container", {
            "--hovered": hovered,
            "--in-selected-period": inSelectedPeriod,
           // [`--${period}-period`]: period && active,
            [`--${extreme}-in-period`]: extreme && active
        }
    )

    const dayClasses = classnames({
        "calendar-element": true,
        "day-element": true,
        "notActive": !active,
        "active": active,
        "selected": selected,
        "now-date": isNowDate
    })

    return <div className={dayContainerClasses} ref={ref}>
        <div className={dayClasses}
             onClick={onClick}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
        >
            {number}
        </div>
    </div>
})

CalendarDay.propTypes = {
    number: propTypes.number,
    isNowDate: propTypes.bool,

    active: propTypes.bool,
    selected: propTypes.bool,

    hovered: propTypes.bool,
    inSelectedPeriod: propTypes.bool,
    //period: propTypes.oneOf(["selected", "hovered", "hover-selected", "disabled", "none"]),
    extreme: propTypes.oneOf(["first", "last", "one", "none"]),

    className: propTypes.oneOfType([propTypes.object, propTypes.string]),
    onClick: propTypes.func,
    onMouseEnter: propTypes.func,
    onMouseLeave: propTypes.func
}

CalendarDay.defaultProps = {
    number: 0,
    active: true,
    className: "",
    onClick: () => void 0,
    onMouseEnter: () => void 0,
    onMouseLeave: () => void 0
}

export default React.memo(CalendarDay);