import React from 'react';

import { default as LabelValue } from './LabelValue';

export default {
    title: 'swf-ui-kit/Label&Value/LabelValue',
    component: LabelValue,
};


const Template = (args) => <LabelValue {...args}/>;

export const Standard = Template.bind({});
Standard.args = {
    label: "Label",
    value: "value"
}

export const Inline = Template.bind({});
Inline.args = {
    ...Standard.args,
    inline: true
}

export const UnimportantLabel = Template.bind({});
UnimportantLabel.args = {
    ...Standard.args,
    importantLabel: false
}