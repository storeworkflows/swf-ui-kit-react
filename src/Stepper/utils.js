const getCircleSize = (iconSize) => {
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

export const createCssVariables = (palette, iconSize) => {
    const { link, label, circle } = palette;

    return `.stepper{` +
        `--circle-color:${circle || '#39A450'};` +
        `--link-color:${link || circle || '#39A450'};` +
        `--label-color:${label || '#000000'};` +
        `--circle-size:${getCircleSize(iconSize) || '2rem'}` +
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