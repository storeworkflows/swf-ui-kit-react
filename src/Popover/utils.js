import {POPOVER} from "./constants";
const {ALIGNMENT, ARROW_SIZE, ARROW_ALIGN, NO_ARROW_POSITIONS, ARROW_SIDES, ARROW_SPACE} = POPOVER

const verticalAlignment = [ALIGNMENT.TOP, ALIGNMENT.CENTER, ALIGNMENT.BOTTOM];
const horizontalAlignment = [ALIGNMENT.START, ALIGNMENT.CENTER, ALIGNMENT.END];

const setArrowColor = (align) => {
    return `--arrow-${align}-color`;
}
const setMargin = (align) => {
    return `margin-${align}`;
}
const setArrowSize = (align) => {
    return `--arrow-${align}-size`;
}

const hasArrowByPosition = (position, roundBorder) =>{
    return !(isOneOfNoArrow(position) || (roundBorder && !isCenterArrow(position)));
}

const isOneOfNoArrow = (position) => {
    let targetPosition = position.target.split('-');
    let contentPosition = position.content.split('-');

    let result = false;
    NO_ARROW_POSITIONS.forEach( ({content, target}) => {
        let elTargetPosition = target.split('-');
        let elContentPosition = content.split('-');
        let isSameTargetParams = targetPosition[0] === elTargetPosition[0] && targetPosition[1] === elTargetPosition[1];
        let isSameContentParams = contentPosition[0] === elContentPosition[0] && contentPosition[1] === elContentPosition[1];

        if(isSameTargetParams && isSameContentParams)
            result = true;
    })
    return result;
}

const isCenterArrow = (position) => {
    let contentPosition = position.content.split('-');
    return contentPosition[0] === ALIGNMENT.CENTER || contentPosition[1] === ALIGNMENT.CENTER;
}

const calculatePosition = (alignType, arrayType, startPosition, addPx = 0) => {
    let result = `${addPx}px`;
    if(alignType === arrayType[1])
        result = `${Math.round(startPosition/2) + addPx}px`;
    else if(alignType === arrayType[2])
        result= `${startPosition + addPx}px`;

    return result;
}


const getArrowAlignment = (arrayType, align, parentSize, size) => {
    if(align === arrayType[1])
        return Math.round(parentSize/2) - size;
    else if ( align === arrayType[2])
        return parentSize - size*2;
    else
        return 0;
}

const getArrowStyles = (position, contentDimensions) => {
    let style = {};
    let targetPosition = position.target.split('-');
    let contentPosition = position.content.split('-');
    let margin = `${ARROW_SIZE + ARROW_SPACE}px`

    let isDown = targetPosition[0] === ALIGNMENT.TOP && contentPosition[0] === ALIGNMENT.BOTTOM;
    let isLeft = targetPosition[1] === ALIGNMENT.END && contentPosition[1] === ALIGNMENT.START;
    let isRight = targetPosition[1] === ALIGNMENT.START && contentPosition[1] === ALIGNMENT.END;
    let isUp = targetPosition[0] === ALIGNMENT.BOTTOM && contentPosition[0] === ALIGNMENT.TOP;

    let hasArrow = true;
    let sideToZero = null;
    let colorSide = null;
    let top = 0;
    let left = 0;

    switch(true){
        case isDown :
            sideToZero = ARROW_SIDES.BOTTOM;
            colorSide = ARROW_SIDES.TOP;

            top = contentDimensions.height;
            left = getArrowAlignment(horizontalAlignment, contentPosition[1], contentDimensions.width, ARROW_SIZE);

            break;
        case isRight :
            sideToZero = ARROW_SIDES.RIGHT;
            colorSide = ARROW_SIDES.LEFT;

            top = getArrowAlignment(verticalAlignment, contentPosition[0], contentDimensions.height, ARROW_SIZE);
            left = contentDimensions.width;

            break;
        case isLeft:
            sideToZero = ARROW_SIDES.LEFT;
            colorSide = ARROW_SIDES.RIGHT;

            top = getArrowAlignment(verticalAlignment, contentPosition[0], contentDimensions.height, ARROW_SIZE);
            left = -ARROW_SIZE;

            break;
        case isUp:
            sideToZero = ARROW_SIDES.TOP;
            colorSide = ARROW_SIDES.BOTTOM;

            top = -ARROW_SIZE;
            left = getArrowAlignment(horizontalAlignment, contentPosition[1], contentDimensions.width, ARROW_SIZE);

            break;
        default:
            hasArrow = false;
            break;
    }

    if(hasArrow){
        style[ARROW_ALIGN.TOP] = `${top}px`;
        style[ARROW_ALIGN.LEFT] = `${left}px`;

        style[setArrowColor(colorSide)] = 'var(--popover-background)';
        style[setArrowSize(sideToZero)] = 0;
        style[setMargin(sideToZero)] = margin;
    }
    return {hasArrow: hasArrow, style: style};
}

const getStyleByPosition = (position, targetDimensions, contentDimensions, windowWidth, hasArrow) => {
    let style = {};
    let targetPosition = position.target.split('-');
    let contentPosition = position.content.split('-');

    if(targetPosition){
        let verticalAlign = targetPosition[0];
        let horizontalAlign = targetPosition[1];

        let targetWidth = targetDimensions.width;
        let targetHeight = targetDimensions.height;

        let addPx = 0;
        let addPxY = 0

        let needMoveContent = verticalAlign === ALIGNMENT.TOP && contentPosition[0] === ALIGNMENT.BOTTOM;
        let needMoveContentY = horizontalAlign === ALIGNMENT.START && contentPosition[1] === ALIGNMENT.END;

        if(needMoveContent && hasArrow)
            addPx = -ARROW_SIZE - ARROW_SPACE;

        if(needMoveContentY && hasArrow)
            addPxY = -ARROW_SIZE - ARROW_SPACE;

        style.top = calculatePosition(verticalAlign, verticalAlignment, targetHeight, addPx);
        style.left = calculatePosition(horizontalAlign, horizontalAlignment, targetWidth, addPxY);

    }

    let x, y;
    if(contentPosition){
        let verticalAlign = contentPosition[0];
        let horizontalAlign = contentPosition[1];

        let contentWidth = contentDimensions.width;
        let contentHeight = contentDimensions.height;

        y = calculatePosition(verticalAlign, verticalAlignment, -contentHeight);
        x = calculatePosition(horizontalAlign, horizontalAlignment, -contentWidth);

        style.transform = `translate3d(${x}, ${y}, 0)`;
    }

    let resultX = targetDimensions.x +
        parseInt(style.left.replace("px", '')) +
        parseInt(x.replace("px", ''));

    let resultY = targetDimensions.y +
        parseInt(style.top.replace("px", '')) +
        parseInt(y.replace("px", ''));

    let isXVisible = resultX>0 && (resultX + contentDimensions.width) < windowWidth;
    let isYVisible = resultY>0;

    let isVisible = isXVisible && isYVisible;

    return {style: style, isVisible: isVisible};
}

const getAllStyles = (position, targetDimensions, contentDimensions, windowWidth, hasArrow) => {
    let arrowStyles = { hasArrow: false, style:{}};
    let popoverStyles = getStyleByPosition(position, targetDimensions, contentDimensions, windowWidth, hasArrow);
    if(hasArrow && popoverStyles.isVisible)
        arrowStyles = getArrowStyles(position, contentDimensions);

    return {isVisible: popoverStyles.isVisible, style: popoverStyles.style, hasArrow: arrowStyles.hasArrow, arrowStyle: arrowStyles.style};
}


export const getPopoverStyle = (positions, targetDimensions, contentDimensions, windowWidth, hideTail, roundBorder) => {
    let result = {};

    for(let i = 0; i<positions.length; i++){
        let hasArrow = !hideTail && hasArrowByPosition(positions[i], roundBorder);
        result = getAllStyles(positions[i], targetDimensions, contentDimensions, windowWidth, hasArrow);
        if(result.isVisible)
            break;
        else if(i === positions.length -1)
            result = getAllStyles(positions[0], targetDimensions, contentDimensions, windowWidth, hasArrow);
    }

    return result;
}