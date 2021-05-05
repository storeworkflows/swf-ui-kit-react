import React from 'react';
import '!style-loader!css-loader!sass-loader!../src/styles.scss';

import { addDecorator } from '@storybook/react';
//import { initializeWorker, mswDecorator } from 'msw-storybook-addon';

// initializeWorker();
// addDecorator(mswDecorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
}

