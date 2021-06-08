import moment from 'moment';
import * as React from 'react';
import propTypes from "prop-types";
import classnames from 'classnames';


import {useCallback, useEffect, useState} from "react";
import CalendarMonth from "./InnerComponents/CalendarMonth";
import ArrowButton from "./InnerComponents/ArrowButton";
import {convertToDate, updateExtremeDates} from "./utils";

const RangeCalendar = React.forwardRef((props, ref) => {
    const {openedDate, onSelected,
        startDay: start, endDay: end, isFirstSelecting, manageSelected} = props;

    const [extremeDays, setExtremeDays] = useState({
        start: convertToDate(start),
        end: convertToDate(end)
    })
    const [openedDateValue, setOpenedDateValue] = useState(convertToDate(openedDate) || new Date());
    const [hoverDate, setHoverDate] = useState(null);

    const nextOpened =  moment(openedDateValue).add(1, "month").toDate();

    useEffect(() => {
        const updatedDate = convertToDate(openedDate) || new Date()
        setOpenedDateValue(updatedDate)
    }, [openedDate])


    useEffect(() => {
        manageSelected && setExtremeDays({
            start: convertToDate(start),
            end: convertToDate(end)
        })
    }, [manageSelected, start, end])

    const changeMonth = useCallback((e, isNext, selectedDate) => {
        e?.stopPropagation();

        let additionValue = isNext ? 1 : -1;
        let changedTo = moment(openedDateValue).add(additionValue, "month");

        selectedDate && setSelected(selectedDate)
        setOpenedDateValue(changedTo.toDate())
    }, [openedDateValue, setOpenedDateValue])


    const setSelected = useCallback((date) => {
        const updatedDates = updateExtremeDates(extremeDays, date, isFirstSelecting);
        !manageSelected && setExtremeDays(updatedDates)
        onSelected({old: extremeDays, updated: updatedDates})
    }, [isFirstSelecting, onSelected, manageSelected, extremeDays])

    const renderCalendarElement = (isNext = false) => {
        const classes = classnames(
            "range-calendar", {
                "--next": isNext
            }
        )

        const openedDate = isNext ? nextOpened : openedDateValue

        return <CalendarMonth
            openedDate={openedDate?.setHours(0,0,0,0)}
            onSelected={setSelected}
            onMonthChange={changeMonth}
            className={classes}
            onSetHover={date => setHoverDate(date)}
            hoveredDate={hoverDate}
            range={{
                start: extremeDays.start,
                end: extremeDays.end,
                isFirstSelecting: isFirstSelecting
            }}
            manageHover={true}
            manageSelected={true}
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

    return <div className={"range-calendar-container"} ref={ref}>
        {renderCalendarElement()}
        {renderCalendarElement(true)}
    </div>
});

RangeCalendar.defaultProps = {
    openedDate: new Date().setHours(0,0,0,0),
    onSelected: () => void 0,
}

RangeCalendar.propTypes = {
    openedDate:  propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.number]),
    onSelected:  propTypes.func,
    startDay: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.number]),
    endDay: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.number]),
    isFirstSelecting: propTypes.bool,
    manageSelected: propTypes.bool
}

export default React.memo(RangeCalendar);