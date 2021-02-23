export const noop = () => void 0;

export const normalizeURL = (url) => {
    const isLocal = location.hostname === "localhost"

    return isLocal ?`https://ven04075.service-now.com${url}` : url
}