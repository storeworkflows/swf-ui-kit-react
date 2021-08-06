import moment from 'moment';
import * as React from 'react';
import propTypes from 'prop-types';

import { useCallback, useEffect, useState } from 'react';
import isEqual from 'react-fast-compare';
import CalendarMonth from './InnerComponents/CalendarMonth';
import ArrowButton from './InnerComponents/ArrowButton';
import { checkDate, getDefinedDate, useWrappedState } from './utils';
import { noop } from '../utils';

const SmallCalendar = React.forwardRef((props, ref) => {
  const { selectedDate, onSelected, manageValue } = props;

  const [selected, setSelectedDate] = useWrappedState(selectedDate, checkDate);
  const [openedDateValue, setOpenedDateValue] = useWrappedState(selectedDate, getDefinedDate);

  useEffect(() => {
    if (manageValue) {
      setSelectedDate(selectedDate);
      setOpenedDateValue(selectedDate);
    }
  }, [selectedDate, manageValue]);

  const selectAction = useCallback((date) => {
    if (!manageValue) {
      setSelectedDate(date);
      setOpenedDateValue(date);
    }
    onSelected(date);
  }, [manageValue, onSelected]);

  const changeMonth = useCallback((e, isNext, selectedDate) => {
    e?.stopPropagation();

    const additionValue = isNext ? 1 : -1;
    const changedTo = moment(openedDateValue).add(additionValue, 'month');

    if (selectedDate) {
      !manageValue && setSelectedDate(selectedDate);
      onSelected(selectedDate);
    }

    setOpenedDateValue(changedTo.toDate());
  }, [openedDateValue]);

  return (
    <div ref={ref}>
      <CalendarMonth
        openedDate={openedDateValue}
        selectedDate={selected}
        onSelected={selectAction}
        manageSelected
      >

        <CalendarMonth.HeaderStart>
          <ArrowButton onClick={changeMonth} />
        </CalendarMonth.HeaderStart>

        <CalendarMonth.HeaderEnd>
          <ArrowButton isNext onClick={changeMonth} />
        </CalendarMonth.HeaderEnd>

      </CalendarMonth>
    </div>
  );
});

SmallCalendar.defaultProps = {
  openedDate: null,
  onSelected: noop,
};

SmallCalendar.propTypes = {
  selectedDate: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.object]),
  onSelected: propTypes.func,
  manageValue: propTypes.bool,
};

export default React.memo(SmallCalendar, (prev, next) => isEqual(prev, next));
