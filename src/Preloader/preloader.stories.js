import React from 'react';

import { default as Preloader } from './Preloader';

export default {
    title: 'swf-ui-kit/Containers/Preloader',
    component: Preloader,
    argTypes: {
        background: {
            control: {
                type: 'boolean'
            }
        }
    }
};


const Template = (args) => <Preloader {...args} />;

export const Default = Template.bind({});
Default.args = {
    count: 1,
    items: [
            {
                width: "100%", height: "0.8rem", repeat: 3, styles: [
                    {width: "3.75rem", height: "1.2rem"},
                    {width: "7.5rem", height: "1.2rem", marginLeft: "auto"},
                    {width: "1.2rem", height: "1.2rem", minWidth: "1.2rem", borderRadius: "0.3rem"}
                ]
            }, {
                width: "70%", height: "1.7rem", repeat: 1
            }, {
                width: "90%", height: "0.8rem", repeat: 2, styles: [
                    {width: "1.1rem", height: "1.1rem", borderRadius: "50%"},
                    {width: "3rem", margin: "6px 0 0 0"}
                ]
            }, {
                width: "4rem", height: "0.8rem", repeat: 2, styles: [
                    {margin: "2px"},
                    {margin: "2px"},
                ]
            }, {
                width: "100%", height: "2rem", repeat: 2, styles: [
                    {width: "2rem", height: "2rem", borderRadius: "50%"},
                    {width: "7rem", height: "1.2rem", marginTop: "10px"},
                ]
            },
        ],
    height: "11rem",
    width: "100%",
    flexDirectionGeneral: "row",
    blur: "3rem"
};




