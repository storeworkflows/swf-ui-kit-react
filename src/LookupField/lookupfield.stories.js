 import React from 'react';

import { default as LookupField} from './LookupField';
import withMock from "storybook-addon-mock";

export default {
    title: 'swf-ui-kit/Input/LookupField',
    component: LookupField,

};


const Template = (args) => <LookupField {...args}/>;

 const mockData = [
     {
         sysId: -1,
         referenceData: [{ value: "Test value" }]
     },
     {
         sysId: -2,
         referenceData: [{ value: "Test value 2"}]
     },
     {
         sysId: -3,
         referenceData: [{ value: "Test value 3" }]
     }
 ]

export const MockRequest = Template.bind({});
 MockRequest.decorators = [withMock],
 MockRequest.parameters = {
    mockData: [{
            url: '/api/now/graphql',
            method: 'POST',
            status: 200,
            response: JSON.stringify([
                {data: {
                        'GlideLayout_Query': {
                            referenceDataRetriever: {
                                referenceDataList: mockData,
                                referenceRecentDataList: [],
                                totalCount: mockData.length
                            }
                        }
                    }
                }
            ]),
        }
    ],
}


 export const ExampleData = Template.bind({});
 ExampleData.args = {
 //label: "LookupField",
  content: "d5640bdadbfb2300f0ee760a689619e6",
 // declarativeUiActions: Proxy {0: Proxy, 1: Proxy, Symbol(mobx administration): e},
  displayValue: "Viktor Bardakov - Admin",
  label: "Creator",
  name: "opened_by",
  table: "x_aaro2_teamwork_container",
  tableRecordSysId: "e40fcb88db5be8505884eb184b96191b",
  type: "reference",
  value: "d5640bdadbfb2300f0ee760a689619e6",
 }




