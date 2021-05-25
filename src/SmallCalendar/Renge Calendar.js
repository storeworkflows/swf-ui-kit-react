import moment from 'moment';
import * as React from 'react';
import propTypes from "prop-types";
import classnames from 'classnames';


import Icon from "../Icon/Icon"
import {useState} from "react";
import CalendarMonth from "./InnerComponents/CalendarMonth";
import ArrowButton from "./InnerComponents/ArrowButton";

const RangeCalendar = React.forwardRef((props, ref) => {

    const {openedDate, onSelected,
        startDay, endDay, isFirstSelecting} = props;

    const date = (openedDate) ? new Date(openedDate) : null;
    const [selectedDate, setSelectedDate] = useState(isFirstSelecting ? startDay : endDay);
    const [openedDateValue, setOpenedDateValue] = useState(date);

    const nextOpened =  moment(openedDateValue).add(1, "month").toDate();
    const currentFirstDate = isFirstSelecting ? selectedDate : startDay;
    const currentEndDate = isFirstSelecting ? endDay : selectedDate;

    const changeMonth = (selectedDate, isNext, e) => {
        e?.stopPropagation();

        let additionValue = isNext ? 1 : -1;
        let changedTo = moment(openedDateValue).add(additionValue, "month");
        if (selectedDate)
            setSelectedDate(new Date(selectedDate))

        setOpenedDateValue(changedTo.toDate())
    }

    const renderArrow = (isNext) => {
        const classes = classnames({
            "calendar-arrow": true,
            "next": isNext
        });

        return <div
            className={classes}
            onClick={(e) => changeMonth(e, isNext)}>
            <Icon
                icon={isNext ? "chevron-right" : "chevron-left"}
                size={"sm"}/>
        </div>
    }

    const renderCalendarElement = (isNext = false) => {
        const classes = classnames(
            "range-calendar", {
                "--next": isNext
            }
        )
        return  <CalendarMonth
            openedDate={isNext ? nextOpened : openedDateValue}
            onSelected={onSelected}
            onMonthChange={changeMonth}
            className={classes}
            range={{
                startDay: currentFirstDate,
                endDay: currentEndDate,
                isFirstSelecting: isFirstSelecting
            }}
        >
            {isNext
                ?
                <CalendarMonth.HeaderEnd>
                    <ArrowButton isNext={isNext} onClick={changeMonth}/>
                </CalendarMonth.HeaderEnd>
                :
                <CalendarMonth.HeaderStart>
                    <ArrowButton onClick={changeMonth}/>
                </CalendarMonth.HeaderStart>
            }

        </CalendarMonth>
    }

    return <div>
        {renderCalendarElement()}
        {renderCalendarElement(true)}
    </div>
});

RangeCalendar.defaultProps = {
    openedDate: new Date(),

}

RangeCalendar.propTypes = {
    openedDate: propTypes.object,
    onSelected: propTypes.func,
    startDay: propTypes.object,
    endDay: propTypes.object,
    isFirstSelecting: propTypes.bool
}

export default RangeCalendar;