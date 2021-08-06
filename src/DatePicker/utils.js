import moment from 'moment';

const isLetter = (char) => char.match(/[a-zA-Z]/i);

const isNumber = (char) => char >= '0' && char <= '9';

const isExpectedTypeOfChar = (char, expectedChar) => {
  switch (true) {
    case isLetter(expectedChar):
      return isLetter(char);
    case isNumber(expectedChar):
      return isNumber(char);
    default:
      return char === expectedChar;
  }
};

const isZeroAvailable = (format, position) => position === 0 || !isLetter(format.charAt(position - 1));

const nextChar = (format, position) => {
  let result = '';
  const nextPosition = position + 1;
  if (format.length > nextPosition
        && !isLetter(format.charAt(nextPosition))) result += format.charAt(nextPosition);

  return result;
};

export const addCharToDate = (format, curStr, char) => {
  const dateStr = moment().format(format);
  if (!curStr) curStr = '';

  const possibleResult = curStr + char;

  let result = '';
  let isValidDate = false;
  if (char == null) {
    result = (curStr.length > 0) ? curStr.slice(0, -1) : '';
  } else {
    isValidDate = moment(possibleResult, format, false).isValid();

    const expectedChar = dateStr.charAt(curStr.length);
    const isZero = char === '0' && isZeroAvailable(format, curStr.length);

    const isNeededChar = isZero || (isValidDate && isExpectedTypeOfChar(char.charAt(0), expectedChar));

    result = (isNeededChar)
      ? curStr + char.charAt(0) + nextChar(format, curStr.length)
      : curStr;
  }

  return result;
};

export const isPointInsideTheElement = (element, pointX, pointY) => {
  const elementDimensions = element.getBoundingClientRect();

  const elementPoints = {
    startY: elementDimensions.y,
    startX: elementDimensions.x,
    endY: elementDimensions.y + elementDimensions.height,
    endX: elementDimensions.x + elementDimensions.width,
  };

  const insideX = pointX < elementPoints.endX && pointX > elementPoints.startX;
  const insideY = pointY < elementPoints.endY && pointY > elementPoints.startY;

  return insideY && insideX;
};

export const getErrorOnBoundaryValue = (current, boundary, format, isMin = true) => {
  if (current && boundary) {
    const currentDate = new Date(current);
    const boundaryDate = new Date(boundary);

    const invalidCheck = (isMin && (currentDate < boundaryDate)) || (!isMin && (currentDate > boundaryDate));

    if (invalidCheck) {
      return {
        content: `Date should be ${isMin ? 'bigger' : 'smaller'} than ${moment(boundaryDate).format(format)}`,
        icon: 'exclamation-circle',
      };
    }
  }
  return undefined;
};

const invalidFormatMess = { content: 'Invalid date format', icon: 'exclamation-circle' };

export const getErrorMessages = (stringDate, format, min, max) => {
  const isEmptyStr = !stringDate || stringDate.length < 1;
  const isValidValue = isEmptyStr || moment(stringDate, format, true).isValid();

  if (!isValidValue) return [invalidFormatMess];

  const minError = getErrorOnBoundaryValue(stringDate, min, format);
  const maxError = getErrorOnBoundaryValue(stringDate, max, format, false);

  const hasError = minError || maxError;
  if (hasError) return [hasError];

  return [];
};

export const hasChanges = (a, b) => !_.isEqual(
  _.sortBy(a, 'content'),
  _.sortBy(b, 'content'),
);
