import React from 'react';

import { default as Button } from './Button';
import {TABLE_CATEGORIES} from "../../.storybook/tableCategories";
import {withDesign} from "storybook-addon-designs";


export default {
    title: 'swf-ui-kit/Controls/Button',
    component: Button,
    argTypes: {
        label: TABLE_CATEGORIES.VALUE,
        icon: TABLE_CATEGORIES.VALUE,
        disabled: TABLE_CATEGORIES.VALUE,
        innerRef: TABLE_CATEGORIES.VALUE,

        variant: TABLE_CATEGORIES.STYLE,
        size: TABLE_CATEGORIES.STYLE,
        tooltipContent: TABLE_CATEGORIES.STYLE,
        className: TABLE_CATEGORIES.STYLE,
        customStyle: TABLE_CATEGORIES.STYLE,

        onClick: TABLE_CATEGORIES.ACTION
    },
    decorators: [withDesign],
    parameters: {
        controls: {
            sort: 'requiredFirst'
        },
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/UNUiwIzQiaJzr42cHV3rki/Storybook?node-id=0%3A1'
        }
    }
};



const Template = (args) => <Button {...args} />;

export const LabelButton = Template.bind({});
LabelButton.args = {
    label: 'Button',
};

export const IconButton = Template.bind({});
IconButton.args = {
    icon: 'alarm',
    variant: "primary",
    size: "sm"
};


export const LabelIconButton = Template.bind({});
LabelIconButton.args = {
    label: "Label",
    icon: 'alarm',
    variant: "tertiary",
    size: "lg"
};
