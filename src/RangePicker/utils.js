import { getErrorMessages } from '../DatePicker/utils';

const isRangeCorrect = (start, end) => {
  if (!start || !end) return true;

  const startInSeconds = new Date(start).setHours(0, 0, 0, 0);
  const endInSeconds = new Date(end).setHours(0, 0, 0, 0);

  return startInSeconds <= endInSeconds;
};

export const getErrors = ({ start, end }, format, min, max) => {
  const startErrors = getErrorMessages(start, format, min, max);
  const endErrors = getErrorMessages(end, format, min, max);
  const errors = _.unionWith(startErrors, endErrors, _.isEqual);

  if (!isRangeCorrect(start, end)) {
    errors.push({
      content: 'Start date should be smaller than end date',
      icon: 'exclamation-circle',
    });
  }
  return errors;
};
