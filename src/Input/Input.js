import * as React from "react";
import styles from "./styles.css";
import propTypes from "prop-types";

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <style type="text/css">{styles}</style>
                <input placeholder={this.props.placeholder} className="form-control"/>
            </>
        )
    }
}

Input.propTypes = {
    placeholder: propTypes.string
}

Input.defaultProps = {
    placeholder: ""
}

export default Input

