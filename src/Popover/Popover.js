import * as React from "react";
import propTypes from "prop-types";

import styles from "../Toggle/style.scss";

class Popover extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <style type="text/css">{styles}</style>
            </>
        );
    }
}

Popover.defaultProps = {

}

Popover.propTypes = {

}

export default Popover