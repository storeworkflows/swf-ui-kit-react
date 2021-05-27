import React from 'react';


import { default as CalendarDay} from './InnerComponents/CalendarDay';
import {LabelValue} from "../index";

export default {
    title: 'swf-ui-kit/DataVisualisation/CalendarDay',
    component: CalendarDay,
};

export const Try = (args) => <div style={{width: `2rem`, height: `1rem`}}>
    <CalendarDay {...args}/>
</div>

export const Standard  = (args) => <div>
    <LabelValue inline={true} label={"default"}>
        <LabelValue.Value>
            <CalendarDay/>
        </LabelValue.Value>
    </LabelValue>
    <LabelValue inline={true} label={"not active"}>
        <LabelValue.Value>
            <CalendarDay isActive={false}/>
        </LabelValue.Value>
    </LabelValue>
    <LabelValue inline={true} label={"selected"}>
        <LabelValue.Value>
            <CalendarDay selected={true}/>
        </LabelValue.Value>
    </LabelValue>
    <LabelValue inline={true} label={"selected-period"}>
        <LabelValue.Value>
            <CalendarDay selected={true}/>
        </LabelValue.Value>
    </LabelValue>
</div>;



