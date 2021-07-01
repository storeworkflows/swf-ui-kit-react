import React from 'react';

import { default as Progress} from './Progress';
import {noop} from "../utils";

export default {
    title: 'swf-ui-kit/DataVisualisation/Progress',
    component: Progress,
    args: {
        value: 50
    }
};


const Template = (args) => <Progress {...args}/>;

export const Default = Template.bind({});

// export const Test = (args) => <div>
//     <Progress value={0} />
//     <Progress value={30}/>
//     <Progress value={100} status={"done"}/>
//     <Progress value={55} status={"exception"}/>
//     <Progress value={100} status={"done"} showStatus={false}/>
//     <Progress value={78} showInfo={false}/>
// </div>

