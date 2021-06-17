import React from 'react';

import { default as Form } from './Form';
import {TABLE_CATEGORIES} from "../../.storybook/tableCategories";
import { FORM_RECORD_SAMPLE } from "./const";

export default {
    title: 'swf-ui-kit/DataVisualisation/Form',
    component: Form,
    argTypes: {
        formRecord: TABLE_CATEGORIES.VALUE,
        isFullScreen: TABLE_CATEGORIES.VALUE,

        onRelatedListRowClick: TABLE_CATEGORIES.ACTION,
        onReferenceFieldClick: TABLE_CATEGORIES.ACTION
    }
};


const Template = (args) => <Form {...args}/>;

export const Default = Template.bind({});

Default.args = {
    formRecord: FORM_RECORD_SAMPLE,
    isFullScreen: false,
    onRelatedListRowClick: () => {},
    onReferenceFieldClick: () => {}
}