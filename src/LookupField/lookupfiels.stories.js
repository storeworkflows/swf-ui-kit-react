import React from 'react';

import { default as LookupField} from './LookupField';

export default {
    title: 'swf-ui-kit/Input/LookupField',
    component: LookupField,
    parameters: {
        fetch: {
            json: {
                result: "Hello"
            }
        }
    }
};


const Template = (args) => <LookupField {...args}/>;

export const Default = Template.bind({});
Default.args = {
    label: "LookupField"
}


