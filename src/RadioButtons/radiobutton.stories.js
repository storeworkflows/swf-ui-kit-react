import React from 'react';

import { default as RadioButtons } from './RadioButtons';

export default {
  title: 'swf-ui-kit/Input/RadioButtons',
  component: RadioButtons,
};

const Template = (args) => <RadioButtons {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  label: 'Label',
  options: [
    {
      id: '1',
      label: 'label 1',
      value: 'value 1: readonly',
      readonly: true,
    },
    {
      id: '2',
      label: 'label 2',
      value: 'value 2',
    },
    {
      id: '3',
      label: 'label 3',
      value: 'value 3: disabled',
      disabled: true,
    },
    {
      id: '4',
      label: 'label 4',
      value: 'value 4',
    },

  ],
};
