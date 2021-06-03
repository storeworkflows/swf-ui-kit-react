import React from 'react';


import { default as SmallCalendarElement} from './SmallCalendar';
import { default as CalendarMonth} from "./InnerComponents/CalendarMonth";
import RangeCalendar from "./Renge Calendar";

export default {
    title: 'swf-ui-kit/DataVisualisation/SmallCalendar',
    component: SmallCalendarElement,
};


const Template  = (args) => <SmallCalendarElement {...args}/>;

export const Standard  = Template.bind({});

export const Range  = (args) => <div>
    <RangeCalendar
        endDay={new Date("2021-06-16")}
        startDay={new Date()}
        isFirstSelecting={true}
    />
</div>


export const Month = (args) => <div>
    <CalendarMonth
       // selectedDate = { new Date()}
        range= {{
            startDay: new Date("2021-05-16"),
            endDay: new Date(),
            isFirstSelecting: false
        }}
    />
</div>


