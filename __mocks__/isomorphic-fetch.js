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
    console.log("decorator")
    if (parameters && parameters.fetch) {
        console.log(parameters.fetch.json)
        nextJson = parameters.fetch.json;
    }
    return story();
}