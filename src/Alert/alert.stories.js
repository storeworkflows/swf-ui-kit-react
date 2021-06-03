import React from 'react';

import { default as Alert } from './Alert';
import {TABLE_CATEGORIES} from "../../.storybook/tableCategories";
import propTypes from "prop-types";

export default {
    title: 'swf-ui-kit/Messages/Alert',
    component: Alert,
    argTypes: {
        content: TABLE_CATEGORIES.VALUE,
        header: TABLE_CATEGORIES.VALUE,
        icon: TABLE_CATEGORIES.VALUE,
        textLinkProps: TABLE_CATEGORIES.VALUE,
        action: TABLE_CATEGORIES.VALUE,

        color: {
            ...TABLE_CATEGORIES.STYLE,
            options: ["yellow" , "red" , "green" , "blue" , "grey" , "grey-blue"],
            control: {type: 'select'}
        },

        delay: TABLE_CATEGORIES.STATE,
        visible: TABLE_CATEGORIES.STATE,
        expanded: TABLE_CATEGORIES.STATE,

        manageExpanded: TABLE_CATEGORIES.MANAGING,
        manageVisibility: TABLE_CATEGORIES.MANAGING,
        manageButtonClick: TABLE_CATEGORIES.MANAGING,

        onExpandAction: TABLE_CATEGORIES.ACTION,
        onTextLinkClicked: TABLE_CATEGORIES.ACTION,
        onButtonClick: TABLE_CATEGORIES.ACTION,
        onCloseAction: TABLE_CATEGORIES.ACTION
    }
};

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const Template = (args) => <Alert {...args} />;

export const Dismiss = Template.bind({});
Dismiss.args = {
    content: lorem
};

export const Acknowledge = Template.bind({});
Acknowledge.args = {
    ...Dismiss.args,
    action: { type: "acknowledge" },
    header: "Header",
    color: "red",
    verticalPositions: "center"
};

export const Open = Template.bind({});
Open.args = {
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
    verticalPositions: "bottom",
    delay: 2000
};



