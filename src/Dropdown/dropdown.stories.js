import React from 'react';

import { default as Dropdown } from './Dropdown';

export default {
    title: 'swf-ui-kit/Input/Dropdown',
    component: Dropdown,
    argTypes: {
        select: {
            defaultValue: 'single',
            description: `"none" | "single" | "multi"`,
            table: {
                category: "Category",
                type: { summary: 'string' },
                defaultValue: { summary: '"single"' },
            },
            control: {
                type: "select",
                options: ["none", "single", "multi"]
            }
        }
    }
};


const Template = (args) => <Dropdown {...args}/>;

export const Standard = Template.bind({});
Standard.args = {
    items: [
        {
            id: 1,
            label: "first",
            disabled: true,
            number: 7,
            icon: "alarm"
        },
        {
            id: 2,
            label: "second",
            number: 100,
            icon: "alarm"
        },
        {
            id: 3,
            label: "third",
        },
        {
            id: 4,
            label: "fourth",
            subLabel: "sublabel"
        }
    ]
}