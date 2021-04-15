import moment from 'moment';
import * as React from 'react';
import propTypes from "prop-types";
import classnames from 'classnames';

import hammer from "hammerjs";

import Icon from "../Icon/Icon"

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

class SmallCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.changeMonth = this.changeMonth.bind(this);
        this.setDate = this.setDate.bind(this);

        const {openedDate} = this.props;
        let date = (openedDate) ? new Date(openedDate) : null;

        this.state = {
            selectedDate: date,
            openedDate: (date) ? date : new Date()
        }

    }

    setDate(day, isActive, e){
        e?.stopPropagation();

        const {openedDate} = this.state;
        const {onSelected} = this.props;
        let newSelected;

        if(isActive)
            newSelected = new Date(openedDate.getFullYear(), openedDate.getMonth(), day);
        else {
            let isNext = day>15 ? -1 : 1;
            let updatedMonth = moment(openedDate).add(isNext, "month").toDate();

            newSelected = new Date(updatedMonth.getFullYear(), updatedMonth.getMonth(), day);
            this.setState({openedDate: updatedMonth});
        }

        this.setState({selectedDate: newSelected});
        if(onSelected)
            onSelected({date: newSelected});
    }

    changeMonth(isNext) {
        let additionValue = isNext ? 1 : -1;
        let changedTo = moment(this.state.openedDate).add(additionValue, "month");

        this.setState({openedDate: changedTo.toDate()})
    }

    renderCalendarElement(day, isActive, key){
        const {openedDate, selectedDate} = this.state;

        let dayNumber = parseInt(day)

        let isSelected = false;
        if(selectedDate) {
            let selectedMonth = selectedDate.getMonth();
            let selectedYear = selectedDate.getFullYear();
            let openedMonth = openedDate.getMonth();
            let openedYear = openedDate.getFullYear();

            let nextMonth = (openedMonth + 1) % 12;
            let prevMonth = (openedMonth - 1) % 12;
            let nextYear = (nextMonth === 0) ? (openedYear + 1) : openedYear;
            let prevYear = (prevMonth === 11) ? (openedYear - 1) : openedYear;

            let isSelectedDateInOpenedMonth = isActive && selectedMonth === openedMonth && selectedYear === openedYear;
            let isSelectedDateInNextMonth = !isActive && selectedMonth === nextMonth && selectedYear === nextYear;
            let isSelectedDateInPrevMonth = !isActive && selectedMonth === prevMonth && selectedYear === prevYear;


            isSelected = selectedDate.getDate() === dayNumber &&
                (isSelectedDateInOpenedMonth
                    || isSelectedDateInNextMonth
                    || isSelectedDateInPrevMonth);
        }

        return (
            <div className={
                classnames({
                    "calendar-element": true,
                    "day-element": true,
                    "notActive": !isActive,
                    "active": isActive,
                    "selected": isSelected
                })}
                 onClick={(e) =>  this.setDate(dayNumber, isActive, e)}
                 key={key}
            >
                {day}
            </div>
        )
    }

    componentDidMount() {
       if(this.calendarElem){
            let mc = new Hammer(this.calendarElem);
            mc.on("swipeleft", () => this.changeMonth(true))
            mc.on("swiperight", () => this.changeMonth(false))
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        const {openedDate} = this.props;
        if(openedDate !== prevProps.openedDate) {
            let date = (openedDate) ? new Date(openedDate) : null;

            this.setState({
                selectedDate: date,
                openedDate: (date) ? date : new Date()
            })
        }
    }


    renderMonth(){
        const {openedDate} = this.state;
        let result = [];

        let openedMonth = openedDate.getMonth() + 1;
        let currentWeek = moment(openedDate);
        currentWeek.startOf("month").startOf("week")

        for(let w=0; w<6; w++)
        {
            if(w>0)
                currentWeek.add(1, 'week');
            let currentDay = currentWeek.startOf("week");

            for(let d=0; d<7; d++)
            {
                if(d>0)
                    currentDay.add(1, "day");

                const isActive = currentDay.format('M') === `${openedMonth}`;
                result.push(this.renderCalendarElement(currentDay.format('D'), isActive, currentDay));
            }
        }

        return result;
    }


    renderArrowButton(isNext){
        let classes = classnames({
            "calendar-arrow": true,
            "next": isNext
        });

        return (
            <div
                className={classes}
                onClick = {() => this.changeMonth(isNext)}>

                <Icon
                    icon={isNext ? "chevron-right" : "chevron-left"}
                    size={"sm"}/>
            </div>
        )
    }


    render() {

        const {openedDate} = this.state;
        const currentDate = moment(openedDate)
        let curMonthLabel = `${currentDate.format('MMMM')} ${currentDate.year()}`;

        return (
            <>
                <div
                    className={"ui-kit__calendar-container"}
                    ref = {el => this.calendarElem = el}
                >

                    <div className={"calendar-header"}>
                        {this.renderArrowButton(false)}
                        <span className={"calendar-header-label"} >
                            {curMonthLabel}
                        </span>
                        {this.renderArrowButton(true)}
                    </div>
                    <div className={"week-days-container"}>
                        {DAYS_OF_WEEK.map( (el, id) => {
                            return <div className={"calendar-element week-day"} key={id}> {el} </div>
                        })}
                    </div>
                    <div className={"calendar-view"} >
                        {this.renderMonth().map(el => el)}
                    </div>
                </div>
            </>
        )
    }
}

SmallCalendar.defaultProps = {
    openedDate: null
}

SmallCalendar.propTypes = {
    openedDate: propTypes.any,
    onSelected: propTypes.func
}

export default SmallCalendar;