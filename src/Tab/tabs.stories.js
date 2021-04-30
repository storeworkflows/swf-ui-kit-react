import React from 'react';

import { default as Tab} from './Tab';
import {ITEMS} from "./mock";
import propTypes from "prop-types";
import {TABLE_CATEGORIES} from "../../.storybook/tableCategories";

export default {
    title: 'swf-ui-kit/Controls/Tab',
    component: Tab,
    argTypes: {
        items: TABLE_CATEGORIES.VALUE,
        fixedWidth: TABLE_CATEGORIES.STYLE,
        hideLabel: TABLE_CATEGORIES.STYLE,
        manageSelectedItem: TABLE_CATEGORIES.MANAGING,
        maxWidth: TABLE_CATEGORIES.STYLE,
        selectedItem: TABLE_CATEGORIES.VALUE,
        tabsAlignment:TABLE_CATEGORIES.STYLE,
        onClick: TABLE_CATEGORIES.ACTION
    },
    args: {
        items: ITEMS
    }
};


const Template = (args) => <Tab {...args}/>;

export const Standard = Template.bind({});

