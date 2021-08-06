import React from 'react';

import { default as Pagination } from './Pagination';
import { TABLE_CATEGORIES } from '../../.storybook/tableCategories';

export default {
  title: 'swf-ui-kit/Controls/Pagination',
  component: Pagination,
  argTypes: {
    totalRecords: TABLE_CATEGORIES.VALUE,
    pageLimit: TABLE_CATEGORIES.VALUE,
    currentPageSiblingsAmount: TABLE_CATEGORIES.VALUE,

    onPageChange: TABLE_CATEGORIES.ACTION,
  },
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});

Default.args = {
  totalRecords: 1000,
  pageLimit: 20,
  currentPageSiblingsAmount: 1,
  onPageChange: () => {},
};
