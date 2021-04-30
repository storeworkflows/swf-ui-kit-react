import React from 'react';

import { default as Stepper} from './Stepper';
import {TABLE_CATEGORIES} from "../../.storybook/tableCategories";

export default {
    title: 'swf-ui-kit/Controls/Stepper',
    component: Stepper,
    argTypes: {
        steps: TABLE_CATEGORIES.VALUE,
        selectedItem: TABLE_CATEGORIES.VALUE,

        palette: TABLE_CATEGORIES.STYLE,
        iconSize: TABLE_CATEGORIES.STYLE,
        hideLabels: TABLE_CATEGORIES.STYLE,
        disableScroll: TABLE_CATEGORIES.STYLE,
        vertical: TABLE_CATEGORIES.STYLE,
        completedCounter: TABLE_CATEGORIES.STYLE,

        onStepClick: TABLE_CATEGORIES.ACTION
    }
};


const Template = (args) => <Stepper {...args}/>;

export const Default = Template.bind({});
Default.args = {
    steps: [
        {
            id: "1",
            icon: "alarm",
            label: "Label 1"
        },
        {
            id: "2",
            icon: "bell",
            label: "Label 2"
        },
        {
            id: "3",
            icon: "bicycle",
            label: "Label 3"
        }
    ]
}

