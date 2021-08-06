import React from 'react';

import { default as DatePicker } from './DatePicker';

export default {
  title: 'swf-ui-kit/Input/DatePicker',
  component: DatePicker,
  args: {
    min: new Date('2021-05-11'),
  },
};

const Template = (args) => <DatePicker {...args} />;

export const Standard = Template.bind({});
