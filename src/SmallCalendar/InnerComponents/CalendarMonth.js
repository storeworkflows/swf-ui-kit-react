import moment from 'moment';
import * as React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import isEqual from 'react-fast-compare';

import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import {
  defineProps, defineSelected, getMonthDates, useWrappedState,
} from '../utils';
import findByType, { createSubComponent } from '../../utils/findByType';
import CalendarDay from './CalendarDay';
import { noop } from '../../utils';

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const CalendarMonth = React.memo((props) => {
  const {
    openedDate, onSelected, children, min, max,
    range: { isFirstSelecting, end, start }, selectedDate, onMonthChange, className, hoveredDate,
    onSetHover, manageHover, manageSelected, addDisabled,
  } = props;
  const range = { isFirstSelecting, end, start };

  const [monthDates, setMonthDates] = useWrappedState(openedDate, getMonthDates);
  const [selected, setSelected] = useWrappedState({ range, selectedDate }, defineSelected);
  const [hovered, setHovered] = useState(hoveredDate);

  const hoveredFinal = manageHover ? hoveredDate : hovered;
  const calendarElem = useRef(null);

  useEffect(() => setMonthDates(openedDate), [openedDate]);

  useEffect(() => {
    const range = { isFirstSelecting, end, start };
    manageSelected && setSelected({ range, selectedDate });
  }, [manageSelected, isFirstSelecting, end, start, selectedDate]);

  const changeHover = useCallback((date) => {
    if (_.isEmpty(range)) return;

    const needHoverForStart = isFirstSelecting && end;
    const needHoverForEnd = !isFirstSelecting && start;

    if (needHoverForStart || needHoverForEnd) {
      !manageHover && setHovered(date);
      onSetHover(date);
    }
  }, [manageHover, onSetHover, isFirstSelecting, end, start]);

  const setDate = useCallback(({ dateInMilliseconds, isActive, e }) => {
    const range = { isFirstSelecting, end, start };
    e?.stopPropagation();

    const date = new Date(dateInMilliseconds);
    !isActive && onMonthChange(e, !(date.getDate() > 15), date);

    !manageSelected && setSelected({ range, selectedDate: date });
    onSelected(date);
  }, [manageSelected, onSelected, onMonthChange, isFirstSelecting, end, start]);

  const renderHeaderElement = (name) => {
    const element = findByType(children, name);
    const classes = classnames({
      'header-part': true,
      '--end': name === 'HeaderEnd',
    });
    return <div className={classes}>{element}</div>;
  };

  const renderCalendarElement = (currentDay) => {
    const isActive = currentDay.getMonth() === new Date(openedDate).getMonth();
    const dateObj = currentDay.setHours(0, 0, 0, 0);

    const props = defineProps(selected, range, dateObj,
      hoveredFinal, addDisabled, min, max);

    return (
      <CalendarDay
        key={dateObj}
        {...props}
        active={isActive}
        dateInMilliseconds={dateObj}
        onMouseEnter={changeHover}
        onMouseLeave={changeHover}
        onClick={setDate}
      />
    );
  };

  const currentDate = moment(openedDate);
  const curMonthLabel = `${currentDate.format('MMMM')} ${currentDate.year()}`;

  return (
    <>
      <div
        className={classnames(className, 'ui-kit__calendar-container')}
        ref={(el) => { calendarElem.current = el; }}
      >
        <div className="calendar-header">
          {renderHeaderElement('HeaderStart')}
          <span className="calendar-header-label">
            {curMonthLabel}
          </span>
          {renderHeaderElement('HeaderEnd')}
        </div>
        <div className="calendar-view">
          {DAYS_OF_WEEK.map((el, id) => (
            <div
              className="calendar-element week-day"
              key={id}
            >
              {' '}
              {el}
            </div>
          ))}
          {monthDates.map(renderCalendarElement)}
        </div>
      </div>
    </>
  );
}, (prev, next) => isEqual(prev, next));

CalendarMonth.HeaderStart = createSubComponent('HeaderStart');
CalendarMonth.HeaderEnd = createSubComponent('HeaderEnd');

CalendarMonth.defaultProps = {
  openedDate: new Date().setHours(0, 0, 0, 0),
  onSelected: noop,
  onMonthChange: noop,
  onSetHover: noop,
  className: '',
  range: {},
  addDisabled: true,
};

CalendarMonth.propTypes = {
  openedDate: propTypes.number,
  onSelected: propTypes.func,
  selectedDate: propTypes.number,
  range: propTypes.shape({
    start: propTypes.number,
    end: propTypes.number,
    isFirstSelecting: propTypes.bool,
  }),
  hoveredDate: propTypes.number,
  onMonthChange: propTypes.func,
  classNames: propTypes.oneOfType([propTypes.string, propTypes.object]),
  onSetHover: propTypes.func,
  manageHover: propTypes.bool,
  manageSelected: propTypes.bool,
  addDisabled: propTypes.bool,
  min: propTypes.number,
  max: propTypes.number,
};

export default CalendarMonth;
