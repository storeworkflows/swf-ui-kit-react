import moment from 'moment';
import * as React from 'react';
import propTypes from "prop-types";
import classnames from 'classnames';

import hammer from "hammerjs";

import styles from './styles.scss';
import { DAYS_OF_WEEK } from "./constants";

import Icon from "../Icon/Icon"

class SmallCalendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDate: this.props.defaultDate
        }

        this._addSwipeEvents = this._addSwipeEvents.bind(this);

    }

    _addSwipeEvents(elem) {
        let mc = new Hammer(elem);
        mc.on("swipeleft", this.handleChangeMonthClicked.bind(this, 'next'))
        mc.on("swiperight", this.handleChangeMonthClicked.bind(this, 'prev'))
    }

    _getKeyByValue = (value, obj) => {
        return Object.keys(obj).find(key => obj[key] === value)
    }

    handleDateClick(date) {

    }

    handleChangeMonthClicked(button) {

    }


    render() {

        const {
            defaultDate,
        } = this.props;

        const currentDate = moment([defaultDate.year, defaultDate.month, defaultDate.day])
        let formattedCurDate = currentDate.format("YYYY-MM-DD");

        return (
            <>
                <style>{styles}</style>
                <div className="calendar-mobile__wrapper" >
                    <div className="calendar-mobile__controller">
                        <div className="navigation-arrow--left">
                            <div
                                className="navigation-arrow--left-btn"
                                onClick={this.handleChangeMonthClicked.bind(this, 'prev')}
                            >
                                <Icon icon="arrow-left" />
                            </div>
                        </div>
                        <div className={classnames({
                            "calendar-mobile__month-items": true
                        })}>
                            {Object.values(monthList).map(month =>
                                <div
                                    className={`--${this._getKeyByValue(month, monthList)}`}
                                >
                                    {`${month[0].choosenMonth} ${month[0].choosenYear}`}
                                </div>)
                            }
                        </div>
                        <div className="navigation-arrow--right">
                            <div
                                className="navigation-arrow--right-btn"
                                onClick={this.handleChangeMonthClicked.bind(this, 'next')}
                            >
                                <Icon icon="arrow-right" />
                            </div>
                        </div>
                    </div>
                    <div className="calendar-mobile__header">
                        {DAYS_OF_WEEK.map(day => (<div className="calendar-mobile__header-item">{day}</div>))}
                    </div>
                    <div
                        className={classnames({
                            "calendar-mobile__body-wrapper": true,
                            "--prev-month": classFlags.prevIsCalled,
                            "--current-month": !classFlags.prevIsCalled && !classFlags.nextIsCalled,
                            "--next-month": classFlags.nextIsCalled,
                        })}
                        ref={this._addSwipeEvents}
                    >
                        {Object.values(monthList).map(month => (
                            <div className={classnames({
                                "calendar-mobile__body": true,
                            })}>
                                {month.map(date => (
                                    <div className={classnames({
                                        "date": true,
                                        "--choosen": momentDate === formattedCurDate
                                    })}
                                         style={
                                             {
                                                 width: heatMap ? "100%" : "",
                                                 height: heatMap ? "100%" : "",
                                                 "border-radius": heatMap ? "0" : "",
                                             }
                                         }
                                    >
                                        <div className={classnames({
                                            "calendar-mobile__day": true,
                                            "--disabled": !date.inThisMonth,
                                            "--current": isMomentDateSelected,
                                            "--choosen": isMomentDateSelected
                                        })}
                                             style={
                                                 {
                                                     borderRadius: heatMap ? "none" : ""
                                                 }
                                             }
                                             onClick={this.handleDateClick.bind(this, date)}
                                        >
                                            <span style={{
                                                color: isMomentDateSelected && heatMap ? "#000" : "",
                                                fontWeight: isMomentDateSelected && heatMap ? "800" : "",
                                            }}>
                                                {date.day}
                                            </span>
                                            {date.isTask && !heatMap && showProjects ?
                                                <div className="task-presence"/>
                                                : null
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

SmallCalendar.defaultProps = {
    defaultDate: {
        week: moment().get("week"),
        day: moment().get("date"),
        month: moment().month(),
        year: moment().year(),
    }
}

SmallCalendar.propTypes = {
    defaultDate: propTypes.shape({
        week: propTypes.number,
        day: propTypes.number,
        month: propTypes.number,
        year: propTypes.number
    })
}



export default SmallCalendar;