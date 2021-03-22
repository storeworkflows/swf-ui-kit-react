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
        const { step, iconColor, iconSize, hideLabel } = this.props;

        return (
            <div className='step-container'>
                <div className="step-body">
                    {/*<div className="step-line --before"/>*/}
                    <div
                        className={classnames({
                            'step-circle': true,
                            [`--${step.progress}`]: step.progress
                        })}
                    >
                        <div className="step-icon">
                            {step.icon &&
                            <Icon
                                icon={step.icon}
                                color={iconColor || 'white'}
                                size={iconSize}
                                customSize={typeof iconSize === 'number' ? iconSize : undefined}
                            />
                            }
                        </div>
                    </div>
                    <div className="step-line --after"/>
                </div>
                <div className="step-label">
                    <span>{!hideLabel && step.label}</span>
                    <span className="step-sublabel">{!hideLabel && step.sublabel}</span>
                </div>
            </div>
        )
    }
}

Step.propTypes = {
    step: PropTypes.object,
    iconColor: PropTypes.string,
    iconSize: PropTypes.string,
    hideLabel: PropTypes.bool
};

Step.defaultProps = {
    step: {
        id: '',
        icon: '',
        label:  ''
    },
    iconColor: 'white',
    iconSize: 'sm',
    hideLabel: false
};

export default Step;