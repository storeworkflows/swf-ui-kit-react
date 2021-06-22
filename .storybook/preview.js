import React from 'react';
import "../src/styles.scss"
import { withTests } from '@storybook/addon-jest';

//import results from '../.jest-test-results.json';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
 // decorators: [ withTests()]
}

