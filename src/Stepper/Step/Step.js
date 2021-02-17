import './Step.scss';
import React from 'react';
import PropTypes from "prop-types";
import Icon from '../../Icon/Icon';

class Step extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="step step-container">
                <div className="step-circle">
                    <div className="step-icon">
                        <Icon
                            icon={this.props.icon}
                            color="white"
                            size="xl"
                        />
                    </div>
                </div>
                <div className="step-label">
                    <span>{this.props.label}</span>
                </div>
            </div>
        )
    }
}

Step.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string
}

export default Step;