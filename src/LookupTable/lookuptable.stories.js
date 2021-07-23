import React from 'react';

import { default as LookupTable } from './LookupTable';
import withMock from "storybook-addon-mock";

export default {
    title: 'swf-ui-kit/Input/LookupTable',
    component: LookupTable
};


const Template = (args) => <LookupTable {...args} />;

const mockData = [
    { sys_id: 1, name: "1" },
    { sys_id: 2, name: "2" },
    { sys_id: 4, name: "3" },
]

export const MockRequest = (args) => <LookupTable {...args} />;

export const ExampleData = (args) => <LookupTable {...args} />;
ExampleData.args = {
    label: "Creator",
    name: "opened_by",
    table: "x_aaro2_teamwork_container",
    value: "d5640bdadbfb2300f0ee760a689619e6",
}




