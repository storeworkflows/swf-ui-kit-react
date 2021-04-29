import React from 'react';

import { default as LookupField} from './LookupField';

export default {
    title: 'swf-ui-kit/Input/LookupField',
    component: LookupField,
};


const Template = (args) => <LookupField {...args}/>;

export const Standard = Template.bind({});
Standard.args = {
    label: "LookupField"
}


