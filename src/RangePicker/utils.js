import {getErrorMessages} from "../DatePicker/utils";

export const isRangeCorrect = (selectedDates) => {
    const {start, end} = selectedDates;
    if(!start || !end)
        return true;

    const startInSeconds = new Date(start).setHours(0,0,0,0);
    const endInSeconds = new Date(end).setHours(0,0,0,0);

    return startInSeconds<=endInSeconds;
}

export const getErrors = (selectedDates, format, min, max) => {
    const {start, end} = selectedDates;

    const startErrors = getErrorMessages(start, format, min, max);
    const endErrors = getErrorMessages(end, format, min, max);
    let errors = startErrors.concat(endErrors);

    if(!isRangeCorrect(selectedDates)){
        errors.push({
            content: `Start date should be smaller than end date`,
            icon: "exclamation-circle"
        })
    }
    return errors;
}
