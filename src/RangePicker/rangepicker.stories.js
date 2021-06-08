import React from 'react';

import { default as RangePicker } from './RangePicker';
import {DatePicker, Dropdown, Modal} from "../index";

export default {
    title: 'swf-ui-kit/Input/RangePicker',
    component: RangePicker,
    args: {
       // min: new Date("2021-05-11"),
        value: {
            start: { value: "" },
            end: { value: ""}
        }
    }
};


const Template = (args) => <RangePicker {...args}/>;
export const Standard = Template.bind({});

// export const Check = (args) => <div>
//     <Modal>
//         <Modal.Body>
//             <RangePicker
//                 value={{
//                 start: { value: "" },
//                 end: { value: ""}
//             }}
//             />
//
//         </Modal.Body>
//
//     </Modal>
// </div>

