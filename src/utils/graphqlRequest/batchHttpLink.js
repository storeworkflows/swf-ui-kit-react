import { BatchHttpLink } from 'apollo-link-batch-http';
import fetch from 'cross-fetch';
const DEFAULT_GQL_ENDPOINT = '/api/now/graphql';
const DEFAULT_BATCH_INTERVAL_MS = 50;
const root = window;

const customFetch = (uri, options) => fetch(uri, Object.assign({}, options, {
    credentials: 'same-origin',
    headers: Object.assign({}, options.headers, {
        'X-Transaction-Source': root.transaction_source,
        'X-UserToken': root.g_ck
    })
})).then(response => {
    if (response.headers.get('x-is-logged-in') === 'false') {
        const error = new Error();
        error.response = Object.assign({}, response, {
            status: 401,
            statusText: 'Unauthorized'
        });
        throw error;
    }

    return response;
});

const batchHttpLink = new BatchHttpLink({
    uri: DEFAULT_GQL_ENDPOINT,
    batchInterval: DEFAULT_BATCH_INTERVAL_MS,
    fetch: customFetch
});

export default batchHttpLink;