import fetch from "cross-fetch";

const DEFAULT_GQL_ENDPOINT = 'api/now/graphql';

export default function graphqlRequest({operationName = '', query = {}, variables = {}, params = {}}) {
    const options = {
        method: 'POST',
        ...params,
        credentials: 'same-origin',
        headers: {
            'content-type': "application/json",
            'X-Transaction-Source': window.transaction_source,
            'X-UserToken': "7c26d741db64b0505bd9ff27b996191df097b973635ec3deb16e9a788371da35203f2f02"
        },
        body: JSON.stringify([{
            operationName,
            query,
            variables
        }])
    }
    return fetch(DEFAULT_GQL_ENDPOINT, options)
}