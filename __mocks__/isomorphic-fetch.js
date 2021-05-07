// __mocks__/isomorphic-fetch.js

// Your fetch implementation to be added to ./storybook/main.js.
// In your webpackFinal configuration object.
require('isomorphic-fetch');

let nextJson;
export default async function fetch() {
    console.log("here")
    if (nextJson) {
        return {
            json: () => nextJson,
        };
    }
    nextJson = null;
}

// the decorator to be used in ./storybook/preview to apply the mock to all stories

export function decorator(story, { parameters }) {
    if (parameters && parameters.fetch) {
        nextJson = parameters.fetch.json;
    }
    return story();
}