import React from 'react';
import classnames from 'classnames';
import PropTypes from "prop-types";
import Icon from '../Icon/Icon';

const Step = React.forwardRef((props, ref) => {
    const {step, iconColor, hideLabel} = props;

    return (
        <div className='step-container' ref={ref}>
            <div className="step-body">
                <div className="step-line --before"/>
                <svg
                    viewBox="0 0 16 16"
                    className={classnames({
                        'step-circle': true,
                        [`--${step.progress}`]: step.progress
                    })}
                >
                    <circle
                        cx="50%" cy="50%" r="50%"
                        className={classnames({
                            [`--${step.progress}`]: step.progress
                        })}

                    />
                    <foreignObject x="25.25%" y="0" height="100%" width="50%">
                        <div className="step-icon">
                            {step.icon &&
                            <Icon
                                icon={step.icon}
                                color={iconColor || 'white'}
                                zeroSize
                            />
                            }
                        </div>
                    </foreignObject>
                </svg>
                <div className="step-line --after"/>
            </div>
            <div className="step-label">
                <span>{!hideLabel && step.label}</span>
                <span className="step-sublabel">{!hideLabel && step.sublabel}</span>
            </div>
        </div>
    )
})

Step.propTypes = {
    step: PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string, PropTypes.number
        ]),
        icon: PropTypes.string,
        label: PropTypes.string,
        sublabel: PropTypes.string,
        progress: PropTypes.oneOf(["none", "partial", "done"]),
        disabled: PropTypes.bool
    }),
    iconColor: PropTypes.string,
    iconSize: PropTypes.string,
    hideLabel: PropTypes.bool
};

Step.defaultProps = {
    step: {
        id: '',
        icon: '',
        label: ''
    },
    iconColor: 'white',
    iconSize: 'sm',
    hideLabel: false
};

export default Step;