import React from 'react';

import { default as RequiredLabel} from './RequiredLabel';

export default {
    title: 'swf-ui-kit/Label&Value/RequiredLabel',
    component: RequiredLabel,
    args: {
        label: "Label",
        required: true
    }
};


const Template = (args)  => <RequiredLabel {...args}/>;

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
};

export const Required = Template.bind({});
Required.args = {
    ...Default.args,
    required: true
};

export const Invalid = Template.bind({});
Invalid.args = {
    ...Required.args,
    invalid: true
};



