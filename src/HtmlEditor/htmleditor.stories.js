import React from 'react';

import { default as HtmlEditor } from './HtmlEditor';

export default {
  title: 'swf-ui-kit/HtmlEditor',
  component: HtmlEditor,
};

const Template = (args) => <HtmlEditor {...args} />;

export const Standard = Template.bind({});
