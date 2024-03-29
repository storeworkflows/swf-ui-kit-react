import React, { useState } from 'react';

import { default as Dropdown } from './Dropdown';
import { Button } from '../index';

export default {
  title: 'swf-ui-kit/Input/Dropdown',
  component: Dropdown,
  argTypes: {
    select: {
      defaultValue: 'single',
      description: '"none" | "single" | "multi"',
      table: {
        category: 'Category',
        type: { summary: 'string' },
        defaultValue: { summary: '"single"' },
      },
      control: {
        type: 'select',
        options: ['none', 'single', 'multi'],
      },
    },
  },
};

const dropdownItems = [
  {
    id: 1,
    label: 'first',
    disabled: true,
    number: 7,
    icon: 'alarm',
  },
  {
    id: 2,
    label: 'second',
    number: 100,
    icon: 'alarm',
  },
  {
    id: 3,
    label: 'third',
  },
  {
    id: 4,
    label: 'fourth',
    subLabel: 'sublabel',
  },
  {
    id: 5,
    label: 'first',
    disabled: true,
    number: 7,
    icon: 'alarm',
  },
  {
    id: 6,
    label: 'second',
    number: 100,
    icon: 'alarm',
  },
  {
    id: 7,
    label: 'third',
  },
  {
    id: 8,
    label: 'fourth',
    subLabel: 'sublabel',
  },
];

const Template = (args) => <Dropdown {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  items: dropdownItems,
};

export const Test = (args) => {
  const TestDropdown = (props) => {
    const [height, setHeight] = useState(100);
    const [items, setItems] = useState([]);

    return (
      <div
        style={{ height: `${height}px`, border: '1px solid red' }}
        onClick={() => setHeight(height + 10)}
      >
        <Dropdown {...args} items={items} />
        <Button label="Get Items" onClick={() => setItems(dropdownItems)} />
      </div>
    );
  };
  return <TestDropdown {...args} />;
};
