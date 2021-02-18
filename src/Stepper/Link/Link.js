import React from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";

class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { beforeSelected } = this.props;

        return (
            <div className="link link-container">
                <div className="link-wrapper">
                    <div
                        className={classnames({
                            'link-strip': true,
                            '--before-selected': beforeSelected
                        })}
                    />
                </div>
            </div>
        );
    }
}

Link.PropTypes = {
    beforeSelected : PropTypes.bool
}

export default Link;