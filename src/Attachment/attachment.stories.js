import React from 'react';

import withMock from 'storybook-addon-mock';
import { default as Attachment } from './Attachment';

export default {
  title: 'swf-ui-kit/Input/Attachment',
  component: Attachment,
};

const Template = (args) => <Attachment {...args} />;

export const MockUpload = Template.bind({});
MockUpload.decorators = [withMock];
MockUpload.args = {
  label: 'Attachment',
  message: [{ content: 'example message', status: 'green' }],
  tableName: 'test',
  tableSysId: 'test',
};
MockUpload.parameters = {
  mockData: [{
    url: '/api/now/attachment/upload',
    method: 'POST',
    status: 200,
    response: JSON.stringify({
      result: { sys_id: -1 },
    }),
  },
  {
    url: '/api/now/attachment/-1',
    method: 'DELETE',
    status: 200,
  },
  ],
};

export const NoMockData = Template.bind({});
NoMockData.args = {
  label: 'Attachment',
};
