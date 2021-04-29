import React from 'react';

import { default as Avatar } from './Avatar';

export default {
    title: 'swf-ui-kit/DataVisualisation/Avatar',
    component: Avatar
};


const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    member: {
        name: "Name Surname",
        title: "Manager"
    }
};




