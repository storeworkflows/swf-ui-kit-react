import moment from 'moment';
import * as React from 'react';
import propTypes from "prop-types";
import classnames from 'classnames';
import isEqual from "react-fast-compare";

import {defineProps, defineSelected, getMonthDates} from "../utils";
import {useCallback, useEffect, useRef, useState} from "react";
import findByType, {createSubComponent} from "../../utils/findByType";
import CalendarDay from "./CalendarDay";
import {noop} from "../../utils";

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];


const CalendarMonth = React.memo((props) => {

    const {openedDate, onSelected, children,
        range, selectedDate, onMonthChange, className, hoveredDate,
        onSetHover, manageHover, manageSelected} = props;
    const {end, start, isFirstSelecting} = range;

    const [monthDates, setMonthDates] = useState(getMonthDates(openedDate));
    const [selected, setSelected] = useState(defineSelected(range, selectedDate));
    const [hovered, setHovered] = useState(hoveredDate);

    const hoveredFinal = manageHover ? hoveredDate : hovered;
    const calendarElem = useRef(null);

    useEffect( () => setMonthDates(getMonthDates(openedDate)), [openedDate])

    useEffect(() => {
        const range = { end, start, isFirstSelecting}
        manageSelected && setSelected(defineSelected(range, selectedDate))
    },[manageSelected,  end, start, isFirstSelecting, selectedDate])

    const changeHover = useCallback((date) => {
        if(!range)
            return;

        const needHoverForStart = isFirstSelecting && end;
        const needHoverForEnd = !isFirstSelecting && start;

        if(needHoverForStart || needHoverForEnd) {
            !manageHover && setHovered(date);
            onSetHover(date);
        }
    }, [manageHover, end, start, isFirstSelecting, range, onSetHover])

    const setDate = useCallback(({dateInMilliseconds, isActive, e}) =>{
        e?.stopPropagation();

        const date = new Date(dateInMilliseconds);
        !isActive && onMonthChange(e, !(date.getDate() > 15), date)

        !manageSelected && setSelected(date)
        onSelected(date);
    }, [manageSelected, onSelected, onMonthChange]);

    const renderHeaderElement = (name) => {
        const element = findByType(children, name);
        const classes = classnames({
            "header-part": true,
            "--end": name === "HeaderEnd"
        });
        return <div className={classes}>{element}</div>
    }

    const renderCalendarElement = (currentDay) => {
        const isActive = currentDay.getMonth() === new Date(openedDate).getMonth();
        let dateObj = currentDay.setHours(0,0,0,0);

        const props = defineProps(selected, range, dateObj, hoveredFinal);

        return <CalendarDay
            key = {dateObj}
            {...props}
            active={isActive}
            dateInMilliseconds={dateObj}
            onMouseEnter={changeHover}
            onMouseLeave={changeHover}
            onClick={setDate}
        />
    }

    const currentDate = moment(openedDate)
    let curMonthLabel = `${currentDate.format('MMMM')} ${currentDate.year()}`;

    return (
        <>
            <div
                className={classnames(className, "ui-kit__calendar-container")}
                ref={el => {calendarElem.current = el}}
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
                            key={id}> {el}
                        </div>
                    )}
                    {monthDates.map(renderCalendarElement)}
                </div>
            </div>
        </>
    )

}, (prev, next) => {
    return isEqual(prev, next);
});

CalendarMonth.HeaderStart = createSubComponent("HeaderStart");
CalendarMonth.HeaderEnd = createSubComponent("HeaderEnd");

CalendarMonth.defaultProps = {
    openedDate: new Date().setHours(0,0,0,0),
    selectedDate: null,
    onSelected: noop,
    onMonthChange: noop,
    onSetHover: noop,
    className: "",
    range: {}
}

CalendarMonth.propTypes = {
    openedDate: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.number]),
    onSelected: propTypes.func,
    selectedDate: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.number]),
    range: propTypes.shape({
        start: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.number]),
        end: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.number]),
        isFirstSelecting: propTypes.bool
    }),
    hoveredDate: propTypes.oneOfType([propTypes.number, propTypes.object]),
    onMonthChange: propTypes.func,
    classNames: propTypes.oneOfType([propTypes.string, propTypes.object]),
    onSetHover: propTypes.func,
    manageHover: propTypes.bool,
    manageSelected: propTypes.bool
}

export default CalendarMonth