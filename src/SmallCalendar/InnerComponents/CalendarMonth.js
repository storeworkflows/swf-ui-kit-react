import moment from 'moment';
import * as React from 'react';
import propTypes from "prop-types";
import classnames from 'classnames';

import {defineProps, defineSelected} from "../utils";
import {useCallback, useEffect, useState} from "react";
import findByType, {createSubComponent} from "../../utils/findByType";
import CalendarDay from "./CalendarDay";

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const CalendarMonth = React.forwardRef((props, ref) => {

    const {openedDate, onSelected, children, range, selectedDate, onMonthChange, className, hoveredDate,
        onSetHover, manageHover, manageSelected} = props;

    const [selected, setSelected] = useState(defineSelected(range, selectedDate));
    const [hovered, setHovered] = useState(hoveredDate);

    let calendarElem = null;

    useEffect(() => {
        if (calendarElem) {
            let mc = new Hammer(calendarElem);
            mc.on("swipeleft", (e) => onMonthChange(null, true, e))
            mc.on("swiperight", (e) => onMonthChange(null, false, e));
        }
    }, [])

    useEffect(() => {
        manageHover && setHovered(hoveredDate)
    }, [hoveredDate, manageHover])

    useEffect(() => {
        manageSelected && setSelected(defineSelected(range, selectedDate))
    }, [manageSelected, range, selectedDate])

    const changeHover = (date) => {
        !manageHover && setHovered(date);
        onSetHover(date);
    }

    const setDate = ({dateObj, isActive, e}) =>{
        e?.stopPropagation();

        const date = new Date(dateObj);
        !isActive && onMonthChange(date, !(date.getDate() > 15))

        !manageSelected && setSelected(date)
        onSelected(date);
    };

    const renderHeaderElement = (name) => {
        const element = findByType(children, name);

        const classes = classnames({
            "header-part": true,
            "--end": name === "HeaderEnd"
        });
        return <div className={classes}>{element}</div>
    }

    const renderCalendarElement = useCallback((date, isActive, dayInWeek) => {
        let dateObj = date.toDate().setHours(0,0,0,0);
        let day = date.format('D');

        const currentStartDate = range && (range.isFirstSelecting ? selected : range.startDay);
        const currentEndDate = range && (range.isFirstSelecting ? range.endDay : selected);

        const selectedDates = range ? [currentStartDate, currentEndDate] : [selected]
        const {selected: isSelected, inSelectedPeriod, isNowDate, isHovered, extreme, borders,selectedBorders}
            = defineProps(selectedDates, range, dateObj, hovered, dayInWeek);

        return <CalendarDay
            active={isActive}
            number={day}
            isNowDate={isNowDate}
            selected={isSelected}

            inSelectedPeriod={inSelectedPeriod}
            hovered={isHovered}
            extreme={extreme}
            borders={borders}
            selectedBorders={selectedBorders}

            onMouseEnter={() => changeHover(dateObj)}
            onMouseLeave={() => changeHover(null)}
            onClick={(e) => setDate({dateObj, isActive, e}) }
        />
    }, [hovered, selected, range, openedDate])


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
    }, [openedDate, selected, hovered, range])

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
    onSetHover: () => void 0,
    className: ""
}

CalendarMonth.propTypes = {
    openedDate: propTypes.object,
    onSelected: propTypes.func,
    selectedDate: propTypes.object,
    range: propTypes.shape({
        startDay: propTypes.oneOfType([propTypes.string, propTypes.object]),
        endDay: propTypes.oneOfType([propTypes.string, propTypes.object]),
        isFirstSelecting: propTypes.bool
    }),
    hoveredDate: propTypes.oneOfType([propTypes.number, propTypes.object]),
    onMonthChange: propTypes.func,
    classNames: propTypes.oneOfType([propTypes.string, propTypes.object]),
    onSetHover: propTypes.func,
    manageHover: propTypes.bool,
    manageSelected: propTypes.bool
}

export default CalendarMonth;