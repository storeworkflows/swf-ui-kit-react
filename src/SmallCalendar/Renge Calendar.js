import moment from 'moment';
import * as React from 'react';
import propTypes from "prop-types";
import classnames from 'classnames';


import {useEffect, useState} from "react";
import CalendarMonth from "./InnerComponents/CalendarMonth";
import ArrowButton from "./InnerComponents/ArrowButton";
import {updateExtremeDates} from "./utils";

const RangeCalendar = React.forwardRef((props, ref) => {

    const {openedDate, onSelected,
        startDay, endDay, isFirstSelecting, manageSelected} = props;

    const [extremeDays, setExtremeDays] = useState({startDay, endDay})
    const [openedDateValue, setOpenedDateValue] = useState(openedDate && new Date(openedDate));
    const [hoverDate, setHoverDate] = useState(null);

    const nextOpened =  moment(openedDateValue).add(1, "month").toDate();

    useEffect(() => {
        manageSelected && setExtremeDays({startDay, endDay})
    }, [manageSelected, startDay, endDay])

    const changeMonth = (selectedDate, isNext, e) => {
        e?.stopPropagation();

        let additionValue = isNext ? 1 : -1;
        let changedTo = moment(openedDateValue).add(additionValue, "month");

        selectedDate && setSelected(selectedDate)
        setOpenedDateValue(changedTo.toDate())
    }

    const setSelected = (date) => {
        const updatedDates = updateExtremeDates(extremeDays, date, isFirstSelecting);
        !manageSelected && setExtremeDays(updatedDates)
        onSelected({old: extremeDays, updated: updatedDates})
    }

    const renderCalendarElement = (isNext = false) => {
        const classes = classnames(
            "range-calendar", {
                "--next": isNext
            }
        )
        return  <CalendarMonth
            openedDate={isNext ? nextOpened : openedDateValue}
            onSelected={setSelected}
            onMonthChange={changeMonth}
            className={classes}
            onSetHover={date => setHoverDate(date)}
            hoveredDate={hoverDate}
            range={{
                startDay: extremeDays.startDay,
                endDay: extremeDays.endDay,
                isFirstSelecting: isFirstSelecting
            }}
            manageHover={true}
            manageSelected={true}
        >
            {isNext
                ?
                <CalendarMonth.HeaderEnd>
                    <ArrowButton isNext={isNext} onClick={(e) => changeMonth(null, isNext, e)}/>
                </CalendarMonth.HeaderEnd>
                :
                <CalendarMonth.HeaderStart>
                    <ArrowButton onClick={(e) => changeMonth(null, isNext, e)}/>
                </CalendarMonth.HeaderStart>
            }

        </CalendarMonth>
    }

    return <div className={"range-calendar-container"}>
        {renderCalendarElement()}
        {renderCalendarElement(true)}
    </div>
});

RangeCalendar.defaultProps = {
    openedDate: new Date(),
    onSelected: () => void 0,
}

RangeCalendar.propTypes = {
    openedDate: propTypes.object,
    onSelected: propTypes.func,
    startDay: propTypes.object,
    endDay: propTypes.object,
    isFirstSelecting: propTypes.bool,
    manageSelected: propTypes.bool
}

export default RangeCalendar;