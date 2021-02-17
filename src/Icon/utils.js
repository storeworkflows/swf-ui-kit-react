import {SIZE} from './constants'
import icons from "./icons";

const getSize = (sizeEnum, customSize) => {
  if(customSize){
    return { width : customSize, height : customSize}
  }
  return {width: SIZE[sizeEnum], height: SIZE[sizeEnum]}
}

const setSize = (size, customSize) => {
  const dimensions = getSize(size, customSize);
  let style = {};

  style.width = dimensions.width;
  style.height = dimensions.height;

  return style;
}

const  generateSvg = (props) => {
  const {
    icon,
    color
  } = props;

  const wrapper = document.createElement("span");
  wrapper.innerHTML = icons[icon]
  const svg = wrapper.children[0];

  svg.style.width = "inherit";
  svg.style.height = "inherit";

  if(color)
    svg.style.color = color;

  console.log(svg.style);
  return svg.outerHTML;
}

export {generateSvg, setSize};