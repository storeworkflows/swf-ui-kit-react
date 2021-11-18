import moment from 'moment';
import { useState } from 'react';

const defineExtreme = (start, end, current) => {
  switch (current) {
    case start:
      return start === end ? 'one' : 'first';
    case end:
      return 'last';
    default:
      return 'none';
  }
};

const getMilliseconds = (date, gap = 0) => {
  if (!date) return;

  if (!gap) return (new Date(date)).setHours(0, 0, 0, 0);

  const dateInMilliseconds = new Date(date);
  dateInMilliseconds.setDate(dateInMilliseconds.getDate() + gap);
  return dateInMilliseconds.setHours(0, 0, 0, 0);
};

const defineDisabled = ({ min, max, current }) => {
  if (!min && !max) return;

  if (current >= max || current <= min) {
    switch (true) {
      case current === max:
        return 'start';
      case current === min:
        return 'end';
      default:
        return 'none';
    }
  }
};

export const defineProps = (selectedDate, range, current, hoveredDate, addDisabled, min, max) => {
  const startDate = (!_.isEmpty(range) || range.isFirstSelecting) ? range.start : selectedDate;
  const endDate = !_.isEmpty(range) && (range.isFirstSelecting ? range.end : selectedDate);

  const selected = _.isEqual(startDate, current) || _.isEqual(endDate, current);
  const isNowDate = _.isEqual(current, new Date().setHours(0, 0, 0, 0));
  const inSelectedPeriod = startDate && endDate && current >= startDate && current <= endDate;

  if (_.isEmpty(range)) return { selected, inSelectedPeriod, isNowDate };

  const needDisableStart = (range.start && range.end) || (range.start && !range.isFirstSelecting);
  const needDisableEnd = (range.start && range.end) || (range.end && range.isFirstSelecting);

  const disabledStart = needDisableStart ? startDate : min;
  const disabledEnd = needDisableEnd ? endDate : max;

  const disabled = addDisabled && !inSelectedPeriod
        && defineDisabled({
          min: getMilliseconds(disabledStart, -1),
          max: getMilliseconds(disabledEnd, 1),
          current,
        });

  const selectedBorders = selected ? defineBorder(startDate, endDate, current) : [];

  let hoveredData = {};
  if (!disabled && addDisabled) {
    hoveredData = range.isFirstSelecting
      ? defineHoverProps({ start: hoveredDate, end: endDate, current })
      : defineHoverProps({ start: startDate, end: hoveredDate, current });
  }

  return {
    ...hoveredData, selected, inSelectedPeriod, isNowDate, selectedBorders, disabled,
  };
};

const defineHoverProps = ({ start, end, current }) => {
  if (!start || !end) return;

  const hovered = current >= start && current <= end;
  if (!hovered) return;

  const borders = defineBorder(start, end, current);
  const extreme = defineExtreme(start, end, current);

  return { hovered, extreme, borders };
};

const checkIfHorizontalExtreme = (date, current, compareWith) => {
  const dayInWeek = new Date(current).getDay();
  return date && _.isEqual(date, current) || dayInWeek === compareWith;
};

const checkIfVerticalExtreme = (date, current) => {
  if (!date || !current) return false;

  const diff = Math.abs(current - date);
  const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return diffDays < 7;
};

const defineBorder = (start, end, current) => {
  const result = [];

  checkIfHorizontalExtreme(start, current, 0) && result.push('left');
  checkIfHorizontalExtreme(end, current, 6) && result.push('right');

  checkIfVerticalExtreme(start, current) && result.push('top');
  checkIfVerticalExtreme(end, current) && result.push('bottom');

  return result;
};

export const defineSelected = ({ range, selectedDate }) => {
  if (selectedDate) return selectedDate;

  if (!_.isEmpty(range)) return range.isFirstSelecting ? range.start : range.end;

  return null;
};

export const updateExtremeDates = (oldExtreme, selectedDate, isFirstSelecting) => {
  const oldDate = isFirstSelecting ? oldExtreme.end : oldExtreme.start;

  const oldFitSelected = oldDate
        && (isFirstSelecting && selectedDate <= oldDate)
        || (!isFirstSelecting && selectedDate >= oldDate);

  const result = oldFitSelected ? oldDate : undefined;
  return {
    start: isFirstSelecting ? selectedDate : result,
    end: isFirstSelecting ? result : selectedDate,
  };
};

const getDateInstance = (input) => {
  const [year, month, day] = input.split('-');
  return new Date(year, month - 1, day);
}

export const checkDate = (input) => {
  if (input && moment(input).isValid()) {
    if (typeof input === "string") input = getDateInstance(input);

    return new Date(input).setHours(0, 0, 0, 0);
  }
};

export const getExtremeDates = ({ start, end }) => ({
  start: checkDate(start),
  end: checkDate(end),
});

export const getMonthDates = (openedDate) => {
  const result = [];
  const currentWeek = moment(openedDate);
  currentWeek.startOf('month').startOf('week');

  for (let w = 0; w < 6; w++) {
    (w > 0) && currentWeek.add(1, 'week');
    const currentDay = currentWeek.startOf('week');

    for (let d = 0; d < 7; d++) {
      (d > 0) && currentDay.add(1, 'day');
      result.push(currentDay.toDate());
    }
  }

  return result;
};

export const getDefinedDate = (date) => checkDate(date) || new Date().setHours(0, 0, 0, 0);

export const useWrappedState = (value, func = () => void 0) => {
  const [state, setState] = useState(func(value));
  const setWrappedState = (value) => setState(func(value));
  return [state, setWrappedState];
};
