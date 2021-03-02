import * as React from "react";
import propTypes from "prop-types";

import {generateSvg, setSize} from './utils'

class Icon extends React.Component {

  render () {
    const {size, customSize} = this.props;

    return (
        <span
            ref={elm => this.props.innerRef.current = elm}
            className={this.props.className}
            dangerouslySetInnerHTML={{__html: generateSvg(this.props) }}
            style={setSize(size, customSize)}
        />
    );
  }
}

Icon.defaultProps = {
  icon: "",
  size: 'md',
  color: "",
  className: "",
  innerRef: React.createRef()
}

Icon.propTypes = {
  icon: propTypes.string.isRequired,
  size: propTypes.oneOf(['xs','sm', 'md', 'lg', 'xl', 'xxl']),
  customSize: propTypes.number,
  color: propTypes.string,
  className: propTypes.string,
  innerRef: propTypes.object

}

export default Icon
