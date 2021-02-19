export const createCssVariables = (palette) => {
    const { link, label, circle } = palette;
    const { unfinished, current, currentBorder, currentBorderInner, finished, hover } = circle;

    return `.stepper{--circle-unfinished:${unfinished || '#F9F871'};` +
        `--circle-hover:${hover || '#FFC75F'};` +
        `--circle-finished:${finished || '#FF6F91'};` +
        `--circle-current:${current || '#D65DB1'};` +
        `--circle-border:${currentBorder || '#D65DB1'};` +
        `--circle-border-inner:${currentBorderInner || '#FFFFFF'};` +
        `--link:${link || '#D65DB1'};` +
        `--label:${label || '#000000'}` +
        `}`
}