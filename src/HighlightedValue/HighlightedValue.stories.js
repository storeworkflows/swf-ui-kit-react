import React from 'react';

import { default as HighlightedValue } from './HighlightedValue';

export default {
    title: 'swf-ui-kit/Label&Value/HighlightedValue',
    component: HighlightedValue
};

const Template = (args) => <HighlightedValue {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Label',
};

export const Secondary = Template.bind({});
Secondary.args = {
    ...Primary.args,
    showIcon: true,
    variant: "secondary"
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    ...Primary.args,
    showIcon: true,
    icon: "alarm",
    variant: "tertiary"
};
