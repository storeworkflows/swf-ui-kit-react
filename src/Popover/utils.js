import { POPOVER } from './constants';

const {
  ALIGNMENT, ARROW_SIZE, ARROW_ALIGN, NO_ARROW_POSITIONS, ARROW_SIDES, ARROW_SPACE, PADDING_SIZE,
} = POPOVER;

const verticalAlignment = [ALIGNMENT.TOP, ALIGNMENT.CENTER, ALIGNMENT.BOTTOM];
const horizontalAlignment = [ALIGNMENT.START, ALIGNMENT.CENTER, ALIGNMENT.END];

const setArrowColor = (align) => `--arrow-${align}-color`;
const setMargin = (align) => `margin-${align}`;
const setArrowSize = (align) => `--arrow-${align}-size`;

const hasArrowByPosition = (position, roundBorder) => !(isOneOfNoArrow(position) || (roundBorder && !isCenterArrow(position)));

const isOneOfNoArrow = (position) => {
  const targetPosition = position.target.split('-');
  const contentPosition = position.content.split('-');

  let result = false;
  NO_ARROW_POSITIONS.forEach(({ content, target }) => {
    const elTargetPosition = target.split('-');
    const elContentPosition = content.split('-');
    const isSameTargetParams = targetPosition[0] === elTargetPosition[0] && targetPosition[1] === elTargetPosition[1];
    const isSameContentParams = contentPosition[0] === elContentPosition[0] && contentPosition[1] === elContentPosition[1];

    if (isSameTargetParams && isSameContentParams) result = true;
  });
  return result;
};

const isCenterArrow = (position) => {
  const contentPosition = position.content.split('-');
  return contentPosition[0] === ALIGNMENT.CENTER || contentPosition[1] === ALIGNMENT.CENTER;
};

const calculatePosition = (alignType, arrayType, size, addPx = 0) => {
  let result = addPx;
  if (alignType === arrayType[1]) result = Math.round(size / 2) + addPx;
  else if (alignType === arrayType[2]) result = size + addPx;

  return result;
};

const getArrowAlignment = (arrayType, align, parentSize, size) => {
  if (align === arrayType[1]) return Math.round(parentSize / 2) - size;
  if (align === arrayType[2]) return parentSize - size * 2;
  return 0;
};

const getArrowStyles = (position, contentDimensions) => {
  const style = {};
  const targetPosition = position.target.split('-');
  const contentPosition = position.content.split('-');
  const margin = `${ARROW_SIZE + ARROW_SPACE}px`;

  const isDown = targetPosition[0] === ALIGNMENT.TOP && contentPosition[0] === ALIGNMENT.BOTTOM;
  const isLeft = targetPosition[1] === ALIGNMENT.END && contentPosition[1] === ALIGNMENT.START;
  const isRight = targetPosition[1] === ALIGNMENT.START && contentPosition[1] === ALIGNMENT.END;
  const isUp = targetPosition[0] === ALIGNMENT.BOTTOM && contentPosition[0] === ALIGNMENT.TOP;

  let hasArrow = true;
  let sideToZero = null;
  let colorSide = null;
  let top = 0;
  let left = 0;

  switch (true) {
    case isDown:
      sideToZero = ARROW_SIDES.BOTTOM;
      colorSide = ARROW_SIDES.TOP;

      top = contentDimensions.height;
      left = getArrowAlignment(horizontalAlignment, contentPosition[1], contentDimensions.width, ARROW_SIZE);

      break;
    case isRight:
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

  if (hasArrow) {
    style[ARROW_ALIGN.TOP] = `${top}px`;
    style[ARROW_ALIGN.LEFT] = `${left}px`;

    style[setArrowColor(colorSide)] = 'var(--popover-background)';
    style[setArrowSize(sideToZero)] = 0;
    style[setMargin(sideToZero)] = margin;
  }
  return { hasArrow, style };
};

const getTopAndLeft = (targetPosition, targetDimensions, contentPosition, hasArrow, contentDimensions) => {
  const verticalAlign = targetPosition[0];
  const horizontalAlign = targetPosition[1];

  const targetWidth = targetDimensions.width;
  const targetHeight = targetDimensions.height;

  let addPx = 0;
  let addPxY = 0;

  const needMoveContent = verticalAlign === ALIGNMENT.TOP && contentPosition[0] === ALIGNMENT.BOTTOM;
  const needMoveContentY = horizontalAlign === ALIGNMENT.START && contentPosition[1] === ALIGNMENT.END;

  if (needMoveContent && hasArrow) addPx = -ARROW_SIZE - ARROW_SPACE;

  if (needMoveContentY && hasArrow) addPxY = -ARROW_SIZE - ARROW_SPACE;

  const top = targetDimensions.y - contentDimensions.y + calculatePosition(verticalAlign, verticalAlignment, targetHeight, addPx);
  const left = targetDimensions.x - contentDimensions.x + calculatePosition(horizontalAlign, horizontalAlignment, targetWidth, addPxY);

  return { top, left };
};

const getTransform = (contentPosition, width, height) => {
  const verticalAlign = contentPosition[0];
  const horizontalAlign = contentPosition[1];

  const translateY = calculatePosition(verticalAlign, verticalAlignment, -height);
  const translateX = calculatePosition(horizontalAlign, horizontalAlignment, -width);

  return { x: translateX, y: translateY, stringValue: `translate3d(${translateX}px, ${translateY}px, 0)` };
};

const getStyleByPosition = (position, targetDimensions, contentDimensions, windowParam, hasArrow, updatedContentSizes, padding) => {
  const style = {};
  const targetPosition = position.target.split('-');
  const contentPosition = position.content.split('-');

  let top = 0;
  let left = 0;
  if (targetPosition) {
    const positionByTarget = getTopAndLeft(targetPosition, targetDimensions, contentPosition, hasArrow, contentDimensions);
    top = positionByTarget.top;
    left = positionByTarget.left;
  }

  style.top = `${top}px`;
  style.left = `${left}px`;

  style.transform = getTransform(contentPosition, updatedContentSizes.width, updatedContentSizes.height).stringValue;
  style.maxWidth = `${updatedContentSizes.width - padding * 2}px`;
  style.maxHeight = `${updatedContentSizes.height - padding * 2}px`;

  return style;
};

const getAllStyles = (position, targetDimensions, contentDimensions, windowParam, hasArrow, updatedContentSizes, pudding) => {
  let arrowStyles = { hasArrow: false, style: {} };
  const popoverStyles = getStyleByPosition(position, targetDimensions, contentDimensions, windowParam, hasArrow, updatedContentSizes, pudding);

  if (hasArrow) arrowStyles = getArrowStyles(position, updatedContentSizes);

  return { style: popoverStyles, hasArrow: arrowStyles.hasArrow, arrowStyle: arrowStyles.style };
};

const dividePosition = (position) => {
  const splittedPos = position.split('-');
  return {
    vertical: splittedPos[0],
    horizontal: splittedPos[1],
  };
};

const getAvailableSize = (targetPosition, contentPosition, targetStart, targetSize, contentSize, windowStart, windowEnd, alignment, margin, padding) => {
  let availableStart; let
    availableEnd;

  const targetPos = targetStart + calculatePosition(targetPosition, alignment, targetSize);

  if (contentPosition === alignment[1]) {
    const minValue = (windowEnd - targetPos) > (targetPos - windowStart) ? targetPos - windowStart : windowEnd - targetPos;
    availableEnd = targetPos + minValue;
    availableStart = targetPos - minValue;
  } else if (contentPosition === alignment[0]) {
    availableEnd = windowEnd;
    availableStart = targetPos;
  } else {
    availableStart = windowStart;
    availableEnd = targetPos;
  }

  const availableSize = availableEnd - availableStart;
  return {
    size: (contentSize + margin) > availableSize ? availableSize - margin : contentSize,
    needCut: (contentSize + margin) > availableSize,
  };
};

const getAvailableDimensions = (position, targetDimensions, contentDimensions, windowParam, hasArrow, padding) => {
  const targetPosition = dividePosition(position.target);
  const contentPosition = dividePosition(position.content);

  const realContentWidth = contentDimensions.width;
  const realContentHeight = contentDimensions.height;

  let checkWithMargin = hasArrow && contentPosition.vertical === verticalAlignment[1];
  let margin = (checkWithMargin) ? ARROW_SIZE + ARROW_SPACE : 0;

  const availableWidth = getAvailableSize(
    targetPosition.horizontal, contentPosition.horizontal,
    targetDimensions.x, targetDimensions.width, realContentWidth,
    windowParam.startX, windowParam.endX, horizontalAlignment, margin, padding,
  );

  checkWithMargin = hasArrow && contentPosition.horizontal === verticalAlignment[1];
  margin = (checkWithMargin) ? ARROW_SIZE + ARROW_SPACE : 0;

  const availableHeight = getAvailableSize(
    targetPosition.vertical, contentPosition.vertical,
    targetDimensions.y, targetDimensions.height, realContentHeight,
    windowParam.startY, windowParam.endY, verticalAlignment, margin, padding,
  );

  return {
    content: {
      width: availableWidth.size,
      height: availableHeight.size,
    },
    needCut: availableWidth.needCut || availableHeight.needCut,
  };
};

export const getPopoverStyle = (positions, targetDimensions, contentDimensions, hideTail, roundBorder, padding) => {
  let result = {};
  let hasArrow; let
    availableDimensions;
  const paddings = (padding) || PADDING_SIZE;

  const windowParam = {
    startY: 0,
    startX: 0,
    endY: window.innerHeight,
    endX: window.innerWidth,
  };

  for (let i = 0; i < positions.length; i++) {
    hasArrow = !hideTail && hasArrowByPosition(positions[i], roundBorder);
    availableDimensions = getAvailableDimensions(positions[i], targetDimensions, contentDimensions, windowParam, hasArrow, paddings);

    if (!availableDimensions.needCut) {
      const updatedSizes = availableDimensions.content;
      result = getAllStyles(positions[i], targetDimensions, contentDimensions, windowParam, hasArrow, updatedSizes, paddings);
      break;
    } else if (i === positions.length - 1) {
      hasArrow = !hideTail && hasArrowByPosition(positions[0], roundBorder);
      availableDimensions = getAvailableDimensions(positions[0], targetDimensions, contentDimensions, windowParam, hasArrow, paddings);

      result = getAllStyles(positions[0], targetDimensions, contentDimensions, windowParam, hasArrow, availableDimensions.content, paddings);
    }
  }

  return result;
};

const isOuterPosition = (position) => {
  const targetPosition = dividePosition(position.target);
  const contentPosition = dividePosition(position.content);

  const isDown = targetPosition.vertical === ALIGNMENT.TOP && contentPosition.vertical === ALIGNMENT.BOTTOM;
  const isLeft = targetPosition.horizontal === ALIGNMENT.END && contentPosition.horizontal === ALIGNMENT.START;
  const isRight = targetPosition.horizontal === ALIGNMENT.START && contentPosition.horizontal === ALIGNMENT.END;
  const isUp = targetPosition.vertical === ALIGNMENT.BOTTOM && contentPosition.vertical === ALIGNMENT.TOP;

  return (isDown || isLeft || isRight || isUp);
};

const getAllPossiblePositions = () => {
  const result = [];

  verticalAlignment.forEach((v) => {
    horizontalAlignment.forEach((h) => {
      result.push(`${v}-${h}`);
    });
  });

  return result;
};

export const getAllPossibleVariants = () => {
  const result = [];

  const allPositions = getAllPossiblePositions();
  allPositions.forEach((targetPos) => {
    allPositions.forEach((contentPos) => {
      const position = { target: targetPos, content: contentPos };
      if (isOuterPosition(position)) result.unshift(position);
      else result.push(position);
    });
  });
  return result;
};
