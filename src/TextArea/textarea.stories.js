import React from 'react';

import { default as TextArea } from './TextArea';

export default {
  title: 'swf-ui-kit/Input/TextArea',
  component: TextArea,
};

const Template = (args) => <TextArea {...args} />;

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const Standard = Template.bind({});
Standard.args = {
  // value: lorem
};
