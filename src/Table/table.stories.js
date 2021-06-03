import React from "react";
import Table from "./index";

const headers = [
    {label: "Name", key: "name"},
    {label: "Start", key: "start"},
    {label: "End", key: "end"},
    {label: "Duration", key: "duration"},
    {label: "Type", key: "type"},
    {label: "Status", key: "status"}
];

const renderHeaders = [
    {label: "Name", key: "name"},
    {label: "Start", key: "start"},
    {label: "End", key: "end"},
    {label: "Duration", key: "duration"},
    {label: "Type", key: "type"},
    {label: "Status", key: "status", render: ({value}) => {
        if (value === "Requested") return <div style={{background: "yellow"}}>{value}</div>
        if (value === "Approved") return <div style={{background: "green", color: "#fff"}}>{value}</div>
        if (value === "Rejected") return <div style={{background: "red", color: "#fff"}}>{value}</div>
        return null
    }}
]

const dataSource = Array(8).fill(null).map((_, index) => ({
    name: "Test",
    start: "01-01-1970",
    end: "01-01-1970",
    duration: 1,
    type: "Test",
    status: index % 3 === 0 ? "Approved" : index % 4 ? "Rejected" :"Requested"
}))

export default {
    title: 'swf-ui-kit/DataVisualisation/Table',
    component: Table
};

const Template = (args) => <Table {...args}/>;

export const Standard = Template.bind({});

Standard.args = {
    headers,
    dataSource
}

export const WithRender = Template.bind({});

WithRender.args = {
    headers: renderHeaders,
    dataSource
}
