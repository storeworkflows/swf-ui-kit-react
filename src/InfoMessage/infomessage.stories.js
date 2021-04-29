import React from 'react';

import { default as InfoMessage } from './InfoMessage';

export default {
    title: 'swf-ui-kit/Messages/InfoMessage',
    component: InfoMessage,
};


const Template = (args) => <InfoMessage {...args}/>;

export const Standard = Template.bind({});
Standard.args = {
    status: "red",
    content: "Message content"
}

export const WithIcon = Template.bind({});
WithIcon.args = {
    status: "green",
    content: "Message content",
    icon: "alarm"
}
