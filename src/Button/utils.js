import { SWF_BUTTON } from './constants';

const addStyles = (customStyle) => {
  const styles = {};
  const hasStyles = customStyle !== null;
  if (hasStyles) {
    SWF_BUTTON.AVAILABLE_CUSTOM_STYLES.forEach((styleName) => {
      if (customStyle[styleName] !== undefined) styles[`--${styleName}`] = customStyle[styleName];
    });
  }

  return styles;
};

const getCustomIconSize = (sizeStr) => {
  let result;

  switch (true) {
    case (sizeStr.includes('px')):
      result = parseInt(sizeStr.replace('px', ''));
      break;
    case (sizeStr.includes('rem')):
      result = parseFloat(sizeStr.replace('rem', ''));
      result *= 16;
      break;
    default:
      result = 16;
      break;
  }

  return result;
};

const getStandardIconSize = (size) => {
  let result = 1;

  if (size === 'sm') result = 0.75;
  else if (size === 'lg') result = 1.5;

  result *= 16;
  return result;
};

const getIconSize = (customStyle, icon, size) => {
  const hasStyles = customStyle !== null;
  const hasIcon = icon?.length > 0;

  const hasCustomIconSize = hasStyles && customStyle['font-size'] !== undefined;
  let iconSize = 16;

  if (hasIcon && hasCustomIconSize) iconSize = getCustomIconSize(customStyle['font-size']);
  else if (hasIcon) iconSize = getStandardIconSize(size);

  return iconSize;
};

export {
  getIconSize, addStyles,
};
