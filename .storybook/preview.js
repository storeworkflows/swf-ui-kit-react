import React from 'react';
import '!style-loader!css-loader!sass-loader!../src/styles.scss';


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

