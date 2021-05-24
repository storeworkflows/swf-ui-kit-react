import moment from 'moment';
import * as React from 'react';
import propTypes from "prop-types";
import classnames from 'classnames';

import hammer from "hammerjs";

import Icon from "../Icon/Icon"
import {defineIfHovered, defineProps} from "./utils";
import {useCallback, useEffect, useState, useMemo} from "react";
import findByType, {createSubComponent} from "../utils/findByType";
import Input from "../Input/Input";
import CalendarDay from "./CalendarDay";

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const CalendarMonth = React.forwardRef((props, ref) => {

    const {openedDate, onSelected, children, range, selectedDate, onMonthChange} = props;

    const [selectedDates, setSelectedDates] = useState(range ? [range.startDay, range.endDay] : [selectedDate])
    const [hovered, setHovered] = useState(null)

    const setDate = useCallback((date, isActive, e) =>{
        e?.stopPropagation();

        !isActive && onMonthChange({date, isNext: !(date.getDay() > 15)})

        if(!range)
            setSelectedDates([date])
        else
            setSelectedDates(range.isFirstSelecting
                ? [date, selectedDates[1]]
                : [selectedDates[0], date]
            )

        onSelected({date});
    }, [openedDate, onSelected, selectedDates]);


    const renderHeaderElement = (name) => {
        const element = findByType(children, name);
        const classes = classnames({
            "header-part": true,
            "--end": name === "HeaderEnd"
        });

        if (!classes || classes.length < 1) return null;
        return <div className={classes}>{element}</div>
    }

    const renderCalendarElement = useCallback((date, isActive) => {
        let dateObj = date.toDate().setHours(0,0,0,0);
        let day = date.format('D');
        const {selected, inSelectedPeriod, isNowDate, isHovered, extreme}
            = defineProps(selectedDates, range, dateObj, hovered);

        return <CalendarDay
            active={isActive}
            number={day}
            isNowDate={isNowDate}
            selected={selected}

            inSelectedPeriod={inSelectedPeriod}
            hovered={isHovered}
            extreme={extreme}

            onMouseEnter={() => setHovered(dateObj)}
            onMouseLeave={() => setHovered(null)}
            onClick={(e) => setDate(dateObj, isActive, e) }
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
                result.push(renderCalendarElement(currentDay, isActive));
            }
        }

        return result;
    }, [openedDate, selectedDates, hovered, range])

    const currentDate = moment(openedDate)
    let curMonthLabel = `${currentDate.format('MMMM')} ${currentDate.year()}`;

    return (
        <>
            <div
                className={"ui-kit__calendar-container"}
                ref={ref}
            >
                <div className={"calendar-header"}>
                    {renderHeaderElement("HeaderStart")}
                    <span className={"calendar-header-label"}>
                            {curMonthLabel}
                    </span>
                    {renderHeaderElement("HeaderEnd")}
                </div>
                {/*<div className={"week-days-container"}>*/}
                {/*    {DAYS_OF_WEEK.map((el, id) => <div*/}
                {/*            className={"calendar-element week-day"}*/}
                {/*            key={id}> {el} </div>*/}
                {/*    )}*/}
                {/*</div>*/}
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

CalendarMonth.Start = createSubComponent("HeaderStart");
CalendarMonth.End = createSubComponent("HeaderEnd");

CalendarMonth.defaultProps = {
    openedDate: new Date(),
    selectedDate: null,
    onSelected: () => void 0,
    onMonthChange: () => void 0
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
    onMonthChange: propTypes.func
}

export default CalendarMonth;