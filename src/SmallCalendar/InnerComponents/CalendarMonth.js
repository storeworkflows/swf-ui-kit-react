import moment from 'moment';
import * as React from 'react';
import propTypes from "prop-types";
import classnames from 'classnames';

import {defineProps} from "../utils";
import {useCallback, useEffect, useState} from "react";
import findByType, {createSubComponent} from "../../utils/findByType";
import CalendarDay from "./CalendarDay";

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const CalendarMonth = React.forwardRef((props, ref) => {

    const {openedDate, onSelected, children, range, selectedDate, onMonthChange, className} = props;

    const [selectedDates, setSelectedDates] = useState(range
        ? [range.startDay?.setHours(0,0,0,0),
            range.endDay?.setHours(0,0,0,0)]
        : [selectedDate])
    const [hovered, setHovered] = useState(null)

    let calendarElem = null;

    useEffect(() => {
        if (calendarElem) {
            let mc = new Hammer(calendarElem);
            mc.on("swipeleft", (e) => onMonthChange(null, true, e))
            mc.on("swiperight", (e) => onMonthChange(null, false, e));
        }
    }, [])

    // useEffect(() => {
    //     setSelectedDates()
    // }, [range])

    const setDate = ({dateObj, isActive, e}) =>{
        e?.stopPropagation();

        !isActive && onMonthChange(dateObj, !(new Date(dateObj).getDate() > 15))

        if(!range)
            setSelectedDates([dateObj])
        else
            setSelectedDates( range.isFirstSelecting
                ? [dateObj, dateObj>selectedDates[1] ? null : selectedDates[1]]
                : [dateObj<selectedDates[0] ? null : selectedDates[0] , dateObj]
            );

        onSelected(new Date(dateObj));
    };

    const renderHeaderElement = (name) => {
        const element = findByType(children, name);
        // if(!element || element.length < 1)
        //     return null;

        const classes = classnames({
            "header-part": true,
            "--end": name === "HeaderEnd"
        });
        return <div className={classes}>{element}</div>
    }

    const renderCalendarElement = useCallback((date, isActive, dayInWeek) => {
        let dateObj = date.toDate().setHours(0,0,0,0);
        let day = date.format('D');
        const {selected, inSelectedPeriod, isNowDate, isHovered, extreme, borders,selectedBorders}
            = defineProps(selectedDates, range, dateObj, hovered, dayInWeek);

        return <CalendarDay
            active={isActive}
            number={day}
            isNowDate={isNowDate}
            selected={selected}

            inSelectedPeriod={inSelectedPeriod}
            hovered={isHovered}
            extreme={extreme}
            borders={borders}
            selectedBorders={selectedBorders}

            onMouseEnter={() => setHovered(dateObj)}
            onMouseLeave={() => setHovered(null)}
            onClick={(e) => setDate({dateObj, isActive, e}) }
        />
    }, [hovered, selectedDates, range, openedDate])


    const renderMonth = useCallback(() => {
        let result = [];

        let openedMonth = openedDate.getMonth() + 1;
        let currentWeek = moment(openedDate);
        currentWeek.startOf("month").startOf("week")

        for (let w = 0; w < 6; w++) {
            (w > 0) && currentWeek.add(1, 'week');
            let currentDay = currentWeek.startOf("week");

            for (let d = 0; d < 7; d++) {
                (d > 0) && currentDay.add(1, "day");

                const isActive = currentDay.format('M') === `${openedMonth}`;
                result.push(renderCalendarElement(currentDay, isActive, d));
            }
        }

        return result;
    }, [openedDate, selectedDates, hovered, range])

    const currentDate = moment(openedDate)
    let curMonthLabel = `${currentDate.format('MMMM')} ${currentDate.year()}`;

    return (
        <>
            <div
                className={classnames(className, "ui-kit__calendar-container")}
                ref={ref}
            >
                <div className={"calendar-header"}>
                    {renderHeaderElement("HeaderStart")}
                    <span className={"calendar-header-label"}>
                            {curMonthLabel}
                    </span>
                    {renderHeaderElement("HeaderEnd")}
                </div>
                <div className={"calendar-view"}>
                    {DAYS_OF_WEEK.map((el, id) => <div
                        className={"calendar-element week-day"}
                        key={id}> {el} </div>
                    )}
                    {renderMonth()}
                </div>
            </div>
        </>
    )

});

CalendarMonth.HeaderStart = createSubComponent("HeaderStart");
CalendarMonth.HeaderEnd = createSubComponent("HeaderEnd");

CalendarMonth.defaultProps = {
    openedDate: new Date(),
    selectedDate: null,
    onSelected: () => void 0,
    onMonthChange: () => void 0,
    className: ""
}

CalendarMonth.propTypes = {
    openedDate: propTypes.object,
    onSelected: propTypes.func,
    selectedDate: propTypes.object,
    range: propTypes.shape({
        startDay: propTypes.oneOfType([propTypes.string, propTypes.object]),
        endDay: propTypes.oneOfType([propTypes.string, propTypes.object]),
       // isFirstFixed: propTypes.bool,
        isFirstSelecting: propTypes.bool
    }),
    hoveredDate: propTypes.object,
    onMonthChange: propTypes.func,
    classNames: propTypes.oneOfType([propTypes.string, propTypes.object])
}

export default CalendarMonth;