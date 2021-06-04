import moment from "moment";

const defineExtreme = (start, end, curr) => {
    switch (curr) {
        case start:
            return start===end ? "one" : "first"
        case end:
            return "last"
        default:
            return "none"
    }

}

const defineDisabledValue = (startDate, endDate, current, isFirstSelecting) => {
    if( (isFirstSelecting && current>endDate) || (!isFirstSelecting && current<startDate))
    {
        const nextStart = new Date(startDate)
        nextStart.setDate(nextStart.getDate() - 1)
        const s = nextStart.setHours(0,0,0,0)

        const nextEnd = new Date(endDate)
        nextEnd.setDate(nextEnd.getDate() + 1)
        const e = nextEnd.setHours(0,0,0,0)

        switch (true) {
            case isFirstSelecting && current === e :
                return "start";
            case !isFirstSelecting && current === s :
                return "end";
            default:
                return "none";
        }
    }
}

export const defineProps = (selectedDate, range, current, hoveredDate) => {
    let startDate = (!range || range.isFirstSelecting ? selectedDate : range.start)?.setHours(0,0,0,0);
    let endDate = range && (range.isFirstSelecting ? range.end : selectedDate)?.setHours(0,0,0,0);

    if(endDate && startDate){
        if(range.isFirstSelecting && endDate<startDate)
            endDate = null;
        if(!range.isFirstSelecting && endDate<startDate)
            startDate = null;
    }

    let selected = _.isEqual(startDate, current) || _.isEqual(endDate, current)
    let inSelectedPeriod = startDate && endDate && current>=startDate && current<=endDate;
    let isNowDate = _.isEqual(current, new Date().setHours(0,0,0,0) )

    let hovered = false;
    let extreme =  "none";
    let borders = [];
    let disabled = false;

    if(range && !inSelectedPeriod)
        disabled = defineDisabledValue(startDate, endDate, current, range.isFirstSelecting)

    if(range && hoveredDate) {

        const hoveredForFirst = range.isFirstSelecting && endDate && current <= endDate && current >= hoveredDate;
        const hoveredForSecond = !range.isFirstSelecting && startDate && current >= startDate && current <= hoveredDate;

        extreme = range.isFirstSelecting
            ? defineExtreme(hoveredDate, endDate, current)
            : defineExtreme(startDate, hoveredDate, current);

        hovered = hoveredForSecond || hoveredForFirst;
        borders = range.isFirstSelecting
            ? defineBorder(hoveredDate, endDate, current)
            : defineBorder(startDate, hoveredDate, current)
    }
    let selectedBorders = []
    if(selected && range)
        selectedBorders = defineBorder(startDate, endDate, current)

    return {selected, inSelectedPeriod, isNowDate, hovered, extreme, borders, selectedBorders, disabled}
}

const defineBorder = (start, end, current) => {
    const dayInWeek = new Date(current).getDay();
    let result = [];

    if(_.isEqual(start, current) || dayInWeek === 0)
        result.push("left");
    if(_.isEqual(end, current) || dayInWeek === 6)
        result.push("right");

    if(start) {
        const diffStart = Math.abs(current - start);
        const diffDaysStart = Math.ceil(diffStart / (1000 * 60 * 60 * 24));
        diffDaysStart<7 &&  result.push("top");
    }

    if(end) {
        const diffEnd = Math.abs(end - current);
        const diffDaysEnd = Math.ceil(diffEnd / (1000 * 60 * 60 * 24));
        diffDaysEnd < 7 && result.push("bottom");
    }
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
    const selectedInSeconds = selectedDate?.setHours(0,0,0,0);

    if(isFirstSelecting){
        const endInSeconds = oldExtreme.end?.setHours(0,0,0,0);
        const endFitSelected = oldExtreme.end && selectedInSeconds<=endInSeconds;
        return {
            start: selectedDate,
            end: endFitSelected ? oldExtreme.end : undefined
        }
    } else {
        const startInSeconds = oldExtreme.start?.setHours(0,0,0,0);
        const startFitSelected = oldExtreme.start &&  selectedInSeconds>=startInSeconds;
        return {
            start: startFitSelected ? oldExtreme.start : undefined,
            end: selectedDate
        }
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

export const checkIfEqual = (newValue, oldValue) => {
    let res = true;
     Object.entries(newValue).map(([key, value] )=> {
        if(oldValue[`${key}`] !== value){
            res = false
            return false;
        }
    })
    return res;
}