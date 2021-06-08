import React from 'react';


import { default as RangeCalendarEl} from "./Renge Calendar";

export default {
    title: 'swf-ui-kit/DataVisualisation/RangeCalendar',
    component: RangeCalendarEl,
};


export const Range  = (args) => <RangeCalendarEl {...args}
        endDay={new Date("2021-07-10").setHours(0,0,0,0)}
        //startDay={new Date().setHours(0,0,0,0)}
        isFirstSelecting={false}
/>




