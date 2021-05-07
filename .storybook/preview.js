import React from 'react';
import '!style-loader!css-loader!sass-loader!../src/styles.scss';

import { addDecorator } from '@storybook/react';
//import { initializeWorker, mswDecorator } from 'msw-storybook-addon';

// initializeWorker();
// addDecorator(mswDecorator);
// .storybook/preview.js

import { decorator } from '../__mocks__/isomorphic-fetch';

// Add the decorator to all stories
export const decorators = [decorator];

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

