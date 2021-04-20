import moment from "moment";

const isLetter = (char) => {
    return char.match(/[a-zA-Z]/i);
}

const isNumber = (char) => {
    return  char >= '0' && char <= '9';
}

const isExpectedTypeOfChar = (char, expectedChar) => {
   // console.log("compare", char, expectedChar)
    switch (true){
        case isLetter(expectedChar) :
            return  isLetter(char);
        case isNumber(expectedChar) :
            return isNumber(char);
        default:
            return char === expectedChar;
    }

}

const isZeroAvailable = (format, position) => {
    return position === 0 || !isLetter(format.charAt(position-1));
}

const nextChar = (format, position) => {
    let result = '';
    let nextPosition = position + 1;
    if(format.length > nextPosition
        && !isLetter(format.charAt(nextPosition)))
        result+=format.charAt(nextPosition);

    return result;
}

export const addCharToDate = (format, curStr, char) => {
    let dateStr = moment().format(format);
    if(!curStr)
        curStr = ''

    let possibleResult = curStr + char ;

    let result = "";
    let isValidDate = false;
    if(char==null){
        result = (curStr.length>0) ? curStr.slice(0, -1) : '';
    } else {
        isValidDate = moment(possibleResult, format, false).isValid();

        let expectedChar = dateStr.charAt(curStr.length);
        let isZero = char==='0' && isZeroAvailable(format, curStr.length);

        let isNeededChar = isZero || (isValidDate && isExpectedTypeOfChar(char.charAt(0), expectedChar));

        result = (isNeededChar)
            ? curStr + char.charAt(0) + nextChar(format, curStr.length)
            : curStr;
    }

    return result;
}


export const isPointInsideTheElement = (element, pointX, pointY) => {
    let elementDimensions = element.getBoundingClientRect();

    let elementPoints = {
        startY: elementDimensions.y,
        startX: elementDimensions.x,
        endY: elementDimensions.y + elementDimensions.height,
        endX: elementDimensions.x + elementDimensions.width
    }

    let insideX = pointX<elementPoints.endX && pointX>elementPoints.startX;
    let insideY = pointY<elementPoints.endY && pointY>elementPoints.startY;

    return insideY && insideX
}


export const getErrorOnBoundaryValue = (current, boundary, format, isMin = true) => {
    if(current && boundary) {
        let currentDate = new Date(current);
        let boundaryDate = new Date(boundary);

        let invalidCheck = (isMin && (currentDate < boundaryDate)) || (!isMin && (currentDate > boundaryDate));

        if (invalidCheck)
            return {
                content: `Date should be ${isMin ? "bigger" : "smaller"} than ${moment(boundaryDate).format(format)}`,
                icon: "exclamation-circle",
                delay: 5000
            };
    }
    return undefined;
}

const invalidFormatMess = {content: `Invalid date format`, icon: "exclamation-circle", delay: 5000}

export const getErrorMessages = (stringDate, format, min, max) => {
    let isEmptyStr = !stringDate || stringDate.length < 1;
    let isValidValue = isEmptyStr || moment(stringDate, format, true).isValid();

    if(!isValidValue)
        return [invalidFormatMess]
    else{
        let minError =  getErrorOnBoundaryValue(stringDate, min, format);
        let maxError = getErrorOnBoundaryValue(stringDate, max, format, false);

        let hasError = minError || maxError;
        if(hasError)
            return [hasError];
    }

    return [];
}