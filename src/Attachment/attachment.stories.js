import React from 'react';

import { default as Attachment } from './Attachment';
import withMock from 'storybook-addon-mock';
import fetchMock from 'fetch-mock';
import propTypes from "prop-types";
// import FetchStory from "../../__mocks__/FetchStory";

export default {
    title: 'swf-ui-kit/Input/Attachment',
    component: Attachment,
    args: {
        tableSysId: "test",
        tableName: "test",
    },
    parameters: {
        fetch: {
            json: {
                JavaScript: 3390991,
                'C++': 44974,
                TypeScript: 15530,
                CoffeeScript: 12253,
                Python: 9383,
                C: 5341,
                Shell: 5115,
                HTML: 3420,
                CSS: 3171,
                Makefile: 189,
            }

        }
    }
};

const payload = {
    JavaScript: 3390991,
    'C++': 44974,
    TypeScript: 15530,
    CoffeeScript: 12253,
    Python: 9383,
    C: 5341,
    Shell: 5115,
    HTML: 3420,
    CSS: 3171,
    Makefile: 189,
};


const Template = (args) => <Attachment {...args} />


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



