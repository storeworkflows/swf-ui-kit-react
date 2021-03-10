import moment from "moment";

export const CALENDAR_VIEW_MOBILE = {
    CHOOSE_DAY: "CALENDAR_VIEW_MOBILE#CHOOSE_DAY",
    DATE_BUTTON: {
        CLICKED: "CALENDAR_VIEW_MOBILE#DATE_BUTTON#CLICKED",
        CURRENT: "CALENDAR_VIEW_MOBILE#DATE_BUTTON#CURRENT"
    },
    SEND_DATE_FOR_TASKS: "CALENDAR_VIEW_MOBILE#SEND_DATE_FOR_TASKS"
}

export const MAX_WEEKS = 6;

export const DAYS_OF_WEEK = Array(7)
    .fill(0)
    .map((_, index) => moment().clone().isoWeekday(index).format('dd').slice(0, 1));