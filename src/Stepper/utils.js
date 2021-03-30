export const getCircleSize = (iconSize) => {
    switch (iconSize) {
        case 'xs':
            return '16px';
        case 'sm':
            return '32px';
        case 'md':
            return '48px';
        case 'lg':
            return '64px';
        case 'xl':
            return '96px';
        case 'xxl':
            return '128px';
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
        `--circle-size:${getCircleSize(iconSize) || '16px'}` +
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