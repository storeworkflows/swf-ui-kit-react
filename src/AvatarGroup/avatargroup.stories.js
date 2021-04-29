import React from 'react';

import { default as AvatarGroup } from './AvatarGroup';
import * as Avatar from '../Avatar/avatar.stories';

export default {
    title: 'swf-ui-kit/DataVisualisation/AvatarGroup',
    component: AvatarGroup,
};


const Template = (args) => <AvatarGroup {...args}/>;
export const Default = Template.bind({});

Default.args = {
    members: [
        { ...Avatar.Default.args.member, name: 'name 1', title: 'title 1' },
        { ...Avatar.Default.args.member, name: 'name 2', title: 'title 2' },
        { ...Avatar.Default.args.member, name: 'name 3', title: 'title 3' },
        { ...Avatar.Default.args.member, name: 'name 4', title: 'title 4' },
    ],
};

