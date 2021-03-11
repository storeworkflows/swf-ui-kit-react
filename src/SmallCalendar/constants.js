import moment from "moment";

export const MAX_WEEKS = 6;

export const DAYS_OF_WEEK = Array(7)
    .fill(0)
    .map((_, index) => moment().clone().isoWeekday(index).format('dd').slice(0, 2));