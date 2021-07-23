import React from 'react';
import { default as LookupTable } from './LookupTable';

export default {
    title: 'swf-ui-kit/Input/LookupTable',
    component: LookupTable
};

export const MockRequest = (args) => <LookupTable {...args} />;

export const ExampleData = (args) => <LookupTable {...args} />;
ExampleData.args = {
    name: "opened_by",
    table: "x_aaro2_teamwork_container",
}




