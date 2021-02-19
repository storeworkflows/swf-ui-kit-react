import './Step.scss';
import React from 'react';
import PropTypes from "prop-types";
import Icon from '../../Icon/Icon';

class Step extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { icon, iconColor, label, sublabel, hideLabel } = this.props;

        return (
            <div className='step step-container'>
                <div className="step-circle">
                    <div className="step-icon">
                        {icon &&
                            <Icon
                                icon={icon}
                                color={iconColor || 'white'}
                                size="xl"
                            />
                        }
                    </div>
                </div>
                <div className="step-label">
                    <span>{!hideLabel && label}</span>
                    <span className="sublabel">{!hideLabel && sublabel}</span>
                </div>
            </div>
        )
    }
}

Step.propTypes = {
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    label: PropTypes.string,
    sublabel: PropTypes.string,
    hideLabel: PropTypes.bool
};

Step.defaultProps = {
    icon: '',
    iconColor: '',
    label: '',
    sublabel: '',
    hideLabel: false
};

export default Step;