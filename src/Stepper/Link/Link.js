import React from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";

class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { beforeSelected, vertical } = this.props;

        return (
            <div className={classnames({
                'link': true,
                'link-container': true,
                '--vertical': vertical
            })}
            >
                <div
                    className={classnames({
                        'link-strip': true,
                        '--before-selected': beforeSelected
                    })}
                />
            </div>
        );
    }
}

Link.propTypes = {
    beforeSelected : PropTypes.bool,
    vertical: PropTypes.bool
};

Link.defaultProps = {
    beforeSelected : false,
    vertical: false
};

export default Link;