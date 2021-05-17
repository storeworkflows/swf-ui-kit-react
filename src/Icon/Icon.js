import * as React from "react";
import propTypes from "prop-types";

import {SIZE} from "./constants";
import {generateSvg, getAttrs} from "./utils";

const Icon = (props) => {
  const { icon, size, customSize, color, className,
        innerRef, zeroSize, onClick} = props;

  const getStyles = () => {
    let style = {}

    if (!zeroSize) {
      const finalSize = (customSize) ? customSize : SIZE[size];

      style.height = finalSize;
      style.width = finalSize;
    }

    if (color)
      style.color = color

    return style;
  }

  let node = generateSvg(icon);

  if (!node) {
    console.error(`Icon error: unregistered icon ${icon}`)
    return null
  }

  return (
        <svg
            ref={elm => innerRef.current = elm}
            {...getAttrs(node.attributes)}
            style={getStyles()}
            className={className}
            onClick={onClick}
        >
          {[...node.children].map((child, id) => {
            const {tagName: Tag, attributes} = child
            return <Tag {...getAttrs(attributes)} key={id} style={{fill: "currentColor"}}/>
          })}
        </svg>
    )
}

Icon.defaultProps = {
    icon: "",
    size: 'md',
    color: "",
    className: {},
    innerRef: React.createRef(),
    onClick: () => void 0
}

Icon.propTypes = {
    icon: propTypes.string.isRequired,
    size: propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
    customSize: propTypes.number,
    color: propTypes.string,
    className: propTypes.oneOfType([propTypes.object, propTypes.string]),
    innerRef: propTypes.object,
    zeroSize: propTypes.bool,
    onClick: propTypes.func
}

export default Icon
