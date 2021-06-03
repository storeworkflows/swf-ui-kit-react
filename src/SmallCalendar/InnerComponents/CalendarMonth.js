import moment from 'moment';
import * as React from 'react';
import propTypes from "prop-types";
import classnames from 'classnames';

import {defineProps, defineSelected, getMonthDates} from "../utils";
import {useCallback, useEffect, useRef, useState} from "react";
import findByType, {createSubComponent} from "../../utils/findByType";
import CalendarDay from "./CalendarDay";

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const CalendarMonth = React.forwardRef((props, ref) => {

    const {openedDate, onSelected, children, range, selectedDate, onMonthChange, className, hoveredDate,
        onSetHover, manageHover, manageSelected} = props;

    const [monthDates, setMonthDates] = useState([]);
    const [selected, setSelected] = useState(defineSelected(range, selectedDate));
    const [hovered, setHovered] = useState(hoveredDate);

    const calendarElem = useRef(null);

    useEffect( () => setMonthDates(getMonthDates(openedDate)), [openedDate])

    useEffect(() => {
        manageHover && setHovered(hoveredDate)
    }, [hoveredDate, manageHover])

    useEffect(() => {
        manageSelected && setSelected(defineSelected(range, selectedDate))
    }, [manageSelected, range, selectedDate])

    const changeHover = useCallback((date) => {
        if(!range)
            return;

        const needHoverForStart = range.isFirstSelecting && range.end;
        const needHoverForEnd = !range.isFirstSelecting && range.start;

        if(needHoverForStart || needHoverForEnd) {
            !manageHover && setHovered(date);
            onSetHover(date);
        }
    }, [range, manageHover])

    const setDate = useCallback(({dateObj, isActive, e}) =>{
        e?.stopPropagation();

        const date = new Date(dateObj);
        !isActive && onMonthChange(date, !(date.getDate() > 15))

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
        const isActive = currentDay.getMonth() === openedDate.getMonth();
        let dateObj = currentDay.setHours(0,0,0,0);

        const {isSelected, inSelectedPeriod, isNowDate, isHovered, extreme, borders, selectedBorders, disabled}
            = defineProps(selected, range, dateObj, hovered);

        return <CalendarDay
            key = {dateObj}
            active={isActive}
            number={currentDay.getDate()}
            isNowDate={isNowDate}
            selected={isSelected}
            disabled={disabled}

            inSelectedPeriod={inSelectedPeriod}
            hovered={isHovered}
            extreme={extreme}
            borders={borders}
            selectedBorders={selectedBorders}

            onMouseEnter={() => changeHover(dateObj)}
            onMouseLeave={() => changeHover(null)}
            onClick={(e) => setDate({dateObj, isActive, e}) }
        />
    }

    const currentDate = moment(openedDate)
    let curMonthLabel = `${currentDate.format('MMMM')} ${currentDate.year()}`;

    return (
        <>
            <div
                className={classnames(className, "ui-kit__calendar-container")}
                ref={el => {calendarElem.current = el; ref = el;}}
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
        start: propTypes.oneOfType([propTypes.string, propTypes.object]),
        end: propTypes.oneOfType([propTypes.string, propTypes.object]),
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