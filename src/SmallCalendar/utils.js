import moment from "moment";

export const isSelected = (openedDate, selectedDate, dayNumber, isActive) => {
    if(selectedDate) {
        let selectedMonth = selectedDate.getMonth();
        let selectedYear = selectedDate.getFullYear();
        let openedMonth = openedDate.getMonth();
        let openedYear = openedDate.getFullYear();

        let nextMonth = (openedMonth + 1) % 12;
        let prevMonth = (openedMonth - 1) % 12;
        let nextYear = (nextMonth === 0) ? (openedYear + 1) : openedYear;
        let prevYear = (prevMonth === 11) ? (openedYear - 1) : openedYear;

        let isSelectedDateInOpenedMonth = isActive && selectedMonth === openedMonth && selectedYear === openedYear;
        let isSelectedDateInNextMonth = !isActive && selectedMonth === nextMonth && selectedYear === nextYear;
        let isSelectedDateInPrevMonth = !isActive && selectedMonth === prevMonth && selectedYear === prevYear;

        return selectedDate.getDate() === dayNumber &&
            (isSelectedDateInOpenedMonth
                || isSelectedDateInNextMonth
                || isSelectedDateInPrevMonth);
    }

    return false;
}

export const isNowDate = (openedDate, isActive, dayNumber) => {
    let selectedDate = new Date();
    return isSelected(openedDate, selectedDate, dayNumber, isActive)
}

const defineExtreme = (start, end, curr) => {
    switch (true) {
        case start === curr :
            return "first"
        case end === curr :
            return "last"
        default:
            return "none"
    }

}

export const defineProps = (selectedDates, range, current, hovered) => {
    let selected = selectedDates.some(el =>
        el && _.isEqual(new Date(el).setHours(0,0,0,0), current)
    );

    const startDate = range && selectedDates[0]?.setHours(0,0,0,0) ;
    const endDate = range && selectedDates[1]?.setHours(0,0,0,0) ;

    let inSelectedPeriod = startDate && endDate && current>startDate && current<endDate;

    let isNowDate = _.isEqual(current, new Date().setHours(0,0,0,0) )

    let isHovered = false;
    let extreme =  "none";
    if(range && hovered) {

        const hoveredForFirst = range.isFirstSelecting && endDate && current < endDate && current >= hovered;
        const hoveredForSecond = !range.isFirstSelecting && startDate && current > startDate && current <= hovered;

        extreme = range.isFirstSelecting
            ? defineExtreme(hovered, endDate, current)
            : defineExtreme(startDate, hovered, current);

        isHovered = hoveredForSecond || hoveredForFirst
    }
    return {selected, inSelectedPeriod, isNowDate, isHovered, extreme}
}
