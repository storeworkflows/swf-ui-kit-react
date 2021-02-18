import * as React from "react";
import propTypes from "prop-types";

import {generateSvg, setSize} from './utils'

class Icon extends React.Component {

  render () {
    const {size, customSize} = this.props;

    return (
        <span
            dangerouslySetInnerHTML={{__html: generateSvg(this.props) }}
            style={setSize(size, customSize)}
        />
    );
  }
}

Icon.defaultProps = {
  icon: "",
  size: 'md',
  customSize: 16,
  color: ""
}

Icon.propTypes = {
  icon: propTypes.string.isRequired,
  size: propTypes.oneOf(['xs','sm', 'md', 'lg', 'xl', 'xxl']),
  customSize: propTypes.number,
  color: propTypes.string
}

export default Icon
