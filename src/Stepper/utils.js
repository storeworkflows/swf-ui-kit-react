export const createCssVariables = (palette) => {
    const { link, label, circle } = palette;

    return `.stepper-container{` +
        `--circle:${circle || '#39A450'};` +
        `--link:${link || circle || '#39A450'};` +
        `--label:${label || '#000000'}` +
        `}`
}

// const aaronsExamplePalette = {
//     icon: {
//         finished: 'white',
//         unfinished: 'black'
//     },
//     circle: '#0069C8',
//     link: '#0069C8',
//     label: 'black'
// }