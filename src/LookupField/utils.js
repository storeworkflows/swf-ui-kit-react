export const stringToArray = (string, divider) => {
    if (!string) return [];

    return string.split(divider).filter(Boolean);
}