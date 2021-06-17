
module.exports = {
  preset: "jest-puppeteer",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  reporters: ["default", "jest-screenshot/reporter"],
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss',
    //'@storybook/addon-storyshots',
    "storybook-addon-mock/register",
    'storybook-addon-designs',
    '@storybook/addon-jest'
  ]
}