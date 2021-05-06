import React from 'react';

import { default as Input } from './Input';

export default {
    title: 'swf-ui-kit/Input/Input',
    component: Input,

};


const Template = (args) => <Input {...args} />;

export const Standard = Template.bind({});
Standard.args = {
    label: "Label"
}

export const ExpandedInput = (args) => <Input {...args}>
    <Input.Start>
        Start
    </Input.Start>
    <Input.End>
        End
    </Input.End>
</Input>



