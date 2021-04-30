import React from 'react';
import {default as AccordionItem} from './AccordionItem'
import {default as Accordion} from '../Accordion/Accordion'

export default {
    title: 'swf-ui-kit/Controls/Accordion/Item',
    component: AccordionItem,
    argTypes: {
        isLastItem:{
            table:{
                disable:true
            }
        },
        isFirstItem:{
            table:{
                disable:true
            }
        }
    }
};


//const Template =

export const Default = (args) => <AccordionItem {...args}>
    <div>AccordionItem content</div>
</AccordionItem>;
Default.args = {
    label: "example label",

}

export const WithHeader = (args) => <AccordionItem {...args}>
    <Accordion.Header>
        <div>Example of header</div>
    </Accordion.Header>
    <div>AccordionItem content</div>
</AccordionItem>;
