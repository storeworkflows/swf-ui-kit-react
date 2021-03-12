import moment from "moment";
import { MAX_WEEKS } from "../constants";

export const CALENDAR_UTILS = {
    generateMonth: (startCalendar, currentMonth, currentDate, chosenDay, week, days) => {
        let prevDate = startCalendar.clone().subtract(1, "day");
        let month = [];
        while (month.length < 42) {
            let nextDate = prevDate.add(1, "day").clone();

            month.push({
                year: nextDate.get("year"),
                month: nextDate.get("month"),
                week: nextDate.isoWeek(),
                day: nextDate.get("date"),
                current: currentDate.isSame(nextDate),
                chosenMonth: startCalendar.endOf("week").format("MMMM"),
                chosenYear: startCalendar.endOf("week").format("YYYY"),
                inThisMonth: nextDate.isSame(currentMonth, "month"),
                weekday: nextDate.weekday() + 1,
                startOfWeek: nextDate.weekday() === 0,
                endOfWeek: nextDate.weekday() === 6,
                isChosen: moment(nextDate).isSame(chosenDay),
                isTask: false
            });
            if (!week.includes(nextDate.isoWeek())) {
                week.push(nextDate.isoWeek());
            }
            days.push({ full: nextDate.format("dddd"), short: nextDate.format("ddd") })
        }
        return month;
    },
    generateCalendar:  ({ chosenMonth, direction, chosenDay, dispatch }) => {
        const currentDate = moment().startOf("day");
        let calendar = [];
        let week = [];
        let days = [];
        let currentMnth = chosenMonth.clone();
        const startCalendar = currentMnth.clone();
        calendar = {
            classFlags: {
                nextIsCalled: direction === "next",
                prevIsCalled: direction === "prev",
            },
            monthList: {
                prevMonth: this.generateMonth(startCalendar.clone().subtract(1, "month").startOf("month").startOf("week"), currentMnth.clone().subtract(1, "month"), currentDate, choosenDay, week, days),
                currentMonth: this.generateMonth(startCalendar.clone().startOf("month").startOf("week"), currentMnth, currentDate, choosenDay, week, days),
                nextMonth: this.generateMonth(startCalendar.clone().add(1, "month").startOf("month").startOf("week"), currentMnth.clone().add(1, "month"), currentDate, choosenDay, week, days),
            },
        }
        days.length = 7;
        week = week.splice(1);
        if (week.length > MAX_WEEKS) {
            week.splice(0, week.length - MAX_WEEKS);
        }
        return calendar;
    }
}

export default CALENDAR_UTILS;