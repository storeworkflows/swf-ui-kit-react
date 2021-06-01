import React from 'react';

import { default as RangePicker } from './RangePicker';

export default {
    title: 'swf-ui-kit/Input/RangePicker',
    component: RangePicker,
    args: {
        min: new Date("2021-05-11"),
        value: {
            start: {
                value: "2021-05-22"
            },
            end: {
                value: new Date()
            }
        }
    }
};


const Template = (args) => <RangePicker {...args}/>;

export const Standard = Template.bind({});
