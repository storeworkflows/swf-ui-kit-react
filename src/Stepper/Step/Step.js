import './Step.scss';
import React from 'react';
import PropTypes from "prop-types";
import Icon from '../../Icon/Icon';

class Step extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { icon, iconColor, label, hideLabel } = this.props;

        return (
            <div className='step step-container'>
                <div className="step-circle">
                    <div className="step-icon">
                        <Icon
                            icon={icon}
                            color={iconColor || 'white'}
                            size="xl"
                        />
                    </div>
                </div>
                <div className="step-label">
                    <span>{!hideLabel && label}</span>
                </div>
            </div>
        )
    }
}

Step.propTypes = {
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    label: PropTypes.string,
    hideLabel: PropTypes.bool
};

Step.defaultProps = {
    icon: '',
    iconColor: '',
    label: '',
    hideLabel: false
};

export default Step;