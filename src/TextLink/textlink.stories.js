import React from 'react';

import { default as TextLink } from './TextLink';

export default {
  title: 'swf-ui-kit/Label&Value/TextLink',
  component: TextLink,
};

const Template = (args) => <TextLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label',
  href: 'https://www.google.com.ua/',
};

export const Underline = Template.bind({});
Underline.args = {
  ...Primary.args,
  underline: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
};
