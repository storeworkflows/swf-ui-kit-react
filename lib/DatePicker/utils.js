"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getErrorOnInvalidMaxValue = exports.getErrorOnInvalidMinValue = exports.isPointInsideTheElement = exports.addCharToDate = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isLetter = function isLetter(_char) {
  return _char.match(/[a-zA-Z]/i);
};

var isNumber = function isNumber(_char2) {
  return _char2 >= '0' && _char2 <= '9';
};

var isExpectedTypeOfChar = function isExpectedTypeOfChar(_char3, expectedChar) {
  // console.log("compare", char, expectedChar)
  switch (true) {
    case isLetter(expectedChar):
      return isLetter(_char3);

    case isNumber(expectedChar):
      return isNumber(_char3);

    default:
      return _char3 === expectedChar;
  }
};

var isZeroAvailable = function isZeroAvailable(format, position) {
  return position === 0 || !isLetter(format.charAt(position - 1));
};

var nextChar = function nextChar(format, position) {
  var result = '';
  var nextPosition = position + 1;
  if (format.length > nextPosition && !isLetter(format.charAt(nextPosition))) result += format.charAt(nextPosition);
  return result;
};

var addCharToDate = function addCharToDate(format, curStr, _char4) {
  var dateStr = (0, _moment["default"])().format(format);
  if (!curStr) curStr = '';
  var possibleResult = curStr + _char4;
  var result = "";
  var isValidDate = false;

  if (_char4 == null) {
    result = curStr.length > 0 ? curStr.slice(0, -1) : '';
  } else {
    isValidDate = (0, _moment["default"])(possibleResult, format, false).isValid();
    var expectedChar = dateStr.charAt(curStr.length);
    var isZero = _char4 === '0' && isZeroAvailable(format, curStr.length);
    var isNeededChar = isZero || isValidDate && isExpectedTypeOfChar(_char4.charAt(0), expectedChar);
    result = isNeededChar ? curStr + _char4.charAt(0) + nextChar(format, curStr.length) : curStr;
  }

  return result;
};

exports.addCharToDate = addCharToDate;

var isPointInsideTheElement = function isPointInsideTheElement(element, pointX, pointY) {
  var elementDimensions = element.getBoundingClientRect();
  var elementPoints = {
    startY: elementDimensions.y,
    startX: elementDimensions.x,
    endY: elementDimensions.y + elementDimensions.height,
    endX: elementDimensions.x + elementDimensions.width
  };
  var insideX = pointX < elementPoints.endX && pointX > elementPoints.startX;
  var insideY = pointY < elementPoints.endY && pointY > elementPoints.startY;
  return insideY && insideX;
};

exports.isPointInsideTheElement = isPointInsideTheElement;

var getErrorOnInvalidMinValue = function getErrorOnInvalidMinValue(current, min) {
  if (current && min) {
    var currentDate = new Date(current);
    var minDate = new Date(min);
    if (currentDate < minDate) return {
      content: "Date should be bigger than ".concat(min),
      icon: "exclamation-circle",
      delay: 5000
    };
  }

  return undefined;
};

exports.getErrorOnInvalidMinValue = getErrorOnInvalidMinValue;

var getErrorOnInvalidMaxValue = function getErrorOnInvalidMaxValue(current, max) {
  if (current && max) {
    var currentDate = new Date(current);
    var minDate = new Date(max);
    if (currentDate > minDate) return {
      content: "Date should be smaller than ".concat(max),
      icon: "exclamation-circle",
      delay: 5000
    };
  }

  return undefined;
};

exports.getErrorOnInvalidMaxValue = getErrorOnInvalidMaxValue;