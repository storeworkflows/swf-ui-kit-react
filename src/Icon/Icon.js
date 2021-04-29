import * as React from "react";
import propTypes from "prop-types";

import icons from "./icons";
import {SIZE} from "./constants";

class Icon extends React.Component {

  getStyles(){
    const {
      color,
      size,
      customSize,
      zeroSize
    } = this.props;

    let style = {}

    if (!zeroSize) {
      const finalSize = (customSize) ? customSize : SIZE[size];

      style.height = finalSize;
      style.width = finalSize;
    }

    if(color)
      style.color = color;

    return style;
  }

  generateSvg(icon){
    const wrapper = document.createElement("span");
    wrapper.innerHTML = icons[icon];
    return wrapper.children[0];
  }

  getAttrs(attrs){
    let props = {};
    for(let i=0; i<attrs.length; i++){
      let curProps = attrs.item(i);
      let name = curProps.name;

      if (curProps.name === "class")
        name = "className";
      if (curProps.name === "fill-rule")
        name = "fillRule";
      if (curProps.name === "fillrule")
        name = "fillRule";

      props[name] = curProps.value;
    }
    return props;
  }


  render () {
    let node = this.generateSvg(this.props.icon);

    if (!node) {
      console.error(`Icon error: unregistered icon ${this.props.icon}`)
      return null
    }

    return (
        <svg
           // ref={elm => this.props.innerRef.current = elm}
            {...this.getAttrs(node.attributes)}
            style={this.getStyles()}
            className={this.props.className}
        >
              {[ ...node.children ].map( (child, id) => {
                const {tagName: Tag, attributes} = child
                return  <Tag {...this.getAttrs(attributes)} key = {id} style={{fill: "currentColor"}}/>
              })}
        </svg>
    )

    ;
  }
}

Icon.defaultProps = {
  icon: "",
  size: 'md',
  color: "",
  className: {},
  innerRef: React.createRef()
}

Icon.propTypes = {
  icon: propTypes.string.isRequired,
  size: propTypes.oneOf(['xs','sm', 'md', 'lg', 'xl', 'xxl']),
  customSize: propTypes.number,
  color: propTypes.string,
  className: propTypes.oneOfType([propTypes.object, propTypes.string]),
  innerRef: propTypes.object,
  zeroSize: propTypes.bool
}

export default Icon
