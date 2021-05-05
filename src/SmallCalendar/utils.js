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

export const isNowDate = (openedDate, isActive) => {
    let selectedDate = moment();
    return isSelected(openedDate, selectedDate, selectedDate.getDate(), isActive)
}