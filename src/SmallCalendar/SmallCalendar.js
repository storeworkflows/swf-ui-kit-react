import moment from 'moment';
import * as React from 'react';
import propTypes from "prop-types";
import classnames from 'classnames';

import hammer from "hammerjs";

import Icon from "../Icon/Icon"
import {isNowDate, isSelected} from "./utils";
import {useEffect, useState} from "react";

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const ArrowButton = (props) => {
    const {isNext, onClick} = props;

    const classes = classnames({
        "calendar-arrow": true,
        "next": isNext
    });

    return (
        <div
            className={classes}
            onClick={(e) => onClick(e, isNext)}>
            <Icon
                icon={isNext ? "chevron-right" : "chevron-left"}
                size={"sm"}/>
        </div>
    )
}

const SmallCalendar = React.forwardRef((props, ref) => {

    const {openedDate, onSelected} = props;
    let calendarElem = null;

    const date = (openedDate) ? new Date(openedDate) : null;
    const [selectedDate, setSelectedDate] = useState(date);
    const [openedDateValue, setOpenedDateValue] = useState((date) ? date : new Date());

    const setDate = (day, isActive, e) =>{
        e?.stopPropagation();
        let newSelected;

        if (isActive)
            newSelected = new Date(openedDateValue.getFullYear(), openedDateValue.getMonth(), day);
        else {
            let isNext = day > 15 ? -1 : 1;
            let updatedMonth = moment(openedDateValue).add(isNext, "month").toDate();

            newSelected = new Date(updatedMonth.getFullYear(), updatedMonth.getMonth(), day);
            setOpenedDateValue(updatedMonth);
        }

        setSelectedDate(newSelected)
        if (onSelected)
            onSelected({date: newSelected});
    }

    const changeMonth = (e, isNext) =>{
        e?.stopPropagation();

        let additionValue = isNext ? 1 : -1;
        let changedTo = moment(openedDateValue).add(additionValue, "month");

        setOpenedDateValue(changedTo.toDate())
    }


    useEffect(() => {
        if (calendarElem) {
            let mc = new Hammer(calendarElem);
            mc.on("swipeleft", (e) => changeMonth(e, true))
            mc.on("swiperight", (e) => changeMonth(e, false));
        }
    }, [])

    useEffect(() => {
        let date = (openedDate) ? new Date(openedDate) : null;
        setOpenedDateValue((date) ? date : new Date());
        setSelectedDate(date);

    }, [openedDate])


    const renderCalendarElement = (day, isActive, key) => {
        let dayNumber = parseInt(day)
        const dayClasses = classnames({
            "calendar-element": true,
            "day-element": true,
            "notActive": !isActive,
            "active": isActive,
            "selected": isSelected(openedDateValue, selectedDate, dayNumber, isActive),
            "now-date": isNowDate(openedDateValue, isActive, dayNumber)
        })
        return (
            <div className={dayClasses}
                 onClick={(e) => setDate(dayNumber, isActive, e)}
                 key={key}
            >
                {day}
            </div>
        )
    }

    const renderMonth = () =>{
        let result = [];

        let openedMonth = openedDateValue.getMonth() + 1;
        let currentWeek = moment(openedDateValue);
        currentWeek.startOf("month").startOf("week")

        for (let w = 0, i =0; w < 6; w++) {
            if (w > 0)
                currentWeek.add(1, 'week');
            let currentDay = currentWeek.startOf("week");

            for (let d = 0; d < 7; d++, i++) {
                if (d > 0)
                    currentDay.add(1, "day");

                const isActive = currentDay.format('M') === `${openedMonth}`;
                result.push(renderCalendarElement(currentDay.format('D'), isActive, i));
            }
        }

        return result;
    }

    const currentDate = moment(openedDateValue)
    let curMonthLabel = `${currentDate.format('MMMM')} ${currentDate.year()}`;

    return (
        <>
            <div
                className={"ui-kit__calendar-container"}
                ref={el => {calendarElem = el; ref=el}}
            >

                <div className={"calendar-header"}>
                    <ArrowButton isNext = {false} onClick={changeMonth}/>
                    <span className={"calendar-header-label"}>
                            {curMonthLabel}
                    </span>
                    <ArrowButton isNext = {true} onClick={changeMonth}/>
                </div>
                <div className={"calendar-view"}>
                    {DAYS_OF_WEEK.map((el, id) => {
                        return <div className={"calendar-element week-day"} key={id}> {el} </div>
                    })}
                    {renderMonth().map(el => el)}
                </div>
            </div>
        </>
    )

});

SmallCalendar.defaultProps = {
    openedDate: null,

}

SmallCalendar.propTypes = {
    openedDate: propTypes.any,
    onSelected: propTypes.func,

}

export default SmallCalendar;