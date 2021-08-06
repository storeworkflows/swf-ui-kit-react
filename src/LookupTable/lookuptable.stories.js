import React from 'react';
import { default as LookupTable } from './LookupTable';

export default {
  title: 'swf-ui-kit/Input/LookupTable',
  component: LookupTable,
};

export const ExampleData = (args) => <LookupTable {...args} />;
ExampleData.args = {
  name: 'name',
  table: 'sys_user',
};
