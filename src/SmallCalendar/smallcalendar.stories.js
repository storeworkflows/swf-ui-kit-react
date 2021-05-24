import React from 'react';


import { default as SmallCalendarElement} from './SmallCalendar';
import { default as CalendarMonth} from "./CalendarMonth";

export default {
    title: 'swf-ui-kit/DataVisualisation/SmallCalendar',
    component: SmallCalendarElement,
};


const Template  = (args) => <SmallCalendarElement {...args}/>;

export const Standard  = Template.bind({});

export const Range  = Template.bind({});
Range.args = {
    isRange: true
}

export const Month = (args) => <div>
    <CalendarMonth
       // selectedDate = { new Date()}
        range= {{
            startDay: new Date("2021-05-16"),
            endDay: new Date(),
            isFirstSelecting: true
        }}
    />
</div>


