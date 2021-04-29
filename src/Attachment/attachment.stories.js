import React from 'react';

import { default as Attachment } from './Attachment';

export default {
    title: 'swf-ui-kit/Input/Attachment',
    component: Attachment
};


const Template = (args) => <Attachment {...args} />;

export const Standard = Template.bind({});
Standard.args = {
    label: "Attachment",
    message: [{content: "example message", status: "green"}]
};

export const ExampleFile = Template.bind({});
ExampleFile.args = {
    label: "Attachment",
    value: {
            name: "example-file.docx",
            size: 3000,
            type: "application/msword"
    }
};



