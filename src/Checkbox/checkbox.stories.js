import React from 'react';

import { default as Checkbox } from './Checkbox';

export default {
    title: 'swf-ui-kit/Input/Checkbox',
    component: Checkbox,
};


const Template = (args) => <div style={{[`z-index`]: 1}}><Checkbox {...args}/></div>;

export const Standard = Template.bind({});
Standard.args = {
    label: "Label",
    value: "value"
}
