import './Step.scss';
import React from 'react';
import classnames from 'classnames';
import PropTypes from "prop-types";
import Icon from '../../Icon/Icon';

class Step extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { icon, iconColor, label, sublabel, progress, hideLabel } = this.props;

        return (
            <div className='step step-container'>
                <div
                    className={classnames({
                        'step-circle': true,
                        [`--${progress}`]: progress
                    })}
                >
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
    progress: PropTypes.string,
    hideLabel: PropTypes.bool
};

Step.defaultProps = {
    icon: '',
    iconColor: '',
    label: '',
    sublabel: '',
    progress: '',
    hideLabel: false
};

export default Step;