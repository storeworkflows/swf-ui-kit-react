import React from 'react';

import { default as Card } from './Card';

export default {
    title: 'swf-ui-kit/Containers/Card',
    component: Card,
};


const Template = (args) => <Card {...args}>
    <div>Content</div>
</Card>;

export const Standard = Template.bind({});
