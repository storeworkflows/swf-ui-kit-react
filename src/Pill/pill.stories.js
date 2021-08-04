import React from 'react';

import { default as Pill } from './Pill';
import { TABLE_CATEGORIES } from '../../.storybook/tableCategories';
import { noop } from '../utils';

export default {
  title: 'swf-ui-kit/DataVisualisation/Pill',
  component: Pill,
  argTypes: {
    icon: TABLE_CATEGORIES.VALUE,
    member: TABLE_CATEGORIES.VALUE,
    label: TABLE_CATEGORIES.VALUE,

    canDismiss: TABLE_CATEGORIES.STATE,
    disabled: TABLE_CATEGORIES.STATE,
    clickable: TABLE_CATEGORIES.STATE,

    outline: TABLE_CATEGORIES.STYLE,
    size: TABLE_CATEGORIES.STYLE,
    classNames: TABLE_CATEGORIES.STYLE,
    color: TABLE_CATEGORIES.STYLE,
    deleteIcon: TABLE_CATEGORIES.STYLE,

    onDelete: TABLE_CATEGORIES.ACTION,
    onClick: TABLE_CATEGORIES.ACTION,
  },
  args: {
    label: 'label',
  },
};

const Template = (args) => <Pill {...args} />;

export const WithMember = Template.bind({});
WithMember.args = {
  member: {
    name: 'Name Surname',
    title: 'title',
    id: '1',
  },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'alarm',
  canDismiss: true,
  color: 'primary',
  size: 'sm',
  onDelete: noop,
};
