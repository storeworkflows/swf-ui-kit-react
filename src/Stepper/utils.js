export const createCssVariables = (palette) => {
    const { link, label, circle } = palette;

    return `.stepper-container{` +
        `--circle:${circle || '#39A450'};` +
        `--link:${link || circle || '#39A450'};` +
        `--label:${label || '#000000'}` +
        `}`
}

export const getCircleSize = (iconSize) => {
    switch (iconSize) {
        case 'xs':
            return '2rem';
        case 'sm':
            return '2rem';
        case 'md':
            return '3rem';
        case 'lg':
            return '4rem';
        case 'xl':
            return '5rem';
        case 'xxl':
            return '6rem';
        default:
            return `${iconSize * 2}px`;
    }
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