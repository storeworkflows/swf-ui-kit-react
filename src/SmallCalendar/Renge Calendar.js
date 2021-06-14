import moment from 'moment';
import * as React from 'react';
import propTypes from "prop-types";
import classnames from 'classnames';


import {useCallback, useEffect, useState} from "react";
import CalendarMonth from "./InnerComponents/CalendarMonth";
import ArrowButton from "./InnerComponents/ArrowButton";
import {getDefinedDate, getExtremeDates, updateExtremeDates, useWrappedState} from "./utils";
import {noop} from "../utils";


const RangeCalendar = React.forwardRef((props, ref) => {
    const {
        openedDate, onSelected, addDisabled, min, max,
        startDay: start, endDay: end, isFirstSelecting, manageSelected
    } = props;

    const [extremeDays, setExtremeDays] = useWrappedState({start, end}, getExtremeDates)
    const [openedDateValue, setOpenedDateValue] = useWrappedState(openedDate, getDefinedDate);
    const [hoverDate, setHoverDate] = useState(null);

    useEffect(() => setOpenedDateValue(openedDate), [openedDate])

    useEffect(() => manageSelected && setExtremeDays({start, end}), [manageSelected, start, end])

    const changeMonth = useCallback((e, isNext, selectedDate) => {
        e?.stopPropagation();

        let additionValue = isNext ? 1 : -1;
        let changedTo = moment(openedDateValue).add(additionValue, "month");

        selectedDate && setSelected(selectedDate)
        setOpenedDateValue(changedTo.toDate())
    }, [openedDateValue])


    const setSelected = useCallback((date) => {
        const updatedDates = updateExtremeDates(extremeDays, date, isFirstSelecting);
        !manageSelected && setExtremeDays(updatedDates)
        onSelected({old: extremeDays, updated: updatedDates})
    }, [isFirstSelecting, onSelected, manageSelected, extremeDays])

    const renderArrow = useCallback(
        (isNext) => <ArrowButton isNext={isNext} onClick={changeMonth}/>
        ,[changeMonth])

    const renderArrows = useCallback((isNext) => {
        return  isNext
            ?
            <CalendarMonth.HeaderEnd>
                {renderArrow(isNext)}
            </CalendarMonth.HeaderEnd>
            :
            <CalendarMonth.HeaderStart>
                {renderArrow(isNext)}
            </CalendarMonth.HeaderStart>
    }, [renderArrow])

    const renderCalendarElement = (isNext = false) => {
        const classes = classnames(
            "range-calendar", {
                "--next": isNext
            }
        )

        const nextOpened = moment(openedDateValue).add(1, "month").toDate().setHours(0,0,0,0);
        const openedDate = isNext ? nextOpened : openedDateValue

        return <CalendarMonth
            openedDate={openedDate}
            onSelected={setSelected}
            onMonthChange={changeMonth}
            className={classes}
            onSetHover={setHoverDate}
            hoveredDate={hoverDate}
            range={{
                start: extremeDays.start,
                end: extremeDays.end,
                isFirstSelecting: isFirstSelecting
            }}
            manageHover={true}
            manageSelected={true}
            addDisabled={addDisabled}
            max={max}
            min={min}
        >
            {renderArrows(isNext)}
        </CalendarMonth>
    }

    return <div className={"range-calendar-container"} ref={ref}>
        {renderCalendarElement()}
        {renderCalendarElement(true)}
    </div>
});

RangeCalendar.defaultProps = {
    openedDate: new Date(),
    onSelected: noop,
    addDisabled: true
}

RangeCalendar.propTypes = {
    openedDate: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.number]),
    onSelected: propTypes.func,
    startDay: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.number]),
    endDay: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.number]),
    isFirstSelecting: propTypes.bool,
    manageSelected: propTypes.bool,
    addDisabled: propTypes.bool,
    min: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.number]),
    max: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.number])
}

export default React.memo(RangeCalendar);