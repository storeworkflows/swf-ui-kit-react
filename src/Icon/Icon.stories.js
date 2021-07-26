import React from 'react';

import { default as Icon } from './Icon';

export default {
    title: 'swf-ui-kit/DataVisualisation/Icon',
    component: Icon
};

const Template = (args) => <Icon {...args} />;

export const Standard = Template.bind({});
Standard.args = {
    icon: 'lightning-charge-fill',
};


