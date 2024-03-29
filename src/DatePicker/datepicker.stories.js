import React from 'react';

import { default as DatePicker } from './DatePicker';

export default {
  title: 'swf-ui-kit/Input/DatePicker',
  component: DatePicker,
  args: {
    min: new Date('2021-12-05'),
  },
};

const Template = (args) => <DatePicker {...args} />;

export const Standard = Template.bind({});
