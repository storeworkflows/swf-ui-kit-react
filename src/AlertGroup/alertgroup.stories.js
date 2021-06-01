import React from 'react';

import { default as AlertGroup } from './AlertGroup';

export default {
    title: 'swf-ui-kit/Messages/AlertGroup',
    component: AlertGroup,
};

const Template = (args) => <AlertGroup {...args} />;

export const Standard = Template.bind({});
Standard.args = {
    alerts: [
        {
            content: "Small content",
            action: {type: "open"},
            header: "Header",
            textLinkProps: {
                label: "link",
                href: "href",
                openWindows: true
            },
            icon: "alarm",
            color: "green",
           // delay: 2000
        },
        {
            content: "Small content",
            action: {type: "open"},
            header: "Header",
            textLinkProps: {
                label: "link",
                href: "href",
                openWindows: true
            },
            icon: "alarm",
            color: "green",
           // delay: 2000
        }
    ],
    //delay: 2000
}


