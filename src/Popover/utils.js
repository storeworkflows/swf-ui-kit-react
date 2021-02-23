import {POPOVER} from "./constants";
const {alignment, arrowSize, arrowAlign, arrowBorder, arrowBorderWidth, noArrow} = POPOVER

const verticalAlignment = [alignment.TOP, alignment.CENTER, alignment.BOTTOM];
const horizontalAlignment = [alignment.START, alignment.CENTER, alignment.END];

const diagonal = (arrowSize + 2 * arrowBorderWidth) * Math.sqrt(2);
const halfDiagonal = diagonal/2;

const isOneOfNoArrow = (position) => {
    let targetPosition = position.target.split('-');
    let contentPosition = position.content.split('-');

    let result = false;
    noArrow.forEach( ({content, target}) => {
        let elTargetPosition = target.split('-');
        let elContentPosition = content.split('-');
        let isSameTargetParams = targetPosition[0] === elTargetPosition[0] && targetPosition[1] === elTargetPosition[1];
        let isSameContentParams = contentPosition[0] === elContentPosition[0] && contentPosition[1] === elContentPosition[1];

        if(isSameTargetParams && isSameContentParams)
            result = true;
    })
    return result;
}

const calculatePosition = (alignType, arrayType, startPosition, addPx = 0) => {
    let result = `${addPx}px`;
    if(alignType === arrayType[1])
        result = `${startPosition/2 + addPx}px`;
    else if(alignType === arrayType[2])
        result= `${startPosition + addPx}px`;

    return result;
}

const calculateArrowPosition = (alignType, arrayType, startPosition, additionalParam = 0) => {
    let result = `${additionalParam + 8}px `;
    if(alignType === arrayType[1])
        result = `${startPosition/2 - halfDiagonal + additionalParam +2}px`;
    else if(alignType === arrayType[2])
        result= `${startPosition - diagonal + additionalParam - 5}px`;

    return result;
}

const getArrowStyles = (position, contentDimensions) => {
    let style = {};
    let borderStyle = `${arrowBorderWidth}px solid rgba(0, 0, 0, 0.3)`;
    let targetPosition = position.target.split('-');
    let contentPosition = position.content.split('-');

    let hasArrow = true;
    let margin = `${halfDiagonal}px`
    if(isOneOfNoArrow(position))
        hasArrow = false;
    else if(targetPosition[0] === alignment.TOP && contentPosition[0] === alignment.BOTTOM){
        //down
        style[arrowBorder.BOTTOM] = borderStyle;
        style[arrowBorder.RIGHT] = borderStyle;

        style[arrowAlign.TOP] = contentDimensions.height+"px";
        style[arrowAlign.LEFT] = calculateArrowPosition(contentPosition[1], horizontalAlignment, contentDimensions.width);
        style['margin-bottom'] = margin;

    } else if(targetPosition[1] === alignment.START && contentPosition[1] === alignment.END){
        //right
        style[arrowBorder.RIGHT] = borderStyle;
        style[arrowBorder.TOP] = borderStyle;

        style[arrowAlign.TOP] = calculateArrowPosition(contentPosition[0], verticalAlignment, contentDimensions.height, halfDiagonal);
        style[arrowAlign.LEFT] = `${contentDimensions.width - halfDiagonal + 2}px`;

        style['margin-right'] = margin;

    } else if(targetPosition[1] === alignment.END && contentPosition[1] === alignment.START){
        //left
        style[arrowBorder.LEFT] = borderStyle;
        style[arrowBorder.BOTTOM] = borderStyle

        style[arrowAlign.TOP] = `${calculateArrowPosition(contentPosition[0], verticalAlignment, contentDimensions.height, halfDiagonal)}`;
        style[arrowAlign.LEFT] = `${- halfDiagonal + 2}px`;

        style['margin-left'] = margin;

    }  else if(targetPosition[0] === alignment.BOTTOM && contentPosition[0] === alignment.TOP){
        //up
        style[arrowBorder.LEFT] = borderStyle;
        style[arrowBorder.TOP] = borderStyle

        style[arrowAlign.TOP] = 0;
        style[arrowAlign.LEFT] = calculateArrowPosition(contentPosition[1], horizontalAlignment, contentDimensions.width);

        style['margin-top'] = margin;
    } else
        hasArrow = false;

    return {hasArrow: hasArrow, style: style};
}

const getStyleByPosition = (position, targetDimensions, contentDimensions, windowWidth, hideTail) => {
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
        let needMoveContent = verticalAlign === alignment.TOP && contentPosition[0] === alignment.BOTTOM;
        let needMoveContentY = horizontalAlign === alignment.START && contentPosition[1] === alignment.END;
        if(needMoveContent && !hideTail && !isOneOfNoArrow(position))
            addPx = -halfDiagonal;

        if(needMoveContentY && !hideTail && !isOneOfNoArrow(position))
            addPxY = -halfDiagonal;

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

    console.log("visibility", isVisible);
    return {style: style, isVisible: isVisible};
}


export const getPopoverStyle = (positions, targetDimensions, contentDimensions, windowWidth, hideTail) => {
    let style = {};

    let result;
    let arrowStyles = { hasArrow: false, style:{}};
    for(let i = 0; i<positions.length; i++){
        result = getStyleByPosition(positions[i], targetDimensions, contentDimensions, windowWidth, hideTail);
        if(result.isVisible)
        {
            style = result.style;
            if(!hideTail)
                arrowStyles = getArrowStyles (positions[i], contentDimensions);
            break;
        }else if(i === positions.length -1)
        {
            style = getStyleByPosition(positions[0], targetDimensions, contentDimensions, windowWidth, hideTail).style;
            if(!hideTail)
                arrowStyles = getArrowStyles (positions[0], contentDimensions);
        }
    }


    return {style: style, hasArrow: arrowStyles.hasArrow, arrowStyle: arrowStyles.style};
}