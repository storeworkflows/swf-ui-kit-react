import moment from 'moment';
import * as React from 'react';
import propTypes from "prop-types";

import { useState} from "react";
import CalendarMonth from "./InnerComponents/CalendarMonth";
import ArrowButton from "./InnerComponents/ArrowButton";

const SmallCalendar = React.forwardRef((props, ref) => {

    const {openedDate, onSelected} = props;

    const date = (openedDate) ? new Date(openedDate) : null;
    const [selectedDate, setSelectedDate] = useState(date);
    const [openedDateValue, setOpenedDateValue] = useState((date) ? date : new Date());

    const changeMonth = (selectedDate, isNext, e) =>{
        e?.stopPropagation();

        let additionValue = isNext ? 1 : -1;
        let changedTo = moment(openedDateValue).add(additionValue, "month");
        if(selectedDate)
            setSelectedDate(new Date(selectedDate))

        setOpenedDateValue(changedTo.toDate())
    }

    return (
        <>
            <CalendarMonth
                openedDate={openedDateValue}
                selectedDate={selectedDate}
                onSelected={onSelected}
                onMonthChange={changeMonth}
            >

                <CalendarMonth.HeaderStart>
                    <ArrowButton onClick={changeMonth}/>
                </CalendarMonth.HeaderStart>

                <CalendarMonth.HeaderEnd>
                    <ArrowButton isNext={true} onClick={changeMonth}/>
                </CalendarMonth.HeaderEnd>

            </CalendarMonth>
        </>
    )

});

SmallCalendar.defaultProps = {
    openedDate: null,

}

SmallCalendar.propTypes = {
    openedDate: propTypes.any,
    onSelected: propTypes.func,
}

export default SmallCalendar;