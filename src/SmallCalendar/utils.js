
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

export const defineProps = (selectedDates, range, current, hovered, dayInWeek) => {
    let startDate = range && selectedDates[0]?.setHours(0,0,0,0) ;
    let endDate = range && selectedDates[1]?.setHours(0,0,0,0) ;

    if(endDate && startDate){
        if(range.isFirstSelecting && endDate<startDate)
            endDate = null;
        if(!range.isFirstSelecting && endDate<startDate)
            startDate = null;
    }

    let selected = _.isEqual(startDate, current) || _.isEqual(endDate, current)
    let inSelectedPeriod = startDate && endDate && current>=startDate && current<=endDate;
    let isNowDate = _.isEqual(current, new Date().setHours(0,0,0,0) )

    let isHovered = false;
    let extreme =  "none";
    let borders = [];

    if(range && hovered) {

        const hoveredForFirst = range.isFirstSelecting && endDate && current <= endDate && current >= hovered;
        const hoveredForSecond = !range.isFirstSelecting && startDate && current >= startDate && current <= hovered;

        extreme = range.isFirstSelecting
            ? defineExtreme(hovered, endDate, current)
            : defineExtreme(startDate, hovered, current);

        isHovered = hoveredForSecond || hoveredForFirst;
        borders = range.isFirstSelecting
            ? defineBorder(hovered, endDate, current, dayInWeek)
            : defineBorder(startDate, hovered, current, dayInWeek)
    }
    let selectedBorders = []
    if(selected && range)
        selectedBorders = defineBorder(startDate, endDate, current, dayInWeek)

    return {selected, inSelectedPeriod, isNowDate, isHovered, extreme, borders, selectedBorders}
}

const defineBorder = (start, end, current, dayInWeek) => {
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
        return range.isFirstSelecting ? range.startDay : range.endDay;

    return null;
}

export const updateExtremeDates = (oldExtreme, selectedDate, isFirstSelecting) => {
    const selectedInSeconds = selectedDate?.setHours(0,0,0,0);

    if(isFirstSelecting){
        const endInSeconds = oldExtreme.endDay?.setHours(0,0,0,0);
        const endFitSelected = oldExtreme.endDay && selectedInSeconds<=endInSeconds;
        return {
            startDay: selectedDate,
            endDay: endFitSelected ? oldExtreme.endDay : null
        }
    } else {
        const startInSeconds = oldExtreme.startDay?.setHours(0,0,0,0);
        const startFitSelected = oldExtreme.startDay &&  selectedInSeconds>=startInSeconds;
        return {
            startDay: startFitSelected ? oldExtreme.startDay : null,
            endDay: selectedDate
        }
    }
}