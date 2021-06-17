import React from 'react';
import classnames from 'classnames';
import PropTypes from "prop-types";
import Icon from '../Icon/Icon';
import isEqual from "react-fast-compare";

const Step = React.forwardRef((props, ref) => {
    const {step: {progress, icon, label, sublabel}, iconColor, hideLabel} = props;

    return (
        <div className='step-container' ref={ref}>
            <div className="step-body">
                <div className="step-line --before"/>
                <svg
                    viewBox="0 0 16 16"
                    className={classnames({
                        'step-circle': true,
                        [`--${progress}`]: progress
                    })}
                >
                    <circle
                        cx="50%" cy="50%" r="50%"
                        className={classnames({
                            [`--${progress}`]: progress
                        })}

                    />
                    <foreignObject x="25.25%" y="0" height="100%" width="50%">
                        <div className="step-icon">
                            {icon &&
                            <Icon
                                icon={icon}
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
                <span>{!hideLabel && label}</span>
                <span className="step-sublabel">{!hideLabel && sublabel}</span>
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

export default React.memo(Step, (prev, next) => {
    return isEqual(prev, next);
});