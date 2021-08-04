import React from 'react';

import { default as Toggle } from './Toggle';
import { TABLE_CATEGORIES } from '../../.storybook/tableCategories';

export default {
  title: 'swf-ui-kit/Input/Toggle',
  component: Toggle,
  argTypes: {
    checked: TABLE_CATEGORIES.STATE,
    disabled: TABLE_CATEGORIES.STATE,
    manageChecked: TABLE_CATEGORIES.MANAGING,
    size: TABLE_CATEGORIES.STYLE,
    customStyle: TABLE_CATEGORIES.STYLE,
    onClick: TABLE_CATEGORIES.ACTION,
  },
};

const Template = (args) => <Toggle {...args} />;

export const Standard = Template.bind({});
