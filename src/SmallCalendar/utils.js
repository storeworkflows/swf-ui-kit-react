import moment from "moment";

const defineExtreme = (start, end, current) => {
    switch (current) {
        case start:
            return start===end ? "one" : "first"
        case end:
            return "last"
        default:
            return "none"
    }
}

const getMilliseconds = (date, gap) => {
    const dateInMilliseconds  = new Date(date)
    dateInMilliseconds.setDate(dateInMilliseconds.getDate() + gap)
    return  dateInMilliseconds.setHours(0,0,0,0)
}

const defineDisabledValue = (startDate, endDate, current, isFirstSelecting) => {
    if( (isFirstSelecting && current>endDate) || (!isFirstSelecting && current<startDate))
    {
        switch (true) {
            case isFirstSelecting && current === getMilliseconds(endDate, 1) :
                return "start";
            case !isFirstSelecting && current ===  getMilliseconds(startDate, -1) :
                return "end";
            default:
                return "none";
        }
    } else
        return false
}

export const defineProps = (selectedDate, range, current, hoveredDate, addDisabled) => {
    let startDate = (!range || range.isFirstSelecting ? selectedDate : range.start)?.setHours(0,0,0,0);
    let endDate = range && (range.isFirstSelecting ? range.end : selectedDate)?.setHours(0,0,0,0);

    let selected = _.isEqual(startDate, current) || _.isEqual(endDate, current)
    let isNowDate = _.isEqual(current, new Date().setHours(0,0,0,0) )
    let inSelectedPeriod = startDate && endDate && current>=startDate && current<=endDate;

    if(!range)
        return  {selected, inSelectedPeriod, isNowDate};

    let disabled = addDisabled && !inSelectedPeriod && defineDisabledValue(startDate, endDate, current, range.isFirstSelecting);
    let selectedBorders = selected ? defineBorder(startDate, endDate, current) : []

    let hoveredData = {}
    if(!disabled && addDisabled)
        hoveredData = range.isFirstSelecting
            ? defineHoverProps({ start: hoveredDate, end: endDate, current})
            : defineHoverProps({ start: startDate, end: hoveredDate, current});

    return {...hoveredData, selected, inSelectedPeriod, isNowDate, selectedBorders, disabled}
}

const defineHoverProps = ({start, end, current}) => {
    if(!start || !end)
        return;

    const hovered = current>=start && current<=end;
    if(!hovered)
        return

    const borders = defineBorder(start, end, current);
    const extreme = defineExtreme(start, end, current);

    return {hovered, extreme, borders}
}

const checkIfHorizontalExtreme = (date, current, compareWith) => {
    const dayInWeek = new Date(current).getDay();
    return date && _.isEqual(date, current) || dayInWeek === compareWith;
}

const checkIfVerticalExtreme = (date, current) => {
    if(!date || !current)
        return false;

    const diff = Math.abs(current - date);
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return diffDays<7
}

const defineBorder = (start, end, current) => {
    let result = []

    checkIfHorizontalExtreme( start, current, 0) && result.push("left");
    checkIfHorizontalExtreme( end, current, 6) && result.push("right");

    checkIfVerticalExtreme(start, current) && result.push("top")
    checkIfVerticalExtreme(end, current) && result.push("bottom")

    return result;
}

export const defineSelected = (range, selected) => {
    if (selected)
        return selected;

    if (range)
        return range.isFirstSelecting ? range.start : range.end;

    return null;
}


export const updateExtremeDates = (oldExtreme, selectedDate, isFirstSelecting) => {
    const oldDate = isFirstSelecting ? oldExtreme.end : oldExtreme.start;

    const selectedInSeconds = selectedDate?.setHours(0,0,0,0);
    const oldInSeconds = oldDate?.setHours(0,0,0,0);
    const oldFitSelected = oldDate &&
        (isFirstSelecting && selectedInSeconds<=oldInSeconds)
        || (!isFirstSelecting && selectedInSeconds>=oldInSeconds);

    const result = oldFitSelected ? oldDate : undefined
    return {
        start: isFirstSelecting ? selectedDate : result,
        end: isFirstSelecting ? result : selectedDate
    }
}

export const convertToDate = (input) => {
    if(input && moment(input).isValid())
        return new Date(input)
}

export const getMonthDates = (openedDate) => {
    let result = [];
    let currentWeek = moment(openedDate);
    currentWeek.startOf("month").startOf("week")

    for (let w = 0; w < 6; w++) {
        (w > 0) && currentWeek.add(1, 'week');
        let currentDay = currentWeek.startOf("week");

        for (let d = 0; d < 7; d++) {
            (d > 0) && currentDay.add(1, "day");
            result.push(currentDay.toDate());
        }
    }

    return result;
}