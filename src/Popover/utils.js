const verticalAlignment = ["top", "center", "bottom"];
const horizontalAlignment = ["start", "center", "end"];

const calculatePosition = (alignType, arrayType, startPosition) => {
    let result = "0";
    if(alignType === arrayType[1])
        result = `${startPosition/2}px`;
    else if(alignType === arrayType[2])
        result= `${startPosition}px`;

    return result;
}

const getArrowStyles = (position, contentDimensions) => {
    let style = {};
    let borderStyle = `var(--popover-border-width) solid rgba(0, 0, 0, 0.3)`;
    let targetPosition = position.target.split('-');
    let contentPosition = position.content.split('-');

    let hasArrow = true;
    if(targetPosition[0] === "top" && contentPosition[0] === "bottom"){
        //down
        style['--popover-arrow-border-right'] = borderStyle;
        style['--popover-arrow-border-bottom'] = borderStyle;

        style['--popover-arrow-top'] = contentDimensions.height+"px";
        style['--popover-arrow-left'] = calculatePosition(contentPosition[1], horizontalAlignment, contentDimensions.width);

    } else if(targetPosition[1] === "start" && contentPosition[1] === "end"){
        //right
        style['--popover-arrow-border-right'] = borderStyle;
        style['--popover-arrow-border-top'] = borderStyle;

        style['--popover-arrow-top'] = calculatePosition(contentPosition[0], verticalAlignment, contentDimensions.height);
        style['--popover-arrow-left'] = contentDimensions.width+"px";

    } else if(targetPosition[1] === "end" && contentPosition[1] === "start"){
        //left
        style['--popover-arrow-border-left'] = borderStyle;
        style['--popover-arrow-border-bottom'] = borderStyle

        style['--popover-arrow-top'] = calculatePosition(contentPosition[0], verticalAlignment, contentDimensions.height);
        style['--popover-arrow-left'] = 0;

    }  else if(targetPosition[0] === "bottom" && contentPosition[0] === "top"){
        //up
        style['--popover-arrow-border-left'] = borderStyle;
        style['--popover-arrow-border-top'] = borderStyle

        style['--popover-arrow-top'] = 0;
        style['--popover-arrow-left'] = calculatePosition(contentPosition[1], horizontalAlignment, contentDimensions.width);
    } else
        hasArrow = false;

    return {hasArrow: hasArrow, style: style};
}

const getStyleByPosition = (position, targetDimensions, contentDimensions, windowWidth) => {
    let style = {};
    let targetPosition = position.target;
    let contentPosition = position.content;

    if(targetPosition){
        let verticalAlign = targetPosition.split('-')[0];
        let horizontalAlign = targetPosition.split('-')[1];

        let targetWidth = targetDimensions.width;
        let targetHeight = targetDimensions.height;

        style.top = calculatePosition(verticalAlign, verticalAlignment, targetHeight);
        style.left = calculatePosition(horizontalAlign, horizontalAlignment, targetWidth);
    }

    let x, y;
    if(contentPosition){
        let verticalAlign = contentPosition.split('-')[0];
        let horizontalAlign = contentPosition.split('-')[1];

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


export const getPopoverStyle = (positions, targetDimensions, contentDimensions, windowWidth) => {
    let style = {};

    let result;
    let arrowStyles;
    for(let i = 0; i<positions.length; i++){
        result = getStyleByPosition(positions[i], targetDimensions, contentDimensions, windowWidth);
        if(result.isVisible)
        {
            style = result.style;
            arrowStyles = getArrowStyles (positions[i], contentDimensions);
            break;
        }else if(i === positions.length -1)
        {
            style = getStyleByPosition(positions[0], targetDimensions, contentDimensions, windowWidth).style;
            arrowStyles = getArrowStyles (positions[0], contentDimensions);
        }
    }


    return {style: style, hasArrow: arrowStyles.has, arrowStyle: arrowStyles.style};
}