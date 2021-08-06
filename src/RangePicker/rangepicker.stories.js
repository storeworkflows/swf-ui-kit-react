import React, { useState } from 'react';

import { default as RangePicker } from './RangePicker';
import { DatePicker, Dropdown, Modal } from '../index';

export default {
  title: 'swf-ui-kit/Input/RangePicker',
  component: RangePicker,
  args: {
    // min: new Date("2021-05-11"),
    value: {
      start: { value: '' },
      end: { value: '' },
    },
  },
};

const Template = (args) => <RangePicker {...args} />;
export const Standard = Template.bind({});

export const Control = (args) => {
  const controller = (props) => {
    const [range, setRange] = useState({
      start: { value: '' },
      end: { value: '' },
    });

    return (
      <RangePicker
        label="Duration"
        min={new Date()}
        value={range}
        manageValue
        onValueChange={({ updatedValue }) => {
          const { start, end } = updatedValue;
          setRange({ start: { value: start ?? '' }, end: { value: end ?? '' } });
        }}
        onValueSet={({ start, end }) => {
          setRange({ start: { value: start ?? '' }, end: { value: end ?? '' } });
        }}
      />
    );
  };
  return controller();
};
