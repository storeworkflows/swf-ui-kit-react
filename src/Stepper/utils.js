export const createCssVariables = (palette) => {
    const { link, label, circle } = palette;
    const { unfinished, current, currentBorder, currentBorderInner, finished, hover } = circle;

    return `.stepper{--circle-unfinished:${unfinished || '#82B6A1'};` +
        `--circle-hover:${hover || '#abdebc'};` +
        `--circle-finished:${finished || '#3C6841'};` +
        `--circle-current:${current || '#39A450'};` +
        `--circle-border:${currentBorder || current || '#39A450'};` +
        `--circle-border-inner:${currentBorderInner || '#FFFFFF'};` +
        `--link:${link || '#39A450'};` +
        `--label:${label || '#000000'}` +
        `}`
}

// const aaronsExamplePalette = {
//     circle: {
//         unfinished: '#2AC195',
//         current: '#0069C8',
//         currentBorder: '#0069C8',
//         currentBorderInner: 'white',
//         finished: '#0069C8',
//         hover: '#70FACB'
//     },
//     icon: {
//         finished: 'white',
//         unfinished: 'black'
//     },
//     link: '#0069C8',
//     label: 'black'
// }