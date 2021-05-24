import React from 'react';

import { default as RangePicker } from './RangePicker';

export default {
    title: 'swf-ui-kit/Input/RangePicker',
    component: RangePicker,
    args: {
        min: new Date("2021-05-11")
    }
};


const Template = (args) => <RangePicker {...args}/>;

export const Standard = Template.bind({});
